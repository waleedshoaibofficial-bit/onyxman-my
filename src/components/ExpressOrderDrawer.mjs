/**
 * ONYXMAN.MY — 10-SECOND EXPRESS DISCREET ORDER DRAWER & INSTANT CONFIRMATION STAGE (MS-066 to MS-070)
 * Bilingual (en-MY / ms-MY) slide-over order concierge connected to:
 * - Primary Order Inbox: waleedshoaibofficial@gmail.com (via FormSubmit.co AJAX + failover)
 * - Official Brand Aliases: sales@onyxman.my, info@onyxman.my
 * - 1-Click Reverse WhatsApp Link (https://wa.me/601XXXXXXXX?text=...)
 * - 1-Click Google Calendar Refill Reminder (+18 days for 20-capsule / +25 days for 30-capsule bottles)
 */

export const DRAWER_FORMULATIONS = [
  {
    id: 'horsemen',
    nameEn: 'Horsemen — 20 Capsules × 500mg',
    nameMs: 'Horsemen — 20 Kapsul × 500mg',
    subEn: 'Tongkat Ali & Black Maca Stamina Reserve · Day-18 Refill Cycle',
    subMs: 'Ekstrak Tongkat Ali & Maca Hitam · Kitaran 20 Kapsul',
    capsules: 20,
    refillDays: 18,
    sku: 'ONYX-HM-20',
    image: '/assets/products/horsemen-portrait.webp',
  },
  {
    id: 'hammer-of-thor',
    nameEn: 'Hammer of Thor — 20 Veg. Capsules',
    nameMs: 'Hammer of Thor — 20 Kapsul Vegetarian',
    subEn: 'Tribulus Terrestris Vitality & Endurance Complex · Day-18 Refill Cycle',
    subMs: 'Kompleks Kecergasan Tribulus Terrestris · Kitaran 20 Kapsul',
    capsules: 20,
    refillDays: 18,
    sku: 'ONYX-HT-20',
    image: '/assets/products/hammer-of-thor-portrait.webp',
  },
  {
    id: 'grow-xl',
    nameEn: 'Grow XL — 30 Capsules',
    nameMs: 'Grow XL — 30 Kapsul Harian',
    subEn: '30-Day Daily Botanical Vitality & Micro-Circulation · Day-25 Refill Cycle',
    subMs: 'Protokol Nutrisi Harian & Aliran Mikro 30 Hari · Kitaran 30 Kapsul',
    capsules: 30,
    refillDays: 25,
    sku: 'ONYX-GX-30',
    image: '/assets/products/grow-xl-portrait.webp',
  },
  {
    id: 'magnum-pump-xr',
    nameEn: 'Magnum Pump XR — 30 Black Capsules',
    nameMs: 'Magnum Pump XR — 30 Kapsul Hitam',
    subEn: 'L-Arginine, L-Citrulline & Nitric Oxide Vascular Complex · Day-25 Refill Cycle',
    subMs: 'Kompleks L-Arginine, L-Citrulline & Nitrik Oksida · Kitaran 30 Kapsul',
    capsules: 30,
    refillDays: 25,
    sku: 'ONYX-MP-30',
    image: '/assets/products/magnum-pump-xr-portrait.webp',
  },
];

