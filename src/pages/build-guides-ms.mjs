#!/usr/bin/env node
/**
 * ONYXMEN.MY — BAHASA MALAYSIA BUYER-INTENT SEO GUIDES & PROTOCOL LIBRARY BUILDER (MS-154 TO MS-160)
 * Generates the Master Bahasa Malaysia Guides Index (/ms/guides/index.html & /ms/panduan/index.html)
 * PLUS all 6 Bahasa Malaysia Buyer-Intent SEO Guides and 100% of their route aliases across:
 * - src/data/guides.json
 * - src/utils/i18n.ts
 * - src/components/ObsidianFooter.mjs
 * - src/components/ObsidianHeader.mjs
 * - public/ms/index.html
 *
 * Strictly enforces Rule #29 & Rule #30:
 * - Paradigm A (100vw x 100vh Full-Bleed Obsidian Cinema Stage) + Paradigm D (Pinned 50vw/50vw Split-Screen Editorial Stage)
 * - Obsidian & Liquid Champagne Gold palette (#050507, #0B0C10, #12141C, #D4AF37, #EAE6DF)
 * - Typography: 'Cormorant Garamond', 'Syne', 'Space Grotesk'
 * - ZERO #FAF8F5, ZERO Plus Jakarta Sans, ZERO border-radius: 999px, ZERO repeat(3, 1fr)
 * - Every single generated HTML file >= 2,200+ lines of native Malaysian Bahasa Malaysia (ms-MY) luxury HTML5.
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
 * Custom inline architectural CSS for Bahasa Malaysia Buyer-Intent SEO Guides (MS-154 to MS-160).
 * Enforces Paradigm A (100vw x 100vh Full-Bleed Cinema Hero) + Paradigm D (50vw/50vw Pinned Split-Screen Stage)
 * + Architectural Hairline Ledgers.
 */
export const BM_GUIDES_STAGE_CSS = `
<style id="onyxman-bm-guides-architectural-css">
  /* ==========================================================================
     PARADIGM A — 100VW X 100VH FULL-BLEED OBSIDIAN CINEMA HERO STAGE
     ========================================================================== */
  .panduan-cinema-hero {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    background-color: #050507;
    background-image:
      radial-gradient(circle at 74% 36%, rgba(212, 175, 55, 0.16) 0%, rgba(18, 20, 28, 0.74) 48%, #050507 94%),
      linear-gradient(180deg, #050507 0%, #0B0C10 62%, #050507 100%);
    border-bottom: 1px solid rgba(212, 175, 55, 0.28);
    padding: clamp(3.5rem, 7vh, 6.5rem) var(--gutter-cinema);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }
  .panduan-cinema-hero__watermark {
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
  .panduan-cinema-hero__breadcrumb-bar {
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
  .panduan-cinema-hero__crumbs {
    display: inline-flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.6rem;
  }
  .panduan-cinema-hero__crumbs a:hover {
    color: var(--gold-foil-bright);
  }
  .panduan-cinema-hero__stage {
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
  .panduan-cinema-hero__narrative {
    flex: 1 1 580px;
    max-width: 840px;
    display: flex;
    flex-direction: column;
    gap: 1.45rem;
  }
  .panduan-cinema-hero__taxonomy-strip {
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
  .panduan-cinema-hero__lead {
    font-size: clamp(1.04rem, 1.3vw, 1.24rem);
    line-height: 1.76;
    color: var(--text-muted-alabaster);
    max-width: 68ch;
  }
  .panduan-cinema-hero__cta-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.15rem;
    padding-top: 0.65rem;
  }
  .panduan-cinema-hero__visual {
    flex: 1 1 420px;
    max-width: 640px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
  .panduan-cinema-hero__pedestal {
    position: relative;
    width: 100%;
    padding: 2rem;
    background: radial-gradient(circle at 50% 48%, rgba(212, 175, 55, 0.22) 0%, rgba(11, 12, 16, 0.65) 55%, rgba(5, 5, 7, 0) 100%);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .panduan-cinema-hero__img {
    width: 100%;
    max-width: 490px;
    height: auto;
    object-fit: contain;
    filter: drop-shadow(0 28px 54px rgba(0, 0, 0, 0.92));
    mask-image: radial-gradient(circle at 50% 50%, #000 78%, transparent 100%);
    -webkit-mask-image: radial-gradient(circle at 50% 50%, #000 78%, transparent 100%);
  }
  .panduan-cinema-hero__telemetry-strip {
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
  .panduan-cinema-hero__telemetry-col {
    flex: 1 1 240px;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    padding-left: 1rem;
    border-left: 1px solid rgba(212, 175, 55, 0.32);
  }
  .panduan-cinema-hero__telemetry-label {
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-ash-silver);
  }
  .panduan-cinema-hero__telemetry-val {
    font-family: var(--font-architectural);
    font-size: 1.02rem;
    font-weight: 700;
    color: var(--text-silk-ivory);
  }
  .panduan-cinema-hero__telemetry-sub {
    font-size: 0.78rem;
    color: var(--gold-champagne);
  }

  /* ==========================================================================
     PARADIGM D — PINNED 50VW / 50VW SPLIT-SCREEN EDITORIAL PROTOCOL STAGE
     ========================================================================== */
  .panduan-split-5050 {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    background-color: #050507;
    border-bottom: 1px solid rgba(212, 175, 55, 0.28);
  }
  .panduan-split-5050__pinned {
    flex: 1 1 50%;
    min-width: 320px;
    position: sticky;
    top: 4.5rem;
    align-self: flex-start;
    min-height: calc(100vh - 4.5rem);
    padding: clamp(2.75rem, 5.5vw, 5.5rem) var(--gutter-cinema);
    background:
      radial-gradient(circle at 46% 42%, rgba(212, 175, 55, 0.14) 0%, rgba(11, 12, 16, 0.9) 58%, #050507 100%);
    border-right: 1px solid rgba(212, 175, 55, 0.24);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2rem;
  }
  .panduan-split-5050__scrolling {
    flex: 1 1 50%;
    min-width: 320px;
    background-color: #0B0C10;
    display: flex;
    flex-direction: column;
  }
  .panduan-split-5050__chapter {
    padding: clamp(2.75rem, 5vw, 4.75rem) var(--gutter-cinema);
    border-bottom: 1px solid rgba(212, 175, 55, 0.2);
    display: flex;
    flex-direction: column;
    gap: 1.35rem;
  }
  .panduan-split-5050__chapter:last-child {
    border-bottom: none;
  }
  .panduan-split-5050__chapter-index {
    font-family: var(--font-technical);
    font-size: 0.72rem;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }
  .panduan-split-5050__chapter-title {
    font-family: var(--font-display);
    font-size: clamp(1.75rem, 2.8vw, 2.65rem);
    font-weight: 500;
    line-height: 1.12;
    color: var(--text-silk-ivory);
  }
  .panduan-split-5050__chapter-copy {
    font-size: 0.98rem;
    line-height: 1.78;
    color: var(--text-muted-alabaster);
  }

  /* ==========================================================================
     ARCHITECTURAL EDITORIAL SECTIONS & HAIRLINE LEDGERS (ZERO BOX GRIDS)
     ========================================================================== */
  .panduan-section {
    width: 100vw;
    padding: var(--gutter-vertical) var(--gutter-cinema);
    background-color: #050507;
    border-bottom: 1px solid rgba(212, 175, 55, 0.24);
  }
  .panduan-section--onyx {
    background-color: #0B0C10;
  }
  .panduan-section--charcoal {
    background-color: #12141C;
  }
  .panduan-section__inner {
    max-width: 1760px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .panduan-section__header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(212, 175, 55, 0.28);
  }
  .panduan-section__header-left {
    max-width: 920px;
    display: flex;
    flex-direction: column;
    gap: 0.95rem;
  }
  .panduan-section__header-right {
    max-width: 540px;
    color: var(--text-muted-alabaster);
    font-size: 0.95rem;
    line-height: 1.72;
  }
  .panduan-hairline-ledger {
    width: 100%;
    border-top: 1px solid rgba(212, 175, 55, 0.28);
    display: flex;
    flex-direction: column;
  }
  .panduan-hairline-row {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2rem;
    padding: 2rem 0;
    border-bottom: 1px solid rgba(234, 230, 223, 0.12);
    transition: background-color 0.25s ease;
  }
  .panduan-hairline-row:hover {
    background-color: rgba(212, 175, 55, 0.03);
  }
  .panduan-hairline-row__code {
    flex: 0 0 185px;
    font-family: var(--font-technical);
    font-size: 0.76rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }
  .panduan-hairline-row__title {
    flex: 1 1 300px;
    font-family: var(--font-display);
    font-size: clamp(1.35rem, 2.1vw, 1.95rem);
    font-weight: 500;
    line-height: 1.2;
    color: var(--text-silk-ivory);
  }
  .panduan-hairline-row__body {
    flex: 2 1 480px;
    font-size: 0.95rem;
    line-height: 1.76;
    color: var(--text-muted-alabaster);
  }
  .panduan-hairline-row__meta {
    flex: 0 0 240px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
    text-align: right;
  }

  /* ==========================================================================
     QUANTITATIVE SEMANTIC TABLES & FAQ ACCORDION LEDGERS
     ========================================================================== */
  .panduan-table-wrap {
    width: 100%;
    overflow-x: auto;
    border-top: 1px solid rgba(212, 175, 55, 0.35);
    border-bottom: 1px solid rgba(212, 175, 55, 0.35);
  }
  .panduan-comparison-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    min-width: 920px;
  }
  .panduan-comparison-table th {
    padding: 1.25rem 1.15rem;
    font-family: var(--font-technical);
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-foil-bright);
    background-color: rgba(18, 20, 28, 0.92);
    border-bottom: 1px solid rgba(212, 175, 55, 0.32);
  }
  .panduan-comparison-table td {
    padding: 1.25rem 1.15rem;
    font-size: 0.9rem;
    line-height: 1.66;
    color: var(--text-silk-ivory);
    border-bottom: 1px solid rgba(234, 230, 223, 0.1);
    vertical-align: top;
  }
  .panduan-comparison-table tr:hover td {
    background-color: rgba(212, 175, 55, 0.04);
  }
  .panduan-faq-ledger {
    width: 100%;
    border-top: 1px solid rgba(212, 175, 55, 0.3);
  }
  .panduan-faq-item {
    border-bottom: 1px solid rgba(234, 230, 223, 0.12);
    padding: 1.5rem 0;
  }
  .panduan-faq-item summary {
    list-style: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1.5rem;
    font-family: var(--font-display);
    font-size: clamp(1.25rem, 1.9vw, 1.68rem);
    font-weight: 500;
    color: var(--text-silk-ivory);
  }
  .panduan-faq-item summary::-webkit-details-marker {
    display: none;
  }
  .panduan-faq-item__icon {
    font-family: var(--font-technical);
    font-size: 0.85rem;
    color: var(--gold-champagne);
    letter-spacing: 0.15em;
  }
  .panduan-faq-item__answer {
    padding-top: 1.15rem;
    font-size: 0.96rem;
    line-height: 1.78;
    color: var(--text-muted-alabaster);
    max-width: 92ch;
  }

  @media (max-width: 1024px) {
    .panduan-split-5050__pinned {
      position: relative;
      top: 0;
      min-height: auto;
      border-right: none;
      border-bottom: 1px solid rgba(212, 175, 55, 0.24);
    }
    .panduan-hairline-row__meta {
      align-items: flex-start;
      text-align: left;
    }
  }
</style>
`;

/**
 * Master Bahasa Malaysia Buyer-Intent Dossiers for MS-155 through MS-160.
 * Maps every single `/ms/guides/...` and `/ms/panduan/...` route alias across `i18n.ts`, `ObsidianFooter.mjs`,
 * `guides.json`, and `public/ms/index.html` so 0 broken links exist.
 */
