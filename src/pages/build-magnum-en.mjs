#!/usr/bin/env node
/**
 * ONYXMAN.MY — MAGNUM PUMP XR EN-MY FLAGSHIP APOTHECARY BUILDER (MS-114A)
 * Output Targets:
 *   1. public/magnum-pump-xr-malaysia/index.html (Canonical Flagship Route)
 *   2. public/products/magnum-pump-xr/index.html (Catalog Mirror Route)
 * Canonical URL: https://www.onyxmen.my/magnum-pump-xr-malaysia/
 * Paired BM URL: https://www.onyxmen.my/ms/magnum-pump-xr-malaysia/
 *
 * Strictly enforces:
 * - APEX Rule #29 & Rule #30:
 *   - Paradigm A: 100vw x 100vh Full-Bleed Obsidian Hero Stage with radial vignette & studio lighting
 *   - Paradigm D: 50vw / 50vw Pinned Split-Screen Nitric Oxide & Androgenic Botanical Matrix
 *   - Architectural Hairline Ledgers (ZERO repeat(2..4,1fr) bordered card boxes, ZERO pill radius,
 *     ZERO #FAF8F5, ZERO Plus Jakarta Sans).
 * - Authentic Constants:
 *   - Product: Magnum Pump XR (Testosterone Pro Series — Male Enhancement Formula Maximum Strength — 30 Black Capsules)
 *   - SKU: ONYX-MP-30 | MPN: MPXR-30BLK-MY | GTIN-13: 9550000102042
 *   - Official Pricing: 1 Bottle (30 Black Capsules) = RM 159 (159.00 MYR),
 *                       2 Bottles (60 Black Capsules) = RM 318 (318.00 MYR),
 *                       3 Bottles (90 Black Capsules) = RM 477 (477.00 MYR)
 *   - Refill Protocol: Day-25 Automated Refill Reminder Calendar Integration (30-day nitric oxide & vitality cycle)
 *   - Mandatory Entity Disambiguation (ONYX-22): Explicitly disambiguates Magnum Pump XR
 *     (DietarySupplement — 30 Oral Black Botanical & Amino Acid Capsules for Men's Vitality in Malaysia)
 *     from any mechanical/industrial oilfield mud pumps (SPM Magnum XR / Weir oilfield frac pumps) or vacuum pumps.
 *   - Emails: waleedshoaibofficial@gmail.com, sales@onyxman.my, info@onyxman.my
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderLuxuryShell } from '../components/LuxuryShell.mjs';
import {
  buildFullPageGraph,
  buildShippingDetailsNode,
  buildReturnPolicyNode,
  ORG_ID,
  WEBSITE_ID,
  BRAND_ID,
} from '../utils/schema-graph.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');

const PRODUCT_JSON_PATH = path.join(ROOT_DIR, 'src', 'data', 'products', 'magnum-pump-xr.json');
const OUTPUT_FLAGSHIP_FILE = path.join(ROOT_DIR, 'public', 'magnum-pump-xr-malaysia', 'index.html');
const OUTPUT_PRODUCTS_FILE = path.join(ROOT_DIR, 'public', 'products', 'magnum-pump-xr', 'index.html');

export const MAGNUM_PRODUCT_DATA = JSON.parse(fs.readFileSync(PRODUCT_JSON_PATH, 'utf8'));

export const MAGNUM_CONSTANTS = {
  productName: MAGNUM_PRODUCT_DATA.name || 'Magnum Pump XR',
  officialSubtitle:
    MAGNUM_PRODUCT_DATA.labelTranscription?.subtitleEn ||
    'Testosterone Pro Series — Male Enhancement Formula Maximum Strength — 30 Black Capsules',
  productSlug: MAGNUM_PRODUCT_DATA.slug || 'magnum-pump-xr',
  sku: MAGNUM_PRODUCT_DATA.sku || 'ONYX-MP-30',
  mpn: MAGNUM_PRODUCT_DATA.mpn || 'MPXR-30BLK-MY',
  gtin13: MAGNUM_PRODUCT_DATA.gtin13 || '9550000102042',
  capsuleCount: MAGNUM_PRODUCT_DATA.labelTranscription?.capsuleCount || 30,
  capsuleWeightMg: MAGNUM_PRODUCT_DATA.labelTranscription?.capsuleWeightMg || 600,
  totalBottlePotencyMg: MAGNUM_PRODUCT_DATA.usageProtocol?.totalNetPotencyMg || 18000,
  refillTriggerDay: MAGNUM_PRODUCT_DATA.refillProtocol?.refillReminderDay || 25,
  capsuleFormatSpec:
    'Extended-Release (XR) UV-Shielded Jet-Black Oral Capsule (30 Black Capsules × 600mg = 18,000mg per Bottle)',
  canonicalUrl: 'https://www.onyxmen.my/magnum-pump-xr-malaysia/',
  canonicalPath: '/magnum-pump-xr-malaysia/',
  pairedMsUrl: 'https://www.onyxmen.my/ms/magnum-pump-xr-malaysia/',
  pairedMsPath: '/ms/magnum-pump-xr-malaysia/',
  catalogMirrorUrl: 'https://www.onyxmen.my/products/magnum-pump-xr/',
  catalogMirrorPath: '/products/magnum-pump-xr/',
  assets: {
    stageWebp: MAGNUM_PRODUCT_DATA.images?.stageWebp || '/assets/products/magnum-pump-xr-stage.webp',
    stagePng: MAGNUM_PRODUCT_DATA.images?.stagePng || '/assets/products/magnum-pump-xr-stage.png',
    portraitWebp: MAGNUM_PRODUCT_DATA.images?.portraitWebp || '/assets/products/magnum-pump-xr-portrait.webp',
    portraitPng: MAGNUM_PRODUCT_DATA.images?.portraitPng || '/assets/products/magnum-pump-xr-portrait.png',
    cutoutWebp: MAGNUM_PRODUCT_DATA.images?.cutoutWebp || '/assets/products/magnum-pump-xr-cutout.webp',
    cutoutPng: MAGNUM_PRODUCT_DATA.images?.cutoutPng || '/assets/products/magnum-pump-xr-cutout.png',
  },
  emails: {
    primaryOrder: 'waleedshoaibofficial@gmail.com',
    sales: 'sales@onyxman.my',
    info: 'info@onyxman.my',
  },
};

export const MAGNUM_BOTANICAL_ACTIVES = [
  {
    index: '01',
    code: 'MP-ACT-01',
    name: 'L-Arginine HCl (Extended-Release Granulation)',
    scientificName: 'L-Arginine Hydrochloride (99.5% Pure Pharmaceutical-Grade Amino Acid)',
    dosageMg: 180,
    percentageOfCapsule: '30.0%',
    perBottleTotalMg: 5400,
    standardization: '99.5% Pure Pharmaceutical-Grade L-Arginine Hydrochloride (Micronized XR Granulation)',
    extractionRatio: 'Plant-Carbohydrate Bio-Fermentation · Crystalline Hydrochloric Salt',
    molecularTarget: 'Direct Endothelial Nitric Oxide Synthase (eNOS) Substrate, Acute cGMP Vasodilation & Oxygen Delivery',
    pharmacokineticWindow: 'Onset: 25–40 Minutes Post-Ingestion · Peak First-Wave Plasma Window: 45–120 Minutes',
    clinicalSummary:
      'Leading the 600mg jet-black capsule at 180mg per capsule (5,400mg per 30-capsule bottle), pharmaceutical-grade L-Arginine HCl serves as the direct biological nitrogen donor for endothelial nitric oxide synthase (eNOS). Within 30 to 45 minutes of ingestion alongside 300ml of water, L-Arginine HCl elevates vascular nitric oxide biosynthesis—relaxing vascular smooth muscle, increasing arterial blood flow during heavy gym resistance sets, and establishing immediate peripheral fullness for evening physical performance.',
    tropicalAdvantage:
      'Housed inside our UV-shielded jet-black capsule shell with internal silica desiccant control so hygroscopic L-Arginine crystals never absorb Malaysia’s 80%+ equatorial humidity or degrade prior to ingestion.',
    synergyPartner:
      'Directly catalyzed by 15mg Bioperine Black Pepper Extract (MP-ACT-06) for rapid intestinal transport and paired with 140mg L-Citrulline Malate 2:1 (MP-ACT-02) for dual-wave Extended-Release (XR) nitric oxide continuity.',
  },
  {
    index: '02',
    code: 'MP-ACT-02',
    name: 'L-Citrulline Malate 2:1 (Sustained XR Precursor)',
    scientificName: 'L-Citrulline DL-Malate (2:1 Bio-Active Stoichiometric Vascular Complex)',
    dosageMg: 140,
    percentageOfCapsule: '23.3%',
    perBottleTotalMg: 4200,
    standardization: 'Verified 2:1 Ratio of Free-Form L-Citrulline Bound to Tricarboxylic Cycle DL-Malic Acid',
    extractionRatio: 'Enzymatic Bio-Fermentation · Bound Organic Malate Salt',
    molecularTarget: 'Hepatic Arginase Bypass, Renal L-Arginine Recycling (4–6 Hour XR Window) & ATP Lactic Acid Buffering',
    pharmacokineticWindow: 'Onset: 60–90 Minutes Post-Ingestion · Sustained XR Plasma Window: 120–360 Minutes (2–6 Hours)',
    clinicalSummary:
      'Oral L-Arginine alone is partially metabolized by intestinal and hepatic arginase enzymes within 2 hours. That is why Magnum Pump XR incorporates 140mg of L-Citrulline Malate 2:1 (4,200mg per bottle) to engineer true Extended-Release ("XR") kinetics. L-Citrulline bypasses first-pass liver breakdown completely and is steadily converted by renal argininosuccinate synthase into fresh plasma L-Arginine over 4 to 6 hours—while its DL-Malate fraction enters the Krebs cycle to buffer muscular ammonia and delay physical exhaustion.',
    tropicalAdvantage:
      'L-Citrulline Malate is notoriously moisture-sensitive in tropical climates; our low-permeability jet-black capsule wall prevents malic-acid deliquescence even during warm courier transit across Peninsular and East Malaysia.',
    synergyPartner:
      'Combines with 180mg L-Arginine HCl (MP-ACT-01) to deliver 320mg of dual-stage Nitric Oxide amino precursors per capsule (9,600mg per bottle).',
  },
  {
    index: '03',
    code: 'MP-ACT-03',
    name: 'Tribulus Terrestris (Pro-Series Saponin Extract)',
    scientificName: 'Tribulus terrestris L. (Standardized Aerial & Fruit Pericarp Saponin Complex)',
    dosageMg: 110,
    percentageOfCapsule: '18.3%',
    perBottleTotalMg: 3300,
    standardization: 'Standardized to >= 45% Steroidal Furostanol Saponins (Calculated as Protodioscin)',
    extractionRatio: '12:1 Hydro-Ethanolic Fruit & Aerial Extraction',
    molecularTarget: 'Androgen Receptor Sensitivity Support, Luteinizing Drive & Resistance-Training Muscular Output',
    pharmacokineticWindow: 'Cumulative Daily Saturation · Peak Androgenic Conditioning Window: Days 7–30',
    clinicalSummary:
      'To justify the "Testosterone Pro Series — Maximum Strength" crest emblazoned on the obsidian-and-crimson bottle, Magnum Pump XR delivers 110mg of standardized Tribulus Terrestris fruit extract (3,300mg per bottle). Rich in steroidal furostanol saponins, Tribulus works in concert with the L-Arginine/L-Citrulline vascular matrix to link mechanical blood-flow expansion with assertive physical drive, lifting power in the gym, and confident evening stamina.',
    tropicalAdvantage:
      'Opaque carbon-black capsule pigmentation blocks 99.8% of ambient UV-A and UV-B light, preventing photolytic oxidation of steroidal saponin glycosides.',
    synergyPartner:
      'Forms the "Testosterone Pro Series" botanical triad alongside 90mg Malaysian Tongkat Ali 100:1 (MP-ACT-04) and 65mg Thai Black Ginger (MP-ACT-05).',
  },
  {
    index: '04',
    code: 'MP-ACT-04',
    name: 'Malaysian Tongkat Ali (100:1 Root Extract)',
    scientificName: 'Eurycoma longifolia Jack (Freeze-Dried Standardized Mature Root Extract)',
    dosageMg: 90,
    percentageOfCapsule: '15.0%',
    perBottleTotalMg: 2700,
    standardization: '100:1 Standardized Root Extract (> 2.2% Eurycomanone Quassinoids & > 22% Bioactive Eurypeptides)',
    extractionRatio: '100:1 Ultrasonic Aqueous Root Extraction · Wild-Harvested Pahang & Perak Rainforest Roots',
    molecularTarget: 'SHBG Modulation, Free Bioavailable Androgen Equilibrium & Post-Exertion Cortisol Buffering',
    pharmacokineticWindow: 'Daily Adaptogenic Accumulation · Progressive Vitality Baseline Across Full 30-Day Cycle',
    clinicalSummary:
      'Every capsule of Magnum Pump XR anchors its imported amino-acid matrix in authentic Malaysian heritage phytochemistry: 90mg of 100:1 Eurycoma longifolia root extract (2,700mg per bottle). High-intensity training and long corporate hours in Kuala Lumpur, Johor Bahru, or Penang elevate serum cortisol, which binds free vitality hormones. Standardized eurycomanone quassinoids moderate stress-induced cortisol spikes and support resilient baseline vitality across your entire 30-black-capsule cycle.',
    tropicalAdvantage:
      'Freeze-dried aqueous extraction removes woody cellulose fibers, allowing rapid gastric dispersion alongside L-Arginine without bitter herbal reflux.',
    synergyPartner:
      'Amplifies the androgenic conditioning of 110mg Tribulus Terrestris (MP-ACT-03) while 15mg Bioperine (MP-ACT-06) maximizes intestinal quassinoid uptake.',
  },
  {
    index: '05',
    code: 'MP-ACT-05',
    name: 'Thai Black Ginger / Kunyit Hitam (Kaempferia Parviflora)',
    scientificName: 'Kaempferia parviflora Wall. ex Baker (Standardized Dark-Purple Rhizome Extract)',
    dosageMg: 65,
    percentageOfCapsule: '10.8%',
    perBottleTotalMg: 1950,
    standardization: 'Standardized to >= 5.0% Total Polymethoxyflavones (5,7-Dimethoxyflavone & 5,7,4’-Trimethoxyflavone)',
    extractionRatio: '15:1 Low-Temperature Ethanolic Rhizome Extraction',
    molecularTarget: 'Endothelial eNOS Co-Activation, Peripheral Smooth-Muscle Relaxation & Cellular AMPK Mitochondrial Stamina',
    pharmacokineticWindow: 'Dual Acute (45–90 Min) & Cumulative (14–30 Day) Vascular & Muscular Endurance Action',
    clinicalSummary:
      'Revered across Malaysia and Southeast Asia as Kunyit Hitam (Thai Black Ginger), Kaempferia parviflora at 65mg per capsule (1,950mg per bottle) is the secret vascular multiplier inside Magnum Pump XR. Its standardized polymethoxyflavones (PMFs) act downstream of L-Arginine and L-Citrulline—supporting endothelial nitric oxide expression, preserving intracellular cGMP signaling in peripheral vascular beds, and enhancing physical grip strength and cardiorespiratory endurance.',
    tropicalAdvantage:
      'Polymethoxyflavones are highly photosensitive and rapidly lose bio-activity when exposed to room light inside clear capsules. Magnum Pump XR’s signature jet-black capsule shell provides a 100% dark-room shield around every milligram of Kunyit Hitam.',
    synergyPartner:
      'Locks into the L-Arginine HCl (180mg) + L-Citrulline Malate (140mg) pathway to reinforce peripheral vascular responsiveness.',
  },
  {
    index: '06',
    code: 'MP-ACT-06',
    name: 'Bioperine Black Pepper Extract (Absorption Catalyst)',
    scientificName: 'Piper nigrum L. (Standardized Piperine Alkaloid Bio-Enhancer)',
    dosageMg: 15,
    percentageOfCapsule: '2.5%',
    perBottleTotalMg: 450,
    standardization: 'Standardized to >= 95.0% Pure Crystalline Piperine Alkaloids',
    extractionRatio: '50:1 Standardized Fruit Spike Extract',
    molecularTarget: 'Intestinal Enterocyte Thermogenesis, P-Glycoprotein Moderation & +30% Amino/Phytochemical Bioavailability',
    pharmacokineticWindow: 'Immediate Gastric Activation (10–25 Minutes Post-Ingestion)',
    clinicalSummary:
      'Even the purest amino acids and root extracts are wasted if they pass unabsorbed through the digestive tract. Magnum Pump XR completes its exact 600mg jet-black capsule formulation with 15mg of standardized 95% Piperine (Bioperine Black Pepper Extract — 450mg per bottle). Bioperine stimulates intestinal amino-acid transporters and momentarily slows hepatic glucuronidation, increasing plasma bioavailability of L-Arginine, L-Citrulline, Tongkat Ali quassinoids, and Black Ginger PMFs by up to 30%.',
    tropicalAdvantage:
      'Accelerates absorption even when Magnum Pump XR is taken 45 minutes after a high-protein Malaysian meal, ensuring consistent 30-to-45-minute pre-activity onset.',
    synergyPartner:
      'Catalyzes all five companion actives (180mg + 140mg + 110mg + 90mg + 65mg + 15mg = 600mg exact per black capsule).',
  },
];

export const MAGNUM_ENTITY_DISAMBIGUATION_LEDGER = [
  {
    code: 'ONYX-22-01',
    dimension: 'Positive Semantic Classification (@type: DietarySupplement)',
    magnumPumpXrSpec:
      'Magnum Pump XR by Onyxman Malaysia (https://www.onyxmen.my/magnum-pump-xr-malaysia/) is 100% an oral botanical and amino-acid Dietary Supplement for adult men (18+), packaged as 30 Jet-Black Capsules × 600mg (18g net weight) in an apothecary bottle (SKU: ONYX-MP-30, MPN: MPXR-30BLK-MY, GTIN-13: 9550000102042).',
    excludedExternalEntity:
      'Explicitly classified under Schema.org Product + DietarySupplement (Health & Beauty > Health Care > Fitness & Nutrition > Vitamins & Supplements).',
    verificationTag: 'ORAL CAPSULE SUPPLEMENT',
  },
  {
    code: 'ONYX-22-02',
    dimension: 'Negative Disambiguation vs. Oilfield & Hydraulic Frac Pumps (SPM Magnum XR)',
    magnumPumpXrSpec:
      'Contains nutritional amino acids (L-Arginine HCl 180mg, L-Citrulline Malate 140mg) and botanical extracts (Tribulus 110mg, Tongkat Ali 90mg, Black Ginger 65mg, Bioperine 15mg) for human physiological nitric oxide and vitality support.',
    excludedExternalEntity:
      'ZERO affiliation, relation, or interchangeability with industrial oilfield drilling equipment, mud pumps, hydraulic fracturing fluid-ends, slurry pumps, or heavy machinery such as "SPM Magnum XR" / Weir Oil & Gas pumps.',
    verificationTag: 'NOT OILFIELD MACHINERY',
  },
  {
    code: 'ONYX-22-03',
    dimension: 'Negative Disambiguation vs. Mechanical Vacuum / External Devices',
    magnumPumpXrSpec:
      'The word "Pump" in Magnum Pump XR refers strictly to physiological Nitric Oxide (NO) vascular vasodilation and muscular blood-flow fullness ("the gym & vascular pump") achieved orally via L-Arginine and L-Citrulline capsules.',
    excludedExternalEntity:
      'NOT a mechanical vacuum cylinder, external hydro-pump, battery-operated hardware device, or physical apparatus.',
    verificationTag: 'NOT A VACUUM DEVICE',
  },
  {
    code: 'ONYX-22-04',
    dimension: 'Negative Disambiguation vs. Prescription Synthetic Pharmaceuticals',
    magnumPumpXrSpec:
      '100% non-prescription botanical and amino-acid nutritional supplement free from synthetic PDE5 inhibitors (zero sildenafil, zero tadalafil), free from exogenous synthetic hormones, and free from anhydrous caffeine.',
    excludedExternalEntity:
      'Not a synthetic pharmaceutical drug or injectable anabolic compound. Formulated for natural endothelial nitric oxide and adaptogenic vitality support.',
    verificationTag: 'ZERO SYNTHETIC DRUGS',
  },
  {
    code: 'ONYX-22-05',
    dimension: 'Official Malaysia Commercial & Fulfilment Identity',
    magnumPumpXrSpec:
      'Sold exclusively in Malaysia at the uniform apothecary reserve price of RM 159 (1 Bottle / 30 Black Capsules), RM 318 (2 Bottles / 60 Black Capsules), and RM 477 (3 Bottles / 90 Black Capsules) via https://www.onyxmen.my.',
    excludedExternalEntity:
      'Dispatched in 100% plain, unmarked matte parcels under sender "OM Fulfilment Logistics" via waleedshoaibofficial@gmail.com, sales@onyxman.my, and info@onyxman.my.',
    verificationTag: 'RM 159 OFFICIAL RESERVE',
  },
];

export const MAGNUM_16_STATES_LEDGER = [
  {
    num: '01',
    stateName: 'Kuala Lumpur (WP)',
    hubSlug: 'kuala-lumpur',
    href: '/malaysia-delivery/kuala-lumpur/',
    zoneLabel: 'KLANG VALLEY SAME-DAY ZONE',
    transitWindow: 'Same-Day Private Runner (3–5 Hours) or 1 Business Day Free Express',
    keyDistricts: 'KLCC, Bukit Bintang, Bangsar, Mont Kiara, Sri Hartamas, Damansara Heights, TRX, Cheras, Bukit Jalil, Wangsa Maju',
    postalCodes: '50000–60000',
    shippingCost: '1B (RM 159): RM 0 Free Express · 2B (RM 318): RM 0 Free · 3B (RM 477): RM 0 Priority (+RM 15 optional 3–5h Runner)',
    paymentModes: 'COD, DuitNow Instant QR, FPX Online Banking',
  },
  {
    num: '02',
    stateName: 'Selangor Darul Ehsan',
    hubSlug: 'selangor',
    href: '/malaysia-delivery/selangor/',
    zoneLabel: 'KLANG VALLEY SAME-DAY ZONE',
    transitWindow: 'Same-Day Private Runner (3–5 Hours) or 1 Business Day Free Express',
    keyDistricts: 'Petaling Jaya, Subang Jaya, Bandar Sunway, Shah Alam, Puchong, Klang, Setia Alam, Damansara, Kajang, Bangi, Cyberjaya',
    postalCodes: '40000–48300, 63000–68100',
    shippingCost: '1B (RM 159): RM 0 Free Express · 2B (RM 318): RM 0 Free · 3B (RM 477): RM 0 Priority (+RM 15 optional 3–5h Runner)',
    paymentModes: 'COD, DuitNow Instant QR, FPX Online Banking',
  },
  {
    num: '03',
    stateName: 'Putrajaya (WP)',
    hubSlug: 'putrajaya',
    href: '/malaysia-delivery/putrajaya/',
    zoneLabel: 'KLANG VALLEY SAME-DAY ZONE',
    transitWindow: 'Same-Day Private Runner (3–5 Hours) or 1 Business Day Free Express',
    keyDistricts: 'Precinct 1–20 Putrajaya, Diplomatic Enclave, IOI Resort City, Cyberjaya South',
    postalCodes: '62000–62988',
    shippingCost: '1B (RM 159): RM 0 Free Express · 2B (RM 318): RM 0 Free · 3B (RM 477): RM 0 Priority (+RM 15 optional 3–5h Runner)',
    paymentModes: 'COD, DuitNow Instant QR, FPX Online Banking',
  },
  {
    num: '04',
    stateName: 'Johor Darul Ta’zim',
    hubSlug: 'johor-bahru',
    href: '/malaysia-delivery/johor-bahru/',
    zoneLabel: 'SOUTHERN CORRIDOR EXPRESS',
    transitWindow: '1–2 Business Days Overnight Southern Linehaul',
    keyDistricts: 'Johor Bahru, Iskandar Puteri, Mount Austin, Skudai, Kulai, Pasir Gudang, Batu Pahat, Muar, Kluang, Segamat',
    postalCodes: '79000–86900',
    shippingCost: '1B (RM 159): RM 0 Free Express · 2B (RM 318): RM 0 Free · 3B (RM 477): RM 0 Priority VIP',
    paymentModes: 'COD, DuitNow Instant QR, FPX Online Banking',
  },
  {
    num: '05',
    stateName: 'Penang (Pulau Pinang)',
    hubSlug: 'penang',
    href: '/malaysia-delivery/penang/',
    zoneLabel: 'NORTHERN CORRIDOR EXPRESS',
    transitWindow: '1–2 Business Days Island & Mainland Express',
    keyDistricts: 'George Town, Bayan Lepas, Gurney Drive, Tanjung Tokong, Jelutong, Butterworth, Bukit Mertajam, Seberang Jaya, Batu Kawan',
    postalCodes: '10000–14400',
    shippingCost: '1B (RM 159): RM 0 Free Express · 2B (RM 318): RM 0 Free · 3B (RM 477): RM 0 Priority VIP',
    paymentModes: 'COD, DuitNow Instant QR, FPX Online Banking',
  },
  {
    num: '06',
    stateName: 'Perak Darul Ridzuan',
    hubSlug: 'perak-ipoh',
    href: '/malaysia-delivery/perak-ipoh/',
    zoneLabel: 'PENINSULAR EXPRESS ZONE',
    transitWindow: '1–2 Business Days North-South Highway Dispatch',
    keyDistricts: 'Ipoh, Canning Garden, Meru Raya, Taiping, Manjung, Sitiawan, Teluk Intan, Kampar, Kuala Kangsar, Tanjung Malim',
    postalCodes: '30000–36810',
    shippingCost: '1B (RM 159): RM 0 Free Express · 2B (RM 318): RM 0 Free · 3B (RM 477): RM 0 Priority VIP',
    paymentModes: 'COD, DuitNow Instant QR, FPX Online Banking',
  },
  {
    num: '07',
    stateName: 'Melaka',
    hubSlug: 'melaka',
    href: '/malaysia-delivery/melaka/',
    zoneLabel: 'PENINSULAR EXPRESS ZONE',
    transitWindow: '1–2 Business Days Direct Highway Dispatch',
    keyDistricts: 'Melaka City (Bandaraya Melaka), Ayer Keroh, Batu Berendam, Bukit Baru, Klebang, Alor Gajah, Masjid Tanah, Jasin',
    postalCodes: '75000–78300',
    shippingCost: '1B (RM 159): RM 0 Free Express · 2B (RM 318): RM 0 Free · 3B (RM 477): RM 0 Priority VIP',
    paymentModes: 'COD, DuitNow Instant QR, FPX Online Banking',
  },
  {
    num: '08',
    stateName: 'Negeri Sembilan',
    hubSlug: 'negeri-sembilan-seremban',
    href: '/malaysia-delivery/negeri-sembilan-seremban/',
    zoneLabel: 'PENINSULAR EXPRESS ZONE',
    transitWindow: '1 Business Day Express Courier',
    keyDistricts: 'Seremban, Seremban 2, Senawang, Nilai, Bandar Enstek, Port Dickson, Lukut, Tampin, Bahau, Kuala Pilah',
    postalCodes: '70000–73500',
    shippingCost: '1B (RM 159): RM 0 Free Express · 2B (RM 318): RM 0 Free · 3B (RM 477): RM 0 Priority VIP',
    paymentModes: 'COD, DuitNow Instant QR, FPX Online Banking',
  },
  {
    num: '09',
    stateName: 'Pahang Darul Makmur',
    hubSlug: 'pahang-kuantan',
    href: '/malaysia-delivery/pahang-kuantan/',
    zoneLabel: 'EAST COAST EXPRESS ZONE',
    transitWindow: '1–2 Business Days Karak-ECE Linehaul',
    keyDistricts: 'Kuantan, Indera Mahkota, Temerloh, Mentakab, Bentong, Genting Highlands, Pekan, Raub, Jerantut, Cameron Highlands',
    postalCodes: '25000–28800, 39000–39200',
    shippingCost: '1B (RM 159): RM 0 Free Express · 2B (RM 318): RM 0 Free · 3B (RM 477): RM 0 Priority VIP',
    paymentModes: 'COD, DuitNow Instant QR, FPX Online Banking',
  },
  {
    num: '10',
    stateName: 'Kedah Darul Aman',
    hubSlug: 'kedah-alor-setar',
    href: '/malaysia-delivery/kedah-alor-setar/',
    zoneLabel: 'NORTHERN CORRIDOR EXPRESS',
    transitWindow: '1–2 Business Days Northern Linehaul (2–3 Days Langkawi)',
    keyDistricts: 'Alor Setar, Sungai Petani, Kulim Hi-Tech Park, Jitra, Changlun, Baling, Gurun, Pendang, Langkawi Island',
    postalCodes: '05000–09810',
    shippingCost: '1B (RM 159): RM 0 Free Express · 2B (RM 318): RM 0 Free · 3B (RM 477): RM 0 Priority VIP',
    paymentModes: 'COD, DuitNow Instant QR, FPX Online Banking',
  },
  {
    num: '11',
    stateName: 'Kelantan Darul Naim',
    hubSlug: 'kelantan-kota-bharu',
    href: '/malaysia-delivery/kelantan-kota-bharu/',
    zoneLabel: 'EAST COAST EXPRESS ZONE',
    transitWindow: '1–2 Business Days East Coast Express Courier',
    keyDistricts: 'Kota Bharu, Kubang Kerian, Pengkalan Chepa, Wakaf Bharu, Pasir Mas, Tanah Merah, Machang, Kuala Krai, Gua Musang',
    postalCodes: '15000–18500',
    shippingCost: '1B (RM 159): RM 0 Free Express · 2B (RM 318): RM 0 Free · 3B (RM 477): RM 0 Priority VIP',
    paymentModes: 'COD, DuitNow Instant QR, FPX Online Banking',
  },
  {
    num: '12',
    stateName: 'Terengganu Darul Iman',
    hubSlug: 'terengganu-kuala-terengganu',
    href: '/malaysia-delivery/terengganu-kuala-terengganu/',
    zoneLabel: 'EAST COAST EXPRESS ZONE',
    transitWindow: '1–2 Business Days LPT2 Highway Dispatch',
    keyDistricts: 'Kuala Terengganu, Gong Badak, Chukai (Kemaman), Kerteh, Paka, Dungun, Marang, Jerteh (Besut), Kuala Berang',
    postalCodes: '20000–24300',
    shippingCost: '1B (RM 159): RM 0 Free Express · 2B (RM 318): RM 0 Free · 3B (RM 477): RM 0 Priority VIP',
    paymentModes: 'COD, DuitNow Instant QR, FPX Online Banking',
  },
  {
    num: '13',
    stateName: 'Perlis Indera Kayangan',
    hubSlug: 'perlis-kangar',
    href: '/malaysia-delivery/perlis-kangar/',
    zoneLabel: 'NORTHERN CORRIDOR EXPRESS',
    transitWindow: '1–2 Business Days Northern Express Courier',
    keyDistricts: 'Kangar, Arau, Kuala Perlis, Padang Besar, Simpang Empat, Kaki Bukit',
    postalCodes: '01000–02800',
    shippingCost: '1B (RM 159): RM 0 Free Express · 2B (RM 318): RM 0 Free · 3B (RM 477): RM 0 Priority VIP',
    paymentModes: 'COD, DuitNow Instant QR, FPX Online Banking',
  },
  {
    num: '14',
    stateName: 'Sabah (Borneo)',
    hubSlug: 'sabah-kota-kinabalu',
    href: '/malaysia-delivery/sabah-kota-kinabalu/',
    zoneLabel: 'BORNEO AIR FREIGHT ZONE',
    transitWindow: '2–4 Business Days Discreet Air Cargo Parcel',
    keyDistricts: 'Kota Kinabalu, Luyang, Penampang, Putatan, Sandakan, Tawau, Lahad Datu, Keningau, Kudat, Semporna, Ranau',
    postalCodes: '88000–91309',
    shippingCost: '1B (RM 159): RM 12 Air Subsidized · 2B (RM 318): RM 0 FREE · 3B (RM 477): RM 0 FREE Priority Air',
    paymentModes: 'FPX Online Banking, DuitNow Instant QR, Selected Metro COD',
  },
  {
    num: '15',
    stateName: 'Sarawak (Borneo)',
    hubSlug: 'sarawak-kuching',
    href: '/malaysia-delivery/sarawak-kuching/',
    zoneLabel: 'BORNEO AIR FREIGHT ZONE',
    transitWindow: '2–4 Business Days Discreet Air Cargo Parcel',
    keyDistricts: 'Kuching, Petra Jaya, Kota Samarahan, Miri, Sibu, Bintulu, Sarikei, Sri Aman, Limbang, Mukah, Kapit',
    postalCodes: '93000–98859',
    shippingCost: '1B (RM 159): RM 12 Air Subsidized · 2B (RM 318): RM 0 FREE · 3B (RM 477): RM 0 FREE Priority Air',
    paymentModes: 'FPX Online Banking, DuitNow Instant QR, Selected Metro COD',
  },
  {
    num: '16',
    stateName: 'Labuan (WP Federal Territory)',
    hubSlug: 'labuan',
    href: '/malaysia-delivery/labuan/',
    zoneLabel: 'BORNEO AIR FREIGHT ZONE',
    transitWindow: '2–4 Business Days Discreet Air Cargo Parcel',
    keyDistricts: 'Victoria (Bandar Labuan), Financial Park Complex, Rancha-Rancha Logistics Hub, Patau-Patau, Layang-Layangan',
    postalCodes: '87000–87033',
    shippingCost: '1B (RM 159): RM 12 Air Subsidized · 2B (RM 318): RM 0 FREE · 3B (RM 477): RM 0 FREE Priority Air',
    paymentModes: 'FPX Online Banking, DuitNow Instant QR, Selected COD',
  },
];

export const MAGNUM_FAQS = [
  {
    index: '01',
    category: 'ENTITY DISAMBIGUATION (ONYX-22)',
    questionEn: 'What is Magnum Pump XR on Onyxman.my? Is it an oral dietary supplement or mechanical/industrial pump equipment?',
    answerEn:
      'Magnum Pump XR on Onyxman.my (SKU: ONYX-MP-30, MPN: MPXR-30BLK-MY, GTIN-13: 9550000102042) is 100% an oral botanical and amino-acid Dietary Supplement for adult men (18+) containing 30 Jet-Black Capsules × 600mg per bottle (18,000mg total potency). The word "Pump" refers strictly to physiological Nitric Oxide (NO) vascular vasodilation and workout muscle pump supported by L-Arginine HCl and L-Citrulline Malate. It has ZERO relation, affiliation, or interchangeability with industrial oilfield mud/frac pumps (such as SPM Magnum XR fluid-end pumps) or any external mechanical vacuum device.',
  },
  {
    index: '02',
    category: 'JET-BLACK CAPSULE ENGINEERING',
    questionEn: 'Why does Magnum Pump XR come in 30 signature UV-shielded Jet-Black Capsules?',
    answerEn:
      'Each bottle of Magnum Pump XR houses 30 signature jet-black capsules (600mg each) engineered with a pharmaceutical carbon-pigmented opacifier shield. In Malaysia’s bright equatorial climate and high indoor humidity (80%+ RH), transparent capsule shells allow UV-A and visible light to oxidize photosensitive polymethoxyflavones in Thai Black Ginger (Kunyit Hitam) and quassinoids in Malaysian Tongkat Ali, while moisture degrades hygroscopic L-Citrulline Malate. Our UV-shielded jet-black shells block 99.8% of photolytic light and preserve free-flowing amino-acid potency from Capsule #1 to Capsule #30.',
  },
  {
    index: '03',
    category: 'EXTENDED-RELEASE (XR) KINETICS',
    questionEn: 'What does "XR" mean in Magnum Pump XR, and what are the exact milligram dosages per black capsule?',
    answerEn:
      '"XR" stands for Extended-Release Dual-Wave Nitric Oxide Kinetics. Each 600mg black capsule discloses 100% of its non-proprietary formula: (1) 180mg L-Arginine HCl for rapid first-wave endothelial nitric oxide synthesis within 30–45 minutes; (2) 140mg L-Citrulline Malate (2:1) which bypasses hepatic arginase breakdown and recycles into plasma L-Arginine over 4 to 6 hours for sustained vascular stamina; (3) 110mg Standardized Tribulus Terrestris (45% saponins); (4) 90mg Malaysian Tongkat Ali (100:1 root extract); (5) 65mg Thai Black Ginger (Kaempferia parviflora, 5% PMFs); and (6) 15mg Bioperine Black Pepper Extract (95% piperine) to boost intestinal absorption by up to 30%.',
  },
  {
    index: '04',
    category: '30-CAPSULE COMPARISON',
    questionEn: 'How do I choose between Magnum Pump XR and Grow XL since both contain 30 capsules at RM 159?',
    answerEn:
      'Both Magnum Pump XR (SKU: ONYX-MP-30) and Grow XL (SKU: ONYX-GX-30) provide a 30-capsule monthly supply at RM 159 with a Day-25 refill trigger, but they target different physiological pathways. Choose Magnum Pump XR (30 Black Capsules × 600mg) if your priority is high-output Nitric Oxide vasodilation (320mg combined L-Arginine HCl + L-Citrulline Malate per capsule), pre-workout gym vascularity, and evening physical stamina powered by Thai Black Ginger and Bioperine. Choose Grow XL if you prefer a morning post-breakfast botanical micro-circulation and prostate-supportive protocol featuring Muira Puama, Saw Palmetto, and Ginkgo Biloba.',
  },
  {
    index: '05',
    category: 'DAY-25 REFILL PROTOCOL',
    questionEn: 'Why is the automated refill reminder triggered on Day 25 for a 30-black-capsule bottle?',
    answerEn:
      'Because Magnum Pump XR contains 30 jet-black capsules per bottle (a full 30-day cycle at 1 capsule daily), taking 1 capsule per day leaves exactly 5 black capsules in reserve on Day 25. Triggering your 1-click Google Calendar Refill Alert on Day 25 (or Day 50 for the 2-Bottle tier / Day 75 for the 3-Bottle tier) provides a comfortable 5-day buffer so your fresh plain-parcel dispatch arrives across Peninsular Malaysia (1–2 business days) or Sabah/Sarawak (2–4 business days) before your 30th black capsule is finished.',
  },
  {
    index: '06',
    category: 'OFFICIAL MALAYSIA PRICING',
    questionEn: 'What are the official Malaysia prices for 1, 2, and 3 bottles of Magnum Pump XR?',
    answerEn:
      'Onyxman Malaysia maintains strict, uniform apothecary pricing across all formulations: 1 Bottle (30 Black Capsules · 18,000mg Total Potency · 30-Day Nitric Oxide XR Cycle) is RM 159 (159.00 MYR) with Free Discreet Express Shipping across Peninsular Malaysia (RM 12 subsidized air freight for East Malaysia); 2 Bottles (60 Black Capsules · 36,000mg Total Potency · 60-Day Dual Vascular & Gym Output Protocol) is RM 318 (318.00 MYR) with 100% Free Nationwide Discreet Shipping including Sabah, Sarawak & Labuan; and 3 Bottles (90 Black Capsules · 54,000mg Total Potency · 90-Day Pro Series Vault) is RM 477 (477.00 MYR) with Priority VIP Dispatch and Free Nationwide Shipping.',
  },
  {
    index: '07',
    category: 'CAFFEINE-FREE EVENING SAFETY',
    questionEn: 'Does Magnum Pump XR contain caffeine or synthetic stimulants that cause late-night insomnia?',
    answerEn:
      'No. Magnum Pump XR is 100% free from anhydrous caffeine, synephrine, yohimbine, DMAA, or synthetic central nervous system stimulants. Unlike jittery pre-workout powders that spike heart rate and ruin nocturnal sleep when taken after 18:00 MYT, Magnum Pump XR generates its physical pump and stamina strictly through non-stimulant endothelial nitric oxide precursors (L-Arginine HCl + L-Citrulline Malate) and adaptogenic botanicals—making it ideal for both late-afternoon resistance training and evening physical readiness.',
  },
  {
    index: '08',
    category: 'DISCREET MALAYSIA FULFILMENT',
    questionEn: 'Is Magnum Pump XR shipped in 100% unmarked discreet packaging across all 16 Malaysian states?',
    answerEn:
      'Yes—100% privacy is mandatory on every order. Your Magnum Pump XR bottle is sealed inside an opaque, tear-resistant matte security mailer or plain corrugated box. The courier airway bill lists the sender neutrally as "OM Fulfilment Logistics" and describes the contents as "Personal Nutritional Supplements — Ref #MP30". Zero mention of "Magnum Pump XR", "Testosterone Pro Series", "Male Enhancement", or "Onyxman" ever appears on the outer parcel.',
  },
  {
    index: '09',
    category: 'PAYMENT & EXPRESS RESERVATION',
    questionEn: 'How do I order Magnum Pump XR via Cash on Delivery (COD), DuitNow QR, or FPX Online Banking?',
    answerEn:
      'Click any "Acquire Magnum Pump XR" button on this page to open our 1-Click Express Discreet Order Drawer. Select 1 Bottle (RM 159), 2 Bottles (RM 318), or 3 Bottles (RM 477), enter your Malaysian delivery address, and choose Cash on Delivery (COD — pay upon receiving your sealed parcel), DuitNow Instant QR, or FPX Online Banking. Your reservation routes directly to our Kuala Lumpur fulfilment desk (waleedshoaibofficial@gmail.com, sales@onyxman.my, info@onyxman.my) for immediate dispatch.',
  },
  {
    index: '10',
    category: 'PHYSICIAN CONSULTATION & SAFETY',
    questionEn: 'Who should consult a licensed medical doctor before taking a Nitric Oxide supplement like Magnum Pump XR?',
    answerEn:
      'Magnum Pump XR is a botanical and amino-acid dietary supplement formulated strictly for healthy adult men aged 18 and above. It is not a pharmaceutical drug and is not intended to diagnose, treat, cure, or prevent any disease. Because L-Arginine HCl, L-Citrulline Malate, and Kaempferia parviflora actively support nitric oxide vasodilation pathways, men taking prescription organic nitrates for chest pain/angina, alpha-blockers, antihypertensive blood-pressure medications, or prescription PDE5 inhibitors must consult a licensed Malaysian physician prior to use.',
  },
];

/**
 * Builds the comprehensive @graph JSON-LD specifically for https://www.onyxmen.my/magnum-pump-xr-malaysia/
 * Uses buildFullPageGraph from src/utils/schema-graph.mjs + MAGNUM_PRODUCT_DATA from src/data/products/magnum-pump-xr.json
 * and enriches the Product/DietarySupplement node with explicit ONYX-22 entity disambiguation,
 * SKU ONYX-MP-30, MPN MPXR-30BLK-MY, GTIN-13 9550000102042, and 1/2/3-bottle ProductGroup variants.
 */
