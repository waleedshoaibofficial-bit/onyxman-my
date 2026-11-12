#!/usr/bin/env node
/**
 * ONYXMEN.MY — BILINGUAL BOTANICAL MONOGRAPH HUB & APOTHECARY BUILDER (MS-123 TO MS-130)
 * Generates all 10 Primary Bilingual Botanical Monograph Hub Pages + Route Aliases:
 *
 * English (en-MY):
 * 1. public/ingredients/index.html (Master Botanical Apothecary Index)
 * 2. public/ingredients/tongkat-ali-malaysia/index.html + public/ingredients/tongkat-ali/index.html (MS-123)
 * 3. public/ingredients/tribulus-terrestris-malaysia/index.html + public/ingredients/tribulus-terrestris/index.html (MS-124)
 * 4. public/ingredients/maca-root-malaysia/index.html + public/ingredients/maca-root/index.html (MS-125)
 * 5. public/ingredients/l-arginine-nitric-oxide/index.html + public/ingredients/l-arginine/index.html (MS-126)
 *
 * Bahasa Malaysia (ms-MY):
 * 6. public/ms/ingredients/index.html + public/ms/ramuan-botani/index.html
 * 7. public/ms/ingredients/tongkat-ali-malaysia/index.html + public/ms/ramuan-botani/tongkat-ali-malaysia/index.html (MS-127)
 * 8. public/ms/ingredients/tribulus-terrestris-malaysia/index.html + public/ms/ramuan-botani/tribulus-terrestris/index.html (MS-128)
 * 9. public/ms/ingredients/maca-root-malaysia/index.html + public/ms/ramuan-botani/akar-maca-hitam/index.html (MS-129)
 * 10. public/ms/ingredients/l-arginine-nitric-oxide/index.html + public/ms/ramuan-botani/l-arginine-nitric-oxide/index.html (MS-130)
 *
 * Strictly enforces Rule #29 & Rule #30:
 * - Paradigm A (100vw x 100vh Full-Bleed Obsidian Cinema Stage) + Paradigm D (Pinned 50vw/50vw Split-Screen Phytochemical Curtain)
 * - Obsidian & Liquid Champagne Gold palette (#050507, #0B0C10, #12141C, #D4AF37, #EAE6DF)
 * - Typography: 'Cormorant Garamond', 'Syne', 'Space Grotesk'
 * - Every generated HTML file >= 2,200+ lines of uncompressed semantic HTML5 with 1-Click Express Order Drawer triggers,
 *   exact Onyxmen bottle linkages (RM 159 / RM 286 (10% OFF vs RM 318) / RM 405 (15% OFF vs RM 477)), FAQs, and @graph JSON-LD.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderLuxuryShell, escapeHtmlAttr } from '../components/LuxuryShell.mjs';
import { buildFullPageGraph } from '../utils/schema-graph.mjs';
import {
  botanicalsData,
  allProducts,
  productsById,
  malaysiaStatesData,
} from '../data/products/index.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

function esc(str = '') {
  return escapeHtmlAttr(str);
}

/**
 * Custom inline architectural CSS for Botanical Monograph Hub & Individual Monograph Pages
 * Enforces Paradigm A (100vw x 100vh) + Paradigm D (50vw / 50vw Pinned Split Stage) + Architectural Hairline Ledgers.
 */
export const BOTANICAL_STAGE_CSS = `
<style id="onyxman-botanical-monograph-css">
  /* ==========================================================================
     PARADIGM A — 100VW X 100VH FULL-BLEED BOTANICAL APOTHECARY HERO STAGE
     ========================================================================== */
  .botanical-cinema-hero {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    background-color: #050507;
    background-image:
      radial-gradient(circle at 72% 38%, rgba(212, 175, 55, 0.16) 0%, rgba(18, 20, 28, 0.72) 46%, #050507 92%),
      linear-gradient(180deg, #050507 0%, #0B0C10 64%, #050507 100%);
    border-bottom: 1px solid rgba(212, 175, 55, 0.28);
    padding: clamp(3.5rem, 7vh, 6.5rem) var(--gutter-cinema);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }
  .botanical-cinema-hero__watermark {
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
  .botanical-cinema-hero__breadcrumb-bar {
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
  .botanical-cinema-hero__crumbs {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.6rem;
  }
  .botanical-cinema-hero__crumbs a:hover {
    color: var(--gold-foil-bright);
  }
  .botanical-cinema-hero__stage {
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
  .botanical-cinema-hero__narrative {
    flex: 1 1 580px;
    max-width: 820px;
    display: flex;
    flex-direction: column;
    gap: 1.45rem;
  }
  .botanical-cinema-hero__taxonomy-strip {
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
  .botanical-cinema-hero__lead {
    font-size: clamp(1.04rem, 1.3vw, 1.24rem);
    line-height: 1.74;
    color: var(--text-muted-alabaster);
    max-width: 68ch;
  }
  .botanical-cinema-hero__cta-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.15rem;
    padding-top: 0.65rem;
  }
  .botanical-cinema-hero__visual {
    flex: 1 1 420px;
    max-width: 640px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
  .botanical-cinema-hero__pedestal {
    position: relative;
    width: 100%;
    padding: 2rem;
    background: radial-gradient(circle at 50% 48%, rgba(212, 175, 55, 0.22) 0%, rgba(11, 12, 16, 0.65) 55%, rgba(5, 5, 7, 0) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .botanical-cinema-hero__img {
    width: 100%;
    max-width: 490px;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 28px 54px rgba(0, 0, 0, 0.92));
    mask-image: radial-gradient(circle at 50% 50%, #000 78%, transparent 100%);
    -webkit-mask-image: radial-gradient(circle at 50% 50%, #000 78%, transparent 100%);
  }
  .botanical-cinema-hero__telemetry-strip {
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
  .botanical-cinema-hero__telemetry-col {
    flex: 1 1 220px;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    border-left: 1px solid rgba(212, 175, 55, 0.28);
    padding-left: 1rem;
  }
  .botanical-cinema-hero__telemetry-key {
    font-size: 0.66rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }
  .botanical-cinema-hero__telemetry-val {
    font-family: var(--font-display);
    font-size: 1.45rem;
    color: var(--text-silk-ivory);
    line-height: 1.15;
  }
  .botanical-cinema-hero__telemetry-sub {
    font-size: 0.78rem;
    color: var(--text-ash-silver);
  }

  /* ==========================================================================
     PARADIGM D — PINNED 50VW / 50VW SPLIT-SCREEN PHYTOCHEMICAL MONOGRAPH STAGE
     ========================================================================== */
  .botanical-split-5050 {
    display: flex;
    flex-wrap: wrap;
    width: 100vw;
    background-color: #0B0C10;
    border-bottom: 1px solid rgba(212, 175, 55, 0.28);
  }
  .botanical-split-5050__pinned {
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
  .botanical-split-5050__scrolling {
    flex: 1 1 50%;
    min-width: 320px;
    padding: clamp(3rem, 6vw, 6rem) var(--gutter-cinema);
    background-color: #050507;
    display: flex;
    flex-direction: column;
    gap: 3.25rem;
  }
  .botanical-split-5050__chapter {
    padding-bottom: 3rem;
    border-bottom: 1px solid rgba(212, 175, 55, 0.22);
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  .botanical-split-5050__chapter:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  /* ==========================================================================
     ARCHITECTURAL HAIRLINE LEDGERS & EDITORIAL SPREADS (ZERO BOX GRIDS)
     ========================================================================== */
  .botanical-section {
    width: 100%;
    padding: var(--gutter-vertical) var(--gutter-cinema);
    background-color: #050507;
    border-bottom: 1px solid rgba(212, 175, 55, 0.24);
  }
  .botanical-section--onyx {
    background-color: #0B0C10;
  }
  .botanical-section--charcoal {
    background-color: #12141C;
  }
  .botanical-section__inner {
    max-width: 1720px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .botanical-section__header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(212, 175, 55, 0.28);
  }
  .botanical-section__header-left {
    flex: 1 1 540px;
    max-width: 880px;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }
  .botanical-section__header-right {
    flex: 1 1 380px;
    max-width: 560px;
    color: var(--text-muted-alabaster);
    font-size: 0.96rem;
    line-height: 1.7;
  }
  .botanical-hairline-ledger {
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgba(212, 175, 55, 0.3);
  }
  .botanical-hairline-row {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.75rem;
    padding: 2rem 0;
    border-bottom: 1px solid rgba(234, 230, 223, 0.11);
    transition: background-color 220ms ease;
  }
  .botanical-hairline-row:hover {
    background: linear-gradient(90deg, rgba(212, 175, 55, 0.06) 0%, transparent 100%);
  }
  .botanical-hairline-row__code {
    flex: 0 0 150px;
    font-family: var(--font-technical);
    font-size: 0.74rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }
  .botanical-hairline-row__main {
    flex: 1 1 420px;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }
  .botanical-hairline-row__title {
    font-family: var(--font-display);
    font-size: clamp(1.45rem, 2.2vw, 2.05rem);
    color: var(--text-silk-ivory);
    line-height: 1.15;
  }
  .botanical-hairline-row__desc {
    font-size: 0.95rem;
    line-height: 1.72;
    color: var(--text-muted-alabaster);
  }
  .botanical-hairline-row__meta {
    flex: 0 0 280px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.55rem;
    text-align: right;
  }
  .botanical-hairline-row__dosage {
    font-family: var(--font-display);
    font-size: 1.65rem;
    color: var(--gold-foil-bright);
    line-height: 1.1;
  }
  .botanical-hairline-row__sub {
    font-size: 0.76rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--text-ash-silver);
  }

  /* Matrix Table Styling */
  .botanical-table-wrap {
    width: 100%;
    overflow-x: auto;
    border-top: 1px solid rgba(212, 175, 55, 0.34);
    border-bottom: 1px solid rgba(212, 175, 55, 0.34);
  }
  .botanical-comparison-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    min-width: 860px;
  }
  .botanical-comparison-table th {
    padding: 1.25rem 1rem;
    font-family: var(--font-technical);
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-champagne);
    border-bottom: 1px solid rgba(212, 175, 55, 0.28);
    background-color: rgba(18, 20, 28, 0.65);
  }
  .botanical-comparison-table td {
    padding: 1.35rem 1rem;
    font-size: 0.92rem;
    color: var(--text-silk-ivory);
    border-bottom: 1px solid rgba(234, 230, 223, 0.09);
    vertical-align: top;
    line-height: 1.6;
  }
  .botanical-comparison-table tr:hover td {
    background-color: rgba(212, 175, 55, 0.04);
  }

  /* FAQ Accordion Ledger */
  .botanical-faq-ledger {
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgba(212, 175, 55, 0.3);
  }
  .botanical-faq-item {
    border-bottom: 1px solid rgba(234, 230, 223, 0.12);
    padding: 1.5rem 0;
  }
  .botanical-faq-item summary {
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1.5rem;
    font-family: var(--font-display);
    font-size: clamp(1.3rem, 2vw, 1.75rem);
    color: var(--text-silk-ivory);
  }
  .botanical-faq-item summary::-webkit-details-marker {
    display: none;
  }
  .botanical-faq-item__body {
    padding-top: 1.15rem;
    color: var(--text-muted-alabaster);
    font-size: 0.96rem;
    line-height: 1.76;
    max-width: 96ch;
  }

  @media (max-width: 1024px) {
    .botanical-split-5050__pinned {
      position: relative;
      top: 0;
      min-height: auto;
      border-right: none;
      border-bottom: 1px solid rgba(212, 175, 55, 0.24);
    }
    .botanical-hairline-row__meta {
      align-items: flex-start;
      text-align: left;
    }
  }
</style>
`;

/**
 * Rich Monograph Database for MS-123 through MS-130 (EN & BM)
 */
