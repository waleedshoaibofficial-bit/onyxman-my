#!/usr/bin/env node
/**
 * ONYXMAN.MY — 24/7 CLOUD HEALTH, <800ms TTFB & EXPRESS ORDER BRIDGE MONITOR (MS-195B)
 *
 * Audits https://onyxman.my/ and all 4 flagship product URLs:
 *   - / (Homepage & Flagship Apothecary Vault)
 *   - /horsemen-malaysia/ (Horsemen — 20 Capsules x 500mg)
 *   - /hammer-of-thor-malaysia/ (Hammer of Thor — 20 Veg. Capsules)
 *   - /grow-xl-malaysia/ (Grow XL — 30 Capsules)
 *   - /magnum-pump-xr-malaysia/ (Magnum Pump XR — 30 Black Capsules)
 *   (Plus Bahasa Melayu counterparts & /products/* routes)
 *
 * Verifies on every target:
 *   1. HTTP 200 status (--live) / Non-empty built HTML artifact (--dry-run)
 *   2. < 800ms TTFB (--live) / Inline Critical CSS & Hero WebP Preload (--dry-run)
 *   3. Valid @graph JSON-LD structured data presence & clean JSON parsing
 *   4. RM 159 (1B) / RM 318 (2B) / RM 477 (3B) & 159.00 MYR pricing integrity
 *   5. waleedshoaibofficial@gmail.com Express Order Drawer endpoint & sales@onyxman.my routing
 */

import fs from 'node:fs';
import path from 'node:path';
import { performance } from 'node:perf_hooks';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

const SITE_ORIGIN = process.env.SITE_DOMAIN || 'https://www.onyxmen.my';
const TTFB_BUDGET_MS = Number(process.env.TTFB_BUDGET_MS || 800);
const PRIMARY_ORDER_EMAIL = 'waleedshoaibofficial@gmail.com';
const EXPECTED_FORMSUBMIT_ENDPOINT = `https://formsubmit.co/ajax/${PRIMARY_ORDER_EMAIL}`;
const BRAND_SALES_EMAIL = 'sales@onyxman.my';
const BRAND_INFO_EMAIL = 'info@onyxman.my';

const MONITOR_TARGETS = [
  {
    id: 'home-en',
    label: 'Homepage Vault (EN-MY)',
    route: '/',
    localFile: 'index.html',
    expectedTitleToken: 'Onyxman Malaysia',
  },
  {
    id: 'horsemen-en',
    label: 'Horsemen Flagship (EN-MY)',
    route: '/horsemen-malaysia/',
    localFile: 'horsemen-malaysia/index.html',
    expectedTitleToken: 'Horsemen',
  },
  {
    id: 'hammer-of-thor-en',
    label: 'Hammer of Thor Flagship (EN-MY)',
    route: '/hammer-of-thor-malaysia/',
    localFile: 'hammer-of-thor-malaysia/index.html',
    expectedTitleToken: 'Hammer of Thor',
  },
  {
    id: 'grow-xl-en',
    label: 'Grow XL Flagship (EN-MY)',
    route: '/grow-xl-malaysia/',
    localFile: 'grow-xl-malaysia/index.html',
    expectedTitleToken: 'Grow XL',
  },
  {
    id: 'magnum-pump-xr-en',
    label: 'Magnum Pump XR Flagship (EN-MY)',
    route: '/magnum-pump-xr-malaysia/',
    localFile: 'magnum-pump-xr-malaysia/index.html',
    expectedTitleToken: 'Magnum Pump XR',
  },
  {
    id: 'home-ms',
    label: 'Homepage Vault (MS-MY)',
    route: '/ms/',
    localFile: 'ms/index.html',
    expectedTitleToken: 'Onyxman Malaysia',
  },
  {
    id: 'horsemen-ms',
    label: 'Horsemen Flagship (MS-MY)',
    route: '/ms/horsemen-malaysia/',
    localFile: 'ms/horsemen-malaysia/index.html',
    expectedTitleToken: 'Horsemen',
  },
  {
    id: 'hammer-of-thor-ms',
    label: 'Hammer of Thor Flagship (MS-MY)',
    route: '/ms/hammer-of-thor-malaysia/',
    localFile: 'ms/hammer-of-thor-malaysia/index.html',
    expectedTitleToken: 'Hammer of Thor',
  },
  {
    id: 'grow-xl-ms',
    label: 'Grow XL Flagship (MS-MY)',
    route: '/ms/grow-xl-malaysia/',
    localFile: 'ms/grow-xl-malaysia/index.html',
    expectedTitleToken: 'Grow XL',
  },
  {
    id: 'magnum-pump-xr-ms',
    label: 'Magnum Pump XR Flagship (MS-MY)',
    route: '/ms/magnum-pump-xr-malaysia/',
    localFile: 'ms/magnum-pump-xr-malaysia/index.html',
    expectedTitleToken: 'Magnum Pump XR',
  },
];

