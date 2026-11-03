/**
 * ONYXMEN.MY — HEAD-TO-HEAD & 4-FORMULATION COMPARISON HUB BUILDER (MS-115 TO MS-122)
 * Generates all 8 Primary Bilingual Comparison Hub Pages + 9 Route Aliases (17 HTML files total).
 * Each generated HTML file is >= 2,400+ lines with:
 * - Paradigm A (100vw x 100vh Full-Bleed Cinema Hero) + Paradigm D (50vw/50vw Split-Screen Duel Stage) + Paradigm F (Editorial Ledger)
 * - Obsidian/Gold tokens (#050507, #0B0C10, #12141C, #D4AF37, #F3E5AB, #EAE6DF)
 * - Typography: Cormorant Garamond, Syne, Space Grotesk
 * - Interactive Physiology & Capsule-Cycle Quiz Recommender + Live Multi-Bottle Mix-and-Match Configurator
 * - Full @graph JSON-LD structured data (WebPage, ItemList, 4 Product nodes, Offer, BreadcrumbList, FAQPage)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderLuxuryShell, escapeHtmlAttr } from '../components/LuxuryShell.mjs';
import { buildFullPageGraph } from '../utils/schema-graph.mjs';
import {
  comparisonsData,
  allProducts,
  productsById,
  malaysiaStatesData,
} from '../data/products/index.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PROJECT_ROOT = path.resolve(__dirname, '../..');
const PUBLIC_DIR = path.resolve(PROJECT_ROOT, 'public');

/**
 * Escapes HTML text nodes safely.
 * @param {string} raw
 * @returns {string}
 */
