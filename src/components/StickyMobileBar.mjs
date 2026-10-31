/**
 * ONYXMAN.MY — FIXED MOBILE BOTTOM CONVERSION LEDGER (MS-075 to MS-076)
 * Displays: "RM 159 · Plain Unmarked Parcel · Acquire in 10s"
 * Triggers the 10-Second Express Discreet Order Drawer on mobile & tablet viewports.
 */

const PRODUCT_DISPLAY_MAP = {
  horsemen: {
    nameEn: 'Horsemen (20 Caps × 500mg)',
    nameMs: 'Horsemen (20 Kapsul × 500mg)',
  },
  'hammer-of-thor': {
    nameEn: 'Hammer of Thor (20 Veg. Caps)',
    nameMs: 'Hammer of Thor (20 Kapsul Veg.)',
  },
  'Sensitivity-of-thor': {
    nameEn: 'Hammer of Thor (20 Veg. Caps)',
    nameMs: 'Hammer of Thor (20 Kapsul Veg.)',
  },
  'grow-xl': {
    nameEn: 'Grow XL (30 Daily Capsules)',
    nameMs: 'Grow XL (30 Kapsul Harian)',
  },
  'magnum-pump-xr': {
    nameEn: 'Magnum Pump XR (30 Black Caps)',
    nameMs: 'Magnum Pump XR (30 Kapsul Hitam)',
  },
};

/**
 * Normalizes locale code to either 'ms-MY' or 'en-MY'.
 * @param {string} [lang]
 * @returns {'en-MY' | 'ms-MY'}
 */
export function resolveStickyLocale(lang = 'en-MY') {
  const clean = String(lang || 'en-MY').toLowerCase();
  return clean.startsWith('ms') || clean === 'bm' ? 'ms-MY' : 'en-MY';
}

/**
 * Renders the Fixed Mobile Bottom Conversion Bar (`StickyMobileBar.mjs`).
 *
 * @param {Object} [options]
 * @param {string} [options.lang='en-MY']
 * @param {string} [options.productSlug='horsemen']
 * @param {number} [options.defaultQty=1]
 * @returns {string} HTML string
 */
export function renderStickyMobileBar(options = {}) {
  const locale = resolveStickyLocale(options.lang || options.locale || 'en-MY');
  const isMs = locale === 'ms-MY';
  const rawSlug = options.productSlug || 'horsemen';
  const normalizedSlug = rawSlug === 'Sensitivity-of-thor' ? 'hammer-of-thor' : rawSlug;
  const defaultQty = [1, 2, 3].includes(Number(options.defaultQty)) ? Number(options.defaultQty) : 1;

  const productMeta = PRODUCT_DISPLAY_MAP[normalizedSlug] || PRODUCT_DISPLAY_MAP.horsemen;
  const activeProductLabel = isMs ? productMeta.nameMs : productMeta.nameEn;

  const ledgerEyebrow = isMs
    ? 'RM 159 · BUNGKUSAN RAHSIA TANPA NAMA · TEMPAH 10 SAAT'
    : 'RM 159 · PLAIN UNMARKED PARCEL · ACQUIRE IN 10S';

  const sublineText = isMs
    ? `${activeProductLabel} • FPX / DuitNow QR / COD Malaysia`
    : `${activeProductLabel} • FPX / DuitNow QR / COD Malaysia`;

  const ctaButtonText = isMs ? 'TEMPAH · RM 159' : 'ACQUIRE · RM 159';
  const ariaLabel = isMs
    ? 'Bar Tempahan Ekspres Mudah Alih — RM 159 Bungkusan Rahsia'
    : 'Mobile Express Conversion Ledger — RM 159 Plain Unmarked Parcel';

  return `
<aside
  id="onyxman-sticky-mobile-bar"
  class="sticky-mobile-ledger"
  role="region"
  aria-label="${ariaLabel}"
  data-active-product="${normalizedSlug}"
>
  <div class="sticky-mobile-ledger__inner">
    <div class="sticky-mobile-ledger__info">
      <div class="sticky-mobile-ledger__eyebrow-row">
        <span class="sticky-mobile-ledger__status-dot" aria-hidden="true"></span>
        <span class="sticky-mobile-ledger__eyebrow" data-sticky-eyebrow>${ledgerEyebrow}</span>
      </div>
      <div class="sticky-mobile-ledger__meta-row">
        <strong class="sticky-mobile-ledger__price" data-sticky-price>RM 159</strong>
        <span class="sticky-mobile-ledger__sep" aria-hidden="true">·</span>
        <span class="sticky-mobile-ledger__product" data-sticky-product-label>${sublineText}</span>
      </div>
    </div>

    <div class="sticky-mobile-ledger__cta-wrap">
      <button
        type="button"
        class="sticky-mobile-ledger__cta cta-foil-primary"
        data-open-order-drawer="true"
        data-order-product="${normalizedSlug}"
        data-order-qty="${defaultQty}"
        aria-controls="onyxman-express-order-drawer"
      >
        <span data-sticky-cta-text>${ctaButtonText}</span>
        <span aria-hidden="true">→</span>
      </button>
    </div>
  </div>
</aside>`;
}

export const StickyMobileBar = renderStickyMobileBar;
export default renderStickyMobileBar;
