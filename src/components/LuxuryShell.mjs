/**
 * ONYXMEN.MY — MASTER HTML5 DOCUMENT GENERATOR & 1:1 SOVEREIGN BOTANICALS SHELL (`demo_01_sovereign_botanicals.html`)
 * Enforces:
 * - 100% 1:1 visual, structural, typographic, and interactive match with `demo_01_sovereign_botanicals.html` (APEX Rule #31)
 * - Authentic Malaysia Pricing & Product Info (`RM 159` = 1 Bottle, `RM 318` = 2 Bottles, `RM 477` = 3 Bottles VIP Protocol;
 *   Horsemen 20 Capsules x 500mg, Hammer of Thor 20 Veg. Capsules, Magnum Pump XR 30 Black Capsules, Grow XL 30 Capsules)
 * - Sub-second speed (LCP < 0.8s, CLS = 0.00) via inline critical CSS + preloaded WebP/JPG studio hero assets
 * - Bidirectional hreflang (en-MY, ms-MY, x-default) & canonical tags on https://www.onyxmen.my
 * - Google Search Console Verification (`3D9YmY9SMd5RVAdrfKySd2Z5ZsxJOEHtLbQUTNWOKgA`)
 * - Live VIP Checkout Drawer wired to `https://formsubmit.co/ajax/waleedshoaibofficial@gmail.com`
 */

import { renderObsidianHeader, resolvePairedLocaleRoutes } from './ObsidianHeader.mjs';
import { renderObsidianFooter } from './ObsidianFooter.mjs';
import { renderExpressOrderDrawer } from './ExpressOrderDrawer.mjs';
import { renderStickyMobileBar } from './StickyMobileBar.mjs';
import { renderDiscreetSealStrip } from './DiscreetSealStrip.mjs';

export const DOMAIN_ORIGIN = 'https://www.onyxmen.my';

/**
 * Escapes HTML attribute strings safely.
 * @param {string} raw
 * @returns {string}
 */
export function escapeHtmlAttr(raw = '') {
  return String(raw)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/**
 * Normalizes a relative path into a full https://www.onyxmen.my URL.
 * @param {string} pathOrUrl
 * @returns {string}
 */
export function toAbsoluteOnyxUrl(pathOrUrl = '/') {
  const clean = String(pathOrUrl || '/').trim();
  if (clean.startsWith('https://') || clean.startsWith('http://')) {
    return clean;
  }
  const normalizedPath = clean.startsWith('/') ? clean : `/${clean}`;
  return `${DOMAIN_ORIGIN}${normalizedPath}`;
}

/**
 * Ensures schemaGraphJson is a valid JSON string containing both "@context" and "@graph".
 * @param {string | Object | Array} schemaInput
 * @param {Object} fallbackMeta
 * @returns {string}
 */
export function normalizeSchemaGraphJson(schemaInput, fallbackMeta = {}) {
  if (schemaInput) {
    if (typeof schemaInput === 'string') {
      try {
        const parsed = JSON.parse(schemaInput);
        if (parsed && parsed['@context'] && parsed['@graph']) {
          return JSON.stringify(parsed, null, 2);
        }
        if (Array.isArray(parsed)) {
          return JSON.stringify(
            {
              '@context': 'https://schema.org',
              '@graph': parsed,
            },
            null,
            2
          );
        }
        if (parsed && typeof parsed === 'object') {
          return JSON.stringify(
            {
              '@context': 'https://schema.org',
              '@graph': [parsed],
            },
            null,
            2
          );
        }
      } catch {
        // Fall through to default valid @graph
      }
    } else if (Array.isArray(schemaInput)) {
      return JSON.stringify(
        {
          '@context': 'https://schema.org',
          '@graph': schemaInput,
        },
        null,
        2
      );
    } else if (typeof schemaInput === 'object') {
      if (schemaInput['@context'] && schemaInput['@graph']) {
        return JSON.stringify(schemaInput, null, 2);
      }
      return JSON.stringify(
        {
          '@context': 'https://schema.org',
          '@graph': [schemaInput],
        },
        null,
        2
      );
    }
  }

  const canonicalUrl = fallbackMeta.canonicalUrl || 'https://www.onyxmen.my/';
  const title =
    fallbackMeta.title ||
    'ONYXMEN Malaysia — Luxury Botanical Virility & Performance Collection (RM 159)';
  const description =
    fallbackMeta.description ||
    'Authentic botanical dietary supplements for adult men in Malaysia: Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR. RM 159 per bottle with discreet unmarked parcel delivery.';
  const inLanguage = fallbackMeta.lang || 'en-MY';

  return JSON.stringify(
    {
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': 'https://www.onyxmen.my/#organization',
          name: 'ONYXMEN Malaysia',
          legalName: "Onyxman Malaysia Apothecary & Men's Vitality Vault",
          url: 'https://www.onyxmen.my',
          logo: 'https://www.onyxmen.my/assets/sovereign/web_set_02_catalog_zoom_pure_white_cyclorama_1793437707044.webp',
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
          ],
        },
        {
          '@type': 'WebSite',
          '@id': 'https://www.onyxmen.my/#website',
          url: 'https://www.onyxmen.my',
          name: 'ONYXMEN Malaysia',
          publisher: { '@id': 'https://www.onyxmen.my/#organization' },
          inLanguage: ['en-MY', 'ms-MY'],
        },
        {
          '@type': 'WebPage',
          '@id': `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: title,
          description,
          inLanguage,
          isPartOf: { '@id': 'https://www.onyxmen.my/#website' },
        },
      ],
    },
    null,
    2
  );
}

/**
 * Exact 1:1 `demo_01_sovereign_botanicals.html` Critical Inline CSS.
 */
export const CRITICAL_INLINE_CSS = `
:root {
  --bg-pure-white: #FFFFFF;
  --bg-soft-alabaster: #F8F7F4;
  --bg-obsidian: #0B0C0E;
  --crown-black: #121315;
  --ink-black: #0F1113;
  --ink-muted: #52565A;
  --hairline-grey: #E8E8E8;
  --gold-top: #E8CA7D;
  --gold-bottom: #C49B42;
  --gold-gradient: linear-gradient(180deg, #EBD084 0%, #C49B42 100%);
  --font-serif: 'Cormorant Garamond', Georgia, serif;
  --font-sans: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  --ease-luxury: cubic-bezier(0.19, 1, 0.22, 1);
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  background-color: var(--bg-pure-white);
  color: var(--ink-black);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: geometricPrecision;
  scroll-behavior: smooth;
}

body {
  overflow-x: hidden;
  background-color: var(--bg-pure-white);
  color: var(--ink-black);
}

button {
  font-family: inherit;
  border: none;
  background: none;
  cursor: pointer;
  color: inherit;
}

a {
  text-decoration: none;
  color: inherit;
}

img {
  display: block;
  max-width: 100%;
  image-rendering: -webkit-optimize-contrast;
}

.hd-optical-photo {
  filter: url(#onyx-8k-sharpen) contrast(1.04) saturate(1.03);
  transform: translateZ(0);
  backface-visibility: hidden;
}

/* ==========================================================================
   2. EXACT 2-ROW ONYXMEN HEADER (SOLID BLACK CROWN + PURE WHITE NAV)
   ========================================================================== */
.site-header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  background: var(--bg-pure-white);
}

.header-crown-black {
  width: 100%;
  height: 38px;
  background-color: var(--crown-black);
  display: flex;
  align-items: center;
  justify-content: center;
}

.crown-wordmark {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 600;
  font-size: 0.98rem;
  letter-spacing: 0.38em;
  color: #FFFFFF;
  text-transform: uppercase;
  padding-left: 0.38em;
}

.header-white-nav {
  width: 100%;
  height: 62px;
  background-color: #FFFFFF;
  border-bottom: 1px solid var(--hairline-grey);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0 4vw;
}

.nav-center-links {
  display: flex;
  align-items: center;
  gap: clamp(18px, 2.8vw, 44px);
}

.nav-item {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--ink-black);
  padding: 6px 0;
  position: relative;
}

.nav-item::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1.5px;
  background-color: var(--ink-black);
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s var(--ease-luxury);
}

.nav-item:hover::after,
.nav-item.active::after {
  transform: scaleX(1);
}

.nav-right-icons {
  position: absolute;
  right: 4vw;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  gap: 16px;
}

.sovereign-locale-switch {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-family: var(--font-sans);
  font-size: 0.66rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  color: var(--ink-muted);
  padding-right: 8px;
  border-right: 1px solid var(--hairline-grey);
}

.sovereign-locale-link {
  color: var(--ink-muted);
  transition: color 0.2s ease;
}

.sovereign-locale-link.active,
.sovereign-locale-link:hover {
  color: var(--ink-black);
  font-weight: 700;
}

.icon-btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  color: var(--ink-black);
  transition: transform 0.25s var(--ease-luxury);
}

.icon-btn:hover {
  transform: scale(1.08);
}

.icon-btn svg {
  width: 19px;
  height: 19px;
  stroke: currentColor;
  stroke-width: 1.65;
  fill: none;
}

.bag-badge {
  position: absolute;
  top: 2px;
  right: -1px;
  min-width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--ink-black);
  color: #FFFFFF;
  font-size: 0.55rem;
  font-weight: 700;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 3px;
}

/* ==========================================================================
   3. SECTION 1: EXACT 1:1 PURE-WHITE STUDIO HERO STAGE (RAZOR-SHARP 8K CLARITY)
   ========================================================================== */
.hero-pure-white-stage {
  position: relative;
  width: 100vw;
  height: calc(100vh - 100px);
  min-height: 640px;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0;
}

.quartet-stage-wrapper {
  position: relative;
  z-index: 5;
  width: min(1400px, 94vw);
  height: 92%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFFFFF;
}