export const DRAWER_PROTOCOL_TIERS = [
  {
    qty: 1,
    priceNumeric: 159,
    priceSchema: '159.00',
    priceFormatted: 'RM 159',
    eyebrowEn: 'SINGLE CYCLE RESERVE · 1 BOTTLE',
    eyebrowMs: 'BEKALAN SATU KITARAN · 1 BOTOL',
    titleEn: '1 Bottle — RM 159',
    titleMs: '1 Botol — RM 159',
    subtitleEn: 'Free Discreet Plain-Box Express Shipping (Peninsular Malaysia)',
    subtitleMs: 'Penghantaran Ekspres Bungkusan Rahsia Percuma (Semenanjung Malaysia)',
  },
  {
    qty: 2,
    priceNumeric: 318,
    priceSchema: '318.00',
    priceFormatted: 'RM 318',
    eyebrowEn: 'MOST SELECTED IN KL & SELANGOR · 2 BOTTLES',
    eyebrowMs: 'PILIHAN UTAMA DI KL & SELANGOR · 2 BOTOL',
    titleEn: '2 Bottles — RM 318',
    titleMs: '2 Botol — RM 318',
    subtitleEn: 'Free Discreet Plain-Box Express Shipping Nationwide (incl. Sabah & Sarawak)',
    subtitleMs: 'Penghantaran Ekspres Bungkusan Rahsia Percuma Seluruh Negara (Termasuk Sabah & Sarawak)',
  },
  {
    qty: 3,
    priceNumeric: 477,
    priceSchema: '477.00',
    priceFormatted: 'RM 477',
    eyebrowEn: 'COMPLETE 90-DAY APOTHECARY VAULT · 3 BOTTLES',
    eyebrowMs: 'PAKEJ LENGKAP APOTEKARI 90 HARI · 3 BOTOL',
    titleEn: '3 Bottles — RM 477',
    titleMs: '3 Botol — RM 477',
    subtitleEn: 'Priority Discreet Plain-Box Express Shipping + VIP Refill Concierge',
    subtitleMs: 'Penghantaran Rahsia Keutamaan Percuma Seluruh Malaysia + Khidmat VIP',
  },
];

export const DRAWER_MALAYSIA_STATES = [
  {
    value: 'Kuala Lumpur',
    zone: 'KLANG_VALLEY',
    etaEn: 'Same-Day Discreet Runner (3–5 Hours) or Next-Day Plain Parcel · Free Shipping',
    etaMs: 'Penghantar Rahsia Hari Sama (3–5 Jam) atau Kurier Esok · Penghantaran Percuma',
  },
  {
    value: 'Selangor',
    zone: 'KLANG_VALLEY',
    etaEn: 'Same-Day Discreet Runner (PJ, Subang, Shah Alam, Puchong) or 24h Express · Free Shipping',
    etaMs: 'Penghantar Rahsia Hari Sama (PJ, Subang, Shah Alam) atau Ekspres 24 Jam · Percuma',
  },
  {
    value: 'Putrajaya',
    zone: 'KLANG_VALLEY',
    etaEn: 'Same-Day Discreet Runner (Putrajaya & Cyberjaya 3–5 Hours) · Free Shipping',
    etaMs: 'Penghantar Rahsia Hari Sama (Putrajaya & Cyberjaya 3–5 Jam) · Percuma',
  },
  {
    value: 'Pulau Pinang',
    zone: 'WEST_MY',
    etaEn: '1–2 Business Days Discreet Express (George Town, Bayan Lepas, Seberang Perai) · Free Shipping',
    etaMs: '1–2 Hari Bekerja Ekspres Rahsia (George Town, Bayan Lepas, Butterworth) · Percuma',
  },
  {
    value: 'Johor',
    zone: 'WEST_MY',
    etaEn: '1–2 Business Days Discreet Express (Johor Bahru, Iskandar Puteri, Muar, Batu Pahat) · Free Shipping',
    etaMs: '1–2 Hari Bekerja Ekspres Rahsia (Johor Bahru, Iskandar Puteri, Muar) · Percuma',
  },
  {
    value: 'Perak',
    zone: 'WEST_MY',
    etaEn: '1–2 Business Days Discreet Express (Ipoh, Taiping, Manjung, Teluk Intan) · Free Shipping',
    etaMs: '1–2 Hari Bekerja Ekspres Rahsia (Ipoh, Taiping, Manjung) · Percuma',
  },
  {
    value: 'Melaka',
    zone: 'WEST_MY',
    etaEn: '1–2 Business Days Discreet Express (Melaka City, Ayer Keroh, Alor Gajah) · Free Shipping',
    etaMs: '1–2 Hari Bekerja Ekspres Rahsia (Bandaraya Melaka, Ayer Keroh) · Percuma',
  },
  {
    value: 'Negeri Sembilan',
    zone: 'WEST_MY',
    etaEn: '1–2 Business Days Discreet Express (Seremban, Nilai, Port Dickson) · Free Shipping',
    etaMs: '1–2 Hari Bekerja Ekspres Rahsia (Seremban, Nilai, Port Dickson) · Percuma',
  },
  {
    value: 'Pahang',
    zone: 'WEST_MY',
    etaEn: '1–2 Business Days Discreet Express (Kuantan, Temerloh, Bentong) · Free Shipping',
    etaMs: '1–2 Hari Bekerja Ekspres Rahsia (Kuantan, Temerloh, Bentong) · Percuma',
  },
  {
    value: 'Kedah',
    zone: 'WEST_MY',
    etaEn: '1–2 Business Days Discreet Express (Alor Setar, Sungai Petani, Kulim, Langkawi) · Free Shipping',
    etaMs: '1–2 Hari Bekerja Ekspres Rahsia (Alor Setar, Sungai Petani, Langkawi) · Percuma',
  },
  {
    value: 'Kelantan',
    zone: 'WEST_MY',
    etaEn: '1–2 Business Days Discreet Express (Kota Bharu, Kubang Kerian, Pasir Mas) · Free Shipping',
    etaMs: '1–2 Hari Bekerja Ekspres Rahsia (Kota Bharu, Kubang Kerian) · Percuma',
  },
  {
    value: 'Terengganu',
    zone: 'WEST_MY',
    etaEn: '1–2 Business Days Discreet Express (Kuala Terengganu, Kemaman, Dungun) · Free Shipping',
    etaMs: '1–2 Hari Bekerja Ekspres Rahsia (Kuala Terengganu, Kemaman, Dungun) · Percuma',
  },
  {
    value: 'Perlis',
    zone: 'WEST_MY',
    etaEn: '1–2 Business Days Discreet Express (Kangar, Arau, Kuala Perlis) · Free Shipping',
    etaMs: '1–2 Hari Bekerja Ekspres Rahsia (Kangar, Arau, Kuala Perlis) · Percuma',
  },
  {
    value: 'Sabah',
    zone: 'EAST_MY',
    etaEn: '2–4 Business Days Discreet Air Freight (Kota Kinabalu, Sandakan, Tawau) · Free on 2+ Bottles',
    etaMs: '2–4 Hari Bekerja Kargo Udara Rahsia (Kota Kinabalu, Sandakan, Tawau) · Percuma 2+ Botol',
  },
  {
    value: 'Sarawak',
    zone: 'EAST_MY',
    etaEn: '2–4 Business Days Discreet Air Freight (Kuching, Miri, Sibu, Bintulu) · Free on 2+ Bottles',
    etaMs: '2–4 Hari Bekerja Kargo Udara Rahsia (Kuching, Miri, Sibu, Bintulu) · Percuma 2+ Botol',
  },
  {
    value: 'Labuan',
    zone: 'EAST_MY',
    etaEn: '2–4 Business Days Discreet Air Freight (Victoria & Labuan FT) · Free on 2+ Bottles',
    etaMs: '2–4 Hari Bekerja Kargo Udara Rahsia (Wilayah Persekutuan Labuan) · Percuma 2+ Botol',
  },
];

