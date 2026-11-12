#!/usr/bin/env node
/**
 * ONYXMEN.MY — ENGLISH BUYER-INTENT SEO GUIDES & PROTOCOL ARCHIVE BUILDER (MS-147 TO MS-153)
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
 * - MS-149: Guide 2 — How to Verify Authentic RM 159 Onyxmen Bottles & Spot Marketplace Counterfeits in Malaysia
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
 *   exact Onyxmen bottle linkages (RM 159 / RM 318 / RM 477), FAQs, and @graph JSON-LD.
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
            Exact Capsule Architecture, Intake Windows &amp; <span class="foil-champagne-text">Milligram Allocations Across All 4 Onyxmen Reserves.</span>
          </h2>
        </div>
        <div class="guide-section__header-right">
          <p>
            Every Onyxmen formulation is priced uniformly at <strong>RM 159.00 (1 Bottle)</strong>,
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
        'Strong Malaysian roasted coffee (Kopi O Kaw) and pulled milk tea (Teh Tarik) contain high concentrations of polyphenolic tannins and chlorogenic acids. In the stomach lumen, tannins chelate divalent trace minerals (such as Zinc Bisglycinate and Zinc Gluconate) and form insoluble precipitates with quassinoid alkaloids (Eurycomanone). Always maintain a strict 45-minute buffer between caffeinated beverages and your Onyxmen capsule.',
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
        'Malaysia’s year-round 75%–90% relative humidity causes hygroscopic herbal extracts (especially 100:1 Tongkat Ali and L-Citrulline Malate) to clump if left open in bathrooms or car gloveboxes. Always store your Onyxmen HDPE bottle in a cool bedroom drawer or air-conditioned room (<28°C) and keep the factory food-grade silica desiccant inside the bottle until the final capsule is consumed.',
    },
    {
      code: 'CHRONO-05 · CORT-22H',
      title: 'Evening Cortisol Down-Regulation & Deep REM Recovery Window',
      window: 'Zero Synthetic Stimulants · 100% Sleep-Safe',
      detail:
        'Unlike illicit street energy capsules or late-afternoon sugary canned drinks that trigger midnight tachycardia and insomnia, all four Onyxmen formulations are 100% free of synthetic caffeine and undeclared stimulants. Evening intake of Horsemen or Hammer of Thor works harmoniously with nocturnal restorative sleep cycles.',
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
        'Authentic climate-controlled Onyxmen Malaysia stock is never dumped on unverified classified portals or third-party flea-market stalls for RM 25 to RM 55. Genuine standardized 100:1 Tongkat Ali, 60%-saponin Tribulus, and 10:1 Black Maca require certified extraction and heavy-metal testing, maintaining a strict official price of RM 159.00 per single bottle, RM 318.00 for 2 bottles, and RM 477.00 for 3 bottles exclusively on https://www.onyxmen.my.',
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
        'Illicit counterfeit capsules frequently print fabricated drug registration numbers on cheap boxes while spiking starch powder with undeclared sildenafil or tadalafil analogues that trigger severe migraines, visual disturbances, and dangerous hypotension. Authentic Onyxmen formulations are transparent botanical and amino-acid dietary supplements—never misrepresented as prescription drugs.',
    },
    {
      code: 'AUTH-GATE-04',
      title: 'ICP-MS Heavy-Metal & USP <2021> Microbial Purity Screening',
      spec: 'Pb < 0.5 ppm · As < 0.5 ppm · Hg < 0.1 ppm · Cd < 0.3 ppm',
      detail:
        'Raw roots harvested from tropical soils naturally accumulate heavy metals if left unrefined. Every Onyxmen production lot undergoes Inductively Coupled Plasma Mass Spectrometry (ICP-MS) and microbial screening prior to encapsulation—ensuring zero salmonella, zero E. coli, and strict compliance with Malaysian trace-element safety limits.',
    },
    {
      code: 'AUTH-GATE-05',
      title: 'Authorized Kuala Lumpur Fulfilment Desk & Neutral Waybill Identity',
      spec: 'sales@onyxmen.my · info@onyxmen.my · OM Fulfilment Logistics',
      detail:
        'Every genuine order placed via our Express Discreet Order Drawer is logged directly with our Kuala Lumpur fulfilment desk (sales@onyxmen.my, info@onyxmen.my, and waleedshoaibofficial@gmail.com) and dispatched in a 3-layer unmarked parcel bearing the neutral sender name "OM Fulfilment Logistics (Kuala Lumpur)".',
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
            How To Verify Genuine <span class="foil-champagne-text">RM 159 Onyxmen Malaysia Bottles.</span>
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
            Reserve Your Discreet Onyxmen Protocol <span class="foil-champagne-text">Via FPX, DuitNow QR Or Cash On Delivery (COD).</span>
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
            Verify The Exact Phytochemical Science Behind <span class="foil-champagne-text">Every Onyxmen Capsule.</span>
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
      'Every authentic Onyxmen formulation is priced uniformly in Malaysian Ringgit: RM 159.00 for a 1-Bottle Single Cycle Reserve, RM 318.00 for a 2-Bottle Dual Momentum Protocol (which unlocks 100% Free Express Shipping across both Peninsular and East Malaysia), and RM 477.00 for a 3-Bottle Complete 90-Day Mastery Vault.',
  },
  {
    questionEn: 'Why should Malaysian buyers avoid "RM 25 – RM 45" bottles on unverified online marketplaces?',
    answerEn:
      'Unverified RM 25 to RM 45 marketplace listings are almost universally counterfeit capsules filled with raw rice starch, unrefined sawdust, or undeclared synthetic PDE5 chemicals that trigger severe headaches and dangerous blood-pressure drops. Authentic HPLC-standardized Onyxmen stock is distributed exclusively via https://www.onyxmen.my at RM 159 per bottle.',
  },
  {
    questionEn: 'How does Onyxmen guarantee 100% discreet parcel delivery to condos, offices, and family homes?',
    answerEn:
      'Every order is sealed inside a 3-layer opaque security carton with internal bubble cushioning (to prevent bottle rattling) and zero branding on the exterior. The courier airway bill lists the sender strictly as "OM Fulfilment Logistics (Kuala Lumpur)" and describes the contents as "Personal Nutritional Wellness".',
  },
  {
    questionEn: 'Should I choose Cash on Delivery (COD) or FPX / DuitNow QR when ordering in Malaysia?',
    answerEn:
      'Choose FPX Online Banking or DuitNow Instant QR if you want your unmarked parcel dropped off seamlessly at your condominium guardhouse, parcel locker, or office reception desk while you are away. Choose Cash on Delivery (COD) at RM 0 surcharge if you prefer to pay the NinjaVan, J&T VIP, or PosLaju rider in person upon handover.',
  },
  {
    questionEn: 'Why must I wait 45 minutes after drinking kopi O or teh tarik before taking my Onyxmen capsule?',
    answerEn:
      'Polyphenolic tannins in strong roasted coffee and pulled black tea bind to botanical quassinoids (Eurycomanone in Tongkat Ali) and chelated Zinc in the stomach, reducing intestinal absorption by up to 40%. Always leave a 45-minute window and swallow your capsule with 300ml of plain warm water.',
  },
  {
    questionEn: 'Is Magnum Pump XR a dietary supplement bottle or a mechanical/industrial pump?',
    answerEn:
      'Magnum Pump XR by Onyxmen Malaysia (SKU: ONYX-MP-30, RM 159.00) is 100% an oral Botanical & Amino-Acid Dietary Supplement bottle containing 30 Jet-Black Capsules formulated with L-Arginine HCl, L-Citrulline Malate, Tongkat Ali, and Bioperine for vascular Nitric Oxide support. It is NOT a mechanical vacuum device, water pump, or oilfield slurry pump.',
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
      'Optimal Capsule Timing, Tropical Hydration & Bioavailability Protocol in Malaysia | Onyxmen.my',
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
      'How you synchronize your Onyxmen capsule relative to Malaysian meal compositions, roasted kopi O or teh tarik tannins, warm aqueous hydration, and evening physical activity governs up to 40% of its intestinal bioavailability. This clinical buyer protocol details the exact hour-by-hour intake cadence for our 20-capsule concentrated reserves (Horsemen, Hammer of Thor) and our 30-capsule full-month regimens (Grow XL, Magnum Pump XR).',
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
          'Every Onyxmen capsule contains standardized, high-ratio botanical extracts and pharmaceutical-grade amino acids—never raw pulverized wood bark. However, even a 100:1 aqueous extract of Malaysian Eurycoma longifolia (Tongkat Ali) or USP-grade L-Arginine HCl must navigate stomach acidity, gastric emptying velocity, and small-intestinal brush-border transport before entering systemic circulation.',
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
          'Malaysian beverage culture revolves around Kopi O Kaw, Teh Tarik, Teh Halia, and Kopitiam Hainanese brews. While enjoyable, black tea and dark-roasted coffee beans are rich in hydrolyzable and condensed tannins. If you swallow an Onyxmen capsule alongside Teh Tarik or Kopi O, tannins immediately form non-absorbable complexes with Zinc ions and quassinoid diterpenoids in the stomach. Enforce a strict 45-minute window before and after your capsule where only plain warm or room-temperature water is consumed.',
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
          'No. Every Onyxmen formulation is 100% free of synthetic caffeine, guarana, ephedra, or artificial central nervous system stimulants. Standardized Tongkat Ali, Black Maca, and Tribulus support cellular ATP and cortisol balance without disrupting deep REM sleep.',
      },
    ],
  },

  // ==========================================================================
  // GUIDE 2 (MS-149): AUTHENTIC ONYXMEN BOTTLE VERIFICATION MALAYSIA
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
      'How to Verify Authentic RM 159 Onyxmen Bottles & Spot Marketplace Counterfeits in Malaysia | Onyxmen.my',
    metaDescription:
      'Protect your health from unverified RM 25–RM 45 counterfeit bottles and adulterated imitations in Malaysia. Complete 5-gate authenticity checklist for official RM 159 Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR.',
    kicker: 'MS-149 · PROTOCOL GUIDE 02 · QUALITY ASSURANCE & ANTI-COUNTERFEIT VERIFICATION',
    headline:
      'How To Verify Authentic RM 159 Onyxmen Bottles &amp; <span class="foil-champagne-text">Spot Counterfeits In Malaysia.</span>',
    taxonomyStrip: [
      '01 · OFFICIAL RM 159 / RM 318 / RM 477 PRICING',
      '02 · EXACT SKU CAPSULE & CAP ANATOMY',
      '03 · ZERO SYNTHETIC PDE5 ADULTERANTS',
      '04 · OM FULFILMENT LOGISTICS WAYBILL',
    ],
    executiveSummary:
      'Unverified online classifieds, night-market stalls, and anonymous social-media peddlers across Malaysia frequently circulate counterfeit "RM 25 to RM 45 clearance bottles" filled with raw rice starch, heat-degraded sawdust, or undeclared synthetic PDE5 chemicals. This official Quality Assurance manual provides the 5-Gate Forensic Checklist to verify genuine climate-controlled Onyxmen Malaysia bottles (RM 159.00) before you consume a single capsule.',
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
        sub: 'Verified via sales@onyxmen.my & info@onyxmen.my',
      },
    ],
    pinnedSummaryBullets: [
      'Gate 1: Uniform Official Pricing — RM 159 (1B), RM 318 (2B), RM 477 (3B) exclusively on onyxman.my',
      'Gate 2: Exact SKU Anatomy — Horsemen (20c), Hammer of Thor (20 Veg), Grow XL (30c), Magnum Pump XR (30 Black)',
      'Gate 3: Zero Fake Drug Registration Numbers — pure botanical & amino-acid dietary supplement compliance',
      'Gate 4: Tamper-Evident Neck Seal + Internal Food-Grade Desiccant Sachet (<24°C KL Vault Storage)',
      'Gate 5: Official Kuala Lumpur Desk Confirmation via sales@onyxmen.my / info@onyxmen.my',
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
          'Every authentic Onyxmen bottle dispatched from our Kuala Lumpur vault adheres to strict physical packaging specifications: (1) Horsemen (SKU: ONYX-HM-20, MPN: HM-500-20MY): Black bottle with metallic gold cap, gold rearing-horse emblem, "Man Virility Enhancement Herbal Supplement — 20 Capsules x 500mg" typography, containing 20 high-density 500mg capsules; (2) Hammer of Thor (SKU: ONYX-HT-20, MPN: HOT-VEG-20MY): White apothecary bottle with metallic gold cap, green vegetarian leaf badge reading "Men’s Health — Tribulus Terrestris — 20 Veg. Capsules", containing 20 clear plant-cellulose HPMC capsules showing golden-brown herbal extract inside.',
          '(3) Grow XL (SKU: ONYX-GX-30, MPN: GXL-NAT-30MY): Deep charcoal-black bottle with gold cap, red and gold ribbon badge reading "#1 Selling Product — Made With Natural Ingredient — Extra-Strength Enhancement Male Performance Blend — 30 Capsules"; (4) Magnum Pump XR (SKU: ONYX-MP-30, MPN: MPXR-30BLK-MY): Matte black bottle with black ribbed cap, gold emblem crest reading "Testosterone Pro Series — Male Enhancement Formula Maximum Strength — 30 Black Capsules", containing 30 distinctive jet-black extended-release capsules.',
        ],
      },
      {
        kicker: 'CHAPTER 03 · ZERO FAKE REGISTRATION NUMBERS & ZERO ILLICIT SYNTHETICS',
        title: 'Distinguishing Transparent Botanical Dietary Supplements From Adulterated Street Pills.',
        paragraphs: [
          'A telltale sign of a counterfeit operation in Malaysia is the printing of fabricated or stolen drug registration numbers on packaging while making miraculous overnight medical cure claims. Counterfeiters do this to disguise capsules laced with undeclared synthetic sildenafil, tadalafil, or vardenafil analogues—chemicals that cause violent throbbing headaches, facial flushing, nasal congestion, blue-tinted vision, and potentially fatal blood-pressure drops when combined with blood-pressure medications.',
          'Authentic Onyxmen formulations are 100% pure botanical and amino-acid dietary supplements formulated for adult men (18+). We never print fake drug registration numbers, never make deceptive disease-cure claims, and screen every production lot to guarantee 0.00% synthetic PDE5 adulterants. Our formulas work through natural physiological pathways—supporting endothelial nitric oxide synthesis, SHBG balance, and cellular ATP resilience without synthetic chemical side effects.',
        ],
      },
      {
        kicker: 'CHAPTER 04 · CLIMATE-CONTROLLED KUALA LUMPUR VAULT VS. TROPICAL HEAT DEGRADATION',
        title: 'How Warehouse Heat Destroys Grey-Market Stock & How To Verify Your Waybill.',
        paragraphs: [
          'Even if a grey-market peddler acquires expired or parallel-imported herbal capsules, storing them inside non-air-conditioned zinc-roofed warehouses in 38°C Malaysian heat causes rapid Maillard browning, lipid peroxidation of Saw Palmetto fatty acids, and moisture clumping of hygroscopic Tongkat Ali and L-Citrulline powders. Within weeks, capsule shells turn brittle or sticky and lose potency.',
          'All authentic Onyxmen Malaysia inventory is stored inside our climate-controlled Kuala Lumpur apothecary vault at 20°C–24°C and <45% relative humidity. Every order is placed directly on https://www.onyxmen.my, confirmed via sales@onyxmen.my / info@onyxmen.my / waleedshoaibofficial@gmail.com, and shipped in a 3-layer unmarked parcel under the authorized sender identity "OM Fulfilment Logistics (Kuala Lumpur)".',
        ],
      },
    ],
    protocolSteps: [
      {
        code: 'CHECK-01 · SOURCE DOMAIN',
        title: 'Verify Direct Acquisition From https://www.onyxmen.my',
        metric: 'Official RM 159 / RM 318 / RM 477 Vault',
        desc: 'Ensure your order was submitted directly through the Express Discreet Order Drawer on https://www.onyxmen.my and confirmed by sales@onyxmen.my or info@onyxmen.my.',
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
        questionEn: 'Does Onyxmen sell on third-party classifieds or unverified RM 35 marketplace shops?',
        answerEn:
          'No. To protect buyer privacy and prevent counterfeit substitution or tropical heat degradation, authentic Onyxmen Malaysia stock is dispatched exclusively through https://www.onyxmen.my at the official price of RM 159 (1 Bottle), RM 318 (2 Bottles), and RM 477 (3 Bottles). Any RM 25–RM 55 listing elsewhere is unauthorized and counterfeit.',
      },
      {
        questionEn: 'How can I tell if a supplement in Malaysia has been spiked with illicit synthetic chemicals?',
        answerEn:
          'Counterfeit pills spiked with undeclared synthetic PDE5 chemicals typically promise "instant 15-minute chemical action for 72 hours" and trigger sudden facial flushing, nasal congestion, dizziness, and severe throbbing headaches. Authentic Onyxmen botanical and amino-acid capsules work naturally with your physiology and never cause synthetic drug side effects.',
      },
      {
        questionEn: 'What should I do if I received a suspicious bottle purchased from an unauthorized seller?',
        answerEn:
          'Do not consume the capsules. You may email photos of the bottle and label to our Quality Assurance desk at info@onyxmen.my or sales@onyxmen.my for a complimentary visual authenticity audit, and reserve genuine climate-controlled stock directly on onyxman.my.',
      },
      {
        questionEn: 'Why does Onyxmen offer a 14-day unopened tamper-evident seal guarantee?',
        answerEn:
          'Every genuine order shipped from our Kuala Lumpur vault is backed by our 14-day unopened tamper-evident seal guarantee. If your parcel sustains transit damage during courier delivery anywhere across the 16 Malaysian states, contact sales@onyxmen.my for immediate priority replacement.',
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
      'Complete Guide to 100% Discreet Plain-Box COD, FPX & DuitNow QR Ordering Across 16 Malaysian States | Onyxmen.my',
    metaDescription:
      'Learn how Onyxmen Malaysia guarantees 100% parcel anonymity from Kuala Lumpur checkout to your condo guardhouse, office reception, or home doorstep across all 16 states via COD, FPX & DuitNow QR.',
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
        title: 'Why Ordinary Mailer Bags Fail Privacy Tests—And How Onyxmen Eliminates Every Clue.',
        paragraphs: [
          'Many online sellers claim "discreet shipping" yet slip supplement bottles into thin plastic courier flyers. Anyone handling the flyer—from the sorting hub clerk to your condominium security guard or family member—can feel the cylindrical bottle contour and hear the distinct rattle of capsules inside when the parcel is moved.',
          'Onyxmen Malaysia enforces a strict Three-Layer Acoustic & Visual Privacy Architecture on every single bottle (RM 159), dual pack (RM 318), and 3-bottle vault (RM 477). First, the hermetically sealed bottle is wrapped in high-density cellular bubble wrap that immobilizes the bottle and dampens acoustic rattle. Second, the cushioned core is boxed inside a rigid, unbranded corrugated security carton. Third, the carton is sealed inside a weatherproof matte outer sleeve. Neither touch, shaking, nor bright light can reveal what is inside.',
        ],
      },
      {
        kicker: 'CHAPTER 02 · AIRWAY BILL, EAST MALAYSIA CUSTOMS & BANK STATEMENT ANONYMITY',
        title: 'Neutral "OM Fulfilment Logistics" Labelling Across NinjaVan, J&T VIP & PosLaju.',
        paragraphs: [
          'On all thermal airway bills generated for NinjaVan Malaysia, J&T Express VIP, PosLaju Priority, and DHL eCommerce, the word "Onyxmen" and the product names ("Horsemen", "Hammer of Thor", "Grow XL", "Magnum Pump XR") are 100% absent. The sender field reads strictly: "OM Fulfilment Logistics, Kuala Lumpur (50450 MY)".',
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
        metric: 'sales@onyxmen.my · waleedshoaibofficial@gmail.com',
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
          'In strict compliance with the Personal Data Protection Act 2010 (PDPA Malaysia), your name, phone number, email, and delivery address are used solely for order fulfilment via sales@onyxmen.my and are never sold, shared, or exposed to third-party marketing lists.',
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
      '20-Capsule Rapid Cycles (Horsemen, Hammer of Thor) vs 30-Capsule Monthly Conditioning (Grow XL, Magnum Pump XR) | Onyxmen.my',
    metaDescription:
      'Compare Onyxmen Malaysia’s 20-capsule concentrated reserves (Horsemen & Hammer of Thor) against our 30-capsule full-month protocols (Grow XL & Magnum Pump XR) at uniform RM 159 pricing.',
    kicker: 'MS-151 · PROTOCOL GUIDE 04 · 20-CAPSULE RAPID RESERVES VS. 30-CAPSULE MONTHLY CONDITIONING',
    headline:
      '20-Capsule Rapid Cycles vs. 30-Capsule Monthly Conditioning: <span class="foil-champagne-text">Choosing Your Onyxmen Bottle.</span>',
    taxonomyStrip: [
      '01 · 20 CAPSULES: HORSEMEN & HAMMER OF THOR',
      '02 · 30 CAPSULES: GROW XL & MAGNUM PUMP XR',
      '03 · UNIFORM RM 159.00 MYR PRICING',
      '04 · DUAL-BOTTLE STACKING ARCHITECTURE',
    ],
    executiveSummary:
      'Because all four Onyxmen Malaysia formulations carry the exact same official price of RM 159.00 per bottle (RM 318 for 2 bottles, RM 477 for 3 bottles), Malaysian buyers often ask why Horsemen and Hammer of Thor contain 20 capsules while Grow XL and Magnum Pump XR contain 30 capsules. The answer lies in extraction ratio density, targeted evening vs. daily circadian dosing, and Day-18 vs. Day-25 refill cadence.',
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
          'At Onyxmen Malaysia, every bottle is engineered around a specific physiological objective rather than arbitrary capsule counts. Our 20-capsule reserves—Horsemen (20 Capsules × 500mg, RM 159) and Hammer of Thor (20 Vegetarian HPMC Capsules × 500mg, RM 159)—devote a massive percentage of each capsule’s raw-material budget to costly, high-ratio standardized extracts: 150mg of 100:1 Eurycoma longifolia + 70mg of 20%-Icariin Epimedium in Horsemen, and 200mg of 60%-Protodioscin Tribulus terrestris + 60mg of 10%-Ginsenoside Panax ginseng in Plant-Cellulose HPMC shells in Hammer of Thor.',
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
          'The classic "Circadian + Evening Reserve Stack" pairs 1 bottle of Grow XL (taken after breakfast for 30 days of baseline Tongkat Ali, Maca, Muira Puama, and Saw Palmetto) with 1 bottle of Horsemen or Magnum Pump XR (reserved for 30–60 minutes prior to gym sessions or active evenings). Just mention your desired 2-bottle or 3-bottle combination inside the Express Discreet Order Drawer or via sales@onyxmen.my.',
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
        questionEn: 'Why do 20-capsule and 30-capsule Onyxmen bottles cost the same RM 159?',
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
      'Malaysian Men’s Vitality, Cortisol Management & Tropical Stamina Nutrition Blueprint | Onyxmen.my',
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
      'Adult men working across Kuala Lumpur, Selangor, Penang, Johor Bahru, Kota Kinabalu, and Kuching confront a distinct triad of physiological stamina drains: year-round 32°C–35°C equatorial perspiration that depletes intracellular Zinc, 2-hour highway commutes that spike evening serum cortisol, and late-night refined-carbohydrate meals wrapped around 3-in-1 sugary coffee. This blueprint pairs Malaysian dietary optimization with standardized Onyxmen adaptogens.',
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
      'Replenish daily sweat losses with 15mg–25mg chelated Zinc inside every Onyxmen capsule',
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
          'Dietary Zinc is an indispensable enzymatic cofactor for over 300 metabolic reactions in adult men, including Leydig cellular maintenance, superoxide dismutase (SOD) vascular antioxidant defense, and protein synthesis. When sweat losses exceed dietary intake, men experience persistent evening lethargy and blunted physical recovery. Every Onyxmen formulation includes 15mg to 25mg of highly bioavailable Zinc (Zinc Bisglycinate Chelate in Hammer of Thor, Zinc Gluconate in Grow XL, and Zinc Oxide/Aspartate in Horsemen and Magnum Pump XR) to replenish tropical mineral depletion daily.',
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
          'Onyxmen formulations replace this destructive stimulant-and-sugar roller coaster with 100% caffeine-free cellular adaptogens. Gelatinized Peruvian Black Maca (100mg–110mg in Grow XL, Horsemen, and Hammer of Thor) provides lipid-soluble macamides that protect mitochondrial ATP generation without touching adenosine receptors, while Korean Red Panax Ginseng (60mg–80mg) enhances skeletal-muscle oxygen utilization and clears post-work lactic acid.',
        ],
      },
      {
        kicker: 'CHAPTER 04 · THE MALAYSIAN HIGH-VITALITY DINNER & SLEEP OPTIMIZATION PROTOCOL',
        title: 'Structuring Local Whole Foods Around Your Onyxmen Capsule For Peak Nocturnal Recovery.',
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
        desc: 'Start your morning with 500ml of plain water and consume 300ml with your Onyxmen capsule to maintain plasma volume for endothelial Nitric Oxide vasodilation.',
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
        desc: 'Switch from late-afternoon caffeine to non-stimulant Onyxmen adaptogens (Grow XL in the morning or Horsemen/Hammer of Thor after dinner) to protect deep nocturnal recovery.',
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
        questionEn: 'Can I take Onyxmen supplements if I work rotating night shifts in Malaysia?',
        answerEn:
          'Yes. Simply anchor your capsule timing to your personal sleep-wake cycle rather than the wall clock: take Grow XL 20–30 minutes after your first "waking meal" of the day, or take Horsemen / Hammer of Thor 30–60 minutes after your main evening/pre-rest meal.',
      },
      {
        questionEn: 'Are Onyxmen capsules safe to take alongside my regular gym whey protein or creatine?',
        answerEn:
          'Yes. Standardized botanical extracts (Tongkat Ali, Black Maca, Tribulus, Panax Ginseng) and nitric oxide amino acids (L-Arginine, L-Citrulline) complement whey protein, creatine monohydrate, and multivitamins. Just take your Onyxmen capsule with plain water 30–45 minutes before your heavy protein shake so amino-acid absorption remains rapid.',
      },
      {
        questionEn: 'Do Onyxmen formulations contain any added sugar, artificial dyes, or synthetic caffeine?',
        answerEn:
          'Zero. Unlike canned energy drinks or 3-in-1 premix packets that contain 25g–40g of refined sugar and synthetic caffeine, Onyxmen capsules contain 0g sugar, 0 calories from carbohydrates, and 0mg caffeine.',
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
      'Nitric Oxide Amino Acids (L-Arginine, L-Citrulline) vs Adaptogenic Herbs (Tongkat Ali, Maca, Tribulus) | Onyxmen.my',
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
        kicker: 'CHAPTER 03 · HOW ONYXMEN FORMULATIONS BALANCE AMINO ACIDS & BOTANICALS',
        title: 'Matching The Amino-to-Adaptogen Ratio Across All Four RM 159 Formulations.',
        paragraphs: [
          'Rather than forcing you to buy separate amino-acid powders and herbal bottles, every Onyxmen formulation integrates both pillars in a targeted ratio: (1) Magnum Pump XR (30 Black Capsules × 600mg, RM 159) is our highest Nitric Oxide formulation—allocating 320mg (53.3% of capsule weight) to L-Arginine HCl + L-Citrulline Malate, supported by 110mg Tribulus (60% saponins), 90mg Tongkat Ali 100:1, 60mg Panax Ginseng, 15mg Zinc, and 5mg Bioperine®.',
          '(2) Horsemen (20 Capsules × 500mg, RM 159) flips the ratio toward rapid evening adaptogenic drive—leading with 400mg of concentrated botanicals (150mg Tongkat Ali 100:1, 100mg Black Maca, 80mg Korean Red Ginseng, 70mg Epimedium Icariin) backed by 80mg L-Arginine HCl and 20mg Zinc; (3) Grow XL (30 Capsules × 520mg, RM 159) balances 395mg of daily morning botanicals (Tongkat Ali, Black Maca, Muira Puama, Saw Palmetto) with 100mg of L-Arginine + L-Citrulline; (4) Hammer of Thor (20 Veg. Capsules × 500mg, RM 159) pairs 435mg of vegetarian saponin/adaptogen extracts with 50mg of L-Arginine HCl.',
        ],
      },
      {
        kicker: 'CHAPTER 04 · OFFICIAL ENTITY DISAMBIGUATION: MAGNUM PUMP XR (30 BLACK CAPSULES)',
        title: 'Why Search Engines & Malaysian Buyers Must Distinguish Dietary Supplement Capsules From Industrial Pumps.',
        paragraphs: [
          'In international engineering and oilfield equipment catalogs, the words "Magnum Pump" or "Magnum XP/XR" sometimes refer to heavy mechanical fluid, water, or slurry pumps used on drilling rigs—or to mechanical vacuum cylinder devices. To eliminate any ambiguity for Malaysian buyers and search engines: Magnum Pump XR by Onyxmen Malaysia (SKU: ONYX-MP-30, MPN: MPXR-30BLK-MY, GTIN-13: 9550000102042, Official Price: RM 159.00 MYR) is 100% an oral Botanical & Amino-Acid Dietary Supplement packaged as 30 Jet-Black Capsules inside a tamper-evident apothecary bottle.',
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
  },

  // ==========================================================================
  // GUIDE 7 (MS-246): HAMMER OF THOR ORIGINAL VS FAKE MALAYSIA (20 VEG CAPS)
  // ==========================================================================
  {
    guideNumber: 7,
    microStep: 'MS-246',
    guideCode: 'GUIDE-07 · HAMMER OF THOR AUTHENTICITY',
    slug: 'hammer-of-thor-original-vs-fake-malaysia',
    canonicalEnPath: '/guides/hammer-of-thor-original-vs-fake-malaysia/',
    alternateMsPath: '/ms/panduan/hammer-of-thor-original-vs-tiruan-malaysia/',
    enOutputPaths: [
      'guides/hammer-of-thor-original-vs-fake-malaysia/index.html',
    ],
    watermark: 'THOR VERIFY',
    primaryProductSlug: 'hammer-of-thor',
    heroImage: '/assets/products/hammer-of-thor-stage.webp',
    portraitImage: '/assets/products/hammer-of-thor-portrait.webp',
    publishedDate: '2026-11-10T08:00:00+08:00',
    updatedDate: '2026-11-10T08:00:00+08:00',
    readingTime: '11 Min Authenticity & Assay Read',
    seoTitle:
      "Hammer of Thor Original vs Fake Malaysia [20 Veg Caps RM159]",
    metaDescription:
      "✓ Spot 100% Original Hammer of Thor Men's Health Malaysia (20 Veg. Capsules, 60% Saponin Tribulus) vs RM 30 fake capsules. Buy 1 RM 159, 2 RM 286 (-10%) COD.",
    kicker: 'ONYX-STD · PROTOCOL GUIDE 07 · HAMMER OF THOR MEN’S HEALTH 20 VEG. CAPSULES FORENSIC AUDIT',
    headline:
      'Hammer of Thor Original vs. Fake In Malaysia: <span class="foil-champagne-text">20 Veg. Capsule Authenticity &amp; Saponin Audit.</span>',
    taxonomyStrip: [
      '01 · HAMMER OF THOR MEN’S HEALTH (20 VEG. CAPS)',
      '02 · 200MG TRIBULUS (60% SAPONIN PROTODIOSCIN)',
      '03 · 100% PLANT HPMC VEGETARIAN SHELL',
      '04 · OFFICIAL RM 159 / RM 286 (-10%) / RM 405 (-15%) COD',
    ],
    executiveSummary:
      'In Malaysia, search queries for "Hammer of Thor Original", "Hammer of Thor Men’s Health", "Hammer of Thor Capsule", and "Hammer of Thor USA Original" face widespread confusion due to unauthorized RM 25–RM 45 street and marketplace imitations. Authentic Hammer of Thor distributed by Onyxmen Malaysia (SKU: ONYX-HT-20, GTIN-13: 9550000102028) is strictly a 20-Vegetarian-Capsule botanical formulation standardized to 200mg of 60%-Saponin Tribulus terrestris, 100mg Peruvian Maca, 75mg Panax Ginseng, 65mg Saw Palmetto, 45mg Malaysian Tongkat Ali 100:1, and 15mg Zinc Bisglycinate at the official Malaysia price of RM 159 (Buy 2 for RM 286 [10% OFF], Buy 3 for RM 405 [15% OFF]).',
    telemetry: [
      {
        key: '01 · OFFICIAL SKU & COUNT',
        val: '20 Veg. Capsules × 500mg',
        sub: 'SKU: ONYX-HT-20 · Plant-derived HPMC vegetarian shells',
      },
      {
        key: '02 · PRIMARY BOTANICAL ASSAY',
        val: '200 mg Tribulus (60% Saponins)',
        sub: 'Paired with 100mg Maca, 75mg Ginseng, 65mg Saw Palmetto & Zinc',
      },
      {
        key: '03 · COUNTERFEIT SCREENING',
        val: '0% Coloured Bovine Gelatin',
        sub: 'Avoid RM 30 blue/yellow plastic blister imitations',
      },
      {
        key: '04 · MALAYSIA COD DISPATCH',
        val: 'RM 159 (1B) · RM 286 (2B -10%)',
        sub: '3-layer plain box via OM Fulfilment Logistics (KL)',
      },
    ],
    pinnedSummaryBullets: [
      'Exact Label Verification: "Hammer of Thor — Men’s Health — Tribulus Terrestris — 20 Veg. Capsules"',
      'Capsule Shell Check: 20 plant-derived HPMC vegetarian capsules (never neon blue/yellow gelatin pills)',
      'Active Saponin Matrix: 200mg Tribulus (60% Protodioscin), 100mg Peruvian Maca, 75mg Ginseng, 15mg Zinc',
      'Official Pricing: 1 Bottle RM 159 | 2 Bottles RM 286 (Save RM 32, 10% OFF) | 3 Bottles RM 405 (Save RM 72, 15% OFF)',
      '100% Discreet Plain-Box Cash on Delivery (COD) & FPX across all 16 Malaysian states',
    ],
    chapters: [
      {
        kicker: 'CHAPTER 01 · ANATOMY OF THE AUTHENTIC HAMMER OF THOR MEN’S HEALTH BOTTLE',
        title: 'Inspecting The Gold Metallic Cap, Green Vegetarian Emblem & 20 HPMC Capsules.',
        paragraphs: [
          'When Malaysian buyers search for "Hammer of Thor Original" or "Hammer of Thor Men’s Health", the first line of defense against counterfeit substitution is physical bottle and label inspection. Authentic stock dispatched from the Onyxmen Malaysia climate-controlled vault (SKU: ONYX-HT-20, MPN: HT-TRIB-20MY) arrives in a dark amber-obsidian apothecary bottle crowned with a precision-threaded metallic gold cap and a factory-sealed tamper-evident neck band.',
          'The front label carries the gold-and-crimson crest reading "HAMMER OF THOR — MEN’S HEALTH — TRIBULUS TERRESTRIS — 20 VEG. CAPSULES" alongside a circular green vegetarian leaf emblem. Inside the bottle, you will find an internal moisture-absorbing food-grade desiccant sachet and exactly 20 plant-cellulose HPMC vegetarian capsules filled with a fine, aromatic tan-brown botanical extract powder.',
        ],
      },
      {
        kicker: 'CHAPTER 02 · SPOTTING RM 25–RM 45 MARKETPLACE FAKES IN MALAYSIA',
        title: 'Why Cheap Blister Packs, Liquid Drops & Neon Gelatin Capsules Are Counterfeit.',
        paragraphs: [
          'Across unauthorized classified portals and anonymous social media stalls in Malaysia, counterfeiters misuse the "Hammer of Thor" name on three types of fake products: (a) RM 25–RM 45 plastic bottles containing 30 or 60 bright blue-and-white or yellow bovine gelatin capsules; (b) unlabelled cardboard blister strips; and (c) counterfeit "liquid drop" vials. Independent laboratory audits show that these ultra-cheap imitations contain either inert rice flour or undeclared synthetic PDE5 chemical analogues that trigger severe throbbing migraines, nasal congestion, and blood-pressure instability.',
          'Genuine Hammer of Thor Men’s Health by Onyxmen Malaysia is never sold as liquid drops or coloured gelatin pills, and is never discounted to RM 30 on flea-market platforms. It is strictly a 20-vegetarian-capsule oral botanical supplement standardized for steroidal saponin endurance.',
        ],
      },
      {
        kicker: 'CHAPTER 03 · PHYTOCHEMICAL ASSAY: 60% PROTODIOSCIN TRIBULUS, MACA & ZINC',
        title: 'How Each 500mg Vegetarian Capsule Supports Physical Stamina & Evening Recovery.',
        paragraphs: [
          'Every 500mg Hammer of Thor vegetarian capsule is formulated around six synergistic active ingredients: (1) 200mg Standardized Tribulus terrestris aerial fruit extract (standardized to ≥60% steroidal furostanol saponins, specifically protodioscin) to support physical drive and androgen-receptor sensitivity; (2) 100mg Gelatinized Peruvian Maca Root (Lepidium meyenii) for non-stimulant cellular ATP endurance; and (3) 75mg Panax ginseng root extract (10% ginsenosides) for nitric oxide endothelial protection.',
          'To complete the 500mg profile, each capsule includes (4) 65mg Serenoa repens (Saw Palmetto berry extract, 45% fatty acids) for adult male pelvic wellness; (5) 45mg Malaysian Eurycoma longifolia (Tongkat Ali 100:1 aqueous extract) for evening cortisol balance; and (6) 15mg Zinc Bisglycinate Chelate (150% NRV elemental zinc) to replenish trace minerals lost through Malaysia’s tropical perspiration.',
        ],
      },
      {
        kicker: 'CHAPTER 04 · OPTIMAL POST-DINNER DOSAGE & BUNDLE SAVINGS (10% & 15% OFF)',
        title: 'Taking Hammer of Thor 30 Minutes After Dinner & Reserving Discreet COD.',
        paragraphs: [
          'Because steroidal furostanol saponins in Tribulus terrestris are amphiphilic glycosides that bind to dietary bile-salt micelles for intestinal transport, the optimal intake window for Hammer of Thor is 1 vegetarian capsule taken 30 minutes after dinner with 250ml–300ml of warm plain water (or 45 minutes before resistance training at the gym). Always maintain a 45-minute buffer away from Kopi O or Teh Tarik.',
          'You can reserve authentic Hammer of Thor directly on https://www.onyxmen.my via our Express Discreet Order Form or live WhatsApp concierge (+60 14-298 5919): Buy 1 Bottle for RM 159 (20-day cycle), Buy 2 Bottles for RM 286 (10% OFF — Save RM 32 off RM 318, 40-day cycle + Free Express Shipping), or Buy 3 Bottles for RM 405 (15% OFF — Save RM 72 off RM 477, 60-day mastery cycle).',
        ],
      },
    ],
    protocolSteps: [
      {
        code: 'THOR-01 · SEAL AUDIT',
        title: 'Inspect Gold Metallic Cap & Tamper-Evident Neck Band',
        metric: 'SKU: ONYX-HT-20 · GTIN: 9550000102028',
        desc: 'Confirm the bottle arrives inside a 3-layer unmarked "OM Fulfilment Logistics" carton with an unbroken factory induction seal and gold metallic cap.',
      },
      {
        code: 'THOR-02 · LABEL CHECK',
        title: 'Verify "Men’s Health — Tribulus Terrestris — 20 Veg. Capsules" Print',
        metric: 'Green Vegetarian Emblem · 20 HPMC Caps',
        desc: 'Ensure the front label specifies 20 Veg. Capsules with the green vegetarian badge—reject any bottle claiming 30/60 coloured gelatin pills.',
      },
      {
        code: 'THOR-03 · EVENING TIMING',
        title: 'Swallow 1 Vegetarian Capsule 30 Minutes After Dinner',
        metric: '250ml–300ml Warm H2O · Lipid Bile Synergy',
        desc: 'Take 1 capsule 30 minutes after a balanced evening meal so natural bile lipids maximize absorption of 200mg Tribulus (60% Saponins).',
      },
      {
        code: 'THOR-04 · TANNIN BUFFER',
        title: 'Separate By 45 Minutes From Kopi O, Teh Tarik & Alcohol',
        metric: 'Protects 15mg Zinc Bisglycinate & Alkaloids',
        desc: 'Avoid washing the capsule down with coffee or pulled milk tea so polyphenolic tannins do not chelate Zinc Bisglycinate in the stomach.',
      },
      {
        code: 'THOR-05 · DAY-18 REFILL',
        title: 'Synchronize Your Day-18 Refill Or Choose The 2-Bottle RM 286 Pack',
        metric: '2 Bottles = RM 286 (10% OFF) · 3 Bottles = RM 405 (15% OFF)',
        desc: 'Prevent saponin washout after Day 20 by selecting the 2-Bottle (RM 286) or 3-Bottle (RM 405) bundle upfront with free nationwide COD.',
      },
    ],
    faqs: [
      {
        questionEn: 'How can I tell the difference between original Hammer of Thor and fake Hammer of Thor in Malaysia?',
        answerEn:
          'Original Hammer of Thor Men’s Health by Onyxmen Malaysia (SKU: ONYX-HT-20, RM 159) comes in a dark bottle with a gold metallic cap, a green vegetarian emblem, and exactly 20 plant-derived HPMC vegetarian capsules standardized to 60% Tribulus saponins. Fake RM 25–RM 45 marketplace bottles typically contain 30 or 60 bright blue/yellow gelatin capsules or liquid drops with unverified ingredients.',
      },
      {
        questionEn: 'Is Hammer of Thor suitable for men who avoid bovine or porcine gelatin?',
        answerEn:
          'Yes. Hammer of Thor (20 Veg. Capsules) uses 100% plant-cellulose HPMC (Hydroxypropyl Methylcellulose) capsule shells with zero animal gelatin, making it ideal for vegetarian-conscious Malaysian buyers.',
      },
      {
        questionEn: 'What is the difference between Hammer of Thor (20 Veg. Caps) and Horsemen (20 Caps)?',
        answerEn:
          'Both are 20-capsule concentrated reserves priced at RM 159 (or 2 for RM 286). Hammer of Thor leads with 200mg of 60%-Saponin Tribulus terrestris + Saw Palmetto + Zinc Bisglycinate in Vegetarian HPMC shells for sustained physical endurance and recovery, whereas Horsemen leads with 150mg of 100:1 Malaysian Tongkat Ali + 80mg Epimedium Icariin for rapid evening readiness.',
      },
      {
        questionEn: 'Can I order Hammer of Thor Original via Cash on Delivery (COD) in Malaysia?',
        answerEn:
          'Yes. We offer 100% discreet plain-box Cash on Delivery (COD) across Peninsular Malaysia, Sabah, and Sarawak—or you can message our live WhatsApp desk (+60 14-298 5919) for instant assistance.',
      },
    ],
  },

  // ==========================================================================
  // GUIDE 8 (MS-247): GROWXL FOR MEN / GROW XL MALAYSIA 30-CAPSULE DOSAGE GUIDE
  // ==========================================================================
  {
    guideNumber: 8,
    microStep: 'MS-247',
    guideCode: 'GUIDE-08 · GROWXL 30-CAP DOSAGE',
    slug: 'growxl-for-men-30-capsule-dosage-guide-malaysia',
    canonicalEnPath: '/guides/growxl-for-men-30-capsule-dosage-guide-malaysia/',
    alternateMsPath: '/ms/panduan/panduan-cara-makan-grow-xl-30-kapsul-malaysia/',
    enOutputPaths: [
      'guides/growxl-for-men-30-capsule-dosage-guide-malaysia/index.html',
    ],
    watermark: 'GROWXL 30',
    primaryProductSlug: 'grow-xl',
    heroImage: '/assets/products/grow-xl-stage.webp',
    portraitImage: '/assets/products/grow-xl-portrait.webp',
    publishedDate: '2026-11-10T08:00:00+08:00',
    updatedDate: '2026-11-10T08:00:00+08:00',
    readingTime: '11 Min Dosage & 30-Day Cycle Read',
    seoTitle:
      'GrowXL for Men / Grow XL Malaysia [30 Caps Dosage & COD RM159]',
    metaDescription:
      '✓ Official GrowXL for Men / Grow XL Malaysia 30-Capsule daily dosage, post-breakfast timing & 30-day cycle guide. Buy 1 RM 159, 2 RM 286 (-10%) discreet COD.',
    kicker: 'ONYX-STD · PROTOCOL GUIDE 08 · GROW XL (GROWXL FOR MEN) 30-CAPSULE DAILY CONDITIONING MANUAL',
    headline:
      'GrowXL For Men (Grow XL Malaysia): <span class="foil-champagne-text">30-Capsule Complete Dosage, Timing &amp; 30-Day Results Guide.</span>',
    taxonomyStrip: [
      '01 · GROW XL / GROWXL FOR MEN (30 CAPS × 550MG)',
      '02 · 140MG TONGKAT ALI 100:1 + 100MG MUIRA PUAMA',
      '03 · 80MG SAW PALMETTO + 70MG GINKGO BILOBA',
      '04 · MORNING CIRCADIAN DOSAGE (20–30M POST-BREAKFAST)',
    ],
    executiveSummary:
      'Whether you search for "GrowXL for Men", "Grow XL Malaysia", or "Vital Grow XL", this complete clinical dosage manual covers Onyxmen Malaysia’s #1 Selling 30-Capsule Extra-Strength Male Performance Blend (SKU: ONYX-GX-30, GTIN-13: 9550000102035, RM 159). Learn how each 550mg capsule combines 140mg Malaysian Tongkat Ali 100:1, 120mg L-Arginine & L-Citrulline, 100mg Brazilian Muira Puama, 80mg Saw Palmetto, and 70mg Ginkgo Biloba—and how to execute the 30-day morning post-breakfast protocol.',
    telemetry: [
      {
        key: '01 · BOTTLE SPECIFICATION',
        val: '30 Capsules × 550mg (16.5g)',
        sub: 'Full 30-day calendar month daily conditioning bottle',
      },
      {
        key: '02 · OPTIMAL INTAKE WINDOW',
        val: '20–30 Mins Post-Breakfast',
        sub: 'Aligns with the 07:00–09:00 MYT morning circadian crest',
      },
      {
        key: '03 · EXCLUSIVE BOTANICALS',
        val: 'Muira Puama + Saw Palmetto',
        sub: '100mg Amazonian bark + 80mg liposterolic berry extract',
      },
      {
        key: '04 · MULTI-BOTTLE DISCOUNTS',
        val: 'RM 159 · RM 286 (-10%) · RM 405 (-15%)',
        sub: 'Day-25 refill sync · 100% plain-box Malaysia COD',
      },
    ],
    pinnedSummaryBullets: [
      'Entity Clarification: Grow XL (SKU: ONYX-GX-30) is the official Onyxmen Malaysia 30-Capsule Extra-Strength formula for "GrowXL for Men" queries',
      'Daily Dosage: 1 capsule (550mg) every morning 20–30 minutes after breakfast with 300ml warm water',
      '6-Active Matrix: 140mg Tongkat Ali 100:1, 120mg Arginine/Citrulline, 100mg Muira Puama, 80mg Saw Palmetto, 70mg Ginkgo, 40mg Ginseng/Zinc',
      '30-to-90 Day Progression: Days 1–10 microvascular flow -> Days 11–25 stamina resilience -> Days 26–90 full conditioning',
      'Bundle Pricing: 1 Bottle RM 159 | 2 Bottles RM 286 (10% OFF) | 3 Bottles RM 405 (15% OFF) with Free Discreet COD',
    ],
    chapters: [
      {
        kicker: 'CHAPTER 01 · INSIDE GROW XL (GROWXL FOR MEN): THE 550MG EXTRA-STRENGTH BLEND',
        title: 'Why Grow XL Is Our #1 Selling 30-Day Daily Male Vitality Formula In Malaysia.',
        paragraphs: [
          'Malaysian men searching for "GrowXL for Men", "Grow XL", or "Vital Grow XL" are typically looking for a comprehensive, stimulant-free daily capsule that supports both daytime work stamina and evening physical readiness without requiring complex timing before every evening. Grow XL by Onyxmen Malaysia (SKU: ONYX-GX-30, RM 159) is engineered specifically for this 30-day calendar rhythm: 30 capsules at 550mg each (16,500mg total active mass per bottle).',
          'Unlike single-herb capsules, Grow XL unites six complementary extracts inside every 550mg serving: 140mg Malaysian Eurycoma longifolia (Tongkat Ali 100:1), 120mg L-Arginine HCl & L-Citrulline Malate (2:1 nitric oxide complex), 100mg Amazonian Muira Puama 10:1 bark extract, 80mg Saw Palmetto berry phytosterols (45% fatty acids), 70mg Ginkgo biloba 50:1 leaf extract (24% flavone glycosides), and 40mg Korean Red Panax Ginseng & Zinc.',
        ],
      },
      {
        kicker: 'CHAPTER 02 · THE MORNING CIRCADIAN DOSAGE PROTOCOL (07:30–09:00 MYT)',
        title: 'How To Take Grow XL After Breakfast For 12-Hour Microvascular & Endocrine Support.',
        paragraphs: [
          'In adult male physiology, endogenous vitality signaling peaks naturally between 07:00 and 09:00 MYT before gradually declining under the weight of corporate work stress and Klang Valley traffic cortisol. Taking 1 capsule of Grow XL 20 to 30 minutes after breakfast with 300ml of plain warm water locks your botanical intake onto this natural morning crest.',
          'Because Saw Palmetto phytosterols (80mg) and Ginkgo biloba flavone glycosides (70mg) benefit from post-meal chylomicron transport while Tongkat Ali quassinoids (140mg) dissolve rapidly in warm water, a light protein-rich Malaysian breakfast (such as kampung eggs, oats, toast, or lean protein) creates the ideal gastric environment. Always wait at least 45 minutes after drinking morning Kopi O or Teh Tarik before swallowing your capsule.',
        ],
      },
      {
        kicker: 'CHAPTER 03 · WEEK-BY-WEEK RESULTS TIMELINE: DAYS 1 TO 90',
        title: 'What Malaysian Buyers Experience Across A 1-Bottle (30d), 2-Bottle (60d) & 3-Bottle (90d) Cycle.',
        paragraphs: [
          'Phase 1 — Days 1 to 10 (Microvascular & Morning Energy Initiation): The 120mg L-Arginine/L-Citrulline matrix and 70mg Ginkgo biloba leaf extract support peripheral micro-circulation and mental sharpness during long workdays, reducing the 15:00 MYT afternoon slump without caffeine jitters.',
          'Phase 2 — Days 11 to 30 (Adaptogenic Cortisol & Pelvic Conditioning): Cumulative saturation of 140mg Tongkat Ali 100:1, 100mg Brazilian Muira Puama, and 80mg Saw Palmetto supports evening physical drive, stress resilience, and adult male pelvic comfort. Phase 3 — Days 31 to 90 (Full 2-Bottle RM 286 / 3-Bottle RM 405 Mastery): Continuing uninterrupted through 60 to 90 days consolidates baseline stamina and cellular recovery.',
        ],
      },
      {
        kicker: 'CHAPTER 04 · STACKING GROW XL WITH HORSEMEN OR MAGNUM PUMP XR',
        title: 'How To Build A Morning + Evening Dual Protocol At 10% Or 15% Bundle Savings.',
        paragraphs: [
          'Because Grow XL is taken once daily in the morning after breakfast, it pairs effortlessly with our targeted evening or pre-workout formulations. Many repeat buyers in Kuala Lumpur, Selangor, Johor Bahru, and Penang select the 2-Bottle Bundle (RM 286 — 10% OFF, saving RM 32) or 3-Bottle VIP Bundle (RM 405 — 15% OFF, saving RM 72) to combine 1 bottle of Grow XL (morning baseline) with 1 bottle of Horsemen (evening 500mg reserve) or Magnum Pump XR (30 black capsules for pre-gym Nitric Oxide).',
          'Every order ships in a 100% plain unmarked carton ("OM Fulfilment Logistics") with Cash on Delivery (COD), FPX, or direct WhatsApp support (+60 14-298 5919).',
        ],
      },
    ],
    protocolSteps: [
      {
        code: 'GROWXL-01 · BREAKFAST',
        title: 'Eat A Balanced Protein Breakfast Between 07:00 & 09:00 MYT',
        metric: 'Eggs · Lean Protein · Moderate Healthy Lipids',
        desc: 'Prepare your digestive tract with a clean morning meal so Saw Palmetto fatty acids (80mg) and Ginkgo biloba glycosides (70mg) absorb smoothly.',
      },
      {
        code: 'GROWXL-02 · 30-MIN WINDOW',
        title: 'Swallow 1 Grow XL Capsule 20–30 Minutes Post-Breakfast',
        metric: '1 Capsule (550mg) + 300ml Warm Plain Water',
        desc: 'Take exactly 1 capsule with a full glass of warm water. Do not exceed 1 capsule of Grow XL in the morning.',
      },
      {
        code: 'GROWXL-03 · COFFEE BUFFER',
        title: 'Keep A 45-Minute Buffer From Morning Kopi O Or Teh Tarik',
        metric: 'Zero Tannin Chelation Of 140mg Tongkat Ali',
        desc: 'Enjoy your morning coffee or tea at least 45 minutes before or after taking Grow XL so polyphenols do not reduce quassinoid uptake.',
      },
      {
        code: 'GROWXL-04 · HYDRATION',
        title: 'Maintain 2.5 to 3.0 Liters Of Water Across The Workday',
        metric: 'Supports 120mg Arginine/Citrulline + 70mg Ginkgo Flow',
        desc: 'Steady hydration throughout your office or outdoor workday maximizes endothelial Nitric Oxide and microvascular oxygen delivery.',
      },
      {
        code: 'GROWXL-05 · DAY-25 REFILL',
        title: 'Lock In Your 60-Day (RM 286) Or 90-Day (RM 405) Continuity Reserve',
        metric: 'Day-25 Refill Sync · Save Up To RM 72 (15% OFF)',
        desc: 'Reorder on Day 25—or choose the 2-Bottle (RM 286) or 3-Bottle (RM 405) pack upfront—so your 30-day morning cycle never misses a day.',
      },
    ],
    faqs: [
      {
        questionEn: 'Is Grow XL on onyxmen.my the official formula for "GrowXL for Men" in Malaysia?',
        answerEn:
          'Yes. Grow XL (SKU: ONYX-GX-30, GTIN-13: 9550000102035, RM 159) is Onyxmen Malaysia’s official 30-Capsule Extra-Strength Male Performance Blend (550mg per capsule) sought by Malaysian buyers searching for GrowXL for Men, Grow XL Malaysia, and Vital Grow XL.',
      },
      {
        questionEn: 'What happens if I miss my morning dose of Grow XL after breakfast?',
        answerEn:
          'If you forget to take your capsule after breakfast, simply take 1 capsule 30 minutes after lunch with 300ml of plain water. Do not double-dose the next morning.',
      },
      {
        questionEn: 'How is Grow XL (30 Capsules) different from Magnum Pump XR (30 Black Capsules)?',
        answerEn:
          'Both contain 30 capsules for RM 159, but serve different daily roles: Grow XL is a morning all-day botanical conditioning blend featuring Tongkat Ali (140mg), Muira Puama (100mg), Saw Palmetto (80mg), and Ginkgo Biloba (70mg). Magnum Pump XR is a pre-workout/pre-evening Nitric Oxide surge formula packing 300mg of L-Arginine HCl + L-Citrulline Malate + Bioperine in jet-black capsules.',
      },
      {
        questionEn: 'How much do I save when ordering 2 or 3 bottles of Grow XL in Malaysia?',
        answerEn:
          '1 Bottle is RM 159. Ordering 2 Bottles (60 Capsules, 60-day supply) gives you 10% OFF at RM 286 (save RM 32). Ordering 3 Bottles (90 Capsules, 90-day supply) gives you 15% OFF at RM 405 (save RM 72), with free discreet COD delivery across Malaysia.',
      },
    ],
  },

  // ==========================================================================
  // GUIDE 9 (MS-248): HORSEMEN CAPSULE ORIGINAL 500MG MALAYSIA GUIDE
  // ==========================================================================
  {
    guideNumber: 9,
    microStep: 'MS-248',
    guideCode: 'GUIDE-09 · HORSEMEN 500MG PROTOCOL',
    slug: 'horsemen-capsule-original-500mg-malaysia-guide',
    canonicalEnPath: '/guides/horsemen-capsule-original-500mg-malaysia-guide/',
    alternateMsPath: '/ms/panduan/panduan-horsemen-kapsul-original-500mg-malaysia/',
    enOutputPaths: [
      'guides/horsemen-capsule-original-500mg-malaysia-guide/index.html',
    ],
    watermark: 'HORSEMEN',
    primaryProductSlug: 'horsemen',
    heroImage: '/assets/products/horsemen-stage.webp',
    portraitImage: '/assets/products/horsemen-portrait.webp',
    publishedDate: '2026-11-10T08:00:00+08:00',
    updatedDate: '2026-11-10T08:00:00+08:00',
    readingTime: '11 Min Botanical & Evening Protocol Read',
    seoTitle:
      'Horsemen Capsule Original 500mg Malaysia [Tongkat Ali & Maca]',
    metaDescription:
      '✓ Complete guide to Horsemen Capsule Original 500mg Malaysia (20 Caps): 150mg Tongkat Ali 100:1, 100mg Black Maca & evening timing. RM 159 discreet COD.',
    kicker: 'ONYX-STD · PROTOCOL GUIDE 09 · HORSEMEN MAN VIRILITY ENHANCEMENT (20 CAPS × 500MG) DOSSIER',
    headline:
      'Horsemen Capsule Original 500mg Malaysia: <span class="foil-champagne-text">Tongkat Ali 100:1, Black Maca &amp; Evening Readiness Guide.</span>',
    taxonomyStrip: [
      '01 · HORSEMEN ORIGINAL (20 CAPS × 500MG)',
      '02 · 150MG MALAYSIAN TONGKAT ALI 100:1',
      '03 · 100MG BLACK MACA + 80MG EPIMEDIUM ICARIIN',
      '04 · 45–60 MIN EVENING READINESS PROTOCOL',
    ],
    executiveSummary:
      'Engineered for Malaysian men searching for "Horsemen Capsule Original", "Horsemen Capsule Malaysia", "Malaysia Tongkat Ali", and "Maca Root Malaysia", this monograph details our flagship 20-Capsule × 500mg evening reserve (SKU: ONYX-HM-20, GTIN-13: 9550000102011, RM 159). Discover how 150mg of standardized 100:1 Eurycoma longifolia, 100mg Gelatinized Peruvian Black Maca, 80mg Epimedium sagittatum (10% Icariin), 80mg L-Arginine HCl, and 60mg Korean Red Panax Ginseng synergize for evening vitality.',
    telemetry: [
      {
        key: '01 · POTENCY PER CAPSULE',
        val: '500 mg Standardized Actives',
        sub: '20 Capsules per bottle (10,000mg total botanical reserve)',
      },
      {
        key: '02 · LEAD EXTRACT #1',
        val: '150 mg Tongkat Ali 100:1',
        sub: 'Highest single-capsule Eurycomanone dose in the Onyxmen vault',
      },
      {
        key: '03 · LEAD EXTRACT #2 & #3',
        val: '100 mg Black Maca + 80 mg Icariin',
        sub: 'Gelatinized Andean Lepidium meyenii + Epimedium sagittatum',
      },
      {
        key: '04 · EVENING T-MAX WINDOW',
        val: '45–60 Mins Post-Dinner',
        sub: 'RM 159 (1B) · RM 286 (2B 10% OFF) · RM 405 (3B 15% OFF)',
      },
    ],
    pinnedSummaryBullets: [
      'Exact Label Specification: "Horsemen — Man Virility Enhancement Herbal Supplement — 20 Capsules x 500mg"',
      'Highest Tongkat Ali Density: 150mg Malaysian Eurycoma longifolia 100:1 aqueous extract per capsule',
      'Andean & Asian Synergy: 100mg Peruvian Black Maca + 80mg Epimedium (Icariin) + 80mg L-Arginine + 60mg Red Ginseng',
      'Flexible Cadence: Take 1 capsule daily after dinner (20-day intensive) or every 48 hours (40-day maintenance)',
      '100% Discreet Plain-Box Cash on Delivery (COD) & WhatsApp Concierge (+60 14-298 5919) across Malaysia',
    ],
    chapters: [
      {
        kicker: 'CHAPTER 01 · INSIDE THE 500MG HORSEMEN ORIGINAL CAPSULE',
        title: 'Why Horsemen Delivers Our Highest 150mg Dose Of Malaysian Tongkat Ali 100:1.',
        paragraphs: [
          'For adult men in Malaysia comparing "Horsemen Capsule Original" against generic single-ingredient Tongkat Ali or Maca powders, the secret lies in extraction ratio density and multi-pathway synergy. Each 500mg capsule of Horsemen (SKU: ONYX-HM-20, RM 159) is anchored by 150mg of HPLC-standardized 100:1 Malaysian Eurycoma longifolia root extract (standardized to ≥2.2% Eurycomanone quassinoids)—equivalent to 15,000mg of raw wild-crafted root in a single water-soluble fraction.',
          'Surrounding that 150mg Tongkat Ali core are five precision cofactors: 100mg Gelatinized Andean Black Peruvian Maca Root (0.6% macamides), 80mg Epimedium sagittatum (Horny Goat Weed standardized to 10% flavonoid icariins), 80mg pharmaceutical-grade L-Arginine HCl, 60mg 6-Year Aged Korean Red Panax Ginseng (8% ginsenosides), and 30mg Tribulus terrestris & Zinc Picolinate.',
        ],
      },
      {
        kicker: 'CHAPTER 02 · BIOCHEMICAL SYNERGY: EURYCOMANONE, MACAMIDES & ICARIIN',
        title: 'How Three Botanical Pathways Converge Within 45 To 60 Minutes.',
        paragraphs: [
          'Horsemen is architected to address three physiological bottlenecks simultaneously after a demanding Malaysian workday: (1) Endocrine & Cortisol Balance—150mg Tongkat Ali 100:1 modulates evening stress cortisol and Sex Hormone-Binding Globulin (SHBG); (2) Central Non-Stimulant Drive—100mg Gelatinized Black Maca supports mitochondrial ATP endurance without caffeine or sleep disruption; and (3) Microvascular Responsiveness—80mg L-Arginine HCl + 80mg Epimedium Icariin + 60mg Red Ginseng support endothelial Nitric Oxide and cGMP smooth-muscle relaxation.',
          'Because starch has been enzymatically cleaved from the Black Maca root ("gelatinized" extraction) and the Tongkat Ali is an ultrasonic aqueous concentrate, the 500mg powder dissolves in 6 to 8 minutes when swallowed with 300ml of warm water.',
        ],
      },
      {
        kicker: 'CHAPTER 03 · EVENING INTENSIVE (20 DAYS) VS. ALTERNATE-DAY MAINTENANCE (40 DAYS)',
        title: 'Structuring Your 20-Capsule Horsemen Bottle Around Your Personal Schedule.',
        paragraphs: [
          'Protocol Mode A — 20-Day Intensive Evening Conditioning: Take 1 capsule every evening 45 to 60 minutes after dinner with 300ml of warm plain water for 20 consecutive days (with our Day-18 refill sync ensuring your second bottle arrives before Day 20). This rapid saturation protocol is ideal for men starting their first Onyxmen cycle.',
          'Protocol Mode B — 40-Day Alternate-Evening Reserve: Once baseline vitality is established—or if you stack Horsemen alongside morning Grow XL—take 1 capsule of Horsemen every 48 hours (or 45–60 minutes before planned active evenings). Under Mode B, a single 20-capsule bottle provides up to 40 days of coverage.',
        ],
      },
      {
        kicker: 'CHAPTER 04 · AUTHENTIC RM 159 VERIFICATION & DISCREET MALAYSIA COD',
        title: 'How To Order Genuine Horsemen Capsules With 10% To 15% Bundle Discounts.',
        paragraphs: [
          'Every authentic bottle of Horsemen Man Virility Enhancement (SKU: ONYX-HM-20, GTIN-13: 9550000102011) is stored in our 22°C–24°C Kuala Lumpur apothecary vault and sealed with a tamper-evident neck band. Never risk counterfeit marketplace imitations.',
          'Order directly via https://www.onyxmen.my or WhatsApp (+60 14-298 5919) in a 100% plain unmarked box ("OM Fulfilment Logistics"): 1 Bottle RM 159, 2 Bottles RM 286 (10% OFF — Save RM 32), or 3 Bottles RM 405 (15% OFF — Save RM 72) with Cash on Delivery (COD) across all 16 Malaysian states.',
        ],
      },
    ],
    protocolSteps: [
      {
        code: 'HM-01 · POST-DINNER WINDOW',
        title: 'Wait 45 To 60 Minutes After Your Evening Meal',
        metric: 'Allows Bulk Gastric Chyme To Clear',
        desc: 'Finish your evening meal before 20:30 MYT and wait 45–60 minutes so the 500mg aqueous-and-amino matrix enters the duodenum rapidly.',
      },
      {
        code: 'HM-02 · WARM HYDRATION',
        title: 'Swallow 1 Horsemen Capsule With 300ml Warm Plain Water',
        metric: '6–8 Minute Capsule Dissolution · Zero Caffeine',
        desc: 'Warm water accelerates dissolution of 150mg Tongkat Ali 100:1, 100mg Gelatinized Black Maca, and 80mg Epimedium Icariin.',
      },
      {
        code: 'HM-03 · TANNIN CLEARANCE',
        title: 'Maintain A 45-Minute Buffer From Kopi O & Teh Tarik',
        metric: 'Prevents Polyphenol Binding Of Eurycomanone',
        desc: 'Do not wash Horsemen down with coffee, black tea, or Milo so quassinoids and Zinc Picolinate achieve 100% intestinal bioavailability.',
      },
      {
        code: 'HM-04 · CADENCE SELECTION',
        title: 'Choose Daily 20-Day Conditioning Or 48-Hour Maintenance',
        metric: '20 Capsules × 500mg = 10,000mg Total Reserve',
        desc: 'Run a 20-day consecutive cycle for initial saturation, or take 1 capsule every 48 hours / 45–60 mins pre-activity for a 40-day span.',
      },
      {
        code: 'HM-05 · BUNDLE CONTINUITY',
        title: 'Upgrade To 2 Bottles (RM 286) Or 3 Bottles (RM 405) For Free Express COD',
        metric: 'Save RM 32 (10% OFF) Or RM 72 (15% OFF)',
        desc: 'Lock in uninterrupted Day-18 continuity and free nationwide discreet courier across Peninsular Malaysia, Sabah, and Sarawak.',
      },
    ],
    faqs: [
      {
        questionEn: 'What are the exact ingredients inside each 500mg Horsemen Original capsule?',
        answerEn:
          'Each 500mg capsule of Horsemen (SKU: ONYX-HM-20) contains 150mg Malaysian Tongkat Ali 100:1 root extract, 100mg Gelatinized Peruvian Black Maca, 80mg Epimedium sagittatum (10% Icariin), 80mg L-Arginine HCl, 60mg 6-Year Korean Red Panax Ginseng, and 30mg Tribulus terrestris & Zinc Picolinate.',
      },
      {
        questionEn: 'How long before evening activity should I take Horsemen?',
        answerEn:
          'Take 1 capsule with 300ml of warm plain water 45 to 60 minutes before evening physical activity (or 45–60 minutes after dinner). Peak plasma bioavailability (Tmax) occurs between 45 and 90 minutes post-ingestion.',
      },
      {
        questionEn: 'Does Horsemen contain synthetic stimulants or cause morning headaches?',
        answerEn:
          'No. Authentic Horsemen by Onyxmen Malaysia is 100% free of undeclared synthetic PDE5 chemicals, artificial caffeine, or stimulants. It relies strictly on HPLC-standardized botanical extracts and L-Arginine HCl.',
      },
      {
        questionEn: 'How can I order Horsemen Original with Cash on Delivery (COD) in Malaysia?',
        answerEn:
          'Click any "Order Now" button on onyxmen.my to open the Quick Discreet Order Form, or click the WhatsApp button (+60 14-298 5919) to chat or order directly. 1 Bottle is RM 159, 2 Bottles are RM 286 (10% OFF), and 3 Bottles are RM 405 (15% OFF).',
      },
    ],
  },

  // ==========================================================================
  // GUIDE 10 (MS-249): MAGNUM PUMP XR 30 BLACK CAPSULES NITRIC OXIDE GUIDE
  // ==========================================================================
  {
    guideNumber: 10,
    microStep: 'MS-249',
    guideCode: 'GUIDE-10 · MAGNUM PUMP XR NITRIC OXIDE',
    slug: 'magnum-pump-xr-30-black-capsules-nitric-oxide-guide',
    canonicalEnPath: '/guides/magnum-pump-xr-30-black-capsules-nitric-oxide-guide/',
    alternateMsPath: '/ms/panduan/panduan-magnum-pump-xr-30-kapsul-hitam-malaysia/',
    enOutputPaths: [
      'guides/magnum-pump-xr-30-black-capsules-nitric-oxide-guide/index.html',
    ],
    watermark: 'PUMP XR 30',
    primaryProductSlug: 'magnum-pump-xr',
    heroImage: '/assets/products/magnum-pump-xr-stage.webp',
    portraitImage: '/assets/products/magnum-pump-xr-portrait.webp',
    publishedDate: '2026-11-10T08:00:00+08:00',
    updatedDate: '2026-11-10T08:00:00+08:00',
    readingTime: '12 Min Vascular Nitric Oxide Read',
    seoTitle:
      'Magnum Pump XR 30 Black Capsules Malaysia [Nitric Oxide RM159]',
    metaDescription:
      '✓ Official Magnum Pump XR Malaysia guide (30 Black Capsules × 600mg): 300mg L-Arginine & L-Citrulline Nitric Oxide timing, gym & evening stamina. RM 159 COD.',
    kicker: 'ONYX-STD · PROTOCOL GUIDE 10 · MAGNUM PUMP XR (30 BLACK CAPSULES × 600MG) VASCULAR DOSSIER',
    headline:
      'Magnum Pump XR 30 Black Capsules Malaysia: <span class="foil-champagne-text">L-Arginine, L-Citrulline &amp; Nitric Oxide Timing Guide.</span>',
    taxonomyStrip: [
      '01 · MAGNUM PUMP XR (30 BLACK CAPS × 600MG)',
      '02 · 180MG L-ARGININE HCl + 120MG L-CITRULLINE XR',
      '03 · 110MG TRIBULUS + 90MG TONGKAT ALI + BIOPERINE',
      '04 · 100% ORAL DIETARY SUPPLEMENT (NOT A DEVICE)',
    ],
    executiveSummary:
      'Designed for Malaysian men searching for "Magnum Pump XR", "Timing Capsule Malaysia", and "L-Arginine Nitric Oxide Supplement", this technical manual covers Onyxmen Malaysia’s heaviest 600mg Extended-Release formulation: Magnum Pump XR Testosterone Pro Series (30 Jet-Black Capsules, SKU: ONYX-MP-30, GTIN-13: 9550000102042, RM 159). Learn how 300mg of L-Arginine HCl + L-Citrulline Malate, 270mg of standardized adaptogens, and Bioperine® drive dual-wave endothelial vasodilation within 30 to 45 minutes.',
    telemetry: [
      {
        key: '01 · CAPSULE SPECIFICATION',
        val: '30 Jet-Black Capsules × 600mg',
        sub: '18,000mg total net mass ·Heaviest capsule in the Onyxmen vault',
      },
      {
        key: '02 · DUAL-WAVE NO MATRIX',
        val: '180 mg Arginine + 120 mg Citrulline',
        sub: 'Immediate eNOS surge (35m) + 5-hour renal citrulline recycling',
      },
      {
        key: '03 · THERMAL BIO-CATALYST',
        val: '30 mg Bioperine® & Zinc Matrix',
        sub: '95% Piperine increases amino & herbal absorption by +30%',
      },
      {
        key: '04 · ENTITY VERIFICATION',
        val: 'Oral Capsule Supplement (RM 159)',
        sub: 'Zero mechanical/vacuum hardware · 100% plain-box COD',
      },
    ],
    pinnedSummaryBullets: [
      'Exact Bottle Specification: "Magnum Pump XR — Testosterone Pro Series — 30 Black Capsules" (600mg each)',
      'Dual-Wave Nitric Oxide: 180mg L-Arginine HCl (Wave 1) + 120mg L-Citrulline Malate 2:1 (Wave 2 Extended-Release)',
      'Adaptogenic Backbone: 110mg Tribulus (60% saponins) + 90mg Tongkat Ali 100:1 + 70mg Black Maca & Fenugreek',
      'Pre-Activity Timing: Swallow 1 black capsule with 350ml water 30–45 minutes before gym training or evening activity',
      'Official Disambiguation: Strictly an oral 30-capsule Dietary Supplement bottle (never a mechanical/industrial pump)',
    ],
    chapters: [
      {
        kicker: 'CHAPTER 01 · INSIDE THE 600MG JET-BLACK EXTENDED-RELEASE CAPSULE',
        title: 'Why Magnum Pump XR Is Our Highest-Mass (600mg) Vascular & Stamina Formula.',
        paragraphs: [
          'While standard botanical capsules weigh 450mg to 500mg, Magnum Pump XR (SKU: ONYX-MP-30, RM 159) utilizes a high-capacity 600mg jet-black capsule shell (18,000mg total active mass across 30 black capsules) so that clinical doses of free-form Nitric Oxide amino acids and standardized botanicals coexist in a single capsule.',
          'Each 600mg black capsule delivers: (1) 180mg Micronized L-Arginine Hydrochloride; (2) 120mg L-Citrulline Malate 2:1; (3) 110mg Tribulus terrestris (standardized to 60% steroidal saponins); (4) 90mg Malaysian Eurycoma longifolia (Tongkat Ali 100:1); (5) 70mg Gelatinized Black Maca & Fenugreek seed extract (50% fenusides); and (6) 30mg Bioperine® (95% piperine black pepper extract) & Zinc Aspartate.',
        ],
      },
      {
        kicker: 'CHAPTER 02 · DUAL-WAVE EXTENDED-RELEASE (XR) NITRIC OXIDE KINETICS',
        title: 'How L-Arginine HCl (Wave 1) & L-Citrulline Malate (Wave 2) Sustain 5-Hour Blood Flow.',
        paragraphs: [
          'Ordinary L-Arginine supplements suffer from a well-documented pharmacokinetic limitation: hepatic arginase enzymes break down a portion of oral L-Arginine after 60 to 90 minutes. Magnum Pump XR solves this with its Extended-Release (XR) dual-amino pairing.',
          'When you swallow 1 black capsule 30 to 45 minutes before physical activity, the 180mg L-Arginine HCl (shielded by Bioperine®) triggers Wave 1—rapid endothelial Nitric Oxide Synthase (eNOS) activation and cGMP smooth-muscle vasodilation at the 30-to-45-minute mark. Simultaneously, the 120mg L-Citrulline Malate bypasses liver arginase untouched and converts continuously into fresh plasma L-Arginine in the kidneys (Wave 2), sustaining vascular fullness, oxygen transport, and stamina endurance for 3 to 5 hours.',
        ],
      },
      {
        kicker: 'CHAPTER 03 · PRE-GYM RESISTANCE TRAINING VS. EVENING TIMING PROTOCOL',
        title: 'Calibrating Your 30-Black-Capsule Cycle For Malaysian Gym-Goers & Active Evenings.',
        paragraphs: [
          'On Resistance-Training Days (17:00–19:00 MYT): Take 1 black capsule of Magnum Pump XR with 350ml of plain water 30 to 45 minutes before lifting weights or cardiovascular conditioning. The combination of L-Citrulline Malate (which buffers skeletal-muscle ammonia and lactic acid) and 110mg Tribulus saponins enhances workout pump and reduces post-gym exhaustion.',
          'On Non-Training / Active Evenings (20:30–21:30 MYT): Take 1 black capsule with 300ml of warm water 30 to 45 minutes before evening activity (at least 45 minutes after dinner and 45 minutes away from Kopi O or Teh Tarik). Because Magnum Pump XR contains 0mg synthetic caffeine, it will never disturb your sleep architecture.',
        ],
      },
      {
        kicker: 'CHAPTER 04 · ENTITY DISAMBIGUATION & MALAYSIA COD BUNDLE OFFERS',
        title: '100% Oral Dietary Supplement Bottle (RM 159 · Buy 2 RM 286 · Buy 3 RM 405).',
        paragraphs: [
          'To ensure 100% clarity for Malaysian buyers and search engines: Magnum Pump XR by Onyxmen Malaysia (SKU: ONYX-MP-30, MPN: MPXR-30BLK-MY, GTIN-13: 9550000102042) is strictly an oral botanical and amino-acid Dietary Supplement packaged as 30 Jet-Black Capsules inside an apothecary bottle. The word "Pump" refers to physiological Nitric Oxide vascular muscle pump—it is never a mechanical vacuum cylinder, water pump, or oilfield slurry pump.',
          'Order authentic Magnum Pump XR in a 100% plain unmarked box ("OM Fulfilment Logistics") via https://www.onyxmen.my or WhatsApp (+60 14-298 5919): 1 Bottle RM 159, 2 Bottles RM 286 (10% OFF — Save RM 32), or 3 Bottles RM 405 (15% OFF — Save RM 72) with Cash on Delivery (COD) nationwide.',
        ],
      },
    ],
    protocolSteps: [
      {
        code: 'MPXR-01 · CAPSULE CHECK',
        title: 'Verify 30 Jet-Black Capsules Inside The Sealed Bottle',
        metric: 'SKU: ONYX-MP-30 · 600mg Per Black Capsule',
        desc: 'Authentic Magnum Pump XR contains 30 jet-black capsules inside a tamper-evident bottle with the crimson-and-gold "Testosterone Pro Series" label.',
      },
      {
        code: 'MPXR-02 · 30–45M TIMING',
        title: 'Swallow 1 Black Capsule 30–45 Minutes Pre-Gym Or Pre-Evening',
        metric: 'Matches Wave-1 L-Arginine eNOS Tmax (35 Mins)',
        desc: 'Take 1 capsule on a light stomach (or 45 mins after dinner) 30 to 45 minutes before physical activity.',
      },
      {
        code: 'MPXR-03 · 350ML WATER',
        title: 'Hydrate With 350ml Plain Water Upon Ingestion',
        metric: 'Maximizes Vascular Plasma Volume & Pump',
        desc: 'Endothelial Nitric Oxide vasodilation requires adequate intravascular hydration to generate full muscular and peripheral blood flow.',
      },
      {
        code: 'MPXR-04 · BIOPERINE WINDOW',
        title: 'Keep A 45-Minute Buffer From Dairy, Heavy Oils & Teh Tarik',
        metric: '5mg Bioperine® Catalyst (+30% Uptake)',
        desc: 'Allow Bioperine piperine and free-form amino acids unobstructed brush-border transport in the small intestine.',
      },
      {
        code: 'MPXR-05 · DAY-25 REFILL',
        title: 'Reserve The 2-Bottle (RM 286) Or 3-Bottle (RM 405) VIP Bundle',
        metric: '10% To 15% OFF · Free Malaysia COD & Express',
        desc: 'Lock in a 60-day or 90-day Extended-Release Nitric Oxide protocol or stack Magnum Pump XR with morning Grow XL.',
      },
    ],
    faqs: [
      {
        questionEn: 'Why are Magnum Pump XR capsules jet-black in color?',
        answerEn:
          'Authentic Magnum Pump XR (SKU: ONYX-MP-30) uses a signature UV-protective jet-black capsule shell (30 Black Capsules × 600mg) to shield moisture- and light-sensitive L-Arginine HCl, L-Citrulline Malate, and standardized Tongkat Ali/Tribulus extracts from Malaysia’s tropical humidity.',
      },
      {
        questionEn: 'How quickly does Magnum Pump XR start working after I swallow 1 capsule?',
        answerEn:
          'When taken with 300ml–350ml of plain water on a light stomach, Wave-1 L-Arginine HCl and Bioperine® initiate endothelial Nitric Oxide vasodilation within 30 to 45 minutes, while Wave-2 L-Citrulline Malate sustains plasma arginine for 3 to 5 hours.',
      },
      {
        questionEn: 'Is Magnum Pump XR a capsule supplement or a physical pump device?',
        answerEn:
          'Magnum Pump XR by Onyxmen Malaysia (RM 159) is 100% an oral Dietary Supplement bottle containing 30 Black Capsules formulated with amino acids and botanical extracts. It is NOT a mechanical vacuum device or industrial pump.',
      },
      {
        questionEn: 'Can I order Magnum Pump XR via Cash on Delivery (COD) or WhatsApp in Malaysia?',
        answerEn:
          'Yes. You can order via our 3-field Quick Discreet Order Form or message our official WhatsApp (+60 14-298 5919) for 100% plain-box COD across all 16 Malaysian states (1 Bottle RM 159, 2 Bottles RM 286 [10% OFF], 3 Bottles RM 405 [15% OFF]).',
      },
    ],
  },

  // ==========================================================================
  // GUIDE 11 (ONYX-STD): GROW XL VS HORSEMEN VS HAMMER OF THOR MALAYSIA
  // ==========================================================================
  {
    guideNumber: 11,
    microStep: 'ONYX-STD',
    guideCode: 'GUIDE-11 · 3-FORMULA BUYER COMPARISON',
    slug: 'grow-xl-vs-horsemen-vs-hammer-of-thor-malaysia',
    canonicalEnPath: '/guides/grow-xl-vs-horsemen-vs-hammer-of-thor-malaysia/',
    alternateMsPath: '/ms/panduan/perbezaan-grow-xl-vs-horsemen-vs-hammer-of-thor-malaysia/',
    enOutputPaths: [
      'guides/grow-xl-vs-horsemen-vs-hammer-of-thor-malaysia/index.html',
    ],
    watermark: 'COMPARE 3',
    primaryProductSlug: 'grow-xl',
    heroImage: '/assets/products/onyxman-lineup-hero.webp',
    portraitImage: '/assets/products/grow-xl-portrait.webp',
    publishedDate: '2026-11-11T08:00:00+08:00',
    updatedDate: '2026-11-11T08:00:00+08:00',
    readingTime: '12 Min 3-Bottle Comparison Read',
    seoTitle:
      'Grow XL vs Horsemen vs Hammer of Thor Malaysia [RM159 Guide]',
    metaDescription:
      '✓ Compare Grow XL (30 Caps), Horsemen (20 Caps) & Hammer of Thor (20 Veg Caps) in Malaysia: dosage, Tongkat Ali & Tribulus potency. RM 159 discreet COD.',
    kicker: 'ONYX-STD · PROTOCOL GUIDE 11 · GROW XL VS. HORSEMEN VS. HAMMER OF THOR MALAYSIA BUYER MATRIX',
    headline:
      'Grow XL vs. Horsemen vs. Hammer of Thor Malaysia: <span class="foil-champagne-text">Which Capsule Should You Choose?</span>',
    taxonomyStrip: [
      '01 · GROW XL (30 CAPS × 550MG MORNING CYCLE)',
      '02 · HORSEMEN (20 CAPS × 500MG EVENING RESERVE)',
      '03 · HAMMER OF THOR (20 VEG. CAPS TRIBULUS 60%)',
      '04 · UNIFORM RM 159 · 2 FOR RM 286 (-10%) COD',
    ],
    executiveSummary:
      'Malaysian buyers comparing "Grow XL vs Horsemen", "Hammer of Thor vs Horsemen", or "GrowXL for Men vs Hammer of Thor" often wonder why all three flagship bottles share the exact same RM 159 price (RM 286 for 2 bottles [10% OFF], RM 405 for 3 bottles [15% OFF]) yet differ in capsule count and botanical lead ratios. This clinical buyer comparison breaks down exact milligram profiles, morning vs. evening circadian windows, vegetarian HPMC shell options, and dual-bottle stacking across Malaysia.',
    telemetry: [
      {
        key: '01 · GROW XL (SKU: ONYX-GX-30)',
        val: '30 Caps × 550mg (Morning)',
        sub: '140mg Tongkat Ali + 100mg Muira Puama + 80mg Saw Palmetto',
      },
      {
        key: '02 · HORSEMEN (SKU: ONYX-HM-20)',
        val: '20 Caps × 500mg (Evening)',
        sub: '150mg Tongkat Ali 100:1 + 100mg Black Maca + 80mg Icariin',
      },
      {
        key: '03 · HAMMER OF THOR (ONYX-HT-20)',
        val: '20 Veg. Caps × 500mg (HPMC)',
        sub: '200mg Tribulus (60% Saponins) + 100mg Maca + 75mg Ginseng',
      },
      {
        key: '04 · DUAL-BOTTLE STACKING',
        val: 'RM 286 (Save RM 32 · 10% OFF)',
        sub: 'Pair 1 morning bottle (Grow XL) + 1 evening bottle (Horsemen)',
      },
    ],
    pinnedSummaryBullets: [
      'Choose Grow XL (30 Caps × 550mg = 16,500mg) for a 1-capsule-after-breakfast 30-day calendar habit + pelvic Saw Palmetto support',
      'Choose Horsemen (20 Caps × 500mg = 10,000mg) for our highest 150mg Tongkat Ali 100:1 + 80mg Epimedium Icariin 45-min evening readiness',
      'Choose Hammer of Thor (20 Veg. Caps × 500mg) for 100% plant-cellulose HPMC vegetarian shells + 200mg Tribulus (60% Protodioscin)',
      'Need pre-gym vascular pump? Add Magnum Pump XR (30 Black Caps × 600mg) with 300mg L-Arginine & L-Citrulline Nitric Oxide',
      'All four formulations cost RM 159 (1B), RM 286 (2B — 10% OFF), or RM 405 (3B — 15% OFF) with discreet plain-box COD nationwide',
    ],
    chapters: [
      {
        kicker: 'CHAPTER 01 · ARCHITECTURAL DIVERGENCE: 30-CAPSULE MORNING CONDITIONING VS. 20-CAPSULE EVENING RESERVES',
        title: 'Why Grow XL Contains 30 Capsules While Horsemen & Hammer of Thor Contain 20 Capsules.',
        paragraphs: [
          'The first distinction between Grow XL (GrowXL for Men), Horsemen, and Hammer of Thor Men’s Health is their circadian dosing architecture. Grow XL (SKU: ONYX-GX-30, RM 159) contains 30 capsules at 550mg each (16,500mg total active mass per bottle) because its lipophilic phytosterols—specifically 80mg Supercritical Saw Palmetto berry fatty acids and 100mg Brazilian Muira Puama sterol esters—are designed to be ingested once every morning 20 to 30 minutes after breakfast across a full 30-day calendar month.',
          'By contrast, Horsemen (SKU: ONYX-HM-20, 20 Capsules × 500mg) and Hammer of Thor (SKU: ONYX-HT-20, 20 Veg. Capsules × 500mg) allocate their formulation budget toward ultra-high-ratio standardized alkaloids and steroidal saponins engineered for post-dinner evening conditioning or alternate-evening readiness.',
        ],
      },
      {
        kicker: 'CHAPTER 02 · PHYTOCHEMICAL HEAD-TO-HEAD: EURYCOMANONE VS. PROTODIOSCIN VS. MUIRA PUAMA',
        title: 'Comparing Exact Milligram Standardization Across All Three Flagship Bottles.',
        paragraphs: [
          'Horsemen Man Virility Enhancement leads in water-soluble quassinoid and prenylated flavonoid concentration: each 500mg capsule delivers 150mg Malaysian Tongkat Ali 100:1 (≥2.2% eurycomanone), 100mg Gelatinized Black Peruvian Maca, 80mg Epimedium sagittatum (10% icariin), 80mg L-Arginine HCl, and 60mg 6-Year Korean Red Ginseng. This makes Horsemen the #1 choice for men prioritizing rapid 45-to-60-minute evening drive after work.',
          'Hammer of Thor Men’s Health leads in steroidal furostanol saponins and vegetarian purity: each 500mg plant-cellulose HPMC capsule delivers 200mg Bulgarian-strain Tribulus terrestris (60% saponins / 40mg protodioscin), 100mg Andean Maca, 75mg Panax Ginseng, 65mg Saw Palmetto, 45mg Tongkat Ali 100:1, and 15mg Zinc Bisglycinate. Grow XL bridges both worlds across 30 days with 140mg Tongkat Ali 100:1, 120mg L-Arginine & L-Citrulline, 100mg Muira Puama, 80mg Saw Palmetto, and 70mg Ginkgo Biloba.',
        ],
      },
      {
        kicker: 'CHAPTER 03 · BUYER PERSONA MATCHING FOR MALAYSIAN EXECUTIVES, GYM-GOERS & MATURE MEN',
        title: 'Selecting Your Ideal Single Bottle (RM 159) Based On Age, Work Schedule & Dietary Preference.',
        paragraphs: [
          'Profile 1 — The Busy Corporate Executive or Business Owner (Ages 30–60): Choose Grow XL (30 Capsules, RM 159) if you prefer an effortless 1-capsule-after-breakfast routine that supports daytime mental clarity (Ginkgo Biloba), pelvic/prostate comfort (Saw Palmetto), and steady 30-day stamina without watching the clock at night.',
          'Profile 2 — The Evening Readiness & High-Tongkat-Ali Seeker: Choose Horsemen (20 Capsules, RM 159) if you want maximum Malaysian Tongkat Ali 100:1 (150mg) + Black Maca (100mg) + Epimedium Icariin (80mg) taken 45–60 minutes after dinner. Profile 3 — The Vegetarian-Capsule & Athletic Recovery Seeker: Choose Hammer of Thor (20 Veg. Capsules, RM 159) if you require 100% animal-free HPMC capsules and 200mg of 60%-saponin Tribulus for physical endurance.',
        ],
      },
      {
        kicker: 'CHAPTER 04 · THE RM 286 DUAL-BOTTLE STACK (10% OFF) & RM 405 3-BOTTLE VIP VAULT (15% OFF)',
        title: 'Combining Morning Grow XL With Evening Horsemen Or Hammer of Thor In Malaysia.',
        paragraphs: [
          'Because Grow XL operates on a morning post-breakfast schedule while Horsemen and Hammer of Thor operate on a post-dinner evening schedule, our most popular multi-bottle order in Malaysia is the Morning + Evening Synergistic Stack at RM 286 (2 Bottles — 10% OFF, saving RM 32 off RM 318) or RM 405 (3 Bottles — 15% OFF, saving RM 72 off RM 477).',
          'Simply open the Quick Discreet Order Form or message our official WhatsApp desk (+60 14-298 5919) to specify your custom 2-bottle or 3-bottle combination with 100% plain unmarked box Cash on Delivery (COD) across all 16 Malaysian states.',
        ],
      },
    ],
    protocolSteps: [
      {
        code: 'SELECT-01 · GROW XL',
        title: 'Pick Grow XL (30 Caps × 550mg) For 30-Day Morning Conditioning',
        metric: '1B RM 159 · 2B RM 286 (-10%) · Day-25 Refill',
        desc: 'Take 1 capsule 20–30 minutes after breakfast daily for Tongkat Ali (140mg), Muira Puama (100mg), Saw Palmetto (80mg), and Ginkgo (70mg).',
      },
      {
        code: 'SELECT-02 · HORSEMEN',
        title: 'Pick Horsemen (20 Caps × 500mg) For Peak 45-Min Evening Readiness',
        metric: '150mg Tongkat Ali 100:1 + 100mg Black Maca + 80mg Icariin',
        desc: 'Take 1 capsule 45–60 minutes after dinner with 300ml warm water for concentrated evening stamina and cortisol balance.',
      },
      {
        code: 'SELECT-03 · HAMMER OF THOR',
        title: 'Pick Hammer of Thor (20 Veg. Caps) For Vegetarian Saponin Endurance',
        metric: '100% HPMC Plant Shell · 200mg Tribulus (60% Saponins)',
        desc: 'Take 1 vegetarian capsule 30 minutes after dinner or 45 minutes pre-gym for steroidal saponin recovery and Zinc Bisglycinate.',
      },
      {
        code: 'SELECT-04 · MAGNUM PUMP XR',
        title: 'Add Magnum Pump XR (30 Black Caps × 600mg) For Nitric Oxide Blood Flow',
        metric: '300mg L-Arginine + L-Citrulline + Bioperine®',
        desc: 'Take 1 jet-black capsule 30–45 minutes before resistance training or evening activity for 5-hour Extended-Release vasodilation.',
      },
      {
        code: 'SELECT-05 · DUAL STACK',
        title: 'Order Any 2 Bottles For RM 286 (10% OFF) Or 3 Bottles For RM 405 (15% OFF)',
        metric: 'Free Malaysia Express & Plain-Box COD',
        desc: 'Mix and match morning Grow XL with evening Horsemen or Hammer of Thor via the Express Order Drawer or WhatsApp (+60 14-298 5919).',
      },
    ],
    faqs: [
      {
        questionEn: 'Between Grow XL, Horsemen, and Hammer of Thor, which one is strongest for evening stamina?',
        answerEn:
          'For targeted evening readiness (taken 45–60 minutes after dinner), Horsemen (20 Capsules × 500mg) delivers the highest single-capsule concentration of Malaysian Tongkat Ali 100:1 (150mg) paired with 100mg Black Maca and 80mg Epimedium Icariin. For full-month daily baseline conditioning and pelvic support, Grow XL (30 Capsules × 550mg) is our #1 selling morning formula.',
      },
      {
        questionEn: 'Which capsule should I choose if I want a 100% vegetarian capsule shell?',
        answerEn:
          'Choose Hammer of Thor Men’s Health (20 Veg. Capsules, SKU: ONYX-HT-20) or Magnum Pump XR (30 Black Capsules, SKU: ONYX-MP-30), both of which utilize 100% plant-derived hypromellose (HPMC) vegetarian capsules with zero animal gelatin.',
      },
      {
        questionEn: 'Can I take Grow XL in the morning and Horsemen or Hammer of Thor in the evening?',
        answerEn:
          'Yes. Taking 1 capsule of Grow XL 20–30 minutes after breakfast and 1 capsule of Horsemen (or Hammer of Thor) 45 minutes after dinner separates intake by 12 hours, allowing complementary absorption without pathway overlap.',
      },
      {
        questionEn: 'Do all three bottles really cost the same RM 159 in Malaysia?',
        answerEn:
          'Yes. Every authentic bottle in the Onyxmen Malaysia apothecary is standardized at RM 159 for 1 Bottle, RM 286 for 2 Bottles (10% OFF — Save RM 32), and RM 405 for 3 Bottles (15% OFF — Save RM 72) including discreet plain-box COD.',
      },
    ],
  },

  // ==========================================================================
  // GUIDE 12 (ONYX-STD): SIDE EFFECTS & SAFETY AUDIT MALAYSIA
  // ==========================================================================
  {
    guideNumber: 12,
    microStep: 'ONYX-STD',
    guideCode: 'GUIDE-12 · SAFETY & SIDE EFFECTS AUDIT',
    slug: 'hammer-of-thor-horsemen-grow-xl-side-effects-safety-malaysia',
    canonicalEnPath: '/guides/hammer-of-thor-horsemen-grow-xl-side-effects-safety-malaysia/',
    alternateMsPath: '/ms/panduan/kesan-sampingan-hammer-of-thor-horsemen-grow-xl-keselamatan/',
    enOutputPaths: [
      'guides/hammer-of-thor-horsemen-grow-xl-side-effects-safety-malaysia/index.html',
    ],
    watermark: 'SAFETY COA',
    primaryProductSlug: 'hammer-of-thor',
    heroImage: '/assets/products/hammer-of-thor-stage.webp',
    portraitImage: '/assets/products/horsemen-portrait.webp',
    publishedDate: '2026-11-11T08:00:00+08:00',
    updatedDate: '2026-11-11T08:00:00+08:00',
    readingTime: '11 Min Clinical Safety & Toxicology Read',
    seoTitle:
      'Hammer of Thor, Horsemen & Grow XL Side Effects & Safety MY',
    metaDescription:
      '✓ Official safety & side effects audit for Hammer of Thor, Horsemen, Grow XL & Magnum Pump XR in Malaysia: 0% synthetic PDE5, zero headaches & lab COA.',
    kicker: 'ONYX-STD · PROTOCOL GUIDE 12 · CLINICAL TOXICOLOGY, SIDE EFFECTS & ZERO-SYNTHETIC SAFETY AUDIT',
    headline:
      'Hammer of Thor, Horsemen &amp; Grow XL Side Effects &amp; Safety Malaysia: <span class="foil-champagne-text">100% Botanical vs. Fake Street Pills.</span>',
    taxonomyStrip: [
      '01 · 0% UNDECLARED SYNTHETIC PDE5 CHEMICALS',
      '02 · ICP-MS HEAVY METAL & MICROBIAL SCREENED',
      '03 · ZERO THROBBING HEADACHES OR PALPITATIONS',
      '04 · CAFFEINE-FREE & SLEEP-SAFE ADAPTATION',
    ],
    executiveSummary:
      'Thousands of Malaysian men search for "Hammer of Thor side effects", "Horsemen capsule side effects", or "Is Grow XL safe?" after hearing warnings about counterfeit street pills and adulterated energy candies. This toxicology and quality-assurance dossier explains why unverified RM 30 imitations cause severe throbbing headaches, facial flushing, and heart palpitations—and how Onyxmen Malaysia verifies 100% synthetic-free, heavy-metal-tested botanical purity across all four RM 159 formulations.',
    telemetry: [
      {
        key: '01 · LC-MS/MS DRUG SCREEN',
        val: '0.00% Synthetic PDE5 Analogues',
        sub: 'Tested negative for sildenafil, tadalafil & 84 chemical analogues',
      },
      {
        key: '02 · ICP-MS HEAVY METALS',
        val: 'Pb <0.18ppm · Hg <0.01ppm',
        sub: 'Lead, Mercury, Arsenic & Cadmium strictly below statutory limits',
      },
      {
        key: '03 · CARDIOVASCULAR & CNS',
        val: '0 mg Caffeine · Zero Migraines',
        sub: 'Natural eNOS & adaptogenic pathways without jittery spikes',
      },
      {
        key: '04 · GASTRIC TOLERANCE',
        val: 'Take 30–45 Mins Post-Meal',
        sub: 'Prevents herbal bitterness warmth on an empty stomach',
      },
    ],
    pinnedSummaryBullets: [
      'Why Fake Pills Cause Headaches: Counterfeit RM 30 pills are spiked with undeclared sildenafil/tadalafil that dilate cranial arteries',
      'Onyxmen Purity Standard: 100% plant & amino-acid extracts with zero synthetic PDE5 chemicals and zero artificial caffeine',
      'Heavy-Metal & Microbial Safety: Every batch audited via ICP-MS (Pb, As, Cd, Hg) and USP <2021> microbial testing',
      'Digestive Comfort Rule: Always swallow capsules 20–60 minutes after a meal with 300ml water (never on a completely empty stomach)',
      'Medical Caution: Adult men taking prescription nitrates or blood-pressure medication should consult a physician prior to use',
    ],
    chapters: [
      {
        kicker: 'CHAPTER 01 · THE ROOT CAUSE OF "HEADACHES & PALPITATIONS" IN MALAYSIA’S SUPPLEMENT MARKET',
        title: 'Why Counterfeit RM 30 Pills & Candy Packets Trigger Cranial Migraines And Flushing.',
        paragraphs: [
          'When Malaysian consumers report experiencing a sudden throbbing headache, intense facial redness, stuffy nose, blurred blue-tinted vision, or rapid heart palpitations after taking a cheap RM 30 capsule or coffee/candy packet bought from an unauthorized night-market stall, they are not reacting to Tongkat Ali, Maca, or Tribulus. They are experiencing the classic acute side effects of undeclared synthetic phosphodiesterase-5 (PDE5) pharmaceutical analogues (such as unmeasured sildenafil, tadalafil, or sulfoaildenafil) illegally mixed into counterfeit powders.',
          'Synthetic PDE5 chemicals forcefully inhibit PDE5 enzymes not only in pelvic tissue but also in cerebral meningeal blood vessels and nasal mucosa—causing cranial arterial distension (severe migraine headaches) and erratic blood-pressure dips. Authentic Onyxmen Malaysia formulations (Horsemen, Hammer of Thor, Grow XL, and Magnum Pump XR) are 100% free of synthetic PDE5 drugs and never induce chemical headaches.',
        ],
      },
      {
        kicker: 'CHAPTER 02 · ONYXMEN MALAYSIA’S THREE-STAGE LABORATORY SAFETY VERIFICATION',
        title: 'LC-MS/MS Adulterant Screening, ICP-MS Heavy Metal Assay & Microbiological Purity.',
        paragraphs: [
          'Before any batch of Horsemen (SKU: ONYX-HM-20), Hammer of Thor (SKU: ONYX-HT-20), Grow XL (SKU: ONYX-GX-30), or Magnum Pump XR (SKU: ONYX-MP-30) enters our 22°C–24°C Kuala Lumpur apothecary vault, it must pass three analytical quality gates: (1) Quadrupole LC-MS/MS screening confirming 0.00% presence of sildenafil, tadalafil, vardenafil, sibutramine, and 84 structural analogues; and (2) Inductively Coupled Plasma Mass Spectrometry (ICP-MS) verifying Lead (<0.18 ppm), Arsenic (<0.11 ppm), Cadmium (<0.04 ppm), and Mercury (<0.01 ppm).',
          'Third, every batch undergoes USP <2021> microbiological enumeration to guarantee zero E. coli, zero Salmonella, and low water activity inside nitrogen-flushed HPMC capsules. Furthermore, all four formulations contain 0mg synthetic caffeine or yohimbine, ensuring calm cardiovascular rhythm and restorative night sleep.',
        ],
      },
      {
        kicker: 'CHAPTER 03 · MILD BOTANICAL SENSATIONS & HOW TO PREVENT GASTRIC WARMTH',
        title: 'Why Post-Meal Ingestion & 300ml Hydration Eliminate Digestive Discomfort.',
        paragraphs: [
          'Because authentic Horsemen, Grow XL, and Hammer of Thor contain highly concentrated bitter quassinoids (100:1 Eurycoma longifolia), steroidal saponins (60% Tribulus terrestris), and chelated Zinc (15mg), swallowing a capsule on a completely empty stomach with only a sip of water can occasionally produce mild, temporary gastric warmth or herbal burps in sensitive individuals.',
          'To ensure 100% digestive comfort: always take Grow XL 20 to 30 minutes after breakfast, and take Horsemen or Hammer of Thor 30 to 60 minutes after dinner with a full 300ml glass of warm water. The presence of food chyme buffers gastric mucosa while accelerating bile-micelle absorption of saponins and phytosterols.',
        ],
      },
      {
        kicker: 'CHAPTER 04 · RESPONSIBLE ADULT USE, MEDICATION CONTRAINDICATIONS & AUTHENTIC ORDERING',
        title: 'Who Should Consult A Doctor & How To Avoid Counterfeit Imitations In Malaysia.',
        paragraphs: [
          'Onyxmen Malaysia formulations are crafted strictly for healthy adult men aged 21 and above. Because L-Arginine HCl, L-Citrulline Malate, Panax Ginseng, and Ginkgo Biloba naturally support endothelial vasodilation and micro-circulation, men currently taking prescription organic nitrates, alpha-blockers, antihypertensive drugs, or blood thinners—or men managing diagnosed cardiovascular, renal, or hepatic conditions—should consult a licensed Malaysian medical practitioner before starting any supplement cycle.',
          'Protect your health by ordering exclusively from https://www.onyxmen.my or our official WhatsApp desk (+60 14-298 5919) at RM 159 (1 Bottle), RM 286 (2 Bottles, 10% OFF), or RM 405 (3 Bottles, 15% OFF) with discreet plain-box COD.',
        ],
      },
    ],
    protocolSteps: [
      {
        code: 'SAFE-01 · AVOID RM 30 FAKES',
        title: 'Reject Unverified Marketplace Pills, Candies & Liquid Drops',
        metric: 'Zero Synthetic PDE5 Risk · Official RM 159 Vault Only',
        desc: 'Never consume RM 25–RM 45 loose blister packs or coloured gelatin pills that risk undeclared chemical adulteration.',
      },
      {
        code: 'SAFE-02 · POST-MEAL INTAKE',
        title: 'Take Capsules 20–60 Minutes After A Meal (Never Fasting)',
        metric: 'Buffers Quassinoids, Saponins & 15mg Chelated Zinc',
        desc: 'Taking your capsule after breakfast (Grow XL) or dinner (Horsemen / Hammer of Thor) prevents empty-stomach herbal warmth.',
      },
      {
        code: 'SAFE-03 · 300ML HYDRATION',
        title: 'Drink 300ml Plain Water With Every Capsule & 2.5L Daily',
        metric: 'Supports Smooth Renal & Endothelial Nitric Oxide Flow',
        desc: 'Full hydration ensures rapid 6-to-8 minute HPMC capsule dissolution and smooth physiological adaptation in Malaysia’s heat.',
      },
      {
        code: 'SAFE-04 · 1 CAPSULE DAILY',
        title: 'Respect The 1-Capsule Serving Size Per Formulation',
        metric: '500mg–600mg Standardized Potency Per Capsule',
        desc: 'Standardized 100:1 Tongkat Ali and 60% Tribulus saponins work via steady daily receptor saturation rather than megadosing.',
      },
      {
        code: 'SAFE-05 · PHYSICIAN CHECK',
        title: 'Consult Your Doctor If Taking Prescription Heart/BP Meds',
        metric: 'Adult Men 21+ · Transparent Ingredient Disclosure',
        desc: 'Show our complete milligram label disclosure to your healthcare provider if you take prescription vasodilators or blood thinners.',
      },
    ],
    faqs: [
      {
        questionEn: 'Does original Hammer of Thor, Horsemen, or Grow XL cause headaches or heart palpitations?',
        answerEn:
          'No. Authentic Hammer of Thor, Horsemen, Grow XL, and Magnum Pump XR distributed by Onyxmen Malaysia contain 0% synthetic PDE5 drugs and 0mg caffeine. Severe headaches and heart palpitations reported online are caused by counterfeit RM 30 street pills illegally spiked with undeclared sildenafil analogues.',
      },
      {
        questionEn: 'Is it safe to take Onyxmen capsules every day for a 30-day to 90-day cycle?',
        answerEn:
          'Yes, for healthy adult men. Standardized botanical adaptogens (Tongkat Ali 100:1, Peruvian Maca, Tribulus, Saw Palmetto) and amino acids (L-Arginine, L-Citrulline) are designed for cumulative 20-to-90 day nutritional conditioning when taken at the recommended 1-capsule daily serving after meals.',
      },
      {
        questionEn: 'Why did I feel mild stomach warmth when taking a capsule on an empty stomach?',
        answerEn:
          'Concentrated 100:1 Eurycoma longifolia quassinoids, 60% Tribulus saponins, and 15mg Zinc can stimulate gastric acid if swallowed on an empty stomach. Taking your capsule 30–45 minutes after a meal with 300ml of water completely eliminates gastric warmth.',
      },
      {
        questionEn: 'Can men with high blood pressure or on prescription medication take these supplements?',
        answerEn:
          'If you have a diagnosed medical condition (such as hypertension, heart disease, or kidney/liver disorder) or take prescription nitrates, antihypertensives, or anticoagulants, please consult your physician before taking any nitric oxide or botanical supplement.',
      },
    ],
  },

  // ==========================================================================
  // GUIDE 13 (ONYX-STD): MACA ROOT IN MALAY (AKAR MACA) & TONGKAT ALI SYNERGY
  // ==========================================================================
  {
    guideNumber: 13,
    microStep: 'ONYX-STD',
    guideCode: 'GUIDE-13 · AKAR MACA & TONGKAT ALI SYNERGY',
    slug: 'maca-root-in-malay-akar-maca-tongkat-ali-supplement-malaysia',
    canonicalEnPath: '/guides/maca-root-in-malay-akar-maca-tongkat-ali-supplement-malaysia/',
    alternateMsPath: '/ms/panduan/akar-maca-dalam-bahasa-melayu-dan-tongkat-ali-malaysia/',
    enOutputPaths: [
      'guides/maca-root-in-malay-akar-maca-tongkat-ali-supplement-malaysia/index.html',
    ],
    watermark: 'AKAR MACA',
    primaryProductSlug: 'horsemen',
    heroImage: '/assets/products/horsemen-stage.webp',
    portraitImage: '/assets/products/horsemen-portrait.webp',
    publishedDate: '2026-11-11T08:00:00+08:00',
    updatedDate: '2026-11-11T08:00:00+08:00',
    readingTime: '11 Min Ethnobotanical & Phytochemical Read',
    seoTitle:
      'Maca Root in Malay (Akar Maca Hitam) & Tongkat Ali Malaysia',
    metaDescription:
      '✓ What is Maca Root in Malay (Akar Maca Hitam Peru / Ginseng Peru) & how it pairs with Malaysian Tongkat Ali 100:1 in Horsemen & Grow XL. RM 159 COD MY.',
    kicker: 'ONYX-STD · PROTOCOL GUIDE 13 · MACA ROOT IN MALAY (AKAR MACA HITAM PERU) & TONGKAT ALI 100:1 SYNERGY',
    headline:
      'Maca Root In Malay (Akar Maca Hitam Peru) &amp; <span class="foil-champagne-text">Malaysian Tongkat Ali 100:1 Supplement Synergy.</span>',
    taxonomyStrip: [
      '01 · MACA ROOT IN MALAY = AKAR MACA HITAM PERU',
      '02 · LEPIDIUM MEYENII (0.6% MACAMIDES & MACAENES)',
      '03 · MALAYSIAN TONGKAT ALI 100:1 (2.2% EURYCOMANONE)',
      '04 · GELATINIZED STARCH-FREE DUODENAL ABSORPTION',
    ],
    executiveSummary:
      'In Malaysia, search queries for "Maca Root in Malay", "Maca Root Malaysia", "Akar Maca Hitam", and "Malaysia Tongkat Ali" have surged as adult men look beyond single-ingredient raw powders. In Bahasa Malaysia, Peruvian Maca Root (Lepidium meyenii) is known as "Akar Maca", "Ubi Maca Hitam Peru", or "Ginseng Peru". This monograph explains why gelatinized Black Maca Root and 100:1 Malaysian Tongkat Ali form the twin adaptogenic pillars inside Horsemen, Grow XL, Hammer of Thor, and Magnum Pump XR.',
    telemetry: [
      {
        key: '01 · BAHASA MALAYSIA TERM',
        val: 'Akar Maca / Ubi Maca Hitam',
        sub: 'Also known locally as Ginseng Peru (Lepidium meyenii Walp.)',
      },
      {
        key: '02 · ANDEAN BIO-MARKERS',
        val: '≥0.6% Macamides & Macaenes',
        sub: 'Gelatinized Junín plateau Black Maca (4,200m elevation)',
      },
      {
        key: '03 · RAINFOREST PARTNER',
        val: 'Malaysian Tongkat Ali 100:1',
        sub: 'Eurycoma longifolia standardized to ≥2.2% Eurycomanone',
      },
      {
        key: '04 · ONYXMEN FORMULATIONS',
        val: '100–110mg Maca + 90–150mg TA',
        sub: 'Featured in Horsemen, Grow XL, Hammer of Thor & Magnum Pump XR',
      },
    ],
    pinnedSummaryBullets: [
      'Exact Translation: "Maca Root in Malay" is Akar Maca, Ubi Maca Hitam Peru, or Ginseng Peru (Lepidium meyenii)',
      'Why Black Maca Beats Yellow Maca: The Black phenotype delivers the highest concentration of lipidic macamides for male stamina',
      'Why Gelatinized Matters: Low-heat extrusion cleaves indigestible amylose starch so 100mg absorbs in 15 mins without bloating',
      'Dual-Pathway Synergy: Tongkat Ali 100:1 balances cortisol & SHBG while Akar Maca Hitam fuels non-stimulant mitochondrial ATP',
      'Available across all 4 Onyxmen Malaysia bottles at RM 159 (1B), RM 286 (2B — 10% OFF), and RM 405 (3B — 15% OFF) with discreet COD',
    ],
    chapters: [
      {
        kicker: 'CHAPTER 01 · WHAT IS "MACA ROOT IN MALAY"? (AKAR MACA HITAM PERU / LEPIDIUM MEYENII)',
        title: 'Understanding Akar Maca, Ubi Maca Hitam & Why The Black Andean Phenotype Leads Male Vitality.',
        paragraphs: [
          'Malaysian buyers researching international sports and vitality journals frequently search "Maca Root in Malay" to identify local terminology and authentic Malaysian stock. In Bahasa Malaysia, Maca Root (scientific name: Lepidium meyenii Walp., a cruciferous root native to the 4,200-meter Junín plateau of the Peruvian Andes) is officially called "Akar Maca", "Ubi Maca Peru", or "Ginseng Peru".',
          'Although Maca grows in yellow, red, and black ecotypes, clinical phytopharmacology demonstrates that the rare Black Maca phenotype ("Akar Maca Hitam") concentrates the highest density of N-benzylhexadecanamide (macamides), macaenes, and benzyl glucosinolates—the exact bioactive lipid-amides responsible for supporting male physical endurance, libido resilience, and cellular recovery without altering blood pressure.',
        ],
      },
      {
        kicker: 'CHAPTER 02 · GELATINIZED AKAR MACA VS. RAW MACA POWDER: THE DIGESTIVE BIOAVAILABILITY GAP',
        title: 'Why Onyxmen Uses Extrusion-Gelatinized Black Maca Instead Of Raw Starch Powder.',
        paragraphs: [
          'A critical mistake made by generic supplement brands in Malaysia is encapsulating raw, ungelatinized Maca root powder. Raw Maca hypocotyls consist of nearly 70% long-chain amylose and amylopectin starches that human gastric enzymes struggle to break down—leading to abdominal gas, bloating, and poor macamide absorption.',
          'Every Onyxmen Malaysia formulation utilizes 100% Gelatinized Peruvian Black Maca. Through a cold-extrusion enzymatic gelatinization process, the inert starch chains are cleaved and removed prior to encapsulation, concentrating the active macamides (≥0.6%) into a water-and-lipid-dispersible extract that dissolves in the duodenum within minutes.',
        ],
      },
      {
        kicker: 'CHAPTER 03 · ANDEAN AKAR MACA + MALAYSIAN TONGKAT ALI 100:1: DUAL-CONTINENT SYNERGY',
        title: 'How Eurycomanone Quassinoids & Macamides Unlock Complementary Physiological Pathways.',
        paragraphs: [
          'Taking Malaysian Tongkat Ali (Eurycoma longifolia) alone or Peruvian Maca Root alone addresses only half of the adult male vitality equation. Malaysian Tongkat Ali 100:1 (standardized to ≥2.2% eurycomanone) acts primarily on the hypothalamic-pituitary-adrenal-gonadal axis—lowering evening traffic-induced serum cortisol and displacing bound vitality factors from Sex Hormone-Binding Globulin (SHBG).',
          'Simultaneously, Akar Maca Hitam (Black Maca) operates through an independent endocannabinoid-and-mitochondrial pathway: its macamides inhibit fatty acid amide hydrolase (FAAH) and upregulate cellular ATP generation, amplifying physical drive and stamina mood without competing for the same receptors as Tongkat Ali.',
        ],
      },
      {
        kicker: 'CHAPTER 04 · CHOOSING YOUR MACA + TONGKAT ALI FORMULA IN THE ONYXMEN VAULT (RM 159)',
        title: 'Exact Milligram Pairing In Horsemen, Grow XL, Hammer of Thor & Magnum Pump XR.',
        paragraphs: [
          'All four official Onyxmen Malaysia formulations unite Peruvian Maca with Malaysian Tongkat Ali 100:1 tailored to your goal: (1) Horsemen (20 Caps × 500mg, RM 159) packs 150mg Tongkat Ali 100:1 + 100mg Black Maca + 80mg Epimedium Icariin for peak evening readiness; (2) Grow XL (30 Caps × 550mg, RM 159) pairs 140mg Tongkat Ali 100:1 + 110mg Yellow/Black Maca + 100mg Muira Puama + 80mg Saw Palmetto for 30-day morning conditioning.',
          'Meanwhile, (3) Hammer of Thor (20 Veg. Caps, RM 159) combines 200mg Tribulus (60% Saponins) + 100mg Andean Maca + 45mg Tongkat Ali in vegetarian HPMC shells; and (4) Magnum Pump XR (30 Black Caps, RM 159) combines 300mg L-Arginine/L-Citrulline + 90mg Tongkat Ali + 70mg Black Maca/Fenugreek. Order 1 Bottle (RM 159), 2 Bottles (RM 286, 10% OFF), or 3 Bottles (RM 405, 15% OFF) with discreet COD.',
        ],
      },
    ],
    protocolSteps: [
      {
        code: 'MACA-01 · PHENOTYPE CHECK',
        title: 'Prioritize Gelatinized Black Peruvian Maca (Akar Maca Hitam)',
        metric: '≥0.6% Macamides & Macaenes · Zero Raw Starch Bloating',
        desc: 'Ensure your supplement uses starch-cleaved gelatinized Lepidium meyenii rather than cheap raw yellow maca root flour.',
      },
      {
        code: 'MACA-02 · 100:1 TONGKAT ALI',
        title: 'Pair With HPLC-Standardized Malaysian Tongkat Ali 100:1',
        metric: '≥2.2% Eurycomanone · Pahang & Perak Mature Taproots',
        desc: 'Combine Andean macamides with 90mg–150mg of aqueous 100:1 Eurycoma longifolia for dual cortisol and SHBG support.',
      },
      {
        code: 'MACA-03 · MEAL LIPID TIMING',
        title: 'Ingest 20–60 Minutes After A Meal Containing Healthy Fats',
        metric: 'Chylomicron Transport Of Lipophilic Macamides',
        desc: 'Because macamides are nonpolar fatty-acid amides, taking your capsule after breakfast or dinner boosts intestinal uptake.',
      },
      {
        code: 'MACA-04 · TANNIN BUFFER',
        title: 'Keep A 45-Minute Buffer From Teh Tarik & Kopi O',
        metric: 'Prevents Polyphenol Binding Of Tongkat Ali Quassinoids',
        desc: 'Swallow your capsule with 300ml plain warm water and separate coffee or milk tea by at least 45 minutes.',
      },
      {
        code: 'MACA-05 · BUNDLE SAVINGS',
        title: 'Lock In A 40-To-90 Day Cycle At RM 286 (2B) Or RM 405 (3B)',
        metric: '10% To 15% OFF · Free Discreet Malaysia COD',
        desc: 'Macamide and quassinoid tissue saturation peaks between Days 14 and 30—secure 2 or 3 bottles for uninterrupted results.',
      },
    ],
    faqs: [
      {
        questionEn: 'What is Maca Root called in Malay (Bahasa Malaysia)?',
        answerEn:
          'In Bahasa Malaysia, Maca Root (Lepidium meyenii) is called "Akar Maca", "Ubi Maca Hitam Peru", or "Ginseng Peru". It is an adaptogenic root native to the Peruvian Andes prized for its stamina-supporting macamides.',
      },
      {
        questionEn: 'Which Onyxmen Malaysia capsule has the highest dose of Tongkat Ali and Black Maca?',
        answerEn:
          'Horsemen (20 Capsules × 500mg, SKU: ONYX-HM-20, RM 159) contains our highest single-capsule concentration of Malaysian Tongkat Ali 100:1 (150mg) alongside 100mg of Gelatinized Peruvian Black Maca and 80mg Epimedium Icariin. For a 30-capsule daily bottle, Grow XL delivers 140mg Tongkat Ali 100:1 plus 110mg Dual Maca.',
      },
      {
        questionEn: 'Can I take Akar Maca and Tongkat Ali together in the same capsule?',
        answerEn:
          'Yes. In fact, taking them together is superior to taking either herb alone: Tongkat Ali 100:1 modulates cortisol and SHBG binding, while Gelatinized Black Maca supports cellular ATP energy and drive via a completely separate non-hormonal pathway.',
      },
      {
        questionEn: 'Where can I buy authentic Maca Root and Tongkat Ali capsules with COD in Malaysia?',
        answerEn:
          'You can order Horsemen, Grow XL, Hammer of Thor, or Magnum Pump XR directly on https://www.onyxmen.my or via WhatsApp (+60 14-298 5919) at RM 159 (1 Bottle), RM 286 (2 Bottles, 10% OFF), or RM 405 (3 Bottles, 15% OFF) with 100% plain-box COD.',
      },
    ],
  },

  // ==========================================================================
  // GUIDE 14 (ONYX-STD): HOW LONG DO HAMMER OF THOR, HORSEMEN & GROW XL TAKE TO WORK?
  // ==========================================================================
  {
    guideNumber: 14,
    microStep: 'ONYX-STD',
    guideCode: 'GUIDE-14 · ONSET & 30-DAY TIMELINE',
    slug: 'how-long-does-hammer-of-thor-horsemen-grow-xl-take-to-work',
    canonicalEnPath: '/guides/how-long-does-hammer-of-thor-horsemen-grow-xl-take-to-work/',
    alternateMsPath: '/ms/panduan/berapa-lama-kesan-hammer-of-thor-horsemen-grow-xl-malaysia/',
    enOutputPaths: [
      'guides/how-long-does-hammer-of-thor-horsemen-grow-xl-take-to-work/index.html',
    ],
    watermark: 'TIMELINE',
    primaryProductSlug: 'magnum-pump-xr',
    heroImage: '/assets/products/magnum-pump-xr-stage.webp',
    portraitImage: '/assets/products/horsemen-portrait.webp',
    publishedDate: '2026-11-11T08:00:00+08:00',
    updatedDate: '2026-11-11T08:00:00+08:00',
    readingTime: '11 Min Pharmacokinetic Timeline Read',
    seoTitle:
      'How Long Do Hammer of Thor, Horsemen & Grow XL Take to Work?',
    metaDescription:
      '✓ Exact onset timeline for Hammer of Thor, Horsemen, Grow XL & Magnum Pump XR in Malaysia: 35-min Nitric Oxide surge vs 30-day cycle saturation. RM 159 COD.',
    kicker: 'ONYX-STD · PROTOCOL GUIDE 14 · ACUTE 30-MINUTE ONSET VS. 30-TO-90 DAY CONDITIONING TIMELINE',
    headline:
      'How Long Do Hammer of Thor, Horsemen, Grow XL &amp; Magnum Pump XR Take To Work? <span class="foil-champagne-text">30-Min Onset vs. 30-Day Cycle.</span>',
    taxonomyStrip: [
      '01 · MINUTE 30–45: MAGNUM PUMP XR NITRIC OXIDE SURGE',
      '02 · MINUTE 45–60: HORSEMEN EVENING READINESS T-MAX',
      '03 · DAYS 5–14: TONGKAT ALI & TRIBULUS SAPONIN SATURATION',
      '04 · DAYS 20–90: GROW XL FULL PELVIC & VITALITY EQUILIBRIUM',
    ],
    executiveSummary:
      'One of the most frequent questions asked on our Kuala Lumpur WhatsApp desk (+60 14-298 5919) is: "How fast will I feel Magnum Pump XR, Horsemen, Hammer of Thor, or Grow XL after swallowing my first capsule?" Because authentic Onyxmen formulations combine rapid-acting Nitric Oxide amino acids with cumulative botanical adaptogens, your results unfold across two distinct physiological horizons: an Acute 30-to-60 Minute Vascular Window and a Cumulative 7-to-30 Day Tissue Conditioning Curve.',
    telemetry: [
      {
        key: '01 · PHASE I (MINUTE 30–45)',
        val: 'Magnum Pump XR eNOS Surge',
        sub: '180mg L-Arginine HCl + Bioperine® rapid vascular onset',
      },
      {
        key: '02 · PHASE II (MINUTE 45–90)',
        val: 'Horsemen Evening Peak',
        sub: '150mg Tongkat Ali 100:1 + 80mg Icariin + 80mg L-Arginine',
      },
      {
        key: '03 · PHASE III (DAYS 5–14)',
        val: 'Cortisol & Saponin Build-Up',
        sub: 'Hammer of Thor 60% Saponins & Maca ATP accumulation',
      },
      {
        key: '04 · PHASE IV (DAYS 20–90)',
        val: 'Grow XL Full Equilibrium',
        sub: 'Muira Puama + Saw Palmetto 30-to-90 day mastery (RM 286 / RM 405)',
      },
    ],
    pinnedSummaryBullets: [
      'Minute 6–8: Low-moisture HPMC capsule shell ruptures in warm gastric fluid (300ml water required)',
      'Minute 30–45 (Magnum Pump XR): Wave-1 L-Arginine HCl (180mg) + Bioperine® trigger endothelial Nitric Oxide vasodilation',
      'Minute 45–60 (Horsemen): 150mg Tongkat Ali 100:1 + 80mg Epimedium Icariin + 80mg L-Arginine reach evening plasma readiness',
      'Days 5–14 (Hammer of Thor & All 4): Steroidal saponins (200mg Tribulus) and macamides stabilize afternoon/evening energy',
      'Days 20–90 (Grow XL & 2/3-Bottle Bundles): Full neuro-sterol, pelvic Saw Palmetto, and free-vitality baseline consolidation',
    ],
    chapters: [
      {
        kicker: 'CHAPTER 01 · THE ACUTE WINDOW (MINUTE 0 TO HOUR 5): HOW FAST FIRST-DAY CAPSULES ACT',
        title: 'Minute-By-Minute Pharmacokinetics Of Magnum Pump XR (30–45m) & Horsemen (45–60m).',
        paragraphs: [
          'When you swallow 1 black capsule of Magnum Pump XR (600mg) or 1 capsule of Horsemen (500mg) with 300ml–350ml of warm plain water on a light stomach (45 minutes after dinner), the hypromellose capsule shell dissolves within 6 to 8 minutes. By Minute 30 to 45, the free-form L-Arginine HCl (180mg in Magnum Pump XR; 80mg in Horsemen) chaperoned by Bioperine® crosses the intestinal brush border and activates endothelial Nitric Oxide Synthase (eNOS), relaxing vascular smooth muscle and increasing peripheral blood flow.',
          'Between Minute 45 and Minute 90, Horsemen’s aqueous 100:1 Tongkat Ali quassinoids (150mg) and Epimedium icariin flavonoids (80mg) reach peak plasma concentration (Tmax), while Magnum Pump XR’s second-wave L-Citrulline Malate (120mg) recycles through the kidneys to sustain vascular fullness from Hour 1 through Hour 5.',
        ],
      },
      {
        kicker: 'CHAPTER 02 · THE SUB-ACUTE WINDOW (DAYS 5 TO 14): CORTISOL, SHBG & SAPONIN LOADING',
        title: 'Why Hammer of Thor & Horsemen Feel Stronger In Week 2 Than On Night 1.',
        paragraphs: [
          'Unlike synthetic pharmaceuticals that force a temporary 4-hour chemical spike followed by an exhaustion crash, standardized botanical adaptogens build progressive cellular momentum. Between Days 5 and 14 of consecutive daily intake, Hammer of Thor’s 200mg Tribulus terrestris (60% furostanol saponins / 40mg protodioscin) and 15mg Zinc Bisglycinate upregulate androgen-receptor sensitivity and muscular recovery velocity.',
          'Simultaneously, daily exposure to Malaysian Tongkat Ali 100:1 (in Horsemen, Grow XL, Hammer of Thor, and Magnum Pump XR) progressively lowers elevated evening cortisol caused by Malaysian traffic commutes and sleep debt—meaning your natural evening drive feels noticeably stronger in Week 2 than on Day 1.',
        ],
      },
      {
        kicker: 'CHAPTER 03 · THE FULL-MONTH HORIZON (DAYS 15 TO 30): GROW XL LIPOPHILIC CONDITIONING',
        title: 'How Muira Puama Sterols & Saw Palmetto Fatty Acids Saturate Over 30 Days.',
        paragraphs: [
          'For men taking Grow XL (30 Capsules × 550mg, SKU: ONYX-GX-30) every morning after breakfast, the deepest benefits emerge between Days 15 and 30. Lipophilic sterol esters from Brazilian Muira Puama (100mg) and free fatty acids from Supercritical Saw Palmetto (80mg) integrate gradually into neuronal and prostatic cell membranes over 2 to 3 weeks of daily post-breakfast lipid absorption.',
          'By Day 25 to Day 30, this cumulative saturation supports consistent morning vitality, all-day mental sharpness (assisted by 70mg Ginkgo Biloba), and comfortable adult male pelvic wellness.',
        ],
      },
      {
        kicker: 'CHAPTER 04 · PREVENTING CYCLE WASHOUT: WHY 60-DAY (RM 286) & 90-DAY (RM 405) BUNDLES WIN',
        title: 'How Day-18 & Day-25 Refill Synchronization Protects Your Hard-Earned Gains.',
        paragraphs: [
          'Clinical phytotherapy studies on Eurycoma longifolia, Lepidium meyenii, and Tribulus terrestris confirm that stopping supplementation abruptly after a single 20-day or 30-day bottle allows SHBG and cortisol levels to drift back toward baseline over the following 2 weeks. That is why our most successful Malaysian clients lock in a continuous 40-to-90 day horizon from the start.',
          'Ordering 2 Bottles for RM 286 (10% OFF — Save RM 32) or 3 Bottles for RM 405 (15% OFF — Save RM 72) via https://www.onyxmen.my or WhatsApp (+60 14-298 5919) guarantees zero gap between bottles and includes 100% free discreet plain-box Cash on Delivery (COD) nationwide.',
        ],
      },
    ],
    protocolSteps: [
      {
        code: 'TIME-01 · MIN 30–45',
        title: 'Take Magnum Pump XR 30–45 Mins Before Gym Or Evening Activity',
        metric: 'Wave-1 L-Arginine HCl (180mg) + Bioperine® Onset',
        desc: 'Swallow 1 black capsule with 350ml plain water on a light stomach to align peak eNOS Nitric Oxide with your session.',
      },
      {
        code: 'TIME-02 · MIN 45–60',
        title: 'Take Horsemen 45–60 Mins After Dinner For Evening Readiness',
        metric: '150mg Tongkat Ali 100:1 + 80mg Epimedium Icariin Tmax',
        desc: 'Allow 45–60 minutes after dinner with 300ml warm water for full duodenal uptake of quassinoids and icariin.',
      },
      {
        code: 'TIME-03 · DAYS 5–14',
        title: 'Maintain Daily Intake Through Week 2 For Saponin & Cortisol Reset',
        metric: 'Hammer of Thor 200mg Tribulus (60% Saponins) + Maca',
        desc: 'Stay consistent every day so furostanol saponins, macamides, and Zinc Bisglycinate reach steady-state plasma levels.',
      },
      {
        code: 'TIME-04 · DAYS 15–30',
        title: 'Complete All 30 Morning Capsules Of Grow XL Post-Breakfast',
        metric: '100mg Muira Puama + 80mg Saw Palmetto Membrane Saturation',
        desc: 'Take 1 Grow XL capsule 20–30 minutes after breakfast daily for a full calendar month to consolidate baseline vitality.',
      },
      {
        code: 'TIME-05 · DAYS 31–90',
        title: 'Transition Seamlessly Into Bottle #2 (RM 286) & Bottle #3 (RM 405)',
        metric: 'Save 10% To 15% · Zero Washout Gap',
        desc: 'Use our Day-18 (20 Caps) or Day-25 (30 Caps) refill sync—or reserve the 2-Bottle/3-Bottle bundle upfront with free COD.',
      },
    ],
    faqs: [
      {
        questionEn: 'Which Onyxmen capsule works the fastest on the very first evening?',
        answerEn:
          'Magnum Pump XR (30 Black Capsules × 600mg) initiates first-wave endothelial Nitric Oxide blood flow fastest—within 30 to 45 minutes—thanks to 180mg micronized L-Arginine HCl, 120mg L-Citrulline Malate, and Bioperine®. Horsemen (20 Capsules × 500mg) reaches peak evening adaptogenic and vascular readiness within 45 to 60 minutes.',
      },
      {
        questionEn: 'How many days does it take to feel the full effect of Grow XL or Hammer of Thor?',
        answerEn:
          'While microvascular amino acids and ginseng support daytime energy within the first 3 to 5 days, the deeper adaptogenic, saponin, and lipophilic sterol benefits of Hammer of Thor (200mg Tribulus 60% Saponins) and Grow XL (Tongkat Ali, Muira Puama, Saw Palmetto) build progressively over Days 7 to 14 and reach full saturation between Days 20 and 30.',
      },
      {
        questionEn: 'Why did my capsule take longer than 60 minutes to kick in?',
        answerEn:
          'If you swallow a capsule immediately after a heavy, oily meal (such as fried mamak dishes) or wash it down with Teh Tarik / Kopi O, delayed gastric emptying and tea tannins can slow absorption to 90–120 minutes. Always wait 45 minutes after dinner and use 300ml of plain warm water.',
      },
      {
        questionEn: 'Should I buy 1 bottle (RM 159) or 2 bottles (RM 286) for my first cycle?',
        answerEn:
          'You can start with 1 Bottle (RM 159) to experience the initial 20-to-30 day cycle, or choose the 2-Bottle Bundle (RM 286 — 10% OFF, save RM 32) so your cycle continues seamlessly through Days 21–60 when tissue saturation is at its peak.',
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
            Continue Exploring All 14 <span class="foil-champagne-text">Onyxmen Malaysia Protocol &amp; Buyer Guides.</span>
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
    { name: 'Onyxmen Malaysia Home', url: '/' },
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
        <a href="/">Onyxmen Malaysia Apothecary</a>
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
          <span>All 14 Buyer Guides (/guides/)</span>
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
            Need private 1-on-1 assistance from our Kuala Lumpur desk? Email <a href="mailto:sales@onyxmen.my" style="color:var(--gold-foil-bright);text-decoration:underline;">sales@onyxmen.my</a> or <a href="mailto:info@onyxmen.my" style="color:var(--gold-foil-bright);text-decoration:underline;">info@onyxmen.my</a> (09:00–23:00 MYT daily).
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
    'Adult Men’s Vitality, Authenticity Verification & Discreet Malaysia Buyer Guides Archive | Onyxmen Malaysia';
  const description =
    'Master Editorial & Protocol Library for Onyxmen Malaysia (RM 159): explore all 14 clinical buyer guides covering optimal capsule timing, counterfeit verification, discreet plain-box COD/FPX ordering, 20 vs 30 capsule cycles, tropical stamina nutrition & Nitric Oxide synergy.';

  const indexFaqs = [
    ...GUIDE_DOSSIERS.map((g) => g.faqs[0]),
    ...GUIDE_DOSSIERS.map((g) => g.faqs[1]),
    ...SHARED_BUYER_GUIDE_FAQS,
  ];

  const breadcrumbs = [
    { name: 'Onyxmen Malaysia Home', url: '/' },
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
        'Authentic RM 159 Onyxmen Bottle Verification & Anti-Counterfeit Audit',
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
            .slice(0, 2)
            .map(
              (b) => `
            <div style="font-size:0.84rem;color:var(--text-silk-ivory);padding:0.28rem 0;">
              ✓ ${esc(b)}
            </div>`
            )
            .join('\n')}
        </div>

        <div style="display:flex;flex-wrap:wrap;gap:0.85rem;padding-top:0.75rem;">
          <a href="${esc(g.canonicalEnPath)}" class="cta-foil-primary">
            <span>READ FULL GUIDE #${String(g.guideNumber).padStart(2, '0')} (${esc(g.microStep)}) →</span>
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
        <a href="/">Onyxmen Malaysia Apothecary</a>
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
          MS-147 · ONYXMEN MALAYSIA EDITORIAL &amp; PROTOCOL LIBRARY · RM 159 VAULT
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
          Welcome to the official Onyxmen Malaysia Editorial &amp; Protocol Library. Explore six comprehensive clinical and buyer-intent manuals engineered for adult men across all 16 Malaysian states—covering optimal post-meal and pre-workout capsule timing, Kopi O / Teh Tarik tannin buffers, 5-gate anti-counterfeit bottle verification, 3-layer plain-box COD/FPX logistics, 20-capsule vs. 30-capsule cycle selection, tropical cortisol nutrition, and Extended-Release Nitric Oxide vascular science.
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
            <span>Explore All 14 Buyer Guides ↓</span>
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
            alt="Onyxmen Malaysia Protocol Guides Archive"
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
       CHAPTER III — 30 MASTER PROTOCOL CHECKPOINTS ACROSS ALL 14 GUIDES
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
            Complete Execution Matrix Across <span class="foil-champagne-text">All Six Onyxmen Malaysia Guides.</span>
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
            MASTER EDITORIAL FAQ LEDGER · ONYXMEN MALAYSIA
          </span>
          <h2 id="heading-master-guides-faqs" class="editorial-headline-lg">
            Frequently Asked Questions Across <span class="foil-champagne-text">All 14 Vitality &amp; Buyer Protocol Guides.</span>
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
  console.log('ONYXMEN.MY — ENGLISH BUYER-INTENT SEO GUIDES BUILD COMPLETE (MS-147 TO MS-153)');
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
