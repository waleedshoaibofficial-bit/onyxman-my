/**
 * ONYXMEN.MY — GOOGLE RICH-RESULT & MERCHANT CENTER @GRAPH JSON-LD ENGINE (MS-045 TO MS-056)
 * Direct Node ES Module (.mjs) for zero-step build & validation scripts.
 * Domain: https://www.onyxmen.my
 * Official Single-Bottle Price: "159.00" MYR | Multi-Bottle Tiers: 1B = "159.00", 2B = "318.00", 3B = "477.00"
 */

export const SCHEMA_DOMAIN = 'https://www.onyxmen.my';
export const ORG_ID = `${SCHEMA_DOMAIN}/#organization`;
export const WEBSITE_ID = `${SCHEMA_DOMAIN}/#website`;
export const BRAND_ID = `${SCHEMA_DOMAIN}/#brand`;
export const SHIPPING_MY_ID = `${SCHEMA_DOMAIN}/#shipping-my`;
export const RETURN_POLICY_MY_ID = `${SCHEMA_DOMAIN}/#return-policy`;

export const OFFICIAL_PRICE_MYR = '159.00';
export const OFFICIAL_CURRENCY = 'MYR';
export const OFFICIAL_PRICE_VALID_UNTIL = '2027-12-31';

export function normalizeSchemaLocale(lang) {
  if (!lang) return 'en-MY';
  const lower = String(lang).toLowerCase();
  if (lower === 'ms' || lower === 'ms-my' || lower === 'bm') {
    return 'ms-MY';
  }
  return 'en-MY';
}