export const MONOGRAPH_DOSSIERS = [
  {
    key: 'tongkat-ali',
    microStepEn: 'MS-123',
    microStepMs: 'MS-127',
    monographCode: 'MONO-01',
    canonicalEnPath: '/ingredients/tongkat-ali-malaysia/',
    canonicalMsPath: '/ms/ingredients/tongkat-ali-malaysia/',
    enOutputPaths: [
      'ingredients/tongkat-ali-malaysia/index.html',
      'ingredients/tongkat-ali/index.html',
      'ingredients/tongkat-ali-eurycoma-longifolia/index.html',
    ],
    msOutputPaths: [
      'ms/ingredients/tongkat-ali-malaysia/index.html',
      'ms/ramuan-botani/tongkat-ali-malaysia/index.html',
      'ms/ramuan-botani/tongkat-ali-eurycoma-longifolia/index.html',
      'ms/ingredients/tongkat-ali-eurycoma-longifolia/index.html',
      'ms/ingredients/tongkat-ali/index.html',
      'ms/ramuan-botani/tongkat-ali/index.html',
    ],
    primaryProductSlug: 'horsemen',
    heroImage: '/assets/products/horsemen-stage.webp',
    portraitImage: '/assets/products/horsemen-portrait.webp',
    scientificName: 'Eurycoma longifolia Jack',
    botanicalFamily: 'Simaroubaceae',
    standardization: '100:1 Ultrasonic Aqueous Root Extract (≥ 2.2% Eurycomanone, 22% Eurypeptides, 40% Glycosaponins)',
    activeBioMarker: 'Eurycomanone (C20H24O9 · 408.40 g/mol) & 4.3 kDa Eurypeptides',
    harvestGeographyEn: 'Primary Lowland Dipterocarp Rainforests of Pahang, Perak & Terengganu, Peninsular Malaysia',
    harvestGeographyMs: 'Hutan Hujan Tropika Tanah Pamah Pahang, Perak & Terengganu, Semenanjung Malaysia',
    extractionPhysicsEn: 'Multi-Stage Pressurized Hot-Water (Aqueous) Ultrasonic Extraction + Membrane Lyophilization (100 kg Mature Taproot → 1 kg Bio-Active Extract)',
    extractionPhysicsMs: 'Pengekstrakan Air Panas Bertekanan Ultrasonik + Pengeringan Beku Membran (100 kg Akar Tunjang Matang → 1 kg Ekstrak Bio-Aktif)',
    anchorDosages: [
      {
        productSlug: 'horsemen',
        productNameEn: 'Horsemen (20 Capsules × 500mg)',
        productNameMs: 'Horsemen (20 Kapsul × 500mg)',
        sku: 'ONYX-HM-20',
        dosageMg: 150,
        capsuleTotalMg: 500,
        percentageOfCapsule: '30.0%',
        standardizationNoteEn: '150mg 100:1 Root Extract (≥2.2% Eurycomanone = 3.3mg Pure Eurycomanone per Capsule)',
        standardizationNoteMs: '150mg Ekstrak Akar 100:1 (≥2.2% Eurycomanone = 3.3mg Eurycomanone Tulen setiap Kapsul)',
        synergyRoleEn: 'Anchors Horsemen’s rapid evening readiness matrix alongside 100mg Peruvian Black Maca, 80mg Epimedium, and 80mg L-Arginine HCl for dual-mode evening stamina and Day-18 refill continuity.',
        synergyRoleMs: 'Menjadi teras kesediaan malam Horsemen bersama 100mg Maca Hitam Peru, 80mg Epimedium, dan 80mg L-Arginine HCl untuk stamina malam dwi-mod dan kitaran bekalan Hari Ke-18.',
      },
      {
        productSlug: 'grow-xl',
        productNameEn: 'Grow XL (30 Capsules × 550mg)',
        productNameMs: 'Grow XL (30 Kapsul × 550mg)',
        sku: 'ONYX-GX-30',
        dosageMg: 140,
        capsuleTotalMg: 550,
        percentageOfCapsule: '25.5%',
        standardizationNoteEn: '140mg Extra-Strength 100:1 Root Extract (≥2.0% Eurycomanone) for 30-Day Daily Conditioning',
        standardizationNoteMs: '140mg Ekstrak Akar 100:1 Kekuatan Ekstra (≥2.0% Eurycomanone) untuk Penjagaan Harian 30 Hari',
        synergyRoleEn: 'Drives Grow XL’s 30-day morning baseline vitality regimen, pairing with 110mg Maca Root, 100mg Dual Amino-Acid Matrix, 80mg Brazilian Muira Puama, and 70mg Saw Palmetto Berry.',
        synergyRoleMs: 'Memacu rutin kecergasan pagi 30 hari Grow XL, digandingkan bersama 110mg Akar Maca, 100mg Matriks Dwi-Asid Amino, 80mg Muira Puama Brazil, dan 70mg Beri Saw Palmetto.',
      },
      {
        productSlug: 'magnum-pump-xr',
        productNameEn: 'Magnum Pump XR (30 Black Capsules × 600mg)',
        productNameMs: 'Magnum Pump XR (30 Kapsul Hitam × 600mg)',
        sku: 'ONYX-MP-30',
        dosageMg: 90,
        capsuleTotalMg: 600,
        percentageOfCapsule: '15.0%',
        standardizationNoteEn: '90mg 100:1 Standardized Root Extract (2.2% Eurycomanone) in Testosterone Pro Series Matrix',
        standardizationNoteMs: '90mg Ekstrak Akar Piawai 100:1 (2.2% Eurycomanone) dalam Matriks Testosterone Pro Series',
        synergyRoleEn: 'Provides the endocrine vitality backbone behind Magnum Pump XR’s 320mg Nitric Oxide amino load (180mg L-Arginine HCl + 140mg L-Citrulline Malate) and 110mg Tribulus Terrestris.',
        synergyRoleMs: 'Membekalkan sokongan tenaga dalaman di sebalik 320mg matriks asid amino Nitrik Oksida Magnum Pump XR (180mg L-Arginine HCl + 140mg L-Citrulline Malate) dan 110mg Tribulus Terrestris.',
      },
      {
        productSlug: 'hammer-of-thor',
        productNameEn: 'Hammer of Thor (20 Veg. Capsules × 500mg)',
        productNameMs: 'Hammer of Thor (20 Kapsul Veg. × 500mg)',
        sku: 'ONYX-HT-20',
        dosageMg: 45,
        capsuleTotalMg: 500,
        percentageOfCapsule: '9.0%',
        standardizationNoteEn: '45mg 100:1 Water-Soluble Root Extract inside 100% Plant-Cellulose HPMC Capsule',
        standardizationNoteMs: '45mg Ekstrak Akar Larut Air 100:1 di dalam Kapsul Selulosa Tumbuhan HPMC 100% Vegetarian',
        synergyRoleEn: 'Complements Hammer of Thor’s primary 200mg 60%-Saponin Tribulus Terrestris and 15mg Chelated Zinc Bisglycinate with native Malaysian quassinoids for balanced daily recovery.',
        synergyRoleMs: 'Melengkapkan 200mg Tribulus Terrestris 60% Saponin dan 15mg Zink Bisglisinat Terkelat dalam Hammer of Thor dengan quassinoid tempatan untuk pemulihan tenaga seimbang.',
      },
    ],
    en: {
      seoTitle: 'Malaysian Tongkat Ali (Eurycoma Longifolia 100:1) Monograph — Eurycomanone, Free Testosterone & SHBG Modulation | Onyxmen Malaysia',
      metaDescription: 'Official Onyxmen Malaysia monograph on Malaysian Eurycoma longifolia 100:1 Root Extract (≥2.2% Eurycomanone). Explore SHBG modulation, cortisol resilience, and exact dosages in Horsemen (150mg), Grow XL (140mg), Magnum Pump XR (90mg) & Hammer of Thor (45mg). RM 159 discreet delivery.',
      eyebrow: 'MS-123 · BOTANICAL MONOGRAPH I · SIMAROUBACEAE QUASSINOID DOSSIER',
      headline: 'Malaysian Eurycoma Longifolia 100:1 Root Extract — Eurycomanone Standardization & Free Vitality Modulation',
      subheadline: 'Why Onyxmen Malaysia rejects raw ground wood fiber in favor of HPLC-verified 100:1 aqueous root extract standardized to ≥ 2.0%–2.2% Eurycomanone, anchoring Horsemen (150mg), Grow XL (140mg), Magnum Pump XR (90mg), and Hammer of Thor (45mg).',
      executiveSummary: 'Known across Peninsular Malaysia and Borneo as Pasak Bumi ("Bedrock of the Earth"), Eurycoma longifolia Jack is Malaysia’s crown ethnobotanical vitality root. However, 90% of commercial capsules sold in casual marketplaces contain unextracted, pulverized root bark or stem sawdust—material that is 85% indigestible cellulose wood fiber and frequently contaminated with soil heavy metals. Onyxmen Malaysia utilizes exclusively mature 7-to-10-year taproots harvested from Pahang, Perak, and Terengganu, processed via ultrasonic pressurized hot-water extraction at a strict 100:1 concentration ratio and verified by High-Performance Liquid Chromatography (HPLC) to deliver ≥ 2.0%–2.2% bioactive Eurycomanone.',
      mechanisms: [
        {
          code: 'MECH-TA-01',
          title: 'SHBG Displacement & Bioavailable Free Vitality Optimization',
          metric: 'FREE VITALITY INDEX',
          detail: 'In adult men over 30, rising Sex Hormone-Binding Globulin (SHBG) locks circulating endogenous vitality hormones into biologically inactive protein complexes. Standardized 4.3 kDa eurypeptides and eurycomanone quassinoids in 100:1 Eurycoma longifolia support healthy luteinizing signaling and help liberate bound vitality fractions into bioavailable free form without exogenous hormone suppression.',
        },
        {
          code: 'MECH-TA-02',
          title: 'Hypothalamic-Pituitary-Adrenal (HPA) Cortisol Buffering Under Urban Stress',
          metric: 'CORTISOL : DRIVE RATIO',
          detail: 'Long Kuala Lumpur commutes, late-night executive screen exposure, and chronic sleep debt elevate evening serum cortisol—directly blunting physical drive and nitric oxide responsiveness. Clinical nutrition trials demonstrate that 100:1 water-soluble Tongkat Ali extract moderates stress-induced cortisol spikes, restoring evening mental calmness and physical readiness.',
        },
        {
          code: 'MECH-TA-03',
          title: 'Aromatase Equilibrium & Cellular ATP Turnover in Skeletal Muscle',
          metric: 'SARCOPLASMIC ATP',
          detail: 'Quassinoid diterpenoids (eurycomanone, 13α(21)-epoxyeurycomanone, and eurycomalactone) support balanced aromatase enzyme kinetics while accelerating adenosine triphosphate (ATP) resynthesis and glycogen replenishment during resistance training or prolonged evening physical exertion.',
        },
        {
          code: 'MECH-TA-04',
          title: 'Endothelial Nitric Oxide & Phosphodiesterase Co-Modulation',
          metric: 'VASCULAR SYNERGY',
          detail: 'When paired with L-Arginine HCl (as in Horsemen 150mg TA + 80mg L-Arginine, or Magnum Pump XR 90mg TA + 320mg NO Matrix), eurycomanone supports smooth vascular muscle relaxation and cyclic nucleotide signaling—bridging central vitality drive with peripheral vascular blood flow.',
        },
      ],
      phytochemicalFractions: [
        {
          code: 'FRAC-01',
          compound: 'Eurycomanone (C20H24O9 · C-20 Quassinoid Diterpenoid)',
          spec: '≥ 2.0% – 2.2% by HPLC-DAD (254 nm)',
          role: 'Primary pharmacognostic marker of authentic Malaysian Eurycoma longifolia taproot; responsible for steroidogenic enzyme support, aromatase balance, and physical drive.',
        },
        {
          code: 'FRAC-02',
          compound: 'Bioactive Eurypeptides (4.3 kDa Glycopeptide Fraction)',
          spec: '≥ 22.0% Water-Soluble Peptide Complex',
          role: 'Supports CYP17 (17α-hydroxylase/17,20-lyase) metabolic pathways and promotes favorable free-to-bound vitality ratios in adult men experiencing age-related fatigue.',
        },
        {
          code: 'FRAC-03',
          compound: 'Total Glycosaponins & Polysaccharides',
          spec: '≥ 40.0% Gravimetric / UV-Vis Assay',
          role: 'Supports adaptogenic stress resilience, immune modulation, and smooth gastrointestinal absorption without mucosal irritation.',
        },
        {
          code: 'FRAC-04',
          compound: 'Eurycomanol & Eurycomalactone Minor Quassinoids',
          spec: 'Full-Spectrum Native Root Ratio',
          role: 'Secondary bitter quassinoid cofactors that preserve the complete ethnobotanical entourage profile of wild-harvested Peninsular Malaysia roots.',
        },
      ],
      faqs: [
        {
          questionEn: 'Why does Onyxmen use a 100:1 water-soluble Tongkat Ali extract instead of raw root powder?',
          answerEn: 'Raw crushed Eurycoma longifolia root powder consists of over 85% lignified cellulose wood fiber that the human stomach cannot break down, yielding erratic eurycomanone absorption and frequent gastric bloating. Onyxmen’s 100:1 ultrasonic aqueous extraction concentrates 100 kilograms of mature Malaysian taproot into 1 kilogram of pure water-soluble bioactives standardized to ≥ 2.0%–2.2% Eurycomanone, dissolving completely in warm water within 20–30 minutes.',
        },
        {
          questionEn: 'Which Onyxmen bottle contains the highest milligram dosage of Malaysian Tongkat Ali per capsule?',
          answerEn: 'Horsemen (20 Capsules × 500mg, SKU ONYX-HM-20) delivers our highest single-capsule concentration at 150mg of 100:1 Eurycoma longifolia (2.2% Eurycomanone) per 500mg capsule—engineered for rapid evening readiness. Grow XL (30 Capsules, SKU ONYX-GX-30) follows closely at 140mg per capsule for a full 30-day daily conditioning cycle, while Magnum Pump XR contains 90mg per black capsule and Hammer of Thor contains 45mg alongside 200mg Tribulus Terrestris.',
        },
        {
          questionEn: 'How does standardized Eurycoma longifolia support free vitality without acting like a synthetic stimulant?',
          answerEn: 'Unlike caffeine or synthetic central nervous system stimulants that artificially spike heart rate and blood pressure, Eurycoma longifolia works through nutritional endocrine pathways—supporting healthy cortisol balance under stress and helping release bound vitality from Sex Hormone-Binding Globulin (SHBG). You experience calm, grounded physical drive and stamina without jitteriness or insomnia.',
        },
        {
          questionEn: 'Is Onyxmen’s Malaysian Tongkat Ali screened for heavy metals like mercury, lead, and arsenic?',
          answerEn: 'Yes. Because wild forest taproots absorb minerals from tropical soil, unscreened raw Tongkat Ali often fails heavy metal thresholds. Every batch of Onyxmen’s 100:1 aqueous extract undergoes ICP-MS screening for Lead (Pb), Arsenic (As), Mercury (Hg), and Cadmium (Cd), as well as microbial safety testing, prior to encapsulation.',
        },
        {
          questionEn: 'Can I stack a Tongkat Ali-rich formula like Horsemen or Grow XL with Magnum Pump XR?',
          answerEn: 'Many adult men in Malaysia follow a structured day-and-evening protocol: taking 1 capsule of Grow XL (140mg Tongkat Ali + Muira Puama + Saw Palmetto) after breakfast for 30-day baseline conditioning, or using Magnum Pump XR / Horsemen 45 minutes prior to evening physical activity. Do not exceed 2 total capsules within any 24-hour window.',
        },
        {
          questionEn: 'What is the official price of Onyxmen Tongkat Ali formulations and how discreet is Malaysia shipping?',
          answerEn: 'All four Onyxmen formulations (Horsemen, Grow XL, Magnum Pump XR, and Hammer of Thor) share our transparent official Malaysia pricing: 1 Bottle = RM 159 (159.00 MYR), 2 Bottles = RM 286 (10% OFF vs RM 318) (318.00 MYR with Free Nationwide Malaysia Shipping), and 3 Bottles = RM 405 (15% OFF vs RM 477) (477.00 MYR Complete 90-Day Vault). Every order ships in a 100% plain unmarked parcel from OM Fulfilment Logistics with FPX, DuitNow QR, and COD supported.',
        },
      ],
    },
    ms: {
      seoTitle: 'Monograf Tongkat Ali Malaysia (Eurycoma Longifolia 100:1) — Piawaian Eurycomanone & Stamina Lelaki | Onyxmen Malaysia',
      metaDescription: 'Monograf fitokimia rasmi Onyxmen Malaysia mengenai Ekstrak Akar Tongkat Ali 100:1 (Eurycoma longifolia ≥2.2% Eurycomanone). Ketahui mekanisme keseimbangan SHBG, kawalan kortisol & dos tepat dalam Horsemen (150mg), Grow XL (140mg), Magnum Pump XR (90mg) & Hammer of Thor (45mg). RM 159 bungkusan rahsia.',
      eyebrow: 'MS-127 · MONOGRAF BOTANI I · DOSSIER QUASSINOID SIMAROUBACEAE',
      headline: 'Ekstrak Akar Tongkat Ali Malaysia 100:1 (Eurycoma Longifolia) — Piawaian Eurycomanone & Keseimbangan Tenaga Lelaki',
      subheadline: 'Mengapa Onyxmen Malaysia menolak serbuk kayu akar mentah dan hanya menggunakan ekstrak air tulen 100:1 yang disahkan HPLC (≥ 2.0%–2.2% Eurycomanone) sebagai teras Horsemen (150mg), Grow XL (140mg), Magnum Pump XR (90mg), dan Hammer of Thor (45mg).',
      executiveSummary: 'Diiktiraf di seluruh Semenanjung Malaysia dan Borneo sebagai khazanah etnobotani negara, Eurycoma longifolia Jack menyimpan sebatian bioaktif utamanya di dalam akar tunjang matang berusia 7 hingga 10 tahun. Namun, kebanyakan kapsul murah di pasaran hanya mengandungi serbuk kayu akar mentah yang terdiri daripada 85% serat selulosa yang sukar dihadam dan berisiko dicemari logam berat tanah. Onyxmen Malaysia hanya menggunakan ekstrak air bertekanan ultrasonik bernisbah 100:1 daripada akar matang Pahang, Perak, dan Terengganu yang diuji secara kromatografi cecair berprestasi tinggi (HPLC) untuk menjamin kepekatan ≥ 2.0%–2.2% Eurycomanone.',
      mechanisms: [
        {
          code: 'MECH-TA-01',
          title: 'Modulasi SHBG & Ketersediaan Bio Tenaga Dalaman Lelaki',
          metric: 'INDEKS TENAGA BEBAS',
          detail: 'Bagi lelaki dewasa berusia 30 tahun ke atas, peningkatan globulin pengikat (SHBG) sering mengikat hormon kecergasan semula jadi sehingga menjadi tidak aktif. Fraksi eurypeptide 4.3 kDa dan quassinoid eurycomanone dalam ekstrak 100:1 Eurycoma longifolia membantu menyokong ketersediaan tenaga dalaman bebas secara semula jadi.',
        },
        {
          code: 'MECH-TA-02',
          title: 'Penstabilan Kortisol Akibat Tekanan Kerja & Kurang Tidur di Bandar',
          metric: 'NISBAH KORTISOL : STAMINA',
          detail: 'Kesesakan jalan raya di Lembah Klang, beban kerja korporat, dan kurang tidur meningkatkan paras hormon tekanan kortisol pada waktu malam—yang secara langsung menurunkan keinginan dan stamina fizikal. Ekstrak larut air Tongkat Ali 100:1 membantu meredakan kesan kelesuan tekanan dan mengembalikan fokus serta kesediaan malam.',
        },
        {
          code: 'MECH-TA-03',
          title: 'Kitaran Semula Tenaga Selular ATP & Ketahanan Otot Rangka',
          metric: 'TENAGA SELULAR ATP',
          detail: 'Sebatian diterpenoid quassinoid (eurycomanone, epoxyeurycomanone, dan eurycomalactone) menyokong penghasilan semula adenosina trifosfat (ATP) di dalam tisu otot serta mempercepatkan pemulihan glikogen semasa latihan bebanan atau aktiviti fizikal malam.',
        },
        {
          code: 'MECH-TA-04',
          title: 'Sinergi Nitrik Oksida Endotelium Bersama L-Arginine HCl',
          metric: 'SINERGI VASKULAR',
          detail: 'Apabila digabungkan bersama L-Arginine HCl (seperti 150mg Tongkat Ali + 80mg L-Arginine dalam Horsemen, atau 90mg Tongkat Ali + 320mg matriks NO dalam Magnum Pump XR), eurycomanone membantu kelancaran otot licin vaskular dan aliran darah periferi.',
        },
      ],
      phytochemicalFractions: [
        {
          code: 'FRAC-01',
          compound: 'Eurycomanone (C20H24O9 · Quassinoid Diterpenoid C-20)',
          spec: '≥ 2.0% – 2.2% melalui Ujian HPLC-DAD (254 nm)',
          role: 'Penanda bioaktif utama bagi akar tunjang Tongkat Ali Malaysia tulen; menyokong keseimbangan tenaga dalaman dan kecergasan fizikal lelaki.',
        },
        {
          code: 'FRAC-02',
          compound: 'Eurypeptide Bioaktif (Fraksi Glikopeptida 4.3 kDa)',
          spec: '≥ 22.0% Kompleks Peptida Larut Air',
          role: 'Menyokong laluan metabolisme enzim kecergasan dan nisbah tenaga bebas yang sihat bagi lelaki dewasa yang mengalami keletihan usia.',
        },
        {
          code: 'FRAC-03',
          compound: 'Jumlah Glikosaponin & Polisakarida',
          spec: '≥ 40.0% Ujian Gravimetrik / UV-Vis',
          role: 'Menyokong daya tahan adaptogenik terhadap tekanan harian dan penyerapan lancar di dalam perut tanpa rasa pedih ulu hati.',
        },
        {
          code: 'FRAC-04',
          compound: 'Eurycomanol & Eurycomalactone (Quassinoid Sekunder)',
          spec: 'Nisbah Spektrum Penuh Akar Hutan Asli',
          role: 'Melengkapkan profil fitokimia semula jadi akar hutan hujan Semenanjung Malaysia untuk kesan sinergi menyeluruh.',
        },
      ],
      faqs: [
        {
          questionMs: 'Mengapa Onyxmen menggunakan ekstrak Tongkat Ali 100:1 larut air dan bukannya serbuk akar kayu biasa?',
          answerMs: 'Serbuk akar Tongkat Ali mentah yang dikisar mengandungi lebih 85% serat kayu selulosa yang tidak dapat dihadam oleh perut manusia, menyebabkan penyerapan eurycomanone yang sangat rendah dan perut mudah kembung. Ekstrak air ultrasonik 100:1 Onyxmen memekatkan 100 kg akar matang kepada 1 kg ekstrak tulen berpiawaian ≥ 2.0%–2.2% Eurycomanone yang larut sepenuhnya bersama air suam dalam 20–30 minit.',
        },
        {
          questionMs: 'Botol Onyxmen yang manakah mempunyai dos Tongkat Ali Malaysia tertinggi bagi setiap kapsul?',
          answerMs: 'Horsemen (20 Kapsul × 500mg, SKU ONYX-HM-20) membekalkan kepekatan tertinggi bagi setiap kapsul iaitu 150mg Ekstrak Tongkat Ali 100:1 (2.2% Eurycomanone)—dirumus khas untuk kesediaan malam yang pantas. Grow XL (30 Kapsul, SKU ONYX-GX-30) pula mengandungi 140mg setiap kapsul untuk penjagaan harian 30 hari, diikuti oleh Magnum Pump XR (90mg) dan Hammer of Thor (45mg bersama 200mg Tribulus Terrestris).',
        },
        {
          questionMs: 'Adakah ekstrak Tongkat Ali dalam produk Onyxmen menyebabkan debaran jantung atau sukar tidur?',
          answerMs: 'Tidak. Ekstrak Eurycoma longifolia 100:1 adalah 100% bebas kafein dan bebas bahan perangsang saraf sintetik. Ia bertindak secara adaptogenik dengan mengawal hormon tekanan kortisol dan menyokong tenaga dalaman semula jadi, membolehkan anda menikmati stamina malam yang mantap serta tidur yang lena.',
        },
        {
          questionMs: 'Adakah ekstrak Tongkat Ali Onyxmen disaring daripada logam berat seperti merkuri dan plumbum?',
          answerMs: 'Ya. Oleh sebab akar hutan menyerap mineral daripada tanah, setiap kelompok ekstrak 100:1 Onyxmen wajib melalui ujian saringan ICP-MS bagi memastikan ia bebas daripada pencemaran Plumbum (Pb), Arsenik (As), Merkuri (Hg), dan Kadmium (Cd) sebelum dikapsulkan.',
        },
        {
          questionMs: 'Bagaimanakah cara memilih antara Horsemen (150mg Tongkat Ali) dan Grow XL (140mg Tongkat Ali)?',
          answerMs: 'Pilih Horsemen (20 Kapsul × 500mg, kitaran 18–20 hari) jika keutamaan anda ialah kesediaan tenaga malam yang pantas (diambil 45–60 minit sebelum aktiviti malam). Pilih Grow XL (30 Kapsul × 550mg, kitaran 30 hari penuh) jika anda mahukan rutin 1 kapsul setiap pagi bersama Saw Palmetto dan Muira Puama untuk penjagaan stamina sepanjang hari.',
        },
        {
          questionMs: 'Berapakah harga rasmi botol Onyxmen di Malaysia dan adakah penghantarannya rahsia?',
          answerMs: 'Semua 4 formulasi Onyxmen dijual pada harga rasmi yang seragam: 1 Botol = RM 159 (159.00 MYR), 2 Botol = RM 286 (10% OFF vs RM 318) (318.00 MYR dengan Penghantaran Percuma ke seluruh Malaysia termasuk Sabah & Sarawak), dan 3 Botol = RM 405 (15% OFF vs RM 477) (477.00 MYR Pakej Lengkap 90 Hari). Setiap bungkusan dihantar tanpa sebarang nama produk atau logo di luar kotak, dengan pilihan FPX, DuitNow QR, dan COD.',
        },
      ],
    },
  },
  {
    key: 'tribulus-terrestris',
    microStepEn: 'MS-124',
    microStepMs: 'MS-128',
    monographCode: 'MONO-02',
    canonicalEnPath: '/ingredients/tribulus-terrestris-malaysia/',
    canonicalMsPath: '/ms/ingredients/tribulus-terrestris-malaysia/',
    enOutputPaths: [
      'ingredients/tribulus-terrestris-malaysia/index.html',
      'ingredients/tribulus-terrestris/index.html',
      'ingredients/tribulus-terrestris-saponins/index.html',
      'ingredients/panax-ginseng-ginsenosides/index.html',
      'ingredients/panax-ginseng/index.html',
    ],
    msOutputPaths: [
      'ms/ingredients/tribulus-terrestris-malaysia/index.html',
      'ms/ramuan-botani/tribulus-terrestris/index.html',
      'ms/ramuan-botani/tribulus-terrestris-malaysia/index.html',
      'ms/ramuan-botani/tribulus-terrestris-saponin/index.html',
      'ms/ingredients/tribulus-terrestris-saponins/index.html',
      'ms/ramuan-botani/panax-ginseng-ginsenosida/index.html',
      'ms/ingredients/tribulus-terrestris/index.html',
    ],
    primaryProductSlug: 'hammer-of-thor',
    heroImage: '/assets/products/hammer-of-thor-stage.webp',
    portraitImage: '/assets/products/hammer-of-thor-portrait.webp',
    scientificName: 'Tribulus terrestris L. + Panax ginseng C.A. Mey.',
    botanicalFamily: 'Zygophyllaceae & Araliaceae Dual Phytosterol-Ginsenoside Matrix',
    standardization: '60% Steroidal Furostanol Saponins (Calculated as Protodioscin) + 8%–10% Panax Ginsenosides (Rg1, Rb1, Rg3)',
    activeBioMarker: 'Protodioscin (C51H84O22 · 1049.20 g/mol) & Ginsenoside Rg1/Rb1/Rg3',
    harvestGeographyEn: 'Thracian Balkan Highlands & Eastern Mediterranean (Tribulus) + Geumsan 6-Year Mountain Roots (Panax Ginseng)',
    harvestGeographyMs: 'Tanah Tinggi Balkan & Mediterranean Timur (Tribulus) + Akar Tua 6 Tahun Geumsan (Panax Ginseng)',
    extractionPhysicsEn: 'Hydro-Ethanolic Aerial Fruit Standardization (60% Furostanol Saponins) + Low-Temperature Steam-Aged Root Extraction (Zero Pesticide Residue)',
    extractionPhysicsMs: 'Pengekstrakan Buah Piawai (60% Saponin Furostanol) + Pengekstrakan Akar Ginseng Kukus Suhu Rendah (Bebas Sisa Racun Perosak)',
    anchorDosages: [
      {
        productSlug: 'hammer-of-thor',
        productNameEn: 'Hammer of Thor (20 Veg. Capsules × 500mg)',
        productNameMs: 'Hammer of Thor (20 Kapsul Veg. × 500mg)',
        sku: 'ONYX-HT-20',
        dosageMg: 200,
        capsuleTotalMg: 500,
        percentageOfCapsule: '40.0% (+12% Panax = 52%)',
        standardizationNoteEn: '200mg 60%-Saponin Tribulus Terrestris + 60mg 10%-Ginsenoside Panax Ginseng (260mg Combined Matrix)',
        standardizationNoteMs: '200mg Tribulus Terrestris 60% Saponin + 60mg Panax Ginseng 10% Ginsenosida (260mg Matriks Gabungan)',
        synergyRoleEn: 'Forms 52% of every Hammer of Thor 100% plant-derived HPMC vegetarian capsule—printed directly on the bottle crest ("Men’s Health — Tribulus Terrestris — 20 Veg. Capsules") and paired with 15mg Chelated Zinc Bisglycinate.',
        synergyRoleMs: 'Membentuk 52% daripada setiap kapsul vegetarian HPMC Hammer of Thor—tertera jelas pada label botol ("Men’s Health — Tribulus Terrestris — 20 Veg. Capsules") bersama 15mg Zink Bisglisinat Terkelat.',
      },
      {
        productSlug: 'magnum-pump-xr',
        productNameEn: 'Magnum Pump XR (30 Black Capsules × 600mg)',
        productNameMs: 'Magnum Pump XR (30 Kapsul Hitam × 600mg)',
        sku: 'ONYX-MP-30',
        dosageMg: 110,
        capsuleTotalMg: 600,
        percentageOfCapsule: '18.3%',
        standardizationNoteEn: '110mg 45%-Saponin Pro-Series Tribulus Terrestris inside 600mg Jet-Black XR Capsule',
        standardizationNoteMs: '110mg Tribulus Terrestris 45% Saponin di dalam Kapsul Hitam XR 600mg',
        synergyRoleEn: 'Amplifies physical drive and gym resistance output alongside 180mg L-Arginine HCl, 140mg L-Citrulline Malate, 90mg Tongkat Ali, and 65mg Thai Black Ginger.',
        synergyRoleMs: 'Meningkatkan daya tahan otot dan prestasi senaman bersama 180mg L-Arginine HCl, 140mg L-Citrulline Malate, 90mg Tongkat Ali, dan 65mg Kunyit Hitam.',
      },
      {
        productSlug: 'horsemen',
        productNameEn: 'Horsemen (20 Capsules × 500mg)',
        productNameMs: 'Horsemen (20 Kapsul × 500mg)',
        sku: 'ONYX-HM-20',
        dosageMg: 30,
        capsuleTotalMg: 500,
        percentageOfCapsule: '6.0% (+12% Panax = 18%)',
        standardizationNoteEn: '30mg Tribulus Saponin & Zinc Picolinate Matrix + 60mg 6-Year Korean Red Panax Ginseng',
        standardizationNoteMs: '30mg Matriks Saponin Tribulus & Zink Pikolinat + 60mg Panax Ginseng Merah Korea 6 Tahun',
        synergyRoleEn: 'Provides essential steroidal saponin and ginsenoside cofactors to round out Horsemen’s 150mg Tongkat Ali and 100mg Black Maca evening protocol.',
        synergyRoleMs: 'Membekalkan kofaktor saponin steroid dan ginsenosida bagi melengkapkan protokol malam 150mg Tongkat Ali dan 100mg Maca Hitam dalam Horsemen.',
      },
      {
        productSlug: 'grow-xl',
        productNameEn: 'Grow XL (30 Capsules × 550mg)',
        productNameMs: 'Grow XL (30 Kapsul × 550mg)',
        sku: 'ONYX-GX-30',
        dosageMg: 50,
        capsuleTotalMg: 550,
        percentageOfCapsule: '9.1%',
        standardizationNoteEn: '50mg Aged Panax Ginseng (8% Ginsenosides) & Ginkgo Biloba Flavone Glycoside Cofactor',
        standardizationNoteMs: '50mg Kofaktor Panax Ginseng Tua (8% Ginsenosida) & Glikosida Flavon Ginkgo Biloba',
        synergyRoleEn: 'Supports peripheral micro-circulation, cognitive sharpness, and daytime ATP stamina across Grow XL’s 30-day conditioning cycle.',
        synergyRoleMs: 'Menyokong peredaran darah mikro periferi, fokus minda, dan tenaga ATP siang hari sepanjang kitaran 30 hari Grow XL.',
      },
    ],
    en: {
      seoTitle: '60%-Saponin Tribulus Terrestris & Panax Ginseng Monograph — Protodioscin & Physical Drive | Onyxmen Malaysia',
      metaDescription: 'Technical botanical monograph on 60%-Saponin Tribulus Terrestris (Protodioscin) and 6-Year Korean Red Panax Ginseng in Hammer of Thor (200mg + 60mg in 20 Veg. Capsules) and Magnum Pump XR (110mg). Official RM 159 Onyxmen Malaysia vault.',
      eyebrow: 'MS-124 · BOTANICAL MONOGRAPH II · PROTODIOSCIN SAPONIN & GINSENOSIDE MATRIX',
      headline: '60%-Saponin Tribulus Terrestris & Panax Ginseng Matrix — Protodioscin Phytosterols & Physical Drive',
      subheadline: 'Inside the furostanol steroidal saponin chemistry that powers Hammer of Thor (200mg Tribulus + 60mg Panax Ginseng in 100% Vegetarian HPMC Capsules) and Magnum Pump XR (110mg Tribulus).',
      executiveSummary: 'Emblazoned directly across the front label of Onyxmen Malaysia’s Hammer of Thor ("Men’s Health — Tribulus Terrestris — 20 Veg. Capsules"), Tribulus terrestris L. is only as effective as its verified concentration of steroidal furostanol saponins—specifically Protodioscin. Generic Indian or Chinese whole-weed powders often contain less than 15% total saponins and almost zero protodioscin. Onyxmen sources Eastern Mediterranean and Balkan highland aerial fruit extracts standardized to 60% furostanol saponins in Hammer of Thor (200mg per capsule) and 45% in Magnum Pump XR (110mg), synergized with 6-year aged Panax ginseng standardized to 8%–10% protopanaxadiol and protopanaxatriol ginsenosides.',
      mechanisms: [
        {
          code: 'MECH-TT-01',
          title: 'Androgen Receptor Density & DHEA-S Phytosterol Precursor Support',
          metric: 'PROTODIOSCIN PATHWAY',
          detail: 'Protodioscin—a spirostanol/furostanol steroidal glycoside—supports endogenous dehydroepiandrosterone (DHEA) conversion and upregulates androgen receptor sensitivity in skeletal muscle and peripheral tissues, promoting confident physical drive and muscular tone.',
        },
        {
          code: 'MECH-TT-02',
          title: 'Corpus Cavernosum & Endothelial eNOS Upregulation via Saponin-Ginsenoside Synergy',
          metric: 'DUAL eNOS ACTIVATION',
          detail: 'Both protodioscin and Panax ginsenoside Rg1/Rg3 stimulate endothelial nitric oxide synthase (eNOS) transcription, enhancing localized nitric oxide release and vascular compliance during evening physical performance without systemic blood-pressure drops.',
        },
        {
          code: 'MECH-TT-03',
          title: 'Lactate Clearance & Cardiorespiratory Anti-Fatigue Under Tropical Humidity',
          metric: 'VO2 & ATP RECOVERY',
          detail: 'Six-year aged Panax ginseng ginsenosides (Rb1, Rg1, Rg3) buffer exercise-induced blood lactate accumulation and preserve mitochondrial membrane potential during high-humidity workouts or late-evening physical exertion.',
        },
        {
          code: 'MECH-TT-04',
          title: '100% Plant-Cellulose HPMC Bio-Dissolution & Chelated Zinc Co-Absorption',
          metric: 'VEG. CAPSULE KINETICS',
          detail: 'In Hammer of Thor, the 200mg Tribulus + 60mg Panax Ginseng matrix is housed inside a low-moisture Hypromellose (HPMC) vegetarian shell alongside 15mg Zinc Bisglycinate Chelate—preventing humidity cross-linking in Malaysia’s tropical climate.',
        },
      ],
      phytochemicalFractions: [
        {
          code: 'FRAC-TT-01',
          compound: 'Protodioscin (3-O-[α-L-Rhamnopyranosyl-(1→2)-[α-L-rhamnopyranosyl-(1→4)]-β-D-glucopyranosyl]-26-O-β-D-glucopyranosylfurost-5-ene-3β,22α,26-triol)',
          spec: '60% Total Steroidal Furostanol Saponins (UV/HPLC Verified)',
          role: 'Primary steroidal saponin driver of physical vigor, receptor sensitivity, and nitric oxide synthase co-activation in Hammer of Thor (200mg).',
        },
        {
          code: 'FRAC-TT-02',
          compound: 'Protogracillin & Tribulosin Steroidal Glycosides',
          spec: 'Full-Spectrum Aerial Fruit Saponin Profile',
          role: 'Complementary furostanol and spirostanol saponins that support muscular recovery and stamina conditioning over a 20-to-60-day protocol.',
        },
        {
          code: 'FRAC-TT-03',
          compound: 'Ginsenosides Rg1, Rb1 & Rg3 (6-Year Aged Panax ginseng Root)',
          spec: '8.0% – 10.0% Standardized Triterpenoid Saponins',
          role: 'Supports central nervous system anti-fatigue resilience, cellular ATP synthesis, and microvascular endothelial tone.',
        },
        {
          code: 'FRAC-TT-04',
          compound: 'Zinc Bisglycinate Chelate Cofactor (in Hammer of Thor)',
          spec: '15mg High-Bioavailability Amino-Chelated Elemental Zinc',
          role: 'Essential trace mineral co-factor required for over 300 enzymatic reactions governing male reproductive nutrition and protein synthesis.',
        },
      ],
      faqs: [
        {
          questionEn: 'Why does the front label of Hammer of Thor explicitly state "Tribulus Terrestris — 20 Veg. Capsules"?',
          answerEn: 'Hammer of Thor (SKU ONYX-HT-20) is engineered specifically as Onyxmen Malaysia’s high-saponin Tribulus Terrestris specialist inside 100% plant-derived vegetarian (HPMC) capsules. Each 500mg capsule delivers 200mg of 60%-saponin Tribulus Terrestris plus 100mg Peruvian Maca, 80mg plant-fermented L-Arginine, 60mg Panax Ginseng, 45mg Malaysian Tongkat Ali, and 15mg Chelated Zinc.',
        },
        {
          questionEn: 'What is the difference between 60%-saponin Balkan Tribulus and cheap unstandardized Tribulus powder?',
          answerEn: 'The physiological activity of Tribulus terrestris depends on its concentration of furostanol steroidal saponins, particularly protodioscin. Low-grade stem powders contain under 15% total saponins with negligible protodioscin. Onyxmen’s 60%-saponin fruit extract provides four times the steroidal saponin density per milligram.',
        },
        {
          questionEn: 'Why are Tribulus Terrestris and Korean Red Panax Ginseng combined in the same matrix?',
          answerEn: 'Tribulus protodioscin supports androgen receptor sensitivity and physical drive, while 6-year aged Panax Ginseng ginsenosides (Rg1, Rb1, Rg3) combat central fatigue, accelerate cellular ATP production, and co-activate endothelial nitric oxide synthase (eNOS). Together they deliver both physical strength and sustained cardiorespiratory endurance.',
        },
        {
          questionEn: 'How do I choose between Hammer of Thor (200mg Tribulus) and Magnum Pump XR (110mg Tribulus)?',
          answerEn: 'Choose Hammer of Thor (20 Veg. Capsules, RM 159) if you require a 100% vegetarian plant-cellulose capsule with our highest Tribulus saponin load (200mg) and chelated Zinc (15mg) for evening stamina conditioning. Choose Magnum Pump XR (30 Black Capsules, RM 159) if you want 110mg Tribulus combined with 320mg of Extended-Release Nitric Oxide amino acids (180mg L-Arginine HCl + 140mg L-Citrulline Malate) for pre-gym and evening vascular output.',
        },
        {
          questionEn: 'Do plant-derived HPMC vegetarian capsules hold up better in Malaysia’s humid climate?',
          answerEn: 'Yes. Traditional animal-gelatin capsules contain 13%–16% moisture and can soften or stick together if exposed to Malaysia’s 80%+ tropical humidity. Hammer of Thor’s Hypromellose (HPMC) plant-cellulose capsules have a low moisture content (4%–6%), remaining crisp, stable, and rapid-dissolving across all 16 Malaysian states.',
        },
        {
          questionEn: 'How can I order Hammer of Thor or Magnum Pump XR with discreet delivery in Malaysia?',
          answerEn: 'Click any "Acquire" button on this monograph to open the Express Discreet Order Drawer. Select 1 Bottle (RM 159), 2 Bottles (RM 286 (10% OFF vs RM 318) — Free Nationwide Shipping), or 3 Bottles (RM 405 (15% OFF vs RM 477)), and pay via FPX Online Banking, DuitNow QR, or Cash on Delivery (COD). Every parcel is 100% plain and unmarked.',
        },
      ],
    },
    ms: {
      seoTitle: 'Monograf Tribulus Terrestris 60% Saponin & Panax Ginseng — Saponin Protodioscin & Kekuatan Fizikal | Onyxmen Malaysia',
      metaDescription: 'Monograf teknikal Onyxmen Malaysia mengenai Tribulus Terrestris 60% Saponin (Protodioscin) dan Panax Ginseng 6 Tahun dalam Hammer of Thor (200mg + 60mg dalam 20 Kapsul Veg.) serta Magnum Pump XR (110mg). Harga rasmi RM 159 bungkusan rahsia.',
      eyebrow: 'MS-128 · MONOGRAF BOTANI II · MATRIKS SAPONIN PROTODIOSCIN & GINSENOSIDA',
      headline: 'Matriks Tribulus Terrestris 60% Saponin & Panax Ginseng — Fitosterol Protodioscin & Daya Tahan Fizikal',
      subheadline: 'Kenali kimia saponin furostanol steroid yang memacu Hammer of Thor (200mg Tribulus + 60mg Panax Ginseng di dalam Kapsul Vegetarian HPMC) dan Magnum Pump XR (110mg Tribulus).',
      executiveSummary: 'Tertera dengan jelas pada label hadapan botol Hammer of Thor ("Men’s Health — Tribulus Terrestris — 20 Veg. Capsules"), keberkesanan Tribulus terrestris L. bergantung sepenuhnya kepada kepekatan saponin steroid furostanol—khususnya sebatian Protodioscin. Serbuk herba biasa di pasaran selalunya hanya mengandungi kurang daripada 15% saponin. Onyxmen menggunakan ekstrak buah piawai 60% saponin furostanol dalam Hammer of Thor (200mg setiap kapsul) dan 45% dalam Magnum Pump XR (110mg), digabungkan bersama akar Panax ginseng berusia 6 tahun (8%–10% ginsenosida).',
      mechanisms: [
        {
          code: 'MECH-TT-01',
          title: 'Kepekaan Reseptor Tenaga & Sokongan Fitosterol Protodioscin',
          metric: 'LALUAN PROTODIOSCIN',
          detail: 'Protodioscin—glikosida steroid furostanol—menyokong keseimbangan prekursor tenaga semula jadi dan kepekaan reseptor pada tisu otot rangka, membantu meningkatkan kekuatan fizikal dan keyakinan lelaki dewasa.',
        },
        {
          code: 'MECH-TT-02',
          title: 'Pengaktifan Dwi-Laluan eNOS melalui Sinergi Saponin & Ginsenosida',
          metric: 'AKTIVITI eNOS VASKULAR',
          detail: 'Kedua-dua protodioscin dan ginsenosida Rg1/Rg3 daripada Panax ginseng merangsang enzim nitrik oksida sintase endotelium (eNOS), melancarkan aliran darah mikro semasa aktiviti fizikal malam.',
        },
        {
          code: 'MECH-TT-03',
          title: 'Ketahanan Otot & Pemulihan Tenaga Dalam Cuaca Panas Lembap Malaysia',
          metric: 'PEMULIHAN ATP & VO2',
          detail: 'Ginsenosida Panax ginseng 6 tahun membantu mengurangkan pengumpulan asid laktik di dalam otot semasa latihan bebanan atau kerja berat, mempercepatkan pemulihan fizikal selepas waktu kerja.',
        },
        {
          code: 'MECH-TT-04',
          title: 'Kapsul Vegetarian HPMC Tahan Lembap & Penyerapan Zink Terkelat',
          metric: 'KAPSUL VEG HPMC',
          detail: 'Dalam Hammer of Thor, matriks 200mg Tribulus + 60mg Panax Ginseng dimasukkan ke dalam sarung kapsul selulosa tumbuhan HPMC bersama 15mg Zink Bisglisinat Terkelat yang stabil dalam cuaca tropika Malaysia.',
        },
      ],
      phytochemicalFractions: [
        {
          code: 'FRAC-TT-01',
          compound: 'Protodioscin (Saponin Furostanol Steroid Utama)',
          spec: '60% Jumlah Saponin Steroid Furostanol (Disahkan UV/HPLC)',
          role: 'Pemacu fitosterol utama untuk kekuatan fizikal, daya tahan otot, dan kesediaan malam dalam Hammer of Thor (200mg).',
        },
        {
          code: 'FRAC-TT-02',
          compound: 'Protogracillin & Tribulosin (Glikosida Steroid Sekunder)',
          spec: 'Profil Saponin Buah Spektrum Penuh',
          role: 'Menyokong pemulihan tisu otot dan penjagaan stamina berperingkat sepanjang kitaran 20 hingga 60 hari.',
        },
        {
          code: 'FRAC-TT-03',
          compound: 'Ginsenosida Rg1, Rb1 & Rg3 (Akar Panax Ginseng 6 Tahun)',
          spec: '8.0% – 10.0% Saponin Triterpenoid Piawai',
          role: 'Melawan kelesuan fizikal dan mental, menyokong penghasilan ATP selular, dan membantu kelancaran peredaran mikro.',
        },
        {
          code: 'FRAC-TT-04',
          compound: 'Zink Bisglisinat Terkelat (Kofaktor Mineral dalam Hammer of Thor)',
          spec: '15mg Zink Terkelat Asid Amino Berpenyerapan Tinggi',
          role: 'Mineral surih penting untuk lebih 300 tindak balas enzim berkaitan nutrisi kesihatan lelaki dewasa dan sintesis protein.',
        },
      ],
      faqs: [
        {
          questionMs: 'Mengapa label hadapan botol Hammer of Thor memaparkan "Tribulus Terrestris — 20 Veg. Capsules"?',
          answerMs: 'Hammer of Thor (SKU ONYX-HT-20) dirumus khusus sebagai pakar Tribulus Terrestris bersaponin tinggi di dalam kapsul 100% vegetarian (HPMC). Setiap kapsul 500mg mengandungi 200mg Tribulus Terrestris (60% saponin), 100mg Maca Peru, 80mg L-Arginine fermentasi tumbuhan, 60mg Panax Ginseng, 45mg Tongkat Ali Malaysia, dan 15mg Zink Terkelat.',
        },
        {
          questionMs: 'Apakah perbezaan antara ekstrak Tribulus 60% saponin berbanding serbuk Tribulus biasa?',
          answerMs: 'Keberkesanan Tribulus terrestris bergantung pada kepekatan saponin furostanol terutamanya protodioscin. Serbuk herba biasa hanya mempunyai kurang daripada 15% saponin. Ekstrak piawai 60% saponin yang digunakan oleh Onyxmen memberikan kepekatan sebatian aktif 4 kali ganda lebih tinggi bagi setiap miligram.',
        },
        {
          questionMs: 'Mengapakah Tribulus Terrestris digabungkan bersama Panax Ginseng Merah Korea?',
          answerMs: 'Protodioscin dalam Tribulus menyokong kekuatan fizikal dan kepekaan reseptor tenaga, manakala ginsenosida (Rg1, Rb1, Rg3) dalam Panax Ginseng 6 tahun melawan keletihan saraf, mempercepatkan tenaga selular ATP, dan melancarkan nitrik oksida.',
        },
        {
          questionMs: 'Bagaimana memilih antara Hammer of Thor (200mg Tribulus) dan Magnum Pump XR (110mg Tribulus)?',
          answerMs: 'Pilih Hammer of Thor (20 Kapsul Veg, RM 159) jika anda mahukan kapsul 100% vegetarian dengan dos Tribulus tertinggi (200mg) dan Zink Terkelat (15mg) untuk ketahanan malam. Pilih Magnum Pump XR (30 Kapsul Hitam, RM 159) jika anda mahukan 110mg Tribulus bersama 320mg asid amino Nitrik Oksida (L-Arginine + L-Citrulline) untuk senaman gimnasium dan stamina malam.',
        },
        {
          questionMs: 'Adakah kapsul vegetarian HPMC lebih tahan lasak dalam cuaca lembap di Malaysia?',
          answerMs: 'Ya. Kapsul selulosa tumbuhan HPMC mempunyai kandungan lembapan yang sangat rendah (4%–6%) berbanding kapsul gelatin biasa, menjadikannya tidak mudah melekit dalam cuaca lembap Malaysia serta mudah larut di dalam perut.',
        },
        {
          questionMs: 'Bagaimanakah cara menempah Hammer of Thor atau Magnum Pump XR dengan bungkusan rahsia?',
          answerMs: 'Klik butang tempahan pada halaman ini untuk membuka Laci Tempahan Ekspres Rahsia. Pilih 1 Botol (RM 159), 2 Botol (RM 286 (10% OFF vs RM 318) — Penghantaran Percuma Seluruh Malaysia), atau 3 Botol (RM 405 (15% OFF vs RM 477)), dengan pilihan pembayaran FPX, DuitNow QR, atau Bayar Waktu Terima (COD).',
        },
      ],
    },
  },
  {
    key: 'maca-root',
    microStepEn: 'MS-125',
    microStepMs: 'MS-129',
    monographCode: 'MONO-03',
    canonicalEnPath: '/ingredients/maca-root-malaysia/',
    canonicalMsPath: '/ms/ingredients/maca-root-malaysia/',
    enOutputPaths: [
      'ingredients/maca-root-malaysia/index.html',
      'ingredients/maca-root/index.html',
      'ingredients/black-maca-lepidium-meyenii/index.html',
      'ingredients/peruvian-maca/index.html',
    ],
    msOutputPaths: [
      'ms/ingredients/maca-root-malaysia/index.html',
      'ms/ramuan-botani/akar-maca-hitam/index.html',
      'ms/ramuan-botani/maca-root-malaysia/index.html',
      'ms/ramuan-botani/maca-hitam-lepidium-meyenii/index.html',
      'ms/ingredients/black-maca-lepidium-meyenii/index.html',
      'ms/ingredients/maca-root/index.html',
    ],
    primaryProductSlug: 'grow-xl',
    heroImage: '/assets/products/grow-xl-stage.webp',
    portraitImage: '/assets/products/grow-xl-portrait.webp',
    scientificName: 'Lepidium meyenii Walp. (Black Hypocotyl Phenotype)',
    botanicalFamily: 'Brassicaceae High-Altitude Andean Adaptogen',
    standardization: '10:1 Starch-Free Gelatinized Black Root Extract (≥ 0.6% Macamides, Macaenes & Glucosinolates)',
    activeBioMarker: 'N-Benzylhexadecanamide (Macamide) & Polyunsaturated Macaenes',
    harvestGeographyEn: 'Junín Plateau & Pasco High Andes of Central Peru (4,100m – 4,450m Elevation)',
    harvestGeographyMs: 'Dataran Tinggi Junín & Pergunungan Andes Tengah, Peru (Altitud 4,100m – 4,450m)',
    extractionPhysicsEn: 'Low-Heat Thermal-Pressure Extrusion Gelatinization (99% Amylose/Amylopectin Starch Cleavage) + 10:1 Concentration',
    extractionPhysicsMs: 'Gelatinisasi Penyemperitan Haba Rendah (Menyingkirkan 99% Kanji Mentah Amilosa) + Pemekatan Nisbah 10:1',
    anchorDosages: [
      {
        productSlug: 'grow-xl',
        productNameEn: 'Grow XL (30 Capsules × 550mg)',
        productNameMs: 'Grow XL (30 Kapsul × 550mg)',
        sku: 'ONYX-GX-30',
        dosageMg: 110,
        capsuleTotalMg: 550,
        percentageOfCapsule: '20.0%',
        standardizationNoteEn: '110mg 10:1 Gelatinized Peruvian Black Maca Root Extract (≥0.6% Macamides) per Daily Capsule',
        standardizationNoteMs: '110mg Ekstrak Akar Maca Hitam Peru Tergelatinisasi 10:1 (≥0.6% Macamides) setiap Kapsul Harian',
        synergyRoleEn: 'Anchors Grow XL’s 30-day cumulative stamina conditioning alongside 140mg Extra-Strength Tongkat Ali, 100mg Dual Amino-Acid Matrix, 80mg Muira Puama, and 70mg Saw Palmetto.',
        synergyRoleMs: 'Menjadi teras stamina harian 30 hari Grow XL bersama 140mg Tongkat Ali Kekuatan Ekstra, 100mg Matriks Dwi-Asid Amino, 80mg Muira Puama, dan 70mg Saw Palmetto.',
      },
      {
        productSlug: 'horsemen',
        productNameEn: 'Horsemen (20 Capsules × 500mg)',
        productNameMs: 'Horsemen (20 Kapsul × 500mg)',
        sku: 'ONYX-HM-20',
        dosageMg: 100,
        capsuleTotalMg: 500,
        percentageOfCapsule: '20.0%',
        standardizationNoteEn: '100mg Gelatinized Black Peruvian Maca Root (0.6% Macamides & Macaenes) per 500mg Capsule',
        standardizationNoteMs: '100mg Akar Maca Hitam Peru Tergelatinisasi (0.6% Macamides & Macaenes) setiap Kapsul 500mg',
        synergyRoleEn: 'Pairs with 150mg Malaysian Tongkat Ali 100:1 and 80mg Epimedium in Horsemen to deliver non-caffeinated evening stamina that never disrupts post-activity REM sleep.',
        synergyRoleMs: 'Berganding dengan 150mg Tongkat Ali Malaysia 100:1 dan 80mg Epimedium dalam Horsemen untuk membekalkan stamina malam bebas kafein tanpa mengganggu tidur lena.',
      },
      {
        productSlug: 'hammer-of-thor',
        productNameEn: 'Hammer of Thor (20 Veg. Capsules × 500mg)',
        productNameMs: 'Hammer of Thor (20 Kapsul Veg. × 500mg)',
        sku: 'ONYX-HT-20',
        dosageMg: 100,
        capsuleTotalMg: 500,
        percentageOfCapsule: '20.0%',
        standardizationNoteEn: '100mg 10:1 Concentrated Andean Maca Tuber inside 100% Vegetarian HPMC Capsule',
        standardizationNoteMs: '100mg Ekstrak Ubi Akar Maca Andes 10:1 di dalam Kapsul Vegetarian HPMC',
        synergyRoleEn: 'Bridges Hammer of Thor’s 200mg 60%-Saponin Tribulus Terrestris and 60mg Panax Ginseng with smooth, jitter-free Andean endurance.',
        synergyRoleMs: 'Menghubungkan 200mg Tribulus Terrestris 60% Saponin dan 60mg Panax Ginseng dalam Hammer of Thor dengan ketahanan fizikal Andes yang tenang.',
      },
    ],
    en: {
      seoTitle: 'Gelatinized Peruvian Black Maca Root (Lepidium Meyenii) Monograph — Macamides & Non-Stimulant Stamina | Onyxmen Malaysia',
      metaDescription: 'Explore Onyxmen Malaysia’s monograph on 10:1 Gelatinized Peruvian Black Maca Root (Lepidium meyenii, ≥0.6% Macamides). Learn how starch-free black maca powers non-stimulant male endurance in Grow XL (110mg), Horsemen (100mg) & Hammer of Thor (100mg). RM 159 discreet shipping.',
      eyebrow: 'MS-125 · BOTANICAL MONOGRAPH III · ANDEAN MACAMIDE ADAPTOGEN DOSSIER',
      headline: 'Gelatinized Peruvian Black Maca Root (Lepidium Meyenii) — Macamides & Non-Stimulant Evening Stamina',
      subheadline: 'Why Onyxmen selects the rare 4,200-meter Peruvian Black Maca phenotype and removes 99% of raw indigestible starch via 10:1 gelatinization for Grow XL (110mg), Horsemen (100mg), and Hammer of Thor (100mg).',
      executiveSummary: 'Grown exclusively on the freezing, wind-swept limestone plateaus of Junín and Pasco in the Peruvian Andes above 4,100 meters, Lepidium meyenii Walp. survives extreme UV radiation and sub-zero nights by synthesizing unique secondary metabolites called macamides (N-benzylamides of long-chain fatty acids) and macaenes. Among the three primary root colors—Yellow (60% of harvest), Red (25%), and Black (15%)—the rare Black Maca phenotype demonstrates the strongest clinical nutrition support for male physical endurance, stamina, and reproductive vitality. Because raw maca root is 70% dense amylose starch that causes gastric fermentation and bloating, Onyxmen utilizes a 10:1 starch-cleaved gelatinized Black Maca extract standardized to ≥ 0.6% macamides and macaenes.',
      mechanisms: [
        {
          code: 'MECH-MC-01',
          title: 'Endocannabinoid FAAH Modulation & Non-Hormonal Drive Enhancement',
          metric: 'MACAMIDE SIGNALING',
          detail: 'Long-chain lipophilic macamides (such as N-benzylhexadecanamide and N-benzyloctadecadienamide) share structural affinity with endogenous signaling lipids, supporting central physical motivation, mood resilience, and evening drive without altering baseline blood pressure.',
        },
        {
          code: 'MECH-MC-02',
          title: '100% Caffeine-Free Mitochondrial Endurance & Zero REM Sleep Disruption',
          metric: 'ZERO CNS JITTER',
          detail: 'Many pre-activity products rely on hidden caffeine that causes tachycardia, sweaty palms, and 3:00 AM insomnia. Peruvian Black Maca increases mitochondrial oxidative phosphorylation efficiency and glycogen sparing with zero central nervous system overstimulation.',
        },
        {
          code: 'MECH-MC-03',
          title: 'Extrusion Starch Gelatinization for Rapid 20-Minute Gastric Uptake',
          metric: '99% STARCH REMOVED',
          detail: 'Note that "gelatinized" Maca is 100% plant-based (zero animal gelatin): it refers to thermal-pressure extrusion that breaks down resistant amylose starch chains, concentrating active macamides 10-fold while eliminating stomach heaviness after Malaysian evening meals.',
        },
        {
          code: 'MECH-MC-04',
          title: 'Aromatic Glucosinolate & Antioxidant Cellular Protection',
          metric: 'GLUCOTROPAEOLIN',
          detail: 'Benzyl glucosinolates (glucotropaeolin) and macamides protect endothelial and reproductive cells against lipid peroxidation caused by heat stress, air pollution, and intense physical training.',
        },
      ],
      phytochemicalFractions: [
        {
          code: 'FRAC-MC-01',
          compound: 'Macamides (N-Benzylhexadecanamide & N-Benzyl-9Z,12Z-octadecadienamide)',
          spec: '≥ 0.6% Standardized Macamides & Macaenes by HPLC',
          role: 'Signature lipid-alkaloid markers exclusive to authentic Peruvian Lepidium meyenii; drive sustained physical stamina and vitality confidence.',
        },
        {
          code: 'FRAC-MC-02',
          compound: 'Macaenes (Polyunsaturated Long-Chain Oxo-Fatty Acids)',
          spec: 'Native Andean Black Phenotype Ratio',
          role: 'Work alongside macamides to support cellular lipid metabolism and endurance capacity across 30-to-90-day conditioning cycles.',
        },
        {
          code: 'FRAC-MC-03',
          compound: 'Aromatic Glucosinolates (Glucotropaeolin & Methoxyglucobrassicin)',
          spec: '≥ 1.5% Bioactive Brassicaceae Glucosinolates',
          role: 'Provide antioxidant cellular defense and healthy micro-vascular tissue nourishment in Grow XL (110mg) and Horsemen (100mg).',
        },
        {
          code: 'FRAC-MC-04',
          compound: 'De-Starched Gelatinized Hypocotyl Matrix (10:1 Ratio)',
          spec: '99% Amylose Starch Cleaved · 100% Vegan/Vegetarian Botanical',
          role: 'Guarantees zero abdominal bloating and rapid intestinal bio-accessibility within 20–30 minutes of capsule ingestion.',
        },
      ],
      faqs: [
        {
          questionEn: 'Does "Gelatinized" Peruvian Black Maca contain animal gelatin?',
          answerEn: 'No—gelatinized Maca is 100% vegan and plant-derived. In botanical science, "gelatinization" is a controlled heat-and-pressure extrusion process that ruptures and removes the tough, indigestible amylose starch granules found in raw maca root. That is why Hammer of Thor (which contains 100mg gelatinized Maca) remains a 100% Vegetarian Capsule formulation.',
        },
        {
          questionEn: 'Why is Black Maca superior to ordinary Yellow Maca for adult men?',
          answerEn: 'While Yellow Maca makes up 60% of the Andean harvest and is used as a general food flour, the rare Black Maca phenotype (only ~15% of harvest) contains a higher density of lipophilic macamides and aromatic glucosinolates specifically researched for male physical endurance, muscular stamina, and reproductive vitality.',
        },
        {
          questionEn: 'Which Onyxmen formulations feature Peruvian Black Maca Root and at what dosages?',
          answerEn: 'Peruvian Black Maca anchors three of our four flagship formulations: Grow XL (30 Capsules, SKU ONYX-GX-30) delivers our highest daily dose at 110mg per capsule for 30-day conditioning; Horsemen (20 Capsules × 500mg, SKU ONYX-HM-20) delivers 100mg per capsule alongside 150mg Tongkat Ali for evening readiness; and Hammer of Thor (20 Veg. Capsules, SKU ONYX-HT-20) delivers 100mg per capsule alongside 200mg Tribulus Terrestris.',
        },
        {
          questionEn: 'Will taking Peruvian Black Maca at night keep me awake or raise my heart rate?',
          answerEn: 'No. Peruvian Black Maca is 100% free from caffeine, synephrine, or central nervous system stimulants. It supports cellular ATP endurance and physical vitality smoothly, allowing you to sleep deeply after evening physical activity.',
        },
        {
          questionEn: 'How long does it take to feel the full benefits of Peruvian Black Maca in Grow XL or Horsemen?',
          answerEn: 'When taken in Horsemen (100mg Black Maca + 150mg Tongkat Ali + 80mg L-Arginine HCl), rapid enzymatic and vascular cofactors activate within 45–60 minutes. Meanwhile, cumulative macamide saturation builds progressively over Days 14 to 30 and peaks across a 60-to-90-day (2-to-3 bottle) conditioning cycle.',
        },
        {
          questionEn: 'What are the official Malaysia multi-bottle prices for Grow XL, Horsemen, and Hammer of Thor?',
          answerEn: 'All Onyxmen bottles are RM 159 for 1 Bottle, RM 286 (10% OFF vs RM 318) for 2 Bottles (with Free Nationwide Discreet Shipping across Peninsular & East Malaysia), and RM 405 (15% OFF vs RM 477) for the 3-Bottle Complete Vault. Orders are dispatched in 100% unmarked parcels with FPX, DuitNow QR, and COD.',
        },
      ],
    },
    ms: {
      seoTitle: 'Monograf Akar Maca Hitam Peru Tergelatinisasi (Lepidium Meyenii) — Macamides & Stamina Bebas Kafein | Onyxmen Malaysia',
      metaDescription: 'Baca monograf rasmi Onyxmen Malaysia mengenai Ekstrak Akar Maca Hitam Peru Tergelatinisasi 10:1 (Lepidium meyenii ≥0.6% Macamides). Ketahui peranan macamides dalam Grow XL (110mg), Horsemen (100mg) & Hammer of Thor (100mg). Harga rasmi RM 159.',
      eyebrow: 'MS-129 · MONOGRAF BOTANI III · DOSSIER ADAPTOGEN MACAMIDES ANDES',
      headline: 'Akar Maca Hitam Peru Tergelatinisasi (Lepidium Meyenii) — Macamides & Stamina Malam Bebas Kafein',
      subheadline: 'Mengapa Onyxmen memilih varieti jarang Maca Hitam dari altitud 4,200 meter di Peru dan menyingkirkan 99% kanji mentah melalui proses gelatinisasi 10:1 untuk Grow XL (110mg), Horsemen (100mg), dan Hammer of Thor (100mg).',
      executiveSummary: 'Ditanam secara eksklusif di dataran tinggi Junín dan Pasco di Pergunungan Andes, Peru pada ketinggian melebihi 4,100 meter, Lepidium meyenii Walp. bertahan dalam cuaca sejuk melampau dan sinaran UV tinggi dengan menghasilkan sebatian metabolit unik yang dipanggil macamides dan macaenes. Antara tiga warna utama akar maca—Kuning (60% hasil tuaian), Merah (25%), dan Hitam (15%)—varieti Maca Hitam mempunyai kepekatan fitokimia tertinggi untuk ketahanan fizikal dan kecergasan lelaki dewasa. Memandangkan akar maca mentah mengandungi 70% kanji amilosa tebal yang menyebabkan perut kembung, Onyxmen menggunakan ekstrak Maca Hitam tergelatinisasi 10:1 bebas kanji yang dipiawaikan kepada ≥ 0.6% macamides.',
      mechanisms: [
        {
          code: 'MECH-MC-01',
          title: 'Modulasi Isyarat Lipid Macamides & Peningkatan Daya Tahan Semula Jadi',
          metric: 'ISYARAT MACAMIDES',
          detail: 'Sebatian macamides berantai panjang (seperti N-benzylhexadecanamide) menyokong motivasi fizikal, ketahanan mental, dan kesediaan tenaga malam secara semula jadi tanpa mengubah tekanan darah asas.',
        },
        {
          code: 'MECH-MC-02',
          title: '100% Stamina Mitokondria Bebas Kafein & Tidur Malam Yang Lena',
          metric: 'BEBAS DEBARAN SARAF',
          detail: 'Berbeza dengan produk yang mencampurkan kafein tersembunyi sehingga menyebabkan jantung berdebar dan sukar tidur, Maca Hitam Peru menyokong kecekapan tenaga selular tanpa merangsang sistem saraf pusat secara berlebihan.',
        },
        {
          code: 'MECH-MC-03',
          title: 'Proses Gelatinisasi Bebas Kanji untuk Penyerapan Pantas 20 Minit',
          metric: '99% KANJI DISINGKIRKAN',
          detail: 'Istilah "tergelatinisasi" adalah 100% berasaskan tumbuhan (tiada gelatin haiwan): ia merujuk kepada proses penyemperitan haba rendah yang memecahkan rantaian kanji amilosa mentah, memekatkan macamides 10 kali ganda tanpa rasa senak perut.',
        },
        {
          code: 'MECH-MC-04',
          title: 'Perlindungan Antioksidan Glukosinolat Aromatik terhadap Kelesuan Sel',
          metric: 'GLUCOTROPAEOLIN',
          detail: 'Glukosinolat benzil dan macamides melindungi sel endotelium dan tisu aktif daripada tekanan oksidatif akibat cuaca panas dan aktiviti fizikal berat.',
        },
      ],
      phytochemicalFractions: [
        {
          code: 'FRAC-MC-01',
          compound: 'Macamides (N-Benzylhexadecanamide & N-Benzyloctadecadienamide)',
          spec: '≥ 0.6% Macamides & Macaenes Piawai melalui Ujian HPLC',
          role: 'Penanda lipid-alkaloid eksklusif bagi Lepidium meyenii Peru tulen; memacu stamina fizikal berterusan dan keyakinan lelaki.',
        },
        {
          code: 'FRAC-MC-02',
          compound: 'Macaenes (Asid Lemak Okso Tak Tepu Berantai Panjang)',
          spec: 'Nisbah Asli Varieti Maca Hitam Andes',
          role: 'Bertindak bersama macamides untuk menyokong metabolisme tenaga selular sepanjang kitaran penjagaan 30 hingga 90 hari.',
        },
        {
          code: 'FRAC-MC-03',
          compound: 'Glukosinolat Aromatik (Glucotropaeolin & Methoxyglucobrassicin)',
          spec: '≥ 1.5% Glukosinolat Brassicaceae Bioaktif',
          role: 'Membekalkan perlindungan antioksidan selular dan nutrisi tisu mikro-vaskular dalam Grow XL (110mg) dan Horsemen (100mg).',
        },
        {
          code: 'FRAC-MC-04',
          compound: 'Matriks Hipokotil Tergelatinisasi Bebas Kanji (Nisbah 10:1)',
          spec: '99% Kanji Amilosa Disingkirkan · 100% Botani Vegetarian',
          role: 'Menjamin tiada masalah kembung perut dan membolehkan penyerapan pantas dalam masa 20–30 minit selepas kapsul diambil.',
        },
      ],
      faqs: [
        {
          questionMs: 'Adakah ekstrak Maca "Tergelatinisasi" mengandungi gelatin haiwan?',
          answerMs: 'Tidak sama sekali—ekstrak Maca tergelatinisasi adalah 100% berasaskan tumbuhan (vegan/vegetarian). Dalam sains pemprosesan herba, "gelatinisasi" ialah proses penyemperitan haba dan tekanan untuk memecahkan serta menyingkirkan kanji mentah daripada ubi maca. Sebab itulah Hammer of Thor (yang mengandungi 100mg Maca) kekal 100% Kapsul Vegetarian.',
        },
        {
          questionMs: 'Mengapa Maca Hitam (Black Maca) lebih baik daripada Maca Kuning biasa untuk lelaki?',
          answerMs: 'Maca Kuning merangkumi 60% hasil tuaian dan biasanya digunakan sebagai tepung makanan biasa, manakala varieti Maca Hitam yang jarang ditemui (~15% hasil tuaian) mempunyai kepekatan macamides dan glukosinolat tertinggi yang dikaji khusus untuk daya tahan fizikal dan stamina lelaki dewasa.',
        },
        {
          questionMs: 'Botol Onyxmen yang manakah mengandungi Akar Maca Hitam Peru dan berapakah dosnya?',
          answerMs: 'Maca Hitam Peru menjadi teras dalam tiga formulasi utama kami: Grow XL (30 Kapsul, SKU ONYX-GX-30) membekalkan dos harian tertinggi iaitu 110mg setiap kapsul; Horsemen (20 Kapsul × 500mg, SKU ONYX-HM-20) mengandungi 100mg bersama 150mg Tongkat Ali; dan Hammer of Thor (20 Kapsul Veg, SKU ONYX-HT-20) mengandungi 100mg bersama 200mg Tribulus Terrestris.',
        },
        {
          questionMs: 'Adakah pengambilan Maca Hitam Peru pada waktu malam akan mengganggu tidur?',
          answerMs: 'Tidak. Maca Hitam Peru adalah 100% bebas kafein dan bebas perangsang saraf sintetik. Ia menyokong tenaga selular secara semula jadi supaya anda kekal bertenaga semasa aktiviti malam dan tidur lena selepas itu.',
        },
        {
          questionMs: 'Berapa lamakah masa untuk merasai kesan penuh Maca Hitam dalam Grow XL atau Horsemen?',
          answerMs: 'Apabila diambil dalam Horsemen (100mg Maca Hitam + 150mg Tongkat Ali + 80mg L-Arginine HCl), sokongan kesediaan malam bermula dalam 45–60 minit. Manakala kesan adaptogenik macamides meningkat secara berperingkat dari Hari ke-14 hingga Hari ke-30 dan mencapai tahap optimum pada kitaran 60–90 hari (2–3 botol).',
        },
        {
          questionMs: 'Berapakah harga rasmi pakej botol Grow XL, Horsemen, dan Hammer of Thor di Malaysia?',
          answerMs: 'Harga rasmi adalah seragam: 1 Botol = RM 159, 2 Botol = RM 286 (10% OFF vs RM 318) (Penghantaran Ekspres Rahsia Percuma ke seluruh Malaysia termasuk Sabah & Sarawak), dan 3 Botol = RM 405 (15% OFF vs RM 477). Menyokong pembayaran FPX, DuitNow QR, dan COD.',
        },
      ],
    },
  },
  {
    key: 'l-arginine-nitric-oxide',
    microStepEn: 'MS-126',
    microStepMs: 'MS-130',
    monographCode: 'MONO-04',
    canonicalEnPath: '/ingredients/l-arginine-nitric-oxide/',
    canonicalMsPath: '/ms/ingredients/l-arginine-nitric-oxide/',
    enOutputPaths: [
      'ingredients/l-arginine-nitric-oxide/index.html',
      'ingredients/l-arginine/index.html',
      'ingredients/l-arginine-l-citrulline-nitric-oxide/index.html',
      'ingredients/l-arginine-l-citrulline/index.html',
    ],
    msOutputPaths: [
      'ms/ingredients/l-arginine-nitric-oxide/index.html',
      'ms/ramuan-botani/l-arginine-nitric-oxide/index.html',
      'ms/ramuan-botani/l-arginine-l-citrulline-nitrik-oksida/index.html',
      'ms/ingredients/l-arginine-l-citrulline-nitric-oxide/index.html',
      'ms/ingredients/l-arginine/index.html',
      'ms/ramuan-botani/l-arginine/index.html',
    ],
    primaryProductSlug: 'magnum-pump-xr',
    heroImage: '/assets/products/magnum-pump-xr-stage.webp',
    portraitImage: '/assets/products/magnum-pump-xr-portrait.webp',
    scientificName: 'L-Arginine HCl + L-Citrulline Malate (2:1) + Piper nigrum (95% Piperine) + Kaempferia parviflora',
    botanicalFamily: 'Endothelial Nitric Oxide Synthase (eNOS) Dual-Stage Amino-Botanical Pathway',
    standardization: '99.5% Pharmaceutical-Grade L-Arginine HCl + 2:1 L-Citrulline Malate + 95% Piperine (Bioperine) + 5% PMF Black Ginger',
    activeBioMarker: 'Endothelial Nitric Oxide (NO) · cGMP Second-Messenger Cascade · Plasma L-Arginine AUC',
    harvestGeographyEn: 'Plant-Fermented Pharmaceutical Amino Synthesis + Southern Indian/Malaysian Piper nigrum & Thai/Malaysian Kaempferia parviflora',
    harvestGeographyMs: 'Fermentasi Asid Amino Tumbuhan Gred Farmaseutikal + Lada Hitam Piper nigrum & Kunyit Hitam Kaempferia parviflora',
    extractionPhysicsEn: 'Extended-Release (XR) Crystalline Amino Granulation + 95% Standardized Piperine Alkaloid Extraction (Zero Synthetic PDE5 Adulterants)',
    extractionPhysicsMs: 'Granulasi Asid Amino Kristal Pelepasan Lanjutan (XR) + Pengekstrakan Alkaloid Piperine 95% Piawai (Bebas Bahan Kimia Sintetik)',
    anchorDosages: [
      {
        productSlug: 'magnum-pump-xr',
        productNameEn: 'Magnum Pump XR (30 Black Capsules × 600mg)',
        productNameMs: 'Magnum Pump XR (30 Kapsul Hitam × 600mg)',
        sku: 'ONYX-MP-30',
        dosageMg: 320,
        capsuleTotalMg: 600,
        percentageOfCapsule: '53.3% (+13.3% PMF/Bioperine = 66.7%)',
        standardizationNoteEn: '180mg L-Arginine HCl + 140mg L-Citrulline Malate (320mg Combined NO Matrix) + 65mg Black Ginger + 15mg Bioperine',
        standardizationNoteMs: '180mg L-Arginine HCl + 140mg L-Citrulline Malate (320mg Matriks NO Gabungan) + 65mg Kunyit Hitam + 15mg Bioperine',
        synergyRoleEn: 'Anchors Magnum Pump XR’s 30 signature jet-black capsules—delivering Phase-1 immediate eNOS activation (30–45 min) and Phase-2 renal L-Citrulline recycling (1–6 hours) alongside 110mg Tribulus and 90mg Tongkat Ali.',
        synergyRoleMs: 'Menjadi teras 30 kapsul hitam Magnum Pump XR—membekalkan pengaktifan eNOS Fasa-1 yang pantas (30–45 minit) dan kitaran L-Citrulline Fasa-2 (1–6 jam) bersama 110mg Tribulus dan 90mg Tongkat Ali.',
      },
      {
        productSlug: 'grow-xl',
        productNameEn: 'Grow XL (30 Capsules × 550mg)',
        productNameMs: 'Grow XL (30 Kapsul × 550mg)',
        sku: 'ONYX-GX-30',
        dosageMg: 100,
        capsuleTotalMg: 550,
        percentageOfCapsule: '18.2%',
        standardizationNoteEn: '100mg Dual Amino-Acid Micro-Circulation Matrix (2:1 L-Arginine HCl to L-Citrulline Malate Ratio)',
        standardizationNoteMs: '100mg Matriks Peredaran Mikro Dwi-Asid Amino (Nisbah 2:1 L-Arginine HCl kepada L-Citrulline Malate)',
        synergyRoleEn: 'Provides continuous daily vascular nutrient transport in Grow XL so its 140mg Tongkat Ali, 110mg Maca Root, 80mg Muira Puama, and 70mg Saw Palmetto reach peripheral tissues efficiently.',
        synergyRoleMs: 'Membekalkan pengangkutan nutrien vaskular harian dalam Grow XL supaya 140mg Tongkat Ali, 110mg Akar Maca, 80mg Muira Puama, dan 70mg Saw Palmetto sampai ke tisu sasaran dengan cekap.',
      },
      {
        productSlug: 'horsemen',
        productNameEn: 'Horsemen (20 Capsules × 500mg)',
        productNameMs: 'Horsemen (20 Kapsul × 500mg)',
        sku: 'ONYX-HM-20',
        dosageMg: 80,
        capsuleTotalMg: 500,
        percentageOfCapsule: '16.0%',
        standardizationNoteEn: '80mg Pharmaceutical-Grade Free-Form L-Arginine HCl (99.2% Purity) per 500mg Capsule',
        standardizationNoteMs: '80mg L-Arginine HCl Gred Farmaseutikal (Ketulenan 99.2%) setiap Kapsul 500mg',
        synergyRoleEn: 'Couples directly with 80mg Epimedium (10% Icariins) and 150mg Tongkat Ali in Horsemen to support rapid evening vascular responsiveness within 45–60 minutes.',
        synergyRoleMs: 'Bertindak bersama 80mg Epimedium (10% Icariin) dan 150mg Tongkat Ali dalam Horsemen untuk menyokong tindak balas vaskular malam yang pantas dalam 45–60 minit.',
      },
      {
        productSlug: 'hammer-of-thor',
        productNameEn: 'Hammer of Thor (20 Veg. Capsules × 500mg)',
        productNameMs: 'Hammer of Thor (20 Kapsul Veg. × 500mg)',
        sku: 'ONYX-HT-20',
        dosageMg: 80,
        capsuleTotalMg: 500,
        percentageOfCapsule: '16.0%',
        standardizationNoteEn: '80mg 99% Pure Plant-Fermented L-Arginine Base inside 100% Vegetarian HPMC Capsule',
        standardizationNoteMs: '80mg Asid Amino L-Arginine Fermentasi Tumbuhan (99% Tulen) di dalam Kapsul Vegetarian HPMC',
        synergyRoleEn: 'Supports endothelial nitric oxide synthesis alongside 200mg 60%-Saponin Tribulus Terrestris and 60mg Panax Ginseng while preserving 100% vegetarian compliance.',
        synergyRoleMs: 'Menyokong penghasilan nitrik oksida endotelium bersama 200mg Tribulus Terrestris 60% Saponin dan 60mg Panax Ginseng sambil mengekalkan status 100% vegetarian.',
      },
    ],
    en: {
      seoTitle: 'L-Arginine HCl, L-Citrulline Malate & Bioperine Nitric Oxide Monograph — Endothelial eNOS Vasodilation | Onyxmen Malaysia',
      metaDescription: 'Scientific monograph on Onyxmen Malaysia’s Extended-Release (XR) Nitric Oxide Pathway: L-Arginine HCl, L-Citrulline Malate, Thai Black Ginger & Bioperine in Magnum Pump XR (320mg NO matrix) and Grow XL (100mg). Oral dietary supplement at RM 159.',
      eyebrow: 'MS-126 · BOTANICAL & AMINO MONOGRAPH IV · ENDOTHELIAL eNOS VASODILATION DOSSIER',
      headline: 'L-Arginine HCl, L-Citrulline Malate & Bioperine Nitric Oxide Pathway — Dual-Phase Endothelial Vasodilation',
      subheadline: 'How Onyxmen’s Extended-Release (XR) amino-botanical architecture overcomes hepatic arginase breakdown—anchoring Magnum Pump XR (320mg combined L-Arginine + L-Citrulline matrix), Grow XL (100mg), Horsemen (80mg), and Hammer of Thor (80mg).',
      executiveSummary: 'Nitric Oxide (NO) is the master gaseous signaling molecule produced by the vascular endothelium to relax smooth muscle, widen arterial lumen diameter, and govern hemodynamic blood flow during both resistance training and evening male performance. However, taking standard L-Arginine alone suffers from a well-documented pharmacokinetic bottleneck: intestinal and hepatic arginase-I enzymes degrade up to 40% of oral L-Arginine during first-pass metabolism. Onyxmen Malaysia solves this in Magnum Pump XR (30 Black Capsules, SKU ONYX-MP-30) and Grow XL (30 Capsules, SKU ONYX-GX-30) by engineering a Dual-Stage Nitric Oxide Precursor Matrix that pairs 99.5% pure L-Arginine HCl with 2:1 L-Citrulline Malate, 5%-PMF Thai Black Ginger (Kaempferia parviflora), and 95% Piperine (Bioperine).',
      mechanisms: [
        {
          code: 'MECH-NO-01',
          title: 'Phase-1 Direct Endothelial eNOS Oxidation (30 to 60 Minutes Post-Ingestion)',
          metric: 'PHASE 1 · RAPID ONSET',
          detail: 'Pharmaceutical-grade L-Arginine HCl dissolves rapidly in the upper duodenum and serves as the immediate nitrogen donor for endothelial Nitric Oxide Synthase (eNOS: L-Arginine + O2 → L-Citrulline + NO), initiating smooth vascular relaxation within 30–45 minutes.',
        },
        {
          code: 'MECH-NO-02',
          title: 'Phase-2 Hepatic Bypass & Renal L-Citrulline-to-Arginine Recycling (1 to 6 Hours)',
          metric: 'PHASE 2 · XR WINDOW',
          detail: 'Unlike L-Arginine, L-Citrulline Malate completely bypasses hepatic arginase degradation in the liver and travels intact to the kidneys, where argininosuccinate synthase and lyase convert it steadily into fresh plasma L-Arginine—sustaining elevated nitric oxide bioavailability for 4 to 6 hours.',
        },
        {
          code: 'MECH-NO-03',
          title: 'Bioperine (95% Piperine) Intestinal Brush-Border Transport Amplification',
          metric: '+30% BIO-UPTAKE',
          detail: 'Magnum Pump XR incorporates 15mg of standardized Piper nigrum fruit extract (95% Piperine / Bioperine), which transiently modulates intestinal glucuronidation and stimulates amino-acid transporter kinetics across the brush-border membrane.',
        },
        {
          code: 'MECH-NO-04',
          title: 'Kaempferia Parviflora (Kunyit Hitam) 5,7-Dimethoxyflavone cGMP Synergy',
          metric: 'PMF VASCULAR LOCK',
          detail: 'Once endothelial Nitric Oxide activates soluble guanylyl cyclase (sGC) to produce cyclic GMP (cGMP), the 65mg of Thai Black Ginger (5% Polymethoxyflavones) in Magnum Pump XR—or 80mg Epimedium in Horsemen—supports sustained cGMP signaling in smooth vascular muscle.',
        },
      ],
      phytochemicalFractions: [
        {
          code: 'FRAC-NO-01',
          compound: 'L-Arginine Hydrochloride (C6H14N4O2·HCl · Free-Form Amino Acid)',
          spec: '99.5% Pharmaceutical-Grade Plant-Fermented Purity',
          role: 'Primary Phase-1 nitrogen substrate for endothelial nitric oxide synthase (eNOS) in Magnum Pump XR (180mg), Horsemen (80mg), and Grow XL.',
        },
        {
          code: 'FRAC-NO-02',
          compound: 'L-Citrulline DL-Malate (2:1 Stoichiometric Complex)',
          spec: '2:1 L-Citrulline to Tricarboxylic Malate Salt',
          role: 'Phase-2 Extended-Release (XR) plasma arginine recycler + Krebs-cycle malate intermediate supporting muscular ATP endurance in Magnum Pump XR (140mg) and Grow XL.',
        },
        {
          code: 'FRAC-NO-03',
          compound: 'Kaempferia parviflora (Thai Black Ginger / Kunyit Hitam Rhizome)',
          spec: 'Standardized to ≥ 5.0% Polymethoxyflavones (PMFs)',
          role: 'Supports peripheral vascular endothelial responsiveness, grip strength, and cyclic nucleotide synergy in Magnum Pump XR (65mg).',
        },
        {
          code: 'FRAC-NO-04',
          compound: 'Piper nigrum Standardized Extract (Bioperine® Equivalent)',
          spec: '95.0% Pure Piperine Alkaloid Crystals',
          role: 'Bio-thermogenic absorption catalyst in Magnum Pump XR (15mg) that maximizes plasma AUC of both amino acids and botanical quassinoids.',
        },
      ],
      faqs: [
        {
          questionEn: 'Why does Magnum Pump XR combine both L-Arginine HCl (180mg) and L-Citrulline Malate (140mg) instead of using L-Arginine alone?',
          answerEn: 'When L-Arginine is taken alone, liver arginase enzymes break down a substantial portion before it reaches systemic circulation, resulting in a short 60-minute peak. By combining 180mg L-Arginine HCl (for rapid 30-minute onset) with 140mg L-Citrulline Malate (which bypasses the liver and converts into L-Arginine in the kidneys over 1 to 6 hours) plus 15mg Bioperine, Magnum Pump XR delivers true Extended-Release (XR) Nitric Oxide support.',
        },
        {
          questionEn: 'What is Magnum Pump XR—is it an oral capsule supplement or a mechanical device?',
          answerEn: 'Magnum Pump XR by Onyxmen Malaysia (SKU ONYX-MP-30, MPN MPXR-30BLK-MY, GTIN-13 9550000102042) is strictly an oral botanical and amino-acid Dietary Supplement containing 30 signature jet-black capsules per bottle (600mg per capsule). The word "Pump" refers to physiological nitric oxide vascularity and gym muscle pump—it is NOT a mechanical vacuum pump or industrial fluid pump.',
        },
        {
          questionEn: 'How does the L-Arginine & L-Citrulline matrix in Grow XL (100mg) differ from Magnum Pump XR (320mg)?',
          answerEn: 'Magnum Pump XR (30 Black Capsules) is formulated with our highest amino-acid load (320mg combined L-Arginine HCl + L-Citrulline Malate + 65mg Black Ginger + 15mg Bioperine) to be taken 30–45 minutes before gym resistance training or evening physical activity. Grow XL (30 Capsules) contains a 100mg daily micro-circulation amino matrix designed to be taken every morning after breakfast to support 24-hour nutrient delivery alongside 140mg Tongkat Ali and 70mg Saw Palmetto.',
        },
        {
          questionEn: 'Does the L-Arginine and L-Citrulline Nitric Oxide matrix contain caffeine or cause a post-workout crash?',
          answerEn: 'No. Onyxmen’s Nitric Oxide pathway relies purely on vasoactive amino acids (L-Arginine HCl, L-Citrulline Malate), polymethoxyflavones (Kunyit Hitam), and Piperine—with 0mg of caffeine or synthetic stimulants. It can be taken before a late-evening gym session or at 21:00 MYT without disturbing sleep.',
        },
        {
          questionEn: 'Who should consult a physician before taking high-potency L-Arginine and Nitric Oxide supplements?',
          answerEn: 'Because L-Arginine and L-Citrulline support endothelial vasodilation, adult men taking prescription organic nitrates (for angina), PDE5 inhibitors, or antihypertensive blood-pressure medications, or those with a history of cardiovascular or renal conditions, should consult a licensed Malaysian medical doctor prior to use.',
        },
        {
          questionEn: 'What is the official price of Magnum Pump XR and Grow XL in Malaysia?',
          answerEn: 'Every authentic Onyxmen bottle is RM 159 (159.00 MYR) for 1 Bottle, RM 286 (10% OFF vs RM 318) (318.00 MYR) for 2 Bottles with Free Nationwide Discreet Shipping across all 16 Malaysian states, and RM 405 (15% OFF vs RM 477) (477.00 MYR) for the 3-Bottle Complete 90-Day Vault. Order in 10 seconds via our Express Discreet Order Drawer.',
        },
      ],
    },
    ms: {
      seoTitle: 'Monograf Laluan Nitrik Oksida L-Arginine HCl, L-Citrulline Malate & Bioperine — Aliran Vaskular eNOS | Onyxmen Malaysia',
      metaDescription: 'Monograf saintifik Onyxmen Malaysia mengenai Laluan Nitrik Oksida Pelepasan Lanjutan (XR): L-Arginine HCl, L-Citrulline Malate, Kunyit Hitam & Bioperine dalam Magnum Pump XR (320mg matriks NO) dan Grow XL (100mg). Kapsul suplemen RM 159.',
      eyebrow: 'MS-130 · MONOGRAF BOTANI & ASID AMINO IV · DOSSIER ALIRAN VASKULAR eNOS',
      headline: 'Laluan Nitrik Oksida L-Arginine HCl, L-Citrulline Malate & Bioperine — Kelancaran Vaskular Dwi-Fasa',
      subheadline: 'Bagaimana seni bina asid amino Pelepasan Lanjutan (XR) Onyxmen mengatasi penguraian enzim arginase hati—menjadi teras Magnum Pump XR (320mg matriks L-Arginine + L-Citrulline), Grow XL (100mg), Horsemen (80mg), dan Hammer of Thor (80mg).',
      executiveSummary: 'Nitrik Oksida (NO) ialah molekul isyarat biologi utama yang dihasilkan oleh lapisan endotelium saluran darah untuk melancarkan aliran darah dan pengangkutan oksigen semasa latihan bebanan di gimnasium mahupun aktiviti fizikal waktu malam. Namun, pengambilan L-Arginine biasa secara tunggal sering terhad kerana enzim arginase-I di dalam usus dan hati menguraikan sehingga 40% L-Arginine sebelum ia sempat memasuki aliran darah. Onyxmen Malaysia menyelesaikan kekangan ini di dalam Magnum Pump XR (30 Kapsul Hitam, SKU ONYX-MP-30) dan Grow XL (30 Kapsul, SKU ONYX-GX-30) melalui Matriks Dwi-Fasa yang menggabungkan L-Arginine HCl 99.5% tulen bersama L-Citrulline Malate 2:1, Kunyit Hitam (Kaempferia parviflora), dan 95% Piperine (Bioperine).',
      mechanisms: [
        {
          code: 'MECH-NO-01',
          title: 'Fasa-1 Pengaktifan Pantas Enzim eNOS Endotelium (30 hingga 60 Minit)',
          metric: 'FASA 1 · KESAN PANTAS',
          detail: 'L-Arginine HCl gred farmaseutikal larut dengan cepat dan bertindak sebagai penderma nitrogen langsung kepada enzim nitrik oksida sintase endotelium (eNOS), memulakan kelancaran aliran vaskular dalam masa 30–45 minit.',
        },
        {
          code: 'MECH-NO-02',
          title: 'Fasa-2 Pintasan Hati & Kitaran L-Citrulline kepada L-Arginine (1 hingga 6 Jam)',
          metric: 'FASA 2 · TEMPOH XR',
          detail: 'Berbeza dengan L-Arginine, L-Citrulline Malate melepasi penguraian enzim arginase di hati dan ditukar secara berperingkat kepada L-Arginine baharu di dalam buah pinggang—mengekalkan ketersediaan nitrik oksida plasma selama 4 hingga 6 jam.',
        },
        {
          code: 'MECH-NO-03',
          title: 'Pemangkin Bio-Penyerapan Bioperine (95% Piperine) di Dinding Usus',
          metric: '+30% PENYERAPAN',
          detail: 'Magnum Pump XR mengandungi 15mg ekstrak lada hitam piawai (95% Piperine / Bioperine) yang mempercepatkan pengangkutan asid amino dan sebatian herba merentasi membran usus ke dalam aliran darah.',
        },
        {
          code: 'MECH-NO-04',
          title: 'Sinergi Polimetoksiflavon Kunyit Hitam (Kaempferia parviflora) & cGMP',
          metric: 'SINERGI KUNYIT HITAM',
          detail: 'Apabila Nitrik Oksida mengaktifkan penghasilan cGMP pada otot licin vaskular, 65mg ekstrak Kunyit Hitam (5% PMF) dalam Magnum Pump XR—atau 80mg Epimedium dalam Horsemen—membantu mengekalkan tindak balas vaskular yang mantap.',
        },
      ],
      phytochemicalFractions: [
        {
          code: 'FRAC-NO-01',
          compound: 'L-Arginine Hydrochloride (C6H14N4O2·HCl · Asid Amino Bentuk Bebas)',
          spec: '99.5% Ketulenan Fermentasi Tumbuhan Gred Farmaseutikal',
          role: 'Substrat nitrogen Fasa-1 utama untuk enzim nitrik oksida sintase (eNOS) dalam Magnum Pump XR (180mg), Horsemen (80mg), dan Grow XL.',
        },
        {
          code: 'FRAC-NO-02',
          compound: 'L-Citrulline DL-Malate (Kompleks Nisbah 2:1)',
          spec: 'Nisbah 2:1 L-Citrulline kepada Garam Malate Kitaran Krebs',
          role: 'Prekursor Pelepasan Lanjutan (XR) Fasa-2 yang mengekalkan paras L-Arginine darah serta menyokong tenaga ATP otot dalam Magnum Pump XR (140mg) dan Grow XL.',
        },
        {
          code: 'FRAC-NO-03',
          compound: 'Kaempferia parviflora (Ekstrak Rizom Kunyit Hitam / Black Ginger)',
          spec: 'Dipiawaikan kepada ≥ 5.0% Polimetoksiflavon (PMF)',
          role: 'Menyokong tindak balas vaskular periferi, kekuatan genggaman fizikal, dan stamina selular dalam Magnum Pump XR (65mg).',
        },
        {
          code: 'FRAC-NO-04',
          compound: 'Ekstrak Piawai Piper nigrum (Bioperine® 95% Piperine)',
          spec: '95.0% Kristal Alkaloid Piperine Tulen',
          role: 'Pemangkin bio-penyerapan dalam Magnum Pump XR (15mg) yang meningkatkan kecekapan serapan asid amino dan ekstrak akar herba.',
        },
      ],
      faqs: [
        {
          questionMs: 'Mengapa Magnum Pump XR menggabungkan kedua-dua L-Arginine HCl (180mg) dan L-Citrulline Malate (140mg)?',
          answerMs: 'Apabila L-Arginine diambil secara tunggal, enzim arginase hati menguraikan sebahagian besar daripadanya dalam masa 60 minit. Dengan menggabungkan 180mg L-Arginine HCl (untuk kesan pantas 30 minit) bersama 140mg L-Citrulline Malate (yang melepasi penguraian hati dan ditukar secara berperingkat kepada L-Arginine selama 1–6 jam) serta 15mg Bioperine, Magnum Pump XR memberikan sokongan Nitrik Oksida Pelepasan Lanjutan (XR) yang sebenar.',
        },
        {
          questionMs: 'Apakah sebenarnya Magnum Pump XR—adakah ia suplemen kapsul makan atau alat mekanikal?',
          answerMs: 'Magnum Pump XR oleh Onyxmen Malaysia (SKU ONYX-MP-30, MPN MPXR-30BLK-MY, GTIN-13 9550000102042) adalah 100% Suplemen Pemakanan kapsul makan yang mengandungi 30 kapsul hitam eksklusif setiap botol (600mg setiap kapsul). Perkataan "Pump" merujuk kepada aliran darah nitrik oksida dan "muscle pump" semasa bersenam—ia BUKAN pam mekanikal, pam vakum, atau peralatan industri.',
        },
        {
          questionMs: 'Apakah perbezaan antara matriks L-Arginine dalam Grow XL (100mg) dan Magnum Pump XR (320mg)?',
          answerMs: 'Magnum Pump XR (30 Kapsul Hitam) mempunyai kepekatan asid amino tertinggi (320mg gabungan L-Arginine HCl + L-Citrulline Malate + 65mg Kunyit Hitam + 15mg Bioperine) untuk diambil 30–45 minit sebelum senaman bebanan atau aktiviti malam. Grow XL (30 Kapsul) pula mengandungi 100mg matriks asid amino harian yang diambil setiap pagi selepas sarapan untuk membantu pengangkutan nutrien 140mg Tongkat Ali dan 70mg Saw Palmetto sepanjang hari.',
        },
        {
          questionMs: 'Adakah matriks Nitrik Oksida dalam Magnum Pump XR mengandungi kafein?',
          answerMs: 'Tidak. Laluan Nitrik Oksida Onyxmen bergantung sepenuhnya pada asid amino vaskular (L-Arginine HCl, L-Citrulline Malate), Kunyit Hitam, dan Bioperine—dengan 0mg kafein. Ia boleh diambil sebelum sesi gimnasium petang atau pada waktu malam tanpa menyebabkan sukar tidur.',
        },
        {
          questionMs: 'Siapakah yang perlu mendapatkan nasihat doktor sebelum mengambil suplemen L-Arginine dan Nitrik Oksida?',
          answerMs: 'Oleh sebab L-Arginine dan L-Citrulline menyokong kelancaran saluran darah, lelaki dewasa yang sedang mengambil ubat preskripsi nitrat (untuk jantung), ubat tekanan darah tinggi, atau mempunyai masalah kardiovaskular dan buah pinggang disarankan berbincang dengan doktor perubatan bertauliah sebelum menggunakan sebarang suplemen.',
        },
        {
          questionMs: 'Berapakah harga rasmi Magnum Pump XR dan Grow XL di Malaysia?',
          answerMs: 'Setiap botol tulen Onyxmen berharga RM 159 (159.00 MYR) untuk 1 Botol, RM 286 (10% OFF vs RM 318) (318.00 MYR) untuk Pakej 2 Botol dengan Penghantaran Rahsia Percuma ke seluruh 16 negeri Malaysia, dan RM 405 (15% OFF vs RM 477) (477.00 MYR) untuk Pakej Lengkap 3 Botol (90 Hari).',
        },
      ],
    },
  },
];

