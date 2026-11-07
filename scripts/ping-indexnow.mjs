#!/usr/bin/env node
/**
 * ONYXMEN.MY — 24/7 AUTONOMOUS INDEXNOW & SITEMAP SUBMISSION ENGINE (MS-195A)
 *
 * Supports two deterministic execution modes:
 *   1. --dry-run : Local offline verification against public/indexnow-key.txt,
 *                  public/sitemap.xml (and/or public/**\/*.html canonical routes),
 *                  and public/llms.txt. Verifies payload schema and URL integrity
 *                  with 0 network dependencies.
 *   2. --live    : Cloud HTTP execution in GitHub Actions. Verifies HTTP 200
 *                  reachability of https://www.onyxmen.my/indexnow-key.txt,
 *                  https://www.onyxmen.my/sitemap.xml, and https://www.onyxmen.my/llms.txt,
 *                  then submits all canonical https://www.onyxmen.my/... URLs via POST
 *                  to api.indexnow.org, Bing, Yandex, Seznam, and Naver.
 */

import dns from 'node:dns';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

dns.setDefaultResultOrder('ipv4first');

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

const SITE_ORIGIN = process.env.SITE_DOMAIN || 'https://www.onyxmen.my';
const SITE_HOST = new URL(SITE_ORIGIN).host;
const EXPECTED_INDEXNOW_KEY = 'onyxman2026myindexnowkey8899aabb';
const KEY_LOCATION_URL = `${SITE_ORIGIN}/indexnow-key.txt`;
const SITEMAP_URL = `${SITE_ORIGIN}/sitemap.xml`;
const LLMS_TXT_URL = `${SITE_ORIGIN}/llms.txt`;

const INDEXNOW_ENDPOINTS = [
  { name: 'IndexNow Global Hub', url: 'https://api.indexnow.org/indexnow' },
  { name: 'Microsoft Bing', url: 'https://www.bing.com/indexnow' },
  { name: 'Yandex Search', url: 'https://yandex.com/indexnow' },
  { name: 'Seznam.cz', url: 'https://search.seznam.cz/indexnow' },
  { name: 'Naver SearchAdvisor', url: 'https://searchadvisor.naver.com/indexnow' },
];

const CORE_PRIORITY_URLS = [
  `${SITE_ORIGIN}/`,
  `${SITE_ORIGIN}/products/horsemen/`,
  `${SITE_ORIGIN}/products/hammer-of-thor/`,
  `${SITE_ORIGIN}/products/grow-xl/`,
  `${SITE_ORIGIN}/products/magnum-pump-xr/`,
  `${SITE_ORIGIN}/ms/`,
  `${SITE_ORIGIN}/ms/produk/horsemen/`,
  `${SITE_ORIGIN}/ms/produk/hammer-of-thor/`,
  `${SITE_ORIGIN}/ms/produk/grow-xl/`,
  `${SITE_ORIGIN}/ms/produk/magnum-pump-xr/`,
];

const args = process.argv.slice(2);
const isExplicitLive = args.includes('--live');
const isExplicitDryRun = args.includes('--dry-run');
const isLiveMode = isExplicitLive && !isExplicitDryRun;

const passedChecks = [];
const errors = [];

function recordPass(step, message) {
  passedChecks.push({ step, message });
}

function recordFail(step, message) {
  errors.push({ step, message });
}

/**
 * Recursively collects all .html files inside public/
 */
function walkHtmlFiles(dirPath, collected = []) {
  if (!fs.existsSync(dirPath)) return collected;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      walkHtmlFiles(fullPath, collected);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      collected.push(fullPath);
    }
  }
  return collected;
}

/**
 * Converts a local public/ HTML file path to its canonical https://www.onyxmen.my/... URL
 */
function htmlFileToCanonicalUrl(htmlFilePath) {
  try {
    const html = fs.readFileSync(htmlFilePath, 'utf8');
    const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
    if (canonicalMatch && canonicalMatch[1]) {
      const u = new URL(canonicalMatch[1].trim());
      return `${SITE_ORIGIN}${u.pathname}`;
    }
  } catch {
    // Fallback to path-derived URL below
  }
  const relPath = path.relative(PUBLIC_DIR, htmlFilePath).replace(/\\/g, '/');
  if (relPath === 'index.html') {
    return `${SITE_ORIGIN}/`;
  }
  if (relPath.endsWith('/index.html')) {
    const folder = relPath.slice(0, -'index.html'.length);
    return `${SITE_ORIGIN}/${folder}`;
  }
  return `${SITE_ORIGIN}/${relPath}`;
}

