#!/usr/bin/env node
/**
 * ONYXMAN.MY — GOOGLE MERCHANT CENTER & RICH-RESULT @GRAPH VALIDATION SUITE (MS-057 TO MS-060)
 * Generates and audits all @graph JSON-LD payloads across:
 * - Homepage & Vault Index (EN + BM)
 * - All 4 Flagship Products (EN + BM: Horsemen, Hammer of Thor, Grow XL, Magnum Pump XR)
 * - Comparisons Matrix & Head-to-Head Pages (EN + BM)
 * - Botanical Ingredient Monographs (EN + BM)
 * - All 16 Malaysia State & Federal Territory Delivery Hubs (EN + BM)
 * - Educational Protocol & Authenticity Guides (EN + BM)
 *
 * Verifies 0 missing required Google Merchant Center / Rich Result fields:
 * price: "159.00", priceCurrency: "MYR", priceValidUntil: "2027-12-31", availability,
 * shippingDetails, hasMerchantReturnPolicy, ProductGroup (159.00 / 318.00 / 477.00),
 * DietarySupplement fields, FAQPage, BreadcrumbList, Service, Article speakable,
 * and zero fake aggregateRating or fake drug registration strings.
 */

import {
  SCHEMA_DOMAIN,
  ORG_ID,
  WEBSITE_ID,
  SHIPPING_MY_ID,
  RETURN_POLICY_MY_ID,
  DEFAULT_PRODUCTS_CATALOG,
  MALAYSIA_STATE_HUBS_CATALOG,
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildShippingAndReturnNodes,
  buildProductGraphSchema,
  buildFAQPageSchema,
  buildBreadcrumbSchema,
  buildStateHubSchema,
  buildArticleSchema,
  buildFullPageGraph,
} from '../src/utils/schema-graph.mjs';

const passedChecks = [];
const failedChecks = [];

function pass(category, message) {
  passedChecks.push({ category, message });
}

function fail(category, message) {
  failedChecks.push({ category, message });
}

function assertCondition(condition, category, message) {
  if (condition) {
    pass(category, message);
  } else {
    fail(category, message);
  }
}

/**
 * Validates common @graph requirements across every generated page payload:
 * - Valid JSON parse
 * - @context === "https://schema.org"
 * - @graph non-empty array
 * - Organization & OnlineStore node (#organization) with sales@onyxman.my & info@onyxman.my
 * - WebSite node (#website) with matching inLanguage
 * - OfferShippingDetails (#shipping-my) & MerchantReturnPolicy (#return-policy)
 * - BreadcrumbList with sequential ListItem positions
 * - FAQPage with Question & AcceptedAnswer nodes
 * - At least one Offer with price: "159.00", priceCurrency: "MYR", availability, shippingDetails, hasMerchantReturnPolicy
 * - Zero fake aggregateRating and zero fake drug claims
 */
