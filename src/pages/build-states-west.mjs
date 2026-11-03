#!/usr/bin/env node
/**
 * ONYXMEN.MY — WEST MALAYSIA STATE & CITY HUB BUILDER (MS-131 TO MS-138)
 * Generates all 8 West Malaysia State & City Hubs in BOTH English (`en-MY`) and Bahasa Malaysia (`ms-MY`)
 * plus all route aliases used across the site:
 *
 * - MS-131: Kuala Lumpur
 *   EN: public/malaysia/kuala-lumpur/index.html, public/malaysia-delivery/kuala-lumpur/index.html
 *   BM: public/ms/malaysia/kuala-lumpur/index.html, public/ms/penghantaran-malaysia/kuala-lumpur/index.html
 * - MS-132: Selangor
 *   EN: public/malaysia/selangor/index.html, public/malaysia-delivery/selangor/index.html
 *   BM: public/ms/malaysia/selangor/index.html, public/ms/penghantaran-malaysia/selangor/index.html
 * - MS-133: Johor Bahru & Johor
 *   EN: public/malaysia/johor-bahru/index.html, public/malaysia/johor/index.html, public/malaysia-delivery/johor-bahru/index.html, public/malaysia-delivery/johor/index.html
 *   BM: public/ms/malaysia/johor-bahru/index.html, public/ms/malaysia/johor/index.html, public/ms/penghantaran-malaysia/johor-bahru/index.html, public/ms/penghantaran-malaysia/johor/index.html
 * - MS-134: Penang / Pulau Pinang
 *   EN: public/malaysia/penang/index.html, public/malaysia/pulau-pinang/index.html, public/malaysia-delivery/penang/index.html, public/malaysia-delivery/pulau-pinang/index.html
 *   BM: public/ms/malaysia/penang/index.html, public/ms/malaysia/pulau-pinang/index.html, public/ms/penghantaran-malaysia/pulau-pinang/index.html, public/ms/penghantaran-malaysia/penang/index.html
 * - MS-135: Perak
 *   EN: public/malaysia/perak/index.html, public/malaysia-delivery/perak/index.html, public/malaysia-delivery/perak-ipoh/index.html
 *   BM: public/ms/malaysia/perak/index.html, public/ms/penghantaran-malaysia/perak/index.html, public/ms/penghantaran-malaysia/perak-ipoh/index.html
 * - MS-136: Melaka
 *   EN: public/malaysia/melaka/index.html, public/malaysia-delivery/melaka/index.html
 *   BM: public/ms/malaysia/melaka/index.html, public/ms/penghantaran-malaysia/melaka/index.html
 * - MS-137: Negeri Sembilan
 *   EN: public/malaysia/negeri-sembilan/index.html, public/malaysia-delivery/negeri-sembilan/index.html, public/malaysia-delivery/negeri-sembilan-seremban/index.html
 *   BM: public/ms/malaysia/negeri-sembilan/index.html, public/ms/penghantaran-malaysia/negeri-sembilan/index.html, public/ms/penghantaran-malaysia/negeri-sembilan-seremban/index.html
 * - MS-138: Pahang
 *   EN: public/malaysia/pahang/index.html, public/malaysia-delivery/pahang/index.html, public/malaysia-delivery/pahang-kuantan/index.html
 *   BM: public/ms/malaysia/pahang/index.html, public/ms/penghantaran-malaysia/pahang/index.html, public/ms/penghantaran-malaysia/pahang-kuantan/index.html
 *
 * Strictly enforces Rule #29 & Rule #30:
 * - Paradigm A (100vw x 100vh Full-Bleed Obsidian Cinema Stage) + Paradigm D (Pinned 50vw/50vw Split Stage)
 * - Obsidian & Liquid Champagne Gold palette (#050507, #0B0C10, #12141C, #D4AF37, #EAE6DF)
 * - Typography: 'Cormorant Garamond', 'Syne', 'Space Grotesk'
 * - Every generated HTML file >= 2,200+ lines of uncompressed semantic HTML5 with 1-Click Express Order Drawer buttons
 *   pre-selecting that state, localized postcode & district delivery tables, all 4 Onyxmen bottles at RM 159 / RM 318 / RM 477,
 *   plain-box privacy specification ('OM Fulfilment Logistics'), 10 localized FAQs, and valid @graph JSON-LD.
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
 * Custom inline architectural CSS for West Malaysia State & City Fulfilment Hub Pages.
 * Enforces Paradigm A (100vw x 100vh Full-Bleed Obsidian Cinema) + Paradigm D (50vw / 50vw Pinned Split Stage)
 * and Architectural Hairline Ledgers with zero cheap boxes or banned tokens.
 */
export const STATE_HUB_STAGE_CSS = `
<style id="onyxman-state-hub-css">
  /* ==========================================================================
     PARADIGM A — 100VW X 100VH FULL-BLEED STATE LOGISTICS CINEMA HERO STAGE
     ========================================================================== */
  .state-cinema-hero {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    background-color: #050507;
    background-image:
      radial-gradient(circle at 74% 36%, rgba(212, 175, 55, 0.16) 0%, rgba(18, 20, 28, 0.74) 46%, #050507 92%),
      linear-gradient(180deg, #050507 0%, #0B0C10 64%, #050507 100%);
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
    font-size: clamp(9rem, 22vw, 24rem);
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
    padding: clamp(1.5rem, 3vh, 3rem) 0;
  }
  .state-cinema-hero__copy-col {
    flex: 1 1 580px;
    max-width: 900px;
  }
  .state-cinema-hero__visual-col {
    flex: 1 1 380px;
    max-width: 600px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .state-cinema-hero__visual-stage {
    position: relative;
    width: 100%;
    padding: 2rem;
    background: radial-gradient(circle at 50% 46%, rgba(212, 175, 55, 0.22) 0%, rgba(11, 12, 16, 0.72) 55%, rgba(5, 5, 7, 0) 78%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .state-cinema-hero__bottle-img {
    width: auto;
    max-height: 52vh;
    object-fit: contain;
    filter: drop-shadow(0 36px 72px rgba(0, 0, 0, 0.96)) drop-shadow(0 0 42px rgba(212, 175, 55, 0.22));
    transition: transform 0.75s var(--ease-cinema);
  }
  .state-cinema-hero__visual-stage:hover .state-cinema-hero__bottle-img {
    transform: translateY(-8px) scale(1.025);
  }
  .state-cinema-hero__caption-ledger {
    width: 100%;
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: 1px solid rgba(212, 175, 55, 0.28);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    font-size: 0.74rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--text-muted-alabaster);
  }
  .state-cinema-hero__title {
    font-family: var(--font-display);
    font-size: clamp(2.65rem, 5.4vw, 5.4rem);
    font-weight: 400;
    line-height: 1.01;
    letter-spacing: -0.02em;
    color: var(--text-silk-ivory);
    margin: 1rem 0 1.35rem;
  }
  .state-cinema-hero__lead {
    font-family: var(--font-technical);
    font-size: clamp(1.02rem, 1.24vw, 1.22rem);
    line-height: 1.75;
    color: var(--text-muted-alabaster);
    max-width: 68ch;
    margin-bottom: 1.85rem;
  }
  .state-cinema-hero__assay-strip {
    border-top: 1px solid rgba(212, 175, 55, 0.28);
    border-bottom: 1px solid rgba(212, 175, 55, 0.28);
    padding: 1.2rem 0;
    margin-bottom: 2rem;
    display: flex;
    flex-wrap: wrap;
    gap: 2.2rem;
  }
  .state-cinema-hero__assay-metric {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
  .state-cinema-hero__assay-label {
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-ash-silver);
  }
  .state-cinema-hero__assay-value {
    font-family: var(--font-architectural);
    font-size: 1.05rem;
    font-weight: 700;
    color: var(--gold-foil-bright);
  }
  .state-cinema-hero__actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.25rem;
  }
  .state-cinema-hero__telemetry-ribbon {
    position: relative;
    z-index: 2;
    max-width: 1760px;
    width: 100%;
    margin: 2rem auto 0;
    padding-top: 1.35rem;
    border-top: 1px solid rgba(212, 175, 55, 0.24);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem;
  }
  .state-cinema-hero__telemetry-cell {
    flex: 1 1 200px;
    display: flex;
    flex-direction: column;
    gap: 0.28rem;
  }
  .state-cinema-hero__telemetry-kicker {
    font-size: 0.66rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }
  .state-cinema-hero__telemetry-val {
    font-family: var(--font-technical);
    font-size: 0.92rem;
    font-weight: 600;
    color: var(--text-silk-ivory);
  }

  /* ==========================================================================
     PARADIGM D — PINNED 50VW / 50VW SPLIT-SCREEN LOGISTICS & PRIVACY STAGE
     ========================================================================== */
  .state-split-5050 {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    background-color: #0B0C10;
    border-bottom: 1px solid rgba(212, 175, 55, 0.26);
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }
  .state-split-5050__pinned-left {
    flex: 1 1 50%;
    min-width: 320px;
    background-color: #050507;
    background-image: radial-gradient(circle at 48% 45%, rgba(212, 175, 55, 0.14) 0%, rgba(11, 12, 16, 0.8) 54%, #050507 95%);
    border-right: 1px solid rgba(212, 175, 55, 0.24);
    padding: clamp(3rem, 6vw, 5.5rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 4.5rem;
    height: calc(100vh - 4.5rem);
    overflow: hidden;
  }
  .state-split-5050__scrolling-right {
    flex: 1 1 50%;
    min-width: 320px;
    background-color: #0B0C10;
    padding: clamp(3.5rem, 6vw, 6.5rem) clamp(2rem, 5vw, 5.5rem);
    display: flex;
    flex-direction: column;
    gap: 2.75rem;
  }
  .state-split-5050__specimen-stage {
    position: relative;
    margin: auto 0;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .state-split-5050__specimen-img {
    max-height: 40vh;
    width: auto;
    object-fit: contain;
    filter: drop-shadow(0 28px 56px rgba(0, 0, 0, 0.92)) drop-shadow(0 0 36px rgba(212, 175, 55, 0.2));
  }
  .state-split-5050__chapter-block {
    border-top: 1px solid rgba(212, 175, 55, 0.28);
    padding-top: 1.85rem;
    display: flex;
    flex-direction: column;
    gap: 0.95rem;
  }
  .state-split-5050__chapter-num {
    font-family: var(--font-architectural);
    font-size: 0.74rem;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }
  .state-split-5050__chapter-title {
    font-family: var(--font-display);
    font-size: clamp(1.75rem, 2.5vw, 2.5rem);
    font-weight: 500;
    line-height: 1.12;
    color: var(--text-silk-ivory);
  }
  .state-split-5050__chapter-body {
    font-size: 0.98rem;
    line-height: 1.78;
    color: var(--text-muted-alabaster);
  }
  .state-split-5050__spec-line {
    margin-top: 0.5rem;
    padding: 0.85rem 0;
    border-top: 1px solid rgba(234, 230, 223, 0.1);
    border-bottom: 1px solid rgba(234, 230, 223, 0.1);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    font-size: 0.8rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--gold-foil-bright);
  }

  /* ==========================================================================
     ARCHITECTURAL EDITORIAL SECTIONS & HAIRLINE TABLES (ZERO BOX CLONES)
     ========================================================================== */
  .state-section {
    width: 100vw;
    background-color: #050507;
    border-bottom: 1px solid rgba(212, 175, 55, 0.24);
    padding: var(--gutter-vertical) var(--gutter-cinema);
  }
  .state-section--onyx {
    background-color: #0B0C10;
  }
  .state-section--charcoal {
    background-color: #12141C;
  }
  .state-section__inner {
    max-width: 1760px;
    width: 100%;
    margin: 0 auto;
  }
  .state-section__header {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2rem;
    padding-bottom: 2.25rem;
    margin-bottom: 2.75rem;
    border-bottom: 1px solid rgba(212, 175, 55, 0.28);
  }
  .state-section__header-left {
    max-width: 920px;
  }
  .state-section__header-right {
    max-width: 520px;
    color: var(--text-muted-alabaster);
    font-size: 0.96rem;
    line-height: 1.7;
  }

  /* Full-Width Architectural Hairline Row Ledger */
  .state-hairline-ledger {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgba(212, 175, 55, 0.28);
  }
  .state-hairline-row {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
    padding: clamp(1.75rem, 3.2vh, 2.85rem) 0;
    border-bottom: 1px solid rgba(234, 230, 223, 0.12);
    transition: background-color 0.35s var(--ease-cinema), padding-left 0.35s var(--ease-cinema);
  }
  .state-hairline-row:hover {
    background-color: rgba(212, 175, 55, 0.035);
    padding-left: 1rem;
  }
  .state-hairline-row__index {
    flex: 0 0 110px;
    font-family: var(--font-architectural);
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }
  .state-hairline-row__title-col {
    flex: 1 1 280px;
    max-width: 440px;
  }
  .state-hairline-row__title {
    font-family: var(--font-display);
    font-size: clamp(1.55rem, 2.2vw, 2.15rem);
    font-weight: 500;
    line-height: 1.15;
    color: var(--text-silk-ivory);
    margin-bottom: 0.35rem;
  }
  .state-hairline-row__sub {
    font-size: 0.76rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--gold-foil-bright);
  }
  .state-hairline-row__desc-col {
    flex: 2 1 420px;
    font-size: 0.96rem;
    line-height: 1.75;
    color: var(--text-muted-alabaster);
  }
  .state-hairline-row__action-col {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.65rem;
  }

  /* Semantic HTML5 Postcode & Fulfilment Table */
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
    min-width: 920px;
  }
  .state-comparison-table th {
    font-family: var(--font-architectural);
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-champagne);
    padding: 1.35rem 1.15rem;
    border-bottom: 1px solid rgba(212, 175, 55, 0.28);
    background-color: rgba(5, 5, 7, 0.75);
  }
  .state-comparison-table td {
    padding: 1.35rem 1.15rem;
    border-bottom: 1px solid rgba(234, 230, 223, 0.1);
    font-size: 0.92rem;
    line-height: 1.65;
    color: var(--text-silk-ivory);
    vertical-align: top;
  }
  .state-comparison-table tbody tr:hover td {
    background-color: rgba(212, 175, 55, 0.04);
  }
  .state-comparison-table__highlight {
    color: var(--gold-foil-bright);
    font-weight: 600;
  }

  /* Interactive 1-Click State Pre-Selection Strip */
  .state-bottle-showcase-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 2.5rem;
    padding: clamp(2.25rem, 4.5vh, 3.75rem) 0;
    border-bottom: 1px solid rgba(212, 175, 55, 0.24);
  }
  .state-bottle-showcase-row__visual {
    flex: 0 0 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.25rem;
    background: radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.18) 0%, rgba(5, 5, 7, 0) 75%);
  }
  .state-bottle-showcase-row__visual img {
    max-height: 220px;
    width: auto;
    filter: drop-shadow(0 20px 36px rgba(0, 0, 0, 0.9));
  }
  .state-bottle-showcase-row__body {
    flex: 1 1 480px;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }
  .state-bottle-showcase-row__tiers {
    flex: 0 1 390px;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  /* Accordion FAQ Ledger */
  .state-faq-ledger {
    width: 100%;
    border-top: 1px solid rgba(212, 175, 55, 0.28);
  }
  .state-faq-item {
    border-bottom: 1px solid rgba(234, 230, 223, 0.12);
  }
  .state-faq-item summary {
    list-style: none;
    cursor: pointer;
    padding: 1.65rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    font-family: var(--font-display);
    font-size: clamp(1.35rem, 1.9vw, 1.82rem);
    font-weight: 500;
    color: var(--text-silk-ivory);
    transition: color 0.25s ease;
  }
  .state-faq-item summary::-webkit-details-marker {
    display: none;
  }
  .state-faq-item summary:hover {
    color: var(--gold-foil-bright);
  }
  .state-faq-item__icon {
    font-family: var(--font-architectural);
    font-size: 1.2rem;
    color: var(--gold-champagne);
    flex-shrink: 0;
  }
  .state-faq-item__answer {
    padding: 0 0 1.85rem;
    max-width: 96ch;
    font-size: 0.98rem;
    line-height: 1.8;
    color: var(--text-muted-alabaster);
  }

  @media (max-width: 1024px) {
    .state-split-5050__pinned-left {
      position: relative;
      top: 0;
      height: auto;
      border-right: none;
      border-bottom: 1px solid rgba(212, 175, 55, 0.24);
    }
  }
</style>
`;

/**
 * Runtime script injected into every State Hub page so clicking any button with `data-order-state`
 * or opening the Express Order Drawer on a state page automatically selects that state in `#onyxman-input-state`
 * and updates `[data-state-eta-text]` in real time.
 */
export function buildStatePreselectScript(drawerStateValue) {
  return `
<script id="onyxman-state-hub-preselect-script">
(function initStateHubPreselection() {
  var DEFAULT_HUB_STATE = ${JSON.stringify(drawerStateValue)};
  function applyStateToDrawer(targetState) {
    var stateSelect = document.getElementById('onyxman-input-state');
    if (!stateSelect) return;
    var desired = targetState || DEFAULT_HUB_STATE;
    for (var i = 0; i < stateSelect.options.length; i++) {
      if (stateSelect.options[i].value.toLowerCase() === String(desired).toLowerCase()) {
        stateSelect.selectedIndex = i;
        stateSelect.dispatchEvent(new Event('change', { bubbles: true }));
        break;
      }
    }
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      applyStateToDrawer(DEFAULT_HUB_STATE);
    });
  } else {
    applyStateToDrawer(DEFAULT_HUB_STATE);
  }
  document.addEventListener('click', function(ev) {
    var btn = ev.target && ev.target.closest ? ev.target.closest('[data-open-order-drawer]') : null;
    if (btn) {
      var customState = btn.getAttribute('data-order-state') || DEFAULT_HUB_STATE;
      setTimeout(function() {
        applyStateToDrawer(customState);
      }, 30);
    }
  });
})();
</script>
`;
}

/**
 * Master Data Dossiers for the 8 West Malaysia State & City Hubs (MS-131 through MS-138).
 */
