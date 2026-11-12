#!/usr/bin/env node
/**
 * ============================================================================
 * ONYXMEN.MY — BAHASA MALAYSIA FLAGSHIP BUILDER: HORSEMEN MALAYSIA
 * Micro-Steps: MS-100, MS-101, MS-102 (Turn 9 — Subagent #9)
 * Output Target: public/ms/horsemen-malaysia/index.html
 * Canonical URL: https://www.onyxmen.my/ms/horsemen-malaysia/
 * Paired EN URL: https://www.onyxmen.my/horsemen-malaysia/
 * Product Constants:
 *   - Title: Horsemen Malaysia (Suplemen Herba Vitaliti & Tenaga Lelaki — 20 Kapsul x 500mg)
 *   - SKU: ONYX-HM-20 | MPN: HM-500MG-20MY | GTIN-13: 9550000102011
 *   - Official Pricing: 1 Botol = RM 159 (159.00 MYR), 2 Botol = RM 286 (10% OFF vs RM 318) (318.00 MYR), 3 Botol = RM 405 (15% OFF vs RM 477) (477.00 MYR)
 *   - Merchant Desks: waleedshoaibofficial@gmail.com | sales@onyxmen.my | info@onyxmen.my
 * Architecture:
 *   - Paradigm A (100vw x 100vh Full-Bleed Obsidian Cinema Stage)
 *   - Paradigm D (50vw / 50vw Pinned Split-Screen Botanical Monograph & 18-Day Cycle Stage)
 *   - Architectural Hairline Ledgers (Zero Box Grids, Zero Pill Stickers, Zero Clone Tokens)
 * ============================================================================
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderLuxuryShell } from '../components/LuxuryShell.mjs';
import {
  SCHEMA_DOMAIN,
  ORG_ID,
  WEBSITE_ID,
  BRAND_ID,
  SHIPPING_MY_ID,
  RETURN_POLICY_MY_ID,
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildShippingDetailsNode,
  buildReturnPolicyNode,
  buildBreadcrumbSchema,
  buildFAQPageSchema,
} from '../utils/schema-graph.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..', '..');

const CANONICAL_PATH_MS = '/ms/horsemen-malaysia/';
const ALTERNATE_PATH_EN = '/horsemen-malaysia/';
const CANONICAL_URL_MS = `${SCHEMA_DOMAIN}${CANONICAL_PATH_MS}`;

/**
 * 10 Soalan Lazim (FAQ) Horsemen Malaysia dalam Bahasa Malaysia (MS-102)
 * Diselaraskan 1:1 antara paparan akordion HTML5 dan skema JSON-LD FAQPage.
 */
export const HORSEMEN_MS_FAQS = [
  {
    id: 'faq-hm-ms-01',
    code: 'HM-FAQ-01',
    category: 'SPESIFIKASI & KEPEKATAN KAPSUL',
    questionMs: 'Berapakah bilangan kapsul dan kekuatan miligram sebenar bagi setiap botol Horsemen Malaysia?',
    answerMs:
      'Setiap botol tulen Horsemen Malaysia (SKU: ONYX-HM-20, MPN: HM-500MG-20MY, GTIN-13: 9550000102011) mengandungi tepat 20 kapsul herba berkepekatan tinggi dengan berat 500mg setiap kapsul. Jumlah keseluruhan jisim aktif bagi satu botol ialah 10,000mg (10 gram) ekstrak botani piawai dan asid amino tulen tanpa sebarang bahan pengisi kapur sintetik.',
    clinicalNoteMs:
      'Pecahan 500mg setiap kapsul merangkumi: Ekstrak Akar Tongkat Ali Malaysia 100:1 (150mg), Maca Hitam Peru Terjelatin (100mg), Epimedium Sagittatum (80mg), L-Arginine HCl Gred Farmaseutikal (80mg), Panax Ginseng Merah Korea 6 Tahun (60mg), serta Kompleks Tribulus Terrestris & Zink Pikolinat (30mg).',
  },
  {
    id: 'faq-hm-ms-02',
    code: 'HM-FAQ-02',
    category: 'PERBANDINGAN FORMULASI 20 KAPSUL',
    questionMs: 'Apakah perbezaan utama antara Horsemen Malaysia dan Hammer of Thor memandangkan kedua-duanya mempunyai 20 kapsul?',
    answerMs:
      'Walaupun kedua-dua formulasi mengandungi 20 kapsul pada harga rasmi RM 159 sebotol, seni bina fitokimia dan tujuan penggunaannya adalah berbeza. Horsemen Malaysia dirumus khusus dengan teras Tongkat Ali Malaysia 100:1 (150mg) bersama Maca Hitam Peru (100mg), Epimedium (80mg) dan L-Arginine HCl (80mg) untuk kesediaan tenaga malam yang pantas dalam tempoh 45 hingga 60 minit serta fleksibiliti penggunaan dwi-mod. Sebaliknya, Hammer of Thor memfokuskan kepada kepekatan saponin Tribulus Terrestris dan Ashwagandha di dalam kapsul vegetarian berasaskan tumbuhan untuk pembinaan daya tahan fizikal harian secara berperingkat.',
    clinicalNoteMs:
      'Pilih Horsemen sekiranya keutamaan anda ialah tindak balas kesediaan malam yang tangkas dan pemulihan kelesuan selepas waktu pejabat; pilih Hammer of Thor sekiranya anda mengutamakan kapsul vegetarian 100% untuk latihan ketahanan otot berterusan.',
  },
  {
    id: 'faq-hm-ms-03',
    code: 'HM-FAQ-03',
    category: 'PROTOKOL KITARAN 18 HARI',
    questionMs: 'Mengapakah Onyxmen Malaysia menetapkan Peringatan Isian Semula pada Hari Ke-18 untuk pengguna Horsemen?',
    answerMs:
      'Memandangkan sebotol Horsemen Malaysia membekalkan 20 kapsul untuk kitaran 20 hari (pada kadar 1 kapsul sehari), pengguna yang mengamalkan protokol harian akan mempunyai baki tepat 2 kapsul pada pagi Hari Ke-18. Sistem Peringatan Isian Semula Hari Ke-18 melalui Google Calendar dan meja privasi WhatsApp kami direka supaya anda mempunyai tetingkap masa 48 jam (1 hingga 2 hari bekerja) bagi penghantaran kurier ekspres tiba di pintu anda sebelum kapsul ke-20 habis digunakan.',
    clinicalNoteMs:
      'Strategi Hari Ke-18 ini mengelakkan sebarang jurang penurunan bio-saturasi eurycomanone dan ginsenosida di antara botol pertama dan botol kedua.',
  },
  {
    id: 'faq-hm-ms-04',
    code: 'HM-FAQ-04',
    category: 'HARGA RASMI & PAKEJ MULTI-BOTOL',
    questionMs: 'Berapakah harga rasmi Horsemen Malaysia dan apakah kelebihan memilih pakej 2 atau 3 botol?',
    answerMs:
      'Harga rasmi yang ditetapkan oleh Onyxmen Malaysia ialah RM 159.00 untuk Pakej 1 Botol (20 kapsul / 10,000mg), RM 286 (10% OFF vs RM 318) untuk Pakej Dwi-Momentum 2 Botol (40 kapsul / 20,000mg), dan RM 405 (15% OFF vs RM 477) untuk Pakej Apotekari Lengkap 3 Botol (60 kapsul / 30,000mg). Pakej 1 Botol menikmati penghantaran rahsia percuma di seluruh Semenanjung Malaysia (RM 12 untuk Sabah, Sarawak & Labuan), manakala Pakej 2 Botol (RM 286 (10% OFF vs RM 318)) dan 3 Botol (RM 405 (15% OFF vs RM 477)) melayakkan anda menerima Penghantaran Ekspres Rahsia Percuma ke seluruh 16 negeri Malaysia termasuk Sabah, Sarawak dan Labuan.',
    clinicalNoteMs:
      'Lebih 68% pelanggan di Kuala Lumpur, Selangor, Johor dan Pulau Pinang memilih Pakej 2 Botol (RM 286 (10% OFF vs RM 318)) untuk melengkapkan kitaran 40 hari penuh (peringatan isian semula pada Hari Ke-36).',
  },
  {
    id: 'faq-hm-ms-05',
    code: 'HM-FAQ-05',
    category: 'JAMINAN BUNGKUSAN RAHSIA KOTAK KOSONG',
    questionMs: 'Adakah penghantar kurier, pengawal keselamatan kondominium, kerani pejabat atau ahli keluarga akan mengetahui kandungan bungkusan saya?',
    answerMs:
      'Tidak sama sekali. Setiap pesanan Horsemen Malaysia dibungkus di pusat pelepasan Kuala Lumpur kami menggunakan kotak keselamatan legap tanpa sebarang cetakan jenama, warna mencolok, atau gambar produk. Pada slip kurier (airway bill), nama pengirim hanya dicetak sebagai "OM Fulfilment Logistics (Kuala Lumpur)" manakala ruangan keterangan kandungan ditulis secara neutral sebagai "Penjagaan Kesihatan & Nutrisi Harian (Personal Wellness Supplement)". Sifar perkataan Horsemen, Onyxmen, atau suplemen lelaki tertera pada bahagian luar bungkusan.',
    clinicalNoteMs:
      'Bungkusan turut dilengkapi pelekat keselamatan kedap udara; jika pelekat luar didapati koyak semasa serahan kurier, kami menggantikan unit baharu secara percuma.',
  },
  {
    id: 'faq-hm-ms-06',
    code: 'HM-FAQ-06',
    category: 'KAEDAH PEMBAYARAN MALAYSIA (FPX / DUITNOW / COD)',
    questionMs: 'Bolehkah saya membayar secara Tunai Semasa Terima (COD), Perbankan Dalam Talian FPX atau DuitNow QR?',
    answerMs:
      'Ya, kami menyokong ketiga-tiga kaedah penyelesaian utama di Malaysia. Anda boleh memilih (1) Perbankan Dalam Talian FPX (Maybank2u, CIMB Clicks, Public Bank, RHB, Hong Leong, Bank Islam, AmBank) atau DuitNow QR Segera untuk pelepasan bungkusan keutamaan, atau (2) Bayar Waktu Terima (Cash on Delivery / COD) di mana anda hanya membayar secara tunai atau imbasan QR terus kepada posmen kurier apabila bungkusan rahsia sudah berada di tangan anda.',
    clinicalNoteMs:
      'Bagi penghantaran Hari Sama (3–5 jam) menerusi Penghantar Persendirian di Lembah Klang (Kuala Lumpur, Petaling Jaya, Subang Jaya, Shah Alam, Putrajaya, Cyberjaya), pembayaran penuh atau deposit pengesahan melalui DuitNow QR/FPX mempercepatkan pelepasan dalam masa 30 minit.',
  },
  {
    id: 'faq-hm-ms-07',
    code: 'HM-FAQ-07',
    category: 'MASA PENGAMBILAN & INTERAKSI MINUMAN',
    questionMs: 'Bagaimanakah cara pengambilan Horsemen yang paling berkesan dan bolehkah ia diambil jika saya minum kopi atau teh tarik?',
    answerMs:
      'Horsemen Malaysia adalah 100% bebas kafein dan tidak mengandungi perangsang sintetik yang menyebabkan debaran jantung. Untuk Protokol A (Kesediaan Tenaga Malam), ambil 1 kapsul (500mg) bersama 250ml hingga 300ml air suam kosong sekitar 45 hingga 60 minit selepas makan malam. Sekiranya anda gemar menikmati kopi, Nescafe, atau teh tarik pada waktu malam, kami menyarankan jarak masa sekurang-kurangnya 45 minit kerana kandungan tanin di dalam kopi dan teh pekat boleh mengikat sebahagian alkaloid kuasinoid Tongkat Ali di dalam saluran penghadaman.',
    clinicalNoteMs:
      'Pengambilan bersama air suam membantu melarutkan sarung kapsul dalam masa 18–25 minit dan mengoptimumkan bio-ketersediaan L-Arginine HCl.',
  },
  {
    id: 'faq-hm-ms-08',
    code: 'HM-FAQ-08',
    category: 'KOMPOSISI BOTANI & KESELAMATAN',
    questionMs: 'Adakah Horsemen Malaysia mengandungi bahan kimia sintetik terlarang atau menyebabkan sakit kepala keesokan pagi?',
    answerMs:
      'Tidak. Horsemen Malaysia ialah suplemen pemakanan botani dan asid amino tulen yang dirumus khusus untuk lelaki dewasa berumur 18 tahun ke atas. Ia bebas sepenuhnya daripada sebatian sintetik terlarang atau bahan perangsang tiruan. Oleh sebab mekanisme sokongan tenaganya berasaskan adaptogen semula jadi (Tongkat Ali 100:1, Maca Hitam Peru, Panax Ginseng) dan prekursor nitrik oksida fisiologi (L-Arginine HCl), ia menyokong kecergasan malam secara semula jadi tanpa meninggalkan kesan sakit kepala, pandangan kabur, atau keletihan melampau pada pagi hari berikutnya.',
    clinicalNoteMs:
      'Untuk keselesaan optimum dalam iklim tropika Malaysia, pastikan pengambilan air kosong sekurang-kurangnya 2.5 liter sehari sepanjang kitaran penggunaan.',
  },
  {
    id: 'faq-hm-ms-09',
    code: 'HM-FAQ-09',
    category: 'PROSES TEMPAhan EKSPRES 10 SAAT',
    questionMs: 'Bagaimanakah proses tempahan melalui Laci Tempahan Ekspres (Express Order Drawer) berfungsi?',
    answerMs:
      'Apabila anda mengklik mana-mana butang "Tempah Bungkusan Rahsia — RM 159 / RM 286 (10% OFF vs RM 318) / RM 405 (15% OFF vs RM 477)" di halaman ini, Laci Tempahan Ekspres akan dibuka secara serta-merta tanpa perlu memuat semula halaman atau mendaftar akaun yang rumit. Anda hanya perlu memilih kuantiti botol (1, 2, atau 3 botol), mengisi nama panggilan, nombor WhatsApp Malaysia (format 01X-XXXXXXX), memilih negeri serta alamat penghantaran, dan mengesahkan kaedah bayaran. Pesanan anda dihantar terus secara serentak ke meja operasi utama kami (waleedshoaibofficial@gmail.com, sales@onyxmen.my, info@onyxmen.my) bersama resit rujukan segera di skrin.',
    clinicalNoteMs:
      'Pegawai khidmat pelanggan privasi kami akan menghubungi nombor WhatsApp anda untuk mengesahkan jadual pelepasan kurier dan berkongsi pautan Peringatan Kalendar Hari Ke-18.',
  },
  {
    id: 'faq-hm-ms-10',
    code: 'HM-FAQ-10',
    category: 'KELAYAKAN PENGGUNA & NASIHAT KESIHATAN',
    questionMs: 'Siapakah golongan pengguna yang sesuai mengamalkan Horsemen Malaysia dan siapakah yang perlu merujuk doktor terlebih dahulu?',
    answerMs:
      'Horsemen Malaysia dirumus khas untuk lelaki dewasa berumur 18 tahun ke atas—termasuk eksekutif korporat, usahawan, pemandu jarak jauh, dan lelaki aktif yang mengalami keletihan selepas waktu kerja serta inginkan sokongan stamina malam dan kecergasan fizikal. Walau bagaimanapun, individu yang mempunyai sejarah penyakit kardiovaskular kronik, tekanan darah tinggi yang tidak terkawal, gangguan fungsi hati atau buah pinggang, atau sedang mengambil ubat preskripsi berasaskan nitrat dan pencair darah wajib mendapatkan nasihat doktor perubatan bertauliah di Malaysia sebelum memulakan sebarang suplemen botani.',
    clinicalNoteMs:
      'Produk ini adalah suplemen pemakanan herba untuk menyokong kecergasan umum lelaki dewasa dan tidak bertujuan untuk mendiagnosis, merawat, menyembuhkan, atau mencegah sebarang penyakit.',
  },
];

/**
 * Membina struktur penuh @graph JSON-LD khusus untuk halaman utama Bahasa Malaysia Horsemen:
 * https://www.onyxmen.my/ms/horsemen-malaysia/
 */
