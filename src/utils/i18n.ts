/**
 * ONYXMAN.MY — BILINGUAL INTERNATIONALIZATION & HREFLANG ENGINE (MS-005)
 * Locales: English Malaysia (en-MY) & Bahasa Malaysia (ms-MY)
 * Domain: https://www.onyxmen.my
 */

export type SupportedLocale = 'en-MY' | 'ms-MY';

export interface RoutePair {
  key: string;
  category:
    | 'core'
    | 'product'
    | 'comparison'
    | 'ingredient'
    | 'location'
    | 'guide'
    | 'trust';
  enPath: string;
  msPath: string;
  titleEn: string;
  titleMs: string;
}

export const DOMAIN_ORIGIN = 'https://www.onyxmen.my';

export const ROUTE_REGISTRY: readonly RoutePair[] = [
  // 1. Core Flagship & Vault Hub
  {
    key: 'home',
    category: 'core',
    enPath: '/',
    msPath: '/ms/',
    titleEn: 'Onyxmen Malaysia — Architectural Botanical Apothecary for Adult Men’s Vitality & Stamina',
    titleMs: 'Onyxmen Malaysia — Apotekari Botani Eksklusif untuk Stamina & Tenaga Lelaki Dewasa',
  },
  {
    key: 'products-index',
    category: 'core',
    enPath: '/products/',
    msPath: '/ms/produk/',
    titleEn: 'Complete Formulations Vault — Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR | Onyxmen Malaysia',
    titleMs: 'Koleksi Formulasi Lengkap — Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR | Onyxmen Malaysia',
  },

  // 2. Four Flagship Products (RM 159)
  {
    key: 'product-horsemen',
    category: 'product',
    enPath: '/products/horsemen/',
    msPath: '/ms/produk/horsemen/',
    titleEn: 'Horsemen (20 Capsules) — Tongkat Ali & Black Maca Stamina Reserve | RM 159 Malaysia',
    titleMs: 'Horsemen (20 Kapsul) — Ekstrak Tongkat Ali & Maca Hitam untuk Stamina Lelaki | RM 159 Malaysia',
  },
  {
    key: 'product-hammer-of-thor',
    category: 'product',
    enPath: '/products/hammer-of-thor/',
    msPath: '/ms/produk/hammer-of-thor/',
    titleEn: 'Hammer of Thor (20 Capsules) — Sustained Physical Endurance & Vitality Complex | RM 159 Malaysia',
    titleMs: 'Hammer of Thor (20 Kapsul) — Kompleks Ketahanan Fizikal & Kecergasan Lelaki | RM 159 Malaysia',
  },
  {
    key: 'product-grow-xl',
    category: 'product',
    enPath: '/products/grow-xl/',
    msPath: '/ms/produk/grow-xl/',
    titleEn: 'Grow XL (30 Capsules) — 30-Day Daily Botanical Vitality & Micro-Circulation Protocol | RM 159 Malaysia',
    titleMs: 'Grow XL (30 Kapsul) — Protokol Nutrisi Kecergasan & Aliran Mikro Harian 30 Hari | RM 159 Malaysia',
  },
  {
    key: 'product-magnum-pump-xr',
    category: 'product',
    enPath: '/products/magnum-pump-xr/',
    msPath: '/ms/produk/magnum-pump-xr/',
    titleEn: 'Magnum Pump XR (30 Capsules) — L-Arginine, L-Citrulline & Nitric Oxide Vascular Support | RM 159 Malaysia',
    titleMs: 'Magnum Pump XR (30 Kapsul) — Sokongan L-Arginine, L-Citrulline & Nitrik Oksida | RM 159 Malaysia',
  },

  // 3. Formulation Comparisons & Selection Matrices
  {
    key: 'compare-index',
    category: 'comparison',
    enPath: '/compare/',
    msPath: '/ms/perbandingan/',
    titleEn: 'Onyxmen Formulation Comparison Matrix — Which Men’s Vitality Protocol Fits Your Goal?',
    titleMs: 'Jadual Perbandingan Formulasi Onyxmen — Pilih Protokol Tenaga Lelaki Terbaik',
  },
  {
    key: 'compare-horsemen-vs-hammer-of-thor',
    category: 'comparison',
    enPath: '/compare/horsemen-vs-hammer-of-thor/',
    msPath: '/ms/perbandingan/horsemen-vs-hammer-of-thor/',
    titleEn: 'Horsemen vs Hammer of Thor — 20-Capsule Stamina & Vitality Comparison Malaysia',
    titleMs: 'Perbandingan Horsemen vs Hammer of Thor — Perbezaan Kapsul Stamina Lelaki Malaysia',
  },
  {
    key: 'compare-grow-xl-vs-magnum-pump-xr',
    category: 'comparison',
    enPath: '/compare/grow-xl-vs-magnum-pump-xr/',
    msPath: '/ms/perbandingan/grow-xl-vs-magnum-pump-xr/',
    titleEn: 'Grow XL vs Magnum Pump XR — 30-Day Botanical Cycle vs Nitric Oxide Pre-Activity Protocol',
    titleMs: 'Perbandingan Grow XL vs Magnum Pump XR — Kitaran 30 Hari vs Sokongan Nitrik Oksida',
  },

  // 4. Botanical Ingredient Monographs
  {
    key: 'ingredients-index',
    category: 'ingredient',
    enPath: '/ingredients/',
    msPath: '/ms/ramuan-botani/',
    titleEn: 'Botanical Apothecary Monographs — Standardized Extracts & Amino Acids | Onyxmen Malaysia',
    titleMs: 'Monograf Ramuan Botani — Ekstrak Herba Piawai & Asid Amino | Onyxmen Malaysia',
  },
  {
    key: 'ingredients-index-ms-alias',
    category: 'ingredient',
    enPath: '/ingredients/',
    msPath: '/ms/ingredients/',
    titleEn: 'Botanical Apothecary Monographs — Standardized Extracts & Amino Acids | Onyxmen Malaysia',
    titleMs: 'Indeks Monograf Apotekari Botani — Ekstrak Herba Piawai & Asid Amino | Onyxmen Malaysia',
  },
  {
    key: 'ingredient-tongkat-ali',
    category: 'ingredient',
    enPath: '/ingredients/tongkat-ali-eurycoma-longifolia/',
    msPath: '/ms/ramuan-botani/tongkat-ali-eurycoma-longifolia/',
    titleEn: 'Malaysian Tongkat Ali (Eurycoma longifolia) — Phytochemistry & Male Vitality Monograph',
    titleMs: 'Tongkat Ali Malaysia (Eurycoma longifolia) — Monograf Fitokimia & Tenaga Lelaki',
  },
  {
    key: 'ingredient-tongkat-ali-malaysia',
    category: 'ingredient',
    enPath: '/ingredients/tongkat-ali-malaysia/',
    msPath: '/ms/ingredients/tongkat-ali-malaysia/',
    titleEn: 'Malaysian Eurycoma Longifolia 100:1 Root Extract Monograph — Eurycomanone & Vitality | Onyxmen Malaysia',
    titleMs: 'Monograf Ekstrak Akar Tongkat Ali Malaysia 100:1 (Eurycoma Longifolia) — Eurycomanone | Onyxmen Malaysia',
  },
  {
    key: 'ingredient-tongkat-ali-short',
    category: 'ingredient',
    enPath: '/ingredients/tongkat-ali/',
    msPath: '/ms/ramuan-botani/tongkat-ali-malaysia/',
    titleEn: 'Malaysian Tongkat Ali 100:1 Standardized Extract Monograph | Onyxmen Malaysia',
    titleMs: 'Monograf Akar Tongkat Ali Malaysia 100:1 Piawai | Onyxmen Malaysia',
  },
  {
    key: 'ingredient-tribulus-terrestris-malaysia',
    category: 'ingredient',
    enPath: '/ingredients/tribulus-terrestris-malaysia/',
    msPath: '/ms/ingredients/tribulus-terrestris-malaysia/',
    titleEn: '60%-Saponin Tribulus Terrestris & Panax Ginseng Matrix Monograph | Onyxmen Malaysia',
    titleMs: 'Monograf Matriks Tribulus Terrestris 60% Saponin & Panax Ginseng | Onyxmen Malaysia',
  },
  {
    key: 'ingredient-tribulus-terrestris-short',
    category: 'ingredient',
    enPath: '/ingredients/tribulus-terrestris/',
    msPath: '/ms/ramuan-botani/tribulus-terrestris/',
    titleEn: 'Tribulus Terrestris Protodioscin Saponins & Panax Ginseng Monograph | Onyxmen Malaysia',
    titleMs: 'Monograf Saponin Protodioscin Tribulus Terrestris & Panax Ginseng | Onyxmen Malaysia',
  },
  {
    key: 'ingredient-black-maca',
    category: 'ingredient',
    enPath: '/ingredients/black-maca-lepidium-meyenii/',
    msPath: '/ms/ramuan-botani/maca-hitam-lepidium-meyenii/',
    titleEn: 'Peruvian Black Maca (Lepidium meyenii) — Endurance & Adaptogenic Stamina Monograph',
    titleMs: 'Maca Hitam Peru (Lepidium meyenii) — Monograf Ketahanan & Stamina Fizikal',
  },
  {
    key: 'ingredient-maca-root-malaysia',
    category: 'ingredient',
    enPath: '/ingredients/maca-root-malaysia/',
    msPath: '/ms/ingredients/maca-root-malaysia/',
    titleEn: 'Gelatinized Peruvian Black Maca Root (Lepidium Meyenii) Monograph | Onyxmen Malaysia',
    titleMs: 'Monograf Akar Maca Hitam Peru Tergelatinisasi (Lepidium Meyenii) | Onyxmen Malaysia',
  },
  {
    key: 'ingredient-maca-root-short',
    category: 'ingredient',
    enPath: '/ingredients/maca-root/',
    msPath: '/ms/ramuan-botani/akar-maca-hitam/',
    titleEn: 'Peruvian Black Maca Root Macamides & Non-Stimulant Stamina Monograph | Onyxmen Malaysia',
    titleMs: 'Monograf Akar Maca Hitam Peru — Macamides & Stamina Bebas Kafein | Onyxmen Malaysia',
  },
  {
    key: 'ingredient-l-arginine-citrulline',
    category: 'ingredient',
    enPath: '/ingredients/l-arginine-l-citrulline-nitric-oxide/',
    msPath: '/ms/ramuan-botani/l-arginine-l-citrulline-nitrik-oksida/',
    titleEn: 'L-Arginine & L-Citrulline — Nitric Oxide Pathway & Vascular Nutrient Flow Monograph',
    titleMs: 'L-Arginine & L-Citrulline — Monograf Laluan Nitrik Oksida & Aliran Vaskular',
  },
  {
    key: 'ingredient-l-arginine-nitric-oxide',
    category: 'ingredient',
    enPath: '/ingredients/l-arginine-nitric-oxide/',
    msPath: '/ms/ingredients/l-arginine-nitric-oxide/',
    titleEn: 'L-Arginine HCl, L-Citrulline Malate & Bioperine Nitric Oxide Pathway Monograph | Onyxmen Malaysia',
    titleMs: 'Monograf Laluan Nitrik Oksida L-Arginine HCl, L-Citrulline Malate & Bioperine | Onyxmen Malaysia',
  },
  {
    key: 'ingredient-l-arginine-short',
    category: 'ingredient',
    enPath: '/ingredients/l-arginine/',
    msPath: '/ms/ramuan-botani/l-arginine-nitric-oxide/',
    titleEn: 'L-Arginine & L-Citrulline Endothelial eNOS Vasodilation Monograph | Onyxmen Malaysia',
    titleMs: 'Monograf L-Arginine & L-Citrulline Aliran Vaskular eNOS | Onyxmen Malaysia',
  },
  {
    key: 'ingredient-panax-ginseng',
    category: 'ingredient',
    enPath: '/ingredients/panax-ginseng-ginsenosides/',
    msPath: '/ms/ramuan-botani/panax-ginseng-ginsenosida/',
    titleEn: 'Korean Red Panax Ginseng — Standardized Ginsenosides & Physical Fatigue Resilience',
    titleMs: 'Panax Ginseng Merah Korea — Ginsenosida Piawai & Ketahanan Kelesuan Fizikal',
  },

  // 5. 16 Malaysia State & Federal Territory Discreet Delivery Hubs
  {
    key: 'locations-index',
    category: 'location',
    enPath: '/malaysia/',
    msPath: '/ms/malaysia/',
    titleEn: 'Discreet Men’s Vitality Delivery Across All 16 States & Federal Territories in Malaysia',
    titleMs: 'Penghantaran Rahsia Suplemen Lelaki ke Semua 16 Negeri & Wilayah Persekutuan Malaysia',
  },
  {
    key: 'location-kuala-lumpur',
    category: 'location',
    enPath: '/malaysia/kuala-lumpur/',
    msPath: '/ms/malaysia/kuala-lumpur/',
    titleEn: 'Same-Day Discreet Delivery in Kuala Lumpur (KLCC, Bukit Bintang, Bangsar, Mont Kiara) | Onyxmen',
    titleMs: 'Penghantaran Rahsia Hari Sama di Kuala Lumpur (KLCC, Bukit Bintang, Bangsar, Mont Kiara) | Onyxmen',
  },
  {
    key: 'location-selangor',
    category: 'location',
    enPath: '/malaysia/selangor/',
    msPath: '/ms/malaysia/selangor/',
    titleEn: 'Same-Day & Next-Day Discreet Delivery in Selangor (Petaling Jaya, Subang, Shah Alam) | Onyxmen',
    titleMs: 'Penghantaran Rahsia di Selangor (Petaling Jaya, Subang Jaya, Shah Alam, Puchong) | Onyxmen',
  },
  {
    key: 'location-pulau-pinang',
    category: 'location',
    enPath: '/malaysia/penang/',
    msPath: '/ms/malaysia/pulau-pinang/',
    titleEn: 'Discreet 1–2 Day Express Delivery in Penang (George Town, Bayan Lepas, Butterworth) | Onyxmen',
    titleMs: 'Penghantaran Rahsia 1–2 Hari di Pulau Pinang (George Town, Bayan Lepas, Seberang Perai) | Onyxmen',
  },
  {
    key: 'location-johor',
    category: 'location',
    enPath: '/malaysia/johor-bahru/',
    msPath: '/ms/malaysia/johor-bahru/',
    titleEn: 'Discreet 1–2 Day Express Delivery in Johor Bahru, Iskandar Puteri & Batu Pahat | Onyxmen',
    titleMs: 'Penghantaran Rahsia 1–2 Hari di Johor Bahru, Iskandar Puteri & Muar | Onyxmen',
  },
  {
    key: 'location-perak',
    category: 'location',
    enPath: '/malaysia/perak-ipoh/',
    msPath: '/ms/malaysia/perak-ipoh/',
    titleEn: 'Discreet Express Delivery in Ipoh, Taiping & Perak | Onyxmen Malaysia',
    titleMs: 'Penghantaran Rahsia Ekspres di Ipoh, Taiping & Seluruh Perak | Onyxmen Malaysia',
  },
  {
    key: 'location-melaka',
    category: 'location',
    enPath: '/malaysia/melaka/',
    msPath: '/ms/malaysia/melaka/',
    titleEn: 'Discreet Express Delivery in Melaka City, Ayer Keroh & Alor Gajah | Onyxmen Malaysia',
    titleMs: 'Penghantaran Rahsia Ekspres di Bandaraya Melaka & Ayer Keroh | Onyxmen Malaysia',
  },
  {
    key: 'location-negeri-sembilan',
    category: 'location',
    enPath: '/malaysia/negeri-sembilan-seremban/',
    msPath: '/ms/malaysia/negeri-sembilan-seremban/',
    titleEn: 'Discreet Express Delivery in Seremban, Nilai & Port Dickson | Onyxmen Malaysia',
    titleMs: 'Penghantaran Rahsia Ekspres di Seremban, Nilai & Port Dickson | Onyxmen Malaysia',
  },
  {
    key: 'location-pahang',
    category: 'location',
    enPath: '/malaysia/pahang-kuantan/',
    msPath: '/ms/malaysia/pahang-kuantan/',
    titleEn: 'Discreet Express Delivery in Kuantan, Temerloh & Pahang | Onyxmen Malaysia',
    titleMs: 'Penghantaran Rahsia Ekspres di Kuantan, Temerloh & Seluruh Pahang | Onyxmen Malaysia',
  },
  {
    key: 'location-kedah',
    category: 'location',
    enPath: '/malaysia/kedah-alor-setar/',
    msPath: '/ms/malaysia/kedah-alor-setar/',
    titleEn: 'Discreet Express Delivery in Alor Setar, Sungai Petani & Langkawi | Onyxmen Malaysia',
    titleMs: 'Penghantaran Rahsia Ekspres di Alor Setar, Sungai Petani & Langkawi | Onyxmen Malaysia',
  },
  {
    key: 'location-kelantan',
    category: 'location',
    enPath: '/malaysia/kelantan-kota-bharu/',
    msPath: '/ms/malaysia/kelantan-kota-bharu/',
    titleEn: 'Discreet Express Delivery in Kota Bharu & Kelantan | Onyxmen Malaysia',
    titleMs: 'Penghantaran Rahsia Ekspres di Kota Bharu & Seluruh Kelantan | Onyxmen Malaysia',
  },
  {
    key: 'location-terengganu',
    category: 'location',
    enPath: '/malaysia/terengganu-kuala-terengganu/',
    msPath: '/ms/malaysia/terengganu-kuala-terengganu/',
    titleEn: 'Discreet Express Delivery in Kuala Terengganu, Kemaman & Dungun | Onyxmen Malaysia',
    titleMs: 'Penghantaran Rahsia Ekspres di Kuala Terengganu, Kemaman & Dungun | Onyxmen Malaysia',
  },
  {
    key: 'location-perlis',
    category: 'location',
    enPath: '/malaysia/perlis-kangar/',
    msPath: '/ms/malaysia/perlis-kangar/',
    titleEn: 'Discreet Express Delivery in Kangar & Perlis | Onyxmen Malaysia',
    titleMs: 'Penghantaran Rahsia Ekspres di Kangar & Perlis | Onyxmen Malaysia',
  },
  {
    key: 'location-sabah',
    category: 'location',
    enPath: '/malaysia/sabah/',
    msPath: '/ms/malaysia/sabah/',
    titleEn: 'Discreet Air Freight Delivery to Kota Kinabalu, Sandakan, Tawau & Sabah | Onyxmen Malaysia',
    titleMs: 'Penghantaran Udara Rahsia ke Kota Kinabalu, Sandakan, Tawau & Sabah | Onyxmen Malaysia',
  },
  {
    key: 'location-sarawak',
    category: 'location',
    enPath: '/malaysia/sarawak/',
    msPath: '/ms/malaysia/sarawak/',
    titleEn: 'Discreet Air Freight Delivery to Kuching, Miri, Sibu, Bintulu & Sarawak | Onyxmen Malaysia',
    titleMs: 'Penghantaran Udara Rahsia ke Kuching, Miri, Sibu, Bintulu & Sarawak | Onyxmen Malaysia',
  },
  {
    key: 'location-putrajaya',
    category: 'location',
    enPath: '/malaysia/putrajaya/',
    msPath: '/ms/malaysia/putrajaya/',
    titleEn: 'Same-Day Discreet Delivery in Putrajaya & Cyberjaya | Onyxmen Malaysia',
    titleMs: 'Penghantaran Rahsia Hari Sama di Putrajaya & Cyberjaya | Onyxmen Malaysia',
  },
  {
    key: 'location-labuan',
    category: 'location',
    enPath: '/malaysia/labuan/',
    msPath: '/ms/malaysia/labuan/',
    titleEn: 'Discreet Air Freight Delivery in Federal Territory of Labuan | Onyxmen Malaysia',
    titleMs: 'Penghantaran Udara Rahsia di Wilayah Persekutuan Labuan | Onyxmen Malaysia',
  },

  // 6. Educational Vitality & Protocol Guides
  {
    key: 'guides-index',
    category: 'guide',
    enPath: '/guides/',
    msPath: '/ms/panduan/',
    titleEn: 'Adult Men’s Vitality, Stamina Conditioning & Botanical Timing Guides | Onyxmen Malaysia',
    titleMs: 'Panduan Stamina Lelaki Dewasa, Pemakanan Botani & Masa Pengambilan | Onyxmen Malaysia',
  },
  {
    key: 'guide-dosage-timing',
    category: 'guide',
    enPath: '/guides/optimal-capsule-timing-and-absorption-protocol/',
    msPath: '/ms/panduan/masa-pengambilan-kapsul-dan-penyerapan-optimum/',
    titleEn: 'Optimal Capsule Timing & Absorption Protocol — 20-Capsule vs 30-Capsule Cycles',
    titleMs: 'Panduan Masa Pengambilan Kapsul & Penyerapan Optimum — Kitaran 20 vs 30 Kapsul',
  },
  {
    key: 'guide-authenticity-verification',
    category: 'guide',
    enPath: '/guides/how-to-verify-authentic-onyxman-bottles-malaysia/',
    msPath: '/ms/panduan/cara-semak-ketulenan-botol-onyxman-malaysia/',
    titleEn: 'How to Verify Authentic Onyxmen Formulations & Avoid Counterfeit Listings in Malaysia',
    titleMs: 'Cara Semak Ketulenan Botol Onyxmen & Elak Produk Tiruan di Malaysia',
  },

  // 7. Trust, E-E-A-T, Discreet Shipping & Legal Pages
  {
    key: 'trust-about',
    category: 'trust',
    enPath: '/about/',
    msPath: '/ms/tentang-kami/',
    titleEn: 'About Onyxmen Malaysia — Botanical Quality Assurance, Privacy & Apothecary Standards',
    titleMs: 'Tentang Onyxmen Malaysia — Jaminan Kualiti Botani, Privasi & Piawaian Apotekari',
  },
  {
    key: 'trust-discreet-shipping',
    category: 'trust',
    enPath: '/shipping-and-discreet-packaging/',
    msPath: '/ms/penghantaran-dan-bungkusan-rahsia/',
    titleEn: '100% Unmarked Discreet Packaging, FPX, DuitNow QR & Cash on Delivery (COD) Policy | Onyxmen',
    titleMs: 'Polisi Bungkusan Rahsia Tanpa Nama Produk, FPX, DuitNow QR & COD | Onyxmen Malaysia',
  },
  {
    key: 'trust-contact',
    category: 'trust',
    enPath: '/contact/',
    msPath: '/ms/hubungi-kami/',
    titleEn: 'Private Concierge & Order Support — sales@onyxman.my & info@onyxman.my | Onyxmen Malaysia',
    titleMs: 'Khidmat Pelanggan & Sokongan Pesanan — sales@onyxman.my & info@onyxman.my | Onyxmen Malaysia',
  },
  {
    key: 'trust-privacy-terms',
    category: 'trust',
    enPath: '/privacy-and-terms/',
    msPath: '/ms/privasi-dan-terma/',
    titleEn: 'PDPA Malaysia Privacy Policy, Terms of Sale & Supplement Compliance Notice | Onyxmen.my',
    titleMs: 'Polisi Privasi PDPA Malaysia, Terma Jualan & Notis Pematuhan Suplemen | Onyxmen.my',
  },
] as const;

