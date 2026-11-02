/**
 * ONYXMAN.MY — BAHASA MALAYSIA FLAGSHIP HOMEPAGE CINEMA GENERATOR (TURN 7: MS-087 TO MS-094)
 * Generates: public/ms/index.html (2,600+ to 3,500+ lines of native ms-MY luxury HTML5)
 *
 * Enforces:
 * - Paradigm A: 100vw x 100vh Full-Bleed Obsidian Cinema Stage
 * - Paradigm D: 50vw / 50vw Pinned Split-Screen Apothecary Stage
 * - Rule #29 & Rule #30: Zero #FAF8F5, Zero Plus Jakarta Sans, Zero border-radius: 999px pill badges,
 *   Zero repeat(3, 1fr) bordered card boxes.
 * - Authentic Business Constants:
 *   Brand: Onyxman (https://www.onyxmen.my/ms/, alternate EN https://www.onyxmen.my/)
 *   Prices: 1 Botol = RM 159 (159.00), 2 Botol = RM 318 (318.00), 3 Botol = RM 477 (477.00)
 *   Emails: waleedshoaibofficial@gmail.com, sales@onyxman.my, info@onyxman.my
 *   Zero fake KKM/MAL claims.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { renderLuxuryShell, escapeHtmlAttr } from '../components/LuxuryShell.mjs';
import { buildFullPageGraph } from '../utils/schema-graph.mjs';
import {
  brandData,
  allProducts,
  comparisonsData,
  botanicalsData,
  malaysiaStatesData,
  guidesData,
} from '../data/products/index.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '../..');
const outputHtmlPath = path.resolve(projectRoot, 'public/ms/index.html');

/**
 * Maps product slug to the required Turn 7 Bahasa Malaysia showcase URLs:
 * /ms/horsemen-malaysia/, /ms/hammer-of-thor-malaysia/, /ms/grow-xl-malaysia/, /ms/magnum-pump-xr-malaysia/
 * plus secondary vault links (/ms/produk/...).
 */
const BM_PRODUCT_ROUTES = {
  horsemen: {
    primaryHref: '/ms/horsemen-malaysia/',
    vaultHref: '/ms/produk/horsemen/',
    chapterNumber: 'BAB I · 01 / 04',
    chapterCode: 'MS-088-A',
    capsuleSpecBadge: '20 KAPSUL × 500MG · RIZAB HERBA PADAT',
    refillNotice: 'Peringatan Bekalan Automatik Hari Ke-18 (Baki 2 Kapsul)',
    heroFormatTitle: 'Horsemen (20 Kapsul x 500mg)',
    bottleSubtitle: 'Man Virility Enhancement Herbal Supplement — 20 Capsules x 500mg',
    timingWindow: '45–60 Minit Sebelum Aktiviti Malam atau 1 Kapsul Selepas Makan Malam',
    keyMechanisms: [
      'Nisbah Ekstrak Akar Tongkat Ali Malaysia 100:1 (150mg) untuk menyokong daya tahan fizikal dan keseimbangan tenaga malam.',
      'Akar Maca Hitam Peru Tergelatinisasi (100mg) membekalkan stamina adaptogenik bebas kafein tanpa mengganggu tidur.',
      'Sinergi Epimedium Sagittatum (80mg) & L-Arginine HCl (80mg) untuk kelancaran pengangkutan oksigen dan kesediaan fizikal.',
      'Akar Panax Ginseng Merah Korea Berusia 6 Tahun (60mg) menyokong pemulihan ATP selular selepas waktu kerja panjang.',
    ],
  },
  'hammer-of-thor': {
    primaryHref: '/ms/hammer-of-thor-malaysia/',
    vaultHref: '/ms/produk/hammer-of-thor/',
    chapterNumber: 'BAB II · 02 / 04',
    chapterCode: 'MS-088-B',
    capsuleSpecBadge: '20 KAPSUL VEG. × 500MG · HPMC TUMBUHAN',
    refillNotice: 'Peringatan Bekalan Automatik Hari Ke-18 (Baki 2 Kapsul Veg.)',
    heroFormatTitle: 'Hammer of Thor (20 Kapsul Veg.)',
    bottleSubtitle: "Men's Health — Tribulus Terrestris — 20 Veg. Capsules",
    timingWindow: '1 Kapsul Vegetarian 30 Minit Selepas Makan Malam atau 45 Minit Sebelum Latihan',
    keyMechanisms: [
      'Teras Utama 200mg Ekstrak Buah Tribulus Terrestris Piawai (60% Saponin Furostanol / Protodioscin) untuk kekuatan fizikal.',
      '100% Sarung Kapsul Vegetarian Selulosa Tumbuhan (HPMC) — bebas gelatin haiwan, bersih dan mudah dihadam.',
      'Diperkaya dengan 100mg Akar Maca Peru, 80mg L-Arginine Fermentasi Tumbuhan & 60mg Panax Ginseng.',
      'Lengkap dengan 15mg Mineral Zink Bisglisinat Terkelat untuk sintesis protein dan kecergasan sistem lelaki dewasa.',
    ],
  },
  'grow-xl': {
    primaryHref: '/ms/grow-xl-malaysia/',
    vaultHref: '/ms/produk/grow-xl/',
    chapterNumber: 'BAB III · 03 / 04',
    chapterCode: 'MS-088-C',
    capsuleSpecBadge: '30 KAPSUL × 550MG · KITARAN PENUH 30 HARI',
    refillNotice: 'Peringatan Bekalan Automatik Hari Ke-25 (Baki 5 Kapsul)',
    heroFormatTitle: 'Grow XL (30 Kapsul)',
    bottleSubtitle: '#1 Selling Product — Extra-Strength Enhancement Male Performance Blend — 30 Capsules',
    timingWindow: '1 Kapsul Setiap Pagi (20–30 Minit Selepas Sarapan) Selama 30 Hari Penuh',
    keyMechanisms: [
      'Bekalan Penuh 30 Kapsul Sebulan (16,500mg jumlah kepekatan botani setiap botol) untuk penjagaan harian konsisten.',
      'Gabungan 140mg Tongkat Ali Kekuatan Ekstra + 110mg Akar Maca Peru untuk kestabilan tenaga sepanjang hari.',
      '80mg Ekstrak Kulit & Akar Muira Puama Brazil serta 70mg Ekstrak Beri Saw Palmetto untuk kesejahteraan lelaki 30+ tahun.',
      '100mg Matriks Dwi-Asid Amino (L-Arginine & L-Citrulline) + 50mg Ginseng/Ginkgo Biloba untuk peredaran darah mikro.',
    ],
  },
  'magnum-pump-xr': {
    primaryHref: '/ms/magnum-pump-xr-malaysia/',
    vaultHref: '/ms/produk/magnum-pump-xr/',
    chapterNumber: 'BAB IV · 04 / 04',
    chapterCode: 'MS-088-D',
    capsuleSpecBadge: '30 KAPSUL HITAM × 600MG · NITRIK OKSIDA XR',
    refillNotice: 'Peringatan Bekalan Automatik Hari Ke-25 (Baki 5 Kapsul Hitam)',
    heroFormatTitle: 'Magnum Pump XR (30 Kapsul Hitam)',
    bottleSubtitle: 'Testosterone Pro Series — Male Enhancement Formula Maximum Strength — 30 Black Capsules',
    timingWindow: '1 Kapsul Hitam 30–45 Minit Sebelum Senaman Gimnasium atau Aktiviti Malam',
    keyMechanisms: [
      '320mg Muatan Dwi-Asid Amino Vaskular (180mg L-Arginine HCl + 140mg L-Citrulline Malate) untuk laluan Nitrik Oksida XR.',
      '30 Kapsul Berwarna Hitam Pekat (Jet-Black Capsules) melindungi fitokimia sensitif cahaya daripada degradasi UV.',
      '110mg Tribulus Terrestris Piawai + 90mg Tongkat Ali Malaysia 100:1 + 65mg Ekstrak Kunyit Hitam (Kaempferia parviflora).',
      'Dipercepatkan oleh 15mg Ekstrak Lada Hitam Piawai 95% Piperine (Bioperine) untuk meningkatkan serapan usus sehingga +30%.',
    ],
  },
};

/**
 * 12 Comprehensive Bahasa Malaysia Homepage FAQs (MS-094)
 */
