/**
 * ONYXMEN.MY — EXACT 1:1 SOVEREIGN BOTANICALS HEADER (DEMO_01 REPLICATION)
 * Features:
 * - Row 1 (.header-crown-black): Solid #121315 matte-black bar with centered italic Cormorant Garamond "ONYXMEN" wordmark
 * - Row 2 (.header-white-nav): Pure-white #FFFFFF minimal navigation bar with centered Montserrat uppercase links
 *   (HOME, PRODUCTS, FORMULAS, SCIENCE, DISCREET VIP, CONTACT)
 * - Right Minimal Line Icons: EN | BM Paired Route Switcher + 8K Optical Macro Loupe Toggle + Mobile Twin Toggle + VIP Bag Trigger
 */

/**
 * Normalizes locale code to either 'ms-MY' or 'en-MY'.
 * @param {string} [lang]
 * @returns {'en-MY' | 'ms-MY'}
 */
export function resolveHeaderLocale(lang = 'en-MY') {
  const clean = String(lang || 'en-MY').toLowerCase();
  return clean.startsWith('ms') || clean === 'bm' ? 'ms-MY' : 'en-MY';
}

export const FLAGSHIP_NAV_PRODUCTS = [
  {
    id: 'horsemen',
    slug: 'horsemen',
    nameEn: 'Horsemen',
    nameMs: 'Horsemen',
    metaEn: '20 Caps × 500mg · Tongkat Ali & Maca',
    metaMs: '20 Kapsul × 500mg · Tongkat Ali & Maca',
    enPath: '/products/horsemen/',
    msPath: '/ms/produk/horsemen/',
    price: 'RM 159',
  },
  {
    id: 'hammer-of-thor',
    slug: 'hammer-of-thor',
    nameEn: 'Hammer of Thor',
    nameMs: 'Hammer of Thor',
    metaEn: '20 Veg. Caps · Tribulus Endurance',
    metaMs: '20 Kapsul Veg. · Ketahanan Tribulus',
    enPath: '/products/hammer-of-thor/',
    msPath: '/ms/produk/hammer-of-thor/',
    price: 'RM 159',
  },
  {
    id: 'grow-xl',
    slug: 'grow-xl',
    nameEn: 'Grow XL',
    nameMs: 'Grow XL',
    metaEn: '30 Capsules · 30-Day Daily Vitality',
    metaMs: '30 Kapsul · Protokol Harian 30 Hari',
    enPath: '/products/grow-xl/',
    msPath: '/ms/produk/grow-xl/',
    price: 'RM 159',
  },
  {
    id: 'magnum-pump-xr',
    slug: 'magnum-pump-xr',
    nameEn: 'Magnum Pump XR',
    nameMs: 'Magnum Pump XR',
    metaEn: '30 Black Caps · Nitric Oxide Complex',
    metaMs: '30 Kapsul Hitam · Kompleks Nitrik Oksida',
    enPath: '/products/magnum-pump-xr/',
    msPath: '/ms/produk/magnum-pump-xr/',
    price: 'RM 159',
  },
];

/**
 * Infers paired EN / MS route paths if not explicitly passed.
 * @param {string} canonicalPath
 * @param {'en-MY' | 'ms-MY'} locale
 * @param {string} [explicitEn]
 * @param {string} [explicitMs]
 * @returns {{ enHref: string, msHref: string }}
 */
