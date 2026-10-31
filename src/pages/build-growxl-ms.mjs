#!/usr/bin/env node
/**
 * ============================================================================
 * ONYXMAN.MY — GROW XL BAHASA MALAYSIA FLAGSHIP BUILDER (MS-112 TO MS-113)
 * Output Targets:
 *   1. public/ms/grow-xl-malaysia/index.html
 *   2. public/ms/produk/grow-xl/index.html
 * Canonical URL: https://onyxman.my/ms/grow-xl-malaysia/
 * Paired EN URL: https://onyxman.my/grow-xl-malaysia/
 * Product Constants:
 * - Name: Grow XL Malaysia (Produk #1 Terlaris — Diperbuat Daripada Ramuan Semula Jadi — Campuran Peningkatan Prestasi Lelaki Kekuatan Ekstra — 30 Kapsul)
 * - SKU: ONYX-GX-30 | MPN: GXL-30CAP-MY | GTIN-13: 9550000102035
 * - Official Pricing: 1 Botol = RM 159 | 2 Botol = RM 318 | 3 Botol = RM 477
 * - Refill Protocol: Peringatan Isian Semula Hari Ke-25 (Kitaran Bulanan 30 Hari)
 * - Emails: waleedshoaibofficial@gmail.com | sales@onyxman.my | info@onyxman.my
 * ============================================================================
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderLuxuryShell } from '../components/LuxuryShell.mjs';
import { buildFullPageGraphObject } from '../utils/schema-graph.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..', '..');

const CANONICAL_PATH_MS = '/ms/grow-xl-malaysia/';
const ALTERNATE_PATH_EN = '/grow-xl-malaysia/';
const CANONICAL_URL_MS = 'https://onyxman.my/ms/grow-xl-malaysia/';
const ALTERNATE_URL_EN = 'https://onyxman.my/grow-xl-malaysia/';

const PAGE_TITLE_MS =
  'Grow XL Malaysia (30 Kapsul) — Produk #1 Terlaris Campuran Peningkatan Prestasi Lelaki Kekuatan Ekstra | RM 159 Onyxman.my';
const PAGE_DESCRIPTION_MS =
  'Beli Grow XL Malaysia tulen (Produk #1 Terlaris — Diperbuat Daripada Ramuan Semula Jadi — Campuran Peningkatan Prestasi Lelaki Kekuatan Ekstra — 30 Kapsul, SKU: ONYX-GX-30, MPN: GXL-30CAP-MY, GTIN-13: 9550000102035) pada harga rasmi RM 159 (1 Botol), RM 318 (2 Botol) atau RM 477 (3 Botol) di Onyxman.my. Kitaran penuh 30 hari (550mg × 30 kapsul = 16,500mg) dengan Tongkat Ali Kekuatan Ekstra 140mg, Akar Maca Peru 110mg, L-Arginine & L-Citrulline 100mg, Muira Puama Brazil 80mg, Saw Palmetto 70mg & Panax Ginseng + Ginkgo Biloba 50mg.';

/**
 * 10 Comprehensive Bahasa Malaysia FAQs for Grow XL Malaysia (MS-113)
 */
const GROWXL_BM_FAQS = [
  {
    question:
      'Berapakah bilangan kapsul di dalam 1 botol Grow XL Malaysia dan berapa lama bekalan ini bertahan?',
    answer:
      'Setiap botol tulen Grow XL Malaysia (SKU: ONYX-GX-30, MPN: GXL-30CAP-MY, GTIN-13: 9550000102035) mengandungi 30 kapsul kekuatan ekstra (550mg setiap kapsul, bersamaan 16,500mg jumlah kepekatan aktif sebotol). Pada sukatan harian yang disyorkan iaitu 1 kapsul sehari selepas sarapan pagi atau makan malam, 1 botol membekalkan kitaran bulanan penuh selama 30 hari tanpa terputus.',
  },
  {
    question:
      'Apakah maksud cetakan "#1 Selling Product — Made With Natural Ingredient — Extra-Strength Enhancement Male Performance Blend — 30 Capsules" pada botol Grow XL?',
    answer:
      'Cetakan lencana emas "#1 Selling Product — Made With Natural Ingredient" dan jaluran merah "Extra-Strength Enhancement Male Performance Blend — 30 Capsules" pada botol hitam obsidian mengesahkan spesifikasi rasmi Grow XL Malaysia: Produk #1 Terlaris yang diperbuat daripada ramuan semula jadi dengan campuran peningkatan prestasi lelaki kekuatan ekstra sebanyak 30 kapsul. Ia menggabungkan 6 ekstrak botani dan asid amino tulen tanpa sebarang bahan kimia sintetik terlarang.',
  },
  {
    question:
      'Apakah 6 ramuan aktif utama di dalam setiap kapsul 550mg Grow XL Malaysia?',
    answer:
      'Setiap kapsul 550mg Grow XL dirumus secara telus tanpa campuran rahsia: (1) Ekstrak Akar Tongkat Ali Malaysia Kekuatan Ekstra 140mg (nisbah 100:1, 2.0% Eurycomanone), (2) Ekstrak Akar Maca Peru 110mg (nisbah 10:1 bergelatin), (3) Matriks Dwi-Asid Amino L-Arginine HCl & L-Citrulline Malate 100mg (nisbah 2:1), (4) Ekstrak Kulit & Akar Muira Puama Brazil 80mg (nisbah 12:1 fitosterol), (5) Ekstrak Beri Saw Palmetto 70mg (45% asid lemak bebas & fitosterol), dan (6) Kompleks Panax Ginseng & Ginkgo Biloba 50mg (8% ginsenosida + 24% glikosida flavon).',
  },
  {
    question:
      'Apakah perbezaan antara Grow XL (30 Kapsul) berbanding Horsemen dan Hammer of Thor (20 Kapsul)?',
    answer:
      'Grow XL direka khusus sebagai protokol penjagaan nutrisi harian selama 30 hari penuh (1 kapsul 550mg setiap hari) yang menggabungkan Tongkat Ali Kekuatan Ekstra, Maca Peru, L-Arginine/L-Citrulline, Muira Puama Brazil, Saw Palmetto, dan Ginkgo Biloba untuk kecergasan sepanjang hari serta aliran darah mikro. Horsemen (20 kapsul) lebih tertumpu kepada kesediaan tenaga malam yang pantas, manakala Hammer of Thor (20 kapsul vegetarian HPMC) memfokuskan pemulihan fizikal berasaskan 200mg saponin Tribulus Terrestris.',
  },
  {
    question:
      'Apakah perbezaan antara Grow XL dan Magnum Pump XR memandangkan kedua-duanya mempunyai 30 kapsul pada harga RM 159?',
    answer:
      'Walaupun kedua-duanya mengandungi 30 kapsul pada harga rasmi RM 159 sebotol, fungsi biokimianya berbeza. Grow XL ialah campuran botani semula jadi kekuatan ekstra harian (mengandungi Muira Puama, Saw Palmetto, Tongkat Ali 140mg, dan Maca 110mg) yang diambil 1 kapsul setiap pagi selepas sarapan untuk vitaliti progresif 30 hari. Magnum Pump XR (30 Kapsul Hitam) pula ialah formulasi khusus Nitrik Oksida & Vaskular (AAKG, L-Citrulline, Kunyit Hitam, Ekstrak Ubi Bit & Bioperine) yang diambil 30–45 minit sebelum latihan gimnasium atau aktiviti malam.',
  },
  {
    question:
      'Mengapakah Peringatan Isian Semula (Refill Protocol) untuk Grow XL ditetapkan pada Hari Ke-25 dan bukannya Hari Ke-18?',
    answer:
      'Kerana Grow XL membekalkan 30 kapsul penuh sebotol untuk kitaran 30 hari (berbanding 20 kapsul bagi Horsemen dan Hammer of Thor). Apabila anda mengambil 1 kapsul sehari, anda akan mempunyai baki 5 kapsul pada Hari Ke-25. Sistem peringatan automatik Google Calendar dan WhatsApp Onyxman pada Hari Ke-25 memberi ruang masa 5 hari yang selesa supaya penghantaran kurier ekspres 1–2 hari bekerja tiba sebelum kapsul ke-30 anda habis.',
  },
  {
    question:
      'Berapakah harga rasmi untuk pakej 1 Botol, 2 Botol, dan 3 Botol Grow XL di Malaysia?',
    answer:
      'Harga rasmi Grow XL di Onyxman.my adalah telus dan tetap: 1 Botol (30 Kapsul / Kitaran 30 Hari) berharga RM 159 (bersamaan RM 5.30 sehari) dengan penghantaran ekspres rahsia percuma di Semenanjung Malaysia; 2 Botol (60 Kapsul / Kitaran 60 Hari Paling Laris) berharga RM 318 dengan penghantaran ekspres rahsia percuma ke seluruh Malaysia termasuk Sabah, Sarawak & Labuan; dan 3 Botol (90 Kapsul / Kitaran Optimum 90 Hari) berharga RM 477 dengan keutamaan pelepasan kurier VIP.',
  },
  {
    question:
      'Adakah Grow XL dihantar di dalam kotak kosong rahsia tanpa sebarang nama produk?',
    answer:
      'Ya, 100% rahsia. Setiap bungkusan Grow XL meninggalkan hab logistik kami di dalam kotak kurier legap tanpa logo Onyxman, tanpa gambar botol, dan tanpa perkataan "Grow XL" atau "Prestasi Lelaki". Pada slip alamat kurier (airway bill), nama pengirim hanya dicetak sebagai "OM Fulfilment Logistics" demi melindungi privasi anda di rumah, pejabat, atau pondok pengawal kondominium.',
  },
  {
    question:
      'Bolehkah saya membuat bayaran secara COD (Bayar Waktu Terima), FPX, atau DuitNow QR di seluruh Malaysia?',
    answer:
      'Ya. Onyxman Malaysia menyokong pembayaran segera melalui Perbankan Dalam Talian FPX (Maybank2u, CIMB Clicks, Public Bank, RHB, Hong Leong, Bank Islam), imbasan DuitNow QR segera, serta perkhidmatan Bayar Waktu Terima (Cash on Delivery / COD Malaysia) di seluruh Semenanjung Malaysia dan bandar-bandar utama di Sabah serta Sarawak.',
  },
  {
    question:
      'Adakah Grow XL membuat tuntutan anatomi kekal yang melampau atau mengandungi bahan kimia sintetik?',
    answer:
      'Tidak sama sekali. Di Onyxman Malaysia, kami menolak sebarang tuntutan perubatan atau anatomi kekal yang tidak realistik. Grow XL ialah suplemen pemakanan botani dan asid amino tulen (Tongkat Ali, Maca, L-Arginine, L-Citrulline, Muira Puama, Saw Palmetto, Panax Ginseng, Ginkgo Biloba) yang dirumus secara saintifik untuk menyokong stamina fizikal harian, kelancaran peredaran darah mikro periferi, dan kecergasan semula jadi lelaki dewasa berumur 18 tahun ke atas.',
  },
];

/**
 * Builds the complete ms-MY @graph JSON-LD structured data specifically anchored to
 * https://onyxman.my/ms/grow-xl-malaysia/ with SKU ONYX-GX-30 & MPN GXL-30CAP-MY.
 */
