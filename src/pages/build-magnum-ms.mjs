#!/usr/bin/env node
/**
 * ============================================================================
 * ONYXMAN.MY — BAHASA MALAYSIA FLAGSHIP BUILDER: MAGNUM PUMP XR MALAYSIA
 * Micro-Step: MS-114B (Turn 15 — Subagent #15)
 * Primary Output Target : public/ms/magnum-pump-xr-malaysia/index.html
 * Mirror Output Target  : public/ms/produk/magnum-pump-xr/index.html
 * Canonical URL         : https://www.onyxmen.my/ms/magnum-pump-xr-malaysia/
 * Paired EN URL         : https://www.onyxmen.my/magnum-pump-xr-malaysia/
 *
 * Authentic Product & Business Constants:
 *   - Product : Magnum Pump XR Malaysia (Siri Pro Testosteron — Formula Peningkatan Prestasi Lelaki Kekuatan Maksimum — 30 Kapsul Hitam)
 *   - SKU     : ONYX-MP-30
 *   - MPN     : MPXR-30BLK-MY
 *   - GTIN-13 : 9550000102042
 *   - Weight  : 30 Kapsul Hitam × 600mg = 18,000mg (18.0g) Jisim Aktif Sebotol
 *   - Pricing : 1 Botol (30 Kapsul Hitam) = RM 159 (159.00 MYR)
 *               2 Botol (60 Kapsul Hitam) = RM 318 (318.00 MYR)
 *               3 Botol (90 Kapsul Hitam) = RM 477 (477.00 MYR)
 *   - Cycle   : Kitaran Nitrik Oksida 30 Hari & Peringatan Isian Semula Hari Ke-25
 *   - Desks   : waleedshoaibofficial@gmail.com | sales@onyxman.my | info@onyxman.my
 *
 * Spatial Architecture (Rules #29 & #30):
 *   - Paradigm A : 100vw x 100vh Pentas Sinematik Obsidian
 *   - Paradigm D : 50vw / 50vw Pentas Terbelah Terpaku (Pinned Split Stage)
 *   - Palette    : #050507, #0B0C10, #12141C, #D4AF37, #F3E5AB, #EAE6DF
 *   - Typography : 'Cormorant Garamond', 'Syne', 'Space Grotesk'
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
  buildFullPageGraph,
  buildShippingDetailsNode,
  buildReturnPolicyNode,
} from '../utils/schema-graph.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..', '..');

const PRODUCT_JSON_PATH = path.join(ROOT_DIR, 'src', 'data', 'products', 'magnum-pump-xr.json');
const magnumProductData = JSON.parse(fs.readFileSync(PRODUCT_JSON_PATH, 'utf8'));

const CANONICAL_PATH_MS = '/ms/magnum-pump-xr-malaysia/';
const ALTERNATE_PATH_EN = '/magnum-pump-xr-malaysia/';
const CANONICAL_URL_MS = `${SCHEMA_DOMAIN}${CANONICAL_PATH_MS}`;

/**
 * 10 Soalan Lazim (FAQ) Rasmi Magnum Pump XR Malaysia dalam Bahasa Malaysia (MS-114B)
 * Diselaraskan 1:1 antara paparan akordion HTML5 dan skema JSON-LD FAQPage.
 */
export const MAGNUM_PUMP_XR_MS_FAQS = [
  {
    id: 'faq-mp-ms-01',
    code: 'MP-FAQ-01',
    category: 'PENJELASAN ENTITI SUPLEMEN KAPSUL MAKAN',
    questionMs:
      'Apakah sebenarnya Magnum Pump XR Malaysia di Onyxman.my? Adakah ia suplemen kapsul pemakanan atau alat pam mekanikal?',
    answerMs:
      'Magnum Pump XR Malaysia di Onyxman.my (SKU: ONYX-MP-30, MPN: MPXR-30BLK-MY, GTIN-13: 9550000102042) adalah 100% Suplemen Pemakanan kapsul asid amino dan botani makan (Oral Dietary Supplement) untuk lelaki dewasa berumur 18 tahun ke atas yang mengandungi 30 Kapsul Hitam × 600mg setiap botol. Ia langsung TIDAK berkaitan sama sekali dengan sebarang peralatan mekanikal, pam hidraulik, pam vakum luaran, atau jentera pam industri minyak dan gas (oilfield frac/slurry pump) yang kebetulan berkongsi perkataan "Magnum" dalam sektor perindustrian.',
    clinicalNoteMs:
      'Perkataan "Pump" pada label rasmi Magnum Pump XR merujuk kepada fisiologi aliran vaskular ("vascular & muscular nitric oxide pump") yang dipacu oleh L-Arginine HCl (180mg) dan L-Citrulline Malate (140mg).',
  },
  {
    id: 'faq-mp-ms-02',
    code: 'MP-FAQ-02',
    category: 'TEKNOLOGI 30 KAPSUL HITAM PELINDUNG UV',
    questionMs:
      'Mengapakah Magnum Pump XR didatangkan secara eksklusif dalam bentuk 30 Kapsul Hitam berkilat?',
    answerMs:
      'Setiap botol Magnum Pump XR Malaysia mengandungi tepat 30 kapsul berwarna hitam pekat (Jet-Black UV-Shield Capsules) dengan berat bersih 600mg setiap kapsul (jumlah 18,000mg / 18 gram sebotol). Sarung kapsul hitam legap ini direka khusus untuk mewujudkan penghalang fotokimia terhadap sinaran cahaya dan UV tropika, sekali gus melindungi sebatian aktif yang sensitif cahaya seperti polimetoksiflavon (PMF) di dalam Kunyit Hitam (Kaempferia parviflora 65mg) dan kuasinoid di dalam Tongkat Ali Malaysia (90mg) daripada teroksida.',
    clinicalNoteMs:
      'Selain melindungi potensi fitokimia, sarung kapsul hitam ini membantu mengekalkan kestabilan asid amino higroskopik L-Citrulline Malate dan L-Arginine HCl dalam cuaca lembap Malaysia.',
  },
  {
    id: 'faq-mp-ms-03',
    code: 'MP-FAQ-03',
    category: 'MEKANISME PELEPASAN LANJUTAN (XR)',
    questionMs:
      'Apakah maksud "XR" (Extended-Release) pada nama Magnum Pump XR dan bagaimanakah ia berfungsi di dalam badan?',
    answerMs:
      '"XR" merujuk kepada seni bina dwi-prekursor asid amino Pelepasan Lanjutan (Extended-Release Nitric Oxide Matrix). Fasa pertama bermula dalam masa 30 hingga 45 minit selepas ditelan apabila L-Arginine HCl (180mg) diserap dengan pantas hasil rangsangan Bioperine Lada Hitam (15mg) untuk memacu enzim endothelial nitric oxide synthase (eNOS). Fasa kedua disokong oleh L-Citrulline Malate 2:1 (140mg) yang melepasi metabolisme hati dan ditukar secara berperingkat kepada L-Arginine plasma di buah pinggang selama 4 hingga 6 jam.',
    clinicalNoteMs:
      'Sinergi dwi-fasa ini memastikan aliran vaskular dan stamina fizikal kekal mantap dari sesi latihan gimnasium petang sehingga ke waktu malam tanpa kejatuhan tenaga mendadak.',
  },
  {
    id: 'faq-mp-ms-04',
    code: 'MP-FAQ-04',
    category: 'PECAHAN TEPAT 6 RAMUAN 600MG',
    questionMs:
      'Apakah pecahan miligram sebenar bagi kesemua 6 ramuan aktif di dalam setiap kapsul hitam 600mg Magnum Pump XR?',
    answerMs:
      'Onyxman Malaysia mengamalkan ketelusan label 100% tanpa campuran proprietari tersembunyi. Setiap kapsul hitam 600mg Magnum Pump XR mengandungi: (1) L-Arginine Hydrochloride Gred Farmaseutikal 99.5% sebanyak 180mg (30.0%), (2) L-Citrulline Malate Nisbah Bio-Aktif 2:1 sebanyak 140mg (23.3%), (3) Ekstrak Buah Tribulus Terrestris Piawai 45% Saponin Steroid sebanyak 110mg (18.3%), (4) Ekstrak Akar Tongkat Ali Malaysia 100:1 (2.2% Eurycomanone) sebanyak 90mg (15.0%), (5) Ekstrak Rizom Kunyit Hitam / Halia Hitam (Kaempferia parviflora 5% PMF) sebanyak 65mg (10.8%), dan (6) Ekstrak Lada Hitam Piawai Bioperine (95% Piperine) sebanyak 15mg (2.5%).',
    clinicalNoteMs:
      'Jumlah keseluruhan sebotol (30 kapsul hitam) ialah 18,000mg (18.0 gram) bahan aktif tulen—menjadikannya formulasi berjisim tertinggi dalam koleksi Onyxman Malaysia.',
  },
  {
    id: 'faq-mp-ms-05',
    code: 'MP-FAQ-05',
    category: 'PERINGATAN ISIAN SEMULA HARI KE-25',
    questionMs:
      'Mengapakah sistem Peringatan Isian Semula Magnum Pump XR ditetapkan pada Hari Ke-25 dan bukannya Hari Ke-30?',
    answerMs:
      'Memandangkan setiap botol Magnum Pump XR membekalkan 30 kapsul hitam untuk Kitaran Nitrik Oksida 30 Hari penuh (pada kadar pengambilan 1 kapsul hitam sehari), pada pagi Hari Ke-25 anda masih mempunyai baki tepat 5 kapsul hitam (3,000mg) di dalam botol. Peringatan automatik Hari Ke-25 memberikan tetingkap masa 5 hari yang selesa untuk penghantaran kurier ekspres rahsia (1–2 hari bekerja di Semenanjung; 2–4 hari bekerja di Sabah, Sarawak & Labuan) tiba di pintu anda sebelum kapsul hitam ke-30 habis.',
    clinicalNoteMs:
      'Bagi pelanggan Pakej 2 Botol (60 kapsul hitam / RM 318), peringatan diaktifkan pada Hari Ke-50; manakala bagi Pakej 3 Botol (90 kapsul hitam / RM 477), peringatan diaktifkan pada Hari Ke-75.',
  },
  {
    id: 'faq-mp-ms-06',
    code: 'MP-FAQ-06',
    category: 'PERBANDINGAN MAGNUM PUMP XR VS GROW XL',
    questionMs:
      'Bagaimanakah cara memilih antara Magnum Pump XR dan Grow XL memandangkan kedua-duanya mempunyai 30 kapsul sebotol?',
    answerMs:
      'Walaupun kedua-dua produk menawarkan kitaran 30 kapsul pada harga rasmi RM 159 sebotol, fokus fisiologi dan masa pengambilannya berbeza. Pilih Magnum Pump XR (30 Kapsul Hitam × 600mg = 18,000mg) sekiranya keutamaan anda ialah lonjakan Nitrik Oksida (L-Arginine HCl 180mg + L-Citrulline Malate 140mg), pengembangan vaskular semasa latihan bebanan di gimnasium, serta prestasi fizikal waktu malam yang dipacu oleh Tribulus (110mg), Tongkat Ali (90mg), Kunyit Hitam (65mg) dan Bioperine (15mg). Pilih Grow XL (30 Kapsul × 500mg = 15,000mg) sekiranya anda mahukan suplemen nutrisi aliran mikro waktu pagi selepas sarapan yang mengandungi Ginkgo Biloba, Saw Palmetto, dan Muira Puama.',
    clinicalNoteMs:
      'Atlet dan eksekutif aktif sering mengambil Grow XL pada waktu pagi selepas sarapan dan Magnum Pump XR 30–45 minit sebelum sesi senaman petang atau aktiviti malam.',
  },
  {
    id: 'faq-mp-ms-07',
    code: 'MP-FAQ-07',
    category: 'HARGA RASMI & PAKEJ 1 / 2 / 3 BOTOL',
    questionMs:
      'Berapakah harga rasmi Magnum Pump XR di Malaysia dan pakej manakah yang paling berbaloi?',
    answerMs:
      'Harga rasmi seragam Magnum Pump XR di Onyxman.my ialah: (1) Pakej 1 Botol (30 Kapsul Hitam / 18,000mg / Kitaran 30 Hari) pada harga RM 159.00 dengan Penghantaran Ekspres Rahsia Percuma di Semenanjung Malaysia (RM 12 untuk Sabah/Sarawak/Labuan); (2) Pakej 2 Botol (60 Kapsul Hitam / 36,000mg / Protokol Dwi-Aliran Vaskular & Senaman 60 Hari) pada harga RM 318.00 dengan Penghantaran Ekspres Rahsia Percuma ke seluruh 16 negeri Malaysia termasuk Sabah, Sarawak & Labuan; dan (3) Pakej 3 Botol (90 Kapsul Hitam / 54,000mg / Pakej Lengkap Siri Pro 90 Hari) pada harga RM 477.00 dengan Pelepasan Keutamaan VIP serta Khidmat Peringatan Hari Ke-75.',
    clinicalNoteMs:
      'Pakej 2 Botol (RM 318) adalah pilihan paling popular kerana ia merangkumi 60 kapsul hitam penuh untuk kegunaan pra-gimnasium dan malam serta pengecualian caj kargo udara ke Malaysia Timur.',
  },
  {
    id: 'faq-mp-ms-08',
    code: 'MP-FAQ-08',
    category: 'BEBAS KAFEIN & KESELESAAN TIDUR MALAM',
    questionMs:
      'Adakah Magnum Pump XR mengandungi kafein, yohimbine, atau perangsang saraf yang menyebabkan sukar tidur malam?',
    answerMs:
      'Tidak sama sekali. Magnum Pump XR adalah 100% bebas daripada kafein anhidrat, yohimbine, synephrine, atau sebarang perangsang sistem saraf pusat (CNS stimulants) sintetik. Kesan pengembangan vaskular dan staminanya dijana sepenuhnya melalui laluan fisiologi nitrik oksida endotelium (L-Arginine HCl + L-Citrulline Malate) serta sokongan bio-energetik Kunyit Hitam dan Tongkat Ali. Oleh itu, anda boleh mengambil 1 kapsul hitam pada lewat petang atau malam tanpa mengalami debaran jantung, tangan menggigil, atau masalah insomnia.',
    clinicalNoteMs:
      'Ketiadaan kafein juga menjadikan Magnum Pump XR sesuai digandingkan dengan minuman pra-senaman bebas perangsang atau air elektrolit kosong.',
  },
  {
    id: 'faq-mp-ms-09',
    code: 'MP-FAQ-09',
    category: 'PENGHANTARAN RAHSIA & KAEDAH BAYARAN MALAYSIA',
    questionMs:
      'Bagaimanakah privasi bungkusan saya dilindungi dan apakah kaedah pembayaran yang diterima di Malaysia?',
    answerMs:
      'Setiap pesanan Magnum Pump XR dibungkus di dalam kotak keselamatan legap tanpa sebarang logo, warna mencolok, atau perkataan berkaitan produk kesihatan lelaki. Slip kurier (airway bill) hanya mencatatkan nama pengirim sebagai "OM Fulfilment Logistics (Kuala Lumpur)" dengan keterangan neutral "Personal Wellness Supplement". Kami menerima pembayaran melalui Perbankan Dalam Talian FPX (Maybank2u, CIMB Clicks, Public Bank, RHB, Hong Leong, Bank Islam), DuitNow QR Segera, serta Bayar Waktu Terima (Cash on Delivery / COD) di seluruh Malaysia.',
    clinicalNoteMs:
      'Pelanggan di Kuala Lumpur, Selangor, Putrajaya, dan Cyberjaya juga boleh memilih Penghantar Persendirian Rahsia Hari Sama (3–5 jam) bagi pesanan yang disahkan sebelum jam 4:00 petang.',
  },
  {
    id: 'faq-mp-ms-10',
    code: 'MP-FAQ-10',
    category: 'KESELAMATAN VASKULAR & NASIHAT PERUBATAN',
    questionMs:
      'Siapakah yang perlu mendapatkan nasihat doktor sebelum mengamalkan suplemen Nitrik Oksida seperti Magnum Pump XR?',
    answerMs:
      'Magnum Pump XR dirumus khas untuk lelaki dewasa yang sihat berumur 18 tahun ke atas. Oleh sebab gabungan L-Arginine HCl (180mg), L-Citrulline Malate (140mg), dan Kunyit Hitam (65mg) menyokong laluan vasodilatasi nitrik oksida secara aktif, individu yang sedang mengambil ubat nitrat preskripsi untuk sakit dada (angina), ubat anti-hipertensi (tekanan darah), ubat pencair darah, atau perencat PDE5 wajib merujuk doktor perubatan berdaftar di Malaysia sebelum memulakan penggunaan.',
    clinicalNoteMs:
      'Produk ini adalah suplemen pemakanan asid amino dan botani untuk menyokong kecergasan umum lelaki dewasa dan tidak bertujuan untuk mendiagnosis, merawat, menyembuhkan, atau mencegah sebarang penyakit.',
  },
];

/**
 * Membina struktur penuh @graph JSON-LD khusus untuk halaman utama Bahasa Malaysia Magnum Pump XR:
 * https://www.onyxmen.my/ms/magnum-pump-xr-malaysia/
 * Menggunakan buildFullPageGraph daripada src/utils/schema-graph.mjs dan memperkayakannya
 * dengan data rasmi src/data/products/magnum-pump-xr.json.
 */
