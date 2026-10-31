/**
 * ONYXMAN.MY — MASTER HTML5 DOCUMENT GENERATOR & CRITICAL CSS SHELL (MS-061)
 * Enforces:
 * - Sub-second speed (LCP < 0.8s, CLS = 0.00) via inline critical CSS + preloaded studio hero assets
 * - Bidirectional hreflang (en-MY, ms-MY, x-default) & canonical tags on https://onyxman.my
 * - OpenGraph & Product Commerce Meta (og:locale, og:price:amount = 159.00, og:price:currency = MYR)
 * - Valid @graph JSON-LD structured data injection
 * - Dual-Mode WhatsApp & Express Email Bridge runtime configuration (window.ONYXMAN_CONFIG)
 * - Automatic assembly of ObsidianHeader, DiscreetSealStrip, ObsidianFooter, ExpressOrderDrawer & StickyMobileBar
 */

import { renderObsidianHeader, resolvePairedLocaleRoutes } from './ObsidianHeader.mjs';
import { renderObsidianFooter } from './ObsidianFooter.mjs';
import { renderExpressOrderDrawer } from './ExpressOrderDrawer.mjs';
import { renderStickyMobileBar } from './StickyMobileBar.mjs';
import { renderDiscreetSealStrip } from './DiscreetSealStrip.mjs';

export const DOMAIN_ORIGIN = 'https://onyxman.my';

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
 * Normalizes a relative path into a full https://onyxman.my URL.
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

  const canonicalUrl = fallbackMeta.canonicalUrl || 'https://onyxman.my/';
  const title =
    fallbackMeta.title ||
    'Onyxman Malaysia — Architectural Botanical Apothecary for Adult Men’s Vitality';
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
          '@id': 'https://onyxman.my/#organization',
          name: 'Onyxman',
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
          ],
        },
        {
          '@type': 'WebSite',
          '@id': 'https://onyxman.my/#website',
          url: 'https://onyxman.my',
          name: 'Onyxman Malaysia',
          publisher: { '@id': 'https://onyxman.my/#organization' },
          inLanguage: ['en-MY', 'ms-MY'],
        },
        {
          '@type': 'WebPage',
          '@id': `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: title,
          description,
          inLanguage,
          isPartOf: { '@id': 'https://onyxman.my/#website' },
        },
      ],
    },
    null,
    2
  );
}

/**
 * Critical inline CSS engineered for < 0.8s LCP and 0.00 CLS.
 * Strictly adheres to Rule #29 & Rule #30 (Paradigm A 100vw x 100vh + Paradigm D 50vw/50vw,
 * Obsidian/Gold tokens #050507, #0B0C10, #12141C, #D4AF37, #F3E5AB, #EAE6DF,
 * fonts Cormorant Garamond, Syne, Space Grotesk).
 */
export const CRITICAL_INLINE_CSS = `
:root {
  --bg-abyssal-obsidian: #050507;
  --bg-smoked-onyx: #0B0C10;
  --bg-velvet-charcoal: #12141C;
  --bg-obsidian-glass: rgba(11, 12, 16, 0.86);
  --bg-stage-vignette: radial-gradient(circle at 50% 42%, rgba(212, 175, 55, 0.12) 0%, rgba(11, 12, 16, 0.68) 48%, #050507 100%);
  --gold-champagne: #D4AF37;
  --gold-foil-bright: #F3E5AB;
  --gold-burnished: #9A7B2C;
  --gold-hairline: rgba(212, 175, 55, 0.24);
  --gold-hairline-strong: rgba(243, 229, 171, 0.45);
  --text-silk-ivory: #EAE6DF;
  --text-muted-alabaster: #B8B3A8;
  --text-ash-silver: #7E7A72;
  --text-obsidian-ink: #050507;
  --emerald-vitality: #2E8B57;
  --font-display: 'Cormorant Garamond', Georgia, 'Times New Roman', serif;
  --font-architectural: 'Syne', 'Helvetica Neue', Arial, sans-serif;
  --font-technical: 'Space Grotesk', -apple-system, BlinkMacSystemFont, sans-serif;
  --gutter-cinema: clamp(1.25rem, 4.2vw, 5rem);
  --gutter-vertical: clamp(3.5rem, 8.5vh, 8rem);
  --hairline-rule: 1px solid rgba(212, 175, 55, 0.24);
  --hairline-subtle: 1px solid rgba(234, 230, 223, 0.09);
  --ease-cinema: cubic-bezier(0.16, 1, 0.3, 1);
}
/* 8K CINEMATIC VISUAL-FIRST LUXURY STOREFRONT (ZERO WALLS OF TEXT) */
.cinema-8k-hero {
  position: relative;
  min-height: calc(100vh - 64px);
  max-height: 920px;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem var(--gutter-cinema);
  background:
    radial-gradient(circle at 72% 48%, rgba(212, 175, 55, 0.22) 0%, rgba(11, 12, 16, 0.78) 46%, #050507 92%),
    linear-gradient(180deg, #050507 0%, #090A0E 100%);
  border-bottom: var(--hairline-rule);
  overflow: hidden;
  gap: 2.5rem;
}
.cinema-8k-hero__backdrop {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.28;
  filter: contrast(1.12) saturate(1.1);
  pointer-events: none;
  z-index: 0;
}
.cinema-8k-hero__inner {
  position: relative;
  z-index: 2;
  max-width: 1760px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: clamp(2rem, 4vw, 4.5rem);
}
.cinema-8k-hero__copy {
  flex: 0 1 46%;
  max-width: 640px;
  display: flex;
  flex-direction: column;
  gap: 1.15rem;
}
.cinema-8k-hero__eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  font-size: 0.72rem;
  letter-spacing: 0.26em;
  text-transform: uppercase;
  color: var(--gold-foil-bright);
}
.cinema-8k-hero__eyebrow-dot {
  width: 8px;
  height: 8px;
  background: var(--gold-champagne);
  box-shadow: 0 0 12px var(--gold-champagne);
}
.cinema-8k-hero__title {
  font-family: var(--font-display);
  font-size: clamp(2.55rem, 4.5vw, 4.65rem);
  font-weight: 500;
  line-height: 1.02;
  letter-spacing: -0.015em;
  color: var(--text-silk-ivory);
}
.cinema-8k-hero__subtitle {
  font-size: 0.98rem;
  line-height: 1.55;
  color: var(--text-muted-alabaster);
  max-width: 54ch;
}
.cinema-8k-hero__tier-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 0.25rem;
}
.cinema-8k-tier-btn {
  flex: 1 1 145px;
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  padding: 0.75rem 1rem;
  background: rgba(18, 20, 28, 0.85);
  border-top: 1px solid rgba(212, 175, 55, 0.45);
  border-bottom: 1px solid rgba(212, 175, 55, 0.25);
  text-align: left;
  transition: transform 200ms ease, background 200ms ease;
}
.cinema-8k-tier-btn:hover,
.cinema-8k-tier-btn--featured {
  background: linear-gradient(135deg, rgba(212, 175, 55, 0.22) 0%, rgba(18, 20, 28, 0.95) 100%);
  border-top-color: var(--gold-foil-bright);
  transform: translateY(-2px);
}
.cinema-8k-tier-btn__qty {
  font-size: 0.66rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold-champagne);
}
.cinema-8k-tier-btn__price {
  font-family: var(--font-display);
  font-size: 1.55rem;
  font-weight: 600;
  color: var(--text-silk-ivory);
  line-height: 1.05;
}
.cinema-8k-tier-btn__note {
  font-size: 0.68rem;
  color: var(--text-muted-alabaster);
}
.cinema-8k-hero__cta-row {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  margin-top: 0.35rem;
}
.cinema-8k-hero__trust-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  padding-top: 0.75rem;
  border-top: var(--hairline-subtle);
  font-size: 0.72rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--gold-foil-bright);
}
.cinema-8k-hero__stage {
  flex: 1 1 54%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}
