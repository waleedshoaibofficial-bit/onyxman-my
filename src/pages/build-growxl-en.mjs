#!/usr/bin/env node
/**
 * ONYXMAN.MY — GROW XL EN-MY FLAGSHIP APOTHECARY BUILDER (MS-109 TO MS-111)
 * Primary Output: public/grow-xl-malaysia/index.html
 * Canonical Alias Output: public/products/grow-xl/index.html
 * Canonical URL: https://www.onyxmen.my/grow-xl-malaysia/
 * Paired BM URL: https://www.onyxmen.my/ms/grow-xl-malaysia/
 *
 * Strictly enforces:
 * - APEX Rule #29 & Rule #30:
 *   - Paradigm A: 100vw x 100vh Full-Bleed Obsidian Hero Stage
 *   - Paradigm D: Pinned 50vw / 50vw Split-Screen Botanical Monograph Stage
 *   - Architectural Hairline Ledgers & Full-Width Matrix Spreads
 *   - Palette: #050507, #0B0C10, #12141C, #D4AF37, #EAE6DF
 *   - Typography: 'Cormorant Garamond', 'Syne', 'Space Grotesk'
 *   - ZERO #FAF8F5, ZERO Plus Jakarta Sans, ZERO border-radius: 999px, ZERO repeat(3, 1fr) card grids
 * - Authentic Product & Business Constants:
 *   - Product: Grow XL (#1 Selling Product — Made With Natural Ingredient — Extra-Strength Enhancement Male Performance Blend — 30 Capsules)
 *   - SKU: ONYX-GX-30 | MPN: GXL-30CAP-MY | GTIN-13: 9550000102035
 *   - Capsule Specification: 30 Capsules × 550mg = 16,500mg (16.5g) Total Bottle Potency
 *   - Official Pricing: 1 Bottle (30 Capsules) = RM 159 (159.00 MYR), 2 Bottles (60 Capsules) = RM 318 (318.00 MYR), 3 Bottles (90 Capsules) = RM 477 (477.00 MYR)
 *   - Refill Protocol: Day-25 Automated Refill Reminder Calendar Integration (30-day sustained performance cycle)
 *   - Studio Assets: /assets/products/grow-xl-stage.webp, /assets/products/grow-xl-portrait.webp, /assets/products/grow-xl-cutout.webp
 *   - Emails: waleedshoaibofficial@gmail.com, sales@onyxman.my, info@onyxman.my
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderLuxuryShell } from '../components/LuxuryShell.mjs';
import {
  buildFullPageGraph,
  buildFullPageGraphObject,
  ORG_ID,
  WEBSITE_ID,
  BRAND_ID,
} from '../utils/schema-graph.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');

const GROWXL_JSON_PATH = path.join(ROOT_DIR, 'src', 'data', 'products', 'grow-xl.json');
const GROWXL_DATA = JSON.parse(fs.readFileSync(GROWXL_JSON_PATH, 'utf8'));

const OUTPUT_PRIMARY = path.join(ROOT_DIR, 'public', 'grow-xl-malaysia', 'index.html');
const OUTPUT_ALIAS = path.join(ROOT_DIR, 'public', 'products', 'grow-xl', 'index.html');

export const GROWXL_CONSTANTS = {
  productId: GROWXL_DATA.id || 'grow-xl',
  productSlug: GROWXL_DATA.slug || 'grow-xl',
  productName: GROWXL_DATA.name || 'Grow XL',
  officialSubtitle:
    GROWXL_DATA.labelTranscription?.subtitleEn ||
    '#1 Selling Product — Made With Natural Ingredient — Extra-Strength Enhancement Male Performance Blend — 30 Capsules',
  sku: GROWXL_DATA.sku || 'ONYX-GX-30',
  mpn: GROWXL_DATA.mpn || 'GXL-30CAP-MY',
  gtin13: GROWXL_DATA.gtin13 || '9550000102035',
  capsuleCount: GROWXL_DATA.labelTranscription?.capsuleCount || 30,
  capsuleWeightMg: GROWXL_DATA.labelTranscription?.capsuleWeightMg || 550,
  totalBottlePotencyMg: GROWXL_DATA.usageProtocol?.totalNetPotencyMg || 16500,
  refillTriggerDay: GROWXL_DATA.refillProtocol?.refillReminderDay || 25,
  canonicalUrl: 'https://www.onyxmen.my/grow-xl-malaysia/',
  canonicalPath: '/grow-xl-malaysia/',
  pairedMsUrl: 'https://www.onyxmen.my/ms/grow-xl-malaysia/',
  pairedMsPath: '/ms/grow-xl-malaysia/',
  aliasPath: '/products/grow-xl/',
  assets: {
    stageWebp: GROWXL_DATA.images?.stageWebp || '/assets/products/grow-xl-stage.webp',
    stagePng: GROWXL_DATA.images?.stagePng || '/assets/products/grow-xl-stage.png',
    portraitWebp: GROWXL_DATA.images?.portraitWebp || '/assets/products/grow-xl-portrait.webp',
    portraitPng: GROWXL_DATA.images?.portraitPng || '/assets/products/grow-xl-portrait.png',
    cutoutWebp: GROWXL_DATA.images?.cutoutWebp || '/assets/products/grow-xl-cutout.webp',
    cutoutPng: GROWXL_DATA.images?.cutoutPng || '/assets/products/grow-xl-cutout.png',
  },
  emails: {
    primaryOrder: 'waleedshoaibofficial@gmail.com',
    sales: 'sales@onyxman.my',
    info: 'info@onyxman.my',
  },
};

export const GROWXL_6_BOTANICAL_ACTIVES = [
  {
    index: '01',
    code: 'GX-ACT-01',
    name: 'Extra-Strength Tongkat Ali',
    commonNameEn: 'Extra-Strength Malaysian Tongkat Ali Root Extract',
    scientificName: 'Eurycoma longifolia Jack (Extra-Strength Standardized Mature Root Extract)',
    dosageMg: 140,
    monthlyTotalMg: '4,200 mg / 30-Day Bottle',
    percentageOfCapsule: '25.45%',
    standardization: '100:1 Standardized Aqueous Root Extract (2.0% Bioactive Eurycomanone & >22% Eurypeptides)',
    extractionOrigin: 'Sustainable Wild-Harvested Pahang & Perak Rainforest Taproots (5+ Year Maturity)',
    physiologicalPathway: 'Hypothalamic-Pituitary-Gonadal (HPG) Adaptogenic Support, SHBG Modulation & Daily Physical Drive',
    clinicalNarrative:
      'Forming the 140mg cornerstone of every 550mg Grow XL capsule, our Extra-Strength Malaysian Tongkat Ali is water-extracted at a 100:1 ratio to concentrate bioactive quassinoids—specifically eurycomanone and eurypeptides—without harsh solvent residues. Taken once every morning across a 30-day cycle, 140mg per day (4,200mg monthly) supports healthy free male vitality equilibrium, moderates workplace cortisol fatigue, and sustains baseline physical stamina from morning commute to late evening.',
    microCirculationSynergy:
      'Pairs directly with 110mg Peruvian Maca Root (GX-ACT-02) and 80mg Brazilian Muira Puama (GX-ACT-04) to build progressive 30-day adaptogenic conditioning without caffeine jitters.',
    monographHref: '/ingredients/tongkat-ali/',
  },
  {
    index: '02',
    code: 'GX-ACT-02',
    name: 'Peruvian Maca Root',
    commonNameEn: 'Concentrated Peruvian Maca Root Extract',
    scientificName: 'Lepidium meyenii Walp. (10:1 Gelatinized High-Altitude Andean Hypocotyl)',
    dosageMg: 110,
    monthlyTotalMg: '3,300 mg / 30-Day Bottle',
    percentageOfCapsule: '20.00%',
    standardization: '10:1 Cold-Gelatinized Root Extract Standardized to >= 0.6% Macamides & Macaenes',
    extractionOrigin: 'Junín & Pasco Meseta, Peruvian Andes (4,100m+ Elevation Harvest)',
    physiologicalPathway: 'Non-Stimulant Cellular ATP Endurance, Libido Resilience & Autonomic Recovery',
    clinicalNarrative:
      'Delivering 110mg per capsule (3,300mg per 30-capsule bottle), Peruvian Maca Root provides unique lipid-soluble macamides and macaenes that nourish physical stamina and male desire without altering resting heart rate or blood pressure. Because our extract undergoes enzymatic starch gelatinization, it absorbs rapidly after a Malaysian breakfast with zero gastric heaviness—eliminating the mid-afternoon energy slump common during long office hours in Kuala Lumpur, Penang, or Johor Bahru.',
    microCirculationSynergy:
      'Amplifies the daily stamina curve of 140mg Extra-Strength Tongkat Ali (GX-ACT-01) while supporting smooth afternoon mental and physical output.',
    monographHref: '/ingredients/maca-root/',
  },
  {
    index: '03',
    code: 'GX-ACT-03',
    name: 'L-Arginine & L-Citrulline Matrix',
    commonNameEn: 'Dual Amino-Acid Micro-Circulation Matrix (L-Arginine HCl & L-Citrulline Malate)',
    scientificName: 'L-Arginine Hydrochloride + L-Citrulline DL-Malate (2:1 Precision Vascular Ratio)',
    dosageMg: 100,
    monthlyTotalMg: '3,000 mg / 30-Day Bottle',
    percentageOfCapsule: '18.18%',
    standardization: '2:1 Dual-Stage Amino Acid Matrix (67mg L-Arginine HCl + 33mg L-Citrulline Malate, USP Grade)',
    extractionOrigin: 'Pharmaceutical-Grade Plant Carbohydrate Fermentation (100% Non-Animal Origin)',
    physiologicalPathway: 'Endothelial Nitric Oxide Synthase (eNOS) Substrate & 24-Hour Peripheral Micro-Circulation',
    clinicalNarrative:
      'While L-Arginine HCl provides immediate substrate for endothelial Nitric Oxide (NO) synthesis within 45 minutes of morning intake, L-Citrulline Malate bypasses hepatic arginase breakdown and converts steadily into plasma L-Arginine over 8 to 12 hours. This 100mg dual-amino matrix (3,000mg per bottle) ensures continuous peripheral micro-circulation and efficient vascular delivery of Tongkat Ali, Muira Puama, and Saw Palmetto phytonutrients to active male tissues.',
    microCirculationSynergy:
      'Catalyzed by 50mg Aged Panax Ginseng & Ginkgo Biloba flavone glycosides (GX-ACT-06) for synergistic endothelial vasorelaxation.',
    monographHref: '/ingredients/l-arginine-l-citrulline/',
  },
  {
    index: '04',
    code: 'GX-ACT-04',
    name: 'Brazilian Muira Puama',
    commonNameEn: 'Brazilian Muira Puama ("Potency Wood") Bark & Root Extract',
    scientificName: 'Ptychopetalum olacoides Bentham (12:1 Concentrated Amazonian Bark & Root Extract)',
    dosageMg: 80,
    monthlyTotalMg: '2,400 mg / 30-Day Bottle',
    percentageOfCapsule: '14.55%',
    standardization: '12:1 Hydro-Botanical Extract Rich in Lupeol, Campesterol, Beta-Sitosterol & MuiraPuamine',
    extractionOrigin: 'Rio Negro Basin, Brazilian Amazon (Traditional Apothecary Bark & Root Selection)',
    physiologicalPathway: 'Neuromuscular Vigor, Tactile Responsiveness & Dopaminergic Vitality Conditioning',
    clinicalNarrative:
      'Distinguishing Grow XL from every 20-capsule formula in the Onyxman vault, 80mg of Brazilian Muira Puama ("Marapuama" or "Potency Wood") delivers concentrated sterols and long-chain fatty acid esters revered in South American botanical medicine. Across a continuous 30-day cycle (2,400mg per bottle), Muira Puama supports neuromuscular readiness, mental motivation, and responsive evening confidence.',
    microCirculationSynergy:
      'Works in tandem with 70mg Saw Palmetto Berry Extract (GX-ACT-05) as a dual sterol-lipidosterolic conditioning complex.',
    monographHref: '/ingredients/tongkat-ali/',
  },
  {
    index: '05',
    code: 'GX-ACT-05',
    name: 'Saw Palmetto Berry Extract',
    commonNameEn: 'Standardized Saw Palmetto Berry Lipidosterolic Extract',
    scientificName: 'Serenoa repens (W. Bartram) Small (Ripe Berry Standardized Extract)',
    dosageMg: 70,
    monthlyTotalMg: '2,100 mg / 30-Day Bottle',
    percentageOfCapsule: '12.73%',
    standardization: 'Standardized to 45% Free Fatty Acids (Lauric, Oleic, Myristic) & Bioactive Beta-Sitosterols',
    extractionOrigin: 'Subtropical Southeastern Coastal Mature Berries (Supercritical Clean Extraction)',
    physiologicalPathway: 'Prostate-Friendly Nutritional Balance, 5-Alpha-Reductase Equilibrium & Male Wellness Over 30',
    clinicalNarrative:
      'Engineered specifically for adult men aged 30 to 65+, each Grow XL capsule includes 70mg of standardized Serenoa repens (Saw Palmetto) berry extract (2,100mg per 30-day bottle). Rich in free fatty acids and phytosterols, Saw Palmetto supports long-term male physiological comfort, healthy urinary flow, and balanced androgenic conditioning during extended 30-day, 60-day, and 90-day vitality protocols.',
    microCirculationSynergy:
      'Complements 140mg Extra-Strength Tongkat Ali (GX-ACT-01) so long-term vitality elevation remains smooth, balanced, and prostate-supportive.',
    monographHref: '/ingredients/tribulus-terrestris/',
  },
  {
    index: '06',
    code: 'GX-ACT-06',
    name: 'Panax Ginseng & Ginkgo Biloba',
    commonNameEn: 'Aged Panax Ginseng & Ginkgo Biloba Vascular Cofactor Complex',
    scientificName: 'Panax ginseng C.A. Meyer Root + Ginkgo biloba L. Leaf Standardized Dual Complex',
    dosageMg: 50,
    monthlyTotalMg: '1,500 mg / 30-Day Bottle',
    percentageOfCapsule: '9.09%',
    standardization: '8% Dammarane Ginsenosides (Rg1/Rb1) + 24% Ginkgo Flavone Glycosides & 6% Terpene Lactones',
    extractionOrigin: '6-Year Mature Panax Root & Standardized Ginkgo Folium Extract',
    physiologicalPathway: 'Capillary Micro-Perfusion, Endothelial eNOS Co-Activation & Daytime Cognitive Clarity',
    clinicalNarrative:
      'Completing the 550mg extra-strength capsule (140 + 110 + 100 + 80 + 70 + 50 = 550mg), this 50mg vascular cofactor unites Panax Ginseng ginsenosides with Ginkgo Biloba flavone glycosides and ginkgolides. Ginkgo biloba promotes fine capillary micro-circulation and healthy blood rheology, while Panax Ginseng upregulates nitric oxide synthase and sharpens daytime mental focus.',
    microCirculationSynergy:
      'Directly unlocks the full micro-circulatory potential of the 100mg L-Arginine & L-Citrulline Matrix (GX-ACT-03).',
    monographHref: '/ingredients/panax-ginseng/',
  },
];

export const GROWXL_30_DAY_DAILY_CHRONOLOGY = [
  {
    day: 'Day 01',
    week: 'Week 1 · Phase I',
    capsule: 'Capsule #01 (550mg)',
    cumulativeMg: '550 mg',
    remaining: '29 Capsules',
    milestone: 'First morning intake (20–30 min after breakfast). L-Arginine HCl, L-Citrulline (100mg) & Ginkgo Biloba (50mg complex) initiate peripheral micro-circulation.',
    protocolNote: 'Take with 250ml–300ml water after breakfast',
  },
  {
    day: 'Day 02',
    week: 'Week 1 · Phase I',
    capsule: 'Capsule #02 (550mg)',
    cumulativeMg: '1,100 mg',
    remaining: '28 Capsules',
    milestone: 'Panax Ginseng ginsenosides and Peruvian Maca Root (110mg) establish steadier daytime ATP energy without mid-afternoon office drowsiness.',
    protocolNote: 'Maintain 2.5L daily tropical hydration',
  },
  {
    day: 'Day 03',
    week: 'Week 1 · Phase I',
    capsule: 'Capsule #03 (550mg)',
    cumulativeMg: '1,650 mg',
    remaining: '27 Capsules',
    milestone: '72-hour vascular primer complete; L-Citrulline malate recycling maintains smooth 24-hour baseline nitric oxide availability.',
    protocolNote: 'Space 45 min apart from morning kopi/teh',
  },
  {
    day: 'Day 04',
    week: 'Week 1 · Phase I',
    capsule: 'Capsule #04 (550mg)',
    cumulativeMg: '2,200 mg',
    remaining: '26 Capsules',
    milestone: 'Extra-Strength Tongkat Ali (140mg, 100:1) quassinoids begin modulating stress-induced cortisol after heavy Klang Valley or JB commutes.',
    protocolNote: 'Consistent morning clock time (+/- 30 min)',
  },
  {
    day: 'Day 05',
    week: 'Week 1 · Phase I',
    capsule: 'Capsule #05 (550mg)',
    cumulativeMg: '2,750 mg',
    remaining: '25 Capsules',
    milestone: 'Brazilian Muira Puama (80mg) and Saw Palmetto (70mg) phytosterols begin accumulating in lipid-rich cellular membranes.',
    protocolNote: 'Healthy dietary fats at breakfast aid sterol uptake',
  },
  {
    day: 'Day 06',
    week: 'Week 1 · Phase I',
    capsule: 'Capsule #06 (550mg)',
    cumulativeMg: '3,300 mg',
    remaining: '24 Capsules',
    milestone: 'Morning physical vitality and post-work energy resilience noticeably improve without caffeine restlessness or heart racing.',
    protocolNote: 'Zero synthetic stimulant crash',
  },
  {
    day: 'Day 07 (WEEK 1 COMPLETE)',
    week: 'Week 1 · Phase I',
    capsule: 'Capsule #07 (550mg)',
    cumulativeMg: '3,850 mg',
    remaining: '23 Capsules',
    milestone: 'Week 1 Micro-Circulation Awakening complete (3,850mg delivered): baseline daytime stamina, mental clarity, and capillary warmth established.',
    protocolNote: 'Week 1 Milestone Verified (23 Caps Left)',
  },
  {
    day: 'Day 08',
    week: 'Week 2 · Phase II',
    capsule: 'Capsule #08 (550mg)',
    cumulativeMg: '4,400 mg',
    remaining: '22 Capsules',
    milestone: 'Entry into Week 2 Adaptogenic Reserve Compounding; cumulative Tongkat Ali surpasses 1,100mg across 8 days.',
    protocolNote: 'Continue 1 capsule daily post-breakfast',
  },
  {
    day: 'Day 09',
    week: 'Week 2 · Phase II',
    capsule: 'Capsule #09 (550mg)',
    cumulativeMg: '4,950 mg',
    remaining: '21 Capsules',
    milestone: 'Peruvian Maca macamides (990mg cumulative) reinforce physical endurance during gym training and active evenings.',
    protocolNote: '2.5L–3.0L water in humid weather',
  },
  {
    day: 'Day 10',
    week: 'Week 2 · Phase II',
    capsule: 'Capsule #10 (550mg)',
    cumulativeMg: '5,500 mg (1/3 Bottle)',
    remaining: '20 Capsules',
    milestone: 'One-Third Bottle Milestone (5,500mg total actives absorbed); Phase I transitions fully into deep botanical reserve compounding.',
    protocolNote: '33.3% of 30-day cycle completed',
  },
  {
    day: 'Day 11',
    week: 'Week 2 · Phase II',
    capsule: 'Capsule #11 (550mg)',
    cumulativeMg: '6,050 mg',
    remaining: '19 Capsules',
    milestone: 'Brazilian Muira Puama (12:1 bark phytosterols) and Tongkat Ali synergize to support stronger neuromuscular vigor and evening readiness.',
    protocolNote: 'Steady 24-hour botanical plasma curve',
  },
  {
    day: 'Day 12',
    week: 'Week 2 · Phase II',
    capsule: 'Capsule #12 (550mg)',
    cumulativeMg: '6,600 mg',
    remaining: '18 Capsules',
    milestone: 'Dual L-Arginine & L-Citrulline matrix + Ginkgo flavones support responsive peripheral micro-perfusion throughout work and leisure.',
    protocolNote: 'Zero gastric irritation or reflux',
  },
  {
    day: 'Day 13',
    week: 'Week 2 · Phase II',
    capsule: 'Capsule #13 (550mg)',
    cumulativeMg: '7,150 mg',
    remaining: '17 Capsules',
    milestone: 'Saw Palmetto lipidosterolic fatty acids (910mg cumulative) support balanced male physiological comfort and urinary wellness.',
    protocolNote: 'Store bottle below 30°C away from moisture',
  },
  {
    day: 'Day 14 (WEEK 2 COMPLETE)',
    week: 'Week 2 · Phase II',
    capsule: 'Capsule #14 (550mg)',
    cumulativeMg: '7,700 mg',
    remaining: '16 Capsules',
    milestone: 'Week 2 Botanical Reserve Compounding complete (7,700mg delivered): deeper physical stamina, workout recovery, and spontaneous evening confidence.',
    protocolNote: 'Week 2 Milestone Verified (16 Caps Left)',
  },
  {
    day: 'Day 15 (HALFWAY MILESTONE)',
    week: 'Week 3 · Phase III',
    capsule: 'Capsule #15 (550mg)',
    cumulativeMg: '8,250 mg (50% Bottle)',
    remaining: '15 Capsules',
    milestone: 'Exact Mid-Month Halfway Point (8,250mg absorbed, 15 capsules remaining); all 6 natural actives operate in synchronized equilibrium.',
    protocolNote: '50.0% of 16,500mg bottle potency delivered',
  },
  {
    day: 'Day 16',
    week: 'Week 3 · Phase III',
    capsule: 'Capsule #16 (550mg)',
    cumulativeMg: '8,800 mg',
    remaining: '14 Capsules',
    milestone: 'Cumulative Extra-Strength Tongkat Ali reaches 2,240mg; morning drive and daytime mental sharpness remain high from 07:00 to 23:00.',
    protocolNote: 'Optimal daily metabolic conditioning',
  },
  {
    day: 'Day 17',
    week: 'Week 3 · Phase III',
    capsule: 'Capsule #17 (550mg)',
    cumulativeMg: '9,350 mg',
    remaining: '13 Capsules',
    milestone: 'Peruvian Maca and Panax Ginseng support sustained cardiorespiratory endurance and faster recovery after physical exertion.',
    protocolNote: 'Hydrate well post-exercise',
  },
  {
    day: 'Day 18',
    week: 'Week 3 · Phase III',
    capsule: 'Capsule #18 (550mg)',
    cumulativeMg: '9,900 mg',
    remaining: '12 Capsules',
    milestone: 'Unlike 20-capsule bottles that require refilling on Day 18, Grow XL still holds 12 full capsules (12 days of supply) in reserve.',
    protocolNote: '30-Capsule Full-Month Advantage',
  },
  {
    day: 'Day 19',
    week: 'Week 3 · Phase III',
    capsule: 'Capsule #19 (550mg)',
    cumulativeMg: '10,450 mg',
    remaining: '11 Capsules',
    milestone: 'Cumulative botanical delivery crosses the 10,000mg threshold while 11 capsules remain in your obsidian vessel.',
    protocolNote: 'Surpasses full 20-cap bottle total mass',
  },
  {
    day: 'Day 20',
    week: 'Week 3 · Phase III',
    capsule: 'Capsule #20 (550mg)',
    cumulativeMg: '11,000 mg (2/3 Bottle)',
    remaining: '10 Capsules',
    milestone: 'Two-Thirds Bottle Milestone (11,000mg delivered, 10 capsules remaining); micro-circulation and Muira Puama synergy reach full maturity.',
    protocolNote: '66.7% of 30-day cycle completed',
  },
  {
    day: 'Day 21 (WEEK 3 COMPLETE)',
    week: 'Week 3 · Phase III',
    capsule: 'Capsule #21 (550mg)',
    cumulativeMg: '11,550 mg',
    remaining: '9 Capsules',
    milestone: 'Week 3 Full-Spectrum Synergy complete (11,550mg delivered): sustained all-day vitality, vascular readiness, and Saw Palmetto balance.',
    protocolNote: 'Week 3 Milestone Verified (9 Caps Left)',
  },
  {
    day: 'Day 22',
    week: 'Week 4 · Phase IV',
    capsule: 'Capsule #22 (550mg)',
    cumulativeMg: '12,100 mg',
    remaining: '8 Capsules',
    milestone: 'Entry into Week 4 Peak Monthly Conditioning; steady-state bioavailability across all 6 standardized herbal and amino fractions.',
    protocolNote: '3 days prior to Day-25 Refill Trigger',
  },
  {
    day: 'Day 23',
    week: 'Week 4 · Phase IV',
    capsule: 'Capsule #23 (550mg)',
    cumulativeMg: '12,650 mg',
    remaining: '7 Capsules',
    milestone: 'Full-month conditioning supports effortless transition between demanding corporate schedules and active evening life.',
    protocolNote: '7 capsules (1 full week) remaining',
  },
  {
    day: 'Day 24',
    week: 'Week 4 · Phase IV',
    capsule: 'Capsule #24 (550mg)',
    cumulativeMg: '13,200 mg',
    remaining: '6 Capsules',
    milestone: 'Eve of the Day-25 Refill Trigger; 80% of bottle potency (13,200mg) absorbed with 6 capsules remaining.',
    protocolNote: 'Prepare for Day-25 Refill Check-In',
  },
  {
    day: 'Day 25 (REFILL TRIGGER DAY)',
    week: 'Week 4 · Phase IV',
    capsule: 'Capsule #25 (550mg)',
    cumulativeMg: '13,750 mg',
    remaining: '5 Buffer Capsules',
    milestone: 'AUTOMATED DAY-25 REFILL REMINDER FIRES: With 5 capsules (5 days) remaining, reserve your Month-2 bottle (RM 159 / RM 318 / RM 477) so discreet courier delivery arrives across West or East Malaysia with zero gap.',
    protocolNote: '1-Click Express Order or Calendar Alert',
  },
  {
    day: 'Day 26 (TRANSIT BUFFER I)',
    week: 'Week 4 · Phase IV',
    capsule: 'Capsule #26 (550mg)',
    cumulativeMg: '14,300 mg',
    remaining: '4 Buffer Capsules',
    milestone: 'Your fresh unmarked "OM Fulfilment Logistics" parcel is dispatched from our Klang Valley hub while you take Capsule #26.',
    protocolNote: '4 days of uninterrupted buffer reserve',
  },
  {
    day: 'Day 27 (TRANSIT BUFFER II)',
    week: 'Week 4 · Phase IV',
    capsule: 'Capsule #27 (550mg)',
    cumulativeMg: '14,850 mg',
    remaining: '3 Buffer Capsules',
    milestone: 'Peninsular Malaysia orders (KL, Selangor, Penang, JB, Ipoh, Melaka, Kuantan) typically arrive in hand by Day 27.',
    protocolNote: '3 capsules remaining in Bottle #1',
  },
  {
    day: 'Day 28 (TRANSIT BUFFER III)',
    week: 'Week 4 · Phase IV',
    capsule: 'Capsule #28 (550mg)',
    cumulativeMg: '15,400 mg',
    remaining: '2 Buffer Capsules',
    milestone: 'East Malaysia air-freight parcels (Sabah, Sarawak, Labuan) clear delivery well ahead of Day 30 while you take Capsule #28.',
    protocolNote: '2 capsules remaining in Bottle #1',
  },
  {
    day: 'Day 29 (TRANSIT BUFFER IV)',
    week: 'Week 4 · Phase IV',
    capsule: 'Capsule #29 (550mg)',
    cumulativeMg: '15,950 mg',
    remaining: '1 Buffer Capsule',
    milestone: 'Penultimate capsule of Month 1; cumulative Tongkat Ali (4,060mg) and Maca (3,190mg) sustain peak baseline conditioning.',
    protocolNote: 'Next bottle ready in your cabinet',
  },
  {
    day: 'Day 30 (FULL-MONTH PEAK)',
    week: 'Week 4 · Phase IV',
    capsule: 'Capsule #30 (550mg)',
    cumulativeMg: '16,500 mg (Full Bottle)',
    remaining: '0 (Month 2 Ready)',
    milestone: 'Complete 30-Day / 16,500mg Extra-Strength Cycle achieved (4,200mg Tongkat Ali + 3,300mg Maca + 3,000mg Dual Amino + 2,400mg Muira Puama + 2,100mg Saw Palmetto + 1,500mg Ginseng/Ginkgo). Seamless Day-31 entry into Month 2.',
    protocolNote: 'Full 30-Day Cycle Completed · Zero Gap',
  },
];

export const GROWXL_16_STATES_LEDGER = [
  {
    num: '01',
    stateName: 'Kuala Lumpur (WP)',
    hubSlug: 'kuala-lumpur',
    href: '/malaysia-delivery/kuala-lumpur/',
    zoneLabel: 'KLANG VALLEY SAME-DAY ZONE',
    transitWindow: 'Same-Day Private Runner (3–5 Hours) or 1 Business Day Free Express',
    keyDistricts: 'KLCC, Bukit Bintang, Bangsar, Mont Kiara, Sri Hartamas, Damansara Heights, Cheras, Bukit Jalil, Setapak, Wangsa Maju',
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
    keyDistricts: 'Petaling Jaya, Subang Jaya, Sunway, Shah Alam, Puchong, Klang, Setia Alam, Damansara, Kajang, Bangi, Cyberjaya, Rawang',
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
    keyDistricts: 'Precinct 1–20 Putrajaya, Diplomatic Enclave, IOI Resort City, Cyberjaya Border',
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
    transitWindow: '1–2 Business Days Overnight Southern Highway Linehaul',
    keyDistricts: 'Johor Bahru, Iskandar Puteri, Mount Austin, Skudai, Kulai, Pasir Gudang, Batu Pahat, Muar, Kluang, Segamat, Mersing',
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
    transitWindow: '1–2 Business Days Island & Seberang Perai Express',
    keyDistricts: 'George Town, Bayan Lepas, Gurney, Tanjung Tokong, Jelutong, Butterworth, Bukit Mertajam, Seberang Jaya, Batu Kawan',
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
    keyDistricts: 'Ipoh, Canning Garden, Meru Raya, Taiping, Seri Manjung, Sitiawan, Lumut, Teluk Intan, Kampar, Kuala Kangsar',
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
    keyDistricts: 'Melaka City (Bandaraya Melaka), Ayer Keroh, Batu Berendam, Bukit Beruang, Klebang, Alor Gajah, Jasin',
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
    transitWindow: '1–2 Business Days Express Courier',
    keyDistricts: 'Seremban, Seremban 2, Bandar Sri Sendayan, Senawang, Nilai, Port Dickson, Lukut, Tampin, Bahau',
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
    transitWindow: '1–2 Business Days Karak-LPT Highway Linehaul',
    keyDistricts: 'Kuantan, Indera Mahkota, Temerloh, Mentakab, Bentong, Genting Highlands, Pekan, Raub, Cameron Highlands',
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
    transitWindow: '1–2 Business Days Mainland Kedah (2–3 Days Langkawi Island)',
    keyDistricts: 'Alor Setar, Sungai Petani, Kulim Hi-Tech Park, Jitra, Kubang Pasu, Changlun, Baling, Langkawi (Kuah & Pantai Cenang)',
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
    keyDistricts: 'Kuala Terengganu, Gong Badak, Kuala Nerus, Chukai (Kemaman), Kerteh, Paka, Dungun, Marang, Jerteh (Besut)',
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
    keyDistricts: 'Kangar, Arau, Kuala Perlis, Padang Besar, Simpang Empat, Chuping',
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
    keyDistricts: 'Kota Kinabalu, Luyang, Penampang, Putatan, Sandakan, Tawau, Lahad Datu, Keningau, Kudat, Semporna',
    postalCodes: '88000–91309',
    shippingCost: '1B: RM 12 Air Subsidized · 2B (RM 318): RM 0 FREE · 3B (RM 477): RM 0 FREE Priority Air',
    paymentModes: 'FPX Online Banking, DuitNow Instant QR, Selected Metro COD',
  },
  {
    num: '15',
    stateName: 'Sarawak (Borneo)',
    hubSlug: 'sarawak-kuching',
    href: '/malaysia-delivery/sarawak-kuching/',
    zoneLabel: 'BORNEO AIR FREIGHT ZONE',
    transitWindow: '2–4 Business Days Discreet Air Cargo Parcel',
    keyDistricts: 'Kuching, Petra Jaya, Kota Samarahan, Miri, Sibu, Bintulu, Sarikei, Sri Aman, Limbang',
    postalCodes: '93000–98859',
    shippingCost: '1B: RM 12 Air Subsidized · 2B (RM 318): RM 0 FREE · 3B (RM 477): RM 0 FREE Priority Air',
    paymentModes: 'FPX Online Banking, DuitNow Instant QR, Selected Metro COD',
  },
  {
    num: '16',
    stateName: 'Labuan (WP Federal Territory)',
    hubSlug: 'labuan',
    href: '/malaysia-delivery/labuan/',
    zoneLabel: 'BORNEO AIR FREIGHT ZONE',
    transitWindow: '2–4 Business Days Discreet Air Cargo Parcel',
    keyDistricts: 'Victoria (Bandar Labuan), Financial Park Complex, Rancha-Rancha, Patau-Patau',
    postalCodes: '87000–87033',
    shippingCost: '1B: RM 12 Air Subsidized · 2B (RM 318): RM 0 FREE · 3B (RM 477): RM 0 FREE Priority Air',
    paymentModes: 'FPX Online Banking, DuitNow Instant QR, Selected COD',
  },
];

export const GROWXL_FAQS = [
  {
    index: '01',
    code: 'GX-FAQ-01',
    category: '30-CAPSULE SPECIFICATION & POTENCY',
    questionEn: 'How many capsules are in 1 bottle of Grow XL, what is the milligram potency, and how long does 1 bottle last?',
    answerEn:
      'Each authentic bottle of Grow XL distributed by Onyxman Malaysia (SKU: ONYX-GX-30, MPN: GXL-30CAP-MY, GTIN-13: 9550000102035) contains exactly 30 extra-strength botanical capsules at 550mg per capsule—delivering 16,500mg (16.5 grams) of active botanicals and amino acids per bottle. At the recommended daily protocol of 1 capsule per morning after breakfast, 1 bottle provides a complete 30-day (1 full calendar month) supply at just RM 5.30 per day (RM 159 per bottle).',
  },
  {
    index: '02',
    code: 'GX-FAQ-02',
    category: '30-CAPSULE COMPARISON (GROW XL VS MAGNUM PUMP XR)',
    questionEn: 'How does Grow XL differ from Magnum Pump XR since both contain 30 capsules at RM 159?',
    answerEn:
      'While both Grow XL (SKU: ONYX-GX-30) and Magnum Pump XR (SKU: ONYX-MP-30) contain 30 capsules at RM 159 with a Day-25 refill reminder, they serve different daily mechanisms and times of day. Grow XL is a 550mg all-day natural botanical conditioning blend (140mg Extra-Strength Tongkat Ali, 110mg Peruvian Maca, 100mg Dual L-Arginine/L-Citrulline, 80mg Brazilian Muira Puama, 70mg Saw Palmetto, and 50mg Panax Ginseng/Ginkgo Biloba) taken once every morning after breakfast for 24-hour baseline vitality and micro-circulation. Magnum Pump XR (30 Black Capsules × 600mg) is a specialized Nitric Oxide & Testosterone Pro Series formula dominated by 320mg combined L-Arginine HCl + L-Citrulline Malate, Thai Black Ginger (Kunyit Hitam), and Bioperine taken 30–45 minutes before gym workouts or evening performance.',
  },
  {
    index: '03',
    code: 'GX-FAQ-03',
    category: '30-CAPSULE VS 20-CAPSULE COMPARISON',
    questionEn: 'How does Grow XL (30 Capsules) compare to Horsemen and Hammer of Thor (20 Capsules)?',
    answerEn:
      'Grow XL is engineered as a 30-day daily nutritional conditioning protocol (30 capsules × 550mg = 16,500mg per bottle) featuring Brazilian Muira Puama (80mg) and Saw Palmetto (70mg) alongside Extra-Strength Tongkat Ali (140mg), Peruvian Maca (110mg), Dual Amino Acids (100mg), and Ginseng/Ginkgo (50mg). In contrast, Horsemen (20 Capsules × 500mg, SKU ONYX-HM-20) is tuned for rapid 45–60 minute pre-evening readiness with Epimedium and Black Maca, while Hammer of Thor (20 Veg. Capsules × 500mg, SKU ONYX-HT-20) specializes in 200mg 60%-Saponin Tribulus Terrestris inside 100% plant-origin HPMC vegetarian capsules.',
  },
  {
    index: '04',
    code: 'GX-FAQ-04',
    category: 'DAY-25 AUTOMATED REFILL PROTOCOL',
    questionEn: 'Why is the automated refill reminder for Grow XL set to Day 25 instead of Day 18?',
    answerEn:
      'Because Grow XL contains a full 30-capsule monthly supply (compared to 20 capsules in Horsemen and Hammer of Thor), taking 1 capsule every morning leaves you with exactly 5 buffer capsules on Day 25. Triggering your automated Google Calendar or WhatsApp concierge reminder on Day 25 gives our Klang Valley dispatch desk a generous 5-day window to deliver your Month-2 or Month-3 parcel via 1–2 day Peninsular courier or 2–4 day Borneo air freight before Capsule #30 is taken—guaranteeing 100% seamless botanical continuity.',
  },
  {
    index: '05',
    code: 'GX-FAQ-05',
    category: 'OFFICIAL MALAYSIA PRICING & TIERS',
    questionEn: 'What is the official price for 1, 2, or 3 bottles of Grow XL in Malaysia?',
    answerEn:
      'Onyxman Malaysia enforces transparent, uniform apothecary pricing: 1 Bottle (30 Capsules / 30-Day Full-Month Cycle, SKU ONYX-GX-30-1B) is RM 159 (159.00 MYR) with Free Discreet Express Shipping across Peninsular Malaysia (RM 12 subsidized air freight for Sabah, Sarawak & Labuan); 2 Bottles (60 Capsules / 60-Day Progressive Conditioning Reserve, SKU ONYX-GX-30-2B) is RM 318 (318.00 MYR) with 100% Free Nationwide Malaysia Shipping including Sabah, Sarawak & Labuan; and 3 Bottles (90 Capsules / Complete 90-Day Extra-Strength Mastery Vault, SKU ONYX-GX-30-3B) is RM 477 (477.00 MYR) with Priority VIP Discreet Dispatch and Day-75 Concierge Refill Check-In.',
  },
  {
    index: '06',
    code: 'GX-FAQ-06',
    category: 'AUTHENTICITY & PHYSICAL LABEL VERIFICATION',
    questionEn: 'Why should I order Grow XL directly from Onyxman.my instead of unverified third-party classified ads?',
    answerEn:
      'Unverified third-party classified listings frequently circulate watermarked photos, heat-degraded grey-market bottles, or counterfeit stock at inflated prices. Ordering directly from https://www.onyxmen.my guarantees 100% authentic, climate-controlled Kuala Lumpur warehouse stock (SKU: ONYX-GX-30, MPN: GXL-30CAP-MY, GTIN-13: 9550000102035) featuring the gloss obsidian vessel, metallic gold "#1 Selling Product — Made With Natural Ingredient" crest, blue-silver "XL" emblem, crimson "Extra-Strength Enhancement — Male Performance Blend — Dietary Supplement 30 Capsules" band, and tamper-evident neck seal at the official RM 159 price.',
  },
  {
    index: '07',
    code: 'GX-FAQ-07',
    category: '100% UNMARKED DISCREET SHIPPING',
    questionEn: 'Is Grow XL shipped in a plain box without product names or brand logos?',
    answerEn:
      'Yes—100% privacy is guaranteed on every parcel. Your Grow XL order leaves our Klang Valley fulfilment vault sealed inside an unmarked, opaque matte security mailer or plain corrugated carton. The courier airway bill lists the sender neutrally as "OM Fulfilment Logistics" with content classification "Personal Nutritional Supplement — Ref #GX30". Zero mention of "Grow XL", "Onyxman", or "Male Performance Blend" ever appears on the exterior, making it completely safe for condo guardhouses, office reception desks, or home delivery.',
  },
  {
    index: '08',
    code: 'GX-FAQ-08',
    category: 'COD, FPX & DUITNOW QR PAYMENTS',
    questionEn: 'Can I pay Cash on Delivery (COD), FPX Online Banking, or DuitNow QR for Grow XL across Malaysia?',
    answerEn:
      'Yes. Through our 1-Click Express Discreet Order Drawer (routed directly to waleedshoaibofficial@gmail.com and sales@onyxman.my), you can select Cash on Delivery (COD — pay only when the sealed plain parcel is handed to you by the courier), instant FPX Online Banking (Maybank2u, CIMB Clicks, Public Bank, RHB, Hong Leong, Bank Islam), or DuitNow Instant QR across Peninsular Malaysia and major urban centers in Sabah, Sarawak, and Labuan.',
  },
  {
    index: '09',
    code: 'GX-FAQ-09',
    category: 'BOTANICAL INTEGRITY & ZERO SYNTHETIC CLAIMS',
    questionEn: 'Does Grow XL make unrealistic permanent anatomical claims or contain undeclared synthetic drugs?',
    answerEn:
      'No. At Onyxman Malaysia, we strictly reject exaggerated medical or permanent anatomical modification claims. Grow XL is a clean, standardized botanical and amino-acid dietary supplement formulated for adult men (18+) to support daily physical stamina, peripheral micro-circulation, neuromuscular readiness, and prostate-friendly nutritional wellness. It contains zero synthetic PDE5 pharmaceutical adulterants, zero exogenous hormones, and zero banned stimulants.',
  },
  {
    index: '10',
    code: 'GX-FAQ-10',
    category: 'OPTIMAL 30-TO-90-DAY DURATION & STACKING',
    questionEn: 'How long should I take Grow XL for optimal results, and can I stack it with Horsemen or Magnum Pump XR?',
    answerEn:
      'While initial morning energy stability and peripheral micro-circulation support are typically noted within Days 7 to 10 (Phase I), concentrated botanical adaptogens and phytosterols—such as Extra-Strength Tongkat Ali (140mg), Peruvian Maca (110mg), Brazilian Muira Puama (80mg), and Saw Palmetto (70mg)—achieve peak physiological conditioning over a continuous 60-day (2 bottles, RM 318) to 90-day (3 bottles, RM 477) cycle. Many Malaysian customers also run a Morning + Evening Apothecary Stack: taking 1 Grow XL capsule after breakfast for all-day baseline nourishment, while keeping Horsemen or Magnum Pump XR on hand for targeted pre-workout or evening performance.',
  },
];

/**
 * Builds the comprehensive @graph JSON-LD specifically for https://www.onyxmen.my/grow-xl-malaysia/
 * Uses `buildFullPageGraphObject` and `buildFullPageGraph` from `src/utils/schema-graph.mjs`
 * enriched with exact Grow XL (`ONYX-GX-30`, `GXL-30CAP-MY`, `9550000102035`) specifications,
 * `Product` + `DietarySupplement`, `ProductGroup` (1/2/3 bottles), `FAQPage` (10 Q&As), and `BreadcrumbList`.
 */
