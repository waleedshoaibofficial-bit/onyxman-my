/**
 * ONYXMEN.MY — ARCHITECTURAL LUXURY EDITORIAL FOOTER (MS-064 to MS-065)
 * Links to:
 * - All 4 Flagship Formulations (Horsemen, Hammer of Thor, Grow XL, Magnum Pump XR)
 * - All 3 Comparisons (Comparison Matrix, Horsemen vs Hammer of Thor, Grow XL vs Magnum Pump XR)
 * - All 4 Botanical Monographs (Tongkat Ali, Peruvian Black Maca, L-Arginine & L-Citrulline, Korean Red Panax Ginseng)
 * - All 16 Malaysia State & Federal Territory Discreet Delivery Hubs
 * - All 6 Buyer & Vitality Protocol Guides
 * - All 6 Trust, Authenticity, Discreet Packaging, PDPA, Terms & Contact Pages
 * - Official Kuala Lumpur Concierge Desk (sales@onyxmen.my & info@onyxmen.my)
 * - Compliant Botanical Dietary Supplement Notice (Zero fake medical claims)
 */

/**
 * Normalizes locale code to either 'ms-MY' or 'en-MY'.
 * @param {string} [lang]
 * @returns {'en-MY' | 'ms-MY'}
 */
export function resolveFooterLocale(lang = 'en-MY') {
  const clean = String(lang || 'en-MY').toLowerCase();
  return clean.startsWith('ms') || clean === 'bm' ? 'ms-MY' : 'en-MY';
}

export const FOOTER_PRODUCTS = [
  {
    slug: 'horsemen',
    enPath: '/products/horsemen/',
    msPath: '/ms/produk/horsemen/',
    labelEn: 'Horsemen (20 Capsules × 500mg)',
    labelMs: 'Horsemen (20 Kapsul × 500mg)',
    metaEn: 'Tongkat Ali & Black Maca Reserve · RM 159',
    metaMs: 'Ekstrak Tongkat Ali & Maca Hitam · RM 159',
  },
  {
    slug: 'hammer-of-thor',
    enPath: '/products/hammer-of-thor/',
    msPath: '/ms/produk/hammer-of-thor/',
    labelEn: 'Hammer of Thor (20 Veg. Capsules)',
    labelMs: 'Hammer of Thor (20 Kapsul Veg.)',
    metaEn: 'Tribulus Terrestris Stamina Complex · RM 159',
    metaMs: 'Kompleks Stamina Tribulus Terrestris · RM 159',
  },
  {
    slug: 'grow-xl',
    enPath: '/products/grow-xl/',
    msPath: '/ms/produk/grow-xl/',
    labelEn: 'Grow XL (30 Capsules)',
    labelMs: 'Grow XL (30 Kapsul)',
    metaEn: '30-Day Daily Botanical Vitality · RM 159',
    metaMs: 'Nutrisi Kecergasan Harian 30 Hari · RM 159',
  },
  {
    slug: 'magnum-pump-xr',
    enPath: '/products/magnum-pump-xr/',
    msPath: '/ms/produk/magnum-pump-xr/',
    labelEn: 'Magnum Pump XR (30 Black Capsules)',
    labelMs: 'Magnum Pump XR (30 Kapsul Hitam)',
    metaEn: 'L-Arginine & Nitric Oxide Precursor · RM 159',
    metaMs: 'Sokongan L-Arginine & Nitrik Oksida · RM 159',
  },
];

export const FOOTER_COMPARISONS = [
  {
    key: 'compare-index',
    enPath: '/compare/',
    msPath: '/ms/perbandingan/',
    labelEn: 'Complete 4-Bottle Comparison Matrix',
    labelMs: 'Jadual Perbandingan Lengkap 4 Botol',
  },
  {
    key: 'compare-horsemen-vs-hammer-of-thor',
    enPath: '/compare/horsemen-vs-hammer-of-thor/',
    msPath: '/ms/perbandingan/horsemen-vs-hammer-of-thor/',
    labelEn: 'Horsemen vs Hammer of Thor (20-Capsule Duel)',
    labelMs: 'Perbandingan Horsemen vs Hammer of Thor (20 Kapsul)',
  },
  {
    key: 'compare-grow-xl-vs-magnum-pump-xr',
    enPath: '/compare/grow-xl-vs-magnum-pump-xr/',
    msPath: '/ms/perbandingan/grow-xl-vs-magnum-pump-xr/',
    labelEn: 'Grow XL vs Magnum Pump XR (30-Capsule Duel)',
    labelMs: 'Perbandingan Grow XL vs Magnum Pump XR (30 Kapsul)',
  },
];