.cinema-8k-hero__glow {
  position: absolute;
  width: 82%;
  height: 82%;
  background: radial-gradient(circle, rgba(212, 175, 55, 0.28) 0%, rgba(212, 175, 55, 0.05) 52%, transparent 74%);
  filter: blur(28px);
  pointer-events: none;
  z-index: 0;
}
.cinema-8k-hero__visual-frame {
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 780px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cinema-8k-hero__img {
  width: 100%;
  max-height: 540px;
  object-fit: contain;
  filter: drop-shadow(0 28px 48px rgba(0, 0, 0, 0.92)) contrast(1.04);
  mask-image: radial-gradient(ellipse 92% 90% at 50% 50%, #000 76%, transparent 100%);
  -webkit-mask-image: radial-gradient(ellipse 92% 90% at 50% 50%, #000 76%, transparent 100%);
}
.cinema-8k-hero__quick-thumbs {
  position: relative;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.85rem;
  margin-top: 0.85rem;
  flex-wrap: wrap;
}
.cinema-8k-thumb-link {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.4rem 0.85rem;
  background: rgba(11, 12, 16, 0.88);
  border-top: 1px solid rgba(212, 175, 55, 0.36);
  border-bottom: 1px solid rgba(212, 175, 55, 0.18);
  font-size: 0.72rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--text-silk-ivory);
}
.cinema-8k-thumb-link:hover,
.cinema-8k-thumb-link--active {
  border-top-color: var(--gold-foil-bright);
  color: var(--gold-foil-bright);
  background: rgba(212, 175, 55, 0.15);
}
.cinema-8k-thumb-link__img {
  width: 28px;
  height: 28px;
  object-fit: cover;
}
/* SCREEN 2: 8K STUDIO 4-BOTTLE SHOWCASE RUNWAY */
.cinema-8k-runway {
  padding: 4.5rem var(--gutter-cinema);
  background: linear-gradient(180deg, #07080C 0%, #0B0C10 50%, #050507 100%);
  border-bottom: var(--hairline-rule);
}
.cinema-8k-runway__header {
  max-width: 1760px;
  margin: 0 auto 2.75rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 1.5rem;
}
.cinema-8k-runway__list {
  max-width: 1760px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
}
.cinema-8k-bottle-stage {
  flex: 1 1 360px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: radial-gradient(circle at 50% 32%, rgba(212, 175, 55, 0.14) 0%, rgba(11, 12, 16, 0.92) 72%);
  border-top: 1px solid rgba(212, 175, 55, 0.38);
  border-bottom: 1px solid rgba(212, 175, 55, 0.22);
  padding: 1.75rem 1.5rem;
  gap: 1.25rem;
}
.cinema-8k-bottle-stage__media {
  position: relative;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.cinema-8k-bottle-stage__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  transition: transform 420ms var(--ease-cinema);
}
.cinema-8k-bottle-stage:hover .cinema-8k-bottle-stage__img {
  transform: scale(1.04);
}
.cinema-8k-bottle-stage__tag {
  font-size: 0.66rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold-champagne);
}
.cinema-8k-bottle-stage__name {
  font-family: var(--font-display);
  font-size: 2rem;
  color: var(--text-silk-ivory);
  line-height: 1.05;
}
.cinema-8k-bottle-stage__desc {
  font-size: 0.86rem;
  color: var(--text-muted-alabaster);
  line-height: 1.5;
}
.cinema-8k-bottle-stage__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1rem;
  border-top: var(--hairline-subtle);
}
.cinema-8k-bottle-stage__price {
  font-family: var(--font-display);
  font-size: 1.65rem;
  color: var(--gold-foil-bright);
}
/* SCREEN 3: 8K DUAL CINEMA VISUAL DIPTYCH (BOTANICAL ELIXIR + KL DISCREET CONCIERGE) */
.cinema-8k-diptych {
  max-width: 1760px;
  margin: 0 auto;
  padding: 4.5rem var(--gutter-cinema);
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem;
  border-bottom: var(--hairline-rule);
}
.cinema-8k-diptych__pane {
  flex: 1 1 520px;
  display: flex;
  flex-direction: column;
  gap: 1.35rem;
}
.cinema-8k-diptych__img-wrap {
  width: 100%;
  height: 380px;
  overflow: hidden;
  border-top: 1px solid rgba(212, 175, 55, 0.42);
  border-bottom: 1px solid rgba(212, 175, 55, 0.22);
}
.cinema-8k-diptych__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
/* CLOSED-BY-DEFAULT SEO & CLINICAL VAULT DRAWER (ZERO TEXT WALL FOR HUMANS, 100% CRAWLABLE FOR GOOGLE) */
.onyxman-seo-vault-drawer {
  max-width: 1760px;
  margin: 2.5rem auto;
  padding: 0 var(--gutter-cinema);
}
.onyxman-seo-vault-drawer__summary {
  list-style: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.35rem 1.75rem;
  background: rgba(11, 12, 16, 0.92);
  border-top: var(--hairline-rule);
  border-bottom: var(--hairline-rule);
  color: var(--gold-foil-bright);
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
.onyxman-seo-vault-drawer__summary::-webkit-details-marker { display: none; }
.onyxman-seo-vault-drawer__body {
  padding-top: 2.5rem;
}
@media (max-width: 1024px) {
  .cinema-8k-hero { min-height: auto; max-height: none; padding: 2rem var(--gutter-cinema); }
  .cinema-8k-hero__inner { flex-direction: column-reverse; text-align: left; gap: 1.75rem; }
  .cinema-8k-hero__copy, .cinema-8k-hero__stage { flex: 1 1 100%; max-width: 100%; width: 100%; }
  .cinema-8k-hero__img { max-height: 360px; }
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html {
  background-color: #050507;
  color: #EAE6DF;
  font-family: var(--font-technical);
  font-size: 16px;
  line-height: 1.65;
  scroll-behavior: smooth;
  overflow-x: hidden;
}
body {
  background-color: #050507;
  color: #EAE6DF;
  min-height: 100vh;
  overflow-x: hidden;
  padding-bottom: 5.25rem;
}
img, picture, svg { display: block; max-width: 100%; height: auto; }
a { color: inherit; text-decoration: none; }
button, input, select, textarea { font: inherit; color: inherit; background: transparent; border: none; }
button { cursor: pointer; }
.foil-champagne-text {
  background: linear-gradient(135deg, #F3E5AB 0%, #D4AF37 40%, #FFF6D6 66%, #9A7B2C 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.editorial-kicker {
  font-family: var(--font-technical);
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.26em;
  color: var(--gold-champagne);
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
}
.editorial-kicker::before {
  content: "";
  display: inline-block;
  width: 2rem;
  height: 1px;
  background-color: var(--gold-champagne);
}
.editorial-headline-xl {
  font-family: var(--font-display);
  font-size: clamp(2.85rem, 6.2vw, 6.4rem);
  font-weight: 400;
  line-height: 0.98;
  letter-spacing: -0.02em;
  color: var(--text-silk-ivory);
}
.editorial-headline-lg {
  font-family: var(--font-display);
  font-size: clamp(2.1rem, 4.2vw, 4.15rem);
  font-weight: 400;
  line-height: 1.06;
  color: var(--text-silk-ivory);
}
.cta-foil-primary {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.25rem;
  padding: 1.05rem 1.95rem;
  background: linear-gradient(135deg, #F3E5AB 0%, #D4AF37 52%, #AA882E 100%);
  color: #050507;
  font-family: var(--font-technical);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  transition: transform 220ms var(--ease-cinema), filter 220ms ease;
}
.cta-foil-primary:hover { transform: translateY(-2px); filter: brightness(1.08); }
.cta-hairline-secondary {
  display: inline-flex;
  align-items: center;
  gap: 0.95rem;
  padding: 1rem 1.65rem;
  border-top: var(--hairline-rule);
  border-bottom: var(--hairline-rule);
  color: var(--gold-foil-bright);
  font-family: var(--font-technical);
  font-size: 0.76rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}
/* Header & Telemetry Bar */
.obsidian-header {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 900;
  background: rgba(5, 5, 7, 0.92);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: var(--hairline-rule);
}
.obsidian-header__telemetry-bar {
  border-bottom: var(--hairline-subtle);
  background-color: #050507;
  padding: 0.42rem var(--gutter-cinema);
  font-size: 0.68rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text-muted-alabaster);
}
.obsidian-header__telemetry-inner {
  max-width: 1840px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
}
.obsidian-header__telemetry-item {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}
.obsidian-header__telemetry-dot,
.discreet-seal-ribbon__pulse,
.sticky-mobile-ledger__status-dot,
.concierge-drawer__eta-dot {
  width: 7px;
  height: 7px;
  background-color: var(--gold-champagne);
  display: inline-block;
  box-shadow: 0 0 8px var(--gold-champagne);
}
.obsidian-header__telemetry-right {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  color: var(--gold-foil-bright);
}
.obsidian-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.95rem var(--gutter-cinema);
  max-width: 1840px;
  margin: 0 auto;
  gap: 1.5rem;
}
.obsidian-header__brand { display: flex; flex-direction: column; gap: 0.1rem; }
.obsidian-header__wordmark {
  font-family: var(--font-display);
  font-size: 1.65rem;
  font-weight: 600;
  letter-spacing: 0.24em;
}
.obsidian-header__submark {
  font-size: 0.6rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--gold-champagne);
}
.obsidian-header__nav {
  display: flex;
  align-items: center;
  gap: clamp(0.9rem, 1.6vw, 1.95rem);
  flex-wrap: wrap;
}
.obsidian-header__link {
  font-size: 0.74rem;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--text-muted-alabaster);
  padding: 0.3rem 0;
  border-bottom: 1px solid transparent;
}
.obsidian-header__link:hover,
.obsidian-header__link[aria-current="page"] {
  color: var(--gold-foil-bright);
  border-bottom-color: var(--gold-champagne);
}
.obsidian-header__actions { display: flex; align-items: center; gap: 1rem; }
.locale-switcher {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.74rem;
  letter-spacing: 0.16em;
  padding-right: 0.85rem;
  border-right: var(--hairline-subtle);
}
.locale-switcher__option { color: var(--text-muted-alabaster); }
.locale-switcher__option--active { color: var(--gold-foil-bright); font-weight: 700; }
.obsidian-header__vault-strip {
  border-top: var(--hairline-subtle);
  background: rgba(11, 12, 16, 0.92);
  padding: 0.5rem var(--gutter-cinema);
}
.obsidian-header__vault-strip-inner {
  max-width: 1840px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.obsidian-header__product-link {
  display: inline-flex;
  align-items: baseline;
  gap: 0.6rem;
  font-size: 0.73rem;
  padding: 0.2rem 0;
}
.obsidian-header__product-name {
  font-family: var(--font-display);
  font-size: 1.02rem;
  color: var(--gold-foil-bright);
}
.obsidian-header__product-meta { color: var(--text-ash-silver); font-size: 0.68rem; letter-spacing: 0.08em; }
.obsidian-header__mobile-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: 0.5rem;
}
.obsidian-header__mobile-bar {
  width: 22px;
  height: 1px;
  background-color: var(--gold-foil-bright);
}
.obsidian-mobile-curtain {
  display: none;
  background-color: #050507;
  border-top: var(--hairline-rule);
  padding: 2rem var(--gutter-cinema);
}
.obsidian-mobile-curtain[aria-hidden="false"] { display: block; }
.obsidian-mobile-curtain__inner { display: flex; flex-direction: column; gap: 2rem; }
.obsidian-mobile-curtain__links { display: flex; flex-direction: column; margin-top: 0.85rem; border-top: var(--hairline-subtle); }
.obsidian-mobile-curtain__link {
  display: flex;
  justify-content: space-between;
  padding: 0.9rem 0;
  border-bottom: var(--hairline-subtle);
  font-size: 0.92rem;
}
/* Discreet Seal Strip */
.discreet-seal-strip {
  background-color: #0B0C10;
  border-top: var(--hairline-rule);
  border-bottom: var(--hairline-rule);
  padding: var(--gutter-vertical) var(--gutter-cinema);
}
.discreet-seal-strip__container { max-width: 1680px; margin: 0 auto; display: flex; flex-direction: column; gap: 3rem; }
.discreet-seal-strip__header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2.5rem;
}
.discreet-seal-strip__header-left { flex: 1 1 420px; display: flex; flex-direction: column; gap: 1rem; }
.discreet-seal-strip__header-right { flex: 1 1 420px; display: flex; flex-direction: column; gap: 1.5rem; }
.discreet-seal-strip__lead { color: var(--text-muted-alabaster); font-size: 1rem; }
.discreet-seal-strip__actions { display: flex; flex-wrap: wrap; gap: 1rem; }
.discreet-seal-strip__waybill-preview {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.5rem;
  padding-top: 2rem;
  border-top: var(--hairline-rule);
}
.discreet-seal-strip__waybill-col { flex: 1 1 220px; display: flex; flex-direction: column; gap: 0.35rem; }
.discreet-seal-strip__waybill-label {
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  color: var(--gold-champagne);
  text-transform: uppercase;
}
.discreet-seal-strip__waybill-value { font-size: 0.92rem; color: var(--text-silk-ivory); }
/* Express Order Drawer */
.concierge-drawer-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1100;
  background-color: rgba(5, 5, 7, 0.84);
  backdrop-filter: blur(10px);
  opacity: 0;
  pointer-events: none;
  transition: opacity 420ms var(--ease-cinema);
}
.concierge-drawer-backdrop[aria-hidden="false"] { opacity: 1; pointer-events: auto; }
.concierge-drawer-panel {
  position: fixed;
  top: 0;
  right: 0;
  width: min(100vw, 580px);
  height: 100vh;
  z-index: 1200;
  background-color: #0B0C10;
  border-left: var(--hairline-rule);
  padding: 2rem clamp(1.25rem, 3vw, 2.5rem) 6rem;
  overflow-y: auto;
  transform: translateX(100%);
  transition: transform 460ms var(--ease-cinema);
}
.concierge-drawer-panel[aria-hidden="false"] { transform: translateX(0); }
.concierge-drawer__top-bar {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  padding-bottom: 1.5rem;
  border-bottom: var(--hairline-rule);
  margin-bottom: 1.5rem;
}
.concierge-drawer__title { font-size: 1.85rem; color: var(--text-silk-ivory); margin-top: 0.35rem; }
.concierge-drawer__close-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.55rem 0.95rem;
  border: var(--hairline-rule);
  font-size: 0.7rem;
  letter-spacing: 0.18em;
  color: var(--gold-foil-bright);
}
.concierge-drawer__intro { font-size: 0.88rem; color: var(--text-muted-alabaster); margin-bottom: 1.5rem; }
.drawer-formulation-list { display: flex; flex-direction: column; border-top: var(--hairline-rule); margin-top: 0.5rem; }
.drawer-formulation-option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 0.95rem 0.85rem;
  border-bottom: var(--hairline-subtle);
  text-align: left;
  width: 100%;
}
.drawer-formulation-option--selected,
.drawer-formulation-option[aria-checked="true"] {
  background: linear-gradient(90deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.02) 100%);
  border-bottom-color: var(--gold-champagne);
}
.drawer-formulation-option__left { display: flex; flex-direction: column; gap: 0.18rem; }
.drawer-formulation-option__sku { font-size: 0.65rem; letter-spacing: 0.2em; color: var(--gold-champagne); }
.drawer-formulation-option__title { font-family: var(--font-display); font-size: 1.25rem; color: var(--text-silk-ivory); }
.drawer-formulation-option__sub { font-size: 0.78rem; color: var(--text-muted-alabaster); }
.drawer-formulation-option__check { color: var(--gold-foil-bright); font-size: 1.1rem; }
.apothecary-field-hint { font-size: 0.75rem; color: var(--text-ash-silver); margin-top: 0.25rem; }
.concierge-drawer__eta-banner {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 0.65rem;
  padding: 0.65rem 0.85rem;
  background: rgba(212, 175, 55, 0.08);
  border-left: 2px solid var(--gold-champagne);
  font-size: 0.8rem;
  color: var(--gold-foil-bright);
}
.drawer-payment-options { display: flex; flex-direction: column; border-top: var(--hairline-rule); margin-top: 0.5rem; }
.drawer-payment-option {
  display: flex;
  align-items: flex-start;
  gap: 0.85rem;
  padding: 1rem 0.85rem;
  border-bottom: var(--hairline-subtle);
  cursor: pointer;
}
.drawer-payment-option--selected {
  background: linear-gradient(90deg, rgba(212, 175, 55, 0.13) 0%, transparent 100%);
  border-bottom-color: var(--gold-champagne);
}
.drawer-payment-option__body { display: flex; flex-direction: column; gap: 0.2rem; }
.drawer-payment-option__eyebrow { font-size: 0.64rem; letter-spacing: 0.2em; color: var(--gold-champagne); }
.drawer-payment-option__title { font-size: 0.95rem; color: var(--text-silk-ivory); }
.drawer-payment-option__sub { font-size: 0.78rem; color: var(--text-muted-alabaster); }
.concierge-drawer__summary-ledger {
  margin: 1.5rem 0;
  padding: 1.25rem 0;
  border-top: var(--hairline-rule);
  border-bottom: var(--hairline-rule);
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}
.concierge-drawer__summary-row {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  font-size: 0.85rem;
  color: var(--text-muted-alabaster);
}
.concierge-drawer__summary-row--total {
  padding-top: 0.65rem;
  border-top: var(--hairline-subtle);
  font-size: 1rem;
  color: var(--gold-foil-bright);
}
.concierge-drawer__total-figure { font-family: var(--font-display); font-size: 1.55rem; }
.concierge-drawer__submit-btn { width: 100%; justify-content: center; margin-top: 0.5rem; }
.concierge-drawer__error-msg {
  padding: 0.85rem;
  margin-bottom: 1rem;
  border-left: 2px solid #B83A3A;
  background: rgba(184, 58, 58, 0.14);
  color: #EAE6DF;
  font-size: 0.84rem;
}
.concierge-drawer__privacy-footnote {
  margin-top: 1rem;
  font-size: 0.74rem;
  color: var(--text-ash-silver);
  text-align: center;
}
.concierge-drawer__confirmation { display: flex; flex-direction: column; gap: 1.75rem; padding-top: 1rem; }
.concierge-drawer__confirmation[hidden] { display: none !important; }
.concierge-drawer__receipt-ledger {
  border-top: var(--hairline-rule);
  border-bottom: var(--hairline-rule);
  padding: 1.25rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.concierge-drawer__receipt-row { display: flex; justify-content: space-between; gap: 1rem; font-size: 0.88rem; }
.concierge-drawer__confirm-actions { display: flex; flex-direction: column; gap: 1rem; }
.concierge-drawer__action-link { width: 100%; justify-content: center; text-align: center; }
/* Footer Extensions */
.obsidian-footer__horizon {
  max-width: 1680px;
  margin: 0 auto 3.5rem;
  padding-bottom: 3rem;
  border-bottom: var(--hairline-rule);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;
  gap: 2.5rem;
}
.obsidian-footer__horizon-left { flex: 1 1 520px; display: flex; flex-direction: column; gap: 1rem; }
.obsidian-footer__horizon-lead { color: var(--text-muted-alabaster); font-size: 0.96rem; }
.obsidian-footer__horizon-right { display: flex; flex-direction: column; gap: 1rem; align-items: flex-start; }
.obsidian-footer__concierge-meta { font-size: 0.8rem; color: var(--text-muted-alabaster); display: flex; flex-direction: column; gap: 0.25rem; }
.obsidian-footer__concierge-emails { display: inline-flex; gap: 0.6rem; color: var(--gold-foil-bright); font-weight: 600; }
.obsidian-footer__brand-copy { font-size: 0.88rem; color: var(--text-muted-alabaster); margin-bottom: 0.75rem; }
.obsidian-footer__desk-ledger { display: flex; flex-direction: column; gap: 0.5rem; border-top: var(--hairline-subtle); padding-top: 0.75rem; }
.obsidian-footer__desk-row { display: flex; flex-direction: column; font-size: 0.78rem; }
.obsidian-footer__desk-label { font-size: 0.64rem; letter-spacing: 0.18em; color: var(--gold-champagne); }
.obsidian-footer__desk-val { color: var(--text-silk-ivory); }
.obsidian-footer__link--product { display: flex; flex-direction: column; gap: 0.1rem; padding: 0.25rem 0; }
.obsidian-footer__product-title { color: var(--text-silk-ivory); font-weight: 500; }
.obsidian-footer__product-meta { font-size: 0.74rem; color: var(--text-ash-silver); }
.obsidian-footer__subheading {
  font-size: 0.68rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold-champagne);
  margin-top: 0.85rem;
}
.obsidian-footer__states-band {
  max-width: 1680px;
  margin: 0 auto 3rem;
  padding: 2rem 0;
  border-top: var(--hairline-rule);
  border-bottom: var(--hairline-rule);
}
.obsidian-footer__states-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}
.obsidian-footer__states-all { font-size: 0.78rem; letter-spacing: 0.16em; text-transform: uppercase; color: var(--gold-foil-bright); }
.obsidian-footer__states-strip {
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem 1.5rem;
}
.obsidian-footer__state-link {
  display: inline-flex;
  align-items: baseline;
  gap: 0.45rem;
  font-size: 0.82rem;
  color: var(--text-muted-alabaster);
  padding: 0.25rem 0;
}
.obsidian-footer__state-link:hover { color: var(--gold-foil-bright); }
.obsidian-footer__state-code { font-size: 0.66rem; letter-spacing: 0.14em; color: var(--gold-champagne); }
.obsidian-footer__compliance-box {
  max-width: 1680px;
  margin: 0 auto 2rem;
  padding: 1.5rem;
  background-color: #0B0C10;
  border-left: 2px solid var(--gold-champagne);
}
.obsidian-footer__compliance-title {
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--gold-champagne);
  margin-bottom: 0.45rem;
}
.obsidian-footer__compliance-text { font-size: 0.8rem; color: var(--text-ash-silver); line-height: 1.6; }
/* Sticky Mobile Bottom Bar */
.sticky-mobile-ledger {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  z-index: 950;
  background: rgba(5, 5, 7, 0.96);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-top: var(--hairline-rule);
  padding: 0.65rem var(--gutter-cinema);
}
.sticky-mobile-ledger__inner {
  max-width: 1840px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.sticky-mobile-ledger__info { display: flex; flex-direction: column; gap: 0.12rem; }
.sticky-mobile-ledger__eyebrow-row { display: flex; align-items: center; gap: 0.45rem; }
.sticky-mobile-ledger__eyebrow {
  font-size: 0.64rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--gold-champagne);
}
.sticky-mobile-ledger__meta-row { display: flex; align-items: baseline; gap: 0.55rem; flex-wrap: wrap; }
.sticky-mobile-ledger__price { font-family: var(--font-display); font-size: 1.35rem; color: var(--gold-foil-bright); line-height: 1; }
.sticky-mobile-ledger__product { font-size: 0.78rem; color: var(--text-muted-alabaster); }
.sticky-mobile-ledger__cta { padding: 0.75rem 1.35rem; font-size: 0.74rem; white-space: nowrap; }
@media (max-width: 1024px) {
  .obsidian-header__nav, .obsidian-header__vault-strip { display: none; }
  .obsidian-header__mobile-toggle { display: inline-flex; }
}
@media (max-width: 640px) {
  .obsidian-header__telemetry-right { display: none; }
  .obsidian-header__inner { padding: 0.65rem 1rem; gap: 0.5rem; }
  .obsidian-header__wordmark { font-size: 1.25rem; letter-spacing: 0.16em; }
  .obsidian-header__submark { display: none; }
  .locale-switcher { padding-right: 0.45rem; font-size: 0.68rem; }
  .obsidian-header__cta { padding: 0.55rem 0.85rem; font-size: 0.66rem; letter-spacing: 0.12em; white-space: nowrap; }
  .sticky-mobile-ledger__product { display: none; }
}
`;

/**
 * Renders the 8K Visual-First Luxury Storefront Stage above the fold (`0px` scroll)
 * and wraps the deep SEO monograph body inside a sleek, closed-by-default `<details>` SEO Vault Drawer.
 */
export function renderVisualFirstStorefront(options = {}) {
  const { isMs = false, productSlug = 'horsemen', title = '', rawBody = '' } = options;

  const productVisualMap = {
    horsemen: {
      name: 'Horsemen',
      tagEn: '20 CAPSULES × 500MG · TONGKAT ALI & MACA',
      tagMs: '20 KAPSUL × 500MG · TONGKAT ALI & MACA',
      img: '/assets/products/horsemen-stage.webp',
      fallbackPng: '/assets/products/horsemen-stage.png',
      headlineEn: 'Horsemen — Royal Botanical Virility Reserve',
      headlineMs: 'Horsemen — Rizab Viriliti Botani Diraja',
      subEn: 'High-potency Malaysian Tongkat Ali & Peruvian Black Maca standardized to 500mg per capsule. Official RM 159 reserve in a 100% plain unmarked parcel.',
      subMs: 'Ekstrak Tongkat Ali Malaysia & Maca Hitam Peru 500mg setiap kapsul. Harga rasmi RM 159 dalam bungkusan rahsia tanpa nama produk.',
    },
    'hammer-of-thor': {
      name: 'Hammer of Thor',
      tagEn: '20 VEG. CAPSULES · TRIBULUS ENDURANCE',
      tagMs: '20 KAPSUL VEG. · KETAHANAN TRIBULUS',
      img: '/assets/products/hammer-of-thor-stage.webp',
      fallbackPng: '/assets/products/hammer-of-thor-stage.png',
      headlineEn: 'Hammer of Thor — Peak Tribulus Stamina Reserve',
      headlineMs: 'Hammer of Thor — Rizab Stamina Tribulus',
      subEn: '45% steroidal saponin Tribulus Terrestris & L-Arginine botanical complex in 20 vegetarian capsules. Discreet same-day Klang Valley & nationwide dispatch.',
      subMs: 'Kompleks Tribulus Terrestris 45% saponin & L-Arginine dalam 20 kapsul vegetarian. Penghantaran rahsia hari sama Lembah Klang & seluruh Malaysia.',
    },
    'grow-xl': {
      name: 'Grow XL',
      tagEn: '30 CAPSULES · #1 DAILY VITALITY BLEND',
      tagMs: '30 KAPSUL · FORMULASI HARIAN #1',
      img: '/assets/products/grow-xl-stage.webp',
      fallbackPng: '/assets/products/grow-xl-stage.png',
      headlineEn: 'Grow XL — 30-Day Extra-Strength Vitality Blend',
      headlineMs: 'Grow XL — Formulasi Tenaga Harian 30 Kapsul',
      subEn: 'Full 30-capsule monthly masculine performance protocol crafted with natural standardized botanical extracts. Zero clinic visit, 100% unmarked box.',
      subMs: 'Protokol prestasi lelaki 30 kapsul sebulan daripada ekstrak botani semula jadi. 100% bungkusan kotak kosong tanpa label.',
    },
    'magnum-pump-xr': {
      name: 'Magnum Pump XR',
      tagEn: '30 BLACK CAPSULES · TESTOSTERONE PRO SERIES',
      tagMs: '30 KAPSUL HITAM · SIRI PRO TESTOSTERON',
      img: '/assets/products/magnum-pump-xr-stage.webp',
      fallbackPng: '/assets/products/magnum-pump-xr-stage.png',
      headlineEn: 'Magnum Pump XR — Maximum Strength Pro Series',
      headlineMs: 'Magnum Pump XR — Siri Pro Kekuatan Maksimum',
      subEn: 'Extended-release L-Citrulline, L-Arginine HCl & Tongkat Ali nitric oxide complex in 30 glossy black capsules. Official RM 159 Malaysia reserve.',
      subMs: 'Kompleks nitrik oksida L-Citrulline, L-Arginine HCl & Tongkat Ali dalam 30 kapsul hitam. Harga rasmi RM 159 seluruh Malaysia.',
    },
  };

  const canonicalPath = String(options.canonicalPath || '/');
  const isSingleProductPage =
    canonicalPath.includes('horsemen') ||
    canonicalPath.includes('hammer-of-thor') ||
    canonicalPath.includes('grow-xl') ||
    canonicalPath.includes('magnum-pump-xr')
      ? !canonicalPath.includes('-vs-') && !canonicalPath.includes('compare') && !canonicalPath.includes('perbandingan') && !canonicalPath.includes('guides') && !canonicalPath.includes('panduan')
      : false;

  const activeSpec = productVisualMap[productSlug] || productVisualMap.horsemen;
  const heroVisualWebp = isSingleProductPage ? activeSpec.img : '/assets/products/onyxman-lineup-hero.webp';
  const heroVisualPng = isSingleProductPage ? activeSpec.fallbackPng : '/assets/products/onyxman-lineup-hero.png';

  const cleanPageTitle = String(title || '').split('—')[0].split('|')[0].trim();
  const heroHeadline = isSingleProductPage
    ? isMs
      ? activeSpec.headlineMs
      : activeSpec.headlineEn
    : cleanPageTitle && canonicalPath !== '/' && canonicalPath !== '/ms/'
      ? cleanPageTitle
      : isMs
        ? '4 Formulasi Botani Eksklusif Lelaki Malaysia.'
        : 'Malaysia’s Premier Men’s Botanical Apothecary.';

  const heroSub = isSingleProductPage
    ? isMs
      ? activeSpec.subMs
      : activeSpec.subEn
    : isMs
      ? 'Horsemen · Hammer of Thor · Grow XL · Magnum Pump XR. RM 159 sebotol dengan penghantaran bungkusan rahsia 100% tanpa nama ke seluruh 16 negeri Malaysia.'
      : 'Horsemen · Hammer of Thor · Grow XL · Magnum Pump XR. Official RM 159 reserve with 100% plain unmarked parcel delivery across all 16 Malaysia states.';

  const bottles = [
    {
      slug: 'horsemen',
      name: 'Horsemen',
      tag: isMs ? '20 KAPSUL × 500MG · TENAGA & STAMINA' : '20 CAPSULES × 500MG · VIRILITY RESERVE',
      desc: isMs
        ? 'Tongkat Ali Eurycoma longifolia & Maca Hitam Peru berkepekatan tinggi.'
        : 'Standardized Malaysian Tongkat Ali & Peruvian Black Maca vitality complex.',
      img: '/assets/products/horsemen-stage.webp',
      href: isMs ? '/ms/produk/horsemen/' : '/products/horsemen/',
    },
    {
      slug: 'hammer-of-thor',
      name: 'Hammer of Thor',
      tag: isMs ? '20 KAPSUL VEG. · TRIBULUS TERRESTRIS' : '20 VEG. CAPSULES · TRIBULUS ENDURANCE',
      desc: isMs
        ? 'Ekstrak Tribulus Terrestris 45% saponin untuk ketahanan fizikal puncak.'
        : 'High-saponin Tribulus Terrestris & L-Arginine endurance formulation.',
      img: '/assets/products/hammer-of-thor-stage.webp',
      href: isMs ? '/ms/produk/hammer-of-thor/' : '/products/hammer-of-thor/',
    },
    {
      slug: 'grow-xl',
      name: 'Grow XL',
      tag: isMs ? '30 KAPSUL · PROTOKOL HARIAN #1' : '30 CAPSULES · #1 SELLING DAILY BLEND',
      desc: isMs
        ? 'Bekalan penuh 30 hari ekstrak botani semula jadi kekuatan ekstra.'
        : 'Full 30-day extra-strength daily male performance botanical blend.',
      img: '/assets/products/grow-xl-stage.webp',
      href: isMs ? '/ms/produk/grow-xl/' : '/products/grow-xl/',
    },
    {
      slug: 'magnum-pump-xr',
      name: 'Magnum Pump XR',
      tag: isMs ? '30 KAPSUL HITAM · SIRI PRO TESTOSTERON' : '30 BLACK CAPSULES · TESTOSTERONE PRO SERIES',
      desc: isMs
        ? 'Formula pelepasan lanjutan Nitrik Oksida & tenaga puncak lelaki dewasa.'
        : 'Maximum-strength nitric oxide & extended-release vitality complex.',
      img: '/assets/products/magnum-pump-xr-stage.webp',
      href: isMs ? '/ms/produk/magnum-pump-xr/' : '/products/magnum-pump-xr/',
    },
  ];

  const bottleCardsHtml = bottles
    .map(
      (b) => `
      <article class="cinema-8k-bottle-stage">
        <a href="${b.href}" class="cinema-8k-bottle-stage__media" aria-label="${b.name}">
          <img
            src="${b.img}"
            alt="${b.name} — ${b.tag}"
            width="600"
            height="600"
            loading="lazy"
            decoding="async"
            class="cinema-8k-bottle-stage__img"
          />
        </a>
        <div>
          <span class="cinema-8k-bottle-stage__tag">${b.tag}</span>
          <h2 class="cinema-8k-bottle-stage__name"><a href="${b.href}">${b.name}</a></h2>
          <p class="cinema-8k-bottle-stage__desc">${b.desc}</p>
        </div>
        <div class="cinema-8k-bottle-stage__footer">
          <span class="cinema-8k-bottle-stage__price">RM 159</span>
          <div style="display:flex;gap:0.5rem;align-items:center;">
            <a href="${b.href}" class="cta-hairline-secondary" style="padding:0.65rem 0.95rem;font-size:0.68rem;">
              ${isMs ? 'LIHAT' : 'DETAILS'}
            </a>
            <button
              type="button"
              class="cta-foil-primary"
              style="padding:0.7rem 1.15rem;font-size:0.7rem;"
              data-open-order-drawer="true"
              data-order-product="${b.slug}"
              data-order-qty="1"
            >
              <span>${isMs ? 'BELI · RM 159' : 'ACQUIRE · RM 159'}</span>
            </button>
          </div>
        </div>
      </article>`
    )
    .join('');

  const quickThumbsHtml = bottles
    .map(
      (b) => `
      <a
        href="${b.href}"
        class="cinema-8k-thumb-link ${productSlug === b.slug && isSingleProductPage ? 'cinema-8k-thumb-link--active' : ''}"
      >
        <img src="${b.img}" alt="${b.name}" width="28" height="28" class="cinema-8k-thumb-link__img" />
        <span>${b.name} · RM 159</span>
      </a>`
    )
    .join('');

  return `
    <!-- SCREEN 1: 8K CINEMATIC VISUAL-FIRST HERO STAGE (0px SCROLL) -->
    <section class="cinema-8k-hero" aria-label="${isMs ? 'Pameran Utama 8K Onyxman' : 'Onyxman 8K Studio Hero Showcase'}">
      <img
        src="/assets/products/studio-hero-cinema-8k.webp"
        alt=""
        aria-hidden="true"
        width="1920"
        height="1080"
        class="cinema-8k-hero__backdrop"
      />
      <div class="cinema-8k-hero__inner">
        <div class="cinema-8k-hero__copy">
          <div class="cinema-8k-hero__eyebrow">
            <span class="cinema-8k-hero__eyebrow-dot" aria-hidden="true"></span>
            <span>${
              isMs
                ? 'APOTEKARI BOTANI LELAKI MALAYSIA · 100% BUNGKUSAN RAHSIA'
                : 'KUALA LUMPUR MEN’S BOTANICAL APOTHECARY · 100% UNMARKED PARCEL'
            }</span>
          </div>

          <h1 class="cinema-8k-hero__title">${heroHeadline}</h1>
          <p class="cinema-8k-hero__subtitle">${heroSub}</p>

          <!-- 1-CLICK RM 159 / RM 318 / RM 477 RESERVE TIER BUTTONS -->
          <div class="cinema-8k-hero__tier-strip" role="group" aria-label="Pricing Tiers">
            <button
              type="button"
              class="cinema-8k-tier-btn"
              data-open-order-drawer="true"
              data-order-product="${productSlug}"
              data-order-qty="1"
            >
              <span class="cinema-8k-tier-btn__qty">${isMs ? '1 BOTOL · PERCUBAAN' : '1 BOTTLE · TRIAL'}</span>
              <span class="cinema-8k-tier-btn__price">RM 159</span>
              <span class="cinema-8k-tier-btn__note">${isMs ? 'Bungkusan Rahsia' : 'Plain Unmarked Box'}</span>
            </button>

            <button
              type="button"
              class="cinema-8k-tier-btn cinema-8k-tier-btn--featured"
              data-open-order-drawer="true"
              data-order-product="${productSlug}"
              data-order-qty="2"
            >
              <span class="cinema-8k-tier-btn__qty">${isMs ? '2 BOTOL · PALING POPULAR' : '2 BOTTLES · MOST POPULAR'}</span>
              <span class="cinema-8k-tier-btn__price">RM 318</span>
              <span class="cinema-8k-tier-btn__note">${isMs ? 'Penghantaran Ekspres Percuma' : 'Free Priority Courier'}</span>
            </button>

            <button
              type="button"
              class="cinema-8k-tier-btn"
              data-open-order-drawer="true"
              data-order-product="${productSlug}"
              data-order-qty="3"
            >
              <span class="cinema-8k-tier-btn__qty">${isMs ? '3 BOTOL · KIT LENGKAP' : '3 BOTTLES · FULL CYCLE'}</span>
              <span class="cinema-8k-tier-btn__price">RM 477</span>
              <span class="cinema-8k-tier-btn__note">${isMs ? 'Keutamaan Hari Sama KL' : 'VIP Same-Day Dispatch'}</span>
            </button>
          </div>

          <div class="cinema-8k-hero__cta-row">
            <button
              type="button"
              class="cta-foil-primary"
              data-open-order-drawer="true"
              data-order-product="${productSlug}"
              data-order-qty="1"
            >
              <span>${isMs ? 'TEMPAH SEKARANG · RM 159' : 'ACQUIRE NOW · RM 159'}</span>
              <span aria-hidden="true">→</span>
            </button>
            <a href="#onyxman-8k-collection" class="cta-hairline-secondary">
              <span>${isMs ? 'LIHAT 4 BOTOL STUDIO' : 'VIEW ALL 4 BOTTLES'}</span>
            </a>
          </div>

          <div class="cinema-8k-hero__trust-row">
            <span>✦ ${isMs ? 'TIADA NAMA PRODUK DI KOTAK' : 'ZERO PRODUCT NAME ON PARCEL'}</span>
            <span>✦ ${isMs ? 'COD / DUITNOW QR / FPX' : 'COD / DUITNOW QR / FPX'}</span>
            <span>✦ ${isMs ? '16 NEGERI MALAYSIA' : 'ALL 16 MALAYSIA STATES'}</span>
          </div>
        </div>

        <div class="cinema-8k-hero__stage">
          <div class="cinema-8k-hero__glow" aria-hidden="true"></div>
          <div class="cinema-8k-hero__visual-frame">
            <picture>
              <source srcset="${heroVisualWebp}" type="image/webp" />
              <img
                src="${heroVisualPng}"
                alt="${escapeHtmlAttr(heroHeadline)}"
                width="960"
                height="680"
                fetchpriority="high"
                decoding="async"
                class="cinema-8k-hero__img"
              />
            </picture>
          </div>
          <div class="cinema-8k-hero__quick-thumbs">
            ${quickThumbsHtml}
          </div>
        </div>
      </div>
    </section>

    <!-- SCREEN 2: 8K STUDIO 4-FORMULATION SHOWCASE -->
    <section id="onyxman-8k-collection" class="cinema-8k-runway" aria-label="${
      isMs ? 'Koleksi 4 Formulasi Studio 8K' : '8K Studio Four Flagship Formulations'
    }">
      <div class="cinema-8k-runway__header">
        <div>
          <span class="editorial-kicker">${
            isMs ? 'KOLEKSI RASMI ONYXMAN MALAYSIA' : 'OFFICIAL ONYXMAN MALAYSIA COLLECTION'
          }</span>
          <h2 class="editorial-headline-lg" style="margin-top:0.4rem;">
            ${isMs ? 'Empat Formulasi Botani Tulen · RM 159 Sebotol' : 'Four Authentic Botanical Reserves · RM 159 Each'}
          </h2>
        </div>
        <a href="${isMs ? '/ms/perbandingan/' : '/compare/'}" class="cta-hairline-secondary">
          <span>${isMs ? 'BANDINGKAN KEEMPAT-EMPAT BOTOL →' : 'COMPARE ALL 4 FORMULATIONS →'}</span>
        </a>
      </div>
      <div class="cinema-8k-runway__list">
        ${bottleCardsHtml}
      </div>
    </section>

    <!-- SCREEN 3: 8K MACRO BOTANICAL EXTRACTION & KUALA LUMPUR DISCREET PARCEL DIPTYCH -->
    <section class="cinema-8k-diptych" aria-label="${
      isMs ? 'Kualiti Ekstrak & Bungkusan Rahsia' : '8K Botanical Purity & Discreet Parcel Architecture'
    }">
      <div class="cinema-8k-diptych__pane">
        <div class="cinema-8k-diptych__img-wrap">
          <img
            src="/assets/products/studio-vitality-extract-8k.webp"
            alt="${isMs ? 'Ekstrak Botani Tongkat Ali & Maca Hitam 8K' : '8K Macro Standardized Tongkat Ali & Black Maca Extracts'}"
            width="900"
            height="560"
            loading="lazy"
            decoding="async"
            class="cinema-8k-diptych__img"
          />
        </div>
        <span class="editorial-kicker">${isMs ? '01 · FITOKIMIA TULEN' : '01 · STANDARDIZED BOTANICAL PURITY'}</span>
        <h3 class="editorial-headline-lg" style="font-size:clamp(1.65rem,2.5vw,2.4rem);">
          ${isMs ? 'Tongkat Ali Malaysia, Maca Hitam & Tribulus Berkepekatan Tinggi.' : 'Malaysian Tongkat Ali, Peruvian Black Maca & High-Saponin Tribulus.'}
        </h3>
        <p style="color:var(--text-muted-alabaster);font-size:0.92rem;">
          ${
            isMs
              ? 'Setiap kapsul diformulasikan daripada ekstrak akar botani tulen tanpa bahan sintetik tersembunyi.'
              : 'Every capsule is standardized for adult male stamina, nitric oxide circulation, and daily vitality with zero hidden synthetics.'
          }
        </p>
      </div>

      <div class="cinema-8k-diptych__pane">
        <div class="cinema-8k-diptych__img-wrap">
          <img
            src="/assets/products/studio-discreet-box.webp"
            alt="${isMs ? 'Bungkusan Kotak Rahsia Tanpa Nama Onyxman Kuala Lumpur' : 'Onyxman Unmarked Plain Discreet Courier Box Kuala Lumpur'}"
            width="900"
            height="560"
            loading="lazy"
            decoding="async"
            class="cinema-8k-diptych__img"
          />
        </div>
        <span class="editorial-kicker">${isMs ? '02 · PRIVASI MUTLAK 16 NEGERI' : '02 · ZERO-TRACE PLAIN PARCEL PRIVACY'}</span>
        <h3 class="editorial-headline-lg" style="font-size:clamp(1.65rem,2.5vw,2.4rem);">
          ${isMs ? 'Kotak Kosong Tanpa Nama Produk · Penghantar Hanya Lihat "Onyxman Logistics KL".' : '100% Unmarked Outer Box · Waybill Shows Only "Onyxman Logistics KL".'}
        </h3>
        <p style="color:var(--text-muted-alabaster);font-size:0.92rem;">
          ${
            isMs
              ? 'Penghantaran hari sama di Kuala Lumpur & Selangor serta 1–3 hari ke seluruh Semenanjung, Sabah & Sarawak.'
              : 'Same-day Klang Valley dispatch and 1–3 day priority courier across Peninsular Malaysia, Sabah, and Sarawak.'
          }
        </p>
      </div>
    </section>

    <!-- CLOSED-BY-DEFAULT SEO & CLINICAL VAULT DRAWER (100% GOOGLEBOT INDEXABLE, ZERO VISUAL CLUTTER) -->
    <details class="onyxman-seo-vault-drawer">
      <summary class="onyxman-seo-vault-drawer__summary">
        <span>${
          isMs
            ? '📖 BUKA MONOGRAF LENGKAP, SPESIFIKASI MILIGRAM, JADUAL POSKOD 16 NEGERI & SOALAN LAZIM (SEO VAULT)'
            : '📖 EXPAND COMPLETE PHYTOCHEMICAL MONOGRAPHS, MILLIGRAM SPECS, 16-STATE POSTCODE DIRECTORY & CLINICAL FAQ'
        }</span>
        <span>+</span>
      </summary>
      <div class="onyxman-seo-vault-drawer__body">
        ${rawBody}
      </div>
    </details>`;
}

/**
 * Generates the complete HTML5 document for any Onyxman.my page (`MS-061`).
 *
 * @param {Object} options
 * @param {string} [options.lang='en-MY']
 * @param {string} [options.title]
 * @param {string} [options.description]
 * @param {string} [options.canonicalPath='/']
 * @param {string} [options.alternatePathEn]
 * @param {string} [options.alternatePathMs]
 * @param {string} [options.ogImage='/assets/products/onyxman-lineup-hero.webp']
 * @param {string | Object | Array} [options.schemaGraphJson]
 * @param {string} [options.bodyContent='']
 * @param {string} [options.activeNav='']
 * @param {string} [options.productSlug='horsemen']
 * @param {number} [options.defaultQty=1]
 * @param {boolean} [options.includeSealStrip=true]
 * @param {string} [options.extraHeadHtml='']
 * @returns {string} Full HTML5 document
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
      ? 'Onyxman Malaysia — Apotekari Botani Eksklusif untuk Stamina & Tenaga Lelaki Dewasa (RM 159)'
      : 'Onyxman Malaysia — Architectural Botanical Apothecary for Adult Men’s Vitality & Stamina (RM 159)');

  const description =
    options.description ||
    (isMs
      ? 'Formulasi botani tulen lelaki dewasa di Malaysia: Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR. Harga rasmi RM 159 sebotol dengan penghantaran bungkusan rahsia tanpa nama ke seluruh 16 negeri Malaysia.'
      : 'Authentic standardized botanical vitality formulations for adult men in Malaysia: Horsemen, Hammer of Thor, Grow XL & Magnum Pump XR. Official RM 159 reserve with 100% plain unmarked parcel delivery across all 16 Malaysia states.');

  const ogImageRel = options.ogImage || '/assets/products/onyxman-lineup-hero.webp';
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
    domain: 'https://onyxman.my',
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
<html lang="${escapeHtmlAttr(lang)}" dir="ltr" data-theme="obsidian-gold">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
    <title>${escapeHtmlAttr(title)}</title>
    <meta name="description" content="${escapeHtmlAttr(description)}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="theme-color" content="#050507" />
    <meta name="color-scheme" content="dark" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="geo.region" content="MY" />
    <meta name="geo.placename" content="Kuala Lumpur, Malaysia" />

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
    <meta property="og:site_name" content="Onyxman Malaysia" />
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

    <!-- Typography Preconnect & Editorial Font Loading (Cormorant Garamond, Syne, Space Grotesk) -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Space+Grotesk:wght@400;500;600;700&family=Syne:wght@600;700;800&display=swap"
    />

    <!-- Preload Hero Studio Visual for < 0.8s LCP -->
    <link rel="preload" as="image" href="${escapeHtmlAttr(ogImageRel)}" type="image/webp" />
    <link rel="stylesheet" href="/assets/css/luxury-tokens.css" />

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
  <body class="obsidian-body" data-locale="${escapeHtmlAttr(lang)}" data-default-product="${escapeHtmlAttr(productSlug)}">
    ${headerHtml}
    <main id="onyxman-main-stage" class="obsidian-main-stage" role="main">
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
