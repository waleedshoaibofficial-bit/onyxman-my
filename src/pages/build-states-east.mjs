#!/usr/bin/env node
/**
 * ONYXMEN.MY — EAST & NORTHERN MALAYSIA + FEDERAL TERRITORIES HUB BUILDER (MS-139 TO MS-146)
 * Generates the Master Malaysia Nationwide Delivery Index + 9 Regional State/FT Hubs in EN (en-MY) & BM (ms-MY):
 *
 * - Master Nationwide Hub Index:
 *   - public/malaysia/index.html & public/malaysia-delivery/index.html
 *   - public/ms/malaysia/index.html & public/ms/penghantaran-malaysia/index.html
 * - MS-139: Sabah (Kota Kinabalu, Penampang, Sandakan, Tawau, Lahad Datu, Keningau — Air-Cargo 2–4 Days)
 *   - public/malaysia/sabah/index.html (+ malaysia-delivery aliases)
 *   - public/ms/malaysia/sabah/index.html & public/ms/penghantaran-malaysia/sabah/index.html
 * - MS-140: Sarawak (Kuching, Kota Samarahan, Miri, Sibu, Bintulu — Air-Cargo 2–4 Days)
 *   - public/malaysia/sarawak/index.html (+ malaysia-delivery aliases)
 *   - public/ms/malaysia/sarawak/index.html & public/ms/penghantaran-malaysia/sarawak/index.html
 * - MS-141: Kedah (Alor Setar, Sungai Petani, Kulim, Jitra, Langkawi — Northern Linehaul 1–2 Days)
 *   - public/malaysia/kedah/index.html (+ malaysia-delivery aliases)
 *   - public/ms/malaysia/kedah/index.html & public/ms/penghantaran-malaysia/kedah/index.html
 * - MS-142: Kelantan (Kota Bharu, Kubang Kerian, Pasir Mas, Tanah Merah, Machang — East Coast 1–2 Days)
 *   - public/malaysia/kelantan/index.html (+ malaysia-delivery aliases)
 *   - public/ms/malaysia/kelantan/index.html & public/ms/penghantaran-malaysia/kelantan/index.html
 * - MS-143: Terengganu (Kuala Terengganu, Gong Badak, Kemaman, Chukai, Dungun — LPT2 Express 1–2 Days)
 *   - public/malaysia/terengganu/index.html (+ malaysia-delivery aliases)
 *   - public/ms/malaysia/terengganu/index.html & public/ms/penghantaran-malaysia/terengganu/index.html
 * - MS-144: Putrajaya (Precincts 1–20 Federal Administrative Centre — 3–5h Same-Day Runner & Next-Day Courier)
 *   - public/malaysia/putrajaya/index.html (+ malaysia-delivery aliases)
 *   - public/ms/malaysia/putrajaya/index.html & public/ms/penghantaran-malaysia/putrajaya/index.html
 * - MS-145: Cyberjaya & Labuan (Cyberjaya Tech Corridor Same-Day Runner + WP Labuan Air-Cargo Parcel)
 *   - public/malaysia/cyberjaya/index.html, public/malaysia/labuan/index.html (+ malaysia-delivery aliases)
 *   - public/ms/malaysia/cyberjaya/index.html, public/ms/malaysia/labuan/index.html
 *   - public/ms/penghantaran-malaysia/cyberjaya/index.html, public/ms/penghantaran-malaysia/labuan/index.html
 * - MS-146: Perlis (Kangar, Arau, Padang Besar, Kuala Perlis — Northern Express 1–2 Days)
 *   - public/malaysia/perlis/index.html (+ malaysia-delivery aliases)
 *   - public/ms/malaysia/perlis/index.html & public/ms/penghantaran-malaysia/perlis/index.html
 *
 * Strictly enforces Rule #29 & Rule #30:
 * - Paradigm A (100vw x 100vh Full-Bleed Obsidian Cinema Stage) + Paradigm D (Pinned 50vw/50vw Split-Screen Logistics & Apothecary Stage)
 * - Obsidian & Liquid Champagne Gold palette (#050507, #0B0C10, #12141C, #D4AF37, #EAE6DF)
 * - Typography: 'Cormorant Garamond', 'Syne', 'Space Grotesk'
 * - Every generated HTML file >= 2,200+ lines of uncompressed semantic HTML5 with 1-Click Express Order Drawer triggers,
 *   exact Onyxmen bottle linkages (RM 159 / RM 318 / RM 477), FAQs, and @graph JSON-LD.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderLuxuryShell, escapeHtmlAttr } from '../components/LuxuryShell.mjs';
import { buildFullPageGraph } from '../utils/schema-graph.mjs';
import {
  malaysiaStatesData,
  allProducts,
  productsById,
} from '../data/products/index.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

function esc(str = '') {
  return escapeHtmlAttr(str);
}

/**
 * Custom inline architectural CSS for East/Northern Malaysia State Hubs & Nationwide Delivery Index
 * Enforces Paradigm A (100vw x 100vh) + Paradigm D (50vw / 50vw Pinned Split Stage) + Architectural Hairline Ledgers.
 * Strictly zero banned tokens.
 */
export const STATE_HUB_STAGE_CSS = `
<style id="onyxman-state-hub-architectural-css">
  /* ==========================================================================
     PARADIGM A — 100VW X 100VH FULL-BLEED REGIONAL DISPATCH CINEMA STAGE
     ========================================================================== */
  .state-cinema-hero {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    background-color: #050507;
    background-image:
      radial-gradient(circle at 74% 36%, rgba(212, 175, 55, 0.16) 0%, rgba(18, 20, 28, 0.72) 48%, #050507 94%),
      linear-gradient(180deg, #050507 0%, #0B0C10 62%, #050507 100%);
    border-bottom: 1px solid rgba(212, 175, 55, 0.28);
    padding: clamp(3.5rem, 7vh, 6.5rem) var(--gutter-cinema);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }
  .state-cinema-hero__watermark {
    position: absolute;
    right: -2vw;
    top: 8vh;
    font-family: var(--font-display);
    font-size: clamp(8.5rem, 20vw, 22rem);
    font-weight: 600;
    line-height: 0.82;
    letter-spacing: -0.04em;
    color: rgba(212, 175, 55, 0.045);
    pointer-events: none;
    user-select: none;
    z-index: 1;
  }
  .state-cinema-hero__breadcrumb-bar {
    position: relative;
    z-index: 2;
    max-width: 1760px;
    width: 100%;
    margin: 0 auto 2rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid rgba(234, 230, 223, 0.1);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    font-size: 0.74rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--text-muted-alabaster);
  }
  .state-cinema-hero__crumbs {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.6rem;
  }
  .state-cinema-hero__crumbs a:hover {
    color: var(--gold-foil-bright);
  }
  .state-cinema-hero__stage {
    position: relative;
    z-index: 2;
    max-width: 1760px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: clamp(2.5rem, 5vw, 5.5rem);
  }
  .state-cinema-hero__narrative {
    flex: 1 1 580px;
    max-width: 840px;
    display: flex;
    flex-direction: column;
    gap: 1.45rem;
  }
  .state-cinema-hero__corridor-strip {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.25rem;
    padding: 0.65rem 0;
    border-top: 1px solid rgba(212, 175, 55, 0.28);
    border-bottom: 1px solid rgba(212, 175, 55, 0.28);
    font-family: var(--font-technical);
    font-size: 0.74rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--gold-foil-bright);
  }
  .state-cinema-hero__lead {
    font-size: clamp(1.04rem, 1.3vw, 1.24rem);
    line-height: 1.74;
    color: var(--text-muted-alabaster);
    max-width: 68ch;
  }
  .state-cinema-hero__cta-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.25rem;
    padding-top: 0.65rem;
  }
  .state-cinema-hero__specimen-stage {
    flex: 1 1 420px;
    max-width: 660px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    background: radial-gradient(circle at 50% 48%, rgba(212, 175, 55, 0.18) 0%, rgba(11, 12, 16, 0.45) 56%, transparent 78%);
  }
  .state-cinema-hero__specimen-img {
    width: 100%;
    max-height: 54vh;
    object-fit: contain;
    filter: drop-shadow(0 28px 54px rgba(0, 0, 0, 0.92)) drop-shadow(0 0 36px rgba(212, 175, 55, 0.16));
  }
  .state-cinema-hero__specimen-caption {
    width: 100%;
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(212, 175, 55, 0.28);
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    gap: 1rem;
    font-size: 0.75rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-muted-alabaster);
  }
  .state-cinema-hero__telemetry-deck {
    position: relative;
    z-index: 2;
    max-width: 1760px;
    width: 100%;
    margin: 3rem auto 0;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(212, 175, 55, 0.3);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem;
  }
  .state-cinema-hero__telemetry-col {
    flex: 1 1 210px;
    padding-left: 1rem;
    border-left: 1px solid rgba(212, 175, 55, 0.25);
  }
  .state-cinema-hero__telemetry-label {
    display: block;
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-ash-silver);
    margin-bottom: 0.25rem;
  }
  .state-cinema-hero__telemetry-val {
    font-family: var(--font-display);
    font-size: clamp(1.35rem, 2vw, 1.85rem);
    font-weight: 600;
    color: var(--gold-foil-bright);
    line-height: 1.15;
  }
  .state-cinema-hero__telemetry-sub {
    display: block;
    font-size: 0.74rem;
    color: var(--text-muted-alabaster);
    margin-top: 0.2rem;
  }

  /* ==========================================================================
     PARADIGM D — PINNED 50VW / 50VW SPLIT-SCREEN REGIONAL LOGISTICS CURTAIN
     ========================================================================== */
  .state-split-5050 {
    position: relative;
    width: 100vw;
    background-color: #0B0C10;
    border-bottom: 1px solid rgba(212, 175, 55, 0.24);
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }
  .state-split-5050__pinned {
    flex: 1 1 500px;
    width: 50vw;
    padding: var(--gutter-vertical) var(--gutter-cinema);
    border-right: 1px solid rgba(212, 175, 55, 0.24);
    background:
      radial-gradient(circle at 46% 42%, rgba(212, 175, 55, 0.12) 0%, rgba(5, 5, 7, 0.88) 68%),
      #050507;
    position: sticky;
    top: 4.5rem;
    align-self: flex-start;
    min-height: calc(100vh - 4.5rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
  }
  .state-split-5050__scrolling {
    flex: 1 1 500px;
    width: 50vw;
    padding: var(--gutter-vertical) var(--gutter-cinema);
    background-color: #0B0C10;
    display: flex;
    flex-direction: column;
    gap: 3.25rem;
  }
  .state-split-5050__chapter {
    padding-bottom: 2.75rem;
    border-bottom: 1px solid rgba(212, 175, 55, 0.2);
    display: flex;
    flex-direction: column;
    gap: 1.15rem;
  }
  .state-split-5050__chapter-num {
    font-family: var(--font-technical);
    font-size: 0.72rem;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }
  .state-split-5050__chapter-title {
    font-family: var(--font-display);
    font-size: clamp(1.75rem, 2.7vw, 2.55rem);
    font-weight: 500;
    line-height: 1.12;
    color: var(--text-silk-ivory);
  }
  .state-split-5050__chapter-body {
    font-size: 0.98rem;
    line-height: 1.78;
    color: var(--text-muted-alabaster);
  }
  .state-split-5050__spec-strip {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.9rem 0;
    border-top: 1px solid rgba(234, 230, 223, 0.1);
    border-bottom: 1px solid rgba(234, 230, 223, 0.1);
    font-size: 0.8rem;
    letter-spacing: 0.1em;
    color: var(--gold-foil-bright);
  }

  /* ==========================================================================
     ARCHITECTURAL HAIRLINE SECTIONS & REGIONAL LEDGERS (ZERO CARD BOX GRIDS)
     ========================================================================== */
  .state-section {
    width: 100vw;
    padding: var(--gutter-vertical) var(--gutter-cinema);
    background-color: #050507;
    border-bottom: 1px solid rgba(212, 175, 55, 0.24);
  }
  .state-section--onyx {
    background-color: #0B0C10;
  }
  .state-section--charcoal {
    background-color: #12141C;
  }
  .state-section__inner {
    max-width: 1760px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .state-section__header {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(212, 175, 55, 0.28);
  }
  .state-section__header-left {
    max-width: 920px;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }
  .state-section__header-right {
    max-width: 540px;
    font-size: 0.95rem;
    line-height: 1.7;
    color: var(--text-muted-alabaster);
  }

  /* Horizontal Architectural Hairline Ledger Rows */
  .state-hairline-ledger {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: 1px solid rgba(212, 175, 55, 0.28);
  }
  .state-hairline-row {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
    padding: 2.15rem 0;
    border-bottom: 1px solid rgba(234, 230, 223, 0.12);
    transition: background-color 220ms ease;
  }
  .state-hairline-row:hover {
    background-color: rgba(212, 175, 55, 0.03);
  }
  .state-hairline-row__index {
    flex: 0 0 110px;
    font-family: var(--font-display);
    font-size: 2.1rem;
    font-weight: 500;
    color: var(--gold-champagne);
    line-height: 1;
  }
  .state-hairline-row__title-col {
    flex: 1 1 280px;
    max-width: 440px;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  .state-hairline-row__title {
    font-family: var(--font-architectural);
    font-size: 1.14rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    color: var(--text-silk-ivory);
  }
  .state-hairline-row__subtitle {
    font-size: 0.76rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }
  .state-hairline-row__desc-col {
    flex: 2 1 440px;
    font-size: 0.96rem;
    line-height: 1.74;
    color: var(--text-muted-alabaster);
  }
  .state-hairline-row__action-col {
    flex: 0 0 240px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.55rem;
    text-align: right;
  }

  /* Responsive Full-Bleed Data Tables */
  .state-table-wrap {
    width: 100%;
    overflow-x: auto;
    border-top: 1px solid rgba(212, 175, 55, 0.32);
    border-bottom: 1px solid rgba(212, 175, 55, 0.32);
  }
  .state-comparison-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    min-width: 880px;
  }
  .state-comparison-table th {
    padding: 1.25rem 1.15rem;
    font-family: var(--font-technical);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-foil-bright);
    background-color: rgba(18, 20, 28, 0.85);
    border-bottom: 1px solid rgba(212, 175, 55, 0.28);
  }
  .state-comparison-table td {
    padding: 1.25rem 1.15rem;
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--text-silk-ivory);
    border-bottom: 1px solid rgba(234, 230, 223, 0.09);
    vertical-align: top;
  }
  .state-comparison-table tr:hover td {
    background-color: rgba(212, 175, 55, 0.04);
  }

  /* Editorial FAQ Accordion Ledger */
  .state-faq-ledger {
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgba(212, 175, 55, 0.28);
  }
  .state-faq-item {
    border-bottom: 1px solid rgba(234, 230, 223, 0.12);
  }
  .state-faq-item summary {
    padding: 1.65rem 0;
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    font-family: var(--font-display);
    font-size: clamp(1.32rem, 2vw, 1.72rem);
    font-weight: 500;
    color: var(--text-silk-ivory);
  }
  .state-faq-item summary::-webkit-details-marker {
    display: none;
  }
  .state-faq-item summary:hover {
    color: var(--gold-foil-bright);
  }
  .state-faq-item__icon {
    font-family: var(--font-technical);
    font-size: 0.85rem;
    letter-spacing: 0.16em;
    color: var(--gold-champagne);
    flex-shrink: 0;
  }
  .state-faq-item__answer {
    padding: 0 0 1.85rem 0;
    max-width: 96ch;
    font-size: 0.98rem;
    line-height: 1.78;
    color: var(--text-muted-alabaster);
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }

  @media (max-width: 1024px) {
    .state-split-5050__pinned,
    .state-split-5050__scrolling {
      width: 100vw;
      position: relative;
      top: 0;
      min-height: auto;
      border-right: none;
    }
    .state-hairline-row__action-col {
      align-items: flex-start;
      text-align: left;
    }
  }
</style>
`;

/**
 * Rich regional architectural dossiers for MS-139 through MS-146:
 * 1. Sabah (MS-139)
 * 2. Sarawak (MS-140)
 * 3. Kedah (MS-141)
 * 4. Kelantan (MS-142)
 * 5. Terengganu (MS-143)
 * 6. Putrajaya (MS-144)
 * 7. Cyberjaya (MS-145A)
 * 8. Labuan (MS-145B)
 * 9. Perlis (MS-146)
 */