const HOMEPAGE_BM_FAQS = [
  {
    id: 'faq-bm-01',
    category: 'HARGA RASMI & PAKEJ KITARAN',
    questionMs:
      'Berapakah harga rasmi setiap botol produk Onyxman (Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR) di Malaysia?',
    answerMs:
      'Semua empat formulasi utama Onyxman Malaysia ditawarkan pada harga rasmi yang seragam dalam Ringgit Malaysia (MYR) supaya anda boleh memilih mengikut keperluan fisiologi tanpa kompromi harga: 1 Botol (Bekalan Permulaan Satu Kitaran) berharga RM 159 (159.00 MYR); Pakej 2 Botol (Protokol Dwi-Momentum + Penghantaran Ekspres Rahsia Percuma ke seluruh Malaysia termasuk Sabah, Sarawak & Labuan) berharga RM 318 (318.00 MYR); dan Pakej Lengkap 3 Botol (Bilik Kebal Penguasaan 90 Hari + Pelepasan Keutamaan VIP) berharga RM 477 (477.00 MYR).',
  },
  {
    id: 'faq-bm-02',
    category: 'PEMILIHAN 4 FORMULASI',
    questionMs:
      'Apakah perbezaan utama antara botol 20 kapsul (Horsemen & Hammer of Thor) berbanding botol 30 kapsul (Grow XL & Magnum Pump XR)?',
    answerMs:
      'Formulasi 20 kapsul (Horsemen 20 Kapsul x 500mg dan Hammer of Thor 20 Kapsul Vegetarian) memadatkan nisbah ekstrak herba berkepekatan tinggi bagi setiap hidangan untuk kesediaan tenaga malam yang pantas atau penjagaan saponin Tribulus dengan peringatan bekalan semula pada Hari Ke-18. Sebaliknya, formulasi 30 kapsul (Grow XL 30 Kapsul dan Magnum Pump XR 30 Kapsul Hitam) direka khusus untuk kitaran sebulan penuh (1 kapsul sehari selama 30 hari) sama ada untuk rutin kecergasan pagi (Grow XL) atau sokongan aliran vaskular Nitrik Oksida sebelum senaman/malam (Magnum Pump XR) dengan peringatan bekalan pada Hari Ke-25.',
  },
  {
    id: 'faq-bm-03',
    category: 'PERBANDINGAN 20 KAPSUL',
    questionMs:
      'Antara Horsemen (20 Kapsul x 500mg) dan Hammer of Thor (20 Kapsul Vegetarian), yang manakah lebih sesuai untuk saya?',
    answerMs:
      'Pilih Horsemen (SKU: ONYX-HM-20) sekiranya matlamat utama anda ialah kesediaan tenaga malam yang pantas (diambil 45–60 minit sebelum aktiviti bersama air suam) hasil gabungan 150mg Tongkat Ali Malaysia 100:1, 100mg Maca Hitam Peru, 80mg Epimedium, 80mg L-Arginine HCl, dan 60mg Ginseng Merah Korea. Pilih Hammer of Thor (SKU: ONYX-HT-20) sekiranya anda mengutamakan sarung kapsul 100% vegetarian berasaskan selulosa tumbuhan (HPMC) serta mahukan fokus 200mg Tribulus Terrestris (60% saponin furostanol) dan 15mg Zink Bisglisinat untuk kekuatan fizikal dan pemulihan otot.',
  },
  {
    id: 'faq-bm-04',
    category: 'PERBANDINGAN 30 KAPSUL',
    questionMs:
      'Apakah perbezaan antara Grow XL (30 Kapsul) dan Magnum Pump XR (30 Kapsul Hitam)?',
    answerMs:
      'Grow XL (SKU: ONYX-GX-30) ialah campuran botani kekuatan ekstra harian (140mg Tongkat Ali, 110mg Maca Peru, 100mg Dwi-Asid Amino, 80mg Muira Puama Brazil, dan 70mg Saw Palmetto) yang diambil 1 kapsul setiap pagi selepas sarapan untuk kecergasan berperingkat selama 30 hingga 90 hari. Magnum Pump XR (SKU: ONYX-MP-30) pula menampilkan 30 Kapsul Hitam eksklusif di bawah siri Testosterone Pro Series yang sarat dengan 180mg L-Arginine HCl, 140mg L-Citrulline Malate, 110mg Tribulus, 90mg Tongkat Ali, 65mg Kunyit Hitam, dan 15mg Bioperine—diambil 30–45 minit sebelum senaman gimnasium atau aktiviti malam.',
  },
  {
    id: 'faq-bm-05',
    category: 'PENJELASAN ENTITI PRODUK',
    questionMs:
      'Adakah Magnum Pump XR di Onyxman.my sejenis suplemen kapsul pemakanan atau peralatan pam mekanikal?',
    answerMs:
      'Magnum Pump XR yang diedarkan secara rasmi di https://www.onyxmen.my/ms/ (SKU: ONYX-MP-30, MPN: MPXR-30BLK-MY, harga RM 159) adalah 100% Suplemen Pemakanan kapsul botani dan asid amino untuk lelaki dewasa yang mengandungi 30 Kapsul Hitam setiap botol untuk menyokong laluan Nitrik Oksida dan stamina fizikal. Ia sama sekali TIDAK berkaitan dengan sebarang peralatan pam vakum mekanikal mahupun pam lumpur/hidraulik industri minyak dan gas.',
  },
  {
    id: 'faq-bm-06',
    category: 'PRIVASI BUNGKUSAN 100%',
    questionMs:
      'Adakah penghantar kurier, pengawal keselamatan kondo, kerani pejabat, atau ahli keluarga akan tahu isi kandungan bungkusan saya?',
    answerMs:
      'Tidak sama sekali. Setiap pesanan Onyxman dibungkus melalui protokol keselamatan tiga lapisan menggunakan kotak atau pek kurier legap tanpa sebarang logo, gambar, atau perkataan berkaitan suplemen lelaki. Pada slip kurier (NinjaVan, J&T VIP, PosLaju, atau DHL), nama pengirim hanya dicetak secara neutral sebagai "OM Fulfilment Logistics (Kuala Lumpur)" dan keterangan barangan ditulis sebagai "Penjagaan Kesihatan Harian" (Personal Nutritional Wellness).',
  },
  {
    id: 'faq-bm-07',
    category: 'PENGHANTARAN 16 NEGERI',
    questionMs:
      'Berapa lamakah masa penghantaran ke Lembah Klang, Semenanjung Malaysia, serta Sabah dan Sarawak?',
    answerMs:
      'Bagi kawasan Lembah Klang (Kuala Lumpur, Selangor, Putrajaya & Cyberjaya), kami menyediakan Penghantar Persendirian Rahsia Hari Sama dalam masa 3–5 jam untuk pesanan sebelum jam 4:00 petang MYT, atau Kurier Ekspres Percuma 1 hari bekerja. Bagi seluruh negeri Semenanjung Malaysia (Johor, Pulau Pinang, Perak, Melaka, Negeri Sembilan, Pahang, Kedah, Kelantan, Terengganu & Perlis), penghantaran ekspres percuma mengambil masa 1–2 hari bekerja. Bagi Sabah, Sarawak & WP Labuan, kargo udara rahsia mengambil masa 2–4 hari bekerja (caj RM 12 untuk 1 botol, atau PERCUMA sepenuhnya untuk pembelian pakej 2 botol RM 318 dan 3 botol RM 477).',
  },
  {
    id: 'faq-bm-08',
    category: 'KAEDAH PEMBAYARAN MALAYSIA',
    questionMs:
      'Bolehkah saya membuat bayaran secara Tunai Waktu Terima (COD) atau melalui Perbankan Dalam Talian FPX & DuitNow QR?',
    answerMs:
      'Ya. Kami menyokong kedua-dua kaedah pembayaran utama di Malaysia tanpa sebarang caj tersembunyi: (1) Perbankan Dalam Talian FPX & DuitNow QR Segera (Maybank2u, CIMB Clicks, Public Bank, RHB, Hong Leong, Bank Islam) untuk pelepasan bungkusan keutamaan yang boleh ditinggalkan di pondok pengawal kondo atau kaunter pejabat; dan (2) Bayar Waktu Terima (Cash on Delivery / COD) di mana anda hanya membayar secara tunai atau imbasan QR kepada posmen semasa bungkusan rahsia diserahkan ke tangan anda.',
  },
  {
    id: 'faq-bm-09',
    category: 'KETULENAN & PEMATUHAN',
    questionMs:
      'Adakah produk Onyxman mengandungi bahan kimia sintetik terlarang atau membuat tuntutan pendaftaran palsu?',
    answerMs:
      'Tidak. Di Onyxman Malaysia, kami mengamalkan ketelusan fitokimia 100% dan tidak sesekali menggunakan nombor pendaftaran palsu atau mencampurkan bahan kimia sintetik terlarang (seperti PDE5 sintetik tidak diisytihar) yang sering menyebabkan sakit kepala melampau dan debaran jantung. Semua formulasi kami adalah suplemen pemakanan botani tradisional dan asid amino tulen yang disaring daripada logam berat (Plumbum, Arsenik, Merkuri, Kadmium) serta dilengkapi pelekat keselamatan holografik kedap udara pada setiap botol.',
  },
  {
    id: 'faq-bm-10',
    category: 'CARA PENGAMBILAN & KOPI/TEH',
    questionMs:
      'Bagaimanakah cara pengambilan kapsul yang betul jika saya gemar minum kopi atau teh tarik pada waktu petang/malam?',
    answerMs:
      'Semua formulasi Onyxman adalah 100% bebas kafein dan tidak menyebabkan gangguan tidur malam. Walau bagaimanapun, kandungan polifenol dan tanin di dalam kopi O pekat atau teh tarik boleh mengikat alkaloid herba serta mineral Zink di dalam saluran penghadaman. Oleh itu, pastikan jarak masa sekurang-kurangnya 45 minit antara minuman berkafein/teh atau makanan bergoreng berat dengan pengambilan kapsul Onyxman, dan telan kapsul bersama 250ml–300ml air kosong suam.',
  },
  {
    id: 'faq-bm-11',
    category: 'GABUNGAN MULTI-BOTOL',
    questionMs:
      'Bolehkah saya menggabungkan dua formulasi berbeza di dalam Pakej 2 Botol (RM 318) atau Pakej 3 Botol (RM 477)?',
    answerMs:
      'Ya, amat digalakkan. Ramai pelanggan di Kuala Lumpur, Selangor, dan Johor Bahru menggabungkan 1 botol Grow XL (untuk rutin penjagaan asas setiap pagi) bersama 1 botol Horsemen atau Magnum Pump XR (untuk kesediaan malam atau sebelum latihan gimnasium) di bawah Pakej 2 Botol RM 318. Anda hanya perlu membuka Laci Tempahan Ekspres 10 Saat atau menghubungi meja operasi kami di sales@onyxman.my / waleedshoaibofficial@gmail.com untuk menetapkan gabungan botol pilihan anda.',
  },
  {
    id: 'faq-bm-12',
    category: 'KESELAMATAN & NASIHAT PERUBATAN',
    questionMs:
      'Siapakah yang sesuai mengamalkan suplemen Onyxman dan bilakah saya perlu merujuk doktor?',
    answerMs:
      'Semua formulasi Onyxman dirumus khusus untuk lelaki dewasa berumur 18 tahun ke atas yang ingin menyokong stamina fizikal, kecergasan tenaga, dan kesihatan peredaran mikro harian. Produk ini adalah suplemen pemakanan botani dan tidak bertujuan untuk mendiagnosis, merawat, menyembuhkan, atau mencegah sebarang penyakit. Sekiranya anda mempunyai masalah kardiovaskular, tekanan darah tinggi tidak terkawal, masalah hati/buah pinggang, atau sedang mengambil ubat preskripsi (terutamanya ubat nitrat atau pencair darah), sila dapatkan nasihat pengamal perubatan bertauliah di Malaysia sebelum penggunaan.',
  },
];

/**
 * Page-specific inline architectural CSS for the Bahasa Malaysia Homepage Cinema
 * Strictly complies with Rule #29 & Rule #30 (Zero #FAF8F5, Zero Plus Jakarta Sans,
 * Zero border-radius: 999px, Zero repeat(3, 1fr) bordered card boxes).
 */
const BM_HOMEPAGE_EXTRA_CSS = `
<style id="onyxman-bm-home-cinema-css">
  /* MS-087 to MS-094 Architectural Stage Enhancements */
  .bm-cinema-hero {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: clamp(2.5rem, 6vh, 5rem) var(--gutter-cinema) clamp(3.5rem, 7vh, 6rem);
    background-color: #050507;
    background-image:
      radial-gradient(circle at 50% 36%, rgba(212, 175, 55, 0.16) 0%, rgba(11, 12, 16, 0.78) 46%, #050507 96%);
    border-bottom: var(--hairline-rule);
    overflow: hidden;
  }
  .bm-cinema-hero__stage-visual {
    position: relative;
    width: 100%;
    max-width: 1680px;
    margin: 1.5rem auto 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .bm-cinema-hero__lineup-picture {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  .bm-cinema-hero__lineup-img {
    width: 100%;
    max-height: 54vh;
    object-fit: contain;
    mask-image: radial-gradient(ellipse at 50% 50%, #000000 72%, transparent 99%);
    -webkit-mask-image: radial-gradient(ellipse at 50% 50%, #000000 72%, transparent 99%);
    filter: drop-shadow(0 36px 72px rgba(0, 0, 0, 0.95));
  }
  .bm-cinema-hero__content {
    position: relative;
    z-index: 3;
    max-width: 1680px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1.85rem;
  }
  .bm-cinema-hero__top-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-bottom: 1.25rem;
    border-bottom: var(--hairline-subtle);
  }
  .bm-cinema-hero__ coordinates {
    font-family: var(--font-technical);
    font-size: 0.72rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--text-muted-alabaster);
  }
  .bm-cinema-hero__headline-wrap {
    display: flex;
    flex-direction: column;
    gap: 1.15rem;
    max-width: 1180px;
  }
  .bm-cinema-hero__sublead {
    font-family: var(--font-display);
    font-size: clamp(1.22rem, 1.75vw, 1.62rem);
    line-height: 1.52;
    color: var(--text-muted-alabaster);
    max-width: 68ch;
  }
  .bm-cinema-hero__cta-cluster {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.15rem;
    padding-top: 0.5rem;
  }
  .bm-cinema-hero__telemetry-strip {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.75rem;
    padding-top: 2rem;
    border-top: var(--hairline-rule);
  }
  .bm-cinema-hero__telemetry-col {
    flex: 1 1 240px;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }
  .bm-cinema-hero__telemetry-kicker {
    font-size: 0.68rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }
  .bm-cinema-hero__telemetry-val {
    font-family: var(--font-display);
    font-size: 1.38rem;
    color: var(--text-silk-ivory);
  }
  .bm-cinema-hero__telemetry-sub {
    font-size: 0.8rem;
    color: var(--text-muted-alabaster);
  }

  /* Section Architectural Headers */
  .bm-section-stage {
    width: 100vw;
    padding: var(--gutter-vertical) var(--gutter-cinema);
    background-color: #050507;
    border-bottom: var(--hairline-rule);
  }
  .bm-section-stage--onyx {
    background-color: #0B0C10;
  }
  .bm-section-stage--charcoal {
    background-color: #12141C;
  }
  .bm-section-inner {
    max-width: 1680px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  .bm-section-header {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: space-between;
    gap: 2rem;
    padding-bottom: 2.25rem;
    border-bottom: var(--hairline-rule);
  }
  .bm-section-header__left {
    flex: 1 1 560px;
    display: flex;
    flex-direction: column;
    gap: 0.95rem;
  }
  .bm-section-header__right {
    flex: 1 1 380px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }

  /* MS-088 Product Cinema Chapters */
  .bm-product-chapter {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    background-color: #050507;
    border-bottom: var(--hairline-rule);
  }
  .bm-product-chapter--reverse {
    flex-direction: row-reverse;
    background-color: #0B0C10;
  }
  .bm-product-chapter__visual {
    width: 48vw;
    min-height: 100vh;
    position: sticky;
    top: 0;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: var(--gutter-cinema);
    background: radial-gradient(circle at 50% 48%, rgba(212, 175, 55, 0.14) 0%, rgba(11, 12, 16, 0.88) 54%, #050507 100%);
    border-right: var(--hairline-rule);
  }
  .bm-product-chapter--reverse .bm-product-chapter__visual {
    border-right: none;
    border-left: var(--hairline-rule);
  }
  .bm-product-chapter__img {
    width: 100%;
    max-width: 520px;
    max-height: 70vh;
    object-fit: contain;
    mask-image: radial-gradient(circle at 50% 50%, #000000 74%, transparent 99%);
    -webkit-mask-image: radial-gradient(circle at 50% 50%, #000000 74%, transparent 99%);
    filter: drop-shadow(0 28px 56px rgba(0, 0, 0, 0.92));
  }
  .bm-product-chapter__dossier {
    width: 52vw;
    padding: var(--gutter-vertical) var(--gutter-cinema);
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2.25rem;
  }
  .bm-product-chapter__meta-bar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 0.85rem;
    padding-bottom: 1rem;
    border-bottom: var(--hairline-subtle);
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }
  .bm-product-chapter__spec-strip {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem 2.5rem;
    padding: 1.35rem 0;
    border-top: var(--hairline-rule);
    border-bottom: var(--hairline-rule);
  }
  .bm-product-chapter__spec-item {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }
  .bm-product-chapter__spec-label {
    font-size: 0.66rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-ash-silver);
  }
  .bm-product-chapter__spec-val {
    font-family: var(--font-display);
    font-size: 1.3rem;
    color: var(--gold-foil-bright);
  }
  .bm-product-chapter__links {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    padding-top: 0.75rem;
  }

  /* MS-091 Architectural Comparison Table */
  .bm-comparison-scroll {
    width: 100%;
    overflow-x: auto;
    border-top: var(--hairline-rule);
    border-bottom: var(--hairline-rule);
  }
  .bm-comparison-table {
    width: 100%;
    min-width: 980px;
    border-collapse: collapse;
    text-align: left;
  }
  .bm-comparison-table th,
  .bm-comparison-table td {
    padding: 1.35rem 1.15rem;
    border-bottom: var(--hairline-subtle);
    vertical-align: top;
  }
  .bm-comparison-table thead th {
    font-family: var(--font-display);
    font-size: 1.35rem;
    color: var(--gold-foil-bright);
    border-bottom: var(--hairline-rule);
    background-color: rgba(18, 20, 28, 0.75);
  }
  .bm-comparison-table tbody th {
    font-family: var(--font-technical);
    font-size: 0.76rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--gold-champagne);
    width: 22%;
  }
  .bm-comparison-table td {
    font-size: 0.92rem;
    color: var(--text-silk-ivory);
    line-height: 1.55;
  }

  /* MS-094 FAQ Accordion Ledger */
  .bm-faq-ledger {
    width: 100%;
    border-top: var(--hairline-rule);
  }
  .bm-faq-item {
    border-bottom: var(--hairline-subtle);
  }
  .bm-faq-summary {
    list-style: none;
    cursor: pointer;
    padding: 1.55rem 0;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1.5rem;
  }
  .bm-faq-summary::-webkit-details-marker {
    display: none;
  }
  .bm-faq-question-wrap {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }
  .bm-faq-category {
    font-size: 0.66rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }
  .bm-faq-question {
    font-family: var(--font-display);
    font-size: clamp(1.35rem, 2vw, 1.85rem);
    color: var(--text-silk-ivory);
    line-height: 1.2;
  }
  .bm-faq-icon {
    font-family: var(--font-technical);
    font-size: 1.25rem;
    color: var(--gold-foil-bright);
    transition: transform 220ms ease;
  }
  details[open] .bm-faq-icon {
    transform: rotate(45deg);
  }
  .bm-faq-answer {
    padding: 0 0 1.85rem 0;
    color: var(--text-muted-alabaster);
    font-size: 0.98rem;
    line-height: 1.72;
    max-width: 92ch;
  }

  @media (max-width: 1024px) {
    .bm-product-chapter,
    .bm-product-chapter--reverse {
      flex-direction: column;
    }
    .bm-product-chapter__visual,
    .bm-product-chapter__dossier {
      width: 100vw;
      min-height: auto;
      position: relative;
      height: auto;
      border-left: none;
      border-right: none;
    }
    .bm-product-chapter__visual {
      min-height: 56vh;
      border-bottom: var(--hairline-rule);
    }
  }
</style>
`;

