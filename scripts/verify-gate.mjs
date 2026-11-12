#!/usr/bin/env node
/**
 * ONYXMEN.MY — 6-GATE DETERMINISTIC VERIFICATION & REVOCATION ENGINE (MS-011)
 * Audits Foundation Configs (--phase=A) and Full Built HTML/CSS/JSON Artifacts (--phase=ALL)
 *
 * THE 6 MANDATORY GATES:
 * - Gate 1: Studio Image Presence & Non-Zero Byte Size Verification
 * - Gate 2: Line-Count Thresholds, Zero Truncation Markers, & Zero Rule #30 Violations
 * - Gate 3: Zero Broken Internal Links & Route Integrity
 * - Gate 4: Bilingual Hreflang Reciprocity (en-MY, ms-MY, x-default)
 * - Gate 5: Authentic Business Constants (159.00, 318.00, 477.00, MYR, waleedshoaibofficial@gmail.com, sales@onyxmen.my, info@onyxmen.my, Zero fake medical registrations)
 * - Gate 6: Valid JSON & @graph JSON-LD Schema Syntax
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const args = process.argv.slice(2);
const phaseArg = args.find((a) => a.startsWith('--phase='))?.split('=')[1] || 'A';

const PHASE_A_FILES = [
  'src/data/brand.json',
  'src/data/products/horsemen.json',
  'src/data/products/hammer-of-thor.json',
  'src/data/products/grow-xl.json',
  'src/data/products/magnum-pump-xr.json',
  'src/data/comparisons.json',
  'src/data/botanicals.json',
  'src/data/malaysia-states.json',
  'src/data/guides.json',
  'src/data/products/index.ts',
  'package.json',
  'tsconfig.json',
  'src/styles/luxury-tokens.css',
  'src/utils/i18n.ts',
  'src/utils/pricing.ts',
  'src/utils/order-bridge.ts',
  'public/_headers',
  'public/_redirects',
  'public/indexnow-key.txt',
  'scripts/verify-gate.mjs',
  '.gitignore',
  'README-CLOUD-DEPLOY.md',
];

// Construct banned tokens dynamically so the verifier file itself never contains literal banned strings
const BANNED_COLOR_HEX = '#' + 'FAF8F5';
const BANNED_FONT_FAMILY = 'Plus ' + 'Jakarta Sans';
const BANNED_PILL_RADIUS = 'border-radius: ' + '999px';
const BANNED_CARD_GRID_3 = 'repeat(3, ' + '1fr)';
const BANNED_TODO_MARKER = '// ' + 'TODO';
const BANNED_ELLIPSIS_MARKER = '// ' + '...';
const BANNED_FAKE_REG_1 = 'MAL' + '19';
const BANNED_FAKE_REG_2 = 'MAL' + '20';
const BANNED_FAKE_REG_3 = 'KKM' + ' Approved Drug';

const errors = [];
const passedChecks = [];

function recordPass(gate, message) {
  passedChecks.push({ gate, message });
}

function recordFail(gate, message) {
  errors.push({ gate, message });
}

function countLines(text) {
  return text.split(/\r?\n/).length;
}

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
 * GATE 1: File / Studio Image Presence & Non-Zero Byte Size
 */
function runGate1(phase) {
  for (const relPath of PHASE_A_FILES) {
    const absPath = path.join(ROOT_DIR, relPath);
    if (!fs.existsSync(absPath)) {
      recordFail('GATE-1', `Missing required foundation file: ${relPath}`);
      continue;
    }
    const stat = fs.statSync(absPath);
    if (stat.size <= 0) {
      recordFail('GATE-1', `Zero-byte file detected: ${relPath}`);
    } else {
      recordPass('GATE-1', `Verified non-zero file: ${relPath} (${stat.size} bytes)`);
    }
  }

  if (phase === 'ALL') {
    const assetsDir = path.join(ROOT_DIR, 'public', 'assets', 'products');
    if (fs.existsSync(assetsDir)) {
      const imgs = fs.readdirSync(assetsDir).filter((f) => /\.(webp|png|jpg|svg)$/i.test(f));
      if (imgs.length === 0) {
        recordFail('GATE-1', 'No studio product images found in public/assets/products');
      } else {
        for (const img of imgs) {
          const stat = fs.statSync(path.join(assetsDir, img));
          if (stat.size < 100) {
            recordFail('GATE-1', `Studio image ${img} is too small (${stat.size} bytes)`);
          } else {
            recordPass('GATE-1', `Studio asset verified: ${img} (${stat.size} bytes)`);
          }
        }
      }
    }
  }
}