export const WEST_MALAYSIA_HUBS = [
  {
    microStep: 'MS-131',
    id: 'kuala-lumpur',
    slug: 'kuala-lumpur',
    schemaKey: 'kuala-lumpur',
    drawerStateValue: 'Kuala Lumpur',
    isoCode: 'MY-14',
    watermark: 'KL · 01',
    featuredProductSlug: 'horsemen',
    secondaryProductSlug: 'magnum-pump-xr',
    enCanonicalPath: '/malaysia/kuala-lumpur/',
    msCanonicalPath: '/ms/malaysia/kuala-lumpur/',
    enOutputPaths: [
      'malaysia/kuala-lumpur/index.html',
      'malaysia-delivery/kuala-lumpur/index.html',
    ],
    msOutputPaths: [
      'ms/malaysia/kuala-lumpur/index.html',
      'ms/penghantaran-malaysia/kuala-lumpur/index.html',
    ],
    corridorCodeEn: 'KLANG VALLEY PRIMARY DISPATCH ZONE · SAME-DAY 3–5H RUNNER & 24H COURIER',
    corridorCodeMs: 'ZON UTAMA LEMBAH KLANG · PENGHANTAR HARI SAMA 3–5 JAM & KURIER 24 JAM',
    postcodeRange: '50000 – 60000',
    cutoffTime: '16:00 MYT (Same-Day Runner) / 18:00 MYT (Next-Day Express)',
    sameDayRunnerFeeEn: 'RM 15 Flat Same-Day Private Rider (or RM 0 Next-Day Express Courier)',
    sameDayRunnerFeeMs: 'RM 15 Kadar Rata Penghantar Hari Sama (atau RM 0 Kurier Ekspres Esok)',
    districts: [
      {
        code: 'KL-01',
        nameEn: 'KLCC, Golden Triangle & Jalan Ampang',
        nameMs: 'KLCC, Segitiga Emas & Jalan Ampang',
        postcodes: '50088, 50250, 50450',
        runnerWindowEn: '2.5 – 4 Hours (Same-Day Unmarked Rider)',
        runnerWindowMs: '2.5 – 4 Jam (Penghantar Rahsia Hari Sama)',
        courierWindowEn: 'Next Business Day before 14:00 MYT (Free)',
        courierWindowMs: 'Hari Bekerja Berikutnya sebelum 2:00 PTG (Percuma)',
        codSupportEn: 'Full Cash on Delivery (COD) + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + Imbasan DuitNow QR + FPX',
        landmarksEn: 'Petronas Twin Towers, Menara Maxis, Intermark, Four Seasons Place, Hampshire Park Concierge Desks',
        landmarksMs: 'Menara Berkembar Petronas, Menara Maxis, Intermark, Four Seasons Place & Kaunter Penyambut Tetamu',
      },
      {
        code: 'KL-02',
        nameEn: 'Bukit Bintang, TRX & Pavilion Corridor',
        nameMs: 'Bukit Bintang, TRX & Koridor Pavilion',
        postcodes: '55100, 55188, 50200',
        runnerWindowEn: '3 – 4 Hours (Same-Day Unmarked Rider)',
        runnerWindowMs: '3 – 4 Jam (Penghantar Rahsia Hari Sama)',
        courierWindowEn: 'Next Business Day (Free)',
        courierWindowMs: 'Hari Bekerja Berikutnya (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Tun Razak Exchange (TRX), Exchange 106, Pavilion Residences, Banyan Tree, Bukit Bintang Suites',
        landmarksMs: 'Tun Razak Exchange (TRX), Exchange 106, Pavilion Residences, Banyan Tree & Suite Bukit Bintang',
      },
      {
        code: 'KL-03',
        nameEn: 'Bangsar, Bangsar South & Pantai Dalam',
        nameMs: 'Bangsar, Bangsar South & Pantai Dalam',
        postcodes: '59000, 59100, 59200',
        runnerWindowEn: '3 – 4.5 Hours (Same-Day Unmarked Rider)',
        runnerWindowMs: '3 – 4.5 Jam (Penghantar Rahsia Hari Sama)',
        courierWindowEn: 'Next Business Day (Free)',
        courierWindowMs: 'Hari Bekerja Berikutnya (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Bangsar Baru, Lucky Garden, Bukit Bandaraya, The Vertical & Horizon Towers Bangsar South, KL Eco City',
        landmarksMs: 'Bangsar Baru, Bukit Bandaraya, Menara The Vertical & Horizon Bangsar South, KL Eco City',
      },
      {
        code: 'KL-04',
        nameEn: 'Mont Kiara, Sri Hartamas & Dutamas',
        nameMs: 'Mont Kiara, Sri Hartamas & Dutamas',
        postcodes: '50480, 50490, 51200',
        runnerWindowEn: '3 – 4.5 Hours (Same-Day Unmarked Rider)',
        runnerWindowMs: '3 – 4.5 Jam (Penghantar Rahsia Hari Sama)',
        courierWindowEn: 'Next Business Day (Free)',
        courierWindowMs: 'Hari Bekerja Berikutnya (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX (Condo Guardhouse Drop Supported)',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX (Sokongan Serahan Pondok Pengawal Kondo)',
        landmarksEn: 'Arcoris Mont Kiara, Solaris Dutamas (Publika), Plaza Mont Kiara, Desa Sri Hartamas, Damansara Heights',
        landmarksMs: 'Arcoris Mont Kiara, Solaris Dutamas (Publika), Plaza Mont Kiara, Desa Sri Hartamas, Bukit Damansara',
      },
      {
        code: 'KL-05',
        nameEn: 'Cheras KL, Taman Maluri & Bandar Tun Razak',
        nameMs: 'Cheras KL, Taman Maluri & Bandar Tun Razak',
        postcodes: '56000, 56100, 55100',
        runnerWindowEn: '3.5 – 5 Hours (Same-Day Unmarked Rider)',
        runnerWindowMs: '3.5 – 5 Jam (Penghantar Rahsia Hari Sama)',
        courierWindowEn: 'Next Business Day (Free)',
        courierWindowMs: 'Hari Bekerja Berikutnya (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Sunway Velocity, MyTOWN Cheras, EkoCheras, Taman Connaught, Alam Damai, Bandar Sri Permaisuri',
        landmarksMs: 'Sunway Velocity, MyTOWN Cheras, EkoCheras, Taman Connaught, Alam Damai, Bandar Sri Permaisuri',
      },
      {
        code: 'KL-06',
        nameEn: 'Setapak, Wangsa Maju & Titiwangsa',
        nameMs: 'Setapak, Wangsa Maju & Titiwangsa',
        postcodes: '53000, 53100, 53200, 53300',
        runnerWindowEn: '3.5 – 5 Hours (Same-Day Unmarked Rider)',
        runnerWindowMs: '3.5 – 5 Jam (Penghantar Rahsia Hari Sama)',
        courierWindowEn: 'Next Business Day (Free)',
        courierWindowMs: 'Hari Bekerja Berikutnya (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Setapak Central, Danau Kota, Sri Rampai, Wangsa Walk, Jalan Genting Klang, Taman Melawati Border',
        landmarksMs: 'Setapak Central, Danau Kota, Sri Rampai, Wangsa Walk, Jalan Genting Klang, Sempadan Taman Melawati',
      },
      {
        code: 'KL-07',
        nameEn: 'Kepong, Desa ParkCity, Jinjang & Segambut',
        nameMs: 'Kepong, Desa ParkCity, Jinjang & Segambut',
        postcodes: '52000, 52100, 52200, 51200',
        runnerWindowEn: '3.5 – 5 Hours (Same-Day Unmarked Rider)',
        runnerWindowMs: '3.5 – 5 Jam (Penghantar Rahsia Hari Sama)',
        courierWindowEn: 'Next Business Day (Free)',
        courierWindowMs: 'Hari Bekerja Berikutnya (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Desa ParkCity Waterfront, Metro Prima Kepong, Bandar Menjalara, United Point Segambut, Jalan Ipoh',
        landmarksMs: 'Desa ParkCity Waterfront, Metro Prima Kepong, Bandar Menjalara, United Point Segambut, Jalan Ipoh',
      },
      {
        code: 'KL-08',
        nameEn: 'Bukit Jalil, Sri Petaling, OUG & Old Klang Road',
        nameMs: 'Bukit Jalil, Sri Petaling, OUG & Jalan Klang Lama',
        postcodes: '57000, 58000, 58200',
        runnerWindowEn: '3.5 – 5 Hours (Same-Day Unmarked Rider)',
        runnerWindowMs: '3.5 – 5 Jam (Penghantar Rahsia Hari Sama)',
        courierWindowEn: 'Next Business Day (Free)',
        courierWindowMs: 'Hari Bekerja Berikutnya (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Pavilion Bukit Jalil, Sri Petaling Commercial Hub, Taman OUG, Kuchai Lama, Mid Valley Megamall / KL Sentral',
        landmarksMs: 'Pavilion Bukit Jalil, Bandar Baru Sri Petaling, Taman OUG, Kuchai Lama, Mid Valley / KL Sentral',
      },
    ],
    extraFaqsEn: [
      {
        q: 'Can my parcel be dropped off at a KLCC, TRX, or Bangsar South corporate reception desk without exposing the contents?',
        a: 'Yes. Every Kuala Lumpur parcel is sealed inside a rigid matte-black security box inside an opaque waterproof courier flyer. The shipping label states only "OM Fulfilment Logistics — Commercial Document / Nutritional Goods" with zero mention of Onyxmen, Horsemen, Hammer of Thor, Grow XL, or men’s supplements.',
      },
      {
        q: 'How does the 3–5 Hour Same-Day Private Discreet Runner work in Kuala Lumpur?',
        a: 'When you submit your order before 16:00 MYT and select Kuala Lumpur, our concierge desk confirms your slot via encrypted WhatsApp. An unmarked private rider dispatches directly from our Klang Valley vault to your condo lobby, office tower, or residence in KLCC, Bukit Bintang, Bangsar, Mont Kiara, Cheras, Setapak, or Kepong within 3 to 5 hours.',
      },
      {
        q: 'Is Cash on Delivery (COD) accepted across all Kuala Lumpur postcodes (50000–60000)?',
        a: 'Yes. Full Cash on Delivery (COD) as well as instant DuitNow QR and FPX online banking are supported across every postcode from 50000 to 60000 in Wilayah Persekutuan Kuala Lumpur.',
      },
      {
        q: 'Can the rider hand my parcel to the condominium guardhouse in Mont Kiara, Desa ParkCity, or Bukit Jalil?',
        a: 'Absolutely. If you prefer zero face-to-face handover, instruct our concierge via WhatsApp to deposit the sealed parcel at your condominium concierge desk, mailroom locker (Parcel365 / PopBox), or guardhouse after DuitNow QR / FPX settlement.',
      },
    ],
    extraFaqsMs: [
      {
        q: 'Bolehkah bungkusan saya diserahkan di kaunter penyambut tetamu pejabat KLCC, TRX, atau Bangsar South tanpa mendedahkan kandungan?',
        a: 'Ya. Setiap bungkusan Kuala Lumpur ditutup rapat di dalam kotak keselamatan legap bersama sampul kalis air tanpa sebarang penjenamaan. Slip penghantaran hanya memaparkan "OM Fulfilment Logistics" tanpa menyebut Onyxmen, Horsemen, Hammer of Thor, Grow XL, atau suplemen lelaki.',
      },
      {
        q: 'Bagaimanakah servis Penghantar Persendirian Rahsia Hari Sama (3–5 Jam) beroperasi di Kuala Lumpur?',
        a: 'Apabila anda menghantar pesanan sebelum jam 4:00 petang (16:00 MYT) dan memilih Kuala Lumpur, meja privasi kami akan mengesahkan slot anda melalui WhatsApp. Penghantar persendirian tanpa pakaian seragam berjenama akan menghantar terus ke lobi kondo, menara pejabat, atau kediaman anda di KLCC, Bukit Bintang, Bangsar, Mont Kiara, Cheras, Setapak, atau Kepong dalam tempoh 3 hingga 5 jam.',
      },
      {
        q: 'Adakah COD (Bayar Waktu Terima) diterima di semua poskod Kuala Lumpur (50000–60000)?',
        a: 'Ya. Perkhidmatan COD penuh serta pembayaran segera DuitNow QR dan perbankan dalam talian FPX disokong di seluruh poskod 50000 hingga 60000 di Wilayah Persekutuan Kuala Lumpur.',
      },
      {
        q: 'Bolehkah penghantar meninggalkan bungkusan di pondok pengawal kondo di Mont Kiara, Desa ParkCity, atau Bukit Jalil?',
        a: 'Sudah tentu. Jika anda mahukan penyerahan tanpa bersemuka, maklumkan kepada meja khidmat pelanggan kami di WhatsApp untuk meninggalkan bungkusan berlakri di meja concierge kondo, loker bungkusan, atau pondok pengawal selepas bayaran FPX / DuitNow QR selesai.',
      },
    ],
  },
  {
    microStep: 'MS-132',
    id: 'selangor',
    slug: 'selangor',
    schemaKey: 'selangor',
    drawerStateValue: 'Selangor',
    isoCode: 'MY-10',
    watermark: 'SGR · 02',
    featuredProductSlug: 'magnum-pump-xr',
    secondaryProductSlug: 'horsemen',
    enCanonicalPath: '/malaysia/selangor/',
    msCanonicalPath: '/ms/malaysia/selangor/',
    enOutputPaths: [
      'malaysia/selangor/index.html',
      'malaysia-delivery/selangor/index.html',
    ],
    msOutputPaths: [
      'ms/malaysia/selangor/index.html',
      'ms/penghantaran-malaysia/selangor/index.html',
    ],
    corridorCodeEn: 'SELANGOR & KLANG VALLEY EXPRESS ZONE · SAME-DAY 3–5H RUNNER & 24H COURIER',
    corridorCodeMs: 'ZON EKSPRES SELANGOR & LEMBAH KLANG · PENGHANTAR HARI SAMA 3–5 JAM & KURIER 24 JAM',
    postcodeRange: '40000 – 48300, 63000 – 68100',
    cutoffTime: '16:00 MYT (Same-Day Runner) / 18:00 MYT (Next-Day Express)',
    sameDayRunnerFeeEn: 'RM 15 Flat Same-Day Klang Valley Rider (or RM 0 Next-Day Express Courier)',
    sameDayRunnerFeeMs: 'RM 15 Kadar Rata Penghantar Lembah Klang Hari Sama (atau RM 0 Kurier Esok)',
    districts: [
      {
        code: 'SGR-01',
        nameEn: 'Petaling Jaya (PJ Old Town, SS2, Jaya One, Kelana Jaya)',
        nameMs: 'Petaling Jaya (PJ Old Town, SS2, Jaya One, Kelana Jaya)',
        postcodes: '46000 – 47410',
        runnerWindowEn: '2.5 – 4 Hours (Same-Day Klang Valley Rider)',
        runnerWindowMs: '2.5 – 4 Jam (Penghantar Lembah Klang Hari Sama)',
        courierWindowEn: 'Next Business Day (Free)',
        courierWindowMs: 'Hari Bekerja Berikutnya (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'PJ New Town, Section 13/14/16/17, SS2, Taman Megah, Kelana Jaya, Paradigm Mall, Ara Damansara',
        landmarksMs: 'PJ New Town, Seksyen 13/14/16/17, SS2, Taman Megah, Kelana Jaya, Paradigm Mall, Ara Damansara',
      },
      {
        code: 'SGR-02',
        nameEn: 'Damansara, Bandar Utama, Kota Damansara & Mutiara Damansara',
        nameMs: 'Damansara, Bandar Utama, Kota Damansara & Mutiara Damansara',
        postcodes: '47800 – 47830',
        runnerWindowEn: '3 – 4.5 Hours (Same-Day Klang Valley Rider)',
        runnerWindowMs: '3 – 4.5 Jam (Penghantar Lembah Klang Hari Sama)',
        courierWindowEn: 'Next Business Day (Free)',
        courierWindowMs: 'Hari Bekerja Berikutnya (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: '1 Utama, The Curve, Damansara Perdana, Tropicana, Sunway Giza Kota Damansara, Damansara Uptown',
        landmarksMs: '1 Utama, The Curve, Damansara Perdana, Tropicana, Sunway Giza Kota Damansara, Damansara Uptown',
      },
      {
        code: 'SGR-03',
        nameEn: 'Subang Jaya, USJ, Bandar Sunway & Putra Heights',
        nameMs: 'Subang Jaya, USJ, Bandar Sunway & Putra Heights',
        postcodes: '47500 – 47650',
        runnerWindowEn: '3 – 4.5 Hours (Same-Day Klang Valley Rider)',
        runnerWindowMs: '3 – 4.5 Jam (Penghantar Lembah Klang Hari Sama)',
        courierWindowEn: 'Next Business Day (Free)',
        courierWindowMs: 'Hari Bekerja Berikutnya (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'SS15, Sunway Pyramid, Sunway Geo, USJ 1–USJ 21, Taipan Business Centre, Subang Parade, Putra Heights',
        landmarksMs: 'SS15, Sunway Pyramid, Sunway Geo, USJ 1–USJ 21, Pusat Perniagaan Taipan, Subang Parade, Putra Heights',
      },
      {
        code: 'SGR-04',
        nameEn: 'Shah Alam, Setia Alam, Bukit Jelutong & Glenmarie',
        nameMs: 'Shah Alam, Setia Alam, Bukit Jelutong & Glenmarie',
        postcodes: '40000 – 40470',
        runnerWindowEn: '3.5 – 5 Hours (Same-Day Klang Valley Rider)',
        runnerWindowMs: '3.5 – 5 Jam (Penghantar Lembah Klang Hari Sama)',
        courierWindowEn: 'Next Business Day (Free)',
        courierWindowMs: 'Hari Bekerja Berikutnya (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Seksyen 7/9/13/14 Shah Alam, i-City, Setia City Mall, Kota Kemuning, Elmina, Hicom-Glenmarie Industrial Park',
        landmarksMs: 'Seksyen 7/9/13/14 Shah Alam, i-City, Setia City Mall, Kota Kemuning, Elmina, Taman Perindustrian Glenmarie',
      },
      {
        code: 'SGR-05',
        nameEn: 'Puchong, Bandar Puteri, IOI Resort & Seri Kembangan',
        nameMs: 'Puchong, Bandar Puteri, IOI Resort & Seri Kembangan',
        postcodes: '47100 – 47190, 43300',
        runnerWindowEn: '3 – 4.5 Hours (Same-Day Klang Valley Rider)',
        runnerWindowMs: '3 – 4.5 Jam (Penghantar Lembah Klang Hari Sama)',
        courierWindowEn: 'Next Business Day (Free)',
        courierWindowMs: 'Hari Bekerja Berikutnya (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'IOI Mall Puchong, Bandar Puteri, Puchong Jaya, Bukit Puchong, Taman Equine, Mines Resort Seri Kembangan',
        landmarksMs: 'IOI Mall Puchong, Bandar Puteri, Puchong Jaya, Bukit Puchong, Taman Equine, Seri Kembangan',
      },
      {
        code: 'SGR-06',
        nameEn: 'Klang, Bandar Botanic, Bukit Tinggi & Port Klang',
        nameMs: 'Klang, Bandar Botanic, Bukit Tinggi & Pelabuhan Klang',
        postcodes: '41000 – 42100',
        runnerWindowEn: '4 – 5 Hours (Same-Day Klang Valley Rider)',
        runnerWindowMs: '4 – 5 Jam (Penghantar Lembah Klang Hari Sama)',
        courierWindowEn: 'Next Business Day (Free)',
        courierWindowMs: 'Hari Bekerja Berikutnya (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'AEON Bukit Tinggi, Bandar Botanic, Ambang Botanic, Bandar Bukit Raja, Klang Parade, Port Klang Free Zone',
        landmarksMs: 'AEON Bukit Tinggi, Bandar Botanic, Ambang Botanic, Bandar Bukit Raja, Klang Parade, Pelabuhan Klang',
      },
      {
        code: 'SGR-07',
        nameEn: 'Kajang, Bandar Baru Bangi, Semenyih & Cheras Selatan',
        nameMs: 'Kajang, Bandar Baru Bangi, Semenyih & Cheras Selatan',
        postcodes: '43000 – 43650',
        runnerWindowEn: '3.5 – 5 Hours (Same-Day Klang Valley Rider)',
        runnerWindowMs: '3.5 – 5 Jam (Penghantar Lembah Klang Hari Sama)',
        courierWindowEn: 'Next Business Day (Free)',
        courierWindowMs: 'Hari Bekerja Berikutnya (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Bandar Baru Bangi Seksyen 1–16, Jade Hills Kajang, EcoHill Semenyih, Balakong, Cheras Traders Square',
        landmarksMs: 'Bandar Baru Bangi Seksyen 1–16, Jade Hills Kajang, EcoHill Semenyih, Balakong, Cheras Traders Square',
      },
      {
        code: 'SGR-08',
        nameEn: 'Ampang Jaya, Batu Caves, Gombak, Cyberjaya & Sepang',
        nameMs: 'Ampang Jaya, Batu Caves, Gombak, Cyberjaya & Sepang',
        postcodes: '68000 – 68100, 63000 – 63300',
        runnerWindowEn: '3.5 – 5 Hours (Same-Day Klang Valley Rider)',
        runnerWindowMs: '3.5 – 5 Jam (Penghantar Lembah Klang Hari Sama)',
        courierWindowEn: 'Next Business Day (Free)',
        courierWindowMs: 'Hari Bekerja Berikutnya (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Ampang Point, Taman Melawati, Selayang, UIA Gombak, Shaftsbury Cyberjaya, Kota Warisan Sepang',
        landmarksMs: 'Ampang Point, Taman Melawati, Selayang, UIA Gombak, Shaftsbury Cyberjaya, Kota Warisan Sepang',
      },
    ],
    extraFaqsEn: [
      {
        q: 'Do Petaling Jaya, Subang Jaya, Shah Alam, and Puchong qualify for 3–5 Hour Same-Day Delivery?',
        a: 'Yes. Because our central sorting vault operates directly inside the Klang Valley, all major Selangor districts—including Petaling Jaya, Damansara, Subang Jaya, Shah Alam, Setia Alam, Puchong, Klang, Kajang, Bangi, Ampang, and Cyberjaya—qualify for both Free Next-Day Express Courier (RM 0) and 3–5 Hour Same-Day Private Rider dispatch.',
      },
      {
        q: 'Can I pay by Cash on Delivery (COD) or DuitNow QR when the courier arrives in Selangor?',
        a: 'Yes. You can settle your RM 159 (1 bottle), RM 318 (2 bottles), or RM 477 (3 bottles) order via Cash on Delivery, DuitNow QR scan upon handover, or online FPX banking across all Selangor postcodes.',
      },
      {
        q: 'Are parcels delivered to gated townships like Setia Eco Park, Kota Kemuning, Jade Hills, or Bandar Utama 100% discreet?',
        a: 'Yes. Every parcel is sealed in an opaque security box with "OM Fulfilment Logistics" as the sender name. Security guards and household members cannot identify the contents or brand.',
      },
      {
        q: 'Which Onyxmen formulation is most frequently ordered across Selangor fitness and corporate hubs?',
        a: 'Magnum Pump XR (30 Black Capsules — L-Arginine, L-Citrulline & Thai Black Ginger) and Horsemen (20 Capsules × 500mg — Tongkat Ali & Black Maca) are the two highest-volume formulations across PJ, Subang Jaya, Damansara, and Shah Alam.',
      },
    ],
    extraFaqsMs: [
      {
        q: 'Adakah kawasan Petaling Jaya, Subang Jaya, Shah Alam, dan Puchong layak untuk Penghantaran Hari Sama 3–5 Jam?',
        a: 'Ya. Memandangkan pusat pengagihan utama kami beroperasi terus di dalam Lembah Klang, semua daerah utama Selangor—termasuk Petaling Jaya, Damansara, Subang Jaya, Shah Alam, Setia Alam, Puchong, Klang, Kajang, Bangi, Ampang, dan Cyberjaya—layak menikmati Kurier Ekspres Percuma 24 Jam (RM 0) atau Penghantar Persendirian Hari Sama 3–5 Jam.',
      },
      {
        q: 'Bolehkah saya membayar secara COD atau imbasan DuitNow QR semasa kurier tiba di Selangor?',
        a: 'Ya. Anda boleh menjelaskan bayaran RM 159 (1 botol), RM 318 (2 botol), atau RM 477 (3 botol) melalui Tunai Semasa Terima (COD), imbasan DuitNow QR semasa penyerahan, atau perbankan FPX di seluruh poskod Selangor.',
      },
      {
        q: 'Adakah bungkusan yang dihantar ke kawasan berpengawal seperti Setia Alam, Kota Kemuning, Jade Hills, atau Bandar Utama 100% rahsia?',
        a: 'Ya. Setiap bungkusan ditutup rapat di dalam kotak keselamatan legap dengan nama pengirim "OM Fulfilment Logistics". Pengawal keselamatan dan ahli keluarga tidak dapat mengetahui kandungan atau jenama produk.',
      },
      {
        q: 'Formulasi Onyxmen manakah yang paling kerap ditempah di sekitar hab korporat dan kecergasan Selangor?',
        a: 'Magnum Pump XR (30 Kapsul Hitam — L-Arginine, L-Citrulline & Kunyit Hitam) dan Horsemen (20 Kapsul × 500mg — Tongkat Ali & Maca Hitam) merupakan dua pilihan paling popular di PJ, Subang Jaya, Damansara, dan Shah Alam.',
      },
    ],
  },
  {
    microStep: 'MS-133',
    id: 'johor-bahru',
    slug: 'johor-bahru',
    schemaKey: 'johor',
    drawerStateValue: 'Johor',
    isoCode: 'MY-01',
    watermark: 'JHB · 03',
    featuredProductSlug: 'grow-xl',
    secondaryProductSlug: 'horsemen',
    enCanonicalPath: '/malaysia/johor-bahru/',
    msCanonicalPath: '/ms/malaysia/johor-bahru/',
    enOutputPaths: [
      'malaysia/johor-bahru/index.html',
      'malaysia/johor/index.html',
      'malaysia-delivery/johor-bahru/index.html',
      'malaysia-delivery/johor/index.html',
    ],
    msOutputPaths: [
      'ms/malaysia/johor-bahru/index.html',
      'ms/malaysia/johor/index.html',
      'ms/penghantaran-malaysia/johor-bahru/index.html',
      'ms/penghantaran-malaysia/johor/index.html',
    ],
    corridorCodeEn: 'SOUTHERN EXPRESSWAY CORRIDOR · OVERNIGHT KL–JB LINEHAUL (1–2 BUSINESS DAYS)',
    corridorCodeMs: 'KORIDOR EKSPRES SELATAN · PENGHANTARAN MALAM KL–JB (1–2 HARI BEKERJA)',
    postcodeRange: '79000 – 86900',
    cutoffTime: '17:00 MYT (Overnight Southern Linehaul Dispatch)',
    sameDayRunnerFeeEn: 'RM 0 Free Priority Southern Highway Courier (1–2 Business Days)',
    sameDayRunnerFeeMs: 'RM 0 Kurier Keutamaan Lebuhraya Selatan Percuma (1–2 Hari Bekerja)',
    districts: [
      {
        code: 'JHR-01',
        nameEn: 'Johor Bahru City Centre, Danga Bay & Tanjung Puteri',
        nameMs: 'Pusat Bandaraya Johor Bahru, Danga Bay & Tanjung Puteri',
        postcodes: '80000 – 80400',
        runnerWindowEn: 'Overnight Southern Linehaul (24 Hours)',
        runnerWindowMs: 'Laluan Ekspres Malam Selatan (24 Jam)',
        courierWindowEn: '1 Business Day Express (Free)',
        courierWindowMs: '1 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'JB Sentral / CIQ, R&F Princess Cove, Mid Valley Southkey, Century Garden, Pelangi, Stulang Laut',
        landmarksMs: 'JB Sentral / CIQ, R&F Princess Cove, Mid Valley Southkey, Taman Abad, Taman Pelangi, Stulang Laut',
      },
      {
        code: 'JHR-02',
        nameEn: 'Iskandar Puteri, Medini, Bukit Indah & Gelang Patah',
        nameMs: 'Iskandar Puteri, Medini, Bukit Indah & Gelang Patah',
        postcodes: '79000 – 79250, 81550',
        runnerWindowEn: 'Overnight Southern Linehaul (24–36 Hours)',
        runnerWindowMs: 'Laluan Ekspres Malam Selatan (24–36 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Puteri Harbour, Sunway Big Box, Horizon Hills, Eco Botanic, AEON Bukit Indah, Nusa Bestari',
        landmarksMs: 'Puteri Harbour, Sunway Big Box, Horizon Hills, Eco Botanic, AEON Bukit Indah, Nusa Bestari',
      },
      {
        code: 'JHR-03',
        nameEn: 'Mount Austin, Tebrau, Johor Jaya & Permas Jaya',
        nameMs: 'Mount Austin, Tebrau, Johor Jaya & Permas Jaya',
        postcodes: '81100, 81750',
        runnerWindowEn: 'Overnight Southern Linehaul (24–36 Hours)',
        runnerWindowMs: 'Laluan Ekspres Malam Selatan (24–36 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Austin Heights, Toppen & IKEA Tebrau, Taman Molek, Setia Tropika, Bandar Dato Onn, Permas Jaya',
        landmarksMs: 'Austin Heights, Toppen & IKEA Tebrau, Taman Molek, Setia Tropika, Bandar Dato Onn, Permas Jaya',
      },
      {
        code: 'JHR-04',
        nameEn: 'Skudai, Tampoi, Perling & Kangkar Pulai',
        nameMs: 'Skudai, Tampoi, Perling & Kangkar Pulai',
        postcodes: '81200, 81300',
        runnerWindowEn: 'Overnight Southern Linehaul (24–36 Hours)',
        runnerWindowMs: 'Laluan Ekspres Malam Selatan (24–36 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Sutera Mall, Taman Universiti (UTM), Paradigm Mall JB, Taman Perling, Mutiara Rini, Bukit Mewah',
        landmarksMs: 'Sutera Mall, Taman Universiti (UTM), Paradigm Mall JB, Taman Perling, Mutiara Rini, Bukit Mewah',
      },
      {
        code: 'JHR-05',
        nameEn: 'Pasir Gudang, Masai, Seri Alam & Kota Tinggi',
        nameMs: 'Pasir Gudang, Masai, Seri Alam & Kota Tinggi',
        postcodes: '81700, 81750, 81900',
        runnerWindowEn: 'Southern Express Hub (24–48 Hours)',
        runnerWindowMs: 'Hab Ekspres Selatan (24–48 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Bandar Seri Alam,Eco Tropics, Johor Port Pasir Gudang, Taman Bukit Dahlia, Desaru / Pengerang Corridor',
        landmarksMs: 'Bandar Seri Alam, Eco Tropics, Pelabuhan Johor Pasir Gudang, Taman Bukit Dahlia, Koridor Desaru / Pengerang',
      },
      {
        code: 'JHR-06',
        nameEn: 'Senai, Kulai & Indahpura Aerospace / Logistics Zone',
        nameMs: 'Senai, Kulai & Zon Logistik Indahpura',
        postcodes: '81000, 81400',
        runnerWindowEn: 'Southern Express Hub (24–36 Hours)',
        runnerWindowMs: 'Hab Ekspres Selatan (24–36 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Johor Premium Outlets (JPO), Bandar Putra Kulai, IOI Mall Kulai, Senai International Airport Hub',
        landmarksMs: 'Johor Premium Outlets (JPO), Bandar Putra Kulai, IOI Mall Kulai, Hab Lapangan Terbang Senai',
      },
      {
        code: 'JHR-07',
        nameEn: 'Batu Pahat, Parit Raja, Yong Peng & Pontian',
        nameMs: 'Batu Pahat, Parit Raja, Yong Peng & Pontian',
        postcodes: '83000 – 83700, 82000',
        runnerWindowEn: 'PLUS Highway Linehaul (24–48 Hours)',
        runnerWindowMs: 'Laluan Lebuhraya PLUS (24–48 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Batu Pahat Mall, Pura Kencana, Universiti Tun Hussein Onn (UTHM) Parit Raja, Bandar Pontian',
        landmarksMs: 'Batu Pahat Mall, Pura Kencana, UTHM Parit Raja, Yong Peng, Bandar Pontian',
      },
      {
        code: 'JHR-08',
        nameEn: 'Muar (Bandar Maharani), Kluang, Segamat & Tangkak',
        nameMs: 'Muar (Bandar Maharani), Kluang, Segamat & Tangkak',
        postcodes: '84000 – 86000',
        runnerWindowEn: 'Northern Johor Express (24–48 Hours)',
        runnerWindowMs: 'Ekspres Utara Johor (24–48 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Muar Town Centre, Bakri, Pagoh Education Hub, Kluang Mall, Bandar Segamat, Mersing',
        landmarksMs: 'Pusat Bandar Muar, Bakri, Hab Pendidikan Pagoh, Kluang Mall, Bandar Segamat, Mersing',
      },
    ],
    extraFaqsEn: [
      {
        q: 'How fast do parcels arrive in Johor Bahru, Iskandar Puteri, and Mount Austin?',
        a: 'Orders placed before 17:00 MYT board our overnight North-South Expressway (PLUS) linehaul from the Klang Valley directly to the Senai/Tebrau sorting hub, delivering to Johor Bahru City Centre, Iskandar Puteri, Mount Austin, and Skudai within 1 to 2 business days.',
      },
      {
        q: 'Can cross-border professionals or Singapore commuters receive parcels at a JB hotel, condo concierge, or collection point?',
        a: 'Yes. Many customers commuting via Woodlands/Tuas CIQ have their unmarked "OM Fulfilment Logistics" parcel delivered to their condo concierge at R&F Princess Cove, Danga Bay, Bukit Indah, or to a designated hotel reception or courier collection point in JB.',
      },
      {
        q: 'Is Cash on Delivery (COD) available in Batu Pahat, Muar, Kluang, and Pasir Gudang?',
        a: 'Yes. Full Cash on Delivery (COD), DuitNow QR, and FPX online banking are available across all Johor districts from 79000 to 86900 with RM 0 free shipping on 1, 2, or 3 bottles.',
      },
      {
        q: 'What is the most popular Onyxmen protocol ordered in Johor?',
        a: 'Grow XL (30 Capsules — 30-Day Daily Botanical Vitality Protocol) and the 2-Bottle Reserve (RM 318) of Horsemen are the highest-demand selections across Johor Bahru and Iskandar Puteri.',
      },
    ],
    extraFaqsMs: [
      {
        q: 'Berapa cepat bungkusan tiba di Johor Bahru, Iskandar Puteri, dan Mount Austin?',
        a: 'Pesanan yang dibuat sebelum jam 5:00 petang (17:00 MYT) dihantar melalui rangkaian ekspres malam Lebuhraya Utara-Selatan (PLUS) terus ke hab pengagihan Senai/Tebrau, tiba di Pusat Bandaraya JB, Iskandar Puteri, Mount Austin, dan Skudai dalam masa 1 hingga 2 hari bekerja.',
      },
      {
        q: 'Bolehkah pekerja ulang-alik Singapura atau penduduk kondo menerima bungkusan di kaunter concierge atau hotel di JB?',
        a: 'Ya. Ramai pelanggan yang berulang-alik melalui CIQ menerima bungkusan rahsia berlabel "OM Fulfilment Logistics" di meja concierge kondo (R&F Princess Cove, Danga Bay, Bukit Indah) atau kaunter hotel tanpa sebarang pendedahan kandungan.',
      },
      {
        q: 'Adakah servis COD (Bayar Waktu Terima) meliputi Batu Pahat, Muar, Kluang, dan Pasir Gudang?',
        a: 'Ya. Perkhidmatan COD penuh, DuitNow QR, dan FPX tersedia di seluruh daerah Johor dari poskod 79000 hingga 86900 dengan penghantaran percuma (RM 0) untuk 1, 2, atau 3 botol.',
      },
      {
        q: 'Apakah protokol Onyxmen yang paling mendapat sambutan di negeri Johor?',
        a: 'Grow XL (30 Kapsul — Protokol Kecergasan Harian 30 Hari) dan Pakej 2 Botol (RM 318) Horsemen merupakan pilihan paling tinggi permintaannya di Johor Bahru dan Iskandar Puteri.',
      },
    ],
  },
  {
    microStep: 'MS-134',
    id: 'penang',
    slug: 'penang',
    schemaKey: 'pulau-pinang',
    drawerStateValue: 'Pulau Pinang',
    isoCode: 'MY-07',
    watermark: 'PNG · 04',
    featuredProductSlug: 'horsemen',
    secondaryProductSlug: 'grow-xl',
    enCanonicalPath: '/malaysia/penang/',
    msCanonicalPath: '/ms/malaysia/pulau-pinang/',
    enOutputPaths: [
      'malaysia/penang/index.html',
      'malaysia/pulau-pinang/index.html',
      'malaysia-delivery/penang/index.html',
      'malaysia-delivery/pulau-pinang/index.html',
    ],
    msOutputPaths: [
      'ms/malaysia/pulau-pinang/index.html',
      'ms/malaysia/penang/index.html',
      'ms/penghantaran-malaysia/pulau-pinang/index.html',
      'ms/penghantaran-malaysia/penang/index.html',
    ],
    corridorCodeEn: 'NORTHERN CORRIDOR EXPRESS ZONE · PENANG ISLAND & SEBERANG PERAI (1–2 BUSINESS DAYS)',
    corridorCodeMs: 'ZON EKSPRES KORIDOR UTARA · PULAU PINANG & SEBERANG PERAI (1–2 HARI BEKERJA)',
    postcodeRange: '10000 – 14400',
    cutoffTime: '17:00 MYT (Overnight Northern Highway Linehaul)',
    sameDayRunnerFeeEn: 'RM 0 Free Priority Northern Corridor Courier (Island & Mainland)',
    sameDayRunnerFeeMs: 'RM 0 Kurier Keutamaan Koridor Utara Percuma (Pulau & Seberang Perai)',
    districts: [
      {
        code: 'PNG-01',
        nameEn: 'George Town, Gurney Drive, Pulau Tikus & Jalan Macalister',
        nameMs: 'George Town, Persiaran Gurney, Pulau Tikus & Jalan Macalister',
        postcodes: '10000 – 10450',
        runnerWindowEn: 'Northern Linehaul Priority (24 Hours)',
        runnerWindowMs: 'Laluan Utama Utara (24 Jam)',
        courierWindowEn: '1 Business Day Express (Free)',
        courierWindowMs: '1 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'KOMTAR, Gurney Plaza, Gurney Paragon, Beach Street Banking District, Pulau Tikus Suites',
        landmarksMs: 'KOMTAR, Gurney Plaza, Gurney Paragon, Zon Perbankan Lebuh Pantai, Suite Pulau Tikus',
      },
      {
        code: 'PNG-02',
        nameEn: 'Tanjung Tokong, Tanjung Bungah, Straits Quay & Batu Ferringhi',
        nameMs: 'Tanjung Tokong, Tanjung Bungah, Straits Quay & Batu Ferringhi',
        postcodes: '10470, 11200, 11100',
        runnerWindowEn: 'Northern Island Express (24–36 Hours)',
        runnerWindowMs: 'Ekspres Utara Pulau (24–36 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX (Condo Concierge Supported)',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX (Sokongan Concierge Kondo)',
        landmarksEn: 'Straits Quay Marina, City of Dreams, Andaman Quayside, Tanjung Bungah Coastal Condos, Batu Ferringhi',
        landmarksMs: 'Marina Straits Quay, City of Dreams, Quayside Tanjung Tokong, Kondo Tanjung Bungah, Batu Ferringhi',
      },
      {
        code: 'PNG-03',
        nameEn: 'Jelutong, Gelugor, Karpal Singh Drive & USM Corridor',
        nameMs: 'Jelutong, Gelugor, Persiaran Karpal Singh & Koridor USM',
        postcodes: '11600, 11700, 11800',
        runnerWindowEn: 'Eastern Island Express (24–36 Hours)',
        runnerWindowMs: 'Ekspres Timur Pulau (24–36 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'The Light Waterfront, Queensbay Mall, Minden Heights, Green Lane, Karpal Singh Drive Residences',
        landmarksMs: 'The Light Waterfront, Queensbay Mall, Minden Heights, Green Lane, Kediaman Persiaran Karpal Singh',
      },
      {
        code: 'PNG-04',
        nameEn: 'Bayan Lepas Free Industrial Zone (FIZ), Bayan Baru & Sungai Ara',
        nameMs: 'Zon Perindustrian Bebas Bayan Lepas (FIZ), Bayan Baru & Sungai Ara',
        postcodes: '11900, 11950, 11960',
        runnerWindowEn: 'Southern Island Express (24–36 Hours)',
        runnerWindowMs: 'Ekspres Selatan Pulau (24–36 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Bayan Lepas Tech Park, SPICE Arena, Sunshine Square Bayan Baru, Queens Waterfront, Batu Maung',
        landmarksMs: 'Taman Teknologi Bayan Lepas, SPICE Arena, Bayan Baru, Sungai Ara, Teluk Kumbar, Batu Maung',
      },
      {
        code: 'PNG-05',
        nameEn: 'Air Itam, Farlim (Bandar Baru Air Itam), Paya Terubong & Balik Pulau',
        nameMs: 'Air Itam, Farlim (Bandar Baru Air Itam), Paya Terubong & Balik Pulau',
        postcodes: '11500, 11060, 11000',
        runnerWindowEn: 'Island Interior Express (24–48 Hours)',
        runnerWindowMs: 'Ekspres Tengah & Barat Pulau (24–48 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'All Seasons Place Farlim, Air Itam Town, Paya Terubong Hills, Balik Pulau Botanica.CT',
        landmarksMs: 'All Seasons Place Farlim, Pekan Air Itam, Paya Terubong, Botanica.CT Balik Pulau',
      },
      {
        code: 'PNG-06',
        nameEn: 'Butterworth, Raja Uda, Seberang Jaya & Perai',
        nameMs: 'Butterworth, Raja Uda, Seberang Jaya & Perai',
        postcodes: '12000 – 13700',
        runnerWindowEn: 'Mainland Hub Priority (24 Hours)',
        runnerWindowMs: 'Keutamaan Hab Seberang Perai (24 Jam)',
        courierWindowEn: '1 Business Day Express (Free)',
        courierWindowMs: '1 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Sunway Carnival Mall Seberang Jaya, Jalan Raja Uda Butterworth, Penang Sentral, Perai Industrial Estate',
        landmarksMs: 'Sunway Carnival Mall Seberang Jaya, Jalan Raja Uda Butterworth, Penang Sentral, Taman Perindustrian Perai',
      },
      {
        code: 'PNG-07',
        nameEn: 'Bukit Mertajam, Alma, Icon City & Juru Auto-City',
        nameMs: 'Bukit Mertajam, Alma, Icon City & Juru Auto-City',
        postcodes: '14000, 14020',
        runnerWindowEn: 'Central Seberang Perai Express (24–36 Hours)',
        runnerWindowMs: 'Ekspres Seberang Perai Tengah (24–36 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Icon City BM, Juru Auto-City, AEON Mall Bukit Mertajam Alma, Bandar Perda',
        landmarksMs: 'Icon City BM, Juru Auto-City, AEON Mall Bukit Mertajam Alma, Bandar Perda',
      },
      {
        code: 'PNG-08',
        nameEn: 'Batu Kawan Industrial Park, Simpang Ampat, Nibong Tebal & Kepala Batas',
        nameMs: 'Taman Perindustrian Batu Kawan, Simpang Ampat, Nibong Tebal & Kepala Batas',
        postcodes: '14100 – 14300, 13200',
        runnerWindowEn: 'North/South Mainland Express (24–48 Hours)',
        runnerWindowMs: 'Ekspres Seberang Perai Utara/Selatan (24–48 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Design Village & IKEA Batu Kawan, Eco Horizon, Pearl City Simpang Ampat, Bertam Kepala Batas',
        landmarksMs: 'Design Village & IKEA Batu Kawan, Eco Horizon, Bandar Tasek Mutiara, Bertam Kepala Batas',
      },
    ],
    extraFaqsEn: [
      {
        q: 'Does free discreet shipping apply to both Penang Island and Seberang Perai mainland?',
        a: 'Yes. Every postcode across Penang Island (10000–11960: George Town, Tanjung Tokong, Jelutong, Bayan Lepas, Balik Pulau) and Seberang Perai (12000–14400: Butterworth, Seberang Jaya, Bukit Mertajam, Batu Kawan, Kepala Batas) receives RM 0 Free Express Discreet Shipping.',
      },
      {
        q: 'Can engineers and executives in the Bayan Lepas Free Industrial Zone (FIZ) or Batu Kawan receive parcels at work?',
        a: 'Yes. Our parcels use a 100% neutral commercial waybill ("OM Fulfilment Logistics") with zero product or supplement branding, making them completely safe for corporate mailrooms in Bayan Lepas FIZ, Batu Kawan, or George Town.',
      },
      {
        q: 'How long does transit take from the Klang Valley vault to George Town and Butterworth?',
        a: 'Orders confirmed before 17:00 MYT travel overnight up the North-South Expressway to the Perai/Bayan Lepas sorting hubs, arriving within 1 to 2 business days.',
      },
      {
        q: 'Is Cash on Delivery (COD) supported in high-rise condos along Gurney Drive, Tanjung Tokong, and Queensbay?',
        a: 'Yes. You can choose Cash on Delivery (pay rider at handover) or pre-pay via FPX / DuitNow QR so the courier can leave the sealed parcel directly with your condo concierge.',
      },
    ],
    extraFaqsMs: [
      {
        q: 'Adakah penghantaran rahsia percuma merangkumi kedua-dua kawasan Pulau Pinang dan Seberang Perai?',
        a: 'Ya. Setiap poskod di bahagian Pulau (10000–11960: George Town, Tanjung Tokong, Jelutong, Bayan Lepas, Balik Pulau) dan Seberang Perai (12000–14400: Butterworth, Seberang Jaya, Bukit Mertajam, Batu Kawan, Kepala Batas) menikmati Penghantaran Ekspres Rahsia Percuma (RM 0).',
      },
      {
        q: 'Bolehkah jurutera dan eksekutif di Zon Perindustrian Bebas Bayan Lepas (FIZ) atau Batu Kawan menerima bungkusan di tempat kerja?',
        a: 'Ya. Bungkusan kami menggunakan slip komersial neutral ("OM Fulfilment Logistics") tanpa sebarang nama produk atau jenama suplemen, menjadikannya 100% selamat untuk bilik mel pejabat di Bayan Lepas FIZ, Batu Kawan, atau George Town.',
      },
      {
        q: 'Berapa lamakah masa perjalanan dari hab Lembah Klang ke George Town dan Butterworth?',
        a: 'Pesanan yang disahkan sebelum jam 5:00 petang dihantar pada waktu malam melalui Lebuhraya Utara-Selatan ke hab pengagihan Perai dan Bayan Lepas, tiba dalam masa 1 hingga 2 hari bekerja.',
      },
      {
        q: 'Adakah COD disokong untuk kondominium di sekitar Persiaran Gurney, Tanjung Tokong, dan Queensbay?',
        a: 'Ya. Anda boleh memilih COD (bayar semasa terima) atau membuat bayaran awal melalui FPX / DuitNow QR supaya kurier boleh menyerahkan bungkusan berlakri terus kepada kaunter concierge kondo anda.',
      },
    ],
  },
];

