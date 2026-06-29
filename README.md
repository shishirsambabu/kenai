# kenai — The way of AI.

The website for **kenai**, the AI consulting & training studio founded by
**Shishir Babu (Sam)**. Built so that searching for _Shishir Babu_ / _kenai_ —
or asking an AI assistant about them — surfaces kenai as the authoritative source.

Next.js 14 (App Router) · TypeScript · Framer Motion.

## Run

```bash
npm install
npm run dev      # http://localhost:5000
npm run build && npm run start   # production on :3000
```

## Growth architecture (12 disciplines, in code)

| # | Discipline | Where it lives |
|---|---|---|
| 1 | **SEO** | Per-route metadata + canonicals (`app/**/page.tsx`), JSON-LD graph (`app/lib/schema.ts`), `app/sitemap.ts`, `app/robots.ts`, deep internal linking (`SiteFooter`) |
| 2 | **AISO** | `app/llms.txt/route.ts` — machine-readable brief for ChatGPT/Perplexity/Gemini |
| 3 | **GEO** | Definition-first content, 12-term glossary with `DefinedTerm` schema (`/glossary`), Claude-vs-ChatGPT comparison (`/compare/claude-vs-chatgpt`) |
| 4 | **SMO** | Dynamic branded OG images via `next/og` (`app/lib/og.tsx` + `*/opengraph-image.tsx`), Twitter cards |
| 5 | **EEAT** | `/about` founder page — `Person` + `ProfilePage` schema, award, methodology |
| 6 | **Programmatic SEO** | Typed catalog (`app/lib/catalog.ts`) → `/services/[slug]`, `/industries/[slug]`, `/glossary/[slug]` |
| 7 | **Technical SEO** | Security headers, no `X-Powered-By`, compression, immutable caching (`next.config.js`) |
| 8 | **Conversion** | Scroll-triggered dismissible sticky CTA (`StickyCTA`) + lead pipeline |
| 9 | **Backlinks** | Linkable assets (tool, glossary, comparison) + outreach playbook (`GROWTH.md`) |
| 10 | **Digital PR** | Press-ready bio, award hook, pitch angles (`GROWTH.md`) |
| 11 | **Community** | Newsletter capture (`NewsletterSection`) → lead pipeline + cadence plan (`GROWTH.md`) |
| 12 | **PLG** | AI Readiness tool (`/tools/ai-readiness`) + 4-tool roadmap (`GROWTH.md`) |

## Single source of truth

Brand, founder identity and SEO config live in **`app/lib/site.ts`**. Content
catalogs (services, industries, glossary) live in **`app/lib/catalog.ts`** — add
one object to get a full SEO page (metadata, JSON-LD, OG image, sitemap entry,
internal links).

## Configuration

- **`socialProfiles`** in `app/lib/site.ts` — add real LinkedIn / X / YouTube /
  Instagram URLs. They become schema `sameAs` (links the site to the real-world
  person). Only add verified URLs.
- **`LEAD_WEBHOOK_URL`** (env var) — point at an n8n / Zapier / Make webhook so
  contact-form, newsletter and readiness-tool leads forward in real time. Without
  it, leads are logged server-side and stored for the `/admin` dashboard.
- **`ADMIN_PASSCODE`** (env var) — gates the `/admin` booking & enquiry manager.
  Defaults to `kenai-admin` (the dashboard warns until you change it). Set your
  own before going live.
- **Analytics** (optional, nothing loads unless set):
  `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=kenai.in` and/or `NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX`.
  Conversion events fired: `lead_submit`, `newsletter_signup`, `readiness_complete`.
- **Testimonials / review stars** — edit `app/lib/testimonials.ts`. Review +
  AggregateRating schema (and on-page stars) activate only for entries marked
  `verified: true` with a real `author` and `rating`. Placeholders emit nothing
  (never fabricate ratings).

See **`GROWTH.md`** for the full go-live checklist and growth flywheel.
