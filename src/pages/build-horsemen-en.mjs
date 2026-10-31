#!/usr/bin/env node
/**
 * ONYXMAN.MY — FLAGSHIP PRODUCT BUILDER: HORSEMEN EN (MS-095 TO MS-099)
 * Generates: public/horsemen-malaysia/index.html
 *
 * Architectural Constitution (Rule #29 & Rule #30):
 * - Paradigm A: 100vw x 100vh Full-Bleed Obsidian Hero Stage with radial vignette & studio lighting
 * - Paradigm D: Pinned 50vw / 50vw Split-Screen Seamless Stage for 500mg Capsule & 6 Botanical Actives
 * - Palette: #050507 (Abyssal Obsidian), #0B0C10 (Smoked Onyx), #12141C (Velvet Charcoal),
 *            #D4AF37 (Liquid Champagne Gold), #EAE6DF (Silk Ivory)
 * - Typography: 'Cormorant Garamond', 'Syne', 'Space Grotesk'
 * - Authentic Constants:
 *   Product: Horsemen (Man Virility Enhancement Herbal Supplement — 20 Capsules x 500mg / 20 Kapsul x 500mg)
 *   SKU: ONYX-HM-20 | MPN: HM-500MG-20MY | GTIN-13: 9550000102011
 *   Canonical: https://onyxman.my/horsemen-malaysia/ (Paired BM: https://onyxman.my/ms/horsemen-malaysia/)
 *   Pricing: 1 Bottle = RM 159 (159.00 MYR), 2 Bottles = RM 318 (318.00 MYR), 3 Bottles = RM 477 (477.00 MYR)
 *   Refill Protocol: Day-18 Refill Reminder Calendar Integration (18-day active cycle)
 *   Emails: waleedshoaibofficial@gmail.com, sales@onyxman.my, info@onyxman.my
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderLuxuryShell } from '../components/LuxuryShell.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');
const OUTPUT_FILE = path.join(ROOT_DIR, 'public', 'horsemen-malaysia', 'index.html');

export const HORSEMEN_CONSTANTS = {
  slug: 'horsemen',
  name: 'Horsemen',
  subtitleEn: 'Man Virility Enhancement Herbal Supplement — 20 Capsules x 500mg',
  subtitleMs: 'Suplemen Herba Kecergasan & Stamina Lelaki — 20 Kapsul x 500mg',
  sku: 'ONYX-HM-20',
  mpn: 'HM-500MG-20MY',
  gtin13: '9550000102011',
  canonicalUrl: 'https://onyxman.my/horsemen-malaysia/',
  canonicalPath: '/horsemen-malaysia/',
  pairedMsUrl: 'https://onyxman.my/ms/horsemen-malaysia/',
  pairedMsPath: '/ms/horsemen-malaysia/',
  capsuleCount: 20,
  capsuleWeightMg: 500,
  bottleTotalMg: 10000,
  refillDay: 18,
  assets: {
    stageWebp: '/assets/products/horsemen-stage.webp',
    stagePng: '/assets/products/horsemen-stage.png',
    portraitWebp: '/assets/products/horsemen-portrait.webp',
    portraitPng: '/assets/products/horsemen-portrait.png',
    cutoutWebp: '/assets/products/horsemen-cutout.webp',
    cutoutPng: '/assets/products/horsemen-cutout.png',
  },
  emails: {
    primaryOrder: 'waleedshoaibofficial@gmail.com',
    sales: 'sales@onyxman.my',
    info: 'info@onyxman.my',
  },
};

export const HORSEMEN_FAQS = [
  {
    id: 'faq-hm-01',
    code: 'HM-FAQ-01',
    category: 'Specification & Potency',
    questionEn: 'What is the exact capsule count, milligram density, and bilingual bottle specification of authentic Horsemen in Malaysia?',
    answerEn:
      'Every authentic bottle of Horsemen distributed by Onyxman Malaysia (SKU: ONYX-HM-20, MPN: HM-500MG-20MY, GTIN-13: 9550000102011) contains exactly 20 high-density herbal capsules at 500mg per capsule (20 Capsules x 500mg / 20 Kapsul x 500mg), yielding 10,000mg (10 grams) of standardized botanical and amino-acid actives per bottle. Each 500mg capsule combines 150mg Malaysian Tongkat Ali (100:1), 100mg Black Peruvian Maca, 80mg Epimedium Sagittatum, 80mg L-Arginine HCl, 60mg Korean Red Panax Ginseng, and 30mg Tribulus Terrestris with Zinc Picolinate.',
  },
  {
    id: 'faq-hm-02',
    code: 'HM-FAQ-02',
    category: 'Pricing & Multi-Bottle Tiers',
    questionEn: 'What is the official Malaysia price for 1, 2, and 3 bottles of Horsemen on Onyxman.my?',
    answerEn:
      'Onyxman Malaysia maintains a strict, transparent single-tier pricing architecture: 1 Bottle (20 Capsules / 18-Day Active Cycle) is RM 159 (159.00 MYR) with Free Discreet Express Shipping across Peninsular Malaysia; 2 Bottles (40 Capsules / 36-Day Dual Momentum Protocol) is RM 318 (318.00 MYR) with Free Nationwide Discreet Shipping including Sabah, Sarawak, and Labuan; and 3 Bottles (60 Capsules / 54-Day Complete Apothecary Vault) is RM 477 (477.00 MYR) with Priority Discreet Dispatch and VIP Refill Concierge service.',
  },
  {
    id: 'faq-hm-03',
    code: 'HM-FAQ-03',
    category: '18-Day Active Cycle & Refill',
    questionEn: 'Why does Horsemen operate on an 18-Day Active Cycle with a Day-18 Refill Reminder if the bottle holds 20 capsules?',
    answerEn:
      'Because Horsemen contains 20 capsules (500mg each), an adult man following the daily 1-capsule conditioning protocol reaches capsule #18 on Day 18 with exactly 2 capsules (48 hours of reserve) remaining in the bottle. Triggering your automated Google Calendar or WhatsApp concierge reminder on Day 18 provides the exact 24-to-48-hour transit window required for our discreet courier to deliver your fresh bottle across Peninsular or East Malaysia before capsule #20 is taken—preventing any drop in botanical bio-saturation.',
  },
  {
    id: 'faq-hm-04',
    code: 'HM-FAQ-04',
    category: 'Dosage & Tropical Timing',
    questionEn: 'How and when should I take Horsemen in Malaysia’s tropical climate for optimal absorption?',
    answerEn:
      'Horsemen supports two precision intake modes: For Mode A (Targeted Evening Readiness), take 1 capsule (500mg) with 250ml to 300ml of warm water 45 to 60 minutes after dinner or prior to evening physical activity. For Mode B (18-to-20-Day Baseline Vitality Conditioning), take 1 capsule every evening 45 minutes after your main meal. Avoid taking the capsule immediately alongside heavy, high-fat suppers (such as late-night nasi kandar orchar kuey teow) so the 500mg gelatin capsule dissolves cleanly within 20–30 minutes, and maintain 2.5L to 3.0L of daily hydration.',
  },
  {
    id: 'faq-hm-05',
    code: 'HM-FAQ-05',
    category: 'Formulation Comparison',
    questionEn: 'How does Horsemen compare to Hammer of Thor, Grow XL, and Magnum Pump XR?',
    answerEn:
      'All four Onyxman formulations are RM 159 per bottle, but each serves a distinct physiological specialization: Horsemen (20 Capsules x 500mg, SKU ONYX-HM-20) is engineered around 150mg Malaysian Tongkat Ali 100:1 + 100mg Black Maca + 80mg Epimedium for rapid evening readiness and dual-mode stamina. Hammer of Thor (20 Veg. Capsules, SKU ONYX-HT-20) features 200mg high-saponin Tribulus Terrestris inside 100% plant-based HPMC vegetarian capsules. Grow XL (30 Capsules, SKU ONYX-GX-30) is a 30-day morning micro-circulation and Saw Palmetto + Muira Puama baseline protocol. Magnum Pump XR (30 Black Capsules, SKU ONYX-MP-30) is an extended-release L-Arginine HCl + L-Citrulline Nitric Oxide vascular formula for pre-gym and evening output.',
  },
  {
    id: 'faq-hm-06',
    code: 'HM-FAQ-06',
    category: 'Discreet Packaging & Privacy',
    questionEn: 'Is the parcel 100% unmarked when delivered to my home, condo guardhouse, or Kuala Lumpur office?',
    answerEn:
      'Yes—100% privacy is mandatory on every dispatch. Your Horsemen bottle is sealed inside a shock-absorbent protective sleeve and packed into an unbranded, opaque matte security carton. The outer courier airway bill displays the sender strictly as "OM Fulfilment Logistics (Kuala Lumpur)" and classifies contents generically as "Personal Nutritional Wellness". Neither "Horsemen", "Onyxman", nor any reference to men’s virility supplements ever appears on the parcel exterior.',
  },
  {
    id: 'faq-hm-07',
    code: 'HM-FAQ-07',
    category: 'Malaysia Delivery & Same-Day Runner',
    questionEn: 'How fast is delivery to Kuala Lumpur, Selangor, Penang, Johor Bahru, Sabah, and Sarawak?',
    answerEn:
      'For Kuala Lumpur, Selangor, and Putrajaya (Klang Valley), orders confirmed before 16:00 MYT qualify for Same-Day Discreet Private Runner delivery within 3 to 5 hours or Next-Day Express Courier. Across Peninsular Malaysia (Penang, Johor, Perak, Melaka, Negeri Sembilan, Pahang, Kedah, Kelantan, Terengganu, Perlis), discreet courier transit via NinjaVan Discreet, J&T VIP, or PosLaju Priority takes 1 to 2 business days. For East Malaysia (Sabah, Sarawak, and Labuan), discreet air-freight delivery takes 2 to 4 business days.',
  },
  {
    id: 'faq-hm-08',
    code: 'HM-FAQ-08',
    category: 'Payments & COD',
    questionEn: 'Can I pay via Cash on Delivery (COD), FPX Online Banking, or DuitNow QR?',
    answerEn:
      'Yes. You can reserve your Horsemen protocol via our 1-Click Express Discreet Order Drawer and choose Cash on Delivery (COD — pay cash or scan QR directly with the courier upon receiving your sealed parcel in hand), instant FPX Online Banking (Maybank2u, CIMB Clicks, Public Bank, RHB, Hong Leong, Bank Islam), or DuitNow Instant QR with zero surcharge.',
  },
  {
    id: 'faq-hm-09',
    code: 'HM-FAQ-09',
    category: 'Coffee, Tea & Dietary Compatibility',
    questionEn: 'Is Horsemen caffeine-free, and can I take it if I drink kopi O or teh tarik in the evening?',
    answerEn:
      'Horsemen is 100% free from caffeine and synthetic central nervous system stimulants, so it will not cause nocturnal heart racing or insomnia when taken in the evening. However, because dark roasted coffee (kopi O) and black tea (teh tarik) contain dietary tannins that can bind to botanical alkaloids in the digestive tract, we recommend spacing your Horsemen capsule at least 45 minutes apart from coffee or tea and swallowing it with plain warm water.',
  },
  {
    id: 'faq-hm-10',
    code: 'HM-FAQ-10',
    category: 'Safety, Authenticity & Support',
    questionEn: 'Who should consult a physician before taking Horsemen, and how do I contact Onyxman Malaysia support?',
    answerEn:
      'Horsemen is a botanical and amino-acid dietary supplement formulated strictly for adult men aged 18 and above. It is not a prescription pharmaceutical and is not intended to diagnose, treat, cure, or prevent any disease. Adult men with cardiovascular conditions, uncontrolled hypertension, renal or hepatic impairment, or those prescribed nitrates or antihypertensive medications should consult a licensed Malaysian medical practitioner before use. For direct authenticity verification or order assistance, contact our Kuala Lumpur desk at sales@onyxman.my, info@onyxman.my, or waleedshoaibofficial@gmail.com.',
  },
];

export function buildHorsemenSchemaGraph() {
  const pageUrl = HORSEMEN_CONSTANTS.canonicalUrl;
  const productId = `${pageUrl}#product`;
  const productGroupId = `${pageUrl}#product-group`;
  const orgId = 'https://onyxman.my/#organization';
  const websiteId = 'https://onyxman.my/#website';
  const shippingId = 'https://onyxman.my/#shipping-my';
  const returnId = 'https://onyxman.my/#return-policy';

  const images = [
    `https://onyxman.my${HORSEMEN_CONSTANTS.assets.stageWebp}`,
    `https://onyxman.my${HORSEMEN_CONSTANTS.assets.stagePng}`,
    `https://onyxman.my${HORSEMEN_CONSTANTS.assets.portraitWebp}`,
    `https://onyxman.my${HORSEMEN_CONSTANTS.assets.portraitPng}`,
    `https://onyxman.my${HORSEMEN_CONSTANTS.assets.cutoutWebp}`,
    `https://onyxman.my${HORSEMEN_CONSTANTS.assets.cutoutPng}`,
  ];

  const shippingDetailsNode = {
    '@type': 'OfferShippingDetails',
    '@id': shippingId,
    shippingRate: {
      '@type': 'MonetaryAmount',
      value: '0.00',
      currency: 'MYR',
    },
    shippingDestination: {
      '@type': 'DefinedRegion',
      addressCountry: 'MY',
      addressRegion: [
        'Kuala Lumpur',
        'Selangor',
        'Putrajaya',
        'Pulau Pinang',
        'Johor',
        'Perak',
        'Melaka',
        'Negeri Sembilan',
        'Pahang',
        'Kedah',
        'Kelantan',
        'Terengganu',
        'Perlis',
        'Sabah',
        'Sarawak',
        'Labuan',
      ],
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
        maxValue: 3,
        unitCode: 'DAY',
      },
    },
  };

  const returnPolicyNode = {
    '@type': 'MerchantReturnPolicy',
    '@id': returnId,
    applicableCountry: 'MY',
    returnPolicyCountry: 'MY',
    returnPolicyCategory: 'https://schema.org/MerchantReturnFiniteReturnWindow',
    merchantReturnDays: 14,
    returnMethod: 'https://schema.org/ReturnByMail',
    returnFees: 'https://schema.org/FreeReturn',
    itemCondition: 'https://schema.org/NewCondition',
    description:
      '14-day unopened tamper-evident seal guarantee across Malaysia. Contact sales@onyxman.my, info@onyxman.my, or waleedshoaibofficial@gmail.com for direct concierge assistance.',
  };

  const brandNode = {
    '@type': 'Brand',
    '@id': 'https://onyxman.my/#brand',
    name: 'Onyxman',
    url: 'https://onyxman.my',
  };

  const sellerNode = {
    '@type': 'Organization',
    '@id': orgId,
    name: 'Onyxman Malaysia',
    url: 'https://onyxman.my',
    email: 'sales@onyxman.my',
  };

  const variantDefinitions = [
    {
      bottles: 1,
      capsules: 20,
      price: '159.00',
      skuSuffix: '1B',
      name: 'Horsemen — 1 Bottle Single 20-Capsule Reserve (20 Capsules x 500mg · Day-18 Refill Cycle)',
    },
    {
      bottles: 2,
      capsules: 40,
      price: '318.00',
      skuSuffix: '2B',
      name: 'Horsemen — 2 Bottles Dual 40-Capsule Momentum Protocol (40 Capsules x 500mg · Free Nationwide Malaysia Shipping)',
    },
    {
      bottles: 3,
      capsules: 60,
      price: '477.00',
      skuSuffix: '3B',
      name: 'Horsemen — 3 Bottles Complete 60-Capsule Apothecary Vault (60 Capsules x 500mg · Priority VIP Concierge)',
    },
  ];

  const hasVariantNodes = variantDefinitions.map((v) => ({
    '@type': ['Product', 'DietarySupplement'],
    '@id': `${pageUrl}#variant-${v.bottles}-bottle`,
    name: v.name,
    sku: `${HORSEMEN_CONSTANTS.sku}-${v.skuSuffix}`,
    mpn: `${HORSEMEN_CONSTANTS.mpn}-${v.skuSuffix}`,
    gtin13: HORSEMEN_CONSTANTS.gtin13,
    image: images,
    brand: brandNode,
    isVariantOf: { '@id': productGroupId },
    size: `${v.bottles} ${v.bottles === 1 ? 'Bottle' : 'Bottles'} (${v.capsules} Capsules x 500mg)`,
    activeIngredient:
      'Malaysian Tongkat Ali (Eurycoma longifolia 150mg), Black Peruvian Maca (Lepidium meyenii 100mg), Epimedium Sagittatum (80mg), L-Arginine HCl (80mg), Korean Red Ginseng (Panax ginseng 60mg), Tribulus Terrestris & Zinc Picolinate (30mg)',
    targetPopulation: 'Adult Men (18+)',
    isProprietary: false,
    legalStatus: 'Botanical Dietary Supplement',
    offers: {
      '@type': 'Offer',
      '@id': `${pageUrl}#offer-${v.bottles}-bottle`,
      url: pageUrl,
      sku: `${HORSEMEN_CONSTANTS.sku}-${v.skuSuffix}`,
      price: v.price,
      priceCurrency: 'MYR',
      priceValidUntil: '2027-12-31',
      availability: 'https://schema.org/InStock',
      itemCondition: 'https://schema.org/NewCondition',
      eligibleRegion: {
        '@type': 'Country',
        name: 'Malaysia',
        identifier: 'MY',
      },
      seller: sellerNode,
      shippingDetails: shippingDetailsNode,
      hasMerchantReturnPolicy: returnPolicyNode,
    },
  }));

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'OnlineStore'],
        '@id': orgId,
        name: 'Onyxman Malaysia',
        legalName: "Onyxman Malaysia Apothecary & Men's Vitality Vault",
        url: 'https://onyxman.my',
        email: 'sales@onyxman.my',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            email: 'sales@onyxman.my',
            contactType: 'sales',
            areaServed: 'MY',
            availableLanguage: ['en-MY', 'ms-MY'],
          },
          {
            '@type': 'ContactPoint',
            email: 'info@onyxman.my',
            contactType: 'customer support',
            areaServed: 'MY',
            availableLanguage: ['en-MY', 'ms-MY'],
          },
          {
            '@type': 'ContactPoint',
            email: 'waleedshoaibofficial@gmail.com',
            contactType: 'order fulfilment desk',
            areaServed: 'MY',
            availableLanguage: ['en-MY', 'ms-MY'],
          },
        ],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: 'https://onyxman.my',
        name: 'Onyxman Malaysia',
        inLanguage: 'en-MY',
        publisher: { '@id': orgId },
      },
      shippingDetailsNode,
      returnPolicyNode,
      {
        '@type': 'ItemPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Horsemen Malaysia (20 Capsules x 500mg) — Man Virility Enhancement Herbal Supplement | RM 159 Onyxman.my',
        description:
          'Official Horsemen Malaysia flagship reserve (SKU: ONYX-HM-20, MPN: HM-500MG-20MY, GTIN-13: 9550000102011). 20 Capsules x 500mg (20 Kapsul x 500mg) with Tongkat Ali 150mg, Black Maca 100mg, Epimedium 80mg, L-Arginine HCl 80mg, Korean Red Ginseng 60mg & Tribulus/Zinc 30mg. RM 159 (1 bottle), RM 318 (2 bottles), RM 477 (3 bottles).',
        inLanguage: 'en-MY',
        isPartOf: { '@id': websiteId },
        mainEntity: { '@id': productId },
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
      },
      {
        '@type': ['Product', 'DietarySupplement'],
        '@id': productId,
        name: 'Horsemen — Man Virility Enhancement Herbal Supplement (20 Capsules x 500mg / 20 Kapsul x 500mg)',
        alternateName: 'Horsemen 20 Capsules x 500mg Onyxman Malaysia',
        description:
          'Horsemen by Onyxman Malaysia is an authentic 20-capsule x 500mg (10,000mg total potency) adult men’s botanical dietary supplement combining Malaysian Tongkat Ali (150mg), Black Peruvian Maca (100mg), Epimedium Sagittatum (80mg), L-Arginine HCl (80mg), Korean Red Panax Ginseng (60mg), and Tribulus Terrestris with Zinc Picolinate (30mg) for evening readiness and sustained physical stamina.',
        disambiguatingDescription:
          'Oral botanical and amino-acid dietary supplement in a 20-capsule x 500mg obsidian apothecary bottle for adult men (18+) in Malaysia. Distinct from equestrian equipment.',
        url: pageUrl,
        inLanguage: 'en-MY',
        sku: HORSEMEN_CONSTANTS.sku,
        mpn: HORSEMEN_CONSTANTS.mpn,
        gtin13: HORSEMEN_CONSTANTS.gtin13,
        brand: brandNode,
        manufacturer: { '@id': orgId },
        image: images,
        category:
          'Health & Beauty > Health Care > Fitness & Nutrition > Vitamins & Supplements > Botanical Dietary Supplements',
        isVariantOf: { '@id': productGroupId },
        activeIngredient: [
          'Malaysian Tongkat Ali Root Extract 100:1 (Eurycoma longifolia) — 150mg',
          'Black Peruvian Maca Root Extract (Lepidium meyenii) — 100mg',
          'Epimedium Sagittatum Standardized Icariin Complex — 80mg',
          'Pharmaceutical-Grade L-Arginine HCl — 80mg',
          '6-Year Korean Red Panax Ginseng Extract — 60mg',
          'Tribulus Terrestris Saponins & Zinc Picolinate Matrix — 30mg',
        ],
        nonProprietaryName:
          'Eurycoma longifolia 150mg, Lepidium meyenii 100mg, Epimedium sagittatum 80mg, L-Arginine HCl 80mg, Panax ginseng 60mg, Tribulus terrestris & Zinc Picolinate 30mg (500mg per capsule)',
        recommendedIntake: {
          '@type': 'RecommendedDoseSchedule',
          doseValue: 1,
          doseUnit: 'Capsule (500mg)',
          frequency:
            '1 capsule (500mg) with 250ml warm water 45–60 minutes before evening activity or 1 capsule daily after dinner on an 18-to-20-day active cycle.',
          targetPopulation: 'Adult Men (18+)',
        },
        targetPopulation: 'Adult Men (18+)',
        isProprietary: false,
        legalStatus: 'Botanical Dietary Supplement',
        safetyConsideration:
          'Botanical and amino-acid dietary supplement strictly for adult men (18+) in Malaysia. Free from undeclared synthetic adulterants. Not intended to diagnose, treat, cure, or prevent any disease.',
        offers: {
          '@type': 'Offer',
          '@id': `${pageUrl}#offer-primary`,
          url: pageUrl,
          name: 'Horsemen — 1 Bottle (20 Capsules x 500mg)',
          sku: HORSEMEN_CONSTANTS.sku,
          price: '159.00',
          priceCurrency: 'MYR',
          priceValidUntil: '2027-12-31',
          availability: 'https://schema.org/InStock',
          itemCondition: 'https://schema.org/NewCondition',
          eligibleRegion: {
            '@type': 'Country',
            name: 'Malaysia',
            identifier: 'MY',
          },
          seller: sellerNode,
          shippingDetails: shippingDetailsNode,
          hasMerchantReturnPolicy: returnPolicyNode,
        },
      },
      {
        '@type': 'ProductGroup',
        '@id': productGroupId,
        name: 'Horsemen Malaysia — Official 1, 2 & 3 Bottle Protocol Collection (RM 159 / RM 318 / RM 477)',
        description:
          'Multi-bottle reserve tiers for Horsemen (20 Capsules x 500mg per bottle) with automated Day-18 Refill Reminder integration and 100% plain unmarked parcel delivery across all 16 Malaysia states.',
        url: pageUrl,
        productGroupID: 'ONYX-HM-20-GROUP',
        brand: brandNode,
        variesBy: ['https://schema.org/size'],
        hasVariant: hasVariantNodes,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Onyxman Malaysia',
            item: 'https://onyxman.my/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Formulations Vault',
            item: 'https://onyxman.my/products/',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Horsemen (20 Capsules x 500mg)',
            item: pageUrl,
          },
        ],
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        url: pageUrl,
        inLanguage: 'en-MY',
        isPartOf: { '@id': websiteId },
        mainEntity: HORSEMEN_FAQS.map((item, idx) => ({
          '@type': 'Question',
          '@id': `${pageUrl}#faq-question-${idx + 1}`,
          name: item.questionEn,
          acceptedAnswer: {
            '@type': 'AcceptedAnswer',
            text: item.answerEn,
          },
        })),
      },
    ],
  };
}

export const HORSEMEN_PAGE_CSS = `
<style id="horsemen-flagship-architectural-css">
  /* ==========================================================================
     MS-095: PARADIGM A — 100VW X 100VH FULL-BLEED OBSIDIAN HERO STAGE
     Zero generic 2-col card boxes; dramatic editorial spatial composition
     ========================================================================== */
  .hm-cinema-hero {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    background-color: #050507;
    background-image:
      radial-gradient(circle at 68% 44%, rgba(212, 175, 55, 0.16) 0%, rgba(154, 123, 44, 0.06) 28%, rgba(11, 12, 16, 0.85) 58%, #050507 100%),
      linear-gradient(180deg, #050507 0%, #0B0C10 52%, #050507 100%);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: clamp(1.5rem, 3.2vh, 3rem) var(--gutter-cinema) clamp(2.5rem, 5vh, 4.5rem);
    border-bottom: 1px solid rgba(212, 175, 55, 0.24);
  }

  .hm-cinema-hero__ambient-backdrop {
    position: absolute;
    inset: 0;
    pointer-events: none;
    z-index: 1;
    background:
      radial-gradient(ellipse 58% 64% at 72% 46%, rgba(212, 175, 55, 0.13) 0%, rgba(18, 20, 28, 0.22) 45%, transparent 78%),
      radial-gradient(circle at 18% 82%, rgba(243, 229, 171, 0.05) 0%, transparent 55%);
  }

  .hm-cinema-hero__watermark {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(7rem, 21vw, 24rem);
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(212, 175, 55, 0.032);
    white-space: nowrap;
    pointer-events: none;
    user-select: none;
    z-index: 1;
  }

  .hm-cinema-hero__top-telemetry {
    position: relative;
    z-index: 3;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem 2rem;
    padding-bottom: 1.15rem;
    border-bottom: 1px solid rgba(234, 230, 223, 0.09);
  }

  .hm-breadcrumb-trail {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.65rem;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #B8B3A8;
    list-style: none;
  }

  .hm-breadcrumb-trail a {
    color: #B8B3A8;
    transition: color 180ms ease;
  }

  .hm-breadcrumb-trail a:hover {
    color: #F3E5AB;
  }

  .hm-breadcrumb-trail__current {
    color: #D4AF37;
    font-weight: 600;
  }

  .hm-cinema-hero__registry-codes {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.25rem;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.72rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #B8B3A8;
  }

  .hm-cinema-hero__registry-codes strong {
    color: #EAE6DF;
    font-weight: 600;
  }

  .hm-cinema-hero__stage-canvas {
    position: relative;
    z-index: 3;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: clamp(2rem, 4vw, 4.5rem);
    margin: auto 0;
    padding: clamp(1.75rem, 4vh, 3.75rem) 0;
  }

  .hm-cinema-hero__editorial-wing {
    flex: 1 1 540px;
    max-width: 700px;
  }

  .hm-cinema-hero__monument-wing {
    flex: 1 1 420px;
    max-width: 580px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .hm-hero-title {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(3.4rem, 6.8vw, 6.75rem);
    font-weight: 500;
    line-height: 0.94;
    letter-spacing: -0.02em;
    color: #EAE6DF;
    margin-top: 0.9rem;
    margin-bottom: 1.15rem;
  }

  .hm-hero-title__italic {
    font-style: italic;
    font-weight: 400;
    color: #F3E5AB;
    display: block;
    font-size: clamp(2rem, 3.7vw, 3.6rem);
    margin-top: 0.35rem;
  }

  .hm-bilingual-label-strip {
    margin: 1.35rem 0 1.65rem;
    padding: 0.95rem 0;
    border-top: 1px solid rgba(212, 175, 55, 0.28);
    border-bottom: 1px solid rgba(212, 175, 55, 0.28);
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
  }

  .hm-bilingual-label-strip__en {
    font-family: 'Syne', sans-serif;
    font-size: 0.84rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #EAE6DF;
  }

  .hm-bilingual-label-strip__ms {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.78rem;
    letter-spacing: 0.12em;
    color: #D4AF37;
  }

  .hm-hero-lead {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(0.98rem, 1.18vw, 1.12rem);
    line-height: 1.72;
    color: #B8B3A8;
    margin-bottom: 1.85rem;
  }

  /* Interactive 1 / 2 / 3 Bottle Protocol Selector Strip (Non-Box Hairline Ledger) */
  .hm-protocol-selector {
    margin: 1.75rem 0 2rem;
    border-top: 1px solid rgba(212, 175, 55, 0.32);
  }

  .hm-protocol-selector__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 0;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #D4AF37;
  }

  .hm-protocol-tier-row {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem 1.5rem;
    padding: 1.05rem 1.1rem;
    border-bottom: 1px solid rgba(234, 230, 223, 0.12);
    background: rgba(11, 12, 16, 0.55);
    text-align: left;
    transition: background-color 220ms ease, border-color 220ms ease, transform 220ms ease;
    cursor: pointer;
  }

  .hm-protocol-tier-row:hover {
    background: rgba(18, 20, 28, 0.92);
    border-bottom-color: rgba(212, 175, 55, 0.5);
  }

  .hm-protocol-tier-row[aria-checked="true"] {
    background: linear-gradient(90deg, rgba(212, 175, 55, 0.16) 0%, rgba(18, 20, 28, 0.88) 65%, rgba(11, 12, 16, 0.95) 100%);
    border-left: 3px solid #D4AF37;
    border-bottom-color: rgba(243, 229, 171, 0.48);
  }

  .hm-protocol-tier-row__left {
    display: flex;
    flex-direction: column;
    gap: 0.22rem;
  }

  .hm-protocol-tier-row__eyebrow {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #D4AF37;
  }

  .hm-protocol-tier-row__title {
    font-family: 'Syne', sans-serif;
    font-size: 0.98rem;
    font-weight: 700;
    color: #EAE6DF;
  }

  .hm-protocol-tier-row__sub {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.78rem;
    color: #B8B3A8;
  }

  .hm-protocol-tier-row__right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.15rem;
  }

  .hm-protocol-tier-row__price {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 1;
    color: #F3E5AB;
  }

  .hm-protocol-tier-row__unit {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.7rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #7E7A72;
  }

  .hm-hero-actions {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.15rem;
    margin-top: 1.5rem;
  }

  .hm-hero-Stage-pedestal {
    position: relative;
    width: 100%;
    max-width: 520px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .hm-hero-stage-pedestal__halo {
    position: absolute;
    width: 86%;
    height: 86%;
    top: 7%;
    left: 7%;
    background: radial-gradient(circle, rgba(212, 175, 55, 0.24) 0%, rgba(154, 123, 44, 0.07) 48%, transparent 74%);
    filter: blur(28px);
    pointer-events: none;
    z-index: 1;
  }

  .hm-hero-stage-pedestal__figure {
    position: relative;
    z-index: 2;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .hm-hero-stage-pedestal__img {
    width: 100%;
    max-width: 460px;
    height: auto;
    object-fit: contain;
    mask-image: radial-gradient(ellipse 92% 92% at 50% 48%, #000 74%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 92% 92% at 50% 48%, #000 74%, transparent 100%);
    filter: drop-shadow(0 28px 54px rgba(0, 0, 0, 0.88));
    transition: transform 480ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .hm-hero-stage-pedestal:hover .hm-hero-stage-pedestal__img {
    transform: translateY(-6px) scale(1.015);
  }

  .hm-bottle-lens-switcher {
    position: relative;
    z-index: 3;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.25rem;
    margin-top: 1.25rem;
    padding-top: 0.9rem;
    border-top: 1px solid rgba(212, 175, 55, 0.24);
    width: 100%;
  }

  .hm-bottle-lens-btn {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.72rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #B8B3A8;
    padding: 0.4rem 0.25rem;
    border-bottom: 1px solid transparent;
    transition: color 180ms ease, border-color 180ms ease;
  }

  .hm-bottle-lens-btn[aria-pressed="true"],
  .hm-bottle-lens-btn:hover {
    color: #F3E5AB;
    border-bottom-color: #D4AF37;
  }

  .hm-hero-telemetry-ribbon {
    position: relative;
    z-index: 3;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem 2.5rem;
    padding-top: 1.65rem;
    border-top: 1px solid rgba(212, 175, 55, 0.24);
  }

  .hm-hero-telemetry-item {
    flex: 1 1 180px;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .hm-hero-telemetry-item__label {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.68rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #7E7A72;
  }

  .hm-hero-telemetry-item__value {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1.55rem;
    font-weight: 600;
    color: #EAE6DF;
  }

  .hm-hero-telemetry-item__sub {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.76rem;
    color: #D4AF37;
  }

  /* ==========================================================================
     MS-096: PARADIGM D — PINNED 50VW / 50VW SPLIT-SCREEN SEAMLESS STAGE
     500mg Capsule Architecture & 6 Botanical Actives Breakdown (Exact 500mg)
     ========================================================================== */
  .hm-paradigm-d-split {
    position: relative;
    width: 100%;
    background-color: #0B0C10;
    border-bottom: 1px solid rgba(212, 175, 55, 0.24);
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }

  .hm-paradigm-d-split__pinned-left {
    flex: 1 1 50%;
    width: 50%;
    min-width: 320px;
    padding: var(--gutter-vertical) var(--gutter-cinema);
    border-right: 1px solid rgba(212, 175, 55, 0.22);
    background:
      radial-gradient(circle at 46% 38%, rgba(212, 175, 55, 0.11) 0%, rgba(5, 5, 7, 0.94) 72%),
      #050507;
  }

  @media (min-width: 1024px) {
    .hm-paradigm-d-split__pinned-inner {
      position: sticky;
      top: 6.5rem;
    }
  }

  .hm-paradigm-d-split__scroll-right {
    flex: 1 1 50%;
    width: 50%;
    min-width: 320px;
    padding: var(--gutter-vertical) var(--gutter-cinema);
    background-color: #0B0C10;
  }

  @media (max-width: 1023px) {
    .hm-paradigm-d-split__pinned-left,
    .hm-paradigm-d-split__scroll-right {
      flex: 1 1 100%;
      width: 100%;
      border-right: none;
    }
    .hm-paradigm-d-split__pinned-left {
      border-bottom: 1px solid rgba(212, 175, 55, 0.22);
    }
  }

  .hm-500mg-ledger-summary {
    margin-top: 2rem;
    padding-top: 1.25rem;
    border-top: 1px solid rgba(212, 175, 55, 0.28);
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
  }

  .hm-500mg-ledger-row {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.45rem 0;
    border-bottom: 1px solid rgba(234, 230, 223, 0.08);
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.84rem;
  }

  .hm-500mg-ledger-row__name {
    color: #EAE6DF;
  }

  .hm-500mg-ledger-row__mg {
    color: #F3E5AB;
    font-weight: 700;
    letter-spacing: 0.08em;
  }

  .hm-500mg-ledger-total {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    padding-top: 0.85rem;
    font-family: 'Syne', sans-serif;
    font-size: 0.96rem;
    font-weight: 700;
    color: #D4AF37;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .hm-botanical-monograph-stream {
    display: flex;
    flex-direction: column;
  }

  .hm-botanical-chapter {
    padding: 2.5rem 0;
    border-bottom: 1px solid rgba(212, 175, 55, 0.22);
  }

  .hm-botanical-chapter:first-child {
    padding-top: 0;
  }

  .hm-botanical-chapter__top {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.75rem 1.5rem;
    margin-bottom: 0.75rem;
  }

  .hm-botanical-chapter__code {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.72rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #D4AF37;
  }

  .hm-botanical-chapter__dosage {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 2.2rem;
    font-weight: 600;
    line-height: 1;
    color: #F3E5AB;
  }

  .hm-botanical-chapter__title {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(1.65rem, 2.5vw, 2.35rem);
    font-weight: 500;
    color: #EAE6DF;
    margin-bottom: 0.3rem;
  }

  .hm-botanical-chapter__latin {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.82rem;
    letter-spacing: 0.08em;
    color: #B8B3A8;
    margin-bottom: 1rem;
  }

  .hm-botanical-chapter__body {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.94rem;
    line-height: 1.72;
    color: #EAE6DF;
    margin-bottom: 1rem;
  }

  .hm-botanical-chapter__telemetry {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding-top: 0.85rem;
    border-top: 1px solid rgba(234, 230, 223, 0.09);
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.76rem;
    color: #B8B3A8;
  }

  .hm-botanical-chapter__telemetry strong {
    color: #D4AF37;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-right: 0.35rem;
  }

  /* ==========================================================================
     MS-097: 18-DAY ACTIVE CYCLE CHRONOLOGY & MALAYSIAN TROPICAL TIMING
     ========================================================================== */
  .hm-chronology-stage {
    padding: var(--gutter-vertical) var(--gutter-cinema);
    background:
      linear-gradient(180deg, #050507 0%, #12141C 55%, #050507 100%);
    border-bottom: 1px solid rgba(212, 175, 55, 0.24);
  }

  .hm-chronology-header {
    max-width: 880px;
    margin-bottom: 3.25rem;
  }

  .hm-chronology-ledger {
    border-top: 1px solid rgba(212, 175, 55, 0.34);
  }

  .hm-chronology-phase {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.5rem 3rem;
    padding: 2.4rem 0;
    border-bottom: 1px solid rgba(234, 230, 223, 0.12);
  }

  .hm-chronology-phase__window {
    flex: 1 1 240px;
    max-width: 310px;
  }

  .hm-chronology-phase__day-tag {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.74rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #D4AF37;
    display: block;
    margin-bottom: 0.4rem;
  }

  .hm-chronology-phase__title {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.08;
    color: #EAE6DF;
  }

  .hm-chronology-phase__narrative {
    flex: 2 1 440px;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.96rem;
    line-height: 1.75;
    color: #B8B3A8;
  }

  .hm-chronology-phase__metrics {
    flex: 1 1 240px;
    max-width: 300px;
    border-left: 1px solid rgba(212, 175, 55, 0.26);
    padding-left: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.8rem;
    color: #EAE6DF;
  }

  .hm-tropical-protocol-strip {
    margin-top: 3.5rem;
    padding-top: 2.5rem;
    border-top: 1px solid rgba(212, 175, 55, 0.32);
    display: flex;
    flex-wrap: wrap;
    gap: 2.5rem 3.5rem;
  }

  .hm-tropical-protocol-col {
    flex: 1 1 320px;
  }

  .hm-tropical-protocol-col h3 {
    font-family: 'Syne', sans-serif;
    font-size: 1.05rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #F3E5AB;
    margin-bottom: 0.85rem;
  }

  .hm-tropical-protocol-col p {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.92rem;
    line-height: 1.7;
    color: #B8B3A8;
  }

  /* ==========================================================================
     MS-098: 4-FORMULATION COMPARISON MATRIX & 16-STATE MALAYSIA DELIVERY TABLE
     ========================================================================== */
  .hm-matrix-stage {
    padding: var(--gutter-vertical) var(--gutter-cinema);
    background-color: #050507;
    border-bottom: 1px solid rgba(212, 175, 55, 0.24);
  }

  .hm-table-scroll-container {
    width: 100%;
    overflow-x: auto;
    margin: 2.25rem 0 3.75rem;
    border-top: 1px solid rgba(212, 175, 55, 0.36);
    border-bottom: 1px solid rgba(212, 175, 55, 0.36);
  }

  .hm-architectural-table {
    width: 100%;
    min-width: 860px;
    border-collapse: collapse;
    text-align: left;
    font-family: 'Space Grotesk', sans-serif;
  }

  .hm-architectural-table th {
    padding: 1.15rem 1rem;
    font-family: 'Syne', sans-serif;
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #D4AF37;
    border-bottom: 1px solid rgba(212, 175, 55, 0.32);
    background: rgba(18, 20, 28, 0.72);
  }

  .hm-architectural-table td {
    padding: 1.1rem 1rem;
    font-size: 0.88rem;
    line-height: 1.55;
    color: #EAE6DF;
    border-bottom: 1px solid rgba(234, 230, 223, 0.09);
    vertical-align: top;
  }

  .hm-architectural-table tbody tr:hover td {
    background: rgba(212, 175, 55, 0.05);
  }

  .hm-architectural-table__highlight-col {
    background: rgba(212, 175, 55, 0.08);
    color: #F3E5AB;
    font-weight: 600;
  }

  /* ==========================================================================
     MS-099: 10-QUESTION HORSEMEN MALAYSIA FAQ ACCORDION
     ========================================================================== */
  .hm-faq-stage {
    padding: var(--gutter-vertical) var(--gutter-cinema);
    background: linear-gradient(180deg, #0B0C10 0%, #050507 100%);
  }

  .hm-faq-ledger {
    margin-top: 2.5rem;
    border-top: 1px solid rgba(212, 175, 55, 0.32);
  }

  .hm-faq-item {
    border-bottom: 1px solid rgba(234, 230, 223, 0.12);
  }

  .hm-faq-item summary {
    list-style: none;
    cursor: pointer;
    padding: 1.55rem 0;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .hm-faq-item summary::-webkit-details-marker {
    display: none;
  }

  .hm-faq-item__left {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }

  .hm-faq-item__meta {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #D4AF37;
  }

  .hm-faq-item__question {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(1.35rem, 2.1vw, 1.85rem);
    font-weight: 500;
    line-height: 1.2;
    color: #EAE6DF;
  }

  .hm-faq-item__icon {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.25rem;
    color: #D4AF37;
    transition: transform 220ms ease;
  }

  .hm-faq-item[open] .hm-faq-item__icon {
    transform: rotate(45deg);
  }

  .hm-faq-item__answer {
    padding: 0 0 1.75rem 0;
    max-width: 920px;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.95rem;
    line-height: 1.78;
    color: #B8B3A8;
  }
</style>
`;

export function buildHorsemenBodyContent() {
  return `
      <!-- ====================================================================
           CHAPTER I (MS-095): 100VW X 100VH FULL-BLEED OBSIDIAN HERO STAGE
           Product: Horsemen (20 Capsules x 500mg / 20 Kapsul x 500mg)
           SKU: ONYX-HM-20 | MPN: HM-500MG-20MY | GTIN-13: 9550000102011
           ==================================================================== -->
      <section
        id="ms-095-horsemen-hero-stage"
        class="hm-cinema-hero"
        aria-labelledby="hm-hero-main-heading"
        data-product-slug="horsemen"
        data-sku="ONYX-HM-20"
        data-mpn="HM-500MG-20MY"
        data-gtin13="9550000102011"
      >
        <div class="hm-cinema-hero__ambient-backdrop" aria-hidden="true"></div>
        <div class="hm-cinema-hero__watermark" aria-hidden="true">HORSEMEN</div>

        <!-- Top Architectural Breadcrumb & Registry Telemetry Bar -->
        <div class="hm-cinema-hero__top-telemetry">
          <nav aria-label="Breadcrumb">
            <ol class="hm-breadcrumb-trail">
              <li><a href="/">Onyxman Malaysia</a></li>
              <li aria-hidden="true">/</li>
              <li><a href="/products/">Formulations Vault</a></li>
              <li aria-hidden="true">/</li>
              <li class="hm-breadcrumb-trail__current" aria-current="page">Horsemen (20 Capsules × 500mg)</li>
            </ol>
          </nav>

          <div class="hm-cinema-hero__registry-codes">
            <span>SKU: <strong>ONYX-HM-20</strong></span>
            <span>MPN: <strong>HM-500MG-20MY</strong></span>
            <span>GTIN-13: <strong>9550000102011</strong></span>
            <span>LOCALE: <a href="/ms/horsemen-malaysia/" style="color:#F3E5AB;text-decoration:underline;">VERSI BAHASA MALAYSIA (BM)</a></span>
          </div>
        </div>

        <!-- Central 100vw x 100vh Stage Canvas -->
        <div class="hm-cinema-hero__stage-canvas">
          <!-- Left Wing: Editorial Typography, Bilingual Bottle Verification & 1/2/3-Bottle Selector -->
          <div class="hm-cinema-hero__editorial-wing">
            <p class="editorial-kicker">
              FORMULATION I · APOTHECARY RESERVE · 10,000MG NET BOTANICAL MATRIX
            </p>

            <h1 id="hm-hero-main-heading" class="hm-hero-title">
              HORSEMEN
              <span class="hm-hero-title__italic">
                High-Density 500mg Botanical Virility &amp; Evening Stamina Reserve
              </span>
            </h1>

            <!-- Authentic Bilingual Bottle Label Transcription Strip -->
            <div class="hm-bilingual-label-strip" aria-label="Authentic Bilingual Bottle Label Transcription">
              <span class="hm-bilingual-label-strip__en">
                OFFICIAL BOTTLE INSCRIPTION (EN): Man Virility Enhancement Herbal Supplement — 20 Capsules x 500mg
              </span>
              <span class="hm-bilingual-label-strip__ms">
                TRANSKRIPSI LABEL RASMI (BM): Suplemen Herba Kecergasan &amp; Stamina Lelaki — 20 Kapsul x 500mg
              </span>
            </div>

            <p class="hm-hero-lead">
              Engineered for adult men (18+) across Malaysia demanding rapid 45–60 minute evening readiness and cumulative 18-day stamina conditioning without synthetic stimulant jitters. Each 500mg obsidian-sealed capsule unites <strong>150mg Malaysian Tongkat Ali (100:1)</strong>, <strong>100mg Black Peruvian Maca</strong>, <strong>80mg Epimedium Sagittatum</strong>, <strong>80mg Pharmaceutical-Grade L-Arginine HCl</strong>, <strong>60mg 6-Year Korean Red Ginseng</strong>, and <strong>30mg Tribulus &amp; Zinc Picolinate</strong>.
            </p>

            <!-- Interactive 1 / 2 / 3 Bottle Protocol Selector -->
            <div
              class="hm-protocol-selector"
              role="radiogroup"
              aria-label="Select Horsemen Malaysia Bottle Protocol Tier"
            >
              <div class="hm-protocol-selector__header">
                <span>SELECT PROTOCOL RESERVE TIER (UNIFORM RM 159 / BOTTLE)</span>
                <span id="hm-selected-tier-indicator">ACTIVE SELECTION: 1 BOTTLE · RM 159</span>
              </div>

              <!-- Tier 1: 1 Bottle = RM 159 -->
              <button
                type="button"
                role="radio"
                aria-checked="true"
                class="hm-protocol-tier-row"
                data-hm-tier-btn="1"
                data-tier-bottles="1"
                data-tier-capsules="20"
                data-tier-mg="10,000mg"
                data-tier-price="RM 159"
                data-tier-schema="159.00"
                data-tier-refill-day="18"
                data-tier-label="1 Bottle (20 Capsules × 500mg) — RM 159"
              >
                <div class="hm-protocol-tier-row__left">
                  <span class="hm-protocol-tier-row__eyebrow">STARTER RESERVE · 18-DAY ACTIVE CYCLE + 2 BUFFER CAPSULES</span>
                  <span class="hm-protocol-tier-row__title">1 Bottle — 20 Capsules × 500mg (10,000mg Total Actives)</span>
                  <span class="hm-protocol-tier-row__sub">Free Discreet Plain-Parcel Shipping in Peninsular Malaysia · Day-18 Refill Trigger</span>
                </div>
                <div class="hm-protocol-tier-row__right">
                  <span class="hm-protocol-tier-row__price">RM 159</span>
                  <span class="hm-protocol-tier-row__unit">159.00 MYR · SKU ONYX-HM-20-1B</span>
                </div>
              </button>

              <!-- Tier 2: 2 Bottles = RM 318 -->
              <button
                type="button"
                role="radio"
                aria-checked="false"
                class="hm-protocol-tier-row"
                data-hm-tier-btn="2"
                data-tier-bottles="2"
                data-tier-capsules="40"
                data-tier-mg="20,000mg"
                data-tier-price="RM 318"
                data-tier-schema="318.00"
                data-tier-refill-day="36"
                data-tier-label="2 Bottles (40 Capsules × 500mg) — RM 318"
              >
                <div class="hm-protocol-tier-row__left">
                  <span class="hm-protocol-tier-row__eyebrow">MOST SELECTED IN KUALA LUMPUR, SELANGOR &amp; JOHOR · DUAL CYCLE</span>
                  <span class="hm-protocol-tier-row__title">2 Bottles — 40 Capsules × 500mg (20,000mg Total Actives)</span>
                  <span class="hm-protocol-tier-row__sub">Free Nationwide Malaysia Discreet Express Shipping (Includes Sabah, Sarawak &amp; Labuan)</span>
                </div>
                <div class="hm-protocol-tier-row__right">
                  <span class="hm-protocol-tier-row__price">RM 318</span>
                  <span class="hm-protocol-tier-row__unit">318.00 MYR · SKU ONYX-HM-20-2B</span>
                </div>
              </button>

              <!-- Tier 3: 3 Bottles = RM 477 -->
              <button
                type="button"
                role="radio"
                aria-checked="false"
                class="hm-protocol-tier-row"
                data-hm-tier-btn="3"
                data-tier-bottles="3"
                data-tier-capsules="60"
                data-tier-mg="30,000mg"
                data-tier-price="RM 477"
                data-tier-schema="477.00"
                data-tier-refill-day="54"
                data-tier-label="3 Bottles (60 Capsules × 500mg) — RM 477"
              >
                <div class="hm-protocol-tier-row__left">
                  <span class="hm-protocol-tier-row__eyebrow">COMPLETE APOTHECARY MASTERY VAULT · 60-DAY FULL CONDITIONING</span>
                  <span class="hm-protocol-tier-row__title">3 Bottles — 60 Capsules × 500mg (30,000mg Total Actives)</span>
                  <span class="hm-protocol-tier-row__sub">Priority Same-Day/Next-Day Discreet Dispatch + Free Nationwide Shipping + VIP Refill Concierge</span>
                </div>
                <div class="hm-protocol-tier-row__right">
                  <span class="hm-protocol-tier-row__price">RM 477</span>
                  <span class="hm-protocol-tier-row__unit">477.00 MYR · SKU ONYX-HM-20-3B</span>
                </div>
              </button>
            </div>

            <!-- Primary Express Order Trigger & Day-18 Calendar Action -->
            <div class="hm-hero-actions">
              <button
                type="button"
                id="hm-hero-primary-order-cta"
                class="cta-foil-primary"
                data-open-order-drawer
                data-order-product="horsemen"
                data-order-qty="1"
                aria-controls="onyxman-express-order-drawer"
              >
                <span id="hm-hero-primary-cta-text">RESERVE DISCREET DISPATCH · 1 BOTTLE — RM 159</span>
                <span aria-hidden="true">→</span>
              </button>

              <a
                id="hm-hero-day18-calendar-link"
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Onyxman+Malaysia+%E2%80%94+Horsemen+Day-18+Refill+Check-In+(RM+159)&details=Time+to+reserve+your+next+bottle+of+Horsemen+(20+Capsules+x+500mg,+SKU+ONYX-HM-20)+at+https://onyxman.my/horsemen-malaysia/+or+email+sales@onyxman.my+so+your+cycle+continues+with+zero+gap."
                target="_blank"
                rel="noopener noreferrer"
                class="cta-hairline-secondary"
              >
                <span>SET DAY-18 REFILL REMINDER</span>
                <span aria-hidden="true">+</span>
              </a>
            </div>
          </div>

          <!-- Right Wing: Studio Bottle Lighting & 3-Angle Visual Inspection Stage -->
          <div class="hm-cinema-hero__monument-wing">
            <div class="hm-hero-stage-pedestal">
              <div class="hm-hero-stage-pedestal__halo" aria-hidden="true"></div>
              <figure class="hm-hero-stage-pedestal__figure">
                <picture id="hm-hero-stage-picture">
                  <source
                    id="hm-hero-stage-source-webp"
                    srcset="/assets/products/horsemen-stage.webp"
                    type="image/webp"
                  />
                  <img
                    id="hm-hero-stage-main-img"
                    src="/assets/products/horsemen-stage.png"
                    alt="Horsemen Man Virility Enhancement Herbal Supplement — 20 Capsules x 500mg Official Onyxman Malaysia Bottle (SKU ONYX-HM-20, RM 159)"
                    width="900"
                    height="900"
                    fetchpriority="high"
                    decoding="async"
                    class="hm-hero-stage-pedestal__img"
                  />
                </picture>
              </figure>

              <!-- Studio Asset Angle Switcher (horsemen-stage.webp, horsemen-portrait.webp, horsemen-cutout.webp) -->
              <div class="hm-bottle-lens-switcher" role="group" aria-label="Inspect Horsemen Studio Bottle Angles">
                <button
                  type="button"
                  class="hm-bottle-lens-btn"
                  aria-pressed="true"
                  data-hm-lens-webp="/assets/products/horsemen-stage.webp"
                  data-hm-lens-png="/assets/products/horsemen-stage.png"
                  data-hm-lens-caption="STUDIO STAGE LIGHTING · 20 CAPSULES × 500MG APOTHECARY VESSEL"
                >
                  01 · STUDIO STAGE
                </button>
                <button
                  type="button"
                  class="hm-bottle-lens-btn"
                  aria-pressed="false"
                  data-hm-lens-webp="/assets/products/horsemen-portrait.webp"
                  data-hm-lens-png="/assets/products/horsemen-portrait.png"
                  data-hm-lens-caption="PORTRAIT MONOLITH · CRIMSON &amp; GOLD CREST LABEL INSCRIPTION"
                >
                  02 · PORTRAIT CREST
                </button>
                <button
                  type="button"
                  class="hm-bottle-lens-btn"
                  aria-pressed="false"
                  data-hm-lens-webp="/assets/products/horsemen-cutout.webp"
                  data-hm-lens-png="/assets/products/horsemen-cutout.png"
                  data-hm-lens-caption="PURE CUTOUT INSPECTION · TAMPER-EVIDENT OBSIDIAN SEAL"
                >
                  03 · SEAL CUTOUT
                </button>
              </div>
              <p
                id="hm-bottle-lens-caption-readout"
                style="margin-top:0.65rem;font-family:'Space Grotesk',sans-serif;font-size:0.7rem;letter-spacing:0.16em;text-transform:uppercase;color:#7E7A72;text-align:center;"
              >
                STUDIO STAGE LIGHTING · 20 CAPSULES × 500MG APOTHECARY VESSEL
              </p>
            </div>
          </div>
        </div>

        <!-- Bottom Architectural Telemetry Ribbon -->
        <div class="hm-hero-telemetry-ribbon" aria-label="Horsemen Technical Specifications Summary">
          <div class="hm-hero-telemetry-item">
            <span class="hm-hero-telemetry-item__label">CAPSULE SPECIFICATION</span>
            <span class="hm-hero-telemetry-item__value">20 Capsules × 500mg</span>
            <span class="hm-hero-telemetry-item__sub">20 Kapsul × 500mg (10,000mg Total)</span>
          </div>
          <div class="hm-hero-telemetry-item">
            <span class="hm-hero-telemetry-item__label">PRIMARY BIO-DRIVERS</span>
            <span class="hm-hero-telemetry-item__value">Tongkat Ali 100:1 + Maca</span>
            <span class="hm-hero-telemetry-item__sub">150mg Eurycoma + 100mg Black Maca</span>
          </div>
          <div class="hm-hero-telemetry-item">
            <span class="hm-hero-telemetry-item__label">ACTIVE REFILL CYCLE</span>
            <span class="hm-hero-telemetry-item__value">Day-18 Trigger</span>
            <span class="hm-hero-telemetry-item__sub">18-Day Active Cycle + 48h Transit Buffer</span>
          </div>
          <div class="hm-hero-telemetry-item">
            <span class="hm-hero-telemetry-item__label">MALAYSIA DISPATCH</span>
            <span class="hm-hero-telemetry-item__value">100% Plain Parcel</span>
            <span class="hm-hero-telemetry-item__sub">Same-Day Klang Valley · 1–2d Peninsular</span>
          </div>
          <div class="hm-hero-telemetry-item">
            <span class="hm-hero-telemetry-item__label">OFFICIAL RESERVE PRICE</span>
            <span class="hm-hero-telemetry-item__value">RM 159 / RM 318 / RM 477</span>
            <span class="hm-hero-telemetry-item__sub">FPX · DuitNow QR · Cash on Delivery (COD)</span>
          </div>
        </div>
      </section>
`;
}

export function buildHorsemenChapterMS096() {
  return `
      <!-- ====================================================================
           CHAPTER II (MS-096): PARADIGM D PINNED 50VW / 50VW SPLIT-SCREEN STAGE
           500mg Capsule Architecture & 6 Botanical Actives Breakdown
           Exact Mathematical Verification: 150 + 100 + 80 + 80 + 60 + 30 = 500mg
           ==================================================================== -->
      <section
        id="ms-096-capsule-architecture-split"
        class="hm-paradigm-d-split"
        aria-labelledby="hm-ms096-heading"
      >
        <!-- Pinned Left 50vw Stage: 500mg Capsule Cross-Section & Mass Balance -->
        <div class="hm-paradigm-d-split__pinned-left">
          <div class="hm-paradigm-d-split__pinned-inner">
            <p class="editorial-kicker">
              CHAPTER II · PARADIGM D · 500MG CAPSULE ARCHITECTURE
            </p>
            <h2 id="hm-ms096-heading" class="editorial-headline-lg" style="margin-top:0.85rem;margin-bottom:1.15rem;">
              Inside One 500mg Horsemen Capsule: Exact Milligram Mass-Balance
            </h2>
            <p style="font-family:'Space Grotesk',sans-serif;font-size:0.95rem;line-height:1.72;color:#B8B3A8;margin-bottom:1.5rem;">
              Unlike opaque proprietary blends that hide sub-therapeutic dusting behind filler powders, Horsemen discloses every milligram inside each <strong>500mg high-density capsule</strong> (<strong>20 Capsules × 500mg = 10,000mg per bottle</strong>). Zero chalky tablet binders, zero synthetic caffeine, and zero undeclared chemical adulterants.
            </p>

            <!-- Studio Portrait Visual Anchor -->
            <figure style="margin:1.5rem 0;padding:1.25rem 0;border-top:1px solid rgba(212,175,55,0.22);border-bottom:1px solid rgba(212,175,55,0.22);display:flex;align-items:center;gap:1.5rem;">
              <img
                src="/assets/products/horsemen-portrait.webp"
                alt="Horsemen 20 Capsules x 500mg Portrait Bottle Inspection"
                width="140"
                height="180"
                loading="lazy"
                decoding="async"
                style="width:120px;height:auto;object-fit:contain;flex-shrink:0;"
              />
              <figcaption style="font-family:'Space Grotesk',sans-serif;font-size:0.8rem;line-height:1.6;color:#B8B3A8;">
                <strong style="color:#F3E5AB;display:block;letter-spacing:0.12em;text-transform:uppercase;margin-bottom:0.25rem;">
                  VERIFIED VESSEL TELEMETRY
                </strong>
                SKU: <span style="color:#EAE6DF;">ONYX-HM-20</span> · MPN: <span style="color:#EAE6DF;">HM-500MG-20MY</span><br />
                GTIN-13: <span style="color:#EAE6DF;">9550000102011</span><br />
                Dissolution Window: <span style="color:#D4AF37;">20–30 Minutes in 250ml Warm Water</span>
              </figcaption>
            </figure>

            <!-- Exact 500mg Mathematical Ledger -->
            <div class="hm-500mg-ledger-summary" aria-label="500mg Capsule Active Ingredient Mass Balance">
              <div class="hm-500mg-ledger-row">
                <span class="hm-500mg-ledger-row__name">01. Malaysian Tongkat Ali Root Extract (100:1)</span>
                <span class="hm-500mg-ledger-row__mg">150 mg (30.0%)</span>
              </div>
              <div class="hm-500mg-ledger-row">
                <span class="hm-500mg-ledger-row__name">02. Black Peruvian Maca Root Extract</span>
                <span class="hm-500mg-ledger-row__mg">100 mg (20.0%)</span>
              </div>
              <div class="hm-500mg-ledger-row">
                <span class="hm-500mg-ledger-row__name">03. Epimedium Sagittatum (10% Icariins)</span>
                <span class="hm-500mg-ledger-row__mg">80 mg (16.0%)</span>
              </div>
              <div class="hm-500mg-ledger-row">
                <span class="hm-500mg-ledger-row__name">04. Pharmaceutical-Grade L-Arginine HCl</span>
                <span class="hm-500mg-ledger-row__mg">80 mg (16.0%)</span>
              </div>
              <div class="hm-500mg-ledger-row">
                <span class="hm-500mg-ledger-row__name">05. 6-Year Korean Red Panax Ginseng</span>
                <span class="hm-500mg-ledger-row__mg">60 mg (12.0%)</span>
              </div>
              <div class="hm-500mg-ledger-row">
                <span class="hm-500mg-ledger-row__name">06. Tribulus Terrestris &amp; Zinc Picolinate</span>
                <span class="hm-500mg-ledger-row__mg">30 mg (6.0%)</span>
              </div>
              <div class="hm-500mg-ledger-total">
                <span>VERIFIED SINGLE-CAPSULE MASS</span>
                <span>500 mg (100.0%)</span>
              </div>
              <div class="hm-500mg-ledger-total" style="padding-top:0.35rem;font-size:0.82rem;color:#EAE6DF;">
                <span>20-CAPSULE BOTTLE TOTAL POTENCY</span>
                <span>10,000 mg (10.0 g)</span>
              </div>
            </div>

            <div style="margin-top:2rem;">
              <button
                type="button"
                class="cta-foil-primary"
                data-open-order-drawer
                data-order-product="horsemen"
                data-order-qty="2"
              >
                <span>ACQUIRE 2-BOTTLE 20,000MG RESERVE — RM 318</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Scrolling Right 50vw Stage: 6 Botanical Actives Monograph Stream -->
        <div class="hm-paradigm-d-split__scroll-right">
          <div class="hm-botanical-monograph-stream">
            <!-- Active 01: Malaysian Tongkat Ali 150mg -->
            <article class="hm-botanical-chapter" id="hm-active-tongkat-ali">
              <div class="hm-botanical-chapter__top">
                <span class="hm-botanical-chapter__code">BOTANICAL ACTIVE 01 · CODE HM-ACT-01 · 30% OF CAPSULE MASS</span>
                <span class="hm-botanical-chapter__dosage">150 mg</span>
              </div>
              <h3 class="hm-botanical-chapter__title">
                Malaysian Tongkat Ali Root Extract (100:1 Standardized)
              </h3>
              <p class="hm-botanical-chapter__latin">
                Taxonomic Source: <em>Eurycoma longifolia Jack</em> (Mature Peninsular Malaysian Rainforest Root) · Bahasa Malaysia: <em>Ekstrak Akar Tongkat Ali Malaysia</em>
              </p>
              <p class="hm-botanical-chapter__body">
                Harvested from mature wild-crafted and sustainably cultivated Malaysian <em>Eurycoma longifolia</em> roots and water-extracted at a 100:1 concentration ratio, this 150mg lead fraction is standardized to <strong>2.2% Eurycomanone and bioactive quassinoid diterpenoids</strong>. In adult male physiology, standardized Tongkat Ali supports healthy free androgen equilibrium, moderates evening cortisol elevation after high-pressure Kuala Lumpur or Johor Bahru workdays, and sustains physical drive without sympathetic nervous system overstimulation.
              </p>
              <div class="hm-botanical-chapter__telemetry">
                <span><strong>STANDARDIZATION:</strong> 2.2% Eurycomanone &amp; Quassinoids</span>
                <span><strong>PER 20-CAP BOTTLE:</strong> 3,000 mg Total</span>
                <span><strong>BIO-SYNERGY:</strong> Pairs with Zinc Picolinate &amp; Black Maca</span>
              </div>
            </article>

            <!-- Active 02: Black Peruvian Maca 100mg -->
            <article class="hm-botanical-chapter" id="hm-active-black-maca">
              <div class="hm-botanical-chapter__top">
                <span class="hm-botanical-chapter__code">BOTANICAL ACTIVE 02 · CODE HM-ACT-02 · 20% OF CAPSULE MASS</span>
                <span class="hm-botanical-chapter__dosage">100 mg</span>
              </div>
              <h3 class="hm-botanical-chapter__title">
                Andean Black Peruvian Maca Root (Gelatinized Extract)
              </h3>
              <p class="hm-botanical-chapter__latin">
                Taxonomic Source: <em>Lepidium meyenii Walp.</em> (High-Altitude Junín Plateau Black Phenotype) · Bahasa Malaysia: <em>Ekstrak Akar Maca Hitam Peru</em>
              </p>
              <p class="hm-botanical-chapter__body">
                Among the phenotypes of Andean Maca, the rare <strong>Black Maca root</strong> exhibits the highest concentration of lipid-soluble <strong>macamides and macaenes (standardized to 0.6%)</strong>. Our 100mg fraction undergoes pre-gelatinization to extrude indigestible starch chains, ensuring rapid gastric uptake within 25 minutes. Black Maca operates as a non-caffeinated adaptogen that bolsters physical endurance, evening mental clarity, and stamina resilience without interfering with deep restorative sleep cycles.
              </p>
              <div class="hm-botanical-chapter__telemetry">
                <span><strong>STANDARDIZATION:</strong> 0.6% Macamides &amp; Macaenes</span>
                <span><strong>PER 20-CAP BOTTLE:</strong> 2,000 mg Total</span>
                <span><strong>BIO-SYNERGY:</strong> Enhances Tongkat Ali Stamina Curve</span>
              </div>
            </article>

            <!-- Active 03: Epimedium Sagittatum 80mg -->
            <article class="hm-botanical-chapter" id="hm-active-epimedium">
              <div class="hm-botanical-chapter__top">
                <span class="hm-botanical-chapter__code">BOTANICAL ACTIVE 03 · CODE HM-ACT-03 · 16% OF CAPSULE MASS</span>
                <span class="hm-botanical-chapter__dosage">80 mg</span>
              </div>
              <h3 class="hm-botanical-chapter__title">
                Epimedium Sagittatum Aerial Extract (Horny Goat Weed Complex)
              </h3>
              <p class="hm-botanical-chapter__latin">
                Taxonomic Source: <em>Epimedium sagittatum (Siebold &amp; Zucc.) Maxim.</em> · Bahasa Malaysia: <em>Ekstrak Herba Epimedium Piawai</em>
              </p>
              <p class="hm-botanical-chapter__body">
                Standardized to <strong>10% prenylated flavonoid glycosides (Icariin)</strong>, this 80mg botanical fraction complements L-Arginine HCl by supporting endothelial cyclic nucleotide signaling and peripheral micro-vascular responsiveness. When taken 45–60 minutes prior to evening physical activity with warm water, Epimedium works in tandem with nitric oxide precursors to promote smooth peripheral blood flow and physical readiness.
              </p>
              <div class="hm-botanical-chapter__telemetry">
                <span><strong>STANDARDIZATION:</strong> 10% Flavonoid Icariins</span>
                <span><strong>PER 20-CAP BOTTLE:</strong> 1,600 mg Total</span>
                <span><strong>BIO-SYNERGY:</strong> Direct Vascular Partner to L-Arginine HCl</span>
              </div>
            </article>

            <!-- Active 04: L-Arginine HCl 80mg -->
            <article class="hm-botanical-chapter" id="hm-active-l-arginine">
              <div class="hm-botanical-chapter__top">
                <span class="hm-botanical-chapter__code">BOTANICAL ACTIVE 04 · CODE HM-ACT-04 · 16% OF CAPSULE MASS</span>
                <span class="hm-botanical-chapter__dosage">80 mg</span>
              </div>
              <h3 class="hm-botanical-chapter__title">
                Pharmaceutical-Grade L-Arginine Hydrochloride (HCl)
              </h3>
              <p class="hm-botanical-chapter__latin">
                Biochemical Classification: <em>99.2% Pure Free-Form Semi-Essential Amino Acid Substrate</em> · Bahasa Malaysia: <em>Asid Amino L-Arginine HCl</em>
              </p>
              <p class="hm-botanical-chapter__body">
                L-Arginine HCl serves as the immediate nitrogen-donating substrate for endothelial nitric oxide synthase (eNOS). Bonding L-Arginine to a hydrochloride salt maximizes aqueous solubility in the upper gastrointestinal tract, enabling rapid absorption during the 45-minute pre-activity window. In combination with Epimedium icariins and Panax Ginseng ginsenosides, this 80mg amino-acid anchor supports oxygen and nutrient transport during physical exertion.
              </p>
              <div class="hm-botanical-chapter__telemetry">
                <span><strong>PURITY GRADE:</strong> 99.2% Free-Form Amino Acid HCl</span>
                <span><strong>PER 20-CAP BOTTLE:</strong> 1,600 mg Total</span>
                <span><strong>BIO-SYNERGY:</strong> Endothelial Nitric Oxide Precursor</span>
              </div>
            </article>

            <!-- Active 05: Korean Red Ginseng 60mg -->
            <article class="hm-botanical-chapter" id="hm-active-red-ginseng">
              <div class="hm-botanical-chapter__top">
                <span class="hm-botanical-chapter__code">BOTANICAL ACTIVE 05 · CODE HM-ACT-05 · 12% OF CAPSULE MASS</span>
                <span class="hm-botanical-chapter__dosage">60 mg</span>
              </div>
              <h3 class="hm-botanical-chapter__title">
                6-Year Aged Korean Red Panax Ginseng Root Extract
              </h3>
              <p class="hm-botanical-chapter__latin">
                Taxonomic Source: <em>Panax ginseng C.A. Meyer</em> (Steam-Cured 6-Year Main Root) · Bahasa Malaysia: <em>Ekstrak Akar Panax Ginseng Merah Korea</em>
              </p>
              <p class="hm-botanical-chapter__body">
                Harvested only after 6 full years of soil maturation and traditionally steam-cured into Red Ginseng to convert native protopanaxadiols into highly bioavailable <strong>Rg1, Rb1, and Rg3 ginsenosides (standardized to 8% total ginsenosides)</strong>. This 60mg fraction supports mitochondrial ATP synthesis, cardiorespiratory endurance, and rapid recovery from late-evening mental and physical fatigue.
              </p>
              <div class="hm-botanical-chapter__telemetry">
                <span><strong>STANDARDIZATION:</strong> 8% Total Ginsenosides (Rg1, Rb1, Rg3)</span>
                <span><strong>PER 20-CAP BOTTLE:</strong> 1,200 mg Total</span>
                <span><strong>BIO-SYNERGY:</strong> Cellular ATP &amp; Endothelial Support</span>
              </div>
            </article>

            <!-- Active 06: Tribulus & Zinc Picolinate 30mg -->
            <article class="hm-botanical-chapter" id="hm-active-tribulus-zinc" style="border-bottom:none;">
              <div class="hm-botanical-chapter__top">
                <span class="hm-botanical-chapter__code">BOTANICAL ACTIVE 06 · CODE HM-ACT-06 · 6% OF CAPSULE MASS</span>
                <span class="hm-botanical-chapter__dosage">30 mg</span>
              </div>
              <h3 class="hm-botanical-chapter__title">
                Tribulus Terrestris Saponins &amp; Zinc Picolinate Bio-Cofactor Matrix
              </h3>
              <p class="hm-botanical-chapter__latin">
                Taxonomic &amp; Mineral Source: <em>Tribulus terrestris L. (45% Furostanol Saponins) + Organic Zinc Picolinate</em> · Bahasa Malaysia: <em>Kompleks Tribulus &amp; Zink Pikolinat</em>
              </p>
              <p class="hm-botanical-chapter__body">
                Completing the exact 500mg capsule architecture is a 30mg micronutrient and phytosterol cofactor blend uniting standardized <em>Tribulus terrestris</em> furostanol saponins with high-absorption Zinc Picolinate. Because adult men in Malaysia lose substantial trace zinc through daily perspiration in tropical heat and humidity, replenishing bioavailable zinc alongside Tongkat Ali ensures the enzymatic pathways governing male vitality remain fully supported.
              </p>
              <div class="hm-botanical-chapter__telemetry">
                <span><strong>STANDARDIZATION:</strong> 45% Saponins + Picolinate Chelate</span>
                <span><strong>PER 20-CAP BOTTLE:</strong> 600 mg Total</span>
                <span><strong>TOTAL CAPSULE SUM:</strong> 150 + 100 + 80 + 80 + 60 + 30 = 500 mg</span>
              </div>
            </article>
          </div>
        </div>
      </section>
`;
}

export function buildHorsemenChapterMS097() {
  return `
      <!-- ====================================================================
           CHAPTER III (MS-097): 18-DAY ACTIVE CYCLE CHRONOLOGY & TROPICAL TIMING
           Days 1–3 Baseline Ignition, Days 4–10 Stamina Consolidation,
           Days 11–18 Peak Vitality & Day-18 Seamless Refill Trigger
           ==================================================================== -->
      <section
        id="ms-097-18-day-cycle-chronology"
        class="hm-chronology-stage"
        aria-labelledby="hm-ms097-heading"
      >
        <div class="hm-chronology-header">
          <p class="editorial-kicker">
            CHAPTER III · MS-097 · 18-DAY ACTIVE CYCLE CHRONOLOGY &amp; REFILL ARCHITECTURE
          </p>
          <h2 id="hm-ms097-heading" class="editorial-headline-lg" style="margin-top:0.85rem;margin-bottom:1.15rem;">
            The 18-Day Active Cycle: Why Capsule #18 Triggers Your Seamless Refill Window
          </h2>
          <p style="font-family:'Space Grotesk',sans-serif;font-size:0.98rem;line-height:1.75;color:#B8B3A8;">
            Each bottle of <strong>Horsemen</strong> houses <strong>20 capsules × 500mg</strong>. Rather than waiting until an empty bottle on Day 20—which creates a 2-to-3-day gap while waiting for courier transit—Onyxman engineers Horsemen around an <strong>18-Day Active Conditioning Cycle</strong>. On Day 18, while you still hold <strong>2 reserve capsules (Capsules #19 and #20)</strong>, your automated Google Calendar or WhatsApp concierge reminder fires so your fresh bottle arrives at your doorstep with zero interruption in botanical bio-saturation.
          </p>
        </div>

        <!-- 3-Phase Chronology Ledger (Days 1–3, Days 4–10, Days 11–18 + Day-18 Trigger) -->
        <div class="hm-chronology-ledger">
          <!-- Phase 1: Days 1–3 Baseline Ignition -->
          <article class="hm-chronology-phase" id="hm-cycle-days-1-3">
            <div class="hm-chronology-phase__window">
              <span class="hm-chronology-phase__day-tag">PHASE I · DAYS 1–3 (CAPSULES 01 TO 03)</span>
              <h3 class="hm-chronology-phase__title">Baseline Ignition &amp; Vascular Priming</h3>
            </div>
            <div class="hm-chronology-phase__narrative">
              <p>
                During the initial 72 hours (<strong>1,500mg cumulative botanical intake</strong>), the fast-acting fractions of Horsemen—<strong>80mg Pharmaceutical-Grade L-Arginine HCl</strong>, <strong>80mg Epimedium Sagittatum icariins</strong>, and <strong>60mg 6-Year Korean Red Ginseng</strong>—initiate endothelial nitric oxide precursor availability and cellular ATP support. Taken 45–60 minutes after dinner with 250ml of warm water, men typically note a smoother transition out of post-office lethargy and heightened evening responsiveness without caffeine-induced restlessness.
              </p>
            </div>
            <div class="hm-chronology-phase__metrics">
              <span><strong style="color:#D4AF37;">CUMULATIVE MASS:</strong> 1,500 mg (3 × 500mg)</span>
              <span><strong style="color:#D4AF37;">PRIMARY DRIVERS:</strong> L-Arginine HCl + Epimedium + Red Ginseng</span>
              <span><strong style="color:#D4AF37;">HYDRATION TARGET:</strong> 2.5 Liters / Day</span>
            </div>
          </article>

          <!-- Phase 2: Days 4–10 Stamina Consolidation -->
          <article class="hm-chronology-phase" id="hm-cycle-days-4-10">
            <div class="hm-chronology-phase__window">
              <span class="hm-chronology-phase__day-tag">PHASE II · DAYS 4–10 (CAPSULES 04 TO 10)</span>
              <h3 class="hm-chronology-phase__title">Stamina Consolidation &amp; Adaptogenic Saturation</h3>
            </div>
            <div class="hm-chronology-phase__narrative">
              <p>
                By Day 4 through Day 10 (<strong>5,000mg cumulative intake—halfway through the 20-capsule bottle</strong>), the standardized adaptogenic roots reach steady-state tissue saturation. <strong>150mg Malaysian Tongkat Ali (2.2% Eurycomanone)</strong> and <strong>100mg Gelatinized Black Peruvian Maca</strong> work synergistically with <strong>Zinc Picolinate</strong> to buffer evening stress cortisol and consolidate physical stamina. Evening energy feels grounded, reliable, and sustained across demanding workweeks.
              </p>
            </div>
            <div class="hm-chronology-phase__metrics">
              <span><strong style="color:#D4AF37;">CUMULATIVE MASS:</strong> 5,000 mg (10 × 500mg)</span>
              <span><strong style="color:#D4AF37;">PRIMARY DRIVERS:</strong> Tongkat Ali 100:1 + Black Peruvian Maca</span>
              <span><strong style="color:#D4AF37;">BOTTLE RESERVE:</strong> 10 Capsules Remaining</span>
            </div>
          </article>

          <!-- Phase 3: Days 11–18 Peak Vitality & Day-18 Seamless Refill Trigger -->
          <article class="hm-chronology-phase" id="hm-cycle-days-11-18">
            <div class="hm-chronology-phase__window">
              <span class="hm-chronology-phase__day-tag">PHASE III · DAYS 11–18 (CAPSULES 11 TO 18)</span>
              <h3 class="hm-chronology-phase__title">Peak Vitality &amp; Day-18 Seamless Refill Trigger</h3>
            </div>
            <div class="hm-chronology-phase__narrative">
              <p>
                Across Days 11 to 18 (<strong>9,000mg cumulative botanical delivery</strong>), all six active fractions operate at full physiological harmony—combining baseline adaptogenic tone with rapid evening micro-circulatory readiness. On <strong>Day 18</strong>, exactly <strong>2 capsules (1,000mg / Days 19–20 buffer)</strong> remain in your bottle. Our <strong>Day-18 Refill Reminder</strong> alerts your Google Calendar or WhatsApp so your next bottle dispatches via discreet express courier and lands in your hands before Capsule #20 is consumed.
              </p>
            </div>
            <div class="hm-chronology-phase__metrics">
              <span><strong style="color:#D4AF37;">CUMULATIVE MASS:</strong> 9,000 mg at Day 18 (10,000 mg at Day 20)</span>
              <span><strong style="color:#D4AF37;">REFILL TRIGGER:</strong> Day 18 (2 Buffer Capsules Left)</span>
              <span><strong style="color:#D4AF37;">ZERO-GAP TRANSIT:</strong> 24–48h Courier Window</span>
            </div>
          </article>
        </div>

        <!-- Optimal Malaysian Timing, Post-Dinner Guidance & Tropical Hydration Protocol -->
        <div class="hm-tropical-protocol-strip">
          <div class="hm-tropical-protocol-col">
            <h3>01 · Post-Dinner &amp; Pre-Activity Timing (MYT)</h3>
            <p>
              For targeted evening readiness, take <strong>1 capsule (500mg)</strong> with <strong>250ml–300ml of warm water 45 to 60 minutes after dinner</strong> or before evening physical activity. If your evening meal includes heavy coconut-milk curries, nasi lemak, or char kuey teow, wait a full 60 minutes after eating so dietary lipids do not delay capsule dissolution.
            </p>
          </div>

          <div class="hm-tropical-protocol-col">
            <h3>02 · Malaysian Tropical Climate Hydration</h3>
            <p>
              Across Kuala Lumpur, Penang, Johor Bahru, Kota Kinabalu, and Kuching, ambient daytime temperatures of 31°C–34°C and 75%+ humidity accelerate electrolyte and trace mineral loss. Maintain <strong>2.5 to 3.0 liters of daily water intake</strong> to support optimal L-Arginine HCl endothelial nitric oxide conversion and smooth botanical circulation.
            </p>
          </div>

          <div class="hm-tropical-protocol-col">
            <h3>03 · Kopi, Teh Tarik &amp; Storage Discipline</h3>
            <p>
              Horsemen is <strong>100% caffeine-free</strong>. To prevent dietary tannins in strong <em>kopi O</em> or <em>teh tarik</em> from chelating botanical alkaloids in the stomach, leave a <strong>45-minute buffer</strong> between caffeinated beverages and your capsule. Store your obsidian bottle below <strong>30°C</strong> in a dry wardrobe or bedside drawer away from bathroom steam.
            </p>
          </div>
        </div>
      </section>
`;
}

export function buildHorsemenChapterMS098() {
  return `
      <!-- ====================================================================
           CHAPTER IV (MS-098): HORSEMEN VS. OTHER ONYXMAN FORMULATIONS MATRIX
           + 16-STATE MALAYSIA SAME-DAY / NEXT-DAY DISCREET DELIVERY TABLE
           ==================================================================== -->
      <section
        id="ms-098-comparison-and-malaysia-delivery"
        class="hm-matrix-stage"
        aria-labelledby="hm-ms098-matrix-heading"
      >
        <div style="max-width:900px;">
          <p class="editorial-kicker">
            CHAPTER IV · MS-098 · APOTHECARY FORMULATION MATRIX &amp; 16-STATE LOGISTICS
          </p>
          <h2 id="hm-ms098-matrix-heading" class="editorial-headline-lg" style="margin-top:0.85rem;margin-bottom:1.15rem;">
            Horsemen vs. Hammer of Thor vs. Grow XL vs. Magnum Pump XR
          </h2>
          <p style="font-family:'Space Grotesk',sans-serif;font-size:0.96rem;line-height:1.75;color:#B8B3A8;">
            Every formulation in the Onyxman Malaysia vault is priced identically at <strong>RM 159 for 1 bottle</strong>, <strong>RM 318 for 2 bottles</strong>, and <strong>RM 477 for 3 bottles</strong>. This uniform pricing architecture ensures you select your reserve strictly by physiological mechanism, capsule count (20 vs. 30 capsules), and intake timing.
          </p>
        </div>

        <!-- 4-Formulation Architectural Comparison Table -->
        <div class="hm-table-scroll-container" role="region" aria-label="Onyxman 4-Formulation Comparison Table" tabindex="0">
          <table class="hm-architectural-table">
            <thead>
              <tr>
                <th scope="col">SPECIFICATION DIMENSION</th>
                <th scope="col" class="hm-architectural-table__highlight-col">HORSEMEN (FLAGSHIP I)</th>
                <th scope="col">HAMMER OF THOR (FLAGSHIP II)</th>
                <th scope="col">GROW XL (FLAGSHIP III)</th>
                <th scope="col">MAGNUM PUMP XR (FLAGSHIP IV)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Official SKU &amp; MPN</strong></td>
                <td class="hm-architectural-table__highlight-col">SKU: ONYX-HM-20<br />MPN: HM-500MG-20MY<br />GTIN: 9550000102011</td>
                <td>SKU: ONYX-HT-20<br />MPN: HT-TRIB-20MY<br />GTIN: 9550000102028</td>
                <td>SKU: ONYX-GX-30<br />MPN: GXL-30CAP-MY<br />GTIN: 9550000102035</td>
                <td>SKU: ONYX-MP-30<br />MPN: MPXR-30BLK-MY<br />GTIN: 9550000102042</td>
              </tr>
              <tr>
                <td><strong>Bottle Label Inscription</strong></td>
                <td class="hm-architectural-table__highlight-col">Man Virility Enhancement Herbal Supplement — 20 Capsules × 500mg (20 Kapsul × 500mg)</td>
                <td>Men’s Health — Tribulus Terrestris — 20 Veg. Capsules (Kapsul Vegetarian)</td>
                <td>Extra-Strength Enhancement Male Performance Blend — 30 Capsules</td>
                <td>Testosterone Pro Series — Maximum Strength — 30 Black Capsules (Oral Supplement)</td>
              </tr>
              <tr>
                <td><strong>Capsule Count &amp; Net Mass</strong></td>
                <td class="hm-architectural-table__highlight-col">20 Capsules × 500mg<br />(10,000mg Total Per Bottle)</td>
                <td>20 Veg. Capsules × 500mg<br />(10,000mg Total Per Bottle)</td>
                <td>30 Capsules × 550mg<br />(16,500mg Total Per Bottle)</td>
                <td>30 Black Capsules × 600mg<br />(18,000mg Total Per Bottle)</td>
              </tr>
              <tr>
                <td><strong>Lead Botanical &amp; Amino Matrix</strong></td>
                <td class="hm-architectural-table__highlight-col">Malaysian Tongkat Ali 150mg + Black Maca 100mg + Epimedium 80mg + L-Arginine HCl 80mg + Red Ginseng 60mg + Tribulus/Zinc 30mg</td>
                <td>Tribulus Terrestris (60% Saponins) 200mg + Peruvian Maca 100mg + Tongkat Ali 80mg + Ashwagandha 60mg + Chelated Zinc</td>
                <td>Tongkat Ali 140mg + Maca 110mg + L-Arginine/Citrulline 100mg + Muira Puama 80mg + Saw Palmetto 70mg + Ginkgo/Ginseng 50mg</td>
                <td>L-Arginine HCl 180mg + L-Citrulline Malate 140mg + Tribulus 110mg + Tongkat Ali 90mg + Thai Black Ginger 65mg + Bioperine 15mg</td>
              </tr>
              <tr>
                <td><strong>Primary Physiological Focus</strong></td>
                <td class="hm-architectural-table__highlight-col">Rapid 45–60 Min Evening Readiness &amp; Dual-Mode Stamina Conditioning</td>
                <td>100% Plant-Capsule Tribulus Saponin Drive &amp; Muscular Recovery</td>
                <td>All-Day 30-Day Baseline Vitality &amp; Micro-Circulation Nutrition</td>
                <td>Extended-Release Nitric Oxide Vascular Precursor &amp; Gym/Evening Output</td>
              </tr>
              <tr>
                <td><strong>Active Cycle &amp; Refill Trigger</strong></td>
                <td class="hm-architectural-table__highlight-col">18-Day Active Cycle<br />(Day-18 Refill Reminder)</td>
                <td>18-Day Active Cycle<br />(Day-18 Refill Reminder)</td>
                <td>25-Day Active Cycle<br />(Day-25 Refill Reminder)</td>
                <td>25-Day Active Cycle<br />(Day-25 Refill Reminder)</td>
              </tr>
              <tr>
                <td><strong>Official Malaysia Pricing</strong></td>
                <td class="hm-architectural-table__highlight-col">1B: RM 159 · 2B: RM 318 · 3B: RM 477</td>
                <td>1B: RM 159 · 2B: RM 318 · 3B: RM 477</td>
                <td>1B: RM 159 · 2B: RM 318 · 3B: RM 477</td>
                <td>1B: RM 159 · 2B: RM 318 · 3B: RM 477</td>
              </tr>
              <tr>
                <td><strong>Direct Formulation Route</strong></td>
                <td class="hm-architectural-table__highlight-col"><strong>Viewing Current Flagship</strong></td>
                <td><a href="/products/hammer-of-thor/" style="color:#D4AF37;text-decoration:underline;">Inspect Hammer of Thor →</a></td>
                <td><a href="/products/grow-xl/" style="color:#D4AF37;text-decoration:underline;">Inspect Grow XL →</a></td>
                <td><a href="/products/magnum-pump-xr/" style="color:#D4AF37;text-decoration:underline;">Inspect Magnum Pump XR →</a></td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- 16-State & Federal Territory Malaysia Same-Day / Next-Day Discreet Delivery Table -->
        <div style="max-width:900px;margin-top:4rem;">
          <p class="editorial-kicker">
            NATIONWIDE DISCREET LOGISTICS · ALL 13 STATES &amp; 3 FEDERAL TERRITORIES
          </p>
          <h3 class="editorial-headline-lg" style="margin-top:0.75rem;margin-bottom:1rem;">
            16-State Malaysia Same-Day &amp; Next-Day Unmarked Parcel Delivery Schedule
          </h3>
          <p style="font-family:'Space Grotesk',sans-serif;font-size:0.95rem;line-height:1.72;color:#B8B3A8;">
            Every Horsemen order is dispatched from our central Kuala Lumpur vault inside a plain, unbranded security carton under the neutral sender name <strong>OM Fulfilment Logistics</strong>. Inspect the transit window, COD eligibility, and dedicated regional hub for your Malaysian state below:
          </p>
        </div>

        <div class="hm-table-scroll-container" role="region" aria-label="16-State Malaysia Discreet Delivery Schedule" tabindex="0">
          <table class="hm-architectural-table" id="hm-16-state-delivery-table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">STATE / FEDERAL TERRITORY</th>
                <th scope="col">MAJOR CITIES &amp; DISTRICTS COVERED</th>
                <th scope="col">DISCREET TRANSIT WINDOW</th>
                <th scope="col">COURIER &amp; RUNNER PROTOCOL</th>
                <th scope="col">PAYMENT &amp; SHIPPING</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>01</td>
                <td><a href="/malaysia-delivery/kuala-lumpur/" style="color:#F3E5AB;text-decoration:underline;"><strong>Kuala Lumpur (W.P.)</strong></a></td>
                <td>KLCC, Bukit Bintang, Bangsar, Mont Kiara, Cheras, Ampang, Setapak, Sri Petaling</td>
                <td class="hm-architectural-table__highlight-col">Same-Day (3–5 Hours) or Next-Day Express</td>
                <td>Klang Valley Private Runner / NinjaVan Discreet</td>
                <td>Free Shipping · FPX / DuitNow / COD</td>
              </tr>
              <tr>
                <td>02</td>
                <td><a href="/malaysia-delivery/selangor/" style="color:#F3E5AB;text-decoration:underline;"><strong>Selangor Darul Ehsan</strong></a></td>
                <td>Petaling Jaya, Subang Jaya, Shah Alam, Damansara, Puchong, Klang, Kajang, Cyberjaya</td>
                <td class="hm-architectural-table__highlight-col">Same-Day (3–5 Hours) or Next-Day Express</td>
                <td>Klang Valley Private Runner / PosLaju Priority</td>
                <td>Free Shipping · FPX / DuitNow / COD</td>
              </tr>
              <tr>
                <td>03</td>
                <td><a href="/malaysia-delivery/putrajaya/" style="color:#F3E5AB;text-decoration:underline;"><strong>Putrajaya (W.P.)</strong></a></td>
                <td>Precincts 1–20, Diplomatic Enclave, IOI Resort City, Seri Kembangan Corridor</td>
                <td class="hm-architectural-table__highlight-col">Same-Day (3–5 Hours) or Next-Day Express</td>
                <td>Klang Valley Private Runner / J&amp;T VIP</td>
                <td>Free Shipping · FPX / DuitNow / COD</td>
              </tr>
              <tr>
                <td>04</td>
                <td><a href="/malaysia-delivery/penang/" style="color:#F3E5AB;text-decoration:underline;"><strong>Penang (Pulau Pinang)</strong></a></td>
                <td>George Town, Bayan Lepas, Tanjung Tokong, Jelutong, Butterworth, Bukit Mertajam</td>
                <td>1–2 Business Days Express</td>
                <td>NinjaVan Malaysia Discreet / J&amp;T VIP</td>
                <td>Free Shipping · FPX / DuitNow / COD</td>
              </tr>
              <tr>
                <td>05</td>
                <td><a href="/malaysia-delivery/johor-bahru/" style="color:#F3E5AB;text-decoration:underline;"><strong>Johor Darul Ta’zim</strong></a></td>
                <td>Johor Bahru, Iskandar Puteri, Skudai, Mount Austin, Batu Pahat, Muar, Kluang</td>
                <td>1–2 Business Days Express</td>
                <td>NinjaVan Malaysia Discreet / PosLaju Priority</td>
                <td>Free Shipping · FPX / DuitNow / COD</td>
              </tr>
              <tr>
                <td>06</td>
                <td><a href="/malaysia-delivery/perak-ipoh/" style="color:#F3E5AB;text-decoration:underline;"><strong>Perak Darul Ridzuan</strong></a></td>
                <td>Ipoh, Taiping, Sitiawan, Seri Manjung, Teluk Intan, Kampar, Kuala Kangsar</td>
                <td>1–2 Business Days Express</td>
                <td>NinjaVan Malaysia Discreet / J&amp;T VIP</td>
                <td>Free Shipping · FPX / DuitNow / COD</td>
              </tr>
              <tr>
                <td>07</td>
                <td><a href="/malaysia-delivery/melaka/" style="color:#F3E5AB;text-decoration:underline;"><strong>Melaka</strong></a></td>
                <td>Bandaraya Melaka, Ayer Keroh, Batu Berendam, Klebang, Alor Gajah, Jasin</td>
                <td>1–2 Business Days Express</td>
                <td>NinjaVan Malaysia Discreet / PosLaju Priority</td>
                <td>Free Shipping · FPX / DuitNow / COD</td>
              </tr>
              <tr>
                <td>08</td>
                <td><a href="/malaysia-delivery/negeri-sembilan-seremban/" style="color:#F3E5AB;text-decoration:underline;"><strong>Negeri Sembilan</strong></a></td>
                <td>Seremban, Seremban 2, Senawang, Nilai, Port Dickson, Lukut, Tampin</td>
                <td>1–2 Business Days Express</td>
                <td>NinjaVan Malaysia Discreet / J&amp;T VIP</td>
                <td>Free Shipping · FPX / DuitNow / COD</td>
              </tr>
              <tr>
                <td>09</td>
                <td><a href="/malaysia-delivery/pahang-kuantan/" style="color:#F3E5AB;text-decoration:underline;"><strong>Pahang Darul Makmur</strong></a></td>
                <td>Kuantan, Indera Mahkota, Temerloh, Bentong, Genting Sempah, Pekan</td>
                <td>1–2 Business Days Express</td>
                <td>PosLaju Priority / J&amp;T Express VIP</td>
                <td>Free Shipping · FPX / DuitNow / COD</td>
              </tr>
              <tr>
                <td>10</td>
                <td><a href="/malaysia-delivery/kedah-alor-setar/" style="color:#F3E5AB;text-decoration:underline;"><strong>Kedah Darul Aman</strong></a></td>
                <td>Alor Setar, Sungai Petani, Kulim Hi-Tech, Jitra, Pulau Langkawi</td>
                <td>1–2 Business Days Express</td>
                <td>NinjaVan Malaysia Discreet / PosLaju Priority</td>
                <td>Free Shipping · FPX / DuitNow / COD</td>
              </tr>
              <tr>
                <td>11</td>
                <td><a href="/malaysia-delivery/kelantan-kota-bharu/" style="color:#F3E5AB;text-decoration:underline;"><strong>Kelantan Darul Naim</strong></a></td>
                <td>Kota Bharu, Kubang Kerian, Wakaf Che Yeh, Pasir Mas, Tanah Merah, Tumpat</td>
                <td>1–2 Business Days Express</td>
                <td>PosLaju Priority / J&amp;T Express VIP</td>
                <td>Free Shipping · FPX / DuitNow / COD</td>
              </tr>
              <tr>
                <td>12</td>
                <td><a href="/malaysia-delivery/terengganu-kuala-terengganu/" style="color:#F3E5AB;text-decoration:underline;"><strong>Terengganu Darul Iman</strong></a></td>
                <td>Kuala Terengganu, Gong Badak, Chukai (Kemaman), Dungun, Kerteh, Besut</td>
                <td>1–2 Business Days Express</td>
                <td>PosLaju Priority / J&amp;T Express VIP</td>
                <td>Free Shipping · FPX / DuitNow / COD</td>
              </tr>
              <tr>
                <td>13</td>
                <td><a href="/malaysia-delivery/perlis-kangar/" style="color:#F3E5AB;text-decoration:underline;"><strong>Perlis Indera Kayangan</strong></a></td>
                <td>Kangar, Arau, Kuala Perlis, Padang Besar, Chuping</td>
                <td>1–2 Business Days Express</td>
                <td>PosLaju Priority / NinjaVan Discreet</td>
                <td>Free Shipping · FPX / DuitNow / COD</td>
              </tr>
              <tr>
                <td>14</td>
                <td><a href="/malaysia-delivery/sabah-kota-kinabalu/" style="color:#F3E5AB;text-decoration:underline;"><strong>Sabah (East Malaysia)</strong></a></td>
                <td>Kota Kinabalu, Penampang, Sandakan, Tawau, Lahad Datu, Keningau</td>
                <td>2–4 Business Days Discreet Air Freight</td>
                <td>PosLaju Air Priority / J&amp;T Sabah Express</td>
                <td>Free on 2+ Bottles (RM 12 for 1B) · FPX / QR / COD</td>
              </tr>
              <tr>
                <td>15</td>
                <td><a href="/malaysia-delivery/sarawak-kuching/" style="color:#F3E5AB;text-decoration:underline;"><strong>Sarawak (East Malaysia)</strong></a></td>
                <td>Kuching, Samarahan, Miri, Sibu, Bintulu, Sri Aman, Limbang</td>
                <td>2–4 Business Days Discreet Air Freight</td>
                <td>PosLaju Air Priority / NinjaVan Sarawak</td>
                <td>Free on 2+ Bottles (RM 12 for 1B) · FPX / QR / COD</td>
              </tr>
              <tr>
                <td>16</td>
                <td><a href="/malaysia-delivery/labuan/" style="color:#F3E5AB;text-decoration:underline;"><strong>Labuan (W.P. Duty-Free Island)</strong></a></td>
                <td>Bandar Labuan (Victoria), Financial Park, Rancha-Rancha, Kiamsam</td>
                <td>2–4 Business Days Discreet Air Freight</td>
                <td>PosLaju Air Priority / Labuan Discreet Courier</td>
                <td>Free on 2+ Bottles (RM 12 for 1B) · FPX / DuitNow QR</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
`;
}

export function buildHorsemenChapterMS099() {
  const faqItemsHtml = HORSEMEN_FAQS.map(
    (item, index) => `
          <details class="hm-faq-item" id="${item.id}" ${index === 0 ? 'open' : ''}>
            <summary>
              <div class="hm-faq-item__left">
                <span class="hm-faq-item__meta">QUESTION ${String(index + 1).padStart(2, '0')} · ${item.code} · ${item.category}</span>
                <h3 class="hm-faq-item__question">${item.questionEn}</h3>
              </div>
              <span class="hm-faq-item__icon" aria-hidden="true">+</span>
            </summary>
            <div class="hm-faq-item__answer">
              <p>${item.answerEn}</p>
            </div>
          </details>`
  ).join('\n');

  return `
      <!-- ====================================================================
           CHAPTER V (MS-099): COMPLETE 10-QUESTION HORSEMEN MALAYSIA FAQ ACCORDION
           + DIRECT DISCREET RESERVE FINALE STAGE
           ==================================================================== -->
      <section
        id="ms-099-horsemen-faq-accordion"
        class="hm-faq-stage"
        aria-labelledby="hm-ms099-faq-heading"
      >
        <div style="max-width:880px;">
          <p class="editorial-kicker">
            CHAPTER V · MS-099 · VERIFIED APOTHECARY DOSSIER &amp; TECHNICAL FAQ
          </p>
          <h2 id="hm-ms099-faq-heading" class="editorial-headline-lg" style="margin-top:0.85rem;margin-bottom:1.15rem;">
            10-Point Horsemen Malaysia Technical &amp; Fulfilment Intelligence
          </h2>
          <p style="font-family:'Space Grotesk',sans-serif;font-size:0.96rem;line-height:1.75;color:#B8B3A8;">
            Complete specifications covering capsule density (<strong>20 Capsules × 500mg / 20 Kapsul × 500mg</strong>), the <strong>Day-18 Refill Reminder Protocol</strong>, unmarked parcel privacy, and nationwide Malaysia courier dispatch. For direct concierge inquiries, email <a href="mailto:sales@onyxman.my" style="color:#F3E5AB;text-decoration:underline;">sales@onyxman.my</a>, <a href="mailto:info@onyxman.my" style="color:#F3E5AB;text-decoration:underline;">info@onyxman.my</a>, or <a href="mailto:waleedshoaibofficial@gmail.com" style="color:#F3E5AB;text-decoration:underline;">waleedshoaibofficial@gmail.com</a>.
          </p>
        </div>

        <div class="hm-faq-ledger">
${faqItemsHtml}
        </div>

        <!-- Architectural Finale Acquisition Horizon -->
        <div
          style="margin-top:4.5rem;padding:3rem 0 1rem;border-top:1px solid rgba(212,175,55,0.38);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:2rem;"
        >
          <div style="max-width:660px;">
            <p class="editorial-kicker">READY FOR IMMEDIATE KUALA LUMPUR VAULT DISPATCH</p>
            <h3 class="editorial-headline-lg" style="margin-top:0.65rem;margin-bottom:0.75rem;">
              Reserve Your Horsemen 20-Capsule × 500mg Protocol Today
            </h3>
            <p style="font-family:'Space Grotesk',sans-serif;font-size:0.94rem;line-height:1.7;color:#B8B3A8;">
              1 Bottle (20 Capsules) <strong>RM 159</strong> · 2 Bottles (40 Capsules) <strong>RM 318</strong> · 3 Bottles (60 Capsules) <strong>RM 477</strong>. Dispatched in a 100% plain unmarked security parcel with Day-18 Refill Calendar integration.
            </p>
          </div>
          <div style="display:flex;flex-wrap:wrap;gap:1rem;">
            <button
              type="button"
              class="cta-foil-primary"
              data-open-order-drawer
              data-order-product="horsemen"
              data-order-qty="1"
            >
              <span>OPEN EXPRESS DISCREET ORDER DRAWER — RM 159</span>
              <span aria-hidden="true">→</span>
            </button>
            <a href="/ms/horsemen-malaysia/" class="cta-hairline-secondary">
              <span>BACA DALAM BAHASA MALAYSIA (BM)</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <!-- Interactive Horsemen Flagship Controller (Tier Selector & 3-Angle Studio Lens) -->
      <script>
        (function () {
          var tierButtons = document.querySelectorAll('[data-hm-tier-btn]');
          var primaryCta = document.getElementById('hm-hero-primary-order-cta');
          var primaryCtaText = document.getElementById('hm-hero-primary-cta-text');
          var tierIndicator = document.getElementById('hm-selected-tier-indicator');

          if (tierButtons.length && primaryCta) {
            tierButtons.forEach(function (btn) {
              btn.addEventListener('click', function () {
                var bottles = btn.getAttribute('data-tier-bottles') || '1';
                var price = btn.getAttribute('data-tier-price') || 'RM 159';
                tierButtons.forEach(function (b) {
                  b.setAttribute('aria-checked', b === btn ? 'true' : 'false');
                });
                primaryCta.setAttribute('data-order-qty', bottles);
                if (primaryCtaText) {
                  var unitWord = bottles === '1' ? 'BOTTLE' : 'BOTTLES';
                  primaryCtaText.textContent =
                    'RESERVE DISCREET DISPATCH · ' + bottles + ' ' + unitWord + ' — ' + price;
                }
                if (tierIndicator) {
                  var unitLabel = bottles === '1' ? 'BOTTLE' : 'BOTTLES';
                  tierIndicator.textContent = 'ACTIVE SELECTION: ' + bottles + ' ' + unitLabel + ' · ' + price;
                }
              });
            });
          }

          var lensButtons = document.querySelectorAll('[data-hm-lens-webp]');
          var sourceWebp = document.getElementById('hm-hero-stage-source-webp');
          var mainImg = document.getElementById('hm-hero-stage-main-img');
          var captionReadout = document.getElementById('hm-bottle-lens-caption-readout');

          if (lensButtons.length && mainImg) {
            lensButtons.forEach(function (btn) {
              btn.addEventListener('click', function () {
                var webp = btn.getAttribute('data-hm-lens-webp');
                var png = btn.getAttribute('data-hm-lens-png');
                var cap = btn.getAttribute('data-hm-lens-caption');
                lensButtons.forEach(function (b) {
                  b.setAttribute('aria-pressed', b === btn ? 'true' : 'false');
                });
                if (sourceWebp && webp) sourceWebp.setAttribute('srcset', webp);
                if (png) mainImg.setAttribute('src', png);
                if (captionReadout && cap) captionReadout.innerHTML = cap;
              });
            });
          }
        })();
      </script>
`;
}

export function buildHorsemenExtendedChronologyAndSynergy() {
  const dailyRows = [
    {
      day: 'Day 01',
      capsule: 'Capsule #01 (500mg)',
      cumulativeMg: '500 mg',
      remaining: '19 Capsules',
      focus: 'Initial gastric dissolution (20–30 min in warm water); L-Arginine HCl (80mg) & Epimedium (80mg) initiate endothelial nitric oxide precursor availability.',
      hydration: '2.5L plain water · Take 45–60 min post-dinner',
    },
    {
      day: 'Day 02',
      capsule: 'Capsule #02 (500mg)',
      cumulativeMg: '1,000 mg',
      remaining: '18 Capsules',
      focus: '6-Year Korean Red Ginseng (60mg, 8% ginsenosides) supports cellular ATP turnover and reduces late-evening work fatigue.',
      hydration: '2.5L plain water · 45-min gap from kopi/teh tarik',
    },
    {
      day: 'Day 03',
      capsule: 'Capsule #03 (500mg)',
      cumulativeMg: '1,500 mg',
      remaining: '17 Capsules',
      focus: 'Completion of Phase I Baseline Ignition; peripheral warmth and evening readiness stabilize without synthetic stimulant jitters.',
      hydration: '2.5L–2.8L water across tropical afternoon heat',
    },
    {
      day: 'Day 04',
      capsule: 'Capsule #04 (500mg)',
      cumulativeMg: '2,000 mg',
      remaining: '16 Capsules',
      focus: 'Entry into Phase II Stamina Consolidation; Malaysian Tongkat Ali 100:1 (150mg) quassinoids begin cumulative adaptogenic conditioning.',
      hydration: '2.5L water · Consistent evening intake window',
    },
    {
      day: 'Day 05',
      capsule: 'Capsule #05 (500mg)',
      cumulativeMg: '2,500 mg',
      remaining: '15 Capsules',
      focus: 'Quarter-bottle milestone (2,500mg delivered); Black Peruvian Maca (100mg, 0.6% macamides) reinforces non-caffeinated physical endurance.',
      hydration: '2.5L water · Avoid heavy oily suppers pre-dose',
    },
    {
      day: 'Day 06',
      capsule: 'Capsule #06 (500mg)',
      cumulativeMg: '3,000 mg',
      remaining: '14 Capsules',
      focus: 'Synergistic interplay between Tongkat Ali eurycomanone and Zinc Picolinate (30mg complex) supports normal male vitality equilibrium.',
      hydration: '2.6L water · Post-dinner warm water intake',
    },
    {
      day: 'Day 07',
      capsule: 'Capsule #07 (500mg)',
      cumulativeMg: '3,500 mg',
      remaining: '13 Capsules',
      focus: 'Full Week-1 completion; cortisol moderation after high-stress Kuala Lumpur / Selangor / Johor office hours becomes noticeably steadier.',
      hydration: '2.6L water · Restorative sleep quality preserved',
    },
    {
      day: 'Day 08',
      capsule: 'Capsule #08 (500mg)',
      cumulativeMg: '4,000 mg',
      remaining: '12 Capsules',
      focus: 'Sustained endothelial nitric oxide substrate pool from daily 80mg L-Arginine HCl + 80mg Epimedium Sagittatum flavonoid icariins.',
      hydration: '2.6L water · Pre-evening physical readiness',
    },
    {
      day: 'Day 09',
      capsule: 'Capsule #09 (500mg)',
      cumulativeMg: '4,500 mg',
      remaining: '11 Capsules',
      focus: 'Aerobic recovery and muscular stamina supported by cumulative Panax Ginseng Rg1/Rb1/Rg3 ginsenosides and Tribulus saponins.',
      hydration: '2.7L water · Active tropical electrolyte balance',
    },
    {
      day: 'Day 10',
      capsule: 'Capsule #10 (500mg)',
      cumulativeMg: '5,000 mg',
      remaining: '10 Capsules',
      focus: 'Half-Bottle Milestone (5,000mg total actives absorbed); Phase II Stamina Consolidation reaches full mid-cycle equilibrium.',
      hydration: '2.7L water · 50% of 20-capsule reserve remaining',
    },
    {
      day: 'Day 11',
      capsule: 'Capsule #11 (500mg)',
      cumulativeMg: '5,500 mg',
      remaining: '9 Capsules',
      focus: 'Entry into Phase III Peak Vitality Window; dual-mode adaptability allows seamless evening performance and daytime vitality.',
      hydration: '2.7L water · Warm water dissolution protocol',
    },
    {
      day: 'Day 12',
      capsule: 'Capsule #12 (500mg)',
      cumulativeMg: '6,000 mg',
      remaining: '8 Capsules',
      focus: 'Cumulative 1,800mg Tongkat Ali + 1,200mg Black Maca delivered across 12 days; peak adaptogenic resilience against evening fatigue.',
      hydration: '2.7L water · Zero synthetic crash or tolerance',
    },
    {
      day: 'Day 13',
      capsule: 'Capsule #13 (500mg)',
      cumulativeMg: '6,500 mg',
      remaining: '7 Capsules',
      focus: 'Micro-circulatory tone and physical confidence supported across both workweek evenings and weekend physical exertion.',
      hydration: '2.7L water · Store bottle below 30°C dry cabinet',
    },
    {
      day: 'Day 14',
      capsule: 'Capsule #14 (500mg)',
      cumulativeMg: '7,000 mg',
      remaining: '6 Capsules',
      focus: 'Full Week-2 completion (70% of bottle utilized); steady-state bio-saturation across all 6 standardized botanical fractions.',
      hydration: '2.8L water · Consistent post-dinner timing',
    },
    {
      day: 'Day 15',
      capsule: 'Capsule #15 (500mg)',
      cumulativeMg: '7,500 mg',
      remaining: '5 Capsules',
      focus: 'Three-quarter bottle milestone (7,500mg delivered); sustained nitric oxide & adaptogenic synergy at peak physiological output.',
      hydration: '2.8L water · 5 capsules remaining in vessel',
    },
    {
      day: 'Day 16',
      capsule: 'Capsule #16 (500mg)',
      cumulativeMg: '8,000 mg',
      remaining: '4 Capsules',
      focus: 'Pre-refill conditioning check; 4 capsules (2,000mg) remain to anchor uninterrupted momentum through Day 20.',
      hydration: '2.8L water · Prepare for Day-18 refill window',
    },
    {
      day: 'Day 17',
      capsule: 'Capsule #17 (500mg)',
      cumulativeMg: '8,500 mg',
      remaining: '3 Capsules',
      focus: 'Eve of the Day-18 Refill Trigger; full-spectrum vitality, evening stamina, and post-work recovery operate at maximum consistency.',
      hydration: '2.8L water · 72 hours of capsule buffer remaining',
    },
    {
      day: 'Day 18 (REFILL TRIGGER)',
      capsule: 'Capsule #18 (500mg)',
      cumulativeMg: '9,000 mg',
      remaining: '2 Buffer Capsules',
      focus: 'AUTOMATED DAY-18 REFILL REMINDER FIRES: Reserve your next bottle today (RM 159 / RM 318 / RM 477) so courier transit completes while Capsules #19 & #20 are active.',
      hydration: '1-Click Express Order or WhatsApp Concierge Dispatch',
    },
    {
      day: 'Day 19 (TRANSIT BUFFER I)',
      capsule: 'Capsule #19 (500mg)',
      cumulativeMg: '9,500 mg',
      remaining: '1 Buffer Capsule',
      focus: 'Your fresh unmarked parcel is in Same-Day Klang Valley runner transit or 1–2 day Peninsular Malaysia express courier dispatch while you take Capsule #19.',
      hydration: 'Zero interruption in daily botanical bio-saturation',
    },
    {
      day: 'Day 20 (CYCLE HANDOFF)',
      capsule: 'Capsule #20 (500mg)',
      cumulativeMg: '10,000 mg (Full Bottle)',
      remaining: '0 (Next Bottle Ready)',
      focus: 'Complete 10,000mg (20 × 500mg) Bottle #1 cycle achieved; seamless Day-21 transition into Bottle #2 without a single missed evening.',
      hydration: 'Continuous Cycle II Momentum Initiated',
    },
  ];

  const rowsHtml = dailyRows
    .map((r, i) => {
      const isTrigger = i === 17;
      const highlightClass = isTrigger ? ' class="hm-architectural-table__highlight-col"' : '';
      return `
              <tr${highlightClass}>
                <td><strong>${r.day}</strong></td>
                <td>${r.capsule}</td>
                <td>${r.cumulativeMg}</td>
                <td>${r.remaining}</td>
                <td>${r.focus}</td>
                <td>${r.hydration}</td>
              </tr>`;
    })
    .join('\n');

  return `
      <!-- ====================================================================
           SUPPLEMENTAL CHRONOLOGY TELEMETRY (MS-096 & MS-097 DEEP MATRIX):
           COMPLETE 20-CAPSULE DAY-BY-DAY BIO-SATURATION & DAY-18 REFILL LEDGER
           ==================================================================== -->
      <section
        id="ms-097-daily-20-capsule-telemetry-ledger"
        class="hm-matrix-stage"
        aria-labelledby="hm-daily-ledger-heading"
        style="background-color:#0B0C10;"
      >
        <div style="max-width:920px;">
          <p class="editorial-kicker">
            20-CAPSULE × 500MG PRECISION CHRONOLOGY · DAY 01 TO DAY 20 TELEMETRY
          </p>
          <h2 id="hm-daily-ledger-heading" class="editorial-headline-lg" style="margin-top:0.85rem;margin-bottom:1.15rem;">
            Capsule-by-Capsule 10,000mg Bio-Saturation &amp; Day-18 Refill Schedule
          </h2>
          <p style="font-family:'Space Grotesk',sans-serif;font-size:0.95rem;line-height:1.72;color:#B8B3A8;">
            Track how each <strong>500mg Horsemen capsule</strong> compounds from <strong>500mg on Day 01</strong> to <strong>9,000mg at the Day-18 Refill Trigger</strong> and <strong>10,000mg at Day 20</strong>, ensuring zero drop-off while your unmarked courier parcel transits across Malaysia:
          </p>
        </div>

        <div class="hm-table-scroll-container" role="region" aria-label="20-Capsule Daily Bio-Saturation Schedule" tabindex="0">
          <table class="hm-architectural-table">
            <thead>
              <tr>
                <th scope="col">CYCLE DAY</th>
                <th scope="col">CAPSULE UNIT</th>
                <th scope="col">CUMULATIVE ACTIVES</th>
                <th scope="col">BOTTLE RESERVE</th>
                <th scope="col">PHYSIOLOGICAL &amp; BIOCHEMICAL MILESTONE</th>
                <th scope="col">TROPICAL PROTOCOL NOTE</th>
              </tr>
            </thead>
            <tbody>
${rowsHtml}
            </tbody>
          </table>
        </div>
      </section>
`;
}

export function generateHorsemenEnHtml() {
  const bodyHtml = [
    buildHorsemenBodyContent(),
    buildHorsemenChapterMS096(),
    buildHorsemenChapterMS097(),
    buildHorsemenExtendedChronologyAndSynergy(),
    buildHorsemenChapterMS098(),
    buildHorsemenChapterMS099(),
  ].join('\n');

  const schemaGraph = buildHorsemenSchemaGraph();

  return renderLuxuryShell({
    lang: 'en-MY',
    title:
      'Horsemen Malaysia (20 Capsules x 500mg) — Man Virility Enhancement Herbal Supplement | RM 159 Onyxman.my',
    description:
      'Official Horsemen Malaysia flagship reserve (20 Capsules x 500mg / 20 Kapsul x 500mg, SKU ONYX-HM-20, MPN HM-500MG-20MY, GTIN 9550000102011). 150mg Tongkat Ali, 100mg Black Maca, 80mg Epimedium, 80mg L-Arginine HCl, 60mg Red Ginseng & 30mg Tribulus/Zinc. 1 Bottle RM 159, 2 Bottles RM 318, 3 Bottles RM 477 with 100% discreet delivery across all 16 Malaysia states.',
    canonicalPath: '/horsemen-malaysia/',
    alternatePathEn: '/horsemen-malaysia/',
    alternatePathMs: '/ms/horsemen-malaysia/',
    ogImage: '/assets/products/horsemen-stage.webp',
    activeNav: 'horsemen',
    productSlug: 'horsemen',
    defaultQty: 1,
    includeSealStrip: true,
    extraHeadHtml: HORSEMEN_PAGE_CSS,
    schemaGraphJson: schemaGraph,
    bodyContent: bodyHtml,
  });
}

export function writeHorsemenEnPage() {
  const html = generateHorsemenEnHtml();
  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, html, 'utf8');
  const lineCount = html.split(/\r?\n/).length;
  const byteSize = Buffer.byteLength(html, 'utf8');

  const bannedTokens = [
    '#' + 'FAF8F5',
    'Plus ' + 'Jakarta Sans',
    'border-radius: ' + '999px',
    'repeat(3, ' + '1fr)',
    'repeat(2, ' + '1fr)',
    'repeat(4, ' + '1fr)',
    '// ' + 'TODO',
    '// ' + '...',
    'MAL' + '19',
    'MAL' + '20',
    'KKM' + ' Approved Drug',
    '"aggregateRating"',
  ];
  const bannedHits = bannedTokens.filter((token) => html.includes(token));

  const requiredTokens = [
    'ONYX-HM-20',
    'HM-500MG-20MY',
    '9550000102011',
    'https://onyxman.my/horsemen-malaysia/',
    'https://onyxman.my/ms/horsemen-malaysia/',
    '/assets/products/horsemen-stage.webp',
    '/assets/products/horsemen-portrait.webp',
    '/assets/products/horsemen-cutout.webp',
    'RM 159',
    'RM 318',
    'RM 477',
    '159.00',
    '318.00',
    '477.00',
    'waleedshoaibofficial@gmail.com',
    'sales@onyxman.my',
    'info@onyxman.my',
    'data-order-product="horsemen"',
    '20 Capsules x 500mg',
    '20 Kapsul x 500mg',
    'ms-095-horsemen-hero-stage',
    'ms-096-capsule-architecture-split',
    'ms-097-18-day-cycle-chronology',
    'ms-098-comparison-and-malaysia-delivery',
    'ms-099-horsemen-faq-accordion',
  ];
  const missingTokens = requiredTokens.filter((token) => !html.includes(token));

  const ldMatch = html.match(/<script type="application\/ld\+json">\s*([\s\S]*?)\s*<\/script>/);
  if (!ldMatch) {
    throw new Error('Missing @graph JSON-LD script block in generated HTML');
  }
  const ldJson = JSON.parse(ldMatch[1]);
  const graph = ldJson['@graph'] || [];
  const faqNode = graph.find((n) => n['@type'] === 'FAQPage');
  const pgNode = graph.find((n) => n['@type'] === 'ProductGroup');
  const crumbNode = graph.find((n) => n['@type'] === 'BreadcrumbList');

  if (lineCount < 2600) {
    throw new Error(`Line count ${lineCount} is below mandatory minimum 2,600 lines`);
  }
  if (bannedHits.length > 0) {
    throw new Error(`Banned tokens detected: ${bannedHits.join(', ')}`);
  }
  if (missingTokens.length > 0) {
    throw new Error(`Missing required tokens: ${missingTokens.join(', ')}`);
  }
  if (!faqNode || faqNode.mainEntity.length !== 10) {
    throw new Error(`Expected 10 FAQ items in JSON-LD, found ${faqNode?.mainEntity?.length || 0}`);
  }
  if (!pgNode || pgNode.hasVariant.length !== 3) {
    throw new Error(`Expected 3 ProductGroup variants in JSON-LD, found ${pgNode?.hasVariant?.length || 0}`);
  }
  if (!crumbNode || crumbNode.itemListElement.length !== 3) {
    throw new Error('Invalid BreadcrumbList in JSON-LD');
  }

  console.log(
    `[MS-095..MS-099] Built & Verified ${path.relative(ROOT_DIR, OUTPUT_FILE)} — ${lineCount} lines (${byteSize} bytes) | 0 Banned Tokens | 10 FAQs | 3 ProductGroup Variants | 16 Malaysia States`
  );
  return { outputFile: OUTPUT_FILE, lineCount, byteSize };
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  writeHorsemenEnPage();
}

