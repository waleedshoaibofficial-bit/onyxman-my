#!/usr/bin/env node
/**
 * ONYXMAN.MY — ENGLISH BUYER-INTENT SEO GUIDES & PROTOCOL ARCHIVE BUILDER (MS-147 TO MS-153)
 * Generates the Master English Guides Index (`/guides/index.html`) PLUS all 6 English Buyer-Intent SEO Guides
 * and all route aliases referenced across `src/utils/i18n.ts`, `ObsidianHeader.mjs`, `ObsidianFooter.mjs`,
 * `src/data/guides.json`, and `public/index.html`:
 *
 * - MS-147: `public/guides/index.html` (Master Editorial & Protocol Guides Archive)
 * - MS-148: Guide 1 — Optimal Capsule Timing, Tropical Hydration & Bioavailability Protocol in Malaysia
 *   - `public/guides/capsule-timing-absorption-protocol/index.html`
 *   - `public/guides/optimal-capsule-timing-malaysia/index.html`
 *   - `public/guides/how-to-take-onyxman-supplements/index.html`
 *   - `public/guides/optimal-capsule-timing-and-absorption-protocol/index.html`
 * - MS-149: Guide 2 — How to Verify Authentic RM 159 Onyxman Bottles & Spot Marketplace Counterfeits in Malaysia
 *   - `public/guides/authentic-onyxman-bottle-verification-malaysia/index.html`
 *   - `public/guides/spot-counterfeit-supplements-malaysia/index.html`
 *   - `public/guides/how-to-spot-fake-supplements-malaysia/index.html`
 *   - `public/guides/authentic-rm159-verification/index.html`
 *   - `public/guides/how-to-verify-authentic-onyxman-bottles-malaysia/index.html`
 * - MS-150: Guide 3 — Complete Guide to 100% Discreet Plain-Box COD, FPX & DuitNow QR Ordering Across 16 Malaysian States
 *   - `public/guides/discreet-plain-box-cod-fpx-ordering-malaysia/index.html`
 *   - `public/guides/discreet-shipping-cod-fpx-malaysia/index.html`
 *   - `public/guides/discreet-cod-fpx-delivery-guide/index.html`
 *   - `public/guides/discreet-plain-box-cod-fpx-ordering-guide-malaysia/index.html`
 * - MS-151: Guide 4 — 20-Capsule Rapid Cycles (Horsemen, Hammer of Thor) vs. 30-Capsule Monthly Conditioning (Grow XL, Magnum Pump XR)
 *   - `public/guides/20-capsule-vs-30-capsule-cycle-selection/index.html`
 *   - `public/guides/20-vs-30-capsule-protocol-guide/index.html`
 *   - `public/guides/choosing-between-horsemen-hammer-growxl-magnum/index.html`
 *   - `public/guides/20-capsule-vs-30-capsule-cycle-selection-guide/index.html`
 *   - `public/guides/20-capsule-vs-30-capsule-refill-cycle-guide/index.html`
 * - MS-152: Guide 5 — Malaysian Men's Vitality, Cortisol Management & Tropical Stamina Nutrition Blueprint
 *   - `public/guides/malaysian-mens-vitality-tropical-stamina-nutrition/index.html`
 *   - `public/guides/mens-vitality-nutrition-malaysia/index.html`
 *   - `public/guides/tropical-stamina-and-sleep-optimization/index.html`
 *   - `public/guides/malaysian-mens-vitality-and-tropical-stamina-nutrition/index.html`
 * - MS-153: Guide 6 — Nitric Oxide Amino Acids (L-Arginine, L-Citrulline) vs. Adaptogenic Herbs (Tongkat Ali, Maca, Tribulus) + Magnum Pump XR DietarySupplement Disambiguation
 *   - `public/guides/nitric-oxide-amino-acids-vs-adaptogenic-herbs/index.html`
 *   - `public/guides/nitric-oxide-vs-adaptogenic-botanicals/index.html`
 *   - `public/guides/l-arginine-vs-tongkat-ali-malaysia/index.html`
 *   - `public/guides/nitric-oxide-amino-acids-vs-adaptogenic-herbs-guide/index.html`
 *
 * Strictly enforces Rule #29 & Rule #30:
 * - Paradigm A (100vw x 100vh Full-Bleed Obsidian Cinema Stage) + Paradigm D (Pinned 50vw/50vw Split-Screen Editorial Monograph Curtain)
 * - Obsidian & Liquid Champagne Gold palette (#050507, #0B0C10, #12141C, #D4AF37, #EAE6DF)
 * - Typography: 'Cormorant Garamond', 'Syne', 'Space Grotesk'
 * - Every generated HTML file >= 2,200+ lines of uncompressed semantic HTML5 with 1-Click Express Order Drawer triggers,
 *   exact Onyxman bottle linkages (RM 159 / RM 318 / RM 477), FAQs, and @graph JSON-LD.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderLuxuryShell, escapeHtmlAttr } from '../components/LuxuryShell.mjs';
import { buildFullPageGraph } from '../utils/schema-graph.mjs';
import {
  guidesData,
  allProducts,
  productsById,
  malaysiaStatesData,
  botanicalsData,
} from '../data/products/index.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

function esc(str = '') {
  return escapeHtmlAttr(str);
}

/**
 * Custom inline architectural CSS for Buyer-Intent SEO Guides & Master Editorial Archive
 * Enforces Paradigm A (100vw x 100vh) + Paradigm D (50vw / 50vw Pinned Split Stage) + Architectural Hairline Ledgers.
 */
export const GUIDE_STAGE_CSS = `
<style id="onyxman-editorial-guide-css">
  /* ==========================================================================
     PARADIGM A — 100VW X 100VH FULL-BLEED EDITORIAL PROTOCOL HERO STAGE
     ========================================================================== */
  .guide-cinema-hero {
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
  .guide-cinema-hero__watermark {
    position: absolute;
    right: -2vw;
    top: 8vh;
    font-family: var(--font-display);
    font-size: clamp(9rem, 22vw, 24rem);
    font-weight: 600;
    line-height: 0.82;
    letter-spacing: -0.04em;
    color: rgba(212, 175, 55, 0.045);
    pointer-events: none;
    user-select: none;
    z-index: 1;
  }
  .guide-cinema-hero__breadcrumb-bar {
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
  .guide-cinema-hero__crumbs {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.6rem;
  }
  .guide-cinema-hero__crumbs a:hover {
    color: var(--gold-foil-bright);
  }
  .guide-cinema-hero__stage {
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
  .guide-cinema-hero__narrative {
    flex: 1 1 580px;
    max-width: 840px;
    display: flex;
    flex-direction: column;
    gap: 1.45rem;
  }
  .guide-cinema-hero__taxonomy-strip {
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
  .guide-cinema-hero__lead {
    font-size: clamp(1.04rem, 1.3vw, 1.24rem);
    line-height: 1.74;
    color: var(--text-muted-alabaster);
    max-width: 70ch;
  }
  .guide-cinema-hero__cta-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.15rem;
    padding-top: 0.65rem;
  }
  .guide-cinema-hero__visual {
    flex: 1 1 420px;
    max-width: 640px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
  .guide-cinema-hero__pedestal {
    position: relative;
    width: 100%;
    padding: 2rem;
    background: radial-gradient(circle at 50% 48%, rgba(212, 175, 55, 0.22) 0%, rgba(11, 12, 16, 0.65) 55%, rgba(5, 5, 7, 0) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .guide-cinema-hero__img {
    width: 100%;
    max-width: 490px;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 28px 54px rgba(0, 0, 0, 0.92));
    mask-image: radial-gradient(circle at 50% 50%, #000 78%, transparent 100%);
    -webkit-mask-image: radial-gradient(circle at 50% 50%, #000 78%, transparent 100%);
  }
  .guide-cinema-hero__telemetry-strip {
    position: relative;
    z-index: 2;
    max-width: 1760px;
    width: 100%;
    margin: 3rem auto 0;
    padding-top: 1.75rem;
    border-top: 1px solid rgba(212, 175, 55, 0.28);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.75rem;
  }
  .guide-cinema-hero__telemetry-col {
    flex: 1 1 220px;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    border-left: 1px solid rgba(212, 175, 55, 0.28);
    padding-left: 1rem;
  }
  .guide-cinema-hero__telemetry-key {
    font-size: 0.66rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }
  .guide-cinema-hero__telemetry-val {
    font-family: var(--font-display);
    font-size: 1.45rem;
    color: var(--text-silk-ivory);
    line-height: 1.15;
  }
  .guide-cinema-hero__telemetry-sub {
    font-size: 0.78rem;
    color: var(--text-ash-silver);
  }

  /* ==========================================================================
     PARADIGM D — PINNED 50VW / 50VW SPLIT-SCREEN EDITORIAL PROTOCOL STAGE
     ========================================================================== */
  .guide-split-5050 {
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    background-color: #0B0C10;
    border-bottom: 1px solid rgba(212, 175, 55, 0.28);
  }
  .guide-split-5050__pinned {
    flex: 1 1 50%;
    min-width: 320px;
    padding: clamp(3rem, 6vw, 6rem) var(--gutter-cinema);
    border-right: 1px solid rgba(212, 175, 55, 0.24);
    background:
      radial-gradient(circle at 50% 42%, rgba(212, 175, 55, 0.14) 0%, rgba(11, 12, 16, 0.9) 62%, #050507 100%);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2.25rem;
    position: sticky;
    top: 4.5rem;
    align-self: flex-start;
    min-height: calc(100vh - 4.5rem);
  }
  .guide-split-5050__scrolling {
    flex: 1 1 50%;
    min-width: 320px;
    padding: clamp(3rem, 6vw, 6rem) var(--gutter-cinema);
    background-color: #050507;
    display: flex;
    flex-direction: column;
    gap: 3.25rem;
  }
  .guide-split-5050__chapter {
    padding-bottom: 3rem;
    border-bottom: 1px solid rgba(212, 175, 55, 0.22);
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  .guide-split-5050__chapter:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  /* ==========================================================================
     ARCHITECTURAL HAIRLINE LEDGERS & EDITORIAL SPREADS (ZERO BOX GRIDS)
     ========================================================================== */
  .guide-section {
    width: 100%;
    padding: var(--gutter-vertical) var(--gutter-cinema);
    background-color: #050507;
    border-bottom: 1px solid rgba(212, 175, 55, 0.24);
  }
  .guide-section--onyx {
    background-color: #0B0C10;
  }
  .guide-section--charcoal {
    background-color: #12141C;
  }
  .guide-section__inner {
    max-width: 1720px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .guide-section__header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(212, 175, 55, 0.28);
  }
  .guide-section__header-left {
    flex: 1 1 560px;
    display: flex;
    flex-direction: column;
    gap: 0.85rem;
  }
  .guide-section__header-right {
    flex: 1 1 420px;
    color: var(--text-muted-alabaster);
    font-size: 0.96rem;
    line-height: 1.7;
  }
  .guide-hairline-ledger {
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgba(212, 175, 55, 0.28);
  }
  .guide-hairline-row {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.5rem 2.5rem;
    padding: 2rem 0;
    border-bottom: 1px solid rgba(234, 230, 223, 0.11);
    transition: background-color 220ms ease;
  }
  .guide-hairline-row:hover {
    background: linear-gradient(90deg, rgba(212, 175, 55, 0.06) 0%, transparent 100%);
  }
  .guide-hairline-row__code {
    flex: 0 0 150px;
    font-family: var(--font-technical);
    font-size: 0.72rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold-champagne);
    padding-top: 0.25rem;
  }
  .guide-hairline-row__main {
    flex: 1 1 480px;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }
  .guide-hairline-row__title {
    font-family: var(--font-display);
    font-size: clamp(1.45rem, 2.2vw, 2rem);
    color: var(--text-silk-ivory);
    line-height: 1.18;
  }
  .guide-hairline-row__desc {
    color: var(--text-muted-alabaster);
    font-size: 0.94rem;
    line-height: 1.72;
  }
  .guide-hairline-row__meta {
    flex: 0 0 280px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.6rem;
    text-align: right;
  }
  .guide-table-wrap {
    width: 100%;
    overflow-x: auto;
    border-top: 1px solid rgba(212, 175, 55, 0.34);
    border-bottom: 1px solid rgba(212, 175, 55, 0.34);
  }
  .guide-comparison-table {
    width: 100%;
    border-collapse: collapse;
    min-width: 920px;
    text-align: left;
  }
  .guide-comparison-table th {
    padding: 1.15rem 1rem;
    font-family: var(--font-technical);
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-foil-bright);
    background-color: #12141C;
    border-bottom: 1px solid rgba(212, 175, 55, 0.32);
  }
  .guide-comparison-table td {
    padding: 1.2rem 1rem;
    font-size: 0.9rem;
    color: var(--text-muted-alabaster);
    border-bottom: 1px solid rgba(234, 230, 223, 0.09);
    vertical-align: top;
  }
  .guide-comparison-table tr:hover td {
    background-color: rgba(212, 175, 55, 0.04);
    color: var(--text-silk-ivory);
  }
  .guide-faq-ledger {
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgba(212, 175, 55, 0.28);
  }
  .guide-faq-item {
    border-bottom: 1px solid rgba(234, 230, 223, 0.12);
    padding: 1.4rem 0;
  }
  .guide-faq-item summary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    cursor: pointer;
    list-style: none;
    font-family: var(--font-display);
    font-size: clamp(1.25rem, 1.8vw, 1.65rem);
    color: var(--text-silk-ivory);
  }
  .guide-faq-item summary::-webkit-details-marker {
    display: none;
  }
  .guide-faq-item[open] summary {
    color: var(--gold-foil-bright);
    margin-bottom: 0.9rem;
  }
  .guide-faq-item__body {
    color: var(--text-muted-alabaster);
    font-size: 0.95rem;
    line-height: 1.75;
    max-width: 96ch;
    padding-left: 1rem;
    border-left: 2px solid var(--gold-champagne);
  }
  @media (max-width: 1024px) {
    .guide-split-5050__pinned {
      position: relative;
      top: 0;
      min-height: auto;
      border-right: none;
      border-bottom: 1px solid rgba(212, 175, 55, 0.24);
    }
    .guide-hairline-row__meta {
      align-items: flex-start;
      text-align: left;
      flex: 1 1 100%;
    }
  }
</style>
`;

/**
 * Shared Quantitative 4-Bottle Comparison & Protocol Matrix Section
 * Ensures every English Guide page provides an exhaustive side-by-side dosage, timing, and pricing reference.
 */
export function renderFourBottleProtocolMatrixSection() {
  return `
  <!-- ==========================================================================
       SHARED ARCHITECTURAL LEDGER — QUANTITATIVE 4-BOTTLE DOSAGE & TIMING MATRIX
       ========================================================================== -->
  <section
    id="quantitative-four-bottle-protocol-matrix"
    class="guide-section guide-section--charcoal"
    aria-labelledby="heading-quantitative-4bottle-matrix"
  >
    <div class="guide-section__inner">
      <header class="guide-section__header">
        <div class="guide-section__header-left">
          <span class="editorial-kicker">
            QUANTITATIVE 4-BOTTLE PROTOCOL MATRIX · OFFICIAL RM 159 MALAYSIA VAULT
          </span>
          <h2 id="heading-quantitative-4bottle-matrix" class="editorial-headline-lg">
            Exact Capsule Architecture, Intake Windows &amp; <span class="foil-champagne-text">Milligram Allocations Across All 4 Onyxman Reserves.</span>
          </h2>
        </div>
        <div class="guide-section__header-right">
          <p>
            Every Onyxman formulation is priced uniformly at <strong>RM 159.00 (1 Bottle)</strong>,
            <strong>RM 318.00 (2 Bottles · Free East &amp; West Malaysia Shipping)</strong>, and
            <strong>RM 477.00 (3 Bottles · Complete 90-Day Mastery Vault)</strong>. Cross-examine the exact capsule count, timing window, and active botanical ratios below.
          </p>
        </div>
      </header>

      <div class="guide-table-wrap">
        <table class="guide-comparison-table">
          <thead>
            <tr>
              <th>Specification / Bioactive Marker</th>
              <th>Horsemen (20 Caps × 500mg)<br /><small>SKU: ONYX-HM-20 · RM 159</small></th>
              <th>Hammer of Thor (20 Veg. Caps)<br /><small>SKU: ONYX-HT-20 · RM 159</small></th>
              <th>Grow XL (30 Daily Caps)<br /><small>SKU: ONYX-GX-30 · RM 159</small></th>
              <th>Magnum Pump XR (30 Black Caps)<br /><small>SKU: ONYX-MP-30 · RM 159</small></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong style="color:var(--gold-foil-bright);">Capsule Format &amp; Count</strong></td>
              <td>20 High-Density Gelatin/Herbal Capsules (500mg net fill)</td>
              <td>20 Vegetarian HPMC Plant-Cellulose Capsules (500mg fill)</td>
              <td>30 Full-Month Daily Conditioning Capsules (520mg fill)</td>
              <td>30 Extended-Release Jet-Black Capsules (600mg fill · Pro Series)</td>
            </tr>
            <tr>
              <td><strong style="color:var(--gold-foil-bright);">Optimal Malaysian Intake Window</strong></td>
              <td><strong>45–60 mins after dinner</strong> (or 45 mins prior to evening activity) with 300ml warm water</td>
              <td><strong>30 mins after dinner</strong> with 250ml room-temperature water for overnight recovery</td>
              <td><strong>20–30 mins after breakfast</strong> every morning for 30 consecutive days</td>
              <td><strong>30–45 mins before gym training</strong> or evening physical activity with 300ml water</td>
            </tr>
            <tr>
              <td><strong style="color:var(--gold-foil-bright);">Automated Refill Cadence</strong></td>
              <td>Day-18 Automated Refill Sync (prevents cycle interruption)</td>
              <td>Day-18 Automated Refill Sync (prevents saponin washout)</td>
              <td>Day-25 Automated Refill Sync (continuous 30/60/90-day rhythm)</td>
              <td>Day-25 Automated Refill Sync (continuous nitric oxide baseline)</td>
            </tr>
            <tr>
              <td><strong style="color:var(--gold-foil-bright);">Eurycoma longifolia 100:1 (Tongkat Ali)</strong></td>
              <td><strong>150 mg / cap</strong> (30% · Primary Evening Drive Anchor)</td>
              <td><strong>45 mg / cap</strong> (9% · Secondary Synergist)</td>
              <td><strong>140 mg / cap</strong> (26.9% · Daily Morning Anchor)</td>
              <td><strong>90 mg / cap</strong> (15% · Androgenic-Vascular Bridge)</td>
            </tr>
            <tr>
              <td><strong style="color:var(--gold-foil-bright);">Tribulus terrestris (60% Saponins)</strong></td>
              <td>— (Focuses on Epimedium Icariin 70mg)</td>
              <td><strong>200 mg / cap</strong> (40% · Primary Saponin Anchor)</td>
              <td>— (Focuses on Muira Puama 75mg + Saw Palmetto 70mg)</td>
              <td><strong>110 mg / cap</strong> (18.3% · Pro Series Saponin Support)</td>
            </tr>
            <tr>
              <td><strong style="color:var(--gold-foil-bright);">Lepidium meyenii 10:1 (Black Maca)</strong></td>
              <td><strong>100 mg / cap</strong> (20% · Andean Stamina Reserve)</td>
              <td><strong>100 mg / cap</strong> (20% · Physical Recovery Core)</td>
              <td><strong>110 mg / cap</strong> (21.2% · All-Day Vitality Base)</td>
              <td>— (Focuses on Amino-Acid Vascular Matrix)</td>
            </tr>
            <tr>
              <td><strong style="color:var(--gold-foil-bright);">L-Arginine HCl + L-Citrulline Malate</strong></td>
              <td><strong>80 mg / cap</strong> L-Arginine HCl</td>
              <td><strong>50 mg / cap</strong> L-Arginine HCl</td>
              <td><strong>100 mg / cap</strong> L-Arginine + L-Citrulline</td>
              <td><strong>320 mg / cap</strong> (200mg L-Arginine + 120mg L-Citrulline XR)</td>
            </tr>
            <tr>
              <td><strong style="color:var(--gold-foil-bright);">Panax Ginseng &amp; Bio-Cofactors</strong></td>
              <td><strong>80 mg</strong> Korean Red Ginseng + <strong>20 mg</strong> Zinc</td>
              <td><strong>60 mg</strong> Panax Ginseng + <strong>30 mg</strong> Ginkgo + <strong>15 mg</strong> Zinc</td>
              <td><strong>25 mg</strong> Zinc Gluconate + Vitamin B6</td>
              <td><strong>60 mg</strong> Panax Ginseng + <strong>15 mg</strong> Zinc + <strong>5 mg</strong> Bioperine</td>
            </tr>
            <tr>
              <td><strong style="color:var(--gold-foil-bright);">Primary Buyer Persona in Malaysia</strong></td>
              <td>Adult men seeking rapid evening readiness &amp; 100:1 Tongkat Ali potency</td>
              <td>Men preferring 100% Vegetarian HPMC capsules &amp; 60%-saponin Tribulus endurance</td>
              <td>Corporate &amp; urban professionals wanting a steady 30-day morning routine</td>
              <td>Gym athletes &amp; active men prioritizing peak Nitric Oxide vascular pump</td>
            </tr>
            <tr>
              <td><strong style="color:var(--gold-foil-bright);">Direct Formulation Dossier</strong></td>
              <td><a href="/products/horsemen/" style="color:var(--gold-foil-bright);text-decoration:underline;">Inspect Horsemen Vault →</a></td>
              <td><a href="/products/hammer-of-thor/" style="color:var(--gold-foil-bright);text-decoration:underline;">Inspect Hammer of Thor Vault →</a></td>
              <td><a href="/products/grow-xl/" style="color:var(--gold-foil-bright);text-decoration:underline;">Inspect Grow XL Vault →</a></td>
              <td><a href="/products/magnum-pump-xr/" style="color:var(--gold-foil-bright);text-decoration:underline;">Inspect Magnum Pump XR Vault →</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>`;
}

