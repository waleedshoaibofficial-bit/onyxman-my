/**
 * ============================================================================
 * ONYXMAN.MY — CLIENT-SIDE LUXURY CHOREOGRAPHY & DUAL-MODE ORDER ENGINE
 * Micro-Steps: MS-071 through MS-074
 * Domain: https://onyxman.my
 * Official Prices: 1 Bottle = RM 159 (159.00 MYR) | 2 Bottles = RM 318 (318.00 MYR) | 3 Bottles = RM 477 (477.00 MYR)
 * Primary Merchant Notification Inbox: waleedshoaibofficial@gmail.com
 * Official Brand Aliases: sales@onyxman.my | info@onyxman.my
 * ============================================================================
 */

(function initOnyxmanLuxuryEngine() {
  'use strict';

  /* --------------------------------------------------------------------------
   * 1. AUTHENTIC BUSINESS CONSTANTS & FORMULATION CATALOG
   * -------------------------------------------------------------------------- */
  const DEFAULT_CONFIG = {
    brand: 'Onyxman',
    domain: 'https://onyxman.my',
    locale: document.documentElement.lang === 'ms-MY' ? 'ms-MY' : 'en-MY',
    currency: 'MYR',
    currencySymbol: 'RM',
    whatsappNumberE164: '60142985919',
    primaryOrderEmail: 'waleedshoaibofficial@gmail.com',
    salesEmail: 'sales@onyxman.my',
    infoEmail: 'info@onyxman.my',
    formSubmitAjaxEndpoint: 'https://formsubmit.co/ajax/waleedshoaibofficial@gmail.com',
    web3FormsEndpoint: 'https://api.web3forms.com/submit',
    web3FormsAccessKey: '',
  };

  const RUNTIME_CONFIG = Object.assign({}, DEFAULT_CONFIG, window.ONYXMAN_CONFIG || {});

  const PRODUCT_SPECIFICATIONS = {
    horsemen: {
      id: 'horsemen',
      slug: 'horsemen',
      sku: 'ONYX-HM-20',
      name: 'Horsemen',
      titleEn: 'Horsemen — 20 Capsules × 500mg',
      titleMs: 'Horsemen — 20 Kapsul × 500mg',
      subtitleEn: 'High-Potency Tongkat Ali & Black Maca Stamina Reserve',
      subtitleMs: 'Ekstrak Tongkat Ali & Maca Hitam Berkepekatan Tinggi',
      capsulesPerBottle: 20,
      capsuleWeightMg: 500,
      refillDayOffset: 18,
      unitPrice: 159,
      imagePortrait: '/assets/products/horsemen-portrait.webp',
      imageStage: '/assets/products/horsemen-stage.webp',
      enUrl: '/products/horsemen/',
      msUrl: '/ms/produk/horsemen/',
    },
    'hammer-of-thor': {
      id: 'hammer-of-thor',
      slug: 'hammer-of-thor',
      sku: 'ONYX-HT-20',
      name: 'Hammer of Thor',
      titleEn: 'Hammer of Thor — 20 Veg. Capsules',
      titleMs: 'Hammer of Thor — 20 Kapsul Vegetarian',
      subtitleEn: 'Tribulus Terrestris Vitality & Sustained Physical Stamina Complex',
      subtitleMs: 'Kompleks Stamina Fizikal & Kecergasan Tribulus Terrestris',
      capsulesPerBottle: 20,
      capsuleWeightMg: 500,
      refillDayOffset: 18,
      unitPrice: 159,
      imagePortrait: '/assets/products/hammer-of-thor-portrait.webp',
      imageStage: '/assets/products/hammer-of-thor-stage.webp',
      enUrl: '/products/hammer-of-thor/',
      msUrl: '/ms/produk/hammer-of-thor/',
    },
    'grow-xl': {
      id: 'grow-xl',
      slug: 'grow-xl',
      sku: 'ONYX-GX-30',
      name: 'Grow XL',
      titleEn: 'Grow XL — 30 Capsules',
      titleMs: 'Grow XL — 30 Kapsul Harian',
      subtitleEn: '30-Day Daily Botanical Vitality & Micro-Circulation Protocol',
      subtitleMs: 'Protokol Nutrisi Kecergasan & Aliran Mikro Harian 30 Hari',
      capsulesPerBottle: 30,
      capsuleWeightMg: 500,
      refillDayOffset: 25,
      unitPrice: 159,
      imagePortrait: '/assets/products/grow-xl-portrait.webp',
      imageStage: '/assets/products/grow-xl-stage.webp',
      enUrl: '/products/grow-xl/',
      msUrl: '/ms/produk/grow-xl/',
    },
    'magnum-pump-xr': {
      id: 'magnum-pump-xr',
      slug: 'magnum-pump-xr',
      sku: 'ONYX-MP-30',
      name: 'Magnum Pump XR',
      titleEn: 'Magnum Pump XR — 30 Black Capsules',
      titleMs: 'Magnum Pump XR — 30 Kapsul Hitam',
      subtitleEn: 'Extended-Release L-Arginine, L-Citrulline & Nitric Oxide Vascular Complex',
      subtitleMs: 'Kompleks L-Arginine, L-Citrulline & Sokongan Nitrik Oksida',
      capsulesPerBottle: 30,
      capsuleWeightMg: 550,
      refillDayOffset: 25,
      unitPrice: 159,
      imagePortrait: '/assets/products/magnum-pump-xr-portrait.webp',
      imageStage: '/assets/products/magnum-pump-xr-stage.webp',
      enUrl: '/products/magnum-pump-xr/',
      msUrl: '/ms/produk/magnum-pump-xr/',
    },
  };

  // Alias support so any legacy reference resolves cleanly to Hammer of Thor
  PRODUCT_SPECIFICATIONS['Sensitivity-of-thor'] = PRODUCT_SPECIFICATIONS['hammer-of-thor'];

  const TIER_PRICING_MATRIX = {
    1: {
      bottles: 1,
      unitPrice: 159,
      totalNumeric: 159,
      totalSchema: '159.00',
      totalDisplay: 'RM 159',
      labelEn: '1 Bottle · Free Discreet Plain-Box Shipping (Peninsular MY)',
      labelMs: '1 Botol · Penghantaran Bungkusan Rahsia Percuma (Semenanjung MY)',
    },
    2: {
      bottles: 2,
      unitPrice: 159,
      totalNumeric: 318,
      totalSchema: '318.00',
      totalDisplay: 'RM 318',
      labelEn: '2 Bottles · Free Nationwide Discreet Express Shipping (incl. Sabah & Sarawak)',
      labelMs: '2 Botol · Penghantaran Ekspres Rahsia Percuma Seluruh Malaysia',
    },
    3: {
      bottles: 3,
      unitPrice: 159,
      totalNumeric: 477,
      totalSchema: '477.00',
      totalDisplay: 'RM 477',
      labelEn: '3 Bottles · Priority Discreet Plain-Box Express Shipping + VIP Refill Concierge',
      labelMs: '3 Botol · Penghantaran Rahsia Keutamaan + Khidmat Peringatan VIP',
    },
  };

  /* --------------------------------------------------------------------------
   * 2. INTERNAL ENGINE STATE
   * -------------------------------------------------------------------------- */
  const engineState = {
    isOpen: false,
    locale: RUNTIME_CONFIG.locale === 'ms-MY' ? 'ms-MY' : 'en-MY',
    selectedProductId:
      document.body?.getAttribute('data-default-product') === 'Sensitivity-of-thor'
        ? 'hammer-of-thor'
        : document.body?.getAttribute('data-default-product') || 'horsemen',
    selectedBottles: 1,
    selectedState: 'Kuala Lumpur',
    selectedPayment: 'FPX_DUITNOW_MY',
    lastFocusedTrigger: null,
    submitting: false,
  };

  if (!PRODUCT_SPECIFICATIONS[engineState.selectedProductId]) {
    engineState.selectedProductId = 'horsemen';
  }

  /* --------------------------------------------------------------------------
   * 3. MALAYSIAN PHONE NORMALIZATION & REVERSE WHATSAPP / CALENDAR BUILDERS
   * -------------------------------------------------------------------------- */

  /**
   * Normalizes any Malaysian phone string into strict E.164 digits starting with '60' (without '+').
   * Examples:
   * - "012-345 6789" -> "60123456789"
   * - "+60 11-2345 6789" -> "601123456789"
   * - "178899001" -> "60178899001"
   * @param {string} rawPhone
   * @returns {string}
   */
  function normalizeMalaysiaPhoneE164(rawPhone) {
    const digits = String(rawPhone || '').replace(/\D+/g, '');
    if (!digits) {
      return '';
    }
    if (digits.startsWith('60')) {
      return digits;
    }
    if (digits.startsWith('0')) {
      return '60' + digits.slice(1);
    }
    if (digits.startsWith('1')) {
      return '60' + digits;
    }
    return '60' + digits;
  }

  /**
   * Validates whether a normalized Malaysian phone number matches authentic mobile/landline length.
   * Malaysian E.164 numbers starting with 601X are 11 or 12 digits total (e.g., 60123456789 or 601123456789).
   * @param {string} rawPhone
   * @returns {{ valid: boolean, e164: string, formatted: string }}
   */
  function validateMalaysiaMobileNumber(rawPhone) {
    const e164 = normalizeMalaysiaPhoneE164(rawPhone);
    const isValidMobile = /^601\d{8,9}$/.test(e164);
    const isValidLandline = /^60[3-9]\d{7,8}$/.test(e164);
    const valid = isValidMobile || isValidLandline;
    const formatted = e164 ? '+' + e164 : '';
    return { valid, e164, formatted };
  }

  /**
   * Generates a unique Order Reference ID (`ONYX-MY-XXXXXX`).
   * @returns {string}
   */
  function generateOrderReferenceId() {
    const timePart = Date.now().toString(36).toUpperCase().slice(-4);
    const randomPart = Math.floor(10 + Math.random() * 89).toString();
    return 'ONYX-MY-' + timePart + randomPart;
  }

  /**
   * Formats a Date object as YYYYMMDDTHHMMSSZ for Google Calendar event links.
   * @param {Date} dateObj
   * @returns {string}
   */
  function formatGoogleCalendarUTC(dateObj) {
    return dateObj.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
  }

  /**
   * Builds the 1-Click Reverse WhatsApp URL (`merchantReverseWhatsAppUrl`) embedded inside the
   * merchant order notification email (`waleedshoaibofficial@gmail.com`) so the owner can tap 1 link
   * to open a WhatsApp conversation directly with the buyer (`https://wa.me/601XXXXXXXX?text=...`).
   *
   * @param {Object} orderData
   * @returns {string}
   */
  function buildMerchantReverseWhatsAppUrl(orderData) {
    const productSpec = PRODUCT_SPECIFICATIONS[orderData.productId] || PRODUCT_SPECIFICATIONS.horsemen;
    const tierInfo = TIER_PRICING_MATRIX[orderData.bottles] || TIER_PRICING_MATRIX[1];
    const paymentLabel =
      orderData.paymentMethod === 'FPX_DUITNOW_MY'
        ? 'FPX Online Banking / DuitNow Instant QR'
        : 'Cash on Delivery (COD Malaysia)';

    const messageLines = [
      'Salam / Hello ' + orderData.customerName + ',',
      'Ini adalah Meja Khidmat Privasi Onyxman Malaysia (https://onyxman.my | sales@onyxman.my).',
      'This is the Onyxman Malaysia Private Concierge Desk.',
      '',
      'Kami telah menerima tempahan bungkusan rahsia anda / We have logged your discreet order [' +
        orderData.orderId +
        ']:',
      '• Formulasi / Formulation: ' +
        productSpec.name +
        ' (' +
        productSpec.capsulesPerBottle +
        ' Capsules × ' +
        orderData.bottles +
        ' Bottle' +
        (orderData.bottles > 1 ? 's' : '') +
        ')',
      '• Jumlah / Total: ' + tierInfo.totalDisplay + ' (' + tierInfo.totalSchema + ' MYR)',
      '• Kaedah Bayaran / Settlement: ' + paymentLabel,
      '• Negeri / State: ' + orderData.malaysiaState,
      '• Alamat / Address: ' + orderData.deliveryAddress,
      '',
      'Bungkusan tanpa nama produk anda ("OM Fulfilment Logistics") sedang disediakan. Sila balas YA / YES untuk pengesahan pelepasan segera.',
    ];

    return 'https://wa.me/' + orderData.normalizedPhoneE164 + '?text=' + encodeURIComponent(messageLines.join('\n'));
  }

  /**
   * Builds the 1-Click Google Calendar Refill Reminder URL (`merchantRefillCalendarUrl`):
   * - +18 days per bottle for 20-capsule formulations (Horsemen, Hammer of Thor)
   * - +25 days per bottle for 30-capsule formulations (Grow XL, Magnum Pump XR)
   *
   * @param {Object} orderData
   * @returns {{ refillDayOffset: number, totalDaysUntilRefill: number, calendarUrl: string }}
   */
  function buildMerchantRefillCalendarUrl(orderData) {
    const productSpec = PRODUCT_SPECIFICATIONS[orderData.productId] || PRODUCT_SPECIFICATIONS.horsemen;
    const refillDayOffset = productSpec.refillDayOffset; // 18 or 25
    const totalDaysUntilRefill = refillDayOffset * orderData.bottles;

    const now = new Date();
    const reminderStart = new Date(now.getTime() + totalDaysUntilRefill * 24 * 60 * 60 * 1000);
    reminderStart.setUTCHours(2, 0, 0, 0); // 10:00 AM MYT (UTC+8)
    const reminderEnd = new Date(reminderStart.getTime() + 45 * 60 * 1000);

    const followUpWhatsAppUrl =
      'https://wa.me/' +
      orderData.normalizedPhoneE164 +
      '?text=' +
      encodeURIComponent(
        'Salam / Hello ' +
          orderData.customerName +
          ', this is the Onyxman Malaysia Private Concierge (https://onyxman.my | sales@onyxman.my). You are approaching Day ' +
          totalDaysUntilRefill +
          ' of your ' +
          productSpec.name +
          ' protocol. Would you like us to dispatch a fresh discreet refill bottle (RM 159) or 2-bottle reserve (RM 318) in an unmarked parcel?'
      );

    const eventTitle =
      '[Onyxman Refill Follow-Up] ' +
      orderData.customerName +
      ' — ' +
      productSpec.name +
      ' (Day-' +
      refillDayOffset +
      ' Protocol)';

    const eventDetails = [
      'Onyxman Malaysia VIP Refill Follow-Up [' + orderData.orderId + ']',
      'Customer: ' + orderData.customerName,
      'WhatsApp Phone (MY): +' + orderData.normalizedPhoneE164,
      'Formulation: ' +
        productSpec.name +
        ' (' +
        productSpec.capsulesPerBottle +
        ' Capsules × ' +
        orderData.bottles +
        ' Bottle(s))',
      'Previous Total: RM ' + orderData.bottles * 159 + ' (' + orderData.bottles * 159 + '.00 MYR)',
      '1-Click Refill WhatsApp Link: ' + followUpWhatsAppUrl,
      'Merchant Desk: waleedshoaibofficial@gmail.com | sales@onyxman.my | info@onyxman.my',
    ].join('\n');

    const datesParam = formatGoogleCalendarUTC(reminderStart) + '/' + formatGoogleCalendarUTC(reminderEnd);
    const calendarUrl =
      'https://calendar.google.com/calendar/render?action=TEMPLATE' +
      '&text=' +
      encodeURIComponent(eventTitle) +
      '&dates=' +
      encodeURIComponent(datesParam) +
      '&details=' +
      encodeURIComponent(eventDetails) +
      '&location=' +
      encodeURIComponent('Kuala Lumpur, Malaysia (https://onyxman.my)');

    return {
      refillDayOffset,
      totalDaysUntilRefill,
      calendarUrl,
    };
  }

  /**
   * Builds the Day-3+ Direct Buyer-to-Merchant WhatsApp URL when `window.ONYXMAN_CONFIG.whatsappNumberE164` is non-empty.
   * @param {string} merchantPhoneRaw
   * @param {Object} orderData
   * @returns {string | null}
   */
  function buildDirectMerchantWhatsAppUrl(merchantPhoneRaw, orderData) {
    const cleanMerchant = String(merchantPhoneRaw || '').replace(/\D+/g, '');
    if (!cleanMerchant) {
      return null;
    }
    const productSpec = PRODUCT_SPECIFICATIONS[orderData.productId] || PRODUCT_SPECIFICATIONS.horsemen;
    const tierInfo = TIER_PRICING_MATRIX[orderData.bottles] || TIER_PRICING_MATRIX[1];
    const paymentLabel =
      orderData.paymentMethod === 'FPX_DUITNOW_MY' ? 'FPX / DuitNow Instant QR' : 'Cash on Delivery (COD Malaysia)';

    const lines = [
      'Hello Onyxman Malaysia Concierge, I would like to confirm my discreet order [' + orderData.orderId + ']:',
      '• Formulation: ' + productSpec.name + ' (' + productSpec.capsulesPerBottle + ' Capsules)',
      '• Protocol Tier: ' + orderData.bottles + ' Bottle(s) — ' + tierInfo.totalDisplay + ' (' + tierInfo.totalSchema + ' MYR)',
      '• Recipient: ' + orderData.customerName,
      '• Phone: +' + orderData.normalizedPhoneE164,
      '• State: ' + orderData.malaysiaState,
      '• Delivery Address: ' + orderData.deliveryAddress,
      '• Settlement: ' + paymentLabel,
    ];

    return 'https://wa.me/' + cleanMerchant + '?text=' + encodeURIComponent(lines.join('\n'));
  }

  /* --------------------------------------------------------------------------
   * 4. EXPRESS ORDER DRAWER CONTROLLER (OPEN / CLOSE / PRE-SELECT / SUMMARY)
   * -------------------------------------------------------------------------- */
  function getDrawerElements() {
    return {
      backdrop: document.getElementById('onyxman-express-order-backdrop'),
      drawer: document.getElementById('onyxman-express-order-drawer'),
      form: document.getElementById('onyxman-express-order-form'),
      confirmView: document.getElementById('onyxman-order-confirmation-view'),
      fieldProductId: document.getElementById('onyxman-field-product-id'),
      fieldBottles: document.getElementById('onyxman-field-bottles'),
      fieldTotalMYR: document.getElementById('onyxman-field-total-myr'),
      inputName: document.getElementById('onyxman-input-name'),
      inputPhone: document.getElementById('onyxman-input-phone'),
      inputEmail: document.getElementById('onyxman-input-email'),
      inputState: document.getElementById('onyxman-input-state'),
      inputAddress: document.getElementById('onyxman-input-address'),
      phoneStatus: document.querySelector('[data-phone-validation-status]'),
      stateEtaText: document.querySelector('[data-state-eta-text]'),
      summaryProductName: document.querySelector('[data-summary-product-name]'),
      summaryTierLabel: document.querySelector('[data-summary-tier-label]'),
      summaryTotalPrice: document.querySelector('[data-summary-total-price]'),
      submitBtn: document.getElementById('onyxman-submit-order-btn'),
      submitBtnText: document.querySelector('[data-submit-btn-text]'),
      errorBox: document.getElementById('onyxman-order-error'),
      receiptOrderId: document.querySelector('[data-receipt-order-id]'),
      receiptProductTier: document.querySelector('[data-receipt-product-tier]'),
      receiptAmount: document.querySelector('[data-receipt-amount]'),
      receiptStateEta: document.querySelector('[data-receipt-state-eta]'),
      receiptCalendarLink: document.querySelector('[data-receipt-calendar-link]'),
      receiptReverseWhatsAppLink: document.querySelector('[data-receipt-reverse-whatsapp-link]'),
      receiptDirectWhatsAppLink: document.querySelector('[data-receipt-direct-whatsapp-link]'),
      stickyProductLabel: document.querySelector('[data-sticky-product-label]'),
      stickyPrice: document.querySelector('[data-sticky-price]'),
      stickyCtaText: document.querySelector('[data-sticky-cta-text]'),
    };
  }

  function syncDrawerUI() {
    const els = getDrawerElements();
    const isMs = engineState.locale === 'ms-MY';
    const productSpec = PRODUCT_SPECIFICATIONS[engineState.selectedProductId] || PRODUCT_SPECIFICATIONS.horsemen;
    const tierInfo = TIER_PRICING_MATRIX[engineState.selectedBottles] || TIER_PRICING_MATRIX[1];

    if (els.fieldProductId) els.fieldProductId.value = productSpec.id;
    if (els.fieldBottles) els.fieldBottles.value = String(tierInfo.bottles);
    if (els.fieldTotalMYR) els.fieldTotalMYR.value = tierInfo.totalSchema;

    // Update Formulation radio buttons inside drawer
    const prodButtons = document.querySelectorAll('[data-drawer-select-product]');
    prodButtons.forEach(function updateProdBtn(btn) {
      const btnId = btn.getAttribute('data-drawer-select-product');
      const isSelected = btnId === productSpec.id;
      btn.setAttribute('aria-checked', isSelected ? 'true' : 'false');
      btn.classList.toggle('drawer-formulation-option--selected', isSelected);
      const indicator = btn.querySelector('.drawer-formulation-option__check');
      if (indicator) indicator.textContent = isSelected ? '●' : '○';
    });

    // Update Tier radio buttons inside drawer & on page
    const tierButtons = document.querySelectorAll('[data-drawer-select-qty]');
    tierButtons.forEach(function updateTierBtn(btn) {
      const qty = Number(btn.getAttribute('data-drawer-select-qty'));
      const isSelected = qty === tierInfo.bottles;
      btn.setAttribute('aria-checked', isSelected ? 'true' : 'false');
      btn.classList.toggle('tier-strip-option--selected', isSelected);
    });

    // Update Summary Ledger
    if (els.summaryProductName) {
      els.summaryProductName.textContent = isMs ? productSpec.titleMs : productSpec.titleEn;
    }
    if (els.summaryTierLabel) {
      els.summaryTierLabel.textContent = isMs ? tierInfo.labelMs : tierInfo.labelEn;
    }
    if (els.summaryTotalPrice) {
      els.summaryTotalPrice.textContent = tierInfo.totalDisplay + ' (' + tierInfo.totalSchema + ' MYR)';
    }
    if (els.submitBtnText && !engineState.submitting) {
      els.submitBtnText.textContent = isMs
        ? 'SAHKAN TEMPAHAN BUNGKUSAN RAHSIA SEKARANG · ' + tierInfo.totalDisplay
        : 'CONFIRM DISCREET PARCEL ORDER NOW · ' + tierInfo.totalDisplay;
    }

    // Also sync Sticky Mobile Bar price & label
    if (els.stickyPrice) {
      els.stickyPrice.textContent = tierInfo.totalDisplay;
    }
    if (els.stickyProductLabel) {
      els.stickyProductLabel.textContent =
        (isMs ? productSpec.titleMs : productSpec.titleEn) + ' • FPX / DuitNow QR / COD Malaysia';
    }
    if (els.stickyCtaText) {
      els.stickyCtaText.textContent = (isMs ? 'TEMPAH · ' : 'ACQUIRE · ') + tierInfo.totalDisplay;
    }
  }

  function openExpressOrderDrawer(productSlug, bottleQty, triggerEl) {
    const els = getDrawerElements();
    if (!els.drawer || !els.backdrop) return;

    if (productSlug) {
      const normalized = productSlug === 'Sensitivity-of-thor' ? 'hammer-of-thor' : productSlug;
      if (PRODUCT_SPECIFICATIONS[normalized]) {
        engineState.selectedProductId = normalized;
      }
    }
    if (bottleQty && TIER_PRICING_MATRIX[Number(bottleQty)]) {
      engineState.selectedBottles = Number(bottleQty);
    }
    if (triggerEl) {
      engineState.lastFocusedTrigger = triggerEl;
    }

    syncDrawerUI();

    els.backdrop.setAttribute('aria-hidden', 'false');
    els.drawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    engineState.isOpen = true;

    // Close mobile nav curtain if open
    const mobileCurtain = document.getElementById('obsidian-mobile-nav-curtain');
    if (mobileCurtain) {
      mobileCurtain.setAttribute('aria-hidden', 'true');
    }

    setTimeout(function focusFirstInput() {
      if (els.inputName && !els.form?.hasAttribute('hidden')) {
        els.inputName.focus();
      }
    }, 180);
  }

  function closeExpressOrderDrawer() {
    const els = getDrawerElements();
    if (!els.drawer || !els.backdrop) return;

    els.backdrop.setAttribute('aria-hidden', 'true');
    els.drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    engineState.isOpen = false;

    if (engineState.lastFocusedTrigger && typeof engineState.lastFocusedTrigger.focus === 'function') {
      engineState.lastFocusedTrigger.focus();
    }
  }

  /* --------------------------------------------------------------------------
   * 5. ORDER SUBMISSION ENGINE (FORMSUBMIT.CO AJAX + FAILOVER + DAY-3+ BRIDGE)
   * -------------------------------------------------------------------------- */
  async function handleExpressOrderSubmit(event) {
    event.preventDefault();
    if (engineState.submitting) return;

    const els = getDrawerElements();
    const isMs = engineState.locale === 'ms-MY';

    if (els.errorBox) {
      els.errorBox.hidden = true;
      els.errorBox.textContent = '';
    }

    const customerName = (els.inputName?.value || '').trim();
    const customerPhoneRaw = (els.inputPhone?.value || '').trim();
    const customerEmail = (els.inputEmail?.value || '').trim();
    const malaysiaState = (els.inputState?.value || 'Kuala Lumpur').trim();
    const deliveryAddress = (els.inputAddress?.value || '').trim();
    const selectedPaymentRadio = document.querySelector('input[name="paymentMethod"]:checked');
    const paymentMethod = selectedPaymentRadio ? selectedPaymentRadio.value : 'FPX_DUITNOW_MY';

    const phoneCheck = validateMalaysiaMobileNumber(customerPhoneRaw);

    if (!customerName || customerName.length < 2) {
      if (els.errorBox) {
        els.errorBox.hidden = false;
        els.errorBox.textContent = isMs
          ? 'Sila masukkan nama penerima atau nama samaran untuk slip bungkusan rahsia anda.'
          : 'Please enter a recipient name or pseudonym for your unmarked courier waybill.';
      }
      els.inputName?.focus();
      return;
    }

    if (!phoneCheck.valid) {
      if (els.errorBox) {
        els.errorBox.hidden = false;
        els.errorBox.textContent = isMs
          ? 'Sila masukkan nombor telefon bimbit Malaysia yang sah (cth: 012-345 6789 atau +60123456789).'
          : 'Please enter a valid Malaysian mobile number (e.g., 012-345 6789 or +60123456789).';
      }
      els.inputPhone?.focus();
      return;
    }

    if (!deliveryAddress || deliveryAddress.length < 6) {
      if (els.errorBox) {
        els.errorBox.hidden = false;
        els.errorBox.textContent = isMs
          ? 'Sila masukkan alamat penuh penghantaran (termasuk poskod dan bandar).'
          : 'Please enter your full delivery address (including postcode and city).';
      }
      els.inputAddress?.focus();
      return;
    }

    engineState.submitting = true;
    const productSpec = PRODUCT_SPECIFICATIONS[engineState.selectedProductId] || PRODUCT_SPECIFICATIONS.horsemen;
    const tierInfo = TIER_PRICING_MATRIX[engineState.selectedBottles] || TIER_PRICING_MATRIX[1];
    const orderId = generateOrderReferenceId();

    if (els.submitBtn) els.submitBtn.disabled = true;
    if (els.submitBtnText) {
      els.submitBtnText.textContent = isMs
        ? 'MENDAFTAR TEMPAHAN RAHSIA ANDA...'
        : 'ENCRYPTING & ROUTING DISCREET ORDER...';
    }

    const orderData = {
      orderId,
      productId: productSpec.id,
      productName: productSpec.name,
      capsulesPerBottle: productSpec.capsulesPerBottle,
      bottles: tierInfo.bottles,
      totalNumeric: tierInfo.totalNumeric,
      totalSchema: tierInfo.totalSchema,
      totalDisplay: tierInfo.totalDisplay,
      customerName,
      customerPhoneRaw,
      normalizedPhoneE164: phoneCheck.e164,
      customerEmail,
      malaysiaState,
      deliveryAddress,
      paymentMethod,
      timestampISO: new Date().toISOString(),
    };

    const merchantReverseWhatsAppUrl = buildMerchantReverseWhatsAppUrl(orderData);
    const refillSchedule = buildMerchantRefillCalendarUrl(orderData);
    const merchantRefillCalendarUrl = refillSchedule.calendarUrl;
    const directMerchantWhatsAppUrl = buildDirectMerchantWhatsAppUrl(
      RUNTIME_CONFIG.whatsappNumberE164,
      orderData
    );

    const ajaxPayload = {
      _subject:
        '[ONYXMAN ORDER - RM ' +
        tierInfo.totalNumeric +
        '] ' +
        productSpec.name +
        ' (' +
        tierInfo.bottles +
        'x) - ' +
        malaysiaState,
      _template: 'table',
      _captcha: 'false',
      _replyto: customerEmail || RUNTIME_CONFIG.salesEmail,
      order_reference_id: orderId,
      brand_domain: 'https://onyxman.my',
      primary_merchant_inbox: 'waleedshoaibofficial@gmail.com',
      official_brand_aliases: 'sales@onyxman.my | info@onyxman.my',
      product_formulation:
        productSpec.name + ' (' + productSpec.capsulesPerBottle + ' Capsules × ' + tierInfo.bottles + ' Bottle(s))',
      bottle_tier_quantity: tierInfo.bottles + ' Bottle(s)',
      order_total_myr: tierInfo.totalDisplay + ' (' + tierInfo.totalSchema + ' MYR)',
      customer_name: customerName,
      customer_phone_malaysia: customerPhoneRaw,
      customer_phone_e164: '+' + phoneCheck.e164,
      customer_email: customerEmail || 'WhatsApp Priority',
      malaysia_state: malaysiaState,
      delivery_address: deliveryAddress,
      payment_method:
        paymentMethod === 'FPX_DUITNOW_MY'
          ? 'FPX Online Banking / DuitNow Instant QR'
          : 'Cash on Delivery (COD Malaysia)',
      discreet_waybill_sender: 'OM Fulfilment Logistics (100% Plain Unmarked Parcel)',
      merchantReverseWhatsAppUrl: merchantReverseWhatsAppUrl,
      merchantRefillCalendarUrl: merchantRefillCalendarUrl,
      refill_reminder_schedule:
        'Day-' + refillSchedule.refillDayOffset + ' Protocol (' + refillSchedule.totalDaysUntilRefill + ' Days Total)',
      submitted_at_iso: orderData.timestampISO,
    };

    // Persist local encrypted receipt for instant customer continuity
    try {
      const existingOrders = JSON.parse(localStorage.getItem('onyxman_recent_orders') || '[]');
      existingOrders.unshift({
        orderId,
        product: productSpec.name,
        bottles: tierInfo.bottles,
        totalMYR: tierInfo.totalSchema,
        state: malaysiaState,
        timestamp: orderData.timestampISO,
      });
      localStorage.setItem('onyxman_recent_orders', JSON.stringify(existingOrders.slice(0, 10)));
    } catch {
      // Ignore storage quota errors in private browsing
    }

    // Attempt Primary Endpoint: FormSubmit.co AJAX to waleedshoaibofficial@gmail.com
    let primaryDelivered = false;
    try {
      const response = await fetch(RUNTIME_CONFIG.formSubmitAjaxEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(ajaxPayload),
      });
      if (response && response.ok) {
        primaryDelivered = true;
      }
    } catch {
      primaryDelivered = false;
    }

    // Automatic Secondary Failover Endpoint if primary network call experiences transient restriction
    if (!primaryDelivered && RUNTIME_CONFIG.web3FormsAccessKey) {
      try {
        await fetch(RUNTIME_CONFIG.web3FormsEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(
            Object.assign({ access_key: RUNTIME_CONFIG.web3FormsAccessKey }, ajaxPayload)
          ),
        });
      } catch {
        // Silent failover completion; customer receipt still renders immediately
      }
    }

    engineState.submitting = false;
    if (els.submitBtn) els.submitBtn.disabled = false;

    // Populate Instant On-Screen Order Receipt
    if (els.receiptOrderId) els.receiptOrderId.textContent = orderId;
    if (els.receiptProductTier) {
      els.receiptProductTier.textContent =
        productSpec.name +
        ' (' +
        tierInfo.bottles +
        (isMs ? ' Botol · ' : ' Bottle(s) · ') +
        productSpec.capsulesPerBottle * tierInfo.bottles +
        (isMs ? ' Kapsul)' : ' Capsules)');
    }
    if (els.receiptAmount) {
      els.receiptAmount.textContent = tierInfo.totalDisplay + ' (' + tierInfo.totalSchema + ' MYR)';
    }
    if (els.receiptStateEta) {
      const selectedOption = els.inputState?.selectedOptions?.[0];
      const etaLabel = selectedOption?.getAttribute('data-eta') || '1–2 Business Days Discreet Express';
      els.receiptStateEta.textContent = malaysiaState + ' · ' + etaLabel;
    }
    if (els.receiptCalendarLink) {
      els.receiptCalendarLink.setAttribute('href', merchantRefillCalendarUrl);
    }
    if (els.receiptReverseWhatsAppLink) {
      els.receiptReverseWhatsAppLink.setAttribute('href', merchantReverseWhatsAppUrl);
    }

    // Dual-Mode Day-3+ Behavior: If whatsappNumberE164 is configured, expose & trigger direct WhatsApp chat
    if (directMerchantWhatsAppUrl) {
      if (els.receiptDirectWhatsAppLink) {
        els.receiptDirectWhatsAppLink.hidden = false;
        els.receiptDirectWhatsAppLink.setAttribute('href', directMerchantWhatsAppUrl);
      }
      try {
        window.open(directMerchantWhatsAppUrl, '_blank', 'noopener,noreferrer');
      } catch {
        // Fallback link remains clickable inside confirmation receipt
      }
    }

    if (els.form) els.form.hidden = true;
    if (els.confirmView) els.confirmView.hidden = false;
  }

  /* --------------------------------------------------------------------------
   * 6. PARADIGM A (100vw x 100vh) & PARADIGM D (50vw/50vw) SCROLL CHOREOGRAPHY
   * -------------------------------------------------------------------------- */
  function initSpatialScrollChoreography() {
    const heroBottleRenders = document.querySelectorAll('.cinema-stage-100vh__bottle-render, [data-parallax-bottle]');
    const splitVisualStages = document.querySelectorAll('.split-stage-5050, [data-split-stage]');

    let ticking = false;
    function updateParallaxFrame() {
      const scrollY = window.scrollY || window.pageYOffset || 0;
      const viewportH = window.innerHeight || 900;

      heroBottleRenders.forEach(function animateHeroBottle(bottleEl) {
        if (scrollY < viewportH * 1.3) {
          const progress = Math.min(1, Math.max(0, scrollY / viewportH));
          const translateY = -2 - progress * 6.5;
          const scale = 1 + progress * 0.035;
          bottleEl.style.transform = 'translateY(' + translateY.toFixed(2) + 'vh) scale(' + scale.toFixed(3) + ')';
        }
      });

      splitVisualStages.forEach(function updateSplitStageTelemetry(stageEl) {
        const rect = stageEl.getBoundingClientRect();
        if (rect.top < viewportH && rect.bottom > 0) {
          const telemetryRows = stageEl.querySelectorAll('[data-botanical-step], .architectural-ledger__row');
          const visualImg = stageEl.querySelector('.split-stage-5050__visual-img, [data-split-visual-img]');
          const watermarkEl = stageEl.querySelector('.split-stage-5050__index-watermark, [data-split-watermark]');

          telemetryRows.forEach(function checkRowActive(row, idx) {
            const rowRect = row.getBoundingClientRect();
            const isFocused = rowRect.top >= viewportH * 0.18 && rowRect.top <= viewportH * 0.65;
            row.classList.toggle('architectural-ledger__row--active', isFocused);

            if (isFocused) {
              const stepImg = row.getAttribute('data-step-image');
              const stepWatermark = row.getAttribute('data-step-index');
              if (stepImg && visualImg && visualImg.getAttribute('src') !== stepImg) {
                visualImg.setAttribute('src', stepImg);
              }
              if (stepWatermark && watermarkEl) {
                watermarkEl.textContent = stepWatermark;
              } else if (watermarkEl && !stepWatermark) {
                watermarkEl.textContent = '0' + (idx + 1);
              }
            }
          });
        }
      });

      ticking = false;
    }

    window.addEventListener(
      'scroll',
      function onScroll() {
        if (!ticking) {
          window.requestAnimationFrame(updateParallaxFrame);
          ticking = true;
        }
      },
      { passive: true }
    );
  }

  /* --------------------------------------------------------------------------
   * 7. INTERACTIVE 4-BOTTLE GOAL FINDER APOTHECARY QUIZ CONTROLLER
   * -------------------------------------------------------------------------- */
  function initGoalFinderQuiz() {
    const quizContainers = document.querySelectorAll('[data-goal-quiz]');
    if (!quizContainers.length) return;

    const GOAL_RECOMMENDATIONS = {
      'evening-readiness': {
        productId: 'horsemen',
        badgeEn: 'RECOMMENDED 20-CAPSULE RESERVE · HORSEMEN',
        badgeMs: 'CADANGAN KITARAN 20 KAPSUL · HORSEMEN',
        headlineEn: 'Horsemen — High-Potency Tongkat Ali & Black Maca Reserve (20 Capsules × 500mg)',
        headlineMs: 'Horsemen — Formulasi Tongkat Ali & Maca Hitam Berkepekatan Tinggi (20 Kapsul × 500mg)',
        rationaleEn:
          'Engineered for rapid 45–60 minute evening readiness and adaptogenic drive using standardized Malaysian Eurycoma longifolia and Peruvian Black Maca.',
        rationaleMs:
          'Dirumus khas untuk kesediaan tenaga malam dalam 45–60 minit serta ketahanan fizikal menggunakan ekstrak Tongkat Ali Malaysia dan Maca Hitam Peru.',
      },
      'sustained-endurance': {
        productId: 'hammer-of-thor',
        badgeEn: 'RECOMMENDED VEGETARIAN COMPLEX · HAMMER OF THOR',
        badgeMs: 'CADANGAN KAPSUL VEGETARIAN · HAMMER OF THOR',
        headlineEn: 'Hammer of Thor — Tribulus Terrestris Vitality Complex (20 Veg. Capsules)',
        headlineMs: 'Hammer of Thor — Kompleks Kecergasan Tribulus Terrestris (20 Kapsul Vegetarian)',
        rationaleEn:
          'Crafted in 100% plant-derived vegetarian capsules for progressive physical stamina conditioning, muscular recovery, and sustained confidence.',
        rationaleMs:
          'Dihasilkan dalam kapsul vegetarian berasaskan tumbuhan untuk ketahanan stamina fizikal berperingkat dan pemulihan tenaga.',
      },
      'daily-30day-vitality': {
        productId: 'grow-xl',
        badgeEn: 'RECOMMENDED 30-DAY DAILY PROTOCOL · GROW XL',
        badgeMs: 'CADANGAN PROTOKOL HARIAN 30 HARI · GROW XL',
        headlineEn: 'Grow XL — 30-Day Daily Botanical Vitality & Micro-Circulation Protocol (30 Capsules)',
        headlineMs: 'Grow XL — Protokol Nutrisi Kecergasan & Aliran Mikro Harian (30 Kapsul)',
        rationaleEn:
          'Ideal for men seeking a complete 30-day morning botanical regimen combining Panax Ginseng, Ginkgo Biloba, and Saw Palmetto for baseline energy.',
        rationaleMs:
          'Sesuai untuk lelaki yang mahukan rutin pagi lengkap 30 hari menggabungkan Panax Ginseng, Ginkgo Biloba dan Saw Palmetto.',
      },
      'nitric-oxide-pump': {
        productId: 'magnum-pump-xr',
        badgeEn: 'RECOMMENDED NITRIC OXIDE VASCULAR COMPLEX · MAGNUM PUMP XR',
        badgeMs: 'CADANGAN KOMPLEKS NITRIK OKSIDA · MAGNUM PUMP XR',
        headlineEn: 'Magnum Pump XR — Extended-Release L-Arginine & L-Citrulline Complex (30 Black Capsules)',
        headlineMs: 'Magnum Pump XR — Kompleks L-Arginine, L-Citrulline & Nitrik Oksida (30 Kapsul Hitam)',
        rationaleEn:
          'Formulated for gym training and peak evening vascular output using L-Arginine AAKG, L-Citrulline, Beetroot Nitrate, and Thai Black Ginger.',
        rationaleMs:
          'Dirumus untuk prestasi senaman dan aliran vaskular malam optimum menggunakan L-Arginine AAKG, L-Citrulline dan Kunyit Hitam.',
      },
    };

    quizContainers.forEach(function bindQuiz(quizEl) {
      const optionBtns = quizEl.querySelectorAll('[data-quiz-goal]');
      const resultPane = quizEl.querySelector('[data-quiz-result]');
      const resultBadge = quizEl.querySelector('[data-quiz-result-badge]');
      const resultHeadline = quizEl.querySelector('[data-quiz-result-headline]');
      const resultRationale = quizEl.querySelector('[data-quiz-result-rationale]');
      const resultOrderBtn = quizEl.querySelector('[data-quiz-order-btn]');
      const resultExploreLink = quizEl.querySelector('[data-quiz-explore-link]');

      optionBtns.forEach(function attachQuizOption(btn) {
        btn.addEventListener('click', function onSelectGoal() {
          const goalKey = btn.getAttribute('data-quiz-goal') || 'evening-readiness';
          const rec = GOAL_RECOMMENDATIONS[goalKey] || GOAL_RECOMMENDATIONS['evening-readiness'];
          const spec = PRODUCT_SPECIFICATIONS[rec.productId] || PRODUCT_SPECIFICATIONS.horsemen;
          const isMs = engineState.locale === 'ms-MY';

          optionBtns.forEach(function clearSelected(otherBtn) {
            otherBtn.setAttribute('aria-pressed', otherBtn === btn ? 'true' : 'false');
            otherBtn.classList.toggle('tier-strip-option--selected', otherBtn === btn);
          });

          if (resultBadge) resultBadge.textContent = isMs ? rec.badgeMs : rec.badgeEn;
          if (resultHeadline) resultHeadline.textContent = isMs ? rec.headlineMs : rec.headlineEn;
          if (resultRationale) resultRationale.textContent = isMs ? rec.rationaleMs : rec.rationaleEn;
          if (resultOrderBtn) {
            resultOrderBtn.setAttribute('data-order-product', spec.id);
            resultOrderBtn.setAttribute('data-order-qty', '2');
          }
          if (resultExploreLink) {
            resultExploreLink.setAttribute('href', isMs ? spec.msUrl : spec.enUrl);
          }
          if (resultPane) {
            resultPane.hidden = false;
          }
        });
      });
    });
  }

  /* --------------------------------------------------------------------------
   * 8. FAQ ACCORDION & BOTANICAL TELEMETRY CONTROLLER
   * -------------------------------------------------------------------------- */
  function initFaqAccordions() {
    const triggers = document.querySelectorAll('[data-faq-trigger]');
    triggers.forEach(function bindTrigger(btn) {
      btn.addEventListener('click', function onToggleFaq() {
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        const targetId = btn.getAttribute('aria-controls');
        const panel = targetId ? document.getElementById(targetId) : btn.nextElementSibling;

        btn.setAttribute('aria-expanded', expanded ? 'false' : 'true');
        if (panel) {
          panel.hidden = expanded;
        }
      });
    });

    // Also enhance native <details class="faq-ledger-item"> elements so only one opens per group if desired
    const detailGroups = document.querySelectorAll('[data-faq-accordion-group]');
    detailGroups.forEach(function bindDetailsGroup(groupEl) {
      const items = groupEl.querySelectorAll('details');
      items.forEach(function bindDetail(detailEl) {
        detailEl.addEventListener('toggle', function onDetailToggle() {
          if (detailEl.open) {
            items.forEach(function closeOthers(other) {
              if (other !== detailEl && other.open) {
                other.open = false;
              }
            });
          }
        });
      });
    });
  }

  /* --------------------------------------------------------------------------
   * 9. GLOBAL EVENT DELEGATION & LIVE VALIDATION BINDINGS
   * -------------------------------------------------------------------------- */
  function bindGlobalInteractions() {
    const els = getDrawerElements();
    const isMs = engineState.locale === 'ms-MY';

    // Delegate clicks across document for drawer triggers, product selectors, tier strips, and mobile menu
    document.addEventListener('click', function onDocumentClick(event) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      // 1. Open Express Order Drawer Trigger
      const openTrigger = target.closest('[data-open-order-drawer]');
      if (openTrigger) {
        event.preventDefault();
        const prod = openTrigger.getAttribute('data-order-product') || engineState.selectedProductId;
        const qty = openTrigger.getAttribute('data-order-qty') || engineState.selectedBottles;
        openExpressOrderDrawer(prod, Number(qty), openTrigger);
        return;
      }

      // 2. Close Express Order Drawer Trigger
      const closeTrigger = target.closest('[data-close-order-drawer]');
      if (closeTrigger) {
        event.preventDefault();
        closeExpressOrderDrawer();
        return;
      }

      // 3. Select Formulation inside Drawer
      const prodSelectBtn = target.closest('[data-drawer-select-product]');
      if (prodSelectBtn) {
        event.preventDefault();
        const chosenId = prodSelectBtn.getAttribute('data-drawer-select-product');
        if (chosenId && PRODUCT_SPECIFICATIONS[chosenId]) {
          engineState.selectedProductId = chosenId;
          syncDrawerUI();
        }
        return;
      }

      // 4. Select Bottle Tier (1 / 2 / 3 Bottles — RM 159 / RM 318 / RM 477)
      const qtySelectBtn = target.closest('[data-drawer-select-qty]');
      if (qtySelectBtn) {
        event.preventDefault();
        const chosenQty = Number(qtySelectBtn.getAttribute('data-drawer-select-qty'));
        if (TIER_PRICING_MATRIX[chosenQty]) {
          engineState.selectedBottles = chosenQty;
          syncDrawerUI();
        }
        return;
      }

      // 5. Reset Order Drawer after Confirmation Receipt
      const resetTrigger = target.closest('[data-reset-order-drawer]');
      if (resetTrigger) {
        event.preventDefault();
        if (els.confirmView) els.confirmView.hidden = true;
        if (els.form) {
          els.form.hidden = false;
          els.form.reset();
        }
        syncDrawerUI();
        return;
      }

      // 6. Toggle Mobile Architectural Navigation Curtain
      const mobileToggle = target.closest('[data-toggle-mobile-nav]');
      if (mobileToggle) {
        event.preventDefault();
        const curtain = document.getElementById('obsidian-mobile-nav-curtain');
        if (curtain) {
          const isHidden = curtain.getAttribute('aria-hidden') !== 'false';
          curtain.setAttribute('aria-hidden', isHidden ? 'false' : 'true');
          mobileToggle.setAttribute('aria-expanded', isHidden ? 'true' : 'false');
        }
      }
    });

    // Escape key closes Express Order Drawer or Mobile Navigation Curtain
    document.addEventListener('keydown', function onKeyDown(event) {
      if (event.key === 'Escape') {
        if (engineState.isOpen) {
          closeExpressOrderDrawer();
        }
        const curtain = document.getElementById('obsidian-mobile-nav-curtain');
        if (curtain && curtain.getAttribute('aria-hidden') === 'false') {
          curtain.setAttribute('aria-hidden', 'true');
        }
      }
    });

    // Live Malaysian Mobile Phone Validation
    if (els.inputPhone && els.phoneStatus) {
      els.inputPhone.addEventListener('input', function onPhoneInput() {
        const rawVal = els.inputPhone.value.trim();
        if (!rawVal) {
          els.phoneStatus.textContent = isMs
            ? 'Digunakan semata-mata untuk penghantaran nombor tracking & pengesahan WhatsApp rahsia.'
            : 'Used strictly for encrypted WhatsApp order confirmation & courier tracking updates.';
          els.phoneStatus.style.color = '';
          return;
        }
        const check = validateMalaysiaMobileNumber(rawVal);
        if (check.valid) {
          els.phoneStatus.textContent = isMs
            ? '✓ Nombor WhatsApp Malaysia sah (' + check.formatted + ') — Sedia untuk pelepasan bungkusan rahsia.'
            : '✓ Valid Malaysia WhatsApp number (' + check.formatted + ') — Ready for discreet dispatch.';
          els.phoneStatus.style.color = '#F3E5AB';
        } else {
          els.phoneStatus.textContent = isMs
            ? 'Masukkan format Malaysia: 01X-XXXXXXX (10 atau 11 digit)'
            : 'Enter standard Malaysian format: 01X-XXXXXXX (10 or 11 digits)';
          els.phoneStatus.style.color = '#C88A32';
        }
      });
    }

    // Live Malaysia State Courier ETA Preview
    if (els.inputState && els.stateEtaText) {
      els.inputState.addEventListener('change', function onStateChange() {
        const selectedOption = els.inputState.selectedOptions?.[0];
        engineState.selectedState = els.inputState.value;
        const eta = selectedOption?.getAttribute('data-eta');
        if (eta) {
          els.stateEtaText.textContent = eta;
        }
      });
    }

    // Payment Method Radio Card Highlight
    const paymentRadios = document.querySelectorAll('[data-input-payment-method]');
    paymentRadios.forEach(function bindPaymentRadio(radio) {
      radio.addEventListener('change', function onPaymentChange() {
        engineState.selectedPayment = radio.value;
        const allCards = document.querySelectorAll('[data-payment-option-card]');
        allCards.forEach(function toggleCard(card) {
          const cardRadio = card.querySelector('input[type="radio"]');
          card.classList.toggle('drawer-payment-option--selected', Boolean(cardRadio && cardRadio.checked));
        });
      });
    });

    // Bind Express Order Form Submit
    if (els.form) {
      els.form.addEventListener('submit', handleExpressOrderSubmit);
    }

    syncDrawerUI();
  }

  /* --------------------------------------------------------------------------
   * 10. PUBLIC API EXPORT & DOM-READY INITIALIZATION
   * -------------------------------------------------------------------------- */
  window.OnyxmanEngine = {
    openExpressOrderDrawer,
    closeExpressOrderDrawer,
    normalizeMalaysiaPhoneE164,
    validateMalaysiaMobileNumber,
    buildMerchantReverseWhatsAppUrl,
    buildMerchantRefillCalendarUrl,
    buildDirectMerchantWhatsAppUrl,
    syncDrawerUI,
    getState: function getState() {
      return Object.assign({}, engineState);
    },
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function onReady() {
      bindGlobalInteractions();
      initSpatialScrollChoreography();
      initGoalFinderQuiz();
      initFaqAccordions();
    });
  } else {
    bindGlobalInteractions();
    initSpatialScrollChoreography();
    initGoalFinderQuiz();
    initFaqAccordions();
  }
})();