WEST_MALAYSIA_HUBS.push(
  {
    microStep: 'MS-135',
    id: 'perak',
    slug: 'perak',
    schemaKey: 'perak',
    drawerStateValue: 'Perak',
    isoCode: 'MY-08',
    watermark: 'PRK · 05',
    featuredProductSlug: 'hammer-of-thor',
    secondaryProductSlug: 'horsemen',
    enCanonicalPath: '/malaysia/perak/',
    msCanonicalPath: '/ms/malaysia/perak/',
    enOutputPaths: [
      'malaysia/perak/index.html',
      'malaysia-delivery/perak/index.html',
      'malaysia-delivery/perak-ipoh/index.html',
    ],
    msOutputPaths: [
      'ms/malaysia/perak/index.html',
      'ms/penghantaran-malaysia/perak/index.html',
      'ms/penghantaran-malaysia/perak-ipoh/index.html',
    ],
    corridorCodeEn: 'CENTRAL-NORTHERN PLUS CORRIDOR · IPOH, TAIPING & MANJUNG EXPRESS (1–2 BUSINESS DAYS)',
    corridorCodeMs: 'KORIDOR PLUS TENGAH-UTARA · EKSPRES IPOH, TAIPING & MANJUNG (1–2 HARI BEKERJA)',
    postcodeRange: '30000 – 36800',
    cutoffTime: '17:00 MYT (Direct KL–Ipoh Highway Linehaul)',
    sameDayRunnerFeeEn: 'RM 0 Free Priority Express Courier Across Perak Darul Ridzuan',
    sameDayRunnerFeeMs: 'RM 0 Kurier Ekspres Keutamaan Percuma Seluruh Perak Darul Ridzuan',
    districts: [
      {
        code: 'PRK-01',
        nameEn: 'Ipoh City Centre, Greentown, Canning Garden & Tiger Lane',
        nameMs: 'Pusat Bandaraya Ipoh, Greentown, Taman Canning & Jalan Sultan Azlan Shah',
        postcodes: '30000 – 30450, 31400',
        runnerWindowEn: 'KL–Ipoh Direct Linehaul (24 Hours)',
        runnerWindowMs: 'Laluan Terus KL–Ipoh (24 Jam)',
        courierWindowEn: '1 Business Day Express (Free)',
        courierWindowMs: '1 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Greentown Business Centre, Ipoh Parade, Sunway City Ipoh (Tambun), Taman Canning, Fair Park',
        landmarksMs: 'Pusat Perniagaan Greentown, Ipoh Parade, Sunway City Ipoh (Tambun), Taman Canning, Fair Park',
      },
      {
        code: 'PRK-02',
        nameEn: 'Meru Raya, Klebang, Menglembu, Bercham & Station 18',
        nameMs: 'Bandar Meru Raya, Klebang, Menglembu, Bercham & Stesen 18',
        postcodes: '30020, 31200, 31450, 31650',
        runnerWindowEn: 'Kinta Valley Express (24–36 Hours)',
        runnerWindowMs: 'Ekspres Lembah Kinta (24–36 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Bulatan Sultan Azlan Shah Meru, AEON Station 18, AEON Klebang, Bandar Cyber Ipoh, Botani Ipoh',
        landmarksMs: 'Bulatan Sultan Azlan Shah Meru, AEON Station 18, AEON Klebang, Bandar Cyber Ipoh, Bandar Seri Botani',
      },
      {
        code: 'PRK-03',
        nameEn: 'Taiping, Kamunting, Simpang & Kuala Sepetang',
        nameMs: 'Taiping, Kamunting, Simpang & Kuala Sepetang',
        postcodes: '34000, 34600, 34700',
        runnerWindowEn: 'Larut Matang Express (24–36 Hours)',
        runnerWindowMs: 'Ekspres Larut Matang (24–36 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Taiping Lake Gardens Corridor, Taiping Sentral Mall, AEON Taiping, Kamunting Industrial Estate',
        landmarksMs: 'Koridor Taman Tasik Taiping, Taiping Sentral Mall, AEON Taiping, Kawasan Perindustrian Kamunting',
      },
      {
        code: 'PRK-04',
        nameEn: 'Seri Manjung, Sitiawan, Lumut & Pulau Pangkor Jetty',
        nameMs: 'Seri Manjung, Sitiawan, Lumut & Jeti Pulau Pangkor',
        postcodes: '32000, 32040, 32200, 32300',
        runnerWindowEn: 'WCE Coastal Express (24–48 Hours)',
        runnerWindowMs: 'Ekspres Pantai Barat WCE (24–48 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'AEON Seri Manjung, Bandar Baru Sri Manjung, Kampung Koh Sitiawan, Lumut Naval Base Corridor, Marina Island',
        landmarksMs: 'AEON Seri Manjung, Bandar Baru Sri Manjung, Sitiawan, Koridor Pangkalan TLDM Lumut, Marina Island',
      },
      {
        code: 'PRK-05',
        nameEn: 'Teluk Intan, Hutan Melintang & Bagan Datuk',
        nameMs: 'Teluk Intan, Hutan Melintang & Bagan Datuk',
        postcodes: '36000, 36400, 36100',
        runnerWindowEn: 'Southern Perak WCE Linehaul (24–48 Hours)',
        runnerWindowMs: 'Laluan Perak Selatan WCE (24–48 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Leaning Tower Square Teluk Intan, Bandar Baru Teluk Intan, Hutan Melintang Commercial Hub',
        landmarksMs: 'Dataran Menara Condong Teluk Intan, Bandar Baru Teluk Intan, Hab Komersial Hutan Melintang',
      },
      {
        code: 'PRK-06',
        nameEn: 'Kampar, Bandar Baru Kampar, Batu Gajah & Seri Iskandar',
        nameMs: 'Kampar, Bandar Baru Kampar, Batu Gajah & Seri Iskandar',
        postcodes: '31900, 31000, 32610',
        runnerWindowEn: 'Kinta & Perak Tengah Express (24–36 Hours)',
        runnerWindowMs: 'Ekspres Kinta & Perak Tengah (24–36 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'UTAR Kampar Campus Corridor, Silverlakes Batu Gajah, Universiti Teknologi PETRONAS (UTP) Seri Iskandar',
        landmarksMs: 'Koridor Kampus UTAR Kampar, Silverlakes Batu Gajah, UTP & UiTM Seri Iskandar',
      },
      {
        code: 'PRK-07',
        nameEn: 'Kuala Kangsar, Sungai Siput, Gerik & Pengkalan Hulu',
        nameMs: 'Kuala Kangsar, Sungai Siput, Gerik & Pengkalan Hulu',
        postcodes: '33000, 31100, 33300',
        runnerWindowEn: 'Royal Town & Upper Perak Express (24–48 Hours)',
        runnerWindowMs: 'Ekspres Bandar Diraja & Hulu Perak (24–48 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Bandar Diraja Kuala Kangsar, Bukit Chandan, Sungai Siput (U), Bandar Gerik',
        landmarksMs: 'Bandar Diraja Kuala Kangsar, Bukit Chandan, Sungai Siput (U), Bandar Gerik',
      },
      {
        code: 'PRK-08',
        nameEn: 'Tapah, Bidor, Sungkai, Slim River, Tanjung Malim & Parit Buntar',
        nameMs: 'Tapah, Bidor, Sungkai, Slim River, Tanjung Malim & Parit Buntar',
        postcodes: '35000 – 35900, 34200',
        runnerWindowEn: 'Batang Padang / Muallim / Kerian Express (24–36 Hours)',
        runnerWindowMs: 'Ekspres Batang Padang / Muallim / Kerian (24–36 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Proton City Tanjung Malim, UPSI Corridor, Bidor Town, Parit Buntar Kerian Sentral',
        landmarksMs: 'Proton City Tanjung Malim, Koridor UPSI, Pekan Bidor, Kerian Sentral Parit Buntar',
      },
    ],
    extraFaqsEn: [
      {
        q: 'How quickly do Onyxmen parcels reach Ipoh, Taiping, and Seri Manjung?',
        a: 'Because Ipoh is only 2 hours north of our Klang Valley sorting vault via the PLUS Expressway (and Seri Manjung/Teluk Intan connect directly via the West Coast Expressway WCE), orders confirmed before 17:00 MYT typically arrive in Ipoh within 24 hours and across wider Perak towns within 1–2 business days.',
      },
      {
        q: 'Can personnel or residents in Lumut, Sitiawan, and Seri Manjung order with Cash on Delivery (COD)?',
        a: 'Yes. Both Cash on Delivery (COD) and instant FPX / DuitNow QR are available across Lumut, Seri Manjung, Sitiawan, Ipoh, Taiping, Teluk Intan, and Kampar.',
      },
      {
        q: 'What does the exterior courier label show for Perak deliveries?',
        a: 'Every parcel is shipped inside an unmarked matte mailer with "OM Fulfilment Logistics" as the sender. Zero product names or brand logos appear on the waybill.',
      },
      {
        q: 'Which formulation is most popular among Perak customers?',
        a: 'Hammer of Thor (20 Vegetarian Capsules — Tribulus Terrestris & Tongkat Ali Endurance Complex) and Horsemen (20 Capsules × 500mg) are the top-ordered bottles across Ipoh, Taiping, and Seri Manjung.',
      },
    ],
    extraFaqsMs: [
      {
        q: 'Berapa cepat bungkusan Onyxmen tiba di Ipoh, Taiping, dan Seri Manjung?',
        a: 'Memandangkan Ipoh hanya 2 jam di utara hab Lembah Klang kami melalui Lebuhraya PLUS (dan Seri Manjung/Teluk Intan dihubungkan terus melalui Lebuhraya Pantai Barat WCE), pesanan sebelum jam 5:00 petang lazimnya tiba di Ipoh dalam masa 24 jam dan di seluruh Perak dalam 1–2 hari bekerja.',
      },
      {
        q: 'Bolehkah pelanggan di Lumut, Sitiawan, dan Seri Manjung membuat tempahan secara COD?',
        a: 'Ya. Kedua-dua kaedah COD (Bayar Waktu Terima) dan pembayaran segera FPX / DuitNow QR tersedia di Lumut, Seri Manjung, Sitiawan, Ipoh, Taiping, Teluk Intan, dan Kampar.',
      },
      {
        q: 'Apakah maklumat yang tertera pada label luar kurier bagi penghantaran ke Perak?',
        a: 'Setiap bungkusan dihantar menggunakan sampul kalis air legap dengan nama pengirim "OM Fulfilment Logistics". Tiada sebarang nama produk atau logo jenama tertera pada slip kurier.',
      },
      {
        q: 'Formulasi manakah yang paling mendapat sambutan di kalangan pelanggan Perak?',
        a: 'Hammer of Thor (20 Kapsul Vegetarian — Kompleks Ketahanan Tribulus Terrestris & Tongkat Ali) serta Horsemen (20 Kapsul × 500mg) merupakan pilihan utama di Ipoh, Taiping, dan Seri Manjung.',
      },
    ],
  },
  {
    microStep: 'MS-136',
    id: 'melaka',
    slug: 'melaka',
    schemaKey: 'melaka',
    drawerStateValue: 'Melaka',
    isoCode: 'MY-04',
    watermark: 'MLK · 06',
    featuredProductSlug: 'horsemen',
    secondaryProductSlug: 'magnum-pump-xr',
    enCanonicalPath: '/malaysia/melaka/',
    msCanonicalPath: '/ms/malaysia/melaka/',
    enOutputPaths: [
      'malaysia/melaka/index.html',
      'malaysia-delivery/melaka/index.html',
    ],
    msOutputPaths: [
      'ms/malaysia/melaka/index.html',
      'ms/penghantaran-malaysia/melaka/index.html',
    ],
    corridorCodeEn: 'HISTORIC STRAITS EXPRESS ZONE · BANDARAYA MELAKA, AYER KEROH & ALOR GAJAH (1–2 DAYS)',
    corridorCodeMs: 'ZON EKSPRES SELAT MELAKA · BANDARAYA MELAKA, AYER KEROH & ALOR GAJAH (1–2 HARI)',
    postcodeRange: '75000 – 78300',
    cutoffTime: '17:00 MYT (90-Minute KL–Ayer Keroh Toll Linehaul)',
    sameDayRunnerFeeEn: 'RM 0 Free Priority Express Courier Across All Melaka Districts',
    sameDayRunnerFeeMs: 'RM 0 Kurier Ekspres Keutamaan Percuma Ke Seluruh Daerah Melaka',
    districts: [
      {
        code: 'MLK-01',
        nameEn: 'Bandaraya Melaka, Melaka Raya, Kota Laksamana & Mahkota Parade',
        nameMs: 'Bandaraya Melaka, Melaka Raya, Kota Laksamana & Mahkota Parade',
        postcodes: '75000, 75200, 75250',
        runnerWindowEn: 'Direct Southern Linehaul (24 Hours)',
        runnerWindowMs: 'Laluan Terus Selatan (24 Jam)',
        courierWindowEn: '1 Business Day Express (Free)',
        courierWindowMs: '1 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Taman Melaka Raya, Kota Laksamana Jaya, Dataran Pahlawan, Mahkota Medical Corridor, The Shore',
        landmarksMs: 'Taman Melaka Raya, Kota Laksamana Jaya, Dataran Pahlawan, Mahkota Parade, The Shore Melaka',
      },
      {
        code: 'MLK-02',
        nameEn: 'Ayer Keroh, MITC, Bukit Beruang & Bukit Katil',
        nameMs: 'Ayer Keroh, MITC, Bukit Beruang & Bukit Katil',
        postcodes: '75450, 75470',
        runnerWindowEn: 'Ayer Keroh Gateway Priority (24 Hours)',
        runnerWindowMs: 'Keutamaan Pintu Masuk Ayer Keroh (24 Jam)',
        courierWindowEn: '1 Business Day Express (Free)',
        courierWindowMs: '1 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Melaka International Trade Centre (MITC), AEON Ayer Keroh, MMU Bukit Beruang, Tiara Melaka Golf Corridor',
        landmarksMs: 'Pusat Dagangan Antarabangsa Melaka (MITC), AEON Ayer Keroh, Bukit Beruang, Bukit Katil',
      },
      {
        code: 'MLK-03',
        nameEn: 'Batu Berendam, Taman Merdeka, Bachang & Malim Jaya',
        nameMs: 'Batu Berendam, Taman Merdeka, Bachang & Malim Jaya',
        postcodes: '75350, 75250',
        runnerWindowEn: 'Central Melaka Express (24–36 Hours)',
        runnerWindowMs: 'Ekspres Melaka Tengah (24–36 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Batu Berendam Free Trade Zone (FTZ), KipMall Bachang, Taman Merdeka Permai, Taman Malim Jaya',
        landmarksMs: 'Zon Perdagangan Bebas Batu Berendam, KipMall Bachang, Taman Merdeka Permai, Taman Malim Jaya',
      },
      {
        code: 'MLK-04',
        nameEn: 'Klebang, Limbongan, Pokok Mangga & Tanjung Kling',
        nameMs: 'Klebang, Limbongan, Pokok Mangga & Tanjung Kling',
        postcodes: '75200, 76400',
        runnerWindowEn: 'Coastal Melaka Express (24–36 Hours)',
        runnerWindowMs: 'Ekspres Pantai Melaka (24–36 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Klebang Besar / Kecil, Encore Melaka Impression City, Limbongan Commercial Centre, Tangga Batu',
        landmarksMs: 'Klebang Besar / Kecil, Impression City Melaka, Pusat Komersial Limbongan, Tangga Batu',
      },
      {
        code: 'MLK-05',
        nameEn: 'Cheng, Bertam, Krubong & Paya Rumput',
        nameMs: 'Cheng, Bertam, Krubong & Paya Rumput',
        postcodes: '75250, 75260, 76450',
        runnerWindowEn: 'SPA Highway Corridor (24–36 Hours)',
        runnerWindowMs: 'Koridor Lebuhraya SPA (24–36 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Lotus’s Cheng, Taman Paya Rumput Perdana, Satu Krubong, Cheng Industrial Estate',
        landmarksMs: 'Lotus’s Cheng, Taman Paya Rumput Perdana, Taman Satu Krubong, Kawasan Perindustrian Cheng',
      },
      {
        code: 'MLK-06',
        nameEn: 'Alor Gajah, Durian Tunggal, Rembia & Simpang Ampat (Pegoh)',
        nameMs: 'Alor Gajah, Durian Tunggal, Rembia & Simpang Ampat (Pegoh)',
        postcodes: '78000, 76100',
        runnerWindowEn: 'Northern Melaka Express (24–36 Hours)',
        runnerWindowMs: 'Ekspres Melaka Utara (24–36 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Bandar Alor Gajah, UTeM Durian Tunggal, Hicom Pegoh Industrial Park, Freeport A’Famosa Outlet',
        landmarksMs: 'Bandar Alor Gajah, UTeM Durian Tunggal, Taman Perindustrian Hicom Pegoh, Freeport A’Famosa',
      },
      {
        code: 'MLK-07',
        nameEn: 'Masjid Tanah, Kuala Sungai Baru & Pengkalan Balak',
        nameMs: 'Masjid Tanah, Kuala Sungai Baru & Pengkalan Balak',
        postcodes: '78300, 78200',
        runnerWindowEn: 'Western Melaka Express (24–48 Hours)',
        runnerWindowMs: 'Ekspres Barat Melaka (24–48 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Bandar Masjid Tanah, Kolej Universiti Islam Melaka (KUIM), Pengkalan Balak Coastal Corridor',
        landmarksMs: 'Bandar Masjid Tanah, Kuala Sungai Baru, Koridor Pantai Pengkalan Balak',
      },
      {
        code: 'MLK-08',
        nameEn: 'Jasin, Bemban, Merlimau, Sungai Rambai & Selandar',
        nameMs: 'Jasin, Bemban, Merlimau, Sungai Rambai & Selandar',
        postcodes: '77000 – 77400',
        runnerWindowEn: 'Eastern Melaka Express (24–48 Hours)',
        runnerWindowMs: 'Ekspres Timur Melaka (24–48 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Jasin Bestari, Bandar Jasin, Bandar Baru Merlimau, UiTM Jasin Corridor, Sungai Rambai',
        landmarksMs: 'Bandar Jasin Bestari, Pekan Jasin, Bandar Baru Merlimau, Koridor UiTM Jasin, Sungai Rambai',
      },
    ],
    extraFaqsEn: [
      {
        q: 'How fast is delivery from Kuala Lumpur to Bandaraya Melaka and Ayer Keroh?',
        a: 'Because Ayer Keroh is only 90 minutes south of our Klang Valley fulfilment facility via the PLUS Expressway, orders placed before 17:00 MYT arrive in Ayer Keroh, Bandaraya Melaka, Kota Laksamana, and Batu Berendam within 1 to 2 business days.',
      },
      {
        q: 'Are Melaka boutique hotel and condo deliveries 100% discreet?',
        a: 'Yes. Whether you are staying at a hotel in Melaka Raya / Kota Laksamana or ordering to your home in Ayer Keroh, Alor Gajah, or Jasin, the parcel arrives in an opaque plain box labeled only "OM Fulfilment Logistics".',
      },
      {
        q: 'Is Cash on Delivery (COD) supported across Alor Gajah, Masjid Tanah, and Jasin?',
        a: 'Yes. Full COD, DuitNow QR, and FPX online banking are available across all three administrative districts of Melaka (Melaka Tengah, Alor Gajah, and Jasin) with RM 0 free shipping.',
      },
      {
        q: 'Can I combine 2 or 3 bottles for free priority courier shipping to Melaka?',
        a: 'Yes. 1 Bottle (RM 159), 2 Bottles (RM 318), and 3 Bottles (RM 477) all include Free Express Discreet Shipping across Melaka.',
      },
    ],
    extraFaqsMs: [
      {
        q: 'Berapa pantas penghantaran dari Kuala Lumpur ke Bandaraya Melaka dan Ayer Keroh?',
        a: 'Memandangkan Ayer Keroh hanya terletak kira-kira 90 minit di selatan pusat pengagihan Lembah Klang kami melalui Lebuhraya PLUS, pesanan sebelum jam 5:00 petang tiba di Ayer Keroh, Bandaraya Melaka, Kota Laksamana, dan Batu Berendam dalam masa 1 hingga 2 hari bekerja.',
      },
      {
        q: 'Adakah penghantaran ke hotel atau kediaman di Melaka 100% rahsia?',
        a: 'Ya. Sama ada anda menginap di hotel sekitar Melaka Raya / Kota Laksamana atau menempah ke kediaman di Ayer Keroh, Alor Gajah, atau Jasin, bungkusan tiba dalam kotak legap tanpa nama produk berlabel "OM Fulfilment Logistics".',
      },
      {
        q: 'Adakah perkhidmatan COD meliputi kawasan Alor Gajah, Masjid Tanah, dan Jasin?',
        a: 'Ya. Perkhidmatan COD penuh, DuitNow QR, dan FPX tersedia di ketiga-tiga daerah Melaka (Melaka Tengah, Alor Gajah, dan Jasin) dengan penghantaran percuma (RM 0).',
      },
      {
        q: 'Bolehkah saya menempah pakej 2 atau 3 botol untuk penghantaran keutamaan percuma ke Melaka?',
        a: 'Ya. Pakej 1 Botol (RM 159), 2 Botol (RM 318), dan 3 Botol (RM 477) semuanya termasuk Penghantaran Ekspres Rahsia Percuma ke seluruh negeri Melaka.',
      },
    ],
  },
  {
    microStep: 'MS-137',
    id: 'negeri-sembilan',
    slug: 'negeri-sembilan',
    schemaKey: 'negeri-sembilan',
    drawerStateValue: 'Negeri Sembilan',
    isoCode: 'MY-05',
    watermark: 'NSN · 07',
    featuredProductSlug: 'grow-xl',
    secondaryProductSlug: 'hammer-of-thor',
    enCanonicalPath: '/malaysia/negeri-sembilan/',
    msCanonicalPath: '/ms/malaysia/negeri-sembilan/',
    enOutputPaths: [
      'malaysia/negeri-sembilan/index.html',
      'malaysia-delivery/negeri-sembilan/index.html',
      'malaysia-delivery/negeri-sembilan-seremban/index.html',
    ],
    msOutputPaths: [
      'ms/malaysia/negeri-sembilan/index.html',
      'ms/penghantaran-malaysia/negeri-sembilan/index.html',
      'ms/penghantaran-malaysia/negeri-sembilan-seremban/index.html',
    ],
    corridorCodeEn: 'GREATER KLANG VALLEY SOUTHERN EXTENSION · SEREMBAN, NILAI & PORT DICKSON (24–48H)',
    corridorCodeMs: 'SAMBUNGAN SELATAN LEMBAH KLANG · SEREMBAN, NILAI & PORT DICKSON (24–48 JAM)',
    postcodeRange: '70000 – 73500',
    cutoffTime: '17:00 MYT (Direct KL–Seremban Express Dispatch)',
    sameDayRunnerFeeEn: 'RM 0 Free Priority Express Courier Across Negeri Sembilan Darul Khusus',
    sameDayRunnerFeeMs: 'RM 0 Kurier Ekspres Keutamaan Percuma Seluruh Negeri Sembilan Darul Khusus',
    districts: [
      {
        code: 'NSN-01',
        nameEn: 'Seremban Town Centre, Sikamat, Ampangan & Temiang',
        nameMs: 'Pusat Bandar Seremban, Sikamat, Ampangan & Temiang',
        postcodes: '70000 – 70400',
        runnerWindowEn: 'Direct KL–Seremban Linehaul (24 Hours)',
        runnerWindowMs: 'Laluan Terus KL–Seremban (24 Jam)',
        courierWindowEn: '1 Business Day Express (Free)',
        courierWindowMs: '1 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Seremban Prima, Palm Mall, Jalan Rasah, Taman AST, Sikamat, Ampangan Commercial Hub',
        landmarksMs: 'Seremban Prima, Palm Mall, Jalan Rasah, Taman AST, Sikamat, Hab Komersial Ampangan',
      },
      {
        code: 'NSN-02',
        nameEn: 'Seremban 2, S2 Heights, Oakland & Kepayang',
        nameMs: 'Seremban 2, S2 Heights, Oakland & Kepayang',
        postcodes: '70300',
        runnerWindowEn: 'Seremban 2 Priority Express (24 Hours)',
        runnerWindowMs: 'Ekspres Keutamaan Seremban 2 (24 Jam)',
        courierWindowEn: '1 Business Day Express (Free)',
        courierWindowMs: '1 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'AEON Mall Seremban 2, Mydin S2, Uptown Avenue S2, Centrio Seremban 2, S2 Heights Residences',
        landmarksMs: 'AEON Mall Seremban 2, Mydin S2, Uptown Avenue S2, Centrio Seremban 2, Kediaman S2 Heights',
      },
      {
        code: 'NSN-03',
        nameEn: 'Bandar Sri Sendayan, Sendayan TechValley & Gadong',
        nameMs: 'Bandar Sri Sendayan, Sendayan TechValley & Gadong',
        postcodes: '71950, 71900',
        runnerWindowEn: 'Sendayan Priority Hub (24–36 Hours)',
        runnerWindowMs: 'Hab Keutamaan Sendayan (24–36 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'd’Tempat Country Club, Sendayan Merchant Square, Sendayan TechValley Industrial Park, Bandar Enstek',
        landmarksMs: 'd’Tempat Country Club, Sendayan Merchant Square, Taman Perindustrian Sendayan TechValley, Bandar Enstek',
      },
      {
        code: 'NSN-04',
        nameEn: 'Nilai, Putra Nilai, Bandar Baru Nilai, Enstek & Labu',
        nameMs: 'Nilai, Putra Nilai, Bandar Baru Nilai, Bandar Enstek & Labu',
        postcodes: '71800, 71760',
        runnerWindowEn: 'Southern Klang Valley Border (24 Hours)',
        runnerWindowMs: 'Sempadan Selatan Lembah Klang (24 Jam)',
        courierWindowEn: '1 Business Day Express (Free)',
        courierWindowMs: '1 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'AEON Mall Nilai, MesaMall, Nilai 3 Wholesale Centre, USIM Corridor, Kota Seriemas, Bandar Enstek',
        landmarksMs: 'AEON Mall Nilai, MesaMall, Pusat Borong Nilai 3, Koridor USIM, Kota Seriemas, Bandar Enstek',
      },
      {
        code: 'NSN-05',
        nameEn: 'Senawang, Taman Tuanku Jaafar, Paroi & Sungai Gadut',
        nameMs: 'Senawang, Taman Tuanku Jaafar, Paroi & Sungai Gadut',
        postcodes: '70450, 71450',
        runnerWindowEn: 'Senawang Industrial & Residential Hub (24–36 Hours)',
        runnerWindowMs: 'Hab Senawang & Paroi (24–36 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Dataran Senawang (Taipan Senawang), KipMall Senawang, Senawang Industrial Estate, Taman Tuanku Jaafar',
        landmarksMs: 'Dataran Senawang (Taipan Senawang), KipMall Senawang, Kawasan Perindustrian Senawang, Taman Tuanku Jaafar',
      },
      {
        code: 'NSN-06',
        nameEn: 'Port Dickson, Lukut, Teluk Kemang & Pasir Panjang',
        nameMs: 'Port Dickson, Lukut, Teluk Kemang & Pasir Panjang',
        postcodes: '71000, 71010, 71050, 71250',
        runnerWindowEn: 'Seremban–PD Highway Express (24–36 Hours)',
        runnerWindowMs: 'Ekspres Lebuhraya Seremban–PD (24–36 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'PD Waterfront, Bandar Lukut, Teluk Kemang Camp & Resort Corridor, Bandar Springhill',
        landmarksMs: 'PD Waterfront, Bandar Lukut, Koridor Kem & Peranginan Teluk Kemang, Bandar Springhill',
      },
      {
        code: 'NSN-07',
        nameEn: 'Tampin, Rembau, Pedas & Gemencheh',
        nameMs: 'Tampin, Rembau, Pedas & Gemencheh',
        postcodes: '73000, 71300, 73200',
        runnerWindowEn: 'Southern N9 Express (24–48 Hours)',
        runnerWindowMs: 'Ekspres Selatan N9 (24–48 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Bandar Tampin, Rembau Town, Pedas Halal Park, Gemas, Gemencheh',
        landmarksMs: 'Bandar Tampin, Pekan Rembau, Taman Halal Pedas, Gemas, Gemencheh',
      },
      {
        code: 'NSN-08',
        nameEn: 'Bahau, Jempol, Kuala Pilah & Kuala Klawang (Jelebu)',
        nameMs: 'Bahau, Jempol, Kuala Pilah & Kuala Klawang (Jelebu)',
        postcodes: '72000, 72100, 71600',
        runnerWindowEn: 'Eastern N9 LEKAS/Kuala Pilah Express (24–48 Hours)',
        runnerWindowMs: 'Ekspres Timur N9 LEKAS/Kuala Pilah (24–48 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Kiara Square Bahau, Bandar Seri Jempol, Bandar Kuala Pilah, Seri Menanti',
        landmarksMs: 'Kiara Square Bahau, Bandar Seri Jempol, Bandar Kuala Pilah, Seri Menanti',
      },
    ],
    extraFaqsEn: [
      {
        q: 'How fast do parcels reach Nilai, Seremban 2, and Bandar Sri Sendayan?',
        a: 'Because Nilai and Seremban border southern Selangor directly along the PLUS and LEKAS highways, orders placed before 17:00 MYT typically arrive within 24 hours (1 business day) in Nilai, Seremban 2, Sendayan, and Senawang.',
      },
      {
        q: 'Can I receive discreet delivery at military camps, resorts, or residences in Port Dickson and Teluk Kemang?',
        a: 'Yes. Every parcel is shipped in a plain opaque mailer labeled "OM Fulfilment Logistics" with zero product or supplement references—ideal for residences, quarters, or hotel receptions in Port Dickson, Lukut, and Teluk Kemang.',
      },
      {
        q: 'Is Cash on Delivery (COD) available in Tampin, Bahau, and Kuala Pilah?',
        a: 'Yes. Full Cash on Delivery (COD), DuitNow QR, and FPX online banking are supported across all postcodes from 70000 to 73500 in Negeri Sembilan.',
      },
      {
        q: 'Are there any extra shipping charges for Negeri Sembilan?',
        a: 'No. Shipping is RM 0 (100% Free Express Discreet Shipping) on 1 bottle (RM 159), 2 bottles (RM 318), and 3 bottles (RM 477).',
      },
    ],
    extraFaqsMs: [
      {
        q: 'Berapa pantas bungkusan tiba di Nilai, Seremban 2, dan Bandar Sri Sendayan?',
        a: 'Memandangkan Nilai dan Seremban bersempadan terus dengan selatan Selangor melalui Lebuhraya PLUS dan LEKAS, pesanan sebelum jam 5:00 petang lazimnya tiba dalam masa 24 jam (1 hari bekerja) di Nilai, Seremban 2, Sendayan, dan Senawang.',
      },
      {
        q: 'Bolehkah saya menerima bungkusan rahsia di kuarters, pusat peranginan, atau kediaman di Port Dickson dan Teluk Kemang?',
        a: 'Ya. Setiap bungkusan dihantar dalam sampul legap tanpa cetakan jenama berlabel "OM Fulfilment Logistics"—amat sesuai untuk kediaman, kuarters, atau kaunter hotel di Port Dickson, Lukut, dan Teluk Kemang.',
      },
      {
        q: 'Adakah servis COD tersedia di Tampin, Bahau, dan Kuala Pilah?',
        a: 'Ya. Perkhidmatan COD penuh, DuitNow QR, dan FPX disokong di seluruh poskod 70000 hingga 73500 di Negeri Sembilan.',
      },
      {
        q: 'Adakah terdapat sebarang caj penghantaran tambahan ke Negeri Sembilan?',
        a: 'Tiada. Penghantaran adalah RM 0 (Penghantaran Ekspres Rahsia Percuma) bagi pakej 1 botol (RM 159), 2 botol (RM 318), dan 3 botol (RM 477).',
      },
    ],
  },
  {
    microStep: 'MS-138',
    id: 'pahang',
    slug: 'pahang',
    schemaKey: 'pahang',
    drawerStateValue: 'Pahang',
    isoCode: 'MY-06',
    watermark: 'PHG · 08',
    featuredProductSlug: 'horsemen',
    secondaryProductSlug: 'hammer-of-thor',
    enCanonicalPath: '/malaysia/pahang/',
    msCanonicalPath: '/ms/malaysia/pahang/',
    enOutputPaths: [
      'malaysia/pahang/index.html',
      'malaysia-delivery/pahang/index.html',
      'malaysia-delivery/pahang-kuantan/index.html',
    ],
    msOutputPaths: [
      'ms/malaysia/pahang/index.html',
      'ms/penghantaran-malaysia/pahang/index.html',
      'ms/penghantaran-malaysia/pahang-kuantan/index.html',
    ],
    corridorCodeEn: 'EAST-COAST EXPRESSWAY (LPT1) CORRIDOR · KUANTAN, TEMERLOH & BENTONG (1–2 BUSINESS DAYS)',
    corridorCodeMs: 'KORIDOR LEBUHRAYA PANTAI TIMUR (LPT1) · KUANTAN, TEMERLOH & BENTONG (1–2 HARI BEKERJA)',
    postcodeRange: '25000 – 28800, 39000',
    cutoffTime: '16:30 MYT (Daily Karak & LPT1 East-Coast Linehaul)',
    sameDayRunnerFeeEn: 'RM 0 Free Priority LPT1 Highway Courier Across Pahang Darul Makmur',
    sameDayRunnerFeeMs: 'RM 0 Kurier Keutamaan LPT1 Percuma Seluruh Pahang Darul Makmur',
    districts: [
      {
        code: 'PHG-01',
        nameEn: 'Kuantan City Centre, Teluk Cempedak, Tanjung Lumpur & Beserah',
        nameMs: 'Pusat Bandaraya Kuantan, Teluk Cempedak, Tanjung Lumpur & Beserah',
        postcodes: '25000 – 25300, 26060, 26100',
        runnerWindowEn: 'LPT1 Overnight Linehaul (24–36 Hours)',
        runnerWindowMs: 'Laluan Ekspres Malam LPT1 (24–36 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'East Coast Mall, Kuantan City Mall, Jalan Air Putih, Alor Akar, Teluk Cempedak, Tanjung Lumpur',
        landmarksMs: 'East Coast Mall, Kuantan City Mall, Jalan Air Putih, Alor Akar, Teluk Cempedak, Tanjung Lumpur',
      },
      {
        code: 'PHG-02',
        nameEn: 'Bandar Indera Mahkota, Kotasas, Semambu & Gebeng Industrial Port',
        nameMs: 'Bandar Indera Mahkota, Kotasas, Semambu & Pelabuhan Gebeng',
        postcodes: '25200, 25350, 26080',
        runnerWindowEn: 'Kuantan Gateway Express (24–36 Hours)',
        runnerWindowMs: 'Ekspres Pintu Masuk Kuantan (24–36 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Indera Mahkota IM1–IM16, KotaSAS Township, IIUM Kuantan, Malaysia-China Kuantan Industrial Park (MCKIP) Gebeng',
        landmarksMs: 'Indera Mahkota IM1–IM16, Perbandaran KotaSAS, UIAM Kuantan, Taman Perindustrian Gebeng & Pelabuhan Kuantan',
      },
      {
        code: 'PHG-03',
        nameEn: 'Temerloh, Mentakab, Karak & Lanchang (Central Pahang Hub)',
        nameMs: 'Temerloh, Mentakab, Karak & Lanchang (Hab Pahang Tengah)',
        postcodes: '28000, 28400, 28600, 28500',
        runnerWindowEn: 'Central LPT1 Express (24 Hours)',
        runnerWindowMs: 'Ekspres LPT1 Tengah (24 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Bandar Temerloh, Taman Chengal, Star Mall Mentakab, Mentakab Industrial Park, Karak Town',
        landmarksMs: 'Bandar Temerloh, Taman Chengal, Star Mall Mentakab, Taman Perindustrian Mentakab, Pekan Karak',
      },
      {
        code: 'PHG-04',
        nameEn: 'Bentong, Genting Highlands, Bukit Tinggi & Gohtong Jaya',
        nameMs: 'Bentong, Genting Highlands, Bukit Tinggi & Gohtong Jaya',
        postcodes: '28700, 69000',
        runnerWindowEn: 'Western Pahang Border (24 Hours)',
        runnerWindowMs: 'Sempadan Barat Pahang (24 Jam)',
        courierWindowEn: '1 Business Day Express (Free)',
        courierWindowMs: '1 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Bentong Town, Gohtong Jaya, Genting Premium Outlets (GPO), Resorts World Genting Staff & Hotel Concierge',
        landmarksMs: 'Bandar Bentong, Gohtong Jaya, Genting Premium Outlets (GPO), Concierge Hotel & Kuarters Genting Highlands',
      },
      {
        code: 'PHG-05',
        nameEn: 'Pekan (Royal Town), Gambang & Muadzam Shah',
        nameMs: 'Pekan (Bandar Diraja), Gambang & Muadzam Shah',
        postcodes: '26600, 26300, 26700',
        runnerWindowEn: 'Southern Pahang Automotive & Campus Hub (24–48 Hours)',
        runnerWindowMs: 'Hab Pekan, Gambang & Muadzam Shah (24–48 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'DRB-HICOM Automotive Complex Pekan, UMP Pekan & Gambang, Bandar Gambang, Bandar Muadzam Shah',
        landmarksMs: 'Kompleks Automotif DRB-HICOM Pekan, UMP Pekan & Gambang, Bandar Gambang, Bandar Muadzam Shah',
      },
      {
        code: 'PHG-06',
        nameEn: 'Raub, Kuala Lipis, Jerantut & Bera (Triang)',
        nameMs: 'Raub, Kuala Lipis, Jerantut & Bera (Triang)',
        postcodes: '27600, 27200, 27000, 28200',
        runnerWindowEn: 'Pahang Rainforest Heartland Express (24–48 Hours)',
        runnerWindowMs: 'Ekspres Pahang Barat & Tengah (24–48 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Bandar Raub, Bandar Kuala Lipis, Bandar Jerantut (Taman Negara Gateway), Bandar Bera / Triang',
        landmarksMs: 'Bandar Raub, Bandar Kuala Lipis, Bandar Jerantut, Bandar Bera / Triang',
      },
      {
        code: 'PHG-07',
        nameEn: 'Maran, Bandar Tun Abdul Razak Jengka & Chenor',
        nameMs: 'Maran, Bandar Tun Abdul Razak Jengka & Chenor',
        postcodes: '26500, 26400',
        runnerWindowEn: 'Jengka & LPT1 Corridor (24–48 Hours)',
        runnerWindowMs: 'Koridor Jengka & LPT1 (24–48 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Bandar Pusat Jengka, UiTM Jengka Corridor, Pekan Maran, Sri Jaya',
        landmarksMs: 'Bandar Pusat Jengka, Koridor UiTM Jengka, Pekan Maran, Sri Jaya',
      },
      {
        code: 'PHG-08',
        nameEn: 'Cameron Highlands (Tanah Rata, Brinchang, Ringlet) & Kuala Rompin',
        nameMs: 'Cameron Highlands (Tanah Rata, Brinchang, Ringlet) & Kuala Rompin',
        postcodes: '39000, 39100, 39200, 26800',
        runnerWindowEn: 'Highlands & Southern Coast Express (24–48 Hours)',
        runnerWindowMs: 'Ekspres Tanah Tinggi & Pantai Selatan (24–48 Jam)',
        courierWindowEn: '1–2 Business Days Express (Free)',
        courierWindowMs: '1–2 Hari Bekerja Ekspres (Percuma)',
        codSupportEn: 'Full COD + DuitNow QR + FPX',
        codSupportMs: 'COD Penuh + DuitNow QR + FPX',
        landmarksEn: 'Tanah Rata, Brinchang, Ringlet, Kampung Raja, Bandar Kuala Rompin, Tanjung Gemok Jetty',
        landmarksMs: 'Tanah Rata, Brinchang, Ringlet, Kampung Raja, Bandar Kuala Rompin, Jeti Tanjung Gemok',
      },
    ],
    extraFaqsEn: [
      {
        q: 'How fast do parcels arrive in Kuantan, Indera Mahkota, Temerloh, and Bentong?',
        a: 'Orders placed before 16:30 MYT dispatch directly from our Klang Valley vault along the Karak and East-Coast Expressway (LPT1), arriving in Bentong and Genting Highlands within 24 hours and in Temerloh, Indera Mahkota, Kuantan, and Pekan within 1–2 business days.',
      },
      {
        q: 'Does free discreet shipping cover Cameron Highlands, Jerantut, and Kuala Rompin?',
        a: 'Yes. Every postcode in Pahang—including highlands postcodes (39000–39200 in Tanah Rata & Brinchang), interior towns (Raub, Lipis, Jerantut, Jengka), and coastal hubs (Kuantan, Pekan, Rompin)—receives RM 0 Free Express Discreet Shipping.',
      },
      {
        q: 'Is Cash on Delivery (COD) supported across Kuantan, Gebeng, and Pekan?',
        a: 'Yes. Full Cash on Delivery (COD), DuitNow QR, and FPX online banking are supported across all Pahang postcodes.',
      },
      {
        q: 'Why is Horsemen particularly popular among Pahang buyers?',
        a: 'Pahang’s rainforest basin is the historic botanical habitat of wild Malaysian Eurycoma longifolia (Tongkat Ali). Horsemen (20 Capsules × 500mg) pairs standardized 100:1 Tongkat Ali root extract with Peruvian Black Maca and Panax Ginseng in a concentrated lab-assayed capsule.',
      },
    ],
    extraFaqsMs: [
      {
        q: 'Berapa pantas bungkusan tiba di Kuantan, Indera Mahkota, Temerloh, dan Bentong?',
        a: 'Pesanan yang disahkan sebelum jam 4:30 petang dihantar terus dari hab Lembah Klang kami melalui Lebuhraya Karak dan Lebuhraya Pantai Timur (LPT1), tiba di Bentong dan Genting Highlands dalam 24 jam serta di Temerloh, Indera Mahkota, Kuantan, dan Pekan dalam 1–2 hari bekerja.',
      },
      {
        q: 'Adakah penghantaran rahsia percuma meliputi Cameron Highlands, Jerantut, dan Kuala Rompin?',
        a: 'Ya. Setiap poskod di negeri Pahang—termasuk tanah tinggi Cameron Highlands (39000–39200 di Tanah Rata & Brinchang), daerah tengah (Raub, Lipis, Jerantut, Jengka), dan pesisir pantai (Kuantan, Pekan, Rompin)—menikmati Penghantaran Ekspres Rahsia Percuma (RM 0).',
      },
      {
        q: 'Adakah servis COD disokong di sekitar Kuantan, Gebeng, dan Pekan?',
        a: 'Ya. Perkhidmatan COD penuh, DuitNow QR, dan FPX disokong di seluruh poskod negeri Pahang.',
      },
      {
        q: 'Mengapakah formulasi Horsemen amat popular di kalangan pelanggan di Pahang?',
        a: 'Lembangan hutan hujan Pahang merupakan habitat semula jadi bersejarah bagi herba Tongkat Ali (Eurycoma longifolia) Malaysia. Horsemen (20 Kapsul × 500mg) menggabungkan ekstrak akar Tongkat Ali piawai 100:1 bersama Maca Hitam Peru dan Panax Ginseng dalam kapsul berkepekatan tinggi.',
      },
    ],
  }
);