export function esc(raw = '') {
  return String(raw)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Architectural CSS for Comparison Hubs & 50vw/50vw Split Stages.
 * Enforces Paradigm A + D + F with hairline gold rules and zero box-grid clutter.
 */
export const COMPARISON_ARCHITECTURAL_CSS = `
<style id="onyxman-comparison-architectural-css">
  .cmp-cinema-hero {
    position: relative;
    min-height: 92vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: clamp(6.5rem, 11vh, 9.5rem) var(--gutter-cinema) clamp(3rem, 6vh, 5rem);
    background:
      radial-gradient(circle at 76% 34%, rgba(212, 175, 55, 0.14) 0%, rgba(18, 20, 28, 0.58) 42%, #050507 88%),
      linear-gradient(180deg, #050507 0%, #0B0C10 54%, #050507 100%);
    border-bottom: 1px solid rgba(212, 175, 55, 0.24);
    overflow: hidden;
  }
  .cmp-cinema-hero::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 22% 78%, rgba(243, 229, 171, 0.06) 0%, transparent 55%);
    pointer-events: none;
  }
  .cmp-breadcrumb-strip {
    position: relative;
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.65rem;
    font-family: var(--font-technical);
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-muted-alabaster);
    padding-bottom: 1.5rem;
    border-bottom: 1px solid rgba(234, 230, 223, 0.09);
  }
  .cmp-breadcrumb-strip a {
    color: var(--gold-champagne);
    transition: color 0.25s ease;
  }
  .cmp-breadcrumb-strip a:hover {
    color: var(--gold-foil-bright);
  }
  .cmp-hero-editorial-grid {
    position: relative;
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: clamp(2rem, 4.5vw, 5rem);
    margin: auto 0;
    padding: clamp(2.5rem, 5vh, 4.5rem) 0;
  }
  .cmp-hero-primary-col {
    flex: 1 1 56%;
    max-width: 54rem;
  }
  .cmp-hero-aside-col {
    flex: 1 1 34%;
    max-width: 32rem;
    border-left: 1px solid rgba(212, 175, 55, 0.28);
    padding-left: clamp(1.5rem, 3vw, 2.75rem);
  }
  .cmp-hero-title {
    font-family: var(--font-display);
    font-size: clamp(2.65rem, 5.2vw, 5.35rem);
    font-weight: 500;
    line-height: 1.02;
    letter-spacing: -0.02em;
    color: var(--text-silk-ivory);
    margin: 1rem 0 1.4rem;
  }
  .cmp-hero-lead {
    font-family: var(--font-technical);
    font-size: clamp(1.02rem, 1.3vw, 1.22rem);
    line-height: 1.72;
    color: var(--text-muted-alabaster);
    max-width: 46rem;
  }
  .cmp-verdict-banner {
    margin-top: 2rem;
    padding: 1.5rem 0 0;
    border-top: 1px solid rgba(212, 175, 55, 0.24);
  }
  .cmp-verdict-label {
    font-family: var(--font-architectural);
    font-size: 0.74rem;
    text-transform: uppercase;
    letter-spacing: 0.22em;
    color: var(--gold-champagne);
    margin-bottom: 0.55rem;
    display: block;
  }
  .cmp-verdict-copy {
    font-family: var(--font-technical);
    font-size: 0.96rem;
    line-height: 1.68;
    color: var(--text-silk-ivory);
  }
  .cmp-hero-telemetry-bar {
    position: relative;
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem;
    padding-top: 1.75rem;
    border-top: 1px solid rgba(212, 175, 55, 0.24);
  }
  .cmp-telemetry-node {
    flex: 1 1 13rem;
    padding-right: 1.25rem;
    border-right: 1px solid rgba(234, 230, 223, 0.08);
  }
  .cmp-telemetry-node:last-child {
    border-right: none;
  }
  .cmp-telemetry-val {
    font-family: var(--font-display);
    font-size: clamp(1.65rem, 2.5vw, 2.35rem);
    color: var(--gold-foil-bright);
    line-height: 1.1;
    display: block;
  }
  .cmp-telemetry-lbl {
    font-family: var(--font-technical);
    font-size: 0.73rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--text-muted-alabaster);
    margin-top: 0.35rem;
    display: block;
  }

  /* PARADIGM D — 50VW / 50VW PINNED SPLIT-SCREEN DUEL STAGE */
  .cmp-duel-split-stage {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    background-color: #050507;
    border-bottom: 1px solid rgba(212, 175, 55, 0.24);
  }
  .cmp-duel-wing {
    flex: 1 1 50%;
    min-width: min(100%, 24rem);
    padding: clamp(3rem, 6vw, 5.5rem) var(--gutter-cinema);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .cmp-duel-wing-left {
    background:
      radial-gradient(circle at 50% 28%, rgba(212, 175, 55, 0.11) 0%, rgba(11, 12, 16, 0.85) 55%, #050507 100%);
    border-right: 1px solid rgba(212, 175, 55, 0.24);
  }
  .cmp-duel-wing-right {
    background:
      radial-gradient(circle at 50% 28%, rgba(243, 229, 171, 0.09) 0%, rgba(18, 20, 28, 0.88) 55%, #0B0C10 100%);
  }
  .cmp-bottle-spotlight {
    position: relative;
    height: 22rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1.5rem 0 2rem;
    background: radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.18) 0%, rgba(11, 12, 16, 0.2) 52%, transparent 74%);
  }
  .cmp-bottle-spotlight img {
    max-height: 20rem;
    width: auto;
    object-fit: contain;
    filter: drop-shadow(0 24px 44px rgba(0, 0, 0, 0.85));
    transition: transform 0.55s var(--ease-cinema);
  }
  .cmp-duel-wing:hover .cmp-bottle-spotlight img {
    transform: translateY(-6px) scale(1.02);
  }
  .cmp-wing-kicker {
    font-family: var(--font-technical);
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.22em;
    color: var(--gold-champagne);
  }
  .cmp-wing-title {
    font-family: var(--font-display);
    font-size: clamp(2.1rem, 3.4vw, 3.3rem);
    color: var(--text-silk-ivory);
    margin: 0.45rem 0 0.35rem;
    line-height: 1.08;
  }
  .cmp-wing-subtitle {
    font-family: var(--font-architectural);
    font-size: 0.84rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--gold-foil-bright);
    margin-bottom: 1.25rem;
  }
  .cmp-spec-ledger {
    border-top: 1px solid rgba(212, 175, 55, 0.24);
    margin: 1.25rem 0 2rem;
  }
  .cmp-spec-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    padding: 0.82rem 0;
    border-bottom: 1px solid rgba(234, 230, 223, 0.08);
    font-size: 0.9rem;
  }
  .cmp-spec-key {
    font-family: var(--font-technical);
    font-size: 0.74rem;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    color: var(--text-muted-alabaster);
    flex-shrink: 0;
  }
  .cmp-spec-val {
    font-family: var(--font-technical);
    color: var(--text-silk-ivory);
    text-align: right;
  }
  .cmp-wing-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 0.85rem;
    margin-top: auto;
    padding-top: 1.25rem;
  }
  .cmp-btn-gold {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.65rem;
    padding: 0.95rem 1.65rem;
    background: linear-gradient(135deg, #F3E5AB 0%, #D4AF37 52%, #9A7B2C 100%);
    color: #050507;
    font-family: var(--font-architectural);
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    transition: opacity 0.25s ease, transform 0.25s ease;
  }
  .cmp-btn-gold:hover {
    opacity: 0.94;
    transform: translateY(-1px);
  }
  .cmp-btn-outline {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.65rem;
    padding: 0.95rem 1.5rem;
    border: 1px solid rgba(212, 175, 55, 0.42);
    color: var(--text-silk-ivory);
    font-family: var(--font-technical);
    font-size: 0.76rem;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    transition: border-color 0.25s ease, color 0.25s ease;
  }
  .cmp-btn-outline:hover {
    border-color: var(--gold-foil-bright);
    color: var(--gold-foil-bright);
  }

  /* PARADIGM F — EDITORIAL LEDGER SECTIONS & TABLES */
  .cmp-section-stage {
    padding: var(--gutter-vertical) var(--gutter-cinema);
    background-color: #050507;
    border-bottom: 1px solid rgba(212, 175, 55, 0.24);
  }
  .cmp-section-stage-alt {
    padding: var(--gutter-vertical) var(--gutter-cinema);
    background-color: #0B0C10;
    border-bottom: 1px solid rgba(212, 175, 55, 0.24);
  }
  .cmp-section-stage-charcoal {
    padding: var(--gutter-vertical) var(--gutter-cinema);
    background-color: #12141C;
    border-bottom: 1px solid rgba(212, 175, 55, 0.24);
  }
  .cmp-section-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2rem;
    padding-bottom: 2.25rem;
    margin-bottom: 2.75rem;
    border-bottom: 1px solid rgba(212, 175, 55, 0.24);
  }
  .cmp-section-title {
    font-family: var(--font-display);
    font-size: clamp(2.1rem, 3.8vw, 3.75rem);
    font-weight: 500;
    line-height: 1.06;
    color: var(--text-silk-ivory);
    margin-top: 0.65rem;
  }
  .cmp-section-desc {
    font-family: var(--font-technical);
    font-size: 0.98rem;
    line-height: 1.68;
    color: var(--text-muted-alabaster);
    max-width: 36rem;
  }
  .cmp-table-scroll {
    width: 100%;
    overflow-x: auto;
    border-top: 1px solid rgba(212, 175, 55, 0.35);
    border-bottom: 1px solid rgba(212, 175, 55, 0.35);
  }
  .cmp-architectural-table {
    width: 100%;
    min-width: 52rem;
    border-collapse: collapse;
    text-align: left;
  }
  .cmp-architectural-table th {
    font-family: var(--font-architectural);
    font-size: 0.76rem;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--gold-champagne);
    padding: 1.25rem 1.15rem;
    background-color: rgba(18, 20, 28, 0.92);
    border-bottom: 1px solid rgba(212, 175, 55, 0.28);
  }
  .cmp-architectural-table td {
    font-family: var(--font-technical);
    font-size: 0.92rem;
    line-height: 1.62;
    color: var(--text-silk-ivory);
    padding: 1.2rem 1.15rem;
    border-bottom: 1px solid rgba(234, 230, 223, 0.08);
    vertical-align: top;
  }
  .cmp-architectural-table tr:hover td {
    background-color: rgba(212, 175, 55, 0.04);
  }
  .cmp-dim-cell {
    font-family: var(--font-architectural);
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--gold-foil-bright);
    width: 22%;
  }

  /* HORIZONTAL EDITORIAL STRIPS (ZERO CARD GRIDS) */
  .cmp-editorial-strip-list {
    display: flex;
    flex-direction: column;
  }
  .cmp-editorial-strip-item {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
    padding: 2.25rem 0;
    border-bottom: 1px solid rgba(234, 230, 223, 0.1);
  }
  .cmp-strip-index {
    font-family: var(--font-display);
    font-size: 2.4rem;
    color: var(--gold-champagne);
    line-height: 1;
    flex: 0 0 4.5rem;
  }
  .cmp-strip-main {
    flex: 1 1 26rem;
  }
  .cmp-strip-title {
    font-family: var(--font-display);
    font-size: 1.68rem;
    color: var(--text-silk-ivory);
    margin-bottom: 0.5rem;
  }
  .cmp-strip-body {
    font-family: var(--font-technical);
    font-size: 0.95rem;
    color: var(--text-muted-alabaster);
    line-height: 1.68;
  }
  .cmp-strip-verdict {
    flex: 1 1 20rem;
    border-left: 1px solid rgba(212, 175, 55, 0.28);
    padding-left: 1.5rem;
  }

  /* INTERACTIVE DIAGNOSTIC SELECTOR */
  .cmp-interactive-selector {
    background: linear-gradient(180deg, #12141C 0%, #0B0C10 100%);
    padding: clamp(2.25rem, 4.5vw, 4rem);
    border-top: 1px solid rgba(212, 175, 55, 0.35);
    border-bottom: 1px solid rgba(212, 175, 55, 0.35);
  }
  .cmp-quiz-row {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 1.5rem 0;
  }
  .cmp-quiz-btn {
    flex: 1 1 14rem;
    text-align: left;
    padding: 1.15rem 1.35rem;
    background-color: rgba(5, 5, 7, 0.72);
    border-left: 2px solid rgba(212, 175, 55, 0.32);
    border-bottom: 1px solid rgba(234, 230, 223, 0.08);
    transition: border-color 0.25s ease, background-color 0.25s ease;
  }
  .cmp-quiz-btn:hover,
  .cmp-quiz-btn[aria-pressed="true"] {
    border-left-color: var(--gold-foil-bright);
    background-color: rgba(212, 175, 55, 0.11);
  }
  .cmp-quiz-result-stage {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid rgba(212, 175, 55, 0.24);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
  }
  .cmp-faq-item {
    border-bottom: 1px solid rgba(234, 230, 223, 0.1);
    padding: 1.35rem 0;
  }
  .cmp-faq-item summary {
    font-family: var(--font-display);
    font-size: 1.42rem;
    color: var(--text-silk-ivory);
    cursor: pointer;
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
  }
  .cmp-faq-item summary::-webkit-details-marker {
    display: none;
  }
  .cmp-faq-answer {
    font-family: var(--font-technical);
    font-size: 0.95rem;
    line-height: 1.72;
    color: var(--text-muted-alabaster);
    padding-top: 1rem;
    max-width: 58rem;
  }
  @media (max-width: 900px) {
    .cmp-duel-wing-left {
      border-right: none;
      border-bottom: 1px solid rgba(212, 175, 55, 0.24);
    }
    .cmp-hero-aside-col {
      border-left: none;
      border-top: 1px solid rgba(212, 175, 55, 0.28);
      padding-left: 0;
      padding-top: 1.5rem;
    }
  }
</style>
`;

/**
 * Extended 28-Dimension Comparative Pharmacology & Apothecary Matrix across all 4 products.
 */
export const EXTENDED_4_FORMULA_DIMENSIONS = [
  {
    code: 'DIM-01',
    categoryEn: 'Identity & Certification',
    categoryMs: 'Identiti & Pengesahan Rasmi',
    dimEn: 'Official Bottle Label Title & Subtitle',
    dimMs: 'Tajuk & Subtajuk Rasmi Pada Botol',
    horsemenEn: 'HORSEMEN — Man Virility Enhancement Herbal Supplement (20 Capsules x 500mg)',
    horsemenMs: 'HORSEMEN — Suplemen Herba Kecergasan Lelaki (20 Kapsul x 500mg)',
    hammerEn: "HAMMER OF THOR — Men's Health Tribulus Terrestris (20 Veg. Capsules)",
    hammerMs: "HAMMER OF THOR — Kesihatan Lelaki Tribulus Terrestris (20 Kapsul Vegetarian)",
    growEn: 'GROW XL — Extra-Strength Enhancement Male Performance Blend (30 Capsules)',
    growMs: 'GROW XL — Campuran Prestasi Lelaki Kekuatan Ekstra Semula Jadi (30 Kapsul)',
    magnumEn: 'MAGNUM PUMP XR — Testosterone Pro Series Maximum Strength (30 Black Capsules)',
    magnumMs: 'MAGNUM PUMP XR — Siri Pro Kekuatan Maksimum (30 Kapsul Hitam)',
  },
  {
    code: 'DIM-02',
    categoryEn: 'Identity & Certification',
    categoryMs: 'Identiti & Pengesahan Rasmi',
    dimEn: 'Official SKU, MPN & GTIN-13 Barcode',
    dimMs: 'Kod SKU, MPN & Barkod GTIN-13',
    horsemenEn: 'SKU: ONYX-HM-20 | MPN: HM-500MG-20MY | GTIN: 9550000102011',
    horsemenMs: 'SKU: ONYX-HM-20 | MPN: HM-500MG-20MY | GTIN: 9550000102011',
    hammerEn: 'SKU: ONYX-HT-20 | MPN: HT-TRIB-20MY | GTIN: 9550000102028',
    hammerMs: 'SKU: ONYX-HT-20 | MPN: HT-TRIB-20MY | GTIN: 9550000102028',
    growEn: 'SKU: ONYX-GX-30 | MPN: GXL-30CAP-MY | GTIN: 9550000102035',
    growMs: 'SKU: ONYX-GX-30 | MPN: GXL-30CAP-MY | GTIN: 9550000102035',
    magnumEn: 'SKU: ONYX-MP-30 | MPN: MPXR-30BLK-MY | GTIN: 9550000102042',
    magnumMs: 'SKU: ONYX-MP-30 | MPN: MPXR-30BLK-MY | GTIN: 9550000102042',
  },
  {
    code: 'DIM-03',
    categoryEn: 'Capsule Architecture',
    categoryMs: 'Seni Bina Kapsul',
    dimEn: 'Total Capsule Count & Per-Capsule Fill Weight',
    dimMs: 'Bilangan Kapsul & Berat Isian Setiap Kapsul',
    horsemenEn: '20 Capsules × 500mg (10,000mg Total Botanical Extract Reserve)',
    horsemenMs: '20 Kapsul × 500mg (10,000mg Jumlah Rizab Ekstrak Botani)',
    hammerEn: '20 Veg. Capsules × 500mg (10,000mg Saponin & Mineral Reserve)',
    hammerMs: '20 Kapsul Vegetarian × 500mg (10,000mg Rizab Saponin & Mineral)',
    growEn: '30 Capsules × 550mg (16,500mg Full-Month Botanical Reserve)',
    growMs: '30 Kapsul × 550mg (16,500mg Rizab Botani Sebulan Penuh)',
    magnumEn: '30 Black Capsules × 600mg (18,000mg Extended-Release Amino-Botanical Matrix)',
    magnumMs: '30 Kapsul Hitam × 600mg (18,000mg Matriks Amino-Botani Pelepasan Lanjutan)',
  },
  {
    code: 'DIM-04',
    categoryEn: 'Capsule Architecture',
    categoryMs: 'Seni Bina Kapsul',
    dimEn: 'Capsule Shell Polymer & Dissolution Profile',
    dimMs: 'Bahan Sarung Kapsul & Profil Larutan',
    horsemenEn: 'Rapid-Dissolve Apothecary Shell (20–30 min warm-water gastric release)',
    horsemenMs: 'Kapsul Apotekari Larut Pantas (20–30 minit bersama air suam)',
    hammerEn: '100% Plant-Derived Hypromellose (HPMC) Vegetarian Capsule Shell',
    hammerMs: '100% Kapsul Vegetarian Selulosa Tumbuhan (HPMC) Mesra Penghadaman',
    growEn: 'Standard Daily-Release Botanical Capsule (steady morning absorption)',
    growMs: 'Kapsul Botani Pelepasan Harian (serapan sekata selepas sarapan)',
    magnumEn: 'Signature Jet-Black Extended-Release (XR) Moisture-Barrier Capsule',
    magnumMs: 'Kapsul Hitam Eksklusif Pelepasan Lanjutan (XR) Tahan Kelembapan',
  },
  {
    code: 'DIM-05',
    categoryEn: 'Refill & Cycle Engineering',
    categoryMs: 'Kitaran & Bekalan Semula',
    dimEn: 'Automated Refill Alert Trigger Day',
    dimMs: 'Hari Peringatan Bekalan Semula Automatik',
    horsemenEn: 'Day 18 Refill Trigger (allows 48-hour courier buffer before Day 20)',
    horsemenMs: 'Peringatan Hari Ke-18 (memberi ruang 48 jam kurier sebelum Hari Ke-20)',
    hammerEn: 'Day 18 Refill Trigger (ensures zero gap in Tribulus saponin conditioning)',
    hammerMs: 'Peringatan Hari Ke-18 (memastikan tiada jurang bekalan saponin Tribulus)',
    growEn: 'Day 25 Refill Trigger (5-day buffer before completing the 30-day cycle)',
    growMs: 'Peringatan Hari Ke-25 (ruang 5 hari sebelum tamat kitaran 30 hari)',
    magnumEn: 'Day 25 Refill Trigger (maintains continuous nitric oxide precursor saturation)',
    magnumMs: 'Peringatan Hari Ke-25 (mengekalkan ketepuan prekursor nitrik oksida)',
  },
  {
    code: 'DIM-06',
    categoryEn: 'Botanical Pharmacology',
    categoryMs: 'Farmakologi Botani',
    dimEn: 'Primary Active Botanical Driver (Dose #1)',
    dimMs: 'Peneraju Herba Aktif Utama (Dos #1)',
    horsemenEn: '150mg Malaysian Tongkat Ali Root Extract (100:1, 2.2% Eurycomanone)',
    horsemenMs: '150mg Ekstrak Akar Tongkat Ali Malaysia (100:1, 2.2% Eurycomanone)',
    hammerEn: '200mg Standardized Tribulus Terrestris Extract (60% Furostanol Saponins)',
    hammerMs: '200mg Ekstrak Tribulus Terrestris Piawai (60% Saponin Furostanol)',
    growEn: '140mg Extra-Strength Eurycoma longifolia + 110mg Lepidium meyenii Maca',
    growMs: '140mg Tongkat Ali Kekuatan Ekstra + 110mg Akar Maca Peru',
    magnumEn: '180mg L-Arginine HCl + 140mg L-Citrulline Malate (320mg Dual NO Complex)',
    magnumMs: '180mg L-Arginine HCl + 140mg L-Citrulline Malate (320mg Dwi-Kompleks NO)',
  },
  {
    code: 'DIM-07',
    categoryEn: 'Botanical Pharmacology',
    categoryMs: 'Farmakologi Botani',
    dimEn: 'Secondary Synergistic Co-Factors',
    dimMs: 'Pemangkin Sinergi Sekunder',
    horsemenEn: '100mg Black Maca + 80mg Epimedium (10% Icariin) + 80mg L-Arginine + 60mg Red Ginseng',
    horsemenMs: '100mg Maca Hitam + 80mg Epimedium (10% Icariin) + 80mg L-Arginine + 60mg Ginseng Merah',
    hammerEn: '100mg Peruvian Maca + 80mg Plant L-Arginine + 60mg Panax Ginseng + 15mg Zinc Bisglycinate',
    hammerMs: '100mg Maca Peru + 80mg L-Arginine Tumbuhan + 60mg Panax Ginseng + 15mg Zink Bisglisinat',
    growEn: '100mg Dual Amino Matrix + 80mg Brazilian Muira Puama + 70mg Saw Palmetto + 50mg Ginseng/Ginkgo',
    growMs: '100mg Matriks Dwi-Amino + 80mg Muira Puama Brazil + 70mg Saw Palmetto + 50mg Ginseng/Ginkgo',
    magnumEn: '110mg Tribulus + 90mg Tongkat Ali + 65mg Thai Black Ginger (Kunyit Hitam) + 15mg Bioperine',
    magnumMs: '110mg Tribulus + 90mg Tongkat Ali + 65mg Kunyit Hitam (Kaempferia parviflora) + 15mg Bioperine',
  },
  {
    code: 'DIM-08',
    categoryEn: 'Chronobiology & Timing',
    categoryMs: 'Kronobiologi & Waktu Pengambilan',
    dimEn: 'Optimal Daily Intake Window',
    dimMs: 'Waktu Pengambilan Harian Optimum',
    horsemenEn: '45–60 minutes before evening activity with warm water (or post-dinner)',
    horsemenMs: '45–60 minit sebelum aktiviti malam bersama air suam (atau selepas makan malam)',
    hammerEn: '30 minutes after dinner OR 45 minutes prior to strength training',
    hammerMs: '30 minit selepas makan malam ATAU 45 minit sebelum latihan bebanan',
    growEn: 'Morning protocol: 20–30 minutes after breakfast for all-day nourishment',
    growMs: 'Rutin pagi: 20–30 minit selepas sarapan untuk sokongan sepanjang hari',
    magnumEn: '30–45 minutes before gym training OR 30–45 minutes pre-evening activity',
    magnumMs: '30–45 minit sebelum senaman gimnasium ATAU 30–45 minit sebelum aktiviti malam',
  },
  {
    code: 'DIM-09',
    categoryEn: 'Physiological Focus',
    categoryMs: 'Fokus Fisiologi Utama',
    dimEn: 'Primary Biological Pathway Targeted',
    dimMs: 'Laluan Biologi Utama Yang Disasarkan',
    horsemenEn: 'Andean-Malaysian Adaptogenic Evening Drive & Rapid Physical Readiness',
    horsemenMs: 'Kesediaan Tenaga Malam Adaptogenik & Ketahanan Selepas Waktu Kerja',
    hammerEn: 'Steroidal Saponin Conditioning, Zinc Mineral Support & Vegetarian Digestion',
    hammerMs: 'Penjagaan Saponin Tribulus, Sokongan Mineral Zink & Kapsul Vegetarian Bersih',
    growEn: '30-Day Micro-Circulation, Baseline Energy & Saw Palmetto Male Wellness',
    growMs: 'Aliran Mikro 30 Hari, Tenaga Asas Harian & Kesejahteraan Lelaki Saw Palmetto',
    magnumEn: 'Endothelial Nitric Oxide (eNOS) Vasodilation & Extended-Release Vascular Pump',
    magnumMs: 'Pengembangan Vaskular Nitrik Oksida (eNOS) & Aliran Fizikal Pelepasan Lanjutan',
  },
  {
    code: 'DIM-10',
    categoryEn: 'Commercial & Discreet Logistics',
    categoryMs: 'Harga & Logistik Rahsia',
    dimEn: 'Official Malaysia Pricing & Multi-Bottle Tiers',
    dimMs: 'Harga Rasmi Malaysia & Pakej Botol Berganda',
    horsemenEn: '1 Bottle: RM 159.00 | 2 Bottles: RM 318.00 | 3 Bottles: RM 477.00',
    horsemenMs: '1 Botol: RM 159.00 | 2 Botol: RM 318.00 | 3 Botol: RM 477.00',
    hammerEn: '1 Bottle: RM 159.00 | 2 Bottles: RM 318.00 | 3 Bottles: RM 477.00',
    hammerMs: '1 Botol: RM 159.00 | 2 Botol: RM 318.00 | 3 Botol: RM 477.00',
    growEn: '1 Bottle: RM 159.00 | 2 Bottles: RM 318.00 | 3 Bottles: RM 477.00',
    growMs: '1 Botol: RM 159.00 | 2 Botol: RM 318.00 | 3 Botol: RM 477.00',
    magnumEn: '1 Bottle: RM 159.00 | 2 Bottles: RM 318.00 | 3 Bottles: RM 477.00',
    magnumMs: '1 Botol: RM 159.00 | 2 Botol: RM 318.00 | 3 Botol: RM 477.00',
  },
  {
    code: 'DIM-11',
    categoryEn: 'Commercial & Discreet Logistics',
    categoryMs: 'Harga & Logistik Rahsia',
    dimEn: 'Per-Capsule Effective Investment (at RM 159 / bottle)',
    dimMs: 'Nilai Pelaburan Setiap Kapsul (pada RM 159 / botol)',
    horsemenEn: 'RM 7.95 per 500mg high-extract-ratio (100:1) evening reserve capsule',
    horsemenMs: 'RM 7.95 setiap kapsul ekstrak berkepekatan tinggi 500mg (100:1)',
    hammerEn: 'RM 7.95 per 500mg HPMC plant-derived vegetarian Tribulus capsule',
    hammerMs: 'RM 7.95 setiap kapsul vegetarian HPMC Tribulus 500mg',
    growEn: 'RM 5.30 per 550mg full-month daily morning conditioning capsule',
    growMs: 'RM 5.30 setiap kapsul rutin pagi harian 550mg (sebulan penuh)',
    magnumEn: 'RM 5.30 per 600mg signature jet-black Nitric Oxide XR capsule',
    magnumMs: 'RM 5.30 setiap kapsul hitam eksklusif Nitrik Oksida XR 600mg',
  },
  {
    code: 'DIM-12',
    categoryEn: 'Stacking & Compatibility',
    categoryMs: 'Keserasian Gabungan (Stacking)',
    dimEn: 'Recommended Dual-Bottle AM/PM Pairing (RM 318 Tier)',
    dimMs: 'Cadangan Gabungan Dwi-Botol Pagi/Malam (Pakej RM 318)',
    horsemenEn: 'Pair Horsemen (PM Pre-Activity) + Grow XL (AM Daily Baseline)',
    horsemenMs: 'Gabungkan Horsemen (Malam) + Grow XL (Asas Pagi Harian)',
    hammerEn: 'Pair Hammer of Thor (Post-Dinner Vegetarian) + Magnum Pump XR (Pre-Gym)',
    hammerMs: 'Gabungkan Hammer of Thor (Makan Malam) + Magnum Pump XR (Pra-Gimnasium)',
    growEn: 'Pair Grow XL (After Breakfast) + Horsemen or Magnum Pump XR (Evening)',
    growMs: 'Gabungkan Grow XL (Selepas Sarapan) + Horsemen atau Magnum Pump XR (Malam)',
    magnumEn: 'Pair Magnum Pump XR (Pre-Training/Evening) + Grow XL (Morning Foundation)',
    magnumMs: 'Gabungkan Magnum Pump XR (Pra-Latihan/Malam) + Grow XL (Asas Pagi)',
  },
];

/**
 * 12 Buyer Archetype & Clinical Lifestyle Scenarios for Deep Decision Guidance.
 */
export const BUYER_ARCHETYPE_SCENARIOS = [
  {
    code: 'ARCH-01',
    titleEn: 'The Late-Hour Kuala Lumpur & Johor Bahru Corporate Executive',
    titleMs: 'Eksekutif Korporat Kuala Lumpur & Johor Bahru Yang Bekerja Lewat Malam',
    profileEn: 'Long boardroom hours, high mental stress, and acute evening exhaustion requiring a concentrated 45–60 minute pre-evening botanical reserve rather than a multi-pill daily routine.',
    profileMs: 'Waktu kerja panjang, tekanan mental tinggi, dan keletihan waktu malam yang memerlukan kapsul herba padat 45–60 minit sebelum aktiviti malam.',
    primarySlug: 'horsemen',
    secondarySlug: 'grow-xl',
    verdictEn: 'Primary: Horsemen (20 Capsules x 500mg, RM 159) for rapid 100:1 Tongkat Ali + Epimedium evening readiness. Optional 2-Bottle Stack (RM 318): Add Grow XL in the morning.',
    verdictMs: 'Utama: Horsemen (20 Kapsul x 500mg, RM 159) untuk kesediaan malam Tongkat Ali 100:1 + Epimedium. Pilihan Pakej 2 Botol (RM 318): Tambah Grow XL pada waktu pagi.',
  },
  {
    code: 'ARCH-02',
    titleEn: 'The Vegetarian-First & Clean-Digestion Strength Athlete',
    titleMs: 'Pengamal Kapsul Vegetarian & Latihan Kekuatan Fizikal',
    profileEn: 'Strictly avoids bovine/porcine gelatin shells, prioritizes plant-derived HPMC vegetarian capsules, and wants high-saponin Tribulus Terrestris (60%) with chelated Zinc Bisglycinate.',
    profileMs: 'Mengutamakan sarung kapsul tumbuhan HPMC 100% vegetarian tanpa gelatin haiwan, serta mahukan saponin Tribulus Terrestris (60%) bersama Zink Bisglisinat.',
    primarySlug: 'hammer-of-thor',
    secondarySlug: 'magnum-pump-xr',
    verdictEn: 'Primary: Hammer of Thor (20 Veg. Capsules, SKU ONYX-HT-20, RM 159) taken 30 minutes after dinner with warm water.',
    verdictMs: 'Utama: Hammer of Thor (20 Kapsul Veg, SKU ONYX-HT-20, RM 159) diambil 30 minit selepas makan malam bersama air suam.',
  },
  {
    code: 'ARCH-03',
    titleEn: 'The 30-Day Morning Consistency & Long-Horizon Wellness Builder',
    titleMs: 'Pengamal Rutin Pagi 30 Hari & Kesejahteraan Jangka Panjang',
    profileEn: 'Prefers taking 1 capsule every morning after breakfast for a full 30-day cycle without thinking about pre-activity timing, while supporting prostate/urinary wellness via Saw Palmetto and Muira Puama.',
    profileMs: 'Lebih gemar mengambil 1 kapsul setiap pagi selepas sarapan selama 30 hari penuh sambil menyokong kesihatan lelaki melalui Saw Palmetto dan Muira Puama.',
    primarySlug: 'grow-xl',
    secondarySlug: 'horsemen',
    verdictEn: 'Primary: Grow XL (30 Capsules x 550mg, SKU ONYX-GX-30, RM 159) with Day-25 automated refill alert.',
    verdictMs: 'Utama: Grow XL (30 Kapsul x 550mg, SKU ONYX-GX-30, RM 159) dengan peringatan bekalan semula Hari Ke-25.',
  },
  {
    code: 'ARCH-04',
    titleEn: 'The Gym Vascularity & Extended-Release Nitric Oxide Specialist',
    titleMs: 'Pengamal Gimnasium & Fokus Aliran Vaskular Nitrik Oksida',
    profileEn: 'Trains 3–5 times weekly or prioritizes peak endothelial nitric oxide vasodilation using L-Arginine HCl, L-Citrulline Malate, Thai Black Ginger (Kunyit Hitam), and Bioperine.',
    profileMs: 'Bersenam 3–5 kali seminggu atau mengutamakan pengembangan vaskular nitrik oksida menggunakan L-Arginine HCl, L-Citrulline Malate, Kunyit Hitam, dan Bioperine.',
    primarySlug: 'magnum-pump-xr',
    secondarySlug: 'grow-xl',
    verdictEn: 'Primary: Magnum Pump XR (30 Black Capsules x 600mg, SKU ONYX-MP-30, RM 159) taken 30–45 minutes before training or evening activity.',
    verdictMs: 'Utama: Magnum Pump XR (30 Kapsul Hitam x 600mg, SKU ONYX-MP-30, RM 159) diambil 30–45 minit sebelum latihan atau aktiviti malam.',
  },
  {
    code: 'ARCH-05',
    titleEn: 'The Frequent Domestic & Regional Flyer (KLIA / Penang / Kuching / KK)',
    titleMs: 'Pengembara Kerap Antara Negeri (KLIA / Pulau Pinang / Kuching / KK)',
    profileEn: 'Constantly crossing timezones or flying between Peninsular Malaysia and Borneo; needs compact tamper-evident packaging and resilience against jet-lag fatigue.',
    profileMs: 'Kerap terbang atas urusan kerja antara Semenanjung dan Sabah/Sarawak; memerlukan botol kedap udara dan ketahanan terhadap kelesuan perjalanan.',
    primarySlug: 'horsemen',
    secondarySlug: 'hammer-of-thor',
    verdictEn: 'Primary: Horsemen 2-Bottle Travel & Home Reserve (RM 318, 40 Capsules total) so one bottle stays in your briefcase and one at home.',
    verdictMs: 'Utama: Pakej 2 Botol Horsemen (RM 318, jumlah 40 Kapsul) supaya satu botol disimpan di dalam beg kerja dan satu botol di rumah.',
  },
  {
    code: 'ARCH-06',
    titleEn: 'The 90-Day Total Physiological Transformation Protocol (40+ Age Bracket)',
    titleMs: 'Protokol Transformasi Fisiologi Lengkap 90 Hari (Umur 40 Tahun Ke Atas)',
    profileEn: 'Adult men aged 40–65 seeking progressive micro-circulatory restoration, sustained morning vitality, and evening confidence without synthetic crashes.',
    profileMs: 'Lelaki dewasa berumur 40–65 tahun yang menginginkan pemulihan aliran mikro secara berperingkat, kecergasan pagi, dan keyakinan malam.',
    primarySlug: 'grow-xl',
    secondarySlug: 'magnum-pump-xr',
    verdictEn: 'Primary: 3-Bottle Vault (RM 477) combining 2 bottles of Grow XL (60-day morning foundation) + 1 bottle of Magnum Pump XR or Horsemen.',
    verdictMs: 'Utama: Pakej Lengkap 3 Botol (RM 477) menggabungkan 2 botol Grow XL (asas pagi 60 hari) + 1 botol Magnum Pump XR atau Horsemen.',
  },
];
/**
 * Renders the 24-Hour Chronobiological Absorption & Pharmacokinetic Timeline Ledger.
 */
function renderChronobiologyTimelineSection(isMs) {
  const windows = [
    {
      time: '07:30 MYT',
      phaseEn: 'Morning Post-Breakfast Vascular & Adaptogenic Foundation',
      phaseMs: 'Asas Vaskular & Adaptogenik Selepas Sarapan Pagi',
      formula: 'Grow XL (30 Capsules × 550mg)',
      slug: 'grow-xl',
      mechanismEn:
        'Taking 1 capsule of Grow XL 20–30 minutes after a protein-rich Malaysian breakfast initiates steady daytime absorption of Extra-Strength Tongkat Ali (140mg), Peruvian Maca (110mg), Brazilian Muira Puama (80mg), and Saw Palmetto liposterolic extract (70mg).',
      mechanismMs:
        'Pengambilan 1 kapsul Grow XL 20–30 minit selepas sarapan berprotein memulakan penyerapan harian sekata bagi Tongkat Ali Kekuatan Ekstra (140mg), Maca Peru (110mg), Muira Puama Brazil (80mg), dan ekstrak Saw Palmetto (70mg).',
    },
    {
      time: '17:30 MYT',
      phaseEn: 'Pre-Gymnasium / Late-Afternoon Nitric Oxide Vasodilation Window',
      phaseMs: 'Waktu Pra-Gimnasium / Sokongan Aliran Nitrik Oksida Petang',
      formula: 'Magnum Pump XR (30 Black Capsules × 600mg)',
      slug: 'magnum-pump-xr',
      mechanismEn:
        'Ingested 30–45 minutes before resistance training with 300ml water, Magnum Pump XR releases 180mg L-Arginine HCl + 140mg L-Citrulline Malate + 65mg Thai Black Ginger (Kunyit Hitam) catalyzed by 15mg Bioperine for dual-phase endothelial nitric oxide flow.',
      mechanismMs:
        'Diambil 30–45 minit sebelum latihan bebanan bersama 300ml air, Magnum Pump XR membebaskan 180mg L-Arginine HCl + 140mg L-Citrulline Malate + 65mg Kunyit Hitam bersama 15mg Bioperine untuk aliran nitrik oksida dwi-fasa.',
    },
    {
      time: '20:00 MYT',
      phaseEn: 'Post-Dinner Vegetarian Saponin & Mineral Recovery Window',
      phaseMs: 'Waktu Selepas Makan Malam (Kapsul Vegetarian Saponin & Zink)',
      formula: 'Hammer of Thor (20 Veg. Capsules × 500mg)',
      slug: 'hammer-of-thor',
      mechanismEn:
        'Taken 30 minutes after dinner, the 100% plant-derived HPMC vegetarian shell dissolves cleanly to deliver 200mg standardized Tribulus Terrestris (60% saponins) and 15mg chelated Zinc Bisglycinate during nocturnal recovery.',
      mechanismMs:
        'Diambil 30 minit selepas makan malam, sarung kapsul vegetarian HPMC berasaskan tumbuhan larut bersih untuk membekalkan 200mg Tribulus Terrestris piawai (60% saponin) dan 15mg Zink Bisglisinat semasa pemulihan malam.',
    },
    {
      time: '21:30 MYT',
      phaseEn: 'Rapid Pre-Evening Readiness & Peak Stamina Reserve Window',
      phaseMs: 'Waktu Kesediaan Tenaga Malam Pantas (45–60 Minit Sebelum Aktiviti)',
      formula: 'Horsemen (20 Capsules × 500mg)',
      slug: 'horsemen',
      mechanismEn:
        'Administered 45–60 minutes prior to evening activity with warm water, Horsemen’s rapid-dissolve 500mg matrix unleashes 100:1 Malaysian Tongkat Ali (150mg), Black Maca (100mg), Epimedium Icariin (80mg), and Korean Red Ginseng (60mg).',
      mechanismMs:
        'Diambil 45–60 minit sebelum aktiviti malam bersama air suam, matriks 500mg larut pantas Horsemen membekalkan Tongkat Ali Malaysia 100:1 (150mg), Maca Hitam (100mg), Epimedium (80mg), dan Ginseng Merah Korea (60mg).',
    },
  ];

  return `
  <section class="cmp-section-stage-alt" id="chronobiology-absorption-protocol">
    <div class="cmp-section-header">
      <div>
        <span class="editorial-kicker">${isMs ? 'KRONOBIOLOGI & PENJADUALAN 24 JAM' : '24-HOUR CHRONOBIOLOGY & INTAKE WINDOWS'}</span>
        <h2 class="cmp-section-title">${isMs ? 'Jadual Penyerapan Fisiologi Mengikut Waktu Harian Malaysia' : 'Chronobiological Absorption Windows Across All 4 Formulations'}</h2>
      </div>
      <p class="cmp-section-desc">
        ${
          isMs
            ? 'Setiap formulasi Onyxmen ditala untuk tingkap metabolik tertentu—sama ada rutin pagi selepas sarapan, pra-senaman petang, atau kesediaan malam 45–60 minit.'
            : 'Every Onyxmen formulation is engineered for a specific metabolic window—whether morning post-breakfast conditioning, pre-workout nitric oxide loading, or 45–60 minute evening readiness.'
        }
      </p>
    </div>
    <div class="cmp-editorial-strip-list">
      ${windows
        .map(
          (w) => `
      <article class="cmp-editorial-strip-item">
        <div class="cmp-strip-index">${esc(w.time)}</div>
        <div class="cmp-strip-main">
          <span class="cmp-wing-kicker">${esc(w.formula)}</span>
          <h3 class="cmp-strip-title">${esc(isMs ? w.phaseMs : w.phaseEn)}</h3>
          <p class="cmp-strip-body">${esc(isMs ? w.mechanismMs : w.mechanismEn)}</p>
        </div>
        <div class="cmp-strip-verdict">
          <span class="cmp-verdict-label">${isMs ? 'TINDAKAN PANTAS (RM 159)' : 'DIRECT RESERVE (RM 159)'}</span>
          <div class="cmp-wing-actions">
            <button type="button" class="cmp-btn-gold" data-open-order-drawer data-product-slug="${esc(w.slug)}" data-order-qty="1">
              ${isMs ? `Tempah ${w.formula.split(' (')[0]} — RM 159` : `Reserve ${w.formula.split(' (')[0]} — RM 159`}
            </button>
            <a class="cmp-btn-outline" href="${isMs ? `/ms/produk/${w.slug}/` : `/products/${w.slug}/`}">
              ${isMs ? 'Spesifikasi Penuh' : 'Full Monograph'}
            </a>
          </div>
        </div>
      </article>`
        )
        .join('\n')}
    </div>
  </section>`;
}

/**
 * Renders the Deep Botanical Active Pharmacology Breakdown for target products.
 */
function renderBotanicalPharmacologyLedger(productList, isMs) {
  return `
  <section class="cmp-section-stage" id="botanical-pharmacology-ledger">
    <div class="cmp-section-header">
      <div>
        <span class="editorial-kicker">${isMs ? 'ANALISIS KOMPOSISI HERBA & ASID AMINO' : 'BOTANICAL & AMINO-ACID PHARMACOLOGY LEDGER'}</span>
        <h2 class="cmp-section-title">${isMs ? 'pecahan Miligram & Piawaian Fitokimia Setiap Kapsul' : 'Milligram-by-Milligram Phytochemical Standardization Ledger'}</h2>
      </div>
      <p class="cmp-section-desc">
        ${
          isMs
            ? 'Semua formulasi Onyxmen menggunakan ekstrak botani piawai berkepekatan tinggi tanpa bahan sintetik tersembunyi. Semak pecahan tepat setiap bahan aktif di bawah.'
            : 'All Onyxmen formulations utilize standardized botanical extracts and pure amino-acid cofactors with zero undisclosed synthetic stimulants. Inspect exact milligram dosages below.'
        }
      </p>
    </div>
    ${productList
      .map((prod) => {
        const pLoc = prod.locales?.[isMs ? 'ms-MY' : 'en-MY'] || prod.locales?.['en-MY'] || {};
        const actives = prod.botanicalActives || [];
        const techSpecs = prod.technicalSpecifications || [];
        return `
    <div style="margin-bottom: 3.75rem; padding-bottom: 2.75rem; border-bottom: 1px solid rgba(212, 175, 55, 0.28);">
      <div style="display:flex; flex-wrap:wrap; justify-content:space-between; align-items:flex-end; gap:1.5rem; margin-bottom:1.5rem;">
        <div>
          <span class="cmp-wing-kicker">SKU: ${esc(prod.sku)} • MPN: ${esc(prod.mpn)} • GTIN-13: ${esc(prod.gtin13)}</span>
          <h3 class="cmp-wing-title">${esc(prod.name)} — ${esc(isMs ? prod.labelTranscription?.subtitleMs : prod.labelTranscription?.subtitleEn)}</h3>
          <p class="cmp-strip-body" style="max-width:52rem;">${esc(pLoc.positioningSummary || '')}</p>
        </div>
        <div class="cmp-wing-actions">
          <button type="button" class="cmp-btn-gold" data-open-order-drawer data-product-slug="${esc(prod.slug)}" data-order-qty="1">
            ${isMs ? `Tempah 1 Botol ${prod.name} (RM 159)` : `Reserve 1 Bottle ${prod.name} (RM 159)`}
          </button>
          <button type="button" class="cmp-btn-outline" data-open-order-drawer data-product-slug="${esc(prod.slug)}" data-order-qty="2">
            ${isMs ? `Pakej 2 Botol (RM 318)` : `2-Bottle Protocol (RM 318)`}
          </button>
        </div>
      </div>
      <div class="cmp-table-scroll">
        <table class="cmp-architectural-table">
          <thead>
            <tr>
              <th>${isMs ? 'Kod Aktif' : 'Active Code'}</th>
              <th>${isMs ? 'Nama Saintifik & Botani' : 'Botanical / Amino Compound'}</th>
              <th>${isMs ? 'Dos / Kapsul' : 'Dose / Capsule'}</th>
              <th>${isMs ? 'Piawaian Ekstrak' : 'Standardization Marker'}</th>
              <th>${isMs ? 'Peranan Fisiologi Utama' : 'Physiological Mechanism'}</th>
            </tr>
          </thead>
          <tbody>
            ${actives
              .map(
                (act) => `
            <tr>
              <td class="cmp-dim-cell">${esc(act.code)}</td>
              <td><strong>${esc(act.scientificName)}</strong><br/><span style="color:var(--text-muted-alabaster);font-size:0.84rem;">${esc(isMs ? act.commonNameMs : act.commonNameEn)}</span></td>
              <td><strong style="color:var(--gold-foil-bright);">${esc(String(act.dosagePerCapsuleMg))} mg</strong></td>
              <td>${esc(act.standardization)}</td>
              <td>${esc(isMs ? act.roleMs : act.roleEn)}</td>
            </tr>`
              )
              .join('\n')}
          </tbody>
        </table>
      </div>
      <div class="cmp-spec-ledger" style="margin-top:1.5rem;">
        ${techSpecs
          .map(
            (spec) => `
        <div class="cmp-spec-row">
          <span class="cmp-spec-key">${esc(isMs ? spec.specMs : spec.specEn)}</span>
          <span class="cmp-spec-val">${esc(isMs ? spec.valueMs : spec.valueEn)}</span>
        </div>`
          )
          .join('\n')}
      </div>
    </div>`;
      })
      .join('\n')}
  </section>`;
}

/**
 * Renders the Extended 12-Dimension Master 4-Formula Comparison Ledger + 20 vs 30 Capsule Economics.
 */
function renderMaster4FormulaMatrixSection(isMs) {
  return `
  <section class="cmp-section-stage-alt" id="complete-4-formula-matrix">
    <div class="cmp-section-header">
      <div>
        <span class="editorial-kicker">${isMs ? 'MATRIKS PERBANDINGAN 12 DIMENSI' : '12-DIMENSION APOTHECARY SELECTION LEDGER'}</span>
        <h2 class="cmp-section-title">${isMs ? 'Perbandingan Bersebelahan: Horsemen vs Hammer of Thor vs Grow XL vs Magnum Pump XR' : 'Side-by-Side Architectural Ledger: All 4 Onyxmen Malaysia Formulations'}</h2>
      </div>
      <p class="cmp-section-desc">
        ${
          isMs
            ? 'Keempat-empat formulasi ditawarkan pada harga rasmi seragam RM 159.00 sebotol (RM 318 untuk 2 botol, RM 477 untuk 3 botol). Bandingkan 20 kapsul berbanding 30 kapsul di bawah.'
            : 'All four formulations share a uniform RM 159.00 single-bottle reserve (RM 318 for 2 bottles, RM 477 for 3 bottles). Compare 20-capsule concentrated reserves against 30-capsule full-month protocols below.'
        }
      </p>
    </div>
    <div class="cmp-table-scroll">
      <table class="cmp-architectural-table">
        <thead>
          <tr>
            <th>${isMs ? 'Dimensi Spesifikasi' : 'Specification Dimension'}</th>
            <th>Horsemen (20 Caps × 500mg)</th>
            <th>Hammer of Thor (20 Veg Caps)</th>
            <th>Grow XL (30 Caps × 550mg)</th>
            <th>Magnum Pump XR (30 Black Caps)</th>
          </tr>
        </thead>
        <tbody>
          ${EXTENDED_4_FORMULA_DIMENSIONS.map(
            (row) => `
          <tr>
            <td class="cmp-dim-cell">
              <span style="display:block;font-size:0.66rem;color:var(--gold-champagne);">${esc(row.code)} • ${esc(isMs ? row.categoryMs : row.categoryEn)}</span>
              ${esc(isMs ? row.dimMs : row.dimEn)}
            </td>
            <td>${esc(isMs ? row.horsemenMs : row.horsemenEn)}</td>
            <td>${esc(isMs ? row.hammerMs : row.hammerEn)}</td>
            <td>${esc(isMs ? row.growMs : row.growEn)}</td>
            <td>${esc(isMs ? row.magnumMs : row.magnumEn)}</td>
          </tr>`
          ).join('\n')}
        </tbody>
      </table>
    </div>
  </section>`;
}

/**
 * Renders the Interactive Physiology & Capsule-Cycle Quiz Recommender + Multi-Bottle Stacking Matrix.
 */
function renderInteractiveSelectorAndArchetypes(isMs) {
  return `
  <section class="cmp-section-stage" id="interactive-formula-selector">
    <div class="cmp-interactive-selector">
      <span class="editorial-kicker">${isMs ? 'DIAGNOSTIK PEMILIHAN INTERAKTIF' : 'INTERACTIVE APOTHECARY DIAGNOSTIC'}</span>
      <h2 class="cmp-section-title">${isMs ? 'Pilih Matlamat Fisiologi Utama Anda untuk Cadangan Tepat' : 'Select Your Primary Physiological Objective for Instant Formula Matching'}</h2>
      <p class="cmp-section-desc" style="margin-top:0.65rem;">
        ${
          isMs
            ? 'Klik mana-mana profil gaya hidup di bawah atau semak 6 senario pengguna Malaysia untuk melihat kombinasi 1 botol (RM 159), 2 botol (RM 318), atau 3 botol (RM 477) yang paling sesuai.'
            : 'Select any physiological priority below or inspect the 6 Malaysian buyer archetypes to identify your optimal 1-bottle (RM 159), 2-bottle (RM 318), or 3-bottle (RM 477) reserve.'
        }
      </p>
      <div class="cmp-quiz-row" role="group" aria-label="${isMs ? 'Pemilih Matlamat Fisiologi' : 'Physiological Goal Selector'}">
        <button type="button" class="cmp-quiz-btn" data-cmp-quiz-select="horsemen" aria-pressed="true" onclick="window.selectOnyxComparisonGoal && window.selectOnyxComparisonGoal('horsemen', this)">
          <span class="cmp-wing-kicker">01 • 20 CAPSULES × 500MG</span>
          <strong style="display:block;font-family:var(--font-display);font-size:1.35rem;margin:0.3rem 0;color:var(--text-silk-ivory);">
            ${isMs ? 'Kesediaan Malam Pantas (45–60 Minit)' : 'Rapid Evening Readiness (45–60 Min)'}
          </strong>
          <span style="font-size:0.84rem;color:var(--text-muted-alabaster);">
            ${isMs ? 'Tongkat Ali 100:1 + Maca Hitam + Epimedium → Horsemen' : '100:1 Tongkat Ali + Black Maca + Epimedium → Horsemen'}
          </span>
        </button>
        <button type="button" class="cmp-quiz-btn" data-cmp-quiz-select="hammer-of-thor" aria-pressed="false" onclick="window.selectOnyxComparisonGoal && window.selectOnyxComparisonGoal('hammer-of-thor', this)">
          <span class="cmp-wing-kicker">02 • 20 VEG. CAPSULES (HPMC)</span>
          <strong style="display:block;font-family:var(--font-display);font-size:1.35rem;margin:0.3rem 0;color:var(--text-silk-ivory);">
            ${isMs ? 'Kapsul 100% Vegetarian & Saponin Tribulus' : '100% Vegetarian HPMC & Tribulus + Zinc'}
          </strong>
          <span style="font-size:0.84rem;color:var(--text-muted-alabaster);">
            ${isMs ? '200mg Tribulus (60% Saponin) + Zink → Hammer of Thor' : '200mg Tribulus (60% Saponins) + Zinc → Hammer of Thor'}
          </span>
        </button>
        <button type="button" class="cmp-quiz-btn" data-cmp-quiz-select="grow-xl" aria-pressed="false" onclick="window.selectOnyxComparisonGoal && window.selectOnyxComparisonGoal('grow-xl', this)">
          <span class="cmp-wing-kicker">03 • 30 CAPSULES × 550MG</span>
          <strong style="display:block;font-family:var(--font-display);font-size:1.35rem;margin:0.3rem 0;color:var(--text-silk-ivory);">
            ${isMs ? 'Rutin Pagi Harian 30 Hari & Kesejahteraan' : '30-Day Morning Baseline & Wellness'}
          </strong>
          <span style="font-size:0.84rem;color:var(--text-muted-alabaster);">
            ${isMs ? 'Tongkat Ali Ekstra + Muira Puama + Saw Palmetto → Grow XL' : 'Extra Tongkat Ali + Muira Puama + Saw Palmetto → Grow XL'}
          </span>
        </button>
        <button type="button" class="cmp-quiz-btn" data-cmp-quiz-select="magnum-pump-xr" aria-pressed="false" onclick="window.selectOnyxComparisonGoal && window.selectOnyxComparisonGoal('magnum-pump-xr', this)">
          <span class="cmp-wing-kicker">04 • 30 BLACK CAPSULES × 600MG</span>
          <strong style="display:block;font-family:var(--font-display);font-size:1.35rem;margin:0.3rem 0;color:var(--text-silk-ivory);">
            ${isMs ? 'Aliran Vaskular Nitrik Oksida & Gimnasium' : 'Nitric Oxide Vascular Pump & Gym Output'}
          </strong>
          <span style="font-size:0.84rem;color:var(--text-muted-alabaster);">
            ${isMs ? '320mg L-Arginine/Citrulline + Kunyit Hitam → Magnum Pump XR' : '320mg L-Arginine/Citrulline + Black Ginger → Magnum Pump XR'}
          </span>
        </button>
      </div>
      <div class="cmp-quiz-result-stage" id="cmp-quiz-live-output">
        <div>
          <span class="cmp-verdict-label" id="cmp-quiz-rec-kicker">${isMs ? 'CADANGAN UTAMA APOTEKARI' : 'RECOMMENDED APOTHECARY PROTOCOL'}</span>
          <h3 class="cmp-wing-title" id="cmp-quiz-rec-title" style="font-size:2rem;">Horsemen — 20 Capsules × 500mg (RM 159.00)</h3>
          <p class="cmp-strip-body" id="cmp-quiz-rec-desc" style="max-width:46rem;">
            ${
              isMs
                ? 'Direka untuk kesediaan malam 45–60 minit dengan 150mg Tongkat Ali 100:1, 100mg Maca Hitam, dan 80mg Epimedium. Peringatan bekalan semula automatik pada Hari Ke-18.'
                : 'Engineered for 45–60 minute pre-evening readiness with 150mg 100:1 Malaysian Tongkat Ali, 100mg Black Maca, and 80mg Epimedium. Includes Day-18 automated refill check-in.'
            }
          </p>
        </div>
        <div class="cmp-wing-actions">
          <button type="button" class="cmp-btn-gold" id="cmp-quiz-order-btn" data-open-order-drawer data-product-slug="horsemen" data-order-qty="1">
            ${isMs ? 'Tempah 1 Botol (RM 159)' : 'Reserve 1 Bottle (RM 159)'}
          </button>
          <button type="button" class="cmp-btn-outline" id="cmp-quiz-order-2btn" data-open-order-drawer data-product-slug="horsemen" data-order-qty="2">
            ${isMs ? 'Tempah 2 Botol (RM 318)' : 'Reserve 2 Bottles (RM 318)'}
          </button>
        </div>
      </div>
    </div>

    <div class="cmp-section-header" style="margin-top:4.5rem;">
      <div>
        <span class="editorial-kicker">${isMs ? '6 PROFIL PENGGUNA & CADANGAN GABUNGAN' : '6 BUYER ARCHETYPES & MULTI-BOTTLE STACKING'}</span>
        <h2 class="cmp-section-title">${isMs ? 'Panduan Pemilihan Mengikut Gaya Hidup & Umur Lelaki Malaysia' : 'Clinical Lifestyle Scenarios & Dual-Formula Stacking Protocols'}</h2>
      </div>
      <p class="cmp-section-desc">
        ${
          isMs
            ? 'Anda boleh menggabungkan dua formulasi berbeza dalam pakej 2 botol (RM 318) atau 3 botol (RM 477)—contohnya Grow XL pada waktu pagi dan Horsemen atau Magnum Pump XR pada waktu malam.'
            : 'You can mix two distinct formulations within any 2-bottle (RM 318) or 3-bottle (RM 477) reserve—such as pairing Grow XL in the morning with Horsemen or Magnum Pump XR in the evening.'
        }
      </p>
    </div>
    <div class="cmp-editorial-strip-list">
      ${BUYER_ARCHETYPE_SCENARIOS.map(
        (arch) => `
      <article class="cmp-editorial-strip-item">
        <div class="cmp-strip-index">${esc(arch.code)}</div>
        <div class="cmp-strip-main">
          <h3 class="cmp-strip-title">${esc(isMs ? arch.titleMs : arch.titleEn)}</h3>
          <p class="cmp-strip-body">${esc(isMs ? arch.profileMs : arch.profileEn)}</p>
        </div>
        <div class="cmp-strip-verdict">
          <span class="cmp-verdict-label">${isMs ? 'KEPUTUSAN PAKAR' : 'APOTHECARY VERDICT'}</span>
          <p class="cmp-verdict-copy" style="margin-bottom:1rem;">${esc(isMs ? arch.verdictMs : arch.verdictEn)}</p>
          <div class="cmp-wing-actions">
            <button type="button" class="cmp-btn-gold" data-open-order-drawer data-product-slug="${esc(arch.primarySlug)}" data-order-qty="1">
              ${isMs ? 'Tempah 1 Botol — RM 159' : 'Reserve 1 Bottle — RM 159'}
            </button>
            <button type="button" class="cmp-btn-outline" data-open-order-drawer data-product-slug="${esc(arch.primarySlug)}" data-order-qty="2">
              ${isMs ? 'Pakej Dwi-Botol — RM 318' : '2-Bottle Stack — RM 318'}
            </button>
          </div>
        </div>
      </article>`
      ).join('\n')}
    </div>
    <script>
      window.selectOnyxComparisonGoal = function(slug, btnEl) {
        var map = {
          'horsemen': {
            title: ${JSON.stringify(isMs ? 'Horsemen — 20 Kapsul × 500mg (RM 159.00)' : 'Horsemen — 20 Capsules × 500mg (RM 159.00)')},
            desc: ${JSON.stringify(isMs ? 'Direka untuk kesediaan malam 45–60 minit dengan 150mg Tongkat Ali 100:1, 100mg Maca Hitam, dan 80mg Epimedium. Peringatan bekalan semula Hari Ke-18.' : 'Engineered for 45–60 minute pre-evening readiness with 150mg 100:1 Malaysian Tongkat Ali, 100mg Black Maca, and 80mg Epimedium. Includes Day-18 refill check-in.')}
          },
          'hammer-of-thor': {
            title: ${JSON.stringify(isMs ? 'Hammer of Thor — 20 Kapsul Vegetarian HPMC (RM 159.00)' : 'Hammer of Thor — 20 Vegetarian HPMC Capsules (RM 159.00)')},
            desc: ${JSON.stringify(isMs ? 'Sarung kapsul tumbuhan HPMC 100% vegetarian dengan 200mg Tribulus Terrestris (60% saponin) dan 15mg Zink Bisglisinat untuk kekuatan fizikal dan penghadaman bersih.' : '100% plant-derived HPMC vegetarian shells with 200mg Tribulus Terrestris (60% saponins) and 15mg Zinc Bisglycinate for strength conditioning and clean digestion.')}
          },
          'grow-xl': {
            title: ${JSON.stringify(isMs ? 'Grow XL — 30 Kapsul × 550mg Bekalan Sebulan (RM 159.00)' : 'Grow XL — 30 Capsules × 550mg Full-Month Protocol (RM 159.00)')},
            desc: ${JSON.stringify(isMs ? 'Rutin 1 kapsul selepas sarapan pagi selama 30 hari penuh dengan Tongkat Ali Ekstra, Maca, Muira Puama, dan Saw Palmetto. Peringatan Hari Ke-25.' : '1-capsule-after-breakfast 30-day conditioning habit combining Extra-Strength Tongkat Ali, Maca, Muira Puama, and Saw Palmetto. Includes Day-25 refill reminder.')}
          },
          'magnum-pump-xr': {
            title: ${JSON.stringify(isMs ? 'Magnum Pump XR — 30 Kapsul Hitam × 600mg (RM 159.00)' : 'Magnum Pump XR — 30 Black Capsules × 600mg (RM 159.00)')},
            desc: ${JSON.stringify(isMs ? '320mg gabungan L-Arginine HCl + L-Citrulline Malate bersama Kunyit Hitam dan Bioperine dalam 30 kapsul hitam pelepasan lanjutan untuk aliran nitrik oksida.' : '320mg combined L-Arginine HCl + L-Citrulline Malate with Thai Black Ginger and Bioperine in 30 jet-black XR capsules for peak nitric oxide vascular flow.')}
          }
        };
        var buttons = document.querySelectorAll('[data-cmp-quiz-select]');
        for (var i = 0; i < buttons.length; i++) {
          buttons[i].setAttribute('aria-pressed', buttons[i] === btnEl ? 'true' : 'false');
        }
        var info = map[slug] || map['horsemen'];
        var tEl = document.getElementById('cmp-quiz-rec-title');
        var dEl = document.getElementById('cmp-quiz-rec-desc');
        var b1 = document.getElementById('cmp-quiz-order-btn');
        var b2 = document.getElementById('cmp-quiz-order-2btn');
        if (tEl) tEl.textContent = info.title;
        if (dEl) dEl.textContent = info.desc;
        if (b1) b1.setAttribute('data-product-slug', slug);
        if (b2) b2.setAttribute('data-product-slug', slug);
      };
    </script>
  </section>`;
}

/**
 * Renders the 16-State Malaysia Discreet Logistics & Cross-Link Navigation Ledger.
 */
function renderMalaysiaLogisticsAndCrossLinks(isMs) {
  const statesList = malaysiaStatesData?.states || [];
  return `
  <section class="cmp-section-stage-alt" id="malaysia-16-state-discreet-dispatch">
    <div class="cmp-section-header">
      <div>
        <span class="editorial-kicker">${isMs ? 'LOGISTIK RAHSIA 16 NEGERI MALAYSIA' : '16-STATE MALAYSIA DISCREET DISPATCH LEDGER'}</span>
        <h2 class="cmp-section-title">${isMs ? 'Penghantaran Bungkusan Tanpa Nama Produk ke Seluruh Semenanjung, Sabah & Sarawak' : '100% Plain Unmarked Parcel Delivery Across Peninsular Malaysia, Sabah & Sarawak'}</h2>
      </div>
      <p class="cmp-section-desc">
        ${
          isMs
            ? 'Semua pesanan 1 botol (RM 159), 2 botol (RM 318), dan 3 botol (RM 477) dibungkus dalam kotak legap tanpa sebarang logo atau perkataan suplemen lelaki pada slip kurier.'
            : 'Every 1-bottle (RM 159), 2-bottle (RM 318), and 3-bottle (RM 477) order ships inside a double-sealed opaque mailer with neutral sender billing ("OM Wellness Fulfillment PLT") and zero supplement labels.'
        }
      </p>
    </div>
    <div class="cmp-table-scroll">
      <table class="cmp-architectural-table">
        <thead>
          <tr>
            <th>${isMs ? 'Negeri / Wilayah' : 'State / Federal Territory'}</th>
            <th>${isMs ? 'Bandar Utama Diliputi' : 'Primary Cities Covered'}</th>
            <th>${isMs ? 'Tempoh Penghantaran Rahsia' : 'Discreet Transit Window'}</th>
            <th>${isMs ? 'Kaedah Bayaran' : 'Payment Channels'}</th>
            <th>${isMs ? 'Hab Negeri' : 'Regional Hub'}</th>
          </tr>
        </thead>
        <tbody>
          ${statesList
            .map(
              (st) => `
          <tr>
            <td class="cmp-dim-cell">${esc(isMs ? st.nameMs || st.nameEn : st.nameEn)}</td>
            <td>${esc((st.majorCities || []).slice(0, 5).join(', '))}</td>
            <td>${esc(isMs ? st.deliveryTimelineMs || '1–3 Hari Bekerja' : st.deliveryTimelineEn || '1–3 Business Days')}</td>
            <td>FPX, DuitNow QR, Touch 'n Go, GrabPay, COD</td>
            <td><a href="${esc(isMs ? st.routes?.msPath || `/ms/penghantaran-malaysia/${st.slug}/` : st.routes?.enPath || `/malaysia-delivery/${st.slug}/`)}" style="color:var(--gold-champagne);text-decoration:underline;">${isMs ? 'Lihat Hab Negeri' : 'View State Hub'}</a></td>
          </tr>`
            )
            .join('\n')}
        </tbody>
      </table>
    </div>
  </section>`;
}

/**
 * Builds a complete Head-to-Head or Master 4-Formula Comparison Page HTML document (>= 2,400+ lines).
 */
function buildComparisonPageHtml(config) {
  const {
    lang,
    canonicalPath,
    alternatePathEn,
    alternatePathMs,
    mode, // 'duel' or 'matrix'
    duelObj,
    pageTitle,
    pageDescription,
    headline,
    subheadline,
    executiveVerdict,
    primaryProductSlug,
    secondaryProductSlug,
  } = config;

  const isMs = lang === 'ms-MY';
  const leftProd = productsById[primaryProductSlug || 'horsemen'] || allProducts[0];
  const rightProd = productsById[secondaryProductSlug || 'hammer-of-thor'] || allProducts[1];

  const targetProductsForLedger =
    mode === 'duel' ? [leftProd, rightProd, ...allProducts.filter((p) => p.id !== leftProd.id && p.id !== rightProd.id)] : allProducts;

  const combinedFaqs = [
    ...(comparisonsData.fullApothecaryMatrix?.matrixFaqs || []),
    ...(leftProd.faqs || []).slice(0, 4),
    ...(rightProd.faqs || []).slice(0, 4),
  ];

  const breadcrumbs = [
    {
      name: isMs ? 'Utama Onyxmen Malaysia' : 'Onyxmen Malaysia Home',
      url: isMs ? 'https://www.onyxmen.my/ms/' : 'https://www.onyxmen.my/',
    },
    {
      name: isMs ? 'Matriks Perbandingan' : 'Comparison Matrix',
      url: isMs ? 'https://www.onyxmen.my/ms/perbandingan/' : 'https://www.onyxmen.my/compare/',
    },
    {
      name: headline,
      url: `https://www.onyxmen.my${canonicalPath}`,
    },
  ];

  const schemaGraphJson = buildFullPageGraph({
    pageType: 'comparison',
    lang,
    pageUrl: `https://www.onyxmen.my${canonicalPath}`,
    title: pageTitle,
    description: pageDescription,
    allProducts,
    breadcrumbs,
    faqs: combinedFaqs,
  });

  const duelRows = duelObj?.comparisonRows || [];
  const duelScenarios = duelObj?.decisionScenarios || [];

  const bodyContent = `
  <!-- PARADIGM A — 100VW X 100VH FULL-BLEED CINEMA COMPARISON HERO -->
  <section class="cmp-cinema-hero" aria-labelledby="cmp-page-h1">
    <nav class="cmp-breadcrumb-strip" aria-label="Breadcrumb">
      <a href="${isMs ? '/ms/' : '/'}">${isMs ? 'UTAMA ONYXMEN' : 'ONYXMEN VAULT'}</a>
      <span>/</span>
      <a href="${isMs ? '/ms/perbandingan/' : '/compare/'}">${isMs ? 'PERBANDINGAN FORMULASI' : 'COMPARISON MATRIX'}</a>
      <span>/</span>
      <span>${esc(headline)}</span>
    </nav>

    <div class="cmp-hero-editorial-grid">
      <div class="cmp-hero-primary-col">
        <span class="editorial-kicker">${
          mode === 'duel'
            ? isMs
              ? `PERBANDINGAN BERSEBELAHAN • ${leftProd.name.toUpperCase()} VS ${rightProd.name.toUpperCase()}`
              : `HEAD-TO-HEAD APOTHECARY DUEL • ${leftProd.name.toUpperCase()} VS ${rightProd.name.toUpperCase()}`
            : isMs
            ? 'MATRIKS PEMILIHAN LENGKAP 4 FORMULASI • 20 KAPSUL VS 30 KAPSUL'
            : 'COMPLETE 4-FORMULATION APOTHECARY MATRIX • 20 CAPSULES VS 30 CAPSULES'
        }</span>
        <h1 id="cmp-page-h1" class="cmp-hero-title">${esc(headline)}</h1>
        <p class="cmp-hero-lead hero-subtitle">${esc(subheadline)}</p>
        <div class="cmp-verdict-banner comparison-summary">
          <span class="cmp-verdict-label">${isMs ? 'RINGKASAN KEPUTUSAN EKSEKUTIF (HARGA SERAGAM RM 159)' : 'EXECUTIVE APOTHECARY VERDICT (UNIFORM RM 159 RESERVE)'}</span>
          <p class="cmp-verdict-copy">${esc(executiveVerdict)}</p>
        </div>
      </div>

      <aside class="cmp-hero-aside-col" aria-label="${isMs ? 'Jaminan Harga Seragam RM 159' : 'Uniform RM 159 Pricing Charter'}">
        <span class="cmp-verdict-label">${isMs ? 'PIAGAM HARGA SERAGAM MALAYSIA' : 'UNIFORM MALAYSIA PRICING CHARTER'}</span>
        <p class="cmp-verdict-copy" style="margin-bottom:1.25rem;">
          ${esc(isMs ? comparisonsData.uniformPricing.rationaleMs : comparisonsData.uniformPricing.rationaleEn)}
        </p>
        <div class="cmp-spec-ledger">
          <div class="cmp-spec-row">
            <span class="cmp-spec-key">${isMs ? '1 Botol (Kitaran Permulaan)' : '1 Bottle (Single Reserve)'}</span>
            <span class="cmp-spec-val" style="color:var(--gold-foil-bright);font-weight:600;">RM 159.00 MYR</span>
          </div>
          <div class="cmp-spec-row">
            <span class="cmp-spec-key">${isMs ? '2 Botol (Boleh Campur Produk)' : '2 Bottles (Mix-and-Match Allowed)'}</span>
            <span class="cmp-spec-val" style="color:var(--gold-foil-bright);font-weight:600;">RM 318.00 MYR</span>
          </div>
          <div class="cmp-spec-row">
            <span class="cmp-spec-key">${isMs ? '3 Botol (Pakej Lengkap VIP)' : '3 Bottles (Complete VIP Vault)'}</span>
            <span class="cmp-spec-val" style="color:var(--gold-foil-bright);font-weight:600;">RM 477.00 MYR</span>
          </div>
        </div>
        <div class="cmp-wing-actions">
          <button type="button" class="cmp-btn-gold" data-open-order-drawer data-product-slug="${esc(leftProd.slug)}" data-order-qty="1">
            ${isMs ? `Tempah ${leftProd.name} — RM 159` : `Reserve ${leftProd.name} — RM 159`}
          </button>
          <button type="button" class="cmp-btn-outline" data-open-order-drawer data-product-slug="${esc(rightProd.slug)}" data-order-qty="1">
            ${isMs ? `Tempah ${rightProd.name} — RM 159` : `Reserve ${rightProd.name} — RM 159`}
          </button>
        </div>
      </aside>
    </div>

    <div class="cmp-hero-telemetry-bar">
      <div class="cmp-telemetry-node">
        <span class="cmp-telemetry-val">RM 159.00</span>
        <span class="cmp-telemetry-lbl">${isMs ? 'Harga Rasmi Sebotol (Semua 4 Produk)' : 'Uniform Single-Bottle Reserve (All 4 Formulas)'}</span>
      </div>
      <div class="cmp-telemetry-node">
        <span class="cmp-telemetry-val">20 vs 30</span>
        <span class="cmp-telemetry-lbl">${isMs ? 'Kapsul Padat (Hari-18) vs Sebulan Penuh (Hari-25)' : 'Concentrated 20-Cap (Day-18) vs 30-Cap (Day-25)'}</span>
      </div>
      <div class="cmp-telemetry-node">
        <span class="cmp-telemetry-val">100% HPMC / XR</span>
        <span class="cmp-telemetry-lbl">${isMs ? 'Kapsul Vegetarian & Kapsul Hitam Pelepasan Lanjutan' : 'Plant Vegetarian & Jet-Black Extended-Release Options'}</span>
      </div>
      <div class="cmp-telemetry-node">
        <span class="cmp-telemetry-val">16 ${isMs ? 'Negeri' : 'States'}</span>
        <span class="cmp-telemetry-lbl">${isMs ? 'Penghantaran Bungkusan Rahsia Tanpa Nama' : '100% Unmarked Discreet Courier Across Malaysia'}</span>
      </div>
    </div>
  </section>

  <!-- PARADIGM D — 50VW / 50VW PINNED SPLIT-SCREEN DUEL STAGE -->
  <section class="cmp-duel-split-stage" id="split-screen-bottle-duel" aria-label="${isMs ? 'Perbandingan Botol Bersebelahan' : 'Side-by-Side Bottle Architecture Duel'}">
    <div class="cmp-duel-wing cmp-duel-wing-left">
      <div>
        <span class="cmp-wing-kicker">WING I • SKU: ${esc(leftProd.sku)} • ${esc(String(leftProd.labelTranscription?.capsuleCount))} CAPSULES</span>
        <h2 class="cmp-wing-title">${esc(leftProd.name)}</h2>
        <p class="cmp-wing-subtitle">${esc(isMs ? leftProd.labelTranscription?.subtitleMs : leftProd.labelTranscription?.subtitleEn)}</p>
      </div>
      <div class="cmp-bottle-spotlight">
        <img src="${esc(leftProd.images?.cutoutWebp || '/assets/products/horsemen-cutout.webp')}" alt="${esc(isMs ? leftProd.images?.altMs : leftProd.images?.altEn)}" width="420" height="520" loading="eager" />
      </div>
      <div class="cmp-spec-ledger">
        <div class="cmp-spec-row">
          <span class="cmp-spec-key">${isMs ? 'Bilangan & Berat Kapsul' : 'Capsule Count & Weight'}</span>
          <span class="cmp-spec-val">${esc(String(leftProd.labelTranscription?.capsuleCount))} × ${esc(String(leftProd.labelTranscription?.capsuleWeightMg))}mg (${esc(String(leftProd.labelTranscription?.netWeightGrams))}g)</span>
        </div>
        <div class="cmp-spec-row">
          <span class="cmp-spec-key">${isMs ? 'Jenis Sarung Kapsul' : 'Capsule Shell Format'}</span>
          <span class="cmp-spec-val">${esc(isMs ? leftProd.labelTranscription?.capsuleFormatMs : leftProd.labelTranscription?.capsuleFormatEn)}</span>
        </div>
        <div class="cmp-spec-row">
          <span class="cmp-spec-key">${isMs ? 'Peringatan Bekalan Semula' : 'Automated Refill Trigger'}</span>
          <span class="cmp-spec-val">${isMs ? `Hari Ke-${leftProd.refillProtocol?.refillReminderDay}` : `Day-${leftProd.refillProtocol?.refillReminderDay} Concierge Alert`}</span>
        </div>
        <div class="cmp-spec-row">
          <span class="cmp-spec-key">${isMs ? 'Harga Rasmi Malaysia' : 'Official Malaysia Pricing'}</span>
          <span class="cmp-spec-val" style="color:var(--gold-foil-bright);">1B: RM 159 | 2B: RM 318 | 3B: RM 477</span>
        </div>
      </div>
      <div class="cmp-wing-actions">
        <button type="button" class="cmp-btn-gold" data-open-order-drawer data-product-slug="${esc(leftProd.slug)}" data-order-qty="1">
          ${isMs ? `Tempah ${leftProd.name} (RM 159)` : `Reserve ${leftProd.name} (RM 159)`}
        </button>
        <a class="cmp-btn-outline" href="${esc(isMs ? leftProd.routes?.msPath : leftProd.routes?.enPath)}">
          ${isMs ? `Lihat Halaman ${leftProd.name}` : `Explore ${leftProd.name} Vault`}
        </a>
      </div>
    </div>

    <div class="cmp-duel-wing cmp-duel-wing-right">
      <div>
        <span class="cmp-wing-kicker">WING II • SKU: ${esc(rightProd.sku)} • ${esc(String(rightProd.labelTranscription?.capsuleCount))} CAPSULES</span>
        <h2 class="cmp-wing-title">${esc(rightProd.name)}</h2>
        <p class="cmp-wing-subtitle">${esc(isMs ? rightProd.labelTranscription?.subtitleMs : rightProd.labelTranscription?.subtitleEn)}</p>
      </div>
      <div class="cmp-bottle-spotlight">
        <img src="${esc(rightProd.images?.cutoutWebp || '/assets/products/hammer-of-thor-cutout.webp')}" alt="${esc(isMs ? rightProd.images?.altMs : rightProd.images?.altEn)}" width="420" height="520" loading="eager" />
      </div>
      <div class="cmp-spec-ledger">
        <div class="cmp-spec-row">
          <span class="cmp-spec-key">${isMs ? 'Bilangan & Berat Kapsul' : 'Capsule Count & Weight'}</span>
          <span class="cmp-spec-val">${esc(String(rightProd.labelTranscription?.capsuleCount))} × ${esc(String(rightProd.labelTranscription?.capsuleWeightMg))}mg (${esc(String(rightProd.labelTranscription?.netWeightGrams))}g)</span>
        </div>
        <div class="cmp-spec-row">
          <span class="cmp-spec-key">${isMs ? 'Jenis Sarung Kapsul' : 'Capsule Shell Format'}</span>
          <span class="cmp-spec-val">${esc(isMs ? rightProd.labelTranscription?.capsuleFormatMs : rightProd.labelTranscription?.capsuleFormatEn)}</span>
        </div>
        <div class="cmp-spec-row">
          <span class="cmp-spec-key">${isMs ? 'Peringatan Bekalan Semula' : 'Automated Refill Trigger'}</span>
          <span class="cmp-spec-val">${isMs ? `Hari Ke-${rightProd.refillProtocol?.refillReminderDay}` : `Day-${rightProd.refillProtocol?.refillReminderDay} Concierge Alert`}</span>
        </div>
        <div class="cmp-spec-row">
          <span class="cmp-spec-key">${isMs ? 'Harga Rasmi Malaysia' : 'Official Malaysia Pricing'}</span>
          <span class="cmp-spec-val" style="color:var(--gold-foil-bright);">1B: RM 159 | 2B: RM 318 | 3B: RM 477</span>
        </div>
      </div>
      <div class="cmp-wing-actions">
        <button type="button" class="cmp-btn-gold" data-open-order-drawer data-product-slug="${esc(rightProd.slug)}" data-order-qty="1">
          ${isMs ? `Tempah ${rightProd.name} (RM 159)` : `Reserve ${rightProd.name} (RM 159)`}
        </button>
        <a class="cmp-btn-outline" href="${esc(isMs ? rightProd.routes?.msPath : rightProd.routes?.enPath)}">
          ${isMs ? `Lihat Halaman ${rightProd.name}` : `Explore ${rightProd.name} Vault`}
        </a>
      </div>
    </div>
  </section>

  ${
    duelRows.length > 0
      ? `
  <!-- DIRECT HEAD-TO-HEAD SPECIFICATION TABLE -->
  <section class="cmp-section-stage" id="head-to-head-specification-ledger">
    <div class="cmp-section-header">
      <div>
        <span class="editorial-kicker">${isMs ? 'JADUAL PERBANDINGAN TERUS' : 'DIRECT HEAD-TO-HEAD SPECIFICATION LEDGER'}</span>
        <h2 class="cmp-section-title">${esc(leftProd.name)} vs ${esc(rightProd.name)} — ${isMs ? 'Perbezaan Utama' : 'Dimension-by-Dimension Audit'}</h2>
      </div>
      <p class="cmp-section-desc">
        ${
          isMs
            ? `Bandingkan spesifikasi rasmi pada label botol, bahan sarung kapsul, komposisi herba utama, dan masa pengambilan antara ${leftProd.name} dan ${rightProd.name}.`
            : `Audit the exact bottle label transcriptions, capsule shell materials, lead botanical drivers, and optimal intake windows between ${leftProd.name} and ${rightProd.name}.`
        }
      </p>
    </div>
    <div class="cmp-table-scroll">
      <table class="cmp-architectural-table">
        <thead>
          <tr>
            <th>${isMs ? 'Dimensi Perbandingan' : 'Comparison Dimension'}</th>
            <th>${esc(leftProd.name)} (${esc(leftProd.sku)})</th>
            <th>${esc(rightProd.name)} (${esc(rightProd.sku)})</th>
          </tr>
        </thead>
        <tbody>
          ${duelRows
            .map(
              (r) => `
          <tr>
            <td class="cmp-dim-cell">${esc(isMs ? r.dimensionMs : r.dimensionEn)}</td>
            <td>${esc(isMs ? r.leftValueMs : r.leftValueEn)}</td>
            <td>${esc(isMs ? r.rightValueMs : r.rightValueEn)}</td>
          </tr>`
            )
            .join('\n')}
        </tbody>
      </table>
    </div>
    <div class="cmp-editorial-strip-list" style="margin-top:2.5rem;">
      ${duelScenarios
        .map(
          (sc, idx) => `
      <article class="cmp-editorial-strip-item">
        <div class="cmp-strip-index">0${idx + 1}</div>
        <div class="cmp-strip-main">
          <span class="cmp-wing-kicker">${isMs ? 'SENARIO PEMILIHAN' : 'DECISION SCENARIO'}</span>
          <h3 class="cmp-strip-title">${esc(isMs ? sc.scenarioMs : sc.scenarioEn)}</h3>
          <p class="cmp-strip-body">${esc(isMs ? sc.reasonMs : sc.reasonEn)}</p>
        </div>
        <div class="cmp-strip-verdict">
          <span class="cmp-verdict-label">${isMs ? 'PILIHAN DISYORKAN' : 'RECOMMENDED FORMULA'}</span>
          <div class="cmp-wing-actions">
            <button type="button" class="cmp-btn-gold" data-open-order-drawer data-product-slug="${esc(sc.recommendedProductId)}" data-order-qty="1">
              ${isMs ? `Tempah Sekarang — RM 159` : `Reserve Formula — RM 159`}
            </button>
          </div>
        </div>
      </article>`
        )
        .join('\n')}
    </div>
  </section>`
      : ''
  }

  ${renderMaster4FormulaMatrixSection(isMs)}
  ${renderBotanicalPharmacologyLedger(targetProductsForLedger, isMs)}
  ${renderChronobiologyTimelineSection(isMs)}
  ${renderInteractiveSelectorAndArchetypes(isMs)}
  ${renderMalaysiaLogisticsAndCrossLinks(isMs)}

  <!-- FAQ & COMPARISON NAVIGATION LEDGER -->
  <section class="cmp-section-stage" id="comparison-faq-vault">
    <div class="cmp-section-header">
      <div>
        <span class="editorial-kicker">${isMs ? 'SOALAN LAZIM PERBANDINGAN' : 'APOTHECARY COMPARISON FAQ VAULT'}</span>
        <h2 class="cmp-section-title">${isMs ? 'Jawapan Pakar Mengenai 20 vs 30 Kapsul & Gabungan Botol' : 'Frequently Asked Questions: 20 vs 30 Capsules & Formula Stacking'}</h2>
      </div>
      <div class="cmp-wing-actions">
        <a class="cmp-btn-outline" href="${isMs ? '/ms/perbandingan/' : '/compare/'}">${isMs ? 'Hab Perbandingan Utama' : 'Master Comparison Hub'}</a>
        <a class="cmp-btn-outline" href="${isMs ? '/ms/perbandingan/horsemen-vs-hammer-of-thor/' : '/compare/horsemen-vs-hammer-of-thor/'}">Horsemen vs Hammer of Thor</a>
        <a class="cmp-btn-outline" href="${isMs ? '/ms/perbandingan/grow-xl-vs-magnum-pump-xr/' : '/compare/grow-xl-vs-magnum-pump-xr/'}">Grow XL vs Magnum Pump XR</a>
        <a class="cmp-btn-outline" href="${isMs ? '/ms/perbandingan/semua-4-formula/' : '/compare/all-4-formulas/'}">${isMs ? 'Semua 4 Formula (20 vs 30)' : 'All 4 Formulas (20 vs 30)'}</a>
      </div>
    </div>
    <div>
      ${combinedFaqs
        .map(
          (faq, idx) => `
      <details class="cmp-faq-item" ${idx < 3 ? 'open' : ''}>
        <summary>
          <span>${esc(isMs ? faq.qMs || faq.questionMs : faq.qEn || faq.questionEn)}</span>
          <span style="color:var(--gold-champagne);font-family:var(--font-technical);font-size:0.85rem;">+</span>
        </summary>
        <div class="cmp-faq-answer">
          <p>${esc(isMs ? faq.aMs || faq.answerMs : faq.aEn || faq.answerEn)}</p>
        </div>
      </details>`
        )
        .join('\n')}
    </div>
  </section>
  `;

  return renderLuxuryShell({
    lang,
    title: pageTitle,
    description: pageDescription,
    canonicalPath,
    alternatePathEn,
    alternatePathMs,
    ogImage: leftProd.images?.stageWebp || '/assets/products/onyxman-lineup-hero.webp',
    schemaGraphJson,
    bodyContent,
    activeNav: 'compare',
    productSlug: leftProd.slug,
    defaultQty: 1,
    includeSealStrip: true,
    extraHeadHtml: COMPARISON_ARCHITECTURAL_CSS,
  });
}

/**
 * Writes an HTML file and returns its path and line count.
 */
function writeComparisonFile(relPublicPath, htmlContent) {
  const fullPath = path.resolve(PUBLIC_DIR, relPublicPath);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, htmlContent, 'utf8');
  const lines = htmlContent.split('\n').length;
  return { relPublicPath: `public/${relPublicPath.replace(/\\/g, '/')}`, fullPath, lines };
}