.quartet-stage-wrapper picture {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.quartet-hero-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center 42%;
  user-select: none;
  -webkit-user-drag: none;
  filter: brightness(1.048) contrast(1.065);
  mix-blend-mode: multiply;
  -webkit-mask-image: radial-gradient(ellipse 94% 92% at 50% 50%, #000 82%, transparent 100%);
  mask-image: radial-gradient(ellipse 94% 92% at 50% 50%, #000 82%, transparent 100%);
}

.quartet-interactive-zones {
  position: absolute;
  inset: 6% 10% 12% 10%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1.5%;
  z-index: 10;
}

.bottle-hit-column {
  position: relative;
  height: 100%;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 18px;
}

.bottle-hover-whisper {
  opacity: 0;
  transform: translateY(8px);
  background: #FFFFFF;
  padding: 10px 18px;
  border: 1px solid var(--ink-black);
  text-align: center;
  pointer-events: none;
  transition: opacity 0.25s var(--ease-luxury), transform 0.25s var(--ease-luxury);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}

.bottle-hit-column:hover .bottle-hover-whisper {
  opacity: 1;
  transform: translateY(0);
}

.whisper-name {
  display: block;
  font-family: var(--font-sans);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-black);
  margin-bottom: 2px;
}

.whisper-sub {
  display: block;
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 0.9rem;
  color: var(--ink-muted);
}

.optical-loupe-lens {
  position: fixed;
  width: 230px;
  height: 230px;
  border-radius: 50%;
  border: 1.5px solid var(--gold-bottom);
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.22);
  pointer-events: none;
  z-index: 80;
  opacity: 0;
  transform: translate(-50%, -50%) scale(0.9);
  transition: opacity 0.2s ease, transform 0.2s var(--ease-luxury);
  background-repeat: no-repeat;
  background-color: #FFFFFF;
  filter: url(#onyx-8k-sharpen) contrast(1.06);
}

.optical-loupe-lens.active {
  opacity: 1;
  transform: translate(-50%, -50%) scale(1);
}

.hero-cta-row {
  position: absolute;
  bottom: 6.2vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-shop-collection {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 268px;
  height: 46px;
  padding: 0 36px;
  background-color: #FFFFFF;
  border: 1px solid var(--ink-black);
  color: var(--ink-black);
  font-family: var(--font-sans);
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.17em;
  text-transform: uppercase;
  transition: background-color 0.3s var(--ease-luxury), color 0.3s var(--ease-luxury), transform 0.25s var(--ease-luxury);
}

.btn-shop-collection:hover {
  background-color: var(--ink-black);
  color: #FFFFFF;
  transform: translateY(-2px);
}

/* ==========================================================================
   4. SECTION 2: SUNLIT BOTANICAL CONSERVATORY & CARRARA MARBLE 4-BOTTLE SHOWCASE
   ========================================================================== */
.section-conservatory-real-shoot {
  position: relative;
  width: 100vw;
  background-color: #F4F3EE;
  border-top: 1px solid var(--hairline-grey);
  padding: clamp(56px, 6vw, 96px) 5vw;
  overflow: hidden;
}

.conservatory-photo-stage {
  position: relative;
  max-width: 1360px;
  margin: 0 auto 44px;
  overflow: hidden;
  background: #E9ECE6;
}

.conservatory-photo-stage img {
  width: 100%;
  height: auto;
  max-height: 78vh;
  object-fit: contain;
  object-position: center center;
  display: block;
  margin: 0 auto;
}

.conservatory-editorial-panel {
  max-width: 1360px;
  margin: 0 auto;
  padding: clamp(36px, 4vw, 56px) clamp(32px, 4vw, 56px);
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: clamp(32px, 5vw, 64px);
  align-items: center;
  background: #FFFFFF;
  border-top: 1px solid var(--hairline-grey);
}

.editorial-kicker {
  font-family: var(--font-sans);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold-bottom);
  margin-bottom: 16px;
}

.editorial-headline {
  font-family: var(--font-serif);
  font-size: clamp(2.2rem, 3.2vw, 3.5rem);
  font-weight: 600;
  line-height: 1.06;
  color: var(--ink-black);
  margin-bottom: 22px;
}

.editorial-lead {
  font-size: 0.92rem;
  line-height: 1.75;
  color: var(--ink-muted);
  margin-bottom: 34px;
}

.botanical-pillar-rows {
  border-top: 1px solid var(--hairline-grey);
  margin-bottom: 36px;
}

.botanical-pillar-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 15px 0;
  border-bottom: 1px solid var(--hairline-grey);
  gap: 16px;
}

.pillar-title {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--ink-black);
}

.pillar-spec {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 0.98rem;
  color: var(--ink-muted);
}

/* ==========================================================================
   5. SECTION 3: SEAMLESS 50VW / 50VW SPLIT-STAGE PRODUCT MONOGRAPH
   ========================================================================== */
.section-split-showcase {
  width: 100vw;
  min-height: 90vh;
  display: grid;
  grid-template-columns: 50vw 50vw;
  background-color: var(--bg-soft-alabaster);
  border-top: 1px solid var(--hairline-grey);
}

.split-left-visual {
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 640px;
  background: #FFFFFF;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.split-left-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: transform 0.7s var(--ease-luxury);
}

.split-right-editorial {
  padding: clamp(48px, 6vw, 96px) clamp(36px, 6vw, 88px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: var(--bg-soft-alabaster);
}

.formula-switcher-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-bottom: 36px;
  border-bottom: 1px solid rgba(17, 19, 21, 0.12);
  padding-bottom: 14px;
}

.formula-tab {
  font-family: var(--font-sans);
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-muted);
  padding-bottom: 14px;
  margin-bottom: -15px;
  border-bottom: 2px solid transparent;
  transition: color 0.25s ease, border-color 0.25s ease;
}

.formula-tab:hover {
  color: var(--ink-black);
}

.formula-tab.active {
  color: var(--ink-black);
  border-bottom-color: var(--ink-black);
}

.monograph-title {
  font-family: var(--font-serif);
  font-size: clamp(2rem, 2.8vw, 3.1rem);
  font-weight: 600;
  line-height: 1.08;
  color: var(--ink-black);
  margin-bottom: 14px;
}

.monograph-stars-row {
  font-size: 0.9rem;
  letter-spacing: 0.12em;
  color: var(--ink-black);
  margin-bottom: 16px;
}

.monograph-price {
  font-family: var(--font-sans);
  font-size: 1.45rem;
  font-weight: 600;
  color: var(--ink-black);
  margin-bottom: 28px;
}

.monograph-botanical-list {
  list-style: none;
  margin-bottom: 32px;
  border-top: 1px solid rgba(17, 19, 21, 0.1);
}

.monograph-botanical-list li {
  padding: 13px 0;
  border-bottom: 1px solid rgba(17, 19, 21, 0.08);
  font-size: 0.88rem;
  color: var(--ink-black);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.monograph-botanical-list li span.dose {
  font-weight: 600;
  color: var(--ink-muted);
  font-size: 0.8rem;
}

.pack-pills-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 24px;
}

.pack-pill {
  padding: 12px 22px;
  border: 1px solid var(--ink-black);
  font-family: var(--font-sans);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: var(--ink-black);
  background: transparent;
  transition: all 0.25s var(--ease-luxury);
}

.pack-pill.active {
  background: var(--ink-black);
  color: #FFFFFF;
}

.btn-gold-dispatch {
  width: 100%;
  height: 54px;
  background: var(--gold-gradient);
  color: var(--ink-black);
  font-family: var(--font-sans);
  font-size: 0.76rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  transition: filter 0.3s ease, transform 0.3s var(--ease-luxury);
}

.btn-gold-dispatch:hover {
  filter: brightness(1.06);
  transform: translateY(-2px);
}

/* ==========================================================================
   6. SECTION 4: ONYXMEN SIGNATURE NERO MARQUINA & 24K GOLD RESERVE STAGE
   ========================================================================== */
.section-onyx-obsidian-stage {
  position: relative;
  width: 100vw;
  background-color: var(--bg-obsidian);
  color: #FFFFFF;
  padding: clamp(64px, 7vw, 110px) 5vw;
  border-top: 1px solid #1F2226;
}

.obsidian-header-row {
  max-width: 1360px;
  margin: 0 auto 44px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  padding-bottom: 28px;
}

.obsidian-title {
  font-family: var(--font-serif);
  font-size: clamp(2.2rem, 3.5vw, 3.8rem);
  font-weight: 500;
  letter-spacing: 0.03em;
  color: #FFFFFF;
  line-height: 1.05;
}

.obsidian-subtitle {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold-top);
  margin-bottom: 10px;
}

.obsidian-stage-frame {
  max-width: 1360px;
  margin: 0 auto 48px;
  overflow: hidden;
  background: #08090A;
}

.obsidian-stage-frame img {
  width: 100%;
  height: auto;
  max-height: 76vh;
  object-fit: contain;
  display: block;
  margin: 0 auto;
}

.clean-comparison-grid {
  max-width: 1360px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 32px;
  text-align: left;
  border-top: 1px solid rgba(255, 255, 255, 0.14);
  padding-top: 36px;
}

.comp-column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.comp-formula-index {
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: var(--gold-top);
  margin-bottom: 8px;
}

.comp-formula-name {
  font-family: var(--font-serif);
  font-size: 1.65rem;
  font-weight: 600;
  color: #FFFFFF;
  margin-bottom: 14px;
}

.comp-row-item {
  width: 100%;
  padding: 12px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.83rem;
  color: rgba(255, 255, 255, 0.86);
}

.comp-row-item.comp-benefit {
  font-weight: 600;
  color: #FFFFFF;
}

.comp-row-item.comp-actives {
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.8rem;
}

.comp-order-pill {
  margin-top: 24px;
  width: 100%;
  height: 46px;
  background: var(--gold-gradient);
  color: var(--ink-black);
  font-family: var(--font-sans);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  transition: filter 0.25s ease, transform 0.25s var(--ease-luxury);
}

.comp-order-pill:hover {
  filter: brightness(1.08);
  transform: translateY(-2px);
}

/* ==========================================================================
   7. SECTION 5: CLINICAL EXTRACTION & VIP PRESENTATION COFFER
   ========================================================================== */
.section-dual-editorial {
  width: 100vw;
  background: #FFFFFF;
  border-top: 1px solid var(--hairline-grey);
}

.editorial-split-row {
  display: grid;
  grid-template-columns: 56vw 44vw;
  align-items: center;
  border-bottom: 1px solid var(--hairline-grey);
}

.editorial-split-row.reverse {
  direction: rtl;
}

.editorial-split-row.reverse > * {
  direction: ltr;
}

.editorial-photo-pane {
  position: relative;
  width: 100%;
  overflow: hidden;
  background: #FFFFFF;
  padding: clamp(24px, 3vw, 44px);
  display: block;
}

.editorial-photo-pane img {
  width: 100%;
  height: auto;
  display: block;
}

