/**
 * ONYXMAN.MY — DUAL-MODE ORDER & REVERSE WHATSAPP BRIDGE ENGINE (MS-007)
 * Primary Merchant Notification Email: waleedshoaibofficial@gmail.com
 * Official Brand Email Aliases: sales@onyxmen.my, info@onyxmen.my
 * Days 1–2 Active Mode: "express-email-drawer" (FormSubmit.co AJAX + Web3Forms Failover)
 *   - Normalizes Malaysian buyer phone (01X -> 601X)
 *   - Generates 1-Click Reverse WhatsApp URL for merchant (https://wa.me/601XXXXXXXX?text=...)
 *   - Generates 1-Click Google Calendar Refill Reminder (Day 18 for 20-cap / Day 25 for 30-cap)
 * Day 3+ Direct Mode: Automatically routes directly to https://wa.me/<whatsappNumberE164> once populated.
 */

import type { BottleTierCount } from './pricing.js';
import { OFFICIAL_TIER_TOTALS } from './pricing.js';

export type OnyxmanProductId =
  | 'horsemen'
  | 'hammer-of-thor'
  | 'grow-xl'
  | 'magnum-pump-xr';

export interface DiscreetOrderInput {
  orderReference?: string;
  customerName: string;
  customerPhoneMY: string;
  customerEmail?: string;
  productId: OnyxmanProductId;
  productName: string;
  capsuleCount: 20 | 30;
  bottles: BottleTierCount;
  malaysiaState: string;
  deliveryAddress: string;
  paymentMethod: 'FPX_DUITNOW_MY' | 'COD_MY';
  discreetNotes?: string;
  orderTimestampISO?: string;
}

export interface OrderBridgePayload {
  orderReference: string;
  activeBridgeMode: 'express-email-drawer' | 'direct-whatsapp-concierge';
  primaryNotificationEmail: 'waleedshoaibofficial@gmail.com';
  salesAliasEmail: 'sales@onyxmen.my';
  infoAliasEmail: 'info@onyxmen.my';
  normalizedBuyerPhoneE164: string;
  merchantReverseWhatsAppUrl: string;
  directMerchantWhatsAppUrl: string | null;
  refillDayOffset: 18 | 25;
  googleCalendarRefillUrl: string;
  formSubmitEndpoint: string;
  web3FormsEndpoint: string;
  emailPayload: Record<string, string>;
}

export const MERCHANT_PRIMARY_EMAIL = 'waleedshoaibofficial@gmail.com' as const;
export const BRAND_SALES_EMAIL = 'sales@onyxmen.my' as const;
export const BRAND_INFO_EMAIL = 'info@onyxmen.my' as const;
export const FORMSUBMIT_AJAX_ENDPOINT =
  'https://formsubmit.co/ajax/waleedshoaibofficial@gmail.com' as const;
export const WEB3FORMS_API_ENDPOINT = 'https://api.web3forms.com/submit' as const;

/**
 * Product capsule counts & refill reminder day offsets:
 * - Horsemen (20 capsules) -> Day 18 Refill Reminder
 * - Hammer of Thor (20 capsules) -> Day 18 Refill Reminder
 * - Grow XL (30 capsules) -> Day 25 Refill Reminder
 * - Magnum Pump XR (30 capsules) -> Day 25 Refill Reminder
 */
export const PRODUCT_CAPSULE_SPECS: Record<
  OnyxmanProductId,
  { name: string; capsulesPerBottle: 20 | 30; refillDayOffset: 18 | 25 }
> = {
  horsemen: {
    name: 'Horsemen',
    capsulesPerBottle: 20,
    refillDayOffset: 18,
  },
  'hammer-of-thor': {
    name: 'Hammer of Thor',
    capsulesPerBottle: 20,
    refillDayOffset: 18,
  },
  'grow-xl': {
    name: 'Grow XL',
    capsulesPerBottle: 30,
    refillDayOffset: 25,
  },
  'magnum-pump-xr': {
    name: 'Magnum Pump XR',
    capsulesPerBottle: 30,
    refillDayOffset: 25,
  },
};

/**
 * Normalizes any Malaysian mobile or landline number into strict E.164 digits without '+'
 * Examples:
 * - "012-345 6789" -> "60123456789"
 * - "+60 11-2345 6789" -> "601123456789"
 * - "178899001" -> "60178899001"
 */
export function normalizeMalaysiaPhoneE164(rawPhone: string): string {
  const digitsOnly = rawPhone.replace(/\D+/g, '');
  if (!digitsOnly) {
    return '60100000000';
  }
  if (digitsOnly.startsWith('60')) {
    return digitsOnly;
  }
  if (digitsOnly.startsWith('0')) {
    return `60${digitsOnly.slice(1)}`;
  }
  if (digitsOnly.startsWith('1')) {
    return `60${digitsOnly}`;
  }
  return digitsOnly;
}

/**
 * Builds the 1-Click Reverse WhatsApp URL embedded in the merchant's order notification email
 * so the merchant can tap once on mobile/desktop to message the customer on WhatsApp (`https://wa.me/601XXXXXXXX?text=...`).
 */
