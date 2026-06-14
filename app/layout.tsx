import type { Metadata } from "next";
import "./globals.css";
import { SITE, SERVICES } from "./lib/services";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "kenai — The way of AI. | AI Consulting & Training",
    template: "%s",
  },
  description:
    "kenai — practitioner-led AI consulting for HR and hands-on AI & automation training for businesses and colleges. Learn by doing. India-first, globally relevant.",
  keywords: [
    "AI consulting",
    "AI training",
    "corporate AI workshops",
    "AI automation",
    "AI agent development",
    "Claude training",
    "ChatGPT training",
    "n8n consulting",
    "prompt engineering",
    "AI for HR",
    "AI transformation",
    "AI training India",
  ],
  authors: [{ name: SITE.founder }],
  creator: SITE.founder,
  publisher: SITE.name,
  alternates: { canonical: SITE.url },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    title: "kenai — The way of AI.",
    description:
      "AI consulting for HR and hands-on AI & automation training for businesses and colleges. Learn by doing — the way of AI.",
    url: SITE.url,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "kenai — The way of AI.",
    description:
      "AI consulting for HR and hands-on AI & automation training for businesses and colleges. Learn by doing.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  category: "technology",
};

function GlobalJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE.url}/#organization`,
        name: SITE.name,
        url: SITE.url,
        description: SITE.description,
        email: SITE.email,
        slogan: SITE.tagline,
        founder: { "@id": `${SITE.url}/#founder` },
        areaServed: ["IN", "Worldwide"],
        knowsAbout: [
          "Artificial Intelligence",
          "AI Consulting",
          "AI Training",
          "Workflow Automation",
          "Prompt Engineering",
          "AI for HR",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE.url}/#service`,
        name: SITE.name,
        description: SITE.description,
        url: SITE.url,
        email: SITE.email,
        priceRange: "$$",
        areaServed: ["IN", "Worldwide"],
        parentOrganization: { "@id": `${SITE.url}/#organization` },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "AI Services",
          itemListElement: SERVICES.map((s) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: s.title,
              url: `${SITE.url}/services/${s.slug}`,
            },
          })),
        },
      },
      {
        "@type": "Person",
        "@id": `${SITE.url}/#founder`,
        name: SITE.founder,
        alternateName: SITE.founderAlias,
        jobTitle: "AI Trainer & L&D Consultant, Founder of kenai",
        worksFor: { "@id": `${SITE.url}/#organization` },
        knowsAbout: ["Artificial Intelligence", "Learning & Development", "AI for HR", "Automation"],
        award: "Indywood HR Excellence Award 2026 — Excellence in Digital HR Transformation",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE.url}/#website`,
        url: SITE.url,
        name: SITE.name,
        description: SITE.description,
        publisher: { "@id": `${SITE.url}/#organization` },
        inLanguage: "en",
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <GlobalJsonLd />
        {children}
      </body>
    </html>
  );
}