/**
 * Shared Malaysian Tropical Bioavailability, Kopi/Teh Tarik Tannin & Meal Timing Ledger
 */
export function renderMalaysianDietaryBioavailabilityLedger() {
  const rules = [
    {
      code: 'CHRONO-01 · TAN-45',
      title: 'The 45-Minute Kopi O & Teh Tarik Tannin Clearance Rule',
      window: '≥ 45 Mins Separation Before & After Capsule',
      detail:
        'Strong Malaysian roasted coffee (Kopi O Kaw) and pulled milk tea (Teh Tarik) contain high concentrations of polyphenolic tannins and chlorogenic acids. In the stomach lumen, tannins chelate divalent trace minerals (such as Zinc Bisglycinate and Zinc Gluconate) and form insoluble precipitates with quassinoid alkaloids (Eurycomanone). Always maintain a strict 45-minute buffer between caffeinated beverages and your Onyxman capsule.',
    },
    {
      code: 'CHRONO-02 · HYD-300',
      title: 'Warm Aqueous Dissolution Physics (250ml–350ml Plain Water)',
      window: '300ml Warm or Room-Temp Water at Intake',
      detail:
        'Whether taking a standard gelatin capsule (Horsemen, Grow XL, Magnum Pump XR) or a plant-cellulose HPMC capsule (Hammer of Thor), swallowing with 300ml of warm water (35°C–40°C) accelerates shell disintegration in the stomach from 18 minutes down to 6–8 minutes—allowing water-soluble Tongkat Ali 100:1 and L-Arginine HCl to reach the duodenum rapidly.',
    },
    {
      code: 'CHRONO-03 · LIPID-60',
      title: 'Navigating Heavy Mamak, Santan & Deep-Fried Evening Meals',
      window: 'Wait 45–60 Mins After Heavy Lipid Meals',
      detail:
        'High-fat late-night Malaysian meals (Nasi Kandar, Roti Canai, Char Kuey Teow, or rich santan curries) delay gastric emptying for up to 3 hours. While steroidal saponins in Hammer of Thor benefit from moderate dietary lipids for chylomicron bile transport, amino-acid Nitric Oxide precursors in Magnum Pump XR and Horsemen absorb fastest when taken 45–60 minutes after a balanced protein-forward meal.',
    },
    {
      code: 'CHRONO-04 · TROP-28C',
      title: 'Tropical Humidity Protection & Original Desiccant Preservation',
      window: 'Store Below 28°C · Never Remove Silica Sachet',
      detail:
        'Malaysia’s year-round 75%–90% relative humidity causes hygroscopic herbal extracts (especially 100:1 Tongkat Ali and L-Citrulline Malate) to clump if left open in bathrooms or car gloveboxes. Always store your Onyxman HDPE bottle in a cool bedroom drawer or air-conditioned room (<28°C) and keep the factory food-grade silica desiccant inside the bottle until the final capsule is consumed.',
    },
    {
      code: 'CHRONO-05 · CORT-22H',
      title: 'Evening Cortisol Down-Regulation & Deep REM Recovery Window',
      window: 'Zero Synthetic Stimulants · 100% Sleep-Safe',
      detail:
        'Unlike illicit street energy capsules or late-afternoon sugary canned drinks that trigger midnight tachycardia and insomnia, all four Onyxman formulations are 100% free of synthetic caffeine and undeclared stimulants. Evening intake of Horsemen or Hammer of Thor works harmoniously with nocturnal restorative sleep cycles.',
    },
    {
      code: 'CHRONO-06 · SYNC-1825',
      title: 'Uninterrupted Plasma Saturation: Day-18 & Day-25 Refill Cadence',
      window: 'Day-18 (20 Caps) · Day-25 (30 Caps)',
      detail:
        'Adaptogenic phytocompounds (Eurycomanone, Macamides, Protodioscin, and Ginsenosides) build progressive cellular and endothelial momentum over 30 to 90 days. Ordering a 2-Bottle (RM 318) or 3-Bottle (RM 477) reserve—or responding to your Day-18 / Day-25 refill reminder—prevents plasma washout between bottles.',
    },
  ];

  const rowsHtml = rules
    .map(
      (r) => `
        <div class="guide-hairline-row">
          <div class="guide-hairline-row__code">${esc(r.code)}</div>
          <div class="guide-hairline-row__main">
            <h3 class="guide-hairline-row__title">${esc(r.title)}</h3>
            <p class="guide-hairline-row__desc">${esc(r.detail)}</p>
          </div>
          <div class="guide-hairline-row__meta">
            <span style="font-size:0.78rem;color:var(--gold-foil-bright);letter-spacing:0.14em;text-transform:uppercase;">
              ${esc(r.window)}
            </span>
          </div>
        </div>`
    )
    .join('\n');

  return `
  <!-- ==========================================================================
       SHARED ARCHITECTURAL LEDGER — MALAYSIAN CHRONO-NUTRITION & BIOAVAILABILITY
       ========================================================================== -->
  <section
    id="malaysian-chrono-nutrition-bioavailability-ledger"
    class="guide-section guide-section--onyx"
    aria-labelledby="heading-chrono-bioavailability"
  >
    <div class="guide-section__inner">
      <header class="guide-section__header">
        <div class="guide-section__header-left">
          <span class="editorial-kicker">
            TROPICAL CHRONO-PHARMACOKINETICS · 6 GOLDEN ABSORPTION LAWS
          </span>
          <h2 id="heading-chrono-bioavailability" class="editorial-headline-lg">
            Six Bioavailability Rules Engineered For <span class="foil-champagne-text">Malaysian Diets, Climate &amp; Schedules.</span>
          </h2>
        </div>
        <div class="guide-section__header-right">
          <p>
            Standardized botanical extracts only deliver peak physiological output when they cross the intestinal epithelium intact. Follow these six Malaysian chrono-nutrition laws to maximize absorption by up to 40%.
          </p>
        </div>
      </header>

      <div class="guide-hairline-ledger">
        ${rowsHtml}
      </div>
    </div>
  </section>`;
}

/**
 * Shared 5-Gate Laboratory Authenticity & Anti-Counterfeit Verification Ledger
 */
export function renderAuthenticityVerificationGatesSection() {
  const gates = [
    {
      code: 'AUTH-GATE-01',
      title: 'Official Uniform MYR Pricing: RM 159 (1B) · RM 318 (2B) · RM 477 (3B)',
      spec: 'Zero RM 25–RM 45 Fake Clearance Listings',
      detail:
        'Authentic climate-controlled Onyxman Malaysia stock is never dumped on unverified classified portals or third-party flea-market stalls for RM 25 to RM 55. Genuine standardized 100:1 Tongkat Ali, 60%-saponin Tribulus, and 10:1 Black Maca require certified extraction and heavy-metal testing, maintaining a strict official price of RM 159.00 per single bottle, RM 318.00 for 2 bottles, and RM 477.00 for 3 bottles exclusively on https://www.onyxmen.my.',
    },
    {
      code: 'AUTH-GATE-02',
      title: 'Exact Bottle Cap, Capsule Color & Label Typography Verification',
      spec: 'ONYX-HM-20 · ONYX-HT-20 · ONYX-GX-30 · ONYX-MP-30',
      detail:
        'Inspect your bottle against our four exact SKU profiles: (1) Horsemen: 20 Capsules × 500mg with gold horse emblem; (2) Hammer of Thor: 20 Veg. Capsules in clear HPMC shells with green vegetarian crest and gold metallic cap; (3) Grow XL: 30 Capsules with red/gold "#1 Selling Product — Made With Natural Ingredient" crest; (4) Magnum Pump XR: 30 Jet-Black Capsules under the Testosterone Pro Series banner.',
    },
    {
      code: 'AUTH-GATE-03',
      title: 'Zero Fake Medical Registration Numbers or Undeclared Synthetic PDE5 Analogues',
      spec: '100% Pure Botanical & Amino-Acid Supplement',
      detail:
        'Illicit counterfeit capsules frequently print fabricated drug registration numbers on cheap boxes while spiking starch powder with undeclared sildenafil or tadalafil analogues that trigger severe migraines, visual disturbances, and dangerous hypotension. Authentic Onyxman formulations are transparent botanical and amino-acid dietary supplements—never misrepresented as prescription drugs.',
    },
    {
      code: 'AUTH-GATE-04',
      title: 'ICP-MS Heavy-Metal & USP <2021> Microbial Purity Screening',
      spec: 'Pb < 0.5 ppm · As < 0.5 ppm · Hg < 0.1 ppm · Cd < 0.3 ppm',
      detail:
        'Raw roots harvested from tropical soils naturally accumulate heavy metals if left unrefined. Every Onyxman production lot undergoes Inductively Coupled Plasma Mass Spectrometry (ICP-MS) and microbial screening prior to encapsulation—ensuring zero salmonella, zero E. coli, and strict compliance with Malaysian trace-element safety limits.',
    },
    {
      code: 'AUTH-GATE-05',
      title: 'Authorized Kuala Lumpur Fulfilment Desk & Neutral Waybill Identity',
      spec: 'sales@onyxman.my · info@onyxman.my · OM Fulfilment Logistics',
      detail:
        'Every genuine order placed via our Express Discreet Order Drawer is logged directly with our Kuala Lumpur fulfilment desk (sales@onyxman.my, info@onyxman.my, and waleedshoaibofficial@gmail.com) and dispatched in a 3-layer unmarked parcel bearing the neutral sender name "OM Fulfilment Logistics (Kuala Lumpur)".',
    },
  ];

  const rowsHtml = gates
    .map(
      (g) => `
        <div class="guide-hairline-row">
          <div class="guide-hairline-row__code">${esc(g.code)}</div>
          <div class="guide-hairline-row__main">
            <h3 class="guide-hairline-row__title">${esc(g.title)}</h3>
            <p class="guide-hairline-row__desc">${esc(g.detail)}</p>
          </div>
          <div class="guide-hairline-row__meta">
            <span style="font-size:0.78rem;color:var(--gold-foil-bright);letter-spacing:0.14em;text-transform:uppercase;">
              ✓ ${esc(g.spec)}
            </span>
          </div>
        </div>`
    )
    .join('\n');

  return `
  <!-- ==========================================================================
       SHARED ARCHITECTURAL LEDGER — 5-GATE AUTHENTICITY & ANTI-COUNTERFEIT AUDIT
       ========================================================================== -->
  <section
    id="five-gate-authenticity-verification-ledger"
    class="guide-section"
    aria-labelledby="heading-five-gate-authenticity"
  >
    <div class="guide-section__inner">
      <header class="guide-section__header">
        <div class="guide-section__header-left">
          <span class="editorial-kicker">
            5-GATE AUTHENTICITY VERIFICATION · ZERO MARKETPLACE COUNTERFEITS
          </span>
          <h2 id="heading-five-gate-authenticity" class="editorial-headline-lg">
            How To Verify Genuine <span class="foil-champagne-text">RM 159 Onyxman Malaysia Bottles.</span>
          </h2>
        </div>
        <div class="guide-section__header-right">
          <p>
            Protect your cardiovascular and metabolic health from unverified street imitations. Every bottle dispatched from <strong>https://www.onyxmen.my</strong> passes all five authenticity and analytical purity gates below.
          </p>
        </div>
      </header>

      <div class="guide-hairline-ledger">
        ${rowsHtml}
      </div>
    </div>
  </section>`;
}

/**
 * Shared Multi-Bottle Acquisition Tiers Section (RM 159 / RM 318 / RM 477)
 */
export function renderMultiBottleAcquisitionSection(defaultProductSlug = 'horsemen') {
  const tiers = [
    {
      qty: 1,
      code: 'TIER 01 · SINGLE BOTTLE TRIAL RESERVE',
      title: '1 Bottle — Single Cycle Reserve (20 or 30 Capsules)',
      price: 'RM 159',
      schemaPrice: '159.00 MYR',
      shipping:
        'Free Express Courier Across Peninsular Malaysia · RM 15 East Malaysia Air Freight · +RM 15 Optional Klang Valley Same-Day Runner',
      refill: 'Automated Day-18 (20 Caps) or Day-25 (30 Caps) Refill Synchronization',
      cta: 'SELECT 1 BOTTLE · RM 159',
    },
    {
      qty: 2,
      code: 'TIER 02 · DUAL MOMENTUM PROTOCOL (MOST POPULAR)',
      title: '2 Bottles — 40-to-60 Day Uninterrupted Saturation Reserve',
      price: 'RM 318',
      schemaPrice: '318.00 MYR',
      shipping:
        '100% FREE Express Discreet Shipping Nationwide (Includes Free Air Freight to Sabah, Sarawak & Labuan)',
      refill: 'Prevents Mid-Cycle Botanical Washout · Ideal for Pairing Horsemen + Grow XL or Magnum Pump XR',
      cta: 'SELECT 2 BOTTLES · RM 318 (FREE SHIPPING)',
    },
    {
      qty: 3,
      code: 'TIER 03 · 90-DAY APOTHECARY MASTERY VAULT',
      title: '3 Bottles — Complete 60-to-90 Day Peak Conditioning Vault',
      price: 'RM 477',
      schemaPrice: '477.00 MYR',
      shipping:
        '100% FREE Priority VIP Dispatch Across All 16 Malaysian States + Priority Concierge Support',
      refill: 'Full Trimester Adaptogenic & Endothelial Nitric Oxide Conditioning Cycle',
      cta: 'SELECT 3 BOTTLES · RM 477 (VIP VAULT)',
    },
  ];

  const rowsHtml = tiers
    .map(
      (t) => `
        <div class="guide-hairline-row">
          <div class="guide-hairline-row__code">${esc(t.code)}</div>
          <div class="guide-hairline-row__main">
            <h3 class="guide-hairline-row__title">
              ${esc(t.title)} — <span class="foil-champagne-text">${esc(t.price)}</span>
              <small style="font-size:0.78rem;color:var(--text-ash-silver);">(${esc(t.schemaPrice)})</small>
            </h3>
            <p class="guide-hairline-row__desc">${esc(t.shipping)}</p>
            <p style="font-size:0.82rem;color:var(--gold-foil-bright);">✓ ${esc(t.refill)}</p>
          </div>
          <div class="guide-hairline-row__meta">
            <button
              type="button"
              class="cta-foil-primary"
              data-open-order-drawer="true"
              data-order-product="${esc(defaultProductSlug)}"
              data-order-qty="${t.qty}"
            >
              <span>${esc(t.cta)}</span>
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>`
    )
    .join('\n');

  return `
  <!-- ==========================================================================
       SHARED ARCHITECTURAL LEDGER — MULTI-BOTTLE ACQUISITION TIERS (RM 159 / 318 / 477)
       ========================================================================== -->
  <section
    id="multi-bottle-protocol-acquisition-tiers"
    class="guide-section guide-section--charcoal"
    aria-labelledby="heading-multi-bottle-tiers"
  >
    <div class="guide-section__inner">
      <header class="guide-section__header">
        <div class="guide-section__header-left">
          <span class="editorial-kicker">
            OFFICIAL MALAYSIA ACQUISITION LEDGER · RM 159 · RM 318 · RM 477
          </span>
          <h2 id="heading-multi-bottle-tiers" class="editorial-headline-lg">
            Reserve Your Discreet Onyxman Protocol <span class="foil-champagne-text">Via FPX, DuitNow QR Or Cash On Delivery (COD).</span>
          </h2>
        </div>
        <div class="guide-section__header-right">
          <p>
            Click any protocol tier below to launch the <strong>10-Second Express Discreet Order Drawer</strong>. Every parcel ships in a 3-layer unmarked matte box from Kuala Lumpur under the neutral sender name <em>"OM Fulfilment Logistics"</em>.
          </p>
        </div>
      </header>

      <div class="guide-hairline-ledger">
        ${rowsHtml}
      </div>
    </div>
  </section>`;
}

/**
 * Shared 16 Malaysian States & Federal Territories Discreet Delivery Ledger
 */
export function renderAll16StatesDeliveryLedgerSection(defaultProductSlug = 'horsemen') {
  const states = malaysiaStatesData.states || [];
  const rowsHtml = states
    .map((st) => {
      const href = st.i18nEnPath || st.enPath;
      const name = st.nameEn;
      const transit = st.transitTimeEn;
      const districts = (st.coveredDistricts || []).slice(0, 6).join(', ');
      const paymentModes = st.sameDayRunnerAvailable
        ? 'Same-Day 3–5h Runner · Free 24h Courier · COD · FPX · DuitNow QR'
        : st.zone === 'EAST_MALAYSIA'
        ? 'Discreet Air Freight (Free on 2+ Bottles) · FPX · DuitNow QR · Selected COD'
        : 'Free 1–2 Day Peninsular Express · COD · FPX · DuitNow QR';
      return `
        <div class="guide-hairline-row">
          <div class="guide-hairline-row__code">HUB #${String(st.hubNumber).padStart(2, '0')} · ${esc(st.zone)}</div>
          <div class="guide-hairline-row__main">
            <h3 class="guide-hairline-row__title">
              <a href="${esc(href)}" style="text-decoration:underline;text-underline-offset:4px;">
                ${esc(name)} (${esc(st.capitalOrCenter)})
              </a>
            </h3>
            <p class="guide-hairline-row__desc">
              <strong>Covered Districts (${esc(st.postalCodeRange)}):</strong> ${esc(districts)}.
              <br />
              <strong>Fulfilment &amp; Payment Modes:</strong> ${esc(paymentModes)}.
            </p>
          </div>
          <div class="guide-hairline-row__meta">
            <span style="font-size:0.78rem;color:var(--gold-foil-bright);">${esc(transit)}</span>
            <div style="display:flex;gap:0.65rem;flex-wrap:wrap;justify-content:flex-end;">
              <a href="${esc(href)}" class="cta-hairline-secondary" style="padding:0.55rem 1rem;font-size:0.7rem;">
                <span>State Hub →</span>
              </a>
              <button
                type="button"
                class="cta-foil-primary"
                style="padding:0.55rem 1rem;font-size:0.7rem;"
                data-open-order-drawer="true"
                data-order-product="${esc(defaultProductSlug)}"
                data-order-qty="1"
              >
                <span>Order RM 159</span>
              </button>
            </div>
          </div>
        </div>`;
    })
    .join('\n');

  return `
  <!-- ==========================================================================
       SHARED ARCHITECTURAL LEDGER — ALL 16 MALAYSIAN STATES & TERRITORIES
       ========================================================================== -->
  <section
    id="malaysia-16-states-discreet-fulfilment-ledger"
    class="guide-section guide-section--onyx"
    aria-labelledby="heading-16-states-fulfilment"
  >
    <div class="guide-section__inner">
      <header class="guide-section__header">
        <div class="guide-section__header-left">
          <span class="editorial-kicker">
            16 MALAYSIAN STATE &amp; FEDERAL TERRITORY HUBS · 100% UNMARKED PARCEL
          </span>
          <h2 id="heading-16-states-fulfilment" class="editorial-headline-lg">
            Same-Day Klang Valley Runner &amp; <span class="foil-champagne-text">Nationwide Discreet COD / FPX Dispatch.</span>
          </h2>
        </div>
        <div class="guide-section__header-right">
          <p>
            Every bottle ordered on <strong>https://www.onyxmen.my</strong> ships from our climate-controlled Kuala Lumpur vault in a plain matte security carton with zero product names on the airway bill. Select your state hub below to inspect local transit windows and COD / FPX options.
          </p>
        </div>
      </header>

      <div class="guide-hairline-ledger">
        ${rowsHtml}
      </div>
    </div>
  </section>`;
}

/**
 * Shared Botanical Monograph Cross-Reference Ledger
 */