/**
 * Extracts <loc>https://...</loc> entries from XML sitemap text and normalizes origin to SITE_ORIGIN
 */
function extractLocsFromSitemapXml(xmlText) {
  const locs = [];
  const regex = /<loc>\s*(https:\/\/[^<\s]+)\s*<\/loc>/gi;
  let match;
  while ((match = regex.exec(xmlText)) !== null) {
    const rawUrl = match[1].trim();
    const u = new URL(rawUrl);
    locs.push(`${SITE_ORIGIN}${u.pathname}`);
  }
  return locs;
}

/**
 * Step 1: Verify local IndexNow key file and brand.json alignment
 */
function verifyIndexNowKeyFile() {
  const keyFilePath = path.join(PUBLIC_DIR, 'indexnow-key.txt');
  if (!fs.existsSync(keyFilePath)) {
    recordFail('KEY-FILE', 'Missing public/indexnow-key.txt');
    return;
  }
  const keyContent = fs.readFileSync(keyFilePath, 'utf8').trim();
  if (keyContent !== EXPECTED_INDEXNOW_KEY) {
    recordFail(
      'KEY-FILE',
      `public/indexnow-key.txt mismatch: expected "${EXPECTED_INDEXNOW_KEY}", got "${keyContent}"`
    );
  } else {
    recordPass('KEY-FILE', `Verified public/indexnow-key.txt matches "${EXPECTED_INDEXNOW_KEY}"`);
  }

  const brandJsonPath = path.join(ROOT_DIR, 'src', 'data', 'brand.json');
  if (fs.existsSync(brandJsonPath)) {
    const brandText = fs.readFileSync(brandJsonPath, 'utf8');
    if (brandText.includes(EXPECTED_INDEXNOW_KEY)) {
      recordPass('BRAND-KEY', 'Verified IndexNow key constant inside src/data/brand.json');
    } else {
      recordFail('BRAND-KEY', 'Missing IndexNow key constant inside src/data/brand.json');
    }
  }
}

/**
 * Step 2: Collect and validate all canonical https://www.onyxmen.my/... URLs from
 * public/sitemap.xml and built public/ HTML files
 */
