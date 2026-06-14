import type { MetadataRoute } from "next";
import { SERVICES, SITE } from "./lib/services";
import { INDUSTRIES } from "./lib/industries";
import { CASE_STUDIES } from "./lib/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: SITE.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE.url}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/industries`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE.url}/case-studies`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE.url}/tools/ai-readiness`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...SERVICES.map((s) => ({
      url: `${SITE.url}/services/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...INDUSTRIES.map((i) => ({
      url: `${SITE.url}/industries/${i.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...CASE_STUDIES.map((c) => ({
      url: `${SITE.url}/case-studies/${c.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