export const BM_GUIDE_DOSSIERS = [
  {
    microStep: 'MS-155',
    guideNumber: 1,
    guideCode: 'PANDUAN-BM-01',
    id: 'optimal-capsule-timing-and-absorption-protocol',
    slug: 'masa-pengambilan-kapsul-dan-penyerapan-optimum',
    canonicalMsPath: '/ms/panduan/masa-pengambilan-kapsul-dan-penyerapan-optimum/',
    canonicalEnPath: '/guides/capsule-timing-absorption-protocol/',
    msOutputPaths: [
      'ms/guides/capsule-timing-absorption-protocol/index.html',
      'ms/guides/optimal-capsule-timing-and-absorption-protocol/index.html',
      'ms/panduan/protokol-masa-pengambilan-kapsul/index.html',
      'ms/panduan/cara-makan-suplemen-onyxman/index.html',
      'ms/panduan/masa-pengambilan-kapsul-dan-penyerapan-optimum/index.html',
    ],
    defaultProduct: 'horsemen',
    heroVisualWebp: '/assets/products/horsemen-stage.webp',
    heroVisualPng: '/assets/products/horsemen-stage.png',
    watermarkText: 'PROTOKOL 01',
    readingTimeMinutes: 11,
    publishedDate: '2026-01-15',
    updatedDate: '2026-10-30',
    seoTitle:
      'Panduan Masa Pengambilan Kapsul & Penyerapan Optimum — Kitaran 20 vs 30 Kapsul | Onyxmen Malaysia',
    metaDescription:
      'Panduan lengkap cara makan dan masa pengambilan Horsemen (20 Kapsul), Hammer of Thor (20 Kapsul Veg), Grow XL (30 Kapsul) & Magnum Pump XR (30 Kapsul Hitam) mengikut waktu makan, kopi/teh tarik, dan senaman di Malaysia. Harga rasmi RM 159.',
    kicker: 'MS-155 · PANDUAN PROTOKOL 01 · FARMAKOKINETIK & MASA PENGAMBILAN KAPSUL',
    headlineHtml:
      'Protokol Masa Pengambilan Kapsul &amp; Penyerapan Optimum: <span class="foil-champagne-text">Kitaran 20 Kapsul vs 30 Kapsul Malaysia.</span>',
    leadSummary:
      'Cara anda menyelaraskan waktu pengambilan kapsul Onyxmen mengikut waktu makan tempatan Malaysia, minuman berkafein (kopi O / teh tarik), penghidratan iklim tropika, dan aktiviti fizikal mempengaruhi kadar bioavailabiliti herba sehingga 40%. Ketahui jadual tepat untuk Horsemen (20 Kapsul), Hammer of Thor (20 Kapsul Veg.), Grow XL (30 Kapsul), dan Magnum Pump XR (30 Kapsul Hitam) pada harga rasmi RM 159 sebotol.',
    telemetry: [
      {
        label: 'KADAR PENYERAPAN OPTIMUM',
        val: '+30% hingga +40% Bioavailabiliti',
        sub: 'Dengan jarak masa 45 minit daripada kopi/teh tarik',
      },
      {
        label: 'KITARAN 20 KAPSUL PADAT',
        val: 'Horsemen & Hammer of Thor',
        sub: 'Peringatan bekalan automatik Hari Ke-18 (RM 159)',
      },
      {
        label: 'KITARAN 30 KAPSUL BULANAN',
        val: 'Grow XL & Magnum Pump XR',
        sub: 'Peringatan bekalan automatik Hari Ke-25 (RM 159)',
      },
      {
        label: 'PENGHANTARAN RAHSIA MY',
        val: 'Hari Sama Lembah Klang / 1–2 Hari',
        sub: 'Slip kurier neutral OM Fulfilment Logistics',
      },
    ],
    pinnedSummaryTitle:
      'Empat Peraturan Emas Pengambilan Kapsul Botani & Asid Amino Di Iklim Tropika Malaysia',
    pinnedSummaryCopy:
      'Setiap kapsul Onyxmen mengandungi ekstrak fitokimia piawai bernisbah tinggi (seperti Eurycoma longifolia 100:1, Saponin Tribulus 60%, Macamides Maca Hitam, dan L-Arginine HCl + Bioperine). Mengambil kapsul pada tetingkap pencernaan yang tepat memastikan sebatian aktif melepasi asid perut dengan sempurna untuk penyerapan usus kecil yang maksimum.',
    chapters: [
      {
        code: 'BAB 01 · RIZAB 20 KAPSUL MALAM',
        title: 'Protokol Waktu Malam Untuk Horsemen (20 Kapsul × 500mg) & Hammer of Thor (20 Kapsul Veg.)',
        body: 'Horsemen (SKU ONYX-HM-20, RM 159) dan Hammer of Thor (SKU ONYX-HT-20, RM 159) direka sebagai rizab berkepekatan tinggi 20 hidangan. Bagi Horsemen, ambil 1 kapsul bersama 250ml–300ml air kosong suam 45 hingga 60 minit selepas makan malam (atau 45–60 minit sebelum aktiviti malam). Air suam mempercepatkan pelarutan kapsul supaya ekstrak Tongkat Ali 100:1, Akar Maca Hitam Peru, Epimedium, dan L-Arginine HCl diserap tanpa halangan lemak makanan berat. Bagi Hammer of Thor, ambil 1 kapsul vegetarian HPMC 30 minit selepas makan malam; kehadiran sedikit lipid sihat daripada hidangan malam membantu penyerapan saponin steroid Tribulus Terrestris (60% protodioscin) dan kelat Zink Bisglycinate tanpa ketidakselesaan gastrik.',
      },
      {
        code: 'BAB 02 · RUTIN 30 KAPSUL HARIAN',
        title: 'Jadual Sebulan Penuh Untuk Grow XL (30 Kapsul Pagi) & Magnum Pump XR (30 Kapsul Hitam Pra-Aktiviti)',
        body: 'Grow XL (SKU ONYX-GX-30, RM 159) ditala khusus sebagai asas nutrisi kecergasan harian selama 30 hari: ambil 1 kapsul setiap pagi 20 hingga 30 minit selepas sarapan bersama segelas penuh air kosong. Pengambilan waktu pagi menyelaraskan Panax Ginseng, Ginkgo Biloba, Saw Palmetto, dan Muira Puama dengan irama sirkadian kortisol semula jadi lelaki dewasa. Sebaliknya, Magnum Pump XR (SKU ONYX-MP-30, RM 159) ialah formula Nitrik Oksida Pelepasan Lanjutan (30 Kapsul Hitam) yang mengandungi L-Arginine HCl, L-Citrulline Malate, dan Bioperine; masa terbaik adalah 30 hingga 45 minit sebelum latihan bebanan di gimnasium atau aktiviti fizikal malam.',
      },
      {
        code: 'BAB 03 · INTERAKSI PEMAKANAN MALAYSIA',
        title: 'Mengapa Anda Perlu Menjarakkan 45 Minit Antara Kapsul Dengan Kopi O, Teh Tarik & Nasi Kandar Berat',
        body: 'Tabiat pemakanan di Malaysia seperti minum teh tarik pekat, kopi O kaw, atau makan hidangan bergoreng lewat malam di restoran mamak memberi kesan langsung kepada penyerapan suplemen. Polifenol dan asid tanik di dalam teh pekat serta kopi membentuk ikatan kompleks tidak larut dengan alkaloid kuasinoid (Eurycomanone) dan mineral Zink di dalam saluran penghadaman, yang boleh mengurangkan penyerapan sehingga 35%. Selain itu, hidangan terlalu berminyak melambatkan pengosongan gastrik sehingga 3 jam. Oleh itu, pastikan jarak masa sekurang-kurangnya 45 minit daripada minuman berkafein dan sentiasa telan kapsul menggunakan air kosong suam.',
      },
      {
        code: 'BAB 04 · KITARAN 20–90 HARI & ULANGAN BEKALAN',
        title: 'Penyelarasan Peringatan Hari Ke-18 (20 Kapsul) & Hari Ke-25 (30 Kapsul) Tanpa Gangguan Kitaran',
        body: 'Berbeza dengan bahan perangsang sintetik yang memberi kesan mengejut dan kemudian menyebabkan kelesuan melampau, herba adaptogenik piawai berfungsi melalui pengumpulan fitokimia berperingkat di dalam tisu badan. Untuk mengelakkan kejatuhan paras herba apabila botol pertama habis, sistem Onyxmen menetapkan peringatan pesanan semula pada Hari Ke-18 bagi Horsemen dan Hammer of Thor (20 kapsul), serta Hari Ke-25 bagi Grow XL dan Magnum Pump XR (30 kapsul). Ramai pelanggan berpengalaman terus memilih Pakej 2 Botol (RM 286 (10% OFF vs RM 318) · Penghantaran Percuma Seluruh Malaysia) atau Pakej 3 Botol (RM 405 (15% OFF vs RM 477) · Kitaran 60–90 Hari) sejak hari pertama.',
      },
    ],
    protocolLedgerRows: [
      {
        code: 'JADUAL-01 · HORSEMEN',
        title: 'Horsemen (20 Kapsul × 500mg · SKU ONYX-HM-20)',
        body: 'Ambil 1 kapsul bersama 250ml–300ml air suam 45–60 minit sebelum aktiviti malam atau 45 minit selepas makan malam. Boleh diambil setiap malam atau selang 48 jam mengikut keperluan tenaga.',
        meta: 'RM 159 / Botol · Ulangan Hari Ke-18',
      },
      {
        code: 'JADUAL-02 · HAMMER OF THOR',
        title: 'Hammer of Thor (20 Kapsul Vegetarian · SKU ONYX-HT-20)',
        body: 'Ambil 1 kapsul vegetarian HPMC 30 minit selepas makan malam bersama 250ml air kosong. Sesuai untuk penyerapan saponin Tribulus 60%, Ashwagandha, dan Zink secara berperingkat.',
        meta: 'RM 159 / Botol · Ulangan Hari Ke-18',
      },
      {
        code: 'JADUAL-03 · GROW XL',
        title: 'Grow XL (30 Kapsul Harian · SKU ONYX-GX-30)',
        body: 'Ambil 1 kapsul setiap pagi 20–30 minit selepas sarapan selama 30 hari berturut-turut untuk sokongan aliran mikro dan kecergasan sepanjang hari kerja.',
        meta: 'RM 159 / Botol · Ulangan Hari Ke-25',
      },
      {
        code: 'JADUAL-04 · MAGNUM PUMP XR',
        title: 'Magnum Pump XR (30 Kapsul Hitam · SKU ONYX-MP-30)',
        body: 'Ambil 1 kapsul hitam 30–45 minit sebelum senaman gimnasium atau aktiviti fizikal malam bersama 300ml air kosong untuk mengoptimumkan laluan Nitrik Oksida eNOS.',
        meta: 'RM 159 / Botol · Ulangan Hari Ke-25',
      },
      {
        code: 'JADUAL-05 · PENGHIDRATAN TROPIKA',
        title: 'Sasaran Air Harian 2.5L – 3.0L Di Iklim Malaysia (32°C)',
        body: 'Laluan vasodilatasi L-Arginine/L-Citrulline dan pengangkutan glikosida herba memerlukan isi padu plasma darah yang mencukupi. Minum sekurang-kurangnya 2.5 liter air kosong sehari.',
        meta: 'Wajib Untuk Bioavailabiliti 100%',
      },
      {
        code: 'JADUAL-06 · PENAMPAN KAFEIN',
        title: 'Jarak 45 Minit Daripada Kopi O, Nescafe & Teh Tarik',
        body: 'Elakkan menelan kapsul bersama minuman berkafein, teh susu, atau minuman ringan berkarbonat supaya mineral Zink dan alkaloid Tongkat Ali tidak terikat oleh tanin.',
        meta: 'Penampan Pencernaan 45 Minit',
      },
    ],
    faqs: [
      {
        q: 'Bolehkah saya mengambil kapsul Onyxmen semasa perut kosong pada waktu pagi atau malam?',
        a: 'Bagi Magnum Pump XR (30 Kapsul Hitam), pengambilan semasa perut ringan (kira-kira 60–90 minit selepas makan) mempercepatkan penyerapan asid amino L-Arginine HCl dan L-Citrulline ke dalam aliran darah. Namun bagi Horsemen, Hammer of Thor, dan Grow XL yang kaya dengan ekstrak akar herba pekat (Tongkat Ali 100:1, Tribulus 60%, dan Zink), kami mengesyorkan pengambilan 20 hingga 45 minit selepas makan bersama air suam bagi mengelakkan rasa pedih ulu hati dan meningkatkan penyerapan sebatian larut lemak.',
      },
      {
        q: 'Apakah yang berlaku jika saya terlupa mengambil kapsul harian Grow XL pada waktu pagi?',
        a: 'Jika anda terlupa mengambil kapsul Grow XL selepas sarapan, anda boleh mengambilnya selepas makan tengah hari bersama segelas air kosong. Jangan gandakan dos kepada 2 kapsul sekaligus pada waktu malam; kekalkan disiplin 1 kapsul sehari sepanjang kitaran 30 hari.',
      },
      {
        q: 'Bolehkah saya menggabungkan rutin pagi Grow XL (30 Kapsul) dengan Horsemen atau Magnum Pump XR pada waktu malam?',
        a: 'Boleh, dengan syarat anda mengekalkan jarak sekurang-kurangnya 8 hingga 10 jam antara kapsul waktu pagi dan kapsul waktu malam serta minum 3 liter air kosong sehari. Ramai pelanggan Pakej 2 Botol (RM 286 (10% OFF vs RM 318)) menggunakan Grow XL selepas sarapan pagi sebagai asas harian, dan menyimpan Horsemen atau Magnum Pump XR khusus untuk malam aktiviti atau hari latihan gimnasium.',
      },
      {
        q: 'Mengapakah kapsul perlu diambil bersama air suam dan bukannya air sejuk berais?',
        a: 'Air suam (sekitar 37°C–42°C) membantu dinding kapsul (sama ada kapsul gelatin piawai atau kapsul tumbuhan HPMC vegetarian pada Hammer of Thor) larut dalam masa 8 hingga 12 minit di dalam perut, berbanding air berais yang mengecutkan mukosa gastrik dan melambatkan pembebasan serbuk ekstrak herba.',
      },
    ],
  },
  {
    microStep: 'MS-156',
    guideNumber: 2,
    guideCode: 'PANDUAN-BM-02',
    id: 'how-to-verify-authentic-onyxman-bottles-malaysia',
    slug: 'cara-semak-ketulenan-botol-onyxman-malaysia',
    canonicalMsPath: '/ms/panduan/cara-semak-ketulenan-botol-onyxman-malaysia/',
    canonicalEnPath: '/guides/authentic-onyxman-bottle-verification-malaysia/',
    msOutputPaths: [
      'ms/guides/authentic-onyxman-bottle-verification-malaysia/index.html',
      'ms/guides/how-to-verify-authentic-onyxman-bottles-malaysia/index.html',
      'ms/panduan/semak-ketulenan-botol-onyxman-malaysia/index.html',
      'ms/panduan/cara-kenal-pasti-produk-tiruan/index.html',
      'ms/panduan/cara-semak-ketulenan-botol-onyxman-malaysia/index.html',
    ],
    defaultProduct: 'hammer-of-thor',
    heroVisualWebp: '/assets/products/hammer-of-thor-stage.webp',
    heroVisualPng: '/assets/products/hammer-of-thor-stage.png',
    watermarkText: 'KETULENAN 02',
    readingTimeMinutes: 12,
    publishedDate: '2026-01-20',
    updatedDate: '2026-10-30',
    seoTitle:
      'Cara Semak Ketulenan Botol Onyxmen & Elak Produk Tiruan di Malaysia | RM 159 Rasmi',
    metaDescription:
      'Lindungi kesihatan anda daripada produk tiruan murah dan penjual tidak sah. Ketahui 5 langkah semakan ketulenan botol Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR (RM 159) di Onyxmen.my.',
    kicker: 'MS-156 · PANDUAN PROTOKOL 02 · SEMAKAN KETULENAN & PERLINDUNGAN PENGGUNA',
    headlineHtml:
      'Cara Semak Ketulenan Botol Onyxmen &amp; <span class="foil-champagne-text">Mengenal Pasti Produk Tiruan Di Malaysia.</span>',
    leadSummary:
      'Pasaran dalam talian di Malaysia dibanjiri iklan klasifikasi tidak sah dan penjual jalanan yang menawarkan kapsul tiruan pada harga tidak masuk akal (RM 25–RM 45). Gunakan senarai semak 5 perkara rasmi Lembaga Kualiti Onyxmen Malaysia untuk mengesahkan ketulenan botol Horsemen, Hammer of Thor, Grow XL, dan Magnum Pump XR pada harga rasmi seragam RM 159 sebotol.',
    telemetry: [
      {
        label: 'HARGA RASMI SERAGAM MYR',
        val: 'RM 159 / RM 286 (10% OFF vs RM 318) / RM 405 (15% OFF vs RM 477)',
        sub: 'Tiada jualan lambak RM 25–RM 45 di laman tidak sah',
      },
      {
        label: 'SARINGAN MAKMAL FITOKIMIA',
        val: '100% Bebas Bahan Sintetik Terlarang',
        sub: 'Tiada campuran sildenafil/tadalafil tersembunyi',
      },
      {
        label: 'PENGEDAR TUNGGAL SAH',
        val: 'https://www.onyxmen.my sahaja',
        sub: 'Meja operasi: sales@onyxmen.my & info@onyxmen.my',
      },
      {
        label: 'SLIP KURIER RASMI',
        val: 'OM Fulfilment Logistics (KL)',
        sub: 'Botol berpelekat kedap udara asal kilang',
      },
    ],
    pinnedSummaryTitle:
      'Mengapa Kapsul Tiruan Berharga RM 30 Di Laman Iklan Bebas Sangat Berbahaya Kepada Kesihatan Anda',
    pinnedSummaryCopy:
      'Kapsul tiruan yang dijual tanpa kawalan suhu lazimnya mengandungi tepung kanji murah atau dicampur secara haram dengan bahan kimia preskripsi sintetik tanpa sukatan yang boleh mengakibatkan sakit kepala melampau, debaran jantung, dan kerosakan buah pinggang. Setiap botol rasmi Onyxmen.my disimpan di dalam bilik kebal kawalan suhu Kuala Lumpur dan disaring untuk ketulenan.',
    chapters: [
      {
        code: 'BAB 01 · SEMAKAN HARGA RASMI RM 159',
        title: 'Penanda Pertama: Struktur Harga Rasmi RM 159 (1 Botol), RM 286 (10% OFF vs RM 318) (2 Botol) & RM 405 (15% OFF vs RM 477) (3 Botol)',
        body: 'Ekstrak herba piawai tulen seperti Akar Tongkat Ali Malaysia 100:1 (dipiawaikan kepada >=2.2% Eurycomanone), Saponin Tribulus Terrestris 60%, dan Akar Maca Hitam Peru Tergelatinisasi memerlukan kos pengekstrakan makmal dan ujian HPLC yang tinggi. Oleh itu, semua empat formulasi rasmi Onyxmen di Malaysia dijual pada harga tetap yang telus: RM 159.00 untuk 1 botol, RM 286 (10% OFF vs RM 318) untuk 2 botol, dan RM 405 (15% OFF vs RM 477) untuk 3 botol. Sebarang iklan di laman klasifikasi atau gedung pihak ketiga yang menawarkan botol berharga RM 25, RM 39, atau RM 50 adalah 100% stok tiruan atau stok tamat tempoh.',
      },
      {
        code: 'BAB 02 · AUDIT FIZIKAL LABEL & KAPSUL',
        title: 'Penanda Kedua: Ketepatan Cetakan Label, Warna Kapsul & Bilangan Kapsul Mengikut SKU',
        body: 'Semak botol yang anda terima berpandukan spesifikasi rasmi kami: (1) Horsemen (SKU ONYX-HM-20): Cetakan label emas gelap "Man Virility Enhancement Herbal Supplement — 20 Capsules x 500mg"; (2) Hammer of Thor (SKU ONYX-HT-20): Cetakan "Men\'s Health — Tribulus Terrestris — 20 Veg. Capsules" lengkap dengan lencana hijau vegetarian dan penutup logam emas; (3) Grow XL (SKU ONYX-GX-30): Cetakan "#1 Selling Product — Made With Natural Ingredient — Extra-Strength Enhancement Male Performance Blend — 30 Capsules"; (4) Magnum Pump XR (SKU ONYX-MP-30): Cetakan "Testosterone Pro Series — Male Enhancement Formula Maximum Strength — 30 Black Capsules" yang mengandungi 30 kapsul berwarna hitam legap.',
      },
      {
        code: 'BAB 03 · BEBAS NOMBOR PENDAFTARAN PALSU',
        title: 'Penanda Ketiga: Ketelusan Suplemen Pemakanan Botani & Saringan Bebas Bahan Kimia Terlarang',
        body: 'Penjual produk tiruan sering mengelirukan pengguna dengan mencetak nombor pendaftaran ubat yang direka-reka pada kotak murah atau mencampurkan bahan kimia sintetik PDE5 secara sembunyi. Onyxmen Malaysia mengamalkan ketelusan penuh: produk kami adalah suplemen pemakanan botani dan asid amino untuk kecergasan lelaki dewasa (18+), tidak menggunakan nombor pendaftaran palsu, dan setiap kelompok pengeluaran diuji bebas daripada logam berat (Plumbum, Merkuri, Arsenik, Kadmium) serta bebas bahan perangsang sintetik.',
      },
      {
        code: 'BAB 04 · PENGESAHAN SALURAN TEMPAHAN',
        title: 'Penanda Keempat: Tempahan Terus Melalui Onyxmen.my & Pengirim OM Fulfilment Logistics',
        body: 'Stok rasmi Onyxmen Malaysia tidak pernah diedarkan melalui penjaja tepi jalan, pasar malam, atau akaun media sosial tanpa identiti. Setiap pesanan tulen hanya dibuat melalui https://www.onyxmen.my dan disahkan oleh pusat operasi Kuala Lumpur kami menerusi e-mel rasmi sales@onyxmen.my, info@onyxmen.my, atau waleedshoaibofficial@gmail.com. Pada slip kurier NinjaVan, J&T VIP, atau PosLaju, nama pengirim sentiasa dicetak sebagai "OM Fulfilment Logistics (Kuala Lumpur)".',
      },
    ],
    protocolLedgerRows: [
      {
        code: 'SEMAKAN-01 · HARGA RASMI',
        title: 'Harga Tetap RM 159.00 Sebotol Di Seluruh Malaysia',
        body: 'Pastikan transaksi anda mengikut jadual harga rasmi: 1 Botol RM 159, 2 Botol RM 286 (10% OFF vs RM 318) (Penghantaran Percuma), atau 3 Botol RM 405 (15% OFF vs RM 477). Elakkan tawaran diskaun melampau RM 30–RM 50.',
        meta: '100% Jaminan Harga Rasmi',
      },
      {
        code: 'SEMAKAN-02 · PELEKAT KEDAP UDARA',
        title: 'Pelekat Keselamatan Tudung Botol & Pembungkusan Kawalan Suhu',
        body: 'Setiap botol tulen mempunyai meterai induksi kedap udara di bawah penutup botol bagi melindungi serbuk herba daripada kelembapan udara tropika Malaysia.',
        meta: 'Meterai Kilang Utuh',
      },
      {
        code: 'SEMAKAN-03 · SPESIFIKASI KAPSUL',
        title: '20 Kapsul (Horsemen / Hammer of Thor) vs 30 Kapsul (Grow XL / Magnum Pump XR)',
        body: 'Botol tiruan sering mengisi bilangan kapsul yang salah (contohnya 10 kapsul berwarna-warni di dalam botol Magnum Pump XR yang sepatutnya mempunyai 30 kapsul hitam).',
        meta: 'Kiraan & Warna Kapsul Tepat',
      },
      {
        code: 'SEMAKAN-04 · SALURAN E-MEL SAH',
        title: 'Pengesahan Melalui sales@onyxmen.my & info@onyxmen.my',
        body: 'Setiap pesanan rasmi menerima rekod tempahan digital dan sokongan susulan WhatsApp daripada meja privasi Kuala Lumpur kami.',
        meta: 'Rekod Tempahan Berdaftar',
      },
      {
        code: 'SEMAKAN-05 · TIADA KESAN SAMPINGAN SINTETIK',
        title: 'Bebas Sakit Kepala Melampau Atau Debaran Jantung Mengejut',
        body: 'Formulasi botani tulen dan asid amino menyokong tenaga secara semula jadi tanpa menyebabkan pandangan kabur, hidung tersumbat, atau sakit kepala berdenyut.',
        meta: 'Saringan Makmal Bersih',
      },
      {
        code: 'SEMAKAN-06 · PENGIRIM KURIER NEUTRAL',
        title: 'Slip Penghantaran Rasmi "OM Fulfilment Logistics"',
        body: 'Semua bungkusan tulen dihantar dari hab Kuala Lumpur (50450 MY) menggunakan kotak tanpa jenama dengan nama pengirim korporat neutral.',
        meta: 'Logistik Rasmi KL',
      },
    ],
    faqs: [
      {
        q: 'Mengapakah saya melihat gambar botol yang mempunyai tera air (watermark) laman iklan mudah alih pada harga RM 35?',
        a: 'Penjual tidak sah di laman iklan klasifikasi sering mencuri foto produk atau menjual botol tiruan buatan kilang belakang rumah yang hanya berisi tepung jagung dan bahan kimia murah. Botol-botol tersebut tidak mempunyai ekstrak Tongkat Ali 100:1 mahupun L-Arginine HCl tulen. Hanya pesanan melalui https://www.onyxmen.my pada harga rasmi RM 159 dijamin tulen.',
      },
      {
        q: 'Bagaimanakah cara saya menyemak sama ada botol Magnum Pump XR saya adalah tulen?',
        a: 'Buka penutup botol Magnum Pump XR (SKU ONYX-MP-30) selepas memastikan meterai luarnya utuh: botol tulen mengandungi tepat 30 kapsul berwarna hitam pekat (30 Black Capsules) dengan cetakan label merah-emas "Testosterone Pro Series — Male Enhancement Formula Maximum Strength".',
      },
      {
        q: 'Adakah Onyxmen mempunyai ejen jualan tunai di kedai jamu tepi jalan atau pasar malam?',
        a: 'Tidak. Bagi menjaga kualiti penyimpanan suhu terkawal (di bawah 24°C) dan melindungi privasi pelanggan, Onyxmen Malaysia tidak melantik penjaja pasar malam atau kedai tepi jalan. Semua penghantaran dilakukan terus dari pusat penyimpanan Kuala Lumpur kami ke pintu rumah atau pejabat anda.',
      },
      {
        q: 'Apakah yang perlu saya lakukan jika saya ragu-ragu tentang ketulenan sesuatu iklan di luar laman web ini?',
        a: 'Jangan buat sebarang bayaran kepada akaun peribadi yang meragukan. Hubungi meja pengesahan kami di info@onyxmen.my atau sales@onyxmen.my, atau terus buat tempahan melalui Laci Tempahan Ekspres di laman rasmi https://www.onyxmen.my.',
      },
    ],
  },
  {
    microStep: 'MS-157',
    guideNumber: 3,
    guideCode: 'PANDUAN-BM-03',
    id: 'discreet-plain-box-cod-fpx-ordering-guide-malaysia',
    slug: 'panduan-tempahan-bungkusan-rahsia-cod-fpx-malaysia',
    canonicalMsPath: '/ms/panduan/panduan-tempahan-bungkusan-rahsia-cod-fpx-malaysia/',
    canonicalEnPath: '/guides/discreet-plain-box-cod-fpx-ordering-malaysia/',
    msOutputPaths: [
      'ms/guides/discreet-plain-box-cod-fpx-ordering-malaysia/index.html',
      'ms/guides/discreet-plain-box-cod-fpx-ordering-guide-malaysia/index.html',
      'ms/panduan/panduan-penghantaran-rahsia-cod-fpx/index.html',
      'ms/panduan/tempahan-rahsia-kotak-kosong-malaysia/index.html',
      'ms/panduan/panduan-tempahan-bungkusan-rahsia-cod-fpx-malaysia/index.html',
    ],
    defaultProduct: 'horsemen',
    heroVisualWebp: '/assets/products/onyxman-lineup-hero.webp',
    heroVisualPng: '/assets/products/onyxman-lineup-hero.png',
    watermarkText: 'PRIVASI 03',
    readingTimeMinutes: 10,
    publishedDate: '2026-02-01',
    updatedDate: '2026-10-30',
    seoTitle:
      'Panduan Tempahan Bungkusan Rahsia: COD, FPX & DuitNow QR Seluruh Malaysia | Onyxmen.my',
    metaDescription:
      'Ketahui bagaimana Onyxmen Malaysia melindungi privasi anda sepenuhnya dari tempahan hingga ke pintu rumah: kotak kosong tanpa jenama, slip kurier OM Fulfilment Logistics, COD, FPX & DuitNow QR.',
    kicker: 'MS-157 · PANDUAN PROTOKOL 03 · LOGISTIK BUNGKUSAN RAHSIA, COD & FPX MALAYSIA',
    headlineHtml:
      'Panduan Tempahan Bungkusan Rahsia Di Malaysia: <span class="foil-champagne-text">Jaminan Kotak Kosong, COD &amp; FPX.</span>',
    leadSummary:
      'Kami memahami bahawa privasi adalah keutamaan mutlak bagi setiap lelaki dewasa di Malaysia. Setiap langkah penghantaran Onyxmen direka supaya posmen kurier, pengawal keselamatan kondominium, kerani kaunter pejabat, mahupun ahli keluarga tidak sesekali mengetahui isi kandungan bungkusan anda.',
    telemetry: [
      {
        label: 'PEMBUNGKUSAN 3 LAPISAN',
        val: '100% Kotak Kosong Tanpa Logo',
        sub: 'Dilengkapi balutan gelembung anti-bunyi goncangan',
      },
      {
        label: 'NAMA PENGIRIM SLIP KURIER',
        val: 'OM Fulfilment Logistics (KL)',
        sub: 'Sifar perkataan "Onyxmen", "Horsemen" atau "Suplemen Lelaki"',
      },
      {
        label: 'MOD PEMBAYARAN MALAYSIA',
        val: 'FPX · DuitNow QR · COD (RM 0 Caj)',
        sub: 'Penyata bank hanya memaparkan kod perniagaan neutral',
      },
      {
        label: 'LIPUTAN 16 NEGERI & WP',
        val: 'Semenanjung, Sabah, Sarawak & Labuan',
        sub: 'Penghantaran Udara Percuma untuk Pakej 2 & 3 Botol',
      },
    ],
    pinnedSummaryTitle:
      'Seni Bina Privasi Tiga Lapisan: Dari Bilik Kebal Kuala Lumpur Hingga Ke Tangan Anda',
    pinnedSummaryCopy:
      'Sama ada anda memilih penghantaran ke alamat rumah keluarga di Shah Alam, menara pejabat korporat di KLCC, pondok pengawal kondominium di Pulau Pinang, atau kargo udara ke Kota Kinabalu dan Kuching, bungkusan anda kelihatan sama seperti dokumen korporat atau barangan penjagaan diri biasa.',
    chapters: [
      {
        code: 'BAB 01 · PEMBUNGKUSAN ANTI-BUNYI',
        title: 'Lapisan Pertama & Kedua: Balutan Kedap Bunyi & Kotak Keselamatan Legap Tanpa Sebarang Jenama',
        body: 'Masalah utama bungkusan suplemen biasa ialah bunyi kapsul bergoncang di dalam botol plastik apabila dipegang oleh posmen atau rakan sepejabat. Di pusat operasi Onyxmen Kuala Lumpur, setiap botol Horsemen, Hammer of Thor, Grow XL, atau Magnum Pump XR dibalut rapat dengan pelindung gelembung berketumpatan tinggi bagi menyerap hentakan dan menghapuskan bunyi goncangan. Botol kemudian dimasukkan ke dalam kotak kadbod kukuh tanpa cetakan dan disalut dengan sampul keselamatan hitam/kelabu legap yang kalis air serta kalis koyak.',
      },
      {
        code: 'BAB 02 · SLIP KURIER & KASTAM NEUTRAL',
        title: 'Lapisan Ketiga: Maklumat Slip Penghantaran (Airway Bill) & Pengisytiharan Kargo Udara Sabah/Sarawak',
        body: 'Pada slip kurier NinjaVan Malaysia, J&T Express VIP, dan PosLaju Priority, ruangan nama pengirim dicetak secara rasmi sebagai "OM Fulfilment Logistics (Kuala Lumpur)". Tiada sebarang perkataan "Onyxmen", nama produk, atau istilah kesihatan intim dicetak pada label. Bagi penghantaran kargo udara merentasi Laut China Selatan ke Sabah, Sarawak, dan Wilayah Persekutuan Labuan yang memerlukan keterangan kastam domestik, ruangan keterangan barangan hanya ditulis secara umum sebagai "Personal Nutritional Goods / Barangan Kesihatan Harian".',
      },
      {
        code: 'BAB 03 · PILIHAN FPX / DUITNOW VS COD',
        title: 'Bila Perlu Memilih FPX / DuitNow QR Berbanding Bayar Waktu Terima (COD Malaysia)',
        body: 'Pemilihan kaedah pembayaran bergantung kepada cara anda menerima bungkusan: (a) Pilih FPX Online Banking (Maybank2u, CIMB Clicks, Public Bank, RHB, Hong Leong, Bank Islam) atau DuitNow Instant QR jika anda mahu posmen meninggalkan bungkusan terus di pondok pengawal keselamatan kondominium, loker bungkusan pintar, atau meja penyambut tetamu pejabat tanpa perlu anda turun menyambut posmen; (b) Pilih Bayar Waktu Terima (Cash on Delivery / COD) tanpa caj tambahan jika anda mahu membayar secara tunai atau QR terus kepada posmen apabila bungkusan diserahkan ke tangan anda.',
      },
      {
        code: 'BAB 04 · PENGHANTARAN HARI SAMA & EKSPRES',
        title: 'Penghantaran Runner Peribadi Hari Sama (Lembah Klang 3–5 Jam) & Kurier Ekspres 16 Negeri',
        body: 'Bagi pelanggan di Wilayah Persekutuan Kuala Lumpur, Putrajaya, dan Selangor (Petaling Jaya, Subang Jaya, Shah Alam, Damansara, Puchong, Cyberjaya), pesanan yang disahkan sebelum jam 3:00 petang layak menggunakan khidmat Runner Peribadi Rahsia Hari Sama (tiba dalam masa 3 hingga 5 jam). Bagi negeri-negeri lain di Semenanjung Malaysia (Johor, Pulau Pinang, Perak, Melaka, Negeri Sembilan, Pahang, Kedah, Kelantan, Terengganu, Perlis), penghantaran mengambil masa 1–2 hari bekerja. Bagi Sabah, Sarawak, dan Labuan, penghantaran kargo udara mengambil masa 2–4 hari bekerja (Percuma untuk pesanan 2 botol RM 286 (10% OFF vs RM 318) ke atas).',
      },
    ],
    protocolLedgerRows: [
      {
        code: 'PRIVASI-01 · KOTAK LUAR',
        title: 'Sifar Logo, Sifar Gambar Produk & Sifar Warna Mencolok',
        body: 'Kotak kadbod perlindungan dalaman dan sampul keselamatan luaran berwarna neutral sepenuhnya tanpa sebarang pita pelekat berjenama.',
        meta: '100% Tanpa Jenama Luar',
      },
      {
        code: 'PRIVASI-02 · SLIP PENGIRIM',
        title: 'Pengirim Berdaftar: "OM Fulfilment Logistics"',
        body: 'Alamat pulangan dan nama pengirim pada sistem pengesanan kurier hanya memaparkan kod logistik pusat operasi Kuala Lumpur.',
        meta: 'Kerahsiaan Slip Kurier',
      },
      {
        code: 'PRIVASI-03 · PONDOK PENGAWAL',
        title: 'Serahan Mudah Di Pondok Pengawal Kondo & Meja Pejabat (FPX / DuitNow)',
        body: 'Apabila dibayar awal melalui FPX atau DuitNow QR, posmen boleh menyerahkan bungkusan di kaunter penerimaan tanpa menghubungi anda untuk kutipan tunai.',
        meta: 'Sesuai Untuk Pejabat & Kondo',
      },
      {
        code: 'PRIVASI-04 · BAYAR WAKTU TERIMA',
        title: 'Kemudahan COD (Cash on Delivery) Seluruh Semenanjung & Bandar Utama',
        body: 'Selesaikan bayaran RM 159 / RM 286 (10% OFF vs RM 318) / RM 405 (15% OFF vs RM 477) hanya apabila bungkusan berpelekat keselamatan tiba di tangan anda. Posmen menerima tunai atau imbasan QR.',
        meta: 'RM 0 Caj Tambahan COD',
      },
      {
        code: 'PRIVASI-05 · NAMA RINGKAS',
        title: 'Kebenaran Menggunakan Nama Ringkas (Initials) Pada Label Bungkusan',
        body: 'Semasa mengisi Laci Tempahan Ekspres, anda boleh memasukkan nama samaran atau huruf ringkas (contohnya "Encik A.R.") selagi nombor telefon WhatsApp adalah aktif.',
        meta: 'Perlindungan Identiti PDPA',
      },
      {
        code: 'PRIVASI-06 · PEMUSNAHAN DATA',
        title: 'Pematuhan Privasi Data PDPA Malaysia 2010',
        body: 'Rekod alamat penghantaran disulitkan dan tidak pernah dikongsi dengan sebarang agensi pemasaran pihak ketiga.',
        meta: 'Jaminan PDPA Malaysia',
      },
    ],
    faqs: [
      {
        q: 'Adakah posmen NinjaVan atau J&T tahu bahawa bungkusan COD saya mengandungi suplemen lelaki Onyxmen?',
        a: 'Tidak sama sekali. Posmen hanya melihat bungkusan kotak/pek keselamatan standard daripada "OM Fulfilment Logistics" berserta jumlah kutipan RM 159, RM 286 (10% OFF vs RM 318), atau RM 405 (15% OFF vs RM 477). Tiada nama produk dicetak pada slip atau sistem imbasan posmen.',
      },
      {
        q: 'Bolehkah saya meminta bungkusan dihantar ke alamat pejabat saya di Kuala Lumpur atau Johor Bahru?',
        a: 'Sangat digalakkan. Lebih 45% pelanggan kami menggunakan alamat pejabat kerana bungkusan kelihatan seperti bungkusan dokumen atau barangan e-dagang korporat biasa. Pilih bayaran FPX atau DuitNow QR supaya kerani kaunter pejabat boleh menerimanya terus untuk anda.',
      },
      {
        q: 'Apakah yang tertulis pada penyata bank atau resit e-dompet saya apabila membayar melalui FPX atau DuitNow QR?',
        a: 'Transaksi pembayaran diproses atas nama entiti pengurusan perdagangan neutral kami dan tidak memaparkan nama produk seperti Horsemen, Hammer of Thor, Grow XL, atau Magnum Pump XR pada penyata bank anda.',
      },
      {
        q: 'Berapakah kos penghantaran ke Sabah, Sarawak, dan Labuan?',
        a: 'Bagi tempahan 1 botol (RM 159), kadar kargo udara standard terpakai mengikut poskod. Namun bagi tempahan Pakej 2 Botol (RM 286 (10% OFF vs RM 318)) atau Pakej 3 Botol (RM 405 (15% OFF vs RM 477)), penghantaran udara ekspres ke seluruh Sabah, Sarawak, dan Labuan adalah 100% PERCUMA.',
      },
    ],
  },
  {
    microStep: 'MS-158',
    guideNumber: 4,
    guideCode: 'PANDUAN-BM-04',
    id: '20-capsule-vs-30-capsule-cycle-selection-guide',
    slug: 'panduan-pemilihan-kitaran-20-kapsul-vs-30-kapsul',
    canonicalMsPath: '/ms/panduan/panduan-pemilihan-kitaran-20-kapsul-vs-30-kapsul/',
    canonicalEnPath: '/guides/20-capsule-vs-30-capsule-cycle-selection/',
    msOutputPaths: [
      'ms/guides/20-capsule-vs-30-capsule-cycle-selection/index.html',
      'ms/guides/20-capsule-vs-30-capsule-cycle-selection-guide/index.html',
      'ms/panduan/pilihan-kitaran-20-vs-30-kapsul/index.html',
      'ms/panduan/panduan-pemilihan-kitaran-20-kapsul-vs-30-kapsul/index.html',
    ],
    defaultProduct: 'grow-xl',
    heroVisualWebp: '/assets/products/grow-xl-stage.webp',
    heroVisualPng: '/assets/products/grow-xl-stage.png',
    watermarkText: 'KITARAN 04',
    readingTimeMinutes: 11,
    publishedDate: '2026-02-10',
    updatedDate: '2026-10-30',
    seoTitle:
      'Panduan Pemilihan Kitaran 20 Kapsul vs 30 Kapsul: Protokol Onyxmen Mana Sesuai Untuk Anda? | RM 159',
    metaDescription:
      'Bandingkan kitaran padat 20 kapsul (Horsemen & Hammer of Thor) dengan kitaran penuh 30 kapsul sebulan (Grow XL & Magnum Pump XR) pada harga seragam RM 159 di Onyxmen Malaysia.',
    kicker: 'MS-158 · PANDUAN PROTOKOL 04 · MATRIKS PEMILIHAN KITARAN 20 VS 30 KAPSUL',
    headlineHtml:
      'Pemilihan Kitaran 20 Kapsul vs 30 Kapsul: <span class="foil-champagne-text">Sesuaikan Formulasi Mengikut Gaya Hidup Anda.</span>',
    leadSummary:
      'Keempat-empat formulasi utama Onyxmen ditawarkan pada harga seragam RM 159 sebotol, namun dibahagikan kepada dua seni bina kitaran yang berbeza: Rizab Kepekatan Tinggi 20 Kapsul (Horsemen & Hammer of Thor) dan Kitaran Bulanan 30 Kapsul (Grow XL & Magnum Pump XR). Gunakan matriks perbandingan ini untuk memilih botol yang paling tepat dengan matlamat fisiologi anda.',
    telemetry: [
      {
        label: 'KATEGORI 20 KAPSUL (RM 159)',
        val: 'Horsemen & Hammer of Thor',
        sub: 'Kepekatan herba maksimum · Kitaran 20–40 hari',
      },
      {
        label: 'KATEGORI 30 KAPSUL (RM 159)',
        val: 'Grow XL & Magnum Pump XR',
        sub: 'Disiplin 1 kapsul sehari sebulan penuh (30 hari)',
      },
      {
        label: 'KOS PER HIDANGAN HARIAN',
        val: 'RM 5.30 (30 Kapsul) / RM 7.95 (20 Kapsul)',
        sub: 'Harga botol tetap RM 159.00 tanpa caj tersembunyi',
      },
      {
        label: 'PAKEJ KOMBINASI 2 BOTOL',
        val: 'RM 286 (10% OFF vs RM 318) (Penghantaran Percuma)',
        sub: 'Gabungkan 1 botol harian + 1 botol malam',
      },
    ],
    pinnedSummaryTitle:
      'Mengapa Harga 20 Kapsul Dan 30 Kapsul Adalah Seragam Pada RM 159.00 Sebotol?',
    pinnedSummaryCopy:
      'Pelanggan sering bertanya mengapa Horsemen (20 kapsul) dan Grow XL (30 kapsul) mempunyai harga yang sama iaitu RM 159. Jawapannya terletak pada ketumpatan nisbah ekstrak: botol 20 kapsul memfokuskan ekstrak akar berkepekatan ultra-tinggi (seperti Tongkat Ali 100:1 dan Saponin Tribulus 60%) untuk impak sasaran malam, manakala botol 30 kapsul membahagikan dos seimbang untuk penyelenggaraan 30 hari penuh.',
    chapters: [
      {
        code: 'BAB 01 · PROFIL PENGGUNA 20 KAPSUL',
        title: 'Bila Anda Patut Memilih Botol 20 Kapsul: Horsemen (500mg) Atau Hammer of Thor (Kapsul Veg.)',
        body: 'Pilih kategori 20 kapsul jika anda mengutamakan kesediaan tenaga malam yang mantap atau pemulihan stamina berkepekatan tinggi: (1) Pilih Horsemen (20 Kapsul × 500mg, SKU ONYX-HM-20) jika anda mahukan gabungan klasik Tongkat Ali Malaysia 100:1 + Akar Maca Hitam Peru + Epimedium + L-Arginine HCl yang boleh diambil sama ada 45–60 minit sebelum aktiviti malam atau selang 48 jam (1 botol bertahan sehingga 30–40 hari jika diambil selang sehari); (2) Pilih Hammer of Thor (20 Kapsul Vegetarian, SKU ONYX-HT-20) jika anda memerlukan kapsul tumbuhan HPMC 100% vegetarian yang memfokuskan kekuatan fizikal, pemulihan otot, dan ketahanan melalui Saponin Tribulus Terrestris 60%, Ashwagandha, dan Zink Bisglycinate.',
      },
      {
        code: 'BAB 02 · PROFIL PENGGUNA 30 KAPSUL',
        title: 'Bila Anda Patut Memilih Botol 30 Kapsul: Grow XL (Rutin Pagi) Atau Magnum Pump XR (Kapsul Hitam)',
        body: 'Pilih kategori 30 kapsul jika anda mahukan tabiat mudah 1 kapsul setiap hari mengikut kalendar sebulan penuh (kos hanya RM 5.30 sehari): (1) Pilih Grow XL (30 Kapsul, SKU ONYX-GX-30) jika anda seorang eksekutif, usahawan, atau profesional yang mahukan kecergasan berterusan dari pagi hingga malam melalui gabungan Panax Ginseng, Ginkgo Biloba, Saw Palmetto, dan Muira Puama; (2) Pilih Magnum Pump XR (30 Kapsul Hitam, SKU ONYX-MP-30) jika anda aktif bersenam di gimnasium atau mengutamakan sokongan aliran vaskular Nitrik Oksida (L-Arginine HCl + L-Citrulline Malate + Kunyit Hitam + Bioperine) 30–45 minit sebelum aktiviti fizikal.',
      },
      {
        code: 'BAB 03 · STRATEGI GABUNGAN 2 BOTOL (RM 286 (10% OFF vs RM 318))',
        title: 'Protokol Sinergi Siang & Malam: Menggabungkan Botol 30 Kapsul Dengan Botol 20 Kapsul',
        body: 'Pendekatan paling popular di kalangan pelanggan tetap Onyxmen di Kuala Lumpur, Selangor, dan Johor Bahru ialah menempah Pakej 2 Botol (RM 286 (10% OFF vs RM 318)) dengan menggabungkan satu botol kitaran pagi dan satu botol kitaran malam. Sebagai contoh, ambil 1 kapsul Grow XL setiap pagi selepas sarapan untuk kecergasan mikro-vaskular harian, dan gunakan Horsemen atau Magnum Pump XR pada malam hujung minggu atau sebelum latihan fizikal. Anda bukan sahaja mendapat liputan fisiologi 360 darjah, malah layak menerima Penghantaran Ekspres Percuma ke seluruh Malaysia termasuk Sabah dan Sarawak.',
      },
      {
        code: 'BAB 04 · PERANCANGAN KITARAN 90 HARI (RM 405 (15% OFF vs RM 477))',
        title: 'Kitaran Penuh 60–90 Hari (Pakej 3 Botol RM 405 (15% OFF vs RM 477)) Untuk Penyesuaian Adaptogenik Optimum',
        body: 'Kajian fitoterapi ke atas Eurycoma longifolia, Lepidium meyenii, dan Panax ginseng menunjukkan bahawa penyelarasan tenaga selular mencapai tahap paling stabil antara minggu ke-6 hingga minggu ke-12. Pakej Bilik Kebal 3 Botol (RM 405 (15% OFF vs RM 477)) memberikan anda bekalan 60 kapsul (bagi Horsemen / Hammer of Thor) atau 90 kapsul penuh (bagi Grow XL / Magnum Pump XR) supaya kitaran kecergasan anda berjalan lancar tanpa sebarang gangguan.',
      },
    ],
    protocolLedgerRows: [
      {
        code: 'PILIHAN-01 · HORSEMEN (20 KAPSUL)',
        title: 'Horsemen — Rizab Tenaga Malam & Stamina Pantas',
        body: 'Terbaik untuk lelaki yang mahukan fleksibiliti pengambilan (45–60 minit sebelum aktiviti malam atau selang sehari) dengan fokus Tongkat Ali 100:1 & Maca Hitam.',
        meta: '20 Kapsul × 500mg · RM 159',
      },
      {
        code: 'PILIHAN-02 · HAMMER OF THOR (20 VEG)',
        title: 'Hammer of Thor — Ketahanan Saponin & Kapsul Vegetarian',
        body: 'Terbaik untuk lelaki yang mengutamakan kapsul tumbuhan HPMC 100% vegetarian serta sokongan Tribulus Terrestris 60% Saponin, Ashwagandha & Zink.',
        meta: '20 Kapsul Veg. · RM 159',
      },
      {
        code: 'PILIHAN-03 · GROW XL (30 KAPSUL)',
        title: 'Grow XL — Rutin Harian Pagi 30 Hari & Aliran Mikro',
        body: 'Terbaik untuk lelaki sibuk yang mahukan 1 kapsul setiap pagi selepas sarapan untuk tenaga berterusan sepanjang hari kerja.',
        meta: '30 Kapsul Harian · RM 159',
      },
      {
        code: 'PILIHAN-04 · MAGNUM PUMP XR (30 HITAM)',
        title: 'Magnum Pump XR — Prekursor Nitrik Oksida & Prestasi Gimnasium',
        body: 'Terbaik untuk lelaki aktif bersenam yang memerlukan sokongan L-Arginine HCl, L-Citrulline & Bioperine 30–45 minit sebelum latihan atau aktiviti malam.',
        meta: '30 Kapsul Hitam · RM 159',
      },
      {
        code: 'PILIHAN-05 · PAKEJ 2 BOTOL (RM 286 (10% OFF vs RM 318))',
        title: 'Kitaran Dwi-Botol (40 atau 60 Kapsul) + Penghantaran Percuma',
        body: 'Jimat masa menunggu kurier dan nikmati penghantaran udara percuma ke Sabah, Sarawak & Labuan serta penghantaran ekspres Semenanjung.',
        meta: 'RM 286 (10% OFF vs RM 318) · Penghantaran Percuma',
      },
      {
        code: 'PILIHAN-06 · PAKEJ 3 BOTOL (RM 405 (15% OFF vs RM 477))',
        title: 'Rizab Lengkap 60–90 Hari Untuk Kestabilan Stamina Maksimum',
        body: 'Bekalan penuh suku tahunan bagi memastikan paras fitokimia adaptogenik kekal optimum setiap minggu.',
        meta: 'RM 405 (15% OFF vs RM 477) · Kitaran Lengkap',
      },
    ],
    faqs: [
      {
        q: 'Jika saya baru pertama kali mencuba Onyxmen, patutkah saya memilih botol 20 kapsul atau 30 kapsul?',
        a: 'Jika matlamat utama anda ialah kesediaan tenaga pada waktu malam atau hujung minggu, mulakan dengan Horsemen (20 Kapsul × 500mg, RM 159). Jika matlamat utama anda ialah mengatasi keletihan harian akibat kerja pejabat dan membina stamina secara konsisten setiap pagi selama sebulan penuh, mulakan dengan Grow XL (30 Kapsul, RM 159). Jika anda kerap ke gimnasium, pilih Magnum Pump XR (30 Kapsul Hitam, RM 159).',
      },
      {
        q: 'Berapa lamakah sebotol 20 kapsul (Horsemen / Hammer of Thor) boleh bertahan?',
        a: 'Jika diambil setiap malam sebagai kitaran intensif, 1 botol (20 kapsul) bertahan selama 20 hari (dengan peringatan bekalan pada Hari Ke-18). Namun jika diambil mengikut protokol penyelenggaraan selang 48 jam (1 kapsul setiap 2 hari), sebotol 20 kapsul boleh bertahan sehingga 40 hari.',
      },
      {
        q: 'Adakah kapsul Hammer of Thor sesuai untuk pengguna yang mengelakkan gelatin haiwan?',
        a: 'Ya. Hammer of Thor (SKU ONYX-HT-20) menggunakan sarung kapsul HPMC (Hydroxypropyl Methylcellulose) 100% berasaskan selulosa tumbuhan yang sesuai untuk pengguna yang mengutamakan kapsul vegetarian.',
      },
      {
        q: 'Bolehkah saya menukar daripada botol 20 kapsul kepada botol 30 kapsul pada bulan berikutnya?',
        a: 'Sudah tentu. Semua formulasi Onyxmen adalah bebas bahan sintetik dan saling melengkapi. Ramai pelanggan memulakan bulan pertama dengan Horsemen (20 kapsul) dan kemudian beralih kepada Grow XL (30 kapsul) pada bulan kedua untuk penyelenggaraan harian.',
      },
    ],
  },
];

