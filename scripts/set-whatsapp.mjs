#!/usr/bin/env node
/**
 * ============================================================================
 * ONYXMAN.MY — DUAL-MODE WHATSAPP & EXPRESS EMAIL BRIDGE ACTIVATOR CLI
 * Micro-Steps: MS-186 & MS-187
 * ============================================================================
 * Production CLI utility to inspect, activate, or reset the Onyxman Malaysia
 * Dual-Mode Order & Concierge Bridge in `src/data/brand.json`.
 *
 * Supported Commands:
 *   1. Inspect current bridge status (read-only, zero file writes):
 *      node scripts/set-whatsapp.mjs --status
 *
 *   2. Activate Day-3+ Direct WhatsApp Concierge Mode (Malaysian E.164):
 *      node scripts/set-whatsapp.mjs 60123456789
 *      node scripts/set-whatsapp.mjs 60123456789 --rebuild
 *
 *   3. Reset to Day 1–2 Express Email Drawer + Reverse WhatsApp Mode:
 *      node scripts/set-whatsapp.mjs --clear
 *      node scripts/set-whatsapp.mjs --clear --rebuild
 * ============================================================================
 */

import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const BRAND_JSON_PATH = path.join(ROOT_DIR, 'src', 'data', 'brand.json');
const BUILD_SCRIPT_PATH = path.join(ROOT_DIR, 'scripts', 'build-site.mjs');

const MODE_EXPRESS_EMAIL_DRAWER = 'express-email-drawer';
const MODE_DIRECT_WHATSAPP_CONCIERGE = 'direct-whatsapp-concierge';

/**
 * Normalizes a raw Malaysian phone input string into strict E.164 digits (`601XXXXXXXX`).
 * Accepts inputs such as:
 * - "60123456789"   -> "60123456789"
 * - "+60123456789"  -> "60123456789"
 * - "012-345 6789"  -> "60123456789"
 * - "601123456789"  -> "601123456789"
 *
 * @param {string} rawInput
 * @returns {{ valid: boolean, normalizedE164: string, formattedDisplay: string, reason: string }}
 */
export function validateAndNormalizeMalaysiaE164(rawInput) {
  const trimmed = String(rawInput || '').trim();
  const digitsOnly = trimmed.replace(/\D+/g, '');

  if (!digitsOnly) {
    return {
      valid: false,
      normalizedE164: '',
      formattedDisplay: '',
      reason: 'Phone number input is empty or contains no digits.',
    };
  }

  let candidate = digitsOnly;
  if (candidate.startsWith('01')) {
    candidate = '60' + candidate.slice(1);
  } else if (candidate.startsWith('1') && (candidate.length === 9 || candidate.length === 10)) {
    candidate = '60' + candidate;
  }

  // Malaysian mobile numbers in E.164 format start with 601 followed by 8 or 9 digits
  // Total length: 11 digits (e.g., 60123456789) or 12 digits (e.g., 601123456789 for 011/015 prefixes)
  const isValidMobile = /^601[0-9]\d{7,8}$/.test(candidate);
  if (!isValidMobile) {
    return {
      valid: false,
      normalizedE164: candidate,
      formattedDisplay: '+' + candidate,
      reason:
        `Invalid Malaysian mobile E.164 number "${trimmed}" (resolved to "${candidate}"). ` +
        'Expected 11 or 12 digits beginning with 601 (e.g., 60123456789 or 601123456789).',
    };
  }

  const prefix = candidate.slice(0, 4); // e.g., 6012
  const rest = candidate.slice(4);
  const mid = rest.slice(0, 3);
  const tail = rest.slice(3);
  const formattedDisplay = `+${prefix.slice(0, 2)} ${prefix.slice(2)}-${mid} ${tail}`;

  return {
    valid: true,
    normalizedE164: candidate,
    formattedDisplay,
    reason: 'Valid Malaysian E.164 mobile number.',
  };
}