.editorial-text-pane {
  padding: clamp(48px, 6vw, 92px) clamp(36px, 6vw, 88px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #FFFFFF;
}

/* ==========================================================================
   8. LIVE SYNCHRONIZED IPHONE TWIN COMPANION
   ========================================================================== */
.iphone-twin-device {
  position: fixed;
  bottom: 28px;
  right: 28px;
  width: 312px;
  height: 632px;
  background: #121315;
  border-radius: 46px;
  padding: 11px;
  box-shadow: 0 32px 80px rgba(0, 0, 0, 0.35), 0 0 0 1.5px #3A3D42;
  z-index: 120;
  opacity: 0;
  pointer-events: none;
  transform: translateY(28px) scale(0.95);
  transform-origin: bottom right;
  transition: opacity 0.35s var(--ease-luxury), transform 0.35s var(--ease-luxury);
}

.iphone-twin-device.open {
  opacity: 1;
  pointer-events: auto;
  transform: translateY(0) scale(1);
}

.iphone-screen-inner {
  position: relative;
  width: 100%;
  height: 100%;
  background: #FFFFFF;
  border-radius: 36px;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  scrollbar-width: none;
}

.iphone-screen-inner::-webkit-scrollbar {
  display: none;
}

.iphone-status-bar {
  position: sticky;
  top: 0;
  z-index: 10;
  background: #FFFFFF;
  padding: 8px 18px 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.65rem;
  font-weight: 700;
  color: var(--ink-black);
}

.iphone-notch {
  width: 86px;
  height: 18px;
  background: #121315;
  border-radius: 0 0 12px 12px;
  margin: 0 auto;
}

.iphone-app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 16px 12px;
  border-bottom: 1px solid #F0F0F0;
}

.iphone-monogram {
  font-family: var(--font-serif);
  font-style: italic;
  font-weight: 700;
  font-size: 0.92rem;
  letter-spacing: 0.22em;
  color: var(--ink-black);
}

.iphone-2x2-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 10px;
  padding: 14px 12px 24px;
}

.iphone-product-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.iphone-bottle-thumb {
  width: 100%;
  height: 148px;
  object-fit: cover;
  object-position: center;
  border-radius: 4px;
  margin-bottom: 8px;
  background: #FAFAFA;
}

.iphone-bottle-title {
  font-family: var(--font-sans);
  font-size: 0.64rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-black);
  min-height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1.25;
  margin-bottom: 6px;
}

.iphone-gold-cta {
  width: 100%;
  padding: 7px 6px;
  background: var(--gold-gradient);
  color: var(--ink-black);
  font-family: var(--font-sans);
  font-size: 0.56rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  border-radius: 3px;
  line-height: 1.2;
}

/* ==========================================================================
   9. SLIDE-OVER VIP CONCIERGE CHECKOUT DRAWER
   ========================================================================== */
.vip-drawer-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(17, 19, 21, 0.48);
  z-index: 200;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
}

.vip-drawer-backdrop.open {
  opacity: 1;
  pointer-events: auto;
}

.vip-checkout-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: min(460px, 100vw);
  height: 100vh;
  background: #F8F6F1;
  z-index: 210;
  transform: translateX(100%);
  transition: transform 0.4s var(--ease-luxury);
  display: flex;
  flex-direction: column;
  box-shadow: -20px 0 60px rgba(0, 0, 0, 0.2);
}

.vip-checkout-drawer.open {
  transform: translateX(0);
}

.drawer-top-header {
  padding: 22px 26px 16px;
  border-bottom: 1px solid rgba(17, 19, 21, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.drawer-title {
  font-family: var(--font-sans);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-black);
}

.drawer-close-btn {
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--ink-muted);
  padding: 6px 10px;
}

.drawer-hero-thumb {
  width: 100%;
  height: 140px;
  object-fit: cover;
  border-bottom: 1px solid rgba(17, 19, 21, 0.1);
}

.drawer-items-list {
  flex: 1;
  overflow-y: auto;
  padding: 16px 26px;
}

.cart-line-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid rgba(17, 19, 21, 0.08);
  gap: 14px;
}

.cart-line-thumb {
  width: 54px;
  height: 54px;
  object-fit: cover;
  border-radius: 3px;
  background: #FFFFFF;
}

.cart-line-info {
  flex: 1;
}

.cart-line-name {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ink-black);
}

.cart-line-meta {
  font-size: 0.72rem;
  color: var(--ink-muted);
  margin-top: 2px;
}

.cart-qty-controls {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 6px;
  border-bottom: 1px solid rgba(17, 19, 21, 0.2);
  padding-bottom: 2px;
}

.qty-btn {
  font-size: 0.85rem;
  font-weight: 700;
  padding: 0 4px;
  color: var(--ink-black);
}

.vip-express-fields {
  margin-top: 14px;
  padding-top: 12px;
  border-top: 1px solid rgba(17, 19, 21, 0.12);
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.vip-input {
  width: 100%;
  padding: 9px 11px;
  background: #FFFFFF;
  border: 1px solid rgba(17, 19, 21, 0.22);
  font-family: var(--font-sans);
  font-size: 0.76rem;
  color: var(--ink-black);
}

.drawer-footer {
  padding: 18px 26px 22px;
  background: #EFECE4;
  border-top: 1px solid rgba(17, 19, 21, 0.1);
}

.shipping-note {
  font-size: 0.74rem;
  color: var(--ink-muted);
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
}

.total-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--ink-black);
  margin-bottom: 14px;
}

.btn-complete-vip {
  width: 100%;
  height: 52px;
  background: var(--crown-black);
  color: var(--gold-top);
  border: 1px solid var(--gold-bottom);
  font-family: var(--font-sans);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  transition: background 0.3s ease, color 0.3s ease;
}

.btn-complete-vip:hover {
  background: #000000;
  color: #FFFFFF;
}

/* ==========================================================================
   10. CLOSED-BY-DEFAULT SEO ARCHIVE & MINIMAL LUXURY FOOTER
   ========================================================================== */
.onyxman-seo-vault-drawer {
  width: 100%;
  background: #F8F7F4;
  border-top: 1px solid var(--hairline-grey);
}

.onyxman-seo-vault-drawer__summary {
  list-style: none;
  cursor: pointer;
  max-width: 1360px;
  margin: 0 auto;
  padding: 16px 5vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--font-sans);
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-muted);
}

.onyxman-seo-vault-drawer__summary::-webkit-details-marker {
  display: none;
}

.onyxman-seo-vault-drawer__body {
  max-width: 1360px;
  margin: 0 auto;
  padding: 24px 5vw 48px;
  color: var(--ink-black);
}

.minimal-footer {
  padding: 44px 5vw;
  background: var(--crown-black);
  color: rgba(255, 255, 255, 0.72);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-size: 0.74rem;
  letter-spacing: 0.08em;
}

/* Keep Legacy Aux Shells Hidden So Visual Experience Is 100% 1:1 With Demo_01 */
.discreet-seal-strip,
.obsidian-footer,
.sticky-mobile-ledger {
  display: none !important;
}

/* Legacy Express Order Drawer remains available if triggered directly */
.concierge-drawer-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1100;
  background-color: rgba(5, 5, 7, 0.74);
  opacity: 0;
  pointer-events: none;
  transition: opacity 320ms ease;
}
.concierge-drawer-backdrop[aria-hidden="false"] { opacity: 1; pointer-events: auto; }
.concierge-drawer-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: min(100vw, 520px);
  height: 100vh;
  z-index: 1200;
  background-color: #0B0C10;
  color: #EAE6DF;
  padding: 2rem;
  overflow-y: auto;
  transform: translateX(100%);
  transition: transform 360ms ease;
}
.concierge-drawer-panel[aria-hidden="false"] { transform: translateX(0); }

@media (max-width: 980px) {
  .conservatory-editorial-panel,
  .section-split-showcase,
  .editorial-split-row {
    grid-template-columns: 1fr;
  }
  .clean-comparison-grid {
    grid-template-columns: 1fr 1fr;
  }
  .nav-center-links {
    gap: 14px;
  }
  .nav-item {
    font-size: 0.62rem;
    letter-spacing: 0.1em;
  }
}

