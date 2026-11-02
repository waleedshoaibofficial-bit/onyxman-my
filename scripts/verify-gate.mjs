#!/usr/bin/env node
/**
 * ONYXMAN.MY — 6-GATE DETERMINISTIC VERIFICATION & REVOCATION ENGINE (MS-011)
 * Audits Foundation Configs (--phase=A) and Full Built HTML/CSS/JSON Artifacts (--phase=ALL)
 *
 * THE 6 MANDATORY GATES:
 * - Gate 1: Studio Image Presence & Non-Zero Byte Size Verification
 * - Gate 2: Line-Count Thresholds, Zero Truncation Markers, & Zero Rule #30 Violations
 * - Gate 3: Zero Broken Internal Links & Route Integrity
 * - Gate 4: Bilingual Hreflang Reciprocity (en-MY, ms-MY, x-default)
 * - Gate 5: Authentic Business Constants (159.00, 318.00, 477.00, MYR, waleedshoaibofficial@gmail.com, sales@onyxman.my, info@onyxman.my, Zero fake medical registrations)
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
    '/products/Sensitivity-of-thor/',
    '/products/grow-xl/',
    '/products/magnum-pump-xr/',
    '/ms/produk/horsemen/',
    '/ms/produk/Sensitivity-of-thor/',
    '/ms/produk/grow-xl/',
    '/ms/produk/magnum-pump-xr/',
    '/malaysia-delivery/kuala-lumpur/',
    '/malaysia-delivery/selangor/',
    '/malaysia-delivery/sabah-kota-kinabalu/',
    '/malaysia-delivery/sarawak-kuching/',
  ];

  for (const route of requiredRoutes) {
    if (!i18nText.includes(`'${route}'`)) {
      recordFail('GATE-3', `Route missing from i18n registry: ${route}`);
    }
  }
  recordPass('GATE-3', `Verified ${requiredRoutes.length} core bilingual routes in i18n.ts`);

  if (phase === 'ALL' || phase === 'LINKS') {
    const distDir = path.join(ROOT_DIR, 'dist');
    const htmlFiles = walkHtmlFiles(distDir);
    for (const htmlFile of htmlFiles) {
      const html = fs.readFileSync(htmlFile, 'utf8');
      const hrefMatches = [...html.matchAll(/href="(\/[^"#?]*)"/g)];
      for (const match of hrefMatches) {
        const href = match[1];
        if (href.startsWith('/assets/') || href.startsWith('/styles/') || href.startsWith('/scripts/')) {
          continue;
        }
        const targetCandidate1 = path.join(distDir, href, 'index.html');
        const targetCandidate2 = path.join(distDir, `${href}.html`);
        const targetCandidate3 = path.join(distDir, href);
        if (
          !fs.existsSync(targetCandidate1) &&
          !fs.existsSync(targetCandidate2) &&
          !fs.existsSync(targetCandidate3)
        ) {
          recordFail('GATE-3', `Broken internal link ${href} in ${path.relative(ROOT_DIR, htmlFile)}`);
        }
      }
    }
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
    const distDir = path.join(ROOT_DIR, 'dist');
    const htmlFiles = walkHtmlFiles(distDir);
    for (const htmlFile of htmlFiles) {
      const html = fs.readFileSync(htmlFile, 'utf8');
      if (
        !html.includes('hreflang="en-MY"') ||
        !html.includes('hreflang="ms-MY"') ||
        !html.includes('hreflang="x-default"')
      ) {
        recordFail('GATE-4', `Missing complete hreflang cluster in ${path.relative(ROOT_DIR, htmlFile)}`);
      }
    }
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
    { label: '2-Bottle Tier Price 318.00', token: '"318.00"', target: brandRaw },
    { label: '3-Bottle Tier Price 477.00', token: '"477.00"', target: brandRaw },
    { label: 'Currency MYR', token: '"MYR"', target: brandRaw },
    { label: 'Primary Merchant Email', token: 'waleedshoaibofficial@gmail.com', target: brandRaw },
    { label: 'Official Sales Alias', token: 'sales@onyxman.my', target: brandRaw },
    { label: 'Official Info Alias', token: 'info@onyxman.my', target: brandRaw },
    { label: 'IndexNow Verification Key', token: 'onyxman2026myindexnowkey8899aabb', target: brandRaw },
    { label: 'Pricing Engine 159.00', token: '159.00', target: pricingRaw },
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
    const distDir = path.join(ROOT_DIR, 'dist');
    const htmlFiles = walkHtmlFiles(distDir);
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
  }
}

// Execute all 6 Gates
runGate1(phaseArg);
runGate2();
runGate3(phaseArg);
runGate4(phaseArg);
runGate5();
runGate6(phaseArg);

console.log('====================================================================');
console.log(`ONYXMAN.MY 6-GATE VERIFICATION REPORT (PHASE: ${phaseArg})`);
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