export const FOOTER_MONOGRAPHS = [
  {
    key: 'ingredient-tongkat-ali',
    enPath: '/ingredients/tongkat-ali-eurycoma-longifolia/',
    msPath: '/ms/ramuan-botani/tongkat-ali-eurycoma-longifolia/',
    labelEn: 'Malaysian Tongkat Ali (Eurycoma longifolia)',
    labelMs: 'Tongkat Ali Malaysia (Eurycoma longifolia)',
  },
  {
    key: 'ingredient-black-maca',
    enPath: '/ingredients/black-maca-lepidium-meyenii/',
    msPath: '/ms/ramuan-botani/maca-hitam-lepidium-meyenii/',
    labelEn: 'Peruvian Black Maca (Lepidium meyenii)',
    labelMs: 'Maca Hitam Peru (Lepidium meyenii)',
  },
  {
    key: 'ingredient-l-arginine-citrulline',
    enPath: '/ingredients/l-arginine-l-citrulline-nitric-oxide/',
    msPath: '/ms/ramuan-botani/l-arginine-l-citrulline-nitrik-oksida/',
    labelEn: 'L-Arginine & L-Citrulline (Nitric Oxide Pathway)',
    labelMs: 'L-Arginine & L-Citrulline (Laluan Nitrik Oksida)',
  },
  {
    key: 'ingredient-panax-ginseng',
    enPath: '/ingredients/panax-ginseng-ginsenosides/',
    msPath: '/ms/ramuan-botani/panax-ginseng-ginsenosida/',
    labelEn: 'Korean Red Panax Ginseng (Standardized Ginsenosides)',
    labelMs: 'Panax Ginseng Merah Korea (Ginsenosida Piawai)',
  },
];

