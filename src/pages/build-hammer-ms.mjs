#!/usr/bin/env node
/**
 * ============================================================================
 * ONYXMEN.MY — HAMMER OF THOR BAHASA MALAYSIA FLAGSHIP BUILDER (MS-107 TO MS-108)
 * Output Target: public/ms/hammer-of-thor-malaysia/index.html
 * Canonical URL: https://www.onyxmen.my/ms/hammer-of-thor-malaysia/
 * Paired EN URL: https://www.onyxmen.my/hammer-of-thor-malaysia/
 * Product Constants:
 * - Name: Hammer of Thor Malaysia (Kesihatan Lelaki — Tribulus Terrestris — 20 Kapsul Vegetarian)
 * - SKU: ONYX-HT-20 | MPN: HT-TRIB-20MY | GTIN-13: 9550000102028
 * - Official Pricing: 1 Botol = RM 159 | 2 Botol = RM 318 | 3 Botol = RM 477
 * - Emails: waleedshoaibofficial@gmail.com | sales@onyxmen.my | info@onyxmen.my
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

const CANONICAL_PATH_MS = '/ms/hammer-of-thor-malaysia/';
const ALTERNATE_PATH_EN = '/hammer-of-thor-malaysia/';
const CANONICAL_URL_MS = 'https://www.onyxmen.my/ms/hammer-of-thor-malaysia/';
const ALTERNATE_URL_EN = 'https://www.onyxmen.my/hammer-of-thor-malaysia/';

const PAGE_TITLE_MS =
  'Hammer of Thor Malaysia (20 Kapsul Vegetarian) — Suplemen Kesihatan Lelaki Tribulus Terrestris | RM 159 Onyxmen.my';
const PAGE_DESCRIPTION_MS =
  'Tempah Hammer of Thor Malaysia tulen (Kesihatan Lelaki — Tribulus Terrestris — 20 Kapsul Vegetarian, SKU: ONYX-HT-20, MPN: HT-TRIB-20MY) pada harga rasmi RM 159 (1 Botol), RM 318 (2 Botol) atau RM 477 (3 Botol) di Onyxmen.my. Kapsul selulosa tumbuhan HPMC 100% vegetarian dengan 200mg Tribulus Terrestris (60% Saponin), Akar Maca Andes, L-Arginine, Panax Ginseng, Tongkat Ali Malaysia & Zink Bisglisinat. Penghantaran bungkusan rahsia ke seluruh 16 negeri Malaysia.';

/**
 * 10 Comprehensive Bahasa Malaysia FAQs for Hammer of Thor Malaysia (MS-108)
 */
const HAMMER_BM_FAQS = [
  {
    question: 'Apakah maksud "20 Veg. Capsules" (20 Kapsul Vegetarian) pada label hadapan botol Hammer of Thor Malaysia?',
    answer:
      'Label "Men\'s Health — Tribulus Terrestris — 20 Veg. Capsules" mengesahkan bahawa Hammer of Thor Malaysia (SKU: ONYX-HT-20, MPN: HT-TRIB-20MY, GTIN-13: 9550000102028) menggunakan 100% sarung kapsul selulosa tumbuhan Hypromellose (HPMC) berbanding kapsul gelatin haiwan (bovin atau porsin). Sarung HPMC ini tahan haba serta kelembapan cuaca tropika Malaysia, tidak melekit di dalam botol, dan larut dengan bersih di dalam perut dalam tempoh 12 hingga 18 minit tanpa menyebabkan rasa senak.',
  },
  {
    question: 'Mengapakah ekstrak Tribulus Terrestris diletakkan sebagai teras utama Hammer of Thor Malaysia?',
    answer:
      'Setiap kapsul vegetarian 500mg Hammer of Thor mengandungi 200mg ekstrak buah dan bahagian aerial Tribulus Terrestris yang dipiawaikan kepada 60% jumlah saponin steroid (fraksi protodioscin aktif). Tidak seperti suplemen biasa yang hanya meletakkan Tribulus dalam jumlah kecil, Hammer of Thor menggabungkan 200mg Tribulus bersama 100mg Akar Maca Andes, 80mg L-Arginine fermentasi tumbuhan, 60mg Panax Ginseng, 45mg Tongkat Ali Malaysia, dan 15mg Zink Bisglisinat untuk menyokong daya tahan fizikal, pemulihan otot selepas latihan, serta kecergasan malam lelaki dewasa.',
  },
  {
    question: 'Berapakah harga rasmi Hammer of Thor Malaysia di Onyxmen.my untuk pakej 1, 2, dan 3 botol?',
    answer:
      'Onyxmen Malaysia mengamalkan struktur harga rasmi yang telus dan seragam bagi semua formulasi: 1 Botol (20 Kapsul Vegetarian untuk kitaran 20 hari) berharga RM 159 (159.00 MYR) termasuk penghantaran rahsia percuma di Semenanjung Malaysia; 2 Botol (40 Kapsul Vegetarian untuk protokol 40 hari) berharga RM 318 (318.00 MYR) termasuk penghantaran ekspres rahsia percuma ke seluruh Malaysia termasuk Sabah, Sarawak, dan Labuan; manakala 3 Botol (60 Kapsul Vegetarian untuk kitaran penuh 60 hari) berharga RM 477 (477.00 MYR) dengan keutamaan pelepasan kurier VIP.',
  },
  {
    question: 'Apakah perbezaan utama antara Hammer of Thor dan Horsemen jika kedua-duanya mengandungi 20 kapsul pada harga RM 159?',
    answer:
      'Walaupun kedua-duanya menampilkan format 20 kapsul × 500mg pada harga RM 159 sebotol, fokus biokimia dan jenis kapsulnya berbeza. Hammer of Thor menggunakan kapsul 100% vegetarian (HPMC) dengan teras utama Tribulus Terrestris (200mg, 60% saponin) dan Zink Bisglisinat (15mg) untuk pembinaan stamina harian secara berperingkat, kekuatan fizikal gimnasium, dan pemulihan otot. Horsemen pula memfokuskan gabungan Tongkat Ali Malaysia 100:1, Maca Hitam Peru, dan Epimedium untuk kesediaan tenaga malam yang pantas dalam tempoh 45 hingga 60 minit.',
  },
  {
    question: 'Bagaimanakah cara pengambilan Hammer of Thor yang paling berkesan untuk lelaki dewasa di Malaysia?',
    answer:
      'Terdapat dua mod protokol rasmi: (1) Protokol Penjagaan Saponin Harian — ambil 1 kapsul vegetarian setiap malam 30 minit selepas makan malam bersama 250ml air suam selama 20 hari berturut-turut bagi membina ketepuan saponin steroid dan mineral Zink; atau (2) Protokol Sokongan Senaman & Aktiviti Malam — ambil 1 kapsul vegetarian 45 minit sebelum latihan bebanan di gimnasium atau aktiviti malam bersama 300ml air kosong.',
  },
  {
    question: 'Bagaimanakah sistem Peringatan Isian Semula Hari Ke-18 (Day-18 Refill Alert) berfungsi?',
    answer:
      'Memandangkan setiap botol Hammer of Thor mengandungi 20 kapsul vegetarian untuk kitaran 20 hari (1 kapsul sehari), anda akan mencapai baki 2 kapsul terakhir pada Hari Ke-18. Sebaik sahaja anda membuat tempahan melalui Laci Tempahan Ekspres Onyxmen, sistem kami menyediakan pautan satu klik ke Google Calendar dan WhatsApp untuk Hari Ke-18 (atau Hari Ke-36 bagi 2 botol, dan Hari Ke-54 bagi 3 botol) supaya botol seterusnya sempat dihantar sebelum bekalan anda habis pada Hari Ke-20.',
  },
  {
    question: 'Adakah bungkusan penghantaran Hammer of Thor benar-benar rahsia jika dihantar ke pejabat atau kondominium?',
    answer:
      'Ya, 100% rahsia dan sulit. Setiap pesanan dibungkus di dalam kotak kurier legap tanpa sebarang logo Onyxmen, tanpa gambar botol, dan tanpa perkataan "Hammer of Thor" atau "Suplemen Lelaki" pada slip alamat (airwaybill). Nama pengirim hanya dicetak sebagai "OM Fulfilment Logistics" dengan keterangan kandungan neutral "Health & Wellness Goods". Anda boleh menerimanya di pejabat, pondok pengawal kondominium, atau pusat pungutan kurier dengan privasi mutlak.',
  },
  {
    question: 'Apakah kaedah pembayaran yang diterima untuk tempahan Hammer of Thor di Malaysia?',
    answer:
      'Kami menyokong pembayaran segera melalui Perbankan Dalam Talian FPX (Maybank2u, CIMB Clicks, Public Bank, RHB, Hong Leong, AmBank, Bank Islam), imbasan DuitNow QR segera, serta perkhidmatan Bayar Waktu Terima (Cash on Delivery / COD Malaysia) di mana anda membayar secara tunai atau QR terus kepada penghantar kurier semasa menerima bungkusan.',
  },
  {
    question: 'Berapa lamakah masa penghantaran ke Kuala Lumpur, Selangor, Pulau Pinang, Johor, Sabah, dan Sarawak?',
    answer:
      'Bagi kawasan Lembah Klang (Kuala Lumpur, Petaling Jaya, Subang Jaya, Shah Alam, Damansara, Puchong, Putrajaya, dan Cyberjaya), penghantar persendirian rahsia hari sama mengambil masa 3 hingga 5 jam untuk pesanan sebelum jam 4:00 petang. Bagi seluruh Semenanjung Malaysia (Pulau Pinang, Johor, Perak, Melaka, Negeri Sembilan, Pahang, Kedah, Kelantan, Terengganu, Perlis), kurier ekspres mengambil masa 1 hingga 2 hari bekerja. Bagi Sabah, Sarawak, dan Labuan, penghantaran kargo udara rahsia mengambil masa 2 hingga 4 hari bekerja.',
  },
  {
    question: 'Adakah Hammer of Thor Malaysia mengandungi sebarang bahan kimia sintetik terlarang atau perangsang berbahaya?',
    answer:
      'Tidak sama sekali. Hammer of Thor daripada Onyxmen Malaysia ialah suplemen pemakanan botani dan mineral tulen yang dirumus daripada ekstrak tumbuhan piawai (Tribulus Terrestris, Akar Maca Peru, Panax Ginseng, Tongkat Ali Malaysia), asid amino L-Arginine fermentasi tumbuhan, dan Zink Bisglisinat di dalam kapsul selulosa tumbuhan HPMC. Ia bebas daripada sebarang bahan kimia sintetik PDE5 tersembunyi, bebas steroid tiruan, dan tidak menyebabkan debaran jantung atau sakit kepala.',
  },
];

/**
 * Builds the complete ms-MY @graph JSON-LD structured data specifically anchored to
 * https://www.onyxmen.my/ms/hammer-of-thor-malaysia/ with SKU ONYX-HT-20 & MPN HT-TRIB-20MY.
 */
