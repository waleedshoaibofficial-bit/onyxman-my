#!/usr/bin/env node
/**
 * ONYXMEN.MY — HAMMER OF THOR EN-MY FLAGSHIP APOTHECARY BUILDER (MS-103 TO MS-106)
 * Output Target: public/hammer-of-thor-malaysia/index.html
 * Canonical URL: https://www.onyxmen.my/hammer-of-thor-malaysia/
 * Paired BM URL: https://www.onyxmen.my/ms/hammer-of-thor-malaysia/
 *
 * Strictly enforces:
 * - APEX Rule #29 & Rule #30: Paradigm A (100vw x 100vh Full-Bleed Obsidian Hero Stage)
 *   + Paradigm D (50vw / 50vw Pinned Split-Screen Botanical Breakdown)
 *   + Architectural Hairline Ledgers (ZERO repeat(3,1fr) card grids, ZERO pill radius,
 *     ZERO #FAF8F5, ZERO Plus Jakarta Sans).
 * - Authentic Constants:
 *   Product: Hammer of Thor (Men's Health — Tribulus Terrestris — 20 Veg. Capsules)
 *   SKU: ONYX-HT-20 | MPN: HT-TRIB-20MY | GTIN-13: 9550000102028
 *   Pricing: 1 Bottle = RM 159 (159.00 MYR), 2 Bottles = RM 318 (318.00 MYR), 3 Bottles = RM 477 (477.00 MYR)
 *   Emails: waleedshoaibofficial@gmail.com, sales@onyxmen.my, info@onyxmen.my
 *   Refill Protocol: Day-18 Refill Reminder Calendar Integration (20 plant-origin HPMC vegetarian capsules)
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderLuxuryShell } from '../components/LuxuryShell.mjs';
import {
  buildOrganizationSchema,
  buildWebSiteSchema,
  buildShippingDetailsNode,
  buildReturnPolicyNode,
  ORG_ID,
  WEBSITE_ID,
  BRAND_ID,
} from '../utils/schema-graph.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '../..');
const OUTPUT_FILE = path.join(ROOT_DIR, 'public', 'hammer-of-thor-malaysia', 'index.html');

export const HAMMER_CONSTANTS = {
  productName: 'Hammer of Thor',
  officialSubtitle: "Men's Health — Tribulus Terrestris — 20 Veg. Capsules",
  productSlug: 'hammer-of-thor',
  sku: 'ONYX-HT-20',
  mpn: 'HT-TRIB-20MY',
  gtin13: '9550000102028',
  capsuleCount: 20,
  capsuleWeightMg: 500,
  totalBottlePotencyMg: 10000,
  refillTriggerDay: 18,
  capsuleShellSpec: '100% Plant-Derived Hypromellose (USP-Grade HPMC Vegetarian Capsule — Zero Bovine or Porcine Gelatin)',
  canonicalUrl: 'https://www.onyxmen.my/hammer-of-thor-malaysia/',
  canonicalPath: '/hammer-of-thor-malaysia/',
  pairedMsUrl: 'https://www.onyxmen.my/ms/hammer-of-thor-malaysia/',
  pairedMsPath: '/ms/hammer-of-thor-malaysia/',
  assets: {
    stageWebp: '/assets/products/hammer-of-thor-stage.webp',
    stagePng: '/assets/products/hammer-of-thor-stage.png',
    portraitWebp: '/assets/products/hammer-of-thor-portrait.webp',
    portraitPng: '/assets/products/hammer-of-thor-portrait.png',
    cutoutWebp: '/assets/products/hammer-of-thor-cutout.webp',
    cutoutPng: '/assets/products/hammer-of-thor-cutout.png',
  },
  emails: {
    primaryOrder: 'waleedshoaibofficial@gmail.com',
    sales: 'sales@onyxmen.my',
    info: 'info@onyxmen.my',
  },
};

export const HAMMER_BOTANICAL_ACTIVES = [
  {
    index: '01',
    code: 'HT-ACT-01',
    name: '60%-Saponin Tribulus Terrestris',
    scientificName: 'Tribulus terrestris L. (Standardized Aerial & Fruit Extract)',
    dosageMg: 200,
    percentageOfCapsule: '40.0%',
    standardization: 'Standardized to >= 60% Total Steroidal Saponins (Protodioscin-Rich Furostanol Fraction)',
    extractionRatio: '15:1 Dual Hydro-Ethanolic Fruit & Aerial Pericarp Extraction',
    molecularTarget: 'Androgen Receptor Density Conditioning, Luteinizing Signaling Support & Muscular Nitrogen Retention',
    clinicalSummary:
      'Prominently inscribed across the front crest of the Hammer of Thor apothecary vessel, our 200mg Tribulus Terrestris core is not raw powdered herb. It is standardized to a verified 60% steroidal saponin threshold dominated by protodioscin—supporting physical drive, lean muscular recovery after heavy gym resistance sessions, and sustained evening stamina without synthetic hormone disruption.',
    tropicalAdvantage:
      'Stabilized with plant-origin silica flow agents inside a low-moisture HPMC vegetarian shell so hygroscopic furostanol saponins never clump or oxidize in Malaysia’s 80%+ relative humidity.',
    synergyPartner: 'Works in direct lockstep with 15mg Chelated Zinc Bisglycinate (HT-ACT-06) and 45mg Malaysian Tongkat Ali (HT-ACT-05).',
  },
  {
    index: '02',
    code: 'HT-ACT-02',
    name: 'Andean Maca Root',
    scientificName: 'Lepidium meyenii Walp. (Gelatinized High-Altitude Root Tuber Extract)',
    dosageMg: 100,
    percentageOfCapsule: '20.0%',
    standardization: '10:1 Concentrated Root Tuber Extract Standardized to Macamides & Macaenes (>= 0.6%)',
    extractionRatio: '10:1 Cold-Gelatinized Starch-Reduced Hypocotyl Concentrate',
    molecularTarget: 'Hypothalamic-Pituitary Resilience, Non-Stimulant Libido Vitality & ATP Glycogen Replenishment',
    clinicalSummary:
      'Harvested from high-altitude Peruvian plateaus above 4,000 meters, 100mg of concentrated Andean Maca Root provides unique lipid-soluble macamides and macaenes. Unlike caffeine or harsh central nervous system stimulants that induce heart palpitations or late-night insomnia, Andean Maca elevates baseline physical endurance and evening readiness calmly and sustainably.',
    tropicalAdvantage:
      'Pre-gelatinized via enzymatic starch removal so it dissolves cleanly within 18 minutes inside the plant HPMC capsule with zero bloating after heavy Malaysian evening meals.',
    synergyPartner: 'Amplifies the endurance curve of 200mg Tribulus Terrestris (HT-ACT-01) and 60mg Panax Ginseng (HT-ACT-04).',
  },
  {
    index: '03',
    code: 'HT-ACT-03',
    name: 'Plant-Fermented L-Arginine',
    scientificName: 'L-Arginine Free Base (100% Non-Animal Carbohydrate Fermentation)',
    dosageMg: 80,
    percentageOfCapsule: '16.0%',
    standardization: '99.2% USP-Grade Pure Free-Form Amino Acid (Zero Duck-Feather or Animal Keratin Hydrolysis)',
    extractionRatio: 'Bio-Fermented Plant Glucose Culture · Crystalline Micronized Grade',
    molecularTarget: 'Endothelial Nitric Oxide Synthase (eNOS) Substrate & Peripheral Micro-Vascular Perfusion',
    clinicalSummary:
      'Conventional cheap L-Arginine is frequently hydrolyzed from animal feathers or fur. To honor Hammer of Thor’s strict "20 Veg. Capsules" specification, our 80mg L-Arginine is produced exclusively via plant-carbohydrate bio-fermentation. It serves as the immediate biological precursor for endothelial Nitric Oxide (NO), promoting responsive peripheral blood flow during both resistance training and evening intimacy.',
    tropicalAdvantage:
      'Free-base crystalline micronization prevents gastric acidity spikes and pairs seamlessly with Panax Ginseng ginsenosides to sustain endothelial vasorelaxation.',
    synergyPartner: 'Catalyzed by Panax Ginseng Rg1/Rb1 ginsenosides (HT-ACT-04) for dual-pathway endothelial nitric oxide synthesis.',
  },
  {
    index: '04',
    code: 'HT-ACT-04',
    name: 'Panax Ginseng',
    scientificName: 'Panax ginseng C.A. Meyer (6-Year Mature Root Standardized Extract)',
    dosageMg: 60,
    percentageOfCapsule: '12.0%',
    standardization: 'Standardized to 10% Total Dammarane Ginsenosides (Rg1, Rb1, Rg3 Balanced Profile)',
    extractionRatio: '8:1 Low-Temperature Vacuum Root Extraction',
    molecularTarget: 'Cardiorespiratory Anti-Fatigue Conditioning, Cortisol Moderation & Endothelial NO Upregulation',
    clinicalSummary:
      'Long commutes across the Federal Highway, late corporate hours in KLCC or Penang, and Malaysia’s relentless equatorial heat drain autonomic energy reserves before evening arrives. Our 60mg standardized Panax Ginseng root delivers a 10% ginsenoside phytocomplex that combats mental and physical exhaustion while co-activating endothelial nitric oxide pathways alongside L-Arginine.',
    tropicalAdvantage:
      'Balanced Rg1-to-Rb1 ratio avoids "ginseng over-heating" or dry-throat restlessness in warm tropical nights, supporting composed mental focus and physical stamina.',
    synergyPartner: 'Co-activates eNOS vascular pathways with 80mg Plant-Fermented L-Arginine (HT-ACT-03).',
  },
  {
    index: '05',
    code: 'HT-ACT-05',
    name: 'Malaysian Tongkat Ali',
    scientificName: 'Eurycoma longifolia Jack (Freeze-Dried Water-Soluble Mature Root Extract)',
    dosageMg: 45,
    percentageOfCapsule: '9.0%',
    standardization: '100:1 Standardized Root Extract (> 2.2% Eurycomanone, > 22% Eurypeptides, > 30% Glycosaponins)',
    extractionRatio: '100:1 Aqueous Ultrasonic Root Extraction (Pahang & Perak Sustainable Wild-Harvest)',
    molecularTarget: 'Free Bioavailable Vitality Equilibrium, SHBG Modulation & Post-Stress Cortisol Recovery',
    clinicalSummary:
      'While Tribulus Terrestris leads Hammer of Thor at 200mg, we anchor the formulation in native Malaysian phytochemistry with 45mg of 100:1 Eurycoma longifolia root extract. Its standardized eurycomanone quassinoids and bioactive eurypeptides work alongside Tribulus furostanol saponins to maintain optimal free vitality balance, muscular recovery, and resilient daily drive.',
    tropicalAdvantage:
      'Aqueous freeze-dried extraction eliminates insoluble woody root fibers, ensuring rapid bioavailability and zero metallic or bitter reflux.',
    synergyPartner: 'Forms a dual-saponin/quassinoid axis with 200mg 60%-Saponin Tribulus Terrestris (HT-ACT-01).',
  },
  {
    index: '06',
    code: 'HT-ACT-06',
    name: 'Chelated Zinc Bisglycinate',
    scientificName: 'Zinc Bisglycinate Chelate (TRAACS-Equivalent Dual-Glycine Bound Elemental Mineral)',
    dosageMg: 15,
    percentageOfCapsule: '3.0%',
    standardization: '15mg Elemental Zinc Bound to Two Glycine Amino Acid Molecules (100% Daily Adult Male Target)',
    extractionRatio: 'Fully Reacted Organic Amino-Acid Chelate (Zero Cheap Zinc Oxide or Sulfate)',
    molecularTarget: 'Enzymatic Cofactor for Male Reproductive Vitality, Cellular Protein Synthesis & Antioxidant Defense',
    clinicalSummary:
      'Active Malaysian men lose substantial trace zinc through heavy perspiration in humid tropical weather and intense gym sessions. Rather than using poorly absorbed Zinc Oxide (which causes nausea and competes with dietary phytates), Hammer of Thor supplies 15mg of Chelated Zinc Bisglycinate. Bound to two glycine molecules, it crosses intestinal amino-acid channels intact—completing the 500mg vegetarian capsule matrix.',
    tropicalAdvantage:
      'Zero metallic aftertaste and zero stomach cramping even when taken 30 minutes after a light dinner or 45 minutes prior to evening training.',
    synergyPartner: 'Provides the essential enzymatic mineral foundation required for Tribulus Terrestris (HT-ACT-01) and Tongkat Ali (HT-ACT-05) pathways.',
  },
];

export const HAMMER_16_STATES_LEDGER = [
  {
    num: '01',
    stateName: 'Kuala Lumpur (WP)',
    hubSlug: 'kuala-lumpur',
    href: '/malaysia-delivery/kuala-lumpur/',
    zoneLabel: 'KLANG VALLEY SAME-DAY ZONE',
    transitWindow: 'Same-Day Private Runner (3–5 Hours) or 1 Business Day Free Express',
    keyDistricts: 'KLCC, Bukit Bintang, Bangsar, Mont Kiara, Sri Hartamas, Damansara Heights, Cheras, Bukit Jalil, Wangsa Maju',
    postalCodes: '50000–60000',
    shippingCost: '1B: RM 0 Free Express · 2B: RM 0 Free · 3B: RM 0 Priority (+RM 15 optional 3–5h Runner)',
    paymentModes: 'COD, DuitNow Instant QR, FPX Online Banking',
  },
  {
    num: '02',
    stateName: 'Selangor Darul Ehsan',
    hubSlug: 'selangor',
    href: '/malaysia-delivery/selangor/',
    zoneLabel: 'KLANG VALLEY SAME-DAY ZONE',
    transitWindow: 'Same-Day Private Runner (3–5 Hours) or 1 Business Day Free Express',
    keyDistricts: 'Petaling Jaya, Subang Jaya, Sunway, Shah Alam, Puchong, Klang, Setia Alam, Damansara, Kajang, Bangi, Cyberjaya',
    postalCodes: '40000–48300, 63000–68100',
    shippingCost: '1B: RM 0 Free Express · 2B: RM 0 Free · 3B: RM 0 Priority (+RM 15 optional 3–5h Runner)',
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
    shippingCost: '1B: RM 0 Free Express · 2B: RM 0 Free · 3B: RM 0 Priority (+RM 15 optional 3–5h Runner)',
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
    shippingCost: '1B: RM 0 Free Express · 2B: RM 0 Free · 3B: RM 0 Priority VIP',
    paymentModes: 'COD, DuitNow Instant QR, FPX Online Banking',
  },
  {
    num: '05',
    stateName: 'Penang (Pulau Pinang)',
    hubSlug: 'penang',
    href: '/malaysia-delivery/penang/',
    zoneLabel: 'NORTHERN CORRIDOR EXPRESS',
    transitWindow: '1–2 Business Days Island & Mainland Express',
    keyDistricts: 'George Town, Bayan Lepas, Gurney, Tanjung Tokong, Jelutong, Butterworth, Bukit Mertajam, Seberang Jaya, Batu Kawan',
    postalCodes: '10000–14400',
    shippingCost: '1B: RM 0 Free Express · 2B: RM 0 Free · 3B: RM 0 Priority VIP',
    paymentModes: 'COD, DuitNow Instant QR, FPX Online Banking',
  },
  {
    num: '06',
    stateName: 'Perak Darul Ridzuan',
    hubSlug: 'perak-ipoh',
    href: '/malaysia-delivery/perak-ipoh/',
    zoneLabel: 'PENINSULAR EXPRESS ZONE',
    transitWindow: '1–2 Business Days North-South Highway Dispatch',
    keyDistricts: 'Ipoh, Canning Garden, Meru Raya, Taiping, Manjung, Sitiawan, Teluk Intan, Kampar, Kuala Kangsar',
    postalCodes: '30000–36810',
    shippingCost: '1B: RM 0 Free Express · 2B: RM 0 Free · 3B: RM 0 Priority VIP',
    paymentModes: 'COD, DuitNow Instant QR, FPX Online Banking',
  },
  {
    num: '07',
    stateName: 'Melaka',
    hubSlug: 'melaka',
    href: '/malaysia-delivery/melaka/',
    zoneLabel: 'PENINSULAR EXPRESS ZONE',
    transitWindow: '1–2 Business Days Direct Highway Dispatch',
    keyDistricts: 'Melaka City (Bandaraya Melaka), Ayer Keroh, Batu Berendam, Bukit Baru, Klebang, Alor Gajah, Jasin',
    postalCodes: '75000–78300',
    shippingCost: '1B: RM 0 Free Express · 2B: RM 0 Free · 3B: RM 0 Priority VIP',
    paymentModes: 'COD, DuitNow Instant QR, FPX Online Banking',
  },
  {
    num: '08',
    stateName: 'Negeri Sembilan',
    hubSlug: 'negeri-sembilan-seremban',
    href: '/malaysia-delivery/negeri-sembilan-seremban/',
    zoneLabel: 'PENINSULAR EXPRESS ZONE',
    transitWindow: '1 Business Day Express Courier',
    keyDistricts: 'Seremban, Seremban 2, Senawang, Nilai, Bandar Enstek, Port Dickson, Lukut, Tampin, Bahau',
    postalCodes: '70000–73500',
    shippingCost: '1B: RM 0 Free Express · 2B: RM 0 Free · 3B: RM 0 Priority VIP',
    paymentModes: 'COD, DuitNow Instant QR, FPX Online Banking',
  },
  {
    num: '09',
    stateName: 'Pahang Darul Makmur',
    hubSlug: 'pahang-kuantan',
    href: '/malaysia-delivery/pahang-kuantan/',
    zoneLabel: 'EAST COAST EXPRESS ZONE',
    transitWindow: '1–2 Business Days Karak-ECE Linehaul',
    keyDistricts: 'Kuantan, Indera Mahkota, Temerloh, Mentakab, Bentong, Genting Highlands, Pekan, Raub, Cameron Highlands',
    postalCodes: '25000–28800, 39000–39200',
    shippingCost: '1B: RM 0 Free Express · 2B: RM 0 Free · 3B: RM 0 Priority VIP',
    paymentModes: 'COD, DuitNow Instant QR, FPX Online Banking',
  },
  {
    num: '10',
    stateName: 'Kedah Darul Aman',
    hubSlug: 'kedah-alor-setar',
    href: '/malaysia-delivery/kedah-alor-setar/',
    zoneLabel: 'NORTHERN CORRIDOR EXPRESS',
    transitWindow: '1–2 Business Days Northern Linehaul (2–3 Days Langkawi)',
    keyDistricts: 'Alor Setar, Sungai Petani, Kulim Hi-Tech Park, Jitra, Changlun, Baling, Gurun, Langkawi Island',
    postalCodes: '05000–09810',
    shippingCost: '1B: RM 0 Free Express · 2B: RM 0 Free · 3B: RM 0 Priority VIP',
    paymentModes: 'COD, DuitNow Instant QR, FPX Online Banking',
  },
  {
    num: '11',
    stateName: 'Kelantan Darul Naim',
    hubSlug: 'kelantan-kota-bharu',
    href: '/malaysia-delivery/kelantan-kota-bharu/',
    zoneLabel: 'EAST COAST EXPRESS ZONE',
    transitWindow: '1–2 Business Days East Coast Express Courier',
    keyDistricts: 'Kota Bharu, Kubang Kerian, Pengkalan Chepa, Wakaf Bharu, Pasir Mas, Tanah Merah, Machang, Gua Musang',
    postalCodes: '15000–18500',
    shippingCost: '1B: RM 0 Free Express · 2B: RM 0 Free · 3B: RM 0 Priority VIP',
    paymentModes: 'COD, DuitNow Instant QR, FPX Online Banking',
  },
  {
    num: '12',
    stateName: 'Terengganu Darul Iman',
    hubSlug: 'terengganu-kuala-terengganu',
    href: '/malaysia-delivery/terengganu-kuala-terengganu/',
    zoneLabel: 'EAST COAST EXPRESS ZONE',
    transitWindow: '1–2 Business Days LPT2 Highway Dispatch',
    keyDistricts: 'Kuala Terengganu, Gong Badak, Chukai (Kemaman), Kerteh, Paka, Dungun, Marang, Jerteh (Besut)',
    postalCodes: '20000–24300',
    shippingCost: '1B: RM 0 Free Express · 2B: RM 0 Free · 3B: RM 0 Priority VIP',
    paymentModes: 'COD, DuitNow Instant QR, FPX Online Banking',
  },
  {
    num: '13',
    stateName: 'Perlis Indera Kayangan',
    hubSlug: 'perlis-kangar',
    href: '/malaysia-delivery/perlis-kangar/',
    zoneLabel: 'NORTHERN CORRIDOR EXPRESS',
    transitWindow: '1–2 Business Days Northern Express Courier',
    keyDistricts: 'Kangar, Arau, Kuala Perlis, Padang Besar, Simpang Empat',
    postalCodes: '01000–02800',
    shippingCost: '1B: RM 0 Free Express · 2B: RM 0 Free · 3B: RM 0 Priority VIP',
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
    keyDistricts: 'Kuching, Petra Jaya, Kota Samarahan, Miri, Sibu, Bintulu, Sarikei, Sri Aman, Limbang, Kapit',
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
    keyDistricts: 'Victoria (Bandar Labuan), Financial Park Complex, Rancha-Rancha Offshore Logistics Hub, Patau-Patau',
    postalCodes: '87000–87033',
    shippingCost: '1B: RM 12 Air Subsidized · 2B (RM 318): RM 0 FREE · 3B (RM 477): RM 0 FREE Priority Air',
    paymentModes: 'FPX Online Banking, DuitNow Instant QR, Selected COD',
  },
];

export const HAMMER_FAQS = [
  {
    index: '01',
    category: 'VEGETARIAN CAPSULE SPECIFICATION',
    questionEn: "What does '20 Veg. Capsules' on the front of the Hammer of Thor bottle label mean?",
    answerEn:
      "The official green-and-gold '20 Veg. Capsules' seal on Hammer of Thor (SKU: ONYX-HT-20, MPN: HT-TRIB-20MY, GTIN-13: 9550000102028) certifies that every 500mg capsule shell is manufactured from 100% plant-derived Hypromellose (USP-grade HPMC pine and cotton cellulose) with zero bovine, porcine, or marine animal gelatin. Beyond meeting strict vegetarian and clean-label preferences in Malaysia, HPMC shells maintain a low internal moisture content (< 6%) that prevents hygroscopic botanical extracts like 60%-saponin Tribulus Terrestris from clumping in Malaysia's humid tropical climate.",
  },
  {
    index: '02',
    category: 'BOTANICAL STANDARDIZATION',
    questionEn: 'Why is Tribulus Terrestris highlighted on the front label of Hammer of Thor, and what are the exact mg dosages?',
    answerEn:
      "Unlike generic multi-herb blends where Tribulus is a trace secondary dusting, Hammer of Thor is engineered around a 200mg standardized Tribulus Terrestris fruit and aerial extract (standardized to 60% steroidal saponins rich in protodioscin). Each 500mg vegetarian capsule combines six exact actives: (1) 200mg 60%-Saponin Tribulus Terrestris, (2) 100mg 10:1 Andean Maca Root, (3) 80mg Plant-Fermented L-Arginine Free Base, (4) 60mg Panax Ginseng (10% Ginsenosides), (5) 45mg Malaysian Tongkat Ali (100:1 Eurycoma longifolia), and (6) 15mg Chelated Zinc Bisglycinate.",
  },
  {
    index: '03',
    category: 'FORMULATION SELECTION',
    questionEn: 'Should I choose Hammer of Thor or Horsemen since both contain 20 capsules at RM 159?',
    answerEn:
      "Both Hammer of Thor (SKU: ONYX-HT-20) and Horsemen (SKU: ONYX-HM-20) provide 20 capsules × 500mg at the uniform RM 159 price with a Day-18 refill reminder, but they serve distinct priorities. Choose Hammer of Thor if you specifically require 100% plant-derived HPMC vegetarian capsules ('20 Veg. Capsules') and want a 200mg 60%-saponin Tribulus Terrestris + 15mg Chelated Zinc matrix geared toward daily physical drive, muscular recovery after gym workouts, and steady evening stamina. Choose Horsemen if you prioritize rapid 45–60 minute pre-evening readiness driven by a higher 150mg 100:1 Tongkat Ali + 100mg Black Maca + 80mg Epimedium profile.",
  },
  {
    index: '04',
    category: 'DAY-18 REFILL PROTOCOL',
    questionEn: 'How does the Day-18 Refill Reminder Calendar Integration work for the 20-capsule bottle?',
    answerEn:
      "Because each bottle of Hammer of Thor contains exactly 20 plant-origin HPMC vegetarian capsules (a concentrated 20-day cycle at 1 capsule daily), taking 1 capsule per day leaves you with 2 remaining capsules on Day 18. To ensure your steroidal saponin and chelated zinc saturation never drops between bottles, our Day-18 Refill Protocol lets you add a 1-click Google Calendar alert (+18 days for 1 bottle, +36 days for 2 bottles, +54 days for 3 bottles) or request an automated concierge check-in via sales@onyxmen.my so your next plain-parcel dispatch arrives before Day 20.",
  },
  {
    index: '05',
    category: 'OFFICIAL MALAYSIA PRICING',
    questionEn: 'What are the official bundle prices for Hammer of Thor on Onyxmen.my?',
    answerEn:
      "Onyxmen Malaysia enforces transparent, uniform apothecary pricing across all formulations: 1 Bottle (20 Veg. Capsules / 20-Day Single Cycle Reserve) is RM 159 (159.00 MYR) with Free Discreet Express Shipping across Peninsular Malaysia (RM 12 subsidized air freight to Sabah, Sarawak & Labuan); 2 Bottles (40 Veg. Capsules / 40-Day Sustained Saponin Protocol) is RM 318 (318.00 MYR) with 100% Free Nationwide Malaysia Shipping including Sabah, Sarawak & Labuan; and 3 Bottles (60 Veg. Capsules / 60-Day Complete Vitality Mastery Vault) is RM 477 (477.00 MYR) with Priority Free Nationwide Dispatch and VIP Day-54 Refill Concierge.",
  },
  {
    index: '06',
    category: 'AUTHENTICITY VERIFICATION',
    questionEn: 'How can I distinguish authentic Hammer of Thor from Onyxmen.my against cheap counterfeit bottles online?',
    answerEn:
      "Authentic Hammer of Thor distributed exclusively through https://www.onyxmen.my carries SKU ONYX-HT-20, MPN HT-TRIB-20MY, and GTIN-13 9550000102028. Visually, it features a high-gloss obsidian black bottle with a precision-milled metallic gold cap, gold crest emblem, crisp front typography reading 'HAMMER OF THOR — Men's Health — Tribulus Terrestris — 20 Veg. Capsules', a green vegetarian seal badge, an induction heat-sealed mouth, and an internal food-grade silica desiccant canister. Every authentic bottle is priced strictly at RM 159 and verifiable via sales@onyxmen.my or info@onyxmen.my.",
  },
  {
    index: '07',
    category: 'DISCREET SHIPPING & PRIVACY',
    questionEn: 'Is my Hammer of Thor parcel 100% discreet when delivered to a Kuala Lumpur condo guardhouse or office reception?',
    answerEn:
      "Yes, 100% discreet. Every Hammer of Thor order is sealed inside an opaque, tear-resistant matte security mailer with zero brand logos, zero bottle illustrations, and zero mention of 'Hammer of Thor', 'Onyxmen', or men's supplements on the outer parcel or courier airway bill. The sender is listed neutrally as 'OM Fulfilment Logistics' with description 'Personal Nutritional Goods — Reference #HT20', making it completely private for condominium concierges in Mont Kiara/Bangsar, corporate mailrooms in KLCC/Penang, or family residences nationwide.",
  },
  {
    index: '08',
    category: 'PAYMENT & COD METHODS',
    questionEn: 'Can I pay via Cash on Delivery (COD), DuitNow QR, or FPX Online Banking in Malaysia?',
    answerEn:
      "Yes. You can reserve Hammer of Thor in 10 seconds using our Express Discreet Order Drawer (which dispatches directly to our fulfilment desk at waleedshoaibofficial@gmail.com and sales@onyxmen.my) and choose: (1) Instant DuitNow QR / FPX Online Banking (Maybank2u, CIMB Clicks, Public Bank, RHB, Hong Leong, Bank Islam) for fastest same-day dispatch, or (2) Cash on Delivery (COD Malaysia), where you inspect your sealed plain parcel upon courier arrival before paying.",
  },
  {
    index: '09',
    category: 'CLEAN FORMULATION SAFETY',
    questionEn: 'Does Hammer of Thor contain any undeclared synthetic drugs, Sildenafil/Tadalafil, or banned stimulants?',
    answerEn:
      "No. Hammer of Thor (SKU: ONYX-HT-20) is a 100% botanical, amino-acid, and chelated mineral dietary supplement formulated for adult men (18+). It contains zero synthetic PDE5 inhibitors, zero exogenous hormones, zero animal gelatin, and zero harsh synthetic stimulants. Because it relies on standardized Tribulus Terrestris saponins, Andean Maca, Plant-Fermented L-Arginine, Panax Ginseng, Malaysian Tongkat Ali, and Zinc Bisglycinate, it does not trigger the facial flushing, visual tinting, or rebound headaches associated with illicit chemical adulterants.",
  },
  {
    index: '10',
    category: 'TRAINING & STACKING PROTOCOL',
    questionEn: 'How should I time Hammer of Thor with gym resistance workouts, or stack it with Magnum Pump XR?',
    answerEn:
      "For daily saponin and mineral conditioning (Protocol A), take 1 vegetarian capsule 30 minutes after dinner with 250ml of water. On resistance-training days or active evenings (Protocol B), take 1 vegetarian capsule 45 minutes prior to physical exertion with 300ml of water. Many experienced users in Kuala Lumpur, Selangor, Penang, and Johor Bahru also run the 'Dual Saponin + Nitric Oxide Stack': taking 1 Hammer of Thor vegetarian capsule after dinner for daily Tribulus/Zinc conditioning, while using Magnum Pump XR (30 Black Capsules) 30 minutes before workouts for maximum L-Arginine/L-Citrulline vascular pump.",
  },
];

/**
 * Builds the comprehensive @graph JSON-LD specifically for https://www.onyxmen.my/hammer-of-thor-malaysia/
 * Includes: Organization, WebSite, OfferShippingDetails, MerchantReturnPolicy, ItemPage,
 * Product + DietarySupplement, ProductGroup (1/2/3 Bottles), FAQPage (10 Q&As), and BreadcrumbList.
 */
