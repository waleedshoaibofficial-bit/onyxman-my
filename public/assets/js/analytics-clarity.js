/**
 * ============================================================================
 * ONYXMAN.MY — PRIVACY-SAFE (PDPA MALAYSIA) CONVERSION ANALYTICS & CLARITY ENGINE
 * Micro-Steps: MS-188 & MS-189
 * Domain: https://onyxman.my
 * ============================================================================
 * Zero-CLS, non-blocking client-side conversion telemetry engineered for:
 * - Google Analytics 4 / Google Tag Manager (`window.dataLayer`)
 * - Microsoft Clarity Session Tagging (`window.clarity`)
 * - 100% PDPA Malaysia Privacy Compliance (zero raw PII, phone numbers, names,
 *   or street addresses are ever transmitted to analytics layers)
 * - Zero external network requests when GA4 / Clarity IDs are left blank
 *
 * Tracked High-Intent E-Commerce Micro-Conversions:
 *   1. `onyxman_drawer_open`
 *   2. `onyxman_tier_select` (1 Bottle = RM 159 / 2 Bottles = RM 318 / 3 Bottles = RM 477)
 *   3. `onyxman_state_select` (All 16 Malaysia States & Federal Territories)
 *   4. `onyxman_payment_select` (COD / FPX & DuitNow QR / Same-Day Runner)
 *   5. `onyxman_order_submit` (PDPA-sanitized e-commerce conversion payload)
 *   6. `onyxman_reverse_whatsapp_click`
 *   7. `onyxman_refill_calendar_click`
 * ============================================================================
 */

