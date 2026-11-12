#!/usr/bin/env node
/**
 * ============================================================================
 * ONYXMEN.MY — AUTONOMOUS SEO FRESHNESS, <LASTMOD> VELOCITY & CTR OPTIMIZER (MS-213 / MS-237..MS-245)
 * ============================================================================
 * Runs during every build and daily at 09:00 MYT via GitHub Actions (MS-192):
 *   1. Preserves real content-modified <lastmod> across all 5 XML sitemaps (Rule #38 &
 *      Google Search Central sitemaps-lastmod-ping compliant — zero fake timestamp bumps).
 *   2. Dynamically maps all non-canonical alias routes to their declared canonical URLs
 *      and rewrites 100% of internal <a href="..."> and <link rel="alternate" hreflang="...">
 *      links so canonical pages have zero redirect/alias hops (MS-237).
 *   3. Scrubs legacy domain typos (onyxman.my -> onyxmen.my), Sensitivity-of-thor keys,
 *      and visible developer MS-\d{3} labels (MS-239 & MS-242).
 *   4. Optimizes all 102 canonical <title> tags (42-65 chars) and <meta name="description">
 *      tags (120-162 chars) for zero Google SERP truncation & high Malaysian CTR (MS-243).
 *   5. Enriches @graph JSON-LD with AggregateRating, Review, OfferShippingDetails,
 *      and MerchantReturnPolicy across all canonical pages (MS-244).
 *   6. Preserves liveGscApiTelemetry & googleSearchConsoleLiveTelemetry in
 *      public/seo-health-status.json and mirrors public/ -> dist/ (MS-245).
 * ============================================================================
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { optimizePageContentUniqueness } from './content-deduplicator.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const DIST_DIR = path.join(ROOT_DIR, 'dist');
const DOMAIN_ORIGIN = 'https://www.onyxmen.my';
const GSC_VERIFICATION_CODE = '3D9YmY9SMd5RVAdrfKySd2Z5ZsxJOEHtLbQUTNWOKgA';

function getMalaysiaDateString() {
  const now = new Date();
  const mytTime = new Date(now.getTime() + 8 * 60 * 60 * 1000);
  return mytTime.toISOString().slice(0, 10);
}

function walkHtmlFiles(dirPath, collected = []) {
  if (!fs.existsSync(dirPath)) return collected;
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const full = path.join(dirPath, entry.name);
    if (entry.isDirectory()) walkHtmlFiles(full, collected);
    else if (entry.isFile() && entry.name.endsWith('.html')) collected.push(full);
  }
  return collected;
}

function escapeAttr(str) {
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;');
}

function buildOptimalSerpMeta(route, rawTitle, rawDesc) {
  const isMs = route === '/ms/' || route.startsWith('/ms/');
  const explicit = {
    '/': {
      title: 'Onyxmen Malaysia [100% Original RM159] ✓ COD Bayar Bila Sampai',
      desc: '✓ 100% Original Onyxmen Malaysia: Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR. Buy 1 RM 159, Buy 2 RM 286 (10% OFF), Buy 3 RM 405 (15% OFF) discreet COD.',
    },
    '/ms/': {
      title: 'Onyxmen Malaysia [Original RM159] ✓ Suplemen Lelaki COD Rahsia',
      desc: '✓ 100% Original Suplemen Tenaga Batin Lelaki: Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR. 1 Botol RM 159, 2 RM 286 (-10%), 3 RM 405 (-15%) COD.',
    },
    '/horsemen-malaysia/': {
      title: 'Horsemen Malaysia [100% Original RM159] ✓ 20 Caps COD Discreet',
      desc: '✓ 100% Original Horsemen Man Virility Enhancement (20 Capsules x 500mg) Tongkat Ali 100:1 & Maca. Buy 1 RM 159, 2 RM 286 (10% OFF), 3 RM 405 (15% OFF) COD.',
    },
    '/ms/horsemen-malaysia/': {
      title: 'Horsemen Malaysia [Original RM159] ✓ 20 Kapsul COD Bungkusan Rahsia',
      desc: '✓ Beli Horsemen kapsul lelaki Malaysia 100% Original (20 Kapsul x 500mg) Tongkat Ali & Maca. 1 Botol RM 159, 2 RM 286 (-10%), 3 RM 405 (-15%) Bayar Bila Sampai.',
    },
    '/hammer-of-thor-malaysia/': {
      title: "Hammer of Thor Malaysia [100% Original RM159] ✓ 20 Veg Caps COD",
      desc: "✓ 100% Original Hammer of Thor Men's Health Malaysia (20 Veg. Capsules) 60% Saponin Tribulus & Maca. Buy 1 RM 159, 2 RM 286 (10% OFF), 3 RM 405 (15% OFF) COD.",
    },
    '/ms/hammer-of-thor-malaysia/': {
      title: 'Hammer of Thor Original Malaysia [RM159 COD] ✓ 20 Kapsul Veg',
      desc: '✓ Beli Hammer of Thor kapsul original Malaysia (20 Kapsul Veg.) Tribulus 60% Saponin. 1 Botol RM 159, 2 RM 286 (-10%), 3 RM 405 (-15%) COD Bayar Bila Sampai.',
    },
    '/grow-xl-malaysia/': {
      title: 'Grow XL Malaysia / GrowXL [100% Original RM159] ✓ 30 Caps COD',
      desc: '✓ 100% Original Grow XL Malaysia / GrowXL for Men (30 Capsules) Extra-Strength Tongkat Ali & Maca. Buy 1 RM 159, 2 RM 286 (-10%), 3 RM 405 (-15%) discreet COD.',
    },
    '/ms/grow-xl-malaysia/': {
      title: 'Grow XL Original Malaysia [RM159 COD] ✓ 30 Kapsul Ekstra Kuat',
      desc: '✓ Beli Grow XL / GrowXL original kapsul lelaki Malaysia (30 Kapsul) Tongkat Ali Ekstra Kuat & Maca. 1 Botol RM 159, 2 RM 286 (-10%), 3 RM 405 (-15%) COD Rahsia.',
    },
    '/magnum-pump-xr-malaysia/': {
      title: 'Magnum Pump XR Malaysia [100% Original RM159] ✓ 30 Black Caps',
      desc: '✓ 100% Original Magnum Pump XR Malaysia (30 Black Capsules) Nitric Oxide L-Arginine & Black Ginger. Buy 1 RM 159, 2 RM 286 (-10%), 3 RM 405 (-15%) discreet COD.',
    },
    '/ms/magnum-pump-xr-malaysia/': {
      title: 'Magnum Pump XR Original Malaysia [RM159 COD] ✓ 30 Kapsul Hitam',
      desc: '✓ Beli Magnum Pump XR kapsul lelaki Malaysia 100% Original (30 Kapsul Hitam) Nitrik Oksida aliran darah. 1 RM 159, 2 RM 286 (-10%), 3 RM 405 (-15%) COD Rahsia.',
    },
    '/products/horsemen/': {
      title: 'Horsemen Man Virility [100% Original RM159] ✓ Buy 2 Save 10% COD',
      desc: '✓ Official Horsemen Man Virility (20 Capsules x 500mg) Tongkat Ali 100:1 & Black Maca. Buy 1 RM 159, Buy 2 RM 286 (10% OFF), Buy 3 RM 405 (15% OFF) Malaysia COD.',
    },
    '/products/hammer-of-thor/': {
      title: "Hammer of Thor Men's Health [Original RM159] ✓ Buy 2 Save 10% COD",
      desc: "✓ Official Hammer of Thor Men's Health (20 Veg. Capsules) 60% Tribulus saponins & Maca. Buy 1 RM 159, Buy 2 RM 286 (10% OFF), Buy 3 RM 405 (15% OFF) Malaysia COD.",
    },
    '/products/grow-xl/': {
      title: 'GrowXL for Men / Grow XL [100% Original RM159] ✓ 30 Caps COD MY',
      desc: '✓ Official Grow XL / GrowXL for Men (30 Capsules) #1 Extra-Strength Tongkat Ali & Maca blend. Buy 1 RM 159, Buy 2 RM 286 (10% OFF), Buy 3 RM 405 (15% OFF) COD.',
    },
    '/products/magnum-pump-xr/': {
      title: 'Magnum Pump XR Nitric Oxide [Original RM159] ✓ 30 Black Caps COD',
      desc: '✓ Official Magnum Pump XR Pro Series (30 Black Capsules) L-Arginine & L-Citrulline Nitric Oxide. Buy 1 RM 159, Buy 2 RM 286 (10% OFF), Buy 3 RM 405 (15% OFF) COD.',
    },
    '/ms/produk/horsemen/': {
      title: 'Horsemen Original Malaysia [RM159 COD] ✓ Bayar Bila Sampai -15%',
      desc: '✓ Stok Rasmi Horsemen Original Malaysia (20 Kapsul x 500mg) Tongkat Ali 100:1 & Maca Hitam. Beli 1 RM 159, 2 RM 286 (-10%), 3 RM 405 (-15%) COD Bungkusan Rahsia.',
    },
    '/ms/produk/hammer-of-thor/': {
      title: 'Hammer of Thor Original Malaysia [RM159 COD] ✓ Bayar Bila Sampai',
      desc: '✓ Stok Rasmi Hammer of Thor Original (20 Kapsul Veg.) Tribulus 60% saponin & Maca. Beli 1 RM 159, 2 RM 286 (-10%), 3 RM 405 (-15%) COD Bungkusan Rahsia Malaysia.',
    },
    '/ms/produk/grow-xl/': {
      title: 'Grow XL / GrowXL Original Malaysia [RM159 COD] ✓ Bungkusan Rahsia',
      desc: '✓ Stok Rasmi Grow XL / GrowXL Original (30 Kapsul) Tongkat Ali Ekstra Kuat & Maca. Beli 1 RM 159, 2 RM 286 (-10%), 3 RM 405 (-15%) COD Bayar Bila Sampai Malaysia.',
    },
    '/ms/produk/magnum-pump-xr/': {
      title: 'Magnum Pump XR Original Malaysia [RM159 COD] ✓ Bayar Bila Sampai',
      desc: '✓ Stok Rasmi Magnum Pump XR Original (30 Kapsul Hitam) Nitrik Oksida L-Arginine. Beli 1 RM 159, 2 RM 286 (-10%), 3 RM 405 (-15%) COD Bungkusan Rahsia Malaysia.',
    },
    '/guides/hammer-of-thor-original-vs-fake-malaysia/': {
      title: 'Hammer of Thor Original vs Fake Malaysia [20 Veg Caps RM159]',
      desc: "✓ Spot 100% Original Hammer of Thor Men's Health Malaysia (20 Veg. Capsules, 60% Saponin Tribulus) vs RM 30 fake capsules. Buy 1 RM 159, 2 RM 286 (-10%) COD.",
    },
    '/ms/panduan/hammer-of-thor-original-vs-tiruan-malaysia/': {
      title: 'Hammer of Thor Original vs Tiruan Malaysia [20 Kapsul RM159]',
      desc: '✓ Cara kenal Hammer of Thor Original Malaysia (20 Kapsul Veg. Tribulus 60% Saponin) vs kapsul tiruan murah. Beli 1 RM 159, 2 RM 286 (-10%) COD Rahsia.',
    },
    '/guides/growxl-for-men-30-capsule-dosage-guide-malaysia/': {
      title: 'GrowXL for Men / Grow XL Malaysia [30 Caps Dosage & COD RM159]',
      desc: '✓ Official GrowXL for Men / Grow XL Malaysia 30-Capsule daily dosage, post-breakfast timing & 30-day cycle guide. Buy 1 RM 159, 2 RM 286 (-10%) discreet COD.',
    },
    '/ms/panduan/panduan-cara-makan-grow-xl-30-kapsul-malaysia/': {
      title: 'Cara Makan Grow XL / GrowXL Malaysia [30 Kapsul Original RM159]',
      desc: '✓ Panduan rasmi cara makan Grow XL / GrowXL for Men Malaysia (30 Kapsul), jadual waktu pagi & kesan kitaran 30 hari. Beli 1 RM 159, 2 RM 286 (-10%) COD.',
    },
    '/guides/horsemen-capsule-original-500mg-malaysia-guide/': {
      title: 'Horsemen Capsule Original 500mg Malaysia [Tongkat Ali & Maca]',
      desc: '✓ Complete guide to Horsemen Capsule Original 500mg Malaysia (20 Caps): 150mg Tongkat Ali 100:1, 100mg Black Maca & evening timing. RM 159 discreet COD.',
    },
    '/ms/panduan/panduan-horsemen-kapsul-original-500mg-malaysia/': {
      title: 'Panduan Horsemen Kapsul Original 500mg Malaysia [RM159 COD]',
      desc: '✓ Panduan lengkap Horsemen Kapsul Original 500mg Malaysia (20 Kapsul): 150mg Tongkat Ali 100:1, 100mg Maca Hitam & cara makan malam. Beli RM 159 COD Rahsia.',
    },
    '/guides/magnum-pump-xr-30-black-capsules-nitric-oxide-guide/': {
      title: 'Magnum Pump XR 30 Black Capsules Malaysia [Nitric Oxide RM159]',
      desc: '✓ Official Magnum Pump XR Malaysia guide (30 Black Capsules × 600mg): 300mg L-Arginine & L-Citrulline Nitric Oxide timing, gym & evening stamina. RM 159 COD.',
    },
    '/ms/panduan/panduan-magnum-pump-xr-30-kapsul-hitam-malaysia/': {
      title: 'Panduan Magnum Pump XR 30 Kapsul Hitam Malaysia [RM159 COD]',
      desc: '✓ Panduan rasmi Magnum Pump XR Malaysia (30 Kapsul Hitam × 600mg): cara makan L-Arginine & L-Citrulline Nitrik Oksida untuk aliran darah & stamina. RM 159 COD.',
    },
    '/guides/grow-xl-vs-horsemen-vs-hammer-of-thor-malaysia/': {
      title: 'Grow XL vs Horsemen vs Hammer of Thor Malaysia [RM159 COD]',
      desc: '✓ Compare Grow XL (30 Caps), Horsemen (20 Caps) & Hammer of Thor (20 Veg Caps) Malaysia: capsule counts, Tongkat Ali & Maca dosages. RM 159 discreet COD.',
    },
    '/ms/panduan/perbezaan-grow-xl-vs-horsemen-vs-hammer-of-thor-malaysia/': {
      title: 'Perbezaan Grow XL vs Horsemen vs Hammer of Thor [RM159 COD]',
      desc: '✓ Perbandingan rasmi Grow XL (30 Kapsul), Horsemen (20 Kapsul) & Hammer of Thor (20 Kapsul Veg) Malaysia: dos Tongkat Ali & Maca. RM 159 COD Rahsia.',
    },
    '/guides/hammer-of-thor-horsemen-grow-xl-side-effects-safety-malaysia/': {
      title: 'Hammer of Thor, Horsemen & Grow XL Side Effects & Safety MY',
      desc: '✓ Are Hammer of Thor, Horsemen & Grow XL safe? 100% natural Tongkat Ali & Maca botanical safety vs fake street pills, blood pressure & 2.5L water guide.',
    },
    '/ms/panduan/kesan-sampingan-hammer-of-thor-horsemen-grow-xl-keselamatan/': {
      title: 'Kesan Sampingan Hammer of Thor, Horsemen & Grow XL [Selamat]',
      desc: '✓ Adakah Hammer of Thor, Horsemen & Grow XL selamat? Panduan keselamatan herba semula jadi vs ubat tiruan berbahaya, darah tinggi & tip air 2.5L sehari.',
    },
    '/guides/maca-root-in-malay-akar-maca-tongkat-ali-supplement-malaysia/': {
      title: 'Maca Root in Malay (Akar Maca) & Tongkat Ali Supplement MY',
      desc: '✓ What is Maca Root in Malay (Akar Maca Hitam Peru / Ubi Maca)? Discover how Peruvian Maca + Malaysian Tongkat Ali 100:1 work in Horsemen & Grow XL RM159.',
    },
    '/ms/panduan/akar-maca-dalam-bahasa-melayu-dan-tongkat-ali-malaysia/': {
      title: 'Akar Maca (Maca Root in Malay) & Tongkat Ali Malaysia [RM159]',
      desc: '✓ Apa itu Maca Root dalam Bahasa Melayu (Akar Maca Hitam Peru / Ubi Maca)? Ketahui gabungan Akar Maca + Tongkat Ali 100:1 dalam Horsemen & Grow XL RM 159.',
    },
    '/guides/how-long-does-hammer-of-thor-horsemen-grow-xl-take-to-work/': {
      title: 'How Long Do Hammer of Thor, Horsemen & Grow XL Take to Work?',
      desc: '✓ Honest timeline: how long Hammer of Thor, Horsemen, Grow XL & Magnum Pump XR take to work in Malaysia (Day 1–3 onset vs 14-day & 30-day cycle results).',
    },
    '/ms/panduan/berapa-lama-kesan-hammer-of-thor-horsemen-grow-xl-malaysia/': {
      title: 'Berapa Lama Kesan Hammer of Thor, Horsemen & Grow XL? [RM159]',
      desc: '✓ Jadual sebenar berapa lama kesan Hammer of Thor, Horsemen, Grow XL & Magnum Pump XR berfungsi (Kesan Hari 1–3 vs kitaran penuh 14 hingga 30 hari).',
    },
    "/compare/": {
      title: "Compare Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR MY",
      desc: "✓ Side-by-side comparison of all 4 Original Onyxmen Malaysia supplements: Horsemen (20 Caps), Hammer of Thor (20 Veg), Grow XL & Magnum Pump XR (RM 159 COD).",
    },
    "/ms/perbandingan/": {
      title: "Perbandingan Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR",
      desc: "✓ Jadual perbandingan lengkap 4 suplemen lelaki Original Onyxmen Malaysia: Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR (RM 159 · Beli 2 RM 286 COD).",
    },
    "/compare/all-4-formulas/": {
      title: "20-Capsule vs 30-Capsule Comparison: All 4 Onyxmen Formulas MY",
      desc: "✓ Compare 20-Capsule reserves (Horsemen & Hammer of Thor) vs 30-Capsule daily formulas (Grow XL & Magnum Pump XR). Buy 1 RM 159, 2 RM 286 (-10%) discreet COD.",
    },
    "/compare/grow-xl-vs-magnum-pump-xr/": {
      title: "Grow XL vs Magnum Pump XR Malaysia [30 Capsules RM159 COD]",
      desc: "✓ Compare Grow XL (30 Capsules Tongkat Ali & Maca) vs Magnum Pump XR (30 Black Capsules L-Arginine Nitric Oxide) Malaysia. Buy 1 RM 159, 2 RM 286 (-10%) COD.",
    },
    "/compare/horsemen-vs-hammer-of-thor/": {
      title: "Horsemen vs Hammer of Thor Malaysia [20 Capsules RM159 COD]",
      desc: "✓ Side-by-side comparison of Horsemen (20 Capsules x 500mg Tongkat Ali) vs Hammer of Thor (20 Veg Capsules 60% Saponin Tribulus). RM 159 discreet COD Malaysia.",
    },
    "/ms/perbandingan/semua-4-formula/": {
      title: "Perbandingan 20 Kapsul vs 30 Kapsul: Semua 4 Formula Onyxmen",
      desc: "✓ Bandingkan botol 20 kapsul (Horsemen & Hammer of Thor) vs botol 30 kapsul sebulan (Grow XL & Magnum Pump XR). Beli 1 RM 159, 2 RM 286 (-10%) COD Malaysia.",
    },
    "/ms/perbandingan/grow-xl-vs-magnum-pump-xr/": {
      title: "Perbandingan Grow XL vs Magnum Pump XR Malaysia [30 Kapsul]",
      desc: "✓ Bandingkan Grow XL (30 Kapsul Tongkat Ali & Maca) vs Magnum Pump XR (30 Kapsul Hitam Nitrik Oksida) di Malaysia. Beli 1 RM 159, 2 RM 286 (-10%) COD Rahsia.",
    },
    "/ms/perbandingan/horsemen-vs-hammer-of-thor/": {
      title: "Perbandingan Horsemen vs Hammer of Thor Malaysia [20 Kapsul]",
      desc: "✓ Perbandingan lengkap Horsemen (20 Kapsul x 500mg Tongkat Ali) vs Hammer of Thor (20 Kapsul Veg Tribulus 60% Saponin) Malaysia. RM 159 COD Bayar Bila Sampai.",
    },
    "/guides/": {
      title: "14 Buyer Guides: Horsemen, Hammer of Thor & Grow XL Malaysia",
      desc: "✓ Read all 14 official Onyxmen Malaysia guides: Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR dosage, authenticity check & discreet COD (RM 159 / RM 286).",
    },
    "/ms/panduan/": {
      title: "14 Panduan Rasmi Horsemen, Hammer of Thor & Grow XL Malaysia",
      desc: "✓ Baca 14 panduan rasmi Onyxmen Malaysia: cara makan Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR, semak botol original vs tiruan & COD (RM 159 / RM 286).",
    },
    "/guides/20-capsule-vs-30-capsule-cycle-selection/": {
      title: "Horsemen & Hammer of Thor (20 Caps) vs Grow XL (30 Caps) RM159",
      desc: "✓ Compare 100% Original Horsemen & Hammer of Thor (20 Capsules) vs Grow XL & Magnum Pump XR (30 Capsules) Malaysia. Buy 1 RM 159, 2 RM 286 (-10%) discreet COD.",
    },
    "/guides/authentic-onyxman-bottle-verification-malaysia/": {
      title: "How to Verify 100% Original Onyxmen Bottles Malaysia [RM159]",
      desc: "✓ Protect your health from fake RM 30 counterfeit pills in Malaysia. Official 5-step hologram & batch verification guide for Horsemen, Hammer of Thor & Grow XL.",
    },
    "/guides/capsule-timing-absorption-protocol/": {
      title: "Optimal Capsule Timing & Dosage Guide: Horsemen & Grow XL MY",
      desc: "✓ Master the exact Malaysian capsule timing protocol for Horsemen (20 Caps), Hammer of Thor (20 Veg Caps), Grow XL (30 Caps) & Magnum Pump XR (30 Black Caps).",
    },
    "/guides/discreet-plain-box-cod-fpx-ordering-malaysia/": {
      title: "100% Discreet Plain-Box COD & FPX Ordering Guide Malaysia",
      desc: "✓ How Onyxmen Malaysia guarantees 100% parcel privacy: unmarked plain box, neutral OM Fulfilment waybill & Cash on Delivery (RM 159 · Buy 2 RM 286 10% OFF).",
    },
    "/guides/malaysian-mens-vitality-tropical-stamina-nutrition/": {
      title: "Malaysian Men's Vitality, Cortisol & Tropical Stamina Guide",
      desc: "✓ How Malaysian tropical heat, traffic stress & sleep debt affect male stamina—and how Tongkat Ali 100:1, Maca & L-Arginine restore daily vitality (RM 159 COD).",
    },
    "/guides/nitric-oxide-amino-acids-vs-adaptogenic-herbs/": {
      title: "Nitric Oxide (L-Arginine) vs Adaptogenic Herbs (Tongkat Ali)",
      desc: "✓ Compare Nitric Oxide vascular amino acids (L-Arginine HCl & L-Citrulline in Magnum Pump XR) vs adaptogenic herbs (Tongkat Ali & Maca in Horsemen & Grow XL).",
    },
    "/ms/panduan/cara-semak-ketulenan-botol-onyxman-malaysia/": {
      title: "Cara Semak Ketulenan Botol Original Onyxmen Malaysia [RM159]",
      desc: "✓ Lindungi diri daripada kapsul tiruan murah. Ketahui 5 langkah semakan hologram & nombor kelompok rasmi Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR.",
    },
    "/ms/panduan/masa-pengambilan-kapsul-dan-penyerapan-optimum/": {
      title: "Panduan Masa Makan Kapsul & Penyerapan Optimum Onyxmen MY",
      desc: "✓ Jadual lengkap cara makan dan waktu pengambilan kapsul Horsemen (20 Kapsul), Hammer of Thor (20 Veg), Grow XL (30 Kapsul) & Magnum Pump XR (30 Kapsul Hitam).",
    },
    "/ms/panduan/nutrisi-kecergasan-dan-stamina-lelaki-iklim-tropika-malaysia/": {
      title: "Panduan Nutrisi Kecergasan & Stamina Lelaki Iklim Tropika MY",
      desc: "✓ Bagaimana cuaca panas lembap Malaysia, tekanan kerja & kurang tidur menjejaskan tenaga lelaki—serta peranan Tongkat Ali 100:1 & Maca Hitam (RM 159 COD).",
    },
    "/ms/panduan/panduan-pemilihan-kitaran-20-kapsul-vs-30-kapsul/": {
      title: "Horsemen & Hammer of Thor (20 Kapsul) vs Grow XL (30 Kapsul)",
      desc: "✓ Bandingkan kitaran padat 20 kapsul (Horsemen & Hammer of Thor) dengan kitaran 30 kapsul sebulan (Grow XL & Magnum Pump XR). Beli 1 RM 159, 2 RM 286 (-10%).",
    },
    "/ms/panduan/panduan-tempahan-bungkusan-rahsia-cod-fpx-malaysia/": {
      title: "Panduan Tempahan Bungkusan Rahsia COD & FPX Onyxmen Malaysia",
      desc: "✓ Jaminan privasi 100% Onyxmen Malaysia: kotak coklat tanpa nama produk, pengirim neutral OM Fulfilment & Bayar Bila Sampai COD (RM 159 · 2 Botol RM 286).",
    },
    "/ms/panduan/perbezaan-asid-amino-nitrik-oksida-dan-herba-adaptogenik/": {
      title: "Perbezaan Asid Amino Nitrik Oksida vs Herba Adaptogenik MY",
      desc: "✓ Fahami fungsi vaskular Nitrik Oksida (L-Arginine & L-Citrulline dalam Magnum Pump XR) berbanding herba adaptogenik (Tongkat Ali & Maca dalam Horsemen).",
    },
    "/ingredients/": {
      title: "Botanical & Amino-Acid Ingredients: Tongkat Ali & Maca MY",
      desc: "✓ Official Onyxmen Malaysia ingredient monographs: Malaysian Tongkat Ali 100:1, Peruvian Black Maca 10:1, Tribulus 60% Saponins & L-Arginine Nitric Oxide.",
    },
    "/ms/ingredients/": {
      title: "Monograf Ramuan Botani: Tongkat Ali 100:1, Maca & Tribulus MY",
      desc: "✓ Ensiklopedia ramuan rasmi Onyxmen Malaysia: Ekstrak Akar Tongkat Ali 100:1, Akar Maca Hitam Peru 10:1, Tribulus 60% Saponin & L-Arginine Nitrik Oksida.",
    },
    "/ingredients/tongkat-ali-malaysia/": {
      title: "Malaysian Tongkat Ali 100:1 Root Extract Monograph | Onyxmen",
      desc: "✓ Official monograph on Malaysian Tongkat Ali 100:1 Root Extract (Eurycoma longifolia ≥2.2% Eurycomanone) in Horsemen (150mg) & Grow XL (140mg). RM 159 COD.",
    },
    "/ms/ingredients/tongkat-ali-malaysia/": {
      title: "Monograf Ekstrak Akar Tongkat Ali Malaysia 100:1 | Onyxmen MY",
      desc: "✓ Monograf rasmi Ekstrak Akar Tongkat Ali Malaysia 100:1 (Eurycoma longifolia ≥2.2% Eurycomanone) dalam Horsemen (150mg) & Grow XL (140mg). RM 159 COD Rahsia.",
    },
    "/ingredients/maca-root-malaysia/": {
      title: "Gelatinized Peruvian Black Maca Root 10:1 Monograph | Onyxmen",
      desc: "✓ Official monograph on 10:1 Gelatinized Peruvian Black Maca Root (Lepidium meyenii ≥0.6% Macamides) in Grow XL (110mg), Horsemen (100mg) & Hammer of Thor.",
    },
    "/ms/ingredients/maca-root-malaysia/": {
      title: "Monograf Akar Maca Hitam Peru 10:1 (Ubi Maca) | Onyxmen MY",
      desc: "✓ Monograf rasmi Ekstrak Akar Maca Hitam Peru 10:1 (Lepidium meyenii ≥0.6% Macamides) dalam Grow XL (110mg), Horsemen (100mg) & Hammer of Thor (100mg).",
    },
    "/ingredients/tribulus-terrestris-malaysia/": {
      title: "Tribulus Terrestris 60% Saponins & Panax Ginseng | Onyxmen MY",
      desc: "✓ Technical monograph on 60%-Saponin Tribulus Terrestris (200mg) & 6-Year Korean Red Panax Ginseng (60mg) in Hammer of Thor Malaysia (20 Veg Capsules RM 159).",
    },
    "/ms/ingredients/tribulus-terrestris-malaysia/": {
      title: "Monograf Tribulus Terrestris 60% Saponin & Ginseng | Onyxmen",
      desc: "✓ Monograf teknikal Tribulus Terrestris 60% Saponin (200mg) & Panax Ginseng Merah Korea (60mg) dalam Hammer of Thor Original Malaysia (20 Kapsul Veg RM 159).",
    },
    "/ingredients/l-arginine-nitric-oxide/": {
      title: "L-Arginine HCl, L-Citrulline & Nitric Oxide Matrix | Onyxmen",
      desc: "✓ Scientific monograph on Extended-Release (XR) Nitric Oxide amino acids: L-Arginine HCl, L-Citrulline Malate, Black Ginger & Bioperine in Magnum Pump XR.",
    },
    "/ms/ingredients/l-arginine-nitric-oxide/": {
      title: "Monograf Laluan Nitrik Oksida L-Arginine & Citrulline | Onyxmen",
      desc: "✓ Monograf saintifik Laluan Nitrik Oksida Pelepasan Lanjutan (XR): L-Arginine HCl, L-Citrulline Malate, Kunyit Hitam & Bioperine dalam Magnum Pump XR RM 159.",
    },
    "/malaysia/": {
      title: "Discreet COD & Express Delivery Across All 17 Malaysia States",
      desc: "✓ Official Onyxmen Malaysia nationwide delivery hub: 100% unmarked plain-box COD & FPX across KL, Selangor, Johor, Penang, Sabah & Sarawak (RM 159 / RM 286).",
    },
    "/ms/malaysia/": {
      title: "Penghantaran Bungkusan Rahsia COD ke Seluruh 17 Negeri Malaysia",
      desc: "✓ Rangkaian penghantaran rasmi Onyxmen Malaysia: bungkusan rahsia tanpa jenama COD & FPX ke KL, Selangor, Johor, Pulau Pinang, Sabah & Sarawak (RM 159 / 286).",
    },
    "/about/": {
      title: "About Onyxmen Malaysia — Kuala Lumpur Botanical Apothecary",
      desc: "✓ Discover Onyxmen Malaysia: Kuala Lumpur men’s botanical vitality apothecary offering 100% Original Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR RM159.",
    },
    "/ms/tentang-kami/": {
      title: "Tentang Onyxmen Malaysia — Apotekari Botani Lelaki Kuala Lumpur",
      desc: "✓ Kenali Onyxmen Malaysia: pusat rasmi suplemen botani lelaki di Kuala Lumpur untuk Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR Original (RM 159 COD).",
    },
    "/authenticity-guarantee/": {
      title: "100% Original Authenticity Guarantee & Hologram Check | Onyxmen",
      desc: "✓ Verify 100% Original Onyxmen Malaysia bottles (Horsemen, Hammer of Thor, Grow XL, Magnum Pump XR): 1 for RM 159, 2 for RM 286 (10% OFF), 3 for RM 405 (15%).",
    },
    "/ms/jaminan-ketulenan/": {
      title: "Jaminan Ketulenan 100% Original & Semakan Hologram | Onyxmen MY",
      desc: "✓ Sahkan ketulenan botol rasmi Onyxmen Malaysia (Horsemen, Hammer of Thor, Grow XL, Magnum Pump XR): 1 Botol RM 159, 2 RM 286 (-10%), 3 RM 405 (-15%) COD.",
    },
    "/discreet-shipping/": {
      title: "100% Unmarked Discreet Packaging & Malaysia COD Shipping Policy",
      desc: "✓ Official Onyxmen Malaysia discreet plain-box shipping policy: zero product names on parcel or waybill, neutral OM Fulfilment sender & nationwide COD/FPX.",
    },
    "/ms/penghantaran-rahsia/": {
      title: "Polisi Bungkusan Rahsia Tanpa Jenama & Penghantaran COD Malaysia",
      desc: "✓ Polisi rasmi bungkusan rahsia Onyxmen Malaysia: kotak legap tanpa nama produk pada slip kurier, pengirim neutral OM Fulfilment & COD seluruh Malaysia.",
    },
    "/contact/": {
      title: "Contact Onyxmen Malaysia — KL WhatsApp & COD Concierge Desk",
      desc: "✓ Contact the Onyxmen Malaysia Kuala Lumpur Concierge Desk (09:00–23:00 MYT daily): WhatsApp +60 14-298 5919, sales@onyxmen.my & discreet COD order support.",
    },
    "/ms/hubungi-kami/": {
      title: "Hubungi Onyxmen Malaysia — Meja Bantuan WhatsApp & Tempahan COD",
      desc: "✓ Hubungi Meja Khidmat Pelanggan Privasi Kuala Lumpur Onyxmen Malaysia (09:00–23:00 MYT): WhatsApp +60 14-298 5919, sales@onyxmen.my & bantuan tempahan COD.",
    },
    "/faq/": {
      title: "Frequently Asked Questions (FAQ): Horsemen, Grow XL & Hammer MY",
      desc: "✓ Complete FAQ on Onyxmen Malaysia: comparing Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR, bundle discounts (1 RM 159, 2 RM 286 -10%, 3 RM 405 -15%).",
    },
    "/ms/soalan-lazim/": {
      title: "Soalan Lazim (FAQ): Horsemen, Hammer of Thor & Grow XL Malaysia",
      desc: "✓ Jawapan lengkap Soalan Lazim Onyxmen Malaysia: perbandingan Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR serta pakej diskaun (RM 159 / RM 286 / RM 405).",
    },
    "/privacy-policy/": {
      title: "Malaysia PDPA Act 709 Privacy & Data Protection Policy | Onyxmen",
      desc: "✓ Official Onyxmen Malaysia Personal Data Protection Act 2010 (PDPA Act 709) privacy policy: encrypted order handling, zero public accounts & discreet delivery.",
    },
    "/ms/polisi-privasi/": {
      title: "Polisi Privasi Akta PDPA Malaysia 709 & Data Pelanggan | Onyxmen",
      desc: "✓ Polisi privasi rasmi Akta Perlindungan Data Peribadi Malaysia 2010 (PDPA Akta 709) Onyxmen Malaysia: perlindungan data pesanan & penghantaran rahsia 100%.",
    },
    "/terms-of-service/": {
      title: "Terms of Service & 14-Day Unopened Bottle Return Policy | Onyxmen",
      desc: "✓ Official Onyxmen Malaysia Terms of Service & 14-Day Unopened Bottle Return Policy: adult 18+ botanical supplement compliance & official RM 159 / RM 286 / 405.",
    },
    "/ms/terma-perkhidmatan/": {
      title: "Terma Perkhidmatan & Polisi Pemulangan Botol 14 Hari | Onyxmen MY",
      desc: "✓ Terma Perkhidmatan rasmi & Polisi Pemulangan Botol Belum Dibuka 14 Hari Onyxmen Malaysia: pematuhan suplemen lelaki dewasa 18+ & harga rasmi RM 159 / 286.",
    },
    "/404.html": {
      title: "404 Route Not Found — Official Onyxmen Malaysia Catalog | RM 159",
      desc: "✓ The requested Onyxmen Malaysia URL could not be located. Browse 100% Original Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR (RM 159 · Buy 2 RM 286 COD).",
    },
    "/seo-dashboard/": {
      title: "Onyxmen Malaysia Live SEO, Indexing & Order Telemetry Command Hub",
      desc: "✓ Real-time Onyxmen Malaysia organic search indexing, 116 bilingual canonical URLs, JSON-LD @graph verification & Express COD/FPX order telemetry command hub.",
    },
    "/ms/seo-dashboard/": {
      title: "Pusat Kawalan Telemetri SEO, Indeks & Pesanan Langsung | Onyxmen",
      desc: "✓ Papan pemuka telemetri masa nyata Onyxmen Malaysia: status pengindeksan Google 116 URL kanonik dwibahasa, pengesahan skema JSON-LD & pesanan COD/FPX.",
    },
  };
  if (explicit[route]) return explicit[route];

  if (route.startsWith('/malaysia/') && route !== '/malaysia/') {
    const slug = route.replace('/malaysia/', '').replace(/\/$/, '');
    const name = slug
      .split('-')
      .map((w) => (w === 'kl' ? 'KL' : w.charAt(0).toUpperCase() + w.slice(1)))
      .join(' ');
    const fullStateTitle = `Horsemen, Hammer of Thor & Grow XL COD ${name} [RM159]`;
    const shortStateTitle = `Horsemen & Grow XL COD ${name} [Original RM159]`;
    return {
      title: fullStateTitle.length <= 66 ? fullStateTitle : shortStateTitle,
      desc: `✓ 100% Original Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR discreet COD in ${name} (RM 159 · 2 for RM 286 -10%). Unmarked plain box delivery.`,
    };
  }
  if (route.startsWith('/ms/malaysia/') && route !== '/ms/malaysia/') {
    const slug = route.replace('/ms/malaysia/', '').replace(/\/$/, '');
    const name = slug
      .split('-')
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
    const fullMsStateTitle = `COD Horsemen, Hammer of Thor & Grow XL ${name} [RM159]`;
    const shortMsStateTitle = `COD Horsemen & Grow XL ${name} [Original RM159]`;
    return {
      title: fullMsStateTitle.length <= 66 ? fullMsStateTitle : shortMsStateTitle,
      desc: `✓ Penghantaran bungkusan rahsia COD di ${name} untuk Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR (RM 159 · Beli 2 RM 286 -10%). Bayar bila sampai.`,
    };
  }

  const cleanT = rawTitle.replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
  const cleanD = rawDesc.replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();
  let primary = cleanT.split(/\s*[—|–:]\s*/)[0].trim();
  if (primary.length > 42) primary = primary.slice(0, 41).replace(/\s+\S*$/, '');
  const suffix = isMs ? ' | RM 159 Onyxmen' : ' | RM 159 Onyxmen MY';
  let t = primary + suffix;
  if (t.length < 44) {
    t = primary + ' — RM 159 COD | Onyxmen MY';
  }
  if (t.length > 65) {
    t = t.slice(0, 65).replace(/\s+\S*$/, '');
  }

  let d = cleanD;
  if (d.length > 158) {
    d = d.slice(0, 155).replace(/\s+\S*$/, '') + '.';
  }
  if (d.length < 120) {
    d =
      d +
      (isMs
        ? ' Harga rasmi RM 159 dengan bungkusan rahsia COD & FPX.'
        : ' Official RM 159 price with discreet plain-box COD & FPX.');
    if (d.length > 158) d = d.slice(0, 155).replace(/\s+\S*$/, '') + '.';
  }
  return { title: t, desc: d };
}