/**
 * CHAPTER 1 — MS-087: 100vw x 100vh Pentas Utama Apotekari Diraja Obsidian (Hero Stage)
 */
function renderMs087HeroStage() {
  return `
      <!-- =====================================================================
           MS-087: 100vw x 100vh PENTAS UTAMA APOTEKARI DIRAJA OBSIDIAN (PARADIGM A)
           ===================================================================== -->
      <section
        id="ms-087-pentas-utama-obsidian"
        class="bm-cinema-hero cinema-stage-100vh"
        aria-labelledby="ms-087-hero-title"
        data-micro-step="MS-087"
      >
        <div class="bm-cinema-hero__content">
          <div class="bm-cinema-hero__top-meta">
            <span class="editorial-kicker">
              MS-087 · BILIK KEBAL APOTEKARI DIRAJA OBSIDIAN MALAYSIA · KUALA LUMPUR (50450 MY)
            </span>
            <span class="bm-cinema-hero__coordinates">
              HARGA SERAGAM RASMI: 1 BOTOL RM 159 · 2 BOTOL RM 318 · 3 BOTOL RM 477
            </span>
          </div>

          <div class="bm-cinema-hero__headline-wrap">
            <h1 id="ms-087-hero-title" class="editorial-headline-xl">
              Suplemen Herba Tenaga, Stamina &amp; Vitaliti Lelaki
              <span class="foil-champagne-text">Eksklusif Malaysia.</span>
            </h1>
            <p class="bm-cinema-hero__sublead hero-subtitle">
              Empat formulasi suplemen pemakanan botani dan asid amino berkepekatan tinggi untuk lelaki dewasa (18+) di Malaysia:
              <strong>Horsemen (20 Kapsul x 500mg)</strong>,
              <strong>Hammer of Thor (20 Kapsul Veg. Tribulus)</strong>,
              <strong>Grow XL (30 Kapsul Harian)</strong>, dan
              <strong>Magnum Pump XR (30 Kapsul Hitam Nitrik Oksida)</strong>.
              Setiap botol ditawarkan pada harga rasmi <strong>RM 159 (159.00 MYR)</strong> dengan jaminan
              <strong>100% bungkusan kosong tanpa logo</strong> terus ke pintu rumah, kondominium, atau pejabat anda.
            </p>
          </div>

          <!-- Full-Bleed Studio Composite Lineup Hero Visual -->
          <div class="bm-cinema-hero__stage-visual">
            <picture class="bm-cinema-hero__lineup-picture">
              <source srcset="/assets/products/onyxman-lineup-hero.webp" type="image/webp" />
              <img
                src="/assets/products/onyxman-lineup-hero.png"
                alt="Koleksi Lengkap 4 Botol Rasmi Onyxman Malaysia — Horsemen 20 Kapsul, Hammer of Thor 20 Kapsul Vegetarian, Grow XL 30 Kapsul, dan Magnum Pump XR 30 Kapsul Hitam pada harga RM 159 sebotol"
                width="1920"
                height="1080"
                fetchpriority="high"
                decoding="async"
                class="bm-cinema-hero__lineup-img cinema-stage-100vh__bottle-render"
                data-parallax-bottle
              />
            </picture>
          </div>

          <!-- 1-Click Express Order Drawer Triggers & Direct Anchor Navigation -->
          <div class="bm-cinema-hero__cta-cluster">
            <button
              type="button"
              class="cta-foil-primary"
              data-open-order-drawer="true"
              data-order-product="horsemen"
              data-order-qty="1"
              aria-controls="onyxman-express-order-drawer"
            >
              <span>TEMPAH BUNGKUSAN RAHSIA 1 BOTOL · RM 159</span>
              <span aria-hidden="true">→</span>
            </button>

            <button
              type="button"
              class="cta-hairline-secondary"
              data-open-order-drawer="true"
              data-order-product="grow-xl"
              data-order-qty="2"
              aria-controls="onyxman-express-order-drawer"
            >
              <span>PAKEJ DWI-MOMENTUM 2 BOTOL · RM 318 (POS PERCUMA SABAH/SARAWAK)</span>
              <span aria-hidden="true">→</span>
            </button>

            <button
              type="button"
              class="cta-hairline-secondary"
              data-open-order-drawer="true"
              data-order-product="magnum-pump-xr"
              data-order-qty="3"
              aria-controls="onyxman-express-order-drawer"
            >
              <span>BILIK KEBAL 90 HARI 3 BOTOL · RM 477</span>
              <span aria-hidden="true">→</span>
            </button>

            <a href="#ms-088-pameran-4-produk" class="cta-hairline-secondary">
              <span>TEROKAI 4 FORMULASI RASMI</span>
              <span aria-hidden="true">↓</span>
            </a>
          </div>

          <!-- Discreet Fulfilment & Pricing Telemetry Ribbon -->
          <div class="bm-cinema-hero__telemetry-strip" aria-label="Ringkasan Penghantaran Rahsia dan Harga Rasmi Malaysia">
            <div class="bm-cinema-hero__telemetry-col">
              <span class="bm-cinema-hero__telemetry-kicker">01 · HARGA RASMI SERAGAM MALAYSIA</span>
              <strong class="bm-cinema-hero__telemetry-val foil-champagne-text">
                RM 159 · RM 318 · RM 477
              </strong>
              <span class="bm-cinema-hero__telemetry-sub">
                1 Botol RM 159.00 | 2 Botol RM 318.00 | 3 Botol RM 477.00 — Tiada caj tersembunyi bagi FPX, DuitNow QR atau COD.
              </span>
            </div>

            <div class="bm-cinema-hero__telemetry-col">
              <span class="bm-cinema-hero__telemetry-kicker">02 · HARI SAMA LEMBAH KLANG (3–5 JAM)</span>
              <strong class="bm-cinema-hero__telemetry-val">
                Kuala Lumpur, Selangor &amp; Putrajaya
              </strong>
              <span class="bm-cinema-hero__telemetry-sub">
                Penghantar persendirian rahsia hari sama bagi pesanan sebelum 16:00 MYT atau Kurier Ekspres Percuma 24 jam.
              </span>
            </div>

            <div class="bm-cinema-hero__telemetry-col">
              <span class="bm-cinema-hero__telemetry-kicker">03 · 1–2 HARI SEMENANJUNG &amp; 2–4 HARI BORNEO</span>
              <strong class="bm-cinema-hero__telemetry-val">
                Liputan Penuh 16 Negeri &amp; Wilayah
              </strong>
              <span class="bm-cinema-hero__telemetry-sub">
                1–2 Hari Bekerja Semenanjung Malaysia (Percuma) · 2–4 Hari Bekerja Kargo Udara Sabah, Sarawak &amp; Labuan.
              </span>
            </div>

            <div class="bm-cinema-hero__telemetry-col">
              <span class="bm-cinema-hero__telemetry-kicker">04 · PRIVASI BUNGKUSAN TANPA LOGO 100%</span>
              <strong class="bm-cinema-hero__telemetry-val">
                Pengirim: OM Fulfilment Logistics
              </strong>
              <span class="bm-cinema-hero__telemetry-sub">
                Kotak/pek keselamatan legap tanpa sebarang nama produk atau jenama Onyxman pada slip kurier.
              </span>
            </div>
          </div>
        </div>
      </section>
  `;
}

/**
 * CHAPTER 2 — MS-088: 4 Bab Pameran Sinematik Produk Penuh
 */