export const EAST_NORTH_STATE_DOSSIERS = [
  {
    microStepEn: 'MS-139',
    microStepMs: 'MS-139',
    hubCode: 'MY-12 · SABAH AIR-CARGO HUB',
    slug: 'sabah',
    schemaKey: 'sabah',
    watermark: 'SABAH',
    canonicalEnPath: '/malaysia/sabah/',
    canonicalMsPath: '/ms/malaysia/sabah/',
    enOutputPaths: [
      'malaysia/sabah/index.html',
      'malaysia-delivery/sabah/index.html',
      'malaysia-delivery/sabah-kota-kinabalu/index.html',
    ],
    msOutputPaths: [
      'ms/malaysia/sabah/index.html',
      'ms/penghantaran-malaysia/sabah/index.html',
      'ms/penghantaran-malaysia/sabah-kota-kinabalu/index.html',
    ],
    nameEn: 'Sabah (Kota Kinabalu, Penampang, Sandakan, Tawau, Lahad Datu & Keningau)',
    nameMs: 'Sabah Di Bawah Bayu (Kota Kinabalu, Penampang, Sandakan, Tawau, Lahad Datu & Keningau)',
    shortNameEn: 'Sabah',
    shortNameMs: 'Sabah',
    capitalOrCenter: 'Kota Kinabalu (KKIA Terminal) / Sandakan / Tawau',
    zoneCode: 'EAST_MALAYSIA_AIR_CARGO',
    postalCodeRange: '88000–91300',
    transitWindowEn: '2–4 Business Days (Priority Daily Air-Cargo Discreet Parcel via KKIA, SDK & TWU)',
    transitWindowMs: '2–4 Hari Bekerja (Bungkusan Kargo Udara Rahsia Harian melalui KKIA, SDK & TWU)',
    shippingPolicyEn: 'RM 12 Single-Bottle Air Freight · RM 0 FREE Air Cargo on 2 Bottles (RM 318) & 3 Bottles (RM 477)',
    shippingPolicyMs: 'RM 12 Kargo Udara 1 Botol · RM 0 Kargo Udara PERCUMA untuk 2 Botol (RM 318) & 3 Botol (RM 477)',
    sameDayRunnerAvailable: false,
    codSupported: true,
    fpxSupported: true,
    primaryProductSlug: 'grow-xl',
    secondaryProductSlug: 'horsemen',
    heroVisualWebp: '/assets/products/grow-xl-stage.webp',
    heroVisualPng: '/assets/products/grow-xl-stage.png',
    couriers: [
      'PosLaju Priority Borneo Air-Cargo',
      'J&T Express VIP East Malaysia Air Linehaul',
      'DHL eCommerce Malaysia Discreet Air',
      'NinjaVan Sabah Metro Hub Dispatch',
    ],
    seoTitleEn:
      'Discreet Air-Cargo Delivery in Sabah (Kota Kinabalu, Penampang, Sandakan, Tawau) — RM 159 | Onyxmen Malaysia',
    seoDescEn:
      'Order authentic Onyxmen men’s vitality supplements (Horsemen, Hammer of Thor, Grow XL, Magnum Pump XR — RM 159) with 2–4 day discreet air-cargo parcel delivery to Kota Kinabalu, Penampang, Sandakan, Tawau, Lahad Datu & Keningau. Free air shipping on 2+ bottles (RM 318).',
    seoTitleMs:
      'Penghantaran Kargo Udara Rahsia di Sabah (Kota Kinabalu, Penampang, Sandakan, Tawau) — RM 159 | Onyxmen Malaysia',
    seoDescMs:
      'Tempah suplemen kecergasan lelaki tulen Onyxmen (Horsemen, Hammer of Thor, Grow XL, Magnum Pump XR — RM 159) dengan penghantaran kargo udara rahsia 2–4 hari ke Kota Kinabalu, Penampang, Sandakan, Tawau, Lahad Datu & Keningau. Penghantaran udara percuma untuk 2+ botol (RM 318).',
    kickerEn: 'EAST MALAYSIA BORNEO AIR-CARGO CORRIDOR · KOTA KINABALU · SANDAKAN · TAWAU · LAHAD DATU',
    kickerMs: 'KORIDOR KARGO UDARA BORNEO SABAH · KOTA KINABALU · PENAMPANG · SANDAKAN · TAWAU',
    headlineEn:
      'Sabah Priority Air-Cargo Discreet Apothecary Dispatch: <span class="foil-champagne-text">Kota Kinabalu, Sandakan &amp; Tawau.</span>',
    headlineMs:
      'Penghantaran Kargo Udara Rahsia Sabah: <span class="foil-champagne-text">Kota Kinabalu, Penampang, Sandakan &amp; Tawau.</span>',
    leadEn:
      'Engineered specifically for East Malaysia buyers across Kota Kinabalu, Penampang, Putatan, Tuaran, Sandakan, Tawau, Lahad Datu, Semporna, and Keningau. Every Onyxmen formulation (RM 159 per bottle) departs our Kuala Lumpur vault on daily KLIA-to-KKIA/SDK/TWU air cargo manifests inside a double-sealed, X-ray opaque security pouch declared generically as "Personal Nutritional Goods" under sender "OM Fulfilment Logistics".',
    leadMs:
      'Direka khusus untuk pelanggan di seluruh Sabah merangkumi Kota Kinabalu, Penampang, Putatan, Tuaran, Sandakan, Tawau, Lahad Datu, Semporna, dan Keningau. Setiap botol rasmi Onyxmen (RM 159 sebotol) diterbangkan setiap hari melalui kargo udara KLIA ke KKIA, Sandakan, dan Tawau di dalam bungkusan keselamatan legap dua lapisan dengan deklarasi umum "Penjagaan Kesihatan Harian" oleh "OM Fulfilment Logistics".',
    customsProtocolEn:
      'East Malaysia Airway Privacy & Customs Declaration Protocol: All parcels crossing into Sabah via Kota Kinabalu International Airport (KKIA), Sandakan Airport, or Tawau Airport carry a standardized domestic commercial invoice declaring "Nutritional Capsule Supplement — Personal Use" with zero mention of men’s vitality, Horsemen, Hammer of Thor, Grow XL, or Magnum Pump XR on the outer airway bill.',
    customsProtocolMs:
      'Protokol Privasi Kargo Udara & Deklarasi Kastam Sabah: Semua bungkusan yang tiba melalui Lapangan Terbang Antarabangsa Kota Kinabalu (KKIA), Sandakan, atau Tawau menggunakan bil udara domestik yang hanya mencatatkan "Suplemen Nutrisi Harian — Kegunaan Peribadi" tanpa sebarang nama produk atau jenama pada luar bungkusan.',
    districts: [
      {
        code: 'SBH-01',
        nameEn: 'Kota Kinabalu Metro (KK City, Likas, Luyang, Damai, Kepayan & Inanam)',
        nameMs: 'bandaraya Kota Kinabalu (Pusat Bandar KK, Likas, Luyang, Damai, Kepayan & Inanam)',
        postcodes: '88000–88450',
        etaEn: '2 Business Days via KKIA Morning Air-Cargo Sortation',
        etaMs: '2 Hari Bekerja melalui Pengagihan Kargo Udara Pagi KKIA',
        notesEn:
          'Direct handover to condominium concierges in Likas Bay, Jesselton Quay, Sutera Avenue, Luyang Phase 1–8, and corporate offices in KK CBD with COD & DuitNow QR support.',
        notesMs:
          'Penghantaran terus ke kondominium di Teluk Likas, Jesselton Quay, Sutera Avenue, Luyang, serta pejabat korporat di pusat bandar KK dengan sokongan COD & DuitNow QR.',
      },
      {
        code: 'SBH-02',
        nameEn: 'Penampang, Bundusan, Donggongon, Putatan & Lok Kawi',
        nameMs: 'Penampang, Bundusan, Donggongon, Putatan & Lok Kawi',
        postcodes: '88300, 89500, 89580',
        etaEn: '2–3 Business Days via KKIA Southern Feeder Hub',
        etaMs: '2–3 Hari Bekerja melalui Hab Pengagihan Selatan KKIA',
        notesEn:
          'High-density residential and commercial corridor minutes from KKIA Terminal 1; full discreet rider drop-off to Donggongon, Beverly Hills Bundusan, and Putatan.',
        notesMs:
          'Koridor kediaman dan komersial utama berhampiran KKIA; penghantaran bungkusan legap terus ke Donggongon, Beverly Hills Bundusan, dan Putatan.',
      },
      {
        code: 'SBH-03',
        nameEn: 'Sandakan (Bandar Indah, Mile 4–8, Sejati Walk & Batu Sapi)',
        nameMs: 'Sandakan (Bandar Indah, Batu 4–8, Sejati Walk & Batu Sapi)',
        postcodes: '90000–90700',
        etaEn: '2–3 Business Days via Direct KLIA–SDK Air Freight',
        etaMs: '2–3 Hari Bekerja melalui Penerbangan Kargo Terus KLIA–SDK',
        notesEn:
          'Serves East Coast Sabah executives, plantation directors, and residents across Bandar Indah, Bandar Utama Sandakan, and Kinabatangan corridor.',
        notesMs:
          'Meliputi eksekutif, pengurus perladangan, dan penduduk di Bandar Indah, Bandar Utama Sandakan, dan koridor Kinabatangan.',
      },
      {
        code: 'SBH-04',
        nameEn: 'Tawau, Kubota, Fajar, Balung & Semporna',
        nameMs: 'Tawau, Kubota, Fajar, Balung & Semporna',
        postcodes: '91000–91308',
        etaEn: '2–4 Business Days via Tawau Airport (TWU) Cargo Hub',
        etaMs: '2–4 Hari Bekerja melalui Hab Kargo Lapangan Terbang Tawau (TWU)',
        notesEn:
          'Discreet air-pouch dispatch to Tawau town, Bandar Sri Indah, Kubota commercial center, and Semporna marine/hospitality professionals.',
        notesMs:
          'Penghantaran pek keselamatan legap ke pusat bandar Tawau, Bandar Sri Indah, Kubota, serta golongan profesional di Semporna.',
      },
      {
        code: 'SBH-05',
        nameEn: 'Lahad Datu, Kunak & FELDA Sahabat Corridor',
        nameMs: 'Lahad Datu, Kunak & Koridor FELDA Sahabat',
        postcodes: '91100–91200',
        etaEn: '3–4 Business Days via East Coast Sabah Express Line',
        etaMs: '3–4 Hari Bekerja melalui Rangkaian Ekspres Pantai Timur Sabah',
        notesEn:
          'Trusted by palm-oil industrial engineers, security personnel, and business owners in Lahad Datu iPeak, Bandar Sri Perdana, and Kunak.',
        notesMs:
          'Dipercayai oleh jurutera industri sawit, anggota keselamatan, dan usahawan di Lahad Datu iPeak, Bandar Sri Perdana, dan Kunak.',
      },
      {
        code: 'SBH-06',
        nameEn: 'Keningau, Tenom, Tambunan, Papar, Tuaran, Kota Belud & Kudat',
        nameMs: 'Keningau, Tenom, Tambunan, Papar, Tuaran, Kota Belud & Kudat',
        postcodes: '89000–89900',
        etaEn: '3–4 Business Days via Interior & West Coast Sabah Feeder',
        etaMs: '3–4 Hari Bekerja melalui Laluan Pedalaman & Pantai Barat Sabah',
        notesEn:
          'Complete interior and northern Sabah coverage including Keningau town, Ranau highland resorts, Tuaran, Papar, and Beaufort.',
        notesMs:
          'Liputan penuh kawasan pedalaman dan utara Sabah termasuk bandar Keningau, Ranau, Tuaran, Papar, dan Beaufort.',
      },
    ],
  },
  {
    microStepEn: 'MS-140',
    microStepMs: 'MS-140',
    hubCode: 'MY-13 · SARAWAK AIR-CARGO HUB',
    slug: 'sarawak',
    schemaKey: 'sarawak',
    watermark: 'SARAWAK',
    canonicalEnPath: '/malaysia/sarawak/',
    canonicalMsPath: '/ms/malaysia/sarawak/',
    enOutputPaths: [
      'malaysia/sarawak/index.html',
      'malaysia-delivery/sarawak/index.html',
      'malaysia-delivery/sarawak-kuching/index.html',
    ],
    msOutputPaths: [
      'ms/malaysia/sarawak/index.html',
      'ms/penghantaran-malaysia/sarawak/index.html',
      'ms/penghantaran-malaysia/sarawak-kuching/index.html',
    ],
    nameEn: 'Sarawak (Kuching, Kota Samarahan, Miri, Sibu & Bintulu)',
    nameMs: 'Sarawak Bumi Kenyalang (Kuching, Kota Samarahan, Miri, Sibu & Bintulu)',
    shortNameEn: 'Sarawak',
    shortNameMs: 'Sarawak',
    capitalOrCenter: 'Kuching (KCH) / Miri (MYY) / Bintulu (BTU) / Sibu (SBW)',
    zoneCode: 'EAST_MALAYSIA_AIR_CARGO',
    postalCodeRange: '93000–98859',
    transitWindowEn: '2–4 Business Days (Priority Daily Air-Cargo Discreet Parcel to KCH, MYY, SBW & BTU)',
    transitWindowMs: '2–4 Hari Bekerja (Bungkusan Kargo Udara Rahsia Harian ke KCH, MYY, SBW & BTU)',
    shippingPolicyEn: 'RM 12 Single-Bottle Air Freight · RM 0 FREE Air Cargo on 2 Bottles (RM 318) & 3 Bottles (RM 477)',
    shippingPolicyMs: 'RM 12 Kargo Udara 1 Botol · RM 0 Kargo Udara PERCUMA untuk 2 Botol (RM 318) & 3 Botol (RM 477)',
    sameDayRunnerAvailable: false,
    codSupported: true,
    fpxSupported: true,
    primaryProductSlug: 'magnum-pump-xr',
    secondaryProductSlug: 'horsemen',
    heroVisualWebp: '/assets/products/magnum-pump-xr-stage.webp',
    heroVisualPng: '/assets/products/magnum-pump-xr-stage.png',
    couriers: [
      'PosLaju Priority Sarawak Air-Cargo',
      'J&T Express Borneo VIP Air Linehaul',
      'DHL eCommerce Malaysia Discreet Air',
      'NinjaVan Kuching & Miri Metro Dispatch',
    ],
    seoTitleEn:
      'Discreet Air-Cargo Delivery in Sarawak (Kuching, Kota Samarahan, Miri, Sibu, Bintulu) — RM 159 | Onyxmen',
    seoDescEn:
      'Fast 2–4 day discreet air-cargo delivery of authentic Onyxmen men’s supplements (RM 159) across Sarawak: Kuching, Kota Samarahan, Miri, Sibu & Bintulu. Free air shipping on 2-bottle (RM 318) & 3-bottle (RM 477) tiers.',
    seoTitleMs:
      'Penghantaran Kargo Udara Rahsia di Sarawak (Kuching, Kota Samarahan, Miri, Sibu, Bintulu) — RM 159 | Onyxmen',
    seoDescMs:
      'Penghantaran kargo udara rahsia 2–4 hari suplemen lelaki tulen Onyxmen (RM 159) ke seluruh Sarawak: Kuching, Kota Samarahan, Miri, Sibu & Bintulu. Penghantaran udara percuma untuk pakej 2 botol (RM 318) & 3 botol (RM 477).',
    kickerEn: 'SARAWAK MULTI-AIRPORT BORNEO LOGISTICS · KUCHING · MIRI · BINTULU · SIBU',
    kickerMs: 'RANGKAIAN KARGO UDARA SARAWAK · KUCHING · SAMARAHAN · MIRI · SIBU · BINTULU',
    headlineEn:
      'Sarawak Priority Air-Cargo Discreet Apothecary Dispatch: <span class="foil-champagne-text">Kuching, Miri, Sibu &amp; Bintulu.</span>',
    headlineMs:
      'Penghantaran Kargo Udara Rahsia Sarawak: <span class="foil-champagne-text">Kuching, Samarahan, Miri, Sibu &amp; Bintulu.</span>',
    leadEn:
      'Directly serving Kuching, Kota Samarahan, Padawan, Miri, Bintulu, Sibu, Sri Aman, Sarikei, Mukah, and Limbang via four dedicated Sarawak airport gateways (KCH, MYY, BTU, SBW). Note for Oil, Gas, and LNG engineers in Miri and Bintulu: Magnum Pump XR on Onyxmen.my is strictly our 30-Black-Capsule Nitric Oxide & Tongkat Ali Dietary Supplement (RM 159)—never a mechanical or industrial pump—shipped in a 100% plain personal parcel.',
    leadMs:
      'Meliputi Kuching, Kota Samarahan, Padawan, Miri, Bintulu, Sibu, Sri Aman, Sarikei, Mukah, dan Limbang menerusi empat pintu masuk lapangan terbang utama Sarawak (KCH, MYY, BTU, SBW). Makluman khas buat profesional Minyak, Gas & LNG di Miri dan Bintulu: Magnum Pump XR di Onyxmen.my ialah Suplemen Kapsul Pemakanan Asid Amino & Nitrik Oksida 30 Kapsul Hitam (RM 159)—bukan pam mekanikal atau industri—dihantar di dalam bungkusan rahsia tanpa nama produk.',
    customsProtocolEn:
      'Sarawak Multi-Airport Direct Airway Routing: Instead of routing all Sarawak parcels through Kuching and trucking them 800km north, Onyxmen routes Northern and Central Sarawak orders directly into Miri Airport (MYY), Bintulu Airport (BTU), and Sibu Airport (SBW), cutting transit time to 2–4 business days.',
    customsProtocolMs:
      'Laluan Terus Empat Lapangan Terbang Sarawak: Pesanan untuk utara dan tengah Sarawak diterbangkan terus ke Lapangan Terbang Miri (MYY), Bintulu (BTU), dan Sibu (SBW) selain Kuching (KCH), memendekkan masa penghantaran kepada 2–4 hari bekerja.',
    districts: [
      {
        code: 'SWK-01',
        nameEn: 'Kuching Metro (Petra Jaya, Tabuan Jaya, Green Road, Batu Kawa & Pending)',
        nameMs: 'Bandaraya Kuching (Petra Jaya, Tabuan Jaya, Jalan Green, Batu Kawa & Pending)',
        postcodes: '93000–93450',
        etaEn: '2 Business Days via Kuching International Airport (KCH)',
        etaMs: '2 Hari Bekerja melalui Lapangan Terbang Antarabangsa Kuching (KCH)',
        notesEn:
          'Priority discreet courier delivery to Tabuan Jaya, Gala City, Saradise, Vivacity Megamall residences, Petra Jaya, and Batu Kawa.',
        notesMs:
          'Penghantaran kurier rahsia ke Tabuan Jaya, Gala City, Saradise, kediaman sekitar Vivacity, Petra Jaya, dan Batu Kawa.',
      },
      {
        code: 'SWK-02',
        nameEn: 'Kota Samarahan, Padawan, Batu 10 & Serian',
        nameMs: 'Kota Samarahan, Padawan, Batu 10 & Serian',
        postcodes: '94300, 94200, 94700',
        etaEn: '2–3 Business Days via Greater Kuching Feeder Hub',
        etaMs: '2–3 Hari Bekerja melalui Hab Pengagihan Greater Kuching',
        notesEn:
          'Covers UNIMAS / medical campus precincts, Desa Ilmu, Farley Samarahan, Kota Sentosa (Mile 7), and Serian town.',
        notesMs:
          'Meliputi kawasan kampus perubatan, Desa Ilmu, Bandar Riyal, Kota Sentosa (Batu 7), dan bandar Serian.',
      },
      {
        code: 'SWK-03',
        nameEn: 'Miri (Marina Parkcity, Lutong, Senadin, Permyjaya & Pujut)',
        nameMs: 'Bandaraya Miri (Marina Parkcity, Lutong, Senadin, Permyjaya & Pujut)',
        postcodes: '98000–98100',
        etaEn: '2–3 Business Days via Direct KLIA–Miri (MYY) Air Cargo',
        etaMs: '2–3 Hari Bekerja melalui Kargo Udara Terus KLIA–Miri (MYY)',
        notesEn:
          'High-demand hub for Lutong offshore energy executives, Marina Parkcity offices, Times Square Miri, and Brunei border commuters.',
        notesMs:
          'Hab permintaan tinggi buat eksekutif tenaga luar pesisir di Lutong, Marina Parkcity, Times Square Miri, dan kawasan sempadan.',
      },
      {
        code: 'SWK-04',
        nameEn: 'Bintulu, Kidurong, Tanjung Batu & Samalaju Industrial Park',
        nameMs: 'Bintulu, Kidurong, Tanjung Batu & Taman Perindustrian Samalaju',
        postcodes: '97000–97300',
        etaEn: '2–4 Business Days via Bintulu Airport (BTU) Air Linehaul',
        etaMs: '2–4 Hari Bekerja melalui Kargo Udara Lapangan Terbang Bintulu (BTU)',
        notesEn:
          'Tailored for LNG & petrochemical engineers in Kidurong, Parkcity Commerce Square, Medan Jaya, and Samalaju.',
        notesMs:
          'Khusus untuk jurutera LNG & petrokimia di Kidurong, Parkcity Commerce Square, Medan Jaya, dan Samalaju.',
      },
      {
        code: 'SWK-05',
        nameEn: 'Sibu, Jaya Li Hua, Rejang Park, Kanowit & Kapit',
        nameMs: 'Sibu, Jaya Li Hua, Taman Rejang, Kanowit & Kapit',
        postcodes: '96000–96800',
        etaEn: '2–4 Business Days via Sibu Airport (SBW) Hub',
        etaMs: '2–4 Hari Bekerja melalui Hab Lapangan Terbang Sibu (SBW)',
        notesEn:
          'Serves central Sarawak timber, maritime, and business leaders in Sibu town center, Delta Mall corridor, and Sarikei.',
        notesMs:
          'Meliputi usahawan maritim, pembalakan, dan penduduk di pusat bandar Sibu, Tanjung Manis, Sarikei, dan Kapit.',
      },
      {
        code: 'SWK-06',
        nameEn: 'Sri Aman, Betong, Sarikei, Mukah, Lawas & Limbang',
        nameMs: 'Sri Aman, Betong, Sarikei, Mukah, Lawas & Limbang',
        postcodes: '95000–98850',
        etaEn: '3–4 Business Days via Pan-Borneo Regional Express Link',
        etaMs: '3–4 Hari Bekerja melalui Rangkaian Ekspres Lebuhraya Pan-Borneo',
        notesEn:
          'Complete statewide delivery across Pan-Borneo highway towns and northern Sarawak enclaves of Limbang and Lawas.',
        notesMs:
          'Liputan menyeluruh ke bandar-bandar utama jajaran Lebuhraya Pan-Borneo termasuk Mukah, Betong, Limbang, dan Lawas.',
      },
    ],
  },
  {
    microStepEn: 'MS-141',
    microStepMs: 'MS-141',
    hubCode: 'MY-02 · KEDAH & LANGKAWI HUB',
    slug: 'kedah',
    schemaKey: 'kedah',
    watermark: 'KEDAH',
    canonicalEnPath: '/malaysia/kedah/',
    canonicalMsPath: '/ms/malaysia/kedah/',
    enOutputPaths: [
      'malaysia/kedah/index.html',
      'malaysia-delivery/kedah/index.html',
      'malaysia-delivery/kedah-alor-setar/index.html',
    ],
    msOutputPaths: [
      'ms/malaysia/kedah/index.html',
      'ms/penghantaran-malaysia/kedah/index.html',
      'ms/penghantaran-malaysia/kedah-alor-setar/index.html',
    ],
    nameEn: 'Kedah (Alor Setar, Sungai Petani, Kulim, Jitra & Langkawi)',
    nameMs: 'Kedah Darul Aman (Alor Setar, Sungai Petani, Kulim, Jitra & Pulau Langkawi)',
    shortNameEn: 'Kedah',
    shortNameMs: 'Kedah',
    capitalOrCenter: 'Alor Setar / Sungai Petani / Kulim Hi-Tech / Langkawi',
    zoneCode: 'WEST_MALAYSIA_NORTHERN_EXPRESS',
    postalCodeRange: '05000–09800',
    transitWindowEn: '1–2 Business Days Mainland Kedah · 2–3 Business Days Langkawi Island (RM 0 Free Express)',
    transitWindowMs: '1–2 Hari Bekerja Tanah Besar Kedah · 2–3 Hari Bekerja Pulau Langkawi (Ekspres Percuma RM 0)',
    shippingPolicyEn: 'RM 0 FREE Express Discreet Shipping on ALL Tiers (1 Bottle RM 159 · 2 Bottles RM 318 · 3 Bottles RM 477)',
    shippingPolicyMs: 'RM 0 Penghantaran Ekspres Rahsia PERCUMA untuk SEMUA Pakej (1 Botol RM 159 · 2 Botol RM 318 · 3 Botol RM 477)',
    sameDayRunnerAvailable: false,
    codSupported: true,
    fpxSupported: true,
    primaryProductSlug: 'grow-xl',
    secondaryProductSlug: 'horsemen',
    heroVisualWebp: '/assets/products/grow-xl-stage.webp',
    heroVisualPng: '/assets/products/grow-xl-stage.png',
    couriers: [
      'J&T Express VIP Northern Corridor',
      'NinjaVan Malaysia Discreet Kedah',
      'PosLaju Priority Mainland & Langkawi Air/Ferry',
    ],
    seoTitleEn:
      'Discreet Express Delivery in Kedah (Alor Setar, Sungai Petani, Kulim, Jitra & Langkawi) — RM 159 | Onyxmen',
    seoDescEn:
      'Order authentic Onyxmen men’s supplements (RM 159) with free 1–2 day discreet shipping across Kedah: Alor Setar, Sungai Petani, Kulim Hi-Tech, Jitra & Langkawi Island. COD & DuitNow QR accepted.',
    seoTitleMs:
      'Penghantaran Rahsia Ekspres di Kedah (Alor Setar, Sungai Petani, Kulim, Jitra & Langkawi) — RM 159 | Onyxmen',
    seoDescMs:
      'Tempah suplemen lelaki tulen Onyxmen (RM 159) dengan penghantaran rahsia percuma 1–2 hari ke Alor Setar, Sungai Petani, Kulim Hi-Tech, Jitra & Pulau Langkawi. Sokongan COD & DuitNow QR.',
    kickerEn: 'NORTHERN PENINSULAR CORRIDOR · ALOR SETAR · SUNGAI PETANI · KULIM HI-TECH · LANGKAWI',
    kickerMs: 'KORIDOR UTARA SEMENANJUNG · ALOR SETAR · SUNGAI PETANI · KULIM · PULAU LANGKAWI',
    headlineEn:
      'Kedah &amp; Langkawi Discreet Apothecary Dispatch: <span class="foil-champagne-text">Alor Setar, Sungai Petani &amp; Kulim.</span>',
    headlineMs:
      'Penghantaran Ekspres Rahsia Kedah &amp; Langkawi: <span class="foil-champagne-text">Alor Setar, Sungai Petani &amp; Kulim.</span>',
    leadEn:
      'Dispatched overnight from our Kuala Lumpur central vault up the North-South Expressway (PLUS E1) to Kulim Hi-Tech Park, Sungai Petani, Gurun, Alor Setar, Jitra, Changlun, and across to duty-free Langkawi Island. Every Kedah order ships 100% FREE (RM 0 shipping fee even on a single RM 159 bottle) inside an unmarked matte security pouch with full Cash on Delivery (COD) and DuitNow QR / FPX support.',
    leadMs:
      'Dihantar setiap malam dari hab utama Kuala Lumpur melalui Lebuhraya Utara-Selatan (PLUS E1) terus ke Taman Teknologi Tinggi Kulim, Sungai Petani, Gurun, Alor Setar, Jitra, Changlun, serta Pulau Langkawi. Setiap pesanan ke Kedah menikmati Penghantaran Ekspres PERCUMA (RM 0 walaupun untuk 1 botol RM 159) di dalam bungkusan keselamatan legap bersama pilihan COD dan DuitNow QR / FPX.',
    customsProtocolEn:
      'Mainland Kedah & Langkawi Island Seamless Fulfilment: Mainland postcodes (05000–09800) arrive within 24–48 hours via overnight highway linehaul, while Langkawi Island (07000 Kuah, Pantai Cenang, Padang Matsirat) is routed via PosLaju Priority Air/Ro-Ro links at RM 0 surcharge.',
    customsProtocolMs:
      'Liputan Tanah Besar Kedah & Pulau Langkawi Tanpa Caj Tambahan: Poskod tanah besar Kedah menerima bungkusan dalam 24–48 jam, manakala Pulau Langkawi (07000 Kuah, Pantai Cenang, Padang Matsirat) dihantar melalui laluan ekspres keutamaan tanpa sebarang caj tambahan (RM 0).',
    districts: [
      {
        code: 'KDH-01',
        nameEn: 'Alor Setar (Aman Central, Mergong, Anak Bukit, Tandop & Kuala Kedah)',
        nameMs: 'Bandaraya Alor Setar (Aman Central, Mergong, Anak Bukit, Tandop & Kuala Kedah)',
        postcodes: '05000–06600',
        etaEn: '1–2 Business Days via Alor Setar Northern Sortation Center',
        etaMs: '1–2 Hari Bekerja melalui Pusat Pengagihan Utara Alor Setar',
        notesEn:
          'Fast unmarked handover to government offices in Anak Bukit, commercial lots in Mergong/Tandop, and residential estates across Alor Setar.',
        notesMs:
          'Penghantaran pantas tanpa nama produk ke pejabat kerajaan di Anak Bukit, kawasan komersial Mergong/Tandop, dan taman perumahan di Alor Setar.',
      },
      {
        code: 'KDH-02',
        nameEn: 'Sungai Petani (Amanjaya, Bakar Arang, Lagenda Heights, Bedong & Gurun)',
        nameMs: 'Sungai Petani (Bandar Amanjaya, Bakar Arang, Lagenda Heights, Bedong & Gurun)',
        postcodes: '08000–08800',
        etaEn: '1–2 Business Days via Kuala Muda Highway Hub',
        etaMs: '1–2 Hari Bekerja melalui Hab Lebuhraya Kuala Muda',
        notesEn:
          'Kedah’s largest urban population center; full COD and DuitNow QR coverage across Bandar Puteri Jaya, Amanjaya, and Lagenda Heights.',
        notesMs:
          'Pusat populasi terbesar di Kedah; liputan penuh COD dan DuitNow QR di Bandar Puteri Jaya, Amanjaya, dan Lagenda Heights.',
      },
      {
        code: 'KDH-03',
        nameEn: 'Kulim, Kulim Hi-Tech Park (KHTP), Lunas & Padang Serai',
        nameMs: 'Kulim, Taman Teknologi Tinggi Kulim (KHTP), Lunas & Padang Serai',
        postcodes: '09000–09600',
        etaEn: '1 Business Day (24–36 Hours) via Penang/Butterworth Cross-Hub',
        etaMs: '1 Hari Bekerja (24–36 Jam) melalui Hab Bersepadu Seberang Perai/Kulim',
        notesEn:
          'Preferred by semiconductor & manufacturing engineers in Kulim Hi-Tech Park seeking caffeine-free evening stamina and gym recovery.',
        notesMs:
          'Menjadi pilihan jurutera semikonduktor & pembuatan di Kulim Hi-Tech Park untuk sokongan stamina malam bebas kafein.',
      },
      {
        code: 'KDH-04',
        nameEn: 'Jitra, Kubang Pasu, Changlun, Sintok & Bukit Kayu Hitam',
        nameMs: 'Jitra, Kubang Pasu, Changlun, Sintok & Bukit Kayu Hitam',
        postcodes: '06000–06050',
        etaEn: '1–2 Business Days via Northern Highway Terminal',
        etaMs: '1–2 Hari Bekerja melalui Terminal Lebuhraya Utara',
        notesEn:
          'Covers Bandar Darulaman Jitra, Changlun logistics corridor, Sintok academic community, and border trade zones.',
        notesMs:
          'Meliputi Bandar Darulaman Jitra, koridor logistik Changlun, Sintok, dan kawasan sempadan Bukit Kayu Hitam.',
      },
      {
        code: 'KDH-05',
        nameEn: 'Langkawi Island (Kuah, Pantai Cenang, Padang Matsirat & Ayer Hangat)',
        nameMs: 'Pulau Langkawi (Kuah, Pantai Cenang, Padang Matsirat & Ayer Hangat)',
        postcodes: '07000',
        etaEn: '2–3 Business Days via Priority Langkawi Island Express',
        etaMs: '2–3 Hari Bekerja melalui Ekspres Keutamaan Pulau Langkawi',
        notesEn:
          'Discreet delivery to luxury resort managers, yacht crews, business owners, and residents across Kuah and Pantai Cenang with RM 0 shipping.',
        notesMs:
          'Penghantaran rahsia kepada pengurus resort, kru maritim, usahawan, dan penduduk di Kuah serta Pantai Cenang secara percuma (RM 0).',
      },
      {
        code: 'KDH-06',
        nameEn: 'Baling, Kuala Ketil, Pendang, Sik, Yan & Pokok Sena',
        nameMs: 'Baling, Kuala Ketil, Pendang, Sik, Yan & Pokok Sena',
        postcodes: '06400–09300',
        etaEn: '2 Business Days via Interior Kedah Courier Route',
        etaMs: '2 Hari Bekerja melalui Laluan Kurier Daerah Kedah',
        notesEn:
          '100% postcode coverage across all agricultural, industrial, and residential districts of Kedah Darul Aman.',
        notesMs:
          'Liputan 100% poskod merangkumi semua daerah perindustrian, pertanian, dan perumahan di Kedah Darul Aman.',
      },
    ],
  },
  {
    microStepEn: 'MS-142',
    microStepMs: 'MS-142',
    hubCode: 'MY-03 · KELANTAN EAST COAST HUB',
    slug: 'kelantan',
    schemaKey: 'kelantan',
    watermark: 'KELANTAN',
    canonicalEnPath: '/malaysia/kelantan/',
    canonicalMsPath: '/ms/malaysia/kelantan/',
    enOutputPaths: [
      'malaysia/kelantan/index.html',
      'malaysia-delivery/kelantan/index.html',
      'malaysia-delivery/kelantan-kota-bharu/index.html',
    ],
    msOutputPaths: [
      'ms/malaysia/kelantan/index.html',
      'ms/penghantaran-malaysia/kelantan/index.html',
      'ms/penghantaran-malaysia/kelantan-kota-bharu/index.html',
    ],
    nameEn: 'Kelantan (Kota Bharu, Kubang Kerian, Pasir Mas, Tanah Merah & Machang)',
    nameMs: 'Kelantan Darul Naim (Kota Bharu, Kubang Kerian, Pasir Mas, Tanah Merah & Machang)',
    shortNameEn: 'Kelantan',
    shortNameMs: 'Kelantan',
    capitalOrCenter: 'Kota Bharu / Kubang Kerian / Pengkalan Chepa / Tanah Merah',
    zoneCode: 'WEST_MALAYSIA_EAST_COAST_EXPRESS',
    postalCodeRange: '15000–18500',
    transitWindowEn: '1–2 Business Days (Free Overnight East Coast Express Courier — RM 0)',
    transitWindowMs: '1–2 Hari Bekerja (Kurier Ekspres Malam Pantai Timur Percuma — RM 0)',
    shippingPolicyEn: 'RM 0 FREE Express Discreet Shipping on ALL Tiers (1 Bottle RM 159 · 2 Bottles RM 318 · 3 Bottles RM 477)',
    shippingPolicyMs: 'RM 0 Penghantaran Ekspres Rahsia PERCUMA untuk SEMUA Pakej (1 Botol RM 159 · 2 Botol RM 318 · 3 Botol RM 477)',
    sameDayRunnerAvailable: false,
    codSupported: true,
    fpxSupported: true,
    primaryProductSlug: 'horsemen',
    secondaryProductSlug: 'hammer-of-thor',
    heroVisualWebp: '/assets/products/horsemen-stage.webp',
    heroVisualPng: '/assets/products/horsemen-stage.png',
    couriers: [
      'J&T Express VIP Kota Bharu Linehaul',
      'PosLaju Priority Kelantan Darul Naim',
      'NinjaVan Malaysia Discreet East Coast',
    ],
    seoTitleEn:
      'Discreet Express Delivery in Kelantan (Kota Bharu, Kubang Kerian, Pasir Mas, Tanah Merah) — RM 159 | Onyxmen',
    seoDescEn:
      'Free 1–2 day discreet shipping of authentic Onyxmen men’s supplements (RM 159) across Kelantan: Kota Bharu, Kubang Kerian, Pengkalan Chepa, Pasir Mas, Tanah Merah & Machang. COD & DuitNow QR accepted.',
    seoTitleMs:
      'Penghantaran Rahsia Ekspres di Kelantan (Kota Bharu, Kubang Kerian, Pasir Mas, Tanah Merah) — RM 159 | Onyxmen',
    seoDescMs:
      'Penghantaran rahsia percuma 1–2 hari suplemen lelaki tulen Onyxmen (RM 159) ke seluruh Kelantan: Kota Bharu, Kubang Kerian, Pasir Mas, Tanah Merah & Machang. Sokongan COD & DuitNow QR.',
    kickerEn: 'EAST COAST PRIVACY VAULT · KOTA BHARU · KUBANG KERIAN · PASIR MAS · TANAH MERAH',
    kickerMs: 'HUB PRIVASI PANTAI TIMUR · KOTA BHARU · KUBANG KERIAN · PASIR MAS · TANAH MERAH',
    headlineEn:
      'Kelantan &amp; Kota Bharu Discreet Apothecary Dispatch: <span class="foil-champagne-text">100% Unmarked &amp; COD Ready.</span>',
    headlineMs:
      'Penghantaran Ekspres Rahsia Kota Bharu &amp; Kelantan: <span class="foil-champagne-text">100% Tanpa Nama Produk &amp; Sokongan COD.</span>',
    leadEn:
      'Kelantan gentlemen place the highest premium on personal privacy, halal-conscious clean botanical ingredients, and Cash on Delivery (COD) reliability. Every Onyxmen order to Kota Bharu, Kubang Kerian, Wakaf Che Yeh, Pengkalan Chepa, Pasir Mas, Tanah Merah, Machang, and Gua Musang ships free (RM 0) inside a plain opaque security mailer labeled solely "OM Fulfilment Logistics".',
    leadMs:
      'Pelanggan lelaki dewasa di Kelantan amat mengutamakan kerahsiaan peribadi, ketulenan ekstrak herba botani (seperti Tongkat Ali & Maca Hitam), serta kemudahan Bayar Waktu Terima (COD). Setiap pesanan ke Kota Bharu, Kubang Kerian, Wakaf Che Yeh, Pengkalan Chepa, Pasir Mas, Tanah Merah, Machang, dan Gua Musang dihantar secara percuma (RM 0) di dalam bungkusan legap yang hanya memaparkan "OM Fulfilment Logistics".',
    customsProtocolEn:
      'Uncompromising Neighbourhood & Family Privacy in Kelantan: Whether delivered to a family home in Pasir Mas, a medical/university office in Kubang Kerian, or a retail business in Kota Bharu, nobody handling the outer parcel can identify the contents.',
    customsProtocolMs:
      'Jaminan Privasi Keluarga & Kejiranan di Kelantan: Sama ada dihantar ke kediaman keluarga di Pasir Mas, pejabat profesional di Kubang Kerian, atau premis perniagaan di Kota Bharu, tiada sesiapa yang melihat bungkusan luar dapat mengetahui kandungannya.',
    districts: [
      {
        code: 'KTN-01',
        nameEn: 'Kota Bharu Metro (Bandar Kota Bharu, Wakaf Che Yeh, Lembah Sireh & Tunjong)',
        nameMs: 'Bandar Kota Bharu (Pusat Bandar KB, Wakaf Che Yeh, Lembah Sireh & Bandar Baru Tunjong)',
        postcodes: '15000–15400',
        etaEn: '1–2 Business Days via Pengkalan Chepa / KB Central Hub',
        etaMs: '1–2 Hari Bekerja melalui Hab Utama Pengkalan Chepa / KB',
        notesEn:
          'Fast daily courier rounds across Lembah Sireh, AEON Mall KB corridor, Wakaf Che Yeh, and Bandar Baru Tunjong with COD & DuitNow QR.',
        notesMs:
          'Penghantaran kurier harian ke Lembah Sireh, koridor AEON Mall KB, Wakaf Che Yeh, dan Bandar Baru Tunjong dengan sokongan COD & DuitNow QR.',
      },
      {
        code: 'KTN-02',
        nameEn: 'Kubang Kerian & Pengkalan Chepa (USM Health Campus & Airport Zone)',
        nameMs: 'Kubang Kerian & Pengkalan Chepa (Zon Kampus Kesihatan & Lapangan Terbang)',
        postcodes: '16100, 16150',
        etaEn: '1–2 Business Days via Kota Bharu East Hub',
        etaMs: '1–2 Hari Bekerja melalui Hab Timur Kota Bharu',
        notesEn:
          'Discreet unmarked delivery for healthcare professionals, lecturers, executives, and residents in Bandar Baru Kubang Kerian and Pengkalan Chepa.',
        notesMs:
          'Bungkusan rahsia untuk golongan profesional kesihatan, pensyarah, eksekutif, dan penduduk di Bandar Baru Kubang Kerian serta Pengkalan Chepa.',
      },
      {
        code: 'KTN-03',
        nameEn: 'Pasir Mas, Wakaf Bharu, Tumpat & Rantau Panjang',
        nameMs: 'Pasir Mas, Wakaf Bharu, Tumpat & Rantau Panjang',
        postcodes: '16040, 16200, 17000–17200',
        etaEn: '1–2 Business Days via West Kelantan Distribution Line',
        etaMs: '1–2 Hari Bekerja melalui Rangkaian Pengagihan Barat Kelantan',
        notesEn:
          'Full COD coverage across Bandar Pasir Mas, Lubok Jong, Wakaf Bharu, and Tumpat coastal townships.',
        notesMs:
          'Liputan penuh COD merangkumi Bandar Pasir Mas, Bandar Baru Lubok Jong, Wakaf Bharu, dan jajahan Tumpat.',
      },
      {
        code: 'KTN-04',
        nameEn: 'Tanah Merah, Machang & Jeli',
        nameMs: 'Tanah Merah, Machang & Jeli',
        postcodes: '17500, 17600, 18500',
        etaEn: '1–2 Business Days via Central Kelantan Highway Hub',
        etaMs: '1–2 Hari Bekerja melalui Hab Lebuhraya Tengah Kelantan',
        notesEn:
          'Serves central Kelantan commerce hubs in Tanah Merah town, Machang, and East-West Highway gateway Jeli.',
        notesMs:
          'Meliputi pusat perniagaan utama di bandar Tanah Merah, Machang, serta pintu masuk Lebuhraya Timur-Barat di Jeli.',
      },
      {
        code: 'KTN-05',
        nameEn: 'Bachok, Pasir Puteh, Tok Bali & Kok Lanas',
        nameMs: 'Bachok, Pasir Puteh, Tok Bali & Kok Lanas',
        postcodes: '16300, 16450, 16800',
        etaEn: '1–2 Business Days via South-East Kelantan Feeder',
        etaMs: '1–2 Hari Bekerja melalui Laluan Tenggara Kelantan',
        notesEn:
          'Covers Kok Lanas commercial township, Bachok, Pasir Puteh, and Tok Bali offshore supply base personnel.',
        notesMs:
          'Meliputi perbandaran Kok Lanas, Bachok, Pasir Puteh, dan kakitangan pangkalan bekalan maritim di Tok Bali.',
      },
      {
        code: 'KTN-06',
        nameEn: 'Kuala Krai, Dabong & Gua Musang (Southern Kelantan Gateway)',
        nameMs: 'Kuala Krai, Dabong & Gua Musang (Gerbang Selatan Kelantan)',
        postcodes: '18000–18300',
        etaEn: '1–2 Business Days via CSR Central Spine Express Route',
        etaMs: '1–2 Hari Bekerja melalui Laluan Ekspres Central Spine Road (CSR)',
        notesEn:
          'Direct overnight highway link from Kuala Lumpur through Bentong/Raub straight into Bandar Baru Gua Musang and Kuala Krai.',
        notesMs:
          'Laluan ekspres terus dari Kuala Lumpur melalui CSR terus ke Bandar Baru Gua Musang dan Kuala Krai.',
      },
    ],
  },
  {
    microStepEn: 'MS-143',
    microStepMs: 'MS-143',
    hubCode: 'MY-11 · TERENGGANU LPT2 EXPRESS HUB',
    slug: 'terengganu',
    schemaKey: 'terengganu',
    watermark: 'TERENGGANU',
    canonicalEnPath: '/malaysia/terengganu/',
    canonicalMsPath: '/ms/malaysia/terengganu/',
    enOutputPaths: [
      'malaysia/terengganu/index.html',
      'malaysia-delivery/terengganu/index.html',
      'malaysia-delivery/terengganu-kuala-terengganu/index.html',
    ],
    msOutputPaths: [
      'ms/malaysia/terengganu/index.html',
      'ms/penghantaran-malaysia/terengganu/index.html',
      'ms/penghantaran-malaysia/terengganu-kuala-terengganu/index.html',
    ],
    nameEn: 'Terengganu (Kuala Terengganu, Gong Badak, Kemaman, Chukai & Dungun)',
    nameMs: 'Terengganu Darul Iman (Kuala Terengganu, Gong Badak, Kemaman, Chukai & Dungun)',
    shortNameEn: 'Terengganu',
    shortNameMs: 'Terengganu',
    capitalOrCenter: 'Kuala Terengganu / Gong Badak / Kemaman (Chukai & Kerteh) / Dungun',
    zoneCode: 'WEST_MALAYSIA_EAST_COAST_EXPRESS',
    postalCodeRange: '20000–24300',
    transitWindowEn: '1–2 Business Days (Free LPT2 East Coast Expressway Courier — RM 0)',
    transitWindowMs: '1–2 Hari Bekerja (Kurier Ekspres Lebuhraya Pantai Timur LPT2 Percuma — RM 0)',
    shippingPolicyEn: 'RM 0 FREE Express Discreet Shipping on ALL Tiers (1 Bottle RM 159 · 2 Bottles RM 318 · 3 Bottles RM 477)',
    shippingPolicyMs: 'RM 0 Penghantaran Ekspres Rahsia PERCUMA untuk SEMUA Pakej (1 Botol RM 159 · 2 Botol RM 318 · 3 Botol RM 477)',
    sameDayRunnerAvailable: false,
    codSupported: true,
    fpxSupported: true,
    primaryProductSlug: 'magnum-pump-xr',
    secondaryProductSlug: 'horsemen',
    heroVisualWebp: '/assets/products/magnum-pump-xr-stage.webp',
    heroVisualPng: '/assets/products/magnum-pump-xr-stage.png',
    couriers: [
      'J&T Express VIP LPT2 Linehaul',
      'PosLaju Priority Terengganu Darul Iman',
      'NinjaVan Malaysia Discreet East Coast',
    ],
    seoTitleEn:
      'Discreet Express Delivery in Terengganu (Kuala Terengganu, Gong Badak, Kemaman, Chukai, Dungun) — RM 159 | Onyxmen',
    seoDescEn:
      'Free 1–2 day discreet shipping of authentic Onyxmen men’s supplements (RM 159) across Terengganu: Kuala Terengganu, Gong Badak, Kemaman, Chukai, Kerteh, Paka & Dungun. COD & DuitNow QR supported.',
    seoTitleMs:
      'Penghantaran Rahsia Ekspres di Terengganu (Kuala Terengganu, Gong Badak, Kemaman, Chukai, Dungun) — RM 159 | Onyxmen',
    seoDescMs:
      'Penghantaran rahsia percuma 1–2 hari suplemen lelaki tulen Onyxmen (RM 159) ke seluruh Terengganu: Kuala Terengganu, Gong Badak, Kemaman, Chukai, Kerteh, Paka & Dungun. Sokongan COD & DuitNow QR.',
    kickerEn: 'LPT2 EAST COAST EXPRESSWAY CORRIDOR · KUALA TERENGGANU · GONG BADAK · KEMAMAN · DUNGUN',
    kickerMs: 'KORIDOR LEBUHRAYA PANTAI TIMUR LPT2 · KUALA TERENGGANU · GONG BADAK · KEMAMAN · DUNGUN',
    headlineEn:
      'Terengganu Discreet Apothecary Dispatch: <span class="foil-champagne-text">Kuala Terengganu, Kemaman &amp; Dungun.</span>',
    headlineMs:
      'Penghantaran Ekspres Rahsia Terengganu: <span class="foil-champagne-text">Kuala Terengganu, Kemaman &amp; Dungun.</span>',
    leadEn:
      'Connected directly to our Kuala Lumpur vault via the Karak and LPT1/LPT2 East Coast Expressways, Terengganu orders reach Chukai (Kemaman), Kerteh, Paka, Dungun, Marang, Kuala Terengganu, Gong Badak, and Besut within 1–2 business days at RM 0 shipping. Important disambiguation for Kerteh, Paka, and Kemaman petrochemical engineers: Magnum Pump XR is strictly our 30-Black-Capsule Nitric Oxide & Tongkat Ali Dietary Supplement (RM 159) for personal male stamina—never an industrial fluid pump.',
    leadMs:
      'Dihubungkan terus dari hab Kuala Lumpur kami melalui Lebuhraya Karak dan LPT1/LPT2, pesanan pelanggan di Chukai (Kemaman), Kerteh, Paka, Dungun, Marang, Kuala Terengganu, Gong Badak, dan Besut tiba dalam 1–2 hari bekerja secara percuma (RM 0). Penjelasan khas buat warga industri minyak & gas di Kerteh, Paka, dan Kemaman: Magnum Pump XR ialah Suplemen Kapsul Pemakanan Asid Amino & Nitrik Oksida 30 Kapsul Hitam (RM 159) untuk kecergasan lelaki dewasa—bukan peralatan pam industri.',
    customsProtocolEn:
      'Offshore Crew & Shift-Rotation Friendly Dispatch: For offshore engineers rotating through Kerteh Airport or Kemaman Supply Base (KSB), we support exact date-window coordination and COD or prepaid FPX drop-offs to residential quarters or trusted collection points.',
    customsProtocolMs:
      'Penghantaran Mesra Kakitangan Syif & Luar Pesisir (Offshore): Buat jurutera dan kakitangan yang beroperasi di Kerteh atau Pangkalan Bekalan Kemaman (KSB), bungkusan legap kami boleh dihantar melalui COD atau prabayar FPX terus ke kediaman atau pusat pungutan pilihan.',
    districts: [
      {
        code: 'TRG-01',
        nameEn: 'Kuala Terengganu City (Bandaraya KT, Batu Burok, Ladang, Chendering & Chabang Tiga)',
        nameMs: 'Bandaraya Kuala Terengganu (Pusat Bandar KT, Batu Burok, Ladang, Chendering & Chabang Tiga)',
        postcodes: '20000–21100',
        etaEn: '1–2 Business Days via Kuala Terengganu Central Hub',
        etaMs: '1–2 Hari Bekerja melalui Hab Utama Kuala Terengganu',
        notesEn:
          'Rapid unmarked parcel delivery across KT City Centre, KTCC Mall surroundings, Batu Burok, and Chendering industrial area.',
        notesMs:
          'Penghantaran bungkusan rahsia ke Pusat Bandar KT, kawasan sekitar KTCC, Batu Burok, dan kawasan perindustrian Chendering.',
      },
      {
        code: 'TRG-02',
        nameEn: 'Gong Badak, Kuala Nerus, Seberang Takir & Batu Rakit',
        nameMs: 'Gong Badak, Kuala Nerus, Seberang Takir & Batu Rakit',
        postcodes: '21020, 21030, 21300',
        etaEn: '1–2 Business Days via Kuala Nerus Express Depot',
        etaMs: '1–2 Hari Bekerja melalui Depoh Ekspres Kuala Nerus',
        notesEn:
          'Covers Gong Badak commercial center, Rimba Square, Sultan Mahmud Airport corridor, and university/medical townships.',
        notesMs:
          'Meliputi pusat komersial Gong Badak, Dataran Austin, koridor lapangan terbang, serta perbandaran Kuala Nerus.',
      },
      {
        code: 'TRG-03',
        nameEn: 'Kemaman, Chukai, Kerteh, Kijal & Kemasik (Southern Energy Corridor)',
        nameMs: 'Kemaman, Chukai, Kerteh, Kijal & Kemasik (Koridor Tenaga Selatan)',
        postcodes: '24000–24300',
        etaEn: '1 Business Day (24–36 Hours) via LPT2 Chukai / Kerteh Exit',
        etaMs: '1 Hari Bekerja (24–36 Jam) melalui Susur Keluar LPT2 Chukai / Kerteh',
        notesEn:
          'Closest Terengganu district to Kuala Lumpur (~3 hours via LPT); overnight delivery to Chukai town, Kerteh Rantau Petronas, and KSB.',
        notesMs:
          'Daerah Terengganu paling hampir dengan KL (~3 jam melalui LPT); penghantaran semalaman ke bandar Chukai, Rantau Petronas Kerteh, dan KSB.',
      },
      {
        code: 'TRG-04',
        nameEn: 'Dungun, Paka, Sura Gate & Bukit Besi',
        nameMs: 'Dungun, Paka, Sura Gate & Bukit Besi',
        postcodes: '23000–23400',
        etaEn: '1–2 Business Days via Dungun / Paka Highway Hub',
        etaMs: '1–2 Hari Bekerja melalui Hab Lebuhraya Dungun / Paka',
        notesEn:
          'High order volume for Magnum Pump XR and Horsemen among Paka petrochemical complexes and Dungun coastal residences.',
        notesMs:
          'Permintaan tinggi untuk Magnum Pump XR dan Horsemen di kalangan warga kompleks petrokimia Paka dan kediaman sekitar Dungun.',
      },
      {
        code: 'TRG-05',
        nameEn: 'Marang, Wakaf Tapai, Ajil & Kuala Berang (Hulu Terengganu)',
        nameMs: 'Marang, Wakaf Tapai, Ajil & Kuala Berang (Hulu Terengganu)',
        postcodes: '21400–21800',
        etaEn: '1–2 Business Days via Ajil LPT2 Interchange Hub',
        etaMs: '1–2 Hari Bekerja melalui Hab Persimpangan LPT2 Ajil',
        notesEn:
          'Direct coverage across Marang coastal town, Wakaf Tapai, and Kuala Berang interior townships with full COD.',
        notesMs:
          'Liputan terus ke bandar Marang, Wakaf Tapai, dan Kuala Berang di Hulu Terengganu dengan perkhidmatan COD.',
      },
      {
        code: 'TRG-06',
        nameEn: 'Besut, Jerteh, Kampung Raja, Kuala Besut & Setiu (Bandar Permaisuri)',
        nameMs: 'Besut, Jerteh, Kampung Raja, Kuala Besut & Setiu (Bandar Permaisuri)',
        postcodes: '22000–22300',
        etaEn: '1–2 Business Days via Northern Terengganu Express Link',
        etaMs: '1–2 Hari Bekerja melalui Laluan Ekspres Utara Terengganu',
        notesEn:
          'Serves Jerteh commercial center, Kampung Raja administrative hub, Kuala Besut, and Setiu.',
        notesMs:
          'Meliputi pusat perniagaan Jerteh, pusat pentadbiran Kampung Raja, Kuala Besut, dan Bandar Permaisuri Setiu.',
      },
    ],
  },
  {
    microStepEn: 'MS-144',
    microStepMs: 'MS-144',
    hubCode: 'MY-16 · PUTRAJAYA SAME-DAY VIP HUB',
    slug: 'putrajaya',
    schemaKey: 'putrajaya',
    watermark: 'PUTRAJAYA',
    canonicalEnPath: '/malaysia/putrajaya/',
    canonicalMsPath: '/ms/malaysia/putrajaya/',
    enOutputPaths: [
      'malaysia/putrajaya/index.html',
      'malaysia-delivery/putrajaya/index.html',
    ],
    msOutputPaths: [
      'ms/malaysia/putrajaya/index.html',
      'ms/penghantaran-malaysia/putrajaya/index.html',
    ],
    nameEn: 'Putrajaya (Precincts 1–20 Federal Administrative Centre & IOI Resort City)',
    nameMs: 'Wilayah Persekutuan Putrajaya (Presint 1–20 Pusat Pentadbiran Kerajaan Persekutuan)',
    shortNameEn: 'Putrajaya',
    shortNameMs: 'Putrajaya',
    capitalOrCenter: 'Precinct 1–5 Core Island / Precinct 8–16 Residential & Diplomatic / IOI Resort City',
    zoneCode: 'KLANG_VALLEY_SAMEDAY_VIP',
    postalCodeRange: '62000–62988',
    transitWindowEn: '3–5 Hour Same-Day Discreet Private Runner (+RM 15) OR Free 1-Business-Day Express Courier (RM 0)',
    transitWindowMs: 'Penghantar Persendirian Hari Sama 3–5 Jam (+RM 15) ATAU Kurier Ekspres 1 Hari Bekerja Percuma (RM 0)',
    shippingPolicyEn: 'RM 0 FREE Next-Day Express Courier on ALL Tiers · Optional +RM 15 Same-Day 3–5h Private Rider',
    shippingPolicyMs: 'RM 0 Kurier Ekspres Hari Esok PERCUMA untuk SEMUA Pakej · Pilihan +RM 15 Penghantar Hari Sama 3–5 Jam',
    sameDayRunnerAvailable: true,
    codSupported: true,
    fpxSupported: true,
    primaryProductSlug: 'horsemen',
    secondaryProductSlug: 'grow-xl',
    heroVisualWebp: '/assets/products/horsemen-stage.webp',
    heroVisualPng: '/assets/products/horsemen-stage.png',
    couriers: [
      'Onyxmen Private Klang Valley Discreet Rider (3–5 Hours)',
      'NinjaVan Malaysia Discreet VIP',
      'PosLaju Priority Putrajaya Sentral',
      'J&T Express VIP Klang Valley',
    ],
    seoTitleEn:
      'Same-Day 3–5h Discreet Delivery in Putrajaya (All Precincts 1–20) — RM 159 | Onyxmen Malaysia',
    seoDescEn:
      'Order authentic Onyxmen men’s vitality supplements (Horsemen, Hammer of Thor, Grow XL, Magnum Pump XR — RM 159) in Putrajaya with 3–5 hour same-day discreet runner or free next-day courier across Precincts 1–20.',
    seoTitleMs:
      'Penghantaran Rahsia Hari Sama 3–5 Jam di Putrajaya (Semua Presint 1–20) — RM 159 | Onyxmen Malaysia',
    seoDescMs:
      'Tempah suplemen kecergasan lelaki tulen Onyxmen (Horsemen, Hammer of Thor, Grow XL, Magnum Pump XR — RM 159) di Putrajaya dengan penghantar rahsia hari sama 3–5 jam atau kurier percuma 1 hari ke semua Presint 1–20.',
    kickerEn: 'FEDERAL ADMINISTRATIVE CENTRE · PRECINCTS 1 TO 20 · 3–5 HOUR SAME-DAY DISCREET RUNNER',
    kickerMs: 'WILAYAH PERSEKUTUAN PUTRAJAYA · PRESINT 1 HINGGA 20 · PENGHANTAR RAHSIA HARI SAMA 3–5 JAM',
    headlineEn:
      'Putrajaya Executive Discreet Dispatch: <span class="foil-champagne-text">3–5 Hour Same-Day Rider Across Precincts 1–20.</span>',
    headlineMs:
      'Penghantaran Eksekutif Rahsia Putrajaya: <span class="foil-champagne-text">Servis Hari Sama 3–5 Jam ke Presint 1–20.</span>',
    leadEn:
      'Senior civil servants, ministry directors, diplomatic personnel, and residents across Putrajaya Precincts 1 through 20 require absolute confidentiality. Orders confirmed before 16:00 MYT qualify for our 3–5 Hour Same-Day Private Discreet Runner (+RM 15) or Free Next-Day Express Courier (RM 0). Every parcel uses a plain matte security pouch with "OM Fulfilment Logistics" as the sender—and you may use your initials plus phone number on the label.',
    leadMs:
      'Pegawai kanan kerajaan, pengarah kementerian, kakitangan diplomatik, dan penduduk di Presint 1 hingga Presint 20 Putrajaya memerlukan tahap kerahsiaan tertinggi. Pesanan yang disahkan sebelum jam 4:00 petang layak memilih Penghantar Persendirian Hari Sama 3–5 Jam (+RM 15) atau Kurier Ekspres Hari Bekerja Berikutnya secara PERCUMA (RM 0). Anda juga dibenarkan menggunakan nama ringkas (initials) beserta nombor telefon pada label bungkusan.',
    customsProtocolEn:
      'Ministry Reception & Government Quarters Discretion Protocol: Our unmarked parcels look identical to standard corporate document or electronics deliveries, allowing seamless handover at Putrajaya Sentral, Precinct 1–5 lobby receptions, or Precinct 8–18 residential quarters.',
    customsProtocolMs:
      'Protokol Privasi Pejabat Kementerian & Kuarters Kediaman Putrajaya: Bungkusan legap kami kelihatan sama seperti bungkusan dokumen korporat atau barangan elektronik biasa, menjadikannya selamat diterima di lobi pejabat Presint 1–5 mahupun kuarters kediaman Presint 8–18.',
    districts: [
      {
        code: 'PJY-01',
        nameEn: 'Precinct 1, Precinct 2, Precinct 3 & Precinct 4 (Core Island Boulevard)',
        nameMs: 'Presint 1, Presint 2, Presint 3 & Presint 4 (Pulau Teras & Boulevard Utama)',
        postcodes: '62000–62100, 62502–62699',
        etaEn: '3–5 Hours Same-Day Private Rider OR 1 Business Day Free Courier',
        etaMs: '3–5 Jam Penghantar Persendirian Hari Sama ATAU 1 Hari Bekerja Kurier Percuma',
        notesEn:
          'Discreet telephone call upon arrival outside ministry complexes, Menara Usahawan, Suasana PjH, and Galeria PjH.',
        notesMs:
          'Panggilan telefon peribadi sebaik tiba di luar kompleks pejabat, Menara Usahawan, Suasana PjH, dan Galeria PjH.',
      },
      {
        code: 'PJY-02',
        nameEn: 'Precinct 5, Marina Putrajaya, PICC & Pullman Lakeside Corridor',
        nameMs: 'Presint 5, Marina Putrajaya, PICC & Koridor Tasik Selatan',
        postcodes: '62150, 62200',
        etaEn: '3–5 Hours Same-Day Private Rider OR 1 Business Day Free Courier',
        etaMs: '3–5 Jam Penghantar Persendirian Hari Sama ATAU 1 Hari Bekerja Kurier Percuma',
        notesEn:
          'Direct delivery to conference guests at PICC, DoubleTree by Hilton lakeside residences, and Precinct 5 apartments.',
        notesMs:
          'Penghantaran terus kepada tetamu persidangan di PICC, hotel tepi tasik, serta pangsapuri kediaman di Presint 5.',
      },
      {
        code: 'PJY-03',
        nameEn: 'Precinct 7, Putrajaya Sentral, Precinct 8, Precinct 9 & Precinct 10',
        nameMs: 'Presint 7, Putrajaya Sentral, Presint 8, Presint 9 & Presint 10',
        postcodes: '62250–62300',
        etaEn: '3–5 Hours Same-Day Private Rider OR 1 Business Day Free Courier',
        etaMs: '3–5 Jam Penghantar Persendirian Hari Sama ATAU 1 Hari Bekerja Kurier Percuma',
        notesEn:
          'High-density residential and medical zone; rapid delivery to Putrajaya Sentral transit hub, Ayer@8 waterfront, and Precinct 9/10 homes.',
        notesMs:
          'Zon kediaman dan perubatan utama; penghantaran pantas ke Putrajaya Sentral, Ayer@8 Presint 8, dan kediaman Presint 9/10.',
      },
      {
        code: 'PJY-04',
        nameEn: 'Precinct 11, Precinct 12 & Wetland Estates',
        nameMs: 'Presint 11, Presint 12 & Kawasan Kediaman Utara',
        postcodes: '62300',
        etaEn: '3–5 Hours Same-Day Private Rider OR 1 Business Day Free Courier',
        etaMs: '3–5 Jam Penghantar Persendirian Hari Sama ATAU 1 Hari Bekerja Kurier Percuma',
        notesEn:
          'Private landed residences and condominiums in Precinct 11 (Saujana Aster, Flora Rosa) with full COD and DuitNow QR.',
        notesMs:
          'Kediaman teres dan kondominium di Presint 11 (Saujana Aster, Flora Rosa) dengan sokongan penuh COD dan DuitNow QR.',
      },
      {
        code: 'PJY-05',
        nameEn: 'Precinct 14, Precinct 15 (Nadi 15 Diplomatic Enclave) & Precinct 16 (Alamanda)',
        nameMs: 'Presint 14, Presint 15 (Diplomatik Nadi 15) & Presint 16 (Alamanda)',
        postcodes: '62050, 62100',
        etaEn: '3–5 Hours Same-Day Private Rider OR 1 Business Day Free Courier',
        etaMs: '3–5 Jam Penghantar Persendirian Hari Sama ATAU 1 Hari Bekerja Kurier Percuma',
        notesEn:
          'Serves Nadi 15 Diplomatic commercial hub, Shaftsbury Putrajaya residences, Alamanda Mall corridor, and Precinct 14.',
        notesMs:
          'Meliputi pusat komersial Diplomatik Nadi 15, kediaman Shaftsbury Putrajaya, koridor Alamanda, dan Presint 14.',
      },
      {
        code: 'PJY-06',
        nameEn: 'Precinct 17, Precinct 18, Precinct 19, Precinct 20 & IOI Resort City',
        nameMs: 'Presint 17, Presint 18, Presint 19, Presint 20 & IOI Resort City',
        postcodes: '62100–62502',
        etaEn: '3–5 Hours Same-Day Private Rider OR 1 Business Day Free Courier',
        etaMs: '3–5 Jam Penghantar Persendirian Hari Sama ATAU 1 Hari Bekerja Kurier Percuma',
        notesEn:
          'Complete eastern and southern Putrajaya coverage including Conezion Residences, IOI City Towers, and Precinct 17/18.',
        notesMs:
          'Liputan penuh timur dan selatan Putrajaya termasuk Conezion Residences, Menara IOI City, dan Presint 17/18.',
      },
    ],
  },
  {
    microStepEn: 'MS-145',
    microStepMs: 'MS-145',
    hubCode: 'MY-10C · CYBERJAYA TECH CORRIDOR HUB',
    slug: 'cyberjaya',
    schemaKey: 'cyberjaya',
    watermark: 'CYBERJAYA',
    canonicalEnPath: '/malaysia/cyberjaya/',
    canonicalMsPath: '/ms/malaysia/cyberjaya/',
    enOutputPaths: [
      'malaysia/cyberjaya/index.html',
      'malaysia-delivery/cyberjaya/index.html',
    ],
    msOutputPaths: [
      'ms/malaysia/cyberjaya/index.html',
      'ms/penghantaran-malaysia/cyberjaya/index.html',
    ],
    nameEn: 'Cyberjaya (Tamarind Square, Shaftsbury, Setia Eco Glades & MSC Tech Hub)',
    nameMs: 'Cyberjaya (Tamarind Square, Shaftsbury, Setia Eco Glades & Hab Teknologi MSC)',
    shortNameEn: 'Cyberjaya',
    shortNameMs: 'Cyberjaya',
    capitalOrCenter: 'Cyberjaya Flagship Zone / Tamarind Square / DPULZE / Setia Eco Glades',
    zoneCode: 'KLANG_VALLEY_SAMEDAY_VIP',
    postalCodeRange: '63000–63300',
    transitWindowEn: '3–5 Hour Same-Day Discreet Private Runner (+RM 15) OR Free 1-Business-Day Express Courier (RM 0)',
    transitWindowMs: 'Penghantar Persendirian Hari Sama 3–5 Jam (+RM 15) ATAU Kurier Ekspres 1 Hari Bekerja Percuma (RM 0)',
    shippingPolicyEn: 'RM 0 FREE Next-Day Express Courier on ALL Tiers · Optional +RM 15 Same-Day 3–5h Private Rider',
    shippingPolicyMs: 'RM 0 Kurier Ekspres Hari Esok PERCUMA untuk SEMUA Pakej · Pilihan +RM 15 Penghantar Hari Sama 3–5 Jam',
    sameDayRunnerAvailable: true,
    codSupported: true,
    fpxSupported: true,
    primaryProductSlug: 'magnum-pump-xr',
    secondaryProductSlug: 'horsemen',
    heroVisualWebp: '/assets/products/magnum-pump-xr-stage.webp',
    heroVisualPng: '/assets/products/magnum-pump-xr-stage.png',
    couriers: [
      'Onyxmen Private Klang Valley Discreet Rider (3–5 Hours)',
      'NinjaVan Malaysia Discreet Parcel Locker & Guardhouse',
      'J&T Express VIP Cyberjaya Hub',
      'PosLaju Priority Sepang/Cyberjaya',
    ],
    seoTitleEn:
      'Same-Day 3–5h Discreet Delivery in Cyberjaya (Tamarind Square, Setia Eco Glades, DPULZE) — RM 159 | Onyxmen',
    seoDescEn:
      'Order authentic Onyxmen men’s supplements (Horsemen, Hammer of Thor, Grow XL, Magnum Pump XR — RM 159) in Cyberjaya with 3–5 hour same-day discreet runner or free next-day courier. Condo parcel locker & guardhouse friendly.',
    seoTitleMs:
      'Penghantaran Rahsia Hari Sama 3–5 Jam di Cyberjaya (Tamarind Square, Setia Eco Glades, DPULZE) — RM 159 | Onyxmen',
    seoDescMs:
      'Tempah suplemen lelaki tulen Onyxmen (Horsemen, Hammer of Thor, Grow XL, Magnum Pump XR — RM 159) di Cyberjaya dengan penghantar rahsia hari sama 3–5 jam atau kurier percuma 1 hari. Sesuai untuk loker bungkusan kondo.',
    kickerEn: 'MSC MALAYSIA TECH CORRIDOR · CYBERJAYA · SETIA ECO GLADES · 3–5H SAME-DAY RIDER',
    kickerMs: 'KORIDOR RAYA MULTIMEDIA · CYBERJAYA · SETIA ECO GLADES · PENGHANTAR HARI SAMA 3–5 JAM',
    headlineEn:
      'Cyberjaya Tech Hub Discreet Dispatch: <span class="foil-champagne-text">Same-Day Rider &amp; Condo Locker Ready.</span>',
    headlineMs:
      'Penghantaran Rahsia Hab Teknologi Cyberjaya: <span class="foil-champagne-text">Servis Hari Sama &amp; Mesra Loker Kondo.</span>',
    leadEn:
      'Engineered for software architects, founders, data-center engineers, and night-shift global operations teams across Cyberjaya, Setia Eco Glades, Symphony Hills, Tamarind Square, and Kota Warisan. Our 100% stimulant-free botanical and nitric oxide capsules deliver peak evening and gym stamina without disrupting sleep—dispatched in 3–5 hours via Same-Day Private Rider or Free Next-Day Express Courier.',
    leadMs:
      'Dirumus khusus buat jurutera perisian, usahawan teknologi, kakitangan pusat data, dan profesional syif malam di Cyberjaya, Setia Eco Glades, Symphony Hills, Tamarind Square, dan Kota Warisan. Kapsul botani dan nitrik oksida bebas kafein kami menyokong stamina malam dan kecergasan gimnasium tanpa mengganggu tidur—dihantar dalam 3–5 jam melalui Penghantar Hari Sama atau Kurier Ekspres Percuma 1 hari bekerja.',
    customsProtocolEn:
      'Condominium Parcel Locker & Guardhouse Drop-Off Compatibility: Every Cyberjaya parcel is sized to fit PopBox, Parcel365, and standard condominium mailrooms at Tamarind Suites, Hyve, Mutiara Ville, Solstice, Eclipse, and Verdi Eco-Dominiums with zero product names visible.',
    customsProtocolMs:
      'Keserasian Loker Bungkusan Kondo & Pondok Pengawal Cyberjaya: Saiz bungkusan legap kami muat sempurna ke dalam loker bungkusan pintar dan bilik mel kondominium di Tamarind Suites, Hyve, Mutiara Ville, Solstice, Eclipse, dan Verdi Eco-Dominiums tanpa sebarang nama produk.',
    districts: [
      {
        code: 'CYB-01',
        nameEn: 'Tamarind Square, Tamarind Suites, Mutiara Ville & Edusphere (Persiaran Multimedia)',
        nameMs: 'Tamarind Square, Tamarind Suites, Mutiara Ville & Edusphere (Persiaran Multimedia)',
        postcodes: '63000',
        etaEn: '3–5 Hours Same-Day Private Rider OR 1 Business Day Free Courier',
        etaMs: '3–5 Jam Penghantar Persendirian Hari Sama ATAU 1 Hari Bekerja Kurier Percuma',
        notesEn:
          'Seamless drop-off to condo parcel lockers, guardhouse concierges, or direct lobby handover at Tamarind Square.',
        notesMs:
          'Serahan mudah ke loker bungkusan kondo, meja pengawal keselamatan, atau serahan terus di lobi Tamarind Square.',
      },
      {
        code: 'CYB-02',
        nameEn: 'DPULZE Cyberjaya, Solstice, Eclipse, Pan’gaea & Hyve Soho',
        nameMs: 'DPULZE Cyberjaya, Solstice, Eclipse, Pan’gaea & Hyve Soho',
        postcodes: '63000',
        etaEn: '3–5 Hours Same-Day Private Rider OR 1 Business Day Free Courier',
        etaMs: '3–5 Jam Penghantar Persendirian Hari Sama ATAU 1 Hari Bekerja Kurier Percuma',
        notesEn:
          'Central Lingkaran Cyber Point West/East high-rise residences and tech offices; full COD and DuitNow QR support.',
        notesMs:
          'Kediaman bertingkat dan pejabat teknologi sekitar Lingkaran Cyber Point; sokongan penuh COD dan DuitNow QR.',
      },
      {
        code: 'CYB-03',
        nameEn: 'Shaftsbury Square, Prima Avenue, Techjaya & Data Center Precinct',
        nameMs: 'Shaftsbury Square, Prima Avenue, Techjaya & Zon Pusat Data',
        postcodes: '63000',
        etaEn: '3–5 Hours Same-Day Private Rider OR 1 Business Day Free Courier',
        etaMs: '3–5 Jam Penghantar Persendirian Hari Sama ATAU 1 Hari Bekerja Kurier Percuma',
        notesEn:
          'Discreet corporate reception or personal mobile handover for engineers across Persiaran APEC and Persiaran Rimba Permai.',
        notesMs:
          'Serahan rahsia di kaunter pejabat atau panggilan terus ke telefon bimbit buat jurutera di Persiaran APEC.',
      },
      {
        code: 'CYB-04',
        nameEn: 'Setia Eco Glades, Symphony Hills, Verdi Eco-Dominiums & Mirage by the Lake',
        nameMs: 'Setia Eco Glades, Symphony Hills, Verdi Eco-Dominiums & Mirage by the Lake',
        postcodes: '63000',
        etaEn: '3–5 Hours Same-Day Private Rider OR 1 Business Day Free Courier',
        etaMs: '3–5 Jam Penghantar Persendirian Hari Sama ATAU 1 Hari Bekerja Kurier Percuma',
        notesEn:
          'Gated luxury enclaves and island villas in Cyberjaya; strict guardhouse privacy compliance ("OM Fulfilment Logistics" only).',
        notesMs:
          'Kediaman berpagar mewah dan vila di Cyberjaya; mematuhi privasi pondok pengawal sepenuhnya ("OM Fulfilment Logistics" sahaja).',
      },
      {
        code: 'CYB-05',
        nameEn: 'CyberSouth, Kita @ Cybersouth, Dengkil & Putrajaya South Border',
        nameMs: 'CyberSouth, Kita @ Cybersouth, Dengkil & Sempadan Selatan Putrajaya',
        postcodes: '63000, 43800',
        etaEn: '3–5 Hours Same-Day Private Rider OR 1 Business Day Free Courier',
        etaMs: '3–5 Jam Penghantar Persendirian Hari Sama ATAU 1 Hari Bekerja Kurier Percuma',
        notesEn:
          'Covers fast-growing residential townships along Pintasan Dengkil–Putrajaya with same-day and next-day options.',
        notesMs:
          'Meliputi perbandaran baharu di jajaran Pintasan Dengkil–Putrajaya dengan pilihan penghantaran hari sama dan esok.',
      },
      {
        code: 'CYB-06',
        nameEn: 'Kota Warisan, Sunsuria City, Serenia City & KLIA Aeropolis Corridor',
        nameMs: 'Kota Warisan, Sunsuria City, Serenia City & Koridor KLIA Aeropolis',
        postcodes: '43900, 64000',
        etaEn: '1 Business Day Free Express (or Same-Day Rider on request)',
        etaMs: '1 Hari Bekerja Ekspres Percuma (atau Penghantar Hari Sama)',
        notesEn:
          'Serves aviation crews, logistics executives, and residents in Kota Warisan, Xiamen University corridor, and Serenia City.',
        notesMs:
          'Meliputi kru penerbangan, eksekutif logistik, dan penduduk di Kota Warisan, Sunsuria City, dan Serenia City.',
      },
    ],
  },
  {
    microStepEn: 'MS-145',
    microStepMs: 'MS-145',
    hubCode: 'MY-15 · WP LABUAN OFFSHORE & AIR HUB',
    slug: 'labuan',
    schemaKey: 'labuan',
    watermark: 'LABUAN',
    canonicalEnPath: '/malaysia/labuan/',
    canonicalMsPath: '/ms/malaysia/labuan/',
    enOutputPaths: [
      'malaysia/labuan/index.html',
      'malaysia-delivery/labuan/index.html',
    ],
    msOutputPaths: [
      'ms/malaysia/labuan/index.html',
      'ms/penghantaran-malaysia/labuan/index.html',
    ],
    nameEn: 'Labuan Federal Territory (Bandar Labuan / Victoria, Financial Park & Rancha-Rancha)',
    nameMs: 'Wilayah Persekutuan Labuan (Bandar Labuan / Victoria, Taman Kewangan & Rancha-Rancha)',
    shortNameEn: 'Labuan',
    shortNameMs: 'WP Labuan',
    capitalOrCenter: 'Victoria (Bandar Labuan) / Labuan Financial Park / Rancha-Rancha Offshore Base',
    zoneCode: 'EAST_MALAYSIA_AIR_CARGO',
    postalCodeRange: '87000–87033',
    transitWindowEn: '2–4 Business Days (Priority Daily Air-Cargo Discreet Parcel via Labuan Airport LBU)',
    transitWindowMs: '2–4 Hari Bekerja (Bungkusan Kargo Udara Rahsia Harian melalui Lapangan Terbang Labuan LBU)',
    shippingPolicyEn: 'RM 12 Single-Bottle Air Freight · RM 0 FREE Air Cargo on 2 Bottles (RM 318) & 3 Bottles (RM 477)',
    shippingPolicyMs: 'RM 12 Kargo Udara 1 Botol · RM 0 Kargo Udara PERCUMA untuk 2 Botol (RM 318) & 3 Botol (RM 477)',
    sameDayRunnerAvailable: false,
    codSupported: true,
    fpxSupported: true,
    primaryProductSlug: 'horsemen',
    secondaryProductSlug: 'magnum-pump-xr',
    heroVisualWebp: '/assets/products/horsemen-stage.webp',
    heroVisualPng: '/assets/products/horsemen-stage.png',
    couriers: [
      'PosLaju Priority Labuan Air-Cargo',
      'J&T Express Borneo Air Labuan',
      'DHL eCommerce Malaysia Discreet Air',
    ],
    seoTitleEn:
      'Discreet Air-Cargo Delivery in Labuan (Victoria, Financial Park & Rancha-Rancha) — RM 159 | Onyxmen Malaysia',
    seoDescEn:
      'Order authentic Onyxmen men’s vitality supplements (RM 159) in WP Labuan with 2–4 day discreet air-cargo parcel delivery to Victoria, Financial Park & Rancha-Rancha. Free air shipping on 2+ bottles (RM 318).',
    seoTitleMs:
      'Penghantaran Kargo Udara Rahsia di WP Labuan (Bandar Labuan, Taman Kewangan & Rancha-Rancha) — RM 159 | Onyxmen',
    seoDescMs:
      'Tempah suplemen lelaki tulen Onyxmen (RM 159) di Wilayah Persekutuan Labuan dengan kargo udara rahsia 2–4 hari ke Bandar Labuan, Taman Kewangan & Rancha-Rancha. Penghantaran udara percuma untuk 2+ botol (RM 318).',
    kickerEn: 'FEDERAL TERRITORY OF LABUAN · INTERNATIONAL FINANCIAL & OFFSHORE ENERGY HUB · AIR-CARGO',
    kickerMs: 'WILAYAH PERSEKUTUAN LABUAN · HAB KEWANGAN ANTARABANGSA & TENAGA LUAR PESISIR · KARGO UDARA',
    headlineEn:
      'WP Labuan Priority Air-Cargo Discreet Dispatch: <span class="foil-champagne-text">Victoria, Financial Park &amp; Rancha-Rancha.</span>',
    headlineMs:
      'Penghantaran Kargo Udara Rahsia WP Labuan: <span class="foil-champagne-text">Bandar Labuan, Taman Kewangan &amp; Rancha-Rancha.</span>',
    leadEn:
      'Serving international banking executives at Labuan Financial Park, offshore oil & gas engineers at Rancha-Rancha and Asian Supply Base (ASB), maritime crews, and residents across Federal Territory of Labuan (postcodes 87000–87033). Shipped via daily KLIA air freight in an opaque, customs-cleared security pouch with Free Air Cargo on all 2-bottle (RM 318) and 3-bottle (RM 477) orders.',
    leadMs:
      'Meliputi eksekutif kewangan antarabangsa di Taman Kewangan Labuan, jurutera minyak & gas luar pesisir di Rancha-Rancha dan Asian Supply Base (ASB), kru maritim, serta penduduk di seluruh Wilayah Persekutuan Labuan (poskod 87000–87033). Dihantar melalui penerbangan kargo harian dari KLIA di dalam pek keselamatan legap dengan Penghantaran Udara Percuma bagi pakej 2 botol (RM 318) dan 3 botol (RM 477).',
    customsProtocolEn:
      'Duty-Free Island Airway & Customs Clearance Protocol: All Labuan orders carry pre-cleared domestic nutritional supplement documentation under "OM Fulfilment Logistics" so parcels pass smoothly through Labuan Airport (LBU) with 100% recipient privacy.',
    customsProtocolMs:
      'Protokol Pelepasan Kargo Udara Pulau Bebas Cukai Labuan: Semua pesanan ke WP Labuan dilengkapi dokumentasi domestik umum di bawah nama "OM Fulfilment Logistics" bagi memastikan pelepasan lancar di Lapangan Terbang Labuan (LBU) dengan privasi penuh.',
    districts: [
      {
        code: 'LBN-01',
        nameEn: 'Bandar Labuan / Victoria Downtown & Labuan Financial Park (Ujana Kewangan)',
        nameMs: 'Bandar Labuan / Pusat Bandar Victoria & Taman Kewangan Labuan (Ujana Kewangan)',
        postcodes: '87000',
        etaEn: '2–3 Business Days via Labuan Airport (LBU) Express Hub',
        etaMs: '2–3 Hari Bekerja melalui Hab Ekspres Lapangan Terbang Labuan (LBU)',
        notesEn:
          'Direct office reception or personal handover at Financial Park towers, Jalan Merdeka, and Lazenda Commercial Centre.',
        notesMs:
          'Serahan rahsia di kaunter menara Taman Kewangan, Jalan Merdeka, dan Pusat Komersial Lazenda.',
      },
      {
        code: 'LBN-02',
        nameEn: 'Rancha-Rancha Industrial Complex & Asian Supply Base (ASB)',
        nameMs: 'Kompleks Perindustrian Rancha-Rancha & Asian Supply Base (ASB)',
        postcodes: '87000–87014',
        etaEn: '2–4 Business Days via Labuan Industrial Courier Line',
        etaMs: '2–4 Hari Bekerja melalui Laluan Kurier Industri Labuan',
        notesEn:
          'Tailored for offshore rotational engineers, shipyard specialists, and methanol/petrochemical staff.',
        notesMs:
          'Khusus untuk jurutera luar pesisir, pakar limbungan kapal, dan kakitangan industri petrokimia/metanol.',
      },
      {
        code: 'LBN-03',
        nameEn: 'Tanjung Aru, Tanjung Batu, Kerupang & Nagalang',
        nameMs: 'Tanjung Aru, Tanjung Batu, Kerupang & Nagalang',
        postcodes: '87000',
        etaEn: '2–4 Business Days via Labuan Residential Dispatch',
        etaMs: '2–4 Hari Bekerja melalui Penghantaran Kediaman Labuan',
        notesEn:
          'Covers coastal residences, Lazenda Villas, and executive housing across eastern and central Labuan.',
        notesMs:
          'Meliputi kediaman pantai, Lazenda Villa, dan perumahan eksekutif di timur serta tengah pulau Labuan.',
      },
      {
        code: 'LBN-04',
        nameEn: 'Sungai Keling, Layang-Layangan, Pohon Batu & Lajau',
        nameMs: 'Sungai Keling, Layang-Layangan, Pohon Batu & Lajau',
        postcodes: '87000',
        etaEn: '2–4 Business Days via Labuan Island Courier Ring',
        etaMs: '2–4 Hari Bekerja melalui Rangkaian Kurier Pulau Labuan',
        notesEn:
          'Full COD and FPX / DuitNow QR support across all residential mukims of Federal Territory Labuan.',
        notesMs:
          'Sokongan penuh COD dan FPX / DuitNow QR di semua mukim kediaman Wilayah Persekutuan Labuan.',
      },
    ],
  },
  {
    microStepEn: 'MS-146',
    microStepMs: 'MS-146',
    hubCode: 'MY-09 · PERLIS NORTHERNMOST EXPRESS HUB',
    slug: 'perlis',
    schemaKey: 'perlis',
    watermark: 'PERLIS',
    canonicalEnPath: '/malaysia/perlis/',
    canonicalMsPath: '/ms/malaysia/perlis/',
    enOutputPaths: [
      'malaysia/perlis/index.html',
      'malaysia-delivery/perlis/index.html',
      'malaysia-delivery/perlis-kangar/index.html',
    ],
    msOutputPaths: [
      'ms/malaysia/perlis/index.html',
      'ms/penghantaran-malaysia/perlis/index.html',
      'ms/penghantaran-malaysia/perlis-kangar/index.html',
    ],
    nameEn: 'Perlis (Kangar, Arau, Padang Besar & Kuala Perlis)',
    nameMs: 'Perlis Indera Kayangan (Kangar, Arau, Padang Besar & Kuala Perlis)',
    shortNameEn: 'Perlis',
    shortNameMs: 'Perlis',
    capitalOrCenter: 'Kangar / Arau Royal Town / Kuala Perlis / Padang Besar',
    zoneCode: 'WEST_MALAYSIA_NORTHERN_EXPRESS',
    postalCodeRange: '01000–02800',
    transitWindowEn: '1–2 Business Days (Free Northern Highway & Changlun–Kuala Perlis Express — RM 0)',
    transitWindowMs: '1–2 Hari Bekerja (Kurier Ekspres Lebuhraya Utara & Changlun–Kuala Perlis Percuma — RM 0)',
    shippingPolicyEn: 'RM 0 FREE Express Discreet Shipping on ALL Tiers (1 Bottle RM 159 · 2 Bottles RM 318 · 3 Bottles RM 477)',
    shippingPolicyMs: 'RM 0 Penghantaran Ekspres Rahsia PERCUMA untuk SEMUA Pakej (1 Botol RM 159 · 2 Botol RM 318 · 3 Botol RM 477)',
    sameDayRunnerAvailable: false,
    codSupported: true,
    fpxSupported: true,
    primaryProductSlug: 'hammer-of-thor',
    secondaryProductSlug: 'horsemen',
    heroVisualWebp: '/assets/products/hammer-of-thor-stage.webp',
    heroVisualPng: '/assets/products/hammer-of-thor-stage.png',
    couriers: [
      'J&T Express VIP Kangar & Arau Hub',
      'PosLaju Priority Perlis Indera Kayangan',
      'NinjaVan Malaysia Discreet Northern Line',
    ],
    seoTitleEn:
      'Discreet Express Delivery in Perlis (Kangar, Arau, Padang Besar & Kuala Perlis) — RM 159 | Onyxmen Malaysia',
    seoDescEn:
      'Free 1–2 day discreet shipping of authentic Onyxmen men’s supplements (RM 159) across Perlis: Kangar, Arau, Kuala Perlis & Padang Besar. 100% plain unmarked parcel with COD & DuitNow QR.',
    seoTitleMs:
      'Penghantaran Rahsia Ekspres di Perlis (Kangar, Arau, Padang Besar & Kuala Perlis) — RM 159 | Onyxmen Malaysia',
    seoDescMs:
      'Penghantaran rahsia percuma 1–2 hari suplemen lelaki tulen Onyxmen (RM 159) ke seluruh Perlis: Kangar, Arau, Kuala Perlis & Padang Besar. Bungkusan tanpa nama produk dengan COD & DuitNow QR.',
    kickerEn: 'NORTHERNMOST PENINSULAR VAULT · KANGAR · ARAU · PADANG BESAR · KUALA PERLIS',
    kickerMs: 'KORIDOR UTARA PERLIS INDERA KAYANGAN · KANGAR · ARAU · PADANG BESAR · KUALA PERLIS',
    headlineEn:
      'Perlis Discreet Apothecary Dispatch: <span class="foil-champagne-text">Kangar, Arau, Padang Besar &amp; Kuala Perlis.</span>',
    headlineMs:
      'Penghantaran Ekspres Rahsia Perlis: <span class="foil-champagne-text">Kangar, Arau, Padang Besar &amp; Kuala Perlis.</span>',
    leadEn:
      'Every address in Perlis Indera Kayangan—from Kangar Jaya and Seriab to Royal Town Arau, Pauh Putra, Kuala Perlis jetty corridor, and Padang Besar Inland Port—receives 100% Free Express Discreet Shipping (RM 0 even on a single RM 159 bottle) within 1–2 business days. Sealed in a plain opaque mailer with Cash on Delivery (COD) and instant FPX / DuitNow QR support.',
    leadMs:
      'Setiap alamat di Perlis Indera Kayangan—dari Kangar Jaya dan Seriab ke Bandar Diraja Arau, Pauh Putra, Kuala Perlis, dan Padang Besar—menikmati Penghantaran Ekspres Rahsia PERCUMA (RM 0 walaupun untuk 1 botol RM 159) dalam masa 1–2 hari bekerja. Dibungkus di dalam pek keselamatan legap tanpa nama produk bersama sokongan COD dan FPX / DuitNow QR.',
    customsProtocolEn:
      'Small-Town Community Privacy Guarantee in Perlis: In close-knit communities across Kangar, Arau, and Beseri, parcel discretion is essential. Our waybills print only "OM Fulfilment Logistics" so local couriers and neighbours never know what you ordered.',
    customsProtocolMs:
      'Jaminan Privasi Komuniti di Perlis: Dalam komuniti yang saling mengenali di Kangar, Arau, dan Beseri, kerahsiaan bungkusan amat penting. Slip kurier kami hanya mencetak "OM Fulfilment Logistics" supaya tiada sesiapa mengetahui kandungan pesanan anda.',
    districts: [
      {
        code: 'PLS-01',
        nameEn: 'Kangar (Pusat Bandar Kangar, Kangar Jaya, Seriab, Pengkalan Assam & Bintong)',
        nameMs: 'Kangar (Pusat Bandar Kangar, Kangar Jaya, Seriab, Pengkalan Assam & Bintong)',
        postcodes: '01000',
        etaEn: '1–2 Business Days via Kangar Central Sortation Hub',
        etaMs: '1–2 Hari Bekerja melalui Hab Pengagihan Utama Kangar',
        notesEn:
          'Direct discreet delivery to government offices, Kangar Jaya commercial hub, and residential taman across Kangar.',
        notesMs:
          'Penghantaran rahsia terus ke kompleks pejabat kerajaan, hab komersial Kangar Jaya, dan taman perumahan di Kangar.',
      },
      {
        code: 'PLS-02',
        nameEn: 'Arau, Pauh Putra, Jejawi & Kubang Gajah',
        nameMs: 'Arau, Pauh Putra, Jejawi & Kubang Gajah',
        postcodes: '02600',
        etaEn: '1–2 Business Days via Changlun–Kuala Perlis Highway Link',
        etaMs: '1–2 Hari Bekerja melalui Lebuhraya Changlun–Kuala Perlis',
        notesEn:
          'Covers Arau Royal Town, Jejawi industrial/commercial strip, and Pauh Putra academic & professional residences.',
        notesMs:
          'Meliputi Bandar Diraja Arau, kawasan komersial Jejawi, serta perbandaran Pauh Putra.',
      },
      {
        code: 'PLS-03',
        nameEn: 'Padang Besar, Chuping Valley Industrial Area & Kaki Bukit',
        nameMs: 'Padang Besar, Kawasan Perindustrian Lembah Chuping (CVIA) & Kaki Bukit',
        postcodes: '02100, 02200, 02400',
        etaEn: '1–2 Business Days via Northern Border Logistics Line',
        etaMs: '1–2 Hari Bekerja melalui Rangkaian Logistik Sempadan Utara',
        notesEn:
          'Serves logistics professionals at Padang Besar Inland Port, Chuping Valley industrial engineers, and Beseri.',
        notesMs:
          'Meliputi kakitangan logistik Pelabuhan Darat Padang Besar, jurutera Lembah Chuping (CVIA), dan Beseri.',
      },
      {
        code: 'PLS-04',
        nameEn: 'Kuala Perlis, Simpang Empat & Sanglang',
        nameMs: 'Kuala Perlis, Simpang Empat & Sanglang',
        postcodes: '02000, 02700, 02800',
        etaEn: '1–2 Business Days via Coastal Perlis Express Route',
        etaMs: '1–2 Hari Bekerja melalui Laluan Ekspres Pesisir Perlis',
        notesEn:
          'Full COD and FPX delivery across Kuala Perlis maritime terminal corridor, Simpang Empat, and Sanglang.',
        notesMs:
          'Penghantaran penuh COD dan FPX di koridor terminal maritim Kuala Perlis, Simpang Empat, dan Sanglang.',
      },
    ],
  },
];