export const UI_DICTIONARY: Record<SupportedLocale, Record<string, string>> = {
  'en-MY': {
    navHome: 'Apothecary Vault',
    navProducts: 'Formulations',
    navCompare: 'Comparison Matrix',
    navIngredients: 'Botanical Monographs',
    navMalaysiaDelivery: 'Malaysia Delivery',
    navGuides: 'Protocols & Guides',
    navContact: 'Private Concierge',
    ctaOrderExpress: 'Reserve Discreet Dispatch — RM 159',
    ctaSelectTier: 'Select Multi-Bottle Protocol',
    priceSingleLabel: 'RM 159 / Bottle',
    priceTwoLabel: 'RM 286 (2 Bottles • 10% OFF vs RM 318 + Free Shipping)',
    priceThreeLabel: 'RM 405 (3 Bottles • 15% OFF vs RM 477 Complete 90-Day Vault)',
    discreetGuarantee: '100% Unmarked Matte Parcel • Zero Product Names on Airway Bill • FPX / DuitNow / COD Available',
    complianceNotice:
      'Authentic Botanical Dietary Supplement for Adult Men (18+). Formulated to support physical vitality, stamina, and daily energy. Not intended to diagnose, treat, cure, or prevent any disease.',
    drawerHeading: 'Express Discreet Malaysia Order Desk',
    drawerSubheading:
      'Submit your discreet order below. Instant confirmation is routed to our Kuala Lumpur fulfilment desk (sales@onyxman.my / waleedshoaibofficial@gmail.com) with immediate WhatsApp dispatch follow-up.',
    fieldFullName: 'Recipient Name (Or Initials for Parcel Label)',
    fieldPhoneMY: 'Malaysia WhatsApp Mobile Number (e.g., 012-345 6789)',
    fieldEmail: 'Email Address (For Discreet Tracking & Refill Calendar)',
    fieldProduct: 'Select Formulation',
    fieldTier: 'Select Cycle Quantity (RM 159 / RM 286 / RM 405)',
    fieldState: 'Malaysia Delivery State / Territory',
    fieldAddress: 'Full Delivery Address or PosLaju/NinjaVan Collection Point',
    fieldPayment: 'Preferred Settlement Method (FPX / DuitNow QR / COD)',
    submitOrderBtn: 'Confirm Discreet Order Now',
  },
  'ms-MY': {
    navHome: 'Utama Apotekari',
    navProducts: 'Formulasi',
    navCompare: 'Jadual Perbandingan',
    navIngredients: 'Monograf Botani',
    navMalaysiaDelivery: 'Penghantaran Malaysia',
    navGuides: 'Panduan & Protokol',
    navContact: 'Khidmat Privasi',
    ctaOrderExpress: 'Tempah Bungkusan Rahsia — RM 159',
    ctaSelectTier: 'Pilih Pakej Botol',
    priceSingleLabel: 'RM 159 / Botol',
    priceTwoLabel: 'RM 286 (2 Botol • Diskaun 10% vs RM 318 + Penghantaran Percuma)',
    priceThreeLabel: 'RM 405 (3 Botol • Diskaun 15% vs RM 477 Pakej Lengkap 90 Hari)',
    discreetGuarantee: '100% Bungkusan Rahsia Tanpa Nama Produk • Sokongan FPX / DuitNow QR / COD Seluruh Malaysia',
    complianceNotice:
      'Suplemen Pemakanan Botani Tulen untuk Lelaki Dewasa (18+). Dirumus khas untuk menyokong kecergasan fizikal, stamina, dan tenaga harian. Tidak bertujuan untuk mendiagnosis, merawat, atau menyembuhkan sebarang penyakit.',
    drawerHeading: 'Meja Tempahan Ekspres Rahsia Malaysia',
    drawerSubheading:
      'Lengkapkan butiran penghantaran rahsia anda di bawah. Pesanan dihantar terus ke pusat operasi Kuala Lumpur kami (sales@onyxman.my / waleedshoaibofficial@gmail.com) untuk pengesahan pantas melalui WhatsApp.',
    fieldFullName: 'Nama Penerima (Atau Nama Ringkas Pada Bungkusan)',
    fieldPhoneMY: 'Nombor Telefon WhatsApp Malaysia (cth: 012-345 6789)',
    fieldEmail: 'Alamat E-mel (Untuk Nombor Tracking & Peringatan Bekalan)',
    fieldProduct: 'Pilih Formulasi Onyxmen',
    fieldTier: 'Pilih Kuantiti Pakej (RM 159 / RM 286 / RM 405)',
    fieldState: 'Negeri / Wilayah Penghantaran',
    fieldAddress: 'Alamat Penuh Penghantaran',
    fieldPayment: 'Kaedah Pembayaran Pilihan (FPX / DuitNow QR / COD)',
    submitOrderBtn: 'Sahkan Tempahan Rahsia Sekarang',
  },
};