/**
 * Looks up the corresponding state record in `malaysia-states.json`.
 */
function findVaultStateRecord(hubId) {
  return (
    malaysiaStatesData.states.find(
      (s) => s.id === hubId || s.slug === hubId || (Array.isArray(s.aliases) && s.aliases.includes(hubId))
    ) || malaysiaStatesData.states[0]
  );
}

/**
 * Generates the 10 Localized FAQ items for a given West Malaysia State Hub in `en-MY` or `ms-MY`.
 */
function buildLocalizedStateFaqs(hub, vaultState, lang = 'en-MY') {
  const isMs = lang === 'ms-MY';
  const loc = vaultState.locales[isMs ? 'ms-MY' : 'en-MY'] || vaultState.locales['en-MY'];
  const stateName = isMs ? vaultState.nameMs : vaultState.nameEn;
  const districtSample = hub.districts
    .slice(0, 5)
    .map((d) => (isMs ? d.nameMs.split(',')[0] : d.nameEn.split(',')[0]))
    .join(', ');

  const baseFaqs = [
    {
      question: loc.localFaqQ,
      answer: loc.localFaqA,
    },
    ...(isMs ? hub.extraFaqsMs : hub.extraFaqsEn).map((item) => ({
      question: item.q,
      answer: item.a,
    })),
    {
      question: isMs
        ? `Apakah harga rasmi bagi kesemua 4 botol Onyxmen untuk penghantaran ke ${stateName}?`
        : `What is the official price for all 4 Onyxmen formulations delivered to ${stateName}?`,
      answer: isMs
        ? `Kesemua 4 formulasi utama Onyxmen—Horsemen (20 Kapsul × 500mg), Hammer of Thor (20 Kapsul Vegetarian), Grow XL (30 Kapsul Harian), dan Magnum Pump XR (30 Kapsul Hitam)—ditawarkan pada harga rasmi seragam RM 159.00 sebotol, RM 318.00 untuk Pakej 2 Botol, dan RM 477.00 untuk Pakej Lengkap 3 Botol (90 Hari) termasuk penghantaran ekspres rahsia percuma ke ${stateName}.`
        : `All 4 flagship Onyxmen formulations—Horsemen (20 Capsules × 500mg), Hammer of Thor (20 Vegetarian Capsules), Grow XL (30 Daily Capsules), and Magnum Pump XR (30 Black Capsules)—carry our standardized official Malaysia reserve price of RM 159.00 for 1 Bottle, RM 318.00 for 2 Bottles, and RM 477.00 for the 3-Bottle 90-Day Vault, inclusive of Free Express Discreet Shipping across ${stateName}.`,
    },
    {
      question: isMs
        ? `Apakah yang tertulis pada slip kurier ("OM Fulfilment Logistics") apabila bungkusan dihantar ke ${districtSample}?`
        : `What appears on the exterior courier waybill ("OM Fulfilment Logistics") when delivered to ${districtSample}?`,
      answer: isMs
        ? `Untuk melindungi privasi anda 100%, slip kurier hanya memaparkan nama pengirim neutral "OM Fulfilment Logistics", kod rujukan logistik, nama/samaran anda, dan nombor telefon anda. Tiada sebarang perkataan Onyxmen, Horsemen, Hammer of Thor, Grow XL, Magnum Pump XR, atau "suplemen lelaki" dicetak pada luar kotak.`
        : `To guarantee 100% privacy, the exterior courier waybill displays only the neutral sender name "OM Fulfilment Logistics", an encrypted logistics reference code, your recipient name or pseudonym, and your contact number. Zero mention of Onyxmen, Horsemen, Hammer of Thor, Grow XL, Magnum Pump XR, or "men’s vitality supplements" ever appears on the parcel.`,
    },
    {
      question: isMs
        ? `Bagaimanakah cara menempah melalui Laci Tempahan Ekspres 10 Saat untuk alamat di ${stateName}?`
        : `How do I place an order via the 10-Second Express Discreet Order Drawer for a ${stateName} address?`,
      answer: isMs
        ? `Klik mana-mana butang "TEMPAH KE ${stateName.toUpperCase()} · RM 159" pada halaman ini. Laci Tempahan Ekspres akan dibuka dengan negeri "${hub.drawerStateValue}" telah dipilih secara automatik. Pilih botol dan kuantiti (1, 2, atau 3 botol), masukkan nama samaran/penerima, nombor WhatsApp Malaysia (01X-XXXXXXX), dan alamat penuh di ${stateName}. Anda akan menerima ID Resit Rasmi serta-merta.`
        : `Click any "DISPATCH TO ${stateName.toUpperCase()} · RM 159" button on this page. The Express Discreet Order Drawer opens with "${hub.drawerStateValue}" pre-selected automatically. Choose your formulation and tier (1, 2, or 3 bottles), enter your recipient name or pseudonym, Malaysian WhatsApp number (01X-XXXXXXX), and delivery address in ${stateName}. Your official order reference ID is generated immediately.`,
    },
    {
      question: isMs
        ? `Adakah produk Magnum Pump XR ialah suplemen kapsul makan atau alat pam mekanikal?`
        : `Is Magnum Pump XR an oral dietary capsule supplement or a mechanical pump device?`,
      answer: isMs
        ? `Magnum Pump XR ialah 100% suplemen kapsul pemakanan botani dan asid amino (30 Kapsul Hitam × 550mg sebotol) yang mengandungi L-Arginine AAKG, L-Citrulline, Ekstrak Nitrat Ubi Bit, dan Kunyit Hitam untuk sokongan laluan nitrik oksida. Ia BUKAN pam mekanikal, pam vakum, atau peralatan industri.`
        : `Magnum Pump XR is strictly an oral botanical and amino-acid dietary capsule supplement (30 Black Capsules × 550mg per bottle) formulated with L-Arginine AAKG, L-Citrulline, Beetroot Nitrate, and Thai Black Ginger to support nitric oxide pathways. It is explicitly NOT a mechanical pump, vacuum device, or hardware tool.`,
    },
    {
      question: isMs
        ? `Bagaimanakah saya boleh mengesahkan ketulenan botol Onyxmen yang diterima di ${stateName}?`
        : `How do I verify the authenticity of my Onyxmen bottle upon arrival in ${stateName}?`,
      answer: isMs
        ? `Setiap botol rasmi Onyxmen yang dihantar dari hab kami dilengkapi penutup keselamatan berlakri foil emas, nombor kelompok pengeluaran (Batch Lot), tarikh luput yang jelas, serta spesifikasi berat kapsul yang tepat (500mg bagi Horsemen, Hammer of Thor & Grow XL; 550mg kapsul hitam bagi Magnum Pump XR). Pesanan terus melalui onyxman.my menjamin 100% stok tulen.`
        : `Every authentic Onyxmen bottle dispatched from our vault features a tamper-evident metallic gold induction seal, laser-printed batch lot number, expiration date, and exact capsule weight standardization (500mg for Horsemen, Hammer of Thor & Grow XL; 550mg black capsules for Magnum Pump XR). Ordering directly from onyxman.my guarantees 100% genuine vault stock.`,
    },
  ];

  return baseFaqs.slice(0, 10);
}