function validateFullGraphPayload(rawJsonString, expectedLang, label, extraAssertions = null) {
  let parsed;
  try {
    parsed = JSON.parse(rawJsonString);
    pass(label, 'Valid JSON syntax parsed cleanly');
  } catch (err) {
    fail(label, `JSON parse error: ${err.message}`);
    return;
  }

  assertCondition(
    parsed['@context'] === 'https://schema.org',
    label,
    '@context is "https://schema.org"'
  );
  assertCondition(
    Array.isArray(parsed['@graph']) && parsed['@graph'].length >= 6,
    label,
    `@graph contains ${parsed['@graph']?.length || 0} nodes (>= 6)`
  );

  const graph = parsed['@graph'] || [];

  // 1. Organization & OnlineStore check
  const orgNode = graph.find((n) => n['@id'] === ORG_ID);
  assertCondition(
    Boolean(orgNode) &&
      Array.isArray(orgNode['@type']) &&
      orgNode['@type'].includes('Organization') &&
      orgNode['@type'].includes('OnlineStore') &&
      orgNode.email === 'sales@onyxman.my' &&
      Array.isArray(orgNode.contactPoint) &&
      orgNode.contactPoint.some((c) => c.email === 'sales@onyxman.my') &&
      orgNode.contactPoint.some((c) => c.email === 'info@onyxman.my'),
    label,
    'Organization & OnlineStore node verified with sales@onyxman.my and info@onyxman.my'
  );

  // 2. WebSite check
  const webSiteNode = graph.find((n) => n['@id'] === WEBSITE_ID);
  assertCondition(
    Boolean(webSiteNode) &&
      webSiteNode['@type'] === 'WebSite' &&
      webSiteNode.inLanguage === expectedLang &&
      webSiteNode.publisher?.['@id'] === ORG_ID,
    label,
    `WebSite node verified with inLanguage="${expectedLang}"`
  );

  // 3. Reusable Shipping & Return Policy nodes
  const shippingNode = graph.find((n) => n['@id'] === SHIPPING_MY_ID);
  assertCondition(
    Boolean(shippingNode) &&
      shippingNode['@type'] === 'OfferShippingDetails' &&
      shippingNode.shippingRate?.value === '0.00' &&
      shippingNode.shippingRate?.currency === 'MYR' &&
      shippingNode.deliveryTime?.handlingTime?.minValue === 0 &&
      shippingNode.deliveryTime?.handlingTime?.maxValue === 1 &&
      shippingNode.deliveryTime?.transitTime?.minValue === 1 &&
      shippingNode.deliveryTime?.transitTime?.maxValue === 3,
    label,
    'OfferShippingDetails (#shipping-my) verified (RM 0.00 MYR, handling 0-1d, transit 1-3d)'
  );

  const returnNode = graph.find((n) => n['@id'] === RETURN_POLICY_MY_ID);
  assertCondition(
    Boolean(returnNode) &&
      returnNode['@type'] === 'MerchantReturnPolicy' &&
      returnNode.applicableCountry === 'MY' &&
      returnNode.merchantReturnDays === 14,
    label,
    'MerchantReturnPolicy (#return-policy) verified (14-day unopened guarantee in MY)'
  );

  // 4. BreadcrumbList check
  const breadcrumbNode = graph.find((n) => n['@type'] === 'BreadcrumbList');
  assertCondition(
    Boolean(breadcrumbNode) &&
      Array.isArray(breadcrumbNode.itemListElement) &&
      breadcrumbNode.itemListElement.length >= 1 &&
      breadcrumbNode.itemListElement.every(
        (item, idx) =>
          item['@type'] === 'ListItem' &&
          item.position === idx + 1 &&
          typeof item.name === 'string' &&
          typeof item.item === 'string'
      ),
    label,
    `BreadcrumbList verified (${breadcrumbNode?.itemListElement?.length || 0} sequential ListItems)`
  );

  // 5. FAQPage check
  const faqNode = graph.find((n) => n['@type'] === 'FAQPage');
  assertCondition(
    Boolean(faqNode) &&
      Array.isArray(faqNode.mainEntity) &&
      faqNode.mainEntity.length >= 3 &&
      faqNode.mainEntity.every(
        (q) =>
          q['@type'] === 'Question' &&
          typeof q.name === 'string' &&
          q.acceptedAnswer?.['@type'] === 'AcceptedAnswer' &&
          typeof q.acceptedAnswer?.text === 'string' &&
          q.acceptedAnswer.text.length > 10
      ),
    label,
    `FAQPage verified (${faqNode?.mainEntity?.length || 0} Q&A pairs)`
  );

  // 6. Merchant Center / Rich Result Offer fields check (price: "159.00", priceCurrency: "MYR", availability, shippingDetails, hasMerchantReturnPolicy)
  const nodesWithOffers = graph.filter((n) => Boolean(n.offers));
  assertCondition(
    nodesWithOffers.length >= 1 &&
      nodesWithOffers.every((n) => {
        const offer = n.offers;
        return (
          offer['@type'] === 'Offer' &&
          offer.price === '159.00' &&
          offer.priceCurrency === 'MYR' &&
          offer.priceValidUntil === '2027-12-31' &&
          offer.availability === 'https://schema.org/InStock' &&
          offer.itemCondition === 'https://schema.org/NewCondition' &&
          offer.shippingDetails?.['@type'] === 'OfferShippingDetails' &&
          offer.hasMerchantReturnPolicy?.['@type'] === 'MerchantReturnPolicy'
        );
      }),
    label,
    'Google Merchant Center Offer fields verified (price: "159.00", MYR, InStock, shippingDetails, hasMerchantReturnPolicy)'
  );

  // 7. Zero fake aggregateRating or fake medical registration claims
  const bannedMal1 = 'MAL' + '19';
  const bannedMal2 = 'MAL' + '20';
  assertCondition(
    !rawJsonString.includes('"aggregateRating"') &&
      !rawJsonString.includes(bannedMal1) &&
      !rawJsonString.includes(bannedMal2),
    label,
    'Zero fake aggregateRating spam and zero fabricated drug registration numbers'
  );

  if (typeof extraAssertions === 'function') {
    extraAssertions(graph, parsed);
  }
}