export function buildHammerEnSchemaGraph() {
  const pageUrl = HAMMER_CONSTANTS.canonicalUrl;
  const productNodeId = `${pageUrl}#product`;
  const productGroupId = `${pageUrl}#product-group`;

  const orgNode = buildOrganizationSchema();
  const webSiteNode = buildWebSiteSchema('en-MY');
  const shippingDetailsNode = buildShippingDetailsNode();
  const returnPolicyNode = buildReturnPolicyNode();

  const images = [
    `https://www.onyxmen.my${HAMMER_CONSTANTS.assets.stageWebp}`,
    `https://www.onyxmen.my${HAMMER_CONSTANTS.assets.stagePng}`,
    `https://www.onyxmen.my${HAMMER_CONSTANTS.assets.portraitWebp}`,
    `https://www.onyxmen.my${HAMMER_CONSTANTS.assets.portraitPng}`,
    `https://www.onyxmen.my${HAMMER_CONSTANTS.assets.cutoutWebp}`,
    `https://www.onyxmen.my${HAMMER_CONSTANTS.assets.cutoutPng}`,
  ];

  const brandNode = {
    '@type': 'Brand',
    '@id': BRAND_ID,
    name: 'Onyxmen',
    url: 'https://www.onyxmen.my',
  };

  const sellerNode = {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: 'Onyxmen Malaysia',
    url: 'https://www.onyxmen.my',
    email: 'sales@onyxmen.my',
  };

  const activeIngredientsList = [
    'Tribulus terrestris Standardized Extract (200mg — 60% Steroidal Saponins / Protodioscin Fraction)',
    'Lepidium meyenii Andean Maca Root Extract (100mg — 10:1 Concentrated Tuber)',
    'Plant-Fermented L-Arginine Free Base (80mg — 99.2% Pure Amino Acid)',
    'Panax ginseng Standardized Root Extract (60mg — 10% Ginsenoside Phytocomplex)',
    'Eurycoma longifolia Malaysian Tongkat Ali Root Extract (45mg — 100:1 Aqueous Extract)',
    'Zinc Bisglycinate Chelate (15mg — High-Absorption Chelated Elemental Zinc)',
  ];

  const singleBottleOffer = {
    '@type': 'Offer',
    '@id': `${pageUrl}#offer-1-bottle`,
    url: pageUrl,
    name: 'Hammer of Thor — 1 Bottle (20 Veg. Capsules × 500mg — Single 20-Day Tribulus Reserve)',
    sku: HAMMER_CONSTANTS.sku,
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
  };

  const variantTiers = [
    {
      bottles: 1,
      capsules: 20,
      days: 20,
      refillDay: 18,
      price: '159.00',
      skuSuffix: '1B',
      name: 'Hammer of Thor — 1 Bottle Single 20-Veg-Capsule Tribulus Reserve (20 Veg. Capsules)',
    },
    {
      bottles: 2,
      capsules: 40,
      days: 40,
      refillDay: 36,
      price: '318.00',
      skuSuffix: '2B',
      name: 'Hammer of Thor — 2 Bottles Sustained Saponin Vegetarian Protocol (40 Veg. Capsules · Free Nationwide Shipping)',
    },
    {
      bottles: 3,
      capsules: 60,
      days: 60,
      refillDay: 54,
      price: '477.00',
      skuSuffix: '3B',
      name: 'Hammer of Thor — 3 Bottles Complete 60-Day Vegetarian Vitality Vault (60 Veg. Capsules · Priority VIP Dispatch)',
    },
  ];

  const hasVariantNodes = variantTiers.map((tier) => ({
    '@type': ['Product', 'DietarySupplement'],
    '@id': `${pageUrl}#variant-${tier.bottles}-bottle`,
    name: tier.name,
    sku: `${HAMMER_CONSTANTS.sku}-${tier.skuSuffix}`,
    mpn: `${HAMMER_CONSTANTS.mpn}-${tier.skuSuffix}`,
    gtin13: HAMMER_CONSTANTS.gtin13,
    image: images,
    brand: brandNode,
    isVariantOf: {
      '@id': productGroupId,
    },
    size: `${tier.bottles} ${tier.bottles === 1 ? 'Bottle' : 'Bottles'} (${tier.capsules} Plant-Origin HPMC Vegetarian Capsules)`,
    activeIngredient: activeIngredientsList.join(', '),
    targetPopulation: 'Adult Men (18+)',
    isProprietary: false,
    legalStatus: 'Botanical Dietary Supplement — 100% Plant-Origin HPMC Vegetarian Capsules',
    offers: {
      '@type': 'Offer',
      '@id': `${pageUrl}#offer-${tier.bottles}-bottle`,
      url: pageUrl,
      sku: `${HAMMER_CONSTANTS.sku}-${tier.skuSuffix}`,
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

  const mainProductNode = {
    '@type': ['Product', 'DietarySupplement'],
    '@id': productNodeId,
    name: "Hammer of Thor — Men's Health Tribulus Terrestris — 20 Veg. Capsules (500mg Standardized Saponin & Chelated Zinc Matrix)",
    alternateName: [
      'Hammer of Thor Malaysia',
      'Hammer of Thor 20 Veg. Capsules',
      'Onyxmen Hammer of Thor Tribulus Terrestris',
    ],
    description:
      "Authentic Hammer of Thor (Men's Health — Tribulus Terrestris — 20 Veg. Capsules, SKU: ONYX-HT-20, MPN: HT-TRIB-20MY, GTIN-13: 9550000102028) by Onyxmen Malaysia. Encapsulated in 100% plant-derived HPMC vegetarian shells (zero animal gelatin), each 500mg capsule delivers 200mg of 60%-Saponin Tribulus Terrestris, 100mg Andean Maca Root, 80mg Plant-Fermented L-Arginine, 60mg Panax Ginseng, 45mg Malaysian Tongkat Ali (100:1), and 15mg Chelated Zinc Bisglycinate. Official price RM 159.00 per bottle with Day-18 refill reminder and 100% plain unmarked parcel delivery across all 16 Malaysia states.",
    disambiguatingDescription:
      'Oral botanical and chelated mineral dietary supplement in a 20-vegetarian-capsule bottle (HPMC plant-cellulose shells) for adult men (18+) in Malaysia. Not a hardware tool, weapon replica, or synthetic pharmaceutical drug.',
    url: pageUrl,
    inLanguage: 'en-MY',
    sku: HAMMER_CONSTANTS.sku,
    mpn: HAMMER_CONSTANTS.mpn,
    gtin13: HAMMER_CONSTANTS.gtin13,
    brand: brandNode,
    manufacturer: {
      '@id': ORG_ID,
    },
    image: images,
    category:
      'Health & Beauty > Health Care > Fitness & Nutrition > Vitamins & Supplements > Botanical Dietary Supplements',
    isVariantOf: {
      '@id': productGroupId,
    },
    activeIngredient: activeIngredientsList,
    nonProprietaryName: activeIngredientsList.join('; '),
    recommendedIntake: {
      '@type': 'RecommendedDoseSchedule',
      doseValue: 1,
      doseUnit: 'Vegetarian Capsule (500mg HPMC Plant Shell)',
      frequency:
        'Take 1 vegetarian capsule daily 30 minutes after dinner with 250ml water for 20-day saponin conditioning, or 45 minutes prior to resistance training / evening activity with 300ml water.',
      targetPopulation: 'Adult Men (18+)',
    },
    targetPopulation: 'Adult Men (18+)',
    isProprietary: false,
    legalStatus: 'Botanical & Mineral Dietary Supplement (100% Plant-Origin HPMC Vegetarian Capsules)',
    safetyConsideration:
      'Botanical, amino-acid, and mineral dietary supplement formulated strictly for adult men (18+). Encapsulated in 100% plant-origin hypromellose (HPMC) vegetarian capsules free from animal gelatin. Not intended to diagnose, treat, cure, or prevent any disease.',
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Capsule Shell Material',
        value: '100% Plant-Derived Hypromellose (USP-Grade HPMC Vegetarian Capsule — Zero Animal Gelatin)',
      },
      {
        '@type': 'PropertyValue',
        name: 'Capsule Count & Potency',
        value: '20 Veg. Capsules × 500mg (10,000mg Total Bottle Active Potency)',
      },
      {
        '@type': 'PropertyValue',
        name: 'Refill Cycle Protocol',
        value: 'Day-18 Automated Refill Reminder Calendar Integration (20-Day Cycle)',
      },
      {
        '@type': 'PropertyValue',
        name: 'Discreet Parcel Protocol',
        value: '100% Unmarked Matte Security Mailer · Sender: OM Fulfilment Logistics',
      },
    ],
    offers: singleBottleOffer,
  };

  const productGroupNode = {
    '@type': 'ProductGroup',
    '@id': productGroupId,
    name: 'Hammer of Thor (20 Veg. Capsules) — Official Multi-Bottle Protocol Collection (1, 2 & 3 Bottles)',
    description:
      'Official Onyxmen Malaysia multi-bottle protocol tiers for Hammer of Thor (SKU: ONYX-HT-20, MPN: HT-TRIB-20MY): 1 Bottle (20 Veg. Capsules) = RM 159.00, 2 Bottles (40 Veg. Capsules) = RM 318.00, 3 Bottles (60 Veg. Capsules) = RM 477.00.',
    url: pageUrl,
    productGroupID: `${HAMMER_CONSTANTS.sku}-GROUP`,
    brand: brandNode,
    variesBy: ['https://schema.org/size'],
    hasVariant: hasVariantNodes,
  };

  const itemPageNode = {
    '@type': 'ItemPage',
    '@id': `${pageUrl}#webpage`,
    url: pageUrl,
    name: "Hammer of Thor Malaysia (20 Veg. Capsules) — Men's Health Tribulus Terrestris Supplement | RM 159 Onyxmen.my",
    description:
      "Order authentic Hammer of Thor (Men's Health — Tribulus Terrestris — 20 Veg. Capsules, SKU: ONYX-HT-20, MPN: HT-TRIB-20MY) for RM 159 at Onyxmen.my. 100% plant-origin HPMC vegetarian capsules with 60%-Saponin Tribulus, Maca, Plant-Fermented L-Arginine, Panax Ginseng, Malaysian Tongkat Ali & Chelated Zinc.",
    inLanguage: 'en-MY',
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: { '@id': productNodeId },
    breadcrumb: { '@id': `${pageUrl}#breadcrumb` },
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '#ms103-hero-summary', '#ms104-botanical-lead', '#ms106-faq-heading'],
    },
  };

  const breadcrumbNode = {
    '@type': 'BreadcrumbList',
    '@id': `${pageUrl}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Onyxmen Malaysia (Home)',
        item: 'https://www.onyxmen.my/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Apothecary Formulations',
        item: 'https://www.onyxmen.my/products/',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: "Hammer of Thor (Men's Health — Tribulus Terrestris — 20 Veg. Capsules)",
        item: pageUrl,
      },
    ],
  };

  const faqPageNode = {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    url: pageUrl,
    inLanguage: 'en-MY',
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: HAMMER_FAQS.map((faq, idx) => ({
      '@type': 'Question',
      '@id': `${pageUrl}#faq-question-${idx + 1}`,
      name: faq.questionEn,
      acceptedAnswer: {
        '@type': 'AcceptedAnswer',
        text: faq.answerEn,
      },
    })),
  };

  return {
    '@context': 'https://schema.org',
    '@graph': [
      orgNode,
      webSiteNode,
      shippingDetailsNode,
      returnPolicyNode,
      itemPageNode,
      mainProductNode,
      productGroupNode,
      breadcrumbNode,
      faqPageNode,
    ],
  };
}