function buildHorsemenMsGraphJson() {
  const shippingNode = buildShippingDetailsNode();
  const returnNode = buildReturnPolicyNode();

  const productNodeId = `${CANONICAL_URL_MS}#product`;
  const productGroupId = `${CANONICAL_URL_MS}#product-group`;

  const images = [
    `${SCHEMA_DOMAIN}/assets/products/horsemen-stage.webp`,
    `${SCHEMA_DOMAIN}/assets/products/horsemen-stage.png`,
    `${SCHEMA_DOMAIN}/assets/products/horsemen-portrait.webp`,
    `${SCHEMA_DOMAIN}/assets/products/horsemen-portrait.png`,
    `${SCHEMA_DOMAIN}/assets/products/horsemen-cutout.webp`,
    `${SCHEMA_DOMAIN}/assets/products/horsemen-cutout.png`,
  ];

  const brandNode = {
    '@type': 'Brand',
    '@id': BRAND_ID,
    name: 'Onyxmen',
    url: SCHEMA_DOMAIN,
  };

  const sellerNode = {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Onyxmen Malaysia',
    url: SCHEMA_DOMAIN,
    email: 'sales@onyxmen.my',
  };

  const keyBotanicalsMs = [
    'Eurycoma longifolia (Ekstrak Akar Tongkat Ali Malaysia Piawai 100:1 — 150mg)',
    'Lepidium meyenii (Ekstrak Akar Maca Hitam Peru Terjelatin — 100mg)',
    'Epimedium sagittatum (Ekstrak Herba Epimedium 10% Icariins — 80mg)',
    'L-Arginine Hydrochloride (Asid Amino Bentuk Bebas Gred Farmaseutikal — 80mg)',
    'Panax ginseng (Ekstrak Akar Ginseng Merah Korea Matang 6 Tahun — 60mg)',
    'Tribulus terrestris & Zinc Picolinate (Kompleks Saponin & Kofaktor Zink — 30mg)',
  ];

  const singleBottleOffer = {
    '@type': 'Offer',
    '@id': `${CANONICAL_URL_MS}#offer-1-bottle`,
    url: CANONICAL_URL_MS,
    name: 'Horsemen Malaysia — Pakej 1 Botol (20 Kapsul x 500mg = 10,000mg)',
    sku: 'ONYX-HM-20',
    price: '159.00',
    priceCurrency: 'MYR',
    priceValidUntil: '2027-12-31',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
    eligibleRegion: {
      '@type': 'Country',
      name: 'Malaysia',
      identifier: 'MY',
    },
    seller: sellerNode,
    shippingDetails: shippingNode,
    hasMerchantReturnPolicy: returnNode,
  };

  const variantTiers = [
    {
      bottles: 1,
      price: '159.00',
      skuSuffix: '1B',
      nameMs: 'Horsemen Malaysia — 1 Botol Kitaran Permulaan (20 Kapsul x 500mg)',
    },
    {
      bottles: 2,
      price: '286.00',
      skuSuffix: '2B',
      nameMs: 'Horsemen Malaysia — 2 Botol Protokol Dwi-Momentum (40 Kapsul x 500mg)',
    },
    {
      bottles: 3,
      price: '405.00',
      skuSuffix: '3B',
      nameMs: 'Horsemen Malaysia — 3 Botol Pakej Apotekari Lengkap (60 Kapsul x 500mg)',
    },
  ];

  const hasVariantNodes = variantTiers.map((tier) => ({
    '@type': ['Product', 'DietarySupplement'],
    '@id': `${CANONICAL_URL_MS}#variant-${tier.bottles}-bottle`,
    name: tier.nameMs,
    sku: `ONYX-HM-20-${tier.skuSuffix}`,
    mpn: `HM-500MG-20MY-${tier.skuSuffix}`,
    gtin13: '9550000102011',
    image: images,
    brand: brandNode,
    isVariantOf: {
      '@id': productGroupId,
    },
    size: `${tier.bottles} Botol (${20 * tier.bottles} Kapsul x 500mg)`,
    activeIngredient: keyBotanicalsMs.join(', '),
    targetPopulation: 'Lelaki Dewasa (18+)',
    isProprietary: false,
    legalStatus: 'Suplemen Pemakanan Botani (Botanical Dietary Supplement)',
    offers: {
      '@type': 'Offer',
      '@id': `${CANONICAL_URL_MS}#offer-${tier.bottles}-bottle`,
      url: CANONICAL_URL_MS,
      sku: `ONYX-HM-20-${tier.skuSuffix}`,
      price: tier.price,
      priceCurrency: 'MYR',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      eligibleRegion: {
        '@type': 'Country',
        name: 'Malaysia',
        identifier: 'MY',
      },
      seller: sellerNode,
      shippingDetails: shippingNode,
      hasMerchantReturnPolicy: returnNode,
    },
  }));

  const mainProductNode = {
    '@type': ['Product', 'DietarySupplement'],
    '@id': productNodeId,
    name: 'Horsemen Malaysia — Suplemen Herba Vitaliti & Tenaga Lelaki (20 Kapsul x 500mg)',
    alternateName: 'Horsemen 20 Kapsul x 500mg Onyxmen Malaysia',
    description:
      'Horsemen Malaysia oleh Onyxmen ialah suplemen herba vitaliti dan tenaga lelaki dewasa (20 kapsul x 500mg = 10,000mg sebotol) yang menggabungkan Tongkat Ali Malaysia 100:1 (150mg), Maca Hitam Peru (100mg), Epimedium (80mg), L-Arginine HCl (80mg), Ginseng Merah Korea (60mg), serta Tribulus & Zink (30mg). Harga rasmi RM 159 sebotol dengan penghantaran rahsia kotak kosong ke seluruh 16 negeri Malaysia.',
    disambiguatingDescription:
      'Suplemen kapsul pemakanan botani makan (20 kapsul x 500mg) untuk kecergasan dan stamina lelaki dewasa (18+) di Malaysia oleh Onyxmen.my.',
    url: CANONICAL_URL_MS,
    inLanguage: 'ms-MY',
    sku: 'ONYX-HM-20',
    mpn: 'HM-500MG-20MY',
    gtin13: '9550000102011',
    brand: brandNode,
    manufacturer: {
      '@id': ORG_ID,
    },
    image: images,
    category:
      'Health & Beauty > Health Care > Fitness & Nutrition > Vitamins & Supplements > Botanical Dietary Supplements',
    isVariantOf: {
      '@id': productGroupId,
    },
    activeIngredient: keyBotanicalsMs,
    nonProprietaryName:
      'Eurycoma longifolia 150mg; Lepidium meyenii 100mg; Epimedium sagittatum 80mg; L-Arginine HCl 80mg; Panax ginseng 60mg; Tribulus terrestris & Zinc Picolinate 30mg',
    recommendedIntake: {
      '@type': 'RecommendedDoseSchedule',
      doseValue: 1,
      doseUnit: 'Kapsul (500mg)',
      frequency:
        'Ambil 1 kapsul (500mg) bersama 250ml–300ml air suam 45 hingga 60 minit sebelum aktiviti malam (Protokol A) atau 1 kapsul setiap malam selepas makan malam selama 20 hari (Protokol B).',
      targetPopulation: 'Lelaki Dewasa (18+)',
    },
    targetPopulation: 'Lelaki Dewasa (18+)',
    isProprietary: false,
    legalStatus: 'Suplemen Pemakanan Botani (Botanical Dietary Supplement)',
    safetyConsideration:
      'Suplemen pemakanan herba dan asid amino untuk lelaki dewasa berumur 18 tahun ke atas sahaja. Tidak bertujuan untuk mendiagnosis, merawat, menyembuhkan, atau mencegah sebarang penyakit.',
    offers: singleBottleOffer,
  };

  const productGroupNode = {
    '@type': 'ProductGroup',
    '@id': productGroupId,
    name: 'Horsemen Malaysia — Koleksi Pakej Rasmi 1, 2 & 3 Botol (RM 159 / RM 286 (10% OFF vs RM 318) / RM 405 (15% OFF vs RM 477))',
    description:
      'Koleksi pakej rasmi Horsemen Malaysia (20 Kapsul x 500mg sebotol): 1 Botol RM 159.00, 2 Botol RM 286 (10% OFF vs RM 318) (40 Kapsul), dan 3 Botol RM 405 (15% OFF vs RM 477) (60 Kapsul) dengan penghantaran bungkusan rahsia tanpa nama.',
    url: CANONICAL_URL_MS,
    productGroupID: 'ONYX-HM-20-GROUP',
    brand: brandNode,
    variesBy: ['https://schema.org/size'],
    hasVariant: hasVariantNodes,
  };

  const itemPageNode = {
    '@type': 'ItemPage',
    '@id': `${CANONICAL_URL_MS}#webpage`,
    url: CANONICAL_URL_MS,
    name: 'Horsemen Malaysia (20 Kapsul x 500mg) — Suplemen Herba Vitaliti & Tenaga Lelaki | RM 159 Onyxmen.my',
    description:
      'Tempah Horsemen Malaysia tulen (20 Kapsul x 500mg, SKU ONYX-HM-20, MPN HM-500MG-20MY) pada harga rasmi RM 159 sebotol. Gabungan 6 ekstrak aktif: Tongkat Ali 150mg, Maca Hitam 100mg, Epimedium 80mg, L-Arginine HCl 80mg, Ginseng Merah 60mg & Tribulus/Zink 30mg. Penghantaran rahsia kotak kosong ke seluruh 16 negeri Malaysia.',
    inLanguage: 'ms-MY',
    isPartOf: {
      '@id': WEBSITE_ID,
    },
    mainEntity: {
      '@id': productNodeId,
    },
    breadcrumb: {
      '@id': `${CANONICAL_URL_MS}#breadcrumb`,
    },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: [
        '#hm-ms-hero-title',
        '#hm-ms-executive-summary',
        '#hm-ms-botanical-heading',
        '#hm-ms-faq-heading',
      ],
    },
  };

  const breadcrumbNode = buildBreadcrumbSchema(
    [
      { name: 'Utama Onyxmen Malaysia', url: '/ms/' },
      { name: 'Koleksi Formulasi', url: '/ms/produk/' },
      {
        name: 'Horsemen Malaysia (20 Kapsul x 500mg)',
        url: CANONICAL_PATH_MS,
      },
    ],
    CANONICAL_URL_MS
  );

  const faqPageNode = buildFAQPageSchema(HORSEMEN_MS_FAQS, CANONICAL_URL_MS, 'ms-MY');

  const orgNode = buildOrganizationSchema();
  // Ensure waleedshoaibofficial@gmail.com is explicitly represented in contactPoint alongside sales@onyxmen.my & info@onyxmen.my
  orgNode.contactPoint.push({
    '@type': 'ContactPoint',
    contactType: 'Primary Merchant Fulfilment & Express Order Notification Desk',
    email: 'waleedshoaibofficial@gmail.com',
    url: `${SCHEMA_DOMAIN}/ms/hubungi-kami/`,
    availableLanguage: ['ms-MY', 'en-MY'],
    areaServed: 'MY',
  });

  return JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@graph': [
        orgNode,
        buildWebSiteSchema('ms-MY'),
        shippingNode,
        returnNode,
        itemPageNode,
        mainProductNode,
        productGroupNode,
        breadcrumbNode,
        faqPageNode,
      ],
    },
    null,
    2
  );
}

/**
 * Gaya Seni Bina Khusus Halaman Horsemen Malaysia (MS-100 hingga MS-102)
 * Mematuhi sepenuhnya Peraturan #29 & #30:
 * - Palet warna: #050507, #0B0C10, #12141C, #D4AF37, #F3E5AB, #EAE6DF
 * - Tipografi: 'Cormorant Garamond', 'Syne', 'Space Grotesk'
 * - Sifar kotak kad bersempadan murah, sifar pil 999px, sifar grid berulang
 */
