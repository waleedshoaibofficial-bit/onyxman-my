/**
 * ONYXMAN.MY — ARCHITECTURAL GLASSMORPHIC OBSIDIAN HEADER (MS-062 to MS-063)
 * Features:
 * - Full-width architectural glassmorphic obsidian top bar
 * - ONYXMAN liquid-gold wordmark (Cormorant Garamond + Syne)
 * - Direct navigation to all 4 Flagship Formulations (Horsemen, Hammer of Thor, Grow XL, Magnum Pump XR)
 * - Navigation to Comparisons, Botanical Monographs, Malaysia State Delivery Hubs
 * - Instant EN | BM language switcher targeting exact paired route (alternatePathEn / alternatePathMs)
 * - "ACQUIRE · RM 159" Express Discreet Order Drawer trigger
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
          .replace(/^\/ms\/penghantaran-malaysia\//, '/malaysia-delivery/')
          .replace(/^\/ms\/panduan\//, '/guides/')
          .replace(/^\/ms\/tentang-kami\/$/, '/about/')
          .replace(/^\/ms\/penghantaran-dan-bungkusan-rahsia\/$/, '/shipping-and-discreet-packaging/')
          .replace(/^\/ms\/hubungi-kami\/$/, '/contact/')
          .replace(/^\/ms\/privasi-dan-terma\/$/, '/privacy-and-terms/')
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
              .replace(/^\/ingredients\//, '/ms/ramuan-botani/')
              .replace(/^\/malaysia-delivery\//, '/ms/penghantaran-malaysia/')
              .replace(/^\/guides\//, '/ms/panduan/')
              .replace(/^\/about\/$/, '/ms/tentang-kami/')
              .replace(/^\/shipping-and-discreet-packaging\/$/, '/ms/penghantaran-dan-bungkusan-rahsia/')
              .replace(/^\/contact\/$/, '/ms/hubungi-kami/')
              .replace(/^\/privacy-and-terms\/$/, '/ms/privasi-dan-terma/'));
    }
  }

  return {
    enHref: enHref || '/',
    msHref: msHref || '/ms/',
  };
}

/**
 * Renders the ObsidianHeader component (`MS-062` to `MS-063`).
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
  const activeNav = String(options.activeNav || '').toLowerCase();
  const defaultProduct = options.productSlug || 'horsemen';

  const { enHref, msHref } = resolvePairedLocaleRoutes(
    canonicalPath,
    locale,
    options.alternatePathEn || options.enPath,
    options.alternatePathMs || options.msPath
  );

  const homeHref = isMs ? '/ms/' : '/';
  const formulationsIndexHref = isMs ? '/ms/produk/' : '/products/';
  const compareHref = isMs ? '/ms/perbandingan/' : '/compare/';
  const monographsHref = isMs ? '/ms/ramuan-botani/' : '/ingredients/';
  const deliveryHref = isMs ? '/ms/penghantaran-malaysia/' : '/malaysia-delivery/';
  const guidesHref = isMs ? '/ms/panduan/' : '/guides/';

  const brandSubmark = isMs
    ? 'APOTEKARI BOTANI LELAKI MALAYSIA · KUALA LUMPUR'
    : 'ARCHITECTURAL BOTANICAL APOTHECARY · MALAYSIA';

  const acquireCtaLabel = isMs ? 'ACQUIRE · RM 159' : 'ACQUIRE · RM 159';
  const acquireCtaAria = isMs
    ? 'Buka Laci Tempahan Ekspres Rahsia — RM 159'
    : 'Open 10-Second Express Discreet Order Drawer — RM 159';

  const isNavCurrent = (key, pathPrefix) => {
    if (activeNav === key) return ' aria-current="page"';
    if (pathPrefix && pathPrefix !== '/' && pathPrefix !== '/ms/' && canonicalPath.startsWith(pathPrefix)) {
      return ' aria-current="page"';
    }
    return '';
  };

  const flagshipLinksHtml = FLAGSHIP_NAV_PRODUCTS.map((prod) => {
    const href = isMs ? prod.msPath : prod.enPath;
    const label = isMs ? prod.nameMs : prod.nameEn;
    const meta = isMs ? prod.metaMs : prod.metaEn;
    const currentAttr =
      canonicalPath === prod.enPath || canonicalPath === prod.msPath || activeNav === prod.slug
        ? ' aria-current="page"'
        : '';
    return `
          <a
            href="${href}"
            class="obsidian-header__product-link"
            data-nav-product="${prod.slug}"${currentAttr}
          >
            <span class="obsidian-header__product-name">${label}</span>
            <span class="obsidian-header__product-meta">${meta}</span>
          </a>`;
  }).join('');

  return `
<header class="obsidian-header" role="banner" data-obsidian-header>
  <!-- Single-Bar 64px Ultra-Sleek Luxury Glassmorphic Header -->
  <div class="obsidian-header__inner">
    <a href="${homeHref}" class="obsidian-header__brand" aria-label="Onyxman Malaysia — ${brandSubmark}">
      <span class="obsidian-header__wordmark foil-champagne-text">ONYXMAN</span>
      <span class="obsidian-header__submark">${isMs ? 'APOTEKARI LELAKI · KL' : 'MALAYSIA APOTHECARY · KL'}</span>
    </a>

    <nav class="obsidian-header__nav" aria-label="${
      isMs ? 'Navigasi Utama Apotekari Onyxman' : 'Onyxman Primary Apothecary Navigation'
    }">
      <a href="${formulationsIndexHref}" class="obsidian-header__link"${isNavCurrent('products', formulationsIndexHref)}>
        ${isMs ? 'Koleksi' : 'Collection'}
      </a>
      <a href="${ isMs ? '/ms/produk/horsemen/' : '/products/horsemen/' }" class="obsidian-header__link"${isNavCurrent('horsemen', isMs ? '/ms/produk/horsemen/' : '/products/horsemen/')}>
        Horsemen
      </a>
      <a href="${ isMs ? '/ms/produk/hammer-of-thor/' : '/products/hammer-of-thor/' }" class="obsidian-header__link"${isNavCurrent('hammer-of-thor', isMs ? '/ms/produk/hammer-of-thor/' : '/products/hammer-of-thor/')}>
        Hammer of Thor
      </a>
      <a href="${ isMs ? '/ms/produk/grow-xl/' : '/products/grow-xl/' }" class="obsidian-header__link"${isNavCurrent('grow-xl', isMs ? '/ms/produk/grow-xl/' : '/products/grow-xl/')}>
        Grow XL
      </a>
      <a href="${ isMs ? '/ms/produk/magnum-pump-xr/' : '/products/magnum-pump-xr/' }" class="obsidian-header__link"${isNavCurrent('magnum-pump-xr', isMs ? '/ms/produk/magnum-pump-xr/' : '/products/magnum-pump-xr/')}>
        Magnum Pump XR
      </a>
      <a href="${compareHref}" class="obsidian-header__link"${isNavCurrent('compare', compareHref)}>
        ${isMs ? 'Perbandingan' : 'Compare'}
      </a>
      <a href="${monographsHref}" class="obsidian-header__link"${isNavCurrent('ingredients', monographsHref)}>
        ${isMs ? 'Ramuan' : 'Botanicals'}
      </a>
      <a href="${deliveryHref}" class="obsidian-header__link"${isNavCurrent('locations', deliveryHref)}>
        ${isMs ? '16 Negeri' : '16 States'}
      </a>
    </nav>

    <div class="obsidian-header__actions">
      <!-- Instant EN | BM Paired Route Switcher -->
      <div class="locale-switcher" role="group" aria-label="${
        isMs ? 'Penukar Bahasa EN atau BM' : 'Language Switcher EN or BM'
      }">
        <a
          href="${enHref}"
          lang="en-MY"
          hreflang="en-MY"
          class="locale-switcher__option ${!isMs ? 'locale-switcher__option--active' : ''}"
          ${!isMs ? 'aria-current="true"' : ''}
        >EN</a>
        <span class="locale-switcher__sep" aria-hidden="true">|</span>
        <a
          href="${msHref}"
          lang="ms-MY"
          hreflang="ms-MY"
          class="locale-switcher__option ${isMs ? 'locale-switcher__option--active' : ''}"
          ${isMs ? 'aria-current="true"' : ''}
        >BM</a>
      </div>

      <!-- Express Discreet Order Drawer Trigger -->
      <button
        type="button"
        class="cta-foil-primary obsidian-header__cta"
        data-open-order-drawer="true"
        data-order-product="${defaultProduct}"
        data-order-qty="1"
        aria-label="${acquireCtaAria}"
        aria-controls="onyxman-express-order-drawer"
      >
        <span>${acquireCtaLabel}</span>
      </button>

      <!-- Architectural Mobile Navigation Curtain Toggle -->
      <button
        type="button"
        class="obsidian-header__mobile-toggle"
        data-toggle-mobile-nav="true"
        aria-expanded="false"
        aria-controls="obsidian-mobile-nav-curtain"
        aria-label="${isMs ? 'Buka Menu Navigasi' : 'Toggle Apothecary Navigation Menu'}"
      >
        <span class="obsidian-header__mobile-bar"></span>
        <span class="obsidian-header__mobile-bar"></span>
      </button>
    </div>
  </div>

  <!-- Mobile Full-Screen Architectural Navigation Curtain -->
  <div
    id="obsidian-mobile-nav-curtain"
    class="obsidian-mobile-curtain"
    aria-hidden="true"
    data-mobile-nav-curtain
  >
    <div class="obsidian-mobile-curtain__inner">
      <div class="obsidian-mobile-curtain__section">
        <span class="editorial-kicker">${
          isMs ? '01 · EMPAT FORMULASI UTAMA (RM 159)' : '01 · FOUR FLAGSHIP FORMULATIONS (RM 159)'
        }</span>
        <div class="obsidian-mobile-curtain__links">
          <a href="${isMs ? '/ms/produk/horsemen/' : '/products/horsemen/'}" class="obsidian-mobile-curtain__link">
            <span>Horsemen — 20 Capsules × 500mg</span>
            <span>RM 159 →</span>
          </a>
          <a href="${isMs ? '/ms/produk/hammer-of-thor/' : '/products/hammer-of-thor/'}" class="obsidian-mobile-curtain__link">
            <span>Hammer of Thor — 20 Veg. Capsules</span>
            <span>RM 159 →</span>
          </a>
          <a href="${isMs ? '/ms/produk/grow-xl/' : '/products/grow-xl/'}" class="obsidian-mobile-curtain__link">
            <span>Grow XL — 30 Daily Capsules</span>
            <span>RM 159 →</span>
          </a>
          <a href="${isMs ? '/ms/produk/magnum-pump-xr/' : '/products/magnum-pump-xr/'}" class="obsidian-mobile-curtain__link">
            <span>Magnum Pump XR — 30 Black Capsules</span>
            <span>RM 159 →</span>
          </a>
        </div>
      </div>

      <div class="obsidian-mobile-curtain__section">
        <span class="editorial-kicker">${
          isMs ? '02 · APOTEKARI, MONOGRAF & PENGHANTARAN 16 NEGERI' : '02 · MONOGRAPHS, COMPARISONS & 16 MALAYSIA HUBS'
        }</span>
        <div class="obsidian-mobile-curtain__links">
          <a href="${formulationsIndexHref}" class="obsidian-mobile-curtain__link">
            <span>${isMs ? 'Koleksi Lengkap Formulasi' : 'Complete Formulations Vault'}</span>
            <span>→</span>
          </a>
          <a href="${compareHref}" class="obsidian-mobile-curtain__link">
            <span>${isMs ? 'Jadual Perbandingan Formulasi' : 'Formulation Comparison Matrix'}</span>
            <span>→</span>
          </a>
          <a href="${monographsHref}" class="obsidian-mobile-curtain__link">
            <span>${isMs ? 'Monograf Fitokimia & Ramuan Botani' : 'Botanical Ingredient Monographs'}</span>
            <span>→</span>
          </a>
          <a href="${deliveryHref}" class="obsidian-mobile-curtain__link">
            <span>${isMs ? 'Penghantaran Rahsia 16 Negeri Malaysia' : 'All 16 Malaysia State Delivery Hubs'}</span>
            <span>→</span>
          </a>
          <a href="${guidesHref}" class="obsidian-mobile-curtain__link">
            <span>${isMs ? 'Panduan Protokol & Semakan Ketulenan' : 'Vitality Protocols & Buyer Guides'}</span>
            <span>→</span>
          </a>
        </div>
      </div>

      <div class="obsidian-mobile-curtain__footer">
        <button
          type="button"
          class="cta-foil-primary"
          data-open-order-drawer="true"
          data-order-product="${defaultProduct}"
          data-order-qty="1"
        >
          <span>${isMs ? 'TEMPAH BUNGKUSAN RAHSIA · RM 159' : 'ACQUIRE IN PLAIN PARCEL · RM 159'}</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </div>
  </div>
</header>`;
}

export const ObsidianHeader = renderObsidianHeader;
export default renderObsidianHeader;