/**
 * Dedicated Flagship Page Scoped Architectural Styles (MS-103 to MS-106).
 * Strictly enforces Rule #29 & Rule #30:
 * - Paradigm A: 100vw x 100vh Full-Bleed Obsidian Hero Stage
 * - Paradigm D: 50vw / 50vw Pinned Split-Screen Botanical Monograph Stage
 * - Architectural Hairline Ledgers & Editorial Spreads
 * - ZERO banned card grids, ZERO pill badges, ZERO #FAF8F5, ZERO Plus Jakarta Sans
 */
export const HAMMER_PAGE_SCOPED_CSS = `
<style id="onyxman-hammer-flagship-css">
  /* ==========================================================================
     HAMMER OF THOR EN-MY FLAGSHIP ARCHITECTURAL STAGE STYLES (MS-103..MS-106)
     ========================================================================== */

  .hammer-breadcrumb-bar {
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

  .hammer-breadcrumb-list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.65rem;
    list-style: none;
  }

  .hammer-breadcrumb-list a:hover {
    color: var(--gold-foil-bright);
  }

  .hammer-breadcrumb-current {
    color: var(--gold-champagne);
    font-weight: 600;
  }

  .hammer-veg-crest-banner {
    display: inline-flex;
    align-items: center;
    gap: 0.65rem;
    padding: 0.38rem 0.9rem;
    border-left: 2px solid var(--emerald-vitality);
    background: linear-gradient(90deg, rgba(46, 139, 87, 0.22) 0%, rgba(11, 12, 16, 0.75) 100%);
    color: var(--text-silk-ivory);
    font-family: var(--font-technical);
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
  }

  .hammer-veg-crest-dot {
    width: 8px;
    height: 8px;
    background-color: var(--emerald-vitality);
    box-shadow: 0 0 10px var(--emerald-vitality);
    display: inline-block;
  }

  /* MS-103: 100vw x 100vh Full-Bleed Obsidian Hero Stage */
  .hammer-hero-cinema {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    background-color: var(--bg-abyssal-obsidian);
    background-image:
      radial-gradient(circle at 68% 42%, rgba(212, 175, 55, 0.16) 0%, rgba(46, 139, 87, 0.07) 28%, rgba(11, 12, 16, 0.86) 58%, #050507 100%),
      linear-gradient(180deg, #050507 0%, #0B0C10 64%, #050507 100%);
    padding: clamp(2.25rem, 5vh, 4.5rem) var(--gutter-cinema) var(--gutter-vertical);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: var(--hairline-rule);
    overflow: hidden;
  }

  .hammer-hero-cinema__ambient-watermark {
    position: absolute;
    top: 12%;
    right: -2vw;
    z-index: 1;
    font-family: var(--font-display);
    font-size: clamp(6rem, 15vw, 17rem);
    font-weight: 600;
    line-height: 0.85;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(212, 175, 55, 0.038);
    pointer-events: none;
    user-select: none;
    white-space: nowrap;
  }

  .hammer-hero-cinema__stage-layout {
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

  .hammer-hero-cinema__editorial-wing {
    flex: 1 1 560px;
    max-width: 780px;
    display: flex;
    flex-direction: column;
    gap: 1.55rem;
  }

  .hammer-hero-cinema__bottle-wing {
    flex: 1 1 440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    min-height: 620px;
  }

  .hammer-hero-cinema__halo {
    position: absolute;
    width: clamp(320px, 38vw, 560px);
    height: clamp(320px, 38vw, 560px);
    background: radial-gradient(
      circle,
      rgba(212, 175, 55, 0.22) 0%,
      rgba(46, 139, 87, 0.09) 38%,
      rgba(5, 5, 7, 0) 72%
    );
    pointer-events: none;
    z-index: 1;
  }

  .hammer-hero-cinema__bottle-picture {
    position: relative;
    z-index: 2;
    width: 100%;
    max-width: 580px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hammer-hero-cinema__bottle-img {
    width: 100%;
    max-height: 72vh;
    object-fit: contain;
    mask-image: radial-gradient(circle at 50% 50%, #000000 74%, transparent 99%);
    -webkit-mask-image: radial-gradient(circle at 50% 50%, #000000 74%, transparent 99%);
    filter: drop-shadow(0 36px 72px rgba(0, 0, 0, 0.95));
    transition: transform 640ms var(--ease-cinema);
  }

  .hammer-hero-cinema__bottle-wing:hover .hammer-hero-cinema__bottle-img {
    transform: translateY(-6px) scale(1.015);
  }

  .hammer-hero-cinema__caption-strip {
    position: relative;
    z-index: 3;
    width: 100%;
    max-width: 540px;
    margin-top: 1.25rem;
    padding-top: 1rem;
    border-top: var(--hairline-rule);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.85rem;
    font-family: var(--font-technical);
    font-size: 0.73rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--text-muted-alabaster);
  }

  .hammer-hero-cinema__subtitle-transcription {
    font-family: var(--font-architectural);
    font-size: clamp(1.05rem, 1.45vw, 1.38rem);
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--gold-foil-bright);
    padding-left: 1rem;
    border-left: 2px solid var(--gold-champagne);
  }

  .hammer-hero-cinema__hpmc-callout {
    padding: 1.2rem 1.4rem;
    background: linear-gradient(90deg, rgba(18, 20, 28, 0.94) 0%, rgba(11, 12, 16, 0.65) 100%);
    border-left: 2px solid var(--emerald-vitality);
    border-top: var(--hairline-subtle);
    border-bottom: var(--hairline-subtle);
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
  }

  .hammer-hero-cinema__hpmc-title {
    font-family: var(--font-technical);
    font-size: 0.74rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #5CD68D;
  }

  .hammer-hero-cinema__hpmc-text {
    font-size: 0.92rem;
    color: var(--text-silk-ivory);
    line-height: 1.6;
  }

  .hammer-hero-cinema__cta-cluster {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.15rem;
    padding-top: 0.5rem;
  }

  .hammer-hero-cinema__telemetry-ribbon {
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

  .hammer-telemetry-node {
    flex: 1 1 210px;
    display: flex;
    flex-direction: column;
    gap: 0.28rem;
    padding-left: 0.95rem;
    border-left: var(--hairline-subtle);
  }

  .hammer-telemetry-node__label {
    font-family: var(--font-technical);
    font-size: 0.68rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--gold-champagne);
  }

  .hammer-telemetry-node__value {
    font-family: var(--font-display);
    font-size: 1.35rem;
    color: var(--text-silk-ivory);
    line-height: 1.15;
  }

  .hammer-telemetry-node__sub {
    font-size: 0.78rem;
    color: var(--text-muted-alabaster);
  }

  /* MS-104: Paradigm D Pinned 50vw / 50vw Botanical Breakdown Stage */
  .hammer-monograph-entry {
    padding: 2.35rem 0;
    border-bottom: var(--hairline-rule);
    display: flex;
    flex-direction: column;
    gap: 1.05rem;
  }

  .hammer-monograph-entry:first-of-type {
    border-top: var(--hairline-rule);
  }

  .hammer-monograph-entry__header {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;
  }

  .hammer-monograph-entry__index-group {
    display: inline-flex;
    align-items: baseline;
    gap: 0.85rem;
  }

  .hammer-monograph-entry__index {
    font-family: var(--font-technical);
    font-size: 0.75rem;
    letter-spacing: 0.24em;
    color: var(--gold-champagne);
  }

  .hammer-monograph-entry__title {
    font-family: var(--font-display);
    font-size: clamp(1.65rem, 2.4vw, 2.25rem);
    font-weight: 500;
    color: var(--text-silk-ivory);
  }

  .hammer-monograph-entry__dosage-stamp {
    font-family: var(--font-display);
    font-size: 1.75rem;
    color: var(--gold-foil-bright);
    letter-spacing: 0.02em;
  }

  .hammer-monograph-entry__scientific {
    font-family: var(--font-display);
    font-style: italic;
    font-size: 1.08rem;
    color: var(--gold-champagne);
  }

  .hammer-monograph-entry__specs-ledger {
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
    padding: 0.95rem 0;
    border-top: var(--hairline-subtle);
    border-bottom: var(--hairline-subtle);
    font-size: 0.84rem;
  }

  .hammer-monograph-entry__spec-line {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.75rem;
  }

  .hammer-monograph-entry__spec-key {
    font-family: var(--font-technical);
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--text-ash-silver);
  }

  .hammer-monograph-entry__spec-val {
    color: var(--text-silk-ivory);
    text-align: right;
  }

  .hammer-monograph-entry__body {
    font-size: 0.96rem;
    color: var(--text-muted-alabaster);
    line-height: 1.7;
  }

  .hammer-monograph-entry__footnote {
    font-size: 0.82rem;
    color: var(--gold-foil-bright);
    padding-left: 0.85rem;
    border-left: 1px solid var(--gold-champagne);
  }

  /* HPMC Rapid Dissolution Science Stage (MS-104 Part B) */
  .hammer-hpmc-science-stage {
    background-color: var(--bg-velvet-charcoal);
    background-image: radial-gradient(circle at 20% 30%, rgba(46, 139, 87, 0.12) 0%, rgba(5, 5, 7, 0.94) 70%);
    padding: var(--gutter-vertical) var(--gutter-cinema);
    border-bottom: var(--hairline-rule);
  }

  .hammer-stage-container {
    width: 100%;
    max-width: 1680px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .hammer-stage-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: var(--hairline-rule);
  }

  .hammer-stage-header__left {
    flex: 1 1 560px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .hammer-stage-header__right {
    flex: 1 1 420px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  /* MS-105: 20-Day Chronology, Day-18 Refill Protocol, Comparison & 16-State Ledger */
  .hammer-cycle-stage {
    background-color: var(--bg-abyssal-obsidian);
    padding: var(--gutter-vertical) var(--gutter-cinema);
    border-bottom: var(--hairline-rule);
  }

  .hammer-refill-concierge-band {
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

  .hammer-refill-concierge-band__copy {
    flex: 1 1 540px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .hammer-refill-concierge-band__actions {
    flex: 1 1 380px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .hammer-comparison-stage {
    background-color: var(--bg-smoked-onyx);
    padding: var(--gutter-vertical) var(--gutter-cinema);
    border-bottom: var(--hairline-rule);
  }

  .hammer-matrix-scroll {
    width: 100%;
    overflow-x: auto;
    border-top: var(--hairline-rule);
    border-bottom: var(--hairline-rule);
  }

  .hammer-matrix-table {
    width: 100%;
    min-width: 980px;
    border-collapse: collapse;
    text-align: left;
    font-size: 0.9rem;
  }

  .hammer-matrix-table th,
  .hammer-matrix-table td {
    padding: 1.35rem 1.15rem;
    border-bottom: var(--hairline-subtle);
    vertical-align: top;
  }

  .hammer-matrix-table thead th {
    font-family: var(--font-technical);
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--gold-champagne);
    border-bottom: var(--hairline-rule);
    background-color: rgba(5, 5, 7, 0.65);
  }

  .hammer-matrix-table__highlight-col {
    background: linear-gradient(180deg, rgba(212, 175, 55, 0.11) 0%, rgba(46, 139, 87, 0.05) 100%);
    border-left: var(--hairline-rule);
    border-right: var(--hairline-rule);
  }

  .hammer-states-stage {
    background-color: var(--bg-abyssal-obsidian);
    padding: var(--gutter-vertical) var(--gutter-cinema);
    border-bottom: var(--hairline-rule);
  }

  /* MS-106: 10-Question Interactive FAQ Accordion Stage */
  .hammer-faq-stage {
    background-color: var(--bg-smoked-onyx);
    padding: var(--gutter-vertical) var(--gutter-cinema);
    border-bottom: var(--hairline-rule);
  }

  .hammer-faq-ledger {
    width: 100%;
    border-top: var(--hairline-rule);
  }

  .hammer-faq-item {
    border-bottom: var(--hairline-subtle);
    transition: background-color 220ms ease;
  }

  .hammer-faq-item[open] {
    background-color: rgba(212, 175, 55, 0.04);
    border-bottom-color: var(--gold-champagne);
  }

  .hammer-faq-summary {
    list-style: none;
    cursor: pointer;
    padding: 1.65rem 0.5rem;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .hammer-faq-summary::-webkit-details-marker {
    display: none;
  }

  .hammer-faq-summary__left {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 1.15rem;
  }

  .hammer-faq-summary__index {
    font-family: var(--font-technical);
    font-size: 0.74rem;
    letter-spacing: 0.22em;
    color: var(--gold-champagne);
    min-width: 3.2rem;
  }

  .hammer-faq-summary__category {
    font-family: var(--font-technical);
    font-size: 0.68rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #5CD68D;
  }

  .hammer-faq-summary__question {
    font-family: var(--font-display);
    font-size: clamp(1.35rem, 2vw, 1.8rem);
    color: var(--text-silk-ivory);
    font-weight: 500;
  }

  .hammer-faq-summary__icon {
    font-family: var(--font-technical);
    font-size: 1.25rem;
    color: var(--gold-foil-bright);
    transition: transform 260ms var(--ease-cinema);
  }

  .hammer-faq-item[open] .hammer-faq-summary__icon {
    transform: rotate(45deg);
  }

  .hammer-faq-answer {
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
    .hammer-faq-answer {
      padding-left: 0.5rem;
    }
    .hammer-hero-cinema__bottle-wing {
      min-height: 420px;
    }
  }
</style>
`;