const HORSEMEN_MS_PAGE_CSS = `
<style id="horsemen-ms-architectural-css">
  /* ==========================================================================
     MS-100: PENTAS SINEMATIK OBSIDIAN 100vw x 100vh HORSEMEN MALAYSIA
     ========================================================================== */
  .hm-ms-cinema-hero {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    background-color: #050507;
    background-image:
      radial-gradient(circle at 68% 38%, rgba(212, 175, 55, 0.14) 0%, rgba(18, 20, 28, 0.62) 44%, #050507 88%),
      linear-gradient(180deg, #050507 0%, #0B0C10 56%, #050507 100%);
    padding: clamp(5.5rem, 10vh, 8.5rem) var(--gutter-cinema) clamp(3.5rem, 7vh, 6rem);
    border-bottom: var(--hairline-rule);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }

  .hm-ms-cinema-hero__ambient-crest {
    position: absolute;
    top: 8%;
    right: -4vw;
    font-family: var(--font-display);
    font-size: clamp(7rem, 19vw, 22rem);
    font-weight: 600;
    letter-spacing: 0.14em;
    line-height: 0.85;
    color: rgba(212, 175, 55, 0.035);
    pointer-events: none;
    user-select: none;
    z-index: 1;
    white-space: nowrap;
  }

  .hm-ms-cinema-hero__top-strip {
    position: relative;
    z-index: 4;
    max-width: 1760px;
    width: 100%;
    margin: 0 auto 2rem;
    padding-bottom: 1.15rem;
    border-bottom: var(--hairline-subtle);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem 2rem;
  }

  .hm-ms-breadcrumb {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.65rem;
    font-family: var(--font-technical);
    font-size: 0.74rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--text-muted-alabaster);
  }

  .hm-ms-breadcrumb__link:hover {
    color: var(--gold-foil-bright);
  }

  .hm-ms-breadcrumb__sep {
    color: var(--gold-champagne);
  }

  .hm-ms-breadcrumb__current {
    color: var(--gold-foil-bright);
    font-weight: 600;
  }

  .hm-ms-telemetry-codes {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.25rem;
    font-family: var(--font-technical);
    font-size: 0.72rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--text-ash-silver);
  }

  .hm-ms-telemetry-codes strong {
    color: var(--gold-champagne);
    font-weight: 600;
  }

  .hm-ms-cinema-hero__stage {
    position: relative;
    z-index: 3;
    max-width: 1760px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: clamp(2.5rem, 5vw, 5.5rem);
  }

  .hm-ms-cinema-hero__narrative-col {
    flex: 1 1 560px;
    max-width: 780px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .hm-ms-cinema-hero__visual-col {
    flex: 1 1 440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .hm-ms-bottle-monolith {
    position: relative;
    width: 100%;
    max-width: 620px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 0;
  }

  .hm-ms-bottle-monolith__halo {
    position: absolute;
    inset: 6% 10%;
    background: radial-gradient(circle at 50% 48%, rgba(212, 175, 55, 0.22) 0%, rgba(154, 123, 44, 0.06) 48%, transparent 76%);
    pointer-events: none;
    z-index: 1;
  }

  .hm-ms-bottle-monolith__img {
    position: relative;
    z-index: 2;
    width: clamp(290px, 38vw, 560px);
    max-height: 74vh;
    object-fit: contain;
    mask-image: radial-gradient(circle at 50% 50%, #000000 72%, transparent 99%);
    -webkit-mask-image: radial-gradient(circle at 50% 50%, #000000 72%, transparent 99%);
    filter: drop-shadow(0 36px 68px rgba(0, 0, 0, 0.95));
    transition: transform 520ms var(--ease-cinema);
  }

  .hm-ms-bottle-monolith__caption-ledger {
    position: relative;
    z-index: 3;
    width: 100%;
    margin-top: 1.5rem;
    padding-top: 1rem;
    border-top: var(--hairline-rule);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
    font-family: var(--font-technical);
    font-size: 0.74rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-muted-alabaster);
  }

  .hm-ms-subtitle-serif {
    font-family: var(--font-display);
    font-size: clamp(1.35rem, 2.1vw, 1.95rem);
    font-style: italic;
    font-weight: 400;
    color: var(--gold-foil-bright);
    line-height: 1.35;
  }

  .hm-ms-spec-ribbon {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem 2.75rem;
    padding: 1.25rem 0;
    border-top: var(--hairline-rule);
    border-bottom: var(--hairline-rule);
  }

  .hm-ms-spec-ribbon__item {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .hm-ms-spec-ribbon__label {
    font-family: var(--font-technical);
    font-size: 0.66rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }

  .hm-ms-spec-ribbon__val {
    font-family: var(--font-display);
    font-size: 1.4rem;
    color: var(--text-silk-ivory);
    line-height: 1.15;
  }

  /* Pita Pemilihan Pakej 1 / 2 / 3 Botol (RM 159 / RM 286 (10% OFF vs RM 318) / RM 405 (15% OFF vs RM 477)) */
  .hm-ms-tier-selector {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: var(--hairline-rule);
    margin-top: 0.5rem;
  }

  .hm-ms-tier-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem 1.5rem;
    padding: 1.2rem 1rem;
    border-bottom: var(--hairline-subtle);
    background: transparent;
    text-align: left;
    width: 100%;
    transition: background-color 220ms ease, padding-left 220ms var(--ease-cinema);
  }

  .hm-ms-tier-row:hover,
  .hm-ms-tier-row[aria-checked="true"],
  .hm-ms-tier-row--active {
    background: linear-gradient(90deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.02) 100%);
    border-bottom-color: var(--gold-champagne);
    padding-left: 1.35rem;
  }

  .hm-ms-tier-row__left {
    display: flex;
    flex-direction: column;
    gap: 0.22rem;
    flex: 1 1 320px;
  }

  .hm-ms-tier-row__kicker {
    font-family: var(--font-technical);
    font-size: 0.66rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }

  .hm-ms-tier-row__title {
    font-family: var(--font-display);
    font-size: 1.38rem;
    color: var(--text-silk-ivory);
  }

  .hm-ms-tier-row__meta {
    font-family: var(--font-technical);
    font-size: 0.82rem;
    color: var(--text-muted-alabaster);
  }

  .hm-ms-tier-row__right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.15rem;
  }

  .hm-ms-tier-row__price {
    font-family: var(--font-display);
    font-size: 1.85rem;
    color: var(--gold-foil-bright);
    line-height: 1;
  }

  .hm-ms-tier-row__unit {
    font-family: var(--font-technical);
    font-size: 0.7rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-ash-silver);
  }

  .hm-ms-hero-cta-cluster {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem 1.5rem;
    margin-top: 0.5rem;
  }

  .hm-ms-discreet-pledge-strip {
    margin-top: 2.5rem;
    padding-top: 1.65rem;
    border-top: var(--hairline-rule);
    max-width: 1760px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem 2.5rem;
    position: relative;
    z-index: 4;
  }

  .hm-ms-discreet-pledge-col {
    flex: 1 1 260px;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    border-left: 2px solid var(--gold-champagne);
    padding-left: 1rem;
  }

  .hm-ms-discreet-pledge-col__kicker {
    font-family: var(--font-technical);
    font-size: 0.66rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }

  .hm-ms-discreet-pledge-col__text {
    font-family: var(--font-technical);
    font-size: 0.86rem;
    color: var(--text-silk-ivory);
    line-height: 1.5;
  }

  /* ==========================================================================
     MS-101: PARADIGM D — 50vw / 50vw ANALISIS 6 EKSTRAK BOTANI & KITARAN 18 HARI
     ========================================================================== */
  .hm-ms-split-monograph {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    background-color: #0B0C10;
    border-bottom: var(--hairline-rule);
  }

  .hm-ms-split-monograph__left-sticky {
    width: 50vw;
    height: 100vh;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: clamp(5.5rem, 9vh, 7.5rem) var(--gutter-cinema) clamp(2.5rem, 5vh, 4rem);
    background:
      radial-gradient(circle at 50% 44%, rgba(212, 175, 55, 0.14) 0%, rgba(18, 20, 28, 0.88) 54%, #050507 100%);
    border-right: var(--hairline-rule);
    overflow: hidden;
  }

  .hm-ms-split-monograph__right-scroll {
    width: 50vw;
    min-height: 100vh;
    padding: clamp(5rem, 9vh, 8rem) var(--gutter-cinema);
    background-color: #050507;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }

  .hm-ms-dosage-proportion-bar {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
    padding-top: 1.25rem;
    border-top: var(--hairline-rule);
  }

  .hm-ms-dosage-proportion-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-family: var(--font-technical);
    font-size: 0.78rem;
    color: var(--text-muted-alabaster);
    padding: 0.3rem 0;
    border-bottom: var(--hairline-subtle);
  }

  .hm-ms-dosage-proportion-row strong {
    color: var(--gold-foil-bright);
    font-family: var(--font-display);
    font-size: 1.05rem;
  }

  .hm-ms-botanical-entry {
    padding: 2.5rem 0;
    border-top: var(--hairline-rule);
    display: flex;
    flex-direction: column;
    gap: 1.15rem;
  }

  .hm-ms-botanical-entry__header {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
  }

  .hm-ms-botanical-entry__code {
    font-family: var(--font-technical);
    font-size: 0.72rem;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }

  .hm-ms-botanical-entry__mg {
    font-family: var(--font-display);
    font-size: 2.1rem;
    color: var(--gold-foil-bright);
    line-height: 1;
  }

  .hm-ms-botanical-entry__title {
    font-family: var(--font-display);
    font-size: clamp(1.65rem, 2.5vw, 2.35rem);
    color: var(--text-silk-ivory);
    line-height: 1.12;
  }

  .hm-ms-botanical-entry__latin {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.15rem;
    color: var(--gold-champagne);
  }

  .hm-ms-botanical-entry__telemetry {
    display: flex;
    flex-wrap: wrap;
    gap: 1.25rem 2.5rem;
    padding: 0.85rem 0;
    border-top: var(--hairline-subtle);
    border-bottom: var(--hairline-subtle);
    font-family: var(--font-technical);
    font-size: 0.78rem;
    color: var(--text-muted-alabaster);
  }

  .hm-ms-botanical-entry__telemetry span strong {
    color: var(--text-silk-ivory);
    display: block;
    font-size: 0.68rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--gold-champagne);
    margin-bottom: 0.15rem;
  }

  .hm-ms-botanical-entry__copy {
    font-family: var(--font-technical);
    font-size: 0.96rem;
    line-height: 1.72;
    color: var(--text-muted-alabaster);
  }

  /* Seksyen Protokol Kitaran Aktif 18 Hari */
  .hm-ms-cycle-section {
    background-color: #0B0C10;
    background-image: radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.08) 0%, transparent 65%);
    padding: var(--gutter-vertical) var(--gutter-cinema);
    border-bottom: var(--hairline-rule);
  }

  .hm-ms-cycle-container {
    max-width: 1680px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }

  .hm-ms-cycle-ledger {
    border-top: var(--hairline-rule);
    display: flex;
    flex-direction: column;
  }

  .hm-ms-cycle-stage-row {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.5rem 3rem;
    padding: 2.25rem 0;
    border-bottom: var(--hairline-subtle);
  }

  .hm-ms-cycle-stage-row--highlight {
    background: linear-gradient(90deg, rgba(212, 175, 55, 0.11) 0%, transparent 100%);
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    border-left: 2px solid var(--gold-champagne);
    border-bottom-color: var(--gold-champagne);
  }

  .hm-ms-cycle-stage-row__day {
    flex: 0 0 210px;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .hm-ms-cycle-stage-row__day-kicker {
    font-family: var(--font-technical);
    font-size: 0.68rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }

  .hm-ms-cycle-stage-row__day-num {
    font-family: var(--font-display);
    font-size: 2rem;
    color: var(--gold-foil-bright);
    line-height: 1.05;
  }

  .hm-ms-cycle-stage-row__body {
    flex: 1 1 480px;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .hm-ms-cycle-stage-row__title {
    font-family: var(--font-display);
    font-size: 1.65rem;
    color: var(--text-silk-ivory);
  }

  .hm-ms-cycle-stage-row__desc {
    font-family: var(--font-technical);
    font-size: 0.95rem;
    color: var(--text-muted-alabaster);
    line-height: 1.68;
  }

  .hm-ms-cycle-stage-row__meta {
    flex: 0 0 260px;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    font-family: var(--font-technical);
    font-size: 0.8rem;
    color: var(--text-silk-ivory);
    border-left: var(--hairline-subtle);
    padding-left: 1.25rem;
  }

  /* ==========================================================================
     MS-102: JADUAL PERBANDINGAN, 16 NEGERI MALAYSIA & 10 SOALAN LAZIM (FAQ)
     ========================================================================== */
  .hm-ms-comparison-section,
  .hm-ms-states-section,
  .hm-ms-authenticity-section,
  .hm-ms-faq-section,
  .hm-ms-closing-vault {
    padding: var(--gutter-vertical) var(--gutter-cinema);
    border-bottom: var(--hairline-rule);
  }

  .hm-ms-comparison-section {
    background-color: #050507;
  }

  .hm-ms-states-section {
    background-color: #0B0C10;
  }

  .hm-ms-authenticity-section {
    background-color: #12141C;
  }

  .hm-ms-faq-section {
    background-color: #050507;
  }

  .hm-ms-closing-vault {
    background: radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.14) 0%, #0B0C10 62%, #050507 100%);
  }

  .hm-ms-section-inner {
    max-width: 1680px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .hm-ms-section-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2rem;
    padding-bottom: 2rem;
    border-bottom: var(--hairline-rule);
  }

  .hm-ms-section-header__left {
    max-width: 820px;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }

  .hm-ms-table-scroll {
    width: 100%;
    overflow-x: auto;
    border-top: var(--hairline-rule);
    border-bottom: var(--hairline-rule);
  }

  .hm-ms-architectural-table {
    width: 100%;
    min-width: 920px;
    border-collapse: collapse;
    text-align: left;
    font-family: var(--font-technical);
  }

  .hm-ms-architectural-table th,
  .hm-ms-architectural-table td {
    padding: 1.25rem 1.15rem;
    border-bottom: var(--hairline-subtle);
    vertical-align: top;
    font-size: 0.88rem;
    line-height: 1.55;
  }

  .hm-ms-architectural-table th {
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-champagne);
    border-bottom: var(--hairline-rule);
    background-color: rgba(18, 20, 28, 0.65);
  }

  .hm-ms-architectural-table td.hm-ms-col-highlight,
  .hm-ms-architectural-table th.hm-ms-col-highlight {
    background: rgba(212, 175, 55, 0.08);
    color: var(--text-silk-ivory);
    border-left: var(--hairline-rule);
    border-right: var(--hairline-rule);
  }

  .hm-ms-faq-ledger {
    border-top: var(--hairline-rule);
    display: flex;
    flex-direction: column;
  }

  .hm-ms-faq-item {
    border-bottom: var(--hairline-subtle);
    transition: background-color 220ms ease;
  }

  .hm-ms-faq-item[open] {
    background-color: rgba(212, 175, 55, 0.04);
    border-bottom-color: var(--gold-champagne);
  }

  .hm-ms-faq-summary {
    list-style: none;
    cursor: pointer;
    padding: 1.75rem 0.5rem;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .hm-ms-faq-summary::-webkit-details-marker {
    display: none;
  }

  .hm-ms-faq-summary__left {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .hm-ms-faq-summary__code {
    font-family: var(--font-technical);
    font-size: 0.68rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }

  .hm-ms-faq-summary__question {
    font-family: var(--font-display);
    font-size: clamp(1.35rem, 2vw, 1.75rem);
    color: var(--text-silk-ivory);
    line-height: 1.25;
  }

  .hm-ms-faq-summary__icon {
    font-family: var(--font-technical);
    font-size: 1.25rem;
    color: var(--gold-foil-bright);
    transition: transform 240ms var(--ease-cinema);
  }

  .hm-ms-faq-item[open] .hm-ms-faq-summary__icon {
    transform: rotate(45deg);
  }

  .hm-ms-faq-body {
    padding: 0 0.5rem 2rem;
    max-width: 980px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: var(--text-muted-alabaster);
    font-size: 0.96rem;
    line-height: 1.72;
  }

  .hm-ms-faq-clinical-note {
    padding: 0.95rem 1.25rem;
    border-left: 2px solid var(--gold-champagne);
    background-color: rgba(11, 12, 16, 0.9);
    color: var(--gold-foil-bright);
    font-size: 0.85rem;
  }

  @media (max-width: 1024px) {
    .hm-ms-split-monograph {
      flex-direction: column;
    }
    .hm-ms-split-monograph__left-sticky,
    .hm-ms-split-monograph__right-scroll {
      width: 100vw;
      height: auto;
      position: relative;
    }
    .hm-ms-split-monograph__left-sticky {
      border-right: none;
      border-bottom: var(--hairline-rule);
    }
    .hm-ms-cycle-stage-row__meta {
      border-left: none;
      padding-left: 0;
      border-top: var(--hairline-subtle);
      padding-top: 0.75rem;
      flex: 1 1 100%;
    }
  }
</style>
`;

/**
 * ============================================================================
 * MS-100: PENTAS SINEMATIK OBSIDIAN 100vw x 100vh HORSEMEN MALAYSIA
 * - Imej Pentas Studio: /assets/products/horsemen-stage.webp & .png
 * - Pemilih Pakej 1/2/3 Botol (RM 159 / RM 286 (10% OFF vs RM 318) / RM 405 (15% OFF vs RM 477))
 * - Jaminan Penghantaran Rahsia Kotak Kosong ("OM Fulfilment Logistics")
 * - Pemicu Laci Tempahan Ekspres 1-Klik (data-order-product="horsemen")
 * ============================================================================
 */
function renderChapterMs100() {
  return `
  <!-- ========================================================================
       BAB I (MS-100): PENTAS SINEMATIK OBSIDIAN 100vw x 100vh HORSEMEN MALAYSIA
       ======================================================================== -->
  <section
    id="pentas-utama-horsemen"
    class="hm-ms-cinema-hero cinema-stage-100vh"
    aria-labelledby="hm-ms-hero-title"
    data-paradigm="A-100vw-100vh"
  >
    <div class="hm-ms-cinema-hero__ambient-crest" aria-hidden="true">HORSEMEN</div>

    <!-- Bar Telemetri Atas & Laluan Breadcrumb -->
    <div class="hm-ms-cinema-hero__top-strip">
      <nav class="hm-ms-breadcrumb" aria-label="Laluan Navigasi Halaman">
        <a href="/ms/" class="hm-ms-breadcrumb__link">Utama Onyxmen</a>
        <span class="hm-ms-breadcrumb__sep" aria-hidden="true">/</span>
        <a href="/ms/produk/" class="hm-ms-breadcrumb__link">4 Formulasi Utama</a>
        <span class="hm-ms-breadcrumb__sep" aria-hidden="true">/</span>
        <span class="hm-ms-breadcrumb__current" aria-current="page">Horsemen Malaysia (20 Kapsul × 500mg)</span>
      </nav>

      <div class="hm-ms-telemetry-codes" aria-label="Kod Pengesahan Inventori Rasmi">
        <span>SKU: <strong>ONYX-HM-20</strong></span>
        <span aria-hidden="true">·</span>
        <span>MPN: <strong>HM-500MG-20MY</strong></span>
        <span aria-hidden="true">·</span>
        <span>GTIN-13: <strong>9550000102011</strong></span>
        <span aria-hidden="true">·</span>
        <span>STATUS: <strong>STOK SEDIA DIHANTAR (KUALA LUMPUR)</strong></span>
      </div>
    </div>

    <!-- Pentas Utama 2-Lajur Sinematik (Naratif Editorial + Monolit Botol Studio) -->
    <div class="hm-ms-cinema-hero__stage">
      <!-- Lajur Kiri: Tipografi Editorial & Pita Pemilihan Pakej 1/2/3 Botol -->
      <div class="hm-ms-cinema-hero__narrative-col">
        <span class="editorial-kicker">
          FORMULASI I · RIZAB APOTEKARI HERBA 20 KAPSUL × 500MG · EDISI RASMI MALAYSIA
        </span>

        <h1 id="hm-ms-hero-title" class="editorial-headline-xl">
          Horsemen <span class="foil-champagne-text">Malaysia</span>
        </h1>

        <p class="hm-ms-subtitle-serif">
          Suplemen Herba Vitaliti &amp; Tenaga Lelaki — 20 Kapsul × 500mg (10,000mg Ekstrak Botani Padat)
        </p>

        <p id="hm-ms-executive-summary" class="editorial-lead-paragraph">
          Dirumus khusus untuk lelaki dewasa di Malaysia yang menuntut kesediaan tenaga malam yang tangkas, ketahanan fizikal berpanjangan, dan pemulihan kelesuan selepas waktu kerja. Setiap kapsul 500mg menyatukan ekstrak piawai <strong>Tongkat Ali Malaysia 100:1 (150mg)</strong>, <strong>Maca Hitam Peru (100mg)</strong>, <strong>Epimedium (80mg)</strong>, <strong>L-Arginine HCl (80mg)</strong>, <strong>Ginseng Merah Korea (60mg)</strong>, serta <strong>Tribulus &amp; Zink (30mg)</strong>.
        </p>

        <!-- Pita Spesifikasi Fizikal & Jisim Kapsul -->
        <div class="hm-ms-spec-ribbon" role="region" aria-label="Spesifikasi Teknikal Botol Horsemen Malaysia">
          <div class="hm-ms-spec-ribbon__item">
            <span class="hm-ms-spec-ribbon__label">KANDUNGAN SETIAP BOTOL</span>
            <span class="hm-ms-spec-ribbon__val">20 Kapsul × 500mg</span>
          </div>
          <div class="hm-ms-spec-ribbon__item">
            <span class="hm-ms-spec-ribbon__label">JUMLAH JISIM BOTANI</span>
            <span class="hm-ms-spec-ribbon__val">10,000mg (10g)</span>
          </div>
          <div class="hm-ms-spec-ribbon__item">
            <span class="hm-ms-spec-ribbon__label">KITARAN &amp; NOTIS ISIAN SEMULA</span>
            <span class="hm-ms-spec-ribbon__val">Hari Ke-18 Automatik</span>
          </div>
          <div class="hm-ms-spec-ribbon__item">
            <span class="hm-ms-spec-ribbon__label">HARGA RASMI SEBOTOL</span>
            <span class="hm-ms-spec-ribbon__val foil-champagne-text">RM 159.00 MYR</span>
          </div>
        </div>

        <!-- Pemilih Pakej 1 / 2 / 3 Botol (RM 159 / RM 286 (10% OFF vs RM 318) / RM 405 (15% OFF vs RM 477)) -->
        <div
          class="hm-ms-tier-selector"
          role="radiogroup"
          aria-label="Pilih Pakej Rizab Botol Horsemen Malaysia"
          data-hm-tier-group
        >
          <!-- Pakej 1 Botol: RM 159 -->
          <button
            type="button"
            class="hm-ms-tier-row"
            role="radio"
            aria-checked="false"
            data-open-order-drawer="true"
            data-order-product="horsemen"
            data-order-qty="1"
            data-hm-tier-btn="1"
          >
            <div class="hm-ms-tier-row__left">
              <span class="hm-ms-tier-row__kicker">
                PAKEJ I · KITARAN PERMULAAN 20 HARI · PENGHANTARAN PERCUMA SEMENANJUNG
              </span>
              <span class="hm-ms-tier-row__title">
                1 Botol Horsemen Malaysia — 20 Kapsul × 500mg (10,000mg)
              </span>
              <span class="hm-ms-tier-row__meta">
                Bungkusan Rahsia Kotak Kosong · Peringatan Kalendar Hari Ke-18 · RM 12 Kargo Udara Sabah/Sarawak
              </span>
            </div>
            <div class="hm-ms-tier-row__right">
              <span class="hm-ms-tier-row__price">RM 159</span>
              <span class="hm-ms-tier-row__unit">RM 159.00 / BOTOL</span>
            </div>
          </button>

          <!-- Pakej 2 Botol: RM 286 (10% OFF vs RM 318) (Pilihan Utama KL & Selangor) -->
          <button
            type="button"
            class="hm-ms-tier-row hm-ms-tier-row--active"
            role="radio"
            aria-checked="true"
            data-open-order-drawer="true"
            data-order-product="horsemen"
            data-order-qty="2"
            data-hm-tier-btn="2"
          >
            <div class="hm-ms-tier-row__left">
              <span class="hm-ms-tier-row__kicker">
                PAKEJ II · PILIHAN UTAMA DI KL, SELANGOR &amp; JOHOR · PERCUMA SELURUH MALAYSIA
              </span>
              <span class="hm-ms-tier-row__title">
                2 Botol Horsemen Malaysia — 40 Kapsul × 500mg (20,000mg)
              </span>
              <span class="hm-ms-tier-row__meta">
                Protokol Dwi-Momentum 40 Hari · Penghantaran Ekspres Percuma Termasuk Sabah, Sarawak &amp; Labuan · Notis Hari Ke-36
              </span>
            </div>
            <div class="hm-ms-tier-row__right">
              <span class="hm-ms-tier-row__price">RM 318</span>
              <span class="hm-ms-tier-row__unit">RM 159.00 / BOTOL · PERCUMA POS</span>
            </div>
          </button>

          <!-- Pakej 3 Botol: RM 405 (15% OFF vs RM 477) -->
          <button
            type="button"
            class="hm-ms-tier-row"
            role="radio"
            aria-checked="false"
            data-open-order-drawer="true"
            data-order-product="horsemen"
            data-order-qty="3"
            data-hm-tier-btn="3"
          >
            <div class="hm-ms-tier-row__left">
              <span class="hm-ms-tier-row__kicker">
                PAKEJ III · RIZAB APOTEKARI LENGKAP 60 HARI · KEUTAMAAN VIP &amp; PENGHANTAR PERSENDIRIAN
              </span>
              <span class="hm-ms-tier-row__title">
                3 Botol Horsemen Malaysia — 60 Kapsul × 500mg (30,000mg)
              </span>
              <span class="hm-ms-tier-row__meta">
                Kitaran Penuh 60 Hari · Pelepasan Keutamaan Hari Sama Lembah Klang · Khidmat Peringatan VIP Hari Ke-54
              </span>
            </div>
            <div class="hm-ms-tier-row__right">
              <span class="hm-ms-tier-row__price">RM 477</span>
              <span class="hm-ms-tier-row__unit">RM 159.00 / BOTOL · KEUTAMAAN VIP</span>
            </div>
          </button>
        </div>

        <!-- Gugusan Butang Tindakan Utama (Express Order Drawer & Semakan Monograf) -->
        <div class="hm-ms-hero-cta-cluster">
          <button
            type="button"
            id="hm-ms-primary-order-cta"
            class="cta-foil-primary"
            data-open-order-drawer="true"
            data-order-product="horsemen"
            data-order-qty="2"
            aria-controls="onyxman-express-order-drawer"
          >
            <span>TEMPAH BUNGKUSAN RAHSIA · RM 159 / BOTOL</span>
            <span aria-hidden="true">→</span>
          </button>

          <a href="#analisis-6-ekstrak-botani" class="cta-hairline-secondary">
            <span>SEMAK 6 EKSTRAK AKTIF (500MG)</span>
            <span aria-hidden="true">↓</span>
          </a>

          <a href="/horsemen-malaysia/" lang="en-MY" hreflang="en-MY" class="cta-hairline-secondary">
            <span>ENGLISH EDITION (EN-MY)</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <!-- Lajur Kanan: Pementasan Studio /assets/products/horsemen-stage.webp -->
      <div class="hm-ms-cinema-hero__visual-col">
        <figure class="hm-ms-bottle-monolith">
          <div class="hm-ms-bottle-monolith__halo" aria-hidden="true"></div>
          <picture>
            <source srcset="/assets/products/horsemen-stage.webp" type="image/webp" />
            <img
              src="/assets/products/horsemen-stage.png"
              alt="Botol Rasmi Horsemen Malaysia — Suplemen Herba Vitaliti & Tenaga Lelaki 20 Kapsul x 500mg (RM 159 Onyxmen Malaysia)"
              width="900"
              height="1125"
              fetchpriority="high"
              decoding="async"
              class="hm-ms-bottle-monolith__img cinema-stage-100vh__bottle-render"
              data-parallax-bottle
            />
          </picture>
          <figcaption class="hm-ms-bottle-monolith__caption-ledger">
            <span>BOTOL OBSIDIAN KEDAP UDARA · KEMASAN MERAH METALIK &amp; EMAS</span>
            <span>20 KAPSUL × 500MG · GTIN: 9550000102011</span>
          </figcaption>
        </figure>
      </div>
    </div>

    <!-- Jalur Jaminan Penghantaran Rahsia Kotak Kosong & Penyelesaian Malaysia -->
    <div class="hm-ms-discreet-pledge-strip" role="region" aria-label="Jaminan Privasi & Penghantaran Malaysia">
      <div class="hm-ms-discreet-pledge-col">
        <span class="hm-ms-discreet-pledge-col__kicker">01 · JAMINAN KOTAK KOSONG 100% RAHSIA</span>
        <p class="hm-ms-discreet-pledge-col__text">
          Dibungkus dalam kotak keselamatan legap tanpa sebarang logo. Slip kurier hanya memaparkan <strong>"OM Fulfilment Logistics (Kuala Lumpur)"</strong> — sifar nama Horsemen atau suplemen lelaki.
        </p>
      </div>

      <div class="hm-ms-discreet-pledge-col">
        <span class="hm-ms-discreet-pledge-col__kicker">02 · PENGHANTAR PERSENDIRIAN LEMBAH KLANG 3–5 JAM</span>
        <p class="hm-ms-discreet-pledge-col__text">
          Serahan hari sama di Kuala Lumpur, Petaling Jaya, Subang Jaya, Shah Alam, Putrajaya &amp; Cyberjaya. Kurier ekspres 1–2 hari bekerja ke seluruh Semenanjung Malaysia.
        </p>
      </div>

      <div class="hm-ms-discreet-pledge-col">
        <span class="hm-ms-discreet-pledge-col__kicker">03 · FPX, DUITNOW QR &amp; BAYAR WAKTU TERIMA (COD)</span>
        <p class="hm-ms-discreet-pledge-col__text">
          Selesaikan tempahan melalui Maybank2u, CIMB Clicks, DuitNow QR Segera, atau pilih <strong>COD (Bayar Waktu Terima)</strong> terus kepada posmen kurier semasa bungkusan tiba.
        </p>
      </div>

      <div class="hm-ms-discreet-pledge-col">
        <span class="hm-ms-discreet-pledge-col__kicker">04 · MEJA OPERASI &amp; WHATSAPP PRIVASI</span>
        <p class="hm-ms-discreet-pledge-col__text">
          Disokong terus oleh meja pelepasan rasmi kami di <a href="mailto:sales@onyxmen.my">sales@onyxmen.my</a>, <a href="mailto:info@onyxmen.my">info@onyxmen.my</a> &amp; <a href="mailto:waleedshoaibofficial@gmail.com">waleedshoaibofficial@gmail.com</a>.
        </p>
      </div>
    </div>
  </section>
  `;
}