function renderMs088ProductShowcases() {
  const chaptersHtml = allProducts
    .map((product, index) => {
      const bmLoc = product.locales['ms-MY'];
      const routeMeta = BM_PRODUCT_ROUTES[product.id] || BM_PRODUCT_ROUTES.horsemen;
      const isReverse = index % 2 === 1;
      const tiers = product.pricing.bundleTiers || [];

      const activesRowsHtml = (product.botanicalActives || [])
        .map(
          (active, actIdx) => `
                <div
                  class="architectural-ledger__row"
                  data-botanical-step="${escapeHtmlAttr(active.code)}"
                  data-step-index="0${actIdx + 1}"
                >
                  <span class="architectural-ledger__index">${escapeHtmlAttr(active.code)}</span>
                  <div class="architectural-ledger__title">
                    <strong>${escapeHtmlAttr(active.commonNameMs)}</strong>
                    <div style="font-size: 0.78rem; color: var(--text-ash-silver); font-family: var(--font-technical);">
                      <em>${escapeHtmlAttr(active.scientificName)}</em> · Piawaian: ${escapeHtmlAttr(active.standardization)}
                    </div>
                  </div>
                  <div class="architectural-ledger__detail">
                    ${escapeHtmlAttr(active.roleMs)}
                  </div>
                  <div class="architectural-ledger__metric">
                    ${escapeHtmlAttr(String(active.dosagePerCapsuleMg))} MG / KAPSUL
                  </div>
                </div>`
        )
        .join('\n');

      const usageModesHtml = (product.usageProtocol?.modes || [])
        .map(
          (mode, modeIdx) => `
                <div class="architectural-ledger__row">
                  <span class="architectural-ledger__index">MOD 0${modeIdx + 1}</span>
                  <strong class="architectural-ledger__title">${escapeHtmlAttr(mode.titleMs)}</strong>
                  <p class="architectural-ledger__detail">${escapeHtmlAttr(mode.instructionMs)}</p>
                  <span class="architectural-ledger__metric">${escapeHtmlAttr(product.usageProtocol.servingSize)}</span>
                </div>`
        )
        .join('\n');

      const progressionHtml = (product.progressionTimeline || [])
        .map(
          (step, stepIdx) => `
                <div class="architectural-ledger__row">
                  <span class="architectural-ledger__index">FASA 0${stepIdx + 1}</span>
                  <strong class="architectural-ledger__title">${escapeHtmlAttr(step.titleMs)}</strong>
                  <p class="architectural-ledger__detail">${escapeHtmlAttr(step.detailMs)}</p>
                  <span class="architectural-ledger__metric">${escapeHtmlAttr(step.stage)}</span>
                </div>`
        )
        .join('\n');

      const tierButtonsHtml = tiers
        .map(
          (tier, tierIdx) => `
                <button
                  type="button"
                  class="tier-strip-option ${tierIdx === 1 ? 'tier-strip-option--selected' : ''}"
                  data-open-order-drawer="true"
                  data-order-product="${escapeHtmlAttr(product.id)}"
                  data-order-qty="${escapeHtmlAttr(String(tier.bottles))}"
                  aria-label="Tempah ${escapeHtmlAttr(product.name)} — ${escapeHtmlAttr(tier.titleMs)} pada harga ${escapeHtmlAttr(tier.priceFormatted)}"
                >
                  <div class="tier-strip-option__left">
                    <span class="tier-strip-option__eyebrow">
                      ${escapeHtmlAttr(tier.badgeMs)} · PERINGATAN HARI KE-${escapeHtmlAttr(String(tier.refillTriggerDay))}
                    </span>
                    <strong class="tier-strip-option__title">${escapeHtmlAttr(tier.titleMs)}</strong>
                    <span class="tier-strip-option__subtitle">${escapeHtmlAttr(tier.shippingMs)}</span>
                  </div>
                  <span class="tier-strip-option__price">${escapeHtmlAttr(tier.priceFormatted)}</span>
                </button>`
        )
        .join('\n');

      return `
        <!-- ===================================================================
             ${routeMeta.chapterNumber}: ${product.name.toUpperCase()} (${routeMeta.chapterCode})
             =================================================================== -->
        <article
          id="bab-produk-${escapeHtmlAttr(product.slug)}"
          class="bm-product-chapter ${isReverse ? 'bm-product-chapter--reverse' : ''}"
          aria-labelledby="heading-produk-${escapeHtmlAttr(product.slug)}"
          data-product-chapter="${escapeHtmlAttr(product.id)}"
        >
          <!-- Pinned Studio Obsidian Visual Pane -->
          <div class="bm-product-chapter__visual">
            <span class="split-stage-5050__index-watermark" aria-hidden="true">0${index + 1}</span>
            <picture>
              <source srcset="${escapeHtmlAttr(product.images.stageWebp)}" type="image/webp" />
              <img
                src="${escapeHtmlAttr(product.images.stagePng)}"
                alt="${escapeHtmlAttr(product.images.altMs)}"
                width="1600"
                height="1200"
                loading="lazy"
                decoding="async"
                class="bm-product-chapter__img"
              />
            </picture>
            <div style="margin-top: 1.5rem; text-align: center; max-width: 440px;">
              <span class="editorial-kicker">${escapeHtmlAttr(routeMeta.capsuleSpecBadge)}</span>
              <p style="font-size: 0.8rem; color: var(--text-muted-alabaster); margin-top: 0.45rem;">
                Label Rasmi Botol: <em>"${escapeHtmlAttr(routeMeta.bottleSubtitle)}"</em>
              </p>
            </div>
          </div>

          <!-- Narrative & Phytochemical Dossier Pane -->
          <div class="bm-product-chapter__dossier">
            <div class="bm-product-chapter__meta-bar">
              <span>${escapeHtmlAttr(routeMeta.chapterNumber)} · ${escapeHtmlAttr(bmLoc.heroEyebrow)}</span>
              <span>SKU: ${escapeHtmlAttr(product.sku)} · MPN: ${escapeHtmlAttr(product.mpn)} · GTIN: ${escapeHtmlAttr(product.gtin13)}</span>
            </div>

            <header style="display: flex; flex-direction: column; gap: 1rem;">
              <h3 id="heading-produk-${escapeHtmlAttr(product.slug)}" class="editorial-headline-lg">
                ${escapeHtmlAttr(bmLoc.heroHeadline)}
              </h3>
              <p class="editorial-lead-paragraph">
                ${escapeHtmlAttr(bmLoc.heroSubheadline)}
              </p>
              <p style="font-size: 0.96rem; color: var(--text-muted-alabaster); line-height: 1.7;">
                ${escapeHtmlAttr(bmLoc.positioningSummary)}
              </p>
            </header>

            <!-- Core Telemetry Strip -->
            <div class="bm-product-chapter__spec-strip" aria-label="Spesifikasi Teknikal ${escapeHtmlAttr(product.name)}">
              <div class="bm-product-chapter__spec-item">
                <span class="bm-product-chapter__spec-label">FORMAT &amp; BILANGAN KAPSUL</span>
                <strong class="bm-product-chapter__spec-val">
                  ${escapeHtmlAttr(String(product.labelTranscription.capsuleCount))} Kapsul × ${escapeHtmlAttr(String(product.labelTranscription.capsuleWeightMg))}mg
                </strong>
              </div>
              <div class="bm-product-chapter__spec-item">
                <span class="bm-product-chapter__spec-label">JUMLAH KEPEKATAN BOTOL</span>
                <strong class="bm-product-chapter__spec-val">
                  ${escapeHtmlAttr(String(product.usageProtocol.totalNetPotencyMg))} mg (${escapeHtmlAttr(String(product.labelTranscription.netWeightGrams))}g)
                </strong>
              </div>
              <div class="bm-product-chapter__spec-item">
                <span class="bm-product-chapter__spec-label">HARGA RASMI SEBOTOL</span>
                <strong class="bm-product-chapter__spec-val foil-champagne-text">
                  RM 159 (159.00 MYR)
                </strong>
              </div>
              <div class="bm-product-chapter__spec-item">
                <span class="bm-product-chapter__spec-label">KITARAN BEKALAN SEMULA</span>
                <strong class="bm-product-chapter__spec-val">
                  Hari Ke-${escapeHtmlAttr(String(product.refillProtocol.refillReminderDay))}
                </strong>
              </div>
            </div>

            <!-- Ideal User Profile & Sensory Notes -->
            <div class="architectural-ledger">
              <div class="architectural-ledger__row">
                <span class="architectural-ledger__index">PROFIL</span>
                <strong class="architectural-ledger__title">Profil Pengguna Ideal di Malaysia</strong>
                <p class="architectural-ledger__detail">${escapeHtmlAttr(bmLoc.idealUserProfile)}</p>
                <span class="architectural-ledger__metric">DEWASA 18+</span>
              </div>
              <div class="architectural-ledger__row">
                <span class="architectural-ledger__index">KRAF</span>
                <strong class="architectural-ledger__title">Kualiti Kapsul &amp; Pembungkusan Botol</strong>
                <p class="architectural-ledger__detail">${escapeHtmlAttr(bmLoc.sensoryAndCraftNotes)}</p>
                <span class="architectural-ledger__metric">${escapeHtmlAttr(product.labelTranscription.capsuleFormatMs)}</span>
              </div>
              <div class="architectural-ledger__row">
                <span class="architectural-ledger__index">MASA</span>
                <strong class="architectural-ledger__title">Tingkap Masa Pengambilan Optimum</strong>
                <p class="architectural-ledger__detail">${escapeHtmlAttr(routeMeta.timingWindow)}</p>
                <span class="architectural-ledger__metric">${escapeHtmlAttr(routeMeta.refillNotice)}</span>
              </div>
            </div>

            <!-- 6 Standardized Botanical & Amino-Acid Actives -->
            <div>
              <span class="editorial-kicker" style="margin-bottom: 1rem;">
                KOMPOSISI 6 BAHAN AKTIF PIAWAI · ${escapeHtmlAttr(product.name.toUpperCase())} (${escapeHtmlAttr(String(product.labelTranscription.capsuleWeightMg))}MG SETIAP KAPSUL)
              </span>
              <div class="architectural-ledger">
                ${activesRowsHtml}
              </div>
            </div>

            <!-- Dual Usage Modes -->
            <div>
              <span class="editorial-kicker" style="margin-bottom: 1rem;">
                PROTOKOL PENGGUNAAN &amp; PENJAGAAN KITARAN · ${escapeHtmlAttr(product.name.toUpperCase())}
              </span>
              <div class="architectural-ledger">
                ${usageModesHtml}
              </div>
            </div>

            <!-- 3-Stage Progression Timeline -->
            <div>
              <span class="editorial-kicker" style="margin-bottom: 1rem;">
                GARIS MASA PERKEMBANGAN KITARAN PENGGUNA · ${escapeHtmlAttr(product.name.toUpperCase())}
              </span>
              <div class="architectural-ledger">
                ${progressionHtml}
              </div>
            </div>

            <!-- Interactive 1 / 2 / 3 Bottle Bundle Selector Strip -->
            <div>
              <span class="editorial-kicker">
                PILIH PAKEJ KITARAN ${escapeHtmlAttr(product.name.toUpperCase())} (KLIK UNTUK TEMPAHAN RAHSIA 10 SAAT)
              </span>
              <div class="tier-strip-group" role="group" aria-label="Pakej Harga ${escapeHtmlAttr(product.name)}">
                ${tierButtonsHtml}
              </div>
            </div>

            <!-- Direct Links to Dedicated Bahasa Malaysia Product Page & Express Order Trigger -->
            <div class="bm-product-chapter__links">
              <button
                type="button"
                class="cta-foil-primary"
                data-open-order-drawer="true"
                data-order-product="${escapeHtmlAttr(product.id)}"
                data-order-qty="1"
              >
                <span>TEMPAH ${escapeHtmlAttr(product.name.toUpperCase())} SEKARANG · RM 159</span>
                <span aria-hidden="true">→</span>
              </button>

              <a
                href="${escapeHtmlAttr(routeMeta.primaryHref)}"
                class="cta-hairline-secondary"
              >
                <span>HALAMAN PENUH ${escapeHtmlAttr(routeMeta.heroFormatTitle.toUpperCase())}</span>
                <span aria-hidden="true">→</span>
              </a>

              <a
                href="${escapeHtmlAttr(routeMeta.vaultHref)}"
                class="cta-hairline-secondary"
              >
                <span>DOSSIER FITOKIMIA (${escapeHtmlAttr(product.sku)})</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
        </article>`;
    })
    .join('\n');

  return `
      <!-- =====================================================================
           MS-088: 4 BAB PAMERAN SINEMATIK PRODUK PENUH (PARADIGM A & D)
           ===================================================================== -->
      <section
        id="ms-088-pameran-4-produk"
        aria-labelledby="ms-088-section-title"
        data-micro-step="MS-088"
      >
        <div class="bm-section-stage bm-section-stage--onyx">
          <div class="bm-section-inner">
            <div class="bm-section-header">
              <div class="bm-section-header__left">
                <span class="editorial-kicker">
                  MS-088 · EMPAT BAB PAMERAN SINEMATIK PRODUK RASMI ONYXMAN MALAYSIA
                </span>
                <h2 id="ms-088-section-title" class="editorial-headline-lg">
                  Empat Formulasi Khusus. Satu Harga Seragam
                  <span class="foil-champagne-text">RM 159 Sebotol.</span>
                </h2>
              </div>
              <div class="bm-section-header__right">
                <p style="color: var(--text-muted-alabaster); font-size: 0.98rem;">
                  Setiap botol dirumus mengikut matlamat biologi dan jadual pengambilan yang spesifik—sama ada anda
                  memerlukan <strong>20 Kapsul x 500mg Horsemen</strong> untuk kesediaan malam, <strong>20 Kapsul Vegetarian Hammer of Thor</strong>
                  berasaskan Tribulus, <strong>30 Kapsul Grow XL</strong> untuk rutin pagi sebulan penuh, atau
                  <strong>30 Kapsul Hitam Magnum Pump XR</strong> untuk sokongan vaskular Nitrik Oksida.
                </p>
                <div style="display: flex; flex-wrap: wrap; gap: 0.85rem;">
                  <a href="/ms/horsemen-malaysia/" class="cta-hairline-secondary">Horsemen · RM 159 →</a>
                  <a href="/ms/hammer-of-thor-malaysia/" class="cta-hairline-secondary">Hammer of Thor · RM 159 →</a>
                  <a href="/ms/grow-xl-malaysia/" class="cta-hairline-secondary">Grow XL · RM 159 →</a>
                  <a href="/ms/magnum-pump-xr-malaysia/" class="cta-hairline-secondary">Magnum Pump XR · RM 159 →</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        ${chaptersHtml}
      </section>
  `;
}

/**
 * CHAPTER 3 — MS-089: Matriks Diagnostik Pemilihan 4 Formula Interaktif
 */