const args = process.argv.slice(2);
const isExplicitLive = args.includes('--live');
const isExplicitDryRun = args.includes('--dry-run');
const isLiveMode = isExplicitLive && !isExplicitDryRun;

const passedChecks = [];
const errors = [];
const telemetryRows = [];

function recordPass(targetId, check, message) {
  passedChecks.push({ targetId, check, message });
}

function recordFail(targetId, check, message) {
  errors.push({ targetId, check, message });
}

/**
 * Audits HTML content of a target route for:
 *  - @graph JSON-LD validity & 159.00 MYR offer schema
 *  - RM 159 / RM 318 / RM 477 pricing integrity
 *  - waleedshoaibofficial@gmail.com Express Order Drawer form endpoint
 *  - <0.8s LCP preload & inline critical CSS readiness
 */
function verifyHtmlDocumentIntegrity(target, htmlContent) {
  const { id, route, expectedTitleToken } = target;

  // 1. Title & Canonical verification
  if (!htmlContent.includes(expectedTitleToken)) {
    recordFail(id, 'HTML-TITLE', `${route} missing expected title token "${expectedTitleToken}"`);
  } else {
    recordPass(id, 'HTML-TITLE', `${route} verified title token "${expectedTitleToken}"`);
  }

  const expectedCanonical1 = `${SITE_ORIGIN}${route}`;
  const expectedCanonical2 = `https://onyxman.my${route}`;
  if (
    !htmlContent.includes(`rel="canonical" href="${expectedCanonical1}"`) &&
    !htmlContent.includes(`rel="canonical" href="${expectedCanonical2}"`)
  ) {
    recordFail(id, 'CANONICAL', `${route} missing canonical href="${expectedCanonical1}"`);
  } else {
    recordPass(id, 'CANONICAL', `${route} verified canonical URL ${expectedCanonical1}`);
  }

  // 2. Sub-Second (<800ms) LCP Preload & Inline Critical CSS verification
  if (!htmlContent.includes('id="onyxman-critical-css"')) {
    recordFail(id, 'CWV-CRITICAL-CSS', `${route} missing inline #onyxman-critical-css`);
  } else {
    recordPass(id, 'CWV-CRITICAL-CSS', `${route} inline critical CSS verified`);
  }

  if (!htmlContent.includes('rel="preload"') || !htmlContent.includes('as="image"')) {
    recordFail(id, 'CWV-LCP-PRELOAD', `${route} missing hero <link rel="preload" as="image">`);
  } else {
    recordPass(id, 'CWV-LCP-PRELOAD', `${route} hero WebP preload tag verified`);
  }

  // 3. Valid @graph JSON-LD Presence & Schema Integrity
  const ldMatches = [
    ...htmlContent.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi),
  ];
  if (ldMatches.length === 0) {
    recordFail(id, 'JSON-LD-PRESENCE', `${route} has 0 <script type="application/ld+json"> blocks`);
  } else {
    let foundValidGraph = false;
    for (const match of ldMatches) {
      try {
        const parsed = JSON.parse(match[1]);
        if (parsed['@context'] === 'https://schema.org' && Array.isArray(parsed['@graph'])) {
          foundValidGraph = true;
          const rawGraph = JSON.stringify(parsed['@graph']);
          if (!rawGraph.includes('"159.00"') || !rawGraph.includes('"MYR"')) {
            recordFail(id, 'JSON-LD-OFFER', `${route} @graph missing "159.00" or "MYR" Offer pricing`);
          } else {
            recordPass(
              id,
              'JSON-LD-GRAPH',
              `${route} @graph JSON-LD valid (${parsed['@graph'].length} nodes, 159.00 MYR verified)`
            );
          }
        }
      } catch (err) {
        recordFail(id, 'JSON-LD-PARSE', `${route} JSON-LD syntax error: ${err.message}`);
      }
    }
    if (!foundValidGraph) {
      recordFail(id, 'JSON-LD-GRAPH', `${route} missing valid @context / @graph array in JSON-LD`);
    }
  }

  // 4. RM 159 Pricing Integrity (RM 159, RM 318, RM 477, 159.00 MYR)
  const requiredPriceTokens = ['RM 159', 'RM 318', 'RM 477', '159.00', 'MYR'];
  for (const token of requiredPriceTokens) {
    if (!htmlContent.includes(token)) {
      recordFail(id, 'PRICING-INTEGRITY', `${route} missing required pricing token "${token}"`);
    }
  }
  recordPass(id, 'PRICING-INTEGRITY', `${route} verified RM 159 / RM 318 / RM 477 (159.00 MYR) pricing integrity`);

  // 5. Express Order Drawer & waleedshoaibofficial@gmail.com Endpoint Configuration
  const requiredOrderDrawerTokens = [
    { label: 'Express Order Drawer Aside', token: 'id="onyxman-express-order-drawer"' },
    { label: 'Express Order Form ID', token: 'id="onyxman-express-order-form"' },
    { label: 'FormSubmit AJAX Endpoint', token: `action="${EXPECTED_FORMSUBMIT_ENDPOINT}"` },
    { label: 'Primary Merchant Email Input', token: `value="${PRIMARY_ORDER_EMAIL}"` },
    { label: 'Brand Sales Alias Input', token: `value="${BRAND_SALES_EMAIL}"` },
    { label: 'Brand Info Alias Input', token: `value="${BRAND_INFO_EMAIL}"` },
    { label: 'Google Calendar Refill Link', token: 'https://calendar.google.com/calendar/render' },
    { label: 'Reverse WhatsApp Bridge Link', token: 'https://wa.me/' },
  ];

  for (const item of requiredOrderDrawerTokens) {
    if (!htmlContent.includes(item.token)) {
      recordFail(
        id,
        'ORDER-DRAWER-ENDPOINT',
        `${route} missing ${item.label} (${item.token})`
      );
    }
  }
  recordPass(
    id,
    'ORDER-DRAWER-ENDPOINT',
    `${route} verified Express Order Drawer -> ${PRIMARY_ORDER_EMAIL}`
  );
}

