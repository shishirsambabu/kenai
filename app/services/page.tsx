import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import ServicesIndex from "../components/ServicesIndex";
import { SERVICES, SITE } from "../lib/services";

const url = `${SITE.url}/services`;
const title = "AI Services — Consulting, Training & Automation | kenai";
const description =
  "kenai's full range of AI services: consulting, training, corporate workshops, automation, agent development, Claude & ChatGPT training, n8n consulting, prompt engineering and AI transformation programs.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: SITE.name, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${url}#page`,
        name: "AI Services",
        description,
        url,
        isPartOf: { "@id": `${SITE.url}/#website` },
      },
      {
        "@type": "ItemList",
        "@id": `${url}#list`,
        itemListElement: SERVICES.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: s.title,
          url: `${SITE.url}/services/${s.slug}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Services", item: url },
        ],
      },
    ],
  };

  return (
    <PageShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesIndex />
    </PageShell>
  );
}