export function buildMerchantReverseWhatsAppUrl(
  input: DiscreetOrderInput,
  orderRef: string,
  normalizedBuyerPhone: string
): string {
  const tierPrice = OFFICIAL_TIER_TOTALS[input.bottles].display;
  const paymentLabel =
    input.paymentMethod === 'FPX_DUITNOW_MY'
      ? 'FPX / DuitNow Instant QR'
      : 'Cash on Delivery (COD Malaysia)';

  const messageLines = [
    `Salam / Hello ${input.customerName},`,
    `This is the Onyxman Malaysia Private Concierge Desk (https://www.onyxmen.my | ${BRAND_SALES_EMAIL}).`,
    ``,
    `We have received your discreet order [${orderRef}]:`,
    `• Formulation: ${input.productName} (${input.bottles} Bottle${input.bottles > 1 ? 's' : ''})`,
    `• Total Amount: ${tierPrice} (MYR)`,
    `• Settlement: ${paymentLabel}`,
    `• State: ${input.malaysiaState}`,
    ``,
    `Your unmarked matte parcel is queued for priority dispatch. Reply YES to confirm your delivery address: ${input.deliveryAddress}`,
  ];

  const encodedText = encodeURIComponent(messageLines.join('\n'));
  return `https://wa.me/${normalizedBuyerPhone}?text=${encodedText}`;
}

/**
 * Builds the Direct Buyer-to-Merchant WhatsApp URL when `whatsappNumberE164` is configured (Day 3+).
 */
export function buildDirectBuyerToMerchantWhatsAppUrl(
  merchantWhatsAppE164: string,
  input: DiscreetOrderInput,
  orderRef: string
): string | null {
  const cleanMerchant = merchantWhatsAppE164.replace(/\D+/g, '');
  if (!cleanMerchant) {
    return null;
  }

  const tierPrice = OFFICIAL_TIER_TOTALS[input.bottles].display;
  const buyerLines = [
    `Hello Onyxman Malaysia Concierge, I would like to confirm my discreet order [${orderRef}]:`,
    `• Product: ${input.productName}`,
    `• Quantity: ${input.bottles} Bottle(s) — ${tierPrice}`,
    `• Name: ${input.customerName}`,
    `• Phone: ${input.customerPhoneMY}`,
    `• State: ${input.malaysiaState}`,
    `• Address: ${input.deliveryAddress}`,
    `• Payment: ${input.paymentMethod === 'FPX_DUITNOW_MY' ? 'FPX / DuitNow QR' : 'COD Malaysia'}`,
  ];

  return `https://wa.me/${cleanMerchant}?text=${encodeURIComponent(buyerLines.join('\n'))}`;
}

/**
 * Formats a Date object as YYYYMMDDTHHMMSSZ for Google Calendar template URLs.
 */
function formatGoogleCalendarDateUTC(date: Date): string {
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z');
}

/**
 * Builds a 1-Click Google Calendar Refill Reminder URL:
 * - 20-capsule bottles (Horsemen & Hammer of Thor): Day 18 per bottle
 * - 30-capsule bottles (Grow XL & Magnum Pump XR): Day 25 per bottle
 */
export function buildGoogleCalendarRefillUrl(
  input: DiscreetOrderInput,
  orderRef: string,
  normalizedBuyerPhone: string
): { refillDayOffset: 18 | 25; calendarUrl: string } {
  const spec = PRODUCT_CAPSULE_SPECS[input.productId];
  const baseRefillDay = spec.refillDayOffset;
  const totalDaysUntilRefill = baseRefillDay * input.bottles;

  const baseDate = input.orderTimestampISO ? new Date(input.orderTimestampISO) : new Date();
  const reminderStart = new Date(
    baseDate.getTime() + totalDaysUntilRefill * 24 * 60 * 60 * 1000
  );
  reminderStart.setUTCHours(2, 0, 0, 0); // 10:00 AM MYT (UTC+8)
  const reminderEnd = new Date(reminderStart.getTime() + 45 * 60 * 1000);

  const eventTitle = `[Onyxman Refill Follow-Up] ${input.customerName} — ${input.productName} (Day-${baseRefillDay} Protocol)`;
  const refillWhatsAppPrompt = `https://wa.me/${normalizedBuyerPhone}?text=${encodeURIComponent(
    `Salam / Hello ${input.customerName}, this is the Onyxman Malaysia Concierge (${BRAND_SALES_EMAIL}). You are approaching Day ${totalDaysUntilRefill} of your ${input.productName} cycle. Would you like us to dispatch a fresh discreet refill bottle (RM 159) or 2-bottle reserve (RM 286 ? 10% OFF vs RM 318)?`
  )}`;

  const eventDetails = [
    `Onyxman Malaysia VIP Refill Follow-Up (${orderRef})`,
    `Customer: ${input.customerName}`,
    `Phone (MY): +${normalizedBuyerPhone}`,
    `Formulation: ${input.productName} (${spec.capsulesPerBottle} Capsules/Bottle x ${input.bottles})`,
    `1-Click Refill WhatsApp Link: ${refillWhatsAppPrompt}`,
    `Merchant Desk: ${MERCHANT_PRIMARY_EMAIL} | ${BRAND_SALES_EMAIL}`,
  ].join('\n');

  const datesParam = `${formatGoogleCalendarDateUTC(reminderStart)}/${formatGoogleCalendarDateUTC(reminderEnd)}`;
  const calendarUrl =
    `https://calendar.google.com/calendar/render?action=TEMPLATE` +
    `&text=${encodeURIComponent(eventTitle)}` +
    `&dates=${encodeURIComponent(datesParam)}` +
    `&details=${encodeURIComponent(eventDetails)}` +
    `&location=${encodeURIComponent('Kuala Lumpur, Malaysia (https://www.onyxmen.my)')}`;

  return {
    refillDayOffset: baseRefillDay,
    calendarUrl,
  };
}