/**
 * Dry-run verification against built public/ files
 */
function runDryRunAudit() {
  for (const target of MONITOR_TARGETS) {
    const absPath = path.join(PUBLIC_DIR, target.localFile);
    if (!fs.existsSync(absPath)) {
      recordFail(target.id, 'FILE-EXISTS', `Missing built HTML file: public/${target.localFile}`);
      continue;
    }
    const startMs = performance.now();
    const stat = fs.statSync(absPath);
    const htmlContent = fs.readFileSync(absPath, 'utf8');
    const readMs = Number((performance.now() - startMs).toFixed(2));

    if (stat.size < 1000) {
      recordFail(target.id, 'FILE-SIZE', `public/${target.localFile} is unexpectedly small (${stat.size} bytes)`);
      continue;
    }

    recordPass(target.id, 'HTTP-200-SIM', `Verified local artifact public/${target.localFile} (${stat.size} bytes)`);
    verifyHtmlDocumentIntegrity(target, htmlContent);

    telemetryRows.push({
      route: target.route,
      status: 200,
      ttfbMs: `${readMs}ms (local)`,
      bytes: stat.size,
      price: 'RM 159',
      endpoint: PRIMARY_ORDER_EMAIL,
    });
  }
}

/**
 * Live cloud HTTP verification against https://onyxman.my
 */
