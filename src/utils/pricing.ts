/**
 * ONYXMAN.MY — MALAYSIAN RINGGIT (MYR) PRICING, SHIPPING & SCHEMA.ORG ENGINE (MS-006)
 * Official Single-Bottle Price: RM 159 ("159.00", MYR)
 * Official Multi-Bottle Tiers: 1 Bottle = RM 159 | 2 Bottles = RM 318 | 3 Bottles = RM 477
 */

export type BottleTierCount = 1 | 2 | 3;

export type MalaysiaRegionZone = 'WEST_MALAYSIA' | 'EAST_MALAYSIA' | 'KLANG_VALLEY_SAMEDAY';

export interface PricingTierQuote {
  bottles: BottleTierCount;
  currencyCode: 'MYR';
  currencySymbol: 'RM';
  unitPriceMYR: number;
  subtotalMYR: number;
  shippingFeeMYR: number;
  grandTotalMYR: number;
  subtotalFormatted: string;
  shippingFormatted: string;
  grandTotalFormatted: string;
  schemaPriceString: string;
  priceValidUntil: string;
  deliveryEstimateEn: string;
  deliveryEstimateMs: string;
}

export const OFFICIAL_UNIT_PRICE_MYR = 159.0;
export const OFFICIAL_CURRENCY_CODE = 'MYR' as const;
export const OFFICIAL_CURRENCY_SYMBOL = 'RM' as const;
export const OFFICIAL_PRICE_VALID_UNTIL = '2027-12-31' as const;

export const OFFICIAL_TIER_TOTALS: Record<BottleTierCount, {
  numeric: number;
  display: string;
  schema: string;
}> = {
  1: { numeric: 159.0, display: 'RM 159', schema: '159.00' },
  2: { numeric: 318.0, display: 'RM 318', schema: '318.00' },
  3: { numeric: 477.0, display: 'RM 477', schema: '477.00' },
};

export const EAST_MALAYSIA_STATES = new Set<string>([
  'Sabah',
  'Sarawak',
  'Labuan',
  'Wilayah Persekutuan Labuan',
]);

export const KLANG_VALLEY_STATES = new Set<string>([
  'Kuala Lumpur',
  'Wilayah Persekutuan Kuala Lumpur',
  'Selangor',
  'Putrajaya',
  'Wilayah Persekutuan Putrajaya',
]);

/**
 * Formats a numeric Ringgit amount into clean display & schema strings.
 */
export function formatMYR(amount: number, includeDecimals = false): string {
  if (includeDecimals) {
    return `${OFFICIAL_CURRENCY_SYMBOL} ${amount.toFixed(2)}`;
  }
  return Number.isInteger(amount)
    ? `${OFFICIAL_CURRENCY_SYMBOL} ${amount}`
    : `${OFFICIAL_CURRENCY_SYMBOL} ${amount.toFixed(2)}`;
}

/**
 * Determines the shipping fee in MYR based on bottle tier and Malaysian destination zone.
 * - West Malaysia: Free (RM 0) for 1, 2, or 3 bottles.
 * - East Malaysia (Sabah/Sarawak/Labuan): RM 12 for 1 bottle; Free (RM 0) for 2 or 3 bottles.
 * - Same-Day Klang Valley Private Runner: RM 15 flat priority surcharge.
 */
export function calculateMalaysiaShippingMYR(
  bottles: BottleTierCount,
  zone: MalaysiaRegionZone
): {
  feeMYR: number;
  estimateEn: string;
  estimateMs: string;
} {
  if (zone === 'KLANG_VALLEY_SAMEDAY') {
    return {
      feeMYR: 15.0,
      estimateEn: 'Same-Day Discreet Runner (3–5 Hours in KL & Selangor)',
      estimateMs: 'Penghantaran Rahsia Hari Sama (3–5 Jam di KL & Selangor)',
    };
  }

  if (zone === 'EAST_MALAYSIA') {
    const feeMYR = bottles >= 2 ? 0.0 : 12.0;
    return {
      feeMYR,
      estimateEn: '2–4 Business Days (Sabah, Sarawak & Labuan Discreet Air Parcel)',
      estimateMs: '2–4 Hari Bekerja (Penghantaran Udara Rahsia Sabah, Sarawak & Labuan)',
    };
  }

  return {
    feeMYR: 0.0,
    estimateEn: '1–2 Business Days (Peninsular Malaysia Express Discreet Parcel)',
    estimateMs: '1–2 Hari Bekerja (Penghantaran Ekspres Rahsia Semenanjung Malaysia)',
  };
}

/**
 * Computes a complete quote for 1, 2, or 3 bottles including shipping and schema.org strings.
 */
export function calculateTierQuote(
  bottles: BottleTierCount,
  zone: MalaysiaRegionZone = 'WEST_MALAYSIA'
): PricingTierQuote {
  const tierSpec = OFFICIAL_TIER_TOTALS[bottles];
  const shipping = calculateMalaysiaShippingMYR(bottles, zone);
  const grandTotalMYR = tierSpec.numeric + shipping.feeMYR;

  return {
    bottles,
    currencyCode: OFFICIAL_CURRENCY_CODE,
    currencySymbol: OFFICIAL_CURRENCY_SYMBOL,
    unitPriceMYR: OFFICIAL_UNIT_PRICE_MYR,
    subtotalMYR: tierSpec.numeric,
    shippingFeeMYR: shipping.feeMYR,
    grandTotalMYR,
    subtotalFormatted: tierSpec.display,
    shippingFormatted: shipping.feeMYR === 0 ? 'FREE (RM 0)' : formatMYR(shipping.feeMYR),
    grandTotalFormatted: formatMYR(grandTotalMYR),
    schemaPriceString: tierSpec.schema,
    priceValidUntil: OFFICIAL_PRICE_VALID_UNTIL,
    deliveryEstimateEn: shipping.estimateEn,
    deliveryEstimateMs: shipping.estimateMs,
  };
}

/**
 * Generates a strict schema.org Offer or AggregateOffer JSON-LD object for any Onyxman product.
 */
export function buildProductOffersSchema(productUrl: string, sku: string): Record<string, unknown> {
  return {
    '@type': 'Offer',
    '@id': `${productUrl}#offer-single`,
    url: productUrl,
    sku,
    priceCurrency: 'MYR',
    price: '159.00',
    priceValidUntil: OFFICIAL_PRICE_VALID_UNTIL,
    itemCondition: 'https://schema.org/NewCondition',
    availability: 'https://schema.org/InStock',
    eligibleRegion: {
      '@type': 'Country',
      name: 'Malaysia',
      identifier: 'MY',
    },
    seller: {
      '@type': 'Organization',
      name: 'Onyxman',
      url: 'https://www.onyxmen.my',
      email: 'sales@onyxman.my',
    },
    shippingDetails: [
      {
        '@type': 'OfferShippingDetails',
        shippingRate: {
          '@type': 'MonetaryAmount',
          value: '0.00',
          currency: 'MYR',
        },
        shippingDestination: {
          '@type': 'DefinedRegion',
          addressCountry: 'MY',
        },
        deliveryTime: {
          '@type': 'ShippingDeliveryTime',
          handlingTime: {
            '@type': 'QuantitativeValue',
            minValue: 0,
            maxValue: 1,
            unitCode: 'DAY',
          },
          transitTime: {
            '@type': 'QuantitativeValue',
            minValue: 1,
            maxValue: 2,
            unitCode: 'DAY',
          },
        },
      },
    ],
  };
}
