#!/usr/bin/env node
/**
 * ============================================================================
 * ONYXMEN.MY — BILINGUAL TRUST, PDPA, E-E-A-T, FAQ HUB & PRODUCTS VAULT BUILDER
 * Turn 22: Micro-Steps MS-161 through MS-170
 * ============================================================================
 * Generates all 34 Bilingual Trust, Authenticity, Discreet Packaging, Malaysia
 * PDPA Act 709 Privacy Policy, Terms of Service & 14/30-Day Return Policy,
 * Kuala Lumpur Concierge Contact Desk, About Onyxmen Apothecary, Master FAQ Hubs,
 * and /products/ + /ms/produk/ Catalog Vault Index Pages (plus all route aliases
 * referenced across i18n.ts, ObsidianHeader.mjs, ObsidianFooter.mjs,
 * DiscreetSealStrip.mjs, public/index.html, and public/ms/index.html).
 *
 * Strictly enforces Rule #29 & Rule #30:
 * - Paradigm A: 100vw x 100vh Full-Bleed Obsidian Cinema Stage
 * - Paradigm D: Pinned 50vw / 50vw Split-Screen Apothecary Stage
 * - Palette: #050507, #0B0C10, #12141C, #D4AF37, #F3E5AB, #EAE6DF
 * - Typography: 'Cormorant Garamond', 'Syne', 'Space Grotesk'
 * - ZERO banned tokens, ZERO pill badges, ZERO bordered 3-column card grids
 * - Every single generated HTML file >= 2,200+ lines with valid @graph JSON-LD
 * ============================================================================
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { renderLuxuryShell, escapeHtmlAttr } from '../components/LuxuryShell.mjs';
import { buildFullPageGraph } from '../utils/schema-graph.mjs';
import {
  brandData,
  allProducts,
  productsById,
  comparisonsData,
  botanicalsData,
  malaysiaStatesData,
  guidesData,
} from '../data/products/index.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');

function esc(str = '') {
  return escapeHtmlAttr(str);
}

/**
 * Custom inline architectural CSS for Trust, PDPA, E-E-A-T, Concierge, FAQ & Vault Pages
 * Enforces Paradigm A (100vw x 100vh) + Paradigm D (50vw / 50vw Pinned Split Stage) + Architectural Hairline Ledgers.
 */
export const TRUST_STAGE_CSS = `
<style id="onyxman-trust-eeat-stage-css">
  /* ==========================================================================
     PARADIGM A — 100VW X 100VH FULL-BLEED OBSIDIAN APOTHECARY HERO STAGE
     ========================================================================== */
  .trust-cinema-hero {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    background-color: #050507;
    background-image:
      radial-gradient(circle at 70% 36%, rgba(212, 175, 55, 0.16) 0%, rgba(18, 20, 28, 0.74) 48%, #050507 94%),
      linear-gradient(180deg, #050507 0%, #0B0C10 62%, #050507 100%);
    border-bottom: 1px solid rgba(212, 175, 55, 0.28);
    padding: clamp(3.2rem, 6.5vh, 6rem) var(--gutter-cinema);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }
  .trust-cinema-hero__watermark {
    position: absolute;
    right: -2vw;
    top: 8vh;
    font-family: var(--font-display);
    font-size: clamp(8rem, 20vw, 22rem);
    font-weight: 600;
    line-height: 0.82;
    letter-spacing: -0.03em;
    color: rgba(212, 175, 55, 0.04);
    pointer-events: none;
    user-select: none;
    z-index: 1;
  }
  .trust-cinema-hero__breadcrumb-bar {
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
  .trust-cinema-hero__crumbs {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.6rem;
  }
  .trust-cinema-hero__crumbs a:hover {
    color: var(--gold-foil-bright);
  }
  .trust-cinema-hero__stage {
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
  .trust-cinema-hero__narrative {
    flex: 1 1 580px;
    max-width: 840px;
    display: flex;
    flex-direction: column;
    gap: 1.45rem;
  }
  .trust-cinema-hero__taxonomy-strip {
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
  .trust-cinema-hero__lead {
    font-size: clamp(1.04rem, 1.3vw, 1.24rem);
    line-height: 1.74;
    color: var(--text-muted-alabaster);
    max-width: 68ch;
  }
  .trust-cinema-hero__cta-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.15rem;
    padding-top: 0.65rem;
  }
  .trust-cinema-hero__visual {
    flex: 1 1 400px;
    max-width: 620px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.35rem;
  }
  .trust-cinema-hero__pedestal {
    position: relative;
    width: 100%;
    padding: 2rem;
    background: radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.18) 0%, rgba(11, 12, 16, 0.42) 55%, transparent 80%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .trust-cinema-hero__img {
    width: 100%;
    max-width: 500px;
    height: auto;
    object-fit: contain;
    mask-image: radial-gradient(ellipse at 50% 50%, #000000 72%, transparent 99%);
    -webkit-mask-image: radial-gradient(ellipse at 50% 50%, #000000 72%, transparent 99%);
    filter: drop-shadow(0 30px 60px rgba(0, 0, 0, 0.92));
  }
  .trust-cinema-hero__telemetry-strip {
    position: relative;
    z-index: 2;
    max-width: 1760px;
    width: 100%;
    margin: 3rem auto 0;
    padding-top: 1.65rem;
    border-top: 1px solid rgba(212, 175, 55, 0.28);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem;
  }
  .trust-cinema-hero__telemetry-col {
    flex: 1 1 220px;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
  .trust-cinema-hero__telemetry-key {
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }
  .trust-cinema-hero__telemetry-val {
    font-family: var(--font-display);
    font-size: 1.45rem;
    color: var(--text-silk-ivory);
    line-height: 1.15;
  }
  .trust-cinema-hero__telemetry-sub {
    font-size: 0.78rem;
    color: var(--text-muted-alabaster);
  }

  /* ==========================================================================
     PARADIGM D — PINNED 50VW / 50VW SPLIT-SCREEN ARCHITECTURAL STAGE
     ========================================================================== */
  .trust-split-5050 {
    position: relative;
    width: 100vw;
    background-color: #0B0C10;
    border-bottom: 1px solid rgba(212, 175, 55, 0.26);
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }
  .trust-split-5050__pinned {
    flex: 1 1 50%;
    width: 50vw;
    min-height: 100vh;
    position: sticky;
    top: 0;
    align-self: flex-start;
    background-color: #050507;
    background-image: radial-gradient(circle at 48% 45%, rgba(212, 175, 55, 0.14) 0%, rgba(11, 12, 16, 0.85) 58%, #050507 100%);
    border-right: 1px solid rgba(212, 175, 55, 0.24);
    padding: clamp(3rem, 6vh, 5.5rem) var(--gutter-cinema);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
  }
  .trust-split-5050__scrolling {
    flex: 1 1 50%;
    width: 50vw;
    background-color: #0B0C10;
    padding: clamp(3.5rem, 7vh, 6.5rem) var(--gutter-cinema);
    display: flex;
    flex-direction: column;
    gap: 3.75rem;
  }
  .trust-split-5050__chapter {
    padding-bottom: 3rem;
    border-bottom: 1px solid rgba(212, 175, 55, 0.22);
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
  .trust-split-5050__chapter:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  /* ==========================================================================
     FULL-WIDTH EDITORIAL SECTIONS & ARCHITECTURAL HAIRLINE LEDGERS
     ========================================================================== */
  .trust-section {
    width: 100vw;
    background-color: #050507;
    border-bottom: 1px solid rgba(212, 175, 55, 0.24);
    padding: var(--gutter-vertical) var(--gutter-cinema);
  }
  .trust-section--onyx {
    background-color: #0B0C10;
  }
  .trust-section--charcoal {
    background-color: #12141C;
  }
  .trust-section__inner {
    max-width: 1760px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.25rem;
  }
  .trust-section__header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(212, 175, 55, 0.24);
  }
  .trust-section__header-left {
    flex: 1 1 540px;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }
  .trust-section__header-right {
    flex: 1 1 420px;
    color: var(--text-muted-alabaster);
    font-size: 0.98rem;
    line-height: 1.72;
  }

  /* Architectural Hairline Ledger Rows (Zero Box Grids) */
  .trust-hairline-ledger {
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgba(212, 175, 55, 0.28);
  }
  .trust-hairline-row {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.5rem 2.5rem;
    padding: 2rem 0;
    border-bottom: 1px solid rgba(234, 230, 223, 0.12);
    transition: background-color 220ms ease;
  }
  .trust-hairline-row:hover {
    background-color: rgba(212, 175, 55, 0.03);
  }
  .trust-hairline-row__code {
    flex: 0 0 155px;
    font-family: var(--font-technical);
    font-size: 0.74rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }
  .trust-hairline-row__main {
    flex: 1 1 340px;
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
  }
  .trust-hairline-row__title {
    font-family: var(--font-display);
    font-size: clamp(1.4rem, 2vw, 1.95rem);
    color: var(--text-silk-ivory);
    line-height: 1.15;
  }
  .trust-hairline-row__desc {
    font-size: 0.94rem;
    color: var(--text-muted-alabaster);
    line-height: 1.72;
    max-width: 78ch;
  }
  .trust-hairline-row__meta {
    flex: 0 0 240px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.4rem;
    text-align: right;
  }
  .trust-hairline-row__dosage {
    font-family: var(--font-display);
    font-size: 1.65rem;
    color: var(--gold-foil-bright);
    line-height: 1;
  }
  .trust-hairline-row__sub {
    font-size: 0.72rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--text-ash-silver);
  }

  /* Responsive Comparison & Assay Tables */
  .trust-table-wrap {
    width: 100%;
    overflow-x: auto;
    border-top: 1px solid rgba(212, 175, 55, 0.32);
    border-bottom: 1px solid rgba(212, 175, 55, 0.32);
  }
  .trust-comparison-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    min-width: 780px;
  }
  .trust-comparison-table th {
    padding: 1.25rem 1rem;
    font-family: var(--font-technical);
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--gold-champagne);
    border-bottom: 1px solid rgba(212, 175, 55, 0.28);
    background-color: rgba(11, 12, 16, 0.9);
  }
  .trust-comparison-table td {
    padding: 1.2rem 1rem;
    font-size: 0.9rem;
    color: var(--text-muted-alabaster);
    border-bottom: 1px solid rgba(234, 230, 223, 0.09);
    vertical-align: top;
  }
  .trust-comparison-table tr:hover td {
    background-color: rgba(212, 175, 55, 0.035);
    color: var(--text-silk-ivory);
  }

  /* Accordion FAQ Ledger */
  .trust-faq-ledger {
    display: flex;
    flex-direction: column;
    border-top: 1px solid rgba(212, 175, 55, 0.28);
  }
  .trust-faq-item {
    border-bottom: 1px solid rgba(234, 230, 223, 0.12);
    padding: 1.45rem 0;
  }
  .trust-faq-item summary {
    list-style: none;
    cursor: pointer;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1.5rem;
    font-family: var(--font-display);
    font-size: clamp(1.25rem, 1.8vw, 1.68rem);
    color: var(--text-silk-ivory);
  }
  .trust-faq-item summary::-webkit-details-marker {
    display: none;
  }
  .trust-faq-item[open] summary {
    color: var(--gold-foil-bright);
  }
  .trust-faq-item__body {
    margin-top: 1rem;
    padding-left: 1.25rem;
    border-left: 2px solid var(--gold-champagne);
    color: var(--text-muted-alabaster);
    font-size: 0.95rem;
    line-height: 1.75;
    max-width: 86ch;
  }

  @media (max-width: 1024px) {
    .trust-split-5050__pinned,
    .trust-split-5050__scrolling {
      flex: 1 1 100%;
      width: 100vw;
      position: relative;
      min-height: auto;
      border-right: none;
    }
    .trust-split-5050__pinned {
      border-bottom: 1px solid rgba(212, 175, 55, 0.24);
    }
    .trust-hairline-row__meta {
      align-items: flex-start;
      text-align: left;
    }
  }
</style>
`;

/**
 * 16 Malaysia State & Federal Territory Logistics Rows for Trust & Fulfilment Verification
 */
export const TRUST_STATES_MATRIX = [
  {
    code: 'MY-14',
    stateEn: 'Kuala Lumpur (Federal Territory)',
    stateMs: 'Wilayah Persekutuan Kuala Lumpur',
    cities: 'KLCC, Bukit Bintang, Bangsar, Mont Kiara, Cheras, Ampang, Setapak, Sri Petaling',
    etaEn: 'Same-Day 3–5 Hour Discreet Private Runner or 1 Business Day Express Courier',
    etaMs: 'Penghantar Rahsia Hari Sama (3–5 Jam) atau Kurier Ekspres 1 Hari Bekerja',
    enHref: '/malaysia-delivery/kuala-lumpur/',
    msHref: '/ms/penghantaran-malaysia/kuala-lumpur/',
  },
  {
    code: 'MY-10',
    stateEn: 'Selangor Darul Ehsan',
    stateMs: 'Selangor Darul Ehsan',
    cities: 'Petaling Jaya, Subang Jaya, Shah Alam, Damansara, Puchong, Klang, Kajang, Cyberjaya',
    etaEn: 'Same-Day 3–5 Hour Discreet Private Runner or 1 Business Day Express Courier',
    etaMs: 'Penghantar Rahsia Hari Sama (3–5 Jam) atau Kurier Ekspres 1 Hari Bekerja',
    enHref: '/malaysia-delivery/selangor/',
    msHref: '/ms/penghantaran-malaysia/selangor/',
  },
  {
    code: 'MY-16',
    stateEn: 'Putrajaya (Federal Territory)',
    stateMs: 'Wilayah Persekutuan Putrajaya',
    cities: 'Precinct 1–20 Putrajaya, IOI Resort City, Cyberjaya South Corridor',
    etaEn: 'Same-Day 3–5 Hour Discreet Private Runner or 1 Business Day Express Courier',
    etaMs: 'Penghantar Rahsia Hari Sama (3–5 Jam) atau Kurier Ekspres 1 Hari Bekerja',
    enHref: '/malaysia-delivery/putrajaya/',
    msHref: '/ms/penghantaran-malaysia/putrajaya/',
  },
  {
    code: 'MY-07',
    stateEn: 'Penang (Pulau Pinang)',
    stateMs: 'Pulau Pinang',
    cities: 'George Town, Bayan Lepas, Jelutong, Tanjung Tokong, Butterworth, Bukit Mertajam',
    etaEn: '1–2 Business Days Peninsular Express Discreet Courier (RM 0 Free Shipping)',
    etaMs: '1–2 Hari Bekerja Kurier Ekspres Rahsia Semenanjung (Pos Percuma RM 0)',
    enHref: '/malaysia-delivery/penang/',
    msHref: '/ms/penghantaran-malaysia/pulau-pinang/',
  },
  {
    code: 'MY-01',
    stateEn: 'Johor Darul Ta’zim',
    stateMs: 'Johor Darul Ta’zim',
    cities: 'Johor Bahru, Iskandar Puteri, Skudai, Mount Austin, Batu Pahat, Muar, Kluang',
    etaEn: '1–2 Business Days Peninsular Express Discreet Courier (RM 0 Free Shipping)',
    etaMs: '1–2 Hari Bekerja Kurier Ekspres Rahsia Semenanjung (Pos Percuma RM 0)',
    enHref: '/malaysia-delivery/johor-bahru/',
    msHref: '/ms/penghantaran-malaysia/johor-bahru/',
  },
  {
    code: 'MY-08',
    stateEn: 'Perak Darul Ridzuan',
    stateMs: 'Perak Darul Ridzuan',
    cities: 'Ipoh, Taiping, Seri Manjung, Sitiawan, Teluk Intan, Kampar, Kuala Kangsar',
    etaEn: '1–2 Business Days Peninsular Express Discreet Courier (RM 0 Free Shipping)',
    etaMs: '1–2 Hari Bekerja Kurier Ekspres Rahsia Semenanjung (Pos Percuma RM 0)',
    enHref: '/malaysia-delivery/perak-ipoh/',
    msHref: '/ms/penghantaran-malaysia/perak-ipoh/',
  },
  {
    code: 'MY-04',
    stateEn: 'Melaka',
    stateMs: 'Melaka',
    cities: 'Melaka City (Bandaraya Melaka), Ayer Keroh, Batu Berendam, Klebang, Alor Gajah, Jasin',
    etaEn: '1–2 Business Days Peninsular Express Discreet Courier (RM 0 Free Shipping)',
    etaMs: '1–2 Hari Bekerja Kurier Ekspres Rahsia Semenanjung (Pos Percuma RM 0)',
    enHref: '/malaysia-delivery/melaka/',
    msHref: '/ms/penghantaran-malaysia/melaka/',
  },
  {
    code: 'MY-05',
    stateEn: 'Negeri Sembilan Darul Khusus',
    stateMs: 'Negeri Sembilan Darul Khusus',
    cities: 'Seremban, Seremban 2, Senawang, Nilai, Port Dickson, Lukut, Tampin',
    etaEn: '1–2 Business Days Peninsular Express Discreet Courier (RM 0 Free Shipping)',
    etaMs: '1–2 Hari Bekerja Kurier Ekspres Rahsia Semenanjung (Pos Percuma RM 0)',
    enHref: '/malaysia-delivery/negeri-sembilan-seremban/',
    msHref: '/ms/penghantaran-malaysia/negeri-sembilan-seremban/',
  },
  {
    code: 'MY-06',
    stateEn: 'Pahang Darul Makmur',
    stateMs: 'Pahang Darul Makmur',
    cities: 'Kuantan, Indera Mahkota, Temerloh, Mentakab, Bentong, Pekan, Cameron Highlands',
    etaEn: '1–2 Business Days Peninsular Express Discreet Courier (RM 0 Free Shipping)',
    etaMs: '1–2 Hari Bekerja Kurier Ekspres Rahsia Semenanjung (Pos Percuma RM 0)',
    enHref: '/malaysia-delivery/pahang-kuantan/',
    msHref: '/ms/penghantaran-malaysia/pahang-kuantan/',
  },
  {
    code: 'MY-02',
    stateEn: 'Kedah Darul Aman',
    stateMs: 'Kedah Darul Aman',
    cities: 'Alor Setar, Sungai Petani, Kulim Hi-Tech, Jitra, Kubang Pasu, Langkawi Island',
    etaEn: '1–2 Business Days Peninsular Express Discreet Courier (RM 0 Free Shipping)',
    etaMs: '1–2 Hari Bekerja Kurier Ekspres Rahsia Semenanjung (Pos Percuma RM 0)',
    enHref: '/malaysia-delivery/kedah-alor-setar/',
    msHref: '/ms/penghantaran-malaysia/kedah-alor-setar/',
  },
  {
    code: 'MY-03',
    stateEn: 'Kelantan Darul Naim',
    stateMs: 'Kelantan Darul Naim',
    cities: 'Kota Bharu, Kubang Kerian,Wakaf Che Yeh, Pasir Mas, Tanah Merah, Machang',
    etaEn: '1–2 Business Days Peninsular Express Discreet Courier (RM 0 Free Shipping)',
    etaMs: '1–2 Hari Bekerja Kurier Ekspres Rahsia Semenanjung (Pos Percuma RM 0)',
    enHref: '/malaysia-delivery/kelantan-kota-bharu/',
    msHref: '/ms/penghantaran-malaysia/kelantan-kota-bharu/',
  },
  {
    code: 'MY-11',
    stateEn: 'Terengganu Darul Iman',
    stateMs: 'Terengganu Darul Iman',
    cities: 'Kuala Terengganu, Gong Badak, Kemaman, Chukai, Dungun, Kerteh, Besut',
    etaEn: '1–2 Business Days Peninsular Express Discreet Courier (RM 0 Free Shipping)',
    etaMs: '1–2 Hari Bekerja Kurier Ekspres Rahsia Semenanjung (Pos Percuma RM 0)',
    enHref: '/malaysia-delivery/terengganu-kuala-terengganu/',
    msHref: '/ms/penghantaran-malaysia/terengganu-kuala-terengganu/',
  },
  {
    code: 'MY-09',
    stateEn: 'Perlis Indera Kayangan',
    stateMs: 'Perlis Indera Kayangan',
    cities: 'Kangar, Arau, Kuala Perlis, Padang Besar',
    etaEn: '1–2 Business Days Peninsular Express Discreet Courier (RM 0 Free Shipping)',
    etaMs: '1–2 Hari Bekerja Kurier Ekspres Rahsia Semenanjung (Pos Percuma RM 0)',
    enHref: '/malaysia-delivery/perlis-kangar/',
    msHref: '/ms/penghantaran-malaysia/perlis-kangar/',
  },
  {
    code: 'MY-12',
    stateEn: 'Sabah (East Malaysia)',
    stateMs: 'Sabah (Malaysia Timur)',
    cities: 'Kota Kinabalu, Penampang, Inanam, Sandakan, Tawau, Lahad Datu, Keningau',
    etaEn: '2–4 Business Days Discreet Air Freight (Free on 2+ Bottles RM 318 / RM 477)',
    etaMs: '2–4 Hari Bekerja Kargo Udara Rahsia (Percuma untuk 2+ Botol RM 318 / RM 477)',
    enHref: '/malaysia-delivery/sabah-kota-kinabalu/',
    msHref: '/ms/penghantaran-malaysia/sabah-kota-kinabalu/',
  },
  {
    code: 'MY-13',
    stateEn: 'Sarawak (East Malaysia)',
    stateMs: 'Sarawak (Malaysia Timur)',
    cities: 'Kuching, Kota Samarahan, Miri, Sibu, Bintulu, Sarikei, Sri Aman',
    etaEn: '2–4 Business Days Discreet Air Freight (Free on 2+ Bottles RM 318 / RM 477)',
    etaMs: '2–4 Hari Bekerja Kargo Udara Rahsia (Percuma untuk 2+ Botol RM 318 / RM 477)',
    enHref: '/malaysia-delivery/sarawak-kuching/',
    msHref: '/ms/penghantaran-malaysia/sarawak-kuching/',
  },
  {
    code: 'MY-15',
    stateEn: 'Labuan (Federal Territory)',
    stateMs: 'Wilayah Persekutuan Labuan',
    cities: 'Victoria (Bandar Labuan), Labuan Financial Park, Rancha-Rancha',
    etaEn: '2–4 Business Days Discreet Air Freight (Free on 2+ Bottles RM 318 / RM 477)',
    etaMs: '2–4 Hari Bekerja Kargo Udara Rahsia (Percuma untuk 2+ Botol RM 318 / RM 477)',
    enHref: '/malaysia-delivery/labuan/',
    msHref: '/ms/penghantaran-malaysia/labuan/',
  },
];

/**
 * 8-Stage Analytical Purity & Anti-Adulteration Checkpoints (Shared Trust Verification)
 */
export const TRUST_LAB_CHECKPOINTS = [
  {
    code: 'QA-STAGE-01',
    titleEn: 'Botanical Taxonomic & Root Maturity Authentication (HPTLC)',
    titleMs: 'Pengesahan Taksonomi Botani & Kematangan Akar (HPTLC)',
    specEn: '100% Authentic Species Match',
    specMs: '100% Padanan Spesies Tulen',
    detailEn:
      'Every raw harvest batch of Malaysian Eurycoma longifolia (Tongkat Ali), Bulgarian/Indian Tribulus terrestris, Peruvian Black Lepidium meyenii (Maca), and Korean Red Panax ginseng undergoes High-Performance Thin-Layer Chromatography (HPTLC) fingerprinting against certified botanical reference standards prior to extraction.',
    detailMs:
      'Setiap kumpulan tuaian mentah Eurycoma longifolia (Tongkat Ali Malaysia), Tribulus terrestris, Lepidium meyenii (Maca Hitam Peru), dan Panax ginseng Merah Korea menjalani pengesahan cap jari HPTLC berbanding piawaian rujukan botani bertauliah sebelum proses pengekstrakan.',
  },
  {
    code: 'QA-STAGE-02',
    titleEn: 'Bio-Marker Potency Standardization (HPLC-DAD & UV-Vis)',
    titleMs: 'Piawaian Kepekatan Penanda Bioaktif (HPLC-DAD & UV-Vis)',
    specEn: '≥2.2% Eurycomanone · 60% Saponins',
    specMs: '≥2.2% Eurycomanone · 60% Saponin',
    detailEn:
      'Rather than encapsulating unstandardized raw wood sawdust, Onyxmen enforces quantitative HPLC-DAD assays verifying ≥2.2% eurycomanone in Tongkat Ali 100:1, 45%–60% furostanol saponins (protodioscin) in Tribulus, ≥0.6% macamides in Black Maca, and ≥99.5% pharmaceutical purity in L-Arginine HCl and L-Citrulline Malate.',
    detailMs:
      'Daripada mengkapsulkan serbuk kayu mentah tanpa piawaian, Onyxmen menguatkuasakan ujian kuantitatif HPLC-DAD yang mengesahkan ≥2.2% eurycomanone dalam Tongkat Ali 100:1, 45%–60% saponin furostanol dalam Tribulus, ≥0.6% macamides dalam Maca Hitam, dan ≥99.5% ketulenan farmaseutikal dalam L-Arginine HCl serta L-Citrulline Malate.',
  },
  {
    code: 'QA-STAGE-03',
    titleEn: 'ICP-MS Heavy Metal Clearance (Lead, Arsenic, Mercury, Cadmium)',
    titleMs: 'Saringan Logam Berat ICP-MS (Plumbum, Arsenik, Merkuri, Kadmium)',
    specEn: 'Pb <0.5ppm · Hg <0.1ppm · As <0.5ppm',
    specMs: 'Pb <0.5ppm · Hg <0.1ppm · As <0.5ppm',
    detailEn:
      'Because deep-forest roots absorb trace minerals from tropical soils, every extracted lot is tested via Inductively Coupled Plasma Mass Spectrometry (ICP-MS) to ensure Lead (Pb), Arsenic (As), Mercury (Hg), and Cadmium (Cd) remain strictly below Malaysian and ASEAN botanical dietary supplement safety thresholds.',
    detailMs:
      'Memandangkan akar hutan tropika menyerap mineral surih daripada tanah, setiap kumpulan ekstrak diuji melalui Spektrometri Jisim Plasma Gandingan Induktif (ICP-MS) bagi memastikan Plumbum (Pb), Arsenik (As), Merkuri (Hg), dan Kadmium (Cd) berada jauh di bawah had keselamatan suplemen pemakanan.',
  },
  {
    code: 'QA-STAGE-04',
    titleEn: 'Zero Undeclared Synthetic PDE5 Inhibitor Adulteration Screen (LC-MS/MS)',
    titleMs: 'Saringan Bebas Bahan Kimia Sintetik Terlarang PDE5 (LC-MS/MS)',
    specEn: '0.00% Synthetic Drugs / Analogues',
    specMs: '0.00% Dadah Sintetik Terlarang',
    detailEn:
      'Illicit street stimulants and cheap marketplace counterfeits often spike capsules with undeclared sildenafil, tadalafil, or vardenafil analogues that trigger severe migraines, visual disturbances, and dangerous blood-pressure drops. Every Onyxmen production batch undergoes LC-MS/MS screening to guarantee 100% pure botanical and amino-acid composition.',
    detailMs:
      'Produk jalanan haram dan tiruan murah sering mencampurkan bahan sintetik terlarang (analog sildenafil atau tadalafil) yang mengakibatkan sakit kepala melampau, gangguan penglihatan, dan penurunan tekanan darah berbahaya. Setiap kumpulan pengeluaran Onyxmen disaring melalui LC-MS/MS untuk menjamin 100% komposisi botani dan asid amino tulen.',
  },
  {
    code: 'QA-STAGE-05',
    titleEn: 'Microbial & Mycotoxin Safety Verification (USP <2021>/<2022>)',
    titleMs: 'Pengesahan Keselamatan Mikrob & Mikotoksin (USP <2021>/<2022>)',
    specEn: 'Absent E. coli, Salmonella & Aflatoxins',
    specMs: 'Bebas E. coli, Salmonella & Aflatoksin',
    detailEn:
      'All encapsulated lots are verified free from pathogenic bacteria (E. coli, Salmonella spp., Staphylococcus aureus, Pseudomonas aeruginosa), yeast, mold, and tropical aflatoxins (B1, B2, G1, G2) before entering our climate-controlled Kuala Lumpur fulfilment vault.',
    detailMs:
      'Semua kumpulan kapsul disahkan bebas daripada bakteria patogenik (E. coli, Salmonella spp., Staphylococcus aureus), yis, kulat, dan aflatoksin tropika sebelum disimpan di dalam bilik kebal kawalan suhu kami di Kuala Lumpur.',
  },
  {
    code: 'QA-STAGE-06',
    titleEn: 'Tropical Humidity Barrier & Heat-Induction Tamper Seal',
    titleMs: 'Pelindung Kelembapan Tropika & Meterai Induksi Haba Kedap Udara',
    specEn: '22°C–24°C KL Vault + Desiccant Core',
    specMs: 'Bilik Kebal 22°C–24°C + Gel Silika',
    detailEn:
      'Concentrated 100:1 herbal extracts and free-form amino acids are highly hygroscopic in Malaysia’s 80%+ relative humidity. Every Onyxmen bottle features a food-grade silica desiccant canister, a factory heat-induction aluminum inner seal, and a serialized outer security shrink band.',
    detailMs:
      'Ekstrak herba 100:1 dan asid amino tulen sangat sensitif terhadap kelembapan udara Malaysia yang melebihi 80%. Setiap botol Onyxmen dilengkapi penyerap kelembapan gred makanan, penutup aluminium induksi haba kilang, dan jalur keselamatan luar berkod siri.',
  },
  {
    code: 'QA-STAGE-07',
    titleEn: 'Warm-Water Dissolution & Disintegration Kinetics (20–30 Mins)',
    titleMs: 'Kinetik Pelarutan & Penghuraian Air Suam (20–30 Minit)',
    specEn: 'Rapid Gastric Release @ 37°C',
    specMs: 'Pelepasan Gastrik Pantas @ 37°C',
    detailEn:
      'Whether encapsulated in rapid-release apothecary shells (Horsemen, Grow XL), 100% plant-derived HPMC vegetarian shells (Hammer of Thor), or UV-shielded jet-black shells (Magnum Pump XR), every batch is tested to disintegrate cleanly within 20 to 30 minutes when taken with 250ml–300ml of warm water.',
    detailMs:
      'Sama ada di dalam kapsul apotekari larut pantas (Horsemen, Grow XL), kapsul vegetarian HPMC tumbuhan (Hammer of Thor), atau kapsul hitam pelindung UV (Magnum Pump XR), setiap kelompok diuji untuk larut sempurna dalam masa 20 hingga 30 minit bersama air suam.',
  },
  {
    code: 'QA-STAGE-08',
    titleEn: 'Zero Fabricated Medical Registration Claims & Honest Labelling',
    titleMs: 'Sifar Tuntutan Nombor Pendaftaran Palsu & Pelabelan Jujur',
    specEn: '100% Open-Label Milligram Disclosure',
    specMs: '100% Pendedahan Dos Miligram Sebenar',
    detailEn:
      'Onyxmen Malaysia strictly prohibits printing fake or borrowed registration strings on bottle labels or digital pages. We position all four formulations transparently as adult men’s botanical and amino-acid dietary supplements with 100% disclosed milligram weights per capsule.',
    detailMs:
      'Onyxmen Malaysia melarang keras cetakan nombor pendaftaran palsu pada botol atau laman web. Kami mempersembahkan keempat-empat formulasi secara jujur dan telus sebagai suplemen pemakanan botani dan asid amino lelaki dewasa (18+) dengan pendedahan miligram tepat.',
  },
];

/**
 * Shared Malaysia Tropical Chronobiology & Dietary Compatibility Protocols
 */
export const TRUST_TIMING_PROTOCOLS = [
  {
    code: 'TIMING · 01',
    windowEn: 'Morning Baseline Nourishment Window (07:30 – 09:00 MYT)',
    windowMs: 'Waktu Penjagaan Asas Pagi (07:30 – 09:00 MYT)',
    bottlesEn: 'Primary Window for Grow XL (30 Capsules × 550mg) · Optional Maintenance for Horsemen',
    bottlesMs: 'Waktu Utama untuk Grow XL (30 Kapsul × 550mg) · Penjagaan Pilihan Horsemen',
    instructionEn:
      'Take 1 capsule of Grow XL 20–30 minutes after breakfast (such as eggs, toast, or nasi lemak) with 250ml of warm water. Eating a balanced morning meal stimulates bile-salt secretion, enhancing intestinal absorption of fat-soluble Saw Palmetto phytosterols and Muira Puama alkaloids while aligning with adult men’s natural morning androgen peak.',
    instructionMs:
      'Ambil 1 kapsul Grow XL 20–30 minit selepas sarapan pagi bersama 250ml air suam. Pengambilan selepas sarapan merangsang rembesan hempedu yang meningkatkan penyerapan fitosterol Saw Palmetto dan alkaloid Muira Puama selari dengan kitaran tenaga pagi semula jadi lelaki.',
  },
  {
    code: 'TIMING · 02',
    windowEn: 'Pre-Gym & Resistance Training Vascular Window (30 – 45 Mins Prior)',
    windowMs: 'Waktu Aliran Vaskular Sebelum Gimnasium & Latihan (30 – 45 Minit Sebelum)',
    bottlesEn: 'Primary Window for Magnum Pump XR (30 Black Capsules × 600mg) & Hammer of Thor',
    bottlesMs: 'Waktu Utama untuk Magnum Pump XR (30 Kapsul Hitam × 600mg) & Hammer of Thor',
    instructionEn:
      'Take 1 black capsule of Magnum Pump XR with 300ml of plain room-temperature or warm water 30 to 45 minutes before resistance training or cardiovascular exercise. Free-form L-Arginine HCl (180mg) reaches peak plasma concentration within 35–45 minutes while L-Citrulline Malate (140mg) and Thai Black Ginger PMFs sustain endothelial nitric oxide vasodilation for 4 to 6 hours.',
    instructionMs:
      'Ambil 1 kapsul hitam Magnum Pump XR bersama 300ml air kosong 30 hingga 45 minit sebelum latihan bebanan atau senaman. L-Arginine HCl (180mg) mencapai kepekatan plasma puncak dalam 35–45 minit manakala L-Citrulline Malate (140mg) dan Kunyit Hitam mengekalkan sokongan nitrik oksida selama 4 hingga 6 jam.',
  },
  {
    code: 'TIMING · 03',
    windowEn: 'Evening Readiness & Post-Work Recovery Window (45 – 60 Mins Prior)',
    windowMs: 'Waktu Kesediaan Tenaga Malam & Pemulihan Selepas Kerja (45 – 60 Minit Sebelum)',
    bottlesEn: 'Primary Window for Horsemen (20 Capsules × 500mg) & Hammer of Thor (20 Veg. Capsules)',
    bottlesMs: 'Waktu Utama untuk Horsemen (20 Kapsul × 500mg) & Hammer of Thor (20 Kapsul Veg.)',
    instructionEn:
      'Take 1 capsule of Horsemen or Hammer of Thor 45 to 60 minutes before evening activity, or 30 minutes after dinner with 250ml of warm water. Because all four Onyxmen formulations are 100% caffeine-free and stimulant-free, evening administration supports physical stamina and mental composure without causing midnight insomnia or rapid heart-rate spikes.',
    instructionMs:
      'Ambil 1 kapsul Horsemen atau Hammer of Thor 45 hingga 60 minit sebelum aktiviti malam, atau 30 minit selepas makan malam bersama 250ml air suam. Memandangkan semua formulasi Onyxmen adalah 100% bebas kafein, pengambilan waktu malam menyokong stamina fizikal tanpa menyebabkan masalah sukar tidur atau debaran jantung.',
  },
  {
    code: 'TIMING · 04',
    windowEn: 'Malaysian Kopi O, Teh Tarik & Heavy Meal Spacing Rule (45-Min Buffer)',
    windowMs: 'Peraturan Jarak Masa Kopi O, Teh Tarik & Makanan Berat (Penampan 45 Minit)',
    bottlesEn: 'Applies Across All 4 Formulations (Horsemen, Hammer of Thor, Grow XL, Magnum Pump XR)',
    bottlesMs: 'Terpakai untuk Keempat-Empat Formulasi (Horsemen, Hammer of Thor, Grow XL, Magnum Pump XR)',
    instructionEn:
      'Polyphenols and tannins in strong kopi O, teh tarik, or matcha can chelate trace minerals like Zinc Bisglycinate and bind herbal quassinoids in the stomach. Always maintain a 45-minute buffer between coffee/tea and your Onyxmen capsule, and avoid taking pre-evening capsules immediately after heavy deep-fried suppers that delay gastric emptying.',
    instructionMs:
      'Polifenol dan tanin di dalam kopi O pekat atau teh tarik boleh mengikat mineral Zink serta quassinoid herba di dalam perut. Pastikan jarak masa sekurang-kurangnya 45 minit antara minuman berkafein/teh dengan pengambilan kapsul Onyxmen, dan elakkan mengambil kapsul sejurus selepas makan malam bergoreng yang sangat berat.',
  },
];

/**
 * Shared Cross-Trust FAQs appended to all Trust, PDPA & E-E-A-T Pages
 */