export function buildMagnumEnSchemaGraph(canonicalUrlOverride = MAGNUM_CONSTANTS.canonicalUrl) {
  const pageUrl = canonicalUrlOverride;
  const productNodeId = `${pageUrl}#product`;
  const productGroupId = `${pageUrl}#product-group`;

  const activeIngredientsList = MAGNUM_BOTANICAL_ACTIVES.map(
    (act) => `${act.name} (${act.dosageMg}mg — ${act.standardization})`
  );

  const customProductInput = {
    id: MAGNUM_PRODUCT_DATA.id || 'magnum-pump-xr',
    slug: MAGNUM_PRODUCT_DATA.slug || 'magnum-pump-xr',
    name: MAGNUM_CONSTANTS.productName,
    fullTitleEn: `${MAGNUM_CONSTANTS.productName} — ${MAGNUM_CONSTANTS.officialSubtitle} (600mg Extended-Release Nitric Oxide & Testosterone Pro Series Matrix)`,
    fullTitleMs: `${MAGNUM_CONSTANTS.productName} — ${MAGNUM_PRODUCT_DATA.labelTranscription?.subtitleMs || 'Testosterone Pro Series — 30 Kapsul Hitam'}`,
    descriptionEn:
      MAGNUM_PRODUCT_DATA.entityDisambiguation?.positiveClassificationEn ||
      'Magnum Pump XR by Onyxman Malaysia is strictly an oral botanical and amino-acid Dietary Supplement for adult men (30 Black Capsules per bottle, SKU ONYX-MP-30, MPN MPXR-30BLK-MY, GTIN-13 9550000102042) formulated with L-Arginine HCl (180mg), L-Citrulline Malate 2:1 (140mg), Tribulus Terrestris (110mg), Malaysian Tongkat Ali (90mg), Thai Black Ginger (65mg), and Bioperine (15mg).',
    descriptionMs:
      MAGNUM_PRODUCT_DATA.entityDisambiguation?.positiveClassificationMs ||
      'Magnum Pump XR oleh Onyxman Malaysia adalah Suplemen Pemakanan kapsul botani dan asid amino untuk lelaki dewasa (30 Kapsul Hitam setiap botol, SKU ONYX-MP-30, MPN MPXR-30BLK-MY).',
    disambiguatingDescriptionEn: `${MAGNUM_PRODUCT_DATA.entityDisambiguation?.positiveClassificationEn} ${MAGNUM_PRODUCT_DATA.entityDisambiguation?.negativeDisambiguationEn}`,
    disambiguatingDescriptionMs: `${MAGNUM_PRODUCT_DATA.entityDisambiguation?.positiveClassificationMs} ${MAGNUM_PRODUCT_DATA.entityDisambiguation?.negativeDisambiguationMs}`,
    capsuleCount: MAGNUM_CONSTANTS.capsuleCount,
    dosageProtocolEn:
      'Take 1 jet-black capsule (600mg) with 300ml water 30–45 minutes before resistance training or evening physical activity, or 1 black capsule between lunch and dinner on rest days for continuous 30-day Nitric Oxide & Testosterone Pro Series conditioning.',
    dosageProtocolMs:
      'Ambil 1 kapsul hitam (600mg) bersama 300ml air 30–45 minit sebelum senaman atau aktiviti malam.',
    primaryFocusEn:
      'Extended-Release Nitric Oxide Vasodilation, Pre-Workout Muscular Vascularity & Evening Physical Stamina',
    primaryFocusMs:
      'Aliran Vaskular Nitrik Oksida Pelepasan Lanjutan, Prestasi Senaman & Stamina Waktu Malam',
    keyBotanicals: activeIngredientsList,
    priceMYR: '159.00',
    sku: MAGNUM_CONSTANTS.sku,
    mpn: MAGNUM_CONSTANTS.mpn,
    gtin13: MAGNUM_CONSTANTS.gtin13,
    imageStageWebp: `https://www.onyxmen.my${MAGNUM_CONSTANTS.assets.stageWebp}`,
    imageStagePng: `https://www.onyxmen.my${MAGNUM_CONSTANTS.assets.stagePng}`,
    imagePortraitWebp: `https://www.onyxmen.my${MAGNUM_CONSTANTS.assets.portraitWebp}`,
    imagePortraitPng: `https://www.onyxmen.my${MAGNUM_CONSTANTS.assets.portraitPng}`,
    imageCutoutWebp: `https://www.onyxmen.my${MAGNUM_CONSTANTS.assets.cutoutWebp}`,
    imageCutoutPng: `https://www.onyxmen.my${MAGNUM_CONSTANTS.assets.cutoutPng}`,
  };

  const baseGraphJson = buildFullPageGraph({
    pageType: 'product',
    locale: 'en-MY',
    pageUrl,
    title:
      'Magnum Pump XR Malaysia (30 Black Capsules) — Testosterone Pro Series Nitric Oxide Supplement | RM 159 Onyxman.my',
    description:
      'Reserve authentic Magnum Pump XR (Testosterone Pro Series — Male Enhancement Formula Maximum Strength — 30 Black Capsules, SKU: ONYX-MP-30, MPN: MPXR-30BLK-MY, GTIN-13: 9550000102042) for RM 159 at Onyxman.my. 600mg UV-shielded jet-black oral dietary supplement capsules with L-Arginine HCl, L-Citrulline Malate 2:1, Tribulus Terrestris, Malaysian Tongkat Ali, Thai Black Ginger & Bioperine.',
    product: customProductInput,
    breadcrumbs: [
      { name: 'Onyxman Malaysia (Home)', url: 'https://www.onyxmen.my/' },
      { name: 'Apothecary Formulations', url: 'https://www.onyxmen.my/products/' },
      {
        name: 'Magnum Pump XR (Testosterone Pro Series — 30 Black Capsules · SKU ONYX-MP-30)',
        url: pageUrl,
      },
    ],
    faqs: MAGNUM_FAQS.map((f) => ({
      questionEn: f.questionEn,
      answerEn: f.answerEn,
    })),
  });

  const parsedGraph = JSON.parse(baseGraphJson);
  const shippingDetailsNode = buildShippingDetailsNode();
  const returnPolicyNode = buildReturnPolicyNode();

  const images = [
    `https://www.onyxmen.my${MAGNUM_CONSTANTS.assets.stageWebp}`,
    `https://www.onyxmen.my${MAGNUM_CONSTANTS.assets.stagePng}`,
    `https://www.onyxmen.my${MAGNUM_CONSTANTS.assets.portraitWebp}`,
    `https://www.onyxmen.my${MAGNUM_CONSTANTS.assets.portraitPng}`,
    `https://www.onyxmen.my${MAGNUM_CONSTANTS.assets.cutoutWebp}`,
    `https://www.onyxmen.my${MAGNUM_CONSTANTS.assets.cutoutPng}`,
  ];

  const brandNode = {
    '@type': 'Brand',
    '@id': BRAND_ID,
    name: 'Onyxman',
    url: 'https://www.onyxmen.my',
  };

  const sellerNode = {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Onyxman Malaysia',
    url: 'https://www.onyxmen.my',
    email: 'sales@onyxman.my',
  };

  const variantTiers = [
    {
      bottles: 1,
      capsules: 30,
      days: 30,
      refillDay: 25,
      price: '159.00',
      skuSuffix: '1B',
      name: 'Magnum Pump XR — 1 Bottle Single 30-Black-Capsule Nitric Oxide XR Cycle (30 Black Capsules × 600mg)',
    },
    {
      bottles: 2,
      capsules: 60,
      days: 60,
      refillDay: 50,
      price: '318.00',
      skuSuffix: '2B',
      name: 'Magnum Pump XR — 2 Bottles Dual Vascular & Gym Output Protocol (60 Black Capsules × 600mg · Free Nationwide Malaysia Shipping)',
    },
    {
      bottles: 3,
      capsules: 90,
      days: 90,
      refillDay: 75,
      price: '477.00',
      skuSuffix: '3B',
      name: 'Magnum Pump XR — 3 Bottles Maximum Strength Pro Series Vault (90 Black Capsules × 600mg · Priority VIP Dispatch)',
    },
  ];

  const hasVariantNodes = variantTiers.map((tier) => ({
    '@type': ['Product', 'DietarySupplement'],
    '@id': `${pageUrl}#variant-${tier.bottles}-bottle`,
    name: tier.name,
    sku: `${MAGNUM_CONSTANTS.sku}-${tier.skuSuffix}`,
    mpn: `${MAGNUM_CONSTANTS.mpn}-${tier.skuSuffix}`,
    gtin13: MAGNUM_CONSTANTS.gtin13,
    image: images,
    brand: brandNode,
    isVariantOf: {
      '@id': productGroupId,
    },
    size: `${tier.bottles} ${tier.bottles === 1 ? 'Bottle' : 'Bottles'} (${tier.capsules} UV-Shielded Jet-Black Capsules × 600mg)`,
    activeIngredient: activeIngredientsList.join(', '),
    targetPopulation: 'Adult Men (18+)',
    isProprietary: false,
    legalStatus:
      'Oral Botanical & Amino-Acid Dietary Supplement (30 Jet-Black Capsules per Bottle — Not an Industrial or Mechanical Pump)',
    offers: {
      '@type': 'Offer',
      '@id': `${pageUrl}#offer-${tier.bottles}-bottle`,
      url: pageUrl,
      sku: `${MAGNUM_CONSTANTS.sku}-${tier.skuSuffix}`,
      price: tier.price,
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

  parsedGraph['@graph'] = parsedGraph['@graph'].map((node) => {
    if (node['@type'] === 'ItemPage') {
      return {
        ...node,
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        mainEntity: { '@id': productNodeId },
        breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: [
            'h1',
            '#ms114a-hero-summary',
            '#ms114a-disambiguation-banner',
            '#ms114a-botanical-lead',
            '#ms114a-faq-heading',
          ],
        },
      };
    }

    if (
      Array.isArray(node['@type']) &&
      node['@type'].includes('Product') &&
      node['@type'].includes('DietarySupplement')
    ) {
      return {
        ...node,
        '@id': productNodeId,
        url: pageUrl,
        sameAs: [
          'https://www.onyxmen.my/magnum-pump-xr-malaysia/',
          'https://www.onyxmen.my/products/magnum-pump-xr/',
        ],
        sku: MAGNUM_CONSTANTS.sku,
        mpn: MAGNUM_CONSTANTS.mpn,
        gtin13: MAGNUM_CONSTANTS.gtin13,
        alternateName: [
          'Magnum Pump XR Malaysia',
          'Magnum Pump XR Testosterone Pro Series 30 Black Capsules',
          'Onyxman Magnum Pump XR Nitric Oxide Dietary Supplement',
          'ONYX-MP-30',
        ],
        disambiguatingDescription:
          'Magnum Pump XR by Onyxman Malaysia (SKU: ONYX-MP-30, MPN: MPXR-30BLK-MY, GTIN-13: 9550000102042) is strictly an oral botanical and amino-acid Dietary Supplement for adult men (30 Jet-Black Capsules × 600mg per bottle) formulated with L-Arginine HCl, L-Citrulline Malate 2:1, Tribulus Terrestris, Malaysian Tongkat Ali, Thai Black Ginger, and Bioperine. Explicitly NOT affiliated with, related to, or interchangeable with any mechanical, hydraulic, frac, slurry, or industrial oilfield mud pump equipment (such as SPM Magnum XR fluid-end pumps), nor any external vacuum device.',
        isVariantOf: { '@id': productGroupId },
        additionalProperty: [
          {
            '@type': 'PropertyValue',
            name: 'Entity Disambiguation Code (ONYX-22)',
            value:
              'Oral Botanical & Amino-Acid Dietary Supplement (30 Black Capsules × 600mg). Zero relation to industrial oilfield mud/frac pumps (SPM Magnum XR) or mechanical vacuum pumps.',
          },
          {
            '@type': 'PropertyValue',
            name: 'Capsule Format & UV Shielding',
            value:
              '30 Extended-Release (XR) UV-Shielded Jet-Black Capsules × 600mg (18,000mg Total Bottle Active Potency)',
          },
          {
            '@type': 'PropertyValue',
            name: 'Refill Cycle Protocol',
            value:
              'Day-25 Automated Refill Reminder Calendar Integration (30-Day Nitric Oxide & Vitality Cycle)',
          },
          {
            '@type': 'PropertyValue',
            name: 'Discreet Parcel Protocol',
            value: '100% Unmarked Matte Security Mailer · Sender: OM Fulfilment Logistics',
          },
        ],
        offers: {
          ...node.offers,
          '@id': `${pageUrl}#offer-1-bottle`,
          url: pageUrl,
          sku: MAGNUM_CONSTANTS.sku,
          price: '159.00',
          priceCurrency: 'MYR',
        },
      };
    }

    if (node['@type'] === 'ProductGroup') {
      return {
        ...node,
        '@id': productGroupId,
        url: pageUrl,
        productGroupID: `${MAGNUM_CONSTANTS.sku}-GROUP`,
        name: 'Magnum Pump XR (30 Black Capsules) — Official Multi-Bottle Protocol Collection (1, 2 & 3 Bottles)',
        description:
          'Official Onyxman Malaysia multi-bottle protocol tiers for Magnum Pump XR (SKU: ONYX-MP-30, MPN: MPXR-30BLK-MY, GTIN-13: 9550000102042): 1 Bottle (30 Black Capsules) = RM 159.00, 2 Bottles (60 Black Capsules) = RM 318.00, 3 Bottles (90 Black Capsules) = RM 477.00.',
        hasVariant: hasVariantNodes,
      };
    }

    return node;
  });

  return parsedGraph;
}

/**
 * Dedicated Flagship Page Scoped Architectural Styles (MS-114A).
 * Strictly enforces Rule #29 & Rule #30:
 * - Paradigm A: 100vw x 100vh Full-Bleed Obsidian Hero Stage
 * - Paradigm D: 50vw / 50vw Pinned Split-Screen Nitric Oxide & Botanical Monograph Stage
 * - Architectural Hairline Ledgers & Editorial Spreads
 * - Palette: #050507, #0B0C10, #12141C, #D4AF37, #EAE6DF
 * - Typography: 'Cormorant Garamond', 'Syne', 'Space Grotesk'
 * - ZERO #FAF8F5, ZERO Plus Jakarta Sans, ZERO border-radius: 999px, ZERO repeat(3, 1fr) bordered card boxes
 */
export const MAGNUM_PAGE_SCOPED_CSS = `
<style id="onyxman-magnum-flagship-css">
  /* ==========================================================================
     MAGNUM PUMP XR EN-MY FLAGSHIP ARCHITECTURAL STAGE STYLES (MS-114A)
     ========================================================================== */

  .magnum-breadcrumb-bar {
    position: relative;
    z-index: 5;
    width: 100%;
    max-width: 1720px;
    margin: 0 auto 1.25rem;
    padding-bottom: 0.9rem;
    border-bottom: var(--hairline-subtle);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    font-family: var(--font-technical);
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--text-muted-alabaster);
  }

  .magnum-breadcrumb-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.65rem;
    list-style: none;
  }

  .magnum-breadcrumb-list a:hover {
    color: var(--gold-foil-bright);
  }

  .magnum-breadcrumb-current {
    color: var(--gold-champagne);
    font-weight: 600;
  }

  .magnum-disambiguation-crest {
    display: inline-flex;
    align-items: center;
    gap: 0.65rem;
    padding: 0.4rem 0.95rem;
    border-left: 2px solid var(--gold-champagne);
    background: linear-gradient(90deg, rgba(212, 175, 55, 0.16) 0%, rgba(11, 12, 16, 0.85) 100%);
    color: var(--text-silk-ivory);
    font-family: var(--font-technical);
    font-size: 0.69rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .magnum-disambiguation-dot {
    width: 8px;
    height: 8px;
    background-color: var(--gold-champagne);
    box-shadow: 0 0 10px var(--gold-champagne);
    display: inline-block;
  }

  /* Chapter 1: 100vw x 100vh Full-Bleed Obsidian Hero Stage */
  .magnum-hero-cinema {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    background-color: var(--bg-abyssal-obsidian);
    background-image:
      radial-gradient(circle at 68% 42%, rgba(212, 175, 55, 0.17) 0%, rgba(18, 20, 28, 0.78) 42%, #050507 100%),
      linear-gradient(180deg, #050507 0%, #0B0C10 62%, #050507 100%);
    padding: clamp(2.25rem, 5vh, 4.5rem) var(--gutter-cinema) var(--gutter-vertical);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: var(--hairline-rule);
    overflow: hidden;
  }

  .magnum-hero-cinema__ambient-watermark {
    position: absolute;
    top: 11%;
    right: -2vw;
    z-index: 1;
    font-family: var(--font-display);
    font-size: clamp(5.8rem, 14vw, 16.5rem);
    font-weight: 600;
    line-height: 0.85;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(212, 175, 55, 0.036);
    pointer-events: none;
    user-select: none;
    white-space: nowrap;
  }

  .magnum-hero-cinema__stage-layout {
    position: relative;
    z-index: 3;
    width: 100%;
    max-width: 1720px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: clamp(2.5rem, 4.5vw, 5.5rem);
  }

  .magnum-hero-cinema__editorial-wing {
    flex: 1 1 560px;
    max-width: 780px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .magnum-hero-cinema__bottle-wing {
    flex: 1 1 440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: 620px;
  }

  .magnum-hero-cinema__halo {
    position: absolute;
    width: clamp(320px, 38vw, 560px);
    height: clamp(320px, 38vw, 560px);
    background: radial-gradient(
      circle,
      rgba(212, 175, 55, 0.22) 0%,
      rgba(18, 20, 28, 0.55) 42%,
      rgba(5, 5, 7, 0) 74%
    );
    pointer-events: none;
    z-index: 1;
  }

  .magnum-hero-cinema__bottle-picture {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 590px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .magnum-hero-cinema__bottle-img {
    width: 100%;
    max-height: 72vh;
    object-fit: contain;
    mask-image: radial-gradient(circle at 50% 50%, #000000 76%, transparent 99%);
    -webkit-mask-image: radial-gradient(circle at 50% 50%, #000000 76%, transparent 99%);
    filter: drop-shadow(0 36px 72px rgba(0, 0, 0, 0.96));
    transition: transform 640ms var(--ease-cinema);
  }

  .magnum-hero-cinema__bottle-wing:hover .magnum-hero-cinema__bottle-img {
    transform: translateY(-6px) scale(1.015);
  }

  .magnum-hero-cinema__caption-strip {
    position: relative;
    z-index: 3;
    width: 100%;
    max-width: 550px;
    margin-top: 1.25rem;
    padding-top: 1rem;
    border-top: var(--hairline-rule);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.85rem;
    font-family: var(--font-technical);
    font-size: 0.72rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-muted-alabaster);
  }

  .magnum-hero-cinema__subtitle-transcription {
    font-family: var(--font-architectural);
    font-size: clamp(1.04rem, 1.42vw, 1.35rem);
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--gold-foil-bright);
    padding-left: 1rem;
    border-left: 2px solid var(--gold-champagne);
  }

  .magnum-hero-cinema__disambiguation-callout {
    padding: 1.15rem 1.4rem;
    background: linear-gradient(90deg, rgba(18, 20, 28, 0.95) 0%, rgba(11, 12, 16, 0.72) 100%);
    border-left: 2px solid var(--gold-champagne);
    border-top: var(--hairline-subtle);
    border-bottom: var(--hairline-subtle);
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
  }

  .magnum-hero-cinema__disambiguation-title {
    font-family: var(--font-technical);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-foil-bright);
  }

  .magnum-hero-cinema__disambiguation-text {
    font-size: 0.9rem;
    color: var(--text-silk-ivory);
    line-height: 1.6;
  }

  .magnum-hero-cinema__cta-cluster {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.15rem;
    padding-top: 0.5rem;
  }

  .magnum-hero-cinema__telemetry-ribbon {
    position: relative;
    z-index: 3;
    width: 100%;
    max-width: 1720px;
    margin: 3rem auto 0;
    padding-top: 1.75rem;
    border-top: var(--hairline-rule);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.75rem;
  }

  .magnum-telemetry-node {
    flex: 1 1 210px;
    display: flex;
    flex-direction: column;
    gap: 0.28rem;
    padding-left: 0.95rem;
    border-left: var(--hairline-subtle);
  }

  .magnum-telemetry-node__label {
    font-family: var(--font-technical);
    font-size: 0.68rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }

  .magnum-telemetry-node__value {
    font-family: var(--font-display);
    font-size: 1.35rem;
    color: var(--text-silk-ivory);
    line-height: 1.15;
  }

  .magnum-telemetry-node__sub {
    font-size: 0.78rem;
    color: var(--text-muted-alabaster);
  }

  /* Chapter 2: Paradigm D Pinned 50vw / 50vw Nitric Oxide & Botanical Monograph Stage */
  .magnum-monograph-entry {
    padding: 2.35rem 0;
    border-bottom: var(--hairline-rule);
    display: flex;
    flex-direction: column;
    gap: 1.05rem;
  }

  .magnum-monograph-entry:first-of-type {
    border-top: var(--hairline-rule);
  }

  .magnum-monograph-entry__header {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
  }

  .magnum-monograph-entry__index-group {
    display: inline-flex;
    align-items: baseline;
    gap: 0.85rem;
  }

  .magnum-monograph-entry__index {
    font-family: var(--font-technical);
    font-size: 0.75rem;
    letter-spacing: 0.24em;
    color: var(--gold-champagne);
  }

  .magnum-monograph-entry__title {
    font-family: var(--font-display);
    font-size: clamp(1.65rem, 2.4vw, 2.25rem);
    font-weight: 500;
    color: var(--text-silk-ivory);
  }

  .magnum-monograph-entry__dosage-stamp {
    font-family: var(--font-display);
    font-size: 1.75rem;
    color: var(--gold-foil-bright);
    letter-spacing: 0.02em;
  }

  .magnum-monograph-entry__scientific {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.08rem;
    color: var(--gold-champagne);
  }

  .magnum-monograph-entry__specs-ledger {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    padding: 0.95rem 0;
    border-top: var(--hairline-subtle);
    border-bottom: var(--hairline-subtle);
    font-size: 0.84rem;
  }

  .magnum-monograph-entry__spec-line {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.75rem;
  }

  .magnum-monograph-entry__spec-key {
    font-family: var(--font-technical);
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--text-ash-silver);
  }

  .magnum-monograph-entry__spec-val {
    color: var(--text-silk-ivory);
    text-align: right;
  }

  .magnum-monograph-entry__body {
    font-size: 0.96rem;
    color: var(--text-muted-alabaster);
    line-height: 1.7;
  }

  .magnum-monograph-entry__footnote {
    font-size: 0.82rem;
    color: var(--gold-foil-bright);
    padding-left: 0.85rem;
    border-left: 1px solid var(--gold-champagne);
  }

  /* UV-Shielded Jet-Black Capsule Engineering Stage (Chapter 2 Part B) */
  .magnum-blackcap-science-stage {
    background-color: var(--bg-velvet-charcoal);
    background-image: radial-gradient(circle at 22% 30%, rgba(212, 175, 55, 0.12) 0%, rgba(5, 5, 7, 0.95) 70%);
    padding: var(--gutter-vertical) var(--gutter-cinema);
    border-bottom: var(--hairline-rule);
  }

  .magnum-stage-container {
    width: 100%;
    max-width: 1680px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .magnum-stage-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: var(--hairline-rule);
  }

  .magnum-stage-header__left {
    flex: 1 1 560px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .magnum-stage-header__right {
    flex: 1 1 420px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  /* Chapter 3: 30-Day Chronology, Day-25 Refill Trigger, ONYX-22 Disambiguation, Comparison & 16-State Ledger */
  .magnum-cycle-stage {
    background-color: var(--bg-abyssal-obsidian);
    padding: var(--gutter-vertical) var(--gutter-cinema);
    border-bottom: var(--hairline-rule);
  }

  .magnum-refill-concierge-band {
    background: linear-gradient(135deg, rgba(18, 20, 28, 0.96) 0%, rgba(11, 12, 16, 0.98) 100%);
    border-top: var(--hairline-rule);
    border-bottom: var(--hairline-rule);
    border-left: 3px solid var(--gold-champagne);
    padding: clamp(2rem, 4vw, 3.5rem);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 2.5rem;
  }

  .magnum-refill-concierge-band__copy {
    flex: 1 1 540px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .magnum-refill-concierge-band__actions {
    flex: 1 1 380px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .magnum-disambiguation-stage {
    background-color: var(--bg-velvet-charcoal);
    padding: var(--gutter-vertical) var(--gutter-cinema);
    border-bottom: var(--hairline-rule);
  }

  .magnum-comparison-stage {
    background-color: var(--bg-smoked-onyx);
    padding: var(--gutter-vertical) var(--gutter-cinema);
    border-bottom: var(--hairline-rule);
  }

  .magnum-matrix-scroll {
    width: 100%;
    overflow-x: auto;
    border-top: var(--hairline-rule);
    border-bottom: var(--hairline-rule);
  }

  .magnum-matrix-table {
    width: 100%;
    min-width: 980px;
    border-collapse: collapse;
    text-align: left;
    font-size: 0.9rem;
  }

  .magnum-matrix-table th,
  .magnum-matrix-table td {
    padding: 1.35rem 1.15rem;
    border-bottom: var(--hairline-subtle);
    vertical-align: top;
  }

  .magnum-matrix-table thead th {
    font-family: var(--font-technical);
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-champagne);
    border-bottom: var(--hairline-rule);
    background-color: rgba(5, 5, 7, 0.65);
  }

  .magnum-matrix-table__highlight-col {
    background: linear-gradient(180deg, rgba(212, 175, 55, 0.12) 0%, rgba(18, 20, 28, 0.45) 100%);
    border-left: var(--hairline-rule);
    border-right: var(--hairline-rule);
  }

  .magnum-states-stage {
    background-color: var(--bg-abyssal-obsidian);
    padding: var(--gutter-vertical) var(--gutter-cinema);
    border-bottom: var(--hairline-rule);
  }

  /* Chapter 4: 10-Question Interactive FAQ Accordion Stage */
  .magnum-faq-stage {
    background-color: var(--bg-smoked-onyx);
    padding: var(--gutter-vertical) var(--gutter-cinema);
    border-bottom: var(--hairline-rule);
  }

  .magnum-faq-ledger {
    width: 100%;
    border-top: var(--hairline-rule);
  }

  .magnum-faq-item {
    border-bottom: var(--hairline-subtle);
    transition: background-color 220ms ease;
  }

  .magnum-faq-item[open] {
    background-color: rgba(212, 175, 55, 0.04);
    border-bottom-color: var(--gold-champagne);
  }

  .magnum-faq-summary {
    list-style: none;
    cursor: pointer;
    padding: 1.65rem 0.5rem;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .magnum-faq-summary::-webkit-details-marker {
    display: none;
  }

  .magnum-faq-summary__left {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 1.15rem;
  }

  .magnum-faq-summary__index {
    font-family: var(--font-technical);
    font-size: 0.74rem;
    letter-spacing: 0.22em;
    color: var(--gold-champagne);
    min-width: 3.2rem;
  }

  .magnum-faq-summary__category {
    font-family: var(--font-technical);
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-foil-bright);
  }

  .magnum-faq-summary__question {
    font-family: var(--font-display);
    font-size: clamp(1.35rem, 2vw, 1.8rem);
    color: var(--text-silk-ivory);
    font-weight: 500;
  }

  .magnum-faq-summary__icon {
    font-family: var(--font-technical);
    font-size: 1.25rem;
    color: var(--gold-foil-bright);
    transition: transform 260ms var(--ease-cinema);
  }

  .magnum-faq-item[open] .magnum-faq-summary__icon {
    transform: rotate(45deg);
  }

  .magnum-faq-answer {
    padding: 0 0.5rem 1.85rem 4.35rem;
    max-width: 105ch;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: var(--text-muted-alabaster);
    font-size: 0.98rem;
    line-height: 1.72;
  }

  @media (max-width: 768px) {
    .magnum-faq-answer {
      padding-left: 0.5rem;
    }
    .magnum-hero-cinema__bottle-wing {
      min-height: 420px;
    }
  }
</style>
`;

/**
 * Renders Chapter 1: 100vw x 100vh Full-Bleed Obsidian Hero Stage for Magnum Pump XR.
 * Features /assets/products/magnum-pump-xr-stage.webp (bottle + 6 loose glossy black capsules),
 * interactive 1/2/3-bottle tier selector (RM 159 / RM 318 / RM 477),
 * ONYX-22 DietarySupplement Entity Disambiguation Banner, and 1-Click Express Order Drawer triggers.
 */
export function renderChapter1HeroStage() {
  return `
      <!-- =====================================================================
           CHAPTER 1: 100VW X 100VH FULL-BLEED OBSIDIAN HERO STAGE (PARADIGM A)
           Product: Magnum Pump XR (Testosterone Pro Series — Male Enhancement Formula Maximum Strength — 30 Black Capsules)
           SKU: ONYX-MP-30 | MPN: MPXR-30BLK-MY | GTIN-13: 9550000102042
           ===================================================================== -->
      <section
        id="ms114a-magnum-hero-stage"
        class="magnum-hero-cinema"
        aria-labelledby="ms114a-hero-title"
        data-paradigm="A-100vw-100vh-obsidian-stage"
      >
        <div class="magnum-hero-cinema__ambient-watermark" aria-hidden="true">
          NITRIC · XR · XXX
        </div>

        <!-- Architectural Breadcrumb & ONYX-22 DietarySupplement Entity Disambiguation Bar -->
        <div class="magnum-breadcrumb-bar">
          <nav aria-label="Breadcrumb">
            <ol class="magnum-breadcrumb-list">
              <li><a href="/">ONYXMAN MALAYSIA</a></li>
              <li aria-hidden="true">/</li>
              <li><a href="/products/">APOTHECARY VAULT</a></li>
              <li aria-hidden="true">/</li>
              <li class="magnum-breadcrumb-current" aria-current="page">
                MAGNUM PUMP XR (30 BLACK CAPSULES · SKU ONYX-MP-30)
              </li>
            </ol>
          </nav>

          <div class="magnum-disambiguation-crest" id="ms114a-disambiguation-banner">
            <span class="magnum-disambiguation-dot" aria-hidden="true"></span>
            <span>ORAL DIETARY SUPPLEMENT (30 BLACK CAPSULES) · NOT MECHANICAL OR OILFIELD PUMP EQUIPMENT</span>
          </div>
        </div>

        <!-- Primary 100vw x 100vh Hero Stage Split -->
        <div class="magnum-hero-cinema__stage-layout">
          <!-- Left Editorial & Conversion Wing -->
          <div class="magnum-hero-cinema__editorial-wing">
            <span class="editorial-kicker">
              FORMULATION IV · TESTOSTERONE PRO SERIES · 30 UV-SHIELDED JET-BLACK CAPSULES
            </span>

            <h1 id="ms114a-hero-title" class="editorial-headline-xl">
              <span class="foil-champagne-text">Magnum Pump XR</span> — Extended-Release Nitric Oxide &amp; Maximum Strength Black Capsules
            </h1>

            <p class="magnum-hero-cinema__subtitle-transcription">
              Official Bottle Inscription: &ldquo;Testosterone Pro Series &mdash; Male Enhancement Formula Maximum Strength &mdash; 30 Black Capsules&rdquo;
            </p>

            <p id="ms114a-hero-summary" class="editorial-lead-paragraph">
              Engineered with <strong>30 signature UV-shielded jet-black oral capsules</strong> per bottle (<strong>600mg per capsule = 18,000mg total net potency</strong>), Magnum Pump XR unites dual-wave Nitric Oxide amino precursors (<strong>180mg L-Arginine HCl + 140mg L-Citrulline Malate 2:1</strong>) with <strong>110mg Tribulus Terrestris</strong>, <strong>90mg Malaysian Tongkat Ali 100:1</strong>, <strong>65mg Thai Black Ginger (Kunyit Hitam)</strong>, and <strong>15mg Bioperine Black Pepper Extract</strong>.
            </p>

            <!-- Mandatory ONYX-22 Entity Disambiguation Callout -->
            <div class="magnum-hero-cinema__disambiguation-callout">
              <span class="magnum-hero-cinema__disambiguation-title">
                SEMANTIC ENTITY VERIFICATION (ONYX-22 · SCHEMA.ORG DIETARYSUPPLEMENT · SKU ONYX-MP-30)
              </span>
              <p class="magnum-hero-cinema__disambiguation-text">
                <strong>Magnum Pump XR</strong> by Onyxman Malaysia is strictly an <strong>oral botanical and amino-acid Dietary Supplement</strong> (30 Black Capsules × 600mg, MPN: <code>MPXR-30BLK-MY</code>, GTIN-13: <code>9550000102042</code>) supporting vascular nitric oxide flow and adult men&rsquo;s stamina. It has <strong>zero affiliation or relation</strong> to industrial oilfield mud/frac pumps (<em>SPM Magnum XR</em>) or mechanical vacuum devices.
              </p>
            </div>

            <!-- Interactive 1 / 2 / 3 Bottle Tier Selector Strip (RM 159 / RM 318 / RM 477) -->
            <div
              class="tier-strip-group"
              role="radiogroup"
              aria-label="Select Magnum Pump XR Multi-Bottle Protocol Tier"
              data-hero-tier-selector="magnum-pump-xr"
            >
              <!-- Tier 1: 1 Bottle (30 Black Capsules) = RM 159 -->
              <button
                type="button"
                role="radio"
                aria-checked="false"
                class="tier-strip-option"
                data-open-order-drawer="true"
                data-order-product="magnum-pump-xr"
                data-order-qty="1"
              >
                <div class="tier-strip-option__left">
                  <span class="tier-strip-option__eyebrow">
                    TIER 01 · 30 BLACK CAPSULES RESERVE · 30-DAY NITRIC OXIDE XR CYCLE · SKU ONYX-MP-30-1B
                  </span>
                  <strong class="tier-strip-option__title">
                    1 Bottle — 30 Jet-Black Capsules × 600mg (18,000mg Total Potency)
                  </strong>
                  <span class="tier-strip-option__subtitle">
                    Free Discreet Express Shipping in Peninsular Malaysia (RM 12 Sabah/Sarawak) · Day-25 Refill Alert
                  </span>
                </div>
                <span class="tier-strip-option__price">RM 159</span>
              </button>

              <!-- Tier 2: 2 Bottles (60 Black Capsules) = RM 318 (Default Highlighted Protocol) -->
              <button
                type="button"
                role="radio"
                aria-checked="true"
                class="tier-strip-option tier-strip-option--selected"
                data-open-order-drawer="true"
                data-order-product="magnum-pump-xr"
                data-order-qty="2"
              >
                <div class="tier-strip-option__left">
                  <span class="tier-strip-option__eyebrow">
                    TIER 02 · FAVORITE FOR GYM &amp; EVENING DRIVE · 60 BLACK CAPSULES · SKU ONYX-MP-30-2B
                  </span>
                  <strong class="tier-strip-option__title">
                    2 Bottles — 60 Jet-Black Capsules × 600mg (60-Day Dual Vascular &amp; Gym Output Protocol)
                  </strong>
                  <span class="tier-strip-option__subtitle">
                    100% Free Nationwide Discreet Express Shipping (Including Sabah, Sarawak &amp; Labuan) · Day-50 Refill Alert
                  </span>
                </div>
                <span class="tier-strip-option__price">RM 318</span>
              </button>

              <!-- Tier 3: 3 Bottles (90 Black Capsules) = RM 477 -->
              <button
                type="button"
                role="radio"
                aria-checked="false"
                class="tier-strip-option"
                data-open-order-drawer="true"
                data-order-product="magnum-pump-xr"
                data-order-qty="3"
              >
                <div class="tier-strip-option__left">
                  <span class="tier-strip-option__eyebrow">
                    TIER 03 · 90-DAY PRO SERIES VAULT · 90 BLACK CAPSULES · SKU ONYX-MP-30-3B
                  </span>
                  <strong class="tier-strip-option__title">
                    3 Bottles — 90 Jet-Black Capsules × 600mg (54,000mg Maximum Strength Pro Series Vault)
                  </strong>
                  <span class="tier-strip-option__subtitle">
                    Priority Discreet Dispatch + Free Nationwide Shipping + Day-75 VIP Refill Concierge
                  </span>
                </div>
                <span class="tier-strip-option__price">RM 477</span>
              </button>
            </div>

            <!-- Primary Express Order Drawer Trigger & Section Anchor Links -->
            <div class="magnum-hero-cinema__cta-cluster">
              <button
                type="button"
                class="cta-foil-primary"
                data-open-order-drawer="true"
                data-order-product="magnum-pump-xr"
                data-order-qty="2"
                aria-controls="onyxman-express-order-drawer"
              >
                <span>ACQUIRE MAGNUM PUMP XR · RM 159 / BOTTLE</span>
                <span aria-hidden="true">&rarr;</span>
              </button>

              <a href="#ms114a-nitric-oxide-matrix" class="cta-hairline-secondary">
                <span>INSPECT 600MG NITRIC OXIDE &amp; BOTANICAL MATRIX</span>
                <span aria-hidden="true">&darr;</span>
              </a>

              <a href="#ms114a-day25-refill-protocol" class="cta-hairline-secondary">
                <span>DAY-25 REFILL CALENDAR</span>
              </a>
            </div>
          </div>

          <!-- Right Studio Bottle Stage (/assets/products/magnum-pump-xr-stage.webp — Bottle + 6 Loose Glossy Black Capsules) -->
          <div class="magnum-hero-cinema__bottle-wing">
            <div class="magnum-hero-cinema__halo" aria-hidden="true"></div>

            <picture class="magnum-hero-cinema__bottle-picture">
              <source
                srcset="/assets/products/magnum-pump-xr-stage.webp"
                type="image/webp"
              />
              <img
                src="/assets/products/magnum-pump-xr-stage.png"
                alt="Magnum Pump XR Testosterone Pro Series Male Enhancement Formula Maximum Strength — 30 Black Capsules Official Onyxman Malaysia Bottle with 6 Signature Glossy Black Capsules (SKU ONYX-MP-30, RM 159)"
                width="900"
                height="1125"
                fetchpriority="high"
                decoding="async"
                class="magnum-hero-cinema__bottle-img"
              />
            </picture>

            <div class="magnum-hero-cinema__caption-strip">
              <span>VESSEL: OBSIDIAN &amp; CRIMSON PRO SERIES CREST</span>
              <span>FOREGROUND: 6 SIGNATURE JET-BLACK XR CAPSULES</span>
              <span>NET POTENCY: 30 × 600MG (18G)</span>
            </div>
          </div>
        </div>

        <!-- Bottom Architectural Telemetry Ribbon (Authentic Constants Verification) -->
        <div class="magnum-hero-cinema__telemetry-ribbon" role="region" aria-label="Magnum Pump XR Official Product Specifications">
          <div class="magnum-telemetry-node">
            <span class="magnum-telemetry-node__label">REGISTRY IDENTIFIERS</span>
            <strong class="magnum-telemetry-node__value">SKU: ONYX-MP-30</strong>
            <span class="magnum-telemetry-node__sub">MPN: MPXR-30BLK-MY · GTIN-13: 9550000102042</span>
          </div>

          <div class="magnum-telemetry-node">
            <span class="magnum-telemetry-node__label">CAPSULE ARCHITECTURE</span>
            <strong class="magnum-telemetry-node__value">30 Black Capsules × 600mg</strong>
            <span class="magnum-telemetry-node__sub">18,000mg Total Potency · UV-Shielded Jet-Black Shell</span>
          </div>

          <div class="magnum-telemetry-node">
            <span class="magnum-telemetry-node__label">DUAL NITRIC OXIDE CORE</span>
            <strong class="magnum-telemetry-node__value">L-Arginine 180mg + L-Citrulline 140mg</strong>
            <span class="magnum-telemetry-node__sub">+ Tribulus 110mg · Tongkat Ali 90mg · Black Ginger 65mg · Bioperine 15mg</span>
          </div>

          <div class="magnum-telemetry-node">
            <span class="magnum-telemetry-node__label">REFILL CONTINUITY ENGINE</span>
            <strong class="magnum-telemetry-node__value">Day-25 Refill Reminder</strong>
            <span class="magnum-telemetry-node__sub">30-Day Nitric Oxide &amp; Vitality Cycle (5-Capsule Buffer)</span>
          </div>

          <div class="magnum-telemetry-node">
            <span class="magnum-telemetry-node__label">DISCREET MALAYSIA DESK</span>
            <strong class="magnum-telemetry-node__value">OM Fulfilment Logistics</strong>
            <span class="magnum-telemetry-node__sub">sales@onyxman.my · info@onyxman.my · COD &amp; DuitNow QR</span>
          </div>
        </div>
      </section>
  `;
}

/**
 * Renders Chapter 2: Paradigm D Pinned 50vw / 50vw Nitric Oxide & Androgenic Botanical Matrix
 * (600mg per jet-black UV-shielded capsule = 18,000mg per bottle)
 * + Why UV-Shielded Jet-Black Capsules Protect Nitric Oxide Precursors in Malaysia's Tropical Climate.
 */
export function renderChapter2BotanicalAndBlackCapsuleStage() {
  const activesHtml = MAGNUM_BOTANICAL_ACTIVES.map(
    (act) => `
            <!-- Botanical & Amino Active ${act.index}: ${act.name} (${act.dosageMg}mg) -->
            <article
              id="botanical-active-${act.code.toLowerCase()}"
              class="magnum-monograph-entry"
              data-botanical-code="${act.code}"
            >
              <div class="magnum-monograph-entry__header">
                <div class="magnum-monograph-entry__index-group">
                  <span class="magnum-monograph-entry__index">[${act.index} · ${act.code}]</span>
                  <h3 class="magnum-monograph-entry__title">${act.name}</h3>
                </div>
                <strong class="magnum-monograph-entry__dosage-stamp">
                  ${act.dosageMg} mg <span style="font-size:0.85rem;color:var(--text-ash-silver);">(${act.percentageOfCapsule} · ${act.perBottleTotalMg}mg / bottle)</span>
                </strong>
              </div>

              <p class="magnum-monograph-entry__scientific">
                ${act.scientificName}
              </p>

              <div class="magnum-monograph-entry__specs-ledger">
                <div class="magnum-monograph-entry__spec-line">
                  <span class="magnum-monograph-entry__spec-key">STANDARDIZATION ASSAY</span>
                  <span class="magnum-monograph-entry__spec-val">${act.standardization}</span>
                </div>
                <div class="magnum-monograph-entry__spec-line">
                  <span class="magnum-monograph-entry__spec-key">EXTRACTION &amp; BIO-GRADE</span>
                  <span class="magnum-monograph-entry__spec-val">${act.extractionRatio}</span>
                </div>
                <div class="magnum-monograph-entry__spec-line">
                  <span class="magnum-monograph-entry__spec-key">PHYSIOLOGICAL PATHWAY</span>
                  <span class="magnum-monograph-entry__spec-val">${act.molecularTarget}</span>
                </div>
                <div class="magnum-monograph-entry__spec-line">
                  <span class="magnum-monograph-entry__spec-key">PHARMACOKINETIC WINDOW</span>
                  <span class="magnum-monograph-entry__spec-val">${act.pharmacokineticWindow}</span>
                </div>
              </div>

              <p class="magnum-monograph-entry__body">
                ${act.clinicalSummary}
              </p>

              <p class="magnum-monograph-entry__footnote">
                <strong>Tropical UV-Black Capsule Protection &amp; Synergy:</strong> ${act.tropicalAdvantage} <em>(${act.synergyPartner})</em>
              </p>
            </article>`
  ).join('\n');

  return `
      <!-- =====================================================================
           CHAPTER 2: PARADIGM D PINNED 50VW / 50VW NITRIC OXIDE & ANDROGENIC
           BOTANICAL MATRIX (600MG PER JET-BLACK CAPSULE = 18,000MG PER BOTTLE)
           + WHY UV-SHIELDED JET-BLACK CAPSULES PROTECT NITRIC OXIDE PRECURSORS
           ===================================================================== -->
      <section
        id="ms114a-nitric-oxide-matrix"
        class="split-stage-5050"
        aria-labelledby="ms114a-botanical-heading"
        data-paradigm="D-50vw-50vw-pinned-split-stage"
      >
        <!-- Left 50vw Sticky Visual Stage (/assets/products/magnum-pump-xr-portrait.webp) -->
        <div class="split-stage-5050__visual-pane">
          <span class="split-stage-5050__index-watermark" aria-hidden="true">
            600 MG · XR
          </span>

          <figure class="split-stage-5050__visual-figure">
            <picture>
              <source
                srcset="/assets/products/magnum-pump-xr-portrait.webp"
                type="image/webp"
              />
              <img
                src="/assets/products/magnum-pump-xr-portrait.png"
                alt="Magnum Pump XR Testosterone Pro Series 30 Black Capsules Upright Studio Portrait — 600mg Nitric Oxide & Botanical Matrix"
                width="800"
                height="1000"
                loading="lazy"
                decoding="async"
                class="split-stage-5050__visual-img"
              />
            </picture>
          </figure>

          <!-- Pinned Visual Telemetry Footer -->
          <div style="width:100%;max-width:520px;margin-top:1.5rem;padding-top:1.15rem;border-top:var(--hairline-rule);display:flex;flex-direction:column;gap:0.55rem;">
            <div style="display:flex;justify-content:space-between;font-size:0.74rem;letter-spacing:0.16em;text-transform:uppercase;color:var(--gold-champagne);">
              <span>SINGLE BLACK CAPSULE: 600 MG</span>
              <span>BOTTLE NET POTENCY: 18,000 MG</span>
            </div>
            <p style="font-size:0.82rem;color:var(--text-muted-alabaster);line-height:1.55;">
              Every Magnum Pump XR bottle houses 30 UV-shielded jet-black capsules combining 320mg of dual Nitric Oxide amino acids (L-Arginine HCl + L-Citrulline Malate 2:1) with 280mg of standardized Pro Series botanicals and Bioperine.
            </p>
            <div style="display:flex;justify-content:space-between;align-items:center;padding-top:0.5rem;">
              <button
                type="button"
                class="cta-hairline-secondary"
                data-open-order-drawer="true"
                data-order-product="magnum-pump-xr"
                data-order-qty="1"
                style="padding:0.65rem 1.2rem;font-size:0.7rem;"
              >
                <span>RESERVE 1 BOTTLE · RM 159</span>
              </button>
              <button
                type="button"
                class="cta-foil-primary"
                data-open-order-drawer="true"
                data-order-product="magnum-pump-xr"
                data-order-qty="2"
                style="padding:0.65rem 1.25rem;font-size:0.7rem;"
              >
                <span>2 BOTTLES (60 BLACK CAPS) · RM 318</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Right 50vw Scrolling Narrative Monograph Pane -->
        <div class="split-stage-5050__narrative-pane">
          <span class="editorial-kicker">
            CHAPTER II · PARADIGM D NITRIC OXIDE &amp; BOTANICAL MONOGRAPH · 100% NON-PROPRIETARY DISCLOSURE
          </span>

          <h2 id="ms114a-botanical-heading" class="editorial-headline-lg" style="margin-top:0.85rem;">
            Inside the 600mg <span class="foil-champagne-text">Extended-Release Nitric Oxide</span> &amp; Androgenic Botanical Matrix
          </h2>

          <p id="ms114a-botanical-lead" class="editorial-lead-paragraph" style="margin:1.15rem 0 2rem;">
            Zero hidden &ldquo;proprietary blends&rdquo; and zero synthetic central nervous system stimulants. Magnum Pump XR discloses the exact milligram weight and standardization assay of all six active compounds totaling <strong>600mg per UV-shielded jet-black capsule</strong> (<strong>18,000mg per 30-capsule bottle</strong>).
          </p>

          <!-- All 6 Botanical & Amino Monograph Entries -->
          <div class="magnum-monograph-collection">
            ${activesHtml}
          </div>

          <!-- Cumulative 600mg Verification Ledger Bar -->
          <div style="margin-top:2.25rem;padding:1.5rem;background-color:#0B0C10;border-left:2px solid var(--gold-champagne);display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:1.25rem;">
            <div>
              <span style="font-size:0.68rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold-champagne);display:block;">
                QUANTITATIVE MASS VERIFICATION (SKU: ONYX-MP-30 · MPN: MPXR-30BLK-MY)
              </span>
              <strong style="font-family:var(--font-display);font-size:1.45rem;color:var(--text-silk-ivory);">
                180mg + 140mg + 110mg + 90mg + 65mg + 15mg = 600mg / Black Capsule
              </strong>
            </div>
            <button
              type="button"
              class="cta-foil-primary"
              data-open-order-drawer="true"
              data-order-product="magnum-pump-xr"
              data-order-qty="2"
            >
              <span>ORDER 60-BLACK-CAPSULE PROTOCOL · RM 318</span>
            </button>
          </div>
        </div>
      </section>

      <!-- =====================================================================
           CHAPTER 2 PART B: WHY UV-SHIELDED JET-BLACK CAPSULES PROTECT NITRIC
           OXIDE PRECURSORS IN MALAYSIA'S TROPICAL CLIMATE
           Features Dual-Mask Cutout (/assets/products/magnum-pump-xr-cutout.webp)
           ===================================================================== -->
      <section
        id="ms114a-uv-black-capsule-science"
        class="magnum-blackcap-science-stage"
        aria-labelledby="ms114a-blackcap-heading"
      >
        <div class="magnum-stage-container">
          <div class="magnum-stage-header">
            <div class="magnum-stage-header__left">
              <span class="editorial-kicker">
                PHOTOLYTIC &amp; HYGROSCOPIC PROTECTION · 30 SIGNATURE JET-BLACK CAPSULES
              </span>
              <h2 id="ms114a-blackcap-heading" class="editorial-headline-lg">
                Why <span class="foil-champagne-text">UV-Shielded Jet-Black Capsules</span> Protect Nitric Oxide Precursors in Malaysia&rsquo;s Tropical Climate
              </h2>
            </div>
            <div class="magnum-stage-header__right">
              <p style="color:var(--text-muted-alabaster);font-size:0.98rem;line-height:1.68;">
                Why is Magnum Pump XR immediately recognizable by the <strong>6 loose glossy black capsules</strong> staged in front of its obsidian bottle and the bold <strong>&ldquo;30 Black Capsules&rdquo;</strong> declaration on its label? In Malaysia&rsquo;s 28&deg;C&ndash;35&deg;C equatorial heat and 80%+ humidity, standard clear capsules fail to protect hygroscopic amino acids and UV-sensitive polymethoxyflavones.
              </p>
            </div>
          </div>

          <!-- Dual-Mask Cutout Visual + 5-Row Architectural UV-Shield Ledger -->
          <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:3rem;">
            <div style="flex:1 1 320px;max-width:440px;display:flex;flex-direction:column;align-items:center;gap:1rem;padding:1.5rem;border-top:var(--hairline-rule);border-bottom:var(--hairline-rule);">
              <picture>
                <source srcset="/assets/products/magnum-pump-xr-cutout.webp" type="image/webp" />
                <img
                  src="/assets/products/magnum-pump-xr-cutout.png"
                  alt="Magnum Pump XR Dual-Mask Studio Cutout Showing Obsidian Bottle and 6 Signature Glossy Jet-Black Capsules"
                  width="600"
                  height="750"
                  loading="lazy"
                  decoding="async"
                  style="max-height:390px;width:auto;object-fit:contain;mask-image:radial-gradient(circle at 50% 50%, #000 76%, transparent 99%);-webkit-mask-image:radial-gradient(circle at 50% 50%, #000 76%, transparent 99%);"
                />
              </picture>
              <span style="font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold-foil-bright);text-align:center;">
                DUAL-MASK STUDIO CUTOUT · BOTTLE + 6 SIGNATURE GLOSSY BLACK CAPSULES
              </span>
            </div>

            <div style="flex:2 1 640px;">
              <div class="architectural-ledger" role="table" aria-label="UV-Shielded Jet-Black Capsule vs Clear Capsule Technical Comparison">
                <div class="architectural-ledger__row" role="row">
                  <span class="architectural-ledger__index" role="cell">XR-BLK-01</span>
                  <strong class="architectural-ledger__title" role="cell">99.8% UV-A / UV-B Photolytic Blockade for Kunyit Hitam PMFs</strong>
                  <p class="architectural-ledger__detail" role="cell">
                    The 5% polymethoxyflavones (PMFs) inside Thai Black Ginger (<em>Kaempferia parviflora</em>, 65mg) and quassinoids inside Malaysian Tongkat Ali (90mg) undergo rapid photo-oxidation when exposed to tropical daylight or fluorescent gym locker-room lighting through clear shells. Our carbon-pigmented jet-black capsule wall creates an individual dark-room vault around every 600mg dose.
                  </p>
                  <span class="architectural-ledger__metric" role="cell">99.8% UV SHIELD</span>
                </div>

                <div class="architectural-ledger__row" role="row">
                  <span class="architectural-ledger__index" role="cell">XR-BLK-02</span>
                  <strong class="architectural-ledger__title" role="cell">Anti-Deliquescence Barrier for Hygroscopic L-Citrulline Malate &amp; L-Arginine HCl</strong>
                  <p class="architectural-ledger__detail" role="cell">
                    L-Citrulline Malate 2:1 (140mg) and L-Arginine HCl (180mg) are intensely hygroscopic amino-acid salts that draw water vapor out of humid Malaysian air, causing ordinary capsules to stick together, harden into an insoluble brick, or crack. Paired with an internal silica desiccant canister inside the heavy-wall HDPE obsidian bottle, the jet-black shell maintains free-flowing micronized powder integrity across all 30 days.
                  </p>
                  <span class="architectural-ledger__metric" role="cell">ZERO CLUMPING</span>
                </div>

                <div class="architectural-ledger__row" role="row">
                  <span class="architectural-ledger__index" role="cell">XR-BLK-03</span>
                  <strong class="architectural-ledger__title" role="cell">Dual-Wave Extended-Release (XR) Gastric &amp; Renal Pharmacokinetics</strong>
                  <p class="architectural-ledger__detail" role="cell">
                    When swallowed with 300ml of water 30&ndash;45 minutes before training or evening activity, the jet-black shell ruptures cleanly in 20 minutes: Wave 1 releases 180mg L-Arginine HCl + 15mg Bioperine for immediate endothelial Nitric Oxide synthesis, while Wave 2 converts 140mg L-Citrulline Malate progressively into plasma L-Arginine over 4 to 6 hours.
                  </p>
                  <span class="architectural-ledger__metric" role="cell">4–6 HR XR WINDOW</span>
                </div>

                <div class="architectural-ledger__row" role="row">
                  <span class="architectural-ledger__index" role="cell">XR-BLK-04</span>
                  <strong class="architectural-ledger__title" role="cell">Zero Caffeine, Zero Jitters &amp; Zero Nocturnal Sleep Disruption</strong>
                  <p class="architectural-ledger__detail" role="cell">
                    Many pre-workout vascular products load 300mg of synthetic caffeine that triggers vasoconstriction, cold sweats, and 3:00 AM insomnia. Magnum Pump XR relies 100% on endothelial amino-acid vasodilation and adaptogenic saponins—allowing late-evening gym sessions in KLCC, Bangsar, or Johor Bahru followed by restorative sleep.
                  </p>
                  <span class="architectural-ledger__metric" role="cell">100% STIM-FREE</span>
                </div>

                <div class="architectural-ledger__row" role="row">
                  <span class="architectural-ledger__index" role="cell">XR-BLK-05</span>
                  <strong class="architectural-ledger__title" role="cell">Direct Clinical Monograph Cross-Links</strong>
                  <p class="architectural-ledger__detail" role="cell">
                    Inspect our dedicated scientific monographs on the active drivers inside Magnum Pump XR:
                    <a href="/ingredients/l-arginine-l-citrulline/" style="color:var(--gold-foil-bright);text-decoration:underline;">L-Arginine HCl &amp; L-Citrulline Nitric Oxide Pathways</a>,
                    <a href="/ingredients/tribulus-terrestris/" style="color:var(--gold-foil-bright);text-decoration:underline;">Tribulus Terrestris Saponins</a>,
                    <a href="/ingredients/tongkat-ali/" style="color:var(--gold-foil-bright);text-decoration:underline;">Malaysian Tongkat Ali 100:1</a>, and
                    <a href="/compare/grow-xl-vs-magnum-pump-xr/" style="color:var(--gold-foil-bright);text-decoration:underline;">Grow XL vs. Magnum Pump XR 30-Capsule Comparison</a>.
                  </p>
                  <span class="architectural-ledger__metric" role="cell">FULL MONOGRAPHS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  `;
}

/**
 * Renders Chapter 3: 30-Day Peak Vascular & Stamina Chronology + Day-25 Refill Trigger
 * + Dietary Supplement Semantic Disambiguation Ledger (ONYX-22)
 * + Head-to-Head 4-Product Comparison Matrix + 16-State Malaysia Discreet Delivery Table.
 */
export function renderChapter3ChronologyDisambiguationComparisonAndStatesStage() {
  const disambiguationRowsHtml = MAGNUM_ENTITY_DISAMBIGUATION_LEDGER.map(
    (item) => `
            <div class="architectural-ledger__row" role="row">
              <span class="architectural-ledger__index" role="cell">${item.code}</span>
              <strong class="architectural-ledger__title" role="cell">${item.dimension}</strong>
              <div class="architectural-ledger__detail" role="cell">
                <p style="color:var(--text-silk-ivory);margin-bottom:0.35rem;">
                  <strong>Onyxman Magnum Pump XR Specification:</strong> ${item.magnumPumpXrSpec}
                </p>
                <p style="color:var(--text-muted-alabaster);font-size:0.86rem;">
                  <strong>Semantic Boundary:</strong> ${item.excludedExternalEntity}
                </p>
              </div>
              <span class="architectural-ledger__metric" role="cell">${item.verificationTag}</span>
            </div>`
  ).join('\n');

  const statesLedgerHtml = MAGNUM_16_STATES_LEDGER.map(
    (st) => `
            <div class="architectural-ledger__row" role="row">
              <span class="architectural-ledger__index" role="cell">HUB-${st.num}</span>
              <div class="architectural-ledger__title" role="cell">
                <a href="${st.href}" style="color:var(--gold-foil-bright);border-bottom:1px solid rgba(212,175,55,0.35);">
                  ${st.stateName}
                </a>
                <span style="display:block;font-family:var(--font-technical);font-size:0.68rem;letter-spacing:0.18em;color:var(--gold-champagne);margin-top:0.2rem;">
                  ${st.zoneLabel} · POSTAL ${st.postalCodes}
                </span>
              </div>
              <div class="architectural-ledger__detail" role="cell">
                <strong style="color:var(--text-silk-ivory);display:block;margin-bottom:0.2rem;">
                  ${st.transitWindow}
                </strong>
                <span>Covered Districts: ${st.keyDistricts}</span>
                <span style="display:block;font-size:0.8rem;color:var(--text-ash-silver);margin-top:0.2rem;">
                  Shipping: ${st.shippingCost} · Payment: ${st.paymentModes}
                </span>
              </div>
              <div class="architectural-ledger__metric" role="cell">
                <a href="${st.href}" style="color:var(--gold-foil-bright);">
                  INSPECT HUB &rarr;
                </a>
              </div>
            </div>`
  ).join('\n');

  return `
      <!-- =====================================================================
           CHAPTER 3 PART A: 30-DAY PEAK VASCULAR & STAMINA CHRONOLOGY
           + DUAL INTAKE PROTOCOLS + DAY-25 AUTOMATED REFILL TRIGGER
           ===================================================================== -->
      <section
        id="ms114a-30day-vascular-chronology"
        class="magnum-cycle-stage"
        aria-labelledby="ms114a-cycle-heading"
      >
        <div class="magnum-stage-container">
          <div class="magnum-stage-header">
            <div class="magnum-stage-header__left">
              <span class="editorial-kicker">
                CHAPTER III · 30-BLACK-CAPSULE NITRIC OXIDE &amp; VITALITY TIMELINE
              </span>
              <h2 id="ms114a-cycle-heading" class="editorial-headline-lg">
                The 30-Day <span class="foil-champagne-text">Peak Vascular &amp; Stamina Chronology</span> &amp; Day-25 Refill Trigger
              </h2>
            </div>
            <div class="magnum-stage-header__right">
              <p style="color:var(--text-muted-alabaster);font-size:0.96rem;line-height:1.65;">
                Each bottle of Magnum Pump XR supplies <strong>30 jet-black capsules × 600mg (18,000mg total active potency)</strong>. Whether deployed 30&ndash;45 minutes before resistance training or prior to evening physical output, follow this precision chronology for maximum endothelial Nitric Oxide saturation.
              </p>
            </div>
          </div>

          <!-- Dual Intake Protocols Architectural Ledger -->
          <div class="architectural-ledger" role="region" aria-label="Magnum Pump XR Dual Intake Protocols">
            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">PROTOCOL A</span>
              <strong class="architectural-ledger__title">
                Pre-Gym or Pre-Evening Activity XR Window (30–45 Minutes Prior)
              </strong>
              <p class="architectural-ledger__detail">
                Take <strong>1 jet-black capsule (600mg) with 300ml of cool or room-temperature water 30 to 45 minutes before resistance training or evening physical activity</strong>. Bioperine (15mg) accelerates intestinal uptake of L-Arginine HCl (180mg) for immediate endothelial nitric oxide vasodilation, while L-Citrulline Malate 2:1 (140mg) sustains plasma L-Arginine recycling over a 4-to-6-hour Extended-Release window.
              </p>
              <span class="architectural-ledger__metric">30–45 MIN PRE-OUTPUT</span>
            </div>

            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">PROTOCOL B</span>
              <strong class="architectural-ledger__title">
                Non-Training Day Vascular &amp; Androgenic Maintenance
              </strong>
              <p class="architectural-ledger__detail">
                On rest days between workouts, take <strong>1 jet-black capsule between lunch and dinner with 250ml of water</strong>. Daily uninterrupted intake compounds Tribulus Terrestris (110mg), Malaysian Tongkat Ali 100:1 (90mg), and Thai Black Ginger / Kunyit Hitam (65mg) across your full 30-day cycle.
              </p>
              <span class="architectural-ledger__metric">1 BLACK CAP / DAY</span>
            </div>

            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">TROPICAL STORAGE</span>
              <strong class="architectural-ledger__title">
                Equatorial Humidity &amp; Desiccant Preservation Protocol
              </strong>
              <p class="architectural-ledger__detail">
                Store your Magnum Pump XR bottle below 30&deg;C in a dry, shaded cabinet away from direct sunlight or bathroom moisture. Keep the cap tightly sealed and <strong>retain the internal silica desiccant canister inside the bottle</strong> so the hygroscopic L-Citrulline and L-Arginine inside all 30 black capsules remain dry and free-flowing.
              </p>
              <span class="architectural-ledger__metric">STORE BELOW 30&deg;C</span>
            </div>
          </div>

          <!-- 6-Phase 30-Day to 90-Day Vascular & Stamina Chronology Ledger -->
          <div class="architectural-ledger" role="region" aria-label="30-Day to 90-Day Nitric Oxide & Stamina Progression">
            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">30–45 MINS</span>
              <strong class="architectural-ledger__title">
                Phase 1: Acute Bioperine-Catalyzed L-Arginine HCl &amp; eNOS Ignition (Capsule #1)
              </strong>
              <p class="architectural-ledger__detail">
                Within 30 to 45 minutes of taking your first jet-black capsule with 300ml water, 15mg Bioperine accelerates intestinal transport of 180mg L-Arginine HCl. Endothelial nitric oxide synthase (eNOS) upregulates cGMP signaling—delivering noticeable peripheral warmth, fuller muscular vascularity during resistance training, and responsive evening readiness without caffeine jitters.
              </p>
              <span class="architectural-ledger__metric">ACUTE XR WAVE 1</span>
            </div>

            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">HOURS 02–06</span>
              <strong class="architectural-ledger__title">
                Phase 2: Extended-Release (XR) L-Citrulline Malate 2:1 Renal Recycling Window
              </strong>
              <p class="architectural-ledger__detail">
                As first-wave L-Arginine peaks, 140mg of L-Citrulline Malate 2:1 bypasses hepatic arginase enzymes and converts progressively into endogenous plasma L-Arginine over 4 to 6 hours. Simultaneously, the DL-Malate fraction supports tricarboxylic ATP turnover and buffers lactic-acid fatigue during extended physical output.
              </p>
              <span class="architectural-ledger__metric">4–6 HR XR WAVE 2</span>
            </div>

            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">DAYS 02–07</span>
              <strong class="architectural-ledger__title">
                Phase 3: Endothelial Conditioning &amp; Kunyit Hitam Polymethoxyflavone Accumulation
              </strong>
              <p class="architectural-ledger__detail">
                Across your first week (Capsules #2 to #7 · 4,200mg cumulative matrix), standardized 5% polymethoxyflavones from Thai Black Ginger (<em>Kaempferia parviflora</em>, 65mg/day) reinforce peripheral micro-circulation and grip endurance, while daily amino-acid saturation elevates baseline vascular responsiveness.
              </p>
              <span class="architectural-ledger__metric">CAPSULES 02–07</span>
            </div>

            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">DAYS 08–24</span>
              <strong class="architectural-ledger__title">
                Phase 4: Testosterone Pro Series Synergy (Tribulus Saponins + 100:1 Tongkat Ali)
              </strong>
              <p class="architectural-ledger__detail">
                Between Day 8 and Day 24 (Capsules #8 to #24), daily delivery of 110mg Standardized Tribulus Terrestris (45% steroidal saponins) and 90mg Malaysian Tongkat Ali (100:1 root extract) reaches full physiological synergy with the 320mg Nitric Oxide amino core—supporting stronger training work capacity, faster post-exertion recovery, and reliable evening stamina.
              </p>
              <span class="architectural-ledger__metric">CAPSULES 08–24</span>
            </div>

            <div class="architectural-ledger__row" style="background:rgba(212,175,55,0.06);border-bottom-color:var(--gold-champagne);">
              <span class="architectural-ledger__index">DAY 25 ALERT</span>
              <strong class="architectural-ledger__title" style="color:var(--gold-foil-bright);">
                Phase 5: Day-25 Automated Refill Trigger (5 Jet-Black Capsules Remaining in Reserve)
              </strong>
              <p class="architectural-ledger__detail">
                When you take Black Capsule #25 on Day 25, exactly <strong>5 jet-black capsules (5 days of reserve)</strong> remain in your bottle. Our automated Day-25 Refill Reminder triggers your Google Calendar or concierge check-in so your next plain-parcel bottle is dispatched via 1&ndash;2 day express courier across Malaysia before Capsule #30 is finished.
              </p>
              <span class="architectural-ledger__metric">REFILL TRIGGER DAY 25</span>
            </div>

            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">DAYS 26–90</span>
              <strong class="architectural-ledger__title">
                Phase 6: Full 30-Day Cycle Completion &amp; 60/90-Day Pro Series Mastery Vaults
              </strong>
              <p class="architectural-ledger__detail">
                Capsules #26 to #30 complete your first 18,000mg bottle. Men who lock in the <strong>2-Bottle Dual Vascular Protocol (60 Black Capsules · RM 318 · Day-50 Refill Alert)</strong> or <strong>3-Bottle Pro Series Vault (90 Black Capsules · RM 477 · Day-75 Refill Alert)</strong> enjoy uninterrupted 60-to-90-day Nitric Oxide and botanical conditioning with 100% Free Nationwide Malaysia Shipping.
              </p>
              <span class="architectural-ledger__metric">30–90 DAY MASTERY</span>
            </div>
          </div>

          <!-- Day-25 Refill Reminder Calendar Integration Band -->
          <div
            id="ms114a-day25-refill-protocol"
            class="magnum-refill-concierge-band"
            role="region"
            aria-labelledby="ms114a-refill-heading"
          >
            <div class="magnum-refill-concierge-band__copy">
              <span class="editorial-kicker">
                AUTOMATED CONTINUITY ENGINE · 30 UV-SHIELDED JET-BLACK CAPSULES PER BOTTLE
              </span>
              <h3 id="ms114a-refill-heading" class="editorial-headline-lg" style="font-size:clamp(1.75rem,3vw,2.65rem);">
                Day-25 Refill Reminder <span class="foil-champagne-text">Calendar Integration</span> (30-Day Nitric Oxide Cycle)
              </h3>
              <p style="color:var(--text-muted-alabaster);font-size:0.95rem;line-height:1.68;">
                Peak endothelial Nitric Oxide conditioning and Tongkat Ali / Tribulus saturation depend on zero downtime between cycles. Because Magnum Pump XR contains <strong>30 jet-black capsules per bottle</strong>, Day 25 gives you a 5-capsule buffer (120 hours) for our discreet courier to deliver anywhere in Peninsular Malaysia or Borneo. Add your 1-click Google Calendar reminder below or secure a multi-bottle bundle now.
              </p>
              <div style="display:flex;flex-wrap:wrap;gap:1.25rem;font-size:0.76rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--gold-champagne);">
                <span>1 BOTTLE (30 CAPS) = DAY 25 ALERT</span>
                <span>·</span>
                <span>2 BOTTLES (60 CAPS) = DAY 50 ALERT</span>
                <span>·</span>
                <span>3 BOTTLES (90 CAPS) = DAY 75 ALERT</span>
              </div>
            </div>

            <div class="magnum-refill-concierge-band__actions">
              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Onyxman+Malaysia+%E2%80%94+Magnum+Pump+XR+%2830+Black+Capsules%29+Day-25+Refill+Check-In+%28RM+159%29&details=Your+30-black-capsule+Magnum+Pump+XR+%28SKU%3A+ONYX-MP-30%2C+MPN%3A+MPXR-30BLK-MY%29+cycle+has+5+capsules+remaining.+Reserve+your+next+discreet+bottle+at+https%3A%2F%2Fonyxman.my%2Fmagnum-pump-xr-malaysia%2F+or+email+sales%40onyxman.my"
                target="_blank"
                rel="noopener noreferrer"
                class="cta-hairline-secondary"
                style="justify-content:space-between;width:100%;"
              >
                <span>+ ADD DAY-25 GOOGLE CALENDAR REMINDER</span>
                <span aria-hidden="true">&#8599;</span>
              </a>

              <button
                type="button"
                class="cta-foil-primary"
                data-open-order-drawer="true"
                data-order-product="magnum-pump-xr"
                data-order-qty="2"
                style="width:100%;"
              >
                <span>LOCK IN 2 BOTTLES (60 BLACK CAPS) · RM 318</span>
                <span aria-hidden="true">&rarr;</span>
              </button>

              <a
                href="/guides/20-capsule-vs-30-capsule-refill-cycle-guide/"
                style="font-size:0.75rem;letter-spacing:0.16em;text-transform:uppercase;color:var(--text-muted-alabaster);text-align:center;padding-top:0.25rem;"
              >
                Read the 20-Capsule vs 30-Capsule Refill Cycle Guide &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- =====================================================================
           CHAPTER 3 PART B: MANDATORY ENTITY DISAMBIGUATION LEDGER (ONYX-22)
           Explicitly disambiguating Magnum Pump XR (DietarySupplement — 30 Oral
           Black Botanical & Amino Acid Capsules for Men's Vitality in Malaysia)
           from mechanical/industrial oilfield mud pumps (SPM Magnum XR).
           ===================================================================== -->
      <section
        id="ms114a-entity-disambiguation-ledger"
        class="magnum-disambiguation-stage"
        aria-labelledby="ms114a-disambiguation-heading"
      >
        <div class="magnum-stage-container">
          <div class="magnum-stage-header">
            <div class="magnum-stage-header__left">
              <span class="editorial-kicker">
                SEMANTIC KNOWLEDGE GRAPH REGISTRY · RULE ONYX-22 · SCHEMA.ORG DIETARYSUPPLEMENT
              </span>
              <h2 id="ms114a-disambiguation-heading" class="editorial-headline-lg">
                Dietary Supplement <span class="foil-champagne-text">Semantic Disambiguation Ledger</span> (Oral Black Capsules vs. Industrial Pumps)
              </h2>
            </div>
            <div class="magnum-stage-header__right">
              <p style="color:var(--text-muted-alabaster);font-size:0.96rem;line-height:1.65;">
                For clarity across search engines, AI answer engines, and Malaysian consumers: <strong>Magnum Pump XR by Onyxman Malaysia (SKU: ONYX-MP-30, MPN: MPXR-30BLK-MY, GTIN-13: 9550000102042)</strong> is strictly an <strong>oral botanical &amp; amino-acid capsule supplement</strong>—never an industrial fluid pump or mechanical device.
              </p>
            </div>
          </div>

          <div class="architectural-ledger" role="table" aria-label="ONYX-22 Dietary Supplement Entity Disambiguation Ledger">
            ${disambiguationRowsHtml}
          </div>
        </div>
      </section>

      <!-- =====================================================================
           CHAPTER 3 PART C: HEAD-TO-HEAD 4-PRODUCT COMPARISON MATRIX
           (MAGNUM PUMP XR VS. GROW XL, HORSEMEN & HAMMER OF THOR AT RM 159)
           ===================================================================== -->
      <section
        id="ms114a-head-to-head-comparison"
        class="magnum-comparison-stage"
        aria-labelledby="ms114a-comparison-heading"
      >
        <div class="magnum-stage-container">
          <div class="magnum-stage-header">
            <div class="magnum-stage-header__left">
              <span class="editorial-kicker">
                APOTHECARY CROSS-EXAMINATION · UNIFORM RM 159 RESERVE ACROSS ALL 4 FORMULATIONS
              </span>
              <h2 id="ms114a-comparison-heading" class="editorial-headline-lg">
                Head-to-Head: <span class="foil-champagne-text">Magnum Pump XR</span> vs. Grow XL, Horsemen &amp; Hammer of Thor
              </h2>
            </div>
            <div class="magnum-stage-header__right">
              <p style="color:var(--text-muted-alabaster);font-size:0.96rem;line-height:1.65;">
                Every Onyxman formulation is priced uniformly at <strong>RM 159 for 1 Bottle, RM 318 for 2 Bottles, and RM 477 for 3 Bottles</strong>. Compare Magnum Pump XR&rsquo;s 30 UV-shielded jet-black Nitric Oxide capsules against our companion apothecary reserves below.
              </p>
            </div>
          </div>

          <div class="magnum-matrix-scroll" role="region" aria-label="4-Product Apothecary Comparison Matrix" tabindex="0">
            <table class="magnum-matrix-table">
              <thead>
                <tr>
                  <th scope="col">SPECIFICATION DIMENSION</th>
                  <th scope="col" class="magnum-matrix-table__highlight-col">
                    MAGNUM PUMP XR (THIS PAGE)<br />
                    <span style="color:var(--gold-foil-bright);">SKU: ONYX-MP-30 · 30 BLACK CAPS</span>
                  </th>
                  <th scope="col">
                    <a href="/products/grow-xl/" style="text-decoration:underline;">GROW XL</a><br />
                    <span style="color:var(--text-ash-silver);">SKU: ONYX-GX-30 · 30 CAPS</span>
                  </th>
                  <th scope="col">
                    <a href="/products/horsemen/" style="text-decoration:underline;">HORSEMEN</a><br />
                    <span style="color:var(--text-ash-silver);">SKU: ONYX-HM-20 · 20 CAPS</span>
                  </th>
                  <th scope="col">
                    <a href="/products/hammer-of-thor/" style="text-decoration:underline;">HAMMER OF THOR</a><br />
                    <span style="color:var(--text-ash-silver);">SKU: ONYX-HT-20 · 20 VEG. CAPS</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong style="color:var(--gold-champagne);">Official Bottle Subtitle</strong></td>
                  <td class="magnum-matrix-table__highlight-col">
                    <strong>Testosterone Pro Series — Male Enhancement Formula Maximum Strength — 30 Black Capsules</strong>
                  </td>
                  <td>Extra-Strength Enhancement Male Performance Blend — 30 Capsules</td>
                  <td>Man Virility Enhancement Herbal Supplement — 20 Capsules × 500mg</td>
                  <td>Men&rsquo;s Health — Tribulus Terrestris — 20 Veg. Capsules</td>
                </tr>
                <tr>
                  <td><strong style="color:var(--gold-champagne);">Registry Identifiers</strong></td>
                  <td class="magnum-matrix-table__highlight-col">
                    <strong>SKU: ONYX-MP-30 · MPN: MPXR-30BLK-MY · GTIN: 9550000102042</strong>
                  </td>
                  <td>SKU: ONYX-GX-30 · MPN: GX-30CAP-MY · GTIN: 9550000102035</td>
                  <td>SKU: ONYX-HM-20 · MPN: HM-500MG-20MY · GTIN: 9550000102011</td>
                  <td>SKU: ONYX-HT-20 · MPN: HT-TRIB-20MY · GTIN: 9550000102028</td>
                </tr>
                <tr>
                  <td><strong style="color:var(--gold-champagne);">Capsule Architecture &amp; Net Mass</strong></td>
                  <td class="magnum-matrix-table__highlight-col">
                    <strong>30 UV-Shielded Jet-Black XR Capsules × 600mg (18,000mg / Bottle)</strong>
                  </td>
                  <td>30 Daily Botanical Capsules × 550mg (16,500mg / Bottle)</td>
                  <td>20 High-Density Herbal Capsules × 500mg (10,000mg / Bottle)</td>
                  <td>20 Plant-Origin HPMC Vegetarian Capsules × 500mg (10,000mg / Bottle)</td>
                </tr>
                <tr>
                  <td><strong style="color:var(--gold-champagne);">Quantitative Active Matrix</strong></td>
                  <td class="magnum-matrix-table__highlight-col">
                    <strong>180mg L-Arginine HCl + 140mg L-Citrulline Malate 2:1 + 110mg Tribulus + 90mg Tongkat Ali + 65mg Thai Black Ginger + 15mg Bioperine</strong>
                  </td>
                  <td>140mg Tongkat Ali + 110mg Maca + 100mg L-Arginine/Citrulline + 80mg Muira Puama + 70mg Saw Palmetto + 50mg Ginseng/Zinc</td>
                  <td>150mg 100:1 Malaysian Tongkat Ali + 100mg Black Maca + 80mg Epimedium + 80mg L-Arginine + 60mg Red Ginseng + 30mg Tribulus/Zinc</td>
                  <td>200mg 60%-Saponin Tribulus Terrestris + 100mg Andean Maca + 80mg Plant L-Arginine + 60mg Panax Ginseng + 45mg Tongkat Ali + 15mg Chelated Zinc</td>
                </tr>
                <tr>
                  <td><strong style="color:var(--gold-champagne);">Primary Physiological Specialization</strong></td>
                  <td class="magnum-matrix-table__highlight-col">
                    <strong>Extended-Release Nitric Oxide Vasodilation, Pre-Gym Vascular Pump &amp; Evening Physical Output</strong>
                  </td>
                  <td>30-Day Morning Baseline Vitality, Micro-Circulation &amp; Saw Palmetto Support</td>
                  <td>Rapid 45–60 Min Pre-Evening Readiness &amp; Dual-Mode Adaptogenic Drive</td>
                  <td>100% Vegetarian High-Saponin Tribulus Conditioning &amp; Muscular Recovery</td>
                </tr>
                <tr>
                  <td><strong style="color:var(--gold-champagne);">Optimal Intake Window</strong></td>
                  <td class="magnum-matrix-table__highlight-col">
                    <strong>30–45 min before gym training or evening activity (with 300ml water)</strong>
                  </td>
                  <td>Every morning 20–30 min after breakfast</td>
                  <td>45–60 min before evening activity with warm water</td>
                  <td>30 min after dinner OR 45 min pre-training</td>
                </tr>
                <tr>
                  <td><strong style="color:var(--gold-champagne);">Automated Refill Horizon</strong></td>
                  <td class="magnum-matrix-table__highlight-col">
                    <strong>Day-25 Automated Refill Reminder</strong> (30-Day Cycle · 5-Cap Buffer)
                  </td>
                  <td>Day-25 Automated Refill Reminder (30-Day Cycle)</td>
                  <td>Day-18 Automated Refill Reminder (20-Day Cycle)</td>
                  <td>Day-18 Automated Refill Reminder (20-Day Cycle)</td>
                </tr>
                <tr>
                  <td><strong style="color:var(--gold-champagne);">Official Malaysia Pricing</strong></td>
                  <td class="magnum-matrix-table__highlight-col">
                    <strong>1B: RM 159 · 2B: RM 318 · 3B: RM 477</strong>
                  </td>
                  <td>1B: RM 159 · 2B: RM 318 · 3B: RM 477</td>
                  <td>1B: RM 159 · 2B: RM 318 · 3B: RM 477</td>
                  <td>1B: RM 159 · 2B: RM 318 · 3B: RM 477</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:1.5rem;padding-top:1rem;">
            <div style="display:flex;flex-wrap:wrap;gap:1.25rem;font-size:0.8rem;letter-spacing:0.14em;text-transform:uppercase;">
              <a href="/compare/grow-xl-vs-magnum-pump-xr/" style="color:var(--gold-foil-bright);text-decoration:underline;">
                Read Full Grow XL vs. Magnum Pump XR 30-Capsule Deep-Dive &rarr;
              </a>
              <a href="/compare/" style="color:var(--text-muted-alabaster);text-decoration:underline;">
                View Complete 4-Product Apothecary Matrix &rarr;
              </a>
            </div>
            <button
              type="button"
              class="cta-foil-primary"
              data-open-order-drawer="true"
              data-order-product="magnum-pump-xr"
              data-order-qty="1"
            >
              <span>SELECT MAGNUM PUMP XR (30 BLACK CAPS) · RM 159</span>
            </button>
          </div>
        </div>
      </section>

      <!-- =====================================================================
           CHAPTER 3 PART D: 16-STATE MALAYSIA DISCREET DELIVERY TABLE
           ===================================================================== -->
      <section
        id="ms114a-malaysia-16-states-ledger"
        class="magnum-states-stage"
        aria-labelledby="ms114a-states-heading"
      >
        <div class="magnum-stage-container">
          <div class="magnum-stage-header">
            <div class="magnum-stage-header__left">
              <span class="editorial-kicker">
                NATIONWIDE FULFILMENT TELEMETRY · ALL 16 STATES &amp; FEDERAL TERRITORIES
              </span>
              <h2 id="ms114a-states-heading" class="editorial-headline-lg">
                16-State Malaysia <span class="foil-champagne-text">Discreet Delivery Table</span> for Magnum Pump XR
              </h2>
            </div>
            <div class="magnum-stage-header__right">
              <p style="color:var(--text-muted-alabaster);font-size:0.96rem;line-height:1.65;">
                Every Magnum Pump XR order is dispatched from our Klang Valley vault in a 100% plain, opaque security parcel under sender <strong>&ldquo;OM Fulfilment Logistics&rdquo;</strong> with zero mention of Magnum Pump XR, Testosterone Pro Series, or capsules. Inspect exact transit times, postal coverage, and COD / DuitNow QR options across all 16 Malaysian hubs below.
              </p>
            </div>
          </div>

          <div class="architectural-ledger" role="table" aria-label="16-State Malaysia Discreet Delivery Table for Magnum Pump XR">
            ${statesLedgerHtml}
          </div>
        </div>
      </section>
  `;
}

/**
 * Renders Chapter 4: Complete 10-Question Magnum Pump XR Malaysia FAQ Accordion
 * + Final Conversion Horizon.
 */
export function renderChapter4FaqAndAcquisitionStage() {
  const faqItemsHtml = MAGNUM_FAQS.map(
    (faq, idx) => `
            <!-- FAQ Item ${faq.index} -->
            <details class="magnum-faq-item" id="magnum-faq-${idx + 1}" ${idx === 0 ? 'open' : ''}>
              <summary class="magnum-faq-summary">
                <div class="magnum-faq-summary__left">
                  <span class="magnum-faq-summary__index">FAQ-${faq.index}</span>
                  <span class="magnum-faq-summary__category">${faq.category}</span>
                  <h3 class="magnum-faq-summary__question">${faq.questionEn}</h3>
                </div>
                <span class="magnum-faq-summary__icon" aria-hidden="true">+</span>
              </summary>
              <div class="magnum-faq-answer">
                <p>${faq.answerEn}</p>
              </div>
            </details>`
  ).join('\n');

  return `
      <!-- =====================================================================
           CHAPTER 4: COMPLETE 10-QUESTION MAGNUM PUMP XR MALAYSIA FAQ ACCORDION
           + FINAL APOTHECARY ACQUISITION HORIZON
           ===================================================================== -->
      <section
        id="ms114a-magnum-faq-stage"
        class="magnum-faq-stage"
        aria-labelledby="ms114a-faq-heading"
      >
        <div class="magnum-stage-container">
          <div class="magnum-stage-header">
            <div class="magnum-stage-header__left">
              <span class="editorial-kicker">
                CHAPTER IV · VERIFIED APOTHECARY DOSSIER · 10 QUESTIONS ANSWERED
              </span>
              <h2 id="ms114a-faq-heading" class="editorial-headline-lg">
                Frequently Asked Questions — <span class="foil-champagne-text">Magnum Pump XR Malaysia</span> (30 Black Capsules)
              </h2>
            </div>
            <div class="magnum-stage-header__right">
              <p style="color:var(--text-muted-alabaster);font-size:0.96rem;line-height:1.65;">
                Direct technical answers regarding ONYX-22 DietarySupplement entity disambiguation, our 30 UV-shielded jet-black capsules, Extended-Release (XR) L-Arginine + L-Citrulline kinetics, Day-25 refill calendar alerts, uniform RM 159 pricing, and plain unmarked courier delivery across Malaysia.
              </p>
            </div>
          </div>

          <div class="magnum-faq-ledger" role="region" aria-label="Magnum Pump XR Malaysia 10-Question FAQ Accordion">
            ${faqItemsHtml}
          </div>

          <!-- Final Acquisition Horizon Banner -->
          <div style="margin-top:2rem;padding:2.75rem clamp(1.5rem,4vw,3.5rem);background-color:#050507;border-top:var(--hairline-rule);border-bottom:var(--hairline-rule);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:2.5rem;">
            <div style="flex:1 1 520px;display:flex;flex-direction:column;gap:0.85rem;">
              <span class="editorial-kicker">
                IMMEDIATE DISCREET DISPATCH · SKU ONYX-MP-30 · MPN MPXR-30BLK-MY · GTIN 9550000102042
              </span>
              <h3 class="editorial-headline-lg" style="font-size:clamp(1.85rem,3.2vw,2.9rem);">
                Begin Your 30-Day <span class="foil-champagne-text">Extended-Release Nitric Oxide</span> Protocol Today
              </h3>
              <p style="color:var(--text-muted-alabaster);font-size:0.95rem;line-height:1.65;">
                Reserve 1 Bottle (30 Black Capsules · RM 159), 2 Bottles (60 Black Capsules · RM 318 · Free Nationwide Malaysia Shipping), or 3 Bottles (90 Black Capsules · RM 477 · Pro Series Vault). Dispatched in a 100% plain matte security parcel under <strong>OM Fulfilment Logistics</strong>. Direct concierge support: <a href="mailto:waleedshoaibofficial@gmail.com" style="color:var(--gold-foil-bright);">waleedshoaibofficial@gmail.com</a> | <a href="mailto:sales@onyxman.my" style="color:var(--gold-foil-bright);">sales@onyxman.my</a> | <a href="mailto:info@onyxman.my" style="color:var(--gold-foil-bright);">info@onyxman.my</a>.
              </p>
            </div>

            <div style="display:flex;flex-direction:column;gap:0.9rem;min-width:290px;">
              <button
                type="button"
                class="cta-foil-primary"
                data-open-order-drawer="true"
                data-order-product="magnum-pump-xr"
                data-order-qty="1"
              >
                <span>1 BOTTLE (30 BLACK CAPS) · RM 159</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
              <button
                type="button"
                class="cta-foil-primary"
                data-open-order-drawer="true"
                data-order-product="magnum-pump-xr"
                data-order-qty="2"
              >
                <span>2 BOTTLES (60 BLACK CAPS) · RM 318</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
              <button
                type="button"
                class="cta-hairline-secondary"
                data-open-order-drawer="true"
                data-order-product="magnum-pump-xr"
                data-order-qty="3"
                style="justify-content:space-between;"
              >
                <span>3 BOTTLES (90 BLACK CAPS) · RM 477</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>
  `;
}

/**
 * Generates the complete, uncompressed HTML5 document for Magnum Pump XR EN-MY Flagship
 * and writes it to both:
 *   1. public/magnum-pump-xr-malaysia/index.html
 *   2. public/products/magnum-pump-xr/index.html
 */
export function buildMagnumEnFlagshipPage() {
  const schemaGraphObj = buildMagnumEnSchemaGraph(MAGNUM_CONSTANTS.canonicalUrl);

  const bodyContent = [
    renderChapter1HeroStage(),
    renderChapter2BotanicalAndBlackCapsuleStage(),
    renderChapter3ChronologyDisambiguationComparisonAndStatesStage(),
    renderChapter4FaqAndAcquisitionStage(),
  ].join('\n');

  const html = renderLuxuryShell({
    lang: 'en-MY',
    title:
      'Magnum Pump XR Malaysia (30 Black Capsules) — Testosterone Pro Series Nitric Oxide Supplement | RM 159 Onyxman.my',
    description:
      'Reserve authentic Magnum Pump XR (Testosterone Pro Series — Male Enhancement Formula Maximum Strength — 30 Black Capsules, SKU: ONYX-MP-30, MPN: MPXR-30BLK-MY, GTIN-13: 9550000102042) for RM 159 at Onyxman.my. Oral botanical & amino-acid dietary supplement with 180mg L-Arginine HCl, 140mg L-Citrulline Malate 2:1, 110mg Tribulus Terrestris, 90mg Malaysian Tongkat Ali, 65mg Thai Black Ginger & 15mg Bioperine. Discreet delivery across all 16 Malaysia states.',
    canonicalPath: MAGNUM_CONSTANTS.canonicalPath,
    alternatePathEn: MAGNUM_CONSTANTS.canonicalPath,
    alternatePathMs: MAGNUM_CONSTANTS.pairedMsPath,
    ogImage: MAGNUM_CONSTANTS.assets.stageWebp,
    schemaGraphJson: schemaGraphObj,
    bodyContent,
    activeNav: 'magnum-pump-xr',
    productSlug: 'magnum-pump-xr',
    defaultQty: 2,
    includeSealStrip: true,
    extraHeadHtml: MAGNUM_PAGE_SCOPED_CSS,
  });

  // 1. Write primary flagship route: public/magnum-pump-xr-malaysia/index.html
  fs.mkdirSync(path.dirname(OUTPUT_FLAGSHIP_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FLAGSHIP_FILE, html, 'utf8');

  // 2. Write / copy catalog mirror route: public/products/magnum-pump-xr/index.html
  fs.mkdirSync(path.dirname(OUTPUT_PRODUCTS_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_PRODUCTS_FILE, html, 'utf8');

  const lineCount = html.split(/\r?\n/).length;
  const byteSize = Buffer.byteLength(html, 'utf8');

  return {
    outputFlagshipPath: OUTPUT_FLAGSHIP_FILE,
    outputProductsPath: OUTPUT_PRODUCTS_FILE,
    lineCount,
    byteSize,
  };
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  const result = buildMagnumEnFlagshipPage();
  console.log(
    `[MS-114A] Built ${result.outputFlagshipPath} AND ${result.outputProductsPath} — ${result.lineCount} lines (${result.byteSize} bytes)`
  );
}