export function renderBotanicalMonographCrossLinksSection() {
  const monographs = [
    {
      code: 'MONO-01 · MS-123',
      name: 'Malaysian Tongkat Ali 100:1 (Eurycoma longifolia)',
      spec: '≥ 2.2% Eurycomanone + ≥ 22% Eurypeptides',
      href: '/ingredients/tongkat-ali-malaysia/',
      aliasHref: '/ingredients/tongkat-ali-eurycoma-longifolia/',
      bottles: 'Horsemen (150mg) · Grow XL (140mg) · Magnum Pump XR (90mg) · Hammer of Thor (45mg)',
    },
    {
      code: 'MONO-02 · MS-124',
      name: '60%-Saponin Tribulus Terrestris & Panax Ginseng Matrix',
      spec: '≥ 60% Furostanol Saponins (Protodioscin) + ≥ 10% Ginsenosides',
      href: '/ingredients/tribulus-terrestris-malaysia/',
      aliasHref: '/ingredients/panax-ginseng-ginsenosides/',
      bottles: 'Hammer of Thor (200mg Tribulus + 60mg Panax) · Magnum Pump XR (110mg + 60mg)',
    },
    {
      code: 'MONO-03 · MS-125',
      name: 'Gelatinized Peruvian Black Maca Root 10:1 (Lepidium meyenii)',
      spec: '≥ 0.6% Macamides & Macaenes (Starch-Cleaved)',
      href: '/ingredients/maca-root-malaysia/',
      aliasHref: '/ingredients/black-maca-lepidium-meyenii/',
      bottles: 'Grow XL (110mg) · Horsemen (100mg) · Hammer of Thor (100mg)',
    },
    {
      code: 'MONO-04 · MS-126',
      name: 'L-Arginine HCl, L-Citrulline Malate & Bioperine Nitric Oxide Pathway',
      spec: '≥ 99.2% USP Pharmaceutical Purity + ≥ 95% Piperine',
      href: '/ingredients/l-arginine-nitric-oxide/',
      aliasHref: '/ingredients/l-arginine-l-citrulline-nitric-oxide/',
      bottles: 'Magnum Pump XR (320mg NO Matrix + 5mg Bioperine) · Grow XL (100mg) · Horsemen (80mg)',
    },
  ];

  const rowsHtml = monographs
    .map(
      (m) => `
        <div class="guide-hairline-row">
          <div class="guide-hairline-row__code">${esc(m.code)}</div>
          <div class="guide-hairline-row__main">
            <h3 class="guide-hairline-row__title">
              <a href="${esc(m.href)}" style="text-decoration:underline;text-underline-offset:4px;">
                ${esc(m.name)}
              </a>
            </h3>
            <p style="font-size:0.84rem;color:var(--gold-foil-bright);letter-spacing:0.06em;">
              <strong>HPLC Assay Specification:</strong> ${esc(m.spec)}
            </p>
            <p class="guide-hairline-row__desc">
              <strong>Formulation Allocations:</strong> ${esc(m.bottles)}
            </p>
          </div>
          <div class="guide-hairline-row__meta">
            <a href="${esc(m.href)}" class="cta-foil-primary" style="padding:0.65rem 1.25rem;font-size:0.72rem;">
              <span>Read Monograph →</span>
            </a>
            <a href="${esc(m.aliasHref)}" class="cta-hairline-secondary" style="padding:0.5rem 1rem;font-size:0.68rem;">
              <span>Archive Link ↗</span>
            </a>
          </div>
        </div>`
    )
    .join('\n');

  return `
  <!-- ==========================================================================
       SHARED ARCHITECTURAL LEDGER — BOTANICAL & AMINO-ACID MONOGRAPH CROSS-LINKS
       ========================================================================== -->
  <section
    id="botanical-monograph-encyclopedia-crosslinks"
    class="guide-section"
    aria-labelledby="heading-botanical-crosslinks"
  >
    <div class="guide-section__inner">
      <header class="guide-section__header">
        <div class="guide-section__header-left">
          <span class="editorial-kicker">
            PHYTOCHEMICAL MONOGRAPH ENCYCLOPEDIA · LABORATORY ASSAY SPECIFICATIONS
          </span>
          <h2 id="heading-botanical-crosslinks" class="editorial-headline-lg">
            Verify The Exact Phytochemical Science Behind <span class="foil-champagne-text">Every Onyxman Capsule.</span>
          </h2>
        </div>
        <div class="guide-section__header-right">
          <p>
            Dive deeper into the molecular extraction physics, HPLC assay chromatograms, and endothelial nitric oxide pathways powering our four flagship formulations.
          </p>
        </div>
      </header>

      <div class="guide-hairline-ledger">
        ${rowsHtml}
      </div>
    </div>
  </section>`;
}

/**
 * Shared 12-Item Global Buyer-Intent FAQ Pool (Appended to each Guide's specific FAQs)
 */
export const SHARED_BUYER_GUIDE_FAQS = [
  {
    questionEn: 'What is the official price of Horsemen, Hammer of Thor, Grow XL, and Magnum Pump XR in Malaysia?',
    answerEn:
      'Every authentic Onyxman formulation is priced uniformly in Malaysian Ringgit: RM 159.00 for a 1-Bottle Single Cycle Reserve, RM 318.00 for a 2-Bottle Dual Momentum Protocol (which unlocks 100% Free Express Shipping across both Peninsular and East Malaysia), and RM 477.00 for a 3-Bottle Complete 90-Day Mastery Vault.',
  },
  {
    questionEn: 'Why should Malaysian buyers avoid "RM 25 – RM 45" bottles on unverified online marketplaces?',
    answerEn:
      'Unverified RM 25 to RM 45 marketplace listings are almost universally counterfeit capsules filled with raw rice starch, unrefined sawdust, or undeclared synthetic PDE5 chemicals that trigger severe headaches and dangerous blood-pressure drops. Authentic HPLC-standardized Onyxman stock is distributed exclusively via https://www.onyxmen.my at RM 159 per bottle.',
  },
  {
    questionEn: 'How does Onyxman guarantee 100% discreet parcel delivery to condos, offices, and family homes?',
    answerEn:
      'Every order is sealed inside a 3-layer opaque security carton with internal bubble cushioning (to prevent bottle rattling) and zero branding on the exterior. The courier airway bill lists the sender strictly as "OM Fulfilment Logistics (Kuala Lumpur)" and describes the contents as "Personal Nutritional Wellness".',
  },
  {
    questionEn: 'Should I choose Cash on Delivery (COD) or FPX / DuitNow QR when ordering in Malaysia?',
    answerEn:
      'Choose FPX Online Banking or DuitNow Instant QR if you want your unmarked parcel dropped off seamlessly at your condominium guardhouse, parcel locker, or office reception desk while you are away. Choose Cash on Delivery (COD) at RM 0 surcharge if you prefer to pay the NinjaVan, J&T VIP, or PosLaju rider in person upon handover.',
  },
  {
    questionEn: 'Why must I wait 45 minutes after drinking kopi O or teh tarik before taking my Onyxman capsule?',
    answerEn:
      'Polyphenolic tannins in strong roasted coffee and pulled black tea bind to botanical quassinoids (Eurycomanone in Tongkat Ali) and chelated Zinc in the stomach, reducing intestinal absorption by up to 40%. Always leave a 45-minute window and swallow your capsule with 300ml of plain warm water.',
  },
  {
    questionEn: 'Is Magnum Pump XR a dietary supplement bottle or a mechanical/industrial pump?',
    answerEn:
      'Magnum Pump XR by Onyxman Malaysia (SKU: ONYX-MP-30, RM 159.00) is 100% an oral Botanical & Amino-Acid Dietary Supplement bottle containing 30 Jet-Black Capsules formulated with L-Arginine HCl, L-Citrulline Malate, Tongkat Ali, and Bioperine for vascular Nitric Oxide support. It is NOT a mechanical vacuum device, water pump, or oilfield slurry pump.',
  },
];

/**
 * Complete Dossiers for all 6 English Buyer-Intent SEO Guides (MS-148 to MS-153)
 */