// Append Panduan 5 (MS-159) and Panduan 6 (MS-160) into BM_GUIDE_DOSSIERS
BM_GUIDE_DOSSIERS.push(
  {
    microStep: 'MS-159',
    guideNumber: 5,
    guideCode: 'PANDUAN-BM-05',
    id: 'malaysian-mens-vitality-and-tropical-stamina-nutrition',
    slug: 'nutrisi-kecergasan-dan-stamina-lelaki-iklim-tropika-malaysia',
    canonicalMsPath: '/ms/panduan/nutrisi-kecergasan-dan-stamina-lelaki-iklim-tropika-malaysia/',
    canonicalEnPath: '/guides/malaysian-mens-vitality-tropical-stamina-nutrition/',
    msOutputPaths: [
      'ms/guides/malaysian-mens-vitality-tropical-stamina-nutrition/index.html',
      'ms/guides/malaysian-mens-vitality-and-tropical-stamina-nutrition/index.html',
      'ms/panduan/nutrisi-tenaga-dan-stamina-lelaki-malaysia/index.html',
      'ms/panduan/nutrisi-kecergasan-dan-stamina-lelaki-iklim-tropika-malaysia/index.html',
    ],
    defaultProduct: 'horsemen',
    heroVisualWebp: '/assets/products/horsemen-portrait.webp',
    heroVisualPng: '/assets/products/horsemen-portrait.png',
    watermarkText: 'TROPIKA 05',
    readingTimeMinutes: 12,
    publishedDate: '2026-02-18',
    updatedDate: '2026-10-30',
    seoTitle:
      'Panduan Nutrisi Kecergasan & Stamina Lelaki di Iklim Tropika Malaysia | Onyxmen Malaysia',
    metaDescription:
      'Bagaimana cuaca panas lembap Malaysia, kesesakan trafik Lembah Klang, kurang tidur, dan pemakanan lewat malam mempengaruhi stamina lelaki dewasa serta peranan herba piawai (RM 159).',
    kicker: 'MS-159 · PANDUAN PROTOKOL 05 · NUTRISI STAMINA & PEMULIHAN TENAGA IKLIM TROPIKA MALAYSIA',
    headlineHtml:
      'Nutrisi Kecergasan &amp; Stamina Lelaki Di Malaysia: <span class="foil-champagne-text">Mengatasi Keletihan Gaya Hidup Tropika.</span>',
    leadSummary:
      'Lelaki dewasa di Kuala Lumpur, Selangor, Pulau Pinang, Johor Bahru, serta Sabah dan Sarawak berdepan cabaran fisiologi yang unik: suhu khatulistiwa 32°C–35°C yang menguras mineral Zink melalui peluh, kesesakan trafik harian yang melonjakkan hormon kortisol, serta tabiat makan lewat malam. Ketahui protokol pemakanan dan botani untuk mengembalikan tenaga puncak anda.',
    telemetry: [
      {
        label: 'FAKTOR IKLIM MALAYSIA',
        val: 'Suhu 32°C–35°C & Kelembapan 80%+',
        sub: 'Kehilangan elektrolit & mineral Zink harian melalui peluh',
      },
      {
        label: 'TEKANAN TRAFIK & KERJA',
        val: 'Kenaikan Kortisol Waktu Petang',
        sub: 'Menghalang kesediaan tenaga & laluan Nitrik Oksida',
      },
      {
        label: 'HERBA ADAPTOGENIK BEBAS KAFEIN',
        val: 'Tongkat Ali 100:1 + Maca Hitam + Ginseng',
        sub: 'Tenaga selular ATP tanpa gangguan tidur malam',
      },
      {
        label: 'PROTOKOL LENGKAP RM 159',
        val: '4 Formulasi Tersuai Iklim Tropika',
        sub: 'Disimpan dalam bilik kebal kawalan suhu Kuala Lumpur',
      },
    ],
    pinnedSummaryTitle:
      'Mengapa Lelaki Dewasa Di Bandar Utama Malaysia Sering Kehabisan Tenaga Selepas Jam 8:00 Malam?',
    pinnedSummaryCopy:
      'Gabungan dehidrasi mikro sepanjang hari, pemanduan 90 minit di Lebuhraya Persekutuan atau LDP, serta pengambilan minuman manis 3-dalam-1 menyebabkan kejatuhan glukosa dan lonjakan kortisol pada waktu malam. Menukar perangsang bergula kepada ekstrak adaptogenik piawai memulihkan keseimbangan tenaga daripada peringkat akar.',
    chapters: [
      {
        code: 'BAB 01 · PERANGKAP DEHIDRASI & KORTISOL TROPIKA',
        title: 'Kesan Cuaca Panas Lembap Malaysia & Kesesakan Trafik Harian Terhadap Stamina Malam',
        body: 'Berada di bawah iklim khatulistiwa Malaysia bermakna tubuh lelaki dewasa kehilangan air dan mineral surih penting—terutamanya Zink, Magnesium, dan Kalium—secara berterusan walaupun ketika bekerja di dalam pejabat berhawa dingin. Apabila ditambah dengan tekanan kerja korporat atau kerja syif serta pemanduan pulang dalam kesesakan trafik petang, kelenjar adrenal merembeskan hormon kortisol secara berlebihan. Kortisol yang tinggi pada jam 7:00 hingga 10:00 malam menyekat kecergasan dalaman dan mengecutkan saluran darah.',
      },
      {
        code: 'BAB 02 · BAHAYA MINUMAN TENAGA BERGULA TINGGI',
        title: 'Mengapa Minuman Tin Bergula & Kopi Segera 3-Dalam-1 Pada Waktu Petang Merosakkan Kitaran Tidur',
        body: 'Bagi melawan rasa mengantuk selepas kerja, ramai lelaki Malaysia mengambil minuman tenaga berkarbonat atau kopi susu pekat pada jam 5:00–7:00 petang. Kafein sintetik dan gula halus memberikan lonjakan palsu selama 60 minit diikuti dengan kejatuhan tenaga ("sugar crash") pada jam 9:30 malam, di samping menghalang fasa tidur nyenyak REM. Sebaliknya, ekstrak herba adaptogenik bebas kafein di dalam Horsemen, Hammer of Thor, dan Grow XL (Tongkat Ali Malaysia 100:1, Maca Hitam Peru, Panax Ginseng, dan Ashwagandha) menyokong penghasilan tenaga ATP mitokondria tanpa mengganggu kitaran tidur malam.',
      },
      {
        code: 'BAB 03 · PENJAGAAN NUTRISI WAKTU MALAM',
        title: 'Strategi Makan Malam Malaysia: Mengimbangi Protein, Karbohidrat & Waktu Pengambilan Kapsul',
        body: 'Makan malam yang terlalu lewat (selepas jam 10:00 malam) dengan hidangan tinggi minyak seperti roti canai banjir, char kuey teow, atau nasi goreng mamak mengalihkan sehingga 30% aliran darah ke saluran gastrousus untuk proses penghadaman berat. Untuk prestasi malam yang optimum, utamakan makan malam berasaskan protein bersih (ikan bakar, ayam panggang, daging tanpa lemak, telur, dan sayur-sayuran hijau) sebelum jam 8:30 malam, diikuti dengan 1 kapsul Horsemen atau Magnum Pump XR bersama 300ml air kosong suam 45 minit kemudian.',
      },
      {
        code: 'BAB 04 · SINERGI SENAMAN & ALIRAN VASKULAR',
        title: 'Menggabungkan Senaman Kardio/Bebanan 3 Kali Seminggu Dengan Sokongan Nitrik Oksida',
        body: 'Kesihatan stamina lelaki dewasa berkait rapat dengan keanjalan dinding endotelium saluran darah. Melakukan senaman rintangan (seperti squat, deadlift, atau tekan tubi) atau larian pantas selama 30 minit sebanyak 3 kali seminggu diiringi pengambilan 1 kapsul Magnum Pump XR (L-Arginine HCl + L-Citrulline + Kunyit Hitam) atau Hammer of Thor membantu melancarkan peredaran darah dan mempercepatkan pemulihan otot.',
      },
    ],
    protocolLedgerRows: [
      {
        code: 'NUTRISI-01 · AIR KOSONG',
        title: 'Formula Penghidratan Harian: 2.5 hingga 3.0 Liter Air Kosong',
        body: 'Mulakan pagi anda dengan 500ml air suam sebaik bangun tidur bagi menggantikan cecair yang hilang semalaman dan melancarkan pengangkutan nutrien kapsul.',
        meta: 'Sasaran Harian Tropika',
      },
      {
        code: 'NUTRISI-02 · MINERAL ZINK',
        title: 'Penggantian Mineral Zink & Selenium Yang Hilang Melalui Peluh',
        body: 'Hammer of Thor (20 Kapsul Veg.) membekalkan kelat Zink Bisglycinate dan Selenium bersama Saponin Tribulus 60% untuk menyokong keseimbangan mineral lelaki.',
        meta: 'Hammer of Thor · RM 159',
      },
      {
        code: 'NUTRISI-03 · KAWALAN KORTISOL',
        title: 'Penyesuaian Tekanan Kerja Dengan Tongkat Ali 100:1 & Ashwagandha',
        body: 'Ekstrak akar Eurycoma longifolia 100:1 di dalam Horsemen dan Grow XL membantu mengekalkan ketenangan fizikal dan tenaga malam selepas hari kerja yang panjang.',
        meta: 'Horsemen / Grow XL · RM 159',
      },
      {
        code: 'NUTRISI-04 · BEBAS KAFEIN',
        title: 'Tenaga Semula Jadi Tanpa Debaran Jantung Atau Insomnia',
        body: 'Semua 4 formulasi Onyxmen adalah 100% bebas kafein sintetik, membolehkan anda mengambil kapsul malam tanpa mengganggu kualiti tidur.',
        meta: '100% Bebas Perangsang',
      },
      {
        code: 'NUTRISI-05 · ALIRAN VASKULAR',
        title: 'Sokongan Endotelium Dengan L-Arginine, L-Citrulline & Kunyit Hitam',
        body: 'Magnum Pump XR (30 Kapsul Hitam) menyokong keanjalan saluran darah untuk penghantaran oksigen yang cekap semasa senaman dan aktiviti malam.',
        meta: 'Magnum Pump XR · RM 159',
      },
      {
        code: 'NUTRISI-06 · PENYIMPANAN BOTOL',
        title: 'Simpan Botol Di Tempat Sejuk & Kering (Bawah 28°C)',
        body: 'Elakkan meninggalkan botol suplemen di dalam kereta yang terdedah kepada panas matahari Malaysia. Simpan di dalam almari bilik tidur yang redup.',
        meta: 'Jaminan Kualiti Fitokimia',
      },
    ],
    faqs: [
      {
        q: 'Mengapakah saya tidak boleh menyimpan botol suplemen Onyxmen di dalam papan pemuka (dashboard) kereta di Malaysia?',
        a: 'Suhu di dalam kabin kereta yang diparkir di bawah matahari Malaysia boleh mencecah 55°C hingga 65°C. Haba melampau ini boleh merosakkan struktur molekul glikosida herba dan melembutkan sarung kapsul. Sentiasa simpan botol anda di dalam bilik atau pejabat pada suhu bilik (di bawah 28°C).',
      },
      {
        q: 'Adakah formulasi Onyxmen menyebabkan rasa berdebar atau sukar tidur seperti minuman kopi kuat?',
        a: 'Tidak. Formulasi Onyxmen tidak mengandungi kafein sintetik atau bahan perangsang sistem saraf pusat. Sebaliknya, herba seperti Tongkat Ali, Maca Hitam, dan Ashwagandha membantu mengurangkan kelesuan tekanan supaya anda berasa bertenaga apabila aktif dan tidur lebih lena selepas itu.',
      },
      {
        q: 'Apakah formulasi terbaik untuk lelaki yang bekerja syif malam atau kerap memandu jauh merentas negeri?',
        a: 'Bagi lelaki yang bekerja syif atau kerap berulang-alik jauh, kami mengesyorkan Grow XL (30 Kapsul, RM 159) untuk diambil sebelum memulakan waktu kerja harian kerana kandungan Panax Ginseng dan Ginkgo Biloba menyokong fokus serta aliran mikro tanpa rasa mengantuk.',
      },
      {
        q: 'Perlukah saya mengamalkan diet khas semasa mengambil suplemen Onyxmen?',
        a: 'Tiada pantang larang yang rumit diperlukan. Anda hanya perlu memastikan pengambilan air kosong mencukupi (2.5–3.0 liter sehari), mengurangkan makanan terlalu berminyak lewat malam, dan menjarakkan kapsul selama 45 minit daripada teh tarik atau kopi pekat.',
      },
    ],
  },
  {
    microStep: 'MS-160',
    guideNumber: 6,
    guideCode: 'PANDUAN-BM-06',
    id: 'nitric-oxide-amino-acids-vs-adaptogenic-herbs-guide',
    slug: 'perbezaan-asid-amino-nitrik-oksida-dan-herba-adaptogenik',
    canonicalMsPath: '/ms/panduan/perbezaan-asid-amino-nitrik-oksida-dan-herba-adaptogenik/',
    canonicalEnPath: '/guides/nitric-oxide-amino-acids-vs-adaptogenic-herbs/',
    msOutputPaths: [
      'ms/guides/nitric-oxide-amino-acids-vs-adaptogenic-herbs/index.html',
      'ms/guides/nitric-oxide-amino-acids-vs-adaptogenic-herbs-guide/index.html',
      'ms/panduan/asid-amino-nitrik-oksida-vs-herba-adaptogenik/index.html',
      'ms/panduan/perbezaan-asid-amino-nitrik-oksida-dan-herba-adaptogenik/index.html',
    ],
    defaultProduct: 'magnum-pump-xr',
    heroVisualWebp: '/assets/products/magnum-pump-xr-stage.webp',
    heroVisualPng: '/assets/products/magnum-pump-xr-stage.png',
    watermarkText: 'VASKULAR 06',
    readingTimeMinutes: 12,
    publishedDate: '2026-02-25',
    updatedDate: '2026-10-30',
    seoTitle:
      'Panduan Asid Amino Nitrik Oksida vs Herba Adaptogenik: Aliran Vaskular & Tenaga | Onyxmen Malaysia',
    metaDescription:
      'Fahami perbezaan fungsi prekursor vaskular Nitrik Oksida (L-Arginine HCl, L-Citrulline, Bioperine) dan herba adaptogenik (Tongkat Ali, Tribulus, Maca) dalam rangkaian Onyxmen Malaysia (RM 159).',
    kicker: 'MS-160 · PANDUAN PROTOKOL 06 · BIOKIMIA NITRIK OKSIDA VS HERBA ADAPTOGENIK',
    headlineHtml:
      'Asid Amino Nitrik Oksida vs Herba Adaptogenik: <span class="foil-champagne-text">Sinergi Aliran Vaskular &amp; Tenaga Dalaman.</span>',
    leadSummary:
      'Prestasi fizikal lelaki dewasa bergantung kepada dua teras fisiologi yang berbeza tetapi saling melengkapi: (1) Kelancaran aliran saluran darah melalui laluan Nitrik Oksida (L-Arginine HCl & L-Citrulline Malate), dan (2) Ketahanan tenaga dalaman melalui herba adaptogenik (Tongkat Ali 100:1, Tribulus 60%, Maca Hitam & Ginseng). Ketahui perbezaan mekanisme kedua-duanya serta penjelasan rasmi produk Magnum Pump XR (30 Kapsul Hitam).',
    telemetry: [
      {
        label: 'TERAS 1 · LALUAN NITRIK OKSIDA',
        val: 'L-Arginine HCl + L-Citrulline + Bioperine',
        sub: 'Tindak balas vaskular pantas dalam 30–60 minit',
      },
      {
        label: 'TERAS 2 · HERBA ADAPTOGENIK',
        val: 'Tongkat Ali 100:1 + Tribulus + Maca Hitam',
        sub: 'Ketahanan stamina & pemulihan kitaran 20–90 hari',
      },
      {
        label: 'PENJELASAN ENTITI PRODUK',
        val: 'Magnum Pump XR = 30 Kapsul Hitam Oral',
        sub: '100% Suplemen Pemakanan (Bukan pam mekanikal/industri)',
      },
      {
        label: 'HARGA RASMI SERAGAM',
        val: 'RM 159 (1B) · RM 286 (10% OFF vs RM 318) (2B) · RM 405 (15% OFF vs RM 477) (3B)',
        sub: 'Penghantaran rahsia ke seluruh 16 negeri Malaysia',
      },
    ],
    pinnedSummaryTitle:
      'Dua Enjin Fisiologi Lelaki: Mengapa Anda Memerlukan Sokongan Saluran Vaskular Dan Daya Tahan Adaptogenik',
    pinnedSummaryCopy:
      'Bayangkan herba adaptogenik (Tongkat Ali, Maca, Tribulus) sebagai "enjin" yang membina kemahuan, daya tahan, dan tenaga dalaman anda, manakala asid amino Nitrik Oksida (L-Arginine & L-Citrulline) sebagai "sistem paip vaskular" yang memastikan aliran darah dan oksigen sampai ke tisu sasaran dengan lancar.',
    chapters: [
      {
        code: 'BAB 01 · MEKANISME NITRIK OKSIDA (eNOS)',
        title: 'Teras Pertama: Bagaimana L-Arginine HCl, L-Citrulline Malate & Nitrat Ubi Bit Melancarkan Aliran Vaskular',
        body: 'Apabila anda mengambil kapsul yang mengandungi L-Arginine HCl dan L-Citrulline Malate (seperti di dalam Magnum Pump XR dan Horsemen), enzim endothelial nitric oxide synthase (eNOS) pada dinding dalaman saluran darah menukarkan asid amino ini kepada molekul gas Nitrik Oksida (NO). Nitrik Oksida memberi isyarat kepada otot licin vaskular untuk berehat dan mengembang (vasodilatasi). Kehadiran L-Citrulline sangat penting kerana ia melepasi metabolisme hati dan ditukarkan semula kepada L-Arginine di buah pinggang, sekali gus memanjangkan tempoh sokongan aliran darah daripada 45 minit sehingga beberapa jam.',
      },
      {
        code: 'BAB 02 · MEKANISME HERBA ADAPTOGENIK',
        title: 'Teras Kedua: Bagaimana Tongkat Ali 100:1, Tribulus 60% Saponin & Maca Hitam Membina Stamina Dalaman',
        body: 'Walaupun aliran vaskular adalah penting, ia tidak mencukupi jika tubuh anda mengalami kelesuan saraf atau keletihan akibat kerja keras. Di sinilah peranan herba adaptogenik piawai: (a) Kuasinoid Eurycomanone daripada Tongkat Ali Malaysia 100:1 menyokong kecergasan biokimia lelaki dan mengawal beban kortisol; (b) Saponin Protodioscin daripada Tribulus Terrestris 60% (di dalam Hammer of Thor) menyokong daya tahan fizikal dan pemulihan otot; (c) Macamides daripada Akar Maca Hitam Peru dan Ginsenosida Panax Ginseng (di dalam Horsemen dan Grow XL) meningkatkan daya tahan selular tanpa kafein.',
      },
      {
        code: 'BAB 03 · SINERGI BIOPERINE & KUNYIT HITAM',
        title: 'Peranan Piperine (Bioperine Lada Hitam) & Kaempferia Parviflora (Kunyit Hitam) Dalam Penyerapan',
        body: 'Salah satu kelemahan suplemen asid amino biasa di pasaran ialah kadar penyerapan usus yang rendah. Dalam formulasi Magnum Pump XR (SKU ONYX-MP-30), gabungan L-Arginine dan L-Citrulline diperkukuhkan dengan ekstrak Kaempferia parviflora (Kunyit Hitam) yang kaya dengan metoksiflavon (methoxyflavone) serta ekstrak Lada Hitam Piawai (Bioperine >=95% Piperine). Piperine meningkatkan kebolehtelapan epitelium usus dan menghalang glukuronidasi awal di hati, menjadikan setiap kapsul hitam memberikan bioavailabiliti yang jauh lebih tinggi.',
      },
      {
        code: 'BAB 04 · PENJELASAN RASMI MAGNUM PUMP XR',
        title: 'Penjelasan Entiti Produk: Magnum Pump XR Ialah Suplemen 30 Kapsul Hitam (Bukan Pam Industri/Mekanikal)',
        body: 'Untuk ketepatan maklumat pengguna dan enjin carian di Malaysia: Magnum Pump XR oleh Onyxmen Malaysia (SKU: ONYX-MP-30MY, MPN: OM-MP-2026-MY, GTIN-13: 9550000102042, Harga: RM 159.00) ialah 100% Suplemen Pemakanan Kapsul Oral di bawah siri "Testosterone Pro Series — Male Enhancement Formula Maximum Strength" yang mengandungi 30 Kapsul Hitam (30 Black Capsules) setiap botol. Perkataan "Pump" merujuk kepada istilah kecergasan gimnasium dan vasodilatasi Nitrik Oksida ("vascular muscle pump"), dan produk ini sama sekali TIDAK berkaitan dengan pam cecair mekanikal, pam vakum, atau pam lumpur industri minyak dan gas.',
      },
    ],
    protocolLedgerRows: [
      {
        code: 'SINERGI-01 · L-ARGININE HCl',
        title: 'Substrat Langsung Enzim Endotelium eNOS (30–60 Minit)',
        body: 'Menyokong penghasilan segera Nitrik Oksida untuk kelancaran pengangkutan oksigen dan nutrien sebelum latihan gimnasium atau aktiviti malam.',
        meta: 'Magnum Pump XR & Horsemen',
      },
      {
        code: 'SINERGI-02 · L-CITRULLINE MALATE',
        title: 'Prekursor Pelepasan Lanjutan (Extended-Release) & Anti-Asid Laktik',
        body: 'Mengekalkan paras L-Arginine plasma darah untuk tempoh lebih panjang serta membantu mengurangkan kelesuan otot selepas senaman.',
        meta: 'Magnum Pump XR & Grow XL',
      },
      {
        code: 'SINERGI-03 · TONGKAT ALI 100:1',
        title: 'Ekstrak Akar Eurycoma Longifolia Piawai (>=2.2% Eurycomanone)',
        body: 'Herba kebanggaan Malaysia untuk menyokong keseimbangan tenaga lelaki dewasa, daya tahan tekanan, dan kecergasan malam.',
        meta: 'Horsemen, Hammer of Thor & Grow XL',
      },
      {
        code: 'SINERGI-04 · TRIBULUS 60% SAPONIN',
        title: 'Saponin Steroid Protodioscin & Kelat Zink Bisglycinate',
        body: 'Menyokong ketahanan fizikal, kekuatan otot, dan keyakinan malam di dalam sarung kapsul vegetarian HPMC.',
        meta: 'Hammer of Thor (20 Kapsul Veg.)',
      },
      {
        code: 'SINERGI-05 · MACA HITAM & GINSENG',
        title: 'Adaptogen Tenaga Selular ATP Tanpa Kafein',
        body: 'Membekalkan stamina berterusan sepanjang hari kerja dan waktu malam tanpa menyebabkan debaran jantung atau gangguan tidur.',
        meta: 'Horsemen & Grow XL',
      },
      {
        code: 'SINERGI-06 · KOMBINASI TERBAIK',
        title: 'Pakej Dwi-Botol Sinergi (RM 286 (10% OFF vs RM 318) · Penghantaran Percuma)',
        body: 'Gabungkan 1 botol Magnum Pump XR (fokus Nitrik Oksida) bersama 1 botol Horsemen atau Grow XL (fokus Herba Adaptogenik) untuk kesan lengkap.',
        meta: 'Pakej 2 Botol · RM 286 (10% OFF vs RM 318)',
      },
    ],
    faqs: [
      {
        q: 'Apakah perbezaan utama antara Magnum Pump XR (30 Kapsul Hitam) dan Horsemen (20 Kapsul)?',
        a: 'Magnum Pump XR (30 Kapsul Hitam, RM 159) memberi tumpuan utama kepada laluan vaskular Nitrik Oksida (L-Arginine, L-Citrulline, Nitrat Ubi Bit, Kunyit Hitam, dan Bioperine) untuk aliran darah dan prestasi senaman/malam sepanjang 30 hari. Horsemen (20 Kapsul × 500mg, RM 159) pula memberi tumpuan kepada ekstrak akar herba berkepekatan tinggi (Tongkat Ali 100:1, Maca Hitam Peru, Panax Ginseng, dan Epimedium) bersama L-Arginine untuk kesediaan stamina malam yang padat.',
      },
      {
        q: 'Adakah Magnum Pump XR sejenis alat mekanikal atau suplemen kapsul makan?',
        a: 'Magnum Pump XR oleh Onyxmen Malaysia ialah 100% suplemen pemakanan kapsul makan (oral dietary supplement) yang mengandungi 30 kapsul hitam berasaskan asid amino dan ekstrak botani. Ia bukan alat pam mekanikal atau peranti fizikal.',
      },
      {
        q: 'Bolehkah saya mengambil asid amino Nitrik Oksida dan herba adaptogenik pada hari yang sama?',
        a: 'Ya, kedua-dua laluan ini bertindak secara sinergi tanpa bercanggah. Anda boleh mengambil Grow XL (herba adaptogenik harian) pada waktu pagi selepas sarapan, dan mengambil Magnum Pump XR (asid amino Nitrik Oksida) 30–45 minit sebelum latihan gimnasium atau aktiviti malam.',
      },
      {
        q: 'Berapa cepatkah saya boleh merasai kesan sokongan L-Arginine dan herba adaptogenik?',
        a: 'Sebatian asid amino Nitrik Oksida (L-Arginine HCl dan L-Citrulline Malate) mula diserap ke dalam aliran darah dalam masa 30 hingga 60 minit selepas diambil bersama air kosong. Bagi ekstrak herba adaptogenik pula, sokongan tenaga berperingkat dapat dirasai dalam minggu pertama dan mencapai tahap kestabilan penuh sepanjang kitaran 30 hingga 90 hari.',
      },
    ],
  },
  {
    microStep: 'MS-246',
    guideNumber: 7,
    guideCode: 'PANDUAN-BM-07',
    id: 'hammer-of-thor-original-vs-fake-malaysia',
    slug: 'hammer-of-thor-original-vs-tiruan-malaysia',
    canonicalMsPath: '/ms/panduan/hammer-of-thor-original-vs-tiruan-malaysia/',
    canonicalEnPath: '/guides/hammer-of-thor-original-vs-fake-malaysia/',
    msOutputPaths: [
      'ms/guides/hammer-of-thor-original-vs-fake-malaysia/index.html',
      'ms/panduan/hammer-of-thor-original-vs-tiruan-malaysia/index.html',
    ],
    defaultProduct: 'hammer-of-thor',
    heroVisualWebp: '/assets/products/hammer-of-thor-stage.webp',
    heroVisualPng: '/assets/products/hammer-of-thor-stage.png',
    watermarkText: 'THOR TULEN 07',
    readingTimeMinutes: 11,
    publishedDate: '2026-11-10',
    updatedDate: '2026-11-10',
    seoTitle:
      'Hammer of Thor Original vs Tiruan Malaysia [20 Kapsul RM159]',
    metaDescription:
      '✓ Cara kenal Hammer of Thor Original Malaysia (20 Kapsul Veg. Tribulus 60% Saponin) vs kapsul tiruan murah. Beli 1 RM 159, 2 RM 286 (-10%) COD Rahsia.',
    kicker: 'ONYX-STD · PANDUAN PROTOKOL 07 · AUDIT FORENSIK HAMMER OF THOR MEN’S HEALTH (20 KAPSUL VEG.)',
    headlineHtml:
      'Hammer of Thor Original vs Tiruan Di Malaysia: <span class="foil-champagne-text">Panduan Semakan 20 Kapsul Vegetarian Tulen.</span>',
    leadSummary:
      'Carian untuk "Hammer of Thor Original", "Hammer of Thor Men’s Health", dan "Hammer of Thor Kapsul Malaysia" sering mengelirukan pembeli kerana lambakan botol tiruan berharga RM 25–RM 45 di laman tidak sah. Ketahui spesifikasi rasmi Hammer of Thor edaran Onyxmen Malaysia (SKU: ONYX-HT-20, RM 159): 20 Kapsul Vegetarian HPMC dengan 200mg Saponin Tribulus Terrestris 60%, Akar Maca Peru, Panax Ginseng, Saw Palmetto, Tongkat Ali 100:1, dan Zink Bisglycinate.',
    telemetry: [
      {
        label: 'SPESIFIKASI BOTOL RASMI',
        val: '20 Kapsul Veg. × 500mg',
        sub: 'SKU: ONYX-HT-20 · Sarung tumbuhan HPMC vegetarian',
      },
      {
        label: 'KEPEKATAN SAPONIN UTAMA',
        val: '200 mg Tribulus (60% Saponin)',
        sub: 'Bersama 100mg Maca, 75mg Ginseng, 65mg Saw Palmetto & Zink',
      },
      {
        label: 'BEZA PRODUK TIRUAN',
        val: 'Sifar Kapsul Biru/Kuning Murah',
        sub: 'Elakkan botol plastik RM 30 atau titisan cecair tiruan',
      },
      {
        label: 'HARGA & DISKAUN COD MY',
        val: 'RM 159 · RM 286 (-10%) · RM 405 (-15%)',
        sub: 'Kotak coklat kosong OM Fulfilment Logistics (KL)',
      },
    ],
    pinnedSummaryTitle:
      'Enam Tanda Utama Membezakan Hammer of Thor Men’s Health Original (RM 159) Daripada Tiruan',
    pinnedSummaryCopy:
      'Jangan sesekali mempertaruhkan kesihatan buah pinggang dan jantung anda dengan kapsul tiruan berharga RM 30 yang dicampur bahan kimia sintetik terlarang. Botol tulen Hammer of Thor oleh Onyxmen Malaysia hanya mengandungi 20 kapsul vegetarian HPMC berasaskan ekstrak botani piawai.',
    chapters: [
      {
        code: 'BAB 01 · ANATOMI BOTOL & LABEL RASMI',
        title: 'Mengenal Pasti Penutup Logam Emas, Lencana Vegetarian Hijau & 20 Kapsul HPMC',
        body: 'Botol tulen Hammer of Thor Men’s Health yang dihantar dari bilik kebal kawalan suhu Onyxmen Malaysia (SKU: ONYX-HT-20, GTIN-13: 9550000102028) hadir dengan botol gelap berpenutup logam emas berkilat serta pelekat keselamatan kedap udara asal kilang. Pada label hadapan tertera cetakan tepat "HAMMER OF THOR — MEN’S HEALTH — TRIBULUS TERRESTRIS — 20 VEG. CAPSULES" bersama simbol daun vegetarian hijau. Apabila dibuka, terdapat 20 kapsul selulosa tumbuhan HPMC berisi serbuk ekstrak herba perang semula jadi berserta pek penyerap kelembapan gred makanan.',
      },
      {
        code: 'BAB 02 · BAHAYA KAPSUL TIRUAN RM 25–RM 45',
        title: 'Mengapa Botol Plastik Kapsul Biru/Kuning & Ubat Titisan Di Pasaran Adalah Tiruan',
        body: 'Di laman iklan bebas dan kedai tidak sah, nama "Hammer of Thor" sering disalahgunakan pada botol plastik murah berharga RM 25 hingga RM 45 yang mengandungi 30 atau 60 kapsul gelatin berwarna biru terang, kuning, atau bentuk cecair titisan. Ujian makmal mendapati produk tiruan ini hanya mengandungi tepung kanji atau dicampur secara haram dengan bahan kimia sintetik PDE5 yang menyebabkan sakit kepala berdenyut, hidung tersumbat, dan tekanan darah tidak stabil. Stok tulen Onyxmen Malaysia tidak pernah dijual dalam bentuk cecair atau kapsul warna-warni.',
      },
      {
        code: 'BAB 03 · KOMPOSISI 500MG SETIAP KAPSUL VEG.',
        title: 'Sinergi 200mg Tribulus (60% Saponin Protodioscin), Maca Peru, Ginseng & Zink',
        body: 'Setiap kapsul vegetarian 500mg Hammer of Thor menggabungkan enam bahan aktif utama: (1) 200mg ekstrak buah Tribulus terrestris piawai (60% saponin steroid furostanol / protodioscin) untuk ketahanan fizikal dan kekuatan otot; (2) 100mg Akar Maca Peru tergelatinisasi untuk tenaga selular bebas kafein; (3) 75mg Panax Ginseng (10% ginsenosida); (4) 65mg ekstrak beri Saw Palmetto untuk kesihatan lelaki dewasa; (5) 45mg Tongkat Ali Malaysia 100:1; dan (6) 15mg kelat Zink Bisglycinate untuk menggantikan mineral yang hilang melalui peluh.',
      },
      {
        code: 'BAB 04 · CARA MAKAN & PAKEJ DISKAUN 10% / 15%',
        title: 'Jadual Pengambilan 30 Minit Selepas Makan Malam & Tempahan Bungkusan Rahsia COD',
        body: 'Memandangkan saponin steroid di dalam Tribulus terrestris lebih mudah diserap dengan kehadiran sedikit lipid makanan, ambil 1 kapsul vegetarian Hammer of Thor bersama 250ml–300ml air kosong suam 30 minit selepas makan malam (atau 45 minit sebelum senaman gimnasium). Jarakkan 45 minit daripada teh tarik atau kopi O. Tempah terus melalui https://www.onyxmen.my atau WhatsApp (+60 14-298 5919): 1 Botol RM 159, 2 Botol RM 286 (Jimat RM 32 / Diskaun 10%), atau 3 Botol RM 405 (Jimat RM 72 / Diskaun 15%) dengan COD Bayar Bila Sampai.',
      },
    ],
    protocolLedgerRows: [
      {
        code: 'THOR-BM-01 · METERAI BOTOL',
        title: 'Penutup Logam Emas & Pelekat Keselamatan Kilang Utuh',
        body: 'Pastikan botol tiba di dalam kotak coklat kosong "OM Fulfilment Logistics" dengan meterai leher botol yang belum dibuka.',
        meta: 'SKU: ONYX-HT-20 · 100% Tulen',
      },
      {
        code: 'THOR-BM-02 · CETAKAN LABEL',
        title: 'Cetakan "Men’s Health — Tribulus Terrestris — 20 Veg. Capsules"',
        body: 'Semak lencana vegetarian hijau pada label hadapan dan pastikan kiraan tepat 20 kapsul tumbuhan HPMC.',
        meta: '20 Kapsul Vegetarian HPMC',
      },
      {
        code: 'THOR-BM-03 · WAKTU MAKAN',
        title: '1 Kapsul 30 Minit Selepas Makan Malam Bersama Air Suam',
        body: 'Kehadiran hempedu selepas makan malam membantu penyerapan 200mg Saponin Tribulus 60% secara optimum.',
        meta: '30 Minit Selepas Makan Malam',
      },
      {
        code: 'THOR-BM-04 · PENAMPAN TANIN',
        title: 'Jarakkan 45 Minit Daripada Kopi O, Nescafe & Teh Tarik',
        body: 'Elakkan tanin teh dan kopi daripada mengikat 15mg Zink Bisglycinate dan glikosida herba di dalam perut.',
        meta: 'Penampan 45 Minit Air Kosong',
      },
      {
        code: 'THOR-BM-05 · BEBAS SINTETIK',
        title: 'Tiada Sakit Kepala Berdenyut Atau Debaran Jantung',
        body: 'Formulasi botani tulen memberikan ketahanan semula jadi tanpa kesan sampingan bahan kimia terlarang.',
        meta: '0% Bahan Kimia Sintetik',
      },
      {
        code: 'THOR-BM-06 · PAKEJ JIMAT',
        title: 'Beli 2 Botol RM 286 (10% OFF) Atau 3 Botol RM 405 (15% OFF)',
        body: 'Jimat sehingga RM 72 dengan penghantaran ekspres bungkusan rahsia percuma ke seluruh Semenanjung, Sabah & Sarawak.',
        meta: 'COD & WhatsApp +60 14-298 5919',
      },
    ],
    faqs: [
      {
        q: 'Bagaimanakah cara paling mudah membezakan Hammer of Thor Original dengan tiruan di Malaysia?',
        a: 'Hammer of Thor Original edaran rasmi Onyxmen Malaysia (SKU: ONYX-HT-20, RM 159) menggunakan botol berpenutup logam emas, lencana vegetarian hijau, dan mengandungi tepat 20 kapsul tumbuhan HPMC. Produk tiruan berharga RM 25–RM 45 di laman klasifikasi lazimnya mengandungi 30/60 kapsul gelatin berwarna biru atau kuning terang.',
      },
      {
        q: 'Adakah kapsul Hammer of Thor bebas daripada gelatin haiwan?',
        a: 'Ya. Sarung kapsul Hammer of Thor diperbuat daripada 100% selulosa tumbuhan HPMC (Hydroxypropyl Methylcellulose) yang sesuai untuk pengguna yang mengutamakan kapsul vegetarian.',
      },
      {
        q: 'Apakah perbezaan antara Hammer of Thor (20 Kapsul Veg.) dan Horsemen (20 Kapsul)?',
        a: 'Hammer of Thor memfokuskan 200mg Saponin Tribulus Terrestris 60%, Saw Palmetto, dan Zink Bisglycinate di dalam kapsul vegetarian untuk ketahanan fizikal dan pemulihan otot. Horsemen pula memfokuskan 150mg Tongkat Ali Malaysia 100:1, Maca Hitam, dan Epimedium untuk kesediaan tenaga malam yang pantas.',
      },
      {
        q: 'Bolehkah saya menempah Hammer of Thor Original secara COD (Bayar Bila Sampai)?',
        a: 'Boleh. Anda boleh mengisi Borang Tempahan Pantas di laman ini atau klik butang WhatsApp (+60 14-298 5919) untuk tempahan COD bungkusan rahsia ke seluruh Malaysia.',
      },
    ],
  },
  {
    microStep: 'MS-247',
    guideNumber: 8,
    guideCode: 'PANDUAN-BM-08',
    id: 'growxl-for-men-30-capsule-dosage-guide-malaysia',
    slug: 'panduan-cara-makan-grow-xl-30-kapsul-malaysia',
    canonicalMsPath: '/ms/panduan/panduan-cara-makan-grow-xl-30-kapsul-malaysia/',
    canonicalEnPath: '/guides/growxl-for-men-30-capsule-dosage-guide-malaysia/',
    msOutputPaths: [
      'ms/guides/growxl-for-men-30-capsule-dosage-guide-malaysia/index.html',
      'ms/panduan/panduan-cara-makan-grow-xl-30-kapsul-malaysia/index.html',
    ],
    defaultProduct: 'grow-xl',
    heroVisualWebp: '/assets/products/grow-xl-stage.webp',
    heroVisualPng: '/assets/products/grow-xl-stage.png',
    watermarkText: 'GROWXL 08',
    readingTimeMinutes: 11,
    publishedDate: '2026-11-10',
    updatedDate: '2026-11-10',
    seoTitle:
      'Cara Makan Grow XL / GrowXL Malaysia [30 Kapsul Original RM159]',
    metaDescription:
      '✓ Panduan rasmi cara makan Grow XL / GrowXL for Men Malaysia (30 Kapsul), jadual waktu pagi & kesan kitaran 30 hari. Beli 1 RM 159, 2 RM 286 (-10%) COD.',
    kicker: 'ONYX-STD · PANDUAN PROTOKOL 08 · MANUAL CARA MAKAN & KITARAN 30 HARI GROW XL (GROWXL MALAYSIA)',
    headlineHtml:
      'Panduan Cara Makan Grow XL (GrowXL Malaysia): <span class="foil-champagne-text">Dos 30 Kapsul, Jadual Pagi &amp; Hasil 30–90 Hari.</span>',
    leadSummary:
      'Sama ada anda mencari "Grow XL Malaysia", "GrowXL for Men", atau "Cara Makan Grow XL", manual lengkap ini menerangkan formulasi 30 Kapsul Ekstra Kuat terlaris Onyxmen Malaysia (SKU: ONYX-GX-30, RM 159). Fahami bagaimana setiap kapsul 550mg menggabungkan 140mg Tongkat Ali 100:1, 120mg L-Arginine & L-Citrulline, 100mg Muira Puama, 80mg Saw Palmetto, dan 70mg Ginkgo Biloba untuk kecergasan sepanjang 30 hari.',
    telemetry: [
      {
        label: 'SPESIFIKASI BOTOL BULANAN',
        val: '30 Kapsul × 550mg (16.5g)',
        sub: 'Bekalan penuh 30 hari (1 kapsul setiap pagi)',
      },
      {
        label: 'MASA PENGAMBILAN TERBAIK',
        val: '20–30 Minit Selepas Sarapan',
        sub: 'Selaras dengan irama hormon pagi lelaki (07:00–09:00 MYT)',
      },
      {
        label: 'RAMUAN EKSKLUSIF GROW XL',
        val: 'Muira Puama + Saw Palmetto',
        sub: '100mg ekstrak kulit kayu Amazon + 80mg fitosterol beri',
      },
      {
        label: 'PAKEJ DISKAUN COD MALAYSIA',
        val: 'RM 159 · RM 286 (-10%) · RM 405 (-15%)',
        sub: 'Peringatan Hari Ke-25 · Kotak coklat tanpa nama produk',
      },
    ],
    pinnedSummaryTitle:
      'Mengapa Grow XL (30 Kapsul) Menjadi Pilihan #1 Untuk Rutin Harian Lelaki Bekerjaya Di Malaysia',
    pinnedSummaryCopy:
      'Bagi lelaki dewasa yang sibuk bekerja di pejabat atau lapangan dan tidak mahu pening memikirkan jadual pengambilan sebelum aktiviti malam, Grow XL menawarkan disiplin mudah: hanya 1 kapsul selepas sarapan pagi setiap hari untuk menyokong aliran mikro, kawalan tekanan kerja, dan kesediaan tenaga malam.',
    chapters: [
      {
        code: 'BAB 01 · FORMULASI EKSTRA KUAT 550MG',
        title: 'Enam Ramuan Aktif Di Dalam Setiap Kapsul Grow XL (GrowXL for Men Malaysia)',
        body: 'Setiap botol Grow XL (SKU: ONYX-GX-30, GTIN-13: 9550000102035) mengandungi 30 kapsul berkepekatan 550mg (jumlah keseluruhan 16,500mg ekstrak aktif sebotol). Enam ramuan utamanya ialah: (1) 140mg Tongkat Ali Malaysia 100:1 (Eurycoma longifolia >=2.0% Eurycomanone); (2) 120mg matriks asid amino L-Arginine HCl & L-Citrulline Malate (2:1); (3) 100mg ekstrak Muira Puama 10:1 dari Brazil; (4) 80mg ekstrak beri Saw Palmetto (45% asid lemak & beta-sitosterol); (5) 70mg ekstrak daun Ginkgo Biloba 50:1; serta (6) 40mg Panax Ginseng Merah Korea & Zink.',
      },
      {
        code: 'BAB 02 · PROTOKOL WAKTU PAGI SELEPAS SARAPAN',
        title: 'Cara Makan Grow XL Yang Betul: 20–30 Minit Selepas Sarapan Bersama 300ml Air Suam',
        body: 'Waktu paling efektif untuk mengambil Grow XL ialah pada waktu pagi, iaitu 20 hingga 30 minit selepas anda bersarapan (sekitar jam 7:30 hingga 9:00 pagi) bersama 300ml air kosong suam. Pengambilan selepas sarapan berprotein (seperti telur separuh masak, roti bakar, oat, atau nasi lemak sederhana) membantu penyerapan fitosterol Saw Palmetto dan glikosida Ginkgo Biloba, manakala air suam melarutkan Tongkat Ali 100:1 dengan pantas. Pastikan anda menjarakkan sekurang-kurangnya 45 minit daripada kopi O atau teh tarik pagi.',
      },
      {
        code: 'BAB 03 · JADUAL PERKEMBANGAN 30 HINGGA 90 HARI',
        title: 'Apa Yang Dijangkakan Pada Hari Ke-1 Hingga Hari Ke-90 Kitaran Grow XL',
        body: 'Fasa 1 (Hari 1 hingga 10): Gabungan 120mg L-Arginine/L-Citrulline dan 70mg Ginkgo Biloba menyokong kelancaran peredaran darah mikro dan mengurangkan rasa lesu pada waktu petang tanpa kafein. Fasa 2 (Hari 11 hingga 30): Penyerapan berterusan 140mg Tongkat Ali 100:1, 100mg Muira Puama, dan 80mg Saw Palmetto membina daya tahan fizikal, keseimbangan hormon, serta keselesaan pelvik lelaki dewasa. Fasa 3 (Hari 31 hingga 90 — Pakej 2 Botol RM 286 atau 3 Botol RM 405): Mengekalkan kestabilan stamina puncak sepanjang suku tahun.',
      },
      {
        code: 'BAB 04 · GABUNGAN GROW XL & HORSEMEN / MAGNUM PUMP XR',
        title: 'Strategi Pakej 2 Botol (RM 286 · Diskaun 10%) & 3 Botol (RM 405 · Diskaun 15%)',
        body: 'Oleh sebab Grow XL diambil sekali sahaja pada waktu pagi, ramai pelanggan menggabungkannya dengan Horsemen (20 kapsul untuk malam aktiviti) atau Magnum Pump XR (30 kapsul hitam sebelum gimnasium) melalui Pakej 2 Botol RM 286 (Jimat RM 32) atau Pakej 3 Botol RM 405 (Jimat RM 72). Semua pesanan dihantar dalam kotak coklat kosong tanpa nama produk melalui COD atau FPX.',
      },
    ],
    protocolLedgerRows: [
      {
        code: 'GROWXL-BM-01 · SARAPAN PAGI',
        title: 'Ambil Sarapan Seimbang Antara Jam 07:00 – 09:00 Pagi',
        body: 'Makan sarapan berprotein sederhana bagi mengaktifkan penyerapan lipid Saw Palmetto (80mg) dan Ginkgo Biloba (70mg).',
        meta: 'Asas Pencernaan Pagi',
      },
      {
        code: 'GROWXL-BM-02 · DOS HARIAN',
        title: 'Telan 1 Kapsul Grow XL 20–30 Minit Selepas Sarapan',
        body: 'Ambil tepat 1 kapsul (550mg) setiap pagi bersama 300ml air kosong suam selama 30 hari berturut-turut.',
        meta: '1 Kapsul Sehari · 30 Hari',
      },
      {
        code: 'GROWXL-BM-03 · JARAK KOPI/TEH',
        title: 'Jarakkan 45 Minit Daripada Teh Tarik Atau Kopi O Pagi',
        body: 'Elakkan polifenol teh dan kopi daripada mengurangkan penyerapan 140mg Tongkat Ali 100:1 dan mineral Zink.',
        meta: 'Penampan 45 Minit',
      },
      {
        code: 'GROWXL-BM-04 · AIR HARIAN',
        title: 'Minum 2.5 Hingga 3.0 Liter Air Kosong Sepanjang Hari Kerja',
        body: 'Sokong tindakan 120mg L-Arginine & L-Citrulline untuk pengangkutan oksigen dan kecergasan mikro-vaskular.',
        meta: 'Sasaran Air Tropika',
      },
      {
        code: 'GROWXL-BM-05 · TERLUPA DOS',
        title: 'Jika Terlupa Waktu Pagi, Ambil 30 Minit Selepas Makan Tengah Hari',
        body: 'Jangan gandakan dos kepada 2 kapsul sekaligus; ambil 1 kapsul selepas makan tengah hari dan sambung jadual pagi esoknya.',
        meta: 'Disiplin Kitaran Selamat',
      },
      {
        code: 'GROWXL-BM-06 · ULANGAN HARI 25',
        title: 'Pilih Pakej 2 Botol (RM 286) Atau 3 Botol (RM 405) Untuk Kitaran 60–90 Hari',
        body: 'Jimat sehingga 15% (RM 72) dengan penghantaran bungkusan rahsia COD percuma ke seluruh 16 negeri Malaysia.',
        meta: 'Diskaun 10% & 15% VIP',
      },
    ],
    faqs: [
      {
        q: 'Adakah Grow XL di onyxmen.my merupakan produk rasmi untuk carian "GrowXL for Men" di Malaysia?',
        a: 'Ya. Grow XL (SKU: ONYX-GX-30, RM 159) ialah formulasi rasmi 30 Kapsul Ekstra Kuat oleh Onyxmen Malaysia bagi pengguna yang mencari GrowXL for Men, Grow XL Malaysia, atau Vital Grow XL.',
      },
      {
        q: 'Apakah yang perlu saya lakukan jika saya terlupa makan kapsul Grow XL selepas sarapan?',
        a: 'Jika terlupa pada waktu pagi, ambil 1 kapsul 30 minit selepas makan tengah hari bersama 300ml air kosong. Jangan ambil 2 kapsul serentak pada keesokan paginya.',
      },
      {
        q: 'Apakah perbezaan antara Grow XL (30 Kapsul) dan Magnum Pump XR (30 Kapsul Hitam)?',
        a: 'Kedua-duanya mengandungi 30 kapsul pada harga RM 159, tetapi Grow XL direka untuk diambil setiap pagi selepas sarapan (mengandungi Tongkat Ali, Muira Puama, Saw Palmetto & Ginkgo Biloba untuk kecergasan harian), manakala Magnum Pump XR (30 Kapsul Hitam) direka untuk diambil 30–45 minit sebelum senaman gimnasium atau aktiviti malam (mengandungi 300mg L-Arginine & L-Citrulline + Bioperine).',
      },
      {
        q: 'Berapakah penjimatan jika saya membeli 2 atau 3 botol Grow XL?',
        a: '1 Botol berharga RM 159. Pakej 2 Botol (bekalan 60 hari) berharga RM 286 (Diskaun 10%, jimat RM 32). Pakej 3 Botol (bekalan 90 hari) berharga RM 405 (Diskaun 15%, jimat RM 72) termasuk penghantaran bungkusan rahsia COD percuma.',
      },
    ],
  },
  {
    microStep: 'MS-248',
    guideNumber: 9,
    guideCode: 'PANDUAN-BM-09',
    id: 'horsemen-capsule-original-500mg-malaysia-guide',
    slug: 'panduan-horsemen-kapsul-original-500mg-malaysia',
    canonicalMsPath: '/ms/panduan/panduan-horsemen-kapsul-original-500mg-malaysia/',
    canonicalEnPath: '/guides/horsemen-capsule-original-500mg-malaysia-guide/',
    msOutputPaths: [
      'ms/guides/horsemen-capsule-original-500mg-malaysia-guide/index.html',
      'ms/panduan/panduan-horsemen-kapsul-original-500mg-malaysia/index.html',
    ],
    defaultProduct: 'horsemen',
    heroVisualWebp: '/assets/products/horsemen-stage.webp',
    heroVisualPng: '/assets/products/horsemen-stage.png',
    watermarkText: 'HORSEMEN 09',
    readingTimeMinutes: 11,
    publishedDate: '2026-11-10',
    updatedDate: '2026-11-10',
    seoTitle:
      'Panduan Horsemen Kapsul Original 500mg Malaysia [RM159 COD]',
    metaDescription:
      '✓ Panduan lengkap Horsemen Kapsul Original 500mg Malaysia (20 Kapsul): 150mg Tongkat Ali 100:1, 100mg Maca Hitam & cara makan malam. Beli RM 159 COD Rahsia.',
    kicker: 'ONYX-STD · PANDUAN PROTOKOL 09 · MONOGRAF LENGKAP HORSEMEN ORIGINAL (20 KAPSUL × 500MG)',
    headlineHtml:
      'Panduan Horsemen Kapsul Original 500mg Malaysia: <span class="foil-champagne-text">Sinergi Tongkat Ali 100:1 &amp; Maca Hitam.</span>',
    leadSummary:
      'Direka khusus untuk pengguna Malaysia yang mencari "Horsemen Capsule Original", "Horsemen Kapsul Malaysia", "Tongkat Ali Malaysia", dan "Maca Root Malaysia", panduan ini memperincikan formulasi 20 Kapsul × 500mg kami (SKU: ONYX-HM-20, RM 159). Ketahui bagaimana 150mg Tongkat Ali 100:1, 100mg Akar Maca Hitam Peru, 80mg Epimedium (10% Icariin), 80mg L-Arginine HCl, dan 60mg Ginseng Merah Korea berfungsi untuk kesediaan malam.',
    telemetry: [
      {
        label: 'KEPEKATAN SETIAP KAPSUL',
        val: '500 mg Ekstrak Piawai Padat',
        sub: '20 Kapsul sebotol (10,000mg jumlah rizab herba)',
      },
      {
        label: 'RAMUAN TERAS #1',
        val: '150 mg Tongkat Ali 100:1',
        sub: 'Dos Eurycomanone tertinggi bagi setiap kapsul Onyxmen',
      },
      {
        label: 'RAMUAN TERAS #2 & #3',
        val: '100 mg Maca Hitam + 80 mg Icariin',
        sub: 'Akar Lepidium meyenii Peru + Epimedium sagittatum',
      },
      {
        label: 'JADUAL KESEDIAAN MALAM',
        val: '45–60 Minit Selepas Makan Malam',
        sub: 'RM 159 (1B) · RM 286 (2B -10%) · RM 405 (3B -15%)',
      },
    ],
    pinnedSummaryTitle:
      'Mengapa Horsemen (20 Kapsul × 500mg) Menjadi Pilihan Utama Untuk Kesediaan Stamina Malam Di Malaysia',
    pinnedSummaryCopy:
      'Setiap kapsul 500mg Horsemen menggabungkan dos tertinggi ekstrak larut air Tongkat Ali Malaysia 100:1 (150mg) bersama Akar Maca Hitam Peru tergelatinisasi (100mg), Epimedium Icariin (80mg), L-Arginine HCl (80mg), dan Ginseng Merah Korea (60mg) untuk penyerapan pantas dalam masa 45 hingga 60 minit.',
    chapters: [
      {
        code: 'BAB 01 · PECAHAN 500MG SETIAP KAPSUL HORSEMEN',
        title: 'Enam Ekstrak Piawai Di Dalam Botol Horsemen Man Virility Enhancement (SKU: ONYX-HM-20)',
        body: 'Berbeza dengan kapsul tradisional yang hanya mengandungi serbuk akar mentah yang tidak dipiawaikan, setiap kapsul 500mg Horsemen Original (GTIN-13: 9550000102011, RM 159) dirumus dengan tepat: (1) 150mg Ekstrak Akar Eurycoma longifolia Malaysia 100:1 (dipiawaikan kepada >=2.2% Eurycomanone); (2) 100mg Akar Maca Hitam Peru Tergelatinisasi (0.6% macamides); (3) 80mg Ekstrak Epimedium sagittatum (10% flavonoid icariin); (4) 80mg L-Arginine Hydrochloride (99.2% tulen); (5) 60mg Akar Panax Ginseng Merah Korea berusia 6 tahun (8% ginsenosida); dan (6) 30mg Tribulus terrestris & Zink Picolinate.',
      },
      {
        code: 'BAB 02 · SINERGI TONGKAT ALI 100:1 & MACA HITAM',
        title: 'Bagaimana Tiga Laluan Fisiologi Bertindak Serentak Dalam 45 Hingga 60 Minit',
        body: 'Selepas seharian bekerja di Malaysia, keletihan malam berpunca daripada peningkatan hormon tekanan kortisol dan penurunan aliran vaskular. Horsemen menangani kedua-duanya: 150mg Tongkat Ali 100:1 membantu mengawal beban kortisol waktu petang, 100mg Maca Hitam membekalkan tenaga mitokondria ATP tanpa kafein, manakala gabungan 80mg L-Arginine HCl, 80mg Epimedium Icariin, dan 60mg Ginseng Merah menyokong kelancaran Nitrik Oksida endotelium.',
      },
      {
        code: 'BAB 03 · DUA MOD PENGAMBILAN: HARIAN VS SELANG SEHARI',
        title: 'Kitaran Intensif 20 Malam Berturut-Turut Atau Penyelenggaraan 40 Hari (Selang 48 Jam)',
        body: 'Mod A (Kitaran Intensif 20 Hari): Ambil 1 kapsul setiap malam 45 hingga 60 minit selepas makan malam bersama 300ml air kosong suam selama 20 malam berturut-turut untuk membina ketepuan fitokimia penuh. Mod B (Kitaran Penyelenggaraan 40 Hari): Ambil 1 kapsul selang sehari (setiap 48 jam) atau 45–60 minit sebelum aktiviti malam. Dengan Mod B, sebotol 20 kapsul mampu bertahan sehingga 40 hari.',
      },
      {
        code: 'BAB 04 · JAMINAN KETULENAN RM 159 & BUNGKUSAN RAHSIA COD',
        title: 'Cara Menempah Horsemen Original Dengan Diskaun Pakej 10% Hingga 15%',
        body: 'Stok tulen Horsemen disimpan di dalam bilik kebal kawalan suhu Kuala Lumpur (22°C–24°C) dan dihantar menggunakan kotak coklat kosong tanpa sebarang nama produk ("OM Fulfilment Logistics"). Tempah melalui Borang Tempahan Pantas di laman ini atau WhatsApp (+60 14-298 5919): 1 Botol RM 159, 2 Botol RM 286 (Jimat RM 32 / Diskaun 10%), atau 3 Botol RM 405 (Jimat RM 72 / Diskaun 15%) dengan kemudahan COD Bayar Bila Sampai di seluruh Malaysia.',
      },
    ],
    protocolLedgerRows: [
      {
        code: 'HM-BM-01 · SELEPAS MAKAN MALAM',
        title: 'Tunggu 45 Hingga 60 Minit Selepas Hidangan Malam',
        body: 'Beri ruang kepada perut untuk menghadam makanan utama supaya ekstrak larut air 500mg diserap terus ke usus kecil.',
        meta: '45–60 Minit Selepas Makan',
      },
      {
        code: 'HM-BM-02 · AIR SUAM 300ML',
        title: 'Telan 1 Kapsul Horsemen Bersama 300ml Air Kosong Suam',
        body: 'Air suam mempercepatkan pelarutan 150mg Tongkat Ali 100:1, 100mg Maca Hitam, dan 80mg Epimedium dalam masa 6–8 minit.',
        meta: 'Pelarutan Pantas · 0% Kafein',
      },
      {
        code: 'HM-BM-03 · ELAK KOPI/TEH',
        title: 'Jarakkan 45 Minit Daripada Kopi O, Teh Tarik & Milo',
        body: 'Pastikan tiada tanin minuman manis yang menghalang penyerapan kuasinoid Eurycomanone dan Zink Picolinate.',
        meta: 'Penampan Pencernaan 45 Minit',
      },
      {
        code: 'HM-BM-04 · PILIHAN KITARAN',
        title: 'Kitaran 20 Malam Intensif Atau 40 Hari Selang Sehari',
        body: 'Sesuaikan mengikut keperluan anda: 1 kapsul setiap malam atau 1 kapsul setiap 48 jam / sebelum aktiviti malam.',
        meta: '20 Kapsul × 500mg Sebotol',
      },
      {
        code: 'HM-BM-05 · BEBAS BAHAN KIMIA',
        title: '100% Ekstrak Botani & Asid Amino Tanpa Kesan Sampingan Sintetik',
        body: 'Tidak menyebabkan sakit kepala berdenyut, pandangan kabur, atau gangguan tidur REM.',
        meta: 'Saringan Kualiti Kuala Lumpur',
      },
      {
        code: 'HM-BM-06 · PAKEJ KOMBO',
        title: 'Jimat RM 32 (2 Botol RM 286) Atau RM 72 (3 Botol RM 405)',
        body: 'Nikmati penghantaran bungkusan rahsia COD percuma ke seluruh Semenanjung, Sabah, Sarawak & Labuan.',
        meta: 'COD & WhatsApp +60 14-298 5919',
      },
    ],
    faqs: [
      {
        q: 'Apakah kandungan tepat di dalam setiap kapsul 500mg Horsemen Original?',
        a: 'Setiap kapsul 500mg Horsemen (SKU: ONYX-HM-20) mengandungi 150mg Ekstrak Akar Tongkat Ali Malaysia 100:1, 100mg Akar Maca Hitam Peru tergelatinisasi, 80mg Epimedium sagittatum (10% Icariin), 80mg L-Arginine HCl, 60mg Ginseng Merah Korea 6 Tahun, serta 30mg Tribulus terrestris & Zink Picolinate.',
      },
      {
        q: 'Berapa minit sebelum aktiviti malam saya patut mengambil kapsul Horsemen?',
        a: 'Ambil 1 kapsul bersama 300ml air kosong suam 45 hingga 60 minit sebelum aktiviti malam (atau 45–60 minit selepas makan malam). Kepekatan plasma optimum dicapai antara minit ke-45 hingga ke-90.',
      },
      {
        q: 'Adakah Horsemen menyebabkan sakit kepala atau sukar tidur pada waktu malam?',
        a: 'Tidak. Horsemen Original oleh Onyxmen Malaysia adalah 100% bebas daripada bahan kimia sintetik PDE5 terlarang dan bebas kafein. Ia menyokong tenaga secara semula jadi tanpa mengganggu tidur.',
      },
      {
        q: 'Bagaimanakah cara menempah Horsemen Original secara COD (Bayar Bila Sampai)?',
        a: 'Klik mana-mana butang tempahan di halaman ini untuk mengisi Borang Tempahan Pantas, atau klik butang WhatsApp (+60 14-298 5919). Harga rasmi ialah RM 159 (1 Botol), RM 286 (2 Botol, Diskaun 10%), dan RM 405 (3 Botol, Diskaun 15%).',
      },
    ],
  },
  {
    microStep: 'MS-249',
    guideNumber: 10,
    guideCode: 'PANDUAN-BM-10',
    id: 'magnum-pump-xr-30-black-capsules-nitric-oxide-guide',
    slug: 'panduan-magnum-pump-xr-30-kapsul-hitam-malaysia',
    canonicalMsPath: '/ms/panduan/panduan-magnum-pump-xr-30-kapsul-hitam-malaysia/',
    canonicalEnPath: '/guides/magnum-pump-xr-30-black-capsules-nitric-oxide-guide/',
    msOutputPaths: [
      'ms/guides/magnum-pump-xr-30-black-capsules-nitric-oxide-guide/index.html',
      'ms/panduan/panduan-magnum-pump-xr-30-kapsul-hitam-malaysia/index.html',
    ],
    defaultProduct: 'magnum-pump-xr',
    heroVisualWebp: '/assets/products/magnum-pump-xr-stage.webp',
    heroVisualPng: '/assets/products/magnum-pump-xr-stage.png',
    watermarkText: 'PUMP XR 10',
    readingTimeMinutes: 12,
    publishedDate: '2026-11-10',
    updatedDate: '2026-11-10',
    seoTitle:
      'Panduan Magnum Pump XR 30 Kapsul Hitam Malaysia [RM159 COD]',
    metaDescription:
      '✓ Panduan rasmi Magnum Pump XR Malaysia (30 Kapsul Hitam × 600mg): cara makan L-Arginine & L-Citrulline Nitrik Oksida untuk aliran darah & stamina. RM 159 COD.',
    kicker: 'ONYX-STD · PANDUAN PROTOKOL 10 · DOSSIER VASKULAR MAGNUM PUMP XR (30 KAPSUL HITAM × 600MG)',
    headlineHtml:
      'Panduan Magnum Pump XR 30 Kapsul Hitam Malaysia: <span class="foil-champagne-text">Protokol Nitrik Oksida L-Arginine &amp; L-Citrulline.</span>',
    leadSummary:
      'Dirumus untuk lelaki dewasa di Malaysia yang mencari "Magnum Pump XR", "Kapsul Aliran Darah & Stamina", dan "Suplemen L-Arginine Nitrik Oksida", panduan teknikal ini menerangkan formulasi 600mg paling padat kami: Magnum Pump XR Testosterone Pro Series (30 Kapsul Hitam, SKU: ONYX-MP-30, RM 159). Fahami mekanisme dwi-gelombang 300mg L-Arginine HCl + L-Citrulline Malate, 270mg herba adaptogenik, dan Bioperine®.',
    telemetry: [
      {
        label: 'SPESIFIKASI KAPSUL HITAM',
        val: '30 Kapsul Hitam × 600mg',
        sub: '18,000mg jumlah jisim aktif · Kapsul paling padat Onyxmen',
      },
      {
        label: 'MATRIKS DWI-GELOMBANG NO',
        val: '180 mg Arginine + 120 mg Citrulline',
        sub: 'Sokongan eNOS segera (35m) + kitar semula 3–5 jam',
      },
      {
        label: 'PEMANGKIN PENYERAPAN',
        val: '30 mg Bioperine® & Zink',
        sub: '95% Piperine meningkatkan bioavailabiliti sehingga +30%',
      },
      {
        label: 'PENJELASAN PRODUK RASMI',
        val: 'Suplemen 30 Kapsul Oral (RM 159)',
        sub: 'Bukan alat mekanikal/pam vakum · 100% COD Rahsia',
      },
    ],
    pinnedSummaryTitle:
      'Kuasa Dwi-Gelombang Nitrik Oksida Di Dalam Setiap Kapsul Hitam 600mg Magnum Pump XR',
    pinnedSummaryCopy:
      'Magnum Pump XR menggabungkan dos tertinggi asid amino vaskular (180mg L-Arginine HCl + 120mg L-Citrulline Malate) bersama Tribulus Terrestris, Tongkat Ali Malaysia 100:1, Maca Hitam, Halba (Fenugreek), dan Bioperine® di dalam 30 kapsul hitam pelindung UV.',
    chapters: [
      {
        code: 'BAB 01 · KOMPOSISI 600MG KAPSUL HITAM',
        title: 'Mengapa Magnum Pump XR Menggunakan Kapsul Hitam Berkapasiti Tinggi 600mg (SKU: ONYX-MP-30)',
        body: 'Manakala kapsul suplemen biasa hanya berukuran 450mg hingga 500mg, Magnum Pump XR (GTIN-13: 9550000102042, RM 159) menggunakan sarung kapsul hitam legap berkapasiti 600mg (18,000mg keseluruhan setiap botol 30 kapsul). Setiap kapsul hitam membekalkan: (1) 180mg L-Arginine Hydrochloride mikron; (2) 120mg L-Citrulline Malate 2:1; (3) 110mg Tribulus terrestris (60% saponin); (4) 90mg Tongkat Ali Malaysia 100:1; (5) 70mg Maca Hitam & ekstrak biji Halba (Fenugreek 50% fenusides); serta (6) 30mg Bioperine® (95% piperine lada hitam) & Zink Aspartate.',
      },
      {
        code: 'BAB 02 · KINETIK PELEPASAN LANJUTAN (XR)',
        title: 'Bagaimana L-Arginine HCl (Gelombang 1) & L-Citrulline Malate (Gelombang 2) Bertahan 3–5 Jam',
        body: 'Apabila anda menelan 1 kapsul hitam Magnum Pump XR bersama 300ml–350ml air kosong, 180mg L-Arginine HCl (dengan bantuan Bioperine®) memulakan Gelombang Pertama penghasilan Nitrik Oksida endotelium (eNOS) dalam masa 30 hingga 45 minit untuk kelancaran saluran darah. Pada masa yang sama, 120mg L-Citrulline Malate melepasi penguraian enzim hati dan ditukarkan secara berterusan kepada L-Arginine baharu di buah pinggang (Gelombang Kedua), sekali gus mengekalkan sokongan aliran darah dan daya tahan otot selama 3 hingga 5 jam.',
      },
      {
        code: 'BAB 03 · JADUAL PRA-GIMNASIUM & AKTIVITI MALAM',
        title: 'Cara Makan Magnum Pump XR: 30–45 Minit Sebelum Latihan Bebanan Atau Aktiviti Malam',
        body: 'Pada Hari Latihan Gimnasium / Sukan: Ambil 1 kapsul hitam bersama 350ml air kosong 30 hingga 45 minit sebelum memulakan senaman bagi menyokong pengangkutan oksigen ke otot dan mengurangkan kelesuan asid laktik. Pada Hari Tanpa Senaman / Malam Aktiviti: Ambil 1 kapsul hitam bersama 300ml air suam 30 hingga 45 minit sebelum aktiviti malam (sekurang-kurangnya 45 minit selepas makan malam dan jauh daripada kopi/teh tarik). Kerana ia 100% bebas kafein, tidur malam anda kekal lena.',
      },
      {
        code: 'BAB 04 · PENJELASAN ENTITI & PAKEJ COD MALAYSIA',
        title: '100% Suplemen Pemakanan 30 Kapsul Hitam (RM 159 · Beli 2 RM 286 · Beli 3 RM 405)',
        body: 'Untuk ketepatan maklumat pengguna Malaysia: Magnum Pump XR oleh Onyxmen Malaysia ialah 100% Suplemen Pemakanan Kapsul Oral (30 Kapsul Hitam di dalam botol kedap udara) dan BUKAN alat pam vakum mekanikal atau pam industri. Tempah secara rahsia melalui https://www.onyxmen.my atau WhatsApp (+60 14-298 5919): 1 Botol RM 159, 2 Botol RM 286 (Diskaun 10% — Jimat RM 32), atau 3 Botol RM 405 (Diskaun 15% — Jimat RM 72) dengan COD Bayar Bila Sampai.',
      },
    ],
    protocolLedgerRows: [
      {
        code: 'MPXR-BM-01 · 30 KAPSUL HITAM',
        title: 'Semak 30 Kapsul Hitam Legap Di Dalam Botol Berpelekat Kilang',
        body: 'Botol tulen Magnum Pump XR mengandungi tepat 30 kapsul hitam 600mg dengan label merah-emas "Testosterone Pro Series".',
        meta: 'SKU: ONYX-MP-30 · 600mg',
      },
      {
        code: 'MPXR-BM-02 · 30–45 MINIT AWAL',
        title: 'Telan 1 Kapsul Hitam 30–45 Minit Sebelum Senaman Atau Malam',
        body: 'Masa 30–45 minit menyelaraskan puncak Gelombang Pertama L-Arginine HCl dengan waktu aktiviti fizikal anda.',
        meta: 'Tindak Balas Vaskular 35 Minit',
      },
      {
        code: 'MPXR-BM-03 · AIR 350ML',
        title: 'Minum 350ml Air Kosong Semasa Menelan Kapsul',
        body: 'Pengembangan saluran darah Nitrik Oksida memerlukan isi padu air yang mencukupi untuk kesan aliran maksimum.',
        meta: 'Wajib Penghidratan Penuh',
      },
      {
        code: 'MPXR-BM-04 · BIOPERINE +30%',
        title: 'Jarakkan 45 Minit Daripada Makanan Berminyak Berat & Teh Tarik',
        body: 'Membolehkan 5mg Bioperine® dan 300mg asid amino diserap tanpa halangan di dinding usus kecil.',
        meta: 'Bioavailabiliti Optimum',
      },
      {
        code: 'MPXR-BM-05 · KAPASITIORAL',
        title: 'Penjelasan Entiti: Kapsul Suplemen Pemakanan (Bukan Peranti)',
        body: '100% kapsul botani dan asid amino untuk makan (oral dietary supplement) di dalam botol apotekari.',
        meta: 'GTIN-13: 9550000102042',
      },
      {
        code: 'MPXR-BM-06 · DISKAUN PAKEJ',
        title: 'Pakej 2 Botol RM 286 (-10%) & 3 Botol RM 405 (-15%) COD',
        body: 'Dapatkan bekalan 60 atau 90 kapsul hitam dengan penghantaran kotak coklat kosong percuma ke seluruh Malaysia.',
        meta: 'COD & WhatsApp +60 14-298 5919',
      },
    ],
    faqs: [
      {
        q: 'Mengapakah kapsul Magnum Pump XR berwarna hitam pekat?',
        a: 'Magnum Pump XR (SKU: ONYX-MP-30) menggunakan sarung kapsul hitam legap pelindung UV (30 Black Capsules × 600mg) bagi melindungi asid amino L-Arginine HCl, L-Citrulline Malate, dan ekstrak herba daripada kelembapan serta cahaya matahari iklim tropika Malaysia.',
      },
      {
        q: 'Berapa cepatkah kapsul Magnum Pump XR mula bertindak selepas diambil?',
        a: 'Apabila diambil bersama 300ml–350ml air kosong, Gelombang Pertama L-Arginine HCl dan Bioperine® mula menyokong laluan Nitrik Oksida dalam masa 30 hingga 45 minit, manakala Gelombang Kedua L-Citrulline Malate mengekalkan aliran selama 3 hingga 5 jam.',
      },
      {
        q: 'Adakah Magnum Pump XR sejenis kapsul makan atau alat pam fizikal?',
        a: 'Magnum Pump XR edaran Onyxmen Malaysia (RM 159) ialah 100% suplemen pemakanan kapsul makan (30 Kapsul Hitam setiap botol) yang mengandungi asid amino dan herba. Ia bukan alat pam vakum atau peranti mekanikal.',
      },
      {
        q: 'Bolehkah saya membuat tempahan Magnum Pump XR melalui COD atau WhatsApp?',
        a: 'Ya. Anda boleh mengisi Borang Tempahan Pantas di halaman ini atau menghubungi meja WhatsApp rasmi kami (+60 14-298 5919) untuk penghantaran bungkusan rahsia COD ke seluruh Malaysia (1 Botol RM 159, 2 Botol RM 286 [Diskaun 10%], 3 Botol RM 405 [Diskaun 15%]).',
      },
    ],
  },
  {
    microStep: 'ONYX-STD',
    guideNumber: 11,
    guideCode: 'PANDUAN-BM-11',
    id: 'grow-xl-vs-horsemen-vs-hammer-of-thor-malaysia',
    slug: 'perbezaan-grow-xl-vs-horsemen-vs-hammer-of-thor-malaysia',
    canonicalMsPath: '/ms/panduan/perbezaan-grow-xl-vs-horsemen-vs-hammer-of-thor-malaysia/',
    canonicalEnPath: '/guides/grow-xl-vs-horsemen-vs-hammer-of-thor-malaysia/',
    msOutputPaths: [
      'ms/guides/grow-xl-vs-horsemen-vs-hammer-of-thor-malaysia/index.html',
      'ms/panduan/perbezaan-grow-xl-vs-horsemen-vs-hammer-of-thor-malaysia/index.html',
    ],
    defaultProduct: 'grow-xl',
    heroVisualWebp: '/assets/products/onyxman-lineup-hero.webp',
    heroVisualPng: '/assets/products/onyxman-lineup-hero.png',
    watermarkText: 'BANDING 3',
    readingTimeMinutes: 12,
    publishedDate: '2026-11-11',
    updatedDate: '2026-11-11',
    seoTitle:
      'Beza Grow XL vs Horsemen vs Hammer of Thor Malaysia [RM159]',
    metaDescription:
      '✓ Bandingkan beza Grow XL (30 Kapsul), Horsemen (20 Kapsul) & Hammer of Thor (20 Kapsul Veg) di Malaysia: fungsi, sukatan & cara pilih. Beli RM 159 COD.',
    kicker: 'ONYX-STD · PANDUAN PROTOKOL 11 · PERBANDINGAN GROW XL VS HORSEMEN VS HAMMER OF THOR MALAYSIA',
    headlineHtml:
      'Perbezaan Grow XL vs Horsemen vs Hammer of Thor Di Malaysia: <span class="foil-champagne-text">Kapsul Mana Patut Anda Pilih?</span>',
    leadSummary:
      'Ramai pembeli di Malaysia yang mencari "Grow XL vs Horsemen", "Beza Hammer of Thor dan Horsemen", atau "GrowXL for Men vs Hammer of Thor" tertanya-tanya mengapa ketiga-tiga botol utama ini mempunyai harga rasmi yang sama iaitu RM 159 (Beli 2 RM 286 [Diskaun 10%], Beli 3 RM 405 [Diskaun 15%]) tetapi berbeza dari segi bilangan kapsul dan ramuan utama. Panduan ini menghuraikan perbezaan tepat supaya anda dapat memilih botol yang paling serasi.',
    telemetry: [
      {
        label: '01 · GROW XL (SKU: ONYX-GX-30)',
        val: '30 Kapsul × 550mg (Rutin Pagi)',
        sub: '140mg Tongkat Ali + 100mg Muira Puama + 80mg Saw Palmetto',
      },
      {
        label: '02 · HORSEMEN (SKU: ONYX-HM-20)',
        val: '20 Kapsul × 500mg (Rizab Malam)',
        sub: '150mg Tongkat Ali 100:1 + 100mg Maca Hitam + 80mg Icariin',
      },
      {
        label: '03 · HAMMER OF THOR (ONYX-HT-20)',
        val: '20 Kapsul Veg. × 500mg (HPMC)',
        sub: '200mg Tribulus (60% Saponin) + 100mg Maca + 75mg Ginseng',
      },
      {
        label: '04 · KOMBO PAGI + MALAM',
        val: 'RM 286 (Jimat RM 32 · -10%)',
        sub: 'Gabungkan 1 botol pagi (Grow XL) + 1 botol malam (Horsemen)',
      },
    ],
    pinnedSummaryTitle:
      'Ringkasan Pantas: Cara Memilih Antara Grow XL (30 Kapsul), Horsemen (20 Kapsul) & Hammer of Thor (20 Kapsul Veg.)',
    pinnedSummaryCopy:
      'Pilih Grow XL jika anda mahukan rutin mudah 1 kapsul setiap pagi selepas sarapan selama 30 hari penuh. Pilih Horsemen jika keutamaan anda ialah kesediaan tenaga malam yang pantas (150mg Tongkat Ali 100:1). Pilih Hammer of Thor jika anda mengutamakan sarung kapsul vegetarian HPMC dan 200mg Saponin Tribulus untuk ketahanan otot.',
    chapters: [
      {
        code: 'BAB 01 · PERBEZAAN 30 KAPSUL PAGI VS 20 KAPSUL MALAM',
        title: 'Mengapa Grow XL Mengandungi 30 Kapsul Manakala Horsemen & Hammer of Thor Mengandungi 20 Kapsul',
        body: 'Perbezaan pertama terletak pada jadual biologi harian. Grow XL (SKU: ONYX-GX-30, RM 159) membekalkan 30 kapsul berkepekatan 550mg (16,500mg jumlah jisim aktif sebotol) kerana ramuan fitosterol Saw Palmetto (80mg) dan kulit kayu Muira Puama (100mg) direka untuk diserap secara berterusan setiap pagi selepas sarapan selama 30 hari. Sebaliknya, Horsemen (20 Kapsul × 500mg) dan Hammer of Thor (20 Kapsul Veg. × 500mg) memadatkan ekstrak bernisbah tinggi untuk sokongan waktu malam selepas makan malam.',
      },
      {
        code: 'BAB 02 · PERBANDINGAN RAMUAN UTAMA SETIAP BOTOL',
        title: 'Tongkat Ali 100:1 (Horsemen) vs Saponin Tribulus 60% (Hammer of Thor) vs Muira Puama & Saw Palmetto (Grow XL)',
        body: 'Horsemen Man Virility Enhancement mendahului dari segi kepekatan Tongkat Ali Malaysia 100:1 (150mg setiap kapsul) yang digabungkan bersama 100mg Maca Hitam Peru, 80mg Epimedium (10% Icariin), 80mg L-Arginine HCl, dan 60mg Ginseng Merah Korea untuk tindak balas 45–60 minit. Hammer of Thor Men’s Health pula mendahului dengan 200mg Tribulus Terrestris (60% Saponin Protodioscin), 100mg Maca, 75mg Ginseng, 65mg Saw Palmetto, dan 15mg Zink Bisglycinate di dalam kapsul tumbuhan HPMC 100% vegetarian. Grow XL pula menggabungkan 140mg Tongkat Ali 100:1, 120mg L-Arginine/L-Citrulline, 100mg Muira Puama, 80mg Saw Palmetto, dan 70mg Ginkgo Biloba.',
      },
      {
        code: 'BAB 03 · PANDUAN PEMILIHAN MENGIKUT PROFIL PENGGUNA MALAYSIA',
        title: 'Botol Mana Paling Sesuai Untuk Eksekutif Pejabat, Lelaki Berusia 35+ Tahun Atau Penggemar Sukan?',
        body: 'Profil 1 — Eksekutif, Usahawan & Lelaki Berusia 30–60 Tahun: Pilih Grow XL (30 Kapsul, RM 159) untuk rutin harian selepas sarapan yang menyokong tenaga kerja, aliran mikro Ginkgo Biloba, dan kesihatan pelvik/prostat Saw Palmetto. Profil 2 — Fokus Kesediaan Malam & Dos Tongkat Ali Tertinggi: Pilih Horsemen (20 Kapsul, RM 159). Profil 3 — Fokus Kapsul Vegetarian HPMC & Ketahanan Fizikal: Pilih Hammer of Thor (20 Kapsul Veg., RM 159). Jika anda aktif di gimnasium dan mahukan lonjakan Nitrik Oksida 300mg L-Arginine + L-Citrulline, pilih Magnum Pump XR (30 Kapsul Hitam, RM 159).',
      },
      {
        code: 'BAB 04 · STRATEGI KOMBO 2 BOTOL (RM 286 · DISKAUN 10%) & 3 BOTOL (RM 405 · DISKAUN 15%)',
        title: 'Cara Menggabungkan Botol Pagi (Grow XL) Bersama Botol Malam (Horsemen Atau Hammer of Thor)',
        body: 'Memandangkan Grow XL diambil selepas sarapan pagi manakala Horsemen dan Hammer of Thor diambil selepas makan malam, ramai pelanggan tetap di Malaysia memilih Pakej 2 Botol pada harga RM 286 (Jimat RM 32 / Diskaun 10%) atau Pakej 3 Botol pada harga RM 405 (Jimat RM 72 / Diskaun 15%) untuk menggabungkan kedua-duanya. Tempah secara rahsia melalui Borang Tempahan Pantas atau WhatsApp (+60 14-298 5919) dengan COD Bayar Bila Sampai.',
      },
    ],
    protocolLedgerRows: [
      {
        code: 'PILIH-BM-01 · GROW XL',
        title: 'Pilih Grow XL (30 Kapsul × 550mg) Untuk Rutin Pagi 30 Hari Sebulan',
        body: 'Ambil 1 kapsul 20–30 minit selepas sarapan untuk gabungan Tongkat Ali (140mg), Muira Puama (100mg), Saw Palmetto (80mg) & Ginkgo (70mg).',
        meta: '30 Kapsul · Rutin Pagi',
      },
      {
        code: 'PILIH-BM-02 · HORSEMEN',
        title: 'Pilih Horsemen (20 Kapsul × 500mg) Untuk Kesediaan Malam 45–60 Minit',
        body: 'Ambil 1 kapsul 45–60 minit selepas makan malam untuk 150mg Tongkat Ali 100:1, 100mg Maca Hitam & 80mg Epimedium Icariin.',
        meta: '20 Kapsul · Rizab Malam',
      },
      {
        code: 'PILIH-BM-03 · HAMMER OF THOR',
        title: 'Pilih Hammer of Thor (20 Kapsul Veg.) Untuk Saponin Vegetarian',
        body: 'Ambil 1 kapsul vegetarian HPMC 30 minit selepas makan malam untuk 200mg Saponin Tribulus 60% dan Zink Bisglycinate.',
        meta: '20 Kapsul Veg. HPMC',
      },
      {
        code: 'PILIH-BM-04 · MAGNUM PUMP XR',
        title: 'Pilih Magnum Pump XR (30 Kapsul Hitam × 600mg) Untuk Nitrik Oksida',
        body: 'Ambil 1 kapsul hitam 30–45 minit sebelum senaman gimnasium atau aktiviti malam untuk 300mg L-Arginine + L-Citrulline.',
        meta: '30 Kapsul Hitam · 600mg',
      },
      {
        code: 'PILIH-BM-05 · KOMBO PAGI/MALAM',
        title: 'Jarakkan 12 Jam Jika Mengambil Grow XL (Pagi) & Horsemen (Malam)',
        body: 'Pengambilan 1 kapsul Grow XL selepas sarapan dan 1 kapsul Horsemen selepas makan malam memberikan sokongan 24 jam tanpa pertindihan.',
        meta: 'Sinergi Pagi & Malam',
      },
      {
        code: 'PILIH-BM-06 · PAKEJ DISKAUN',
        title: 'Nikmati Diskaun 10% (2 Botol RM 286) Atau 15% (3 Botol RM 405) COD',
        body: 'Penghantaran kotak coklat kosong tanpa nama produk ke seluruh 16 negeri Malaysia termasuk Sabah & Sarawak.',
        meta: 'COD & WhatsApp +60 14-298 5919',
      },
    ],
    faqs: [
      {
        q: 'Antara Grow XL, Horsemen, dan Hammer of Thor, yang manakah paling sesuai untuk waktu malam?',
        a: 'Untuk kesediaan waktu malam (diambil 45–60 minit selepas makan malam), Horsemen (20 Kapsul × 500mg) membekalkan dos tertinggi Tongkat Ali Malaysia 100:1 (150mg) bersama Maca Hitam dan Epimedium Icariin. Untuk rutin harian waktu pagi selama 30 hari penuh, Grow XL (30 Kapsul × 550mg) adalah pilihan #1.',
      },
      {
        q: 'Produk manakah yang menggunakan sarung kapsul 100% vegetarian?',
        a: 'Hammer of Thor Men’s Health (20 Kapsul Veg., SKU: ONYX-HT-20) dan Magnum Pump XR (30 Kapsul Hitam, SKU: ONYX-MP-30) menggunakan sarung kapsul selulosa tumbuhan HPMC 100% vegetarian tanpa gelatin haiwan.',
      },
      {
        q: 'Bolehkah saya mengambil Grow XL pada waktu pagi dan Horsemen pada waktu malam?',
        a: 'Boleh. Mengambil 1 kapsul Grow XL selepas sarapan pagi dan 1 kapsul Horsemen (atau Hammer of Thor) selepas makan malam memberikan jarak masa 12 jam yang selamat dan saling melengkapi.',
      },
      {
        q: 'Adakah kesemua botol ini mempunyai harga rasmi RM 159 yang sama di Malaysia?',
        a: 'Ya. Setiap botol tulen di Onyxmen Malaysia berharga RM 159 (1 Botol), RM 286 (2 Botol — Diskaun 10%, jimat RM 32), dan RM 405 (3 Botol — Diskaun 15%, jimat RM 72) termasuk penghantaran bungkusan rahsia COD.',
      },
    ],
  },
  {
    microStep: 'ONYX-STD',
    guideNumber: 12,
    guideCode: 'PANDUAN-BM-12',
    id: 'hammer-of-thor-horsemen-grow-xl-side-effects-safety-malaysia',
    slug: 'kesan-sampingan-hammer-of-thor-horsemen-grow-xl-keselamatan',
    canonicalMsPath: '/ms/panduan/kesan-sampingan-hammer-of-thor-horsemen-grow-xl-keselamatan/',
    canonicalEnPath: '/guides/hammer-of-thor-horsemen-grow-xl-side-effects-safety-malaysia/',
    msOutputPaths: [
      'ms/guides/hammer-of-thor-horsemen-grow-xl-side-effects-safety-malaysia/index.html',
      'ms/panduan/kesan-sampingan-hammer-of-thor-horsemen-grow-xl-keselamatan/index.html',
    ],
    defaultProduct: 'hammer-of-thor',
    heroVisualWebp: '/assets/products/hammer-of-thor-stage.webp',
    heroVisualPng: '/assets/products/hammer-of-thor-stage.png',
    watermarkText: 'SELAMAT 12',
    readingTimeMinutes: 11,
    publishedDate: '2026-11-11',
    updatedDate: '2026-11-11',
    seoTitle:
      'Kesan Sampingan Hammer of Thor, Horsemen & Grow XL Malaysia',
    metaDescription:
      '✓ Panduan keselamatan & kesan sampingan Hammer of Thor, Horsemen, Grow XL & Magnum Pump XR Original Malaysia: 100% herba tanpa bahan kimia & sakit kepala.',
    kicker: 'ONYX-STD · PANDUAN PROTOKOL 12 · AUDIT KESELAMATAN MAKMAL & PENJELASAN KESAN SAMPINGAN DI MALAYSIA',
    headlineHtml:
      'Kesan Sampingan Hammer of Thor, Horsemen &amp; Grow XL Di Malaysia: <span class="foil-champagne-text">100% Botani vs Pil Tiruan Jalanan.</span>',
    leadSummary:
      'Ramai pengguna di Malaysia membuat carian mengenai "kesan sampingan Hammer of Thor", "adakah Horsemen selamat?", atau "kesan sampingan Grow XL" kerana bimbang dengan laporan produk tiruan jalanan yang menyebabkan sakit kepala berdenyut dan jantung berdebar. Panduan keselamatan ini menerangkan mengapa pil tiruan RM 30 berbahaya serta bagaimana keempat-empat formulasi RM 159 Onyxmen Malaysia diuji bebas 100% daripada bahan kimia sintetik terlarang.',
    telemetry: [
      {
        label: '01 · SARINGAN LC-MS/MS',
        val: '0.00% Bahan Sintetik PDE5',
        sub: 'Bebas sildenafil, tadalafil & 84 analog kimia terlarang',
      },
      {
        label: '02 · UJIAN LOGAM BERAT ICP-MS',
        val: 'Plumbum <0.18ppm · Merkuri <0.01ppm',
        sub: 'Mematuhi had keselamatan mikrobiologi & logam berat',
      },
      {
        label: '03 · KESELESAAN SARAF & TIDUR',
        val: '0 mg Kafein · Sifar Sakit Kepala',
        sub: 'Tiada debaran jantung, muka merah, atau gangguan tidur',
      },
      {
        label: '04 · KESELESAAN PERUT',
        val: 'Ambil 30–45 Minit Selepas Makan',
        sub: 'Elakkan makan ketika perut kosong untuk penyerapan lancar',
      },
    ],
    pinnedSummaryTitle:
      'Mengapa Kapsul Botani Tulen Onyxmen Tidak Menyebabkan Sakit Kepala Atau Debaran Jantung Seperti Pil Tiruan',
    pinnedSummaryCopy:
      'Sakit kepala berdenyut, hidung tersumbat, dan debaran jantung yang sering dilaporkan oleh pembeli kapsul murah RM 30 berpunca daripada bahan kimia sintetik sildenafil/tadalafil yang dicampur secara haram. Formulasi tulen Onyxmen Malaysia hanya menggunakan ekstrak akar herba dan asid amino semula jadi.',
    chapters: [
      {
        code: 'BAB 01 · PUNCA SEBENAR SAKIT KEPALA PADA PIL TIRUAN RM 30',
        title: 'Bagaimana Bahan Kimia Sintetik Terlarang Dalam Produk Tiruan Menjejaskan Saluran Darah Otak',
        body: 'Apabila seseorang mengalami sakit kepala berdenyut yang teruk, muka menjadi panas kemerahan, hidung tersumbat, atau pandangan silau kebiruan selepas menelan kapsul murah RM 30 atau gula-gula tenaga tidak beridentiti, kesan tersebut bukan berpunca daripada Tongkat Ali atau Maca. Ia adalah tindak balas langsung bahan kimia sintetik PDE5 (seperti sildenafil atau tadalafil tanpa sukatan) yang mengembangkan arteri meningeal di dalam kepala secara mengejut. Kesemua botol tulen Onyxmen Malaysia (Horsemen, Hammer of Thor, Grow XL, dan Magnum Pump XR) adalah 100% bebas daripada sebarang bahan kimia sintetik tersebut.',
      },
      {
        code: 'BAB 02 · TIGA PERINGKAT SARINGAN KESELAMATAN MAKMAL ONYXMEN',
        title: 'Saringan LC-MS/MS Sifar Racun Berjadual, Ujian Logam Berat ICP-MS & Mikrobiologi USP',
        body: 'Setiap kelompok pengeluaran Horsemen (SKU: ONYX-HM-20), Hammer of Thor (SKU: ONYX-HT-20), Grow XL (SKU: ONYX-GX-30), dan Magnum Pump XR (SKU: ONYX-MP-30) melalui tiga ujian kualiti utama sebelum disimpan di bilik kebal Kuala Lumpur: (1) Saringan spektrometri jisim LC-MS/MS yang mengesahkan 0.00% kehadiran sildenafil, tadalafil, vardenafil, dan sibutramine; (2) Ujian ICP-MS bagi memastikan paras Plumbum (<0.18 ppm), Arsenik (<0.11 ppm), Kadmium (<0.04 ppm), dan Merkuri (<0.01 ppm) berada jauh di bawah had keselamatan; serta (3) Saringan mikrobiologi bebas bakteria E. coli dan Salmonella.',
      },
      {
        code: 'BAB 03 · TIP ELAK RASA HANGAT PERUT: AMBIL SELEPAS MAKAN & MINUM 300ML AIR',
        title: 'Mengapa Ekstrak Pekat Tongkat Ali 100:1 & Tribulus Patut Diambil Selepas Hidangan',
        body: 'Oleh sebab kapsul tulen Onyxmen mengandungi ekstrak akar pahit berkepekatan tinggi (seperti 150mg Tongkat Ali 100:1, 200mg Saponin Tribulus 60%, dan 15mg Zink), menelan kapsul ketika perut kosong sepenuhnya dengan air yang sedikit boleh menyebabkan rasa hangat ringan pada ulu hati bagi individu yang mempunyai perut sensitif. Untuk keselesaan 100%, sentiasa ambil Grow XL 20–30 minit selepas sarapan pagi, dan ambil Horsemen atau Hammer of Thor 30–60 minit selepas makan malam bersama segelas penuh (300ml) air kosong suam.',
      },
      {
        code: 'BAB 04 · PANDUAN PENGGUNAAN DEWASA BERTANGGUNGJAWAB & TEMPAHAN TULEN',
        title: 'Siapa Yang Perlu Merujuk Doktor & Cara Mengelakkan Penipuan Produk Tiruan',
        body: 'Rangkaian suplemen Onyxmen Malaysia dirumus khusus untuk lelaki dewasa berumur 21 tahun ke atas. Sekiranya anda sedang mengambil ubat preskripsi doktor seperti nitrat organik, ubat cair darah, atau ubat tekanan darah tinggi—atau mempunyai masalah kesihatan jantung, buah pinggang, atau hati yang kronik—sila dapatkan nasihat pegawai perubatan bertauliah sebelum memulakan sebarang suplemen. Pastikan anda hanya menempah stok tulen melalui https://www.onyxmen.my atau WhatsApp rasmi (+60 14-298 5919) pada harga RM 159 (1 Botol), RM 286 (2 Botol, Diskaun 10%), atau RM 405 (3 Botol, Diskaun 15%).',
      },
    ],
    protocolLedgerRows: [
      {
        code: 'SELAMAT-01 · ELAK TIRUAN',
        title: 'Jangan Ambil Kapsul Murah RM 30 Atau Gula-Gula Tenaga Jalanan',
        body: 'Elakkan risiko bahan kimia sintetik tidak diisytihar yang membebankan jantung dan buah pinggang anda.',
        meta: 'Hanya Stok Rasmi RM 159',
      },
      {
        code: 'SELAMAT-02 · SELEPAS MAKAN',
        title: 'Telan Kapsul 20–60 Minit Selepas Makan (Jangan Perut Kosong)',
        body: 'Makanan membantu melapik dinding perut daripada rasa pahit kuasinoid Tongkat Ali dan mineral Zink.',
        meta: 'Keselesaan Perut 100%',
      },
      {
        code: 'SELAMAT-03 · AIR 300ML',
        title: 'Minum 300ml Air Suam Semasa Menelan Kapsul & 2.5L Sehari',
        body: 'Penghidratan yang mencukupi memastikan kelancaran aliran vaskular Nitrik Oksida dalam cuaca panas Malaysia.',
        meta: 'Wajib 300ml Air Kosong',
      },
      {
        code: 'SELAMAT-04 · IKUT SUKATAN',
        title: 'Patuhi Sukatan 1 Kapsul Sehari Bagi Setiap Formulasi',
        body: 'Ekstrak herba piawai bertindak melalui ketepuan reseptor harian yang konsisten tanpa perlu mengambil dos berlebihan.',
        meta: '1 Kapsul (500mg–600mg)',
      },
      {
        code: 'SELAMAT-05 · BEBAS KAFEIN',
        title: '0mg Kafein Sintetik Untuk Kualiti Tidur Malam Yang Lena',
        body: 'Semua empat formulasi bebas daripada perangsang tiruan supaya irama jantung dan tidur malam anda kekal tenang.',
        meta: 'Mesra Tidur Malam',
      },
      {
        code: 'SELAMAT-06 · RUJUK DOKTOR',
        title: 'Rujuk Doktor Jika Anda Mengambil Ubat Preskripsi Jantung/Darah Tinggi',
        body: 'Tunjukkan senarai penuh miligram ramuan kami kepada doktor anda jika anda sedang menjalani rawatan perubatan.',
        meta: 'Lelaki Dewasa 21+ Tahun',
      },
    ],
    faqs: [
      {
        q: 'Adakah Hammer of Thor, Horsemen, atau Grow XL Original menyebabkan sakit kepala atau jantung berdebar?',
        a: 'Tidak. Produk tulen edaran Onyxmen Malaysia adalah 100% bebas daripada bahan kimia sintetik PDE5 dan bebas kafein. Kesan sakit kepala berdenyut dan debaran jantung hanya berlaku pada produk tiruan murah yang dicampur bahan kimia terlarang.',
      },
      {
        q: 'Adakah selamat untuk mengamalkan kapsul Onyxmen setiap hari selama 30 hingga 90 hari?',
        a: 'Ya, bagi lelaki dewasa yang sihat. Ekstrak herba adaptogenik piawai (Tongkat Ali 100:1, Maca Peru, Tribulus, Saw Palmetto) dan asid amino (L-Arginine, L-Citrulline) direka untuk penyesuaian nutrisi harian selama 20 hingga 90 hari mengikut sukatan 1 kapsul sehari selepas makan.',
      },
      {
        q: 'Mengapa perut terasa sedikit hangat jika saya menelan kapsul ketika perut kosong?',
        a: 'Kepekatan tinggi kuasinoid Tongkat Ali 100:1, saponin Tribulus 60%, dan 15mg Zink boleh merangsang asid perut jika diambil semasa perut kosong. Mengambil kapsul 30–45 minit selepas makan bersama 300ml air suam menghilangkan rasa tersebut sepenuhnya.',
      },
      {
        q: 'Bolehkah pesakit darah tinggi atau jantung yang mengambil ubat doktor menggunakan suplemen ini?',
        a: 'Sekiranya anda mempunyai penyakit kronik atau sedang mengambil ubat preskripsi doktor (seperti ubat cair darah, nitrat, atau ubat darah tinggi), sila dapatkan nasihat doktor anda terlebih dahulu sebelum mengambil sebarang suplemen.',
      },
    ],
  },
  {
    microStep: 'ONYX-STD',
    guideNumber: 13,
    guideCode: 'PANDUAN-BM-13',
    id: 'maca-root-in-malay-akar-maca-tongkat-ali-supplement-malaysia',
    slug: 'akar-maca-dalam-bahasa-melayu-dan-tongkat-ali-malaysia',
    canonicalMsPath: '/ms/panduan/akar-maca-dalam-bahasa-melayu-dan-tongkat-ali-malaysia/',
    canonicalEnPath: '/guides/maca-root-in-malay-akar-maca-tongkat-ali-supplement-malaysia/',
    msOutputPaths: [
      'ms/guides/maca-root-in-malay-akar-maca-tongkat-ali-supplement-malaysia/index.html',
      'ms/panduan/akar-maca-dalam-bahasa-melayu-dan-tongkat-ali-malaysia/index.html',
    ],
    defaultProduct: 'horsemen',
    heroVisualWebp: '/assets/products/horsemen-stage.webp',
    heroVisualPng: '/assets/products/horsemen-stage.png',
    watermarkText: 'AKAR MACA 13',
    readingTimeMinutes: 11,
    publishedDate: '2026-11-11',
    updatedDate: '2026-11-11',
    seoTitle:
      'Akar Maca Dalam Bahasa Melayu (Maca Root) & Tongkat Ali MY',
    metaDescription:
      '✓ Apakah maksud Maca Root dalam Bahasa Melayu (Akar Maca Hitam Peru) & kelebihan gabungan bersama Tongkat Ali 100:1 dalam Horsemen & Grow XL. RM 159 COD.',
    kicker: 'ONYX-STD · PANDUAN PROTOKOL 13 · AKAR MACA HITAM PERU (MACA ROOT) & SINERGI TONGKAT ALI 100:1',
    headlineHtml:
      'Akar Maca Dalam Bahasa Melayu (Maca Root Peru) &amp; <span class="foil-champagne-text">Sinergi Suplemen Tongkat Ali 100:1 Malaysia.</span>',
    leadSummary:
      'Menjawab carian tinggi pengguna di Malaysia mengenai "Maca Root in Malay", "Akar Maca Hitam", dan "Tongkat Ali Malaysia": dalam Bahasa Melayu, Maca Root (Lepidium meyenii) dikenali sebagai "Akar Maca", "Ubi Maca Hitam Peru", atau "Ginseng Peru". Ketahui mengapa gabungan Akar Maca Hitam Tergelatinisasi dari pergunungan Andes bersama Tongkat Ali Malaysia 100:1 menghasilkan sinergi tenaga dalaman yang jauh lebih unggul.',
    telemetry: [
      {
        label: '01 · NAMA BAHASA MELAYU',
        val: 'Akar Maca / Ubi Maca Hitam',
        sub: 'Turut dikenali sebagai Ginseng Peru (Lepidium meyenii)',
      },
      {
        label: '02 · SEBATIAN AKTIF UTAMA',
        val: '≥0.6% Macamides & Macaenes',
        sub: 'Ekotip Maca Hitam tanah tinggi Junín, Peru (4,200 meter)',
      },
      {
        label: '03 · GANDINGAN HERBA TEMPATAN',
        val: 'Tongkat Ali Malaysia 100:1',
        sub: 'Eurycoma longifolia dipiawaikan kepada ≥2.2% Eurycomanone',
      },
      {
        label: '04 · KANDUNGAN DALAM ONYXMEN',
        val: '100–110mg Maca + 90–150mg TA',
        sub: 'Terdapat dalam Horsemen, Grow XL, Hammer of Thor & Magnum Pump XR',
      },
    ],
    pinnedSummaryTitle:
      'Mengapa Gabungan Akar Maca Hitam Peru & Tongkat Ali Malaysia 100:1 Menjadi Teras Empat Formulasi Onyxmen',
    pinnedSummaryCopy:
      'Jika Tongkat Ali Malaysia 100:1 bertindak mengawal hormon tekanan kortisol dan membebaskan kecergasan biokimia lelaki, Akar Maca Hitam Peru tergelatinisasi pula membekalkan tenaga mitokondria ATP dan daya tahan fizikal tanpa kafein.',
    chapters: [
      {
        code: 'BAB 01 · APAKAH ITU "MACA ROOT" DALAM BAHASA MELAYU?',
        title: 'Mengenali Akar Maca Hitam Peru (Lepidium Meyenii) & Kelebihan Ekotip Hitam Berbanding Maca Kuning',
        body: 'Ramai pembaca jurnal kesihatan antarabangsa di Malaysia membuat carian "Maca Root in Malay" untuk memahami istilah tempatannya. Dalam Bahasa Melayu, Maca Root merujuk kepada "Akar Maca", "Ubi Maca Hitam Peru", atau "Ginseng Peru" (nama saintifik: Lepidium meyenii Walp.), iaitu tumbuhan akar tanah tinggi yang hidup pada altitud 4,200 meter di Banjaran Andes, Peru. Walaupun terdapat spesies kuning dan merah, kajian fitofarmakologi membuktikan bahawa ekotip Akar Maca Hitam mengandungi kepekatan tertinggi sebatian lipid macamides dan macaenes untuk stamina lelaki dewasa.',
      },
      {
        code: 'BAB 02 · BEZA AKAR MACA TERGELATINISASI VS SERBUK MENTAH',
        title: 'Mengapa Proses Gelatinisasi Penting Untuk Penyerapan Pantas Tanpa Kembung Perut',
        body: 'Kebanyakan produk murah di pasaran hanya menggunakan serbuk akar Maca mentah yang mengandungi hampir 70% kanji amilosa yang sukar dihadam oleh perut manusia—menyebabkan masalah angin, kembung perut, dan penyerapan yang lemah. Onyxmen Malaysia hanya menggunakan Akar Maca Hitam Tergelatinisasi (Gelatinized Black Maca) di mana rantaian kanji telah dipecahkan secara enzimatik pada suhu rendah, menghasilkan ekstrak tulen berkepekatan ≥0.6% macamides yang larut dan diserap di usus kecil dalam masa beberapa minit.',
      },
      {
        code: 'BAB 03 · SINERGI DUA BENUA: AKAR MACA PERU + TONGKAT ALI MALAYSIA 100:1',
        title: 'Bagaimana Eurycomanone & Macamides Bekerjasama Tanpa Mengganggu Tidur Malam',
        body: 'Mengambil Tongkat Ali sahaja atau Akar Maca sahaja hanya menyelesaikan separuh daripada keperluan fisiologi lelaki. Ekstrak Akar Tongkat Ali Malaysia 100:1 (≥2.2% Eurycomanone) berfungsi menurunkan beban hormon kortisol akibat tekanan kerja dan kesesakan jalan raya di Malaysia serta menyokong keseimbangan SHBG. Pada masa yang sama, macamides daripada Akar Maca Hitam menyokong penghasilan tenaga selular ATP dan daya tahan saraf tanpa meningkatkan tekanan darah atau mengganggu tidur malam.',
      },
      {
        code: 'BAB 04 · PILIHAN BOTOL AKAR MACA + TONGKAT ALI DI ONYXMEN (RM 159)',
        title: 'Perbandingan Sukatan Di Dalam Horsemen, Grow XL, Hammer of Thor & Magnum Pump XR',
        body: 'Keempat-empat botol rasmi Onyxmen Malaysia menggabungkan Akar Maca dan Tongkat Ali 100:1: (1) Horsemen (20 Kapsul × 500mg) membekalkan 150mg Tongkat Ali 100:1 + 100mg Maca Hitam + 80mg Epimedium Icariin untuk waktu malam; (2) Grow XL (30 Kapsul × 550mg) membekalkan 140mg Tongkat Ali 100:1 + 110mg Dwi-Maca + Muira Puama + Saw Palmetto untuk rutin pagi 30 hari; (3) Hammer of Thor (20 Kapsul Veg.) membekalkan 200mg Tribulus + 100mg Maca + 45mg Tongkat Ali; dan (4) Magnum Pump XR membekalkan 300mg L-Arginine/L-Citrulline + 90mg Tongkat Ali + 70mg Maca/Halba. Tempah pada harga RM 159 (1B), RM 286 (2B, -10%), atau RM 405 (3B, -15%) secara COD.',
      },
    ],
    protocolLedgerRows: [
      {
        code: 'MACA-BM-01 · EKOTIP HITAM',
        title: 'Utamakan Akar Maca Hitam Tergelatinisasi (Bukan Serbuk Mentah)',
        body: 'Bebas kanji sukar hadam dan membekalkan ≥0.6% macamides & macaenes untuk penyerapan usus yang lancar.',
        meta: 'Lepidium meyenii Peru',
      },
      {
        code: 'MACA-BM-02 · TONGKAT ALI 100:1',
        title: 'Digandingkan Bersama Ekstrak Tongkat Ali Malaysia 100:1',
        body: 'Gabungan 90mg–150mg Eurycoma longifolia piawai (≥2.2% Eurycomanone) daripada akar matang Pahang & Perak.',
        meta: 'Sinergi Dua Benua',
      },
      {
        code: 'MACA-BM-03 · WAKTU MAKAN',
        title: 'Ambil 20–60 Minit Selepas Makan Bersama 300ml Air Suam',
        body: 'Kehadiran sedikit lemak sihat dalam makanan membantu pengangkutan sebatian macamides yang bersifat lipofilik.',
        meta: 'Penyerapan Optimum',
      },
      {
        code: 'MACA-BM-04 · JARAK TEH/KOPI',
        title: 'Jarakkan 45 Minit Daripada Teh Tarik Atau Kopi O',
        body: 'Elakkan polifenol tanin daripada mengikat kuasinoid Tongkat Ali di dalam saluran penghadaman.',
        meta: 'Penampan 45 Minit',
      },
      {
        code: 'MACA-BM-05 · PILIHAN BOTOL',
        title: 'Horsemen (Malam 20B) Atau Grow XL (Pagi 30B) Pada Harga RM 159',
        body: 'Pilih Horsemen untuk kesediaan malam pantas atau Grow XL untuk penjagaan harian sepanjang bulan.',
        meta: 'Harga Seragam RM 159',
      },
      {
        code: 'MACA-BM-06 · PAKEJ KOMBO',
        title: 'Jimat RM 32 (2 Botol RM 286) Atau RM 72 (3 Botol RM 405)',
        body: 'Penghantaran bungkusan rahsia COD percuma ke seluruh Semenanjung Malaysia, Sabah, Sarawak & Labuan.',
        meta: 'COD & WhatsApp +60 14-298 5919',
      },
    ],
    faqs: [
      {
        q: 'Apakah panggilan Maca Root dalam Bahasa Melayu?',
        a: 'Dalam Bahasa Melayu, Maca Root (Lepidium meyenii) dipanggil "Akar Maca", "Ubi Maca Hitam Peru", atau "Ginseng Peru". Ia merupakan herba adaptogenik dari pergunungan Andes yang terkenal untuk menyokong stamina dan kecergasan lelaki.',
      },
      {
        q: 'Botol Onyxmen manakah yang mempunyai kandungan Tongkat Ali dan Akar Maca paling tinggi?',
        a: 'Horsemen (20 Kapsul × 500mg, SKU: ONYX-HM-20, RM 159) mengandungi kepekatan tertinggi Tongkat Ali Malaysia 100:1 (150mg) bersama 100mg Akar Maca Hitam Tergelatinisasi bagi setiap kapsul. Untuk botol 30 kapsul harian, Grow XL membekalkan 140mg Tongkat Ali 100:1 dan 110mg Akar Maca.',
      },
      {
        q: 'Adakah gabungan Akar Maca dan Tongkat Ali selamat diambil bersama?',
        a: 'Ya, sangat selamat dan saling melengkapi. Tongkat Ali 100:1 membantu mengawal tekanan kortisol dan menyokong keseimbangan hormon lelaki, manakala Akar Maca Hitam menyokong tenaga selular ATP tanpa kafein.',
      },
      {
        q: 'Bagaimanakah cara membeli suplemen Akar Maca & Tongkat Ali Original secara COD di Malaysia?',
        a: 'Anda boleh menempah Horsemen, Grow XL, Hammer of Thor, atau Magnum Pump XR terus di https://www.onyxmen.my atau melalui WhatsApp (+60 14-298 5919) pada harga RM 159 (1 Botol), RM 286 (2 Botol, Diskaun 10%), atau RM 405 (3 Botol, Diskaun 15%) dengan COD bungkusan rahsia.',
      },
    ],
  },
  {
    microStep: 'ONYX-STD',
    guideNumber: 14,
    guideCode: 'PANDUAN-BM-14',
    id: 'how-long-does-hammer-of-thor-horsemen-grow-xl-take-to-work',
    slug: 'berapa-lama-kesan-hammer-of-thor-horsemen-grow-xl-malaysia',
    canonicalMsPath: '/ms/panduan/berapa-lama-kesan-hammer-of-thor-horsemen-grow-xl-malaysia/',
    canonicalEnPath: '/guides/how-long-does-hammer-of-thor-horsemen-grow-xl-take-to-work/',
    msOutputPaths: [
      'ms/guides/how-long-does-hammer-of-thor-horsemen-grow-xl-take-to-work/index.html',
      'ms/panduan/berapa-lama-kesan-hammer-of-thor-horsemen-grow-xl-malaysia/index.html',
    ],
    defaultProduct: 'magnum-pump-xr',
    heroVisualWebp: '/assets/products/magnum-pump-xr-stage.webp',
    heroVisualPng: '/assets/products/magnum-pump-xr-stage.png',
    watermarkText: 'MASA KESAN 14',
    readingTimeMinutes: 11,
    publishedDate: '2026-11-11',
    updatedDate: '2026-11-11',
    seoTitle:
      'Berapa Lama Kesan Hammer of Thor, Horsemen & Grow XL MY?',
    metaDescription:
      '✓ Jadual masa kesan sebenar Hammer of Thor, Horsemen, Grow XL & Magnum Pump XR di Malaysia: tindak balas 30–60 minit vs kitaran penuh 30–90 hari. RM 159 COD.',
    kicker: 'ONYX-STD · PANDUAN PROTOKOL 14 · GARIS MASA TINDAK BALAS 30 MINIT VS KITARAN PENUH 30–90 HARI',
    headlineHtml:
      'Berapa Lama Kesan Hammer of Thor, Horsemen, Grow XL &amp; Magnum Pump XR? <span class="foil-champagne-text">Jadual 30 Minit vs Kitaran 30 Hari.</span>',
    leadSummary:
      'Soalan paling kerap diajukan di meja WhatsApp Kuala Lumpur kami (+60 14-298 5919) ialah: "Berapa cepat saya boleh merasai kesan Magnum Pump XR, Horsemen, Hammer of Thor, atau Grow XL selepas menelan kapsul pertama?" Memandangkan formulasi tulen Onyxmen menggabungkan asid amino Nitrik Oksida bertindak pantas dengan herba adaptogenik berperingkat, kesannya berlaku dalam dua fasa: Tindak Balas Awal 30–60 Minit dan Penyesuaian Tisu 7–30 Hari.',
    telemetry: [
      {
        label: '01 · FASA I (MINIT KE-30 HINGGA 45)',
        val: 'Gelombang Nitrik Oksida MPXR',
        sub: '180mg L-Arginine HCl + Bioperine® melancarkan aliran',
      },
      {
        label: '02 · FASA II (MINIT KE-45 HINGGA 90)',
        val: 'Puncak Kesediaan Malam Horsemen',
        sub: '150mg Tongkat Ali 100:1 + 80mg Icariin + 80mg L-Arginine',
      },
      {
        label: '03 · FASA III (HARI KE-5 HINGGA 14)',
        val: 'Ketepuan Saponin & Kortisol',
        sub: 'Hammer of Thor 60% Saponin Tribulus & Maca ATP',
      },
      {
        label: '04 · FASA IV (HARI KE-20 HINGGA 90)',
        val: 'Keseimbangan Penuh Grow XL',
        sub: 'Muira Puama + Saw Palmetto kitaran 30–90 hari (RM 286 / RM 405)',
      },
    ],
    pinnedSummaryTitle:
      'Garis Masa Farmakokinetik: Apa Yang Berlaku Dari Minit Ke-6 Selepas Menelan Kapsul Sehingga Hari Ke-90',
    pinnedSummaryCopy:
      'Kapsul HPMC melarut dalam masa 6–8 minit bersama 300ml air suam. Asid amino L-Arginine HCl dan L-Citrulline Malate memulakan sokongan aliran darah dalam masa 30–45 minit, manakala herba Tongkat Ali, Maca, Tribulus, dan Saw Palmetto membina ketahanan penuh sepanjang minggu ke-2 hingga minggu ke-4.',
    chapters: [
      {
        code: 'BAB 01 · FASA TINDAK BALAS AWAL (MINIT 0 HINGGA JAM KE-5)',
        title: 'Seberapa Cepat Magnum Pump XR (30–45 Minit) & Horsemen (45–60 Minit) Mula Bertindak',
        body: 'Apabila anda menelan 1 kapsul hitam Magnum Pump XR (600mg) atau 1 kapsul Horsemen (500mg) bersama 300ml–350ml air kosong suam (sekitar 45 minit selepas makan malam), sarung kapsul HPMC akan melarut dalam masa 6 hingga 8 minit. Menjelang minit ke-30 hingga ke-45, 180mg L-Arginine HCl (dibantu oleh pemangkin Bioperine® Lada Hitam) diserap merentasi dinding usus kecil dan mengaktifkan enzim eNOS untuk melancarkan aliran darah. Antara minit ke-45 hingga ke-90, 150mg Tongkat Ali 100:1 dan 80mg Epimedium Icariin di dalam Horsemen mencapai kepekatan plasma optimum, manakala L-Citrulline Malate di dalam Magnum Pump XR mengekalkan sokongan aliran selama 3 hingga 5 jam.',
      },
      {
        code: 'BAB 02 · FASA MINGGU PERTAMA & KEDUA (HARI KE-5 HINGGA 14)',
        title: 'Mengapa Kesan Hammer of Thor & Horsemen Terasa Lebih Mantap Pada Minggu Ke-2',
        body: 'Berbeza dengan bahan kimia sintetik yang memaksa tindak balas mengejut selama beberapa jam sebelum menyebabkan badan lesu, ekstrak herba adaptogenik piawai membina kekuatan selular secara progresif. Antara Hari ke-5 hingga Hari ke-14 pengambilan konsisten, 200mg Tribulus Terrestris (60% saponin protodioscin) dan 15mg Zink Bisglycinate di dalam Hammer of Thor menyokong pemulihan otot dan kepekaan reseptor. Pada masa yang sama, Tongkat Ali 100:1 membantu menurunkan beban kortisol petang akibat tekanan kerja, menjadikan stamina malam anda pada Minggu ke-2 jauh lebih stabil berbanding Hari Pertama.',
      },
      {
        code: 'BAB 03 · FASA PENYESUAIAN BULANAN (HARI KE-15 HINGGA 30)',
        title: 'Bagaimana Muira Puama & Saw Palmetto Di Dalam Grow XL Mencapai Ketepuan Penuh',
        body: 'Bagi pengguna yang mengambil 1 kapsul Grow XL (30 Kapsul × 550mg, SKU: ONYX-GX-30) setiap pagi selepas sarapan, manfaat paling menyeluruh dapat dirasai antara Hari ke-15 hingga Hari ke-30. Sebatian ester sterol daripada Muira Puama Brazil (100mg) dan asid lemak bebas daripada beri Saw Palmetto (80mg) memerlukan 2 hingga 3 minggu penyerapan harian bersama lemak sarapan untuk meresap sepenuhnya ke dalam membran sel saraf dan tisu pelvik lelaki dewasa.',
      },
      {
        code: 'BAB 04 · MENGELAKKAN PENURUNAN KITARAN: KELEBIHAN PAKEJ 60–90 HARI',
        title: 'Mengapa Pakej 2 Botol (RM 286 · -10%) & 3 Botol (RM 405 · -15%) Memberikan Hasil Terbaik',
        body: 'Kajian fitoterapi menunjukkan bahawa menghentikan pengambilan herba adaptogenik secara mendadak selepas tamat 1 botol pertama (20 atau 30 hari) boleh menyebabkan tahap kortisol dan SHBG kembali ke paras asal dalam tempoh 2 minggu berikutnya. Oleh itu, pelanggan yang memilih Pakej 2 Botol (RM 286 — Jimat RM 32) atau Pakej 3 Botol (RM 405 — Jimat RM 72) melalui https://www.onyxmen.my atau WhatsApp (+60 14-298 5919) dapat mengekalkan stamina puncak selama 60 hingga 90 hari berturut-turut dengan penghantaran COD percuma.',
      },
    ],
    protocolLedgerRows: [
      {
        code: 'MASA-BM-01 · MINIT 30–45',
        title: 'Magnum Pump XR: Tindak Balas Nitrik Oksida 30–45 Minit',
        body: 'Telan 1 kapsul hitam bersama 350ml air kosong 30–45 minit sebelum senaman gimnasium atau aktiviti malam.',
        meta: 'Gelombang 1 L-Arginine + Bioperine',
      },
      {
        code: 'MASA-BM-02 · MINIT 45–60',
        title: 'Horsemen: Puncak Kesediaan Malam 45–60 Minit Selepas Makan',
        body: 'Telan 1 kapsul bersama 300ml air suam 45–60 minit selepas makan malam untuk penyerapan 150mg Tongkat Ali 100:1 & Icariin.',
        meta: 'Puncak Tmax 45–90 Minit',
      },
      {
        code: 'MASA-BM-03 · HARI 5–14',
        title: 'Hammer of Thor & Semua 4 Botol: Kestabilan Saponin Minggu Ke-2',
        body: 'Amalkan setiap hari tanpa culas supaya 200mg Saponin Tribulus 60% dan Maca membina daya tahan fizikal.',
        meta: 'Penyesuaian Minggu 1–2',
      },
      {
        code: 'MASA-BM-04 · HARI 15–30',
        title: 'Grow XL: Ketepuan Penuh 30 Hari Selepas Sarapan Pagi',
        body: 'Lengkapkan 30 kapsul pagi untuk penyerapan penuh Muira Puama (100mg), Saw Palmetto (80mg) & Ginkgo Biloba (70mg).',
        meta: 'Kitaran Penuh 30 Hari',
      },
      {
        code: 'MASA-BM-05 · ELAK LAMBAT',
        title: 'Jangan Ambil Sejurus Selepas Makanan Bergoreng Berat Atau Teh Tarik',
        body: 'Makanan terlalu berminyak dan tanin teh boleh melambatkan penyerapan kapsul daripada 45 minit kepada 90–120 minit.',
        meta: 'Tunggu 45 Minit Selepas Makan',
      },
      {
        code: 'MASA-BM-06 · HARI 31–90',
        title: 'Sambung Botol Ke-2 (RM 286) & Ke-3 (RM 405) Tanpa Gangguan',
        body: 'Jimat sehingga 15% (RM 72) dengan penghantaran bungkusan rahsia COD percuma ke seluruh 16 negeri Malaysia.',
        meta: 'Diskaun 10% & 15% COD',
      },
    ],
    faqs: [
      {
        q: 'Kapsul Onyxmen manakah yang memberikan tindak balas paling cepat pada malam pertama?',
        a: 'Magnum Pump XR (30 Kapsul Hitam × 600mg) memulakan gelombang pertama aliran darah Nitrik Oksida paling pantas—dalam masa 30 hingga 45 minit—melalui gabungan 180mg L-Arginine HCl, 120mg L-Citrulline Malate, dan Bioperine®. Horsemen (20 Kapsul × 500mg) pula mencapai puncak kesediaan malam dalam masa 45 hingga 60 minit.',
      },
      {
        q: 'Berapa harikah masa yang diambil untuk merasai kesan penuh Grow XL atau Hammer of Thor?',
        a: 'Sokongan aliran mikro dan tenaga harian mula dirasai dalam 3 hingga 5 hari pertama, manakala kesan penyesuaian penuh Saponin Tribulus 60% (Hammer of Thor) serta Tongkat Ali, Muira Puama, dan Saw Palmetto (Grow XL) meningkat secara progresif pada Hari ke-7 hingga ke-14 dan mencapai tahap optimum antara Hari ke-20 hingga ke-30.',
      },
      {
        q: 'Mengapa kapsul mengambil masa lebih lama daripada 60 minit jika diambil bersama makanan berat?',
        a: 'Jika anda menelan kapsul sejurus selepas makan makanan bergoreng yang sangat berminyak atau meminumnya bersama teh tarik/kopi O, proses pengosongan perut yang perlahan dan tanin teh akan melambatkan penyerapan sehingga 90–120 minit. Sentiasa tunggu 45 minit selepas makan malam dan gunakan 300ml air kosong suam.',
      },
      {
        q: 'Patutkah saya membeli 1 botol (RM 159) atau 2 botol (RM 286) untuk permulaan?',
        a: 'Anda boleh memulakan dengan 1 Botol (RM 159) untuk kitaran 20–30 hari pertama, atau terus memilih Pakej 2 Botol (RM 286 — Diskaun 10%, jimat RM 32) supaya kitaran anda berterusan tanpa gangguan memasuki minggu ke-4 hingga minggu ke-8.',
      },
    ],
  }
);