// ============================================================================
// 1. UNIT TEST INDIVIDUAL BUILDER FUNCTIONS (MS-045 TO MS-055)
// ============================================================================
const orgUnit = buildOrganizationSchema();
assertCondition(
  orgUnit['@id'] === ORG_ID &&
    orgUnit.name === 'Onyxman Malaysia' &&
    Array.isArray(orgUnit.knowsAbout) &&
    orgUnit.knowsAbout.length >= 5,
  'UNIT:buildOrganizationSchema',
  'Organization schema unit test passed'
);

const webEnUnit = buildWebSiteSchema('en-MY');
const webMsUnit = buildWebSiteSchema('ms-MY');
assertCondition(
  webEnUnit.inLanguage === 'en-MY' && webMsUnit.inLanguage === 'ms-MY',
  'UNIT:buildWebSiteSchema',
  'Bilingual WebSite schema unit test passed (en-MY & ms-MY)'
);

const [shipUnit, retUnit] = buildShippingAndReturnNodes();
assertCondition(
  shipUnit['@id'] === SHIPPING_MY_ID && retUnit['@id'] === RETURN_POLICY_MY_ID,
  'UNIT:buildShippingAndReturnNodes',
  'Reusable shipping & return policy nodes unit test passed'
);

const faqUnit = buildFAQPageSchema(undefined, `${SCHEMA_DOMAIN}/`, 'en-MY');
assertCondition(
  faqUnit['@type'] === 'FAQPage' && faqUnit.mainEntity.length >= 4,
  'UNIT:buildFAQPageSchema',
  'FAQPage builder unit test passed'
);

const crumbUnit = buildBreadcrumbSchema(
  [
    { name: 'Home', url: '/' },
    { name: 'Formulations', url: '/products/' },
  ],
  `${SCHEMA_DOMAIN}/products/`
);
assertCondition(
  crumbUnit['@type'] === 'BreadcrumbList' && crumbUnit.itemListElement.length === 2,
  'UNIT:buildBreadcrumbSchema',
  'BreadcrumbList builder unit test passed'
);

// ============================================================================
// 2. VALIDATE HOMEPAGE & PRODUCTS VAULT INDEX (EN + BM)
// ============================================================================
for (const lang of ['en-MY', 'ms-MY']) {
  const isMs = lang === 'ms-MY';
  const homeUrl = isMs ? `${SCHEMA_DOMAIN}/ms/` : `${SCHEMA_DOMAIN}/`;
  const homeJson = buildFullPageGraph({
    pageType: 'home',
    lang,
    pageUrl: homeUrl,
    breadcrumbs: [{ name: isMs ? 'Utama Onyxman' : 'Onyxman Home', url: homeUrl }],
  });
  validateFullGraphPayload(homeJson, lang, `HOMEPAGE (${lang})`, (graph) => {
    const itemList = graph.find((n) => n['@type'] === 'ItemList');
    assertCondition(
      Boolean(itemList) && itemList.numberOfItems === 4,
      `HOMEPAGE (${lang})`,
      'ItemList of all 4 flagship products verified on Homepage'
    );
  });
}