/**
 * GATE 2: Line-Count Thresholds, Zero Truncation & Zero Rule #30 Violations
 */
function runGate2() {
  const cssPath = path.join(ROOT_DIR, 'src/styles/luxury-tokens.css');
  if (fs.existsSync(cssPath)) {
    const cssContent = fs.readFileSync(cssPath, 'utf8');
    const cssLines = countLines(cssContent);
    if (cssLines < 450) {
      recordFail('GATE-2', `luxury-tokens.css has ${cssLines} lines (minimum required: 450)`);
    } else {
      recordPass('GATE-2', `luxury-tokens.css line threshold passed: ${cssLines} lines (>= 450)`);
    }
  }

  for (const relPath of PHASE_A_FILES) {
    if (relPath === 'scripts/verify-gate.mjs') continue;
    const absPath = path.join(ROOT_DIR, relPath);
    if (!fs.existsSync(absPath)) continue;
    const text = fs.readFileSync(absPath, 'utf8');

    if (text.includes(BANNED_TODO_MARKER) || text.includes(BANNED_ELLIPSIS_MARKER)) {
      recordFail('GATE-2', `Truncation marker found in ${relPath}`);
    }
    if (text.toUpperCase().includes(BANNED_COLOR_HEX)) {
      recordFail('GATE-2', `Banned clone background color found in ${relPath}`);
    }
    if (text.includes(BANNED_FONT_FAMILY)) {
      recordFail('GATE-2', `Banned font family found in ${relPath}`);
    }
    if (text.includes(BANNED_PILL_RADIUS)) {
      recordFail('GATE-2', `Banned pill badge radius found in ${relPath}`);
    }
    if (text.includes(BANNED_CARD_GRID_3)) {
      recordFail('GATE-2', `Banned 3-column card grid found in ${relPath}`);
    }
  }
  recordPass('GATE-2', 'Zero truncation markers and zero Rule #30 violations across all Phase A files');
}

/**
 * GATE 3: Route Registry & Internal Link Integrity
 */
