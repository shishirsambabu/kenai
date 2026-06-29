import type { MetadataRoute } from "next";
import { siteConfig } from "./lib/site";
import { services, industries, glossary } from "./lib/catalog";
import { locations } from "./lib/locations";
import { audiences } from "./lib/audiences";
import { comparisons } from "./lib/comparisons";
import { posts } from "./lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const url = (p: string) => `${siteConfig.url}${p}`;

  const staticPages: MetadataRoute.Sitemap = [
    { url: url("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: url("/bootcamp"), lastModified: now, changeFrequency: "weekly", priority: 0.95 },
    { url: url("/pricing"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/services"), lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: url("/industries"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/glossary"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    {
      url: url("/compare/claude-vs-chatgpt"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: url("/tools/ai-readiness"),
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { url: url("/ai-training"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/ai-for"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: url("/blog"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const blogPages: MetadataRoute.Sitemap = posts.map((p) => ({
    url: url(`/blog/${p.slug}`),
    lastModified: new Date(p.updated ?? p.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const locationPages: MetadataRoute.Sitemap = locations.map((l) => ({
    url: url(`/ai-training/${l.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const audiencePages: MetadataRoute.Sitemap = audiences.map((a) => ({
    url: url(`/ai-for/${a.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const comparePages: MetadataRoute.Sitemap = comparisons.map((c) => ({
    url: url(`/compare/${c.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const servicePages: MetadataRoute.Sitemap = services.map((s) => ({
    url: url(`/services/${s.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const industryPages: MetadataRoute.Sitemap = industries.map((i) => ({
    url: url(`/industries/${i.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const glossaryPages: MetadataRoute.Sitemap = glossary.map((g) => ({
    url: url(`/glossary/${g.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticPages,
    ...servicePages,
    ...industryPages,
    ...glossaryPages,
    ...locationPages,
    ...audiencePages,
    ...comparePages,
    ...blogPages,
  ];
}