// ============================================================================
// 3. VALIDATE ALL 4 FLAGSHIP PRODUCTS (EN + BM)
// ============================================================================
const productSlugs = Object.keys(DEFAULT_PRODUCTS_CATALOG);
for (const slug of productSlugs) {
  for (const lang of ['en-MY', 'ms-MY']) {
    const isMs = lang === 'ms-MY';
    const pageUrl = isMs
      ? `${SCHEMA_DOMAIN}/ms/produk/${slug}/`
      : `${SCHEMA_DOMAIN}/products/${slug}/`;

    const prodGraphJson = buildFullPageGraph({
      pageType: 'product',
      lang,
      pageUrl,
      product: slug,
      breadcrumbs: [
        { name: isMs ? 'Utama' : 'Home', url: isMs ? '/ms/' : '/' },
        { name: isMs ? 'Formulasi' : 'Formulations', url: isMs ? '/ms/produk/' : '/products/' },
        { name: DEFAULT_PRODUCTS_CATALOG[slug].name, url: pageUrl },
      ],
    });

    validateFullGraphPayload(prodGraphJson, lang, `PRODUCT:${slug} (${lang})`, (graph) => {
      const prodNode = graph.find(
        (n) =>
          Array.isArray(n['@type']) &&
          n['@type'].includes('Product') &&
          n['@type'].includes('DietarySupplement') &&
          n['@id'] === `${pageUrl}#product`
      );
      assertCondition(
        Boolean(prodNode) &&
          typeof prodNode.sku === 'string' &&
          typeof prodNode.mpn === 'string' &&
          prodNode.brand?.name === 'Onyxman' &&
          Array.isArray(prodNode.image) &&
          prodNode.image.some((img) => img.endsWith('-stage.webp')) &&
          prodNode.image.some((img) => img.endsWith('-stage.png')) &&
          prodNode.targetPopulation === 'Adult Men' &&
          prodNode.isProprietary === false &&
          prodNode.legalStatus === 'Botanical Dietary Supplement' &&
          prodNode.recommendedIntake?.['@type'] === 'RecommendedDoseSchedule',
        `PRODUCT:${slug} (${lang})`,
        'Dual-typed ["Product", "DietarySupplement"] node verified with studio stage .webp/.png, SKU, MPN, and DietarySupplement fields'
      );

      if (slug === 'magnum-pump-xr') {
        assertCondition(
          typeof prodNode.disambiguatingDescription === 'string' &&
            prodNode.disambiguatingDescription.toLowerCase().includes('pump'),
          `PRODUCT:${slug} (${lang})`,
          'Magnum Pump XR explicitly disambiguated from mechanical/industrial pumps'
        );
      }

      const groupNode = graph.find((n) => n['@type'] === 'ProductGroup');
      const variantPrices = groupNode?.hasVariant?.map((v) => v.offers?.price) || [];
      assertCondition(
        Boolean(groupNode) &&
          Array.isArray(groupNode.hasVariant) &&
          groupNode.hasVariant.length === 3 &&
          variantPrices.includes('159.00') &&
          variantPrices.includes('318.00') &&
          variantPrices.includes('477.00'),
        `PRODUCT:${slug} (${lang})`,
        'ProductGroup verified with 3 multi-bottle variants (RM 159.00, RM 318.00, RM 477.00)'
      );
    });
  }
}

// ============================================================================
// 4. VALIDATE COMPARISONS (EN + BM)
// ============================================================================
const comparisonRoutes = [
  {
    slug: 'compare-index',
    enUrl: `${SCHEMA_DOMAIN}/compare/`,
    msUrl: `${SCHEMA_DOMAIN}/ms/perbandingan/`,
    titleEn: 'Onyxman Formulation Comparison Matrix',
    titleMs: 'Jadual Perbandingan Formulasi Onyxman',
  },
  {
    slug: 'horsemen-vs-hammer-of-thor',
    enUrl: `${SCHEMA_DOMAIN}/compare/horsemen-vs-hammer-of-thor/`,
    msUrl: `${SCHEMA_DOMAIN}/ms/perbandingan/horsemen-vs-hammer-of-thor/`,
    titleEn: 'Horsemen vs Hammer of Thor — 20-Capsule Stamina & Vitality Comparison',
    titleMs: 'Perbandingan Horsemen vs Hammer of Thor — Kapsul Stamina Lelaki Malaysia',
  },
  {
    slug: 'grow-xl-vs-magnum-pump-xr',
    enUrl: `${SCHEMA_DOMAIN}/compare/grow-xl-vs-magnum-pump-xr/`,
    msUrl: `${SCHEMA_DOMAIN}/ms/perbandingan/grow-xl-vs-magnum-pump-xr/`,
    titleEn: 'Grow XL vs Magnum Pump XR — 30-Day Botanical Cycle vs Nitric Oxide Protocol',
    titleMs: 'Perbandingan Grow XL vs Magnum Pump XR — Kitaran 30 Hari vs Sokongan Nitrik Oksida',
  },
];

for (const comp of comparisonRoutes) {
  for (const lang of ['en-MY', 'ms-MY']) {
    const isMs = lang === 'ms-MY';
    const pageUrl = isMs ? comp.msUrl : comp.enUrl;
    const compJson = buildFullPageGraph({
      pageType: 'comparison',
      lang,
      pageUrl,
      title: isMs ? comp.titleMs : comp.titleEn,
      breadcrumbs: [
        { name: isMs ? 'Utama' : 'Home', url: isMs ? '/ms/' : '/' },
        { name: isMs ? comp.titleMs : comp.titleEn, url: pageUrl },
      ],
    });
    validateFullGraphPayload(compJson, lang, `COMPARISON:${comp.slug} (${lang})`);
  }
}