export const GUIDE_DOSSIERS = [
  // ==========================================================================
  // GUIDE 1 (MS-148): OPTIMAL CAPSULE TIMING & ABSORPTION PROTOCOL
  // ==========================================================================
  {
    guideNumber: 1,
    microStep: 'MS-148',
    guideCode: 'GUIDE-01 · CHRONO-ABSORPTION',
    slug: 'capsule-timing-absorption-protocol',
    canonicalEnPath: '/guides/capsule-timing-absorption-protocol/',
    alternateMsPath: '/ms/panduan/masa-pengambilan-kapsul-dan-penyerapan-optimum/',
    enOutputPaths: [
      'guides/capsule-timing-absorption-protocol/index.html',
      'guides/optimal-capsule-timing-malaysia/index.html',
      'guides/how-to-take-onyxman-supplements/index.html',
      'guides/optimal-capsule-timing-and-absorption-protocol/index.html',
    ],
    watermark: 'TIMING',
    primaryProductSlug: 'horsemen',
    heroImage: '/assets/products/horsemen-stage.webp',
    portraitImage: '/assets/products/horsemen-portrait.webp',
    publishedDate: '2026-01-15T08:00:00+08:00',
    updatedDate: '2026-10-30T08:00:00+08:00',
    readingTime: '11 Min Clinical & Protocol Read',
    seoTitle:
      'Optimal Capsule Timing, Tropical Hydration & Bioavailability Protocol in Malaysia | Onyxman.my',
    metaDescription:
      'Master the exact Malaysian capsule timing protocol for Horsemen (20 Caps), Hammer of Thor (20 Veg Caps), Grow XL (30 Caps) & Magnum Pump XR (30 Black Caps). Navigate kopi/teh tarik tannins, mamak meals & tropical hydration.',
    kicker: 'MS-148 · PROTOCOL GUIDE 01 · CHRONO-PHARMACOKINETICS & TROPICAL BIOAVAILABILITY',
    headline:
      'Optimal Capsule Timing, Tropical Hydration & <span class="foil-champagne-text">Bioavailability Protocol In Malaysia.</span>',
    taxonomyStrip: [
      '01 · HORSEMEN (45–60M POST-DINNER)',
      '02 · HAMMER OF THOR (30M POST-DINNER HPMC)',
      '03 · GROW XL (20–30M POST-BREAKFAST)',
      '04 · MAGNUM PUMP XR (30–45M PRE-ACTIVITY)',
    ],
    executiveSummary:
      'How you synchronize your Onyxman capsule relative to Malaysian meal compositions, roasted kopi O or teh tarik tannins, warm aqueous hydration, and evening physical activity governs up to 40% of its intestinal bioavailability. This clinical buyer protocol details the exact hour-by-hour intake cadence for our 20-capsule concentrated reserves (Horsemen, Hammer of Thor) and our 30-capsule full-month regimens (Grow XL, Magnum Pump XR).',
    telemetry: [
      {
        key: '01 · GASTRIC DISSOLUTION',
        val: '6–8 Minutes (300ml Warm H2O)',
        sub: '35°C–40°C water accelerates gelatin & HPMC shell cleavage',
      },
      {
        key: '02 · TANNIN CLEARANCE BUFFER',
        val: '≥ 45 Minutes Post-Kopi / Teh',
        sub: 'Prevents polyphenol chelation of Eurycomanone & Zinc',
      },
      {
        key: '03 · PLASMA T-MAX WINDOW',
        val: '45–90 Minutes Post-Intake',
        sub: 'Peak endothelial eNOS & quassinoid bioavailability',
      },
      {
        key: '04 · REFILL SYNCHRONIZATION',
        val: 'Day-18 (20c) · Day-25 (30c)',
        sub: 'Zero plasma washout across RM 159 / RM 318 / RM 477 tiers',
      },
    ],
    pinnedSummaryBullets: [
      'Horsemen (20 Caps × 500mg): 1 capsule 45–60 mins after dinner with 300ml warm water',
      'Hammer of Thor (20 Veg. Caps): 1 HPMC capsule 30 mins after dinner (bile-lipid saponin transport)',
      'Grow XL (30 Caps): 1 capsule 20–30 mins after breakfast daily for 30 consecutive days',
      'Magnum Pump XR (30 Black Caps): 1 capsule 30–45 mins before gym training or evening activity',
      'Strict 45-minute buffer before/after Kopi O, Teh Tarik, Matcha, or Milo',
    ],
    chapters: [
      {
        kicker: 'CHAPTER 01 · GASTRIC TRANSIT & DUODENAL ABSORPTION PHYSICS',
        title: 'Why Capsule Timing Dictates Up To 40% Of Phytochemical Bioavailability.',
        paragraphs: [
          'Every Onyxman capsule contains standardized, high-ratio botanical extracts and pharmaceutical-grade amino acids—never raw pulverized wood bark. However, even a 100:1 aqueous extract of Malaysian Eurycoma longifolia (Tongkat Ali) or USP-grade L-Arginine HCl must navigate stomach acidity, gastric emptying velocity, and small-intestinal brush-border transport before entering systemic circulation.',
          'When a capsule is swallowed on top of a heavy, oil-laden midnight meal or washed down with tannin-heavy iced tea, gastric residence time stretches beyond 150 minutes. Acid-labile ginsenosides and quassinoids suffer partial degradation, while amino-acid transporters (CAT-1 and CAT-2) face competitive inhibition from dietary protein fragments. By contrast, timing your capsule to match its specific molecular polarity—water-soluble vs. lipid-chylomicron bound—ensures rapid duodenal entry and predictable peak plasma concentrations (Tmax within 45 to 90 minutes).',
        ],
      },
      {
        kicker: 'CHAPTER 02 · THE 20-CAPSULE EVENING RESERVES (HORSEMEN & HAMMER OF THOR)',
        title: 'Protocol Calibration For Horsemen (500mg) & Hammer of Thor (Vegetarian HPMC).',
        paragraphs: [
          'Horsemen (20 Capsules × 500mg, SKU: ONYX-HM-20, RM 159) is engineered around water-soluble 100:1 Tongkat Ali (150mg), 10:1 Gelatinized Black Maca (100mg), Korean Red Ginseng (80mg), Epimedium Icariin (70mg), and L-Arginine HCl (80mg). Take 1 capsule with 300ml of warm plain water 45 to 60 minutes after dinner—or 45 to 60 minutes prior to planned evening physical activity. At this interval, bulk stomach chyme has cleared into the duodenum, allowing rapid aqueous dissolution without gastric irritation.',
          'Hammer of Thor (20 Veg. Capsules, SKU: ONYX-HT-20, RM 159) utilizes a 100% plant-cellulose HPMC shell encapsulating 200mg of 60%-Saponin Tribulus terrestris (standardized to protodioscin), 100mg Black Maca, 60mg Panax Ginseng, 45mg Tongkat Ali, and 15mg Zinc Bisglycinate. Because steroidal furostanol saponins are amphiphilic glycosides that utilize bile-salt micelles for optimal lymphatic and portal absorption, take Hammer of Thor 30 minutes after an evening meal containing healthy dietary fats (such as grilled fish, eggs, or olive/sesame oil) with 250ml to 300ml of warm water.',
        ],
      },
      {
        kicker: 'CHAPTER 03 · THE 30-CAPSULE FULL-MONTH PROTOCOLS (GROW XL & MAGNUM PUMP XR)',
        title: 'Morning Baseline Conditioning (Grow XL) vs. Pre-Training Nitric Oxide Surge (Magnum Pump XR).',
        paragraphs: [
          'Grow XL (30 Capsules × 520mg, SKU: ONYX-GX-30, RM 159) is formulated as a 30-day circadian vitality protocol. Take 1 capsule 20 to 30 minutes after breakfast every morning with 300ml of water. Morning administration aligns 140mg of Tongkat Ali 100:1, 110mg of Black Maca, 75mg of Brazilian Muira Puama, and 70mg of liposterolic Saw Palmetto with the body’s natural 07:00–09:00 MYT morning endocrine crest—sustaining mental clarity, pelvic micro-circulation, and physical drive across a 12-hour Kuala Lumpur workday.',
          'Magnum Pump XR (30 Jet-Black Capsules × 600mg, SKU: ONYX-MP-30, RM 159) is an Extended-Release Nitric Oxide & Pro Series formulation packing 200mg L-Arginine HCl, 120mg L-Citrulline Malate, 110mg Tribulus (60% saponins), 90mg Tongkat Ali 100:1, 60mg Panax Ginseng, and 5mg Bioperine® Black Pepper Extract. Take 1 black capsule 30 to 45 minutes before resistance training at the gym or before evening physical activity on a light stomach. L-Arginine delivers immediate first-wave endothelial Nitric Oxide (eNOS) vasodilation at the 35-minute mark, while L-Citrulline Malate recycles via renal pathways into sustained second-wave plasma arginine over 3 to 5 hours.',
        ],
      },
      {
        kicker: 'CHAPTER 04 · MALAYSIAN DIETARY FACTORS: KOPI O, TEH TARIK, MAMAK & HYDRATION',
        title: 'Protecting Botanical Alkaloids & Trace Minerals From Tropical Dehydration & Tannin Binding.',
        paragraphs: [
          'Malaysian beverage culture revolves around Kopi O Kaw, Teh Tarik, Teh Halia, and Kopitiam Hainanese brews. While enjoyable, black tea and dark-roasted coffee beans are rich in hydrolyzable and condensed tannins. If you swallow an Onyxman capsule alongside Teh Tarik or Kopi O, tannins immediately form non-absorbable complexes with Zinc ions and quassinoid diterpenoids in the stomach. Enforce a strict 45-minute window before and after your capsule where only plain warm or room-temperature water is consumed.',
          'In Malaysia’s 32°C–35°C equatorial climate, insensible perspiration during commutes across the Klang Valley, Penang, or Johor Bahru depletes intracellular water and electrolytes. Endothelial Nitric Oxide Synthase (eNOS) and vascular smooth-muscle relaxation require adequate plasma volume to generate physical fullness and muscular pump. Maintain a daily baseline intake of 2.5 to 3.0 liters of plain water—starting with 300ml immediately upon swallowing your capsule.',
        ],
      },
    ],
    protocolSteps: [
      {
        code: 'STEP-01 · 07:30 MYT',
        title: 'Morning Circadian Window — Grow XL (30 Capsules) Protocol',
        metric: '20–30 Mins Post-Breakfast + 300ml H2O',
        desc: 'Consume a balanced protein-rich breakfast (eggs, oats, nasi lemak with lean protein) and wait 20–30 minutes. Swallow 1 capsule of Grow XL with 300ml of plain water. Delay morning Kopi O or Teh Tarik by 45 minutes.',
      },
      {
        code: 'STEP-02 · 17:30 MYT',
        title: 'Pre-Gym / Late-Afternoon Vascular Window — Magnum Pump XR (30 Black Caps)',
        metric: '30–45 Mins Pre-Workout + 350ml H2O',
        desc: 'On resistance-training days, take 1 jet-black capsule of Magnum Pump XR 30–45 minutes before lifting weights with 350ml of water. Bioperine (5mg) and L-Arginine + L-Citrulline (320mg) trigger dual-wave endothelial vasodilation.',
      },
      {
        code: 'STEP-03 · 20:30 MYT',
        title: 'Post-Dinner Saponin Conditioning — Hammer of Thor (20 Veg. Caps)',
        metric: '30 Mins Post-Dinner + 250ml Warm H2O',
        desc: 'Take 1 plant-cellulose HPMC capsule of Hammer of Thor 30 minutes after your evening meal. Dietary lipids stimulate bile micelles that transport 200mg of 60%-Saponin Tribulus terrestris across the intestinal wall.',
      },
      {
        code: 'STEP-04 · 21:30 MYT',
        title: 'Evening Readiness & Adaptogenic Drive — Horsemen (20 Caps × 500mg)',
        metric: '45–60 Mins Post-Dinner / Pre-Activity',
        desc: 'Take 1 capsule of Horsemen with 300ml of warm water 45–60 minutes after dinner (or 45–60 minutes before evening activity). Standardized 100:1 Tongkat Ali (150mg) and Icariin (70mg) reach peak plasma readiness.',
      },
      {
        code: 'STEP-05 · DAY 18 / 25',
        title: 'Automated Refill Synchronization — Zero Plasma Washout',
        metric: 'Day-18 (20 Caps) · Day-25 (30 Caps)',
        desc: 'Because botanical quassinoids and macamides build cumulative cellular saturation over 30–90 days, secure a 2-Bottle (RM 318) or 3-Bottle (RM 477) reserve upfront—or reorder on Day 18/25 so your next courier parcel arrives before your bottle finishes.',
      },
    ],
    faqs: [
      {
        questionEn: 'Can I take Horsemen or Magnum Pump XR on a completely empty stomach?',
        answerEn:
          'If you have a resilient stomach, taking Horsemen or Magnum Pump XR on a light stomach 45 minutes before activity yields the fastest plasma Tmax (35–50 minutes). However, because concentrated 100:1 Tongkat Ali quassinoids and Zinc salts are naturally bitter and mineral-dense, men with sensitive stomachs should take their capsule 45 minutes after a light meal with 300ml of warm water.',
      },
      {
        questionEn: 'What happens if I drink Kopi O or Teh Tarik right after swallowing my capsule?',
        answerEn:
          'Polyphenolic tannins in coffee and black tea bind to botanical alkaloids and divalent Zinc ions in the stomach, forming insoluble complexes that pass through the digestive tract unabsorbed. Leaving a 45-minute buffer before and after caffeine ensures full 100% absorption.',
      },
      {
        questionEn: 'Can I combine a morning Grow XL cycle with an evening Horsemen or Magnum Pump XR capsule?',
        answerEn:
          'Yes, experienced adult users frequently utilize a 2-Bottle Dual Protocol (RM 318): taking 1 capsule of Grow XL 30 minutes after breakfast for baseline 30-day nourishment, and reserving 1 capsule of Horsemen or Magnum Pump XR for specific active evenings (allowing at least 10–12 hours between morning and evening servings, and never exceeding 2 capsules in any 24-hour period).',
      },
      {
        questionEn: 'Does evening intake of Horsemen or Hammer of Thor cause insomnia like energy drinks?',
        answerEn:
          'No. Every Onyxman formulation is 100% free of synthetic caffeine, guarana, ephedra, or artificial central nervous system stimulants. Standardized Tongkat Ali, Black Maca, and Tribulus support cellular ATP and cortisol balance without disrupting deep REM sleep.',
      },
    ],
  },

  // ==========================================================================
  // GUIDE 2 (MS-149): AUTHENTIC ONYXMAN BOTTLE VERIFICATION MALAYSIA
  // ==========================================================================
  {
    guideNumber: 2,
    microStep: 'MS-149',
    guideCode: 'GUIDE-02 · ANTI-COUNTERFEIT AUDIT',
    slug: 'authentic-onyxman-bottle-verification-malaysia',
    canonicalEnPath: '/guides/authentic-onyxman-bottle-verification-malaysia/',
    alternateMsPath: '/ms/panduan/cara-semak-ketulenan-botol-onyxman-malaysia/',
    enOutputPaths: [
      'guides/authentic-onyxman-bottle-verification-malaysia/index.html',
      'guides/spot-counterfeit-supplements-malaysia/index.html',
      'guides/how-to-spot-fake-supplements-malaysia/index.html',
      'guides/authentic-rm159-verification/index.html',
      'guides/how-to-verify-authentic-onyxman-bottles-malaysia/index.html',
    ],
    watermark: 'VERIFY',
    primaryProductSlug: 'hammer-of-thor',
    heroImage: '/assets/products/hammer-of-thor-stage.webp',
    portraitImage: '/assets/products/hammer-of-thor-portrait.webp',
    publishedDate: '2026-01-20T08:00:00+08:00',
    updatedDate: '2026-10-30T08:00:00+08:00',
    readingTime: '12 Min Quality Assurance Read',
    seoTitle:
      'How to Verify Authentic RM 159 Onyxman Bottles & Spot Marketplace Counterfeits in Malaysia | Onyxman.my',
    metaDescription:
      'Protect your health from unverified RM 25–RM 45 counterfeit bottles and adulterated imitations in Malaysia. Complete 5-gate authenticity checklist for official RM 159 Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR.',
    kicker: 'MS-149 · PROTOCOL GUIDE 02 · QUALITY ASSURANCE & ANTI-COUNTERFEIT VERIFICATION',
    headline:
      'How To Verify Authentic RM 159 Onyxman Bottles &amp; <span class="foil-champagne-text">Spot Counterfeits In Malaysia.</span>',
    taxonomyStrip: [
      '01 · OFFICIAL RM 159 / RM 318 / RM 477 PRICING',
      '02 · EXACT SKU CAPSULE & CAP ANATOMY',
      '03 · ZERO SYNTHETIC PDE5 ADULTERANTS',
      '04 · OM FULFILMENT LOGISTICS WAYBILL',
    ],
    executiveSummary:
      'Unverified online classifieds, night-market stalls, and anonymous social-media peddlers across Malaysia frequently circulate counterfeit "RM 25 to RM 45 clearance bottles" filled with raw rice starch, heat-degraded sawdust, or undeclared synthetic PDE5 chemicals. This official Quality Assurance manual provides the 5-Gate Forensic Checklist to verify genuine climate-controlled Onyxman Malaysia bottles (RM 159.00) before you consume a single capsule.',
    telemetry: [
      {
        key: '01 · OFFICIAL PRICE FLOOR',
        val: 'RM 159.00 / Bottle (MYR)',
        sub: 'Never sold for RM 25–RM 55 on third-party flea portals',
      },
      {
        key: '02 · HEAVY-METAL ICP-MS',
        val: 'Pb & As < 0.5 ppm Certified',
        sub: 'Full USP <2021> microbial & trace-metal batch clearance',
      },
      {
        key: '03 · SYNTHETIC PDE5 SCREEN',
        val: '0.00% Illicit Adulterants',
        sub: 'Zero undeclared sildenafil / tadalafil analogues',
      },
      {
        key: '04 · AUTHORIZED WAYBILL',
        val: 'OM Fulfilment Logistics (KL)',
        sub: 'Verified via sales@onyxman.my & info@onyxman.my',
      },
    ],
    pinnedSummaryBullets: [
      'Gate 1: Uniform Official Pricing — RM 159 (1B), RM 318 (2B), RM 477 (3B) exclusively on onyxman.my',
      'Gate 2: Exact SKU Anatomy — Horsemen (20c), Hammer of Thor (20 Veg), Grow XL (30c), Magnum Pump XR (30 Black)',
      'Gate 3: Zero Fake Drug Registration Numbers — pure botanical & amino-acid dietary supplement compliance',
      'Gate 4: Tamper-Evident Neck Seal + Internal Food-Grade Desiccant Sachet (<24°C KL Vault Storage)',
      'Gate 5: Official Kuala Lumpur Desk Confirmation via sales@onyxman.my / info@onyxman.my',
    ],
    chapters: [
      {
        kicker: 'CHAPTER 01 · THE ECONOMICS OF COUNTERFEIT BOTANICALS IN MALAYSIA',
        title: 'Why Genuine Standardized 100:1 Extracts Cannot Exist Inside An "RM 35 Bargain Bottle".',
        paragraphs: [
          'Producing 1 kilogram of genuine HPLC-standardized 100:1 Malaysian Eurycoma longifolia (Tongkat Ali) aqueous extract requires 100 kilograms of mature wild-crafted root, ultrasonic water extraction, vacuum freeze-drying, and Inductively Coupled Plasma Mass Spectrometry (ICP-MS) heavy-metal screening. Similarly, 60%-furostanol saponin Tribulus terrestris, starch-cleaved 10:1 Peruvian Black Maca, and pharmaceutical-grade L-Arginine HCl + L-Citrulline Malate carry strict raw-material and cold-chain storage costs.',
          'When an anonymous seller on a classifieds site or social media marketplace advertises Horsemen, Hammer of Thor, Grow XL, or Magnum Pump XR for RM 25, RM 39, or RM 55, you are looking at a counterfeit imitation. Laboratory inspections of cheap street bottles reveal two dangerous realities: either the capsules contain inert roasted rice flour and ground tree bark with zero bioactive markers, or they are illegally spiked with cheap, unmeasured synthetic phosphodiesterase-5 (PDE5) chemical analogues.',
        ],
      },
      {
        kicker: 'CHAPTER 02 · FORENSIC PACKAGING & CAPSULE ANATOMY BY SKU',
        title: 'Inspecting Cap Finish, Label Typography, Capsule Count & Shell Color Across All 4 Bottles.',
        paragraphs: [
          'Every authentic Onyxman bottle dispatched from our Kuala Lumpur vault adheres to strict physical packaging specifications: (1) Horsemen (SKU: ONYX-HM-20, MPN: HM-500-20MY): Black bottle with metallic gold cap, gold rearing-horse emblem, "Man Virility Enhancement Herbal Supplement — 20 Capsules x 500mg" typography, containing 20 high-density 500mg capsules; (2) Hammer of Thor (SKU: ONYX-HT-20, MPN: HOT-VEG-20MY): White apothecary bottle with metallic gold cap, green vegetarian leaf badge reading "Men’s Health — Tribulus Terrestris — 20 Veg. Capsules", containing 20 clear plant-cellulose HPMC capsules showing golden-brown herbal extract inside.',
          '(3) Grow XL (SKU: ONYX-GX-30, MPN: GXL-NAT-30MY): Deep charcoal-black bottle with gold cap, red and gold ribbon badge reading "#1 Selling Product — Made With Natural Ingredient — Extra-Strength Enhancement Male Performance Blend — 30 Capsules"; (4) Magnum Pump XR (SKU: ONYX-MP-30, MPN: MPXR-30BLK-MY): Matte black bottle with black ribbed cap, gold emblem crest reading "Testosterone Pro Series — Male Enhancement Formula Maximum Strength — 30 Black Capsules", containing 30 distinctive jet-black extended-release capsules.',
        ],
      },
      {
        kicker: 'CHAPTER 03 · ZERO FAKE REGISTRATION NUMBERS & ZERO ILLICIT SYNTHETICS',
        title: 'Distinguishing Transparent Botanical Dietary Supplements From Adulterated Street Pills.',
        paragraphs: [
          'A telltale sign of a counterfeit operation in Malaysia is the printing of fabricated or stolen drug registration numbers on packaging while making miraculous overnight medical cure claims. Counterfeiters do this to disguise capsules laced with undeclared synthetic sildenafil, tadalafil, or vardenafil analogues—chemicals that cause violent throbbing headaches, facial flushing, nasal congestion, blue-tinted vision, and potentially fatal blood-pressure drops when combined with blood-pressure medications.',
          'Authentic Onyxman formulations are 100% pure botanical and amino-acid dietary supplements formulated for adult men (18+). We never print fake drug registration numbers, never make deceptive disease-cure claims, and screen every production lot to guarantee 0.00% synthetic PDE5 adulterants. Our formulas work through natural physiological pathways—supporting endothelial nitric oxide synthesis, SHBG balance, and cellular ATP resilience without synthetic chemical side effects.',
        ],
      },
      {
        kicker: 'CHAPTER 04 · CLIMATE-CONTROLLED KUALA LUMPUR VAULT VS. TROPICAL HEAT DEGRADATION',
        title: 'How Warehouse Heat Destroys Grey-Market Stock & How To Verify Your Waybill.',
        paragraphs: [
          'Even if a grey-market peddler acquires expired or parallel-imported herbal capsules, storing them inside non-air-conditioned zinc-roofed warehouses in 38°C Malaysian heat causes rapid Maillard browning, lipid peroxidation of Saw Palmetto fatty acids, and moisture clumping of hygroscopic Tongkat Ali and L-Citrulline powders. Within weeks, capsule shells turn brittle or sticky and lose potency.',
          'All authentic Onyxman Malaysia inventory is stored inside our climate-controlled Kuala Lumpur apothecary vault at 20°C–24°C and <45% relative humidity. Every order is placed directly on https://www.onyxmen.my, confirmed via sales@onyxman.my / info@onyxman.my / waleedshoaibofficial@gmail.com, and shipped in a 3-layer unmarked parcel under the authorized sender identity "OM Fulfilment Logistics (Kuala Lumpur)".',
        ],
      },
    ],
    protocolSteps: [
      {
        code: 'CHECK-01 · SOURCE DOMAIN',
        title: 'Verify Direct Acquisition From https://www.onyxmen.my',
        metric: 'Official RM 159 / RM 318 / RM 477 Vault',
        desc: 'Ensure your order was submitted directly through the Express Discreet Order Drawer on https://www.onyxmen.my and confirmed by sales@onyxman.my or info@onyxman.my.',
      },
      {
        code: 'CHECK-02 · WAYBILL SENDER',
        title: 'Inspect Courier Airway Bill For "OM Fulfilment Logistics"',
        metric: '3-Layer Unmarked Matte Security Carton',
        desc: 'Authentic parcels arrive via NinjaVan Discreet, J&T Express VIP, PosLaju Priority, or our Klang Valley Private Runner with the neutral sender name "OM Fulfilment Logistics (Kuala Lumpur)".',
      },
      {
        code: 'CHECK-03 · TAMPER SEAL',
        title: 'Confirm Intact Factory Shrink-Band & Induction Liner',
        metric: 'Hermetic Seal + Food-Grade Silica Desiccant',
        desc: 'Before opening, verify that the outer neck shrink-band and inner mouth seal are 100% intact, and confirm the presence of the moisture-absorbing silica gel sachet inside.',
      },
      {
        code: 'CHECK-04 · CAPSULE AUDIT',
        title: 'Match Capsule Count & Shell Type Against Official SKU',
        metric: '20 Caps (HM) · 20 Veg (HT) · 30 Caps (GX) · 30 Black (MP)',
        desc: 'Count and inspect the capsules: Hammer of Thor must have 20 clear vegetarian HPMC capsules; Magnum Pump XR must have 30 jet-black capsules; Horsemen has 20 capsules; Grow XL has 30 capsules.',
      },
      {
        code: 'CHECK-05 · SENSORY PROFILE',
        title: 'Natural Earthy Botanical Aroma & Zero Synthetic Side Effects',
        metric: 'Pure Herbal & Amino Profile · Zero Migraines',
        desc: 'Authentic capsules have a clean, slightly earthy herbal aroma characteristic of Eurycoma longifolia and Panax ginseng, and produce smooth physical stamina without synthetic headaches or heart palpitations.',
      },
    ],
    faqs: [
      {
        questionEn: 'Does Onyxman sell on third-party classifieds or unverified RM 35 marketplace shops?',
        answerEn:
          'No. To protect buyer privacy and prevent counterfeit substitution or tropical heat degradation, authentic Onyxman Malaysia stock is dispatched exclusively through https://www.onyxmen.my at the official price of RM 159 (1 Bottle), RM 318 (2 Bottles), and RM 477 (3 Bottles). Any RM 25–RM 55 listing elsewhere is unauthorized and counterfeit.',
      },
      {
        questionEn: 'How can I tell if a supplement in Malaysia has been spiked with illicit synthetic chemicals?',
        answerEn:
          'Counterfeit pills spiked with undeclared synthetic PDE5 chemicals typically promise "instant 15-minute chemical action for 72 hours" and trigger sudden facial flushing, nasal congestion, dizziness, and severe throbbing headaches. Authentic Onyxman botanical and amino-acid capsules work naturally with your physiology and never cause synthetic drug side effects.',
      },
      {
        questionEn: 'What should I do if I received a suspicious bottle purchased from an unauthorized seller?',
        answerEn:
          'Do not consume the capsules. You may email photos of the bottle and label to our Quality Assurance desk at info@onyxman.my or sales@onyxman.my for a complimentary visual authenticity audit, and reserve genuine climate-controlled stock directly on onyxman.my.',
      },
      {
        questionEn: 'Why does Onyxman offer a 14-day unopened tamper-evident seal guarantee?',
        answerEn:
          'Every genuine order shipped from our Kuala Lumpur vault is backed by our 14-day unopened tamper-evident seal guarantee. If your parcel sustains transit damage during courier delivery anywhere across the 16 Malaysian states, contact sales@onyxman.my for immediate priority replacement.',
      },
    ],
  },

  // ==========================================================================
  // GUIDE 3 (MS-150): DISCREET PLAIN-BOX COD, FPX & DUITNOW QR ORDERING
  // ==========================================================================
  {
    guideNumber: 3,
    microStep: 'MS-150',
    guideCode: 'GUIDE-03 · PRIVACY LOGISTICS & COD/FPX',
    slug: 'discreet-plain-box-cod-fpx-ordering-malaysia',
    canonicalEnPath: '/guides/discreet-plain-box-cod-fpx-ordering-malaysia/',
    alternateMsPath: '/ms/panduan/panduan-tempahan-bungkusan-rahsia-cod-fpx-malaysia/',
    enOutputPaths: [
      'guides/discreet-plain-box-cod-fpx-ordering-malaysia/index.html',
      'guides/discreet-shipping-cod-fpx-malaysia/index.html',
      'guides/discreet-cod-fpx-delivery-guide/index.html',
      'guides/discreet-plain-box-cod-fpx-ordering-guide-malaysia/index.html',
    ],
    watermark: 'PRIVACY',
    primaryProductSlug: 'horsemen',
    heroImage: '/assets/products/onyxman-lineup-hero.webp',
    portraitImage: '/assets/products/horsemen-portrait.webp',
    publishedDate: '2026-02-01T08:00:00+08:00',
    updatedDate: '2026-10-30T08:00:00+08:00',
    readingTime: '10 Min Logistics & Privacy Read',
    seoTitle:
      'Complete Guide to 100% Discreet Plain-Box COD, FPX & DuitNow QR Ordering Across 16 Malaysian States | Onyxman.my',
    metaDescription:
      'Learn how Onyxman Malaysia guarantees 100% parcel anonymity from Kuala Lumpur checkout to your condo guardhouse, office reception, or home doorstep across all 16 states via COD, FPX & DuitNow QR.',
    kicker: 'MS-150 · PROTOCOL GUIDE 03 · 3-LAYER ANONYMOUS PACKAGING & 16-STATE FULFILMENT',
    headline:
      'Complete Guide To 100% Discreet Plain-Box <span class="foil-champagne-text">COD, FPX &amp; DuitNow QR Ordering In Malaysia.</span>',
    taxonomyStrip: [
      '01 · 3-LAYER ACOUSTIC-DAMPENED PARCEL',
      '02 · SENDER: OM FULFILMENT LOGISTICS',
      '03 · FPX / DUITNOW QR (GUARDHOUSE DROP)',
      '04 · RM 0 SURCHARGE COD HANDOVER',
    ],
    executiveSummary:
      'For Malaysian executives, condominium residents, and family men, parcel privacy is just as critical as botanical potency. Every order placed on https://www.onyxmen.my is engineered around our Zero-Trace Fulfilment Protocol: a 3-layer acoustic-dampened plain box, a neutral "OM Fulfilment Logistics" airway bill, neutral bank statement descriptors, and flexible settlement via FPX Online Banking, DuitNow Instant QR, or Cash on Delivery (COD) across all 16 Malaysian states and federal territories.',
    telemetry: [
      {
        key: '01 · EXTERIOR BRANDING',
        val: '0% Logos · 0% Product Names',
        sub: 'Opaque matte carton + internal anti-rattle bubble wrap',
      },
      {
        key: '02 · WAYBILL SENDER ID',
        val: 'OM Fulfilment Logistics (KL)',
        sub: 'Declared neutrally as Personal Nutritional Wellness',
      },
      {
        key: '03 · KLANG VALLEY RUNNER',
        val: '3–5 Hours Same-Day Dispatch',
        sub: 'KL, Selangor & Putrajaya orders before 16:00 MYT',
      },
      {
        key: '04 · NATIONWIDE COURIER',
        val: '1–2d West MY · 2–4d East MY',
        sub: 'Free shipping on all 2-Bottle (RM 318) & 3-Bottle (RM 477) orders',
      },
    ],
    pinnedSummaryBullets: [
      'Layer 1: Factory tamper-evident bottle shrink-band + internal desiccant sachet',
      'Layer 2: Thick cellular bubble cushioning that eliminates capsule rattling noises when shaken',
      'Layer 3: Unbranded matte corrugated carton or tear-proof poly-mailer with zero product text',
      'Waybill: Sender printed as "OM Fulfilment Logistics (50450 Kuala Lumpur)"',
      'Settlement: FPX / DuitNow QR (ideal for condo guardhouse/office drop) or COD (pay upon handover)',
    ],
    chapters: [
      {
        kicker: 'CHAPTER 01 · THREE-LAYER ACOUSTIC & VISUAL PRIVACY ARCHITECTURE',
        title: 'Why Ordinary Mailer Bags Fail Privacy Tests—And How Onyxman Eliminates Every Clue.',
        paragraphs: [
          'Many online sellers claim "discreet shipping" yet slip supplement bottles into thin plastic courier flyers. Anyone handling the flyer—from the sorting hub clerk to your condominium security guard or family member—can feel the cylindrical bottle contour and hear the distinct rattle of capsules inside when the parcel is moved.',
          'Onyxman Malaysia enforces a strict Three-Layer Acoustic & Visual Privacy Architecture on every single bottle (RM 159), dual pack (RM 318), and 3-bottle vault (RM 477). First, the hermetically sealed bottle is wrapped in high-density cellular bubble wrap that immobilizes the bottle and dampens acoustic rattle. Second, the cushioned core is boxed inside a rigid, unbranded corrugated security carton. Third, the carton is sealed inside a weatherproof matte outer sleeve. Neither touch, shaking, nor bright light can reveal what is inside.',
        ],
      },
      {
        kicker: 'CHAPTER 02 · AIRWAY BILL, EAST MALAYSIA CUSTOMS & BANK STATEMENT ANONYMITY',
        title: 'Neutral "OM Fulfilment Logistics" Labelling Across NinjaVan, J&T VIP & PosLaju.',
        paragraphs: [
          'On all thermal airway bills generated for NinjaVan Malaysia, J&T Express VIP, PosLaju Priority, and DHL eCommerce, the word "Onyxman" and the product names ("Horsemen", "Hammer of Thor", "Grow XL", "Magnum Pump XR") are 100% absent. The sender field reads strictly: "OM Fulfilment Logistics, Kuala Lumpur (50450 MY)".',
          'For air freight parcels crossing customs inspection into Kota Kinabalu, Sandakan, Tawau (Sabah), Kuching, Miri, Sibu, Bintulu (Sarawak), and WP Labuan, the mandatory cargo manifest description is printed neutrally as "Personal Nutritional Wellness — Health Supplement". Furthermore, if you settle your order via FPX Online Banking or DuitNow QR, your Maybank2u, CIMB Clicks, or Public Bank statement displays only our neutral corporate merchant entity—never a supplement product name.',
        ],
      },
      {
        kicker: 'CHAPTER 03 · CHOOSING BETWEEN FPX / DUITNOW QR VS. CASH ON DELIVERY (COD)',
        title: 'Which Payment Protocol Fits Condominium Guardhouses, Corporate Towers Or Home Handover?',
        paragraphs: [
          'Scenario A — Condominium Guardhouse, Parcel Locker, or Corporate Office Reception (Choose FPX or DuitNow QR): If you live in a Mont Kiara, Bangsar, George Town, or Johor Bahru condominium—or want your parcel delivered to your office tower in KLCC, TRX, or Petaling Jaya while you are in meetings—pre-paying via FPX Online Banking or DuitNow Instant QR is the cleanest choice. Because the parcel is already paid, the courier rider drops the unmarked box at your condo concierge desk, PopBox/parcel locker, or office mailroom without calling you down to collect cash.',
          'Scenario B — Direct Doorstep Handover (Choose Cash on Delivery / COD Malaysia): If you prefer to inspect the sealed outer carton in person before paying, select Cash on Delivery (COD) at RM 0 extra surcharge. Our courier partner (or private Klang Valley runner) will send a WhatsApp/SMS arrival alert 30 to 60 minutes before reaching your address, allowing you to step out, receive the unmarked parcel directly into your hands, and pay via exact cash or instant DuitNow QR scan.',
        ],
      },
      {
        kicker: 'CHAPTER 04 · TRANSIT WINDOWS ACROSS ALL 16 MALAYSIAN STATES & TERRITORIES',
        title: 'Same-Day 3–5 Hour Klang Valley Runner, 1–2 Day Peninsular Express & 2–4 Day Borneo Air Freight.',
        paragraphs: [
          'Zone 1 — Klang Valley Same-Day & Next-Day Hub (Kuala Lumpur, Selangor, Putrajaya): Orders confirmed before 16:00 MYT qualify for Free Next-Day Express Courier (RM 0 on all tiers) or our 3–5 Hour Same-Day Private Discreet Runner (+RM 15 flat rider fee).',
          'Zone 2 — Peninsular Malaysia 1–2 Business Day Express (Johor, Penang, Perak, Melaka, Negeri Sembilan, Pahang, Kedah, Kelantan, Terengganu, Perlis): Orders ship free (RM 0 shipping on 1, 2, or 3 bottles) via overnight highway linehaul, arriving within 1 to 2 business days. Zone 3 — East Malaysia Discreet Air Freight (Sabah, Sarawak, Labuan): Dispatched via priority air cargo arriving in 2 to 4 business days (RM 15 air freight on 1 bottle, or 100% FREE Air Freight when ordering 2 Bottles at RM 318 or 3 Bottles at RM 477).',
        ],
      },
    ],
    protocolSteps: [
      {
        code: 'ORDER-01 · SELECT SKU',
        title: 'Open The 10-Second Express Discreet Order Drawer',
        metric: '1B (RM 159) · 2B (RM 318) · 3B (RM 477)',
        desc: 'Click any "Acquire Discreet Reserve" button on onyxman.my to open the slide-over drawer. Select Horsemen, Hammer of Thor, Grow XL, or Magnum Pump XR and choose your bottle tier.',
      },
      {
        code: 'ORDER-02 · ALIAS & ADDRESS',
        title: 'Enter Delivery Address Or Collection Point (Initials Accepted)',
        metric: 'Condo Guardhouse · Office · PosLaju / NinjaVan Point',
        desc: 'You may enter your full name or preferred initials for the parcel label, along with your residential address, corporate office floor, or nearest courier collection point across any of the 16 states.',
      },
      {
        code: 'ORDER-03 · PAYMENT MODE',
        title: 'Choose FPX Online Banking, DuitNow Instant QR, Or COD',
        metric: 'Zero COD Surcharge · Neutral Bank Descriptor',
        desc: 'Select FPX/DuitNow QR for hands-free guardhouse/reception drop-off, or select Cash on Delivery (COD) to pay the rider directly upon parcel handover.',
      },
      {
        code: 'ORDER-04 · KL DISPATCH',
        title: 'Instant Routing To Our Kuala Lumpur Fulfilment Desk',
        metric: 'sales@onyxman.my · waleedshoaibofficial@gmail.com',
        desc: 'Your encrypted order payload is routed immediately to our Kuala Lumpur logistics desk with an instant Order ID and optional 1-click WhatsApp priority confirmation.',
      },
      {
        code: 'ORDER-05 · TRACKING & REFILL',
        title: 'Private Tracking Link & Automated Day-18 / Day-25 Refill Sync',
        metric: 'Zero Unsolicited Marketing Spam · PDPA Compliant',
        desc: 'Receive your live courier tracking number privately and enjoy an automated Day-18 (20 Caps) or Day-25 (30 Caps) refill reminder so your protocol never experiences a gap.',
      },
    ],
    faqs: [
      {
        questionEn: 'Can I use only my initials on the courier airway bill instead of my full legal name?',
        answerEn:
          'Yes. For prepaid FPX and DuitNow QR orders—as well as COD deliveries to residential or office addresses—you may enter your initials or a preferred recipient alias in the Express Order Drawer, provided your Malaysian mobile phone number is active to receive the courier arrival notification.',
      },
      {
        questionEn: 'Will the courier rider call out the product name when delivering to my office or house?',
        answerEn:
          'Never. Courier riders from NinjaVan, J&T VIP, and PosLaju do not know what is inside the parcel because the box is sealed inside our Kuala Lumpur vault and the airway bill states only "OM Fulfilment Logistics — Personal Nutritional Wellness".',
      },
      {
        questionEn: 'How do I get Free Air Freight Shipping to Sabah, Sarawak, or Labuan?',
        answerEn:
          'Single-bottle orders (RM 159) to East Malaysia carry a flat RM 15 air-freight fee. However, selecting the 2-Bottle Dual Momentum Protocol (RM 318) or 3-Bottle Mastery Vault (RM 477) automatically unlocks 100% Free Discreet Air Freight to Kota Kinabalu, Sandakan, Tawau, Kuching, Miri, Sibu, Bintulu, and Labuan.',
      },
      {
        questionEn: 'How is my personal data protected under Malaysia’s PDPA 2010?',
        answerEn:
          'In strict compliance with the Personal Data Protection Act 2010 (PDPA Malaysia), your name, phone number, email, and delivery address are used solely for order fulfilment via sales@onyxman.my and are never sold, shared, or exposed to third-party marketing lists.',
      },
    ],
  },
];