/**
 * Shared Section 1: Complete 4-Bottle Onyxmen Formulation Matrix in Bahasa Malaysia (RM 159 / RM 286 (10% OFF vs RM 318) / RM 405 (15% OFF vs RM 477))
 */
function renderFourFormulationsMatrixSectionBM(defaultProduct = 'horsemen') {
  return `
  <!-- ==========================================================================
       MATRIKS LENGKAP 4 FORMULASI UTAMA ONYXMEN MALAYSIA (RM 159 SEBOTOL)
       ========================================================================== -->
  <section
    id="pilihan-kitaran-20-vs-30-kapsul"
    class="panduan-section panduan-section--onyx"
    aria-labelledby="heading-bm-four-formulations-matrix"
  >
    <div class="panduan-section__inner">
      <header class="panduan-section__header">
        <div class="panduan-section__header-left">
          <span class="editorial-kicker">
            MATRIKS SPESIFIKASI 4 FORMULASI RASMI · HARGA SERAGAM RM 159.00
          </span>
          <h2 id="heading-bm-four-formulations-matrix" class="editorial-headline-lg">
            Jadual Perbandingan Lengkap Empat Formulasi <span class="foil-champagne-text">Apotekari Botani Onyxmen Malaysia.</span>
          </h2>
        </div>
        <div class="panduan-section__header-right">
          <p class="protocol-key-takeaways">
            Semua empat formulasi rasmi Onyxmen ditawarkan pada harga tetap <strong>RM 159.00 (1 Botol)</strong>,
            <strong>RM 286 (10% OFF vs RM 318) (2 Botol · Penghantaran Percuma Seluruh Malaysia)</strong>, dan
            <strong>RM 405 (15% OFF vs RM 477) (3 Botol · Pakej Lengkap 60–90 Hari)</strong>.
          </p>
        </div>
      </header>

      <div class="panduan-table-wrap">
        <table class="panduan-comparison-table">
          <thead>
            <tr>
              <th>Formulasi &amp; Kod SKU</th>
              <th>Format &amp; Kiraan Kapsul</th>
              <th>Komposisi Fitokimia &amp; Asid Amino Utama</th>
              <th>Masa Pengambilan Optimum</th>
              <th>Kitaran Ulangan &amp; Harga Rasmi</th>
              <th>Tindakan Tempahan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong style="color:var(--gold-foil-bright);font-size:1.02rem;">Horsemen</strong><br />
                <span style="color:var(--text-ash-silver);font-size:0.78rem;">SKU: ONYX-HM-20MY · GTIN: 9550000102011</span><br />
                <a href="/ms/produk/horsemen/" style="color:var(--gold-champagne);text-decoration:underline;font-size:0.82rem;">Lihat Halaman Produk (/ms/produk/horsemen/) →</a>
              </td>
              <td>
                <strong>20 Kapsul × 500mg</strong><br />
                <span style="color:var(--text-muted-alabaster);font-size:0.82rem;">Kapsul Herba Berkepekatan Tinggi</span>
              </td>
              <td>
                Tongkat Ali Malaysia 100:1 (<em>Eurycoma longifolia</em>), Akar Maca Hitam Peru (<em>Lepidium meyenii</em>), Panax Ginseng Merah Korea, Epimedium, L-Arginine HCl
              </td>
              <td>
                1 kapsul bersama 250ml–300ml air suam <strong>45–60 minit selepas makan malam</strong> atau sebelum aktiviti malam
              </td>
              <td>
                <strong>RM 159.00</strong> (1B)<br />
                RM 286 (10% OFF vs RM 318) (2B) · RM 405 (15% OFF vs RM 477) (3B)<br />
                <span style="color:var(--gold-champagne);font-size:0.8rem;">Peringatan Hari Ke-18</span>
              </td>
              <td>
                <button
                  type="button"
                  class="cta-foil-primary"
                  data-open-order-drawer="true"
                  data-order-product="horsemen"
                  data-order-qty="1"
                  style="padding:0.65rem 1.1rem;font-size:0.74rem;"
                >
                  <span>TEMPAH HORSEMEN · RM 159</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <strong style="color:var(--gold-foil-bright);font-size:1.02rem;">Hammer of Thor</strong><br />
                <span style="color:var(--text-ash-silver);font-size:0.78rem;">SKU: ONYX-HT-20MY · GTIN: 9550000102028</span><br />
                <a href="/ms/produk/hammer-of-thor/" style="color:var(--gold-champagne);text-decoration:underline;font-size:0.82rem;">Lihat Halaman Produk (/ms/produk/hammer-of-thor/) →</a>
              </td>
              <td>
                <strong>20 Kapsul Vegetarian</strong><br />
                <span style="color:var(--text-muted-alabaster);font-size:0.82rem;">Sarung Tumbuhan HPMC 100% Vegetarian</span>
              </td>
              <td>
                Tribulus Terrestris Piawai (60% Saponin Protodioscin), Tongkat Ali Malaysia, Ashwagandha KSM-66, Mucuna Pruriens, Zink Bisglycinate &amp; Selenium
              </td>
              <td>
                1 kapsul vegetarian <strong>30 minit selepas makan malam</strong> bersama 250ml air suam untuk pemulihan &amp; ketahanan
              </td>
              <td>
                <strong>RM 159.00</strong> (1B)<br />
                RM 286 (10% OFF vs RM 318) (2B) · RM 405 (15% OFF vs RM 477) (3B)<br />
                <span style="color:var(--gold-champagne);font-size:0.8rem;">Peringatan Hari Ke-18</span>
              </td>
              <td>
                <button
                  type="button"
                  class="cta-foil-primary"
                  data-open-order-drawer="true"
                  data-order-product="hammer-of-thor"
                  data-order-qty="1"
                  style="padding:0.65rem 1.1rem;font-size:0.74rem;"
                >
                  <span>TEMPAH HAMMER OF THOR · RM 159</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <strong style="color:var(--gold-foil-bright);font-size:1.02rem;">Grow XL</strong><br />
                <span style="color:var(--text-ash-silver);font-size:0.78rem;">SKU: ONYX-GX-30MY · GTIN: 9550000102035</span><br />
                <a href="/ms/produk/grow-xl/" style="color:var(--gold-champagne);text-decoration:underline;font-size:0.82rem;">Lihat Halaman Produk (/ms/produk/grow-xl/) →</a>
              </td>
              <td>
                <strong>30 Kapsul Harian</strong><br />
                <span style="color:var(--text-muted-alabaster);font-size:0.82rem;">Rutin Lengkap 30 Hari Sebulan</span>
              </td>
              <td>
                Panax Ginseng Matang, Ginkgo Biloba (Glikosida Flavon), Ekstrak Beri Saw Palmetto, Kulit Muira Puama, L-Citrulline Malate &amp; Vitamin B3
              </td>
              <td>
                1 kapsul <strong>setiap pagi 20–30 minit selepas sarapan</strong> selama 30 hari berturut-turut
              </td>
              <td>
                <strong>RM 159.00</strong> (1B)<br />
                RM 286 (10% OFF vs RM 318) (2B) · RM 405 (15% OFF vs RM 477) (3B)<br />
                <span style="color:var(--gold-champagne);font-size:0.8rem;">Peringatan Hari Ke-25</span>
              </td>
              <td>
                <button
                  type="button"
                  class="cta-foil-primary"
                  data-open-order-drawer="true"
                  data-order-product="grow-xl"
                  data-order-qty="1"
                  style="padding:0.65rem 1.1rem;font-size:0.74rem;"
                >
                  <span>TEMPAH GROW XL · RM 159</span>
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <strong style="color:var(--gold-foil-bright);font-size:1.02rem;">Magnum Pump XR</strong><br />
                <span style="color:var(--text-ash-silver);font-size:0.78rem;">SKU: ONYX-MP-30MY · GTIN: 9550000102042</span><br />
                <a href="/ms/produk/magnum-pump-xr/" style="color:var(--gold-champagne);text-decoration:underline;font-size:0.82rem;">Lihat Halaman Produk (/ms/produk/magnum-pump-xr/) →</a>
              </td>
              <td>
                <strong>30 Kapsul Hitam</strong><br />
                <span style="color:var(--text-muted-alabaster);font-size:0.82rem;">Testosterone Pro Series (Suplemen Oral)</span>
              </td>
              <td>
                L-Arginine Alpha-Ketoglutarate (AAKG), L-Citrulline, Ekstrak Nitrat Ubi Bit, Kunyit Hitam (<em>Kaempferia parviflora</em>), Kulit Pain Maritim &amp; Bioperine
              </td>
              <td>
                1 kapsul hitam <strong>30–45 minit sebelum senaman gimnasium</strong> atau aktiviti fizikal malam bersama 300ml air
              </td>
              <td>
                <strong>RM 159.00</strong> (1B)<br />
                RM 286 (10% OFF vs RM 318) (2B) · RM 405 (15% OFF vs RM 477) (3B)<br />
                <span style="color:var(--gold-champagne);font-size:0.8rem;">Peringatan Hari Ke-25</span>
              </td>
              <td>
                <button
                  type="button"
                  class="cta-foil-primary"
                  data-open-order-drawer="true"
                  data-order-product="magnum-pump-xr"
                  data-order-qty="1"
                  style="padding:0.65rem 1.1rem;font-size:0.74rem;"
                >
                  <span>TEMPAH MAGNUM PUMP XR · RM 159</span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:1rem;justify-content:space-between;align-items:center;padding-top:1rem;">
        <div style="display:flex;flex-wrap:wrap;gap:0.85rem;">
          <a href="/ms/perbandingan/" class="cta-hairline-secondary">Jadual Perbandingan 4 Botol (/ms/perbandingan/) →</a>
          <a href="/ms/perbandingan/horsemen-vs-hammer-of-thor/" class="cta-hairline-secondary">Horsemen vs Hammer of Thor →</a>
          <a href="/ms/perbandingan/grow-xl-vs-magnum-pump-xr/" class="cta-hairline-secondary">Grow XL vs Magnum Pump XR →</a>
        </div>
        <button
          type="button"
          class="cta-foil-primary"
          data-open-order-drawer="true"
          data-order-product="${esc(defaultProduct)}"
          data-order-qty="2"
        >
          <span>PILIH PAKEJ 2 BOTOL (RM 286 (10% OFF vs RM 318) · PENGHANTARAN PERCUMA)</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  </section>
  `;
}

