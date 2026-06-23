import type { Metadata } from "next";
import PageShell from "../../components/PageShell";
import AiReadinessTool from "../../components/AiReadinessTool";
import { SITE } from "../../lib/services";

const url = `${SITE.url}/tools/ai-readiness`;
const title = "AI Readiness Assessment — Free 2-Minute Benchmark | kenai";
const description =
  "Free AI Readiness Assessment from kenai. Answer six quick questions to benchmark how ready your organisation is to adopt AI — get your score and a tailored next step.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: SITE.name, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function AiReadinessPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${url}#app`,
        name: "AI Readiness Assessment",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url,
        description,
        provider: { "@id": `${SITE.url}/#organization` },
        offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "AI Readiness Assessment", item: url },
        ],
      },
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AiReadinessTool />
    </PageShell>
  );
}