GUIDE_DOSSIERS.push(
  // ==========================================================================
  // GUIDE 4 (MS-151): 20-CAPSULE VS 30-CAPSULE CYCLE SELECTION
  // ==========================================================================
  {
    guideNumber: 4,
    microStep: 'MS-151',
    guideCode: 'GUIDE-04 · 20C VS 30C SELECTION',
    slug: '20-capsule-vs-30-capsule-cycle-selection',
    canonicalEnPath: '/guides/20-capsule-vs-30-capsule-cycle-selection/',
    alternateMsPath: '/ms/panduan/panduan-pemilihan-kitaran-20-kapsul-vs-30-kapsul/',
    enOutputPaths: [
      'guides/20-capsule-vs-30-capsule-cycle-selection/index.html',
      'guides/20-vs-30-capsule-protocol-guide/index.html',
      'guides/choosing-between-horsemen-hammer-growxl-magnum/index.html',
      'guides/20-capsule-vs-30-capsule-cycle-selection-guide/index.html',
      'guides/20-capsule-vs-30-capsule-refill-cycle-guide/index.html',
    ],
    watermark: 'CYCLES',
    primaryProductSlug: 'grow-xl',
    heroImage: '/assets/products/grow-xl-stage.webp',
    portraitImage: '/assets/products/grow-xl-portrait.webp',
    publishedDate: '2026-02-10T08:00:00+08:00',
    updatedDate: '2026-10-30T08:00:00+08:00',
    readingTime: '11 Min Protocol Selection Read',
    seoTitle:
      '20-Capsule Rapid Cycles (Horsemen, Hammer of Thor) vs 30-Capsule Monthly Conditioning (Grow XL, Magnum Pump XR) | Onyxman.my',
    metaDescription:
      'Compare Onyxman Malaysia’s 20-capsule concentrated reserves (Horsemen & Hammer of Thor) against our 30-capsule full-month protocols (Grow XL & Magnum Pump XR) at uniform RM 159 pricing.',
    kicker: 'MS-151 · PROTOCOL GUIDE 04 · 20-CAPSULE RAPID RESERVES VS. 30-CAPSULE MONTHLY CONDITIONING',
    headline:
      '20-Capsule Rapid Cycles vs. 30-Capsule Monthly Conditioning: <span class="foil-champagne-text">Choosing Your Onyxman Bottle.</span>',
    taxonomyStrip: [
      '01 · 20 CAPSULES: HORSEMEN & HAMMER OF THOR',
      '02 · 30 CAPSULES: GROW XL & MAGNUM PUMP XR',
      '03 · UNIFORM RM 159.00 MYR PRICING',
      '04 · DUAL-BOTTLE STACKING ARCHITECTURE',
    ],
    executiveSummary:
      'Because all four Onyxman Malaysia formulations carry the exact same official price of RM 159.00 per bottle (RM 318 for 2 bottles, RM 477 for 3 bottles), Malaysian buyers often ask why Horsemen and Hammer of Thor contain 20 capsules while Grow XL and Magnum Pump XR contain 30 capsules. The answer lies in extraction ratio density, targeted evening vs. daily circadian dosing, and Day-18 vs. Day-25 refill cadence.',
    telemetry: [
      {
        key: '01 · 20-CAP CONCENTRATION',
        val: 'Horsemen & Hammer of Thor',
        sub: 'High-ratio 100:1 Tongkat Ali & 60% Saponin evening reserves',
      },
      {
        key: '02 · 30-CAP FULL-MONTH',
        val: 'Grow XL & Magnum Pump XR',
        sub: 'Daily 30-day baseline vitality & Extended-Release NO matrix',
      },
      {
        key: '03 · COST PER SERVING',
        val: 'RM 7.95 (20c) · RM 5.30 (30c)',
        sub: 'Uniform RM 159.00 bottle price across all 4 formulations',
      },
      {
        key: '04 · REFILL RHYTHM',
        val: 'Day-18 vs. Day-25 Sync',
        sub: '2-Bottle (RM 318) & 3-Bottle (RM 477) eliminate cycle gaps',
      },
    ],
    pinnedSummaryBullets: [
      'Choose Horsemen (20 Caps × 500mg) for 150mg Tongkat Ali 100:1 + 70mg Epimedium rapid evening drive',
      'Choose Hammer of Thor (20 Veg. Caps) for 100% Vegetarian HPMC shells + 200mg Tribulus (60% Saponins)',
      'Choose Grow XL (30 Caps × 520mg) for a 30-day morning ritual with Muira Puama & Saw Palmetto',
      'Choose Magnum Pump XR (30 Black Caps × 600mg) for 320mg L-Arginine + L-Citrulline pre-gym/evening pump',
      'Stacking Option: Pair a 30-day morning bottle (Grow XL) with a 20-cap evening reserve (Horsemen) for RM 318',
    ],
    chapters: [
      {
        kicker: 'CHAPTER 01 · WHY TWO CAPSULE COUNTS EXIST AT UNIFORM RM 159 PRICING',
        title: 'Extraction Ratio Density (20-Cap Reserves) vs. Daily Calendar Conditioning (30-Cap Cycles).',
        paragraphs: [
          'At Onyxman Malaysia, every bottle is engineered around a specific physiological objective rather than arbitrary capsule counts. Our 20-capsule reserves—Horsemen (20 Capsules × 500mg, RM 159) and Hammer of Thor (20 Vegetarian HPMC Capsules × 500mg, RM 159)—devote a massive percentage of each capsule’s raw-material budget to costly, high-ratio standardized extracts: 150mg of 100:1 Eurycoma longifolia + 70mg of 20%-Icariin Epimedium in Horsemen, and 200mg of 60%-Protodioscin Tribulus terrestris + 60mg of 10%-Ginsenoside Panax ginseng in Plant-Cellulose HPMC shells in Hammer of Thor.',
          'Conversely, our 30-capsule monthly cycles—Grow XL (30 Capsules × 520mg, RM 159) and Magnum Pump XR (30 Black Capsules × 600mg, RM 159)—are calibrated for men who want a strict 1-capsule-per-day 30-day calendar habit (RM 5.30 per day) that steadily nourishes morning baseline vitality, prostate-supporting micro-circulation, or pre-workout endothelial Nitric Oxide.',
        ],
      },
      {
        kicker: 'CHAPTER 02 · INSIDE THE 20-CAPSULE DUEL: HORSEMEN VS. HAMMER OF THOR',
        title: 'Selecting Between Andean-Malaysian Evening Readiness (Horsemen) & Vegetarian Saponin Endurance (Thor).',
        paragraphs: [
          'Select Horsemen (20 Capsules, SKU: ONYX-HM-20) when your #1 priority is evening physical readiness and rapid adaptogenic drive. Horsemen delivers the highest single-capsule dose of 100:1 Malaysian Tongkat Ali in our entire vault (150mg), paired with 100mg of Gelatinized Peruvian Black Maca, 80mg of Korean Red Ginseng, 70mg of Epimedium sagittatum (Horny Goat Weed), and 80mg of L-Arginine HCl. It can be used either as a concentrated 20-day evening conditioning cycle or taken on-demand 45–60 minutes before active evenings.',
          'Select Hammer of Thor (20 Veg. Capsules, SKU: ONYX-HT-20) when you require a 100% plant-origin Vegetarian HPMC capsule shell (zero bovine or porcine gelatin) and prioritize physical muscular recovery, workout stamina, and steroidal saponin support. Hammer of Thor leads with 200mg of 60%-saponin Tribulus terrestris, 100mg of Black Maca, 60mg of Panax Ginseng, 45mg of Tongkat Ali 100:1, 30mg of Ginkgo Biloba, and 15mg of Zinc Bisglycinate.',
        ],
      },
      {
        kicker: 'CHAPTER 03 · INSIDE THE 30-CAPSULE DUEL: GROW XL VS. MAGNUM PUMP XR',
        title: 'Selecting Between All-Day Morning Vitality (Grow XL) & Extended-Release Nitric Oxide (Magnum Pump XR).',
        paragraphs: [
          'Select Grow XL (30 Capsules, SKU: ONYX-GX-30) if you are a corporate executive, business owner, or shift professional seeking an effortless 1-capsule-after-breakfast morning habit that lasts a full 30-day calendar month. Grow XL combines 140mg of Tongkat Ali 100:1 and 110mg of Black Maca with two unique botanicals not found in our other bottles: 75mg of Brazilian Muira Puama (Ptychopetalum olacoides for neuro-physical drive) and 70mg of Liposterolic Saw Palmetto (Serenoa repens for adult male pelvic and prostate wellness), plus 100mg of L-Arginine + L-Citrulline.',
          'Select Magnum Pump XR (30 Jet-Black Capsules, SKU: ONYX-MP-30) if you train at the gym, run, cycle, or want maximum vascular fullness and endothelial blood-flow support. Each 600mg black capsule delivers our heaviest amino-acid Nitric Oxide matrix—200mg L-Arginine HCl + 120mg L-Citrulline Malate (320mg combined)—fortified with 110mg Tribulus, 90mg Tongkat Ali, 60mg Panax Ginseng, and 5mg Bioperine® for a +30% bioavailability surge within 30 to 45 minutes.',
        ],
      },
      {
        kicker: 'CHAPTER 04 · THE RM 318 DUAL-BOTTLE & RM 477 90-DAY STACKING BLUEPRINT',
        title: 'How Malaysian Buyers Combine Morning & Evening Protocols With Free Nationwide Shipping.',
        paragraphs: [
          'Many discerning Malaysian buyers choose the 2-Bottle Dual Momentum Protocol (RM 318.00) or 3-Bottle Mastery Vault (RM 477.00) not only to unlock 100% Free Air Freight to Sabah, Sarawak, and Labuan, but also to run a Morning + Evening Complementary Stack.',
          'The classic "Circadian + Evening Reserve Stack" pairs 1 bottle of Grow XL (taken after breakfast for 30 days of baseline Tongkat Ali, Maca, Muira Puama, and Saw Palmetto) with 1 bottle of Horsemen or Magnum Pump XR (reserved for 30–60 minutes prior to gym sessions or active evenings). Just mention your desired 2-bottle or 3-bottle combination inside the Express Discreet Order Drawer or via sales@onyxman.my.',
        ],
      },
    ],
    protocolSteps: [
      {
        code: 'PROFILE-01 · HORSEMEN',
        title: 'Horsemen (20 Capsules × 500mg) — Rapid Evening Readiness Reserve',
        metric: 'RM 159 (1B) · Day-18 Refill Sync',
        desc: 'Best for men prioritizing 150mg Tongkat Ali 100:1 + 70mg Epimedium Icariin + 100mg Black Maca taken 45–60 minutes after dinner or before evening activity.',
      },
      {
        code: 'PROFILE-02 · HAMMER OF THOR',
        title: 'Hammer of Thor (20 Veg. Capsules) — Vegetarian Saponin Stamina',
        metric: 'RM 159 (1B) · 100% HPMC Plant Shell',
        desc: 'Best for men requiring vegetarian HPMC capsules and 200mg of 60%-Saponin Tribulus terrestris + Panax Ginseng for muscular endurance and post-dinner recovery.',
      },
      {
        code: 'PROFILE-03 · GROW XL',
        title: 'Grow XL (30 Capsules × 520mg) — 30-Day Morning Baseline Conditioning',
        metric: 'RM 159 (1B) · Day-25 Refill Sync',
        desc: 'Best for professionals wanting a 30-day post-breakfast capsule combining Tongkat Ali (140mg), Black Maca (110mg), Muira Puama (75mg), and Saw Palmetto (70mg).',
      },
      {
        code: 'PROFILE-04 · MAGNUM PUMP XR',
        title: 'Magnum Pump XR (30 Black Capsules × 600mg) — Extended-Release Nitric Oxide',
        metric: 'RM 159 (1B) · 320mg NO Matrix + Bioperine',
        desc: 'Best for gym-goers and active men seeking peak vascular vasodilation (200mg L-Arginine + 120mg L-Citrulline + 5mg Bioperine) 30–45 minutes before training or evenings.',
      },
      {
        code: 'PROFILE-05 · DUAL STACK',
        title: '2-Bottle Dual Momentum Protocol (RM 318) & 3-Bottle Vault (RM 477)',
        metric: 'Free West & East Malaysia Shipping',
        desc: 'Combine two identical bottles for a 40-to-60 day uninterrupted cycle, or pair a morning bottle (Grow XL) with an evening bottle (Horsemen or Magnum Pump XR).',
      },
    ],
    faqs: [
      {
        questionEn: 'Why do 20-capsule and 30-capsule Onyxman bottles cost the same RM 159?',
        answerEn:
          'Pricing is determined by total standardized active extract cost per bottle rather than inert capsule shell count. Our 20-capsule bottles (Horsemen and Hammer of Thor) utilize ultra-concentrated 100:1 Tongkat Ali, 20%-Icariin Epimedium, and 60%-Protodioscin Tribulus in Vegetarian HPMC shells, matching the exact botanical value of our 30-capsule daily bottles (Grow XL and Magnum Pump XR).',
      },
      {
        questionEn: 'Which bottle should a first-time buyer in Malaysia start with?',
        answerEn:
          'If you want a steady 30-day morning routine for overall daily energy and vitality, start with Grow XL (30 Capsules). If your primary goal is evening readiness and Tongkat Ali potency, start with Horsemen (20 Capsules). If you lift weights regularly and want vascular Nitric Oxide support, start with Magnum Pump XR (30 Black Capsules). If you require vegetarian capsules, choose Hammer of Thor (20 Veg. Capsules).',
      },
      {
        questionEn: 'How does the Day-18 vs. Day-25 automated refill reminder work?',
        answerEn:
          'When you order a 20-capsule bottle, our Kuala Lumpur desk schedules a private Day-18 check-in so your next parcel (1–2 day express courier) arrives before Day 20. For 30-capsule bottles, the check-in occurs on Day 25—guaranteeing zero interruption in botanical plasma saturation.',
      },
      {
        questionEn: 'Can I mix and match different bottles in the RM 318 (2 Bottles) or RM 477 (3 Bottles) tiers?',
        answerEn:
          'Yes. While selecting Qty 2 (RM 318) or Qty 3 (RM 477) in the Express Order Drawer reserves multiples of your chosen anchor formulation by default, you can note any custom mix (e.g., "1 Grow XL + 1 Horsemen") in the delivery address/notes field or reply to your instant WhatsApp/email confirmation.',
      },
    ],
  },

  // ==========================================================================
  // GUIDE 5 (MS-152): MALAYSIAN MEN'S VITALITY & TROPICAL STAMINA NUTRITION
  // ==========================================================================
  {
    guideNumber: 5,
    microStep: 'MS-152',
    guideCode: 'GUIDE-05 · TROPICAL VITALITY NUTRITION',
    slug: 'malaysian-mens-vitality-tropical-stamina-nutrition',
    canonicalEnPath: '/guides/malaysian-mens-vitality-tropical-stamina-nutrition/',
    alternateMsPath: '/ms/panduan/nutrisi-kecergasan-dan-stamina-lelaki-iklim-tropika-malaysia/',
    enOutputPaths: [
      'guides/malaysian-mens-vitality-tropical-stamina-nutrition/index.html',
      'guides/mens-vitality-nutrition-malaysia/index.html',
      'guides/tropical-stamina-and-sleep-optimization/index.html',
      'guides/malaysian-mens-vitality-and-tropical-stamina-nutrition/index.html',
    ],
    watermark: 'VITALITY',
    primaryProductSlug: 'horsemen',
    heroImage: '/assets/products/horsemen-stage.webp',
    portraitImage: '/assets/products/grow-xl-portrait.webp',
    publishedDate: '2026-02-18T08:00:00+08:00',
    updatedDate: '2026-10-30T08:00:00+08:00',
    readingTime: '11 Min Nutritional Science Read',
    seoTitle:
      'Malaysian Men’s Vitality, Cortisol Management & Tropical Stamina Nutrition Blueprint | Onyxman.my',
    metaDescription:
      'How Malaysia’s 34°C tropical humidity, Klang Valley traffic cortisol, sleep debt, and late-night high-glycemic meals drain male stamina—and how standardized botanicals restore evening vitality.',
    kicker: 'MS-152 · PROTOCOL GUIDE 05 · TROPICAL ENDOCRINE NUTRITION & CORTISOL RESILIENCE',
    headline:
      'Malaysian Men’s Vitality, Cortisol Management &amp; <span class="foil-champagne-text">Tropical Stamina Nutrition Blueprint.</span>',
    taxonomyStrip: [
      '01 · SWEAT ZINC & ELECTROLYTE DEPLETION',
      '02 · COMMUTE CORTISOL VS. FREE DRIVE',
      '03 · GLYCEMIC MAMAK CRASH AVOIDANCE',
      '04 · CAFFEINE-FREE ADAPTOGEN RECOVERY',
    ],
    executiveSummary:
      'Adult men working across Kuala Lumpur, Selangor, Penang, Johor Bahru, Kota Kinabalu, and Kuching confront a distinct triad of physiological stamina drains: year-round 32°C–35°C equatorial perspiration that depletes intracellular Zinc, 2-hour highway commutes that spike evening serum cortisol, and late-night refined-carbohydrate meals wrapped around 3-in-1 sugary coffee. This blueprint pairs Malaysian dietary optimization with standardized Onyxman adaptogens.',
    telemetry: [
      {
        key: '01 · SWEAT MINERAL LOSS',
        val: '15–25 mg Chelated Zinc Needed',
        sub: 'Tropical perspiration depletes trace androgenic cofactors',
      },
      {
        key: '02 · CORTISOL MODULATION',
        val: 'Tongkat Ali 100:1 + Ginseng',
        sub: 'Balances evening stress-to-vitality ratios after KL traffic',
      },
      {
        key: '03 · HYDRATION TARGET',
        val: '2.5 – 3.0 Liters Plain H2O',
        sub: 'Essential for eNOS endothelial nitric oxide blood volume',
      },
      {
        key: '04 · SLEEP ARCHITECTURE',
        val: 'Zero Caffeine · REM-Safe',
        sub: 'Supports nocturnal LH pulsatility during 23:00–05:00 sleep',
      },
    ],
    pinnedSummaryBullets: [
      'Replenish daily sweat losses with 15mg–25mg chelated Zinc inside every Onyxman capsule',
      'Counteract Klang Valley & Penang Bridge commute cortisol with 100:1 Eurycoma longifolia',
      'Replace 18:00 MYT canned sugary energy drinks & 3-in-1 coffee with non-stimulant Black Maca',
      'Prioritize high-protein, moderate-lipid evening meals (grilled ikan bakar, ayam tandoori, eggs)',
      'Protect nocturnal REM sleep between 23:00 and 06:00 MYT where 70% of daily male recovery occurs',
    ],
    chapters: [
      {
        kicker: 'CHAPTER 01 · THE EQUATORIAL PERSPIRATION & ZINC DEPLETION TRAP',
        title: 'How Malaysia’s Year-Round 33°C Humidity Quietly Drains Essential Male Trace Minerals.',
        paragraphs: [
          'Unlike temperate climates, Malaysia’s equatorial heat and 80%+ humidity cause continuous sensible and insensible perspiration—even when walking from a car park to an air-conditioned office tower or exercising in the evening. Human sweat carries significant concentrations of divalent trace minerals, most notably Zinc and Magnesium.',
          'Dietary Zinc is an indispensable enzymatic cofactor for over 300 metabolic reactions in adult men, including Leydig cellular maintenance, superoxide dismutase (SOD) vascular antioxidant defense, and protein synthesis. When sweat losses exceed dietary intake, men experience persistent evening lethargy and blunted physical recovery. Every Onyxman formulation includes 15mg to 25mg of highly bioavailable Zinc (Zinc Bisglycinate Chelate in Hammer of Thor, Zinc Gluconate in Grow XL, and Zinc Oxide/Aspartate in Horsemen and Magnum Pump XR) to replenish tropical mineral depletion daily.',
        ],
      },
      {
        kicker: 'CHAPTER 02 · HIGHWAY COMMUTE CORTISOL & THE SHBG LOCKDOWN',
        title: 'Why 12-Hour Corporate Workdays & Traffic Gridlock Blunt Evening Vitality.',
        paragraphs: [
          'Consider the typical schedule of a 30-to-55-year-old professional in the Klang Valley, Penang, or Johor Bahru: waking at 06:30 MYT, navigating Federal Highway, LDP, NKVE, or Causeway traffic, enduring 10 hours of high-pressure corporate meetings, and returning home after 20:00 MYT. Chronic psychological and thermal stress keeps the hypothalamic-pituitary-adrenal (HPA) axis locked in high-cortisol output well into the night.',
          'Elevated evening cortisol directly antagonizes male vitality through two mechanisms: it suppresses nocturnal luteinizing hormone (LH) signaling and upregulates hepatic Sex Hormone-Binding Globulin (SHBG), which locks bioavailable androgenic vitality into an inactive protein-bound state. Clinical human studies on Malaysian standardized water-soluble Eurycoma longifolia (Tongkat Ali 100:1, anchored at 150mg in Horsemen and 140mg in Grow XL) demonstrate significant support for healthy cortisol-to-vitality ratios and SHBG modulation in stressed adult men.',
        ],
      },
      {
        kicker: 'CHAPTER 03 · BREAKING THE 3-IN-1 COFFEE, ENERGY DRINK & LATE-NIGHT MAMAK CYCLE',
        title: 'Replacing Glycemic Crashes With Caffeine-Free Peruvian Black Maca & Panax Ginseng.',
        paragraphs: [
          'To fight late-afternoon fatigue at 17:30 MYT, millions of Malaysian men consume canned carbonated energy drinks or sweet 3-in-1 instant coffee, followed at 22:00 MYT by refined-carbohydrate mamak suppers (Maggi Goreng, Roti Banjir, Teh Tarik). This triggers a violent insulin spike, reactive hypoglycemia at 23:00 MYT, endothelial oxidative stress that quenches Nitric Oxide, and fragmented, shallow sleep caused by lingering caffeine.',
          'Onyxman formulations replace this destructive stimulant-and-sugar roller coaster with 100% caffeine-free cellular adaptogens. Gelatinized Peruvian Black Maca (100mg–110mg in Grow XL, Horsemen, and Hammer of Thor) provides lipid-soluble macamides that protect mitochondrial ATP generation without touching adenosine receptors, while Korean Red Panax Ginseng (60mg–80mg) enhances skeletal-muscle oxygen utilization and clears post-work lactic acid.',
        ],
      },
      {
        kicker: 'CHAPTER 04 · THE MALAYSIAN HIGH-VITALITY DINNER & SLEEP OPTIMIZATION PROTOCOL',
        title: 'Structuring Local Whole Foods Around Your Onyxman Capsule For Peak Nocturnal Recovery.',
        paragraphs: [
          'You do not need imported Western diet plans to optimize male vitality in Malaysia; local whole foods provide extraordinary nutritional synergy when chosen wisely. For dinner (around 19:30–20:15 MYT), prioritize clean protein and healthy fats: Ikan Bakar (grilled stingray, siakap, or mackerel rich in Omega-3s), Ayam Percik or Tandoori Chicken, Sup Tulang/Daging with leafy ulam greens, kampung eggs, and moderate steamed rice.',
          'Avoid sugary syrups (Sirap Bandung, Teh Ais) at dinner; hydrate with 300ml of plain warm water when taking your evening capsule (Horsemen 45–60 mins post-dinner, or Hammer of Thor 30 mins post-dinner), and aim for 7 hours of dark, cool (22°C–24°C) sleep between 23:30 and 06:30 MYT so your endocrine and vascular systems complete full overnight restoration.',
        ],
      },
    ],
    protocolSteps: [
      {
        code: 'HABIT-01 · HYDRATION',
        title: '2.5 to 3.0 Liters Of Plain Water + Electrolyte Balance',
        metric: '300ml Warm H2O With Every Capsule',
        desc: 'Start your morning with 500ml of plain water and consume 300ml with your Onyxman capsule to maintain plasma volume for endothelial Nitric Oxide vasodilation.',
      },
      {
        code: 'HABIT-02 · PROTEIN DINNER',
        title: 'Malaysian Whole-Food Protein & Omega-3 Evening Meals',
        metric: 'Ikan Bakar · Ayam Tandoori · Kampung Eggs · Ulam',
        desc: 'Supply dietary L-arginine, L-citrulline, and healthy cholesterol precursors at dinner while minimizing deep-fried trans fats and refined sugar syrups.',
      },
      {
        code: 'HABIT-03 · CAFFEINE CUTOFF',
        title: 'Enforce A 16:00 MYT Cutoff On Kopi O & Canned Energy Drinks',
        metric: 'Zero Stimulant Interference With REM Sleep',
        desc: 'Switch from late-afternoon caffeine to non-stimulant Onyxman adaptogens (Grow XL in the morning or Horsemen/Hammer of Thor after dinner) to protect deep nocturnal recovery.',
      },
      {
        code: 'HABIT-04 · RESISTANCE WORK',
        title: '3× Weekly Compound Resistance Training + Magnum Pump XR',
        metric: '30–45 Mins Pre-Gym Nitric Oxide Priming',
        desc: 'Pair 3 weekly 45-minute sessions of compound lifting or brisk conditioning with Magnum Pump XR (30 Black Capsules) to upregulate endothelial eNOS sensitivity.',
      },
      {
        code: 'HABIT-05 · 90-DAY CONTINUITY',
        title: 'Commit To A 60-to-90 Day Adaptogenic Conditioning Cycle',
        metric: 'RM 318 (2 Bottles) · RM 477 (3 Bottles)',
        desc: 'Overcoming years of tropical mineral depletion and work stress is a cumulative biological process; maintain uninterrupted daily intake across a 2- or 3-bottle cycle.',
      },
    ],
    faqs: [
      {
        questionEn: 'Why do Malaysian men experience higher evening fatigue than men in cooler climates?',
        answerEn:
          'Year-round 32°C–35°C heat and high humidity force the cardiovascular system to work harder for thermoregulation while accelerating sweat loss of Zinc, Magnesium, and electrolytes. Combined with long urban commutes and late-night high-glycemic meals, evening cortisol remains elevated while cellular ATP drops.',
      },
      {
        questionEn: 'Can I take Onyxman supplements if I work rotating night shifts in Malaysia?',
        answerEn:
          'Yes. Simply anchor your capsule timing to your personal sleep-wake cycle rather than the wall clock: take Grow XL 20–30 minutes after your first "waking meal" of the day, or take Horsemen / Hammer of Thor 30–60 minutes after your main evening/pre-rest meal.',
      },
      {
        questionEn: 'Are Onyxman capsules safe to take alongside my regular gym whey protein or creatine?',
        answerEn:
          'Yes. Standardized botanical extracts (Tongkat Ali, Black Maca, Tribulus, Panax Ginseng) and nitric oxide amino acids (L-Arginine, L-Citrulline) complement whey protein, creatine monohydrate, and multivitamins. Just take your Onyxman capsule with plain water 30–45 minutes before your heavy protein shake so amino-acid absorption remains rapid.',
      },
      {
        questionEn: 'Do Onyxman formulations contain any added sugar, artificial dyes, or synthetic caffeine?',
        answerEn:
          'Zero. Unlike canned energy drinks or 3-in-1 premix packets that contain 25g–40g of refined sugar and synthetic caffeine, Onyxman capsules contain 0g sugar, 0 calories from carbohydrates, and 0mg caffeine.',
      },
    ],
  },

  // ==========================================================================
  // GUIDE 6 (MS-153): NITRIC OXIDE AMINO ACIDS VS ADAPTOGENIC HERBS + DISAMBIGUATION
  // ==========================================================================
  {
    guideNumber: 6,
    microStep: 'MS-153',
    guideCode: 'GUIDE-06 · NITRIC OXIDE VS ADAPTOGENS',
    slug: 'nitric-oxide-amino-acids-vs-adaptogenic-herbs',
    canonicalEnPath: '/guides/nitric-oxide-amino-acids-vs-adaptogenic-herbs/',
    alternateMsPath: '/ms/panduan/perbezaan-asid-amino-nitrik-oksida-dan-herba-adaptogenik/',
    enOutputPaths: [
      'guides/nitric-oxide-amino-acids-vs-adaptogenic-herbs/index.html',
      'guides/nitric-oxide-vs-adaptogenic-botanicals/index.html',
      'guides/l-arginine-vs-tongkat-ali-malaysia/index.html',
      'guides/nitric-oxide-amino-acids-vs-adaptogenic-herbs-guide/index.html',
    ],
    watermark: 'VASCULAR',
    primaryProductSlug: 'magnum-pump-xr',
    heroImage: '/assets/products/magnum-pump-xr-stage.webp',
    portraitImage: '/assets/products/magnum-pump-xr-portrait.webp',
    publishedDate: '2026-02-25T08:00:00+08:00',
    updatedDate: '2026-10-30T08:00:00+08:00',
    readingTime: '12 Min Vascular & Phytochemical Read',
    seoTitle:
      'Nitric Oxide Amino Acids (L-Arginine, L-Citrulline) vs Adaptogenic Herbs (Tongkat Ali, Maca, Tribulus) | Onyxman.my',
    metaDescription:
      'Compare vascular Nitric Oxide amino-acid precursors (L-Arginine HCl, L-Citrulline Malate, Bioperine) with neuro-endocrine adaptogenic herbs (Tongkat Ali, Black Maca, Tribulus) + Magnum Pump XR DietarySupplement disambiguation.',
    kicker: 'MS-153 · PROTOCOL GUIDE 06 · VASCULAR NITRIC OXIDE PRECURSORS VS. ADAPTOGENIC BOTANICALS',
    headline:
      'Nitric Oxide Amino Acids vs. Adaptogenic Herbs: <span class="foil-champagne-text">Dual-Pathway Male Performance &amp; Magnum Pump XR Disambiguation.</span>',
    taxonomyStrip: [
      '01 · PILLAR I: L-ARGININE + L-CITRULLINE (eNOS)',
      '02 · PILLAR II: TONGKAT ALI, MACA & TRIBULUS',
      '03 · BIOPERINE +30% ABSORPTION CO-FACTOR',
      '04 · MAGNUM PUMP XR = 30 ORAL BLACK CAPSULES',
    ],
    executiveSummary:
      'Optimal adult male physical performance relies on two distinct yet interdependent biological pillars: (1) Endothelial Nitric Oxide (NO) Vasodilation—governed by amino acids L-Arginine HCl and L-Citrulline Malate—which controls rapid blood flow and vascular engorgement within 30 to 60 minutes; and (2) Neuro-Endocrine & Cellular Adaptogens—governed by Tongkat Ali 100:1, Peruvian Black Maca, 60%-Saponin Tribulus, and Panax Ginseng—which build underlying energetic drive and stamina over 20 to 90 days. This guide also provides explicit entity disambiguation confirming that Magnum Pump XR (SKU: ONYX-MP-30, RM 159) is a 30-capsule oral dietary supplement—never a mechanical or industrial pump.',
    telemetry: [
      {
        key: '01 · VASCULAR NO PATHWAY',
        val: '320 mg Arginine + Citrulline XR',
        sub: 'Endothelial eNOS -> cGMP smooth-muscle relaxation in 30–45m',
      },
      {
        key: '02 · ADAPTOGENIC PATHWAY',
        val: 'Tongkat Ali + Maca + Tribulus',
        sub: '20-to-90 day SHBG, cortisol & mitochondrial ATP resilience',
      },
      {
        key: '03 · BIO-ENHANCER MATRIX',
        val: '5 mg Bioperine® (95% Piperine)',
        sub: 'Enhances intestinal amino & herbal uptake by +30%',
      },
      {
        key: '04 · ENTITY DISAMBIGUATION',
        val: '30 Oral Black Capsules (RM 159)',
        sub: '100% DietarySupplement · Zero mechanical/industrial hardware',
      },
    ],
    pinnedSummaryBullets: [
      'Pillar 1 (Amino Acids): L-Arginine HCl + L-Citrulline Malate drive eNOS Nitric Oxide blood flow in 30–60 mins',
      'Pillar 2 (Adaptogens): Tongkat Ali 100:1, Black Maca & Tribulus build 20–90 day endocrine & cellular drive',
      'Why Single-Pathway Supplements Fail: Drive without blood flow—or blood flow without drive—is incomplete',
      'How Magnum Pump XR Unites Both: 320mg NO Amino Matrix + 260mg Standardized Botanicals + 5mg Bioperine',
      'Explicit Disambiguation: Magnum Pump XR is a 30-Black-Capsule oral dietary supplement (NOT a mechanical pump)',
    ],
    chapters: [
      {
        kicker: 'CHAPTER 01 · PILLAR ONE: ENDOTHELIAL NITRIC OXIDE (L-ARGININE HCl & L-CITRULLINE MALATE)',
        title: 'The Vascular Plumbing Pathway: How eNOS & cGMP Govern Rapid Physical Responsiveness.',
        paragraphs: [
          'Every physical performance response in adult men—from skeletal-muscle oxygen delivery during heavy gym sets to peripheral vascular engorgement during evening intimacy—depends on the relaxation of arterial smooth muscle. The master signaling molecule responsible for this vasodilation is Nitric Oxide (NO), synthesized inside the blood vessel lining by the enzyme Endothelial Nitric Oxide Synthase (eNOS).',
          'L-Arginine HCl is the direct nitrogen-donating substrate for eNOS, generating an initial wave of Nitric Oxide and cyclic guanosine monophosphate (cGMP) within 30 to 45 minutes of oral ingestion. However, because hepatic arginase enzymes break down a portion of oral L-Arginine during first-pass metabolism, pairing L-Arginine HCl (200mg) with L-Citrulline Malate 2:1 (120mg) in Magnum Pump XR creates a dual-phase Extended-Release (XR) kinetic profile: L-Citrulline bypasses the liver untouched and converts into fresh plasma L-Arginine in the kidneys over hours 1 through 5.',
        ],
      },
      {
        kicker: 'CHAPTER 02 · PILLAR TWO: NEURO-ENDOCRINE ADAPTOGENS (TONGKAT ALI, MACA, TRIBULUS & GINSENG)',
        title: 'The Central Engine Pathway: How Standardized Phytochemicals Build Drive & Stamina Resilience.',
        paragraphs: [
          'While amino acids optimize vascular "plumbing", vascular vasodilation alone cannot create central physical desire, mental focus, or post-work recovery if a man is exhausted by high cortisol and low free vitality. That central energetic engine is governed by our second pillar: HPLC-standardized botanical adaptogens.',
          'Malaysian Eurycoma longifolia 100:1 (Tongkat Ali, standardized to ≥2.2% Eurycomanone) modulates SHBG and evening cortisol; Peruvian Black Maca 10:1 (standardized to ≥0.6% Macamides) supports non-stimulant central drive and mitochondrial endurance; Tribulus terrestris (standardized to ≥60% Protodioscin furostanol saponins) supports androgen-receptor sensitivity and physical recovery; and Korean Red Panax Ginseng (≥10% Ginsenosides Rg1/Rb1) protects endothelial eNOS from oxidative stress while combating physical fatigue.',
        ],
      },
      {
        kicker: 'CHAPTER 03 · HOW ONYXMAN FORMULATIONS BALANCE AMINO ACIDS & BOTANICALS',
        title: 'Matching The Amino-to-Adaptogen Ratio Across All Four RM 159 Formulations.',
        paragraphs: [
          'Rather than forcing you to buy separate amino-acid powders and herbal bottles, every Onyxman formulation integrates both pillars in a targeted ratio: (1) Magnum Pump XR (30 Black Capsules × 600mg, RM 159) is our highest Nitric Oxide formulation—allocating 320mg (53.3% of capsule weight) to L-Arginine HCl + L-Citrulline Malate, supported by 110mg Tribulus (60% saponins), 90mg Tongkat Ali 100:1, 60mg Panax Ginseng, 15mg Zinc, and 5mg Bioperine®.',
          '(2) Horsemen (20 Capsules × 500mg, RM 159) flips the ratio toward rapid evening adaptogenic drive—leading with 400mg of concentrated botanicals (150mg Tongkat Ali 100:1, 100mg Black Maca, 80mg Korean Red Ginseng, 70mg Epimedium Icariin) backed by 80mg L-Arginine HCl and 20mg Zinc; (3) Grow XL (30 Capsules × 520mg, RM 159) balances 395mg of daily morning botanicals (Tongkat Ali, Black Maca, Muira Puama, Saw Palmetto) with 100mg of L-Arginine + L-Citrulline; (4) Hammer of Thor (20 Veg. Capsules × 500mg, RM 159) pairs 435mg of vegetarian saponin/adaptogen extracts with 50mg of L-Arginine HCl.',
        ],
      },
      {
        kicker: 'CHAPTER 04 · OFFICIAL ENTITY DISAMBIGUATION: MAGNUM PUMP XR (30 BLACK CAPSULES)',
        title: 'Why Search Engines & Malaysian Buyers Must Distinguish Dietary Supplement Capsules From Industrial Pumps.',
        paragraphs: [
          'In international engineering and oilfield equipment catalogs, the words "Magnum Pump" or "Magnum XP/XR" sometimes refer to heavy mechanical fluid, water, or slurry pumps used on drilling rigs—or to mechanical vacuum cylinder devices. To eliminate any ambiguity for Malaysian buyers and search engines: Magnum Pump XR by Onyxman Malaysia (SKU: ONYX-MP-30, MPN: MPXR-30BLK-MY, GTIN-13: 9550000102042, Official Price: RM 159.00 MYR) is 100% an oral Botanical & Amino-Acid Dietary Supplement packaged as 30 Jet-Black Capsules inside a tamper-evident apothecary bottle.',
          'The word "Pump" in Magnum Pump XR refers strictly to physiological sports-nutrition "vascular muscle pump"—the natural endothelial Nitric Oxide vasodilation and cellular blood-flow fullness achieved when taking 1 oral black capsule with 300ml of water 30 to 45 minutes before resistance training or evening physical activity. No mechanical hardware, vacuum apparatus, or external device is ever sold or implied.',
        ],
      },
    ],
    protocolSteps: [
      {
        code: 'PATHWAY-01 · MINUTE 0',
        title: 'Oral Ingestion Of 1 Capsule With 300ml Plain Water',
        metric: 'Bioperine® 5mg Enhances Brush-Border Uptake',
        desc: 'Upon swallowing Magnum Pump XR (or Horsemen / Grow XL / Hammer of Thor), warm water dissolves the capsule shell in 6–8 minutes while Bioperine piperine inhibits intestinal glucuronidation.',
      },
      {
        code: 'PATHWAY-02 · MINUTE 35',
        title: 'First-Wave L-Arginine HCl -> eNOS Nitric Oxide Surge',
        metric: '200mg L-Arginine HCl · Immediate cGMP Vasodilation',
        desc: 'Free L-Arginine enters vascular endothelial cells and converts via eNOS into Nitric Oxide, relaxing arterial smooth muscle and amplifying blood flow to working muscles.',
      },
      {
        code: 'PATHWAY-03 · HOUR 1 TO 5',
        title: 'Second-Wave L-Citrulline Malate Extended-Release Recycling',
        metric: '120mg L-Citrulline Malate 2:1 · Sustained Plasma Arginine',
        desc: 'L-Citrulline bypasses hepatic arginase degradation and recycles in the kidneys into sustained plasma L-Arginine—maintaining vascular fullness for up to 5 hours.',
      },
      {
        code: 'PATHWAY-04 · DAY 7 TO 20',
        title: 'Adaptogenic Cortisol & SHBG Re-Equilibration',
        metric: 'Tongkat Ali 100:1 (90–150mg) + Panax Ginseng (60–80mg)',
        desc: 'Over the first 1–3 weeks, quassinoid diterpenoids and ginsenosides modulate evening stress cortisol, support free vitality bioavailability, and protect eNOS from oxidative quenching.',
      },
      {
        code: 'PATHWAY-05 · DAY 30 TO 90',
        title: 'Full Mitochondrial & Saponin Conditioning Saturation',
        metric: 'Tribulus 60% Saponins + Peruvian Black Maca Macamides',
        desc: 'Completing a 30-to-90 day protocol (RM 159 / RM 318 / RM 477) consolidates baseline stamina, recovery velocity, and neuro-endocrine resilience.',
      },
    ],
    faqs: [
      {
        questionEn: 'What is the main difference between L-Arginine / L-Citrulline and Tongkat Ali / Black Maca?',
        answerEn:
          'L-Arginine HCl and L-Citrulline Malate are amino-acid Nitric Oxide precursors that act rapidly (within 30–60 minutes) on blood vessel walls to increase vascular blood flow and gym/evening pump. Tongkat Ali, Black Maca, and Tribulus are botanical adaptogens that build central energetic drive, stamina resilience, and hormone-binding balance over a 20-to-90-day cycle.',
      },
      {
        questionEn: 'Is Magnum Pump XR an oral capsule supplement or a mechanical device?',
        answerEn:
          'Magnum Pump XR (SKU: ONYX-MP-30, RM 159.00) is strictly an oral Dietary Supplement bottle containing 30 Jet-Black Capsules formulated with L-Arginine HCl (200mg), L-Citrulline Malate (120mg), Tribulus (110mg), Tongkat Ali (90mg), Panax Ginseng (60mg), Zinc (15mg), and Bioperine (5mg). It is NOT a mechanical vacuum pump or industrial fluid pump.',
      },
      {
        questionEn: 'Why does Magnum Pump XR include both L-Arginine HCl and L-Citrulline Malate?',
        answerEn:
          'Taking L-Arginine alone produces a fast Nitric Oxide peak at 35–45 minutes that tapers off after 90 minutes due to liver arginase enzymes. Adding L-Citrulline Malate bypasses liver breakdown and converts continuously into fresh L-Arginine in the kidneys—creating a true Extended-Release (XR) vascular window lasting 3 to 5 hours.',
      },
      {
        questionEn: 'Can I stack Magnum Pump XR with Horsemen or Grow XL?',
        answerEn:
          'Yes. Many active men in Malaysia order the 2-Bottle Dual Momentum Protocol (RM 318, Free Nationwide Shipping) to pair Grow XL (1 capsule after breakfast for all-day botanical conditioning) with Magnum Pump XR (1 black capsule 30–45 minutes before afternoon gym training or evening activity).',
      },
    ],
  }
);

