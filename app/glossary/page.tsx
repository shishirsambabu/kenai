import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "../components/PageShell";
import Eyebrow from "../components/Eyebrow";
import { GLOSSARY } from "../lib/glossary";
import { SITE } from "../lib/services";

const url = `${SITE.url}/glossary`;
const title = "AI Glossary — Key AI & Automation Terms Explained | kenai";
const description =
  "A plain-language AI glossary from kenai: clear definitions of LLMs, prompt engineering, RAG, AI agents, automation, governance and more — written to actually be understood.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: SITE.name, type: "website" },
  twitter: { card: "summary_large_image", title, description },
};

export default function GlossaryPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DefinedTermSet",
        "@id": `${url}#set`,
        name: "kenai AI Glossary",
        description,
        url,
        hasDefinedTerm: GLOSSARY.map((t) => ({
          "@type": "DefinedTerm",
          name: t.term,
          description: t.definition,
          url: `${url}/${t.slug}`,
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Glossary", item: url },
        ],
      },
    ],
  };

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <header style={{ position: "relative", padding: "150px 0 40px", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: -140,
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 440,
            borderRadius: "50%",
            filter: "blur(110px)",
            background: "radial-gradient(circle, rgba(0,240,255,0.22), transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div style={{ width: "min(1100px,92vw)", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <nav
            aria-label="Breadcrumb"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: "0.08em", color: "#7a7f93", marginBottom: 22, display: "flex", gap: 8 }}
          >
            <Link href="/" style={{ color: "#7a7f93", textDecoration: "none" }}>home</Link>
            <span style={{ color: "#00F0FF" }}>/</span>
            <span style={{ color: "#E5E7EB" }}>glossary</span>
          </nav>
          <Eyebrow>Reference</Eyebrow>
          <h1
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.6rem,7vw,4.4rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              margin: "10px 0 18px",
            }}
          >
            The AI{" "}
            <span style={{ color: "#00F0FF", textShadow: "0 0 26px rgba(0,240,255,.55)" }}>glossary.</span>
          </h1>
          <p style={{ color: "#aeb3c4", fontSize: "clamp(1.05rem,1.8vw,1.3rem)", maxWidth: "60ch", lineHeight: 1.6 }}>
            Plain-language definitions of the AI and automation terms that actually matter — no jargon,
            no hype. Built to be understood, and to be quoted.
          </p>
        </div>
      </header>

      <section style={{ padding: "30px 0 90px" }}>
        <div style={{ width: "min(1100px,92vw)", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 16 }} className="glossary-grid">
            {GLOSSARY.map((t) => (
              <Link
                key={t.slug}
                href={`/glossary/${t.slug}`}
                style={{
                  display: "block",
                  padding: "22px 24px",
                  border: "1px solid rgba(0,240,255,0.14)",
                  background: "#0d0d18",
                  textDecoration: "none",
                  transition: "border-color .2s",
                }}
              >
                <h2 style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#E5E7EB", marginBottom: 8 }}>
                  {t.term}
                </h2>
                <p style={{ color: "#9aa0b3", fontSize: "1rem", lineHeight: 1.5 }}>{t.short}</p>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#00F0FF", marginTop: 14, display: "inline-block" }}>
                  read &gt;_
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <style>{`@media(max-width:680px){.glossary-grid{grid-template-columns:1fr!important}}`}</style>
    </PageShell>
  );
}