export const FOOTER_MALAYSIA_16_STATES = [
  {
    stateCode: 'MY-14',
    enPath: '/malaysia-delivery/kuala-lumpur/',
    msPath: '/ms/penghantaran-malaysia/kuala-lumpur/',
    labelEn: 'Kuala Lumpur (Same-Day 3–5h)',
    labelMs: 'Kuala Lumpur (Hari Sama 3–5 Jam)',
  },
  {
    stateCode: 'MY-10',
    enPath: '/malaysia-delivery/selangor/',
    msPath: '/ms/penghantaran-malaysia/selangor/',
    labelEn: 'Selangor & Klang Valley (Same-Day)',
    labelMs: 'Selangor & Lembah Klang (Hari Sama)',
  },
  {
    stateCode: 'MY-07',
    enPath: '/malaysia-delivery/penang/',
    msPath: '/ms/penghantaran-malaysia/pulau-pinang/',
    labelEn: 'Penang / Pulau Pinang (1–2 Days)',
    labelMs: 'Pulau Pinang (Ekspres 1–2 Hari)',
  },
  {
    stateCode: 'MY-01',
    enPath: '/malaysia-delivery/johor-bahru/',
    msPath: '/ms/penghantaran-malaysia/johor-bahru/',
    labelEn: 'Johor Bahru & Iskandar (1–2 Days)',
    labelMs: 'Johor Bahru & Iskandar (1–2 Hari)',
  },
  {
    stateCode: 'MY-08',
    enPath: '/malaysia-delivery/perak-ipoh/',
    msPath: '/ms/penghantaran-malaysia/perak-ipoh/',
    labelEn: 'Perak — Ipoh & Taiping (1–2 Days)',
    labelMs: 'Perak — Ipoh & Taiping (1–2 Hari)',
  },
  {
    stateCode: 'MY-04',
    enPath: '/malaysia-delivery/melaka/',
    msPath: '/ms/penghantaran-malaysia/melaka/',
    labelEn: 'Melaka City & Ayer Keroh (1–2 Days)',
    labelMs: 'Bandaraya Melaka & Ayer Keroh (1–2 Hari)',
  },
  {
    stateCode: 'MY-05',
    enPath: '/malaysia-delivery/negeri-sembilan-seremban/',
    msPath: '/ms/penghantaran-malaysia/negeri-sembilan-seremban/',
    labelEn: 'Negeri Sembilan — Seremban (1–2 Days)',
    labelMs: 'Negeri Sembilan — Seremban (1–2 Hari)',
  },
  {
    stateCode: 'MY-06',
    enPath: '/malaysia-delivery/pahang-kuantan/',
    msPath: '/ms/penghantaran-malaysia/pahang-kuantan/',
    labelEn: 'Pahang — Kuantan & Temerloh (1–2 Days)',
    labelMs: 'Pahang — Kuantan & Temerloh (1–2 Hari)',
  },
  {
    stateCode: 'MY-02',
    enPath: '/malaysia-delivery/kedah-alor-setar/',
    msPath: '/ms/penghantaran-malaysia/kedah-alor-setar/',
    labelEn: 'Kedah — Alor Setar & Langkawi (1–2 Days)',
    labelMs: 'Kedah — Alor Setar & Langkawi (1–2 Hari)',
  },
  {
    stateCode: 'MY-03',
    enPath: '/malaysia-delivery/kelantan-kota-bharu/',
    msPath: '/ms/penghantaran-malaysia/kelantan-kota-bharu/',
    labelEn: 'Kelantan — Kota Bharu (1–2 Days)',
    labelMs: 'Kelantan — Kota Bharu (1–2 Hari)',
  },
  {
    stateCode: 'MY-11',
    enPath: '/malaysia-delivery/terengganu-kuala-terengganu/',
    msPath: '/ms/penghantaran-malaysia/terengganu-kuala-terengganu/',
    labelEn: 'Terengganu — Kuala Terengganu (1–2 Days)',
    labelMs: 'Terengganu — Kuala Terengganu (1–2 Hari)',
  },
  {
    stateCode: 'MY-09',
    enPath: '/malaysia-delivery/perlis-kangar/',
    msPath: '/ms/penghantaran-malaysia/perlis-kangar/',
    labelEn: 'Perlis — Kangar & Arau (1–2 Days)',
    labelMs: 'Perlis — Kangar & Arau (1–2 Hari)',
  },
  {
    stateCode: 'MY-12',
    enPath: '/malaysia-delivery/sabah-kota-kinabalu/',
    msPath: '/ms/penghantaran-malaysia/sabah-kota-kinabalu/',
    labelEn: 'Sabah — Kota Kinabalu, Sandakan & Tawau',
    labelMs: 'Sabah — Kota Kinabalu, Sandakan & Tawau',
  },
  {
    stateCode: 'MY-13',
    enPath: '/malaysia-delivery/sarawak-kuching/',
    msPath: '/ms/penghantaran-malaysia/sarawak-kuching/',
    labelEn: 'Sarawak — Kuching, Miri, Sibu & Bintulu',
    labelMs: 'Sarawak — Kuching, Miri, Sibu & Bintulu',
  },
  {
    stateCode: 'MY-16',
    enPath: '/malaysia-delivery/putrajaya/',
    msPath: '/ms/penghantaran-malaysia/putrajaya/',
    labelEn: 'Putrajaya & Cyberjaya (Same-Day)',
    labelMs: 'Putrajaya & Cyberjaya (Hari Sama)',
  },
  {
    stateCode: 'MY-15',
    enPath: '/malaysia-delivery/labuan/',
    msPath: '/ms/penghantaran-malaysia/labuan/',
    labelEn: 'WP Labuan (Discreet Air Freight)',
    labelMs: 'WP Labuan (Kargo Udara Rahsia)',
  },
];