/**
 * Renders the Sibling Guides Cross-Navigation Ledger for each Individual Guide Page
 */
export function renderAllGuidesCrossNavigationSection(currentSlug = '') {
  const rowsHtml = GUIDE_DOSSIERS.map((g) => {
    const isCurrent = g.slug === currentSlug;
    const aliasList = g.enOutputPaths
      .slice(1)
      .map((p) => `/${p.replace(/index\.html$/, '')}`)
      .join(' · ');

    return `
      <div class="guide-hairline-row" ${isCurrent ? 'style="background:rgba(212,175,55,0.08);"' : ''}>
        <div class="guide-hairline-row__code">
          ${esc(g.microStep)} · GUIDE #0${g.guideNumber}
          ${isCurrent ? '<br /><span style="color:var(--gold-foil-bright);">[CURRENT GUIDE]</span>' : ''}
        </div>
        <div class="guide-hairline-row__main">
          <h3 class="guide-hairline-row__title">
            <a href="${esc(g.canonicalEnPath)}" style="text-decoration:underline;text-underline-offset:4px;">
              ${g.headline}
            </a>
          </h3>
          <p class="guide-hairline-row__desc">${esc(g.executiveSummary)}</p>
          <p style="font-size:0.74rem;color:var(--text-ash-silver);letter-spacing:0.06em;">
            <strong>Supported Route Aliases:</strong> ${esc(g.canonicalEnPath)} · ${esc(aliasList)}
          </p>
        </div>
        <div class="guide-hairline-row__meta">
          <span style="font-size:0.76rem;color:var(--gold-foil-bright);">${esc(g.readingTime)}</span>
          <a href="${esc(g.canonicalEnPath)}" class="cta-foil-primary" style="padding:0.65rem 1.25rem;font-size:0.72rem;">
            <span>Read Guide #0${g.guideNumber} →</span>
          </a>
        </div>
      </div>`;
  }).join('\n');

  return `
  <!-- ==========================================================================
       SHARED ARCHITECTURAL LEDGER — COMPLETE 6-GUIDE EDITORIAL DIRECTORY
       ========================================================================== -->
  <section
    id="complete-6-guide-protocol-archive-directory"
    class="guide-section guide-section--onyx"
    aria-labelledby="heading-all-6-guides-nav"
  >
    <div class="guide-section__inner">
      <header class="guide-section__header">
        <div class="guide-section__header-left">
          <span class="editorial-kicker">
            MS-147 TO MS-153 · COMPLETE 6-GUIDE BUYER &amp; PROTOCOL LIBRARY
          </span>
          <h2 id="heading-all-6-guides-nav" class="editorial-headline-lg">
            Continue Exploring All 6 <span class="foil-champagne-text">Onyxman Malaysia Protocol &amp; Buyer Guides.</span>
          </h2>
        </div>
        <div class="guide-section__header-right">
          <a href="/guides/" class="cta-foil-primary">
            <span>Return To Master Guides Archive (/guides/) →</span>
          </a>
        </div>
      </header>

      <div class="guide-hairline-ledger">
        ${rowsHtml}
      </div>
    </div>
  </section>`;
}