/**
 * Renders Chapter 1 (MS-103): 100vw x 100vh Full-Bleed Obsidian Hero Stage for Hammer of Thor.
 */
export function renderMs103HeroStage() {
  return `
      <!-- =====================================================================
           CHAPTER 1 (MS-103): 100VW X 100VH FULL-BLEED OBSIDIAN HERO STAGE
           Product: Hammer of Thor (Men's Health — Tribulus Terrestris — 20 Veg. Capsules)
           SKU: ONYX-HT-20 | MPN: HT-TRIB-20MY | GTIN-13: 9550000102028
           ===================================================================== -->
      <section
        id="ms103-hammer-hero-stage"
        class="hammer-hero-cinema"
        aria-labelledby="ms103-hero-title"
        data-paradigm="A-100vw-100vh-obsidian-stage"
      >
        <div class="hammer-hero-cinema__ambient-watermark" aria-hidden="true">
          TRIBULUS · HPMC · XX
        </div>

        <!-- Architectural Breadcrumb & Vegetarian Capsule Certification Bar -->
        <div class="hammer-breadcrumb-bar">
          <nav aria-label="Breadcrumb">
            <ol class="hammer-breadcrumb-list">
              <li><a href="/">ONYXMEN MALAYSIA</a></li>
              <li aria-hidden="true">/</li>
              <li><a href="/products/">APOTHECARY VAULT</a></li>
              <li aria-hidden="true">/</li>
              <li class="hammer-breadcrumb-current" aria-current="page">
                HAMMER OF THOR (20 VEG. CAPSULES · SKU ONYX-HT-20)
              </li>
            </ol>
          </nav>

          <div class="hammer-veg-crest-banner">
            <span class="hammer-veg-crest-dot" aria-hidden="true"></span>
            <span>100% PLANT-ORIGIN HPMC VEGETARIAN CAPSULES · ZERO ANIMAL GELATIN</span>
          </div>
        </div>

        <!-- Primary 100vw x 100vh Hero Stage Split -->
        <div class="hammer-hero-cinema__stage-layout">
          <!-- Left Editorial & Conversion Wing -->
          <div class="hammer-hero-cinema__editorial-wing">
            <span class="editorial-kicker">
              FORMULATION II · HIGH-SAPONIN TRIBULUS SPECIALIST · 20 VEG. CAPSULES
            </span>

            <h1 id="ms103-hero-title" class="editorial-headline-xl">
              <span class="foil-champagne-text">Hammer of Thor</span> — Standardized Tribulus Terrestris &amp; Plant-Capsule Vitality Reserve
            </h1>

            <p class="hammer-hero-cinema__subtitle-transcription">
              Official Bottle Inscription: &ldquo;Men&rsquo;s Health &mdash; Tribulus Terrestris &mdash; 20 Veg. Capsules&rdquo;
            </p>

            <p id="ms103-hero-summary" class="editorial-lead-paragraph">
              Engineered specifically for adult men in Malaysia who demand a <strong>100% plant-derived vegetarian capsule</strong> without animal gelatin. Each 500mg hypromellose (HPMC) shell delivers <strong>200mg of 60%-Saponin Tribulus Terrestris</strong> synergized with Andean Maca Root, Plant-Fermented L-Arginine, Panax Ginseng, Malaysian Tongkat Ali, and Chelated Zinc Bisglycinate.
            </p>

            <!-- Plant-Based HPMC Vegetarian Capsule Specification Callout -->
            <div class="hammer-hero-cinema__hpmc-callout">
              <span class="hammer-hero-cinema__hpmc-title">
                PLANT-ORIGIN HPMC VEGETARIAN SHELL SPECIFICATION (100% FREE OF ANIMAL GELATIN)
              </span>
              <p class="hammer-hero-cinema__hpmc-text">
                Unlike conventional bovine or porcine gelatin capsules that absorb tropical humidity, soften, or cross-link in Malaysia&rsquo;s 30&deg;C+ climate, Hammer of Thor utilizes pharmaceutical-grade <strong>Hypromellose (HPMC) plant cellulose</strong>. Zero animal derivatives, zero gastric heaviness, and rapid 18-minute warm-water dissolution.
              </p>
            </div>

            <!-- Interactive 1 / 2 / 3 Bottle Tier Selector Strip (RM 159 / RM 318 / RM 477) -->
            <div
              class="tier-strip-group"
              role="radiogroup"
              aria-label="Select Hammer of Thor Multi-Bottle Protocol Tier"
              data-hero-tier-selector="hammer-of-thor"
            >
              <!-- Tier 1: 1 Bottle = RM 159 -->
              <button
                type="button"
                role="radio"
                aria-checked="false"
                class="tier-strip-option"
                data-open-order-drawer="true"
                data-order-product="hammer-of-thor"
                data-order-qty="1"
              >
                <div class="tier-strip-option__left">
                  <span class="tier-strip-option__eyebrow">
                    TIER 01 · SINGLE 20-DAY VEGETARIAN CYCLE · SKU ONYX-HT-20-1B
                  </span>
                  <strong class="tier-strip-option__title">
                    1 Bottle — 20 Plant-Origin Veg. Capsules (10,000mg Total Potency)
                  </strong>
                  <span class="tier-strip-option__subtitle">
                    Free Discreet Express Shipping across Peninsular Malaysia (RM 12 Sabah/Sarawak) · Day-18 Refill Alert
                  </span>
                </div>
                <span class="tier-strip-option__price">RM 159</span>
              </button>

              <!-- Tier 2: 2 Bottles = RM 318 (Default Highlighted Protocol) -->
              <button
                type="button"
                role="radio"
                aria-checked="true"
                class="tier-strip-option tier-strip-option--selected"
                data-open-order-drawer="true"
                data-order-product="hammer-of-thor"
                data-order-qty="2"
              >
                <div class="tier-strip-option__left">
                  <span class="tier-strip-option__eyebrow">
                    TIER 02 · MOST SELECTED IN KL, SELANGOR &amp; PENANG · SKU ONYX-HT-20-2B
                  </span>
                  <strong class="tier-strip-option__title">
                    2 Bottles — 40 Plant-Origin Veg. Capsules (40-Day Sustained Saponin Protocol)
                  </strong>
                  <span class="tier-strip-option__subtitle">
                    100% Free Nationwide Discreet Express Shipping (Including Sabah, Sarawak &amp; Labuan) · Day-36 Refill Alert
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
                data-order-product="hammer-of-thor"
                data-order-qty="3"
              >
                <div class="tier-strip-option__left">
                  <span class="tier-strip-option__eyebrow">
                    TIER 03 · COMPLETE 60-DAY VITALITY MASTERY VAULT · SKU ONYX-HT-20-3B
                  </span>
                  <strong class="tier-strip-option__title">
                    3 Bottles — 60 Plant-Origin Veg. Capsules (30,000mg Full Saponin Saturation)
                  </strong>
                  <span class="tier-strip-option__subtitle">
                    Priority VIP Discreet Dispatch + Free Nationwide Shipping + Day-54 Concierge Refill Check-In
                  </span>
                </div>
                <span class="tier-strip-option__price">RM 477</span>
              </button>
            </div>

            <!-- Primary Express Order Drawer Trigger & Botanical Anchor Links -->
            <div class="hammer-hero-cinema__cta-cluster">
              <button
                type="button"
                class="cta-foil-primary"
                data-open-order-drawer="true"
                data-order-product="hammer-of-thor"
                data-order-qty="2"
                aria-controls="onyxman-express-order-drawer"
              >
                <span>ACQUIRE HAMMER OF THOR · RM 159 / BOTTLE</span>
                <span aria-hidden="true">&rarr;</span>
              </button>

              <a href="#ms104-botanical-breakdown" class="cta-hairline-secondary">
                <span>INSPECT 500MG TRIBULUS &amp; HPMC MONOGRAPH</span>
                <span aria-hidden="true">&darr;</span>
              </a>

              <a href="#ms105-day18-refill-protocol" class="cta-hairline-secondary">
                <span>DAY-18 REFILL CALENDAR</span>
              </a>
            </div>
          </div>

          <!-- Right Studio Bottle Stage (/assets/products/hammer-of-thor-stage.webp) -->
          <div class="hammer-hero-cinema__bottle-wing">
            <div class="hammer-hero-cinema__halo" aria-hidden="true"></div>

            <picture class="hammer-hero-cinema__bottle-picture">
              <source
                srcset="/assets/products/hammer-of-thor-stage.webp"
                type="image/webp"
              />
              <img
                src="/assets/products/hammer-of-thor-stage.png"
                alt="Authentic Hammer of Thor Men's Health Tribulus Terrestris — 20 Veg. Capsules Official Onyxmen Malaysia Bottle (SKU ONYX-HT-20, RM 159)"
                width="900"
                height="1125"
                fetchpriority="high"
                decoding="async"
                class="hammer-hero-cinema__bottle-img"
              />
            </picture>

            <div class="hammer-hero-cinema__caption-strip">
              <span>VESSEL: GLOSS OBSIDIAN &amp; METALLIC GOLD CAP</span>
              <span>SEAL: GREEN &ldquo;20 VEG. CAPSULES&rdquo; CREST</span>
              <span>ORIGIN: ONYXMEN.MY OFFICIAL</span>
            </div>
          </div>
        </div>

        <!-- Bottom Architectural Telemetry Ribbon (Authentic Constants Verification) -->
        <div class="hammer-hero-cinema__telemetry-ribbon" role="region" aria-label="Hammer of Thor Official Product Specifications">
          <div class="hammer-telemetry-node">
            <span class="hammer-telemetry-node__label">REGISTRY IDENTIFIERS</span>
            <strong class="hammer-telemetry-node__value">SKU: ONYX-HT-20</strong>
            <span class="hammer-telemetry-node__sub">MPN: HT-TRIB-20MY · GTIN-13: 9550000102028</span>
          </div>

          <div class="hammer-telemetry-node">
            <span class="hammer-telemetry-node__label">CAPSULE ARCHITECTURE</span>
            <strong class="hammer-telemetry-node__value">20 Veg. Capsules × 500mg</strong>
            <span class="hammer-telemetry-node__sub">100% Plant-Origin HPMC · Zero Animal Gelatin</span>
          </div>

          <div class="hammer-telemetry-node">
            <span class="hammer-telemetry-node__label">LEAD BOTANICAL DRIVER</span>
            <strong class="hammer-telemetry-node__value">60%-Saponin Tribulus (200mg)</strong>
            <span class="hammer-telemetry-node__sub">+ Maca 100mg · L-Arginine 80mg · Ginseng 60mg · Tongkat Ali 45mg · Zinc 15mg</span>
          </div>

          <div class="hammer-telemetry-node">
            <span class="hammer-telemetry-node__label">REFILL CONTINUITY ENGINE</span>
            <strong class="hammer-telemetry-node__value">Day-18 Refill Reminder</strong>
            <span class="hammer-telemetry-node__sub">Automated Google Calendar &amp; Concierge Check-In</span>
          </div>

          <div class="hammer-telemetry-node">
            <span class="hammer-telemetry-node__label">DISCREET MALAYSIA DESK</span>
            <strong class="hammer-telemetry-node__value">OM Fulfilment Logistics</strong>
            <span class="hammer-telemetry-node__sub">sales@onyxmen.my · info@onyxmen.my · COD &amp; DuitNow QR</span>
          </div>
        </div>
      </section>
  `;
}