function buildMagnumMsGraphJson() {
  const baseGraphStr = buildFullPageGraph({
    lang: 'ms-MY',
    pageType: 'product',
    pageUrl: CANONICAL_URL_MS,
    title:
      'Magnum Pump XR Malaysia (30 Kapsul Hitam × 600mg) — Siri Pro Testosteron & Formula Nitrik Oksida Kekuatan Maksimum | RM 159 Onyxman.my',
    description:
      'Tempah Magnum Pump XR Malaysia tulen (Siri Pro Testosteron — Formula Peningkatan Prestasi Lelaki Kekuatan Maksimum — 30 Kapsul Hitam, SKU ONYX-MP-30, MPN MPXR-30BLK-MY, GTIN-13 9550000102042) pada harga rasmi RM 159 sebotol. Mengandungi L-Arginine HCl 180mg, L-Citrulline Malate 140mg, Tribulus Terrestris 110mg, Tongkat Ali Malaysia 90mg, Kunyit Hitam 65mg & Bioperine 15mg.',
    product: 'magnum-pump-xr',
    breadcrumbs: [
      { name: 'Utama Onyxman Malaysia', url: '/ms/' },
      { name: 'Koleksi Formulasi', url: '/ms/produk/' },
      {
        name: 'Magnum Pump XR Malaysia (30 Kapsul Hitam × 600mg)',
        url: CANONICAL_PATH_MS,
      },
    ],
    faqs: MAGNUM_PUMP_XR_MS_FAQS,
  });

  const graphObj = JSON.parse(baseGraphStr);
  const shippingNode = buildShippingDetailsNode();
  const returnNode = buildReturnPolicyNode();

  const productNodeId = `${CANONICAL_URL_MS}#product`;
  const productGroupId = `${CANONICAL_URL_MS}#product-group`;

  const images = [
    `${SCHEMA_DOMAIN}${magnumProductData.images.stageWebp}`,
    `${SCHEMA_DOMAIN}${magnumProductData.images.stagePng}`,
    `${SCHEMA_DOMAIN}${magnumProductData.images.portraitWebp}`,
    `${SCHEMA_DOMAIN}${magnumProductData.images.portraitPng}`,
    `${SCHEMA_DOMAIN}${magnumProductData.images.cutoutWebp}`,
    `${SCHEMA_DOMAIN}${magnumProductData.images.cutoutPng}`,
  ];

  const brandNode = {
    '@type': 'Brand',
    '@id': BRAND_ID,
    name: 'Onyxman',
    url: SCHEMA_DOMAIN,
  };

  const sellerNode = {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Onyxman Malaysia',
    url: SCHEMA_DOMAIN,
    email: 'sales@onyxman.my',
  };

  const keyActivesMs = magnumProductData.botanicalActives.map(
    (act) =>
      `${act.scientificName} (${act.commonNameMs} — ${act.dosagePerCapsuleMg}mg / kapsul hitam; ${act.standardization})`
  );

  const singleBottleOffer = {
    '@type': 'Offer',
    '@id': `${CANONICAL_URL_MS}#offer-1-bottle`,
    url: CANONICAL_URL_MS,
    name: 'Magnum Pump XR Malaysia — Pakej 1 Botol (30 Kapsul Hitam × 600mg = 18,000mg)',
    sku: magnumProductData.sku,
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

  const hasVariantNodes = magnumProductData.pricing.bundleTiers.map((tier) => ({
    '@type': ['Product', 'DietarySupplement'],
    '@id': `${CANONICAL_URL_MS}#variant-${tier.bottles}-bottle`,
    name: `Magnum Pump XR Malaysia — ${tier.titleMs} (${tier.totalCapsules} Kapsul Hitam × 600mg)`,
    sku: `${magnumProductData.sku}-${tier.bottles}B`,
    mpn: `${magnumProductData.mpn}-${tier.bottles}B`,
    gtin13: magnumProductData.gtin13,
    image: images,
    brand: brandNode,
    isVariantOf: {
      '@id': productGroupId,
    },
    size: `${tier.bottles} Botol (${tier.totalCapsules} Kapsul Hitam × 600mg = ${tier.totalCapsules * 600}mg)`,
    activeIngredient: keyActivesMs.join(', '),
    targetPopulation: 'Lelaki Dewasa (18+)',
    isProprietary: false,
    legalStatus: 'Suplemen Pemakanan Asid Amino & Botani (Dietary Supplement)',
    offers: {
      '@type': 'Offer',
      '@id': `${CANONICAL_URL_MS}#offer-${tier.bottles}-bottle`,
      url: CANONICAL_URL_MS,
      sku: `${magnumProductData.sku}-${tier.bottles}B`,
      price: tier.priceSchema,
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

  const exactMainProductNode = {
    '@type': ['Product', 'DietarySupplement'],
    '@id': productNodeId,
    name: 'Magnum Pump XR Malaysia — Siri Pro Testosteron — Formula Peningkatan Prestasi Lelaki Kekuatan Maksimum (30 Kapsul Hitam × 600mg)',
    alternateName: [
      'Magnum Pump XR 30 Kapsul Hitam Onyxman Malaysia',
      'Magnum Pump XR Testosterone Pro Series Malaysia',
      'ONYX-MP-30 Magnum Pump XR',
    ],
    description:
      'Magnum Pump XR Malaysia oleh Onyxman (SKU: ONYX-MP-30, MPN: MPXR-30BLK-MY, GTIN-13: 9550000102042) ialah suplemen pemakanan kapsul asid amino dan botani (30 Kapsul Hitam × 600mg = 18,000mg sebotol) yang menggabungkan L-Arginine HCl (180mg), L-Citrulline Malate (140mg), Tribulus Terrestris (110mg), Tongkat Ali Malaysia 100:1 (90mg), Kunyit Hitam / Halia Hitam Kaempferia parviflora (65mg), dan Bioperine Lada Hitam (15mg). Harga rasmi RM 159 sebotol dengan penghantaran bungkusan rahsia ke seluruh 16 negeri Malaysia.',
    disambiguatingDescription: `${magnumProductData.entityDisambiguation.positiveClassificationMs} ${magnumProductData.entityDisambiguation.negativeDisambiguationMs}`,
    url: CANONICAL_URL_MS,
    inLanguage: 'ms-MY',
    sku: magnumProductData.sku,
    mpn: magnumProductData.mpn,
    gtin13: magnumProductData.gtin13,
    brand: brandNode,
    manufacturer: {
      '@id': ORG_ID,
    },
    image: images,
    category: magnumProductData.entityDisambiguation.schemaCategory,
    isVariantOf: {
      '@id': productGroupId,
    },
    activeIngredient: keyActivesMs,
    nonProprietaryName:
      'L-Arginine HCl 180mg; L-Citrulline Malate 140mg; Tribulus terrestris 110mg; Eurycoma longifolia 90mg; Kaempferia parviflora 65mg; Piper nigrum Bioperine 15mg',
    recommendedIntake: {
      '@type': 'RecommendedDoseSchedule',
      doseValue: 1,
      doseUnit: 'Kapsul Hitam (600mg)',
      frequency:
        'Ambil 1 kapsul hitam (600mg) bersama 300ml air kosong 30 hingga 45 minit sebelum latihan bebanan atau aktiviti malam (Protokol A), atau 1 kapsul hitam di antara waktu makan tengah hari dan makan malam pada hari rehat (Protokol B).',
      targetPopulation: 'Lelaki Dewasa (18+)',
    },
    targetPopulation: 'Lelaki Dewasa (18+)',
    isProprietary: false,
    legalStatus: 'Suplemen Pemakanan Asid Amino & Botani (Oral Dietary Supplement)',
    safetyConsideration:
      'Suplemen pemakanan kapsul asid amino dan botani untuk lelaki dewasa berumur 18 tahun ke atas sahaja. Bukan alat pam mekanikal atau peranti industri. Tidak bertujuan untuk mendiagnosis, merawat, menyembuhkan, atau mencegah sebarang penyakit.',
    offers: singleBottleOffer,
  };

  const exactProductGroupNode = {
    '@type': 'ProductGroup',
    '@id': productGroupId,
    name: 'Magnum Pump XR Malaysia — Koleksi Pakej Rasmi 1, 2 & 3 Botol (RM 159 / RM 318 / RM 477)',
    description:
      'Koleksi pakej rasmi Magnum Pump XR Malaysia (30 Kapsul Hitam × 600mg sebotol): 1 Botol RM 159.00 (30 Kapsul Hitam), 2 Botol RM 318.00 (60 Kapsul Hitam), dan 3 Botol RM 477.00 (90 Kapsul Hitam) dengan Peringatan Isian Semula Hari Ke-25 dan penghantaran bungkusan rahsia.',
    url: CANONICAL_URL_MS,
    productGroupID: 'ONYX-MP-30-GROUP',
    brand: brandNode,
    variesBy: ['https://schema.org/size'],
    hasVariant: hasVariantNodes,
  };

  // Replace Product, ProductGroup, ItemPage and enrich Organization in graphObj['@graph']
  graphObj['@graph'] = graphObj['@graph'].map((node) => {
    if (Array.isArray(node['@type']) && node['@type'].includes('Organization')) {
      const updatedOrg = { ...node };
      updatedOrg.contactPoint = [
        ...(Array.isArray(updatedOrg.contactPoint) ? updatedOrg.contactPoint : []),
        {
          '@type': 'ContactPoint',
          contactType: 'Primary Merchant Fulfilment & Express Order Notification Desk',
          email: 'waleedshoaibofficial@gmail.com',
          url: `${SCHEMA_DOMAIN}/ms/hubungi-kami/`,
          availableLanguage: ['ms-MY', 'en-MY'],
          areaServed: 'MY',
        },
      ];
      return updatedOrg;
    }
    if (node['@type'] === 'ItemPage') {
      return {
        ...node,
        '@id': `${CANONICAL_URL_MS}#webpage`,
        url: CANONICAL_URL_MS,
        mainEntity: { '@id': productNodeId },
        breadcrumb: { '@id': `${CANONICAL_URL_MS}#breadcrumb` },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: [
            '#mp-ms-hero-title',
            '#mp-ms-executive-summary',
            '#mp-ms-entity-disambiguation-banner',
            '#mp-ms-botanical-heading',
            '#mp-ms-faq-heading',
          ],
        },
      };
    }
    if (Array.isArray(node['@type']) && node['@type'].includes('Product')) {
      return exactMainProductNode;
    }
    if (node['@type'] === 'ProductGroup') {
      return exactProductGroupNode;
    }
    return node;
  });

  return JSON.stringify(graphObj, null, 2);
}

/**
 * Gaya Seni Bina Khusus Halaman Magnum Pump XR Malaysia (MS-114B)
 * Mematuhi sepenuhnya Peraturan #29 & #30:
 * - Palet warna: #050507, #0B0C10, #12141C, #D4AF37, #F3E5AB, #EAE6DF
 * - Tipografi: 'Cormorant Garamond', 'Syne', 'Space Grotesk'
 * - Sifar kotak kad bersempadan murah, sifar pil bulat, sifar grid berulang
 */
const MAGNUM_MS_PAGE_CSS = `
<style id="magnum-ms-architectural-css">
  /* ==========================================================================
     BAB 1: PENTAS SINEMATIK OBSIDIAN 100vw x 100vh MAGNUM PUMP XR MALAYSIA
     ========================================================================== */
  .mp-ms-cinema-hero {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    background-color: #050507;
    background-image:
      radial-gradient(circle at 70% 36%, rgba(212, 175, 55, 0.13) 0%, rgba(18, 20, 28, 0.68) 45%, #050507 88%),
      linear-gradient(180deg, #050507 0%, #0B0C10 54%, #050507 100%);
    padding: clamp(5.5rem, 10vh, 8.5rem) var(--gutter-cinema) clamp(3.5rem, 7vh, 6rem);
    border-bottom: var(--hairline-rule);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
  }

  .mp-ms-cinema-hero__ambient-crest {
    position: absolute;
    top: 7%;
    right: -3vw;
    font-family: var(--font-display);
    font-size: clamp(6.5rem, 17vw, 20rem);
    font-weight: 600;
    letter-spacing: 0.14em;
    line-height: 0.85;
    color: rgba(212, 175, 55, 0.032);
    pointer-events: none;
    user-select: none;
    z-index: 1;
    white-space: nowrap;
  }

  .mp-ms-cinema-hero__top-strip {
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

  .mp-ms-breadcrumb {
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

  .mp-ms-breadcrumb__link:hover {
    color: var(--gold-foil-bright);
  }

  .mp-ms-breadcrumb__sep {
    color: var(--gold-champagne);
  }

  .mp-ms-breadcrumb__current {
    color: var(--gold-foil-bright);
    font-weight: 600;
  }

  .mp-ms-telemetry-codes {
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

  .mp-ms-telemetry-codes strong {
    color: var(--gold-champagne);
    font-weight: 600;
  }

  .mp-ms-cinema-hero__stage {
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

  .mp-ms-cinema-hero__narrative-col {
    flex: 1 1 560px;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 1.45rem;
  }

  .mp-ms-cinema-hero__visual-col {
    flex: 1 1 440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .mp-ms-bottle-monolith {
    position: relative;
    width: 100%;
    max-width: 640px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 0;
  }

  .mp-ms-bottle-monolith__halo {
    position: absolute;
    inset: 6% 8%;
    background: radial-gradient(circle at 50% 48%, rgba(212, 175, 55, 0.24) 0%, rgba(154, 123, 44, 0.07) 48%, transparent 76%);
    pointer-events: none;
    z-index: 1;
  }

  .mp-ms-bottle-monolith__img {
    position: relative;
    z-index: 2;
    width: clamp(300px, 39vw, 570px);
    max-height: 75vh;
    object-fit: contain;
    mask-image: radial-gradient(circle at 50% 50%, #000000 74%, transparent 99%);
    -webkit-mask-image: radial-gradient(circle at 50% 50%, #000000 74%, transparent 99%);
    filter: drop-shadow(0 38px 72px rgba(0, 0, 0, 0.96));
    transition: transform 520ms var(--ease-cinema);
  }

  .mp-ms-bottle-monolith__caption-ledger {
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
    font-size: 0.73rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-muted-alabaster);
  }

  .mp-ms-subtitle-serif {
    font-family: var(--font-display);
    font-size: clamp(1.35rem, 2.1vw, 1.95rem);
    font-style: italic;
    font-weight: 400;
    color: var(--gold-foil-bright);
    line-height: 1.35;
  }

  .mp-ms-entity-banner {
    padding: 0.95rem 1.25rem;
    background: rgba(18, 20, 28, 0.85);
    border-left: 2px solid var(--gold-champagne);
    border-top: var(--hairline-subtle);
    border-bottom: var(--hairline-subtle);
    font-family: var(--font-technical);
    font-size: 0.82rem;
    color: var(--text-muted-alabaster);
    line-height: 1.6;
  }

  .mp-ms-entity-banner strong {
    color: var(--gold-foil-bright);
  }

  .mp-ms-spec-ribbon {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem 2.6rem;
    padding: 1.25rem 0;
    border-top: var(--hairline-rule);
    border-bottom: var(--hairline-rule);
  }

  .mp-ms-spec-ribbon__item {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .mp-ms-spec-ribbon__label {
    font-family: var(--font-technical);
    font-size: 0.66rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }

  .mp-ms-spec-ribbon__val {
    font-family: var(--font-display);
    font-size: 1.4rem;
    color: var(--text-silk-ivory);
    line-height: 1.15;
  }

  /* Pita Pemilihan Pakej 1 / 2 / 3 Botol (RM 159 / RM 318 / RM 477) */
  .mp-ms-tier-selector {
    display: flex;
    flex-direction: column;
    width: 100%;
    border-top: var(--hairline-rule);
    margin-top: 0.35rem;
  }

  .mp-ms-tier-row {
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

  .mp-ms-tier-row:hover,
  .mp-ms-tier-row[aria-checked="true"],
  .mp-ms-tier-row--active {
    background: linear-gradient(90deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.02) 100%);
    border-bottom-color: var(--gold-champagne);
    padding-left: 1.35rem;
  }

  .mp-ms-tier-row__left {
    display: flex;
    flex-direction: column;
    gap: 0.22rem;
    flex: 1 1 320px;
  }

  .mp-ms-tier-row__kicker {
    font-family: var(--font-technical);
    font-size: 0.66rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }

  .mp-ms-tier-row__title {
    font-family: var(--font-display);
    font-size: 1.38rem;
    color: var(--text-silk-ivory);
  }

  .mp-ms-tier-row__meta {
    font-family: var(--font-technical);
    font-size: 0.82rem;
    color: var(--text-muted-alabaster);
  }

  .mp-ms-tier-row__right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.15rem;
  }

  .mp-ms-tier-row__price {
    font-family: var(--font-display);
    font-size: 1.85rem;
    color: var(--gold-foil-bright);
    line-height: 1;
  }

  .mp-ms-tier-row__unit {
    font-family: var(--font-technical);
    font-size: 0.7rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-ash-silver);
  }

  .mp-ms-hero-cta-cluster {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem 1.5rem;
    margin-top: 0.5rem;
  }

  .mp-ms-discreet-pledge-strip {
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

  .mp-ms-discreet-pledge-col {
    flex: 1 1 260px;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    border-left: 2px solid var(--gold-champagne);
    padding-left: 1rem;
  }

  .mp-ms-discreet-pledge-col__kicker {
    font-family: var(--font-technical);
    font-size: 0.66rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }

  .mp-ms-discreet-pledge-col__text {
    font-family: var(--font-technical);
    font-size: 0.86rem;
    color: var(--text-silk-ivory);
    line-height: 1.5;
  }

  /* ==========================================================================
     BAB 2: PARADIGM D — 50vw / 50vw ANALISIS 6 RAMUAN NITRIK OKSIDA & BOTANI
     ========================================================================== */
  .mp-ms-split-monograph {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: stretch;
    background-color: #0B0C10;
    border-bottom: var(--hairline-rule);
  }

  .mp-ms-split-monograph__left-sticky {
    width: 50vw;
    height: 100vh;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: clamp(5rem, 8vh, 7rem) var(--gutter-cinema) clamp(2rem, 4vh, 3.5rem);
    background:
      radial-gradient(circle at 50% 44%, rgba(212, 175, 55, 0.14) 0%, rgba(18, 20, 28, 0.88) 54%, #050507 100%);
    border-right: var(--hairline-rule);
    overflow: hidden;
  }

  .mp-ms-split-monograph__right-scroll {
    width: 50vw;
    min-height: 100vh;
    padding: clamp(5rem, 9vh, 8rem) var(--gutter-cinema);
    background-color: #050507;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }

  .mp-ms-dosage-proportion-bar {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
    padding-top: 1.15rem;
    border-top: var(--hairline-rule);
  }

  .mp-ms-dosage-proportion-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-family: var(--font-technical);
    font-size: 0.77rem;
    color: var(--text-muted-alabaster);
    padding: 0.28rem 0;
    border-bottom: var(--hairline-subtle);
  }

  .mp-ms-dosage-proportion-row strong {
    color: var(--gold-foil-bright);
    font-family: var(--font-display);
    font-size: 1.05rem;
  }

  .mp-ms-botanical-entry {
    padding: 2.5rem 0;
    border-top: var(--hairline-rule);
    display: flex;
    flex-direction: column;
    gap: 1.15rem;
  }

  .mp-ms-botanical-entry__header {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
  }

  .mp-ms-botanical-entry__code {
    font-family: var(--font-technical);
    font-size: 0.72rem;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }

  .mp-ms-botanical-entry__mg {
    font-family: var(--font-display);
    font-size: 2.1rem;
    color: var(--gold-foil-bright);
    line-height: 1;
  }

  .mp-ms-botanical-entry__title {
    font-family: var(--font-display);
    font-size: clamp(1.65rem, 2.5vw, 2.35rem);
    color: var(--text-silk-ivory);
    line-height: 1.12;
  }

  .mp-ms-botanical-entry__latin {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.15rem;
    color: var(--gold-champagne);
  }

  .mp-ms-botanical-entry__telemetry {
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

  .mp-ms-botanical-entry__telemetry span strong {
    display: block;
    font-size: 0.68rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--gold-champagne);
    margin-bottom: 0.15rem;
  }

  .mp-ms-botanical-entry__copy {
    font-family: var(--font-technical);
    font-size: 0.96rem;
    line-height: 1.72;
    color: var(--text-muted-alabaster);
  }

  /* Seksyen Teknologi Kapsul Hitam Pelindung UV & Penjelasan Entiti */
  .mp-ms-blackcap-section {
    background-color: #12141C;
    background-image: radial-gradient(circle at 80% 25%, rgba(212, 175, 55, 0.09) 0%, transparent 65%);
    padding: var(--gutter-vertical) var(--gutter-cinema);
    border-bottom: var(--hairline-rule);
  }

  /* ==========================================================================
     BAB 3: KRONOLOGI 30 HARI (HARI KE-25), PERBANDINGAN, 16 NEGERI & 10 FAQ
     ========================================================================== */
  .mp-ms-cycle-section {
    background-color: #0B0C10;
    background-image: radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.08) 0%, transparent 65%);
    padding: var(--gutter-vertical) var(--gutter-cinema);
    border-bottom: var(--hairline-rule);
  }

  .mp-ms-cycle-container,
  .mp-ms-section-inner {
    max-width: 1680px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3.25rem;
  }

  .mp-ms-cycle-ledger {
    border-top: var(--hairline-rule);
    display: flex;
    flex-direction: column;
  }

  .mp-ms-cycle-stage-row {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.5rem 3rem;
    padding: 2.25rem 0;
    border-bottom: var(--hairline-subtle);
  }

  .mp-ms-cycle-stage-row--highlight {
    background: linear-gradient(90deg, rgba(212, 175, 55, 0.12) 0%, transparent 100%);
    padding-left: 1.25rem;
    padding-right: 1.25rem;
    border-left: 2px solid var(--gold-champagne);
    border-bottom-color: var(--gold-champagne);
  }

  .mp-ms-cycle-stage-row__day {
    flex: 0 0 220px;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .mp-ms-cycle-stage-row__day-kicker {
    font-family: var(--font-technical);
    font-size: 0.68rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }

  .mp-ms-cycle-stage-row__day-num {
    font-family: var(--font-display);
    font-size: 2rem;
    color: var(--gold-foil-bright);
    line-height: 1.05;
  }

  .mp-ms-cycle-stage-row__body {
    flex: 1 1 480px;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .mp-ms-cycle-stage-row__title {
    font-family: var(--font-display);
    font-size: 1.65rem;
    color: var(--text-silk-ivory);
  }

  .mp-ms-cycle-stage-row__desc {
    font-family: var(--font-technical);
    font-size: 0.95rem;
    color: var(--text-muted-alabaster);
    line-height: 1.68;
  }

  .mp-ms-cycle-stage-row__meta {
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

  .mp-ms-comparison-section,
  .mp-ms-states-section,
  .mp-ms-authenticity-section,
  .mp-ms-faq-section,
  .mp-ms-closing-vault {
    padding: var(--gutter-vertical) var(--gutter-cinema);
    border-bottom: var(--hairline-rule);
  }

  .mp-ms-comparison-section {
    background-color: #050507;
  }

  .mp-ms-states-section {
    background-color: #0B0C10;
  }

  .mp-ms-authenticity-section {
    background-color: #12141C;
  }

  .mp-ms-faq-section {
    background-color: #050507;
  }

  .mp-ms-closing-vault {
    background: radial-gradient(circle at 50% 50%, rgba(212, 175, 55, 0.14) 0%, #0B0C10 62%, #050507 100%);
  }

  .mp-ms-section-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2rem;
    padding-bottom: 2rem;
    border-bottom: var(--hairline-rule);
  }

  .mp-ms-section-header__left {
    max-width: 840px;
    display: flex;
    flex-direction: column;
    gap: 0.9rem;
  }

  .mp-ms-table-scroll {
    width: 100%;
    overflow-x: auto;
    border-top: var(--hairline-rule);
    border-bottom: var(--hairline-rule);
  }

  .mp-ms-architectural-table {
    width: 100%;
    min-width: 920px;
    border-collapse: collapse;
    text-align: left;
    font-family: var(--font-technical);
  }

  .mp-ms-architectural-table th,
  .mp-ms-architectural-table td {
    padding: 1.25rem 1.15rem;
    border-bottom: var(--hairline-subtle);
    vertical-align: top;
    font-size: 0.88rem;
    line-height: 1.55;
  }

  .mp-ms-architectural-table th {
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-champagne);
    border-bottom: var(--hairline-rule);
    background-color: rgba(18, 20, 28, 0.65);
  }

  .mp-ms-architectural-table td.mp-ms-col-highlight,
  .mp-ms-architectural-table th.mp-ms-col-highlight {
    background: rgba(212, 175, 55, 0.08);
    color: var(--text-silk-ivory);
    border-left: var(--hairline-rule);
    border-right: var(--hairline-rule);
  }

  .mp-ms-faq-ledger {
    border-top: var(--hairline-rule);
    display: flex;
    flex-direction: column;
  }

  .mp-ms-faq-item {
    border-bottom: var(--hairline-subtle);
    transition: background-color 220ms ease;
  }

  .mp-ms-faq-item[open] {
    background-color: rgba(212, 175, 55, 0.04);
    border-bottom-color: var(--gold-champagne);
  }

  .mp-ms-faq-summary {
    list-style: none;
    cursor: pointer;
    padding: 1.75rem 0.5rem;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .mp-ms-faq-summary::-webkit-details-marker {
    display: none;
  }

  .mp-ms-faq-summary__left {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .mp-ms-faq-summary__code {
    font-family: var(--font-technical);
    font-size: 0.68rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }

  .mp-ms-faq-summary__question {
    font-family: var(--font-display);
    font-size: clamp(1.35rem, 2vw, 1.75rem);
    color: var(--text-silk-ivory);
    line-height: 1.25;
  }

  .mp-ms-faq-summary__icon {
    font-family: var(--font-technical);
    font-size: 1.25rem;
    color: var(--gold-foil-bright);
    transition: transform 240ms var(--ease-cinema);
  }

  .mp-ms-faq-item[open] .mp-ms-faq-summary__icon {
    transform: rotate(45deg);
  }

  .mp-ms-faq-body {
    padding: 0 0.5rem 2rem;
    max-width: 980px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: var(--text-muted-alabaster);
    font-size: 0.96rem;
    line-height: 1.72;
  }

  .mp-ms-faq-clinical-note {
    padding: 0.95rem 1.25rem;
    border-left: 2px solid var(--gold-champagne);
    background-color: rgba(11, 12, 16, 0.9);
    color: var(--gold-foil-bright);
    font-size: 0.85rem;
  }

  @media (max-width: 1024px) {
    .mp-ms-split-monograph {
      flex-direction: column;
    }
    .mp-ms-split-monograph__left-sticky,
    .mp-ms-split-monograph__right-scroll {
      width: 100vw;
      height: auto;
      position: relative;
    }
    .mp-ms-split-monograph__left-sticky {
      border-right: none;
      border-bottom: var(--hairline-rule);
    }
    .mp-ms-cycle-stage-row__meta {
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
 * BAB 1: PENTAS SINEMATIK OBSIDIAN 100vw x 100vh MAGNUM PUMP XR MALAYSIA
 * - Produk: Magnum Pump XR Malaysia (Siri Pro Testosteron — Formula Peningkatan Prestasi Lelaki Kekuatan Maksimum — 30 Kapsul Hitam)
 * - Imej Pentas Studio: /assets/products/magnum-pump-xr-stage.webp (botol + 6 kapsul hitam berkilat)
 * - Pemilih Pakej 1/2/3 Botol (RM 159 / RM 318 / RM 477)
 * - Pemicu Laci Tempahan Ekspres 1-Klik (data-order-product="magnum-pump-xr")
 * ============================================================================
 */
function renderChapter1Hero() {
  return `
  <!-- ========================================================================
       BAB I (MS-114B): PENTAS SINEMATIK OBSIDIAN 100vw x 100vh MAGNUM PUMP XR MALAYSIA
       ======================================================================== -->
  <section
    id="pentas-utama-magnum-pump-xr"
    class="mp-ms-cinema-hero cinema-stage-100vh"
    aria-labelledby="mp-ms-hero-title"
    data-paradigm="A-100vw-100vh"
  >
    <div class="mp-ms-cinema-hero__ambient-crest" aria-hidden="true">MAGNUM XR</div>

    <!-- Bar Telemetri Atas & Laluan Breadcrumb -->
    <div class="mp-ms-cinema-hero__top-strip">
      <nav class="mp-ms-breadcrumb" aria-label="Laluan Navigasi Halaman">
        <a href="/ms/" class="mp-ms-breadcrumb__link">Utama Onyxman</a>
        <span class="mp-ms-breadcrumb__sep" aria-hidden="true">/</span>
        <a href="/ms/produk/" class="mp-ms-breadcrumb__link">4 Formulasi Utama</a>
        <span class="mp-ms-breadcrumb__sep" aria-hidden="true">/</span>
        <span class="mp-ms-breadcrumb__current" aria-current="page">Magnum Pump XR Malaysia (30 Kapsul Hitam × 600mg)</span>
      </nav>

      <div class="mp-ms-telemetry-codes" aria-label="Kod Pengesahan Inventori Rasmi">
        <span>SKU: <strong>ONYX-MP-30</strong></span>
        <span aria-hidden="true">·</span>
        <span>MPN: <strong>MPXR-30BLK-MY</strong></span>
        <span aria-hidden="true">·</span>
        <span>GTIN-13: <strong>9550000102042</strong></span>
        <span aria-hidden="true">·</span>
        <span>STATUS: <strong>STOK SEDIA DIHANTAR (KUALA LUMPUR)</strong></span>
      </div>
    </div>

    <!-- Pentas Utama Sinematik (Naratif Editorial + Monolit Botol & 6 Kapsul Hitam Berkilat) -->
    <div class="mp-ms-cinema-hero__stage">
      <!-- Lajur Kiri: Tipografi Editorial & Pita Pemilihan Pakej 1/2/3 Botol -->
      <div class="mp-ms-cinema-hero__narrative-col">
        <span class="editorial-kicker">
          FORMULASI IV · 30 KAPSUL HITAM × 600MG · SIRI PRO TESTOSTERON &amp; NITRIK OKSIDA
        </span>

        <h1 id="mp-ms-hero-title" class="editorial-headline-xl">
          Magnum Pump XR <span class="foil-champagne-text">Malaysia</span>
        </h1>

        <p class="mp-ms-subtitle-serif">
          Siri Pro Testosteron — Formula Peningkatan Prestasi Lelaki Kekuatan Maksimum — 30 Kapsul Hitam (18,000mg)
        </p>

        <p id="mp-ms-executive-summary" class="editorial-lead-paragraph">
          Menampilkan <strong>30 kapsul hitam berkilat eksklusif (600mg setiap kapsul = 18,000mg sebotol)</strong>, Magnum Pump XR Malaysia menggabungkan dwi-prekursor asid amino nitrik oksida Pelepasan Lanjutan (<strong>L-Arginine HCl 180mg</strong> + <strong>L-Citrulline Malate 140mg</strong>) bersama <strong>Tribulus Terrestris (110mg)</strong>, <strong>Tongkat Ali Malaysia 100:1 (90mg)</strong>, <strong>Kunyit Hitam / Halia Hitam Kaempferia Parviflora (65mg)</strong>, dan pemangkin serapan <strong>Bioperine Lada Hitam (15mg)</strong>.
        </p>

        <!-- Penjelasan Entiti Suplemen Pemakanan (Bukan Pam Mekanikal Industri) -->
        <div id="mp-ms-entity-disambiguation-banner" class="mp-ms-entity-banner" role="note" aria-label="Pengesahan Kategori Suplemen Pemakanan Kapsul Makan">
          <strong>PENGESAHAN ENTITI SUPLEMEN PEMAKANAN (DIETARY SUPPLEMENT):</strong> Magnum Pump XR oleh Onyxman Malaysia (SKU: <strong>ONYX-MP-30</strong>, MPN: <strong>MPXR-30BLK-MY</strong>) ialah <strong>100% suplemen kapsul makan asid amino &amp; botani (30 Kapsul Hitam)</strong> untuk sokongan aliran nitrik oksida serta stamina fizikal lelaki dewasa. Ia <strong>TIDAK berkaitan sama sekali</strong> dengan sebarang peralatan pam mekanikal, pam vakum luaran, atau pam industri minyak dan gas.
        </div>

        <!-- Pita Spesifikasi Fizikal & Jisim Kapsul Hitam -->
        <div class="mp-ms-spec-ribbon" role="region" aria-label="Spesifikasi Teknikal Botol Magnum Pump XR Malaysia">
          <div class="mp-ms-spec-ribbon__item">
            <span class="mp-ms-spec-ribbon__label">FORMAT KAPSUL IKONIK</span>
            <span class="mp-ms-spec-ribbon__val">30 Kapsul Hitam × 600mg</span>
          </div>
          <div class="mp-ms-spec-ribbon__item">
            <span class="mp-ms-spec-ribbon__label">JUMLAH JISIM AKTIF</span>
            <span class="mp-ms-spec-ribbon__val">18,000mg (18.0g)</span>
          </div>
          <div class="mp-ms-spec-ribbon__item">
            <span class="mp-ms-spec-ribbon__label">KITARAN &amp; NOTIS ISIAN SEMULA</span>
            <span class="mp-ms-spec-ribbon__val">Hari Ke-25 (Kitaran 30 Hari)</span>
          </div>
          <div class="mp-ms-spec-ribbon__item">
            <span class="mp-ms-spec-ribbon__label">HARGA RASMI SEBOTOL</span>
            <span class="mp-ms-spec-ribbon__val foil-champagne-text">RM 159.00 MYR</span>
          </div>
        </div>

        <!-- Pemilih Pakej 1 / 2 / 3 Botol (RM 159 / RM 318 / RM 477) -->
        <div
          class="mp-ms-tier-selector"
          role="radiogroup"
          aria-label="Pilih Pakej Rizab Botol Magnum Pump XR Malaysia"
          data-mp-tier-group
        >
          <!-- Pakej 1 Botol: RM 159 -->
          <button
            type="button"
            class="mp-ms-tier-row"
            role="radio"
            aria-checked="false"
            data-open-order-drawer="true"
            data-order-product="magnum-pump-xr"
            data-order-qty="1"
            data-mp-tier-btn="1"
          >
            <div class="mp-ms-tier-row__left">
              <span class="mp-ms-tier-row__kicker">
                PAKEJ I · BEKALAN 30 KAPSUL HITAM · KITARAN NITRIK OKSIDA 30 HARI
              </span>
              <span class="mp-ms-tier-row__title">
                1 Botol Magnum Pump XR — 30 Kapsul Hitam × 600mg (18,000mg)
              </span>
              <span class="mp-ms-tier-row__meta">
                Penghantaran Ekspres Rahsia Percuma Semenanjung Malaysia (RM 12 Sabah/Sarawak) · Peringatan Hari Ke-25
              </span>
            </div>
            <div class="mp-ms-tier-row__right">
              <span class="mp-ms-tier-row__price">RM 159</span>
              <span class="mp-ms-tier-row__unit">RM 159.00 / BOTOL</span>
            </div>
          </button>

          <!-- Pakej 2 Botol: RM 318 (Pilihan Utama Senaman & Malam) -->
          <button
            type="button"
            class="mp-ms-tier-row mp-ms-tier-row--active"
            role="radio"
            aria-checked="true"
            data-open-order-drawer="true"
            data-order-product="magnum-pump-xr"
            data-order-qty="2"
            data-mp-tier-btn="2"
          >
            <div class="mp-ms-tier-row__left">
              <span class="mp-ms-tier-row__kicker">
                PAKEJ II · PILIHAN UTAMA SENAMAN &amp; MALAM · PERCUMA POS SELURUH MALAYSIA
              </span>
              <span class="mp-ms-tier-row__title">
                2 Botol Magnum Pump XR — 60 Kapsul Hitam × 600mg (36,000mg)
              </span>
              <span class="mp-ms-tier-row__meta">
                Protokol Dwi-Aliran Vaskular &amp; Senaman 60 Hari · Percuma Pos Termasuk Sabah, Sarawak &amp; Labuan · Notis Hari Ke-50
              </span>
            </div>
            <div class="mp-ms-tier-row__right">
              <span class="mp-ms-tier-row__price">RM 318</span>
              <span class="mp-ms-tier-row__unit">RM 159.00 / BOTOL · PERCUMA POS</span>
            </div>
          </button>

          <!-- Pakej 3 Botol: RM 477 -->
          <button
            type="button"
            class="mp-ms-tier-row"
            role="radio"
            aria-checked="false"
            data-open-order-drawer="true"
            data-order-product="magnum-pump-xr"
            data-order-qty="3"
            data-mp-tier-btn="3"
          >
            <div class="mp-ms-tier-row__left">
              <span class="mp-ms-tier-row__kicker">
                PAKEJ III · PAKEJ PRO SERIES 90 HARI · KEUTAMAAN VIP &amp; PENGHANTAR PERSENDIRIAN
              </span>
              <span class="mp-ms-tier-row__title">
                3 Botol Magnum Pump XR — 90 Kapsul Hitam × 600mg (54,000mg)
              </span>
              <span class="mp-ms-tier-row__meta">
                Pakej Lengkap Kekuatan Maksimum 90 Hari · Pelepasan Keutamaan Lembah Klang · Khidmat Peringatan VIP Hari Ke-75
              </span>
            </div>
            <div class="mp-ms-tier-row__right">
              <span class="mp-ms-tier-row__price">RM 477</span>
              <span class="mp-ms-tier-row__unit">RM 159.00 / BOTOL · KEUTAMAAN VIP</span>
            </div>
          </button>
        </div>

        <!-- Gugusan Butang Tindakan Utama (Express Order Drawer & Semakan Monograf) -->
        <div class="mp-ms-hero-cta-cluster">
          <button
            type="button"
            id="mp-ms-primary-order-cta"
            class="cta-foil-primary"
            data-open-order-drawer="true"
            data-order-product="magnum-pump-xr"
            data-order-qty="2"
            aria-controls="onyxman-express-order-drawer"
          >
            <span>TEMPAH BUNGKUSAN RAHSIA · RM 159 / BOTOL</span>
            <span aria-hidden="true">→</span>
          </button>

          <a href="#analisis-6-ramuan-nitrik-oksida" class="cta-hairline-secondary">
            <span>ANALISIS 6 RAMUAN (600MG)</span>
            <span aria-hidden="true">↓</span>
          </a>

          <a href="/magnum-pump-xr-malaysia/" lang="en-MY" hreflang="en-MY" class="cta-hairline-secondary">
            <span>ENGLISH EDITION (EN-MY)</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <!-- Lajur Kanan: Pementasan Studio /assets/products/magnum-pump-xr-stage.webp (Botol + 6 Kapsul Hitam Berkilat) -->
      <div class="mp-ms-cinema-hero__visual-col">
        <figure class="mp-ms-bottle-monolith">
          <div class="mp-ms-bottle-monolith__halo" aria-hidden="true"></div>
          <picture>
            <source srcset="/assets/products/magnum-pump-xr-stage.webp" type="image/webp" />
            <img
              src="/assets/products/magnum-pump-xr-stage.png"
              alt="Botol Rasmi Magnum Pump XR Malaysia Bersama 6 Kapsul Hitam Berkilat — Siri Pro Testosteron Formula Peningkatan Prestasi Lelaki Kekuatan Maksimum 30 Kapsul Hitam (RM 159 Onyxman Malaysia)"
              width="900"
              height="1125"
              fetchpriority="high"
              decoding="async"
              class="mp-ms-bottle-monolith__img cinema-stage-100vh__bottle-render"
              data-parallax-bottle
            />
          </picture>
          <figcaption class="mp-ms-bottle-monolith__caption-ledger">
            <span>BOTOL OBSIDIAN-MERAH SIRI PRO + 6 KAPSUL HITAM BERKILAT</span>
            <span>30 KAPSUL HITAM × 600MG · GTIN: 9550000102042</span>
          </figcaption>
        </figure>
      </div>
    </div>

    <!-- Jalur Jaminan Penghantaran Rahsia Kotak Kosong & Penyelesaian Malaysia -->
    <div class="mp-ms-discreet-pledge-strip" role="region" aria-label="Jaminan Privasi & Penghantaran Malaysia">
      <div class="mp-ms-discreet-pledge-col">
        <span class="mp-ms-discreet-pledge-col__kicker">01 · JAMINAN KOTAK KOSONG 100% RAHSIA</span>
        <p class="mp-ms-discreet-pledge-col__text">
          Dibungkus dalam pek keselamatan legap tanpa sebarang logo. Slip kurier hanya memaparkan <strong>"OM Fulfilment Logistics"</strong> — sifar perkataan Magnum Pump XR atau kapsul lelaki.
        </p>
      </div>

      <div class="mp-ms-discreet-pledge-col">
        <span class="mp-ms-discreet-pledge-col__kicker">02 · PENGHANTAR PERSENDIRIAN LEMBAH KLANG 3–5 JAM</span>
        <p class="mp-ms-discreet-pledge-col__text">
          Serahan hari sama di Kuala Lumpur, Selangor, Putrajaya &amp; Cyberjaya (pesanan sebelum 4:00 petang). Kurier ekspres 1–2 hari bekerja ke seluruh Semenanjung Malaysia.
        </p>
      </div>

      <div class="mp-ms-discreet-pledge-col">
        <span class="mp-ms-discreet-pledge-col__kicker">03 · FPX, DUITNOW QR &amp; BAYAR WAKTU TERIMA (COD)</span>
        <p class="mp-ms-discreet-pledge-col__text">
          Selesaikan tempahan melalui Maybank2u, CIMB Clicks, DuitNow QR Segera, atau pilih <strong>COD (Bayar Waktu Terima)</strong> terus kepada kurier semasa bungkusan tiba.
        </p>
      </div>

      <div class="mp-ms-discreet-pledge-col">
        <span class="mp-ms-discreet-pledge-col__kicker">04 · MEJA OPERASI &amp; WHATSAPP PRIVASI</span>
        <p class="mp-ms-discreet-pledge-col__text">
          Disokong terus oleh meja pelepasan rasmi kami di <a href="mailto:sales@onyxman.my">sales@onyxman.my</a>, <a href="mailto:info@onyxman.my">info@onyxman.my</a> &amp; <a href="mailto:waleedshoaibofficial@gmail.com">waleedshoaibofficial@gmail.com</a>.
        </p>
      </div>
    </div>
  </section>
  `;
}

/**
 * ============================================================================
 * BAB 2: PARADIGM D PINNED 50vw / 50vw ANALISIS 6 RAMUAN NITRIK OKSIDA & BOTANI
 * (180mg + 140mg + 110mg + 90mg + 65mg + 15mg = 600mg setiap kapsul hitam = 18,000mg sebotol)
 * + TEKNOLOGI KAPSUL HITAM PELINDUNG UV
 * + PENJELASAN ENTITI SUPLEMEN PEMAKANAN (BUKAN PAM MEKANIKAL INDUSTRI)
 * ============================================================================
 */
function renderChapter2BotanicalAndBlackCapsule() {
  return `
  <!-- ========================================================================
       BAB II ( BAHAGIAN A): PARADIGM D 50vw / 50vw ANALISIS 6 RAMUAN NITRIK OKSIDA & BOTANI (600MG)
       ======================================================================== -->
  <section
    id="analisis-6-ramuan-nitrik-oksida"
    class="mp-ms-split-monograph split-stage-5050"
    aria-labelledby="mp-ms-botanical-heading"
    data-split-stage
    data-paradigm="D-50vw-50vw"
  >
    <!-- Panel Kiri Sticky 50vw: Visual Potret Studio & Pecahan Jisim 600mg Setiap Kapsul Hitam -->
    <div class="mp-ms-split-monograph__left-sticky split-stage-5050__visual-pane">
      <div class="split-stage-5050__index-watermark" data-split-watermark aria-hidden="true">01</div>

      <div style="position: relative; z-index: 2;">
        <span class="editorial-kicker">PARADIGMA D · SENI BINA BIO-VASKULAR 600MG</span>
        <h2 style="font-family: var(--font-display); font-size: clamp(1.85rem, 2.8vw, 2.85rem); color: var(--text-silk-ivory); margin-top: 0.45rem;">
          Matriks 6 Ramuan Aktif <span class="foil-champagne-text">600mg Setiap Kapsul Hitam</span>
        </h2>
      </div>

      <figure class="split-stage-5050__visual-figure" style="margin: 0.85rem auto;">
        <picture>
          <source srcset="/assets/products/magnum-pump-xr-portrait.webp" type="image/webp" />
          <img
            src="/assets/products/magnum-pump-xr-portrait.png"
            alt="Monograf Fitokimia & Asid Amino Magnum Pump XR Malaysia — 30 Kapsul Hitam x 600mg (L-Arginine HCl 180mg, L-Citrulline Malate 140mg, Tribulus Terrestris 110mg, Tongkat Ali 90mg, Kunyit Hitam 65mg, Bioperine 15mg)"
            width="760"
            height="950"
            loading="lazy"
            decoding="async"
            class="split-stage-5050__visual-img"
            data-split-visual-img
          />
        </picture>
      </figure>

      <!-- Lejar Pecahan Ketepatan Miligram (Jumlah = 600mg / Kapsul Hitam = 18,000mg / Botol) -->
      <div class="mp-ms-dosage-proportion-bar" aria-label="Pecahan Miligram Setiap Kapsul Hitam 600mg Magnum Pump XR">
        <div class="mp-ms-dosage-proportion-row">
          <span>01 · L-Arginine HCl Pelepasan Lanjutan (99.5% Tulen)</span>
          <strong>180 mg (30.0%)</strong>
        </div>
        <div class="mp-ms-dosage-proportion-row">
          <span>02 · L-Citrulline Malate (Nisbah Bio-Aktif 2:1)</span>
          <strong>140 mg (23.3%)</strong>
        </div>
        <div class="mp-ms-dosage-proportion-row">
          <span>03 · Tribulus Terrestris Piawai (45% Saponin Steroid)</span>
          <strong>110 mg (18.3%)</strong>
        </div>
        <div class="mp-ms-dosage-proportion-row">
          <span>04 · Tongkat Ali Malaysia 100:1 (2.2% Eurycomanone)</span>
          <strong>90 mg (15.0%)</strong>
        </div>
        <div class="mp-ms-dosage-proportion-row">
          <span>05 · Kunyit Hitam / Halia Hitam (5% Polimetoksiflavon)</span>
          <strong>65 mg (10.8%)</strong>
        </div>
        <div class="mp-ms-dosage-proportion-row">
          <span>06 · Bioperine Lada Hitam Piawai (95% Piperine)</span>
          <strong>15 mg (2.5%)</strong>
        </div>
        <div class="mp-ms-dosage-proportion-row" style="border-bottom: none; padding-top: 0.45rem;">
          <span style="color: var(--gold-champagne); letter-spacing: 0.14em; text-transform: uppercase;">
            JUMLAH SETIAP KAPSUL HITAM (× 30 KAPSUL = 18,000MG)
          </span>
          <strong style="font-size: 1.28rem;">600 mg (100%)</strong>
        </div>
      </div>
    </div>

    <!-- Panel Kanan Tatalan 50vw: Monograf Saintifik 6 Ramuan Nitrik Oksida & Botani -->
    <div class="mp-ms-split-monograph__right-scroll split-stage-5050__narrative-pane">
      <div>
        <span class="editorial-kicker">BAB II · MONOGRAF MAKMAL NITRIK OKSIDA &amp; BOTANI (MS-114B)</span>
        <h2 id="mp-ms-botanical-heading" class="editorial-headline-lg" style="margin-top: 0.65rem;">
          Analisis Saintifik 6 Ramuan Nitrik Oksida &amp; Botani di Dalam Setiap Kapsul Hitam 600mg
        </h2>
        <p class="editorial-lead-paragraph" style="margin-top: 1rem;">
          Magnum Pump XR Malaysia merupakan satu-satunya formulasi di dalam bilik kebal Onyxman yang dibina dengan ketumpatan <strong>600mg setiap kapsul hitam</strong>—menghasilkan jumlah keseluruhan <strong>18,000mg (18.0 gram)</strong> sebotol. Daripada jumlah tersebut, <strong>320mg (53.3%)</strong> dikhaskan untuk matriks dwi-asid amino prekursor nitrik oksida (<em>L-Arginine HCl</em> + <em>L-Citrulline Malate</em>), manakala <strong>280mg (46.7%)</strong> lagi terdiri daripada ekstrak fitokimia Siri Pro Testosteron (<em>Tribulus Terrestris</em>, <em>Tongkat Ali Malaysia</em>, <em>Kunyit Hitam Kaempferia Parviflora</em>) yang dipercepatkan oleh pemangkin penyerapan <em>Bioperine</em>.
        </p>
      </div>

      <!-- RAMUAN 01: L-ARGININE HCL (180MG) -->
      <article
        id="ramuan-01-l-arginine-hcl"
        class="mp-ms-botanical-entry architectural-ledger__row"
        data-botanical-step="01"
        data-step-index="01"
        data-step-image="/assets/products/magnum-pump-xr-portrait.webp"
      >
        <div class="mp-ms-botanical-entry__header">
          <span class="mp-ms-botanical-entry__code">MP-ACT-01 · PEMACU UTAMA NITRIK OKSIDA FASA PANTAS (30.0% JISIM KAPSUL)</span>
          <span class="mp-ms-botanical-entry__mg">180 mg / Kapsul Hitam</span>
        </div>
        <h3 class="mp-ms-botanical-entry__title">
          Asid Amino L-Arginine Hydrochloride (Granulasi Pelepasan Lanjutan)
        </h3>
        <p class="mp-ms-botanical-entry__latin">
          L-Arginine Hydrochloride — Dipiawaikan kepada 99.5% Ketulenan Gred Farmaseutikal
        </p>
        <div class="mp-ms-botanical-entry__telemetry">
          <span>
            <strong>LALUAN ENZIMATIK</strong>
            Substrat Langsung Endothelial Nitric Oxide Synthase (eNOS)
          </span>
          <span>
            <strong>TETINGKAP TINDAK BALAS AWAL</strong>
            30 hingga 45 Minit Selepas Pengambilan Bersama 300ml Air
          </span>
          <span>
            <strong>JISIM SEBOTOL (30 KAPSUL HITAM)</strong>
            5,400 mg (5.4g) L-Arginine HCl Tulen
          </span>
        </div>
        <p class="mp-ms-botanical-entry__copy">
          Pada dos tertinggi <strong>180mg setiap kapsul hitam</strong> (5,400mg sebotol), <strong>L-Arginine Hydrochloride</strong> bertindak sebagai penderma nitrogen utama bagi enzim <em>endothelial nitric oxide synthase (eNOS)</em> di dinding saluran darah. Apabila L-Arginine dioksidakan oleh enzim eNOS, ia menghasilkan molekul gas <strong>Nitrik Oksida (NO)</strong> yang memberi isyarat kepada otot licin vaskular untuk mengendur (vasodilatasi).
        </p>
        <p class="mp-ms-botanical-entry__copy">
          Pengembangan lumen vaskular ini meningkatkan kadar aliran darah beroksigen, glukosa, dan nutrien ke dalam tisu otot rangka semasa latihan bebanan di gimnasium, serta menyokong tindak balas aliran darah periferi yang mantap untuk kesediaan fizikal waktu malam. Bentuk garam hidroklorida (HCl) gred farmaseutikal 99.5% memastikan keterlarutan pantas di dalam perut tanpa ketidakselesaan gastrik.
        </p>
      </article>

      <!-- RAMUAN 02: L-CITRULLINE MALATE (140MG) -->
      <article
        id="ramuan-02-l-citrulline-malate"
        class="mp-ms-botanical-entry architectural-ledger__row"
        data-botanical-step="02"
        data-step-index="02"
        data-step-image="/assets/products/magnum-pump-xr-stage.webp"
      >
        <div class="mp-ms-botanical-entry__header">
          <span class="mp-ms-botanical-entry__code">MP-ACT-02 · ENJIN PELEPASAN LANJUTAN 'XR' 4–6 JAM (23.3% JISIM KAPSUL)</span>
          <span class="mp-ms-botanical-entry__mg">140 mg / Kapsul Hitam</span>
        </div>
        <h3 class="mp-ms-botanical-entry__title">
          Asid Amino L-Citrulline Malate (Kompleks Nisbah Bio-Aktif 2:1)
        </h3>
        <p class="mp-ms-botanical-entry__latin">
          L-Citrulline DL-Malate (Nisbah Stoikiometri 2:1 L-Citrulline kepada DL-Malate)
        </p>
        <div class="mp-ms-botanical-entry__telemetry">
          <span>
            <strong>MEKANISME FARMAKOKINETIK</strong>
            Melepasi Enzim Arginase Hati untuk Kitar Semula L-Arginine Plasma
          </span>
          <span>
            <strong>TEMPOH PELEPASAN LANJUTAN (XR)</strong>
            Mengekalkan Paras Nitrik Oksida Selama 4 hingga 6 Jam
          </span>
          <span>
            <strong>JISIM SEBOTOL (30 KAPSUL HITAM)</strong>
            4,200 mg (4.2g) L-Citrulline Malate 2:1
          </span>
        </div>
        <p class="mp-ms-botanical-entry__copy">
          Rahsia sebenar di sebalik gelaran <strong>"XR" (Extended-Release)</strong> pada Magnum Pump XR terletak pada gabungan <strong>140mg L-Citrulline Malate (nisbah 2:1)</strong> bersama 180mg L-Arginine HCl. Dalam fisiologi manusia, pengambilan L-Arginine sahaja akan mengalami kemerosotan selepas 90 minit akibat pemecahan oleh enzim <em>arginase</em> di dalam hati. Sebaliknya, L-Citrulline melepasi metabolisme lintas pertama hati tanpa dipecahkan, kemudian dibawa ke buah pinggang untuk ditukar secara berperingkat menjadi L-Arginine baharu di dalam plasma darah selama <strong>4 hingga 6 jam berturut-turut</strong>.
        </p>
        <p class="mp-ms-botanical-entry__copy">
          Tambahan komponen <strong>DL-Malate</strong> pula bertindak sebagai perantara langsung dalam Kitaran Krebs (kitaran asid sitrik mitokondria) untuk mempercepatkan penjanaan semula molekul tenaga ATP dan membantu menyingkirkan pengumpulan ammonia serta asid laktik selepas senaman berat.
        </p>
      </article>

      <!-- RAMUAN 03: TRIBULUS TERRESTRIS (110MG) -->
      <article
        id="ramuan-03-tribulus-terrestris"
        class="mp-ms-botanical-entry architectural-ledger__row"
        data-botanical-step="03"
        data-step-index="03"
        data-step-image="/assets/products/magnum-pump-xr-cutout.webp"
      >
        <div class="mp-ms-botanical-entry__header">
          <span class="mp-ms-botanical-entry__code">MP-ACT-03 · SAPONIN STEROID SIRI PRO TESTOSTERON (18.3% JISIM KAPSUL)</span>
          <span class="mp-ms-botanical-entry__mg">110 mg / Kapsul Hitam</span>
        </div>
        <h3 class="mp-ms-botanical-entry__title">
          Ekstrak Buah Tribulus Terrestris Piawai (Siri Pro Kekuatan Maksimum)
        </h3>
        <p class="mp-ms-botanical-entry__latin">
          Tribulus terrestris L. — Dipiawaikan kepada ≥ 45% Saponin Steroid Furostanol (Protodioscin)
        </p>
        <div class="mp-ms-botanical-entry__telemetry">
          <span>
            <strong>SEBATIAN FITOKIMIA UTAMA</strong>
            45% Saponin Steroid (49.5mg Saponin Aktif / Kapsul Hitam)
          </span>
          <span>
            <strong>FUNGSI SINERGI</strong>
            Daya Tahan Atletik, Kekuatan Otot &amp; Vitaliti Lelaki Dewasa
          </span>
          <span>
            <strong>JISIM SEBOTOL (30 KAPSUL HITAM)</strong>
            3,300 mg (3.3g) Ekstrak Tribulus Piawai
          </span>
        </div>
        <p class="mp-ms-botanical-entry__copy">
          Selaras dengan lencana rasmi <strong>"Testosterone Pro Series — Maximum Strength"</strong> pada botol Magnum Pump XR, setiap kapsul hitam membekalkan <strong>110mg ekstrak buah Tribulus Terrestris</strong> yang dipiawaikan kepada 45% saponin steroid (kaya dengan <em>protodioscin</em>). Saponin furostanol ini menyokong daya tahan fizikal atletik, ketumpatan nada otot semasa latihan rintangan, dan keyakinan vitaliti lelaki dewasa.
        </p>
        <p class="mp-ms-botanical-entry__copy">
          Menariknya, kajian biokimia menunjukkan bahawa <em>protodioscin</em> di dalam Tribulus Terrestris turut menyokong aktiviti reseptor androgenik dan meningkatkan kecekapan enzim nitrik oksida sintase di tisu periferi—menjadikannya pasangan ideal kepada L-Arginine dan L-Citrulline.
        </p>
      </article>

      <!-- RAMUAN 04: TONGKAT ALI MALAYSIA 100:1 (90MG) -->
      <article
        id="ramuan-04-tongkat-ali-malaysia"
        class="mp-ms-botanical-entry architectural-ledger__row"
        data-botanical-step="04"
        data-step-index="04"
        data-step-image="/assets/products/magnum-pump-xr-portrait.webp"
      >
        <div class="mp-ms-botanical-entry__header">
          <span class="mp-ms-botanical-entry__code">MP-ACT-04 · TERAS ADAPTOGENIK TENAGA DALAMAN (15.0% JISIM KAPSUL)</span>
          <span class="mp-ms-botanical-entry__mg">90 mg / Kapsul Hitam</span>
        </div>
        <h3 class="mp-ms-botanical-entry__title">
          Ekstrak Akar Tongkat Ali Malaysia 100:1 (Fraksi Bio-Aktif Eurycomanone)
        </h3>
        <p class="mp-ms-botanical-entry__latin">
          Eurycoma longifolia Jack — Ekstrak Akar Piawai 100:1 (≥ 2.2% Fraksi Bio-Aktif Eurycomanone)
        </p>
        <div class="mp-ms-botanical-entry__telemetry">
          <span>
            <strong>ASAL BOTANI</strong>
            Akar Matang Hutan Hujan Tropika Semenanjung Malaysia
          </span>
          <span>
            <strong>PENANDA PIAWAIAN</strong>
            2.2% Eurycomanone, Eurycomanol &amp; Glikosaponin
          </span>
          <span>
            <strong>JISIM SEBOTOL (30 KAPSUL HITAM)</strong>
            2,700 mg (2.7g) Ekstrak Tongkat Ali 100:1
          </span>
        </div>
        <p class="mp-ms-botanical-entry__copy">
          Bagi memastikan aliran vaskular nitrik oksida disokong oleh asas tenaga dalaman yang kukuh, Magnum Pump XR menyertakan <strong>90mg Ekstrak Akar Tongkat Ali Malaysia (nisbah kepekatan 100:1)</strong> yang dipiawaikan kepada 2.2% <em>eurycomanone</em>. Dalam kehidupan seharian lelaki dewasa yang sibuk di Malaysia, latihan fizikal yang intensif atau kerja lebih masa boleh meningkatkan paras kortisol dan menurunkan nisbah kecergasan semula jadi.
        </p>
        <p class="mp-ms-botanical-entry__copy">
          Pengambilan 90mg Tongkat Ali 100:1 setiap hari sepanjang kitaran 30 kapsul hitam membantu mengimbangi tindak balas tekanan kortisol, mempercepatkan pemulihan otot selepas bersenam, dan mengekalkan dorongan tenaga malam yang stabil.
        </p>
      </article>

      <!-- RAMUAN 05: KUNYIT HITAM / HALIA HITAM KAEMPFERIA PARVIFLORA (65MG) -->
      <article
        id="ramuan-05-kunyit-hitam"
        class="mp-ms-botanical-entry architectural-ledger__row"
        data-botanical-step="05"
        data-step-index="05"
        data-step-image="/assets/products/magnum-pump-xr-stage.webp"
      >
        <div class="mp-ms-botanical-entry__header">
          <span class="mp-ms-botanical-entry__code">MP-ACT-05 · FITOKIMIA VASKULAR PERIFERI &amp; AMPK (10.8% JISIM KAPSUL)</span>
          <span class="mp-ms-botanical-entry__mg">65 mg / Kapsul Hitam</span>
        </div>
        <h3 class="mp-ms-botanical-entry__title">
          Ekstrak Rizom Kunyit Hitam / Halia Hitam (Thai Black Ginger Piawai)
        </h3>
        <p class="mp-ms-botanical-entry__latin">
          Kaempferia parviflora Wall. ex Baker — Dipiawaikan kepada ≥ 5% Polimetoksiflavon (PMFs)
        </p>
        <div class="mp-ms-botanical-entry__telemetry">
          <span>
            <strong>SEBATIAN AKTIF</strong>
            5% Polimetoksiflavon (5,7-Dimethoxyflavone)
          </span>
          <span>
            <strong>PERANAN VASKULAR &amp; OTOT</strong>
            Tindak Balas Vaskular Periferi, Kekuatan Genggaman &amp; Stamina Selular
          </span>
          <span>
            <strong>JISIM SEBOTOL (30 KAPSUL HITAM)</strong>
            1,950 mg (1.95g) Ekstrak Kunyit Hitam Piawai
          </span>
        </div>
        <p class="mp-ms-botanical-entry__copy">
          Komponen eksklusif yang membezakan Magnum Pump XR daripada ketiga-tiga formulasi Onyxman yang lain ialah kehadiran <strong>65mg Ekstrak Rizom Kunyit Hitam / Halia Hitam (<em>Kaempferia parviflora</em>)</strong> yang dipiawaikan kepada <strong>5% Polimetoksiflavon (PMFs)</strong>. Di rantau Asia Tenggara, rizom berwarna ungu-kehitaman ini terkenal dalam kalangan atlet tempur dan pengamal kecergasan kerana keupayaannya mengaktifkan enzim <em>AMP-activated protein kinase (AMPK)</em> di dalam sel otot.
        </p>
        <p class="mp-ms-botanical-entry__copy">
          Lebih penting lagi, polimetoksiflavon di dalam <em>Kaempferia parviflora</em> bertindak secara sinergi bersama L-Arginine dan L-Citrulline untuk merangsang pengeluaran nitrik oksida endotelium serta memperlahankan penguraian cGMP di tisu vaskular periferi—menyokong kekuatan genggaman fizikal, ketahanan kardio, dan tindak balas aliran darah yang responsif.
        </p>
      </article>

      <!-- RAMUAN 06: BIOPERINE LADA HITAM PIAWAI (15MG) -->
      <article
        id="ramuan-06-bioperine-lada-hitam"
        class="mp-ms-botanical-entry architectural-ledger__row"
        data-botanical-step="06"
        data-step-index="06"
        data-step-image="/assets/products/magnum-pump-xr-cutout.webp"
      >
        <div class="mp-ms-botanical-entry__header">
          <span class="mp-ms-botanical-entry__code">MP-ACT-06 · PEMANGKIN BIO-PENYERAPAN USUS +30% (2.5% JISIM KAPSUL)</span>
          <span class="mp-ms-botanical-entry__mg">15 mg / Kapsul Hitam</span>
        </div>
        <h3 class="mp-ms-botanical-entry__title">
          Ekstrak Buah Lada Hitam Piawai (Pemangkin Penyerapan Bioperine)
        </h3>
        <p class="mp-ms-botanical-entry__latin">
          Piper nigrum L. — Dipiawaikan kepada ≥ 95% Alkaloid Piperine Tulen
        </p>
        <div class="mp-ms-botanical-entry__telemetry">
          <span>
            <strong>MEKANISME BIO-ENHANCER</strong>
            Termogenesis Epitelium Usus &amp; Perencatan Glukuronidasi Hati
          </span>
          <span>
            <strong>LONJAKAN BIO-KETERSEDIAAN</strong>
            Meningkatkan Serapan Asid Amino &amp; Fitokimia Sehingga 30%
          </span>
          <span>
            <strong>JISIM SEBOTOL (30 KAPSUL HITAM)</strong>
            450 mg Ekstrak Bioperine (95% Piperine)
          </span>
        </div>
        <p class="mp-ms-botanical-entry__copy">
          Formulasi berkepekatan tinggi sekalipun tidak akan mencapai potensi penuh sekiranya sebahagian besar asid amino dan flavonoid gagal merentasi dinding usus. Oleh itu, setiap kapsul hitam Magnum Pump XR dilengkapi dengan <strong>15mg Ekstrak Lada Hitam Piawai (Bioperine, 95% piperine)</strong>.
        </p>
        <p class="mp-ms-botanical-entry__copy">
          Alkaloid piperine merangsang termogenesis mikro pada vili epitelium usus kecil dan memperlahankan proses glukuronidasi pramatang di dalam hati, sekali gus meningkatkan kadar penyerapan dan bio-ketersediaan L-Arginine HCl, L-Citrulline Malate, saponin Tribulus, eurycomanone Tongkat Ali, serta polimetoksiflavon Kunyit Hitam sehingga <strong>30% lebih tinggi</strong>.
        </p>
      </article>
    </div>
  </section>

  <!-- ========================================================================
       BAB II (BAHAGIAN B): TEKNOLOGI KAPSUL HITAM PELINDUNG UV & PENJELASAN ENTITI SUPLEMEN
       ======================================================================== -->
  <section
    id="teknologi-kapsul-hitam-dan-penjelasan-entiti"
    class="mp-ms-blackcap-section"
    aria-labelledby="mp-ms-blackcap-heading"
  >
    <div class="mp-ms-section-inner">
      <div class="mp-ms-section-header">
        <div class="mp-ms-section-header__left">
          <span class="editorial-kicker">KEJURUTERAAN FARMASEUTIKAL · 30 KAPSUL HITAM PELINDUNG UV &amp; DISAMBIGUASI ENTITI</span>
          <h2 id="mp-ms-blackcap-heading" class="editorial-headline-lg">
            Teknologi Kapsul Hitam Pelindung UV &amp; <span class="foil-champagne-text">Pengesahan Entiti Suplemen Pemakanan</span>
          </h2>
          <p class="editorial-lead-paragraph">
            Mengapakah Magnum Pump XR menggunakan sarung kapsul berwarna hitam pekat berkilat, dan mengapakah kami menyatakan secara jelas perbezaan entiti produk ini daripada peralatan mekanikal industri? Semak 4 asas kejuruteraan dan pengelasan rasmi di bawah:
          </p>
        </div>

        <div>
          <button
            type="button"
            class="cta-foil-primary"
            data-open-order-drawer="true"
            data-order-product="magnum-pump-xr"
            data-order-qty="2"
          >
            <span>TEMPAH 60 KAPSUL HITAM (2 BOTOL · RM 318)</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div class="architectural-ledger" role="list" aria-label="Spesifikasi Teknologi Kapsul Hitam & Penjelasan Entiti">
        <div class="architectural-ledger__row" role="listitem">
          <span class="architectural-ledger__index">TEKNOLOGI 01</span>
          <h3 class="architectural-ledger__title">
            Perisai Fotokimia Sinaran UV untuk Polimetoksiflavon Kunyit Hitam &amp; Kuasinoid
          </h3>
          <p class="architectural-ledger__detail">
            Sebatian polimetoksiflavon (PMF) di dalam <em>Kaempferia parviflora</em> (Kunyit Hitam 65mg) dan eurycomanone di dalam <em>Eurycoma longifolia</em> (Tongkat Ali 90mg) sangat sensitif terhadap pengoksidaan foto apabila terdedah kepada cahaya lampu atau sinaran matahari tropika. Sarung kapsul hitam legap Magnum Pump XR bertindak sebagai perisai optik 360 darjah yang mengekalkan keaktifan biologi setiap miligram ekstrak sehingga saat kapsul ditelan.
          </p>
          <span class="architectural-ledger__metric">PERISAI OPTIK UV</span>
        </div>

        <div class="architectural-ledger__row" role="listitem">
          <span class="architectural-ledger__index">TEKNOLOGI 02</span>
          <h3 class="architectural-ledger__title">
            Perlindungan Kelembapan Tropika bagi Asid Amino Higroskopik (L-Citrulline &amp; L-Arginine)
          </h3>
          <p class="architectural-ledger__detail">
            Asid amino tulen seperti <strong>L-Citrulline Malate (140mg)</strong> dan <strong>L-Arginine HCl (180mg)</strong> bersifat higroskopik (mudah menyerap wap air dari udara lembap Malaysia yang puratanya melebihi 80% kelembapan relatif). Dinding kapsul hitam berketumpatan tinggi bersama botol HDPE hitam-merah kedap induksi memastikan serbuk granulasi XR di dalamnya kekal kering, bebas gumpalan, dan larut serta-merta apabila bertemu air di dalam perut.
          </p>
          <span class="architectural-ledger__metric">GRANULASI KERING XR</span>
        </div>

        <div class="architectural-ledger__row" role="listitem">
          <span class="architectural-ledger__index">ENTITI POSITIF</span>
          <h3 class="architectural-ledger__title">
            Pengelasan Positif Rasmi: Suplemen Pemakanan Kapsul Makan (DietarySupplement)
          </h3>
          <p class="architectural-ledger__detail">
            Di bawah piawaian Schema.org (<code>@type: ["Product", "DietarySupplement"]</code>) dan Google Merchant Center Malaysia, <strong>Magnum Pump XR oleh Onyxman Malaysia (https://www.onyxmen.my)</strong> dikelaskan secara eksklusif di bawah kategori <em>Health &amp; Beauty &gt; Health Care &gt; Fitness &amp; Nutrition &gt; Vitamins &amp; Supplements</em>. Ia mengandungi <strong>30 Kapsul Hitam makan (600mg setiap kapsul)</strong> dengan kod pendaftaran inventori <strong>SKU: ONYX-MP-30</strong>, <strong>MPN: MPXR-30BLK-MY</strong>, dan <strong>GTIN-13: 9550000102042</strong>.
          </p>
          <span class="architectural-ledger__metric">SKU: ONYX-MP-30</span>
        </div>

        <div class="architectural-ledger__row" role="listitem">
          <span class="architectural-ledger__index">DISAMBIGUASI</span>
          <h3 class="architectural-ledger__title">
            Penjelasan Negatif Tegas: BUKAN Pam Mekanikal, Hidraulik, Vakum atau Peralatan Industri
          </h3>
          <p class="architectural-ledger__detail">
            Untuk ketepatan maklumat pengguna dan enjin carian: Magnum Pump XR di Onyxman.my <strong>TIDAK berkaitan sama sekali</strong> dengan sebarang peralatan mekanikal, pam air, pam hidraulik, pam lumpur/sluri lombong dan telaga minyak (seperti jentera <em>oilfield frac pump / mud pump</em> industri berat), mahupun sebarang alat pam vakum luaran. Istilah <strong>"Pump"</strong> pada produk ini merujuk sepenuhnya kepada kesan fisiologi pengaliran darah dan nitrik oksida otot (<em>vascular nitric oxide pump</em>) hasil pengambilan kapsul asid amino.
          </p>
          <span class="architectural-ledger__metric">100% KAPSUL NUTRISI</span>
        </div>
      </div>
    </div>
  </section>
  `;
}

/**
 * ============================================================================
 * BAB 3: KRONOLOGI 30 HARI & PERINGATAN ISIAN SEMULA HARI KE-25
 * + JADUAL PERBANDINGAN 4 FORMULA ONYXMAN MALAYSIA
 * + PENGHANTARAN RAHSIA 16 NEGERI MALAYSIA
 * + 6 SENARAI SEMAK KETULENAN BOTOL MAGNUM PUMP XR
 * + 10 SOALAN LAZIM (FAQ) BAHASA MALAYSIA
 * ============================================================================
 */
function renderChapter3CycleComparisonShippingFaq() {
  const faqHtml = MAGNUM_PUMP_XR_MS_FAQS.map((item, idx) => {
    const isOpenAttr = idx === 0 ? ' open' : '';
    return `
        <details id="${item.id}" class="mp-ms-faq-item"${isOpenAttr}>
          <summary class="mp-ms-faq-summary">
            <div class="mp-ms-faq-summary__left">
              <span class="mp-ms-faq-summary__code">${item.code} · ${item.category}</span>
              <h3 class="mp-ms-faq-summary__question">${item.questionMs}</h3>
            </div>
            <span class="mp-ms-faq-summary__icon" aria-hidden="true">+</span>
          </summary>
          <div class="mp-ms-faq-body">
            <p>${item.answerMs}</p>
            <div class="mp-ms-faq-clinical-note">
              <strong>NOTA APOTEKARI ONYXMAN:</strong> ${item.clinicalNoteMs}
            </div>
          </div>
        </details>`;
  }).join('\n');

  return `
  <!-- ========================================================================
       BAB III (BAHAGIAN A): KRONOLOGI 30 HARI & PERINGATAN ISIAN SEMULA HARI KE-25
       ======================================================================== -->
  <section
    id="kronologi-30-hari-dan-peringatan-hari-ke-25"
    class="mp-ms-cycle-section"
    aria-labelledby="mp-ms-cycle-heading"
  >
    <div class="mp-ms-cycle-container">
      <div class="mp-ms-section-header">
        <div class="mp-ms-section-header__left">
          <span class="editorial-kicker">BAB III · KRONOBIOLOGI KITARAN NITRIK OKSIDA 30 HARI (MS-114B)</span>
          <h2 id="mp-ms-cycle-heading" class="editorial-headline-lg">
            Kronologi 30 Hari &amp; Protokol Peringatan Isian Semula <span class="foil-champagne-text">Hari Ke-25</span>
          </h2>
          <p class="editorial-lead-paragraph">
            Setiap botol Magnum Pump XR Malaysia membekalkan tepat <strong>30 kapsul hitam × 600mg (18,000mg)</strong> untuk melengkapkan <strong>Kitaran Nitrik Oksida 30 Hari</strong> penuh pada kadar pengambilan 1 kapsul hitam sehari. Bagi memastikan kesinambungan bekalan asid amino vaskular dan herba adaptogenik anda tidak terputus, sistem peringatan pintar Onyxman Malaysia diaktifkan secara automatik pada <strong>Hari Ke-25</strong>—ketika anda masih mempunyai baki <strong>5 kapsul hitam</strong> di dalam botol.
          </p>
        </div>

        <div>
          <button
            type="button"
            class="cta-foil-primary"
            data-open-order-drawer="true"
            data-order-product="magnum-pump-xr"
            data-order-qty="2"
          >
            <span>MULAKAN PROTOKOL 60 HARI (2 BOTOL · RM 318)</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <!-- Perbandingan Dwi-Mod Pengambilan (Protokol A vs Protokol B) -->
      <div class="architectural-ledger" role="region" aria-label="Dua Mod Pengambilan Rasmi Magnum Pump XR Malaysia">
        <div class="architectural-ledger__row" style="padding: 2rem 0;">
          <span class="architectural-ledger__index">PROTOKOL A</span>
          <h3 class="architectural-ledger__title">
            Protokol A: 30–45 Minit Sebelum Senaman Bebanan atau Aktiviti Malam
          </h3>
          <p class="architectural-ledger__detail">
            Ambil <strong>1 kapsul hitam (600mg)</strong> bersama <strong>300ml air kosong sejuk atau suhu bilik</strong> tepat 30 hingga 45 minit sebelum memulakan latihan bebanan di gimnasium atau sebelum aktiviti fizikal waktu malam. Pemangkin <em>Bioperine (15mg)</em> mempercepatkan penyerapan <em>L-Arginine HCl (180mg)</em> untuk lonjakan nitrik oksida awal, manakala <em>L-Citrulline Malate (140mg)</em> mengekalkan tetingkap pelepasan lanjutan (XR) selama 4 hingga 6 jam.
          </p>
          <span class="architectural-ledger__metric">TETINGKAP XR 4–6 JAM</span>
        </div>

        <div class="architectural-ledger__row" style="padding: 2rem 0;">
          <span class="architectural-ledger__index">PROTOKOL B</span>
          <h3 class="architectural-ledger__title">
            Protokol B: Penjagaan Vaskular Harian Pada Hari Rehat Tanpa Senaman
          </h3>
          <p class="architectural-ledger__detail">
            Pada hari rehat tanpa latihan gimnasium, ambil <strong>1 kapsul hitam di antara waktu makan tengah hari dan makan malam</strong> bersama 250ml air kosong. Ini memastikan paras plasma L-Arginine, saponin Tribulus Terrestris (110mg), eurycomanone Tongkat Ali (90mg), dan polimetoksiflavon Kunyit Hitam (65mg) kekal tepu sepanjang kitaran 30 hari penuh. Simpan botol di bawah suhu 30°C dengan penutup ditutup rapat.
          </p>
          <span class="architectural-ledger__metric">SATURASI 30 HARI</span>
        </div>
      </div>

      <!-- Garis Masa 5 Fasa Kronologi 30 Kapsul Hitam & Peringatan Hari Ke-25 -->
      <div class="mp-ms-cycle-ledger" role="list" aria-label="Fasa Kronologi Kitaran 30 Hari Magnum Pump XR Malaysia">
        <!-- Fasa 1: 30–45 Minit Selepas Pengambilan (Hari Pertama) -->
        <div class="mp-ms-cycle-stage-row" role="listitem">
          <div class="mp-ms-cycle-stage-row__day">
            <span class="mp-ms-cycle-stage-row__day-kicker">FASA I · TETINGKAP AKUT XR</span>
            <span class="mp-ms-cycle-stage-row__day-num">30 – 45 Minit</span>
          </div>
          <div class="mp-ms-cycle-stage-row__body">
            <h3 class="mp-ms-cycle-stage-row__title">
              Serapan Pantas L-Arginine HCl &amp; L-Citrulline Malate Dipacu Bioperine
            </h3>
            <p class="mp-ms-cycle-stage-row__desc">
              Dalam tempoh 30 hingga 45 minit selepas kapsul hitam pertama ditelan bersama 300ml air, Bioperine (15mg) meningkatkan penyerapan usus L-Arginine HCl (180mg) dan L-Citrulline Malate (140mg). Pengguna mula merasai kehangatan peredaran darah periferi, kepenuhan otot (<em>muscular vascular pump</em>) semasa mengangkat bebanan di gimnasium, serta kesediaan tenaga fizikal malam tanpa sebarang debaran jantung kerana formulasi ini 100% bebas kafein.
            </p>
          </div>
          <div class="mp-ms-cycle-stage-row__meta">
            <span style="color: var(--gold-champagne); font-size: 0.7rem; letter-spacing: 0.16em;">DOS AKTIF HARIAN</span>
            <strong>600 mg / Kapsul Hitam</strong>
            <span style="color: var(--text-muted-alabaster);">320mg Asid Amino + 280mg Herba</span>
          </div>
        </div>

        <!-- Fasa 2: Hari 1 hingga 7 -->
        <div class="mp-ms-cycle-stage-row" role="listitem">
          <div class="mp-ms-cycle-stage-row__day">
            <span class="mp-ms-cycle-stage-row__day-kicker">FASA II · KAPSUL HITAM 01–07</span>
            <span class="mp-ms-cycle-stage-row__day-num">Hari 1 – 7</span>
          </div>
          <div class="mp-ms-cycle-stage-row__body">
            <h3 class="mp-ms-cycle-stage-row__title">
              Penyesuaian Endotelium Vaskular &amp; Pengurangan Keletihan Asid Laktik
            </h3>
            <p class="mp-ms-cycle-stage-row__desc">
              Sepanjang minggu pertama (jumlah kumulatif 4,200mg bahan aktif), komponen DL-Malate daripada L-Citrulline Malate bersama Kunyit Hitam (<em>Kaempferia parviflora</em> 65mg) menyokong kitaran tenaga ATP selular. Otot kurang cepat berasa lenguh semasa ulangan senaman berat, manakala waktu pemulihan di antara set latihan dan selepas waktu pejabat menjadi lebih singkat.
            </p>
          </div>
          <div class="mp-ms-cycle-stage-row__meta">
            <span style="color: var(--gold-champagne); font-size: 0.7rem; letter-spacing: 0.16em;">JISIM TERKUMPUL</span>
            <strong>4,200 mg Bahan Aktif</strong>
            <span style="color: var(--text-muted-alabaster);">Baki Botol: 23 Kapsul Hitam</span>
          </div>
        </div>

        <!-- Fasa 3: Hari 8 hingga 24 -->
        <div class="mp-ms-cycle-stage-row" role="listitem">
          <div class="mp-ms-cycle-stage-row__day">
            <span class="mp-ms-cycle-stage-row__day-kicker">FASA III · KAPSUL HITAM 08–24</span>
            <span class="mp-ms-cycle-stage-row__day-num">Hari 8 – 24</span>
          </div>
          <div class="mp-ms-cycle-stage-row__body">
            <h3 class="mp-ms-cycle-stage-row__title">
              Sinergi Penuh Siri Pro Testosteron: Tribulus (110mg), Tongkat Ali (90mg) &amp; Kunyit Hitam (65mg)
            </h3>
            <p class="mp-ms-cycle-stage-row__desc">
              Memasuki minggu kedua dan ketiga, pengumpulan saponin steroid Tribulus Terrestris, eurycomanone Tongkat Ali Malaysia 100:1, dan polimetoksiflavon Kunyit Hitam mencapai tahap bio-saturasi penuh. Kapasiti kerja fizikal, kekuatan genggaman tangan, ketahanan kardio, dan keyakinan prestasi malam berada pada tahap kemuncak yang konsisten setiap hari.
            </p>
          </div>
          <div class="mp-ms-cycle-stage-row__meta">
            <span style="color: var(--gold-champagne); font-size: 0.7rem; letter-spacing: 0.16em;">JISIM TERKUMPUL</span>
            <strong>14,400 mg Bahan Aktif</strong>
            <span style="color: var(--text-muted-alabaster);">Baki Botol: 6 Kapsul Hitam</span>
          </div>
        </div>

        <!-- Fasa 4: HARI KE-25 (TITIK PERINGATAN ISIAN SEMULA HARI KE-25) -->
        <div class="mp-ms-cycle-stage-row mp-ms-cycle-stage-row--highlight" role="listitem">
          <div class="mp-ms-cycle-stage-row__day">
            <span class="mp-ms-cycle-stage-row__day-kicker">FASA IV · TITIK KRITIKAL HARI KE-25</span>
            <span class="mp-ms-cycle-stage-row__day-num">Hari Ke-25</span>
          </div>
          <div class="mp-ms-cycle-stage-row__body">
            <h3 class="mp-ms-cycle-stage-row__title">
              Peringatan Isian Semula Hari Ke-25 (Baki 5 Kapsul Hitam = Tetingkap Kurier 5 Hari)
            </h3>
            <p class="mp-ms-cycle-stage-row__desc">
              Pada pagi <strong>Hari Ke-25</strong> (atau <strong>Hari Ke-50</strong> bagi Pakej 2 Botol / <strong>Hari Ke-75</strong> bagi Pakej 3 Botol), anda masih mempunyai baki tepat <strong>5 kapsul hitam (3,000mg)</strong> sebagai rizab keselamatan. Peringatan Kalendar Automatik Onyxman (<em>"Onyxman Malaysia — Peringatan Bekalan Hari Ke-25 Magnum Pump XR (RM 159)"</em>) dan notifikasi WhatsApp privasi diaktifkan supaya bungkusan rahsia seterusnya sempat dihantar (1–2 hari bekerja di Semenanjung; 2–4 hari bekerja di Sabah/Sarawak) sebelum kapsul hitam ke-30 anda habis.
            </p>
          </div>
          <div class="mp-ms-cycle-stage-row__meta">
            <span style="color: var(--gold-foil-bright); font-size: 0.7rem; letter-spacing: 0.16em;">TINDAKAN DISYORKAN</span>
            <strong>Sahkan Isian Semula (RM 159 / RM 318)</strong>
            <span style="color: var(--gold-champagne);">Baki Botol: 5 Kapsul Hitam (5 Hari)</span>
          </div>
        </div>

        <!-- Fasa 5: Hari 26 hingga 30+ -->
        <div class="mp-ms-cycle-stage-row" role="listitem">
          <div class="mp-ms-cycle-stage-row__day">
            <span class="mp-ms-cycle-stage-row__day-kicker">FASA V · KAPSUL HITAM 26–30 &amp; SETERUSNYA</span>
            <span class="mp-ms-cycle-stage-row__day-num">Hari 26 – 30+</span>
          </div>
          <div class="mp-ms-cycle-stage-row__body">
            <h3 class="mp-ms-cycle-stage-row__title">
              Kemuncak Kitaran 18,000mg &amp; Peralihan Lancar ke Kitaran Bulan Kedua
            </h3>
            <p class="mp-ms-cycle-stage-row__desc">
              Apabila kapsul hitam ke-30 selesai diambil pada Hari Ke-30 (genap <strong>18,000mg / 18.0 gram</strong> matriks asid amino nitrik oksida dan ekstrak Siri Pro Testosteron), botol kedua anda sudah sedia di tangan—sama ada kerana anda memilih <strong>Pakej 2 Botol (RM 318 / 60 Kapsul Hitam)</strong> sejak Hari Pertama, atau melalui pelepasan pantas Hari Ke-25.
            </p>
          </div>
          <div class="mp-ms-cycle-stage-row__meta">
            <span style="color: var(--gold-champagne); font-size: 0.7rem; letter-spacing: 0.16em;">JISIM GENAP SEBOTOL</span>
            <strong>18,000 mg (18.0g) Selesai</strong>
            <span style="color: var(--text-muted-alabaster);">Peralihan ke Botol Ke-2 (Hari 31–60)</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================================
       BAB IV (BAHAGIAN B): JADUAL PERBANDINGAN 4 FORMULA ONYXMAN MALAYSIA
       ======================================================================== -->
  <section
    id="jadual-perbandingan-4-formula"
    class="mp-ms-comparison-section"
    aria-labelledby="mp-ms-comparison-heading"
  >
    <div class="mp-ms-section-inner">
      <div class="mp-ms-section-header">
        <div class="mp-ms-section-header__left">
          <span class="editorial-kicker">BAB IV · MATRIKS PERBANDINGAN EMPAT FORMULASI ONYXMAN (MS-114B)</span>
          <h2 id="mp-ms-comparison-heading" class="editorial-headline-lg">
            Perbandingan Magnum Pump XR berbanding <span class="foil-champagne-text">Grow XL, Horsemen &amp; Hammer of Thor</span>
          </h2>
          <p class="editorial-lead-paragraph">
            Keempat-empat formulasi rasmi Onyxman Malaysia ditawarkan pada harga seragam <strong>RM 159.00 sebotol</strong> (2 Botol RM 318 · 3 Botol RM 477), tetapi setiap satu direka untuk keperluan fisiologi yang berbeza. Gunakan jadual perbandingan 10-dimensi di bawah untuk memahami mengapa <strong>Magnum Pump XR Malaysia (30 Kapsul Hitam × 600mg = 18,000mg)</strong> merupakan pilihan nombor satu untuk aliran vaskular Nitrik Oksida, senaman gimnasium, dan stamina malam.
          </p>
        </div>

        <div>
          <a href="/ms/perbandingan/" class="cta-hairline-secondary">
            <span>LIHAT PORTAL PERBANDINGAN PENUH</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <!-- Jadual Perbandingan 10-Dimensi Merentasi 4 Formulasi -->
      <div class="mp-ms-table-scroll" role="region" aria-label="Jadual Perbandingan Teknikal 4 Formulasi Onyxman Malaysia" tabindex="0">
        <table class="mp-ms-architectural-table">
          <thead>
            <tr>
              <th scope="col" style="width: 18%;">DIMENSI SPESIFIKASI</th>
              <th scope="col" class="mp-ms-col-highlight" style="width: 24%;">
                01 · MAGNUM PUMP XR (LAMAN INI)
              </th>
              <th scope="col" style="width: 20%;">
                02 · GROW XL (30 KAPSUL)
              </th>
              <th scope="col" style="width: 19%;">
                03 · HORSEMEN (20 KAPSUL)
              </th>
              <th scope="col" style="width: 19%;">
                04 · HAMMER OF THOR (20 KAPSUL)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Kod SKU, MPN &amp; GTIN-13</th>
              <td class="mp-ms-col-highlight">
                <strong>SKU: ONYX-MP-30</strong><br />
                MPN: MPXR-30BLK-MY<br />
                GTIN-13: 9550000102042
              </td>
              <td>
                SKU: ONYX-GX-30<br />
                MPN: GX-30CAP-MY<br />
                GTIN-13: 9550000102035
              </td>
              <td>
                SKU: ONYX-HM-20<br />
                MPN: HM-500MG-20MY<br />
                GTIN-13: 9550000102011
              </td>
              <td>
                SKU: ONYX-HT-20<br />
                MPN: HT-20VEG-MY<br />
                GTIN-13: 9550000102028
              </td>
            </tr>
            <tr>
              <th scope="row">Bilangan Kapsul &amp; Berat Bersih Sebotol</th>
              <td class="mp-ms-col-highlight">
                <strong>30 Kapsul Hitam × 600mg</strong><br />
                (<strong>18,000mg / 18.0g</strong> Jisim Aktif Sebotol — Tertinggi)
              </td>
              <td>
                30 Kapsul Harian × 500mg<br />
                (15,000mg / 15.0g Sebotol)
              </td>
              <td>
                20 Kapsul Padat × 500mg<br />
                (10,000mg / 10.0g Sebotol)
              </td>
              <td>
                20 Kapsul Vegetarian × 500mg<br />
                (10,000mg / 10.0g Sebotol)
              </td>
            </tr>
            <tr>
              <th scope="row">Fokus Fisiologi Utama</th>
              <td class="mp-ms-col-highlight">
                <strong>Aliran Vaskular Nitrik Oksida Pelepasan Lanjutan (XR), Prestasi Otot Gimnasium &amp; Stamina Malam</strong>
              </td>
              <td>
                Nutrisi Peredaran Mikro Harian Waktu Pagi &amp; Kecergasan Asas 30 Hari
              </td>
              <td>
                Kesediaan Tenaga Malam Pantas (45–60 Minit) &amp; Pemulihan Kelesuan Lewat Petang
              </td>
              <td>
                Pembinaan Daya Tahan Stamina Fizikal Berperingkat &amp; Kekuatan Otot
              </td>
            </tr>
            <tr>
              <th scope="row">Komposisi 6 Ramuan Aktif</th>
              <td class="mp-ms-col-highlight">
                <strong>L-Arginine HCl (180mg), L-Citrulline Malate (140mg), Tribulus Terrestris (110mg), Tongkat Ali 100:1 (90mg), Kunyit Hitam Kaempferia Parviflora (65mg), Bioperine Lada Hitam (15mg)</strong>
              </td>
              <td>
                Panax Ginseng Matang, Ginkgo Biloba, Saw Palmetto, Muira Puama, L-Citrulline Malate &amp; Vitamin B3 (Niacin)
              </td>
              <td>
                Tongkat Ali 100:1 (150mg), Maca Hitam Peru (100mg), Epimedium (80mg), L-Arginine HCl (80mg), Ginseng Merah (60mg), Tribulus &amp; Zink (30mg)
              </td>
              <td>
                Tribulus Terrestris Saponin Tinggi, Tongkat Ali Malaysia, Ashwagandha KSM-66, Mucuna Pruriens &amp; Zink Kelat
              </td>
            </tr>
            <tr>
              <th scope="row">Teknologi Sarung Kapsul</th>
              <td class="mp-ms-col-highlight">
                <strong>Kapsul Hitam Berkilat Pelindung UV (Jet-Black UV-Shield Capsule)</strong>
              </td>
              <td>
                Kapsul Harian Piawai Larut Pantas Waktu Pagi
              </td>
              <td>
                Kapsul Apotekari Kepekatan Padat 500mg
              </td>
              <td>
                Kapsul Selulosa Tumbuhan HPMC 100% Vegetarian
              </td>
            </tr>
            <tr>
              <th scope="row">Masa Pengambilan Optimum</th>
              <td class="mp-ms-col-highlight">
                <strong>30–45 minit sebelum senaman gimnasium atau aktiviti malam</strong> bersama 300ml air kosong
              </td>
              <td>
                1 kapsul setiap pagi selepas sarapan selama 30 hari
              </td>
              <td>
                45–60 minit sebelum aktiviti malam atau 1 kapsul selepas makan malam
              </td>
              <td>
                1 kapsul setiap malam selepas makan malam bersama 250ml air suam
              </td>
            </tr>
            <tr>
              <th scope="row">Peringatan Isian Semula</th>
              <td class="mp-ms-col-highlight">
                <strong>Hari Ke-25</strong> (1 Botol)<br />
                <strong>Hari Ke-50</strong> (2 Botol)<br />
                <strong>Hari Ke-75</strong> (3 Botol)
              </td>
              <td>
                Hari Ke-25 (1 Botol)<br />
                Hari Ke-50 (2 Botol)<br />
                Hari Ke-75 (3 Botol)
              </td>
              <td>
                Hari Ke-18 (1 Botol)<br />
                Hari Ke-36 (2 Botol)<br />
                Hari Ke-54 (3 Botol)
              </td>
              <td>
                Hari Ke-18 (1 Botol)<br />
                Hari Ke-36 (2 Botol)<br />
                Hari Ke-54 (3 Botol)
              </td>
            </tr>
            <tr>
              <th scope="row">Status Kafein &amp; Perangsang</th>
              <td class="mp-ms-col-highlight">
                <strong>100% Bebas Kafein &amp; Bebas Perangsang Saraf</strong> · Selamat Diambil Waktu Malam
              </td>
              <td>
                100% Bebas Kafein · Tenaga Harian Semula Jadi
              </td>
              <td>
                100% Bebas Kafein · Mesra Tidur Malam
              </td>
              <td>
                100% Bebas Kafein · Adaptogenik Tenang
              </td>
            </tr>
            <tr>
              <th scope="row">Harga Rasmi Pakej 1 / 2 / 3 Botol</th>
              <td class="mp-ms-col-highlight">
                <strong>1 Botol: RM 159.00</strong><br />
                <strong>2 Botol: RM 318.00</strong><br />
                <strong>3 Botol: RM 477.00</strong>
              </td>
              <td>
                1 Botol: RM 159.00<br />
                2 Botol: RM 318.00<br />
                3 Botol: RM 477.00
              </td>
              <td>
                1 Botol: RM 159.00<br />
                2 Botol: RM 318.00<br />
                3 Botol: RM 477.00
              </td>
              <td>
                1 Botol: RM 159.00<br />
                2 Botol: RM 318.00<br />
                3 Botol: RM 477.00
              </td>
            </tr>
            <tr>
              <th scope="row">Tindakan &amp; Pautan Terus</th>
              <td class="mp-ms-col-highlight">
                <button
                  type="button"
                  class="cta-foil-primary"
                  style="padding: 0.65rem 1.15rem; font-size: 0.7rem;"
                  data-open-order-drawer="true"
                  data-order-product="magnum-pump-xr"
                  data-order-qty="2"
                >
                  <span>TEMPAH MAGNUM XR</span>
                </button>
              </td>
              <td>
                <a href="/ms/produk/grow-xl/" class="cta-hairline-secondary" style="padding: 0.55rem 0.95rem; font-size: 0.7rem;">
                  <span>LIHAT GROW XL →</span>
                </a>
              </td>
              <td>
                <a href="/ms/horsemen-malaysia/" class="cta-hairline-secondary" style="padding: 0.55rem 0.95rem; font-size: 0.7rem;">
                  <span>LIHAT HORSEMEN →</span>
                </a>
              </td>
              <td>
                <a href="/ms/hammer-of-thor-malaysia/" class="cta-hairline-secondary" style="padding: 0.55rem 0.95rem; font-size: 0.7rem;">
                  <span>LIHAT HAMMER OF THOR →</span>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Analisis Perbandingan Bersemuka (Head-to-Head Editorial Ledger) -->
      <div class="architectural-ledger" role="region" aria-label="Analisis Perbandingan Bersemuka Magnum Pump XR Malaysia">
        <div class="architectural-ledger__row" style="padding: 2rem 0;">
          <span class="architectural-ledger__index">VS 01</span>
          <h3 class="architectural-ledger__title">
            Magnum Pump XR (30 Kapsul Hitam × 600mg) vs Grow XL (30 Kapsul × 500mg)
          </h3>
          <p class="architectural-ledger__detail">
            Kedua-dua formulasi ini membekalkan 30 kapsul sebotol dengan Peringatan Isian Semula Hari Ke-25, namun direka untuk waktu dan laluan fisiologi yang berlainan. <strong>Magnum Pump XR</strong> menawarkan 600mg setiap kapsul hitam (320mg dwi-asid amino L-Arginine HCl + L-Citrulline Malate serta Kunyit Hitam &amp; Bioperine) untuk lonjakan vaskular nitrik oksida 30–45 minit sebelum senaman atau aktiviti malam. <strong>Grow XL</strong> pula diambil pada waktu pagi selepas sarapan untuk sokongan nutrisi peredaran mikro harian menerusi Ginkgo Biloba, Saw Palmetto, dan Muira Puama. Baca kupasan lanjut di halaman <a href="/ms/perbandingan/grow-xl-vs-magnum-pump-xr/" style="color: var(--gold-foil-bright); text-decoration: underline;">Perbandingan Grow XL vs Magnum Pump XR</a>.
          </p>
          <span class="architectural-ledger__metric">30 KAPSUL HITAM 600MG</span>
        </div>

        <div class="architectural-ledger__row" style="padding: 2rem 0;">
          <span class="architectural-ledger__index">VS 02</span>
          <h3 class="architectural-ledger__title">
            Magnum Pump XR (Teras Nitrik Oksida 18,000mg) vs Horsemen Malaysia (Teras Adaptogenik 10,000mg)
          </h3>
          <p class="architectural-ledger__detail">
            <strong>Horsemen Malaysia</strong> (20 kapsul × 500mg) memfokuskan kepada kepekatan Tongkat Ali 100:1 tertinggi (150mg) bersama Maca Hitam Peru (100mg) dan Epimedium (80mg) untuk kesediaan tenaga malam selepas waktu pejabat. Sebaliknya, <strong>Magnum Pump XR</strong> membekalkan lebih dua kali ganda dos asid amino vaskular (180mg L-Arginine HCl + 140mg L-Citrulline Malate = 320mg) ditambah Kunyit Hitam (65mg) dan Bioperine (15mg) dalam 30 kapsul hitam—menjadikannya pilihan terbaik untuk lelaki yang aktif bersenam di gimnasium dan mahukan aliran vaskular maksimum.
          </p>
          <span class="architectural-ledger__metric">320MG ASID AMINO NO</span>
        </div>

        <div class="architectural-ledger__row" style="padding: 2rem 0;">
          <span class="architectural-ledger__index">VS 03</span>
          <h3 class="architectural-ledger__title">
            Magnum Pump XR (30 Kapsul Hitam Siri Pro) vs Hammer of Thor (20 Kapsul Vegetarian)
          </h3>
          <p class="architectural-ledger__detail">
            <strong>Hammer of Thor</strong> menggunakan 20 kapsul selulosa tumbuhan vegetarian yang menggabungkan Tribulus Terrestris bersama Ashwagandha dan Mucuna Pruriens untuk ketahanan fizikal dan pengurusan tekanan harian. <strong>Magnum Pump XR</strong> pula menggabungkan Tribulus Terrestris (110mg) dan Tongkat Ali (90mg) terus dengan enjin nitrik oksida Pelepasan Lanjutan (L-Arginine + L-Citrulline) selama 30 hari penuh bagi kesan pam otot dan vaskular yang ketara.
          </p>
          <span class="architectural-ledger__metric">KITARAN 30 HARI PENUH</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================================
       BAB V (BAHAGIAN C): PENGHANTARAN RAHSIA 16 NEGERI & WILAYAH PERSEKUTUAN MALAYSIA
       ======================================================================== -->
  <section
    id="penghantaran-rahsia-16-negeri-malaysia"
    class="mp-ms-states-section"
    aria-labelledby="mp-ms-states-heading"
  >
    <div class="mp-ms-section-inner">
      <div class="mp-ms-section-header">
        <div class="mp-ms-section-header__left">
          <span class="editorial-kicker">BAB V · RANGKAIAN LOGISTIK BUNGKUSAN RAHSIA KEBANGSAAN (MS-114B)</span>
          <h2 id="mp-ms-states-heading" class="editorial-headline-lg">
            Penghantaran Rahsia Magnum Pump XR ke Seluruh <span class="foil-champagne-text">16 Negeri &amp; Wilayah Persekutuan Malaysia</span>
          </h2>
          <p class="editorial-lead-paragraph">
            Setiap botol Magnum Pump XR Malaysia (30 Kapsul Hitam) disimpan di dalam bilik kebal kawalan suhu (<strong style="color: var(--gold-foil-bright);">&lt; 24°C</strong>) di Kuala Lumpur bagi mengekalkan kualiti asid amino L-Citrulline dan L-Arginine. Semua pesanan dibungkus di dalam kotak keselamatan legap tanpa sebarang cetakan jenama, dengan nama pengirim <strong>"OM Fulfilment Logistics"</strong> pada slip kurier.
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
      <div class="mp-ms-table-scroll" role="region" aria-label="Jadual Penghantaran 16 Negeri Malaysia untuk Magnum Pump XR" tabindex="0">
        <table class="mp-ms-architectural-table">
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
       BAB VI (BAHAGIAN D): 6 SENARAI SEMAK KETULENAN BOTOL RASMI MAGNUM PUMP XR
       ======================================================================== -->
  <section
    id="semakan-ketulenan-magnum-pump-xr"
    class="mp-ms-authenticity-section"
    aria-labelledby="mp-ms-auth-heading"
  >
    <div class="mp-ms-section-inner">
      <div class="mp-ms-section-header">
        <div class="mp-ms-section-header__left">
          <span class="editorial-kicker">BAB VI · PERLINDUNGAN PENGGUNA &amp; PENGESAHAN KETULENAN APOTEKARI</span>
          <h2 id="mp-ms-auth-heading" class="editorial-headline-lg">
            6 Senarai Semak Ketulenan Botol Rasmi <span class="foil-champagne-text">Magnum Pump XR Malaysia</span>
          </h2>
          <p class="editorial-lead-paragraph">
            Bagi memastikan anda menerima formulasi tulen <strong>30 Kapsul Hitam × 600mg</strong> yang mengandungi L-Arginine HCl, L-Citrulline Malate, Kunyit Hitam, dan Bioperine berpiawai, setiap botol rasmi Magnum Pump XR yang diedarkan melalui <strong>https://www.onyxmen.my</strong> memenuhi 6 ciri pengesahan fizikal berikut:
          </p>
        </div>

        <div>
          <a href="/ms/panduan/cara-semak-ketulenan-botol-onyxman-malaysia/" class="cta-hairline-secondary">
            <span>PANDUAN PENUH SEMAKAN KETULENAN</span>
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>

      <div class="architectural-ledger" role="list" aria-label="6 Senarai Semak Ketulenan Botol Magnum Pump XR Malaysia">
        <div class="architectural-ledger__row" role="listitem">
          <span class="architectural-ledger__index">SEMAK 01</span>
          <h3 class="architectural-ledger__title">Kod Inventori Rasmi SKU ONYX-MP-30, MPN MPXR-30BLK-MY &amp; GTIN-13 9550000102042</h3>
          <p class="architectural-ledger__detail">
            Setiap unit tulen direkodkan secara rasmi di bawah kod <strong>SKU: ONYX-MP-30</strong>, <strong>MPN: MPXR-30BLK-MY</strong>, dan kod bar <strong>GTIN-13: 9550000102042</strong> (awalan GS1 955 menunjukkan pendaftaran kod bar rasmi Malaysia).
          </p>
          <span class="architectural-ledger__metric">GTIN: 9550000102042</span>
        </div>

        <div class="architectural-ledger__row" role="listitem">
          <span class="architectural-ledger__index">SEMAK 02</span>
          <h3 class="architectural-ledger__title">Tepat 30 Kapsul Hitam Berkilat × 600mg (Berat Bersih 18.0 Gram)</h3>
          <p class="architectural-ledger__detail">
            Apabila dibuka, botol mengandungi tepat <strong>30 kapsul berwarna hitam pekat berkilat</strong> (bukan kapsul lutsinar atau kapsul putih murah), dengan setiap satu mengandungi 600mg matriks asid amino dan botani (jumlah keseluruhan 18,000mg / 18.0g sebotol).
          </p>
          <span class="architectural-ledger__metric">30 × 600MG = 18G</span>
        </div>

        <div class="architectural-ledger__row" role="listitem">
          <span class="architectural-ledger__index">SEMAK 03</span>
          <h3 class="architectural-ledger__title">Lencana Label "Testosterone Pro Series — Male Enhancement Formula Maximum Strength"</h3>
          <p class="architectural-ledger__detail">
            Botol HDPE hitam obsidian menampilkan lencana <strong>MAGNUM PUMP XR</strong> berwarna merah-perak metalik bersama kapsyen rasmi <em>"Testosterone Pro Series — Male Enhancement Formula Maximum Strength — 30 Black Capsules"</em> yang dicetak dengan resolusi tinggi.
          </p>
          <span class="architectural-ledger__metric">SIRI PRO RASMI</span>
        </div>

        <div class="architectural-ledger__row" role="listitem">
          <span class="architectural-ledger__index">SEMAK 04</span>
          <h3 class="architectural-ledger__title">Kedap Induksi Haba Kedap Udara &amp; Penyerap Lembapan Gred Makanan</h3>
          <p class="architectural-ledger__detail">
            Bagi melindungi L-Citrulline Malate dan L-Arginine HCl yang bersifat higroskopik daripada udara lembap Malaysia, mulut botol ditutup rapat dengan lapisan kedap induksi aluminium serta disertakan pek silika penyerap lembapan gred farmaseutikal di dalam botol.
          </p>
          <span class="architectural-ledger__metric">JAMINAN 14 HARI</span>
        </div>

        <div class="architectural-ledger__row" role="listitem">
          <span class="architectural-ledger__index">SEMAK 05</span>
          <h3 class="architectural-ledger__title">Harga Rasmi Seragam RM 159.00 Sebotol (2 Botol RM 318 · 3 Botol RM 477)</h3>
          <p class="architectural-ledger__detail">
            Bahan mentah L-Citrulline Malate 2:1, Kunyit Hitam (5% PMF), Tongkat Ali 100:1, dan Bioperine (95% piperine) tulen mempunyai kos penggubalan yang tinggi. Onyxman Malaysia menetapkan harga rasmi <strong>RM 159 sebotol</strong> secara telus. Elakkan produk tiruan berharga RM 30–RM 50 di pasaran terbuka.
          </p>
          <span class="architectural-ledger__metric">RM 159 RASMI</span>
        </div>

        <div class="architectural-ledger__row" role="listitem">
          <span class="architectural-ledger__index">SEMAK 06</span>
          <h3 class="architectural-ledger__title">Pengesahan Terus Melalui Meja Rasmi Onyxman.my</h3>
          <p class="architectural-ledger__detail">
            Semua tempahan tulen hanya diproses melalui laman web rasmi <strong>https://www.onyxmen.my</strong> dan disahkan menerusi meja operasi <a href="mailto:sales@onyxman.my" style="color: var(--gold-foil-bright);">sales@onyxman.my</a>, <a href="mailto:info@onyxman.my" style="color: var(--gold-foil-bright);">info@onyxman.my</a>, dan <a href="mailto:waleedshoaibofficial@gmail.com" style="color: var(--gold-foil-bright);">waleedshoaibofficial@gmail.com</a>.
          </p>
          <span class="architectural-ledger__metric">PENGEDAR SAH MY</span>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================================
       BAB VII (BAHAGIAN E): 10 SOALAN LAZIM (FAQ) MAGNUM PUMP XR BAHASA MALAYSIA
       ======================================================================== -->
  <section
    id="soalan-lazim-magnum-pump-xr-malaysia"
    class="mp-ms-faq-section"
    aria-labelledby="mp-ms-faq-heading"
  >
    <div class="mp-ms-section-inner">
      <div class="mp-ms-section-header">
        <div class="mp-ms-section-header__left">
          <span class="editorial-kicker">BAB VII · ENSIKLOPEDIA SOALAN LAZIM PELANGGAN (MS-114B)</span>
          <h2 id="mp-ms-faq-heading" class="editorial-headline-lg">
            10 Soalan Lazim (FAQ) Mengenai <span class="foil-champagne-text">Magnum Pump XR Malaysia (30 Kapsul Hitam × 600mg)</span>
          </h2>
          <p class="editorial-lead-paragraph">
            Jawapan teknikal yang jelas dan telus kepada 10 soalan paling kerap ditanya oleh pelanggan kami mengenai kapsul hitam Magnum Pump XR, fungsi nitrik oksida Pelepasan Lanjutan (XR), perbezaan entiti suplemen pemakanan, serta penghantaran rahsia di Malaysia.
          </p>
        </div>

        <div>
          <button
            type="button"
            class="cta-foil-primary"
            data-open-order-drawer="true"
            data-order-product="magnum-pump-xr"
            data-order-qty="1"
          >
            <span>TEMPAH SEKARANG · RM 159</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>

      <div class="mp-ms-faq-ledger" data-faq-accordion-group role="region" aria-label="Senarai 10 Soalan Lazim Magnum Pump XR Malaysia">
        ${faqHtml}
      </div>
    </div>
  </section>

  <!-- ========================================================================
       BAB VIII: PENTAS PENUTUP RIZAB APOTEKARI MAGNUM PUMP XR MALAYSIA
       ======================================================================== -->
  <section
    id="rizab-penutup-magnum-pump-xr"
    class="mp-ms-closing-vault"
    aria-labelledby="mp-ms-closing-heading"
  >
    <div class="mp-ms-section-inner">
      <div class="mp-ms-section-header" style="border-bottom: none; padding-bottom: 0;">
        <div class="mp-ms-section-header__left">
          <span class="editorial-kicker">RIZAB APOTEKARI ONYXMAN MALAYSIA · PELEPASAN BUNGKUSAN RAHSIA HARI INI</span>
          <h2 id="mp-ms-closing-heading" class="editorial-headline-xl">
            Sediakan Rizab <span class="foil-champagne-text">Magnum Pump XR Malaysia</span> Anda Dalam Kotak Rahsia
          </h2>
          <p class="editorial-lead-paragraph">
            Pilih pakej kitaran 30, 60, atau 90 kapsul hitam yang paling bertepatan dengan jadual latihan bebanan dan kecergasan malam anda. Setiap pesanan dilindungi oleh Jaminan Ketulenan 14 Hari Onyxman Malaysia, Peringatan Isian Semula Hari Ke-25, dan bungkusan tanpa nama produk ke seluruh 16 negeri Malaysia.
          </p>
        </div>
      </div>

      <div class="tier-strip-group" role="group" aria-label="Pilihan Akhir Pakej Magnum Pump XR Malaysia">
        <button
          type="button"
          class="tier-strip-option"
          data-open-order-drawer="true"
          data-order-product="magnum-pump-xr"
          data-order-qty="1"
        >
          <div class="tier-strip-option__left">
            <span class="tier-strip-option__eyebrow">PAKEJ 1 BOTOL · KITARAN NITRIK OKSIDA 30 HARI · NOTIS HARI KE-25</span>
            <span class="tier-strip-option__title">Magnum Pump XR Malaysia — 1 Botol (30 Kapsul Hitam × 600mg = 18,000mg)</span>
            <span class="tier-strip-option__subtitle">Penghantaran Ekspres Rahsia Percuma Semenanjung Malaysia (RM 12 Sabah/Sarawak) · FPX, DuitNow QR &amp; COD</span>
          </div>
          <span class="tier-strip-option__price">RM 159</span>
        </button>

        <button
          type="button"
          class="tier-strip-option tier-strip-option--selected"
          data-open-order-drawer="true"
          data-order-product="magnum-pump-xr"
          data-order-qty="2"
        >
          <div class="tier-strip-option__left">
            <span class="tier-strip-option__eyebrow">PAKEJ 2 BOTOL · PROTOKOL DWI-ALIRAN VASKULAR &amp; SENAMAN 60 HARI · NOTIS HARI KE-50</span>
            <span class="tier-strip-option__title">Magnum Pump XR Malaysia — 2 Botol (60 Kapsul Hitam × 600mg = 36,000mg)</span>
            <span class="tier-strip-option__subtitle">Penghantaran Ekspres Rahsia Percuma ke Seluruh 16 Negeri Malaysia Termasuk Sabah, Sarawak &amp; Labuan</span>
          </div>
          <span class="tier-strip-option__price">RM 318</span>
        </button>

        <button
          type="button"
          class="tier-strip-option"
          data-open-order-drawer="true"
          data-order-product="magnum-pump-xr"
          data-order-qty="3"
        >
          <div class="tier-strip-option__left">
            <span class="tier-strip-option__eyebrow">PAKEJ 3 BOTOL · PAKEJ LENGKAP SIRI PRO 90 HARI · NOTIS HARI KE-75</span>
            <span class="tier-strip-option__title">Magnum Pump XR Malaysia — 3 Botol (90 Kapsul Hitam × 600mg = 54,000mg)</span>
            <span class="tier-strip-option__subtitle">Pelepasan Keutamaan VIP + Penghantar Persendirian Lembah Klang + Percuma Pos Seluruh Negara</span>
          </div>
          <span class="tier-strip-option__price">RM 477</span>
        </button>
      </div>

      <div class="mp-ms-hero-cta-cluster" style="justify-content: space-between; padding-top: 1rem; border-top: var(--hairline-subtle);">
        <div style="font-size: 0.84rem; color: var(--text-muted-alabaster);">
          Meja Khidmat Pelanggan &amp; Pengesahan Pesanan Rasmi:
          <a href="mailto:sales@onyxman.my" style="color: var(--gold-foil-bright); font-weight: 600;">sales@onyxman.my</a> ·
          <a href="mailto:info@onyxman.my" style="color: var(--gold-foil-bright); font-weight: 600;">info@onyxman.my</a> ·
          <a href="mailto:waleedshoaibofficial@gmail.com" style="color: var(--gold-foil-bright); font-weight: 600;">waleedshoaibofficial@gmail.com</a>
        </div>

        <button
          type="button"
          class="cta-foil-primary"
          data-open-order-drawer="true"
          data-order-product="magnum-pump-xr"
          data-order-qty="2"
        >
          <span>BUKA LACI TEMPAHAN RAHSIA (10 SAAT)</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  </section>

  <!-- Skrip Interaksi Tempatan Pemilih Pakej Magnum Pump XR Malaysia -->
  <script>
    (function initMagnumMsPageInteractions() {
      const tierButtons = document.querySelectorAll('[data-mp-tier-btn]');
      const primaryCta = document.getElementById('mp-ms-primary-order-cta');
      tierButtons.forEach(function bindTierBtn(btn) {
        btn.addEventListener('mouseenter', function onHoverTier() {
          const qty = btn.getAttribute('data-mp-tier-btn') || '2';
          tierButtons.forEach(function updateRadio(other) {
            const isMatch = other === btn;
            other.classList.toggle('mp-ms-tier-row--active', isMatch);
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
 * Menjana dokumen HTML5 penuh untuk Magnum Pump XR Malaysia (Bahasa Malaysia)
 * dan menyimpannya ke dalam:
 *   1. public/ms/magnum-pump-xr-malaysia/index.html
 *   2. public/ms/produk/magnum-pump-xr/index.html
 */
export function buildMagnumMsPage() {
  const bodyContent = [
    renderChapter1Hero(),
    renderChapter2BotanicalAndBlackCapsule(),
    renderChapter3CycleComparisonShippingFaq(),
  ].join('\n');

  const schemaGraphJson = buildMagnumMsGraphJson();

  const fullHtml = renderLuxuryShell({
    lang: 'ms-MY',
    title:
      'Magnum Pump XR Malaysia (30 Kapsul Hitam × 600mg) — Siri Pro Testosteron & Formula Nitrik Oksida Kekuatan Maksimum | RM 159 Onyxman.my',
    description:
      'Tempah Magnum Pump XR Malaysia tulen (Siri Pro Testosteron — Formula Peningkatan Prestasi Lelaki Kekuatan Maksimum — 30 Kapsul Hitam, SKU ONYX-MP-30, MPN MPXR-30BLK-MY, GTIN-13 9550000102042) pada harga rasmi RM 159 sebotol (2 Botol RM 318, 3 Botol RM 477). Gabungan L-Arginine HCl 180mg, L-Citrulline Malate 140mg, Tribulus Terrestris 110mg, Tongkat Ali Malaysia 90mg, Kunyit Hitam 65mg & Bioperine 15mg dengan penghantaran rahsia ke seluruh 16 negeri Malaysia.',
    canonicalPath: CANONICAL_PATH_MS,
    alternatePathEn: ALTERNATE_PATH_EN,
    alternatePathMs: CANONICAL_PATH_MS,
    ogImage: '/assets/products/magnum-pump-xr-stage.webp',
    schemaGraphJson,
    bodyContent,
    activeNav: 'magnum-pump-xr',
    productSlug: 'magnum-pump-xr',
    defaultQty: 2,
    includeSealStrip: true,
    extraHeadHtml: MAGNUM_MS_PAGE_CSS,
  });

  const primaryOutputPath = path.join(ROOT_DIR, 'public', 'ms', 'magnum-pump-xr-malaysia', 'index.html');
  const mirrorOutputPath = path.join(ROOT_DIR, 'public', 'ms', 'produk', 'magnum-pump-xr', 'index.html');

  fs.mkdirSync(path.dirname(primaryOutputPath), { recursive: true });
  fs.writeFileSync(primaryOutputPath, fullHtml, 'utf8');

  fs.mkdirSync(path.dirname(mirrorOutputPath), { recursive: true });
  fs.writeFileSync(mirrorOutputPath, fullHtml, 'utf8');

  const lineCount = fullHtml.split(/\r?\n/).length;
  const byteSize = Buffer.byteLength(fullHtml, 'utf8');

  console.log('====================================================================');
  console.log('ONYXMAN.MY — MAGNUM PUMP XR BAHASA MALAYSIA FLAGSHIP BUILD COMPLETE');
  console.log('====================================================================');
  console.log(`Primary File   : ${path.relative(ROOT_DIR, primaryOutputPath)}`);
  console.log(`Mirror File    : ${path.relative(ROOT_DIR, mirrorOutputPath)}`);
  console.log(`Canonical URL  : ${CANONICAL_URL_MS}`);
  console.log(`Paired EN URL  : ${SCHEMA_DOMAIN}${ALTERNATE_PATH_EN}`);
  console.log(`Total Lines    : ${lineCount} lines`);
  console.log(`Total Bytes    : ${byteSize} bytes`);
  console.log('====================================================================');

  return { primaryOutputPath, mirrorOutputPath, lineCount, byteSize };
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  buildMagnumMsPage();
}