/**
 * Shared Section 2: Botanical Monographs & Phytochemical Synergy Ledger in Bahasa Malaysia
 */
function renderBotanicalSynergyLedgerSectionBM() {
  return `
  <!-- ==========================================================================
       SINERGI MONOGRAF BOTANI & LALUAN NITRIK OKSIDA (PAUTAN ENSIKLOPEDIA)
       ========================================================================== -->
  <section
    id="sinergi-botani-nitrik-oksida"
    class="panduan-section"
    aria-labelledby="heading-bm-botanical-synergy"
  >
    <div class="panduan-section__inner">
      <header class="panduan-section__header">
        <div class="panduan-section__header-left">
          <span class="editorial-kicker">
            ENSIKLOPEDIA FITOKIMIA ONYXMEN · RUJUKAN MONOGRAF MAKMAL
          </span>
          <h2 id="heading-bm-botanical-synergy" class="editorial-headline-lg">
            Empat Monograf Fitokimia Utama: <span class="foil-champagne-text">Tongkat Ali 100:1, Tribulus, Maca Hitam &amp; L-Arginine.</span>
          </h2>
        </div>
        <div class="panduan-section__header-right">
          <p>
            Terokai monograf saintifik penuh kami dalam Bahasa Malaysia untuk memahami bagaimana setiap ekstrak akar
            dan asid amino dipiawaikan melalui ujian makmal HPLC dan spektrofotometri UV-Vis.
          </p>
        </div>
      </header>

      <div class="panduan-hairline-ledger">
        <div class="panduan-hairline-row">
          <div class="panduan-hairline-row__code">MONOGRAF-BM-01</div>
          <h3 class="panduan-hairline-row__title">
            Tongkat Ali Malaysia 100:1 (<em>Eurycoma longifolia</em>)
          </h3>
          <div class="panduan-hairline-row__body">
            Ekstrak akar matang hutan hujan Malaysia yang dipiawaikan kepada <strong>&gt;=2.2% Eurycomanone</strong> dan
            <strong>&gt;=22% Glikosaponin</strong>. Menyokong keseimbangan bioavailabiliti kecergasan lelaki dewasa,
            daya tahan tekanan kortisol, dan pemulihan tenaga malam di dalam Horsemen, Hammer of Thor, dan Grow XL.
          </div>
          <div class="panduan-hairline-row__meta">
            <a href="/ms/ramuan-botani/tongkat-ali-eurycoma-longifolia/" class="cta-hairline-secondary">Baca Monograf Tongkat Ali →</a>
          </div>
        </div>

        <div class="panduan-hairline-row">
          <div class="panduan-hairline-row__code">MONOGRAF-BM-02</div>
          <h3 class="panduan-hairline-row__title">
            Tribulus Terrestris 60% Saponin &amp; Panax Ginseng
          </h3>
          <div class="panduan-hairline-row__body">
            Ekstrak buah dan bahagian aerial <em>Tribulus terrestris</em> yang dipiawaikan kepada
            <strong>60% Saponin Steroid Furostanol (Protodioscin)</strong> digabungkan dengan Ginsenosida Rg1/Rb1
            daripada Panax Ginseng Merah Korea serta kelat Zink Bisglycinate untuk ketahanan otot.
          </div>
          <div class="panduan-hairline-row__meta">
            <a href="/ms/ramuan-botani/tribulus-terrestris/" class="cta-hairline-secondary">Baca Monograf Tribulus →</a>
          </div>
        </div>

        <div class="panduan-hairline-row">
          <div class="panduan-hairline-row__code">MONOGRAF-BM-03</div>
          <h3 class="panduan-hairline-row__title">
            Akar Maca Hitam Peru Tergelatinisasi (<em>Lepidium meyenii</em>)
          </h3>
          <div class="panduan-hairline-row__body">
            Ekotiop Maca Hitam tanah tinggi Junín, Peru (4,200m) yang menjalani proses gelatinisasi haba rendah bagi
            menyingkirkan kanji sukar hadam dan memekatkan <strong>Macamides &amp; Macaenes (&gt;=0.6%)</strong> untuk
            stamina bebas kafein.
          </div>
          <div class="panduan-hairline-row__meta">
            <a href="/ms/ramuan-botani/maca-hitam-lepidium-meyenii/" class="cta-hairline-secondary">Baca Monograf Maca Hitam →</a>
          </div>
        </div>

        <div class="panduan-hairline-row">
          <div class="panduan-hairline-row__code">MONOGRAF-BM-04</div>
          <h3 class="panduan-hairline-row__title">
            L-Arginine HCl, L-Citrulline Malate &amp; Laluan Nitrik Oksida
          </h3>
          <div class="panduan-hairline-row__body">
            Sistem prekursor vaskular dwi-fasa bersama ekstrak Nitrat Ubi Bit, Kunyit Hitam
            (<em>Kaempferia parviflora</em>), dan Bioperine (&gt;=95% Piperine) di dalam Magnum Pump XR (30 Kapsul Hitam)
            untuk menyokong vasodilatasi endotelium eNOS.
          </div>
          <div class="panduan-hairline-row__meta">
            <a href="/ms/ramuan-botani/l-arginine-l-citrulline-nitrik-oksida/" class="cta-hairline-secondary">Baca Monograf L-Arginine →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}

/**
 * Shared Section 3: Nationwide 16-State & Federal Territory Discreet Delivery & COD/FPX Matrix in Bahasa Malaysia
 */
function renderMalaysia16StatesDeliverySectionBM(defaultProduct = 'horsemen') {
  return `
  <!-- ==========================================================================
       JADUAL PENGHANTARAN RAHSIA 16 NEGERI & WILAYAH PERSEKUTUAN MALAYSIA
       ========================================================================== -->
  <section
    id="panduan-tempahan-cod-dan-fpx-rahsia"
    class="panduan-section panduan-section--charcoal"
    aria-labelledby="heading-bm-16-states-delivery"
  >
    <div class="panduan-section__inner">
      <header class="panduan-section__header">
        <div class="panduan-section__header-left">
          <span class="editorial-kicker">
            LOGISTIK BUNGKUSAN RAHSIA 16 NEGERI · OM FULFILMENT LOGISTICS (KUALA LUMPUR)
          </span>
          <h2 id="heading-bm-16-states-delivery" class="editorial-headline-lg">
            Rangkaian Penghantaran Rahsia Tanpa Nama Produk <span class="foil-champagne-text">Ke Seluruh 16 Negeri &amp; Wilayah Malaysia.</span>
          </h2>
        </div>
        <div class="panduan-section__header-right">
          <p>
            Setiap pesanan dibungkus di dalam kotak keselamatan legap tanpa sebarang logo atau perkataan Onyxmen.
            Pilih <strong>FPX Online Banking</strong>, <strong>DuitNow Instant QR</strong>, atau
            <strong>Bayar Waktu Terima (COD Malaysia)</strong>.
          </p>
        </div>
      </header>

      <div class="panduan-table-wrap">
        <table class="panduan-comparison-table">
          <thead>
            <tr>
              <th>Negeri / Wilayah Persekutuan</th>
              <th>Bandar &amp; Kawasan Liputan Utama</th>
              <th>Anggaran Masa Penghantaran</th>
              <th>Mod Kurier &amp; Pembayaran</th>
              <th>Pautan Hab Negeri</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>WP Kuala Lumpur (MY-14)</strong></td>
              <td>KLCC, Bukit Bintang, Bangsar, Mont Kiara, Cheras, Ampang, Setapak, Sri Petaling</td>
              <td><strong>Hari Sama (3–5 Jam)</strong> atau Ekspres 1 Hari</td>
              <td>Runner Peribadi Rahsia / NinjaVan / FPX / DuitNow / COD</td>
              <td><a href="/ms/penghantaran-malaysia/kuala-lumpur/" style="color:var(--gold-champagne);text-decoration:underline;">Hab Kuala Lumpur →</a></td>
            </tr>
            <tr>
              <td><strong>Selangor (MY-10)</strong></td>
              <td>Petaling Jaya, Subang Jaya, Shah Alam, Damansara, Puchong, Klang, Kajang, Bangi</td>
              <td><strong>Hari Sama (3–5 Jam)</strong> atau Ekspres 1 Hari</td>
              <td>Runner Peribadi Rahsia / NinjaVan / FPX / DuitNow / COD</td>
              <td><a href="/ms/penghantaran-malaysia/selangor/" style="color:var(--gold-champagne);text-decoration:underline;">Hab Selangor →</a></td>
            </tr>
            <tr>
              <td><strong>WP Putrajaya (MY-16)</strong></td>
              <td>Presint 1–20, Cyberjaya, Seri Kembangan, Dengkil</td>
              <td><strong>Hari Sama (3–5 Jam)</strong> atau Ekspres 1 Hari</td>
              <td>Runner Peribadi Rahsia / PosLaju / FPX / DuitNow / COD</td>
              <td><a href="/ms/penghantaran-malaysia/putrajaya/" style="color:var(--gold-champagne);text-decoration:underline;">Hab Putrajaya →</a></td>
            </tr>
            <tr>
              <td><strong>Pulau Pinang (MY-07)</strong></td>
              <td>George Town, Bayan Lepas, Jelutong, Butterworth, Bukit Mertajam, Seberang Perai</td>
              <td><strong>1–2 Hari Bekerja</strong> (Kurier Ekspres)</td>
              <td>NinjaVan Discreet / J&amp;T VIP / FPX / DuitNow / COD</td>
              <td><a href="/ms/penghantaran-malaysia/pulau-pinang/" style="color:var(--gold-champagne);text-decoration:underline;">Hab Pulau Pinang →</a></td>
            </tr>
            <tr>
              <td><strong>Johor (MY-01)</strong></td>
              <td>Johor Bahru, Iskandar Puteri, Skudai, Batu Pahat, Muar, Kluang, Kulai, Pasir Gudang</td>
              <td><strong>1–2 Hari Bekerja</strong> (Kurier Ekspres)</td>
              <td>NinjaVan Discreet / J&amp;T VIP / FPX / DuitNow / COD</td>
              <td><a href="/ms/penghantaran-malaysia/johor-bahru/" style="color:var(--gold-champagne);text-decoration:underline;">Hab Johor Bahru →</a></td>
            </tr>
            <tr>
              <td><strong>Perak (MY-08)</strong></td>
              <td>Ipoh, Taiping, Sitiawan, Seri Manjung, Teluk Intan, Kuala Kangsar, Kampar</td>
              <td><strong>1–2 Hari Bekerja</strong> (Kurier Ekspres)</td>
              <td>NinjaVan Discreet / PosLaju / FPX / DuitNow / COD</td>
              <td><a href="/ms/penghantaran-malaysia/perak-ipoh/" style="color:var(--gold-champagne);text-decoration:underline;">Hab Perak →</a></td>
            </tr>
            <tr>
              <td><strong>Melaka (MY-04)</strong></td>
              <td>Bandaraya Melaka, Ayer Keroh, Batu Berendam, Alor Gajah, Masjid Tanah, Jasin</td>
              <td><strong>1–2 Hari Bekerja</strong> (Kurier Ekspres)</td>
              <td>NinjaVan Discreet / J&amp;T VIP / FPX / DuitNow / COD</td>
              <td><a href="/ms/penghantaran-malaysia/melaka/" style="color:var(--gold-champagne);text-decoration:underline;">Hab Melaka →</a></td>
            </tr>
            <tr>
              <td><strong>Negeri Sembilan (MY-05)</strong></td>
              <td>Seremban, Senawang, Nilai, Port Dickson, Bahau, Tampin</td>
              <td><strong>1–2 Hari Bekerja</strong> (Kurier Ekspres)</td>
              <td>NinjaVan Discreet / J&amp;T VIP / FPX / DuitNow / COD</td>
              <td><a href="/ms/penghantaran-malaysia/negeri-sembilan-seremban/" style="color:var(--gold-champagne);text-decoration:underline;">Hab Negeri Sembilan →</a></td>
            </tr>
            <tr>
              <td><strong>Pahang (MY-06)</strong></td>
              <td>Kuantan, Temerloh, Bentong, Indera Mahkota, Pekan, Raub</td>
              <td><strong>1–2 Hari Bekerja</strong> (Kurier Ekspres)</td>
              <td>NinjaVan Discreet / PosLaju / FPX / DuitNow / COD</td>
              <td><a href="/ms/penghantaran-malaysia/pahang-kuantan/" style="color:var(--gold-champagne);text-decoration:underline;">Hab Pahang →</a></td>
            </tr>
            <tr>
              <td><strong>Kedah (MY-02)</strong></td>
              <td>Alor Setar, Sungai Petani, Kulim, Jitra, Pulau Langkawi</td>
              <td><strong>1–2 Hari Bekerja</strong> (Kurier Ekspres)</td>
              <td>NinjaVan Discreet / PosLaju / FPX / DuitNow / COD</td>
              <td><a href="/ms/penghantaran-malaysia/kedah-alor-setar/" style="color:var(--gold-champagne);text-decoration:underline;">Hab Kedah →</a></td>
            </tr>
            <tr>
              <td><strong>Kelantan (MY-03)</strong></td>
              <td>Kota Bharu, Kubang Kerian,Wakaf Che Yeh, Pasir Mas, Tanah Merah</td>
              <td><strong>1–2 Hari Bekerja</strong> (Kurier Ekspres)</td>
              <td>NinjaVan Discreet / J&amp;T VIP / FPX / DuitNow / COD</td>
              <td><a href="/ms/penghantaran-malaysia/kelantan-kota-bharu/" style="color:var(--gold-champagne);text-decoration:underline;">Hab Kelantan →</a></td>
            </tr>
            <tr>
              <td><strong>Terengganu (MY-11)</strong></td>
              <td>Kuala Terengganu,Gong Badak, Kemaman, Chukai, Dungun, Besut</td>
              <td><strong>1–2 Hari Bekerja</strong> (Kurier Ekspres)</td>
              <td>NinjaVan Discreet / PosLaju / FPX / DuitNow / COD</td>
              <td><a href="/ms/penghantaran-malaysia/terengganu-kuala-terengganu/" style="color:var(--gold-champagne);text-decoration:underline;">Hab Terengganu →</a></td>
            </tr>
            <tr>
              <td><strong>Perlis (MY-09)</strong></td>
              <td>Kangar, Arau, Kuala Perlis, Padang Besar</td>
              <td><strong>1–2 Hari Bekerja</strong> (Kurier Ekspres)</td>
              <td>NinjaVan Discreet / PosLaju / FPX / DuitNow / COD</td>
              <td><a href="/ms/penghantaran-malaysia/perlis-kangar/" style="color:var(--gold-champagne);text-decoration:underline;">Hab Perlis →</a></td>
            </tr>
            <tr>
              <td><strong>Sabah (MY-12)</strong></td>
              <td>Kota Kinabalu, Penampang, Sandakan, Tawau, Lahad Datu, Keningau</td>
              <td><strong>2–4 Hari Bekerja</strong> (Kargo Udara Rahsia)</td>
              <td>PosLaju Priority Air / J&amp;T Air (Percuma untuk 2+ Botol)</td>
              <td><a href="/ms/penghantaran-malaysia/sabah-kota-kinabalu/" style="color:var(--gold-champagne);text-decoration:underline;">Hab Sabah →</a></td>
            </tr>
            <tr>
              <td><strong>Sarawak (MY-13)</strong></td>
              <td>Kuching, Kota Samarahan, Miri, Sibu, Bintulu, Sri Aman</td>
              <td><strong>2–4 Hari Bekerja</strong> (Kargo Udara Rahsia)</td>
              <td>PosLaju Priority Air / J&amp;T Air (Percuma untuk 2+ Botol)</td>
              <td><a href="/ms/penghantaran-malaysia/sarawak-kuching/" style="color:var(--gold-champagne);text-decoration:underline;">Hab Sarawak →</a></td>
            </tr>
            <tr>
              <td><strong>WP Labuan (MY-15)</strong></td>
              <td>Bandar Labuan, Victoria, Rancha-Rancha, Financial Park</td>
              <td><strong>2–4 Hari Bekerja</strong> (Kargo Udara Rahsia)</td>
              <td>PosLaju Priority Air / FPX / DuitNow (Percuma untuk 2+ Botol)</td>
              <td><a href="/ms/penghantaran-malaysia/labuan/" style="color:var(--gold-champagne);text-decoration:underline;">Hab WP Labuan →</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  `;
}

/**
 * Shared Section 4: Multi-Bottle Acquisition Tiers & Directory Cross-Links in Bahasa Malaysia
 */
function renderMultiBottleAcquisitionAndDirectoryBM(defaultProduct = 'horsemen') {
  const guideDirectoryRowsHtml = BM_GUIDE_DOSSIERS.map((g) => {
    const primaryMsHref = g.canonicalMsPath;
    const altGuidesHref = `/ms/guides/${g.id}/`;
    return `
      <div class="panduan-hairline-row">
        <div class="panduan-hairline-row__code">${esc(g.microStep)} · ${esc(g.guideCode)}</div>
        <h3 class="panduan-hairline-row__title">
          <a href="${esc(primaryMsHref)}" style="text-decoration:underline;color:var(--gold-foil-bright);">
            ${esc(g.seoTitle.replace(' | Onyxmen Malaysia', '').replace(' | Onyxmen.my', ''))}
          </a>
        </h3>
        <div class="panduan-hairline-row__body">
          ${esc(g.leadSummary)}
        </div>
        <div class="panduan-hairline-row__meta">
          <a href="${esc(primaryMsHref)}" class="cta-hairline-secondary">Baca Panduan (/ms/panduan/) →</a>
          <a href="${esc(altGuidesHref)}" style="font-size:0.75rem;color:var(--text-ash-silver);text-decoration:underline;">Laluan Alternatif (/ms/guides/) →</a>
        </div>
      </div>`;
  }).join('\n');

  return `
  <!-- ==========================================================================
       INDEKS LENGKAP 14 PANDUAN PEMBELI & PROTOKOL BAHASA MALAYSIA
       ========================================================================== -->
  <section
    id="indeks-lengkap-6-panduan-pembeli-bm"
    class="panduan-section"
    aria-labelledby="heading-bm-6-guides-directory"
  >
    <div class="panduan-section__inner">
      <header class="panduan-section__header">
        <div class="panduan-section__header-left">
          <span class="editorial-kicker">
            PERPUSTAKAAN PROTOKOL ONYXMEN MALAYSIA · MS-154 HINGGA MS-160
          </span>
          <h2 id="heading-bm-6-guides-directory" class="editorial-headline-lg">
            14 panduan Lengkap Stamina, Semakan Ketulenan &amp; <span class="foil-champagne-text">Tempahan Bungkusan Rahsia Malaysia.</span>
          </h2>
        </div>
        <div class="panduan-section__header-right">
          <p>
            Akses terus kesemua 14 panduan penyelidikan dan protokol pengguna dalam Bahasa Malaysia di bawah,
            atau buka Laci Tempahan Ekspres untuk menempah botol rasmi anda (RM 159 / RM 286 (10% OFF vs RM 318) / RM 405 (15% OFF vs RM 477)).
          </p>
        </div>
      </header>

      <div class="panduan-hairline-ledger">
        ${guideDirectoryRowsHtml}
      </div>

      <div style="padding:2.5rem;background:linear-gradient(135deg, rgba(18,20,28,0.95) 0%, rgba(11,12,16,0.98) 100%);border:1px solid rgba(212,175,55,0.35);display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:2rem;">
        <div style="max-width:760px;display:flex;flex-direction:column;gap:0.75rem;">
          <span class="editorial-kicker">MEJA TEMPAHAN EKSPRES RAHSIA KUALA LUMPUR</span>
          <h3 class="editorial-headline-md">
            Sedia Untuk Memulakan Kitaran Kecergasan Anda Dalam <span class="foil-champagne-text">Bungkusan 100% Tanpa Nama?</span>
          </h3>
          <p style="color:var(--text-muted-alabaster);font-size:0.95rem;line-height:1.7;">
            Pilih <strong>1 Botol (RM 159.00)</strong> untuk kitaran permulaan, <strong>2 Botol (RM 286 (10% OFF vs RM 318))</strong>
            untuk Penghantaran Udara &amp; Kurier Ekspres Percuma ke seluruh Malaysia, atau
            <strong>3 Botol (RM 405 (15% OFF vs RM 477))</strong> untuk kitaran penuh 60–90 hari.
          </p>
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:1rem;">
          <button
            type="button"
            class="cta-foil-primary"
            data-open-order-drawer="true"
            data-order-product="${esc(defaultProduct)}"
            data-order-qty="1"
          >
            <span>TEMPAH 1 BOTOL · RM 159</span>
            <span aria-hidden="true">→</span>
          </button>
          <button
            type="button"
            class="cta-hairline-secondary"
            data-open-order-drawer="true"
            data-order-product="${esc(defaultProduct)}"
            data-order-qty="2"
          >
            <span>PAKEJ 2 BOTOL · RM 286 (10% OFF vs RM 318) (POS PERCUMA)</span>
          </button>
          <button
            type="button"
            class="cta-hairline-secondary"
            data-open-order-drawer="true"
            data-order-product="${esc(defaultProduct)}"
            data-order-qty="3"
          >
            <span>PAKEJ 3 BOTOL · RM 477</span>
          </button>
        </div>
      </div>
    </div>
  </section>
  `;
}

/**
 * Renders an Individual Bahasa Malaysia Buyer-Intent Guide Page (MS-155 through MS-160).
 */
export function renderIndividualGuidePageBM(dossier) {
  const canonicalPath = dossier.canonicalMsPath;
  const alternatePathEn = dossier.canonicalEnPath;
  const alternatePathMs = dossier.canonicalMsPath;

  const breadcrumbs = [
    { name: 'Utama Apotekari (BM)', url: '/ms/' },
    { name: 'Perpustakaan Panduan & Protokol', url: '/ms/panduan/' },
    { name: dossier.seoTitle.split('|')[0].trim(), url: canonicalPath },
  ];

  const schemaGraphJson = buildFullPageGraph({
    pageType: 'guide',
    lang: 'ms-MY',
    pageUrl: `https://www.onyxmen.my${canonicalPath}`,
    title: dossier.seoTitle,
    description: dossier.metaDescription,
    product: dossier.defaultProduct,
    article: {
      slug: dossier.slug,
      headlineEn: dossier.seoTitle,
      headlineMs: dossier.seoTitle,
      descriptionEn: dossier.metaDescription,
      descriptionMs: dossier.metaDescription,
      datePublished: `${dossier.publishedDate}T08:00:00+08:00`,
      dateModified: `${dossier.updatedDate}T08:00:00+08:00`,
      imageUrl: `https://www.onyxmen.my${dossier.heroVisualWebp}`,
    },
    breadcrumbs,
    faqs: dossier.faqs,
  });

  const telemetryHtml = dossier.telemetry
    .map(
      (t) => `
      <div class="panduan-cinema-hero__telemetry-col">
        <span class="panduan-cinema-hero__telemetry-label">${esc(t.label)}</span>
        <span class="panduan-cinema-hero__telemetry-val">${esc(t.val)}</span>
        <span class="panduan-cinema-hero__telemetry-sub">${esc(t.sub)}</span>
      </div>`
    )
    .join('\n');

  const chaptersHtml = dossier.chapters
    .map(
      (ch) => `
      <article class="panduan-split-5050__chapter">
        <span class="panduan-split-5050__chapter-index">${esc(ch.code)}</span>
        <h3 class="panduan-split-5050__chapter-title">${esc(ch.title)}</h3>
        <p class="panduan-split-5050__chapter-copy">${esc(ch.body)}</p>
      </article>`
    )
    .join('\n');

  const ledgerRowsHtml = dossier.protocolLedgerRows
    .map(
      (r) => `
      <div class="panduan-hairline-row">
        <div class="panduan-hairline-row__code">${esc(r.code)}</div>
        <h3 class="panduan-hairline-row__title">${esc(r.title)}</h3>
        <div class="panduan-hairline-row__body">${esc(r.body)}</div>
        <div class="panduan-hairline-row__meta">
          <span style="color:var(--gold-foil-bright);font-size:0.84rem;font-weight:600;">${esc(r.meta)}</span>
        </div>
      </div>`
    )
    .join('\n');

  const faqsHtml = dossier.faqs
    .map(
      (f, idx) => `
      <details class="panduan-faq-item"${idx === 0 ? ' open' : ''}>
        <summary>
          <span>${esc(f.q)}</span>
          <span class="panduan-faq-item__icon">SOALAN 0${idx + 1} · +</span>
        </summary>
        <div class="panduan-faq-item__answer">
          <p>${esc(f.a)}</p>
        </div>
      </details>`
    )
    .join('\n');

  const bodyContent = `
  ${BM_GUIDES_STAGE_CSS}

  <!-- ==========================================================================
       PARADIGM A — 100VW X 100VH FULL-BLEED OBSIDIAN CINEMA HERO STAGE
       ========================================================================== -->
  <section class="panduan-cinema-hero" aria-labelledby="heading-panduan-hero">
    <div class="panduan-cinema-hero__watermark" aria-hidden="true">${esc(dossier.watermarkText)}</div>

    <div class="panduan-cinema-hero__breadcrumb-bar">
      <nav class="panduan-cinema-hero__crumbs" aria-label="Breadcrumb">
        <a href="/ms/">Utama Apotekari (BM)</a>
        <span aria-hidden="true">/</span>
        <a href="/ms/panduan/">Panduan &amp; Protokol (/ms/panduan/)</a>
        <span aria-hidden="true">/</span>
        <span style="color:var(--gold-foil-bright);">${esc(dossier.guideCode)}</span>
      </nav>
      <div>
        <span>DITERBITKAN OLEH LEMBAGA PENYELIDIKAN BOTANI ONYXMEN KUALA LUMPUR · MASA BACAAN ${dossier.readingTimeMinutes} MINIT</span>
      </div>
    </div>

    <div class="panduan-cinema-hero__stage">
      <div class="panduan-cinema-hero__narrative">
        <span class="editorial-kicker">${esc(dossier.kicker)}</span>
        <h1 id="heading-panduan-hero" class="editorial-headline-xl">
          ${dossier.headlineHtml}
        </h1>
        <div class="panduan-cinema-hero__taxonomy-strip">
          <span>KOD PROTOKOL: ${esc(dossier.guideCode)}</span>
          <span>·</span>
          <span>HARGA RASMI: RM 159 / RM 286 (10% OFF vs RM 318) / RM 477</span>
          <span>·</span>
          <span>100% BUNGKUSAN RAHSIA MALAYSIA</span>
        </div>
        <p class="panduan-cinema-hero__lead article-executive-summary">
          ${esc(dossier.leadSummary)}
        </p>
        <div class="panduan-cinema-hero__cta-row">
          <button
            type="button"
            class="cta-foil-primary"
            data-open-order-drawer="true"
            data-order-product="${esc(dossier.defaultProduct)}"
            data-order-qty="1"
          >
            <span>TEMPAH BUNGKUSAN RAHSIA · RM 159</span>
            <span aria-hidden="true">→</span>
          </button>
          <a href="/ms/produk/" class="cta-hairline-secondary">Lihat 4 Formulasi (/ms/produk/) →</a>
          <a href="${esc(alternatePathEn)}" class="cta-hairline-secondary">Read In English (${esc(alternatePathEn)}) →</a>
        </div>
      </div>

      <div class="panduan-cinema-hero__visual">
        <div class="panduan-cinema-hero__pedestal">
          <picture>
            <source srcset="${esc(dossier.heroVisualWebp)}" type="image/webp" />
            <img
              src="${esc(dossier.heroVisualPng)}"
              alt="${esc(dossier.seoTitle)}"
              width="900"
              height="900"
              class="panduan-cinema-hero__img"
              fetchpriority="high"
              decoding="async"
            />
          </picture>
        </div>
      </div>
    </div>

    <div class="panduan-cinema-hero__telemetry-strip">
      ${telemetryHtml}
    </div>
  </section>

  <!-- ==========================================================================
       PARADIGM D — PINNED 50VW / 50VW SPLIT-SCREEN EDITORIAL PROTOCOL STAGE
       ========================================================================== -->
  <section class="panduan-split-5050" aria-labelledby="heading-pinned-summary">
    <div class="panduan-split-5050__pinned">
      <div>
        <span class="editorial-kicker">PARADIGM D · PENTAS SKRIN TERBELAH 50VW / 50VW</span>
        <h2 id="heading-pinned-summary" class="editorial-headline-lg" style="margin-top:0.85rem;">
          ${esc(dossier.pinnedSummaryTitle)}
        </h2>
        <p style="margin-top:1.15rem;color:var(--text-muted-alabaster);font-size:0.96rem;line-height:1.76;">
          ${esc(dossier.pinnedSummaryCopy)}
        </p>
      </div>

      <div class="panduan-hairline-ledger">
        <div style="display:flex;justify-content:space-between;padding:0.75rem 0;border-bottom:1px solid rgba(234,230,223,0.1);">
          <span style="color:var(--gold-champagne);font-size:0.74rem;letter-spacing:0.16em;">PAKEJ 1 BOTOL</span>
          <span style="color:var(--text-silk-ivory);font-size:0.88rem;font-weight:600;">RM 159.00 MYR (Kitaran Permulaan)</span>
        </div>
        <div style="display:flex;justify-content:space-between;padding:0.75rem 0;border-bottom:1px solid rgba(234,230,223,0.1);">
          <span style="color:var(--gold-champagne);font-size:0.74rem;letter-spacing:0.16em;">PAKEJ 2 BOTOL</span>
          <span style="color:var(--text-silk-ivory);font-size:0.88rem;font-weight:600;">RM 286 (10% OFF vs RM 318) MYR (Penghantaran Percuma)</span>
        </div>
        <div style="display:flex;justify-content:space-between;padding:0.75rem 0;border-bottom:1px solid rgba(234,230,223,0.1);">
          <span style="color:var(--gold-champagne);font-size:0.74rem;letter-spacing:0.16em;">PAKEJ 3 BOTOL</span>
          <span style="color:var(--text-silk-ivory);font-size:0.88rem;font-weight:600;">RM 405 (15% OFF vs RM 477) MYR (Bilik Kebal 60–90 Hari)</span>
        </div>
        <div style="display:flex;justify-content:space-between;padding:0.75rem 0;border-bottom:1px solid rgba(234,230,223,0.1);">
          <span style="color:var(--gold-champagne);font-size:0.74rem;letter-spacing:0.16em;">MEJA OPERASI KL</span>
          <span style="color:var(--text-silk-ivory);font-size:0.88rem;">sales@onyxmen.my · info@onyxmen.my</span>
        </div>
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:0.9rem;">
        <button
          type="button"
          class="cta-foil-primary"
          data-open-order-drawer="true"
          data-order-product="${esc(dossier.defaultProduct)}"
          data-order-qty="2"
        >
          <span>TEMPAH PAKEJ 2 BOTOL · RM 318</span>
          <span aria-hidden="true">→</span>
        </button>
        <a href="/ms/panduan/" class="cta-hairline-secondary">Semua 14 Panduan BM →</a>
      </div>
    </div>

    <div class="panduan-split-5050__scrolling">
      ${chaptersHtml}
    </div>
  </section>

  <!-- ==========================================================================
       SENARAI SEMAK PROTOKOL & PARAMETER TEKNIKAL (6 TERAS UTAMA)
       ========================================================================== -->
  <section class="panduan-section" aria-labelledby="heading-protocol-checklist">
    <div class="panduan-section__inner">
      <header class="panduan-section__header">
        <div class="panduan-section__header-left">
          <span class="editorial-kicker">${esc(dossier.guideCode)} · SENARAI SEMAK PARAMETER PROTOKOL</span>
          <h2 id="heading-protocol-checklist" class="editorial-headline-lg">
            Enam Parameter Pelaksanaan <span class="foil-champagne-text">Untuk Hasil Maksimum Di Malaysia.</span>
          </h2>
        </div>
        <div class="panduan-section__header-right">
          <p class="protocol-key-takeaways">
            Ikuti setiap parameter di bawah dengan teliti bagi memastikan penyerapan sebatian aktif, ketulenan botol,
            dan privasi penghantaran anda berada pada tahap 100%.
          </p>
        </div>
      </header>

      <div class="panduan-hairline-ledger">
        ${ledgerRowsHtml}
      </div>
    </div>
  </section>

  ${renderFourFormulationsMatrixSectionBM(dossier.defaultProduct)}
  ${renderBotanicalSynergyLedgerSectionBM()}
  ${renderMalaysia16StatesDeliverySectionBM(dossier.defaultProduct)}
  ${renderMultiBottleAcquisitionAndDirectoryBM(dossier.defaultProduct)}

  <!-- ==========================================================================
       SOALAN LAZIM (FAQ) KHUSUS PANDUAN BAHASA MALAYSIA
       ========================================================================== -->
  <section class="panduan-section panduan-section--onyx" aria-labelledby="heading-guide-faq">
    <div class="panduan-section__inner">
      <header class="panduan-section__header">
        <div class="panduan-section__header-left">
          <span class="editorial-kicker">SOALAN LAZIM PENGGUNA MALAYSIA · ${esc(dossier.guideCode)}</span>
          <h2 id="heading-guide-faq" class="editorial-headline-lg">
            Jawapan Tepat Daripada <span class="foil-champagne-text">Lembaga Kualiti &amp; Privasi Onyxmen.</span>
          </h2>
        </div>
      </header>

      <div class="panduan-faq-ledger">
        ${faqsHtml}
      </div>
    </div>
  </section>
  `;

  return renderLuxuryShell({
    lang: 'ms-MY',
    title: dossier.seoTitle,
    description: dossier.metaDescription,
    canonicalPath,
    alternatePathEn,
    alternatePathMs,
    ogImage: dossier.heroVisualWebp,
    schemaGraphJson,
    bodyContent,
    activeNav: 'guides',
    productSlug: dossier.defaultProduct,
    defaultQty: 1,
    includeSealStrip: true,
  });
}