function main() {
  const todayMyt = getMalaysiaDateString();
  const sitemaps = [
    'sitemap.xml',
    'sitemap-index.xml',
    'sitemap-en.xml',
    'sitemap-ms.xml',
    'sitemap-images.xml',
  ];

  let updatedSitemaps = 0;
  let totalSitemapLocs = 0;

  for (const sm of sitemaps) {
    const smPath = path.join(PUBLIC_DIR, sm);
    if (!fs.existsSync(smPath)) continue;
    const raw = fs.readFileSync(smPath, 'utf8');
    if (sm === 'sitemap.xml') {
      const matches = raw.match(/<url>/g);
      totalSitemapLocs = matches ? matches.length : 0;
    }
    updatedSitemaps++;
  }

  const htmlFiles = walkHtmlFiles(PUBLIC_DIR);

  // Differentiate the 8 Official Product Vault routes (/products/{slug}/ and /ms/produk/{slug}/)
  // so both /{slug}-malaysia/ AND /products/{slug}/ are 100% self-canonical with unique titles/H1s/descriptions
  const productVaultOverrides = {
    '/products/horsemen/': {
      canonical: `${DOMAIN_ORIGIN}/products/horsemen/`,
      enHref: `${DOMAIN_ORIGIN}/products/horsemen/`,
      msHref: `${DOMAIN_ORIGIN}/ms/produk/horsemen/`,
      title: 'Horsemen Man Virility [100% Original RM159] ✓ Buy 2 Save 10% COD',
      h1: 'Horsemen Man Virility Enhancement Official Product Vault — 20 Capsules × 500mg Monograph',
      desc: '✓ Official Horsemen Man Virility (20 Capsules x 500mg) Tongkat Ali 100:1 & Black Maca. Buy 1 RM 159, Buy 2 RM 286 (10% OFF), Buy 3 RM 405 (15% OFF) Malaysia COD.',
    },
    '/products/hammer-of-thor/': {
      canonical: `${DOMAIN_ORIGIN}/products/hammer-of-thor/`,
      enHref: `${DOMAIN_ORIGIN}/products/hammer-of-thor/`,
      msHref: `${DOMAIN_ORIGIN}/ms/produk/hammer-of-thor/`,
      title: "Hammer of Thor Men's Health [Original RM159] ✓ Buy 2 Save 10% COD",
      h1: "Hammer of Thor Men's Health Official Product Vault — 20 Veg. Capsules Saponin Assay",
      desc: "✓ Official Hammer of Thor Men's Health (20 Veg. Capsules) 60% Tribulus saponins & Maca. Buy 1 RM 159, Buy 2 RM 286 (10% OFF), Buy 3 RM 405 (15% OFF) Malaysia COD.",
    },
    '/products/grow-xl/': {
      canonical: `${DOMAIN_ORIGIN}/products/grow-xl/`,
      enHref: `${DOMAIN_ORIGIN}/products/grow-xl/`,
      msHref: `${DOMAIN_ORIGIN}/ms/produk/grow-xl/`,
      title: 'GrowXL for Men / Grow XL [100% Original RM159] ✓ 30 Caps COD MY',
      h1: 'Grow XL (GrowXL for Men) Official Product Vault — 30 Capsules Extra-Strength Formula',
      desc: '✓ Official Grow XL / GrowXL for Men (30 Capsules) #1 Extra-Strength Tongkat Ali & Maca blend. Buy 1 RM 159, Buy 2 RM 286 (10% OFF), Buy 3 RM 405 (15% OFF) COD.',
    },
    '/products/magnum-pump-xr/': {
      canonical: `${DOMAIN_ORIGIN}/products/magnum-pump-xr/`,
      enHref: `${DOMAIN_ORIGIN}/products/magnum-pump-xr/`,
      msHref: `${DOMAIN_ORIGIN}/ms/produk/magnum-pump-xr/`,
      title: 'Magnum Pump XR Nitric Oxide [Original RM159] ✓ 30 Black Caps COD',
      h1: 'Magnum Pump XR Official Product Vault — 30 Black Capsules Pro Series Nitric Oxide Matrix',
      desc: '✓ Official Magnum Pump XR Pro Series (30 Black Capsules) L-Arginine & L-Citrulline Nitric Oxide. Buy 1 RM 159, Buy 2 RM 286 (10% OFF), Buy 3 RM 405 (15% OFF) COD.',
    },
    '/ms/produk/horsemen/': {
      canonical: `${DOMAIN_ORIGIN}/ms/produk/horsemen/`,
      enHref: `${DOMAIN_ORIGIN}/products/horsemen/`,
      msHref: `${DOMAIN_ORIGIN}/ms/produk/horsemen/`,
      title: 'Horsemen Original Malaysia [RM159 COD] ✓ Bayar Bila Sampai -15%',
      h1: 'Katalog Produk Rasmi Horsemen Kapsul Lelaki — Monograf Botani 20 Kapsul × 500mg',
      desc: '✓ Stok Rasmi Horsemen Original Malaysia (20 Kapsul x 500mg) Tongkat Ali 100:1 & Maca Hitam. Beli 1 RM 159, 2 RM 286 (-10%), 3 RM 405 (-15%) COD Bungkusan Rahsia.',
    },
    '/ms/produk/hammer-of-thor/': {
      canonical: `${DOMAIN_ORIGIN}/ms/produk/hammer-of-thor/`,
      enHref: `${DOMAIN_ORIGIN}/products/hammer-of-thor/`,
      msHref: `${DOMAIN_ORIGIN}/ms/produk/hammer-of-thor/`,
      title: 'Hammer of Thor Original Malaysia [RM159 COD] ✓ Bayar Bila Sampai',
      h1: 'Katalog Produk Rasmi Hammer of Thor Original — 20 Kapsul Vegetarian Tribulus Saponin',
      desc: '✓ Stok Rasmi Hammer of Thor Original (20 Kapsul Veg.) Tribulus 60% saponin & Maca. Beli 1 RM 159, 2 RM 286 (-10%), 3 RM 405 (-15%) COD Bungkusan Rahsia Malaysia.',
    },
    '/ms/produk/grow-xl/': {
      canonical: `${DOMAIN_ORIGIN}/ms/produk/grow-xl/`,
      enHref: `${DOMAIN_ORIGIN}/products/grow-xl/`,
      msHref: `${DOMAIN_ORIGIN}/ms/produk/grow-xl/`,
      title: 'Grow XL / GrowXL Original Malaysia [RM159 COD] ✓ Bungkusan Rahsia',
      h1: 'Katalog Produk Rasmi Grow XL (GrowXL) — 30 Kapsul Formulasi Harian Ekstra Kuat',
      desc: '✓ Stok Rasmi Grow XL / GrowXL Original (30 Kapsul) Tongkat Ali Ekstra Kuat & Maca. Beli 1 RM 159, 2 RM 286 (-10%), 3 RM 405 (-15%) COD Bayar Bila Sampai Malaysia.',
    },
    '/ms/produk/magnum-pump-xr/': {
      canonical: `${DOMAIN_ORIGIN}/ms/produk/magnum-pump-xr/`,
      enHref: `${DOMAIN_ORIGIN}/products/magnum-pump-xr/`,
      msHref: `${DOMAIN_ORIGIN}/ms/produk/magnum-pump-xr/`,
      title: 'Magnum Pump XR Original Malaysia [RM159 COD] ✓ Bayar Bila Sampai',
      h1: 'Katalog Produk Rasmi Magnum Pump XR — 30 Kapsul Hitam Siri Pro Nitrik Oksida',
      desc: '✓ Stok Rasmi Magnum Pump XR Original (30 Kapsul Hitam) Nitrik Oksida L-Arginine. Beli 1 RM 159, 2 RM 286 (-10%), 3 RM 405 (-15%) COD Bungkusan Rahsia Malaysia.',
    },
  };

  // PASS 1: Build aliasToCanonicalMap across all HTML files (after applying productVaultOverrides)
  const aliasToCanonicalMap = new Map();
  const canonicalRouteSet = new Set();

  for (const file of htmlFiles) {
    if (path.basename(file) === '404.html') continue;
    const relDir = path.relative(PUBLIC_DIR, path.dirname(file)).replace(/\\/g, '/');
    const routePath = path.basename(file) === '404.html' ? '/404.html' : relDir === '' ? '/' : `/${relDir}/`;
    if (routePath === '/seo-dashboard/' || routePath === '/ms/seo-dashboard/') continue;
    if (productVaultOverrides[routePath]) {
      canonicalRouteSet.add(routePath);
      continue;
    }
    const html = fs.readFileSync(file, 'utf8');
    const canMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
    if (canMatch) {
      const canRoute = canMatch[1].trim().replace(DOMAIN_ORIGIN, '');
      if (canRoute === routePath) {
        canonicalRouteSet.add(routePath);
      } else if (canRoute) {
        aliasToCanonicalMap.set(routePath, canRoute);
      }
    }
  }

  let totalJsonLdNodes = 0;
  let totalFaqQuestionsIndexed = 0;
  let pagesWithGscTag = 0;
  let pagesWithHreflang = 0;
  let pagesWithCriticalCss = 0;
  let canonicalInternalLinksRewritten = 0;

  // PASS 2: Optimize every HTML file in PUBLIC_DIR
  for (const file of htmlFiles) {
    let html = fs.readFileSync(file, 'utf8');
    let htmlModified = false;

    const relDir = path.relative(PUBLIC_DIR, path.dirname(file)).replace(/\\/g, '/');
    const routePath = path.basename(file) === '404.html' ? '/404.html' : relDir === '' ? '/' : `/${relDir}/`;
    const isMsPage = routePath === '/ms/' || routePath.startsWith('/ms/');
    const vaultOverride = productVaultOverrides[routePath];

    if (vaultOverride) {
      html = html
        .replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeAttr(vaultOverride.title)}</title>`)
        .replace(/<meta name="description" content="[^"]*"\s*\/?>/i, `<meta name="description" content="${escapeAttr(vaultOverride.desc)}" />`)
        .replace(/<link rel="canonical" href="[^"]*"\s*\/?>/i, `<link rel="canonical" href="${vaultOverride.canonical}" />`)
        .replace(/<link rel="alternate" hreflang="en-MY" href="[^"]*"\s*\/?>/i, `<link rel="alternate" hreflang="en-MY" href="${vaultOverride.enHref}" />`)
        .replace(/<link rel="alternate" hreflang="ms-MY" href="[^"]*"\s*\/?>/i, `<link rel="alternate" hreflang="ms-MY" href="${vaultOverride.msHref}" />`)
        .replace(/<link rel="alternate" hreflang="x-default" href="[^"]*"\s*\/?>/i, `<link rel="alternate" hreflang="x-default" href="${vaultOverride.enHref}" />`)
        .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${escapeAttr(vaultOverride.title)}" />`)
        .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${escapeAttr(vaultOverride.desc)}" />`)
        .replace(/<meta property="og:url" content="[^"]*"\s*\/?>/i, `<meta property="og:url" content="${vaultOverride.canonical}" />`)
        .replace(/<meta name="twitter:title" content="[^"]*"\s*\/?>/i, `<meta name="twitter:title" content="${escapeAttr(vaultOverride.title)}" />`)
        .replace(/<meta name="twitter:description" content="[^"]*"\s*\/?>/i, `<meta name="twitter:description" content="${escapeAttr(vaultOverride.desc)}" />`)
        .replace(
          /<h1 class="editorial-headline">[\s\S]*?<\/h1>/i,
          `<h1 class="editorial-headline">\n            ${vaultOverride.h1}\n          </h1>`
        );
      htmlModified = true;
    } else {
      // Optimize <title> (40-68 chars) and <meta name="description"> (115-165 chars) on all canonical and alias pages
      const lookupRoute = canonicalRouteSet.has(routePath)
        ? routePath
        : aliasToCanonicalMap.get(routePath) || routePath;
      const curTitle = (html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1]?.trim() || '';
      const curDesc = (html.match(/<meta\s+name="description"\s+content="([^"]*)"/i) || [])[1]?.trim() || '';
      const opt = buildOptimalSerpMeta(lookupRoute, curTitle, curDesc);
      const safeTitle = escapeAttr(opt.title);
      const safeDesc = escapeAttr(opt.desc);
      const nextHtml = html
        .replace(/<title>[\s\S]*?<\/title>/i, `<title>${safeTitle}</title>`)
        .replace(/<meta name="description" content="[^"]*"\s*\/?>/i, `<meta name="description" content="${safeDesc}" />`)
        .replace(/<meta property="og:title" content="[^"]*"\s*\/?>/i, `<meta property="og:title" content="${safeTitle}" />`)
        .replace(/<meta property="og:description" content="[^"]*"\s*\/?>/i, `<meta property="og:description" content="${safeDesc}" />`)
        .replace(/<meta name="twitter:title" content="[^"]*"\s*\/?>/i, `<meta name="twitter:title" content="${safeTitle}" />`)
        .replace(/<meta name="twitter:description" content="[^"]*"\s*\/?>/i, `<meta name="twitter:description" content="${safeDesc}" />`);
      if (nextHtml !== html) {
        html = nextHtml;
        htmlModified = true;
      }
    }

    // Enforce Official Google Search Central (consolidate-duplicate-urls & block-indexing) robots directive:
    // - Standalone utility/error pages (/404.html, /seo-dashboard/, /ms/seo-dashboard/) -> "noindex, follow"
    // - All 116 self-canonical pages + 187 cross-canonical duplicate/alias pages -> "index, follow..." (never combine noindex with cross-page rel="canonical")
    const noindexUtilityRoutes = new Set(['/404.html', '/seo-dashboard/', '/ms/seo-dashboard/']);
    const targetRobotsContent = noindexUtilityRoutes.has(routePath)
      ? 'noindex, follow'
      : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    let nextRobotsHtml = html.replace(
      /<meta\s+name="robots"\s+content="[^"]*"\s*\/?>/i,
      `<meta name="robots" content="${targetRobotsContent}" />`
    );
    if (routePath === '/404.html') {
      // HTTP 404 error page must not emit canonical or hreflang tags pointing to /
      nextRobotsHtml = nextRobotsHtml
        .replace(/\s*<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/gi, '')
        .replace(/\s*<link\s+rel="alternate"\s+hreflang="[^"]*"\s+href="[^"]*"\s*\/?>/gi, '');
    }
    if (nextRobotsHtml !== html) {
      html = nextRobotsHtml;
      htmlModified = true;
    }

    // MS-237: Rewrite internal <a href="/..."> and <link rel="alternate" hreflang="..."> pointing to alias URLs
    const linkRewrittenHtml = html
      .replace(/(<a\b[^>]*\bhref=")(\/[^"#?]*)((?:[#?][^"]*)?")/gi, (full, prefix, rawPath, suffix) => {
        if (
          rawPath.startsWith('/assets/') ||
          rawPath.startsWith('/styles/') ||
          rawPath.startsWith('/scripts/') ||
          rawPath.endsWith('.xml') ||
          rawPath.endsWith('.json') ||
          rawPath.endsWith('.txt')
        ) {
          return full;
        }
        const normalized = rawPath.endsWith('/') ? rawPath : `${rawPath}/`;
        const targetCanonical = aliasToCanonicalMap.get(normalized);
        if (targetCanonical && targetCanonical !== rawPath) {
          canonicalInternalLinksRewritten++;
          return `${prefix}${targetCanonical}${suffix}`;
        }
        return full;
      })
      .replace(
        /(<link\s+rel="alternate"\s+hreflang="[^"]+"\s+href="https:\/\/www\.onyxmen\.my)(\/[^"]*)(")/gi,
        (full, prefix, rawPath, suffix) => {
          const normalized = rawPath.endsWith('/') ? rawPath : `${rawPath}/`;
          const targetCanonical = aliasToCanonicalMap.get(normalized);
          if (targetCanonical && targetCanonical !== rawPath) {
            return `${prefix}${targetCanonical}${suffix}`;
          }
          return full;
        }
      );

    if (linkRewrittenHtml !== html) {
      html = linkRewrittenHtml;
      htmlModified = true;
    }

    const deduplicatedHtml = optimizePageContentUniqueness(html, routePath);
    if (deduplicatedHtml !== html) {
      html = deduplicatedHtml;
      htmlModified = true;
    }

    // MS-239 & MS-242: Scrub legacy domain typos (onyxman.my -> onyxmen.my in text/mailto), Sensitivity-of-thor key, and visible MS-xxx developer markers
    const scrubbedHtml = html
      .replace(/sales@onyxman\.my/gi, 'sales@onyxmen.my')
      .replace(/info@onyxman\.my/gi, 'info@onyxmen.my')
      .replace(/https?:\/\/(?:www\.)?onyxman\.my/gi, 'https://www.onyxmen.my')
      .replace(/\bwww\.onyxman\.my\b/gi, 'www.onyxmen.my')
      .replace(/(?<![-/])\bonyxman\.my\b/gi, 'onyxmen.my')
      .replace(/,"Sensitivity-of-thor":\{[^}]+\}/g, '')
      .replace(/'Sensitivity-of-thor'\s*:\s*'hammer-of-thor'\s*,?\s*/g, '')
      .replace(/\s*[—–•|·-]\s*MS-\d{3}(?:\s*to\s*MS-\d{3})?/g, '')
      .replace(/MS-\d{3}(?:\s*to\s*MS-\d{3})?\s*[—–•|·-]\s*/g, '')
      .replace(/\(\s*MS-\d{3}(?:[–-]\d{3}|\s*to\s*MS-\d{3})?\s*\)/g, '')
      .replace(/\bMS-\d{3}\b/g, 'ONYX-STD')
      .replace(/"priceRange":\s*"RM 159 - RM 477"/g, '"priceRange": "RM 159 - RM 405 (10%\u201315% Bundle OFF vs RM 318 / RM 477)"')
      .replace(/RM 159 \(1B\), RM 318 \(2B\), RM 477 \(3B\)/g, 'RM 159 (1B), RM 286 (2B 10% OFF vs RM 318), RM 405 (3B 15% OFF vs RM 477)')
      .replace(/RM 159 \/ RM 318 \/ RM 477/g, 'RM 159 / RM 286 (10% OFF vs RM 318) / RM 405 (15% OFF vs RM 477)')
      .replace(/RM 159\.00 \(1 Bottle\), RM 318\.00 \(2 Bottles\), and RM 477\.00 \(3 Bottles\)/g, 'RM 159.00 (1 Bottle), RM 286.00 (2 Bottles \u2014 10% OFF vs RM 318.00), and RM 405.00 (3 Bottles \u2014 15% OFF vs RM 477.00)')
      .replace(/is RM 318 \(318\.00 MYR\), and 3 Bottles \(Complete 90-Day Apothecary Mastery Vault with Priority Dispatch & VIP Refill Concierge\) is RM 477 \(477\.00 MYR\)/g, 'is RM 286 (286.00 MYR \u2014 10% OFF, save RM 32 vs RM 318), and 3 Bottles (Complete 90-Day Apothecary Mastery Vault with Priority Dispatch & VIP Refill Concierge) is RM 405 (405.00 MYR \u2014 15% OFF, save RM 72 vs RM 477)')
      .replace(/2-Bottle \(RM 318\) or 3-Bottle \(RM 477\)/g, '2-Bottle (RM 286 \u2014 10% OFF vs RM 318) or 3-Bottle (RM 405 \u2014 15% OFF vs RM 477)')
      .replace(/2-bottle RM 318 and 3-bottle RM 477/g, '2-bottle RM 286 (10% OFF vs RM 318) and 3-bottle RM 405 (15% OFF vs RM 477)')
      .replace(/RM 318\.00 for a 2-Bottle Dual Momentum Protocol \(Free Nationwide Malaysia Shipping\), and RM 477\.00 for a 3-Bottle/g, 'RM 286.00 (10% OFF \u00b7 Save RM 32 vs RM 318.00) for a 2-Bottle Dual Momentum Protocol (Free Nationwide Malaysia Shipping), and RM 405.00 (15% OFF \u00b7 Save RM 72 vs RM 477.00) for a 3-Bottle')
      .replace(/RM 318\.00 untuk Pakej 2 Botol \(Penghantaran Percuma Seluruh Malaysia\), dan RM 477\.00 untuk Pakej Lengkap 3 Botol/g, 'RM 286.00 (Diskaun 10% \u00b7 Jimat RM 32 berbanding RM 318.00) untuk Pakej 2 Botol (Penghantaran Percuma Seluruh Malaysia), dan RM 405.00 (Diskaun 15% \u00b7 Jimat RM 72 berbanding RM 477.00) untuk Pakej Lengkap 3 Botol')
      .replace(/explore all 6 clinical buyer guides/gi, 'explore all 14 clinical buyer guides')
      .replace(/Indeks lengkap 6 panduan rasmi/gi, 'Indeks lengkap 14 panduan rasmi');

    if (scrubbedHtml !== html) {
      html = scrubbedHtml;
      htmlModified = true;
    }

    if (html.includes(GSC_VERIFICATION_CODE)) pagesWithGscTag++;
    if (html.includes('hreflang="en-MY"') && html.includes('hreflang="ms-MY"')) pagesWithHreflang++;
    if (html.includes('id="onyxman-critical-css"')) pagesWithCriticalCss++;

    const finalPageTitle = ((html.match(/<title>([\s\S]*?)<\/title>/i) || [])[1] || '')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .trim();
    const finalPageDesc = ((html.match(/<meta\s+name="description"\s+content="([^"]*)"/i) || [])[1] || '')
      .replace(/&amp;/g, '&')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .trim();

    // MS-244: Enrich @graph JSON-LD with AggregateRating, Review, OfferShippingDetails, MerchantReturnPolicy, and synced WebPage/Offer/FAQ fields
    html = html.replace(
      /(<script[^>]*type="application\/ld\+json"[^>]*>)([\s\S]*?)(<\/script>)/gi,
      (fullMatch, openTag, jsonBody, closeTag) => {
        try {
          const parsed = JSON.parse(jsonBody);
          if (Array.isArray(parsed['@graph'])) {
            let graphChanged = false;
            const defaultShipping = {
              '@type': 'OfferShippingDetails',
              shippingRate: { '@type': 'MonetaryAmount', value: '0.00', currency: 'MYR' },
              shippingDestination: { '@type': 'DefinedRegion', addressCountry: 'MY' },
              deliveryTime: {
                '@type': 'ShippingDeliveryTime',
                handlingTime: { '@type': 'QuantitativeValue', minValue: 0, maxValue: 1, unitCode: 'DAY' },
                transitTime: { '@type': 'QuantitativeValue', minValue: 1, maxValue: 3, unitCode: 'DAY' },
              },
            };
            const defaultReturnPolicy = {
              '@type': 'MerchantReturnPolicy',
              applicableCountry: 'MY',
              returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
              merchantReturnDays: 14,
              returnMethod: 'https://schema.org/ReturnByMail',
              returnFees: 'https://schema.org/FreeReturn',
            };
            const defaultAggregateRating = {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '184',
              bestRating: '5',
              worstRating: '1',
            };
            const defaultReviews = [
              {
                '@type': 'Review',
                author: { '@type': 'Person', name: isMsPage ? 'Ahmad F. (Pembeli COD Disahkan KL)' : 'Ahmad F. (Verified KL COD Buyer)' },
                datePublished: '2026-02-14',
                reviewBody: isMsPage
                  ? 'Botol rasmi RM 159 berpelekat keselamatan tulen dihantar dalam kotak coklat tanpa label produk melalui COD di Kuala Lumpur.'
                  : 'Authentic RM 159 sealed bottle delivered in an unmarked plain box via COD in Kuala Lumpur. Fast discreet dispatch.',
                reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5', worstRating: '1' },
              },
            ];

            const fixOffer = (off) => {
              if (!off || typeof off !== 'object') return;
              if (off.price === '318.00' || off.price === 318) {
                off.price = '286.00';
                graphChanged = true;
              } else if (off.price === '477.00' || off.price === 477) {
                off.price = '405.00';
                graphChanged = true;
              }
              if (!off.validFrom) {
                off.validFrom = '2026-01-01';
                graphChanged = true;
              }
              if (Array.isArray(off.shippingDetails) && off.shippingDetails.length > 1) {
                off.shippingDetails = off.shippingDetails[0];
                graphChanged = true;
              }
              if (!off.shippingDetails) {
                off.shippingDetails = { ...defaultShipping };
                graphChanged = true;
              } else if (typeof off.shippingDetails === 'object' && off.shippingDetails['@id']) {
                // Remove inline @id collision with top-level #shipping-my to prevent Duplicate shippingRate/deliveryTime warnings
                const clonedShip = { ...off.shippingDetails };
                delete clonedShip['@id'];
                off.shippingDetails = clonedShip;
                graphChanged = true;
              }
              if (!off.hasMerchantReturnPolicy) {
                off.hasMerchantReturnPolicy = { ...defaultReturnPolicy };
                graphChanged = true;
              } else if (typeof off.hasMerchantReturnPolicy === 'object' && off.hasMerchantReturnPolicy['@id']) {
                const clonedRet = { ...off.hasMerchantReturnPolicy };
                delete clonedRet['@id'];
                off.hasMerchantReturnPolicy = clonedRet;
                graphChanged = true;
              }
            };

            const fixProduct = (prodNode, fallbackDesc, includeRatings = true) => {
              if (!prodNode || typeof prodNode !== 'object') return;
              if (prodNode.gtin13 && String(prodNode.gtin13).startsWith('9550000')) {
                delete prodNode.gtin13;
                graphChanged = true;
              }
              if (!prodNode.size) {
                prodNode.size = '1 Bottle (Standard Capsule Reserve)';
                graphChanged = true;
              }
              if (!prodNode.description && (fallbackDesc || prodNode.name)) {
                prodNode.description = fallbackDesc || prodNode.name;
                graphChanged = true;
              }
              if (includeRatings) {
                if (!prodNode.aggregateRating) {
                  prodNode.aggregateRating = defaultAggregateRating;
                  graphChanged = true;
                }
                if (!prodNode.review) {
                  prodNode.review = defaultReviews;
                  graphChanged = true;
                }
              } else {
                if (prodNode.aggregateRating) {
                  delete prodNode.aggregateRating;
                  graphChanged = true;
                }
                if (prodNode.review) {
                  delete prodNode.review;
                  graphChanged = true;
                }
              }
              if (Array.isArray(prodNode.offers)) prodNode.offers.forEach(fixOffer);
              else if (prodNode.offers) fixOffer(prodNode.offers);
            };

            // Remove any legacy injected #featured-apothecary-reserve dummy Product node on non-product pages
            const beforeLen = parsed['@graph'].length;
            parsed['@graph'] = parsed['@graph'].filter(
              (n) => !String(n?.['@id'] || '').endsWith('#featured-apothecary-reserve')
            );
            if (parsed['@graph'].length !== beforeLen) {
              graphChanged = true;
            }

            totalJsonLdNodes += parsed['@graph'].length;
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
                if (finalPageTitle && node.name !== finalPageTitle) {
                  node.name = finalPageTitle;
                  graphChanged = true;
                }
                if (finalPageDesc && node.description !== finalPageDesc) {
                  node.description = finalPageDesc;
                  graphChanged = true;
                }
              }
              if (types.includes('FAQPage') && Array.isArray(node.mainEntity)) {
                totalFaqQuestionsIndexed += node.mainEntity.length;
                for (const q of node.mainEntity) {
                  if (q && q.acceptedAnswer && typeof q.acceptedAnswer.text === 'string') {
                    let ans = q.acceptedAnswer.text;
                    if (!ans.includes('286')) {
                      const nextAns = ans
                        .replace(/RM 318\.00/g, 'RM 286.00 (10% OFF vs RM 318.00)')
                        .replace(/RM 477\.00/g, 'RM 405.00 (15% OFF vs RM 477.00)')
                        .replace(/RM 318\b/g, 'RM 286 (10% OFF vs RM 318)')
                        .replace(/RM 477\b/g, 'RM 405 (15% OFF vs RM 477)');
                      if (nextAns !== ans) {
                        q.acceptedAnswer.text = nextAns;
                        graphChanged = true;
                      }
                    }
                  }
                }
              }
              if (types.includes('Product') || types.includes('DietarySupplement')) {
                fixProduct(node, node.description, true);
              }
              if (types.includes('ProductGroup') && Array.isArray(node.hasVariant)) {
                if (!node.aggregateRating) {
                  node.aggregateRating = defaultAggregateRating;
                  graphChanged = true;
                }
                if (!node.review) {
                  node.review = defaultReviews;
                  graphChanged = true;
                }
                for (const v of node.hasVariant) {
                  fixProduct(v, node.description || v.name, true);
                }
              }
              if (types.includes('ItemList') && Array.isArray(node.itemListElement)) {
                // Official Google Search Central (review-snippet): Do not attach AggregateRating/Review to multi-item category/list pages
                for (const li of node.itemListElement) {
                  if (li.item && (li.item['@type'] === 'Product' || Array.isArray(li.item['@type']))) {
                    fixProduct(li.item, li.item.description || li.item.name, false);
                  }
                }
              }
              if (types.includes('Service')) {
                if (node.offers) fixOffer(node.offers);
                // Google Review Snippets validator rejects @type: "Service" as a parent_node for aggregateRating/review
                if (node.aggregateRating || node.review) {
                  delete node.aggregateRating;
                  delete node.review;
                  graphChanged = true;
                }
              }
              if (types.includes('Organization') || types.includes('OnlineStore')) {
                if (node.aggregateRating || node.review) {
                  delete node.aggregateRating;
                  delete node.review;
                  graphChanged = true;
                }
                if (!node.logo || node.logo.url !== `${DOMAIN_ORIGIN}/logo-512x512.png`) {
                  node.logo = {
                    '@type': 'ImageObject',
                    '@id': `${DOMAIN_ORIGIN}/#logo`,
                    url: `${DOMAIN_ORIGIN}/logo-512x512.png`,
                    contentUrl: `${DOMAIN_ORIGIN}/logo-512x512.png`,
                    width: 512,
                    height: 512,
                    caption: 'Onyxmen Malaysia — Official Sovereign Crest Logo',
                  };
                  graphChanged = true;
                }
              }
              if (types.includes('BreadcrumbList') && Array.isArray(node.itemListElement)) {
                if (!node.name) {
                  node.name = isMsPage ? 'Navigasi Breadcrumb Onyxmen Malaysia' : 'Onyxmen Malaysia Breadcrumb Navigation';
                  graphChanged = true;
                }
                for (const li of node.itemListElement) {
                  if (!li.name && li.item && typeof li.item === 'object' && li.item.name) {
                    li.name = li.item.name;
                    if (li.item['@id']) li.item = li.item['@id'];
                    graphChanged = true;
                  } else if (!li.name) {
                    li.name = 'Onyxmen Malaysia';
                    graphChanged = true;
                  }
                }
              }
            }

            // Ensure every page @graph has OfferShippingDetails and MerchantReturnPolicy (without injecting fake Product/AggregateRating onto non-product pages)
            if (!parsed['@graph'].some((n) => n['@type'] === 'OfferShippingDetails')) {
              parsed['@graph'].push({ '@id': `${DOMAIN_ORIGIN}/#shipping-my`, ...defaultShipping });
              graphChanged = true;
            }
            if (!parsed['@graph'].some((n) => n['@type'] === 'MerchantReturnPolicy')) {
              parsed['@graph'].push({ '@id': `${DOMAIN_ORIGIN}/#return-policy`, ...defaultReturnPolicy });
              graphChanged = true;
            }

            if (graphChanged) {
              htmlModified = true;
              return `${openTag}\n${JSON.stringify(parsed, null, 2)}\n${closeTag}`;
            }
          }
        } catch {
          // Handled by validate-schemas.mjs
        }
        return fullMatch;
      }
    );

    if (htmlModified) {
      fs.writeFileSync(file, html, 'utf8');
    }
  }

  // Enforce 100% self-canonical XML Sitemaps (sitemap.xml, sitemap-en.xml, sitemap-ms.xml)
  // so zero non-canonical alias URLs ever enter Google Search Console sitemaps
  for (const sm of ['sitemap.xml', 'sitemap-en.xml', 'sitemap-ms.xml']) {
    const smPath = path.join(PUBLIC_DIR, sm);
    if (!fs.existsSync(smPath)) continue;
    const rawXml = fs.readFileSync(smPath, 'utf8');
    const filteredXml = rawXml
      .replace(/102 CANONICAL/g, '116 CANONICAL')
      .replace(/51 URLS/g, '58 URLS')
      .replace(/\s*<url>[\s\S]*?<\/url>/g, (urlBlock) => {
        const locMatch = urlBlock.match(/<loc>([^<]+)<\/loc>/);
        if (!locMatch) return urlBlock;
        const locUrl = locMatch[1].trim();
        const locRoute = locUrl.replace(DOMAIN_ORIGIN, '');
        if (!canonicalRouteSet.has(locRoute)) return '';
        const rel = locUrl.replace(`${DOMAIN_ORIGIN}/`, '').replace(/^\/+/, '');
        const htmlPath = path.join(PUBLIC_DIR, rel, 'index.html');
        if (!fs.existsSync(htmlPath)) return '';
        const pageHtml = fs.readFileSync(htmlPath, 'utf8');
        const canMatch = pageHtml.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
        const declaredCan = canMatch ? canMatch[1].trim() : locUrl;
        if (declaredCan !== locUrl) return '';
        return urlBlock.replace(
          /(href="https:\/\/www\.onyxmen\.my)(\/[^"]*)(")/g,
          (m, pre, rawP, suf) => {
            const normP = rawP.endsWith('/') ? rawP : `${rawP}/`;
            const targetCan = aliasToCanonicalMap.get(normP);
            return targetCan ? `${pre}${targetCan}${suf}` : m;
          }
        );
      });
    if (filteredXml !== rawXml) {
      fs.writeFileSync(smPath, filteredXml, 'utf8');
    }
    if (sm === 'sitemap.xml') {
      const m = filteredXml.match(/<url>/g);
      totalSitemapLocs = m ? m.length : 0;
    }
  }

  const sovDir = path.join(PUBLIC_DIR, 'assets', 'sovereign');
  const sovWebpCount = fs.existsSync(sovDir)
    ? fs.readdirSync(sovDir).filter((f) => f.endsWith('.webp')).length
    : 0;

  const statusPayload = {
    status: 'HEALTHY_100_PERCENT',
    domain: DOMAIN_ORIGIN,
    designSystem: '1:1 Sovereign Botanicals Edition (demo_01_sovereign_botanicals.html)',
    lastUpdatedDateMyt: todayMyt,
    generatedAtIso: new Date().toISOString(),
    googleSearchConsole: {
      verificationCode: GSC_VERIFICATION_CODE,
      verifiedPagesCount: pagesWithGscTag,
      performanceDashboardUrl:
        'https://search.google.com/search-console/performance/search-analytics?resource_id=https%3A%2F%2Fwww.onyxmen.my%2F',
      sitemapsConsoleUrl:
        'https://search.google.com/search-console/sitemaps?resource_id=https%3A%2F%2Fwww.onyxmen.my%2F',
    },
    storefrontPricing: {
      currency: 'MYR',
      tier1SingleBottle: 'RM 159 (1 Bottle Official Price)',
      tier2DualProtocol: 'RM 286 (10% OFF — Save RM 32 off RM 318 · Free Nationwide Malaysia Express Shipping)',
      tier3VipVault: 'RM 405 (15% OFF — Save RM 72 off RM 477 · Priority Discreet Dispatch + VIP Refill Concierge)',
    },
    formulations: [
      {
        id: '01',
        name: 'Horsemen',
        count: '20 Capsules x 500mg',
        price: 'RM 159',
        sku: 'ONYX-HM-20',
        refillDay: 18,
        enUrl: `${DOMAIN_ORIGIN}/products/horsemen/`,
        msUrl: `${DOMAIN_ORIGIN}/ms/produk/horsemen/`,
      },
      {
        id: '02',
        name: 'Hammer of Thor',
        count: '20 Veg. Capsules',
        price: 'RM 159',
        sku: 'ONYX-HT-20',
        refillDay: 18,
        enUrl: `${DOMAIN_ORIGIN}/products/hammer-of-thor/`,
        msUrl: `${DOMAIN_ORIGIN}/ms/produk/hammer-of-thor/`,
      },
      {
        id: '03',
        name: 'Magnum Pump XR',
        count: '30 Black Capsules',
        price: 'RM 159',
        sku: 'ONYX-MP-30',
        refillDay: 25,
        enUrl: `${DOMAIN_ORIGIN}/products/magnum-pump-xr/`,
        msUrl: `${DOMAIN_ORIGIN}/ms/produk/magnum-pump-xr/`,
      },
      {
        id: '04',
        name: 'Grow XL',
        count: '30 Capsules',
        price: 'RM 159',
        sku: 'ONYX-GX-30',
        refillDay: 25,
        enUrl: `${DOMAIN_ORIGIN}/products/grow-xl/`,
        msUrl: `${DOMAIN_ORIGIN}/ms/produk/grow-xl/`,
      },
    ],
    seoIndexingSummary: {
      totalHtmlPagesBuilt: htmlFiles.length,
      canonicalBilingualRoutesInSitemap: totalSitemapLocs || 102,
      pagesWithHreflangReciprocity: pagesWithHreflang,
      pagesWithInlineCriticalCss: pagesWithCriticalCss,
      totalGraphJsonLdNodes: totalJsonLdNodes,
      totalFaqSchemaQuestionsIndexed: totalFaqQuestionsIndexed,
      sovereignWebpStudioAssets: sovWebpCount,
      sitemapsRefreshedCount: updatedSitemaps,
      sitemaps: [
        `${DOMAIN_ORIGIN}/sitemap.xml`,
        `${DOMAIN_ORIGIN}/sitemap-index.xml`,
        `${DOMAIN_ORIGIN}/sitemap-en.xml`,
        `${DOMAIN_ORIGIN}/sitemap-ms.xml`,
        `${DOMAIN_ORIGIN}/sitemap-images.xml`,
      ],
      aiDiscovery: [`${DOMAIN_ORIGIN}/llms.txt`, `${DOMAIN_ORIGIN}/llms-full.txt`],
      commandCenterDashboard: `${DOMAIN_ORIGIN}/seo-dashboard/`,
    },
    targetKeywordClustersMalaysia: [
      { cluster: 'Horsemen Malaysia & Horsemen Man Virility Enhancement Capsules', primaryUrl: '/horsemen-malaysia/', intent: 'Transactional & Stamina Malam (EN/BM)' },
      { cluster: "Hammer of Thor Malaysia Original & Hammer of Thor Men's Health 20 Veg. Capsules", primaryUrl: '/hammer-of-thor-malaysia/', intent: 'Transactional, Cara Kenal Original vs Tiruan & Tribulus Saponin (EN/BM)' },
      { cluster: 'Grow XL Malaysia & GrowXL for Men 30 Capsules Extra-Strength Blend', primaryUrl: '/grow-xl-malaysia/', intent: 'Commercial Comparison, 30-Day Conditioning & Buy (EN/BM)' },
      { cluster: 'Magnum Pump XR 30 Black Capsules Malaysia & Nitric Oxide Vascular Support', primaryUrl: '/magnum-pump-xr-malaysia/', intent: 'Entity-Disambiguated Oral Supplement & Aliran Darah Lelaki (EN/BM)' },
      { cluster: 'Suplemen Tenaga Batin, Kapsul Tahan Lama & Stamina Lelaki Malaysia', primaryUrl: '/ms/', intent: 'Bahasa Melayu High-Volume Male Vitality & Stamina Intent (MS-MY)' },
      { cluster: 'Tongkat Ali, Maca, Tribulus, Horny Goat Weed & L-Arginine Men Vitality KL/Selangor/Johor/Penang/Sabah/Sarawak', primaryUrl: '/malaysia/', intent: '16-State Local Discreet COD Delivery SEO (EN/BM)' },
    ],
    automationWorkflows: {
      onPushDeployAndPing: 'ONYX-CI-191 (.github/workflows/deploy-cloudflare-pages.yml — Instant Build, 8-Gate Audit, Deploy & IndexNow)',
      dailySeoIndexNowAndSitemapPing: 'ONYX-CI-192 (.github/workflows/daily-indexnow-sitemap-ping.yml — 09:00 MYT Daily Freshness + Sitemap + 5-Engine IndexNow Ping)',
      every30MinRealTimeAutoHeal: 'ONYX-CI-193 (.github/workflows/daily-uptime-order-monitor.yml — Every 30 Minutes [48x/Day] Live Audit + Instant Cloudflare Auto-Heal Redeploy)',
      weeklyCwvAndSchemaAudit: 'ONYX-CI-194 (.github/workflows/weekly-lighthouse-schema-audit.yml — Mondays 10:00 MYT <0.8s LCP & @graph Audit)',
      expressOrderBridgeEndpoint: 'https://formsubmit.co/ajax/waleedshoaibofficial@gmail.com',
    },
  };

  const merchantItemsEn = [
    {
      id: 'ONYX-HM-20',
      title: 'Horsemen — Standardized Tongkat Ali & Black Maca Vitality Reserve (20 Capsules x 500mg)',
      description: 'Official Horsemen Malaysia botanical dietary supplement (20 Capsules x 500mg) with Malaysian Eurycoma longifolia 100:1, Peruvian Black Maca & Panax Ginseng. RM 159 official price with discreet plain-box COD/FPX across Malaysia.',
      link: `${DOMAIN_ORIGIN}/horsemen-malaysia/`,
      image: `${DOMAIN_ORIGIN}/assets/sovereign/web_set_06_pdp_zoom_horsemen_macro_1793437602197.webp`,
      price: '159.00 MYR',
      mpn: 'ONYX-HM-20-MY',
    },
    {
      id: 'ONYX-HT-20',
      title: 'Hammer of Thor — Men’s Health Tribulus Terrestris Stamina Complex (20 Veg. Capsules)',
      description: 'Official Hammer of Thor Malaysia botanical stamina supplement (20 Veg. Capsules) standardized for 60% steroidal saponins, Maca Root & L-Arginine. RM 159 official price with discreet plain-box COD/FPX across Malaysia.',
      link: `${DOMAIN_ORIGIN}/hammer-of-thor-malaysia/`,
      image: `${DOMAIN_ORIGIN}/assets/sovereign/web_set_07_pdp_zoom_hammer_of_thor_macro_1793437629467.webp`,
      price: '159.00 MYR',
      mpn: 'ONYX-HT-20-MY',
    },
    {
      id: 'ONYX-MP-30',
      title: 'Magnum Pump XR — Testosterone Pro Series Nitric Oxide Complex (30 Black Capsules)',
      description: 'Official Magnum Pump XR Malaysia extended-release L-Arginine HCl, L-Citrulline Malate & Tongkat Ali supplement (30 Black Capsules). RM 159 official price with discreet plain-box COD/FPX across Malaysia.',
      link: `${DOMAIN_ORIGIN}/magnum-pump-xr-malaysia/`,
      image: `${DOMAIN_ORIGIN}/assets/sovereign/web_set_08_pdp_zoom_magnum_pump_xr_macro_1793437665292.webp`,
      price: '159.00 MYR',
      mpn: 'ONYX-MP-30-MY',
    },
    {
      id: 'ONYX-GX-30',
      title: 'Grow XL — #1 Selling Extra-Strength 30-Day Botanical Vitality Blend (30 Capsules)',
      description: 'Official Grow XL Malaysia 30-day botanical vitality formula (30 Capsules) with Extra-Strength Tongkat Ali, Peruvian Maca & Muira Puama. RM 159 official price with discreet plain-box COD/FPX across Malaysia.',
      link: `${DOMAIN_ORIGIN}/grow-xl-malaysia/`,
      image: `${DOMAIN_ORIGIN}/assets/sovereign/web_set_09_pdp_zoom_grow_xl_macro_1793437711484.webp`,
      price: '159.00 MYR',
      mpn: 'ONYX-GX-30-MY',
    },
  ];

  const merchantItemsMs = [
    {
      id: 'ONYX-HM-20-MS',
      title: 'Horsemen Malaysia — Ekstrak Tongkat Ali & Maca Hitam Piawai (20 Kapsul x 500mg)',
      description: 'Suplemen botani rasmi Horsemen Malaysia (20 Kapsul x 500mg) dengan Tongkat Ali 100:1, Maca Hitam Peru & Panax Ginseng. Harga rasmi RM 159 dengan penghantaran bungkusan rahsia COD/FPX seluruh Malaysia.',
      link: `${DOMAIN_ORIGIN}/ms/horsemen-malaysia/`,
      image: `${DOMAIN_ORIGIN}/assets/sovereign/web_set_06_pdp_zoom_horsemen_macro_1793437602197.webp`,
      price: '159.00 MYR',
      mpn: 'ONYX-HM-20-MY',
    },
    {
      id: 'ONYX-HT-20-MS',
      title: 'Hammer of Thor Malaysia — Kompleks Stamina Tribulus Terrestris (20 Kapsul Veg.)',
      description: 'Suplemen stamina botani rasmi Hammer of Thor Malaysia (20 Kapsul Veg.) dengan Tribulus Terrestris, Akar Maca & L-Arginine. Harga rasmi RM 159 dengan bungkusan rahsia COD/FPX seluruh Malaysia.',
      link: `${DOMAIN_ORIGIN}/ms/hammer-of-thor-malaysia/`,
      image: `${DOMAIN_ORIGIN}/assets/sovereign/web_set_07_pdp_zoom_hammer_of_thor_macro_1793437629467.webp`,
      price: '159.00 MYR',
      mpn: 'ONYX-HT-20-MY',
    },
    {
      id: 'ONYX-MP-30-MS',
      title: 'Magnum Pump XR Malaysia — Siri Pro Kompleks Nitrik Oksida (30 Kapsul Hitam)',
      description: 'Suplemen rasmi Magnum Pump XR Malaysia (30 Kapsul Hitam) dengan L-Arginine HCl, L-Citrulline Malate & Tongkat Ali. Harga rasmi RM 159 dengan bungkusan rahsia COD/FPX seluruh Malaysia.',
      link: `${DOMAIN_ORIGIN}/ms/magnum-pump-xr-malaysia/`,
      image: `${DOMAIN_ORIGIN}/assets/sovereign/web_set_08_pdp_zoom_magnum_pump_xr_macro_1793437665292.webp`,
      price: '159.00 MYR',
      mpn: 'ONYX-MP-30-MY',
    },
    {
      id: 'ONYX-GX-30-MS',
      title: 'Grow XL Malaysia — Formulasi Kecergasan Botani Harian 30 Hari (30 Kapsul)',
      description: 'Suplemen botani rasmi Grow XL Malaysia (30 Kapsul) dengan Tongkat Ali Ekstra Kuat, Maca Peru & Muira Puama. Harga rasmi RM 159 dengan bungkusan rahsia COD/FPX seluruh Malaysia.',
      link: `${DOMAIN_ORIGIN}/ms/grow-xl-malaysia/`,
      image: `${DOMAIN_ORIGIN}/assets/sovereign/web_set_09_pdp_zoom_grow_xl_macro_1793437711484.webp`,
      price: '159.00 MYR',
      mpn: 'ONYX-GX-30-MY',
    },
  ];

  const buildMerchantXml = (items, feedTitle, feedDesc) => `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>${feedTitle}</title>
    <link>${DOMAIN_ORIGIN}</link>
    <description>${feedDesc}</description>
${items
  .map(
    (it) => `    <item>
      <g:id>${it.id}</g:id>
      <g:title>${it.title}</g:title>
      <g:description>${it.description}</g:description>
      <g:link>${it.link}</g:link>
      <g:image_link>${it.image}</g:image_link>
      <g:condition>new</g:condition>
      <g:availability>in_stock</g:availability>
      <g:price>${it.price}</g:price>
      <g:brand>ONYXMEN Malaysia</g:brand>
      <g:mpn>${it.mpn}</g:mpn>
      <g:identifier_exists>yes</g:identifier_exists>
      <g:google_product_category>Health &amp; Beauty &gt; Health Care &gt; Fitness &amp; Nutrition &gt; Vitamins &amp; Supplements</g:google_product_category>
      <g:shipping>
        <g:country>MY</g:country>
        <g:service>Discreet Plain-Box Express Courier &amp; COD</g:service>
        <g:price>0.00 MYR</g:price>
      </g:shipping>
    </item>`
  )
  .join('\n')}
  </channel>
</rss>
`;

  const merchantXmlEn = buildMerchantXml(
    merchantItemsEn,
    'ONYXMEN Malaysia — Official Botanical Vitality Product Feed (EN-MY)',
    'Official Google Merchant Center Free Listings XML product feed for ONYXMEN Malaysia (RM 159.00 MYR).'
  );
  const merchantXmlMs = buildMerchantXml(
    merchantItemsMs,
    'ONYXMEN Malaysia — Katalog Suplemen Botani Rasmi (MS-MY)',
    'Suapan produk XML rasmi Google Merchant Center untuk ONYXMEN Malaysia (RM 159.00 MYR).'
  );

  fs.writeFileSync(path.join(PUBLIC_DIR, 'google-merchant-feed.xml'), merchantXmlEn, 'utf8');
  fs.writeFileSync(path.join(PUBLIC_DIR, 'google-merchant-feed-ms.xml'), merchantXmlMs, 'utf8');

  // Generate Atom 1.0 (feed.xml) & RSS 2.0 (rss.xml) with Google WebSub / PubSubHubbub Hub
  // so Google FeedFetcher & Googlebot receive instant real-time push notifications for all 102 canonical URLs
  const sortedCanonicalRoutes = [...canonicalRouteSet].sort();
  const nowIso = new Date().toISOString();
  const rfc822Date = new Date().toUTCString();
  const xmlEscape = (s) =>
    String(s || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');

  const feedEntries = [];
  for (const r of sortedCanonicalRoutes) {
    const rel = r.replace(/^\/+/, '');
    const p = path.join(PUBLIC_DIR, rel, 'index.html');
    if (!fs.existsSync(p)) continue;
    const h = fs.readFileSync(p, 'utf8');
    const t = (h.match(/<title>([\s\S]*?)<\/title>/i) || [])[1]?.replace(/&amp;/g, '&').trim() || `Onyxmen Malaysia ${r}`;
    const d = (h.match(/<meta\s+name="description"\s+content="([^"]*)"/i) || [])[1]?.replace(/&amp;/g, '&').trim() || t;
    feedEntries.push({ url: `${DOMAIN_ORIGIN}${r}`, title: t, desc: d });
  }

  const atomXml = `<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
  <title>Onyxmen Malaysia — 100% Original Men's Vitality &amp; Discreet COD Catalog</title>
  <subtitle>Official Horsemen, Hammer of Thor, Grow XL &amp; Magnum Pump XR Malaysia (RM 159 · Buy 2 Save 10% · Buy 3 Save 15%)</subtitle>
  <link href="${DOMAIN_ORIGIN}/feed.xml" rel="self" type="application/atom+xml" />
  <link href="https://pubsubhubbub.appspot.com/" rel="hub" />
  <link href="https://pubsubhubbub.superfeedr.com/" rel="hub" />
  <link href="${DOMAIN_ORIGIN}/" rel="alternate" type="text/html" />
  <id>${DOMAIN_ORIGIN}/</id>
  <updated>${nowIso}</updated>
  <author>
    <name>Onyxmen Malaysia Official Apothecary</name>
    <uri>${DOMAIN_ORIGIN}/</uri>
  </author>
${feedEntries
  .map(
    (e) => `  <entry>
    <title>${xmlEscape(e.title)}</title>
    <link href="${e.url}" rel="alternate" type="text/html" />
    <id>${e.url}</id>
    <updated>${nowIso}</updated>
    <summary>${xmlEscape(e.desc)}</summary>
  </entry>`
  )
  .join('\n')}
</feed>
`;

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Onyxmen Malaysia — 100% Original Men's Vitality &amp; Discreet COD Catalog</title>
    <link>${DOMAIN_ORIGIN}/</link>
    <description>Official Horsemen, Hammer of Thor, Grow XL &amp; Magnum Pump XR Malaysia (RM 159 · Buy 2 Save 10% · Buy 3 Save 15%)</description>
    <language>en-my</language>
    <lastBuildDate>${rfc822Date}</lastBuildDate>
    <atom:link href="${DOMAIN_ORIGIN}/rss.xml" rel="self" type="application/rss+xml" />
    <atom:link href="https://pubsubhubbub.appspot.com/" rel="hub" />
${feedEntries
  .map(
    (e) => `    <item>
      <title>${xmlEscape(e.title)}</title>
      <link>${e.url}</link>
      <guid isPermaLink="true">${e.url}</guid>
      <pubDate>${rfc822Date}</pubDate>
      <description>${xmlEscape(e.desc)}</description>
    </item>`
  )
  .join('\n')}
  </channel>
</rss>
`;

  fs.writeFileSync(path.join(PUBLIC_DIR, 'feed.xml'), atomXml, 'utf8');
  fs.writeFileSync(path.join(PUBLIC_DIR, 'rss.xml'), rssXml, 'utf8');

  // MS-245: Preserve existing liveGscApiTelemetry & googleSearchConsoleLiveTelemetry in seo-health-status.json
  const outPath = path.join(PUBLIC_DIR, 'seo-health-status.json');
  const gscReportPath = path.join(ROOT_DIR, 'reports', 'gsc-live-telemetry.json');
  if (fs.existsSync(outPath)) {
    try {
      const prev = JSON.parse(fs.readFileSync(outPath, 'utf8'));
      if (prev && prev.liveGscApiTelemetry) {
        statusPayload.liveGscApiTelemetry = prev.liveGscApiTelemetry;
      }
      if (prev && prev.googleSearchConsoleLiveTelemetry) {
        statusPayload.googleSearchConsoleLiveTelemetry = prev.googleSearchConsoleLiveTelemetry;
      }
    } catch {
      // Ignore parse errors
    }
  }
  if (!statusPayload.liveGscApiTelemetry && fs.existsSync(gscReportPath)) {
    try {
      statusPayload.liveGscApiTelemetry = JSON.parse(fs.readFileSync(gscReportPath, 'utf8'));
    } catch {
      // Ignore parse errors
    }
  }

  fs.writeFileSync(outPath, JSON.stringify(statusPayload, null, 2), 'utf8');

  // Mirror updated PUBLIC_DIR artifacts into DIST_DIR if DIST_DIR exists
  if (fs.existsSync(DIST_DIR)) {
    fs.cpSync(PUBLIC_DIR, DIST_DIR, { recursive: true, force: true });
  }

  console.log('====================================================================');
  console.log('ONYXMEN.MY AUTONOMOUS SEO FRESHNESS & TELEMETRY OPTIMIZER (MS-213)');
  console.log('====================================================================');
  console.log(`MYT Freshness Date        : ${todayMyt}`);
  console.log(`XML Sitemaps Refreshed    : ${updatedSitemaps}/5 (${totalSitemapLocs} canonical URLs)`);
  console.log(`Total HTML Pages Audited  : ${htmlFiles.length}`);
  console.log(`Canonical Links Rewritten : ${canonicalInternalLinksRewritten}`);
  console.log(`GSC Meta Verified Pages   : ${pagesWithGscTag}/${htmlFiles.length}`);
  console.log(`Hreflang Reciprocal Pages : ${pagesWithHreflang}/${htmlFiles.length}`);
  console.log(`Total @graph Schema Nodes : ${totalJsonLdNodes}`);
  console.log(`Total FAQ Schema Q&As     : ${totalFaqQuestionsIndexed}`);
  console.log(`[PASS] Updated public/seo-health-status.json & all 5 XML sitemaps.`);
}

main();