(function initOnyxmanPrivacySafeAnalytics() {
  'use strict';

  /* --------------------------------------------------------------------------
   * 1. OFFICIAL PRICING & PRODUCT METADATA CONSTANTS (MYR)
   * -------------------------------------------------------------------------- */
  const TIER_CATALOG = {
    1: {
      bottles: 1,
      unitPrice: 159.0,
      value: 159.0,
      priceSchema: '159.00',
      priceFormatted: 'RM 159',
      tierCode: 'TIER_1_BOTTLE_RM159',
    },
    2: {
      bottles: 2,
      unitPrice: 159.0,
      value: 318.0,
      priceSchema: '318.00',
      priceFormatted: 'RM 318',
      tierCode: 'TIER_2_BOTTLES_RM318',
    },
    3: {
      bottles: 3,
      unitPrice: 159.0,
      value: 477.0,
      priceSchema: '477.00',
      priceFormatted: 'RM 477',
      tierCode: 'TIER_3_BOTTLES_RM477',
    },
  };

  const PRODUCT_CATALOG = {
    horsemen: {
      id: 'horsemen',
      sku: 'ONYX-HM-20',
      name: 'Horsemen',
      capsules: 20,
      refillDay: 18,
      unitPrice: 159.0,
    },
    'hammer-of-thor': {
      id: 'hammer-of-thor',
      sku: 'ONYX-HT-20',
      name: 'Hammer of Thor',
      capsules: 20,
      refillDay: 18,
      unitPrice: 159.0,
    },
    'Sensitivity-of-thor': {
      id: 'hammer-of-thor',
      sku: 'ONYX-HT-20',
      name: 'Hammer of Thor',
      capsules: 20,
      refillDay: 18,
      unitPrice: 159.0,
    },
    'grow-xl': {
      id: 'grow-xl',
      sku: 'ONYX-GX-30',
      name: 'Grow XL',
      capsules: 30,
      refillDay: 25,
      unitPrice: 159.0,
    },
    'magnum-pump-xr': {
      id: 'magnum-pump-xr',
      sku: 'ONYX-MP-30',
      name: 'Magnum Pump XR',
      capsules: 30,
      refillDay: 25,
      unitPrice: 159.0,
    },
  };

  const KLANG_VALLEY_STATES = {
    'Kuala Lumpur': 'MY-KV-SAMEDAY',
    Selangor: 'MY-KV-SAMEDAY',
    Putrajaya: 'MY-KV-SAMEDAY',
  };

  const EAST_MALAYSIA_STATES = {
    Sabah: 'MY-EAST',
    Sarawak: 'MY-EAST',
    Labuan: 'MY-EAST',
  };

  /* --------------------------------------------------------------------------
   * 2. NON-BLOCKING DATA LAYER & CLARITY QUEUE INITIALIZATION
   * -------------------------------------------------------------------------- */
  window.dataLayer = window.dataLayer || [];

  const runtimeCfg = window.ONYXMAN_CONFIG || {};
  const analyticsCfg = runtimeCfg.analytics || {};
  const ga4MeasurementId = String(analyticsCfg.ga4MeasurementId || '').trim();
  const clarityProjectId = String(analyticsCfg.clarityProjectId || '').trim();

  const sessionEventBuffer = [];
  const MAX_BUFFER_SIZE = 100;

  /**
   * Schedules non-critical telemetry work off the main rendering path (`CLS = 0.00`).
   * @param {Function} callback
   */
  function scheduleNonBlocking(callback) {
    if (typeof window.requestIdleCallback === 'function') {
      window.requestIdleCallback(
        function runIdle() {
          try {
            callback();
          } catch {
            // Silent telemetry isolation
          }
        },
        { timeout: 1200 }
      );
    } else {
      setTimeout(function runDeferred() {
        try {
          callback();
        } catch {
          // Silent telemetry isolation
        }
      }, 0);
    }
  }

  /**
   * Optional deferred loader for GA4 / Clarity ONLY when non-empty IDs are explicitly configured.
   * When IDs are blank (default privacy-safe mode), zero external network requests are fired.
   */
  function initOptionalExternalCollectors() {
    if (ga4MeasurementId && /^G-[A-Z0-9]+$/i.test(ga4MeasurementId)) {
      scheduleNonBlocking(function injectGa4Script() {
        if (document.querySelector('script[data-onyxman-ga4]')) return;
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(ga4MeasurementId);
        script.setAttribute('data-onyxman-ga4', ga4MeasurementId);
        document.head.appendChild(script);

        window.dataLayer.push(['js', new Date()]);
        window.dataLayer.push([
          'config',
          ga4MeasurementId,
          {
            anonymize_ip: true,
            allow_google_signals: false,
            allow_ad_personalization_signals: false,
            currency: 'MYR',
          },
        ]);
      });
    }

    if (clarityProjectId && /^[a-z0-9]{6,20}$/i.test(clarityProjectId)) {
      scheduleNonBlocking(function injectClarityScript() {
        if (document.querySelector('script[data-onyxman-clarity]')) return;
        window.clarity =
          window.clarity ||
          function clarityQueue() {
            (window.clarity.q = window.clarity.q || []).push(arguments);
          };
        const script = document.createElement('script');
        script.async = true;
        script.src = 'https://www.clarity.ms/tag/' + encodeURIComponent(clarityProjectId);
        script.setAttribute('data-onyxman-clarity', clarityProjectId);
        document.head.appendChild(script);
      });
    }
  }

  /* --------------------------------------------------------------------------
   * 3. PDPA-SAFE SANITIZATION & UNIFIED EVENT DISPATCHER
   * -------------------------------------------------------------------------- */
  const FORBIDDEN_PII_KEYS = new Set([
    'customerName',
    'customer_name',
    'customerPhone',
    'customerPhoneMY',
    'customer_phone_malaysia',
    'customer_phone_e164',
    'normalizedPhoneE164',
    'customerEmail',
    'customer_email',
    'deliveryAddress',
    'delivery_address',
    'address',
    'phone',
    'email',
    'name',
  ]);

  /**
   * Strips any accidental PII keys and normalizes telemetry payload under PDPA Malaysia standards.
   * @param {Record<string, any>} rawPayload
   * @returns {Record<string, any>}
   */
  function sanitizePdpaPayload(rawPayload) {
    const clean = {};
    if (!rawPayload || typeof rawPayload !== 'object') {
      return clean;
    }

    const keys = Object.keys(rawPayload);
    for (let i = 0; i < keys.length; i += 1) {
      const key = keys[i];
      if (FORBIDDEN_PII_KEYS.has(key)) {
        continue;
      }
      const val = rawPayload[key];
      if (typeof val === 'string') {
        // Mask any accidental Malaysian phone pattern or email pattern inside free-text strings
        clean[key] = val
          .replace(/\+?601\d{8,9}/g, '[REDACTED_MY_PHONE]')
          .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, '[REDACTED_EMAIL]');
      } else {
        clean[key] = val;
      }
    }
    return clean;
  }

  /**
   * Resolves current active product and bottle tier from DOM or OnyxmanEngine state.
   * @returns {{ product: Object, tier: Object, stateName: string, paymentMethod: string, locale: string }}
   */
  function getActiveCommerceContext() {
    const engineState =
      window.OnyxmanEngine && typeof window.OnyxmanEngine.getState === 'function'
        ? window.OnyxmanEngine.getState()
        : null;

    const fieldProd = document.getElementById('onyxman-field-product-id');
    const fieldBottles = document.getElementById('onyxman-field-bottles');
    const inputState = document.getElementById('onyxman-input-state');
    const checkedPayment = document.querySelector('input[name="paymentMethod"]:checked');

    const rawProductId =
      (engineState && engineState.selectedProductId) ||
      (fieldProd && fieldProd.value) ||
      document.body?.getAttribute('data-default-product') ||
      'horsemen';

    const rawBottles = Number(
      (engineState && engineState.selectedBottles) || (fieldBottles && fieldBottles.value) || 1
    );

    const product = PRODUCT_CATALOG[rawProductId] || PRODUCT_CATALOG.horsemen;
    const tier = TIER_CATALOG[rawBottles] || TIER_CATALOG[1];
    const stateName =
      (inputState && inputState.value) || (engineState && engineState.selectedState) || 'Kuala Lumpur';
    const paymentMethod =
      (checkedPayment && checkedPayment.value) ||
      (engineState && engineState.selectedPayment) ||
      'FPX_DUITNOW_MY';
    const locale = document.documentElement.lang === 'ms-MY' ? 'ms-MY' : 'en-MY';

    return {
      product,
      tier,
      stateName,
      paymentMethod,
      locale,
    };
  }

  /**
   * Resolves shipping zone code for a given Malaysia state.
   * @param {string} stateName
   * @returns {string}
   */
  function resolveShippingZone(stateName) {
    if (KLANG_VALLEY_STATES[stateName]) {
      return KLANG_VALLEY_STATES[stateName];
    }
    if (EAST_MALAYSIA_STATES[stateName]) {
      return EAST_MALAYSIA_STATES[stateName];
    }
    return 'MY-WEST';
  }

  /**
   * Dispatches a PDPA-compliant conversion event to `window.dataLayer` and `window.clarity`.
   *
   * @param {string} eventName
   * @param {Record<string, any>} [customParams]
   * @returns {Record<string, any>} The dispatched event envelope
   */
  function dispatchConversionEvent(eventName, customParams) {
    const context = getActiveCommerceContext();
    const sanitizedParams = sanitizePdpaPayload(customParams || {});

    const envelope = Object.assign(
      {
        event: eventName,
        brand: 'Onyxman',
        domain: 'https://onyxman.my',
        locale: context.locale,
        page_path: window.location.pathname || '/',
        currency: 'MYR',
        product_id: context.product.id,
        product_sku: context.product.sku,
        product_name: context.product.name,
        capsules_per_bottle: context.product.capsules,
        refill_day_cycle: context.product.refillDay,
        bottle_quantity: context.tier.bottles,
        tier_code: context.tier.tierCode,
        value: context.tier.value,
        price_formatted: context.tier.priceFormatted,
        price_schema: context.tier.priceSchema,
        malaysia_state: context.stateName,
        shipping_zone: resolveShippingZone(context.stateName),
        payment_method: context.paymentMethod,
        pdpa_compliant: true,
        timestamp_iso: new Date().toISOString(),
      },
      sanitizedParams
    );

    if (sessionEventBuffer.length >= MAX_BUFFER_SIZE) {
      sessionEventBuffer.shift();
    }
    sessionEventBuffer.push(envelope);

    scheduleNonBlocking(function pushToCollectors() {
      // 1. Push structured event to GA4 / GTM dataLayer
      if (Array.isArray(window.dataLayer)) {
        window.dataLayer.push(envelope);
      }

      // 2. Push custom event & session tags to Microsoft Clarity if present on window
      if (typeof window.clarity === 'function') {
        try {
          window.clarity('event', eventName);
          window.clarity('set', 'onyxman_last_event', eventName);
          window.clarity('set', 'onyxman_product', String(envelope.product_id));
          window.clarity('set', 'onyxman_tier_myr', String(envelope.price_formatted));
          window.clarity('set', 'onyxman_state', String(envelope.malaysia_state));
          window.clarity('set', 'onyxman_payment', String(envelope.payment_method));
        } catch {
          // Ignore Clarity errors when running in headless or ad-blocked browsers
        }
      }
    });

    return envelope;
  }

  /* --------------------------------------------------------------------------
   * 4. SPECIFIC HIGH-INTENT MICRO-CONVERSION TRACKERS (MS-188 & MS-189)
   * -------------------------------------------------------------------------- */

  /**
   * 1. `onyxman_drawer_open`
   */
  function trackDrawerOpen(productSlug, bottleQty, triggerSource) {
    const normalizedId =
      productSlug === 'Sensitivity-of-thor' ? 'hammer-of-thor' : productSlug || 'horsemen';
    const prod = PRODUCT_CATALOG[normalizedId] || getActiveCommerceContext().product;
    const tier = TIER_CATALOG[Number(bottleQty)] || getActiveCommerceContext().tier;

    return dispatchConversionEvent('onyxman_drawer_open', {
      product_id: prod.id,
      product_sku: prod.sku,
      product_name: prod.name,
      bottle_quantity: tier.bottles,
      value: tier.value,
      price_formatted: tier.priceFormatted,
      price_schema: tier.priceSchema,
      trigger_source: triggerSource || 'cta_button',
    });
  }

  /**
   * 2. `onyxman_tier_select` (1 Bottle = RM 159 | 2 Bottles = RM 318 | 3 Bottles = RM 477)
   */
  function trackTierSelect(bottleQty) {
    const tier = TIER_CATALOG[Number(bottleQty)] || TIER_CATALOG[1];
    const context = getActiveCommerceContext();
    const freeEastMalaysiaShipping = tier.bottles >= 2;

    return dispatchConversionEvent('onyxman_tier_select', {
      bottle_quantity: tier.bottles,
      tier_code: tier.tierCode,
      unit_price: 159.0,
      value: tier.value,
      price_formatted: tier.priceFormatted,
      price_schema: tier.priceSchema,
      total_capsules: context.product.capsules * tier.bottles,
      free_shipping_west_my: true,
      free_shipping_east_my: freeEastMalaysiaShipping,
    });
  }

  /**
   * 3. `onyxman_state_select` (All 16 Malaysia States & Federal Territories)
   */
  function trackStateSelect(stateName, etaDescription) {
    const cleanState = String(stateName || 'Kuala Lumpur').trim();
    const zone = resolveShippingZone(cleanState);
    const sameDayEligible = zone === 'MY-KV-SAMEDAY';

    return dispatchConversionEvent('onyxman_state_select', {
      malaysia_state: cleanState,
      shipping_zone: zone,
      same_day_runner_eligible: sameDayEligible,
      courier_eta_preview: String(etaDescription || ''),
    });
  }

  /**
   * 4. `onyxman_payment_select` (COD / FPX & DuitNow QR / Same-Day Runner)
   */
  function trackPaymentSelect(paymentCode) {
    const rawCode = String(paymentCode || 'FPX_DUITNOW_MY')
      .trim()
      .toUpperCase();
    let normalizedCategory = 'FPX_DUITNOW';
    if (rawCode.includes('COD')) {
      normalizedCategory = 'COD';
    } else if (rawCode.includes('SAME') || rawCode.includes('RUNNER')) {
      normalizedCategory = 'SAME_DAY';
    }

    return dispatchConversionEvent('onyxman_payment_select', {
      payment_method: rawCode,
      payment_category: normalizedCategory,
    });
  }

  /**
   * 5. `onyxman_order_submit` (PDPA-safe order submission event)
   */
  function trackOrderSubmit(extraOrderMeta) {
    const context = getActiveCommerceContext();
    const receiptIdEl = document.querySelector('[data-receipt-order-id]');
    const orderReferenceId =
      (extraOrderMeta && extraOrderMeta.order_reference_id) ||
      (receiptIdEl && receiptIdEl.textContent ? receiptIdEl.textContent.trim() : '') ||
      'ONYX-MY-PENDING';

    const bridgeMode =
      runtimeCfg.whatsappNumberE164 && String(runtimeCfg.whatsappNumberE164).trim()
        ? 'direct-whatsapp-concierge'
        : 'express-email-drawer';

    return dispatchConversionEvent('onyxman_order_submit', {
      order_reference_id: orderReferenceId,
      bridge_mode: bridgeMode,
      product_id: context.product.id,
      product_sku: context.product.sku,
      product_name: context.product.name,
      bottle_quantity: context.tier.bottles,
      value: context.tier.value,
      price_formatted: context.tier.priceFormatted,
      price_schema: context.tier.priceSchema,
      malaysia_state: context.stateName,
      shipping_zone: resolveShippingZone(context.stateName),
      payment_method: context.paymentMethod,
      ecommerce: {
        currency: 'MYR',
        value: context.tier.value,
        transaction_id: orderReferenceId,
        items: [
          {
            item_id: context.product.sku,
            item_name: context.product.name,
            item_brand: 'Onyxman',
            item_category: 'Mens Botanical Vitality Supplement',
            price: 159.0,
            quantity: context.tier.bottles,
          },
        ],
      },
    });
  }

  /**
   * 6. `onyxman_reverse_whatsapp_click`
   */
  function trackReverseWhatsAppClick(targetHref, linkContext) {
    const isDirectConcierge = Boolean(
      runtimeCfg.whatsappNumberE164 && String(runtimeCfg.whatsappNumberE164).trim()
    );
    return dispatchConversionEvent('onyxman_reverse_whatsapp_click', {
      whatsapp_bridge_mode: isDirectConcierge ? 'direct-whatsapp-concierge' : 'reverse-whatsapp-protocol',
      link_context: linkContext || 'order_confirmation_receipt',
      has_valid_wa_link: String(targetHref || '').includes('wa.me/'),
    });
  }

  /**
   * 7. `onyxman_refill_calendar_click`
   */
  function trackRefillCalendarClick(targetHref) {
    const context = getActiveCommerceContext();
    const totalDaysUntilRefill = context.product.refillDay * context.tier.bottles;

    return dispatchConversionEvent('onyxman_refill_calendar_click', {
      refill_day_per_bottle: context.product.refillDay,
      total_days_until_refill: totalDaysUntilRefill,
      capsules_per_bottle: context.product.capsules,
      bottle_quantity: context.tier.bottles,
      calendar_provider: String(targetHref || '').includes('calendar.google.com')
        ? 'google_calendar'
        : 'calendar_ics',
    });
  }

  /* --------------------------------------------------------------------------
   * 5. DOM EVENT DELEGATION & MUTATION OBSERVERS
   * -------------------------------------------------------------------------- */
  function bindTelemetryListeners() {
    // 1. Click delegation for Drawer Open, Tier Select, Reverse WhatsApp, and Refill Calendar
    document.addEventListener(
      'click',
      function onDocumentClick(event) {
        const target = event.target;
        if (!(target instanceof Element)) return;

        // A. Express Order Drawer Open Trigger
        const openDrawerBtn = target.closest('[data-open-order-drawer]');
        if (openDrawerBtn) {
          const prod = openDrawerBtn.getAttribute('data-order-product');
          const qty = openDrawerBtn.getAttribute('data-order-qty');
          const source = openDrawerBtn.closest('#onyxman-sticky-mobile-bar')
            ? 'sticky_mobile_bar'
            : openDrawerBtn.closest('header')
              ? 'obsidian_header'
              : 'page_cta';
          trackDrawerOpen(prod, qty, source);
          return;
        }

        // B. Tier Select Trigger (1 / 2 / 3 Bottles — RM 159 / RM 318 / RM 477)
        const tierBtn = target.closest('[data-drawer-select-qty]');
        if (tierBtn) {
          const qty = Number(tierBtn.getAttribute('data-drawer-select-qty') || 1);
          trackTierSelect(qty);
          return;
        }

        // C. Reverse / Direct WhatsApp Click Trigger
        const waLink = target.closest('[data-receipt-direct-whatsapp-link], a[href*="wa.me/"]');
        if (waLink) {
          const href = waLink.getAttribute('href') || '';
          const contextLabel = waLink.hasAttribute('data-receipt-direct-whatsapp-link')
            ? 'receipt_direct_whatsapp'
            : 'inline_whatsapp_link';
          trackReverseWhatsAppClick(href, contextLabel);
          return;
        }

        // D. Google Calendar Refill Reminder Click Trigger
        const calLink = target.closest(
          '[data-receipt-calendar-link], a[href*="calendar.google.com/calendar/render"]'
        );
        if (calLink) {
          const href = calLink.getAttribute('href') || '';
          trackRefillCalendarClick(href);
        }
      },
      { passive: true }
    );

    // 2. Change delegation for Malaysia State Selector & Payment Method Radio Buttons
    document.addEventListener(
      'change',
      function onDocumentChange(event) {
        const target = event.target;
        if (!(target instanceof Element)) return;

        // A. Malaysia State Select (#onyxman-input-state / [data-input-malaysia-state])
        if (target.matches('#onyxman-input-state, [data-input-malaysia-state]')) {
          const selectEl = /** @type {HTMLSelectElement} */ (target);
          const selectedOpt = selectEl.selectedOptions && selectEl.selectedOptions[0];
          const stateVal = selectEl.value || 'Kuala Lumpur';
          const etaText = selectedOpt ? selectedOpt.getAttribute('data-eta') || '' : '';
          trackStateSelect(stateVal, etaText);

          // If Kuala Lumpur, Selangor, or Putrajaya is chosen, also check if Same-Day delivery context applies
          if (KLANG_VALLEY_STATES[stateVal]) {
            trackPaymentSelect('SAME_DAY_KV_ELIGIBLE');
          }
          return;
        }

        // B. Payment Method Select (FPX_DUITNOW_MY / COD_MY)
        if (target.matches('[data-input-payment-method], input[name="paymentMethod"]')) {
          const inputEl = /** @type {HTMLInputElement} */ (target);
          if (inputEl.checked) {
            trackPaymentSelect(inputEl.value);
          }
        }
      },
      { passive: true }
    );

    // 3. Observe Confirmation View (`#onyxman-order-confirmation-view`) so `onyxman_order_submit`
    // fires only when a valid order passes Malaysian mobile & address validation
    const confirmationView = document.getElementById('onyxman-order-confirmation-view');
    if (confirmationView && typeof MutationObserver === 'function') {
      let lastTrackedOrderId = '';
      const observer = new MutationObserver(function onConfirmViewMutate() {
        const isVisible = !confirmationView.hasAttribute('hidden');
        if (isVisible) {
          const receiptIdEl = document.querySelector('[data-receipt-order-id]');
          const currentOrderId =
            receiptIdEl && receiptIdEl.textContent ? receiptIdEl.textContent.trim() : '';
          if (currentOrderId && currentOrderId !== lastTrackedOrderId) {
            lastTrackedOrderId = currentOrderId;
            trackOrderSubmit({ order_reference_id: currentOrderId });
          }
        }
      });
      observer.observe(confirmationView, {
        attributes: true,
        attributeFilter: ['hidden'],
      });
    }
  }

  /* --------------------------------------------------------------------------
   * 6. PUBLIC TELEMETRY API (`window.OnyxmanAnalytics`)
   * -------------------------------------------------------------------------- */
  window.OnyxmanAnalytics = {
    version: '1.0.0',
    pdpaCompliant: true,
    supportedEvents: [
      'onyxman_drawer_open',
      'onyxman_tier_select',
      'onyxman_state_select',
      'onyxman_payment_select',
      'onyxman_order_submit',
      'onyxman_reverse_whatsapp_click',
      'onyxman_refill_calendar_click',
    ],
    trackEvent: dispatchConversionEvent,
    trackDrawerOpen,
    trackTierSelect,
    trackStateSelect,
    trackPaymentSelect,
    trackOrderSubmit,
    trackReverseWhatsAppClick,
    trackRefillCalendarClick,
    sanitizePdpaPayload,
    getEventLog: function getEventLog() {
      return sessionEventBuffer.slice();
    },
    clearEventLog: function clearEventLog() {
      sessionEventBuffer.length = 0;
    },
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function onReady() {
      initOptionalExternalCollectors();
      bindTelemetryListeners();
    });
  } else {
    initOptionalExternalCollectors();
    bindTelemetryListeners();
  }
})();