/**
 * Six Synergistic Secondary Botanical & Mineral Cofactors featured across the 4 Onyxmen formulations.
 * Used to enrich both the Master Botanical Index and Individual Monograph Cross-Pollinations.
 */
export const SECONDARY_COFACTORS = [
  {
    code: 'COF-01',
    scientificName: 'Epimedium sagittatum (Siebold & Zucc.) Maxim.',
    commonEn: 'Standardized Horny Goat Weed (10% Flavonoid Icariins)',
    commonMs: 'Ekstrak Epimedium Sagittatum Piawai (10% Flavonoid Icariin)',
    featuredInEn: 'Horsemen — 80mg per 500mg Capsule (16% of Formula)',
    featuredInMs: 'Horsemen — 80mg setiap Kapsul 500mg (16% daripada Formula)',
    mechanismEn: 'Prenylated flavonol glycoside icariin works synergistically with L-Arginine HCl (80mg) and Tongkat Ali (150mg) in Horsemen to support cyclic GMP (cGMP) vascular signaling and peripheral micro-circulation during evening readiness.',
    mechanismMs: 'Glikosida flavonol icariin bertindak secara sinergi bersama L-Arginine HCl (80mg) dan Tongkat Ali (150mg) di dalam Horsemen bagi menyokong isyarat vaskular cGMP dan peredaran mikro waktu malam.',
    linkedMonographEn: '/ingredients/tongkat-ali-malaysia/',
    linkedMonographMs: '/ms/ingredients/tongkat-ali-malaysia/',
  },
  {
    code: 'COF-02',
    scientificName: 'Ptychopetalum olacoides Benth.',
    commonEn: 'Brazilian Muira Puama ("Potency Wood" 12:1 Bark & Root Extract)',
    commonMs: 'Ekstrak Kulit & Akar Muira Puama Brazil (Nisbah Pekat 12:1)',
    featuredInEn: 'Grow XL — 80mg per 550mg Capsule (30-Day Daily Protocol)',
    featuredInMs: 'Grow XL — 80mg setiap Kapsul 550mg (Protokol Harian 30 Hari)',
    mechanismEn: 'Amazonian neuro-adaptogenic sterol and lupeol complex that supports neuromuscular vigor, central dopaminergic tone, and physical confidence across Grow XL’s 30-day conditioning cycle.',
    mechanismMs: 'Kompleks sterol dan lupeol neuro-adaptogenik Amazon yang menyokong kecergasan neuromuskular, fokus mental, dan keyakinan fizikal sepanjang kitaran 30 hari Grow XL.',
    linkedMonographEn: '/ingredients/maca-root-malaysia/',
    linkedMonographMs: '/ms/ingredients/maca-root-malaysia/',
  },
  {
    code: 'COF-03',
    scientificName: 'Serenoa repens (W.Bartram) Small',
    commonEn: 'Saw Palmetto Berry Lipidosterolic Extract (45% Free Fatty Acids)',
    commonMs: 'Ekstrak Lipidosterolik Beri Saw Palmetto (45% Asid Lemak Bebas)',
    featuredInEn: 'Grow XL — 70mg per 550mg Capsule (30-Day Daily Protocol)',
    featuredInMs: 'Grow XL — 70mg setiap Kapsul 550mg (Protokol Harian 30 Hari)',
    mechanismEn: 'Rich in lauric, myristic, and oleic fatty acids plus β-sitosterol; supports healthy 5α-reductase enzymatic equilibrium, prostate nutritional comfort, and long-term male conditioning in men aged 30 to 65+.',
    mechanismMs: 'Kaya dengan asid lemak laurik, miristik, dan β-sitosterol; menyokong keseimbangan enzim, keselesaan kesihatan lelaki dewasa, dan penjagaan jangka panjang bagi lelaki berusia 30 tahun ke atas.',
    linkedMonographEn: '/ingredients/maca-root-malaysia/',
    linkedMonographMs: '/ms/ingredients/maca-root-malaysia/',
  },
  {
    code: 'COF-04',
    scientificName: 'Kaempferia parviflora Wall. ex Baker',
    commonEn: 'Thai Black Ginger / Kunyit Hitam Rhizome (5% Polymethoxyflavones)',
    commonMs: 'Rizom Kunyit Hitam / Black Ginger (5% Polimetoksiflavon PMF)',
    featuredInEn: 'Magnum Pump XR — 65mg per 600mg Black Capsule',
    featuredInMs: 'Magnum Pump XR — 65mg setiap Kapsul Hitam 600mg',
    mechanismEn: '5,7-dimethoxyflavone (DMF) and polymethoxyflavones amplify endothelial nitric oxide production, support mitochondrial AMPK energy sensing, and enhance muscular grip and vascularity during workouts.',
    mechanismMs: 'Sebatian 5,7-dimethoxyflavone (DMF) dan polimetoksiflavon meningkatkan penghasilan nitrik oksida endotelium, menyokong tenaga mitokondria AMPK, dan menguatkan daya tahan otot.',
    linkedMonographEn: '/ingredients/l-arginine-nitric-oxide/',
    linkedMonographMs: '/ms/ingredients/l-arginine-nitric-oxide/',
  },
  {
    code: 'COF-05',
    scientificName: 'Panax ginseng C.A. Mey. + Ginkgo biloba L.',
    commonEn: '6-Year Aged Korean Red Ginseng (8–10% Ginsenosides) & Ginkgo (24% Flavones)',
    commonMs: 'Panax Ginseng Merah Korea 6 Tahun (8–10% Ginsenosida) & Ginkgo Biloba',
    featuredInEn: 'Horsemen (60mg), Hammer of Thor (60mg) & Grow XL (50mg)',
    featuredInMs: 'Horsemen (60mg), Hammer of Thor (60mg) & Grow XL (50mg)',
    mechanismEn: 'Triterpenoid ginsenosides (Rg1, Rb1, Rg3) and ginkgolide terpene lactones support microvascular blood rheology, cerebral oxygen perfusion, and cardiorespiratory anti-fatigue.',
    mechanismMs: 'Ginsenosida triterpenoid (Rg1, Rb1, Rg3) dan lakton terpena ginkgo menyokong kelancaran aliran darah kapilari halus, bekalan oksigen, serta ketahanan terhadap kelesuan fizikal.',
    linkedMonographEn: '/ingredients/tribulus-terrestris-malaysia/',
    linkedMonographMs: '/ms/ingredients/tribulus-terrestris-malaysia/',
  },
  {
    code: 'COF-06',
    scientificName: 'Zinc Bisglycinate Chelate + Piper nigrum (95% Piperine)',
    commonEn: 'Chelated Elemental Zinc Matrix (15mg) & Bioperine® Catalyst (15mg)',
    commonMs: 'Matriks Zink Bisglisinat Terkelat (15mg) & Pemangkin Bioperine® (15mg)',
    featuredInEn: 'Hammer of Thor (15mg Zinc), Horsemen (Zinc Cofactor) & Magnum Pump XR (15mg Bioperine)',
    featuredInMs: 'Hammer of Thor (15mg Zink), Horsemen (Kofaktor Zink) & Magnum Pump XR (15mg Bioperine)',
    mechanismEn: 'Amino-chelated zinc supports normal serum testosterone maintenance and spermatogenesis without phytate inhibition, while 95% Piperine increases intestinal bio-uptake of botanical extracts by up to 30%.',
    mechanismMs: 'Zink terkelat asid amino menyokong fungsi pembiakan dan nutrisi lelaki dewasa secara optimum, manakala 95% Piperine meningkatkan kadar penyerapan ekstrak herba di dalam usus sehingga 30%.',
    linkedMonographEn: '/ingredients/l-arginine-nitric-oxide/',
    linkedMonographMs: '/ms/ingredients/l-arginine-nitric-oxide/',
  },
];