export const FOOTER_BUYER_GUIDES = [
  {
    key: 'guides-index',
    enPath: '/guides/',
    msPath: '/ms/panduan/',
    labelEn: 'Complete Vitality & Protocol Library',
    labelMs: 'Perpustakaan Panduan Stamina & Protokol',
  },
  {
    key: 'guide-dosage-timing',
    enPath: '/guides/optimal-capsule-timing-and-absorption-protocol/',
    msPath: '/ms/panduan/masa-pengambilan-kapsul-dan-penyerapan-optimum/',
    labelEn: 'Optimal Capsule Timing & Absorption Protocol',
    labelMs: 'Masa Pengambilan Kapsul & Penyerapan Optimum',
  },
  {
    key: 'guide-authenticity-verification',
    enPath: '/guides/how-to-verify-authentic-onyxman-bottles-malaysia/',
    msPath: '/ms/panduan/cara-semak-ketulenan-botol-onyxman-malaysia/',
    labelEn: 'How to Verify Authentic Onyxmen Bottles in Malaysia',
    labelMs: 'Cara Semak Ketulenan Botol Onyxmen di Malaysia',
  },
  {
    key: 'guide-20-vs-30-cycle',
    enPath: '/guides/#cycle-selection-20-vs-30-capsules',
    msPath: '/ms/panduan/#pilihan-kitaran-20-vs-30-kapsul',
    labelEn: '20-Capsule Evening Reserve vs 30-Day Daily Cycle',
    labelMs: 'Panduan Kitaran 20 Kapsul vs 30 Kapsul Harian',
  },
  {
    key: 'guide-nitric-oxide-synergy',
    enPath: '/guides/#botanical-nitric-oxide-synergy',
    msPath: '/ms/panduan/#sinergi-botani-nitrik-oksida',
    labelEn: 'Tongkat Ali, Black Maca & Nitric Oxide Synergy Guide',
    labelMs: 'Panduan Sinergi Tongkat Ali, Maca & Nitrik Oksida',
  },
  {
    key: 'guide-discreet-cod-malaysia',
    enPath: '/guides/#malaysia-cod-and-fpx-discreet-ordering',
    msPath: '/ms/panduan/#panduan-tempahan-cod-dan-fpx-rahsia',
    labelEn: 'Malaysia Discreet COD, FPX & DuitNow QR Buyer Guide',
    labelMs: 'Panduan Pembelian Rahsia COD, FPX & DuitNow QR',
  },
];

export const FOOTER_TRUST_LEGAL = [
  {
    key: 'trust-about',
    enPath: '/about/',
    msPath: '/ms/tentang-kami/',
    labelEn: 'About Onyxmen Apothecary & Quality Board',
    labelMs: 'Tentang Apotekari Onyxmen & Lembaga Kualiti',
  },
  {
    key: 'trust-authenticity',
    enPath: '/guides/how-to-verify-authentic-onyxman-bottles-malaysia/',
    msPath: '/ms/panduan/cara-semak-ketulenan-botol-onyxman-malaysia/',
    labelEn: 'Authenticity Seal & Anti-Counterfeit Verification',
    labelMs: 'Saringan Ketulenan & Anti-Produk Tiruan',
  },
  {
    key: 'trust-discreet-shipping',
    enPath: '/shipping-and-discreet-packaging/',
    msPath: '/ms/penghantaran-dan-bungkusan-rahsia/',
    labelEn: '100% Unmarked Discreet Packaging & COD Policy',
    labelMs: 'Polisi Bungkusan Rahsia Tanpa Nama & COD',
  },
  {
    key: 'trust-pdpa',
    enPath: '/privacy-and-terms/',
    msPath: '/ms/privasi-dan-terma/',
    labelEn: 'PDPA Malaysia Data Privacy & Buyer Anonymity',
    labelMs: 'Polisi Privasi Data PDPA Malaysia & Kerahsiaan',
  },
  {
    key: 'trust-terms',
    enPath: '/privacy-and-terms/#terms-of-sale',
    msPath: '/ms/privasi-dan-terma/#terma-jualan',
    labelEn: 'Terms of Sale, Refund & Supplement Compliance',
    labelMs: 'Terma Jualan, Jaminan & Pematuhan Suplemen',
  },
  {
    key: 'trust-contact',
    enPath: '/contact/',
    msPath: '/ms/hubungi-kami/',
    labelEn: 'Private Kuala Lumpur Concierge Desk',
    labelMs: 'Meja Khidmat Pelanggan Privasi Kuala Lumpur',
  },
];

/**
 * Renders the ObsidianFooter component (`MS-064` to `MS-065`).
 *
 * @param {Object} [options]
 * @param {string} [options.lang='en-MY']
 * @param {string} [options.productSlug='horsemen']
 * @returns {string} HTML string
 */