/**
 * 6-Layer Discreet Parcel Anatomy & Anti-Inspection Security Specifications
 */
export const DISCREET_PARCEL_LAYERS = [
  {
    code: 'SEAL-01',
    titleEn: 'Neutral Sender Identity ("OM Fulfilment Logistics")',
    titleMs: 'Identiti Pengirim Berkecuali ("OM Fulfilment Logistics")',
    specEn: 'Waybill Sender Field · Zero Brand or Supplement Mention',
    specMs: 'Ruangan Pengirim Slip Kurier · Tiada Nama Jenama atau Suplemen',
    descEn:
      'Every thermal airway bill (PosLaju, J&T VIP, NinjaVan, DHL, or Klang Valley Private Rider) prints "OM Fulfilment Logistics — Kuala Lumpur" as the sender. The words "Onyxmen", "Horsemen", "Hammer of Thor", "Grow XL", "Magnum Pump XR", or "Men’s Vitality" never appear anywhere on the outer parcel.',
    descMs:
      'Setiap slip kurier (PosLaju, J&T VIP, NinjaVan, DHL, atau Penghantar Persendirian Lembah Klang) hanya mencetak "OM Fulfilment Logistics — Kuala Lumpur" sebagai pengirim. Perkataan "Onyxmen", "Horsemen", "Hammer of Thor", "Grow XL", "Magnum Pump XR", atau "Suplemen Lelaki" langsung tidak wujud pada luar bungkusan.',
  },
  {
    code: 'SEAL-02',
    titleEn: 'Generic Customs & Air-Cargo Declaration ("Personal Nutritional Goods")',
    titleMs: 'Deklarasi Kargo Udara & Kastam Umum ("Penjagaan Kesihatan Harian")',
    specEn: 'KLIA to KKIA / KCH / MYY / SBW / BTU / LBU Air Manifest Compliance',
    specMs: 'Pematuhan Manifes Udara KLIA ke Sabah, Sarawak & WP Labuan',
    descEn:
      'For East Malaysia flights to Sabah, Sarawak, and Labuan, domestic customs declarations require an item category. We declare every shipment generically as "Personal Nutritional Supplement / Health Goods (Non-Hazardous)" so airport handlers and local sorting hubs treat it as routine daily vitamins.',
    descMs:
      'Bagi penerbangan kargo ke Sabah, Sarawak, dan WP Labuan, ruangan kategori barangan diisytiharkan secara umum sebagai "Barangan Penjagaan Kesihatan Harian (Bukan Bahan Berbahaya)" supaya petugas lapangan terbang dan pusat pengagihan memprosesnya seperti vitamin harian biasa.',
  },
  {
    code: 'SEAL-03',
    titleEn: '3-Ply Opaque Matte-Black Tear-Proof Co-Extruded Poly Mailer',
    titleMs: 'Pek Keselamatan Polimer 3-Lapisan Legap Kalis Koyak & Kalis Air',
    specEn: '100% Light-Blocking Interior · Tropical Monsoon Waterproof',
    specMs: '100% Menghalang Cahaya · Kalis Hujan Monsun Tropika',
    descEn:
      'The outer envelope is a heavy-gauge co-extruded polymer pouch with a jet-black light-blocking core and tamper-evident hot-melt adhesive strip. Even under direct flashlight inspection, zero bottle silhouettes or label graphics can be seen through the pouch.',
    descMs:
      'Sampul luar terdiri daripada polimer tebal 3-lapisan dengan teras hitam pekat yang menghalang tembusan cahaya sepenuhnya serta jalur pelekat keselamatan. Walaupun disuluh lampu, bentuk botol atau tulisan label langsung tidak kelihatan.',
  },
  {
    code: 'SEAL-04',
    titleEn: 'Rigid Corrugated Shock-Guard Inner Box & Anti-Rattle Acoustic Wrap',
    titleMs: 'Kotak Dalam Kalis Hentakan & Balutan Gelembung Anti-Bunyi Kapsul',
    specEn: 'Zero Capsule Rattle During Handover at Office or Condo Guardhouse',
    specMs: 'Tiada Bunyi Goncangan Kapsul Semasa Diterima di Pejabat atau Kondo',
    descEn:
      'Inside the outer pouch, each apothecary bottle is immobilized in high-density cellular cushioning inside an unmarked corrugated sleeve. When a receptionist, colleague, guard, or family member picks up the parcel, it does not rattle like a pill bottle.',
    descMs:
      'Di dalam sampul keselamatan, setiap botol dibalut kemas menggunakan pelapik tebal di dalam kotak kadbod tanpa cetakan. Apabila penyambut tetamu pejabat, pengawal keselamatan, atau ahli keluarga memegang bungkusan tersebut, tiada sebarang bunyi goncangan kapsul kedengaran.',
  },
  {
    code: 'SEAL-05',
    titleEn: 'Induction Foil Cap Seal & Desiccant Humidity Barrier Inside Every Bottle',
    titleMs: 'PenutupKedap Induksi Aluminium & Penyerap Kelembapan Gred Farmaseutikal',
    specEn: 'Protects Hygroscopic Tongkat Ali & L-Arginine Against 85% Malaysian Humidity',
    specMs: 'Melindungi Ekstrak Tongkat Ali & L-Arginine daripada Cuaca Lembap Malaysia',
    descEn:
      'Concentrated botanical extracts (100:1 Eurycoma longifolia) and amino acids (L-Arginine AAKG & L-Citrulline) are naturally hygroscopic. Every authentic Onyxmen bottle features a hermetic heat-induction inner seal plus a food-grade silica canister to guarantee crisp capsule potency from Kuala Lumpur to Borneo.',
    descMs:
      'Ekstrak botani berkepekatan tinggi (Tongkat Ali 100:1) dan asid amino (L-Arginine & L-Citrulline) sangat sensitif terhadap kelembapan udara. Setiap botol tulen Onyxmen dilengkapi kedap induksi haba pada mulut botol serta penyerap kelembapan bagi mengekalkan potensi kapsul.',
  },
  {
    code: 'SEAL-06',
    titleEn: 'Neutral Bank / E-Wallet Statement Descriptor & Initials-Only Recipient Option',
    titleMs: 'Penyata Bank / E-Dompet Berkecuali & Pilihan Nama Ringkas Penerima',
    specEn: 'FPX / DuitNow QR Privacy + WhatsApp Prior-Call Handover',
    specMs: 'Privasi Penyata FPX / DuitNow QR + Panggilan Kurier Sebelum Serahan',
    descEn:
      'Whether you pay via DuitNow QR, FPX Online Banking (Maybank2u, CIMB Clicks, RHB, Bank Islam, Public Bank), or Cash on Delivery (COD), no supplement product name ever appears on your bank statement. You may also specify your initials only on the shipping label.',
    descMs:
      'Sama ada anda membayar melalui DuitNow QR, perbankan FPX (Maybank2u, CIMB Clicks, Bank Islam, RHB, Public Bank), atau COD (Bayar Waktu Terima), tiada nama suplemen akan tertera pada penyata bank anda. Anda juga boleh menggunakan nama ringkas (initials) pada slip kurier.',
  },
];

