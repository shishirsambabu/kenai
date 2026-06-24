# kenai Growth Playbook

**Goal:** when anyone Googles _Shishir Babu_ / _kenai_ — or asks an AI assistant
about them — kenai shows up as the authoritative answer.

This file is the operating manual for everything that isn't code: backlinks,
digital PR, community and the product-led-growth roadmap. The site already ships
the technical foundation (SEO, AISO, GEO, SMO, EEAT, schema, sitemap, llms.txt).
This is how you compound it.

---

## 0. Go-live checklist (do these first)

These are one-time setup steps that turn the in-code work into live ranking power.

- [ ] **Deploy to `kenai.in`** and confirm HTTPS. All canonical URLs and schema
      assume `https://kenai.in` (configured in `app/lib/site.ts`).
- [ ] **Google Search Console** — verify the domain, then submit
      `https://kenai.in/sitemap.xml`. Request indexing for `/`, `/about`,
      `/services`, `/glossary`, `/compare/claude-vs-chatgpt`.
- [ ] **Bing Webmaster Tools** — verify + submit the same sitemap (powers
      ChatGPT/Copilot search).
- [ ] **Google Business Profile** — create one for kenai (category: "Training
      Provider" / "Business Management Consultant"). Strong local + entity signal.
- [ ] **Fill `socialProfiles` in `app/lib/site.ts`** with the *real* LinkedIn,
      X/Twitter, YouTube and Instagram URLs. These become schema `sameAs`, which
      is how Google connects the website to the real-world person. _Only add URLs
      that genuinely belong to Shishir Babu — a wrong one hurts the Knowledge Graph._
- [ ] **Set `LEAD_WEBHOOK_URL`** (env var) to an n8n / Zapier / Make webhook (or
      an email-forwarding endpoint) so contact-form, newsletter and AI-readiness
      leads land in your inbox/CRM in real time. Without it, leads are still
      logged server-side.
- [ ] **Wikidata / entity** — once 2–3 authoritative backlinks exist (below),
      create a Wikidata item for "Shishir Babu" linking the site, award and
      profiles. This is the single biggest lever for a Knowledge Panel.

---

## 1. Linkable assets (what earns links)

People link to *useful things*, not to a homepage. We've shipped four:

| Asset | URL | Pitch angle |
|---|---|---|
| **AI Readiness Tool** (free) | `/tools/ai-readiness` | "Free 2-minute AI readiness score for teams" |
| **AI Glossary** (12 terms) | `/glossary` | "Plain-English AI glossary" — evergreen reference |
| **Claude vs ChatGPT** | `/compare/claude-vs-chatgpt` | "Practical, no-hype comparison" |
| **Gumroad resources** (free) | https://shishirbabu.gumroad.com | HR/L&D blueprints & systems |

**Backlog of next assets** (each = a new link magnet):
- "AI for HR" benchmark report (survey 100+ HR pros, publish data)
- A free n8n automation template pack
- An interactive prompt library for HR/L&D

---

## 2. Backlink outreach playbook

Work the list top-down; quality > quantity. Track in a simple sheet
(Target / Type / Contact / Status / Link).

**Tier 1 — fast, high-trust:**
1. **Personal profiles** (do today): LinkedIn featured section, X bio, Gumroad
   profile, Instagram bio, YouTube about → all link to `kenai.in`.
2. **Directories**: Clutch, GoodFirms, DesignRush, Crunchbase (company),
   relevant India startup/training directories.
3. **Speaker / trainer listings**: list Shishir on training-marketplace and
   speaker-bureau sites.

**Tier 2 — content-driven:**
4. **Guest posts**: pitch "AI for HR" / "learn-by-doing AI training" articles to
   HR and L&D publications (People Matters, HR Katha, ETHRWorld, SHRM India blogs).
   Each post links back to `/about` and a relevant `/services/*` page.
5. **Podcasts**: pitch Shishir as a guest on HR-tech, L&D and India-startup
   podcasts (angle in §3). Show notes = a backlink.
6. **Roundups & resource pages**: find "best AI training" / "AI glossary" /
   "Claude vs ChatGPT" roundups and request inclusion.

**Tier 3 — earned/scaled:**
7. **HARO / Qwoted / SourceBottle**: answer journalist queries on AI, HR-tech and
   the future of work → press mentions with links.
8. **Data PR**: publish the "AI for HR" benchmark (§1) and pitch the data to
   journalists.

**Outreach email skeleton:**
> Subject: {specific, useful thing} for {their audience}
> Hi {name} — I'm Shishir Babu, an AI trainer (Indywood HR Excellence Award
> 2026). I built {asset} that your readers on {topic} would find useful: {link}.
> Happy to write an original piece / share data / record a short clip — whatever
> fits. No strings.