/**
 * ============================================================================
 * MS-101: PARADIGM D PINNED 50vw / 50vw ANALISIS 6 EKSTRAK BOTANI AKTIF
 * (150mg + 100mg + 80mg + 80mg + 60mg + 30mg = 500mg setiap kapsul)
 * + PROTOKOL KITARAN AKTIF 18 HARI & PERINGATAN ISIAN SEMULA HARI KE-18
 * ============================================================================
 */
function renderChapterMs101() {
  return `
  <!-- ========================================================================
       BAB II (MS-101 BAHAGIAN A): PARADIGM D 50vw / 50vw ANALISIS 6 EKSTRAK BOTANI AKTIF
       ======================================================================== -->
  <section
    id="analisis-6-ekstrak-botani"
    class="hm-ms-split-monograph split-stage-5050"
    aria-labelledby="hm-ms-botanical-heading"
    data-split-stage
    data-paradigm="D-50vw-50vw"
  >
    <!-- Panel Kiri Sticky 50vw: Visual Potret Studio & Pecahan Jisim 500mg -->
    <div class="hm-ms-split-monograph__left-sticky split-stage-5050__visual-pane">
      <div class="split-stage-5050__index-watermark" data-split-watermark aria-hidden="true">01</div>

      <div style="position: relative; z-index: 2;">
        <span class="editorial-kicker">PARADIGMA D · SENI BINA FITOKIMIA 500MG</span>
        <h2 style="font-family: var(--font-display); font-size: clamp(1.85rem, 2.8vw, 2.85rem); color: var(--text-silk-ivory); margin-top: 0.45rem;">
          Matriks 6 Ekstrak Aktif <span class="foil-champagne-text">500mg Setiap Kapsul</span>
        </h2>
      </div>

      <figure class="split-stage-5050__visual-figure" style="margin: 1rem auto;">
        <picture>
          <source srcset="/assets/products/horsemen-portrait.webp" type="image/webp" />
          <img
            src="/assets/products/horsemen-portrait.png"
            alt="Monograf Fitokimia Horsemen Malaysia — 20 Kapsul x 500mg (Tongkat Ali 150mg, Maca Hitam 100mg, Epimedium 80mg, L-Arginine HCl 80mg, Ginseng Merah 60mg, Tribulus & Zink 30mg)"
            width="760"
            height="950"
            loading="lazy"
            decoding="async"
            class="split-stage-5050__visual-img"
            data-split-visual-img
          />
        </picture>
      </figure>

      <!-- Lejar Pecahan Ketepatan Miligram (Jumlah = 500mg / Kapsul) -->
      <div class="hm-ms-dosage-proportion-bar" aria-label="Pecahan Miligram Setiap Kapsul 500mg Horsemen">
        <div class="hm-ms-dosage-proportion-row">
          <span>01 · Tongkat Ali Malaysia 100:1 (2.2% Eurycomanone)</span>
          <strong>150 mg (30.0%)</strong>
        </div>
        <div class="hm-ms-dosage-proportion-row">
          <span>02 · Maca Hitam Peru Terjelatin (0.6% Macamides)</span>
          <strong>100 mg (20.0%)</strong>
        </div>
        <div class="hm-ms-dosage-proportion-row">
          <span>03 · Epimedium Sagittatum (10% Flavonoid Icariins)</span>
          <strong>80 mg (16.0%)</strong>
        </div>
        <div class="hm-ms-dosage-proportion-row">
          <span>04 · L-Arginine HCl (99.2% Asid Amino Bentuk Bebas)</span>
          <strong>80 mg (16.0%)</strong>
        </div>
        <div class="hm-ms-dosage-proportion-row">
          <span>05 · Ginseng Merah Korea Matang 6 Tahun (8% Ginsenosida)</span>
          <strong>60 mg (12.0%)</strong>
        </div>
        <div class="hm-ms-dosage-proportion-row">
          <span>06 · Tribulus Terrestris (45% Saponin) &amp; Zink Pikolinat</span>
          <strong>30 mg (6.0%)</strong>
        </div>
        <div class="hm-ms-dosage-proportion-row" style="border-bottom: none; padding-top: 0.5rem;">
          <span style="color: var(--gold-champagne); letter-spacing: 0.14em; text-transform: uppercase;">
            JUMLAH KEPEKATAN SETIAP KAPSUL (× 20 KAPSUL = 10,000MG)
          </span>
          <strong style="font-size: 1.3rem;">500 mg (100%)</strong>
        </div>
      </div>
    </div>

    <!-- Panel Kanan Tatalan 50vw: Monograf Terperinci 6 Ekstrak Botani Aktif -->
    <div class="hm-ms-split-monograph__right-scroll split-stage-5050__narrative-pane">
      <div>
        <span class="editorial-kicker">BAB II · MONOGRAF MAKMAL APOTEKARI (MS-101)</span>
        <h2 id="hm-ms-botanical-heading" class="editorial-headline-lg" style="margin-top: 0.65rem;">
          Analisis Saintifik 6 Ekstrak Botani &amp; Asid Amino Aktif di Dalam Horsemen Malaysia
        </h2>
        <p class="editorial-lead-paragraph" style="margin-top: 1rem;">
          Berbeza dengan produk pasaran lambakan yang menyembunyikan dos sebenar di sebalik istilah "campuran proprietari" atau memenuhkan kapsul dengan serbuk akar mentah yang tidak dipiawaikan, Horsemen Malaysia mendedahkan ketepatan miligram bagi kesemua 6 komponen bio-aktifnya. Setiap kapsul 500mg direka untuk bertindak secara sinergi merentasi tiga laluan fisiologi lelaki dewasa: <strong>sokongan adaptogenik endokrin semula jadi</strong>, <strong>prekursor nitrik oksida endotelium</strong>, dan <strong>tenaga metabolik selular ATP</strong>.
        </p>
      </div>

      <!-- EKSTRAK 01: TONGKAT ALI MALAYSIA (150MG) -->
      <article
        id="ekstrak-01-tongkat-ali"
        class="hm-ms-botanical-entry architectural-ledger__row"
        data-botanical-step="01"
        data-step-index="01"
        data-step-image="/assets/products/horsemen-portrait.webp"
      >
        <div class="hm-ms-botanical-entry__header">
          <span class="hm-ms-botanical-entry__code">HM-ACT-01 · TERAS ADAPTOGENIK NUSANTARA (30% JISIM KAPSUL)</span>
          <span class="hm-ms-botanical-entry__mg">150 mg / Kapsul</span>
        </div>
        <h3 class="hm-ms-botanical-entry__title">
          Ekstrak Akar Tongkat Ali Hitam &amp; Kuning Malaysia (Nisbah Ekstraksi 100:1)
        </h3>
        <p class="hm-ms-botanical-entry__latin">
          Eurycoma longifolia Jack — Dipiawaikan kepada ≥ 2.2% Eurycomanone &amp; Fraksi Bio-Kuasinoid
        </p>
        <div class="hm-ms-botanical-entry__telemetry">
          <span>
            <strong>SUMBER BOTANI</strong>
            Akar Matang Hutan Hujan Semenanjung Malaysia (Pahang &amp; Perak)
          </span>
          <span>
            <strong>KAEDAH EKSTRAKSI</strong>
            Ekstraksi Air-Etanol Suhu Rendah Berperingkat 100:1
          </span>
          <span>
            <strong>JISIM SEBOTOL (20 KAPSUL)</strong>
            3,000 mg (3.0g) Ekstrak Pekat
          </span>
        </div>
        <p class="hm-ms-botanical-entry__copy">
          Sebagai komponen utama pada kepekatan <strong>150mg setiap kapsul</strong>, ekstrak akar <em>Eurycoma longifolia</em> di dalam Horsemen Malaysia menggunakan nisbah pengekstrakan 100:1 yang menumpukan sebatian bio-aktif <strong>eurycomanone</strong>, <strong>eurycomanol</strong>, dan <strong>glikosaponin</strong>. Bagi lelaki dewasa di Malaysia yang berdepan waktu kerja panjang, kesesakan trafik harian, dan tekanan korporat, peningkatan hormon kortisol pada lewat petang sering menghakis kecergasan malam. Fraksi kuasinoid Tongkat Ali menyokong keseimbangan nisbah tenaga dalaman lelaki, meredakan kelesuan akibat tekanan, dan membina daya tahan fizikal yang mantap tanpa menyebabkan rangsangan saraf berlebihan.
        </p>
        <p class="hm-ms-botanical-entry__copy">
          Kajian fitokimia menunjukkan bahawa pengekstrakan air-etanol berpiawai memastikan bio-ketersediaan eurycomanone yang jauh lebih tinggi berbanding rebusan akar kayu tradisional, membolehkan penyerapan berlaku secara konsisten dalam tempoh 45 hingga 60 minit selepas pengambilan bersama air suam.
        </p>
      </article>

      <!-- EKSTRAK 02: MACA HITAM PERU (100MG) -->
      <article
        id="ekstrak-02-maca-hitam"
        class="hm-ms-botanical-entry architectural-ledger__row"
        data-botanical-step="02"
        data-step-index="02"
        data-step-image="/assets/products/horsemen-stage.webp"
      >
        <div class="hm-ms-botanical-entry__header">
          <span class="hm-ms-botanical-entry__code">HM-ACT-02 · TENAGA ADAPTOGENIK TANPA KAFEIN (20% JISIM KAPSUL)</span>
          <span class="hm-ms-botanical-entry__mg">100 mg / Kapsul</span>
        </div>
        <h3 class="hm-ms-botanical-entry__title">
          Ekstrak Akar Maca Hitam Peru Terjelatin (Varian Fenotip Hitam Jarang)
        </h3>
        <p class="hm-ms-botanical-entry__latin">
          Lepidium meyenii Walp. — Dipiawaikan kepada ≥ 0.6% Macamides &amp; Macaenes (Bebas Kanji Mentah)
        </p>
        <div class="hm-ms-botanical-entry__telemetry">
          <span>
            <strong>SUMBER BOTANI</strong>
            Dataran Tinggi Junín Andes, Peru (Altitud 4,100 Meter)
          </span>
          <span>
            <strong>PEMPROSESAN</strong>
            Penjelatinan Enzimatik (Menyingkirkan Rantai Kanji Sukar Hadam)
          </span>
          <span>
            <strong>JISIM SEBOTOL (20 KAPSUL)</strong>
            2,000 mg (2.0g) Ekstrak Maca Hitam
          </span>
        </div>
        <p class="hm-ms-botanical-entry__copy">
          Antara tiga ekotip utama tumbuhan <em>Lepidium meyenii</em> (kuning, merah, dan hitam), <strong>Maca Hitam</strong> merupakan fenotip paling jarang dituai dan paling kaya dengan alkamida rantai panjang yang dikenali sebagai <strong>macamides</strong> dan <strong>macaenes</strong>. Pada dos <strong>100mg setiap kapsul</strong>, Horsemen menggunakan ekstrak Maca Hitam yang telah melalui proses penjelatinan haba terkawal untuk memecahkan rantai amilosa dan kanji mentah. Ini memastikan penyerapan usus yang pantas tanpa rasa kembung perut.
        </p>
        <p class="hm-ms-botanical-entry__copy">
          Keistimewaan utama Maca Hitam Peru ialah keupayaannya membekalkan daya tahan fizikal, fokus mental, dan dorongan vitaliti malam secara <strong>100% bebas kafein</strong>. Pengguna dapat menikmati tenaga malam yang berpanjangan dan kemudian berehat dengan tidur yang nyenyak tanpa gangguan insomnia.
        </p>
      </article>

      <!-- EKSTRAK 03: EPIMEDIUM SAGITTATUM (80MG) -->
      <article
        id="ekstrak-03-epimedium"
        class="hm-ms-botanical-entry architectural-ledger__row"
        data-botanical-step="03"
        data-step-index="03"
        data-step-image="/assets/products/horsemen-cutout.webp"
      >
        <div class="hm-ms-botanical-entry__header">
          <span class="hm-ms-botanical-entry__code">HM-ACT-03 · SINERGI FLAVONOID MIKRO-VASKULAR (16% JISIM KAPSUL)</span>
          <span class="hm-ms-botanical-entry__mg">80 mg / Kapsul</span>
        </div>
        <h3 class="hm-ms-botanical-entry__title">
          Ekstrak Daun Epimedium Sagittatum (Kompleks Horny Goat Weed Piawai)
        </h3>
        <p class="hm-ms-botanical-entry__latin">
          Epimedium sagittatum (Siebold &amp; Zucc.) Maxim. — Dipiawaikan kepada 10% Flavonoid Icariins
        </p>
        <div class="hm-ms-botanical-entry__telemetry">
          <span>
            <strong>SEBATIAN PENANDA AKTIF</strong>
            10% Icariin (8mg Flavonoid Prenilasi Tulen / Kapsul)
          </span>
          <span>
            <strong>SINERGI FISIOLOGI</strong>
            Berfungsi Bersama L-Arginine HCl untuk Sokongan Endotelium
          </span>
          <span>
            <strong>JISIM SEBOTOL (20 KAPSUL)</strong>
            1,600 mg (1.6g) Ekstrak Epimedium
          </span>
        </div>
        <p class="hm-ms-botanical-entry__copy">
          Digunakan selama berabad-abad dalam herba klasik Asia Timur, bahagian daun <em>Epimedium sagittatum</em> mengandungi glikosida flavonol prenilasi yang dipanggil <strong>icariin</strong>. Di dalam setiap kapsul Horsemen Malaysia, <strong>80mg ekstrak Epimedium</strong> dipiawaikan kepada ketulenan 10% icariins bagi menyokong kelancaran peredaran darah mikro dan tindak balas fizikal yang responsif.
        </p>
        <p class="hm-ms-botanical-entry__copy">
          Apabila digabungkan bersama L-Arginine HCl (80mg), flavonoid icariin membantu mengekalkan ketersediaan isyarat nitrik oksida semula jadi di dalam tisu vaskular periferi, menjadikannya kunci utama kepada keberkesanan Protokol A (pengambilan 45–60 minit sebelum aktiviti malam).
        </p>
      </article>

      <!-- EKSTRAK 04: L-ARGININE HCL (80MG) -->
      <article
        id="ekstrak-04-l-arginine"
        class="hm-ms-botanical-entry architectural-ledger__row"
        data-botanical-step="04"
        data-step-index="04"
        data-step-image="/assets/products/horsemen-portrait.webp"
      >
        <div class="hm-ms-botanical-entry__header">
          <span class="hm-ms-botanical-entry__code">HM-ACT-04 · PREKURSOR NITRIK OKSIDA LANGSUNG (16% JISIM KAPSUL)</span>
          <span class="hm-ms-botanical-entry__mg">80 mg / Kapsul</span>
        </div>
        <h3 class="hm-ms-botanical-entry__title">
          L-Arginine Hydrochloride (Asid Amino Bentuk Bebas Gred Farmaseutikal)
        </h3>
        <p class="hm-ms-botanical-entry__latin">
          L-Arginine HCl — Ketulenan ≥ 99.2% melalui Fermentasi Semula Jadi
        </p>
        <div class="hm-ms-botanical-entry__telemetry">
          <span>
            <strong>FUNGSI BIOLOGI</strong>
            Substrat Langsung Enzim Endothelial Nitric Oxide Synthase (eNOS)
          </span>
          <span>
            <strong>KETERLARUTAN AIR SUAM</strong>
            Larut Sepenuhnya dalam &lt; 18 Minit pada Suhu Badan 37°C
          </span>
          <span>
            <strong>JISIM SEBOTOL (20 KAPSUL)</strong>
            1,600 mg (1.6g) L-Arginine HCl
          </span>
        </div>
        <p class="hm-ms-botanical-entry__copy">
          <strong>L-Arginine Hydrochloride (80mg)</strong> ialah asid amino separa penting yang bertindak sebagai bahan mentah biologi langsung untuk penghasilan <strong>nitrik oksida (NO)</strong> di lapisan endotelium saluran darah. Bentuk garam hidroklorida (HCl) dipilih secara khusus oleh ahli formulasi Onyxmen kerana kestabilannya terhadap kelembapan iklim tropika Malaysia serta kadar keterlarutannya yang tinggi di dalam perut.
        </p>
        <p class="hm-ms-botanical-entry__copy">
          Penghasilan nitrik oksida yang lancar menyokong keanjalan vaskular serta mempercepatkan pengangkutan oksigen dan fitonutrien Tongkat Ali serta Ginseng Merah ke seluruh tisu otot semasa aktiviti fizikal malam.
        </p>
      </article>

      <!-- EKSTRAK 05: GINSENG MERAH KOREA (60MG) -->
      <article
        id="ekstrak-05-ginseng-merah"
        class="hm-ms-botanical-entry architectural-ledger__row"
        data-botanical-step="05"
        data-step-index="05"
        data-step-image="/assets/products/horsemen-stage.webp"
      >
        <div class="hm-ms-botanical-entry__header">
          <span class="hm-ms-botanical-entry__code">HM-ACT-05 · TENAGA SELULAR ATP &amp; KARDIO (12% JISIM KAPSUL)</span>
          <span class="hm-ms-botanical-entry__mg">60 mg / Kapsul</span>
        </div>
        <h3 class="hm-ms-botanical-entry__title">
          Ekstrak Akar Panax Ginseng Merah Korea (Akar Matang 6 Tahun)
        </h3>
        <p class="hm-ms-botanical-entry__latin">
          Panax ginseng C.A. Mey. — Dipiawaikan kepada ≥ 8% Jumlah Ginsenosida (Rg1, Rb1, Rg3)
        </p>
        <div class="hm-ms-botanical-entry__telemetry">
          <span>
            <strong>TEMPOH KEMATANGAN AKAR</strong>
            6 Tahun Penanaman Terkawal Sebelum Pengukusan Ginseng Merah
          </span>
          <span>
            <strong>PROFIL SAPONIN TRITERPENA</strong>
            Protopanaxadiol (Rb1, Rg3) &amp; Protopanaxatriol (Rg1)
          </span>
          <span>
            <strong>JISIM SEBOTOL (20 KAPSUL)</strong>
            1,200 mg (1.2g) Ekstrak Panax Ginseng
          </span>
        </div>
        <p class="hm-ms-botanical-entry__copy">
          Akar <em>Panax ginseng</em> yang dituai hanya selepas mencapai usia kematangan 6 tahun dan dikukus secara tradisional menghasilkan profil <strong>Ginsenosida Rg3 dan Rg1</strong> yang unik. Pada kepekatan <strong>60mg setiap kapsul</strong>, Ginseng Merah Korea menyokong kecekapan mitokondria dalam menjana tenaga selular adenosin trifosfat (ATP) serta meningkatkan kapasiti pengambilan oksigen semasa senaman atau aktiviti fizikal.
        </p>
        <p class="hm-ms-botanical-entry__copy">
          Ia berfungsi sebagai pelengkap seimbang kepada Tongkat Ali Malaysia: sementara Tongkat Ali menyokong asas kecergasan dalaman, Ginseng Merah Korea memastikan tubuh kekal bertenaga, fokus, dan cepat pulih daripada keletihan mental.
        </p>
      </article>

      <!-- EKSTRAK 06: TRIBULUS TERRESTRIS & ZINK PIKOLINAT (30MG) -->
      <article
        id="ekstrak-06-tribulus-zink"
        class="hm-ms-botanical-entry architectural-ledger__row"
        data-botanical-step="06"
        data-step-index="06"
        data-step-image="/assets/products/horsemen-cutout.webp"
      >
        <div class="hm-ms-botanical-entry__header">
          <span class="hm-ms-botanical-entry__code">HM-ACT-06 · KOFAKTOR MINERAL &amp; SAPONIN (6% JISIM KAPSUL)</span>
          <span class="hm-ms-botanical-entry__mg">30 mg / Kapsul</span>
        </div>
        <h3 class="hm-ms-botanical-entry__title">
          Kompleks Tribulus Terrestris Saponin &amp; Kofaktor Zink Pikolinat
        </h3>
        <p class="hm-ms-botanical-entry__latin">
          Tribulus terrestris L. (45% Saponin Furostanol) + Zinc Picolinate Kelat Organik
        </p>
        <div class="hm-ms-botanical-entry__telemetry">
          <span>
            <strong>PERANAN MIKRONUTRIEN</strong>
            Kofaktor Enzim Sintesis Protein &amp; Kesihatan Reproduktif Lelaki
          </span>
          <span>
            <strong>BENTUK KELAT</strong>
            Asid Pikolinik (Kadar Penyerapan Usus Tertinggi)
          </span>
          <span>
            <strong>JISIM SEBOTOL (20 KAPSUL)</strong>
            600 mg Kompleks Saponin &amp; Zink
          </span>
        </div>
        <p class="hm-ms-botanical-entry__copy">
          Melengkapkan matriks 500mg setiap kapsul ialah <strong>30mg Kompleks Tribulus Terrestris (45% saponin furostanol protodioscin) dan Zink Pikolinat</strong>. Lelaki yang aktif bekerja dan kerap berpeluh dalam cuaca panas lembap Malaysia kehilangan mineral zink melalui peluh setiap hari. Kekurangan zink boleh menjejaskan metabolisme tenaga dan kualiti vitaliti lelaki.
        </p>
        <p class="hm-ms-botanical-entry__copy">
          Dengan menggabungkan Zink dalam bentuk kelat pikolinat yang mudah diserap bersama saponin Tribulus, setiap kapsul Horsemen memastikan badan mempunyai kofaktor mineral yang mencukupi untuk memanfaatkan sepenuhnya kelima-lima ekstrak botani utama di atas.
        </p>
      </article>
    </div>
  </section>

  <!-- ========================================================================
       BAB III (MS-101 BAHAGIAN B): PROTOKOL KITARAN AKTIF 18 HARI & PERINGATAN ISIAN SEMULA HARI KE-18
       ======================================================================== -->
  <section
    id="protokol-kitaran-18-hari"
    class="hm-ms-cycle-section"
    aria-labelledby="hm-ms-cycle-heading"
  >
    <div class="hm-ms-cycle-container">
      <div class="hm-ms-section-header">
        <div class="hm-ms-section-header__left">
          <span class="editorial-kicker">BAB III · KRONOBIOLOGI PENYERAPAN &amp; KESINAMBUNGAN KITARAN (MS-101)</span>
          <h2 id="hm-ms-cycle-heading" class="editorial-headline-lg">
            Protokol Kitaran Aktif 18 Hari &amp; Sistem Peringatan Isian Semula <span class="foil-champagne-text">Hari Ke-18</span>
          </h2>
          <p class="editorial-lead-paragraph">
            Setiap botol Horsemen Malaysia mengandungi tepat <strong>20 kapsul × 500mg</strong>. Bagi memastikan tahap bio-saturasi eurycomanone, macamides, dan ginsenosida di dalam tubuh anda tidak jatuh mendadak apabila botol pertama hampir tamat, sistem kejuruteraan pelanggan Onyxmen Malaysia menetapkan <strong>Titik Peringatan Isian Semula pada Hari Ke-18</strong>.
          </p>
        </div>

        <div>
          <button
            type="button"
            class="cta-foil-primary"
            data-open-order-drawer="true"
            data-order-product="horsemen"
            data-order-qty="2"
          >
            <span>MULAKAN KITARAN 40 HARI (2 BOTOL · RM 286 (10% OFF vs RM 318))</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <!-- Perbandingan Dwi-Mod Pengambilan (Protokol A vs Protokol B) -->
      <div class="architectural-ledger" role="region" aria-label="Dua Mod Pengambilan Rasmi Horsemen Malaysia">
        <div class="architectural-ledger__row" style="padding: 2rem 0;">
          <span class="architectural-ledger__index">MOD A</span>
          <h3 class="architectural-ledger__title">
            Protokol A: Kesediaan Tenaga Malam Terfokus (45–60 Minit Sebelum Aktiviti)
          </h3>
          <p class="architectural-ledger__detail">
            Ambil <strong>1 kapsul (500mg)</strong> bersama <strong>250ml hingga 300ml air suam kosong</strong> sekitar 45 hingga 60 minit selepas makan malam atau sebelum aktiviti fizikal malam. Elakkan hidangan yang terlalu berminyak atau bergoreng sejurus sebelum menelan kapsul supaya sarung kapsul larut dalam masa 20 minit dan L-Arginine HCl serta Epimedium diserap pada kelajuan maksimum.
          </p>
          <span class="architectural-ledger__metric">TINDAK BALAS 45–60 MINIT</span>
        </div>

        <div class="architectural-ledger__row" style="padding: 2rem 0;">
          <span class="architectural-ledger__index">MOD B</span>
          <h3 class="architectural-ledger__title">
            Protokol B: Penjagaan Stamina &amp; Vitaliti Harian (Kitaran 20 / 40 / 60 Hari)
          </h3>
          <p class="architectural-ledger__detail">
            Ambil <strong>1 kapsul setiap malam</strong> secara konsisten 45 minit selepas makan malam selama 20 hari berturut-turut (Pakej 1 Botol = RM 159), 40 hari (Pakej 2 Botol = RM 286 (10% OFF vs RM 318)), atau 60 hari (Pakej 3 Botol = RM 405 (15% OFF vs RM 477)). Pastikan pengambilan air kosong sekurang-kurangnya <strong>2.5 liter sehari</strong> bersesuaian dengan cuaca tropika Malaysia. Simpan botol di bawah suhu 30°C di tempat kering.
          </p>
          <span class="architectural-ledger__metric">BIO-SATURASI KUMULATIF</span>
        </div>
      </div>

      <!-- Garis Masa 5 Fasa Kitaran 20 Kapsul & Peringatan Hari Ke-18 -->
      <div class="hm-ms-cycle-ledger" role="list" aria-label="Fasa Kronologi Kitaran 20 Hari Horsemen Malaysia">
        <!-- Fasa 1: Hari 1 hingga 5 -->
        <div class="hm-ms-cycle-stage-row" role="listitem">
          <div class="hm-ms-cycle-stage-row__day">
            <span class="hm-ms-cycle-stage-row__day-kicker">FASA I · KAPSUL 01–05</span>
            <span class="hm-ms-cycle-stage-row__day-num">Hari 1 – 5</span>
          </div>
          <div class="hm-ms-cycle-stage-row__body">
            <h3 class="hm-ms-cycle-stage-row__title">
              Penyerapan Awal Fitokimia, Aliran Mikro &amp; Pengurangan Kelesuan Lewat Petang
            </h3>
            <p class="hm-ms-cycle-stage-row__desc">
              Sepanjang 5 hari pertama (jumlah kumulatif 2,500mg ekstrak), L-Arginine HCl (80mg) dan Ginseng Merah Korea (60mg) memulakan sokongan segera terhadap peredaran mikro dan metabolisme tenaga ATP. Pengguna lazimnya menyedari rasa mengantuk atau lesu selepas pulang dari pejabat berkurangan dengan ketara, digantikan dengan kesegaran fizikal pada waktu malam.
            </p>
          </div>
          <div class="hm-ms-cycle-stage-row__meta">
            <span style="color: var(--gold-champagne); font-size: 0.7rem; letter-spacing: 0.16em;">JISIM TERKUMPUL</span>
            <strong>2,500 mg Ekstrak Aktif</strong>
            <span style="color: var(--text-muted-alabaster);">Baki Botol: 15 Kapsul</span>
          </div>
        </div>

        <!-- Fasa 2: Hari 6 hingga 12 -->
        <div class="hm-ms-cycle-stage-row" role="listitem">
          <div class="hm-ms-cycle-stage-row__day">
            <span class="hm-ms-cycle-stage-row__day-kicker">FASA II · KAPSUL 06–12</span>
            <span class="hm-ms-cycle-stage-row__day-num">Hari 6 – 12</span>
          </div>
          <div class="hm-ms-cycle-stage-row__body">
            <h3 class="hm-ms-cycle-stage-row__title">
              Sinergi Adaptogenik Tongkat Ali 100:1 &amp; Maca Hitam Peru
            </h3>
            <p class="hm-ms-cycle-stage-row__desc">
              Memasuki minggu kedua, sebatian eurycomanone daripada Tongkat Ali Malaysia (150mg) dan macamides daripada Maca Hitam Peru (100mg) mencapai tahap keseimbangan adaptogenik. Ketahanan otot semasa aktiviti fizikal meningkat, pemulihan tenaga menjadi lebih pantas, dan kualiti tidur malam kekal tenang kerana formulasi ini bebas kafein sepenuhnya.
            </p>
          </div>
          <div class="hm-ms-cycle-stage-row__meta">
            <span style="color: var(--gold-champagne); font-size: 0.7rem; letter-spacing: 0.16em;">JISIM TERKUMPUL</span>
            <strong>6,000 mg Ekstrak Aktif</strong>
            <span style="color: var(--text-muted-alabaster);">Baki Botol: 8 Kapsul</span>
          </div>
        </div>

        <!-- Fasa 3: Hari 13 hingga 17 -->
        <div class="hm-ms-cycle-stage-row" role="listitem">
          <div class="hm-ms-cycle-stage-row__day">
            <span class="hm-ms-cycle-stage-row__day-kicker">FASA III · KAPSUL 13–17</span>
            <span class="hm-ms-cycle-stage-row__day-num">Hari 13 – 17</span>
          </div>
          <div class="hm-ms-cycle-stage-row__body">
            <h3 class="hm-ms-cycle-stage-row__title">
              Kemuncak Keseimbangan 6 Ekstrak &amp; Kesediaan Fizikal Optimum
            </h3>
            <p class="hm-ms-cycle-stage-row__desc">
              Kesemua 6 komponen aktif—termasuk Epimedium (10% icariins) serta kofaktor Tribulus &amp; Zink Pikolinat—beroperasi pada kapasiti penuh. Pada tahap ini, pengguna menikmati kestabilan tenaga harian dan kesediaan malam yang konsisten tanpa turun naik tenaga.
            </p>
          </div>
          <div class="hm-ms-cycle-stage-row__meta">
            <span style="color: var(--gold-champagne); font-size: 0.7rem; letter-spacing: 0.16em;">JISIM TERKUMPUL</span>
            <strong>8,500 mg Ekstrak Aktif</strong>
            <span style="color: var(--text-muted-alabaster);">Baki Botol: 3 Kapsul</span>
          </div>
        </div>

        <!-- Fasa 4: HARI KE-18 (TITIK PERINGATAN ISIAN SEMULA AUTOMATIK) -->
        <div class="hm-ms-cycle-stage-row hm-ms-cycle-stage-row--highlight" role="listitem">
          <div class="hm-ms-cycle-stage-row__day">
            <span class="hm-ms-cycle-stage-row__day-kicker">FASA IV · TITIK KRITIKAL HARI KE-18</span>
            <span class="hm-ms-cycle-stage-row__day-num">Hari Ke-18</span>
          </div>
          <div class="hm-ms-cycle-stage-row__body">
            <h3 class="hm-ms-cycle-stage-row__title">
              Peringatan Isian Semula Hari Ke-18 (Baki 2 Kapsul = Tetingkap Kurier 48 Jam)
            </h3>
            <p class="hm-ms-cycle-stage-row__desc">
              Pada Hari Ke-18 (atau Hari Ke-36 bagi Pakej 2 Botol / Hari Ke-54 bagi Pakej 3 Botol), anda mempunyai baki tepat <strong>2 kapsul (1,000mg)</strong> di dalam botol. Peringatan Google Calendar dan mesej privasi WhatsApp Onyxmen diaktifkan pada jam 10:00 pagi waktu Malaysia. Ini memberikan ruang masa 1 hingga 2 hari bekerja untuk bungkusan rahsia baharu anda dihantar oleh kurier ekspres sebelum kapsul ke-20 diambil.
            </p>
          </div>
          <div class="hm-ms-cycle-stage-row__meta">
            <span style="color: var(--gold-foil-bright); font-size: 0.7rem; letter-spacing: 0.16em;">TINDAKAN DISYORKAN</span>
            <strong>Sahkan Isian Semula (RM 159 / RM 286 (10% OFF vs RM 318))</strong>
            <span style="color: var(--gold-champagne);">Baki Botol: 2 Kapsul (48 Jam)</span>
          </div>
        </div>

        <!-- Fasa 5: Hari 19 hingga 20+ -->
        <div class="hm-ms-cycle-stage-row" role="listitem">
          <div class="hm-ms-cycle-stage-row__day">
            <span class="hm-ms-cycle-stage-row__day-kicker">FASA V · KAPSUL 19–20 &amp; SETERUSNYA</span>
            <span class="hm-ms-cycle-stage-row__day-num">Hari 19 – 20+</span>
          </div>
          <div class="hm-ms-cycle-stage-row__body">
            <h3 class="hm-ms-cycle-stage-row__title">
              Peralihan Lancar ke Kitaran Kedua Tanpa Jurang Penurunan Tenaga
            </h3>
            <p class="hm-ms-cycle-stage-row__desc">
              Apabila kapsul ke-20 selesai diambil pada malam Hari Ke-20 (genap 10,000mg ekstrak botani), botol kedua anda sudah sedia di tangan—sama ada kerana anda menempah terus <strong>Pakej Dwi-Momentum 2 Botol (RM 286 (10% OFF vs RM 318))</strong> pada Hari Pertama, atau melalui pelepasan pantas Hari Ke-18. Momentum stamina anda diteruskan ke Hari 21–40 dengan sifar gangguan.
            </p>
          </div>
          <div class="hm-ms-cycle-stage-row__meta">
            <span style="color: var(--gold-champagne); font-size: 0.7rem; letter-spacing: 0.16em;">JISIM GENAP SEBOTOL</span>
            <strong>10,000 mg (10g) Selesai</strong>
            <span style="color: var(--text-muted-alabaster);">Peralihan ke Botol Ke-2</span>
          </div>
        </div>
      </div>
    </div>
  </section>
  `;
}