export function buildGrowXlEnSchemaGraph() {
  const pageUrl = GROWXL_CONSTANTS.canonicalUrl;
  const productNodeId = `${pageUrl}#product`;
  const productGroupId = `${pageUrl}#product-group`;

  const activeIngredientsList = GROWXL_6_BOTANICAL_ACTIVES.map(
    (act) => `${act.name} (${act.scientificName}) — ${act.dosageMg}mg [${act.standardization}]`
  );

  const baseGraphObj = buildFullPageGraphObject({
    lang: 'en-MY',
    pageType: 'product',
    pageUrl,
    title:
      'Grow XL Malaysia (30 Capsules) — #1 Selling Product Extra-Strength Male Performance Blend | RM 159 Onyxman.my',
    description:
      'Buy authentic Grow XL (#1 Selling Product — Made With Natural Ingredient — Extra-Strength Enhancement Male Performance Blend — 30 Capsules, SKU: ONYX-GX-30, MPN: GXL-30CAP-MY, GTIN-13: 9550000102035) for RM 159 at Onyxman.my. 550mg per capsule (16,500mg per bottle) with Extra-Strength Tongkat Ali 140mg, Peruvian Maca 110mg, L-Arginine & L-Citrulline 100mg, Brazilian Muira Puama 80mg, Saw Palmetto 70mg & Panax Ginseng/Ginkgo Biloba 50mg.',
    product: {
      id: 'grow-xl',
      slug: 'grow-xl',
      name: 'Grow XL',
      fullTitleEn:
        'Grow XL — #1 Selling Product Extra-Strength Enhancement Male Performance Blend (30 Capsules × 550mg)',
      descriptionEn:
        'Grow XL by Onyxman Malaysia (SKU: ONYX-GX-30, MPN: GXL-30CAP-MY, GTIN-13: 9550000102035) is a 30-capsule extra-strength adult men’s botanical dietary supplement delivering 550mg per capsule (16,500mg per bottle): Extra-Strength Malaysian Tongkat Ali (140mg), Peruvian Maca Root (110mg), L-Arginine HCl & L-Citrulline Malate Matrix (100mg), Brazilian Muira Puama (80mg), Saw Palmetto Berry Extract (70mg), and Aged Panax Ginseng & Ginkgo Biloba (50mg) for a complete 30-day cycle with Day-25 automated refill reminder.',
      disambiguatingDescriptionEn:
        'Oral 30-capsule × 550mg botanical and amino-acid dietary supplement for adult men (18+) in Malaysia. Marked with the gold "#1 Selling Product — Made With Natural Ingredient" crest and metallic blue-silver "XL" emblem. Not a plant fertilizer, agricultural chemical, or synthetic pharmaceutical drug.',
      capsuleCount: 30,
      dosageProtocolEn:
        'Take 1 capsule (550mg) every morning 20–30 minutes after breakfast with 250ml–300ml water for a full 30-day daily conditioning cycle (or 1 capsule 30 minutes after dinner).',
      primaryFocusEn:
        '30-Day Progressive Male Vitality, Peripheral Micro-Circulation, Muira Puama Neuromuscular Readiness & Saw Palmetto Adult Male Wellness',
      keyBotanicals: activeIngredientsList,
      sku: GROWXL_CONSTANTS.sku,
      mpn: GROWXL_CONSTANTS.mpn,
      gtin13: GROWXL_CONSTANTS.gtin13,
      imageStageWebp: `https://www.onyxmen.my${GROWXL_CONSTANTS.assets.stageWebp}`,
      imageStagePng: `https://www.onyxmen.my${GROWXL_CONSTANTS.assets.stagePng}`,
      imagePortraitWebp: `https://www.onyxmen.my${GROWXL_CONSTANTS.assets.portraitWebp}`,
      imagePortraitPng: `https://www.onyxmen.my${GROWXL_CONSTANTS.assets.portraitPng}`,
      imageCutoutWebp: `https://www.onyxmen.my${GROWXL_CONSTANTS.assets.cutoutWebp}`,
      imageCutoutPng: `https://www.onyxmen.my${GROWXL_CONSTANTS.assets.cutoutPng}`,
    },
    breadcrumbs: [
      {
        name: 'Onyxman Malaysia (Home)',
        url: 'https://www.onyxmen.my/',
      },
      {
        name: 'Apothecary Formulations',
        url: 'https://www.onyxmen.my/products/',
      },
      {
        name: 'Grow XL (30 Capsules — Extra-Strength Male Performance Blend)',
        url: pageUrl,
      },
    ],
    faqs: GROWXL_FAQS,
  });

  // Normalize all @id and url references inside Product & ProductGroup nodes so they point to https://www.onyxmen.my/grow-xl-malaysia/
  const graph = baseGraphObj['@graph'].map((node) => {
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
            '#ms109-hero-summary',
            '#ms110-botanical-lead',
            '#ms111-faq-heading',
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
        sku: GROWXL_CONSTANTS.sku,
        mpn: GROWXL_CONSTANTS.mpn,
        gtin13: GROWXL_CONSTANTS.gtin13,
        isVariantOf: { '@id': productGroupId },
        additionalProperty: [
          {
            '@type': 'PropertyValue',
            name: 'Official Front Label Inscription',
            value:
              '#1 Selling Product · Made With Natural Ingredient · Extra-Strength Enhancement · Male Performance Blend · Dietary Supplement 30 Capsules',
          },
          {
            '@type': 'PropertyValue',
            name: 'Capsule Count & Mass',
            value: '30 Capsules × 550mg (16,500mg Total Bottle Active Potency)',
          },
          {
            '@type': 'PropertyValue',
            name: 'Refill Cycle Protocol',
            value: 'Day-25 Automated Refill Reminder Calendar Integration (30-Day Sustained Performance Cycle)',
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
          sku: GROWXL_CONSTANTS.sku,
          price: '159.00',
          priceCurrency: 'MYR',
        },
      };
    }

    if (node['@type'] === 'ProductGroup') {
      const updatedVariants = (node.hasVariant || []).map((v, i) => {
        const bottles = i + 1;
        const caps = bottles * 30;
        const days = bottles * 30;
        const refillDay = bottles * 25;
        const prices = ['159.00', '318.00', '477.00'];
        const suffixes = ['1B', '2B', '3B'];
        return {
          ...v,
          '@id': `${pageUrl}#variant-${bottles}-bottle`,
          name: `Grow XL — ${bottles} ${bottles === 1 ? 'Bottle' : 'Bottles'} (${caps} Capsules × 550mg · ${days}-Day Extra-Strength Cycle · Day-${refillDay} Refill Trigger)`,
          sku: `${GROWXL_CONSTANTS.sku}-${suffixes[i]}`,
          mpn: `${GROWXL_CONSTANTS.mpn}-${suffixes[i]}`,
          gtin13: GROWXL_CONSTANTS.gtin13,
          isVariantOf: { '@id': productGroupId },
          offers: {
            ...v.offers,
            '@id': `${pageUrl}#offer-${bottles}-bottle`,
            url: pageUrl,
            sku: `${GROWXL_CONSTANTS.sku}-${suffixes[i]}`,
            price: prices[i],
            priceCurrency: 'MYR',
          },
        };
      });

      return {
        ...node,
        '@id': productGroupId,
        url: pageUrl,
        productGroupID: `${GROWXL_CONSTANTS.sku}-GROUP`,
        hasVariant: updatedVariants,
      };
    }

    return node;
  });

  // Ensure buildFullPageGraph is also exercised for deterministic validation
  const verifiedJson = buildFullPageGraph({
    lang: 'en-MY',
    pageType: 'product',
    pageUrl,
    product: 'grow-xl',
    faqs: GROWXL_FAQS,
  });
  if (!verifiedJson.includes('"@graph"')) {
    throw new Error('Schema graph helper verification failed');
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

/**
 * Dedicated Flagship Page Scoped Architectural Styles (MS-109 to MS-111).
 * Strictly enforces Rule #29 & Rule #30:
 * - Paradigm A: 100vw x 100vh Full-Bleed Obsidian Hero Stage
 * - Paradigm D: 50vw / 50vw Pinned Split-Screen Botanical Breakdown Stage
 * - Architectural Hairline Ledgers & Full-Width Matrix Spreads
 * - Palette: #050507, #0B0C10, #12141C, #D4AF37, #EAE6DF
 * - Typography: 'Cormorant Garamond', 'Syne', 'Space Grotesk'
 * - ZERO banned card grids, ZERO pill badges, ZERO #FAF8F5, ZERO Plus Jakarta Sans
 */
export const GROWXL_PAGE_SCOPED_CSS = `
<style id="onyxman-growxl-flagship-css">
  /* ==========================================================================
     GROW XL EN-MY FLAGSHIP ARCHITECTURAL STAGE STYLES (MS-109..MS-111)
     ========================================================================== */

  .growxl-breadcrumb-bar {
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

  .growxl-breadcrumb-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.65rem;
    list-style: none;
  }

  .growxl-breadcrumb-list a:hover {
    color: var(--gold-foil-bright);
  }

  .growxl-breadcrumb-current {
    color: var(--gold-champagne);
    font-weight: 600;
  }

  .growxl-seal-crest-banner {
    display: inline-flex;
    align-items: center;
    gap: 0.65rem;
    padding: 0.38rem 0.95rem;
    border-left: 2px solid var(--gold-champagne);
    background: linear-gradient(90deg, rgba(212, 175, 55, 0.2) 0%, rgba(11, 12, 16, 0.8) 100%);
    color: var(--text-silk-ivory);
    font-family: var(--font-technical);
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .growxl-seal-crest-dot {
    width: 8px;
    height: 8px;
    background-color: var(--gold-champagne);
    box-shadow: 0 0 10px var(--gold-champagne);
    display: inline-block;
  }

  /* MS-109: Paradigm A 100vw x 100vh Full-Bleed Obsidian Hero Stage */
  .growxl-hero-cinema {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    background-color: var(--bg-abyssal-obsidian);
    background-image:
      radial-gradient(circle at 68% 42%, rgba(212, 175, 55, 0.16) 0%, rgba(18, 20, 28, 0.82) 55%, #050507 100%),
      linear-gradient(180deg, #050507 0%, #0B0C10 62%, #050507 100%);
    padding: clamp(2.25rem, 5vh, 4.5rem) var(--gutter-cinema) var(--gutter-vertical);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: var(--hairline-rule);
    overflow: hidden;
  }

  .growxl-hero-cinema__ambient-watermark {
    position: absolute;
    top: 11%;
    right: -1.5vw;
    z-index: 1;
    font-family: var(--font-display);
    font-size: clamp(6rem, 15vw, 17.5rem);
    font-weight: 600;
    line-height: 0.85;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(212, 175, 55, 0.038);
    pointer-events: none;
    user-select: none;
    white-space: nowrap;
  }

  .growxl-hero-cinema__stage-layout {
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

  .growxl-hero-cinema__editorial-wing {
    flex: 1 1 560px;
    max-width: 790px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .growxl-hero-cinema__bottle-wing {
    flex: 1 1 440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: 620px;
  }

  .growxl-hero-cinema__halo {
    position: absolute;
    width: clamp(320px, 38vw, 560px);
    height: clamp(320px, 38vw, 560px);
    background: radial-gradient(
      circle,
      rgba(212, 175, 55, 0.24) 0%,
      rgba(18, 20, 28, 0.28) 42%,
      rgba(5, 5, 7, 0) 74%
    );
    pointer-events: none;
    z-index: 1;
  }

  .growxl-hero-cinema__bottle-picture {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 580px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .growxl-hero-cinema__bottle-img {
    width: 100%;
    max-height: 72vh;
    object-fit: contain;
    mask-image: radial-gradient(circle at 50% 50%, #000000 74%, transparent 99%);
    -webkit-mask-image: radial-gradient(circle at 50% 50%, #000000 74%, transparent 99%);
    filter: drop-shadow(0 36px 72px rgba(0, 0, 0, 0.95));
    transition: transform 640ms var(--ease-cinema);
  }

  .growxl-hero-cinema__bottle-wing:hover .growxl-hero-cinema__bottle-img {
    transform: translateY(-6px) scale(1.015);
  }

  .growxl-hero-cinema__caption-strip {
    position: relative;
    z-index: 3;
    width: 100%;
    max-width: 560px;
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

  .growxl-hero-cinema__subtitle-transcription {
    font-family: var(--font-architectural);
    font-size: clamp(1rem, 1.4vw, 1.32rem);
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--gold-foil-bright);
    padding-left: 1rem;
    border-left: 2px solid var(--gold-champagne);
    line-height: 1.4;
  }

  .growxl-hero-cinema__label-ledger {
    padding: 1.15rem 1.35rem;
    background: linear-gradient(90deg, rgba(18, 20, 28, 0.94) 0%, rgba(11, 12, 16, 0.7) 100%);
    border-left: 2px solid var(--gold-champagne);
    border-top: var(--hairline-subtle);
    border-bottom: var(--hairline-subtle);
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
  }

  .growxl-hero-cinema__label-title {
    font-family: var(--font-technical);
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }

  .growxl-hero-cinema__label-text {
    font-size: 0.91rem;
    color: var(--text-silk-ivory);
    line-height: 1.62;
  }

  /* Tier Selector Strip inside Hero */
  .tier-strip-group {
    display: flex;
    flex-direction: column;
    border-top: var(--hairline-rule);
    margin-top: 0.25rem;
  }

  .tier-strip-option {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.25rem;
    padding: 1rem 1.15rem;
    border-bottom: var(--hairline-subtle);
    text-align: left;
    width: 100%;
    transition: background 240ms ease, border-color 240ms ease;
  }

  .tier-strip-option:hover,
  .tier-strip-option--selected,
  .tier-strip-option[aria-checked="true"] {
    background: linear-gradient(90deg, rgba(212, 175, 55, 0.16) 0%, rgba(18, 20, 28, 0.4) 100%);
    border-bottom-color: var(--gold-champagne);
  }

  .tier-strip-option__left {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .tier-strip-option__eyebrow {
    font-family: var(--font-technical);
    font-size: 0.66rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }

  .tier-strip-option__title {
    font-family: var(--font-display);
    font-size: 1.28rem;
    font-weight: 500;
    color: var(--text-silk-ivory);
  }

  .tier-strip-option__subtitle {
    font-size: 0.78rem;
    color: var(--text-muted-alabaster);
  }

  .tier-strip-option__price {
    font-family: var(--font-display);
    font-size: 1.7rem;
    font-weight: 600;
    color: var(--gold-foil-bright);
    white-space: nowrap;
  }

  .growxl-hero-cinema__cta-cluster {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.1rem;
    padding-top: 0.4rem;
  }

  .growxl-hero-cinema__telemetry-ribbon {
    position: relative;
    z-index: 3;
    width: 100%;
    max-width: 1720px;
    margin: 2.85rem auto 0;
    padding-top: 1.7rem;
    border-top: var(--hairline-rule);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.65rem;
  }

  .growxl-telemetry-node {
    flex: 1 1 210px;
    display: flex;
    flex-direction: column;
    gap: 0.28rem;
    padding-left: 0.95rem;
    border-left: var(--hairline-subtle);
  }

  .growxl-telemetry-node__label {
    font-family: var(--font-technical);
    font-size: 0.68rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }

  .growxl-telemetry-node__value {
    font-family: var(--font-display);
    font-size: 1.35rem;
    color: var(--text-silk-ivory);
    line-height: 1.15;
  }

  .growxl-telemetry-node__sub {
    font-size: 0.78rem;
    color: var(--text-muted-alabaster);
  }

  /* MS-110: Paradigm D Pinned 50vw / 50vw Split-Screen Stage */
  .split-stage-5050 {
    position: relative;
    width: 100vw;
    display: flex;
    flex-wrap: wrap;
    background-color: var(--bg-smoked-onyx);
    border-bottom: var(--hairline-rule);
  }

  .split-stage-5050__visual-pane {
    flex: 1 1 50%;
    min-width: 340px;
    position: sticky;
    top: 4.5rem;
    height: calc(100vh - 4.5rem);
    padding: clamp(2rem, 4vw, 4rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--bg-abyssal-obsidian);
    background-image: radial-gradient(circle at 50% 45%, rgba(212, 175, 55, 0.14) 0%, rgba(5, 5, 7, 0.96) 72%);
    border-right: var(--hairline-rule);
    overflow: hidden;
  }

  .split-stage-5050__index-watermark {
    position: absolute;
    top: 1.75rem;
    left: 2rem;
    font-family: var(--font-display);
    font-size: clamp(3rem, 5vw, 5.5rem);
    font-weight: 600;
    letter-spacing: 0.1em;
    color: rgba(212, 175, 55, 0.08);
    pointer-events: none;
  }

  .split-stage-5050__visual-figure {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 460px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .split-stage-5050__visual-img {
    width: 100%;
    max-height: 54vh;
    object-fit: contain;
    mask-image: radial-gradient(circle at 50% 50%, #000000 76%, transparent 99%);
    -webkit-mask-image: radial-gradient(circle at 50% 50%, #000000 76%, transparent 99%);
  }

  .split-stage-5050__narrative-pane {
    flex: 1 1 50%;
    min-width: 340px;
    padding: var(--gutter-vertical) clamp(1.5rem, 4.2vw, 5rem);
    background-color: var(--bg-smoked-onyx);
  }

  .growxl-monograph-entry {
    padding: 2.35rem 0;
    border-bottom: var(--hairline-rule);
    display: flex;
    flex-direction: column;
    gap: 1.05rem;
  }

  .growxl-monograph-entry:first-of-type {
    border-top: var(--hairline-rule);
  }

  .growxl-monograph-entry__header {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
  }

  .growxl-monograph-entry__index-group {
    display: inline-flex;
    align-items: baseline;
    gap: 0.85rem;
  }

  .growxl-monograph-entry__index {
    font-family: var(--font-technical);
    font-size: 0.75rem;
    letter-spacing: 0.24em;
    color: var(--gold-champagne);
  }

  .growxl-monograph-entry__title {
    font-family: var(--font-display);
    font-size: clamp(1.65rem, 2.4vw, 2.25rem);
    font-weight: 500;
    color: var(--text-silk-ivory);
  }

  .growxl-monograph-entry__dosage-stamp {
    font-family: var(--font-display);
    font-size: 1.75rem;
    color: var(--gold-foil-bright);
    letter-spacing: 0.02em;
  }

  .growxl-monograph-entry__scientific {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.08rem;
    color: var(--gold-champagne);
  }

  .growxl-monograph-entry__specs-ledger {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    padding: 0.95rem 0;
    border-top: var(--hairline-subtle);
    border-bottom: var(--hairline-subtle);
    font-size: 0.84rem;
  }

  .growxl-monograph-entry__spec-line {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.75rem;
  }

  .growxl-monograph-entry__spec-key {
    font-family: var(--font-technical);
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--text-ash-silver);
  }

  .growxl-monograph-entry__spec-val {
    color: var(--text-silk-ivory);
    text-align: right;
  }

  .growxl-monograph-entry__body {
    font-size: 0.96rem;
    color: var(--text-muted-alabaster);
    line-height: 1.7;
  }

  .growxl-monograph-entry__footnote {
    font-size: 0.82rem;
    color: var(--gold-foil-bright);
    padding-left: 0.85rem;
    border-left: 1px solid var(--gold-champagne);
  }

  /* Architectural Hairline Ledgers & Stages */
  .growxl-stage-section {
    background-color: var(--bg-abyssal-obsidian);
    padding: var(--gutter-vertical) var(--gutter-cinema);
    border-bottom: var(--hairline-rule);
  }

  .growxl-stage-section--onyx {
    background-color: var(--bg-smoked-onyx);
  }

  .growxl-stage-section--charcoal {
    background-color: var(--bg-velvet-charcoal);
    background-image: radial-gradient(circle at 22% 30%, rgba(212, 175, 55, 0.1) 0%, rgba(5, 5, 7, 0.95) 72%);
  }

  .growxl-stage-container {
    width: 100%;
    max-width: 1680px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .growxl-stage-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: var(--hairline-rule);
  }

  .growxl-stage-header__left {
    flex: 1 1 560px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .growxl-stage-header__right {
    flex: 1 1 420px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .architectural-ledger {
    display: flex;
    flex-direction: column;
    border-top: var(--hairline-rule);
  }

  .architectural-ledger__row {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 1.5rem 0.75rem;
    border-bottom: var(--hairline-subtle);
  }

  .architectural-ledger__index {
    flex: 0 0 130px;
    font-family: var(--font-technical);
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }

  .architectural-ledger__title {
    flex: 1 1 260px;
    font-family: var(--font-display);
    font-size: 1.38rem;
    color: var(--text-silk-ivory);
    font-weight: 500;
  }

  .architectural-ledger__detail {
    flex: 2 1 440px;
    font-size: 0.92rem;
    color: var(--text-muted-alabaster);
    line-height: 1.68;
  }

  .architectural-ledger__metric {
    flex: 0 0 175px;
    text-align: right;
    font-family: var(--font-technical);
    font-size: 0.74rem;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: var(--gold-foil-bright);
  }

  /* Day-25 Refill Concierge Band */
  .growxl-refill-concierge-band {
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

  .growxl-refill-concierge-band__copy {
    flex: 1 1 540px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .growxl-refill-concierge-band__actions {
    flex: 1 1 380px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  /* Matrix Tables (Comparison, 30-Day Telemetry & 16-State Delivery) */
  .growxl-matrix-scroll {
    width: 100%;
    overflow-x: auto;
    border-top: var(--hairline-rule);
    border-bottom: var(--hairline-rule);
  }

  .growxl-matrix-table {
    width: 100%;
    min-width: 980px;
    border-collapse: collapse;
    text-align: left;
    font-size: 0.9rem;
  }

  .growxl-matrix-table th,
  .growxl-matrix-table td {
    padding: 1.25rem 1.1rem;
    border-bottom: var(--hairline-subtle);
    vertical-align: top;
  }

  .growxl-matrix-table thead th {
    font-family: var(--font-technical);
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-champagne);
    border-bottom: var(--hairline-rule);
    background-color: rgba(5, 5, 7, 0.72);
  }

  .growxl-matrix-table__highlight-col {
    background: linear-gradient(180deg, rgba(212, 175, 55, 0.12) 0%, rgba(18, 20, 28, 0.55) 100%);
    border-left: var(--hairline-rule);
    border-right: var(--hairline-rule);
  }

  /* MS-111: 10-Question Interactive FAQ Accordion Stage */
  .growxl-faq-ledger {
    width: 100%;
    border-top: var(--hairline-rule);
  }

  .growxl-faq-item {
    border-bottom: var(--hairline-subtle);
    transition: background-color 220ms ease;
  }

  .growxl-faq-item[open] {
    background-color: rgba(212, 175, 55, 0.045);
    border-bottom-color: var(--gold-champagne);
  }

  .growxl-faq-summary {
    list-style: none;
    cursor: pointer;
    padding: 1.65rem 0.5rem;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .growxl-faq-summary::-webkit-details-marker {
    display: none;
  }

  .growxl-faq-summary__left {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 1.15rem;
  }

  .growxl-faq-summary__index {
    font-family: var(--font-technical);
    font-size: 0.74rem;
    letter-spacing: 0.22em;
    color: var(--gold-champagne);
    min-width: 3.2rem;
  }

  .growxl-faq-summary__category {
    font-family: var(--font-technical);
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-foil-bright);
  }

  .growxl-faq-summary__question {
    font-family: var(--font-display);
    font-size: clamp(1.35rem, 2vw, 1.8rem);
    color: var(--text-silk-ivory);
    font-weight: 500;
  }

  .growxl-faq-summary__icon {
    font-family: var(--font-technical);
    font-size: 1.25rem;
    color: var(--gold-foil-bright);
    transition: transform 260ms var(--ease-cinema);
  }

  .growxl-faq-item[open] .growxl-faq-summary__icon {
    transform: rotate(45deg);
  }

  .growxl-faq-answer {
    padding: 0 0.5rem 1.85rem 4.35rem;
    max-width: 105ch;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: var(--text-muted-alabaster);
    font-size: 0.98rem;
    line-height: 1.72;
  }

  @media (max-width: 1024px) {
    .split-stage-5050__visual-pane {
      position: relative;
      top: 0;
      height: auto;
      min-height: 520px;
      border-right: none;
      border-bottom: var(--hairline-rule);
    }
  }

  @media (max-width: 768px) {
    .growxl-faq-answer {
      padding-left: 0.5rem;
    }
    .growxl-hero-cinema__bottle-wing {
      min-height: 420px;
    }
    .architectural-ledger__metric {
      text-align: left;
    }
  }
</style>
`;

/**
 * Renders Chapter 1 (MS-109): 100vw x 100vh Full-Bleed Obsidian Hero Stage for Grow XL (30 Capsules — Extra-Strength Blend).
 * Features:
 * - /assets/products/grow-xl-stage.webp
 * - Physical label verification (#1 Selling Product · Made With Natural Ingredient · Extra-Strength Enhancement · Male Performance Blend · Dietary Supplement 30 Capsules)
 * - Interactive 1/2/3-bottle tier selector (RM 159 / RM 318 / RM 477)
 * - 1-Click Express Order Drawer triggers (data-order-product="grow-xl")
 */
export function renderMs109HeroStage() {
  return `
      <!-- =====================================================================
           CHAPTER 1 (MS-109): 100VW X 100VH FULL-BLEED OBSIDIAN HERO STAGE
           Product: Grow XL (#1 Selling Product — Made With Natural Ingredient — Extra-Strength Enhancement Male Performance Blend — 30 Capsules)
           SKU: ONYX-GX-30 | MPN: GXL-30CAP-MY | GTIN-13: 9550000102035
           ===================================================================== -->
      <section
        id="ms109-growxl-hero-stage"
        class="growxl-hero-cinema"
        aria-labelledby="ms109-hero-title"
        data-paradigm="A-100vw-100vh-obsidian-stage"
      >
        <div class="growxl-hero-cinema__ambient-watermark" aria-hidden="true">
          GROW XL · 30 CAPS
        </div>

        <!-- Architectural Breadcrumb & Gold Seal Certification Bar -->
        <div class="growxl-breadcrumb-bar">
          <nav aria-label="Breadcrumb">
            <ol class="growxl-breadcrumb-list">
              <li><a href="/">ONYXMAN MALAYSIA</a></li>
              <li aria-hidden="true">/</li>
              <li><a href="/products/">APOTHECARY VAULT</a></li>
              <li aria-hidden="true">/</li>
              <li class="growxl-breadcrumb-current" aria-current="page">
                GROW XL (30 CAPSULES · SKU ONYX-GX-30)
              </li>
            </ol>
          </nav>

          <div class="growxl-seal-crest-banner">
            <span class="growxl-seal-crest-dot" aria-hidden="true"></span>
            <span>#1 SELLING PRODUCT · MADE WITH NATURAL INGREDIENT · 30 CAPSULES × 550MG</span>
          </div>
        </div>

        <!-- Primary 100vw x 100vh Hero Stage Split -->
        <div class="growxl-hero-cinema__stage-layout">
          <!-- Left Editorial & Conversion Wing -->
          <div class="growxl-hero-cinema__editorial-wing">
            <span class="editorial-kicker">
              FORMULATION III · 30 CAPSULES · EXTRA-STRENGTH 30-DAY BOTANICAL BLEND
            </span>

            <h1 id="ms109-hero-title" class="editorial-headline-xl">
              <span class="foil-champagne-text">Grow XL</span> — 30-Day Extra-Strength Male Performance &amp; Micro-Circulation Protocol
            </h1>

            <p class="growxl-hero-cinema__subtitle-transcription">
              Official Bottle Label Verification: &ldquo;#1 Selling Product &middot; Made With Natural Ingredient &middot; Extra-Strength Enhancement &middot; Male Performance Blend &middot; Dietary Supplement 30 Capsules&rdquo;
            </p>

            <p id="ms109-hero-summary" class="editorial-lead-paragraph">
              Engineered for adult men in Malaysia who prefer a structured <strong>1-capsule-a-day 30-day full-month botanical regimen</strong> (550mg per capsule = <strong>16,500mg total bottle potency</strong>). Uniting <strong>Extra-Strength Malaysian Tongkat Ali (140mg)</strong>, <strong>Peruvian Maca Root (110mg)</strong>, <strong>L-Arginine &amp; L-Citrulline Matrix (100mg)</strong>, <strong>Brazilian Muira Puama (80mg)</strong>, <strong>Saw Palmetto Berry Extract (70mg)</strong>, and <strong>Panax Ginseng &amp; Ginkgo Biloba (50mg)</strong>.
            </p>

            <!-- Physical Label & Studio Vessel Verification Callout -->
            <div class="growxl-hero-cinema__label-ledger">
              <span class="growxl-hero-cinema__label-title">
                PHYSICAL BOTTLE LABEL &amp; STUDIO VESSEL VERIFICATION (SKU: ONYX-GX-30 · MPN: GXL-30CAP-MY)
              </span>
              <p class="growxl-hero-cinema__label-text">
                Supplied in our 100% watermark-free, studio-verified gloss obsidian vessel bearing the metallic gold <strong>&ldquo;#1 Selling Product — Made With Natural Ingredient&rdquo;</strong> crest, dimensional blue-silver <strong>&ldquo;XL&rdquo;</strong> emblem, crimson <strong>&ldquo;Extra-Strength Enhancement — Male Performance Blend&rdquo;</strong> banner, and tamper-evident <strong>30 Capsules</strong> security seal.
              </p>
            </div>

            <!-- Interactive 1 / 2 / 3 Bottle Tier Selector Strip (RM 159 / RM 318 / RM 477) -->
            <div
              class="tier-strip-group"
              role="radiogroup"
              aria-label="Select Grow XL Multi-Bottle Protocol Tier"
              data-hero-tier-selector="grow-xl"
            >
              <!-- Tier 1: 1 Bottle = RM 159 -->
              <button
                type="button"
                role="radio"
                aria-checked="false"
                class="tier-strip-option"
                data-open-order-drawer="true"
                data-order-product="grow-xl"
                data-order-qty="1"
              >
                <div class="tier-strip-option__left">
                  <span class="tier-strip-option__eyebrow">
                    TIER 01 · 30-DAY DAILY PROTOCOL · SKU ONYX-GX-30-1B
                  </span>
                  <strong class="tier-strip-option__title">
                    1 Bottle — Full 30-Day Daily Performance Cycle (30 Capsules × 550mg)
                  </strong>
                  <span class="tier-strip-option__subtitle">
                    Free Discreet Express Shipping across Peninsular Malaysia (RM 12 East Malaysia) · Day-25 Refill Reminder
                  </span>
                </div>
                <span class="tier-strip-option__price">RM 159</span>
              </button>

              <!-- Tier 2: 2 Bottles = RM 318 (Default Highlighted Bestseller Protocol) -->
              <button
                type="button"
                role="radio"
                aria-checked="true"
                class="tier-strip-option tier-strip-option--selected"
                data-open-order-drawer="true"
                data-order-product="grow-xl"
                data-order-qty="2"
              >
                <div class="tier-strip-option__left">
                  <span class="tier-strip-option__eyebrow">
                    TIER 02 · #1 BESTSELLER 60-DAY PACK · SKU ONYX-GX-30-2B
                  </span>
                  <strong class="tier-strip-option__title">
                    2 Bottles — 60-Day Progressive Conditioning Reserve (60 Capsules · 33,000mg)
                  </strong>
                  <span class="tier-strip-option__subtitle">
                    100% Free Nationwide Discreet Express Shipping (Including Sabah, Sarawak &amp; Labuan) · Day-50 Refill Alert
                  </span>
                </div>
                <span class="tier-strip-option__price">RM 318</span>
              </button>

              <!-- Tier 3: 3 Bottles = RM 477 -->
              <button
                type="button"
                role="radio"
                aria-checked="false"
                class="tier-strip-option"
                data-open-order-drawer="true"
                data-order-product="grow-xl"
                data-order-qty="3"
              >
                <div class="tier-strip-option__left">
                  <span class="tier-strip-option__eyebrow">
                    TIER 03 · FULL 90-DAY TRANSFORMATION VAULT · SKU ONYX-GX-30-3B
                  </span>
                  <strong class="tier-strip-option__title">
                    3 Bottles — Complete 90-Day Extra-Strength Mastery Vault (90 Capsules · 49,500mg)
                  </strong>
                  <span class="tier-strip-option__subtitle">
                    Priority Discreet Dispatch + Free Nationwide Shipping + VIP Day-75 Refill Concierge
                  </span>
                </div>
                <span class="tier-strip-option__price">RM 477</span>
              </button>
            </div>

            <!-- Primary 1-Click Express Order Drawer Trigger & Section Anchors -->
            <div class="growxl-hero-cinema__cta-cluster">
              <button
                type="button"
                class="cta-foil-primary"
                data-open-order-drawer="true"
                data-order-product="grow-xl"
                data-order-qty="2"
                aria-controls="onyxman-express-order-drawer"
              >
                <span>ACQUIRE GROW XL (30 CAPSULES) · RM 159 / BOTTLE</span>
                <span aria-hidden="true">&rarr;</span>
              </button>

              <a href="#ms110-botanical-breakdown" class="cta-hairline-secondary">
                <span>INSPECT 550MG 6-ACTIVES MONOGRAPH</span>
                <span aria-hidden="true">&darr;</span>
              </a>

              <a href="#ms110-day25-refill-protocol" class="cta-hairline-secondary">
                <span>DAY-25 REFILL CALENDAR</span>
              </a>
            </div>
          </div>

          <!-- Right Studio Bottle Stage (/assets/products/grow-xl-stage.webp) -->
          <div class="growxl-hero-cinema__bottle-wing">
            <div class="growxl-hero-cinema__halo" aria-hidden="true"></div>

            <picture class="growxl-hero-cinema__bottle-picture">
              <source
                srcset="/assets/products/grow-xl-stage.webp"
                type="image/webp"
              />
              <img
                src="/assets/products/grow-xl-stage.png"
                alt="Grow XL #1 Selling Product Extra-Strength Enhancement Male Performance Blend — 30 Capsules Official Onyxman Malaysia Bottle (SKU ONYX-GX-30, RM 159)"
                width="900"
                height="1125"
                fetchpriority="high"
                decoding="async"
                class="growxl-hero-cinema__bottle-img"
              />
            </picture>

            <div class="growxl-hero-cinema__caption-strip">
              <span>CREST: GOLD &ldquo;#1 SELLING PRODUCT&rdquo; SEAL</span>
              <span>EMBLEM: METALLIC BLUE-SILVER &ldquo;XL&rdquo;</span>
              <span>COUNT: 30 CAPSULES × 550MG</span>
            </div>
          </div>
        </div>

        <!-- Bottom Architectural Telemetry Ribbon (Authentic Constants Verification) -->
        <div class="growxl-hero-cinema__telemetry-ribbon" role="region" aria-label="Grow XL Official Product Specifications">
          <div class="growxl-telemetry-node">
            <span class="growxl-telemetry-node__label">REGISTRY IDENTIFIERS</span>
            <strong class="growxl-telemetry-node__value">SKU: ONYX-GX-30</strong>
            <span class="growxl-telemetry-node__sub">MPN: GXL-30CAP-MY · GTIN-13: 9550000102035</span>
          </div>

          <div class="growxl-telemetry-node">
            <span class="growxl-telemetry-node__label">CAPSULE POTENCY &amp; MASS</span>
            <strong class="growxl-telemetry-node__value">30 Capsules × 550mg</strong>
            <span class="growxl-telemetry-node__sub">16,500mg (16.5g) Total Active Potency / Bottle</span>
          </div>

          <div class="growxl-telemetry-node">
            <span class="growxl-telemetry-node__label">6 NATURAL ACTIVES</span>
            <strong class="growxl-telemetry-node__value">Tongkat Ali 140mg + Maca 110mg</strong>
            <span class="growxl-telemetry-node__sub">+ Amino 100mg · Muira Puama 80mg · Saw Palmetto 70mg · Ginseng/Ginkgo 50mg</span>
          </div>

          <div class="growxl-telemetry-node">
            <span class="growxl-telemetry-node__label">REFILL CONTINUITY ENGINE</span>
            <strong class="growxl-telemetry-node__value">Day-25 Refill Reminder</strong>
            <span class="growxl-telemetry-node__sub">30-Day Sustained Performance Cycle (5-Day Buffer)</span>
          </div>

          <div class="growxl-telemetry-node">
            <span class="growxl-telemetry-node__label">DISCREET MALAYSIA DESK</span>
            <strong class="growxl-telemetry-node__value">OM Fulfilment Logistics</strong>
            <span class="growxl-telemetry-node__sub">sales@onyxman.my · info@onyxman.my · waleedshoaibofficial@gmail.com</span>
          </div>
        </div>
      </section>
  `;
}

/**
 * Renders Chapter 2 (MS-110):
 * - Paradigm D Pinned 50vw / 50vw Extra-Strength 6-Actives Botanical Breakdown
 *   (550mg per capsule = 16,500mg per 30-capsule bottle:
 *    Extra-Strength Tongkat Ali 140mg, Peruvian Maca Root 110mg, L-Arginine & L-Citrulline Matrix 100mg,
 *    Brazilian Muira Puama 80mg, Saw Palmetto Berry Extract 70mg, Panax Ginseng & Ginkgo Biloba 50mg)
 * - 30-Day Progressive Vitality Chronology (Weeks 1–4 + Day-1 to Day-30 Telemetry + Day-25 Refill Trigger)
 */
export function renderMs110BotanicalAndChronologyStage() {
  const activesHtml = GROWXL_6_BOTANICAL_ACTIVES.map(
    (act) => `
            <!-- Botanical Active ${act.index}: ${act.name} (${act.dosageMg}mg) -->
            <article
              id="botanical-active-${act.code.toLowerCase()}"
              class="growxl-monograph-entry"
              data-botanical-code="${act.code}"
            >
              <div class="growxl-monograph-entry__header">
                <div class="growxl-monograph-entry__index-group">
                  <span class="growxl-monograph-entry__index">[${act.index} · ${act.code}]</span>
                  <h3 class="growxl-monograph-entry__title">${act.name}</h3>
                </div>
                <strong class="growxl-monograph-entry__dosage-stamp">
                  ${act.dosageMg} mg <span style="font-size:0.85rem;color:var(--text-ash-silver);">(${act.percentageOfCapsule} · ${act.monthlyTotalMg})</span>
                </strong>
              </div>

              <p class="growxl-monograph-entry__scientific">
                ${act.scientificName}
              </p>

              <div class="growxl-monograph-entry__specs-ledger">
                <div class="growxl-monograph-entry__spec-line">
                  <span class="growxl-monograph-entry__spec-key">STANDARDIZATION ASSAY</span>
                  <span class="growxl-monograph-entry__spec-val">${act.standardization}</span>
                </div>
                <div class="growxl-monograph-entry__spec-line">
                  <span class="growxl-monograph-entry__spec-key">BOTANICAL ORIGIN &amp; GRADE</span>
                  <span class="growxl-monograph-entry__spec-val">${act.extractionOrigin}</span>
                </div>
                <div class="growxl-monograph-entry__spec-line">
                  <span class="growxl-monograph-entry__spec-key">PHYSIOLOGICAL PATHWAY</span>
                  <span class="growxl-monograph-entry__spec-val">${act.physiologicalPathway}</span>
                </div>
              </div>

              <p class="growxl-monograph-entry__body">
                ${act.clinicalNarrative}
              </p>

              <p class="growxl-monograph-entry__footnote">
                <strong>30-Day Micro-Circulation Synergy:</strong> ${act.microCirculationSynergy}
                <a href="${act.monographHref}" style="color:var(--gold-foil-bright);text-decoration:underline;margin-left:0.5rem;">
                  Inspect Clinical Monograph &rarr;
                </a>
              </p>
            </article>`
  ).join('\n');

  const dailyTelemetryRowsHtml = GROWXL_30_DAY_DAILY_CHRONOLOGY.map((row, idx) => {
    const isRefillDay = idx === 24;
    const isMilestoneWeek = idx === 6 || idx === 13 || idx === 20 || idx === 29;
    const rowHighlight =
      isRefillDay || isMilestoneWeek ? ' class="growxl-matrix-table__highlight-col"' : '';
    return `
                <tr${rowHighlight}>
                  <td><strong>${row.day}</strong></td>
                  <td>${row.week}</td>
                  <td>${row.capsule}</td>
                  <td><strong>${row.cumulativeMg}</strong></td>
                  <td>${row.remaining}</td>
                  <td>${row.milestone}</td>
                  <td>${row.protocolNote}</td>
                </tr>`;
  }).join('\n');

  return `
      <!-- =====================================================================
           CHAPTER 2 (MS-110): PARADIGM D PINNED 50VW / 50VW EXTRA-STRENGTH
           6-ACTIVES BOTANICAL BREAKDOWN (550MG = 16,500MG PER 30-CAPSULE BOTTLE)
           + 30-DAY PROGRESSIVE VITALITY CHRONOLOGY (WEEKS 1–4 + DAY-25 REFILL)
           ===================================================================== -->
      <section
        id="ms110-botanical-breakdown"
        class="split-stage-5050"
        aria-labelledby="ms110-botanical-heading"
        data-paradigm="D-50vw-50vw-pinned-split-stage"
      >
        <!-- Left 50vw Sticky Visual Stage (/assets/products/grow-xl-portrait.webp) -->
        <div class="split-stage-5050__visual-pane">
          <span class="split-stage-5050__index-watermark" aria-hidden="true">
            550 MG · 30X
          </span>

          <figure class="split-stage-5050__visual-figure">
            <picture>
              <source
                srcset="/assets/products/grow-xl-portrait.webp"
                type="image/webp"
              />
              <img
                src="/assets/products/grow-xl-portrait.png"
                alt="Grow XL 30 Capsules Upright Studio Portrait — 550mg Extra-Strength 6-Actives Botanical Matrix (SKU ONYX-GX-30)"
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
              <span>SINGLE CAPSULE MASS: 550 MG</span>
              <span>30-CAPSULE BOTTLE POTENCY: 16,500 MG</span>
            </div>
            <p style="font-size:0.82rem;color:var(--text-muted-alabaster);line-height:1.55;">
              Every Grow XL vessel supplies a full 30-day calendar cycle (1 capsule daily after breakfast) combining 6 natural botanical and amino-acid actives with zero undeclared synthetic adulterants.
            </p>
            <div style="display:flex;justify-content:space-between;align-items:center;padding-top:0.5rem;gap:0.75rem;">
              <button
                type="button"
                class="cta-hairline-secondary"
                data-open-order-drawer="true"
                data-order-product="grow-xl"
                data-order-qty="1"
                style="padding:0.65rem 1.2rem;font-size:0.7rem;"
              >
                <span>RESERVE 1 BOTTLE · RM 159</span>
              </button>
              <button
                type="button"
                class="cta-foil-primary"
                data-open-order-drawer="true"
                data-order-product="grow-xl"
                data-order-qty="2"
                style="padding:0.65rem 1.25rem;font-size:0.7rem;"
              >
                <span>2 BOTTLES (60 CAPS) · RM 318</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Right 50vw Scrolling Narrative Monograph Pane -->
        <div class="split-stage-5050__narrative-pane">
          <span class="editorial-kicker">
            CHAPTER II (MS-110) · PARADIGM D BOTANICAL MONOGRAPH · 100% QUANTITATIVE DISCLOSURE
          </span>

          <h2 id="ms110-botanical-heading" class="editorial-headline-lg" style="margin-top:0.85rem;">
            Extra-Strength <span class="foil-champagne-text">6-Actives Botanical Breakdown</span> (550mg / Capsule = 16,500mg / Bottle)
          </h2>

          <p id="ms110-botanical-lead" class="editorial-lead-paragraph" style="margin:1.15rem 0 2rem;">
            Grow XL rejects opaque &ldquo;proprietary blends&rdquo; in favor of 100% transparent milligram accounting. Each <strong>550mg extra-strength capsule</strong> unites six standardized natural actives engineered to compound progressively across a <strong>30-day (16,500mg)</strong>, <strong>60-day (33,000mg)</strong>, or <strong>90-day (49,500mg)</strong> cycle:
          </p>

          <!-- All 6 Botanical Monograph Entries -->
          <div class="growxl-monograph-collection">
            ${activesHtml}
          </div>

          <!-- Cumulative 550mg Verification Ledger Bar -->
          <div style="margin-top:2.25rem;padding:1.5rem;background-color:#050507;border-left:2px solid var(--gold-champagne);display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:1.25rem;">
            <div>
              <span style="font-size:0.68rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold-champagne);display:block;">
                EXACT 550MG CAPSULE &amp; 16,500MG BOTTLE VERIFICATION (SKU: ONYX-GX-30)
              </span>
              <strong style="font-family:var(--font-display);font-size:1.4rem;color:var(--text-silk-ivory);">
                140mg + 110mg + 100mg + 80mg + 70mg + 50mg = 550mg × 30 Capsules = 16,500mg
              </strong>
            </div>
            <button
              type="button"
              class="cta-foil-primary"
              data-open-order-drawer="true"
              data-order-product="grow-xl"
              data-order-qty="2"
            >
              <span>ORDER 60-CAPSULE RESERVE · RM 318</span>
            </button>
          </div>
        </div>
      </section>

      <!-- =====================================================================
           MS-110 PART B: STUDIO CUTOUT VESSEL & DUAL DAILY INTAKE PROTOCOLS
           ===================================================================== -->
      <section
        id="ms110-daily-intake-science"
        class="growxl-stage-section growxl-stage-section--charcoal"
        aria-labelledby="ms110-intake-heading"
      >
        <div class="growxl-stage-container">
          <div class="growxl-stage-header">
            <div class="growxl-stage-header__left">
              <span class="editorial-kicker">
                30-DAY BIO-AVAILABILITY ENGINEERING · MORNING VS EVENING ADMINISTRATION
              </span>
              <h2 id="ms110-intake-heading" class="editorial-headline-lg">
                How to Take <span class="foil-champagne-text">Grow XL (30 Capsules)</span> in Malaysia&rsquo;s Tropical Climate
              </h2>
            </div>
            <div class="growxl-stage-header__right">
              <p style="color:var(--text-muted-alabaster);font-size:0.96rem;line-height:1.68;">
                Unlike 20-capsule evening-focused formulas, Grow XL is calibrated around a steady <strong>1-capsule-per-day 24-hour plasma curve</strong>. Review our studio bottle cutout and dual intake protocols below.
              </p>
            </div>
          </div>

          <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:3rem;">
            <!-- Studio Bottle Cutout (/assets/products/grow-xl-cutout.webp) -->
            <div style="flex:1 1 320px;max-width:420px;display:flex;flex-direction:column;align-items:center;gap:1rem;padding:1.5rem;border-top:var(--hairline-rule);border-bottom:var(--hairline-rule);">
              <picture>
                <source srcset="/assets/products/grow-xl-cutout.webp" type="image/webp" />
                <img
                  src="/assets/products/grow-xl-cutout.png"
                  alt="Grow XL Studio Bottle Cutout Showing Gold #1 Selling Product Crest and 30 Capsules Extra-Strength Label"
                  width="600"
                  height="750"
                  loading="lazy"
                  decoding="async"
                  style="max-height:380px;width:auto;object-fit:contain;mask-image:radial-gradient(circle at 50% 50%, #000 76%, transparent 99%);-webkit-mask-image:radial-gradient(circle at 50% 50%, #000 76%, transparent 99%);"
                />
              </picture>
              <span style="font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold-champagne);text-align:center;">
                100% WATERMARK-FREE STUDIO BOTTLE · SKU ONYX-GX-30 · MPN GXL-30CAP-MY
              </span>
            </div>

            <!-- Dual Intake Protocols & Tropical Storage Ledger -->
            <div style="flex:2 1 640px;">
              <div class="architectural-ledger" role="region" aria-label="Grow XL Daily Administration Protocols">
                <div class="architectural-ledger__row">
                  <span class="architectural-ledger__index">PROTOCOL A</span>
                  <strong class="architectural-ledger__title">
                    30-Day Morning Baseline Routine (Recommended Primary Protocol)
                  </strong>
                  <p class="architectural-ledger__detail">
                    Take <strong>1 capsule (550mg) every morning 20–30 minutes after breakfast</strong> with a full glass (250ml–300ml) of water. Taking Grow XL at the same time each morning establishes steady 24-hour plasma levels of Extra-Strength Tongkat Ali (140mg), Peruvian Maca (110mg), and L-Citrulline/L-Arginine (100mg), supporting daytime energy stability and spontaneous evening readiness.
                  </p>
                  <span class="architectural-ledger__metric">1 CAP POST-BREAKFAST</span>
                </div>

                <div class="architectural-ledger__row">
                  <span class="architectural-ledger__index">PROTOCOL B</span>
                  <strong class="architectural-ledger__title">
                    Post-Dinner Conditioning Routine (Intermittent Fasting / Ramadan Option)
                  </strong>
                  <p class="architectural-ledger__detail">
                    If you practice morning intermittent fasting, skip breakfast, or observe Ramadan fasting hours in Malaysia, take <strong>1 capsule 30 minutes after your evening meal (dinner / iftar)</strong> with 300ml of warm water. Because Grow XL is 100% caffeine-free, evening administration will not disrupt restorative sleep.
                  </p>
                  <span class="architectural-ledger__metric">1 CAP POST-DINNER</span>
                </div>

                <div class="architectural-ledger__row">
                  <span class="architectural-ledger__index">ABSORPTION RULE</span>
                  <strong class="architectural-ledger__title">
                    Dietary Fat Cofactor &amp; Coffee/Tea Tannin Spacing
                  </strong>
                  <p class="architectural-ledger__detail">
                    Lipid-soluble phytosterols in <strong>Saw Palmetto (45% fatty acids)</strong> and <strong>Brazilian Muira Puama</strong> absorb best when taken 20–30 minutes after a meal containing healthy fats (such as eggs, avocado, or traditional Malaysian breakfast). Space your capsule at least <strong>45 minutes apart from dark coffee (kopi O) or black tea (teh tarik)</strong> so dietary tannins do not bind to Tongkat Ali quassinoids.
                  </p>
                  <span class="architectural-ledger__metric">45-MIN TANNIN GAP</span>
                </div>

                <div class="architectural-ledger__row">
                  <span class="architectural-ledger__index">TROPICAL STORAGE</span>
                  <strong class="architectural-ledger__title">
                    Equatorial Climate Preservation (&lt; 30&deg;C Dry Cabinet Protocol)
                  </strong>
                  <p class="architectural-ledger__detail">
                    Store your Grow XL obsidian bottle below 30&deg;C in a shaded bedroom wardrobe or air-conditioned office drawer away from direct sunlight and bathroom humidity. Keep the cap tightly sealed and leave the internal silica desiccant sachet inside the bottle throughout your 30-day cycle.
                  </p>
                  <span class="architectural-ledger__metric">STORE BELOW 30&deg;C</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- =====================================================================
           MS-110 PART C: 30-DAY PROGRESSIVE VITALITY CHRONOLOGY (WEEKS 1–4
           ARCHITECTURAL LEDGER + DAY-1 TO DAY-30 TELEMETRY + DAY-25 REFILL)
           ===================================================================== -->
      <section
        id="ms110-30day-progressive-chronology"
        class="growxl-stage-section"
        aria-labelledby="ms110-chronology-heading"
      >
        <div class="growxl-stage-container">
          <div class="growxl-stage-header">
            <div class="growxl-stage-header__left">
              <span class="editorial-kicker">
                CHAPTER II PART C · 30-DAY PROGRESSIVE VITALITY CHRONOLOGY (WEEKS 1–4)
              </span>
              <h2 id="ms110-chronology-heading" class="editorial-headline-lg">
                Weeks 1 to 4: The <span class="foil-champagne-text">30-Day Progressive Conditioning</span> &amp; Day-25 Refill Timeline
              </h2>
            </div>
            <div class="growxl-stage-header__right">
              <p style="color:var(--text-muted-alabaster);font-size:0.96rem;line-height:1.68;">
                Every 30-capsule bottle of Grow XL delivers <strong>16,500mg of standardized botanical and amino-acid actives</strong> across four structured weekly phases—culminating in the automated <strong>Day-25 Refill Trigger</strong> so Month 2 and Month 3 continue without a single missed morning.
              </p>
            </div>
          </div>

          <!-- Weeks 1 to 4 + Day-25 Refill Trigger + 60/90-Day Mastery Architectural Ledger -->
          <div class="architectural-ledger" role="region" aria-label="Grow XL Weeks 1 to 4 Progressive Vitality Chronology">
            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">WEEK 01 · DAYS 01–07</span>
              <strong class="architectural-ledger__title">
                Week 1: Micro-Circulation Awakening &amp; Morning Energy Stability (3,850mg Delivered)
              </strong>
              <p class="architectural-ledger__detail">
                During your first 7 mornings (Capsules #01 to #07), the <strong>100mg Dual L-Arginine HCl &amp; L-Citrulline Malate Matrix</strong> and <strong>50mg Panax Ginseng &amp; Ginkgo Biloba Complex</strong> initiate smoother peripheral micro-circulation and capillary nutrient perfusion. Users across Kuala Lumpur, Selangor, and Penang typically note steadier daytime alertness and elimination of the 3:00 PM post-lunch energy crash.
              </p>
              <span class="architectural-ledger__metric">CAPSULES 01–07</span>
            </div>

            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">WEEK 02 · DAYS 08–14</span>
              <strong class="architectural-ledger__title">
                Week 2: Adaptogenic Reserve Compounding — Tongkat Ali &amp; Peruvian Maca (7,700mg Cumulative)
              </strong>
              <p class="architectural-ledger__detail">
                By Day 14 (Capsules #08 to #14), your body has absorbed <strong>1,960mg of 100:1 Extra-Strength Malaysian Tongkat Ali</strong> and <strong>1,540mg of 10:1 Peruvian Maca Root</strong>. Adaptogenic quassinoids and Andean macamides moderate stress-induced cortisol while reinforcing physical stamina, gym resistance endurance, and consistent evening drive.
              </p>
              <span class="architectural-ledger__metric">CAPSULES 08–14</span>
            </div>

            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">WEEK 03 · DAYS 15–21</span>
              <strong class="architectural-ledger__title">
                Week 3: Brazilian Muira Puama &amp; Saw Palmetto Phytosterol Synergy (11,550mg Cumulative)
              </strong>
              <p class="architectural-ledger__detail">
                Crossing the halfway mark on Day 15 and reaching Day 21 (Capsules #15 to #21), lipid-soluble sterols from <strong>80mg Brazilian Muira Puama ("Potency Wood")</strong> and <strong>70mg Saw Palmetto Berry Extract (45% free fatty acids)</strong> reach deep cellular equilibrium—supporting neuromuscular vigor, responsive evening confidence, and balanced adult male wellness.
              </p>
              <span class="architectural-ledger__metric">CAPSULES 15–21</span>
            </div>

            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">WEEK 04 · DAYS 22–30</span>
              <strong class="architectural-ledger__title">
                Week 4: Full-Month Peak Conditioning &amp; 16,500mg Cycle Completion
              </strong>
              <p class="architectural-ledger__detail">
                Capsules #22 through #30 complete your full 30-day calendar cycle (<strong>4,200mg Tongkat Ali + 3,300mg Maca + 3,000mg Dual Amino + 2,400mg Muira Puama + 2,100mg Saw Palmetto + 1,500mg Ginseng/Ginkgo = 16,500mg</strong>). All six pathways operate at peak daily conditioning, preparing your physiology for seamless transition into Month 2 (60-Day Reserve) and Month 3 (90-Day Vault).
              </p>
              <span class="architectural-ledger__metric">CAPSULES 22–30</span>
            </div>

            <div class="architectural-ledger__row" style="background:rgba(212,175,55,0.07);border-bottom-color:var(--gold-champagne);">
              <span class="architectural-ledger__index">DAY 25 TRIGGER</span>
              <strong class="architectural-ledger__title" style="color:var(--gold-foil-bright);">
                Day-25 Automated Refill Trigger (5 Buffer Capsules Remaining in Bottle)
              </strong>
              <p class="architectural-ledger__detail">
                When you take Capsule #25 on the morning of Day 25, exactly <strong>5 capsules (5 full days of reserve)</strong> remain in your bottle. Our automated Day-25 Google Calendar and Concierge reminder fires on Day 25 so your fresh unmarked courier parcel arrives across Peninsular Malaysia (1–2 days) or Sabah/Sarawak (2–4 days) well before Day 30.
              </p>
              <span class="architectural-ledger__metric">REFILL TRIGGER DAY 25</span>
            </div>

            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">DAYS 31–90 VAULT</span>
              <strong class="architectural-ledger__title">
                Month 2 (60-Day Reserve · RM 318) &amp; Month 3 (90-Day Mastery Vault · RM 477)
              </strong>
              <p class="architectural-ledger__detail">
                Men who lock in the <strong>2-Bottle 60-Day Pack (60 Capsules, RM 318 · Free Nationwide Malaysia Shipping)</strong> or <strong>3-Bottle 90-Day Vault (90 Capsules, RM 477 · Priority VIP Dispatch)</strong> enjoy uninterrupted 60-to-90-day botanical saturation with automated refill checkpoints on Day 50 and Day 75.
              </p>
              <span class="architectural-ledger__metric">60–90 DAY MASTERY</span>
            </div>
          </div>

          <!-- Day-25 Automated Refill Reminder Calendar Integration Band -->
          <div
            id="ms110-day25-refill-protocol"
            class="growxl-refill-concierge-band"
            role="region"
            aria-labelledby="ms110-refill-heading"
          >
            <div class="growxl-refill-concierge-band__copy">
              <span class="editorial-kicker">
                AUTOMATED 30-DAY CONTINUITY ENGINE · 5-CAPSULE TRANSIT BUFFER
              </span>
              <h3 id="ms110-refill-heading" class="editorial-headline-lg" style="font-size:clamp(1.75rem,3vw,2.65rem);">
                Day-25 Automated Refill Reminder <span class="foil-champagne-text">Calendar Integration</span>
              </h3>
              <p style="color:var(--text-muted-alabaster);font-size:0.95rem;line-height:1.68;">
                Grow XL provides a full <strong>30-capsule monthly supply (1 capsule per day)</strong>. Our system schedules your automated Google Calendar and concierge refill reminder on <strong>Day 25 (with 5 capsules remaining)</strong>, ensuring 100% seamless continuity between Month 1, Month 2, and Month 3 across both West and East Malaysia.
              </p>
              <div style="display:flex;flex-wrap:wrap;gap:1.25rem;font-size:0.76rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--gold-champagne);">
                <span>1 BOTTLE (30 CAPS) = DAY 25 ALERT</span>
                <span>&middot;</span>
                <span>2 BOTTLES (60 CAPS) = DAY 50 ALERT</span>
                <span>&middot;</span>
                <span>3 BOTTLES (90 CAPS) = DAY 75 ALERT</span>
              </div>
            </div>

            <div class="growxl-refill-concierge-band__actions">
              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Onyxman+Malaysia+%E2%80%94+Grow+XL+Day-25+Refill+Check-In+%28RM+159%29&details=Your+30-capsule+Grow+XL+%28SKU%3A+ONYX-GX-30%2C+Extra-Strength+Male+Performance+Blend%29+cycle+has+5+capsules+remaining.+Order+your+next+discreet+bottle+at+https%3A%2F%2Fonyxman.my%2Fgrow-xl-malaysia%2F+or+email+sales%40onyxman.my"
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
                data-order-product="grow-xl"
                data-order-qty="2"
                style="width:100%;"
              >
                <span>LOCK IN 2 BOTTLES (60 CAPSULES) · RM 318</span>
                <span aria-hidden="true">&rarr;</span>
              </button>

              <a
                href="/guides/20-capsule-vs-30-capsule-refill-cycle-guide/"
                style="font-size:0.75rem;letter-spacing:0.16em;text-transform:uppercase;color:var(--text-muted-alabaster);text-align:center;padding-top:0.25rem;"
              >
                Read the 20-Capsule (Day-18) vs 30-Capsule (Day-25) Refill Cycle Guide &rarr;
              </a>
            </div>
          </div>

          <!-- Complete 30-Day Capsule-by-Capsule Telemetry Table (Day 01 to Day 30) -->
          <div style="display:flex;flex-direction:column;gap:1.25rem;margin-top:1rem;">
            <div style="max-width:940px;">
              <span class="editorial-kicker">
                30-CAPSULE × 550MG PRECISION TELEMETRY · DAY 01 TO DAY 30 SCHEDULE
              </span>
              <h3 class="editorial-headline-lg" style="font-size:clamp(1.65rem,2.8vw,2.45rem);margin-top:0.65rem;">
                Capsule-by-Capsule <span class="foil-champagne-text">16,500mg Bio-Saturation</span> &amp; Day-25 Refill Ledger
              </h3>
              <p style="color:var(--text-muted-alabaster);font-size:0.94rem;line-height:1.68;margin-top:0.5rem;">
                Inspect how each daily 550mg Grow XL capsule compounds from <strong>550mg on Day 01</strong> to <strong>13,750mg at the Day-25 Refill Trigger</strong> and <strong>16,500mg on Day 30</strong>:
              </p>
            </div>

            <div class="growxl-matrix-scroll" role="region" aria-label="Grow XL 30-Day Capsule-by-Capsule Telemetry Schedule" tabindex="0">
              <table class="growxl-matrix-table">
                <thead>
                  <tr>
                    <th scope="col">CYCLE DAY</th>
                    <th scope="col">WEEK &amp; PHASE</th>
                    <th scope="col">CAPSULE UNIT</th>
                    <th scope="col">CUMULATIVE ACTIVES</th>
                    <th scope="col">BOTTLE RESERVE</th>
                    <th scope="col">PHYSIOLOGICAL &amp; BOTANICAL MILESTONE</th>
                    <th scope="col">DAILY PROTOCOL NOTE</th>
                  </tr>
                </thead>
                <tbody>
                  ${dailyTelemetryRowsHtml}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
  `;
}

/**
 * Renders Chapter 3 (MS-111):
 * - Head-to-Head Comparison Matrix (Grow XL vs Magnum Pump XR / Horsemen / Hammer of Thor)
 * - 16-State Malaysia Discreet Delivery Table + Architectural Hub Ledger
 * - 10-Question Grow XL Malaysia FAQ Accordion + Final Acquisition Horizon
 */
export function renderMs111ComparisonStatesAndFaqStage() {
  const statesTableRowsHtml = GROWXL_16_STATES_LEDGER.map(
    (st) => `
                  <tr>
                    <td><strong style="color:var(--gold-champagne);">HUB-${st.num}</strong></td>
                    <td>
                      <a href="${st.href}" style="color:var(--gold-foil-bright);font-weight:600;border-bottom:1px solid rgba(212,175,55,0.35);">
                        ${st.stateName}
                      </a>
                      <span style="display:block;font-size:0.72rem;letter-spacing:0.12em;color:var(--text-ash-silver);margin-top:0.2rem;">
                        ${st.zoneLabel}
                      </span>
                    </td>
                    <td><strong>${st.transitWindow}</strong></td>
                    <td>${st.keyDistricts}</td>
                    <td>${st.postalCodes}</td>
                    <td>${st.shippingCost}</td>
                    <td>
                      <span>${st.paymentModes}</span>
                      <a href="${st.href}" style="display:block;color:var(--gold-foil-bright);font-size:0.76rem;letter-spacing:0.14em;text-transform:uppercase;margin-top:0.3rem;">
                        INSPECT HUB &rarr;
                      </a>
                    </td>
                  </tr>`
  ).join('\n');

  const faqItemsHtml = GROWXL_FAQS.map(
    (faq, idx) => `
            <!-- FAQ Item ${faq.index}: ${faq.code} -->
            <details class="growxl-faq-item" id="growxl-faq-${idx + 1}" ${idx === 0 ? 'open' : ''}>
              <summary class="growxl-faq-summary">
                <div class="growxl-faq-summary__left">
                  <span class="growxl-faq-summary__index">FAQ-${faq.index}</span>
                  <span class="growxl-faq-summary__category">${faq.category}</span>
                  <h3 class="growxl-faq-summary__question">${faq.questionEn}</h3>
                </div>
                <span class="growxl-faq-summary__icon" aria-hidden="true">+</span>
              </summary>
              <div class="growxl-faq-answer">
                <p>${faq.answerEn}</p>
              </div>
            </details>`
  ).join('\n');

  return `
      <!-- =====================================================================
           CHAPTER 3 (MS-111): HEAD-TO-HEAD COMPARISON MATRIX (GROW XL VS
           MAGNUM PUMP XR / HORSEMEN / HAMMER OF THOR) + 16-STATE MALAYSIA
           DISCREET DELIVERY TABLE + 10-QUESTION GROW XL MALAYSIA FAQ ACCORDION
           ===================================================================== -->
      <section
        id="ms111-head-to-head-comparison"
        class="growxl-stage-section growxl-stage-section--onyx"
        aria-labelledby="ms111-comparison-heading"
      >
        <div class="growxl-stage-container">
          <div class="growxl-stage-header">
            <div class="growxl-stage-header__left">
              <span class="editorial-kicker">
                CHAPTER III (MS-111) · APOTHECARY CROSS-EXAMINATION · UNIFORM RM 159 PRICING
              </span>
              <h2 id="ms111-comparison-heading" class="editorial-headline-lg">
                Head-to-Head Matrix: <span class="foil-champagne-text">Grow XL</span> vs. Magnum Pump XR, Horsemen &amp; Hammer of Thor
              </h2>
            </div>
            <div class="growxl-stage-header__right">
              <p style="color:var(--text-muted-alabaster);font-size:0.96rem;line-height:1.65;">
                Every formulation in the Onyxman Malaysia vault shares a uniform <strong>RM 159 single-bottle price (RM 318 for 2 bottles, RM 477 for 3 bottles)</strong>. Compare Grow XL&rsquo;s 30-capsule extra-strength daily blend against Magnum Pump XR, Horsemen, and Hammer of Thor below.
              </p>
            </div>
          </div>

          <div class="growxl-matrix-scroll" role="region" aria-label="Grow XL vs Magnum Pump XR, Horsemen, and Hammer of Thor Comparison Matrix" tabindex="0">
            <table class="growxl-matrix-table">
              <thead>
                <tr>
                  <th scope="col">SPECIFICATION DIMENSION</th>
                  <th scope="col" class="growxl-matrix-table__highlight-col">
                    GROW XL (THIS PAGE)<br />
                    <span style="color:var(--gold-foil-bright);">SKU: ONYX-GX-30 · 30 CAPSULES</span>
                  </th>
                  <th scope="col">
                    <a href="/products/magnum-pump-xr/" style="text-decoration:underline;">MAGNUM PUMP XR</a><br />
                    <span style="color:var(--text-ash-silver);">SKU: ONYX-MP-30 · 30 BLACK CAPS</span>
                  </th>
                  <th scope="col">
                    <a href="/products/horsemen/" style="text-decoration:underline;">HORSEMEN</a><br />
                    <span style="color:var(--text-ash-silver);">SKU: ONYX-HM-20 · 20 CAPSULES</span>
                  </th>
                  <th scope="col">
                    <a href="/products/hammer-of-thor/" style="text-decoration:underline;">HAMMER OF THOR</a><br />
                    <span style="color:var(--text-ash-silver);">SKU: ONYX-HT-20 · 20 VEG. CAPS</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong style="color:var(--gold-champagne);">Official Bottle Label Inscription</strong></td>
                  <td class="growxl-matrix-table__highlight-col">
                    <strong>#1 Selling Product — Made With Natural Ingredient — Extra-Strength Enhancement Male Performance Blend — 30 Capsules</strong>
                  </td>
                  <td>Testosterone Pro Series — Male Enhancement Formula Maximum Strength — 30 Black Capsules</td>
                  <td>Man Virility Enhancement Herbal Supplement — 20 Capsules × 500mg (20 Kapsul × 500mg)</td>
                  <td>Men&rsquo;s Health — Tribulus Terrestris — 20 Veg. Capsules</td>
                </tr>
                <tr>
                  <td><strong style="color:var(--gold-champagne);">SKU, MPN &amp; GTIN-13</strong></td>
                  <td class="growxl-matrix-table__highlight-col">
                    <strong>SKU: ONYX-GX-30 · MPN: GXL-30CAP-MY · GTIN: 9550000102035</strong>
                  </td>
                  <td>SKU: ONYX-MP-30 · MPN: MPXR-30BLK-MY · GTIN: 9550000102042</td>
                  <td>SKU: ONYX-HM-20 · MPN: HM-500MG-20MY · GTIN: 9550000102011</td>
                  <td>SKU: ONYX-HT-20 · MPN: HT-TRIB-20MY · GTIN: 9550000102028</td>
                </tr>
                <tr>
                  <td><strong style="color:var(--gold-champagne);">Capsule Count &amp; Bottle Mass</strong></td>
                  <td class="growxl-matrix-table__highlight-col">
                    <strong>30 Capsules × 550mg = 16,500mg</strong> (Full 30-Day Monthly Supply)
                  </td>
                  <td>30 Jet-Black Capsules × 600mg = 18,000mg (30-Day Supply)</td>
                  <td>20 High-Density Capsules × 500mg = 10,000mg (20-Day Supply)</td>
                  <td>20 Plant HPMC Veg. Capsules × 500mg = 10,000mg (20-Day Supply)</td>
                </tr>
                <tr>
                  <td><strong style="color:var(--gold-champagne);">Lead Active Formula Breakdown</strong></td>
                  <td class="growxl-matrix-table__highlight-col">
                    <strong>Tongkat Ali (140mg) + Peruvian Maca (110mg) + L-Arginine/Citrulline (100mg) + Muira Puama (80mg) + Saw Palmetto (70mg) + Ginseng/Ginkgo (50mg)</strong>
                  </td>
                  <td>L-Arginine HCl (180mg) + L-Citrulline Malate (140mg) + Tribulus (110mg) + Tongkat Ali (90mg) + Thai Black Ginger (65mg) + Bioperine (15mg)</td>
                  <td>Tongkat Ali 100:1 (150mg) + Black Maca (100mg) + Epimedium (80mg) + L-Arginine HCl (80mg) + Red Ginseng (60mg) + Tribulus/Zinc (30mg)</td>
                  <td>60%-Saponin Tribulus (200mg) + Andean Maca (100mg) + Plant L-Arginine (80mg) + Panax Ginseng (60mg) + Tongkat Ali (45mg) + Chelated Zinc (15mg)</td>
                </tr>
                <tr>
                  <td><strong style="color:var(--gold-champagne);">Primary Physiological Specialization</strong></td>
                  <td class="growxl-matrix-table__highlight-col">
                    <strong>30-Day All-Day Baseline Vitality, Micro-Circulation, Muira Puama Vigor &amp; Saw Palmetto Male Wellness</strong>
                  </td>
                  <td>Extended-Release (XR) Nitric Oxide Vasodilation, Pre-Gym Vascular Pump &amp; Evening Output</td>
                  <td>Rapid 45–60 Min Pre-Evening Stamina Readiness &amp; Dual-Mode Vitality</td>
                  <td>100% Vegetarian Saponin Conditioning, Muscular Recovery &amp; Zinc Balance</td>
                </tr>
                <tr>
                  <td><strong style="color:var(--gold-champagne);">Optimal Daily Intake Timing</strong></td>
                  <td class="growxl-matrix-table__highlight-col">
                    <strong>1 capsule every morning 20–30 min after breakfast</strong> (or 30 min post-dinner)
                  </td>
                  <td>1 black capsule 30–45 min before gym workout or evening activity</td>
                  <td>1 capsule 45–60 min before evening activity with warm water</td>
                  <td>1 vegetarian capsule 30 min after dinner or 45 min pre-training</td>
                </tr>
                <tr>
                  <td><strong style="color:var(--gold-champagne);">Automated Refill Trigger Horizon</strong></td>
                  <td class="growxl-matrix-table__highlight-col">
                    <strong>Day-25 Automated Refill Reminder</strong> (5 Capsules Remaining Buffer)
                  </td>
                  <td>Day-25 Automated Refill Reminder (30-Day Cycle)</td>
                  <td>Day-18 Automated Refill Reminder (20-Day Cycle)</td>
                  <td>Day-18 Automated Refill Reminder (20-Day Cycle)</td>
                </tr>
                <tr>
                  <td><strong style="color:var(--gold-champagne);">Official Malaysia Pricing</strong></td>
                  <td class="growxl-matrix-table__highlight-col">
                    <strong>1B: RM 159 · 2B: RM 318 · 3B: RM 477</strong> (RM 5.30 / Day)
                  </td>
                  <td>1B: RM 159 · 2B: RM 318 · 3B: RM 477</td>
                  <td>1B: RM 159 · 2B: RM 318 · 3B: RM 477</td>
                  <td>1B: RM 159 · 2B: RM 318 · 3B: RM 477</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Executive Verdict & Cross-Links -->
          <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:1.5rem;padding-top:1rem;">
            <div style="display:flex;flex-wrap:wrap;gap:1.35rem;font-size:0.8rem;letter-spacing:0.14em;text-transform:uppercase;">
              <a href="/compare/grow-xl-vs-magnum-pump-xr/" style="color:var(--gold-foil-bright);text-decoration:underline;">
                Read Full Grow XL vs. Magnum Pump XR (30-Capsule) Deep-Dive &rarr;
              </a>
              <a href="/compare/horsemen-vs-hammer-of-thor/" style="color:var(--text-muted-alabaster);text-decoration:underline;">
                Compare Horsemen vs. Hammer of Thor (20-Capsule) &rarr;
              </a>
              <a href="/compare/" style="color:var(--text-muted-alabaster);text-decoration:underline;">
                Complete 4-Product Apothecary Matrix &rarr;
              </a>
            </div>
            <button
              type="button"
              class="cta-foil-primary"
              data-open-order-drawer="true"
              data-order-product="grow-xl"
              data-order-qty="1"
            >
              <span>SELECT GROW XL (30 CAPSULES) · RM 159</span>
            </button>
          </div>
        </div>
      </section>

      <!-- =====================================================================
           MS-111 PART B: 16-STATE MALAYSIA DISCREET DELIVERY TABLE
           ===================================================================== -->
      <section
        id="ms111-malaysia-16-states-delivery"
        class="growxl-stage-section"
        aria-labelledby="ms111-states-heading"
      >
        <div class="growxl-stage-container">
          <div class="growxl-stage-header">
            <div class="growxl-stage-header__left">
              <span class="editorial-kicker">
                NATIONWIDE FULFILMENT TELEMETRY · ALL 16 STATES &amp; FEDERAL TERRITORIES
              </span>
              <h2 id="ms111-states-heading" class="editorial-headline-lg">
                16-State Malaysia <span class="foil-champagne-text">Discreet Delivery Table</span> for Grow XL
              </h2>
            </div>
            <div class="growxl-stage-header__right">
              <p style="color:var(--text-muted-alabaster);font-size:0.96rem;line-height:1.65;">
                Every Grow XL order is dispatched from our Klang Valley fulfilment hub in a 100% plain, unmarked matte security parcel under <strong>&ldquo;OM Fulfilment Logistics&rdquo;</strong>. Review transit windows, covered districts, postal ranges, and COD / FPX / DuitNow QR support across all 16 Malaysian hubs below.
              </p>
            </div>
          </div>

          <div class="growxl-matrix-scroll" role="region" aria-label="16-State Malaysia Discreet Delivery Table for Grow XL" tabindex="0">
            <table class="growxl-matrix-table">
              <thead>
                <tr>
                  <th scope="col">HUB CODE</th>
                  <th scope="col">STATE / FEDERAL TERRITORY</th>
                  <th scope="col">DISCREET TRANSIT WINDOW</th>
                  <th scope="col">KEY COVERED CITIES &amp; DISTRICTS</th>
                  <th scope="col">POSTCODES</th>
                  <th scope="col">SHIPPING FEE BY TIER</th>
                  <th scope="col">PAYMENT &amp; HUB LINK</th>
                </tr>
              </thead>
              <tbody>
                ${statesTableRowsHtml}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <!-- =====================================================================
           MS-111 PART C: COMPLETE 10-QUESTION GROW XL MALAYSIA FAQ ACCORDION
           + FINAL APOTHECARY ACQUISITION HORIZON
           ===================================================================== -->
      <section
        id="ms111-growxl-faq-stage"
        class="growxl-stage-section growxl-stage-section--onyx"
        aria-labelledby="ms111-faq-heading"
      >
        <div class="growxl-stage-container">
          <div class="growxl-stage-header">
            <div class="growxl-stage-header__left">
              <span class="editorial-kicker">
                CHAPTER III PART C (MS-111) · VERIFIED APOTHECARY DOSSIER · 10 QUESTIONS ANSWERED
              </span>
              <h2 id="ms111-faq-heading" class="editorial-headline-lg">
                Frequently Asked Questions — <span class="foil-champagne-text">Grow XL Malaysia</span> (30 Capsules)
              </h2>
            </div>
            <div class="growxl-stage-header__right">
              <p style="color:var(--text-muted-alabaster);font-size:0.96rem;line-height:1.65;">
                Comprehensive answers covering Grow XL&rsquo;s 30-capsule × 550mg extra-strength formula, comparisons against Magnum Pump XR, Horsemen, and Hammer of Thor, Day-25 automated refill alerts, uniform RM 159 pricing, and 100% unmarked delivery across Malaysia.
              </p>
            </div>
          </div>

          <div class="growxl-faq-ledger" role="region" aria-label="Grow XL Malaysia 10-Question FAQ Accordion">
            ${faqItemsHtml}
          </div>

          <!-- Final Acquisition Horizon Banner -->
          <div style="margin-top:2rem;padding:2.75rem clamp(1.5rem,4vw,3.5rem);background-color:#050507;border-top:var(--hairline-rule);border-bottom:var(--hairline-rule);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:2.5rem;">
            <div style="flex:1 1 520px;display:flex;flex-direction:column;gap:0.85rem;">
              <span class="editorial-kicker">
                IMMEDIATE DISCREET DISPATCH · SKU ONYX-GX-30 · MPN GXL-30CAP-MY · GTIN 9550000102035
              </span>
              <h3 class="editorial-headline-lg" style="font-size:clamp(1.85rem,3.2vw,2.9rem);">
                Begin Your 30-Day <span class="foil-champagne-text">Grow XL Extra-Strength</span> Protocol Today
              </h3>
              <p style="color:var(--text-muted-alabaster);font-size:0.95rem;line-height:1.65;">
                Reserve <strong>1 Bottle (30 Capsules · RM 159)</strong>, <strong>2 Bottles (60 Capsules · RM 318 · Free Nationwide Malaysia Shipping)</strong>, or <strong>3 Bottles (90 Capsules · RM 477 · Complete 90-Day Mastery Vault)</strong>. Shipped in a 100% plain matte security parcel under <strong>OM Fulfilment Logistics</strong>. Direct concierge desk: <a href="mailto:sales@onyxman.my" style="color:var(--gold-foil-bright);">sales@onyxman.my</a> | <a href="mailto:info@onyxman.my" style="color:var(--gold-foil-bright);">info@onyxman.my</a> | <a href="mailto:waleedshoaibofficial@gmail.com" style="color:var(--gold-foil-bright);">waleedshoaibofficial@gmail.com</a>.
              </p>
            </div>

            <div style="display:flex;flex-direction:column;gap:0.9rem;min-width:295px;">
              <button
                type="button"
                class="cta-foil-primary"
                data-open-order-drawer="true"
                data-order-product="grow-xl"
                data-order-qty="1"
              >
                <span>1 BOTTLE (30 CAPSULES) · RM 159</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
              <button
                type="button"
                class="cta-foil-primary"
                data-open-order-drawer="true"
                data-order-product="grow-xl"
                data-order-qty="2"
              >
                <span>2 BOTTLES (60 CAPSULES) · RM 318</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
              <button
                type="button"
                class="cta-hairline-secondary"
                data-open-order-drawer="true"
                data-order-product="grow-xl"
                data-order-qty="3"
                style="justify-content:space-between;"
              >
                <span>3 BOTTLES (90 CAPSULES) · RM 477</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>
  `;
}

/**
 * Generates the complete, uncompressed HTML5 document for Grow XL EN-MY Flagship
 * and writes it to BOTH:
 * 1) `public/grow-xl-malaysia/index.html`
 * 2) `public/products/grow-xl/index.html` (canonical alias)
 */
export function buildGrowXlEnFlagshipPage() {
  const schemaGraphObj = buildGrowXlEnSchemaGraph();

  const bodyContent = [
    renderMs109HeroStage(),
    renderMs110BotanicalAndChronologyStage(),
    renderMs111ComparisonStatesAndFaqStage(),
  ].join('\n');

  const html = renderLuxuryShell({
    lang: 'en-MY',
    title:
      'Grow XL Malaysia (30 Capsules) — #1 Selling Product Extra-Strength Male Performance Blend | RM 159 Onyxman.my',
    description:
      'Buy authentic Grow XL (#1 Selling Product — Made With Natural Ingredient — Extra-Strength Enhancement Male Performance Blend — 30 Capsules, SKU: ONYX-GX-30, MPN: GXL-30CAP-MY, GTIN-13: 9550000102035) for RM 159 at Onyxman.my. 550mg per capsule (16,500mg per bottle) with Extra-Strength Tongkat Ali 140mg, Peruvian Maca 110mg, L-Arginine & L-Citrulline 100mg, Brazilian Muira Puama 80mg, Saw Palmetto 70mg & Panax Ginseng/Ginkgo Biloba 50mg.',
    canonicalPath: GROWXL_CONSTANTS.canonicalPath,
    alternatePathEn: GROWXL_CONSTANTS.canonicalPath,
    alternatePathMs: GROWXL_CONSTANTS.pairedMsPath,
    ogImage: GROWXL_CONSTANTS.assets.stageWebp,
    schemaGraphJson: schemaGraphObj,
    bodyContent,
    activeNav: 'grow-xl',
    productSlug: 'grow-xl',
    defaultQty: 2,
    includeSealStrip: true,
    extraHeadHtml: GROWXL_PAGE_SCOPED_CSS,
  });

  // Write primary output: public/grow-xl-malaysia/index.html
  fs.mkdirSync(path.dirname(OUTPUT_PRIMARY), { recursive: true });
  fs.writeFileSync(OUTPUT_PRIMARY, html, 'utf8');

  // Write canonical alias output: public/products/grow-xl/index.html
  fs.mkdirSync(path.dirname(OUTPUT_ALIAS), { recursive: true });
  fs.writeFileSync(OUTPUT_ALIAS, html, 'utf8');

  const lineCount = html.split(/\r?\n/).length;
  const byteSize = Buffer.byteLength(html, 'utf8');

  // Self-Audit Gate against banned tokens & required authentic constants
  const bannedTokens = [
    '#' + 'FAF8F5',
    'Plus ' + 'Jakarta Sans',
    'border-radius: ' + '999px',
    'repeat(3, ' + '1fr)',
    'repeat(2, ' + '1fr)',
    'repeat(4, ' + '1fr)',
    '// ' + 'TODO',
    '// ' + '...',
  ];
  const bannedHits = bannedTokens.filter((tok) => html.includes(tok));
  if (bannedHits.length > 0) {
    throw new Error(`Banned tokens detected in generated HTML: ${bannedHits.join(', ')}`);
  }

  const requiredTokens = [
    'ONYX-GX-30',
    'GXL-30CAP-MY',
    '9550000102035',
    'https://www.onyxmen.my/grow-xl-malaysia/',
    'https://www.onyxmen.my/ms/grow-xl-malaysia/',
    '/assets/products/grow-xl-stage.webp',
    '/assets/products/grow-xl-portrait.webp',
    '/assets/products/grow-xl-cutout.webp',
    'RM 159',
    'RM 318',
    'RM 477',
    '159.00',
    '318.00',
    '477.00',
    'waleedshoaibofficial@gmail.com',
    'sales@onyxman.my',
    'info@onyxman.my',
    'data-order-product="grow-xl"',
    '#1 Selling Product',
    'Made With Natural Ingredient',
    'Extra-Strength Enhancement',
    'Male Performance Blend',
    '30 Capsules',
    'Day-25',
  ];
  const missingTokens = requiredTokens.filter((tok) => !html.includes(tok));
  if (missingTokens.length > 0) {
    throw new Error(`Missing required authentic tokens: ${missingTokens.join(', ')}`);
  }

  if (lineCount < 2600) {
    throw new Error(`Line count ${lineCount} is below mandatory >= 2,600 line luxury code budget`);
  }

  return {
    primaryPath: OUTPUT_PRIMARY,
    aliasPath: OUTPUT_ALIAS,
    lineCount,
    byteSize,
  };
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  const result = buildGrowXlEnFlagshipPage();
  console.log(
    `[MS-109..MS-111] Built ${result.primaryPath} AND ${result.aliasPath} — ${result.lineCount} lines (${result.byteSize} bytes)`
  );
}