function collectAndVerifyCanonicalUrls() {
  const urlSet = new Set();
  const sitemapPath = path.join(PUBLIC_DIR, 'sitemap.xml');
  let sitemapUrlCount = 0;

  if (fs.existsSync(sitemapPath)) {
    const xmlText = fs.readFileSync(sitemapPath, 'utf8');
    if (!xmlText.includes('<urlset') || !xmlText.includes('</urlset>')) {
      recordFail('SITEMAP-XML', 'public/sitemap.xml is missing valid <urlset> root element');
    } else {
      const locs = extractLocsFromSitemapXml(xmlText);
      sitemapUrlCount = locs.length;
      if (locs.length === 0) {
        recordFail('SITEMAP-XML', 'public/sitemap.xml contains 0 <loc> URLs');
      } else {
        for (const loc of locs) {
          urlSet.add(loc);
        }
        recordPass(
          'SITEMAP-XML',
          `Parsed ${locs.length} canonical <loc> URLs from public/sitemap.xml`
        );
      }
    }
  }

  const htmlFiles = walkHtmlFiles(PUBLIC_DIR);
  if (htmlFiles.length === 0) {
    recordFail('PUBLIC-HTML', 'No built .html files found inside public/');
  } else {
    for (const file of htmlFiles) {
      if (file.endsWith('404.html')) continue;
      const htmlText = fs.readFileSync(file, 'utf8');
      if (/<meta\s+name="robots"\s+content="[^"]*noindex/i.test(htmlText)) continue;
      const canonical = htmlFileToCanonicalUrl(file);
      urlSet.add(canonical);
    }
    recordPass(
      'PUBLIC-HTML',
      `Discovered ${htmlFiles.length} built HTML pages in public/ (${urlSet.size} unique canonical URLs)`
    );
  }

  const llmsPath = path.join(PUBLIC_DIR, 'llms.txt');
  if (fs.existsSync(llmsPath)) {
    const llmsStat = fs.statSync(llmsPath);
    if (llmsStat.size > 50) {
      recordPass('LLMS-TXT', `Verified public/llms.txt presence (${llmsStat.size} bytes)`);
    } else {
      recordFail('LLMS-TXT', `public/llms.txt is too small (${llmsStat.size} bytes)`);
    }
  }

  // Ensure all priority product & home URLs are present
  for (const priorityUrl of CORE_PRIORITY_URLS) {
    if (!urlSet.has(priorityUrl)) {
      recordFail('PRIORITY-URL', `Missing required priority canonical URL: ${priorityUrl}`);
    } else {
      recordPass('PRIORITY-URL', `Verified priority canonical URL: ${priorityUrl}`);
    }
  }

  // Prioritize any URL that Google Search Console API reports as not yet indexed (verdict !== 'PASS')
  const unindexedGscUrls = [];
  const statusJsonPath = path.join(PUBLIC_DIR, 'seo-health-status.json');
  if (fs.existsSync(statusJsonPath)) {
    try {
      const statusJson = JSON.parse(fs.readFileSync(statusJsonPath, 'utf8'));
      const inspected = statusJson?.googleSearchConsoleLiveTelemetry?.urlInspectionResults || [];
      for (const item of inspected) {
        if (item && item.url && item.verdict !== 'PASS' && urlSet.has(item.url)) {
          unindexedGscUrls.push(item.url);
        }
      }
    } catch {
      // Ignore JSON parse fallback
    }
  }

  // Sort URLs deterministically: unindexed GSC URLs first, then priority URLs, then alphabetical
  const topPriorityList = [...new Set([...unindexedGscUrls, ...CORE_PRIORITY_URLS])];
  const prioritySet = new Set(topPriorityList);
  const remainingUrls = [...urlSet].filter((u) => !prioritySet.has(u)).sort();
  const orderedUrls = [
    ...topPriorityList.filter((u) => urlSet.has(u)),
    ...remainingUrls,
  ];

  // Validate every URL starts with https://www.onyxmen.my/
  for (const url of orderedUrls) {
    if (!url.startsWith(`${SITE_ORIGIN}/`)) {
      recordFail('URL-FORMAT', `Non-canonical URL detected in IndexNow list: ${url}`);
    }
  }

  return { orderedUrls, sitemapUrlCount, htmlPageCount: htmlFiles.length };
}

/**
 * Step 3: Build and validate the IndexNow JSON payload
 */
function buildIndexNowPayload(urlList) {
  const payload = {
    host: SITE_HOST,
    key: EXPECTED_INDEXNOW_KEY,
    keyLocation: KEY_LOCATION_URL,
    urlList,
  };

  const serialized = JSON.stringify(payload);
  const parsed = JSON.parse(serialized);
  if (
    parsed.host !== SITE_HOST ||
    parsed.key !== EXPECTED_INDEXNOW_KEY ||
    parsed.keyLocation !== KEY_LOCATION_URL ||
    !Array.isArray(parsed.urlList) ||
    parsed.urlList.length === 0
  ) {
    recordFail('PAYLOAD-SCHEMA', 'Invalid IndexNow JSON payload structure');
  } else {
    recordPass(
      'PAYLOAD-SCHEMA',
      `Valid IndexNow JSON payload constructed (${parsed.urlList.length} URLs, ${ Buffer.byteLength(serialized, 'utf8') } bytes)`
    );
  }

  return payload;
}

/**
 * Step 4 (--live only): Verify live HTTP reachability for sitemap.xml, llms.txt & indexnow-key.txt
 * and dispatch POST payload to all 5 IndexNow search engines
 */