async function runLiveCloudAudit() {
  for (const target of MONITOR_TARGETS) {
    const url = `${SITE_ORIGIN}${target.route}`;
    const t0 = performance.now();
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'User-Agent': 'Onyxman-Cloud-Health-Monitor/1.0 (+https://onyxman.my)',
          Accept: 'text/html,application/xhtml+xml',
        },
      });
      const ttfbMs = Math.round(performance.now() - t0);

      if (response.status !== 200) {
        recordFail(target.id, 'HTTP-STATUS', `${url} returned HTTP ${response.status} (expected 200)`);
        continue;
      }
      recordPass(target.id, 'HTTP-STATUS', `${url} returned HTTP 200 OK`);

      if (ttfbMs > TTFB_BUDGET_MS) {
        recordFail(
          target.id,
          'TTFB-BUDGET',
          `${url} TTFB ${ttfbMs}ms exceeded budget of ${TTFB_BUDGET_MS}ms`
        );
      } else {
        recordPass(target.id, 'TTFB-BUDGET', `${url} TTFB ${ttfbMs}ms (< ${TTFB_BUDGET_MS}ms budget)`);
      }

      const htmlContent = await response.text();
      verifyHtmlDocumentIntegrity(target, htmlContent);

      telemetryRows.push({
        route: target.route,
        status: response.status,
        ttfbMs: `${ttfbMs}ms`,
        bytes: Buffer.byteLength(htmlContent, 'utf8'),
        price: 'RM 159',
        endpoint: PRIMARY_ORDER_EMAIL,
      });
    } catch (err) {
      recordFail(target.id, 'NETWORK', `Failed to reach ${url}: ${err.message}`);
    }
  }
}

async function main() {
  if (isLiveMode) {
    await runLiveCloudAudit();
  } else {
    runDryRunAudit();
  }

  console.log('====================================================================');
  console.log(`ONYXMAN.MY 24/7 CLOUD HEALTH & ORDER BRIDGE MONITOR (${isLiveMode ? 'LIVE CLOUD' : 'DRY-RUN'})`);
  console.log('====================================================================');
  console.log(`Target Domain           : ${SITE_ORIGIN}`);
  console.log(`TTFB Performance Budget : < ${TTFB_BUDGET_MS}ms`);
  console.log(`Order Drawer Endpoint   : ${EXPECTED_FORMSUBMIT_ENDPOINT}`);
  console.log(`Monitored Routes        : ${MONITOR_TARGETS.length}`);
  console.log('--------------------------------------------------------------------');
  for (const row of telemetryRows) {
    console.log(
      `  [HTTP ${row.status}] ${row.route.padEnd(28)} | TTFB: ${String(row.ttfbMs).padEnd(14)} | Size: ${String(row.bytes).padStart(7)}B | ${row.price} | ${row.endpoint}`
    );
  }
  console.log('--------------------------------------------------------------------');
  console.log(`Total Checks Passed     : ${passedChecks.length}`);
  console.log(`Total Failures          : ${errors.length}`);

  if (errors.length > 0) {
    console.error('\nFAILED HEALTH CHECKS:');
    for (const err of errors) {
      console.error(`  [FAIL] [${err.targetId}:${err.check}] ${err.message}`);
    }
    process.exit(1);
  }

  console.log('\n[PASS] ALL MONITORED ROUTES, @GRAPH SCHEMAS, RM 159 PRICING & ORDER ENDPOINTS VERIFIED.');
  process.exit(0);
}

main();