/**
 * Resolves a route pair by its unique key or path.
 */
export function findRoutePair(keyOrPath: string): RoutePair | undefined {
  const normalized = keyOrPath.endsWith('/') || keyOrPath === '/' ? keyOrPath : `${keyOrPath}/`;
  return ROUTE_REGISTRY.find(
    (route) =>
      route.key === keyOrPath ||
      route.enPath === normalized ||
      route.msPath === normalized
  );
}

/**
 * Generates bidirectional hreflang link tags (en-MY, ms-MY, x-default) + canonical tag
 * for any registered route.
 */
export function buildHreflangTags(routeKeyOrPath: string, activeLocale: SupportedLocale): {
  canonicalUrl: string;
  enMyUrl: string;
  msMyUrl: string;
  xDefaultUrl: string;
  htmlHeadLinks: string;
} {
  const pair = findRoutePair(routeKeyOrPath);
  if (!pair) {
    throw new Error(`Unregistered route key or path for hreflang generation: ${routeKeyOrPath}`);
  }

  const enMyUrl = `${DOMAIN_ORIGIN}${pair.enPath}`;
  const msMyUrl = `${DOMAIN_ORIGIN}${pair.msPath}`;
  const canonicalUrl = activeLocale === 'en-MY' ? enMyUrl : msMyUrl;
  const xDefaultUrl = enMyUrl;

  const htmlHeadLinks = [
    `<link rel="canonical" href="${canonicalUrl}" />`,
    `<link rel="alternate" hreflang="en-MY" href="${enMyUrl}" />`,
    `<link rel="alternate" hreflang="ms-MY" href="${msMyUrl}" />`,
    `<link rel="alternate" hreflang="x-default" href="${xDefaultUrl}" />`,
  ].join('\n    ');

  return {
    canonicalUrl,
    enMyUrl,
    msMyUrl,
    xDefaultUrl,
    htmlHeadLinks,
  };
}

/**
 * Translates a UI dictionary token for the active locale.
 */
export function t(locale: SupportedLocale, tokenKey: string): string {
  const dict = UI_DICTIONARY[locale];
  return dict?.[tokenKey] ?? UI_DICTIONARY['en-MY'][tokenKey] ?? tokenKey;
}