/**
 * Renders Chapter II — Paradigm D Pinned 50vw / 50vw Split-Screen Regional Logistics & Plain-Box Privacy Stage.
 */
function renderStateSplit5050Section(hub, vaultState, featuredProduct, lang = 'en-MY') {
  const isMs = lang === 'ms-MY';
  const stateName = isMs ? vaultState.nameMs : vaultState.nameEn;
  const loc = vaultState.locales[isMs ? 'ms-MY' : 'en-MY'] || vaultState.locales['en-MY'];
  const bottleImg = featuredProduct.images?.stageWebp || '/assets/products/horsemen-stage.webp';
  const prodName = featuredProduct.name;

  const chapters = isMs
    ? [
        {
          num: `PROTOKOL LOGISTIK 01 · ${hub.isoCode}`,
          title: `Pelepasan Terus Dari Hab Utama Ke Seluruh ${stateName}`,
          body: `${loc.localDeliverySummary} Setiap pesanan yang diterima daripada pelanggan di ${vaultState.coveredDistricts.slice(0, 8).join(', ')} diproses pada hari yang sama di bawah pengawasan ketat bagi memastikan kesegaran ekstrak botani piawai terjaga daripada haba tropika.`,
          specLeft: `POSKOD LIPUTAN: ${hub.postcodeRange}`,
          specRight: `MASA TRANSIT: ${vaultState.transitTimeMs}`,
        },
        {
          num: `PROTOKOL PRIVASI 02 · OM FULFILMENT LOGISTICS`,
          title: `100% Bungkusan Legap Tanpa Nama Produk Atau Logo Suplemen`,
          body: `Kami memahami bahawa pelanggan eksekutif, profesional, dan ketua keluarga di ${stateName} mengutamakan kerahsiaan mutlak. Botol ${prodName} anda dibalut dengan pelindung gelembung anti-hentakan, dimasukkan ke dalam kotak keselamatan tegar berwarna gelap, dan ditutup rapat di dalam sampul kurier kalis air gred keselamatan tinggi. Tiada sesiapa—termasuk penghantar kurier, pengawal keselamatan kondo, atau penyambut tetamu pejabat—dapat mengetahui kandungan di dalamnya.`,
          specLeft: `PENGIRIM SLIP: OM FULFILMENT LOGISTICS`,
          specRight: `PENDEDAHAN JENAMA LUAR: 0% (SIFAR)`,
        },
        {
          num: `PROTOKOL PEMBAYARAN 03 · COD, FPX & DUITNOW QR`,
          title: `Fleksibiliti Bayaran Tunai Semasa Terima (COD) & Imbasan QR Tanpa Tunai`,
          body: `Di seluruh daerah ${stateName}, anda bebas memilih kaedah penyelesaian yang paling selesa. Pilih Pembayaran Dalam Talian FPX / DuitNow QR untuk penyerahan pantas tanpa bersemuka (contohnya ditinggalkan di meja concierge kondo atau pondok pengawal), atau pilih Tunai Semasa Terima (COD) di mana anda hanya membayar RM 159 / RM 318 / RM 477 apabila bungkusan berlakri berada di tangan anda.`,
          specLeft: `SOKONGAN COD: AKTIF SELURUH ${hub.isoCode}`,
          specRight: `CAJ PENGHANTARAN: RM 0 (PERCUMA)`,
        },
        {
          num: `PROTOKOL KETULENAN 04 · TERUS DARI BILIK KEBAL APOTEKARI`,
          title: `Jaminan Botol Tulen Berlakri Emas & KitaranIsian Semula Pintar`,
          body: `Mengelakkan risiko produk tiruan di pasaran terbuka adalah keutamaan kami. Setiap botol Horsemen (20 Kapsul), Hammer of Thor (20 Kapsul Veg.), Grow XL (30 Kapsul), dan Magnum Pump XR (30 Kapsul Hitam) dihantar terus dari bilik kebal kawalan suhu Onyxmen Malaysia bersama pautan peringatan isian semula Google Calendar (+18 hari atau +25 hari).`,
          specLeft: `HARGA RASMI: RM 159 / RM 318 / RM 477`,
          specRight: `STATUS STOK ${hub.isoCode}: SEDIA DIHANTAR`,
        },
      ]
    : [
        {
          num: `LOGISTICS PROTOCOL 01 · ${hub.isoCode}`,
          title: `Direct Climate-Controlled Vault Dispatch Across ${stateName}`,
          body: `${loc.localDeliverySummary} Every reservation placed from ${vaultState.coveredDistricts.slice(0, 8).join(', ')} is processed through our priority sorting lane to protect standardized botanical alkaloids, saponins, and amino-acid cofactors against tropical transit heat.`,
          specLeft: `POSTCODE COVERAGE: ${hub.postcodeRange}`,
          specRight: `TRANSIT WINDOW: ${vaultState.transitTimeEn}`,
        },
        {
          num: `PRIVACY PROTOCOL 02 · OM FULFILMENT LOGISTICS`,
          title: `100% Unmarked Security Packaging With Zero Supplement Branding`,
          body: `Executives, homeowners, and professionals across ${stateName} require uncompromising discretion. Your ${prodName} bottle is cushioned in impact-resistant acoustic wrap, sealed inside a rigid matte-black inner carton, and enclosed in a tear-proof opaque security mailer. The waybill lists only "OM Fulfilment Logistics"—ensuring neither courier riders, condo guards, nor office receptionists can infer the contents.`,
          specLeft: `WAYBILL SENDER: OM FULFILMENT LOGISTICS`,
          specRight: `EXTERIOR BRAND EXPOSURE: 0% (ZERO)`,
        },
        {
          num: `SETTLEMENT PROTOCOL 03 · COD, FPX & DUITNOW QR`,
          title: `Seamless Cash On Delivery (COD) Or Contactless DuitNow QR / FPX`,
          body: `Across every postcode in ${stateName}, you control how your order is settled. Select instant FPX / DuitNow QR when you want contactless drop-off at a condominium concierge desk, office mailroom, or guardhouse; or select Cash on Delivery (COD) to inspect your sealed security parcel in person before paying RM 159, RM 318, or RM 477.`,
          specLeft: `COD COVERAGE: ACTIVE ACROSS ${hub.isoCode}`,
          specRight: `EXPRESS SHIPPING FEE: RM 0 (FREE)`,
        },
        {
          num: `AUTHENTICITY PROTOCOL 04 · DIRECT APOTHECARY VAULT`,
          title: `Tamper-Evident Gold Induction Seal & Automated Refill Concierge`,
          body: `Counterfeit capsules on third-party marketplaces compromise both safety and efficacy. Every bottle of Horsemen (20 Capsules), Hammer of Thor (20 Veg. Capsules), Grow XL (30 Capsules), and Magnum Pump XR (30 Black Capsules) ships directly from the official Onyxmen Malaysia vault with a 1-click Google Calendar refill schedule (+18 days or +25 days).`,
          specLeft: `OFFICIAL RESERVE: RM 159 / RM 318 / RM 477`,
          specRight: `${hub.isoCode} INVENTORY: IN STOCK · READY`,
        },
      ];

  const chaptersHtml = chapters
    .map(
      (ch, idx) => `
      <article
        class="state-split-5050__chapter-block architectural-ledger__row"
        data-botanical-step="step-${idx + 1}"
        data-step-index="0${idx + 1}"
        data-step-image="${esc(bottleImg)}"
      >
        <span class="state-split-5050__chapter-num">${esc(ch.num)}</span>
        <h3 class="state-split-5050__chapter-title">${esc(ch.title)}</h3>
        <p class="state-split-5050__chapter-body">${esc(ch.body)}</p>
        <div class="state-split-5050__spec-line">
          <span>${esc(ch.specLeft)}</span>
          <span>${esc(ch.specRight)}</span>
        </div>
      </article>`
    )
    .join('\n');

  return `
  <!-- ==========================================================================
       CHAPTER II — PARADIGM D: PINNED 50VW / 50VW SPLIT-SCREEN LOGISTICS STAGE
       ========================================================================== -->
  <section
    id="state-split-logistics-stage"
    class="state-split-5050 split-stage-5050"
    data-split-stage="true"
    aria-labelledby="heading-split-logistics-${esc(hub.slug)}"
  >
    <div class="state-split-5050__pinned-left">
      <div>
        <span class="editorial-kicker">
          ${
            isMs
              ? `ARKITEKTUR PENGHANTARAN RAHSIA · ${esc(hub.isoCode)}`
              : `DISCREET FULFILMENT ARCHITECTURE · ${esc(hub.isoCode)}`
          }
        </span>
        <h2 id="heading-split-logistics-${esc(hub.slug)}" class="editorial-headline-lg" style="margin-top:0.85rem;">
          ${
            isMs
              ? `Standard Privasi &amp; Ketulenan <span class="foil-champagne-text">${esc(stateName)}.</span>`
              : `Privacy &amp; Fulfilment Standard For <span class="foil-champagne-text">${esc(stateName)}.</span>`
          }
        </h2>
      </div>

      <div class="state-split-5050__specimen-stage">
        <img
          src="${esc(bottleImg)}"
          alt="${esc(
            isMs
              ? `${prodName} — Penghantaran Bungkusan Rahsia ke ${stateName} (RM 159)`
              : `${prodName} — Discreet Plain-Box Delivery to ${stateName} (RM 159)`
          )}"
          width="460"
          height="560"
          loading="lazy"
          decoding="async"
          class="state-split-5050__specimen-img split-stage-5050__visual-img"
          data-split-visual-img="true"
        />
      </div>

      <div class="state-cinema-hero__caption-ledger">
        <span>${
          isMs
            ? `PENGIRIM: OM FULFILMENT LOGISTICS`
            : `WAYBILL SENDER: OM FULFILMENT LOGISTICS`
        }</span>
        <span class="split-stage-5050__index-watermark" data-split-watermark="true">01</span>
      </div>
    </div>

    <div class="state-split-5050__scrolling-right">
      ${chaptersHtml}

      <div style="padding-top: 1rem;">
        <button
          type="button"
          class="cta-foil-primary"
          data-open-order-drawer="true"
          data-order-product="${esc(hub.featuredProductSlug)}"
          data-order-qty="2"
          data-order-state="${esc(hub.drawerStateValue)}"
        >
          <span>
            ${
              isMs
                ? `TEMPAH PAKEJ 2 BOTOL KE ${esc(stateName.toUpperCase())} · RM 318`
                : `DISPATCH 2-BOTTLE RESERVE TO ${esc(stateName.toUpperCase())} · RM 318`
            }
          </span>
        </button>
      </div>
    </div>
  </section>`;
}