/**
 * Renders the 4 Flagship Formulations comparison & direct acquisition matrix for any state hub page
 */
function renderRegionalFormulationsMatrixSection(lang = 'en-MY', stateShortName = 'Malaysia') {
  const isMs = lang === 'ms-MY';
  const rows = [
    {
      slug: 'horsemen',
      code: 'FORM-01 · 20 CAPSULES × 500MG',
      name: 'Horsemen',
      enPath: '/products/horsemen/',
      msPath: '/ms/produk/horsemen/',
      imgWebp: '/assets/products/horsemen-cutout.webp',
      imgPng: '/assets/products/horsemen-cutout.png',
      botanicalsEn: 'Eurycoma longifolia (Tongkat Ali 100:1), Peruvian Black Maca, Korean Red Ginseng, Epimedium & L-Arginine HCl',
      botanicalsMs: 'Eurycoma longifolia (Tongkat Ali 100:1), Akar Maca Hitam Peru, Panax Ginseng Merah Korea, Epimedium & L-Arginine HCl',
      timingEn: '1 capsule 45–60 min before evening activity (or 1 capsule every 48h)',
      timingMs: '1 kapsul 45–60 minit sebelum aktiviti malam (atau 1 kapsul setiap 48 jam)',
      focusEn: 'Rapid Evening Readiness, Androgenic Free-Testosterone Bioavailability & Peak Stamina',
      focusMs: 'Kesediaan Tenaga Malam Pantas, Ketersediaan Bio Tenaga Lelaki & Ketahanan Stamina',
    },
    {
      slug: 'hammer-of-thor',
      code: 'FORM-02 · 20 VEG. CAPSULES',
      name: 'Hammer of Thor',
      enPath: '/products/hammer-of-thor/',
      msPath: '/ms/produk/hammer-of-thor/',
      imgWebp: '/assets/products/hammer-of-thor-cutout.webp',
      imgPng: '/assets/products/hammer-of-thor-cutout.png',
      botanicalsEn: 'Tribulus terrestris (45% Protodioscin), Malaysian Tongkat Ali, Ashwagandha Root, Mucuna pruriens & Chelated Zinc',
      botanicalsMs: 'Tribulus terrestris (45% Protodioscin), Tongkat Ali Malaysia, Akar Ashwagandha, Mucuna pruriens & Zink Kelat',
      timingEn: '1 capsule daily after dinner with 250ml warm water',
      timingMs: '1 kapsul setiap hari selepas makan malam bersama 250ml air suam',
      focusEn: 'Progressive Physical Conditioning, Muscular Recovery & Evening Vitality Confidence',
      focusMs: 'Penyediaan Fizikal Berperingkat, Pemulihan Otot & Keyakinan Tenaga Malam',
    },
    {
      slug: 'grow-xl',
      code: 'FORM-03 · 30 CAPSULES (30-DAY CYCLE)',
      name: 'Grow XL',
      enPath: '/products/grow-xl/',
      msPath: '/ms/produk/grow-xl/',
      imgWebp: '/assets/products/grow-xl-cutout.webp',
      imgPng: '/assets/products/grow-xl-cutout.png',
      botanicalsEn: 'Aged Panax Ginseng, Ginkgo Biloba Flavone Glycosides, Saw Palmetto, Muira Puama, L-Citrulline Malate & Vitamin B3',
      botanicalsMs: 'Panax Ginseng Matang, Glikosida Flavon Ginkgo Biloba, Saw Palmetto, Muira Puama, L-Citrulline Malate & Vitamin B3',
      timingEn: '1 capsule every morning after breakfast for a complete 30-day cycle',
      timingMs: '1 kapsul setiap pagi selepas sarapan untuk kitaran lengkap 30 hari',
      focusEn: '30-Day Daily Baseline Vitality, Micro-Circulation Nourishment & All-Day Executive Stamina',
      focusMs: 'Kecergasan Asas Harian 30 Hari, Sokongan Peredaran Mikro & Tenaga Sepanjang Hari',
    },
    {
      slug: 'magnum-pump-xr',
      code: 'FORM-04 · 30 BLACK CAPSULES (ORAL SUPPLEMENT)',
      name: 'Magnum Pump XR',
      enPath: '/products/magnum-pump-xr/',
      msPath: '/ms/produk/magnum-pump-xr/',
      imgWebp: '/assets/products/magnum-pump-xr-cutout.webp',
      imgPng: '/assets/products/magnum-pump-xr-cutout.png',
      botanicalsEn: 'L-Arginine AAKG, L-Citrulline, Beetroot Nitrate Extract, Thai Black Ginger (Kunyit Hitam) & Maritime Pine Bark',
      botanicalsMs: 'L-Arginine AAKG, L-Citrulline, Ekstrak Nitrat Ubi Bit, Kunyit Hitam (Kaempferia parviflora) & Kulit Pain Maritim',
      timingEn: '1 black capsule 30–45 min before gym training or evening physical activity',
      timingMs: '1 kapsul hitam 30–45 minit sebelum latihan gimnasium atau aktiviti fizikal malam',
      focusEn: 'Extended-Release Nitric Oxide (NO) Precursor, Endothelial Vasodilation & Peak Physical Pump (Not a mechanical pump)',
      focusMs: 'Prekursor Nitrik Oksida (NO) Pelepasan Lanjutan, Sokongan Aliran Vaskular & Stamina Fizikal (Bukan pam mekanikal)',
    },
  ];

  const rowsHtml = rows
    .map((r) => {
      const href = isMs ? r.msPath : r.enPath;
      return `
        <tr>
          <td>
            <div style="display:flex;align-items:center;gap:1rem;">
              <picture>
                <source srcset="${esc(r.imgWebp)}" type="image/webp" />
                <img
                  src="${esc(r.imgPng)}"
                  alt="${esc(r.name)} — Onyxmen Malaysia RM 159"
                  width="64"
                  height="80"
                  loading="lazy"
                  decoding="async"
                  style="width:54px;height:auto;object-fit:contain;"
                />
              </picture>
              <div>
                <span style="display:block;font-size:0.68rem;letter-spacing:0.16em;color:var(--gold-champagne);">${esc(r.code)}</span>
                <a href="${esc(href)}" style="font-family:var(--font-display);font-size:1.45rem;font-weight:600;color:var(--gold-foil-bright);text-decoration:underline;">
                  ${esc(r.name)}
                </a>
              </div>
            </div>
          </td>
          <td>${esc(isMs ? r.botanicalsMs : r.botanicalsEn)}</td>
          <td>${esc(isMs ? r.timingMs : r.timingEn)}</td>
          <td>${esc(isMs ? r.focusMs : r.focusEn)}</td>
          <td>
            <strong style="color:var(--gold-foil-bright);display:block;margin-bottom:0.45rem;">RM 159.00 / ${isMs ? 'Botol' : 'Bottle'}</strong>
            <button
              type="button"
              class="cta-foil-primary"
              style="padding:0.6rem 1.05rem;font-size:0.68rem;"
              data-open-order-drawer="true"
              data-product="${esc(r.slug)}"
              data-qty="1"
            >
              <span>${isMs ? `TEMPAH KE ${stateShortName.toUpperCase()}` : `DISPATCH TO ${stateShortName.toUpperCase()}`}</span>
              <span aria-hidden="true">→</span>
            </button>
          </td>
        </tr>`;
    })
    .join('\n');

  return `
  <!-- ==========================================================================
       REGIONAL FORMULATIONS MATRIX — ALL 4 AUTHENTIC ONYXMEN BOTTLES AT RM 159
       ========================================================================== -->
  <section
    id="regional-4-formulations-matrix"
    class="state-section state-section--charcoal"
    aria-labelledby="heading-regional-formulations"
  >
    <div class="state-section__inner">
      <header class="state-section__header">
        <div class="state-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? `STOK SEDIA DIHANTAR KE ${esc(stateShortName.toUpperCase())} · HARGA SERAGAM RM 159.00`
                : `IN-STOCK FOR IMMEDIATE ${esc(stateShortName.toUpperCase())} DISPATCH · UNIFORM RM 159.00 RESERVE`
            }
          </span>
          <h2 id="heading-regional-formulations" class="editorial-headline-lg">
            ${
              isMs
                ? `Empat Formulasi Utama Onyxmen <span class="foil-champagne-text">Tersedia Untuk Penghantaran Rahsia ke ${esc(stateShortName)}.</span>`
                : `Four Standardized Botanical Formulations <span class="foil-champagne-text">Ready For Discreet ${esc(stateShortName)} Dispatch.</span>`
            }
          </h2>
        </div>
        <div class="state-section__header-right">
          <p>
            ${
              isMs
                ? 'Setiap botol rasmi Onyxmen dijual pada harga tetap RM 159.00 (1 Botol RM 159 · 2 Botol RM 318 · 3 Botol RM 477). Pilih formulasi mengikut matlamat fisiologi anda.'
                : 'Every authentic Onyxmen bottle carries our uniform official reserve price of RM 159.00 (1 Bottle RM 159 · 2 Bottles RM 318 · 3 Bottles RM 477). Select the formulation engineered for your physiological objective.'
            }
          </p>
        </div>
      </header>

      <div class="state-table-wrap">
        <table class="state-comparison-table">
          <thead>
            <tr>
              <th>${isMs ? 'Formulasi & Spesifikasi Kapsul' : 'Formulation & Capsule Spec'}</th>
              <th>${isMs ? 'Komposisi Fitokimia & Asid Amino' : 'Standardized Botanical & Amino Profile'}</th>
              <th>${isMs ? 'Protokol Masa Pengambilan' : 'Optimal Dosage Timing Protocol'}</th>
              <th>${isMs ? 'Fokus Fisiologi Utama' : 'Primary Physiological Focus'}</th>
              <th>${isMs ? 'Harga Rasmi & Tempahan Pantas' : 'Official Reserve & Express Order'}</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    </div>
  </section>`;
}