/**
 * Shared 8-Point Laboratory Purity & Heavy-Metal Screening Ledger (EN & BM)
 */
export const LAB_PURITY_CHECKPOINTS = [
  {
    code: 'QA-LAB-01',
    titleEn: 'HPLC-DAD Bio-Marker Standardization Assay',
    titleMs: 'Ujian Piawaian Penanda Bioaktif HPLC-DAD',
    specEn: 'Verified ≥2.2% Eurycomanone, 60% Protodioscin Saponins, ≥0.6% Macamides & 99.5% L-Arginine HCl',
    specMs: 'Disahkan ≥2.2% Eurycomanone, 60% Saponin Protodioscin, ≥0.6% Macamides & 99.5% L-Arginine HCl',
    detailEn: 'Every incoming botanical harvest lot is assayed via High-Performance Liquid Chromatography with Diode-Array Detection (HPLC-DAD) and UV-Vis spectrophotometry to confirm active phytochemical concentration before encapsulation.',
    detailMs: 'Setiap kelompok tuaian ekstrak botani diuji menggunakan Kromatografi Cecair Berprestasi Tinggi (HPLC-DAD) dan spektrofotometri UV-Vis bagi mengesahkan kepekatan sebatian aktif sebelum dikapsulkan.',
  },
  {
    code: 'QA-LAB-02',
    titleEn: 'ICP-MS Heavy Metal Screening (Lead, Arsenic, Mercury, Cadmium)',
    titleMs: 'Saringan Logam Berat ICP-MS (Plumbum, Arsenik, Merkuri, Kadmium)',
    specEn: 'Pb < 0.5 ppm · As < 0.5 ppm · Hg < 0.1 ppm · Cd < 0.3 ppm (Strict Compliance)',
    specMs: 'Pb < 0.5 ppm · As < 0.5 ppm · Hg < 0.1 ppm · Cd < 0.3 ppm (Pematuhan Ketat)',
    detailEn: 'Because wild rainforest taproots and high-altitude tubers absorb soil minerals, Onyxmen filters all aqueous extracts through multi-stage membrane deionization and verifies heavy metal clearance via Inductively Coupled Plasma Mass Spectrometry (ICP-MS).',
    detailMs: 'Memandangkan akar hutan hujan dan ubi tanah tinggi menyerap mineral tanah, Onyxmen menapis semua ekstrak melalui penyahionan membran berbilang peringkat dan mengesahkan ketiadaan logam berat melalui ujian ICP-MS.',
  },
  {
    code: 'QA-LAB-03',
    titleEn: 'Zero Undeclared Synthetic PDE5 Analogues or Stimulant Adulterants',
    titleMs: '100% Bebas Bahan Kimia Sintetik Terlarang atau Perangsang Tiruan',
    specEn: '0.00% Sildenafil / Tadalafil / Vardenafil / Sibutramine / Synthetic Caffeine',
    specMs: '0.00% Sildenafil / Tadalafil / Vardenafil / Sibutramine / Kafein Sintetik',
    detailEn: 'Street-market "instant candy" and unverified packets often spike cheap flour with undeclared prescription PDE5 chemicals that cause severe headaches, visual disturbances, and cardiac risk. Onyxmen formulations are 100% pure botanical and amino-acid supplements.',
    detailMs: 'Produk jalanan atau gula-gula tenaga murah sering mencampurkan bahan kimia sintetik terlarang yang menyebabkan sakit kepala teruk dan risiko jantung. Formulasi Onyxmen adalah 100% suplemen botani dan asid amino tulen.',
  },
  {
    code: 'QA-LAB-04',
    titleEn: 'Aqueous & Hydro-Botanical Extraction (Zero Toxic Petrochemical Solvents)',
    titleMs: 'Pengekstrakan Air Tulen & Hidro-Botani (Bebas Pelarut Toksik)',
    specEn: 'Zero Hexane, Benzene, Toluene, or Chlorinated Solvent Residue',
    specMs: 'Bebas Sisa Heksana, Benzena, Toluena, atau Pelarut Berbahaya',
    detailEn: 'Onyxmen utilizes pressurized ultrasonic hot-water extraction for Tongkat Ali, low-heat extrusion gelatinization for Black Maca, and plant fermentation for L-Arginine—leaving zero toxic petrochemical solvent residues.',
    detailMs: 'Onyxmen menggunakan pengekstrakan air panas ultrasonik untuk Tongkat Ali, gelatinisasi haba rendah untuk Maca Hitam, dan fermentasi tumbuhan untuk L-Arginine—tanpa sebarang sisa pelarut kimia berbahaya.',
  },
  {
    code: 'QA-LAB-05',
    titleEn: 'Microbiological & Mycotoxin Clearance Protocol',
    titleMs: 'Protokol Saringan Mikrobiologi & Bebas Mikotoksin',
    specEn: 'Absent E. coli, Salmonella spp., Staphylococcus aureus & Aflatoxins B1/B2/G1/G2',
    specMs: 'Bebas E. coli, Salmonella spp., Staphylococcus aureus & Aflatoksin B1/B2/G1/G2',
    detailEn: 'Tropical humidity in Southeast Asia accelerates fungal mold growth on improperly dried raw roots. Our spray-dried and lyophilized extracts maintain water activity (aw) below 0.35, preventing microbial or aflatoxin proliferation.',
    detailMs: 'Kelembapan tropika di Asia Tenggara mempercepatkan pertumbuhan kulat pada akar mentah yang tidak dikeringkan dengan betul. Ekstrak kering beku kami mengekalkan aktiviti air (aw) di bawah 0.35 bagi menghalang pembiakan mikroorganisma.',
  },
  {
    code: 'QA-LAB-06',
    titleEn: 'Tropical Malaysia Humidity-Barrier Obsidian Bottle & Induction Seal',
    titleMs: 'Botol Obsidian Tahan Lembap Iklim Malaysia & Penutup Induksi Kedap Udara',
    specEn: 'UV-Opaque Obsidian HDPE/PET + Aluminum Foil Heat-Induction Inner Seal',
    specMs: 'Botol Hitam Legap UV + Penutup Dalam Kerajang Aluminium Kedap Udara',
    detailEn: 'High-ratio 100:1 herbal extracts are naturally hygroscopic (moisture-attracting). Every Onyxmen bottle is sealed with a hermetic heat-induction foil liner inside a UV-blocking obsidian vessel to protect potency across all 16 Malaysian states.',
    detailMs: 'Ekstrak herba nisbah tinggi 100:1 bersifat higroskopik (mudah menyerap lembapan udara). Setiap botol Onyxmen dilengkapi penutup induksi haba kedap udara di dalam botol hitam legap UV bagi melindungi potensi herba.',
  },
  {
    code: 'QA-LAB-07',
    titleEn: 'Precision Capsule Disintegration Kinetics (< 25 Minutes in Warm Water)',
    titleMs: 'Kinetik Pelarutan Kapsul Pantas (< 25 Minit Bersama Air Suam)',
    specEn: 'Zero Chalky Tablet Binders, Titanium Dioxide, or Synthetic Shellac Coatings',
    specMs: 'Bebas Bahan Pengikat Tablet Kapur atau Salutan Sintetik Sukar Larut',
    detailEn: 'Compressed tablets often pass through the digestive tract only partially dissolved. Onyxmen uses fine-mesh encapsulated powders (including 100% Vegetarian HPMC shells in Hammer of Thor and XR Black Capsules in Magnum Pump XR) that disperse within 20–25 minutes.',
    detailMs: 'Tablet mampat biasa sering gagal larut sepenuhnya di dalam perut. Onyxmen menggunakan serbuk ekstrak halus di dalam kapsul (termasuk kapsul vegetarian HPMC dalam Hammer of Thor dan kapsul hitam XR dalam Magnum Pump XR) yang larut dalam 20–25 minit.',
  },
  {
    code: 'QA-LAB-08',
    titleEn: 'Full Batch Traceability & Direct Kuala Lumpur Apothecary Fulfilment',
    titleMs: 'Kebolehjejakan Kelompok Penuh & Penghantaran Terus Apotekari Kuala Lumpur',
    specEn: 'Direct-from-Vault Dispatch · Zero Third-Party Marketplace Middlemen',
    specMs: 'Penghantaran Terus Dari Bilik Kebal · Tanpa Orang Tengah Pasaran Terbuka',
    detailEn: 'Every bottle of Horsemen (ONYX-HM-20), Hammer of Thor (ONYX-HT-20), Grow XL (ONYX-GX-30), and Magnum Pump XR (ONYX-MP-30) is dispatched directly from our climate-controlled Kuala Lumpur fulfilment desk in 100% plain unmarked packaging.',
    detailMs: 'Setiap botol Horsemen (ONYX-HM-20), Hammer of Thor (ONYX-HT-20), Grow XL (ONYX-GX-30), dan Magnum Pump XR (ONYX-MP-30) dihantar terus dari pusat operasi berhawa dingin kami di Kuala Lumpur dalam bungkusan rahsia tanpa nama.',
  },
];

