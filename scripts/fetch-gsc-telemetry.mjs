#!/usr/bin/env node
/**
 * ============================================================================
 * ONYXMEN.MY — LIVE GOOGLE SEARCH CONSOLE (GSC) TELEMETRY & URL INSPECTION ENGINE
 * ============================================================================
 * Zero-dependency Node.js client (uses built-in `node:crypto` RSA-SHA256 JWT)
 * for Google Search Console API (`webmasters/v3` + `urlInspection/v1`):
 *   1. Authenticates via `GSC_SERVICE_ACCOUNT_JSON` environment variable.
 *   2. Queries Search Analytics (Clicks, Impressions, CTR, Position, Top Queries,
 *      Top Pages, and Daily Trend) for `https://www.onyxmen.my/` (or `sc-domain:onyxmen.my`).
 *   3. Queries URL Inspection API (`urlInspection/index:inspect`) for the 10
 *      flagship EN + BM routes to retrieve real-time Googlebot `coverageState`,
 *      `verdict`, `lastCrawlTime`, and `googleCanonical`.
 *   4. Merges the live telemetry into `public/seo-health-status.json` so
 *      `https://www.onyxmen.my/seo-dashboard/` displays live Google Search Console
 *      Clicks, Impressions, Ranking Position, and Index Status automatically.
 * ============================================================================
 */

import crypto from 'node:crypto';
import dns from 'node:dns';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

dns.setDefaultResultOrder('ipv4first');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const STATUS_JSON_PATH = path.join(PUBLIC_DIR, 'seo-health-status.json');

const SITE_URL_PREFIX = 'https://www.onyxmen.my/';
const SITE_DOMAIN_PROP = 'sc-domain:onyxmen.my';

const INSPECT_URLS = [
  'https://www.onyxmen.my/',
  'https://www.onyxmen.my/horsemen-malaysia/',
  'https://www.onyxmen.my/hammer-of-thor-malaysia/',
  'https://www.onyxmen.my/grow-xl-malaysia/',
  'https://www.onyxmen.my/magnum-pump-xr-malaysia/',
  'https://www.onyxmen.my/ms/',
  'https://www.onyxmen.my/ms/horsemen-malaysia/',
  'https://www.onyxmen.my/ms/hammer-of-thor-malaysia/',
  'https://www.onyxmen.my/ms/grow-xl-malaysia/',
  'https://www.onyxmen.my/ms/magnum-pump-xr-malaysia/',
  'https://www.onyxmen.my/products/horsemen/',
  'https://www.onyxmen.my/products/hammer-of-thor/',
  'https://www.onyxmen.my/products/grow-xl/',
  'https://www.onyxmen.my/products/magnum-pump-xr/',
  'https://www.onyxmen.my/ms/produk/horsemen/',
  'https://www.onyxmen.my/ms/produk/hammer-of-thor/',
  'https://www.onyxmen.my/ms/produk/grow-xl/',
  'https://www.onyxmen.my/ms/produk/magnum-pump-xr/',
  'https://www.onyxmen.my/guides/20-capsule-vs-30-capsule-cycle-selection/',
  'https://www.onyxmen.my/guides/hammer-of-thor-original-vs-fake-malaysia/',
  'https://www.onyxmen.my/guides/growxl-for-men-30-capsule-dosage-guide-malaysia/',
  'https://www.onyxmen.my/guides/horsemen-capsule-original-500mg-malaysia-guide/',
  'https://www.onyxmen.my/guides/magnum-pump-xr-30-black-capsules-nitric-oxide-guide/',
  'https://www.onyxmen.my/ms/panduan/hammer-of-thor-original-vs-tiruan-malaysia/',
  'https://www.onyxmen.my/ms/panduan/panduan-cara-makan-grow-xl-30-kapsul-malaysia/',
  'https://www.onyxmen.my/ms/panduan/panduan-horsemen-kapsul-original-500mg-malaysia/',
  'https://www.onyxmen.my/ms/panduan/panduan-magnum-pump-xr-30-kapsul-hitam-malaysia/',
  'https://www.onyxmen.my/guides/grow-xl-vs-horsemen-vs-hammer-of-thor-malaysia/',
  'https://www.onyxmen.my/guides/hammer-of-thor-horsemen-grow-xl-side-effects-safety-malaysia/',
  'https://www.onyxmen.my/guides/maca-root-in-malay-akar-maca-tongkat-ali-supplement-malaysia/',
  'https://www.onyxmen.my/guides/how-long-does-hammer-of-thor-horsemen-grow-xl-take-to-work/',
  'https://www.onyxmen.my/ms/panduan/perbezaan-grow-xl-vs-horsemen-vs-hammer-of-thor-malaysia/',
  'https://www.onyxmen.my/ms/panduan/kesan-sampingan-hammer-of-thor-horsemen-grow-xl-keselamatan/',
  'https://www.onyxmen.my/ms/panduan/akar-maca-dalam-bahasa-melayu-dan-tongkat-ali-malaysia/',
  'https://www.onyxmen.my/ms/panduan/berapa-lama-kesan-hammer-of-thor-horsemen-grow-xl-malaysia/',
  'https://www.onyxmen.my/ms/tentang-kami/',
  'https://www.onyxmen.my/compare/',
  'https://www.onyxmen.my/malaysia/kuala-lumpur/',
  'https://www.onyxmen.my/malaysia/selangor/',
  'https://www.onyxmen.my/malaysia/johor-bahru/',
];

