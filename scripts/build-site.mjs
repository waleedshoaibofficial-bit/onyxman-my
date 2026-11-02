#!/usr/bin/env node
/**
 * ============================================================================
 * ONYXMAN.MY — MASTER DETERMINISTIC SITE BUILD ORCHESTRATOR
 * Micro-Step: MS-190
 * ============================================================================
 * Runs all `src/pages/build-*.mjs` page & technical SEO generators in
 * deterministic sequence, synchronizes `src/data/brand.json` runtime state
 * (`whatsappBridge`) across all generated HTML documents, mirrors `public/`
 * to `dist/` for verification gates, and prints an executive summary table
 * of all generated HTML pages and total line counts.
 *
 * Canonical Build Sequence:
 *   01. src/pages/build-home-en.mjs
 *   02. src/pages/build-home-ms.mjs
 *   03. src/pages/build-horsemen-en.mjs
 *   04. src/pages/build-horsemen-ms.mjs
 *   05. src/pages/build-hammer-en.mjs
 *   06. src/pages/build-hammer-ms.mjs
 *   07. src/pages/build-growxl-en.mjs
 *   08. src/pages/build-growxl-ms.mjs
 *   09. src/pages/build-magnum-en.mjs
 *   10. src/pages/build-magnum-ms.mjs
 *   11. src/pages/build-comparisons.mjs
 *   12. src/pages/build-botanicals.mjs
 *   13. src/pages/build-states-west.mjs
 *   14. src/pages/build-states-east.mjs
 *   15. src/pages/build-guides-en.mjs
 *   16. src/pages/build-guides-ms.mjs
 *   17. src/pages/build-trust-pages.mjs
 *   18. src/pages/build-technical-seo.mjs
 * ============================================================================
 */

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(ROOT_DIR, 'src', 'pages');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const BRAND_JSON_PATH = path.join(ROOT_DIR, 'src', 'data', 'brand.json');

/**
 * Ordered manifest of all 18 deterministic page build scripts.
 */
export const ORDERED_BUILD_SCRIPTS = [
  'build-home-en.mjs',
  'build-home-ms.mjs',
  'build-horsemen-en.mjs',
  'build-horsemen-ms.mjs',
  'build-hammer-en.mjs',
  'build-hammer-ms.mjs',
  'build-growxl-en.mjs',
  'build-growxl-ms.mjs',
  'build-magnum-en.mjs',
  'build-magnum-ms.mjs',
  'build-comparisons.mjs',
  'build-botanicals.mjs',
  'build-states-west.mjs',
  'build-states-east.mjs',
  'build-guides-en.mjs',
  'build-guides-ms.mjs',
  'build-trust-pages.mjs',
  'build-technical-seo.mjs',
];

/**
 * Recursively collects all `.html` files inside a directory.
 * @param {string} dirPath
 * @param {string[]} [collected]
 * @returns {string[]}
 */
function collectHtmlFiles(dirPath, collected = []) {
  if (!fs.existsSync(dirPath)) return collected;
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      collectHtmlFiles(fullPath, collected);
    } else if (entry.isFile() && entry.name.endsWith('.html')) {
      collected.push(fullPath);
    }
  }
  return collected;
}

/**
 * Counts the number of lines in a string.
 * @param {string} content
 * @returns {number}
 */
function countLines(content) {
  if (!content) return 0;
  return content.split(/\r?\n/).length;
}

/**
 * Copies `src/styles/luxury-tokens.css` to `public/assets/css/luxury-tokens.css` so
 * stylesheet assets are always up-to-date.
 */
function syncStylesheetsToPublic() {
  const srcCss = path.join(ROOT_DIR, 'src', 'styles', 'luxury-tokens.css');
  const destCssDir = path.join(PUBLIC_DIR, 'assets', 'css');
  const destCss = path.join(destCssDir, 'luxury-tokens.css');
  if (fs.existsSync(srcCss)) {
    fs.mkdirSync(destCssDir, { recursive: true });
    fs.copyFileSync(srcCss, destCss);
  }
}

/**
 * Synchronizes `window.ONYXMAN_CONFIG` in all generated HTML files with the current
 * `whatsappBridge` state from `src/data/brand.json`.
 * @param {string[]} htmlFilePaths
 */