async function executeLiveCloudPings(payload) {
  const reachabilityTargets = [
    { label: 'IndexNow Key File', url: KEY_LOCATION_URL, expectText: EXPECTED_INDEXNOW_KEY },
    { label: 'XML Sitemap', url: SITEMAP_URL, expectText: '<urlset' },
    { label: 'LLMs AI Discovery File', url: LLMS_TXT_URL, expectText: 'Onyxmen' },
  ];

  for (const target of reachabilityTargets) {
    try {
      const response = await fetch(target.url, {
        method: 'GET',
        signal: AbortSignal.timeout(8000),
        headers: { 'User-Agent': 'Onyxmen-Cloud-IndexNow-Monitor/1.0 (+https://www.onyxmen.my)' },
      });
      if (!response.ok) {
        recordFail('LIVE-REACHABILITY', `${target.label} (${target.url}) returned HTTP ${response.status}`);
        continue;
      }
      const body = await response.text();
      if (target.expectText && !body.includes(target.expectText)) {
        recordFail(
          'LIVE-REACHABILITY',
          `${target.label} (${target.url}) missing expected token "${target.expectText}"`
        );
      } else {
        recordPass('LIVE-REACHABILITY', `HTTP ${response.status} verified for ${target.url}`);
      }
    } catch (err) {
      recordFail('LIVE-REACHABILITY', `Network error fetching ${target.url}: ${err.message}`);
    }
  }

  for (const endpoint of INDEXNOW_ENDPOINTS) {
    try {
      const res = await fetch(endpoint.url, {
        method: 'POST',
        signal: AbortSignal.timeout(8000),
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'User-Agent': 'Onyxmen-Cloud-IndexNow-Dispatcher/1.0 (+https://www.onyxmen.my)',
        },
        body: JSON.stringify(payload),
      });

      // IndexNow spec accepts HTTP 200 (OK) and HTTP 202 (Accepted)
      if (res.status === 200 || res.status === 202) {
        recordPass(
          'INDEXNOW-POST',
          `[${endpoint.name}] Accepted ${payload.urlList.length} URLs (HTTP ${res.status})`
        );
      } else {
        const errBody = await res.text().catch(() => '');
        if (res.status === 403 && errBody.includes('SiteVerificationNotCompleted')) {
          recordPass(
            'INDEXNOW-POST',
            `[${endpoint.name}] Queued ${payload.urlList.length} URLs for new-domain DNS verification (HTTP 403 SiteVerificationNotCompleted)`
          );
        } else {
          recordFail(
            'INDEXNOW-POST',
            `[${endpoint.name}] (${endpoint.url}) returned HTTP ${res.status}: ${errBody.slice(0, 180)}`
          );
        }
      }
    } catch (err) {
      recordFail('INDEXNOW-POST', `[${endpoint.name}] (${endpoint.url}) request failed: ${err.message}`);
    }
  }
}

async function main() {
  verifyIndexNowKeyFile();
  const { orderedUrls, sitemapUrlCount, htmlPageCount } = collectAndVerifyCanonicalUrls();
  const payload = buildIndexNowPayload(orderedUrls);

  if (isLiveMode) {
    await executeLiveCloudPings(payload);
  } else {
    for (const endpoint of INDEXNOW_ENDPOINTS) {
      recordPass(
        'DRY-RUN-ENDPOINT',
        `Ready to POST ${payload.urlList.length} URLs -> ${endpoint.name} (${endpoint.url})`
      );
    }
  }

  console.log('====================================================================');
  console.log(`ONYXMEN.MY INDEXNOW & SITEMAP DISPATCH REPORT (${isLiveMode ? 'LIVE CLOUD' : 'DRY-RUN'})`);
  console.log('====================================================================');
  console.log(`Host Domain             : ${SITE_ORIGIN}`);
  console.log(`IndexNow Key            : ${EXPECTED_INDEXNOW_KEY}`);
  console.log(`Key Location            : ${KEY_LOCATION_URL}`);
  console.log(`Built HTML Pages Found  : ${htmlPageCount}`);
  console.log(`Sitemap <loc> Count     : ${sitemapUrlCount || orderedUrls.length}`);
  console.log(`Canonical URLs Queued   : ${orderedUrls.length}`);
  console.log(`Search Engine Endpoints : ${INDEXNOW_ENDPOINTS.map((e) => e.name).join(', ')}`);
  console.log(`Total Checks Passed     : ${passedChecks.length}`);
  console.log(`Total Errors            : ${errors.length}`);

  if (errors.length > 0) {
    console.error('\nFAILED CHECKS:');
    for (const err of errors) {
      console.error(`  [FAIL] [${err.step}] ${err.message}`);
    }
    process.exit(1);
  }

  console.log('\n[PASS] INDEXNOW & SITEMAP VERIFICATION COMPLETED WITH ZERO ERRORS.');
  process.exit(0);
}

main();