// ============================================================================
// 5. VALIDATE BOTANICAL MONOGRAPHS (EN + BM)
// ============================================================================
const botanicalSlugs = [
  'tongkat-ali-eurycoma-longifolia',
  'black-maca-lepidium-meyenii',
  'l-arginine-l-citrulline-nitric-oxide',
  'panax-ginseng-ginsenosides',
];

for (const bSlug of botanicalSlugs) {
  for (const lang of ['en-MY', 'ms-MY']) {
    const isMs = lang === 'ms-MY';
    const pageUrl = isMs
      ? `${SCHEMA_DOMAIN}/ms/ramuan-botani/${bSlug}/`
      : `${SCHEMA_DOMAIN}/ingredients/${bSlug}/`;
    const botJson = buildFullPageGraph({
      pageType: 'botanical',
      lang,
      pageUrl,
      article: {
        slug: bSlug,
        headlineEn: `Botanical Monograph: ${bSlug}`,
        headlineMs: `Monograf Botani: ${bSlug}`,
        descriptionEn: `Standardized phytochemistry and male vitality research monograph for ${bSlug}.`,
        descriptionMs: `Monograf kajian fitokimia piawai dan kecergasan lelaki untuk ${bSlug}.`,
        pageUrl,
      },
      breadcrumbs: [
        { name: isMs ? 'Utama' : 'Home', url: isMs ? '/ms/' : '/' },
        { name: isMs ? 'Monograf Botani' : 'Botanical Monographs', url: isMs ? '/ms/ramuan-botani/' : '/ingredients/' },
        { name: bSlug, url: pageUrl },
      ],
    });
    validateFullGraphPayload(botJson, lang, `BOTANICAL:${bSlug} (${lang})`, (graph) => {
      const articleNode = graph.find((n) => n['@type'] === 'Article');
      assertCondition(
        Boolean(articleNode) &&
          articleNode.speakable?.['@type'] === 'SpeakableSpecification' &&
          Array.isArray(articleNode.speakable.cssSelector),
        `BOTANICAL:${bSlug} (${lang})`,
        'Article node with SpeakableSpecification verified'
      );
    });
  }
}

// ============================================================================
// 6. VALIDATE ALL 16 MALAYSIA STATE & FEDERAL TERRITORY HUBS (EN + BM)
// ============================================================================
const stateKeys = Object.keys(MALAYSIA_STATE_HUBS_CATALOG);
assertCondition(
  stateKeys.length === 16,
  'STATE-HUBS-COUNT',
  `Exactly 16 Malaysia States & Federal Territories registered (${stateKeys.length})`
);

for (const stateKey of stateKeys) {
  const stateInfo = MALAYSIA_STATE_HUBS_CATALOG[stateKey];
  for (const lang of ['en-MY', 'ms-MY']) {
    const isMs = lang === 'ms-MY';
    const pageUrl = isMs
      ? `${SCHEMA_DOMAIN}/ms/penghantaran-malaysia/${stateInfo.slug === 'penang' ? 'pulau-pinang' : stateInfo.slug}/`
      : `${SCHEMA_DOMAIN}/malaysia-delivery/${stateInfo.slug}/`;

    const stateJson = buildFullPageGraph({
      pageType: 'state-hub',
      lang,
      pageUrl,
      stateHub: stateKey,
      breadcrumbs: [
        { name: isMs ? 'Utama' : 'Home', url: isMs ? '/ms/' : '/' },
        {
          name: isMs ? 'Penghantaran Malaysia' : 'Malaysia Delivery',
          url: isMs ? '/ms/penghantaran-malaysia/' : '/malaysia-delivery/',
        },
        { name: isMs ? stateInfo.stateNameMs : stateInfo.stateNameEn, url: pageUrl },
      ],
    });

    validateFullGraphPayload(stateJson, lang, `STATE-HUB:${stateKey} (${lang})`, (graph) => {
      const serviceNode = graph.find((n) => n['@type'] === 'Service');
      assertCondition(
        Boolean(serviceNode) &&
          serviceNode.provider?.['@id'] === ORG_ID &&
          serviceNode.areaServed?.['@type'] === 'AdministrativeArea' &&
          serviceNode.offers?.price === '159.00' &&
          serviceNode.offers?.priceCurrency === 'MYR',
        `STATE-HUB:${stateKey} (${lang})`,
        `Localized Service schema verified for ${isMs ? stateInfo.stateNameMs : stateInfo.stateNameEn}`
      );
    });
  }
}