function renderMs089InteractiveDiagnosticMatrix() {
  return `
      <!-- =====================================================================
           MS-089: MATRIKS DIAGNOSTIK PEMILIHAN 4 FORMULA INTERAKTIF
           (20 Kapsul vs 30 Kapsul, Kapsul Vegetarian HPMC vs Kapsul Hitam Nitric Oxide)
           ===================================================================== -->
      <section
        id="ms-089-matriks-diagnostik-interaktif"
        class="bm-section-stage"
        aria-labelledby="ms-089-title"
        data-micro-step="MS-089"
        data-goal-quiz
      >
        <div class="bm-section-inner">
          <div class="bm-section-header">
            <div class="bm-section-header__left">
              <span class="editorial-kicker">
                MS-089 · MATRIKS DIAGNOSTIK PEMILIHAN 4 FORMULA INTERAKTIF (15 SAAT)
              </span>
              <h2 id="ms-089-title" class="editorial-headline-lg">
                Kenal Pasti Formulasi Yang Tepat Mengikut
                <span class="foil-champagne-text">Fisiologi &amp; Jadual Harian Anda.</span>
              </h2>
            </div>
            <div class="bm-section-header__right">
              <p style="color: var(--text-muted-alabaster); font-size: 0.96rem;">
                Memandangkan keempat-empat botol berharga <strong>RM 159 (1 Botol)</strong>,
                <strong>RM 318 (2 Botol)</strong>, dan <strong>RM 477 (3 Botol)</strong>, pemilihan anda adalah 100%
                berdasarkan bilangan kapsul (<strong>20 Kapsul vs 30 Kapsul</strong>) serta jenis kapsul
                (<strong>Kapsul Herba Padat 500mg vs Kapsul Vegetarian HPMC vs Kapsul Hitam Nitrik Oksida</strong>).
                Klik matlamat utama anda di bawah:
              </p>
            </div>
          </div>

          <!-- Interactive 4-Option Goal Selector Strip -->
          <div class="tier-strip-group" role="group" aria-label="Pilihan Matlamat Fisiologi Lelaki Dewasa">
            <button
              type="button"
              class="tier-strip-option tier-strip-option--selected"
              aria-pressed="true"
              data-quiz-goal="evening-readiness"
            >
              <div class="tier-strip-option__left">
                <span class="tier-strip-option__eyebrow">
                  PROFIL DIAGNOSTIK 01 · KITARAN PADAT 20 KAPSUL × 500MG (PERINGATAN HARI KE-18)
                </span>
                <strong class="tier-strip-option__title">
                  Kesediaan Tenaga Malam Pantas (45–60 Minit) &amp; Ketahanan Selepas Waktu Pejabat
                </strong>
                <span class="tier-strip-option__subtitle">
                  Saya mahukan kapsul herba padat 500mg berasaskan Tongkat Ali Malaysia 100:1 (150mg), Maca Hitam Peru (100mg), Epimedium (80mg) &amp; Ginseng Merah Korea (60mg).
                </span>
              </div>
              <span class="tier-strip-option__price">Horsemen · RM 159</span>
            </button>

            <button
              type="button"
              class="tier-strip-option"
              aria-pressed="false"
              data-quiz-goal="sustained-endurance"
            >
              <div class="tier-strip-option__left">
                <span class="tier-strip-option__eyebrow">
                  PROFIL DIAGNOSTIK 02 · 20 KAPSUL VEGETARIAN HPMC TUMBUHAN (PERINGATAN HARI KE-18)
                </span>
                <strong class="tier-strip-option__title">
                  Kapsul 100% Vegetarian Tumbuhan (HPMC) &amp; Kekuatan Saponin Tribulus + Zink
                </strong>
                <span class="tier-strip-option__subtitle">
                  Saya mengutamakan kapsul selulosa tumbuhan bebas gelatin haiwan dengan 200mg Tribulus Terrestris (60% saponin) &amp; 15mg Zink Bisglisinat untuk stamina fizikal dan pemulihan otot.
                </span>
              </div>
              <span class="tier-strip-option__price">Hammer of Thor · RM 159</span>
            </button>

            <button
              type="button"
              class="tier-strip-option"
              aria-pressed="false"
              data-quiz-goal="daily-30day-vitality"
            >
              <div class="tier-strip-option__left">
                <span class="tier-strip-option__eyebrow">
                  PROFIL DIAGNOSTIK 03 · KITARAN SEBULAN PENUH 30 KAPSUL × 550MG (PERINGATAN HARI KE-25)
                </span>
                <strong class="tier-strip-option__title">
                  Rutin Harian Waktu Pagi 30 Hari Penuh, Peredaran Mikro &amp; Kesejahteraan Lelaki
                </strong>
                <span class="tier-strip-option__subtitle">
                  Saya mahukan tabiat mudah 1 kapsul setiap pagi selepas sarapan selama 30 hari penuh dengan Tongkat Ali Ekstra (140mg), Maca (110mg), Muira Puama Brazil (80mg) &amp; Saw Palmetto (70mg).
                </span>
              </div>
              <span class="tier-strip-option__price">Grow XL · RM 159</span>
            </button>

            <button
              type="button"
              class="tier-strip-option"
              aria-pressed="false"
              data-quiz-goal="nitric-oxide-pump"
            >
              <div class="tier-strip-option__left">
                <span class="tier-strip-option__eyebrow">
                  PROFIL DIAGNOSTIK 04 · 30 KAPSUL HITAM PELEPASAN LANJUTAN 600MG (PERINGATAN HARI KE-25)
                </span>
                <strong class="tier-strip-option__title">
                  Aliran Vaskular Nitrik Oksida Maksimum, Prestasi Latihan Gimnasium &amp; Tenaga Malam
                </strong>
                <span class="tier-strip-option__subtitle">
                  Saya aktif bersenam atau mahukan kapsul hitam Testosterone Pro Series dengan 320mg gabungan L-Arginine HCl + L-Citrulline Malate, Kunyit Hitam (65mg) &amp; pemangkin Bioperine (15mg).
                </span>
              </div>
              <span class="tier-strip-option__price">Magnum Pump XR · RM 159</span>
            </button>
          </div>

          <!-- Dynamic Diagnostic Recommendation Panel -->
          <div
            class="obsidian-footer__compliance-box"
            style="margin: 0; padding: 2.25rem; background-color: #0B0C10;"
            data-quiz-result
          >
            <span class="editorial-kicker" data-quiz-result-badge>
              CADANGAN KITARAN 20 KAPSUL · HORSEMEN (SKU: ONYX-HM-20)
            </span>
            <h3 class="editorial-headline-lg" style="margin-top: 0.75rem;" data-quiz-result-headline>
              Horsemen — Formulasi Tongkat Ali &amp; Maca Hitam Berkepekatan Tinggi (20 Kapsul × 500mg)
            </h3>
            <p
              style="color: var(--text-muted-alabaster); font-size: 1rem; margin: 0.85rem 0 1.5rem; max-width: 82ch;"
              data-quiz-result-rationale
            >
              Dirumus khas untuk kesediaan tenaga malam dalam 45–60 minit serta ketahanan fizikal menggunakan ekstrak Tongkat Ali Malaysia 100:1, Maca Hitam Peru, Epimedium, L-Arginine HCl, dan Ginseng Merah Korea.
            </p>
            <div style="display: flex; flex-wrap: wrap; gap: 1rem;">
              <button
                type="button"
                class="cta-foil-primary"
                data-open-order-drawer="true"
                data-order-product="horsemen"
                data-order-qty="2"
                data-quiz-order-btn
              >
                <span>TEMPAH PAKEJ 2 BOTOL CADANGAN INI · RM 318 (POS PERCUMA)</span>
                <span aria-hidden="true">→</span>
              </button>
              <a
                href="/ms/horsemen-malaysia/"
                class="cta-hairline-secondary"
                data-quiz-explore-link
              >
                <span>BACA SPESIFIKASI PENUH FORMULASI</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <!-- Architectural Technical Breakdown: 20 vs 30 Capsules & Capsule Shell Engineering -->
          <div>
            <span class="editorial-kicker" style="margin-bottom: 1rem;">
              ANALISIS KEJURUTERAAN KAPSUL · 20 KAPSUL VS 30 KAPSUL &amp; HPMC VEGETARIAN VS KAPSUL HITAM XR
            </span>
            <div class="architectural-ledger">
              <div class="architectural-ledger__row">
                <span class="architectural-ledger__index">DIMENSI 01</span>
                <strong class="architectural-ledger__title">
                  Kitaran Padat 20 Kapsul (Horsemen &amp; Hammer of Thor) vs Kitaran Sebulan 30 Kapsul (Grow XL &amp; Magnum Pump XR)
                </strong>
                <p class="architectural-ledger__detail">
                  Botol 20 kapsul memfokuskan kepekatan ekstrak akut dan penyelarasan peringatan bekalan pada <strong>Hari Ke-18</strong> (ketika berbaki 2 kapsul). Botol 30 kapsul pula menyediakan 30 hidangan harian untuk sebulan penuh dengan peringatan bekalan pada <strong>Hari Ke-25</strong> (ketika berbaki 5 kapsul).
                </p>
                <span class="architectural-ledger__metric">HARI KE-18 VS HARI KE-25</span>
              </div>

              <div class="architectural-ledger__row">
                <span class="architectural-ledger__index">DIMENSI 02</span>
                <strong class="architectural-ledger__title">
                  Kapsul Vegetarian HPMC Tumbuhan (Hammer of Thor) vs Kapsul Hitam Pelindung UV (Magnum Pump XR)
                </strong>
                <p class="architectural-ledger__detail">
                  <strong>Hammer of Thor</strong> menggunakan sarung kapsul <em>Hypromellose (HPMC)</em> 100% daripada selulosa tumbuhan yang tahan kelembapan tropika dan bebas gelatin haiwan. <strong>Magnum Pump XR</strong> pula menggunakan 30 kapsul berwarna hitam pekat (<em>Jet-Black Capsules</em>) untuk melindungi sebatian polimetoksiflavon Kunyit Hitam dan L-Citrulline daripada sinaran cahaya.
                </p>
                <span class="architectural-ledger__metric">VEG HPMC VS KAPSUL HITAM</span>
              </div>

              <div class="architectural-ledger__row">
                <span class="architectural-ledger__index">DIMENSI 03</span>
                <strong class="architectural-ledger__title">
                  Strategi Gabungan Dwi-Botol Pagi + Malam (Pakej RM 318 / RM 477)
                </strong>
                <p class="architectural-ledger__detail">
                  Untuk sokongan 24 jam yang menyeluruh, ramai pengguna berpengalaman mengambil <strong>1 kapsul Grow XL selepas sarapan pagi</strong> (penjagaan asas Muira Puama &amp; Saw Palmetto) dan menyimpan <strong>Horsemen atau Magnum Pump XR untuk waktu malam/senaman</strong>.
                </p>
                <span class="architectural-ledger__metric">SINERGI PAGI &amp; MALAM</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  `;
}

/**
 * CHAPTER 4 — MS-090: Paradigm D Pentas Skrin Terbelah 50vw / 50vw Monograf Botani
 */