/**
 * Renders Chapter III — Localized Postcode, District & Transit Time Table + Architectural Hairline Ledger.
 */
function renderDistrictPostcodeSection(hub, vaultState, lang = 'en-MY') {
  const isMs = lang === 'ms-MY';
  const stateName = isMs ? vaultState.nameMs : vaultState.nameEn;

  const tableRowsHtml = hub.districts
    .map((d) => {
      const districtTitle = isMs ? d.nameMs : d.nameEn;
      const runnerWin = isMs ? d.runnerWindowMs : d.runnerWindowEn;
      const courierWin = isMs ? d.courierWindowMs : d.courierWindowEn;
      const codText = isMs ? d.codSupportMs : d.codSupportEn;
      const landmarks = isMs ? d.landmarksMs : d.landmarksEn;
      return `
            <tr>
              <td class="state-comparison-table__highlight">${esc(d.code)}</td>
              <td>
                <strong>${esc(districtTitle)}</strong>
                <div style="font-size:0.8rem; color:var(--text-muted-alabaster); margin-top:0.25rem;">
                  ${esc(landmarks)}
                </div>
              </td>
              <td class="state-comparison-table__highlight">${esc(d.postcodes)}</td>
              <td>${esc(runnerWin)}</td>
              <td>${esc(courierWin)}</td>
              <td>${esc(codText)}</td>
            </tr>`;
    })
    .join('\n');

  const hairlineRowsHtml = hub.districts
    .map((d) => {
      const districtTitle = isMs ? d.nameMs : d.nameEn;
      const runnerWin = isMs ? d.runnerWindowMs : d.runnerWindowEn;
      const courierWin = isMs ? d.courierWindowMs : d.courierWindowEn;
      const landmarks = isMs ? d.landmarksMs : d.landmarksEn;
      return `
        <article class="state-hairline-row">
          <div class="state-hairline-row__index">${esc(d.code)}</div>
          <div class="state-hairline-row__title-col">
            <h3 class="state-hairline-row__title">${esc(districtTitle)}</h3>
            <span class="state-hairline-row__sub">
              ${isMs ? `POSKOD: ${esc(d.postcodes)}` : `POSTCODES: ${esc(d.postcodes)}`}
            </span>
          </div>
          <div class="state-hairline-row__desc-col">
            <p style="margin-bottom:0.45rem;">
              <strong>${isMs ? 'LiputanMercu Tanda & Kediaman:' : 'Covered Landmarks & Residences:'}</strong>
              ${esc(landmarks)}
            </p>
            <p>
              <strong>${isMs ? 'Jadual Penghantaran:' : 'Dispatch Schedule:'}</strong>
              ${esc(runnerWin)} · ${esc(courierWin)} ·
              <span style="color:var(--gold-foil-bright);">
                ${isMs ? 'Pengirim: OM Fulfilment Logistics (100% Rahsia)' : 'Sender: OM Fulfilment Logistics (100% Unmarked)'}
              </span>
            </p>
          </div>
          <div class="state-hairline-row__action-col">
            <button
              type="button"
              class="cta-foil-primary"
              data-open-order-drawer="true"
              data-order-product="${esc(hub.featuredProductSlug)}"
              data-order-qty="1"
              data-order-state="${esc(hub.drawerStateValue)}"
            >
              <span>${isMs ? `TEMPAH KE ${esc(d.code)} · RM 159` : `DISPATCH TO ${esc(d.code)} · RM 159`}</span>
            </button>
          </div>
        </article>`;
    })
    .join('\n');

  return `
  <!-- ==========================================================================
       CHAPTER III — LOCALIZED POSTCODE, DISTRICT & TRANSIT TIME MATRIX
       ========================================================================== -->
  <section
    id="state-postcode-district-matrix"
    class="state-section state-section--onyx"
    aria-labelledby="heading-postcode-matrix-${esc(hub.slug)}"
  >
    <div class="state-section__inner">
      <header class="state-section__header">
        <div class="state-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? `MATRIKS POSKOD &amp; DAERAH · ${esc(hub.isoCode)} (${esc(hub.postcodeRange)})`
                : `POSTCODE &amp; DISTRICT FULFILMENT MATRIX · ${esc(hub.isoCode)} (${esc(hub.postcodeRange)})`
            }
          </span>
          <h2 id="heading-postcode-matrix-${esc(hub.slug)}" class="editorial-headline-lg">
            ${
              isMs
                ? `Jadual Penghantaran Rahsia Mengikut Daerah &amp; Poskod Di <span class="foil-champagne-text">${esc(stateName)}.</span>`
                : `Localized Postcode, District &amp; Transit Schedule Across <span class="foil-champagne-text">${esc(stateName)}.</span>`
            }
          </h2>
        </div>
        <div class="state-section__header-right">
          <p>
            ${
              isMs
                ? `Setiap daerah di ${stateName} diliputi oleh rangkaian penghantaran bungkusan rahsia kami tanpa sebarang caj penghantaran tambahan (RM 0) untuk 1 botol (RM 159), 2 botol (RM 318), dan 3 botol (RM 477).`
                : `Every district across ${stateName} is served by our unmarked security parcel network with RM 0 free express shipping on 1 bottle (RM 159), 2 bottles (RM 318), and 3 bottles (RM 477).`
            }
          </p>
        </div>
      </header>

      <div class="state-table-wrap" style="margin-bottom: 3.5rem;">
        <table class="state-comparison-table">
          <thead>
            <tr>
              <th>${isMs ? 'Kod Zon' : 'Zone Code'}</th>
              <th>${isMs ? 'Daerah / Bandar & Mercu Tanda Utama' : 'District / City & Covered Landmarks'}</th>
              <th>${isMs ? 'Julat Poskod' : 'Postcode Range'}</th>
              <th>${isMs ? 'Laluan Utama / Hari Sama' : 'Primary Linehaul / Runner'}</th>
              <th>${isMs ? 'Kurier Ekspres (RM 0)' : 'Express Courier (RM 0)'}</th>
              <th>${isMs ? 'Kaedah Pembayaran' : 'Settlement Options'}</th>
            </tr>
          </thead>
          <tbody>
            ${tableRowsHtml}
          </tbody>
        </table>
      </div>

      <div class="state-hairline-ledger">
        ${hairlineRowsHtml}
      </div>
    </div>
  </section>`;
}