// ============================================================================
// 7. VALIDATE GUIDES (EN + BM)
// ============================================================================
const guideRoutes = [
  {
    slug: 'optimal-capsule-timing-and-absorption-protocol',
    enUrl: `${SCHEMA_DOMAIN}/guides/optimal-capsule-timing-and-absorption-protocol/`,
    msUrl: `${SCHEMA_DOMAIN}/ms/panduan/masa-pengambilan-kapsul-dan-penyerapan-optimum/`,
    headlineEn: 'Optimal Capsule Timing & Absorption Protocol — 20-Capsule vs 30-Capsule Cycles',
    headlineMs: 'Panduan Masa Pengambilan Kapsul & Penyerapan Optimum — Kitaran 20 vs 30 Kapsul',
  },
  {
    slug: 'how-to-verify-authentic-onyxman-bottles-malaysia',
    enUrl: `${SCHEMA_DOMAIN}/guides/how-to-verify-authentic-onyxman-bottles-malaysia/`,
    msUrl: `${SCHEMA_DOMAIN}/ms/panduan/cara-semak-ketulenan-botol-onyxman-malaysia/`,
    headlineEn: 'How to Verify Authentic Onyxman Formulations & Avoid Counterfeit Listings in Malaysia',
    headlineMs: 'Cara Semak Ketulenan Botol Onyxman & Elak Produk Tiruan di Malaysia',
  },
];

for (const guide of guideRoutes) {
  for (const lang of ['en-MY', 'ms-MY']) {
    const isMs = lang === 'ms-MY';
    const pageUrl = isMs ? guide.msUrl : guide.enUrl;
    const guideJson = buildFullPageGraph({
      pageType: 'guide',
      lang,
      pageUrl,
      article: {
        slug: guide.slug,
        headlineEn: guide.headlineEn,
        headlineMs: guide.headlineMs,
        descriptionEn: guide.headlineEn,
        descriptionMs: guide.headlineMs,
        pageUrl,
      },
      breadcrumbs: [
        { name: isMs ? 'Utama' : 'Home', url: isMs ? '/ms/' : '/' },
        { name: isMs ? 'Panduan' : 'Guides', url: isMs ? '/ms/panduan/' : '/guides/' },
        { name: isMs ? guide.headlineMs : guide.headlineEn, url: pageUrl },
      ],
    });
    validateFullGraphPayload(guideJson, lang, `GUIDE:${guide.slug} (${lang})`, (graph) => {
      const articleNode = graph.find((n) => n['@type'] === 'Article');
      assertCondition(
        Boolean(articleNode) &&
          articleNode.speakable?.['@type'] === 'SpeakableSpecification' &&
          Array.isArray(articleNode.speakable.cssSelector) &&
          articleNode.speakable.cssSelector.length >= 2,
        `GUIDE:${guide.slug} (${lang})`,
        'Article + WebPage speakable CssSelectorType verified for AI Voice / Perplexity / Google Assistant'
      );
    });
  }
}

// ============================================================================
// SUMMARY REPORT
// ============================================================================
console.log('====================================================================');
console.log('ONYXMAN.MY — @GRAPH JSON-LD SCHEMA VALIDATION REPORT (MS-045..MS-060)');
console.log('====================================================================');
console.log(`Total Schema Assertions Passed : ${passedChecks.length}`);
console.log(`Total Schema Assertions Failed : ${failedChecks.length}`);
console.log('--------------------------------------------------------------------');
console.log('Coverage Summary:');
console.log('  - Homepage (EN + BM)                    : 2 @graph payloads verified');
console.log('  - 4 Flagship Products (EN + BM)         : 8 @graph payloads verified');
console.log('  - 3 Comparisons (EN + BM)               : 6 @graph payloads verified');
console.log('  - 4 Botanical Monographs (EN + BM)      : 8 @graph payloads verified');
console.log('  - 16 Malaysia State Hubs (EN + BM)      : 32 @graph payloads verified');
console.log('  - 2 Educational Guides (EN + BM)        : 4 @graph payloads verified');
console.log('  - Total Full-Page @graph Payloads       : 60 bilingual payloads verified');
console.log('====================================================================');

if (failedChecks.length > 0) {
  console.error('\nFAILED SCHEMA ASSERTIONS:');
  for (const f of failedChecks) {
    console.error(`  [FAIL] [${f.category}] ${f.message}`);
  }
  process.exit(1);
} else {
  console.log('\n[PASS] 100% OF GOOGLE MERCHANT CENTER & RICH-RESULT SCHEMA CHECKS PASSED (0 ERRORS).');
  process.exit(0);
}
