/**
 * ONYXMAN.MY — ARCHITECTURAL AUTHENTICITY & DISCREET PACKAGING SEAL STRIP (MS-077 to MS-078)
 * Non-Box Hairline Ledger Strip enforcing Rule #29 & Rule #30
 * Domain: https://www.onyxmen.my | Prices: RM 159 (159.00) / RM 318 (318.00) / RM 477 (477.00) MYR
 */

/**
 * Normalizes locale code to either 'ms-MY' or 'en-MY'.
 * @param {string} [lang]
 * @returns {'en-MY' | 'ms-MY'}
 */
export function resolveSealLocale(lang = 'en-MY') {
  const clean = String(lang || 'en-MY').toLowerCase();
  return clean.startsWith('ms') || clean === 'bm' ? 'ms-MY' : 'en-MY';
}

export const DISCREET_SEAL_ITEMS = {
  'en-MY': [
    {
      index: 'SEAL · 01',
      code: 'PLAIN-PARCEL-MY',
      title: '100% Unmarked Matte Parcel Architecture',
      metric: 'ZERO PRODUCT LABELS',
      detail:
        'Dispatched in plain triple-sealed matte security packaging. Airway bill lists only "OM Fulfilment Logistics (Kuala Lumpur)" with zero mention of Onyxman or botanical supplements.',
    },
    {
      index: 'SEAL · 02',
      code: 'HOLOGRAPHIC-LOT',
      title: 'Tamper-Evident Apothecary Authenticity Seal',
      metric: 'GMP & LAB SCREENED',
      detail:
        'Every bottle of Horsemen, Hammer of Thor, Grow XL, and Magnum Pump XR carries a serialized metallic security seal and batch verification code screened for heavy metals and microbial purity.',
    },
    {
      index: 'SEAL · 03',
      code: 'MY-16-STATES',
      title: 'Same-Day Klang Valley & Nationwide Express',
      metric: '3–5 HR KL / 1–3 DAY MY',
      detail:
        'Private unmarked rider dispatch across Kuala Lumpur, Petaling Jaya, Subang & Shah Alam within 3–5 hours, plus 1–2 day Peninsular and 2–4 day Sabah & Sarawak air-freight courier coverage.',
    },
    {
      index: 'SEAL · 04',
      code: 'FPX-DUITNOW-COD',
      title: 'Instant FPX, DuitNow QR & Cash on Delivery',
      metric: 'RM 159 · RM 318 · RM 477',
      detail:
        'Settle seamlessly via Maybank2u, CIMB Clicks, Public Bank, RHB, DuitNow QR, or zero-risk Cash on Delivery (COD) upon inspecting your sealed parcel.',
    },
  ],
  'ms-MY': [
    {
      index: 'METERAI · 01',
      code: 'BUNGKUSAN-RAHSIA',
      title: '100% Bungkusan Legap Tanpa Nama Produk',
      metric: 'PRIVASI PENUH TERJAMIN',
      detail:
        'Dihantar menggunakan kotak keselamatan legap tanpa sebarang logo. Slip kurier hanya memaparkan "OM Fulfilment Logistics (Kuala Lumpur)" tanpa menyebut nama suplemen.',
    },
    {
      index: 'METERAI · 02',
      code: 'KETULENAN-LOT',
      title: 'Meterai Hologram Keselamatan & Ujian Makmal',
      metric: 'PIAWAian GMP TULEN',
      detail:
        'Setiap botol Horsemen, Hammer of Thor, Grow XL, dan Magnum Pump XR dilengkapi pelekat keselamatan berhologram serta saringan logam berat untuk jaminan kualiti.',
    },
    {
      index: 'METERAI · 03',
      code: '16-NEGERI-MY',
      title: 'Penghantaran Hari Sama KL & Ekspres Seluruh Negara',
      metric: '3–5 JAM KL / 1–3 HARI MY',
      detail:
        'Penghantar persendirian rahsia di Kuala Lumpur & Selangor dalam 3–5 jam, serta penghantaran ekspres 1–2 hari Semenanjung dan 2–4 hari ke Sabah, Sarawak & Labuan.',
    },
    {
      index: 'METERAI · 04',
      code: 'FPX-DUITNOW-COD',
      title: 'Kemudahan FPX, DuitNow QR & Bayar Waktu Terima (COD)',
      metric: 'RM 159 · RM 318 · RM 477',
      detail:
        'Bayar dengan mudah melalui perbankan dalam talian FPX, imbasan DuitNow QR, atau tunai/QR semasa menerima bungkusan rahsia anda (COD).',
    },
  ],
};