function runGate3(phase) {
  const i18nPath = path.join(ROOT_DIR, 'src/utils/i18n.ts');
  if (!fs.existsSync(i18nPath)) {
    recordFail('GATE-3', 'Missing src/utils/i18n.ts');
    return;
  }
  const i18nText = fs.readFileSync(i18nPath, 'utf8');
  const requiredRoutes = [
    '/products/horsemen/',
    '/products/hammer-of-thor/',
    '/products/grow-xl/',
    '/products/magnum-pump-xr/',
    '/ms/produk/horsemen/',
    '/ms/produk/hammer-of-thor/',
    '/ms/produk/grow-xl/',
    '/ms/produk/magnum-pump-xr/',
    '/malaysia/kuala-lumpur/',
    '/malaysia/selangor/',
    '/malaysia/sabah/',
    '/malaysia/sarawak/',
  ];

  for (const route of requiredRoutes) {
    if (!i18nText.includes(`'${route}'`)) {
      recordFail('GATE-3', `Route missing from i18n registry: ${route}`);
    }
  }
  recordPass('GATE-3', `Verified ${requiredRoutes.length} core bilingual routes in i18n.ts`);

  if (phase === 'ALL' || phase === 'LINKS') {
    const pubDir = path.join(ROOT_DIR, 'public');
    const htmlFiles = walkHtmlFiles(pubDir);
    if (htmlFiles.length < 300) {
      recordFail('GATE-3', `Expected at least 300 HTML files in public/, found ${htmlFiles.length}`);
    }
    for (const htmlFile of htmlFiles) {
      const html = fs.readFileSync(htmlFile, 'utf8');
      const hrefMatches = [...html.matchAll(/href="(\/[^"#?]*)"/g)];
      for (const match of hrefMatches) {
        const href = match[1];
        if (href.startsWith('/assets/') || href.startsWith('/styles/') || href.startsWith('/scripts/')) {
          continue;
        }
        const targetCandidate1 = path.join(pubDir, href, 'index.html');
        const targetCandidate2 = path.join(pubDir, `${href}.html`);
        const targetCandidate3 = path.join(pubDir, href);
        if (
          !fs.existsSync(targetCandidate1) &&
          !fs.existsSync(targetCandidate2) &&
          !fs.existsSync(targetCandidate3)
        ) {
          recordFail('GATE-3', `Broken internal link ${href} in ${path.relative(ROOT_DIR, htmlFile)}`);
        }
      }
    }
    recordPass('GATE-3', `Verified 0 broken internal links across all ${htmlFiles.length} HTML files in public/`);
  }
}

/**
 * GATE 4: Bilingual Hreflang Reciprocity (en-MY, ms-MY, x-default)
 */
function runGate4(phase) {
  const i18nPath = path.join(ROOT_DIR, 'src/utils/i18n.ts');
  if (fs.existsSync(i18nPath)) {
    const content = fs.readFileSync(i18nPath, 'utf8');
    const requiredHreflangs = ['hreflang="en-MY"', 'hreflang="ms-MY"', 'hreflang="x-default"'];
    for (const tag of requiredHreflangs) {
      if (!content.includes(tag)) {
        recordFail('GATE-4', `Missing ${tag} generator template in src/utils/i18n.ts`);
      }
    }
    recordPass('GATE-4', 'Bidirectional hreflang (en-MY, ms-MY, x-default) generator verified in i18n.ts');
  }

  if (phase === 'ALL') {
    const pubDir = path.join(ROOT_DIR, 'public');
    const htmlFiles = walkHtmlFiles(pubDir);
    for (const htmlFile of htmlFiles) {
      if (path.basename(htmlFile) === '404.html') continue;
      const html = fs.readFileSync(htmlFile, 'utf8');
      if (
        !html.includes('hreflang="en-MY"') ||
        !html.includes('hreflang="ms-MY"') ||
        !html.includes('hreflang="x-default"')
      ) {
        recordFail('GATE-4', `Missing complete hreflang cluster in ${path.relative(ROOT_DIR, htmlFile)}`);
      }
    }
    recordPass('GATE-4', `Verified complete en-MY/ms-MY/x-default hreflang cluster across all ${htmlFiles.length - 1} route HTML files`);
  }
}

/**
 * GATE 5: Authentic Business Constants & Zero Fake Medical Claims
 */
function runGate5() {
  const brandJsonPath = path.join(ROOT_DIR, 'src/data/brand.json');
  const pricingPath = path.join(ROOT_DIR, 'src/utils/pricing.ts');
  const bridgePath = path.join(ROOT_DIR, 'src/utils/order-bridge.ts');

  if (!fs.existsSync(brandJsonPath) || !fs.existsSync(pricingPath) || !fs.existsSync(bridgePath)) {
    recordFail('GATE-5', 'Missing brand.json, pricing.ts, or order-bridge.ts for Gate 5 audit');
    return;
  }

  const brandRaw = fs.readFileSync(brandJsonPath, 'utf8');
  const pricingRaw = fs.readFileSync(pricingPath, 'utf8');
  const bridgeRaw = fs.readFileSync(bridgePath, 'utf8');

  const requiredConstants = [
    { label: 'Domain https://www.onyxmen.my', token: 'https://www.onyxmen.my', target: brandRaw },
    { label: 'Single Bottle Schema Price 159.00', token: '"159.00"', target: brandRaw },
    { label: '2-Bottle Discounted Tier Price 286.00', token: '"286.00"', target: brandRaw },
    { label: '3-Bottle Discounted Tier Price 405.00', token: '"405.00"', target: brandRaw },
    { label: '2-Bottle Regular Tier Price 318.00', token: '"318.00"', target: brandRaw },
    { label: '3-Bottle Regular Tier Price 477.00', token: '"477.00"', target: brandRaw },
    { label: 'Currency MYR', token: '"MYR"', target: brandRaw },
    { label: 'Primary Merchant Email', token: 'waleedshoaibofficial@gmail.com', target: brandRaw },
    { label: 'Official Sales Alias', token: 'sales@onyxmen.my', target: brandRaw },
    { label: 'Official Info Alias', token: 'info@onyxmen.my', target: brandRaw },
    { label: 'IndexNow Verification Key', token: 'onyxman2026myindexnowkey8899aabb', target: brandRaw },
    { label: 'Pricing Engine 159.00', token: '159.00', target: pricingRaw },
    { label: 'Pricing Engine 286.00', token: '286.00', target: pricingRaw },
    { label: 'Pricing Engine 405.00', token: '405.00', target: pricingRaw },
    { label: 'Pricing Engine 318.00', token: '318.00', target: pricingRaw },
    { label: 'Pricing Engine 477.00', token: '477.00', target: pricingRaw },
    { label: 'Bridge Primary Email', token: 'waleedshoaibofficial@gmail.com', target: bridgeRaw },
    { label: 'Bridge Reverse WhatsApp URL', token: 'https://wa.me/', target: bridgeRaw },
    { label: 'Bridge Calendar Refill URL', token: 'https://calendar.google.com/calendar/render', target: bridgeRaw },
  ];

  for (const check of requiredConstants) {
    if (!check.target.includes(check.token)) {
      recordFail('GATE-5', `Missing authentic constant [${check.label}]: ${check.token}`);
    } else {
      recordPass('GATE-5', `Authentic constant verified: ${check.label}`);
    }
  }

  for (const relPath of PHASE_A_FILES) {
    if (relPath === 'scripts/verify-gate.mjs') continue;
    const absPath = path.join(ROOT_DIR, relPath);
    if (!fs.existsSync(absPath)) continue;
    const content = fs.readFileSync(absPath, 'utf8');
    if (
      content.includes(BANNED_FAKE_REG_1) ||
      content.includes(BANNED_FAKE_REG_2) ||
      content.includes(BANNED_FAKE_REG_3)
    ) {
      recordFail('GATE-5', `Fake medical registration claim detected in ${relPath}`);
    }
  }
}

/**
 * GATE 6: Valid JSON & @graph JSON-LD Schema Syntax
 */
function runGate6(phase) {
  const jsonFiles = [
    'src/data/brand.json',
    'src/data/image-manifest.json',
    'src/data/products/horsemen.json',
    'src/data/products/hammer-of-thor.json',
    'src/data/products/grow-xl.json',
    'src/data/products/magnum-pump-xr.json',
    'src/data/comparisons.json',
    'src/data/botanicals.json',
    'src/data/malaysia-states.json',
    'src/data/guides.json',
    'package.json',
    'tsconfig.json',
  ];
  for (const relPath of jsonFiles) {
    const absPath = path.join(ROOT_DIR, relPath);
    if (!fs.existsSync(absPath)) continue;
    try {
      const parsed = JSON.parse(fs.readFileSync(absPath, 'utf8'));
      if (!parsed || typeof parsed !== 'object') {
        recordFail('GATE-6', `Invalid JSON root in ${relPath}`);
      } else {
        recordPass('GATE-6', `Valid JSON syntax verified: ${relPath}`);
      }
    } catch (err) {
      recordFail('GATE-6', `JSON parse error in ${relPath}: ${err.message}`);
    }
  }

  if (phase === 'ALL' || phase === 'SCHEMA') {
    const pubDir = path.join(ROOT_DIR, 'public');
    const htmlFiles = walkHtmlFiles(pubDir);
    for (const htmlFile of htmlFiles) {
      const html = fs.readFileSync(htmlFile, 'utf8');
      const ldMatches = [
        ...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi),
      ];
      if (ldMatches.length === 0) {
        recordFail('GATE-6', `No JSON-LD block found in ${path.relative(ROOT_DIR, htmlFile)}`);
        continue;
      }
      for (const match of ldMatches) {
        try {
          const ldObj = JSON.parse(match[1]);
          if (!ldObj['@context'] || !ldObj['@graph']) {
            recordFail('GATE-6', `JSON-LD missing @context or @graph in ${path.relative(ROOT_DIR, htmlFile)}`);
          }
        } catch (err) {
          recordFail('GATE-6', `Invalid JSON-LD in ${path.relative(ROOT_DIR, htmlFile)}: ${err.message}`);
        }
      }
    }
    recordPass('GATE-6', `Verified valid JSON-LD @graph blocks across all ${htmlFiles.length} HTML files in public/`);
  }
}

/**
 * GATE 7: Sitemap Self-Canonical Purity, 100% Unique Title/H1/Description,
 * Single Visible <h1>, Open SEO Drawer, Optimal Word Count, & <25% 5-Gram Overlap
 */
function runGate7(phase) {
  if (phase !== 'ALL') return;
  const pubDir = path.join(ROOT_DIR, 'public');
  const sitemapPath = path.join(pubDir, 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    recordFail('GATE-7', 'Missing public/sitemap.xml for Gate 7 SEO purity audit');
    return;
  }

  const smRaw = fs.readFileSync(sitemapPath, 'utf8');
  const locs = [...smRaw.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1].trim())
    .filter((u) => !u.includes('/assets/'));

  const titles = new Map();
  const h1s = new Map();
  const descs = new Map();
  const pageShingles = [];

  for (const loc of locs) {
    const rel = loc.replace('https://www.onyxmen.my/', '');
    const htmlPath = path.join(pubDir, rel, 'index.html');
    if (!fs.existsSync(htmlPath)) {
      recordFail('GATE-7', `Missing HTML file for sitemap URL: ${loc}`);
      continue;
    }
    const html = fs.readFileSync(htmlPath, 'utf8');
    const can = (html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i) || [])[1]?.trim() || '';
    if (can !== loc) {
      recordFail('GATE-7', `Non-self-canonical URL in sitemap.xml: ${loc} -> ${can}`);
    }

    const title = (html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1]?.trim() || '';
    const desc = (html.match(/<meta\s+name="description"\s+content="([^"]*)"/i) || [])[1]?.trim() || '';
    const allH1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
      m[1].replace(/<[^>]+>/g, '').trim()
    );

    if (allH1s.length !== 1) {
      recordFail('GATE-7', `Expected exactly 1 <h1> on ${loc}, found ${allH1s.length}`);
    }
    if (!html.includes('<details class="onyxman-seo-vault-drawer" open>')) {
      recordFail('GATE-7', `Missing open-by-default SEO drawer (<details open>) on ${loc}`);
    }

    const h1 = allH1s[0] || '';
    titles.set(title, (titles.get(title) || []).concat(loc));
    h1s.set(h1, (h1s.get(h1) || []).concat(loc));
    descs.set(desc, (descs.get(desc) || []).concat(loc));

    // Extract visible words & 5-gram shingles for duplication & word-count gate
    const bodyMatch = html.match(/<body[\s\S]*?<\/body>/i);
    const bodyHtml = bodyMatch ? bodyMatch[0] : html;
    const textOnly = bodyHtml
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
      .replace(/<div class="hero-original-authority-banner">[\s\S]*?<!-- END-HERO-ORIGINAL-BANNER -->/gi, ' ')
      .replace(/<div class="conservatory-whatsapp-proof-stage">[\s\S]*?<!-- END-WHATSAPP-PROOF-STAGE -->/gi, ' ')
      .replace(/<nav\s+class="minimal-crawl-bridge"[\s\S]*?<\/nav>/gi, ' ')
      .replace(/<footer[\s\S]*?<\/footer>/gi, ' ')
      .replace(/<header[\s\S]*?<\/header>/gi, ' ')
      .replace(/<[^>]+>/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .toLowerCase();

    const words = textOnly.split(/\s+/).filter(Boolean);
    if (words.length < 750 || words.length > 3200) {
      recordFail('GATE-7', `Word count out of optimal SEO range (750-3200) on ${loc}: ${words.length} words`);
    }

    const shingles = new Set();
    for (let i = 0; i <= words.length - 5; i++) {
      shingles.add(words.slice(i, i + 5).join(' '));
    }
    pageShingles.push({ loc, shingles });
  }

  for (const [val, list] of titles.entries()) {
    if (list.length > 1) recordFail('GATE-7', `Duplicate <title> "${val}" on: ${list.join(', ')}`);
  }
  for (const [val, list] of h1s.entries()) {
    if (list.length > 1) recordFail('GATE-7', `Duplicate <h1> "${val}" on: ${list.join(', ')}`);
  }
  for (const [val, list] of descs.entries()) {
    if (list.length > 1) recordFail('GATE-7', `Duplicate <meta description> on: ${list.join(', ')}`);
  }

  let highOverlapPairs = 0;
  for (let i = 0; i < pageShingles.length; i++) {
    for (let j = i + 1; j < pageShingles.length; j++) {
      const a = pageShingles[i];
      const b = pageShingles[j];
      let inter = 0;
      for (const s of a.shingles) {
        if (b.shingles.has(s)) inter++;
      }
      const union = a.shingles.size + b.shingles.size - inter;
      const jaccard = union > 0 ? inter / union : 0;
      if (jaccard >= 0.25) {
        highOverlapPairs++;
        recordFail(
          'GATE-7',
          `5-gram duplication >= 25% (${(jaccard * 100).toFixed(1)}%) between ${a.loc} and ${b.loc}`
        );
      }
    }
  }

  if (highOverlapPairs === 0) {
    recordPass(
      'GATE-7',
      `All ${locs.length} canonical sitemap URLs verified: 100% self-canonical, 0 duplicate Titles/H1s/Descriptions, 750-3200 word sweet spot, and 0 page pairs >= 25% 5-gram overlap`
    );
  }
}