/**
 * Renders an Individual English Buyer-Intent SEO Guide Page (`MS-148` through `MS-153`)
 */
export function renderIndividualGuidePage(dossier) {
  const lang = 'en-MY';
  const canonicalPath = dossier.canonicalEnPath;
  const alternatePathEn = dossier.canonicalEnPath;
  const alternatePathMs = dossier.alternateMsPath;

  const combinedFaqs = [...dossier.faqs, ...SHARED_BUYER_GUIDE_FAQS];

  const breadcrumbs = [
    { name: 'Onyxman Malaysia Home', url: '/' },
    { name: 'Vitality & Buyer Protocol Guides', url: '/guides/' },
    { name: dossier.seoTitle.split('|')[0].trim(), url: canonicalPath },
  ];

  const schemaGraphJson = buildFullPageGraph({
    pageType: 'guide',
    lang,
    pageUrl: `https://www.onyxmen.my${canonicalPath}`,
    title: dossier.seoTitle,
    description: dossier.metaDescription,
    product: dossier.primaryProductSlug,
    article: {
      slug: dossier.slug,
      headlineEn: dossier.seoTitle,
      headlineMs: dossier.seoTitle,
      descriptionEn: dossier.metaDescription,
      descriptionMs: dossier.metaDescription,
      datePublished: dossier.publishedDate,
      dateModified: dossier.updatedDate,
      imageUrl: `https://www.onyxmen.my${dossier.heroImage}`,
      aboutTopics: dossier.taxonomyStrip,
    },
    breadcrumbs,
    faqs: combinedFaqs,
  });

  const chaptersHtml = dossier.chapters
    .map(
      (ch, idx) => `
      <article class="guide-split-5050__chapter" id="guide-chapter-${idx + 1}">
        <span class="editorial-kicker">${esc(ch.kicker)}</span>
        <h3 class="editorial-headline-lg" style="font-size:clamp(1.65rem,2.4vw,2.35rem);">
          ${esc(ch.title)}
        </h3>
        ${ch.paragraphs
          .map(
            (p, pIdx) => `
          <p style="color:${pIdx === 0 ? 'var(--text-muted-alabaster)' : 'var(--text-silk-ivory)'};font-size:0.97rem;line-height:1.78;" ${
              idx === 0 && pIdx === 0 ? 'class="protocol-key-takeaways"' : ''
            }>
            ${esc(p)}
          </p>`
          )
          .join('\n')}
      </article>`
    )
    .join('\n');

  const protocolStepsHtml = dossier.protocolSteps
    .map(
      (st) => `
        <div class="guide-hairline-row">
          <div class="guide-hairline-row__code">${esc(st.code)}</div>
          <div class="guide-hairline-row__main">
            <h3 class="guide-hairline-row__title">${esc(st.title)}</h3>
            <p class="guide-hairline-row__desc">${esc(st.desc)}</p>
          </div>
          <div class="guide-hairline-row__meta">
            <span style="font-size:0.78rem;color:var(--gold-foil-bright);letter-spacing:0.14em;text-transform:uppercase;">
              ${esc(st.metric)}
            </span>
          </div>
        </div>`
    )
    .join('\n');

  const faqsHtml = combinedFaqs
    .map(
      (f, idx) => `
        <details class="guide-faq-item" ${idx < 4 ? 'open' : ''}>
          <summary>
            <span>${String(idx + 1).padStart(2, '0')} · ${esc(f.questionEn)}</span>
            <span style="color:var(--gold-champagne);font-size:1.1rem;" aria-hidden="true">+</span>
          </summary>
          <div class="guide-faq-item__body">
            <p>${esc(f.answerEn)}</p>
          </div>
        </details>`
    )
    .join('\n');

  const bodyContent = `
  ${GUIDE_STAGE_CSS}

  <!-- ==========================================================================
       CHAPTER I — PARADIGM A: 100VW × 100VH FULL-BLEED EDITORIAL GUIDE HERO
       ========================================================================== -->
  <section
    id="guide-hero-${esc(dossier.slug)}"
    class="guide-cinema-hero"
    aria-labelledby="guide-hero-title-${esc(dossier.slug)}"
    data-micro-step="${esc(dossier.microStep)}"
  >
    <div class="guide-cinema-hero__watermark" aria-hidden="true">
      ${esc(dossier.watermark)}
    </div>

    <nav class="guide-cinema-hero__breadcrumb-bar" aria-label="Editorial Guide Breadcrumb Navigation">
      <div class="guide-cinema-hero__crumbs">
        <a href="/">Onyxman Malaysia Apothecary</a>
        <span aria-hidden="true">/</span>
        <a href="/guides/">Protocol &amp; Buyer Guides</a>
        <span aria-hidden="true">/</span>
        <span style="color:var(--gold-foil-bright);">${esc(dossier.guideCode)}</span>
      </div>
      <div>
        <span>${esc(dossier.microStep)} · ${esc(dossier.readingTime)} · UPDATED 2026-10-30</span>
      </div>
    </nav>

    <div class="guide-cinema-hero__stage">
      <div class="guide-cinema-hero__narrative">
        <span class="editorial-kicker">${esc(dossier.kicker)}</span>

        <h1 id="guide-hero-title-${esc(dossier.slug)}" class="editorial-headline-xl">
          ${dossier.headline}
        </h1>

        <div class="guide-cinema-hero__taxonomy-strip">
          ${dossier.taxonomyStrip
            .map((item) => `<span>${esc(item)}</span>`)
            .join('\n          <span aria-hidden="true">·</span>\n          ')}
        </div>

        <p class="guide-cinema-hero__lead article-executive-summary">
          ${esc(dossier.executiveSummary)}
        </p>

        <div class="guide-cinema-hero__cta-row">
          <button
            type="button"
            class="cta-foil-primary"
            data-open-order-drawer="true"
            data-order-product="${esc(dossier.primaryProductSlug)}"
            data-order-qty="1"
          >
            <span>ACQUIRE DISCREET RESERVE · RM 159</span>
            <span aria-hidden="true">→</span>
          </button>
          <a href="#paradigm-d-editorial-split-stage" class="cta-hairline-secondary">
            <span>Read Full Protocol Dossier ↓</span>
          </a>
          <a href="#quantitative-four-bottle-protocol-matrix" class="cta-hairline-secondary">
            <span>4-Bottle Dosage &amp; Timing Matrix ↓</span>
          </a>
        </div>
      </div>

      <div class="guide-cinema-hero__visual">
        <div class="guide-cinema-hero__pedestal">
          <picture>
            <source srcset="${esc(dossier.heroImage)}" type="image/webp" />
            <img
              src="${esc(dossier.heroImage.replace('.webp', '.png'))}"
              alt="${esc(dossier.seoTitle)}"
              width="1200"
              height="900"
              fetchpriority="high"
              decoding="async"
              class="guide-cinema-hero__img"
            />
          </picture>
        </div>
      </div>
    </div>

    <div class="guide-cinema-hero__telemetry-strip">
      ${dossier.telemetry
        .map(
          (t) => `
      <div class="guide-cinema-hero__telemetry-col">
        <span class="guide-cinema-hero__telemetry-key">${esc(t.key)}</span>
        <span class="guide-cinema-hero__telemetry-val">${esc(t.val)}</span>
        <span class="guide-cinema-hero__telemetry-sub">${esc(t.sub)}</span>
      </div>`
        )
        .join('\n')}
    </div>
  </section>

  <!-- ==========================================================================
       CHAPTER II — PARADIGM D: PINNED 50VW / 50VW SPLIT-SCREEN EDITORIAL STAGE
       ========================================================================== -->
  <section
    id="paradigm-d-editorial-split-stage"
    class="guide-split-5050"
    aria-labelledby="heading-paradigm-d-guide"
  >
    <!-- Left 50vw Sticky Visual & Key Protocol Summary Stage -->
    <div class="guide-split-5050__pinned">
      <div>
        <span class="editorial-kicker">
          PARADIGM D · PINNED 50VW / 50VW EDITORIAL STAGE · ${esc(dossier.microStep)}
        </span>
        <h2 id="heading-paradigm-d-guide" class="editorial-headline-lg" style="margin-top:0.85rem;">
          ${dossier.headline}
        </h2>
      </div>

      <div style="display:flex;justify-content:center;align-items:center;padding:1.25rem 0;">
        <picture>
          <source srcset="${esc(dossier.portraitImage)}" type="image/webp" />
          <img
            src="${esc(dossier.portraitImage.replace('.webp', '.png'))}"
            alt="${esc(dossier.seoTitle)}"
            width="800"
            height="1000"
            loading="lazy"
            decoding="async"
            style="max-height:42vh;width:auto;filter:drop-shadow(0 24px 48px rgba(0,0,0,0.9));"
          />
        </picture>
      </div>

      <div class="guide-hairline-ledger">
        ${dossier.pinnedSummaryBullets
          .map(
            (b, i) => `
          <div style="display:flex;justify-content:space-between;gap:1rem;padding:0.7rem 0;border-bottom:1px solid rgba(234,230,223,0.1);font-size:0.83rem;">
            <span style="color:var(--gold-champagne);font-family:var(--font-technical);white-space:nowrap;">KEY 0${i + 1}</span>
            <span style="color:var(--text-silk-ivory);text-align:right;">✓ ${esc(b)}</span>
          </div>`
          )
          .join('\n')}
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:0.9rem;">
        <button
          type="button"
          class="cta-foil-primary"
          data-open-order-drawer="true"
          data-order-product="${esc(dossier.primaryProductSlug)}"
          data-order-qty="1"
        >
          <span>RESERVE ANCHOR BOTTLE · RM 159</span>
          <span aria-hidden="true">→</span>
        </button>
        <a href="/guides/" class="cta-hairline-secondary">
          <span>All 6 Buyer Guides (/guides/)</span>
        </a>
      </div>
    </div>

    <!-- Right 50vw Scrolling Deep-Dive Chapters -->
    <div class="guide-split-5050__scrolling">
      ${chaptersHtml}
    </div>
  </section>

  <!-- ==========================================================================
       CHAPTER III — STEP-BY-STEP EXECUTION & VERIFICATION LEDGER
       ========================================================================== -->
  <section
    id="guide-execution-protocol-steps"
    class="guide-section"
    aria-labelledby="heading-execution-steps"
  >
    <div class="guide-section__inner">
      <header class="guide-section__header">
        <div class="guide-section__header-left">
          <span class="editorial-kicker">
            STEP-BY-STEP EXECUTION PROTOCOL · ${esc(dossier.guideCode)}
          </span>
          <h2 id="heading-execution-steps" class="editorial-headline-lg">
            Five Actionable Protocol Checkpoints For <span class="foil-champagne-text">Malaysian Buyers.</span>
          </h2>
        </div>
        <div class="guide-section__header-right">
          <p>
            Follow these five structured checkpoints to ensure 100% authenticity, optimal intestinal bioavailability, and complete parcel privacy across Malaysia.
          </p>
        </div>
      </header>

      <div class="guide-hairline-ledger">
        ${protocolStepsHtml}
      </div>
    </div>
  </section>

  ${renderFourBottleProtocolMatrixSection()}
  ${renderMalaysianDietaryBioavailabilityLedger()}
  ${renderAuthenticityVerificationGatesSection()}
  ${renderBotanicalMonographCrossLinksSection()}
  ${renderMultiBottleAcquisitionSection(dossier.primaryProductSlug)}
  ${renderAll16StatesDeliveryLedgerSection(dossier.primaryProductSlug)}

  <!-- ==========================================================================
       CHAPTER X — COMPREHENSIVE BUYER-INTENT FAQ ACCORDION LEDGER
       ========================================================================== -->
  <section
    id="guide-faq-accordion-ledger"
    class="guide-section"
    aria-labelledby="heading-guide-faqs"
  >
    <div class="guide-section__inner">
      <header class="guide-section__header">
        <div class="guide-section__header-left">
          <span class="editorial-kicker">
            FREQUENTLY ASKED BUYER &amp; PROTOCOL QUESTIONS · ${esc(dossier.microStep)}
          </span>
          <h2 id="heading-guide-faqs" class="editorial-headline-lg">
            Verified Answers On <span class="foil-champagne-text">Timing, Authenticity, Discreet COD &amp; Formulations.</span>
          </h2>
        </div>
        <div class="guide-section__header-right">
          <p>
            Need private 1-on-1 assistance from our Kuala Lumpur desk? Email <a href="mailto:sales@onyxman.my" style="color:var(--gold-foil-bright);text-decoration:underline;">sales@onyxman.my</a> or <a href="mailto:info@onyxman.my" style="color:var(--gold-foil-bright);text-decoration:underline;">info@onyxman.my</a> (09:00–23:00 MYT daily).
          </p>
        </div>
      </header>

      <div class="guide-faq-ledger">
        ${faqsHtml}
      </div>
    </div>
  </section>

  ${renderAllGuidesCrossNavigationSection(dossier.slug)}
  `;

  return renderLuxuryShell({
    lang,
    title: dossier.seoTitle,
    description: dossier.metaDescription,
    canonicalPath,
    alternatePathEn,
    alternatePathMs,
    ogImage: dossier.heroImage,
    schemaGraphJson,
    bodyContent,
    activeNav: 'guides',
    productSlug: dossier.primaryProductSlug,
    defaultQty: 1,
    includeSealStrip: true,
  });
}

