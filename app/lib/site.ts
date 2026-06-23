/**
 * Single source of truth for the kenai brand, founder identity, and SEO.
 *
 * Everything SEO/AISO/GEO-related (metadata, JSON-LD, sitemap, llms.txt,
 * OG images) reads from here so the entity stays consistent everywhere —
 * which is exactly what builds a Google Knowledge Graph panel and trains
 * AI assistants to answer "who is Shishir Babu / what is kenai".
 */

export const siteConfig = {
  name: "kenai",
  legalName: "kenai",
  brandName: "KenAI",
  tagline: "The way of AI.",
  // Canonical production origin. No trailing slash.
  url: "https://kenai.in",
  locale: "en_IN",
  email: "hello@kenai.in",
  foundingYear: 2024,
  areaServed: ["India", "Worldwide"],

  description:
    "kenai is an AI consulting and training studio led by Shishir Babu (Sam). We help HR teams, businesses and colleges actually do AI — hands-on workshops, bootcamps, automation and advisory. Learn by doing. The way of AI.",

  shortDescription:
    "AI consulting for HR and hands-on AI & automation training for businesses and colleges — by Shishir Babu.",

  keywords: [
    "kenai",
    "KenAI",
    "Shishir Babu",
    "Shishir Babu AI",
    "Shishir Babu kenai",
    "AI trainer India",
    "AI consultant for HR",
    "AI training for businesses",
    "AI training for colleges",
    "AI automation training",
    "L&D AI consultant",
    "Claude training",
    "n8n automation training",
    "corporate AI workshops India",
    "AI bootcamp India",
    "the way of AI",
  ],
} as const;

/**
 * The founder entity. Drives Person schema (EEAT) and the /about page.
 */
export const founder = {
  name: "Shishir Babu",
  alternateName: "Sam",
  // Used in sentences: "Shishir Babu (Sam)"
  displayName: "Shishir Babu",
  jobTitle: "AI Trainer & L&D Consultant",
  role: "Founder",
  worksFor: siteConfig.name,
  nationality: "Indian",
  homeLocation: "India",
  email: siteConfig.email,
  image: `${siteConfig.url}/sam.jpg`,
  knowsAbout: [
    "Artificial Intelligence",
    "AI for Human Resources",
    "Learning & Development",
    "Prompt Engineering",
    "AI Automation",
    "Claude (Anthropic)",
    "n8n workflow automation",
    "Corporate AI training",
    "AI adoption strategy",
    "Responsible AI",
  ],
  award:
    "Indywood HR Excellence Award 2026 — Excellence in Digital HR Transformation",
  awardShort: "Indywood HR Excellence Award 2026",
  bio: "Shishir Babu (Sam) is the founder of kenai, an AI trainer and Learning & Development consultant based in India who works at the intersection of people and technology. He doesn't teach AI from a deck — he builds with it daily and teaches what actually works, having trained 100+ professionals across 15+ organisations and colleges through 40+ hands-on workshops.",
} as const;

/**
 * Verified, owned public profiles only. These become schema.org `sameAs`,
 * which is how Google links the website to the real-world entity.
 *
 * IMPORTANT: only add URLs that genuinely belong to Shishir Babu / kenai.
 * A wrong sameAs hurts the Knowledge Graph. Fill the empty ones when ready.
 */
export const socialProfiles = {
  gumroad: "https://shishirbabu.gumroad.com", // verified store
  linkedin: "", // e.g. https://www.linkedin.com/in/<handle>
  twitter: "", // e.g. https://x.com/<handle>
  youtube: "",
  instagram: "",
} as const;

/** Non-empty profile URLs, ready to drop into JSON-LD `sameAs`. */
export const sameAs: string[] = Object.values(socialProfiles).filter(Boolean);

export const contact = {
  email: siteConfig.email,
  store: socialProfiles.gumroad,
} as const;

/** Absolute URL helper. Pass a path beginning with "/". */
export function absoluteUrl(path = "/"): string {
  if (!path.startsWith("/")) path = `/${path}`;
  return `${siteConfig.url}${path === "/" ? "" : path}`;
}