function buildGrowXlMsSchemaJson() {
  const baseGraphObj = buildFullPageGraphObject({
    pageType: 'product',
    lang: 'ms-MY',
    pageUrl: CANONICAL_URL_MS,
    title: PAGE_TITLE_MS,
    description: PAGE_DESCRIPTION_MS,
    product: {
      id: 'grow-xl',
      slug: 'grow-xl',
      name: 'Grow XL Malaysia',
      fullTitleEn:
        'Grow XL Malaysia — #1 Selling Product Made With Natural Ingredient Extra-Strength Enhancement Male Performance Blend (30 Capsules)',
      fullTitleMs:
        'Grow XL Malaysia — Produk #1 Terlaris Diperbuat Daripada Ramuan Semula Jadi Campuran Peningkatan Prestasi Lelaki Kekuatan Ekstra (30 Kapsul)',
      descriptionEn:
        'Grow XL by Onyxman Malaysia (SKU: ONYX-GX-30, MPN: GXL-30CAP-MY, GTIN-13: 9550000102035) is a 30-capsule extra-strength daily botanical dietary supplement (550mg per capsule, 16,500mg per bottle) formulated with Extra-Strength Malaysian Tongkat Ali (140mg), Peruvian Maca Root (110mg), L-Arginine & L-Citrulline Matrix (100mg), Brazilian Muira Puama (80mg), Saw Palmetto Berry (70mg), and Panax Ginseng + Ginkgo Biloba Complex (50mg).',
      descriptionMs:
        'Grow XL oleh Onyxman Malaysia (SKU: ONYX-GX-30, MPN: GXL-30CAP-MY, GTIN-13: 9550000102035) ialah suplemen pemakanan botani kekuatan ekstra 30 kapsul (550mg setiap kapsul, 16,500mg sebotol) yang dirumus dengan Tongkat Ali Malaysia Kekuatan Ekstra (140mg), Akar Maca Peru (110mg), Matriks L-Arginine & L-Citrulline (100mg), Muira Puama Brazil (80mg), Beri Saw Palmetto (70mg), serta Kompleks Panax Ginseng & Ginkgo Biloba (50mg) untuk kitaran bulanan 30 hari penuh.',
      disambiguatingDescriptionEn:
        'Oral 30-capsule botanical and amino-acid dietary supplement for adult men (18+) in Malaysia. Official price RM 159 per bottle.',
      disambiguatingDescriptionMs:
        'Suplemen kapsul pemakanan botani dan asid amino kekuatan ekstra (30 kapsul × 550mg sebotol) untuk stamina, aliran mikro, dan kecergasan harian lelaki dewasa (18+) di Malaysia. Harga rasmi RM 159 sebotol.',
      capsuleCount: 30,
      dosageProtocolEn:
        'Take 1 capsule (550mg) every morning 20–30 minutes after breakfast with 250ml–300ml water for a complete 30-day cycle, or 1 capsule 30 minutes after dinner.',
      dosageProtocolMs:
        'Ambil 1 kapsul (550mg) setiap pagi 20–30 minit selepas sarapan bersama 250ml–300ml air kosong untuk kitaran penuh 30 hari, atau 1 kapsul 30 minit selepas makan malam.',
      primaryFocusEn:
        '30-Day Daily Extra-Strength Male Performance Conditioning, Peripheral Micro-Circulation & Sustained All-Day Vitality',
      primaryFocusMs:
        'Penjagaan Harian 30 Hari Kekuatan Ekstra, Kelancaran Peredaran Darah Mikro & Stamina Lelaki Sepanjang Hari',
      keyBotanicals: [
        'Eurycoma longifolia (140mg Extra-Strength Malaysian Tongkat Ali 100:1 Extract — 2.0% Eurycomanone)',
        'Lepidium meyenii (110mg Concentrated Peruvian Maca Root 10:1 Gelatinized Extract)',
        'L-Arginine HCl & L-Citrulline Malate (100mg 2:1 Dual Amino-Acid Micro-Circulation Matrix)',
        'Ptychopetalum olacoides (80mg Brazilian Muira Puama 12:1 Bark & Root Phytosterols)',
        'Serenoa repens (70mg Saw Palmetto Berry 45% Free Fatty Acids & Phytosterols)',
        'Panax ginseng & Ginkgo biloba (50mg 8% Ginsenosides + 24% Flavone Glycosides Vascular Cofactor)',
      ],
      priceMYR: '159.00',
      sku: 'ONYX-GX-30',
      mpn: 'GXL-30CAP-MY',
      gtin13: '9550000102035',
      imageStageWebp: 'https://onyxman.my/assets/products/grow-xl-stage.webp',
      imageStagePng: 'https://onyxman.my/assets/products/grow-xl-stage.png',
      imagePortraitWebp: 'https://onyxman.my/assets/products/grow-xl-portrait.webp',
      imagePortraitPng: 'https://onyxman.my/assets/products/grow-xl-portrait.png',
      imageCutoutWebp: 'https://onyxman.my/assets/products/grow-xl-cutout.webp',
      imageCutoutPng: 'https://onyxman.my/assets/products/grow-xl-cutout.png',
    },
    breadcrumbs: [
      { name: 'Utama Onyxman Malaysia', url: 'https://onyxman.my/ms/' },
      { name: '4 Formulasi Apotekari', url: 'https://onyxman.my/ms/produk/' },
      {
        name: 'Grow XL Malaysia (30 Kapsul — Kekuatan Ekstra)',
        url: CANONICAL_URL_MS,
      },
    ],
    faqs: GROWXL_BM_FAQS,
  });

  // Normalize all internal product URLs in the JSON-LD graph to point directly to https://onyxman.my/ms/grow-xl-malaysia/
  const rawSerialized = JSON.stringify(baseGraphObj, null, 2).replace(
    /https:\/\/onyxman\.my\/ms\/produk\/grow-xl\//g,
    CANONICAL_URL_MS
  );
  return rawSerialized;
}

/**
 * Page-specific architectural CSS rules for Grow XL BM Flagship Page.
 * Strictly adheres to Rule #29 & Rule #30:
 * - Palette: #050507, #0B0C10, #12141C, #D4AF37, #F3E5AB, #EAE6DF
 * - Typography: 'Cormorant Garamond', 'Syne', 'Space Grotesk'
 * - Zero #FAF8F5, Zero Plus Jakarta Sans, Zero pill badges, Zero 3-col card boxes
 */
const GROWXL_MS_EXTRA_HEAD_CSS = `
    <style id="growxl-ms-architectural-css">
      /* ==========================================================================
         GROW XL MALAYSIA (MS-MY) — BESPOKE ARCHITECTURAL STAGE STYLES
         ========================================================================== */
      .growxl-hero-stage {
        position: relative;
        width: 100vw;
        min-height: 100vh;
        background-color: #050507;
        background-image:
          radial-gradient(circle at 74% 38%, rgba(212, 175, 55, 0.15) 0%, rgba(18, 20, 28, 0.84) 54%, #050507 100%);
        border-bottom: 1px solid rgba(212, 175, 55, 0.24);
        padding: clamp(6.5rem, 11vh, 9.5rem) var(--gutter-cinema) clamp(4rem, 8vh, 6.5rem);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
      }

      .growxl-hero-stage__ambient-watermark {
        position: absolute;
        top: 11%;
        right: -2vw;
        font-family: var(--font-display);
        font-size: clamp(6rem, 16vw, 18rem);
        font-weight: 600;
        line-height: 0.85;
        letter-spacing: -0.03em;
        color: rgba(212, 175, 55, 0.035);
        pointer-events: none;
        user-select: none;
        z-index: 1;
        text-transform: uppercase;
      }

      .growxl-hero-stage__breadcrumb-bar {
        position: relative;
        z-index: 4;
        max-width: 1680px;
        width: 100%;
        margin: 0 auto 2rem;
        padding-bottom: 1rem;
        border-bottom: 1px solid rgba(234, 230, 223, 0.09);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
      }

      .growxl-breadcrumb-list {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 0.65rem;
        list-style: none;
        font-family: var(--font-technical);
        font-size: 0.74rem;
        letter-spacing: 0.18em;
        text-transform: uppercase;
        color: #B8B3A8;
      }

      .growxl-breadcrumb-list a:hover {
        color: #F3E5AB;
      }

      .growxl-breadcrumb-sep {
        color: #D4AF37;
      }

      .growxl-gold-crest-inline {
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        font-family: var(--font-technical);
        font-size: 0.72rem;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: #F3E5AB;
        padding: 0.35rem 0.85rem;
        border-left: 2px solid #D4AF37;
        background: linear-gradient(90deg, rgba(212, 175, 55, 0.18) 0%, rgba(5, 5, 7, 0) 100%);
      }

      .growxl-gold-crest-inline__dot {
        width: 7px;
        height: 7px;
        background-color: #D4AF37;
        display: inline-block;
      }

      .growxl-hero-stage__core {
        position: relative;
        z-index: 4;
        max-width: 1680px;
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        gap: clamp(2.5rem, 5vw, 6rem);
      }

      .growxl-hero-stage__editorial-col {
        flex: 1 1 56%;
        max-width: 880px;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .growxl-hero-stage__visual-col {
        flex: 1 1 44%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
      }

      .growxl-hero-stage__pedestal {
        position: relative;
        width: 100%;
        max-width: 580px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem 1rem;
        background: radial-gradient(circle at 50% 48%, rgba(212, 175, 55, 0.18) 0%, rgba(18, 20, 28, 0.12) 42%, rgba(5, 5, 7, 0) 74%);
      }

      .growxl-hero-stage__bottle-img {
        width: clamp(270px, 34vw, 520px);
        max-height: 74vh;
        object-fit: contain;
        mask-image: radial-gradient(circle at 50% 50%, #000000 72%, transparent 98%);
        -webkit-mask-image: radial-gradient(circle at 50% 50%, #000000 72%, transparent 98%);
        filter: drop-shadow(0 34px 68px rgba(0, 0, 0, 0.95));
        transition: transform 480ms cubic-bezier(0.16, 1, 0.3, 1);
      }

      .growxl-hero-stage__bottle-caption {
        width: 100%;
        margin-top: 1.5rem;
        padding-top: 1rem;
        border-top: 1px solid rgba(212, 175, 55, 0.24);
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        gap: 0.75rem;
        font-family: var(--font-technical);
        font-size: 0.73rem;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: #B8B3A8;
      }

      .growxl-label-transcription-strip {
        padding: 1.15rem 1.35rem;
        background-color: rgba(18, 20, 28, 0.78);
        border-left: 2px solid #D4AF37;
        border-top: 1px solid rgba(212, 175, 55, 0.18);
        border-bottom: 1px solid rgba(212, 175, 55, 0.18);
        display: flex;
        flex-direction: column;
        gap: 0.45rem;
      }

      .growxl-label-transcription-strip__eyebrow {
        font-family: var(--font-technical);
        font-size: 0.68rem;
        letter-spacing: 0.24em;
        text-transform: uppercase;
        color: #D4AF37;
      }

      .growxl-label-transcription-strip__exact {
        font-family: var(--font-architectural);
        font-size: 0.98rem;
        font-weight: 700;
        letter-spacing: 0.06em;
        color: #EAE6DF;
      }

      .growxl-label-transcription-strip__meta {
        font-family: var(--font-technical);
        font-size: 0.8rem;
        color: #B8B3A8;
      }

      .growxl-telemetry-bar {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        justify-content: space-between;
        border-top: 1px solid rgba(212, 175, 55, 0.24);
        border-bottom: 1px solid rgba(212, 175, 55, 0.24);
        padding: 1.1rem 0;
        gap: 1.5rem;
      }

      .growxl-telemetry-bar__item {
        flex: 1 1 160px;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        padding-right: 1rem;
        border-right: 1px solid rgba(234, 230, 223, 0.09);
      }

      .growxl-telemetry-bar__item:last-child {
        border-right: none;
      }

      .growxl-telemetry-bar__label {
        font-family: var(--font-technical);
        font-size: 0.68rem;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: #7E7A72;
      }

      .growxl-telemetry-bar__val {
        font-family: var(--font-display);
        font-size: 1.45rem;
        font-weight: 600;
        color: #F3E5AB;
      }

      .growxl-telemetry-bar__sub {
        font-family: var(--font-technical);
        font-size: 0.76rem;
        color: #B8B3A8;
      }

      .growxl-cta-cluster {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1.15rem;
        margin-top: 0.5rem;
      }

      /* Section Horizons & Chapter Headers */
      .growxl-section-stage {
        position: relative;
        width: 100vw;
        background-color: #050507;
        border-bottom: 1px solid rgba(212, 175, 55, 0.24);
        padding: var(--gutter-vertical) var(--gutter-cinema);
      }

      .growxl-section-stage--onyx {
        background-color: #0B0C10;
      }

      .growxl-section-stage--charcoal {
        background-color: #12141C;
      }

      .growxl-section-inner {
        max-width: 1680px;
        width: 100%;
        margin: 0 auto;
      }

      .growxl-chapter-header {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: clamp(2.5rem, 5vh, 4.5rem);
        padding-bottom: 2rem;
        border-bottom: 1px solid rgba(212, 175, 55, 0.24);
      }

      .growxl-chapter-header__meta-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
      }

      .growxl-chapter-number {
        font-family: var(--font-technical);
        font-size: 0.74rem;
        letter-spacing: 0.28em;
        text-transform: uppercase;
        color: #D4AF37;
      }

      /* Botanical Active Monograph Ledger inside Paradigm D */
      .growxl-botanical-monograph-block {
        padding: 2.25rem 0;
        border-bottom: 1px solid rgba(212, 175, 55, 0.22);
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .growxl-botanical-monograph-block:first-of-type {
        border-top: 1px solid rgba(212, 175, 55, 0.22);
      }

      .growxl-botanical-monograph-block__top {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        justify-content: space-between;
        gap: 1rem;
      }

      .growxl-botanical-monograph-block__code {
        font-family: var(--font-technical);
        font-size: 0.72rem;
        letter-spacing: 0.24em;
        text-transform: uppercase;
        color: #D4AF37;
      }

      .growxl-botanical-monograph-block__dosage {
        font-family: var(--font-display);
        font-size: 1.95rem;
        font-weight: 600;
        color: #F3E5AB;
      }

      .growxl-botanical-monograph-block__title {
        font-family: var(--font-display);
        font-size: clamp(1.65rem, 2.4vw, 2.25rem);
        font-weight: 500;
        color: #EAE6DF;
        line-height: 1.12;
      }

      .growxl-botanical-monograph-block__latin {
        font-family: var(--font-display);
        font-style: italic;
        font-size: 1.15rem;
        color: #D4AF37;
      }

      .growxl-botanical-monograph-block__standard {
        font-family: var(--font-technical);
        font-size: 0.78rem;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: #F3E5AB;
        padding: 0.35rem 0;
        border-top: 1px solid rgba(212, 175, 55, 0.28);
        border-bottom: 1px solid rgba(212, 175, 55, 0.28);
      }

      .growxl-botanical-monograph-block__body {
        font-family: var(--font-technical);
        font-size: 0.96rem;
        line-height: 1.72;
        color: #B8B3A8;
      }

      .growxl-botanical-monograph-block__synergy {
        font-family: var(--font-technical);
        font-size: 0.85rem;
        color: #EAE6DF;
        padding-left: 1rem;
        border-left: 2px solid #D4AF37;
      }

      /* Semantic Comparison Matrix Table */
      .growxl-comparison-table-wrap {
        width: 100%;
        overflow-x: auto;
        border-top: 1px solid rgba(212, 175, 55, 0.32);
        border-bottom: 1px solid rgba(212, 175, 55, 0.32);
        margin: 2rem 0;
      }

      .growxl-comparison-table {
        width: 100%;
        min-width: 860px;
        border-collapse: collapse;
        text-align: left;
      }

      .growxl-comparison-table th,
      .growxl-comparison-table td {
        padding: 1.25rem 1.15rem;
        border-bottom: 1px solid rgba(234, 230, 223, 0.09);
        vertical-align: top;
      }

      .growxl-comparison-table thead th {
        font-family: var(--font-technical);
        font-size: 0.75rem;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: #D4AF37;
        background-color: rgba(18, 20, 28, 0.9);
        border-bottom: 1px solid rgba(212, 175, 55, 0.28);
      }

      .growxl-comparison-table tbody th {
        font-family: var(--font-architectural);
        font-size: 0.88rem;
        font-weight: 600;
        color: #EAE6DF;
        width: 20%;
        background-color: rgba(11, 12, 16, 0.6);
      }

      .growxl-comparison-table td {
        font-family: var(--font-technical);
        font-size: 0.9rem;
        color: #B8B3A8;
      }

      .growxl-comparison-table__highlight-col {
        background-color: rgba(212, 175, 55, 0.06);
        color: #EAE6DF !important;
        border-left: 1px solid rgba(212, 175, 55, 0.24);
        border-right: 1px solid rgba(212, 175, 55, 0.24);
      }

      /* FAQ Accordion Ledger */
      .growxl-faq-ledger {
        width: 100%;
        border-top: 1px solid rgba(212, 175, 55, 0.28);
      }

      .faq-ledger-item {
        border-bottom: 1px solid rgba(234, 230, 223, 0.12);
        transition: background-color 220ms ease;
      }

      .faq-ledger-item[open] {
        background-color: rgba(212, 175, 55, 0.04);
        border-bottom-color: rgba(212, 175, 55, 0.35);
      }

      .faq-ledger-item__summary {
        list-style: none;
        cursor: pointer;
        padding: 1.6rem 0.5rem;
        display: flex;
        align-items: baseline;
        justify-content: space-between;
        gap: 1.5rem;
      }

      .faq-ledger-item__summary::-webkit-details-marker {
        display: none;
      }

      .faq-ledger-item__index {
        font-family: var(--font-technical);
        font-size: 0.74rem;
        letter-spacing: 0.22em;
        color: #D4AF37;
        min-width: 3.5rem;
      }

      .faq-ledger-item__question {
        font-family: var(--font-display);
        font-size: clamp(1.35rem, 2vw, 1.75rem);
        font-weight: 500;
        color: #EAE6DF;
        flex: 1;
        line-height: 1.25;
      }

      .faq-ledger-item__icon {
        font-family: var(--font-technical);
        font-size: 1.1rem;
        color: #D4AF37;
        transition: transform 220ms ease;
      }

      .faq-ledger-item[open] .faq-ledger-item__icon {
        transform: rotate(45deg);
      }

      .faq-ledger-item__answer {
        padding: 0 0.5rem 1.85rem 4rem;
        font-family: var(--font-technical);
        font-size: 0.96rem;
        line-height: 1.75;
        color: #B8B3A8;
        max-width: 92ch;
      }

      @media (max-width: 1024px) {
        .growxl-hero-stage__core {
          flex-direction: column;
        }
        .growxl-hero-stage__editorial-col,
        .growxl-hero-stage__visual-col {
          max-width: 100%;
          width: 100%;
        }
        .faq-ledger-item__answer {
          padding-left: 0.5rem;
        }
      }
    </style>
`;