export const DEFAULT_PRODUCTS_CATALOG = {
  horsemen: {
    id: 'horsemen',
    slug: 'horsemen',
    name: 'Horsemen',
    fullTitleEn: 'Horsemen — High-Potency Tongkat Ali & Black Maca Stamina Apothecary Reserve (20 Capsules)',
    fullTitleMs: 'Horsemen — Formulasi Ekstrak Tongkat Ali & Maca Hitam Berkepekatan Tinggi (20 Kapsul)',
    descriptionEn:
      'Horsemen by Onyxmen Malaysia is a 20-capsule adult men’s botanical dietary supplement formulated with standardized Malaysian Tongkat Ali (Eurycoma longifolia 100:1), Peruvian Black Maca Root, Korean Red Panax Ginseng, Epimedium Extract, and L-Arginine HCl to support evening readiness, physical stamina, and male vitality.',
    descriptionMs:
      'Horsemen oleh Onyxmen Malaysia ialah suplemen pemakanan botani lelaki dewasa (20 kapsul) yang dirumus dengan Ekstrak Tongkat Ali Malaysia (Eurycoma longifolia 100:1), Akar Maca Hitam Peru, Panax Ginseng Merah Korea, dan L-Arginine HCl untuk menyokong kesediaan tenaga malam dan stamina fizikal.',
    disambiguatingDescriptionEn:
      'Oral botanical dietary supplement in a 20-capsule apothecary bottle for adult men (18+) in Malaysia. Distinct from equestrian gear or sports equipment.',
    disambiguatingDescriptionMs:
      'Suplemen kapsul pemakanan botani (20 kapsul sebotol) untuk kecergasan lelaki dewasa (18+) di Malaysia.',
    capsuleCount: 20,
    dosageProtocolEn:
      'Take 1 capsule with warm water 45–60 minutes before physical or evening activity, or 1 capsule every 48 hours for baseline vitality maintenance.',
    dosageProtocolMs:
      'Ambil 1 kapsul bersama air suam 45–60 minit sebelum aktiviti, atau 1 kapsul setiap 48 jam untuk sokongan stamina berterusan.',
    primaryFocusEn: 'Rapid Evening Readiness, Physical Endurance & Andean-Malaysian Adaptogenic Drive',
    primaryFocusMs: 'Kesediaan Tenaga Malam, Ketahanan Fizikal & Sokongan Adaptogenik',
    keyBotanicals: [
      'Eurycoma longifolia (Tongkat Ali Root Extract 100:1)',
      'Lepidium meyenii (Black Peruvian Maca Root)',
      'Panax ginseng (Korean Red Ginseng Standardized Ginsenosides)',
      'Epimedium sagittatum (Horny Goat Weed Icariin Complex)',
      'L-Arginine HCl',
    ],
    priceMYR: '159.00',
    sku: 'ONYX-HM-20MY',
    mpn: 'OM-HM-2026-MY',
    gtin13: '9550000102011',
    imageStageWebp: `${SCHEMA_DOMAIN}/assets/products/horsemen-stage.webp`,
    imageStagePng: `${SCHEMA_DOMAIN}/assets/products/horsemen-stage.png`,
    imagePortraitWebp: `${SCHEMA_DOMAIN}/assets/products/horsemen-portrait.webp`,
    imagePortraitPng: `${SCHEMA_DOMAIN}/assets/products/horsemen-portrait.png`,
    imageCutoutWebp: `${SCHEMA_DOMAIN}/assets/products/horsemen-cutout.webp`,
    imageCutoutPng: `${SCHEMA_DOMAIN}/assets/products/horsemen-cutout.png`,
  },
  'hammer-of-thor': {
    id: 'hammer-of-thor',
    slug: 'hammer-of-thor',
    name: 'Hammer of Thor',
    fullTitleEn: 'Hammer of Thor — Nordic-Tropical Vitality & Sustained Physical Stamina Complex (20 Capsules)',
    fullTitleMs: 'Hammer of Thor — Kompleks Kecergasan & Ketahanan Fizikal Lelaki Dewasa (20 Kapsul)',
    descriptionEn:
      'Hammer of Thor by Onyxmen Malaysia is a 20-capsule botanical dietary supplement combining standardized Tribulus terrestris saponins, Malaysian Tongkat Ali root, Ashwagandha root extract, Mucuna pruriens, and chelated Zinc to support physical stamina conditioning, muscular recovery, and sustained male vitality.',
    descriptionMs:
      'Hammer of Thor oleh Onyxmen Malaysia ialah suplemen pemakanan botani 20 kapsul yang menggabungkan ekstrak Tribulus terrestris, Tongkat Ali Malaysia, Ashwagandha, Mucuna pruriens, dan Zink untuk menyokong ketahanan stamina fizikal, pemulihan tenaga, dan keyakinan lelaki dewasa.',
    disambiguatingDescriptionEn:
      'Oral botanical and mineral dietary supplement in a 20-capsule bottle for adult men (18+) in Malaysia. Not a hardware tool or novelty replica.',
    disambiguatingDescriptionMs:
      'Suplemen pemakanan kapsul botani dan mineral (20 kapsul sebotol) untuk stamina lelaki dewasa (18+) di Malaysia.',
    capsuleCount: 20,
    dosageProtocolEn:
      'Take 1 capsule daily after an evening meal with 250ml water for progressive stamina conditioning.',
    dosageProtocolMs:
      'Ambil 1 kapsul sehari selepas makan malam bersama 250ml air untuk penyediaan tenaga berperingkat.',
    primaryFocusEn: 'Physical Stamina Conditioning, Muscular Recovery & Evening Vitality Confidence',
    primaryFocusMs: 'Ketahanan Stamina Fizikal, Pemulihan Tenaga & Keyakinan Malam',
    keyBotanicals: [
      'Tribulus terrestris (Standardized Saponin Extract)',
      'Eurycoma longifolia (Malaysian Tongkat Ali Root)',
      'Withania somnifera (Ashwagandha KSM-66 Equivalent Root Extract)',
      'Mucuna pruriens (Velvet Bean Phytocomplex)',
      'Zinc Chelate & Selenium Bio-Cofactors',
    ],
    priceMYR: '159.00',
    sku: 'ONYX-HT-20MY',
    mpn: 'OM-HT-2026-MY',
    gtin13: '9550000102028',
    imageStageWebp: `${SCHEMA_DOMAIN}/assets/products/hammer-of-thor-stage.webp`,
    imageStagePng: `${SCHEMA_DOMAIN}/assets/products/hammer-of-thor-stage.png`,
    imagePortraitWebp: `${SCHEMA_DOMAIN}/assets/products/hammer-of-thor-portrait.webp`,
    imagePortraitPng: `${SCHEMA_DOMAIN}/assets/products/hammer-of-thor-portrait.png`,
    imageCutoutWebp: `${SCHEMA_DOMAIN}/assets/products/hammer-of-thor-cutout.webp`,
    imageCutoutPng: `${SCHEMA_DOMAIN}/assets/products/hammer-of-thor-cutout.png`,
  },
  'grow-xl': {
    id: 'grow-xl',
    slug: 'grow-xl',
    name: 'Grow XL',
    fullTitleEn: 'Grow XL — 30-Day Daily Botanical Vitality & Micro-Circulation Nutrition Protocol (30 Capsules)',
    fullTitleMs: 'Grow XL — Protokol Nutrisi Kecergasan & Peredaran Mikro Harian 30 Kapsul',
    descriptionEn:
      'Grow XL by Onyxmen Malaysia is a 30-capsule daily botanical dietary supplement formulated with Aged Panax Ginseng, Ginkgo Biloba flavone glycosides, Saw Palmetto berry extract, Muira Puama, L-Citrulline Malate, and Vitamin B3 (Niacin) for a complete 30-day cycle of male baseline vitality and micro-circulation nutrition.',
    descriptionMs:
      'Grow XL oleh Onyxmen Malaysia ialah suplemen pemakanan botani harian 30 kapsul yang dirumus dengan Panax Ginseng, Ginkgo Biloba, Saw Palmetto, Muira Puama, L-Citrulline Malate, dan Vitamin B3 untuk kitaran lengkap 30 hari sokongan nutrisi aliran mikro dan kecergasan lelaki dewasa.',
    disambiguatingDescriptionEn:
      'Oral 30-capsule botanical and amino-acid dietary supplement for adult men (18+) in Malaysia. Not a plant fertilizer or agricultural product.',
    disambiguatingDescriptionMs:
      'Suplemen kapsul pemakanan botani dan asid amino (30 kapsul sebotol) untuk kesihatan dan kecergasan lelaki dewasa (18+) di Malaysia.',
    capsuleCount: 30,
    dosageProtocolEn:
      'Take 1 capsule every morning after breakfast for a full 30-day cycle of daily botanical nourishment.',
    dosageProtocolMs:
      'Ambil 1 kapsul setiap pagi selepas sarapan untuk kitaran lengkap 30 hari sokongan nutrisi botani.',
    primaryFocusEn: '30-Day Daily Baseline Vitality, Vascular Nutrient Delivery & Sustained Male Energy',
    primaryFocusMs: 'Kecergasan Harian 30 Hari, Sokongan Aliran Nutrien & Tenaga Lelaki Sepanjang Hari',
    keyBotanicals: [
      'Panax ginseng (Aged Root Extract)',
      'Ginkgo biloba (Standardized Flavone Glycosides)',
      'Serenoa repens (Saw Palmetto Berry Extract)',
      'Muira puama (Potency Wood Bark Extract)',
      'L-Citrulline Malate & Vitamin B3 (Niacin)',
    ],
    priceMYR: '159.00',
    sku: 'ONYX-GX-30MY',
    mpn: 'OM-GX-2026-MY',
    gtin13: '9550000102035',
    imageStageWebp: `${SCHEMA_DOMAIN}/assets/products/grow-xl-stage.webp`,
    imageStagePng: `${SCHEMA_DOMAIN}/assets/products/grow-xl-stage.png`,
    imagePortraitWebp: `${SCHEMA_DOMAIN}/assets/products/grow-xl-portrait.webp`,
    imagePortraitPng: `${SCHEMA_DOMAIN}/assets/products/grow-xl-portrait.png`,
    imageCutoutWebp: `${SCHEMA_DOMAIN}/assets/products/grow-xl-cutout.webp`,
    imageCutoutPng: `${SCHEMA_DOMAIN}/assets/products/grow-xl-cutout.png`,
  },
  'magnum-pump-xr': {
    id: 'magnum-pump-xr',
    slug: 'magnum-pump-xr',
    name: 'Magnum Pump XR',
    fullTitleEn: 'Magnum Pump XR — Extended-Release L-Arginine, L-Citrulline & Nitric Oxide Vascular Complex (30 Capsules)',
    fullTitleMs: 'Magnum Pump XR — Kompleks L-Arginine, L-Citrulline & Sokongan Nitrik Oksida (30 Kapsul)',
    descriptionEn:
      'Magnum Pump XR by Onyxmen Malaysia is an oral 30-capsule amino-acid and botanical dietary supplement formulated with L-Arginine Alpha-Ketoglutarate (AAKG), L-Citrulline, Concentrated Beetroot Nitrate Extract, Thai Black Ginger (Kaempferia parviflora / Kunyit Hitam), and Maritime Pine Bark to support nitric oxide precursor pathways, workout vascularity, and adult men’s physical stamina. Strictly an oral nutritional capsule supplement—not a mechanical, vacuum, or industrial pump.',
    descriptionMs:
      'Magnum Pump XR oleh Onyxmen Malaysia ialah suplemen kapsul pemakanan asid amino dan botani (30 kapsul) yang dirumus dengan L-Arginine Alpha-Ketoglutarate (AAKG), L-Citrulline, Ekstrak Nitrat Ubi Bit, Kunyit Hitam (Kaempferia parviflora), dan Kulit Pain Maritim untuk menyokong laluan nitrik oksida, aliran vaskular senaman, dan stamina fizikal lelaki dewasa. Ini ialah suplemen kapsul nutrisi makan—bukan pam mekanikal, vakum, atau peralatan industri.',
    disambiguatingDescriptionEn:
      'Botanical & Amino-Acid Oral Capsule Dietary Supplement (30 Capsules) for Adult Men’s Nitric Oxide & Vascular Stamina Support. Explicitly NOT an industrial pump, water pump, fluid pump, or mechanical vacuum device.',
    disambiguatingDescriptionMs:
      'Suplemen Kapsul Pemakanan Botani & Asid Amino (30 Kapsul) untuk Sokongan Nitrik Oksida & Stamina Lelaki Dewasa. Bukan pam air, pam vakum, atau alat mekanikal industri (not an industrial or mechanical pump device).',
    capsuleCount: 30,
    dosageProtocolEn:
      'Take 1 capsule 30–45 minutes before gym training or evening physical activity with 300ml water.',
    dosageProtocolMs:
      'Ambil 1 kapsul 30–45 minit sebelum senaman atau aktiviti malam bersama 300ml air.',
    primaryFocusEn: 'Nitric Oxide Precursor Support, Gym & Evening Vascular Pump, Peak Physical Output',
    primaryFocusMs: 'Sokongan Prekursor Nitrik Oksida, Aliran Fizikal Optimum & Prestasi Senaman/Malam',
    keyBotanicals: [
      'L-Arginine Alpha-Ketoglutarate (AAKG)',
      'L-Citrulline Pure Amino Acid',
      'Beta vulgaris (Concentrated Beetroot Nitrate Extract)',
      'Kaempferia parviflora (Thai Black Ginger / Kunyit Hitam Extract)',
      'Pinus pinaster (Maritime Pine Bark Proanthocyanidins)',
    ],
    priceMYR: '159.00',
    sku: 'ONYX-MP-30MY',
    mpn: 'OM-MP-2026-MY',
    gtin13: '9550000102042',
    imageStageWebp: `${SCHEMA_DOMAIN}/assets/products/magnum-pump-xr-stage.webp`,
    imageStagePng: `${SCHEMA_DOMAIN}/assets/products/magnum-pump-xr-stage.png`,
    imagePortraitWebp: `${SCHEMA_DOMAIN}/assets/products/magnum-pump-xr-portrait.webp`,
    imagePortraitPng: `${SCHEMA_DOMAIN}/assets/products/magnum-pump-xr-portrait.png`,
    imageCutoutWebp: `${SCHEMA_DOMAIN}/assets/products/magnum-pump-xr-cutout.webp`,
    imageCutoutPng: `${SCHEMA_DOMAIN}/assets/products/magnum-pump-xr-cutout.png`,
  },
};

