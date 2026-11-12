#!/usr/bin/env node
/**
 * ============================================================================
 * ONYXMEN.MY — ENGLISH FLAGSHIP HOMEPAGE CINEMA BUILDER (MS-079 TO MS-086)
 * ============================================================================
 * Generates: public/index.html (2,600 to 3,500+ lines of uncompressed semantic HTML5,
 * bespoke luxury CSS choreography, interactive telemetry, and @graph JSON-LD)
 *
 * Strictly enforces:
 * - Rule #29 & Rule #30:
 *   * Paradigm A (100vw x 100vh Full-Bleed Obsidian Cinema Stage)
 *   * Paradigm D (50vw / 50vw Pinned Split-Screen Apothecary Stage)
 *   * Palette: #050507, #0B0C10, #12141C, #D4AF37, #F3E5AB, #EAE6DF
 *   * Fonts: 'Cormorant Garamond', 'Syne', 'Space Grotesk'
 *   * ZERO banned tokens, ZERO pill badges, ZERO bordered 3-column card grids
 * - Authentic Business Constants:
 *   * Brand: Onyxmen (https://www.onyxmen.my/) | Alternate BM: https://www.onyxmen.my/ms/
 *   * Prices: 1 Bottle = RM 159 (159.00), 2 Bottles = RM 286 (10% OFF vs RM 318) (318.00), 3 Bottles = RM 405 (15% OFF vs RM 477) (477.00)
 *   * Emails: waleedshoaibofficial@gmail.com, sales@onyxmen.my, info@onyxmen.my
 *   * Zero fake KKM/MAL registration claims
 * ============================================================================
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { renderLuxuryShell } from '../components/LuxuryShell.mjs';
import { buildFullPageGraphObject } from '../utils/schema-graph.mjs';
import {
  brandData,
  allProducts,
  productsById,
  comparisonsData,
  botanicalsData,
  malaysiaStatesData,
  guidesData,
} from '../data/products/index.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..', '..');
const PUBLIC_DIR = path.join(ROOT_DIR, 'public');
const OUTPUT_HTML_PATH = path.join(PUBLIC_DIR, 'index.html');

/**
 * Escapes HTML text safely.
 * @param {string} str
 * @returns {string}
 */