/**
 * Generates the complete Bahasa Malaysia body HTML (MS-112 to MS-113) for Grow XL Malaysia.
 */
function buildGrowXlMsBodyHtml() {
  return `
      <!-- =====================================================================
           CHAPTER I (MS-112): 100vw x 100vh PENTAS SINEMATIK OBSIDIAN
           GROW XL MALAYSIA (30 KAPSUL — KEKUATAN EKSTRA)
           ===================================================================== -->
      <section
        id="pentas-utama-grow-xl"
        class="growxl-hero-stage cinema-stage-100vh"
        aria-labelledby="growxl-ms-hero-title"
      >
        <div class="growxl-hero-stage__ambient-watermark" aria-hidden="true">GROW · XL</div>

        <!-- Top Breadcrumb & Gold Seal Verification Bar -->
        <div class="growxl-hero-stage__breadcrumb-bar">
          <nav aria-label="Laluan Navigasi Breadcrumb">
            <ol class="growxl-breadcrumb-list">
              <li><a href="/ms/">Utama Onyxman</a></li>
              <li class="growxl-breadcrumb-sep" aria-hidden="true">/</li>
              <li><a href="/ms/produk/">4 Formulasi Apotekari</a></li>
              <li class="growxl-breadcrumb-sep" aria-hidden="true">/</li>
              <li aria-current="page">Grow XL Malaysia (30 Kapsul — Kekuatan Ekstra)</li>
            </ol>
          </nav>

          <div class="growxl-gold-crest-inline">
            <span class="growxl-gold-crest-inline__dot" aria-hidden="true"></span>
            <span>LENCANA EMAS #1 TERLARIS · KITARAN PENUH 30 KAPSUL · SKU: ONYX-GX-30</span>
          </div>
        </div>

        <!-- Main Hero Architectural Split Stage -->
        <div class="growxl-hero-stage__core">
          <!-- Left Editorial & Acquisition Column -->
          <div class="growxl-hero-stage__editorial-col">
            <p class="editorial-kicker">
              FORMULASI III · 30 KAPSUL × 550MG (16,500MG) · PROTOKOL BOTANI KEKUATAN EKSTRA 30 HARI
            </p>

            <h1 id="growxl-ms-hero-title" class="editorial-headline-xl">
              Grow XL Malaysia —
              <span class="foil-champagne-text">Campuran Peningkatan Prestasi Lelaki Kekuatan Ekstra</span>
              (30 Kapsul)
            </h1>

            <p class="editorial-lead-paragraph hero-subtitle">
              Diiktiraf dengan lencana emas
              <strong>“Produk #1 Terlaris — Diperbuat Daripada Ramuan Semula Jadi — Campuran Peningkatan Prestasi Lelaki Kekuatan Ekstra — 30 Kapsul”</strong>.
              Grow XL membekalkan protokol nutrisi harian 30 hari penuh (1 kapsul 550mg sehari) yang menggabungkan
              <strong>Tongkat Ali Malaysia Kekuatan Ekstra (140mg)</strong>, <strong>Akar Maca Peru (110mg)</strong>,
              <strong>Matriks Dwi-Asid Amino L-Arginine &amp; L-Citrulline (100mg)</strong>,
              <strong>Muira Puama Brazil (80mg)</strong>, <strong>Beri Saw Palmetto (70mg)</strong>, serta
              <strong>Panax Ginseng &amp; Ginkgo Biloba (50mg)</strong> untuk menyokong stamina berterusan,
              kelancaran peredaran darah mikro, dan kecergasan lelaki dewasa sepanjang bulan.
            </p>

            <!-- Exact Physical Bottle Label Transcription Ledger -->
            <div class="growxl-label-transcription-strip" role="region" aria-label="Transkripsi Rasmi Label Botol Grow XL Malaysia">
              <span class="growxl-label-transcription-strip__eyebrow">
                TRANSKRIPSI TEPAT LABEL BOTOL RASMI ONYXMAN MALAYSIA
              </span>
              <p class="growxl-label-transcription-strip__exact">
                “GROW XL · #1 Selling Product — Made With Natural Ingredient — Extra-Strength Enhancement Male Performance Blend — 30 Capsules”
              </p>
              <p class="growxl-label-transcription-strip__meta">
                Terjemahan Rasmi: <strong>Produk #1 Terlaris — Diperbuat Daripada Ramuan Semula Jadi — Campuran Peningkatan Prestasi Lelaki Kekuatan Ekstra — 30 Kapsul</strong> ·
                Botol Hitam Obsidian Berkilat dengan Lencana Emas #1, Lambang 'XL' Biru-Perak Metalik &amp; Jalur Prestasi Merah ·
                SKU: <code>ONYX-GX-30</code> · MPN: <code>GXL-30CAP-MY</code> · GTIN-13: <code>9550000102035</code>
              </p>
            </div>

            <!-- 30-Capsule Extra-Strength Telemetry Ribbon -->
            <div class="growxl-telemetry-bar" aria-label="Spesifikasi Teknikal Kapsul Grow XL Malaysia">
              <div class="growxl-telemetry-bar__item">
                <span class="growxl-telemetry-bar__label">BEKALAN SEBOTOL</span>
                <span class="growxl-telemetry-bar__val">30 Kapsul</span>
                <span class="growxl-telemetry-bar__sub">Kitaran bulanan penuh 30 hari (1 kapsul/hari)</span>
              </div>
              <div class="growxl-telemetry-bar__item">
                <span class="growxl-telemetry-bar__label">KEPEKATAN KAPSUL</span>
                <span class="growxl-telemetry-bar__val">550 mg</span>
                <span class="growxl-telemetry-bar__sub">16,500mg (16.5g) ekstrak botani sebotol</span>
              </div>
              <div class="growxl-telemetry-bar__item">
                <span class="growxl-telemetry-bar__label">PROTOKOL REFILL</span>
                <span class="growxl-telemetry-bar__val">Hari Ke-25</span>
                <span class="growxl-telemetry-bar__sub">Peringatan ketika berbaki 5 kapsul</span>
              </div>
              <div class="growxl-telemetry-bar__item">
                <span class="growxl-telemetry-bar__label">HARGA RASMI</span>
                <span class="growxl-telemetry-bar__val">RM 159</span>
                <span class="growxl-telemetry-bar__sub">Hanya RM 5.30 sehari · 2B RM 318 · 3B RM 477</span>
              </div>
            </div>

            <!-- Interactive 1 / 2 / 3 Bottle Tier Selector Strip (MS-112) -->
            <div
              class="tier-strip-group"
              role="radiogroup"
              aria-label="Pilih Pakej Botol Grow XL Malaysia"
              data-hero-tier-selector="grow-xl"
            >
              <!-- Tier 1: 1 Bottle = RM 159 -->
              <button
                type="button"
                class="tier-strip-option"
                data-open-order-drawer
                data-order-product="grow-xl"
                data-order-qty="1"
                aria-label="Pilih 1 Botol Grow XL (30 Kapsul) pada harga RM 159"
              >
                <div class="tier-strip-option__left">
                  <span class="tier-strip-option__eyebrow">
                    PROTOKOL HARIAN 30 HARI · KITARAN 1 BULAN PENUH · PERINGATAN HARI KE-25
                  </span>
                  <span class="tier-strip-option__title">
                    1 Botol — Kitaran Penuh Harian 30 Hari (30 Kapsul Kekuatan Ekstra)
                  </span>
                  <span class="tier-strip-option__subtitle">
                    30 Kapsul × 550mg (16,500mg) · Penghantaran Ekspres Rahsia Percuma Semenanjung Malaysia (RM 12 Sabah/Sarawak)
                  </span>
                </div>
                <div class="tier-strip-option__price">RM 159</div>
              </button>

              <!-- Tier 2: 2 Bottles = RM 318 (Highlighted Selection) -->
              <button
                type="button"
                class="tier-strip-option tier-strip-option--selected"
                data-open-order-drawer
                data-order-product="grow-xl"
                data-order-qty="2"
                aria-label="Pilih 2 Botol Grow XL (60 Kapsul) pada harga RM 318"
              >
                <div class="tier-strip-option__left">
                  <span class="tier-strip-option__eyebrow">
                    PAKEJ 60 HARI PALING LARIS DI MALAYSIA · KITARAN 2 BULAN · PERINGATAN HARI KE-50
                  </span>
                  <span class="tier-strip-option__title">
                    2 Botol — Bekalan Penjagaan Berperingkat 60 Hari (60 Kapsul Kekuatan Ekstra)
                  </span>
                  <span class="tier-strip-option__subtitle">
                    60 Kapsul × 550mg (33,000mg) · Penghantaran Ekspres Rahsia Percuma Seluruh Malaysia (Termasuk Sabah, Sarawak &amp; Labuan)
                  </span>
                </div>
                <div class="tier-strip-option__price">RM 318</div>
              </button>

              <!-- Tier 3: 3 Bottles = RM 477 -->
              <button
                type="button"
                class="tier-strip-option"
                data-open-order-drawer
                data-order-product="grow-xl"
                data-order-qty="3"
                aria-label="Pilih 3 Botol Grow XL (90 Kapsul) pada harga RM 477"
              >
                <div class="tier-strip-option__left">
                  <span class="tier-strip-option__eyebrow">
                    PAKEJ OPTIMUM 90 HARI · KITARAN LENGKAP 3 BULAN · PERINGATAN HARI KE-75
                  </span>
                  <span class="tier-strip-option__title">
                    3 Botol — Pakej Lengkap Kekuatan Ekstra 90 Hari (90 Kapsul)
                  </span>
                  <span class="tier-strip-option__subtitle">
                    90 Kapsul × 550mg (49,500mg) · Penghantaran Rahsia Keutamaan VIP + Percuma Seluruh Negara + Khidmat Peringatan VIP
                  </span>
                </div>
                <div class="tier-strip-option__price">RM 477</div>
              </button>
            </div>

            <!-- Jaminan Penghantaran Rahsia Kotak Kosong Strip -->
            <div class="growxl-label-transcription-strip" role="note" aria-label="Jaminan Penghantaran Rahsia Kotak Kosong">
              <span class="growxl-label-transcription-strip__eyebrow">
                JAMINAN PENGHANTARAN RAHSIA KOTAK KOSONG 100% (ZERO PRODUCT NAME ON WAYBILL)
              </span>
              <p class="growxl-label-transcription-strip__meta">
                Setiap pesanan Grow XL dibungkus di dalam kotak keselamatan legap tanpa sebarang cetakan nama produk.
                Slip kurier hanya memaparkan <strong>“OM Fulfilment Logistics”</strong>. Menyokong pembayaran
                <strong>FPX Online Banking, DuitNow QR Segera &amp; Bayar Waktu Terima (COD Malaysia)</strong>.
              </p>
            </div>

            <!-- 1-Click Express Order Drawer Triggers -->
            <div class="growxl-cta-cluster">
              <button
                type="button"
                class="cta-foil-primary"
                data-open-order-drawer
                data-order-product="grow-xl"
                data-order-qty="2"
              >
                <span>TEMPAH GROW XL SEKARANG · RM 159 / BOTOL</span>
                <span aria-hidden="true">→</span>
              </button>

              <button
                type="button"
                class="cta-hairline-secondary"
                data-open-order-drawer
                data-order-product="grow-xl"
                data-order-qty="1"
              >
                <span>PILIH 1 BOTOL (30 KAPSUL · RM 159)</span>
              </button>

              <a href="#analisis-6-ekstrak-botani-grow-xl" class="cta-hairline-secondary">
                <span>SEMAK 6 EKSTRAK BOTANI (550MG)</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <!-- Right Studio Bottle Pedestal Column -->
          <div class="growxl-hero-stage__visual-col">
            <figure class="growxl-hero-stage__pedestal">
              <picture>
                <source srcset="/assets/products/grow-xl-stage.webp" type="image/webp" />
                <img
                  src="/assets/products/grow-xl-stage.png"
                  alt="Grow XL Produk #1 Terlaris Campuran Peningkatan Prestasi Lelaki Kekuatan Ekstra — 30 Kapsul Botol Rasmi Onyxman Malaysia (RM 159)"
                  width="640"
                  height="820"
                  fetchpriority="high"
                  decoding="async"
                  class="growxl-hero-stage__bottle-img cinema-stage-100vh__bottle-render"
                  data-parallax-bottle
                />
              </picture>
              <figcaption class="growxl-hero-stage__bottle-caption">
                <span>LENCANA EMAS #1 SELLING PRODUCT</span>
                <span>30 CAPSULES · EXTRA-STRENGTH BLEND</span>
                <span>GTIN-13: 9550000102035</span>
              </figcaption>
            </figure>
          </div>
        </div>

        <!-- Bottom Horizon Price & Privacy Telemetry Row -->
        <div class="cinema-stage-100vh__overlay">
          <div class="cinema-stage-100vh__horizon-row">
            <div class="cinema-stage-100vh__price-ledger">
              <span class="cinema-stage-100vh__price-value">RM 159.00</span>
              <span class="cinema-stage-100vh__price-meta">
                SEBOTOL (30 KAPSUL × 550MG = 16,500MG) · KOTAK KOSONG TANPA NAMA PRODUK · FPX / DUITNOW QR / COD MALAYSIA
              </span>
            </div>
            <div class="cinema-stage-100vh__price-meta">
              MEJA KHIDMAT PELANGGAN: <a href="mailto:sales@onyxman.my">sales@onyxman.my</a> ·
              <a href="mailto:info@onyxman.my">info@onyxman.my</a> ·
              <a href="/grow-xl-malaysia/" hreflang="en-MY">VIEW IN ENGLISH (EN-MY) →</a>
            </div>
          </div>
        </div>
      </section>

      <!-- =====================================================================
           CHAPTER II (MS-113A): PARADIGM D PINNED 50vw / 50vw STAGE
           ANALISIS 6 EKSTRAK BOTANI KEKUATAN EKSTRA (550MG SETIAP KAPSUL = 16,500MG SEBOTOL)
           ===================================================================== -->
      <section
        id="analisis-6-ekstrak-botani-grow-xl"
        class="split-stage-5050"
        data-split-stage
        aria-labelledby="growxl-ms-botanicals-heading"
      >
        <!-- Left 50vw Pinned Visual Stage -->
        <div class="split-stage-5050__visual-pane">
          <div class="split-stage-5050__index-watermark" data-split-watermark aria-hidden="true">01</div>

          <figure class="split-stage-5050__visual-figure">
            <picture>
              <source srcset="/assets/products/grow-xl-portrait.webp" type="image/webp" />
              <img
                src="/assets/products/grow-xl-portrait.png"
                alt="Potret Studio Botol Grow XL Malaysia — 30 Kapsul Campuran Peningkatan Prestasi Lelaki Kekuatan Ekstra 550mg"
                width="540"
                height="720"
                loading="lazy"
                decoding="async"
                class="split-stage-5050__visual-img"
                data-split-visual-img
              />
            </picture>
          </figure>

          <div class="growxl-label-transcription-strip" style="margin-top: 1.5rem; width: 100%; max-width: 520px;">
            <span class="growxl-label-transcription-strip__eyebrow">
              KOMPOSISI TEPAT SETIAP 1 KAPSUL KEKUATAN EKSTRA (550MG)
            </span>
            <p class="growxl-label-transcription-strip__exact">
              140mg Tongkat Ali + 110mg Maca + 100mg L-Arginine/L-Citrulline + 80mg Muira Puama + 70mg Saw Palmetto + 50mg Ginseng/Ginkgo = 550mg
            </p>
            <p class="growxl-label-transcription-strip__meta">
              Jumlah Kepekatan Sebotol (30 Kapsul): <strong>16,500mg (16.5g) Ekstrak Botani &amp; Asid Amino Tulen</strong> ·
              100% Bebas Bahan Kimia Sintetik PDE5 &amp; Bebas Perangsang Tiruan.
            </p>
          </div>
        </div>

        <!-- Right 50vw Scrolling Botanical Monograph Narrative Pane -->
        <div class="split-stage-5050__narrative-pane">
          <p class="editorial-kicker">
            BAB II · MONOGRAF FARMAKOGNOSI &amp; FITOKIMIA (550MG / KAPSUL · 16,500MG / BOTOL)
          </p>

          <h2 id="growxl-ms-botanicals-heading" class="editorial-headline-lg" style="margin: 0.85rem 0 1.25rem;">
            Analisis 6 Ekstrak Botani Kekuatan Ekstra di dalam
            <span class="foil-champagne-text">Grow XL Malaysia (30 Kapsul)</span>
          </h2>

          <p class="editorial-lead-paragraph" style="margin-bottom: 2.25rem;">
            Setiap kapsul 550mg Grow XL (<code>ONYX-GX-30</code>) menggabungkan enam ekstrak botani piawai dan
            matriks dwi-asid amino yang dirumus khas untuk <strong>kitaran penjagaan bulanan 30 hari penuh</strong>.
            Dengan jumlah keseluruhan <strong>16,500mg (16.5 gram) bahan aktif setiap botol</strong>, Grow XL
            menyokong kecergasan asas lelaki dewasa, kelancaran aliran darah mikro periferi, keseimbangan fisiologi
            prostat/urinari, serta daya tahan fizikal sepanjang hari.
          </p>

          <!-- Botanical Active 01: Extra-Strength Malaysian Tongkat Ali 140mg -->
          <article
            class="growxl-botanical-monograph-block architectural-ledger__row"
            data-botanical-step
            data-step-index="01"
            data-step-image="/assets/products/grow-xl-portrait.webp"
          >
            <div class="growxl-botanical-monograph-block__top">
              <span class="growxl-botanical-monograph-block__code">
                GX-ACT-01 · TERAS ADAPTOGENIK UTAMA (4,200MG SEBOTOL)
              </span>
              <span class="growxl-botanical-monograph-block__dosage">140 mg</span>
            </div>
            <h3 class="growxl-botanical-monograph-block__title">
              Ekstrak Akar Tongkat Ali Malaysia Kekuatan Ekstra
            </h3>
            <p class="growxl-botanical-monograph-block__latin">
              Eurycoma longifolia Jack — Ekstrak Akar Piawai Nisbah 100:1 (2.0% Eurycomanone &amp; Quassinoid Aktif)
            </p>
            <p class="growxl-botanical-monograph-block__standard">
              PIAWAIN FITOKIMIA: 140MG SETIAP KAPSUL · 4,200MG SEPANJANG KITARAN 30 HARI
            </p>
            <p class="growxl-botanical-monograph-block__body">
              Sebagai tunggak utama di dalam formulasi kekuatan ekstra Grow XL, ekstrak akar matang
              <em>Eurycoma longifolia</em> 140mg ini dipiawaikan kepada 2.0% eurycomanone larut air. Diambil secara
              konsisten 1 kapsul setiap pagi selama 30 hari, ia memberikan sokongan adaptogenik harian untuk
              kecergasan lelaki dewasa, mengimbangi tindak balas kortisol akibat tekanan kerja, serta memelihara
              daya tahan fizikal dan tenaga dalaman tanpa turun naik yang mendadak.
            </p>
            <p class="growxl-botanical-monograph-block__synergy">
              <strong>Sinergi Formulasi:</strong> Bekerjasama secara langsung dengan Akar Maca Peru (110mg) dan
              Muira Puama Brazil (80mg) untuk membina asas stamina bulanan yang kukuh.
            </p>
          </article>

          <!-- Botanical Active 02: Peruvian Maca Root 110mg -->
          <article
            class="growxl-botanical-monograph-block architectural-ledger__row"
            data-botanical-step
            data-step-index="02"
            data-step-image="/assets/products/grow-xl-stage.webp"
          >
            <div class="growxl-botanical-monograph-block__top">
              <span class="growxl-botanical-monograph-block__code">
                GX-ACT-02 · TENAGA SELULAR HARIAN &amp; DAYA TAHAN KERJA (3,300MG SEBOTOL)
              </span>
              <span class="growxl-botanical-monograph-block__dosage">110 mg</span>
            </div>
            <h3 class="growxl-botanical-monograph-block__title">
              Ekstrak Ubi Akar Maca Peru Berkepekatan Tinggi
            </h3>
            <p class="growxl-botanical-monograph-block__latin">
              Lepidium meyenii Walp. — Ekstrak Akar Bergelatin Nisbah 10:1 (Macamides &amp; Macaenes)
            </p>
            <p class="growxl-botanical-monograph-block__standard">
              PIAWAIN FITOKIMIA: 110MG SETIAP KAPSUL (BERSAMAAN 1,100MG AKAR MACA ASLI) · BEBAS KAFEIN
            </p>
            <p class="growxl-botanical-monograph-block__body">
              Proses penggelatinan (gelatinized extraction) memecahkan rantaian kanji kasar di dalam ubi Maca Andes
              supaya alkamid bioaktif (macamides dan macaenes) dapat diserap dengan cepat oleh sistem penghadaman.
              Pada sukatan 110mg setiap kapsul (3,300mg sebotol), Akar Maca Peru menyokong stamina harian yang
              berterusan, kecergasan fizikal, dan ketahanan terhadap keletihan jadual kerja moden tanpa menyebabkan
              debaran jantung atau gangguan tidur.
            </p>
            <p class="growxl-botanical-monograph-block__synergy">
              <strong>Sinergi Formulasi:</strong> Mengukuhkan kesan adaptogenik Tongkat Ali dengan membekalkan
              tenaga fizikal yang stabil dari waktu pagi hingga ke lewat malam.
            </p>
          </article>

          <!-- Botanical Active 03: Dual Amino-Acid L-Arginine & L-Citrulline Matrix 100mg -->
          <article
            class="growxl-botanical-monograph-block architectural-ledger__row"
            data-botanical-step
            data-step-index="03"
            data-step-image="/assets/products/grow-xl-cutout.webp"
          >
            <div class="growxl-botanical-monograph-block__top">
              <span class="growxl-botanical-monograph-block__code">
                GX-ACT-03 · MATRIKS PEREDARAN MIKRO &amp; NITRIK OKSIDA (3,000MG SEBOTOL)
              </span>
              <span class="growxl-botanical-monograph-block__dosage">100 mg</span>
            </div>
            <h3 class="growxl-botanical-monograph-block__title">
              Matriks Dwi-Asid Amino L-Arginine HCl &amp; L-Citrulline Malate
            </h3>
            <p class="growxl-botanical-monograph-block__latin">
              L-Arginine Hydrochloride &amp; L-Citrulline Malate — Nisbah Sinergi 2:1 untuk Ketersediaan Nitrik Oksida 24 Jam
            </p>
            <p class="growxl-botanical-monograph-block__standard">
              PIAWAIN FITOKIMIA: 100MG SETIAP KAPSUL · SOKONGAN ENDOTELIAL &amp; PENGANGKUTAN NUTRIEN VASKULAR
            </p>
            <p class="growxl-botanical-monograph-block__body">
              Menggabungkan L-Arginine HCl (prekursor nitrik oksida segera) bersama L-Citrulline Malate (prekursor
              nitrik oksida pelepasan berperingkat melalui laluan buah pinggang) dalam nisbah 2:1. Gabungan 100mg
              setiap hari ini menggalakkan ketersediaan nitrik oksida harian secara berterusan serta memastikan
              kelancaran penghantaran oksigen dan fitonutrien botani ke seluruh tisu badan yang aktif.
            </p>
            <p class="growxl-botanical-monograph-block__synergy">
              <strong>Sinergi Formulasi:</strong> Diperkuat oleh Ginkgo Biloba (flavon glikosida) untuk memastikan
              keenam-enam ekstrak botani sampai ke kapilari periferi dengan cekap.
            </p>
          </article>

          <!-- Botanical Active 04: Brazilian Muira Puama 80mg -->
          <article
            class="growxl-botanical-monograph-block architectural-ledger__row"
            data-botanical-step
            data-step-index="04"
            data-step-image="/assets/products/grow-xl-portrait.webp"
          >
            <div class="growxl-botanical-monograph-block__top">
              <span class="growxl-botanical-monograph-block__code">
                GX-ACT-04 · FITOSTEROL NEUROMUSKULAR AMAZON (2,400MG SEBOTOL)
              </span>
              <span class="growxl-botanical-monograph-block__dosage">80 mg</span>
            </div>
            <h3 class="growxl-botanical-monograph-block__title">
              Ekstrak Kulit &amp; Akar Muira Puama Brazil (“Potency Wood”)
            </h3>
            <p class="growxl-botanical-monograph-block__latin">
              Ptychopetalum olacoides Benth. — Ekstrak Pekat Nisbah 12:1 (Fitosterol, Lupeol &amp; Asid Behenik)
            </p>
            <p class="growxl-botanical-monograph-block__standard">
              PIAWAIN FITOKIMIA: 80MG SETIAP KAPSUL · EKSKLUSIF DI DALAM FORMULASI GROW XL
            </p>
            <p class="growxl-botanical-monograph-block__body">
              Muira Puama (<em>Ptychopetalum olacoides</em>) ialah herba tradisional lembangan Amazon Brazil yang
              membezakan Grow XL daripada Horsemen dan Hammer of Thor. Kaya dengan fitosterol semula jadi, ester
              asid lemak rantaian panjang, dan alkaloid muirapuamine, ekstrak 12:1 sebanyak 80mg ini terkenal untuk
              menyokong kecergasan neuromuskular, kesediaan fizikal, ketajaman deria, dan keyakinan lelaki dewasa
              apabila diamalkan sepanjang kitaran 30 hingga 90 hari.
            </p>
            <p class="growxl-botanical-monograph-block__synergy">
              <strong>Sinergi Formulasi:</strong> Bergandingan rapat dengan Tongkat Ali dan Saw Palmetto untuk
              menyokong tindak balas saraf-otot serta vitaliti lelaki secara menyeluruh.
            </p>
          </article>

          <!-- Botanical Active 05: Saw Palmetto Berry Extract 70mg -->
          <article
            class="growxl-botanical-monograph-block architectural-ledger__row"
            data-botanical-step
            data-step-index="05"
            data-step-image="/assets/products/grow-xl-stage.webp"
          >
            <div class="growxl-botanical-monograph-block__top">
              <span class="growxl-botanical-monograph-block__code">
                GX-ACT-05 · KESEIMBANGAN FISIOLOGI LELAKI DEWASA (2,100MG SEBOTOL)
              </span>
              <span class="growxl-botanical-monograph-block__dosage">70 mg</span>
            </div>
            <h3 class="growxl-botanical-monograph-block__title">
              Ekstrak Beri Saw Palmetto Lipidosterolik Piawai
            </h3>
            <p class="growxl-botanical-monograph-block__latin">
              Serenoa repens (W.Bartram) Small — Dipiawaikan kepada 45% Asid Lemak Bebas &amp; Beta-Sitosterol
            </p>
            <p class="growxl-botanical-monograph-block__standard">
              PIAWAIN FITOKIMIA: 70MG SETIAP KAPSUL · PENJAGAAN KESEJAHTERAAN LELAKI 30 TAHUN KE ATAS
            </p>
            <p class="growxl-botanical-monograph-block__body">
              Direka khusus untuk lelaki dewasa yang mengutamakan penjagaan kesihatan dalaman jangka panjang.
              Ekstrak buah beri <em>Serenoa repens</em> 70mg (dipiawaikan kepada 45% asid lemak bebas dan
              fitosterol) menyokong kesejahteraan jangka panjang lelaki dewasa, keselesaan fungsi urinari, serta
              keseimbangan fisiologi harian khususnya bagi lelaki berusia 30, 40, dan 50 tahun ke atas.
            </p>
            <p class="growxl-botanical-monograph-block__synergy">
              <strong>Sinergi Formulasi:</strong> Menjadikan Grow XL satu-satunya suplemen harian 30 kapsul dalam
              rangkaian Onyxman yang menggabungkan sokongan prestasi fizikal dengan penjagaan kesejahteraan prostat/urinari.
            </p>
          </article>

          <!-- Botanical Active 06: Aged Panax Ginseng & Ginkgo Biloba 50mg -->
          <article
            class="growxl-botanical-monograph-block architectural-ledger__row"
            data-botanical-step
            data-step-index="06"
            data-step-image="/assets/products/grow-xl-cutout.webp"
          >
            <div class="growxl-botanical-monograph-block__top">
              <span class="growxl-botanical-monograph-block__code">
                GX-ACT-06 · KOFAKTOR VASKULAR PERIFERI &amp; MINDA (1,500MG SEBOTOL)
              </span>
              <span class="growxl-botanical-monograph-block__dosage">50 mg</span>
            </div>
            <h3 class="growxl-botanical-monograph-block__title">
              Kompleks Panax Ginseng Matang &amp; Ginkgo Biloba
            </h3>
            <p class="growxl-botanical-monograph-block__latin">
              Panax ginseng C.A. Mey. (8% Ginsenosida) + Ginkgo biloba L. (24% Glikosida Flavon &amp; 6% Terpena Lakton)
            </p>
            <p class="growxl-botanical-monograph-block__standard">
              PIAWAIN FITOKIMIA: 50MG SETIAP KAPSUL · PENGALIRAN MIKRO KAPILARI &amp; KECERDASAN MINDA
            </p>
            <p class="growxl-botanical-monograph-block__body">
              Melengkapkan matriks 550mg setiap kapsul ialah gabungan 50mg akar Panax Ginseng matang dan ekstrak
              daun Ginkgo Biloba piawai. Glikosida flavon Ginkgo Biloba menyokong kelenturan kapilari darah mikro
              periferi dan kecerdasan fokus mental di pejabat, manakala ginsenosida Panax Ginseng menyokong
              penghasilan tenaga selular ATP sepanjang hari tanpa rasa mengantuk pada waktu petang.
            </p>
            <p class="growxl-botanical-monograph-block__synergy">
              <strong>Sinergi Formulasi:</strong> Mengoptimumkan penyerapan dan pengedaran kelima-lima ekstrak
              botani lain ke seluruh sistem vaskular.
            </p>
          </article>

          <!-- Direct Action Trigger inside Monograph Pane -->
          <div class="growxl-cta-cluster" style="margin-top: 2.5rem;">
            <button
              type="button"
              class="cta-foil-primary"
              data-open-order-drawer
              data-order-product="grow-xl"
              data-order-qty="2"
            >
              <span>MULAKAN PROTOKOL 30 HARI GROW XL · RM 159 / BOTOL</span>
              <span aria-hidden="true">→</span>
            </button>
            <a href="/ms/ramuan-botani/" class="cta-hairline-secondary">
              <span>LIHAT ENSIKLOPEDIA RAMUAN BOTANI ONYXMAN</span>
            </a>
          </div>
        </div>
      </section>

      <!-- =====================================================================
           CHAPTER III (MS-113B): KEJURUTERAAN FORMULASI KEKUATAN EKSTRA 30 KAPSUL
           KENAPA KITARAN BULANAN 16,500MG ADALAH PILIHAN #1 TERLARIS DI MALAYSIA
           ===================================================================== -->
      <section
        id="kelebihan-kitaran-bulanan-30-kapsul-grow-xl"
        class="growxl-section-stage growxl-section-stage--onyx"
        aria-labelledby="growxl-ms-pillars-heading"
      >
        <div class="growxl-section-inner">
          <header class="growxl-chapter-header">
            <div class="growxl-chapter-header__meta-row">
              <span class="growxl-chapter-number">
                BAB III · SPESIFIKASI KITARAN PENUH 30 KAPSUL × 550MG (16,500MG SEBOTOL)
              </span>
              <span class="growxl-gold-crest-inline">
                <span class="growxl-gold-crest-inline__dot" aria-hidden="true"></span>
                <span>PRODUK #1 TERLARIS · HANYA RM 5.30 SEHARI</span>
              </span>
            </div>
            <h2 id="growxl-ms-pillars-heading" class="editorial-headline-lg">
              Mengapakah <span class="foil-champagne-text">Grow XL (30 Kapsul)</span> Menjadi
              Pilihan #1 Terlaris untuk Rutin Harian Lelaki Malaysia?
            </h2>
            <p class="editorial-lead-paragraph">
              Ramai lelaki profesional di Kuala Lumpur, Selangor, Pulau Pinang, dan Johor Bahru tidak menggemari
              kapsul berkepekatan mendadak yang hanya diambil sekali-sekala. Sebaliknya, mereka memilih
              <strong>Grow XL (SKU: ONYX-GX-30)</strong> kerana ia menawarkan rutin 1 kapsul sehari selama
              <strong>30 hari penuh (1 bulan)</strong> yang membina kecergasan asas secara semula jadi dan berterusan.
            </p>
          </header>

          <!-- Architectural Hairline Ledger: 5 Technical Advantages of Grow XL -->
          <div class="architectural-ledger" role="list" aria-label="5 Kelebihan Utama Formulasi 30 Kapsul Grow XL">
            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">GXL-01</span>
              <h3 class="architectural-ledger__title">
                Bekalan Penuh 30 Kapsul Sebotol — Tepat untuk Kitaran 1 Bulan Tanpa Jurang
              </h3>
              <p class="architectural-ledger__detail">
                Berbeza dengan botol 10 atau 20 kapsul yang habis sebelum hujung bulan, setiap botol Grow XL
                mengandungi <strong>30 kapsul penuh</strong>. Dengan pengambilan 1 kapsul setiap pagi selepas
                sarapan, 1 botol mencukupi tepat untuk 30 hari—memudahkan anda menyelaraskan jadual suplemen
                mengikut bulan kalendar.
              </p>
              <span class="architectural-ledger__metric">30 KAPSUL / 30 HARI</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">GXL-02</span>
              <h3 class="architectural-ledger__title">
                Kepekatan 550mg Setiap Kapsul (16,500mg Bahan Aktif Sebotol)
              </h3>
              <p class="architectural-ledger__detail">
                Setiap kapsul Grow XL memuatkan <strong>550mg ekstrak botani dan asid amino tulen</strong>—memberikan
                10% lebih jisim bahan aktif setiap kapsul berbanding kapsul standard 500mg, dan jumlah keseluruhan
                <strong>16,500mg (16.5 gram)</strong> fitonutrien dalam setiap botol.
              </p>
              <span class="architectural-ledger__metric">550MG × 30 = 16,500MG</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">GXL-03</span>
              <h3 class="architectural-ledger__title">
                Gabungan Eksklusif Muira Puama Brazil (80mg) &amp; Saw Palmetto (70mg)
              </h3>
              <p class="architectural-ledger__detail">
                Grow XL ialah satu-satunya formulasi di dalam koleksi Onyxman Malaysia yang menggabungkan
                <strong>Muira Puama Brazil (12:1 fitosterol)</strong> dan <strong>Beri Saw Palmetto (45% asid lemak bebas)</strong>
                bersama Tongkat Ali Malaysia 140mg dan Maca Peru 110mg—memberikan penjagaan menyeluruh untuk
                kecergasan neuromuskular serta kesejahteraan lelaki dewasa berusia 30 tahun ke atas.
              </p>
              <span class="architectural-ledger__metric">6 EKSTRAK SINERGI</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">GXL-04</span>
              <h3 class="architectural-ledger__title">
                Sokongan Peredaran Darah Mikro 24 Jam tanpa Debaran Jantung atau Sakit Kepala
              </h3>
              <p class="architectural-ledger__detail">
                Gabungan 100mg L-Arginine HCl + L-Citrulline Malate bersama 50mg Panax Ginseng + Ginkgo Biloba
                menyokong kelancaran aliran darah mikro secara semula jadi dan berperingkat. Ia bebas sepenuhnya
                daripada bahan kimia sintetik PDE5 atau perangsang saraf berlebihan, memastikan tiada kesan sampingan
                seperti muka merah menyala, pening kepala, atau debaran jantung.
              </p>
              <span class="architectural-ledger__metric">100% RAMUAN SEMULA JADI</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">GXL-05</span>
              <h3 class="architectural-ledger__title">
                Nilai Ekonomi Terbaik — Hanya RM 5.30 Sehari pada Harga Rasmi RM 159 Sebotol
              </h3>
              <p class="architectural-ledger__detail">
                Pada harga rasmi <strong>RM 159 untuk 30 kapsul</strong>, kos pelaburan kesihatan dan stamina harian
                anda hanyalah <strong>RM 5.30 sehari</strong> (lebih rendah daripada harga secawan kopi premium di
                Kuala Lumpur) untuk menikmati 6 ekstrak botani piawai gred apotekari.
              </p>
              <span class="architectural-ledger__metric">RM 5.30 / KAPSUL HARIAN</span>
            </div>
          </div>
        </div>
      </section>

      <!-- =====================================================================
           CHAPTER IV (MS-113C): KRONOLOGI VITALITI PROGRESIF 30 HARI, DUA MOD
           PENGAMBILAN & PERINGATAN ISIAN SEMULA HARI KE-25 (DAY-25 REFILL PROTOCOL)
           ===================================================================== -->
      <section
        id="kronologi-vitaliti-progresif-30-hari-dan-peringatan-hari-25"
        class="growxl-section-stage"
        aria-labelledby="growxl-ms-cycle-heading"
      >
        <div class="growxl-section-inner">
          <header class="growxl-chapter-header">
            <div class="growxl-chapter-header__meta-row">
              <span class="growxl-chapter-number">
                BAB IV · KRONOLOGI VITALITI PROGRESIF 30 HARI &amp; PERINGATAN ISIAN SEMULA HARI KE-25
              </span>
              <span class="editorial-kicker">KITARAN BULANAN 30 HARI (1 KAPSUL 550MG SEHARI)</span>
            </div>
            <h2 id="growxl-ms-cycle-heading" class="editorial-headline-lg">
              Kronologi Vitaliti Progresif 30 Hari &amp;
              <span class="foil-champagne-text">Peringatan Isian Semula Hari Ke-25</span>
            </h2>
            <p class="editorial-lead-paragraph">
              Ramuan adaptogenik semula jadi seperti Tongkat Ali Kekuatan Ekstra, Maca Peru, Muira Puama, dan Saw
              Palmetto berfungsi melalui pengumpulan bioaktif harian di dalam tisu badan. Ikuti dua pilihan waktu
              pengambilan rasmi serta garis masa perkembangan 30 hari di bawah:
            </p>
          </header>

          <!-- 2 Official Intake Modes Ledger -->
          <div class="architectural-ledger" style="margin-bottom: 3.5rem;" aria-label="Dua Mod Pengambilan Rasmi Grow XL Malaysia">
            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">PROTOKOL A</span>
              <h3 class="architectural-ledger__title">
                Rutin Harian Pagi 30 Hari Selepas Sarapan (Disyorkan untuk Tenaga Sepanjang Hari)
              </h3>
              <p class="architectural-ledger__detail">
                Ambil <strong>1 kapsul (550mg) setiap pagi 20 hingga 30 minit selepas sarapan</strong> bersama
                segelas penuh air kosong (250ml–300ml). Pengambilan pada waktu yang konsisten setiap pagi membina
                paras plasma nutrien botani yang stabil sepanjang 24 jam—menyokong kecerdasan kerja pada waktu siang
                serta kesediaan fizikal pada waktu malam.
              </p>
              <span class="architectural-ledger__metric">1 KAPSUL SELEPAS SARAPAN</span>
            </div>

            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">PROTOKOL B</span>
              <h3 class="architectural-ledger__title">
                Rutin Penjagaan Selepas Makan Malam (Pilihan Bagi Yang Berpuasa Pagi / Intermittent Fasting)
              </h3>
              <p class="architectural-ledger__detail">
                Jika anda mengamalkan puasa berkala (intermittent fasting) pada waktu pagi atau lebih selesa
                mengambil suplemen pada waktu malam, ambil <strong>1 kapsul 30 minit selepas makan malam</strong>
                bersama 250ml air suam. Asid lemak bebas di dalam Saw Palmetto dan fitosterol Muira Puama diserap
                dengan sangat baik selepas hidangan malam.
              </p>
              <span class="architectural-ledger__metric">1 KAPSUL SELEPAS MAKAN MALAM</span>
            </div>
          </div>

          <!-- 30-Day Progressive Vitality Timeline + Day-25 Refill Trigger Ledger -->
          <h3 class="editorial-headline-lg" style="font-size: clamp(1.65rem, 2.6vw, 2.5rem); margin-bottom: 1.5rem;">
            Kronologi Vitaliti Progresif 30 Hari (Kapsul #1 hingga Kapsul #30)
          </h3>

          <div class="architectural-ledger" role="list" aria-label="Kronologi Vitaliti Progresif 30 Hari Grow XL">
            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">HARI 01–10</span>
              <h4 class="architectural-ledger__title">
                Fasa 1: Pengaktifan Aliran Mikro &amp; Kestabilan Tenaga Harian (Kapsul #1 hingga #10)
              </h4>
              <p class="architectural-ledger__detail">
                Dalam 10 hari pertama (5,500mg jumlah pengambilan terkumpul), matriks 100mg L-Arginine HCl +
                L-Citrulline Malate serta 50mg Panax Ginseng + Ginkgo Biloba mula menyokong kelancaran peredaran
                darah mikro periferi. Pengguna lazimnya menyedari tahap tenaga pagi yang lebih segar dan tiada lagi
                kelesuan melampau pada lewat petang.
              </p>
              <span class="architectural-ledger__metric">FASA 1 · ALIRAN MIKRO</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">HARI 11–20</span>
              <h4 class="architectural-ledger__title">
                Fasa 2: Pembinaan Rizab Botani Tongkat Ali, Maca &amp; Muira Puama (Kapsul #11 hingga #20)
              </h4>
              <p class="architectural-ledger__detail">
                Memasuki minggu kedua dan ketiga (11,000mg jumlah pengambilan terkumpul), gabungan 140mg Tongkat Ali
                Kekuatan Ekstra (2.0% eurycomanone), 110mg Akar Maca Peru, dan 80mg Muira Puama Brazil mula mencapai
                ketepuan tisu yang stabil—menyokong daya tahan fizikal yang lebih kukuh, pemulihan tenaga yang
                pantas, dan keyakinan kesediaan malam.
              </p>
              <span class="architectural-ledger__metric">FASA 2 · RIZAB BOTANI</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">HARI 21–24</span>
              <h4 class="architectural-ledger__title">
                Fasa 3A: Keseimbangan Penuh 6 Ekstrak &amp; Sokongan Saw Palmetto (Kapsul #21 hingga #24)
              </h4>
              <p class="architectural-ledger__detail">
                Kesemua 6 ekstrak aktif termasuk 70mg Beri Saw Palmetto berfungsi secara harmoni pada tahap
                optimum—memelihara stamina sepanjang hari, kelancaran aliran vaskular, dan kesejahteraan fisiologi
                lelaki dewasa.
              </p>
              <span class="architectural-ledger__metric">FASA 3A · KEMUNCAK BULANAN</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">HARI KE-25</span>
              <h4 class="architectural-ledger__title">
                Fasa 3B: Peringatan Isian Semula Hari Ke-25 (Ketika Berbaki 5 Kapsul Terakhir)
              </h4>
              <p class="architectural-ledger__detail">
                Pada <strong>Hari Ke-25</strong>, botol Grow XL anda masih mempunyai <strong>baki 5 kapsul</strong>
                (untuk Hari Ke-26 hingga Hari Ke-30). Sistem Onyxman menjadualkan peringatan automatik Google
                Calendar &amp; WhatsApp pada Hari Ke-25 supaya pesanan botol bulan kedua anda dapat dihantar melalui
                kurier ekspres rahsia (1–2 hari bekerja) dan tiba sebelum kapsul ke-30 anda habis.
              </p>
              <span class="architectural-ledger__metric">PERINGATAN HARI KE-25</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">HARI 26–90</span>
              <h4 class="architectural-ledger__title">
                Fasa 4: Kesinambungan Bulan Kedua (60 Hari) &amp; Bulan Ketiga (90 Hari Optimum)
              </h4>
              <p class="architectural-ledger__detail">
                Dengan menyambung terus ke Botol Kedua (Hari 31–60, peringatan pada Hari Ke-50) dan Botol Ketiga
                (Hari 61–90, peringatan pada Hari Ke-75), tubuh anda mengekalkan tahap fitosterol Muira Puama,
                Saw Palmetto, dan eurycomanone Tongkat Ali pada paras kemuncak tanpa sebarang gangguan kitaran.
              </p>
              <span class="architectural-ledger__metric">KITARAN 60 / 90 HARI</span>
            </div>
          </div>

          <!-- Day-25 Refill Continuity Callout Box -->
          <div class="growxl-label-transcription-strip" style="margin-top: 2.5rem;">
            <span class="growxl-label-transcription-strip__eyebrow">
              PROTOKOL KESINAMBUNGAN BULANAN ONYXMAN MALAYSIA (ZERO CYCLE INTERRUPTION)
            </span>
            <p class="growxl-label-transcription-strip__exact">
              Jimat Masa &amp; Nikmati Penghantaran Percuma Seluruh Malaysia dengan Pakej 2 Botol (60 Kapsul — RM 318) atau 3 Botol (90 Kapsul — RM 477)
            </p>
            <p class="growxl-label-transcription-strip__meta">
              Lebih 80% pelanggan tetap Grow XL memilih <strong>Pakej 2 Botol (60 Hari · RM 318)</strong> atau
              <strong>Pakej 3 Botol (90 Hari · RM 477)</strong> untuk memastikan bekalan bulanan tidak terputus pada
              Hari Ke-30 serta melayakkan mereka menerima Penghantaran Ekspres Rahsia Percuma ke seluruh Semenanjung,
              Sabah, Sarawak, dan Labuan.
            </p>
            <div class="growxl-cta-cluster" style="margin-top: 1rem;">
              <button
                type="button"
                class="cta-foil-primary"
                data-open-order-drawer
                data-order-product="grow-xl"
                data-order-qty="2"
              >
                <span>PILIH PAKEJ 2 BOTOL (60 KAPSUL · RM 318)</span>
                <span aria-hidden="true">→</span>
              </button>
              <button
                type="button"
                class="cta-hairline-secondary"
                data-open-order-drawer
                data-order-product="grow-xl"
                data-order-qty="3"
              >
                <span>PILIH PAKEJ 3 BOTOL (90 KAPSUL · RM 477)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- =====================================================================
           CHAPTER V (MS-113D): JADUAL PERBANDINGAN 4 FORMULA RASMI ONYXMAN
           GROW XL VS HORSEMEN VS HAMMER OF THOR VS MAGNUM PUMP XR
           ===================================================================== -->
      <section
        id="jadual-perbandingan-4-formula-onyxman"
        class="growxl-section-stage growxl-section-stage--onyx"
        aria-labelledby="growxl-ms-compare-heading"
      >
        <div class="growxl-section-inner">
          <header class="growxl-chapter-header">
            <div class="growxl-chapter-header__meta-row">
              <span class="growxl-chapter-number">
                BAB V · JADUAL PERBANDINGAN 4 FORMULA APOTEKARI ONYXMAN (RM 159 SEBOTOL)
              </span>
              <a href="/ms/perbandingan/" class="editorial-kicker">
                BUKA PORTAL PERBANDINGAN LENGKAP →
              </a>
            </div>
            <h2 id="growxl-ms-compare-heading" class="editorial-headline-lg">
              Perbandingan Terperinci: <span class="foil-champagne-text">Grow XL (30 Kapsul)</span>
              Berbanding Horsemen, Hammer of Thor &amp; Magnum Pump XR
            </h2>
            <p class="editorial-lead-paragraph comparison-summary">
              Setiap formulasi di bawah jenama Onyxman Malaysia ditawarkan pada harga seragam
              <strong>RM 159 sebotol (2 Botol RM 318 · 3 Botol RM 477)</strong>. Gunakan jadual perbandingan
              saintifik di bawah untuk mengesahkan mengapa Grow XL ialah pilihan tepat bagi rutin penjagaan bulanan
              30 hari anda:
            </p>
          </header>

          <!-- Full Semantic 4-Product Comparison Table -->
          <div class="growxl-comparison-table-wrap" role="region" aria-label="Jadual Perbandingan 4 Formula Onyxman Malaysia" tabindex="0">
            <table class="growxl-comparison-table">
              <thead>
                <tr>
                  <th scope="col">Parameter &amp; Spesifikasi</th>
                  <th scope="col" class="growxl-comparison-table__highlight-col">
                    Grow XL Malaysia (Pilihan Semasa)
                  </th>
                  <th scope="col">Horsemen</th>
                  <th scope="col">Hammer of Thor</th>
                  <th scope="col">Magnum Pump XR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Transkripsi Label Botol</th>
                  <td class="growxl-comparison-table__highlight-col">
                    <strong>#1 Selling Product — Made With Natural Ingredient — Extra-Strength Enhancement Male Performance Blend — 30 Capsules</strong>
                  </td>
                  <td>Men's Stamina — Tongkat Ali &amp; Maca — 20 Capsules (500mg)</td>
                  <td>Men's Health — Tribulus Terrestris — 20 Veg. Capsules</td>
                  <td>Nitric Oxide &amp; Testosterone Pro Series — 30 Black Capsules</td>
                </tr>
                <tr>
                  <th scope="row">SKU, MPN &amp; GTIN-13</th>
                  <td class="growxl-comparison-table__highlight-col">
                    SKU: <code>ONYX-GX-30</code><br />MPN: <code>GXL-30CAP-MY</code><br />GTIN: <code>9550000102035</code>
                  </td>
                  <td>SKU: <code>ONYX-HM-20</code><br />MPN: <code>HM-20CAP-MY</code><br />GTIN: <code>9550000102011</code></td>
                  <td>SKU: <code>ONYX-HT-20</code><br />MPN: <code>HT-TRIB-20MY</code><br />GTIN: <code>9550000102028</code></td>
                  <td>SKU: <code>ONYX-MP-30</code><br />MPN: <code>MP-XR30-MY</code><br />GTIN: <code>9550000102042</code></td>
                </tr>
                <tr>
                  <th scope="row">Bilangan Kapsul &amp; Berat</th>
                  <td class="growxl-comparison-table__highlight-col">
                    <strong>30 Kapsul × 550mg (16,500mg sebotol)</strong>
                  </td>
                  <td>20 Kapsul × 500mg (10,000mg sebotol)</td>
                  <td>20 Kapsul Vegetarian HPMC × 500mg (10,000mg sebotol)</td>
                  <td>30 Kapsul Hitam × 600mg (18,000mg sebotol)</td>
                </tr>
                <tr>
                  <th scope="row">Fokus Biologi Utama</th>
                  <td class="growxl-comparison-table__highlight-col">
                    <strong>Kitaran Harian 30 Hari Kekuatan Ekstra, Aliran Mikro &amp; Kesejahteraan Lelaki Dewasa</strong>
                  </td>
                  <td>Kesediaan Tenaga Malam Pantas &amp; Daya Tahan Adaptogenik</td>
                  <td>Ketahanan Stamina Fizikal, Pemulihan Otot &amp; Saponin Tribulus</td>
                  <td>Prekursor Nitrik Oksida (NO), Aliran Vaskular Senaman &amp; Pam Fizikal</td>
                </tr>
                <tr>
                  <th scope="row">6 Ramuan Aktif Utama</th>
                  <td class="growxl-comparison-table__highlight-col">
                    <strong>Tongkat Ali 140mg, Maca Peru 110mg, L-Arginine/L-Citrulline 100mg, Muira Puama 80mg, Saw Palmetto 70mg, Ginseng/Ginkgo 50mg</strong>
                  </td>
                  <td>Tongkat Ali 150mg, Maca Hitam 120mg, Panax Ginseng 80mg, Epimedium 70mg, L-Arginine 50mg, Zink 30mg</td>
                  <td>Tribulus Terrestris 200mg (60% Saponin), Maca 100mg, L-Arginine 80mg, Ginseng 60mg, Tongkat Ali 45mg, Zink 15mg</td>
                  <td>L-Arginine HCl 220mg, L-Citrulline 140mg, Kunyit Hitam 90mg, Ubi Bit 70mg, Tongkat Ali 60mg, Bioperine 20mg</td>
                </tr>
                <tr>
                  <th scope="row">Jadual Pengambilan</th>
                  <td class="growxl-comparison-table__highlight-col">
                    <strong>1 Kapsul Setiap Pagi Selepas Sarapan (atau Selepas Makan Malam) selama 30 Hari</strong>
                  </td>
                  <td>1 Kapsul 45–60 Minit Sebelum Aktiviti Malam atau Setiap 48 Jam</td>
                  <td>1 Kapsul Setiap Malam Selepas Makan Malam atau 45 Minit Sebelum Latihan</td>
                  <td>1 Kapsul 30–45 Minit Sebelum Senaman Gimnasium atau Aktiviti Malam</td>
                </tr>
                <tr>
                  <th scope="row">Hari Peringatan Refill</th>
                  <td class="growxl-comparison-table__highlight-col">
                    <strong>Hari Ke-25 (Kitaran Bulanan 30 Hari)</strong>
                  </td>
                  <td>Hari Ke-18 (Kitaran 20 Hari)</td>
                  <td>Hari Ke-18 (Kitaran 20 Hari)</td>
                  <td>Hari Ke-25 (Kitaran 30 Hari)</td>
                </tr>
                <tr>
                  <th scope="row">Harga Rasmi Onyxman.my</th>
                  <td class="growxl-comparison-table__highlight-col">
                    <strong>1B: RM 159 · 2B: RM 318 · 3B: RM 477</strong>
                  </td>
                  <td>1B: RM 159 · 2B: RM 318 · 3B: RM 477</td>
                  <td>1B: RM 159 · 2B: RM 318 · 3B: RM 477</td>
                  <td>1B: RM 159 · 2B: RM 318 · 3B: RM 477</td>
                </tr>
                <tr>
                  <th scope="row">Tindakan &amp; Rujukan</th>
                  <td class="growxl-comparison-table__highlight-col">
                    <button
                      type="button"
                      class="cta-foil-primary"
                      style="padding: 0.65rem 1.15rem; font-size: 0.72rem;"
                      data-open-order-drawer
                      data-order-product="grow-xl"
                      data-order-qty="2"
                    >
                      TEMPAH GROW XL
                    </button>
                  </td>
                  <td><a href="/ms/horsemen-malaysia/" class="cta-hairline-secondary" style="padding: 0.55rem 1rem; font-size: 0.7rem;">LIHAT HORSEMEN →</a></td>
                  <td><a href="/ms/hammer-of-thor-malaysia/" class="cta-hairline-secondary" style="padding: 0.55rem 1rem; font-size: 0.7rem;">LIHAT HAMMER OF THOR →</a></td>
                  <td><a href="/ms/produk/magnum-pump-xr/" class="cta-hairline-secondary" style="padding: 0.55rem 1rem; font-size: 0.7rem;">LIHAT MAGNUM PUMP XR →</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- =====================================================================
           CHAPTER VI (MS-113E): PENGESAHAN KETULENAN 5-TITIK GROW XL MALAYSIA
           CARA MEMASTIKAN BOTOL GROW XL ANDA 100% TULEN DARI ONYXMAN.MY
           ===================================================================== -->
      <section
        id="pengesahan-ketulenan-grow-xl"
        class="growxl-section-stage"
        aria-labelledby="growxl-ms-auth-heading"
      >
        <div class="growxl-section-inner">
          <header class="growxl-chapter-header">
            <div class="growxl-chapter-header__meta-row">
              <span class="growxl-chapter-number">
                BAB VI · PROTOKOL PENGESAHAN KETULENAN 5-TITIK ONYXMAN MALAYSIA
              </span>
              <span class="editorial-kicker">SKU: ONYX-GX-30 · MPN: GXL-30CAP-MY · GTIN: 9550000102035</span>
            </div>
            <h2 id="growxl-ms-auth-heading" class="editorial-headline-lg">
              Senarai Semak 5-Titik Ketulenan
              <span class="foil-champagne-text">Grow XL Malaysia (30 Kapsul)</span>
            </h2>
            <p class="editorial-lead-paragraph">
              Jangan terpedaya dengan iklan klasifikasi pihak ketiga yang memaparkan gambar kabur bertera air
              (watermarked) atau menjual stok tiruan pada harga yang meragukan. Setiap botol tulen Grow XL daripada
              <strong>Onyxman Malaysia (https://onyxman.my)</strong> mematuhi lima piawaian ketulenan berikut:
            </p>
          </header>

          <div class="architectural-ledger" role="list" aria-label="Senarai Semak 5-Titik Ketulenan Grow XL Malaysia">
            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">SAH-01</span>
              <h3 class="architectural-ledger__title">
                Lencana Emas “#1 Selling Product — Made With Natural Ingredient” &amp; Lambang XL Biru-Perak
              </h3>
              <p class="architectural-ledger__detail">
                Botol hitam obsidian berkilat tulen memaparkan cop mohor emas
                <em>“#1 Selling Product — Made With Natural Ingredient”</em>, huruf <strong>“XL”</strong> dengan
                kemasan biru-perak metalik yang tajam, serta jalur merah
                <em>“Extra-Strength Enhancement Male Performance Blend — 30 Capsules”</em>.
              </p>
              <span class="architectural-ledger__metric">LENCANA EMAS &amp; XL METALIK</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">SAH-02</span>
              <h3 class="architectural-ledger__title">
                Pendaftaran SKU ONYX-GX-30, MPN GXL-30CAP-MY &amp; GTIN-13 9550000102035
              </h3>
              <p class="architectural-ledger__detail">
                Setiap botol dalam inventori rasmi Onyxman Malaysia direkodkan di bawah SKU <code>ONYX-GX-30</code>,
                nombor bahagian pengeluar <code>GXL-30CAP-MY</code>, dan kod bar GS1 Malaysia
                <code>9550000102035</code>.
              </p>
              <span class="architectural-ledger__metric">GTIN: 9550000102035</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">SAH-03</span>
              <h3 class="architectural-ledger__title">
                Genap 30 Kapsul Kekuatan Ekstra (550mg) dengan Penutup Kedap Udara
              </h3>
              <p class="architectural-ledger__detail">
                Dilengkapi pelekat keselamatan induksi kedap udara dan pek penyerap lembapan gred farmaseutikal
                bagi melindungi kesemua 30 kapsul (16,500mg jumlah kepekatan) daripada kelembapan cuaca Malaysia.
              </p>
              <span class="architectural-ledger__metric">30 KAPSUL × 550MG</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">SAH-04</span>
              <h3 class="architectural-ledger__title">
                Harga Rasmi Tetap RM 159 (1 Botol), RM 318 (2 Botol) &amp; RM 477 (3 Botol)
              </h3>
              <p class="architectural-ledger__detail">
                Kami tidak pernah melantik ejen jalanan yang menjual pada harga diskaun palsu RM 40 atau harga
                melampau RM 280 sebotol. Harga rasmi di seluruh Malaysia adalah seragam pada
                <strong>RM 159 sebotol</strong>.
              </p>
              <span class="architectural-ledger__metric">RM 159 / RM 318 / RM 477</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">SAH-05</span>
              <h3 class="architectural-ledger__title">
                Pengesahan Pesanan Terus Melalui sales@onyxman.my &amp; info@onyxman.my
              </h3>
              <p class="architectural-ledger__detail">
                Setiap tempahan yang dihantar melalui Laci Tempahan Ekspres Onyxman mengeluarkan kod rujukan rasmi
                dan disokong terus oleh meja khidmat pelanggan kami di
                <a href="mailto:sales@onyxman.my">sales@onyxman.my</a> serta
                <a href="mailto:info@onyxman.my">info@onyxman.my</a>.
              </p>
              <span class="architectural-ledger__metric">JAMINAN APOTEKARI RASMI</span>
            </div>
          </div>
        </div>
      </section>

      <!-- =====================================================================
           CHAPTER VII (MS-113F): PENGHANTARAN RAHSIA 16 NEGERI & WILAYAH
           PERSEKUTUAN MALAYSIA (KOTAK KOSONG TANPA NAMA PRODUK)
           ===================================================================== -->
      <section
        id="penghantaran-rahsia-16-negeri-malaysia"
        class="growxl-section-stage growxl-section-stage--charcoal"
        aria-labelledby="growxl-ms-shipping-heading"
      >
        <div class="growxl-section-inner">
          <header class="growxl-chapter-header">
            <div class="growxl-chapter-header__meta-row">
              <span class="growxl-chapter-number">
                BAB VII · RANGKAIAN PENGHANTARAN RAHSIA KE SELURUH 16 NEGERI &amp; WILAYAH PERSEKUTUAN MALAYSIA
              </span>
              <a href="/ms/penghantaran-malaysia/" class="editorial-kicker">
                DIREKTORI LOGISTIK 16 NEGERI MALAYSIA →
              </a>
            </div>
            <h2 id="growxl-ms-shipping-heading" class="editorial-headline-lg">
              Penghantaran Rahsia Kotak Kosong ke
              <span class="foil-champagne-text">16 Negeri &amp; Wilayah Persekutuan Malaysia</span>
            </h2>
            <p class="editorial-lead-paragraph">
              Setiap botol Grow XL Malaysia dihantar menggunakan bungkusan keselamatan legap tanpa sebarang logo
              atau nama produk. Slip kurier hanya memaparkan nama pengirim <strong>“OM Fulfilment Logistics”</strong>.
              Menyokong pembayaran <strong>FPX Online Banking, DuitNow QR Segera &amp; Bayar Waktu Terima (COD Malaysia)</strong>.
            </p>
          </header>

          <!-- 16 Malaysia States & Federal Territories Architectural Ledger -->
          <div class="architectural-ledger" role="list" aria-label="Senarai Penghantaran Rahsia 16 Negeri Malaysia untuk Grow XL">
            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-01 · WPKL</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/kuala-lumpur/">Wilayah Persekutuan Kuala Lumpur</a>
              </h3>
              <p class="architectural-ledger__detail">
                Penghantaran ekspres ke KLCC, Bukit Bintang, Bangsar, Mont Kiara, Damansara, Cheras, Ampang, Setapak,
                Wangsa Maju &amp; Sri Petaling. Pilihan penghantar persendirian hari sama (3–5 jam) atau kurier 24 jam.
              </p>
              <span class="architectural-ledger__metric">3–5 JAM HARI SAMA / ESOK</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-02 · SGR</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/selangor/">Selangor Darul Ehsan</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan penuh Petaling Jaya, Subang Jaya, Shah Alam, Damansara, Puchong, Klang, Kajang, Bangi,
                Cyberjaya, Rawang &amp; Sepang dengan bungkusan kotak kosong 100% rahsia.
              </p>
              <span class="architectural-ledger__metric">3–5 JAM HARI SAMA / 24 JAM</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-03 · PJY</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/">Wilayah Persekutuan Putrajaya</a>
              </h3>
              <p class="architectural-ledger__detail">
                Penghantaran terus ke Presint 1–20 Putrajaya dan Cyberjaya di bawah label neutral OM Fulfilment
                Logistics—sesuai untuk penerimaan di pejabat atau kediaman.
              </p>
              <span class="architectural-ledger__metric">3–5 JAM HARI SAMA / 1 HARI</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-04 · PNG</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/penang/">Pulau Pinang (George Town &amp; Seberang Perai)</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan George Town, Bayan Lepas, Jelutong, Tanjung Bungah, Butterworth, Bukit Mertajam &amp;
                Seberang Jaya (Penghantaran Percuma untuk 1, 2, atau 3 botol).
              </p>
              <span class="architectural-ledger__metric">1–2 HARI BEKERJA · PERCUMA</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-05 · JHR</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/johor-bahru/">Johor Darul Ta'zim (Johor Bahru &amp; Iskandar Puteri)</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan Johor Bahru, Iskandar Puteri, Skudai, Kulai, Pasir Gudang, Batu Pahat, Muar, Kluang &amp;
                Segamat dengan pilihan COD, FPX, dan DuitNow QR.
              </p>
              <span class="architectural-ledger__metric">1–2 HARI BEKERJA · PERCUMA</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-06 · PRK</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/perak-ipoh/">Perak Darul Ridzuan (Ipoh &amp; Taiping)</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan Ipoh, Taiping, Seri Manjung, Sitiawan, Teluk Intan, Kampar &amp; Kuala Kangsar melalui
                NinjaVan Discreet, J&amp;T VIP &amp; PosLaju Priority.
              </p>
              <span class="architectural-ledger__metric">1–2 HARI BEKERJA · PERCUMA</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-07 · MLK</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/melaka/">Melaka Bandaraya Bersejarah</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan Bandaraya Melaka, Ayer Keroh, Batu Berendam, Alor Gajah &amp; Jasin dengan penghantaran
                ekspres rahsia percuma.
              </p>
              <span class="architectural-ledger__metric">1–2 HARI BEKERJA · PERCUMA</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-08 · NSN</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/negeri-sembilan-seremban/">Negeri Sembilan Darul Khusus</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan Seremban, Seremban 2, Senawang, Nilai, Port Dickson &amp; Tampin dalam tempoh 1–2 hari bekerja.
              </p>
              <span class="architectural-ledger__metric">1–2 HARI BEKERJA · PERCUMA</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-09 · PHG</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/pahang-kuantan/">Pahang Darul Makmur (Kuantan &amp; Temerloh)</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan Kuantan, Indera Mahkota, Temerloh, Bentong, Pekan &amp; Cameron Highlands.
              </p>
              <span class="architectural-ledger__metric">1–2 HARI BEKERJA · PERCUMA</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-10 · KDH</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/kedah-alor-setar/">Kedah Darul Aman (Alor Setar &amp; Sungai Petani)</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan Alor Setar, Sungai Petani, Kulim, Jitra &amp; Pulau Langkawi dengan bungkusan legap.
              </p>
              <span class="architectural-ledger__metric">1–2 HARI BEKERJA · PERCUMA</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-11 · KTN</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/kelantan-kota-bharu/">Kelantan Darul Naim (Kota Bharu)</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan Kota Bharu, Kubang Kerian, Pasir Mas, Tanah Merah &amp; Machang.
              </p>
              <span class="architectural-ledger__metric">1–2 HARI BEKERJA · PERCUMA</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-12 · TRG</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/terengganu-kuala-terengganu/">Terengganu Darul Iman</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan Kuala Terengganu, Kemaman, Dungun, Kerteh, Marang &amp; Besut.
              </p>
              <span class="architectural-ledger__metric">1–2 HARI BEKERJA · PERCUMA</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-13 · PLS</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/perlis-kangar/">Perlis Indera Kayangan (Kangar &amp; Arau)</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan Kangar, Arau, Kuala Perlis &amp; Padang Besar dengan kurier ekspres rahsia percuma.
              </p>
              <span class="architectural-ledger__metric">1–2 HARI BEKERJA · PERCUMA</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-14 · SBH</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/sabah-kota-kinabalu/">Sabah (Kota Kinabalu, Sandakan &amp; Tawau)</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan Kota Kinabalu, Penampang, Sandakan, Tawau, Lahad Datu &amp; Keningau melalui Kargo Udara
                Rahsia (Percuma untuk pakej 2 Botol RM 318 &amp; 3 Botol RM 477; RM 12 untuk 1 Botol).
              </p>
              <span class="architectural-ledger__metric">2–4 HARI BEKERJA · PERCUMA 2B+</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-15 · SWK</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/sarawak-kuching/">Sarawak (Kuching, Miri, Sibu &amp; Bintulu)</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan Kuching, Kota Samarahan, Miri, Sibu &amp; Bintulu melalui Kargo Udara Rahsia (Percuma untuk
                pakej 2 Botol RM 318 &amp; 3 Botol RM 477; RM 12 untuk 1 Botol).
              </p>
              <span class="architectural-ledger__metric">2–4 HARI BEKERJA · PERCUMA 2B+</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-16 · LBN</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/">Wilayah Persekutuan Labuan</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan Bandar Labuan (Victoria) dan kawasan sekitarnya melalui Kargo Udara Ekspres Rahsia (Percuma
                untuk pakej 2 Botol RM 318 &amp; 3 Botol RM 477).
              </p>
              <span class="architectural-ledger__metric">2–4 HARI BEKERJA · PERCUMA 2B+</span>
            </div>
          </div>
        </div>
      </section>

      <!-- =====================================================================
           CHAPTER VIII (MS-113G): 10 SOALAN LAZIM (FAQ) BAHASA MALAYSIA
           MIRRORED 1:1 IN @GRAPH FAQPAGE JSON-LD
           ===================================================================== -->
      <section
        id="soalan-lazim-grow-xl-malaysia"
        class="growxl-section-stage"
        aria-labelledby="growxl-ms-faq-heading"
      >
        <div class="growxl-section-inner">
          <header class="growxl-chapter-header">
            <div class="growxl-chapter-header__meta-row">
              <span class="growxl-chapter-number">
                BAB VIII · 10 SOALAN LAZIM (FAQ) GROW XL MALAYSIA
              </span>
              <span class="editorial-kicker">PANDUAN RASMI PENGGUNA DEWASA (18+)</span>
            </div>
            <h2 id="growxl-ms-faq-heading" class="editorial-headline-lg">
              Soalan Lazim Mengenai
              <span class="foil-champagne-text">Grow XL Malaysia (30 Kapsul Kekuatan Ekstra)</span>
            </h2>
            <p class="editorial-lead-paragraph">
              Penjelasan lengkap mengenai kitaran bulanan 30 kapsul (550mg setiap kapsul), fungsi 6 ekstrak botani
              semula jadi, peringatan isian semula Hari Ke-25, serta jaminan penghantaran kotak kosong rahsia.
            </p>
          </header>

          <div class="growxl-faq-ledger" data-faq-accordion-group role="region" aria-label="Senarai 10 Soalan Lazim Grow XL Malaysia">
            ${GROWXL_BM_FAQS.map((item, idx) => {
              const num = String(idx + 1).padStart(2, '0');
              const isOpenAttr = idx === 0 ? ' open' : '';
              return `
            <details class="faq-ledger-item"${isOpenAttr}>
              <summary class="faq-ledger-item__summary">
                <span class="faq-ledger-item__index">FAQ-${num}</span>
                <span class="faq-ledger-item__question">${item.question}</span>
                <span class="faq-ledger-item__icon" aria-hidden="true">+</span>
              </summary>
              <div class="faq-ledger-item__answer">
                <p>${item.answer}</p>
              </div>
            </details>`;
            }).join('\n')}
          </div>
        </div>
      </section>

      <!-- =====================================================================
           CHAPTER IX (MS-113H): PENTAS TEMPAHAN AKHIR GROW XL MALAYSIA
           ===================================================================== -->
      <section
        id="tempah-grow-xl-malaysia"
        class="growxl-section-stage growxl-section-stage--onyx"
        aria-labelledby="growxl-ms-final-cta-heading"
      >
        <div class="growxl-section-inner">
          <header class="growxl-chapter-header">
            <div class="growxl-chapter-header__meta-row">
              <span class="growxl-chapter-number">
                BAB IX · TEMPAHAN EKSPRES KOTAK KOSONG RAHSIA (10 SAAT)
              </span>
              <span class="growxl-gold-crest-inline">
                <span class="growxl-gold-crest-inline__dot" aria-hidden="true"></span>
                <span>STOK SEDIA ADA DI KUALA LUMPUR · SKU: ONYX-GX-30</span>
              </span>
            </div>
            <h2 id="growxl-ms-final-cta-heading" class="editorial-headline-lg">
              Mulakan Kitaran 30 Hari
              <span class="foil-champagne-text">Grow XL Malaysia (30 Kapsul)</span> Hari Ini
            </h2>
            <p class="editorial-lead-paragraph">
              Pilih pakej botol anda di bawah untuk membuka Laci Tempahan Ekspres Rahsia. Tiada pendaftaran akaun
              diperlukan—hanya lengkapkan butiran penghantaran untuk pelepasan bungkusan legap di bawah nama
              <strong>OM Fulfilment Logistics</strong>.
            </p>
          </header>

          <div class="tier-strip-group" role="group" aria-label="Pilihan Pakej Akhir Grow XL Malaysia">
            <button
              type="button"
              class="tier-strip-option"
              data-open-order-drawer
              data-order-product="grow-xl"
              data-order-qty="1"
            >
              <div class="tier-strip-option__left">
                <span class="tier-strip-option__eyebrow">PAKEJ 1 BOTOL · KITARAN 30 HARI · SKU: ONYX-GX-30-1B</span>
                <span class="tier-strip-option__title">1 Botol Grow XL (30 Kapsul Kekuatan Ekstra × 550mg)</span>
                <span class="tier-strip-option__subtitle">
                  Penghantaran Ekspres Rahsia Percuma Semenanjung Malaysia · Peringatan Isian Semula Hari Ke-25
                </span>
              </div>
              <div class="tier-strip-option__price">RM 159</div>
            </button>

            <button
              type="button"
              class="tier-strip-option tier-strip-option--selected"
              data-open-order-drawer
              data-order-product="grow-xl"
              data-order-qty="2"
            >
              <div class="tier-strip-option__left">
                <span class="tier-strip-option__eyebrow">PAKEJ 2 BOTOL (PALING LARIS) · KITARAN 60 HARI · SKU: ONYX-GX-30-2B</span>
                <span class="tier-strip-option__title">2 Botol Grow XL (60 Kapsul Kekuatan Ekstra × 550mg)</span>
                <span class="tier-strip-option__subtitle">
                  Penghantaran Ekspres Rahsia Percuma Seluruh Malaysia (Termasuk Sabah, Sarawak &amp; Labuan) · Peringatan Hari Ke-50
                </span>
              </div>
              <div class="tier-strip-option__price">RM 318</div>
            </button>

            <button
              type="button"
              class="tier-strip-option"
              data-open-order-drawer
              data-order-product="grow-xl"
              data-order-qty="3"
            >
              <div class="tier-strip-option__left">
                <span class="tier-strip-option__eyebrow">PAKEJ 3 BOTOL · KITARAN OPTIMUM 90 HARI · SKU: ONYX-GX-30-3B</span>
                <span class="tier-strip-option__title">3 Botol Grow XL (90 Kapsul Kekuatan Ekstra × 550mg)</span>
                <span class="tier-strip-option__subtitle">
                  Pelepasan Kurier Keutamaan VIP + Penghantaran Rahsia Percuma Seluruh Negara · Peringatan Hari Ke-75
                </span>
              </div>
              <div class="tier-strip-option__price">RM 477</div>
            </button>
          </div>

          <div class="growxl-cta-cluster" style="margin-top: 2rem;">
            <button
              type="button"
              class="cta-foil-primary"
              data-open-order-drawer
              data-order-product="grow-xl"
              data-order-qty="2"
            >
              <span>BUKA LACI TEMPAHAN EKSPRES RAHSIA · RM 159 / BOTOL</span>
              <span aria-hidden="true">→</span>
            </button>
            <a href="mailto:sales@onyxman.my?subject=Pertanyaan%20Rasmi%20Grow%20XL%20Malaysia%20(ONYX-GX-30)" class="cta-hairline-secondary">
              <span>E-MEL MEJA JUALAN: sales@onyxman.my</span>
            </a>
            <a href="mailto:info@onyxman.my?subject=Pertanyaan%20Formulasi%20Grow%20XL%20(GXL-30CAP-MY)" class="cta-hairline-secondary">
              <span>MEJA MAKLUMAT BOTANI: info@onyxman.my</span>
            </a>
          </div>
        </div>
      </section>
  `;
}