export const MALAYSIA_STATE_HUBS_CATALOG = {
  'kuala-lumpur': {
    slug: 'kuala-lumpur',
    stateNameEn: 'Kuala Lumpur',
    stateNameMs: 'Wilayah Persekutuan Kuala Lumpur',
    zone: 'KLANG_VALLEY_SAMEDAY',
    cities: ['KLCC', 'Bukit Bintang', 'Bangsar', 'Mont Kiara', 'Cheras', 'Ampang', 'Setapak', 'Sri Petaling'],
    deliveryWindowEn: 'Same-Day 3–5 Hour Discreet Runner or 1 Business Day Express Courier',
    deliveryWindowMs: 'Penghantar Rahsia Hari Sama (3–5 Jam) atau Kurier Ekspres 1 Hari Bekerja',
    couriers: ['Klang Valley Discreet Private Runner', 'NinjaVan Malaysia Discreet', 'J&T Express VIP'],
    pageUrl: `${SCHEMA_DOMAIN}/malaysia-delivery/kuala-lumpur/`,
  },
  selangor: {
    slug: 'selangor',
    stateNameEn: 'Selangor',
    stateNameMs: 'Selangor Darul Ehsan',
    zone: 'KLANG_VALLEY_SAMEDAY',
    cities: ['Petaling Jaya', 'Subang Jaya', 'Shah Alam', 'Damansara', 'Puchong', 'Klang', 'Kajang', 'Cyberjaya'],
    deliveryWindowEn: 'Same-Day 3–5 Hour Discreet Runner or 1 Business Day Express Courier',
    deliveryWindowMs: 'Penghantar Rahsia Hari Sama (3–5 Jam) atau Kurier Ekspres 1 Hari Bekerja',
    couriers: ['Klang Valley Discreet Private Runner', 'NinjaVan Malaysia Discreet', 'PosLaju Priority'],
    pageUrl: `${SCHEMA_DOMAIN}/malaysia-delivery/selangor/`,
  },
  'pulau-pinang': {
    slug: 'penang',
    stateNameEn: 'Penang (Pulau Pinang)',
    stateNameMs: 'Pulau Pinang',
    zone: 'WEST_MALAYSIA',
    cities: ['George Town', 'Bayan Lepas', 'Jelutong', 'Butterworth', 'Bukit Mertajam', 'Seberang Perai'],
    deliveryWindowEn: '1–2 Business Days Peninsular Express Discreet Courier',
    deliveryWindowMs: '1–2 Hari Bekerja Kurier Ekspres Rahsia Semenanjung',
    couriers: ['NinjaVan Malaysia Discreet', 'J&T Express VIP', 'PosLaju Priority'],
    pageUrl: `${SCHEMA_DOMAIN}/malaysia-delivery/penang/`,
  },
  johor: {
    slug: 'johor-bahru',
    stateNameEn: 'Johor',
    stateNameMs: 'Johor Darul Ta’zim',
    zone: 'WEST_MALAYSIA',
    cities: ['Johor Bahru', 'Iskandar Puteri', 'Skudai', 'Batu Pahat', 'Muar', 'Kluang', 'Kulai'],
    deliveryWindowEn: '1–2 Business Days Peninsular Express Discreet Courier',
    deliveryWindowMs: '1–2 Hari Bekerja Kurier Ekspres Rahsia Semenanjung',
    couriers: ['NinjaVan Malaysia Discreet', 'J&T Express VIP', 'PosLaju Priority'],
    pageUrl: `${SCHEMA_DOMAIN}/malaysia-delivery/johor-bahru/`,
  },
  perak: {
    slug: 'perak-ipoh',
    stateNameEn: 'Perak',
    stateNameMs: 'Perak Darul Ridzuan',
    zone: 'WEST_MALAYSIA',
    cities: ['Ipoh', 'Taiping', 'Sitiawan', 'Manjung', 'Teluk Intan', 'Kampar'],
    deliveryWindowEn: '1–2 Business Days Peninsular Express Discreet Courier',
    deliveryWindowMs: '1–2 Hari Bekerja Kurier Ekspres Rahsia Semenanjung',
    couriers: ['NinjaVan Malaysia Discreet', 'J&T Express VIP', 'PosLaju Priority'],
    pageUrl: `${SCHEMA_DOMAIN}/malaysia-delivery/perak-ipoh/`,
  },
  melaka: {
    slug: 'melaka',
    stateNameEn: 'Melaka',
    stateNameMs: 'Melaka',
    zone: 'WEST_MALAYSIA',
    cities: ['Melaka City (Bandaraya Melaka)', 'Ayer Keroh', 'Batu Berendam', 'Alor Gajah', 'Jasin'],
    deliveryWindowEn: '1–2 Business Days Peninsular Express Discreet Courier',
    deliveryWindowMs: '1–2 Hari Bekerja Kurier Ekspres Rahsia Semenanjung',
    couriers: ['NinjaVan Malaysia Discreet', 'J&T Express VIP', 'PosLaju Priority'],
    pageUrl: `${SCHEMA_DOMAIN}/malaysia-delivery/melaka/`,
  },
  'negeri-sembilan': {
    slug: 'negeri-sembilan-seremban',
    stateNameEn: 'Negeri Sembilan',
    stateNameMs: 'Negeri Sembilan Darul Khusus',
    zone: 'WEST_MALAYSIA',
    cities: ['Seremban', 'Senawang', 'Nilai', 'Port Dickson', 'Tampin'],
    deliveryWindowEn: '1–2 Business Days Peninsular Express Discreet Courier',
    deliveryWindowMs: '1–2 Hari Bekerja Kurier Ekspres Rahsia Semenanjung',
    couriers: ['NinjaVan Malaysia Discreet', 'J&T Express VIP', 'PosLaju Priority'],
    pageUrl: `${SCHEMA_DOMAIN}/malaysia-delivery/negeri-sembilan-seremban/`,
  },
  pahang: {
    slug: 'pahang-kuantan',
    stateNameEn: 'Pahang',
    stateNameMs: 'Pahang Darul Makmur',
    zone: 'WEST_MALAYSIA',
    cities: ['Kuantan', 'Temerloh', 'Bentong', 'Pekan', 'Cameron Highlands'],
    deliveryWindowEn: '1–2 Business Days Peninsular Express Discreet Courier',
    deliveryWindowMs: '1–2 Hari Bekerja Kurier Ekspres Rahsia Semenanjung',
    couriers: ['NinjaVan Malaysia Discreet', 'J&T Express VIP', 'PosLaju Priority'],
    pageUrl: `${SCHEMA_DOMAIN}/malaysia-delivery/pahang-kuantan/`,
  },
  kedah: {
    slug: 'kedah-alor-setar',
    stateNameEn: 'Kedah',
    stateNameMs: 'Kedah Darul Aman',
    zone: 'WEST_MALAYSIA',
    cities: ['Alor Setar', 'Sungai Petani', 'Kulim', 'Jitra', 'Langkawi'],
    deliveryWindowEn: '1–2 Business Days Peninsular Express Discreet Courier',
    deliveryWindowMs: '1–2 Hari Bekerja Kurier Ekspres Rahsia Semenanjung',
    couriers: ['NinjaVan Malaysia Discreet', 'J&T Express VIP', 'PosLaju Priority'],
    pageUrl: `${SCHEMA_DOMAIN}/malaysia-delivery/kedah-alor-setar/`,
  },
  kelantan: {
    slug: 'kelantan-kota-bharu',
    stateNameEn: 'Kelantan',
    stateNameMs: 'Kelantan Darul Naim',
    zone: 'WEST_MALAYSIA',
    cities: ['Kota Bharu', 'Kubang Kerian', 'Pasir Mas', 'Tanah Merah', 'Machang'],
    deliveryWindowEn: '1–2 Business Days Peninsular Express Discreet Courier',
    deliveryWindowMs: '1–2 Hari Bekerja Kurier Ekspres Rahsia Semenanjung',
    couriers: ['NinjaVan Malaysia Discreet', 'J&T Express VIP', 'PosLaju Priority'],
    pageUrl: `${SCHEMA_DOMAIN}/malaysia-delivery/kelantan-kota-bharu/`,
  },
  terengganu: {
    slug: 'terengganu-kuala-terengganu',
    stateNameEn: 'Terengganu',
    stateNameMs: 'Terengganu Darul Iman',
    zone: 'WEST_MALAYSIA',
    cities: ['Kuala Terengganu', 'Kemaman', 'Dungun', 'Besut', 'Marang'],
    deliveryWindowEn: '1–2 Business Days Peninsular Express Discreet Courier',
    deliveryWindowMs: '1–2 Hari Bekerja Kurier Ekspres Rahsia Semenanjung',
    couriers: ['NinjaVan Malaysia Discreet', 'J&T Express VIP', 'PosLaju Priority'],
    pageUrl: `${SCHEMA_DOMAIN}/malaysia-delivery/terengganu-kuala-terengganu/`,
  },
  perlis: {
    slug: 'perlis-kangar',
    stateNameEn: 'Perlis',
    stateNameMs: 'Perlis Indera Kayangan',
    zone: 'WEST_MALAYSIA',
    cities: ['Kangar', 'Arau', 'Kuala Perlis', 'Padang Besar'],
    deliveryWindowEn: '1–2 Business Days Peninsular Express Discreet Courier',
    deliveryWindowMs: '1–2 Hari Bekerja Kurier Ekspres Rahsia Semenanjung',
    couriers: ['NinjaVan Malaysia Discreet', 'J&T Express VIP', 'PosLaju Priority'],
    pageUrl: `${SCHEMA_DOMAIN}/malaysia-delivery/perlis-kangar/`,
  },
  sabah: {
    slug: 'sabah-kota-kinabalu',
    stateNameEn: 'Sabah',
    stateNameMs: 'Sabah',
    zone: 'EAST_MALAYSIA',
    cities: ['Kota Kinabalu', 'Sandakan', 'Tawau', 'Lahad Datu', 'Keningau', 'Penampang'],
    deliveryWindowEn: '2–4 Business Days Discreet Air Freight Parcel',
    deliveryWindowMs: '2–4 Hari Bekerja Bungkusan Udara Rahsia',
    couriers: ['PosLaju Air Freight', 'J&T Express Borneo Air', 'DHL eCommerce Malaysia'],
    pageUrl: `${SCHEMA_DOMAIN}/malaysia-delivery/sabah-kota-kinabalu/`,
  },
  sarawak: {
    slug: 'sarawak-kuching',
    stateNameEn: 'Sarawak',
    stateNameMs: 'Sarawak',
    zone: 'EAST_MALAYSIA',
    cities: ['Kuching', 'Miri', 'Sibu', 'Bintulu', 'Samarahan', 'Sri Aman'],
    deliveryWindowEn: '2–4 Business Days Discreet Air Freight Parcel',
    deliveryWindowMs: '2–4 Hari Bekerja Bungkusan Udara Rahsia',
    couriers: ['PosLaju Air Freight', 'J&T Express Borneo Air', 'DHL eCommerce Malaysia'],
    pageUrl: `${SCHEMA_DOMAIN}/malaysia-delivery/sarawak-kuching/`,
  },
  putrajaya: {
    slug: 'putrajaya',
    stateNameEn: 'Putrajaya',
    stateNameMs: 'Wilayah Persekutuan Putrajaya',
    zone: 'KLANG_VALLEY_SAMEDAY',
    cities: ['Precinct 1–20 Putrajaya', 'IOI Resort City', 'Cyberjaya Border'],
    deliveryWindowEn: 'Same-Day 3–5 Hour Discreet Runner or 1 Business Day Express Courier',
    deliveryWindowMs: 'Penghantar Rahsia Hari Sama (3–5 Jam) atau Kurier Ekspres 1 Hari Bekerja',
    couriers: ['Klang Valley Discreet Private Runner', 'NinjaVan Malaysia Discreet', 'PosLaju Priority'],
    pageUrl: `${SCHEMA_DOMAIN}/malaysia-delivery/putrajaya/`,
  },
  labuan: {
    slug: 'labuan',
    stateNameEn: 'Labuan',
    stateNameMs: 'Wilayah Persekutuan Labuan',
    zone: 'EAST_MALAYSIA',
    cities: ['Victoria (Bandar Labuan)', 'Rancha-Rancha', 'Labuan Financial Park'],
    deliveryWindowEn: '2–4 Business Days Discreet Air Freight Parcel',
    deliveryWindowMs: '2–4 Hari Bekerja Bungkusan Udara Rahsia',
    couriers: ['PosLaju Air Freight', 'J&T Express Borneo Air', 'DHL eCommerce Malaysia'],
    pageUrl: `${SCHEMA_DOMAIN}/malaysia-delivery/labuan/`,
  },
};