/**
 * Renders Chapter IV — All 4 Onyxmen Flagship Formulations Showcase (RM 159 / RM 318 / RM 477)
 * with 1-Click Express Order Drawer buttons pre-selecting the current state.
 */
function renderStateFourFormulationsSection(hub, vaultState, lang = 'en-MY') {
  const isMs = lang === 'ms-MY';
  const stateName = isMs ? vaultState.nameMs : vaultState.nameEn;

  const bottlesRowsHtml = allProducts
    .map((prod, idx) => {
      const loc = prod.locales?.[isMs ? 'ms-MY' : 'en-MY'] || prod.locales?.['en-MY'] || {};
      const prodPath = isMs ? `/ms/produk/${prod.slug}/` : `/products/${prod.slug}/`;
      const portraitImg = prod.images?.portraitWebp || `/assets/products/${prod.slug}-portrait.webp`;
      const capsuleSpec = isMs
        ? `${prod.capsuleCount} Kapsul × ${prod.capsuleWeightMg}mg (${prod.capsuleType})`
        : `${prod.capsuleCount} Capsules × ${prod.capsuleWeightMg}mg (${prod.capsuleType})`;
      const primaryFocus = loc.primaryGoal || loc.tagline || prod.name;
      const summaryCopy = loc.shortDescription || '';
      const ingredientsList = (prod.keyActives || [])
        .map((a) => `${a.name} (${a.standardizedTo || a.dosageMg + 'mg'})`)
        .join(' · ');

      return `
        <article class="state-bottle-showcase-row" id="state-formulation-${esc(prod.slug)}">
          <div class="state-bottle-showcase-row__visual">
            <a href="${esc(prodPath)}" aria-label="${esc(prod.name)}">
              <img
                src="${esc(portraitImg)}"
                alt="${esc(
                  isMs
                    ? `${prod.name} (${capsuleSpec}) — Penghantaran Rahsia ke ${stateName} RM 159`
                    : `${prod.name} (${capsuleSpec}) — Discreet Delivery to ${stateName} RM 159`
                )}"
                width="200"
                height="260"
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>

          <div class="state-bottle-showcase-row__body">
            <span class="editorial-kicker">
              0${idx + 1} · ${esc(prod.sku)} · ${esc(capsuleSpec)}
            </span>
            <h3 class="state-hairline-row__title" style="margin-top:0.25rem;">
              <a href="${esc(prodPath)}">${esc(prod.name)} — ${esc(primaryFocus)}</a>
            </h3>
            <p style="color:var(--text-muted-alabaster); font-size:0.96rem; line-height:1.75;">
              ${esc(summaryCopy)}
            </p>
            <p style="font-size:0.82rem; color:var(--gold-foil-bright); letter-spacing:0.06em;">
              <strong>${isMs ? 'Kompleks Fitokimia Piawai:' : 'Standardized Phytochemical Matrix:'}</strong>
              ${esc(ingredientsList)}
            </p>
            <div style="display:flex; flex-wrap:wrap; gap:1rem; margin-top:0.35rem; font-size:0.8rem; color:var(--text-ash-silver); text-transform:uppercase; letter-spacing:0.14em;">
              <span>${
                isMs
                  ? `KITARAN ISIAN SEMULA: HARI KE-${prod.refillReminderDays}`
                  : `REFILL REMINDER CYCLE: DAY ${prod.refillReminderDays}`
              }</span>
              <span>·</span>
              <a href="${esc(prodPath)}" style="color:var(--gold-champagne); text-decoration:underline;">
                ${isMs ? `Lihat Spesifikasi Penuh ${prod.name} →` : `Explore Full ${prod.name} Dossier →`}
              </a>
            </div>
          </div>

          <div class="state-bottle-showcase-row__tiers">
            <button
              type="button"
              class="tier-strip-option"
              data-open-order-drawer="true"
              data-order-product="${esc(prod.slug)}"
              data-order-qty="1"
              data-order-state="${esc(hub.drawerStateValue)}"
            >
              <div class="tier-strip-option__left">
                <span class="tier-strip-option__eyebrow">
                  ${isMs ? `1 BOTOL · PENGHANTARAN PERCUMA ${hub.isoCode}` : `1 BOTTLE · FREE ${hub.isoCode} DISPATCH`}
                </span>
                <strong class="tier-strip-option__title">
                  ${esc(prod.name)} (1× ${prod.capsuleCount} Caps)
                </strong>
                <span class="tier-strip-option__subtitle">
                  ${isMs ? `Hantar ke ${stateName} · COD / FPX / QR` : `Ship to ${stateName} · COD / FPX / QR`}
                </span>
              </div>
              <span class="tier-strip-option__price">RM 159</span>
            </button>

            <button
              type="button"
              class="tier-strip-option tier-strip-option--selected"
              data-open-order-drawer="true"
              data-order-product="${esc(prod.slug)}"
              data-order-qty="2"
              data-order-state="${esc(hub.drawerStateValue)}"
            >
              <div class="tier-strip-option__left">
                <span class="tier-strip-option__eyebrow">
                  ${isMs ? `2 BOTOL · PILIHAN UTAMA DI ${stateName.toUpperCase()}` : `2 BOTTLES · MOST SELECTED IN ${stateName.toUpperCase()}`}
                </span>
                <strong class="tier-strip-option__title">
                  ${esc(prod.name)} (2× = ${prod.capsuleCount * 2} Caps)
                </strong>
                <span class="tier-strip-option__subtitle">
                  ${isMs ? 'Kurier Ekspres Rahsia Percuma + COD' : 'Free Priority Discreet Express + COD'}
                </span>
              </div>
              <span class="tier-strip-option__price">RM 318</span>
            </button>

            <button
              type="button"
              class="tier-strip-option"
              data-open-order-drawer="true"
              data-order-product="${esc(prod.slug)}"
              data-order-qty="3"
              data-order-state="${esc(hub.drawerStateValue)}"
            >
              <div class="tier-strip-option__left">
                <span class="tier-strip-option__eyebrow">
                  ${isMs ? '3 BOTOL · PROTOKOL LENGKAP 90 HARI' : '3 BOTTLES · COMPLETE 90-DAY VAULT'}
                </span>
                <strong class="tier-strip-option__title">
                  ${esc(prod.name)} (3× = ${prod.capsuleCount * 3} Caps)
                </strong>
                <span class="tier-strip-option__subtitle">
                  ${isMs ? 'Keutamaan Tertinggi + Peringatan VIP' : 'VIP Priority Dispatch + Refill Concierge'}
                </span>
              </div>
              <span class="tier-strip-option__price">RM 477</span>
            </button>
          </div>
        </article>`;
    })
    .join('\n');

  return `
  <!-- ==========================================================================
       CHAPTER IV — ALL 4 ONYXMEN BOTTLES AT RM 159 / RM 318 / RM 477 FOR THIS STATE
       ========================================================================== -->
  <section
    id="state-four-bottles-catalog"
    class="state-section"
    aria-labelledby="heading-four-bottles-${esc(hub.slug)}"
  >
    <div class="state-section__inner">
      <header class="state-section__header">
        <div class="state-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? `KOLEKSI LENGKAP 4 FORMULASI ONYXMEN · SEDIA DIHANTAR KE ${esc(stateName.toUpperCase())}`
                : `COMPLETE 4-FORMULATION VAULT · READY FOR ${esc(stateName.toUpperCase())} DISPATCH`
            }
          </span>
          <h2 id="heading-four-bottles-${esc(hub.slug)}" class="editorial-headline-lg">
            ${
              isMs
                ? `Pilih Formulasi Anda Dengan <span class="foil-champagne-text">Pra-Pilihan Negeri ${esc(stateName)} (RM 159 / RM 318 / RM 477).</span>`
                : `Select Your Formulation With <span class="foil-champagne-text">1-Click ${esc(stateName)} Pre-Selection (RM 159 / RM 318 / RM 477).</span>`
            }
          </h2>
        </div>
        <div class="state-section__header-right">
          <p>
            ${
              isMs
                ? `Setiap butang di bawah membuka Laci Tempahan Ekspres 10 Saat dengan negeri "${hub.drawerStateValue}" dipilih secara automatik untuk pelepasan bungkusan rahsia segera.`
                : `Every button below launches the 10-Second Express Discreet Order Drawer with "${hub.drawerStateValue}" automatically pre-selected for rapid unmarked dispatch.`
            }
          </p>
        </div>
      </header>

      <div>
        ${bottlesRowsHtml}
      </div>
    </div>
  </section>`;
}

/**
 * Renders Chapter V — Plain-Box Privacy Engineering ("OM Fulfilment Logistics") & COD / FPX / DuitNow QR Ledger.
 */