/**
 * Renders the 6-Layer Discreet Packaging & Airway/Courier Security Ledger
 */
function renderDiscreetParcelAnatomySection(lang = 'en-MY', stateShortName = 'Malaysia') {
  const isMs = lang === 'ms-MY';
  const rowsHtml = DISCREET_PARCEL_LAYERS.map((layer) => {
    return `
      <article class="state-hairline-row">
        <div class="state-hairline-row__index">${esc(layer.code)}</div>
        <div class="state-hairline-row__title-col">
          <h3 class="state-hairline-row__title">${esc(isMs ? layer.titleMs : layer.titleEn)}</h3>
          <span class="state-hairline-row__subtitle">${esc(isMs ? layer.specMs : layer.specEn)}</span>
        </div>
        <div class="state-hairline-row__desc-col">
          <p>${esc(isMs ? layer.descMs : layer.descEn)}</p>
        </div>
        <div class="state-hairline-row__action-col">
          <span style="font-size:0.72rem;letter-spacing:0.16em;color:var(--gold-champagne);text-transform:uppercase;">
            ${isMs ? '100% DISAHKAN AKTIF' : '100% VERIFIED ACTIVE'}
          </span>
          <a
            href="${isMs ? '/ms/penghantaran-dan-bungkusan-rahsia/' : '/shipping-and-discreet-packaging/'}"
            style="font-size:0.78rem;color:var(--gold-foil-bright);text-decoration:underline;"
          >
            ${isMs ? 'Lihat Spesifikasi Penuh →' : 'Inspect Security Spec →'}
          </a>
        </div>
      </article>`;
  }).join('\n');

  return `
  <!-- ==========================================================================
       6-LAYER DISCREET PARCEL ANATOMY & PRIVACY ENGINEERING LEDGER
       ========================================================================== -->
  <section
    id="discreet-parcel-6-layer-anatomy"
    class="state-section state-section--onyx"
    aria-labelledby="heading-discreet-anatomy"
  >
    <div class="state-section__inner">
      <header class="state-section__header">
        <div class="state-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? `KEJURUTERAAN BUNGKUSAN RAHSIA 6-LAPISAN · PRIVASI PENUH DI ${esc(stateShortName.toUpperCase())}`
                : `6-LAYER STEALTH PARCEL ARCHITECTURE · ZERO-EXPOSURE DELIVERY IN ${esc(stateShortName.toUpperCase())}`
            }
          </span>
          <h2 id="heading-discreet-anatomy" class="editorial-headline-lg">
            ${
              isMs
                ? 'Anatomi Bungkusan Rahsia 6-Lapisan: <span class="foil-champagne-text">Tiada Logo, Tiada Nama Produk, Tiada Bunyi Goncangan.</span>'
                : '6-Layer Stealth Parcel Engineering: <span class="foil-champagne-text">Zero Logos, Zero Product Names, Zero Capsule Rattle.</span>'
            }
          </h2>
        </div>
        <div class="state-section__header-right">
          <p>
            ${
              isMs
                ? `Setiap bungkusan yang keluar dari hab kami menuju ke ${esc(stateShortName)} melalui 6 pemeriksaan keselamatan privasi supaya penyambut tetamu pejabat, pengawal kondo, atau kurier tempatan tidak mengetahui kandungan pesanan anda.`
                : `Every parcel dispatched from our vault to ${esc(stateShortName)} undergoes a 6-point stealth packaging protocol so office receptionists, condo guards, and local couriers never know what is inside.`
            }
          </p>
        </div>
      </header>

      <div class="state-hairline-ledger">
        ${rowsHtml}
      </div>
    </div>
  </section>`;
}