/**
 * Renders Chapter 2 (MS-104): Paradigm D Pinned 50vw / 50vw High-Saponin Botanical Breakdown
 * + Vegetarian HPMC Rapid Dissolution Science.
 */
export function renderMs104BotanicalAndHpmcStage() {
  const activesHtml = HAMMER_BOTANICAL_ACTIVES.map(
    (act) => `
            <!-- Botanical Active ${act.index}: ${act.name} (${act.dosageMg}mg) -->
            <article
              id="botanical-active-${act.code.toLowerCase()}"
              class="hammer-monograph-entry"
              data-botanical-code="${act.code}"
            >
              <div class="hammer-monograph-entry__header">
                <div class="hammer-monograph-entry__index-group">
                  <span class="hammer-monograph-entry__index">[${act.index} · ${act.code}]</span>
                  <h3 class="hammer-monograph-entry__title">${act.name}</h3>
                </div>
                <strong class="hammer-monograph-entry__dosage-stamp">
                  ${act.dosageMg} mg <span style="font-size:0.85rem;color:var(--text-ash-silver);">(${act.percentageOfCapsule})</span>
                </strong>
              </div>

              <p class="hammer-monograph-entry__scientific">
                ${act.scientificName}
              </p>

              <div class="hammer-monograph-entry__specs-ledger">
                <div class="hammer-monograph-entry__spec-line">
                  <span class="hammer-monograph-entry__spec-key">STANDARDIZATION ASSAY</span>
                  <span class="hammer-monograph-entry__spec-val">${act.standardization}</span>
                </div>
                <div class="hammer-monograph-entry__spec-line">
                  <span class="hammer-monograph-entry__spec-key">EXTRACTION RATIO &amp; GRADE</span>
                  <span class="hammer-monograph-entry__spec-val">${act.extractionRatio}</span>
                </div>
                <div class="hammer-monograph-entry__spec-line">
                  <span class="hammer-monograph-entry__spec-key">PHYSIOLOGICAL PATHWAY</span>
                  <span class="hammer-monograph-entry__spec-val">${act.molecularTarget}</span>
                </div>
              </div>

              <p class="hammer-monograph-entry__body">
                ${act.clinicalSummary}
              </p>

              <p class="hammer-monograph-entry__footnote">
                <strong>Tropical Humidity &amp; HPMC Synergy:</strong> ${act.tropicalAdvantage} <em>(${act.synergyPartner})</em>
              </p>
            </article>`
  ).join('\n');

  return `
      <!-- =====================================================================
           CHAPTER 2 (MS-104): PARADIGM D PINNED 50VW / 50VW HIGH-SAPONIN
           BOTANICAL BREAKDOWN + VEGETARIAN HPMC RAPID DISSOLUTION SCIENCE
           ===================================================================== -->
      <section
        id="ms104-botanical-breakdown"
        class="split-stage-5050"
        aria-labelledby="ms104-botanical-heading"
        data-paradigm="D-50vw-50vw-pinned-split-stage"
      >
        <!-- Left 50vw Sticky Visual Stage (/assets/products/hammer-of-thor-portrait.webp & cutout) -->
        <div class="split-stage-5050__visual-pane">
          <span class="split-stage-5050__index-watermark" aria-hidden="true">
            500 MG · VEG
          </span>

          <figure class="split-stage-5050__visual-figure">
            <picture>
              <source
                srcset="/assets/products/hammer-of-thor-portrait.webp"
                type="image/webp"
              />
              <img
                src="/assets/products/hammer-of-thor-portrait.png"
                alt="Hammer of Thor 20 Veg. Capsules Upright Studio Portrait — 500mg Standardized Tribulus Terrestris Botanical Matrix"
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
              <span>SINGLE CAPSULE MASS: 500 MG</span>
              <span>BOTTLE NET POTENCY: 10,000 MG</span>
            </div>
            <p style="font-size:0.82rem;color:var(--text-muted-alabaster);line-height:1.55;">
              Every Hammer of Thor bottle houses 20 plant-origin HPMC capsules sealed with an internal silica desiccant canister to protect furostanol saponins against equatorial moisture.
            </p>
            <div style="display:flex;justify-content:space-between;align-items:center;padding-top:0.5rem;">
              <button
                type="button"
                class="cta-hairline-secondary"
                data-open-order-drawer="true"
                data-order-product="hammer-of-thor"
                data-order-qty="1"
                style="padding:0.65rem 1.2rem;font-size:0.7rem;"
              >
                <span>RESERVE 1 BOTTLE · RM 159</span>
              </button>
              <button
                type="button"
                class="cta-foil-primary"
                data-open-order-drawer="true"
                data-order-product="hammer-of-thor"
                data-order-qty="2"
                style="padding:0.65rem 1.25rem;font-size:0.7rem;"
              >
                <span>2 BOTTLES · RM 318</span>
              </button>
            </div>
          </div>
        </div>

        <!-- Right 50vw Scrolling Narrative Monograph Pane -->
        <div class="split-stage-5050__narrative-pane">
          <span class="editorial-kicker">
            CHAPTER II · PARADIGM D BOTANICAL MONOGRAPH · 100% NON-PROPRIETARY DISCLOSURE
          </span>

          <h2 id="ms104-botanical-heading" class="editorial-headline-lg" style="margin-top:0.85rem;">
            Inside the 500mg <span class="foil-champagne-text">High-Saponin Tribulus</span> &amp; Vegetarian Phytocomplex
          </h2>

          <p id="ms104-botanical-lead" class="editorial-lead-paragraph" style="margin:1.15rem 0 2rem;">
            Zero hidden &ldquo;proprietary blends&rdquo; and zero inert fillers. Hammer of Thor discloses the exact milligram weight and standardization assay of all six active compounds totaling <strong>500mg per vegetarian capsule</strong> (<strong>10,000mg per 20-capsule bottle</strong>).
          </p>

          <!-- All 6 Botanical Monograph Entries -->
          <div class="hammer-monograph-collection">
            ${activesHtml}
          </div>

          <!-- Cumulative 500mg Verification Ledger Bar -->
          <div style="margin-top:2.25rem;padding:1.5rem;background-color:#0B0C10;border-left:2px solid var(--gold-champagne);display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:1.25rem;">
            <div>
              <span style="font-size:0.68rem;letter-spacing:0.2em;text-transform:uppercase;color:var(--gold-champagne);display:block;">
                QUANTITATIVE MASS VERIFICATION (SKU: ONYX-HT-20)
              </span>
              <strong style="font-family:var(--font-display);font-size:1.45rem;color:var(--text-silk-ivory);">
                200mg + 100mg + 80mg + 60mg + 45mg + 15mg = 500mg / Veg. Capsule
              </strong>
            </div>
            <button
              type="button"
              class="cta-foil-primary"
              data-open-order-drawer="true"
              data-order-product="hammer-of-thor"
              data-order-qty="2"
            >
              <span>ORDER 40-CAPSULE PROTOCOL · RM 318</span>
            </button>
          </div>
        </div>
      </section>

      <!-- =====================================================================
           MS-104 PART B: VEGETARIAN HPMC RAPID DISSOLUTION SCIENCE STAGE
           ===================================================================== -->
      <section
        id="ms104-hpmc-dissolution-science"
        class="hammer-hpmc-science-stage"
        aria-labelledby="ms104-hpmc-heading"
      >
        <div class="hammer-stage-container">
          <div class="hammer-stage-header">
            <div class="hammer-stage-header__left">
              <span class="editorial-kicker">
                PLANT-CELLULose ENCAPSULATION ENGINEERING · HYPROMELLOSE USP
              </span>
              <h2 id="ms104-hpmc-heading" class="editorial-headline-lg">
                Vegetarian <span class="foil-champagne-text">HPMC Rapid Dissolution</span> Science vs. Animal Gelatin in Tropical Malaysia
              </h2>
            </div>
            <div class="hammer-stage-header__right">
              <p style="color:var(--text-muted-alabaster);font-size:0.98rem;line-height:1.68;">
                Why does the Hammer of Thor bottle proudly carry the green <strong>&ldquo;20 Veg. Capsules&rdquo;</strong> designation? In Malaysia&rsquo;s 28&deg;C&ndash;34&deg;C equatorial climate, capsule shell chemistry determines whether standardized steroidal saponins remain potent or degrade into sticky, unabsorbable clumps.
              </p>
            </div>
          </div>

          <!-- Cutout Visual + 5-Row Architectural Dissolution Ledger -->
          <div style="display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:3rem;">
            <div style="flex:1 1 320px;max-width:420px;display:flex;flex-direction:column;align-items:center;gap:1rem;padding:1.5rem;border-top:var(--hairline-rule);border-bottom:var(--hairline-rule);">
              <picture>
                <source srcset="/assets/products/hammer-of-thor-cutout.webp" type="image/webp" />
                <img
                  src="/assets/products/hammer-of-thor-cutout.png"
                  alt="Hammer of Thor Studio Bottle Cutout Showing 20 Veg. Capsules Green Seal Badge"
                  width="600"
                  height="750"
                  loading="lazy"
                  decoding="async"
                  style="max-height:380px;width:auto;object-fit:contain;mask-image:radial-gradient(circle at 50% 50%, #000 76%, transparent 99%);-webkit-mask-image:radial-gradient(circle at 50% 50%, #000 76%, transparent 99%);"
                />
              </picture>
              <span style="font-size:0.7rem;letter-spacing:0.2em;text-transform:uppercase;color:#5CD68D;text-align:center;">
                USP-GRADE HYPROMELLOSE · ZERO BOVINE OR PORCINE GELATIN
              </span>
            </div>

            <div style="flex:2 1 640px;">
              <div class="architectural-ledger" role="table" aria-label="HPMC Vegetarian Capsule vs Animal Gelatin Technical Comparison">
                <div class="architectural-ledger__row" role="row">
                  <span class="architectural-ledger__index" role="cell">HPMC-01</span>
                  <strong class="architectural-ledger__title" role="cell">Low-Moisture Hygroscopic Shield (&lt; 6.0% Water Content)</strong>
                  <p class="architectural-ledger__detail" role="cell">
                    Bovine/porcine gelatin shells naturally hold 13%&ndash;16% moisture, which migrates into hygroscopic Tribulus Terrestris and Tongkat Ali extracts, turning powder into hard resin. Hammer of Thor&rsquo;s HPMC plant-cellulose shell holds under 6% moisture—keeping the 500mg micronized botanical powder free-flowing until swallowed.
                  </p>
                  <span class="architectural-ledger__metric" role="cell">&lt; 6% H2O SHIELD</span>
                </div>

                <div class="architectural-ledger__row" role="row">
                  <span class="architectural-ledger__index" role="cell">HPMC-02</span>
                  <strong class="architectural-ledger__title" role="cell">Zero Thermal Cross-Linking in 32&deg;C Courier Transit</strong>
                  <p class="architectural-ledger__detail" role="cell">
                    When conventional gelatin capsules travel in warm Malaysian courier vans across Johor, Kelantan, or Sabah, heat triggers aldehyde cross-linking—creating a rubbery pellicle that fails to rupture in the stomach. Plant-origin HPMC is thermally inert up to 60&deg;C, guaranteeing identical dissolution from Capsule #1 to Capsule #20.
                  </p>
                  <span class="architectural-ledger__metric" role="cell">THERMALLY INERT</span>
                </div>

                <div class="architectural-ledger__row" role="row">
                  <span class="architectural-ledger__index" role="cell">HPMC-03</span>
                  <strong class="architectural-ledger__title" role="cell">18–24 Minute pH-Independent Gastric Release</strong>
                  <p class="architectural-ledger__detail" role="cell">
                    Engineered with ultra-thin 95-micron plant-cellulose walls, the HPMC capsule ruptures cleanly within 18 to 24 minutes when taken with 250ml&ndash;300ml of water—releasing Plant-Fermented L-Arginine and Panax Ginseng rapidly without gelatin burps or gastric heaviness.
                  </p>
                  <span class="architectural-ledger__metric" role="cell">18–24 MIN RELEASE</span>
                </div>

                <div class="architectural-ledger__row" role="row">
                  <span class="architectural-ledger__index" role="cell">HPMC-04</span>
                  <strong class="architectural-ledger__title" role="cell">100% Free of Animal Gelatin &amp; Multi-Cultural Clean Compliance</strong>
                  <p class="architectural-ledger__detail" role="cell">
                    Synthesized exclusively from renewable pine and cotton plant cellulose fibers alongside plant-fermented L-Arginine and chelated mineral zinc, Hammer of Thor is 100% vegetarian and universally suitable for adult Malaysian men avoiding bovine or porcine animal by-products.
                  </p>
                  <span class="architectural-ledger__metric" role="cell">100% PLANT ORIGIN</span>
                </div>

                <div class="architectural-ledger__row" role="row">
                  <span class="architectural-ledger__index" role="cell">HPMC-05</span>
                  <strong class="architectural-ledger__title" role="cell"> Paired Botanical Monograph Cross-Links</strong>
                  <p class="architectural-ledger__detail" role="cell">
                    Explore our dedicated clinical monographs on the core actives inside Hammer of Thor:
                    <a href="/ingredients/tribulus-terrestris/" style="color:var(--gold-foil-bright);text-decoration:underline;">Tribulus Terrestris Saponins</a>,
                    <a href="/ingredients/maca-root/" style="color:var(--gold-foil-bright);text-decoration:underline;">Andean Maca Root</a>,
                    <a href="/ingredients/l-arginine-l-citrulline/" style="color:var(--gold-foil-bright);text-decoration:underline;">Plant-Fermented L-Arginine</a>,
                    <a href="/ingredients/panax-ginseng/" style="color:var(--gold-foil-bright);text-decoration:underline;">Panax Ginseng</a>, and
                    <a href="/ingredients/tongkat-ali/" style="color:var(--gold-foil-bright);text-decoration:underline;">Malaysian Tongkat Ali</a>.
                  </p>
                  <span class="architectural-ledger__metric" role="cell">5 MONOGRAPHS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  `;
}