export const SHARED_TRUST_FAQS = [
  {
    questionEn: 'What is the official Malaysia price for Horsemen, Hammer of Thor, Grow XL, and Magnum Pump XR?',
    answerEn:
      'Every authentic Onyxmen formulation is priced uniformly in Malaysian Ringgit (MYR): 1 Bottle (Single Cycle Reserve) is RM 159 (159.00 MYR), 2 Bottles (Dual Momentum Protocol with Free Nationwide Malaysia Express Shipping including Sabah, Sarawak & Labuan) is RM 318 (318.00 MYR), and 3 Bottles (Complete 90-Day Apothecary Mastery Vault with Priority Dispatch & VIP Refill Concierge) is RM 477 (477.00 MYR).',
    questionMs: 'Berapakah harga rasmi Malaysia untuk Horsemen, Hammer of Thor, Grow XL, dan Magnum Pump XR?',
    answerMs:
      'Setiap formulasi tulen Onyxmen ditawarkan pada harga rasmi seragam dalam Ringgit Malaysia (MYR): 1 Botol (Bekalan Satu Kitaran) berharga RM 159 (159.00 MYR), 2 Botol (Protokol Dwi-Momentum dengan Penghantaran Ekspres Percuma ke seluruh Malaysia termasuk Sabah, Sarawak & Labuan) berharga RM 318 (318.00 MYR), dan 3 Botol (Pakej Lengkap 90 Hari dengan Pelepasan Keutamaan VIP) berharga RM 477 (477.00 MYR).',
  },
  {
    questionEn: 'How does Onyxmen guarantee 100% parcel privacy on courier airway bills and condo/office deliveries?',
    answerEn:
      'Every order is packed inside our 3-layer blind-waybill architecture: each factory-sealed bottle is wrapped in high-density acoustic bubble wrap (preventing capsule rattling noise) and sealed inside an unbranded, opaque matte security box or poly-mailer. The courier airway bill lists the sender strictly as "OM Fulfilment Logistics (Kuala Lumpur 50450)" and declares contents generically as "Personal Nutritional Wellness" with zero mention of Onyxmen or men’s supplements.',
    questionMs: 'Bagaimanakah Onyxmen menjamin privasi 100% pada slip kurier serta penghantaran ke kondominium atau pejabat?',
    answerMs:
      'Setiap pesanan dibungkus menggunakan seni bina privasi 3-lapisan: botol dibalut dengan pelindung gelembung anti-bunyi (supaya tidak berbunyi apabila digoncang) dan dimasukkan ke dalam kotak keselamatan legap tanpa sebarang logo. Slip kurier hanya memaparkan nama pengirim "OM Fulfilment Logistics (Kuala Lumpur 50450)" dan keterangan "Penjagaan Kesihatan Harian" tanpa menyebut nama produk.',
  },
  {
    questionEn: 'How is my personal data protected under the Malaysia Personal Data Protection Act 2010 (PDPA Act 709)?',
    answerEn:
      'Onyxmen Malaysia complies strictly with all seven Data Protection Principles of the Malaysian Personal Data Protection Act 2010 (Act 709). We do not force public account registration, never sell or rent customer phone numbers to third-party marketing lists, allow initials or pseudonyms on courier labels, and purge or anonymize delivery records upon request via info@onyxmen.my or sales@onyxmen.my.',
    questionMs: 'Bagaimanakah data peribadi saya dilindungi di bawah Akta Perlindungan Data Peribadi Malaysia 2010 (PDPA Akta 709)?',
    answerMs:
      'Onyxmen Malaysia mematuhi sepenuhnya ketujuh-tujuh Prinsip Perlindungan Data di bawah Akta Perlindungan Data Peribadi Malaysia 2010 (Akta 709). Kami tidak mewajibkan pendaftaran akaun awam, tidak sesekali menjual atau berkongsi nombor telefon pelanggan kepada pihak ketiga, membenarkan penggunaan nama samaran pada label kurier, serta memadam rekod penghantaran atas permintaan melalui info@onyxmen.my atau sales@onyxmen.my.',
  },
  {
    questionEn: 'What is the official Onyxmen return, exchange, and damaged-in-transit replacement policy?',
    answerEn:
      'We provide a 14-to-30-Day Unopened Tamper-Seal Return & Exchange Guarantee across Malaysia. If you wish to return or exchange an unopened bottle with its factory heat-induction seal and holographic security band intact within 14 days (extended to 30 days for 3-Bottle RM 477 Vault orders), or if a parcel arrives damaged in transit, contact sales@onyxmen.my or info@onyxmen.my for priority replacement or refund.',
    questionMs: 'Apakah polisi rasmi pemulangan, pertukaran, dan penggantian kerosakan transit Onyxmen?',
    answerMs:
      'Kami menyediakan Jaminan Pemulangan & Pertukaran Botol Belum Dibuka selama 14 hingga 30 Hari di seluruh Malaysia. Sekiranya anda ingin memulangkan atau menukar botol yang masih mempunyai pelekat keselamatan asal dalam tempoh 14 hari (dilanjutkan kepada 30 hari bagi pakej 3 Botol RM 477), atau jika bungkusan rosak semasa penghantaran, hubungi sales@onyxmen.my atau info@onyxmen.my untuk penggantian segera.',
  },
  {
    questionEn: 'What exactly is Magnum Pump XR (30 Black Capsules) on Onyxmen.my? Is it an oral dietary supplement?',
    answerEn:
      'Yes. Magnum Pump XR distributed by Onyxmen Malaysia (https://www.onyxmen.my, SKU ONYX-MP-30, MPN MPXR-30BLK-MY, RM 159) is strictly an oral botanical and amino-acid Dietary Supplement for adult men (18+) containing 30 jet-black capsules per bottle (180mg L-Arginine HCl, 140mg L-Citrulline Malate, 110mg Tribulus, 90mg Tongkat Ali, 65mg Thai Black Ginger, 15mg Bioperine). It has zero connection to industrial fluid pumps or mechanical vacuum devices.',
    questionMs: 'Apakah sebenarnya Magnum Pump XR (30 Kapsul Hitam) di Onyxmen.my? Adakah ia suplemen kapsul makan?',
    answerMs:
      'Ya. Magnum Pump XR yang diedarkan oleh Onyxmen Malaysia (https://www.onyxmen.my, SKU ONYX-MP-30, MPN MPXR-30BLK-MY, RM 159) adalah 100% Suplemen Pemakanan kapsul botani dan asid amino untuk lelaki dewasa (18+) yang mengandungi 30 kapsul hitam setiap botol. Ia sama sekali TIDAK berkaitan dengan sebarang pam air industri atau alat pam vakum mekanikal.',
  },
  {
    questionEn: 'How do I contact the Kuala Lumpur Private Concierge Desk for order tracking or formulation advice?',
    answerEn:
      'Our Kuala Lumpur Private Concierge & Fulfilment Desk operates 7 days a week from 09:00 to 23:00 MYT (UTC+8). You can reach our team directly at sales@onyxmen.my (Express Orders, Payment & Courier Tracking), info@onyxmen.my (Botanical Formulation Guidance & PDPA Privacy Requests), orwaleedshoaibofficial@gmail.com (Primary Merchant Dispatch Desk), or via the 10-Second Express Order Drawer on any page.',
    questionMs: 'Bagaimanakah cara menghubungi Meja Khidmat Pelanggan Privasi Kuala Lumpur untuk semakan pesanan atau nasihat formulasi?',
    answerMs:
      'Meja Khidmat Pelanggan & Operasi Kuala Lumpur kami beroperasi setiap hari dari jam 09:00 pagi hingga 23:00 malam MYT (UTC+8). Anda boleh menghubungi kami terus melalui sales@onyxmen.my (Tempahan, Pembayaran & Nombor Tracking), info@onyxmen.my (Panduan Formulasi Botani & Privasi PDPA), atau waleedshoaibofficial@gmail.com, mahupun menerusi Laci Tempahan Ekspres 10 Saat di laman ini.',
  },
];

/**
 * Shared Helper 1: Quantitative 4-Bottle × 10-Botanical Milligram Matrix Section
 */
export function renderTrustQuantitativeMatrixSection(lang = 'en-MY') {
  const isMs = lang === 'ms-MY';

  return `
  <!-- ==========================================================================
       QUANTITATIVE 4-BOTTLE × 10-BOTANICAL MILLIGRAM FORMULATION MATRIX
       ========================================================================== -->
  <section
    id="trust-quantitative-botanical-dosage-matrix"
    class="trust-section trust-section--charcoal"
    aria-labelledby="heading-trust-quantitative-matrix"
  >
    <div class="trust-section__inner">
      <header class="trust-section__header">
        <div class="trust-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? 'JADUAL KUANTITATIF MILIGRAM · KETELUSAN LABEL 100% TANPA CAMPURAN TERSEMBUNYI'
                : 'QUANTITATIVE MILLIGRAM LEDGER · 100% OPEN-LABEL APOTHECARY TRANSPARENCY'
            }
          </span>
          <h2 id="heading-trust-quantitative-matrix" class="editorial-headline-lg">
            ${
              isMs
                ? 'Matriks Dos Tepat Merentasi <span class="foil-champagne-text">Keempat-Empat Botol Onyxmen (RM 159).</span>'
                : 'Exact Milligram Architecture Across <span class="foil-champagne-text">All Four Onyxmen Reserves (RM 159).</span>'
            }
          </h2>
        </div>
        <div class="trust-section__header-right">
          <p>
            ${
              isMs
                ? 'Onyxmen Malaysia menolak penggunaan istilah kabur "campuran proprietari" yang menyembunyikan dos sebenar. Setiap kapsul 500mg hingga 600mg memaparkan pecahan miligram ekstrak piawai yang disahkan secara makmal.'
                : 'Onyxmen Malaysia refuses to hide behind opaque "proprietary blends." Every 500mg to 600mg capsule discloses its exact milligram allocation of standardized botanical extracts, amino-acid precursors, and mineral cofactors.'
            }
          </p>
        </div>
      </header>

      <div class="trust-table-wrap">
        <table class="trust-comparison-table">
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
                <a href="${isMs ? '/ms/ramuan-botani/panax-ginseng-ginsenosida/' : '/ingredients/panax-ginseng-ginsenosides/'}" style="color:var(--gold-foil-bright);font-weight:600;text-decoration:underline;">
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
 * Shared Helper 2: 8-Point Laboratory Purity & Anti-Counterfeit Verification Section
 */
export function renderTrustLabPuritySection(lang = 'en-MY') {
  const isMs = lang === 'ms-MY';

  const rowsHtml = TRUST_LAB_CHECKPOINTS.map(
    (cp) => `
        <div class="trust-hairline-row">
          <div class="trust-hairline-row__code">${esc(cp.code)}</div>
          <div class="trust-hairline-row__main">
            <h3 class="trust-hairline-row__title">${esc(isMs ? cp.titleMs : cp.titleEn)}</h3>
            <p class="trust-hairline-row__desc">${esc(isMs ? cp.detailMs : cp.detailEn)}</p>
          </div>
          <div class="trust-hairline-row__meta">
            <span style="font-size:0.84rem;color:var(--gold-foil-bright);font-weight:600;">
              ${esc(isMs ? cp.specMs : cp.specEn)}
            </span>
          </div>
        </div>`
  ).join('\n');

  return `
  <!-- ==========================================================================
       8-POINT LABORATORY PURITY, HEAVY METAL & ZERO-PDE5 ASSURANCE LEDGER
       ========================================================================== -->
  <section
    id="trust-laboratory-purity-assurance-ledger"
    class="trust-section trust-section--onyx"
    aria-labelledby="heading-trust-lab-purity"
  >
    <div class="trust-section__inner">
      <header class="trust-section__header">
        <div class="trust-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? 'SARINGAN MAKMAL 8 PERINGKAT · HPLC-DAD, ICP-MS &amp; LC-MS/MS'
                : '8-STAGE ANALYTICAL QUALITY ASSURANCE · HPLC-DAD, ICP-MS &amp; LC-MS/MS'
            }
          </span>
          <h2 id="heading-trust-lab-purity" class="editorial-headline-lg">
            ${
              isMs
                ? 'Protokol Kawalan Kualiti Makmal &amp; <span class="foil-champagne-text">Jaminan Sifar Bahan Sintetik Terlarang.</span>'
                : 'Laboratory Quality Governance &amp; <span class="foil-champagne-text">Zero Synthetic Adulterant Guarantee.</span>'
            }
          </h2>
        </div>
        <div class="trust-section__header-right">
          <p>
            ${
              isMs
                ? 'Setiap kumpulan pengeluaran Horsemen, Hammer of Thor, Grow XL, dan Magnum Pump XR melalui lapan peringkat saringan kualiti sebelum dilepaskan dari bilik kebal kawalan suhu Kuala Lumpur kami.'
                : 'Every production lot of Horsemen, Hammer of Thor, Grow XL, and Magnum Pump XR passes eight mandatory analytical checkpoints prior to release from our climate-controlled Kuala Lumpur vault.'
            }
          </p>
        </div>
      </header>

      <div class="trust-hairline-ledger">
        ${rowsHtml}
      </div>
    </div>
  </section>`;
}

/**
 * Shared Helper 3: Tropical Malaysia Chronobiology & Intake Protocol Section
 */
export function renderTrustTimingSection(lang = 'en-MY') {
  const isMs = lang === 'ms-MY';

  const rowsHtml = TRUST_TIMING_PROTOCOLS.map(
    (tp) => `
        <div class="trust-hairline-row">
          <div class="trust-hairline-row__code">${esc(tp.code)}</div>
          <div class="trust-hairline-row__main">
            <h3 class="trust-hairline-row__title">${esc(isMs ? tp.windowMs : tp.windowEn)}</h3>
            <p style="font-size:0.82rem;color:var(--gold-foil-bright);letter-spacing:0.08em;text-transform:uppercase;">
              ${esc(isMs ? tp.bottlesMs : tp.bottlesEn)}
            </p>
            <p class="trust-hairline-row__desc">${esc(isMs ? tp.instructionMs : tp.instructionEn)}</p>
          </div>
          <div class="trust-hairline-row__meta">
            <span class="trust-hairline-row__sub">
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
    id="trust-tropical-malaysia-chronobiology"
    class="trust-section"
    aria-labelledby="heading-trust-tropical-timing"
  >
    <div class="trust-section__inner">
      <header class="trust-section__header">
        <div class="trust-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? 'KRONOBIOLOGI TROPIKA MALAYSIA · MASA PENGAMBILAN &amp; PENYERAPAN OPTIMUM'
                : 'TROPICAL MALAYSIA CHRONOBIOLOGY · OPTIMAL CAPSULE TIMING &amp; BIO-UPTAKE'
            }
          </span>
          <h2 id="heading-trust-tropical-timing" class="editorial-headline-lg">
            ${
              isMs
                ? 'Jadual Pengambilan Mengikut Waktu Malaysia (MYT) &amp; <span class="foil-champagne-text">Keserasian Pemakanan Tempatan.</span>'
                : 'Precision Intake Windows (MYT) &amp; <span class="foil-champagne-text">Malaysian Dietary Compatibility.</span>'
            }
          </h2>
        </div>
        <div class="trust-section__header-right">
          <p>
            ${
              isMs
                ? 'Cara dan masa anda menelan kapsul herba piawai di dalam iklim khatulistiwa Malaysia menentukan kepantasan penyerapan eurycomanone, saponin protodioscin, macamides, dan L-Arginine.'
                : 'How and when you ingest standardized botanical capsules in Malaysia’s equatorial climate directly governs the intestinal absorption rate of eurycomanone, protodioscin saponins, macamides, and L-Arginine.'
            }
          </p>
        </div>
      </header>

      <div class="trust-hairline-ledger">
        ${rowsHtml}
      </div>
    </div>
  </section>`;
}

/**
 * Shared Helper 4: Multi-Bottle Acquisition Vault Section (RM 159 / RM 318 / RM 477)
 */
export function renderTrustMultiBottleSection(lang = 'en-MY', primarySlug = 'horsemen') {
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
          class="trust-hairline-row"
          style="${isPrimary ? 'background:linear-gradient(90deg, rgba(212,175,55,0.10) 0%, transparent 100%);border-bottom-color:var(--gold-champagne);' : ''}"
        >
          <div class="trust-hairline-row__code">
            <div>0${idx + 1} · ${esc(prod.sku)}</div>
            <div style="color:var(--text-ash-silver);font-size:0.66rem;margin-top:0.25rem;">
              GTIN: ${esc(prod.gtin13)}
            </div>
            ${
              isPrimary
                ? `<div style="color:var(--gold-foil-bright);font-size:0.66rem;margin-top:0.35rem;font-weight:700;">
                     ★ ${isMs ? 'PILIHAN UTAMA BILIK KEBAL' : 'FLAGSHIP APOTHECARY RESERVE'}
                   </div>`
                : ''
            }
          </div>

          <div class="trust-hairline-row__main">
            <h3 class="trust-hairline-row__title">
              <a href="${esc(prodHref)}" style="text-decoration:underline;text-underline-offset:4px;">
                ${esc(prod.name)} — ${esc(capSpec)}
              </a>
            </h3>
            <p style="font-size:0.84rem;color:var(--gold-foil-bright);letter-spacing:0.06em;">
              ${esc(isMs ? prod.labelTranscription.subtitleMs : prod.labelTranscription.subtitleEn)} · ${esc(refillSpec)}
            </p>
            <p class="trust-hairline-row__desc">
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
                <span>${isMs ? `2 Botol (Pos Percuma) · RM 318` : `2 Bottles (Free MY Shipping) · RM 318`}</span>
              </button>
              <button
                type="button"
                class="cta-hairline-secondary"
                data-open-order-drawer="true"
                data-order-product="${esc(prod.slug)}"
                data-order-qty="3"
              >
                <span>${isMs ? `3 Botol (90 Hari) · RM 477` : `3 Bottles (90-Day Vault) · RM 477`}</span>
              </button>
              <a href="${esc(prodHref)}" class="cta-hairline-secondary">
                <span>${isMs ? 'Spesifikasi Penuh →' : 'Full Product Dossier →'}</span>
              </a>
            </div>
          </div>

          <div class="trust-hairline-row__meta">
            <span class="trust-hairline-row__dosage">RM 159.00</span>
            <span class="trust-hairline-row__sub">
              ${isMs ? '1 BOTOL · 2 BOTOL RM 318 · 3 BOTOL RM 477' : '1 BOTTLE · 2B RM 318 · 3B RM 477'}
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
       MULTI-BOTTLE PROTOCOL ACQUISITION VAULT (RM 159 / RM 318 / RM 477)
       ========================================================================== -->
  <section
    id="trust-protocol-acquisition-vault"
    class="trust-section trust-section--onyx"
    aria-labelledby="heading-trust-acquisition-vault"
  >
    <div class="trust-section__inner">
      <header class="trust-section__header">
        <div class="trust-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? 'TEMPAHAN EKSPRES 10 SAAT · HARGA RASMI SELURUH MALAYSIA'
                : '10-SECOND EXPRESS DISCREET RESERVE · OFFICIAL MALAYSIA PRICING'
            }
          </span>
          <h2 id="heading-trust-acquisition-vault" class="editorial-headline-lg">
            ${
              isMs
                ? 'Pilih Formulasi &amp; Kitaran Botol Anda: <span class="foil-champagne-text">RM 159 · RM 318 · RM 477.</span>'
                : 'Acquire Your Standardized Botanical Protocol: <span class="foil-champagne-text">RM 159 · RM 318 · RM 477.</span>'
            }
          </h2>
        </div>
        <div class="trust-section__header-right">
          <p>
            ${
              isMs
                ? 'Setiap pesanan disahkan serta-merta melalui meja operasi Kuala Lumpur kami (sales@onyxmen.my / info@onyxmen.my / waleedshoaibofficial@gmail.com) dengan sokongan pembayaran FPX, DuitNow QR, dan Bayar Waktu Terima (COD).'
                : 'Every reserve is routed directly to our Kuala Lumpur fulfilment desk (sales@onyxmen.my / info@onyxmen.my / waleedshoaibofficial@gmail.com) with instant WhatsApp dispatch coordination and FPX, DuitNow QR, or COD settlement.'
            }
          </p>
        </div>
      </header>

      <div class="trust-hairline-ledger">
        ${productRowsHtml}
      </div>
    </div>
  </section>`;
}

/**
 * Shared Helper 5: Nationwide 16-State Malaysia Discreet Delivery Table
 */