/**
 * Renders the Multi-Bottle Tiered Acquisition Protocol (1 Bottle RM 159 / 2 Bottles RM 318 / 3 Bottles RM 477)
 */
function renderRegionalAcquisitionTiersSection(
  lang = 'en-MY',
  defaultProductSlug = 'horsemen',
  stateShortName = 'Malaysia',
  isEastMalaysia = false
) {
  const isMs = lang === 'ms-MY';
  const tiers = [
    {
      qty: 1,
      code: 'TIER 01 · SINGLE BOTTLE PROTOCOL',
      titleEn: '1 Bottle — Initial 20/30-Day Botanical Assessment Reserve',
      titleMs: '1 Botol — Pakej Permulaan Penilaian 20/30 Hari',
      price: 'RM 159.00',
      shippingNoteEn: isEastMalaysia
        ? 'East Malaysia Air-Cargo: +RM 12 Flat Airway Pouch · COD & FPX Supported'
        : 'Peninsular & Klang Valley: RM 0 FREE Express Discreet Courier · COD & FPX Supported',
      shippingNoteMs: isEastMalaysia
        ? 'Kargo Udara Sabah/Sarawak/Labuan: +RM 12 Kadar Tetap · Sokongan COD & FPX'
        : 'Semenanjung & Lembah Klang: RM 0 Kurier Ekspres Rahsia PERCUMA · Sokongan COD & FPX',
      descEn:
        'Ideal for first-time evaluation of Horsemen (20 caps), Hammer of Thor (20 caps), Grow XL (30 caps), or Magnum Pump XR (30 black caps). Sealed in our 6-layer unmarked security parcel.',
      descMs:
        'Sesuai untuk percubaan pertama Horsemen (20 kapsul), Hammer of Thor (20 kapsul), Grow XL (30 kapsul), atau Magnum Pump XR (30 kapsul hitam). Dihantar di dalam bungkusan rahsia 6-lapisan.',
      ctaEn: 'ACQUIRE 1 BOTTLE · RM 159',
      ctaMs: 'TEMPAH 1 BOTOL · RM 159',
    },
    {
      qty: 2,
      code: 'TIER 02 · DUAL MOMENTUM PROTOCOL (MOST POPULAR IN EAST & NORTHERN MALAYSIA)',
      titleEn: '2 Bottles — 40 to 60-Day Continuous Conditioning + FREE Nationwide Air/Highway Shipping',
      titleMs: '2 Botol — Kitaran Berterusan 40–60 Hari + Penghantaran Udara/Lebuhraya PERCUMA',
      price: 'RM 318.00',
      shippingNoteEn: '100% FREE Priority Express & Borneo Air-Cargo Shipping (RM 0 Surcharge Nationwide)',
      shippingNoteMs: '100% Penghantaran Ekspres & Kargo Udara Borneo PERCUMA (RM 0 Caj Tambahan Seluruh Malaysia)',
      descEn:
        'Our most requested tier across Sabah, Sarawak, Labuan, Kedah, Kelantan, Terengganu, Putrajaya, Cyberjaya, and Perlis. Unlocks RM 0 Free Priority Air-Cargo to East Malaysia and provides an uninterrupted 6-to-8 week botanical cycle.',
      descMs:
        'Pakej paling mendapat sambutan di Sabah, Sarawak, Labuan, Kedah, Kelantan, Terengganu, Putrajaya, Cyberjaya, dan Perlis. Melayakkan Penghantaran Kargo Udara PERCUMA (RM 0) ke Sabah/Sarawak/Labuan serta bekalan berterusan 6–8 minggu.',
      ctaEn: 'ACQUIRE 2 BOTTLES · RM 318 (FREE AIR/EXPRESS)',
      ctaMs: 'TEMPAH 2 BOTOL · RM 318 (PENGHANTARAN PERCUMA)',
    },
    {
      qty: 3,
      code: 'TIER 03 · 90-DAY APOTHECARY MASTERY VAULT',
      titleEn: '3 Bottles — Full Quarter Physiological Mastery + Priority VIP Dispatch',
      titleMs: '3 Botol — Kitaran Penuh 90 Hari + Keutamaan Penghantaran VIP Percuma',
      price: 'RM 477.00',
      shippingNoteEn: '100% FREE Priority VIP Air-Cargo / Express Dispatch + Priority Batch Allocation',
      shippingNoteMs: '100% Kargo Udara / Ekspres VIP PERCUMA + Keutamaan Stok Batch Terkini',
      descEn:
        'Designed for executives, offshore rotational engineers, and frequent travelers who want a full 90-day supply on hand without re-ordering every month. Ships 100% free across all 16 Malaysian states and federal territories.',
      descMs:
        'Direka untuk eksekutif, jurutera luar pesisir (offshore), dan pelanggan yang mahukan bekalan lengkap 90 hari tanpa perlu membuat pesanan berulang setiap bulan. Penghantaran 100% percuma ke seluruh Malaysia.',
      ctaEn: 'ACQUIRE 3 BOTTLES · RM 477 (VIP FREE DISPATCH)',
      ctaMs: 'TEMPAH 3 BOTOL · RM 477 (VIP PERCUMA)',
    },
  ];

  const rowsHtml = tiers
    .map((t) => {
      return `
      <article class="state-hairline-row">
        <div class="state-hairline-row__index">${esc(t.price)}</div>
        <div class="state-hairline-row__title-col">
          <span class="state-hairline-row__subtitle">${esc(t.code)}</span>
          <h3 class="state-hairline-row__title">${esc(isMs ? t.titleMs : t.titleEn)}</h3>
          <span style="font-size:0.78rem;color:var(--gold-foil-bright);">${esc(isMs ? t.shippingNoteMs : t.shippingNoteEn)}</span>
        </div>
        <div class="state-hairline-row__desc-col">
          <p>${esc(isMs ? t.descMs : t.descEn)}</p>
        </div>
        <div class="state-hairline-row__action-col">
          <button
            type="button"
            class="cta-foil-primary"
            style="padding:0.85rem 1.35rem;font-size:0.72rem;"
            data-open-order-drawer="true"
            data-product="${esc(defaultProductSlug)}"
            data-qty="${t.qty}"
          >
            <span>${esc(isMs ? t.ctaMs : t.ctaEn)}</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </article>`;
    })
    .join('\n');

  return `
  <!-- ==========================================================================
       MULTI-BOTTLE ACQUISITION ARCHITECTURE (RM 159 / RM 318 / RM 477)
       ========================================================================== -->
  <section
    id="regional-multi-bottle-acquisition-tiers"
    class="state-section"
    aria-labelledby="heading-acquisition-tiers"
  >
    <div class="state-section__inner">
      <header class="state-section__header">
        <div class="state-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? `STRUKTUR HARGA RASMI ONYXMEN MALAYSIA · PENGHANTARAN KE ${esc(stateShortName.toUpperCase())}`
                : `OFFICIAL ONYXMEN MALAYSIA PRICING LEDGER · ${esc(stateShortName.toUpperCase())} FULFILMENT`
            }
          </span>
          <h2 id="heading-acquisition-tiers" class="editorial-headline-lg">
            ${
              isMs
                ? 'Pilih Pakej Botol Anda: <span class="foil-champagne-text">RM 159 (1 Botol) · RM 318 (2 Botol) · RM 477 (3 Botol).</span>'
                : 'Select Your Protocol Tier: <span class="foil-champagne-text">RM 159 (1 Bottle) · RM 318 (2 Bottles) · RM 477 (3 Bottles).</span>'
            }
          </h2>
        </div>
        <div class="state-section__header-right">
          <p>
            ${
              isMs
                ? 'Klik mana-mana pakej di bawah untuk membuka Laci Tempahan Ekspres Rahsia 10-Saat dengan sokongan COD, DuitNow QR, dan perbankan FPX.'
                : 'Click any tier below to launch the 10-Second Express Discreet Order Drawer with instant COD, DuitNow QR, and FPX online banking support.'
            }
          </p>
        </div>
      </header>

      <div class="state-hairline-ledger">
        ${rowsHtml}
      </div>
    </div>
  </section>`;
}

/**
 * Renders the Complete 16-State Nationwide Cross-Navigation Ledger
 */
function renderAll16StatesCrossNavSection(lang = 'en-MY', currentSlug = '') {
  const isMs = lang === 'ms-MY';
  const allStates = malaysiaStatesData.states || [];

  const rowsHtml = allStates
    .map((st, idx) => {
      const code = `HUB-${String(idx + 1).padStart(2, '0')}`;
      const href = isMs ? st.msPath : st.enPath;
      const altHref = isMs ? `/ms/malaysia/${st.slug}/` : `/malaysia/${st.slug}/`;
      const isCurrent = st.slug === currentSlug;
      const name = isMs ? st.nameMs : st.nameEn;
      const transit = isMs ? st.transitTimeMs : st.transitTimeEn;
      const districtsPreview = (st.coveredDistricts || []).slice(0, 6).join(', ');
      return `
        <tr>
          <td>
            <strong style="color:var(--gold-champagne);letter-spacing:0.14em;">${esc(code)}</strong>
            ${isCurrent ? `<span style="display:block;font-size:0.65rem;color:var(--gold-foil-bright);">${isMs ? 'HAB SEMASA' : 'CURRENT HUB'}</span>` : ''}
          </td>
          <td>
            <a href="${esc(altHref)}" style="font-family:var(--font-display);font-size:1.28rem;font-weight:600;color:var(--gold-foil-bright);text-decoration:underline;">
              ${esc(name)}
            </a>
            <span style="display:block;font-size:0.72rem;color:var(--text-ash-silver);margin-top:0.2rem;">
              ${esc(st.postalCodeRange || '')} · <a href="${esc(href)}" style="text-decoration:underline;">${esc(href)}</a>
            </span>
          </td>
          <td>${esc(districtsPreview)}</td>
          <td>${esc(transit)}</td>
          <td>
            ${
              st.shippingFeeSingleMYR === 0
                ? `<span style="color:var(--gold-foil-bright);">${isMs ? 'RM 0 Percuma Semua Pakej' : 'RM 0 Free All Tiers'}</span>`
                : `<span style="color:var(--gold-foil-bright);">${isMs ? 'RM 12 (1B) / RM 0 Percuma (2B+)' : 'RM 12 (1B) / RM 0 Free (2B+)'}</span>`
            }
          </td>
          <td>
            <a href="${esc(altHref)}" class="cta-hairline-secondary" style="padding:0.45rem 0.9rem;font-size:0.68rem;">
              <span>${isMs ? 'Buka Hab Negeri' : 'Inspect State Hub'}</span>
              <span aria-hidden="true">→</span>
            </a>
          </td>
        </tr>`;
    })
    .join('\n');

  return `
  <!-- ==========================================================================
       COMPLETE 16-STATE & FEDERAL TERRITORY NATIONWIDE LOGISTICS NETWORK
       ========================================================================== -->
  <section
    id="all-16-malaysia-states-network-table"
    class="state-section state-section--onyx"
    aria-labelledby="heading-all-16-states"
  >
    <div class="state-section__inner">
      <header class="state-section__header">
        <div class="state-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? 'RANGKAIAN PENGHANTARAN RAHSIA KEBANGSAAN · SEMUA 16 NEGERI & WILAYAH PERSEKUTUAN'
                : 'NATIONWIDE DISCREET LOGISTICS MATRIX · ALL 16 MALAYSIAN STATES & FEDERAL TERRITORIES'
            }
          </span>
          <h2 id="heading-all-16-states" class="editorial-headline-lg">
            ${
              isMs
                ? 'Direktori Lengkap 16 Hab Negeri &amp; Bandar Utama <span class="foil-champagne-text">Onyxmen Malaysia.</span>'
                : 'Complete 16-State &amp; Federal Territory <span class="foil-champagne-text">Discreet Fulfilment Directory.</span>'
            }
          </h2>
        </div>
        <div class="state-section__header-right">
          <p>
            ${
              isMs
                ? 'Sama ada anda berada di Lembah Klang, Utara, Pantai Timur, Selatan Semenanjung, atau Sabah, Sarawak & WP Labuan, pilih hab negeri anda untuk jadual poskod dan masa transit terperinci.'
                : 'Whether you are located in the Klang Valley, Northern Corridor, East Coast, Southern Peninsular, or East Malaysia (Sabah, Sarawak & Labuan), select your regional hub below.'
            }
          </p>
        </div>
      </header>

      <div class="state-table-wrap">
        <table class="state-comparison-table">
          <thead>
            <tr>
              <th>${isMs ? 'Kod Hab' : 'Hub Code'}</th>
              <th>${isMs ? 'Negeri / Wilayah Persekutuan' : 'State / Federal Territory Hub'}</th>
              <th>${isMs ? 'Bandar & Daerah Utama Diliputi' : 'Primary Cities & Districts Covered'}</th>
              <th>${isMs ? 'Masa Penghantaran (SLA)' : 'Transit Window (SLA)'}</th>
              <th>${isMs ? 'Kadar Penghantaran' : 'Shipping Rate'}</th>
              <th>${isMs ? 'Pautan Terus' : 'Direct Route'}</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    </div>
  </section>`;
}

/**
 * Generates 14 comprehensive regional FAQs for any State Hub Dossier
 */
function buildRegionalFaqs(dossier, lang = 'en-MY') {
  const isMs = lang === 'ms-MY';
  const sName = isMs ? dossier.shortNameMs : dossier.shortNameEn;
  const fullCities = dossier.districts.map((d) => (isMs ? d.nameMs : d.nameEn)).join('; ');

  if (isMs) {
    return [
      {
        question: `1. Berapa lamakah masa penghantaran pesanan Onyxmen ke ${sName}?`,
        answer: `Masa penghantaran rasmi ke ${sName} ialah ${dossier.transitWindowMs}. Pesanan yang disahkan sebelum jam 4:00 petang (16:00 MYT) diproses dan diserahkan kepada rangkaian kurier (${dossier.couriers.join(', ')}) pada hari bekerja yang sama.`,
      },
      {
        question: `2. Adakah nama produk (Horsemen, Hammer of Thor, Grow XL, Magnum Pump XR) tertera pada bungkusan ke ${sName}?`,
        answer: `Tidak sama sekali. Setiap bungkusan ke ${sName} dibungkus menggunakan pek keselamatan legap 6-lapisan tanpa sebarang logo atau nama suplemen. Slip kurier hanya memaparkan "OM Fulfilment Logistics" sebagai pengirim dan deklarasi umum "Penjagaan Kesihatan Harian".`,
      },
      {
        question: `3. Berapakah harga rasmi sebotol dan bagaimana cara mendapatkan penghantaran percuma ke ${sName}?`,
        answer: `Harga rasmi semua empat formulasi Onyxmen ialah RM 159.00 sebotol (1 Botol RM 159.00, 2 Botol RM 318.00, 3 Botol RM 477.00). Polisi penghantaran ke ${sName}: ${dossier.shippingPolicyMs}.`,
      },
      {
        question: `4. Bolehkah saya menggunakan perkhidmatan COD (Bayar Waktu Terima) atau DuitNow QR di ${sName}?`,
        answer: `Ya. Kami menyokong pembayaran COD (bayar tunai atau imbas DuitNow QR semasa kurier menyerahkan bungkusan) serta pembayaran terus perbankan dalam talian FPX (Maybank2u, CIMB Clicks, Bank Islam, RHB, Public Bank) di seluruh poskod ${sName} (${dossier.postalCodeRange}).`,
      },
      {
        question: `5. Apakah daerah dan poskod di ${sName} yang diliputi oleh penghantaran rahsia Onyxmen?`,
        answer: `Kami meliputi 100% poskod (${dossier.postalCodeRange}) di ${sName}, termasuk: ${fullCities}.`,
      },
      {
        question: `6. Bolehkah bungkusan saya dihantar ke kaunter penyambut tetamu pejabat, pondok pengawal kondo, atau loker bungkusan di ${sName}?`,
        answer: `Ya, sangat selamat. Kerana bungkusan luar kelihatan seperti bungkusan dokumen korporat atau barangan e-dagang biasa tanpa bunyi goncangan kapsul dan hanya berlabel "OM Fulfilment Logistics", ia sesuai ditinggalkan di pondok pengawal keselamatan, kaunter pejabat, atau loker bungkusan pintar.`,
      },
      {
        question: `7. Bolehkah saya meletakkan nama ringkas (initials) sahaja pada label penghantaran ke ${sName}?`,
        answer: `Ya. Semasa mengisi Laci Tempahan Ekspres Rahsia 10-Saat, anda boleh memasukkan nama ringkas (contohnya "En. A.R.") beserta alamat lengkap di ${sName} dan nombor telefon WhatsApp yang aktif supaya kurier dapat menghubungi anda semasa tiba.`,
      },
      {
        question: `8. Apakah perbezaan antara Horsemen, Hammer of Thor, Grow XL, dan Magnum Pump XR (RM 159)?`,
        answer: `Keempat-empat formulasi dijual pada harga RM 159 sebotol: Horsemen (20 kapsul × 500mg) memfokuskan Tongkat Ali 100:1 & Maca Hitam untuk kesediaan tenaga malam; Hammer of Thor (20 kapsul) menggabungkan Tribulus terrestris & Ashwagandha untuk ketahanan fizikal; Grow XL (30 kapsul) ialah nutrisi kecergasan pagi selama 30 hari; manakala Magnum Pump XR (30 kapsul hitam) ialah kompleks L-Arginine AAKG, L-Citrulline & Kunyit Hitam untuk sokongan aliran nitrik oksida (bukan pam mekanikal).`,
      },
      {
        question: `9. Adakah Magnum Pump XR yang dihantar ke ${sName} merupakan kapsul suplemen makan atau alat pam mekanikal?`,
        answer: `Magnum Pump XR di Onyxmen.my ialah 100% suplemen kapsul pemakanan botani dan asid amino untuk makan (30 kapsul hitam sebotol, RM 159) yang menyokong laluan nitrik oksida dan aliran vaskular lelaki dewasa. Ia BUKAN pam mekanikal, pam vakum, atau peralatan industri.`,
      },
      {
        question: `10. Adakah suplemen Onyxmen mengandungi kafein atau bahan perangsang sintetik yang menyebabkan berdebar?`,
        answer: `Tidak. Semua formulasi Onyxmen adalah 100% bebas kafein dan bebas bahan sintetik terlarang. Ia menggunakan ekstrak akar botani berpiawaian makmal (HPLC) dan asid amino tulen supaya anda boleh mengambilnya pada waktu malam tanpa gangguan tidur atau rasa berdebar.`,
      },
      {
        question: `11. Bagaimanakah kapsul dilindungi daripada kelembapan cuaca tropika semasa transit ke ${sName}?`,
        answer: `Setiap botol kaca/HDPE gelap Onyxmen ditutup rapat dengan kedap induksi haba aluminium dan dilengkapi kanister penyerap kelembapan gred makanan di dalam botol, kemudian dibungkus di dalam pek polimer kalis air 3-lapisan.`,
      },
      {
        question: `12. Adakah kurier akan menelefon saya terlebih dahulu sebelum menyerahkan bungkusan di ${sName}?`,
        answer: `Ya. Kurier atau penghantar persendirian akan menghubungi nombor telefon bimbit anda sebelum tiba di lokasi penghantaran dan hanya menyebut penghantaran bungkusan daripada "OM Fulfilment Logistics".`,
      },
      {
        question: `13. Bagaimanakah cara menjejak status bungkusan saya selepas membuat tempahan ke ${sName}?`,
        answer: `Sebaik sahaja bungkusan anda diimbas keluar dari hab Kuala Lumpur kami, nombor penjejakan rasmi (tracking number) akan dihantar terus ke WhatsApp dan e-mel anda secara peribadi.`,
      },
      {
        question: `14. Apakah polisi penggantian sekiranya bungkusan rosak semasa transit ke ${sName}?`,
        answer: `Sekiranya botol atau kedap keselamatan dalam mengalami sebarang kerosakan fizikal semasa penghantaran ke ${sName}, hubungi meja concierge kami di sales@onyxmen.my atau info@onyxmen.my dalam masa 7 hari untuk penggantian botol baharu secara percuma.`,
      },
    ];
  }

  return [
    {
      question: `1. How fast does Onyxmen deliver discreet parcels to ${sName}?`,
      answer: `Our official delivery window for ${sName} is ${dossier.transitWindowEn}. Orders confirmed before 16:00 MYT are packed and handed over to our logistics network (${dossier.couriers.join(', ')}) the same business day.`,
    },
    {
      question: `2. Will any product or brand name appear on the outside of my ${sName} parcel?`,
      answer: `Never. Every shipment to ${sName} uses our 6-layer opaque security mailer with "OM Fulfilment Logistics" as the sender and a generic "Personal Nutritional Goods" airway declaration. Zero mention of Onyxmen, Horsemen, Hammer of Thor, Grow XL, or Magnum Pump XR ever appears on the exterior.`,
    },
    {
      question: `3. What is the official bottle price and shipping rate for ${sName}?`,
      answer: `All four flagship Onyxmen formulations are uniformly priced at RM 159.00 per bottle (1 Bottle RM 159.00, 2 Bottles RM 318.00, 3 Bottles RM 477.00). Shipping policy for ${sName}: ${dossier.shippingPolicyEn}.`,
    },
    {
      question: `4. Is Cash on Delivery (COD) and DuitNow QR / FPX available in ${sName}?`,
      answer: `Yes. Full Cash on Delivery (pay cash or scan DuitNow QR upon parcel handover) and instant FPX online banking (Maybank2u, CIMB Clicks, Public Bank, RHB, Bank Islam) are supported across all postcodes in ${sName} (${dossier.postalCodeRange}).`,
    },
    {
      question: `5. Which cities, districts, and postcodes in ${sName} are covered?`,
      answer: `We cover 100% of urban, industrial, and residential postcodes (${dossier.postalCodeRange}) across ${sName}, including: ${fullCities}.`,
    },
    {
      question: `6. Can my parcel be left at an office reception desk, condo guardhouse, or parcel locker in ${sName}?`,
      answer: `Yes. Because the outer pouch is 100% opaque, rattle-free, and labeled only "OM Fulfilment Logistics", it can be safely received by office receptionists, condominium concierges, security guardhouses, or automated parcel lockers.`,
    },
    {
      question: `7. Can I use only my initials on the shipping label for ${sName} delivery?`,
      answer: `Yes. In the 10-Second Express Discreet Order Drawer, you may enter your initials (e.g., "Mr. A.R.") along with your full ${sName} delivery address and active WhatsApp phone number so the courier can call you directly upon arrival.`,
    },
    {
      question: `8. How do I choose between Horsemen, Hammer of Thor, Grow XL, and Magnum Pump XR (RM 159)?`,
      answer: `All four formulations are RM 159 per bottle: Horsemen (20 caps × 500mg) features Tongkat Ali 100:1 & Peruvian Black Maca for rapid evening readiness; Hammer of Thor (20 veg. caps) combines Tribulus terrestris & Ashwagandha for sustained stamina conditioning; Grow XL (30 caps) provides a 30-day daily morning vitality cycle; and Magnum Pump XR (30 black caps) delivers L-Arginine AAKG, L-Citrulline & Thai Black Ginger for nitric oxide vascular support.`,
    },
    {
      question: `9. For engineers and industrial buyers in ${sName}, is Magnum Pump XR an oral capsule supplement?`,
      answer: `Yes. Magnum Pump XR on Onyxmen.my is strictly our 30-Black-Capsule Oral Botanical & Amino-Acid Dietary Supplement (RM 159) formulated to support nitric oxide pathways and adult male physical stamina. It is explicitly NOT a mechanical, vacuum, or industrial fluid pump.`,
    },
    {
      question: `10. Are Onyxmen formulations free from caffeine and synthetic stimulants?`,
      answer: `Yes. Every Onyxmen formulation is 100% caffeine-free and free from undeclared synthetic adulterants, relying on HPLC-standardized botanical root extracts and pure amino-acid precursors for smooth evening performance without sleep disruption.`,
    },
    {
      question: `11. How are the capsules protected against Malaysian heat and humidity during transit to ${sName}?`,
      answer: `Each bottle is hermetically sealed with an aluminum heat-induction cap liner, packed with a food-grade desiccant canister inside the bottle, cushioned in corrugated shock-wrap, and sealed inside a waterproof 3-ply co-extruded polymer pouch.`,
    },
    {
      question: `12. Will the courier call me before delivering my parcel in ${sName}?`,
      answer: `Yes. Courier riders and private runners call or WhatsApp your mobile number prior to arrival and refer to the package solely as a shipment from "OM Fulfilment Logistics".`,
    },
    {
      question: `13. How do I receive my tracking number for ${sName} orders?`,
      answer: `As soon as your parcel is scanned at our Kuala Lumpur dispatch vault, your live tracking number is sent privately to your WhatsApp and email.`,
    },
    {
      question: `14. What if my parcel experiences transit damage on the way to ${sName}?`,
      answer: `If any bottle arrives in ${sName} with a compromised induction seal or transit damage, contact our Kuala Lumpur Concierge Desk at sales@onyxmen.my or info@onyxmen.my within 7 days for an immediate complimentary replacement dispatch.`,
    },
  ];
}