export function buildOrganizationSchema() {
  return {
    '@type': ['Organization', 'OnlineStore'],
    '@id': ORG_ID,
    name: 'Onyxmen Malaysia',
    legalName: "Onyxmen Malaysia Apothecary & Men's Vitality Vault",
    alternateName: 'Onyxmen',
    url: SCHEMA_DOMAIN,
    email: 'sales@onyxmen.my',
    logo: {
      '@type': 'ImageObject',
      '@id': `${SCHEMA_DOMAIN}/#logo`,
      url: `${SCHEMA_DOMAIN}/assets/products/onyxman-lineup-hero.webp`,
      contentUrl: `${SCHEMA_DOMAIN}/assets/products/onyxman-lineup-hero.webp`,
      width: 1920,
      height: 1080,
      caption: 'Onyxmen Malaysia — Architectural Botanical Apothecary Collection',
    },
    image: [
      `${SCHEMA_DOMAIN}/assets/products/onyxman-lineup-hero.webp`,
      `${SCHEMA_DOMAIN}/assets/products/onyxman-lineup-hero.png`,
    ],
    description:
      'Onyxmen Malaysia is an architectural botanical apothecary specializing in standardized adult men’s vitality, stamina, and nitric oxide dietary supplements (Horsemen, Hammer of Thor, Grow XL, and Magnum Pump XR) at RM 159 per bottle with 100% discreet unmarked delivery across all 16 states and federal territories in Malaysia.',
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kuala Lumpur',
      addressRegion: 'Wilayah Persekutuan Kuala Lumpur',
      postalCode: '50450',
      addressCountry: 'MY',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Malaysia',
      identifier: 'MY',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'Customer Support & Discreet Order Desk',
        email: 'sales@onyxmen.my',
        url: `${SCHEMA_DOMAIN}/contact/`,
        availableLanguage: ['en', 'ms', 'en-MY', 'ms-MY'],
        areaServed: 'MY',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '09:00',
          closes: '23:00',
        },
      },
      {
        '@type': 'ContactPoint',
        contactType: 'Botanical Formulation Information & Concierge Desk',
        email: 'info@onyxmen.my',
        url: `${SCHEMA_DOMAIN}/contact/`,
        availableLanguage: ['en', 'ms', 'en-MY', 'ms-MY'],
        areaServed: 'MY',
      },
    ],
    knowsAbout: [
      "Botanical Men's Vitality Supplements",
      'Tongkat Ali (Eurycoma longifolia)',
      'Tribulus Terrestris',
      'Maca Root (Lepidium meyenii)',
      'L-Arginine',
      'L-Citrulline Nitric Oxide Precursors',
      'Panax Ginseng Standardized Ginsenosides',
      'Kaempferia parviflora (Kunyit Hitam / Black Ginger)',
    ],
    currenciesAccepted: OFFICIAL_CURRENCY,
    paymentAccepted: 'FPX Online Banking, DuitNow Instant QR, Cash on Delivery (COD)',
    priceRange: 'RM 159 - RM 477',
    hasMerchantReturnPolicy: {
      '@id': RETURN_POLICY_MY_ID,
    },
  };
}

export function buildWebSiteSchema(lang = 'en-MY') {
  const locale = normalizeSchemaLocale(lang);
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SCHEMA_DOMAIN,
    name: 'Onyxmen Malaysia',
    alternateName:
      locale === 'ms-MY'
        ? 'Onyxmen.my — Apotekari Botani Eksklusif Stamina & Kecergasan Lelaki Dewasa Malaysia'
        : "Onyxmen.my — Architectural Botanical Apothecary for Adult Men's Stamina & Vitality in Malaysia",
    inLanguage: locale,
    publisher: {
      '@id': ORG_ID,
    },
    about: {
      '@id': ORG_ID,
    },
  };
}