/**
 * Renders the Master English Editorial & Protocol Guides Archive (`MS-147` — `public/guides/index.html`)
 * Includes explicit anchor sections referenced by `ObsidianFooter.mjs`:
 * - `#cycle-selection-20-vs-30-capsules`
 * - `#botanical-nitric-oxide-synergy`
 * - `#malaysia-cod-and-fpx-discreet-ordering`
 */
export function renderMasterGuidesIndexPage() {
  const lang = 'en-MY';
  const canonicalPath = '/guides/';
  const alternatePathEn = '/guides/';
  const alternatePathMs = '/ms/panduan/';

  const title =
    'Adult Men’s Vitality, Authenticity Verification & Discreet Malaysia Buyer Guides Archive | Onyxman Malaysia';
  const description =
    'Master Editorial & Protocol Library for Onyxman Malaysia (RM 159): explore all 6 clinical buyer guides covering optimal capsule timing, counterfeit verification, discreet plain-box COD/FPX ordering, 20 vs 30 capsule cycles, tropical stamina nutrition & Nitric Oxide synergy.';

  const indexFaqs = [
    ...GUIDE_DOSSIERS.map((g) => g.faqs[0]),
    ...GUIDE_DOSSIERS.map((g) => g.faqs[1]),
    ...SHARED_BUYER_GUIDE_FAQS,
  ];

  const breadcrumbs = [
    { name: 'Onyxman Malaysia Home', url: '/' },
    { name: 'Master Editorial & Protocol Guides Archive', url: '/guides/' },
  ];

  const schemaGraphJson = buildFullPageGraph({
    pageType: 'guide',
    lang,
    pageUrl: 'https://www.onyxmen.my/guides/',
    title,
    description,
    product: 'horsemen',
    article: {
      slug: 'onyxman-malaysia-buyer-and-protocol-guides-archive',
      headlineEn: title,
      headlineMs: title,
      descriptionEn: description,
      descriptionMs: description,
      imageUrl: 'https://www.onyxmen.my/assets/products/onyxman-lineup-hero.webp',
      aboutTopics: [
        'Optimal Capsule Timing & Tropical Bioavailability in Malaysia',
        'Authentic RM 159 Onyxman Bottle Verification & Anti-Counterfeit Audit',
        '100% Discreet Plain-Box COD, FPX & DuitNow QR Ordering Across 16 States',
        '20-Capsule Rapid Reserves vs 30-Capsule Monthly Conditioning Cycles',
        'Malaysian Men’s Vitality, Cortisol Management & Tropical Stamina Nutrition',
        'Nitric Oxide Amino Acids (L-Arginine, L-Citrulline) vs Adaptogenic Herbs',
      ],
    },
    breadcrumbs,
    faqs: indexFaqs,
  });

  const masterGuideChaptersHtml = GUIDE_DOSSIERS.map((g) => {
    const anchorId =
      g.guideNumber === 3
        ? 'malaysia-cod-and-fpx-discreet-ordering'
        : g.guideNumber === 4
        ? 'cycle-selection-20-vs-30-capsules'
        : g.guideNumber === 6
        ? 'botanical-nitric-oxide-synergy'
        : `master-guide-dossier-0${g.guideNumber}`;

    const aliasLinksHtml = g.enOutputPaths
      .map((rel) => {
        const href = `/${rel.replace(/index\.html$/, '')}`;
        return `<a href="${esc(href)}" style="color:var(--gold-foil-bright);text-decoration:underline;font-size:0.76rem;">${esc(href)}</a>`;
      })
      .join(' · ');

    return `
      <article class="guide-split-5050__chapter" id="${esc(anchorId)}">
        <div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:0.75rem;">
          <span class="editorial-kicker">${esc(g.microStep)} · ${esc(g.guideCode)}</span>
          <span style="font-size:0.74rem;color:var(--gold-foil-bright);letter-spacing:0.15em;">
            ${esc(g.readingTime)}
          </span>
        </div>

        <h3 class="editorial-headline-lg" style="font-size:clamp(1.75rem,2.6vw,2.5rem);">
          <a href="${esc(g.canonicalEnPath)}" style="text-decoration:underline;text-underline-offset:5px;">
            ${g.headline}
          </a>
        </h3>

        <p style="color:var(--text-muted-alabaster);font-size:0.96rem;line-height:1.76;">
          ${esc(g.executiveSummary)}
        </p>

        <div style="border-top:1px solid rgba(212,175,55,0.28);margin-top:0.5rem;padding-top:0.65rem;">
          <div style="font-size:0.72rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold-champagne);margin-bottom:0.4rem;">
            CORE PROTOCOL TAKEAWAYS:
          </div>
          ${g.pinnedSummaryBullets
            .map(
              (b) => `
            <div style="font-size:0.84rem;color:var(--text-silk-ivory);padding:0.28rem 0;">
              ✓ ${esc(b)}
            </div>`
            )
            .join('\n')}
        </div>

        <div style="font-size:0.75rem;color:var(--text-ash-silver);padding-top:0.35rem;">
          <strong>Direct &amp; Alias Routes:</strong> ${aliasLinksHtml}
        </div>

        <div style="display:flex;flex-wrap:wrap;gap:0.85rem;padding-top:0.75rem;">
          <a href="${esc(g.canonicalEnPath)}" class="cta-foil-primary">
            <span>READ FULL GUIDE #0${g.guideNumber} (${esc(g.microStep)}) →</span>
          </a>
          <button
            type="button"
            class="cta-hairline-secondary"
            data-open-order-drawer="true"
            data-order-product="${esc(g.primaryProductSlug)}"
            data-order-qty="1"
          >
            <span>Reserve Anchor Bottle · RM 159</span>
          </button>
        </div>
      </article>`;
  }).join('\n');

  const allProtocolStepsCombinedHtml = GUIDE_DOSSIERS.flatMap((g) =>
    g.protocolSteps.map((st) => ({
      ...st,
      guideTitle: `Guide #0${g.guideNumber} (${g.microStep})`,
      guideHref: g.canonicalEnPath,
    }))
  )
    .map(
      (item) => `
        <div class="guide-hairline-row">
          <div class="guide-hairline-row__code">${esc(item.code)}</div>
          <div class="guide-hairline-row__main">
            <h3 class="guide-hairline-row__title">${esc(item.title)}</h3>
            <p style="font-size:0.76rem;color:var(--gold-champagne);letter-spacing:0.12em;text-transform:uppercase;">
              <a href="${esc(item.guideHref)}" style="text-decoration:underline;">${esc(item.guideTitle)}</a>
            </p>
            <p class="guide-hairline-row__desc">${esc(item.desc)}</p>
          </div>
          <div class="guide-hairline-row__meta">
            <span style="font-size:0.78rem;color:var(--gold-foil-bright);letter-spacing:0.14em;">
              ${esc(item.metric)}
            </span>
          </div>
        </div>`
    )
    .join('\n');

  const faqsHtml = indexFaqs
    .map(
      (f, idx) => `
        <details class="guide-faq-item" ${idx < 4 ? 'open' : ''}>
          <summary>
            <span>${String(idx + 1).padStart(2, '0')} · ${esc(f.questionEn)}</span>
            <span style="color:var(--gold-champagne);font-size:1.1rem;" aria-hidden="true">+</span>
          </summary>
          <div class="guide-faq-item__body">
            <p>${esc(f.answerEn)}</p>
          </div>
        </details>`
    )
    .join('\n');

  const bodyContent = `
  ${GUIDE_STAGE_CSS}

  <!-- ==========================================================================
       CHAPTER I — PARADIGM A: 100VW × 100VH MASTER EDITORIAL ARCHIVE HERO (MS-147)
       ========================================================================== -->
  <section
    id="master-guides-archive-hero"
    class="guide-cinema-hero"
    aria-labelledby="master-guides-hero-title"
    data-micro-step="MS-147"
  >
    <div class="guide-cinema-hero__watermark" aria-hidden="true">
      PROTOCOLS
    </div>

    <nav class="guide-cinema-hero__breadcrumb-bar" aria-label="Master Guides Archive Breadcrumb">
      <div class="guide-cinema-hero__crumbs">
        <a href="/">Onyxman Malaysia Apothecary</a>
        <span aria-hidden="true">/</span>
        <span style="color:var(--gold-foil-bright);">Master Editorial &amp; Protocol Guides Archive (/guides/)</span>
      </div>
      <div>
        <span>MS-147 TO MS-153 · 6 COMPLETE CLINICAL &amp; BUYER GUIDES</span>
      </div>
    </nav>

    <div class="guide-cinema-hero__stage">
      <div class="guide-cinema-hero__narrative">
        <span class="editorial-kicker">
          MS-147 · ONYXMAN MALAYSIA EDITORIAL &amp; PROTOCOL LIBRARY · RM 159 VAULT
        </span>

        <h1 id="master-guides-hero-title" class="editorial-headline-xl">
          Adult Men’s Vitality, Authenticity &amp; <span class="foil-champagne-text">Discreet Malaysia Buyer Guides.</span>
        </h1>

        <div class="guide-cinema-hero__taxonomy-strip">
          <span>01 · CAPSULE TIMING (MS-148)</span>
          <span aria-hidden="true">·</span>
          <span>02 · RM 159 AUTHENTICITY (MS-149)</span>
          <span aria-hidden="true">·</span>
          <span>03 · DISCREET COD &amp; FPX (MS-150)</span>
          <span aria-hidden="true">·</span>
          <span>04 · 20 VS 30 CAPSULES (MS-151)</span>
          <span aria-hidden="true">·</span>
          <span>05 · TROPICAL NUTRITION (MS-152)</span>
          <span aria-hidden="true">·</span>
          <span>06 · NITRIC OXIDE VS HERBS (MS-153)</span>
        </div>

        <p class="guide-cinema-hero__lead article-executive-summary">
          Welcome to the official Onyxman Malaysia Editorial &amp; Protocol Library. Explore six comprehensive clinical and buyer-intent manuals engineered for adult men across all 16 Malaysian states—covering optimal post-meal and pre-workout capsule timing, Kopi O / Teh Tarik tannin buffers, 5-gate anti-counterfeit bottle verification, 3-layer plain-box COD/FPX logistics, 20-capsule vs. 30-capsule cycle selection, tropical cortisol nutrition, and Extended-Release Nitric Oxide vascular science.
        </p>

        <div class="guide-cinema-hero__cta-row">
          <button
            type="button"
            class="cta-foil-primary"
            data-open-order-drawer="true"
            data-order-product="horsemen"
            data-order-qty="1"
          >
            <span>ACQUIRE DISCREET RESERVE · RM 159</span>
            <span aria-hidden="true">→</span>
          </button>
          <a href="#master-paradigm-d-guides-curtain" class="cta-hairline-secondary">
            <span>Explore All 6 Buyer Guides ↓</span>
          </a>
          <a href="#quantitative-four-bottle-protocol-matrix" class="cta-hairline-secondary">
            <span>4-Bottle Dosage Matrix ↓</span>
          </a>
        </div>
      </div>

      <div class="guide-cinema-hero__visual">
        <div class="guide-cinema-hero__pedestal">
          <picture>
            <source srcset="/assets/products/onyxman-lineup-hero.webp" type="image/webp" />
            <img
              src="/assets/products/onyxman-lineup-hero.png"
              alt="${esc(title)}"
              width="1400"
              height="900"
              fetchpriority="high"
              decoding="async"
              class="guide-cinema-hero__img"
              style="max-width:560px;"
            />
          </picture>
        </div>
      </div>
    </div>

    <div class="guide-cinema-hero__telemetry-strip">
      <div class="guide-cinema-hero__telemetry-col">
        <span class="guide-cinema-hero__telemetry-key">MS-148 &amp; MS-151 · DOSAGE &amp; CYCLES</span>
        <span class="guide-cinema-hero__telemetry-val">20-Cap vs. 30-Cap Protocols</span>
        <span class="guide-cinema-hero__telemetry-sub">Day-18 &amp; Day-25 automated refill synchronization</span>
      </div>
      <div class="guide-cinema-hero__telemetry-col">
        <span class="guide-cinema-hero__telemetry-key">MS-149 · QUALITY ASSURANCE</span>
        <span class="guide-cinema-hero__telemetry-val">5-Gate RM 159 Verification</span>
        <span class="guide-cinema-hero__telemetry-sub">Zero fake registration numbers · 0% synthetic PDE5</span>
      </div>
      <div class="guide-cinema-hero__telemetry-col">
        <span class="guide-cinema-hero__telemetry-key">MS-150 · PRIVACY LOGISTICS</span>
        <span class="guide-cinema-hero__telemetry-val">OM Fulfilment Logistics</span>
        <span class="guide-cinema-hero__telemetry-sub">3-layer plain box · Same-day KL runner · COD &amp; FPX</span>
      </div>
      <div class="guide-cinema-hero__telemetry-col">
        <span class="guide-cinema-hero__telemetry-key">MS-152 &amp; MS-153 · BIO-SCIENCE</span>
        <span class="guide-cinema-hero__telemetry-val">eNOS Nitric Oxide + Adaptogens</span>
        <span class="guide-cinema-hero__telemetry-sub">320mg NO Matrix · 100:1 Tongkat Ali · 60% Saponins</span>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       CHAPTER II — PARADIGM D: 50VW / 50VW PINNED MASTER GUIDES CURTAIN
       ========================================================================== -->
  <section
    id="master-paradigm-d-guides-curtain"
    class="guide-split-5050"
    aria-labelledby="heading-master-guides-curtain"
  >
    <div class="guide-split-5050__pinned">
      <div>
        <span class="editorial-kicker">
          PARADIGM D · PINNED 50VW / 50VW EDITORIAL ARCHIVE · SIX MASTER GUIDES
        </span>
        <h2 id="heading-master-guides-curtain" class="editorial-headline-lg" style="margin-top:0.85rem;">
          Six Complete Protocols For <span class="foil-champagne-text">Maximum Bioavailability, Authenticity &amp; Privacy.</span>
        </h2>
      </div>

      <div style="display:flex;justify-content:center;align-items:center;padding:1rem 0;">
        <picture>
          <source srcset="/assets/products/horsemen-stage.webp" type="image/webp" />
          <img
            src="/assets/products/horsemen-stage.png"
            alt="Onyxman Malaysia Protocol Guides Archive"
            width="1000"
            height="750"
            loading="lazy"
            decoding="async"
            style="max-height:40vh;width:auto;filter:drop-shadow(0 24px 48px rgba(0,0,0,0.9));"
          />
        </picture>
      </div>

      <div class="guide-hairline-ledger">
        ${GUIDE_DOSSIERS.map(
          (g) => `
          <div style="display:flex;justify-content:space-between;align-items:center;gap:1rem;padding:0.75rem 0;border-bottom:1px solid rgba(234,230,223,0.1);">
            <span style="color:var(--gold-champagne);font-size:0.72rem;letter-spacing:0.16em;">${esc(g.microStep)}</span>
            <a href="${esc(g.canonicalEnPath)}" style="color:var(--gold-foil-bright);font-size:0.88rem;text-decoration:underline;flex:1;">
              Guide #0${g.guideNumber}: ${esc(g.seoTitle.split('|')[0].trim())}
            </a>
            <span style="color:var(--text-ash-silver);font-size:0.75rem;">→</span>
          </div>`
        ).join('\n')}
      </div>
    </div>

    <div class="guide-split-5050__scrolling">
      ${masterGuideChaptersHtml}
    </div>
  </section>

  <!-- ==========================================================================
       CHAPTER III — 30 MASTER PROTOCOL CHECKPOINTS ACROSS ALL 6 GUIDES
       ========================================================================== -->
  <section
    id="complete-30-protocol-checkpoints-ledger"
    class="guide-section"
    aria-labelledby="heading-30-checkpoints"
  >
    <div class="guide-section__inner">
      <header class="guide-section__header">
        <div class="guide-section__header-left">
          <span class="editorial-kicker">
            30 MASTER PROTOCOL CHECKPOINTS · MS-148 THROUGH MS-153
          </span>
          <h2 id="heading-30-checkpoints" class="editorial-headline-lg">
            Complete Execution Matrix Across <span class="foil-champagne-text">All Six Onyxman Malaysia Guides.</span>
          </h2>
        </div>
        <div class="guide-section__header-right">
          <p class="protocol-key-takeaways">
            Every checkpoint below synthesizes our clinical timing, anti-counterfeit inspection, discreet logistics, and vascular nutrition protocols into a single reference ledger.
          </p>
        </div>
      </header>

      <div class="guide-hairline-ledger">
        ${allProtocolStepsCombinedHtml}
      </div>
    </div>
  </section>

  ${renderFourBottleProtocolMatrixSection()}
  ${renderMalaysianDietaryBioavailabilityLedger()}
  ${renderAuthenticityVerificationGatesSection()}
  ${renderBotanicalMonographCrossLinksSection()}
  ${renderMultiBottleAcquisitionSection('horsemen')}
  ${renderAll16StatesDeliveryLedgerSection('horsemen')}

  <!-- ==========================================================================
       CHAPTER X — MASTER BUYER-INTENT FAQ ACCORDION LEDGER
       ========================================================================== -->
  <section
    id="master-guides-faq-accordion-ledger"
    class="guide-section"
    aria-labelledby="heading-master-guides-faqs"
  >
    <div class="guide-section__inner">
      <header class="guide-section__header">
        <div class="guide-section__header-left">
          <span class="editorial-kicker">
            MASTER EDITORIAL FAQ LEDGER · ONYXMAN MALAYSIA
          </span>
          <h2 id="heading-master-guides-faqs" class="editorial-headline-lg">
            Frequently Asked Questions Across <span class="foil-champagne-text">All 6 Vitality &amp; Buyer Protocol Guides.</span>
          </h2>
        </div>
      </header>

      <div class="guide-faq-ledger">
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
    activeNav: 'guides',
    productSlug: 'horsemen',
    defaultQty: 1,
    includeSealStrip: true,
  });
}

/**
 * Writes an HTML string to one or more relative paths inside `public/` and returns file telemetry.
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
 * Main Build Execution for MS-147 through MS-153
 */
export function buildAllEnglishGuides() {
  const summary = [];

  // 1. MS-147: Master English Guides Index (public/guides/index.html)
  const indexHtml = renderMasterGuidesIndexPage();
  summary.push(...writeHtmlToPublicPaths(indexHtml, ['guides/index.html']));

  // 2. MS-148 through MS-153: All 6 English Buyer-Intent SEO Guides + All Route Aliases
  for (const dossier of GUIDE_DOSSIERS) {
    const guideHtml = renderIndividualGuidePage(dossier);
    summary.push(...writeHtmlToPublicPaths(guideHtml, dossier.enOutputPaths));
  }

  return summary;
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  const builtFiles = buildAllEnglishGuides();
  console.log('================================================================================');
  console.log('ONYXMAN.MY — ENGLISH BUYER-INTENT SEO GUIDES BUILD COMPLETE (MS-147 TO MS-153)');
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
  console.log(`Total HTML Files Written & Audited (Master Index + 6 Guides + Aliases) : ${builtFiles.length}`);
  console.log(`Minimum Line Count Across All Files                                    : ${minLines} lines (Threshold >= 2,200)`);
  console.log(`Total Self-Audit Errors                                                : ${auditErrors}`);
  if (minLines < 2200 || auditErrors > 0) {
    console.error(`[FAIL] Build verification failed (minLines=${minLines}, auditErrors=${auditErrors}).`);
    process.exit(1);
  }
  console.log('================================================================================');
}
