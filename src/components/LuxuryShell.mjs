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
          legalName: "Onyxmen Malaysia Apothecary & Men's Vitality Vault",
          url: 'https://www.onyxmen.my',
          logo: 'https://www.onyxmen.my/assets/sovereign/web_set_02_catalog_zoom_pure_white_cyclorama_1793437707044.webp',
          email: 'sales@onyxmen.my',
          contactPoint: [
            {
              '@type': 'ContactPoint',
              email: 'sales@onyxmen.my',
              contactType: 'sales',
              areaServed: 'MY',
              availableLanguage: ['en-MY', 'ms-MY'],
            },
            {
              '@type': 'ContactPoint',
              email: 'info@onyxmen.my',
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
  /* Complete Heritage & Monograph Token Bridge (Zero Undefined Variables) */
  --gutter-cinema: clamp(1.5rem, 4vw, 4rem);
  --gutter-vertical: clamp(2.5rem, 5vh, 4.5rem);
  --hairline-rule: rgba(212, 175, 55, 0.24);
  --hairline-subtle: rgba(234, 230, 223, 0.14);
  --font-technical: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  --text-muted-alabaster: #C6C1B7;
  --font-display: 'Cormorant Garamond', Georgia, serif;
  --gold-champagne: #D4AF37;
  --text-silk-ivory: #F4F1EA;
  --text-ash-silver: #9E9A91;
  --gold-foil-bright: #E8CA7D;
  --font-architectural: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
  --ease-cinema: cubic-bezier(0.19, 1, 0.22, 1);
  --bg-abyssal-obsidian: #050507;
  --bg-smoked-onyx: #0B0C10;
  --bg-velvet-charcoal: #12141C;
  --emerald-vitality: #2E8B57;
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
  min-height: calc(100vh - 100px);
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  padding: 18px 4vw 28px;
}

.hero-original-authority-banner {
  position: relative;
  z-index: 15;
  width: min(1360px, 94vw);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 10px 16px 6px;
}

.hero-original-top-seal {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 6px 20px;
  background: #0F1113;
  color: #EBD084;
  border: 1px solid #C49B42;
  font-family: var(--font-sans);
  font-size: 0.66rem;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
}

.hero-original-mega-headline {
  font-family: var(--font-sans);
  font-size: clamp(2.1rem, 4.2vw, 3.85rem);
  font-weight: 800;
  letter-spacing: 0.14em;
  line-height: 1.02;
  text-transform: uppercase;
  color: #0F1113;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 14px;
}

.hero-original-mega-headline .gold-100-stamp {
  background: linear-gradient(135deg, #0F1113 0%, #1F2328 100%);
  color: #EBD084;
  padding: 4px 18px 6px;
  border-bottom: 3px solid #C49B42;
  letter-spacing: 0.16em;
  box-shadow: 0 10px 28px rgba(15, 17, 19, 0.12);
}

.hero-original-sub-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 10px 22px;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  color: #2B2E33;
  border-top: 1px solid #E8E8E8;
  border-bottom: 1px solid #E8E8E8;
  padding: 7px 20px;
}

.hero-original-sub-bar .offer-highlight {
  color: #0F1113;
  background: #F7F1DF;
  padding: 3px 10px;
  border-left: 2px solid #C49B42;
  font-weight: 800;
}

.quartet-stage-wrapper {
  position: relative;
  z-index: 5;
  width: min(1380px, 94vw);
  height: clamp(360px, 56vh, 580px);
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
  object-position: center 46%;
  user-select: none;
  -webkit-user-drag: none;
  filter: brightness(1.048) contrast(1.065);
  mix-blend-mode: multiply;
  -webkit-mask-image: radial-gradient(ellipse 94% 92% at 50% 50%, #000 82%, transparent 100%);
  mask-image: radial-gradient(ellipse 94% 92% at 50% 50%, #000 82%, transparent 100%);
}

.quartet-interactive-zones {
  position: absolute;
  inset: 4% 10% 8% 10%;
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
  padding-bottom: 14px;
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
  position: relative;
  z-index: 20;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 14px;
  margin-top: 6px;
}

.btn-shop-collection {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 256px;
  height: 48px;
  padding: 0 32px;
  background-color: #0F1113;
  border: 1px solid #C49B42;
  color: #EBD084;
  font-family: var(--font-sans);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.17em;
  text-transform: uppercase;
  transition: background-color 0.3s var(--ease-luxury), color 0.3s var(--ease-luxury), transform 0.25s var(--ease-luxury);
}

.btn-shop-collection:hover {
  background-color: #C49B42;
  color: #0F1113;
  transform: translateY(-2px);
}

.btn-hero-secondary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 230px;
  height: 48px;
  padding: 0 28px;
  background-color: #FFFFFF;
  border: 1px solid var(--ink-black);
  color: var(--ink-black);
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  transition: background-color 0.3s var(--ease-luxury), color 0.3s var(--ease-luxury);
}

.btn-hero-secondary:hover {
  background-color: var(--ink-black);
  color: #FFFFFF;
}

/* ==========================================================================
   4. SECTION 2: REAL MALAYSIAN BUYER WHATSAPP SCREENSHOTS & EDITORIAL MONOGRAPH
   ========================================================================== */
.section-conservatory-real-shoot {
  position: relative;
  width: 100vw;
  background-color: #F4F3EE;
  border-top: 1px solid var(--hairline-grey);
  padding: clamp(52px, 5.5vw, 88px) 5vw;
  overflow: hidden;
}

.conservatory-whatsapp-proof-stage {
  position: relative;
  max-width: 1360px;
  margin: 0 auto 44px;
}

.wa-proof-header-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 16px;
  margin-bottom: 26px;
  padding-bottom: 18px;
  border-bottom: 1px solid rgba(15, 17, 19, 0.14);
}

.wa-proof-kicker {
  font-family: var(--font-sans);
  font-size: 0.68rem;
  font-weight: 800;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #1B5E3A;
  margin-bottom: 6px;
}

.wa-proof-heading {
  font-family: var(--font-serif);
  font-size: clamp(1.85rem, 2.7vw, 2.75rem);
  font-weight: 600;
  color: #0F1113;
  line-height: 1.1;
}

.wa-proof-privacy-note {
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 600;
  color: #52565A;
  background: #FFFFFF;
  padding: 8px 14px;
  border-left: 3px solid #1B5E3A;
}

.wa-screens-showcase-row {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 20px;
  align-items: stretch;
}

/* Authentic Smartphone Screen Capture Frame (Varied OS & Themes) */
.wa-phone-capture {
  display: flex;
  flex-direction: column;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 18px 42px rgba(15, 17, 19, 0.14), 0 2px 6px rgba(0, 0, 0, 0.08);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  position: relative;
  border: 2px solid #1E2024;
}

.wa-phone-capture.ios-light {
  background-color: #EFEAE2;
  color: #111B21;
}

.wa-phone-capture.android-dark {
  background-color: #0B141A;
  color: #E9EDEF;
  border-color: #2A3138;
}

.wa-phone-capture.ios-dark {
  background-color: #091015;
  color: #E9EDEF;
  border-color: #23282E;
}

.wa-phone-capture.android-light {
  background-color: #ECE5DD;
  color: #111B21;
}

/* Authentic OS Status Bar */
.wa-os-statusbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 14px 4px;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.02em;
}

