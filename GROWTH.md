# kenai Growth System

This document maps the twelve growth disciplines to what is **built into the
site** and the **off-site playbook** to run. On-site assets are the leverage;
the off-site activities point links, citations and traffic at them.

---

## 1. SEO (on-page + structured)

**Built:** Rich metadata + canonicals on every route; JSON-LD graph
(Organization, ProfessionalService, Person, WebSite) sitewide; per-page
Service / Article / DefinedTerm / FAQPage / BreadcrumbList schema; dynamic
`sitemap.xml`; `robots.txt`; deep internal linking (nav, footer, in-content).

**Run next:** Add real search-volume keywords to titles as data comes in;
keep `lastModified` honest; submit sitemap in Google + Bing Search Console;
monitor Core Web Vitals.

## 2. AISO (AI Search Optimization)

**Built:** `/llms.txt` — a machine-readable site brief (services, industries,
case studies, definitions) for ChatGPT Search, Perplexity, Copilot, Gemini.
Clear H1s, definition-first content, Q&A FAQ blocks, descriptive alt text.

**Run next:** Keep `/llms.txt` current as catalogs grow. Ensure every key
fact about kenai appears as plain, declarative text (not only in images/JS).

## 3. GEO (Generative Engine Optimization)

**Built:** Quotable definition blocks open every service, industry and
glossary page; `/glossary` (12 terms w/ DefinedTerm schema); `/compare/
claude-vs-chatgpt`. These are the formats LLMs cite — definitions, comparisons,
FAQs, statistics.

**Run next:** Publish an original **statistics / benchmark** asset (e.g. "State
of AI adoption in Indian HR") — original data is the single most-cited GEO
format. Add more `/compare/*` and `/glossary/*` entries.

## 4. SMO (Social Media Optimization)

**Built:** Dynamic branded **Open Graph images** for every page (homepage,
services, industries, case studies) via `next/og`; Twitter `summary_large_image`
cards; OG titles/descriptions everywhere. Links now unfurl as branded cards.

**Run next — posting cadence (founder-led, LinkedIn primary):**
- 2–3×/week: one practical AI tip/prompt, one case-study insight, one POV.
- Repurpose each glossary term + comparison into a carousel.
- Every post links back to the relevant page (drives the OG card + traffic).

## 5. EEAT Authority Building

**Built:** `/about` founder page with rich Person schema, credentials, the
Indywood 2026 award, methodology and values; author = Organization on articles;
founder surfaced on homepage. Experience/Expertise/Authoritativeness/Trust all
have on-site evidence.

**Run next:** Add real client logos + named testimonials (replace placeholders);
link founder's LinkedIn/external profiles into Person `sameAs`; publish
bylined articles; collect Google reviews.

## 6. Programmatic SEO

**Built:** Data-driven page systems — 12 services, 10 industries, glossary
terms — each generated from a typed catalog so new entries ship a full
SEO-complete page (metadata + schema + internal links) by adding one object.

**Run next:** Highest-leverage expansion = **service × industry** pages
("AI Training for HR", "Automation for Operations") — ~real long-tail intent.
The catalogs already contain everything needed to generate these.

## 7. Technical SEO

**Built:** Security headers (HSTS, X-Frame-Options, X-Content-Type-Options,
Referrer-Policy, Permissions-Policy), `X-Powered-By` removed, immutable asset
caching, font preconnect, compression, all pages statically prerendered (SSG),
`.gitignore` for clean builds.

**Run next:** Add a real favicon/app-icon set; self-host fonts via `next/font`
to remove the render-blocking Google Fonts `@import`; audit the always-on
particle/scanline effects against CWV on low-end mobile.

## 8. Conversion Optimization

**Built:** Real lead capture (`/api/lead` → HubSpot/webhook); reusable
`LeadForm` with loading/success/error; scroll-triggered **sticky CTA**;
email-gated readiness tool; dual CTAs on every page; newsletter capture.

**Run next:** A/B test hero headline + primary CTA copy; add named social
proof near forms; instrument funnel events (form views → submits) once an
analytics tool is connected.

## 9. Backlink Acquisition

**Linkable assets built:** Free AI Readiness Assessment tool, AI glossary,
Claude-vs-ChatGPT comparison, case studies, (planned) original research.

**Run next:**
- Pitch the **free tool** + **glossary** to AI/HR newsletters and resource
  round-ups ("free AI readiness assessment").
- Guest posts on HR/L&D and India startup publications, linking to relevant
  service/industry pages.
- Get listed in AI-consultant and AI-training directories.
- Turn the comparison + research into shareable, citable reference pages.

## 10. Digital PR

**Assets:** Founder award (Indywood HR Excellence 2026) is a ready-made hook;
`/about` doubles as a press-ready founder bio; case studies are story seeds.

**Run next:** Build a one-page **media kit** (bio, headshot `/sam.jpg`, award,
boilerplate, contact). Pitch angles: "award-winning practitioner on AI in
Indian HR", original research data, contrarian POV ("don't just use AI —
master it"). Offer expert commentary to journalists (HARO-style).

## 11. Community Building

**Built:** Newsletter signup (PLG entry into email list) wired to the lead
pipeline; "the way of AI" brand line as a community banner.

**Run next:** Launch the newsletter on a cadence; seed a LinkedIn/WhatsApp
community for past workshop attendees; run a recurring free monthly "AI office
hours" or live build — fed by the readiness-tool leads.

## 12. Product-Led Growth

**Built:** AI Readiness Assessment — a genuinely useful free product that
captures email at the value moment (gated full result). The pattern is reusable.

**Run next — tool roadmap (each = new top-of-funnel + backlinks + leads):**
1. **AI Automation ROI Calculator** (hours/cost saved)
2. **Prompt Generator** (role-based)
3. **AI Skills Assessment** (individual)
4. **AI Maturity Model** (org, deeper than readiness)
Each should gate a richer result behind email and route to a consult.

---

## Lead pipeline configuration (action required)

Lead capture is live but needs a destination. Set **either** in the host env:

- `HUBSPOT_PORTAL_ID` + `HUBSPOT_FORM_GUID` (HubSpot Forms — no secret key), or
- `LEAD_WEBHOOK_URL` (n8n / Zapier / Make / Formspree).

Until set, leads are validated and logged server-side (never silently lost),
and the user still sees success.

## Highest-leverage next actions (ranked)

1. **Connect the lead pipeline** (env vars) — capture is wasted until pointed at a CRM.
2. **Replace placeholder testimonials/logos with real ones** — EEAT + conversion.
3. **Ship service × industry programmatic pages** — large qualified long-tail.
4. **Publish one original research/statistics asset** — backlinks + GEO citations.
5. **Add tools 2–4** (ROI calculator, prompt generator) — PLG compounding.