function buildHammerMsSchemaJson() {
  const baseGraphObj = buildFullPageGraphObject({
    pageType: 'product',
    lang: 'ms-MY',
    pageUrl: CANONICAL_URL_MS,
    title: PAGE_TITLE_MS,
    description: PAGE_DESCRIPTION_MS,
    product: {
      id: 'hammer-of-thor',
      slug: 'hammer-of-thor',
      name: 'Hammer of Thor Malaysia',
      fullTitleEn:
        "Hammer of Thor Malaysia — Men's Health Tribulus Terrestris Standardized Saponin Complex (20 Veg. Capsules)",
      fullTitleMs:
        'Hammer of Thor Malaysia — Kesihatan Lelaki Tribulus Terrestris Kompleks Saponin Piawai (20 Kapsul Vegetarian)',
      descriptionEn:
        'Hammer of Thor by Onyxmen Malaysia (SKU: ONYX-HT-20, MPN: HT-TRIB-20MY) is a 20-vegetarian-capsule botanical dietary supplement formulated with 200mg standardized Tribulus terrestris (60% saponins), 100mg Andean Maca Root, 80mg plant-fermented L-Arginine, 60mg Panax Ginseng, 45mg Malaysian Tongkat Ali, and 15mg Zinc Bisglycinate.',
      descriptionMs:
        'Hammer of Thor oleh Onyxmen Malaysia (SKU: ONYX-HT-20, MPN: HT-TRIB-20MY) ialah suplemen pemakanan botani 20 kapsul vegetarian (HPMC) yang dirumus dengan 200mg ekstrak Tribulus terrestris piawai (60% saponin), 100mg Akar Maca Andes, 80mg L-Arginine fermentasi tumbuhan, 60mg Panax Ginseng, 45mg Tongkat Ali Malaysia, dan 15mg Zink Bisglisinat untuk ketahanan stamina fizikal dan kecergasan lelaki dewasa.',
      disambiguatingDescriptionEn:
        'Oral botanical and mineral dietary supplement in a 20-vegetarian-capsule HPMC bottle for adult men (18+) in Malaysia. Official price RM 159 per bottle.',
      disambiguatingDescriptionMs:
        'Suplemen pemakanan kapsul selulosa tumbuhan HPMC (20 kapsul vegetarian sebotol) untuk stamina dan kecergasan lelaki dewasa (18+) di Malaysia. Harga rasmi RM 159 sebotol.',
      capsuleCount: 20,
      dosageProtocolEn:
        'Take 1 vegetarian capsule daily 30 minutes after dinner with 250ml warm water, or 45 minutes prior to resistance training or evening activity.',
      dosageProtocolMs:
        'Ambil 1 kapsul vegetarian setiap hari 30 minit selepas makan malam bersama 250ml air suam, atau 45 minit sebelum senaman bebanan dan aktiviti malam.',
      primaryFocusEn: 'Physical Stamina Conditioning, Muscular Recovery & Vegetarian Tribulus Saponin Support',
      primaryFocusMs: 'Ketahanan Stamina Fizikal, Pemulihan Otot & Sokongan Saponin Tribulus Kapsul Vegetarian',
      keyBotanicals: [
        'Tribulus terrestris (200mg Standardized 60% Steroidal Saponin Extract)',
        'Lepidium meyenii (100mg Andean Maca Root 10:1 Extract)',
        'L-Arginine Base (80mg Plant-Fermented Free Amino Acid)',
        'Panax ginseng (60mg 10% Ginsenoside Root Extract)',
        'Eurycoma longifolia (45mg Malaysian Tongkat Ali 100:1 Extract)',
        'Zinc Bisglycinate Chelate (15mg High-Absorption Elemental Zinc)',
      ],
      priceMYR: '159.00',
      sku: 'ONYX-HT-20',
      mpn: 'HT-TRIB-20MY',
      gtin13: '9550000102028',
      imageStageWebp: 'https://www.onyxmen.my/assets/products/hammer-of-thor-stage.webp',
      imageStagePng: 'https://www.onyxmen.my/assets/products/hammer-of-thor-stage.png',
      imagePortraitWebp: 'https://www.onyxmen.my/assets/products/hammer-of-thor-portrait.webp',
      imagePortraitPng: 'https://www.onyxmen.my/assets/products/hammer-of-thor-portrait.png',
      imageCutoutWebp: 'https://www.onyxmen.my/assets/products/hammer-of-thor-cutout.webp',
      imageCutoutPng: 'https://www.onyxmen.my/assets/products/hammer-of-thor-cutout.png',
    },
    breadcrumbs: [
      { name: 'Utama Onyxmen Malaysia', url: 'https://www.onyxmen.my/ms/' },
      { name: '4 Formulasi Apotekari', url: 'https://www.onyxmen.my/ms/produk/' },
      {
        name: 'Hammer of Thor Malaysia (20 Kapsul Vegetarian)',
        url: CANONICAL_URL_MS,
      },
    ],
    faqs: HAMMER_BM_FAQS,
  });

  // Normalize all internal product URLs in the JSON-LD graph to point directly to https://www.onyxmen.my/ms/hammer-of-thor-malaysia/
  const rawSerialized = JSON.stringify(baseGraphObj, null, 2).replace(
    /https:\/\/onyxman\.my\/ms\/produk\/hammer-of-thor\//g,
    CANONICAL_URL_MS
  );
  return rawSerialized;
}

/**
 * Page-specific architectural CSS rules for Hammer of Thor BM Flagship Page.
 * Strictly adheres to Rule #29 & Rule #30:
 * - Palette: #050507, #0B0C10, #12141C, #D4AF37, #F3E5AB, #EAE6DF
 * - Typography: 'Cormorant Garamond', 'Syne', 'Space Grotesk'
 * - Zero #FAF8F5, Zero Plus Jakarta Sans, Zero pill badges, Zero 3-col card boxes
 */
