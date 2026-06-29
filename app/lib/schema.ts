/**
 * JSON-LD schema graph. This is what tells Google and AI assistants
 * *who* Shishir Babu / kenai is as a real-world entity, and how every
 * page relates to it. The @id values are stable so nodes link together
 * into one knowledge graph.
 */

import { siteConfig, founder, sameAs, absoluteUrl } from "./site";
import type { Service, Industry, GlossaryTerm, FAQ } from "./catalog";
import type { Program } from "./programs";

const ORG_ID = `${siteConfig.url}/#organization`;
const PERSON_ID = `${siteConfig.url}/#shishir-babu`;
const WEBSITE_ID = `${siteConfig.url}/#website`;

/** The Person node — Shishir Babu (EEAT + entity for "who is" queries). */
export function personSchema() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: founder.name,
    alternateName: founder.alternateName,
    jobTitle: founder.jobTitle,
    description: founder.bio,
    image: founder.image,
    url: absoluteUrl("/about"),
    email: `mailto:${founder.email}`,
    nationality: founder.nationality,
    knowsAbout: [...founder.knowsAbout],
    award: founder.award,
    worksFor: { "@id": ORG_ID },
    founderOf: { "@id": ORG_ID },
    ...(sameAs.length ? { sameAs } : {}),
  };
}

/** The Organization / ProfessionalService node — kenai. */
export function organizationSchema() {
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORG_ID,
    name: siteConfig.name,
    alternateName: [siteConfig.brandName, "kenai — The way of AI."],
    legalName: siteConfig.legalName,
    slogan: siteConfig.tagline,
    url: siteConfig.url,
    logo: absoluteUrl("/icon"),
    image: absoluteUrl("/opengraph-image"),
    description: siteConfig.description,
    email: `mailto:${siteConfig.email}`,
    foundingDate: String(siteConfig.foundingYear),
    founder: { "@id": PERSON_ID },
    knowsAbout: [...founder.knowsAbout],
    areaServed: siteConfig.areaServed.map((name) => ({
      "@type": "Place",
      name,
    })),
    address: { "@type": "PostalAddress", addressCountry: "IN" },
    ...(sameAs.length ? { sameAs } : {}),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "kenai AI training & consulting",
      itemListElement: [
        "AI Training for HR & L&D",
        "AI & Automation Training for Business",
        "AI Training for Colleges & Students",
        "Corporate AI Training",
        "AI Advisory & Strategy",
        "AI Automation with n8n & Agents",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name },
      })),
    },
  };
}

/** The WebSite node. */
export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: siteConfig.url,
    name: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.shortDescription,
    inLanguage: "en",
    publisher: { "@id": ORG_ID },
    about: { "@id": PERSON_ID },
  };
}

/** Site-wide graph injected on every page. */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(), personSchema(), websiteSchema()],
  };
}

/** BreadcrumbList for any page. Pass [{name, path}] in order. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

/** FAQPage for any page that has Q&A (rich results + AI answers). */
export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Service schema for a service page. */
export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    serviceType: service.shortName,
    description: service.summary,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: { "@id": ORG_ID },
    areaServed: siteConfig.areaServed.map((name) => ({ "@type": "Place", name })),
    audience: { "@type": "Audience", audienceType: service.forWho.join(", ") },
  };
}

/** Industry pages render as a focused Service offering too. */
export function industryServiceSchema(industry: Industry) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: industry.name,
    description: industry.summary,
    url: absoluteUrl(`/industries/${industry.slug}`),
    provider: { "@id": ORG_ID },
    areaServed: siteConfig.areaServed.map((name) => ({ "@type": "Place", name })),
  };
}

/** DefinedTerm for a glossary entry (GEO — answers "what is X"). */
export function definedTermSchema(term: GlossaryTerm) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: term.abbr ? `${term.term} (${term.abbr})` : term.term,
    description: term.definition,
    url: absoluteUrl(`/glossary/${term.slug}`),
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: "kenai AI Glossary",
      url: absoluteUrl("/glossary"),
    },
  };
}

/** WebPage / Article wrapper for editorial pages (about, compare). */
export function articleSchema(opts: {
  headline: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: opts.headline,
    description: opts.description,
    url: absoluteUrl(opts.path),
    author: { "@id": PERSON_ID },
    publisher: { "@id": ORG_ID },
    image: absoluteUrl(`${opts.path}/opengraph-image`),
    datePublished: opts.datePublished ?? "2026-01-01",
    dateModified: opts.dateModified ?? new Date().toISOString().slice(0, 10),
    mainEntityOfPage: absoluteUrl(opts.path),
  };
}

/** Course schema for a training program (Google course rich results). */
export function courseSchema(program: Program) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: program.name,
    description: program.summary,
    url: absoluteUrl(`/${program.slug === "ai-bootcamp" ? "bootcamp" : program.slug}`),
    provider: { "@id": ORG_ID },
    educationalLevel: program.level,
    inLanguage: "en",
    teaches: program.outcomes,
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: ["online", "onsite"],
        courseWorkload: `P${program.durationDays}D`,
        instructor: { "@id": PERSON_ID },
      },
    ],
    offers: {
      "@type": "Offer",
      price: String(program.priceINR),
      priceCurrency: "INR",
      category: "Paid",
      availability: "https://schema.org/InStock",
      url: absoluteUrl("/bootcamp"),
    },
  };
}

/** Offer list for the pricing page. */
export function offerCatalogSchema(
  items: { name: string; price: string; url: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "kenai pricing",
    itemListElement: items.map((it) => ({
      "@type": "Offer",
      name: it.name,
      price: it.price,
      priceCurrency: "INR",
      url: absoluteUrl(it.url),
      seller: { "@id": ORG_ID },
    })),
  };
}

export { ORG_ID, PERSON_ID, WEBSITE_ID };
