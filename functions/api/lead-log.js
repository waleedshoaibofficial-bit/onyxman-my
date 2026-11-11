/**
 * ============================================================================
 * ONYXMEN.MY — 24/7 SERVERLESS CLOUD ORDER & WHATSAPP LEAD TELEMETRY BRIDGE
 * Route: /api/lead-log (Cloudflare Pages Function)
 * ============================================================================
 * Persists every real Express Order Form submission (#ONX-XXXX) and every
 * WhatsApp Concierge button click (#WA-XXXX -> +60 14-298 5919) into the
 * private `leads-telemetry` branch (`leads-ledger.json`) of
 * `waleedshoaibofficial-bit/onyxman-my` so live orders and leads can be
 * audited via API at any time without disturbing `main` or triggering builds.
 * ============================================================================
 */

const REPO_API_URL =
  'https://api.github.com/repos/waleedshoaibofficial-bit/onyxman-my/contents/leads-ledger.json';
const TELEMETRY_BRANCH = 'leads-telemetry';

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Cache-Control': 'no-store',
};

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

export async function onRequestGet(context) {
  const hasToken = Boolean(context.env && context.env.GH_LEADS_TOKEN);
  return new Response(
    JSON.stringify({
      status: 'ACTIVE',
      service: 'ONYXMEN Malaysia 24/7 Cloud Lead & Order Telemetry Bridge',
      telemetryConnected: hasToken,
      timestampIso: new Date().toISOString(),
    }),
    {
      status: 200,
      headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
    }
  );
}

export async function onRequestPost(context) {
  try {
    const token = context.env && context.env.GH_LEADS_TOKEN;
    if (!token) {
      return new Response(
        JSON.stringify({ ok: false, reason: 'GH_LEADS_TOKEN_NOT_SET' }),
        {
          status: 200,
          headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
        }
      );
    }

    const body = await context.request.json();
    const rawType = String(body.type || 'WHATSAPP_CLICK').toUpperCase();
    const isTestPing = rawType === 'SYSTEM_DIAGNOSTIC';

    const entry = {
      id: String(body.refCode || (rawType === 'FORM_ORDER' ? '#ONX-0000' : '#WA-0000')).slice(0, 40),
      type: rawType === 'FORM_ORDER' ? 'FORM_ORDER' : 'WHATSAPP_CLICK',
      formula: String(body.formula || 'HORSEMEN x 1').slice(0, 200),
      totalMyr: String(body.totalMyr || 'RM 159').slice(0, 80),
      triggerSource: String(body.triggerSource || 'website').slice(0, 80),
      customerName: String(body.customerName || '').slice(0, 120),
      customerPhone: String(body.customerPhone || '').slice(0, 60),
      customerAddress: String(body.customerAddress || '').slice(0, 280),
      pageUrl: String(body.pageUrl || 'https://www.onyxmen.my/').slice(0, 240),
      referrer: String(body.referrer || 'Direct / Google Search').slice(0, 240),
      mytTimestamp: String(body.mytTimestamp || new Date().toISOString()).slice(0, 80),
      recordedAtUtc: new Date().toISOString(),
      countryEdge: (context.request.cf && context.request.cf.country) || 'MY',
      cityEdge: (context.request.cf && context.request.cf.city) || '',
    };

    if (isTestPing) {
      return new Response(
        JSON.stringify({ ok: true, diagnostic: true, entry }),
        {
          status: 200,
          headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
        }
      );
    }

    const ghHeaders = {
      Authorization: `Bearer ${token}`,
      Accept: 'application/vnd.github+json',
      'User-Agent': 'Onyxmen-Cloud-Lead-Telemetry-Worker',
      'Content-Type': 'application/json',
    };

    const getRes = await fetch(`${REPO_API_URL}?ref=${TELEMETRY_BRANCH}`, {
      method: 'GET',
      headers: ghHeaders,
    });

    let ledger = {
      schemaVersion: '1.0',
      site: 'https://www.onyxmen.my',
      createdAtUtc: new Date().toISOString(),
      totalFormOrders: 0,
      totalWhatsappClicks: 0,
      entries: [],
    };
    let existingSha = undefined;

    if (getRes.ok) {
      const fileData = await getRes.json();
      existingSha = fileData.sha;
      const decoded = atob(String(fileData.content || '').replace(/\s+/g, ''));
      const utf8Str = new TextDecoder().decode(
        Uint8Array.from(decoded, (c) => c.charCodeAt(0))
      );
      ledger = JSON.parse(utf8Str);
    }

    if (entry.type === 'FORM_ORDER') {
      ledger.totalFormOrders = (Number(ledger.totalFormOrders) || 0) + 1;
    } else {
      ledger.totalWhatsappClicks = (Number(ledger.totalWhatsappClicks) || 0) + 1;
    }
    ledger.lastUpdatedAtUtc = new Date().toISOString();
    ledger.entries = [entry, ...(Array.isArray(ledger.entries) ? ledger.entries : [])].slice(0, 500);

    const encodedBytes = new TextEncoder().encode(JSON.stringify(ledger, null, 2));
    let binary = '';
    for (let i = 0; i < encodedBytes.length; i += 1) {
      binary += String.fromCharCode(encodedBytes[i]);
    }
    const base64Content = btoa(binary);

    const putPayload = {
      message: `[LEAD-LOG] ${entry.type} ${entry.id} (${entry.totalMyr})`,
      content: base64Content,
      branch: TELEMETRY_BRANCH,
    };
    if (existingSha) {
      putPayload.sha = existingSha;
    }

    const putRes = await fetch(REPO_API_URL, {
      method: 'PUT',
      headers: ghHeaders,
      body: JSON.stringify(putPayload),
    });

    return new Response(
      JSON.stringify({ ok: putRes.ok, id: entry.id, type: entry.type }),
      {
        status: 200,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: String(err && err.message ? err.message : err) }),
      {
        status: 200,
        headers: { ...CORS_HEADERS, 'Content-Type': 'application/json' },
      }
    );
  }
}