/**
 * Reads and parses `src/data/brand.json` without mutating it.
 * @returns {Record<string, any>}
 */
function readBrandConfig() {
  if (!fs.existsSync(BRAND_JSON_PATH)) {
    throw new Error(`Missing brand configuration file at: ${BRAND_JSON_PATH}`);
  }
  const raw = fs.readFileSync(BRAND_JSON_PATH, 'utf8');
  return JSON.parse(raw);
}

/**
 * Writes updated `brand.json` atomically with clean 2-space indentation and trailing newline.
 * @param {Record<string, any>} brandObj
 */
function writeBrandConfig(brandObj) {
  const serialized = JSON.stringify(brandObj, null, 2) + '\n';
  fs.writeFileSync(BRAND_JSON_PATH, serialized, 'utf8');
}

/**
 * Synchronizes `window.ONYXMAN_CONFIG` inside built HTML files in `public/` if requested.
 * @param {string} whatsappNumberE164
 * @param {string} activeMode
 * @returns {number} Count of updated HTML files
 */
function syncBuiltHtmlRuntimeConfig(whatsappNumberE164, activeMode) {
  const publicDir = path.join(ROOT_DIR, 'public');
  if (!fs.existsSync(publicDir)) return 0;

  const htmlFiles = [];
  function walk(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.html')) {
        htmlFiles.push(fullPath);
      }
    }
  }
  walk(publicDir);

  let updatedCount = 0;
  for (const filePath of htmlFiles) {
    const original = fs.readFileSync(filePath, 'utf8');
    const updated = original
      .replace(/"whatsappNumberE164"\s*:\s*"[^"]*"/g, `"whatsappNumberE164":"${whatsappNumberE164}"`)
      .replace(/"activeBridgeMode"\s*:\s*"[^"]*"/g, `"activeBridgeMode":"${activeMode}"`);
    if (updated !== original) {
      fs.writeFileSync(filePath, updated, 'utf8');
      updatedCount += 1;
    }
  }
  return updatedCount;
}

/**
 * Prints the formatted status report for `src/data/brand.json`.
 * @param {Record<string, any>} brandData
 * @param {string} bannerTitle
 */
