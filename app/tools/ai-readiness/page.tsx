import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "../../lib/site";
import { breadcrumbSchema } from "../../lib/schema";
import JsonLd from "../../components/JsonLd";
import PageShell from "../../components/PageShell";
import { Container, Breadcrumbs, Eyebrow, PageTitle, Lead, RelatedLinks, Section } from "../../components/page-ui";
import AiReadinessTool from "./AiReadinessTool";

export const metadata: Metadata = {
  title: "Free AI Readiness Assessment — Score Your Team in 2 Minutes",
  description:
    "A free AI readiness assessment for teams. Answer 7 quick questions and get an instant score, your readiness tier and a tailored next step. By kenai / Shishir Babu.",
  alternates: { canonical: "/tools/ai-readiness" },
  openGraph: {
    title: "Free AI Readiness Assessment — kenai",
    description:
      "Score your team's AI readiness in 2 minutes and get a tailored action plan. By Shishir Babu.",
    url: absoluteUrl("/tools/ai-readiness"),
  },
};

export default function AiReadinessPage() {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "kenai AI Readiness Assessment",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: absoluteUrl("/tools/ai-readiness"),
    description:
      "A free interactive assessment that scores a team's AI readiness and recommends next steps.",
    offers: { "@type": "Offer", price: "0", priceCurrency: "INR" },
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };

  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Tools", path: "/tools/ai-readiness" },
          { name: "AI Readiness", path: "/tools/ai-readiness" },
        ])}
      />
      <JsonLd data={appSchema} />

      <Container width={860} style={{ paddingTop: 40 }}>
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "AI Readiness Tool", path: "/tools/ai-readiness" },
          ]}
        />
        <Eyebrow>Free tool · PLG</Eyebrow>
        <PageTitle>
          How AI-ready is{" "}
          <span style={{ color: "#00F0FF", textShadow: "0 0 22px rgba(0,240,255,.5)" }}>
            your team?
          </span>
        </PageTitle>
        <Lead>
          Answer 7 quick questions to get an instant AI readiness score, your tier,
          and the single most useful next step. No signup required — it runs right
          here in your browser.
        </Lead>
      </Container>

      <Section style={{ paddingTop: 16 }}>
        <Container width={860}>
          <AiReadinessTool />
        </Container>
      </Section>

      <Section>
        <Container width={860}>
          <RelatedLinks
            title="More from kenai"
            links={[
              { name: "AI Glossary", href: "/glossary", desc: "Key AI terms explained simply." },
              { name: "Claude vs ChatGPT", href: "/compare/claude-vs-chatgpt", desc: "Which AI should your team use?" },
              { name: "All services", href: "/services", desc: "Workshops, bootcamps, advisory." },
            ]}
          />
        </Container>
      </Section>
    </PageShell>
  );
}