/**
 * Renders Chapter 3 (MS-105): 20-Day Vegetarian Cycle Chronology, Day-18 Refill Protocol,
 * Head-to-Head Comparison against Horsemen / Grow XL / Magnum Pump XR, and 16-State Malaysia Discreet Delivery Ledger.
 */
export function renderMs105CycleComparisonAndStatesStage() {
  const statesLedgerHtml = HAMMER_16_STATES_LEDGER.map(
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
           CHAPTER 3 (MS-105): 20-DAY VEGETARIAN CYCLE CHRONOLOGY, DAY-18 REFILL
           PROTOCOL, HEAD-TO-HEAD MATRIX & 16-STATE MALAYSIA DISCREET LEDGER
           ===================================================================== -->
      <section
        id="ms105-vegetarian-cycle-chronology"
        class="hammer-cycle-stage"
        aria-labelledby="ms105-cycle-heading"
      >
        <div class="hammer-stage-container">
          <div class="hammer-stage-header">
            <div class="hammer-stage-header__left">
              <span class="editorial-kicker">
                CHAPTER III · 20-CAPSULE PHYSIOLOGICAL CONDITIONING TIMELINE
              </span>
              <h2 id="ms105-cycle-heading" class="editorial-headline-lg">
                The 20-Day <span class="foil-champagne-text">Vegetarian Cycle Chronology</span> &amp; Dual Intake Protocols
              </h2>
            </div>
            <div class="hammer-stage-header__right">
              <p style="color:var(--text-muted-alabaster);font-size:0.96rem;line-height:1.65;">
                Hammer of Thor is formulated for progressive steroidal saponin and chelated zinc saturation over a 20-day single-bottle cycle (or 40-to-60-day multi-bottle mastery). Select Protocol A for daily conditioning or Protocol B for pre-training and evening output.
              </p>
            </div>
          </div>

          <!-- Dual Intake Protocols Architectural Ledger -->
          <div class="architectural-ledger" role="region" aria-label="Hammer of Thor Dual Intake Protocols">
            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">PROTOCOL A</span>
              <strong class="architectural-ledger__title">
                Daily Evening Saponin Conditioning (Recommended Baseline)
              </strong>
              <p class="architectural-ledger__detail">
                Take <strong>1 vegetarian capsule (500mg) daily 30 minutes after dinner</strong> with 250ml of room-temperature or warm water. Evening post-meal administration maximizes Chelated Zinc Bisglycinate absorption and aligns 60%-Saponin Tribulus Terrestris + 100:1 Tongkat Ali with overnight nocturnal recovery rhythms.
              </p>
              <span class="architectural-ledger__metric">1 VEG CAP / NIGHT</span>
            </div>

            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">PROTOCOL B</span>
              <strong class="architectural-ledger__title">
                Pre-Training or Active Evening Stamina Support
              </strong>
              <p class="architectural-ledger__detail">
                On resistance-training days or active evenings, take <strong>1 vegetarian capsule 45 minutes prior to physical exertion</strong> with 300ml of water. Plant-Fermented L-Arginine (80mg) and Panax Ginseng (60mg) reach peak plasma availability within 35&ndash;45 minutes as the HPMC plant shell dissolves cleanly.
              </p>
              <span class="architectural-ledger__metric">45 MIN PRE-ACTIVITY</span>
            </div>

            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">TROPICAL CARE</span>
              <strong class="architectural-ledger__title">
                Equatorial Storage &amp; Desiccant Preservation Rule
              </strong>
              <p class="architectural-ledger__detail">
                Store your obsidian Hammer of Thor bottle below 30&deg;C in a shaded bedroom cabinet or office drawer away from direct bathroom steam. <strong>Always keep the food-grade silica desiccant sachet inside the bottle</strong> to preserve the crisp low-moisture integrity of all 20 HPMC vegetarian capsules.
              </p>
              <span class="architectural-ledger__metric">KEEP BELOW 30&deg;C</span>
            </div>
          </div>

          <!-- 6-Stage Day-1 to Day-60 Chronology Ledger -->
          <div class="architectural-ledger" role="region" aria-label="20-Day to 60-Day Vegetarian Cycle Progression">
            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">DAYS 01–04</span>
              <strong class="architectural-ledger__title">
                Phase 1: Clean HPMC Dissolution &amp; Endothelial Nitric Oxide Ignition
              </strong>
              <p class="architectural-ledger__detail">
                Zero digestive heaviness or gelatin reflux. Plant-Fermented L-Arginine (80mg) and Panax Ginseng ginsenosides (60mg) initiate baseline peripheral blood flow and reduce post-work mental fatigue across the first 96 hours.
              </p>
              <span class="architectural-ledger__metric">CAPSULES 01–04</span>
            </div>

            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">DAYS 05–10</span>
              <strong class="architectural-ledger__title">
                Phase 2: Protodioscin Saponin &amp; Andean Macamide Accumulation
              </strong>
              <p class="architectural-ledger__detail">
                Daily delivery of 200mg 60%-Saponin Tribulus Terrestris and 100mg 10:1 Andean Maca Root builds steady circulating phytosterol levels. Users report stronger morning vitality, faster recovery between gym sets, and elevated evening drive.
              </p>
              <span class="architectural-ledger__metric">CAPSULES 05–10</span>
            </div>

            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">DAYS 11–17</span>
              <strong class="architectural-ledger__title">
                Phase 3: Chelated Zinc Bisglycinate &amp; 100:1 Tongkat Ali Equilibrium
              </strong>
              <p class="architectural-ledger__detail">
                Intracellular Zinc Bisglycinate (15mg/day) and Malaysian Eurycoma longifolia quassinoids (45mg/day) reach full enzymatic synergy—supporting sustained physical stamina, lean muscular tone, and reliable evening confidence.
              </p>
              <span class="architectural-ledger__metric">CAPSULES 11–17</span>
            </div>

            <div class="architectural-ledger__row" style="background:rgba(212,175,55,0.06);border-bottom-color:var(--gold-champagne);">
              <span class="architectural-ledger__index">DAY 18 ALERT</span>
              <strong class="architectural-ledger__title" style="color:var(--gold-foil-bright);">
                Phase 4: Day-18 Refill Trigger Point (2 Vegetarian Capsules Remaining)
              </strong>
              <p class="architectural-ledger__detail">
                When you take Capsule #18, exactly 2 vegetarian capsules remain in your bottle (48 hours of supply). Our automated Day-18 Refill Protocol triggers your calendar alert so your next bottle is dispatched via 1&ndash;2 day express courier before Day 20 ends.
              </p>
              <span class="architectural-ledger__metric">REFILL TRIGGER DAY 18</span>
            </div>

            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">DAYS 19–20</span>
              <strong class="architectural-ledger__title">
                Phase 5: Single-Bottle 10,000mg Cycle Completion
              </strong>
              <p class="architectural-ledger__detail">
                Capsules #19 and #20 complete your first 10,000mg botanical reserve. Seamless transition into Bottle #2 prevents any dip in steroidal saponin or elemental zinc levels.
              </p>
              <span class="architectural-ledger__metric">CAPSULES 19–20</span>
            </div>

            <div class="architectural-ledger__row">
              <span class="architectural-ledger__index">DAYS 21–60</span>
              <strong class="architectural-ledger__title">
                Phase 6: Multi-Bottle Saponin Mastery (2-Bottle 40-Day &amp; 3-Bottle 60-Day Vaults)
              </strong>
              <p class="architectural-ledger__detail">
                Men selecting the 2-Bottle Protocol (40 Veg. Capsules, RM 318) or 3-Bottle Vault (60 Veg. Capsules, RM 477) experience uninterrupted 40-to-60-day conditioning with Free Nationwide Malaysia Shipping and Day-36 / Day-54 refill continuity.
              </p>
              <span class="architectural-ledger__metric">40–60 DAY MASTERY</span>
            </div>
          </div>

          <!-- Day-18 Refill Reminder Calendar Integration Band -->
          <div
            id="ms105-day18-refill-protocol"
            class="hammer-refill-concierge-band"
            role="region"
            aria-labelledby="ms105-refill-heading"
          >
            <div class="hammer-refill-concierge-band__copy">
              <span class="editorial-kicker">
                AUTOMATED CONTINUITY ENGINE · 20 PLANT-ORIGIN HPMC VEGETARIAN CAPSULES
              </span>
              <h3 id="ms105-refill-heading" class="editorial-headline-lg" style="font-size:clamp(1.75rem,3vw,2.65rem);">
                Day-18 Refill Reminder <span class="foil-champagne-text">Calendar Integration</span>
              </h3>
              <p style="color:var(--text-muted-alabaster);font-size:0.95rem;line-height:1.68;">
                Consistent steroidal saponin conditioning requires zero gaps between bottles. Because Hammer of Thor contains <strong>20 plant-origin HPMC vegetarian capsules</strong>, Day 18 is your exact 48-hour reorder horizon (or Day 36 on 2 bottles / Day 54 on 3 bottles). Activate your 1-click Google Calendar reminder below or reserve our 2-Bottle / 3-Bottle protocol today.
              </p>
              <div style="display:flex;flex-wrap:wrap;gap:1.25rem;font-size:0.76rem;letter-spacing:0.15em;text-transform:uppercase;color:var(--gold-champagne);">
                <span>1 BOTTLE = DAY 18 ALERT</span>
                <span>·</span>
                <span>2 BOTTLES = DAY 36 ALERT</span>
                <span>·</span>
                <span>3 BOTTLES = DAY 54 ALERT</span>
              </div>
            </div>

            <div class="hammer-refill-concierge-band__actions">
              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Onyxmen+Malaysia+%E2%80%94+Hammer+of+Thor+%2820+Veg.+Capsules%29+Day-18+Refill+Check-In+%28RM+159%29&details=Your+20-capsule+Hammer+of+Thor+%28SKU%3A+ONYX-HT-20%2C+Tribulus+Terrestris+20+Veg.+Capsules%29+cycle+has+2+capsules+remaining.+Order+your+next+discreet+bottle+at+https%3A%2F%2Fonyxman.my%2Fhammer-of-thor-malaysia%2F+or+email+sales%40onyxman.my"
                target="_blank"
                rel="noopener noreferrer"
                class="cta-hairline-secondary"
                style="justify-content:space-between;width:100%;"
              >
                <span>+ ADD DAY-18 GOOGLE CALENDAR REMINDER</span>
                <span aria-hidden="true">&#8599;</span>
              </a>

              <button
                type="button"
                class="cta-foil-primary"
                data-open-order-drawer="true"
                data-order-product="hammer-of-thor"
                data-order-qty="2"
                style="width:100%;"
              >
                <span>LOCK IN 2 BOTTLES (40 VEG. CAPS) · RM 318</span>
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
           MS-105 PART B: HEAD-TO-HEAD COMPARISON MATRIX AGAINST
           HORSEMEN, GROW XL & MAGNUM PUMP XR (UNIFORM RM 159 PRICING)
           ===================================================================== -->
      <section
        id="ms105-head-to-head-comparison"
        class="hammer-comparison-stage"
        aria-labelledby="ms105-comparison-heading"
      >
        <div class="hammer-stage-container">
          <div class="hammer-stage-header">
            <div class="hammer-stage-header__left">
              <span class="editorial-kicker">
                APOTHECARY CROSS-EXAMINATION · UNIFORM RM 159 RESERVE
              </span>
              <h2 id="ms105-comparison-heading" class="editorial-headline-lg">
                Head-to-Head: <span class="foil-champagne-text">Hammer of Thor</span> vs. Horsemen, Grow XL &amp; Magnum Pump XR
              </h2>
            </div>
            <div class="hammer-stage-header__right">
              <p style="color:var(--text-muted-alabaster);font-size:0.96rem;line-height:1.65;">
                All four Onyxmen formulations carry an identical <strong>RM 159 single-bottle price (RM 318 for 2 bottles, RM 477 for 3 bottles)</strong> so you never compromise by budget. Compare capsule shell architecture, active botanical drivers, and physiological timing below.
              </p>
            </div>
          </div>

          <div class="hammer-matrix-scroll" role="region" aria-label="4-Product Apothecary Comparison Matrix" tabindex="0">
            <table class="hammer-matrix-table">
              <thead>
                <tr>
                  <th scope="col">SPECIFICATION DIMENSION</th>
                  <th scope="col" class="hammer-matrix-table__highlight-col">
                    HAMMER OF THOR (THIS PAGE)<br />
                    <span style="color:#5CD68D;">SKU: ONYX-HT-20 · 20 VEG. CAPS</span>
                  </th>
                  <th scope="col">
                    <a href="/products/horsemen/" style="text-decoration:underline;">HORSEMEN</a><br />
                    <span style="color:var(--text-ash-silver);">SKU: ONYX-HM-20 · 20 CAPS</span>
                  </th>
                  <th scope="col">
                    <a href="/products/grow-xl/" style="text-decoration:underline;">GROW XL</a><br />
                    <span style="color:var(--text-ash-silver);">SKU: ONYX-GX-30 · 30 CAPS</span>
                  </th>
                  <th scope="col">
                    <a href="/products/magnum-pump-xr/" style="text-decoration:underline;">MAGNUM PUMP XR</a><br />
                    <span style="color:var(--text-ash-silver);">SKU: ONYX-MP-30 · 30 BLACK CAPS</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong style="color:var(--gold-champagne);">Official Bottle Subtitle</strong></td>
                  <td class="hammer-matrix-table__highlight-col">
                    <strong>Men&rsquo;s Health — Tribulus Terrestris — 20 Veg. Capsules</strong>
                  </td>
                  <td>Man Virility Enhancement Herbal Supplement — 20 Capsules × 500mg</td>
                  <td>Extra-Strength Enhancement Male Performance Blend — 30 Capsules</td>
                  <td>Testosterone Pro Series — Male Enhancement Formula — 30 Black Capsules</td>
                </tr>
                <tr>
                  <td><strong style="color:var(--gold-champagne);">Capsule Shell &amp; Count</strong></td>
                  <td class="hammer-matrix-table__highlight-col">
                    <strong>20 Plant-Origin HPMC Vegetarian Capsules × 500mg</strong> (Zero Animal Gelatin)
                  </td>
                  <td>20 Rapid-Dissolve Herbal Capsules × 500mg</td>
                  <td>30 Daily Botanical Capsules × 550mg</td>
                  <td>30 Extended-Release Jet-Black Capsules × 600mg</td>
                </tr>
                <tr>
                  <td><strong style="color:var(--gold-champagne);">Lead Botanical / Amino Driver</strong></td>
                  <td class="hammer-matrix-table__highlight-col">
                    <strong>200mg 60%-Saponin Tribulus Terrestris</strong> + 100mg Maca + 80mg Plant L-Arginine + 60mg Panax Ginseng + 45mg Tongkat Ali + 15mg Chelated Zinc
                  </td>
                  <td>150mg 100:1 Malaysian Tongkat Ali + 100mg Black Maca + 80mg Epimedium + 70mg Red Ginseng + 60mg L-Arginine</td>
                  <td>140mg Tongkat Ali + 110mg Maca + 100mg L-Arginine/Citrulline + 80mg Muira Puama + 70mg Saw Palmetto</td>
                  <td>320mg Combined L-Arginine HCl &amp; L-Citrulline Malate + 110mg Tribulus + 90mg Tongkat Ali + 65mg Thai Black Ginger + 15mg Bioperine</td>
                </tr>
                <tr>
                  <td><strong style="color:var(--gold-champagne);">Primary Physiological Goal</strong></td>
                  <td class="hammer-matrix-table__highlight-col">
                    <strong>100% Vegetarian Saponin Conditioning, Gym Recovery &amp; Sustained Evening Stamina</strong>
                  </td>
                  <td>Rapid 45–60 Min Pre-Evening Readiness &amp; Adaptogenic Drive</td>
                  <td>30-Day All-Day Morning Baseline Vitality &amp; Micro-Circulation</td>
                  <td>Peak Nitric Oxide Vasodilation, Vascular Workout Pump &amp; Evening Output</td>
                </tr>
                <tr>
                  <td><strong style="color:var(--gold-champagne);">Optimal Daily Timing</strong></td>
                  <td class="hammer-matrix-table__highlight-col">
                    <strong>30 min after dinner OR 45 min pre-training</strong>
                  </td>
                  <td>45–60 min before evening activity with warm water</td>
                  <td>Every morning 20–30 min after breakfast</td>
                  <td>30–45 min before gym resistance training or evening activity</td>
                </tr>
                <tr>
                  <td><strong style="color:var(--gold-champagne);">Refill Reminder Horizon</strong></td>
                  <td class="hammer-matrix-table__highlight-col">
                    <strong>Day-18 Automated Refill Trigger</strong> (20-Day Cycle)
                  </td>
                  <td>Day-18 Automated Refill Trigger (20-Day Cycle)</td>
                  <td>Day-25 Automated Refill Trigger (30-Day Cycle)</td>
                  <td>Day-25 Automated Refill Trigger (30-Day Cycle)</td>
                </tr>
                <tr>
                  <td><strong style="color:var(--gold-champagne);">Official Malaysia Pricing</strong></td>
                  <td class="hammer-matrix-table__highlight-col">
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
              <a href="/compare/horsemen-vs-hammer-of-thor/" style="color:var(--gold-foil-bright);text-decoration:underline;">
                Read Full Horsemen vs. Hammer of Thor Deep-Dive &rarr;
              </a>
              <a href="/compare/" style="color:var(--text-muted-alabaster);text-decoration:underline;">
                View Complete 4-Product Apothecary Matrix &rarr;
              </a>
            </div>
            <button
              type="button"
              class="cta-foil-primary"
              data-open-order-drawer="true"
              data-order-product="hammer-of-thor"
              data-order-qty="1"
            >
              <span>SELECT HAMMER OF THOR (20 VEG. CAPS) · RM 159</span>
            </button>
          </div>
        </div>
      </section>

      <!-- =====================================================================
           MS-105 PART C: 16-STATE MALAYSIA DISCREET DELIVERY LEDGER
           ===================================================================== -->
      <section
        id="ms105-malaysia-16-states-ledger"
        class="hammer-states-stage"
        aria-labelledby="ms105-states-heading"
      >
        <div class="hammer-stage-container">
          <div class="hammer-stage-header">
            <div class="hammer-stage-header__left">
              <span class="editorial-kicker">
                NATIONWIDE FULFILMENT TELEMETRY · ALL 16 STATES &amp; FEDERAL TERRITORIES
              </span>
              <h2 id="ms105-states-heading" class="editorial-headline-lg">
                16-State Malaysia <span class="foil-champagne-text">Discreet Delivery Ledger</span> for Hammer of Thor
              </h2>
            </div>
            <div class="hammer-stage-header__right">
              <p style="color:var(--text-muted-alabaster);font-size:0.96rem;line-height:1.65;">
                Every Hammer of Thor bottle is dispatched from our Klang Valley fulfilment vault in an unmarked, opaque security mailer under <strong>&ldquo;OM Fulfilment Logistics&rdquo;</strong>. Inspect exact transit times, postal code coverage, and COD / DuitNow availability across all 16 Malaysian hubs below.
              </p>
            </div>
          </div>

          <div class="architectural-ledger" role="table" aria-label="16-State Malaysia Discreet Delivery Ledger for Hammer of Thor">
            ${statesLedgerHtml}
          </div>
        </div>
      </section>
  `;
}

/**
 * Renders Chapter 4 (MS-106): Complete 10-Question Hammer of Thor Malaysia FAQ Accordion
 * + Final Conversion Horizon.
 */
export function renderMs106FaqStage() {
  const faqItemsHtml = HAMMER_FAQS.map(
    (faq, idx) => `
            <!-- FAQ Item ${faq.index} -->
            <details class="hammer-faq-item" id="hammer-faq-${idx + 1}" ${idx === 0 ? 'open' : ''}>
              <summary class="hammer-faq-summary">
                <div class="hammer-faq-summary__left">
                  <span class="hammer-faq-summary__index">FAQ-${faq.index}</span>
                  <span class="hammer-faq-summary__category">${faq.category}</span>
                  <h3 class="hammer-faq-summary__question">${faq.questionEn}</h3>
                </div>
                <span class="hammer-faq-summary__icon" aria-hidden="true">+</span>
              </summary>
              <div class="hammer-faq-answer">
                <p>${faq.answerEn}</p>
              </div>
            </details>`
  ).join('\n');

  return `
      <!-- =====================================================================
           CHAPTER 4 (MS-106): COMPLETE 10-QUESTION HAMMER OF THOR MALAYSIA
           FAQ ACCORDION + FINAL APOTHECARY ACQUISITION STAGE
           ===================================================================== -->
      <section
        id="ms106-hammer-faq-stage"
        class="hammer-faq-stage"
        aria-labelledby="ms106-faq-heading"
      >
        <div class="hammer-stage-container">
          <div class="hammer-stage-header">
            <div class="hammer-stage-header__left">
              <span class="editorial-kicker">
                CHAPTER IV · VERIFIED APOTHECARY DOSSIER · 10 QUESTIONS ANSWERED
              </span>
              <h2 id="ms106-faq-heading" class="editorial-headline-lg">
                Frequently Asked Questions — <span class="foil-champagne-text">Hammer of Thor Malaysia</span> (20 Veg. Capsules)
              </h2>
            </div>
            <div class="hammer-stage-header__right">
              <p style="color:var(--text-muted-alabaster);font-size:0.96rem;line-height:1.65;">
                Direct technical answers regarding our 100% plant-origin HPMC vegetarian capsules, 200mg 60%-Saponin Tribulus Terrestris standardization, Day-18 refill calendar alerts, uniform RM 159 pricing, and plain unmarked courier delivery across Malaysia.
              </p>
            </div>
          </div>

          <div class="hammer-faq-ledger" role="region" aria-label="Hammer of Thor Malaysia 10-Question FAQ Accordion">
            ${faqItemsHtml}
          </div>

          <!-- Final Acquisition Horizon Banner -->
          <div style="margin-top:2rem;padding:2.75rem clamp(1.5rem,4vw,3.5rem);background-color:#050507;border-top:var(--hairline-rule);border-bottom:var(--hairline-rule);display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:2.5rem;">
            <div style="flex:1 1 520px;display:flex;flex-direction:column;gap:0.85rem;">
              <span class="editorial-kicker">
                IMMEDIATE DISCREET DISPATCH · SKU ONYX-HT-20 · GTIN 9550000102028
              </span>
              <h3 class="editorial-headline-lg" style="font-size:clamp(1.85rem,3.2vw,2.9rem);">
                Begin Your 20-Day <span class="foil-champagne-text">Vegetarian Tribulus</span> Protocol Today
              </h3>
              <p style="color:var(--text-muted-alabaster);font-size:0.95rem;line-height:1.65;">
                Reserve 1 Bottle (RM 159), 2 Bottles (RM 318 · Free Nationwide Malaysia Shipping), or 3 Bottles (RM 477 · Complete 60-Day Vault). Dispatched in a 100% plain matte security parcel under <strong>OM Fulfilment Logistics</strong>. Direct concierge support: <a href="mailto:sales@onyxmen.my" style="color:var(--gold-foil-bright);">sales@onyxmen.my</a> | <a href="mailto:info@onyxmen.my" style="color:var(--gold-foil-bright);">info@onyxmen.my</a>.
              </p>
            </div>

            <div style="display:flex;flex-direction:column;gap:0.9rem;min-width:290px;">
              <button
                type="button"
                class="cta-foil-primary"
                data-open-order-drawer="true"
                data-order-product="hammer-of-thor"
                data-order-qty="1"
              >
                <span>1 BOTTLE (20 VEG. CAPS) · RM 159</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
              <button
                type="button"
                class="cta-foil-primary"
                data-open-order-drawer="true"
                data-order-product="hammer-of-thor"
                data-order-qty="2"
              >
                <span>2 BOTTLES (40 VEG. CAPS) · RM 318</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
              <button
                type="button"
                class="cta-hairline-secondary"
                data-open-order-drawer="true"
                data-order-product="hammer-of-thor"
                data-order-qty="3"
                style="justify-content:space-between;"
              >
                <span>3 BOTTLES (60 VEG. CAPS) · RM 477</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </section>
  `;
}

/**
 * Generates the complete, uncompressed HTML5 document for Hammer of Thor EN-MY Flagship
 * and writes it to public/hammer-of-thor-malaysia/index.html.
 */
export function buildHammerEnFlagshipPage() {
  const schemaGraphObj = buildHammerEnSchemaGraph();

  const bodyContent = [
    renderMs103HeroStage(),
    renderMs104BotanicalAndHpmcStage(),
    renderMs105CycleComparisonAndStatesStage(),
    renderMs106FaqStage(),
  ].join('\n');

  const html = renderLuxuryShell({
    lang: 'en-MY',
    title:
      "Hammer of Thor Malaysia (20 Veg. Capsules) — Men's Health Tribulus Terrestris Supplement | RM 159 Onyxmen.my",
    description:
      "Order authentic Hammer of Thor (Men's Health — Tribulus Terrestris — 20 Veg. Capsules, SKU: ONYX-HT-20, MPN: HT-TRIB-20MY) for RM 159 at Onyxmen.my. 100% plant-origin HPMC vegetarian capsules with 60%-Saponin Tribulus, Maca, Plant-Fermented L-Arginine, Panax Ginseng, Malaysian Tongkat Ali & Chelated Zinc. Discreet delivery across all 16 Malaysia states.",
    canonicalPath: HAMMER_CONSTANTS.canonicalPath,
    alternatePathEn: HAMMER_CONSTANTS.canonicalPath,
    alternatePathMs: HAMMER_CONSTANTS.pairedMsPath,
    ogImage: HAMMER_CONSTANTS.assets.stageWebp,
    schemaGraphJson: schemaGraphObj,
    bodyContent,
    activeNav: 'hammer-of-thor',
    productSlug: 'hammer-of-thor',
    defaultQty: 2,
    includeSealStrip: true,
    extraHeadHtml: HAMMER_PAGE_SCOPED_CSS,
  });

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(OUTPUT_FILE, html, 'utf8');

  const lineCount = html.split(/\r?\n/).length;
  const byteSize = Buffer.byteLength(html, 'utf8');

  return {
    outputPath: OUTPUT_FILE,
    lineCount,
    byteSize,
  };
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  const result = buildHammerEnFlagshipPage();
  console.log(
    `[MS-103..MS-106] Built ${result.outputPath} — ${result.lineCount} lines (${result.byteSize} bytes)`
  );
}