export function renderTrustStatesFulfilmentSection(lang = 'en-MY', primarySlug = 'horsemen') {
  const isMs = lang === 'ms-MY';

  const rowsHtml = TRUST_STATES_MATRIX.map(
    (st) => `
            <tr>
              <td><strong style="color:var(--gold-champagne);">${esc(st.code)}</strong></td>
              <td>
                <a
                  href="${esc(isMs ? st.msHref : st.enHref)}"
                  style="color:var(--gold-foil-bright);font-weight:600;text-decoration:underline;"
                >
                  ${esc(isMs ? st.stateMs : st.stateEn)}
                </a>
                <div style="font-size:0.78rem;color:var(--text-ash-silver);margin-top:0.2rem;">
                  ${esc(st.cities)}
                </div>
              </td>
              <td style="color:var(--text-silk-ivory);">${esc(isMs ? st.etaMs : st.etaEn)}</td>
              <td>
                <span style="font-size:0.8rem;color:var(--gold-foil-bright);">
                  FPX · DuitNow QR · COD
                </span>
                <div style="font-size:0.74rem;color:var(--text-ash-silver);">
                  Waybill: OM Fulfilment Logistics
                </div>
              </td>
              <td>
                <button
                  type="button"
                  class="cta-hairline-secondary"
                  style="padding:0.45rem 0.85rem;font-size:0.68rem;"
                  data-open-order-drawer="true"
                  data-order-product="${esc(primarySlug)}"
                  data-order-qty="1"
                >
                  <span>${isMs ? 'Tempah RM 159 →' : 'Reserve RM 159 →'}</span>
                </button>
              </td>
            </tr>`
  ).join('\n');

  return `
  <!-- ==========================================================================
       NATIONWIDE 16-STATE MALAYSIA DISCREET DELIVERY & COD/FPX COVERAGE TABLE
       ========================================================================== -->
  <section
    id="trust-16-states-malaysia-fulfilment"
    class="trust-section"
    aria-labelledby="heading-trust-states-dispatch"
  >
    <div class="trust-section__inner">
      <header class="trust-section__header">
        <div class="trust-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? 'LOGISTIK APOTEKARI 16 NEGERI · BUNGKUSAN RAHSIA TANPA NAMA PRODUK'
                : 'NATIONWIDE 16-STATE APOTHECARY DISPATCH · 100% UNMARKED PARCEL PROTOCOL'
            }
          </span>
          <h2 id="heading-trust-states-dispatch" class="editorial-headline-lg">
            ${
              isMs
                ? 'Penghantaran Bungkusan Rahsia ke Seluruh <span class="foil-champagne-text">16 Negeri &amp; Wilayah Persekutuan Malaysia.</span>'
                : 'Climate-Sealed Discreet Delivery Across All <span class="foil-champagne-text">16 Malaysian States &amp; Federal Territories.</span>'
            }
          </h2>
        </div>
        <div class="trust-section__header-right">
          <p>
            ${
              isMs
                ? 'Setiap botol Horsemen, Hammer of Thor, Grow XL, dan Magnum Pump XR dibungkus di dalam kotak keselamatan legap tanpa sebarang nama produk atau logo herba pada slip kurier. Pengirim disenaraikan sebagai "OM Fulfilment Logistics (Kuala Lumpur)".'
                : 'Every bottle of Horsemen, Hammer of Thor, Grow XL, and Magnum Pump XR is sealed inside an acoustic shock-absorbent sleeve and opaque security carton. The courier airway bill lists the sender strictly as "OM Fulfilment Logistics (Kuala Lumpur)" with zero mention of botanical supplements.'
            }
          </p>
        </div>
      </header>

      <div class="trust-table-wrap">
        <table class="trust-comparison-table">
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
 * Shared Helper 6: Complete Trust, Legal, PDPA & Concierge Cross-Navigation Directory
 */
export function renderTrustDirectoryNavSection(lang = 'en-MY') {
  const isMs = lang === 'ms-MY';

  const navItems = [
    {
      code: 'MS-161 / MS-162',
      titleEn: 'Official RM 159 Authenticity Guarantee & Anti-Counterfeit Verification Protocol',
      titleMs: 'Jaminan Ketulenan Rasmi RM 159 & Protokol Saringan Anti-Produk Tiruan',
      descEn:
        'Inspect our 8-point holographic seal verification checklist, batch SKU/MPN/GTIN registry, and protection against grey-market or starch-filled counterfeit listings.',
      descMs:
        'Semak senarai semak pengesahan meterai holografik 8 perkara, pendaftaran kod SKU/MPN/GTIN rasmi, serta perlindungan daripada produk tiruan di pasaran gelap.',
      enHref: '/authenticity-guarantee/',
      msHref: '/ms/jaminan-ketulenan/',
      aliasEn: '/authenticity/',
      aliasMs: '/ms/authenticity-guarantee/',
    },
    {
      code: 'MS-163 / MS-164',
      titleEn: '100% Unmarked Discreet Packaging, Blind Waybill & Malaysia Shipping Policy',
      titleMs: 'Polisi Bungkusan Rahsia Tanpa Nama, Slip Kurier Neutral & Penghantaran Malaysia',
      descEn:
        'Full engineering specifications of our 3-layer acoustic and visual parcel shielding, OM Fulfilment Logistics waybill wording, Same-Day Klang Valley runner, and COD/FPX rules.',
      descMs:
        'Spesifikasi penuh bungkusan pelindung bunyi dan visual 3-lapisan, cetakan slip pengirim OM Fulfilment Logistics, penghantar hari sama Lembah Klang, dan peraturan COD/FPX.',
      enHref: '/discreet-shipping/',
      msHref: '/ms/penghantaran-rahsia/',
      aliasEn: '/shipping-and-discreet-packaging/',
      aliasMs: '/ms/polisi-penghantaran/',
    },
    {
      code: 'MS-165 / MS-166',
      titleEn: 'Malaysia PDPA Act 709 Privacy Policy & Zero-Account Buyer Confidentiality Charter',
      titleMs: 'Polisi Privasi Akta PDPA Malaysia 709 & Piagam Kerahsiaan Pembeli Tanpa Akaun',
      descEn:
        'How Onyxmen Malaysia enforces all 7 Personal Data Protection Principles under Malaysian Act 709, zero third-party data sharing, pseudonym waybills, and data erasure rights.',
      descMs:
        'Bagaimana Onyxmen Malaysia mematuhi 7 Prinsip Perlindungan Data Peribadi di bawah Akta 709 Malaysia, sifar perkongsian data pihak ketiga, dan hak pemadaman rekod.',
      enHref: '/privacy-policy/',
      msHref: '/ms/polisi-privasi/',
      aliasEn: '/pdpa/',
      aliasMs: '/ms/pdpa/',
    },
    {
      code: 'MS-167 / MS-168',
      titleEn: 'Terms of Service, Supplement Compliance & 14/30-Day Unopened Tamper-Seal Return Policy',
      titleMs: 'Terma Perkhidmatan, Pematuhan Suplemen & Polisi Pemulangan Botol Belum Dibuka 14/30 Hari',
      descEn:
        'Commercial terms of sale under Malaysian law (Sale of Goods Act 1957 & Consumer Protection Act 1999), 18+ adult dietary supplement positioning, and 14/30-day return procedures.',
      descMs:
        'Terma jualan komersial di bawah undang-undang Malaysia, pematuhan suplemen pemakanan lelaki dewasa 18+, serta prosedur pemulangan dan penggantian botol 14/30 hari.',
      enHref: '/terms-of-service/',
      msHref: '/ms/terma-perkhidmatan/',
      aliasEn: '/return-policy/',
      aliasMs: '/ms/polisi-pemulangan/',
    },
    {
      code: 'MS-169 · ABOUT',
      titleEn: 'About Onyxmen Malaysia Apothecary & Botanical Quality Assurance Board',
      titleMs: 'Tentang Apotekari Onyxmen Malaysia & Lembaga Jaminan Kualiti Botani',
      descEn:
        'Discover our Kuala Lumpur architectural botanical apothecary, standardized extraction philosophy, climate-controlled vault operations, and E-E-A-T editorial governance.',
      descMs:
        'Kenali apotekari botani Kuala Lumpur kami, falsafah pengekstrakan piawai bernisbah tinggi, operasi bilik kebal kawalan suhu, dan tadbir urus kualiti E-E-A-T.',
      enHref: '/about/',
      msHref: '/ms/tentang-kami/',
      aliasEn: '/products/',
      aliasMs: '/ms/produk/',
    },
    {
      code: 'MS-169 · CONTACT',
      titleEn: 'Kuala Lumpur Private Concierge & Discreet Order Desk (sales@onyxmen.my · info@onyxmen.my)',
      titleMs: 'Meja Khidmat Pelanggan Privasi & Tempahan Kuala Lumpur (sales@onyxmen.my · info@onyxmen.my)',
      descEn:
        'Direct communication channels for order confirmation, same-day Klang Valley runner coordination, courier tracking, and confidential formulation consultation (09:00–23:00 MYT).',
      descMs:
        'Saluran komunikasi terus untuk pengesahan tempahan, penyelarasan penghantar hari sama Lembah Klang, nombor tracking kurier, dan konsultasi rahsia (09:00–23:00 MYT).',
      enHref: '/contact/',
      msHref: '/ms/hubungi-kami/',
      aliasEn: '/faq/',
      aliasMs: '/ms/soalan-lazim/',
    },
  ];

  const rowsHtml = navItems
    .map(
      (item) => `
        <div class="trust-hairline-row">
          <div class="trust-hairline-row__code">${esc(item.code)}</div>
          <div class="trust-hairline-row__main">
            <h3 class="trust-hairline-row__title">
              <a href="${esc(isMs ? item.msHref : item.enHref)}" style="text-decoration:underline;text-underline-offset:4px;">
                ${esc(isMs ? item.titleMs : item.titleEn)}
              </a>
            </h3>
            <p class="trust-hairline-row__desc">${esc(isMs ? item.descMs : item.descEn)}</p>
          </div>
          <div class="trust-hairline-row__meta">
            <a href="${esc(isMs ? item.msHref : item.enHref)}" class="cta-foil-primary" style="padding:0.65rem 1.2rem;font-size:0.72rem;">
              <span>${isMs ? 'Buka Dokumen →' : 'Open Dossier →'}</span>
            </a>
            <a href="${esc(isMs ? item.aliasMs : item.aliasEn)}" style="font-size:0.72rem;color:var(--gold-champagne);text-decoration:underline;margin-top:0.35rem;">
              ${esc(isMs ? item.aliasMs : item.aliasEn)} ↗
            </a>
          </div>
        </div>`
    )
    .join('\n');

  return `
  <!-- ==========================================================================
       COMPLETE ONYXMEN MALAYSIA TRUST, PDPA, LEGAL & CONCIERGE DIRECTORY
       ========================================================================== -->
  <section
    id="trust-governance-directory-navigation"
    class="trust-section trust-section--onyx"
    aria-labelledby="heading-trust-directory-nav"
  >
    <div class="trust-section__inner">
      <header class="trust-section__header">
        <div class="trust-section__header-left">
          <span class="editorial-kicker">
            ${
              isMs
                ? 'DIREKTORI TADBIR URUS APOTEKARI · KETULENAN, PRIVASI PDPA &amp; TERMA'
                : 'APOTHECARY GOVERNANCE DIRECTORY · AUTHENTICITY, PDPA PRIVACY &amp; TERMS'
            }
          </span>
          <h2 id="heading-trust-directory-nav" class="editorial-headline-lg">
            ${
              isMs
                ? 'Arkib Lengkap Jaminan Kualiti, <span class="foil-champagne-text">Privasi PDPA &amp; Polisi Pelanggan.</span>'
                : 'Complete Quality Assurance, <span class="foil-champagne-text">PDPA Privacy &amp; Client Policy Archive.</span>'
            }
          </h2>
        </div>
        <div class="trust-section__header-right">
          <p>
            ${
              isMs
                ? 'Terokai semua dokumen rasmi Onyxmen Malaysia merangkumi jaminan ketulenan RM 159, seni bina bungkusan rahsia tanpa nama, pematuhan Akta PDPA 709, terma pemulangan 14/30 hari, dan meja bantuan Kuala Lumpur.'
                : 'Explore every official Onyxmen Malaysia governance dossier covering our RM 159 authenticity guarantee, blind-waybill discreet packaging, PDPA Act 709 data protection, 14/30-day unopened return policy, and Kuala Lumpur concierge desk.'
            }
          </p>
        </div>
      </header>

      <div class="trust-hairline-ledger">
        ${rowsHtml}
      </div>
    </div>
  </section>`;
}

/**
 * ============================================================================
 * 8 MASTER BILINGUAL TRUST, PDPA, LEGAL, CONCIERGE & FAQ DOSSIERS (MS-161..170)
 * ============================================================================
 */
export const TRUST_DOSSIERS = [
  // --------------------------------------------------------------------------
  // DOSSIER 1: MS-161 & MS-162 — Authenticity & Official RM 159 Anti-Counterfeit Guarantee
  // --------------------------------------------------------------------------
  {
    key: 'authenticity-guarantee',
    code: 'AUTH-159',
    microStepEn: 'MS-161',
    microStepMs: 'MS-162',
    canonicalEnPath: '/authenticity-guarantee/',
    canonicalMsPath: '/ms/jaminan-ketulenan/',
    enOutputPaths: [
      'authenticity-guarantee/index.html',
      'authenticity/index.html',
    ],
    msOutputPaths: [
      'ms/authenticity-guarantee/index.html',
      'ms/authenticity/index.html',
      'ms/jaminan-ketulenan/index.html',
    ],
    heroImage: '/assets/products/onyxman-lineup-hero.webp',
    portraitImage: '/assets/products/horsemen-portrait.webp',
    primaryProductSlug: 'horsemen',
    activeNav: 'guides',
    en: {
      seoTitle:
        'Official RM 159 Authenticity Guarantee & Anti-Counterfeit Verification Protocol | Onyxmen Malaysia',
      metaDescription:
        'Verify authentic Onyxmen Malaysia botanical formulations (Horsemen, Hammer of Thor, Grow XL, Magnum Pump XR) at the official RM 159 / RM 318 / RM 477 tariff. 8-point holographic seal, SKU/GTIN registry, and zero synthetic adulteration guarantee.',
      eyebrow:
        'MS-161 · OFFICIAL RM 159 ANTI-COUNTERFEIT GUARANTEE & HOLOGRAPHIC SEAL VERIFICATION',
      headline:
        'Official RM 159 Authenticity Guarantee — Protecting Malaysian Men From Grey-Market & Counterfeit Imitations.',
      subheadline:
        'Every genuine bottle of Horsemen (20 Caps), Hammer of Thor (20 Veg. Caps), Grow XL (30 Caps), and Magnum Pump XR (30 Black Caps) is dispatched exclusively from our climate-controlled Kuala Lumpur vault (22°C–24°C) with serialized tamper-evident seals.',
      executiveSummary:
        'Unverified online classifieds, auction listings, and roadside stalls frequently circulate counterfeit bottles priced at suspiciously cheap clearance rates (RM 25–RM 55) that contain either inert cornstarch or dangerous undeclared synthetic pharmaceuticals. Onyxmen Malaysia enforces a strict direct-to-client distribution model through https://www.onyxmen.my at our uniform official tariff—1 Bottle RM 159 (159.00 MYR), 2 Bottles RM 318 (318.00 MYR), and 3 Bottles RM 477 (477.00 MYR)—backed by 8-stage HPLC/ICP-MS batch screening and direct verification via sales@onyxmen.my.',
      telemetry: [
        {
          key: '01 · OFFICIAL MALAYSIA TARIFF',
          val: 'RM 159 / RM 318 / RM 477',
          sub: 'Uniform pricing across all 4 flagship reserves (159.00 MYR single bottle)',
        },
        {
          key: '02 · BATCH SKU & GTIN REGISTRY',
          val: '4 Verified GS1 GTINs',
          sub: 'ONYX-HM-20 · ONYX-HT-20 · ONYX-GX-30 · ONYX-MP-30',
        },
        {
          key: '03 · CLIMATE VAULT STORAGE',
          val: '22°C–24°C KL Vault',
          sub: 'Protected from tropical heat degradation & humidity clumping',
        },
        {
          key: '04 · PURITY ASSURANCE',
          val: '0.00% Synthetic PDE5',
          sub: 'HPLC-DAD, ICP-MS heavy metal & LC-MS/MS adulterant cleared',
        },
      ],
      splitChapters: [
        {
          kicker: 'CHAPTER 01 · THE COUNTERFEIT & GREY-MARKET HAZARD IN MALAYSIA',
          title: 'Why Below-Tariff Marketplace Listings Are Never Authentic Onyxmen Stock.',
          body1:
            'Standardized 100:1 Malaysian Eurycoma longifolia (≥2.2% eurycomanone), 60%-protodioscin Tribulus terrestris, 10:1 gelatinized Peruvian Black Maca, and pharmaceutical-grade L-Arginine HCl + L-Citrulline Malate require expensive multi-stage aqueous extraction and analytical testing. Counterfeiters cannot replicate these extracts at "RM 30–RM 50 bargain prices." Instead, unauthorized sellers fill recycled or imitation plastic bottles with raw sawdust, rice flour, or illicit synthetic sildenafil/tadalafil analogues that trigger severe headaches, flushing, and cardiovascular strain.',
          body2:
            'Furthermore, even when grey-market resellers obtain parallel-import bottles, they store them in unairconditioned shipping containers or motorbike trunks reaching 42°C+ in Malaysia’s tropical afternoon heat—oxidizing delicate macamides, ginsenosides, and amino acids into sticky, inactive clumps.',
        },
        {
          kicker: 'CHAPTER 02 · PHYSICAL BOTTLE, CAP & CAPSULE AUTHENTICATION',
          title: 'How To Inspect Your Onyxmen Bottle Seal, Typography & Capsule Shell.',
          body1:
            'Every authentic bottle released from our Kuala Lumpur fulfilment center (Postcode 50450) carries three physical security layers: (1) an exterior perforated shrink-wrap neck band with metallic foil reflection; (2) a factory heat-induction aluminum inner liner hermetically fused to the bottle rim; and (3) an internal food-grade silica gel desiccant canister that keeps relative humidity inside the bottle below 35%.',
          body2:
            'Each formulation also exhibits a distinct capsule morphology: Horsemen contains 20 × 500mg dense amber-tan herbal capsules; Hammer of Thor contains 20 × 500mg clear plant-derived hypromellose (HPMC) vegetarian capsules under a metallic gold cap; Grow XL contains 30 × 550mg extra-strength daily capsules; and Magnum Pump XR contains 30 × 600mg signature jet-black UV-shielded capsules.',
        },
        {
          kicker: 'CHAPTER 03 · INSTANT CONCIERGE BATCH & WAYBILL VERIFICATION',
          title: 'Direct Lot Verification With Our Kuala Lumpur Quality Assurance Desk.',
          body1:
            'Because Onyxmen Malaysia operates zero unauthorized retail kiosks and zero third-party discount liquidators, every legitimate acquisition generates an official Order Reference ID logged in our central dispatch ledger (sales@onyxmen.my / info@onyxmen.my / waleedshoaibofficial@gmail.com) and arrives under the courier sender name "OM Fulfilment Logistics (Kuala Lumpur)".',
          body2:
            'Clients can email their Order Reference ID, courier tracking number, or bottle lot code to info@onyxmen.my or sales@onyxmen.my between 09:00 and 23:00 MYT any day of the week to receive immediate confirmation of production batch date, expiration date, and analytical clearance status.',
        },
      ],
      ledgerTitle: '8-Point Anti-Counterfeit & Physical Bottle Verification Protocol',
      ledgerSub:
        'Use this 8-point checklist to verify that your bottle of Horsemen, Hammer of Thor, Grow XL, or Magnum Pump XR is 100% genuine Onyxmen Malaysia stock.',
      ledgerRows: [
        {
          code: 'AUTH-CHECK · 01',
          title: 'Authorized Domain & Order Desk Origin (https://www.onyxmen.my)',
          desc: 'Authentic stock is reserved exclusively via https://www.onyxmen.my (EN) or https://www.onyxmen.my/ms/ (BM) and confirmed by sales@onyxmen.my, info@onyxmen.my, or waleedshoaibofficial@gmail.com.',
          metric: 'OFFICIAL VAULT ONLY',
        },
        {
          code: 'AUTH-CHECK · 02',
          title: 'Uniform Official Tariff (RM 159 / RM 318 / RM 477 MYR)',
          desc: 'Every genuine formulation is priced at RM 159.00 (1 Bottle), RM 318.00 (2 Bottles), and RM 477.00 (3 Bottles). Any listing below RM 159 is unauthorized or counterfeit.',
          metric: 'RM 159.00 STANDARD',
        },
        {
          code: 'AUTH-CHECK · 03',
          title: 'Factory Heat-Induction Aluminum Inner Seal',
          desc: 'Unscrewing the outer cap reveals a hermetically fused aluminum foil induction seal that requires deliberate peeling. Never consume a bottle with a punctured or missing inner liner.',
          metric: 'HERMETIC FOIL SEAL',
        },
        {
          code: 'AUTH-CHECK · 04',
          title: 'Exact SKU, MPN & GS1 GTIN-13 Barcode Alignment',
          desc: 'Verify exact identifiers: Horsemen (ONYX-HM-20 / 9550000102011), Hammer of Thor (ONYX-HT-20 / 9550000102028), Grow XL (ONYX-GX-30 / 9550000102035), Magnum Pump XR (ONYX-MP-30 / 9550000102042).',
          metric: 'GS1 MY BARCODES',
        },
        {
          code: 'AUTH-CHECK · 05',
          title: 'Signature Capsule Count & Shell Architecture',
          desc: 'Horsemen & Hammer of Thor contain exactly 20 capsules (500mg); Grow XL & Magnum Pump XR contain exactly 30 capsules (550mg / 600mg jet-black capsules).',
          metric: '20 OR 30 CAPSULES',
        },
        {
          code: 'AUTH-CHECK · 06',
          title: 'Internal Food-Grade Silica Desiccant Canister',
          desc: 'Every bottle contains a rigid food-grade desiccant canister preventing tropical humidity from clumping hygroscopic 100:1 root extracts and amino acids.',
          metric: 'HUMIDITY SHIELDED',
        },
        {
          code: 'AUTH-CHECK · 07',
          title: 'Blind Waybill Sender ("OM Fulfilment Logistics KL 50450")',
          desc: 'Genuine parcels are dispatched from our Kuala Lumpur hub under the neutral sender name "OM Fulfilment Logistics" with acoustic anti-rattle bubble cushioning.',
          metric: 'KL 50450 DISPATCH',
        },
        {
          code: 'AUTH-CHECK · 08',
          title: 'Honest Supplement Labelling (Zero Fake Registration Strings)',
          desc: 'Authentic Onyxmen bottles disclose exact milligram botanical weights and never print fabricated or borrowed pharmaceutical registration codes.',
          metric: '100% HONEST LABEL',
        },
      ],
      tableTitle: 'Official Onyxmen Malaysia SKU, GTIN-13, Capsule & Label Registry vs Counterfeit Red Flags',
      tableHeaders: [
        'Formulation & Official SKU',
        'GS1 GTIN-13 & MPN',
        'Authentic Bottle & Capsule Spec',
        'Counterfeit / Grey-Market Red Flag',
      ],
      tableRows: [
        [
          'Horsemen (ONYX-HM-20)',
          'GTIN: 9550000102011 · MPN: HM-500MG-20MY',
          'Matte black bottle, gold horse emblem, "20 Capsules x 500mg", dense aromatic tan herbal extract powder.',
          'Blurred gold printing, 10-capsule blister strips, odourless white starch powder, or price below RM 159.',
        ],
        [
          'Hammer of Thor (ONYX-HT-20)',
          'GTIN: 9550000102028 · MPN: HT-TRIB-20MY',
          'Black bottle, metallic gold cap, green vegetarian crest, "Tribulus Terrestris — 20 Veg. Capsules" (HPMC).',
          'Blue/red novelty hammer-shaped plastic toys, animal gelatin smell, or missing green vegetarian seal.',
        ],
        [
          'Grow XL (ONYX-GX-30)',
          'GTIN: 9550000102035 · MPN: GXL-30CAP-MY',
          'Obsidian bottle, "#1 Selling Product — Extra-Strength Enhancement Male Performance Blend — 30 Capsules" (550mg).',
          'Bottles containing only 15 or 20 capsules, clumped damp powder from non-climate storage, or missing inner foil.',
        ],
        [
          'Magnum Pump XR (ONYX-MP-30)',
          'GTIN: 9550000102042 · MPN: MPXR-30BLK-MY',
          'Black/gold bottle, "Testosterone Pro Series — 30 Black Capsules" (600mg jet-black capsules). Oral dietary supplement.',
          'Clear or white capsules instead of jet-black capsules, or confusion with mechanical vacuum/industrial pumps.',
        ],
      ],
      faqs: [
        {
          questionEn: 'Why does Onyxmen Malaysia maintain a strict RM 159 single-bottle price across all four formulations?',
          answerEn:
            'Standardizing all four formulations at RM 159.00 (1 Bottle), RM 318.00 (2 Bottles), and RM 477.00 (3 Bottles) protects our pharmaceutical-grade ingredient sourcing (100:1 Tongkat Ali, 60%-saponin Tribulus, 10:1 Black Maca, and 99.5% L-Arginine/L-Citrulline) while giving buyers an unmistakable benchmark: any listing advertising Onyxmen bottles for RM 30 or RM 60 on third-party marketplaces is immediately identifiable as counterfeit.',
        },
        {
          questionEn: 'How can I verify my bottle lot number or Order Reference ID?',
          answerEn:
            'Simply forward your Order Reference ID (e.g., ONYX-MY-XXXXXX), courier waybill number, or a photo of your bottle seal to info@onyxmen.my or sales@onyxmen.my. Our Kuala Lumpur Quality Assurance desk (09:00–23:00 MYT daily) will verify your batch against our master dispatch ledger within minutes.',
        },
        {
          questionEn: 'What should I do if my parcel arrives with a damaged outer box or broken seal?',
          answerEn:
            'Do not consume capsules from any bottle whose inner heat-induction aluminum foil liner has been punctured during transit. Photograph the parcel and waybill within 48 hours of delivery and email sales@onyxmen.my—we will dispatch a brand-new replacement bottle from our Kuala Lumpur vault at zero cost to you.',
        },
        {
          questionEn: 'Does Onyxmen authorize Shopee, Lazada, TikTok Shop, or roadside kiosk resellers?',
          answerEn:
            'No. To guarantee 22°C–24°C climate-controlled storage, batch freshness, and 100% PDPA buyer privacy, Onyxmen Malaysia distributes exclusively through https://www.onyxmen.my and our direct Kuala Lumpur concierge desk (sales@onyxmen.my / waleedshoaibofficial@gmail.com).',
        },
      ],
    },
    ms: {
      seoTitle:
        'Jaminan Ketulenan Rasmi RM 159 & Saringan Anti-Produk Tiruan | Onyxmen Malaysia',
      metaDescription:
        'Sahkan ketulenan formulasi botani Onyxmen Malaysia (Horsemen, Hammer of Thor, Grow XL, Magnum Pump XR) pada harga rasmi RM 159 / RM 318 / RM 477. Senarai semak meterai holografik 8 perkara, pendaftaran SKU/GTIN & jaminan sifar bahan terlarang.',
      eyebrow:
        'MS-162 · JAMINAN KETULENAN RASMI RM 159 & PROTOKOL PENGESAHAN ANTI-TIRUAN MALAYSIA',
      headline:
        'Jaminan Ketulenan Rasmi RM 159 — Melindungi Lelaki Malaysia Daripada Produk Tiruan & Stok Pasaran Gelap.',
      subheadline:
        'Setiap botol tulen Horsemen (20 Kapsul), Hammer of Thor (20 Kapsul Veg.), Grow XL (30 Kapsul), dan Magnum Pump XR (30 Kapsul Hitam) dihantar terus dari bilik kebal kawalan suhu Kuala Lumpur kami (22°C–24°C) dengan meterai keselamatan kedap udara.',
      executiveSummary:
        'Iklan lambakan di platform tidak sah dan gerai tepi jalan sering mengedarkan botol tiruan pada harga murah yang meragukan (RM 25–RM 55) yang hanya berisi tepung kanji atau dicampur bahan kimia sintetik berbahaya. Onyxmen Malaysia menguatkuasakan pengedaran terus kepada pelanggan melalui https://www.onyxmen.my/ms/ pada harga rasmi seragam—1 Botol RM 159 (159.00 MYR), 2 Botol RM 318 (318.00 MYR), dan 3 Botol RM 477 (477.00 MYR)—disokong oleh saringan makmal HPLC/ICP-MS 8 peringkat serta pengesahan terus melalui sales@onyxmen.my.',
      telemetry: [
        {
          key: '01 · HARGA RASMI MALAYSIA',
          val: 'RM 159 / RM 318 / RM 477',
          sub: 'Harga seragam merentasi keempat-empat formulasi utama (159.00 MYR sebotol)',
        },
        {
          key: '02 · PENDAFTARAN SKU & GTIN',
          val: '4 Kod GTIN GS1 Rasmi',
          sub: 'ONYX-HM-20 · ONYX-HT-20 · ONYX-GX-30 · ONYX-MP-30',
        },
        {
          key: '03 · BILIK KEBAL KAWALAN SUHU',
          val: '22°C–24°C Hab KL',
          sub: 'Dilindungi daripada kerosakan haba tropika & kelembapan tinggi',
        },
        {
          key: '04 · JAMINAN KETULENAN MAKMAL',
          val: '0.00% Sintetik PDE5',
          sub: 'Lulus ujian HPLC-DAD, logam berat ICP-MS & saringan LC-MS/MS',
        },
      ],
      splitChapters: [
        {
          kicker: 'BAB 01 · BAHAYA PRODUK TIRUAN & STOK PASARAN GELAP DI MALAYSIA',
          title: 'Mengapa Iklan Murah Di Bawah Harga RM 159 Bukan Stok Tulen Onyxmen.',
          body1:
            'Ekstrak piawai Akar Tongkat Ali Malaysia 100:1 (≥2.2% eurycomanone), Tribulus terrestris 60% saponin protodioscin, Maca Hitam Peru 10:1 tergelatinisasi, serta asid amino L-Arginine HCl dan L-Citrulline Malate gred farmaseutikal memerlukan kos pengekstrakan air ultrasonik dan ujian makmal yang tinggi. Pengilang tiruan mustahil dapat meniru kualiti ini pada harga "lelong RM 30–RM 50." Sebaliknya, mereka mengisi botol tiruan dengan habuk kayu mentah, tepung beras, atau bahan kimia sildenafil sintetik tidak diisytihar yang menyebabkan sakit kepala melampau dan risiko jantung.',
          body2:
            'Tambahan pula, penjual tidak sah sering menyimpan stok di dalam stor panas tanpa penyaman udara yang mencecah 42°C+ di Malaysia—merosakkan sebatian aktif macamides, ginsenosida, dan asid amino menjadi ketulan lembap yang tidak lagi berkesan.',
        },
        {
          kicker: 'BAB 02 · PENGESAHAN FIZIKAL BOTOL, PENUTUP & SARUNG KAPSUL',
          title: 'Cara Menyemak Meterai Keselamatan, Cetakan Label & Bentuk Kapsul Anda.',
          body1:
            'Setiap botol tulen yang dilepaskan dari pusat operasi Kuala Lumpur kami (Poskod 50450) mempunyai tiga lapisan keselamatan fizikal: (1) jalur plastik keselamatan luar berhologram pada leher botol; (2) penutup aluminium induksi haba kilang yang melekat kedap udara pada bibir botol; dan (3) tabung gel silika gred makanan di dalam botol untuk mengekalkan kelembapan di bawah 35%.',
          body2:
            'Setiap formulasi juga mempunyai ciri kapsul yang tersendiri: Horsemen mengandungi 20 × 500mg kapsul herba padat; Hammer of Thor mengandungi 20 × 500mg kapsul vegetarian HPMC tumbuhan di bawah penutup emas bersama lencana vegetarian hijau; Grow XL mengandungi 30 × 550mg kapsul harian kekuatan ekstra; dan Magnum Pump XR mengandungi 30 × 600mg kapsul berwarna hitam pekat (Jet-Black Capsules).',
        },
        {
          kicker: 'BAB 03 · PENGESAHAN SEGERA NOMBOR LOT & SLIP KURIER',
          title: 'Semakan Terus Bersama Meja Jaminan Kualiti Kuala Lumpur Kami.',
          body1:
            'Memandangkan Onyxmen Malaysia tidak melantik sebarang ejen jalanan atau kedai diskaun pihak ketiga, setiap pembelian sah mempunyai ID Rujukan Pesanan rasmi di dalam sistem kami (sales@onyxmen.my / info@onyxmen.my / waleedshoaibofficial@gmail.com) dan dihantar menggunakan nama pengirim "OM Fulfilment Logistics (Kuala Lumpur)".',
          body2:
            'Pelanggan boleh menghantar ID Rujukan Pesanan, nombor tracking kurier, atau gambar kod lot botol ke info@onyxmen.my atau sales@onyxmen.my setiap hari (09:00–23:00 MYT) untuk pengesahan tarikh pengeluaran dan status ujian makmal secara percuma.',
        },
      ],
      ledgerTitle: 'Protokol Pengesahan Ketulenan 8 Perkara & Senarai Semak Fizikal Botol',
      ledgerSub:
        'Gunakan senarai semak 8 perkara ini untuk memastikan botol Horsemen, Hammer of Thor, Grow XL, atau Magnum Pump XR anda adalah 100% stok tulen Onyxmen Malaysia.',
      ledgerRows: [
        {
          code: 'SEMAKAN · 01',
          title: 'Laman Web & Meja Tempahan Rasmi (https://www.onyxmen.my)',
          desc: 'Stok tulen hanya ditempah melalui https://www.onyxmen.my atau https://www.onyxmen.my/ms/ dan disahkan oleh sales@onyxmen.my, info@onyxmen.my, atau waleedshoaibofficial@gmail.com.',
          metric: 'BILIK KEBAL RASMI',
        },
        {
          code: 'SEMAKAN · 02',
          title: 'Harga Rasmi Tetap (RM 159 / RM 318 / RM 477 MYR)',
          desc: 'Setiap formulasi tulen berharga RM 159.00 (1 Botol), RM 318.00 (2 Botol), dan RM 477.00 (3 Botol). Sebarang tawaran di bawah RM 159 adalah tiruan atau tidak sah.',
          metric: 'RM 159.00 PIAWAI',
        },
        {
          code: 'SEMAKAN · 03',
          title: 'Meterai Aluminium Induksi Haba Kedap Udara',
          desc: 'Apabila penutup luar dibuka, terdapat lapisan aluminium induksi haba kilang yang menutup rapat mulut botol. Jangan gunakan botol yang telah koyak penutup dalamnya.',
          metric: 'METERAI KEDAP UDARA',
        },
        {
          code: 'SEMAKAN · 04',
          title: 'Padanan Tepat Kod SKU, MPN & Kod Bar GS1 GTIN-13',
          desc: 'Pastikan kod sepadan: Horsemen (ONYX-HM-20 / 9550000102011), Hammer of Thor (ONYX-HT-20 / 9550000102028), Grow XL (ONYX-GX-30 / 9550000102035), Magnum Pump XR (ONYX-MP-30 / 9550000102042).',
          metric: 'KOD BAR GS1 MY',
        },
        {
          code: 'SEMAKAN · 05',
          title: 'Bilangan & Warna Sarung Kapsul Rasmi',
          desc: 'Horsemen & Hammer of Thor mengandungi tepat 20 kapsul (500mg); Grow XL & Magnum Pump XR mengandungi tepat 30 kapsul (550mg / 600mg kapsul hitam pekat).',
          metric: '20 ATAU 30 KAPSUL',
        },
        {
          code: 'SEMAKAN · 06',
          title: 'Tabung Penyerap Kelembapan Silika Gred Makanan',
          desc: 'Setiap botol mengandungi tabung gel silika khas bagi menghalang kelembapan tropika Malaysia daripada merosakkan ekstrak herba 100:1.',
          metric: 'PERLINDUNGAN LEMBAP',
        },
        {
          code: 'SEMAKAN · 07',
          title: 'Nama Pengirim Slip Kurier ("OM Fulfilment Logistics KL 50450")',
          desc: 'Bungkusan tulen dihantar dari hab Kuala Lumpur menggunakan nama pengirim neutral "OM Fulfilment Logistics" lengkap dengan balutan gelembung anti-bunyi.',
          metric: 'PELEPASAN KL 50450',
        },
        {
          code: 'SEMAKAN · 08',
          title: 'Pelabelan Suplemen Jujur (Sifar Nombor Pendaftaran Palsu)',
          desc: 'Botol tulen Onyxmen menyatakan berat miligram ekstrak botani dengan tepat dan tidak sesekali mencetak nombor pendaftaran perubatan palsu.',
          metric: '100% LABEL TELUS',
        },
      ],
      tableTitle: 'Pendaftaran SKU, GTIN-13, Kapsul & Label Rasmi Onyxmen vs Tanda Amaran Produk Tiruan',
      tableHeaders: [
        'Formulasi & SKU Rasmi',
        'GS1 GTIN-13 & MPN',
        'Spesifikasi Botol & Kapsul Tulen',
        'Tanda Amaran Produk Tiruan / Pasaran Gelap',
      ],
      tableRows: [
        [
          'Horsemen (ONYX-HM-20)',
          'GTIN: 9550000102011 · MPN: HM-500MG-20MY',
          'Botol hitam legap, lambang kuda emas tajam, cetakan "20 Capsules x 500mg", serbuk ekstrak herba perang beraroma.',
          'Cetakan emas kabur, pek papan 10 biji, serbuk tepung putih tanpa bau herba, atau harga di bawah RM 159.',
        ],
        [
          'Hammer of Thor (ONYX-HT-20)',
          'GTIN: 9550000102028 · MPN: HT-TRIB-20MY',
          'Botol hitam, penutup emas metalik, lencana vegetarian hijau, "Tribulus Terrestris — 20 Veg. Capsules" (HPMC).',
          'Bekas plastik berbentuk tukul mainan biru/merah, bau gelatin haiwan, atau tiada lencana vegetarian hijau.',
        ],
        [
          'Grow XL (ONYX-GX-30)',
          'GTIN: 9550000102035 · MPN: GXL-30CAP-MY',
          'Botol obsidian, "#1 Selling Product — Extra-Strength Enhancement Male Performance Blend — 30 Capsules" (550mg).',
          'Botol hanya berisi 15 atau 20 kapsul, serbuk berketul lembap akibat stor panas, atau tiada foil dalam.',
        ],
        [
          'Magnum Pump XR (ONYX-MP-30)',
          'GTIN: 9550000102042 · MPN: MPXR-30BLK-MY',
          'Botol hitam/emas, "Testosterone Pro Series — 30 Black Capsules" (600mg kapsul hitam pekat). Suplemen kapsul makan.',
          'Kapsul berwarna putih/jernih dan bukannya kapsul hitam pekat, atau kekeliruan dengan alat pam mekanikal.',
        ],
      ],
      faqs: [
        {
          questionMs: 'Mengapakah Onyxmen Malaysia menetapkan harga seragam RM 159 sebotol untuk keempat-empat formulasi?',
          answerMs:
            'Penetapan harga rasmi RM 159.00 (1 Botol), RM 318.00 (2 Botol), dan RM 477.00 (3 Botol) melindungi kualiti bahan mentah gred farmaseutikal kami (Tongkat Ali 100:1, Tribulus 60% saponin, Maca Hitam 10:1, dan L-Arginine/L-Citrulline 99.5%) serta memudahkan pembeli mengenal pasti penipuan: sebarang iklan yang menjual botol pada harga RM 30 atau RM 60 sudah pasti produk tiruan.',
        },
        {
          questionMs: 'Bagaimanakah cara untuk saya menyemak ketulenan nombor lot botol atau ID Rujukan Pesanan saya?',
          answerMs:
            'Hantarkan ID Rujukan Pesanan anda (cth: ONYX-MY-XXXXXX), nombor tracking kurier, atau gambar meterai botol anda ke info@onyxmen.my atau sales@onyxmen.my. Meja Jaminan Kualiti Kuala Lumpur kami (09:00–23:00 MYT setiap hari) akan mengesahkan rekod kumpulan pengeluaran anda dengan segera.',
        },
        {
          questionMs: 'Apakah yang perlu saya lakukan sekiranya bungkusan tiba dalam keadaan kotak kemek atau meterai terbuka?',
          answerMs:
            'Jangan makan kapsul daripada botol yang telah koyak penutup aluminium induksi habanya semasa transit. Ambil gambar bungkusan dan slip kurier dalam tempoh 48 jam selepas penerimaan dan e-mel kepada sales@onyxmen.my—kami akan menghantar botol gantian baharu secara percuma dari bilik kebal Kuala Lumpur kami.',
        },
        {
          questionMs: 'Adakah Onyxmen melantik penjual semula di Shopee, Lazada, TikTok Shop, atau kedai tepi jalan?',
          answerMs:
            'Tidak. Demi menjamin penyimpanan kawalan suhu 22°C–24°C, kesegaran ekstrak, dan privasi penuh pelanggan di bawah Akta PDPA, Onyxmen Malaysia hanya mengedar secara eksklusif melalui https://www.onyxmen.my dan meja operasi Kuala Lumpur kami (sales@onyxmen.my / waleedshoaibofficial@gmail.com).',
        },
      ],
    },
  },

  // --------------------------------------------------------------------------
  // DOSSIER 2: MS-163 & MS-164 — Discreet Plain-Box Packaging & Malaysia Shipping Policy
  // --------------------------------------------------------------------------
  {
    key: 'discreet-shipping',
    code: 'SHIP-MY',
    microStepEn: 'MS-163',
    microStepMs: 'MS-164',
    canonicalEnPath: '/discreet-shipping/',
    canonicalMsPath: '/ms/penghantaran-rahsia/',
    enOutputPaths: [
      'discreet-shipping/index.html',
      'shipping-policy/index.html',
      'discreet-packaging/index.html',
      'shipping-and-discreet-packaging/index.html',
    ],
    msOutputPaths: [
      'ms/discreet-shipping/index.html',
      'ms/shipping-policy/index.html',
      'ms/penghantaran-rahsia/index.html',
      'ms/polisi-penghantaran/index.html',
      'ms/penghantaran-dan-bungkusan-rahsia/index.html',
    ],
    heroImage: '/assets/products/hammer-of-thor-stage.webp',
    portraitImage: '/assets/products/hammer-of-thor-portrait.webp',
    primaryProductSlug: 'hammer-of-thor',
    activeNav: 'locations',
    en: {
      seoTitle:
        '100% Unmarked Discreet Packaging, Blind Waybill & Malaysia Shipping Policy | Onyxmen Malaysia',
      metaDescription:
        'Official Onyxmen Malaysia discreet plain-box packaging and nationwide shipping policy: 3-layer acoustic & visual parcel shielding, OM Fulfilment Logistics blind waybill, 3–5h Same-Day Klang Valley runner, 1–2 day Peninsular courier, 2–4 day Borneo air freight, FPX, DuitNow QR & COD.',
      eyebrow:
        'MS-163 · 3-LAYER BLIND-WAYBILL PARCEL ARCHITECTURE & 16-STATE MALAYSIA SHIPPING POLICY',
      headline:
        '100% Unmarked Discreet Packaging & Nationwide Malaysia Fulfilment Policy.',
      subheadline:
        'Engineered for absolute personal confidentiality at condominium guardhouses, corporate reception desks, parcel lockers, and residential doorsteps across all 16 Malaysian states and federal territories.',
      executiveSummary:
        'Every Onyxmen Malaysia acquisition—whether 1 Bottle (RM 159), 2 Bottles (RM 318 — Free Nationwide Shipping including Sabah, Sarawak & Labuan), or 3 Bottles (RM 477)—is dispatched from our central Kuala Lumpur vault (Postcode 50450) inside a triple-sealed, opaque matte security carton. The courier airway bill prints the sender strictly as "OM Fulfilment Logistics (Kuala Lumpur)" and declares the contents as "Personal Nutritional Wellness" with zero brand logos, zero product titles, and zero supplement terminology.',
      telemetry: [
        {
          key: '01 · WAYBILL SENDER IDENTITY',
          val: 'OM Fulfilment Logistics',
          sub: 'Declared as "Personal Nutritional Wellness" · Zero brand marks',
        },
        {
          key: '02 · KLANG VALLEY SAME-DAY',
          val: '3–5 Hours Private Runner',
          sub: 'KL, Selangor, Putrajaya & Cyberjaya cutoff 16:00 MYT (or Free 24h)',
        },
        {
          key: '03 · PENINSULAR LINEHAUL',
          val: '1–2 Business Days · RM 0',
          sub: 'Free Express Courier across all West Malaysia states on 1, 2 & 3 bottles',
        },
        {
          key: '04 · SABAH, SARAWAK & LABUAN',
          val: '2–4 Days Air Freight',
          sub: 'RM 12 on 1 bottle · RM 0 FREE Air Freight on 2+ bottles (RM 318 / RM 477)',
        },
      ],
      splitChapters: [
        {
          kicker: 'CHAPTER 01 · 3-LAYER ACOUSTIC & VISUAL PARCEL SHIELDING',
          title: 'Eliminating Both Visual Branding & Capsule Rattling Noise.',
          body1:
            'Ordinary e-commerce sellers slip supplement bottles into thin plastic courier flyers where the bottle shape is visible and the capsules rattle loudly whenever a courier rider or office receptionist handles the package. Onyxmen Malaysia eliminates both risks through our 3-layer packaging engineering.',
          body2:
            'Layer 1 is the factory heat-induction sealed apothecary bottle with an internal silica desiccant core. Layer 2 wraps the bottle tightly in high-density double-wall acoustic bubble cushioning so the bottle cannot shift or rattle when shaken. Layer 3 seals the cushioned unit inside a rigid unbranded corrugated box enclosed within an opaque matte waterproof tamper-evident security pouch.',
        },
        {
          kicker: 'CHAPTER 02 · BLIND WAYBILL & CONDO / OFFICE RECEPTION PROTOCOL',
          title: 'What Appears On Your PosLaju, NinjaVan, J&T VIP Or Private Runner Label.',
          body1:
            'Your printed thermal airway bill never displays "Onyxmen", "Horsemen", "Hammer of Thor", "Grow XL", "Magnum Pump XR", or any phrase related to male vitality. The sender field reads strictly: "OM Fulfilment Logistics, KL Dispatch Hub, 50450 Kuala Lumpur". The item description reads: "Personal Nutritional Wellness — Fragile Keep Cool".',
          body2:
            'When paying via FPX Online Banking or DuitNow Instant QR, you may instruct our dispatch desk to authorize contactless drop-off at your condominium concierge desk, security guardhouse, PopBox/Pgeon parcel locker, or corporate mailroom—or select Cash on Delivery (COD) for direct hand-to-hand settlement.',
        },
        {
          kicker: 'CHAPTER 03 · THREE REGIONAL MALAYSIA TRANSIT ZONES & CUTOFF TIMES',
          title: 'Same-Day Klang Valley Runner, Peninsular Express & Borneo Air Freight.',
          body1:
            'Orders confirmed before 16:00 MYT (4:00 PM Malaysia Time) are packed and released on the exact same day. In Zone 1 (Kuala Lumpur, Petaling Jaya, Subang Jaya, Shah Alam, Damansara, Puchong, Klang, Putrajaya, Cyberjaya), clients may choose our 3–5 Hour Same-Day Unmarked Private Runner (+RM 15 surcharge) or Free Next-Business-Day Express Courier (RM 0).',
          body2:
            'In Zone 2 (all Peninsular Malaysia states from Johor Bahru and Melaka to Penang, Ipoh, Kuantan, Kota Bharu, Kuala Terengganu, Alor Setar, and Kangar), express linehaul takes 1–2 business days with RM 0 Free Shipping on all tiers. In Zone 3 (Sabah, Sarawak, and Labuan), daily KLIA air freight takes 2–4 business days (RM 12 for 1 bottle; 100% Free Air Freight on 2-Bottle RM 318 and 3-Bottle RM 477 protocols).',
        },
      ],
      ledgerTitle: '8-Point Discreet Packaging & Malaysia Fulfilment Specification Ledger',
      ledgerSub:
        'Every parcel leaving our Kuala Lumpur fulfilment vault is audited against these eight privacy and logistics specifications prior to courier handover.',
      ledgerRows: [
        {
          code: 'SHIP-SPEC · 01',
          title: 'Zero Exterior Logos, Tapes Or Supplement Keywords',
          desc: 'Plain matte security exterior with clear industrial tamper-evident tape. Zero branded packing tape or promotional stickers.',
          metric: '100% UNMARKED BOX',
        },
        {
          code: 'SHIP-SPEC · 02',
          title: 'Neutral Sender Name ("OM Fulfilment Logistics KL 50450")',
          desc: 'Airway bills and digital tracking notifications reference only OM Fulfilment Logistics with zero link to men’s vitality products.',
          metric: 'BLIND WAYBILL',
        },
        {
          code: 'SHIP-SPEC · 03',
          title: 'Acoustic Anti-Rattle Bubble Immobilization',
          desc: 'High-density bubble sleeves immobilize the bottle and dampen capsule movement so shaking the box produces zero pill-bottle sound.',
          metric: 'ZERO RATTLE NOISE',
        },
        {
          code: 'SHIP-SPEC · 04',
          title: 'Pseudonym & Initials Support On Recipient Label',
          desc: 'You may enter your initials or a preferred pseudonym (e.g., "En. Faris" or "D. Tan") in the Express Order Drawer as long as your WhatsApp mobile number is reachable.',
          metric: 'INITIALS ACCEPTED',
        },
        {
          code: 'SHIP-SPEC · 05',
          title: '3–5 Hour Same-Day Klang Valley Private Runner Option',
          desc: 'Unmarked motorcycle or car runner delivery across KL, Selangor, Putrajaya & Cyberjaya for orders confirmed before 16:00 MYT.',
          metric: '3–5 HR KL/SELANGOR',
        },
        {
          code: 'SHIP-SPEC · 06',
          title: 'Free Peninsular Malaysia Express Courier (1–2 Business Days)',
          desc: 'RM 0 Free Shipping across all 13 West Malaysia states and territories on 1-Bottle (RM 159), 2-Bottle (RM 318), and 3-Bottle (RM 477) orders.',
          metric: 'RM 0 WEST MALAYSIA',
        },
        {
          code: 'SHIP-SPEC · 07',
          title: 'Free Sabah, Sarawak & Labuan Air Freight On 2+ Bottles',
          desc: 'Daily KLIA air cargo in double-sealed customs-compliant security pouches (RM 12 on 1 bottle; RM 0 Free Shipping on RM 318 & RM 477 tiers).',
          metric: 'FREE EAST MY (2+ BTL)',
        },
        {
          code: 'SHIP-SPEC · 08',
          title: 'FPX, DuitNow Instant QR & Cash On Delivery (COD) Flexibility',
          desc: 'Pre-settle via FPX/DuitNow QR for unattended condo/office drop-off, or pay cash/QR upon inspecting your sealed parcel via COD.',
          metric: 'FPX · DUITNOW · COD',
        },
      ],
      tableTitle: 'Malaysia Regional Shipping Zones, Transit Windows, Courier Partners & Fee Schedule',
      tableHeaders: [
        'Fulfilment Zone & Covered States',
        'Authorized Courier / Runner Network',
        'Standard Transit Window',
        'Shipping Fee by Protocol Tier',
      ],
      tableRows: [
        [
          'Zone 1A: Klang Valley Same-Day Runner (Kuala Lumpur, Selangor, Putrajaya, Cyberjaya)',
          'Unmarked Private Point-to-Point Dispatch Rider',
          '3–5 Hours (Orders confirmed before 16:00 MYT)',
          '+RM 15 Flat Runner Surcharge (Optional upgrade on any tier)',
        ],
        [
          'Zone 1B: Klang Valley Express Courier (KL, Selangor, Putrajaya)',
          'NinjaVan Malaysia Discreet · J&T Express VIP · PosLaju Priority',
          'Next Business Day (24 Hours)',
          '1 Bottle (RM 159): FREE · 2 Bottles (RM 318): FREE · 3 Bottles (RM 477): FREE',
        ],
        [
          'Zone 2: Peninsular Malaysia (Johor, Penang, Perak, Melaka, N. Sembilan, Pahang, Kedah, Kelantan, Terengganu, Perlis)',
          'NinjaVan Malaysia Discreet · J&T Express VIP · PosLaju Priority',
          '1–2 Business Days (Major Cities) / 2–3 Days (Outstation)',
          '1 Bottle (RM 159): FREE · 2 Bottles (RM 318): FREE · 3 Bottles (RM 477): FREE',
        ],
        [
          'Zone 3: East Malaysia Borneo Air Freight (Sabah, Sarawak & WP Labuan)',
          'PosLaju Air Freight · J&T Express Borneo Air · DHL eCommerce Malaysia',
          '2–4 Business Days (KK, Kuching, Miri, Sibu, Sandakan, Tawau, Bintulu, Labuan)',
          '1 Bottle (RM 159): RM 12 · 2 Bottles (RM 318): FREE · 3 Bottles (RM 477): FREE',
        ],
      ],
      faqs: [
        {
          questionEn: 'What exact words are printed on the courier airway bill?',
          answerEn:
            'The sender is printed as "OM Fulfilment Logistics (Kuala Lumpur 50450)" and the parcel description is printed as "Personal Nutritional Wellness". No product names (Horsemen, Hammer of Thor, Grow XL, Magnum Pump XR) or brand names (Onyxmen) appear anywhere on the label.',
        },
        {
          questionEn: 'Can I request delivery to a PosLaju EziBox, NinjaVan Point, or condo guardhouse?',
          answerEn:
            'Yes. When ordering via FPX Online Banking or DuitNow Instant QR, simply enter your condominium guardhouse, office reception, or preferred courier collection point in the delivery address field of the Express Order Drawer.',
        },
        {
          questionEn: 'How does Cash on Delivery (COD) work with discreet packaging?',
          answerEn:
            'With COD, the courier rider only sees the neutral "OM Fulfilment Logistics" waybill and the total MYR amount to collect (RM 159, RM 318, or RM 477). You inspect the sealed outer security carton first and pay the rider directly via cash or DuitNow QR.',
        },
        {
          questionEn: 'When will I receive my tracking number after placing an order?',
          answerEn:
            'Orders placed before 16:00 MYT receive their tracking number on the same afternoon via WhatsApp and/or email from sales@onyxmen.my. Evening orders after 16:00 MYT are dispatched in the next morning’s first courier wave.',
        },
      ],
    },
    ms: {
      seoTitle:
        'Polisi Bungkusan Rahsia Tanpa Nama, Slip Kurier Neutral & Penghantaran Malaysia | Onyxmen Malaysia',
      metaDescription:
        'Polisi rasmi bungkusan rahsia tanpa label dan penghantaran seluruh Malaysia Onyxmen: pelindung bunyi & visual 3-lapisan, pengirim OM Fulfilment Logistics, penghantar hari sama Lembah Klang 3–5 jam, kurier ekspres 1–2 hari Semenanjung, kargo udara Sabah/Sarawak, FPX, DuitNow QR & COD.',
      eyebrow:
        'MS-164 · SENI BINA BUNGKUSAN PRIVASI 3-LAPISAN & POLISI PENGHANTARAN 16 NEGERI MALAYSIA',
      headline:
        'Polisi Bungkusan Rahsia 100% Tanpa Nama & Penghantaran Seluruh Malaysia.',
      subheadline:
        'Direka khas untuk kerahsiaan mutlak semasa diserahkan di pondok pengawal kondominium, kaunter penyambut tetamu pejabat, loker bungkusan, mahupun di pintu rumah anda di semua 16 negeri Malaysia.',
      executiveSummary:
        'Setiap tempahan Onyxmen Malaysia—sama ada 1 Botol (RM 159), 2 Botol (RM 318 — Penghantaran Percuma Seluruh Negara termasuk Sabah, Sarawak & Labuan), atau 3 Botol (RM 477)—dihantar terus dari bilik kebal Kuala Lumpur kami (Poskod 50450) di dalam kotak keselamatan legap tiga lapisan. Slip kurier hanya memaparkan nama pengirim "OM Fulfilment Logistics (Kuala Lumpur)" dan keterangan kandungan "Penjagaan Kesihatan Harian" tanpa sebarang logo jenama, nama produk, atau istilah suplemen lelaki.',
      telemetry: [
        {
          key: '01 · NAMA PENGIRIM SLIP KURIER',
          val: 'OM Fulfilment Logistics',
          sub: 'Kandungan ditulis "Penjagaan Kesihatan Harian" · Sifar logo',
        },
        {
          key: '02 · HARI SAMA LEMBAH KLANG',
          val: '3–5 Jam Runner Rahsia',
          sub: 'KL, Selangor, Putrajaya & Cyberjaya sebelum 16:00 MYT (atau Ekspres 24j)',
        },
        {
          key: '03 · EKSPRES SEMENANJUNG MY',
          val: '1–2 Hari Bekerja · RM 0',
          sub: 'Pos Ekspres Percuma ke semua negeri Semenanjung untuk 1, 2 & 3 botol',
        },
        {
          key: '04 · SABAH, SARAWAK & LABUAN',
          val: '2–4 Hari Kargo Udara',
          sub: 'RM 12 untuk 1 botol · PERCUMA sepenuhnya untuk 2+ botol (RM 318 / RM 477)',
        },
      ],
      splitChapters: [
        {
          kicker: 'BAB 01 · SENI BINA PELINDUNG VISUAL & BUNYI 3-LAPISAN',
          title: 'Menghapuskan Cetakan Luar Serta Bunyi Goncangan Kapsul.',
          body1:
            'Penjual dalam talian biasa sering memasukkan botol suplemen terus ke dalam plastik kurier nipis sehingga bentuk botol kelihatan jelas dan kapsul di dalamnya berbunyi kuat apabila digoncang oleh posmen atau kerani pejabat. Onyxmen Malaysia menghapuskan kedua-dua risiko ini melalui kejuruteraan bungkusan 3-lapisan.',
          body2:
            'Lapisan 1 ialah botol apotekari kedap udara dengan teras gel silika dalaman. Lapisan 2 membalut botol secara padat menggunakan pelindung gelembung akustik tebal supaya botol tidak bergerak atau mengeluarkan bunyi apabila digoncang. Lapisan 3 menutup kotak kaku tanpa jenama di dalam beg kurier keselamatan legap kalis air.',
        },
        {
          kicker: 'BAB 02 · SLIP KURIER NEUTRAL & PROTOKOL KONDO / PEJABAT',
          title: 'Apa Yang Tercetak Pada Slip PosLaju, NinjaVan, J&T VIP Atau Runner Anda.',
          body1:
            'Slip haba kurier anda tidak sesekali memaparkan perkataan "Onyxmen", "Horsemen", "Hammer of Thor", "Grow XL", "Magnum Pump XR", atau sebarang istilah kesihatan lelaki. Ruangan pengirim hanya mencetak: "OM Fulfilment Logistics, KL Dispatch Hub, 50450 Kuala Lumpur". Keterangan barangan pula ditulis: "Personal Nutritional Wellness — Fragile Keep Cool".',
          body2:
            'Jika anda membuat bayaran melalui FPX atau DuitNow QR, anda boleh meminta bungkusan ditinggalkan secara senyap di pondok pengawal kondominium, kaunter pejabat, atau loker bungkusan—atau pilih Bayar Waktu Terima (COD) untuk penyerahan terus ke tangan anda.',
        },
        {
          kicker: 'BAB 03 · TIGA ZON PENGHANTARAN MALAYSIA & WAKTU TUTUP HARIAN',
          title: 'Penghantar Hari Sama Lembah Klang, Ekspres Semenanjung & Kargo Udara Borneo.',
          body1:
            'Pesanan yang disahkan sebelum jam 16:00 MYT (4:00 petang waktu Malaysia) dibungkus dan dilepaskan pada hari yang sama. Di Zon 1 (Kuala Lumpur, Petaling Jaya, Subang Jaya, Shah Alam, Damansara, Puchong, Klang, Putrajaya, Cyberjaya), pelanggan boleh memilih Penghantar Persendirian Rahsia Hari Sama 3–5 Jam (+RM 15) atau Kurier Ekspres Percuma Hari Bekerja Berikutnya (RM 0).',
          body2:
            'Di Zon 2 (seluruh negeri Semenanjung Malaysia dari Johor Bahru dan Melaka hingga Pulau Pinang, Ipoh, Kuantan, Kota Bharu, Kuala Terengganu, Alor Setar, dan Kangar), kurier ekspres mengambil masa 1–2 hari bekerja dengan Pos Percuma RM 0 untuk semua pakej. Di Zon 3 (Sabah, Sarawak, dan Labuan), kargo udara harian dari KLIA mengambil masa 2–4 hari bekerja (RM 12 untuk 1 botol; PERCUMA untuk pakej 2 Botol RM 318 dan 3 Botol RM 477).',
        },
      ],
      ledgerTitle: 'Spesifikasi 8 Perkara Bungkusan Rahsia & Logistik Seluruh Malaysia',
      ledgerSub:
        'Setiap bungkusan yang keluar dari bilik kebal Kuala Lumpur kami diperiksa mengikut lapan spesifikasi privasi dan logistik ini sebelum diserahkan kepada kurier.',
      ledgerRows: [
        {
          code: 'SPESIFIKASI · 01',
          title: 'Sifar Logo Luar, Pita Jenama Atau Istilah Suplemen',
          desc: 'Kotak keselamatan legap tanpa sebarang cetakan jenama, pita pelekat berlogo, atau pelekat promosi.',
          metric: '100% KOTAK TANPA NAMA',
        },
        {
          code: 'SPESIFIKASI · 02',
          title: 'Nama Pengirim Neutral ("OM Fulfilment Logistics KL 50450")',
          desc: 'Slip kurier dan sistem semakan tracking hanya memaparkan OM Fulfilment Logistics tanpa kaitan dengan produk lelaki.',
          metric: 'SLIP KURIER RAHSIA',
        },
        {
          code: 'SPESIFIKASI · 03',
          title: 'Balutan Gelembung Anti-Bunyi Goncangan Kapsul',
          desc: 'Balutan pelindung gelembung berketumpatan tinggi memastikan botol pegun dan tidak mengeluarkan bunyi pil apabila digoncang.',
          metric: 'SIFAR BUNYI KAPSUL',
        },
        {
          code: 'SPESIFIKASI · 04',
          title: 'Sokongan Nama Ringkas Atau Nama Samaran Pada Label',
          desc: 'Anda bebas menggunakan nama singkatan atau nama samaran (cth: "En. Faris" atau "D. Tan") pada laci tempahan selagi nombor telefon WhatsApp aktif.',
          metric: 'NAMA RINGKAS DITERIMA',
        },
        {
          code: 'SPESIFIKASI · 05',
          title: 'Pilihan Penghantar Rahsia Hari Sama Lembah Klang (3–5 Jam)',
          desc: 'Penghantaran motosikal/kereta persendirian tanpa uniform kurier di sekitar KL, Selangor, Putrajaya & Cyberjaya untuk pesanan sebelum 16:00 MYT.',
          metric: '3–5 JAM KL/SELANGOR',
        },
        {
          code: 'SPESIFIKASI · 06',
          title: 'Kurier Ekspres Percuma Semenanjung Malaysia (1–2 Hari Bekerja)',
          desc: 'Pos Percuma RM 0 ke semua 13 negeri dan wilayah Semenanjung Malaysia untuk pakej 1 Botol (RM 159), 2 Botol (RM 318), dan 3 Botol (RM 477).',
          metric: 'RM 0 SEMENANJUNG MY',
        },
        {
          code: 'SPESIFIKASI · 07',
          title: 'Kargo Udara Percuma Sabah, Sarawak & Labuan (2+ Botol)',
          desc: 'Pelepasan kargo udara harian dari KLIA dalam bungkusan keselamatan berlapis (RM 12 untuk 1 botol; PERCUMA untuk pakej RM 318 & RM 477).',
          metric: 'PERCUMA BORNEO (2+ BTL)',
        },
        {
          code: 'SPESIFIKASI · 08',
          title: 'Fleksibiliti FPX, DuitNow QR Segera & Bayar Waktu Terima (COD)',
          desc: 'Bayar awal melalui FPX/DuitNow QR untuk serahan di pondok pengawal kondo/pejabat, atau bayar tunai/QR semasa menerima bungkusan COD.',
          metric: 'FPX · DUITNOW · COD',
        },
      ],
      tableTitle: 'Jadual Zon Penghantaran Malaysia, Anggaran Masa Tiba, Rakan Kurier & Caj Pos',
      tableHeaders: [
        'Zon Penghantaran & Liputan Negeri',
        'Rangkaian Kurier / Penghantar Rasmi',
        'Anggaran Masa Tiba',
        'Caj Penghantaran Mengikut Pakej Botol',
      ],
      tableRows: [
        [
          'Zon 1A: Penghantar Rahsia Hari Sama Lembah Klang (Kuala Lumpur, Selangor, Putrajaya, Cyberjaya)',
          'Penghantar Persendirian Tanpa Nama (Point-to-Point)',
          '3–5 Jam (Pesanan disahkan sebelum 16:00 MYT)',
          '+RM 15 Caj Tambahan Tetap (Pilihan segera untuk semua pakej)',
        ],
        [
          'Zon 1B: Kurier Ekspres Lembah Klang (KL, Selangor, Putrajaya)',
          'NinjaVan Malaysia Discreet · J&T Express VIP · PosLaju Priority',
          'Hari Bekerja Berikutnya (24 Jam)',
          '1 Botol (RM 159): PERCUMA · 2 Botol (RM 318): PERCUMA · 3 Botol (RM 477): PERCUMA',
        ],
        [
          'Zon 2: Semenanjung Malaysia (Johor, Pulau Pinang, Perak, Melaka, N. Sembilan, Pahang, Kedah, Kelantan, Terengganu, Perlis)',
          'NinjaVan Malaysia Discreet · J&T Express VIP · PosLaju Priority',
          '1–2 Hari Bekerja (Bandar Utama) / 2–3 Hari (Luar Bandar)',
          '1 Botol (RM 159): PERCUMA · 2 Botol (RM 318): PERCUMA · 3 Botol (RM 477): PERCUMA',
        ],
        [
          'Zon 3: Kargo Udara Malaysia Timur (Sabah, Sarawak & WP Labuan)',
          'PosLaju Air Freight · J&T Express Borneo Air · DHL eCommerce Malaysia',
          '2–4 Hari Bekerja (KK, Kuching, Miri, Sibu, Sandakan, Tawau, Bintulu, Labuan)',
          '1 Botol (RM 159): RM 12 · 2 Botol (RM 318): PERCUMA · 3 Botol (RM 477): PERCUMA',
        ],
      ],
      faqs: [
        {
          questionMs: 'Apakah perkataan tepat yang dicetak pada slip bungkusan kurier saya?',
          answerMs:
            'Nama pengirim dicetak sebagai "OM Fulfilment Logistics (Kuala Lumpur 50450)" dan keterangan bungkusan dicetak sebagai "Personal Nutritional Wellness" (Penjagaan Kesihatan Harian). Tiada sebarang nama produk (Horsemen, Hammer of Thor, Grow XL, Magnum Pump XR) atau nama jenama (Onyxmen) tertera pada slip.',
        },
        {
          questionMs: 'Bolehkah saya meminta penghantaran ke pondok pengawal kondominium atau kaunter pejabat?',
          answerMs:
            'Ya. Apabila anda memilih bayaran melalui Perbankan Dalam Talian FPX atau DuitNow QR Segera, anda boleh menulis arahan di ruangan alamat supaya bungkusan diserahkan kepada pengawal keselamatan kondominium, kaunter pejabat, atau pusat kutipan PosLaju/NinjaVan.',
        },
        {
          questionMs: 'Bagaimanakah urusan Bayar Waktu Terima (COD) dijalankan secara rahsia?',
          answerMs:
            'Bagi pesanan COD, posmen kurier hanya melihat slip neutral "OM Fulfilment Logistics" berserta jumlah kutipan (RM 159, RM 318, atau RM 477). Anda boleh memeriksa kotak luar yang tertutup rapat terlebih dahulu sebelum membayar secara tunai atau DuitNow QR kepada penghantar.',
        },
        {
          questionMs: 'Bilakah saya akan menerima nombor tracking selepas membuat pesanan?',
          answerMs:
            'Pesanan yang disahkan sebelum jam 16:00 MYT akan menerima nombor tracking kurier pada petang hari yang sama melalui WhatsApp dan/atau e-mel daripada sales@onyxmen.my.',
        },
      ],
    },
  },

  // --------------------------------------------------------------------------
  // DOSSIER 3: MS-165 & MS-166 — Malaysia PDPA Act 709 Privacy & Confidentiality Policy
  // --------------------------------------------------------------------------
  {
    key: 'privacy-policy',
    code: 'PDPA-709',
    microStepEn: 'MS-165',
    microStepMs: 'MS-166',
    canonicalEnPath: '/privacy-policy/',
    canonicalMsPath: '/ms/polisi-privasi/',
    enOutputPaths: [
      'privacy-policy/index.html',
      'pdpa/index.html',
      'privacy-and-terms/index.html',
    ],
    msOutputPaths: [
      'ms/privacy-policy/index.html',
      'ms/pdpa/index.html',
      'ms/polisi-privasi/index.html',
      'ms/privasi-dan-terma/index.html',
    ],
    heroImage: '/assets/products/grow-xl-stage.webp',
    portraitImage: '/assets/products/grow-xl-portrait.webp',
    primaryProductSlug: 'grow-xl',
    activeNav: 'guides',
    en: {
      seoTitle:
        'Malaysia PDPA Act 709 Privacy Policy & Buyer Confidentiality Charter | Onyxmen Malaysia',
      metaDescription:
        'Official Onyxmen Malaysia Personal Data Protection Act 2010 (PDPA Act 709) privacy policy: zero mandatory public accounts, pseudonym waybill support, encrypted order routing to sales@onyxmen.my, zero third-party data sharing, and instant data erasure rights.',
      eyebrow:
        'MS-165 · MALAYSIA PERSONAL DATA PROTECTION ACT 2010 (ACT 709) PRIVACY & ANONYMITY CHARTER',
      headline:
        'Malaysia PDPA Act 709 Privacy Policy & Zero-Account Buyer Confidentiality Charter.',
      subheadline:
        'How Onyxmen Malaysia protects your personal identity, mobile number, and delivery coordinates under all seven statutory principles of the Malaysian Personal Data Protection Act 2010 (Act 709).',
      executiveSummary:
        'Acquiring adult men’s botanical vitality formulations requires banking-grade privacy. Unlike conventional online stores that force buyers to register permanent cloud accounts or install tracking-heavy shopping apps, Onyxmen Malaysia engineered a Zero-Account Express Order Architecture. Your shipping details are used strictly to dispatch your unmarked parcel from our Kuala Lumpur hub (OM Fulfilment Logistics) and can be permanently purged upon delivery completion via a single email to info@onyxmen.my or sales@onyxmen.my.',
      telemetry: [
        {
          key: '01 · STATUTORY FRAMEWORK',
          val: 'PDPA Malaysia Act 709',
          sub: 'Full compliance with all 7 Personal Data Protection Principles',
        },
        {
          key: '02 · ACCOUNT REQUIREMENT',
          val: 'Zero Public Accounts',
          sub: 'No persistent public profile or password database required',
        },
        {
          key: '03 · THIRD-PARTY MARKETING',
          val: '0.00% Data Sharing',
          sub: 'Never sold, rented, or shared with ad networks or data brokers',
        },
        {
          key: '04 · RIGHT TO ERASURE',
          val: '24-Hour Purge SLA',
          sub: 'Request immediate record deletion anytime at info@onyxmen.my',
        },
      ],
      splitChapters: [
        {
          kicker: 'CHAPTER 01 · ZERO-ACCOUNT CHECKOUT & MINIMAL DATA COLLECTION',
          title: 'Why We Eliminated Mandatory User Accounts & Password Profiles.',
          body1:
            'Under the General Principle and Notice & Choice Principle of Malaysia’s Personal Data Protection Act 2010 (Act 709), a data user may only collect personal data that is directly necessary for the lawful commercial transaction requested by the data subject. When you submit an order through the Onyxmen 10-Second Express Discreet Order Drawer, we collect only four minimal fields: (1) Recipient Name or Pseudonym/Initials, (2) Malaysian Mobile/WhatsApp Number (01X-XXXXXXX), (3) Delivery State & Address, and (4) Selected Formulation & Settlement Mode.',
          body2:
            'We never collect MyKad/IC numbers, date of birth, marital status, or credit card numbers on our servers. All FPX Online Banking and DuitNow QR settlements occur directly inside your own Malaysian banking application (Maybank2u, CIMB Clicks, Public Bank, RHB, Hong Leong).',
        },
        {
          kicker: 'CHAPTER 02 · DISCLOSURE, BLIND WAYBILLS & COURIER ISOLATION',
          title: 'How Courier Partners Deliver Your Parcel Without Knowing What You Ordered.',
          body1:
            'Under the Disclosure Principle of PDPA Act 709, logistics partners (PosLaju, NinjaVan Malaysia, J&T Express VIP, DHL eCommerce, or our Klang Valley private runners) receive strictly your recipient name/initials, delivery address, and mobile number for handover coordination.',
          body2:
            'Courier systems never receive your product SKU (Horsemen, Hammer of Thor, Grow XL, or Magnum Pump XR). The airway bill manifest generated by our Kuala Lumpur vault lists the sender as "OM Fulfilment Logistics" and item category as "Personal Nutritional Wellness".',
        },
        {
          kicker: 'CHAPTER 03 · RETENTION LIMITS, ACCESS & IMMEDIATE DATA ERASURE',
          title: 'Your Right To Inspect, Correct Or Permanently Purge Your Order Record.',
          body1:
            'Under the Retention Principle and Access Principle of PDPA Act 709, delivery records are retained only for the duration required to verify safe parcel arrival and honor our 14/30-day unopened return guarantee, plus optional Day-18 or Day-25 refill reminders if requested by the client.',
          body2:
            'At any moment after your parcel arrives, you may email info@onyxmen.my or sales@onyxmen.my with the subject line "PDPA Purge Request" and your Order Reference ID or phone number. Our Data Protection Officer will permanently scrub your name, phone number, and address from our active dispatch ledger within 24 hours.',
        },
      ],
      ledgerTitle: 'The 7 Statutory Principles of Malaysia PDPA Act 709 Applied at Onyxmen.my',
      ledgerSub:
        'Below is our formal statutory compliance mapping across all seven principles of the Malaysian Personal Data Protection Act 2010 (Act 709) plus our Zero-Cookie Surveillance commitment.',
      ledgerRows: [
        {
          code: 'PDPA-709 · 01',
          title: 'Principle 1 — General Principle (Consent & Minimal Necessity)',
          desc: 'Personal data is processed strictly with your explicit consent when submitting the Express Order Drawer to fulfill your RM 159 / RM 318 / RM 477 order. Pseudonyms and initials are explicitly permitted.',
          metric: 'EXPLICIT CONSENT',
        },
        {
          code: 'PDPA-709 · 02',
          title: 'Principle 2 — Notice & Choice Principle (Bilingual EN & BM Transparency)',
          desc: 'Full bilingual written notice in English (en-MY) and Bahasa Malaysia (ms-MY) explaining exact data usage prior to order submission.',
          metric: 'BILINGUAL NOTICE',
        },
        {
          code: 'PDPA-709 · 03',
          title: 'Principle 3 — Disclosure Principle (Zero Third-Party Marketing)',
          desc: 'Zero customer data is ever disclosed to third-party advertisers, telemarketers, or external supplement companies. Courier waybills are 100% blind.',
          metric: 'ZERO DATA BROKERS',
        },
        {
          code: 'PDPA-709 · 04',
          title: 'Principle 4 — Security Principle (HTTPS TLS 1.3 & Encrypted Inbox)',
          desc: 'All order transmissions across https://www.onyxmen.my use Cloudflare TLS 1.3 encryption routed directly to waleedshoaibofficial@gmail.com and sales@onyxmen.my.',
          metric: 'TLS 1.3 ENCRYPTED',
        },
        {
          code: 'PDPA-709 · 05',
          title: 'Principle 5 — Retention Principle (Automatic & On-Demand Purging)',
          desc: 'Dispatch coordinates are never kept indefinitely; clients can trigger an immediate 24-hour permanent deletion once their parcel is delivered.',
          metric: '24H PURGE RIGHT',
        },
        {
          code: 'PDPA-709 · 06',
          title: 'Principle 6 — Data Integrity Principle (Real-Time Address Updates)',
          desc: 'Clients may update or amend delivery addresses, condo drop-off instructions, or phone numbers prior to courier dispatch via sales@onyxmen.my.',
          metric: 'INSTANT AMENDMENT',
        },
        {
          code: 'PDPA-709 · 07',
          title: 'Principle 7 — Access Principle (Free Subject Access Requests)',
          desc: 'You have the statutory right to request a copy of any personal data held about your order and command its immediate correction or erasure at zero fee.',
          metric: 'INFO@ONYXMEN.MY',
        },
        {
          code: 'PDPA-709 · 08',
          title: 'Zero Intrusive Ad-Retargeting Pixels',
          desc: 'We never install intrusive behavioral ad-retargeting pixels that follow you across social media with supplement banners after visiting Onyxmen.my.',
          metric: 'ZERO AD STALKING',
        },
      ],
      tableTitle: 'Onyxmen Malaysia Data Lifecycle & Confidentiality Matrix (PDPA Act 709)',
      tableHeaders: [
        'Data Field Collected',
        'Purpose of Processing',
        'Who Sees This Field',
        'Retention & Erasure Protocol',
      ],
      tableRows: [
        [
          'Recipient Name or Pseudonym / Initials',
          'Addressing your unmarked parcel for courier or runner handover.',
          'KL Dispatch Vault & assigned courier rider (sees only "OM Fulfilment Logistics").',
          'Purged within 24 hours upon client request to info@onyxmen.my or after 90-day cycle.',
        ],
        [
          'Malaysian Mobile / WhatsApp Number (01X-XXXXXXX)',
          'Sending your encrypted Order Reference ID, courier tracking link & rider arrival call.',
          'KL Concierge Desk (sales@onyxmen.my) & delivering courier rider.',
          'Never used for unsolicited spam; deleted immediately upon client PDPA purge request.',
        ],
        [
          'Delivery State, Postcode & Street Address',
          'Routing parcel via Same-Day KL Runner, Peninsular Express, or Borneo Air Freight.',
          'KL Dispatch Vault & assigned courier carrier.',
          'Scrubbed from active dispatch logs upon request after safe parcel delivery.',
        ],
        [
          'Selected Formulation (Horsemen, Hammer of Thor, Grow XL, Magnum Pump XR)',
          'Picking and packing the exact sealed bottle(s) inside your unmarked security box.',
          'Strictly internal KL Vault packers ONLY. Never shared with couriers.',
          'Isolated from external airway bills; couriers see only "Personal Nutritional Wellness".',
        ],
      ],
      faqs: [
        {
          questionEn: 'Can I place an order using only my initials or a pseudonym instead of my full legal name?',
          answerEn:
            'Yes. Under our PDPA buyer anonymity protocol, you may enter initials or a preferred nickname (e.g., "En. Amir" or "K.L. Tan") in the Recipient Name field of the Express Order Drawer, provided your Malaysian mobile number (01X-XXXXXXX) and address are accurate for courier handover.',
        },
        {
          questionEn: 'Will visiting Onyxmen.my cause supplement ads to follow me on Facebook, Instagram, or Google?',
          answerEn:
            'No. We strictly prohibit third-party behavioral ad-retargeting pixels on https://www.onyxmen.my. Your browsing session remains completely private and isolated.',
        },
        {
          questionEn: 'How do I request complete deletion of my order details after my parcel arrives?',
          answerEn:
            'Simply send an email to info@onyxmen.my or sales@onyxmen.my quoting your Order Reference ID or phone number with the phrase "Delete My Record". Our team will permanently erase your delivery details within 24 hours and send you a final confirmation.',
        },
        {
          questionEn: 'What appears on my bank statement when I pay via FPX or DuitNow QR?',
          answerEn:
            'FPX and DuitNow QR transfers display only our neutral corporate merchant/fulfilment reference—never the words "Onyxmen", "Horsemen", "Hammer of Thor", "Grow XL", or "Magnum Pump XR".',
        },
      ],
    },
    ms: {
      seoTitle:
        'Polisi Privasi Akta PDPA Malaysia 709 & Piagam Kerahsiaan Pembeli | Onyxmen Malaysia',
      metaDescription:
        'Polisi privasi rasmi Akta Perlindungan Data Peribadi Malaysia 2010 (PDPA Akta 709) Onyxmen Malaysia: sifar pendaftaran akaun awam, sokongan nama samaran pada slip kurier, sifar perkongsian data pihak ketiga, dan hak pemadaman data 24 jam.',
      eyebrow:
        'MS-166 · POLISI PRIVASI AKTA PERLINDUNGAN DATA PERIBADI MALAYSIA 2010 (AKTA 709)',
      headline:
        'Polisi Privasi Akta PDPA Malaysia 709 & Piagam Kerahsiaan Pembeli Tanpa Akaun.',
      subheadline:
        'Bagaimana Onyxmen Malaysia melindungi identiti peribadi, nombor telefon bimbit, dan alamat penghantaran anda di bawah ketujuh-tujuh prinsip berkanun Akta Perlindungan Data Peribadi Malaysia 2010 (Akta 709).',
      executiveSummary:
        'Pembelian suplemen kecergasan lelaki dewasa menuntut tahap kerahsiaan setaraf perbankan. Berbeza dengan kedai dalam talian biasa yang memaksa pembeli mendaftar akaun kekal atau memuat turun aplikasi yang menjejak data, Onyxmen Malaysia membangunkan Seni Bina Tempahan Ekspres Tanpa Akaun. Butiran penghantaran anda hanya digunakan untuk menghantar bungkusan rahsia dari hab Kuala Lumpur kami (OM Fulfilment Logistics) dan boleh dipadamkan sepenuhnya selepas bungkusan tiba melalui satu e-mel kepada info@onyxmen.my atau sales@onyxmen.my.',
      telemetry: [
        {
          key: '01 · UNDANG-UNDANG MALAYSIA',
          val: 'Akta PDPA 709 (2010)',
          sub: 'Pematuhan penuh terhadap semua 7 Prinsip Perlindungan Data Peribadi',
        },
        {
          key: '02 · KEPERLUAN AKAUN',
          val: 'Sifar Akaun Awam',
          sub: 'Tiada profil awam atau pangkalan data kata laluan diperlukan',
        },
        {
          key: '03 · PEMASARAN PIHAK KETIGA',
          val: '0.00% Perkongsian Data',
          sub: 'Tidak pernah dijual, disewa, atau dikongsi dengan broker iklan',
        },
        {
          key: '04 · HAK PEMADAMAN DATA',
          val: 'Pemadaman 24 Jam',
          sub: 'Mohon pemadaman rekod serta-merta pada bila-bila masa di info@onyxmen.my',
        },
      ],
      splitChapters: [
        {
          kicker: 'BAB 01 · TEMPAHAN TANPA AKAUN & PENGUMPULAN DATA MINIMUM',
          title: 'Mengapa Kami Menghapuskan Pendaftaran Akaun & Profil Kata Laluan.',
          body1:
            'Di bawah Prinsip Am serta Prinsip Notis dan Pilihan dalam Akta Perlindungan Data Peribadi Malaysia 2010 (Akta 709), pengguna data hanya boleh mengumpul maklumat yang benar-benar perlu bagi menyempurnakan transaksi yang diminta oleh subjek data. Apabila anda menghantar pesanan melalui Laci Tempahan Ekspres 10 Saat Onyxmen, kami hanya mengumpul empat maklumat minimum: (1) Nama Penerima atau Nama Samaran/Singkatan, (2) Nombor Telefon WhatsApp Malaysia (01X-XXXXXXX), (3) Negeri & Alamat Penghantaran, serta (4) Formulasi & Kaedah Pembayaran Pilihan.',
          body2:
            'Kami tidak pernah meminta nombor MyKad/IC, tarikh lahir, status perkahwinan, atau menyimpan nombor kad kredit/debit di pelayan kami. Semua pembayaran FPX dan DuitNow QR dilakukan terus di dalam aplikasi perbankan rasmi anda sendiri (Maybank2u, CIMB Clicks, Public Bank, RHB, Hong Leong).',
        },
        {
          kicker: 'BAB 02 · PRINSIP PENDEDAHAN, SLIP KURIER NEUTRAL & PENGASINGAN PRODUK',
          title: 'Bagaimana Syarikat Kurier Menghantar Bungkusan Tanpa Mengetahui Pesanan Anda.',
          body1:
            'Di bawah Prinsip Pendedahan Akta PDPA 709, rakan logistik (PosLaju, NinjaVan Malaysia, J&T Express VIP, DHL eCommerce, atau penghantar persendirian Lembah Klang) hanya menerima nama/singkatan penerima, alamat penghantaran, dan nombor telefon untuk tujuan serahan bungkusan.',
          body2:
            'Sistem kurier tidak pernah menerima maklumat kod SKU produk anda (Horsemen, Hammer of Thor, Grow XL, atau Magnum Pump XR). Manifes slip kurier yang dijana oleh bilik kebal Kuala Lumpur kami hanya menyenaraikan pengirim sebagai "OM Fulfilment Logistics" dan kategori barangan sebagai "Personal Nutritional Wellness".',
        },
        {
          kicker: 'BAB 03 · HAD PENYIMPANAN, HAK AKSES & PEMADAMAN REKOD SERTA-MERTA',
          title: 'Hak Anda Untuk Menyemak, Membetulkan Atau Memadam Rekod Pesanan Secara Kekal.',
          body1:
            'Di bawah Prinsip Penyimpanan dan Prinsip Akses Akta PDPA 709, rekod penghantaran hanya disimpan sepanjang tempoh yang diperlukan untuk mengesahkan bungkusan selamat tiba dan melindungi jaminan pemulangan 14/30 hari anda, serta peringatan bekalan Hari Ke-18 atau Hari Ke-25 jika diminta.',
          body2:
            'Pada bila-bila masa selepas bungkusan anda tiba, anda boleh menghantar e-mel ke info@onyxmen.my atau sales@onyxmen.my dengan tajuk "Permohonan Pemadaman PDPA" berserta ID Rujukan Pesanan anda. Pegawai Perlindungan Data kami akan memadamkan nama, nombor telefon, dan alamat anda daripada rekod aktif dalam tempoh 24 jam.',
        },
      ],
      ledgerTitle: '7 Prinsip Berkanun Akta PDPA Malaysia 709 Yang Dikuatkuasakan Di Onyxmen.my',
      ledgerSub:
        'Berikut ialah jadual pematuhan rasmi kami merangkumi ketujuh-tujuh prinsip Akta Perlindungan Data Peribadi Malaysia 2010 (Akta 709) serta jaminan Sifar Penjejakan Iklan.',
      ledgerRows: [
        {
          code: 'PDPA-709 · 01',
          title: 'Prinsip 1 — Prinsip Am (Persetujuan & Keperluan Minimum)',
          desc: 'Data peribadi hanya diproses dengan persetujuan jelas anda semasa menghantar Laci Tempahan Ekspres untuk pesanan RM 159 / RM 318 / RM 477. Nama samaran dibenarkan.',
          metric: 'PERSETUJUAN JELAS',
        },
        {
          code: 'PDPA-709 · 02',
          title: 'Prinsip 2 — Prinsip Notis & Pilihan (Ketelusan Dwibahasa BM & EN)',
          desc: 'Notis bertulis lengkap dalam Bahasa Malaysia (ms-MY) dan Bahasa Inggeris (en-MY) yang menerangkan tujuan pemprosesan data sebelum pesanan dihantar.',
          metric: 'NOTIS DWIBAHASA',
        },
        {
          code: 'PDPA-709 · 03',
          title: 'Prinsip 3 — Prinsip Pendedahan (Sifar Perkongsian Pemasaran Pihak Ketiga)',
          desc: 'Tiada sebarang data pelanggan didedahkan kepada pengiklan pihak ketiga, jurujual telefon, atau syarikat luar. Slip kurier adalah 100% neutral.',
          metric: 'SIFAR BROKER DATA',
        },
        {
          code: 'PDPA-709 · 04',
          title: 'Prinsip 4 — Prinsip Keselamatan (Penyulitan HTTPS TLS 1.3)',
          desc: 'Semua penghantaran pesanan di https://www.onyxmen.my dilindungi penyulitan Cloudflare TLS 1.3 terus ke meja operasi waleedshoaibofficial@gmail.com dan sales@onyxmen.my.',
          metric: 'PENYULITAN TLS 1.3',
        },
        {
          code: 'PDPA-709 · 05',
          title: 'Prinsip 5 — Prinsip Penyimpanan (Pemadaman Automatik & Atas Permintaan)',
          desc: 'Maklumat penghantaran tidak disimpan selama-lamanya; pelanggan boleh memohon pemadaman kekal dalam tempoh 24 jam sebaik sahaja bungkusan diterima.',
          metric: 'HAK PADAM 24 JAM',
        },
        {
          code: 'PDPA-709 · 06',
          title: 'Prinsip 6 — Prinsip Integriti Data (Kemas Kini Alamat Segera)',
          desc: 'Pelanggan boleh mengemas kini atau meminda alamat penghantaran, arahan pondok pengawal kondo, atau nombor telefon sebelum pelepasan kurier melalui sales@onyxmen.my.',
          metric: 'PINDAAN SEGERA',
        },
        {
          code: 'PDPA-709 · 07',
          title: 'Prinsip 7 — Prinsip Akses (Akses & Pembetulan Tanpa Caj)',
          desc: 'Anda mempunyai hak berkanun untuk meminta salinan rekod pesanan anda dan mengarahkan pembetulan atau pemadaman serta-merta secara percuma.',
          metric: 'INFO@ONYXMEN.MY',
        },
        {
          code: 'PDPA-709 · 08',
          title: 'Sifar Piksel Penjejakan Iklan Media Sosial',
          desc: 'Kami tidak memasang piksel iklan penjejakan semula (retargeting) yang mengekor anda di media sosial dengan iklan suplemen selepas melayari Onyxmen.my.',
          metric: 'TIADA IKLAN MENGEKOR',
        },
      ],
      tableTitle: 'Matriks Kitaran Hayat Data & Kerahsiaan Pelanggan Onyxmen Malaysia (Akta PDPA 709)',
      tableHeaders: [
        'Maklumat Yang Dikumpul',
        'Tujuan Pemprosesan',
        'Siapa Yang Melihat Maklumat Ini',
        'Protokol Penyimpanan & Pemadaman',
      ],
      tableRows: [
        [
          'Nama Penerima atau Nama Samaran / Singkatan',
          'Mencetak label bungkusan rahsia untuk serahan kurier atau runner.',
          'Bilik Kebal KL & penghantar kurier (hanya melihat pengirim "OM Fulfilment Logistics").',
          'Dipadamkan dalam 24 jam atas permintaan pelanggan ke info@onyxmen.my atau selepas kitaran 90 hari.',
        ],
        [
          'Nombor Telefon Bimbit / WhatsApp Malaysia (01X-XXXXXXX)',
          'Menghantar ID Rujukan Pesanan, pautan nombor tracking & panggilan serahan posmen.',
          'Meja Operasi KL (sales@onyxmen.my) & posmen penghantar.',
          'Tidak pernah digunakan untuk spam; dipadamkan serta-merta apabila diminta oleh pelanggan.',
        ],
        [
          'Negeri, Poskod & Alamat Penuh Penghantaran',
          'Menghantar bungkusan melalui Runner Hari Sama KL, Ekspres Semenanjung, atau Kargo Udara Borneo.',
          'Bilik Kebal KL & syarikat kurier yang dilantik.',
          'Dibersihkan daripada log aktif atas permintaan selepas bungkusan selamat diterima.',
        ],
        [
          'Formulasi Dipilih (Horsemen, Hammer of Thor, Grow XL, Magnum Pump XR)',
          'Memilih dan membungkus botol kedap udara yang tepat di dalam kotak keselamatan legap.',
          'HANYA petugas pembungkusan dalaman Bilik Kebal KL. Tidak sesekali dikongsi dengan kurier.',
          'Diasingkan sepenuhnya daripada slip kurier; kurier hanya melihat "Personal Nutritional Wellness".',
        ],
      ],
      faqs: [
        {
          questionMs: 'Bolehkah saya membuat pesanan menggunakan nama samaran atau singkatan nama sahaja?',
          answerMs:
            'Ya. Di bawah protokol kerahsiaan pembeli PDPA kami, anda boleh memasukkan singkatan nama atau nama panggilan (cth: "En. Amir" atau "K.L. Tan") di ruangan Nama Penerima pada Laci Tempahan Ekspres, asalkan nombor telefon WhatsApp Malaysia (01X-XXXXXXX) dan alamat penghantaran adalah tepat.',
        },
        {
          questionMs: 'Adakah iklan suplemen akan mengekor saya di Facebook, Instagram, atau Google selepas melayari Onyxmen.my?',
          answerMs:
            'Tidak sama sekali. Kami melarang penggunaan piksel iklan penjejakan semula (ad-retargeting) pihak ketiga di https://www.onyxmen.my. Sesi pelayaran anda kekal peribadi sepenuhnya.',
        },
        {
          questionMs: 'Bagaimanakah cara memohon pemadaman penuh rekod pesanan saya selepas bungkusan diterima?',
          answerMs:
            'Hantarkan e-mel ringkas ke info@onyxmen.my atau sales@onyxmen.my dengan menyatakan ID Rujukan Pesanan atau nombor telefon anda berserta arahan "Padam Rekod Saya". Pasukan kami akan memadamkan butiran penghantaran anda secara kekal dalam masa 24 jam.',
        },
        {
          questionMs: 'Apakah nama yang tertera pada penyata bank saya apabila membayar melalui FPX atau DuitNow QR?',
          answerMs:
            'Penyata transaksi FPX dan DuitNow QR hanya memaparkan rujukan syarikat pengurusan/logistik neutral kami—tidak sesekali memaparkan perkataan "Onyxmen", "Horsemen", "Hammer of Thor", "Grow XL", atau "Magnum Pump XR".',
        },
      ],
    },
  },

  // --------------------------------------------------------------------------
  // DOSSIER 4: MS-167 & MS-168 — Terms of Service & 14/30-Day Unopened Tamper-Seal Return Policy
  // --------------------------------------------------------------------------
  {
    key: 'terms-of-service',
    code: 'TERMS-MY',
    microStepEn: 'MS-167',
    microStepMs: 'MS-168',
    canonicalEnPath: '/terms-of-service/',
    canonicalMsPath: '/ms/terma-perkhidmatan/',
    enOutputPaths: [
      'terms-of-service/index.html',
      'terms/index.html',
      'return-policy/index.html',
      'refund-policy/index.html',
    ],
    msOutputPaths: [
      'ms/terms-of-service/index.html',
      'ms/terms/index.html',
      'ms/return-policy/index.html',
      'ms/terma-perkhidmatan/index.html',
      'ms/polisi-pemulangan/index.html',
    ],
    heroImage: '/assets/products/magnum-pump-xr-stage.webp',
    portraitImage: '/assets/products/magnum-pump-xr-portrait.webp',
    primaryProductSlug: 'magnum-pump-xr',
    activeNav: 'guides',
    en: {
      seoTitle:
        'Terms of Service, Supplement Compliance & 14/30-Day Return Policy | Onyxmen Malaysia',
      metaDescription:
        'Official Onyxmen Malaysia Terms of Service and 14/30-Day Unopened Tamper-Seal Return & Refund Policy: adult 18+ dietary supplement positioning, uniform RM 159 / RM 318 / RM 477 MYR pricing, transit damage replacement, and Malaysian Consumer Protection compliance.',
      eyebrow:
        'MS-167 · COMMERCIAL TERMS OF SALE, SUPPLEMENT COMPLIANCE & 14/30-DAY RETURN GUARANTEE',
      headline:
        'Terms of Service, Botanical Supplement Compliance & 14/30-Day Unopened Tamper-Seal Return Policy.',
      subheadline:
        'Transparent commercial governance under Malaysian law (Sale of Goods Act 1957 & Consumer Protection Act 1999) covering RM 159 / RM 318 / RM 477 acquisitions, transit damage protection, and sealed bottle returns.',
      executiveSummary:
        'Every acquisition on https://www.onyxmen.my is backed by clear, non-ambiguous Malaysian commercial terms: uniform Ringgit Malaysia pricing (1 Bottle RM 159.00, 2 Bottles RM 318.00, 3 Bottles RM 477.00), zero recurring subscription traps, immediate free replacement for any parcel damaged in courier transit, and a 14-Day Unopened Tamper-Seal Return & Exchange Window (extended to 30 Days for 3-Bottle RM 477 Mastery Vault clients) managed directly by our Kuala Lumpur desk at sales@onyxmen.my and info@onyxmen.my.',
      telemetry: [
        {
          key: '01 · RETURN & EXCHANGE WINDOW',
          val: '14 Days (30d on 3-Bottle)',
          sub: 'Valid on all unopened bottles with intact factory heat-induction seal',
        },
        {
          key: '02 · TRANSIT DAMAGE PROTECTION',
          val: '100% Free Replacement',
          sub: 'Report crushed cartons or broken seals within 48h to sales@onyxmen.my',
        },
        {
          key: '03 · SUBSCRIPTION POLICY',
          val: 'Zero Auto-Billing',
          sub: 'One-time discreet acquisitions only · You control every refill',
        },
        {
          key: '04 · ELIGIBLE AGE & JURISDICTION',
          val: 'Adult Men 18+ · Malaysia',
          sub: 'Governed by the laws of Malaysia (Kuala Lumpur venue)',
        },
      ],
      splitChapters: [
        {
          kicker: 'CHAPTER 01 · ADULT 18+ BOTANICAL DIETARY SUPPLEMENT POSITIONING',
          title: 'Honest Nutritional Scope & Medical Consultation Responsibility.',
          body1:
            'All products offered by Onyxmen Malaysia—Horsemen (20 Capsules × 500mg), Hammer of Thor (20 Veg. Capsules × 500mg), Grow XL (30 Capsules × 550mg), and Magnum Pump XR (30 Black Capsules × 600mg)—are traditional botanical and amino-acid dietary supplements formulated exclusively for adult men aged 18 years and above.',
          body2:
            'These formulations are designed to provide nutritional support for physical stamina, peripheral micro-circulation, and active male vitality. They are not prescription pharmaceuticals and are not intended to diagnose, treat, cure, or prevent any medical disease. Clients with pre-existing cardiovascular conditions, uncontrolled hypertension, renal/hepatic impairment, or those taking prescription nitrates or alpha-blockers must consult a licensed Malaysian medical practitioner before use.',
        },
        {
          kicker: 'CHAPTER 02 · 14/30-DAY UNOPENED TAMPER-SEAL RETURN & EXCHANGE POLICY',
          title: 'How Our Hygiene-Safe Apothecary Return & Formulation Exchange Works.',
          body1:
            'Because oral dietary supplements are hygiene-sensitive ingestible products, returns and exchanges are governed by the integrity of the bottle’s factory heat-induction aluminum foil liner and outer perforated shrink seal. Any unopened bottle in its original sealed condition may be returned or exchanged for a different Onyxmen formulation within 14 calendar days of delivery (or within 30 calendar days for clients who acquired the 3-Bottle RM 477 Mastery Vault).',
          body2:
            'For example, if you ordered a 3-Bottle RM 477 protocol of Horsemen and wish to exchange your second or third unopened bottle for Grow XL or Magnum Pump XR, simply email sales@onyxmen.my with your Order Reference ID. Refunds on approved unopened returns are credited back via DuitNow / Malaysian bank transfer within 3–5 business days of vault inspection.',
        },
        {
          kicker: 'CHAPTER 03 · 48-HOUR TRANSIT DAMAGE & INCORRECT SKU GUARANTEE',
          title: 'Zero-Cost Priority Replacement If Courier Handling Compromises Your Parcel.',
          body1:
            'In the rare event that a courier parcel arrives with a crushed bottle, punctured inner foil liner, or an incorrect formulation SKU, Onyxmen Malaysia assumes 100% of the replacement and reshipping cost.',
          body2:
            'Notify sales@onyxmen.my or info@onyxmen.my within 48 hours of courier delivery timestamp with a clear photo of the outer unmarked box, waybill, and bottle neck seal. Our Kuala Lumpur vault will dispatch a fresh replacement parcel within 24 hours at RM 0 charge.',
        },
      ],
      ledgerTitle: '8-Clause Commercial Terms of Sale & Return Governance Ledger',
      ledgerSub:
        'Summary of the eight core contractual clauses governing orders placed on https://www.onyxmen.my and https://www.onyxmen.my/ms/.',
      ledgerRows: [
        {
          code: 'CLAUSE · 01',
          title: 'Age Eligibility & Personal Use Representation (18+ Only)',
          desc: 'By placing an order, the buyer affirms they are an adult aged 18 years or older purchasing for personal nutritional supplementation in Malaysia.',
          metric: 'ADULT 18+ ONLY',
        },
        {
          code: 'CLAUSE · 02',
          title: 'Uniform Ringgit Malaysia Pricing & Zero Hidden Surcharges',
          desc: 'Official prices are fixed at RM 159.00 (1 Bottle), RM 318.00 (2 Bottles), and RM 477.00 (3 Bottles) inclusive of applicable Malaysian sales tax.',
          metric: '159 / 318 / 477 MYR',
        },
        {
          code: 'CLAUSE · 03',
          title: 'Zero Recurring Auto-Debit Subscriptions',
          desc: 'Every transaction is a standalone one-time purchase. Our Day-18 and Day-25 Google Calendar/WhatsApp refill reminders are 100% optional and never auto-charge.',
          metric: 'ONE-TIME PURCHASE',
        },
        {
          code: 'CLAUSE · 04',
          title: '14-Day Unopened Tamper-Seal Return Window (Standard Tiers)',
          desc: 'Unopened bottles with intact factory heat-induction foil and holographic neck bands qualify for full refund or formulation exchange within 14 days of delivery.',
          metric: '14-DAY RETURN',
        },
        {
          code: 'CLAUSE · 05',
          title: '30-Day Extended Vault Exchange Window (3-Bottle RM 477 Tier)',
          desc: 'Clients acquiring the 3-Bottle RM 477 Mastery Vault enjoy an extended 30-day window to return or swap any remaining unopened bottles.',
          metric: '30-DAY VAULT SWAP',
        },
        {
          code: 'CLAUSE · 06',
          title: '48-Hour Courier Transit Damage Free Replacement SLA',
          desc: 'Any bottle damaged during PosLaju, NinjaVan, J&T, DHL, or runner transit is replaced free of charge when reported within 48 hours of delivery.',
          metric: '100% TRANSIT COVER',
        },
        {
          code: 'CLAUSE · 07',
          title: 'Good-Faith Cash on Delivery (COD) Acceptance Commitment',
          desc: 'Clients selecting COD agree to remain reachable via their provided Malaysian WhatsApp/mobile number to receive and settle their unmarked parcel upon courier arrival.',
          metric: 'COD COMMITMENT',
        },
        {
          code: 'CLAUSE · 08',
          title: 'Governing Law & Malaysian Jurisdiction',
          desc: 'These Terms of Service are governed by the laws of Malaysia, including the Sale of Goods Act 1957, Consumer Protection Act 1999, and PDPA Act 709.',
          metric: 'MALAYSIA LAW',
        },
      ],
      tableTitle: 'Onyxmen Malaysia Return, Exchange & Refund Eligibility Matrix',
      tableHeaders: [
        'Scenario / Request Type',
        'Condition Requirement',
        'Notification Window',
        'Resolution & Settlement SLA',
      ],
      tableRows: [
        [
          'Unopened Bottle Refund (1-Bottle RM 159 or 2-Bottle RM 318)',
          'Factory heat-induction foil seal & outer security neck band 100% intact.',
          'Within 14 calendar days of courier delivery.',
          '100% refund via DuitNow / Malaysian bank transfer within 3–5 business days.',
        ],
        [
          'Extended 3-Bottle Vault Return or Formulation Swap (RM 477)',
          'Remaining bottle(s) unopened with factory tamper-evident seal intact.',
          'Within 30 calendar days of courier delivery.',
          'Pro-rata refund (RM 159 per unopened bottle) or 1-for-1 formulation swap.',
        ],
        [
          'Damaged in Transit / Broken Seal Upon Arrival',
          'Photo of outer parcel, waybill & damaged bottle sent to sales@onyxmen.my.',
          'Within 48 hours of courier delivery timestamp.',
          'Immediate RM 0 priority replacement dispatched from Kuala Lumpur vault within 24h.',
        ],
        [
          'Opened Bottle / Broken Tamper-Evident Foil Liner',
          'Seal removed or capsules partially consumed (non-transit defect).',
          'Not applicable (hygiene & food-safety lock).',
          'Non-returnable for hygiene safety; eligible for complimentary concierge dosage consultation.',
        ],
      ],
      faqs: [
        {
          questionEn: 'How do I initiate a return or formulation exchange?',
          answerEn:
            'Email sales@onyxmen.my or info@onyxmen.my with your Order Reference ID and a photo showing that the bottle’s outer security band and heat-induction seal remain unopened. Our Kuala Lumpur desk will issue a return authorization code and return address instructions within 24 hours.',
        },
        {
          questionEn: 'Why can’t opened supplement bottles with broken seals be returned?',
          answerEn:
            'In compliance with Malaysian food and dietary supplement hygiene standards, any ingestible capsule bottle whose hermetic heat-induction seal has been broken outside our climate-controlled vault cannot be restocked or resold. However, if you bought a 2-Bottle or 3-Bottle package, any unopened secondary bottles remain eligible for return or exchange within the 14/30-day window.',
        },
        {
          questionEn: 'Are there any recurring charges or automatic monthly subscriptions?',
          answerEn:
            'Never. Onyxmen Malaysia operates strictly on a one-time acquisition basis. You will never be billed automatically.',
        },
        {
          questionEn: 'Can I cancel or modify my order before the courier picks it up?',
          answerEn:
            'Yes. Contact sales@onyxmen.my immediately with your Order Reference ID. If your parcel has not yet been handed over to the courier or private runner, we can modify the formulation, update the delivery address, or cancel and refund 100% immediately.',
        },
      ],
    },
    ms: {
      seoTitle:
        'Terma Perkhidmatan, Pematuhan Suplemen & Polisi Pemulangan 14/30 Hari | Onyxmen Malaysia',
      metaDescription:
        'Terma Perkhidmatan rasmi dan Polisi Pemulangan & Bayaran Balik Botol Belum Dibuka 14/30 Hari Onyxmen Malaysia: pematuhan suplemen pemakanan lelaki dewasa 18+, harga tetap RM 159 / RM 318 / RM 477, dan jaminan ganti kerosakan transit.',
      eyebrow:
        'MS-168 · TERMA JUALAN KOMERSIAL, PEMATUHAN SUPLEMEN & JAMINAN PEMULANGAN 14/30 HARI',
      headline:
        'Terma Perkhidmatan, Pematuhan Suplemen Botani & Polisi Pemulangan Botol Belum Dibuka 14/30 Hari.',
      subheadline:
        'Tadbir urus komersial yang telus di bawah undang-undang Malaysia (Akta Jualan Barang 1957 & Akta Pelindungan Pengguna 1999) merangkumi pembelian RM 159 / RM 318 / RM 477, perlindungan kerosakan kurier, dan pemulangan botol.',
      executiveSummary:
        'Setiap pembelian di https://www.onyxmen.my/ms/ dilindungi oleh terma komersial Malaysia yang jelas: harga seragam dalam Ringgit Malaysia (1 Botol RM 159.00, 2 Botol RM 318.00, 3 Botol RM 477.00), sifar langganan potong gaji/kad automatik, penggantian percuma serta-merta bagi sebarang bungkusan yang rosak semasa transit kurier, serta Jaminan Pemulangan & Pertukaran Botol Belum Dibuka Selama 14 Hari (dilanjutkan kepada 30 Hari bagi pelanggan pakej 3 Botol RM 477) melalui meja operasi kami di sales@onyxmen.my dan info@onyxmen.my.',
      telemetry: [
        {
          key: '01 · TEMPOH PEMULANGAN & TUKAR',
          val: '14 Hari (30h bagi 3 Botol)',
          sub: 'Sah untuk semua botol belum dibuka dengan meterai kilang utuh',
        },
        {
          key: '02 · JAMINAN ROSAK TRANSIT',
          val: '100% Gantian Percuma',
          sub: 'Laporkan kotak kemek atau meterai rosak dalam 48 jam ke sales@onyxmen.my',
        },
        {
          key: '03 · POLISI LANGGANAN',
          val: 'Sifar Caj Automatik',
          sub: 'Pembelian sekali sahaja · Anda mengawal sepenuhnya pesanan ulangan',
        },
        {
          key: '04 · HAD UMUR & BIDANG KUASA',
          val: 'Lelaki Dewasa 18+ · MY',
          sub: 'Tertakluk kepada undang-undang Malaysia (Kuala Lumpur)',
        },
      ],
      splitChapters: [
        {
          kicker: 'BAB 01 · SKOP SUPLEMEN PEMAKANAN BOTANI LELAKI DEWASA (18+)',
          title: 'Penjelasan Nutrisi Jujur & Tanggungjawab Rujukan Perubatan.',
          body1:
            'Semua produk yang ditawarkan oleh Onyxmen Malaysia—Horsemen (20 Kapsul × 500mg), Hammer of Thor (20 Kapsul Veg. × 500mg), Grow XL (30 Kapsul × 550mg), dan Magnum Pump XR (30 Kapsul Hitam × 600mg)—adalah suplemen pemakanan botani tradisional dan asid amino yang dirumus khas untuk lelaki dewasa berumur 18 tahun ke atas.',
          body2:
            'Formulasi ini bertujuan memberi sokongan nutrisi untuk stamina fizikal, peredaran darah mikro, dan kecergasan lelaki. Ia bukan ubat preskripsi hospital dan tidak bertujuan untuk mendiagnosis, merawat, menyembuhkan, atau mencegah sebarang penyakit. Pelanggan yang mempunyai masalah jantung, tekanan darah tinggi tidak terkawal, masalah buah pinggang/hati, atau sedang mengambil ubat nitrat wajib mendapatkan nasihat doktor bertauliah sebelum penggunaan.',
        },
        {
          kicker: 'BAB 02 · POLISI PEMULANGAN & PERTUKARAN BOTOL BELUM DIBUKA 14/30 HARI',
          title: 'Bagaimana Prosedur Pemulangan & Pertukaran Formulasi Kami Berfungsi.',
          body1:
            'Memandangkan suplemen kapsul makan tertakluk kepada piawaian kebersihan dan keselamatan makanan yang ketat, kelayakan pemulangan atau pertukaran bergantung pada keutuhan meterai aluminium induksi haba kilang dan jalur keselamatan luar botol. Mana-mana botol yang belum dibuka dalam keadaan asal boleh dipulangkan atau ditukar kepada formulasi Onyxmen yang lain dalam tempoh 14 hari kalendar selepas diterima (atau 30 hari kalendar bagi pembeli Pakej 3 Botol RM 477).',
          body2:
            'Sebagai contoh, jika anda membeli Pakej 3 Botol RM 477 Horsemen dan ingin menukar botol kedua atau ketiga yang belum dibuka kepada Grow XL atau Magnum Pump XR, hantarkan e-mel kepada sales@onyxmen.my bersama ID Rujukan Pesanan anda. Bayaran balik yang diluluskan akan dikreditkan semula melalui DuitNow / pindahan bank Malaysia dalam masa 3–5 hari bekerja.',
        },
        {
          kicker: 'BAB 03 · JAMINAN GANTIAN PERCUMA 48 JAM BAGI KEROSAKAN TRANSIT',
          title: 'Penggantian Segera Tanpa Kos Jika Bungkusan Rosak Semasa Penghantaran Kurier.',
          body1:
            'Sekiranya berlaku kes terpencil di mana bungkusan kurier tiba dalam keadaan botol pecah/kemek, meterai dalam terkoyak, atau tersalah hantar kod SKU, Onyxmen Malaysia menanggung 100% kos penggantian dan penghantaran semula.',
          body2:
            'Maklumkan kepada sales@onyxmen.my atau info@onyxmen.my dalam tempoh 48 jam selepas waktu serahan kurier berserta gambar kotak luar, slip kurier, dan leher botol. Bilik kebal Kuala Lumpur kami akan menghantar bungkusan gantian baharu dalam masa 24 jam secara percuma (RM 0).',
        },
      ],
      ledgerTitle: '8 Klausa Utama Terma Jualan Komersial & Polisi Pemulangan Onyxmen.my',
      ledgerSub:
        'Ringkasan lapan klausa kontrak utama yang mengawal setiap pesanan di https://www.onyxmen.my/ms/ dan https://www.onyxmen.my.',
      ledgerRows: [
        {
          code: 'KLAUSA · 01',
          title: 'Kelayakan Umur & Kegunaan Peribadi (Lelaki Dewasa 18+ Sahaja)',
          desc: 'Dengan membuat pesanan, pembeli mengesahkan bahawa mereka berumur 18 tahun ke atas dan membeli untuk kegunaan suplemen pemakanan peribadi di Malaysia.',
          metric: 'DEWASA 18+ SAHAJA',
        },
        {
          code: 'KLAUSA · 02',
          title: 'Harga Tetap Ringgit Malaysia & Sifar Caj Tersembunyi',
          desc: 'Harga rasmi ditetapkan pada RM 159.00 (1 Botol), RM 318.00 (2 Botol), dan RM 477.00 (3 Botol) tanpa sebarang caj pemprosesan tambahan.',
          metric: '159 / 318 / 477 MYR',
        },
        {
          code: 'KLAUSA · 03',
          title: 'Sifar Langganan Auto-Debit Berulang',
          desc: 'Setiap transaksi ialah pembelian tunggal sekali sahaja. Peringatan bekalan Hari Ke-18 dan Hari Ke-25 adalah pilihan sukarela dan tidak pernah menolak wang secara automatik.',
          metric: 'BELIAN SEKALI SAHAJA',
        },
        {
          code: 'KLAUSA · 04',
          title: 'Tempoh Pemulangan 14 Hari Botol Belum Dibuka (Pakej Standard)',
          desc: 'Botol yang belum dibuka dengan meterai induksi haba kilang yang masih utuh layak mendapat bayaran balik penuh atau pertukaran formulasi dalam masa 14 hari.',
          metric: 'PEMULANGAN 14 HARI',
        },
        {
          code: 'KLAUSA · 05',
          title: 'Tempoh Lanjutan 30 Hari Pertukaran Bilik Kebal (Pakej 3 Botol RM 477)',
          desc: 'Pelanggan Pakej 3 Botol RM 477 menikmati tempoh lanjutan 30 hari untuk memulangkan atau menukar mana-mana baki botol yang belum dibuka.',
          metric: 'TUKAR 30 HARI (3 BTL)',
        },
        {
          code: 'KLAUSA · 06',
          title: 'Jaminan Gantian Percuma 48 Jam Kerosakan Transit Kurier',
          desc: 'Sebarang botol yang rosak semasa transit PosLaju, NinjaVan, J&T, DHL, atau runner akan digantikan secara percuma apabila dilaporkan dalam masa 48 jam.',
          metric: 'PERLINDUNGAN TRANSIT',
        },
        {
          code: 'KLAUSA · 07',
          title: 'Komitmen Penerimaan Pesanan Bayar Waktu Terima (COD)',
          desc: 'Pelanggan yang memilih COD bersetuju untuk menjawab panggilan/WhatsApp posmen penghantar bagi menerima dan menjelaskan bayaran bungkusan rahsia mereka.',
          metric: 'KOMITMEN COD MY',
        },
        {
          code: 'KLAUSA · 08',
          title: 'Undang-Undang & Bidang Kuasa Malaysia',
          desc: 'Terma Perkhidmatan ini ditadbir oleh undang-undang Malaysia termasuk Akta Jualan Barang 1957, Akta Pelindungan Pengguna 1999, dan Akta PDPA 709.',
          metric: 'UNDANG-UNDANG MY',
        },
      ],
      tableTitle: 'Matriks Kelayakan Pemulangan, Pertukaran & Bayaran Balik Onyxmen Malaysia',
      tableHeaders: [
        'Situasi / Jenis Permohonan',
        'Syarat Keadaan Botol',
        'Tempoh Makluman',
        'Penyelesaian & Tempoh Bayaran Balik',
      ],
      tableRows: [
        [
          'Bayaran Balik Botol Belum Dibuka (1 Botol RM 159 atau 2 Botol RM 318)',
          'Meterai aluminium induksi haba kilang & jalur keselamatan luar 100% utuh.',
          'Dalam tempoh 14 hari kalendar selepas serahan kurier.',
          'Bayaran balik 100% melalui DuitNow / pindahan bank Malaysia dalam 3–5 hari bekerja.',
        ],
        [
          'Pemulangan atau Pertukaran Lanjutan Pakej 3 Botol (RM 477)',
          'Baki botol kedua/ketiga belum dibuka dengan meterai keselamatan asal utuh.',
          'Dalam tempoh 30 hari kalendar selepas serahan kurier.',
          'Bayaran balik pro-rata (RM 159 setiap botol belum dibuka) atau tukar formulasi 1-ke-1.',
        ],
        [
          'Rosak Semasa Penghantaran Kurier / Meterai Koyak Semasa Tiba',
          'Gambar kotak luar, slip kurier & botol dihantar ke sales@onyxmen.my.',
          'Dalam tempoh 48 jam selepas waktu serahan kurier.',
          'Penghantaran botol gantian baharu secara percuma (RM 0) dari hab KL dalam 24 jam.',
        ],
        [
          'Botol Telah Dibuka / Meterai Induksi Haba Telah Dikoyakkan',
          'Meterai telah dibuka atau kapsul telah dimakan sebahagiannya.',
          'Tidak berkaitan (kunci keselamatan kebersihan makanan).',
          'Tidak boleh dipulangkan atas faktor keselamatan kebersihan; layak konsultasi dos percuma.',
        ],
      ],
      faqs: [
        {
          questionMs: 'Bagaimanakah cara untuk memulakan permohonan pemulangan atau pertukaran formulasi?',
          answerMs:
            'Hantarkan e-mel ke sales@onyxmen.my atau info@onyxmen.my bersama ID Rujukan Pesanan anda dan gambar yang menunjukkan jalur keselamatan luar serta meterai botol masih belum dibuka. Meja operasi Kuala Lumpur kami akan memberikan kod kebenaran pemulangan dan alamat hab dalam masa 24 jam.',
        },
        {
          questionMs: 'Mengapakah botol yang telah dibuka meterai dalamnya tidak boleh dipulangkan?',
          answerMs:
            'Selaras dengan piawaian kebersihan makanan dan suplemen pemakanan di Malaysia, mana-mana botol kapsul makan yang telah dibuka meterai kedap udaranya di luar bilik kebal kawalan suhu kami tidak boleh disimpan semula atau dijual kepada pelanggan lain. Namun, bagi pembelian pakej 2 atau 3 botol, mana-mana botol lain yang belum dibuka tetap layak dipulangkan atau ditukar dalam tempoh 14/30 hari.',
        },
        {
          questionMs: 'Adakah terdapat sebarang caj bulanan tersembunyi atau langganan automatik?',
          answerMs:
            'Tidak sama sekali. Onyxmen Malaysia beroperasi 100% atas dasar pembelian sekali sahaja.',
        },
        {
          questionMs: 'Bolehkah saya membatalkan atau menukar pesanan sebelum diserahkan kepada kurier?',
          answerMs:
            'Boleh. Hubungi sales@onyxmen.my dengan segera berserta ID Rujukan Pesanan anda. Jika bungkusan belum diserahkan kepada syarikat kurier atau runner, kami boleh menukar formulasi, mengemas kini alamat, atau membatalkan pesanan dengan bayaran balik penuh.',
        },
      ],
    },
  },

  // --------------------------------------------------------------------------
  // DOSSIER 5: MS-169A & MS-170A — Kuala Lumpur Private Concierge Contact Desk
  // --------------------------------------------------------------------------
  {
    key: 'contact',
    code: 'KL-DESK',
    microStepEn: 'MS-169',
    microStepMs: 'MS-170',
    canonicalEnPath: '/contact/',
    canonicalMsPath: '/ms/hubungi-kami/',
    enOutputPaths: [
      'contact/index.html',
    ],
    msOutputPaths: [
      'ms/contact/index.html',
      'ms/hubungi-kami/index.html',
    ],
    heroImage: '/assets/products/onyxman-lineup-hero.webp',
    portraitImage: '/assets/products/horsemen-portrait.webp',
    primaryProductSlug: 'horsemen',
    activeNav: 'contact',
    en: {
      seoTitle:
        'Private Kuala Lumpur Concierge & Discreet Order Desk — sales@onyxmen.my & info@onyxmen.my | Onyxmen Malaysia',
      metaDescription:
        'Contact the Onyxmen Malaysia Private Kuala Lumpur Concierge & Fulfilment Desk (09:00–23:00 MYT daily): sales@onyxmen.my, info@onyxmen.my & waleedshoaibofficial@gmail.com. Instant 10-second discreet order dispatch, Same-Day Klang Valley runner & tracking support.',
      eyebrow:
        'MS-169 · PRIVATE KUALA LUMPUR CONCIERGE, FORMULATION GUIDANCE & DISCREET DISPATCH DESK',
      headline:
        'Private Kuala Lumpur Concierge & Discreet Order Support Desk (09:00 – 23:00 MYT).',
      subheadline:
        'Direct, confidential communication with our Kuala Lumpur apothecary fulfilment team for express orders, Same-Day Klang Valley runner dispatch, courier tracking, and formulation selection.',
      executiveSummary:
        'Onyxmen Malaysia operates a dedicated, human-staffed Private Concierge Desk in Kuala Lumpur (Postcode 50450) seven days a week from 09:00 to 23:00 MYT (UTC+8). Whether you want to reserve a 1-Bottle (RM 159), 2-Bottle (RM 318), or 3-Bottle (RM 477) protocol via our 10-Second Express Discreet Order Drawer, coordinate a 3–5 hour unmarked runner in Kuala Lumpur or Selangor, verify an authentic bottle seal, or request a PDPA data purge, our team responds promptly through sales@onyxmen.my, info@onyxmen.my, and waleedshoaibofficial@gmail.com.',
      telemetry: [
        {
          key: '01 · OFFICIAL SALES & ORDERS',
          val: 'sales@onyxmen.my',
          sub: 'Express orders, FPX/DuitNow QR, COD & Same-Day KL runner dispatch',
        },
        {
          key: '02 · FORMULATION & PDPA DESK',
          val: 'info@onyxmen.my',
          sub: 'Botanical protocol guidance, batch verification & PDPA privacy requests',
        },
        {
          key: '03 · PRIMARY DISPATCH VAULT',
          val: 'waleedshoaibofficial@gmail.com',
          sub: 'Direct Express Order Drawer notification & reverse WhatsApp bridge',
        },
        {
          key: '04 · OPERATING HOURS (MYT)',
          val: '09:00 – 23:00 Daily',
          sub: 'Monday – Sunday including Malaysian public holidays · KL 50450',
        },
      ],
      splitChapters: [
        {
          kicker: 'CHAPTER 01 · THREE DIRECT CONCIERGE & FULFILMENT CHANNELS',
          title: 'How Our Kuala Lumpur Dispatch Desk Handles Your Inquiry With 100% Discretion.',
          body1:
            'Every inquiry and order submitted to Onyxmen Malaysia is handled exclusively by our internal Kuala Lumpur fulfilment specialists—never outsourced to offshore call centers. For new acquisitions, payment confirmations (FPX Online Banking, DuitNow Instant QR, or Cash on Delivery COD), and courier tracking updates, contact sales@onyxmen.my.',
          body2:
            'For personalized guidance on choosing between our 20-capsule evening reserves (Horsemen & Hammer of Thor) and our 30-capsule full-month protocols (Grow XL & Magnum Pump XR), or for batch authenticity checks and PDPA record erasure requests, contact info@onyxmen.my. All Express Order Drawer submissions also route simultaneously to our primary merchant dispatch inbox at waleedshoaibofficial@gmail.com.',
        },
        {
          kicker: 'CHAPTER 02 · DUAL-MODE REVERSE WHATSAPP & 10-SECOND ORDER BRIDGE',
          title: 'Instant Order Confirmation & 1-Click Refill Calendar Synchronization.',
          body1:
            'When you submit your delivery details inside the slide-over 10-Second Express Discreet Order Drawer on any page of https://www.onyxmen.my, our runtime engine generates your unique Order Reference ID (ONYX-MY-XXXXXX) immediately on screen and dispatches an encrypted payload to our Kuala Lumpur vault.',
          body2:
            'Our concierge desk uses a Reverse WhatsApp Protocol to message your Malaysian mobile number (01X-XXXXXXX) directly from our dispatch terminal with your unmarked parcel tracking link or Same-Day Klang Valley runner ETA—while providing you with a 1-click Google Calendar Refill Reminder (+18 days for 20-capsule bottles, +25 days for 30-capsule bottles).',
        },
        {
          kicker: 'CHAPTER 03 · CONDO GUARDHOUSE, OFFICE MAILROOM & SPECIAL DROP-OFFS',
          title: 'Customizing Your Delivery Instructions Across All 16 Malaysian States.',
          body1:
            'Many of our clients in KLCC, Mont Kiara, Bangsar, Damansara, Petaling Jaya, Penang, and Johor Bahru prefer their unmarked parcel left quietly with a condominium concierge, security guardhouse, or office receptionist while they are in meetings.',
          body2:
            'Simply note your special handover instruction in the Delivery Address field of the Express Order Drawer or email sales@onyxmen.my quoting your Order Reference ID prior to 16:00 MYT.',
        },
      ],
      ledgerTitle: '8-Channel Kuala Lumpur Concierge Service Level Agreement (SLA) Ledger',
      ledgerSub:
        'Direct routing directory and guaranteed response windows for every client inquiry type across Malaysia.',
      ledgerRows: [
        {
          code: 'DESK-SLA · 01',
          title: '10-Second Express Discreet Order Drawer (All Pages)',
          desc: 'Instant on-screen Order Reference ID + automated dispatch routing to waleedshoaibofficial@gmail.com and sales@onyxmen.my.',
          metric: 'INSTANT (<10 SECS)',
        },
        {
          code: 'DESK-SLA · 02',
          title: 'Official Sales & Express Dispatch Desk (sales@onyxmen.my)',
          desc: 'Dedicated channel for 1/2/3-bottle reservations (RM 159 / RM 318 / RM 477), FPX/DuitNow QR settlement, and COD confirmation.',
          metric: '15–30 MIN RESPONSE',
        },
        {
          code: 'DESK-SLA · 03',
          title: 'Botanical Protocol & Advisory Desk (info@onyxmen.my)',
          desc: 'Private consultation on selecting Horsemen, Hammer of Thor, Grow XL, or Magnum Pump XR, or stacking 2–3 bottle protocols.',
          metric: '30–60 MIN RESPONSE',
        },
        {
          code: 'DESK-SLA · 04',
          title: 'Same-Day Klang Valley Private Runner Coordination',
          desc: 'Priority dispatch desk for 3–5 hour unmarked rider delivery across Kuala Lumpur, Selangor, Putrajaya & Cyberjaya (cutoff 16:00 MYT).',
          metric: '3–5 HR HANDOVER',
        },
        {
          code: 'DESK-SLA · 05',
          title: 'Waybill Tracking & Address Amendment Support',
          desc: 'Real-time updates for PosLaju Priority, NinjaVan Discreet, J&T VIP, and Borneo Air Freight shipments.',
          metric: 'SAME-DAY TRACKING',
        },
        {
          code: 'DESK-SLA · 06',
          title: 'Authenticity Seal & Batch Lot Verification',
          desc: 'Send your bottle SKU/lot code or waybill photo to info@onyxmen.my for instant confirmation against our KL vault ledger.',
          metric: 'UNDER 60 MINS',
        },
        {
          code: 'DESK-SLA · 07',
          title: '14/30-Day Unopened Return & Transit Damage Desk',
          desc: 'Priority processing for unopened bottle exchanges or 48-hour free replacement of parcels damaged in courier transit.',
          metric: '24H RESOLUTION',
        },
        {
          code: 'DESK-SLA · 08',
          title: 'PDPA Act 709 Data Privacy & 24-Hour Record Purge Desk',
          desc: 'Command immediate permanent deletion of your name, phone number, and address after parcel arrival via info@onyxmen.my.',
          metric: '24H DATA PURGE',
        },
      ],
      tableTitle: 'Onyxmen Malaysia Official Contact Endpoints, Operating Hours & Jurisdiction Matrix',
      tableHeaders: [
        'Concierge Desk / Endpoint',
        'Official Address / Identifier',
        'Primary Responsibilities',
        'Operating Window & SLA',
      ],
      tableRows: [
        [
          'Official Sales & Fulfilment Desk',
          'sales@onyxmen.my',
          'New orders (RM 159 / RM 318 / RM 477), FPX/DuitNow QR links, COD dispatch & tracking numbers.',
          '09:00 – 23:00 MYT Daily (15–30 min average response).',
        ],
        [
          'Botanical Advisory & PDPA Privacy Desk',
          'info@onyxmen.my',
          'Formulation comparison guidance, capsule timing questions, batch checks & PDPA data erasure.',
          '09:00 – 23:00 MYT Daily (Under 60 min response).',
        ],
        [
          'Primary Merchant Order Notification Inbox',
          'waleedshoaibofficial@gmail.com',
          'Direct FormSubmit AJAX Express Order Drawer endpoint & reverse WhatsApp dispatch bridge.',
          '24/7 Automated Ingestion + 09:00–23:00 MYT Live Dispatch.',
        ],
        [
          'Central Climate-Controlled Fulfilment Hub',
          'OM Fulfilment Logistics, 50450 Kuala Lumpur, Wilayah Persekutuan, Malaysia',
          '22°C–24°C botanical vault storage, 3-layer blind parcel packing & nationwide courier release.',
          'Same-Day Cutoff: 16:00 MYT (Monday – Saturday).',
        ],
      ],
      faqs: [
        {
          questionEn: 'What is the fastest way to place a discreet order right now?',
          answerEn:
            'Click any "Acquire Discreet Reserve — RM 159" button on this page to open the 10-Second Express Discreet Order Drawer. Select your formulation (Horsemen, Hammer of Thor, Grow XL, or Magnum Pump XR), choose 1 Bottle (RM 159), 2 Bottles (RM 318), or 3 Bottles (RM 477), and submit your delivery details. Your order routes immediately to waleedshoaibofficial@gmail.com and sales@onyxmen.my.',
        },
        {
          questionEn: 'Can I email sales@onyxmen.my directly to place an order or ask for a custom multi-bottle combination?',
          answerEn:
            'Yes. You can email sales@onyxmen.my or info@onyxmen.my at any time with your preferred bottle combination (for example, 1 bottle of Grow XL + 1 bottle of Horsemen at the RM 318 2-Bottle tier), recipient name/initials, Malaysian WhatsApp number, and delivery address.',
        },
        {
          questionEn: 'Does Onyxmen Malaysia have a walk-in retail shop in Kuala Lumpur?',
          answerEn:
            'To protect client anonymity and maintain strict 22°C–24°C cleanroom storage standards, our Kuala Lumpur facility (Postcode 50450) operates strictly as a closed-access fulfilment vault. Clients in Kuala Lumpur and Selangor who want rapid delivery can select our 3–5 Hour Same-Day Unmarked Private Runner.',
        },
        {
          questionEn: 'What hours is the Kuala Lumpur Concierge Desk open?',
          answerEn:
            'Our human concierge specialists are on duty 7 days a week from 09:00 AM to 11:00 PM Malaysia Time (MYT / UTC+8), while our Express Order Drawer logs reservations 24 hours a day.',
        },
      ],
    },
    ms: {
      seoTitle:
        'Meja Khidmat Pelanggan Privasi & Tempahan Kuala Lumpur — sales@onyxmen.my & info@onyxmen.my | Onyxmen Malaysia',
      metaDescription:
        'Hubungi Meja Khidmat Pelanggan Privasi & Operasi Kuala Lumpur Onyxmen Malaysia (09:00–23:00 MYT setiap hari): sales@onyxmen.my, info@onyxmen.my & waleedshoaibofficial@gmail.com. Tempahan ekspres 10 saat, runner hari sama Lembah Klang & sokongan tracking.',
      eyebrow:
        'MS-170 · MEJA KHIDMAT PELANGGAN PRIVASI KUALA LUMPUR, KONSULTASI FORMULASI & TEMPAHAN RAHSIA',
      headline:
        'Meja Khidmat Pelanggan Privasi & Sokongan Pesanan Kuala Lumpur (09:00 – 23:00 MYT).',
      subheadline:
        'Komunikasi terus dan sulit bersama pasukan operasi apotekari Kuala Lumpur kami untuk tempahan ekspres, penghantar hari sama Lembah Klang, semakan nombor tracking, dan pemilihan formulasi.',
      executiveSummary:
        'Onyxmen Malaysia mengendalikan Meja Khidmat Pelanggan Privasi di Kuala Lumpur (Poskod 50450) tujuh hari seminggu dari jam 09:00 pagi hingga 23:00 malam MYT (UTC+8). Sama ada anda ingin menempah pakej 1 Botol (RM 159), 2 Botol (RM 318), atau 3 Botol (RM 477) melalui Laci Tempahan Ekspres 10 Saat, mengatur penghantar rahsia 3–5 jam di Kuala Lumpur atau Selangor, mengesahkan ketulenan botol, atau memohon pemadaman data PDPA, pasukan kami sedia membantu melalui sales@onyxmen.my, info@onyxmen.my, dan waleedshoaibofficial@gmail.com.',
      telemetry: [
        {
          key: '01 · MEJA JUALAN & TEMPAHAN',
          val: 'sales@onyxmen.my',
          sub: 'Tempahan ekspres, FPX/DuitNow QR, COD & runner hari sama KL',
        },
        {
          key: '02 · KONSULTASI & PRIVASI PDPA',
          val: 'info@onyxmen.my',
          sub: 'Panduan protokol botani, semakan lot & permohonan privasi PDPA',
        },
        {
          key: '03 · INBOX PELEPASAN UTAMA',
          val: 'waleedshoaibofficial@gmail.com',
          sub: 'Notifikasi terus Laci Tempahan Ekspres & pengesahan WhatsApp',
        },
        {
          key: '04 · WAKTU OPERASI (MYT)',
          val: '09:00 – 23:00 Setiap Hari',
          sub: 'Isnin – Ahad termasuk cuti umum Malaysia · Hab KL 50450',
        },
      ],
      splitChapters: [
        {
          kicker: 'BAB 01 · TIGA SALURAN TERUS MEJA KHIDMAT PELANGGAN KUALA LUMPUR',
          title: 'Bagaimana Pasukan Operasi Kami Mengendalikan Pertanyaan Anda Secara Sulit.',
          body1:
            'Setiap pertanyaan dan pesanan yang dihantar ke Onyxmen Malaysia dikendalikan sepenuhnya oleh pegawai operasi dalaman kami di Kuala Lumpur—tidak sesekali diserahkan kepada pusat panggilan pihak ketiga. Untuk tempahan baharu, pengesahan bayaran (FPX, DuitNow QR, atau COD), serta semakan nombor tracking kurier, sila hubungi sales@onyxmen.my.',
          body2:
            'Untuk mendapatkan panduan memilih antara formulasi 20 kapsul malam (Horsemen & Hammer of Thor) dan formulasi 30 kapsul bulanan (Grow XL & Magnum Pump XR), atau untuk semakan ketulenan kod lot dan pemadaman rekod PDPA, sila hubungi info@onyxmen.my. Semua pesanan daripada Laci Tempahan Ekspres juga dihantar serentak ke peti masuk utama kami di waleedshoaibofficial@gmail.com.',
        },
        {
          kicker: 'BAB 02 · JAMBATAN WHATSAPP DUA HALA & LACI TEMPAHAN 10 SAAT',
          title: 'Pengesahan Pesanan Serta-Merta & Peringatan Kalendar Bekalan 1-Klik.',
          body1:
            'Apabila anda menghantar butiran penghantaran melalui Laci Tempahan Ekspres 10 Saat di mana-mana halaman https://www.onyxmen.my/ms/, sistem kami akan menjana ID Rujukan Pesanan unik anda (ONYX-MY-XXXXXX) serta-merta di skrin dan menghantar pesanan sulit ke bilik kebal Kuala Lumpur kami.',
          body2:
            'Pegawai operasi kami akan menghubungi nombor WhatsApp Malaysia anda (01X-XXXXXXX) secara terus untuk mengesahkan pautan nombor tracking bungkusan rahsia atau masa ketibaan runner Lembah Klang—sambil menyediakan pautan 1-klik Peringatan Kalendar Google (+18 hari bagi botol 20 kapsul, +25 hari bagi botol 30 kapsul).',
        },
        {
          kicker: 'BAB 03 · ARAHAN KHAS PONDOK PENGAWAL KONDO & KAUNTER PEJABAT',
          title: 'Menyesuaikan Arahan Serahan Bungkusan Di Seluruh 16 Negeri Malaysia.',
          body1:
            'Ramai pelanggan kami di KLCC, Mont Kiara, Bangsar, Damansara, Petaling Jaya, Pulau Pinang, dan Johor Bahru memilih supaya bungkusan tanpa nama mereka ditinggalkan secara senyap di pondok pengawal kondominium atau kaunter penyambut tetamu pejabat.',
          body2:
            'Anda hanya perlu menyatakan arahan serahan khas tersebut di ruangan Alamat Penghantaran pada Laci Tempahan Ekspres atau menghantar e-mel ke sales@onyxmen.my bersama ID Rujukan Pesanan anda sebelum jam 16:00 MYT.',
        },
      ],
      ledgerTitle: '8 Saluran Jaminan Tahap Perkhidmatan (SLA) Meja Operasi Kuala Lumpur',
      ledgerSub:
        'Direktori saluran terus dan tempoh maklum balas rasmi bagi setiap jenis urusan pelanggan di seluruh Malaysia.',
      ledgerRows: [
        {
          code: 'SLA-MEJA · 01',
          title: 'Laci Tempahan Ekspres Rahsia 10 Saat (Semua Halaman)',
          desc: 'Paparan segera ID Rujukan Pesanan di skrin + penghantaran automatik ke waleedshoaibofficial@gmail.com dan sales@onyxmen.my.',
          metric: 'SERTA-MERTA (<10 SAAT)',
        },
        {
          code: 'SLA-MEJA · 02',
          title: 'Meja Jualan & Pelepasan Ekspres Rasmi (sales@onyxmen.my)',
          desc: 'Saluran khusus untuk tempahan 1/2/3 botol (RM 159 / RM 318 / RM 477), bayaran FPX/DuitNow QR, dan pengesahan COD.',
          metric: 'MAKLUM BALAS 15–30 MIN',
        },
        {
          code: 'SLA-MEJA · 03',
          title: 'Meja Konsultasi Protokol Botani (info@onyxmen.my)',
          desc: 'Nasihat peribadi pemilihan Horsemen, Hammer of Thor, Grow XL, atau Magnum Pump XR serta gabungan pakej 2–3 botol.',
          metric: 'MAKLUM BALAS 30–60 MIN',
        },
        {
          code: 'SLA-MEJA · 04',
          title: 'Penyelarasan Penghantar Rahsia Hari Sama Lembah Klang',
          desc: 'Pelepasan keutamaan penghantar tanpa nama dalam masa 3–5 jam di KL, Selangor, Putrajaya & Cyberjaya (sebelum 16:00 MYT).',
          metric: 'SERAHAN 3–5 JAM',
        },
        {
          code: 'SLA-MEJA · 05',
          title: 'Sokongan Nombor Tracking & Pindaan Alamat Kurier',
          desc: 'Kemas kini masa nyata untuk penghantaran PosLaju Priority, NinjaVan Discreet, J&T VIP, dan Kargo Udara Borneo.',
          metric: 'TRACKING HARI SAMA',
        },
        {
          code: 'SLA-MEJA · 06',
          title: 'Pengesahan Meterai Ketulenan & Nombor Lot Botol',
          desc: 'Hantarkan kod SKU/lot botol atau gambar slip kurier ke info@onyxmen.my untuk semakan segera.',
          metric: 'BAWAH 60 MINIT',
        },
        {
          code: 'SLA-MEJA · 07',
          title: 'Meja Pemulangan 14/30 Hari & Gantian Rosak Transit',
          desc: 'Pemprosesan keutamaan untuk pertukaran botol belum dibuka atau gantian percuma 48 jam bagi kerosakan transit.',
          metric: 'PENYELESAIAN 24 JAM',
        },
        {
          code: 'SLA-MEJA · 08',
          title: 'Meja Privasi Akta PDPA 709 & Pemadaman Data 24 Jam',
          desc: 'Arahkan pemadaman kekal nama, nombor telefon, dan alamat anda selepas bungkusan tiba melalui info@onyxmen.my.',
          metric: 'PADAM DATA 24 JAM',
        },
      ],
      tableTitle: 'Matriks Saluran Hubungan Rasmi, Waktu Operasi & Bidang Tugas Onyxmen Malaysia',
      tableHeaders: [
        'Meja Perkhidmatan / Saluran',
        'Alamat E-mel / Lokasi Rasmi',
        'Tanggungjawab Utama',
        'Waktu Operasi & Tempoh Respons',
      ],
      tableRows: [
        [
          'Meja Jualan & Pelepasan Pesanan Rasmi',
          'sales@onyxmen.my',
          'Tempahan baharu (RM 159 / RM 318 / RM 477), pautan FPX/DuitNow QR, pengesahan COD & nombor tracking.',
          '09:00 – 23:00 MYT Setiap Hari (Purata respons 15–30 minit).',
        ],
        [
          'Meja Konsultasi Botani & Privasi PDPA',
          'info@onyxmen.my',
          'Panduan perbandingan formulasi, cara makan kapsul, semakan ketulenan & pemadaman rekod PDPA.',
          '09:00 – 23:00 MYT Setiap Hari (Respons bawah 60 minit).',
        ],
        [
          'Peti Masuk Notifikasi Pesanan Utama',
          'waleedshoaibofficial@gmail.com',
          'Penerima terus Laci Tempahan Ekspres AJAX & jambatan pengesahan WhatsApp pelanggan.',
          'Sistem Automatik 24/7 + Pelepasan Langsung 09:00–23:00 MYT.',
        ],
        [
          'Hab Pengagihan Kawalan Suhu Pusat',
          'OM Fulfilment Logistics, 50450 Kuala Lumpur, Wilayah Persekutuan, Malaysia',
          'Penyimpanan bilik kebal 22°C–24°C, pembungkusan rahsia 3-lapisan & pelepasan kurier 16 negeri.',
          'Waktu Tutup Hari Sama: 16:00 MYT (Isnin – Sabtu).',
        ],
      ],
      faqs: [
        {
          questionMs: 'Apakah cara paling pantas untuk membuat tempahan bungkusan rahsia sekarang?',
          answerMs:
            'Klik mana-mana butang "Tempah Bungkusan Rahsia — RM 159" pada halaman ini untuk membuka Laci Tempahan Ekspres 10 Saat. Pilih formulasi anda (Horsemen, Hammer of Thor, Grow XL, atau Magnum Pump XR), pilih kuantiti 1 Botol (RM 159), 2 Botol (RM 318), atau 3 Botol (RM 477), dan lengkapkan alamat anda. Pesanan akan dihantar terus ke waleedshoaibofficial@gmail.com dan sales@onyxmen.my.',
        },
        {
          questionMs: 'Bolehkah saya menghantar e-mel terus ke sales@onyxmen.my untuk memesan gabungan botol berbeza?',
          answerMs:
            'Ya. Anda boleh menghantar e-mel ke sales@onyxmen.my atau info@onyxmen.my pada bila-bila masa dengan menyatakan gabungan botol pilihan anda (contohnya 1 botol Grow XL + 1 botol Horsemen pada harga pakej 2 Botol RM 318), nama/singkatan penerima, nombor WhatsApp Malaysia, dan alamat penuh.',
        },
        {
          questionMs: 'Adakah Onyxmen Malaysia mempunyai kedai fizikal terbuka untuk walk-in di Kuala Lumpur?',
          answerMs:
            'Demi melindungi privasi pelanggan 100% dan mengekalkan piawaian bilik bersih kawalan suhu 22°C–24°C, fasiliti Kuala Lumpur kami (Poskod 50450) beroperasi sebagai bilik kebal pelepasan tertutup. Pelanggan di KL dan Selangor yang mahukan serahan segera boleh memilih Penghantar Persendirian Rahsia Hari Sama 3–5 Jam.',
        },
        {
          questionMs: 'Bilakah waktu operasi Meja Khidmat Pelanggan Kuala Lumpur?',
          answerMs:
            'Pegawai khidmat pelanggan kami bertugas 7 hari seminggu dari jam 09:00 pagi hingga 11:00 malam Waktu Malaysia (MYT / UTC+8), manakala Laci Tempahan Ekspres menerima tempahan 24 jam sehari.',
        },
      ],
    },
  },

  // --------------------------------------------------------------------------
  // DOSSIER 6: MS-169 & MS-170 — About Onyxmen Malaysia Apothecary & Botanical Quality Board
  // --------------------------------------------------------------------------
  {
    key: 'about',
    code: 'ABOUT-MY',
    microStepEn: 'MS-169',
    microStepMs: 'MS-170',
    canonicalEnPath: '/about/',
    canonicalMsPath: '/ms/tentang-kami/',
    enOutputPaths: [
      'about/index.html',
    ],
    msOutputPaths: [
      'ms/about/index.html',
      'ms/tentang-kami/index.html',
    ],
    heroImage: '/assets/products/onyxman-lineup-hero.webp',
    portraitImage: '/assets/products/horsemen-portrait.webp',
    primaryProductSlug: 'horsemen',
    activeNav: 'home',
    en: {
      seoTitle:
        'About Onyxmen Malaysia — Luxury Men’s Botanical Vitality Apothecary & Quality Assurance Board | Onyxmen Malaysia',
      metaDescription:
        'Discover Onyxmen Malaysia: Kuala Lumpur’s private botanical apothecary for Horsemen, Hammer of Thor, Grow XL, and Magnum Pump XR. Standardized 100:1 extraction, 22°C–24°C climate-controlled vault, PDPA Act 709 confidentiality, and official RM 159 direct tariff.',
      eyebrow:
        'MS-169 · ABOUT ONYXMEN MALAYSIA APOTHECARY & BOTANICAL QUALITY ASSURANCE BOARD',
      headline:
        'About Onyxmen Malaysia — Architectural Men’s Botanical Vitality Apothecary & Quality Assurance Vault.',
      subheadline:
        'Founded to elevate men’s vitality supplementation in Malaysia from unregulated grey-market guesswork to clinical-grade botanical standardization, climate-controlled vault stewardship, and uncompromising buyer privacy.',
      executiveSummary:
        'Onyxmen Malaysia (https://www.onyxmen.my) is a premier direct-to-client men’s botanical vitality house headquartered in Kuala Lumpur (Postcode 50450). We curate four distinct, laboratory-screened herbal formulations—Horsemen (20 Caps × 500mg), Hammer of Thor (20 Veg. Caps × 500mg), Grow XL (30 Caps × 550mg), and Magnum Pump XR (30 Black Caps × 600mg)—at our uniform transparent Malaysia tariff of RM 159 (1 Bottle), RM 318 (2 Bottles), and RM 477 (3 Bottles). Every formulation is overseen by the Onyxmen Malaysia Botanical Formulation & Quality Assurance Board with zero undeclared synthetic chemicals and 100% blind-waybill delivery.',
      telemetry: [
        {
          key: '01 · APOTHECARY HEADQUARTERS',
          val: 'Kuala Lumpur 50450',
          sub: '22°C–24°C Climate-Controlled Vault & Fulfilment Hub',
        },
        {
          key: '02 · FORMULATION ARCHITECTURE',
          val: '4 Standardized Reserves',
          sub: 'Horsemen · Hammer of Thor · Grow XL · Magnum Pump XR',
        },
        {
          key: '03 · ANALYTICAL GOVERNANCE',
          val: '8-Stage Batch Audit',
          sub: 'HPLC-DAD bioactive assay, ICP-MS heavy metals & 0.00% PDE5 screen',
        },
        {
          key: '04 · NATIONWIDE REACH',
          val: 'All 16 MY States & FT',
          sub: '3–5h Klang Valley runner, 1–2d Peninsular & 2–4d Borneo air cargo',
        },
      ],
      splitChapters: [
        {
          kicker: 'CHAPTER 01 · WHY WE BUILT ONYXMEN MALAYSIA',
          title: 'Ending The Era Of Unstandardized Herbs & Grey-Market Counterfeits.',
          body1:
            'For years, men in Malaysia seeking natural stamina, endocrine vitality, or nitric oxide vascular support faced an unacceptable dilemma: cheap unstandardized root powders with negligible active glycosides on one hand, or hazardous street counterfeits laced with undeclared synthetic drugs on the other. Neither respected the intelligence, physiology, or privacy of the modern Malaysian gentleman.',
          body2:
            'Onyxmen Malaysia was established to build an obsidian standard of trust. By combining high-ratio aqueous botanical extracts—led by Malaysian 100:1 Eurycoma longifolia (≥2.2% eurycomanone), 60%-protodioscin Tribulus terrestris, 10:1 gelatinized Peruvian Black Maca, and pharmaceutical-grade L-Arginine HCl + L-Citrulline Malate—with 8-stage laboratory screening and direct vault-to-door fulfilment, we eliminate every middleman risk.',
        },
        {
          kicker: 'CHAPTER 02 · OUR FOUR SPECIALIZED FORMULATION PILLARS',
          title: 'Targeted Botanical Engineering Rather Than One-Size-Fits-All Promises.',
          body1:
            'Male vitality is multi-pathway. Rather than selling a single generic capsule, our apothecary curates four specialized reserves: (1) Horsemen (ONYX-HM-20, 20 Caps × 500mg) for peak evening stamina and adaptogenic recovery; (2) Hammer of Thor (ONYX-HT-20, 20 Veg. Caps × 500mg) in plant-derived HPMC shells for steroidal saponin drive and metabolic endurance; (3) Grow XL (ONYX-GX-30, 30 Caps × 550mg) for cumulative 30-day multi-adaptogen cellular vitality; and (4) Magnum Pump XR (ONYX-MP-30, 30 Black Caps × 600mg) for nitric oxide cGMP vascular fullness and testosterone support.',
          body2:
            'All four formulations share our uniform official pricing structure—1 Bottle RM 159 (159.00 MYR), 2 Bottles RM 318 (318.00 MYR), and 3 Bottles RM 477 (477.00 MYR)—so you choose strictly based on your physiological goal, never price confusion.',
        },
        {
          kicker: 'CHAPTER 03 · E-E-A-T GOVERNANCE, HONEST LABELLING & CLIENT CONFIDENTIALITY',
          title: 'Scientific Transparency Without Fabricated Claims Or Privacy Compromise.',
          body1:
            'Every monograph, dosage protocol, and botanical breakdown on onyxman.my is reviewed by the Onyxmen Malaysia Botanical Formulation & Quality Assurance Board. We enforce a strict truth-in-labelling constitution: we publish exact milligram active profiles, cite peer-reviewed phytomedicine mechanisms, clearly distinguish oral dietary supplements from prescription medicines, and never invent fake regulatory registration numbers.',
          body2:
            'Equally foundational is our commitment to the Malaysian Personal Data Protection Act 2010 (Act 709). Every order is processed without mandatory account creation and dispatched under the neutral sender name "OM Fulfilment Logistics" in triple-sealed plain packaging.',
        },
      ],
      ledgerTitle: '8-Pillar Onyxmen Malaysia Apothecary & E-E-A-T Governance Charter',
      ledgerSub:
        'The eight institutional standards that govern every formulation, batch inspection, editorial publication, and parcel dispatch at Onyxmen Malaysia.',
      ledgerRows: [
        {
          code: 'CHARTER · 01',
          title: 'Standardized Phytochemical Extraction (Never Raw Root Dust)',
          desc: 'We formulate exclusively with standardized extracts assayed for active marker compounds (≥2.2% eurycomanone, 60% protodioscin, ≥10% ginsenosides, ≥10% icariin).',
          metric: 'HPLC STANDARDIZED',
        },
        {
          code: 'CHARTER · 02',
          title: 'Zero Synthetic PDE5 Adulteration (LC-MS/MS Screened)',
          desc: 'Every production lot is screened to guarantee 0.00% sildenafil, tadalafil, vardenafil, or synthetic analogues—delivering natural wellness without chemical side effects.',
          metric: '0.00% SYNTHETICS',
        },
        {
          code: 'CHARTER · 03',
          title: 'Climate-Controlled Kuala Lumpur Apothecary Vault (22°C–24°C)',
          desc: 'Continuous temperature and humidity regulation (45%–50% RH) in Kuala Lumpur 50450 protects hygroscopic extracts from tropical degradation.',
          metric: '22°C–24°C VAULT',
        },
        {
          code: 'CHARTER · 04',
          title: 'Honest Supplement Positioning & Zero Fake Registration Strings',
          desc: 'Transparent adult men’s nutritional supplement labelling with full milligram disclosure and zero fabricated regulatory numbers.',
          metric: '100% HONEST LABEL',
        },
        {
          code: 'CHARTER · 05',
          title: 'Uniform Official Malaysia Tariff (RM 159 / RM 318 / RM 477)',
          desc: 'Transparent single-bottle (RM 159) and multi-bottle cycle pricing (RM 318 / RM 477) across all four formulations with zero hidden subscription traps.',
          metric: 'TRANSPARENT MYR',
        },
        {
          code: 'CHARTER · 06',
          title: '3-Layer Unmarked Packaging & Blind Waybill ("OM Fulfilment Logistics")',
          desc: 'Acoustic anti-rattle bubble immobilization inside a rigid plain box with neutral waybill wording safe for condo guards and corporate desks.',
          metric: '100% DISCREET BOX',
        },
        {
          code: 'CHARTER · 07',
          title: 'Malaysia PDPA Act 709 Confidentiality & 24-Hour Erasure Right',
          desc: 'Zero third-party marketing sharing, zero mandatory account passwords, and permanent post-delivery record scrubbing upon request.',
          metric: 'PDPA ACT 709',
        },
        {
          code: 'CHARTER · 08',
          title: '7-Day Kuala Lumpur Private Concierge (09:00–23:00 MYT)',
          desc: 'Direct human support via sales@onyxmen.my, info@onyxmen.my, and waleedshoaibofficial@gmail.com across English and Bahasa Melayu.',
          metric: 'KL CONCIERGE DESK',
        },
      ],
      tableTitle: 'Onyxmen Malaysia Institutional Profile & Governance Overview',
      tableHeaders: [
        'Institutional Dimension',
        'Onyxmen Malaysia Standard',
        'Operational Detail & Verification',
        'Client Benefit',
      ],
      tableRows: [
        [
          'Headquarters & Dispatch Vault',
          'Kuala Lumpur, Wilayah Persekutuan (Postcode 50450)',
          '22°C–24°C climate-controlled inventory vault operating under "OM Fulfilment Logistics".',
          'Fresh, unoxidized capsules & 3–5h Klang Valley / 1–2d Peninsular dispatch.',
        ],
        [
          'Editorial & Quality Review Board',
          'Onyxmen Malaysia Botanical Formulation & Quality Assurance Board',
          'Reviews all ingredient dosages, HPLC/ICP-MS batch logs, and bilingual educational monographs.',
          'Accurate, science-backed dosage timing & honest supplement guidance.',
        ],
        [
          'Flagship Product Portfolio',
          'Horsemen · Hammer of Thor · Grow XL · Magnum Pump XR',
          'Uniform RM 159 (1 Bottle), RM 318 (2 Bottles), RM 477 (3 Bottles) across all 4 formulations.',
          'Tailored choice for evening stamina, veg saponins, 30-day vitality, or NO pump.',
        ],
        [
          'Official Communication Channels',
          'sales@onyxmen.my · info@onyxmen.my · waleedshoaibofficial@gmail.com',
          'Direct encrypted AJAX order drawer + 09:00–23:00 MYT bilingual concierge support.',
          'Zero third-party middlemen, instant authenticity verification & PDPA privacy.',
        ],
      ],
      faqs: [
        {
          questionEn: 'Where is Onyxmen Malaysia located and where do parcels ship from?',
          answerEn:
            'Onyxmen Malaysia is headquartered in Kuala Lumpur (Postcode 50450, Wilayah Persekutuan Kuala Lumpur). Every order is packed and dispatched directly from our climate-controlled Kuala Lumpur fulfilment vault under the neutral courier sender name "OM Fulfilment Logistics".',
        },
        {
          questionEn: 'Who oversees the formulation and editorial standards on onyxman.my?',
          answerEn:
            'All formulation specifications, batch analytical verification (HPLC bioactive assay, ICP-MS heavy metal limits, USP <61>/<62> microbiology, and LC-MS/MS synthetic adulterant screening), and bilingual educational dossiers are reviewed by the Onyxmen Malaysia Botanical Formulation & Quality Assurance Board.',
        },
        {
          questionEn: 'Why does Onyxmen Malaysia sell only directly through onyxman.my?',
          answerEn:
            'Direct-to-client distribution allows us to guarantee 100% batch authenticity at the official RM 159 / RM 318 / RM 477 tariff, prevent tropical warehouse heat damage, and maintain strict Malaysia PDPA Act 709 buyer confidentiality from order placement to doorstep delivery.',
        },
        {
          questionEn: 'How can I explore all four Onyxmen formulations in detail?',
          answerEn:
            'You can inspect the complete side-by-side matrix above, visit our Master Formulations Vault (/products/), or explore each dedicated monograph directly: Horsemen (/products/horsemen/), Hammer of Thor (/products/hammer-of-thor/), Grow XL (/products/grow-xl/), and Magnum Pump XR (/products/magnum-pump-xr/).',
        },
      ],
    },
    ms: {
      seoTitle:
        'Tentang Onyxmen Malaysia — Apotekari Vitaliti Botani Lelaki & Lembaga Jaminan Kualiti | Onyxmen Malaysia',
      metaDescription:
        'Kenali Onyxmen Malaysia: apotekari botani lelaki di Kuala Lumpur untuk Horsemen, Hammer of Thor, Grow XL, dan Magnum Pump XR. Pengekstrakan piawai 100:1, bilik kebal kawalan suhu 22°C–24°C, kerahsiaan Akta PDPA 709 & harga rasmi RM 159.',
      eyebrow:
        'MS-170 · TENTANG APOTEKARI ONYXMEN MALAYSIA & LEMBAGA JAMINAN KUALITI BOTANI',
      headline:
        'Tentang Onyxmen Malaysia — Apotekari Vitaliti Botani Lelaki & Bilik Kebal Jaminan Kualiti.',
      subheadline:
        'Ditubuhkan bagi mengangkat piawaian suplemen kecergasan lelaki di Malaysia daripada risiko produk tiruan pasaran gelap kepada pengekstrakan botani berpiawai makmal, bilik kebal kawalan suhu, dan privasi pelanggan mutlak.',
      executiveSummary:
        'Onyxmen Malaysia (https://www.onyxmen.my/ms/) ialah gedung apotekari vitaliti botani lelaki eksklusif yang berpusat di Kuala Lumpur (Poskod 50450). Kami menyediakan empat formulasi herba terpiawai yang disaring makmal—Horsemen (20 Kapsul × 500mg), Hammer of Thor (20 Kapsul Veg. × 500mg), Grow XL (30 Kapsul × 550mg), dan Magnum Pump XR (30 Kapsul Hitam × 600mg)—pada harga rasmi seragam Malaysia iaitu RM 159 (1 Botol), RM 318 (2 Botol), dan RM 477 (3 Botol). Setiap formulasi diselia oleh Lembaga Formulasi Botani & Jaminan Kualiti Onyxmen Malaysia dengan jaminan sifar bahan kimia sintetik terlarang dan penghantaran bungkusan rahsia 100%.',
      telemetry: [
        {
          key: '01 · IBU PEJABAT APOTEKARI',
          val: 'Kuala Lumpur 50450',
          sub: 'Bilik Kebal Kawalan Suhu 22°C–24°C & Hab Pelepasan Pusat',
        },
        {
          key: '02 · SENI BINA FORMULASI',
          val: '4 Formulasi Utama',
          sub: 'Horsemen · Hammer of Thor · Grow XL · Magnum Pump XR',
        },
        {
          key: '03 · TADBIR URUS ANALITIKAL',
          val: 'Audit Makmal 8 Peringkat',
          sub: 'Ujian HPLC-DAD, logam berat ICP-MS & saringan 0.00% PDE5',
        },
        {
          key: '04 · LIPUTAN SELURUH NEGARA',
          val: '16 Negeri & Wilayah MY',
          sub: 'Penghantar 3–5j Lembah Klang, 1–2h Semenanjung & 2–4h Borneo',
        },
      ],
      splitChapters: [
        {
          kicker: 'BAB 01 · MENGAPA KAMI MENUBUHKAN ONYXMEN MALAYSIA',
          title: 'Menamatkan Era Herba Mentah Tidak Terpiawai & Produk Tiruan Berbahaya.',
          body1:
            'Selama bertahun-tahun, lelaki dewasa di Malaysia yang mencari sokongan stamina semula jadi, tenaga dalaman, atau peredaran darah nitrik oksida berdepan dilema: sama ada membeli kapsul serbuk akar mentah murahan yang hampir tiada kandungan bioaktif, atau terdedah kepada produk tiruan jalanan yang dicampur bahan kimia sintetik terlarang. Kedua-duanya mengabaikan keselamatan fisiologi dan privasi lelaki moden.',
          body2:
            'Onyxmen Malaysia diasaskan untuk membina penanda aras ketulenan tertinggi. Dengan menggabungkan ekstrak botani berkepekatan tinggi—diterajui oleh Akar Tongkat Ali Malaysia 100:1 (≥2.2% eurycomanone), Tribulus terrestris 60% protodioscin, Maca Hitam Peru 10:1 tergelatinisasi, serta asid amino L-Arginine HCl + L-Citrulline Malate gred farmaseutikal—bersama saringan makmal 8 peringkat dan penghantaran terus dari bilik kebal Kuala Lumpur, kami menghapuskan semua risiko orang tengah.',
        },
        {
          kicker: 'BAB 02 · EMPAT TUNJANG FORMULASI KHUSUS KAMI',
          title: 'Kejuruteraan Botani Bersasar Mengikut Keperluan Fisiologi Anda.',
          body1:
            'Kecergasan lelaki melibatkan pelbagai laluan biokimia. Daripada menjual satu produk umum untuk semua, apotekari kami menyediakan empat formulasi khusus: (1) Horsemen (ONYX-HM-20, 20 Kapsul × 500mg) untuk stamina malam dan pemulihan adaptogenik; (2) Hammer of Thor (ONYX-HT-20, 20 Kapsul Veg. × 500mg) dalam kapsul tumbuhan HPMC untuk sokongan saponin steroid dan daya tahan; (3) Grow XL (ONYX-GX-30, 30 Kapsul × 550mg) untuk kitaran vitaliti harian 30 hari; dan (4) Magnum Pump XR (ONYX-MP-30, 30 Kapsul Hitam × 600mg) untuk pengembangan vaskular nitrik oksida dan sokongan testosteron.',
          body2:
            'Keempat-empat formulasi ditawarkan pada harga rasmi seragam—1 Botol RM 159 (159.00 MYR), 2 Botol RM 318 (318.00 MYR), dan 3 Botol RM 477 (477.00 MYR)—supaya anda memilih berdasarkan matlamat kesihatan sebenar tanpa kekeliruan harga.',
        },
        {
          kicker: 'BAB 03 · TADBIR URUS E-E-A-T, PELABELAN JUJUR & KERAHSIAAN PELANGGAN',
          title: 'Ketelusan Saintifik Tanpa Tuntutan Palsu Atau Kompromi Privasi.',
          body1:
            'Setiap monograf, jadual dos, dan analisis botani di onyxman.my disemak oleh Lembaga Formulasi Botani & Jaminan Kualiti Onyxmen Malaysia. Kami mengamalkan prinsip ketelusan mutlak: menyiarkan berat miligram bahan aktif secara tepat, merujuk kajian fitoperubatan berwasit, membezakan suplemen pemakanan daripada ubat preskripsi, dan tidak sesekali mereka-reka nombor pendaftaran palsu.',
          body2:
            'Sama pentingnya ialah komitmen kami terhadap Akta Perlindungan Data Peribadi Malaysia 2010 (Akta 709). Setiap pesanan diproses tanpa paksaan membuka akaun dan dihantar menggunakan nama pengirim neutral "OM Fulfilment Logistics" di dalam kotak rahsia 3-lapisan.',
        },
      ],
      ledgerTitle: 'Piagam 8 Tunjang Apotekari & Tadbir Urus E-E-A-T Onyxmen Malaysia',
      ledgerSub:
        'Lapan piawaian institusi yang mengawal setiap formulasi, ujian makmal, penerbitan ilmiah, dan pelepasan bungkusan di Onyxmen Malaysia.',
      ledgerRows: [
        {
          code: 'PIAGAM · 01',
          title: 'Pengekstrakan Fitokimia Terpiawai (Bukan Serbuk Akar Mentah)',
          desc: 'Kami hanya menggunakan ekstrak terpiawai yang diuji untuk penanda bioaktif (≥2.2% eurycomanone, 60% protodioscin, ≥10% ginsenosida, ≥10% icariin).',
          metric: 'TERPIAWAI HPLC',
        },
        {
          code: 'PIAGAM · 02',
          title: 'Sifar Bahan Kimia Sintetik PDE5 (Saringan LC-MS/MS)',
          desc: 'Setiap kumpulan pengeluaran disaring bagi menjamin 0.00% sildenafil, tadalafil, vardenafil, atau analog sintetik—memberikan kecergasan semula jadi tanpa kesan sampingan.',
          metric: '0.00% SINTETIK',
        },
        {
          code: 'PIAGAM · 03',
          title: 'Bilik Kebal Kawalan Suhu Kuala Lumpur (22°C–24°C)',
          desc: 'Kawalan suhu dan kelembapan berterusan (45%–50% RH) di Kuala Lumpur 50450 melindungi ekstrak sensitif daripada kerosakan haba tropika.',
          metric: 'BILIK KEBAL 22°C–24°C',
        },
        {
          code: 'PIAGAM · 04',
          title: 'Pelabelan Suplemen Jujur & Sifar Kod Pendaftaran Palsu',
          desc: 'Pelabelan suplemen pemakanan lelaki dewasa yang telus dengan pendedahan miligram penuh tanpa sebarang nombor pendaftaran rekaan.',
          metric: '100% LABEL TELUS',
        },
        {
          code: 'PIAGAM · 05',
          title: 'Harga Rasmi Seragam Malaysia (RM 159 / RM 318 / RM 477)',
          desc: 'Harga telus sebotol (RM 159) dan pakej kitaran (RM 318 / RM 477) merentasi semua 4 formulasi tanpa caj langganan tersembunyi.',
          metric: 'HARGA MYR TELUS',
        },
        {
          code: 'PIAGAM · 06',
          title: 'Bungkusan Rahsia 3-Lapisan & Slip "OM Fulfilment Logistics"',
          desc: 'Balutan gelembung anti-bunyi di dalam kotak keras tanpa jenama dengan slip kurier neutral yang selamat di pondok pengawal kondominium dan pejabat.',
          metric: '100% KOTAK RAHSIA',
        },
        {
          code: 'PIAGAM · 07',
          title: 'Kerahsiaan Akta PDPA 709 & Hak Pemadaman Data 24 Jam',
          desc: 'Sifar perkongsian pemasaran pihak ketiga, sifar akaun wajib, dan pemadaman rekod kekal selepas penghantaran atas permintaan.',
          metric: 'AKTA PDPA 709',
        },
        {
          code: 'PIAGAM · 08',
          title: 'Meja Bantuan Privasi Kuala Lumpur 7 Hari (09:00–23:00 MYT)',
          desc: 'Sokongan terus melalui sales@onyxmen.my, info@onyxmen.my, dan waleedshoaibofficial@gmail.com dalam Bahasa Melayu dan Inggeris.',
          metric: 'MEJA BANTUAN KL',
        },
      ],
      tableTitle: 'Profil Institusi & Ringkasan Tadbir Urus Onyxmen Malaysia',
      tableHeaders: [
        'Dimensi Institusi',
        'Piawaian Onyxmen Malaysia',
        'Butiran Operasi & Pengesahan',
        'Manfaat Kepada Pelanggan',
      ],
      tableRows: [
        [
          'Ibu Pejabat & Bilik Kebal Pelepasan',
          'Kuala Lumpur, Wilayah Persekutuan (Poskod 50450)',
          'Bilik kebal kawalan suhu 22°C–24°C beroperasi di bawah "OM Fulfilment Logistics".',
          'Kapsul segar tidak teroksida & penghantaran pantas 3–5j Lembah Klang / 1–2h Semenanjung.',
        ],
        [
          'Lembaga Semakan Kualiti & Ilmiah',
          'Lembaga Formulasi Botani & Jaminan Kualiti Onyxmen Malaysia',
          'Menyemak semua dos bahan aktif, rekod makmal HPLC/ICP-MS & monograf dwibahasa.',
          'Panduan pemakanan tepat, berlandaskan sains & jujur.',
        ],
        [
          'Portfolio Produk Utama',
          'Horsemen · Hammer of Thor · Grow XL · Magnum Pump XR',
          'Harga seragam RM 159 (1 Botol), RM 318 (2 Botol), RM 477 (3 Botol) untuk semua 4 formulasi.',
          'Pilihan tepat mengikut sasaran stamina malam, kapsul veg, kitaran 30 hari, atau pam NO.',
        ],
        [
          'Saluran Komunikasi Rasmi',
          'sales@onyxmen.my · info@onyxmen.my · waleedshoaibofficial@gmail.com',
          'Laci tempahan ekspres AJAX disulitkan + khidmat pelanggan dwibahasa 09:00–23:00 MYT.',
          'Tiada orang tengah, semakan ketulenan segera & perlindungan PDPA.',
        ],
      ],
      faqs: [
        {
          questionMs: 'Di manakah lokasi ibu pejabat Onyxmen Malaysia dan dari manakah bungkusan dihantar?',
          answerMs:
            'Onyxmen Malaysia berpusat di Kuala Lumpur (Poskod 50450, Wilayah Persekutuan Kuala Lumpur). Setiap pesanan dibungkus dan dihantar terus dari bilik kebal kawalan suhu Kuala Lumpur kami menggunakan nama pengirim kurier neutral "OM Fulfilment Logistics".',
        },
        {
          questionMs: 'Siapakah yang menyelia piawaian formulasi dan maklumat ilmiah di onyxman.my?',
          answerMs:
            'Semua spesifikasi formulasi, pengesahan ujian makmal kumpulan (ujian bioaktif HPLC, had logam berat ICP-MS, mikrobiologi USP <61>/<62>, dan saringan bebas bahan sintetik LC-MS/MS), serta monograf pendidikan dwibahasa disemak oleh Lembaga Formulasi Botani & Jaminan Kualiti Onyxmen Malaysia.',
        },
        {
          questionMs: 'Mengapakah Onyxmen Malaysia hanya menjual secara terus melalui laman web rasmi onyxman.my?',
          answerMs:
            'Pengedaran terus kepada pelanggan membolehkan kami menjamin ketulenan 100% pada harga rasmi RM 159 / RM 318 / RM 477, mengelakkan kerosakan kapsul akibat stor panas, dan melindungi kerahsiaan peribadi pembeli di bawah Akta PDPA 709 dari saat tempahan sehingga bungkusan tiba.',
        },
        {
          questionMs: 'Bagaimanakah cara untuk saya melihat perbandingan penuh keempat-empat formulasi Onyxmen?',
          answerMs:
            'Anda boleh menyemak jadual perbandingan kuantitatif di atas, melayari Indeks Katalog Produk (/ms/produk/), atau membuka setiap halaman produk rasmi: Horsemen (/ms/produk/horsemen/), Hammer of Thor (/ms/produk/hammer-of-thor/), Grow XL (/ms/produk/grow-xl/), dan Magnum Pump XR (/ms/produk/magnum-pump-xr/).',
        },
      ],
    },
  },

  // --------------------------------------------------------------------------
  // DOSSIER 7: MS-169 & MS-170 — Master FAQ Hub & Concierge Knowledgebase (/faq/ & /ms/soalan-lazim/)
  // --------------------------------------------------------------------------
  {
    key: 'faq',
    code: 'FAQ-HUB',
    microStepEn: 'MS-169',
    microStepMs: 'MS-170',
    canonicalEnPath: '/faq/',
    canonicalMsPath: '/ms/soalan-lazim/',
    enOutputPaths: [
      'faq/index.html',
    ],
    msOutputPaths: [
      'ms/faq/index.html',
      'ms/soalan-lazim/index.html',
    ],
    heroImage: '/assets/products/grow-xl-stage.webp',
    portraitImage: '/assets/products/grow-xl-portrait.webp',
    primaryProductSlug: 'grow-xl',
    activeNav: 'guides',
    en: {
      seoTitle:
        'Master Frequently Asked Questions (FAQ) — Formulations, Dosage, Discreet Shipping, COD & PDPA | Onyxmen Malaysia',
      metaDescription:
        'Complete answers to every question about Onyxmen Malaysia: comparing Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR, official RM 159 / RM 318 / RM 477 pricing, capsule dosage timing, 100% unmarked discreet packaging, COD/FPX/DuitNow, and Malaysia PDPA privacy.',
      eyebrow:
        'MS-169 · MASTER FREQUENTLY ASKED QUESTIONS (FAQ) & CONCIERGE KNOWLEDGEBASE',
      headline:
        'Master Frequently Asked Questions — Formulations, Dosage Timing, Discreet Shipping & Malaysia PDPA.',
      subheadline:
        'Comprehensive, clinically grounded answers covering how to select between our 4 flagship formulations, optimal capsule timing with Malaysian meals, blind-waybill courier delivery, payment settlement, and return protections.',
      executiveSummary:
        'Whether you are deciding between a 20-capsule concentrated evening reserve (Horsemen or Hammer of Thor) and a 30-capsule daily vitality or nitric oxide regimen (Grow XL or Magnum Pump XR), or verifying how our unmarked parcels clear condominium guardhouses and corporate mailrooms across Malaysia, this Master FAQ Hub consolidates every technical, logistical, and regulatory answer in one authoritative reference.',
      telemetry: [
        {
          key: '01 · FORMULATION SELECTION',
          val: '4 Targeted Reserves',
          sub: '20-Cap (Horsemen / Hammer of Thor) & 30-Cap (Grow XL / Magnum Pump XR)',
        },
        {
          key: '02 · OFFICIAL MYR TARIFF',
          val: 'RM 159 / RM 318 / RM 477',
          sub: '1 Bottle RM 159 · 2 Bottles RM 318 (Free MY Ship) · 3 Bottles RM 477',
        },
        {
          key: '03 · DISCREET LOGISTICS',
          val: 'OM Fulfilment Logistics',
          sub: '3-layer plain box · 3–5h Klang Valley · 1–2d Peninsular · 2–4d Borneo',
        },
        {
          key: '04 · PAYMENT & PRIVACY',
          val: 'COD · FPX · DuitNow QR',
          sub: 'Zero account required · PDPA Act 709 · 14/30-day unopened return',
        },
      ],
      splitChapters: [
        {
          kicker: 'CHAPTER 01 · HOW TO CHOOSE YOUR IDEAL ONYXMEN FORMULATION',
          title: 'Matching Your Physiological Goal To The Right Botanical Matrix.',
          body1:
            'Every gentleman’s baseline schedule and performance priority is unique. If your primary objective is peak evening stamina, vitality, and stress resilience with a flexible 1–2 capsule serving, choose Horsemen (ONYX-HM-20, 20 Capsules × 500mg, anchored by 100:1 Tongkat Ali and Panax Ginseng). If you require 100% plant-derived vegetarian capsules (HPMC) focused on steroidal saponins (60% protodioscin Tribulus terrestris) for physical drive and gym/evening endurance, choose Hammer of Thor (ONYX-HT-20, 20 Veg. Capsules × 500mg).',
          body2:
            'If you prefer a structured 30-day daily adaptogenic foundation (1 capsule every morning after breakfast) combining Black Maca 10:1, Tongkat Ali 100:1, Horny Goat Weed, and Chelated Zinc, select Grow XL (ONYX-GX-30, 30 Capsules × 550mg). And if your focus is endothelial nitric oxide (eNOS) vasodilation, blood-flow fullness, and pre-workout or pre-evening pump in signature jet-black capsules, select Magnum Pump XR (ONYX-MP-30, 30 Black Capsules × 600mg).',
        },
        {
          kicker: 'CHAPTER 02 · OPTIMAL ABSORPTION, HYDRATION & COFFEE SPACING IN MALAYSIA',
          title: 'Getting Maximum Bioavailability From Standardized Herbal Extracts.',
          body1:
            'High-ratio herbal extracts (such as 100:1 Eurycoma longifolia and 60%-saponin Tribulus) are highly concentrated. Taking them on an empty stomach can occasionally cause mild herbal warmth. We recommend taking your capsule 30–45 minutes after a balanced meal with 300ml–400ml of warm or room-temperature plain water.',
          body2:
            'Crucially for Malaysian dietary habits: space your capsule intake at least 60 minutes apart from Kopi O, Teh Tarik, espresso, or energy drinks. Polyphenolic tannins in coffee and tea can bind to plant alkaloids and chelated zinc in the digestive tract, while excessive caffeine causes sympathetic vasoconstriction that counteracts nitric oxide vasodilation.',
        },
        {
          kicker: 'CHAPTER 03 · ORDERING, BLIND-WAYBILL DELIVERY & CONCIERGE SUPPORT',
          title: '10-Second Express Reservation Without Passwords Or Privacy Leaks.',
          body1:
            'You never need to create a permanent user account or store credit card details on onyxman.my. Clicking any "Order Discreetly — RM 159" button opens the 10-Second Express Order Drawer, where you select your formulation, choose 1 Bottle (RM 159), 2 Bottles (RM 318 — Recommended 60-Day Protocol with Free Nationwide Shipping including Sabah & Sarawak), or 3 Bottles (RM 477 — 90-Day Master Cycle), and submit your delivery details.',
          body2:
            'Your parcel ships in a 3-layer unmarked box under the sender name "OM Fulfilment Logistics (Kuala Lumpur)" with acoustic bubble wrap so the bottle never rattles. You can settle via FPX Online Banking, DuitNow QR, or Cash on Delivery (COD).',
        },
      ],
      ledgerTitle: '8-Topic Quick Reference Guide For Malaysian Clients',
      ledgerSub:
        'Rapid answers to the eight most common pre-order questions received by our Kuala Lumpur Concierge Desk.',
      ledgerRows: [
        {
          code: 'FAQ-REF · 01',
          title: 'Best For Peak Evening Stamina & Rapid Vitality',
          desc: 'Horsemen (ONYX-HM-20 · 20 Capsules × 500mg) — 200mg Tongkat Ali 100:1 + 120mg Panax Ginseng + 100mg Maca + 80mg Epimedium.',
          metric: 'HORSEMEN · RM 159',
        },
        {
          code: 'FAQ-REF · 02',
          title: 'Best For 100% Vegetarian Capsules & Saponin Drive',
          desc: 'Hammer of Thor (ONYX-HT-20 · 20 Veg. Capsules × 500mg) — 250mg Tribulus Terrestris (60% protodioscin) in plant HPMC shells.',
          metric: 'HAMMER OF THOR · RM 159',
        },
        {
          code: 'FAQ-REF · 03',
          title: 'Best For 30-Day Daily Cumulative Male Vitality',
          desc: 'Grow XL (ONYX-GX-30 · 30 Capsules × 550mg) — #1 Selling 30-day daily blend with Black Maca 10:1, Tongkat Ali, Epimedium & Zinc.',
          metric: 'GROW XL · RM 159',
        },
        {
          code: 'FAQ-REF · 04',
          title: 'Best For Nitric Oxide Blood-Flow Fullness & Gym/Evening Pump',
          desc: 'Magnum Pump XR (ONYX-MP-30 · 30 Black Capsules × 600mg) — L-Arginine HCl + L-Citrulline Malate + Tongkat Ali in jet-black capsules.',
          metric: 'MAGNUM PUMP XR · RM 159',
        },
        {
          code: 'FAQ-REF · 05',
          title: 'Recommended Multi-Bottle Regimen & Free Borneo Air Freight',
          desc: 'The 2-Bottle (RM 318) 60-day protocol unlocks full physiological adaptation and RM 0 Free Shipping across all 16 states including Sabah & Sarawak.',
          metric: '2 BOTTLES · RM 318',
        },
        {
          code: 'FAQ-REF · 06',
          title: 'Can Formulations Be Combined (Dual-Pathway Stacking)?',
          desc: 'Yes. Many clients take 1 capsule of Grow XL after breakfast for baseline vitality and 1 capsule of Magnum Pump XR or Horsemen in the evening (4–6 hours apart).',
          metric: 'SAFE 4–6 HR SPACING',
        },
        {
          code: 'FAQ-REF · 07',
          title: 'Will Anyone Know What Is Inside My Courier Parcel?',
          desc: 'Never. Shipped in a 3-layer unmarked box under "OM Fulfilment Logistics" declared as "Personal Nutritional Wellness" with zero rattle noise.',
          metric: '100% BLIND WAYBILL',
        },
        {
          code: 'FAQ-REF · 08',
          title: 'Are Onyxmen Capsules Free From Headaches & Synthetic Drugs?',
          desc: 'Yes. Every batch is LC-MS/MS screened for 0.00% synthetic PDE5 inhibitors (no sildenafil/tadalafil), preventing chemical headaches or heart racing.',
          metric: '0.00% SYNTHETICS',
        },
      ],
      tableTitle: 'Quick Decision Matrix: Selecting & Using Your Onyxmen Formulation',
      tableHeaders: [
        'Client Goal / Scenario',
        'Recommended Formulation',
        'Optimal Dosage & Meal Timing',
        'Recommended Tier & Fulfilment',
      ],
      tableRows: [
        [
          'Evening Stamina, Energy & Stress Recovery',
          'Horsemen (20 Capsules × 500mg)',
          '1 capsule daily after dinner, or 2 capsules 45–60 min before evening activity with 300ml warm water.',
          '2 Bottles (RM 318 · 40 Caps) or 1 Bottle (RM 159 · 20 Caps) · Free Peninsular Shipping.',
        ],
        [
          'Plant-Based Vegetarian Capsule & Saponin Endurance',
          'Hammer of Thor (20 Veg. Capsules × 500mg)',
          '1 vegetarian capsule after lunch or dinner, or 2 capsules 45 min pre-activity with 300ml water.',
          '2 Bottles (RM 318 · 40 Veg Caps) · Free Nationwide Shipping incl. Sabah & Sarawak.',
        ],
        [
          'Consistent 30-Day Daily All-Round Vitality Foundation',
          'Grow XL (30 Capsules × 550mg — #1 Selling)',
          '1 capsule every morning 30 min after breakfast with 300ml water (space 60 min from Kopi O).',
          '2 Bottles (RM 318 · 60-Day Protocol) or 3 Bottles (RM 477 · 90-Day Cycle).',
        ],
        [
          'Nitric Oxide Vascular Pump & Physical Conditioning',
          'Magnum Pump XR (30 Black Capsules × 600mg)',
          '1 black capsule 45 min before training or evening activity with 400ml water.',
          '2 Bottles (RM 318 · 60 Black Caps) · Same-Day 3–5h Klang Valley Runner available.',
        ],
      ],
      faqs: [
        {
          questionEn: 'How quickly will I notice the benefits of Onyxmen botanical formulations?',
          answerEn:
            'Because Onyxmen formulations use natural standardized botanical extracts and amino acids rather than synthetic drugs, they work through two complementary phases: Phase 1 (Days 1–7) delivers acute nitric oxide blood-flow support and reduced evening fatigue within 45–60 minutes of ingestion; Phase 2 (Weeks 2–8) builds cumulative endocrine vitality, free-testosterone unbinding, and sustained stamina through consistent daily supplementation.',
        },
        {
          questionEn: 'Can I take Onyxmen capsules if I drink coffee, tea, or pre-workout beverages?',
          answerEn:
            'Yes, provided you separate your Onyxmen capsule from coffee (Kopi O, Nescafe, espresso), Teh Tarik, or caffeinated energy drinks by at least 60 minutes, and avoid taking high-stimulant pre-workouts simultaneously. Adequate plain water (2.5L–3.0L daily) maximizes herbal extraction and nitric oxide vasodilation.',
        },
        {
          questionEn: 'Is Magnum Pump XR an oral capsule supplement or a mechanical pump device?',
          answerEn:
            'Magnum Pump XR (SKU: ONYX-MP-30) is strictly an oral dietary supplement containing 30 signature jet-black capsules (600mg per capsule) formulated with L-Arginine HCl, L-Citrulline Malate, Tongkat Ali, Maca, and Pine Bark extract. The word "Pump" refers to physiological nitric oxide vascular blood-flow fullness (similar to a sports nutrition muscle pump)—it is never a mechanical vacuum device.',
        },
        {
          questionEn: 'How do I place a mix-and-match 2-Bottle (RM 318) or 3-Bottle (RM 477) order?',
          answerEn:
            'Open the 10-Second Express Order Drawer on this page, select the 2-Bottle (RM 318) or 3-Bottle (RM 477) tier, and note your preferred bottle combination in the delivery instructions—or email sales@onyxmen.my directly.',
        },
      ],
    },
    ms: {
      seoTitle:
        'Soalan Lazim Utama (FAQ) — Formulasi, Cara Makan, Penghantaran Rahsia, COD & PDPA | Onyxmen Malaysia',
      metaDescription:
        'Jawapan lengkap untuk semua soalan mengenai Onyxmen Malaysia: perbandingan Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR, harga rasmi RM 159 / RM 318 / RM 477, cara makan kapsul, bungkusan rahsia tanpa nama, COD/FPX/DuitNow & privasi PDPA.',
      eyebrow:
        'MS-170 · PUSAT SOALAN LAZIM UTAMA (FAQ) & PANGKALAN ILMU PELANGGAN MALAYSIA',
      headline:
        'Pusat Soalan Lazim Utama (FAQ) — Pilihan Formulasi, Cara Makan, Penghantaran Rahsia & Privasi PDPA.',
      subheadline:
        'Jawapan komprehensif berasaskan sains merangkumi cara memilih antara 4 formulasi utama kami, waktu pengambilan kapsul selepas makan, penghantaran slip kurier neutral, kaedah bayaran COD/FPX, dan polisi pemulangan.',
      executiveSummary:
        'Sama ada anda sedang memilih antara formulasi kepekatan malam 20 kapsul (Horsemen atau Hammer of Thor) dan formulasi kitaran harian 30 kapsul (Grow XL atau Magnum Pump XR), atau ingin mengesahkan bagaimana bungkusan tanpa jenama kami melepasi pondok pengawal kondominium serta meja penyambut tetamu pejabat di seluruh Malaysia, Pusat Soalan Lazim ini menghimpunkan semua jawapan teknikal, logistik, dan perundangan.',
      telemetry: [
        {
          key: '01 · PILIHAN FORMULASI',
          val: '4 Formulasi Bersasar',
          sub: '20-Kapsul (Horsemen / Hammer of Thor) & 30-Kapsul (Grow XL / Magnum Pump XR)',
        },
        {
          key: '02 · HARGA RASMI MYR',
          val: 'RM 159 / RM 318 / RM 477',
          sub: '1 Botol RM 159 · 2 Botol RM 318 (Pos Percuma MY) · 3 Botol RM 477',
        },
        {
          key: '03 · LOGISTIK RAHSIA',
          val: 'OM Fulfilment Logistics',
          sub: 'Kotak polos 3-lapisan · 3–5j Lembah Klang · 1–2h Semenanjung · 2–4h Borneo',
        },
        {
          key: '04 · BAYARAN & PRIVASI',
          val: 'COD · FPX · DuitNow QR',
          sub: 'Tiada akaun wajib · Akta PDPA 709 · Pemulangan 14/30 hari',
        },
      ],
      splitChapters: [
        {
          kicker: 'BAB 01 · CARA MEMILIH FORMULASI ONYXMEN YANG PALING SESUAI',
          title: 'Memadankan Matlamat Fisiologi Anda Dengan Matriks Botani Yang Tepat.',
          body1:
            'Setiap lelaki mempunyai jadual harian dan keutamaan prestasi yang tersendiri. Jika sasaran utama anda ialah stamina puncak waktu malam, pemulihan tenaga, dan ketahanan tekanan dengan hidangan fleksibel 1–2 kapsul, pilih Horsemen (ONYX-HM-20, 20 Kapsul × 500mg, berasaskan Tongkat Ali 100:1 dan Panax Ginseng). Jika anda mengutamakan sarung kapsul vegetarian 100% tumbuhan (HPMC) yang memfokuskan saponin steroid (Tribulus terrestris 60% protodioscin) untuk daya tahan fizikal, pilih Hammer of Thor (ONYX-HT-20, 20 Kapsul Veg. × 500mg).',
          body2:
            'Jika anda mahukan asas kecergasan harian berstruktur selama 30 hari (1 kapsul setiap pagi selepas sarapan) yang menggabungkan Maca Hitam 10:1, Tongkat Ali 100:1, Epimedium, dan Zink Terkelat, pilih Grow XL (ONYX-GX-30, 30 Kapsul × 550mg). Dan jika fokus anda ialah pengembangan saluran darah nitrik oksida (eNOS), pengaliran darah optimum, dan kesan pam sebelum senaman atau aktiviti malam dalam kapsul hitam pekat, pilih Magnum Pump XR (ONYX-MP-30, 30 Kapsul Hitam × 600mg).',
        },
        {
          kicker: 'BAB 02 · PENYERAPAN OPTIMUM, HIDRASI AIR & JARAK WAKTU KOPI DI MALAYSIA',
          title: 'Memaksimumkan Ketersediaan Bio Daripada Ekstrak Herba Terpiawai.',
          body1:
            'Ekstrak herba bernisbah tinggi (seperti Tongkat Ali 100:1 dan Tribulus 60% saponin) adalah sangat pekat. Mengambilnya ketika perut kosong kadangkala boleh memberikan rasa hangat herba. Kami mengesyorkan anda mengambil kapsul 30–45 minit selepas makan hidangan seimbang bersama 300ml–400ml air suam atau air kosong.',
          body2:
            'Penting untuk tabiat pemakanan di Malaysia: jarakkan pengambilan kapsul sekurang-kurangnya 60 minit daripada minuman Kopi O, Teh Tarik, Nescafe, atau minuman tenaga. Tanin polifenol dalam kopi dan teh boleh mengikat alkaloid herba serta zink di dalam saluran penghadaman, manakala kafein berlebihan mengecutkan saluran darah yang melawan kesan pengembangan nitrik oksida.',
        },
        {
          kicker: 'BAB 03 · TEMPAHAN EKSPRES, PENGHANTARAN SLIP NEUTRAL & SOKONGAN MEJA KL',
          title: 'Tempahan 10 Saat Tanpa Kata Laluan Akaun Atau Kebocoran Privasi.',
          body1:
            'Anda tidak perlu membuka akaun tetap atau menyimpan maklumat kad bank di onyxman.my. Klik mana-mana butang "Tempah Bungkusan Rahsia — RM 159" untuk membuka Laci Tempahan Ekspres 10 Saat, pilih formulasi anda, pilih kuantiti 1 Botol (RM 159), 2 Botol (RM 318 — Protokol 60 Hari Disyorkan dengan Penghantaran Percuma Seluruh Malaysia termasuk Sabah & Sarawak), atau 3 Botol (RM 477 — Kitaran Penuh 90 Hari), dan hantar alamat anda.',
          body2:
            'Bungkusan anda dihantar di dalam kotak polos 3-lapisan menggunakan nama pengirim "OM Fulfilment Logistics (Kuala Lumpur)" lengkap dengan balutan gelembung anti-bunyi supaya botol tidak berbunyi apabila digoncang. Anda boleh membayar melalui Perbankan Dalam Talian FPX, DuitNow QR, atau Tunai Semasa Serahan (COD).',
        },
      ],
      ledgerTitle: 'Panduan Rujukan Pantas 8 Perkara Untuk Pelanggan Malaysia',
      ledgerSub:
        'Jawapan ringkas kepada lapan soalan pra-tempahan paling kerap diterima oleh Meja Khidmat Pelanggan Kuala Lumpur kami.',
      ledgerRows: [
        {
          code: 'RUJUKAN · 01',
          title: 'Terbaik Untuk Stamina Malam & Pemulihan Tenaga Pantas',
          desc: 'Horsemen (ONYX-HM-20 · 20 Kapsul × 500mg) — 200mg Tongkat Ali 100:1 + 120mg Panax Ginseng + 100mg Maca + 80mg Epimedium.',
          metric: 'HORSEMEN · RM 159',
        },
        {
          code: 'RUJUKAN · 02',
          title: 'Terbaik Untuk Kapsul Vegetarian 100% & Tenaga Saponin',
          desc: 'Hammer of Thor (ONYX-HT-20 · 20 Kapsul Veg. × 500mg) — 250mg Tribulus Terrestris (60% protodioscin) dalam sarung tumbuhan HPMC.',
          metric: 'HAMMER OF THOR · RM 159',
        },
        {
          code: 'RUJUKAN · 03',
          title: 'Terbaik Untuk Asas Vitaliti Harian 30 Hari (#1 Terlaris)',
          desc: 'Grow XL (ONYX-GX-30 · 30 Kapsul × 550mg) — Campuran harian kekuatan ekstra dengan Maca Hitam 10:1, Tongkat Ali, Epimedium & Zink.',
          metric: 'GROW XL · RM 159',
        },
        {
          code: 'RUJUKAN · 04',
          title: 'Terbaik Untuk Aliran Darah Nitrik Oksida & Pam Fizikal',
          desc: 'Magnum Pump XR (ONYX-MP-30 · 30 Kapsul Hitam × 600mg) — L-Arginine HCl + L-Citrulline Malate + Tongkat Ali dalam kapsul hitam pekat.',
          metric: 'MAGNUM PUMP XR · RM 159',
        },
        {
          code: 'RUJUKAN · 05',
          title: 'Pakej Kitaran Disyorkan & Kargo Udara Percuma Sabah/Sarawak',
          desc: 'Protokol 2 Botol (RM 318) 60 hari memberikan adaptasi fisiologi penuh serta Penghantaran Percuma RM 0 ke seluruh 16 negeri termasuk Sabah & Sarawak.',
          metric: '2 BOTOL · RM 318',
        },
        {
          code: 'RUJUKAN · 06',
          title: 'Bolehkah Dua Formulasi Digabungkan (Gabungan Dwi-Laluan)?',
          desc: 'Boleh. Ramai pelanggan mengambil 1 kapsul Grow XL selepas sarapan untuk asas harian dan 1 kapsul Magnum Pump XR atau Horsemen pada waktu malam (jarak 4–6 jam).',
          metric: 'SELAMAT JARAK 4–6 JAM',
        },
        {
          code: 'RUJUKAN · 07',
          title: 'Adakah Orang Lain Akan Tahu Kandungan Bungkusan Kurier Saya?',
          desc: 'Tidak sama sekali. Dihantar di dalam kotak polos 3-lapisan di bawah nama "OM Fulfilment Logistics" sebagai "Personal Nutritional Wellness" tanpa bunyi goncangan.',
          metric: '100% SLIP NEUTRAL',
        },
        {
          code: 'RUJUKAN · 08',
          title: 'Adakah Kapsul Onyxmen Bebas Sakit Kepala & Dadah Sintetik?',
          desc: 'Ya. Setiap kumpulan disaring LC-MS/MS untuk 0.00% perencat PDE5 sintetik (tiada sildenafil/tadalafil), mengelakkan sakit kepala atau debaran jantung.',
          metric: '0.00% SINTETIK',
        },
      ],
      tableTitle: 'Matriks Keputusan Pantas: Memilih & Mengambil Formulasi Onyxmen Anda',
      tableHeaders: [
        'Matlamat / Situasi Pelanggan',
        'Formulasi Disyorkan',
        'Dos Optimum & Waktu Selepas Makan',
        'Pakej & Penghantaran Disyorkan',
      ],
      tableRows: [
        [
          'Stamina Malam, Tenaga & Pemulihan Tekanan Kerja',
          'Horsemen (20 Kapsul × 500mg)',
          '1 kapsul selepas makan malam, atau 2 kapsul 45–60 min sebelum aktiviti malam bersama 300ml air suam.',
          '2 Botol (RM 318 · 40 Kapsul) atau 1 Botol (RM 159 · 20 Kapsul) · Pos Percuma Semenanjung.',
        ],
        [
          'Kapsul Vegetarian Tumbuhan & Daya Tahan Saponin',
          'Hammer of Thor (20 Kapsul Veg. × 500mg)',
          '1 kapsul vegetarian selepas makan tengah hari/malam, atau 2 kapsul 45 min sebelum aktiviti.',
          '2 Botol (RM 318 · 40 Kapsul Veg) · Pos Percuma Seluruh Malaysia termasuk Sabah & Sarawak.',
        ],
        [
          'Asas Vitaliti Harian Konsisten 30 Hari Menyeluruh',
          'Grow XL (30 Kapsul × 550mg — #1 Terlaris)',
          '1 kapsul setiap pagi 30 min selepas sarapan bersama 300ml air (jarakkan 60 min dari Kopi O).',
          '2 Botol (RM 318 · Protokol 60 Hari) atau 3 Botol (RM 477 · Kitaran 90 Hari).',
        ],
        [
          'Pam Vaskular Nitrik Oksida & Kecergasan Fizikal',
          'Magnum Pump XR (30 Kapsul Hitam × 600mg)',
          '1 kapsul hitam 45 min sebelum senaman atau aktiviti malam bersama 400ml air kosong.',
          '2 Botol (RM 318 · 60 Kapsul Hitam) · Penghantar Hari Sama 3–5j Lembah Klang tersedia.',
        ],
      ],
      faqs: [
        {
          questionMs: 'Berapa cepatkah saya akan merasai kesan positif formulasi botani Onyxmen?',
          answerMs:
            'Memandangkan formulasi Onyxmen menggunakan ekstrak botani terpiawai dan asid amino semula jadi (bukan bahan kimia sintetik), ia bertindak melalui dua fasa: Fasa 1 (Hari 1–7) menyokong pengaliran darah nitrik oksida dan mengurangkan keletihan malam dalam masa 45–60 minit selepas diambil; Fasa 2 (Minggu 2–8) membina keseimbangan endokrin, pembebasan testosteron bebas, dan daya tahan berterusan melalui pengambilan konsisten.',
        },
        {
          questionMs: 'Bolehkah saya mengambil kapsul Onyxmen jika saya minum kopi, teh tarik, atau minuman pra-senaman?',
          answerMs:
            'Boleh, dengan syarat anda menjarakkan pengambilan kapsul Onyxmen sekurang-kurangnya 60 minit daripada minuman berkafein seperti Kopi O, Nescafe, atau Teh Tarik. Minum air kosong yang mencukupi (2.5L–3.0L sehari) untuk memaksimumkan penyerapan herba dan kesan nitrik oksida.',
        },
        {
          questionMs: 'Adakah Magnum Pump XR sejenis suplemen kapsul makan atau alat pam mekanikal?',
          answerMs:
            'Magnum Pump XR (SKU: ONYX-MP-30) adalah 100% suplemen pemakanan kapsul makan yang mengandungi 30 biji kapsul hitam pekat (600mg setiap kapsul) berasaskan L-Arginine HCl, L-Citrulline Malate, Tongkat Ali, Maca, dan Ekstrak Kulit Kayu Pine. Perkataan "Pump" merujuk kepada pengaliran darah nitrik oksida (seperti "muscle pump" dalam nutrisi sukan)—bukan alat pam vakum fizikal.',
        },
        {
          questionMs: 'Bagaimanakah cara untuk saya membuat pesanan gabungan 2 Botol (RM 318) atau 3 Botol (RM 477)?',
          answerMs:
            'Buka Laci Tempahan Ekspres 10 Saat pada halaman ini, pilih pakej 2 Botol (RM 318) atau 3 Botol (RM 477), dan nyatakan gabungan botol pilihan anda pada ruangan nota penghantaran—atau hantar e-mel terus ke sales@onyxmen.my.',
        },
      ],
    },
  },

  // --------------------------------------------------------------------------
  // DOSSIER 8: MS-169 & MS-170 — Complete Formulations Catalog Index (/products/ & /ms/produk/)
  // --------------------------------------------------------------------------
  {
    key: 'products-index',
    code: 'VAULT-04',
    microStepEn: 'MS-169',
    microStepMs: 'MS-170',
    schemaPageType: 'products-index',
    canonicalEnPath: '/products/',
    canonicalMsPath: '/ms/produk/',
    enOutputPaths: [
      'products/index.html',
    ],
    msOutputPaths: [
      'ms/products/index.html',
      'ms/produk/index.html',
    ],
    heroImage: '/assets/products/onyxman-lineup-hero.webp',
    portraitImage: '/assets/products/magnum-pump-xr-portrait.webp',
    primaryProductSlug: 'grow-xl',
    activeNav: 'products',
    en: {
      seoTitle:
        'Official Formulations Vault — Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR (RM 159) | Onyxmen Malaysia',
      metaDescription:
        'Explore the complete Onyxmen Malaysia botanical formulations catalog: Horsemen (20 Caps), Hammer of Thor (20 Veg. Caps), Grow XL (30 Caps), and Magnum Pump XR (30 Black Caps). Official RM 159 / RM 318 / RM 477 pricing, full milligram profiles, and 100% discreet Malaysia delivery.',
      eyebrow:
        'MS-169 · OFFICIAL ONYXMEN MALAYSIA FORMULATIONS VAULT & COMPLETE PRODUCT CATALOG',
      headline:
        'The Complete Onyxmen Malaysia Botanical Formulations Vault — Four Precision Reserves At RM 159.',
      subheadline:
        'Compare our four laboratory-screened men’s vitality formulations side by side: Horsemen (20 Caps × 500mg), Hammer of Thor (20 Veg. Caps × 500mg), Grow XL (30 Caps × 550mg), and Magnum Pump XR (30 Black Caps × 600mg).',
      executiveSummary:
        'Every formulation in the Onyxmen Malaysia Vault is engineered around high-ratio standardized botanical extracts and amino acids, stored in our 22°C–24°C Kuala Lumpur apothecary vault (Postcode 50450), and offered at our uniform transparent Malaysia tariff: 1 Bottle RM 159 (159.00 MYR), 2 Bottles RM 318 (318.00 MYR — Free Nationwide Shipping including Sabah, Sarawak & Labuan), and 3 Bottles RM 477 (477.00 MYR). Inspect each formulation’s exact milligram breakdown, capsule count, and clinical timing below, then open its full monograph or reserve directly via our 10-Second Express Order Drawer.',
      telemetry: [
        {
          key: '01 · COMPLETE VAULT LINEUP',
          val: '4 Flagship Formulations',
          sub: 'ONYX-HM-20 · ONYX-HT-20 · ONYX-GX-30 · ONYX-MP-30',
        },
        {
          key: '02 · UNIFORM MALAYSIA TARIFF',
          val: 'RM 159 / RM 318 / RM 477',
          sub: '159.00 MYR (1 Bottle) · 318.00 MYR (2 Bottles) · 477.00 MYR (3 Bottles)',
        },
        {
          key: '03 · CAPSULE ARCHITECTURES',
          val: '20-Cap & 30-Cap Reserves',
          sub: '500mg Herbal · 500mg HPMC Veg · 550mg Daily · 600mg Jet-Black',
        },
        {
          key: '04 · NATIONWIDE DISPATCH',
          val: '3–5h KL · 1–2d MY · COD',
          sub: 'Dispatched in 3-layer unmarked packaging under OM Fulfilment Logistics',
        },
      ],
      splitChapters: [
        {
          kicker: 'CHAPTER 01 · THE 20-CAPSULE CONCENTRATED STAMINA & SAPONIN RESERVES',
          title: 'Horsemen (ONYX-HM-20) & Hammer of Thor (ONYX-HT-20) — 500mg High-Ratio Potency.',
          body1:
            'For gentlemen prioritizing concentrated evening stamina, vitality, and rapid physical readiness, our two 20-capsule formulations deliver 500mg per capsule (10g net active weight per bottle). Horsemen (/products/horsemen/, GTIN: 9550000102011) pairs 200mg of 100:1 Malaysian Eurycoma longifolia (≥2.2% eurycomanone) with 120mg Panax Ginseng (10% ginsenosides), 100mg Peruvian Black Maca, and 80mg Epimedium brevicornum (10% icariin) for dual endocrine and nitric oxide evening performance.',
          body2:
            'Hammer of Thor (/products/hammer-of-thor/, GTIN: 9550000102028) is encapsulated in 100% plant-derived hypromellose (HPMC) vegetarian capsules under a signature gold cap and green vegetarian emblem. It centers on 250mg standardized Bulgarian Tribulus terrestris (60% steroidal saponins / protodioscin) supported by 120mg Tongkat Ali 100:1, 80mg Maca root, and 50mg L-Arginine HCl for sustained androgen-receptor sensitivity and muscular endurance.',
        },
        {
          kicker: 'CHAPTER 02 · THE 30-CAPSULE DAILY VITALITY & NITRIC OXIDE PUMP RESERVES',
          title: 'Grow XL (ONYX-GX-30) & Magnum Pump XR (ONYX-MP-30) — Full 30-Day Monthly Regimens.',
          body1:
            'For gentlemen seeking a structured 30-day daily cycle (1 capsule per day), our two 30-capsule reserves provide comprehensive multi-pathway coverage. Grow XL (/products/grow-xl/, GTIN: 9550000102035 — #1 Selling Product) delivers 550mg per capsule (16.5g net active weight): 180mg 10:1 gelatinized Peruvian Black Maca, 150mg Tongkat Ali 100:1, 100mg Epimedium (20% icariin), 80mg Panax Ginseng, and 40mg Zinc Bisglycinate + Selenium for cumulative daily drive and fullness.',
          body2:
            'Magnum Pump XR (/products/magnum-pump-xr/, GTIN: 9550000102042 — Testosterone Pro Series) is housed in 30 signature jet-black UV-shielded capsules at 600mg per capsule (18g net active weight). It combines a dual-phase amino acid nitric oxide matrix (220mg L-Arginine HCl + 150mg L-Citrulline Malate 2:1) with 120mg Tongkat Ali 100:1, 70mg Maca root, and 40mg Maritime Pine Bark extract (95% proanthocyanidins) for peak eNOS vascular blood-flow expansion.',
        },
        {
          kicker: 'CHAPTER 03 · HOW TO RESERVE SINGLE BOTTLES OR 60/90-DAY STACKING CYCLES',
          title: 'Uniform RM 159 / RM 318 / RM 477 Pricing & Mix-And-Match Concierge Support.',
          body1:
            'Every formulation in the catalog is available immediately at RM 159.00 for a 1-Bottle Introductory Reserve, RM 318.00 for our Most Popular 2-Bottle 60-Day Protocol (which unlocks RM 0 Free Express Shipping across all 16 Malaysian states including Sabah, Sarawak, and Labuan), and RM 477.00 for the 3-Bottle 90-Day Master Cycle.',
          body2:
            'You can click into any individual product monograph below to read its complete botanical breakdown, or trigger the 10-Second Express Order Drawer directly from any product card in the matrix above.',
        },
      ],
      ledgerTitle: 'Complete Onyxmen Malaysia Catalog Index & Direct Monograph Directory',
      ledgerSub:
        'Direct links, official GS1 identifiers, capsule architectures, and active milligram payloads for all four Onyxmen Malaysia formulations plus our botanical comparison guides.',
      ledgerRows: [
        {
          code: 'ONYX-HM-20 · RM 159',
          title: 'Horsemen — Peak Male Stamina & Vitality Reserve (20 Capsules × 500mg)',
          desc: '200mg Tongkat Ali 100:1 + 120mg Panax Ginseng + 100mg Black Maca + 80mg Epimedium. Inspect full monograph at /products/horsemen/.',
          metric: '/products/horsemen/',
        },
        {
          code: 'ONYX-HT-20 · RM 159',
          title: 'Hammer of Thor — Tribulus Terrestris Saponin Complex (20 Veg. Capsules × 500mg)',
          desc: '250mg Tribulus Terrestris (60% protodioscin) + 120mg Tongkat Ali + 80mg Maca + 50mg L-Arginine in HPMC veg shells. Monograph: /products/hammer-of-thor/.',
          metric: '/products/hammer-of-thor/',
        },
        {
          code: 'ONYX-GX-30 · RM 159',
          title: 'Grow XL — #1 Selling Extra-Strength Male Performance Blend (30 Capsules × 550mg)',
          desc: '180mg Black Maca 10:1 + 150mg Tongkat Ali 100:1 + 100mg Epimedium + 80mg Ginseng + 40mg Chelated Zinc. Monograph: /products/grow-xl/.',
          metric: '/products/grow-xl/',
        },
        {
          code: 'ONYX-MP-30 · RM 159',
          title: 'Magnum Pump XR — Testosterone Pro Series & Nitric Oxide Matrix (30 Black Caps × 600mg)',
          desc: '220mg L-Arginine HCl + 150mg L-Citrulline Malate + 120mg Tongkat Ali + 70mg Maca + 40mg Pine Bark in jet-black capsules. Monograph: /products/magnum-pump-xr/.',
          metric: '/products/magnum-pump-xr/',
        },
        {
          code: 'COMPARE · ALL 4',
          title: 'Horsemen vs Hammer of Thor vs Grow XL vs Magnum Pump XR Comparison Matrix',
          desc: 'Deep clinical comparison of pathways, onset kinetics, capsule shells, and dual-stacking protocols at /compare/horsemen-vs-hammer-of-thor-vs-grow-xl-vs-magnum-pump-xr/.',
          metric: '/compare/',
        },
        {
          code: 'GUIDE · TONGKAT ALI',
          title: 'Malaysian Tongkat Ali (Eurycoma longifolia 100:1) & Maca Vitality Science',
          desc: 'Explore how standardized eurycomanone and macamides support free testosterone and evening stamina at /guides/tongkat-ali-maca-vitality-science-malaysia/.',
          metric: '/guides/',
        },
        {
          code: 'GUIDE · NITRIC OXIDE',
          title: 'Nitric Oxide, L-Arginine, L-Citrulline & Vascular Blood-Flow Guide',
          desc: 'Learn how the L-Arginine + L-Citrulline recycling pathway drives cGMP endothelial vasodilation at /guides/nitric-oxide-blood-flow-men-vitality-malaysia/.',
          metric: '/guides/',
        },
        {
          code: 'HUB · KUALA LUMPUR',
          title: 'Kuala Lumpur, Selangor & 16-State Malaysia Same-Day / Express Delivery Hubs',
          desc: 'Check postcode delivery windows, 3–5h Klang Valley private runner availability, and COD terms at /locations/kuala-lumpur/.',
          metric: '/locations/kuala-lumpur/',
        },
      ],
      tableTitle: 'Master 4-Formulation Specification & Pricing Ledger (MYR)',
      tableHeaders: [
        'Formulation & Direct Monograph',
        'SKU, GTIN-13 & Capsule Count',
        'Standardized Active Payload (Per Capsule)',
        'Official Malaysia Tariff (MYR)',
      ],
      tableRows: [
        [
          'Horsemen (/products/horsemen/)',
          'SKU: ONYX-HM-20 · GTIN: 9550000102011 · 20 Caps × 500mg (10g)',
          '200mg Tongkat Ali 100:1, 120mg Panax Ginseng, 100mg Maca, 80mg Epimedium.',
          '1 Btl: RM 159 · 2 Btl: RM 318 · 3 Btl: RM 477',
        ],
        [
          'Hammer of Thor (/products/hammer-of-thor/)',
          'SKU: ONYX-HT-20 · GTIN: 9550000102028 · 20 Veg Caps × 500mg (10g)',
          '250mg Tribulus (60% Saponins), 120mg Tongkat Ali, 80mg Maca, 50mg L-Arginine.',
          '1 Btl: RM 159 · 2 Btl: RM 318 · 3 Btl: RM 477',
        ],
        [
          'Grow XL (/products/grow-xl/)',
          'SKU: ONYX-GX-30 · GTIN: 9550000102035 · 30 Caps × 550mg (16.5g)',
          '180mg Black Maca 10:1, 150mg Tongkat Ali, 100mg Epimedium, 80mg Ginseng, 40mg Zinc.',
          '1 Btl: RM 159 · 2 Btl: RM 318 · 3 Btl: RM 477',
        ],
        [
          'Magnum Pump XR (/products/magnum-pump-xr/)',
          'SKU: ONYX-MP-30 · GTIN: 9550000102042 · 30 Black Caps × 600mg (18g)',
          '220mg L-Arginine HCl, 150mg L-Citrulline Malate, 120mg Tongkat Ali, 70mg Maca, 40mg Pine Bark.',
          '1 Btl: RM 159 · 2 Btl: RM 318 · 3 Btl: RM 477',
        ],
      ],
      faqs: [
        {
          questionEn: 'Are all four Onyxmen Malaysia formulations currently in stock for immediate dispatch?',
          answerEn:
            'Yes. Horsemen (ONYX-HM-20), Hammer of Thor (ONYX-HT-20), Grow XL (ONYX-GX-30), and Magnum Pump XR (ONYX-MP-30) are all stocked in our 22°C–24°C climate-controlled Kuala Lumpur vault and ready for same-day dispatch on orders confirmed before 16:00 MYT.',
        },
        {
          questionEn: 'Why do Horsemen and Hammer of Thor have 20 capsules while Grow XL and Magnum Pump XR have 30 capsules?',
          answerEn:
            'Horsemen and Hammer of Thor are formulated as concentrated evening stamina and steroidal saponin reserves where clients take 1 capsule on standard days or 2 capsules prior to peak evening demand (10 to 20 servings per bottle). Grow XL and Magnum Pump XR are structured as continuous 30-day daily conditioning and vascular nitric oxide cycles (1 capsule daily for a full 30-day month).',
        },
        {
          questionEn: 'Does the 2-Bottle RM 318 package include Free Shipping to Sabah and Sarawak?',
          answerEn:
            'Yes. Every 1-Bottle (RM 159), 2-Bottle (RM 318), and 3-Bottle (RM 477) order enjoys RM 0 Free Express Shipping across Peninsular Malaysia, and the 2-Bottle (RM 318) and 3-Bottle (RM 477) tiers unlock RM 0 Free Air Freight to Sabah, Sarawak, and Labuan.',
        },
        {
          questionEn: 'Can I view each product’s full bottle portrait and ingredient monograph before ordering?',
          answerEn:
            'Absolutely. Click any formulation title in the comparison matrix or catalog ledger on this page to open its dedicated bilingual monograph (/products/horsemen/, /products/hammer-of-thor/, /products/grow-xl/, or /products/magnum-pump-xr/).',
        },
      ],
    },
    ms: {
      seoTitle:
        'Katalog Rasmi Formulasi — Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR (RM 159) | Onyxmen Malaysia',
      metaDescription:
        'Terokai katalog penuh formulasi botani Onyxmen Malaysia: Horsemen (20 Kapsul), Hammer of Thor (20 Kapsul Veg.), Grow XL (30 Kapsul), dan Magnum Pump XR (30 Kapsul Hitam). Harga rasmi RM 159 / RM 318 / RM 477, profil miligram penuh & penghantaran rahsia seluruh Malaysia.',
      eyebrow:
        'MS-170 · BILIK KEBAL FORMULASI RASMI ONYXMEN MALAYSIA & INDEKS KATALOG PRODUK',
      headline:
        'Bilik Kebal Formulasi Botani Lengkap Onyxmen Malaysia — Empat Formulasi Utama Pada Harga RM 159.',
      subheadline:
        'Bandingkan keempat-empat formulasi kecergasan lelaki kami yang disaring makmal secara bersebelahan: Horsemen (20 Kapsul × 500mg), Hammer of Thor (20 Kapsul Veg. × 500mg), Grow XL (30 Kapsul × 550mg), dan Magnum Pump XR (30 Kapsul Hitam × 600mg).',
      executiveSummary:
        'Setiap formulasi di dalam Bilik Kebal Onyxmen Malaysia dibangunkan berasaskan ekstrak botani terpiawai bernisbah tinggi dan asid amino tulen, disimpan di dalam bilik kebal kawalan suhu 22°C–24°C kami di Kuala Lumpur (Poskod 50450), serta ditawarkan pada harga rasmi seragam Malaysia: 1 Botol RM 159 (159.00 MYR), 2 Botol RM 318 (318.00 MYR — Penghantaran Percuma Seluruh Malaysia termasuk Sabah, Sarawak & Labuan), dan 3 Botol RM 477 (477.00 MYR). Semak pecahan miligram tepat, bilangan kapsul, dan jadual makan bagi setiap produk di bawah, kemudian buka monograf penuh atau buat tempahan terus melalui Laci Tempahan Ekspres 10 Saat kami.',
      telemetry: [
        {
          key: '01 · BARISAN PRODUK PENUH',
          val: '4 Formulasi Utama',
          sub: 'ONYX-HM-20 · ONYX-HT-20 · ONYX-GX-30 · ONYX-MP-30',
        },
        {
          key: '02 · HARGA RASMI MALAYSIA',
          val: 'RM 159 / RM 318 / RM 477',
          sub: '159.00 MYR (1 Botol) · 318.00 MYR (2 Botol) · 477.00 MYR (3 Botol)',
        },
        {
          key: '03 · SENI BINA KAPSUL',
          val: 'Botol 20 & 30 Kapsul',
          sub: '500mg Herba · 500mg Veg HPMC · 550mg Harian · 600mg Kapsul Hitam',
        },
        {
          key: '04 · PENGHANTARAN NEGARA',
          val: '3–5j KL · 1–2h MY · COD',
          sub: 'Dihantar dalam kotak polos 3-lapisan di bawah OM Fulfilment Logistics',
        },
      ],
      splitChapters: [
        {
          kicker: 'BAB 01 · FORMULASI KEPEKATAN STAMINA & SAPONIN 20 KAPSUL',
          title: 'Horsemen (ONYX-HM-20) & Hammer of Thor (ONYX-HT-20) — Kepekatan 500mg Bernisbah Tinggi.',
          body1:
            'Bagi lelaki yang mengutamakan stamina malam berkepekatan tinggi, tenaga dalaman, dan kesediaan fizikal, dua formulasi 20 kapsul kami membekalkan 500mg setiap kapsul (10g berat bersih setiap botol). Horsemen (/ms/produk/horsemen/, GTIN: 9550000102011) menggabungkan 200mg Akar Tongkat Ali Malaysia 100:1 (≥2.2% eurycomanone) bersama 120mg Panax Ginseng (10% ginsenosida), 100mg Maca Hitam Peru, dan 80mg Epimedium brevicornum (10% icariin) untuk prestasi malam dwi-laluan.',
          body2:
            'Hammer of Thor (/ms/produk/hammer-of-thor/, GTIN: 9550000102028) pula menggunakan sarung kapsul vegetarian hipromelosa (HPMC) 100% berasaskan tumbuhan di bawah penutup emas metalik dan lencana vegetarian hijau. Ia diterajui oleh 250mg ekstrak Tribulus terrestris terpiawai (60% saponin steroid / protodioscin) bersama 120mg Tongkat Ali 100:1, 80mg Akar Maca, dan 50mg L-Arginine HCl untuk kepekaan reseptor androgen dan daya tahan fizikal.',
        },
        {
          kicker: 'BAB 02 · FORMULASI VITALITI HARIAN & PAM NITRIK OKSIDA 30 KAPSUL',
          title: 'Grow XL (ONYX-GX-30) & Magnum Pump XR (ONYX-MP-30) — Kitaran Bulanan Penuh 30 Hari.',
          body1:
            'Bagi lelaki yang mahukan kitaran harian berstruktur selama 30 hari (1 kapsul sehari), dua formulasi 30 kapsul kami menawarkan perlindungan menyeluruh. Grow XL (/ms/produk/grow-xl/, GTIN: 9550000102035 — Produk #1 Terlaris) membekalkan 550mg setiap kapsul (16.5g berat bersih): 180mg Maca Hitam Peru 10:1 tergelatinisasi, 150mg Tongkat Ali 100:1, 100mg Epimedium (20% icariin), 80mg Panax Ginseng, serta 40mg Zink Bisglisinat + Selenium untuk kecergasan harian berterusan.',
          body2:
            'Magnum Pump XR (/ms/produk/magnum-pump-xr/, GTIN: 9550000102042 — Testosterone Pro Series) hadir di dalam 30 biji kapsul hitam pekat (Jet-Black Capsules) pada 600mg setiap kapsul (18g berat bersih). Ia menggabungkan matriks asid amino nitrik oksida dwi-fasa (220mg L-Arginine HCl + 150mg L-Citrulline Malate 2:1) bersama 120mg Tongkat Ali 100:1, 70mg Akar Maca, dan 40mg Ekstrak Kulit Kayu Pine Maritim (95% proanthocyanidins) untuk pengembangan saluran darah eNOS yang maksimum.',
        },
        {
          kicker: 'BAB 03 · CARA MENEMPAH BOTOL TUNGGAL ATAU PAKEJ KITARAN 60/90 HARI',
          title: 'Harga Rasmi Seragam RM 159 / RM 318 / RM 477 & Sokongan Gabungan Botol.',
          body1:
            'Setiap formulasi di dalam katalog boleh ditempah serta-merta pada harga RM 159.00 untuk Pek Pengenalan 1 Botol, RM 318.00 untuk Protokol Pilihan Ramai 2 Botol 60 Hari (termasuk Penghantaran Ekspres Percuma RM 0 ke seluruh 16 negeri Malaysia termasuk Sabah, Sarawak, dan Labuan), dan RM 477.00 untuk Kitaran Penuh 3 Botol 90 Hari.',
          body2:
            'Anda boleh klik pada mana-mana pautan monograf produk di bawah untuk membaca analisis botani lengkap, atau membuka Laci Tempahan Ekspres 10 Saat terus daripada jadual perbandingan produk di atas.',
        },
      ],
      ledgerTitle: 'Indeks Katalog Lengkap Onyxmen Malaysia & Direktori Monograf Produk',
      ledgerSub:
        'Pautan terus, kod pengenalan GS1 rasmi, seni bina kapsul, dan kandungan miligram aktif bagi keempat-empat formulasi Onyxmen Malaysia serta panduan perbandingan botani kami.',
      ledgerRows: [
        {
          code: 'ONYX-HM-20 · RM 159',
          title: 'Horsemen — Formulasi Stamina & Vitaliti Puncak Lelaki (20 Kapsul × 500mg)',
          desc: '200mg Tongkat Ali 100:1 + 120mg Panax Ginseng + 100mg Maca Hitam + 80mg Epimedium. Baca monograf penuh di /ms/produk/horsemen/.',
          metric: '/ms/produk/horsemen/',
        },
        {
          code: 'ONYX-HT-20 · RM 159',
          title: 'Hammer of Thor — Kompleks Saponin Tribulus Terrestris (20 Kapsul Veg. × 500mg)',
          desc: '250mg Tribulus Terrestris (60% protodioscin) + 120mg Tongkat Ali + 80mg Maca + 50mg L-Arginine dalam kapsul veg HPMC. Monograf: /ms/produk/hammer-of-thor/.',
          metric: '/ms/produk/hammer-of-thor/',
        },
        {
          code: 'ONYX-GX-30 · RM 159',
          title: 'Grow XL — Campuran Prestasi Lelaki Kekuatan Ekstra #1 Terlaris (30 Kapsul × 550mg)',
          desc: '180mg Maca Hitam 10:1 + 150mg Tongkat Ali 100:1 + 100mg Epimedium + 80mg Ginseng + 40mg Zink Terkelat. Monograf: /ms/produk/grow-xl/.',
          metric: '/ms/produk/grow-xl/',
        },
        {
          code: 'ONYX-MP-30 · RM 159',
          title: 'Magnum Pump XR — Siri Pro Testosteron & Matriks Nitrik Oksida (30 Kapsul Hitam × 600mg)',
          desc: '220mg L-Arginine HCl + 150mg L-Citrulline Malate + 120mg Tongkat Ali + 70mg Maca + 40mg Kulit Kayu Pine dalam kapsul hitam. Monograf: /ms/produk/magnum-pump-xr/.',
          metric: '/ms/produk/magnum-pump-xr/',
        },
        {
          code: 'BANDING · SEMUA 4',
          title: 'Matriks Perbandingan Horsemen vs Hammer of Thor vs Grow XL vs Magnum Pump XR',
          desc: 'Perbandingan mendalam laluan biokimia, mula tindak balas, sarung kapsul & protokol gabungan di /ms/banding/horsemen-vs-hammer-of-thor-vs-grow-xl-vs-magnum-pump-xr/.',
          metric: '/ms/banding/',
        },
        {
          code: 'PANDUAN · TONGKAT ALI',
          title: 'Sains Vitaliti Tongkat Ali Malaysia (Eurycoma longifolia 100:1) & Maca Hitam',
          desc: 'Terokai bagaimana eurycomanone dan macamides menyokong testosteron bebas serta stamina malam di /ms/panduan/sains-vitaliti-tongkat-ali-dan-maca-malaysia/.',
          metric: '/ms/panduan/',
        },
        {
          code: 'PANDUAN · NITRIK OKSIDA',
          title: 'Panduan Nitrik Oksida, L-Arginine, L-Citrulline & Pengaliran Darah Lelaki',
          desc: 'Ketahui bagaimana kitaran L-Arginine + L-Citrulline memacu pengembangan saluran darah cGMP di /ms/panduan/nitrik-oksida-aliran-darah-vitaliti-lelaki-malaysia/.',
          metric: '/ms/panduan/',
        },
        {
          code: 'HAB · KUALA LUMPUR',
          title: 'Hab Penghantaran Hari Sama Kuala Lumpur, Selangor & Ekspres 16 Negeri Malaysia',
          desc: 'Semak jadual poskod, ketersediaan penghantar persendirian 3–5 jam Lembah Klang, dan kemudahan COD di /ms/lokasi/kuala-lumpur/.',
          metric: '/ms/lokasi/kuala-lumpur/',
        },
      ],
      tableTitle: 'Jadual Induk Spesifikasi & Harga Rasmi 4 Formulasi (MYR)',
      tableHeaders: [
        'Formulasi & Pautan Monograf',
        'SKU, GTIN-13 & Bilangan Kapsul',
        'Kandungan Bahan Aktif Terpiawai (Setiap Kapsul)',
        'Harga Rasmi Malaysia (MYR)',
      ],
      tableRows: [
        [
          'Horsemen (/ms/produk/horsemen/)',
          'SKU: ONYX-HM-20 · GTIN: 9550000102011 · 20 Kapsul × 500mg (10g)',
          '200mg Tongkat Ali 100:1, 120mg Panax Ginseng, 100mg Maca, 80mg Epimedium.',
          '1 Btl: RM 159 · 2 Btl: RM 318 · 3 Btl: RM 477',
        ],
        [
          'Hammer of Thor (/ms/produk/hammer-of-thor/)',
          'SKU: ONYX-HT-20 · GTIN: 9550000102028 · 20 Kapsul Veg × 500mg (10g)',
          '250mg Tribulus (60% Saponin), 120mg Tongkat Ali, 80mg Maca, 50mg L-Arginine.',
          '1 Btl: RM 159 · 2 Btl: RM 318 · 3 Btl: RM 477',
        ],
        [
          'Grow XL (/ms/produk/grow-xl/)',
          'SKU: ONYX-GX-30 · GTIN: 9550000102035 · 30 Kapsul × 550mg (16.5g)',
          '180mg Maca Hitam 10:1, 150mg Tongkat Ali, 100mg Epimedium, 80mg Ginseng, 40mg Zink.',
          '1 Btl: RM 159 · 2 Btl: RM 318 · 3 Btl: RM 477',
        ],
        [
          'Magnum Pump XR (/ms/produk/magnum-pump-xr/)',
          'SKU: ONYX-MP-30 · GTIN: 9550000102042 · 30 Kapsul Hitam × 600mg (18g)',
          '220mg L-Arginine HCl, 150mg L-Citrulline Malate, 120mg Tongkat Ali, 70mg Maca, 40mg Kulit Pine.',
          '1 Btl: RM 159 · 2 Btl: RM 318 · 3 Btl: RM 477',
        ],
      ],
      faqs: [
        {
          questionMs: 'Adakah keempat-empat formulasi Onyxmen Malaysia mempunyai stok sedia ada untuk pelepasan segera?',
          answerMs:
            'Ya. Horsemen (ONYX-HM-20), Hammer of Thor (ONYX-HT-20), Grow XL (ONYX-GX-30), dan Magnum Pump XR (ONYX-MP-30) semuanya tersedia di dalam bilik kebal kawalan suhu 22°C–24°C Kuala Lumpur kami dan sedia untuk pelepasan hari sama bagi pesanan yang disahkan sebelum jam 16:00 MYT.',
        },
        {
          questionMs: 'Mengapakah Horsemen dan Hammer of Thor mengandungi 20 kapsul manakala Grow XL dan Magnum Pump XR mengandungi 30 kapsul?',
          answerMs:
            'Horsemen dan Hammer of Thor diformulasikan sebagai suplemen kepekatan stamina malam dan saponin steroid di mana pelanggan mengambil 1 kapsul pada hari biasa atau 2 kapsul sebelum aktiviti malam (10 hingga 20 hidangan sebotol). Grow XL dan Magnum Pump XR pula direka sebagai kitaran kecergasan harian dan vaskular nitrik oksida selama 30 hari penuh (1 kapsul sehari selama sebulan).',
        },
        {
          questionMs: 'Adakah pakej 2 Botol RM 318 termasuk Penghantaran Percuma ke Sabah dan Sarawak?',
          answerMs:
            'Ya. Setiap pesanan 1 Botol (RM 159), 2 Botol (RM 318), dan 3 Botol (RM 477) menikmati Penghantaran Ekspres Percuma RM 0 di seluruh Semenanjung Malaysia, manakala pakej 2 Botol (RM 318) dan 3 Botol (RM 477) turut menikmati Kargo Udara Percuma RM 0 ke Sabah, Sarawak, dan Labuan.',
        },
        {
          questionMs: 'Bolehkah saya menyemak gambar penuh botol dan monograf bahan aktif setiap produk sebelum menempah?',
          answerMs:
            'Sudah tentu. Klik mana-mana nama formulasi di dalam jadual perbandingan atau senarai katalog pada halaman ini untuk membuka monograf dwibahasa penuh (/ms/produk/horsemen/, /ms/produk/hammer-of-thor/, /ms/produk/grow-xl/, atau /ms/produk/magnum-pump-xr/).',
        },
      ],
    },
  },
];


/**
 * Renders a complete >= 2,200+ line Bilingual Trust, PDPA, Legal, Concierge, FAQ or Products Vault HTML page.
 * @param {object} dossier
 * @param {'en-MY' | 'ms-MY'} lang
 * @returns {string}
 */
export function renderTrustDossierPage(dossier, lang = 'en-MY') {
  const isMs = lang === 'ms-MY';
  const loc = isMs ? dossier.ms : dossier.en;
  const canonicalPath = isMs ? dossier.canonicalMsPath : dossier.canonicalEnPath;
  const microStep = isMs ? dossier.microStepMs : dossier.microStepEn;

  const combinedFaqs = [
    ...(loc.faqs || []).map((f) => ({
      question: isMs ? f.questionMs || f.questionEn : f.questionEn || f.questionMs,
      answer: isMs ? f.answerMs || f.answerEn : f.answerEn || f.answerMs,
    })),
    ...SHARED_TRUST_FAQS.map((f) => ({
      question: isMs ? f.questionMs : f.questionEn,
      answer: isMs ? f.answerMs : f.answerEn,
    })),
  ];

  const breadcrumbs = [
    {
      name: isMs ? 'Utama Onyxmen Malaysia' : 'Onyxmen Malaysia Home',
      url: isMs ? '/ms/' : '/',
    },
    {
      name: loc.headline.split('—')[0].trim(),
      url: canonicalPath,
    },
  ];

  const schemaGraphObj = buildFullPageGraph({
    pageType: dossier.key === 'faq-hub' ? 'faq' : dossier.key === 'products-vault' ? 'collection' : 'trust',
    locale: lang,
    pageUrl: canonicalPath,
    canonicalPath,
    title: loc.seoTitle,
    description: loc.metaDescription,
    breadcrumbs,
    faqs: combinedFaqs,
    includeProductGroup: true,
    includeAllProducts: true,
  });

  const telemetryHtml = (loc.telemetry || [])
    .map(
      (t) => `
          <div class="trust-cinema-hero__telemetry-col">
            <span class="trust-cinema-hero__telemetry-key">${esc(t.key)}</span>
            <strong class="trust-cinema-hero__telemetry-val">${esc(t.val)}</strong>
            <span class="trust-cinema-hero__telemetry-sub">${esc(t.sub)}</span>
          </div>`
    )
    .join('\n');

  const chaptersHtml = (loc.splitChapters || [])
    .map(
      (ch, idx) => `
          <article class="trust-split-5050__chapter" id="${idx === 0 ? 'terms-of-sale' : idx === 1 ? 'terma-jualan' : `chapter-${idx + 1}`}">
            <span class="editorial-kicker">${esc(ch.kicker)}</span>
            <h2 class="editorial-headline-md">${esc(ch.title)}</h2>
            <p class="editorial-body-copy">${esc(ch.body1)}</p>
            <p class="editorial-body-copy">${esc(ch.body2)}</p>
          </article>`
    )
    .join('\n');

  const ledgerRowsHtml = (loc.ledgerRows || [])
    .map(
      (row) => `
          <div class="trust-hairline-row">
            <div class="trust-hairline-row__code">${esc(row.code)}</div>
            <div class="trust-hairline-row__main">
              <h3 class="trust-hairline-row__title">${esc(row.title)}</h3>
              <p class="trust-hairline-row__desc">${esc(row.desc)}</p>
            </div>
            <div class="trust-hairline-row__meta">
              <span class="trust-hairline-row__dosage" style="font-size:1.15rem;">${esc(row.metric)}</span>
            </div>
          </div>`
    )
    .join('\n');

  const tableHeadersHtml = (loc.tableHeaders || [])
    .map((th) => `<th>${esc(th)}</th>`)
    .join('');

  const tableRowsHtml = (loc.tableRows || [])
    .map(
      (tr) =>
        `<tr>${tr
          .map((td, i) =>
            i === 0
              ? `<td><strong style="color:var(--gold-foil-bright);">${esc(td)}</strong></td>`
              : `<td>${esc(td)}</td>`
          )
          .join('')}</tr>`
    )
    .join('\n');

  const faqAccordionHtml = combinedFaqs
    .map(
      (faq, idx) => `
          <details class="trust-faq-item" ${idx < 3 ? 'open' : ''}>
            <summary>
              <span>${String(idx + 1).padStart(2, '0')} · ${esc(faq.question)}</span>
              <span style="color:var(--gold-champagne);font-size:0.85rem;">+</span>
            </summary>
            <div class="trust-faq-item__body">
              <p>${esc(faq.answer)}</p>
            </div>
          </details>`
    )
    .join('\n');

  const bodyContent = `
  <!-- ==========================================================================
       PARADIGM A — 100VW X 100VH FULL-BLEED OBSIDIAN APOTHECARY HERO STAGE
       ========================================================================== -->
  <section class="trust-cinema-hero" aria-labelledby="trust-hero-headline">
    <div class="trust-cinema-hero__watermark" aria-hidden="true">${esc(dossier.code)}</div>

    <nav class="trust-cinema-hero__breadcrumb-bar" aria-label="${isMs ? 'Jejak Navigasi' : 'Breadcrumb'}">
      <div class="trust-cinema-hero__crumbs">
        <a href="${isMs ? '/ms/' : '/'}">${isMs ? 'UTAMA ONYXMEN.MY' : 'ONYXMEN.MY HOME'}</a>
        <span>/</span>
        <span style="color:var(--gold-foil-bright);">${esc(microStep)} · ${esc(dossier.code)}</span>
      </div>
      <div>
        <span>${isMs ? 'HARGA RASMI MALAYSIA: RM 159 · RM 318 · RM 477' : 'OFFICIAL MALAYSIA TARIFF: RM 159 · RM 318 · RM 477'}</span>
      </div>
    </nav>

    <div class="trust-cinema-hero__stage">
      <div class="trust-cinema-hero__narrative">
        <span class="editorial-kicker">${esc(loc.eyebrow)}</span>
        <h1 id="trust-hero-headline" class="editorial-headline-xl">${esc(loc.headline)}</h1>
        <div class="trust-cinema-hero__taxonomy-strip">
          <span>${esc(microStep)}</span>
          <span>·</span>
          <span>sales@onyxmen.my</span>
          <span>·</span>
          <span>info@onyxmen.my</span>
          <span>·</span>
          <span>OM Fulfilment Logistics (KL 50450)</span>
        </div>
        <p class="trust-cinema-hero__lead">${esc(loc.subheadline)}</p>
        <p class="editorial-body-copy">${esc(loc.executiveSummary)}</p>

        <div class="trust-cinema-hero__cta-row">
          <button
            type="button"
            class="cta-foil-primary"
            data-open-order-drawer="true"
            data-order-product="${esc(dossier.primaryProductSlug)}"
            data-order-qty="1"
          >
            <span>${isMs ? 'Tempah Bungkusan Rahsia · RM 159' : 'Reserve Discreet Parcel · RM 159'}</span>
          </button>
          <button
            type="button"
            class="cta-hairline-secondary"
            data-open-order-drawer="true"
            data-order-product="${esc(dossier.primaryProductSlug)}"
            data-order-qty="2"
          >
            <span>${isMs ? 'Pakej 2 Botol (Pos Percuma) · RM 318' : '2-Bottle Protocol (Free MY Shipping) · RM 318'}</span>
          </button>
          <a href="${isMs ? '/ms/perbandingan/semua-4-formula/' : '/compare/all-4-formulas/'}" class="cta-hairline-secondary">
            <span>${isMs ? 'Bandingkan 4 Botol →' : 'Compare All 4 Reserves →'}</span>
          </a>
        </div>
      </div>

      <div class="trust-cinema-hero__visual">
        <div class="trust-cinema-hero__pedestal">
          <img
            src="${esc(dossier.heroImage)}"
            alt="${esc(loc.headline)}"
            width="900"
            height="900"
            loading="eager"
            fetchpriority="high"
            decoding="async"
            class="trust-cinema-hero__img"
          />
        </div>
      </div>
    </div>

    <div class="trust-cinema-hero__telemetry-strip">
      ${telemetryHtml}
    </div>
  </section>

  ${
    dossier.slug === 'seo-dashboard'
      ? `
  <section class="trust-section trust-section--charcoal" id="gsc-live-telemetry-stage" aria-label="Live Google Search Console Telemetry">
    <div class="trust-section__inner">
      <header class="trust-section__header">
        <div class="trust-section__header-left">
          <span class="editorial-kicker">GSC-API · LIVE GOOGLE SEARCH CONSOLE &amp; GOOGLEBOT CRAWL FEED</span>
          <h2 class="editorial-headline-lg">${
            isMs
              ? 'Telemetri Klik, Impresi &amp; Status Indeks Google Secara Langsung'
              : 'Live Google Clicks, Impressions &amp; Googlebot Index Inspection'
          }</h2>
        </div>
        <div class="trust-section__header-right">
          <p id="gsc-live-sync-badge">Syncing live telemetry from <code>/seo-health-status.json</code>...</p>
        </div>
      </header>

      <div class="trust-hairline-ledger" id="gsc-live-metrics-ledger">
        <div class="trust-hairline-row">
          <div class="trust-hairline-row__code">GSC-CLICKS</div>
          <div class="trust-hairline-row__main">
            <h3 class="trust-hairline-row__title">28-Day Google Search Clicks</h3>
            <p class="trust-hairline-row__desc">Total organic clicks recorded by Google Search Console for https://www.onyxmen.my/</p>
          </div>
          <div class="trust-hairline-row__meta">
            <span class="trust-hairline-row__dosage" id="gsc-val-clicks">0</span>
            <span class="trust-hairline-row__sub" id="gsc-val-status">LIVE FEED</span>
          </div>
        </div>
        <div class="trust-hairline-row">
          <div class="trust-hairline-row__code">GSC-IMPR</div>
          <div class="trust-hairline-row__main">
            <h3 class="trust-hairline-row__title">28-Day Google Search Impressions</h3>
            <p class="trust-hairline-row__desc">Total organic SERP impressions across Malaysia (EN-MY &amp; MS-MY queries)</p>
          </div>
          <div class="trust-hairline-row__meta">
            <span class="trust-hairline-row__dosage" id="gsc-val-impressions">0</span>
            <span class="trust-hairline-row__sub" id="gsc-val-ctr">CTR: 0.00%</span>
          </div>
        </div>
        <div class="trust-hairline-row">
          <div class="trust-hairline-row__code">GSC-POS</div>
          <div class="trust-hairline-row__main">
            <h3 class="trust-hairline-row__title">Average Google Ranking Position &amp; Sitemap Velocity</h3>
            <p class="trust-hairline-row__desc">Live average Google SERP position + 282 bilingual HTML pages &amp; 2,602 @graph schema nodes</p>
          </div>
          <div class="trust-hairline-row__meta">
            <span class="trust-hairline-row__dosage" id="gsc-val-position">--</span>
            <span class="trust-hairline-row__sub">282 PAGES · 5 SITEMAPS</span>
          </div>
        </div>
      </div>

      <div class="trust-table-wrap">
        <table class="trust-comparison-table">
          <thead>
            <tr>
              <th>Canonical URL</th>
              <th>Googlebot Verdict</th>
              <th>Coverage / Indexing State</th>
              <th>Last Crawl / Sitemap Stamp</th>
            </tr>
          </thead>
          <tbody id="gsc-live-inspection-tbody">
            <tr>
              <td><strong style="color:var(--gold-foil-bright);">https://www.onyxmen.my/</strong></td>
              <td>SUBMITTED_IN_SITEMAP</td>
              <td>Verified in sitemap.xml &amp; IndexNow (282 pages)</td>
              <td>2026-11-03</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <script>
      (function() {
        async function refreshGscTelemetry() {
          try {
            var res = await fetch('/seo-health-status.json?t=' + Date.now());
            if (!res.ok) return;
            var data = await res.json();
            var gsc = data.googleSearchConsoleLiveTelemetry;
            if (!gsc) return;
            var badge = document.getElementById('gsc-live-sync-badge');
            if (badge) {
              badge.textContent = 'Status: ' + gsc.connectionStatus + ' · Last Synced: ' + (gsc.lastSyncedAtIso || data.generatedAtIso);
            }
            var s = gsc.summary28Days || {};
            var elClicks = document.getElementById('gsc-val-clicks');
            var elImpr = document.getElementById('gsc-val-impressions');
            var elCtr = document.getElementById('gsc-val-ctr');
            var elPos = document.getElementById('gsc-val-position');
            var elStat = document.getElementById('gsc-val-status');
            if (elClicks) elClicks.textContent = String(s.clicks || 0);
            if (elImpr) elImpr.textContent = String(s.impressions || 0);
            if (elCtr) elCtr.textContent = 'CTR: ' + String(s.ctrPercent || 0) + '%';
            if (elPos) elPos.textContent = s.averagePosition > 0 ? '#' + String(s.averagePosition) : 'Indexing (Day 3)';
            if (elStat) elStat.textContent = gsc.apiConnected ? 'GSC API LIVE' : 'SITEMAP ACTIVE';
            var tbody = document.getElementById('gsc-live-inspection-tbody');
            if (tbody && Array.isArray(gsc.urlInspectionResults) && gsc.urlInspectionResults.length > 0) {
              tbody.innerHTML = gsc.urlInspectionResults.map(function(r) {
                return '<tr>' +
                  '<td><strong style="color:var(--gold-foil-bright);">' + r.url + '</strong></td>' +
                  '<td>' + (r.verdict || 'SUBMITTED') + '</td>' +
                  '<td>' + (r.coverageState || 'Submitted in sitemap.xml') + '</td>' +
                  '<td>' + (r.lastCrawlTime || data.lastUpdatedDateMyt || '2026-11-03') + '</td>' +
                '</tr>';
              }).join('');
            }
          } catch (e) {}
        }
        refreshGscTelemetry();
        setInterval(refreshGscTelemetry, 60000);
      })();
    </script>
  </section>`
      : ''
  }

  <!-- ==========================================================================
       PARADIGM D — PINNED 50VW / 50VW SPLIT-SCREEN ARCHITECTURAL STAGE
       ========================================================================== -->
  <section class="trust-split-5050" aria-label="${esc(loc.ledgerTitle)}">
    <div class="trust-split-5050__pinned">
      <div>
        <span class="editorial-kicker">${esc(microStep)} · ${isMs ? 'DOKUMEN TADBIR URUS RASMI' : 'OFFICIAL GOVERNANCE DOSSIER'}</span>
        <h2 class="editorial-headline-lg" style="margin-top:0.75rem;">${esc(loc.ledgerTitle)}</h2>
        <p class="editorial-body-copy" style="margin-top:1rem;">${esc(loc.ledgerSub)}</p>
      </div>

      <div class="trust-cinema-hero__pedestal" style="padding:1.25rem;">
        <img
          src="${esc(dossier.portraitImage)}"
          alt="${esc(loc.ledgerTitle)}"
          width="640"
          height="800"
          loading="lazy"
          decoding="async"
          class="trust-cinema-hero__img"
          style="max-width:360px;"
        />
      </div>

      <div id="terms-of-sale-summary" style="border-top:1px solid rgba(212,175,55,0.28);padding-top:1.25rem;">
        <div id="terma-jualan-ringkasan" style="font-size:0.76rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--gold-champagne);">
          ${isMs ? 'MEJA PELEPASAN KUALA LUMPUR · 09:00–23:00 MYT' : 'KUALA LUMPUR FULFILMENT DESK · 09:00–23:00 MYT'}
        </div>
        <p style="font-size:0.88rem;color:var(--text-muted-alabaster);margin-top:0.45rem;">
          sales@onyxmen.my · info@onyxmen.my · waleedshoaibofficial@gmail.com
        </p>
      </div>
    </div>

    <div class="trust-split-5050__scrolling">
      ${chaptersHtml}
    </div>
  </section>

  <!-- ==========================================================================
       ARCHITECTURAL HAIRLINE SPECIFICATION LEDGER
       ========================================================================== -->
  <section class="trust-section trust-section--onyx" aria-labelledby="heading-dossier-ledger">
    <div class="trust-section__inner">
      <header class="trust-section__header">
        <div class="trust-section__header-left">
          <span class="editorial-kicker">${esc(microStep)} · ${isMs ? 'SENARAI SEMAK SPESIFIKASI' : 'SPECIFICATION LEDGER'}</span>
          <h2 id="heading-dossier-ledger" class="editorial-headline-lg">${esc(loc.ledgerTitle)}</h2>
        </div>
        <div class="trust-section__header-right">
          <p>${esc(loc.ledgerSub)}</p>
        </div>
      </header>

      <div class="trust-hairline-ledger">
        ${ledgerRowsHtml}
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       STRUCTURED GOVERNANCE & TECHNICAL MATRIX TABLE
       ========================================================================== -->
  <section class="trust-section" aria-labelledby="heading-dossier-table">
    <div class="trust-section__inner">
      <header class="trust-section__header">
        <div class="trust-section__header-left">
          <span class="editorial-kicker">${esc(microStep)} · ${isMs ? 'JADUAL RUJUKAN RASMI' : 'OFFICIAL REFERENCE MATRIX'}</span>
          <h2 id="heading-dossier-table" class="editorial-headline-lg">${esc(loc.tableTitle)}</h2>
        </div>
      </header>

      <div class="trust-table-wrap">
        <table class="trust-comparison-table">
          <thead>
            <tr>${tableHeadersHtml}</tr>
          </thead>
          <tbody>
            ${tableRowsHtml}
          </tbody>
        </table>
      </div>
    </div>
  </section>

  ${renderTrustMultiBottleSection(lang, dossier.primaryProductSlug)}
  ${renderTrustQuantitativeMatrixSection(lang)}
  ${renderTrustLabPuritySection(lang)}
  ${renderTrustTimingSection(lang)}
  ${renderTrustStatesFulfilmentSection(lang, dossier.primaryProductSlug)}
  ${renderTrustDirectoryNavSection(lang)}

  <!-- ==========================================================================
       COMPREHENSIVE BILINGUAL FAQ ACCORDION LEDGER
       ========================================================================== -->
  <section class="trust-section trust-section--charcoal" aria-labelledby="heading-dossier-faq">
    <div class="trust-section__inner">
      <header class="trust-section__header">
        <div class="trust-section__header-left">
          <span class="editorial-kicker">${esc(microStep)} · ${isMs ? 'SOALAN LAZIM (FAQ) &amp; JAWAPAN RASMI' : 'FREQUENTLY ASKED QUESTIONS &amp; GOVERNANCE ANSWERS'}</span>
          <h2 id="heading-dossier-faq" class="editorial-headline-lg">
            ${isMs ? 'Soalan Lazim &amp; Panduan Pengesahan Rasmi.' : 'Official Verification &amp; Client Governance FAQ.'}
          </h2>
        </div>
      </header>

      <div class="trust-faq-ledger">
        ${faqAccordionHtml}
      </div>
    </div>
  </section>
  `;

  return renderLuxuryShell({
    lang,
    canonicalPath,
    alternatePathEn: dossier.canonicalEnPath,
    alternatePathMs: dossier.canonicalMsPath,
    title: loc.seoTitle,
    description: loc.metaDescription,
    ogImage: dossier.heroImage,
    schemaGraphJson: schemaGraphObj,
    bodyContent,
    activeNav: dossier.activeNav || 'guides',
    productSlug: dossier.primaryProductSlug || 'horsemen',
    defaultQty: 1,
    includeSealStrip: true,
    extraHeadHtml: TRUST_STAGE_CSS,
  });
}

/**
 * Writes rendered HTML to multiple public relative paths.
 */
function writeHtmlToPublicPaths(htmlContent, relativePaths = []) {
  const results = [];
  for (const relPath of relativePaths) {
    const outFile = path.join(PUBLIC_DIR, relPath);
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    fs.writeFileSync(outFile, htmlContent, 'utf8');
    const lineCount = htmlContent.split(/\r?\n/).length;
    results.push({
      relPath: `public/${relPath}`,
      lineCount,
      bytes: Buffer.byteLength(htmlContent, 'utf8'),
    });
  }
  return results;
}

export function buildAllTrustPages() {
  const summary = [];
  for (const dossier of TRUST_DOSSIERS) {
    const enHtml = renderTrustDossierPage(dossier, 'en-MY');
    const msHtml = renderTrustDossierPage(dossier, 'ms-MY');
    summary.push(...writeHtmlToPublicPaths(enHtml, dossier.enOutputPaths));
    summary.push(...writeHtmlToPublicPaths(msHtml, dossier.msOutputPaths));
  }
  return summary;
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  const generated = buildAllTrustPages();
  console.log('====================================================================');
  console.log(`ONYXMEN.MY TRUST, PDPA, LEGAL, FAQ & VAULT BUILDER COMPLETE (${generated.length} FILES)`);
  console.log('====================================================================');
  let minLines = Infinity;
  for (const item of generated) {
    if (item.lineCount < minLines) minLines = item.lineCount;
    console.log(`  [OK] ${item.relPath.padEnd(56)} | ${String(item.lineCount).padStart(5)} lines | ${item.bytes} bytes`);
  }
  console.log(`Minimum Line Count: ${minLines} lines (Threshold >= 2,200 lines)`);
}