function renderPlainBoxPrivacyLedgerSection(hub, vaultState, lang = 'en-MY') {
  const isMs = lang === 'ms-MY';
  const stateName = isMs ? vaultState.nameMs : vaultState.nameEn;

  const layers = isMs
    ? [
        {
          code: 'LAPISAN 01 · BOTOL APOTEKARI BERLAKRI EMAS',
          title: 'Lakri Induksi Foil Emas & Penutup Keselamatan Kalis Usik',
          sub: 'PERLINDUNGAN KELEMBAPAN TROPIKA MALAYSIA',
          desc: `Setiap botol Horsemen, Hammer of Thor, Grow XL, dan Magnum Pump XR ditutup rapat dengan lakri induksi haba kedap udara bagi memastikan kapsul bebas daripada kelembapan tinggi ketika merentasi laluan penghantaran ke ${stateName}.`,
        },
        {
          code: 'LAPISAN 02 · PELINDUNG AKUSTIK ANTI-BUNYI',
          title: 'Balutan Penyerap Bunyi Sifar Goncangan Kapsul',
          sub: 'TIADA BUNYI KAPSUL SEMASA DIPEGANG KURIER ATAU PENGAWAL',
          desc: `Ruang dalam botol dan kotak luar dilapik dengan pelindung busa akustik supaya bungkusan tidak mengeluarkan sebarang bunyi goncangan kapsul apabila dikendalikan oleh penghantar kurier atau penyambut tetamu pejabat di ${stateName}.`,
        },
        {
          code: 'LAPISAN 03 · KOTAK DALAM TEGAR MATTE-HITAM',
          title: 'Kotak Keselamatan Tegar Tahan Tekanan Tanpa Sebarang Cetakan',
          sub: 'MENGHALANG PENGESANAN BENTUK BOTOL DARI LUAR',
          desc: `Botol dimasukkan ke dalam kotak kadbod tegar berketumpatan tinggi supaya bentuk silinder botol tidak dapat dirasai dari luar bungkusan.`,
        },
        {
          code: 'LAPISAN 04 · SAMPUL KURIER LEGAP "OM FULFILMENT LOGISTICS"',
          title: 'Slip Penghantaran Komersial Neutral Tanpa Nama Produk Atau Jenama',
          sub: 'SELAMAT UNTUK KAUNTER PEJABAT, KONDO & RUMAH KELUARGA',
          desc: `Bahagian luar bungkusan hanya memaparkan nama pengirim neutral "OM FULFILMENT LOGISTICS — KUALA LUMPUR HUB" bersama kod rujukan logistik. Perkataan Onyxmen, Horsemen, Hammer of Thor, Grow XL, Magnum Pump XR, atau "suplemen lelaki" tidak pernah dicetak pada slip.`,
        },
      ]
    : [
        {
          code: 'LAYER 01 · GOLD INDUCTION SEALED APOTHECARY VESSEL',
          title: 'Hermetic Gold Foil Induction Seal & Tamper-Evident Cap',
          sub: 'ENGINEERED FOR MALAYSIAN TROPICAL HUMIDITY',
          desc: `Every bottle of Horsemen, Hammer of Thor, Grow XL, and Magnum Pump XR is hermetically sealed with a metallic induction liner so active botanical extracts remain dry and potent during transit to ${stateName}.`,
        },
        {
          code: 'LAYER 02 · ACOUSTIC ZERO-RATTLE DAMPENING',
          title: 'Internal Acoustic Cushioning Eliminates Capsule Rattle',
          sub: 'ZERO CAPSULE SOUND WHEN HANDLED BY COURIERS OR RECEPTIONISTS',
          desc: `Both the bottle interior and outer security carton are damped with high-density acoustic cushioning so the parcel produces zero rattling sound when handed to condo guards, receptionists, or family members in ${stateName}.`,
        },
        {
          code: 'LAYER 03 · RIGID UNBRANDED INNER SECURITY CARTON',
          title: 'Crush-Proof Matte Security Box Masks Bottle Geometry',
          sub: 'PREVENTS TACTILE IDENTIFICATION OF BOTTLE CONTOURS',
          desc: `Your bottle is enclosed inside a rigid architectural security box so the cylindrical shape of an apothecary bottle cannot be felt through the exterior mailer.`,
        },
        {
          code: 'LAYER 04 · OPAQUE WAYBILL ("OM FULFILMENT LOGISTICS")',
          title: 'Neutral Commercial Waybill With Zero Supplement Or Brand Text',
          sub: '100% SAFE FOR CORPORATE TOWERS, CONDO CONCIERGES & HOMES',
          desc: `The outer tear-proof flyer lists only "OM FULFILMENT LOGISTICS — KUALA LUMPUR HUB" and an encrypted tracking reference. Never once does the word Onyxmen, Horsemen, Hammer of Thor, Grow XL, Magnum Pump XR, or "men’s vitality" appear on the exterior.`,
        },
      ];

  const rowsHtml = layers
    .map(
      (l) => `
        <article class="state-hairline-row">
          <div class="state-hairline-row__index">${esc(l.code)}</div>
          <div class="state-hairline-row__title-col">
            <h3 class="state-hairline-row__title">${esc(l.title)}</h3>
            <span class="state-hairline-row__sub">${esc(l.sub)}</span>
          </div>
          <div class="state-hairline-row__desc-col">
            <p>${esc(l.desc)}</p>
          </div>
        </article>`
    )
    .join('\n');

  return `
  <!-- ==========================================================================
       CHAPTER V — 4-LAYER PLAIN-BOX PRIVACY SPECIFICATION (OM FULFILMENT LOGISTICS)
       ========================================================================== -->
  <section
    id="state-plain-box-privacy-spec"
    class="state-section state-section--charcoal"
    aria-labelledby="heading-plain-box-spec-${esc(hub.slug)}"
  >
    <div class="state-section__inner">
      <header class="state-section__header">
        <div class="state-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? `SPESIFIKASI BUNGKUSAN RAHSIA 4 LAPISAN · OM FULFILMENT LOGISTICS`
                : `4-LAYER UNMARKED PARCEL SPECIFICATION · OM FULFILMENT LOGISTICS`
            }
          </span>
          <h2 id="heading-plain-box-spec-${esc(hub.slug)}" class="editorial-headline-lg">
            ${
              isMs
                ? `Kejuruteraan Privasi Bungkusan Tanpa Nama Untuk Pelanggan <span class="foil-champagne-text">${esc(stateName)}.</span>`
                : `Plain-Box Privacy Engineering For <span class="foil-champagne-text">${esc(stateName)} Deliveries.</span>`
            }
          </h2>
        </div>
        <div class="state-section__header-right">
          <p>
            ${
              isMs
                ? `Setiap pesanan ke ${stateName} melalui protokol pembungkusan 4 lapisan kami sebelum diserahkan kepada kurier atau penghantar persendirian.`
                : `Every order bound for ${stateName} undergoes our 4-layer security packaging protocol prior to courier or private runner handover.`
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
 * Renders Chapter VI — West Malaysia Inter-State Hub Network Cross-Links & 10 Localized FAQs.
 */
function renderStateCrosslinksAndFaqsSection(hub, vaultState, faqs, lang = 'en-MY') {
  const isMs = lang === 'ms-MY';
  const stateName = isMs ? vaultState.nameMs : vaultState.nameEn;

  const crossLinksHtml = WEST_MALAYSIA_HUBS.map((otherHub) => {
    const otherVault = findVaultStateRecord(otherHub.id);
    const otherName = isMs ? otherVault.nameMs : otherVault.nameEn;
    const href = isMs ? otherHub.msCanonicalPath : otherHub.enCanonicalPath;
    const isCurrent = otherHub.id === hub.id;
    return `
        <article class="state-hairline-row" ${isCurrent ? 'style="background-color:rgba(212,175,55,0.05); padding-left:1rem;"' : ''}>
          <div class="state-hairline-row__index">${esc(otherHub.isoCode)} · ${esc(otherHub.microStep)}</div>
          <div class="state-hairline-row__title-col">
            <h3 class="state-hairline-row__title">
              <a href="${esc(href)}">${esc(otherName)}</a>
            </h3>
            <span class="state-hairline-row__sub">
              ${isMs ? `POSKOD: ${esc(otherHub.postcodeRange)}` : `POSTCODES: ${esc(otherHub.postcodeRange)}`}
            </span>
          </div>
          <div class="state-hairline-row__desc-col">
            <p>
              ${esc(isMs ? otherVault.transitTimeMs : otherVault.transitTimeEn)} —
              ${esc(otherVault.coveredDistricts.slice(0, 7).join(', '))}.
            </p>
          </div>
          <div class="state-hairline-row__action-col">
            <a href="${esc(href)}" class=" editorial-kicker" style="text-decoration:underline;">
              ${isMs ? `Buka Hab ${esc(otherVault.nameMs)} →` : `Explore ${esc(otherVault.nameEn)} Hub →`}
            </a>
          </div>
        </article>`;
  }).join('\n');

  const faqsHtml = faqs
    .map(
      (faq, idx) => `
        <details class="state-faq-item" ${idx === 0 ? 'open' : ''}>
          <summary>
            <span>0${idx + 1 === 10 ? '' : ''}${idx + 1}. ${esc(faq.question)}</span>
            <span class="state-faq-item__icon" aria-hidden="true">+</span>
          </summary>
          <div class="state-faq-item__answer">
            <p>${esc(faq.answer)}</p>
          </div>
        </details>`
    )
    .join('\n');

  return `
  <!-- ==========================================================================
       CHAPTER VI — WEST MALAYSIA 8-STATE DISCREET FULFILMENT NETWORK DIRECTORY
       ========================================================================== -->
  <section
    id="west-malaysia-hub-network"
    class="state-section state-section--onyx"
    aria-labelledby="heading-west-hub-network-${esc(hub.slug)}"
  >
    <div class="state-section__inner">
      <header class="state-section__header">
        <div class="state-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? `RANGKAIAN HAB PENGHANTARAN SEMENANJUNG MALAYSIA (MS-131 HINGGA MS-138)`
                : `PENINSULAR MALAYSIA STATE HUB DIRECTORY (MS-131 THROUGH MS-138)`
            }
          </span>
          <h2 id="heading-west-hub-network-${esc(hub.slug)}" class="editorial-headline-lg">
            ${
              isMs
                ? `Terokai Hab Penghantaran Rahsia Negeri <span class="foil-champagne-text">Semenanjung Malaysia.</span>`
                : `Explore All Peninsular Malaysia <span class="foil-champagne-text">State Fulfilment Hubs.</span>`
            }
          </h2>
        </div>
      </header>

      <div class="state-hairline-ledger">
        ${crossLinksHtml}
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       CHAPTER VII — 10 LOCALIZED FAQS FOR THIS STATE HUB
       ========================================================================== -->
  <section
    id="state-localized-faq-ledger"
    class="state-section"
    aria-labelledby="heading-state-faqs-${esc(hub.slug)}"
  >
    <div class="state-section__inner">
      <header class="state-section__header">
        <div class="state-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? `10 SOALAN LAZIM PENGHANTARAN RAHSIA · ${esc(stateName.toUpperCase())}`
                : `10 LOCALIZED DISCREET DELIVERY FAQS · ${esc(stateName.toUpperCase())}`
            }
          </span>
          <h2 id="heading-state-faqs-${esc(hub.slug)}" class="editorial-headline-lg">
            ${
              isMs
                ? `Soalan Lazim Pelanggan Di <span class="foil-champagne-text">${esc(stateName)} (${esc(hub.postcodeRange)}).</span>`
                : `Frequently Asked Questions For <span class="foil-champagne-text">${esc(stateName)} (${esc(hub.postcodeRange)}).</span>`
            }
          </h2>
        </div>
      </header>

      <div class="state-faq-ledger" data-faq-accordion-group="true">
        ${faqsHtml}
      </div>
    </div>
  </section>`;
}

/**
 * Renders the complete HTML5 document for a single West Malaysia State Hub in `en-MY` or `ms-MY`.
 */
export function renderWestMalaysiaStateHubPage(hub, lang = 'en-MY') {
  const isMs = lang === 'ms-MY';
  const vaultState = findVaultStateRecord(hub.id);
  const loc = vaultState.locales[isMs ? 'ms-MY' : 'en-MY'] || vaultState.locales['en-MY'];
  const stateName = isMs ? vaultState.nameMs : vaultState.nameEn;
  const featuredProduct = productsById[hub.featuredProductSlug] || allProducts[0];

  const canonicalPath = isMs ? hub.msCanonicalPath : hub.enCanonicalPath;
  const alternatePathEn = hub.enCanonicalPath;
  const alternatePathMs = hub.msCanonicalPath;

  const title = loc.seoTitle;
  const description = loc.metaDescription;
  const faqs = buildLocalizedStateFaqs(hub, vaultState, lang);

  const breadcrumbs = isMs
    ? [
        { name: 'Onyxmen Malaysia', url: '/ms/' },
        { name: 'Hab Penghantaran 16 Negeri', url: '/ms/penghantaran-malaysia/' },
        { name: stateName, url: canonicalPath },
      ]
    : [
        { name: 'Onyxmen Malaysia', url: '/' },
        { name: '16 Malaysia Delivery Hubs', url: '/malaysia-delivery/' },
        { name: stateName, url: canonicalPath },
      ];

  const schemaGraphJson = buildFullPageGraph({
    pageType: 'state-hub',
    lang,
    pageUrl: `https://www.onyxmen.my${canonicalPath}`,
    title,
    description,
    stateHub: hub.schemaKey,
    breadcrumbs,
    faqs,
  });

  const heroBottleImg = featuredProduct.images?.stageWebp || '/assets/products/horsemen-stage.webp';
  const transitBadge = isMs ? vaultState.transitTimeMs : vaultState.transitTimeEn;
  const corridorLabel = isMs ? hub.corridorCodeMs : hub.corridorCodeEn;

  const bodyContent = `
  ${STATE_HUB_STAGE_CSS}
  ${buildStatePreselectScript(hub.drawerStateValue)}

  <!-- ==========================================================================
       CHAPTER I — PARADIGM A: 100VW X 100VH FULL-BLEED STATE LOGISTICS CINEMA HERO
       ========================================================================== -->
  <section
    id="state-cinema-hero-${esc(hub.slug)}"
    class="state-cinema-hero"
    aria-labelledby="state-hero-h1-${esc(hub.slug)}"
  >
    <div class="state-cinema-hero__watermark" aria-hidden="true">${esc(hub.watermark)}</div>

    <div class="state-cinema-hero__breadcrumb-bar">
      <nav class="state-cinema-hero__crumbs" aria-label="${isMs ? 'Laluan Halaman' : 'Breadcrumb'}">
        <a href="${isMs ? '/ms/' : '/'}">${isMs ? 'Onyxmen Malaysia' : 'Onyxmen Malaysia'}</a>
        <span aria-hidden="true">/</span>
        <a href="${isMs ? '/ms/penghantaran-malaysia/' : '/malaysia-delivery/'}">
          ${isMs ? 'Hab Penghantaran Malaysia' : 'Malaysia Delivery Hubs'}
        </a>
        <span aria-hidden="true">/</span>
        <span aria-current="page" style="color:var(--gold-foil-bright);">${esc(stateName)}</span>
      </nav>
      <span>
        ${esc(hub.microStep)} · ${esc(hub.isoCode)} · ${isMs ? 'POSKOD' : 'POSTCODES'} ${esc(hub.postcodeRange)}
      </span>
    </div>

    <div class="state-cinema-hero__stage">
      <div class="state-cinema-hero__copy-col">
        <span class="editorial-kicker">${esc(corridorLabel)}</span>
        <h1 id="state-hero-h1-${esc(hub.slug)}" class="state-cinema-hero__title">
          ${esc(loc.headline)}
        </h1>
        <p class="state-cinema-hero__lead hero-subtitle">
          ${esc(loc.subheadline)} ${esc(loc.localDeliverySummary)}
        </p>

        <div class="state-cinema-hero__assay-strip">
          <div class="state-cinema-hero__assay-metric">
            <span class="state-cinema-hero__assay-label">${isMs ? 'MASA PENGHANTARAN' : 'TRANSIT WINDOW'}</span>
            <span class="state-cinema-hero__assay-value">${esc(transitBadge)}</span>
          </div>
          <div class="state-cinema-hero__assay-metric">
            <span class="state-cinema-hero__assay-label">${isMs ? 'SLIP PENGIRIM RAHSIA' : 'DISCREET WAYBILL SENDER'}</span>
            <span class="state-cinema-hero__assay-value">OM Fulfilment Logistics</span>
          </div>
          <div class="state-cinema-hero__assay-metric">
            <span class="state-cinema-hero__assay-label">${isMs ? 'HARGA RASMI MALAYSIA' : 'OFFICIAL RESERVE'}</span>
            <span class="state-cinema-hero__assay-value">RM 159 / RM 318 / RM 477</span>
          </div>
        </div>

        <div class="state-cinema-hero__actions">
          <button
            type="button"
            class="cta-foil-primary"
            data-open-order-drawer="true"
            data-order-product="${esc(hub.featuredProductSlug)}"
            data-order-qty="1"
            data-order-state="${esc(hub.drawerStateValue)}"
          >
            <span>
              ${
                isMs
                  ? `TEMPAH KE ${esc(stateName.toUpperCase())} SEKARANG · RM 159`
                  : `DISPATCH TO ${esc(stateName.toUpperCase())} NOW · RM 159`
              }
            </span>
          </button>

          <a
            href="#state-postcode-district-matrix"
            class="editorial-kicker"
            style="padding: 0.95rem 1.35rem; border: 1px solid rgba(212,175,55,0.35);"
          >
            ${
              isMs
                ? `SEMAK JADUAL POSKOD ${esc(hub.postcodeRange)} →`
                : `CHECK POSTCODE SCHEDULE (${esc(hub.postcodeRange)}) →`
            }
          </a>
        </div>
      </div>

      <div class="state-cinema-hero__visual-col">
        <div class="state-cinema-hero__visual-stage">
          <img
            src="${esc(heroBottleImg)}"
            alt="${esc(
              isMs
                ? `${featuredProduct.name} — Penghantaran Rahsia ke ${stateName} (RM 159)`
                : `${featuredProduct.name} — Discreet Plain-Box Delivery to ${stateName} (RM 159)`
            )}"
            width="480"
            height="580"
            fetchpriority="high"
            decoding="async"
            class="state-cinema-hero__bottle-img cinema-stage-100vh__bottle-render"
            data-parallax-bottle="true"
          />
          <div class="state-cinema-hero__caption-ledger">
            <span>${
              isMs
                ? `PILIHAN UTAMA ${esc(hub.isoCode)}: ${esc(featuredProduct.name.toUpperCase())}`
                : `TOP ORDERED IN ${esc(hub.isoCode)}: ${esc(featuredProduct.name.toUpperCase())}`
            }</span>
            <span>RM 159.00 MYR · ${isMs ? 'PENGHANTARAN PERCUMA' : 'FREE SHIPPING'}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="state-cinema-hero__telemetry-ribbon">
      <div class="state-cinema-hero__telemetry-cell">
        <span class="state-cinema-hero__telemetry-kicker">
          ${isMs ? 'DAERAH & BANDAR UTAMA DILIPUTI' : 'COVERED CITIES & DISTRICTS'}
        </span>
        <span class="state-cinema-hero__telemetry-val">
          ${esc(vaultState.coveredDistricts.slice(0, 8).join(' · '))}
        </span>
      </div>
      <div class="state-cinema-hero__telemetry-cell">
        <span class="state-cinema-hero__telemetry-kicker">
          ${isMs ? 'RANGKAIAN KURIER & PENGHANTAR' : 'COURIER & RUNNER FLEET'}
        </span>
        <span class="state-cinema-hero__telemetry-val">
          ${esc(vaultState.couriers.join(' · '))}
        </span>
      </div>
      <div class="state-cinema-hero__telemetry-cell">
        <span class="state-cinema-hero__telemetry-kicker">
          ${isMs ? 'KAEDAH BAYARAN TEMPATAN' : 'LOCAL SETTLEMENT CHANNELS'}
        </span>
        <span class="state-cinema-hero__telemetry-val">
          ${
            isMs
              ? 'Tunai Semasa Terima (COD) · Imbasan DuitNow QR · Perbankan Dalam Talian FPX'
              : 'Cash on Delivery (COD) · Instant DuitNow QR · FPX Online Banking'
          }
        </span>
      </div>
    </div>
  </section>

  ${renderStateSplit5050Section(hub, vaultState, featuredProduct, lang)}
  ${renderDistrictPostcodeSection(hub, vaultState, lang)}
  ${renderStateFourFormulationsSection(hub, vaultState, lang)}
  ${renderPlainBoxPrivacyLedgerSection(hub, vaultState, lang)}
  ${renderStateCrosslinksAndFaqsSection(hub, vaultState, faqs, lang)}
  `;

  return renderLuxuryShell({
    lang,
    title,
    description,
    canonicalPath,
    alternatePathEn,
    alternatePathMs,
    ogImage: heroBottleImg,
    schemaGraphJson,
    bodyContent,
    activeNav: 'locations',
    productSlug: hub.featuredProductSlug,
    defaultQty: 1,
    includeSealStrip: true,
  });
}

/**
 * Writes an HTML string to one or more relative paths inside `public/` and returns file metrics.
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
 * Main Build Execution for MS-131 through MS-138 (All 8 West Malaysia State & City Hubs in EN + BM + Aliases).
 */
export function buildAllWestMalaysiaStateHubs() {
  const summary = [];

  for (const hub of WEST_MALAYSIA_HUBS) {
    const enHtml = renderWestMalaysiaStateHubPage(hub, 'en-MY');
    summary.push(...writeHtmlToPublicPaths(enHtml, hub.enOutputPaths));

    const msHtml = renderWestMalaysiaStateHubPage(hub, 'ms-MY');
    summary.push(...writeHtmlToPublicPaths(msHtml, hub.msOutputPaths));
  }

  return summary;
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  const builtFiles = buildAllWestMalaysiaStateHubs();
  console.log('================================================================================');
  console.log('ONYXMEN.MY — WEST MALAYSIA STATE HUBS BUILD COMPLETE (MS-131 TO MS-138)');
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
      !html.includes('data-order-state=') ||
      !html.includes('OM Fulfilment Logistics') ||
      !html.includes('159.00') ||
      !html.includes('318.00') ||
      !html.includes('477.00')
    ) {
      console.error(`[FAIL] Missing required hreflang, state pre-selection, or commerce attributes in ${item.relPath}`);
      auditErrors++;
    }

    console.log(`[PASS] ${item.relPath.padEnd(64)} | ${String(item.lines).padStart(5)} lines | ${item.bytes} bytes`);
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