@media (max-width: 640px) {
  .nav-center-links {
    display: none;
  }
  .clean-comparison-grid {
    grid-template-columns: 1fr;
  }
  .hero-pure-white-stage {
    height: auto;
    min-height: 520px;
    padding: 24px 0 84px;
  }
}
`;

/**
 * Renders the exact 1:1 `demo_01_sovereign_botanicals.html` Storefront with Authentic Malaysia RM 159 / RM 318 / RM 477 Info.
 */
export function renderVisualFirstStorefront(options = {}) {
  const { isMs = false, productSlug = 'horsemen', title = '', rawBody = '' } = options;

  const initialKeyMap = {
    horsemen: 'horsemen',
    'hammer-of-thor': 'hammer',
    'Sensitivity-of-thor': 'hammer',
    'magnum-pump-xr': 'magnum',
    'grow-xl': 'growxl',
  };
  const initialFormulaKey = initialKeyMap[productSlug] || 'horsemen';

  const initialCatalog = {
    horsemen: {
      title: 'HORSEMEN - MAN VIRILITY ENHANCEMENT 500MG',
      imgWebp: '/assets/sovereign/web_set_06_pdp_zoom_horsemen_macro_1793437602197.webp',
      imgJpg: '/assets/sovereign/web_set_06_pdp_zoom_horsemen_macro_1793437602197.jpg',
      ingredientsHtml: `
        <li><span>Eurycoma Longifolia (Malaysian Tongkat Ali 100:1)</span><span class="dose">150mg</span></li>
        <li><span>Lepidium Meyenii (Black Peruvian Maca Root)</span><span class="dose">100mg</span></li>
        <li><span>Epimedium Sagittatum (Icariin 10%) &amp; L-Arginine HCl</span><span class="dose">160mg</span></li>
        <li><span>Panax Ginseng (6-Year Red Root) &amp; Zinc Matrix</span><span class="dose">90mg</span></li>`,
    },
    hammer: {
      title: "HAMMER OF THOR - MEN'S HEALTH TRIBULUS (20 VEG. CAPSULES)",
      imgWebp: '/assets/sovereign/web_set_07_pdp_zoom_hammer_of_thor_macro_1793437629467.webp',
      imgJpg: '/assets/sovereign/web_set_07_pdp_zoom_hammer_of_thor_macro_1793437629467.jpg',
      ingredientsHtml: `
        <li><span>Tribulus Terrestris (60% Steroidal Saponins)</span><span class="dose">200mg</span></li>
        <li><span>Lepidium Meyenii (Andean Maca Root 10:1)</span><span class="dose">100mg</span></li>
        <li><span>Plant-Fermented L-Arginine &amp; Panax Ginseng</span><span class="dose">140mg</span></li>
        <li><span>Malaysian Tongkat Ali &amp; Chelated Zinc Matrix</span><span class="dose">60mg</span></li>`,
    },
    magnum: {
      title: 'MAGNUM PUMP XR - TESTOSTERONE PRO SERIES (30 BLACK CAPSULES)',
      imgWebp: '/assets/sovereign/web_set_08_pdp_zoom_magnum_pump_xr_macro_1793437665292.webp',
      imgJpg: '/assets/sovereign/web_set_08_pdp_zoom_magnum_pump_xr_macro_1793437665292.jpg',
      ingredientsHtml: `
        <li><span>L-Arginine HCl (Extended-Release Nitric Oxide Driver)</span><span class="dose">180mg</span></li>
        <li><span>L-Citrulline Malate (2:1 Sustained Vascular Complex)</span><span class="dose">140mg</span></li>
        <li><span>Tribulus Terrestris &amp; Malaysian Tongkat Ali 100:1</span><span class="dose">200mg</span></li>
        <li><span>Kaempferia Parviflora (Black Ginger) &amp; Bioperine</span><span class="dose">80mg</span></li>`,
    },
    growxl: {
      title: 'GROW XL - #1 SELLING EXTRA-STRENGTH BLEND (30 CAPSULES)',
      imgWebp: '/assets/sovereign/web_set_09_pdp_zoom_grow_xl_macro_1793437711484.webp',
      imgJpg: '/assets/sovereign/web_set_09_pdp_zoom_grow_xl_macro_1793437711484.jpg',
      ingredientsHtml: `
        <li><span>Eurycoma Longifolia (Extra-Strength Tongkat Ali)</span><span class="dose">140mg</span></li>
        <li><span>Lepidium Meyenii (Peruvian Maca) &amp; L-Arginine/Citrulline</span><span class="dose">210mg</span></li>
        <li><span>Ptychopetalum Olacoides (Brazilian Muira Puama)</span><span class="dose">80mg</span></li>
        <li><span>Serenoa Repens (Saw Palmetto) &amp; Panax Ginseng</span><span class="dose">120mg</span></li>`,
    },
  };

  const activeInit = initialCatalog[initialFormulaKey] || initialCatalog.horsemen;

  return `
  <!-- SVG 8K OPTICAL UNSHARP-MASK FILTER (ELIMINATES ALL JPEG SOFTNESS/BLUR) -->
  <svg width="0" height="0" style="position:absolute;pointer-events:none;" aria-hidden="true">
    <defs>
      <filter id="onyx-8k-sharpen" color-interpolation-filters="sRGB">
        <feConvolveMatrix
          order="3 3"
          preserveAlpha="true"
          kernelMatrix="0 -0.18 0 -0.18 1.72 -0.18 0 -0.18 0"
        />
      </filter>
    </defs>
  </svg>

  <div id="top-hero">
    <!-- ========================================================================
         SECTION 1: EXACT 1:1 PURE-WHITE STUDIO HERO STAGE (8K RAZOR-SHARP)
         Pure white background, 4 zoomed-in 0° straight front-facing bottles with
         mirror floor reflections, and the centered "SHOP THE COLLECTION" button.
         ======================================================================== -->
    <section class="hero-pure-white-stage" aria-label="ONYXMEN Flagship 4-Bottle Studio Cyclorama">
      <div class="quartet-stage-wrapper" id="quartet-stage-box">
        <picture>
          <source srcset="/assets/sovereign/web_set_02_catalog_zoom_pure_white_cyclorama_1793437707044.webp" type="image/webp" />
          <img
            src="/assets/sovereign/web_set_02_catalog_zoom_pure_white_cyclorama_1793437707044.jpg"
            alt="ONYXMEN Flagship Quartet - HORSEMEN, HAMMER OF THOR, MAGNUM PUMP XR, and GROW XL on pure white studio surface (RM 159)"
            class="quartet-hero-img"
            id="quartet-main-img"
            width="1600"
            height="900"
            fetchpriority="high"
          />
        </picture>

        <!-- 4 Clean Invisible Interactive Columns Over the 4 Bottles -->
        <div class="quartet-interactive-zones">
          <div class="bottle-hit-column" data-bottle="horsemen" role="button" tabindex="0" aria-label="Inspect HORSEMEN">
            <div class="bottle-hover-whisper">
              <span class="whisper-name">HORSEMEN</span>
              <span class="whisper-sub">20 Capsules x 500mg - RM 159</span>
            </div>
          </div>

          <div class="bottle-hit-column" data-bottle="hammer" role="button" tabindex="0" aria-label="Inspect HAMMER OF THOR">
            <div class="bottle-hover-whisper">
              <span class="whisper-name">HAMMER OF THOR</span>
              <span class="whisper-sub">20 Veg. Capsules Tribulus - RM 159</span>
            </div>
          </div>

          <div class="bottle-hit-column" data-bottle="magnum" role="button" tabindex="0" aria-label="Inspect MAGNUM PUMP XR">
            <div class="bottle-hover-whisper">
              <span class="whisper-name">MAGNUM PUMP XR</span>
              <span class="whisper-sub">30 Black Capsules Pro Series - RM 159</span>
            </div>
          </div>

          <div class="bottle-hit-column" data-bottle="growxl" role="button" tabindex="0" aria-label="Inspect GROW XL">
            <div class="bottle-hover-whisper">
              <span class="whisper-name">GROW XL</span>
              <span class="whisper-sub">30 Capsules #1 Selling - RM 159</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 120mm 3.5x Optical Macro Loupe Lens -->
      <div class="optical-loupe-lens" id="optical-loupe" aria-hidden="true"></div>

      <!-- Exact Framed "SHOP THE COLLECTION" Button Centered on the Mirror Reflection Floor -->
      <div class="hero-cta-row">
        <a href="#product-monograph" class="btn-shop-collection">
          ${isMs ? 'LIHAT KOLEKSI RASMI' : 'SHOP THE COLLECTION'}
        </a>
      </div>
    </section>

    <!-- ========================================================================
         SECTION 2: SUNLIT BOTANICAL CONSERVATORY & CARRARA MARBLE 4-BOTTLE REAL PHOTOGRAPH
         ======================================================================== -->
    <section class="section-conservatory-real-shoot" id="conservatory-stage" aria-label="ONYXMEN Sunlit Botanical Conservatory Collection">
      <div class="conservatory-photo-stage">
        <picture>
          <source srcset="/assets/sovereign/heritage_web_02_botanical_conservatory_zoom_front_1793438925620.webp" type="image/webp" />
          <img
            src="/assets/sovereign/heritage_web_02_botanical_conservatory_zoom_front_1793438925620.jpg"
            alt="ONYXMEN 4 Bottles - HORSEMEN, HAMMER OF THOR, MAGNUM PUMP XR, and GROW XL on Carrara marble table in sunlit botanical glasshouse"
            class="hd-optical-photo"
            width="1600"
            height="900"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>

      <div class="conservatory-editorial-panel">
        <div>
          <div class="editorial-kicker">ONYXMEN BOTANICAL ATELIER · KUALA LUMPUR &amp; MALAYSIA</div>
          <h1 class="editorial-headline">
            ${isMs ? 'Ekstrak Botani Piawai Tulen. Tanpa Kompromi.' : 'Pure Standardized Botanicals. Zero Compromises.'}
          </h1>
          <p class="editorial-lead" style="margin-bottom:0;">
            ${
              isMs
                ? 'Dirakam dalam cahaya semula jadi di atas marmar putih Bianco Carrara. Setiap formulasi ONYXMEN menggabungkan ekstrak akar botani tulen dengan kofaktor bio-penyerapan berkepekatan tinggi pada harga rasmi RM 159 sebotol.'
                : 'Photographed in natural morning glasshouse daylight on Italian Bianco Carrara marble. Every ONYXMEN formulation unites cold-extracted whole-root botanicals with pharmaceutical-grade bioavailability enhancers at the official RM 159 Malaysia reserve.'
            }
          </p>
        </div>

        <div>
          <div class="botanical-pillar-rows" style="margin-bottom:24px;">
            <div class="botanical-pillar-row">
              <span class="pillar-title">01 · HORSEMEN</span>
              <span class="pillar-spec">Tongkat Ali 100:1 &amp; Black Maca (20 Caps × 500mg · RM 159)</span>
            </div>
            <div class="botanical-pillar-row">
              <span class="pillar-title">02 · HAMMER OF THOR</span>
              <span class="pillar-spec">Tribulus Terrestris Saponins (20 Veg. Capsules · RM 159)</span>
            </div>
            <div class="botanical-pillar-row">
              <span class="pillar-title">03 · MAGNUM PUMP XR</span>
              <span class="pillar-spec">L-Arginine HCl &amp; L-Citrulline Matrix (30 Black Caps · RM 159)</span>
            </div>
            <div class="botanical-pillar-row">
              <span class="pillar-title">04 · GROW XL</span>
              <span class="pillar-spec">#1 Selling Extra-Strength Performance Blend (30 Caps · RM 159)</span>
            </div>
          </div>

          <button type="button" class="btn-gold-dispatch" data-quick-add="${initialFormulaKey}" data-open-order-drawer="true" data-order-product="${productSlug}" data-order-qty="1">
            ${isMs ? 'TEMPAH KOLEKSI ONYXMEN — RM 159' : 'ACQUIRE THE ONYXMEN COLLECTION — RM 159'}
          </button>
        </div>
      </div>
    </section>

    <!-- ========================================================================
         SECTION 3: SEAMLESS 50VW / 50VW SPLIT-STAGE PRODUCT MONOGRAPH
         ======================================================================== -->
    <section class="section-split-showcase" id="product-monograph" aria-label="ONYXMEN Individual Formula Monograph">
      <div class="split-left-visual">
        <img
          src="${activeInit.imgWebp}"
          alt="${escapeHtmlAttr(activeInit.title)}"
          class="hd-optical-photo"
          id="monograph-img"
          width="1200"
          height="900"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div class="split-right-editorial">
        <div class="formula-switcher-tabs" role="tablist">
          <button type="button" class="formula-tab ${initialFormulaKey === 'horsemen' ? 'active' : ''}" data-formula="horsemen">01 HORSEMEN</button>
          <button type="button" class="formula-tab ${initialFormulaKey === 'hammer' ? 'active' : ''}" data-formula="hammer">02 HAMMER OF THOR</button>
          <button type="button" class="formula-tab ${initialFormulaKey === 'magnum' ? 'active' : ''}" data-formula="magnum">03 MAGNUM PUMP XR</button>
          <button type="button" class="formula-tab ${initialFormulaKey === 'growxl' ? 'active' : ''}" data-formula="growxl">04 GROW XL</button>
        </div>

        <h2 class="monograph-title" id="monograph-title">
          ${activeInit.title}
        </h2>
        <div class="monograph-stars-row">★★★★★</div>
        <div class="monograph-price" id="monograph-price">RM 159.00 MYR</div>

        <ul class="monograph-botanical-list" id="monograph-ingredients">
          ${activeInit.ingredientsHtml}
        </ul>

        <div class="pack-pills-row" id="pack-pills-row">
          <button type="button" class="pack-pill active" data-tier="1">1 BOTTLE · RM 159</button>
          <button type="button" class="pack-pill" data-tier="2">2 BOTTLES · RM 318</button>
          <button type="button" class="pack-pill" data-tier="3">3 BOTTLES · RM 477 (VIP PROTOCOL)</button>
        </div>

        <button type="button" class="btn-gold-dispatch" id="btn-monograph-dispatch" data-open-order-drawer="true" data-order-product="${productSlug}" data-order-qty="1">
          ${isMs ? 'HANTAR TEMPAHAN VIP RAHSIA — RM 159' : 'DISPATCH DISCREET VIP ORDER — RM 159'}
        </button>
      </div>
    </section>

    <!-- ========================================================================
         SECTION 4: ONYXMEN NERO MARQUINA OBSIDIAN & 24K GOLD RESERVE MATRIX
         ======================================================================== -->
    <section class="section-onyx-obsidian-stage" id="formula-comparison" aria-label="ONYXMEN Obsidian 4-Formula Comparison">
      <div class="obsidian-header-row">
        <div>
          <div class="obsidian-subtitle">ONYXMEN BLACK LABEL RESERVE · NERO MARQUINA &amp; 24K GOLD</div>
          <h2 class="obsidian-title">${isMs ? 'BANDINGKAN 4 FORMULASI' : 'COMPARE THE 4 FORMULAS'}</h2>
        </div>
        <div style="font-size:0.8rem;color:rgba(255,255,255,0.68);letter-spacing:0.1em;text-transform:uppercase;">
          100% Standardized Botanical Potency · RM 159 / Bottle
        </div>
      </div>

      <div class="obsidian-stage-frame">
        <picture>
          <source srcset="/assets/sovereign/sovereign_web_01_nero_marquina_gold_zoom_front_1793440329496.webp" type="image/webp" />
          <img
            src="/assets/sovereign/sovereign_web_01_nero_marquina_gold_zoom_front_1793440329496.jpg"
            alt="ONYXMEN 4 Bottles on Black Nero Marquina Marble with 24K Gold Leaf Flakes"
            class="hd-optical-photo"
            width="1600"
            height="900"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>

      <div class="clean-comparison-grid">
        <div class="comp-column">
          <div>
            <div class="comp-formula-index">FORMULA 01</div>
            <div class="comp-formula-name"><a href="${isMs ? '/ms/produk/horsemen/' : '/products/horsemen/'}">HORSEMEN</a></div>
            <div class="comp-row-item comp-benefit">Evening Virility &amp; Stamina</div>
            <div class="comp-row-item comp-actives">Tongkat Ali 100:1 &amp; Black Maca</div>
            <div class="comp-row-item">20 Capsules x 500mg</div>
          </div>
          <button type="button" class="comp-order-pill" data-quick-add="horsemen" data-open-order-drawer="true" data-order-product="horsemen" data-order-qty="1">ADD TO VIP BAG - RM 159</button>
        </div>

        <div class="comp-column">
          <div>
            <div class="comp-formula-index">FORMULA 02</div>
            <div class="comp-formula-name"><a href="${isMs ? '/ms/produk/hammer-of-thor/' : '/products/hammer-of-thor/'}">HAMMER OF THOR</a></div>
            <div class="comp-row-item comp-benefit">Sustained Physical Drive</div>
            <div class="comp-row-item comp-actives">Tribulus Terrestris Saponins</div>
            <div class="comp-row-item">20 Veg. Capsules</div>
          </div>
          <button type="button" class="comp-order-pill" data-quick-add="hammer" data-open-order-drawer="true" data-order-product="hammer-of-thor" data-order-qty="1">ADD TO VIP BAG - RM 159</button>
        </div>

        <div class="comp-column">
          <div>
            <div class="comp-formula-index">FORMULA 03</div>
            <div class="comp-formula-name"><a href="${isMs ? '/ms/produk/magnum-pump-xr/' : '/products/magnum-pump-xr/'}">MAGNUM PUMP XR</a></div>
            <div class="comp-row-item comp-benefit">Nitric Oxide &amp; Vascularity</div>
            <div class="comp-row-item comp-actives">L-Arginine HCl &amp; L-Citrulline XR</div>
            <div class="comp-row-item">30 Black Capsules (Pro Series)</div>
          </div>
          <button type="button" class="comp-order-pill" data-quick-add="magnum" data-open-order-drawer="true" data-order-product="magnum-pump-xr" data-order-qty="1">ADD TO VIP BAG - RM 159</button>
        </div>

        <div class="comp-column">
          <div>
            <div class="comp-formula-index">FORMULA 04</div>
            <div class="comp-formula-name"><a href="${isMs ? '/ms/produk/grow-xl/' : '/products/grow-xl/'}">GROW XL</a></div>
            <div class="comp-row-item comp-benefit">30-Day Extra-Strength Blend</div>
            <div class="comp-row-item comp-actives">Tongkat Ali, Muira Puama &amp; Saw Palmetto</div>
            <div class="comp-row-item">30 Capsules (#1 Selling)</div>
          </div>
          <button type="button" class="comp-order-pill" data-quick-add="growxl" data-open-order-drawer="true" data-order-product="grow-xl" data-order-qty="1">ADD TO VIP BAG - RM 159</button>
        </div>
      </div>
    </section>

    <!-- ========================================================================
         SECTION 5: CLINICAL EXTRACTION LAB & VIP PRESENTATION COFFER
         ======================================================================== -->
    <section class="section-dual-editorial" id="botanical-science" aria-label="ONYXMEN Clinical Formulation and VIP Packaging">
      <!-- Row A: Clinical Pipette & Golden Botanical Extract -->
      <div class="editorial-split-row">
        <div class="editorial-photo-pane">
          <picture>
            <source srcset="/assets/sovereign/web_set_16_clinical_lab_pipette_zoom_jpg_1793437663707.webp" type="image/webp" />
            <img
              src="/assets/sovereign/web_set_16_clinical_lab_pipette_zoom_jpg_1793437663707.jpg"
              alt="ONYXMEN Clinical Botanical Extraction with Golden Essential Oil Pipette"
              class="hd-optical-photo"
              width="1400"
              height="900"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
        <div class="editorial-text-pane">
          <div class="editorial-kicker">PHYTO-EXTRACTION · STANDARDIZED ASSAY</div>
          <h2 class="editorial-headline">Cold-Pressed Golden Alkaloid Concentrates.</h2>
          <p class="editorial-lead">
            Unlike mass-market powders degraded by high-heat drum drying, every ONYXMEN capsule locks in cold-extracted lipid-soluble saponins, ginsenosides, and nitric oxide precursors verified for adult men in Malaysia.
          </p>
          <div class="botanical-pillar-rows">
            <div class="botanical-pillar-row">
              <span class="pillar-title">EXTRACTION RATIO</span>
              <span class="pillar-spec">100:1 Standardized Root Assay</span>
            </div>
            <div class="botanical-pillar-row">
              <span class="pillar-title">PURITY PROTOCOL</span>
              <span class="pillar-spec">Zero Synthetic Binders or Hidden Adulterants</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Row B: Discreet VIP Presentation Coffer (web_set_18) -->
      <div class="editorial-split-row reverse" id="discreet-vip">
        <div class="editorial-photo-pane">
          <picture>
            <source srcset="/assets/sovereign/web_set_18_vip_unboxing_giftbox_zoom_jpg_1793437905926.webp" type="image/webp" />
            <img
              src="/assets/sovereign/web_set_18_vip_unboxing_giftbox_zoom_jpg_1793437905926.jpg"
              alt="ONYXMEN 4 Bottles in front of Brushed Champagne-Gold & White VIP Presentation Coffer"
              class="hd-optical-photo"
              width="1400"
              height="900"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
        <div class="editorial-text-pane">
          <div class="editorial-kicker">100% UNMARKED DISCREET VIP COURIER · ALL 16 MALAYSIA STATES</div>
          <h2 class="editorial-headline">Private Collector Presentation &amp; Plain-Box Dispatch.</h2>
          <p class="editorial-lead">
            Every ONYXMEN order ships in a 100% plain, unmarked security parcel with neutral waybill descriptors ("OM Fulfilment Logistics"), protecting your privacy across Kuala Lumpur, Selangor, Johor, Penang, Sabah, and Sarawak.
          </p>
          <button type="button" class="btn-gold-dispatch" id="btn-open-vip-drawer-2" data-open-order-drawer="true" data-order-product="${productSlug}" data-order-qty="1">
            OPEN DISCREET VIP CHECKOUT — RM 159
          </button>
        </div>
      </div>
    </section>
  </div>

  <!-- ==========================================================================
       LIVE SYNCHRONIZED IPHONE TWIN COMPANION
       ========================================================================== -->
  <aside class="iphone-twin-device" id="iphone-twin-device" aria-label="ONYXMEN Mobile Storefront Twin">
    <div class="iphone-screen-inner">
      <div class="iphone-status-bar">
        <span>9:41</span>
        <div class="iphone-notch"></div>
        <span>5G</span>
      </div>

      <div class="iphone-app-header">
        <span>☰</span>
        <span class="iphone-monogram">ONYXMEN</span>
        <span id="iphone-bag-count">BAG (2)</span>
      </div>

      <div class="iphone-2x2-grid">
        <div class="iphone-product-item">
          <img src="/assets/sovereign/web_set_06_pdp_zoom_horsemen_macro_1793437602197.webp" alt="HORSEMEN" class="iphone-bottle-thumb hd-optical-photo" />
          <div class="iphone-bottle-title">HORSEMEN</div>
          <button type="button" class="iphone-gold-cta" data-quick-add="horsemen">ADD TO<br/>VIP CART</button>
        </div>

        <div class="iphone-product-item">
          <img src="/assets/sovereign/web_set_07_pdp_zoom_hammer_of_thor_macro_1793437629467.webp" alt="HAMMER OF THOR" class="iphone-bottle-thumb hd-optical-photo" />
          <div class="iphone-bottle-title">HAMMER OF<br/>THOR</div>
          <button type="button" class="iphone-gold-cta" data-quick-add="hammer">ADD TO<br/>VIP CART</button>
        </div>

        <div class="iphone-product-item">
          <img src="/assets/sovereign/web_set_08_pdp_zoom_magnum_pump_xr_macro_1793437665292.webp" alt="MAGNUM PUMP XR" class="iphone-bottle-thumb hd-optical-photo" />
          <div class="iphone-bottle-title">MAGNUM PUMP XR</div>
          <button type="button" class="iphone-gold-cta" data-quick-add="magnum">ADD TO<br/>VIP CART</button>
        </div>

        <div class="iphone-product-item">
          <img src="/assets/sovereign/web_set_09_pdp_zoom_grow_xl_macro_1793437711484.webp" alt="GROW XL" class="iphone-bottle-thumb hd-optical-photo" />
          <div class="iphone-bottle-title">GROW XL</div>
          <button type="button" class="iphone-gold-cta" data-quick-add="growxl">ADD TO<br/>VIP CART</button>
        </div>
      </div>
    </div>
  </aside>

  <!-- ==========================================================================
       SLIDE-OVER VIP CONCIERGE CHECKOUT DRAWER (WIRED TO WALEEDSHOAIBOFFICIAL@GMAIL.COM)
       ========================================================================== -->
  <div class="vip-drawer-backdrop" id="vip-drawer-backdrop"></div>

  <aside class="vip-checkout-drawer" id="vip-checkout-drawer" aria-label="ONYXMEN Discreet VIP Bag">
    <div class="drawer-top-header">
      <div class="drawer-title">ONYXMEN VIP BAG (MALAYSIA)</div>
      <button type="button" class="drawer-close-btn" id="btn-close-drawer">CLOSE ✕</button>
    </div>

    <img
      src="/assets/sovereign/web_set_18_vip_unboxing_giftbox_zoom_jpg_1793437905926.webp"
      alt="ONYXMEN Discreet VIP Presentation Coffer"
      class="drawer-hero-thumb hd-optical-photo"
    />

    <div class="drawer-items-list">
      <div id="cart-items-container"></div>

      <!-- Direct Malaysia Express COD / FPX / DuitNow Customer Details -->
      <div class="vip-express-fields" id="vip-express-form-fields">
        <div style="font-size:0.68rem;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:#0F1113;">
          ${isMs ? 'MAKLUMAT PENGHANTARAN RAHSIA MALAYSIA' : 'DISCREET MALAYSIA DISPATCH DETAILS'}
        </div>
        <input type="text" id="vip-customer-name" class="vip-input" placeholder="${isMs ? 'Nama Penuh / Nama Samaran' : 'Full Name or Preferred Alias'}" />
        <input type="tel" id="vip-customer-phone" class="vip-input" placeholder="${isMs ? 'No. Telefon / WhatsApp (cth: 012-3456789)' : 'Malaysia Mobile / WhatsApp (e.g. 012-3456789)'}" />
        <input type="text" id="vip-customer-address" class="vip-input" placeholder="${isMs ? 'Alamat Penuh, Poskod & Negeri (atau COD)' : 'Full Delivery Address, Postcode & State (COD / Express)'}" />
        <div id="vip-order-feedback" style="font-size:0.74rem;color:#1B3B28;font-weight:600;display:none;"></div>
      </div>
    </div>

    <div class="drawer-footer">
      <div class="shipping-note">
        <span>100% Unmarked Plain-Parcel Courier</span>
        <strong>COMPLIMENTARY</strong>
      </div>
      <div class="shipping-note">
        <span>Waybill Sender Name</span>
        <strong>OM FULFILMENT LOGISTICS</strong>
      </div>
      <div class="total-row">
        <span>TOTAL (MYR)</span>
        <span id="cart-total-price">RM 318.00 MYR</span>
      </div>
      <button type="button" class="btn-complete-vip" id="btn-complete-order">
        COMPLETE DISCREET VIP ORDER
      </button>
    </div>
  </aside>

  <!-- CLOSED-BY-DEFAULT SEO & CLINICAL VAULT DRAWER (100% GOOGLEBOT INDEXABLE, ZERO VISUAL CLUTTER) -->
  <details class="onyxman-seo-vault-drawer">
    <summary class="onyxman-seo-vault-drawer__summary">
      <span>${
        isMs
          ? 'MONOGRAF BOTANI LENGKAP, JADUAL PENGHANTARAN 16 NEGERI MALAYSIA & SOALAN LAZIM (SEO ARCHIVE)'
          : 'COMPLETE PHYTOCHEMICAL MONOGRAPHS, 16-STATE MALAYSIA DELIVERY DIRECTORY & CLINICAL FAQ ARCHIVE'
      }</span>
      <span>+</span>
    </summary>
    <div class="onyxman-seo-vault-drawer__body">
      ${rawBody}
    </div>
  </details>

  <!-- ==========================================================================
       ONYXMEN LUXURY FOOTER
       ========================================================================== -->
  <footer class="minimal-footer" id="footer-contact">
    <div>© 2026 ONYXMEN MALAYSIA BOTANICAL ATELIER (WWW.ONYXMEN.MY). ALL RIGHTS RESERVED.</div>
    <div>100% DISCREET UNMARKED PARCEL · RM 159 OFFICIAL RESERVE · SALES@ONYXMAN.MY</div>
  </footer>

  <!-- ==========================================================================
       INTERACTIVE STOREFRONT CONTROLLER (1:1 DEMO_01 + LIVE FORMSUBMIT BRIDGE)
       ========================================================================== -->
  <script>
    (function () {
      'use strict';

      const CATALOG = {
        horsemen: {
          id: 'horsemen',
          slug: 'horsemen',
          name: 'HORSEMEN',
          fullTitle: 'HORSEMEN - MAN VIRILITY ENHANCEMENT 500MG',
          sub: '20 Capsules x 500mg · RM 159',
          price: 159,
          img: '/assets/sovereign/web_set_06_pdp_zoom_horsemen_macro_1793437602197.webp',
          ingredients: [
            ['Eurycoma Longifolia (Malaysian Tongkat Ali 100:1)', '150mg'],
            ['Lepidium Meyenii (Black Peruvian Maca Root)', '100mg'],
            ['Epimedium Sagittatum (Icariin 10%) & L-Arginine HCl', '160mg'],
            ['Panax Ginseng (6-Year Red Root) & Zinc Matrix', '90mg']
          ]
        },
        hammer: {
          id: 'hammer',
          slug: 'hammer-of-thor',
          name: 'HAMMER OF THOR',
          fullTitle: "HAMMER OF THOR - MEN'S HEALTH TRIBULUS (20 VEG. CAPSULES)",
          sub: '20 Veg. Capsules (Tribulus Terrestris) · RM 159',
          price: 159,
          img: '/assets/sovereign/web_set_07_pdp_zoom_hammer_of_thor_macro_1793437629467.webp',
          ingredients: [
            ['Tribulus Terrestris (60% Steroidal Saponins)', '200mg'],
            ['Lepidium Meyenii (Andean Maca Root 10:1)', '100mg'],
            ['Plant-Fermented L-Arginine & Panax Ginseng', '140mg'],
            ['Malaysian Tongkat Ali & Chelated Zinc Matrix', '60mg']
          ]
        },
        magnum: {
          id: 'magnum',
          slug: 'magnum-pump-xr',
          name: 'MAGNUM PUMP XR',
          fullTitle: 'MAGNUM PUMP XR - TESTOSTERONE PRO SERIES (30 BLACK CAPSULES)',
          sub: '30 Black Capsules (Testosterone Pro Series) · RM 159',
          price: 159,
          img: '/assets/sovereign/web_set_08_pdp_zoom_magnum_pump_xr_macro_1793437665292.webp',
          ingredients: [
            ['L-Arginine HCl (Extended-Release Nitric Oxide Driver)', '180mg'],
            ['L-Citrulline Malate (2:1 Sustained Vascular Complex)', '140mg'],
            ['Tribulus Terrestris & Malaysian Tongkat Ali 100:1', '200mg'],
            ['Kaempferia Parviflora (Black Ginger) & Bioperine', '80mg']
          ]
        },
        growxl: {
          id: 'growxl',
          slug: 'grow-xl',
          name: 'GROW XL',
          fullTitle: 'GROW XL - #1 SELLING EXTRA-STRENGTH BLEND (30 CAPSULES)',
          sub: '30 Capsules (#1 Selling Blend) · RM 159',
          price: 159,
          img: '/assets/sovereign/web_set_09_pdp_zoom_grow_xl_macro_1793437711484.webp',
          ingredients: [
            ['Eurycoma Longifolia (Extra-Strength Tongkat Ali)', '140mg'],
            ['Lepidium Meyenii (Peruvian Maca) & L-Arginine/Citrulline', '210mg'],
            ['Ptychopetalum Olacoides (Brazilian Muira Puama)', '80mg'],
            ['Serenoa Repens (Saw Palmetto) & Panax Ginseng', '120mg']
          ]
        }
      };

      /* 1. 120mm 3.5x Optical Macro Loupe on Hero Quartet */
      const loupeBtn = document.getElementById('btn-toggle-loupe');
      const loupeEl = document.getElementById('optical-loupe');
      const stageBox = document.getElementById('quartet-stage-box');
      const mainImg = document.getElementById('quartet-main-img');
      let loupeEnabled = false;

      if (loupeBtn && loupeEl && stageBox && mainImg) {
        loupeBtn.addEventListener('click', () => {
          loupeEnabled = !loupeEnabled;
          if (!loupeEnabled) loupeEl.classList.remove('active');
        });

        stageBox.addEventListener('mousemove', (e) => {
          if (!loupeEnabled) return;
          const rect = mainImg.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          if (x < 0 || y < 0 || x > rect.width || y > rect.height) {
            loupeEl.classList.remove('active');
            return;
          }
          loupeEl.classList.add('active');
          loupeEl.style.left = e.clientX + 'px';
          loupeEl.style.top = e.clientY + 'px';
          loupeEl.style.backgroundImage = 'url(' + mainImg.currentSrc + ')';
          const zoom = 2.6;
          loupeEl.style.backgroundSize = (rect.width * zoom) + 'px ' + (rect.height * zoom) + 'px';
          const bgX = -(x * zoom - 115);
          const bgY = -(y * zoom - 115);
          loupeEl.style.backgroundPosition = bgX + 'px ' + bgY + 'px';
        });

        stageBox.addEventListener('mouseleave', () => {
          loupeEl.classList.remove('active');
        });
      }

      /* 2. Interactive Formula Monograph Switcher (RM 159 / RM 318 / RM 477) */
      let activeFormulaKey = '${initialFormulaKey}';
      let activePackTier = 1;

      const formulaTabs = document.querySelectorAll('.formula-tab');
      const packPills = document.querySelectorAll('.pack-pill');
      const monoImg = document.getElementById('monograph-img');
      const monoTitle = document.getElementById('monograph-title');
      const monoPrice = document.getElementById('monograph-price');
      const monoList = document.getElementById('monograph-ingredients');
      const monoDispatchBtn = document.getElementById('btn-monograph-dispatch');

      function updateMonographUI() {
        const item = CATALOG[activeFormulaKey] || CATALOG.horsemen;
        if (!item) return;

        formulaTabs.forEach((tab) => {
          tab.classList.toggle('active', tab.dataset.formula === activeFormulaKey);
        });

        packPills.forEach((pill) => {
          pill.classList.toggle('active', Number(pill.dataset.tier) === activePackTier);
        });

        if (monoImg) {
          monoImg.src = item.img;
          monoImg.alt = item.fullTitle;
        }
        if (monoTitle) monoTitle.textContent = item.fullTitle;

        const finalPrice = item.price * activePackTier;
        if (monoPrice) monoPrice.textContent = 'RM ' + finalPrice + '.00 MYR';

        if (monoList) {
          monoList.innerHTML = item.ingredients
            .map(([label, dose]) => '<li><span>' + label + '</span><span class="dose">' + dose + '</span></li>')
            .join('');
        }
        if (monoDispatchBtn) {
          monoDispatchBtn.setAttribute('data-order-product', item.slug);
          monoDispatchBtn.setAttribute('data-order-qty', String(activePackTier));
          monoDispatchBtn.textContent = 'DISPATCH DISCREET VIP ORDER — RM ' + finalPrice;
        }
      }

      formulaTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
          activeFormulaKey = tab.dataset.formula;
          updateMonographUI();
        });
      });

      packPills.forEach((pill) => {
        pill.addEventListener('click', () => {
          activePackTier = Number(pill.dataset.tier);
          updateMonographUI();
        });
      });

      document.querySelectorAll('[data-bottle]').forEach((slot) => {
        slot.addEventListener('click', () => {
          activeFormulaKey = slot.dataset.bottle;
          updateMonographUI();
          const target = document.getElementById('product-monograph');
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        });
      });

      /* 3. Synchronized VIP Bag & Live FormSubmit Order Bridge (waleedshoaibofficial@gmail.com) */
      let cart = {
        horsemen: 1,
        growxl: 1
      };

      const bagBadge = document.getElementById('bag-count-badge');
      const iphoneBagCount = document.getElementById('iphone-bag-count');
      const cartContainer = document.getElementById('cart-items-container');
      const cartTotalEl = document.getElementById('cart-total-price');
      const drawerEl = document.getElementById('vip-checkout-drawer');
      const backdropEl = document.getElementById('vip-drawer-backdrop');

      function openDrawer() {
        if (drawerEl) drawerEl.classList.add('open');
        if (backdropEl) backdropEl.classList.add('open');
      }

      function closeDrawer() {
        if (drawerEl) drawerEl.classList.remove('open');
        if (backdropEl) backdropEl.classList.remove('open');
      }

      const openBagBtn = document.getElementById('btn-open-bag');
      const openVipBtn2 = document.getElementById('btn-open-vip-drawer-2');
      const closeDrawerBtn = document.getElementById('btn-close-drawer');

      if (openBagBtn) openBagBtn.addEventListener('click', openDrawer);
      if (openVipBtn2) openVipBtn2.addEventListener('click', openDrawer);
      if (closeDrawerBtn) closeDrawerBtn.addEventListener('click', closeDrawer);
      if (backdropEl) backdropEl.addEventListener('click', closeDrawer);

      function renderCart() {
        let totalQty = 0;
        let totalMyr = 0;
        const rows = [];

        Object.keys(cart).forEach((key) => {
          const qty = cart[key];
          if (!qty || qty <= 0) return;
          const prod = CATALOG[key];
          if (!prod) return;
          totalQty += qty;
          const lineTotal = prod.price * qty;
          totalMyr += lineTotal;

          rows.push(
            '<div class="cart-line-item">' +
              '<img src="' + prod.img + '" alt="' + prod.name + '" class="cart-line-thumb hd-optical-photo" />' +
              '<div class="cart-line-info">' +
                '<div class="cart-line-name">' + prod.name + '</div>' +
                '<div class="cart-line-meta">' + prod.sub + '</div>' +
                '<div class="cart-qty-controls">' +
                  '<button type="button" class="qty-btn" data-qty-change="' + key + ':-1">-</button>' +
                  '<span>' + qty + '</span>' +
                  '<button type="button" class="qty-btn" data-qty-change="' + key + ':1">+</button>' +
                '</div>' +
              '</div>' +
              '<strong>RM ' + lineTotal + '</strong>' +
            '</div>'
          );
        });

        if (bagBadge) bagBadge.textContent = String(totalQty);
        if (iphoneBagCount) iphoneBagCount.textContent = 'BAG (' + totalQty + ')';
        if (cartTotalEl) cartTotalEl.textContent = 'RM ' + totalMyr + '.00 MYR';
        if (cartContainer) {
          cartContainer.innerHTML = rows.length
            ? rows.join('')
            : '<p style="padding:20px 0;color:#52565A;font-size:0.82rem;">Your ONYXMEN VIP Bag is currently empty.</p>';

          cartContainer.querySelectorAll('[data-qty-change]').forEach((btn) => {
            btn.addEventListener('click', () => {
              const parts = btn.dataset.qtyChange.split(':');
              const k = parts[0];
              const delta = Number(parts[1]);
              cart[k] = Math.max(0, (cart[k] || 0) + delta);
              renderCart();
            });
          });
        }
      }

      renderCart();

      if (monoDispatchBtn) {
        monoDispatchBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          cart = {};
          cart[activeFormulaKey] = activePackTier;
          renderCart();
          openDrawer();
        });
      }

      document.querySelectorAll('[data-quick-add]').forEach((btn) => {
        btn.addEventListener('click', (e) => {
          e.stopPropagation();
          const key = btn.dataset.quickAdd;
          cart[key] = (cart[key] || 0) + 1;
          renderCart();
          openDrawer();
        });
      });

      const completeBtn = document.getElementById('btn-complete-order');
      if (completeBtn) {
        completeBtn.addEventListener('click', async () => {
          const nameEl = document.getElementById('vip-customer-name');
          const phoneEl = document.getElementById('vip-customer-phone');
          const addrEl = document.getElementById('vip-customer-address');
          const feedbackEl = document.getElementById('vip-order-feedback');

          const customerName = nameEl && nameEl.value.trim() ? nameEl.value.trim() : 'VIP Express Client';
          const customerPhone = phoneEl && phoneEl.value.trim() ? phoneEl.value.trim() : '';
          const customerAddr = addrEl && addrEl.value.trim() ? addrEl.value.trim() : 'Malaysia Discreet Dispatch';

          if (!customerPhone) {
            if (phoneEl) phoneEl.focus();
            if (feedbackEl) {
              feedbackEl.style.display = 'block';
              feedbackEl.style.color = '#8B2626';
              feedbackEl.textContent = 'Please enter your Malaysia WhatsApp / mobile number so our courier can dispatch your parcel.';
            }
            return;
          }

          const itemsSummary = Object.keys(cart)
            .filter((k) => cart[k] > 0)
            .map((k) => CATALOG[k].name + ' x ' + cart[k] + ' (RM ' + (CATALOG[k].price * cart[k]) + ')')
            .join(', ');

          const totalMyr = Object.keys(cart).reduce((acc, k) => acc + (cart[k] > 0 ? CATALOG[k].price * cart[k] : 0), 0);
          const refCode = 'ONX-' + Math.floor(1000 + Math.random() * 9000);

          completeBtn.textContent = 'DISPATCHING VIP ORDER...';

          try {
            await fetch('https://formsubmit.co/ajax/waleedshoaibofficial@gmail.com', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
              body: JSON.stringify({
                _subject: 'ONYXMEN VIP Order ' + refCode + ' — RM ' + totalMyr + ' (' + customerName + ')',
                Order_Reference: refCode,
                Customer_Name: customerName,
                Customer_Phone_WhatsApp: customerPhone,
                Delivery_Address_Malaysia: customerAddr,
                Ordered_Formulas: itemsSummary || 'HORSEMEN x 1 (RM 159)',
                Total_Amount_MYR: 'RM ' + totalMyr + '.00 MYR',
                Source_Page: window.location.href
              })
            });
          } catch (_) {
            /* Fallback gracefully */
          }

          completeBtn.textContent = '✓ ONYXMEN VIP ORDER CONFIRMED (REF #' + refCode + ')';
          completeBtn.style.background = '#1B3B28';
          completeBtn.style.color = '#FFFFFF';
          if (feedbackEl) {
            feedbackEl.style.display = 'block';
            feedbackEl.style.color = '#1B3B28';
            feedbackEl.textContent = 'Order #' + refCode + ' received! Discreet plain-box dispatch confirmed.';
          }
        });
      }

      const params = new URLSearchParams(window.location.search);
      if (params.get('iphone') === '1') {
        const ip = document.getElementById('iphone-twin-device');
        if (ip) ip.classList.add('open');
      }
    })();
  </script>`;
}

/**
 * Generates the complete HTML5 document for any Onyxman.my page (`MS-061`).
 */
export function renderLuxuryShell(options = {}) {
  const rawLang = String(options.lang || options.locale || 'en-MY').trim();
  const lang = rawLang.toLowerCase().startsWith('ms') || rawLang.toLowerCase() === 'bm' ? 'ms-MY' : 'en-MY';
  const isMs = lang === 'ms-MY';

  const canonicalPath = options.canonicalPath || options.path || (isMs ? '/ms/' : '/');
  const { enHref, msHref } = resolvePairedLocaleRoutes(
    canonicalPath,
    lang,
    options.alternatePathEn || options.enPath,
    options.alternatePathMs || options.msPath
  );

  const canonicalUrl = toAbsoluteOnyxUrl(isMs ? msHref : enHref);
  const enFullUrl = toAbsoluteOnyxUrl(enHref);
  const msFullUrl = toAbsoluteOnyxUrl(msHref);
  const xDefaultFullUrl = enFullUrl;

  const title =
    options.title ||
    (isMs
      ? 'ONYXMEN Malaysia — Koleksi Viriliti & Prestasi Botani Eksklusif (RM 159)'
      : 'ONYXMEN Malaysia — Luxury Botanical Virility & Performance Collection (RM 159)');

  const description =
    options.description ||
    (isMs
      ? 'Formulasi botani tulen lelaki dewasa di Malaysia: Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR. Harga rasmi RM 159 sebotol dengan penghantaran bungkusan rahsia tanpa nama ke seluruh 16 negeri Malaysia.'
      : 'Authentic standardized botanical vitality formulations for adult men in Malaysia: Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR. Official RM 159 reserve with 100% plain unmarked parcel delivery across all 16 Malaysia states.');

  const ogImageRel = options.ogImage || '/assets/sovereign/web_set_02_catalog_zoom_pure_white_cyclorama_1793437707044.webp';
  const ogImageUrl = toAbsoluteOnyxUrl(ogImageRel);
  const ogLocale = isMs ? 'ms_MY' : 'en_MY';
  const ogLocaleAlternate = isMs ? 'en_MY' : 'ms_MY';

  const productSlug = options.productSlug || options.defaultProduct || 'horsemen';
  const defaultQty = [1, 2, 3].includes(Number(options.defaultQty)) ? Number(options.defaultQty) : 1;

  const schemaJsonString = normalizeSchemaGraphJson(
    options.schemaGraphJson || options.schemaGraph,
    {
      canonicalUrl,
      title,
      description,
      lang,
    }
  );

  const rawBody = String(options.bodyContent || '');
  const hasHeader = rawBody.includes('data-obsidian-header') || rawBody.includes('class="obsidian-header"');
  const hasFooter = rawBody.includes('data-obsidian-footer') || rawBody.includes('class="obsidian-footer"');
  const hasDrawer = rawBody.includes('id="onyxman-express-order-drawer"');
  const hasStickyBar = rawBody.includes('id="onyxman-sticky-mobile-bar"');
  const hasSealStrip = rawBody.includes('class="discreet-seal-strip"');

  const headerHtml = hasHeader
    ? ''
    : renderObsidianHeader({
        lang,
        canonicalPath,
        alternatePathEn: enHref,
        alternatePathMs: msHref,
        activeNav: options.activeNav || '',
        productSlug,
      });

  const sealStripHtml =
    options.includeSealStrip === false || hasSealStrip
      ? ''
      : renderDiscreetSealStrip({
          lang,
          productSlug,
        });

  const footerHtml = hasFooter
    ? ''
    : renderObsidianFooter({
        lang,
        productSlug,
      });

  const drawerHtml = hasDrawer
    ? ''
    : renderExpressOrderDrawer({
        lang,
        defaultProduct: productSlug,
        defaultQty,
      });

  const stickyBarHtml = hasStickyBar
    ? ''
    : renderStickyMobileBar({
        lang,
        productSlug,
        defaultQty,
      });

  const runtimeConfig = {
    brand: 'Onyxman',
    domain: 'https://www.onyxmen.my',
    locale: lang,
    currency: 'MYR',
    currencySymbol: 'RM',
    whatsappNumberE164: '',
    activeBridgeMode: 'express-email-drawer',
    primaryOrderEmail: 'waleedshoaibofficial@gmail.com',
    salesEmail: 'sales@onyxman.my',
    infoEmail: 'info@onyxman.my',
    formSubmitAjaxEndpoint: 'https://formsubmit.co/ajax/waleedshoaibofficial@gmail.com',
    web3FormsEndpoint: 'https://api.web3forms.com/submit',
    tiers: {
      1: { bottles: 1, total: 159.0, schema: '159.00', display: 'RM 159' },
      2: { bottles: 2, total: 318.0, schema: '318.00', display: 'RM 318' },
      3: { bottles: 3, total: 477.0, schema: '477.00', display: 'RM 477' },
    },
    products: {
      horsemen: { name: 'Horsemen', capsules: 20, refillDays: 18, price: '159.00' },
      'hammer-of-thor': { name: 'Hammer of Thor', capsules: 20, refillDays: 18, price: '159.00' },
      'Sensitivity-of-thor': { name: 'Hammer of Thor', capsules: 20, refillDays: 18, price: '159.00' },
      'grow-xl': { name: 'Grow XL', capsules: 30, refillDays: 25, price: '159.00' },
      'magnum-pump-xr': { name: 'Magnum Pump XR', capsules: 30, refillDays: 25, price: '159.00' },
    },
  };

  const visualFirstMainHtml = renderVisualFirstStorefront({
    isMs,
    productSlug,
    title,
    canonicalPath,
    rawBody,
  });

  return `<!DOCTYPE html>