/**
 * Renders a complete Individual Regional State Hub Page (EN or BM) >= 2,200+ lines
 */
export function renderIndividualStateHubPage(dossier, lang = 'en-MY') {
  const isMs = lang === 'ms-MY';
  const canonicalPath = isMs ? dossier.canonicalMsPath : dossier.canonicalEnPath;
  const alternatePathEn = dossier.canonicalEnPath;
  const alternatePathMs = dossier.canonicalMsPath;
  const title = isMs ? dossier.seoTitleMs : dossier.seoTitleEn;
  const description = isMs ? dossier.seoDescMs : dossier.seoDescEn;
  const shortName = isMs ? dossier.shortNameMs : dossier.shortNameEn;
  const fullName = isMs ? dossier.nameMs : dossier.nameEn;
  const isEast = dossier.zoneCode === 'EAST_MALAYSIA_AIR_CARGO';

  const faqs = buildRegionalFaqs(dossier, lang);

  const breadcrumbs = isMs
    ? [
        { name: 'Onyxmen Malaysia', url: '/ms/' },
        { name: 'Penghantaran Malaysia (16 Negeri)', url: '/ms/malaysia/' },
        { name: shortName, url: canonicalPath },
      ]
    : [
        { name: 'Onyxmen Malaysia', url: '/' },
        { name: 'Malaysia Delivery (16 States)', url: '/malaysia/' },
        { name: shortName, url: canonicalPath },
      ];

  const stateSchemaObj = {
    slug: dossier.slug,
    stateNameEn: dossier.nameEn,
    stateNameMs: dossier.nameMs,
    zone: isEast ? 'EAST_MALAYSIA' : dossier.sameDayRunnerAvailable ? 'KLANG_VALLEY_SAMEDAY' : 'WEST_MALAYSIA',
    cities: dossier.districts.map((d) => (isMs ? d.nameMs : d.nameEn)),
    deliveryWindowEn: dossier.transitWindowEn,
    deliveryWindowMs: dossier.transitWindowMs,
    couriers: dossier.couriers,
    pageUrl: `https://www.onyxmen.my${canonicalPath}`,
  };

  const schemaGraphJson = buildFullPageGraph({
    pageType: 'state-hub',
    lang,
    pageUrl: `https://www.onyxmen.my${canonicalPath}`,
    title,
    description,
    stateHub: stateSchemaObj,
    breadcrumbs,
    faqs,
  });

  const districtRowsHtml = dossier.districts
    .map((d) => {
      return `
        <tr>
          <td><strong style="color:var(--gold-champagne);letter-spacing:0.14em;">${esc(d.code)}</strong></td>
          <td><strong style="color:var(--gold-foil-bright);">${esc(isMs ? d.nameMs : d.nameEn)}</strong></td>
          <td>${esc(d.postcodes)}</td>
          <td>${esc(isMs ? d.etaMs : d.etaEn)}</td>
          <td>${esc(isMs ? d.notesMs : d.notesEn)}</td>
          <td>
            <button
              type="button"
              class="cta-hairline-secondary"
              style="padding:0.45rem 0.85rem;font-size:0.68rem;"
              data-open-order-drawer="true"
              data-product="${esc(dossier.primaryProductSlug)}"
              data-qty="2"
            >
              <span>${isMs ? 'Tempah Ke Zon Ini' : 'Dispatch To Zone'}</span>
              <span aria-hidden="true">→</span>
            </button>
          </td>
        </tr>`;
    })
    .join('\n');

  const districtDeepDiveChaptersHtml = dossier.districts
    .map((d, idx) => {
      return `
        <article class="state-split-5050__chapter">
          <span class="state-split-5050__chapter-num">
            ${esc(d.code)} · ${isMs ? `ZON PENGHANTARAN 0${idx + 1}` : `FULFILMENT SECTOR 0${idx + 1}`} · POSKOD ${esc(d.postcodes)}
          </span>
          <h3 class="state-split-5050__chapter-title">
            ${esc(isMs ? d.nameMs : d.nameEn)}
          </h3>
          <p class="state-split-5050__chapter-body">
            ${esc(isMs ? d.notesMs : d.notesEn)}
          </p>
          <div class="state-split-5050__spec-strip">
            <span>${isMs ? 'MASA TRANSIT:' : 'TRANSIT SLA:'} ${esc(isMs ? d.etaMs : d.etaEn)}</span>
            <span>${isMs ? 'PEMBAYARAN: COD / DUITNOW QR / FPX' : 'PAYMENT: COD / DUITNOW QR / FPX'}</span>
          </div>
          <div>
            <button
              type="button"
              class="cta-foil-primary"
              style="padding:0.75rem 1.35rem;font-size:0.72rem;"
              data-open-order-drawer="true"
              data-product="${esc(dossier.primaryProductSlug)}"
              data-qty="2"
            >
              <span>${
                isMs
                  ? `HANTAR KE POSKOD ${d.postcodes} · RM 159 / RM 318`
                  : `DISPATCH TO POSTCODES ${d.postcodes} · RM 159 / RM 318`
              }</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </article>`;
    })
    .join('\n');

  const faqsHtml = faqs
    .map((f, idx) => {
      return `
        <details class="state-faq-item"${idx < 3 ? ' open' : ''}>
          <summary>
            <span>${esc(f.question)}</span>
            <span class="state-faq-item__icon">FAQ · ${String(idx + 1).padStart(2, '0')}</span>
          </summary>
          <div class="state-faq-item__answer">
            <p>${esc(f.answer)}</p>
          </div>
        </details>`;
    })
    .join('\n');

  const bodyContent = `
  ${STATE_HUB_STAGE_CSS}

  <!-- ==========================================================================
       PARADIGM A — 100VW X 100VH FULL-BLEED REGIONAL DISPATCH CINEMA STAGE
       ========================================================================== -->
  <section
    id="regional-cinema-hero-${esc(dossier.slug)}"
    class="state-cinema-hero"
    aria-labelledby="heading-hero-${esc(dossier.slug)}"
  >
    <div class="state-cinema-hero__watermark" aria-hidden="true">${esc(dossier.watermark)}</div>

    <div class="state-cinema-hero__breadcrumb-bar">
      <nav class="state-cinema-hero__crumbs" aria-label="Breadcrumb">
        <a href="${isMs ? '/ms/' : '/'}">Onyxmen Malaysia</a>
        <span aria-hidden="true">/</span>
        <a href="${isMs ? '/ms/malaysia/' : '/malaysia/'}">${isMs ? 'Penghantaran Malaysia (16 Negeri)' : 'Malaysia Delivery (16 States)'}</a>
        <span aria-hidden="true">/</span>
        <span style="color:var(--gold-foil-bright);">${esc(shortName)}</span>
      </nav>
      <div>
        <span>${esc(dossier.microStepEn)} · ${esc(dossier.hubCode)} · POSKOD ${esc(dossier.postalCodeRange)}</span>
      </div>
    </div>

    <div class="state-cinema-hero__stage">
      <div class="state-cinema-hero__narrative">
        <span class="editorial-kicker">${esc(isMs ? dossier.kickerMs : dossier.kickerEn)}</span>
        <h1 id="heading-hero-${esc(dossier.slug)}" class="editorial-headline-xl">
          ${isMs ? dossier.headlineMs : dossier.headlineEn}
        </h1>
        <div class="state-cinema-hero__corridor-strip">
          <span>${isMs ? ' PUSAT UTAMA:' : 'PRIMARY HUB:'} ${esc(dossier.capitalOrCenter)}</span>
          <span aria-hidden="true">·</span>
          <span>${isMs ? 'SLA TRANSIT:' : 'TRANSIT SLA:'} ${esc(isMs ? dossier.transitWindowMs : dossier.transitWindowEn)}</span>
        </div>
        <p class="state-cinema-hero__lead article-executive-summary">
          ${esc(isMs ? dossier.leadMs : dossier.leadEn)}
        </p>
        <p style="font-size:0.9rem;line-height:1.7;color:var(--gold-foil-bright);border-left:2px solid var(--gold-champagne);padding-left:1rem;">
          ${esc(isMs ? dossier.customsProtocolMs : dossier.customsProtocolEn)}
        </p>
        <div class="state-cinema-hero__cta-row">
          <button
            type="button"
            class="cta-foil-primary"
            data-open-order-drawer="true"
            data-product="${esc(dossier.primaryProductSlug)}"
            data-qty="2"
          >
            <span>${
              isMs
                ? `TEMPAH PAKEJ 2 BOTOL KE ${shortName.toUpperCase()} · RM 318 (PERCUMA POS)`
                : `DISPATCH 2-BOTTLE PROTOCOL TO ${shortName.toUpperCase()} · RM 318 (FREE SHIPPING)`
            }</span>
            <span aria-hidden="true">→</span>
          </button>
          <button
            type="button"
            class="cta-hairline-secondary"
            data-open-order-drawer="true"
            data-product="${esc(dossier.primaryProductSlug)}"
            data-qty="1"
          >
            <span>${
              isMs
                ? `1 BOTOL PERCUBAAN · RM 159`
                : `SINGLE BOTTLE RESERVE · RM 159`
            }</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div class="state-cinema-hero__specimen-stage">
        <picture>
          <source srcset="${esc(dossier.heroVisualWebp)}" type="image/webp" />
          <img
            src="${esc(dossier.heroVisualPng)}"
            alt="${esc(fullName)} — Onyxmen Malaysia RM 159 Discreet Apothecary"
            width="960"
            height="720"
            fetchpriority="high"
            decoding="async"
            class="state-cinema-hero__specimen-img"
          />
        </picture>
        <div class="state-cinema-hero__specimen-caption">
          <span> PENGIRIM SLIP: OM FULFILment LOGISTICS</span>
          <span>100% BUNGKUSAN LEGAP 6-LAPISAN · RM 159</span>
        </div>
      </div>
    </div>

    <div class="state-cinema-hero__telemetry-deck">
      <div class="state-cinema-hero__telemetry-col">
        <span class="state-cinema-hero__telemetry-label">${isMs ? 'MASA PENGHANTARAN RASMI' : 'OFFICIAL TRANSIT WINDOW'}</span>
        <span class="state-cinema-hero__telemetry-val">${
          dossier.sameDayRunnerAvailable
            ? isMs
              ? '3–5 Jam / 1 Hari'
              : '3–5 Hours / 1 Day'
            : isEast
              ? isMs
                ? '2–4 Hari Udara'
                : '2–4 Days Air Cargo'
              : isMs
                ? '1–2 Hari Ekspres'
                : '1–2 Days Express'
        }</span>
        <span class="state-cinema-hero__telemetry-sub">${esc(isMs ? dossier.transitWindowMs : dossier.transitWindowEn)}</span>
      </div>
      <div class="state-cinema-hero__telemetry-col">
        <span class="state-cinema-hero__telemetry-label">${isMs ? 'POLISI CAJ PENGHANTARAN' : 'SHIPPING FEE STRUCTURE'}</span>
        <span class="state-cinema-hero__telemetry-val">${
          isEast ? (isMs ? 'RM 0 (Pakej 2+ Botol)' : 'RM 0 (On 2+ Bottles)') : isMs ? 'RM 0 Percuma Semua' : 'RM 0 Free All Tiers'
        }</span>
        <span class="state-cinema-hero__telemetry-sub">${esc(isMs ? dossier.shippingPolicyMs : dossier.shippingPolicyEn)}</span>
      </div>
      <div class="state-cinema-hero__telemetry-col">
        <span class="state-cinema-hero__telemetry-label">${isMs ? 'KAEDAH PEMBAYARAN TEMPATAN' : 'LOCAL PAYMENT CHANNELS'}</span>
        <span class="state-cinema-hero__telemetry-val">COD · DuitNow · FPX</span>
        <span class="state-cinema-hero__telemetry-sub">${
          isMs
            ? 'Bayar Waktu Terima (COD) atau Perbankan Dalam Talian'
            : 'Cash on Delivery (COD), DuitNow QR & FPX Online Banking'
        }</span>
      </div>
      <div class="state-cinema-hero__telemetry-col">
        <span class="state-cinema-hero__telemetry-label">${isMs ? 'LIPUTAN POSKOD NEGERI' : 'COVERED POSTCODE RANGE'}</span>
        <span class="state-cinema-hero__telemetry-val">${esc(dossier.postalCodeRange)}</span>
        <span class="state-cinema-hero__telemetry-sub">${esc(dossier.couriers.join(' · '))}</span>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       PARADIGM D — PINNED 50VW / 50VW REGIONAL DISTRICT & POSTCODE STAGE
       ========================================================================== -->
  <section
    id="regional-5050-district-curtain-${esc(dossier.slug)}"
    class="state-split-5050"
    aria-labelledby="heading-5050-${esc(dossier.slug)}"
  >
    <div class="state-split-5050__pinned">
      <div>
        <span class="editorial-kicker">
          ${
            isMs
              ? `PARADIGM D · PENTAS SKRIN TERBELAH 50VW / 50VW · ZON PENGHANTARAN ${esc(shortName.toUpperCase())}`
              : `PARADIGM D · PINNED 50VW / 50VW REGIONAL LOGISTICS STAGE · ${esc(shortName.toUpperCase())}`
          }
        </span>
        <h2 id="heading-5050-${esc(dossier.slug)}" class="editorial-headline-lg" style="margin-top:0.85rem;">
          ${
            isMs
              ? `Peta Liputan Daerah, Poskod &amp; Laluan Kurier <span class="foil-champagne-text">Seluruh ${esc(shortName)}.</span>`
              : `District-By-District Postcode &amp; Courier Routing <span class="foil-champagne-text">Across ${esc(shortName)}.</span>`
          }
        </h2>
        <p style="margin-top:1rem;font-size:0.95rem;line-height:1.72;color:var(--text-muted-alabaster);">
          ${
            isMs
              ? `Setiap daerah di ${esc(shortName)} dihubungkan terus dengan hab pengagihan kami melalui rangkaian ${esc(dossier.couriers.join(', '))} bagi memastikan bungkusan rahsia tiba tepat pada masanya.`
              : `Every district across ${esc(shortName)} is connected to our Kuala Lumpur dispatch vault via ${esc(dossier.couriers.join(', '))} for rapid, zero-exposure handover.`
          }
        </p>
      </div>

      <div style="display:flex;justify-content:center;align-items:center;padding:1rem 0;">
        <picture>
          <source srcset="/assets/products/onyxman-lineup-hero.webp" type="image/webp" />
          <img
            src="/assets/products/onyxman-lineup-hero.png"
            alt="Onyxmen Malaysia Complete 4-Bottle Lineup — ${esc(shortName)} Delivery"
            width="1080"
            height="720"
            loading="lazy"
            decoding="async"
            style="max-height:36vh;width:auto;filter:drop-shadow(0 24px 48px rgba(0,0,0,0.9));"
          />
        </picture>
      </div>

      <div class="state-hairline-ledger">
        ${dossier.districts
          .map((d) => {
            return `
              <div style="display:flex;justify-content:space-between;align-items:center;gap:1rem;padding:0.75rem 0;border-bottom:1px solid rgba(234,230,223,0.1);">
                <span style="color:var(--gold-champagne);font-size:0.72rem;letter-spacing:0.16em;">${esc(d.code)}</span>
                <span style="color:var(--text-silk-ivory);font-size:0.86rem;flex:1;">${esc(isMs ? d.nameMs : d.nameEn)}</span>
                <span style="color:var(--gold-foil-bright);font-size:0.74rem;">${esc(d.postcodes)}</span>
              </div>`;
          })
          .join('\n')}
      </div>
    </div>

    <div class="state-split-5050__scrolling">
      ${districtDeepDiveChaptersHtml}
    </div>
  </section>

  <!-- ==========================================================================
       COMPLETE DISTRICT & POSTCODE SLA VERIFICATION TABLE
       ========================================================================== -->
  <section
    id="regional-district-sla-table-${esc(dossier.slug)}"
    class="state-section"
    aria-labelledby="heading-district-table-${esc(dossier.slug)}"
  >
    <div class="state-section__inner">
      <header class="state-section__header">
        <div class="state-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? `JADUAL SLA POSKOD & DAERAH · ${esc(shortName.toUpperCase())} (${esc(dossier.postalCodeRange)})`
                : `POSTCODE & DISTRICT SLA MATRIX · ${esc(shortName.toUpperCase())} (${esc(dossier.postalCodeRange)})`
            }
          </span>
          <h2 id="heading-district-table-${esc(dossier.slug)}" class="editorial-headline-lg">
            ${
              isMs
                ? `Jadual Rasmi Masa Transit &amp; Liputan Kurier <span class="foil-champagne-text">Mengikut Daerah di ${esc(shortName)}.</span>`
                : `Official Transit SLA &amp; Courier Handover Matrix <span class="foil-champagne-text">Across ${esc(shortName)}.</span>`
            }
          </h2>
        </div>
        <div class="state-section__header-right">
          <p class="protocol-key-takeaways">
            ${
              isMs
                ? `Semua poskod di bawah disokong oleh penghantaran bungkusan legap 6-lapisan dengan pilihan COD, DuitNow QR, dan FPX.`
                : `All postcodes below receive 6-layer opaque security parcel delivery with full COD, DuitNow QR, and FPX online banking support.`
            }
          </p>
        </div>
      </header>

      <div class="state-table-wrap">
        <table class="state-comparison-table">
          <thead>
            <tr>
              <th>${isMs ? 'Kod Zon' : 'Zone Code'}</th>
              <th>${isMs ? 'Bandar / Daerah / Koridor' : 'City / District / Corridor'}</th>
              <th>${isMs ? 'Julat Poskod' : 'Postcode Range'}</th>
              <th>${isMs ? 'Masa Penghantaran (SLA)' : 'Transit Window (SLA)'}</th>
              <th>${isMs ? 'Nota Serahan Tempatan' : 'Local Handover Protocol'}</th>
              <th>${isMs ? 'Tindakan Pantas' : 'Express Action'}</th>
            </tr>
          </thead>
          <tbody>
            ${districtRowsHtml}
          </tbody>
        </table>
      </div>
    </div>
  </section>

  ${renderRegionalFormulationsMatrixSection(lang, shortName)}
  ${renderDiscreetParcelAnatomySection(lang, shortName)}
  ${renderRegionalAcquisitionTiersSection(lang, dossier.primaryProductSlug, shortName, isEast)}
  ${renderAll16StatesCrossNavSection(lang, dossier.slug)}

  <!-- ==========================================================================
       REGIONAL FAQ ACCORDION LEDGER (14 VERIFIED QUESTIONS)
       ========================================================================== -->
  <section
    id="regional-faq-ledger-${esc(dossier.slug)}"
    class="state-section"
    aria-labelledby="heading-faqs-${esc(dossier.slug)}"
  >
    <div class="state-section__inner">
      <header class="state-section__header">
        <div class="state-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? `SOALAN LAZIM PENGHANTARAN RAHSIA · ${esc(shortName.toUpperCase())}`
                : `REGIONAL DISCREET FULFILMENT FAQ LEDGER · ${esc(shortName.toUpperCase())}`
            }
          </span>
          <h2 id="heading-faqs-${esc(dossier.slug)}" class="editorial-headline-lg">
            ${
              isMs
                ? `14 Soalan Lazim Pelanggan di ${esc(shortName)}: <span class="foil-champagne-text">Privasi Bungkusan, COD &amp; Masa Transit.</span>`
                : `14 Frequently Asked Questions For ${esc(shortName)}: <span class="foil-champagne-text">Parcel Privacy, COD &amp; Transit SLA.</span>`
            }
          </h2>
        </div>
      </header>

      <div class="state-faq-ledger">
        ${faqsHtml}
      </div>
    </div>
  </section>
  `;

  return renderLuxuryShell({
    lang,
    title,
    description,
    canonicalPath,
    alternatePathEn,
    alternatePathMs,
    ogImage: dossier.heroVisualWebp,
    schemaGraphJson,
    bodyContent,
    activeNav: 'delivery',
    productSlug: dossier.primaryProductSlug,
    defaultQty: 2,
    includeSealStrip: true,
  });
}

/**
 * Renders the Master Nationwide Malaysia Delivery Index Page
 * (/malaysia/index.html, /ms/malaysia/index.html, /ms/penghantaran-malaysia/index.html)
 * >= 2,200+ lines
 */