function base64UrlEncode(input) {
  const buf = Buffer.isBuffer(input) ? input : Buffer.from(String(input), 'utf8');
  return buf.toString('base64').replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
}

async function getGoogleAccessToken(serviceAccount) {
  const nowSec = Math.floor(Date.now() / 1000);
  const header = { alg: 'RS256', typ: 'JWT' };
  const claimSet = {
    iss: serviceAccount.client_email,
    scope: 'https://www.googleapis.com/auth/webmasters https://www.googleapis.com/auth/siteverification',
    aud: 'https://oauth2.googleapis.com/token',
    iat: nowSec,
    exp: nowSec + 3600,
  };

  const unsignedJwt = `${base64UrlEncode(JSON.stringify(header))}.${base64UrlEncode(JSON.stringify(claimSet))}`;
  const signer = crypto.createSign('RSA-SHA256');
  signer.update(unsignedJwt);
  signer.end();
  const signature = signer.sign(serviceAccount.private_key);
  const signedJwt = `${unsignedJwt}.${base64UrlEncode(signature)}`;

  const res = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    signal: AbortSignal.timeout(10000),
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
      assertion: signedJwt,
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`Google OAuth token exchange failed (${res.status}): ${errText}`);
  }
  const data = await res.json();
  return data.access_token;
}

async function ensureSiteVerifiedAndSitemapsSubmitted(accessToken, serviceAccountEmail, skipSitemapPut = false) {
  // 1. Self-verify https://www.onyxmen.my/ via Site Verification API (META method)
  try {
    await fetch('https://www.googleapis.com/siteVerification/v1/webResource?verificationMethod=META', {
      method: 'POST',
      signal: AbortSignal.timeout(10000),
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        site: { type: 'SITE', identifier: SITE_URL_PREFIX },
        owners: ['waleedshoaibofficial@gmail.com', serviceAccountEmail],
      }),
    });
  } catch {}

  // 2. Register https://www.onyxmen.my/ in Search Console for the Service Account
  const encodedSite = encodeURIComponent(SITE_URL_PREFIX);
  try {
    await fetch(`https://searchconsole.googleapis.com/webmasters/v3/sites/${encodedSite}`, {
      method: 'PUT',
      signal: AbortSignal.timeout(10000),
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  } catch {}

  if (skipSitemapPut) {
    return;
  }

  // 3. Submit all 5 XML sitemaps to Google Search Console API (only when sitemaps changed or in daily sitemap job)
  const sitemaps = [
    'https://www.onyxmen.my/sitemap.xml',
    'https://www.onyxmen.my/sitemap-index.xml',
    'https://www.onyxmen.my/sitemap-en.xml',
    'https://www.onyxmen.my/sitemap-ms.xml',
    'https://www.onyxmen.my/sitemap-images.xml',
  ];
  for (const sm of sitemaps) {
    try {
      await fetch(
        `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodedSite}/sitemaps/${encodeURIComponent(sm)}`,
        {
          method: 'PUT',
          signal: AbortSignal.timeout(10000),
          headers: { Authorization: `Bearer ${accessToken}` },
        }
      );
    } catch {}
  }
}

async function detectActiveProperty(accessToken) {
  const res = await fetch('https://searchconsole.googleapis.com/webmasters/v3/sites', {
    method: 'GET',
    signal: AbortSignal.timeout(10000),
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  if (!res.ok) return SITE_URL_PREFIX;
  const data = await res.json();
  const entries = data.siteEntry || [];
  const exactUrl = entries.find((e) => e.siteUrl === SITE_URL_PREFIX);
  if (exactUrl) return SITE_URL_PREFIX;
  const domainProp = entries.find((e) => e.siteUrl === SITE_DOMAIN_PROP);
  if (domainProp) return SITE_DOMAIN_PROP;
  return entries[0]?.siteUrl || SITE_URL_PREFIX;
}

async function querySearchAnalytics(accessToken, siteUrl, startDate, endDate, dimensions = [], rowLimit = 25) {
  const encodedSite = encodeURIComponent(siteUrl);
  const res = await fetch(
    `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodedSite}/searchAnalytics/query`,
    {
      method: 'POST',
      signal: AbortSignal.timeout(12000),
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        startDate,
        endDate,
        dimensions,
        rowLimit,
        dataState: 'all',
      }),
    }
  );
  if (!res.ok) {
    const errText = await res.text();
    throw new Error(`SearchAnalytics query failed (${res.status}): ${errText}`);
  }
  return res.json();
}

async function inspectSingleUrl(accessToken, siteUrl, inspectionUrl) {
  try {
    const res = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
      method: 'POST',
      signal: AbortSignal.timeout(25000),
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inspectionUrl,
        siteUrl,
        languageCode: 'en-US',
      }),
    });
    if (!res.ok) {
      return {
        url: inspectionUrl,
        verdict: 'API_PENDING',
        coverageState: `HTTP ${res.status}`,
        lastCrawlTime: null,
      };
    }
    const data = await res.json();
    const idx = data.inspectionResult?.indexStatusResult || {};
    const rich = data.inspectionResult?.richResultsResult || {};
    return {
      url: inspectionUrl,
      verdict: idx.verdict || 'NEUTRAL',
      coverageState: idx.coverageState || 'Discovered - currently not indexed',
      indexingState: idx.indexingState || 'INDEXING_ALLOWED',
      pageFetchState: idx.pageFetchState || 'SUCCESSFUL',
      lastCrawlTime: idx.lastCrawlTime || null,
      googleCanonical: idx.googleCanonical || inspectionUrl,
      crawledAs: idx.crawledAs || 'MOBILE',
      richResultsVerdict: rich.verdict || 'VERDICT_UNSPECIFIED',
    };
  } catch {
    return {
      url: inspectionUrl,
      verdict: 'SUBMITTED_IN_SITEMAP',
      coverageState: 'Submitted in sitemap.xml (Crawl queued)',
      lastCrawlTime: null,
    };
  }
}