/**
 * Generates the complete Dual-Mode Order Bridge payload for FormSubmit.co AJAX + Web3Forms failover
 * targeting `waleedshoaibofficial@gmail.com` and official aliases `sales@onyxmen.my` / `info@onyxmen.my`.
 */
export function buildOrderBridgePayload(
  input: DiscreetOrderInput,
  merchantWhatsAppE164 = ''
): OrderBridgePayload {
  const orderReference =
    input.orderReference ??
    `ONYX-MY-${Date.now().toString(36).toUpperCase()}`;

  const normalizedBuyerPhoneE164 = normalizeMalaysiaPhoneE164(input.customerPhoneMY);
  const merchantReverseWhatsAppUrl = buildMerchantReverseWhatsAppUrl(
    input,
    orderReference,
    normalizedBuyerPhoneE164
  );
  const directMerchantWhatsAppUrl = buildDirectBuyerToMerchantWhatsAppUrl(
    merchantWhatsAppE164,
    input,
    orderReference
  );
  const { refillDayOffset, calendarUrl } = buildGoogleCalendarRefillUrl(
    input,
    orderReference,
    normalizedBuyerPhoneE164
  );

  const tierInfo = OFFICIAL_TIER_TOTALS[input.bottles];
  const activeBridgeMode =
    merchantWhatsAppE164.trim().length > 0
      ? 'direct-whatsapp-concierge'
      : 'express-email-drawer';

  const emailPayload: Record<string, string> = {
    _subject: `[ONYXMAN.MY ORDER ${orderReference}] ${input.productName} (${input.bottles}x = ${tierInfo.display}) — ${input.customerName} (${input.malaysiaState})`,
    _template: 'table',
    _captcha: 'false',
    _replyto: input.customerEmail || BRAND_SALES_EMAIL,
    order_reference: orderReference,
    brand_domain: 'https://www.onyxmen.my',
    merchant_notification_inbox: MERCHANT_PRIMARY_EMAIL,
    official_brand_aliases: `${BRAND_SALES_EMAIL} | ${BRAND_INFO_EMAIL}`,
    customer_name: input.customerName,
    customer_phone_raw: input.customerPhoneMY,
    customer_phone_e164: `+${normalizedBuyerPhoneE164}`,
    customer_email: input.customerEmail || 'Not provided (WhatsApp priority)',
    product_selected: `${input.productName} (${PRODUCT_CAPSULE_SPECS[input.productId].capsulesPerBottle} Capsules)`,
    bottle_tier_quantity: `${input.bottles} Bottle(s)`,
    order_total_myr: `${tierInfo.display} (${tierInfo.schema} MYR)`,
    payment_method:
      input.paymentMethod === 'FPX_DUITNOW_MY'
        ? 'FPX Online Banking / DuitNow Instant QR'
        : 'Cash on Delivery (COD Malaysia)',
    malaysia_state: input.malaysiaState,
    delivery_address: input.deliveryAddress,
    discreet_notes: input.discreetNotes || 'Standard 100% Unmarked Discreet Parcel',
    one_click_reverse_whatsapp_link: merchantReverseWhatsAppUrl,
    one_click_refill_calendar_link: calendarUrl,
    refill_protocol_schedule: `Day-${refillDayOffset} Refill Alert (${PRODUCT_CAPSULE_SPECS[input.productId].capsulesPerBottle}-Capsule Cycle)`,
  };

  return {
    orderReference,
    activeBridgeMode,
    primaryNotificationEmail: MERCHANT_PRIMARY_EMAIL,
    salesAliasEmail: BRAND_SALES_EMAIL,
    infoAliasEmail: BRAND_INFO_EMAIL,
    normalizedBuyerPhoneE164,
    merchantReverseWhatsAppUrl,
    directMerchantWhatsAppUrl,
    refillDayOffset,
    googleCalendarRefillUrl: calendarUrl,
    formSubmitEndpoint: FORMSUBMIT_AJAX_ENDPOINT,
    web3FormsEndpoint: WEB3FORMS_API_ENDPOINT,
    emailPayload,
  };
}