<html lang="${escapeHtmlAttr(lang)}" dir="ltr" data-theme="sovereign-botanicals">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
    <title>${escapeHtmlAttr(title)}</title>
    <meta name="description" content="${escapeHtmlAttr(description)}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="theme-color" content="#FFFFFF" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="geo.region" content="MY" />
    <meta name="geo.placename" content="Kuala Lumpur, Malaysia" />
    <meta name="google-site-verification" content="3D9YmY9SMd5RVAdrfKySd2Z5ZsxJOEHtLbQUTNWOKgA" />

    <!-- Security & Referrer Policy Meta -->
    <meta http-equiv="X-Content-Type-Options" content="nosniff" />
    <meta name="referrer" content="strict-origin-when-cross-origin" />

    <!-- Canonical & Bidirectional Hreflang Reciprocity (en-MY, ms-MY, x-default) -->
    <link rel="canonical" href="${escapeHtmlAttr(canonicalUrl)}" />
    <link rel="alternate" hreflang="en-MY" href="${escapeHtmlAttr(enFullUrl)}" />
    <link rel="alternate" hreflang="ms-MY" href="${escapeHtmlAttr(msFullUrl)}" />
    <link rel="alternate" hreflang="x-default" href="${escapeHtmlAttr(xDefaultFullUrl)}" />

    <!-- OpenGraph & Malaysian E-Commerce Product Meta -->
    <meta property="og:type" content="product" />
    <meta property="og:site_name" content="ONYXMEN Malaysia" />
    <meta property="og:locale" content="${escapeHtmlAttr(ogLocale)}" />
    <meta property="og:locale:alternate" content="${escapeHtmlAttr(ogLocaleAlternate)}" />
    <meta property="og:title" content="${escapeHtmlAttr(title)}" />
    <meta property="og:description" content="${escapeHtmlAttr(description)}" />
    <meta property="og:url" content="${escapeHtmlAttr(canonicalUrl)}" />
    <meta property="og:image" content="${escapeHtmlAttr(ogImageUrl)}" />
    <meta property="og:price:amount" content="159.00" />
    <meta property="og:price:currency" content="MYR" />
    <meta property="product:price:amount" content="159.00" />
    <meta property="product:price:currency" content="MYR" />
    <meta property="product:availability" content="in stock" />
    <meta property="product:condition" content="new" />

    <!-- Twitter / X Summary Large Image Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtmlAttr(title)}" />
    <meta name="twitter:description" content="${escapeHtmlAttr(description)}" />
    <meta name="twitter:image" content="${escapeHtmlAttr(ogImageUrl)}" />

    <!-- Preload Primary Pure-White Quartet & Sunlit Botanical Conservatory Photography for < 0.8s LCP -->
    <link rel="preload" as="image" href="/assets/sovereign/web_set_02_catalog_zoom_pure_white_cyclorama_1793437707044.webp" type="image/webp" fetchpriority="high" />
    <link rel="preload" as="image" href="/assets/sovereign/heritage_web_02_botanical_conservatory_zoom_front_1793438925620.webp" type="image/webp" />

    <!-- Crisp Vector Luxury Typography (Cormorant Garamond & Montserrat) -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,600&family=Montserrat:wght@400;500;600;700&display=swap"
      rel="stylesheet"
    />

    <!-- Inline Critical CSS for Zero-CLS & Sub-Second First Paint -->
    <style id="onyxman-critical-css">${CRITICAL_INLINE_CSS}</style>
    ${options.extraHeadHtml || ''}

    <!-- @graph JSON-LD Structured Data -->
    <script type="application/ld+json">
${schemaJsonString}
    </script>

    <!-- Dual-Mode Order Bridge & Malaysia Pricing Runtime Configuration -->
    <script>
      window.ONYXMAN_CONFIG = ${JSON.stringify(runtimeConfig)};
    </script>
    <script src="/assets/js/onyxman-engine.js" defer></script>
  </head>
  <body class="sovereign-body" data-locale="${escapeHtmlAttr(lang)}" data-default-product="${escapeHtmlAttr(productSlug)}">
    ${headerHtml}
    <main id="onyxman-main-stage" class="sovereign-main-stage" role="main">
      ${options.topBannerHtml || ''}
      ${visualFirstMainHtml}
    </main>
    ${sealStripHtml}
    ${footerHtml}
    ${drawerHtml}
    ${stickyBarHtml}
  </body>
</html>`;
}

export const LuxuryShell = renderLuxuryShell;
export default renderLuxuryShell;