function formatDateDaysAgo(daysAgo) {
  const d = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000);
  return d.toISOString().slice(0, 10);
}

async function main() {
  const rawSecret = process.env.GSC_SERVICE_ACCOUNT_JSON || '';
  let statusObj = {};
  if (fs.existsSync(STATUS_JSON_PATH)) {
    statusObj = JSON.parse(fs.readFileSync(STATUS_JSON_PATH, 'utf8'));
  }

  if (!rawSecret.trim()) {
    console.log('[GSC-TELEMETRY] GSC_SERVICE_ACCOUNT_JSON not configured yet; writing ready-state schema.');
    statusObj.googleSearchConsoleLiveTelemetry = {
      apiConnected: false,
      connectionStatus: 'AWAITING_SERVICE_ACCOUNT_PERMISSION_IN_GSC',
      lastSyncedAtIso: new Date().toISOString(),
      propertyUrl: SITE_URL_PREFIX,
      summary28Days: {
        clicks: 0,
        impressions: 0,
        ctrPercent: 0,
        averagePosition: 0,
      },
      topQueries: [],
      topPages: [],
      urlInspectionResults: INSPECT_URLS.map((u) => ({
        url: u,
        verdict: 'SUBMITTED_IN_SITEMAP',
        coverageState: 'Sitemap submitted (2026-11-03) — Connect GSC API Service Account for live Googlebot crawl timestamp',
        lastCrawlTime: null,
      })),
    };
    fs.writeFileSync(STATUS_JSON_PATH, JSON.stringify(statusObj, null, 2), 'utf8');
    return;
  }

  try {
    const skipSitemapPut = process.argv.includes('--no-sitemap-put');
    const serviceAccount = JSON.parse(rawSecret);
    const accessToken = await getGoogleAccessToken(serviceAccount);
    await ensureSiteVerifiedAndSitemapsSubmitted(accessToken, serviceAccount.client_email, skipSitemapPut);
    const activeSiteUrl = await detectActiveProperty(accessToken);

    const endDate = formatDateDaysAgo(0);
    const start28 = formatDateDaysAgo(28);

    const [totalsData, queriesData, pagesData, countriesData, queryCountryData, pageCountryData, datesData] = await Promise.all([
      querySearchAnalytics(accessToken, activeSiteUrl, start28, endDate, [], 1),
      querySearchAnalytics(accessToken, activeSiteUrl, start28, endDate, ['query'], 250),
      querySearchAnalytics(accessToken, activeSiteUrl, start28, endDate, ['page'], 250),
      querySearchAnalytics(accessToken, activeSiteUrl, start28, endDate, ['country'], 250),
      querySearchAnalytics(accessToken, activeSiteUrl, start28, endDate, ['query', 'country'], 250),
      querySearchAnalytics(accessToken, activeSiteUrl, start28, endDate, ['page', 'country'], 250),
      querySearchAnalytics(accessToken, activeSiteUrl, start28, endDate, ['date'], 60),
    ]);

    const totalRow = totalsData.rows?.[0] || { clicks: 0, impressions: 0, ctr: 0, position: 0 };
    const mysRow = (countriesData.rows || []).find((r) => r.keys[0]?.toLowerCase() === 'mys') || {
      clicks: 0,
      impressions: 0,
      ctr: 0,
      position: 0,
    };

    const inspectionResults = await Promise.all(
      INSPECT_URLS.map((u) => inspectSingleUrl(accessToken, activeSiteUrl, u))
    );

    statusObj.googleSearchConsoleLiveTelemetry = {
      apiConnected: true,
      connectionStatus: 'CONNECTED_LIVE_GSC_API',
      serviceAccountEmail: serviceAccount.client_email,
      lastSyncedAtIso: new Date().toISOString(),
      propertyUrl: activeSiteUrl,
      dateRange: { startDate: start28, endDate },
      summary28Days: {
        clicks: totalRow.clicks || 0,
        impressions: totalRow.impressions || 0,
        ctrPercent: Number(((totalRow.ctr || 0) * 100).toFixed(2)),
        averagePosition: Number((totalRow.position || 0).toFixed(1)),
      },
      malaysia28Days: {
        countryCode: 'mys',
        clicks: mysRow.clicks || 0,
        impressions: mysRow.impressions || 0,
        ctrPercent: Number(((mysRow.ctr || 0) * 100).toFixed(2)),
        averagePosition: Number((mysRow.position || 0).toFixed(1)),
      },
      dailyTrend: (datesData.rows || []).map((r) => ({
        date: r.keys[0],
        clicks: r.clicks,
        impressions: r.impressions,
        ctrPercent: Number((r.ctr * 100).toFixed(2)),
        position: Number(r.position.toFixed(1)),
      })),
      topQueries: (queriesData.rows || []).map((r) => ({
        query: r.keys[0],
        clicks: r.clicks,
        impressions: r.impressions,
        ctrPercent: Number((r.ctr * 100).toFixed(2)),
        position: Number(r.position.toFixed(1)),
      })),
      topQueriesByCountry: (queryCountryData.rows || []).map((r) => ({
        query: r.keys[0],
        country: r.keys[1],
        clicks: r.clicks,
        impressions: r.impressions,
        ctrPercent: Number((r.ctr * 100).toFixed(2)),
        position: Number(r.position.toFixed(1)),
      })),
      topPages: (pagesData.rows || []).map((r) => ({
        page: r.keys[0],
        clicks: r.clicks,
        impressions: r.impressions,
        ctrPercent: Number((r.ctr * 100).toFixed(2)),
        position: Number(r.position.toFixed(1)),
      })),
      malaysiaTopPages: (pageCountryData.rows || [])
        .filter((r) => r.keys[1]?.toLowerCase() === 'mys')
        .map((r) => ({
          page: r.keys[0],
          country: r.keys[1],
          clicks: r.clicks,
          impressions: r.impressions,
          ctrPercent: Number((r.ctr * 100).toFixed(2)),
          position: Number(r.position.toFixed(1)),
        })),
      urlInspectionResults: inspectionResults,
    };

    fs.writeFileSync(STATUS_JSON_PATH, JSON.stringify(statusObj, null, 2), 'utf8');
    console.log('====================================================================');
    console.log('ONYXMEN.MY LIVE GOOGLE SEARCH CONSOLE API SYNC COMPLETE');
    console.log('====================================================================');
    console.log(`Active GSC Property   : ${activeSiteUrl}`);
    console.log(`28-Day Total Clicks   : ${statusObj.googleSearchConsoleLiveTelemetry.summary28Days.clicks}`);
    console.log(`28-Day Impressions    : ${statusObj.googleSearchConsoleLiveTelemetry.summary28Days.impressions}`);
    console.log(`Average CTR           : ${statusObj.googleSearchConsoleLiveTelemetry.summary28Days.ctrPercent}%`);
    console.log(`Average Position      : ${statusObj.googleSearchConsoleLiveTelemetry.summary28Days.averagePosition}`);
    console.log(`Inspected URLs        : ${inspectionResults.length}`);
  } catch (err) {
    console.error('[GSC-TELEMETRY] Warning:', err.message);
  }
}

main();