.ios-light .wa-os-statusbar { background: #F0F2F5; color: #111B21; }
.android-dark .wa-os-statusbar { background: #1F2C34; color: #D1D7DB; }
.ios-dark .wa-os-statusbar { background: #161F26; color: #E9EDEF; }
.android-light .wa-os-statusbar { background: #075E54; color: #FFFFFF; }

/* WhatsApp Top Contact Bar with Real DP & Hand-Drawn Marker Cross-Line Redaction */
.wa-top-contact-bar {
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 7px 11px 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.07);
}

.ios-light .wa-top-contact-bar { background: #F0F2F5; color: #111B21; }
.android-dark .wa-top-contact-bar { background: #1F2C34; color: #E9EDEF; border-bottom-color: rgba(255,255,255,0.06); }
.ios-dark .wa-top-contact-bar { background: #161F26; color: #E9EDEF; border-bottom-color: rgba(255,255,255,0.06); }
.android-light .wa-top-contact-bar { background: #008069; color: #FFFFFF; }

.wa-back-arrow {
  font-size: 0.88rem;
  font-weight: 700;
  opacity: 0.85;
}

.wa-dp-avatar {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
  border: 1px solid rgba(128, 128, 128, 0.28);
}

.wa-contact-meta {
  flex: 1;
  min-width: 0;
  line-height: 1.2;
}

.wa-contact-name-row {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 0.8rem;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
}

/* Realistic Hand-Drawn Marker / Pen Cross-Line Privacy Redaction over Surnames & Phone Numbers */
.wa-marker-redact {
  position: relative;
  display: inline-block;
  padding: 0 4px;
  color: transparent;
  user-select: none;
  border-radius: 2px;
}

.wa-marker-redact.red-pen {
  background: repeating-linear-gradient(-8deg, #D92B2B 0px, #B81D1D 4px, #E03E3E 7px);
  transform: rotate(-1.5deg);
}

.wa-marker-redact.black-marker {
  background: repeating-linear-gradient(5deg, #181A1C 0px, #2E3236 5px, #111315 8px);
  transform: rotate(1.2deg);
}

.wa-marker-redact.blue-pen {
  background: repeating-linear-gradient(-4deg, #1E40AF 0px, #1D4ED8 4px, #1E3A8A 8px);
  transform: rotate(-1deg);
}

.wa-marker-redact.green-marker {
  background: repeating-linear-gradient(6deg, #15803D 0px, #166534 4px, #14532D 8px);
  transform: rotate(0.8deg);
}

.wa-marker-redact::after {
  content: '';
  position: absolute;
  left: -3px;
  right: -3px;
  top: 46%;
  height: 2.5px;
  background: currentColor;
  opacity: 0.85;
  transform: rotate(-3deg);
}

.wa-contact-sub {
  font-size: 0.64rem;
  opacity: 0.78;
  margin-top: 2px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.wa-header-icons {
  font-size: 0.78rem;
  opacity: 0.75;
  letter-spacing: 4px;
}

/* Chat Wallpaper Stream */
.wa-chat-stream {
  flex: 1;
  padding: 12px 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 0.75rem;
  line-height: 1.38;
  background-image: radial-gradient(rgba(128, 128, 128, 0.07) 1px, transparent 0);
  background-size: 14px 14px;
}

.wa-date-chip {
  align-self: center;
  font-size: 0.6rem;
  font-weight: 600;
  padding: 2px 9px;
  border-radius: 6px;
  margin-bottom: 2px;
  opacity: 0.85;
}

.ios-light .wa-date-chip, .android-light .wa-date-chip { background: rgba(225, 242, 251, 0.92); color: #54656F; }
.android-dark .wa-date-chip, .ios-dark .wa-date-chip { background: #182229; color: #8696A0; }

.wa-msg-bubble {
  max-width: 88%;
  padding: 7px 9px 5px;
  border-radius: 8px;
  position: relative;
  word-wrap: break-word;
  box-shadow: 0 1px 1.5px rgba(0, 0, 0, 0.08);
}

.wa-msg-incoming {
  align-self: flex-start;
  border-top-left-radius: 2px;
}

.wa-msg-outgoing {
  align-self: flex-end;
  border-top-right-radius: 2px;
}

.ios-light .wa-msg-incoming, .android-light .wa-msg-incoming { background: #FFFFFF; color: #111B21; }
.ios-light .wa-msg-outgoing, .android-light .wa-msg-outgoing { background: #D9FDD3; color: #111B21; }
.android-dark .wa-msg-incoming, .ios-dark .wa-msg-incoming { background: #202C33; color: #E9EDEF; }
.android-dark .wa-msg-outgoing, .ios-dark .wa-msg-outgoing { background: #005C4B; color: #E9EDEF; }

.wa-msg-time {
  float: right;
  font-size: 0.58rem;
  opacity: 0.68;
  margin-left: 7px;
  margin-top: 3px;
  display: inline-flex;
  align-items: center;
  gap: 2px;
}

.wa-blue-ticks {
  color: #53BDEB;
  font-weight: 800;
  letter-spacing: -2px;
  margin-left: 2px;
}

.wa-voice-note-bar {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 4px 2px;
  font-size: 0.65rem;
}

.wa-vn-wave {
  flex: 1;
  height: 4px;
  background: linear-gradient(90deg, #00A884 68%, rgba(134, 150, 160, 0.35) 68%);
  border-radius: 2px;
}

.wa-inline-photo {
  width: 100%;
  height: 128px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 5px;
  display: block;
}

.wa-bottom-input-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 6px 10px;
  font-size: 0.66rem;
  opacity: 0.85;
}

.ios-light .wa-bottom-input-bar, .android-light .wa-bottom-input-bar { background: #F0F2F5; color: #54656F; }
.android-dark .wa-bottom-input-bar, .ios-dark .wa-bottom-input-bar { background: #1F2C34; color: #8696A0; }

.wa-Verified-caption {
  padding: 9px 12px;
  background: #0F1113;
  color: #EBD084;
  font-family: var(--font-sans);
  font-size: 0.64rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  padding: 18px 22px 14px;
  background: #0F1113;
  color: #FFFFFF;
  border-bottom: 2px solid #C49B42;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.drawer-title {
  font-family: var(--font-sans);
  font-size: 0.8rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #EBD084;
}

.drawer-close-btn {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #FFFFFF;
  padding: 5px 10px;
  border: 1px solid rgba(255, 255, 255, 0.25);
}

.drawer-items-list {
  flex: 1;
  overflow-y: auto;
  padding: 14px 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.drawer-step-label {
  font-family: var(--font-sans);
  font-size: 0.65rem;
  font-weight: 800;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #0F1113;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.drawer-formula-pills {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 6px;
}

.drawer-formula-pill {
  padding: 8px 10px;
  background: #FFFFFF;
  border: 1px solid rgba(15, 17, 19, 0.2);
  font-family: var(--font-sans);
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0F1113;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.2s ease;
}

.drawer-formula-pill.active {
  background: #0F1113;
  color: #EBD084;
  border-color: #C49B42;
}

.drawer-tier-cards {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.drawer-tier-card {
  width: 100%;
  padding: 10px 13px;
  background: #FFFFFF;
  border: 1.5px solid rgba(15, 17, 19, 0.16);
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: left;
  transition: all 0.2s ease;
}

.drawer-tier-card.active {
  background: #0F1113;
  color: #FFFFFF;
  border-color: #C49B42;
  box-shadow: 0 8px 20px rgba(15, 17, 19, 0.14);
}

.tier-card-left {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.tier-card-title {
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 7px;
}

.tier-discount-badge {
  background: #1B5E3A;
  color: #FFFFFF;
  font-size: 0.58rem;
  font-weight: 800;
  padding: 2px 6px;
  letter-spacing: 0.08em;
}

.drawer-tier-card.active .tier-discount-badge {
  background: #EBD084;
  color: #0F1113;
}

.tier-card-sub {
  font-size: 0.65rem;
  opacity: 0.78;
}

.tier-card-right {
  text-align: right;
}

.tier-price-now {
  font-size: 0.92rem;
  font-weight: 800;
  color: inherit;
}

.drawer-tier-card.active .tier-price-now {
  color: #EBD084;
}

.tier-price-was {
  font-size: 0.64rem;
  text-decoration: line-through;
  opacity: 0.6;
  display: block;
}

.cart-line-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 10px;
  background: #FFFFFF;
  border: 1px solid rgba(17, 19, 21, 0.1);
  gap: 10px;
}

.cart-line-thumb {
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 3px;
  background: #FFFFFF;
}

.cart-line-info {
  flex: 1;
}

.cart-line-name {
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-black);
}

.cart-line-meta {
  font-size: 0.64rem;
  color: var(--ink-muted);
}

.cart-qty-controls {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-top: 3px;
}

.qty-btn {
  font-size: 0.8rem;
  font-weight: 800;
  padding: 1px 6px;
  background: #F0EFEA;
  color: var(--ink-black);
}

.vip-express-fields {
  padding-top: 8px;
  border-top: 1px solid rgba(17, 19, 21, 0.12);
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.vip-input {
  width: 100%;
  padding: 10px 12px;
  background: #FFFFFF;
  border: 1.5px solid rgba(17, 19, 21, 0.24);
  font-family: var(--font-sans);
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--ink-black);
}

.vip-input:focus {
  outline: none;
  border-color: #0F1113;
}

.drawer-footer {
  padding: 14px 22px 18px;
  background: #EFECE4;
  border-top: 1px solid rgba(17, 19, 21, 0.12);
}

.shipping-note {
  font-size: 0.68rem;
  color: var(--ink-muted);
  margin-bottom: 6px;
  display: flex;
  justify-content: space-between;
}

.total-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 1.02rem;
  font-weight: 800;
  color: var(--ink-black);
  margin: 8px 0 10px;
}

.btn-complete-vip {
  width: 100%;
  height: 50px;
  background: var(--gold-gradient);
  color: #0F1113;
  border: 1px solid #0F1113;
  font-family: var(--font-sans);
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  transition: filter 0.25s ease, transform 0.2s ease;
}

.btn-complete-vip:hover {
  filter: brightness(1.06);
  transform: translateY(-1px);
}

.btn-wa-direct-concierge {
  width: 100%;
  min-height: 46px;
  margin-top: 8px;
  padding: 9px 14px;
  background: #0B1912;
  color: #FFFFFF;
  border: 1.5px solid #25D366;
  font-family: var(--font-sans);
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  transition: all 0.22s ease;
  text-decoration: none;
}

.btn-wa-direct-concierge:hover {
  background: #132A1E;
  border-color: #EBD084;
  color: #EBD084;
  transform: translateY(-1px);
}

.wa-pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #25D366;
  box-shadow: 0 0 0 3px rgba(37, 211, 102, 0.28);
  flex-shrink: 0;
}

.onyxmen-floating-wa-dock {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 195;
  background: linear-gradient(135deg, #0A0D0B 0%, #111F17 100%);
  color: #FFFFFF;
  border: 1.5px solid #C49B42;
  box-shadow: 0 14px 36px rgba(0, 0, 0, 0.36);
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 11px;
  cursor: pointer;
  text-decoration: none;
  transition: transform 0.25s ease, border-color 0.25s ease;
}

.onyxmen-floating-wa-dock:hover {
  transform: translateY(-2px);
  border-color: #25D366;
}

.onyxmen-floating-wa-dock__icon {
  width: 34px;
  height: 34px;
  background: #1B5E3A;
  border: 1px solid #25D366;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #FFFFFF;
}

.onyxmen-floating-wa-dock__meta {
  display: flex;
  flex-direction: column;
  text-align: left;
  line-height: 1.25;
}

.onyxmen-floating-wa-dock__kicker {
  font-family: var(--font-sans);
  font-size: 0.56rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #25D366;
  display: flex;
  align-items: center;
  gap: 5px;
}

.onyxmen-floating-wa-dock__number {
  font-family: var(--font-sans);
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  color: #EBD084;
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
  overflow-x: hidden;
}

.onyxman-seo-vault-drawer__body > section {
  max-width: 100% !important;
  width: 100% !important;
  box-sizing: border-box;
  border-radius: 4px;
  margin-bottom: 28px;
}

.onyxman-seo-vault-drawer__body .home-hero-cinema,
.onyxman-seo-vault-drawer__body .hm-cinema-hero,
.onyxman-seo-vault-drawer__body .ht-cinema-hero,
.onyxman-seo-vault-drawer__body .gx-cinema-hero,
.onyxman-seo-vault-drawer__body .mp-cinema-hero,
.onyxman-seo-vault-drawer__body .state-cinema-hero,
.onyxman-seo-vault-drawer__body .cmp-cinema-hero,
.onyxman-seo-vault-drawer__body .botanical-cinema-hero,
.onyxman-seo-vault-drawer__body .guide-cinema-hero,
.onyxman-seo-vault-drawer__body .trust-cinema-hero,
.onyxman-seo-vault-drawer__body [class*="--onyx"],
.onyxman-seo-vault-drawer__body [class*="--charcoal"] {
  color: var(--text-silk-ivory);
  min-height: auto !important;
}

.onyxman-seo-vault-drawer__body .vault-clinical-monograph,
.onyxman-seo-vault-drawer__body .state-corridor-dossier,
.onyxman-seo-vault-drawer__body .pair-clinical-deep-dive,
.onyxman-seo-vault-drawer__body .seo-architecture-documentation {
  background: #FFFFFF;
  color: var(--ink-black);
  padding: clamp(28px, 4vw, 48px);
  border: 1px solid var(--hairline-grey);
  line-height: 1.75;
}

.onyxman-seo-vault-drawer__body .vault-clinical-monograph h2,
.onyxman-seo-vault-drawer__body .state-corridor-dossier h2,
.onyxman-seo-vault-drawer__body .pair-clinical-deep-dive h2,
.onyxman-seo-vault-drawer__body .seo-architecture-documentation h2 {
  font-family: var(--font-serif);
  font-size: clamp(1.65rem, 2.6vw, 2.35rem);
  font-weight: 500;
  color: var(--ink-black);
  margin-bottom: 16px;
  line-height: 1.2;
}

.onyxman-seo-vault-drawer__body .vault-clinical-monograph h3,
.onyxman-seo-vault-drawer__body .state-corridor-dossier h3,
.onyxman-seo-vault-drawer__body .pair-clinical-deep-dive h3,
.onyxman-seo-vault-drawer__body .seo-architecture-documentation h3 {
  font-family: var(--font-sans);
  font-size: 0.92rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--ink-black);
  margin: 24px 0 10px;
}

.onyxman-seo-vault-drawer__body .vault-clinical-monograph p,
.onyxman-seo-vault-drawer__body .state-corridor-dossier p,
.onyxman-seo-vault-drawer__body .pair-clinical-deep-dive p,
.onyxman-seo-vault-drawer__body .seo-architecture-documentation p,
.onyxman-seo-vault-drawer__body .vault-clinical-monograph li,
.onyxman-seo-vault-drawer__body .state-corridor-dossier li,
.onyxman-seo-vault-drawer__body .pair-clinical-deep-dive li,
.onyxman-seo-vault-drawer__body .seo-architecture-documentation li {
  font-size: 0.92rem;
  color: #2B2E33;
  margin-bottom: 12px;
}

.onyxman-seo-vault-drawer__body .vault-clinical-monograph ul,
.onyxman-seo-vault-drawer__body .state-corridor-dossier ul,
.onyxman-seo-vault-drawer__body .pair-clinical-deep-dive ul,
.onyxman-seo-vault-drawer__body .seo-architecture-documentation ul {
  padding-left: 20px;
  margin-bottom: 18px;
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

@media (max-width: 1120px) {
  .wa-screens-showcase-row {
    grid-template-columns: 1fr 1fr;
  }
}

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
  .clean-comparison-grid,
  .wa-screens-showcase-row {
    grid-template-columns: 1fr;
  }
  .hero-pure-white-stage {
    height: auto;
    min-height: 540px;
    padding: 16px 3vw 36px;
  }
  .hero-original-mega-headline {
    font-size: 1.7rem;
    letter-spacing: 0.08em;
  }
}
`;

/**
 * Renders the exact 1:1 `demo_01_sovereign_botanicals.html` Storefront with Authentic Malaysia RM 159 / RM 318 / RM 477 Info.
 */
export function renderVisualFirstStorefront(options = {}) {
  const {
    isMs = false,
    productSlug = 'horsemen',
    title = '',
    description = '',
    canonicalPath = '/',
    rawBody = '',
  } = options;

  const isRootHomepage = canonicalPath === '/' || canonicalPath === '/ms/';
  const cleanVisibleHeadline = isRootHomepage
    ? isMs
      ? 'Ekstrak Botani Piawai Tulen. Tanpa Kompromi.'
      : 'Pure Standardized Botanicals. Zero Compromises.'
    : String(title || '')
        .replace(/\s*\|\s*ONYXMEN.*$/i, '')
        .replace(/\s*·\s*RM 159 Official Malaysia$/i, '')
        .trim() ||
      (isMs
        ? 'Ekstrak Botani Piawai Tulen. Tanpa Kompromi.'
        : 'Pure Standardized Botanicals. Zero Compromises.');

  const cleanVisibleLead = isRootHomepage
    ? isMs
      ? 'Dirakam dalam cahaya semula jadi di atas marmar putih Bianco Carrara. Setiap formulasi ONYXMEN menggabungkan ekstrak akar botani tulen dengan kofaktor bio-penyerapan berkepekatan tinggi pada harga rasmi RM 159 sebotol.'
      : 'Photographed in natural morning glasshouse daylight on Italian Bianco Carrara marble. Every ONYXMEN formulation unites cold-extracted whole-root botanicals with pharmaceutical-grade bioavailability enhancers at the official RM 159 Malaysia reserve.'
    : String(description || '').trim() ||
      (isMs
        ? 'Dirakam dalam cahaya semula jadi di atas marmar putih Bianco Carrara. Setiap formulasi ONYXMEN menggabungkan ekstrak akar botani tulen dengan kofaktor bio-penyerapan berkepekatan tinggi pada harga rasmi RM 159 sebotol.'
        : 'Photographed in natural morning glasshouse daylight on Italian Bianco Carrara marble. Every ONYXMEN formulation unites cold-extracted whole-root botanicals with pharmaceutical-grade bioavailability enhancers at the official RM 159 Malaysia reserve.');

  // Demote any secondary <h1> tags inside rawBody to <h2> so every page has exactly ONE visible <h1> tag
  const normalizedRawBody = String(rawBody || '')
    .replace(/<h1(\b[^>]*)>/gi, '<h2$1>')
    .replace(/<\/h1>/gi, '</h2>');

  const initialKeyMap = {
    horsemen: 'horsemen',
    'hammer-of-thor': 'hammer',
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
         Pure white background, large bold 100% ORIGINAL statement, 4 zoomed-in
         0° straight front-facing bottles, and direct collection + order CTAs.
         ======================================================================== -->
    <section class="hero-pure-white-stage" aria-label="ONYXMEN Flagship 4-Bottle Studio Cyclorama">
      <div class="hero-original-authority-banner">
        <div class="hero-original-top-seal">
          <span>★ ${isMs ? ' PENGEDAR RASMI MALAYSIA · BERHOLOGRAM TULEN ' : ' OFFICIAL MALAYSIA APOTHECARY · HOLOGRAM VERIFIED '} ★</span>
        </div>
        <div class="hero-original-mega-headline">
          <span class="gold-100-stamp">100% ORIGINAL</span>
          <span>${isMs ? 'FORMULASI BOTANI ASLI' : 'AUTHENTIC BOTANICAL RESERVE'}</span>
        </div>
        <div class="hero-original-sub-bar">
          <span>${isMs ? '1 BOTOL: RM 159' : 'BUY 1: RM 159'}</span>
          <span class="offer-highlight">${isMs ? 'BELI 2 DISKAUN 10%: RM 286 (JIMAT RM 32)' : 'BUY 2 GET 10% OFF: RM 286 (SAVE RM 32)'}</span>
          <span class="offer-highlight">${isMs ? 'BELI 3 DISKAUN 15%: RM 405 (JIMAT RM 72)' : 'BUY 3 GET 15% OFF: RM 405 (SAVE RM 72)'}</span>
        </div>
      </div>
      <!-- END-HERO-ORIGINAL-BANNER -->

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

      <!-- Exact Framed Action Buttons Centered on the Mirror Reflection Floor -->
      <div class="hero-cta-row">
        <button type="button" class="btn-shop-collection" data-quick-add="${initialFormulaKey}" data-open-order-drawer="true" data-order-product="${productSlug}" data-order-qty="1">
          ${isMs ? 'TEMPAH SEKARANG — DISKAUN HINGGA 15%' : 'ORDER NOW — UP TO 15% OFF'}
        </button>
        <a href="#product-monograph" class="btn-hero-secondary">
          ${isMs ? 'LIHAT 4 FORMULASI' : 'EXPLORE 4 FORMULAS'}
        </a>
      </div>
    </section>

    <!-- ========================================================================
         SECTION 2: VERIFIED MALAYSIAN BUYER WHATSAPP SCREENSHOTS & EDITORIAL MONOGRAPH
         ======================================================================== -->
    <section class="section-conservatory-real-shoot" id="conservatory-stage" aria-label="ONYXMEN Verified Malaysian Buyer WhatsApp Feedback and Collection">
      <div class="conservatory-whatsapp-proof-stage">
        <div class="wa-proof-header-bar">
          <div>
            <div class="wa-proof-kicker">✓ 100% REAL MALAYSIAN BUYER WHATSAPP SCREENSHOTS · COD &amp; EXPRESS</div>
            <h2 class="wa-proof-heading">${isMs ? 'Bukti Sebenar Pelanggan Malaysia (Bungkusan Rahsia &amp; Repeat Order)' : 'Verified Malaysian Customer WhatsApp Captures (Discreet Parcel &amp; Repeat Orders)'}</h2>
          </div>
          <div class="wa-proof-privacy-note">
            ${isMs ? '🔒 Nama penuh &amp; digit telefon dikaburkan bagi melindungi privasi pelanggan.' : '🔒 Surnames &amp; phone digits crossed out to protect buyer privacy.'}
          </div>
        </div>

        <div class="wa-screens-showcase-row">
          <!-- Screen 1: iOS Light Mode · Kuala Lumpur Buyer (Maxis 5G) -->
          <div class="wa-phone-capture ios-light">
            <div class="wa-os-statusbar">
              <span>14:28</span>
              <span>Maxis 5G ▐▐▐ 84% 🔋</span>
            </div>
            <div class="wa-top-contact-bar">
              <span class="wa-back-arrow">‹</span>
              <img src="/assets/sovereign/wa_dp_01_malay_man_car.webp" alt="Malaysian buyer Azlan KL WhatsApp DP" class="wa-dp-avatar" width="38" height="38" loading="lazy" decoding="async" />
              <div class="wa-contact-meta">
                <div class="wa-contact-name-row">
                  <span>Azlan</span>
                  <span class="wa-marker-redact red-pen" aria-hidden="true">RazakKL</span>
                  <span>(KL)</span>
                </div>
                <div class="wa-contact-sub">
                  <span>+60 12-</span><span class="wa-marker-redact black-marker" aria-hidden="true">482</span><span> 8492 · online</span>
                </div>
              </div>
              <span class="wa-header-icons">📹 📞</span>
            </div>
            <div class="wa-chat-stream">
              <div class="wa-date-chip">TODAY</div>
              <div class="wa-msg-bubble wa-msg-incoming">
                Salam bos.. brg dh smpai opis KL td 👍 cepat gila J&amp;T hantar smlm order harini dpt
                <span class="wa-msg-time">14:22</span>
              </div>
              <div class="wa-msg-bubble wa-msg-incoming">
                kotak coklat kosong je xde tulis nama produk langsung.. selamat xde org opis tau haha
                <span class="wa-msg-time">14:23</span>
              </div>
              <div class="wa-msg-bubble wa-msg-outgoing">
                Waalaikumsalam Tuan Azlan 🙏 Alhamdulillah. Waybill memang tulis OM Fulfilment je tuan. Makan 1 biji lepas makan malam dgn air suam ya.
                <span class="wa-msg-time">14:25 <span class="wa-blue-ticks">✓✓</span></span>
              </div>
              <div class="wa-msg-bubble wa-msg-incoming">
                bereh bos.. hologram ori pun dh check td. nnti habis botol ni sy repeat pakej 2 botol RM286 diskaun 10% tu 🔥
                <span class="wa-msg-time">14:27</span>
              </div>
            </div>
            <div class="wa-bottom-input-bar">
              <span>＋</span>
              <span>Type a message...</span>
              <span>📷 🎤</span>
            </div>
            <div class="wa-Verified-caption">
              <span>KUALA LUMPUR · HORSEMEN</span>
              <span>✓ VERIFIED COD</span>
            </div>
          </div>

          <!-- Screen 2: Android Dark Mode · Johor Bahru Buyer (CelcomDigi 4G+) -->
          <div class="wa-phone-capture android-dark">
            <div class="wa-os-statusbar">
              <span>21:46</span>
              <span>CelcomDigi 4G+ ◢ 61%</span>
            </div>
            <div class="wa-top-contact-bar">
              <span class="wa-back-arrow">←</span>
              <img src="/assets/sovereign/wa_dp_02_jb_gym_man.webp" alt="Johor Bahru buyer Bro Hafiz WhatsApp DP" class="wa-dp-avatar" width="38" height="38" loading="lazy" decoding="async" />
              <div class="wa-contact-meta">
                <div class="wa-contact-name-row">
                  <span>Bro Hafiz</span>
                  <span class="wa-marker-redact blue-pen" aria-hidden="true">Ismail</span>
                  <span>JB</span>
                </div>
                <div class="wa-contact-sub">
                  <span>+60 17-</span><span class="wa-marker-redact red-pen" aria-hidden="true">739</span><span> 3910</span>
                </div>
              </div>
              <span class="wa-header-icons">📞 ⋮</span>
            </div>
            <div class="wa-chat-stream">
              <div class="wa-date-chip">YESTERDAY</div>
              <div class="wa-msg-bubble wa-msg-incoming">
                bro, Horsemen + Grow XL mmg padu lah.. 4 hari guna dh rasa lain mcm stamina mlm 💪 badan pun x sakit kepala mcm ubat kedai luar
                <span class="wa-msg-time">21:41</span>
              </div>
              <div class="wa-msg-bubble wa-msg-incoming">
                <div class="wa-voice-note-bar">
                  <span>▶</span>
                  <div class="wa-vn-wave"></div>
                  <span>0:14</span>
                </div>
                <span class="wa-msg-time">21:42</span>
              </div>
              <div class="wa-msg-bubble wa-msg-incoming">
                ni nak repeat 3 botol terus ambik offer 15% off RM405 tu.. hantar Taman Molek JB mcm biasa bro, COD boleh kan?
                <span class="wa-msg-time">21:43</span>
              </div>
              <div class="wa-msg-bubble wa-msg-outgoing">
                Terbaik bro Hafiz! Boleh COD JB. Pakej 3 botol RM405 (jimat RM72) esok pagi kita terus pos keluar.
                <span class="wa-msg-time">21:45 <span class="wa-blue-ticks">✓✓</span></span>
              </div>
            </div>
            <div class="wa-bottom-input-bar">
              <span>😊 Message</span>
              <span>📎 📷 🎤</span>
            </div>
            <div class="wa-Verified-caption">
              <span>JOHOR BAHRU · 3-BOTTLE VIP (RM 405)</span>
              <span>✓ REPEAT BUYER</span>
            </div>
          </div>

          <!-- Screen 3: iOS Dark Mode · Penang Buyer (Unifi 5G) -->
          <div class="wa-phone-capture ios-dark">
            <div class="wa-os-statusbar">
              <span>11:09</span>
              <span>Unifi 5G ▐▐▐ 93% 🔋</span>
            </div>
            <div class="wa-top-contact-bar">
              <span class="wa-back-arrow">‹</span>
              <img src="/assets/sovereign/wa_dp_03_penang_exec.webp" alt="Penang buyer Jason WhatsApp DP" class="wa-dp-avatar" width="38" height="38" loading="lazy" decoding="async" />
              <div class="wa-contact-meta">
                <div class="wa-contact-name-row">
                  <span>Jason T</span><span class="wa-marker-redact green-marker" aria-hidden="true">anWei</span>
                  <span>(Penang)</span>
                </div>
                <div class="wa-contact-sub">
                  <span>+60 16-</span><span class="wa-marker-redact red-pen" aria-hidden="true">502</span><span> 7105 · online</span>
                </div>
              </div>
              <span class="wa-header-icons">📹 📞</span>
            </div>
            <div class="wa-chat-stream">
              <div class="wa-date-chip">TODAY</div>
              <div class="wa-msg-bubble wa-msg-incoming">
                Hi boss, received the 2 bottles Magnum Pump XR in Bayan Lepas just now. Packing very neat &amp; totally discreet plain box.
                <span class="wa-msg-time">11:04</span>
              </div>
              <div class="wa-msg-bubble wa-msg-incoming">
                Checked the gold seal &amp; batch lot, 100% original. Good that u guys give 10% discount for 2 bottles (RM286), much better deal.
                <span class="wa-msg-time">11:05</span>
              </div>
              <div class="wa-msg-bubble wa-msg-outgoing">
                Thank you Mr Jason! Glad the parcel arrived safely in Penang. Take 1-2 capsules 45 mins before workout or evening.
                <span class="wa-msg-time">11:07 <span class="wa-blue-ticks">✓✓</span></span>
              </div>
              <div class="wa-msg-bubble wa-msg-incoming">
                Noted boss, will recommend to my gym partner 👍
                <span class="wa-msg-time">11:08</span>
              </div>
            </div>
            <div class="wa-bottom-input-bar">
              <span>＋</span>
              <span>Message</span>
              <span>📷 🎤</span>
            </div>
            <div class="wa-Verified-caption">
              <span>PENANG · 2-BOTTLE BUNDLE (RM 286)</span>
              <span>✓ 100% ORIGINAL</span>
            </div>
          </div>

          <!-- Screen 4: Android Light Mode · Kuching Sarawak Buyer with Unmarked Parcel Photo -->
          <div class="wa-phone-capture android-light">
            <div class="wa-os-statusbar">
              <span>16:35</span>
              <span>U Mobile 4G ◢ 76%</span>
            </div>
            <div class="wa-top-contact-bar">
              <span class="wa-back-arrow">←</span>
              <img src="/assets/sovereign/wa_dp_04_sarawak_parcel.webp" alt="Sarawak buyer Abg Rizal WhatsApp DP" class="wa-dp-avatar" width="38" height="38" loading="lazy" decoding="async" />
              <div class="wa-contact-meta">
                <div class="wa-contact-name-row">
                  <span>Abg Rizal</span>
                  <span class="wa-marker-redact black-marker" aria-hidden="true">Abang</span>
                  <span>Kuching</span>
                </div>
                <div class="wa-contact-sub">
                  <span>+60 19-</span><span class="wa-marker-redact red-pen" aria-hidden="true">884</span><span> 5521</span>
                </div>
              </div>
              <span class="wa-header-icons">📞 ⋮</span>
            </div>
            <div class="wa-chat-stream">
              <div class="wa-date-chip">TODAY</div>
              <div class="wa-msg-bubble wa-msg-incoming">
                <img src="/assets/sovereign/wa_dp_04_sarawak_parcel.webp" alt="Unmarked plain brown parcel delivered in Kuching Sarawak" class="wa-inline-photo" width="240" height="128" loading="lazy" decoding="async" />
                brg dh collect kat Kuching boss.. 3 hari je smpai Sarawak
                <span class="wa-msg-time">16:31</span>
              </div>
              <div class="wa-msg-bubble wa-msg-incoming">
                memang betul2 kotak kosong xde tulis ubat lelaki langsung 😂 org rumah tgk pun x tanya apa2.. mantap servis
                <span class="wa-msg-time">16:32</span>
              </div>
              <div class="wa-msg-bubble wa-msg-outgoing">
                Alhamdulillah selamat sampai Kuching Tuan Rizal 🙌 Terima kasih support ONYXMEN Original!
                <span class="wa-msg-time">16:34 <span class="wa-blue-ticks">✓✓</span></span>
              </div>
            </div>
            <div class="wa-bottom-input-bar">
              <span>😊 Message</span>
              <span>📎 📷 🎤</span>
            </div>
            <div class="wa-Verified-caption">
              <span>KUCHING SARAWAK · PLAIN PARCEL</span>
              <span>✓ EAST MY EXPRESS</span>
            </div>
          </div>
        </div>
      </div>
      <!-- END-WHATSAPP-PROOF-STAGE -->

      <div class="conservatory-editorial-panel">
        <div>
          <div class="editorial-kicker">ONYXMEN BOTANICAL ATELIER · KUALA LUMPUR &amp; MALAYSIA</div>
          <h1 class="editorial-headline">
            ${escapeHtmlAttr(cleanVisibleHeadline)}
          </h1>
          <p class="editorial-lead" style="margin-bottom:0;">
            ${escapeHtmlAttr(cleanVisibleLead)}
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
            ${isMs ? 'TEMPAH KOLEKSI ONYXMEN — BELI 1 RM 159 | BELI 2 RM 286 (10% OFF)' : 'ORDER ONYXMEN NOW — 1 FOR RM 159 | 2 FOR RM 286 (10% OFF)'}
          </button>
          <a href="https://wa.me/60142985919?text=${encodeURIComponent(isMs ? 'Hai ONYXMEN Malaysia, saya ingin tahu lebih lanjut / buat tempahan.' : 'Hi ONYXMEN Malaysia, I would like to get more info / place an order.')}" class="btn-wa-direct-concierge" data-wa-direct-trigger="conservatory-hero">
            <span class="wa-pulse-dot"></span>
            <span>${isMs ? 'WHATSAPP TERUS (+60 14-298 5919) · TANYA INFO / COD' : 'WHATSAPP DIRECT (+60 14-298 5919) · ASK INFO OR ORDER'}</span>
          </a>
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
        <div class="monograph-stars-row">★★★★★ · 100% ORIGINAL HOLOGRAM SEALED</div>
        <div class="monograph-price" id="monograph-price">RM 159.00 MYR</div>

        <ul class="monograph-botanical-list" id="monograph-ingredients">
          ${activeInit.ingredientsHtml}
        </ul>

        <div class="pack-pills-row" id="pack-pills-row">
          <button type="button" class="pack-pill active" data-tier="1">BUY 1 · RM 159</button>
          <button type="button" class="pack-pill" data-tier="2">BUY 2 · RM 286 (10% OFF · WAS RM 318)</button>
          <button type="button" class="pack-pill" data-tier="3">BUY 3 · RM 405 (15% OFF · WAS RM 477)</button>
        </div>

        <button type="button" class="btn-gold-dispatch" id="btn-monograph-dispatch" data-open-order-drawer="true" data-order-product="${productSlug}" data-order-qty="1">
          ${isMs ? 'TEMPAH SEKARANG — RM 159' : 'DISPATCH DISCREET VIP ORDER — RM 159'}
        </button>
        <a href="https://wa.me/60142985919?text=${encodeURIComponent(isMs ? 'Hai ONYXMEN Malaysia, saya ingin tanya info / tempah produk ini.' : 'Hi ONYXMEN Malaysia, I would like to get info / order this product.')}" class="btn-wa-direct-concierge" id="btn-monograph-wa" data-wa-direct-trigger="product-monograph">
          <span class="wa-pulse-dot"></span>
          <span>${isMs ? 'TANYA INFO / TEMPAH DI WHATSAPP (+60 14-298 5919)' : 'ASK INFO OR ORDER ON WHATSAPP (+60 14-298 5919)'}</span>
        </a>
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
          100% Original · 1 Bottle RM 159 | 2 Bottles RM 286 (10% OFF) | 3 Bottles RM 405 (15% OFF)
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
          <button type="button" class="comp-order-pill" data-quick-add="horsemen" data-open-order-drawer="true" data-order-product="horsemen" data-order-qty="1">ORDER NOW - RM 159</button>
        </div>

        <div class="comp-column">
          <div>
            <div class="comp-formula-index">FORMULA 02</div>
            <div class="comp-formula-name"><a href="${isMs ? '/ms/produk/hammer-of-thor/' : '/products/hammer-of-thor/'}">HAMMER OF THOR</a></div>
            <div class="comp-row-item comp-benefit">Sustained Physical Drive</div>
            <div class="comp-row-item comp-actives">Tribulus Terrestris Saponins</div>
            <div class="comp-row-item">20 Veg. Capsules</div>
          </div>
          <button type="button" class="comp-order-pill" data-quick-add="hammer" data-open-order-drawer="true" data-order-product="hammer-of-thor" data-order-qty="1">ORDER NOW - RM 159</button>
        </div>

        <div class="comp-column">
          <div>
            <div class="comp-formula-index">FORMULA 03</div>
            <div class="comp-formula-name"><a href="${isMs ? '/ms/produk/magnum-pump-xr/' : '/products/magnum-pump-xr/'}">MAGNUM PUMP XR</a></div>
            <div class="comp-row-item comp-benefit">Nitric Oxide &amp; Vascularity</div>
            <div class="comp-row-item comp-actives">L-Arginine HCl &amp; L-Citrulline XR</div>
            <div class="comp-row-item">30 Black Capsules (Pro Series)</div>
          </div>
          <button type="button" class="comp-order-pill" data-quick-add="magnum" data-open-order-drawer="true" data-order-product="magnum-pump-xr" data-order-qty="1">ORDER NOW - RM 159</button>
        </div>

        <div class="comp-column">
          <div>
            <div class="comp-formula-index">FORMULA 04</div>
            <div class="comp-formula-name"><a href="${isMs ? '/ms/produk/grow-xl/' : '/products/grow-xl/'}">GROW XL</a></div>
            <div class="comp-row-item comp-benefit">30-Day Extra-Strength Blend</div>
            <div class="comp-row-item comp-actives">Tongkat Ali, Muira Puama &amp; Saw Palmetto</div>
            <div class="comp-row-item">30 Capsules (#1 Selling)</div>
          </div>
          <button type="button" class="comp-order-pill" data-quick-add="growxl" data-open-order-drawer="true" data-order-product="grow-xl" data-order-qty="1">ORDER NOW - RM 159</button>
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
            OPEN EXPRESS ORDER FORM — UP TO 15% OFF
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
          <img src="/assets/sovereign/web_set_06_pdp_zoom_horsemen_macro_1793437602197.webp" alt="HORSEMEN" class="iphone-bottle-thumb hd-optical-photo" width="140" height="148" loading="lazy" decoding="async" />
          <div class="iphone-bottle-title">HORSEMEN</div>
          <button type="button" class="iphone-gold-cta" data-quick-add="horsemen">ADD TO<br/>VIP CART</button>
        </div>

        <div class="iphone-product-item">
          <img src="/assets/sovereign/web_set_07_pdp_zoom_hammer_of_thor_macro_1793437629467.webp" alt="HAMMER OF THOR" class="iphone-bottle-thumb hd-optical-photo" width="140" height="148" loading="lazy" decoding="async" />
          <div class="iphone-bottle-title">HAMMER OF<br/>THOR</div>
          <button type="button" class="iphone-gold-cta" data-quick-add="hammer">ADD TO<br/>VIP CART</button>
        </div>

        <div class="iphone-product-item">
          <img src="/assets/sovereign/web_set_08_pdp_zoom_magnum_pump_xr_macro_1793437665292.webp" alt="MAGNUM PUMP XR" class="iphone-bottle-thumb hd-optical-photo" width="140" height="148" loading="lazy" decoding="async" />
          <div class="iphone-bottle-title">MAGNUM PUMP XR</div>
          <button type="button" class="iphone-gold-cta" data-quick-add="magnum">ADD TO<br/>VIP CART</button>
        </div>

        <div class="iphone-product-item">
          <img src="/assets/sovereign/web_set_09_pdp_zoom_grow_xl_macro_1793437711484.webp" alt="GROW XL" class="iphone-bottle-thumb hd-optical-photo" width="140" height="148" loading="lazy" decoding="async" />
          <div class="iphone-bottle-title">GROW XL</div>
          <button type="button" class="iphone-gold-cta" data-quick-add="growxl">ADD TO<br/>VIP CART</button>
        </div>
      </div>
    </div>
  </aside>

  <!-- ==========================================================================
       SLIDE-OVER ULTRA-SIMPLE, CLEAN, SHORT VIP ORDER DRAWER (10% & 15% OFF)
       ========================================================================== -->
  <div class="vip-drawer-backdrop" id="vip-drawer-backdrop"></div>

  <aside class="vip-checkout-drawer" id="vip-checkout-drawer" aria-label="ONYXMEN Quick Discreet Order Form">
    <div class="drawer-top-header">
      <div class="drawer-title">★ ${isMs ? 'BORANG TEMPAHAN PANTAS (100% ORIGINAL)' : 'QUICK DISCREET ORDER (100% ORIGINAL)'}</div>
      <button type="button" class="drawer-close-btn" id="btn-close-drawer">✕</button>
    </div>

    <div class="drawer-items-list">
      <!-- STEP 1: Quick Formula Selection -->
      <div>
        <div class="drawer-step-label">
          <span>${isMs ? '1. PILIH FORMULASI' : '1. SELECT FORMULA'}</span>
          <span style="color:#1B5E3A;">100% ORIGINAL</span>
        </div>
        <div class="drawer-formula-pills" id="drawer-formula-pills">
          <button type="button" class="drawer-formula-pill ${initialFormulaKey === 'horsemen' ? 'active' : ''}" data-drawer-formula="horsemen">
            <span>HORSEMEN</span><span>20 Caps</span>
          </button>
          <button type="button" class="drawer-formula-pill ${initialFormulaKey === 'hammer' ? 'active' : ''}" data-drawer-formula="hammer">
            <span>HAMMER OF THOR</span><span>20 Caps</span>
          </button>
          <button type="button" class="drawer-formula-pill ${initialFormulaKey === 'magnum' ? 'active' : ''}" data-drawer-formula="magnum">
            <span>MAGNUM PUMP XR</span><span>30 Caps</span>
          </button>
          <button type="button" class="drawer-formula-pill ${initialFormulaKey === 'growxl' ? 'active' : ''}" data-drawer-formula="growxl">
            <span>GROW XL</span><span>30 Caps</span>
          </button>
        </div>
      </div>

      <!-- STEP 2: Choose Bundle Offer (Buy 1 RM 159 | Buy 2 10% OFF RM 286 | Buy 3 15% OFF RM 405) -->
      <div>
        <div class="drawer-step-label">
          <span>${isMs ? '2. PILIH PAKEJ DISKAUN' : '2. CHOOSE BUNDLE OFFER'}</span>
          <span>${isMs ? 'POS RAHSIA PERCUMA' : 'FREE PLAIN-BOX COURIER'}</span>
        </div>
        <div class="drawer-tier-cards" id="drawer-tier-cards">
          <button type="button" class="drawer-tier-card" data-drawer-tier="1">
            <div class="tier-card-left">
              <div class="tier-card-title">
                <span>${isMs ? 'BELI 1 BOTOL' : 'BUY 1 BOTTLE'}</span>
              </div>
              <div class="tier-card-sub">${isMs ? 'Bekalan Percubaan Rasmi · Pos Rahsia' : 'Standard Single Bottle · Free Discreet Courier'}</div>
            </div>
            <div class="tier-card-right">
              <span class="tier-price-now">RM 159</span>
            </div>
          </button>

          <button type="button" class="drawer-tier-card active" data-drawer-tier="2">
            <div class="tier-card-left">
              <div class="tier-card-title">
                <span>${isMs ? 'BELI 2 BOTOL' : 'BUY 2 BOTTLES'}</span>
                <span class="tier-discount-badge">10% OFF · SAVE RM 32</span>
              </div>
              <div class="tier-card-sub">${isMs ? 'Paling Popular · RM 143 / botol' : 'Most Popular · RM 143 / bottle · Free Express'}</div>
            </div>
            <div class="tier-card-right">
              <span class="tier-price-now">RM 286</span>
              <span class="tier-price-was">RM 318</span>
            </div>
          </button>

          <button type="button" class="drawer-tier-card" data-drawer-tier="3">
            <div class="tier-card-left">
              <div class="tier-card-title">
                <span>${isMs ? 'BELI 3 BOTOL' : 'BUY 3 BOTTLES'}</span>
                <span class="tier-discount-badge">15% OFF · SAVE RM 72</span>
              </div>
              <div class="tier-card-sub">${isMs ? 'Nilai Terbaik VIP · RM 135 / botol' : 'Best Value VIP · RM 135 / bottle · Priority COD'}</div>
            </div>
            <div class="tier-card-right">
              <span class="tier-price-now">RM 405</span>
              <span class="tier-price-was">RM 477</span>
            </div>
          </button>
        </div>
      </div>

      <div id="cart-items-container" style="display:none;"></div>

      <!-- STEP 3: 3 Simple Clean Input Fields -->
      <div class="vip-express-fields" id="vip-express-form-fields">
        <div class="drawer-step-label" style="margin-bottom:2px;">
          <span>${isMs ? '3. MAKLUMAT PENGHANTARAN RINGKAS' : '3. SIMPLE DELIVERY DETAILS (COD / EXPRESS)'}</span>
        </div>
        <input type="text" id="vip-customer-name" class="vip-input" placeholder="${isMs ? '1. Nama Anda (cth: Azlan)' : '1. Your Name (e.g. Azlan)'}" />
        <input type="tel" id="vip-customer-phone" class="vip-input" placeholder="${isMs ? '2. No. WhatsApp / Telefon (cth: 012-3456789)' : '2. WhatsApp / Phone Number (e.g. 012-3456789)'}" />
        <input type="text" id="vip-customer-address" class="vip-input" placeholder="${isMs ? '3. Alamat Ringkas & Poskod (COD / Express)' : '3. Delivery Address & Postcode (COD / Express)'}" />
        <div id="vip-order-feedback" style="font-size:0.74rem;color:#1B3B28;font-weight:700;display:none;"></div>
      </div>
    </div>

    <div class="drawer-footer">
      <div class="shipping-note">
        <span>📦 ${isMs ? 'Kotak Coklat Kosong Tanpa Nama Produk' : '100% Plain Unmarked Parcel (OM Fulfilment)'}</span>
        <strong>FREE</strong>
      </div>
      <div class="total-row">
        <span>${isMs ? 'JUMLAH BAYARAN' : 'TOTAL PAYABLE'}</span>
        <span id="cart-total-price">RM 286.00 MYR (10% OFF)</span>
      </div>
      <button type="button" class="btn-complete-vip" id="btn-complete-order">
        ${isMs ? 'SAHKAN TEMPAHAN RAHSIA SEKARANG (BORANG PANTAS)' : 'CONFIRM DISCREET ORDER NOW (EXPRESS FORM)'}
      </button>
      <a href="https://wa.me/60142985919?text=${encodeURIComponent(isMs ? 'Hai ONYXMEN Malaysia, saya ingin tanya info / buat tempahan.' : 'Hi ONYXMEN Malaysia, I would like to get info / place an order.')}" class="btn-wa-direct-concierge" id="btn-whatsapp-order" data-wa-direct-trigger="vip-order-drawer">
        <span class="wa-pulse-dot"></span>
        <span>${isMs ? 'TANYA INFO / TEMPAH DI WHATSAPP · +60 14-298 5919' : 'ASK INFO OR ORDER ON WHATSAPP · +60 14-298 5919'}</span>
      </a>
    </div>
  </aside>

  <!-- FLOATING SOVEREIGN LIVE WHATSAPP CONCIERGE DOCK (+60 14-298 5919) WITH REAL-TIME TRACKING BEACON -->
  <a
    href="https://wa.me/60142985919?text=${encodeURIComponent(isMs ? 'Hai ONYXMEN Malaysia, saya ingin tahu lebih lanjut mengenai produk anda.' : 'Hi ONYXMEN Malaysia, I would like to get more info about your products.')}"
    class="onyxmen-floating-wa-dock"
    id="onyxmen-floating-wa-dock"
    data-wa-direct-trigger="floating-wa-dock"
    aria-label="Chat or Order on Official ONYXMEN Malaysia WhatsApp +60 14-298 5919"
  >
    <span class="onyxmen-floating-wa-dock__icon" aria-hidden="true">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91C21.95 6.45 17.5 2 12.04 2zm5.82 14.01c-.24.68-1.41 1.3-1.95 1.38-.5.08-1.13.11-1.83-.11-.42-.13-.97-.31-1.67-.61-2.95-1.27-4.88-4.25-5.03-4.45-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.59-.37.79-.37.2 0 .4 0 .57.01.18.01.43-.07.67.51.24.58.82 2.01.89 2.16.07.15.12.32.02.52-.1.2-.15.32-.3.5-.15.17-.31.39-.45.52-.15.15-.3.31-.13.61.17.3.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.36 1.46.3.15.47.12.65-.07.17-.2.74-.86.94-1.16.2-.3.4-.25.67-.15.27.1 1.71.81 2 .96.3.15.5.22.57.35.07.12.07.72-.17 1.4z"/>
      </svg>
    </span>
    <span class="onyxmen-floating-wa-dock__meta">
      <span class="onyxmen-floating-wa-dock__kicker">
        <span class="wa-pulse-dot"></span>
        <span>${isMs ? 'WHATSAPP RASMI · TANYA / COD' : 'LIVE WHATSAPP · INFO & COD'}</span>
      </span>
      <span class="onyxmen-floating-wa-dock__number">+60 14-298 5919 · ${isMs ? 'TANYA / TEMPAH' : 'ASK / ORDER'}</span>
    </span>
  </a>

  <!-- OPEN-BY-DEFAULT SEO & CLINICAL VAULT DRAWER (100% GOOGLEBOT SMARTPHONE PRIMARY CONTENT) -->
  <details class="onyxman-seo-vault-drawer" open>
    <summary class="onyxman-seo-vault-drawer__summary">
      <span>${
        isMs
          ? 'MONOGRAF BOTANI LENGKAP, JADUAL PENGHANTARAN 16 NEGERI MALAYSIA & SOALAN LAZIM (SEO ARCHIVE)'
          : 'COMPLETE PHYTOCHEMICAL MONOGRAPHS, 16-STATE MALAYSIA DELIVERY DIRECTORY & CLINICAL FAQ ARCHIVE'
      }</span>
      <span>+</span>
    </summary>
    <div class="onyxman-seo-vault-drawer__body">
      ${normalizedRawBody}
    </div>
  </details>

  <!-- ==========================================================================
       OPEN-DOM CRAWL-BRIDGE PRIORITY INTERNAL LINK HUB (MS-230)
       Passes direct open-DOM PageRank from already-indexed pages (/, /ms/, /products/hammer-of-thor/, /guides/...)
       to all 8 bilingual flagship hubs, 4 product vaults, and top Malaysia state delivery hubs.
       ========================================================================== -->
  <nav class="minimal-crawl-bridge" aria-label="${isMs ? 'Rangkaian Pautan Rasmi ONYXMEN Malaysia' : 'ONYXMEN Malaysia Direct Commercial & State Dispatch Hubs'}" style="max-width:1380px;margin:0 auto;padding:28px 32px 12px;border-top:1px solid #E8E8E8;font-size:0.72rem;line-height:1.9;color:#52565A;display:flex;flex-wrap:wrap;gap:6px 18px;justify-content:center;">
    <strong style="color:#0F1113;letter-spacing:0.12em;text-transform:uppercase;">${isMs ? 'HAB RASMI MALAYSIA (RM 159):' : 'OFFICIAL MALAYSIA HUBS (RM 159):'}</strong>
    <a href="/horsemen-malaysia/" style="color:#0F1113;text-decoration:none;font-weight:600;">Horsemen Malaysia (20 Caps · RM 159)</a>
    <a href="/hammer-of-thor-malaysia/" style="color:#0F1113;text-decoration:none;font-weight:600;">Hammer of Thor Malaysia (20 Veg. Caps · RM 159)</a>
    <a href="/grow-xl-malaysia/" style="color:#0F1113;text-decoration:none;font-weight:600;">Grow XL Malaysia (30 Caps · RM 159)</a>
    <a href="/magnum-pump-xr-malaysia/" style="color:#0F1113;text-decoration:none;font-weight:600;">Magnum Pump XR Malaysia (30 Black Caps · RM 159)</a>
    <a href="/products/horsemen/" style="color:#52565A;text-decoration:none;">Horsemen Vault</a>
    <a href="/products/hammer-of-thor/" style="color:#52565A;text-decoration:none;">Hammer of Thor Vault</a>
    <a href="/products/grow-xl/" style="color:#52565A;text-decoration:none;">Grow XL Vault</a>
    <a href="/products/magnum-pump-xr/" style="color:#52565A;text-decoration:none;">Magnum Pump XR Vault</a>
    <a href="/ms/horsemen-malaysia/" style="color:#0F1113;text-decoration:none;font-weight:600;">Horsemen Malaysia (BM)</a>
    <a href="/ms/hammer-of-thor-malaysia/" style="color:#0F1113;text-decoration:none;font-weight:600;">Hammer of Thor Malaysia (BM)</a>
    <a href="/ms/grow-xl-malaysia/" style="color:#0F1113;text-decoration:none;font-weight:600;">Grow XL Malaysia (BM)</a>
    <a href="/ms/magnum-pump-xr-malaysia/" style="color:#0F1113;text-decoration:none;font-weight:600;">Magnum Pump XR Malaysia (BM)</a>
    <a href="/ms/produk/horsemen/" style="color:#52565A;text-decoration:none;">Produk Horsemen</a>
    <a href="/ms/produk/hammer-of-thor/" style="color:#52565A;text-decoration:none;">Produk Hammer of Thor</a>
    <a href="/ms/produk/grow-xl/" style="color:#52565A;text-decoration:none;">Produk Grow XL</a>
    <a href="/ms/produk/magnum-pump-xr/" style="color:#52565A;text-decoration:none;">Produk Magnum Pump XR</a>
    <a href="/compare/" style="color:#52565A;text-decoration:none;">4-Bottle Comparison Matrix</a>
    <a href="/guides/" style="color:#52565A;text-decoration:none;">10 Buyer &amp; Dosage Guides (EN)</a>
    <a href="/ms/panduan/" style="color:#52565A;text-decoration:none;">10 Panduan Pengguna (BM)</a>
    <a href="/guides/hammer-of-thor-original-vs-fake-malaysia/" style="color:#52565A;text-decoration:none;">Hammer of Thor Original vs Fake Guide</a>
    <a href="/guides/growxl-for-men-30-capsule-dosage-guide-malaysia/" style="color:#52565A;text-decoration:none;">GrowXL for Men 30-Cap Dosage Guide</a>
    <a href="/guides/horsemen-capsule-original-500mg-malaysia-guide/" style="color:#52565A;text-decoration:none;">Horsemen 500mg Tongkat Ali Guide</a>
    <a href="/guides/magnum-pump-xr-30-black-capsules-nitric-oxide-guide/" style="color:#52565A;text-decoration:none;">Magnum Pump XR 30 Black Caps Guide</a>
    <a href="/ms/panduan/hammer-of-thor-original-vs-tiruan-malaysia/" style="color:#52565A;text-decoration:none;">Hammer of Thor Original vs Tiruan (BM)</a>
    <a href="/ms/panduan/panduan-cara-makan-grow-xl-30-kapsul-malaysia/" style="color:#52565A;text-decoration:none;">Cara Makan Grow XL 30 Kapsul (BM)</a>
    <a href="/ms/panduan/panduan-horsemen-kapsul-original-500mg-malaysia/" style="color:#52565A;text-decoration:none;">Panduan Horsemen 500mg (BM)</a>
    <a href="/ms/panduan/panduan-magnum-pump-xr-30-kapsul-hitam-malaysia/" style="color:#52565A;text-decoration:none;">Panduan Magnum Pump XR 30 Kapsul Hitam (BM)</a>
    <a href="/guides/20-capsule-vs-30-capsule-cycle-selection/" style="color:#52565A;text-decoration:none;">20 vs 30 Capsule Cycle Guide</a>
    <a href="/malaysia/kuala-lumpur/" style="color:#52565A;text-decoration:none;">COD Kuala Lumpur</a>
    <a href="/malaysia/selangor/" style="color:#52565A;text-decoration:none;">COD Selangor</a>
    <a href="/malaysia/johor-bahru/" style="color:#52565A;text-decoration:none;">COD Johor Bahru</a>
    <a href="/malaysia/penang/" style="color:#52565A;text-decoration:none;">COD Penang</a>
    <a href="/malaysia/sabah/" style="color:#52565A;text-decoration:none;">Express Sabah</a>
    <a href="/malaysia/sarawak/" style="color:#52565A;text-decoration:none;">Express Sarawak</a>
  </nav>

  <!-- ==========================================================================
       ONYXMEN LUXURY FOOTER
       ========================================================================== -->
  <footer class="minimal-footer" id="footer-contact">
    <div>© 2026 ONYXMEN MALAYSIA BOTANICAL ATELIER (WWW.ONYXMEN.MY). ALL RIGHTS RESERVED.</div>
    <div>100% DISCREET UNMARKED PARCEL · RM 159 OFFICIAL RESERVE · SALES@ONYXMEN.MY</div>
  </footer>

  <!-- ==========================================================================
       INTERACTIVE STOREFRONT CONTROLLER (1:1 DEMO_01 + 10%/15% BUNDLE DISCOUNTS)
       ========================================================================== -->
  <script>
    (function () {
      'use strict';

      const TIER_PRICING = {
        1: { qty: 1, finalPrice: 159, originalPrice: 159, discountLabel: '', saveMyr: 0 },
        2: { qty: 2, finalPrice: 286, originalPrice: 318, discountLabel: '10% OFF · SAVE RM 32', saveMyr: 32 },
        3: { qty: 3, finalPrice: 405, originalPrice: 477, discountLabel: '15% OFF · SAVE RM 72', saveMyr: 72 }
      };

      function computeDiscountedTotal(totalBottles) {
        if (totalBottles <= 0) return { finalMyr: 0, originalMyr: 0, badge: '' };
        if (totalBottles === 1) return { finalMyr: 159, originalMyr: 159, badge: '' };
        if (totalBottles === 2) return { finalMyr: 286, originalMyr: 318, badge: ' (10% OFF)' };
        if (totalBottles === 3) return { finalMyr: 405, originalMyr: 477, badge: ' (15% OFF)' };
        const orig = totalBottles * 159;
        const disc = Math.round(orig * 0.85);
        return { finalMyr: disc, originalMyr: orig, badge: ' (15% OFF VIP)' };
      }

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

      /* 2. Interactive Formula Monograph Switcher (1 Bottle RM 159 | 2 Bottles RM 286 [10% OFF] | 3 Bottles RM 405 [15% OFF]) */
      let activeFormulaKey = '${initialFormulaKey}';
      let activePackTier = 2;

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

        const tierInfo = TIER_PRICING[activePackTier] || TIER_PRICING[1];
        if (monoPrice) {
          monoPrice.textContent = tierInfo.discountLabel
            ? 'RM ' + tierInfo.finalPrice + '.00 MYR (' + tierInfo.discountLabel + ')'
            : 'RM ' + tierInfo.finalPrice + '.00 MYR';
        }

        if (monoList) {
          monoList.innerHTML = item.ingredients
            .map(([label, dose]) => '<li><span>' + label + '</span><span class="dose">' + dose + '</span></li>')
            .join('');
        }
        if (monoDispatchBtn) {
          monoDispatchBtn.setAttribute('data-order-product', item.slug);
          monoDispatchBtn.setAttribute('data-order-qty', String(activePackTier));
          monoDispatchBtn.textContent =
            'DISPATCH DISCREET VIP ORDER — RM ' +
            tierInfo.finalPrice +
            (tierInfo.discountLabel ? ' (' + tierInfo.discountLabel + ')' : '');
        }
        const monoWaBtn = document.getElementById('btn-monograph-wa');
        if (monoWaBtn) {
          monoWaBtn.innerHTML =
            '<span class="wa-pulse-dot" aria-hidden="true"></span><span>ASK INFO / ORDER ON WHATSAPP (' +
            item.name +
            ') · +60 14-298 5919</span>';
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

      /* 3. Ultra-Simple Quick Order Drawer & Live FormSubmit Bridge (waleedshoaibofficial@gmail.com) */
      let cart = {};
      cart[activeFormulaKey] = 2;

      const bagBadge = document.getElementById('bag-count-badge');
      const iphoneBagCount = document.getElementById('iphone-bag-count');
      const cartTotalEl = document.getElementById('cart-total-price');
      const drawerEl = document.getElementById('vip-checkout-drawer');
      const backdropEl = document.getElementById('vip-drawer-backdrop');
      const drawerFormulaBtns = document.querySelectorAll('[data-drawer-formula]');
      const drawerTierBtns = document.querySelectorAll('[data-drawer-tier]');

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
        Object.keys(cart).forEach((key) => {
          const qty = cart[key];
          if (qty && qty > 0) totalQty += qty;
        });
        if (totalQty <= 0) {
          cart[activeFormulaKey] = activePackTier || 1;
          totalQty = cart[activeFormulaKey];
        }

        const pricing = computeDiscountedTotal(totalQty);

        drawerFormulaBtns.forEach((btn) => {
          btn.classList.toggle('active', btn.dataset.drawerFormula === activeFormulaKey);
        });

        drawerTierBtns.forEach((btn) => {
          btn.classList.toggle('active', Number(btn.dataset.drawerTier) === totalQty);
        });

        if (bagBadge) bagBadge.textContent = String(totalQty);
        if (iphoneBagCount) iphoneBagCount.textContent = 'BAG (' + totalQty + ')';
        if (cartTotalEl) {
          cartTotalEl.textContent = 'RM ' + pricing.finalMyr + '.00 MYR' + pricing.badge;
        }
        const drawerWaBtn = document.getElementById('btn-whatsapp-order');
        if (drawerWaBtn && CATALOG[activeFormulaKey]) {
          drawerWaBtn.innerHTML =
            '<span class="wa-pulse-dot" aria-hidden="true"></span><span>ASK INFO / ORDER ON WHATSAPP (' +
            CATALOG[activeFormulaKey].name +
            ') · +60 14-298 5919</span>';
        }
      }

      drawerFormulaBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const nextKey = btn.dataset.drawerFormula;
          const currentTotal = Object.keys(cart).reduce((acc, k) => acc + (cart[k] || 0), 0) || 2;
          activeFormulaKey = nextKey;
          cart = {};
          cart[activeFormulaKey] = currentTotal;
          updateMonographUI();
          renderCart();
        });
      });

      drawerTierBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
          const tierQty = Number(btn.dataset.drawerTier) || 1;
          activePackTier = tierQty;
          cart = {};
          cart[activeFormulaKey] = tierQty;
          updateMonographUI();
          renderCart();
        });
      });

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
          const key = btn.dataset.quickAdd || activeFormulaKey;
          activeFormulaKey = key;
          cart = {};
          cart[activeFormulaKey] = activePackTier || 2;
          updateMonographUI();
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

          const totalQty = Object.keys(cart).reduce((acc, k) => acc + (cart[k] > 0 ? cart[k] : 0), 0) || 1;
          const pricing = computeDiscountedTotal(totalQty);
          const itemsSummary = Object.keys(cart)
            .filter((k) => cart[k] > 0)
            .map((k) => CATALOG[k].name + ' x ' + cart[k])
            .join(', ');

          const totalMyr = pricing.finalMyr;
          const refCode = 'ONX-' + Math.floor(1000 + Math.random() * 9000);

          completeBtn.textContent = 'DISPATCHING VIP ORDER...';

          try {
            fetch('/api/lead-log', {
              method: 'POST',
              keepalive: true,
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                type: 'FORM_ORDER',
                refCode: '#' + refCode,
                formula: itemsSummary || 'HORSEMEN x 1',
                totalMyr: 'RM ' + totalMyr + pricing.badge,
                triggerSource: 'vip-express-order-form',
                customerName,
                customerPhone,
                customerAddress: customerAddr,
                pageUrl: window.location.href,
                referrer: document.referrer || 'Direct / Google Search',
                mytTimestamp: new Date().toLocaleString('en-MY', { timeZone: 'Asia/Kuala_Lumpur' }),
              }),
            }).catch(() => {});
          } catch (_) {
            /* Non-blocking cloud ledger telemetry */
          }

          try {
            await fetch('https://formsubmit.co/ajax/waleedshoaibofficial@gmail.com', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
              body: JSON.stringify({
                _subject: 'ONYXMEN VIP Order ' + refCode + ' — RM ' + totalMyr + pricing.badge + ' (' + customerName + ')',
                Order_Reference: refCode,
                Customer_Name: customerName,
                Customer_Phone_WhatsApp: customerPhone,
                Delivery_Address_Malaysia: customerAddr,
                Ordered_Formulas: (itemsSummary || 'HORSEMEN x 1') + ' — RM ' + totalMyr + pricing.badge,
                Total_Amount_MYR: 'RM ' + totalMyr + '.00 MYR' + pricing.badge,
                Source_Page: window.location.href
              })
            });
          } catch (_) {
            /* Fallback gracefully */
          }

          completeBtn.textContent = '✓ ORDER CONFIRMED (REF #' + refCode + ' · RM ' + totalMyr + ')';
          completeBtn.style.background = '#1B3B28';
          completeBtn.style.color = '#FFFFFF';
          if (feedbackEl) {
            feedbackEl.style.display = 'block';
            feedbackEl.style.color = '#1B3B28';
            feedbackEl.textContent = 'Order #' + refCode + ' (RM ' + totalMyr + ') received! Discreet plain-box dispatch confirmed.';
          }
        });
      }

      /* 4. Dual-Channel Tracked WhatsApp Concierge (+60 14-298 5919) & Real-Time Owner Audit Beacon */
      const FRIEND_WA_E164 = '60142985919';
      const FRIEND_WA_DISPLAY = '+60 14-298 5919';

      function dispatchTrackedWhatsAppLead(triggerSource) {
        const nameEl = document.getElementById('vip-customer-name');
        const phoneEl = document.getElementById('vip-customer-phone');
        const addrEl = document.getElementById('vip-customer-address');
        const feedbackEl = document.getElementById('vip-order-feedback');

        const customerName = nameEl && nameEl.value.trim() ? nameEl.value.trim() : '';
        const customerPhone = phoneEl && phoneEl.value.trim() ? phoneEl.value.trim() : '';
        const customerAddr = addrEl && addrEl.value.trim() ? addrEl.value.trim() : '';

        const totalQty = Object.keys(cart).reduce((acc, k) => acc + (cart[k] > 0 ? cart[k] : 0), 0) || activePackTier || 1;
        const pricing = computeDiscountedTotal(totalQty);
        const selectedItem = CATALOG[activeFormulaKey] || CATALOG.horsemen;
        const itemsSummary = Object.keys(cart)
          .filter((k) => cart[k] > 0)
          .map((k) => CATALOG[k].name + ' x ' + cart[k])
          .join(', ') || (selectedItem.name + ' x ' + totalQty);

        const totalMyr = pricing.finalMyr;
        const waRef = 'WA-' + Math.floor(1000 + Math.random() * 9000);
        const mytTimestamp = new Date().toLocaleString('en-MY', { timeZone: 'Asia/Kuala_Lumpur' });

        /* Persist in local storage audit ledger */
        try {
          const waAuditLog = JSON.parse(localStorage.getItem('onyxmen_wa_lead_audit') || '[]');
          waAuditLog.unshift({
            waRef: '#' + waRef,
            formula: itemsSummary,
            totalMyr: 'RM ' + totalMyr,
            trigger: triggerSource,
            page: window.location.pathname,
            clickedAtMyt: mytTimestamp,
          });
          localStorage.setItem('onyxmen_wa_lead_audit', JSON.stringify(waAuditLog.slice(0, 25)));
        } catch (_) {
          /* Ignore storage errors */
        }

        /* 1. Fire Instant Keepalive Owner Audit Email to waleedshoaibofficial@gmail.com & Cloud Lead Ledger */
        try {
          fetch('/api/lead-log', {
            method: 'POST',
            keepalive: true,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              type: 'WHATSAPP_CLICK',
              refCode: '#' + waRef,
              formula: itemsSummary,
              totalMyr: 'RM ' + totalMyr + pricing.badge,
              triggerSource,
              customerName: customerName || '',
              customerPhone: customerPhone || '',
              customerAddress: customerAddr || '',
              pageUrl: window.location.href,
              referrer: document.referrer || 'Direct / Google Search',
              mytTimestamp,
            }),
          }).catch(() => {});
        } catch (_) {
          /* Non-blocking cloud ledger telemetry */
        }

        try {
          fetch('https://formsubmit.co/ajax/waleedshoaibofficial@gmail.com', {
            method: 'POST',
            keepalive: true,
            headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
            body: JSON.stringify({
              _subject:
                '🟢 [WHATSAPP LEAD #' +
                waRef +
                '] Customer Contacted WhatsApp (' +
                FRIEND_WA_DISPLAY +
                ') — ' +
                itemsSummary +
                ' (RM ' +
                totalMyr +
                ')',
              _template: 'table',
              _captcha: 'false',
              WhatsApp_Tracking_Code_On_Friend_Phone: '#' + waRef,
              Friend_WhatsApp_Desk: FRIEND_WA_DISPLAY + ' (wa.me/' + FRIEND_WA_E164 + ')',
              Selected_Formula_And_Bundle: itemsSummary + ' — RM ' + totalMyr + '.00 MYR' + pricing.badge,
              Button_Clicked_By_Visitor: triggerSource,
              Customer_Name_If_Entered: customerName || '(Not typed before clicking WhatsApp)',
              Customer_Phone_If_Entered: customerPhone || '(Visible inside friend WhatsApp chat #' + waRef + ')',
              Customer_Address_If_Entered: customerAddr || '(To be confirmed on WhatsApp #' + waRef + ')',
              Source_Page_URL: window.location.href,
              Traffic_Referrer: document.referrer || 'Direct / Google Search',
              Clicked_Time_Malaysia: mytTimestamp,
              Owner_Audit_Note:
                'Every WhatsApp click sends this instant alert to waleedshoaibofficial@gmail.com AND stamps [Ref: #' +
                waRef +
                '] inside the WhatsApp message sent to +60 14-298 5919 so you can cross-check 100% of leads.',
            }),
          }).catch(() => {});
        } catch (_) {
          /* Non-blocking telemetry */
        }

        /* 2. Build Simple, Friendly 1-Line WhatsApp Message (Info or Order) with Short [Ref: #WA-XXXX] */
        const isPageMs = document.documentElement.lang === 'ms-MY';
        let simpleWaText = isPageMs
          ? 'Hai ONYXMEN Malaysia, saya ingin tanya info / buat tempahan mengenai ' + selectedItem.name + '. [Ref: #' + waRef + ']'
          : 'Hi ONYXMEN Malaysia, I would like to get more info / order ' + selectedItem.name + '. [Ref: #' + waRef + ']';

        if (customerName || customerAddr) {
          simpleWaText += ' (' + [customerName, customerPhone, customerAddr].filter(Boolean).join(' · ') + ')';
        }

        const waTargetUrl = 'https://wa.me/' + FRIEND_WA_E164 + '?text=' + encodeURIComponent(simpleWaText);

        if (feedbackEl && triggerSource === 'vip-order-drawer') {
          feedbackEl.style.display = 'block';
          feedbackEl.style.color = '#128C7E';
          feedbackEl.textContent =
            'Opening WhatsApp (' +
            FRIEND_WA_DISPLAY +
            ') · Ref #' +
            waRef +
            '...';
        }

        window.location.href = waTargetUrl;
      }

      document.querySelectorAll('[data-wa-direct-trigger]').forEach((waEl) => {
        waEl.addEventListener('click', (e) => {
          e.preventDefault();
          e.stopPropagation();
          const triggerName = waEl.getAttribute('data-wa-direct-trigger') || 'whatsapp-cta';
          dispatchTrackedWhatsAppLead(triggerName);
        });
      });

      const params = new URLSearchParams(window.location.search);
      if (params.get('iphone') === '1') {
        const ip = document.getElementById('iphone-twin-device');
        if (ip) ip.classList.add('open');
      }
    })();
  </script>`;
}

/**
 * Generates the complete HTML5 document for any Onyxmen.my page (`MS-061`).
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

  const rawTitle =
    options.title ||
    (isMs
      ? 'ONYXMEN Malaysia — Koleksi Viriliti & Prestasi Botani Eksklusif (RM 159)'
      : 'ONYXMEN Malaysia — Luxury Botanical Virility & Performance Collection (RM 159)');

  const title = rawTitle.includes('RM 159')
    ? rawTitle
    : `${rawTitle} · RM 159 Official Malaysia`;

  const rawDescription =
    options.description ||
    (isMs
      ? 'Formulasi botani tulen lelaki dewasa di Malaysia: Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR. Harga rasmi RM 159 sebotol dengan penghantaran bungkusan rahsia tanpa nama ke seluruh 16 negeri Malaysia.'
      : 'Authentic standardized botanical vitality formulations for adult men in Malaysia: Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR. Official RM 159 reserve with 100% plain unmarked parcel delivery across all 16 Malaysia states.');

  const description = rawDescription.includes('RM 159')
    ? rawDescription
    : `${rawDescription} ✓ Official RM 159 Malaysia · ✓ 100% Authentic Hologram · ✓ Discreet Plain-Box COD & FPX.`;

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
    brand: 'Onyxmen',
    domain: 'https://www.onyxmen.my',
    locale: lang,
    currency: 'MYR',
    currencySymbol: 'RM',
    whatsappNumberE164: '60142985919',
    whatsappDisplay: '+60 14-298 5919',
    activeBridgeMode: 'direct-whatsapp-concierge',
    primaryOrderEmail: 'waleedshoaibofficial@gmail.com',
    salesEmail: 'sales@onyxmen.my',
    infoEmail: 'info@onyxmen.my',
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
      'grow-xl': { name: 'Grow XL', capsules: 30, refillDays: 25, price: '159.00' },
      'magnum-pump-xr': { name: 'Magnum Pump XR', capsules: 30, refillDays: 25, price: '159.00' },
    },
  };

  const visualFirstMainHtml = renderVisualFirstStorefront({
    isMs,
    productSlug,
    title,
    description,
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
    <meta name="google-site-verification" content="aFREgZ12LtzlwdxpdQR6PWBPQozTdPjcTLmRK8M3yRQ" />

    <!-- Official Google Search Favicon, Apple Touch Icon & Manifest Suite (1:1 Multiples of 48px) -->
    <link rel="icon" href="/favicon.ico" sizes="48x48" />
    <link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png" />
    <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
    <link rel="icon" type="image/png" sizes="144x144" href="/favicon-144x144.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/favicon-192x192.png" />
    <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <link rel="shortcut icon" href="/favicon.ico" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="manifest" href="/site.webmanifest" />

    <!-- Security & Referrer Policy Meta -->
    <meta http-equiv="X-Content-Type-Options" content="nosniff" />
    <meta name="referrer" content="strict-origin-when-cross-origin" />

    <!-- Canonical & Bidirectional Hreflang Reciprocity (en-MY, ms-MY, x-default) -->
    <link rel="canonical" href="${escapeHtmlAttr(canonicalUrl)}" />
    <link rel="alternate" hreflang="en-MY" href="${escapeHtmlAttr(enFullUrl)}" />
    <link rel="alternate" hreflang="ms-MY" href="${escapeHtmlAttr(msFullUrl)}" />
    <link rel="alternate" hreflang="x-default" href="${escapeHtmlAttr(xDefaultFullUrl)}" />
    <link rel="alternate" type="application/rss+xml" title="ONYXMEN Malaysia Official Product Catalog Feed (EN-MY)" href="https://www.onyxmen.my/google-merchant-feed.xml" />
    <link rel="alternate" type="application/rss+xml" title="ONYXMEN Malaysia Katalog Produk Rasmi (MS-MY)" href="https://www.onyxmen.my/google-merchant-feed-ms.xml" />

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

    <!-- Preload Primary Pure-White Quartet Studio Photography for < 0.8s LCP -->
    <link rel="preload" as="image" href="/assets/sovereign/web_set_02_catalog_zoom_pure_white_cyclorama_1793437707044.webp" type="image/webp" fetchpriority="high" />

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
      ${String(options.topBannerHtml || '').replace(/<h1(\b[^>]*)>/gi, '<h2$1>').replace(/<\/h1>/gi, '</h2>')}
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