export function buildShippingDetailsNode() {
  return {
    '@type': 'OfferShippingDetails',
    '@id': SHIPPING_MY_ID,
    shippingRate: {
      '@type': 'MonetaryAmount',
      value: '0.00',
      currency: OFFICIAL_CURRENCY,
    },
    shippingDestination: {
      '@type': 'DefinedRegion',
      addressCountry: 'MY',
      addressRegion: [
        'Kuala Lumpur',
        'Selangor',
        'Pulau Pinang',
        'Johor',
        'Perak',
        'Melaka',
        'Negeri Sembilan',
        'Pahang',
        'Kedah',
        'Kelantan',
        'Terengganu',
        'Perlis',
        'Sabah',
        'Sarawak',
        'Putrajaya',
        'Labuan',
      ],
    },
    deliveryTime: {
      '@type': 'ShippingDeliveryTime',
      handlingTime: {
        '@type': 'QuantitativeValue',
        minValue: 0,
        maxValue: 1,
        unitCode: 'DAY',
      },
      transitTime: {
        '@type': 'QuantitativeValue',
        minValue: 1,
        maxValue: 3,
        unitCode: 'DAY',
      },
    },
    shippingLabel:
      '100% Unmarked Discreet Parcel • Sender listed as OM Fulfilment Logistics • Free Shipping across West & East Malaysia Protocols',
  };
}

export function buildReturnPolicyNode() {
  return {
    '@type': 'MerchantReturnPolicy',
    '@id': RETURN_POLICY_MY_ID,
    applicableCountry: 'MY',
    returnPolicyCountry: 'MY',
    returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
    merchantReturnDays: 14,
    returnMethod: 'https://schema.org/ReturnByMail',
    returnFees: 'https://schema.org/FreeReturn',
    itemCondition: 'https://schema.org/NewCondition',
    description:
      '14-day unopened tamper-evident holographic seal guarantee across Malaysia. Contact sales@onyxmen.my or info@onyxmen.my for priority replacement or return assistance.',
  };
}

export function buildShippingAndReturnNodes() {
  const shippingDetails = buildShippingDetailsNode();
  const returnPolicy = buildReturnPolicyNode();
  const nodes = [shippingDetails, returnPolicy];
  Object.defineProperty(nodes, 'shippingDetails', {
    value: shippingDetails,
    enumerable: false,
  });
  Object.defineProperty(nodes, 'returnPolicy', {
    value: returnPolicy,
    enumerable: false,
  });
  return nodes;
}

export function resolveProductInput(productInput) {
  if (typeof productInput === 'string') {
    const key = productInput.toLowerCase().trim();
    const found = DEFAULT_PRODUCTS_CATALOG[key];
    if (found) return found;
    throw new Error(`Unknown product slug passed to schema generator: ${productInput}`);
  }

  const slugKey = (productInput.slug || productInput.id || 'horsemen').toLowerCase().trim();
  const fallback = DEFAULT_PRODUCTS_CATALOG[slugKey] || DEFAULT_PRODUCTS_CATALOG.horsemen;

  return {
    id: productInput.id ?? fallback.id,
    slug: productInput.slug ?? fallback.slug,
    name: productInput.name ?? fallback.name,
    fullTitleEn: productInput.fullTitleEn ?? fallback.fullTitleEn,
    fullTitleMs: productInput.fullTitleMs ?? fallback.fullTitleMs,
    descriptionEn: productInput.descriptionEn ?? fallback.descriptionEn,
    descriptionMs: productInput.descriptionMs ?? fallback.descriptionMs,
    disambiguatingDescriptionEn:
      productInput.disambiguatingDescriptionEn ?? fallback.disambiguatingDescriptionEn,
    disambiguatingDescriptionMs:
      productInput.disambiguatingDescriptionMs ?? fallback.disambiguatingDescriptionMs,
    capsuleCount: productInput.capsuleCount ?? fallback.capsuleCount,
    dosageProtocolEn: productInput.dosageProtocolEn ?? fallback.dosageProtocolEn,
    dosageProtocolMs: productInput.dosageProtocolMs ?? fallback.dosageProtocolMs,
    primaryFocusEn: productInput.primaryFocusEn ?? fallback.primaryFocusEn,
    primaryFocusMs: productInput.primaryFocusMs ?? fallback.primaryFocusMs,
    keyBotanicals:
      productInput.keyBotanicals && productInput.keyBotanicals.length > 0
        ? productInput.keyBotanicals
        : fallback.keyBotanicals,
    priceMYR: OFFICIAL_PRICE_MYR,
    sku: productInput.sku ?? fallback.sku,
    mpn: productInput.mpn ?? fallback.mpn,
    gtin13: productInput.gtin13 ?? fallback.gtin13,
    imageStageWebp:
      productInput.imageStageWebp ?? `${SCHEMA_DOMAIN}/assets/products/${slugKey}-stage.webp`,
    imageStagePng:
      productInput.imageStagePng ?? `${SCHEMA_DOMAIN}/assets/products/${slugKey}-stage.png`,
    imagePortraitWebp:
      productInput.imagePortraitWebp ?? `${SCHEMA_DOMAIN}/assets/products/${slugKey}-portrait.webp`,
    imagePortraitPng:
      productInput.imagePortraitPng ?? `${SCHEMA_DOMAIN}/assets/products/${slugKey}-portrait.png`,
    imageCutoutWebp:
      productInput.imageCutoutWebp ?? `${SCHEMA_DOMAIN}/assets/products/${slugKey}-cutout.webp`,
    imageCutoutPng:
      productInput.imageCutoutPng ?? `${SCHEMA_DOMAIN}/assets/products/${slugKey}-cutout.png`,
  };
}