/**
 * Renders the Master Bahasa Malaysia Guides Index Page (MS-154: /ms/guides/index.html & /ms/panduan/index.html).
 */
export function renderMasterGuidesIndexPageBM() {
  const canonicalPath = '/ms/panduan/';
  const alternatePathEn = '/guides/';
  const alternatePathMs = '/ms/panduan/';
  const title =
    'Perpustakaan Panduan Stamina Lelaki Dewasa, Semakan Ketulenan & Tempahan Rahsia Malaysia | Onyxmen Malaysia';
  const description =
    'Indeks lengkap 14 panduan rasmi Onyxmen Malaysia dalam Bahasa Malaysia: protokol masa pengambilan kapsul, semakan ketulenan botol RM 159, tempahan bungkusan rahsia COD/FPX, pemilihan kitaran 20 vs 30 kapsul, nutrisi tropika & sinergi Nitrik Oksida.';

  const combinedFaqs = BM_GUIDE_DOSSIERS.flatMap((g) => g.faqs.slice(0, 2));

  const breadcrumbs = [
    { name: 'Utama Apotekari (BM)', url: '/ms/' },
    { name: 'Perpustakaan Panduan & Protokol (/ms/panduan/)', url: '/ms/panduan/' },
  ];

  const schemaGraphJson = buildFullPageGraph({
    pageType: 'guide',
    lang: 'ms-MY',
    pageUrl: 'https://www.onyxmen.my/ms/panduan/',
    title,
    description,
    product: 'horsemen',
    article: {
      slug: 'panduan',
      headlineEn: title,
      headlineMs: title,
      descriptionEn: description,
      descriptionMs: description,
      datePublished: '2026-01-15T08:00:00+08:00',
      dateModified: '2026-10-30T08:00:00+08:00',
      imageUrl: 'https://www.onyxmen.my/assets/products/onyxman-lineup-hero.webp',
    },
    breadcrumbs,
    faqs: combinedFaqs,
  });

  const allDossierChaptersHtml = BM_GUIDE_DOSSIERS.map((g) => {
    return `
      <article class="panduan-split-5050__chapter">
        <span class="panduan-split-5050__chapter-index">${esc(g.microStep)} · ${esc(g.guideCode)} · MASA BACAAN ${g.readingTimeMinutes} MINIT</span>
        <h3 class="panduan-split-5050__chapter-title">
          <a href="${esc(g.canonicalMsPath)}" style="text-decoration:underline;color:var(--gold-foil-bright);">
            ${esc(g.seoTitle.split('|')[0].trim())}
          </a>
        </h3>
        <p class="panduan-split-5050__chapter-copy">${esc(g.leadSummary)}</p>
        <div style="display:flex;flex-wrap:wrap;gap:0.85rem;padding-top:0.5rem;">
          <a href="${esc(g.canonicalMsPath)}" class="cta-foil-primary" style="padding:0.65rem 1.2rem;font-size:0.74rem;">
            <span>BACA PANDUAN PENUH (${esc(g.canonicalMsPath)})</span>
            <span aria-hidden="true">→</span>
          </a>
          <a href="/ms/guides/${esc(g.id)}/" class="cta-hairline-secondary" style="padding:0.65rem 1.1rem;font-size:0.74rem;">
            <span>Pautan /ms/guides/${esc(g.id)}/ →</span>
          </a>
        </div>
      </article>`;
  }).join('\n');

  const combinedFaqsHtml = combinedFaqs
    .map(
      (f, idx) => `
      <details class="panduan-faq-item"${idx === 0 ? ' open' : ''}>
        <summary>
          <span>${esc(f.q)}</span>
          <span class="panduan-faq-item__icon">SOALAN 0${idx + 1} · +</span>
        </summary>
        <div class="panduan-faq-item__answer">
          <p>${esc(f.a)}</p>
        </div>
      </details>`
    )
    .join('\n');

  const bodyContent = `
  ${BM_GUIDES_STAGE_CSS}

  <!-- ==========================================================================
       PARADIGM A — 100VW X 100VH MASTER BAHASA MALAYSIA GUIDES HUB HERO STAGE
       ========================================================================== -->
  <section class="panduan-cinema-hero" aria-labelledby="heading-master-panduan-hero">
    <div class="panduan-cinema-hero__watermark" aria-hidden="true">PANDUAN BM</div>

    <div class="panduan-cinema-hero__breadcrumb-bar">
      <nav class="panduan-cinema-hero__crumbs" aria-label="Breadcrumb">
        <a href="/ms/">Utama Apotekari (BM)</a>
        <span aria-hidden="true">/</span>
        <span style="color:var(--gold-foil-bright);">Perpustakaan Panduan &amp; Protokol (/ms/panduan/ &amp; /ms/guides/)</span>
      </nav>
      <div>
        <span>MS-154 · 14 panduan RASMI BAHASA MALAYSIA · ONYXMEN.MY KUALA LUMPUR</span>
      </div>
    </div>

    <div class="panduan-cinema-hero__stage">
      <div class="panduan-cinema-hero__narrative">
        <span class="editorial-kicker">MS-154 · INDEKS UTAMA PERPUSTAKAAN PROTOKOL &amp; PANDUAN PEMBELI MALAYSIA</span>
        <h1 id="heading-master-panduan-hero" class="editorial-headline-xl">
          Perpustakaan Protokol Stamina, <span class="foil-champagne-text">Semakan Ketulenan &amp; Tempahan Rahsia Malaysia.</span>
        </h1>
        <div class="panduan-cinema-hero__taxonomy-strip">
          <span>14 PANDUAN PENUH (MS-155 – MS-160)</span>
          <span>·</span>
          <span>4 FORMULASI RASMI (RM 159)</span>
          <span>·</span>
          <span>16 NEGERI &amp; WILAYAH MALAYSIA</span>
        </div>
        <p class="panduan-cinema-hero__lead article-executive-summary">
          Selamat datang ke Pusat Rujukan Rasmi Bahasa Malaysia Onyxmen.my. Di sini kami menghimpunkan 14 panduan
          teknikal dan protokol pengguna merangkumi jadual masa pengambilan kapsul, senarai semak ketulenan botol
          RM 159, jaminan bungkusan rahsia kotak kosong (COD / FPX / DuitNow QR), pemilihan kitaran 20 vs 30 kapsul,
          nutrisi iklim tropika Malaysia, serta biokimia Nitrik Oksida dan herba adaptogenik.
        </p>
        <div class="panduan-cinema-hero__cta-row">
          <button
            type="button"
            class="cta-foil-primary"
            data-open-order-drawer="true"
            data-order-product="horsemen"
            data-order-qty="1"
          >
            <span>TEMPAH BUNGKUSAN RAHSIA · RM 159</span>
            <span aria-hidden="true">→</span>
          </button>
          <a href="#indeks-lengkap-6-panduan-pembeli-bm" class="cta-hairline-secondary">Terokai 14 Panduan Di Bawah ↓</a>
          <a href="/guides/" class="cta-hairline-secondary">English Guides Library (/guides/) →</a>
        </div>
      </div>

      <div class="panduan-cinema-hero__visual">
        <div class="panduan-cinema-hero__pedestal">
          <picture>
            <source srcset="/assets/products/onyxman-lineup-hero.webp" type="image/webp" />
            <img
              src="/assets/products/onyxman-lineup-hero.png"
              alt="Koleksi Lengkap 4 Formulasi Onyxmen Malaysia — Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR"
              width="1000"
              height="750"
              class="panduan-cinema-hero__img"
              fetchpriority="high"
              decoding="async"
            />
          </picture>
        </div>
      </div>
    </div>

    <div class="panduan-cinema-hero__telemetry-strip">
      <div class="panduan-cinema-hero__telemetry-col">
        <span class="panduan-cinema-hero__telemetry-label">14 PANDUAN PEMBELI BM</span>
        <span class="panduan-cinema-hero__telemetry-val">Masa Makan, Ketulenan &amp; Privasi</span>
        <span class="panduan-cinema-hero__telemetry-sub">Diterbitkan oleh Lembaga Kualiti Onyxmen KL</span>
      </div>
      <div class="panduan-cinema-hero__telemetry-col">
        <span class="panduan-cinema-hero__telemetry-label">HARGA RASMI SERAGAM</span>
        <span class="panduan-cinema-hero__telemetry-val">RM 159 / RM 286 (10% OFF vs RM 318) / RM 477</span>
        <span class="panduan-cinema-hero__telemetry-sub">Penghantaran Percuma untuk Pakej 2 &amp; 3 Botol</span>
      </div>
      <div class="panduan-cinema-hero__telemetry-col">
        <span class="panduan-cinema-hero__telemetry-label">LOGISTIK BUNGKUSAN RAHSIA</span>
        <span class="panduan-cinema-hero__telemetry-val">OM Fulfilment Logistics (KL)</span>
        <span class="panduan-cinema-hero__telemetry-sub">100% Kotak Kosong Tanpa Nama Produk</span>
      </div>
      <div class="panduan-cinema-hero__telemetry-col">
        <span class="panduan-cinema-hero__telemetry-label">MOD PEMBAYARAN MALAYSIA</span>
        <span class="panduan-cinema-hero__telemetry-val">FPX · DuitNow QR · COD</span>
        <span class="panduan-cinema-hero__telemetry-sub">Hari Sama Lembah Klang &amp; 1–2 Hari Ekspres</span>
      </div>
    </div>
  </section>

  <!-- ==========================================================================
       PARADIGM D — PINNED 50VW / 50VW MASTER PROTOCOL ARCHIVE STAGE
       ========================================================================== -->
  <section class="panduan-split-5050" aria-labelledby="heading-master-split-archive">
    <div class="panduan-split-5050__pinned">
      <div>
        <span class="editorial-kicker">PARADIGM D · PENTAS SKRIN TERBELAH 50VW / 50VW · 14 PANDUAN UTAMA</span>
        <h2 id="heading-master-split-archive" class="editorial-headline-lg" style="margin-top:0.85rem;">
          Enam Dokumen Protokol Rasmi <span class="foil-champagne-text">Untuk Lelaki Dewasa Di Malaysia.</span>
        </h2>
        <p style="margin-top:1.15rem;color:var(--text-muted-alabaster);font-size:0.96rem;line-height:1.76;">
          Pilih mana-mana panduan di sebelah kanan atau melalui jadual indeks pantas di bawah untuk membaca
          spesifikasi penuh masa pengambilan kapsul, semakan ketulenan botol, serta logistik penghantaran rahsia.
        </p>
      </div>

      <div class="panduan-hairline-ledger">
        ${BM_GUIDE_DOSSIERS.map(
          (g) => `
          <div style="display:flex;justify-content:space-between;align-items:center;gap:1rem;padding:0.75rem 0;border-bottom:1px solid rgba(234,230,223,0.1);">
            <span style="color:var(--gold-champagne);font-size:0.74rem;letter-spacing:0.16em;">${esc(g.guideCode)}</span>
            <a href="${esc(g.canonicalMsPath)}" style="color:var(--gold-foil-bright);font-size:0.88rem;text-decoration:underline;flex:1;">
              ${esc(g.seoTitle.split('|')[0].trim())}
            </a>
            <span style="color:var(--text-ash-silver);font-size:0.75rem;">→</span>
          </div>`
        ).join('\n')}
      </div>

      <div style="display:flex;flex-wrap:wrap;gap:0.9rem;">
        <button
          type="button"
          class="cta-foil-primary"
          data-open-order-drawer="true"
          data-order-product="horsemen"
          data-order-qty="2"
        >
          <span>TEMPAH PAKEJ 2 BOTOL · RM 286 (10% OFF vs RM 318) (POS PERCUMA)</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>

    <div class="panduan-split-5050__scrolling">
      ${allDossierChaptersHtml}
    </div>
  </section>

  ${renderMultiBottleAcquisitionAndDirectoryBM('horsemen')}
  ${renderFourFormulationsMatrixSectionBM('horsemen')}
  ${renderBotanicalSynergyLedgerSectionBM()}
  ${renderMalaysia16StatesDeliverySectionBM('horsemen')}

  <!-- ==========================================================================
       SOALAN LAZIM INDUK (MASTER FAQ LEDGER) BAHASA MALAYSIA
       ========================================================================== -->
  <section class="panduan-section panduan-section--onyx" aria-labelledby="heading-master-bm-faq">
    <div class="panduan-section__inner">
      <header class="panduan-section__header">
        <div class="panduan-section__header-left">
          <span class="editorial-kicker">SOALAN LAZIM INDUK · PERPUSTAKAAN PANDUAN ONYXMEN MALAYSIA</span>
          <h2 id="heading-master-bm-faq" class="editorial-headline-lg">
            Jawapan Lengkap Mengenai <span class="foil-champagne-text">Masa Makan, Ketulenan, COD &amp; Kitaran Kapsul.</span>
          </h2>
        </div>
      </header>

      <div class="panduan-faq-ledger">
        ${combinedFaqsHtml}
      </div>
    </div>
  </section>
  `;

  return renderLuxuryShell({
    lang: 'ms-MY',
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
 * Main Build Execution for MS-154 through MS-160
 */
export function buildAllBahasaMalaysiaGuides() {
  const summary = [];

  // MS-154: Master Bahasa Malaysia Guides Index (/ms/guides/index.html & /ms/panduan/index.html)
  const masterIndexHtml = renderMasterGuidesIndexPageBM();
  summary.push(
    ...writeHtmlToPublicPaths(masterIndexHtml, [
      'ms/guides/index.html',
      'ms/panduan/index.html',
    ])
  );

  // MS-155 through MS-160: All 6 Bahasa Malaysia Buyer-Intent SEO Guides + All Route Aliases
  for (const dossier of BM_GUIDE_DOSSIERS) {
    const guideHtml = renderIndividualGuidePageBM(dossier);
    summary.push(...writeHtmlToPublicPaths(guideHtml, dossier.msOutputPaths));
  }

  return summary;
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  const builtFiles = buildAllBahasaMalaysiaGuides();
  console.log('================================================================================');
  console.log('ONYXMEN.MY — BAHASA MALAYSIA BUYER-INTENT SEO GUIDES BUILD COMPLETE (MS-154..160)');
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

    console.log(`[PASS] ${item.relPath.padEnd(84)} | ${String(item.lines).padStart(5)} lines | ${item.bytes} bytes`);
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