/**
 * Normalizes locale code to either 'ms-MY' or 'en-MY'.
 * @param {string} [lang]
 * @returns {'en-MY' | 'ms-MY'}
 */
export function resolveDrawerLocale(lang = 'en-MY') {
  const clean = String(lang || 'en-MY').toLowerCase();
  return clean.startsWith('ms') || clean === 'bm' ? 'ms-MY' : 'en-MY';
}

/**
 * Renders the 10-Second Express Discreet Order Drawer + Instant Confirmation View (`MS-066` to `MS-070`).
 *
 * @param {Object} [options]
 * @param {string} [options.lang='en-MY']
 * @param {string} [options.defaultProduct='horsemen']
 * @param {number} [options.defaultQty=1]
 * @returns {string} HTML string
 */
export function renderExpressOrderDrawer(options = {}) {
  const locale = resolveDrawerLocale(options.lang || options.locale || 'en-MY');
  const isMs = locale === 'ms-MY';
  const rawProduct = options.defaultProduct || options.productSlug || 'horsemen';
  const defaultProduct = rawProduct === 'Sensitivity-of-thor' ? 'hammer-of-thor' : rawProduct;
  const defaultQty = [1, 2, 3].includes(Number(options.defaultQty)) ? Number(options.defaultQty) : 1;

  const formulationsHtml = DRAWER_FORMULATIONS.map((item) => {
    const isSelected = item.id === defaultProduct;
    const title = isMs ? item.nameMs : item.nameEn;
    const subtitle = isMs ? item.subMs : item.subEn;
    return `
            <button
              type="button"
              role="radio"
              aria-checked="${isSelected ? 'true' : 'false'}"
              class="drawer-formulation-option ${isSelected ? 'drawer-formulation-option--selected' : ''}"
              data-drawer-select-product="${item.id}"
              data-product-name="${title}"
              data-product-capsules="${item.capsules}"
              data-product-refill-days="${item.refillDays}"
              data-product-image="${item.image}"
            >
              <div class="drawer-formulation-option__left">
                <span class="drawer-formulation-option__sku">${item.sku} · ${item.capsules} CAPS</span>
                <strong class="drawer-formulation-option__title">${title}</strong>
                <span class="drawer-formulation-option__sub">${subtitle}</span>
              </div>
              <span class="drawer-formulation-option__check" aria-hidden="true">${isSelected ? '●' : '○'}</span>
            </button>`;
  }).join('');

  const tiersHtml = DRAWER_PROTOCOL_TIERS.map((tier) => {
    const isSelected = tier.qty === defaultQty;
    const eyebrow = isMs ? tier.eyebrowMs : tier.eyebrowEn;
    const title = isMs ? tier.titleMs : tier.titleEn;
    const subtitle = isMs ? tier.subtitleMs : tier.subtitleEn;
    return `
            <button
              type="button"
              role="radio"
              aria-checked="${isSelected ? 'true' : 'false'}"
              class="tier-strip-option ${isSelected ? 'tier-strip-option--selected' : ''}"
              data-drawer-select-qty="${tier.qty}"
              data-tier-price="${tier.priceNumeric}"
              data-tier-schema="${tier.priceSchema}"
              data-tier-formatted="${tier.priceFormatted}"
            >
              <div class="tier-strip-option__left">
                <span class="tier-strip-option__eyebrow">${eyebrow}</span>
                <strong class="tier-strip-option__title">${title}</strong>
                <span class="tier-strip-option__subtitle">${subtitle}</span>
              </div>
              <span class="tier-strip-option__price">${tier.priceFormatted}</span>
            </button>`;
  }).join('');

  const stateOptionsHtml = DRAWER_MALAYSIA_STATES.map((st, idx) => {
    const eta = isMs ? st.etaMs : st.etaEn;
    return `<option value="${st.value}" data-zone="${st.zone}" data-eta="${eta}" ${idx === 0 ? 'selected' : ''}>${st.value}</option>`;
  }).join('\n              ');

  const initialEta = isMs ? DRAWER_MALAYSIA_STATES[0].etaMs : DRAWER_MALAYSIA_STATES[0].etaEn;

  return `
<!-- Express Discreet Order Drawer Backdrop -->
<div
  id="onyxman-express-order-backdrop"
  class="concierge-drawer-backdrop"
  aria-hidden="true"
  data-close-order-drawer="true"
></div>

<!-- Express Discreet Order Drawer Panel -->
<aside
  id="onyxman-express-order-drawer"
  class="concierge-drawer-panel"
  role="dialog"
  aria-modal="true"
  aria-hidden="true"
  aria-labelledby="express-order-drawer-title"
  data-order-drawer-locale="${locale}"
>
  <div class="concierge-drawer__top-bar">
    <div class="concierge-drawer__top-meta">
      <span class="editorial-kicker">${
        isMs ? 'MEJA TEMPAHAN RAHSIA 10 SAAT · MALAYSIA' : '10-SECOND EXPRESS DISCREET ORDER DESK · MALAYSIA'
      }</span>
      <h2 id="express-order-drawer-title" class="concierge-drawer__title font-display-serif">
        ${isMs ? 'Tempahan Bungkusan Rahsia Tanpa Nama' : 'Acquire In Plain Unmarked Security Parcel'}
      </h2>
    </div>
    <button
      type="button"
      class="concierge-drawer__close-btn"
      data-close-order-drawer="true"
      aria-label="${isMs ? 'Tutup Laci Tempahan' : 'Close Express Order Drawer'}"
    >
      <span aria-hidden="true">✕</span>
      <span class="concierge-drawer__close-label">${isMs ? 'TUTUP' : 'CLOSE'}</span>
    </button>
  </div>

  <!-- STEP 1: INTERACTIVE EXPRESS ORDER FORM -->
  <form
    id="onyxman-express-order-form"
    class="concierge-drawer__form"
    action="https://formsubmit.co/ajax/waleedshoaibofficial@gmail.com"
    method="POST"
    novalidate
    data-express-order-form
  >
    <input type="hidden" name="productId" id="onyxman-field-product-id" value="${defaultProduct}" />
    <input type="hidden" name="bottles" id="onyxman-field-bottles" value="${defaultQty}" />
    <input type="hidden" name="totalMYR" id="onyxman-field-total-myr" value="${defaultQty * 159}.00" />
    <input type="hidden" name="merchantEmail" value="waleedshoaibofficial@gmail.com" />
    <input type="hidden" name="brandSalesAlias" value="sales@onyxman.my" />
    <input type="hidden" name="brandInfoAlias" value="info@onyxman.my" />

    <p class="concierge-drawer__intro">
      ${
        isMs
          ? 'Tiada pendaftaran akaun diperlukan. Pesanan anda dihantar terus secara sulit ke pusat pelepasan Kuala Lumpur kami (sales@onyxman.my) dengan pengesahan segera.'
          : 'Zero account registration required. Your encrypted acquisition is routed directly to our Kuala Lumpur dispatch vault (sales@onyxman.my) with immediate confirmation.'
      }
    </p>

    <!-- 1. Formulation Selector -->
    <div class="apothecary-field-group">
      <span class="apothecary-field-label" id="label-select-formulation">
        ${isMs ? '01 · PILIH FORMULASI ONYXMAN' : '01 · SELECT FLAGSHIP FORMULATION'}
      </span>
      <div
        class="drawer-formulation-list"
        role="radiogroup"
        aria-labelledby="label-select-formulation"
        data-drawer-formulation-group
      >
        ${formulationsHtml}
      </div>
    </div>

    <!-- 2. Protocol Tier Selector (RM 159 / RM 318 / RM 477) -->
    <div class="apothecary-field-group">
      <span class="apothecary-field-label" id="label-select-tier">
        ${
          isMs
            ? '02 · PILIH KUANTITI KITARAN (RM 159 / RM 318 / RM 477)'
            : '02 · SELECT PROTOCOL TIER (RM 159 / RM 318 / RM 477)'
        }
      </span>
      <div
        class="tier-strip-group"
        role="radiogroup"
        aria-labelledby="label-select-tier"
        data-drawer-tier-group
      >
        ${tiersHtml}
      </div>
    </div>

    <!-- 3. Customer Name / Pseudonym Input -->
    <div class="apothecary-field-group">
      <label class="apothecary-field-label" for="onyxman-input-name">
        ${
          isMs
            ? '03 · NAMA PENERIMA ATAU NAMA SAMARAN (UNTUK LABEL KURIER)'
            : '03 · RECIPIENT FULL NAME OR PSEUDONYM (FOR WAYBILL)'
        }
      </label>
      <input
        type="text"
        id="onyxman-input-name"
        name="customerName"
        class="apothecary-field-input"
        placeholder="${isMs ? 'Cth: Amirul H. / Encik Razak' : 'e.g., Daniel Tan / Encik Faris (Initials Accepted)'}"
        required
        autocomplete="name"
        data-input-customer-name
      />
    </div>

    <!-- 4. Malaysian Mobile Number Input (01X-XXXXXXX) with Live Validation -->
    <div class="apothecary-field-group">
      <label class="apothecary-field-label" for="onyxman-input-phone">
        ${
          isMs
            ? '04 · NOMBOR TELEFON BIMBIT / WHATSAPP MALAYSIA (01X-XXXXXXX)'
            : '04 · MALAYSIAN MOBILE / WHATSAPP NUMBER (01X-XXXXXXX)'
        }
      </label>
      <input
        type="tel"
        id="onyxman-input-phone"
        name="customerPhoneMY"
        class="apothecary-field-input"
        placeholder="${isMs ? 'Cth: 012-345 6789 atau +60123456789' : 'e.g., 012-345 6789 or +60123456789'}"
        required
        autocomplete="tel"
        inputmode="tel"
        data-input-customer-phone
      />
      <span class="apothecary-field-hint" data-phone-validation-status>
        ${
          isMs
            ? 'Digunakan semata-mata untuk penghantaran nombor tracking & pengesahan WhatsApp rahsia.'
            : 'Used strictly for encrypted WhatsApp order confirmation & courier tracking updates.'
        }
      </span>
    </div>

    <!-- 5. Optional Email for Discreet Receipt & Refill Calendar -->
    <div class="apothecary-field-group">
      <label class="apothecary-field-label" for="onyxman-input-email">
        ${
          isMs
            ? '05 · E-MEL PILIHAN (UNTUK RESIT RAHSIA & PERINGATAN KITARAN)'
            : '05 · OPTIONAL EMAIL (FOR DISCREET RECEIPT & REFILL REMINDER)'
        }
      </label>
      <input
        type="email"
        id="onyxman-input-email"
        name="customerEmail"
        class="apothecary-field-input"
        placeholder="${isMs ? 'Cth: nama@email.com (Pilihan)' : 'e.g., client@domain.com (Optional)'}"
        autocomplete="email"
        data-input-customer-email
      />
    </div>

    <!-- 6. Malaysia State / Territory Selector (All 16 States with Live Courier ETA Preview) -->
    <div class="apothecary-field-group">
      <label class="apothecary-field-label" for="onyxman-input-state">
        ${
          isMs
            ? '06 · NEGERI / WILAYAH PENGHANTARAN (16 NEGERI MALAYSIA)'
            : '06 · MALAYSIA DELIVERY STATE / FEDERAL TERRITORY (ALL 16 STATES)'
        }
      </label>
      <select
        id="onyxman-input-state"
        name="malaysiaState"
        class="apothecary-field-select"
        required
        data-input-malaysia-state
      >
        ${stateOptionsHtml}
      </select>
      <div class="concierge-drawer__eta-banner" data-state-eta-preview>
        <span class="concierge-drawer__eta-dot" aria-hidden="true"></span>
        <span data-state-eta-text>${initialEta}</span>
      </div>
    </div>

    <!-- 7. Full Delivery Address Input -->
    <div class="apothecary-field-group">
      <label class="apothecary-field-label" for="onyxman-input-address">
        ${
          isMs
            ? '07 · ALAMAT PENUH PENGHANTARAN (ATAU CAWANGAN POSLAJU / NINJAVAN)'
            : '07 · FULL DELIVERY ADDRESS (OR CONDO CONCIERGE / COURIER COLLECTION POINT)'
        }
      </label>
      <textarea
        id="onyxman-input-address"
        name="deliveryAddress"
        class="apothecary-field-textarea"
        rows="3"
        placeholder="${
          isMs
            ? 'No. Unit / Jalan, Taman, Poskod & Bandar (Cth: Mont Kiara, 50480 Kuala Lumpur)'
            : 'Unit / Street Address, Postcode & City (e.g., Solaris Mont Kiara, 50480 Kuala Lumpur)'
        }"
        required
        data-input-delivery-address
      ></textarea>
    </div>

    <!-- 8. Payment Method Selector (FPX / DuitNow QR or Cash on Delivery COD) -->
    <div class="apothecary-field-group">
      <span class="apothecary-field-label" id="label-select-payment">
        ${
          isMs
            ? '08 · KAEDAH PEMBAYARAN PILIHAN MALAYSIA'
            : '08 · PREFERRED MALAYSIA SETTLEMENT METHOD'
        }
      </span>
      <div class="drawer-payment-options" role="radiogroup" aria-labelledby="label-select-payment">
        <label class="drawer-payment-option drawer-payment-option--selected" data-payment-option-card>
          <input
            type="radio"
            name="paymentMethod"
            value="FPX_DUITNOW_MY"
            checked
            data-input-payment-method
          />
          <div class="drawer-payment-option__body">
            <span class="drawer-payment-option__eyebrow">${
              isMs ? 'PELEPASAN SEGERA KEUTAMAAN' : 'INSTANT PRIORITY DISPATCH'
            }</span>
            <strong class="drawer-payment-option__title">${
              isMs ? 'FPX Perbankan Dalam Talian / DuitNow QR' : 'FPX Online Banking / DuitNow Instant QR'
            }</strong>
            <span class="drawer-payment-option__sub">${
              isMs
                ? 'Maybank2u, CIMB Clicks, Public Bank, RHB, Hong Leong — Kod QR / Pautan Rasmi dihantar segera.'
                : 'Maybank2u, CIMB Clicks, Public Bank, RHB, Hong Leong — Official DuitNow QR issued upon confirmation.'
            }</span>
          </div>
        </label>

        <label class="drawer-payment-option" data-payment-option-card>
          <input
            type="radio"
            name="paymentMethod"
            value="COD_MY"
            data-input-payment-method
          />
          <div class="drawer-payment-option__body">
            <span class="drawer-payment-option__eyebrow">${
              isMs ? 'TIADA RISIKO AWAL' : 'ZERO UPFRONT RISK'
            }</span>
            <strong class="drawer-payment-option__title">${
              isMs ? 'Bayar Waktu Terima (Cash on Delivery · COD)' : 'Cash on Delivery (COD Malaysia)'
            }</strong>
            <span class="drawer-payment-option__sub">${
              isMs
                ? 'Bayar tunai atau DuitNow QR terus kepada penghantar semasa menerima bungkusan rahsia anda.'
                : 'Settle via cash or QR directly with the courier upon receiving your sealed unmarked parcel.'
            }</span>
          </div>
        </label>
      </div>
    </div>

    <!-- Live Order Ledger Summary -->
    <div class="concierge-drawer__summary-ledger" aria-live="polite">
      <div class="concierge-drawer__summary-row">
        <span>${isMs ? 'Formulasi Dipilih:' : 'Selected Formulation:'}</span>
        <strong data-summary-product-name>Horsemen — 20 Capsules × 500mg</strong>
      </div>
      <div class="concierge-drawer__summary-row">
        <span>${isMs ? 'Pakej & Penghantaran:' : 'Protocol Tier & Shipping:'}</span>
        <strong data-summary-tier-label>1 Bottle · Free Discreet Plain-Box Shipping</strong>
      </div>
      <div class="concierge-drawer__summary-row">
        <span>${isMs ? 'Nama Pengirim Pada Bungkusan:' : 'Waybill Sender Label:'}</span>
        <strong>OM Fulfilment Logistics (Zero Brand Names)</strong>
      </div>
      <div class="concierge-drawer__summary-row concierge-drawer__summary-row--total">
        <span>${isMs ? 'JUMLAH KESELURUHAN (MYR):' : 'TOTAL SETTLEMENT (MYR):'}</span>
        <strong class="concierge-drawer__total-figure" data-summary-total-price>RM 159 (159.00 MYR)</strong>
      </div>
    </div>

    <div class="concierge-drawer__error-msg" id="onyxman-order-error" role="alert" hidden data-order-error-box></div>

    <button
      type="submit"
      id="onyxman-submit-order-btn"
      class="cta-foil-primary concierge-drawer__submit-btn"
      data-submit-order-btn
    >
      <span data-submit-btn-text>${
        isMs
          ? 'SAHKAN TEMPAHAN BUNGKUSAN RAHSIA SEKARANG · RM 159'
          : 'CONFIRM DISCREET PARCEL ORDER NOW · RM 159'
      }</span>
      <span aria-hidden="true">→</span>
    </button>

    <p class="concierge-drawer__privacy-footnote">
      ${
        isMs
          ? 'Dilindungi di bawah Akta Perlindungan Data Peribadi (PDPA) Malaysia. Data anda tidak pernah dikongsi dengan pihak ketiga.'
          : 'Protected under PDPA Malaysia Privacy Standards. 100% Unmarked Packaging Guaranteed • sales@onyxman.my'
      }
    </p>
  </form>

  <!-- STEP 2: INSTANT ORDER CONFIRMATION RECEIPT VIEW -->
  <div
    id="onyxman-order-confirmation-view"
    class="concierge-drawer__confirmation"
    hidden
    aria-live="assertive"
    data-order-confirmation-view
  >
    <div class="concierge-drawer__confirm-seal">
      <span class="editorial-kicker">${
        isMs ? 'PENGESAHAN TEMPAHAN RASMI DITERIMA' : 'OFFICIAL DISCREET ACQUISITION LOGGED'
      }</span>
      <h3 class="editorial-headline-lg concierge-drawer__confirm-title">
        ${
          isMs
            ? 'Tempahan Rahsia Anda Telah Didaftarkan.'
            : 'Your Unmarked Parcel Reservation Is Confirmed.'
        }
      </h3>
      <p class="concierge-drawer__confirm-lead">
        ${
          isMs
            ? 'Meja operasi Kuala Lumpur kami (sales@onyxman.my / waleedshoaibofficial@gmail.com) telah menerima butiran anda dan akan menghubungi WhatsApp anda sebentar lagi untuk pengesahan pelepasan bungkusan.'
            : 'Our Kuala Lumpur dispatch desk (sales@onyxman.my / waleedshoaibofficial@gmail.com) has logged your order and will message your WhatsApp shortly with your discreet waybill tracking.'
        }
      </p>
    </div>

    <div class="concierge-drawer__receipt-ledger">
      <div class="concierge-drawer__receipt-row">
        <span>${isMs ? 'ID RUJUKAN PESANAN:' : 'ORDER REFERENCE ID:'}</span>
        <strong class="foil-champagne-text" data-receipt-order-id>ONYX-MY-889900</strong>
      </div>
      <div class="concierge-drawer__receipt-row">
        <span>${isMs ? 'FORMULASI & KUANTITI:' : 'FORMULATION & TIER:'}</span>
        <strong data-receipt-product-tier>Horsemen (1 Bottle)</strong>
      </div>
      <div class="concierge-drawer__receipt-row">
        <span>${isMs ? 'JUMLAH BAYARAN:' : 'AMOUNT PAYABLE:'}</span>
        <strong data-receipt-amount>RM 159 (159.00 MYR)</strong>
      </div>
      <div class="concierge-drawer__receipt-row">
        <span>${isMs ? 'NEGERI & ANGGARAN TIBA:' : 'DESTINATION & ETA:'}</span>
        <strong data-receipt-state-eta>Kuala Lumpur · Same-Day / 1–2 Business Days</strong>
      </div>
      <div class="concierge-drawer__receipt-row">
        <span>${isMs ? 'PENAMA SLIP KURIER:' : 'DISCREET WAYBILL SENDER:'}</span>
        <strong>OM Fulfilment Logistics (100% Plain Parcel)</strong>
      </div>
    </div>

    <div class="concierge-drawer__confirm-actions">
      <a
        href="https://calendar.google.com/calendar/render"
        target="_blank"
        rel="noopener noreferrer"
        class="cta-foil-primary concierge-drawer__action-link"
        data-receipt-calendar-link
      >
        <span>${
          isMs
            ? 'SIMPAN PERINGATAN BEKALAN (GOOGLE CALENDAR)'
            : 'ADD REFILL CYCLE REMINDER TO GOOGLE CALENDAR'
        }</span>
        <span aria-hidden="true">↗</span>
      </a>

      <a
        href="https://wa.me/60100000000"
        target="_blank"
        rel="noopener noreferrer"
        class="cta-hairline-secondary concierge-drawer__action-link"
        data-receipt-reverse-whatsapp-link
      >
        <span>${
          isMs
            ? 'PAUTAN WHATSAPP PENGESAHAN PESANAN (1-KLIK)'
            : '1-CLICK WHATSAPP ORDER CONFIRMATION LINK'
        }</span>
        <span aria-hidden="true">↗</span>
      </a>

      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        class="cta-hairline-secondary concierge-drawer__action-link"
        hidden
        data-receipt-direct-whatsapp-link
      >
        <span>${
          isMs
            ? 'BUKA WHATSAPP KHIDMAT PELANGGAN SEKARANG'
            : 'OPEN DIRECT WHATSAPP CONCIERGE CHAT'
        }</span>
        <span aria-hidden="true">↗</span>
      </a>

      <button
        type="button"
        class="cta-hairline-secondary concierge-drawer__action-link"
        data-reset-order-drawer="true"
      >
        <span>${isMs ? 'Buat Tempahan Tambahan Lain' : 'Place Another Discreet Acquisition'}</span>
      </button>
    </div>
  </div>
</aside>`;
}

export const ExpressOrderDrawer = renderExpressOrderDrawer;
export default renderExpressOrderDrawer;