---

## 3. Digital PR

### Press-ready founder bio (copy/paste)

**Short (50 words):**
> Shishir Babu (Sam) is an AI trainer and L&D consultant, and the founder of
> kenai — an AI training studio that helps HR teams, businesses and colleges
> learn AI by doing. He won the Indywood HR Excellence Award 2026 and has trained
> 100+ professionals across 15+ organisations.

**One-liner:**
> Shishir Babu — founder of kenai, AI trainer & L&D consultant, Indywood HR
> Excellence Award 2026.

**Long (bio for talks/articles):** see `founder.bio` in `app/lib/site.ts`.

### The award hook
> _"Indywood HR Excellence Award 2026 — Excellence in Digital HR Transformation"_
Lead with this in every pitch. Award wins are a clean news peg journalists accept.

### Pitch angles (pick per outlet)
- **The contrarian:** "Most corporate AI training fails — here's what actually
  sticks." (learn-by-doing thesis)
- **The India angle:** "India-first AI upskilling: closing the gap between the
  syllabus and the job market."
- **HR/future-of-work:** "AI won't replace HR — but HR that uses AI will replace
  HR that doesn't."
- **Practical/tool:** "I built a free AI-readiness test for teams — here's what
  the scores reveal."
- **Claude-native:** "Why our HR training is Claude-native" (ties to
  `/compare/claude-vs-chatgpt`).

### Press kit (assemble in a shared folder)
- High-res photo (`/sam.jpg` is on-site), logo, the bios above, award details,
  3 stats (100+ trained / 40+ workshops / 15+ orgs), and 2–3 client quotes.

---

## 4. Community & newsletter cadence

The newsletter capture (homepage + footer) and the readiness tool feed the same
lead pipeline (`/api/lead`). Turn subscribers into a community.

**Newsletter — "The Signal":** one practical AI idea per week.
- **Cadence:** weekly, same day (consistency > volume).
- **Format:** 1 usable thing — a prompt, an n8n workflow, or a framework — pulled
  from real consulting/training work. ~300 words. One CTA.
- **Rotation:** Week 1 prompt · Week 2 automation · Week 3 framework · Week 4
  case study / behind-the-scenes.
- **Repurpose** each issue into a LinkedIn post + an X thread (3× the reach, 3×
  the backlink/profile-visit surface).

**Community loops:**
- Reply to every newsletter response personally (early-stage trust).
- Quarterly free live "AI clinic" webinar → recorded → YouTube (more indexable
  surface + backlinks).
- Encourage tool-result sharing ("I scored 64/100 on kenai's AI readiness test").

---

## 5. Product-led growth (PLG) roadmap

**Live now:** AI Readiness Assessment (`/tools/ai-readiness`) — free, no signup,
instant score + tailored next step + email-captured action plan.

**Next 4 free tools** (each is a ranking surface, a link magnet, and a lead
source — build them the same way: a typed page under `/tools/*` + a client island):

1. **Prompt Grader** — paste a prompt, get a score + improvement tips.
   Targets "how to write a good AI prompt". Feeds prompt-engineering training.
2. **AI ROI / Hours-Saved Calculator** — estimate annual hours saved by
   automating tasks. Great for "AI ROI" + sales conversations.
3. **JD Optimiser (HR)** — paste a job description, get an AI-improved version +
   bias/clarity flags. Bullseye for the HR audience.
4. **AI Policy Generator** — answer a few questions, get a starter responsible-AI
   usage policy. Targets "AI usage policy template"; feeds advisory.

**PLG principle:** every tool gives real value free, captures an email into
`/api/lead`, and routes to the most relevant `/services/*` page.

---

## 6. Measurement

- **Search Console:** track impressions/clicks for `Shishir Babu`, `kenai`,
  `AI training for HR`, `Claude vs ChatGPT`, glossary terms.
- **Entity check:** monthly, Google `Shishir Babu kenai` and ask ChatGPT/
  Perplexity/Gemini "Who is Shishir Babu?" — watch the answer improve as
  backlinks + `sameAs` + `/llms.txt` take effect.
- **Leads:** count `/api/lead` submissions by `source`.
- **Backlinks:** monitor referring domains (Ahrefs/Search Console links report).

> Ranking is compounding, not instant. Ship the go-live checklist this week,
> then run §2–§5 every week. The code is the foundation; this playbook is the
> flywheel.