/**
 * Main execution entry point: generates public/ms/grow-xl-malaysia/index.html
 * AND writes synchronized copy to public/ms/produk/grow-xl/index.html so both URLs work seamlessly.
 */
export function buildGrowXlMsPage() {
  const schemaGraphJson = buildGrowXlMsSchemaJson();
  const bodyContent = buildGrowXlMsBodyHtml();

  const fullHtml = renderLuxuryShell({
    lang: 'ms-MY',
    title: PAGE_TITLE_MS,
    description: PAGE_DESCRIPTION_MS,
    canonicalPath: CANONICAL_PATH_MS,
    alternatePathEn: ALTERNATE_PATH_EN,
    alternatePathMs: CANONICAL_PATH_MS,
    ogImage: '/assets/products/grow-xl-stage.webp',
    schemaGraphJson,
    bodyContent,
    activeNav: 'grow-xl',
    productSlug: 'grow-xl',
    defaultQty: 2,
    includeSealStrip: true,
    extraHeadHtml: GROWXL_MS_EXTRA_HEAD_CSS,
  });

  const primaryOutputPath = path.join(ROOT_DIR, 'public', 'ms', 'grow-xl-malaysia', 'index.html');
  const mirrorOutputPath = path.join(ROOT_DIR, 'public', 'ms', 'produk', 'grow-xl', 'index.html');

  fs.mkdirSync(path.dirname(primaryOutputPath), { recursive: true });
  fs.writeFileSync(primaryOutputPath, fullHtml, 'utf8');

  fs.mkdirSync(path.dirname(mirrorOutputPath), { recursive: true });
  fs.writeFileSync(mirrorOutputPath, fullHtml, 'utf8');

  const lineCount = fullHtml.split(/\r?\n/).length;
  const byteSize = Buffer.byteLength(fullHtml, 'utf8');

  console.log(
    `[MS-112..MS-113] Built public/ms/grow-xl-malaysia/index.html & public/ms/produk/grow-xl/index.html — ${lineCount} lines (${byteSize} bytes)`
  );

  return { primaryOutputPath, mirrorOutputPath, lineCount, byteSize };
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  buildGrowXlMsPage();
}