export function buildProductGraphSchema(productInput, lang = 'en-MY') {
  const locale = normalizeSchemaLocale(lang);
  const prod = resolveProductInput(productInput);
  const isMs = locale === 'ms-MY';

  const productPath = isMs ? `/ms/produk/${prod.slug}/` : `/products/${prod.slug}/`;
  const productUrl = `${SCHEMA_DOMAIN}${productPath}`;
  const productNodeId = `${productUrl}#product`;
  const productGroupId = `${productUrl}#product-group`;

  const shippingDetailsFull = buildShippingDetailsNode();
  const returnPolicyFull = buildReturnPolicyNode();

  const images = [
    prod.imageStageWebp,
    prod.imageStagePng,
    prod.imagePortraitWebp,
    prod.imagePortraitPng,
    prod.imageCutoutWebp,
    prod.imageCutoutPng,
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

  const singleBottleOffer = {
    '@type': 'Offer',
    '@id': `${productUrl}#offer-1-bottle`,
    url: productUrl,
    name: isMs
      ? `${prod.name} — 1 Botol (${prod.capsuleCount} Kapsul)`
      : `${prod.name} — 1 Bottle (${prod.capsuleCount} Capsules)`,
    sku: prod.sku,
    price: OFFICIAL_PRICE_MYR,
    priceCurrency: OFFICIAL_CURRENCY,
    priceValidUntil: OFFICIAL_PRICE_VALID_UNTIL,
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
    eligibleRegion: {
      '@type': 'Country',
      name: 'Malaysia',
      identifier: 'MY',
    },
    seller: sellerNode,
    shippingDetails: shippingDetailsFull,
    hasMerchantReturnPolicy: returnPolicyFull,
  };

  const variantTiers = [
    {
      bottles: 1,
      price: '159.00',
      skuSuffix: '1B',
      nameEn: `${prod.name} — 1 Bottle Single Cycle Reserve (${prod.capsuleCount} Capsules)`,
      nameMs: `${prod.name} — Pakej 1 Botol Satu Kitaran (${prod.capsuleCount} Kapsul)`,
    },
    {
      bottles: 2,
      price: '318.00',
      skuSuffix: '2B',
      nameEn: `${prod.name} — 2 Bottles Dual Momentum Protocol (${prod.capsuleCount * 2} Capsules)`,
      nameMs: `${prod.name} — Pakej 2 Botol Dwi-Momentum (${prod.capsuleCount * 2} Kapsul)`,
    },
    {
      bottles: 3,
      price: '477.00',
      skuSuffix: '3B',
      nameEn: `${prod.name} — 3 Bottles Complete 90-Day Mastery Vault (${prod.capsuleCount * 3} Capsules)`,
      nameMs: `${prod.name} — Pakej 3 Botol Lengkap 90 Hari (${prod.capsuleCount * 3} Kapsul)`,
    },
  ];

  const hasVariantNodes = variantTiers.map((tier) => ({
    '@type': ['Product', 'DietarySupplement'],
    '@id': `${productUrl}#variant-${tier.bottles}-bottle`,
    name: isMs ? tier.nameMs : tier.nameEn,
    sku: `${prod.sku}-${tier.skuSuffix}`,
    mpn: `${prod.mpn}-${tier.skuSuffix}`,
    gtin13: prod.gtin13,
    image: images,
    brand: brandNode,
    isVariantOf: {
      '@id': productGroupId,
    },
    size: `${tier.bottles} ${tier.bottles === 1 ? 'Bottle' : 'Bottles'} (${prod.capsuleCount * tier.bottles} Capsules)`,
    activeIngredient: prod.keyBotanicals.join(', '),
    targetPopulation: 'Adult Men',
    isProprietary: false,
    legalStatus: 'Botanical Dietary Supplement',
    offers: {
      '@type': 'Offer',
      '@id': `${productUrl}#offer-${tier.bottles}-bottle`,
      url: productUrl,
      sku: `${prod.sku}-${tier.skuSuffix}`,
      price: tier.price,
      priceCurrency: OFFICIAL_CURRENCY,
      priceValidUntil: OFFICIAL_PRICE_VALID_UNTIL,
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      eligibleRegion: {
        '@type': 'Country',
        name: 'Malaysia',
        identifier: 'MY',
      },
      seller: sellerNode,
      shippingDetails: shippingDetailsFull,
      hasMerchantReturnPolicy: returnPolicyFull,
    },
  }));

  const mainProductNode = {
    '@type': ['Product', 'DietarySupplement'],
    '@id': productNodeId,
    name: isMs ? prod.fullTitleMs : prod.fullTitleEn,
    alternateName: prod.name,
    description: isMs ? prod.descriptionMs : prod.descriptionEn,
    disambiguatingDescription: isMs
      ? prod.disambiguatingDescriptionMs
      : prod.disambiguatingDescriptionEn,
    url: productUrl,
    inLanguage: locale,
    sku: prod.sku,
    mpn: prod.mpn,
    gtin13: prod.gtin13,
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
    activeIngredient: prod.keyBotanicals,
    nonProprietaryName: prod.keyBotanicals.join('; '),
    recommendedIntake: {
      '@type': 'RecommendedDoseSchedule',
      doseValue: 1,
      doseUnit: isMs ? 'Kapsul' : 'Capsule',
      frequency: isMs ? prod.dosageProtocolMs : prod.dosageProtocolEn,
      targetPopulation: 'Adult Men',
    },
    targetPopulation: 'Adult Men',
    isProprietary: false,
    legalStatus: 'Botanical Dietary Supplement',
    safetyConsideration: isMs
      ? 'Suplemen pemakanan botani dan asid amino untuk lelaki dewasa (18+). Tidak bertujuan untuk mendiagnosis, merawat, menyembuhkan, atau mencegah sebarang penyakit.'
      : 'Botanical and amino-acid dietary supplement for adult men (18+). Not intended to diagnose, treat, cure, or prevent any disease.',
    offers: singleBottleOffer,
  };

  const productGroupNode = {
    '@type': 'ProductGroup',
    '@id': productGroupId,
    name: isMs
      ? `${prod.name} — Koleksi Pakej Multi-Botol Rasmi (1, 2 & 3 Botol)`
      : `${prod.name} — Official Multi-Bottle Protocol Collection (1, 2 & 3 Bottles)`,
    description: isMs ? prod.descriptionMs : prod.descriptionEn,
    url: productUrl,
    productGroupID: `${prod.sku}-GROUP`,
    brand: brandNode,
    variesBy: ['https://schema.org/size'],
    hasVariant: hasVariantNodes,
  };

  const graphNodes = [mainProductNode, productGroupNode];

  for (const [k, v] of Object.entries(mainProductNode)) {
    Object.defineProperty(graphNodes, k, {
      value: v,
      enumerable: false,
      configurable: true,
    });
  }
  Object.defineProperty(graphNodes, 'hasVariant', {
    value: hasVariantNodes,
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(graphNodes, 'productGroup', {
    value: productGroupNode,
    enumerable: false,
    configurable: true,
  });

  return graphNodes;
}

export const DEFAULT_GLOBAL_FAQS = [
  {
    questionEn: 'What is the official price of Onyxmen formulations (Horsemen, Hammer of Thor, Grow XL, Magnum Pump XR) in Malaysia?',
    answerEn:
      'Every authentic Onyxmen formulation is priced at RM 159.00 (MYR) for a 1-Bottle Single Cycle Reserve, RM 318.00 for a 2-Bottle Dual Momentum Protocol (Free Nationwide Malaysia Shipping), and RM 477.00 for a 3-Bottle Complete 90-Day Mastery Vault.',
    questionMs: 'Berapakah harga rasmi produk Onyxmen (Horsemen, Hammer of Thor, Grow XL, Magnum Pump XR) di Malaysia?',
    answerMs:
      'Setiap formulasi tulen Onyxmen berharga RM 159.00 (MYR) untuk 1 Botol, RM 318.00 untuk Pakej 2 Botol (Penghantaran Percuma Seluruh Malaysia), dan RM 477.00 untuk Pakej Lengkap 3 Botol (90 Hari).',
  },
  {
    questionEn: 'How discreet is Onyxmen parcel packaging across West and East Malaysia?',
    answerEn:
      'Every order is shipped in a 100% unmarked, opaque matte security parcel. Zero product names or brand logos appear on the outside box or courier airway bill. The sender is listed neutrally as OM Fulfilment Logistics.',
    questionMs: 'Adakah bungkusan penghantaran Onyxmen benar-benar rahsia dan tertutup?',
    answerMs:
      'Ya, setiap pesanan dibungkus dalam kotak keselamatan legap tanpa sebarang nama produk atau logo pada bungkusan mahupun slip kurier. Nama pengirim ditulis sebagai OM Fulfilment Logistics demi privasi 100%.',
  },
  {
    questionEn: 'Which payment methods are accepted for Malaysia orders?',
    answerEn:
      'We accept FPX Online Banking (Maybank2u, CIMB Clicks, Public Bank, RHB, Hong Leong), DuitNow Instant QR, and Cash on Delivery (COD) across Malaysia. Orders can be placed via our Express Discreet Order Desk (sales@onyxmen.my).',
    questionMs: 'Apakah kaedah pembayaran yang diterima untuk pesanan di Malaysia?',
    answerMs:
      'Kami menerima Perbankan Dalam Talian FPX (Maybank2u, CIMB, Public Bank, RHB), DuitNow QR Segera, serta Bayar Waktu Terima (COD) di seluruh Malaysia.',
  },
  {
    questionEn: 'What is the difference between 20-capsule (Horsemen, Hammer of Thor) and 30-capsule (Grow XL, Magnum Pump XR) bottles?',
    answerEn:
      'Horsemen and Hammer of Thor are concentrated 20-capsule botanical reserves designed for targeted evening readiness and progressive stamina conditioning (refill cycle every 18–20 days). Grow XL and Magnum Pump XR are 30-capsule daily micro-circulation and nitric oxide amino-acid protocols designed for a full 30-day cycle.',
    questionMs: 'Apakah perbezaan antara botol 20 kapsul (Horsemen, Hammer of Thor) dan 30 kapsul (Grow XL, Magnum Pump XR)?',
    answerMs:
      'Horsemen dan Hammer of Thor mengandungi 20 kapsul berkepekatan tinggi untuk kesediaan tenaga malam dan ketahanan fizikal. Grow XL dan Magnum Pump XR mengandungi 30 kapsul untuk sokongan harian aliran mikro dan prekursor nitrik oksida selama 30 hari penuh.',
  },
];

export function buildFAQPageSchema(
  faqs = DEFAULT_GLOBAL_FAQS,
  pageUrl = `${SCHEMA_DOMAIN}/`,
  lang = 'en-MY'
) {
  const locale = normalizeSchemaLocale(lang);
  const isMs = locale === 'ms-MY';
  const sourceFaqs = faqs && faqs.length > 0 ? faqs : DEFAULT_GLOBAL_FAQS;

  const mainEntity = sourceFaqs.map((item, idx) => {
    const questionText = isMs
      ? item.questionMs || item.question || item.q || item.questionEn || `Soalan Lazim #${idx + 1}`
      : item.questionEn || item.question || item.q || item.questionMs || `Frequently Asked Question #${idx + 1}`;
    const answerText = isMs
      ? item.answerMs || item.answer || item.a || item.answerEn || ''
      : item.answerEn || item.answer || item.a || item.answerMs || '';

    return {
      '@type': 'Question',
      '@id': `${pageUrl}#faq-question-${idx + 1}`,
      name: questionText,
      acceptedAnswer: {
        '@type': 'AcceptedAnswer',
        text: answerText,
      },
    };
  });

  return {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    url: pageUrl,
    inLanguage: locale,
    isPartOf: {
      '@id': WEBSITE_ID,
    },
    mainEntity,
  };
}

export function buildBreadcrumbSchema(items = [], pageUrl = `${SCHEMA_DOMAIN}/`) {
  const effectiveItems =
    items && items.length > 0
      ? items
      : [
          {
            name: pageUrl.includes('/ms/') ? 'Onyxmen Malaysia (Utama)' : 'Onyxmen Malaysia (Home)',
            url: pageUrl.includes('/ms/') ? `${SCHEMA_DOMAIN}/ms/` : `${SCHEMA_DOMAIN}/`,
          },
          ...(pageUrl !== `${SCHEMA_DOMAIN}/` && pageUrl !== `${SCHEMA_DOMAIN}/ms/`
            ? [{ name: 'Current Page', url: pageUrl }]
            : []),
        ];

  return {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: effectiveItems.map((crumb, index) => {
      const fullItemUrl = crumb.url.startsWith('http')
        ? crumb.url
        : `${SCHEMA_DOMAIN}${crumb.url.startsWith('/') ? '' : '/'}${crumb.url}`;
      return {
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: fullItemUrl,
      };
    }),
  };
}

export function resolveStateHubInput(stateInput) {
  if (typeof stateInput === 'string') {
    const clean = stateInput.toLowerCase().trim().replace(/^location-/, '');
    if (MALAYSIA_STATE_HUBS_CATALOG[clean]) {
      return MALAYSIA_STATE_HUBS_CATALOG[clean];
    }
    const bySlug = Object.values(MALAYSIA_STATE_HUBS_CATALOG).find(
      (s) => s.slug === clean || s.stateNameEn.toLowerCase() === clean
    );
    if (bySlug) return bySlug;
    throw new Error(`Unknown Malaysian state hub key/slug: ${stateInput}`);
  }
  return stateInput;
}

export function buildStateHubSchema(stateDataInput, lang = 'en-MY') {
  const locale = normalizeSchemaLocale(lang);
  const isMs = locale === 'ms-MY';
  const stateData = resolveStateHubInput(stateDataInput);

  const defaultPath = isMs
    ? `/ms/penghantaran-malaysia/${stateData.slug === 'penang' ? 'pulau-pinang' : stateData.slug}/`
    : `/malaysia-delivery/${stateData.slug}/`;
  const pageUrl = stateData.pageUrl || `${SCHEMA_DOMAIN}${defaultPath}`;

  const shippingDetailsFull = buildShippingDetailsNode();
  const returnPolicyFull = buildReturnPolicyNode();

  const stateTitle = isMs
    ? `Penghantaran Rahsia Suplemen Lelaki Onyxmen di ${stateData.stateNameMs} (${stateData.cities.slice(0, 4).join(', ')})`
    : `Discreet Onyxmen Men's Vitality Delivery in ${stateData.stateNameEn} (${stateData.cities.slice(0, 4).join(', ')})`;

  const stateDescription = isMs
    ? `Perkhidmatan penghantaran bungkusan rahsia 100% tanpa nama produk untuk Horsemen, Hammer of Thor, Grow XL, dan Magnum Pump XR (RM 159.00 sebotol) ke seluruh ${stateData.stateNameMs} termasuk ${stateData.cities.join(', ')}. Masa penghantaran: ${stateData.deliveryWindowMs}.`
    : `100% unmarked discreet courier & private runner delivery for official Onyxmen formulations (Horsemen, Hammer of Thor, Grow XL, Magnum Pump XR at RM 159.00 per bottle) across ${stateData.stateNameEn} including ${stateData.cities.join(', ')}. Delivery window: ${stateData.deliveryWindowEn}.`;

  const webPageNode = {
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: stateTitle,
    description: stateDescription,
    inLanguage: locale,
    isPartOf: {
      '@id': WEBSITE_ID,
    },
    about: {
      '@id': `${pageUrl}#service`,
    },
    breadcrumb: {
      '@id': `${pageUrl}#breadcrumb`,
    },
  };

  const serviceNode = {
    '@type': 'Service',
    '@id': `${pageUrl}#service`,
    name: isMs
      ? `Perkhidmatan Penghantaran Rahsia Onyxmen Malaysia — ${stateData.stateNameMs}`
      : `Onyxmen Malaysia Discreet Apothecary Fulfilment Service — ${stateData.stateNameEn}`,
    serviceType: isMs
      ? 'Penghantaran Kurier Rahsia Suplemen Botani Lelaki Dewasa'
      : "Discreet Botanical Men's Supplement Fulfilment & Express Courier Service",
    description: stateDescription,
    url: pageUrl,
    provider: {
      '@id': ORG_ID,
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: isMs ? stateData.stateNameMs : stateData.stateNameEn,
      addressCountry: 'MY',
      containsPlace: stateData.cities.map((city) => ({
        '@type': 'City',
        name: city,
      })),
    },
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: pageUrl,
      providesService: {
        '@id': `${pageUrl}#service`,
      },
      availableLanguage: ['en-MY', 'ms-MY'],
    },
    offers: {
      '@type': 'Offer',
      '@id': `${pageUrl}#state-offer`,
      url: pageUrl,
      name: isMs
        ? `Botol Rasmi Onyxmen (Horsemen / Hammer of Thor / Grow XL / Magnum Pump XR) + Penghantaran Rahsia ke ${stateData.stateNameMs}`
        : `Official Onyxmen Formulation Bottle (Horsemen / Hammer of Thor / Grow XL / Magnum Pump XR) + Discreet Delivery to ${stateData.stateNameEn}`,
      price: OFFICIAL_PRICE_MYR,
      priceCurrency: OFFICIAL_CURRENCY,
      priceValidUntil: OFFICIAL_PRICE_VALID_UNTIL,
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      eligibleRegion: {
        '@type': 'AdministrativeArea',
        name: isMs ? stateData.stateNameMs : stateData.stateNameEn,
        addressCountry: 'MY',
      },
      seller: {
        '@id': ORG_ID,
      },
      shippingDetails: shippingDetailsFull,
      hasMerchantReturnPolicy: returnPolicyFull,
    },
  };

  const nodes = [webPageNode, serviceNode];
  for (const [k, v] of Object.entries(serviceNode)) {
    Object.defineProperty(nodes, k, {
      value: v,
      enumerable: false,
      configurable: true,
    });
  }
  Object.defineProperty(nodes, 'webPage', {
    value: webPageNode,
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(nodes, 'service', {
    value: serviceNode,
    enumerable: false,
    configurable: true,
  });

  return nodes;
}

export function buildArticleSchema(guideData, lang = 'en-MY') {
  const locale = normalizeSchemaLocale(lang);
  const isMs = locale === 'ms-MY';

  const pageUrl =
    guideData.pageUrl ||
    `${SCHEMA_DOMAIN}${isMs ? `/ms/panduan/${guideData.slug}/` : `/guides/${guideData.slug}/`}`;

  const headline = isMs ? guideData.headlineMs : guideData.headlineEn;
  const description = isMs ? guideData.descriptionMs : guideData.descriptionEn;
  const datePublished = guideData.datePublished || '2026-01-15T08:00:00+08:00';
  const dateModified = guideData.dateModified || '2026-10-30T08:00:00+08:00';
  const imageUrl =
    guideData.imageUrl || `${SCHEMA_DOMAIN}/assets/products/onyxman-lineup-hero.webp`;
  const speakableSelectors =
    guideData.speakableSelectors && guideData.speakableSelectors.length > 0
      ? guideData.speakableSelectors
      : ['h1', '.article-executive-summary', '.protocol-key-takeaways', 'h2'];

  const speakableSpec = {
    '@type': 'SpeakableSpecification',
    cssSelector: speakableSelectors,
  };

  const webPageNode = {
    '@type': 'WebPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: headline,
    description,
    inLanguage: locale,
    isPartOf: {
      '@id': WEBSITE_ID,
    },
    breadcrumb: {
      '@id': `${pageUrl}#breadcrumb`,
    },
    speakable: speakableSpec,
  };

  const articleNode = {
    '@type': 'Article',
    '@id': `${pageUrl}#article`,
    mainEntityOfPage: {
      '@id': `${pageUrl}#webpage`,
    },
    headline,
    description,
    inLanguage: locale,
    image: [imageUrl, `${SCHEMA_DOMAIN}/assets/products/onyxman-lineup-hero.png`],
    datePublished,
    dateModified,
    author: {
      '@type': 'Organization',
      '@id': `${SCHEMA_DOMAIN}/#research-board`,
      name: 'Onyxmen Botanical Research & Quality Assurance Board',
      url: `${SCHEMA_DOMAIN}/about/`,
    },
    publisher: {
      '@id': ORG_ID,
    },
    speakable: speakableSpec,
    about: (
      guideData.aboutTopics || [
        "Adult Men's Botanical Vitality",
        'Standardized Herbal Extract Absorption',
        'Onyxmen Malaysia Authenticity Verification',
      ]
    ).map((topic) => ({
      '@type': 'Thing',
      name: topic,
    })),
  };

  const nodes = [webPageNode, articleNode];
  for (const [k, v] of Object.entries(articleNode)) {
    Object.defineProperty(nodes, k, {
      value: v,
      enumerable: false,
      configurable: true,
    });
  }
  Object.defineProperty(nodes, 'webPage', {
    value: webPageNode,
    enumerable: false,
    configurable: true,
  });
  Object.defineProperty(nodes, 'article', {
    value: articleNode,
    enumerable: false,
    configurable: true,
  });

  return nodes;
}

export function buildFullPageGraphObject(options) {
  const locale = normalizeSchemaLocale(options.lang);
  const isMs = locale === 'ms-MY';
  const pageUrl = options.pageUrl.startsWith('http')
    ? options.pageUrl
    : `${SCHEMA_DOMAIN}${options.pageUrl.startsWith('/') ? '' : '/'}${options.pageUrl}`;

  const graph = [];

  // 1. Core Organization & OnlineStore node
  graph.push(buildOrganizationSchema());

  // 2. Core WebSite node
  graph.push(buildWebSiteSchema(locale));

  // 3. Reusable Shipping & Return Policy nodes (#shipping-my and #return-policy)
  const [shippingNode, returnPolicyNode] = buildShippingAndReturnNodes();
  if (shippingNode) graph.push(shippingNode);
  if (returnPolicyNode) graph.push(returnPolicyNode);

  // 4. Page-type specific nodes
  const allProductsList =
    options.allProducts && options.allProducts.length > 0
      ? options.allProducts
      : Object.values(DEFAULT_PRODUCTS_CATALOG);

  if (options.pageType === 'product') {
    const targetProduct = options.product || 'horsemen';
    const resolvedProd = resolveProductInput(targetProduct);
    const productNodes = buildProductGraphSchema(resolvedProd, locale);
    graph.push({
      '@type': 'ItemPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: options.title || (isMs ? resolvedProd.fullTitleMs : resolvedProd.fullTitleEn),
      description:
        options.description || (isMs ? resolvedProd.descriptionMs : resolvedProd.descriptionEn),
      inLanguage: locale,
      isPartOf: { '@id': WEBSITE_ID },
      mainEntity: { '@id': `${pageUrl}#product` },
      breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
    });
    for (const node of productNodes) {
      graph.push(node);
    }
  } else if (
    options.pageType === 'home' ||
    options.pageType === 'products-index' ||
    options.pageType === 'comparison'
  ) {
    const defaultTitle = isMs
      ? 'Onyxmen Malaysia — Apotekari Botani Eksklusif untuk Stamina & Tenaga Lelaki Dewasa'
      : "Onyxmen Malaysia — Architectural Botanical Apothecary for Adult Men's Vitality & Stamina";
    const defaultDesc = isMs
      ? 'Koleksi rasmi Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR pada harga RM 159.00 sebotol dengan penghantaran rahsia seluruh Malaysia.'
      : 'Official Malaysia vault for Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR at RM 159.00 per bottle with 100% unmarked discreet courier delivery.';

    graph.push({
      '@type': options.pageType === 'comparison' ? 'WebPage' : 'CollectionPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: options.title || defaultTitle,
      description: options.description || defaultDesc,
      inLanguage: locale,
      isPartOf: { '@id': WEBSITE_ID },
      breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.hero-subtitle', '.comparison-summary', 'h2'],
      },
    });

    const itemListElements = [];
    allProductsList.forEach((prodItem, idx) => {
      const resolved = resolveProductInput(prodItem);
      const prodNodes = buildProductGraphSchema(resolved, locale);
      for (const pNode of prodNodes) {
        graph.push(pNode);
      }
      const prodPath = isMs ? `/ms/produk/${resolved.slug}/` : `/products/${resolved.slug}/`;
      itemListElements.push({
        '@type': 'ListItem',
        position: idx + 1,
        url: `${SCHEMA_DOMAIN}${prodPath}`,
        name: isMs ? resolved.fullTitleMs : resolved.fullTitleEn,
        item: {
          '@id': `${SCHEMA_DOMAIN}${prodPath}#product`,
        },
      });
    });

    graph.push({
      '@type': 'ItemList',
      '@id': `${pageUrl}#product-list`,
      name: isMs
        ? 'Senarai Formulasi Rasmi Onyxmen Malaysia (RM 159.00)'
        : 'Official Onyxmen Malaysia Formulations Lineup (RM 159.00)',
      numberOfItems: itemListElements.length,
      itemListElement: itemListElements,
    });
  } else if (options.pageType === 'location' || options.pageType === 'state-hub') {
    const stateTarget = options.stateHub || 'kuala-lumpur';
    const resolvedState = resolveStateHubInput(stateTarget);
    const stateNodes = buildStateHubSchema({ ...resolvedState, pageUrl }, locale);
    for (const sNode of stateNodes) {
      graph.push(sNode);
    }
  } else if (
    options.pageType === 'guide' ||
    options.pageType === 'article' ||
    options.pageType === 'ingredient' ||
    options.pageType === 'botanical'
  ) {
    const articleInput = options.article || {
      slug: pageUrl.split('/').filter(Boolean).pop() || 'botanical-protocol-guide',
      headlineEn:
        options.title ||
        'Onyxmen Malaysia Botanical Monograph & Optimal Absorption Protocol Guide',
      headlineMs:
        options.title ||
        'Monograf Botani & Panduan Penyerapan Optimum Onyxmen Malaysia',
      descriptionEn:
        options.description ||
        'Comprehensive botanical monograph and dosage timing guide for adult men in Malaysia.',
      descriptionMs:
        options.description ||
        'Panduan monograf botani dan masa pengambilan kapsul optimum untuk lelaki dewasa di Malaysia.',
      pageUrl,
    };
    const articleNodes = buildArticleSchema({ ...articleInput, pageUrl }, locale);
    for (const aNode of articleNodes) {
      graph.push(aNode);
    }

    const featuredProd = resolveProductInput(options.product || 'horsemen');
    const featuredProdNodes = buildProductGraphSchema(featuredProd, locale);
    for (const pNode of featuredProdNodes) {
      graph.push(pNode);
    }
  } else {
    graph.push({
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name:
        options.title ||
        (isMs
          ? 'Jaminan Kualiti, Privasi & Khidmat Pelanggan Onyxmen Malaysia'
          : 'Onyxmen Malaysia Quality Assurance, Discreet Shipping & Concierge Support'),
      description:
        options.description ||
        (isMs
          ? 'Maklumat rasmi mengenai jaminan ketulenan, penghantaran bungkusan rahsia, dan khidmat pelanggan Onyxmen Malaysia.'
          : 'Official information regarding Onyxmen Malaysia formulation standards, 100% unmarked discreet shipping, and customer support.'),
      inLanguage: locale,
      isPartOf: { '@id': WEBSITE_ID },
      breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
    });
  }

  // 5. BreadcrumbList node
  graph.push(buildBreadcrumbSchema(options.breadcrumbs, pageUrl));

  // 6. FAQPage node
  graph.push(buildFAQPageSchema(options.faqs, pageUrl, locale));

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

export function buildFullPageGraph(options) {
  const graphObj = buildFullPageGraphObject(options);
  return JSON.stringify(graphObj, null, 2);
}