/**
 * Renders the Architectural Discreet Packaging & Authenticity Seal Strip.
 * Uses pure horizontal hairline ledger architecture (Zero banned box grids).
 *
 * @param {Object} [options]
 * @param {string} [options.lang='en-MY']
 * @param {boolean} [options.compact=false]
 * @param {string} [options.productSlug='horsemen']
 * @returns {string} HTML string
 */
export function renderDiscreetSealStrip(options = {}) {
  const locale = resolveSealLocale(options.lang || options.locale || 'en-MY');
  const isMs = locale === 'ms-MY';
  const compact = Boolean(options.compact);
  const defaultProduct = options.productSlug || 'horsemen';
  const items = DISCREET_SEAL_ITEMS[locale];

  const kickerText = isMs
    ? 'PROTOKOL PRIVASI & JAMINAN KETULENAN APOTEKARI MALAYSIA'
    : 'MALAYSIA DISCREET LOGISTICS & APOTHECARY AUTHENTICITY LEDGER';

  const headingText = isMs
    ? 'Privasi Mutlak Dari Bilik Kebal Kuala Lumpur Ke Pintu Anda'
    : 'Absolute Discretion From Our Kuala Lumpur Vault To Your Doorstep';

  const subheadingText = isMs
    ? 'Setiap pesanan RM 159 (1 Botol), RM 318 (2 Botol), atau RM 477 (3 Botol) diproses melalui sistem pembungkusan rahsia berlapis dengan pengesahan segera ke meja operasi kami (sales@onyxman.my).'
    : 'Every RM 159 (1 Bottle), RM 318 (2 Bottles), or RM 477 (3 Bottles) acquisition is processed under strict blind-waybill protocols with direct confirmation from our Kuala Lumpur concierge desk (sales@onyxman.my).';

  const ctaLabel = isMs
    ? 'TEMPAH BUNGKUSAN RAHSIA SEKARANG · RM 159'
    : 'ACQUIRE IN PLAIN UNMARKED PARCEL · RM 159';

  const inspectLabel = isMs
    ? 'Lihat Polisi Bungkusan Rahsia & COD →'
    : 'Inspect Discreet Waybill & COD Protocol →';

  const inspectHref = isMs
    ? '/ms/penghantaran-dan-bungkusan-rahsia/'
    : '/shipping-and-discreet-packaging/';

  const rowsHtml = items
    .map(
      (item) => `
      <div class="architectural-ledger__row discreet-seal-strip__row" data-seal-code="${item.code}">
        <span class="architectural-ledger__index">${item.index}</span>
        <div class="discreet-seal-strip__title-group">
          <h3 class="architectural-ledger__title">${item.title}</h3>
        </div>
        <p class="architectural-ledger__detail">${item.detail}</p>
        <span class="architectural-ledger__metric">${item.metric}</span>
      </div>`
    )
    .join('\n');

  if (compact) {
    return `
<aside class="discreet-seal-ribbon" aria-label="${kickerText}">
  <div class="discreet-seal-ribbon__inner">
    <span class="discreet-seal-ribbon__kicker">
      <span class="discreet-seal-ribbon__pulse" aria-hidden="true"></span>
      ${isMs ? '100% BUNGKUSAN RAHSIA TANPA NAMA PRODUK' : '100% UNMARKED PLAIN PARCEL DISPATCH'}
    </span>
    <span class="discreet-seal-ribbon__divider" aria-hidden="true">|</span>
    <span class="discreet-seal-ribbon__meta">
      ${
        isMs
          ? 'Pengirim: "OM Fulfilment Logistics" • Sokongan FPX, DuitNow QR & COD Seluruh Malaysia'
          : 'Waybill Sender: "OM Fulfilment Logistics" • FPX, DuitNow QR & COD Across All 16 Malaysia States'
      }
    </span>
    <button
      type="button"
      class="discreet-seal-ribbon__trigger"
      data-open-order-drawer="true"
      data-order-product="${defaultProduct}"
      data-order-qty="1"
    >
      ${isMs ? 'Tempah 10s · RM 159 →' : '10s Express Reserve · RM 159 →'}
    </button>
  </div>
</aside>`;
  }

  return `
<section class="discreet-seal-strip" aria-labelledby="discreet-seal-strip-heading">
  <div class="discreet-seal-strip__container">
    <div class="discreet-seal-strip__header">
      <div class="discreet-seal-strip__header-left">
        <span class="editorial-kicker">${kickerText}</span>
        <h2 id="discreet-seal-strip-heading" class="editorial-headline-lg discreet-seal-strip__headline">
          ${headingText}
        </h2>
      </div>
      <div class="discreet-seal-strip__header-right">
        <p class="discreet-seal-strip__lead">${subheadingText}</p>
        <div class="discreet-seal-strip__actions">
          <button
            type="button"
            class="cta-foil-primary"
            data-open-order-drawer="true"
            data-order-product="${defaultProduct}"
            data-order-qty="2"
          >
            <span>${ctaLabel}</span>
            <span aria-hidden="true">→</span>
          </button>
          <a href="${inspectHref}" class="cta-hairline-secondary">
            <span>${inspectLabel}</span>
          </a>
        </div>
      </div>
    </div>

    <div class="architectural-ledger discreet-seal-strip__ledger" role="list">
      ${rowsHtml}
    </div>

    <div class="discreet-seal-strip__waybill-preview" aria-label="${
      isMs ? 'Contoh Slip Bungkusan Rahsia' : 'Unmarked Airway Bill Specification'
    }">
      <div class="discreet-seal-strip__waybill-col">
        <span class="discreet-seal-strip__waybill-label">${
          isMs ? 'PENama PENGIRIM KURIER' : 'COURIER WAYBILL SENDER'
        }</span>
        <strong class="discreet-seal-strip__waybill-value">OM Fulfilment Logistics (KL Hub 50450)</strong>
      </div>
      <div class="discreet-seal-strip__waybill-col">
        <span class="discreet-seal-strip__waybill-label">${
          isMs ? 'KETERANGAN KANDUNGAN' : 'DECLARED PARCEL DESCRIPTION'
        }</span>
        <strong class="discreet-seal-strip__waybill-value">${
          isMs ? 'Penjagaan Kesihatan Harian (Tiada Nama Produk)' : 'Personal Nutritional Wellness (Zero Brand Marks)'
        }</strong>
      </div>
      <div class="discreet-seal-strip__waybill-col">
        <span class="discreet-seal-strip__waybill-label">${
          isMs ? 'PILIHAN PEMBAYARAN MALAYSIA' : 'MALAYSIA SETTLEMENT MODES'
        }</span>
        <strong class="discreet-seal-strip__waybill-value">FPX • DuitNow QR • Cash on Delivery (COD)</strong>
      </div>
      <div class="discreet-seal-strip__waybill-col">
        <span class="discreet-seal-strip__waybill-label">${
          isMs ? 'MEJA BANTUAN PRIVASI' : 'DIRECT CONCIERGE DESK'
        }</span>
        <strong class="discreet-seal-strip__waybill-value">sales@onyxman.my • info@onyxman.my</strong>
      </div>
    </div>
  </div>
</section>`;
}

export const DiscreetSealStrip = renderDiscreetSealStrip;
export default renderDiscreetSealStrip;