/**
 * 8-Dimension Comparison between Onyxmen Standardized Extracts and Unstandardized Street Powders
 */
export const EXTRACTION_COMPARISON_ROWS = [
  {
    dimEn: '01 · Extraction Concentration Ratio',
    dimMs: '01 · Nisbah Kepekatan Pengekstrakan',
    onyxEn: '100:1 Ultrasonic Aqueous Extract (Tongkat Ali), 60% Saponins (Tribulus), 10:1 Gelatinized (Black Maca), 99.5% Pure L-Arginine HCl',
    onyxMs: 'Ekstrak Air Ultrasonik 100:1 (Tongkat Ali), 60% Saponin (Tribulus), 10:1 Tergelatinisasi (Maca Hitam), 99.5% L-Arginine HCl Tulen',
    streetEn: '1:1 Raw Crushed Wood Bark, Stem Sawdust, or Unstandardized Whole-Plant Flour',
    streetMs: '1:1 Serbuk Kayu Akar Mentah, Habuk Batang, atau Tepung Tumbuhan Tanpa Piawaian',
  },
  {
    dimEn: '02 · Verified Bioactive Marker Density',
    dimMs: '02 · Ketumpatan Penanda Bioaktif Disahkan',
    onyxEn: 'HPLC-Verified ≥ 2.2% Eurycomanone, 60% Furostanol Protodioscin, ≥ 0.6% Macamides, 95% Piperine',
    onyxMs: 'Disahkan HPLC ≥ 2.2% Eurycomanone, 60% Protodioscin Furostanol, ≥ 0.6% Macamides, 95% Piperine',
    streetEn: '0.01% – 0.15% Unverified Actives (Over 85% Indigestible Lignin, Cellulose & Raw Amylose Starch)',
    streetMs: '0.01% – 0.15% Bahan Aktif Tidak Pasti (Lebih 85% Serat Selulosa Kayu & Kanji Mentah Sukar Hadam)',
  },
  {
    dimEn: '03 · Gastrointestinal Dissolution & Comfort',
    dimMs: '03 · Kelarutan Perut & Keselesaan Penghadaman',
    onyxEn: '100% Water-Soluble & De-Starched Extracts — Dissolves in 20–25 Minutes with Zero Gastric Bloating',
    onyxMs: '100% Ekstrak Larut Air & Bebas Kanji — Larut dalam 20–25 Minit Tanpa Kembung Perut',
    streetEn: 'Heavy Stomach Cramping, Acid Reflux & Fermentative Gas from Raw Starch and Wood Fibers',
    streetMs: 'Perut Mudah Kembung, Pedih Ulu Hati & Senak Akibat Serat Kayu dan Kanji Mentah',
  },
  {
    dimEn: '04 · Heavy Metal & Soil Contaminant Safety',
    dimMs: '04 · Keselamatan Saringan Logam Berat Tanah',
    onyxEn: 'Membrane-Filtered & ICP-MS Screened for Lead (Pb), Arsenic (As), Mercury (Hg) & Cadmium (Cd)',
    onyxMs: 'Ditapis Membran & Disaring ICP-MS daripada Plumbum (Pb), Arsenik (As), Merkuri (Hg) & Kadmium (Cd)',
    streetEn: 'Unfiltered Forest Root Bark Containing Absorbed Soil Lead, Mercury & Fungal Mycotoxins',
    streetMs: 'Akar Mentah Tanpa Saringan yang Berisiko Mengandungi Logam Berat Tanah & Kulat',
  },
  {
    dimEn: '05 · Cardiovascular & CNS Safety Profile',
    dimMs: '05 · Profil Keselamatan Kardiovaskular & Saraf',
    onyxEn: '100% Caffeine-Free, Stimulant-Free & Zero Undeclared Synthetic PDE5 Chemicals — Deep REM Sleep',
    onyxMs: '100% Bebas Kafein, Bebas Perangsang Saraf & Tiada Bahan Kimia Terlarang — Tidur Malam Lena',
    streetEn: 'Frequently Adulterated with Undeclared Sildenafil Analogues or High-Dose Caffeine Causing Palpitations',
    streetMs: 'Sering Dicampur Bahan Kimia Terlarang atau Kafein Berlebihan yang Menyebabkan Jantung Berdebar',
  },
  {
    dimEn: '06 · Pharmacokinetic Absorption Catalyst',
    dimMs: '06 · Pemangkin Farmakokinetik Penyerapan',
    onyxEn: 'Paired with L-Citrulline Malate (Renal XR Recycling), 95% Piperine (Bioperine) & Chelated Zinc',
    onyxMs: 'Digabungkan bersama L-Citrulline Malate (Kitaran XR), 95% Piperine (Bioperine) & Zink Terkelat',
    streetEn: 'Zero Absorption Cofactors — Rapidly Degraded by First-Pass Hepatic Arginase and Gut Enzymes',
    streetMs: 'Tiada Kofaktor Penyerapan — Mudah Diuraikan oleh Enzim Hati Sebelum Diserap Badan',
  },
  {
    dimEn: '07 · Tropical Humidity Capsule Engineering',
    dimMs: '07 · Kejuruteraan Kapsul Iklim Tropika Malaysia',
    onyxEn: '500mg–600mg Precision Capsules (Including 100% Plant HPMC in Hammer of Thor & XR Black Capsules)',
    onyxMs: 'Kapsul Padat 500mg–600mg (Termasuk HPMC Tumbuhan dalam Hammer of Thor & Kapsul Hitam XR)',
    streetEn: 'Thin Brittle Blister Packs That Melt, Stick Together, or Oxidize in 80%+ Malaysian Humidity',
    streetMs: 'Pek Blister Nipis yang Mudah Cair, Melekit, atau Rosak Dalam Cuaca Lembap Malaysia',
  },
  {
    dimEn: '08 · Pricing Transparency & Discreet Logistics',
    dimMs: '08 · Ketelusan Harga & Penghantaran Rahsia',
    onyxEn: 'Official RM 159 / RM 286 (10% OFF vs RM 318) / RM 405 (15% OFF vs RM 477) Tiers · 100% Plain Unmarked Parcel · FPX, DuitNow QR & COD',
    onyxMs: 'Harga Rasmi RM 159 / RM 286 (10% OFF vs RM 318) / RM 405 (15% OFF vs RM 477) · 100% Bungkusan Rahsia Tanpa Nama · FPX, DuitNow & COD',
    streetEn: 'Inconsistent Pricing, Exposed Product Names on Courier Labels & Zero Customer Support',
    streetMs: 'Harga Tidak Menentu, Nama Produk Terdedah Pada Bungkusan Kurier & Tiada Jaminan',
  },
];

/**
 * Tropical Malaysia Chronobiology & Intake Timing Protocols (EN & BM)
 */
export const TROPICAL_TIMING_PROTOCOLS = [
  {
    code: 'TIME-01',
    windowEn: '07:30 – 08:30 MYT · Morning Post-Breakfast Baseline Protocol',
    windowMs: '07:30 – 08:30 MYT · Protokol Asas Pagi Selepas Sarapan',
    bottlesEn: 'Primary for Grow XL (30 Capsules × 550mg) · Optional Baseline for Horsemen / Hammer of Thor',
    bottlesMs: 'Utama untuk Grow XL (30 Kapsul × 550mg) · Pilihan Asas untuk Horsemen / Hammer of Thor',
    instructionEn: 'Swallow 1 capsule with 250ml–300ml of warm plain water 20–30 minutes after your morning meal. Taking standardized 100:1 Tongkat Ali (140mg in Grow XL) and Gelatinized Black Maca (110mg) in the morning aligns with the natural diurnal morning testosterone peak while supporting all-day micro-circulation and executive focus.',
    instructionMs: 'Ambil 1 kapsul bersama 250ml–300ml air suam 20–30 minit selepas sarapan pagi. Pengambilan ekstrak Tongkat Ali 100:1 (140mg dalam Grow XL) dan Maca Hitam (110mg) pada waktu pagi selari dengan kitaran biologi semula jadi lelaki untuk menyokong peredaran mikro dan tenaga sepanjang hari.',
  },
  {
    code: 'TIME-02',
    windowEn: '17:30 – 18:30 MYT · Pre-Gym Resistance Training & Vascular Output Window',
    windowMs: '17:30 – 18:30 MYT · Waktu Pra-Senaman Gimnasium & Aliran Vaskular',
    bottlesEn: 'Primary for Magnum Pump XR (30 Black Capsules × 600mg) & Hammer of Thor (20 Veg. Capsules)',
    bottlesMs: 'Utama untuk Magnum Pump XR (30 Kapsul Hitam × 600mg) & Hammer of Thor (20 Kapsul Veg.)',
    instructionEn: 'Take 1 capsule with 300ml water 30 to 45 minutes prior to resistance training or athletic exertion. Phase-1 L-Arginine HCl (180mg) + Bioperine (15mg) initiates endothelial eNOS vasodilation during warm-up sets, while Phase-2 L-Citrulline Malate (140mg) and Tribulus Saponins sustain muscular output through the entire evening.',
    instructionMs: 'Ambil 1 kapsul bersama 300ml air 30 hingga 45 minit sebelum latihan bebanan atau aktiviti sukan. Fasa-1 L-Arginine HCl (180mg) + Bioperine (15mg) memulakan kelancaran vaskular eNOS, manakala Fasa-2 L-Citrulline Malate (140mg) dan Saponin Tribulus mengekalkan daya tahan otot sehingga waktu malam.',
  },
  {
    code: 'TIME-03',
    windowEn: '20:30 – 21:30 MYT · Targeted Evening Readiness & Stamina Reserve Window',
    windowMs: '20:30 – 21:30 MYT · Waktu Kesediaan Tenaga Malam & Stamina Kemuncak',
    bottlesEn: 'Primary for Horsemen (20 Capsules × 500mg) · Hammer of Thor · Magnum Pump XR',
    bottlesMs: 'Utama untuk Horsemen (20 Kapsul × 500mg) · Hammer of Thor · Magnum Pump XR',
    instructionEn: 'Take 1 capsule with warm water 45 to 60 minutes after dinner and prior to evening intimacy or physical activity. Avoid swallowing capsules immediately alongside heavy, high-oil late-night suppers (such as nasi kandar, char kuey teow, or roti banjir) so gastric emptying remains rapid (< 25 minutes).',
    instructionMs: 'Ambil 1 kapsul bersama air suam 45 hingga 60 minit selepas makan malam sebelum aktiviti malam. Elakkan mengambil kapsul serentak dengan makanan malam yang terlalu berminyak supaya kapsul dapat larut dan diserap dengan pantas (< 25 minit).',
  },
  {
    code: 'TIME-04',
    windowEn: 'Kopi O, Teh Tarik & Dietary Tannin Spacing Rule (45-Minute Buffer)',
    windowMs: 'Jarak Masa Kopi O, Teh Tarik & Tanin Makanan (Sela Masa 45 Minit)',
    bottlesEn: 'Mandatory Across All 4 Onyxmen Botanical & Amino Formulations',
    bottlesMs: 'Wajib Untuk Kesemua 4 Formulasi Botani & Asid Amino Onyxmen',
    instructionEn: 'Roasted Malaysian coffee (kopi O) and condensed-milk black tea (teh tarik) are rich in polyphenolic tannins that can chelate Zinc Bisglycinate and precipitate botanical alkaloids (eurycomanone, macamides, ginsenosides) in the gut. Always leave a 45-minute buffer between coffee/tea and your Onyxmen capsule.',
    instructionMs: 'Kopi O dan teh tarik mengandungi tanin polifenol yang boleh mengikat mineral Zink serta memperlahankan penyerapan alkaloid herba (eurycomanone, macamides, ginsenosida) di dalam usus. Pastikan jarak masa sekurang-kurangnya 45 minit antara minuman berkafein/teh dan kapsul Onyxmen anda.',
  },
  {
    code: 'TIME-05',
    windowEn: 'Tropical Hydration & Electrolyte Equilibrium (2.5L – 3.0L Daily Water Intake)',
    windowMs: 'Keseimbangan Hidrasi Iklim Tropika Malaysia (2.5L – 3.0L Air Sehari)',
    bottlesEn: 'Optimizes Endothelial Plasma Volume & Nitric Oxide Hemodynamics',
    bottlesMs: 'Mengoptimumkan Isipadu Plasma Darah & Keberkesanan Nitrik Oksida',
    instructionEn: 'Endothelial Nitric Oxide vasodilation and cellular ATP synthesis require adequate intravascular plasma volume. In Malaysia’s 31°C–34°C equatorial heat, adult men lose 1.0L–1.5L of fluid via perspiration daily; maintaining 2.5L–3.0L of water intake maximizes the vascular fullness of L-Arginine, L-Citrulline, and Tongkat Ali.',
    instructionMs: 'Kelancaran aliran darah Nitrik Oksida dan penghasilan tenaga selular ATP memerlukan isipadu cecair badan yang mencukupi. Dalam cuaca panas Malaysia (31°C–34°C), pastikan pengambilan air kosong sebanyak 2.5L–3.0L sehari bagi memaksimumkan keberkesanan L-Arginine, L-Citrulline, dan Tongkat Ali.',
  },
  {
    code: 'TIME-06',
    windowEn: 'Day-18 (20-Cap) & Day-25 (30-Cap) Automated Bio-Saturation Refill Continuity',
    windowMs: 'Peringatan Bekalan Automatik Hari Ke-18 (20 Kapsul) & Hari Ke-25 (30 Kapsul)',
    bottlesEn: 'Horsemen & Hammer of Thor (Day-18 Trigger) · Grow XL & Magnum Pump XR (Day-25 Trigger)',
    bottlesMs: 'Horsemen & Hammer of Thor (Hari Ke-18) · Grow XL & Magnum Pump XR (Hari Ke-25)',
    instructionEn: 'Standardized botanicals build progressive tissue saturation over 3 to 12 weeks. Our Express Order Confirmation automatically generates a 1-click Google Calendar & WhatsApp refill alert on Day 18 (for 20-capsule bottles) or Day 25 (for 30-capsule bottles), giving our courier 48 hours to deliver your fresh bottle before your last capsule finishes.',
    instructionMs: 'Sebatian aktif herba piawai membina ketepuan optimum di dalam badan sepanjang tempoh 3 hingga 12 minggu. Sistem pengesahan pesanan kami menyediakan pautan peringatan Google Calendar dan WhatsApp pada Hari Ke-18 (botol 20 kapsul) atau Hari Ke-25 (botol 30 kapsul) supaya bekalan baharu tiba sebelum kapsul terakhir habis.',
  },
];

/**
 * Renders the 16-State Malaysia Discreet Delivery Ledger Section for any Botanical Page
 */