function renderMs090BotanicalMonographsStage() {
  const monographs = botanicalsData.monographs || [];

  const monographRowsHtml = monographs
    .map((mono, idx) => {
      const bm = mono.locales['ms-MY'];
      const enSlugPath = mono.enPath.replace(/^\/ingredients\//, '/ms/ingredients/');
      const nativeMsPath = mono.msPath;

      const featuredList = (mono.featuredInProducts || [])
        .map((fp) => `${fp.productName}: ${fp.dosagePerCapsuleMg}mg`)
        .join(' · ');

      const markersList = (mono.qualityMarkers || []).join(' | ');

      return `
              <div
                class="architectural-ledger__row"
                style="flex-direction: column; align-items: flex-start; gap: 1rem; padding: 2.25rem 0;"
                data-botanical-step="${escapeHtmlAttr(mono.id)}"
                data-step-index="0${idx + 1}"
              >
                <div style="display: flex; flex-wrap: wrap; justify-content: space-between; width: 100%; gap: 0.75rem;">
                  <span class="editorial-kicker">
                    MONOGRAF 0${idx + 1} (${escapeHtmlAttr(mono.microStep)}) · ${escapeHtmlAttr(mono.scientificName.toUpperCase())}
                  </span>
                  <span class="architectural-ledger__metric">
                    FAMILI: ${escapeHtmlAttr(mono.family.toUpperCase())}
                  </span>
                </div>

                <h3 class="editorial-headline-lg" style="font-size: clamp(1.65rem, 2.5vw, 2.35rem);">
                  ${escapeHtmlAttr(bm.commonTitle)}
                </h3>

                <p style="color: var(--gold-foil-bright); font-size: 0.92rem; letter-spacing: 0.04em;">
                  ${escapeHtmlAttr(bm.subtitle)} · <strong>Piawaian: ${escapeHtmlAttr(mono.standardizationSpec)}</strong>
                </p>

                <p style="color: var(--text-muted-alabaster); font-size: 0.95rem; line-height: 1.7;">
                  <strong>Asal Geografi &amp; Kaedah Pengekstrakan:</strong> (${escapeHtmlAttr(mono.originGeographyMs)}) — ${escapeHtmlAttr(bm.heritageAndExtraction)}
                </p>

                <p style="color: var(--text-muted-alabaster); font-size: 0.95rem; line-height: 1.7;">
                  <strong>Mekanisme Fisiologi Lelaki Dewasa:</strong> ${escapeHtmlAttr(bm.physiologicalMechanism)}
                </p>

                <p style="color: var(--text-silk-ivory); font-size: 0.95rem; line-height: 1.7;">
                  <strong>Sinergi Dalam Rangkaian Onyxman:</strong> ${escapeHtmlAttr(bm.synergyInOnyxman)}
                </p>

                <div style="font-size: 0.82rem; color: var(--gold-champagne); border-left: 2px solid var(--gold-champagne); padding-left: 0.85rem;">
                  <div><strong>Dos Mengikut Formulasi:</strong> ${escapeHtmlAttr(featuredList)}</div>
                  <div style="color: var(--text-ash-silver); margin-top: 0.25rem;"><strong>Penanda Kualiti Makmal:</strong> ${escapeHtmlAttr(markersList)}</div>
                </div>

                <div style="display: flex; flex-wrap: wrap; gap: 0.85rem; padding-top: 0.5rem;">
                  <a href="${escapeHtmlAttr(enSlugPath)}" class="cta-hairline-secondary">
                    <span>BACA MONOGRAF PENUH (${escapeHtmlAttr(mono.shortSlug.toUpperCase())})</span>
                    <span aria-hidden="true">→</span>
                  </a>
                  <a href="${escapeHtmlAttr(nativeMsPath)}" class="cta-hairline-secondary">
                    <span>ARKIB RAMUAN BOTANI BM</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>`;
    })
    .join('\n');

  return `
      <!-- =====================================================================
           MS-090: PARADIGM D PENTAS SKRIN TERBELAH 50vw / 50vw MONOGRAF BOTANI
           ===================================================================== -->
      <section
        id="ms-090-monograf-botani-5050"
        class="split-stage-5050"
        aria-labelledby="ms-090-title"
        data-micro-step="MS-090"
        data-split-stage
      >
        <!-- Left 50vw Sticky Visual Stage -->
        <div class="split-stage-5050__visual-pane">
          <span class="split-stage-5050__index-watermark" data-split-watermark aria-hidden="true">01</span>
          <div class="split-stage-5050__visual-figure" style="flex-direction: column; gap: 1.5rem;">
            <picture>
              <source srcset="/assets/products/horsemen-stage.webp" type="image/webp" />
              <img
                src="/assets/products/horsemen-stage.png"
                alt="Monograf Sains Fitokimia &amp; Ekstrak Herba Piawai Onyxman Malaysia — Tongkat Ali 100:1, Tribulus Terrestris 60% Saponin, Akar Maca Hitam Peru, dan L-Arginine / L-Citrulline"
                width="1600"
                height="1200"
                loading="lazy"
                decoding="async"
                class="split-stage-5050__visual-img"
                data-split-visual-img
              />
            </picture>
            <div style="text-align: center; max-width: 460px;">
              <span class="editorial-kicker">SAINS FITOKIMIA &amp; ASID AMINO PIAWAI</span>
              <p style="font-size: 0.84rem; color: var(--text-muted-alabaster); margin-top: 0.5rem;">
                Kami menolak serbuk akar kayu mentah yang sukar dihadam. Setiap kapsul Onyxman menggunakan ekstrak
                piawai bernisbah tinggi (seperti 100:1 <em>Eurycoma longifolia</em> dan 60% Saponin <em>Tribulus terrestris</em>)
                yang disaring bebas logam berat.
              </p>
              <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 0.75rem; margin-top: 1rem;">
                <a href="/ms/ingredients/" class="cta-hairline-secondary">Indeks Monograf (/ms/ingredients/) →</a>
                <a href="/ms/ramuan-botani/" class="cta-hairline-secondary">Arkib Ramuan (/ms/ramuan-botani/) →</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right 50vw Scrolling Botanical Monograph Dossier -->
        <div class="split-stage-5050__narrative-pane">
          <div style="display: flex; flex-direction: column; gap: 1.25rem; margin-bottom: 2rem;">
            <span class="editorial-kicker">
              MS-090 · PARADIGM D PENTAS SKRIN TERBELAH 50VW / 50VW · MONOGRAF BOTANI
            </span>
            <h2 id="ms-090-title" class="editorial-headline-lg">
              Empat Teras Fitokimia &amp; Prekursor Vaskular
              <span class="foil-champagne-text">Berpiawaian Makmal.</span>
            </h2>
            <p style="color: var(--text-muted-alabaster); font-size: 0.98rem; line-height: 1.68;">
              Terokai monograf saintifik empat ramuan utama yang memacu keberkesanan rangkaian Onyxman Malaysia:
              <strong>Akar Tongkat Ali Malaysia (Eurycoma longifolia)</strong>,
              <strong>Tribulus Terrestris &amp; Panax Ginseng</strong>,
              <strong>Akar Maca Hitam Peru (Lepidium meyenii)</strong>, serta
              <strong>Prekursor Nitrik Oksida L-Arginine HCl &amp; L-Citrulline Malate</strong>.
            </p>
          </div>

          <div class="architectural-ledger">
            ${monographRowsHtml}
          </div>
        </div>
      </section>
  `;
}

/**
 * CHAPTER 5 — MS-091: Jadual Perbandingan Terperinci Antara Formula
 */
function renderMs091ComparisonMatrix() {
  const duels = comparisonsData.headToHeadComparisons || [];

  const duelsHtml = duels
    .map((duel, idx) => {
      const bm = duel.locales['ms-MY'];
      const compareRouteMs = duel.enPath.replace(/^\/compare\//, '/ms/compare/');
      const compareRouteNative = duel.msPath;

      const rowsHtml = (duel.comparisonRows || [])
        .map(
          (row) => `
                  <div class="architectural-ledger__row">
                    <span class="architectural-ledger__index">${escapeHtmlAttr(row.dimensionMs)}</span>
                    <div class="architectural-ledger__title" style="font-size: 1.05rem; font-family: var(--font-technical);">
                      <strong style="color: var(--gold-foil-bright);">${escapeHtmlAttr(duel.leftProductId.toUpperCase())}:</strong>
                      ${escapeHtmlAttr(row.leftValueMs)}
                    </div>
                    <div class="architectural-ledger__detail" style="color: var(--text-silk-ivory);">
                      <strong style="color: var(--gold-champagne);">${escapeHtmlAttr(duel.rightProductId.toUpperCase())}:</strong>
                      ${escapeHtmlAttr(row.rightValueMs)}
                    </div>
                  </div>`
        )
        .join('\n');

      return `
            <div style="padding-top: 2rem; border-top: var(--hairline-rule);">
              <span class="editorial-kicker">
                PERBANDINGAN BERSEMUKA 0${idx + 1} (${escapeHtmlAttr(duel.microStep)})
              </span>
              <h3 class="editorial-headline-lg" style="margin-top: 0.65rem; font-size: clamp(1.65rem, 2.8vw, 2.6rem);">
                ${escapeHtmlAttr(bm.headline)}
              </h3>
              <p style="color: var(--text-muted-alabaster); margin: 0.65rem 0 1.25rem; max-width: 85ch;">
                ${escapeHtmlAttr(bm.executiveVerdict)}
              </p>
              <div class="architectural-ledger">
                ${rowsHtml}
              </div>
              <div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1.35rem;">
                <a href="${escapeHtmlAttr(compareRouteMs)}" class="cta-hairline-secondary">
                  <span>LIHAT PERBANDINGAN PENUH (${escapeHtmlAttr(duel.slug.toUpperCase())})</span>
                  <span aria-hidden="true">→</span>
                </a>
                <a href="${escapeHtmlAttr(compareRouteNative)}" class="cta-hairline-secondary">
                  <span>DOSSIER PERBANDINGAN BM</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>`;
    })
    .join('\n');

  return `
      <!-- =====================================================================
           MS-091: JADUAL PERBANDINGAN TERPERINCI ANTARA 4 FORMULA
           ===================================================================== -->
      <section
        id="ms-091-jadual-perbandingan-4-formula"
        class="bm-section-stage bm-section-stage--onyx"
        aria-labelledby="ms-091-title"
        data-micro-step="MS-091"
      >
        <div class="bm-section-inner">
          <div class="bm-section-header">
            <div class="bm-section-header__left">
              <span class="editorial-kicker">
                MS-091 · MATRIKS &amp; JADUAL PERBANDINGAN LENGKAP 4 FORMULASI ONYXMAN
              </span>
              <h2 id="ms-091-title" class="editorial-headline-lg">
                Perbandingan Bersebelahan: Horsemen vs Hammer of Thor vs Grow XL vs
                <span class="foil-champagne-text">Magnum Pump XR.</span>
              </h2>
            </div>
            <div class="bm-section-header__right">
              <p class="comparison-summary" style="color: var(--text-muted-alabaster); font-size: 0.96rem;">
                Bandingkan spesifikasi tepat setiap botol di bawah—daripada kod SKU, berat miligram setiap kapsul,
                jenis sarung kapsul, bahan aktif utama, sehinggalah peringatan bekalan semula.
              </p>
              <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
                <a href="/ms/compare/" class="cta-hairline-secondary">Hab Perbandingan (/ms/compare/) →</a>
                <a href="/ms/perbandingan/" class="cta-hairline-secondary">Jadual Penuh (/ms/perbandingan/) →</a>
              </div>
            </div>
          </div>

          <!-- Full 4-Product Architectural Comparison Table -->
          <div class="bm-comparison-scroll" role="region" aria-label="Jadual Perbandingan 4 Produk Onyxman Malaysia" tabindex="0">
            <table class="bm-comparison-table">
              <thead>
                <tr>
                  <th scope="col">Dimensi Spesifikasi</th>
                  <th scope="col">
                    Horsemen<br />
                    <span style="font-size: 0.75rem; font-family: var(--font-technical); color: var(--gold-champagne);">
                      20 Kapsul × 500mg · RM 159
                    </span>
                  </th>
                  <th scope="col">
                    Hammer of Thor<br />
                    <span style="font-size: 0.75rem; font-family: var(--font-technical); color: var(--gold-champagne);">
                      20 Kapsul Veg. × 500mg · RM 159
                    </span>
                  </th>
                  <th scope="col">
                    Grow XL<br />
                    <span style="font-size: 0.75rem; font-family: var(--font-technical); color: var(--gold-champagne);">
                      30 Kapsul × 550mg · RM 159
                    </span>
                  </th>
                  <th scope="col">
                    Magnum Pump XR<br />
                    <span style="font-size: 0.75rem; font-family: var(--font-technical); color: var(--gold-champagne);">
                      30 Kapsul Hitam × 600mg · RM 159
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Kod SKU, MPN &amp; GTIN-13</th>
                  <td>SKU: ONYX-HM-20<br />MPN: HM-500MG-20MY<br />GTIN: 9550000102011</td>
                  <td>SKU: ONYX-HT-20<br />MPN: HT-TRIB-20MY<br />GTIN: 9550000102028</td>
                  <td>SKU: ONYX-GX-30<br />MPN: GXL-30CAP-MY<br />GTIN: 9550000102035</td>
                  <td>SKU: ONYX-MP-30<br />MPN: MPXR-30BLK-MY<br />GTIN: 9550000102042</td>
                </tr>
                <tr>
                  <th scope="row">Subtajuk Rasmi Pada Botol</th>
                  <td>Man Virility Enhancement Herbal Supplement — 20 Capsules x 500mg</td>
                  <td>Men's Health — Tribulus Terrestris — 20 Veg. Capsules</td>
                  <td>#1 Selling Product — Extra-Strength Enhancement Male Performance Blend — 30 Capsules</td>
                  <td>Testosterone Pro Series — Male Enhancement Formula Maximum Strength — 30 Black Capsules</td>
                </tr>
                <tr>
                  <th scope="row">Bilangan Kapsul &amp; Berat Bersih</th>
                  <td>20 Kapsul × 500mg (10,000mg / 10g setiap botol)</td>
                  <td>20 Kapsul Veg. × 500mg (10,000mg / 10g setiap botol)</td>
                  <td>30 Kapsul × 550mg (16,500mg / 16.5g setiap botol)</td>
                  <td>30 Kapsul Hitam × 600mg (18,000mg / 18g setiap botol)</td>
                </tr>
                <tr>
                  <th scope="row">Teknologi Sarung Kapsul</th>
                  <td>Kapsul Apotekari Larut Pantas (20–30 minit bersama air suam)</td>
                  <td>100% Kapsul Vegetarian Selulosa Tumbuhan (HPMC — Lencana Hijau)</td>
                  <td>Kapsul Botani Kekuatan Ekstra Kitaran Harian 30 Hari</td>
                  <td>30 Kapsul Hitam Pekat (Jet-Black UV-Shielded Capsules)</td>
                </tr>
                <tr>
                  <th scope="row">Fokus Fisiologi Utama</th>
                  <td>Kesediaan Tenaga Malam Pantas &amp; Ketahanan Fizikal Selepas Kerja</td>
                  <td>Penjagaan Saponin Tribulus, Kekuatan Fizikal &amp; Pemulihan Otot</td>
                  <td>Kecergasan Asas Harian 30 Hari, Aliran Mikro &amp; Kesejahteraan Lelaki</td>
                  <td>Aliran Vaskular Nitrik Oksida Pelepasan Lanjutan (XR) &amp; Senaman/Malam</td>
                </tr>
                <tr>
                  <th scope="row">Komposisi Bahan Aktif Utama</th>
                  <td>Tongkat Ali 100:1 (150mg), Maca Hitam (100mg), Epimedium (80mg), L-Arginine (80mg), Ginseng Merah (60mg), Tribulus/Zink (30mg)</td>
                  <td>Tribulus 60% Saponin (200mg), Maca Peru (100mg), L-Arginine Tumbuhan (80mg), Panax Ginseng (60mg), Tongkat Ali (45mg), Zink (15mg)</td>
                  <td>Tongkat Ali Ekstra (140mg), Maca Peru (110mg), Dwi-Asid Amino (100mg), Muira Puama (80mg), Saw Palmetto (70mg), Ginseng/Ginkgo (50mg)</td>
                  <td>L-Arginine HCl (180mg), L-Citrulline Malate (140mg), Tribulus (110mg), Tongkat Ali (90mg), Kunyit Hitam (65mg), Bioperine (15mg)</td>
                </tr>
                <tr>
                  <th scope="row">Waktu Pengambilan Terbaik</th>
                  <td>45–60 minit sebelum aktiviti malam ATAU 1 kapsul selepas makan malam</td>
                  <td>1 kapsul vegetarian 30 minit selepas makan malam ATAU sebelum latihan</td>
                  <td>1 kapsul setiap pagi (20–30 minit selepas sarapan) selama 30 hari</td>
                  <td>30–45 minit sebelum latihan gimnasium ATAU sebelum aktiviti malam</td>
                </tr>
                <tr>
                  <th scope="row">Peringatan Bekalan Automatik</th>
                  <td>Hari Ke-18 (Baki 2 Kapsul)</td>
                  <td>Hari Ke-18 (Baki 2 Kapsul Veg.)</td>
                  <td>Hari Ke-25 (Baki 5 Kapsul)</td>
                  <td>Hari Ke-25 (Baki 5 Kapsul Hitam)</td>
                </tr>
                <tr>
                  <th scope="row">Harga Rasmi Malaysia (MYR)</th>
                  <td>1 Botol: RM 159<br />2 Botol: RM 318<br />3 Botol: RM 477</td>
                  <td>1 Botol: RM 159<br />2 Botol: RM 318<br />3 Botol: RM 477</td>
                  <td>1 Botol: RM 159<br />2 Botol: RM 318<br />3 Botol: RM 477</td>
                  <td>1 Botol: RM 159<br />2 Botol: RM 318<br />3 Botol: RM 477</td>
                </tr>
                <tr>
                  <th scope="row">Pautan &amp; Tempahan Segera</th>
                  <td>
                    <a href="/ms/horsemen-malaysia/" style="color: var(--gold-foil-bright); text-decoration: underline;">Halaman Horsemen →</a>
                  </td>
                  <td>
                    <a href="/ms/hammer-of-thor-malaysia/" style="color: var(--gold-foil-bright); text-decoration: underline;">Halaman Hammer of Thor →</a>
                  </td>
                  <td>
                    <a href="/ms/grow-xl-malaysia/" style="color: var(--gold-foil-bright); text-decoration: underline;">Halaman Grow XL →</a>
                  </td>
                  <td>
                    <a href="/ms/magnum-pump-xr-malaysia/" style="color: var(--gold-foil-bright); text-decoration: underline;">Halaman Magnum Pump XR →</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Head-to-Head Duels Summary -->
          ${duelsHtml}
        </div>
      </section>
  `;
}

/**
 * CHAPTER 6 — MS-092: Rangkaian Penghantaran Rahsia & COD/FPX 16 Negeri & Wilayah Malaysia
 */
function renderMs092Malaysia16StatesNetwork() {
  const statesList = malaysiaStatesData.states || [];

  const statesLedgerHtml = statesList
    .map((st) => {
      const bm = st.locales['ms-MY'];
      const msMalaysiaLink = `/ms/malaysia/${st.slug}/`;
      const nativeDeliveryLink = st.msPath;
      const districtsPreview = (st.coveredDistricts || []).slice(0, 6).join(', ');
      const shippingBadge =
        st.zone === 'KLANG_VALLEY_SAMEDAY'
          ? 'HARI SAMA 3–5 JAM / EKSPRES PERCUMA'
          : st.zone === 'WEST_MALAYSIA'
          ? '1–2 HARI BEKERJA · POS PERCUMA'
          : '2–4 HARI KARGO UDARA · PERCUMA 2+ BOTOL';

      return `
              <div class="architectural-ledger__row" style="align-items: flex-start; padding: 1.85rem 0;">
                <span class="architectural-ledger__index">
                  HAB #${String(st.hubNumber).padStart(2, '0')} · ${escapeHtmlAttr(st.postalCodeRange)}
                </span>

                <div class="architectural-ledger__title">
                  <strong style="font-size: 1.45rem; display: block;">${escapeHtmlAttr(st.nameMs)}</strong>
                  <span style="font-size: 0.78rem; color: var(--gold-champagne); font-family: var(--font-technical);">
                    Pusat Utama: ${escapeHtmlAttr(st.capitalOrCenter)} · Produk Pilihan Utama: ${escapeHtmlAttr(st.topOrderedProduct.toUpperCase())}
                  </span>
                </div>

                <div class="architectural-ledger__detail" style="display: flex; flex-direction: column; gap: 0.45rem;">
                  <p style="color: var(--text-silk-ivory); font-weight: 500;">
                    ${escapeHtmlAttr(bm.headline)} — <span>${escapeHtmlAttr(st.transitTimeMs)}</span>
                  </p>
                  <p style="font-size: 0.88rem; color: var(--text-muted-alabaster);">
                    ${escapeHtmlAttr(bm.localDeliverySummary)}
                  </p>
                  <p style="font-size: 0.8rem; color: var(--text-ash-silver);">
                    <strong>Liputan Daerah &amp; Bandar:</strong> ${escapeHtmlAttr(districtsPreview)} |
                    <strong>Kurier:</strong> ${escapeHtmlAttr((st.couriers || []).join(', '))}
                  </p>
                  <div style="display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 0.35rem;">
                    <a href="${escapeHtmlAttr(msMalaysiaLink)}" class="cta-hairline-secondary" style="padding: 0.55rem 1rem; font-size: 0.7rem;">
                      <span>HAB ${escapeHtmlAttr(st.slug.toUpperCase())} (/ms/malaysia/)</span>
                      <span aria-hidden="true">→</span>
                    </a>
                    <a href="${escapeHtmlAttr(nativeDeliveryLink)}" class="cta-hairline-secondary" style="padding: 0.55rem 1rem; font-size: 0.7rem;">
                      <span>JADUAL NEGERI</span>
                      <span aria-hidden="true">↗</span>
                    </a>
                  </div>
                </div>

                <div class="architectural-ledger__metric">
                  <div>${escapeHtmlAttr(shippingBadge)}</div>
                  <div style="color: var(--text-muted-alabaster); font-size: 0.72rem; margin-top: 0.25rem;">
                    COD &amp; FPX / DUITNOW QR
                  </div>
                </div>
              </div>`;
    })
    .join('\n');

  return `
      <!-- =====================================================================
           MS-092: RANGKAIAN PENGHANTARAN RAHSIA & COD/FPX 16 NEGERI & WILAYAH MALAYSIA
           ===================================================================== -->
      <section
        id="ms-092-rangkaian-penghantaran-16-negeri"
        class="bm-section-stage"
        aria-labelledby="ms-092-title"
        data-micro-step="MS-092"
      >
        <div class="bm-section-inner">
          <div class="bm-section-header">
            <div class="bm-section-header__left">
              <span class="editorial-kicker">
                MS-092 · RANGKAIAN LOGISTIK RAHSIA &amp; COD/FPX KE SEMUA 16 NEGERI &amp; WILAYAH MALAYSIA
              </span>
              <h2 id="ms-092-title" class="editorial-headline-lg">
                Penghantaran Bungkusan Tanpa Nama Ke Seluruh
                <span class="foil-champagne-text">Semenanjung, Sabah &amp; Sarawak.</span>
              </h2>
            </div>
            <div class="bm-section-header__right">
              <p style="color: var(--text-muted-alabaster); font-size: 0.96rem;">
                Beroperasi terus dari hab pengagihan kawalan suhu kami di Lembah Klang (Poskod 50450 Kuala Lumpur),
                Onyxman Malaysia menyokong penghantaran rahsia ke semua 16 negeri dan hab bandar utama dengan pilihan
                <strong>Perbankan Dalam Talian FPX / DuitNow QR Segera</strong> atau
                <strong>Bayar Waktu Terima (COD Malaysia)</strong>.
              </p>
              <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
                <a href="/ms/malaysia/" class="cta-hairline-secondary">Direktori 16 Negeri (/ms/malaysia/) →</a>
                <a href="/ms/penghantaran-malaysia/" class="cta-hairline-secondary">Indeks Penghantaran (/ms/penghantaran-malaysia/) →</a>
              </div>
            </div>
          </div>

          <!-- 3 Shipping Zones Overview Strip -->
          <div class="architectural-ledger">
            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">ZON 01 · MY-KV</span>
              <strong class="architectural-ledger__title">
                Lembah Klang Hari Sama (Kuala Lumpur, Selangor, Putrajaya &amp; Cyberjaya)
              </strong>
              <p class="architectural-ledger__detail">
                Pesanan sebelum jam 16:00 MYT layak memilih <strong>Penghantar Persendirian Rahsia Hari Sama (3–5 Jam)</strong> terus ke lobi pejabat/kondominium anda, atau <strong>Kurier Ekspres Percuma 1 Hari Bekerja (RM 0)</strong>.
              </p>
              <span class="architectural-ledger__metric">3–5 JAM / 24 JAM</span>
            </div>

            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">ZON 02 · MY-WEST</span>
              <strong class="architectural-ledger__title">
                Semenanjung Malaysia (Johor, Pulau Pinang, Perak, Melaka, N. Sembilan, Pahang, Kedah, Kelantan, Terengganu, Perlis)
              </strong>
              <p class="architectural-ledger__detail">
                Pelepasan ekspres harian melalui NinjaVan Discreet, J&amp;T VIP, dan PosLaju Priority. Tiba dalam masa <strong>1–2 Hari Bekerja</strong> dengan <strong>Penghantaran Percuma (RM 0)</strong> untuk semua pakej 1, 2, atau 3 botol.
              </p>
              <span class="architectural-ledger__metric">1–2 HARI · PERCUMA</span>
            </div>

            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">ZON 03 · MY-EAST</span>
              <strong class="architectural-ledger__title">
                Malaysia Timur / Borneo (Sabah, Sarawak &amp; Wilayah Persekutuan Labuan)
              </strong>
              <p class="architectural-ledger__detail">
                Penerbangan kargo udara harian dari KLIA ke Kota Kinabalu, Sandakan, Tawau, Kuching, Miri, Sibu, Bintulu &amp; Labuan dalam pek keselamatan legap. Tiba dalam <strong>2–4 Hari Bekerja</strong> (RM 12 untuk 1 botol; <strong>PERCUMA untuk Pakej 2 Botol RM 318 &amp; 3 Botol RM 477</strong>).
              </p>
              <span class="architectural-ledger__metric">2–4 HARI · PERCUMA 2+ BOTOL</span>
            </div>
          </div>

          <!-- All 16 State & City Hubs Detailed Ledger -->
          <div>
            <span class="editorial-kicker" style="margin-bottom: 1rem;">
              DIREKTORI PENUH 16 HAB NEGERI &amp; BANDAR UTAMA MALAYSIA
            </span>
            <div class="architectural-ledger">
              ${statesLedgerHtml}
            </div>
          </div>
        </div>
      </section>
  `;
}

/**
 * CHAPTER 7 — MS-093: Jaminan Ketulenan Rasmi RM 159 & Seni Bina Bungkusan Privasi Tanpa Label + Pautan Panduan Pembeli
 */
function renderMs093AuthenticityAndBuyerGuides() {
  const guidesList = guidesData.guides || [];

  const guidesLedgerHtml = guidesList
    .map((guide) => {
      const bm = guide.locales['ms-MY'];
      const msGuidesRoute = guide.enPath.replace(/^\/guides\//, '/ms/guides/');
      const nativeGuideRoute = guide.msPath;

      const sectionsDigest = (bm.sections || [])
        .map((sec) => `<strong>${escapeHtmlAttr(sec.heading)}:</strong> ${escapeHtmlAttr(sec.body)}`)
        .join('<br /><br />');

      return `
              <div class="architectural-ledger__row" style="flex-direction: column; align-items: flex-start; gap: 0.9rem; padding: 2.1rem 0;">
                <div style="display: flex; flex-wrap: wrap; justify-content: space-between; width: 100%; gap: 0.75rem;">
                  <span class="editorial-kicker">
                    PANDUAN RASMI #0${escapeHtmlAttr(String(guide.guideNumber))} · MASA BACAAN: ${escapeHtmlAttr(String(guide.readingTimeMinutes))} MINIT
                  </span>
                  <span class="architectural-ledger__metric">
                    DISEMAK OLEH: ${escapeHtmlAttr(guide.author.toUpperCase())}
                  </span>
                </div>

                <h3 class="editorial-headline-lg" style="font-size: clamp(1.5rem, 2.3vw, 2.15rem);">
                  ${escapeHtmlAttr(bm.headline)}
                </h3>

                <p style="color: var(--gold-foil-bright); font-size: 0.95rem;">
                  ${escapeHtmlAttr(bm.summary)}
                </p>

                <div style="color: var(--text-muted-alabaster); font-size: 0.9rem; line-height: 1.68;">
                  ${sectionsDigest}
                </div>

                <div style="display: flex; flex-wrap: wrap; gap: 0.85rem; padding-top: 0.45rem;">
                  <a href="${escapeHtmlAttr(msGuidesRoute)}" class="cta-hairline-secondary">
                    <span>BACA PANDUAN PENUH (/ms/guides/${escapeHtmlAttr(guide.slug)}/)</span>
                    <span aria-hidden="true">→</span>
                  </a>
                  <a href="${escapeHtmlAttr(nativeGuideRoute)}" class="cta-hairline-secondary">
                    <span>ARKIB PANDUAN BM</span>
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>`;
    })
    .join('\n');

  return `
      <!-- =====================================================================
           MS-093: JAMINAN KETULENAN RASMI RM 159, SENI BINA BUNGKUSAN PRIVASI
           TANPA LABEL & PAUTAN PANDUAN PEMBELI (/ms/guides/...)
           ===================================================================== -->
      <section
        id="ms-093-jaminan-ketulenan-dan-panduan"
        class="bm-section-stage bm-section-stage--onyx"
        aria-labelledby="ms-093-title"
        data-micro-step="MS-093"
      >
        <div class="bm-section-inner">
          <div class="bm-section-header">
            <div class="bm-section-header__left">
              <span class="editorial-kicker">
                MS-093 · JAMINAN KETULENAN RASMI RM 159 &amp; SENI BINA BUNGKUSAN PRIVASI TANPA LABEL
              </span>
              <h2 id="ms-093-title" class="editorial-headline-lg">
                Ketulenan Gudang Kawalan Suhu Kuala Lumpur &amp;
                <span class="foil-champagne-text">6 Panduan Pembeli Malaysia.</span>
              </h2>
            </div>
            <div class="bm-section-header__right">
              <p style="color: var(--text-muted-alabaster); font-size: 0.96rem;">
                Elakkan produk tiruan murah di iklan tidak sah yang terdedah kepada haba atau dicampur bahan terlarang.
                Setiap botol rasmi daripada <strong>https://www.onyxmen.my/ms/</strong> dijamin tulen pada harga
                <strong>RM 159</strong> dan disokong terus oleh meja operasi kami di
                <a href="mailto:sales@onyxman.my" style="color: var(--gold-foil-bright);">sales@onyxman.my</a>,
                <a href="mailto:info@onyxman.my" style="color: var(--gold-foil-bright);">info@onyxman.my</a>, dan
                <a href="mailto:waleedshoaibofficial@gmail.com" style="color: var(--gold-foil-bright);">waleedshoaibofficial@gmail.com</a>.
              </p>
              <div style="display: flex; flex-wrap: wrap; gap: 0.75rem;">
                <a href="/ms/guides/" class="cta-hairline-secondary">Perpustakaan Panduan (/ms/guides/) →</a>
                <a href="/ms/panduan/" class="cta-hairline-secondary">Indeks Panduan BM (/ms/panduan/) →</a>
              </div>
            </div>
          </div>

          <!-- 4-Pillar Authenticity & Privacy Architecture Ledger -->
          <div class="architectural-ledger">
            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">JAMINAN 01</span>
              <strong class="architectural-ledger__title">
                Harga Rasmi Tetap RM 159 Sebotol (Anti-Tiruan Pasaran Gelap)
              </strong>
              <p class="architectural-ledger__detail">
                Semua stok tulen Horsemen, Hammer of Thor, Grow XL, dan Magnum Pump XR dijual pada harga rasmi <strong>RM 159 (1 Botol)</strong>, <strong>RM 318 (2 Botol)</strong>, dan <strong>RM 477 (3 Botol)</strong>. Kami tidak pernah melantik penjual jalanan yang menjual kapsul tiruan berisi tepung kanji pada harga tidak munasabah.
              </p>
              <span class="architectural-ledger__metric">RM 159.00 RASMI</span>
            </div>

            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">JAMINAN 02</span>
              <strong class="architectural-ledger__title">
                Seni Bina Bungkusan Privasi 3-Lapisan Tanpa Label
              </strong>
              <p class="architectural-ledger__detail">
                (1) Pelekat keselamatan holografik kedap udara asal pada penutup botol; (2) Balutan pelindung gelembung anti-bunyi supaya botol tidak berbunyi apabila digoncang; (3) Kotak/pek kurier legap tanpa logo dengan nama pengirim <strong>"OM Fulfilment Logistics (Kuala Lumpur)"</strong>.
              </p>
              <span class="architectural-ledger__metric">PRIVASI 100%</span>
            </div>

            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">JAMINAN 03</span>
              <strong class="architectural-ledger__title">
                100% Bebas Bahan Kimia Sintetik Terlarang &amp; Saringan Logam Berat
              </strong>
              <p class="architectural-ledger__detail">
                Setiap kumpulan pengeluaran mematuhi piawaian fasiliti GMP dan disaring daripada logam berat (Pb, As, Hg, Cd) serta bebas sepenuhnya daripada bahan kimia sintetik PDE5 tidak diisytihar. Kami tidak membuat sebarang tuntutan nombor pendaftaran perubatan palsu.
              </p>
              <span class="architectural-ledger__metric">BOTANI TULEN</span>
            </div>

            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">JAMINAN 04</span>
              <strong class="architectural-ledger__title">
                Jaminan Pelekat Keselamatan 14 Hari &amp; Meja Khidmat Pelanggan KL
              </strong>
              <p class="architectural-ledger__detail">
                Dilindungi oleh polisi pemulangan 14 hari bagi botol yang belum dibuka pelekat keselamatannya. Hubungi meja khidmat privasi kami setiap hari (09:00–23:00 MYT) melalui <strong>sales@onyxman.my</strong> atau <strong>info@onyxman.my</strong>.
              </p>
              <span class="architectural-ledger__metric">JAMINAN 14 HARI</span>
            </div>
          </div>

          <!-- Complete 6 Buyer & Protocol Guides Ledger -->
          <div>
            <span class="editorial-kicker" style="margin-bottom: 1rem;">
              ENAM PANDUAN LENGKAP PEMBELI, PROTOKOL MASA PENGAMBILAN &amp; SEMAKAN KETULENAN MALAYSIA
            </span>
            <div class="architectural-ledger">
              ${guidesLedgerHtml}
            </div>
          </div>
        </div>
      </section>
  `;
}

/**
 * CHAPTER 8 — MS-094: 12 Soalan Lazim (FAQ) Utama Bahasa Malaysia
 */
function renderMs094FaqStage() {
  const faqItemsHtml = HOMEPAGE_BM_FAQS.map(
    (faq, index) => `
            <details class="bm-faq-item" id="${escapeHtmlAttr(faq.id)}" ${index === 0 ? 'open' : ''}>
              <summary class="bm-faq-summary">
                <div class="bm-faq-question-wrap">
                  <span class="bm-faq-category">
                    SOALAN LAZIM #${String(index + 1).padStart(2, '0')} · ${escapeHtmlAttr(faq.category)}
                  </span>
                  <h3 class="bm-faq-question">
                    ${escapeHtmlAttr(faq.questionMs)}
                  </h3>
                </div>
                <span class="bm-faq-icon" aria-hidden="true">+</span>
              </summary>
              <div class="bm-faq-answer">
                <p>${escapeHtmlAttr(faq.answerMs)}</p>
              </div>
            </details>`
  ).join('\n');

  return `
      <!-- =====================================================================
           MS-094: 12 SOALAN LAZIM (FAQ) UTAMA BAHASA MALAYSIA & PENGESAHAN AKHIR
           ===================================================================== -->
      <section
        id="ms-094-soalan-lazim-utama-bm"
        class="bm-section-stage"
        aria-labelledby="ms-094-title"
        data-micro-step="MS-094"
      >
        <div class="bm-section-inner">
          <div class="bm-section-header">
            <div class="bm-section-header__left">
              <span class="editorial-kicker">
                MS-094 · 12 SOALAN LAZIM (FAQ) UTAMA BAHASA MALAYSIA &amp; MEJA TEMPAHAN EKSPRES
              </span>
              <h2 id="ms-094-title" class="editorial-headline-lg">
                Jawapan Terperinci Mengenai Formulasi, Harga RM 159 &amp;
                <span class="foil-champagne-text">Penghantaran Bungkusan Rahsia.</span>
              </h2>
            </div>
            <div class="bm-section-header__right">
              <p style="color: var(--text-muted-alabaster); font-size: 0.96rem;">
                Masih mempunyai soalan khusus mengenai pemilihan antara Horsemen, Hammer of Thor, Grow XL, atau Magnum Pump XR?
                Buka Laci Tempahan Ekspres 10 Saat di bawah atau hubungi meja khidmat pelanggan Kuala Lumpur kami di
                <a href="mailto:sales@onyxman.my" style="color: var(--gold-foil-bright);">sales@onyxman.my</a>.
              </p>
              <button
                type="button"
                class="cta-foil-primary"
                data-open-order-drawer="true"
                data-order-product="horsemen"
                data-order-qty="1"
              >
                <span>BUKA LACI TEMPAHAN RAHSIA SEKARANG · RM 159</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>

          <div class="bm-faq-ledger" data-faq-accordion-group>
            ${faqItemsHtml}
          </div>
        </div>
      </section>
  `;
}

/**
 * Assembles the complete Bahasa Malaysia Homepage (`public/ms/index.html`)
 */
export function buildHomeMsPage() {
  const pageTitle =
    'Onyxman Malaysia — Suplemen Herba Tenaga, Stamina & Vitaliti Lelaki Eksklusif Malaysia (RM 159)';
  const pageDescription =
    'Laman Rasmi Bahasa Malaysia Onyxman.my: Horsemen (20 Kapsul x 500mg), Hammer of Thor (20 Kapsul Veg. Tribulus), Grow XL (30 Kapsul), dan Magnum Pump XR (30 Kapsul Hitam Nitrik Oksida). Harga rasmi RM 159 sebotol (2 Botol RM 318, 3 Botol RM 477) dengan penghantaran bungkusan rahsia tanpa logo ke seluruh 16 negeri Malaysia (FPX, DuitNow QR & COD).';

  const schemaGraphJson = buildFullPageGraph({
    pageType: 'home',
    lang: 'ms-MY',
    pageUrl: 'https://www.onyxmen.my/ms/',
    title: pageTitle,
    description: pageDescription,
    breadcrumbs: [
      {
        name: 'Onyxman Malaysia (Utama BM)',
        url: 'https://www.onyxmen.my/ms/',
      },
    ],
    faqs: HOMEPAGE_BM_FAQS.map((item) => ({
      questionMs: item.questionMs,
      answerMs: item.answerMs,
    })),
  });

  const bodyContent = [
    renderMs087HeroStage(),
    renderMs088ProductShowcases(),
    renderMs089InteractiveDiagnosticMatrix(),
    renderMs090BotanicalMonographsStage(),
    renderMs091ComparisonMatrix(),
    renderMs092Malaysia16StatesNetwork(),
    renderMs093AuthenticityAndBuyerGuides(),
    renderMs094FaqStage(),
  ].join('\n');

  const fullHtml = renderLuxuryShell({
    lang: 'ms-MY',
    title: pageTitle,
    description: pageDescription,
    canonicalPath: '/ms/',
    alternatePathEn: '/',
    alternatePathMs: '/ms/',
    ogImage: '/assets/products/onyxman-lineup-hero.webp',
    schemaGraphJson,
    bodyContent,
    activeNav: 'home',
    productSlug: 'horsemen',
    defaultQty: 1,
    includeSealStrip: true,
    extraHeadHtml: BM_HOMEPAGE_EXTRA_CSS,
  });

  fs.mkdirSync(path.dirname(outputHtmlPath), { recursive: true });
  fs.writeFileSync(outputHtmlPath, fullHtml, 'utf8');

  const lineCount = fullHtml.split(/\r?\n/).length;
  console.log(
    `[MS-087..MS-094] Successfully generated ${outputHtmlPath} (${lineCount} lines, ${Buffer.byteLength(
      fullHtml,
      'utf8'
    )} bytes)`
  );
  return { outputHtmlPath, lineCount };
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  buildHomeMsPage();
}

export default buildHomeMsPage;