/**
 * ============================================================================
 * MS-102: PERBANDINGAN HORSEMEN VS HAMMER OF THOR / GROW XL / MAGNUM PUMP XR
 * + JADUAL PENGHANTARAN 16 NEGERI MALAYSIA
 * + PROTOKOL PENGESAHAN KETULENAN BOTOL RASMI
 * + 10 SOALAN LAZIM (FAQ) HORSEMEN BAHASA MALAYSIA
 * ============================================================================
 */
function renderChapterMs102() {
  const faqHtml = HORSEMEN_MS_FAQS.map((item, idx) => {
    const isOpenAttr = idx === 0 ? ' open' : '';
    return `
        <details id="${item.id}" class="hm-ms-faq-item"${isOpenAttr}>
          <summary class="hm-ms-faq-summary">
            <div class="hm-ms-faq-summary__left">
              <span class="hm-ms-faq-summary__code">${item.code} · ${item.category}</span>
              <h3 class="hm-ms-faq-summary__question">${item.questionMs}</h3>
            </div>
            <span class="hm-ms-faq-summary__icon" aria-hidden="true">+</span>
          </summary>
          <div class="hm-ms-faq-body">
            <p>${item.answerMs}</p>
            <div class="hm-ms-faq-clinical-note">
              <strong>NOTA APOTEKARI ONYXMEN:</strong> ${item.clinicalNoteMs}
            </div>
          </div>
        </details>`;
  }).join('\n');

  return `
  <!-- ========================================================================
       BAB IV (MS-102 BAHAGIAN A): PERBANDINGAN HORSEMEN VS HAMMER OF THOR / GROW XL / MAGNUM PUMP XR
       ======================================================================== -->
  <section
    id="perbandingan-4-formulasi"
    class="hm-ms-comparison-section"
    aria-labelledby="hm-ms-comparison-heading"
  >
    <div class="hm-ms-section-inner">
      <div class="hm-ms-section-header">
        <div class="hm-ms-section-header__left">
          <span class="editorial-kicker">BAB IV · MATRIKS PERBANDINGAN EMPAT FORMULASI ONYXMEN (MS-102)</span>
          <h2 id="hm-ms-comparison-heading" class="editorial-headline-lg">
            Perbandingan Horsemen Malaysia berbanding <span class="foil-champagne-text">Hammer of Thor, Grow XL &amp; Magnum Pump XR</span>
          </h2>
          <p class="editorial-lead-paragraph">
            Keempat-empat formulasi utama di Onyxmen Malaysia ditawarkan pada harga seragam <strong>RM 159.00 sebotol</strong> (2 Botol RM 286 (10% OFF vs RM 318) · 3 Botol RM 405 (15% OFF vs RM 477)), namun setiap satu kejuruteraan fitokimianya direka untuk sasaran fisiologi lelaki dewasa yang berbeza. Gunakan jadual perbandingan teknikal 12-dimensi di bawah untuk mengesahkan mengapa <strong>Horsemen Malaysia (20 Kapsul × 500mg)</strong> menjadi pilihan utama untuk kesediaan tenaga malam dan fleksibiliti dwi-mod.
          </p>
        </div>

        <div>
          <a href="/ms/perbandingan/" class="cta-hairline-secondary">
            <span>LIHAT PORTAL PERBANDINGAN PENUH</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <!-- Jadual Perbandingan 12-Dimensi Merentasi 4 Formulasi -->
      <div class="hm-ms-table-scroll" role="region" aria-label="Jadual Perbandingan Teknikal 4 Formulasi Onyxmen Malaysia" tabindex="0">
        <table class="hm-ms-architectural-table">
          <thead>
            <tr>
              <th scope="col" style="width: 18%;">DIMENSI SPESIFIKASI</th>
              <th scope="col" class="hm-ms-col-highlight" style="width: 22%;">
                01 · HORSEMEN MALAYSIA (LAMAN INI)
              </th>
              <th scope="col" style="width: 20%;">
                02 · HAMMER OF THOR
              </th>
              <th scope="col" style="width: 20%;">
                03 · GROW XL
              </th>
              <th scope="col" style="width: 20%;">
                04 · MAGNUM PUMP XR
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Kod SKU &amp; MPN Rasmi</th>
              <td class="hm-ms-col-highlight">
                <strong>SKU: ONYX-HM-20</strong><br />
                MPN: HM-500MG-20MY<br />
                GTIN-13: 9550000102011
              </td>
              <td>
                SKU: ONYX-HT-20<br />
                MPN: OM-HT-2026-MY<br />
                GTIN-13: 9550000102028
              </td>
              <td>
                SKU: ONYX-GX-30<br />
                MPN: OM-GX-2026-MY<br />
                GTIN-13: 9550000102035
              </td>
              <td>
                SKU: ONYX-MP-30<br />
                MPN: OM-MP-2026-MY<br />
                GTIN-13: 9550000102042
              </td>
            </tr>
            <tr>
              <th scope="row">Bilangan &amp; Kekuatan Kapsul</th>
              <td class="hm-ms-col-highlight">
                <strong>20 Kapsul × 500mg</strong><br />
                (10,000mg / 10g Jisim Botani Sebotol)
              </td>
              <td>
                20 Kapsul Vegetarian × 500mg<br />
                (10,000mg Sebotol)
              </td>
              <td>
                30 Kapsul Harian × 500mg<br />
                (15,000mg Sebotol)
              </td>
              <td>
                30 Kapsul Hitam × 550mg<br />
                (16,500mg Sebotol)
              </td>
            </tr>
            <tr>
              <th scope="row">Fokus Fisiologi Utama</th>
              <td class="hm-ms-col-highlight">
                <strong>Kesediaan Tenaga Malam Pantas (45–60 Minit), Stamina Fizikal &amp; Pemulihan Kelesuan Petang</strong>
              </td>
              <td>
                Pembinaan Daya Tahan Stamina Fizikal Berperingkat &amp; Pemulihan Otot
              </td>
              <td>
                Protokol Nutrisi Aliran Mikro Harian 30 Hari &amp; Kecergasan Sepanjang Hari
              </td>
              <td>
                Prekursor Nitrik Oksida (NO), Aliran Vaskular Senaman &amp; Prestasi Fizikal Puncak
              </td>
            </tr>
            <tr>
              <th scope="row">Teras Fitokimia &amp; Asid Amino</th>
              <td class="hm-ms-col-highlight">
                <strong>Tongkat Ali 100:1 (150mg), Maca Hitam Peru (100mg), Epimedium (80mg), L-Arginine HCl (80mg), Ginseng Merah (60mg), Tribulus &amp; Zink (30mg)</strong>
              </td>
              <td>
                Tribulus Terrestris Saponin Tinggi, Tongkat Ali Malaysia, Ashwagandha KSM-66, Mucuna Pruriens &amp; Zink Kelat
              </td>
              <td>
                Panax Ginseng Matang, Ginkgo Biloba Flavon, Saw Palmetto, Muira Puama, L-Citrulline Malate &amp; Vitamin B3
              </td>
              <td>
                L-Arginine AAKG, L-Citrulline Tulen, Ekstrak Nitrat Ubi Bit, Kunyit Hitam (Kaempferia parviflora) &amp; Kulit Pain Maritim
              </td>
            </tr>
            <tr>
              <th scope="row">Mod &amp; Masa Pengambilan</th>
              <td class="hm-ms-col-highlight">
                <strong>Dwi-Mod Fleksibel:</strong><br />
                • Mod A: 45–60 minit sebelum aktiviti malam<br />
                • Mod B: 1 kapsul setiap malam selepas makan malam
              </td>
              <td>
                1 kapsul setiap malam selepas makan malam bersama 250ml air suam
              </td>
              <td>
                1 kapsul setiap pagi selepas sarapan untuk sokongan harian 30 hari
              </td>
              <td>
                1 kapsul 30–45 minit sebelum latihan gimnasium atau aktiviti malam bersama 300ml air
              </td>
            </tr>
            <tr>
              <th scope="row">Hari Peringatan Isian Semula</th>
              <td class="hm-ms-col-highlight">
                <strong>Hari Ke-18</strong> (1 Botol)<br />
                <strong>Hari Ke-36</strong> (2 Botol)<br />
                <strong>Hari Ke-54</strong> (3 Botol)
              </td>
              <td>
                Hari Ke-18 (1 Botol)<br />
                Hari Ke-36 (2 Botol)<br />
                Hari Ke-54 (3 Botol)
              </td>
              <td>
                Hari Ke-25 (1 Botol)<br />
                Hari Ke-50 (2 Botol)<br />
                Hari Ke-75 (3 Botol)
              </td>
              <td>
                Hari Ke-25 (1 Botol)<br />
                Hari Ke-50 (2 Botol)<br />
                Hari Ke-75 (3 Botol)
              </td>
            </tr>
            <tr>
              <th scope="row">Status Kafein &amp; Perangsang</th>
              <td class="hm-ms-col-highlight">
                <strong>100% Bebas Kafein</strong> · Mesra Tidur Malam · Sifar Debaran Jantung
              </td>
              <td>
                100% Bebas Kafein · Kapsul Selulosa Tumbuhan Vegetarian
              </td>
              <td>
                100% Bebas Kafein · Sesuai Diambil Waktu Pagi Sebelum Kerja
              </td>
              <td>
                100% Bebas Kafein · Fokus Vasodilatasi Asid Amino &amp; Nitrat Semula Jadi
              </td>
            </tr>
            <tr>
              <th scope="row">Harga Rasmi Pakej 1 / 2 / 3 Botol</th>
              <td class="hm-ms-col-highlight">
                <strong>1 Botol: RM 159.00</strong><br />
                <strong>2 Botol: RM 286 (10% OFF vs RM 318)</strong><br />
                <strong>3 Botol: RM 405 (15% OFF vs RM 477)</strong>
              </td>
              <td>
                1 Botol: RM 159.00<br />
                2 Botol: RM 286 (10% OFF vs RM 318)<br />
                3 Botol: RM 405 (15% OFF vs RM 477)
              </td>
              <td>
                1 Botol: RM 159.00<br />
                2 Botol: RM 286 (10% OFF vs RM 318)<br />
                3 Botol: RM 405 (15% OFF vs RM 477)
              </td>
              <td>
                1 Botol: RM 159.00<br />
                2 Botol: RM 286 (10% OFF vs RM 318)<br />
                3 Botol: RM 405 (15% OFF vs RM 477)
              </td>
            </tr>
            <tr>
              <th scope="row">Profil Pengguna Paling Sesuai</th>
              <td class="hm-ms-col-highlight">
                <strong>Eksekutif, usahawan &amp; lelaki dewasa yang mahukan kapsul 500mg berkepekatan tinggi untuk kesediaan malam &amp; tenaga dwi-mod</strong>
              </td>
              <td>
                Lelaki yang mengutamakan kapsul vegetarian berasaskan Tribulus &amp; Ashwagandha untuk stamina fizikal
              </td>
              <td>
                Lelaki yang mahukan rutin suplemen pagi 30 hari penuh untuk peredaran mikro &amp; kecergasan asas
              </td>
              <td>
                Penggemar kecergasan gimnasium &amp; lelaki yang fokus kepada sokongan vaskular nitrik oksida
              </td>
            </tr>
            <tr>
              <th scope="row">Tindakan &amp; Pautan Terus</th>
              <td class="hm-ms-col-highlight">
                <button
                  type="button"
                  class="cta-foil-primary"
                  style="padding: 0.65rem 1.15rem; font-size: 0.7rem;"
                  data-open-order-drawer="true"
                  data-order-product="horsemen"
                  data-order-qty="2"
                >
                  <span>TEMPAH HORSEMEN</span>
                </button>
              </td>
              <td>
                <a href="/ms/produk/hammer-of-thor/" class="cta-hairline-secondary" style="padding: 0.55rem 0.95rem; font-size: 0.7rem;">
                  <span>LIHAT HAMMER OF THOR →</span>
                </a>
              </td>
              <td>
                <a href="/ms/produk/grow-xl/" class="cta-hairline-secondary" style="padding: 0.55rem 0.95rem; font-size: 0.7rem;">
                  <span>LIHAT GROW XL →</span>
                </a>
              </td>
              <td>
                <a href="/ms/produk/magnum-pump-xr/" class="cta-hairline-secondary" style="padding: 0.55rem 0.95rem; font-size: 0.7rem;">
                  <span>LIHAT MAGNUM PUMP XR →</span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Analisis Perbandingan Bersemuka (Head-to-Head Editorial Ledger) -->
      <div class="architectural-ledger" role="region" aria-label="Analisis Perbandingan Bersemuka Horsemen Malaysia">
        <div class="architectural-ledger__row" style="padding: 2rem 0;">
          <span class="architectural-ledger__index">VS 01</span>
          <h3 class="architectural-ledger__title">
            Horsemen Malaysia vs Hammer of Thor (Kedua-duanya Kitaran 20 Kapsul)
          </h3>
          <p class="architectural-ledger__detail">
            Jika anda membandingkan dua formulasi 20 kapsul kami, perhatikan perbezaan profil herbanya: <strong>Horsemen Malaysia</strong> mendahului dengan 150mg Tongkat Ali 100:1 + 100mg Maca Hitam Peru + 80mg Epimedium + 80mg L-Arginine HCl untuk tindak balas malam yang lebih cepat (45–60 minit). <strong>Hammer of Thor</strong> pula menggunakan kapsul vegetarian selulosa tumbuhan dengan tumpuan saponin Tribulus Terrestris dan Ashwagandha untuk ketahanan fizikal jangka sederhana. Anda juga boleh membaca ulasan penuh di halaman <a href="/ms/perbandingan/horsemen-vs-hammer-of-thor/" style="color: var(--gold-foil-bright); text-decoration: underline;">Perbandingan Horsemen vs Hammer of Thor</a>.
          </p>
          <span class="architectural-ledger__metric">20 KAPSUL × 500MG</span>
        </div>

        <div class="architectural-ledger__row" style="padding: 2rem 0;">
          <span class="architectural-ledger__index">VS 02</span>
          <h3 class="architectural-ledger__title">
            Horsemen Malaysia (20 Kapsul Malam) vs Grow XL (30 Kapsul Harian Pagi)
          </h3>
          <p class="architectural-ledger__detail">
            <strong>Grow XL</strong> menyediakan 30 kapsul untuk diambil setiap pagi selepas sarapan (mengandungi Ginkgo Biloba, Saw Palmetto, dan Muira Puama) bagi menyokong aliran mikro harian selama sebulan penuh. Sebaliknya, <strong>Horsemen Malaysia</strong> memfokuskan kepekatan 500mg pada waktu malam untuk lelaki yang mahukan kesan kesediaan fizikal dan pemulihan tenaga malam yang lebih padat tanpa perlu menunggu kitaran 30 hari. Ramai pelanggan tetap kami menggabungkan Grow XL pada waktu pagi bersama Horsemen pada malam pilihan.
          </p>
          <span class="architectural-ledger__metric">MALAM VS PAGI</span>
        </div>

        <div class="architectural-ledger__row" style="padding: 2rem 0;">
          <span class="architectural-ledger__index">VS 03</span>
          <h3 class="architectural-ledger__title">
            Horsemen Malaysia (Teras Adaptogenik) vs Magnum Pump XR (Teras Vaskular Nitrik Oksida)
          </h3>
          <p class="architectural-ledger__detail">
            <strong>Magnum Pump XR</strong> (30 kapsul hitam, suplemen kapsul makan—bukan alat pam mekanikal) menumpukan kepada L-Arginine AAKG, L-Citrulline, Ekstrak Nitrat Ubi Bit, dan Kunyit Hitam khusus untuk pengembangan vaskular semasa senaman gimnasium atau aktiviti malam. <strong>Horsemen Malaysia</strong> pula memberikan keseimbangan menyeluruh antara sokongan hormon/adaptogenik (Tongkat Ali + Maca Hitam + Ginseng Merah = 310mg) dan sokongan nitrik oksida (Epimedium + L-Arginine HCl = 160mg) di dalam satu kapsul tunggal.
          </p>
          <span class="architectural-ledger__metric">ADAPTOGEN + NO</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================================
       BAB V (MS-102 BAHAGIAN B): JADUAL PENGHANTARAN RAHSIA 16 NEGERI & WILAYAH PERSEKUTUAN MALAYSIA
       ======================================================================== -->
  <section
    id="jadual-penghantaran-16-negeri-malaysia"
    class="hm-ms-states-section"
    aria-labelledby="hm-ms-states-heading"
  >
    <div class="hm-ms-section-inner">
      <div class="hm-ms-section-header">
        <div class="hm-ms-section-header__left">
          <span class="editorial-kicker">BAB V · RANGKAIAN LOGISTIK BUNGKUSAN RAHSIA KEBANGSAAN (MS-102)</span>
          <h2 id="hm-ms-states-heading" class="editorial-headline-lg">
            Jadual Penghantaran Rahsia Horsemen Malaysia ke Seluruh <span class="foil-champagne-text">16 Negeri &amp; Wilayah Persekutuan</span>
          </h2>
          <p class="editorial-lead-paragraph">
            Setiap tempahan Horsemen Malaysia dilepaskan terus dari hab penyimpanan berhawa dingin (<strong style="color: var(--gold-foil-bright);">&lt; 24°C</strong>) kami di Kuala Lumpur. Sama ada anda memilih serahan ekspres ke kondominium di Mont Kiara, pejabat korporat di George Town dan Johor Bahru, atau kargo udara rahsia ke Kota Kinabalu dan Kuching, setiap kotak dijamin <strong>100% tanpa nama produk</strong> di bawah label pengirim <strong>"OM Fulfilment Logistics"</strong>.
          </p>
        </div>

        <div>
          <a href="/ms/penghantaran-malaysia/" class="cta-hairline-secondary">
            <span>INDEKS 16 HAB NEGERI MALAYSIA</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <!-- Jadual Lengkap 16 Negeri & Wilayah Persekutuan Malaysia -->
      <div class="hm-ms-table-scroll" role="region" aria-label="Jadual Penghantaran 16 Negeri Malaysia untuk Horsemen" tabindex="0">
        <table class="hm-ms-architectural-table">
          <thead>
            <tr>
              <th scope="col" style="width: 6%;">KOD</th>
              <th scope="col" style="width: 19%;">NEGERI / WILAYAH PERSEKUTUAN</th>
              <th scope="col" style="width: 27%;">BANDAR &amp; DAERAH UTAMA DILIPUTI</th>
              <th scope="col" style="width: 18%;">ANGGARAN MASA TIBA (ETA)</th>
              <th scope="col" style="width: 16%;">RAKAN KURIER &amp; COD</th>
              <th scope="col" style="width: 14%;">CAJ POS &amp; HAB</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong style="color: var(--gold-champagne);">KUL</strong></td>
              <th scope="row">Wilayah Persekutuan Kuala Lumpur</th>
              <td>KLCC, Bukit Bintang, Bangsar, Mont Kiara, Damansara Heights, Cheras, Ampang, Setapak, Kepong, Sri Petaling, Bukit Jalil</td>
              <td><strong>3–5 Jam Hari Sama</strong> (Penghantar Persendirian) atau 1 Hari Bekerja Kurier</td>
              <td>Runner Persendirian Rahsia KL · NinjaVan · J&amp;T VIP · COD Tersedia</td>
              <td>
                <strong>PERCUMA (1/2/3 Botol)</strong><br />
                <a href="/ms/penghantaran-malaysia/kuala-lumpur/" style="color: var(--gold-foil-bright); font-size: 0.76rem;">Hab KL →</a>
              </td>
            </tr>
            <tr>
              <td><strong style="color: var(--gold-champagne);">SGR</strong></td>
              <th scope="row">Selangor Darul Ehsan</th>
              <td>Petaling Jaya, Subang Jaya, Shah Alam, Puchong, Kota Damansara, Klang, Kajang, Bangi, Cyberjaya, Rawang, Sepang</td>
              <td><strong>3–5 Jam Hari Sama</strong> (Zon Lembah Klang) atau 1 Hari Bekerja</td>
              <td>Runner Persendirian Lembah Klang · NinjaVan · PosLaju · COD Tersedia</td>
              <td>
                <strong>PERCUMA (1/2/3 Botol)</strong><br />
                <a href="/ms/penghantaran-malaysia/selangor/" style="color: var(--gold-foil-bright); font-size: 0.76rem;">Hab Selangor →</a>
              </td>
            </tr>
            <tr>
              <td><strong style="color: var(--gold-champagne);">PJY</strong></td>
              <th scope="row">Wilayah Persekutuan Putrajaya</th>
              <td>Presint 1 hingga Presint 20, Kompleks Pentadbiran Persekutuan, IOI Resort City, Sempadan Cyberjaya</td>
              <td><strong>3–5 Jam Hari Sama</strong> (Pesanan Sebelum 4:00 Petang) atau 1 Hari Bekerja</td>
              <td>Runner Persendirian Putrajaya · NinjaVan · PosLaju · COD Tersedia</td>
              <td>
                <strong>PERCUMA (1/2/3 Botol)</strong><br />
                <a href="/ms/penghantaran-malaysia/putrajaya/" style="color: var(--gold-foil-bright); font-size: 0.76rem;">Hab Putrajaya →</a>
              </td>
            </tr>
            <tr>
              <td><strong style="color: var(--gold-champagne);">PNG</strong></td>
              <th scope="row">Pulau Pinang</th>
              <td>George Town, Bayan Lepas, Tanjung Tokong, Jelutong, Butterworth, Bukit Mertajam, Seberang Jaya, Nibong Tebal</td>
              <td><strong>1–2 Hari Bekerja</strong> (Ekspres Utara Semenanjung)</td>
              <td>NinjaVan Discreet · J&amp;T Express VIP · PosLaju · COD Tersedia</td>
              <td>
                <strong>PERCUMA (1/2/3 Botol)</strong><br />
                <a href="/ms/penghantaran-malaysia/pulau-pinang/" style="color: var(--gold-foil-bright); font-size: 0.76rem;">Hab P. Pinang →</a>
              </td>
            </tr>
            <tr>
              <td><strong style="color: var(--gold-champagne);">JHR</strong></td>
              <th scope="row">Johor Darul Ta’zim</th>
              <td>Johor Bahru, Iskandar Puteri, Skudai, Pasir Gudang, Kulai, Batu Pahat, Muar, Kluang, Segamat, Kota Tinggi</td>
              <td><strong>1–2 Hari Bekerja</strong> (Ekspres Selatan Semenanjung)</td>
              <td>NinjaVan Discreet · J&amp;T Express VIP · PosLaju · COD Tersedia</td>
              <td>
                <strong>PERCUMA (1/2/3 Botol)</strong><br />
                <a href="/ms/penghantaran-malaysia/johor-bahru/" style="color: var(--gold-foil-bright); font-size: 0.76rem;">Hab Johor →</a>
              </td>
            </tr>
            <tr>
              <td><strong style="color: var(--gold-champagne);">PRK</strong></td>
              <th scope="row">Perak Darul Ridzuan</th>
              <td>Ipoh, Taiping, Manjung, Sitiawan, Teluk Intan, Kampar, Kuala Kangsar, Batu Gajah, Tanjung Malim</td>
              <td><strong>1–2 Hari Bekerja</strong> (Lebuhraya Utara-Selatan Ekspres)</td>
              <td>NinjaVan Discreet · J&amp;T Express VIP · PosLaju · COD Tersedia</td>
              <td>
                <strong>PERCUMA (1/2/3 Botol)</strong><br />
                <a href="/ms/penghantaran-malaysia/perak-ipoh/" style="color: var(--gold-foil-bright); font-size: 0.76rem;">Hab Perak →</a>
              </td>
            </tr>
            <tr>
              <td><strong style="color: var(--gold-champagne);">MLK</strong></td>
              <th scope="row">Melaka</th>
              <td>Bandaraya Melaka, Ayer Keroh, Batu Berendam, Bukit Baru, Klebang, Alor Gajah, Masjid Tanah, Jasin</td>
              <td><strong>1–2 Hari Bekerja</strong> (Zon Tengah-Selatan Ekspres)</td>
              <td>NinjaVan Discreet · J&amp;T Express VIP · PosLaju · COD Tersedia</td>
              <td>
                <strong>PERCUMA (1/2/3 Botol)</strong><br />
                <a href="/ms/penghantaran-malaysia/melaka/" style="color: var(--gold-foil-bright); font-size: 0.76rem;">Hab Melaka →</a>
              </td>
            </tr>
            <tr>
              <td><strong style="color: var(--gold-champagne);">NSN</strong></td>
              <th scope="row">Negeri Sembilan Darul Khusus</th>
              <td>Seremban, Seremban 2, Senawang, Nilai, Port Dickson, Lukut, Bahau, Tampin, Kuala Pilah</td>
              <td><strong>1 Hari Bekerja</strong> (Seremban / Nilai) · 1–2 Hari Daerah Lain</td>
              <td>NinjaVan Discreet · J&amp;T Express VIP · PosLaju · COD Tersedia</td>
              <td>
                <strong>PERCUMA (1/2/3 Botol)</strong><br />
                <a href="/ms/penghantaran-malaysia/negeri-sembilan-seremban/" style="color: var(--gold-foil-bright); font-size: 0.76rem;">Hab N. Sembilan →</a>
              </td>
            </tr>
            <tr>
              <td><strong style="color: var(--gold-champagne);">PHG</strong></td>
              <th scope="row">Pahang Darul Makmur</th>
              <td>Kuantan, Indera Mahkota, Temerloh, Mentakab, Bentong, Genting Highlands, Pekan, Raub, Cameron Highlands</td>
              <td><strong>1–2 Hari Bekerja</strong> (Koridor Pantai Timur Ekspres)</td>
              <td>NinjaVan Discreet · J&amp;T Express VIP · PosLaju · COD Tersedia</td>
              <td>
                <strong>PERCUMA (1/2/3 Botol)</strong><br />
                <a href="/ms/penghantaran-malaysia/pahang-kuantan/" style="color: var(--gold-foil-bright); font-size: 0.76rem;">Hab Pahang →</a>
              </td>
            </tr>
            <tr>
              <td><strong style="color: var(--gold-champagne);">KDH</strong></td>
              <th scope="row">Kedah Darul Aman</th>
              <td>Alor Setar, Sungai Petani, Kulim Hi-Tech, Jitra, Kubang Pasu, Gurun, Baling, Pulau Langkawi</td>
              <td><strong>1–2 Hari Bekerja</strong> (2–3 Hari untuk Pulau Langkawi)</td>
              <td>NinjaVan Discreet · J&amp;T Express VIP · PosLaju · COD Tersedia</td>
              <td>
                <strong>PERCUMA (1/2/3 Botol)</strong><br />
                <a href="/ms/penghantaran-malaysia/kedah-alor-setar/" style="color: var(--gold-foil-bright); font-size: 0.76rem;">Hab Kedah →</a>
              </td>
            </tr>
            <tr>
              <td><strong style="color: var(--gold-champagne);">KTN</strong></td>
              <th scope="row">Kelantan Darul Naim</th>
              <td>Kota Bharu, Kubang Kerian, Pengkalan Chepa, Pasir Mas, Wakaf Bharu, Tanah Merah, Machang, Gua Musang</td>
              <td><strong>1–2 Hari Bekerja</strong> (Zon Pantai Timur)</td>
              <td>NinjaVan Discreet · J&amp;T Express VIP · PosLaju · COD Tersedia</td>
              <td>
                <strong>PERCUMA (1/2/3 Botol)</strong><br />
                <a href="/ms/penghantaran-malaysia/kelantan-kota-bharu/" style="color: var(--gold-foil-bright); font-size: 0.76rem;">Hab Kelantan →</a>
              </td>
            </tr>
            <tr>
              <td><strong style="color: var(--gold-champagne);">TRG</strong></td>
              <th scope="row">Terengganu Darul Iman</th>
              <td>Kuala Terengganu, Gong Badak, Kemaman, Chukai, Kerteh, Dungun, Paka, Besut, Jertih, Marang</td>
              <td><strong>1–2 Hari Bekerja</strong> (Zon Pantai Timur &amp; Hab O&amp;G Kerteh)</td>
              <td>NinjaVan Discreet · J&amp;T Express VIP · PosLaju · COD Tersedia</td>
              <td>
                <strong>PERCUMA (1/2/3 Botol)</strong><br />
                <a href="/ms/penghantaran-malaysia/terengganu-kuala-terengganu/" style="color: var(--gold-foil-bright); font-size: 0.76rem;">Hab Terengganu →</a>
              </td>
            </tr>
            <tr>
              <td><strong style="color: var(--gold-champagne);">PLS</strong></td>
              <th scope="row">Perlis Indera Kayangan</th>
              <td>Kangar, Arau, Kuala Perlis, Padang Besar, Jejawi, Beseri</td>
              <td><strong>1–2 Hari Bekerja</strong> (Zon Utara Semenanjung)</td>
              <td>NinjaVan Discreet · J&amp;T Express VIP · PosLaju · COD Tersedia</td>
              <td>
                <strong>PERCUMA (1/2/3 Botol)</strong><br />
                <a href="/ms/penghantaran-malaysia/perlis-kangar/" style="color: var(--gold-foil-bright); font-size: 0.76rem;">Hab Perlis →</a>
              </td>
            </tr>
            <tr>
              <td><strong style="color: var(--gold-champagne);">SBH</strong></td>
              <th scope="row">Sabah</th>
              <td>Kota Kinabalu, Penampang, Putatan, Sandakan, Tawau, Lahad Datu, Keningau, Kudat, Semporna, Papar</td>
              <td><strong>2–4 Hari Bekerja</strong> (Kargo Udara Rahsia KLIA → KKIA)</td>
              <td>PosLaju Air Freight · J&amp;T Borneo Air · DHL · COD Bandar Utama</td>
              <td>
                <strong>PERCUMA (2+ Botol)</strong> · RM 12 (1 Botol)<br />
                <a href="/ms/penghantaran-malaysia/sabah-kota-kinabalu/" style="color: var(--gold-foil-bright); font-size: 0.76rem;">Hab Sabah →</a>
              </td>
            </tr>
            <tr>
              <td><strong style="color: var(--gold-champagne);">SWK</strong></td>
              <th scope="row">Sarawak</th>
              <td>Kuching, Kota Samarahan, Miri, Bintulu, Sibu, Sri Aman, Sarikei, Limbang, Kapit, Mukah</td>
              <td><strong>2–4 Hari Bekerja</strong> (Kargo Udara Rahsia KLIA → Kuching/Miri)</td>
              <td>PosLaju Air Freight · J&amp;T Borneo Air · DHL · COD Bandar Utama</td>
              <td>
                <strong>PERCUMA (2+ Botol)</strong> · RM 12 (1 Botol)<br />
                <a href="/ms/penghantaran-malaysia/sarawak-kuching/" style="color: var(--gold-foil-bright); font-size: 0.76rem;">Hab Sarawak →</a>
              </td>
            </tr>
            <tr>
              <td><strong style="color: var(--gold-champagne);">LBN</strong></td>
              <th scope="row">Wilayah Persekutuan Labuan</th>
              <td>Bandar Labuan (Victoria), Taman Kewangan Labuan, Rancha-Rancha, Hab Luar Pesisir O&amp;G Labuan</td>
              <td><strong>2–4 Hari Bekerja</strong> (Kargo Udara Ekspres Borneo)</td>
              <td>PosLaju Air Freight · J&amp;T Borneo Air · DHL eCommerce</td>
              <td>
                <strong>PERCUMA (2+ Botol)</strong> · RM 12 (1 Botol)<br />
                <a href="/ms/penghantaran-malaysia/labuan/" style="color: var(--gold-foil-bright); font-size: 0.76rem;">Hab Labuan →</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- ========================================================================
       BAB VI (MS-102 BAHAGIAN C): PROTOKOL SEMAKAN KETULENAN 6-PERKARA HORSEMEN MALAYSIA
       ======================================================================== -->
  <section
    id="semakan-ketulenan-horsemen"
    class="hm-ms-authenticity-section"
    aria-labelledby="hm-ms-auth-heading"
  >
    <div class="hm-ms-section-inner">
      <div class="hm-ms-section-header">
        <div class="hm-ms-section-header__left">
          <span class="editorial-kicker">BAB VI · PERLINDUNGAN PENGGUNA &amp; JAMINAN KETULENAN APOTEKARI</span>
          <h2 id="hm-ms-auth-heading" class="editorial-headline-lg">
            6 Senarai Semak Ketulenan Botol Rasmi <span class="foil-champagne-text">Horsemen Malaysia</span>
          </h2>
          <p class="editorial-lead-paragraph">
            Bagi melindungi lelaki dewasa di Malaysia daripada produk tiruan berkualiti rendah di pasaran terbuka yang menggunakan botol plastik nipis atau serbuk tidak berpiawai, setiap botol tulen Horsemen Malaysia yang diedarkan melalui <strong>https://www.onyxmen.my</strong> memenuhi 6 piawaian pengesahan fizikal berikut:
          </p>
        </div>

        <div>
          <a href="/ms/panduan/cara-semak-ketulenan-botol-onyxman-malaysia/" class="cta-hairline-secondary">
            <span>PANDUAN PENUH SEMAKAN KETULENAN</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div class="architectural-ledger" role="list" aria-label="6 Senarai Semak Ketulenan Botol Horsemen Malaysia">
        <div class="architectural-ledger__row" role="listitem">
          <span class="architectural-ledger__index">SEMAK 01</span>
          <h3 class="architectural-ledger__title">Kod Inventori Rasmi SKU ONYX-HM-20 &amp; GTIN-13 9550000102011</h3>
          <p class="architectural-ledger__detail">
            Setiap botol tulen direkodkan di bawah kod <strong>SKU: ONYX-HM-20</strong>, <strong>MPN: HM-500MG-20MY</strong>, dan kod bar <strong>GTIN-13: 9550000102011</strong> (awalan 955 menunjukkan pendaftaran kod bar rantau Malaysia).
          </p>
          <span class="architectural-ledger__metric">GTIN: 9550000102011</span>
        </div>

        <div class="architectural-ledger__row" role="listitem">
          <span class="architectural-ledger__index">SEMAK 02</span>
          <h3 class="architectural-ledger__title">Botol Hitam Obsidian Berketumpatan Tinggi dengan Cetakan Merah Metalik &amp; Emas</h3>
          <p class="architectural-ledger__detail">
            Botol rasmi Horsemen menggunakan polimer HDPE hitam legap berketumpatan tinggi yang menghalang penembusan sinaran UV tropika, dihiasi tipografi <strong>HORSEMEN</strong> berkemasan merah metalik dan lambang kuda emas yang tajam.
          </p>
          <span class="architectural-ledger__metric">KEMASAN UV-SHIELD</span>
        </div>

        <div class="architectural-ledger__row" role="listitem">
          <span class="architectural-ledger__index">SEMAK 03</span>
          <h3 class="architectural-ledger__title">Tepat 20 Kapsul × 500mg (Berat Bersih Kandungan 10.0 Gram)</h3>
          <p class="architectural-ledger__detail">
            Apabila dibuka, botol mengandungi tepat 20 kapsul herba berkepekatan padat (500mg setiap kapsul) bersama pek penyerap lembapan gred makanan untuk mengekalkan kesegaran ekstrak Tongkat Ali 100:1 dan L-Arginine HCl.
          </p>
          <span class="architectural-ledger__metric">20 × 500MG = 10G</span>
        </div>

        <div class="architectural-ledger__row" role="listitem">
          <span class="architectural-ledger__index">SEMAK 04</span>
          <h3 class="architectural-ledger__title">Kedap Induksi Aluminium Dalam &amp; Gelang Keselamatan Penutup Luar</h3>
          <p class="architectural-ledger__detail">
            Mulut botol dilindungi oleh lapisan kedap induksi haba kedap udara di bawah penutup berulir. Jangan terima atau gunakan sebarang botol sekiranya kedap induksi dalaman telah terbuka sebelum sampai ke tangan anda.
          </p>
          <span class="architectural-ledger__metric">JAMINAN 14 HARI</span>
        </div>

        <div class="architectural-ledger__row" role="listitem">
          <span class="architectural-ledger__index">SEMAK 05</span>
          <h3 class="architectural-ledger__title">Harga Rasmi Seragam RM 159.00 Sebotol (Tiada Diskaun Palsu RM 30–RM 50)</h3>
          <p class="architectural-ledger__detail">
            Ekstrak Tongkat Ali 100:1 (2.2% eurycomanone) dan Maca Hitam Peru terjelatin tulen mempunyai kos bahan mentah yang tinggi. Onyxmen Malaysia menetapkan harga rasmi <strong>RM 159 sebotol</strong> (2 botol RM 286 (10% OFF vs RM 318) · 3 botol RM 405 (15% OFF vs RM 477)) secara telus. Berwaspada terhadap lambakan tiruan berharga murah yang menggunakan tepung kanji.
          </p>
          <span class="architectural-ledger__metric">RM 159 RASMI</span>
        </div>

        <div class="architectural-ledger__row" role="listitem">
          <span class="architectural-ledger__index">SEMAK 06</span>
          <h3 class="architectural-ledger__title">Pelepasan Eksklusif Melalui Meja Rasmi Onyxmen.my</h3>
          <p class="architectural-ledger__detail">
            Semua pesanan tulen hanya diproses melalui laman rasmi <strong>https://www.onyxmen.my</strong> dan disahkan menerusi e-mel rasmi <a href="mailto:sales@onyxmen.my" style="color: var(--gold-foil-bright);">sales@onyxmen.my</a>, <a href="mailto:info@onyxmen.my" style="color: var(--gold-foil-bright);">info@onyxmen.my</a>, atau <a href="mailto:waleedshoaibofficial@gmail.com" style="color: var(--gold-foil-bright);">waleedshoaibofficial@gmail.com</a>.
          </p>
          <span class="architectural-ledger__metric">PENGEDAR SAH MY</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================================
       BAB VII (MS-102 BAHAGIAN D): 10 SOALAN LAZIM (FAQ) HORSEMEN BAHASA MALAYSIA
       ======================================================================== -->
  <section
    id="soalan-lazim-horsemen-malaysia"
    class="hm-ms-faq-section"
    aria-labelledby="hm-ms-faq-heading"
  >
    <div class="hm-ms-section-inner">
      <div class="hm-ms-section-header">
        <div class="hm-ms-section-header__left">
          <span class="editorial-kicker">BAB VII · ENSIKLOPEDIA SOALAN LAZIM PELANGGAN (MS-102)</span>
          <h2 id="hm-ms-faq-heading" class="editorial-headline-lg">
            10 Soalan Lazim (FAQ) Mengenai <span class="foil-champagne-text">Horsemen Malaysia (20 Kapsul × 500mg)</span>
          </h2>
          <p class="editorial-lead-paragraph">
            Jawapan telus dan berasaskan fakta teknikal kepada 10 persoalan paling kerap ditanya oleh pelanggan lelaki dewasa kami di Kuala Lumpur, Selangor, Pulau Pinang, Johor, Sabah, dan Sarawak.
          </p>
        </div>

        <div>
          <button
            type="button"
            class="cta-foil-primary"
            data-open-order-drawer="true"
            data-order-product="horsemen"
            data-order-qty="1"
          >
            <span>TANYA / TEMPAH SEKARANG · RM 159</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div class="hm-ms-faq-ledger" data-faq-accordion-group role="region" aria-label="Senarai 10 Soalan Lazim Horsemen Malaysia">
        ${faqHtml}
      </div>
    </div>
  </section>

  <!-- ========================================================================
       BAB VIII: PENTAS PENUTUP RIZAB APOTEKARI HORSEMEN MALAYSIA
       ======================================================================== -->
  <section
    id="rizab-penutup-horsemen"
    class="hm-ms-closing-vault"
    aria-labelledby="hm-ms-closing-heading"
  >
    <div class="hm-ms-section-inner">
      <div class="hm-ms-section-header" style="border-bottom: none; padding-bottom: 0;">
        <div class="hm-ms-section-header__left">
          <span class="editorial-kicker">RIZAB APOTEKARI ONYXMEN MALAYSIA · PELEPASAN BUNGKUSAN RAHSIA HARI INI</span>
          <h2 id="hm-ms-closing-heading" class="editorial-headline-xl">
            Sediakan Rizab <span class="foil-champagne-text">Horsemen Malaysia</span> Anda Dalam Kotak Rahsia
          </h2>
          <p class="editorial-lead-paragraph">
            Pilih kitaran yang paling bertepatan dengan matlamat kecergasan malam dan stamina harian anda. Setiap pesanan dilindungi oleh Jaminan Ketulenan 14 Hari Onyxmen Malaysia, Peringatan Isian Semula Hari Ke-18, dan bungkusan tanpa nama produk ke seluruh 16 negeri Malaysia.
          </p>
        </div>
      </div>

      <div class="tier-strip-group" role="group" aria-label="Pilihan Akhir Pakej Horsemen Malaysia">
        <button
          type="button"
          class="tier-strip-option"
          data-open-order-drawer="true"
          data-order-product="horsemen"
          data-order-qty="1"
        >
          <div class="tier-strip-option__left">
            <span class="tier-strip-option__eyebrow">PAKEJ 1 BOTOL · KITARAN PERMULAAN 20 HARI · NOTIS HARI KE-18</span>
            <span class="tier-strip-option__title">Horsemen Malaysia — 1 Botol (20 Kapsul × 500mg = 10,000mg)</span>
            <span class="tier-strip-option__subtitle">Penghantaran Ekspres Rahsia Percuma Semenanjung Malaysia (RM 12 Sabah/Sarawak) · FPX, DuitNow QR &amp; COD</span>
          </div>
          <span class="tier-strip-option__price">RM 159</span>
        </button>

        <button
          type="button"
          class="tier-strip-option tier-strip-option--selected"
          data-open-order-drawer="true"
          data-order-product="horsemen"
          data-order-qty="2"
        >
          <div class="tier-strip-option__left">
            <span class="tier-strip-option__eyebrow">PAKEJ 2 BOTOL · PROTOKOL DWI-MOMENTUM 40 HARI · NOTIS HARI KE-36</span>
            <span class="tier-strip-option__title">Horsemen Malaysia — 2 Botol (40 Kapsul × 500mg = 20,000mg)</span>
            <span class="tier-strip-option__subtitle">Penghantaran Ekspres Rahsia Percuma ke Seluruh 16 Negeri Malaysia Termasuk Sabah, Sarawak &amp; Labuan</span>
          </div>
          <span class="tier-strip-option__price">RM 318</span>
        </button>

        <button
          type="button"
          class="tier-strip-option"
          data-open-order-drawer="true"
          data-order-product="horsemen"
          data-order-qty="3"
        >
          <div class="tier-strip-option__left">
            <span class="tier-strip-option__eyebrow">PAKEJ 3 BOTOL · RIZAB LENGKAP APOTEKARI 60 HARI · NOTIS HARI KE-54</span>
            <span class="tier-strip-option__title">Horsemen Malaysia — 3 Botol (60 Kapsul × 500mg = 30,000mg)</span>
            <span class="tier-strip-option__subtitle">Pelepasan Keutamaan VIP + Penghantar Persendirian Lembah Klang + Percuma Pos Seluruh Negara</span>
          </div>
          <span class="tier-strip-option__price">RM 477</span>
        </button>
      </div>

      <div class="hm-ms-hero-cta-cluster" style="justify-content: space-between; padding-top: 1rem; border-top: var(--hairline-subtle);">
        <div style="font-size: 0.84rem; color: var(--text-muted-alabaster);">
          Meja Khidmat Pelanggan &amp; Pengesahan Pesanan Rasmi:
          <a href="mailto:sales@onyxmen.my" style="color: var(--gold-foil-bright); font-weight: 600;">sales@onyxmen.my</a> ·
          <a href="mailto:info@onyxmen.my" style="color: var(--gold-foil-bright); font-weight: 600;">info@onyxmen.my</a> ·
          <a href="mailto:waleedshoaibofficial@gmail.com" style="color: var(--gold-foil-bright); font-weight: 600;">waleedshoaibofficial@gmail.com</a>
        </div>

        <button
          type="button"
          class="cta-foil-primary"
          data-open-order-drawer="true"
          data-order-product="horsemen"
          data-order-qty="2"
        >
          <span>BUKA LACI TEMPAHAN RAHSIA (10 SAAT)</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  </section>

  <!-- Skrip Interaksi Tempatan Pemilih Pakej Horsemen Malaysia -->
  <script>
    (function initHorsemenMsPageInteractions() {
      const tierButtons = document.querySelectorAll('[data-hm-tier-btn]');
      const primaryCta = document.getElementById('hm-ms-primary-order-cta');
      tierButtons.forEach(function bindTierBtn(btn) {
        btn.addEventListener('mouseenter', function onHoverTier() {
          const qty = btn.getAttribute('data-hm-tier-btn') || '2';
          tierButtons.forEach(function updateRadio(other) {
            const isMatch = other === btn;
            other.classList.toggle('hm-ms-tier-row--active', isMatch);
            other.setAttribute('aria-checked', isMatch ? 'true' : 'false');
          });
          if (primaryCta) {
            primaryCta.setAttribute('data-order-qty', qty);
          }
        });
      });
    })();
  </script>
  `;
}