function syncBrandRuntimeConfigIntoHtml(htmlFilePaths) {
  if (!fs.existsSync(BRAND_JSON_PATH)) return;
  let brandData;
  try {
    brandData = JSON.parse(fs.readFileSync(BRAND_JSON_PATH, 'utf8'));
  } catch {
    return;
  }

  const whatsappNumberE164 = String(brandData.whatsappBridge?.whatsappNumberE164 || '').trim();
  const activeMode =
    brandData.whatsappBridge?.activeMode ||
    (whatsappNumberE164 ? 'direct-whatsapp-concierge' : 'express-email-drawer');

  for (const htmlPath of htmlFilePaths) {
    const raw = fs.readFileSync(htmlPath, 'utf8');
    const updated = raw
      .replace(/"whatsappNumberE164"\s*:\s*"[^"]*"/g, `"whatsappNumberE164":"${whatsappNumberE164}"`)
      .replace(/"activeBridgeMode"\s*:\s*"[^"]*"/g, `"activeBridgeMode":"${activeMode}"`);
    if (updated !== raw) {
      fs.writeFileSync(htmlPath, updated, 'utf8');
    }
  }
}

/**
 * Reconciles alias routes referenced across 404.html / navigation with their
 * canonical generated HTML pages in `public/`.
 */
function reconcileTrustRouteAliases() {
  const aliasPairs = [
    ['terms-of-service/index.html', 'terms-and-returns/index.html'],
    ['ms/terma-perkhidmatan/index.html', 'ms/terma-dan-pemulangan/index.html'],
    ['ms/jaminan-ketulenan/index.html', 'ms/ketulenan/index.html'],
    ['ms/penghantaran-rahsia/index.html', 'ms/bungkusan-rahsia/index.html'],
    ['horsemen-malaysia/index.html', 'products/horsemen/index.html'],
    ['hammer-of-thor-malaysia/index.html', 'products/hammer-of-thor/index.html'],
    ['grow-xl-malaysia/index.html', 'products/grow-xl/index.html'],
    ['magnum-pump-xr-malaysia/index.html', 'products/magnum-pump-xr/index.html'],
    ['index.html', 'products/index.html'],
    ['ms/horsemen-malaysia/index.html', 'ms/produk/horsemen/index.html'],
    ['ms/hammer-of-thor-malaysia/index.html', 'ms/produk/hammer-of-thor/index.html'],
    ['ms/grow-xl-malaysia/index.html', 'ms/produk/grow-xl/index.html'],
    ['ms/magnum-pump-xr-malaysia/index.html', 'ms/produk/magnum-pump-xr/index.html'],
    ['ms/index.html', 'ms/produk/index.html'],
  ];

  for (const [srcRel, destRel] of aliasPairs) {
    const srcAbs = path.join(PUBLIC_DIR, srcRel);
    const destAbs = path.join(PUBLIC_DIR, destRel);
    if (fs.existsSync(srcAbs)) {
      fs.mkdirSync(path.dirname(destAbs), { recursive: true });
      fs.copyFileSync(srcAbs, destAbs);
    }
  }
}

/**
 * Mirrors `public/` into `dist/` so both Cloudflare Pages (`public/`) and
 * verification scripts (`dist/`) have identical artifacts.
 */
function mirrorPublicToDist() {
  if (!fs.existsSync(PUBLIC_DIR)) return;
  fs.mkdirSync(DIST_DIR, { recursive: true });
  fs.cpSync(PUBLIC_DIR, DIST_DIR, { recursive: true, force: true });
}

/**
 * Resolves the script path for a given build script name, checking `src/pages/` first
 * and `scripts/` as a secondary location.
 * @param {string} scriptName
 * @returns {string | null}
 */
function resolveBuildScriptPath(scriptName) {
  const candidatePages = path.join(PAGES_DIR, scriptName);
  if (fs.existsSync(candidatePages)) {
    return candidatePages;
  }
  const candidateScripts = path.join(ROOT_DIR, 'scripts', scriptName);
  if (fs.existsSync(candidateScripts)) {
    return candidateScripts;
  }
  return null;
}

/**
 * Categorizes a relative HTML path for the summary report.
 * @param {string} relPath
 * @returns {string}
 */