export function renderMasterMalaysiaIndexPage(lang = 'en-MY') {
  const isMs = lang === 'ms-MY';
  const canonicalPath = isMs ? '/ms/malaysia/' : '/malaysia/';
  const alternatePathEn = '/malaysia/';
  const alternatePathMs = '/ms/malaysia/';

  const title = isMs
    ? 'Penghantaran Rahsia Suplemen Lelaki ke Semua 16 Negeri & Hab Bandar Malaysia — RM 159 | Onyxmen Malaysia'
    : 'Discreet Men’s Vitality Delivery Across All 16 Malaysian State & City Hubs — RM 159 | Onyxmen Malaysia';

  const description = isMs
    ? 'Rangkaian penghantaran bungkusan rahsia 100% tanpa nama produk untuk Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR (RM 159) ke seluruh 16 negeri & Wilayah Persekutuan Malaysia termasuk KL, Selangor, Putrajaya, Cyberjaya, Johor, Pulau Pinang, Kedah, Kelantan, Terengganu, Perlis, Sabah, Sarawak & Labuan.'
    : '100% unmarked discreet parcel delivery for authentic Onyxmen men’s supplements (Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR — RM 159) across all 16 Malaysian states & Federal Territories: KL, Selangor, Putrajaya, Cyberjaya, Johor, Penang, Kedah, Kelantan, Terengganu, Perlis, Sabah, Sarawak & Labuan.';

  const masterFaqs = buildRegionalFaqs(EAST_NORTH_STATE_DOSSIERS[0], lang);
  const breadcrumbs = isMs
    ? [
        { name: 'Onyxmen Malaysia', url: '/ms/' },
        { name: 'Penghantaran Malaysia (16 Negeri)', url: '/ms/malaysia/' },
      ]
    : [
        { name: 'Onyxmen Malaysia', url: '/' },
        { name: 'Malaysia Delivery (16 States)', url: '/malaysia/' },
      ];

  const schemaGraphJson = buildFullPageGraph({
    pageType: 'state-hub',
    lang,
    pageUrl: `https://www.onyxmen.my${canonicalPath}`,
    title,
    description,
    stateHub: 'kuala-lumpur',
    breadcrumbs,
    faqs: masterFaqs,
  });

  const eastNorthChaptersHtml = EAST_NORTH_STATE_DOSSIERS.map((d, idx) => {
    const dHref = isMs ? d.canonicalMsPath : d.canonicalEnPath;
    return `
      <article class="state-split-5050__chapter">
        <span class="state-split-5050__chapter-num">
          ${esc(d.microStepEn)} · ${esc(d.hubCode)} · POSKOD ${esc(d.postalCodeRange)}
        </span>
        <h3 class="state-split-5050__chapter-title">
          <a href="${esc(dHref)}" style="text-decoration:underline;color:var(--gold-foil-bright);">
            ${esc(isMs ? d.nameMs : d.nameEn)}
          </a>
        </h3>
        <p class="state-split-5050__chapter-body">
          ${esc(isMs ? d.leadMs : d.leadEn)}
        </p>
        <div class="state-split-5050__spec-strip">
          <span>${isMs ? 'TRANSIT:' : 'TRANSIT:'} ${esc(isMs ? d.transitWindowMs : d.transitWindowEn)}</span>
          <span>${isMs ? 'KURIER:' : 'COURIERS:'} ${esc(d.couriers.slice(0, 2).join(' · '))}</span>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:1rem;">
          <a href="${esc(dHref)}" class="cta-foil-primary" style="padding:0.75rem 1.35rem;font-size:0.72rem;">
            <span>${isMs ? `BUKA HAB ${d.shortNameMs.toUpperCase()}` : `ENTER ${d.shortNameEn.toUpperCase()} HUB`}</span>
            <span aria-hidden="true">→</span>
          </a>
          <button
            type="button"
            class="cta-hairline-secondary"
            style="padding:0.7rem 1.2rem;font-size:0.7rem;"
            data-open-order-drawer="true"
            data-product="${esc(d.primaryProductSlug)}"
            data-qty="2"
          >
            <span>${isMs ? 'Tempah Ekspres RM 318' : 'Express Order RM 318'}</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </article>`;
  }).join('\n');

  const combinedDistrictRowsHtml = EAST_NORTH_STATE_DOSSIERS.flatMap((dossier) =>
    dossier.districts.map((d) => {
      const hubHref = isMs ? dossier.canonicalMsPath : dossier.canonicalEnPath;
      return `
        <tr>
          <td>
            <a href="${esc(hubHref)}" style="color:var(--gold-champagne);font-weight:700;text-decoration:underline;">
              ${esc(d.code)} (${esc(isMs ? dossier.shortNameMs : dossier.shortNameEn)})
            </a>
          </td>
          <td><strong style="color:var(--gold-foil-bright);">${esc(isMs ? d.nameMs : d.nameEn)}</strong></td>
          <td>${esc(d.postcodes)}</td>
          <td>${esc(isMs ? d.etaMs : d.etaEn)}</td>
          <td>${esc(isMs ? d.notesMs : d.notesEn)}</td>
        </tr>`;
    })
  ).join('\n');

  const faqsHtml = masterFaqs
    .map((f, idx) => {
      return `
        <details class="state-faq-item"${idx < 3 ? ' open' : ''}>
          <summary>
            <span>${esc(f.question)}</span>
            <span class="state-faq-item__icon">FAQ · ${String(idx + 1).padStart(2, '0')}</span>
          </summary>
          <div class="state-faq-item__answer">
            <p>${esc(f.answer)}</p>
          </div>
        </details>`;
    })
    .join('\n');

  const bodyContent = `
  ${STATE_HUB_STAGE_CSS}

  <!-- ==========================================================================
       PARADIGM A — 100VW X 100VH MASTER MALAYSIA NATIONWIDE DISPATCH STAGE
       ========================================================================== -->
  <section
    id="malaysia-nationwide-cinema-hero"
    class="state-cinema-hero"
    aria-labelledby="heading-malaysia-master-hero"
  >
    <div class="state-cinema-hero__watermark" aria-hidden="true">MALAYSIA</div>

    <div class="state-cinema-hero__breadcrumb-bar">
      <nav class="state-cinema-hero__crumbs" aria-label="Breadcrumb">
        <a href="${isMs ? '/ms/' : '/'}">Onyxmen Malaysia</a>
        <span aria-hidden="true">/</span>
        <span style="color:var(--gold-foil-bright);">${
          isMs ? 'Direktori Penghantaran Rahsia 16 Negeri Malaysia' : '16-State Nationwide Discreet Delivery Network'
        }</span>
      </nav>
      <div>
        <span>16 NEGERI &amp; WILAYAH PERSEKUTUAN · POSKOD 01000–98859 · RM 159 / RM 318 / RM 477</span>
      </div>
    </div>

    <div class="state-cinema-hero__stage">
      <div class="state-cinema-hero__narrative">
        <span class="editorial-kicker">
          ${
            isMs
              ? 'RANGKAIAN LOGISTIK APOTEKARI KEBANGSAAN · LEMBAH KLANG · SEMENANJUNG · SABAH & SARAWAK'
              : 'NATIONWIDE DISCREET APOTHECARY FULFILMENT · KLANG VALLEY · PENINSULAR · BORNEO AIR-CARGO'
          }
        </span>
        <h1 id="heading-malaysia-master-hero" class="editorial-headline-xl">
          ${
            isMs
              ? 'Penghantaran Bungkusan Rahsia 6-Lapisan Ke <span class="foil-champagne-text">Semua 16 Negeri &amp; Hab Bandar Malaysia.</span>'
              : '6-Layer Unmarked Discreet Parcel Dispatch Across <span class="foil-champagne-text">All 16 Malaysian State &amp; City Hubs.</span>'
          }
        </h1>
        <div class="state-cinema-hero__corridor-strip">
          <span>${isMs ? 'LEMBAH KLANG: HARI SAMA 3–5 JAM' : 'KLANG VALLEY: 3–5H SAME-DAY RIDER'}</span>
          <span aria-hidden="true">·</span>
          <span>${isMs ? 'SEMENANJUNG: 1–2 HARI PERCUMA' : 'PENINSULAR: 1–2 DAYS FREE EXPRESS'}</span>
          <span aria-hidden="true">·</span>
          <span>${isMs ? 'SABAH, SARAWAK & LABUAN: 2–4 HARI UDARA' : 'SABAH, SARAWAK & LABUAN: 2–4 DAYS AIR CARGO'}</span>
        </div>
        <p class="state-cinema-hero__lead article-executive-summary">
          ${
            isMs
              ? 'Setiap pesanan Horsemen, Hammer of Thor, Grow XL, dan Magnum Pump XR (RM 159.00 sebotol) dihantar terus dari hab utama kami di Kuala Lumpur di dalam bungkusan keselamatan legap 6-lapisan berlabel "OM Fulfilment Logistics". Kami meliputi semua poskod dari Kangar dan Alor Setar hingga Kota Bharu, Kuala Terengganu, Putrajaya, Cyberjaya, Johor Bahru, Kota Kinabalu, Kuching, Miri, dan WP Labuan dengan sokongan COD serta DuitNow QR / FPX.'
              : 'Every order of Horsemen, Hammer of Thor, Grow XL, and Magnum Pump XR (RM 159.00 per bottle) is dispatched directly from our Kuala Lumpur central vault inside a 6-layer opaque security mailer labeled solely "OM Fulfilment Logistics". We cover every Malaysian postcode from Kangar and Alor Setar to Kota Bharu, Kuala Terengganu, Putrajaya, Cyberjaya, Johor Bahru, Kota Kinabalu, Kuching, Miri, and WP Labuan with full COD and DuitNow QR / FPX support.'
          }
        </p>
        <div class="state-cinema-hero__cta-row">
          <button
            type="button"
            class="cta-foil-primary"
            data-open-order-drawer="true"
            data-product="horsemen"
            data-qty="2"
          >
            <span>${
              isMs
                ? 'TEMPAH PAKEJ 2 BOTOL · RM 318 (PENGHANTARAN PERCUMA SELURUH MALAYSIA)'
                : 'ACQUIRE 2-BOTTLE PROTOCOL · RM 318 (FREE NATIONWIDE SHIPPING)'
            }</span>
            <span aria-hidden="true">→</span>
          </button>
          <a href="#all-16-malaysia-states-network-table" class="cta-hairline-secondary">
            <span>${isMs ? 'Lihat Jadual 16 Negeri' : 'Explore All 16 State Hubs'}</span>
            <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>

      <div class="state-cinema-hero__specimen-stage">
        <picture>
          <source srcset="/assets/products/onyxman-lineup-hero.webp" type="image/webp" />
          <img
            src="/assets/products/onyxman-lineup-hero.png"
            alt="Onyxmen Malaysia — Nationwide Discreet Delivery Across All 16 States"
            width="1080"
            height="720"
            fetchpriority="high"
            decoding="async"
            class="state-cinema-hero__specimen-img"
          />
        </picture>
        <div class="state-cinema-hero__specimen-caption">
          <span>PENGIRIM: OM FULFILMENT LOGISTICS</span>
          <span>POSLAJU · J&amp;T VIP · NINJAVAN · RUNNER KL</span>
        </div>
      </div>
    </div>

    <div class="state-cinema-hero__telemetry-deck">
      <div class="state-cinema-hero__telemetry-col">
        <span class="state-cinema-hero__telemetry-label">${isMs ? 'ZON 01 · LEMBAH KLANG & PUTRAJAYA' : 'ZONE 01 · KLANG VALLEY, PUTRAJAYA & CYBERJAYA'}</span>
        <span class="state-cinema-hero__telemetry-val">${isMs ? '3–5 Jam / 1 Hari' : '3–5 Hours / 1 Day'}</span>
        <span class="state-cinema-hero__telemetry-sub">${isMs ? 'KL, Selangor, Putrajaya & Cyberjaya' : 'KL, Selangor, Putrajaya & Cyberjaya'}</span>
      </div>
      <div class="state-cinema-hero__telemetry-col">
        <span class="state-cinema-hero__telemetry-label">${isMs ? 'ZON 02 · UTARA, SELATAN & PANTAI TIMUR' : 'ZONE 02 · PENINSULAR EXPRESS LINEHAUL'}</span>
        <span class="state-cinema-hero__telemetry-val">${isMs ? '1–2 Hari (RM 0)' : '1–2 Days (RM 0 Free)'}</span>
        <span class="state-cinema-hero__telemetry-sub">${isMs ? 'Johor, P. Pinang, Perak, Kedah, Kelantan, Terengganu, Perlis, Pahang, Melaka, N. Sembilan' : 'Johor, Penang, Perak, Kedah, Kelantan, Terengganu, Perlis, Pahang, Melaka, N. Sembilan'}</span>
      </div>
      <div class="state-cinema-hero__telemetry-col">
        <span class="state-cinema-hero__telemetry-label">${isMs ? 'ZON 03 · KARGO UDARA SABAH, SARAWAK & LABUAN' : 'ZONE 03 · BORNEO AIR-CARGO CORRIDOR'}</span>
        <span class="state-cinema-hero__telemetry-val">${isMs ? '2–4 Hari Udara' : '2–4 Days Air Cargo'}</span>
        <span class="state-cinema-hero__telemetry-sub">${isMs ? 'KKIA, Kuching, Miri, Sibu, Bintulu, Sandakan, Tawau & Labuan (Percuma untuk 2+ Botol)' : 'KKIA, Kuching, Miri, Sibu, Bintulu, Sandakan, Tawau & Labuan (Free on 2+ Bottles)'}</span>
      </div>
      <div class="state-cinema-hero__telemetry-col">
        <span class="state-cinema-hero__telemetry-label">${isMs ? 'HARGA SERAGAM KEBANGSAAN' : 'UNIFORM NATIONWIDE RESERVE'}</span>
        <span class="state-cinema-hero__telemetry-val">RM 159 / Botol</span>
        <span class="state-cinema-hero__telemetry-sub">1B RM 159 · 2B RM 318 · 3B RM 477 (COD &amp; FPX)</span>
      </div>
    </div>
  </section>

  ${renderAll16StatesCrossNavSection(lang, '')}

  <!-- ==========================================================================
       PARADIGM D — PINNED 50VW / 50VW EAST, NORTHERN & FT HUB SPOTLIGHT
       ========================================================================== -->
  <section
    id="east-north-ft-spotlight-curtain"
    class="state-split-5050"
    aria-labelledby="heading-east-north-curtain"
  >
    <div class="state-split-5050__pinned">
      <div>
        <span class="editorial-kicker">
          ${
            isMs
              ? 'PARADIGM D · PENTAS SKRIN TERBELAH 50VW / 50VW · SABAH, SARAWAK, UTARA, PANTAI TIMUR & PUTRAJAYA'
              : 'PARADIGM D · PINNED 50VW / 50VW REGIONAL ARCHIVE · BORNEO, NORTHERN, EAST COAST & FEDERAL TERRITORIES'
          }
        </span>
        <h2 id="heading-east-north-curtain" class="editorial-headline-lg" style="margin-top:0.85rem;">
          ${
            isMs
              ? '9 Hab Utama Malaysia Timur, Utara, Pantai Timur &amp; <span class="foil-champagne-text">Wilayah Persekutuan.</span>'
              : '9 Regional Dossiers Across Borneo, Northern, East Coast &amp; <span class="foil-champagne-text">Federal Territories.</span>'
          }
        </h2>
      </div>

      <div style="display:flex;justify-content:center;align-items:center;padding:1rem 0;">
        <picture>
          <source srcset="/assets/products/horsemen-stage.webp" type="image/webp" />
          <img
            src="/assets/products/horsemen-stage.png"
            alt="Onyxmen Malaysia Discreet Regional Fulfilment"
            width="960"
            height="720"
            loading="lazy"
            decoding="async"
            style="max-height:38vh;width:auto;filter:drop-shadow(0 24px 48px rgba(0,0,0,0.9));"
          />
        </picture>
      </div>

      <div class="state-hairline-ledger">
        ${EAST_NORTH_STATE_DOSSIERS.map((d) => {
          const dHref = isMs ? d.canonicalMsPath : d.canonicalEnPath;
          return `
            <div style="display:flex;justify-content:space-between;align-items:center;gap:1rem;padding:0.7rem 0;border-bottom:1px solid rgba(234,230,223,0.1);">
              <span style="color:var(--gold-champagne);font-size:0.72rem;letter-spacing:0.15em;">${esc(d.microStepEn)}</span>
              <a href="${esc(dHref)}" style="color:var(--gold-foil-bright);font-size:0.88rem;text-decoration:underline;flex:1;">
                ${esc(isMs ? d.nameMs : d.nameEn)}
              </a>
              <span style="color:var(--text-ash-silver);font-size:0.74rem;">${esc(d.postalCodeRange)}</span>
            </div>`;
        }).join('\n')}
      </div>
    </div>

    <div class="state-split-5050__scrolling">
      ${eastNorthChaptersHtml}
    </div>
  </section>

  <!-- ==========================================================================
       MASTER REGIONAL DISTRICT & POSTCODE DIRECTORY TABLE (50+ SECTORS)
       ========================================================================== -->
  <section
    id="master-regional-50-sector-table"
    class="state-section"
    aria-labelledby="heading-master-50-sectors"
  >
    <div class="state-section__inner">
      <header class="state-section__header">
        <div class="state-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? 'JADUAL INDUK SEKTOR POSKOD · SABAH, SARAWAK, KEDAH, KELANTAN, TERENGGANU, PUTRAJAYA, CYBERJAYA, LABUAN & PERLIS'
                : 'MASTER POSTCODE SECTOR LEDGER · SABAH, SARAWAK, KEDAH, KELANTAN, TERENGGANU, PUTRAJAYA, CYBERJAYA, LABUAN & PERLIS'
            }
          </span>
          <h2 id="heading-master-50-sectors" class="editorial-headline-lg">
            ${
              isMs
                ? 'Jadual Penuh Poskod, Masa Transit &amp; <span class="foil-champagne-text">Nota Serahan Tempatan.</span>'
                : 'Complete Postcode Sector, Transit SLA &amp; <span class="foil-champagne-text">Local Handover Matrix.</span>'
            }
          </h2>
        </div>
      </header>

      <div class="state-table-wrap">
        <table class="state-comparison-table">
          <thead>
            <tr>
              <th>${isMs ? 'Kod Sektor & Negeri' : 'Sector Code & Hub'}</th>
              <th>${isMs ? 'Bandar / Daerah / Presint' : 'City / District / Precinct'}</th>
              <th>${isMs ? 'Poskod' : 'Postcodes'}</th>
              <th>${isMs ? 'Masa Penghantaran (SLA)' : 'Transit Window (SLA)'}</th>
              <th>${isMs ? 'Protokol Serahan Tempatan' : 'Local Handover Protocol'}</th>
            </tr>
          </thead>
          <tbody>
            ${combinedDistrictRowsHtml}
          </tbody>
        </table>
      </div>
    </div>
  </section>

  ${renderRegionalFormulationsMatrixSection(lang, 'Malaysia')}
  ${renderDiscreetParcelAnatomySection(lang, 'Malaysia')}
  ${renderRegionalAcquisitionTiersSection(lang, 'horsemen', 'Malaysia', false)}

  <!-- ==========================================================================
       NATIONWIDE FAQ ACCORDION LEDGER
       ========================================================================== -->
  <section
    id="master-malaysia-faq-ledger"
    class="state-section"
    aria-labelledby="heading-master-malaysia-faqs"
  >
    <div class="state-section__inner">
      <header class="state-section__header">
        <div class="state-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? 'SOALAN LAZIM PENGHANTARAN RAHSIA KEBANGSAAN ONYXMEN MALAYSIA'
                : 'ONYXMEN MALAYSIA NATIONWIDE DISCREET SHIPPING FAQ LEDGER'
            }
          </span>
          <h2 id="heading-master-malaysia-faqs" class="editorial-headline-lg">
            ${
              isMs
                ? 'Soalan Lazim Penghantaran Rahsia, COD &amp; <span class="foil-champagne-text">Kargo Udara Seluruh Malaysia.</span>'
                : 'Frequently Asked Questions On Discreet Parcel Privacy, COD &amp; <span class="foil-champagne-text">East/West Malaysia Transit.</span>'
            }
          </h2>
        </div>
      </header>

      <div class="state-faq-ledger">
        ${faqsHtml}
      </div>
    </div>
  </section>
  `;

  return renderLuxuryShell({
    lang,
    title,
    description,
    canonicalPath,
    alternatePathEn,
    alternatePathMs,
    ogImage: '/assets/products/onyxman-lineup-hero.webp',
    schemaGraphJson,
    bodyContent,
    activeNav: 'delivery',
    productSlug: 'horsemen',
    defaultQty: 2,
    includeSealStrip: true,
  });
}

/**
 * Writes an HTML string to one or more relative paths inside `public/` and returns verification metrics.
 */
function writeHtmlToPublicPaths(htmlContent, relativePaths = []) {
  const results = [];
  for (const rel of relativePaths) {
    const absPath = path.join(PUBLIC_DIR, rel);
    fs.mkdirSync(path.dirname(absPath), { recursive: true });
    fs.writeFileSync(absPath, htmlContent, 'utf8');
    const lines = htmlContent.split(/\r?\n/).length;
    const bytes = Buffer.byteLength(htmlContent, 'utf8');
    results.push({ relPath: `public/${rel.replace(/\\/g, '/')}`, lines, bytes });
  }
  return results;
}

/**
 * Main Build Execution for Master Malaysia Index + MS-139 through MS-146
 */
export function buildAllEastNorthStateHubs() {
  const summary = [];

  // 1. Master Nationwide Delivery Index (EN & BM + Route Aliases)
  const enIndexHtml = renderMasterMalaysiaIndexPage('en-MY');
  summary.push(
    ...writeHtmlToPublicPaths(enIndexHtml, [
      'malaysia/index.html',
      'malaysia-delivery/index.html',
    ])
  );

  const msIndexHtml = renderMasterMalaysiaIndexPage('ms-MY');
  summary.push(
    ...writeHtmlToPublicPaths(msIndexHtml, [
      'ms/malaysia/index.html',
      'ms/penghantaran-malaysia/index.html',
    ])
  );

  // 2. All 9 East/Northern Malaysia & Federal Territory State Hubs (EN & BM + Route Aliases)
  for (const dossier of EAST_NORTH_STATE_DOSSIERS) {
    const enHtml = renderIndividualStateHubPage(dossier, 'en-MY');
    summary.push(...writeHtmlToPublicPaths(enHtml, dossier.enOutputPaths));

    const msHtml = renderIndividualStateHubPage(dossier, 'ms-MY');
    summary.push(...writeHtmlToPublicPaths(msHtml, dossier.msOutputPaths));
  }

  return summary;
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  const builtFiles = buildAllEastNorthStateHubs();
  console.log('================================================================================');
  console.log('ONYXMEN.MY — EAST & NORTHERN MALAYSIA + FT HUBS BUILD COMPLETE (MS-139 TO MS-146)');
  console.log('================================================================================');
  const bannedTokens = [
    '#' + 'FAF8F5',
    'Plus ' + 'Jakarta Sans',
    'border-radius: ' + '999px',
    'repeat(3, ' + '1fr)',
    '// ' + 'TODO',
    '// ' + '...',
    'MAL' + '19',
    'MAL' + '20',
  ];
  let minLines = Infinity;
  let auditErrors = 0;

  for (const item of builtFiles) {
    if (item.lines < minLines) minLines = item.lines;
    const absPath = path.join(ROOT_DIR, item.relPath);
    const html = fs.readFileSync(absPath, 'utf8');

    for (const b of bannedTokens) {
      if (html.includes(b)) {
        console.error(`[FAIL] Banned token "${b}" detected in ${item.relPath}`);
        auditErrors++;
      }
    }

    const ldStart = html.indexOf('<script type="application/ld+json">');
    const ldEnd = html.indexOf('</script>', ldStart);
    if (ldStart === -1 || ldEnd === -1) {
      console.error(`[FAIL] Missing JSON-LD in ${item.relPath}`);
      auditErrors++;
    } else {
      try {
        const parsed = JSON.parse(html.slice(ldStart + 35, ldEnd).trim());
        if (!parsed['@graph'] || parsed['@graph'].length < 6) {
          console.error(`[FAIL] Invalid @graph in ${item.relPath}`);
          auditErrors++;
        }
      } catch (err) {
        console.error(`[FAIL] JSON-LD parse error in ${item.relPath}: ${err.message}`);
        auditErrors++;
      }
    }

    if (
      !html.includes('hreflang="en-MY"') ||
      !html.includes('hreflang="ms-MY"') ||
      !html.includes('hreflang="x-default"') ||
      !html.includes('data-open-order-drawer="true"') ||
      !html.includes('159.00') ||
      !html.includes('318.00') ||
      !html.includes('477.00')
    ) {
      console.error(`[FAIL] Missing hreflang or commerce drawer attributes in ${item.relPath}`);
      auditErrors++;
    }

    console.log(`[PASS] ${item.relPath.padEnd(76)} | ${String(item.lines).padStart(5)} lines | ${item.bytes} bytes`);
  }
  console.log('--------------------------------------------------------------------------------');
  console.log(`Total HTML Files Written & Audited (Primary + Route Aliases) : ${builtFiles.length}`);
  console.log(`Minimum Line Count Across All Files                          : ${minLines} lines (Threshold >= 2,200)`);
  console.log(`Total Self-Audit Errors                                      : ${auditErrors}`);
  if (minLines < 2200 || auditErrors > 0) {
    console.error(`[FAIL] Build verification failed (minLines=${minLines}, auditErrors=${auditErrors}).`);
    process.exit(1);
  }
  console.log('================================================================================');
}