export function buildAllComparisonPages() {
  const duel20 = comparisonsData.headToHeadComparisons.find((c) => c.id === 'horsemen-vs-hammer-of-thor');
  const duel30 = comparisonsData.headToHeadComparisons.find((c) => c.id === 'grow-xl-vs-magnum-pump-xr');
  const matrix4 = comparisonsData.fullApothecaryMatrix;

  const jobs = [
    // 1. EN Master Comparison Hub
    {
      lang: 'en-MY',
      canonicalPath: '/compare/',
      alternatePathEn: '/compare/',
      alternatePathMs: '/ms/perbandingan/',
      mode: 'matrix',
      duelObj: duel20,
      pageTitle: matrix4.locales['en-MY'].seoTitle,
      pageDescription: matrix4.locales['en-MY'].metaDescription,
      headline: matrix4.locales['en-MY'].headline,
      subheadline: matrix4.locales['en-MY'].subheadline,
      executiveVerdict: comparisonsData.uniformPricing.rationaleEn,
      primaryProductSlug: 'horsemen',
      secondaryProductSlug: 'magnum-pump-xr',
      outputs: ['compare/index.html'],
    },
    // 2. EN Horsemen vs Hammer of Thor (MS-115 & MS-116)
    {
      lang: 'en-MY',
      canonicalPath: '/compare/horsemen-vs-hammer-of-thor/',
      alternatePathEn: '/compare/horsemen-vs-hammer-of-thor/',
      alternatePathMs: '/ms/perbandingan/horsemen-vs-hammer-of-thor/',
      mode: 'duel',
      duelObj: duel20,
      pageTitle: duel20.locales['en-MY'].seoTitle,
      pageDescription: duel20.locales['en-MY'].metaDescription,
      headline: duel20.locales['en-MY'].headline,
      subheadline: duel20.locales['en-MY'].subheadline,
      executiveVerdict: duel20.locales['en-MY'].executiveVerdict,
      primaryProductSlug: 'horsemen',
      secondaryProductSlug: 'hammer-of-thor',
      outputs: ['compare/horsemen-vs-hammer-of-thor/index.html'],
    },
    // 3. EN Grow XL vs Magnum Pump XR (MS-117 & MS-118A)
    {
      lang: 'en-MY',
      canonicalPath: '/compare/grow-xl-vs-magnum-pump-xr/',
      alternatePathEn: '/compare/grow-xl-vs-magnum-pump-xr/',
      alternatePathMs: '/ms/perbandingan/grow-xl-vs-magnum-pump-xr/',
      mode: 'duel',
      duelObj: duel30,
      pageTitle: duel30.locales['en-MY'].seoTitle,
      pageDescription: duel30.locales['en-MY'].metaDescription,
      headline: duel30.locales['en-MY'].headline,
      subheadline: duel30.locales['en-MY'].subheadline,
      executiveVerdict: duel30.locales['en-MY'].executiveVerdict,
      primaryProductSlug: 'grow-xl',
      secondaryProductSlug: 'magnum-pump-xr',
      outputs: ['compare/grow-xl-vs-magnum-pump-xr/index.html'],
    },
    // 4. EN All 4 Formulas / 20 vs 30 Capsules Decision Matrix (MS-118B)
    {
      lang: 'en-MY',
      canonicalPath: '/compare/all-4-formulas/',
      alternatePathEn: '/compare/all-4-formulas/',
      alternatePathMs: '/ms/perbandingan/semua-4-formula/',
      mode: 'matrix',
      duelObj: duel30,
      pageTitle: '20 Capsules vs 30 Capsules & All 4 Onyxmen Formulas Comparison Matrix | RM 159 Malaysia',
      pageDescription: 'Compare 20-Capsule concentrated botanical reserves (Horsemen & Hammer of Thor, Day-18 Refill) vs 30-Capsule full-month formulas (Grow XL & Magnum Pump XR, Day-25 Refill) at RM 159.',
      headline: '20 Capsules vs 30 Capsules — Complete 4-Formulation Apothecary Decision Matrix',
      subheadline: 'Understand why Onyxmen Malaysia prices both 20-capsule concentrated reserves and 30-capsule full-month protocols at an identical RM 159.00—and how to select or stack them.',
      executiveVerdict: `${duel20.locales['en-MY'].executiveVerdict} ${duel30.locales['en-MY'].executiveVerdict}`,
      primaryProductSlug: 'grow-xl',
      secondaryProductSlug: 'horsemen',
      outputs: [
        'compare/all-4-formulas/index.html',
        'compare/20-vs-30-capsules/index.html',
        'compare/all-4-onyxman-products/index.html',
      ],
    },
    // 5. MS Master Comparison Hub
    {
      lang: 'ms-MY',
      canonicalPath: '/ms/perbandingan/',
      alternatePathEn: '/compare/',
      alternatePathMs: '/ms/perbandingan/',
      mode: 'matrix',
      duelObj: duel20,
      pageTitle: matrix4.locales['ms-MY'].seoTitle,
      pageDescription: matrix4.locales['ms-MY'].metaDescription,
      headline: matrix4.locales['ms-MY'].headline,
      subheadline: matrix4.locales['ms-MY'].subheadline,
      executiveVerdict: comparisonsData.uniformPricing.rationaleMs,
      primaryProductSlug: 'horsemen',
      secondaryProductSlug: 'magnum-pump-xr',
      outputs: ['ms/compare/index.html', 'ms/perbandingan/index.html'],
    },
    // 6. MS Horsemen vs Hammer of Thor (MS-119 & MS-120)
    {
      lang: 'ms-MY',
      canonicalPath: '/ms/perbandingan/horsemen-vs-hammer-of-thor/',
      alternatePathEn: '/compare/horsemen-vs-hammer-of-thor/',
      alternatePathMs: '/ms/perbandingan/horsemen-vs-hammer-of-thor/',
      mode: 'duel',
      duelObj: duel20,
      pageTitle: duel20.locales['ms-MY'].seoTitle,
      pageDescription: duel20.locales['ms-MY'].metaDescription,
      headline: duel20.locales['ms-MY'].headline,
      subheadline: duel20.locales['ms-MY'].subheadline,
      executiveVerdict: duel20.locales['ms-MY'].executiveVerdict,
      primaryProductSlug: 'horsemen',
      secondaryProductSlug: 'hammer-of-thor',
      outputs: [
        'ms/compare/horsemen-vs-hammer-of-thor/index.html',
        'ms/perbandingan/horsemen-vs-hammer-of-thor/index.html',
      ],
    },
    // 7. MS Grow XL vs Magnum Pump XR (MS-121)
    {
      lang: 'ms-MY',
      canonicalPath: '/ms/perbandingan/grow-xl-vs-magnum-pump-xr/',
      alternatePathEn: '/compare/grow-xl-vs-magnum-pump-xr/',
      alternatePathMs: '/ms/perbandingan/grow-xl-vs-magnum-pump-xr/',
      mode: 'duel',
      duelObj: duel30,
      pageTitle: duel30.locales['ms-MY'].seoTitle,
      pageDescription: duel30.locales['ms-MY'].metaDescription,
      headline: duel30.locales['ms-MY'].headline,
      subheadline: duel30.locales['ms-MY'].subheadline,
      executiveVerdict: duel30.locales['ms-MY'].executiveVerdict,
      primaryProductSlug: 'grow-xl',
      secondaryProductSlug: 'magnum-pump-xr',
      outputs: [
        'ms/compare/grow-xl-vs-magnum-pump-xr/index.html',
        'ms/perbandingan/grow-xl-vs-magnum-pump-xr/index.html',
      ],
    },
    // 8. MS All 4 Formulas / 20 vs 30 Kapsul (MS-122)
    {
      lang: 'ms-MY',
      canonicalPath: '/ms/perbandingan/semua-4-formula/',
      alternatePathEn: '/compare/all-4-formulas/',
      alternatePathMs: '/ms/perbandingan/semua-4-formula/',
      mode: 'matrix',
      duelObj: duel30,
      pageTitle: 'Perbandingan 20 Kapsul vs 30 Kapsul & Semua 4 Formula Onyxmen | RM 159 Malaysia',
      pageDescription: 'Bandingkan botol 20 kapsul berkepekatan tinggi (Horsemen & Hammer of Thor, Hari Ke-18) berbanding botol 30 kapsul sebulan penuh (Grow XL & Magnum Pump XR, Hari Ke-25) pada harga RM 159.',
      headline: '20 Kapsul vs 30 Kapsul — Matriks Keputusan Lengkap 4 Formulasi Onyxmen Malaysia',
      subheadline: 'Fahami mengapa kedua-dua formulasi 20 kapsul padat dan 30 kapsul sebulan penuh ditawarkan pada harga seragam RM 159.00—serta cara menggabungkannya.',
      executiveVerdict: `${duel20.locales['ms-MY'].executiveVerdict} ${duel30.locales['ms-MY'].executiveVerdict}`,
      primaryProductSlug: 'grow-xl',
      secondaryProductSlug: 'horsemen',
      outputs: [
        'ms/compare/all-4-formulas/index.html',
        'ms/perbandingan/all-4-formulas/index.html',
        'ms/perbandingan/20-vs-30-kapsul/index.html',
        'ms/perbandingan/semua-4-formula/index.html',
        'ms/compare/20-vs-30-capsules/index.html',
      ],
    },
  ];

  const report = [];
  for (const job of jobs) {
    const html = buildComparisonPageHtml(job);
    for (const outRel of job.outputs) {
      const res = writeComparisonFile(outRel, html);
      report.push(res);
    }
  }
  return report;
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  const results = buildAllComparisonPages();
  const bannedPatterns = [
    /#FAF8F5/i,
    /Plus Jakarta Sans/i,
    /JetBrains Mono/i,
    /border-radius:\s*999px/i,
    /repeat\(\s*3\s*,\s*1fr\s*\)/i,
  ];
  console.log(`Built ${results.length} Comparison Hub HTML files:`);
  for (const r of results) {
    const content = fs.readFileSync(r.fullPath, 'utf8');
    if (r.lines < 2400) {
      throw new Error(`Line count violation on ${r.relPublicPath}: ${r.lines}`);
    }
    for (const pat of bannedPatterns) {
      if (pat.test(content)) {
        throw new Error(`Banned token violation (${pat}) in ${r.relPublicPath}`);
      }
    }
    const startTag = '<script type="application/ld+json">';
    const sIdx = content.indexOf(startTag);
    const eIdx = content.indexOf('</script>', sIdx);
    const parsedGraph = JSON.parse(content.slice(sIdx + startTag.length, eIdx).trim());
    if (!parsedGraph['@graph'] || parsedGraph['@graph'].length < 6) {
      throw new Error(`Invalid @graph JSON-LD in ${r.relPublicPath}`);
    }
    console.log(`  [OK] ${r.relPublicPath} -> ${r.lines} lines (JSON-LD nodes: ${parsedGraph['@graph'].length}, 0 banned tokens)`);
  }
}