function esc(str = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * 12 Comprehensive English Homepage FAQs (`MS-086`)
 */
export const HOMEPAGE_EN_FAQS = [
  {
    id: 'faq-home-01',
    category: 'PRICING & RESERVES',
    questionEn:
      'What is the official Malaysia price for Horsemen, Hammer of Thor, Grow XL, and Magnum Pump XR on Onyxmen.my?',
    answerEn:
      'Every authentic Onyxmen formulation shares a uniform, transparent Malaysian Ringgit reserve structure so you can select strictly by physiological objective rather than price differences: 1 Bottle (Single Cycle Reserve) is RM 159 (159.00 MYR), 2 Bottles (Dual Momentum Protocol with Free Nationwide Malaysia Express Shipping including Sabah, Sarawak & Labuan) is RM 286 (10% OFF vs RM 318) (318.00 MYR), and 3 Bottles (Complete 90-Day Apothecary Mastery Vault with Priority Dispatch & VIP Refill Concierge) is RM 405 (15% OFF vs RM 477) (477.00 MYR).',
  },
  {
    id: 'faq-home-02',
    category: 'CAPSULE ARCHITECTURE',
    questionEn:
      'How do I choose between the 20-capsule formulations (Horsemen & Hammer of Thor) and the 30-capsule formulations (Grow XL & Magnum Pump XR)?',
    answerEn:
      'The 20-capsule reserves are engineered with concentrated high-ratio botanical extracts per 500mg serving and follow a Day-18 automated refill protocol: choose Horsemen (20 Capsules x 500mg, SKU ONYX-HM-20) for rapid 45–60 minute pre-evening readiness powered by 100:1 Malaysian Tongkat Ali, Peruvian Black Maca, and Epimedium; choose Hammer of Thor (20 Veg. Capsules, SKU ONYX-HT-20) if you require 100% plant-derived hypromellose vegetarian capsules anchored by 200mg of 60%-saponin Tribulus Terrestris and Chelated Zinc. Conversely, the 30-capsule formulations provide a full 30-day calendar cycle with a Day-25 refill trigger: choose Grow XL (30 Capsules, SKU ONYX-GX-30) for an all-day morning baseline nourishment blend featuring Tongkat Ali, Maca, Brazilian Muira Puama, and Saw Palmetto; choose Magnum Pump XR (30 Black Capsules, SKU ONYX-MP-30) for Extended-Release Nitric Oxide vascular flow (320mg combined L-Arginine HCl + L-Citrulline Malate catalyzed by Bioperine) before gym workouts or evening performance.',
  },
  {
    id: 'faq-home-03',
    category: 'DISCREET LOGISTICS',
    questionEn:
      'How discreet is the parcel packaging? Will courier riders, condominium guards, or office receptionists know what is inside?',
    answerEn:
      'Never. Every Onyxmen Malaysia order is packed inside our 3-layer blind-waybill architecture: each factory-sealed bottle is wrapped in high-density acoustic bubble cushioning (eliminating capsule rattling noise) and sealed inside an unbranded, opaque matte security carton or poly-mailer. The exterior airway bill lists the sender strictly as "OM Fulfilment Logistics (Kuala Lumpur)" and declares the contents generically as "Personal Nutritional Wellness". Zero brand logos, zero product titles, and zero supplement descriptions appear anywhere on the outside of the parcel.',
  },
  {
    id: 'faq-home-04',
    category: 'TRANSIT WINDOWS',
    questionEn:
      'How fast is delivery to Kuala Lumpur, Selangor, Peninsular Malaysia, and Sabah & Sarawak?',
    answerEn:
      'Because our primary climate-controlled dispatch vault operates in Kuala Lumpur (50450 MY), orders confirmed before 16:00 MYT across Kuala Lumpur, Selangor (Petaling Jaya, Subang Jaya, Shah Alam, Puchong, Klang), Putrajaya, and Cyberjaya qualify for either our 3–5 Hour Same-Day Private Discreet Runner or Free Next-Business-Day Express Courier. Across Peninsular Malaysia (Johor Bahru, Penang, Ipoh, Melaka, Seremban, Kuantan, Alor Setar, Kota Bharu, Kuala Terengganu, Kangar), express linehaul courier transit takes 1–2 business days (RM 0 Free Shipping on 1, 2, or 3 bottles). For East Malaysia (Kota Kinabalu, Sandakan, Tawau, Kuching, Miri, Sibu, Bintulu, and Labuan), daily air freight takes 2–4 business days (RM 12 for 1 bottle, or 100% Free Air Freight on 2-bottle RM 286 (10% OFF vs RM 318) and 3-bottle RM 405 (15% OFF vs RM 477) orders).',
  },
  {
    id: 'faq-home-05',
    category: 'SETTLEMENT & COD',
    questionEn:
      'Can I pay via Cash on Delivery (COD), FPX Online Banking, or DuitNow Instant QR in Malaysia?',
    answerEn:
      'Yes. We support three frictionless Malaysian settlement channels with zero hidden handling fees: (1) FPX Online Banking (Maybank2u, CIMB Clicks, Public Bank, RHB, Hong Leong, AmBank, Bank Islam), (2) DuitNow Instant QR (ideal when you want your sealed parcel left quietly at a condominium concierge desk, parcel locker, or office reception), and (3) Cash on Delivery (COD Malaysia), where you inspect the sealed outer security parcel first and settle by cash or QR directly with the courier rider upon handover.',
  },
  {
    id: 'faq-home-06',
    category: 'ENTITY DISAMBIGUATION',
    questionEn:
      'What exactly is Magnum Pump XR (30 Black Capsules) on Onyxmen.my? Is it an oral dietary supplement?',
    answerEn:
      'Yes. Magnum Pump XR distributed by Onyxmen Malaysia (https://www.onyxmen.my, SKU ONYX-MP-30, MPN MPXR-30BLK-MY, RM 159) is strictly an oral botanical and amino-acid Dietary Supplement for adult men (18+) containing 30 signature jet-black capsules per bottle under the Testosterone Pro Series. Each 600mg black capsule combines L-Arginine HCl (180mg), L-Citrulline Malate (140mg), Tribulus Terrestris (110mg), Malaysian Tongkat Ali (90mg), Thai Black Ginger / Kunyit Hitam (65mg), and Bioperine (15mg). It has zero affiliation or relation to heavy industrial oilfield slurry/frac fluid pumps or mechanical vacuum devices.',
  },
  {
    id: 'faq-home-07',
    category: 'AUTHENTICITY & SAFETY',
    questionEn:
      'Are Onyxmen formulations prescription drugs, and how do I avoid counterfeit marketplace imitations?',
    answerEn:
      'Onyxmen formulations are traditional botanical and amino-acid dietary supplements formulated exclusively for adult men (18+) to support physical stamina, peripheral micro-circulation, and daily vitality. We never print fabricated medical registration codes, never make unrealistic surgical claims, and screen every batch against undeclared synthetic PDE5 adulterants and heavy metals (Pb, As, Hg, Cd). To avoid cheap starch-filled counterfeits or heat-degraded classifieds stock, reserve exclusively through https://www.onyxmen.my at the official RM 159 / RM 286 (10% OFF vs RM 318) / RM 405 (15% OFF vs RM 477) tariff backed by our Kuala Lumpur desk (sales@onyxmen.my / waleedshoaibofficial@gmail.com).',
  },
  {
    id: 'faq-home-08',
    category: 'VEGETARIAN SHELLS',
    questionEn:
      'Which Onyxmen formulation uses 100% plant-derived vegetarian capsules?',
    answerEn:
      'Hammer of Thor ("Men\'s Health — Tribulus Terrestris — 20 Veg. Capsules", SKU ONYX-HT-20) is encapsulated in 100% plant-derived hypromellose (HPMC) vegetarian capsules—completely free from bovine or porcine gelatin. Its plant-cellulose shell resists sticking in Malaysia\'s humid tropical climate and dissolves cleanly within 20–30 minutes after an evening meal.',
  },
  {
    id: 'faq-home-09',
    category: 'REFILL TELEMETRY',
    questionEn:
      'How do the automated Day-18 and Day-25 Refill Protocol reminders work?',
    answerEn:
      'Botanical adaptogens such as Eurycoma longifolia (Tongkat Ali), Lepidium meyenii (Black Maca), and Tribulus Terrestris achieve peak physiological conditioning when plasma saturation remains uninterrupted. When you place an order via our 10-Second Express Order Drawer, our engine generates a 1-click Google Calendar & WhatsApp refill reminder calibrated to your exact bottle size: Day 18 per bottle for 20-capsule reserves (Horsemen & Hammer of Thor, when 2 capsules remain) and Day 25 per bottle for 30-capsule protocols (Grow XL & Magnum Pump XR, when 5 capsules remain), giving 1–2 business days for your fresh parcel to arrive before your current bottle finishes.',
  },
  {
    id: 'faq-home-10',
    category: 'DIETARY TIMING',
    questionEn:
      'Can I take Onyxmen capsules if I drink kopi, teh tarik, or pre-workout beverages?',
    answerEn:
      'All four Onyxmen formulations are 100% anhydrous-caffeine-free and stimulant-free, meaning they will not cause rapid heart-rate spikes, hand tremors, or midnight insomnia. However, because polyphenols and tannins in strong kopi O or teh tarik can bind to botanical alkaloids and trace minerals like Chelated Zinc in the digestive tract, always leave a 45-minute buffer between coffee/tea and your capsule, and swallow capsules with 250ml–300ml of plain warm or room-temperature water.',
  },
  {
    id: 'faq-home-11',
    category: 'MULTI-BOTTLE STACKING',
    questionEn:
      'Can I combine two different formulations in a 2-Bottle (RM 286 (10% OFF vs RM 318)) or 3-Bottle (RM 405 (15% OFF vs RM 477)) protocol?',
    answerEn:
      'Yes. Many experienced Malaysian clients combine a morning baseline bottle of Grow XL (1 capsule after breakfast) with an evening or pre-gym bottle of Horsemen or Magnum Pump XR at the RM 286 (10% OFF vs RM 318) (2-Bottle) or RM 405 (15% OFF vs RM 477) (3-Bottle) tier. Simply select the 2-Bottle or 3-Bottle tier in the Express Order Drawer and mention your preferred bottle combination in the delivery address/notes field, or reply to our concierge confirmation from sales@onyxmen.my.',
  },
  {
    id: 'faq-home-12',
    category: 'EXPRESS ORDER DESK',
    questionEn:
      'How does the 10-Second Express Discreet Order Drawer work without requiring account registration?',
    answerEn:
      'We eliminated public user accounts so your personal purchase history is never stored on a public cloud profile. Click any "Acquire Discreet Reserve — RM 159" button to open the slide-over Express Order Drawer, select your formulation and 1/2/3-bottle tier, and enter your recipient name (or initials/pseudonym), Malaysian WhatsApp number (01X-XXXXXXX), state, and address. Your encrypted order dispatches immediately to our Kuala Lumpur fulfilment inbox (waleedshoaibofficial@gmail.com / sales@onyxmen.my / info@onyxmen.my) and displays your instant Order Reference ID on screen.',
  },
];

/**
 * Bespoke Homepage Luxury CSS Choreography (`MS-079` to `MS-086`).
 * Strictly adheres to Rule #29 & Rule #30:
 * - Paradigm A (100vw x 100vh Full-Bleed Obsidian Cinema Stage)
 * - Paradigm D (50vw / 50vw Pinned Split-Screen Apothecary Stage)
 * - Palette: #050507, #0B0C10, #12141C, #D4AF37, #F3E5AB, #EAE6DF
 * - Fonts: 'Cormorant Garamond', 'Syne', 'Space Grotesk'
 * - Architectural hairline ledgers (`border-top: 1px solid rgba(212,175,55,0.18)`)
 */
const HOMEPAGE_BESPOKE_CSS = `
<style id="onyxman-home-en-bespoke-css">
  /* ==========================================================================
     MS-079: 100vw x 100vh OBSIDIAN ROYAL APOTHECARY HERO STAGE (PARADIGM A)
     ========================================================================== */
  .home-hero-cinema {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    background-color: #050507;
    background-image:
      radial-gradient(circle at 72% 38%, rgba(212, 175, 55, 0.16) 0%, rgba(18, 20, 28, 0.62) 44%, rgba(5, 5, 7, 0.96) 82%),
      linear-gradient(180deg, #050507 0%, #0B0C10 54%, #050507 100%);
    padding: clamp(2.5rem, 5vh, 4.5rem) var(--gutter-cinema) clamp(3rem, 6vh, 5rem);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-bottom: 1px solid rgba(212, 175, 55, 0.24);
    overflow: hidden;
  }

  .home-hero-cinema__ambient-watermark {
    position: absolute;
    top: 8vh;
    right: -2vw;
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(7rem, 18vw, 22rem);
    font-weight: 600;
    line-height: 0.82;
    letter-spacing: 0.08em;
    color: rgba(212, 175, 55, 0.035);
    pointer-events: none;
    user-select: none;
    z-index: 1;
  }

  .home-hero-cinema__top-telemetry {
    position: relative;
    z-index: 4;
    max-width: 1800px;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 1.35rem;
    border-bottom: 1px solid rgba(212, 175, 55, 0.18);
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 1rem 2rem;
  }

  .home-hero-cinema__coordinates {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.72rem;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: #D4AF37;
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
  }

  .home-hero-cinema__coordinates-pulse {
    width: 8px;
    height: 8px;
    background-color: #D4AF37;
    box-shadow: 0 0 12px #D4AF37;
    display: inline-block;
  }

  .home-hero-cinema__dispatch-ticker {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.25rem;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.74rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: #EAE6DF;
  }

  .home-hero-cinema__dispatch-zone {
    display: inline-flex;
    align-items: baseline;
    gap: 0.45rem;
  }

  .home-hero-cinema__dispatch-zone strong {
    color: #F3E5AB;
    font-weight: 600;
  }

  .home-hero-cinema__stage-core {
    position: relative;
    z-index: 4;
    max-width: 1800px;
    width: 100%;
    margin: 2.25rem auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
  }

  .home-hero-cinema__editorial-column {
    flex: 1 1 560px;
    max-width: 780px;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .home-hero-cinema__display-title {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(2.95rem, 5.6vw, 5.85rem);
    font-weight: 500;
    line-height: 0.98;
    letter-spacing: -0.02em;
    color: #EAE6DF;
  }

  .home-hero-cinema__display-subtitle {
    font-family: 'Syne', sans-serif;
    font-size: clamp(0.95rem, 1.35vw, 1.28rem);
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #F3E5AB;
    line-height: 1.4;
  }

  .home-hero-cinema__lead-copy {
    font-family: 'Space Grotesk', sans-serif;
    font-size: clamp(1rem, 1.12vw, 1.14rem);
    line-height: 1.7;
    color: #B8B3A8;
    max-width: 64ch;
  }

  .home-hero-cinema__tariff-strip {
    border-top: 1px solid rgba(212, 175, 55, 0.24);
    border-bottom: 1px solid rgba(212, 175, 55, 0.24);
    padding: 1.35rem 0;
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 1.5rem;
    background: linear-gradient(90deg, rgba(212, 175, 55, 0.07) 0%, rgba(11, 12, 16, 0) 100%);
  }

  .home-hero-cinema__tariff-node {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
    flex: 1 1 170px;
  }

  .home-hero-cinema__tariff-eyebrow {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.68rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #D4AF37;
  }

  .home-hero-cinema__tariff-figure {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(1.9rem, 2.8vw, 2.65rem);
    font-weight: 600;
    color: #F3E5AB;
    line-height: 1.05;
  }

  .home-hero-cinema__tariff-note {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.76rem;
    color: #B8B3A8;
  }

  .home-hero-cinema__cta-cluster {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1.15rem;
    padding-top: 0.35rem;
  }

  .home-hero-cinema__visual-showcase {
    flex: 1 1 540px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .home-hero-cinema__picture-stage {
    position: relative;
    width: 100%;
    max-width: 880px;
    background: radial-gradient(circle at 50% 52%, rgba(212, 175, 55, 0.2) 0%, rgba(18, 20, 28, 0.65) 54%, transparent 78%);
    padding: 1rem;
  }

  .home-hero-cinema__lineup-img {
    width: 100%;
    height: auto;
    object-fit: contain;
    mask-image: radial-gradient(ellipse at 50% 50%, #000000 74%, transparent 99%);
    -webkit-mask-image: radial-gradient(ellipse at 50% 50%, #000000 74%, transparent 99%);
    filter: drop-shadow(0 34px 68px rgba(0, 0, 0, 0.95));
  }

  .home-hero-cinema__quick-vault-bar {
    width: 100%;
    border-top: 1px solid rgba(212, 175, 55, 0.24);
    margin-top: 1.25rem;
    padding-top: 1rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
  }

  .home-hero-cinema__quick-item {
    flex: 1 1 200px;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    padding: 0.65rem 0.5rem;
    border-bottom: 1px solid rgba(234, 230, 223, 0.09);
    transition: border-color 220ms ease, background-color 220ms ease;
  }

  .home-hero-cinema__quick-item:hover {
    border-bottom-color: #D4AF37;
    background-color: rgba(212, 175, 55, 0.05);
  }

  .home-hero-cinema__quick-sku {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.64rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #D4AF37;
  }

  .home-hero-cinema__quick-title {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1.25rem;
    font-weight: 600;
    color: #EAE6DF;
  }

  .home-hero-cinema__quick-spec {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.74rem;
    color: #B8B3A8;
  }

  .home-hero-cinema__quick-actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.75rem;
    margin-top: 0.35rem;
    font-size: 0.72rem;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: #F3E5AB;
  }

  .home-hero-cinema__bottom-ledger {
    position: relative;
    z-index: 4;
    max-width: 1800px;
    width: 100%;
    margin: 0 auto;
    padding-top: 1.5rem;
    border-top: 1px solid rgba(212, 175, 55, 0.18);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .home-hero-cinema__telemetry-col {
    flex: 1 1 260px;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .home-hero-cinema__telemetry-label {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.66rem;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #D4AF37;
  }

  .home-hero-cinema__telemetry-val {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.88rem;
    color: #EAE6DF;
  }

  /* ==========================================================================
     MS-080A TO MS-080D: 4 FULL-VIEWPORT PRODUCT CINEMA CHAPTERS
     ========================================================================== */
  .product-cinema-chapter {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    background-color: #050507;
    border-bottom: 1px solid rgba(212, 175, 55, 0.24);
    padding: var(--gutter-vertical) var(--gutter-cinema);
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
  }

  .product-cinema-chapter--alt {
    background-color: #0B0C10;
  }

  .product-cinema-chapter__inner {
    max-width: 1760px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .product-cinema-chapter__header-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 1.5rem;
    padding-bottom: 1.35rem;
    border-bottom: 1px solid rgba(212, 175, 55, 0.22);
  }

  .product-cinema-chapter__chapter-id {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.74rem;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: #D4AF37;
  }

  .product-cinema-chapter__sku-ledger {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.74rem;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: #B8B3A8;
  }

  .product-cinema-chapter__split-stage {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    gap: 3.5rem;
  }

  .product-cinema-chapter--reverse .product-cinema-chapter__split-stage {
    flex-direction: row-reverse;
  }

  .product-cinema-chapter__visual-wing {
    flex: 1 1 500px;
    max-width: 720px;
    position: sticky;
    top: 6.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .product-cinema-chapter__stage-frame {
    position: relative;
    width: 100%;
    background: radial-gradient(circle at 50% 48%, rgba(212, 175, 55, 0.16) 0%, rgba(18, 20, 28, 0.78) 56%, #050507 100%);
    padding: 2rem 1.5rem;
    border-top: 1px solid rgba(212, 175, 55, 0.24);
    border-bottom: 1px solid rgba(212, 175, 55, 0.24);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }

  .product-cinema-chapter__roman-watermark {
    position: absolute;
    top: 1rem;
    left: 1.5rem;
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(3.5rem, 6vw, 5.75rem);
    font-weight: 600;
    line-height: 1;
    color: rgba(212, 175, 55, 0.15);
    pointer-events: none;
  }

  .product-cinema-chapter__stage-img {
    width: 100%;
    max-width: 600px;
    height: auto;
    object-fit: contain;
    mask-image: radial-gradient(circle at 50% 50%, #000000 74%, transparent 99%);
    -webkit-mask-image: radial-gradient(circle at 50% 50%, #000000 74%, transparent 99%);
  }

  .product-cinema-chapter__label-transcription {
    width: 100%;
    padding-top: 1rem;
    border-top: 1px solid rgba(234, 230, 223, 0.09);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.75rem;
    font-size: 0.76rem;
    color: #B8B3A8;
  }

  .product-cinema-chapter__dossier-wing {
    flex: 1 1 560px;
    max-width: 880px;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .product-cinema-chapter__title {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(2.4rem, 4.4vw, 4.35rem);
    font-weight: 500;
    line-height: 1.03;
    color: #EAE6DF;
  }

  .product-cinema-chapter__official-subtitle {
    font-family: 'Syne', sans-serif;
    font-size: 0.96rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #F3E5AB;
  }

  .product-cinema-chapter__narrative {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 1.02rem;
    line-height: 1.72;
    color: #B8B3A8;
  }

  .product-cinema-chapter__disambiguation-banner {
    padding: 1.15rem 1.35rem;
    background-color: rgba(212, 175, 55, 0.07);
    border-left: 2px solid #D4AF37;
    font-size: 0.86rem;
    color: #EAE6DF;
    line-height: 1.6;
  }

  .product-cinema-chapter__subheading {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.74rem;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: #D4AF37;
    margin-bottom: 0.65rem;
  }

  .product-cinema-chapter__protocol-strip {
    border-top: 1px solid rgba(212, 175, 55, 0.22);
    border-bottom: 1px solid rgba(212, 175, 55, 0.22);
    padding: 1.35rem 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .product-cinema-chapter__protocol-mode {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  .product-cinema-chapter__protocol-mode strong {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1.3rem;
    color: #F3E5AB;
  }

  .product-cinema-chapter__protocol-mode p {
    font-size: 0.9rem;
    color: #B8B3A8;
  }

  .product-cinema-chapter__cta-row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 1rem;
    padding-top: 0.5rem;
  }

  /* ==========================================================================
     MS-081: INTERACTIVE 4-FORMULATION DIAGNOSTIC & PROTOCOL SELECTOR MATRIX
     ========================================================================== */
  .diagnostic-selector-stage {
    width: 100vw;
    background-color: #12141C;
    border-bottom: 1px solid rgba(212, 175, 55, 0.24);
    padding: var(--gutter-vertical) var(--gutter-cinema);
  }

  .diagnostic-selector-stage__inner {
    max-width: 1680px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .diagnostic-selector-stage__header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(212, 175, 55, 0.22);
  }

  .diagnostic-selector-stage__quiz-layout {
    display: flex;
    flex-wrap: wrap;
    gap: 3rem;
    align-items: flex-start;
  }

  .diagnostic-selector-stage__options-col {
    flex: 1 1 560px;
    display: flex;
    flex-direction: column;
  }

  .diagnostic-selector-stage__result-col {
    flex: 1 1 460px;
    background-color: #050507;
    border-top: 2px solid #D4AF37;
    border-bottom: 1px solid rgba(212, 175, 55, 0.24);
    padding: 2.25rem;
    display: flex;
    flex-direction: column;
    gap: 1.35rem;
  }

  /* ==========================================================================
     MS-082: PARADIGM D 50vw / 50vw PINNED BOTANICAL MONOGRAPH CURTAIN
     ========================================================================== */
  .monograph-split-curtain {
    position: relative;
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-wrap: wrap;
    background-color: #050507;
    border-bottom: 1px solid rgba(212, 175, 55, 0.24);
  }

  .monograph-split-curtain__pinned-left {
    width: 50vw;
    min-height: 100vh;
    position: sticky;
    top: 0;
    height: 100vh;
    padding: calc(var(--gutter-vertical) + 1rem) var(--gutter-cinema);
    background:
      radial-gradient(circle at 48% 45%, rgba(212, 175, 55, 0.15) 0%, rgba(18, 20, 28, 0.85) 56%, #050507 100%);
    border-right: 1px solid rgba(212, 175, 55, 0.24);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .monograph-split-curtain__scrolling-right {
    width: 50vw;
    min-height: 100vh;
    padding: var(--gutter-vertical) var(--gutter-cinema);
    background-color: #0B0C10;
    display: flex;
    flex-direction: column;
    gap: 3.5rem;
  }

  .monograph-entry {
    border-top: 1px solid rgba(212, 175, 55, 0.28);
    padding-top: 2.25rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .monograph-entry__taxonomy {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 0.75rem;
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.72rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #D4AF37;
  }

  .monograph-entry__title {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(2rem, 3.2vw, 3rem);
    font-weight: 500;
    color: #EAE6DF;
    line-height: 1.08;
  }

  .monograph-entry__spec-bar {
    padding: 0.85rem 1.15rem;
    background-color: rgba(212, 175, 55, 0.08);
    border-left: 2px solid #D4AF37;
    font-size: 0.85rem;
    color: #F3E5AB;
  }

  .monograph-entry__links-row {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    padding-top: 0.5rem;
  }

  /* ==========================================================================
     MS-083, MS-084, MS-085, MS-086: ARCHITECTURAL LEDGER SECTIONS
     ========================================================================== */
  .editorial-section-stage {
    width: 100vw;
    background-color: #050507;
    border-bottom: 1px solid rgba(212, 175, 55, 0.24);
    padding: var(--gutter-vertical) var(--gutter-cinema);
  }

  .editorial-section-stage--onyx {
    background-color: #0B0C10;
  }

  .editorial-section-stage--charcoal {
    background-color: #12141C;
  }

  .editorial-section-stage__container {
    max-width: 1720px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }

  .editorial-section-stage__header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-end;
    gap: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(212, 175, 55, 0.22);
  }

  .comparison-matrix-table-wrap {
    width: 100%;
    overflow-x: auto;
    border-top: 1px solid rgba(212, 175, 55, 0.28);
    border-bottom: 1px solid rgba(212, 175, 55, 0.28);
  }

  .comparison-matrix-table {
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    min-width: 920px;
  }

  .comparison-matrix-table th,
  .comparison-matrix-table td {
    padding: 1.25rem 1rem;
    border-bottom: 1px solid rgba(234, 230, 223, 0.09);
    vertical-align: top;
  }

  .comparison-matrix-table th {
    font-family: 'Space Grotesk', sans-serif;
    font-size: 0.74rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #D4AF37;
    background-color: rgba(212, 175, 55, 0.05);
  }

  .comparison-matrix-table td {
    font-size: 0.9rem;
    color: #EAE6DF;
  }

  .state-hub-ledger-row {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-between;
    gap: 1.25rem;
    padding: 1.45rem 0;
    border-bottom: 1px solid rgba(234, 230, 223, 0.09);
    transition: background-color 200ms ease, padding-left 200ms ease;
  }

  .state-hub-ledger-row:hover {
    background-color: rgba(212, 175, 55, 0.04);
    padding-left: 0.75rem;
  }

  .faq-ledger-item {
    border-bottom: 1px solid rgba(212, 175, 55, 0.2);
  }

  .faq-ledger-item summary {
    list-style: none;
    cursor: pointer;
    padding: 1.65rem 0;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .faq-ledger-item summary::-webkit-details-marker {
    display: none;
  }

  .faq-ledger-item__question {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: clamp(1.35rem, 2vw, 1.8rem);
    color: #EAE6DF;
    line-height: 1.25;
    flex: 1;
  }

  .faq-ledger-item__body {
    padding: 0 0 1.85rem 0;
    color: #B8B3A8;
    font-size: 0.98rem;
    line-height: 1.75;
    max-width: 95ch;
  }

  @media (max-width: 1024px) {
    .monograph-split-curtain__pinned-left,
    .monograph-split-curtain__scrolling-right {
      width: 100vw;
      position: relative;
      height: auto;
      min-height: auto;
      border-right: none;
    }
    .product-cinema-chapter__visual-wing {
      position: relative;
      top: 0;
      max-width: 100%;
    }
  }
</style>
`;

/**
 * Renders Chapter MS-079: `100vw x 100vh` Obsidian Royal Apothecary Hero Stage
 */
function renderMs079HeroStage() {
  return `
<!-- ==========================================================================
     MS-079: 100vw x 100vh OBSIDIAN ROYAL APOTHECARY HERO STAGE (PARADIGM A)
     ========================================================================== -->
<section
  id="ms-079-obsidian-hero-stage"
  class="home-hero-cinema"
  aria-labelledby="home-hero-main-heading"
  data-micro-step="MS-079"
>
  <div class="home-hero-cinema__ambient-watermark" aria-hidden="true">ONYXMEN</div>

  <!-- Top Telemetry Horizon Ribbon -->
  <div class="home-hero-cinema__top-telemetry">
    <div class="home-hero-cinema__coordinates">
      <span class="home-hero-cinema__coordinates-pulse" aria-hidden="true"></span>
      <span>KUALA LUMPUR APOTHECARY VAULT · 3.1390° N, 101.6869° E · MYR OFFICIAL LEDGER</span>
    </div>
    <div class="home-hero-cinema__dispatch-ticker" aria-label="Malaysia Regional Dispatch Telemetry">
      <span class="home-hero-cinema__dispatch-zone">
        <strong>SAME-DAY 3–5 HR:</strong> KLANG VALLEY, KL, PJ, SUBANG, SHAH ALAM &amp; PUTRAJAYA
      </span>
      <span aria-hidden="true">·</span>
      <span class="home-hero-cinema__dispatch-zone">
        <strong>1–2 DAY EXPRESS:</strong> WEST MALAYSIA PENINSULAR
      </span>
      <span aria-hidden="true">·</span>
      <span class="home-hero-cinema__dispatch-zone">
        <strong>2–4 DAY AIR FREIGHT:</strong> SABAH, SARAWAK &amp; LABUAN
      </span>
    </div>
  </div>

  <!-- Centerpiece 100vw x 100vh Stage Core -->
  <div class="home-hero-cinema__stage-core">
    <!-- Left Editorial & Conversion Column -->
    <div class="home-hero-cinema__editorial-column">
      <span class="editorial-kicker">
        ARCHITECTURAL BOTANICAL APOTHECARY · ADULT MEN’S VITALITY VAULT MALAYSIA
      </span>

      <h1 id="home-hero-main-heading" class="home-hero-cinema__display-title">
        Four Standardized Botanical Reserves. <span class="foil-champagne-text">Engineered For Malaysian Stamina &amp; Evening Command.</span>
      </h1>

      <p class="home-hero-cinema__display-subtitle">
        HORSEMEN (20 CAPS × 500MG) · HAMMER OF THOR (20 VEG. CAPS) · GROW XL (30 CAPS) · MAGNUM PUMP XR (30 BLACK CAPS)
      </p>

      <p class="home-hero-cinema__lead-copy hero-subtitle">
        Formulated exclusively for adult men (18+) across Malaysia demanding pharmaceutical-grade botanical standardization without synthetic stimulants, caffeine crashes, or undeclared chemicals. Every bottle is climate-stored in our Kuala Lumpur vault and dispatched in a 100% plain, unmarked security parcel labeled <strong>"OM Fulfilment Logistics"</strong>.
      </p>

      <!-- Live MYR Official Reserve Ledger (RM 159 / RM 286 (10% OFF vs RM 318) / RM 405 (15% OFF vs RM 477)) -->
      <div class="home-hero-cinema__tariff-strip" role="region" aria-label="Official Malaysia MYR Reserve Pricing">
        <div class="home-hero-cinema__tariff-node">
          <span class="home-hero-cinema__tariff-eyebrow">TIER 01 · SINGLE CYCLE RESERVE</span>
          <strong class="home-hero-cinema__tariff-figure">RM 159 <span style="font-size:0.9rem;color:#B8B3A8;">(159.00 MYR)</span></strong>
          <span class="home-hero-cinema__tariff-note">1 Bottle · Free Peninsular MY Discreet Courier</span>
        </div>
        <div class="home-hero-cinema__tariff-node">
          <span class="home-hero-cinema__tariff-eyebrow">TIER 02 · DUAL MOMENTUM PROTOCOL</span>
          <strong class="home-hero-cinema__tariff-figure">RM 286 (10% OFF vs RM 318) <span style="font-size:0.9rem;color:#B8B3A8;">(318.00 MYR)</span></strong>
          <span class="home-hero-cinema__tariff-note">2 Bottles · Free Nationwide Shipping incl. Sabah &amp; Sarawak</span>
        </div>
        <div class="home-hero-cinema__tariff-node">
          <span class="home-hero-cinema__tariff-eyebrow">TIER 03 · 90-DAY MASTERY VAULT</span>
          <strong class="home-hero-cinema__tariff-figure">RM 405 (15% OFF vs RM 477) <span style="font-size:0.9rem;color:#B8B3A8;">(477.00 MYR)</span></strong>
          <span class="home-hero-cinema__tariff-note">3 Bottles · Priority Plain-Box Dispatch + VIP Refill Desk</span>
        </div>
      </div>

      <!-- 1-Click Express Order Drawer Triggers -->
      <div class="home-hero-cinema__cta-cluster">
        <button
          type="button"
          class="cta-foil-primary"
          data-open-order-drawer="true"
          data-order-open="true"
          data-order-product="horsemen"
          data-order-qty="1"
          aria-controls="onyxman-express-order-drawer"
        >
          <span>ACQUIRE DISCREET RESERVE · RM 159</span>
          <span aria-hidden="true">→</span>
        </button>

        <button
          type="button"
          class="cta-hairline-secondary"
          data-open-order-drawer="true"
          data-order-open="true"
          data-order-product="grow-xl"
          data-order-qty="2"
          aria-controls="onyxman-express-order-drawer"
        >
          <span>RESERVE 2-BOTTLE PROTOCOL · RM 318</span>
          <span aria-hidden="true">→</span>
        </button>

        <a href="#ms-081-diagnostic-selector" class="cta-hairline-secondary">
          <span>COMPARE 20-CAP VS 30-CAP CYCLES ↓</span>
        </a>
      </div>
    </div>

    <!-- Right Full-Stage Studio Lineup Showcase -->
    <div class="home-hero-cinema__visual-showcase">
      <div class="home-hero-cinema__picture-stage">
        <picture>
          <source srcset="/assets/products/onyxman-lineup-hero.webp" type="image/webp" />
          <img
            src="/assets/products/onyxman-lineup-hero.png"
            alt="Official Onyxmen Malaysia 4-Formulation Lineup: Horsemen (20 Capsules x 500mg), Hammer of Thor (20 Veg. Capsules), Grow XL (30 Capsules), and Magnum Pump XR (30 Black Capsules) — RM 159 per bottle"
            width="1920"
            height="1080"
            fetchpriority="high"
            decoding="async"
            class="home-hero-cinema__lineup-img"
            data-parallax-bottle="true"
          />
        </picture>
      </div>

      <!-- 4-Formulation Quick Selector Bar -->
      <div class="home-hero-cinema__quick-vault-bar" role="list" aria-label="Direct 1-Click Formulation Selection">
        <!-- 01: Horsemen -->
        <div class="home-hero-cinema__quick-item" role="listitem">
          <span class="home-hero-cinema__quick-sku">I · ONYX-HM-20 · 20 CAPS × 500MG</span>
          <a href="/products/horsemen/" class="home-hero-cinema__quick-title">Horsemen</a>
          <span class="home-hero-cinema__quick-spec">100:1 Tongkat Ali + Black Maca · Day-18 Refill</span>
          <div class="home-hero-cinema__quick-actions">
            <a href="/horsemen-malaysia/" title="Horsemen Malaysia Official Reserve">Dossier →</a>
            <button
              type="button"
              data-open-order-drawer="true"
              data-order-open="true"
              data-order-product="horsemen"
              data-order-qty="1"
              style="color:#D4AF37;font-weight:700;"
            >
              Reserve RM 159 +
            </button>
          </div>
        </div>

        <!-- 02: Hammer of Thor -->
        <div class="home-hero-cinema__quick-item" role="listitem">
          <span class="home-hero-cinema__quick-sku">II · ONYX-HT-20 · 20 VEG. CAPSULES</span>
          <a href="/products/hammer-of-thor/" class="home-hero-cinema__quick-title">Hammer of Thor</a>
          <span class="home-hero-cinema__quick-spec">60% Saponin Tribulus + Zinc · Plant HPMC Shell</span>
          <div class="home-hero-cinema__quick-actions">
            <a href="/hammer-of-thor-malaysia/" title="Hammer of Thor Malaysia Vegetarian Capsules">Dossier →</a>
            <button
              type="button"
              data-open-order-drawer="true"
              data-order-open="true"
              data-order-product="hammer-of-thor"
              data-order-qty="1"
              style="color:#D4AF37;font-weight:700;"
            >
              Reserve RM 159 +
            </button>
          </div>
        </div>

        <!-- 03: Grow XL -->
        <div class="home-hero-cinema__quick-item" role="listitem">
          <span class="home-hero-cinema__quick-sku">III · ONYX-GX-30 · 30 CAPSULES</span>
          <a href="/products/grow-xl/" class="home-hero-cinema__quick-title">Grow XL</a>
          <span class="home-hero-cinema__quick-spec">#1 Selling 30-Day Daily Blend · Day-25 Refill</span>
          <div class="home-hero-cinema__quick-actions">
            <a href="/grow-xl-malaysia/" title="Grow XL Malaysia 30-Capsule Protocol">Dossier →</a>
            <button
              type="button"
              data-open-order-drawer="true"
              data-order-open="true"
              data-order-product="grow-xl"
              data-order-qty="1"
              style="color:#D4AF37;font-weight:700;"
            >
              Reserve RM 159 +
            </button>
          </div>
        </div>

        <!-- 04: Magnum Pump XR -->
        <div class="home-hero-cinema__quick-item" role="listitem">
          <span class="home-hero-cinema__quick-sku">IV · ONYX-MP-30 · 30 BLACK CAPSULES</span>
          <a href="/products/magnum-pump-xr/" class="home-hero-cinema__quick-title">Magnum Pump XR</a>
          <span class="home-hero-cinema__quick-spec">L-Arginine + L-Citrulline Nitric Oxide XR</span>
          <div class="home-hero-cinema__quick-actions">
            <a href="/magnum-pump-xr-malaysia/" title="Magnum Pump XR 30 Black Capsules Malaysia">Dossier →</a>
            <button
              type="button"
              data-open-order-drawer="true"
              data-order-open="true"
              data-order-product="magnum-pump-xr"
              data-order-qty="1"
              style="color:#D4AF37;font-weight:700;"
            >
              Reserve RM 159 +
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Bottom Discreet Telemetry Bar -->
  <div class="home-hero-cinema__bottom-ledger">
    <div class="home-hero-cinema__telemetry-col">
      <span class="home-hero-cinema__telemetry-label">01 · BLIND WAYBILL PRIVACY ARCHITECTURE</span>
      <span class="home-hero-cinema__telemetry-val">Sender listed strictly as "OM Fulfilment Logistics" · Zero supplement titles on parcel</span>
    </div>
    <div class="home-hero-cinema__telemetry-col">
      <span class="home-hero-cinema__telemetry-label">02 · MALAYSIAN SETTLEMENT CHANNELS</span>
      <span class="home-hero-cinema__telemetry-val">FPX Online Banking · DuitNow Instant QR · Zero-Risk Cash on Delivery (COD)</span>
    </div>
    <div class="home-hero-cinema__telemetry-col">
      <span class="home-hero-cinema__telemetry-label">03 · BATCH PURITY &amp; COMPLIANCE</span>
      <span class="home-hero-cinema__telemetry-val">100% Standardized Botanical &amp; Amino-Acid Dietary Supplements · Zero Synthetic Adulterants</span>
    </div>
    <div class="home-hero-cinema__telemetry-col">
      <span class="home-hero-cinema__telemetry-label">04 · DIRECT KUALA LUMPUR CONCIERGE DESK</span>
      <span class="home-hero-cinema__telemetry-val">sales@onyxmen.my · info@onyxmen.my · Bahasa Malaysia: <a href="/ms/" style="color:#F3E5AB;text-decoration:underline;">onyxman.my/ms/</a></span>
    </div>
  </div>
</section>
`;
}

/**
 * Renders a single Full-Viewport Product Cinema Chapter (`MS-080A` to `MS-080D`)
 */
function renderProductCinemaChapter(product, config) {
  const loc = product.locales['en-MY'];
  const label = product.labelTranscription;
  const refill = product.refillProtocol;
  const tiers = product.pricing.bundleTiers;

  const activesRowsHtml = product.botanicalActives
    .map(
      (act, idx) => `
          <div class="architectural-ledger__row" role="listitem">
            <span class="architectural-ledger__index">0${idx + 1} · ${esc(act.code)}</span>
            <div style="flex:1 1 250px;">
              <h4 class="architectural-ledger__title" style="font-size:1.3rem;">${esc(act.commonNameEn)}</h4>
              <span style="font-size:0.78rem;color:#D4AF37;display:block;">${esc(act.scientificName)} — ${esc(act.standardization)}</span>
            </div>
            <p class="architectural-ledger__detail">${esc(act.roleEn)}</p>
            <span class="architectural-ledger__metric">${act.dosagePerCapsuleMg} MG / CAP</span>
          </div>`
    )
    .join('\n');

  const modesHtml = product.usageProtocol.modes
    .map(
      (m) => `
          <div class="product-cinema-chapter__protocol-mode">
            <strong>${esc(m.titleEn)}</strong>
            <p>${esc(m.instructionEn)}</p>
          </div>`
    )
    .join('\n');

  const timelineHtml = product.progressionTimeline
    .map(
      (st, idx) => `
          <div class="architectural-ledger__row" role="listitem">
            <span class="architectural-ledger__index">PHASE 0${idx + 1}</span>
            <h4 class="architectural-ledger__title" style="font-size:1.25rem;">${esc(st.stage)} — ${esc(st.titleEn)}</h4>
            <p class="architectural-ledger__detail">${esc(st.detailEn)}</p>
            <span class="architectural-ledger__metric">DAY-${refill.refillReminderDay} ALERT</span>
          </div>`
    )
    .join('\n');

  const tiersHtml = tiers
    .map(
      (tier) => `
          <button
            type="button"
            class="tier-strip-option ${tier.bottles === 2 ? 'tier-strip-option--selected' : ''}"
            data-open-order-drawer="true"
            data-order-open="true"
            data-order-product="${esc(product.id)}"
            data-order-qty="${tier.bottles}"
            aria-label="Select ${esc(product.name)} ${tier.bottles} Bottle Tier at ${esc(tier.priceFormatted)}"
          >
            <div class="tier-strip-option__left">
              <span class="tier-strip-option__eyebrow">${esc(tier.badgeEn)} · ${tier.totalCapsules} CAPSULES TOTAL (${tier.cycleDurationDays}-DAY CYCLE)</span>
              <strong class="tier-strip-option__title">${esc(tier.titleEn)}</strong>
              <span class="tier-strip-option__subtitle">${esc(tier.shippingEn)} · Automated Day-${tier.refillTriggerDay} Refill Alert</span>
            </div>
            <span class="tier-strip-option__price">${esc(tier.priceFormatted)} <span style="font-size:0.85rem;color:#B8B3A8;display:block;">(${esc(tier.priceSchema)} MYR)</span></span>
          </button>`
    )
    .join('\n');

  const disambiguationBannerHtml = product.entityDisambiguation
    ? `
        <div class="product-cinema-chapter__disambiguation-banner" role="note">
          <strong style="color:#F3E5AB;letter-spacing:0.12em;text-transform:uppercase;display:block;margin-bottom:0.25rem;">
            DIETARY SUPPLEMENT CLASSIFICATION &amp; ENTITY DISAMBIGUATION (SKU: ${esc(product.sku)}):
          </strong>
          ${esc(product.entityDisambiguation.positiveClassificationEn)} ${esc(product.entityDisambiguation.negativeDisambiguationEn)}
        </div>`
    : '';

  return `
<!-- ==========================================================================
     ${config.microStep}: FULL-VIEWPORT PRODUCT CINEMA CHAPTER — ${product.name.toUpperCase()}
     ========================================================================== -->
<section
  id="${config.sectionId}"
  class="product-cinema-chapter ${config.altBg ? 'product-cinema-chapter--alt' : ''} ${config.reverse ? 'product-cinema-chapter--reverse' : ''}"
  aria-labelledby="heading-${product.id}"
  data-micro-step="${config.microStep}"
  data-product-chapter="${product.id}"
>
  <div class="product-cinema-chapter__inner">
    <!-- Top Architectural Chapter Ledger Bar -->
    <div class="product-cinema-chapter__header-bar">
      <span class="product-cinema-chapter__chapter-id">
        ${esc(config.microStep)} · CHAPTER ${esc(config.roman)} · ${esc(loc.heroEyebrow)}
      </span>
      <span class="product-cinema-chapter__sku-ledger">
        SKU: ${esc(product.sku)} · MPN: ${esc(product.mpn)} · GTIN-13: ${esc(product.gtin13)} · OFFICIAL RESERVE: RM 159 (159.00 MYR)
      </span>
    </div>

    <!-- Split Visual & Botanical Dossier Stage -->
    <div class="product-cinema-chapter__split-stage">
      <!-- Left/Right Sticky Studio Stage Image Wing -->
      <div class="product-cinema-chapter__visual-wing">
        <div class="product-cinema-chapter__stage-frame">
          <span class="product-cinema-chapter__roman-watermark" aria-hidden="true">${esc(config.roman)}</span>
          <picture>
            <source srcset="${esc(product.images.stageWebp)}" type="image/webp" />
            <img
              src="${esc(product.images.stagePng)}"
              alt="${esc(product.images.altEn)}"
              width="1600"
              height="1200"
              loading="lazy"
              decoding="async"
              class="product-cinema-chapter__stage-img"
            />
          </picture>
          <div class="product-cinema-chapter__label-transcription">
            <span><strong>BOTTLE INSCRIPTION:</strong> "${esc(label.primaryTitle)} — ${esc(label.subtitleEn)}"</span>
            <span><strong>FORMAT:</strong> ${label.capsuleCount} Caps × ${label.capsuleWeightMg}mg (${label.netWeightGrams}g Net)</span>
          </div>
        </div>

        <!-- Secondary Portrait & Direct Links Ledger -->
        <div class="architectural-ledger">
          <div class="architectural-ledger__row">
            <span class="architectural-ledger__index">REFILL</span>
            <span class="architectural-ledger__title" style="font-size:1.15rem;">Automated Day-${refill.refillReminderDay} Continuity Protocol</span>
            <span class="architectural-ledger__metric">${label.capsuleCount} CAPS / BOTTLE</span>
          </div>
          <div class="architectural-ledger__row">
            <span class="architectural-ledger__index">DISPATCH</span>
            <span class="architectural-ledger__title" style="font-size:1.15rem;">Plain Unmarked Parcel ("OM Fulfilment Logistics")</span>
            <span class="architectural-ledger__metric">COD · FPX · DUITNOW</span>
          </div>
          <div class="architectural-ledger__row">
            <span class="architectural-ledger__index">ROUTES</span>
            <span class="architectural-ledger__detail">
              Canonical Dossier: <a href="${esc(product.routes.enPath)}" style="color:#F3E5AB;text-decoration:underline;">${esc(product.routes.enPath)}</a>
              · Malaysia Direct Alias: <a href="${esc(config.malaysiaAliasPath)}" style="color:#F3E5AB;text-decoration:underline;">${esc(config.malaysiaAliasPath)}</a>
              · BM Version: <a href="${esc(product.routes.msPath)}" style="color:#F3E5AB;text-decoration:underline;">${esc(product.routes.msPath)}</a>
            </span>
          </div>
        </div>
      </div>

      <!-- Right/Left Narrative, Botanical Breakdown & Tier Selector Wing -->
      <div class="product-cinema-chapter__dossier-wing">
        <div>
          <span class="editorial-kicker">${esc(loc.heroEyebrow)}</span>
          <h2 id="heading-${product.id}" class="product-cinema-chapter__title">
            ${esc(loc.heroHeadline)}
          </h2>
        </div>

        <p class="product-cinema-chapter__official-subtitle">
          OFFICIAL LABEL SPECIFICATION: "${esc(label.subtitleEn)}" — ${esc(label.capsuleFormatEn)}
        </p>

        <p class="product-cinema-chapter__narrative">
          ${esc(loc.heroSubheadline)} ${esc(loc.positioningSummary)}
        </p>

        <p class="product-cinema-chapter__narrative">
          <strong style="color:#F3E5AB;">Ideal Malaysian Client Profile:</strong> ${esc(loc.idealUserProfile)}
          <strong style="color:#F3E5AB;">Apothecary Craft &amp; Dissolution:</strong> ${esc(loc.sensoryAndCraftNotes)}
        </p>

        ${disambiguationBannerHtml}

        <!-- Complete 6-Active Botanical & Amino-Acid Breakdown Ledger -->
        <div>
          <h3 class="product-cinema-chapter__subheading">
            COMPLETE STANDARDIZED PHYTOCHEMICAL &amp; AMINO-ACID COMPOSITION (${product.usageProtocol.servingSize} · ${product.usageProtocol.totalNetPotencyMg}MG PER BOTTLE)
          </h3>
          <div class="architectural-ledger" role="list" aria-label="${esc(product.name)} Active Botanical Ingredients">
            ${activesRowsHtml}
          </div>
        </div>

        <!-- 30-Day / 18-Day Cycle Protocol & Intake Timing -->
        <div>
          <h3 class="product-cinema-chapter__subheading">
            DOSAGE TIMING, TROPICAL HYDRATION &amp; DAY-${refill.refillReminderDay} REFILL PROTOCOL
          </h3>
          <div class="product-cinema-chapter__protocol-strip">
            ${modesHtml}
            <div class="product-cinema-chapter__protocol-mode">
              <strong>Day-${refill.refillReminderDay} Refill Synchronization &amp; Tropical Storage</strong>
              <p>${esc(refill.protocolSummaryEn)} ${esc(product.usageProtocol.storageEn)}</p>
            </div>
          </div>
        </div>

        <!-- 3-Phase Physiological Progression Timeline -->
        <div>
          <h3 class="product-cinema-chapter__subheading">
            PHYSIOLOGICAL CONDITIONING TIMELINE Across ${label.capsuleCount}-CAPSULE RESERVE
          </h3>
          <div class="architectural-ledger" role="list">
            ${timelineHtml}
          </div>
        </div>

        <!-- 1 / 2 / 3 Bottle Tier Selector Strip (RM 159 / RM 286 (10% OFF vs RM 318) / RM 405 (15% OFF vs RM 477)) -->
        <div>
          <h3 class="product-cinema-chapter__subheading">
            SELECT ${esc(product.name.toUpperCase())} RESERVE TIER (UNIFORM MALAYSIA TARIFF: RM 159 / RM 286 (10% OFF vs RM 318) / RM 405 (15% OFF vs RM 477))
          </h3>
          <div class="tier-strip-group" role="group" aria-label="${esc(product.name)} Multi-Bottle Tier Selector">
            ${tiersHtml}
          </div>
        </div>

        <!-- Direct Express Order Drawer Trigger & Full Dossier Links -->
        <div class="product-cinema-chapter__cta-row">
          <button
            type="button"
            class="cta-foil-primary"
            data-open-order-drawer="true"
            data-order-open="true"
            data-order-product="${esc(product.id)}"
            data-order-qty="1"
            aria-controls="onyxman-express-order-drawer"
          >
            <span>ACQUIRE ${esc(product.name.toUpperCase())} IN PLAIN PARCEL · RM 159</span>
            <span aria-hidden="true">→</span>
          </button>

          <a href="${esc(product.routes.enPath)}" class="cta-hairline-secondary">
            <span>INSPECT FULL ${esc(product.name.toUpperCase())} MONOGRAPH →</span>
          </a>

          <a href="${esc(config.malaysiaAliasPath)}" class="cta-hairline-secondary">
            <span>MALAYSIA DIRECT HUB (${esc(config.malaysiaAliasPath)}) →</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
`;
}

/**
 * Renders Chapter MS-081: Interactive 4-Formulation Diagnostic & Protocol Selector Matrix
 */
function renderMs081DiagnosticSelector() {
  return `
<!-- ==========================================================================
     MS-081: INTERACTIVE 4-FORMULATION DIAGNOSTIC & PROTOCOL SELECTOR MATRIX
     ========================================================================== -->
<section
  id="ms-081-diagnostic-selector"
  class="diagnostic-selector-stage"
  aria-labelledby="heading-ms-081-diagnostic"
  data-micro-step="MS-081"
  data-goal-quiz="true"
>
  <div class="diagnostic-selector-stage__inner">
    <div class="diagnostic-selector-stage__header">
      <div style="flex:1 1 520px;display:flex;flex-direction:column;gap:0.85rem;">
        <span class="editorial-kicker">
          MS-081 · INTERACTIVE PHYSIOLOGICAL DIAGNOSTIC &amp; CYCLE CALIBRATION MATRIX
        </span>
        <h2 id="heading-ms-081-diagnostic" class="editorial-headline-lg">
          20-Capsule Rapid &amp; Vegetarian Reserves vs. 30-Capsule Full-Month &amp; Nitric Oxide Cycles
        </h2>
      </div>
      <div style="flex:1 1 440px;">
        <p style="color:#B8B3A8;font-size:0.98rem;line-height:1.7;">
          Because all four Onyxmen formulations are priced identically at <strong>RM 159 (1 Bottle)</strong>, <strong>RM 286 (10% OFF vs RM 318) (2 Bottles)</strong>, and <strong>RM 405 (15% OFF vs RM 477) (3 Bottles)</strong>, your selection depends purely on your primary physiological goal, capsule shell preference, and intake timing. Select your primary objective below to calibrate your protocol:
        </p>
      </div>
    </div>

    <div class="diagnostic-selector-stage__quiz-layout">
      <!-- Left Interactive Goal Buttons -->
      <div class="diagnostic-selector-stage__options-col" role="group" aria-label="Select Your Primary Physiological Objective">
        <span class="product-cinema-chapter__subheading">
          STEP 01 · SELECT YOUR PRIMARY ADULT MALE PERFORMANCE OBJECTIVE:
        </span>

        <div class="tier-strip-group" style="margin-top:0.5rem;">
          <!-- Option 1: Evening Readiness -> Horsemen -->
          <button
            type="button"
            class="tier-strip-option tier-strip-option--selected"
            data-quiz-goal="evening-readiness"
            aria-pressed="true"
          >
            <div class="tier-strip-option__left">
              <span class="tier-strip-option__eyebrow">OBJECTIVE 01 · 20 CAPSULES × 500MG · DAY-18 REFILL CYCLE</span>
              <strong class="tier-strip-option__title">Rapid 45–60 Minute Evening Readiness &amp; Post-Work Stamina Resilience</strong>
              <span class="tier-strip-option__subtitle">
                Ideal for KL, JB &amp; Penang executives wanting high-density 100:1 Malaysian Tongkat Ali (150mg), Black Maca (100mg) &amp; Epimedium (80mg) before evening activity.
              </span>
            </div>
            <span class="tier-strip-option__price">Horsemen →</span>
          </button>

          <!-- Option 2: Vegetarian Tribulus -> Hammer of Thor -->
          <button
            type="button"
            class="tier-strip-option"
            data-quiz-goal="sustained-endurance"
            aria-pressed="false"
          >
            <div class="tier-strip-option__left">
              <span class="tier-strip-option__eyebrow">OBJECTIVE 02 · 20 VEG. CAPSULES (HPMC PLANT SHELL) · DAY-18 REFILL CYCLE</span>
              <strong class="tier-strip-option__title">100% Vegetarian Capsules + 60%-Saponin Tribulus Terrestris &amp; Chelated Zinc</strong>
              <span class="tier-strip-option__subtitle">
                Ideal for men who strictly require gelatin-free plant-cellulose capsules with 200mg standardized Tribulus saponins and 15mg Zinc Bisglycinate for muscular recovery.
              </span>
            </div>
            <span class="tier-strip-option__price">Hammer of Thor →</span>
          </button>

          <!-- Option 3: 30-Day Daily Vitality -> Grow XL -->
          <button
            type="button"
            class="tier-strip-option"
            data-quiz-goal="daily-30day-vitality"
            aria-pressed="false"
          >
            <div class="tier-strip-option__left">
              <span class="tier-strip-option__eyebrow">OBJECTIVE 03 · 30 CAPSULES FULL-MONTH REGIMEN · DAY-25 REFILL CYCLE</span>
              <strong class="tier-strip-option__title">30-Day Morning Baseline Vitality, Micro-Circulation &amp; Male Wellness</strong>
              <span class="tier-strip-option__subtitle">
                Ideal for men wanting a 1-capsule-after-breakfast 30-to-90-day progressive habit combining Extra-Strength Tongkat Ali, Maca, Brazilian Muira Puama &amp; Saw Palmetto.
              </span>
            </div>
            <span class="tier-strip-option__price">Grow XL →</span>
          </button>

          <!-- Option 4: Nitric Oxide Gym & Evening -> Magnum Pump XR -->
          <button
            type="button"
            class="tier-strip-option"
            data-quiz-goal="nitric-oxide-pump"
            aria-pressed="false"
          >
            <div class="tier-strip-option__left">
              <span class="tier-strip-option__eyebrow">OBJECTIVE 04 · 30 SIGNATURE BLACK CAPSULES · DAY-25 REFILL CYCLE</span>
              <strong class="tier-strip-option__title">Extended-Release (XR) Nitric Oxide Vasodilation, Pre-Gym Pump &amp; Peak Output</strong>
              <span class="tier-strip-option__subtitle">
                Ideal for gym-goers and active men wanting 320mg combined L-Arginine HCl + L-Citrulline Malate catalyzed by Bioperine &amp; Thai Black Ginger 30–45 mins pre-activity.
              </span>
            </div>
            <span class="tier-strip-option__price">Magnum Pump XR →</span>
          </button>
        </div>
      </div>

      <!-- Right Live Diagnostic Prescription Pane -->
      <div
        class="diagnostic-selector-stage__result-col"
        data-quiz-result="true"
        aria-live="polite"
      >
        <span class="editorial-kicker" data-quiz-result-badge>
          RECOMMENDED 20-CAPSULE RESERVE · HORSEMEN
        </span>

        <h3 class="editorial-headline-lg" style="font-size:clamp(1.75rem,2.6vw,2.45rem);" data-quiz-result-headline>
          Horsemen — High-Potency Tongkat Ali &amp; Black Maca Reserve (20 Capsules × 500mg)
        </h3>

        <p style="color:#B8B3A8;font-size:0.96rem;line-height:1.7;" data-quiz-result-rationale>
          Engineered for rapid 45–60 minute evening readiness and adaptogenic drive using standardized Malaysian Eurycoma longifolia and Peruvian Black Maca.
        </p>

        <div class="architectural-ledger" style="margin-top:0.5rem;">
          <div class="architectural-ledger__row" style="padding:0.95rem 0;">
            <span class="architectural-ledger__index">SINGLE</span>
            <span class="architectural-ledger__title" style="font-size:1.1rem;">1 Bottle Single Cycle Reserve</span>
            <span class="architectural-ledger__metric">RM 159 (159.00 MYR)</span>
          </div>
          <div class="architectural-ledger__row" style="padding:0.95rem 0;">
            <span class="architectural-ledger__index">DUAL</span>
            <span class="architectural-ledger__title" style="font-size:1.1rem;">2 Bottles Dual Momentum (Free Nationwide MY Shipping)</span>
            <span class="architectural-ledger__metric">RM 286 (10% OFF vs RM 318) (318.00 MYR)</span>
          </div>
          <div class="architectural-ledger__row" style="padding:0.95rem 0;">
            <span class="architectural-ledger__index">VAULT</span>
            <span class="architectural-ledger__title" style="font-size:1.1rem;">3 Bottles 90-Day Mastery Vault + Priority Concierge</span>
            <span class="architectural-ledger__metric">RM 405 (15% OFF vs RM 477) (477.00 MYR)</span>
          </div>
        </div>

        <div style="display:flex;flex-wrap:wrap;gap:1rem;margin-top:0.75rem;">
          <button
            type="button"
            class="cta-foil-primary"
            data-open-order-drawer="true"
            data-order-open="true"
            data-order-product="horsemen"
            data-order-qty="2"
            data-quiz-order-btn="true"
            style="width:100%;justify-content:center;"
          >
            <span>ACQUIRE RECOMMENDED 2-BOTTLE PROTOCOL · RM 318</span>
            <span aria-hidden="true">→</span>
          </button>

          <a
            href="/products/horsemen/"
            class="cta-hairline-secondary"
            data-quiz-explore-link="true"
            style="width:100%;justify-content:center;text-align:center;"
          >
            <span>INSPECT FULL BOTANICAL DOSSIER →</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Architectural Cycle Architecture Breakdown Ledger -->
    <div class="architectural-ledger" role="list" aria-label="20-Capsule vs 30-Capsule Protocol Architecture">
      <div class="architectural-ledger__row" role="listitem">
        <span class="architectural-ledger__index">PROTOCOL A</span>
        <h3 class="architectural-ledger__title">20-Capsule Concentrated Reserves (Horsemen &amp; Hammer of Thor)</h3>
        <p class="architectural-ledger__detail">
          500mg per capsule · 10,000mg total active botanicals per bottle · Synchronized with an automated Day-18 Google Calendar &amp; WhatsApp refill alert so your next RM 159 bottle arrives before Capsule #20 is consumed.
        </p>
        <span class="architectural-ledger__metric">DAY-18 REFILL TRIGGER</span>
      </div>
      <div class="architectural-ledger__row" role="listitem">
        <span class="architectural-ledger__index">PROTOCOL B</span>
        <h3 class="architectural-ledger__title">30-Capsule Full-Month Regimens (Grow XL &amp; Magnum Pump XR)</h3>
        <p class="architectural-ledger__detail">
          550mg–600mg per capsule · 16,500mg–18,000mg total actives per bottle · Synchronized with an automated Day-25 refill alert (with 5 capsules remaining in reserve) for uninterrupted 30-to-90-day vascular &amp; adaptogenic conditioning.
        </p>
        <span class="architectural-ledger__metric">DAY-25 REFILL TRIGGER</span>
      </div>
    </div>
  </div>
</section>
`;
}

/**
 * Renders Chapter MS-082: Paradigm D Pinned `50vw / 50vw` Split-Screen Botanical Monograph Curtain
 */
function renderMs082BotanicalMonographCurtain() {
  const monographs = botanicalsData.monographs;

  const extraShortcutMap = {
    'tongkat-ali': {
      shortPath: '/ingredients/tongkat-ali-malaysia/',
      canonicalPath: '/ingredients/tongkat-ali-eurycoma-longifolia/',
      stepImage: '/assets/products/horsemen-portrait.webp',
      stepIndex: '01',
    },
    'tribulus-terrestris': {
      shortPath: '/ingredients/tribulus-terrestris-malaysia/',
      canonicalPath: '/ingredients/tribulus-terrestris-saponins/',
      stepImage: '/assets/products/hammer-of-thor-portrait.webp',
      stepIndex: '02',
    },
    'peruvian-maca-root': {
      shortPath: '/ingredients/maca-root-malaysia/',
      canonicalPath: '/ingredients/black-maca-lepidium-meyenii/',
      stepImage: '/assets/products/grow-xl-portrait.webp',
      stepIndex: '03',
    },
    'l-arginine-nitric-oxide': {
      shortPath: '/ingredients/l-arginine-nitric-oxide/',
      canonicalPath: '/ingredients/l-arginine-l-citrulline-nitric-oxide/',
      stepImage: '/assets/products/magnum-pump-xr-portrait.webp',
      stepIndex: '04',
    },
  };

  const entriesHtml = monographs
    .map((m, idx) => {
      const loc = m.locales['en-MY'];
      const links = extraShortcutMap[m.id] || {
        shortPath: m.enPath,
        canonicalPath: m.enPath,
        stepImage: '/assets/products/horsemen-portrait.webp',
        stepIndex: `0${idx + 1}`,
      };

      const featuredListHtml = m.featuredInProducts
        .map(
          (fp) => `
            <div class="architectural-ledger__row" style="padding:0.85rem 0;">
              <span class="architectural-ledger__index">${esc(fp.productId.toUpperCase())}</span>
              <span class="architectural-ledger__title" style="font-size:1.1rem;">${esc(fp.productName)}</span>
              <span class="architectural-ledger__metric">${fp.dosagePerCapsuleMg} MG / CAPSULE · ${esc(fp.priceFormatted)}</span>
            </div>`
        )
        .join('\n');

      const markersHtml = m.qualityMarkers
        .map((qm) => `<li style="margin-bottom:0.35rem;color:#B8B3A8;font-size:0.88rem;">✓ ${esc(qm)}</li>`)
        .join('\n');

      return `
      <article
        id="monograph-${esc(m.id)}"
        class="monograph-entry"
        data-botanical-step="${esc(m.id)}"
        data-step-image="${esc(links.stepImage)}"
        data-step-index="${esc(links.stepIndex)}"
      >
        <div class="monograph-entry__taxonomy">
          <span>MONOGRAPH 0${idx + 1} · ${esc(m.microStep)} · ${esc(m.family)}</span>
          <span>SCIENTIFIC TAXON: ${esc(m.scientificName)}</span>
        </div>

        <h3 class="monograph-entry__title">${esc(loc.commonTitle)}</h3>
        <p style="font-family:'Syne',sans-serif;font-size:0.88rem;letter-spacing:0.1em;text-transform:uppercase;color:#F3E5AB;">
          ${esc(loc.subtitle)}
        </p>

        <div class="monograph-entry__spec-bar">
          <strong>STANDARDIZATION &amp; ORIGIN:</strong> ${esc(m.standardizationSpec)} · Origin: ${esc(m.originGeographyEn)}
        </div>

        <p style="color:#B8B3A8;font-size:0.96rem;line-height:1.72;">
          <strong style="color:#EAE6DF;">Ethnobotanical Heritage &amp; Extraction:</strong> ${esc(loc.heritageAndExtraction)}
        </p>

        <p style="color:#B8B3A8;font-size:0.96rem;line-height:1.72;">
          <strong style="color:#EAE6DF;">Physiological Mechanism in Adult Men:</strong> ${esc(loc.physiologicalMechanism)}
        </p>

        <p style="color:#B8B3A8;font-size:0.96rem;line-height:1.72;">
          <strong style="color:#EAE6DF;">Synergy Across Onyxmen Formulations:</strong> ${esc(loc.synergyInOnyxmen)}
        </p>

        <div class="architectural-ledger" aria-label="Dosage per Onyxmen Formulation">
          ${featuredListHtml}
        </div>

        <ul style="list-style:none;padding-top:0.5rem;">
          ${markersHtml}
        </ul>

        <div class="monograph-entry__links-row">
          <a href="${esc(links.shortPath)}" class="cta-hairline-secondary">
            <span>READ ${esc(m.shortSlug.toUpperCase())} MONOGRAPH (${esc(links.shortPath)}) →</span>
          </a>
          <a href="${esc(links.canonicalPath)}" class="cta-hairline-secondary">
            <span>SCIENTIFIC DOSSIER (${esc(links.canonicalPath)}) →</span>
          </a>
        </div>
      </article>`;
    })
    .join('\n');

  return `
<!-- ==========================================================================
     MS-082: PARADIGM D PINNED 50vw / 50vw SPLIT-SCREEN BOTANICAL MONOGRAPH CURTAIN
     ========================================================================== -->
<section
  id="ms-082-botanical-monograph-curtain"
  class="monograph-split-curtain split-stage-5050"
  aria-labelledby="heading-ms-082-monographs"
  data-micro-step="MS-082"
  data-split-stage="true"
>
  <!-- Left 50vw Pinned Visual & Telemetry Stage -->
  <div class="monograph-split-curtain__pinned-left">
    <div>
      <span class="editorial-kicker">
        MS-082 · PARADIGM D · 50VW / 50VW PINNED PHYTOCHEMICAL MONOGRAPH STAGE
      </span>
      <h2 id="heading-ms-082-monographs" class="editorial-headline-lg" style="margin-top:0.85rem;">
        Standardized Aqueous Extracts &amp; Pharmaceutical Amino Acids. <span class="foil-champagne-text">Zero Raw Bark Fillers.</span>
      </h2>
      <p style="color:#B8B3A8;font-size:0.95rem;line-height:1.68;margin-top:1rem;max-width:52ch;">
        Unstandardized street herbs contain mostly indigestible cellulose wood fiber. Onyxmen formulates exclusively with HPLC-verified botanical extracts and free-form nitric oxide precursors.
      </p>
    </div>

    <div class="split-stage-5050__visual-figure" style="margin:1.5rem auto;">
      <span class="split-stage-5050__index-watermark" data-split-watermark="true" aria-hidden="true">01</span>
      <img
        src="/assets/products/horsemen-portrait.webp"
        alt="Onyxmen Malaysia Standardized Botanical Apothecary Formulation"
        width="900"
        height="1125"
        loading="lazy"
        decoding="async"
        class="split-stage-5050__visual-img"
        data-split-visual-img="true"
        style="max-height:48vh;"
      />
    </div>

    <div class="architectural-ledger">
      <div class="architectural-ledger__row" style="padding:0.75rem 0;">
        <span class="architectural-ledger__index">MONO · 01</span>
        <a href="/ingredients/tongkat-ali-malaysia/" style="color:#F3E5AB;font-size:0.9rem;">Malaysian Tongkat Ali 100:1 (≥2.2% Eurycomanone)</a>
        <span class="architectural-ledger__metric">150 MG MAX</span>
      </div>
      <div class="architectural-ledger__row" style="padding:0.75rem 0;">
        <span class="architectural-ledger__index">MONO · 02</span>
        <a href="/ingredients/tribulus-terrestris-malaysia/" style="color:#F3E5AB;font-size:0.9rem;">60%-Saponin Tribulus Terrestris &amp; Panax Ginseng</a>
        <span class="architectural-ledger__metric">200 MG MAX</span>
      </div>
      <div class="architectural-ledger__row" style="padding:0.75rem 0;">
        <span class="architectural-ledger__index">MONO · 03</span>
        <a href="/ingredients/maca-root-malaysia/" style="color:#F3E5AB;font-size:0.9rem;">Gelatinized Peruvian Black Maca (≥0.6% Macamides)</a>
        <span class="architectural-ledger__metric">110 MG MAX</span>
      </div>
      <div class="architectural-ledger__row" style="padding:0.75rem 0;">
        <span class="architectural-ledger__index">MONO · 04</span>
        <a href="/ingredients/l-arginine-nitric-oxide/" style="color:#F3E5AB;font-size:0.9rem;">L-Arginine HCl + L-Citrulline Malate + Bioperine</a>
        <span class="architectural-ledger__metric">320 MG XR</span>
      </div>
    </div>
  </div>

  <!-- Right 50vw Scrolling Monograph Dossiers -->
  <div class="monograph-split-curtain__scrolling-right">
    ${entriesHtml}

    <div style="border-top:1px solid rgba(212,175,55,0.24);padding-top:2rem;display:flex;flex-wrap:wrap;gap:1rem;">
      <a href="/ingredients/" class="cta-foil-primary">
        <span>EXPLORE COMPLETE BOTANICAL MONOGRAPH VAULT (/ingredients/)</span>
        <span aria-hidden="true">→</span>
      </a>
      <button
        type="button"
        class="cta-hairline-secondary"
        data-open-order-drawer="true"
        data-order-open="true"
        data-order-product="horsemen"
        data-order-qty="2"
      >
        <span>ACQUIRE 2-BOTTLE BOTANICAL PROTOCOL · RM 286 (10% OFF vs RM 318) →</span>
      </button>
    </div>
  </div>
</section>
`;
}

/**
 * Renders Chapter MS-083: Architectural Head-to-Head Formulation Comparison Ledger
 */
function renderMs083ComparisonLedger() {
  const duel20 = comparisonsData.headToHeadComparisons[0];
  const duel30 = comparisonsData.headToHeadComparisons[1];
  const matrixSummary = comparisonsData.fullApothecaryMatrix.productsSummary;

  const duel20RowsHtml = duel20.comparisonRows
    .map(
      (r, idx) => `
          <div class="architectural-ledger__row" role="listitem">
            <span class="architectural-ledger__index">20-CAP · 0${idx + 1}</span>
            <strong class="architectural-ledger__title" style="font-size:1.18rem;">${esc(r.dimensionEn)}</strong>
            <div class="architectural-ledger__detail">
              <div style="margin-bottom:0.35rem;"><strong style="color:#F3E5AB;">Horsemen:</strong> ${esc(r.leftValueEn)}</div>
              <div><strong style="color:#D4AF37;">Hammer of Thor:</strong> ${esc(r.rightValueEn)}</div>
            </div>
          </div>`
    )
    .join('\n');

  const duel30RowsHtml = duel30.comparisonRows
    .map(
      (r, idx) => `
          <div class="architectural-ledger__row" role="listitem">
            <span class="architectural-ledger__index">30-CAP · 0${idx + 1}</span>
            <strong class="architectural-ledger__title" style="font-size:1.18rem;">${esc(r.dimensionEn)}</strong>
            <div class="architectural-ledger__detail">
              <div style="margin-bottom:0.35rem;"><strong style="color:#F3E5AB;">Grow XL:</strong> ${esc(r.leftValueEn)}</div>
              <div><strong style="color:#D4AF37;">Magnum Pump XR:</strong> ${esc(r.rightValueEn)}</div>
            </div>
          </div>`
    )
    .join('\n');

  const tableRowsHtml = matrixSummary
    .map(
      (item) => `
            <tr>
              <td>
                <strong style="font-family:'Cormorant Garamond',serif;font-size:1.35rem;color:#F3E5AB;display:block;">${esc(item.name)}</strong>
                <span style="font-size:0.74rem;color:#D4AF37;">SKU: ${esc(item.sku)} · MPN: ${esc(item.mpn)}</span>
              </td>
              <td>
                <strong>${item.capsuleCount} Capsules</strong>
                <span style="display:block;font-size:0.8rem;color:#B8B3A8;">${esc(item.capsuleTypeEn)}</span>
              </td>
              <td>
                <strong style="color:#F3E5AB;">Day-${item.refillDay} Alert</strong>
                <span style="display:block;font-size:0.78rem;color:#B8B3A8;">Google Calendar + WA</span>
              </td>
              <td>${esc(item.primaryGoalEn)}</td>
              <td style="font-size:0.82rem;color:#B8B3A8;">${esc(item.signatureActivesEn)}</td>
              <td>
                <strong style="color:#F3E5AB;display:block;">1B: ${esc(item.priceSingle)} | 2B: ${esc(item.priceTwo)} | 3B: ${esc(item.priceThree)}</strong>
                <button
                  type="button"
                  data-open-order-drawer="true"
                  data-order-open="true"
                  data-order-product="${esc(item.productId)}"
                  data-order-qty="1"
                  style="margin-top:0.45rem;color:#D4AF37;font-size:0.74rem;letter-spacing:0.15em;text-transform:uppercase;font-weight:700;"
                >
                  Acquire RM 159 →
                </button>
              </td>
            </tr>`
    )
    .join('\n');

  return `
<!-- ==========================================================================
     MS-083: ARCHITECTURAL HEAD-TO-HEAD FORMULATION COMPARISON LEDGER
     ========================================================================== -->
<section
  id="ms-083-comparison-ledger"
  class="editorial-section-stage editorial-section-stage--onyx"
  aria-labelledby="heading-ms-083-comparisons"
  data-micro-step="MS-083"
>
  <div class="editorial-section-stage__container">
    <div class="editorial-section-stage__header">
      <div style="flex:1 1 540px;display:flex;flex-direction:column;gap:0.85rem;">
        <span class="editorial-kicker">
          MS-083 · ARCHITECTURAL HEAD-TO-HEAD FORMULATION COMPARISON LEDGER
        </span>
        <h2 id="heading-ms-083-comparisons" class="editorial-headline-lg">
          Side-By-Side Botanical &amp; Pharmacokinetic Comparison Across All Four Reserves
        </h2>
      </div>
      <div style="flex:1 1 440px;display:flex;flex-direction:column;gap:1rem;">
        <p class="comparison-summary" style="color:#B8B3A8;font-size:0.96rem;line-height:1.7;">
          ${esc(comparisonsData.uniformPricing.rationaleEn)} Explore our three dedicated comparison dossiers or inspect the master 4-formulation matrix below.
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:0.75rem;">
          <a href="/compare/horsemen-vs-hammer-of-thor/" class="cta-hairline-secondary">
            <span>20-Cap Duel: Horsemen vs Hammer of Thor →</span>
          </a>
          <a href="/compare/grow-xl-vs-magnum-pump-xr/" class="cta-hairline-secondary">
            <span>30-Cap Duel: Grow XL vs Magnum Pump XR →</span>
          </a>
          <a href="/compare/all-4-formulas/" class="cta-hairline-secondary">
            <span>All 4 Formulas Matrix (/compare/all-4-formulas/) →</span>
          </a>
          <a href="/compare/" class="cta-hairline-secondary">
            <span>Comparison Hub (/compare/) →</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Master 4-Formulation Architectural Table -->
    <div class="comparison-matrix-table-wrap" role="region" aria-label="4-Product Master Comparison Matrix">
      <table class="comparison-matrix-table">
        <thead>
          <tr>
            <th>Formulation &amp; SKU</th>
            <th>Capsule Count &amp; Format</th>
            <th>Refill Trigger</th>
            <th>Primary Physiological Focus</th>
            <th>Standardized Active Matrix</th>
            <th>Official Malaysia Tariff</th>
          </tr>
        </thead>
        <tbody>
          ${tableRowsHtml}
        </tbody>
      </table>
    </div>

    <!-- Duel 01: Horsemen vs Hammer of Thor (20-Capsule Reserves) -->
    <div>
      <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:1rem;margin-bottom:1rem;">
        <div>
          <span class="product-cinema-chapter__subheading">HEAD-TO-HEAD DUEL I · MS-033 · 20-CAPSULE RESERVES</span>
          <h3 class="editorial-headline-lg" style="font-size:clamp(1.65rem,2.5vw,2.35rem);">
            ${esc(duel20.locales['en-MY'].headline)}
          </h3>
        </div>
        <a href="/compare/horsemen-vs-hammer-of-thor/" class="cta-hairline-secondary">
          <span>OPEN FULL DUEL I DOSSIER (/compare/horsemen-vs-hammer-of-thor/) →</span>
        </a>
      </div>
      <p style="color:#B8B3A8;font-size:0.95rem;line-height:1.7;margin-bottom:1.25rem;">
        <strong style="color:#F3E5AB;">Executive Verdict:</strong> ${esc(duel20.locales['en-MY'].executiveVerdict)}
      </p>
      <div class="architectural-ledger" role="list">
        ${duel20RowsHtml}
      </div>
    </div>

    <!-- Duel 02: Grow XL vs Magnum Pump XR (30-Capsule Cycles) -->
    <div>
      <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:baseline;gap:1rem;margin-bottom:1rem;">
        <div>
          <span class="product-cinema-chapter__subheading">HEAD-TO-HEAD DUEL II · MS-034 · 30-CAPSULE FULL-MONTH PROTOCOLS</span>
          <h3 class="editorial-headline-lg" style="font-size:clamp(1.65rem,2.5vw,2.35rem);">
            ${esc(duel30.locales['en-MY'].headline)}
          </h3>
        </div>
        <a href="/compare/grow-xl-vs-magnum-pump-xr/" class="cta-hairline-secondary">
          <span>OPEN FULL DUEL II DOSSIER (/compare/grow-xl-vs-magnum-pump-xr/) →</span>
        </a>
      </div>
      <p style="color:#B8B3A8;font-size:0.95rem;line-height:1.7;margin-bottom:1.25rem;">
        <strong style="color:#F3E5AB;">Executive Verdict:</strong> ${esc(duel30.locales['en-MY'].executiveVerdict)}
      </p>
      <div class="architectural-ledger" role="list">
        ${duel30RowsHtml}
      </div>
    </div>
  </div>
</section>
`;
}

/**
 * Renders Chapter MS-084: Complete 16-State Malaysia Discreet Courier & COD/FPX Logistics Ledger
 */
function renderMs084Malaysia16StatesLedger() {
  const states = malaysiaStatesData.states;

  const stateRowsHtml = states
    .map((st) => {
      const malaysiaShortcutPath = st.slug === 'johor-bahru' ? '/malaysia/johor/' : `/malaysia/${st.slug}/`;
      const secondaryMalaysiaPath = st.slug === 'johor-bahru' ? '/malaysia/johor-bahru/' : '';
      const deliveryCanonicalPath = st.enPath;
      const i18nCanonicalPath = st.i18nEnPath || st.enPath;
      const loc = st.locales['en-MY'];
      const districtsPreview = st.coveredDistricts.slice(0, 7).join(', ');

      return `
        <div class="state-hub-ledger-row" role="listitem" data-state-slug="${esc(st.slug)}">
          <div style="min-width:6.5rem;">
            <span class="architectural-ledger__index">HUB ${String(st.hubNumber).padStart(2, '0')} · ${esc(st.zone.replace(/_/g, ' '))}</span>
          </div>

          <div style="flex:1 1 240px;">
            <h3 style="font-family:'Cormorant Garamond',serif;font-size:1.45rem;color:#EAE6DF;">
              <a href="${esc(malaysiaShortcutPath)}">${esc(st.nameEn)}</a>
            </h3>
            <span style="font-size:0.76rem;color:#D4AF37;display:block;">
              Postcodes: ${esc(st.postalCodeRange)} · Center: ${esc(st.capitalOrCenter)}
            </span>
          </div>

          <div style="flex:2 1 340px;">
            <p style="font-size:0.88rem;color:#EAE6DF;margin-bottom:0.25rem;">
              <strong>Transit Window:</strong> ${esc(st.transitTimeEn)}
            </p>
            <p style="font-size:0.82rem;color:#B8B3A8;">
              <strong>Covered Districts:</strong> ${esc(districtsPreview)} · <strong>Couriers:</strong> ${esc(st.couriers.join(', '))}
            </p>
          </div>

          <div style="flex:1 1 220px;display:flex;flex-direction:column;align-items:flex-end;gap:0.35rem;text-align:right;">
            <span style="font-size:0.75rem;letter-spacing:0.14em;text-transform:uppercase;color:#F3E5AB;">
              ${st.sameDayRunnerAvailable ? 'SAME-DAY RUNNER + FREE EXPRESS' : st.shippingFeeSingleMYR === 0 ? 'RM 0 FREE EXPRESS SHIPPING' : 'FREE AIR FREIGHT ON 2+ BOTTLES'}
            </span>
            <div style="display:flex;flex-wrap:wrap;gap:0.65rem;font-size:0.74rem;letter-spacing:0.12em;text-transform:uppercase;">
              <a href="${esc(malaysiaShortcutPath)}" style="color:#D4AF37;text-decoration:underline;">${esc(malaysiaShortcutPath)}</a>
              ${secondaryMalaysiaPath ? `<a href="${esc(secondaryMalaysiaPath)}" style="color:#B8B3A8;text-decoration:underline;">${esc(secondaryMalaysiaPath)}</a>` : ''}
              <a href="${esc(i18nCanonicalPath)}" style="color:#B8B3A8;text-decoration:underline;">Dispatch Hub →</a>
            </div>
          </div>
        </div>`;
    })
    .join('\n');

  return `
<!-- ==========================================================================
     MS-084: COMPLETE 16-STATE MALAYSIA DISCREET COURIER & COD/FPX LOGISTICS LEDGER
     ========================================================================== -->
<section
  id="ms-084-malaysia-16-state-logistics"
  class="editorial-section-stage"
  aria-labelledby="heading-ms-084-logistics"
  data-micro-step="MS-084"
>
  <div class="editorial-section-stage__container">
    <div class="editorial-section-stage__header">
      <div style="flex:1 1 560px;display:flex;flex-direction:column;gap:0.85rem;">
        <span class="editorial-kicker">
          MS-084 · NATIONWIDE 16-STATE DISCREET COURIER, PRIVATE RUNNER &amp; COD LEDGER
        </span>
        <h2 id="heading-ms-084-logistics" class="editorial-headline-lg">
          Same-Day Klang Valley Private Runner, 1–2 Day Peninsular Linehaul &amp; 2–4 Day Borneo Air Freight
        </h2>
      </div>
      <div style="flex:1 1 440px;display:flex;flex-direction:column;gap:1rem;">
        <p style="color:#B8B3A8;font-size:0.96rem;line-height:1.7;">
          Every Malaysian state and federal territory hub is served from our central Kuala Lumpur fulfilment vault (Postcode 50450) with full support for <strong>FPX Online Banking</strong>, <strong>DuitNow Instant QR</strong>, and <strong>Cash on Delivery (COD Malaysia)</strong>. Select your state hub below to inspect local district cutoffs and condominium/office drop-off protocols:
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:0.85rem;">
          <a href="/malaysia-delivery/" class="cta-foil-primary">
            <span>OPEN ALL 16 MALAYSIA DELIVERY HUBS (/malaysia-delivery/)</span>
            <span aria-hidden="true">→</span>
          </a>
          <a href="/shipping-and-discreet-packaging/" class="cta-hairline-secondary">
            <span>INSPECT BLIND WAYBILL &amp; COD POLICY →</span>
          </a>
        </div>
      </div>
    </div>

    <!-- 3 Regional Logistics Tier Summary Ledger -->
    <div class="architectural-ledger" role="list" aria-label="Three Malaysia Fulfilment Zones">
      <div class="architectural-ledger__row" role="listitem">
        <span class="architectural-ledger__index">ZONE 01 · KV</span>
        <h3 class="architectural-ledger__title">Klang Valley Same-Day Private Runner &amp; 24h Free Express</h3>
        <p class="architectural-ledger__detail">
          Covers <strong>Kuala Lumpur</strong> (<a href="/malaysia/kuala-lumpur/" style="color:#F3E5AB;">/malaysia/kuala-lumpur/</a>), <strong>Selangor</strong> (<a href="/malaysia/selangor/" style="color:#F3E5AB;">/malaysia/selangor/</a>), <strong>Putrajaya</strong> (<a href="/malaysia/putrajaya/" style="color:#F3E5AB;">/malaysia/putrajaya/</a>), and <strong>Cyberjaya</strong> (<a href="/malaysia/cyberjaya/" style="color:#F3E5AB;">/malaysia/cyberjaya/</a>). Orders confirmed before 16:00 MYT qualify for 3–5 hour unmarked rider handover (+RM 15) or RM 0 Free Next-Day Courier.
        </p>
        <span class="architectural-ledger__metric">3–5 HOURS / NEXT DAY</span>
      </div>

      <div class="architectural-ledger__row" role="listitem">
        <span class="architectural-ledger__index">ZONE 02 · WEST MY</span>
        <h3 class="architectural-ledger__title">Peninsular Malaysia North-South &amp; East-Coast Linehaul</h3>
        <p class="architectural-ledger__detail">
          Covers <strong>Johor Bahru</strong>, <strong>Penang</strong>, <strong>Perak (Ipoh)</strong>, <strong>Melaka</strong>, <strong>Negeri Sembilan</strong>, <strong>Pahang (Kuantan)</strong>, <strong>Kedah</strong>, <strong>Kelantan</strong>, <strong>Terengganu</strong>, and <strong>Perlis</strong>. Dispatched nightly via NinjaVan Discreet, J&amp;T VIP, and PosLaju Priority with RM 0 Free Shipping on 1, 2, or 3 bottles.
        </p>
        <span class="architectural-ledger__metric">1–2 BUSINESS DAYS · FREE</span>
      </div>

      <div class="architectural-ledger__row" role="listitem">
        <span class="architectural-ledger__index">ZONE 03 · EAST MY</span>
        <h3 class="architectural-ledger__title">Sabah, Sarawak &amp; WP Labuan Discreet Air Freight</h3>
        <p class="architectural-ledger__detail">
          Daily air cargo dispatch from KLIA to <strong>Kota Kinabalu, Sandakan, Tawau, Kuching, Miri, Sibu, Bintulu, and Labuan</strong>. Double-sealed in opaque tamper-evident pouches declared as "Personal Nutritional Wellness". RM 12 on 1 bottle, or <strong>RM 0 FREE Air Freight on 2-Bottle (RM 286 (10% OFF vs RM 318)) &amp; 3-Bottle (RM 405 (15% OFF vs RM 477)) orders</strong>.
        </p>
        <span class="architectural-ledger__metric">2–4 DAYS · FREE ON 2+ BOTTLES</span>
      </div>
    </div>

    <!-- All 16 Malaysia State & City Hubs Directory Ledger -->
    <div>
      <span class="product-cinema-chapter__subheading">
        COMPLETE 16-HUB MALAYSIA DISPATCH DIRECTORY (/malaysia/kuala-lumpur/ THROUGH /malaysia/cyberjaya/)
      </span>
      <div class="architectural-ledger" role="list" style="margin-top:0.75rem;">
        ${stateRowsHtml}
      </div>
    </div>
  </div>
</section>
`;
}

/**
 * Renders Chapter MS-085: Official RM 159 Anti-Counterfeit Verification & Plain Unmarked Parcel Privacy Architecture
 */
function renderMs085AntiCounterfeitAndPrivacy() {
  const guides = guidesData.guides;

  const guidesLedgerHtml = guides
    .map((g) => {
      const loc = g.locales['en-MY'];
      return `
        <div class="architectural-ledger__row" role="listitem">
          <span class="architectural-ledger__index">GUIDE 0${g.guideNumber}</span>
          <div style="flex:1 1 280px;">
            <h4 class="architectural-ledger__title" style="font-size:1.3rem;">
              <a href="${esc(g.enPath)}">${esc(loc.headline)}</a>
            </h4>
            <span style="font-size:0.75rem;color:#D4AF37;">Reading Time: ${g.readingTimeMinutes} Mins · Updated: ${esc(g.updatedDate)}</span>
          </div>
          <p class="architectural-ledger__detail">${esc(loc.summary)}</p>
          <a href="${esc(g.enPath)}" class="architectural-ledger__metric" style="text-decoration:underline;">
            READ PROTOCOL →
          </a>
        </div>`;
    })
    .join('\n');

  return `
<!-- ==========================================================================
     MS-085: OFFICIAL RM 159 ANTI-COUNTERFEIT VERIFICATION & PLAIN PARCEL PRIVACY
     ========================================================================== -->
<section
  id="ms-085-authenticity-and-privacy-architecture"
  class="editorial-section-stage editorial-section-stage--charcoal"
  aria-labelledby="heading-ms-085-authenticity"
  data-micro-step="MS-085"
>
  <div class="editorial-section-stage__container">
    <div class="editorial-section-stage__header">
      <div style="flex:1 1 560px;display:flex;flex-direction:column;gap:0.85rem;">
        <span class="editorial-kicker">
          MS-085 · OFFICIAL RM 159 ANTI-COUNTERFEIT VERIFICATION &amp; BLIND-WAYBILL PRIVACY ARCHITECTURE
        </span>
        <h2 id="heading-ms-085-authenticity" class="editorial-headline-lg">
          How To Verify Authentic Climate-Controlled Onyxmen Stock &amp; How Our 3-Layer Unmarked Parcel Protects Your Privacy
        </h2>
      </div>
      <div style="flex:1 1 440px;display:flex;flex-direction:column;gap:1rem;">
        <p style="color:#B8B3A8;font-size:0.96rem;line-height:1.7;">
          Unverified online classifieds and street stalls frequently circulate counterfeit capsules filled with raw starch or heat-degraded grey-market bottles. Every bottle dispatched by <strong>https://www.onyxmen.my</strong> passes our 5-Point Kuala Lumpur Vault Verification Protocol.
        </p>
        <div style="display:flex;flex-wrap:wrap;gap:0.85rem;">
          <a href="/guides/authentic-onyxman-bottle-verification-malaysia/" class="cta-foil-primary">
            <span>5-POINT AUTHENTICITY CHECKLIST</span>
            <span aria-hidden="true">→</span>
          </a>
          <a href="/guides/" class="cta-hairline-secondary">
            <span>ALL 14 BUYER &amp; PROTOCOL GUIDES (/guides/) →</span>
          </a>
        </div>
      </div>
    </div>

    <!-- 5-Point Anti-Counterfeit & Privacy Ledger -->
    <div class="architectural-ledger" role="list" aria-label="5-Point Anti-Counterfeit and Privacy Architecture">
      <div class="architectural-ledger__row" role="listitem">
        <span class="architectural-ledger__index">VERIFY · 01</span>
        <h3 class="architectural-ledger__title">Official Uniform MYR Tariff (RM 159 / RM 286 (10% OFF vs RM 318) / RM 405 (15% OFF vs RM 477))</h3>
        <p class="architectural-ledger__detail">
          Authentic Onyxmen Malaysia formulations never sell for "RM 25–RM 45 clearance prices" on unverified marketplaces. Official pricing across Malaysia is strictly <strong>RM 159.00 (1 Bottle)</strong>, <strong>RM 286 (10% OFF vs RM 318) (2 Bottles)</strong>, and <strong>RM 405 (15% OFF vs RM 477) (3 Bottles)</strong>.
        </p>
        <span class="architectural-ledger__metric">159.00 / 286.00 / 405.00 MYR</span>
      </div>

      <div class="architectural-ledger__row" role="listitem">
        <span class="architectural-ledger__index">VERIFY · 02</span>
        <h3 class="architectural-ledger__title">Exact Bottle Label Inscriptions &amp; Capsule Specifications</h3>
        <p class="architectural-ledger__detail">
          Verify your bottle against our studio-archived SKU standards: <strong>Horsemen (ONYX-HM-20)</strong>: "20 Capsules x 500mg"; <strong>Hammer of Thor (ONYX-HT-20)</strong>: "Tribulus Terrestris — 20 Veg. Capsules" with green vegetarian crest and gold cap; <strong>Grow XL (ONYX-GX-30)</strong>: "#1 Selling Product — 30 Capsules"; <strong>Magnum Pump XR (ONYX-MP-30)</strong>: "Testosterone Pro Series — 30 Black Capsules".
        </p>
        <span class="architectural-ledger__metric">4 VERIFIED SKUS</span>
      </div>

      <div class="architectural-ledger__row" role="listitem">
        <span class="architectural-ledger__index">VERIFY · 03</span>
        <h3 class="architectural-ledger__title">3-Layer Acoustic &amp; Visual Unmarked Parcel Architecture</h3>
        <p class="architectural-ledger__detail">
          Layer 1: Factory induction cap seal + internal desiccant sachet. Layer 2: Thick acoustic bubble wrap preventing capsule rattling sounds during courier handling. Layer 3: Plain, unbranded matte security box or poly-mailer with zero product imagery.
        </p>
        <span class="architectural-ledger__metric">ZERO RATTLE · ZERO LOGOS</span>
      </div>

      <div class="architectural-ledger__row" role="listitem">
        <span class="architectural-ledger__index">VERIFY · 04</span>
        <h3 class="architectural-ledger__title">Confidential Airway Bill Sender ("OM Fulfilment Logistics")</h3>
        <p class="architectural-ledger__detail">
          Every PosLaju, NinjaVan, J&amp;T VIP, and private runner waybill prints the sender strictly as <strong>"OM Fulfilment Logistics (Kuala Lumpur 50450)"</strong> and item description as <strong>"Personal Nutritional Wellness"</strong>. Safe for condo guardhouses, parcel lockers, and corporate reception desks.
        </p>
        <span class="architectural-ledger__metric">BLIND WAYBILL PROTOCOL</span>
      </div>

      <div class="architectural-ledger__row" role="listitem">
        <span class="architectural-ledger__index">VERIFY · 05</span>
        <h3 class="architectural-ledger__title">Authorized Kuala Lumpur Dispatch Desk &amp; Zero Fake Registration Claims</h3>
        <p class="architectural-ledger__detail">
          Every legitimate order on https://www.onyxmen.my is routed through our official merchant desk (<strong>waleedshoaibofficial@gmail.com</strong>, <strong>sales@onyxmen.my</strong>, <strong>info@onyxmen.my</strong>). We strictly reject fabricated medical registration numbers and screen all botanical batches for heavy-metal and microbial compliance.
        </p>
        <span class="architectural-ledger__metric">SALES@ONYXMEN.MY</span>
      </div>
    </div>

    <!-- Complete 6 Buyer & Vitality Protocol Guides Directory -->
    <div>
      <span class="product-cinema-chapter__subheading">
        COMPLETE ONYXMEN MALAYSIA BUYER GUIDES &amp; ABSORPTION PROTOCOL LIBRARY (/guides/)
      </span>
      <div class="architectural-ledger" role="list" style="margin-top:0.75rem;">
        ${guidesLedgerHtml}
      </div>
    </div>
  </div>
</section>
`;
}

/**
 * Renders Chapter MS-086: Comprehensive 12-Question English Homepage FAQ Accordion
 */
function renderMs086FaqAccordion() {
  const faqItemsHtml = HOMEPAGE_EN_FAQS.map(
    (faq, idx) => `
      <details
        id="${esc(faq.id)}"
        class="faq-ledger-item"
        ${idx === 0 ? 'open' : ''}
      >
        <summary>
          <span class="architectural-ledger__index">FAQ · ${String(idx + 1).padStart(2, '0')} · ${esc(faq.category)}</span>
          <h3 class="faq-ledger-item__question">${esc(faq.questionEn)}</h3>
          <span style="color:#D4AF37;font-family:'Space Grotesk',sans-serif;font-size:0.8rem;letter-spacing:0.16em;text-transform:uppercase;">
            INSPECT +
          </span>
        </summary>
        <div class="faq-ledger-item__body">
          <p>${esc(faq.answerEn)}</p>
        </div>
      </details>`
  ).join('\n');

  return `
<!-- ==========================================================================
     MS-086: COMPREHENSIVE 12-QUESTION ENGLISH HOMEPAGE FAQ ACCORDION
     ========================================================================== -->
<section
  id="ms-086-homepage-faq-accordion"
  class="editorial-section-stage"
  aria-labelledby="heading-ms-086-faq"
  data-micro-step="MS-086"
>
  <div class="editorial-section-stage__container">
    <div class="editorial-section-stage__header">
      <div style="flex:1 1 560px;display:flex;flex-direction:column;gap:0.85rem;">
        <span class="editorial-kicker">
          MS-086 · FREQUENTLY ASKED QUESTIONS &amp; MALAYSIA CONCIERGE DOSSIER
        </span>
        <h2 id="heading-ms-086-faq" class="editorial-headline-lg">
          12 Essential Questions On Formulations, RM 159 Pricing, Plain-Box COD &amp; Optimal Capsule Timing
        </h2>
      </div>
      <div style="flex:1 1 420px;display:flex;flex-direction:column;gap:1rem;">
        <p style="color:#B8B3A8;font-size:0.96rem;line-height:1.7;">
          Need personalized guidance selecting between a 20-capsule evening reserve and a 30-capsule daily cycle? Contact our private Kuala Lumpur concierge desk at <a href="mailto:sales@onyxmen.my" style="color:#F3E5AB;text-decoration:underline;">sales@onyxmen.my</a> or <a href="mailto:info@onyxmen.my" style="color:#F3E5AB;text-decoration:underline;">info@onyxmen.my</a>, or open the 10-Second Express Order Drawer below.
        </p>
        <div>
          <button
            type="button"
            class="cta-foil-primary"
            data-open-order-drawer="true"
            data-order-open="true"
            data-order-product="horsemen"
            data-order-qty="1"
          >
            <span>OPEN 10-SECOND EXPRESS ORDER DRAWER · RM 159</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </div>

    <div class="architectural-ledger" data-faq-accordion-group="true" role="region" aria-label="12 Frequently Asked Questions">
      ${faqItemsHtml}
    </div>
  </div>
</section>
`;
}

/**
 * Builds the complete English Flagship Homepage (`public/index.html`)
 */
export function buildHomeEnPage() {
  const pageTitle =
    'Onyxmen Malaysia — Architectural Botanical Apothecary for Adult Men’s Vitality & Stamina | Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR (RM 159)';
  const pageDescription =
    'Official Onyxmen Malaysia (https://www.onyxmen.my) botanical apothecary for adult men: Horsemen (20 Caps x 500mg), Hammer of Thor (20 Veg. Caps Tribulus), Grow XL (30 Caps), and Magnum Pump XR (30 Black Caps Nitric Oxide). Uniform RM 159 (1B), RM 286 (10% OFF vs RM 318) (2B), RM 405 (15% OFF vs RM 477) (3B) pricing with 100% plain unmarked parcel delivery across all 16 Malaysia states (Same-Day Klang Valley, FPX, DuitNow QR & COD).';

  const chapterConfigs = [
    {
      microStep: 'MS-080A',
      roman: 'I',
      sectionId: 'ms-080a-horsemen-cinema',
      product: productsById['horsemen'],
      malaysiaAliasPath: '/horsemen-malaysia/',
      altBg: false,
      reverse: false,
    },
    {
      microStep: 'MS-080B',
      roman: 'II',
      sectionId: 'ms-080b-hammer-of-thor-cinema',
      product: productsById['hammer-of-thor'],
      malaysiaAliasPath: '/hammer-of-thor-malaysia/',
      altBg: true,
      reverse: true,
    },
    {
      microStep: 'MS-080C',
      roman: 'III',
      sectionId: 'ms-080c-grow-xl-cinema',
      product: productsById['grow-xl'],
      malaysiaAliasPath: '/grow-xl-malaysia/',
      altBg: false,
      reverse: false,
    },
    {
      microStep: 'MS-080D',
      roman: 'IV',
      sectionId: 'ms-080d-magnum-pump-xr-cinema',
      product: productsById['magnum-pump-xr'],
      malaysiaAliasPath: '/magnum-pump-xr-malaysia/',
      altBg: true,
      reverse: true,
    },
  ];

  const productChaptersHtml = chapterConfigs
    .map((cfg) => renderProductCinemaChapter(cfg.product, cfg))
    .join('\n');

  const bodyContent = [
    renderMs079HeroStage(),
    productChaptersHtml,
    renderMs081DiagnosticSelector(),
    renderMs082BotanicalMonographCurtain(),
    renderMs083ComparisonLedger(),
    renderMs084Malaysia16StatesLedger(),
    renderMs085AntiCounterfeitAndPrivacy(),
    renderMs086FaqAccordion(),
  ].join('\n');

  // Build complete @graph JSON-LD (Organization, WebSite, CollectionPage, 4 Product + ProductGroup nodes, ItemList, BreadcrumbList, 12-Question FAQPage)
  const schemaGraphObj = buildFullPageGraphObject({
    lang: 'en-MY',
    pageUrl: 'https://www.onyxmen.my/',
    pageType: 'home',
    title: pageTitle,
    description: pageDescription,
    breadcrumbs: [
      {
        name: 'Onyxmen Malaysia — Official Apothecary Vault (Home)',
        url: 'https://www.onyxmen.my/',
      },
    ],
    faqs: HOMEPAGE_EN_FAQS,
  });

  const fullHtml = renderLuxuryShell({
    lang: 'en-MY',
    title: pageTitle,
    description: pageDescription,
    canonicalPath: '/',
    alternatePathEn: '/',
    alternatePathMs: '/ms/',
    ogImage: '/assets/products/onyxman-lineup-hero.webp',
    schemaGraphJson: schemaGraphObj,
    bodyContent,
    activeNav: 'home',
    productSlug: 'horsemen',
    defaultQty: 1,
    includeSealStrip: true,
    extraHeadHtml: HOMEPAGE_BESPOKE_CSS,
  });

  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
  fs.writeFileSync(OUTPUT_HTML_PATH, fullHtml, 'utf8');

  const lineCount = fullHtml.split(/\r?\n/).length;
  const byteSize = Buffer.byteLength(fullHtml, 'utf8');

  console.log('====================================================================');
  console.log('ONYXMEN.MY — ENGLISH HOMEPAGE CINEMA BUILD COMPLETE (MS-079..MS-086)');
  console.log('====================================================================');
  console.log(`Output File  : ${OUTPUT_HTML_PATH}`);
  console.log(`Total Lines  : ${lineCount} lines (Requirement: >= 2,600 lines)`);
  console.log(`Total Size   : ${byteSize} bytes`);
  console.log('====================================================================');

  return { outputPath: OUTPUT_HTML_PATH, lineCount, byteSize };
}

if (process.argv[1] && path.resolve(process.argv[1]) === __filename) {
  buildHomeEnPage();
}