export function renderObsidianFooter(options = {}) {
  const locale = resolveFooterLocale(options.lang || options.locale || 'en-MY');
  const isMs = locale === 'ms-MY';
  const defaultProduct = options.productSlug || 'horsemen';

  const renderLinkList = (items) =>
    items
      .map((item) => {
        const href = isMs ? item.msPath : item.enPath;
        const label = isMs ? item.labelMs : item.labelEn;
        return `<a href="${href}" class="obsidian-footer__link">${label}</a>`;
      })
      .join('\n        ');

  const productLinksHtml = FOOTER_PRODUCTS.map((item) => {
    const href = isMs ? item.msPath : item.enPath;
    const label = isMs ? item.labelMs : item.labelEn;
    const meta = isMs ? item.metaMs : item.metaEn;
    return `
        <a href="${href}" class="obsidian-footer__link obsidian-footer__link--product">
          <span class="obsidian-footer__product-title">${label}</span>
          <span class="obsidian-footer__product-meta">${meta}</span>
        </a>`;
  }).join('');

  const stateHubsHtml = FOOTER_MALAYSIA_16_STATES.map((st) => {
    const href = isMs ? st.msPath : st.enPath;
    const label = isMs ? st.labelMs : st.labelEn;
    return `
        <a href="${href}" class="obsidian-footer__state-link" data-state-code="${st.stateCode}">
          <span class="obsidian-footer__state-code">${st.stateCode}</span>
          <span class="obsidian-footer__state-name">${label}</span>
        </a>`;
  }).join('');

  return `
<footer class="obsidian-footer" role="contentinfo" data-obsidian-footer>
  <!-- Top Architectural Brand & Express Acquisition Horizon -->
  <div class="obsidian-footer__horizon">
    <div class="obsidian-footer__horizon-left">
      <span class="editorial-kicker">${
        isMs
          ? 'ONYXMEN.MY · APOTEKARI BOTANI LELAKI DEWASA MALAYSIA'
          : 'ONYXMEN.MY · MALAYSIA ARCHITECTURAL MEN’S VITALITY VAULT'
      }</span>
      <h2 class="editorial-headline-lg obsidian-footer__horizon-title">
        ${
          isMs
            ? 'Empat Formulasi Botani Berprestasi Tinggi. Dihantar Dalam Bungkusan Rahsia Tanpa Nama.'
            : 'Four Standardized Botanical Reserves. Dispatched In Unmarked Obsidian Security Parcels.'
        }
      </h2>
      <p class="obsidian-footer__horizon-lead">
        ${
          isMs
            ? 'Harga Rasmi Seluruh Malaysia: 1 Botol RM 159 (159.00 MYR) · 2 Botol RM 318 (318.00 MYR) · 3 Botol RM 477 (477.00 MYR). Penghantaran Hari Sama Lembah Klang & Ekspres 16 Negeri.'
            : 'Official Malaysia Pricing: 1 Bottle RM 159 (159.00 MYR) · 2 Bottles RM 318 (318.00 MYR) · 3 Bottles RM 477 (477.00 MYR). Same-Day Klang Valley Runner & 16-State Express Courier.'
        }
      </p>
    </div>

    <div class="obsidian-footer__horizon-right">
      <button
        type="button"
        class="cta-foil-primary"
        data-open-order-drawer="true"
        data-order-product="${defaultProduct}"
        data-order-qty="1"
      >
        <span>${isMs ? 'TEMPAH BUNGKUSAN RAHSIA · RM 159' : 'ACQUIRE DISCREET RESERVE · RM 159'}</span>
        <span aria-hidden="true">→</span>
      </button>
      <div class="obsidian-footer__concierge-meta">
        <span>${isMs ? 'Meja Tempahan & Sokongan Privasi (09:00–23:00 MYT):' : 'Private Concierge & Order Desk (09:00–23:00 MYT):'}</span>
        <div class="obsidian-footer__concierge-emails">
          <a href="mailto:sales@onyxmen.my" class="obsidian-footer__email-link">sales@onyxmen.my</a>
          <span aria-hidden="true">·</span>
          <a href="mailto:info@onyxmen.my" class="obsidian-footer__email-link">info@onyxmen.my</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Primary 5-Column Editorial Directory -->
  <div class="obsidian-footer__columns">
    <!-- Column 1: Brand Identity & Official Contact Desk -->
    <div class="obsidian-footer__col obsidian-footer__col--brand">
      <p class="obsidian-footer__heading">${
        isMs ? '01 · BILIK KEBAL APOTEKARI ONYXMEN' : '01 · ONYXMEN APOTHECARY DESK'
      }</p>
      <p class="obsidian-footer__brand-copy">
        ${
          isMs
            ? 'Onyxmen Malaysia Apothecary & Men’s Vitality Vault menyediakan suplemen pemakanan botani dan asid amino berkepekatan tinggi untuk lelaki dewasa (18+) di seluruh Malaysia.'
            : 'Onyxmen Malaysia Apothecary & Men’s Vitality Vault curates standardized botanical extracts and amino-acid vitality protocols for adult men (18+) across Malaysia.'
        }
      </p>
      <div class="obsidian-footer__desk-ledger">
        <div class="obsidian-footer__desk-row">
          <span class="obsidian-footer__desk-label">${isMs ? 'E-MEL JUALAN RASMI' : 'OFFICIAL SALES DESK'}</span>
          <a href="mailto:sales@onyxmen.my" class="obsidian-footer__desk-val">sales@onyxmen.my</a>
        </div>
        <div class="obsidian-footer__desk-row">
          <span class="obsidian-footer__desk-label">${isMs ? 'PERTANYAAN UMUM' : 'CONCIERGE INQUIRIES'}</span>
          <a href="mailto:info@onyxmen.my" class="obsidian-footer__desk-val">info@onyxmen.my</a>
        </div>
        <div class="obsidian-footer__desk-row">
          <span class="obsidian-footer__desk-label">${isMs ? 'PUSAT OPERASI' : 'FULFILMENT HUB'}</span>
          <span class="obsidian-footer__desk-val">Kuala Lumpur & Selangor (50450 MY)</span>
        </div>
        <div class="obsidian-footer__desk-row">
          <span class="obsidian-footer__desk-label">${isMs ? 'PEMBAYARAN RASMI' : 'SETTLEMENT MODES'}</span>
          <span class="obsidian-footer__desk-val">FPX · DuitNow QR · COD Malaysia</span>
        </div>
      </div>
    </div>

    <!-- Column 2: All 4 Flagship Formulations -->
    <div class="obsidian-footer__col">
      <p class="obsidian-footer__heading">${
        isMs ? '02 · EMPAT FORMULASI UTAMA (RM 159)' : '02 · FOUR FLAGSHIP FORMULATIONS'
      }</p>
      <a href="${isMs ? '/ms/produk/' : '/products/'}" class="obsidian-footer__link">
        ${isMs ? 'Semua Formulasi Onyxmen (Vault)' : 'All Onyxmen Formulations Vault'}
      </a>
      ${productLinksHtml}
    </div>

    <!-- Column 3: Comparisons & Botanical Monographs -->
    <div class="obsidian-footer__col">
      <p class="obsidian-footer__heading">${
        isMs ? '03 · PERBANDINGAN & MONOGRAF BOTANI' : '03 · COMPARISONS & MONOGRAPHS'
      }</p>
      ${renderLinkList(FOOTER_COMPARISONS)}
      <span class="obsidian-footer__subheading">${
        isMs ? 'Monograf Fitokimia & Ramuan' : 'Botanical Ingredient Monographs'
      }</span>
      <a href="${isMs ? '/ms/ramuan-botani/' : '/ingredients/'}" class="obsidian-footer__link">
        ${isMs ? 'Indeks Monograf Ramuan Botani' : 'Botanical Monographs Index'}
      </a>
      ${renderLinkList(FOOTER_MONOGRAPHS)}
    </div>

    <!-- Column 4: 6 Buyer Guides -->
    <div class="obsidian-footer__col">
      <p class="obsidian-footer__heading">${
        isMs ? '04 · 6 PANDUAN PEMBELI & PROTOKOL' : '04 · 6 BUYER & PROTOCOL GUIDES'
      }</p>
      ${renderLinkList(FOOTER_BUYER_GUIDES)}
    </div>

    <!-- Column 5: Trust, Authenticity, Discreet Packaging, PDPA & Terms -->
    <div class="obsidian-footer__col">
      <p class="obsidian-footer__heading">${
        isMs ? '05 · KETULENAN, PRIVASI PDPA & TERMA' : '05 · TRUST, PDPA PRIVACY & TERMS'
      }</p>
      ${renderLinkList(FOOTER_TRUST_LEGAL)}
    </div>
  </div>

  <!-- All 16 Malaysia State & Federal Territory Delivery Hubs Ledger -->
  <div class="obsidian-footer__states-band" aria-label="${
    isMs
      ? 'Rangkaian Penghantaran Rahsia 16 Negeri dan Wilayah Persekutuan Malaysia'
      : 'All 16 Malaysia State and Federal Territory Discreet Delivery Hubs'
  }">
    <div class="obsidian-footer__states-header">
      <span class="obsidian-footer__heading">
        ${
          isMs
            ? '06 · RANGKAIAN PENGHANTARAN RAHSIA KE SEMUA 16 NEGERI & WILAYAH PERSEKUTUAN MALAYSIA'
            : '06 · NATIONWIDE DISCREET COURIER & RUNNER COVERAGE ACROSS ALL 16 MALAYSIA STATES & TERRITORIES'
        }
      </span>
      <a href="${isMs ? '/ms/penghantaran-malaysia/' : '/malaysia-delivery/'}" class="obsidian-footer__states-all">
        ${isMs ? 'Lihat Jadual Penghantaran Penuh →' : 'View Complete Malaysia Delivery Ledger →'}
      </a>
    </div>
    <div class="obsidian-footer__states-strip">
      ${stateHubsHtml}
    </div>
  </div>

  <!-- Compliant Botanical Dietary Supplement Notice & Copyright Ledger -->
  <div class="obsidian-footer__compliance-box" role="note" aria-label="${
    isMs ? 'Notis Pematuhan Suplemen Pemakanan Botani' : 'Botanical Dietary Supplement Compliance Notice'
  }">
    <p class="obsidian-footer__compliance-title">
      ${
        isMs
          ? 'NOTIS PEMATUHAN SUPLEMEN PEMAKANAN BOTANI & JAMINAN KUALITI (MALAYSIA):'
          : 'BOTANICAL DIETARY SUPPLEMENT COMPLIANCE & QUALITY ASSURANCE NOTICE (MALAYSIA):'
      }
    </p>
    <p class="obsidian-footer__compliance-text">
      ${
        isMs
          ? 'Semua formulasi Onyxmen (Horsemen, Hammer of Thor, Grow XL, dan Magnum Pump XR) adalah suplemen pemakanan botani tradisional dan kompleks asid amino yang dirumus khas untuk lelaki dewasa berumur 18 tahun ke atas bagi menyokong kecergasan fizikal, stamina, dan tenaga harian. Produk ini tidak bertujuan untuk mendiagnosis, merawat, menyembuhkan, atau mencegah sebarang penyakit atau keadaan perubatan. Sila rujuk pengamal perubatan bertauliah di Malaysia sekiranya anda mempunyai masalah kardiovaskular, tekanan darah tinggi, atau sedang mengambil ubat preskripsi. Setiap kumpulan pengeluaran disaring di makmal untuk ketulenan fitokimia serta bebas daripada bahan sintetik terlarang.'
          : 'All Onyxmen formulations (Horsemen, Hammer of Thor, Grow XL, and Magnum Pump XR) are traditional botanical and amino-acid dietary supplements formulated exclusively for adult men (18+) seeking nutritional support for physical stamina, vitality, and active performance. These products are not intended to diagnose, treat, cure, or prevent any disease or medical condition. Statements reflect botanical nutrition research and traditional herbal monograph literature. Consult a licensed healthcare practitioner in Malaysia prior to use if you have cardiovascular conditions, hypertension, or take prescription nitrates. Every batch is screened for heavy-metal and microbial safety.'
      }
    </p>
  </div>

  <div class="obsidian-footer__legal">
    <span>
      © ${new Date().getFullYear()} Onyxmen Malaysia Apothecary &amp; Men’s Vitality Vault (<a href="https://www.onyxmen.my">https://www.onyxmen.my</a>). ${
  isMs ? 'Hak Cipta Terpelihara.' : 'All Rights Reserved.'
}
    </span>
    <span>
      ${
        isMs
          ? 'Harga Rasmi: RM 159 (159.00 MYR) · RM 318 (318.00 MYR) · RM 477 (477.00 MYR) | Meja Operasi: sales@onyxmen.my · info@onyxmen.my'
          : 'Official Pricing: RM 159 (159.00 MYR) · RM 318 (318.00 MYR) · RM 477 (477.00 MYR) | Concierge: sales@onyxmen.my · info@onyxmen.my'
      }
    </span>
  </div>
</footer>`;
}

export const ObsidianFooter = renderObsidianFooter;
export default renderObsidianFooter;