export function resolvePairedLocaleRoutes(canonicalPath = '/', locale = 'en-MY', explicitEn, explicitMs) {
  let pathClean = String(canonicalPath || '/').trim();
  if (!pathClean.startsWith('/')) {
    pathClean = `/${pathClean}`;
  }

  let enHref = explicitEn ? String(explicitEn).trim() : '';
  let msHref = explicitMs ? String(explicitMs).trim() : '';

  if (enHref && enHref.startsWith('https://www.onyxmen.my')) {
    enHref = enHref.replace('https://www.onyxmen.my', '') || '/';
  }
  if (msHref && msHref.startsWith('https://www.onyxmen.my')) {
    msHref = msHref.replace('https://www.onyxmen.my', '') || '/ms/';
  }

  if (!enHref || !msHref) {
    if (locale === 'ms-MY' || pathClean.startsWith('/ms/')) {
      msHref = msHref || pathClean;
      enHref =
        enHref ||
        pathClean
          .replace(/^\/ms\/produk\//, '/products/')
          .replace(/^\/ms\/perbandingan\//, '/compare/')
          .replace(/^\/ms\/ramuan-botani\//, '/ingredients/')
          .replace(/^\/ms\/ingredients\//, '/ingredients/')
          .replace(/^\/ms\/penghantaran-malaysia\//, '/malaysia/')
          .replace(/^\/ms\/malaysia\//, '/malaysia/')
          .replace(/^\/ms\/panduan\//, '/guides/')
          .replace(/^\/ms\/tentang-kami\/$/, '/about/')
          .replace(/^\/ms\/jaminan-ketulenan\/$/, '/authenticity-guarantee/')
          .replace(/^\/ms\/penghantaran-rahsia\/$/, '/discreet-shipping/')
          .replace(/^\/ms\/penghantaran-dan-bungkusan-rahsia\/$/, '/discreet-shipping/')
          .replace(/^\/ms\/hubungi-kami\/$/, '/contact/')
          .replace(/^\/ms\/polisi-privasi\/$/, '/privacy-policy/')
          .replace(/^\/ms\/terma-perkhidmatan\/$/, '/terms-of-service/')
          .replace(/^\/ms\/soalan-lazim\/$/, '/faq/')
          .replace(/^\/ms\/privasi-dan-terma\/$/, '/privacy-policy/')
          .replace(/^\/ms\/$/, '/');
    } else {
      enHref = enHref || pathClean;
      msHref =
        msHref ||
        (pathClean === '/'
          ? '/ms/'
          : pathClean
              .replace(/^\/products\//, '/ms/produk/')
              .replace(/^\/compare\//, '/ms/perbandingan/')
              .replace(/^\/ingredients\//, '/ms/ingredients/')
              .replace(/^\/malaysia-delivery\//, '/ms/malaysia/')
              .replace(/^\/malaysia\//, '/ms/malaysia/')
              .replace(/^\/guides\//, '/ms/panduan/')
              .replace(/^\/about\/$/, '/ms/tentang-kami/')
              .replace(/^\/authenticity-guarantee\/$/, '/ms/jaminan-ketulenan/')
              .replace(/^\/discreet-shipping\/$/, '/ms/penghantaran-rahsia/')
              .replace(/^\/shipping-and-discreet-packaging\/$/, '/ms/penghantaran-rahsia/')
              .replace(/^\/contact\/$/, '/ms/hubungi-kami/')
              .replace(/^\/privacy-policy\/$/, '/ms/polisi-privasi/')
              .replace(/^\/terms-of-service\/$/, '/ms/terma-perkhidmatan/')
              .replace(/^\/faq\/$/, '/ms/soalan-lazim/')
              .replace(/^\/privacy-and-terms\/$/, '/ms/polisi-privasi/'));
    }
  }

  return {
    enHref: enHref || '/',
    msHref: msHref || '/ms/',
  };
}

/**
 * Renders the 1:1 Sovereign Botanicals Header (`demo_01_sovereign_botanicals.html`).
 *
 * @param {Object} [options]
 * @param {string} [options.lang='en-MY']
 * @param {string} [options.canonicalPath='/']
 * @param {string} [options.alternatePathEn]
 * @param {string} [options.alternatePathMs]
 * @param {string} [options.activeNav='']
 * @param {string} [options.productSlug='horsemen']
 * @returns {string} HTML string
 */
export function renderObsidianHeader(options = {}) {
  const locale = resolveHeaderLocale(options.lang || options.locale || 'en-MY');
  const isMs = locale === 'ms-MY';
  const canonicalPath = options.canonicalPath || (isMs ? '/ms/' : '/');
  const defaultProduct = options.productSlug || 'horsemen';

  const { enHref, msHref } = resolvePairedLocaleRoutes(
    canonicalPath,
    locale,
    options.alternatePathEn || options.enPath,
    options.alternatePathMs || options.msPath
  );

  const homeHref = isMs ? '/ms/' : '/';

  return `
<header class="site-header obsidian-header" role="banner" data-obsidian-header>
  <!-- Row 1: Solid Matte-Black Crown Bar with Centered Italic "ONYXMEN" -->
  <div class="header-crown-black">
    <a href="${homeHref}" class="crown-wordmark" aria-label="ONYXMEN Official Malaysia Storefront">ONYXMEN</a>
  </div>

  <!-- Row 2: Pure-White Minimal Navigation Bar with Centered Links & Right Icons -->
  <nav class="header-white-nav" aria-label="${isMs ? 'Navigasi Utama ONYXMEN' : 'ONYXMEN Primary Storefront Navigation'}">
    <div class="nav-center-links">
      <a href="#top-hero" class="nav-item active">${isMs ? 'UTAMA' : 'HOME'}</a>
      <a href="#conservatory-stage" class="nav-item">${isMs ? 'PRODUK' : 'PRODUCTS'}</a>
      <a href="#formula-comparison" class="nav-item">${isMs ? 'FORMULA' : 'FORMULAS'}</a>
      <a href="#botanical-science" class="nav-item">${isMs ? 'SAINS' : 'SCIENCE'}</a>
      <a href="#discreet-vip" class="nav-item">${isMs ? 'VIP RAHSIA' : 'DISCREET VIP'}</a>
      <a href="#footer-contact" class="nav-item">${isMs ? 'HUBUNGI' : 'CONTACT'}</a>
    </div>

    <div class="nav-right-icons">
      <!-- Paired EN | BM Language Switcher -->
      <div class="sovereign-locale-switch" role="group" aria-label="Language Switcher">
        <a href="${enHref}" lang="en-MY" hreflang="en-MY" class="sovereign-locale-link ${!isMs ? 'active' : ''}" ${!isMs ? 'aria-current="true"' : ''}>EN</a>
        <span class="sovereign-locale-sep">|</span>
        <a href="${msHref}" lang="ms-MY" hreflang="ms-MY" class="sovereign-locale-link ${isMs ? 'active' : ''}" ${isMs ? 'aria-current="true"' : ''}>BM</a>
      </div>

      <!-- Toggle 120mm 3.5x Optical Macro Loupe (Clean Search Icon) -->
      <button type="button" class="icon-btn" id="btn-toggle-loupe" title="Toggle 8K Optical Macro Loupe" aria-label="Toggle Optical Macro Loupe">
        <svg viewBox="0 0 24 24">
          <circle cx="11" cy="11" r="7"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>

      <!-- Shopping Bag Trigger -->
      <button
        type="button"
        class="icon-btn"
        id="btn-open-bag"
        data-open-order-drawer="true"
        data-order-product="${defaultProduct}"
        data-order-qty="1"
        title="Open ONYXMEN VIP Bag"
        aria-label="Open ONYXMEN VIP Bag"
      >
        <svg viewBox="0 0 24 24">
          <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <path d="M16 10a4 4 0 0 1-8 0"></path>
        </svg>
        <span class="bag-badge" id="bag-count-badge" style="display:inline-flex;">2</span>
      </button>
    </div>
  </nav>
</header>`;
}

export const ObsidianHeader = renderObsidianHeader;
export default renderObsidianHeader;