/**
 * Menjana dokumen HTML5 penuh untuk Horsemen Malaysia (Bahasa Malaysia)
 * dan menyimpannya ke dalam public/ms/horsemen-malaysia/index.html.
 */
export function buildHorsemenMsPage() {
  const bodyContent = [
    renderChapterMs100(),
    renderChapterMs101(),
    renderChapterMs102(),
  ].join('\n');

  const schemaGraphJson = buildHorsemenMsGraphJson();

  const fullHtml = renderLuxuryShell({
    lang: 'ms-MY',
    title:
      'Horsemen Malaysia (20 Kapsul x 500mg) — Suplemen Herba Vitaliti & Tenaga Lelaki | RM 159 Onyxmen.my',
    description:
      'Tempah Horsemen Malaysia tulen (Suplemen Herba Vitaliti & Tenaga Lelaki — 20 Kapsul x 500mg, SKU ONYX-HM-20, MPN HM-500MG-20MY) pada harga rasmi RM 159 sebotol (2 Botol RM 286 (10% OFF vs RM 318), 3 Botol RM 405 (15% OFF vs RM 477)). Gabungan Tongkat Ali 150mg, Maca Hitam 100mg, Epimedium 80mg, L-Arginine HCl 80mg, Ginseng Merah 60mg & Tribulus/Zink 30mg dengan penghantaran rahsia kotak kosong ke seluruh 16 negeri Malaysia.',
    canonicalPath: CANONICAL_PATH_MS,
    alternatePathEn: ALTERNATE_PATH_EN,
    alternatePathMs: CANONICAL_PATH_MS,
    ogImage: '/assets/products/horsemen-stage.webp',
    schemaGraphJson,
    bodyContent,
    activeNav: 'horsemen',
    productSlug: 'horsemen',
    defaultQty: 2,
    includeSealStrip: true,
    extraHeadHtml: HORSEMEN_MS_PAGE_CSS,
  });

  const outputPath = path.join(ROOT_DIR, 'public', 'ms', 'horsemen-malaysia', 'index.html');
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, fullHtml, 'utf8');

  const lineCount = fullHtml.split(/\r?\n/).length;
  const byteSize = Buffer.byteLength(fullHtml, 'utf8');

  console.log('====================================================================');
  console.log('ONYXMEN.MY — HORSEMEN BAHASA MALAYSIA FLAGSHIP BUILD COMPLETE');
  console.log('====================================================================');
  console.log(`Output File    : ${path.relative(ROOT_DIR, outputPath)}`);
  console.log(`Canonical URL  : ${CANONICAL_URL_MS}`);
  console.log(`Paired EN URL  : ${SCHEMA_DOMAIN}${ALTERNATE_PATH_EN}`);
  console.log(`Total Lines    : ${lineCount} lines`);
  console.log(`Total Bytes    : ${byteSize} bytes`);
  console.log('====================================================================');

  return { outputPath, lineCount, byteSize };
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  buildHorsemenMsPage();
}