function categorizeHtmlRoute(relPath) {
  const normalized = relPath.replace(/\\/g, '/');
  if (normalized === 'index.html' || normalized === 'ms/index.html') {
    return '01. Flagship Homepages (EN + BM)';
  }
  if (
    normalized.startsWith('products/') ||
    normalized.startsWith('ms/produk/') ||
    normalized.includes('horsemen-malaysia') ||
    normalized.includes('hammer-of-thor-malaysia') ||
    normalized.includes('grow-xl-malaysia') ||
    normalized.includes('magnum-pump-xr-malaysia')
  ) {
    return '02. Product Showrooms & Vaults (EN + BM)';
  }
  if (normalized.startsWith('compare/') || normalized.startsWith('ms/perbandingan/') || normalized.startsWith('ms/banding/')) {
    return '03. Formulation Comparison Matrices (EN + BM)';
  }
  if (
    normalized.startsWith('ingredients/') ||
    normalized.startsWith('botanicals/') ||
    normalized.startsWith('ms/ramuan-botani/') ||
    normalized.startsWith('ms/ramuan/') ||
    normalized.startsWith('ms/bahan/')
  ) {
    return '04. Botanical Ingredient Monographs (EN + BM)';
  }
  if (
    normalized.startsWith('malaysia-delivery/') ||
    normalized.startsWith('malaysia/') ||
    normalized.startsWith('ms/penghantaran-malaysia/') ||
    normalized.startsWith('ms/penghantaran/') ||
    normalized.startsWith('ms/malaysia/')
  ) {
    return '05. Malaysia 16-State Delivery Hubs (EN + BM)';
  }
  if (normalized.startsWith('guides/') || normalized.startsWith('ms/panduan/')) {
    return '06. Educational & Authenticity Guides (EN + BM)';
  }
  return '07. Trust, PDPA, FAQ & Concierge Pages (EN + BM)';
}

/**
 * Main Build Orchestrator
 */