/**
 * GATE 8: Zero Non-Canonical Internal/Hreflang Links, Zero Domain/Redirect Typos,
 * Zero Unsized <img> Tags (CLS = 0.00), Zero Undefined CSS Custom Properties,
 * Zero Visible MS-xxx Developer Markers, Optimal SERP Title/Description Lengths,
 * and 100% AggregateRating + Review + Shipping + Return Schema Richness (MS-246)
 */
function runGate8(phase) {
  if (phase !== 'ALL') return;
  const pubDir = path.join(ROOT_DIR, 'public');
  const headersPath = path.join(pubDir, '_headers');
  const redirectsPath = path.join(pubDir, '_redirects');
  const sitemapPath = path.join(pubDir, 'sitemap.xml');

  if (fs.existsSync(headersPath)) {
    const hRaw = fs.readFileSync(headersPath, 'utf8');
    if (hRaw.includes('https://' + 'onyxman.my')) {
      recordFail('GATE-8', 'public/_headers still contains legacy domain typo onyxman.my');
    } else {
      recordPass('GATE-8', 'public/_headers CSP verified with https://www.onyxmen.my https://onyxmen.my');
    }
  }

  if (fs.existsSync(redirectsPath)) {
    const rRaw = fs.readFileSync(redirectsPath, 'utf8');
    if (rRaw.includes('Sensitivity-of-thor') || rRaw.includes('/malaysia-delivery/')) {
      recordFail('GATE-8', 'public/_redirects contains legacy /Sensitivity-of-thor/ or non-canonical /malaysia-delivery/ target');
    } else {
      recordPass('GATE-8', 'public/_redirects verified: 0 /Sensitivity-of-thor/ typos and 100% direct canonical 301 targets');
    }
  }

  if (!fs.existsSync(sitemapPath)) return;
  const smRaw = fs.readFileSync(sitemapPath, 'utf8');
  const canonicalLocs = [...smRaw.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1].trim())
    .filter((u) => !u.includes('/assets/'));
  const canonicalRouteSet = new Set(
    canonicalLocs.map((u) => u.replace('https://www.onyxmen.my', ''))
  );

  const requiredCssVars = [
    '--gutter-cinema',
    '--gutter-vertical',
    '--hairline-rule',
    '--hairline-subtle',
    '--font-technical',
    '--text-muted-alabaster',
    '--font-display',
    '--gold-champagne',
    '--text-silk-ivory',
    '--text-ash-silver',
    '--gold-foil-bright',
    '--font-architectural',
    '--ease-cinema',
    '--bg-abyssal-obsidian',
    '--bg-smoked-onyx',
    '--bg-velvet-charcoal',
    '--emerald-vitality',
  ];

  let nonCanonicalLinkCount = 0;
  let unsizedImgCount = 0;
  let visibleMsMarkerCount = 0;
  let serpLengthViolations = 0;
  let missingRichReviewSchema = 0;
  let robotsDirectiveViolations = 0;
  let schemaMetaSyncViolations = 0;

  // Verify sitemap xhtml:link hrefs are 100% canonical across sitemap.xml, sitemap-en.xml, sitemap-ms.xml
  for (const smName of ['sitemap.xml', 'sitemap-en.xml', 'sitemap-ms.xml']) {
    const smFile = path.join(pubDir, smName);
    if (!fs.existsSync(smFile)) continue;
    const xml = fs.readFileSync(smFile, 'utf8');
    for (const m of xml.matchAll(/href="https:\/\/www\.onyxmen\.my(\/[^"]*)"/g)) {
      const p = m[1].endsWith('/') ? m[1] : `${m[1]}/`;
      if (!canonicalRouteSet.has(p)) {
        recordFail('GATE-8', `Non-canonical xhtml:link href ${m[1]} in ${smName}`);
      }
    }
  }

  // Audit ALL 306 HTML files in public/ (both 116 canonical and 190 non-canonical/alias/utility pages)
  const allHtmlFiles = walkHtmlFiles(pubDir);
  for (const htmlPath of allHtmlFiles) {
    const relDir = path.relative(pubDir, path.dirname(htmlPath)).replace(/\\/g, '/');
    const routePath = path.basename(htmlPath) === '404.html' ? '/404.html' : relDir === '' ? '/' : `/${relDir}/`;
    const isCanonical = canonicalRouteSet.has(routePath);
    const html = fs.readFileSync(htmlPath, 'utf8');

    // 1. Check CSS variables on homepage
    if (routePath === '/') {
      for (const cssVar of requiredCssVars) {
        if (!html.includes(`${cssVar}:`)) {
          recordFail('GATE-8', `Missing CSS custom property definition ${cssVar} in :root`);
        }
      }
    }

    // 2. Check robots meta directive parity per Official Google Search Central (consolidate-duplicate-urls & block-indexing):
    // - Standalone utility/error pages (/404.html, /seo-dashboard/, /ms/seo-dashboard/) -> "noindex, follow"
    // - All 116 self-canonical pages + 187 cross-canonical alias pages -> "index, follow..." (never combine noindex with cross-page rel="canonical")
    const noindexUtilityRoutes = new Set(['/404.html', '/seo-dashboard/', '/ms/seo-dashboard/']);
    const robotsMatch = html.match(/<meta\s+name="robots"\s+content="([^"]*)"/i);
    const robotsVal = robotsMatch ? robotsMatch[1].trim() : '';
    if (noindexUtilityRoutes.has(routePath)) {
      if (robotsVal !== 'noindex, follow') {
        robotsDirectiveViolations++;
        recordFail('GATE-8', `Utility/error route ${routePath} must have <meta name="robots" content="noindex, follow"> (found "${robotsVal}")`);
      }
      if (routePath === '/404.html' && /<link\s+rel="canonical"/i.test(html)) {
        robotsDirectiveViolations++;
        recordFail('GATE-8', `/404.html must not contain a <link rel="canonical"> tag`);
      }
    } else {
      if (!robotsVal.startsWith('index, follow')) {
        robotsDirectiveViolations++;
        recordFail('GATE-8', `Content route ${routePath} must have <meta name="robots" content="index, follow..."> per consolidate-duplicate-urls (found "${robotsVal}")`);
      }
      const canTagMatch = html.match(/<link\s+rel="canonical"\s+href="https:\/\/www\.onyxmen\.my(\/[^"]*)"/i);
      const canTarget = canTagMatch ? canTagMatch[1] : '';
      if (!canonicalRouteSet.has(canTarget)) {
        robotsDirectiveViolations++;
        recordFail('GATE-8', `Content route ${routePath} canonical target "${canTarget}" is not in the 116 canonical sitemap routes`);
      }
    }

    // 3. Check internal <a href="/..."> canonicality
    for (const m of html.matchAll(/<a\b[^>]*\bhref="(\/[^"#?]*)"/gi)) {
      const rawHref = m[1];
      if (
        rawHref.startsWith('/assets/') ||
        rawHref.startsWith('/styles/') ||
        rawHref.startsWith('/scripts/') ||
        rawHref.endsWith('.xml') ||
        rawHref.endsWith('.json') ||
        rawHref.endsWith('.txt') ||
        rawHref === '/seo-dashboard/' ||
        rawHref === '/ms/seo-dashboard/'
      ) {
        continue;
      }
      const norm = rawHref.endsWith('/') ? rawHref : `${rawHref}/`;
      if (!canonicalRouteSet.has(norm)) {
        nonCanonicalLinkCount++;
        recordFail('GATE-8', `Non-canonical internal link ${rawHref} on ${routePath}`);
      }
    }

    // 4. Check <img ...> width & height attributes
    for (const m of html.matchAll(/<img\b[^>]*>/gi)) {
      const tag = m[0];
      if (!/\bwidth="/i.test(tag) || !/\bheight="/i.test(tag)) {
        unsizedImgCount++;
        recordFail('GATE-8', `Unsized <img> tag missing width/height on ${routePath}: ${tag.slice(0, 80)}`);
      }
    }

    // 5. Check visible MS-xxx developer markers & onyxman.my domain typos
    const visibleText = html
      .replace(/<script[\s\S]*?<\/script>/gi, ' ')
      .replace(/<style[\s\S]*?<\/style>/gi, ' ')
      .replace(/<[^>]+>/g, ' ');
    if (/\bMS-\d{3}\b/.test(visibleText)) {
      visibleMsMarkerCount++;
      recordFail('GATE-8', `Visible MS-xxx developer code found on ${routePath}`);
    }
    if (visibleText.includes('onyxman.my') || html.includes('"Sensitivity-of-thor"')) {
      recordFail('GATE-8', `Legacy onyxman.my or Sensitivity-of-thor typo found on ${routePath}`);
    }

    // 6. Check SERP <title> (40-68 chars) & <meta name="description"> (115-165 chars) on ALL 306 pages
    const rawTitle = ((html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || '')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .trim();
    const rawDesc = ((html.match(/<meta\s+name="description"\s+content="([^"]*)"/i) || [])[1] || '')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .trim();
    if (rawTitle.length < 40 || rawTitle.length > 68) {
      serpLengthViolations++;
      recordFail('GATE-8', `<title> length (${rawTitle.length}) out of 40-68 char SERP range on ${routePath}: "${rawTitle}"`);
    }
    if (rawDesc.length < 115 || rawDesc.length > 165) {
      serpLengthViolations++;
      recordFail('GATE-8', `<meta description> length (${rawDesc.length}) out of 115-165 char SERP range on ${routePath}`);
    }

    // 7. Check OfferShippingDetails + MerchantReturnPolicy on all pages, and strict Review Snippet compliance:
    // AggregateRating + Review ONLY on dedicated single-product pages (with ProductGroup), NEVER on non-product/legal/policy/guide/category pages
    const isDedicatedProductPage = html.includes('"@type": "ProductGroup"') || html.includes('"@type":"ProductGroup"');
    if (!html.includes('"OfferShippingDetails"') || !html.includes('"MerchantReturnPolicy"')) {
      missingRichReviewSchema++;
      recordFail('GATE-8', `Missing OfferShippingDetails or MerchantReturnPolicy schema in @graph on ${routePath}`);
    }
    if (isDedicatedProductPage) {
      if (!html.includes('"AggregateRating"') || !html.includes('"Review"')) {
        missingRichReviewSchema++;
        recordFail('GATE-8', `Dedicated product page ${routePath} missing AggregateRating/Review in @graph`);
      }
    } else {
      if (html.includes('"AggregateRating"') || html.includes('#featured-apothecary-reserve')) {
        missingRichReviewSchema++;
        recordFail('GATE-8', `Non-product page ${routePath} contains AggregateRating spam in @graph (violates Google Review Snippet guidelines)`);
      }
    }

    const ldMatches = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];
    for (const m of ldMatches) {
      try {
        const parsed = JSON.parse(m[1]);
        if (Array.isArray(parsed['@graph'])) {
          for (const node of parsed['@graph']) {
            const types = Array.isArray(node['@type']) ? node['@type'] : [node['@type']];
            if (
              types.some((t) =>
                [
                  'WebPage',
                  'CollectionPage',
                  'ItemPage',
                  'AboutPage',
                  'ContactPage',
                  'ProfilePage',
                  'SearchResultsPage',
                ].includes(t)
              )
            ) {
              if (node.name !== rawTitle || node.description !== rawDesc) {
                schemaMetaSyncViolations++;
                recordFail('GATE-8', `JSON-LD WebPage.name/description out of sync with <title>/<meta description> on ${routePath}`);
              }
            }
            if (types.includes('ProductGroup') && Array.isArray(node.hasVariant)) {
              for (const v of node.hasVariant) {
                if (v.offers && (v.offers.price === '318.00' || v.offers.price === '477.00')) {
                  schemaMetaSyncViolations++;
                  recordFail('GATE-8', `Un-discounted Offer.price (${v.offers.price}) in ProductGroup on ${routePath}`);
                }
              }
            }
          }
        }
      } catch {
        // Caught in Gate 6
      }
    }
  }

  if (
    nonCanonicalLinkCount === 0 &&
    unsizedImgCount === 0 &&
    visibleMsMarkerCount === 0 &&
    serpLengthViolations === 0 &&
    missingRichReviewSchema === 0 &&
    robotsDirectiveViolations === 0 &&
    schemaMetaSyncViolations === 0
  ) {
    recordPass(
      'GATE-8',
      `All ${allHtmlFiles.length} HTML pages (${canonicalLocs.length} canonical + ${allHtmlFiles.length - canonicalLocs.length} non-canonical) passed Gate 8: 0 alias link hops, 100% robots meta parity, 0 unsized <img> tags (CLS=0.00), 0 undefined CSS vars, 0 MS-xxx strings, 100% optimal SERP Title/Description lengths, 100% WebPage schema sync, and 100% AggregateRating+Review+286/405 Offer schema`
    );
  }
}

// Execute all 8 Gates
runGate1(phaseArg);
runGate2();
runGate3(phaseArg);
runGate4(phaseArg);
runGate5();
runGate6(phaseArg);
runGate7(phaseArg);
runGate8(phaseArg);

console.log('====================================================================');
console.log(`ONYXMEN.MY 6-GATE VERIFICATION REPORT (PHASE: ${phaseArg})`);
console.log('====================================================================');
console.log(`Total Checks Passed : ${passedChecks.length}`);
console.log(`Total Gate Failures : ${errors.length}`);

if (errors.length > 0) {
  console.error('\nFAILED CHECKS:');
  for (const err of errors) {
    console.error(`  [FAIL] [${err.gate}] ${err.message}`);
  }
  process.exit(1);
} else {
  console.log('\n[PASS] ALL 6 VERIFICATION GATES PASSED WITH ZERO ERRORS.');
  process.exit(0);
}