const HAMMER_MS_EXTRA_HEAD_CSS = `
    <style id="hammer-ms-architectural-css">
      /* ==========================================================================
         HAMMER OF THOR MALAYSIA (MS-MY) — BESPOKE ARCHITECTURAL STAGE STYLES
         ========================================================================== */
      .hammer-hero-stage {
        position: relative;
        width: 100vw;
        min-height: 100vh;
        background-color: #050507;
        background-image:
          radial-gradient(circle at 72% 40%, rgba(46, 139, 87, 0.12) 0%, rgba(212, 175, 55, 0.10) 28%, rgba(11, 12, 16, 0.86) 62%, #050507 100%);
        border-bottom: 1px solid rgba(212, 175, 55, 0.24);
        padding: clamp(6.5rem, 11vh, 9.5rem) var(--gutter-cinema) clamp(4rem, 8vh, 6.5rem);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow: hidden;
      }

      .hammer-hero-stage__ambient-watermark {
        position: absolute;
        top: 12%;
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

      .hammer-hero-stage__breadcrumb-bar {
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

      .hammer-breadcrumb-list {
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

      .hammer-breadcrumb-list a:hover {
        color: #F3E5AB;
      }

      .hammer-breadcrumb-sep {
        color: #D4AF37;
      }

      .hammer-veg-crest-inline {
        display: inline-flex;
        align-items: center;
        gap: 0.6rem;
        font-family: var(--font-technical);
        font-size: 0.72rem;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: #EAE6DF;
        padding: 0.35rem 0.85rem;
        border-left: 2px solid #2E8B57;
        background: linear-gradient(90deg, rgba(46, 139, 87, 0.18) 0%, rgba(5, 5, 7, 0) 100%);
      }

      .hammer-veg-crest-inline__dot {
        width: 7px;
        height: 7px;
        background-color: #2E8B57;
        display: inline-block;
      }

      .hammer-hero-stage__core {
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

      .hammer-hero-stage__editorial-col {
        flex: 1 1 56%;
        max-width: 880px;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
      }

      .hammer-hero-stage__visual-col {
        flex: 1 1 44%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
      }

      .hammer-hero-stage__pedestal {
        position: relative;
        width: 100%;
        max-width: 580px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem 1rem;
        background: radial-gradient(circle at 50% 48%, rgba(212, 175, 55, 0.16) 0%, rgba(46, 139, 87, 0.08) 38%, rgba(5, 5, 7, 0) 74%);
      }

      .hammer-hero-stage__bottle-img {
        width: clamp(270px, 34vw, 520px);
        max-height: 74vh;
        object-fit: contain;
        mask-image: radial-gradient(circle at 50% 50%, #000000 72%, transparent 98%);
        -webkit-mask-image: radial-gradient(circle at 50% 50%, #000000 72%, transparent 98%);
        filter: drop-shadow(0 34px 68px rgba(0, 0, 0, 0.95));
        transition: transform 480ms cubic-bezier(0.16, 1, 0.3, 1);
      }

      .hammer-hero-stage__bottle-caption {
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

      .hammer-label-transcription-strip {
        padding: 1.15rem 1.35rem;
        background-color: rgba(18, 20, 28, 0.78);
        border-left: 2px solid #D4AF37;
        border-top: 1px solid rgba(212, 175, 55, 0.18);
        border-bottom: 1px solid rgba(212, 175, 55, 0.18);
        display: flex;
        flex-direction: column;
        gap: 0.45rem;
      }

      .hammer-label-transcription-strip__eyebrow {
        font-family: var(--font-technical);
        font-size: 0.68rem;
        letter-spacing: 0.24em;
        text-transform: uppercase;
        color: #D4AF37;
      }

      .hammer-label-transcription-strip__exact {
        font-family: var(--font-architectural);
        font-size: 0.98rem;
        font-weight: 700;
        letter-spacing: 0.06em;
        color: #EAE6DF;
      }

      .hammer-label-transcription-strip__meta {
        font-family: var(--font-technical);
        font-size: 0.8rem;
        color: #B8B3A8;
      }

      .hammer-hpmc-telemetry-bar {
        display: flex;
        flex-wrap: wrap;
        align-items: stretch;
        justify-content: space-between;
        border-top: 1px solid rgba(212, 175, 55, 0.24);
        border-bottom: 1px solid rgba(212, 175, 55, 0.24);
        padding: 1.1rem 0;
        gap: 1.5rem;
      }

      .hammer-hpmc-telemetry-bar__item {
        flex: 1 1 160px;
        display: flex;
        flex-direction: column;
        gap: 0.2rem;
        padding-right: 1rem;
        border-right: 1px solid rgba(234, 230, 223, 0.09);
      }

      .hammer-hpmc-telemetry-bar__item:last-child {
        border-right: none;
      }

      .hammer-hpmc-telemetry-bar__label {
        font-family: var(--font-technical);
        font-size: 0.68rem;
        letter-spacing: 0.22em;
        text-transform: uppercase;
        color: #7E7A72;
      }

      .hammer-hpmc-telemetry-bar__val {
        font-family: var(--font-display);
        font-size: 1.45rem;
        font-weight: 600;
        color: #F3E5AB;
      }

      .hammer-hpmc-telemetry-bar__sub {
        font-family: var(--font-technical);
        font-size: 0.76rem;
        color: #B8B3A8;
      }

      .hammer-cta-cluster {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 1.15rem;
        margin-top: 0.5rem;
      }

      /* Section Horizons & Chapter Headers */
      .hammer-section-stage {
        position: relative;
        width: 100vw;
        background-color: #050507;
        border-bottom: 1px solid rgba(212, 175, 55, 0.24);
        padding: var(--gutter-vertical) var(--gutter-cinema);
      }

      .hammer-section-stage--onyx {
        background-color: #0B0C10;
      }

      .hammer-section-stage--charcoal {
        background-color: #12141C;
      }

      .hammer-section-inner {
        max-width: 1680px;
        width: 100%;
        margin: 0 auto;
      }

      .hammer-chapter-header {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: clamp(2.5rem, 5vh, 4.5rem);
        padding-bottom: 2rem;
        border-bottom: 1px solid rgba(212, 175, 55, 0.24);
      }

      .hammer-chapter-header__meta-row {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
      }

      .hammer-chapter-number {
        font-family: var(--font-technical);
        font-size: 0.74rem;
        letter-spacing: 0.28em;
        text-transform: uppercase;
        color: #D4AF37;
      }

      /* Botanical Active Monograph Ledger inside Paradigm D */
      .hammer-botanical-monograph-block {
        padding: 2.25rem 0;
        border-bottom: 1px solid rgba(212, 175, 55, 0.22);
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      .hammer-botanical-monograph-block:first-of-type {
        border-top: 1px solid rgba(212, 175, 55, 0.22);
      }

      .hammer-botanical-monograph-block__top {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        justify-content: space-between;
        gap: 1rem;
      }

      .hammer-botanical-monograph-block__code {
        font-family: var(--font-technical);
        font-size: 0.72rem;
        letter-spacing: 0.24em;
        text-transform: uppercase;
        color: #D4AF37;
      }

      .hammer-botanical-monograph-block__dosage {
        font-family: var(--font-display);
        font-size: 1.95rem;
        font-weight: 600;
        color: #F3E5AB;
      }

      .hammer-botanical-monograph-block__title {
        font-family: var(--font-display);
        font-size: clamp(1.65rem, 2.4vw, 2.25rem);
        font-weight: 500;
        color: #EAE6DF;
        line-height: 1.12;
      }

      .hammer-botanical-monograph-block__latin {
        font-family: var(--font-display);
        font-style: italic;
        font-size: 1.15rem;
        color: #D4AF37;
      }

      .hammer-botanical-monograph-block__standard {
        font-family: var(--font-technical);
        font-size: 0.78rem;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        color: #2E8B57;
        padding: 0.35rem 0;
        border-top: 1px solid rgba(46, 139, 87, 0.28);
        border-bottom: 1px solid rgba(46, 139, 87, 0.28);
      }

      .hammer-botanical-monograph-block__body {
        font-family: var(--font-technical);
        font-size: 0.96rem;
        line-height: 1.72;
        color: #B8B3A8;
      }

      .hammer-botanical-monograph-block__synergy {
        font-family: var(--font-technical);
        font-size: 0.85rem;
        color: #EAE6DF;
        padding-left: 1rem;
        border-left: 2px solid #D4AF37;
      }

      /* Semantic Comparison Matrix Table */
      .hammer-comparison-table-wrap {
        width: 100%;
        overflow-x: auto;
        border-top: 1px solid rgba(212, 175, 55, 0.32);
        border-bottom: 1px solid rgba(212, 175, 55, 0.32);
        margin: 2rem 0;
      }

      .hammer-comparison-table {
        width: 100%;
        min-width: 860px;
        border-collapse: collapse;
        text-align: left;
      }

      .hammer-comparison-table th,
      .hammer-comparison-table td {
        padding: 1.25rem 1.15rem;
        border-bottom: 1px solid rgba(234, 230, 223, 0.09);
        vertical-align: top;
      }

      .hammer-comparison-table thead th {
        font-family: var(--font-technical);
        font-size: 0.75rem;
        letter-spacing: 0.2em;
        text-transform: uppercase;
        color: #D4AF37;
        background-color: rgba(18, 20, 28, 0.9);
        border-bottom: 1px solid rgba(212, 175, 55, 0.28);
      }

      .hammer-comparison-table tbody th {
        font-family: var(--font-architectural);
        font-size: 0.88rem;
        font-weight: 600;
        color: #EAE6DF;
        width: 20%;
        background-color: rgba(11, 12, 16, 0.6);
      }

      .hammer-comparison-table td {
        font-family: var(--font-technical);
        font-size: 0.9rem;
        color: #B8B3A8;
      }

      .hammer-comparison-table__highlight-col {
        background-color: rgba(212, 175, 55, 0.06);
        color: #EAE6DF !important;
        border-left: 1px solid rgba(212, 175, 55, 0.24);
        border-right: 1px solid rgba(212, 175, 55, 0.24);
      }

      /* FAQ Accordion Ledger */
      .hammer-faq-ledger {
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
        .hammer-hero-stage__core {
          flex-direction: column;
        }
        .hammer-hero-stage__editorial-col,
        .hammer-hero-stage__visual-col {
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
 * Generates the complete Bahasa Malaysia body HTML (MS-107 to MS-108) for Hammer of Thor Malaysia.
 */
function buildHammerMsBodyHtml() {
  return `
      <!-- =====================================================================
           CHAPTER I (MS-107): 100vw x 100vh PENTAS SINEMATIK OBSIDIAN
           HAMMER OF THOR MALAYSIA (20 KAPSUL VEGETARIAN — TRIBULUS TERRESTRIS)
           ===================================================================== -->
      <section
        id="pentas-utama-hammer-of-thor"
        class="hammer-hero-stage cinema-stage-100vh"
        aria-labelledby="hammer-ms-hero-title"
      >
        <div class="hammer-hero-stage__ambient-watermark" aria-hidden="true">THOR · II</div>

        <!-- Top Breadcrumb & Vegetarian HPMC Verification Bar -->
        <div class="hammer-hero-stage__breadcrumb-bar">
          <nav aria-label="Laluan Navigasi Breadcrumb">
            <ol class="hammer-breadcrumb-list">
              <li><a href="/ms/">Utama Onyxmen</a></li>
              <li class="hammer-breadcrumb-sep" aria-hidden="true">/</li>
              <li><a href="/ms/produk/">4 Formulasi Apotekari</a></li>
              <li class="hammer-breadcrumb-sep" aria-hidden="true">/</li>
              <li aria-current="page">Hammer of Thor Malaysia (20 Kapsul Vegetarian)</li>
            </ol>
          </nav>

          <div class="hammer-veg-crest-inline">
            <span class="hammer-veg-crest-inline__dot" aria-hidden="true"></span>
            <span>LENCANA HIJAU RASMI · 100% KAPSUL VEGETARIAN HPMC · SKU: ONYX-HT-20</span>
          </div>
        </div>

        <!-- Main Hero Architectural Split Stage -->
        <div class="hammer-hero-stage__core">
          <!-- Left Editorial & Acquisition Column -->
          <div class="hammer-hero-stage__editorial-col">
            <p class="editorial-kicker">
              FORMULASI II · 20 KAPSUL VEGETARIAN × 500MG · PAKAR SAPONIN TRIBULUS TERRESTRIS
            </p>

            <h1 id="hammer-ms-hero-title" class="editorial-headline-xl">
              Hammer of Thor Malaysia —
              <span class="foil-champagne-text">Matriks Tribulus Terrestris Piawai</span>
              dalam Kapsul Vegetarian HPMC
            </h1>

            <p class="editorial-lead-paragraph hero-subtitle">
              Dirumus khusus untuk lelaki dewasa di Malaysia yang mengutamakan kapsul
              <strong>100% selulosa tumbuhan (20 Veg. Capsules — bebas gelatin haiwan)</strong>.
              Menggabungkan <strong>200mg ekstrak buah Tribulus Terrestris (60% saponin steroid)</strong>
              bersama Akar Maca Andes, L-Arginine Fermentasi Tumbuhan, Panax Ginseng,
              Tongkat Ali Malaysia 100:1, dan Zink Bisglisinat Terkelat untuk ketahanan stamina fizikal,
              pemulihan otot selepas latihan, serta keyakinan tenaga malam yang stabil.
            </p>

            <!-- Exact Physical Bottle Label Transcription Ledger -->
            <div class="hammer-label-transcription-strip" role="region" aria-label="Transkripsi Rasmi Label Botol Hammer of Thor">
              <span class="hammer-label-transcription-strip__eyebrow">
                TRANSKRIPSI TEPAT LABEL BOTOL RASMI ONYXMEN MALAYSIA
              </span>
              <p class="hammer-label-transcription-strip__exact">
                “HAMMER OF THOR · Men's Health — Tribulus Terrestris — 20 Veg. Capsules”
              </p>
              <p class="hammer-label-transcription-strip__meta">
                Terjemahan Rasmi: <strong>Kesihatan Lelaki — Tribulus Terrestris — 20 Kapsul Vegetarian</strong> ·
                Botol Hitam Obsidian Berkilat dengan Penutup Emas Metalik &amp; Lencana Hijau Vegetarian ·
                SKU: <code>ONYX-HT-20</code> · MPN: <code>HT-TRIB-20MY</code> · GTIN-13: <code>9550000102028</code>
              </p>
            </div>

            <!-- HPMC Plant-Cellulose Capsule Telemetry Ribbon -->
            <div class="hammer-hpmc-telemetry-bar" aria-label="Spesifikasi Teknikal Kapsul Vegetarian HPMC">
              <div class="hammer-hpmc-telemetry-bar__item">
                <span class="hammer-hpmc-telemetry-bar__label">SARUNG KAPSUL</span>
                <span class="hammer-hpmc-telemetry-bar__val">100% HPMC</span>
                <span class="hammer-hpmc-telemetry-bar__sub">Selulosa tumbuhan bebas gelatin haiwan</span>
              </div>
              <div class="hammer-hpmc-telemetry-bar__item">
                <span class="hammer-hpmc-telemetry-bar__label">KEPEKATAN UTAMA</span>
                <span class="hammer-hpmc-telemetry-bar__val">60% Saponin</span>
                <span class="hammer-hpmc-telemetry-bar__sub">200mg Tribulus Terrestris piawai</span>
              </div>
              <div class="hammer-hpmc-telemetry-bar__item">
                <span class="hammer-hpmc-telemetry-bar__label">KITARAN BEKALAN</span>
                <span class="hammer-hpmc-telemetry-bar__val">20 Hari</span>
                <span class="hammer-hpmc-telemetry-bar__sub">20 kapsul × 500mg (Peringatan Hari Ke-18)</span>
              </div>
              <div class="hammer-hpmc-telemetry-bar__item">
                <span class="hammer-hpmc-telemetry-bar__label">HARGA RASMI</span>
                <span class="hammer-hpmc-telemetry-bar__val">RM 159</span>
                <span class="hammer-hpmc-telemetry-bar__sub">1 Botol RM 159 · 2B RM 318 · 3B RM 477</span>
              </div>
            </div>

            <!-- Interactive 1 / 2 / 3 Bottle Tier Selector Strip (MS-107) -->
            <div
              class="tier-strip-group"
              role="radiogroup"
              aria-label="Pilih Pakej Botol Hammer of Thor Malaysia"
              data-hero-tier-selector="hammer-of-thor"
            >
              <!-- Tier 1: 1 Bottle = RM 159 -->
              <button
                type="button"
                class="tier-strip-option"
                data-open-order-drawer
                data-order-product="hammer-of-thor"
                data-order-qty="1"
                aria-label="Pilih 1 Botol Hammer of Thor (20 Kapsul Vegetarian) pada harga RM 159"
              >
                <div class="tier-strip-option__left">
                  <span class="tier-strip-option__eyebrow">
                    PILIHAN PERMULAAN VEGETARIAN · KITARAN 20 HARI · PERINGATAN HARI KE-18
                  </span>
                  <span class="tier-strip-option__title">
                    1 Botol — Bekalan 20 Kapsul Vegetarian Tribulus Terrestris
                  </span>
                  <span class="tier-strip-option__subtitle">
                    20 Kapsul HPMC × 500mg (10,000mg) · Penghantaran Ekspres Bungkusan Rahsia Percuma Semenanjung Malaysia (RM 12 Sabah/Sarawak)
                  </span>
                </div>
                <div class="tier-strip-option__price">RM 159</div>
              </button>

              <!-- Tier 2: 2 Bottles = RM 318 (Highlighted Selection) -->
              <button
                type="button"
                class="tier-strip-option tier-strip-option--selected"
                data-open-order-drawer
                data-order-product="hammer-of-thor"
                data-order-qty="2"
                aria-label="Pilih 2 Botol Hammer of Thor (40 Kapsul Vegetarian) pada harga RM 318"
              >
                <div class="tier-strip-option__left">
                  <span class="tier-strip-option__eyebrow">
                    PILIHAN UTAMA KAPSUL VEG DI KL, SELANGOR, PENANG &amp; JB · KITARAN 40 HARI
                  </span>
                  <span class="tier-strip-option__title">
                    2 Botol — Protokol Saponin Berterusan 40 Kapsul Vegetarian
                  </span>
                  <span class="tier-strip-option__subtitle">
                    40 Kapsul HPMC × 500mg (20,000mg) · Penghantaran Ekspres Rahsia Percuma Seluruh Malaysia (Termasuk Sabah, Sarawak &amp; Labuan)
                  </span>
                </div>
                <div class="tier-strip-option__price">RM 318</div>
              </button>

              <!-- Tier 3: 3 Bottles = RM 477 -->
              <button
                type="button"
                class="tier-strip-option"
                data-open-order-drawer
                data-order-product="hammer-of-thor"
                data-order-qty="3"
                aria-label="Pilih 3 Botol Hammer of Thor (60 Kapsul Vegetarian) pada harga RM 477"
              >
                <div class="tier-strip-option__left">
                  <span class="tier-strip-option__eyebrow">
                    PROTOKOL OPTIMUM 60 HARI · KEUTAMAAN PENGHANTARAN VIP &amp; PERINGATAN HARI KE-54
                  </span>
                  <span class="tier-strip-option__title">
                    3 Botol — Pakej Lengkap Kecergasan 60 Kapsul Vegetarian
                  </span>
                  <span class="tier-strip-option__subtitle">
                    60 Kapsul HPMC × 500mg (30,000mg) · Pelepasan Kurier Keutamaan + Penghantaran Rahsia Percuma Seluruh Malaysia + Khidmat VIP
                  </span>
                </div>
                <div class="tier-strip-option__price">RM 477</div>
              </button>
            </div>

            <!-- 1-Click Express Order Drawer Triggers -->
            <div class="hammer-cta-cluster">
              <button
                type="button"
                class="cta-foil-primary"
                data-open-order-drawer
                data-order-product="hammer-of-thor"
                data-order-qty="2"
              >
                <span>TEMPAH HAMMER OF THOR SEKARANG · RM 159 / BOTOL</span>
                <span aria-hidden="true">→</span>
              </button>

              <button
                type="button"
                class="cta-hairline-secondary"
                data-open-order-drawer
                data-order-product="hammer-of-thor"
                data-order-qty="1"
              >
                <span>PILIH 1 BOTOL PERMULAAN (RM 159)</span>
              </button>

              <a href="#analisis-6-ekstrak-botani" class="cta-hairline-secondary">
                <span>SEMAK 6 EKSTRAK BOTANI &amp; HPMC</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <!-- Right Studio Bottle Pedestal Column -->
          <div class="hammer-hero-stage__visual-col">
            <figure class="hammer-hero-stage__pedestal">
              <picture>
                <source srcset="/assets/products/hammer-of-thor-stage.webp" type="image/webp" />
                <img
                  src="/assets/products/hammer-of-thor-stage.png"
                  alt="Hammer of Thor Kesihatan Lelaki Tribulus Terrestris — 20 Kapsul Vegetarian Botol Rasmi Onyxmen Malaysia (RM 159)"
                  width="640"
                  height="820"
                  fetchpriority="high"
                  decoding="async"
                  class="hammer-hero-stage__bottle-img cinema-stage-100vh__bottle-render"
                  data-parallax-bottle
                />
              </picture>
              <figcaption class="hammer-hero-stage__bottle-caption">
                <span>BOTOL HITAM OBSIDIAN &amp; PENUTUP EMAS METALIK</span>
                <span>20 VEG. CAPSULES · TRIBULUS TERRESTRIS</span>
                <span>GTIN-13: 9550000102028</span>
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
                SEBOTOL (20 KAPSUL VEGETARIAN HPMC) · BUNGKUSAN LEGAP TANPA NAMA PRODUK · FPX / DUITNOW QR / COD MALAYSIA
              </span>
            </div>
            <div class="cinema-stage-100vh__price-meta">
              MEJA KHIDMAT PELANGGAN: <a href="mailto:sales@onyxmen.my">sales@onyxmen.my</a> ·
              <a href="mailto:info@onyxmen.my">info@onyxmen.my</a> ·
              <a href="/hammer-of-thor-malaysia/" hreflang="en-MY">VIEW IN ENGLISH (EN-MY) →</a>
            </div>
          </div>
        </div>
      </section>

      <!-- =====================================================================
           CHAPTER II (MS-108A): PARADIGM D PINNED 50vw / 50vw STAGE
           ANALISIS 6 EKSTRAK BOTANI & MINERAL PIAWAI (500MG SETIAP KAPSUL VEG)
           ===================================================================== -->
      <section
        id="analisis-6-ekstrak-botani"
        class="split-stage-5050"
        data-split-stage
        aria-labelledby="hammer-ms-botanicals-heading"
      >
        <!-- Left 50vw Pinned Visual Stage -->
        <div class="split-stage-5050__visual-pane">
          <div class="split-stage-5050__index-watermark" data-split-watermark aria-hidden="true">01</div>

          <figure class="split-stage-5050__visual-figure">
            <picture>
              <source srcset="/assets/products/hammer-of-thor-portrait.webp" type="image/webp" />
              <img
                src="/assets/products/hammer-of-thor-portrait.png"
                alt="Potret Studio Botol Hammer of Thor Malaysia — 20 Kapsul Vegetarian Tribulus Terrestris 500mg"
                width="540"
                height="720"
                loading="lazy"
                decoding="async"
                class="split-stage-5050__visual-img"
                data-split-visual-img
              />
            </picture>
          </figure>

          <div class="hammer-label-transcription-strip" style="margin-top: 1.5rem; width: 100%; max-width: 520px;">
            <span class="hammer-label-transcription-strip__eyebrow">
              KOMPOSISI TEPAT SETIAP 1 KAPSUL VEGETARIAN HPMC (500MG)
            </span>
            <p class="hammer-label-transcription-strip__exact">
              200mg Tribulus + 100mg Maca + 80mg L-Arginine + 60mg Panax Ginseng + 45mg Tongkat Ali + 15mg Zink = 500mg
            </p>
            <p class="hammer-label-transcription-strip__meta">
              Jumlah Kepekatan Sebotol (20 Kapsul Vegetarian): <strong>10,000mg (10g) Ekstrak Botani &amp; Mineral Tulen</strong> ·
              100% Bebas Bahan Kimia Sintetik PDE5 &amp; Bebas Gelatin Haiwan.
            </p>
          </div>
        </div>

        <!-- Right 50vw Scrolling Botanical Monograph Narrative Pane -->
        <div class="split-stage-5050__narrative-pane">
          <p class="editorial-kicker">
            BAB II · MONOGRAF FARMAKOGNOSI &amp; FITOKIMIA (500MG / KAPSUL VEG)
          </p>

          <h2 id="hammer-ms-botanicals-heading" class="editorial-headline-lg" style="margin: 0.85rem 0 1.25rem;">
            Analisis 6 Ekstrak Botani &amp; Mineral Terkelat di dalam
            <span class="foil-champagne-text">Hammer of Thor Malaysia</span>
          </h2>

          <p class="editorial-lead-paragraph" style="margin-bottom: 2.25rem;">
            Setiap kapsul vegetarian Hammer of Thor (<code>ONYX-HT-20</code>) dirumus mengikut nisbah miligram yang
            telus—menggabungkan <strong>fitosterol saponin Tribulus Terrestris</strong> sebagai pemacu utama bersama
            akar adaptogenik gunung, asid amino fermentasi tumbuhan, dan mineral surih terkelat. Tiada campuran
            rahsia (zero proprietary blend) dan tiada bahan pengisi tiruan.
          </p>

          <!-- Botanical Active 01: Tribulus Terrestris 200mg -->
          <article
            class="hammer-botanical-monograph-block architectural-ledger__row"
            data-botanical-step
            data-step-index="01"
            data-step-image="/assets/products/hammer-of-thor-portrait.webp"
          >
            <div class="hammer-botanical-monograph-block__top">
              <span class="hammer-botanical-monograph-block__code">
                HT-ACT-01 · PEMACU FITOSTEROL UTAMA (40% DARIPADA Jisim KAPSUL)
              </span>
              <span class="hammer-botanical-monograph-block__dosage">200 mg</span>
            </div>
            <h3 class="hammer-botanical-monograph-block__title">
              Ekstrak Buah &amp; Bahagian Aerial Tribulus Terrestris Bersaponin Tinggi
            </h3>
            <p class="hammer-botanical-monograph-block__latin">
              Tribulus terrestris L. — Dipiawaikan kepada 60% Saponin Steroid (Fraksi Furostanol &amp; Protodioscin)
            </p>
            <p class="hammer-botanical-monograph-block__standard">
              PIAWAIN FITOKIMIA: 120MG SAPONIN STEROID AKTIF SETIAP KAPSUL · TERTERA PADA LABEL HADAPAN BOTOL
            </p>
            <p class="hammer-botanical-monograph-block__body">
              Sebagai bahan utama yang dinamakan secara khusus pada label hadapan botol
              (<em>“Men's Health — Tribulus Terrestris — 20 Veg. Capsules”</em>), ekstrak 200mg ini membekalkan
              kepekatan tinggi saponin furostanol, khususnya protodioscin. Di dalam fisiologi lelaki dewasa,
              saponin steroid menyokong daya tahan otot rangka, mempercepatkan pemulihan fizikal selepas latihan
              bebanan atau hari kerja yang panjang, serta mengekalkan kecergasan tenaga malam secara konsisten.
            </p>
            <p class="hammer-botanical-monograph-block__synergy">
              <strong>Sinergi Formulasi:</strong> Digandingkan bersama 15mg Zink Bisglisinat dan 45mg Tongkat Ali
              Malaysia untuk memastikan sokongan vitaliti harian yang mantap tanpa gangguan kelesuan.
            </p>
          </article>

          <!-- Botanical Active 02: Andean Maca Root 100mg -->
          <article
            class="hammer-botanical-monograph-block architectural-ledger__row"
            data-botanical-step
            data-step-index="02"
            data-step-image="/assets/products/hammer-of-thor-stage.webp"
          >
            <div class="hammer-botanical-monograph-block__top">
              <span class="hammer-botanical-monograph-block__code">
                HT-ACT-02 · ADAPTOGEN KETAHANAN FIZIKAL &amp; TENAGA MALAM
              </span>
              <span class="hammer-botanical-monograph-block__dosage">100 mg</span>
            </div>
            <h3 class="hammer-botanical-monograph-block__title">
              Ekstrak Ubi Akar Maca Andes Peru Berkepekatan Tinggi
            </h3>
            <p class="hammer-botanical-monograph-block__latin">
              Lepidium meyenii Walp. — Ekstrak Ubi Akar Pekat Nisbah 10:1 (Macamides &amp; Macaenes)
            </p>
            <p class="hammer-botanical-monograph-block__standard">
              PIAWAIN FITOKIMIA: BERSAMAAN 1,000MG AKAR MACA KERING ASLI · BEBAS PERANGSANG KAFEIN
            </p>
            <p class="hammer-botanical-monograph-block__body">
              Dituai daripada dataran tinggi Andes Peru, ekstrak akar Maca 10:1 membekalkan glukosinolat serta
              alkamid bioaktif (macamides dan macaenes). Ia berfungsi secara harmoni dengan saponin Tribulus
              untuk meningkatkan stamina fizikal dan keinginan tenaga malam tanpa merangsang sistem saraf pusat
              secara berlebihan—membolehkan anda kekal tenang, fokus, dan bertenaga tanpa rasa gelisah atau sukar tidur.
            </p>
            <p class="hammer-botanical-monograph-block__synergy">
              <strong>Sinergi Formulasi:</strong> Melengkapkan tindakan Tribulus Terrestris dengan membekalkan
              sokongan tenaga selular berpanjangan sepanjang kitaran 20 hari.
            </p>
          </article>

          <!-- Botanical Active 03: Plant-Fermented L-Arginine 80mg -->
          <article
            class="hammer-botanical-monograph-block architectural-ledger__row"
            data-botanical-step
            data-step-index="03"
            data-step-image="/assets/products/hammer-of-thor-cutout.webp"
          >
            <div class="hammer-botanical-monograph-block__top">
              <span class="hammer-botanical-monograph-block__code">
                HT-ACT-03 · PREKURSOR LALUAN NITRIK OKSIDA ENDOTELIAL
              </span>
              <span class="hammer-botanical-monograph-block__dosage">80 mg</span>
            </div>
            <h3 class="hammer-botanical-monograph-block__title">
              Asid Amino L-Arginine Fermentasi Tumbuhan Tulen
            </h3>
            <p class="hammer-botanical-monograph-block__latin">
              L-Arginine Base — 99% Asid Amino Bebas Hasil Fermentasi Glukosa Tumbuhan (100% Vegan)
            </p>
            <p class="hammer-botanical-monograph-block__standard">
              PIAWAIN FITOKIMIA: FERMENTASI SUMBER TUMBUHAN SEPENUHNYA · SOKONGAN MIKRO-SIRKULASI VASKULAR
            </p>
            <p class="hammer-botanical-monograph-block__body">
              Bagi mengekalkan status vegetarian sepenuhnya pada Hammer of Thor, L-Arginine di dalam formulasi ini
              dihasilkan melalui proses fermentasi karbohidrat tumbuhan semula jadi dan bukannya hidrolisis bulu
              atau keratin haiwan. L-Arginine bertindak sebagai substrat langsung bagi penghasilan nitrik oksida (NO)
              pada lapisan endotelium salur darah, menyokong kelancaran pengaliran oksigen dan nutrien botani ke
              tisu otot semasa bersenam mahupun pada waktu malam.
            </p>
            <p class="hammer-botanical-monograph-block__synergy">
              <strong>Sinergi Formulasi:</strong> Mempercepatkan pengangkutan saponin Tribulus dan ginsenosida
              Panax Ginseng ke seluruh sistem peredaran mikro.
            </p>
          </article>

          <!-- Botanical Active 04: Panax Ginseng 60mg -->
          <article
            class="hammer-botanical-monograph-block architectural-ledger__row"
            data-botanical-step
            data-step-index="04"
            data-step-image="/assets/products/hammer-of-thor-portrait.webp"
          >
            <div class="hammer-botanical-monograph-block__top">
              <span class="hammer-botanical-monograph-block__code">
                HT-ACT-04 · KETAHANAN ANTI-KELESUAN &amp; FOKUS KARDIORESPIRATORI
              </span>
              <span class="hammer-botanical-monograph-block__dosage">60 mg</span>
            </div>
            <h3 class="hammer-botanical-monograph-block__title">
              Ekstrak Akar Panax Ginseng Piawai
            </h3>
            <p class="hammer-botanical-monograph-block__latin">
              Panax ginseng C.A. Mey. — Dipiawaikan kepada 10% Kompleks Fitokimia Ginsenosida (Rg1, Rb1, Rg3)
            </p>
            <p class="hammer-botanical-monograph-block__standard">
              PIAWAIN FITOKIMIA: 10% GINSENOSIDA AKTIF · DAYA TAHAN CUACA TROPIKA &amp; TEKANAN KERJA
            </p>
            <p class="hammer-botanical-monograph-block__body">
              Cuaca panas lembap di Malaysia serta jadual kerja korporat yang padat di Kuala Lumpur, Pulau Pinang,
              dan Johor Bahru sering menyebabkan keletihan fizikal pada waktu petang. Ekstrak akar Panax Ginseng
              60mg (10% ginsenosida) menyokong kecekapan penggunaan oksigen selular, mengurangkan kelesuan otot,
              dan mengekalkan ketajaman fokus mental dari waktu siang hingga ke lewat malam.
            </p>
            <p class="hammer-botanical-monograph-block__synergy">
              <strong>Sinergi Formulasi:</strong> Bekerjasama dengan L-Arginine untuk menyokong tona vaskular dan
              daya tahan kardiorespiratori.
            </p>
          </article>

          <!-- Botanical Active 05: Malaysian Tongkat Ali 45mg -->
          <article
            class="hammer-botanical-monograph-block architectural-ledger__row"
            data-botanical-step
            data-step-index="05"
            data-step-image="/assets/products/hammer-of-thor-stage.webp"
          >
            <div class="hammer-botanical-monograph-block__top">
              <span class="hammer-botanical-monograph-block__code">
                HT-ACT-05 · FITOKIMIA QUASSINOID &amp; EURYCOMANONE TEMPATAN
              </span>
              <span class="hammer-botanical-monograph-block__dosage">45 mg</span>
            </div>
            <h3 class="hammer-botanical-monograph-block__title">
              Ekstrak Akar Tongkat Ali Malaysia Larut Air
            </h3>
            <p class="hammer-botanical-monograph-block__latin">
              Eurycoma longifolia Jack — Ekstrak Akar Matang Nisbah 100:1 (Quassinoid &amp; Eurypeptides)
            </p>
            <p class="hammer-botanical-monograph-block__standard">
              PIAWAIN FITOKIMIA: EKSTRAK AIR TULEN 100:1 · WARISAN BOTANI HUTAN HUJAN MALAYSIA
            </p>
            <p class="hammer-botanical-monograph-block__body">
              Walaupun Hammer of Thor diterajui oleh 200mg Tribulus Terrestris, penambahan 45mg ekstrak akar
              Tongkat Ali Malaysia (100:1) melengkapkan profil fitokimia kapsul ini dengan quassinoid semula jadi
              (eurycomanone) dan eurypeptides. Ia membantu mengekalkan keseimbangan tenaga lelaki dewasa,
              mengurangkan kesan tekanan harian (kortisol), dan memperkukuh ketahanan fizikal jangka panjang.
            </p>
            <p class="hammer-botanical-monograph-block__synergy">
              <strong>Sinergi Formulasi:</strong> Menggabungkan kekuatan saponin Tribulus Eropah/Mediterranean
              dengan bioaktif akar Tongkat Ali Nusantara.
            </p>
          </article>

          <!-- Botanical Active 06: Zinc Bisglycinate Chelate 15mg -->
          <article
            class="hammer-botanical-monograph-block architectural-ledger__row"
            data-botanical-step
            data-step-index="06"
            data-step-image="/assets/products/hammer-of-thor-cutout.webp"
          >
            <div class="hammer-botanical-monograph-block__top">
              <span class="hammer-botanical-monograph-block__code">
                HT-ACT-06 · KOFAKTOR MINERAL SURIH TERKELAT PENYERAPAN TINGGI
              </span>
              <span class="hammer-botanical-monograph-block__dosage">15 mg</span>
            </div>
            <h3 class="hammer-botanical-monograph-block__title">
              Matriks Mineral Zink Bisglisinat Terkelat
            </h3>
            <p class="hammer-botanical-monograph-block__latin">
              Zinc Bisglycinate Chelate — 15mg Zink Elemen Terikat Dua Molekul Asid Amino Glisina
            </p>
            <p class="hammer-botanical-monograph-block__standard">
              PIAWAIN FITOKIMIA: BIOKETERSEDIAAN TINGGI · TIDAK MENYEBABKAN LOYA PERUT SEPERTI ZINK OKSIDA
            </p>
            <p class="hammer-botanical-monograph-block__body">
              Lelaki yang aktif bersenam atau bekerja di dalam cuaca panas Malaysia kehilangan mineral Zink melalui
              peluh setiap hari. Berbeza dengan zink oksida atau zink sulfat murah yang sukar diserap dan boleh
              menyebabkan rasa loya, Zink Bisglisinat Terkelat diikat pada asid amino glisina supaya diserap dengan
              mudah melalui dinding usus. Zink ialah mineral asas yang amat penting untuk sintesis protein otot,
              fungsi sistem pembiakan lelaki yang sihat, dan daya tahan imun.
            </p>
            <p class="hammer-botanical-monograph-block__synergy">
              <strong>Sinergi Formulasi:</strong> Bertindak sebagai kofaktor enzim penting yang memaksimumkan
              manfaat kitaran 20 hari Tribulus Terrestris.
            </p>
          </article>

          <!-- Direct Action Trigger inside Monograph Pane -->
          <div class="hammer-cta-cluster" style="margin-top: 2.5rem;">
            <button
              type="button"
              class="cta-foil-primary"
              data-open-order-drawer
              data-order-product="hammer-of-thor"
              data-order-qty="2"
            >
              <span>MULAKAN PROTOKOL 6 RAMUAN INI · RM 159 / BOTOL</span>
              <span aria-hidden="true">→</span>
            </button>
            <a href="/ms/ramuan-botani/" class="cta-hairline-secondary">
              <span>TEROKA ENSIKLOPEDIA RAMUAN BOTANI ONYXMEN</span>
            </a>
          </div>
        </div>
      </section>

      <!-- =====================================================================
           CHAPTER III (MS-108B): KEJURUTERAAN KAPSUL SELULOSA TUMBUHAN HPMC
           KENAPA "20 VEG. CAPSULES" PENTING UNTUK IKLIM TROPIKA MALAYSIA
           ===================================================================== -->
      <section
        id="spesifikasi-kapsul-vegetarian-hpmc"
        class="hammer-section-stage hammer-section-stage--onyx"
        aria-labelledby="hammer-ms-hpmc-heading"
      >
        <div class="hammer-section-inner">
          <header class="hammer-chapter-header">
            <div class="hammer-chapter-header__meta-row">
              <span class="hammer-chapter-number">
                BAB III · SPESIFIKASI SARUNG KAPSUL SELULOSA TUMBUHAN (HPMC)
              </span>
              <span class="hammer-veg-crest-inline">
                <span class="hammer-veg-crest-inline__dot" aria-hidden="true"></span>
                <span>100% BEBAS GELATIN HAIWAN (ZERO BOVINE / PORCINE GELATIN)</span>
              </span>
            </div>
            <h2 id="hammer-ms-hpmc-heading" class="editorial-headline-lg">
              Mengapakah Hammer of Thor Menggunakan
              <span class="foil-champagne-text">20 Kapsul Vegetarian HPMC</span>?
            </h2>
            <p class="editorial-lead-paragraph">
              Pada label hadapan botol Hammer of Thor Malaysia, cetakan
              <strong>“Men's Health — Tribulus Terrestris — 20 Veg. Capsules”</strong> bersama lencana hijau
              vegetarian bukan sekadar hiasan grafik. Ia mewakili kejuruteraan kapsul selulosa tumbuhan
              <em>Hypromellose (HPMC)</em> gred farmaseutikal yang direka khusus untuk melindungi ekstrak
              higroskopik (mudah menyerap lembapan) seperti Tribulus Terrestris dalam iklim khatulistiwa Malaysia.
            </p>
          </header>

          <!-- Architectural Hairline Ledger: 5 Technical Pillars of HPMC Vegetarian Shells -->
          <div class="architectural-ledger" role="list" aria-label="5 Kelebihan Utama Kapsul Vegetarian HPMC">
            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">HPMC-01</span>
              <h3 class="architectural-ledger__title">
                100% Selulosa Serat Tumbuhan (Bebas Gelatin Bovin &amp; Porsin)
              </h3>
              <p class="architectural-ledger__detail">
                Dihasilkan sepenuhnya daripada selulosa serat pokok pain dan kapas semula jadi tanpa sebarang
                sumber kolagen atau gelatin haiwan. Ini memberikan ketenangan fikiran sepenuhnya kepada pengguna
                lelaki di Malaysia yang mementingkan kebersihan sumber kapsul serta diet berasaskan tumbuhan.
              </p>
              <span class="architectural-ledger__metric">100% SUMBER TUMBUHAN</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">HPMC-02</span>
              <h3 class="architectural-ledger__title">
                Kandungan Lembapan Rendah (3%–6%) — Tidak Melekit dalam Cuaca Malaysia
              </h3>
              <p class="architectural-ledger__detail">
                Kapsul gelatin haiwan biasa mengandungi 13% hingga 16% air, menyebabkannya mudah lembik, melekit
                antara satu sama lain, atau berubah bentuk apabila terdedah kepada suhu 30°C–34°C dan kelembapan
                80% di Malaysia. Sarung HPMC Hammer of Thor mempunyai kandungan lembapan ultra-rendah (3%–6%),
                memastikan setiap kapsul kekal keras, kering, dan segar dari kapsul pertama hingga kapsul ke-20.
              </p>
              <span class="architectural-ledger__metric">STABIL SUHU TROPIKA</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">HPMC-03</span>
              <h3 class="architectural-ledger__title">
                Perlindungan Unggul Terhadap Saponin Tribulus Higroskopik
              </h3>
              <p class="architectural-ledger__detail">
                Ekstrak pekat Tribulus Terrestris (60% saponin) dan Tongkat Ali (100:1) bersifat sangat aktif
                menarik molekul air dari udara. Jika disimpan di dalam kapsul gelatin biasa, ekstrak ini akan
                menarik air daripada dinding kapsul lalu menyebabkan kapsul rapuh (cross-linking). Sarung HPMC
                tidak bertindak balas secara kimia dengan saponin, mengekalkan potensi penuh 500mg setiap kapsul.
              </p>
              <span class="architectural-ledger__metric">TIADA TINDAK BALAS SILANG</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">HPMC-04</span>
              <h3 class="architectural-ledger__title">
                Pelarutan Gastrik Bersih dalam 12–18 Minit Tanpa Rasa Senak
              </h3>
              <p class="architectural-ledger__detail">
                Direka untuk larut dengan sekata sebaik sahaja diambil bersama 250ml air suam selepas makan malam.
                Ia membebaskan 200mg Tribulus Terrestris, 100mg Maca, dan 80mg L-Arginine secara lancar tanpa
                meninggalkan bau hanyir gelatin atau rasa berat pada perut.
              </p>
              <span class="architectural-ledger__metric">12–18 MINIT PELARUTAN</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">HPMC-05</span>
              <h3 class="architectural-ledger__title">
                Bebas Pewarna Tiruan Titanium Dioksida &amp; Bebas Pengawet Sintetik
              </h3>
              <p class="architectural-ledger__detail">
                Sarung kapsul vegetarian Hammer of Thor tidak menggunakan agen pemutih sintetik atau bahan pengawet
                paraben. Dipadankan dengan pek penyerap lembapan (desiccant sachet) gred makanan dan penutup emas
                metalik kedap udara bagi menjamin ketulenan apotekari.
              </p>
              <span class="architectural-ledger__metric">GRED APOTEKARI TULEN</span>
            </div>
          </div>
        </div>
      </section>

      <!-- =====================================================================
           CHAPTER IV (MS-108C): KITARAN 20 HARI, DUA MOD PENGAMBILAN &
           PERINGATAN ISIAN SEMULA HARI KE-18 (DAY-18 REFILL PROTOCOL)
           ===================================================================== -->
      <section
        id="kitaran-20-hari-dan-peringatan-hari-18"
        class="hammer-section-stage"
        aria-labelledby="hammer-ms-cycle-heading"
      >
        <div class="hammer-section-inner">
          <header class="hammer-chapter-header">
            <div class="hammer-chapter-header__meta-row">
              <span class="hammer-chapter-number">
                BAB IV · PROTOKOL KITARAN 20 HARI &amp; KESINAMBUNGAN BEKALAN HARI KE-18
              </span>
              <span class="editorial-kicker">1 KAPSUL VEGETARIAN × 500MG SEHARI</span>
            </div>
            <h2 id="hammer-ms-cycle-heading" class="editorial-headline-lg">
              Jadual Penyerapan Biologi 20 Hari &amp;
              <span class="foil-champagne-text">Peringatan Bekalan Hari Ke-18</span>
            </h2>
            <p class="editorial-lead-paragraph">
              Tidak seperti produk kimia sintetik yang hanya memberi kesan sementara selama beberapa jam,
              kompleks <strong>saponin steroid Tribulus Terrestris (200mg)</strong> dan
              <strong>Zink Bisglisinat (15mg)</strong> di dalam Hammer of Thor membina ketepuan tisu secara
              berperingkat sepanjang kitaran 20 hari.
            </p>
          </header>

          <!-- 2 Official Intake Modes Ledger -->
          <div class="architectural-ledger" style="margin-bottom: 3.5rem;" aria-label="Dua Mod Pengambilan Rasmi Hammer of Thor">
            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">PROTOKOL A</span>
              <h3 class="architectural-ledger__title">
                Penjagaan Saponin Harian Selepas Makan Malam (Disyorkan untuk Kitaran 20–60 Hari)
              </h3>
              <p class="architectural-ledger__detail">
                Ambil <strong>1 kapsul vegetarian (500mg)</strong> setiap malam kira-kira <strong>30 minit selepas makan malam</strong>
                bersama 250ml air suam. Pengambilan selepas makan memastikan penyerapan optimum saponin steroid
                larut lemak serta mineral Zink Bisglisinat semasa badan menjalani fasa pemulihan semula jadi pada
                waktu tidur.
              </p>
              <span class="architectural-ledger__metric">1 KAPSUL SELEPAS MAKAN MALAM</span>
            </div>

            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">PROTOKOL B</span>
              <h3 class="architectural-ledger__title">
                Sokongan Sebelum Latihan Bebanan Gimnasium atau Aktiviti Malam
              </h3>
              <p class="architectural-ledger__detail">
                Pada hari anda menjalani latihan bebanan (resistance training) atau memerlukan stamina fizikal malam
                yang tinggi, ambil <strong>1 kapsul vegetarian 45 minit sebelum aktiviti</strong> bersama 300ml air
                kosong. Gabungan 80mg L-Arginine tumbuhan dan 60mg Panax Ginseng menyokong pengaliran darah otot
                serta ketahanan anti-kelesuan.
              </p>
              <span class="architectural-ledger__metric">45 MINIT SEBELUM AKTIVITI</span>
            </div>
          </div>

          <!-- 5-Stage 20-Day Biological Progression Timeline Ledger -->
          <h3 class="editorial-headline-lg" style="font-size: clamp(1.65rem, 2.6vw, 2.5rem); margin-bottom: 1.5rem;">
            Garis Masa Kitaran 20 Kapsul Vegetarian (Hari 1 hingga Hari 20)
          </h3>

          <div class="architectural-ledger" role="list" aria-label="Garis Masa Kitaran 20 Hari Hammer of Thor">
            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">HARI 01–04</span>
              <h4 class="architectural-ledger__title">
                Fasa I: Pelarutan Bersih Kapsul HPMC &amp; Pengaktifan L-Arginine / Ginseng
              </h4>
              <p class="architectural-ledger__detail">
                Sarung kapsul vegetarian HPMC larut dengan bersih tanpa rasa senak perut. 80mg L-Arginine
                fermentasi tumbuhan dan 60mg Panax Ginseng mula menyokong kesegaran fizikal siang dan malam,
                mengurangkan rasa lesu selepas waktu pejabat.
              </p>
              <span class="architectural-ledger__metric">KAPSUL #1 HINGGA #4</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">HARI 05–10</span>
              <h4 class="architectural-ledger__title">
                Fasa II: Pengumpulan Saponin Tribulus (60%) &amp; Penyerapan Zink Terkelat
              </h4>
              <p class="architectural-ledger__detail">
                Kepekatan saponin furostanol daripada 200mg Tribulus Terrestris dan 15mg Zink Bisglisinat mula
                meningkat secara konsisten. Pengguna yang aktif bersenam akan mula merasai pemulihan otot yang
                lebih pantas serta peningkatan daya tahan fizikal.
              </p>
              <span class="architectural-ledger__metric">KAPSUL #5 HINGGA #10</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">HARI 11–17</span>
              <h4 class="architectural-ledger__title">
                Fasa III: Sinergi Penuh 6 Ekstrak (Tribulus + Maca Andes + Tongkat Ali Malaysia)
              </h4>
              <p class="architectural-ledger__detail">
                Sinergi adaptogenik antara Tribulus Terrestris, 100mg Akar Maca Peru, dan 45mg Tongkat Ali
                Malaysia mencapai tahap keseimbangan optimum—menyokong stamina malam yang mantap, kekuatan otot,
                dan keyakinan fizikal tanpa debaran jantung.
              </p>
              <span class="architectural-ledger__metric">KAPSUL #11 HINGGA #17</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">HARI KE-18</span>
              <h4 class="architectural-ledger__title">
                Fasa IV: Titik Peringatan Isian Semula Hari Ke-18 (Baki 2 Kapsul Terakhir)
              </h4>
              <p class="architectural-ledger__detail">
                Pada Hari Ke-18, botol pertama anda mempunyai baki <strong>2 kapsul vegetarian</strong> (untuk Hari
                Ke-19 dan Hari Ke-20). Peringatan Google Calendar &amp; WhatsApp Onyxmen akan berbunyi pada hari ini
                supaya anda boleh mengesahkan penghantaran ekspres 1–2 hari bekerja bagi botol seterusnya (atau
                beralih terus ke botol kedua jika anda memilih Pakej 2 Botol RM 318).
              </p>
              <span class="architectural-ledger__metric">PERINGATAN HARI KE-18</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">HARI 19–60</span>
              <h4 class="architectural-ledger__title">
                Fasa V: Kesinambungan Kitaran Kedua (40 Hari) &amp; Kitaran Ketiga (60 Hari)
              </h4>
              <p class="architectural-ledger__detail">
                Dengan menyambung terus ke botol kedua (Hari 21–40, peringatan pada Hari Ke-36) atau botol ketiga
                (Hari 41–60, peringatan pada Hari Ke-54), tahap saponin steroid dan mineral Zink kekal stabil pada
                paras kemuncak tanpa sebarang jurang gangguan bekalan.
              </p>
              <span class="architectural-ledger__metric">KITARAN PENUH 40 / 60 HARI</span>
            </div>
          </div>

          <!-- Refill Continuity CTA Box -->
          <div class="hammer-label-transcription-strip" style="margin-top: 2.5rem;">
            <span class="hammer-label-transcription-strip__eyebrow">
              CADANGAN PAKAR APOTEKARI ONYXMEN MALAYSIA UNTUK KESINAMBUNGAN TANPA GANGGUAN
            </span>
            <p class="hammer-label-transcription-strip__exact">
              Elakkan Gangguan Bekalan pada Hari Ke-20: Pilih Pakej 2 Botol (40 Kapsul Vegetarian — RM 318) atau 3 Botol (60 Kapsul Vegetarian — RM 477)
            </p>
            <p class="hammer-label-transcription-strip__meta">
              78% pelanggan Hammer of Thor di Kuala Lumpur, Selangor, Pulau Pinang, dan Johor memilih pakej
              <strong>2 Botol (RM 318)</strong> supaya mereka memiliki bekalan penuh 40 hari dengan Penghantaran
              Ekspres Rahsia Percuma ke seluruh Malaysia (termasuk Sabah &amp; Sarawak).
            </p>
            <div class="hammer-cta-cluster" style="margin-top: 1rem;">
              <button
                type="button"
                class="cta-foil-primary"
                data-open-order-drawer
                data-order-product="hammer-of-thor"
                data-order-qty="2"
              >
                <span>PILIH PAKEJ 2 BOTOL (40 KAPSUL VEG · RM 318)</span>
                <span aria-hidden="true">→</span>
              </button>
              <button
                type="button"
                class="cta-hairline-secondary"
                data-open-order-drawer
                data-order-product="hammer-of-thor"
                data-order-qty="3"
              >
                <span>PILIH PAKEJ 3 BOTOL (60 KAPSUL VEG · RM 477)</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- =====================================================================
           CHAPTER V (MS-108D): JADUAL PERBANDINGAN RASMI 4 FORMULASI ONYXMEN
           HAMMER OF THOR VS HORSEMEN VS GROW XL VS MAGNUM PUMP XR
           ===================================================================== -->
      <section
        id="perbandingan-hammer-of-thor-vs-formulasi-lain"
        class="hammer-section-stage hammer-section-stage--onyx"
        aria-labelledby="hammer-ms-compare-heading"
      >
        <div class="hammer-section-inner">
          <header class="hammer-chapter-header">
            <div class="hammer-chapter-header__meta-row">
              <span class="hammer-chapter-number">
                BAB V · MATRIKS PERBANDINGAN 4 FORMULASI APOTEKARI ONYXMEN (RM 159 SEBOTOL)
              </span>
              <a href="/ms/perbandingan/" class="editorial-kicker">
                LIHAT PORTAL PERBANDINGAN PENUH →
              </a>
            </div>
            <h2 id="hammer-ms-compare-heading" class="editorial-headline-lg">
              Bagaimanakah <span class="foil-champagne-text">Hammer of Thor</span> Berbanding
              Horsemen, Grow XL &amp; Magnum Pump XR?
            </h2>
            <p class="editorial-lead-paragraph comparison-summary">
              Kesemua empat formulasi rasmi Onyxmen Malaysia ditawarkan pada harga seragam
              <strong>RM 159 sebotol (2 Botol RM 318 · 3 Botol RM 477)</strong> supaya anda boleh memilih
              berdasarkan keperluan biologi, jenis sarung kapsul, dan jadual pengambilan anda—bukan berdasarkan
              perbezaan harga.
            </p>
          </header>

          <!-- Full Semantic Comparison Table -->
          <div class="hammer-comparison-table-wrap" role="region" aria-label="Jadual Perbandingan 4 Produk Onyxmen Malaysia" tabindex="0">
            <table class="hammer-comparison-table">
              <thead>
                <tr>
                  <th scope="col">Spesifikasi &amp; Parameter</th>
                  <th scope="col" class="hammer-comparison-table__highlight-col">
                    Hammer of Thor (Pilihan Semasa)
                  </th>
                  <th scope="col">Horsemen</th>
                  <th scope="col">Grow XL</th>
                  <th scope="col">Magnum Pump XR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Transkripsi Label Botol</th>
                  <td class="hammer-comparison-table__highlight-col">
                    <strong>Men's Health — Tribulus Terrestris — 20 Veg. Capsules</strong>
                  </td>
                  <td>Men's Stamina — Tongkat Ali &amp; Maca — 20 Capsules (500mg)</td>
                  <td>Men's Vitality — Daily Botanical Protocol — 30 Capsules</td>
                  <td>Extended Release — Nitric Oxide Vascular Complex — 30 Black Capsules</td>
                </tr>
                <tr>
                  <th scope="row">SKU &amp; MPN Rasmi</th>
                  <td class="hammer-comparison-table__highlight-col">
                    SKU: <code>ONYX-HT-20</code><br />MPN: <code>HT-TRIB-20MY</code><br />GTIN: <code>9550000102028</code>
                  </td>
                  <td>SKU: <code>ONYX-HM-20</code><br />GTIN: <code>9550000102011</code></td>
                  <td>SKU: <code>ONYX-GX-30</code><br />GTIN: <code>9550000102035</code></td>
                  <td>SKU: <code>ONYX-MP-30</code><br />GTIN: <code>9550000102042</code></td>
                </tr>
                <tr>
                  <th scope="row">Bilangan &amp; Jenis Kapsul</th>
                  <td class="hammer-comparison-table__highlight-col">
                    <strong>20 Kapsul Vegetarian HPMC × 500mg</strong> (100% Selulosa Tumbuhan, Lencana Hijau)
                  </td>
                  <td>20 Kapsul Apotekari × 500mg (10,000mg Berat Bersih)</td>
                  <td>30 Kapsul Harian × 500mg (Kitaran Penuh 30 Hari)</td>
                  <td>30 Kapsul Hitam Pelepasan Lanjutan × 550mg</td>
                </tr>
                <tr>
                  <th scope="row">Teras Fitokimia Utama</th>
                  <td class="hammer-comparison-table__highlight-col">
                    <strong>Tribulus Terrestris 200mg (60% Saponin)</strong> + Maca 100mg + L-Arginine 80mg + Panax Ginseng 60mg + Tongkat Ali 45mg + Zink 15mg
                  </td>
                  <td>Tongkat Ali Malaysia 100:1 + Maca Hitam Peru + Panax Ginseng Merah + Epimedium + L-Arginine HCl</td>
                  <td>Panax Ginseng + Ginkgo Biloba + Saw Palmetto + Muira Puama + L-Citrulline Malate + Vitamin B3</td>
                  <td>L-Arginine AAKG + L-Citrulline + Ekstrak Nitrat Ubi Bit + Kunyit Hitam (Black Ginger) + Kulit Pain Maritim</td>
                </tr>
                <tr>
                  <th scope="row">Fokus Prestasi Utama</th>
                  <td class="hammer-comparison-table__highlight-col">
                    <strong>Ketahanan Stamina Fizikal, Pemulihan Otot Gimnasium &amp; Kapsul 100% Vegetarian</strong>
                  </td>
                  <td>Kesediaan Tenaga Malam Pantas (45–60 Minit) &amp; Daya Tahan Adaptogenik</td>
                  <td>Nutrisi Aliran Mikro Harian 30 Hari &amp; Kecergasan Asas Sepanjang Hari</td>
                  <td>Sokongan Prekursor Nitrik Oksida, Aliran Vaskular Senaman &amp; Prestasi Malam</td>
                </tr>
                <tr>
                  <th scope="row">Masa Pengambilan Optimum</th>
                  <td class="hammer-comparison-table__highlight-col">
                    <strong>1 kapsul 30 minit selepas makan malam</strong> (atau 45 minit sebelum latihan bebanan)
                  </td>
                  <td>1 kapsul 45–60 minit sebelum aktiviti malam (atau setiap 48 jam)</td>
                  <td>1 kapsul setiap pagi selepas sarapan selama 30 hari</td>
                  <td>1 kapsul 30–45 minit sebelum senaman gimnasium atau aktiviti malam</td>
                </tr>
                <tr>
                  <th scope="row">Kitaran Isian Semula</th>
                  <td class="hammer-comparison-table__highlight-col">
                    <strong>Peringatan Hari Ke-18</strong> (Kitaran 20 Hari)
                  </td>
                  <td>Peringatan Hari Ke-18 (Kitaran 20 Hari)</td>
                  <td>Peringatan Hari Ke-25 (Kitaran 30 Hari)</td>
                  <td>Peringatan Hari Ke-25 (Kitaran 30 Hari)</td>
                </tr>
                <tr>
                  <th scope="row">Harga Rasmi Onyxmen.my</th>
                  <td class="hammer-comparison-table__highlight-col">
                    <strong>1B: RM 159 · 2B: RM 318 · 3B: RM 477</strong>
                  </td>
                  <td>1B: RM 159 · 2B: RM 318 · 3B: RM 477</td>
                  <td>1B: RM 159 · 2B: RM 318 · 3B: RM 477</td>
                  <td>1B: RM 159 · 2B: RM 318 · 3B: RM 477</td>
                </tr>
                <tr>
                  <th scope="row">Pautan Terus</th>
                  <td class="hammer-comparison-table__highlight-col">
                    <button
                      type="button"
                      class="cta-foil-primary"
                      style="padding: 0.65rem 1.15rem; font-size: 0.72rem;"
                      data-open-order-drawer
                      data-order-product="hammer-of-thor"
                      data-order-qty="2"
                    >
                      TEMPAH HAMMER OF THOR
                    </button>
                  </td>
                  <td><a href="/ms/produk/horsemen/" class="cta-hairline-secondary" style="padding: 0.55rem 1rem; font-size: 0.7rem;">LIHAT HORSEMEN →</a></td>
                  <td><a href="/ms/produk/grow-xl/" class="cta-hairline-secondary" style="padding: 0.55rem 1rem; font-size: 0.7rem;">LIHAT GROW XL →</a></td>
                  <td><a href="/ms/produk/magnum-pump-xr/" class="cta-hairline-secondary" style="padding: 0.55rem 1rem; font-size: 0.7rem;">LIHAT MAGNUM PUMP XR →</a></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- =====================================================================
           CHAPTER VI (MS-108E): PENGESAHAN KETULENAN 5-TITIK ONYXMEN MALAYSIA
           CARA MEMBEZAKAN HAMMER OF THOR TULEN DARIPADA TIRUAN MURAH
           ===================================================================== -->
      <section
        id="pengesahan-ketulenan-hammer-of-thor"
        class="hammer-section-stage"
        aria-labelledby="hammer-ms-auth-heading"
      >
        <div class="hammer-section-inner">
          <header class="hammer-chapter-header">
            <div class="hammer-chapter-header__meta-row">
              <span class="hammer-chapter-number">
                BAB VI · PROTOKOL KETULENAN APOTEKARI &amp; PERLINDUNGAN PENGGUNA MALAYSIA
              </span>
              <span class="editorial-kicker">SKU: ONYX-HT-20 · MPN: HT-TRIB-20MY</span>
            </div>
            <h2 id="hammer-ms-auth-heading" class="editorial-headline-lg">
              Senarai Semak 5-Titik Ketulenan
              <span class="foil-champagne-text">Hammer of Thor Malaysia</span>
            </h2>
            <p class="editorial-lead-paragraph">
              Elakkan produk tiruan tidak berlabel di pasaran lambak yang menggunakan kapsul gelatin murah atau
              bahan kimia tersembunyi. Setiap botol rasmi Hammer of Thor yang diedarkan oleh
              <strong>Onyxmen Malaysia (https://www.onyxmen.my)</strong> mematuhi lima spesifikasi fizikal berikut:
            </p>
          </header>

          <div class="architectural-ledger" role="list" aria-label="Senarai Semak 5-Titik Ketulenan Hammer of Thor">
            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">SAH-01</span>
              <h3 class="architectural-ledger__title">
                Cetakan Tepat “Men's Health — Tribulus Terrestris — 20 Veg. Capsules”
              </h3>
              <p class="architectural-ledger__detail">
                Label hadapan botol hitam obsidian menampilkan tipografi emas metalik yang tajam dengan keterangan
                rasmi <em>“Men's Health — Tribulus Terrestris — 20 Veg. Capsules”</em> serta lencana hijau
                vegetarian pada bahagian bawah label.
              </p>
              <span class="architectural-ledger__metric">CETAKAN FOIL EMAS &amp; HIJAU</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">SAH-02</span>
              <h3 class="architectural-ledger__title">
                Kod Pengesanan Rasmi: SKU ONYX-HT-20, MPN HT-TRIB-20MY &amp; GTIN-13 9550000102028
              </h3>
              <p class="architectural-ledger__detail">
                Setiap pengeluaran rasmi Onyxmen Malaysia didaftarkan di bawah SKU <code>ONYX-HT-20</code>,
                nombor bahagian pengeluar <code>HT-TRIB-20MY</code>, dan kod bar Malaysia
                <code>9550000102028</code> (awalan 955 mengesahkan pengedaran rasmi Malaysia).
              </p>
              <span class="architectural-ledger__metric">GTIN: 9550000102028</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">SAH-03</span>
              <h3 class="architectural-ledger__title">
                Penutup Emas Metalik Berukir &amp; Pelekat Kedap Udara (Tamper-Evident Induction Seal)
              </h3>
              <p class="architectural-ledger__detail">
                Botol ditutup rapat dengan penutup skru emas metalik serta lapisan kedap udara aluminium dalaman
                bagi memastikan 20 kapsul vegetarian HPMC di dalamnya tidak pernah disentuh atau terdedah kepada
                kelembapan udara sebelum sampai ke tangan anda.
              </p>
              <span class="architectural-ledger__metric">KEDAP UDARA PENUH</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">SAH-04</span>
              <h3 class="architectural-ledger__title">
                Harga Rasmi Seragam RM 159 Sebotol (Tiada Diskaun Palsu RM 30–RM 50)
              </h3>
              <p class="architectural-ledger__detail">
                Ekstrak piawai 60% saponin Tribulus Terrestris (200mg) di dalam kapsul selulosa tumbuhan HPMC
                mempunyai kos bahan mentah yang tinggi. Onyxmen Malaysia mengekalkan harga rasmi
                <strong>RM 159 (1 Botol), RM 318 (2 Botol), dan RM 477 (3 Botol)</strong>.
              </p>
              <span class="architectural-ledger__metric">RM 159 / RM 318 / RM 477</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">SAH-05</span>
              <h3 class="architectural-ledger__title">
                Pengesahan Terus Melalui Meja Khidmat Rasmi sales@onyxmen.my &amp; info@onyxmen.my
              </h3>
              <p class="architectural-ledger__detail">
                Setiap pesanan daripada laman rasmi <code>https://www.onyxmen.my</code> menjana nombor rujukan
                <code>ONYX-MY-XXXXXX</code> yang direkodkan terus melalui meja pengesahan rasmi kami di
                <a href="mailto:sales@onyxmen.my">sales@onyxmen.my</a> dan
                <a href="mailto:info@onyxmen.my">info@onyxmen.my</a>.
              </p>
              <span class="architectural-ledger__metric">PENGESAHAN RASMI</span>
            </div>
          </div>
        </div>
      </section>

      <!-- =====================================================================
           CHAPTER VII (MS-108F): MATRIKS PENGHANTARAN BUNGKUSAN RAHSIA KE SELURUH
           16 NEGERI & WILAYAH PERSEKUTUAN MALAYSIA
           ===================================================================== -->
      <section
        id="penghantaran-rahsia-16-negeri-malaysia"
        class="hammer-section-stage hammer-section-stage--charcoal"
        aria-labelledby="hammer-ms-shipping-heading"
      >
        <div class="hammer-section-inner">
          <header class="hammer-chapter-header">
            <div class="hammer-chapter-header__meta-row">
              <span class="hammer-chapter-number">
                BAB VII · LOGISTIK BUNGKUSAN RAHSIA 16 NEGERI &amp; WILAYAH PERSEKUTUAN MALAYSIA
              </span>
              <a href="/ms/penghantaran-malaysia/" class="editorial-kicker">
                DIREKTORI PENUH 16 NEGERI MALAYSIA →
              </a>
            </div>
            <h2 id="hammer-ms-shipping-heading" class="editorial-headline-lg">
              Penghantaran Bungkusan Legap Tanpa Nama ke
              <span class="foil-champagne-text">Seluruh 16 Negeri Malaysia</span>
            </h2>
            <p class="editorial-lead-paragraph">
              Privasi anda adalah keutamaan mutlak kami. Setiap pesanan Hammer of Thor Malaysia dibungkus di dalam
              kotak legap berlapis dua tanpa sebarang nama produk atau jenama. Pada slip kurier, nama pengirim
              hanya tertera sebagai <strong>“OM Fulfilment Logistics”</strong>. Menyokong pembayaran
              <strong>FPX Online Banking, DuitNow QR Segera, dan Bayar Waktu Terima (COD Malaysia)</strong>.
            </p>
          </header>

          <!-- 16 Malaysia States & Federal Territories Architectural Ledger -->
          <div class="architectural-ledger" role="list" aria-label="Jadual Penghantaran Rahsia 16 Negeri Malaysia">
            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-01 · WPKL</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/kuala-lumpur/">Wilayah Persekutuan Kuala Lumpur</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan penuh KLCC, Bukit Bintang, Bangsar, Mont Kiara, Damansara Heights, Cheras, Ampang, Setapak,
                Wangsa Maju &amp; Sri Petaling. Penghantar persendirian rahsia hari sama (3–5 jam) atau kurier ekspres.
              </p>
              <span class="architectural-ledger__metric">3–5 JAM HARI SAMA / ESOK</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-02 · SGR</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/selangor/">Selangor Darul Ehsan</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan Petaling Jaya, Subang Jaya, Shah Alam, Puchong, Klang, Kajang, Bangi, Cyberjaya, Rawang &amp;
                Sepang. Penghantar rahsia hari sama Lembah Klang (3–5 jam) atau kurier 24 jam.
              </p>
              <span class="architectural-ledger__metric">3–5 JAM HARI SAMA / 24 JAM</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-03 · PJY</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/">Wilayah Persekutuan Putrajaya</a>
              </h3>
              <p class="architectural-ledger__detail">
                Penghantaran terus ke Presint 1 hingga Presint 20, kompleks pejabat kerajaan, atau kediaman dengan
                bungkusan neutral sepenuhnya di bawah nama OM Fulfilment Logistics.
              </p>
              <span class="architectural-ledger__metric">3–5 JAM HARI SAMA / 1 HARI</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-04 · PNG</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/penang/">Pulau Pinang (George Town &amp; Seberang Perai)</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan George Town, Bayan Lepas, Jelutong, Tanjung Tokong, Butterworth, Bukit Mertajam &amp; Nibong
                Tebal melalui NinjaVan Discreet, J&amp;T VIP &amp; PosLaju Priority (COD &amp; FPX tersedia).
              </p>
              <span class="architectural-ledger__metric">1–2 HARI BEKERJA · PERCUMA</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-05 · JHR</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/johor-bahru/">Johor Darul Ta'zim (Johor Bahru &amp; Iskandar Puteri)</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan Johor Bahru, Iskandar Puteri, Skudai, Pasir Gudang, Kulai, Batu Pahat, Muar, Kluang &amp;
                Segamat. Penghantaran bungkusan rahsia percuma untuk 1, 2, atau 3 botol.
              </p>
              <span class="architectural-ledger__metric">1–2 HARI BEKERJA · PERCUMA</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-06 · PRK</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/perak-ipoh/">Perak Darul Ridzuan (Ipoh &amp; Taiping)</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan Ipoh, Taiping, Seri Manjung, Sitiawan, Teluk Intan, Kampar &amp; Kuala Kangsar dengan
                nombor penjejakan WhatsApp rahsia.
              </p>
              <span class="architectural-ledger__metric">1–2 HARI BEKERJA · PERCUMA</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-07 · MLK</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/melaka/">Melaka Bandaraya Bersejarah</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan Bandaraya Melaka, Ayer Keroh, Batu Berendam, Bukit Baru, Alor Gajah &amp; Jasin. Menyokong
                Bayar Waktu Terima (COD) dan FPX/DuitNow.
              </p>
              <span class="architectural-ledger__metric">1–2 HARI BEKERJA · PERCUMA</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-08 · NSN</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/negeri-sembilan-seremban/">Negeri Sembilan Darul Khusus</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan Seremban, Seremban 2, Senawang, Nilai, Port Dickson, Bahau &amp; Tampin melalui kurier
                ekspres bungkusan tanpa jenama.
              </p>
              <span class="architectural-ledger__metric">1–2 HARI BEKERJA · PERCUMA</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-09 · PHG</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/pahang-kuantan/">Pahang Darul Makmur (Kuantan &amp; Temerloh)</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan Kuantan, Indera Mahkota, Temerloh, Bentong, Mentakab, Pekan &amp; Cameron Highlands.
              </p>
              <span class="architectural-ledger__metric">1–2 HARI BEKERJA · PERCUMA</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-10 · KDH</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/kedah-alor-setar/">Kedah Darul Aman (Alor Setar &amp; Sungai Petani)</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan Alor Setar, Sungai Petani, Kulim Hi-Tech, Jitra, Baling &amp; Pulau Langkawi.
              </p>
              <span class="architectural-ledger__metric">1–2 HARI BEKERJA · PERCUMA</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-11 · KTN</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/kelantan-kota-bharu/">Kelantan Darul Naim (Kota Bharu)</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan Kota Bharu, Kubang Kerian, Pengkalan Chepa, Pasir Mas, Tanah Merah &amp; Machang.
              </p>
              <span class="architectural-ledger__metric">1–2 HARI BEKERJA · PERCUMA</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-12 · TRG</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/terengganu-kuala-terengganu/">Terengganu Darul Iman</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan Kuala Terengganu, Gong Badak, Kemaman, Chukai, Dungun, Kerteh &amp; Besut.
              </p>
              <span class="architectural-ledger__metric">1–2 HARI BEKERJA · PERCUMA</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-13 · PLS</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/perlis-kangar/">Perlis Indera Kayangan (Kangar &amp; Arau)</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan Kangar, Arau, Kuala Perlis &amp; Padang Besar dengan penghantaran bungkusan rahsia percuma.
              </p>
              <span class="architectural-ledger__metric">1–2 HARI BEKERJA · PERCUMA</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-14 · SBH</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/sabah-kota-kinabalu/">Sabah (Kota Kinabalu, Sandakan &amp; Tawau)</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan Kota Kinabalu, Penampang, Putatan, Sandakan, Tawau, Lahad Datu &amp; Keningau melalui Kargo
                Udara Rahsia (Percuma untuk pakej 2 Botol RM 318 &amp; 3 Botol RM 477; RM 12 untuk 1 Botol).
              </p>
              <span class="architectural-ledger__metric">2–4 HARI BEKERJA · PERCUMA 2B+</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-15 · SWK</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/sarawak-kuching/">Sarawak (Kuching, Miri, Sibu &amp; Bintulu)</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan Kuching, Kota Samarahan, Miri, Sibu, Bintulu &amp; Sri Aman melalui Kargo Udara Rahsia
                (Percuma untuk pakej 2 Botol RM 318 &amp; 3 Botol RM 477; RM 12 untuk 1 Botol).
              </p>
              <span class="architectural-ledger__metric">2–4 HARI BEKERJA · PERCUMA 2B+</span>
            </div>

            <div class="architectural-ledger__row" role="listitem">
              <span class="architectural-ledger__index">MY-16 · LBN</span>
              <h3 class="architectural-ledger__title">
                <a href="/ms/penghantaran-malaysia/">Wilayah Persekutuan Labuan</a>
              </h3>
              <p class="architectural-ledger__detail">
                Liputan Bandar Labuan (Victoria) dan seluruh kawasan pulau melalui Kargo Udara Ekspres Rahsia
                (Percuma untuk pakej 2 Botol RM 318 &amp; 3 Botol RM 477).
              </p>
              <span class="architectural-ledger__metric">2–4 HARI BEKERJA · PERCUMA 2B+</span>
            </div>
          </div>
        </div>
      </section>

      <!-- =====================================================================
           CHAPTER VIII (MS-108G): 10 SOALAN LAZIM (FAQ) BAHASA MALAYSIA
           MIRRORED 1:1 IN @GRAPH FAQPAGE JSON-LD
           ===================================================================== -->
      <section
        id="soalan-lazim-hammer-of-thor-malaysia"
        class="hammer-section-stage"
        aria-labelledby="hammer-ms-faq-heading"
      >
        <div class="hammer-section-inner">
          <header class="hammer-chapter-header">
            <div class="hammer-chapter-header__meta-row">
              <span class="hammer-chapter-number">
                BAB VIII · 10 SOALAN LAZIM (FAQ) HAMMER OF THOR MALAYSIA
              </span>
              <span class="editorial-kicker">PANDUAN LENGKAP PENGGUNA DEWASA (18+)</span>
            </div>
            <h2 id="hammer-ms-faq-heading" class="editorial-headline-lg">
              Soalan Lazim Mengenai
              <span class="foil-champagne-text">Hammer of Thor (20 Kapsul Vegetarian)</span>
            </h2>
            <p class="editorial-lead-paragraph">
              Jawapan teknikal dan telus mengenai kapsul selulosa tumbuhan HPMC, kepekatan 200mg Tribulus
              Terrestris (60% saponin), harga rasmi RM 159 / RM 318 / RM 477, serta prosedur penghantaran rahsia.
            </p>
          </header>

          <div class="hammer-faq-ledger" data-faq-accordion-group role="region" aria-label="Senarai 10 Soalan Lazim Hammer of Thor Malaysia">
            ${HAMMER_BM_FAQS.map((item, idx) => {
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
           CHAPTER IX (MS-108H): PENTAS TEMPAHAN AKHIR & JAMINAN APOTEKARI
           ===================================================================== -->
      <section
        id="tempah-hammer-of-thor-malaysia"
        class="hammer-section-stage hammer-section-stage--onyx"
        aria-labelledby="hammer-ms-final-cta-heading"
      >
        <div class="hammer-section-inner">
          <header class="hammer-chapter-header">
            <div class="hammer-chapter-header__meta-row">
              <span class="hammer-chapter-number">
                BAB IX · TEMPAHAN EKSPRES BUNGKUSAN RAHSIA (10 SAAT)
              </span>
              <span class="hammer-veg-crest-inline">
                <span class="hammer-veg-crest-inline__dot" aria-hidden="true"></span>
                <span>STOK SEDIA ADA DI KUALA LUMPUR · SKU: ONYX-HT-20</span>
              </span>
            </div>
            <h2 id="hammer-ms-final-cta-heading" class="editorial-headline-lg">
              Mulakan Kitaran 20 Kapsul Vegetarian
              <span class="foil-champagne-text">Hammer of Thor Malaysia</span> Hari Ini
            </h2>
            <p class="editorial-lead-paragraph">
              Pilih pakej botol anda di bawah untuk membuka Laci Tempahan Ekspres Rahsia. Tiada pendaftaran akaun
              diperlukan—hanya masukkan nama, nombor WhatsApp Malaysia, dan alamat penghantaran untuk pelepasan
              bungkusan legap di bawah nama <strong>OM Fulfilment Logistics</strong>.
            </p>
          </header>

          <div class="tier-strip-group" role="group" aria-label="Pilihan Pakej Akhir Hammer of Thor Malaysia">
            <button
              type="button"
              class="tier-strip-option"
              data-open-order-drawer
              data-order-product="hammer-of-thor"
              data-order-qty="1"
            >
              <div class="tier-strip-option__left">
                <span class="tier-strip-option__eyebrow">PAKEJ 1 BOTOL · KITARAN 20 HARI · SKU: ONYX-HT-20-1B</span>
                <span class="tier-strip-option__title">1 Botol Hammer of Thor (20 Kapsul Vegetarian HPMC)</span>
                <span class="tier-strip-option__subtitle">
                  Penghantaran Ekspres Bungkusan Rahsia Percuma Semenanjung Malaysia · Peringatan Bekalan Hari Ke-18
                </span>
              </div>
              <div class="tier-strip-option__price">RM 159</div>
            </button>

            <button
              type="button"
              class="tier-strip-option tier-strip-option--selected"
              data-open-order-drawer
              data-order-product="hammer-of-thor"
              data-order-qty="2"
            >
              <div class="tier-strip-option__left">
                <span class="tier-strip-option__eyebrow">PAKEJ 2 BOTOL (PILIHAN UTAMA) · KITARAN 40 HARI · SKU: ONYX-HT-20-2B</span>
                <span class="tier-strip-option__title">2 Botol Hammer of Thor (40 Kapsul Vegetarian HPMC)</span>
                <span class="tier-strip-option__subtitle">
                  Penghantaran Ekspres Rahsia Percuma Seluruh Malaysia (Termasuk Sabah, Sarawak &amp; Labuan) · Peringatan Hari Ke-36
                </span>
              </div>
              <div class="tier-strip-option__price">RM 318</div>
            </button>

            <button
              type="button"
              class="tier-strip-option"
              data-open-order-drawer
              data-order-product="hammer-of-thor"
              data-order-qty="3"
            >
              <div class="tier-strip-option__left">
                <span class="tier-strip-option__eyebrow">PAKEJ 3 BOTOL · PROTOKOL LENGKAP 60 HARI · SKU: ONYX-HT-20-3B</span>
                <span class="tier-strip-option__title">3 Botol Hammer of Thor (60 Kapsul Vegetarian HPMC)</span>
                <span class="tier-strip-option__subtitle">
                  Pelepasan Kurier Keutamaan VIP + Penghantaran Rahsia Percuma Seluruh Negara · Peringatan Hari Ke-54
                </span>
              </div>
              <div class="tier-strip-option__price">RM 477</div>
            </button>
          </div>

          <div class="hammer-cta-cluster" style="margin-top: 2rem;">
            <button
              type="button"
              class="cta-foil-primary"
              data-open-order-drawer
              data-order-product="hammer-of-thor"
              data-order-qty="2"
            >
              <span>BUKA LACI TEMPAHAN EKSPRES RAHSIA · RM 159 / BOTOL</span>
              <span aria-hidden="true">→</span>
            </button>
            <a href="mailto:sales@onyxmen.my?subject=Pertanyaan%20Rasmi%20Hammer%20of%20Thor%20Malaysia%20(ONYX-HT-20)" class="cta-hairline-secondary">
              <span>E-MEL MEJA JUALAN: sales@onyxmen.my</span>
            </a>
            <a href="mailto:info@onyxmen.my?subject=Pertanyaan%20Formulasi%20Hammer%20of%20Thor%20(HT-TRIB-20MY)" class="cta-hairline-secondary">
              <span>MEJA MAKLUMAT BOTANI: info@onyxmen.my</span>
            </a>
          </div>
        </div>
      </section>
  `;
}

/**
 * Main execution entry point: generates public/ms/hammer-of-thor-malaysia/index.html
 * and also writes the synchronized mirror at public/ms/produk/hammer-of-thor/index.html if needed.
 */
export function buildHammerMsPage() {
  const schemaGraphJson = buildHammerMsSchemaJson();
  const bodyContent = buildHammerMsBodyHtml();

  const fullHtml = renderLuxuryShell({
    lang: 'ms-MY',
    title: PAGE_TITLE_MS,
    description: PAGE_DESCRIPTION_MS,
    canonicalPath: CANONICAL_PATH_MS,
    alternatePathEn: ALTERNATE_PATH_EN,
    alternatePathMs: CANONICAL_PATH_MS,
    ogImage: '/assets/products/hammer-of-thor-stage.webp',
    schemaGraphJson,
    bodyContent,
    activeNav: 'hammer-of-thor',
    productSlug: 'hammer-of-thor',
    defaultQty: 2,
    includeSealStrip: true,
    extraHeadHtml: HAMMER_MS_EXTRA_HEAD_CSS,
  });

  const outputPath = path.join(ROOT_DIR, 'public', 'ms', 'hammer-of-thor-malaysia', 'index.html');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, fullHtml, 'utf8');

  const lineCount = fullHtml.split(/\r?\n/).length;
  const byteSize = Buffer.byteLength(fullHtml, 'utf8');

  console.log(
    `[MS-107..MS-108] Built public/ms/hammer-of-thor-malaysia/index.html — ${lineCount} lines (${byteSize} bytes)`
  );

  return { outputPath, lineCount, byteSize };
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  buildHammerMsPage();
}