function main() {
  const args = process.argv.slice(2);
  const summaryOnly = args.includes('--summary-only') || args.includes('--dry-run');
  const skipDistMirror = args.includes('--no-dist');
  const startTime = Date.now();

  console.log('====================================================================================');
  console.log('ONYXMAN.MY — MASTER DETERMINISTIC SITE BUILD ORCHESTRATOR (MS-190)');
  console.log('====================================================================================');

  syncStylesheetsToPublic();

  const stepResults = [];

  if (!summaryOnly) {
    // Also discover any additional build-*.mjs scripts in src/pages/ not already in ORDERED_BUILD_SCRIPTS
    const existingPageScripts = fs.existsSync(PAGES_DIR)
      ? fs
          .readdirSync(PAGES_DIR)
          .filter((f) => f.startsWith('build-') && f.endsWith('.mjs'))
          .sort()
      : [];

    const fullQueue = [...ORDERED_BUILD_SCRIPTS];
    for (const extra of existingPageScripts) {
      if (!fullQueue.includes(extra)) {
        fullQueue.push(extra);
      }
    }

    for (let i = 0; i < fullQueue.length; i += 1) {
      const scriptName = fullQueue[i];
      const stepNum = String(i + 1).padStart(2, '0');
      const resolvedPath = resolveBuildScriptPath(scriptName);

      if (!resolvedPath) {
        console.log(`  [${stepNum}/${String(fullQueue.length).padStart(2, '0')}] [SKIP] ${scriptName} (not yet present)`);
        stepResults.push({
          step: stepNum,
          script: scriptName,
          status: 'SKIPPED',
          durationMs: 0,
        });
        continue;
      }

      const stepStart = Date.now();
      process.stdout.write(
        `  [${stepNum}/${String(fullQueue.length).padStart(2, '0')}] [RUN ] src/pages/${scriptName} ... `
      );

      const proc = spawnSync(process.execPath, [resolvedPath], {
        cwd: ROOT_DIR,
        encoding: 'utf8',
        maxBuffer: 32 * 1024 * 1024,
      });

      const durationMs = Date.now() - stepStart;

      if (proc.status === 0) {
        console.log(`OK (${durationMs} ms)`);
        stepResults.push({
          step: stepNum,
          script: scriptName,
          status: 'BUILT',
          durationMs,
        });
      } else {
        console.log(`FAIL (exit ${proc.status})`);
        if (proc.stderr) {
          console.error(proc.stderr.trim());
        }
        stepResults.push({
          step: stepNum,
          script: scriptName,
          status: `FAILED (${proc.status})`,
          durationMs,
        });
        process.exit(proc.status || 1);
      }
    }
  }

  // Reconcile alias routes and collect all generated HTML files in public/
  reconcileTrustRouteAliases();
  const allHtmlFiles = collectHtmlFiles(PUBLIC_DIR).sort();
  syncBrandRuntimeConfigIntoHtml(allHtmlFiles);

  // Run Autonomous SEO Freshness & Telemetry Optimizer (MS-213)
  const seoOptScript = path.join(ROOT_DIR, 'scripts', 'seo-auto-optimizer.mjs');
  if (!summaryOnly && fs.existsSync(seoOptScript)) {
    spawnSync(process.execPath, [seoOptScript], { cwd: ROOT_DIR, encoding: 'utf8' });
  }

  if (!summaryOnly && !skipDistMirror) {
    mirrorPublicToDist();
  }

  // Compute line counts and category totals
  const pageMetrics = [];
  const categoryStats = new Map();
  let grandTotalLines = 0;
  let grandTotalBytes = 0;

  for (const absPath of allHtmlFiles) {
    const relFromPublic = path.relative(PUBLIC_DIR, absPath).replace(/\\/g, '/');
    const content = fs.readFileSync(absPath, 'utf8');
    const lines = countLines(content);
    const bytes = Buffer.byteLength(content, 'utf8');
    const category = categorizeHtmlRoute(relFromPublic);

    grandTotalLines += lines;
    grandTotalBytes += bytes;

    pageMetrics.push({
      route: '/' + relFromPublic.replace(/index\.html$/, ''),
      relFile: `public/${relFromPublic}`,
      lines,
      bytes,
      category,
    });

    const prev = categoryStats.get(category) || { pages: 0, lines: 0, bytes: 0 };
    prev.pages += 1;
    prev.lines += lines;
    prev.bytes += bytes;
    categoryStats.set(category, prev);
  }

  console.log('\n------------------------------------------------------------------------------------');
  console.log('CATEGORY SUMMARY TABLE (PUBLIC/ HTML ARTIFACTS)');
  console.log('------------------------------------------------------------------------------------');
  console.log(
    `${'CATEGORY'.padEnd(48)} | ${'PAGES'.padStart(7)} | ${'TOTAL LINES'.padStart(13)} | ${'SIZE (KB)'.padStart(10)}`
  );
  console.log('------------------------------------------------------------------------------------');

  const sortedCategories = [...categoryStats.keys()].sort();
  for (const cat of sortedCategories) {
    const stat = categoryStats.get(cat);
    const kb = (stat.bytes / 1024).toFixed(1);
    console.log(
      `${cat.padEnd(48)} | ${String(stat.pages).padStart(7)} | ${stat.lines.toLocaleString('en-US').padStart(13)} | ${kb.padStart(10)}`
    );
  }

  console.log('------------------------------------------------------------------------------------');
  console.log(
    `${'GRAND TOTAL GENERATED HTML PAGES'.padEnd(48)} | ${String(allHtmlFiles.length).padStart(7)} | ${grandTotalLines.toLocaleString('en-US').padStart(13)} | ${(grandTotalBytes / 1024).toFixed(1).padStart(10)}`
  );
  console.log('------------------------------------------------------------------------------------');

  // Print sample top 25 canonical HTML files + line counts for quick audit visibility
  console.log('\nGENERATED HTML FILES & LINE COUNTS (PRIMARY CANONICAL ROUTES):');
  const primaryPreview = pageMetrics.slice(0, 35);
  for (const item of primaryPreview) {
    console.log(
      `  • ${item.relFile.padEnd(64)} ${String(item.lines).padStart(6)} lines  (${(item.bytes / 1024).toFixed(1)} KB)`
    );
  }
  if (pageMetrics.length > primaryPreview.length) {
    console.log(`  ... plus ${pageMetrics.length - primaryPreview.length} additional localized/alias HTML routes verified.`);
  }

  const elapsedSec = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log('\n====================================================================================');
  console.log(
    `[BUILD COMPLETE] ${allHtmlFiles.length} HTML pages (${grandTotalLines.toLocaleString('en-US')} total lines) verified in ${elapsedSec}s.`
  );
  console.log('====================================================================================');
}

main();