function printBridgeStatusReport(brandData, bannerTitle = 'ONYXMAN.MY — WHATSAPP & EXPRESS EMAIL BRIDGE STATUS') {
  const bridge = brandData.whatsappBridge || {};
  const contact = brandData.contact || {};
  const pricing = brandData.pricing || {};
  const rawNumber = String(bridge.whatsappNumberE164 || '').trim();
  const activeMode = bridge.activeMode || (rawNumber ? MODE_DIRECT_WHATSAPP_CONCIERGE : MODE_EXPRESS_EMAIL_DRAWER);
  const isDirectWhatsAppActive = Boolean(rawNumber) && activeMode === MODE_DIRECT_WHATSAPP_CONCIERGE;

  console.log('============================================================================');
  console.log(bannerTitle);
  console.log('============================================================================');
  console.log(`Config File Path         : ${path.relative(ROOT_DIR, BRAND_JSON_PATH)}`);
  console.log(`Brand Domain             : ${brandData.brand?.domain || 'https://www.onyxmen.my'}`);
  console.log(`Active Bridge Mode       : ${activeMode}`);
  console.log(
    `Operational Stage        : ${
      isDirectWhatsAppActive
        ? 'DAY 3+ DIRECT WHATSAPP CONCIERGE + DUAL EMAIL LOGGING'
        : 'DAYS 1–2 EXPRESS DISCREET EMAIL DRAWER + 1-CLICK REVERSE WHATSAPP'
    }`
  );
  console.log(`Active WhatsApp (E.164)  : ${rawNumber ? `+${rawNumber} (${rawNumber})` : '(empty — Express Email Drawer Active)'}`);
  console.log(
    `Direct wa.me Endpoint    : ${
      rawNumber ? `https://wa.me/${rawNumber}` : 'https://wa.me/<buyer_phone> (Reverse WhatsApp via Merchant Email)'
    }`
  );
  console.log('----------------------------------------------------------------------------');
  console.log('MERCHANT NOTIFICATION & FAILOVER ENDPOINTS:');
  console.log(`Primary Order Inbox      : ${contact.primaryOrderNotificationEmail || 'waleedshoaibofficial@gmail.com'}`);
  console.log(`Official Sales Alias     : ${contact.officialAliases?.sales || 'sales@onyxman.my'}`);
  console.log(`Official Info Alias      : ${contact.officialAliases?.info || 'info@onyxman.my'}`);
  console.log(`FormSubmit AJAX Endpoint : ${bridge.formSubmitAjaxEndpoint || 'https://formsubmit.co/ajax/waleedshoaibofficial@gmail.com'}`);
  console.log(`Web3Forms Failover URL   : ${bridge.web3FormsEndpoint || 'https://api.web3forms.com/submit'}`);
  console.log(`Reverse WhatsApp Enabled : ${Boolean(bridge.reverseWhatsAppProtocol?.enabled)}`);
  console.log(
    `Official Tier Pricing    : 1 Bottle = ${pricing.singleBottleFormatted || 'RM 159'} (${pricing.singleBottleSchema || '159.00'} ${pricing.currency || 'MYR'}) | 2 Bottles = RM 318 | 3 Bottles = RM 477`
  );
  console.log('============================================================================');
}

/**
 * Triggers `node scripts/build-site.mjs` when `--rebuild` is passed.
 */
function runSiteRebuildIfNeeded(shouldRebuild, whatsappNumberE164, activeMode) {
  if (!shouldRebuild) return;

  console.log('\n[REBUILD] Triggering full site rebuild via scripts/build-site.mjs...');
  if (fs.existsSync(BUILD_SCRIPT_PATH)) {
    const result = spawnSync(process.execPath, [BUILD_SCRIPT_PATH], {
      cwd: ROOT_DIR,
      stdio: 'inherit',
    });
    if (result.status !== 0) {
      console.error(`[ERROR] Site rebuild exited with non-zero status (${result.status}).`);
      process.exit(result.status || 1);
    }
  } else {
    console.log('[WARN] scripts/build-site.mjs not found; syncing existing HTML files in public/ directly...');
  }

  const syncedHtmlCount = syncBuiltHtmlRuntimeConfig(whatsappNumberE164, activeMode);
  console.log(`[SYNC] Synchronized window.ONYXMAN_CONFIG across ${syncedHtmlCount} generated HTML file(s).`);
}

/**
 * Prints CLI usage instructions.
 */
function printHelp() {
  console.log(`
Usage:
  node scripts/set-whatsapp.mjs --status
  node scripts/set-whatsapp.mjs <601XXXXXXXX> [--rebuild] [--sync-html]
  node scripts/set-whatsapp.mjs --clear [--rebuild] [--sync-html]

Examples:
  node scripts/set-whatsapp.mjs --status
  node scripts/set-whatsapp.mjs 60123456789
  node scripts/set-whatsapp.mjs 60123456789 --rebuild
  node scripts/set-whatsapp.mjs --clear
`);
}

/**
 * Main CLI Entrypoint
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length === 0 || args.includes('--help') || args.includes('-h')) {
    printHelp();
    const brandData = readBrandConfig();
    printBridgeStatusReport(brandData);
    process.exit(0);
  }

  const isStatusOnly = args.includes('--status') || args.includes('-s');
  const isClearMode =
    args.includes('--clear') || args.includes('--reset') || args.includes('--fallback') || args.includes('--disable');
  const shouldRebuild = args.includes('--rebuild') || args.includes('-r');
  const shouldSyncHtml = args.includes('--sync-html');
  const outputJson = args.includes('--json');

  const brandData = readBrandConfig();

  // 1. Read-Only Status Mode (Zero file modifications)
  if (isStatusOnly) {
    if (outputJson) {
      console.log(
        JSON.stringify(
          {
            activeMode: brandData.whatsappBridge?.activeMode,
            whatsappNumberE164: brandData.whatsappBridge?.whatsappNumberE164,
            primaryOrderNotificationEmail: brandData.contact?.primaryOrderNotificationEmail,
            officialAliases: brandData.contact?.officialAliases,
            formSubmitAjaxEndpoint: brandData.whatsappBridge?.formSubmitAjaxEndpoint,
            web3FormsEndpoint: brandData.whatsappBridge?.web3FormsEndpoint,
          },
          null,
          2
        )
      );
    } else {
      printBridgeStatusReport(brandData, 'ONYXMAN.MY — READ-ONLY WHATSAPP BRIDGE STATUS (--status)');
    }
    process.exit(0);
  }

  // 2. Clear / Fallback Mode (Days 1–2 Express Email Drawer)
  if (isClearMode) {
    if (!brandData.whatsappBridge) {
      brandData.whatsappBridge = {};
    }
    brandData.whatsappBridge.whatsappNumberE164 = '';
    brandData.whatsappBridge.activeMode = MODE_EXPRESS_EMAIL_DRAWER;

    writeBrandConfig(brandData);

    if (shouldSyncHtml && !shouldRebuild) {
      const count = syncBuiltHtmlRuntimeConfig('', MODE_EXPRESS_EMAIL_DRAWER);
      console.log(`[SYNC] Reset window.ONYXMAN_CONFIG in ${count} HTML file(s).`);
    }

    runSiteRebuildIfNeeded(shouldRebuild, '', MODE_EXPRESS_EMAIL_DRAWER);

    printBridgeStatusReport(
      brandData,
      'ONYXMAN.MY — RESET TO DAYS 1–2 EXPRESS EMAIL DRAWER MODE (--clear)'
    );
    process.exit(0);
  }

  // 3. Activate Direct WhatsApp Concierge Mode with Malaysian E.164 Number
  let rawPhoneCandidate = '';
  for (const arg of args) {
    if (arg.startsWith('--number=') || arg.startsWith('--phone=')) {
      rawPhoneCandidate = arg.split('=')[1] || '';
      break;
    }
    if (!arg.startsWith('-')) {
      rawPhoneCandidate = arg;
      break;
    }
  }

  if (!rawPhoneCandidate) {
    console.error('[ERROR] Missing Malaysian WhatsApp number or recognized flag (--status | --clear).');
    printHelp();
    process.exit(1);
  }

  const validation = validateAndNormalizeMalaysiaE164(rawPhoneCandidate);
  if (!validation.valid) {
    console.error(`[ERROR] ${validation.reason}`);
    process.exit(1);
  }

  if (!brandData.whatsappBridge) {
    brandData.whatsappBridge = {};
  }

  brandData.whatsappBridge.whatsappNumberE164 = validation.normalizedE164;
  brandData.whatsappBridge.activeMode = MODE_DIRECT_WHATSAPP_CONCIERGE;

  writeBrandConfig(brandData);

  if (shouldSyncHtml && !shouldRebuild) {
    const count = syncBuiltHtmlRuntimeConfig(validation.normalizedE164, MODE_DIRECT_WHATSAPP_CONCIERGE);
    console.log(`[SYNC] Updated window.ONYXMAN_CONFIG in ${count} HTML file(s).`);
  }

  runSiteRebuildIfNeeded(shouldRebuild, validation.normalizedE164, MODE_DIRECT_WHATSAPP_CONCIERGE);

  printBridgeStatusReport(
    brandData,
    `ONYXMAN.MY — DIRECT WHATSAPP CONCIERGE ACTIVATED (+${validation.normalizedE164})`
  );
  process.exit(0);
}

main();