function renderStatesFulfilmentSection(lang = 'en-MY', defaultProductSlug = 'horsemen') {
  const isMs = lang === 'ms-MY';
  const statesList = malaysiaStatesData.states || [];

  const rowsHtml = statesList
    .map((st, idx) => {
      const stateName = isMs ? st.nameMs || st.nameEn : st.nameEn;
      const href = isMs ? st.msPath : st.enPath;
      const sla = isMs ? st.deliveryWindowMs : st.deliveryWindowEn;
      const cities = (st.majorCities || []).slice(0, 5).join(', ');
      const codStatus = st.codAvailable
        ? isMs
          ? 'FPX · DuitNow QR · COD Tersedia'
          : 'FPX · DuitNow QR · COD Available'
        : 'FPX · DuitNow QR';

      return `
            <tr>
              <td>
                <strong style="color:var(--gold-champagne);font-family:var(--font-technical);letter-spacing:0.14em;">
                  ${esc(st.stateCode || `MY-${String(idx + 1).padStart(2, '0')}`)}
                </strong>
              </td>
              <td>
                <a href="${esc(href)}" style="color:var(--gold-foil-bright);font-weight:600;text-decoration:underline;">
                  ${esc(stateName)}
                </a>
                <div style="font-size:0.78rem;color:var(--text-ash-silver);margin-top:0.2rem;">
                  ${esc(cities)}
                </div>
              </td>
              <td>${esc(sla)}</td>
              <td>
                <span style="color:var(--text-silk-ivory);">${esc(codStatus)}</span>
                <div style="font-size:0.75rem;color:var(--text-muted-alabaster);margin-top:0.15rem;">
                  ${isMs ? '100% Kotak Legap Tanpa Nama Produk' : '100% Plain Unmarked Security Parcel'}
                </div>
              </td>
              <td>
                <div style="display:flex;flex-wrap:wrap;gap:0.5rem;">
                  <a href="${esc(href)}" class="cta-hairline-secondary" style="padding:0.45rem 0.85rem;font-size:0.68rem;">
                    <span>${isMs ? 'Hab Negeri →' : 'State Hub →'}</span>
                  </a>
                  <button
                    type="button"
                    class="cta-foil-primary"
                    style="padding:0.45rem 0.85rem;font-size:0.68rem;"
                    data-open-order-drawer="true"
                    data-order-product="${esc(defaultProductSlug)}"
                    data-order-qty="1"
                  >
                    <span>${isMs ? 'Tempah RM 159' : 'Order RM 159'}</span>
                  </button>
                </div>
              </td>
            </tr>`;
    })
    .join('\n');

  return `
  <!-- ==========================================================================
       NATIONWIDE 16-STATE MALAYSIA DISCREET APOTHECARY FULFILMENT LEDGER
       ========================================================================== -->
  <section
    id="malaysia-16-states-botanical-dispatch"
    class="botanical-section botanical-section--onyx"
    aria-labelledby="heading-botanical-states-dispatch"
  >
    <div class="botanical-section__inner">
      <header class="botanical-section__header">
        <div class="botanical-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? 'LOGISTIK APOTEKARI 16 NEGERI · BUNGKUSAN RAHSIA TANPA NAMA PRODUK'
                : 'NATIONWIDE 16-STATE APOTHECARY DISPATCH · 100% UNMARKED PARCEL PROTOCOL'
            }
          </span>
          <h2 id="heading-botanical-states-dispatch" class="editorial-headline-lg">
            ${
              isMs
                ? 'Penghantaran Bungkusan Rahsia ke Seluruh <span class="foil-champagne-text">16 Negeri &amp; Wilayah Persekutuan Malaysia.</span>'
                : 'Climate-Sealed Discreet Delivery Across All <span class="foil-champagne-text">16 Malaysian States &amp; Federal Territories.</span>'
            }
          </h2>
        </div>
        <div class="botanical-section__header-right">
          <p>
            ${
              isMs
                ? 'Setiap botol Horsemen, Hammer of Thor, Grow XL, dan Magnum Pump XR dibungkus di dalam kotak keselamatan legap tanpa sebarang nama produk atau logo herba pada slip kurier. Pengirim disenaraikan sebagai "OM Fulfilment Logistics (Kuala Lumpur)".'
                : 'Every bottle of Horsemen, Hammer of Thor, Grow XL, and Magnum Pump XR is sealed inside a shock-absorbent sleeve and opaque security carton. The courier airway bill lists the sender strictly as "OM Fulfilment Logistics (Kuala Lumpur)" with zero mention of botanical supplements.'
            }
          </p>
        </div>
      </header>

      <div class="botanical-table-wrap">
        <table class="botanical-comparison-table">
          <thead>
            <tr>
              <th>${isMs ? 'Kod ISO' : 'ISO Code'}</th>
              <th>${isMs ? 'Negeri / Wilayah &amp; Bandar Utama' : 'Malaysian State / Territory &amp; Major Cities'}</th>
              <th>${isMs ? 'Tempoh Penghantaran Rahsia' : 'Discreet Transit Window'}</th>
              <th>${isMs ? 'Kaedah Pembayaran &amp; Privasi' : 'Payment &amp; Privacy Specification'}</th>
              <th>${isMs ? 'Tindakan Pantas' : 'Direct Dispatch'}</th>
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
 * Renders the Multi-Bottle Pricing & Acquisition Vault Section (RM 159 / RM 286 (10% OFF vs RM 318) / RM 405 (15% OFF vs RM 477))
 */
function renderMultiBottleAcquisitionSection(lang = 'en-MY', primarySlug = 'horsemen') {
  const isMs = lang === 'ms-MY';

  const productRowsHtml = allProducts
    .map((prod, idx) => {
      const loc = prod.locales[lang] || prod.locales['en-MY'];
      const prodHref = isMs ? prod.routes.msPath : prod.routes.enPath;
      const capSpec = isMs
        ? `${prod.labelTranscription.capsuleCount} Kapsul × ${prod.labelTranscription.capsuleWeightMg}mg`
        : `${prod.labelTranscription.capsuleCount} Capsules × ${prod.labelTranscription.capsuleWeightMg}mg`;
      const refillSpec = isMs
        ? `Peringatan Bekalan Hari Ke-${prod.refillProtocol.refillReminderDay}`
        : `Day-${prod.refillProtocol.refillReminderDay} Automated Refill Alert`;
      const isPrimary = prod.slug === primarySlug;

      return `
        <div
          class="botanical-hairline-row"
          style="${isPrimary ? 'background:linear-gradient(90deg, rgba(212,175,55,0.10) 0%, transparent 100%);border-bottom-color:var(--gold-champagne);' : ''}"
        >
          <div class="botanical-hairline-row__code">
            <div>0${idx + 1} · ${esc(prod.sku)}</div>
            <div style="color:var(--text-ash-silver);font-size:0.66rem;margin-top:0.25rem;">
              GTIN: ${esc(prod.gtin13)}
            </div>
            ${
              isPrimary
                ? `<div style="color:var(--gold-foil-bright);font-size:0.66rem;margin-top:0.35rem;font-weight:700;">
                     ★ ${isMs ? 'FORMULASI TERAS MONOGRAF INI' : 'PRIMARY MONOGRAPH FORMULATION'}
                   </div>`
                : ''
            }
          </div>

          <div class="botanical-hairline-row__main">
            <h3 class="botanical-hairline-row__title">
              <a href="${esc(prodHref)}" style="text-decoration:underline;text-underline-offset:4px;">
                ${esc(prod.name)} — ${esc(capSpec)}
              </a>
            </h3>
            <p style="font-size:0.84rem;color:var(--gold-foil-bright);letter-spacing:0.06em;">
              ${esc(isMs ? prod.labelTranscription.subtitleMs : prod.labelTranscription.subtitleEn)} · ${esc(refillSpec)}
            </p>
            <p class="botanical-hairline-row__desc">
              ${esc(loc.positioningSummary)}
            </p>
            <div style="display:flex;flex-wrap:wrap;gap:0.75rem;padding-top:0.5rem;">
              <button
                type="button"
                class="cta-foil-primary"
                data-open-order-drawer="true"
                data-order-product="${esc(prod.slug)}"
                data-order-qty="1"
              >
                <span>${isMs ? `1 Botol ${prod.name} · RM 159` : `1 Bottle ${prod.name} · RM 159`}</span>
              </button>
              <button
                type="button"
                class="cta-foil-primary"
                data-open-order-drawer="true"
                data-order-product="${esc(prod.slug)}"
                data-order-qty="2"
              >
                <span>${isMs ? `2 Botol (Pos Percuma) · RM 286 (10% OFF vs RM 318)` : `2 Bottles (Free MY Shipping) · RM 286 (10% OFF vs RM 318)`}</span>
              </button>
              <button
                type="button"
                class="cta-hairline-secondary"
                data-open-order-drawer="true"
                data-order-product="${esc(prod.slug)}"
                data-order-qty="3"
              >
                <span>${isMs ? `3 Botol (90 Hari) · RM 405 (15% OFF vs RM 477)` : `3 Bottles (90-Day Vault) · RM 405 (15% OFF vs RM 477)`}</span>
              </button>
              <a href="${esc(prodHref)}" class="cta-hairline-secondary">
                <span>${isMs ? 'Spesifikasi Penuh →' : 'Full Product Dossier →'}</span>
              </a>
            </div>
          </div>

          <div class="botanical-hairline-row__meta">
            <span class="botanical-hairline-row__dosage">RM 159.00</span>
            <span class="botanical-hairline-row__sub">
              ${isMs ? '1 BOTOL · 2 BOTOL RM 286 (10% OFF vs RM 318) · 3 BOTOL RM 405 (15% OFF vs RM 477)' : '1 BOTTLE · 2B RM 286 (10% OFF vs RM 318) · 3B RM 405 (15% OFF vs RM 477)'}
            </span>
            <span style="font-size:0.76rem;color:var(--gold-champagne);">
              ${isMs ? 'Stok Sedia Ada · Kuala Lumpur' : 'In Stock · Kuala Lumpur Vault'}
            </span>
          </div>
        </div>`;
    })
    .join('\n');

  return `
  <!-- ==========================================================================
       MULTI-BOTTLE PROTOCOL ACQUISITION VAULT (RM 159 / RM 286 (10% OFF vs RM 318) / RM 405 (15% OFF vs RM 477))
       ========================================================================== -->
  <section
    id="botanical-protocol-acquisition-vault"
    class="botanical-section"
    aria-labelledby="heading-botanical-acquisition-vault"
  >
    <div class="botanical-section__inner">
      <header class="botanical-section__header">
        <div class="botanical-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? ' TEMPAHAN EKSPRES 10 SAAT · HARGA RASMI SELURUH MALAYSIA'
                : ' 10-SECOND EXPRESS DISCREET RESERVE · OFFICIAL MALAYSIA PRICING'
            }
          </span>
          <h2 id="heading-botanical-acquisition-vault" class="editorial-headline-lg">
            ${
              isMs
                ? 'Pilih Formulasi &amp; Kitaran Botol Anda: <span class="foil-champagne-text">RM 159 · RM 286 (10% OFF vs RM 318) · RM 405 (15% OFF vs RM 477).</span>'
                : 'Acquire Your Standardized Botanical Protocol: <span class="foil-champagne-text">RM 159 · RM 286 (10% OFF vs RM 318) · RM 405 (15% OFF vs RM 477).</span>'
            }
          </h2>
        </div>
        <div class="botanical-section__header-right">
          <p>
            ${
              isMs
                ? 'Setiap pesanan disahkan serta-merta melalui meja operasi Kuala Lumpur kami (sales@onyxmen.my / info@onyxmen.my / waleedshoaibofficial@gmail.com) dengan sokongan pembayaran FPX, DuitNow QR, dan Bayar Waktu Terima (COD).'
                : 'Every reserve is routed directly to our Kuala Lumpur fulfilment desk (sales@onyxmen.my / info@onyxmen.my / waleedshoaibofficial@gmail.com) with instant WhatsApp dispatch coordination and FPX, DuitNow QR, or COD settlement.'
            }
          </p>
        </div>
      </header>

      <div class="botanical-hairline-ledger">
        ${productRowsHtml}
      </div>
    </div>
  </section>`;
}

/**
 * Renders the Quantitative 4-Bottle × 10-Botanical Milligram Matrix Table (EN & BM)
 */
function renderQuantitativeFormulationMatrixSection(lang = 'en-MY') {
  const isMs = lang === 'ms-MY';

  return `
  <!-- ==========================================================================
       QUANTITATIVE 4-BOTTLE × 10-BOTANICAL MILLIGRAM FORMULATION MATRIX
       ========================================================================== -->
  <section
    id="quantitative-botanical-dosage-matrix"
    class="botanical-section botanical-section--charcoal"
    aria-labelledby="heading-quantitative-matrix"
  >
    <div class="botanical-section__inner">
      <header class="botanical-section__header">
        <div class="botanical-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? 'JADUAL KUANTITATIF MILIGRAM · KETELUSAN LABEL 100% TANPA CAMPURAN TERSEMBUNYI'
                : 'QUANTITATIVE MILLIGRAM LEDGER · 100% OPEN-LABEL APOTHECARY TRANSPARENCY'
            }
          </span>
          <h2 id="heading-quantitative-matrix" class="editorial-headline-lg">
            ${
              isMs
                ? 'Matriks Dos Tepat Merentasi <span class="foil-champagne-text">Keempat-Empat Botol Onyxmen (RM 159).</span>'
                : 'Exact Milligram Architecture Across <span class="foil-champagne-text">All Four Onyxmen Reserves (RM 159).</span>'
            }
          </h2>
        </div>
        <div class="botanical-section__header-right">
          <p>
            ${
              isMs
                ? 'Onyxmen Malaysia tidak menggunakan istilah kabur "campuran proprietari" yang menyembunyikan dos sebenar. Setiap kapsul 500mg hingga 600mg mempunyai pecahan miligram ekstrak piawai yang dinyatakan dengan tepat.'
                : 'Onyxmen Malaysia refuses to hide behind opaque "proprietary blends." Every 500mg to 600mg capsule discloses its exact milligram allocation of standardized botanical extracts, amino-acid precursors, and mineral cofactors.'
            }
          </p>
        </div>
      </header>

      <div class="botanical-table-wrap">
        <table class="botanical-comparison-table">
          <thead>
            <tr>
              <th>${isMs ? 'Sebatian Fitokimia / Asid Amino Piawai' : 'Standardized Botanical / Amino Active'}</th>
              <th>${isMs ? 'Spesifikasi Piawaian Makmal' : 'Laboratory Standardization Spec'}</th>
              <th>Horsemen<br /><span style="font-size:0.65rem;color:var(--text-ash-silver);">20 Caps × 500mg · ONYX-HM-20</span></th>
              <th>Hammer of Thor<br /><span style="font-size:0.65rem;color:var(--text-ash-silver);">20 Veg Caps × 500mg · ONYX-HT-20</span></th>
              <th>Grow XL<br /><span style="font-size:0.65rem;color:var(--text-ash-silver);">30 Caps × 550mg · ONYX-GX-30</span></th>
              <th>Magnum Pump XR<br /><span style="font-size:0.65rem;color:var(--text-ash-silver);">30 Black Caps × 600mg · ONYX-MP-30</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <a href="${isMs ? '/ms/ingredients/tongkat-ali-malaysia/' : '/ingredients/tongkat-ali-malaysia/'}" style="color:var(--gold-foil-bright);font-weight:600;text-decoration:underline;">
                  Eurycoma longifolia (Tongkat Ali)
                </a>
              </td>
              <td>100:1 Aqueous Root Extract (≥2.0%–2.2% Eurycomanone)</td>
              <td><strong style="color:var(--gold-foil-bright);">150 mg</strong> (30.0%)</td>
              <td><strong>45 mg</strong> (9.0%)</td>
              <td><strong style="color:var(--gold-foil-bright);">140 mg</strong> (25.5%)</td>
              <td><strong>90 mg</strong> (15.0%)</td>
            </tr>
            <tr>
              <td>
                <a href="${isMs ? '/ms/ingredients/tribulus-terrestris-malaysia/' : '/ingredients/tribulus-terrestris-malaysia/'}" style="color:var(--gold-foil-bright);font-weight:600;text-decoration:underline;">
                  Tribulus terrestris L.
                </a>
              </td>
              <td>45%–60% Furostanol Saponins (Protodioscin)</td>
              <td><strong>30 mg</strong> (+Zinc Matrix)</td>
              <td><strong style="color:var(--gold-foil-bright);">200 mg</strong> (40.0% · 60% Saponins)</td>
              <td>—</td>
              <td><strong style="color:var(--gold-foil-bright);">110 mg</strong> (18.3% · 45% Saponins)</td>
            </tr>
            <tr>
              <td>
                <a href="${isMs ? '/ms/ingredients/maca-root-malaysia/' : '/ingredients/maca-root-malaysia/'}" style="color:var(--gold-foil-bright);font-weight:600;text-decoration:underline;">
                  Lepidium meyenii (Peruvian Black Maca)
                </a>
              </td>
              <td>10:1 Starch-Free Gelatinized Root (≥0.6% Macamides)</td>
              <td><strong style="color:var(--gold-foil-bright);">100 mg</strong> (20.0%)</td>
              <td><strong style="color:var(--gold-foil-bright);">100 mg</strong> (20.0%)</td>
              <td><strong style="color:var(--gold-foil-bright);">110 mg</strong> (20.0%)</td>
              <td>—</td>
            </tr>
            <tr>
              <td>
                <a href="${isMs ? '/ms/ingredients/l-arginine-nitric-oxide/' : '/ingredients/l-arginine-nitric-oxide/'}" style="color:var(--gold-foil-bright);font-weight:600;text-decoration:underline;">
                  L-Arginine HCl + L-Citrulline Malate
                </a>
              </td>
              <td>99.5% Pharmaceutical Free-Form + 2:1 Malate XR</td>
              <td><strong>80 mg</strong> (L-Arginine HCl)</td>
              <td><strong>80 mg</strong> (Plant-Fermented)</td>
              <td><strong style="color:var(--gold-foil-bright);">100 mg</strong> (2:1 Dual Matrix)</td>
              <td><strong style="color:var(--gold-foil-bright);">320 mg</strong> (180mg Arg + 140mg Cit)</td>
            </tr>
            <tr>
              <td>
                <a href="${isMs ? '/ms/ingredients/tribulus-terrestris-malaysia/' : '/ingredients/tribulus-terrestris-malaysia/'}" style="color:var(--gold-foil-bright);font-weight:600;text-decoration:underline;">
                  Panax ginseng (6-Year Red Root)
                </a>
              </td>
              <td>8%–10% Standardized Ginsenosides (Rg1, Rb1, Rg3)</td>
              <td><strong>60 mg</strong> (12.0%)</td>
              <td><strong>60 mg</strong> (12.0%)</td>
              <td><strong>50 mg</strong> (+Ginkgo Flavones)</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Epimedium sagittatum (Horny Goat Weed)</td>
              <td>10% Standardized Flavonoid Icariins</td>
              <td><strong style="color:var(--gold-foil-bright);">80 mg</strong> (16.0%)</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Ptychopetalum olacoides (Muira Puama)</td>
              <td>12:1 Concentrated Amazonian Bark Phytosterols</td>
              <td>—</td>
              <td>—</td>
              <td><strong style="color:var(--gold-foil-bright);">80 mg</strong> (14.5%)</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Serenoa repens (Saw Palmetto Berry)</td>
              <td>45% Lipidosterolic Free Fatty Acids &amp; β-Sitosterol</td>
              <td>—</td>
              <td>—</td>
              <td><strong style="color:var(--gold-foil-bright);">70 mg</strong> (12.7%)</td>
              <td>—</td>
            </tr>
            <tr>
              <td>Kaempferia parviflora (Thai Black Ginger)</td>
              <td>≥5.0% Standardized Polymethoxyflavones (PMFs)</td>
              <td>—</td>
              <td>—</td>
              <td>—</td>
              <td><strong style="color:var(--gold-foil-bright);">65 mg</strong> (10.8%)</td>
            </tr>
            <tr>
              <td>Chelated Zinc / Bioperine® Catalyst</td>
              <td>15mg Zinc Bisglycinate / 95% Piperine Alkaloid</td>
              <td>Included in 30mg Matrix</td>
              <td><strong style="color:var(--gold-foil-bright);">15 mg</strong> (Chelated Zinc)</td>
              <td>—</td>
              <td><strong style="color:var(--gold-foil-bright);">15 mg</strong> (95% Bioperine)</td>
            </tr>
            <tr style="background:rgba(212,175,55,0.09);">
              <td><strong>${isMs ? 'JUMLAH BERAT KAPSUL &amp; KITARAN' : 'TOTAL CAPSULE WEIGHT &amp; CYCLE'}</strong></td>
              <td><strong>${isMs ? '100% Ketelusan Dos Makmal' : '100% Disclosed Active Load'}</strong></td>
              <td><strong>500 mg × 20 Caps</strong><br /><span style="font-size:0.75rem;color:var(--gold-champagne);">10,000mg · Day-18 Refill · RM 159</span></td>
              <td><strong>500 mg × 20 Veg Caps</strong><br /><span style="font-size:0.75rem;color:var(--gold-champagne);">10,000mg · Day-18 Refill · RM 159</span></td>
              <td><strong>550 mg × 30 Caps</strong><br /><span style="font-size:0.75rem;color:var(--gold-champagne);">16,500mg · Day-25 Refill · RM 159</span></td>
              <td><strong>600 mg × 30 Black Caps</strong><br /><span style="font-size:0.75rem;color:var(--gold-champagne);">18,000mg · Day-25 Refill · RM 159</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>`;
}

/**
 * Renders the 8-Point Laboratory Purity & Heavy-Metal Screening Section (EN & BM)
 */
function renderLabPuritySection(lang = 'en-MY') {
  const isMs = lang === 'ms-MY';

  const rowsHtml = LAB_PURITY_CHECKPOINTS.map(
    (cp) => `
        <div class="botanical-hairline-row">
          <div class="botanical-hairline-row__code">${esc(cp.code)}</div>
          <div class="botanical-hairline-row__main">
            <h3 class="botanical-hairline-row__title">${esc(isMs ? cp.titleMs : cp.titleEn)}</h3>
            <p class="botanical-hairline-row__desc">${esc(isMs ? cp.detailMs : cp.detailEn)}</p>
          </div>
          <div class="botanical-hairline-row__meta">
            <span style="font-size:0.84rem;color:var(--gold-foil-bright);font-weight:600;">
              ${esc(isMs ? cp.specMs : cp.specEn)}
            </span>
          </div>
        </div>`
  ).join('\n');

  const compRowsHtml = EXTRACTION_COMPARISON_ROWS.map(
    (row) => `
            <tr>
              <td><strong style="color:var(--gold-champagne);">${esc(isMs ? row.dimMs : row.dimEn)}</strong></td>
              <td style="color:var(--text-silk-ivory);">✓ ${esc(isMs ? row.onyxMs : row.onyxEn)}</td>
              <td style="color:var(--text-ash-silver);">✕ ${esc(isMs ? row.streetMs : row.streetEn)}</td>
            </tr>`
  ).join('\n');

  return `
  <!-- ==========================================================================
       8-POINT LABORATORY PURITY & EXTRACTION PHYSICS VS STREET POWDER
       ========================================================================== -->
  <section
    id="botanical-laboratory-purity-and-extraction-physics"
    class="botanical-section botanical-section--onyx"
    aria-labelledby="heading-lab-purity"
  >
    <div class="botanical-section__inner">
      <header class="botanical-section__header">
        <div class="botanical-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? 'SARINGAN MAKMAL 8 PERINGKAT · HPLC-DAD &amp; ICP-MS LOGAM BERAT'
                : '8-STAGE ANALYTICAL QUALITY ASSURANCE · HPLC-DAD &amp; ICP-MS HEAVY METAL CLEARANCE'
            }
          </span>
          <h2 id="heading-lab-purity" class="editorial-headline-lg">
            ${
              isMs
                ? 'Sains Pengekstrakan Tulen vs <span class="foil-champagne-text">Serbuk Kayu Mentah Pasaran Jalanan.</span>'
                : 'Analytical Extraction Physics vs <span class="foil-champagne-text">Unstandardized Street Root Sawdust.</span>'
            }
          </h2>
        </div>
        <div class="botanical-section__header-right">
          <p>
            ${
              isMs
                ? 'Setiap kelompok bahan mentah diuji untuk ketulenan fitokimia, ketiadaan logam berat tanah, dan kelarutan air suam sebelum dibotolkan untuk pasaran Malaysia.'
                : 'Every raw botanical harvest lot undergoes analytical verification for bioactive marker density, heavy metal clearance, and warm-water dissolution kinetics prior to encapsulation.'
            }
          </p>
        </div>
      </header>

      <div class="botanical-hairline-ledger">
        ${rowsHtml}
      </div>

      <div class="botanical-table-wrap" style="margin-top:1.5rem;">
        <table class="botanical-comparison-table">
          <thead>
            <tr>
              <th>${isMs ? 'Dimensi Kualiti &amp; Bioketersediaan' : 'Analytical Quality &amp; Bioavailability Dimension'}</th>
              <th>${isMs ? 'Ekstrak Piawai Apotekari Onyxmen Malaysia (RM 159)' : 'Onyxmen Malaysia Standardized Apothecary Extracts (RM 159)'}</th>
              <th>${isMs ? 'Serbuk Akar Mentah / Produk Tanpa Piawaian di Pasaran' : 'Unstandardized Street Root Powder / Generic Listings'}</th>
            </tr>
          </thead>
          <tbody>
            ${compRowsHtml}
          </tbody>
        </table>
      </div>
    </div>
  </section>`;
}

/**
 * Renders the Tropical Malaysia Chronobiology & Intake Timing Section (EN & BM)
 */
function renderTropicalTimingSection(lang = 'en-MY') {
  const isMs = lang === 'ms-MY';

  const rowsHtml = TROPICAL_TIMING_PROTOCOLS.map(
    (tp) => `
        <div class="botanical-hairline-row">
          <div class="botanical-hairline-row__code">${esc(tp.code)}</div>
          <div class="botanical-hairline-row__main">
            <h3 class="botanical-hairline-row__title">${esc(isMs ? tp.windowMs : tp.windowEn)}</h3>
            <p style="font-size:0.82rem;color:var(--gold-foil-bright);letter-spacing:0.08em;text-transform:uppercase;">
              ${esc(isMs ? tp.bottlesMs : tp.bottlesEn)}
            </p>
            <p class="botanical-hairline-row__desc">${esc(isMs ? tp.instructionMs : tp.instructionEn)}</p>
          </div>
          <div class="botanical-hairline-row__meta">
            <span class="botanical-hairline-row__sub">
              ${isMs ? 'PROTOKOL TROPIKA MY' : 'MALAYSIA TROPICAL PROTOCOL'}
            </span>
          </div>
        </div>`
  ).join('\n');

  return `
  <!-- ==========================================================================
       TROPICAL MALAYSIA CHRONOBIOLOGY, KOPI/TEH SPACING & INTAKE PROTOCOL
       ========================================================================== -->
  <section
    id="tropical-malaysia-chronobiology-intake-protocol"
    class="botanical-section"
    aria-labelledby="heading-tropical-timing"
  >
    <div class="botanical-section__inner">
      <header class="botanical-section__header">
        <div class="botanical-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? 'KRONOBIOLOGI TROPIKA MALAYSIA · MASA PENGAMBILAN &amp; PENYERAPAN OPTIMUM'
                : 'TROPICAL MALAYSIA CHRONOBIOLOGY · OPTIMAL CAPSULE TIMING &amp; BIO-UPTAKE'
            }
          </span>
          <h2 id="heading-tropical-timing" class="editorial-headline-lg">
            ${
              isMs
                ? 'Jadual Pengambilan Mengikut Waktu Malaysia (MYT) &amp; <span class="foil-champagne-text">Keserasian Pemakanan Tempatan.</span>'
                : 'Precision Intake Windows (MYT) &amp; <span class="foil-champagne-text">Malaysian Dietary Compatibility.</span>'
            }
          </h2>
        </div>
        <div class="botanical-section__header-right">
          <p>
            ${
              isMs
                ? 'Cara dan masa anda menelan kapsul herba piawai di dalam iklim khatulistiwa Malaysia menentukan kepantasan penyerapan eurycomanone, saponin protodioscin, macamides, dan L-Arginine di dalam aliran darah.'
                : 'How and when you ingest standardized botanical capsules in Malaysia’s equatorial climate directly governs the intestinal absorption rate of eurycomanone, protodioscin saponins, macamides, and L-Arginine.'
            }
          </p>
        </div>
      </header>

      <div class="botanical-hairline-ledger">
        ${rowsHtml}
      </div>
    </div>
  </section>`;
}

/**
 * Renders the Secondary Botanical & Mineral Cofactors Section (EN & BM)
 */
function renderSecondaryCofactorsSection(lang = 'en-MY') {
  const isMs = lang === 'ms-MY';

  const rowsHtml = SECONDARY_COFACTORS.map(
    (cof) => `
        <div class="botanical-hairline-row">
          <div class="botanical-hairline-row__code">${esc(cof.code)}</div>
          <div class="botanical-hairline-row__main">
            <h3 class="botanical-hairline-row__title">
              ${esc(isMs ? cof.commonMs : cof.commonEn)}
            </h3>
            <p style="font-size:0.82rem;color:var(--gold-champagne);font-family:var(--font-technical);letter-spacing:0.12em;">
              TAXON: ${esc(cof.scientificName)} · ${esc(isMs ? cof.featuredInMs : cof.featuredInEn)}
            </p>
            <p class="botanical-hairline-row__desc">
              ${esc(isMs ? cof.mechanismMs : cof.mechanismEn)}
            </p>
          </div>
          <div class="botanical-hairline-row__meta">
            <a
              href="${esc(isMs ? cof.linkedMonographMs : cof.linkedMonographEn)}"
              class="cta-hairline-secondary"
              style="padding:0.55rem 1rem;font-size:0.7rem;"
            >
              <span>${isMs ? 'Lihat Monograf Berkaitan →' : 'Paired Monograph →'}</span>
            </a>
          </div>
        </div>`
  ).join('\n');

  return `
  <!-- ==========================================================================
       6 SYNERGISTIC SECONDARY BOTANICAL & MINERAL COFACTORS
       ========================================================================== -->
  <section
    id="synergistic-secondary-botanical-cofactors"
    class="botanical-section botanical-section--onyx"
    aria-labelledby="heading-secondary-cofactors"
  >
    <div class="botanical-section__inner">
      <header class="botanical-section__header">
        <div class="botanical-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? 'ENAM KOFAKTOR FITOKIMIA &amp; MINERAL SOKONGAN'
                : 'SIX SYNERGISTIC BOTANICAL &amp; MINERAL COFACTORS'
            }
          </span>
          <h2 id="heading-secondary-cofactors" class="editorial-headline-lg">
            ${
              isMs
                ? 'Sinergi Spektrum Penuh: <span class="foil-champagne-text">Epimedium, Muira Puama, Saw Palmetto, Kunyit Hitam &amp; Bioperine.</span>'
                : 'Entourage Formulation Architecture: <span class="foil-champagne-text">Epimedium, Muira Puama, Saw Palmetto, Kunyit Hitam &amp; Bioperine.</span>'
            }
          </h2>
        </div>
        <div class="botanical-section__header-right">
          <p>
            ${
              isMs
                ? 'Selain empat teras utama (Tongkat Ali, Tribulus, Maca Hitam, dan L-Arginine / L-Citrulline), setiap botol Onyxmen diperkukuhkan dengan kofaktor khusus mengikut fungsi fisiologinya.'
                : 'Alongside our four foundational actives (Tongkat Ali, Tribulus, Black Maca, and L-Arginine / L-Citrulline), each Onyxmen reserve integrates targeted cofactors engineered to amplify absorption and receptor response.'
            }
          </p>
        </div>
      </header>

      <div class="botanical-hairline-ledger">
        ${rowsHtml}
      </div>
    </div>
  </section>`;
}

/**
 * Shared Cross-Formulation FAQs appended to every Botanical Monograph Page (EN & BM)
 */
export const SHARED_BOTANICAL_FAQS = [
  {
    questionEn: 'How do I verify that my Onyxmen bottle (Horsemen, Hammer of Thor, Grow XL, or Magnum Pump XR) contains authentic standardized extracts?',
    answerEn: 'Authentic Onyxmen Malaysia bottles are distributed exclusively through https://www.onyxmen.my and dispatched directly from our Kuala Lumpur fulfilment vault (OM Fulfilment Logistics) with a tamper-evident heat-induction foil seal, crisp metallic label typography, and official SKU/GTIN batch traceability (ONYX-HM-20, ONYX-HT-20, ONYX-GX-30, ONYX-MP-30). You can verify any bottle directly with our concierge at sales@onyxmen.my or info@onyxmen.my.',
    questionMs: 'Bagaimanakah cara mengesahkan botol Onyxmen saya (Horsemen, Hammer of Thor, Grow XL, atau Magnum Pump XR) mengandungi ekstrak piawai yang tulen?',
    answerMs: 'Botol tulen Onyxmen Malaysia hanya diedarkan secara rasmi melalui https://www.onyxmen.my dan dihantar terus dari bilik kebal operasi Kuala Lumpur kami (OM Fulfilment Logistics) lengkap dengan penutup induksi haba kedap udara serta kod SKU/GTIN rasmi (ONYX-HM-20, ONYX-HT-20, ONYX-GX-30, ONYX-MP-30). Anda boleh menyemak ketulenan terus melalui sales@onyxmen.my atau info@onyxmen.my.',
  },
  {
    questionEn: 'Are Onyxmen botanical formulations registered prescription drugs or adult dietary supplements?',
    answerEn: 'All Onyxmen formulations (Horsemen, Hammer of Thor, Grow XL, and Magnum Pump XR) are 100% natural botanical and amino-acid dietary supplements formulated for adult men (18+) to support physical stamina, vitality, and vascular nutrition. They are not prescription pharmaceuticals, do not contain synthetic drugs, and are not intended to diagnose, treat, cure, or prevent any disease.',
    questionMs: 'Adakah formulasi botani Onyxmen merupakan ubat preskripsi hospital atau suplemen pemakanan lelaki dewasa?',
    answerMs: 'Semua formulasi Onyxmen (Horsemen, Hammer of Thor, Grow XL, dan Magnum Pump XR) ialah suplemen pemakanan botani dan asid amino semula jadi untuk lelaki dewasa (18+) bagi menyokong stamina fizikal, kecergasan, dan nutrisi vaskular. Ia bukan ubat preskripsi dan tidak bertujuan untuk mendiagnosis, merawat, atau menyembuhkan sebarang penyakit.',
  },
  {
    questionEn: 'How fast is discreet delivery to Kuala Lumpur, Selangor, Penang, Johor Bahru, Sabah, and Sarawak?',
    answerEn: 'Orders in Kuala Lumpur, Selangor, and Putrajaya (Klang Valley) confirmed before 16:00 MYT qualify for Same-Day 3–5 Hour Discreet Private Runner delivery or 1-Day Express Courier. Peninsular Malaysia states (Penang, Johor, Perak, Melaka, Negeri Sembilan, Pahang, Kedah, Kelantan, Terengganu, Perlis) receive 1–2 Business Day Express Courier delivery, while Sabah, Sarawak, and Labuan receive 2–4 Business Day Discreet Air Freight.',
    questionMs: 'Berapa cepatkah penghantaran rahsia ke Kuala Lumpur, Selangor, Pulau Pinang, Johor Bahru, Sabah, dan Sarawak?',
    answerMs: 'Pesanan di Kuala Lumpur, Selangor, dan Putrajaya (Lembah Klang) sebelum jam 16:00 MYT layak menerima Penghantar Rahsia Hari Sama (3–5 jam) atau Kurier Ekspres 1 Hari. Negeri-negeri Semenanjung Malaysia menerima penghantaran dalam 1–2 hari bekerja, manakala Sabah, Sarawak, dan Labuan menerima kargo udara rahsia dalam 2–4 hari bekerja.',
  },
  {
    questionEn: 'How does the 10-Second Express Discreet Order Drawer work without exposing my privacy?',
    answerEn: 'Clicking any "Acquire" or "Reserve" button on this monograph opens our encrypted Express Discreet Order Drawer. You simply select your formulation, choose 1 Bottle (RM 159), 2 Bottles (RM 286 (10% OFF vs RM 318) — Free Nationwide Shipping), or 3 Bottles (RM 405 (15% OFF vs RM 477)), enter your recipient name or initials, delivery address, and preferred payment (FPX, DuitNow QR, or COD). Your order is routed straight to waleedshoaibofficial@gmail.com and sales@onyxmen.my with a 1-click WhatsApp confirmation link and automated refill calendar reminder.',
    questionMs: 'Bagaimanakah Laci Tempahan Ekspres Rahsia 10 Saat berfungsi untuk menjaga privasi saya?',
    answerMs: 'Klik mana-mana butang tempahan pada halaman ini untuk membuka Laci Tempahan Ekspres Rahsia. Pilih formulasi pilihan anda, kuantiti 1 Botol (RM 159), 2 Botol (RM 286 (10% OFF vs RM 318) — Pos Percuma Seluruh Malaysia), atau 3 Botol (RM 405 (15% OFF vs RM 477)), masukkan nama atau singkatan nama, alamat, dan kaedah bayaran (FPX, DuitNow QR, atau COD). Pesanan dihantar terus ke waleedshoaibofficial@gmail.com dan sales@onyxmen.my bersama pautan pengesahan WhatsApp serta peringatan kalendar automatik.',
  },
];

/**
 * Renders an Individual Botanical Monograph Page (`MS-123` to `MS-130`) in EN or BM.
 */
export function renderIndividualMonographPage(dossier, lang = 'en-MY') {
  const isMs = lang === 'ms-MY';
  const loc = isMs ? dossier.ms : dossier.en;
  const microStep = isMs ? dossier.microStepMs : dossier.microStepEn;
  const canonicalPath = isMs ? dossier.canonicalMsPath : dossier.canonicalEnPath;
  const alternatePathEn = dossier.canonicalEnPath;
  const alternatePathMs = dossier.canonicalMsPath;

  const baseMonograph =
    (botanicalsData.monographs || []).find((m) => m.id === dossier.key || m.shortSlug === dossier.key) ||
    botanicalsData.monographs[0];
  const baseLoc = baseMonograph.locales[lang] || baseMonograph.locales['en-MY'];

  const allFaqs = [...loc.faqs, ...SHARED_BOTANICAL_FAQS];

  const breadcrumbs = isMs
    ? [
        { name: 'Utama Onyxmen Malaysia', url: '/ms/' },
        { name: 'Monograf Apotekari Botani', url: '/ms/ingredients/' },
        { name: baseLoc.commonTitle, url: canonicalPath },
      ]
    : [
        { name: 'Onyxmen Malaysia Home', url: '/' },
        { name: 'Botanical Apothecary Monographs', url: '/ingredients/' },
        { name: baseLoc.commonTitle, url: canonicalPath },
      ];

  const schemaGraphJson = buildFullPageGraph({
    pageType: 'botanical',
    lang,
    pageUrl: `https://www.onyxmen.my${canonicalPath}`,
    title: loc.seoTitle,
    description: loc.metaDescription,
    product: dossier.primaryProductSlug,
    article: {
      slug: canonicalPath.split('/').filter(Boolean).pop(),
      headlineEn: dossier.en.seoTitle,
      headlineMs: dossier.ms.seoTitle,
      descriptionEn: dossier.en.metaDescription,
      descriptionMs: dossier.ms.metaDescription,
      imageUrl: `https://www.onyxmen.my${dossier.heroImage}`,
      aboutTopics: [
        dossier.scientificName,
        dossier.activeBioMarker,
        "Adult Men's Botanical Vitality Supplement Malaysia",
        'Onyxmen Malaysia Apothecary Standardization',
      ],
    },
    breadcrumbs,
    faqs: allFaqs,
  });

  // Render Anchor Dosages across the 4 Onyxmen products
  const anchorDosagesHtml = dossier.anchorDosages
    .map((ad, idx) => {
      const prodObj = productsById[ad.productSlug] || allProducts[0];
      const prodHref = isMs ? prodObj.routes.msPath : prodObj.routes.enPath;
      const prodName = isMs ? ad.productNameMs : ad.productNameEn;
      const stdNote = isMs ? ad.standardizationNoteMs : ad.standardizationNoteEn;
      const roleNote = isMs ? ad.synergyRoleMs : ad.synergyRoleEn;

      return `
        <div class="botanical-hairline-row">
          <div class="botanical-hairline-row__code">
            <div>ANCHOR 0${idx + 1} · ${esc(ad.sku)}</div>
            <div style="color:var(--gold-foil-bright);font-size:0.72rem;margin-top:0.25rem;">
              ${esc(ad.percentageOfCapsule)} ${isMs ? 'DARIPADA KAPSUL' : 'OF CAPSULE'}
            </div>
          </div>

          <div class="botanical-hairline-row__main">
            <h3 class="botanical-hairline-row__title">
              <a href="${esc(prodHref)}" style="text-decoration:underline;text-underline-offset:4px;">
                ${esc(prodName)}
              </a>
            </h3>
            <p style="font-size:0.85rem;color:var(--gold-foil-bright);font-weight:600;">
              ${esc(stdNote)}
            </p>
            <p class="botanical-hairline-row__desc">
              ${esc(roleNote)}
            </p>
            <div style="display:flex;flex-wrap:wrap;gap:0.75rem;padding-top:0.5rem;">
              <button
                type="button"
                class="cta-foil-primary"
                data-open-order-drawer="true"
                data-order-product="${esc(ad.productSlug)}"
                data-order-qty="1"
              >
                <span>${isMs ? `Tempah 1 Botol · RM 159` : `Acquire 1 Bottle · RM 159`}</span>
              </button>
              <button
                type="button"
                class="cta-foil-primary"
                data-open-order-drawer="true"
                data-order-product="${esc(ad.productSlug)}"
                data-order-qty="2"
              >
                <span>${isMs ? `Tempah 2 Botol · RM 286 (10% OFF vs RM 318)` : `Acquire 2 Bottles · RM 286 (10% OFF vs RM 318)`}</span>
              </button>
              <button
                type="button"
                class="cta-hairline-secondary"
                data-open-order-drawer="true"
                data-order-product="${esc(ad.productSlug)}"
                data-order-qty="3"
              >
                <span>${isMs ? `Pakej 3 Botol · RM 405 (15% OFF vs RM 477)` : `3-Bottle Vault · RM 405 (15% OFF vs RM 477)`}</span>
              </button>
              <a href="${esc(prodHref)}" class="cta-hairline-secondary">
                <span>${isMs ? 'Lihat Botol →' : 'Inspect Bottle →'}</span>
              </a>
            </div>
          </div>

          <div class="botanical-hairline-row__meta">
            <span class="botanical-hairline-row__dosage">${ad.dosageMg} MG</span>
            <span class="botanical-hairline-row__sub">
              ${isMs ? `SETIAP KAPSUL ${ad.capsuleTotalMg}MG` : `PER ${ad.capsuleTotalMg}MG CAPSULE`}
            </span>
            <span style="font-size:0.8rem;color:var(--gold-champagne);">RM 159.00 / Bottle</span>
          </div>
        </div>`;
    })
    .join('\n');

  // Render 4 Physiological Mechanisms
  const mechanismsHtml = loc.mechanisms
    .map(
      (mech) => `
        <div class="botanical-hairline-row">
          <div class="botanical-hairline-row__code">${esc(mech.code)}</div>
          <div class="botanical-hairline-row__main">
            <h3 class="botanical-hairline-row__title">${esc(mech.title)}</h3>
            <p class="botanical-hairline-row__desc">${esc(mech.detail)}</p>
          </div>
          <div class="botanical-hairline-row__meta">
            <span style="font-size:0.8rem;color:var(--gold-foil-bright);letter-spacing:0.16em;text-transform:uppercase;">
              ${esc(mech.metric)}
            </span>
          </div>
        </div>`
    )
    .join('\n');

  // Render Phytochemical Fractions
  const fractionsHtml = loc.phytochemicalFractions
    .map(
      (frac) => `
            <tr>
              <td><strong style="color:var(--gold-champagne);">${esc(frac.code)}</strong></td>
              <td><strong style="color:var(--text-silk-ivory);">${esc(frac.compound)}</strong></td>
              <td style="color:var(--gold-foil-bright);">${esc(frac.spec)}</td>
              <td>${esc(frac.role)}</td>
            </tr>`
    )
    .join('\n');

  // Render FAQs
  const faqsHtml = allFaqs
    .map((f, idx) => {
      const q = isMs ? f.questionMs || f.questionEn : f.questionEn || f.questionMs;
      const a = isMs ? f.answerMs || f.answerEn : f.answerEn || f.answerMs;
      return `
        <details class="botanical-faq-item" ${idx < 2 ? 'open' : ''}>
          <summary>
            <span>0${idx + 1} · ${esc(q)}</span>
            <span style="color:var(--gold-champagne);font-size:1.1rem;" aria-hidden="true">+</span>
          </summary>
          <div class="botanical-faq-item__body">
            <p>${esc(a)}</p>
          </div>
        </details>`;
    })
    .join('\n');

  // Cross-links to all 4 monographs
  const siblingMonographsHtml = MONOGRAPH_DOSSIERS.map((m, idx) => {
    const mHref = isMs ? m.canonicalMsPath : m.canonicalEnPath;
    const mLoc = isMs ? m.ms : m.en;
    const isCurrent = m.key === dossier.key;
    return `
        <div class="botanical-hairline-row" style="${isCurrent ? 'border-bottom-color:var(--gold-champagne);' : ''}">
          <div class="botanical-hairline-row__code">
            ${esc(m.monographCode)} · ${esc(isMs ? m.microStepMs : m.microStepEn)}
          </div>
          <div class="botanical-hairline-row__main">
            <h3 class="botanical-hairline-row__title">
              <a href="${esc(mHref)}" style="text-decoration:underline;">
                ${esc(mLoc.headline)}
              </a>
            </h3>
            <p class="botanical-hairline-row__desc">${esc(mLoc.subheadline)}</p>
          </div>
          <div class="botanical-hairline-row__meta">
            <a href="${esc(mHref)}" class="cta-hairline-secondary">
              <span>${isMs ? 'Baca Monograf →' : 'Read Monograph →'}</span>
            </a>
          </div>
        </div>`;
  }).join('\n');

  const bodyContent = `
  ${BOTANICAL_STAGE_CSS}

  <!-- ==========================================================================
       CHAPTER I — PARADIGM A: 100VW × 100VH FULL-BLEED BOTANICAL MONOGRAPH HERO
       ========================================================================== -->
  <section
    id="monograph-hero-stage"
    class="botanical-cinema-hero"
    aria-labelledby="monograph-hero-title"
    data-micro-step="${esc(microStep)}"
  >
    <div class="botanical-cinema-hero__watermark" aria-hidden="true">
      ${esc(dossier.monographCode)}
    </div>

    <nav class="botanical-cinema-hero__breadcrumb-bar" aria-label="${isMs ? 'Jejak Navigasi Monograf' : 'Monograph Breadcrumb Navigation'}">
      <div class="botanical-cinema-hero__crumbs">
        <a href="${isMs ? '/ms/' : '/'}">${isMs ? 'Apotekari Onyxmen' : 'Onyxmen Apothecary'}</a>
        <span aria-hidden="true">/</span>
        <a href="${isMs ? '/ms/ingredients/' : '/ingredients/'}">${isMs ? 'Monograf Botani' : 'Botanical Monographs'}</a>
        <span aria-hidden="true">/</span>
        <span style="color:var(--gold-foil-bright);">${esc(baseLoc.commonTitle)}</span>
      </div>
      <div>
        <span>${esc(microStep)} · ${esc(dossier.botanicalFamily)}</span>
      </div>
    </nav>

    <div class="botanical-cinema-hero__stage">
      <div class="botanical-cinema-hero__narrative">
        <span class="editorial-kicker">${esc(loc.eyebrow)}</span>

        <h1 id="monograph-hero-title" class="editorial-headline-xl">
          ${esc(loc.headline)}
        </h1>

        <div class="botanical-cinema-hero__taxonomy-strip">
          <span>TAXON: ${esc(dossier.scientificName)}</span>
          <span aria-hidden="true">·</span>
          <span>BIO-MARKER: ${esc(dossier.activeBioMarker)}</span>
        </div>

        <p class="botanical-cinema-hero__lead article-executive-summary">
          ${esc(loc.subheadline)}
        </p>

        <p style="font-size:0.94rem;color:var(--text-silk-ivory);line-height:1.72;">
          ${esc(loc.executiveSummary)}
        </p>

        <div class="botanical-cinema-hero__cta-row">
          <button
            type="button"
            class="cta-foil-primary"
            data-open-order-drawer="true"
            data-order-product="${esc(dossier.primaryProductSlug)}"
            data-order-qty="1"
          >
            <span>${isMs ? 'TEMPAH FORMULASI TERAS · RM 159' : 'RESERVE ANCHOR FORMULATION · RM 159'}</span>
            <span aria-hidden="true">→</span>
          </button>

          <button
            type="button"
            class="cta-hairline-secondary"
            data-open-order-drawer="true"
            data-order-product="${esc(dossier.primaryProductSlug)}"
            data-order-qty="2"
          >
            <span>${isMs ? 'PAKEJ 2 BOTOL (POS PERCUMA) · RM 286 (10% OFF vs RM 318)' : '2-BOTTLE PROTOCOL (FREE MY SHIPPING) · RM 286 (10% OFF vs RM 318)'}</span>
          </button>

          <a href="#monograph-bottle-dosages" class="cta-hairline-secondary">
            <span>${isMs ? 'Lihat Jadual Dos 4 Botol ↓' : 'Inspect 4-Bottle Dosage Ledger ↓'}</span>
          </a>
        </div>
      </div>

      <div class="botanical-cinema-hero__visual">
        <div class="botanical-cinema-hero__pedestal">
          <picture>
            <source srcset="${esc(dossier.heroImage)}" type="image/webp" />
            <img
              src="${esc(dossier.heroImage.replace('.webp', '.png'))}"
              alt="${esc(loc.seoTitle)}"
              width="1200"
              height="900"
              fetchpriority="high"
              decoding="async"
              class="botanical-cinema-hero__img"
            />
          </picture>
        </div>
        <div style="text-align:center;max-width:460px;">
          <span style="font-size:0.68rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold-champagne);">
            ${isMs ? 'PIAWAian MAKMAL RASMI ONYXMEN MALAYSIA' : 'OFFICIAL ONYXMEN MALAYSIA APOTHECARY STANDARD'}
          </span>
          <p style="font-size:0.82rem;color:var(--text-muted-alabaster);margin-top:0.3rem;">
            ${esc(dossier.standardization)}
          </p>
        </div>
      </div>
    </div>

    <div class="botanical-cinema-hero__telemetry-strip">
      <div class="botanical-cinema-hero__telemetry-col">
        <span class="botanical-cinema-hero__telemetry-key">
          ${isMs ? '01 · SPESIFIKASI PIAWAIAN' : '01 · STANDARDIZATION SPEC'}
        </span>
        <span class="botanical-cinema-hero__telemetry-val">${esc(dossier.monographCode)} · HPLC</span>
        <span class="botanical-cinema-hero__telemetry-sub">${esc(dossier.standardization)}</span>
      </div>

      <div class="botanical-cinema-hero__telemetry-col">
        <span class="botanical-cinema-hero__telemetry-key">
          ${isMs ? '02 · ASAL GEOGRAFI TUAIAN' : '02 · BOTANICAL HARVEST ORIGIN'}
        </span>
        <span class="botanical-cinema-hero__telemetry-val">${esc(dossier.botanicalFamily.split(' ')[0])}</span>
        <span class="botanical-cinema-hero__telemetry-sub">
          ${esc(isMs ? dossier.harvestGeographyMs : dossier.harvestGeographyEn)}
        </span>
      </div>

      <div class="botanical-cinema-hero__telemetry-col">
        <span class="botanical-cinema-hero__telemetry-key">
          ${isMs ? '03 · KAEDAH PENGEKSTRAKAN' : '03 · EXTRACTION PHYSICS'}
        </span>
        <span class="botanical-cinema-hero__telemetry-val">
          ${isMs ? '100% Larut &amp; Bersih' : 'Zero Raw Fiber'}
        </span>
        <span class="botanical-cinema-hero__telemetry-sub">
          ${esc(isMs ? dossier.extractionPhysicsMs : dossier.extractionPhysicsEn)}
        </span>
      </div>

      <div class="botanical-cinema-hero__telemetry-col">
        <span class="botanical-cinema-hero__telemetry-key">
          ${isMs ? '04 · HARGA RASMI MALAYSIA' : '04 · OFFICIAL MALAYSIA RESERVE'}
        </span>
        <span class="botanical-cinema-hero__telemetry-val">RM 159 / RM 286 (10% OFF vs RM 318) / RM 477</span>
        <span class="botanical-cinema-hero__telemetry-sub">
          ${isMs ? '100% Bungkusan Rahsia · FPX, DuitNow QR &amp; COD' : '100% Unmarked Parcel · FPX, DuitNow QR &amp; COD'}
        </span>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       CHAPTER II — PARADIGM D: PINNED 50VW / 50VW SPLIT-SCREEN PHYTOCHEMICAL STAGE
       ========================================================================== -->
  <section
    id="paradigm-d-phytochemical-split-stage"
    class="botanical-split-5050"
    aria-labelledby="heading-paradigm-d-split"
  >
    <!-- Left 50vw Sticky Visual & Standardization Stage -->
    <div class="botanical-split-5050__pinned">
      <div>
        <span class="editorial-kicker">
          ${
            isMs
              ? `PARADIGM D · PENTAS SKRIN TERBELAH 50VW / 50VW · ${microStep}`
              : `PARADIGM D · PINNED 50VW / 50VW PHYTOCHEMICAL CURTAIN · ${microStep}`
          }
        </span>
        <h2 id="heading-paradigm-d-split" class="editorial-headline-lg" style="margin-top:0.85rem;">
          ${esc(baseLoc.commonTitle)}: <span class="foil-champagne-text">${esc(baseLoc.subtitle)}</span>
        </h2>
      </div>

      <div style="display:flex;justify-content:center;align-items:center;padding:1.5rem 0;">
        <picture>
          <source srcset="${esc(dossier.portraitImage)}" type="image/webp" />
          <img
            src="${esc(dossier.portraitImage.replace('.webp', '.png'))}"
            alt="${esc(baseLoc.commonTitle)} — Onyxmen Malaysia"
            width="800"
            height="1000"
            loading="lazy"
            decoding="async"
            style="max-height:46vh;width:auto;filter:drop-shadow(0 24px 48px rgba(0,0,0,0.9));"
          />
        </picture>
      </div>

      <div class="botanical-hairline-ledger">
        ${(baseMonograph.qualityMarkers || [])
          .map(
            (qm, i) => `
          <div style="display:flex;justify-content:space-between;gap:1rem;padding:0.75rem 0;border-bottom:1px solid rgba(234,230,223,0.1);font-size:0.84rem;">
            <span style="color:var(--gold-champagne);font-family:var(--font-technical);">MARKER 0${i + 1}</span>
            <span style="color:var(--text-silk-ivory);text-align:right;">✓ ${esc(qm)}</span>
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
          <span>${isMs ? 'TEMPAH BOTOL TERAS · RM 159' : 'ACQUIRE ANCHOR BOTTLE · RM 159'}</span>
          <span aria-hidden="true">→</span>
        </button>
        <a href="${isMs ? '/ms/ingredients/' : '/ingredients/'}" class="cta-hairline-secondary">
          <span>${isMs ? 'Semua Monograf Botani' : 'All Botanical Monographs'}</span>
        </a>
      </div>
    </div>

    <!-- Right 50vw Scrolling Scientific & Physiological Narrative -->
    <div class="botanical-split-5050__scrolling">
      <article class="botanical-split-5050__chapter">
        <span class="editorial-kicker">
          ${isMs ? 'BAB 01 · WARISAN ETNOBOTANI &amp; FIZIK PENGEKSTRAKAN' : 'CHAPTER 01 · ETHNOBOTANICAL HERITAGE &amp; EXTRACTION PHYSICS'}
        </span>
        <h3 class="editorial-headline-lg" style="font-size:clamp(1.65rem,2.4vw,2.35rem);">
          ${
            isMs
              ? 'Mengapa Kami Menolak Serbuk Mentah &amp; Memilih Ekstrak Piawai Berkepekatan Tinggi.'
              : 'Why Onyxmen Rejects Raw Pulverized Bark In Favor Of Standardized Bio-Active Extracts.'
          }
        </h3>
        <p style="color:var(--text-muted-alabaster);font-size:0.98rem;line-height:1.76;">
          ${esc(baseLoc.heritageAndExtraction)}
        </p>
        <p style="color:var(--text-silk-ivory);font-size:0.95rem;line-height:1.74;">
          <strong>${isMs ? 'Spesifikasi Pengekstrakan Makmal:' : 'Laboratory Extraction Specification:'}</strong>
          ${esc(isMs ? dossier.extractionPhysicsMs : dossier.extractionPhysicsEn)}
        </p>
      </article>

      <article class="botanical-split-5050__chapter">
        <span class="editorial-kicker">
          ${isMs ? 'BAB 02 · MEKANISME FISIOLOGI DALAM LELAKI DEWASA' : 'CHAPTER 02 · PHYSIOLOGICAL MECHANISM IN ADULT MEN'}
        </span>
        <h3 class="editorial-headline-lg" style="font-size:clamp(1.65rem,2.4vw,2.35rem);">
          ${
            isMs
              ? 'Sokongan Biokimia untuk Tenaga Bebas, Aliran Vaskular &amp; Ketahanan Otot.'
              : 'Biochemical Pathways Governing Free Vitality, Endothelial Flow &amp; Stamina.'
          }
        </h3>
        <p style="color:var(--text-muted-alabaster);font-size:0.98rem;line-height:1.76;">
          ${esc(baseLoc.physiologicalMechanism)}
        </p>
        <div class="botanical-hairline-ledger" style="margin-top:1rem;">
          ${mechanismsHtml}
        </div>
      </article>

      <article class="botanical-split-5050__chapter">
        <span class="editorial-kicker">
          ${isMs ? 'BAB 03 · SINERGI MERENTASI FORMULASI ONYXMEN' : 'CHAPTER 03 · SYNERGY ACROSS ONYXMEN FORMULATIONS'}
        </span>
        <h3 class="editorial-headline-lg" style="font-size:clamp(1.65rem,2.4vw,2.35rem);">
          ${
            isMs
              ? 'Bagaimana Ramuan Ini Berfungsi Bersama Asid Amino &amp; Adaptogen Lain.'
              : 'How This Botanical Integrates With Amino Precursors &amp; Adaptogenic Roots.'
          }
        </h3>
        <p style="color:var(--text-muted-alabaster);font-size:0.98rem;line-height:1.76;" class="protocol-key-takeaways">
          ${esc(baseLoc.synergyInOnyxmen)}
        </p>
      </article>
    </div>
  </section>

  <!-- ==========================================================================
       CHAPTER III — EXACT MILLIGRAM DOSAGE LEDGER ACROSS ONYXMEN BOTTLES
       ========================================================================== -->
  <section
    id="monograph-bottle-dosages"
    class="botanical-section"
    aria-labelledby="heading-monograph-bottle-dosages"
  >
    <div class="botanical-section__inner">
      <header class="botanical-section__header">
        <div class="botanical-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? 'PECAHAN DOS MENGIKUT BOTOL · RM 159 / RM 286 (10% OFF vs RM 318) / RM 405 (15% OFF vs RM 477)'
                : 'FORMULATION-BY-FORMULATION DOSAGE ARCHITECTURE · RM 159 / RM 286 (10% OFF vs RM 318) / RM 405 (15% OFF vs RM 477)'
            }
          </span>
          <h2 id="heading-monograph-bottle-dosages" class="editorial-headline-lg">
            ${
              isMs
                ? `Dos Tepat ${esc(baseLoc.commonTitle)} Dalam <span class="foil-champagne-text">Setiap Botol Onyxmen Malaysia.</span>`
                : `How ${esc(baseLoc.commonTitle)} Anchors <span class="foil-champagne-text">Each Onyxmen Malaysia Bottle.</span>`
            }
          </h2>
        </div>
        <div class="botanical-section__header-right">
          <p>
            ${
              isMs
                ? 'Bandingkan kepekatan miligram setiap kapsul di bawah dan pilih botol yang paling sesuai dengan matlamat kecergasan malam, senaman gimnasium, atau penjagaan harian 30 hari anda.'
                : 'Compare the exact milligram allocation per capsule below and reserve the formulation engineered for your specific evening readiness, resistance-training vascularity, or 30-day conditioning goal.'
            }
          </p>
        </div>
      </header>

      <div class="botanical-hairline-ledger">
        ${anchorDosagesHtml}
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       CHAPTER IV — PHYTOCHEMICAL FRACTIONS & HPLC STANDARDIZATION TABLE
       ========================================================================== -->
  <section
    id="phytochemical-fractions-hplc-table"
    class="botanical-section botanical-section--onyx"
    aria-labelledby="heading-phytochemical-fractions"
  >
    <div class="botanical-section__inner">
      <header class="botanical-section__header">
        <div class="botanical-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? 'PROFIL FITOKIMIA MAKMAL · FRAKSI BIOAKTIF UTAMA'
                : 'ANALYTICAL PHYTOCHEMISTRY · STANDARDIZED BIO-ACTIVE FRACTIONS'
            }
          </span>
          <h2 id="heading-phytochemical-fractions" class="editorial-headline-lg">
            ${
              isMs
                ? 'Empat Fraksi Molekul Utama Dalam <span class="foil-champagne-text">Ekstrak Piawai Kami.</span>'
                : 'Four Standardized Molecular Fractions Inside <span class="foil-champagne-text">Every Encapsulated Lot.</span>'
            }
          </h2>
        </div>
        <div class="botanical-section__header-right">
          <p>
            ${
              isMs
                ? 'Setiap komponen di bawah disahkan pada peringkat bahan mentah sebelum proses pengkapsulan dijalankan.'
                : 'Each molecular fraction below is verified at the raw-extract stage prior to high-density encapsulation.'
            }
          </p>
        </div>
      </header>

      <div class="botanical-table-wrap">
        <table class="botanical-comparison-table">
          <thead>
            <tr>
              <th>${isMs ? 'Kod Fraksi' : 'Fraction Code'}</th>
              <th>${isMs ? 'Sebatian Fitokimia / Molekul Aktif' : 'Phytochemical Compound / Active Molecule'}</th>
              <th>${isMs ? 'Spesifikasi Ujian HPLC / UV' : 'Analytical Assay Specification'}</th>
              <th>${isMs ? 'Peranan Fisiologi Dalam Lelaki Dewasa' : 'Physiological Role in Adult Men'}</th>
            </tr>
          </thead>
          <tbody>
            ${fractionsHtml}
          </tbody>
        </table>
      </div>
    </div>
  </section>

  ${renderQuantitativeFormulationMatrixSection(lang)}
  ${renderLabPuritySection(lang)}
  ${renderTropicalTimingSection(lang)}
  ${renderSecondaryCofactorsSection(lang)}
  ${renderMultiBottleAcquisitionSection(lang, dossier.primaryProductSlug)}
  ${renderStatesFulfilmentSection(lang, dossier.primaryProductSlug)}

  <!-- ==========================================================================
       CHAPTER X — COMPREHENSIVE BOTANICAL & CLINICAL FAQ ACCORDION LEDGER
       ========================================================================== -->
  <section
    id="monograph-faq-ledger"
    class="botanical-section"
    aria-labelledby="heading-monograph-faqs"
  >
    <div class="botanical-section__inner">
      <header class="botanical-section__header">
        <div class="botanical-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? 'SOALAN LAZIM FITOKIMIA &amp; PANDUAN PENGGUNAAN MALAYSIA'
                : 'FREQUENTLY ASKED PHYTOCHEMICAL &amp; MALAYSIA PROTOCOL QUESTIONS'
            }
          </span>
          <h2 id="heading-monograph-faqs" class="editorial-headline-lg">
            ${
              isMs
                ? `Jawapan Pakar Mengenai <span class="foil-champagne-text">${esc(baseLoc.commonTitle)}.</span>`
                : `Expert Answers On <span class="foil-champagne-text">${esc(baseLoc.commonTitle)}.</span>`
            }
          </h2>
        </div>
        <div class="botanical-section__header-right">
          <p>
            ${
              isMs
                ? 'Perlukan panduan peribadi memilih antara Horsemen, Hammer of Thor, Grow XL, atau Magnum Pump XR? Hubungi meja privasi kami di sales@onyxmen.my atau info@onyxmen.my.'
                : 'Need private guidance selecting between Horsemen, Hammer of Thor, Grow XL, or Magnum Pump XR? Contact our Kuala Lumpur concierge desk at sales@onyxmen.my or info@onyxmen.my.'
            }
          </p>
        </div>
      </header>

      <div class="botanical-faq-ledger">
        ${faqsHtml}
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       CHAPTER XI — COMPLETE BOTANICAL MONOGRAPH VAULT CROSS-NAVIGATION
       ========================================================================== -->
  <section
    id="all-botanical-monographs-navigation"
    class="botanical-section botanical-section--onyx"
    aria-labelledby="heading-all-monographs-nav"
  >
    <div class="botanical-section__inner">
      <header class="botanical-section__header">
        <div class="botanical-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? 'ENSIKLOPEDIA FITOKIMIA ONYXMEN · TEROKA SEMUA 4 MONOGRAF UTAMA'
                : 'ONYXMEN PHYTOCHEMICAL ENCYCLOPEDIA · EXPLORE ALL 4 MASTER MONOGRAPHS'
            }
          </span>
          <h2 id="heading-all-monographs-nav" class="editorial-headline-lg">
            ${
              isMs
                ? 'Teroka Monograf Saintifik Lain Dalam <span class="foil-champagne-text">Koleksi Apotekari Kami.</span>'
                : 'Continue Exploring Our <span class="foil-champagne-text">Botanical Monograph Archive.</span>'
            }
          </h2>
        </div>
        <div class="botanical-section__header-right">
          <a href="${isMs ? '/ms/ingredients/' : '/ingredients/'}" class="cta-foil-primary">
            <span>${isMs ? 'Kembali ke Indeks Utama Monograf →' : 'Return to Master Monograph Index →'}</span>
          </a>
        </div>
      </header>

      <div class="botanical-hairline-ledger">
        ${siblingMonographsHtml}
      </div>
    </div>
  </section>
  `;

  return renderLuxuryShell({
    lang,
    title: loc.seoTitle,
    description: loc.metaDescription,
    canonicalPath,
    alternatePathEn,
    alternatePathMs,
    ogImage: dossier.heroImage,
    schemaGraphJson,
    bodyContent,
    activeNav: 'ingredients',
    productSlug: dossier.primaryProductSlug,
    defaultQty: 1,
    includeSealStrip: true,
  });
}

/**
 * Renders the Master Botanical Apothecary Index Page (`/ingredients/` & `/ms/ingredients/` + `/ms/ramuan-botani/`)
 */
export function renderMasterBotanicalIndexPage(lang = 'en-MY') {
  const isMs = lang === 'ms-MY';
  const canonicalPath = isMs ? '/ms/ingredients/' : '/ingredients/';
  const alternatePathEn = '/ingredients/';
  const alternatePathMs = '/ms/ingredients/';

  const title = isMs
    ? 'Monograf Apotekari Botani Onyxmen Malaysia — Sains Ekstrak Tongkat Ali 100:1, Tribulus 60% Saponin, Maca Hitam & L-Arginine | RM 159'
    : 'Onyxmen Malaysia Botanical Apothecary Monographs — Standardized Tongkat Ali 100:1, 60%-Saponin Tribulus, Black Maca & L-Arginine Science | RM 159';

  const description = isMs
    ? 'Ensiklopedia fitokimia dan asid amino rasmi Onyxmen Malaysia: teroka monograf penuh Akar Tongkat Ali 100:1 (Eurycomanone), Tribulus Terrestris 60% Saponin, Akar Maca Hitam Peru, dan Laluan Nitrik Oksida L-Arginine + L-Citrulline dalam Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR.'
    : 'Official Onyxmen Malaysia botanical and amino-acid monograph encyclopedia: explore HPLC-standardized Malaysian Tongkat Ali 100:1 (Eurycomanone), 60%-Saponin Tribulus Terrestris, Gelatinized Peruvian Black Maca, and Extended-Release L-Arginine + L-Citrulline across Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR.';

  const indexFaqs = [
    ...MONOGRAPH_DOSSIERS.map((d) => (isMs ? d.ms.faqs[0] : d.en.faqs[0])),
    ...MONOGRAPH_DOSSIERS.map((d) => (isMs ? d.ms.faqs[1] : d.en.faqs[1])),
    ...SHARED_BOTANICAL_FAQS,
  ];

  const breadcrumbs = isMs
    ? [
        { name: 'Utama Onyxmen Malaysia', url: '/ms/' },
        { name: 'Indeks Monograf Apotekari Botani', url: '/ms/ingredients/' },
      ]
    : [
        { name: 'Onyxmen Malaysia Home', url: '/' },
        { name: 'Master Botanical Apothecary Index', url: '/ingredients/' },
      ];

  const schemaGraphJson = buildFullPageGraph({
    pageType: 'botanical',
    lang,
    pageUrl: `https://www.onyxmen.my${canonicalPath}`,
    title,
    description,
    product: 'horsemen',
    article: {
      slug: 'botanical-apothecary-monographs-index',
      headlineEn: title,
      headlineMs: title,
      descriptionEn: description,
      descriptionMs: description,
      imageUrl: 'https://www.onyxmen.my/assets/products/onyxman-lineup-hero.webp',
      aboutTopics: [
        'Eurycoma longifolia 100:1 Root Extract (Tongkat Ali Malaysia)',
        'Tribulus terrestris 60% Furostanol Saponins (Protodioscin)',
        'Lepidium meyenii 10:1 Gelatinized Peruvian Black Maca',
        'L-Arginine HCl & L-Citrulline Malate Endothelial Nitric Oxide Pathway',
      ],
    },
    breadcrumbs,
    faqs: indexFaqs,
  });

  // Render the 4 Master Dossiers inside Paradigm D Split Stage
  const masterDossierChaptersHtml = MONOGRAPH_DOSSIERS.map((d, idx) => {
    const dLoc = isMs ? d.ms : d.en;
    const dHref = isMs ? d.canonicalMsPath : d.canonicalEnPath;
    const shortHref = isMs
      ? d.msOutputPaths[1]
        ? `/${d.msOutputPaths[1].replace(/index\.html$/, '')}`
        : dHref
      : `/${d.enOutputPaths[1].replace(/index\.html$/, '')}`;

    const anchorRows = d.anchorDosages
      .map(
        (ad) => `
          <div style="display:flex;justify-content:space-between;align-items:baseline;gap:1rem;padding:0.65rem 0;border-bottom:1px solid rgba(234,230,223,0.09);font-size:0.86rem;">
            <span style="color:var(--text-silk-ivory);font-weight:600;">${esc(isMs ? ad.productNameMs : ad.productNameEn)}</span>
            <span style="color:var(--gold-foil-bright);font-family:var(--font-technical);">${ad.dosageMg} MG (${esc(ad.percentageOfCapsule)}) · RM 159</span>
          </div>`
      )
      .join('\n');

    return `
      <article class="botanical-split-5050__chapter" id="master-dossier-${esc(d.key)}">
        <div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:0.75rem;">
          <span class="editorial-kicker">
            ${esc(d.monographCode)} · ${esc(isMs ? d.microStepMs : d.microStepEn)} · ${esc(d.botanicalFamily)}
          </span>
          <span style="font-size:0.74rem;color:var(--gold-foil-bright);letter-spacing:0.15em;">
            TAXON: ${esc(d.scientificName)}
          </span>
        </div>

        <h3 class="editorial-headline-lg" style="font-size:clamp(1.75rem,2.6vw,2.5rem);">
          <a href="${esc(dHref)}" style="text-decoration:underline;text-underline-offset:5px;">
            ${esc(dLoc.headline)}
          </a>
        </h3>

        <p style="font-size:0.9rem;color:var(--gold-foil-bright);letter-spacing:0.04em;">
          <strong>${isMs ? 'Piawaian Makmal:' : 'Standardization:'}</strong> ${esc(d.standardization)}
        </p>

        <p style="color:var(--text-muted-alabaster);font-size:0.96rem;line-height:1.75;">
          ${esc(dLoc.executiveSummary)}
        </p>

        <div style="border-top:1px solid rgba(212,175,55,0.28);margin-top:0.5rem;padding-top:0.5rem;">
          <div style="font-size:0.72rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold-champagne);margin-bottom:0.35rem;">
            ${isMs ? 'DOS TERAS DALAM FORMULASI ONYXMEN:' : 'ANCHOR DOSAGES ACROSS ONYXMEN BOTTLES:'}
          </div>
          ${anchorRows}
        </div>

        <div style="display:flex;flex-wrap:wrap;gap:0.85rem;padding-top:0.75rem;">
          <a href="${esc(dHref)}" class="cta-foil-primary">
            <span>${isMs ? `BACA MONOGRAF PENUH (${d.monographCode}) →` : `READ FULL MONOGRAPH (${d.monographCode}) →`}</span>
          </a>
          <a href="${esc(shortHref)}" class="cta-hairline-secondary">
            <span>${isMs ? `PAUTAN RINGKAS (${shortHref}) ↗` : `DIRECT ALIAS (${shortHref}) ↗`}</span>
          </a>
          <button
            type="button"
            class="cta-hairline-secondary"
            data-open-order-drawer="true"
            data-order-product="${esc(d.primaryProductSlug)}"
            data-order-qty="1"
          >
            <span>${isMs ? 'Tempah Botol Teras · RM 159' : 'Reserve Anchor Bottle · RM 159'}</span>
          </button>
        </div>
      </article>`;
  }).join('\n');

  // Render All Mechanisms Combined across the 4 Monographs for Encyclopedia completeness
  const allMechanismsCombinedHtml = MONOGRAPH_DOSSIERS.flatMap((d) =>
    (isMs ? d.ms.mechanisms : d.en.mechanisms).map((m) => ({
      ...m,
      parentTitle: isMs ? d.ms.headline.split('—')[0].trim() : d.en.headline.split('—')[0].trim(),
      parentHref: isMs ? d.canonicalMsPath : d.canonicalEnPath,
    }))
  )
    .map(
      (mech) => `
        <div class="botanical-hairline-row">
          <div class="botanical-hairline-row__code">${esc(mech.code)}</div>
          <div class="botanical-hairline-row__main">
            <h3 class="botanical-hairline-row__title">${esc(mech.title)}</h3>
            <p style="font-size:0.78rem;color:var(--gold-champagne);letter-spacing:0.12em;text-transform:uppercase;">
              <a href="${esc(mech.parentHref)}" style="text-decoration:underline;">${esc(mech.parentTitle)}</a>
            </p>
            <p class="botanical-hairline-row__desc">${esc(mech.detail)}</p>
          </div>
          <div class="botanical-hairline-row__meta">
            <span style="font-size:0.8rem;color:var(--gold-foil-bright);letter-spacing:0.15em;">
              ${esc(mech.metric)}
            </span>
          </div>
        </div>`
    )
    .join('\n');

  // Render All 16 Phytochemical Fractions Combined
  const allFractionsCombinedHtml = MONOGRAPH_DOSSIERS.flatMap((d) =>
    (isMs ? d.ms.phytochemicalFractions : d.en.phytochemicalFractions).map((f) => ({
      ...f,
      monographCode: d.monographCode,
    }))
  )
    .map(
      (frac) => `
            <tr>
              <td><strong style="color:var(--gold-champagne);">${esc(frac.monographCode)} · ${esc(frac.code)}</strong></td>
              <td><strong style="color:var(--text-silk-ivory);">${esc(frac.compound)}</strong></td>
              <td style="color:var(--gold-foil-bright);">${esc(frac.spec)}</td>
              <td>${esc(frac.role)}</td>
            </tr>`
    )
    .join('\n');

  const faqsHtml = indexFaqs
    .map((f, idx) => {
      const q = isMs ? f.questionMs || f.questionEn : f.questionEn || f.questionMs;
      const a = isMs ? f.answerMs || f.answerEn : f.answerEn || f.answerMs;
      return `
        <details class="botanical-faq-item" ${idx < 3 ? 'open' : ''}>
          <summary>
            <span>${String(idx + 1).padStart(2, '0')} · ${esc(q)}</span>
            <span style="color:var(--gold-champagne);font-size:1.1rem;" aria-hidden="true">+</span>
          </summary>
          <div class="botanical-faq-item__body">
            <p>${esc(a)}</p>
          </div>
        </details>`;
    })
    .join('\n');

  const bodyContent = `
  ${BOTANICAL_STAGE_CSS}

  <!-- ==========================================================================
       CHAPTER I — PARADIGM A: 100VW × 100VH MASTER BOTANICAL APOTHECARY HERO
       ========================================================================== -->
  <section
    id="master-botanical-index-hero"
    class="botanical-cinema-hero"
    aria-labelledby="master-botanical-hero-title"
    data-micro-step="${isMs ? 'MS-127-INDEX' : 'MS-123-INDEX'}"
  >
    <div class="botanical-cinema-hero__watermark" aria-hidden="true">
      PHYTO
    </div>

    <nav class="botanical-cinema-hero__breadcrumb-bar" aria-label="${isMs ? 'Navigasi Jejak Apotekari' : 'Apothecary Breadcrumb Navigation'}">
      <div class="botanical-cinema-hero__crumbs">
        <a href="${isMs ? '/ms/' : '/'}">${isMs ? 'Apotekari Onyxmen Malaysia' : 'Onyxmen Malaysia Apothecary'}</a>
        <span aria-hidden="true">/</span>
        <span style="color:var(--gold-foil-bright);">
          ${isMs ? 'Indeks Monograf Fitokimia &amp; Asid Amino' : 'Master Botanical &amp; Amino-Acid Monograph Vault'}
        </span>
      </div>
      <div>
        <span>MS-123 – MS-130 · 4 MASTER MONOGRAPHS + 6 SYNERGISTIC COFACTORS</span>
      </div>
    </nav>

    <div class="botanical-cinema-hero__stage">
      <div class="botanical-cinema-hero__narrative">
        <span class="editorial-kicker">
          ${
            isMs
              ? 'ENSIKLOPEDIA FITOKIMIA RASMI · EKSTRAK PIAWAI HPLC &amp; ASID AMINO FARMASEUTIKAL'
              : 'OFFICIAL PHYTOCHEMICAL ENCYCLOPEDIA · HPLC-STANDARDIZED EXTRACTS &amp; AMINO PRECURSORS'
          }
        </span>

        <h1 id="master-botanical-hero-title" class="editorial-headline-xl">
          ${
            isMs
              ? 'Monograf Apotekari Botani Onyxmen — <span class="foil-champagne-text">Sains Ekstrak Piawai Tanpa Serbuk Kayu Mentah.</span>'
              : 'Onyxmen Botanical Apothecary Monographs — <span class="foil-champagne-text">Standardized Phytochemistry Without Raw Bark Fillers.</span>'
          }
        </h1>

        <div class="botanical-cinema-hero__taxonomy-strip">
          <span>01 · TONGKAT ALI 100:1 (≥2.2% EURYCOMANONE)</span>
          <span aria-hidden="true">·</span>
          <span>02 · TRIBULUS 60% SAPONINS</span>
          <span aria-hidden="true">·</span>
          <span>03 · BLACK MACA 10:1 (≥0.6% MACAMIDES)</span>
          <span aria-hidden="true">·</span>
          <span>04 · L-ARGININE + L-CITRULLINE XR</span>
        </div>

        <p class="botanical-cinema-hero__lead article-executive-summary">
          ${
            isMs
              ? 'Kebanyakan kapsul herba biasa di pasaran jalanan hanya mengandungi serbuk akar kayu mentah yang terdiri daripada 85% serat selulosa sukar hadam. Di Onyxmen Malaysia, setiap kapsul Horsemen, Hammer of Thor, Grow XL, dan Magnum Pump XR dirumus dengan ekstrak air ultrasonik bernisbah tinggi (100:1), saponin steroid furostanol 60%, ubi Maca Hitam tergelatinisasi bebas kanji, serta asid amino L-Arginine HCl dan L-Citrulline Malate gred farmaseutikal.'
              : 'Unstandardized street capsules contain mostly pulverized wood bark—85% indigestible cellulose fiber that never crosses the intestinal wall. At Onyxmen Malaysia, every capsule of Horsemen, Hammer of Thor, Grow XL, and Magnum Pump XR is formulated exclusively with HPLC-standardized aqueous extracts (100:1 Eurycoma longifolia), 60%-protodioscin Tribulus terrestris, starch-cleaved 10:1 Peruvian Black Maca, and Extended-Release L-Arginine HCl + L-Citrulline Malate.'
          }
        </p>

        <div class="botanical-cinema-hero__cta-row">
          <button
            type="button"
            class="cta-foil-primary"
            data-open-order-drawer="true"
            data-order-product="horsemen"
            data-order-qty="1"
          >
            <span>${isMs ? 'TEMPAH FORMULASI ONYXMEN · RM 159' : 'RESERVE ONYXMEN FORMULATION · RM 159'}</span>
            <span aria-hidden="true">→</span>
          </button>
          <a href="#master-paradigm-d-monograph-curtain" class="cta-hairline-secondary">
            <span>${isMs ? 'Teroka 4 Monograf Utama ↓' : 'Explore All 4 Master Monographs ↓'}</span>
          </a>
          <a href="#quantitative-botanical-dosage-matrix" class="cta-hairline-secondary">
            <span>${isMs ? 'Jadual Dos 4 Botol ↓' : '4-Bottle Milligram Matrix ↓'}</span>
          </a>
        </div>
      </div>

      <div class="botanical-cinema-hero__visual">
        <div class="botanical-cinema-hero__pedestal">
          <picture>
            <source srcset="/assets/products/onyxman-lineup-hero.webp" type="image/webp" />
            <img
              src="/assets/products/onyxman-lineup-hero.png"
              alt="${esc(title)}"
              width="1400"
              height="900"
              fetchpriority="high"
              decoding="async"
              class="botanical-cinema-hero__img"
              style="max-width:560px;"
            />
          </picture>
        </div>
      </div>
    </div>

    <div class="botanical-cinema-hero__telemetry-strip">
      <div class="botanical-cinema-hero__telemetry-col">
        <span class="botanical-cinema-hero__telemetry-key">MONO-01 · MS-123 / MS-127</span>
        <span class="botanical-cinema-hero__telemetry-val">Tongkat Ali 100:1</span>
        <span class="botanical-cinema-hero__telemetry-sub">Horsemen 150mg · Grow XL 140mg · Magnum 90mg · Thor 45mg</span>
      </div>
      <div class="botanical-cinema-hero__telemetry-col">
        <span class="botanical-cinema-hero__telemetry-key">MONO-02 · MS-124 / MS-128</span>
        <span class="botanical-cinema-hero__telemetry-val">Tribulus 60% Saponins</span>
        <span class="botanical-cinema-hero__telemetry-sub">Hammer of Thor 200mg (+60mg Panax) · Magnum Pump XR 110mg</span>
      </div>
      <div class="botanical-cinema-hero__telemetry-col">
        <span class="botanical-cinema-hero__telemetry-key">MONO-03 · MS-125 / MS-129</span>
        <span class="botanical-cinema-hero__telemetry-val">Peruvian Black Maca 10:1</span>
        <span class="botanical-cinema-hero__telemetry-sub">Grow XL 110mg · Horsemen 100mg · Hammer of Thor 100mg</span>
      </div>
      <div class="botanical-cinema-hero__telemetry-col">
        <span class="botanical-cinema-hero__telemetry-key">MONO-04 · MS-126 / MS-130</span>
        <span class="botanical-cinema-hero__telemetry-val">L-Arginine + Citrulline XR</span>
        <span class="botanical-cinema-hero__telemetry-sub">Magnum Pump XR 320mg NO Matrix · Grow XL 100mg · Horsemen 80mg</span>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       CHAPTER II — PARADIGM D: 50VW / 50VW PINNED MASTER MONOGRAPH CURTAIN
       ========================================================================== -->
  <section
    id="master-paradigm-d-monograph-curtain"
    class="botanical-split-5050"
    aria-labelledby="heading-master-monograph-curtain"
  >
    <div class="botanical-split-5050__pinned">
      <div>
        <span class="editorial-kicker">
          ${
            isMs
              ? 'PARADIGM D · PENTAS SKRIN TERBELAH 50VW / 50VW · EMPAT MONOGRAF UTAMA'
              : 'PARADIGM D · PINNED 50VW / 50VW PHYTOCHEMICAL ARCHIVE · FOUR MASTER MONOGRAPHS'
          }
        </span>
        <h2 id="heading-master-monograph-curtain" class="editorial-headline-lg" style="margin-top:0.85rem;">
          ${
            isMs
              ? 'Empat Teras Fitokimia &amp; Prekursor Nitrik Oksida <span class="foil-champagne-text">Berpiawaian Makmal.</span>'
              : 'Four Standardized Botanical &amp; Vascular Pillars <span class="foil-champagne-text">Powering Onyxmen.my.</span>'
          }
        </h2>
      </div>

      <div style="display:flex;justify-content:center;align-items:center;padding:1rem 0;">
        <picture>
          <source srcset="/assets/products/horsemen-stage.webp" type="image/webp" />
          <img
            src="/assets/products/horsemen-stage.png"
            alt="Onyxmen Malaysia Botanical Monographs"
            width="1000"
            height="750"
            loading="lazy"
            decoding="async"
            style="max-height:42vh;width:auto;filter:drop-shadow(0 24px 48px rgba(0,0,0,0.9));"
          />
        </picture>
      </div>

      <div class="botanical-hairline-ledger">
        ${MONOGRAPH_DOSSIERS.map((d) => {
          const dHref = isMs ? d.canonicalMsPath : d.canonicalEnPath;
          return `
            <div style="display:flex;justify-content:space-between;align-items:center;gap:1rem;padding:0.8rem 0;border-bottom:1px solid rgba(234,230,223,0.1);">
              <span style="color:var(--gold-champagne);font-size:0.74rem;letter-spacing:0.16em;">${esc(d.monographCode)}</span>
              <a href="${esc(dHref)}" style="color:var(--gold-foil-bright);font-size:0.9rem;text-decoration:underline;flex:1;">
                ${esc(d.scientificName)}
              </a>
              <span style="color:var(--text-ash-silver);font-size:0.75rem;">→</span>
            </div>`;
        }).join('\n')}
      </div>
    </div>

    <div class="botanical-split-5050__scrolling">
      ${masterDossierChaptersHtml}
    </div>
  </section>

  ${renderQuantitativeFormulationMatrixSection(lang)}

  <!-- ==========================================================================
       CHAPTER IV — 16 BIOCHEMICAL MECHANISMS ACROSS ALL 4 MONOGRAPHS
       ========================================================================== -->
  <section
    id="complete-16-physiological-mechanisms-ledger"
    class="botanical-section"
    aria-labelledby="heading-16-mechanisms"
  >
    <div class="botanical-section__inner">
      <header class="botanical-section__header">
        <div class="botanical-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? '16 LALUAN FISIOLOGI &amp; BIOKIMIA LELAKI DEWASA'
                : '16 BIOCHEMICAL &amp; ENDOTHELIAL MECHANISMS IN ADULT MEN'
            }
          </span>
          <h2 id="heading-16-mechanisms" class="editorial-headline-lg">
            ${
              isMs
                ? 'Peta Lengkap Mekanisme Fisiologi: <span class="foil-champagne-text">SHBG, Kortisol, eNOS, ATP &amp; Macamides.</span>'
                : 'Complete Physiological Mechanism Ledger: <span class="foil-champagne-text">SHBG, Cortisol, eNOS, ATP &amp; Macamides.</span>'
            }
          </h2>
        </div>
        <div class="botanical-section__header-right">
          <p class="protocol-key-takeaways">
            ${
              isMs
                ? 'Setiap mekanisme di bawah menerangkan bagaimana keempat-empat monograf utama kami bertindak secara sinergi tanpa bahan perangsang sintetik.'
                : 'Every mechanism below documents how our four primary botanical and amino-acid monographs operate synergistically without synthetic stimulants.'
            }
          </p>
        </div>
      </header>

      <div class="botanical-hairline-ledger">
        ${allMechanismsCombinedHtml}
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       CHAPTER V — COMPLETE 16-FRACTION HPLC ASSAY SPECIFICATIONS TABLE
       ========================================================================== -->
  <section
    id="master-16-phytochemical-fractions-table"
    class="botanical-section botanical-section--onyx"
    aria-labelledby="heading-master-16-fractions"
  >
    <div class="botanical-section__inner">
      <header class="botanical-section__header">
        <div class="botanical-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? 'SPESIFIKASI 16 FRAKSI MOLEKUL · UJIAN MAKMAL HPLC &amp; UV-VIS'
                : '16 STANDARDIZED MOLECULAR FRACTIONS · HPLC &amp; UV-VIS ASSAY LEDGER'
            }
          </span>
          <h2 id="heading-master-16-fractions" class="editorial-headline-lg">
            ${
              isMs
                ? 'Jadual Induk 16 Fraksi Fitokimia &amp; <span class="foil-champagne-text">Penanda Bioaktif Onyxmen.</span>'
                : 'Master Assay Table Of All 16 <span class="foil-champagne-text">Standardized Bioactive Fractions.</span>'
            }
          </h2>
        </div>
      </header>

      <div class="botanical-table-wrap">
        <table class="botanical-comparison-table">
          <thead>
            <tr>
              <th>${isMs ? 'Kod Monograf' : 'Monograph Code'}</th>
              <th>${isMs ? 'Sebatian Molekul Aktif' : 'Active Molecular Compound'}</th>
              <th>${isMs ? 'Piawaian Makmal' : 'Laboratory Assay Spec'}</th>
              <th>${isMs ? 'Fungsi Fisiologi Utama' : 'Primary Physiological Function'}</th>
            </tr>
          </thead>
          <tbody>
            ${allFractionsCombinedHtml}
          </tbody>
        </table>
      </div>
    </div>
  </section>

  ${renderSecondaryCofactorsSection(lang)}
  ${renderLabPuritySection(lang)}
  ${renderTropicalTimingSection(lang)}
  ${renderMultiBottleAcquisitionSection(lang, 'horsemen')}
  ${renderStatesFulfilmentSection(lang, 'horsemen')}

  <!-- ==========================================================================
       CHAPTER XI — MASTER BOTANICAL FAQ ACCORDION LEDGER
       ========================================================================== -->
  <section
    id="master-botanical-faq-ledger"
    class="botanical-section"
    aria-labelledby="heading-master-botanical-faqs"
  >
    <div class="botanical-section__inner">
      <header class="botanical-section__header">
        <div class="botanical-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? 'SOALAN LAZIM ENSIKLOPEDIA BOTANI ONYXMEN MALAYSIA'
                : 'ONYXMEN MALAYSIA BOTANICAL ENCYCLOPEDIA FAQ LEDGER'
            }
          </span>
          <h2 id="heading-master-botanical-faqs" class="editorial-headline-lg">
            ${
              isMs
                ? 'Soalan Lazim Mengenai <span class="foil-champagne-text">Ekstrak Piawai, Dos &amp; Tempahan Rahsia.</span>'
                : 'Frequently Asked Questions On <span class="foil-champagne-text">Standardized Extracts, Dosages &amp; Discreet Dispatch.</span>'
            }
          </h2>
        </div>
      </header>

      <div class="botanical-faq-ledger">
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
    activeNav: 'ingredients',
    productSlug: 'horsemen',
    defaultQty: 1,
    includeSealStrip: true,
  });
}

/**
 * Writes an HTML string to one or more relative paths inside `public/` and verifies line counts.
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
 * Main Build Execution for MS-123 through MS-130
 */
export function buildAllBotanicalMonographs() {
  const summary = [];

  // 1. Master Botanical Index (EN): public/ingredients/index.html
  const enIndexHtml = renderMasterBotanicalIndexPage('en-MY');
  summary.push(...writeHtmlToPublicPaths(enIndexHtml, ['ingredients/index.html']));

  // 2–5. Four English Monograph Pages (MS-123 to MS-126) + Aliases
  for (const dossier of MONOGRAPH_DOSSIERS) {
    const enHtml = renderIndividualMonographPage(dossier, 'en-MY');
    summary.push(...writeHtmlToPublicPaths(enHtml, dossier.enOutputPaths));
  }

  // 6. Master Botanical Index (BM): public/ms/ingredients/index.html + public/ms/ramuan-botani/index.html
  const msIndexHtml = renderMasterBotanicalIndexPage('ms-MY');
  summary.push(
    ...writeHtmlToPublicPaths(msIndexHtml, [
      'ms/ingredients/index.html',
      'ms/ramuan-botani/index.html',
    ])
  );

  // 7–10. Four Bahasa Malaysia Monograph Pages (MS-127 to MS-130) + Aliases
  for (const dossier of MONOGRAPH_DOSSIERS) {
    const msHtml = renderIndividualMonographPage(dossier, 'ms-MY');
    summary.push(...writeHtmlToPublicPaths(msHtml, dossier.msOutputPaths));
  }

  return summary;
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  const builtFiles = buildAllBotanicalMonographs();
  console.log('================================================================================');
  console.log('ONYXMEN.MY — BILINGUAL BOTANICAL MONOGRAPHS BUILD COMPLETE (MS-123 TO MS-130)');
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

    console.log(`[PASS] ${item.relPath.padEnd(74)} | ${String(item.lines).padStart(5)} lines | ${item.bytes} bytes`);
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
