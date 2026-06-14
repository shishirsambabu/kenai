import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "../components/PageShell";
import Eyebrow from "../components/Eyebrow";
import { SITE } from "../lib/services";

const url = `${SITE.url}/about`;
const title = "About kenai & Founder Shishir Babu (Sam) | The way of AI";
const description =
  "Meet Sam (Shishir Babu), founder of kenai — an AI trainer and L&D consultant, winner of the Indywood HR Excellence Award 2026. kenai's practitioner-led methodology, experience and mission.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: SITE.name, type: "profile" },
  twitter: { card: "summary_large_image", title, description },
};

const CREDENTIALS = [
  { label: "Recognition", value: "Indywood HR Excellence Award 2026 — Excellence in Digital HR Transformation" },
  { label: "Discipline", value: "AI training & L&D consulting" },
  { label: "Focus", value: "AI for HR, business and education" },
  { label: "Base", value: "India · working globally" },
];

const METHOD = [
  { t: "Practitioner-first", b: "Sam builds with AI daily. Training reflects what actually works in real workflows, not slideware." },
  { t: "Learn by doing", b: "Every engagement is hands-on — participants build real prompts, automations and workflows from their own world." },
  { t: "Responsible by default", b: "Governance and guardrails are introduced alongside capability, so adoption is confident and safe." },
  { t: "Owned, not rented", b: "We document and train so your team owns the capability — no dependency, no lock-in." },
];

const VALUES = [
  "Make AI a skill your team owns, not a subscription they fear.",
  "Outcomes over hype — real workflows, real judgment, real results.",
  "India-first, globally relevant.",
];

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AboutPage",
        "@id": `${url}#page`,
        name: title,
        description,
        url,
        isPartOf: { "@id": `${SITE.url}/#website` },
        mainEntity: { "@id": `${SITE.url}/#founder` },
      },
      {
        "@type": "Person",
        "@id": `${SITE.url}/#founder`,
        name: SITE.founder,
        alternateName: SITE.founderAlias,
        url,
        jobTitle: "Founder, AI Trainer & L&D Consultant",
        worksFor: { "@id": `${SITE.url}/#organization` },
        knowsAbout: [
          "Artificial Intelligence",
          "AI Training",
          "Learning & Development",
          "AI for HR",
          "Workflow Automation",
          "Prompt Engineering",
        ],
        award: "Indywood HR Excellence Award 2026 — Excellence in Digital HR Transformation",
        image: `${SITE.url}/sam.jpg`,
        nationality: "Indian",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "About", item: url },
        ],
      },
    ],
  };

  const WRAP = "min(1080px,92vw)";

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header style={{ position: "relative", padding: "150px 0 40px", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -100,
            width: 460,
            height: 460,
            borderRadius: "50%",
            filter: "blur(100px)",
            background: "radial-gradient(circle, rgba(255,46,151,0.2), transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div style={{ width: WRAP, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <nav
            aria-label="Breadcrumb"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: "0.08em", color: "#7a7f93", marginBottom: 22, display: "flex", gap: 8 }}
          >
            <Link href="/" style={{ color: "#7a7f93", textDecoration: "none" }}>home</Link>
            <span style={{ color: "#00F0FF" }}>/</span>
            <span style={{ color: "#E5E7EB" }}>about</span>
          </nav>
          <Eyebrow>Founder & methodology</Eyebrow>
          <h1
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.4rem,6vw,4rem)",
              lineHeight: 1.02,
              letterSpacing: "-0.02em",
              margin: "10px 0 18px",
            }}
          >
            Built by a practitioner,{" "}
            <span style={{ color: "#00F0FF", textShadow: "0 0 26px rgba(0,240,255,.55)" }}>not a vendor.</span>
          </h1>
        </div>
      </header>

      <section style={{ padding: "20px 0 40px" }}>
        <div
          style={{ width: WRAP, margin: "0 auto", display: "grid", gridTemplateColumns: ".8fr 1.2fr", gap: 46, alignItems: "start" }}
          className="about-page-grid"
        >
          <div>
            <div
              style={{
                position: "relative",
                aspectRatio: "4/5",
                border: "1px solid rgba(0,240,255,0.2)",
                clipPath: "polygon(0 0,100% 0,100% calc(100% - 26px),calc(100% - 26px) 100%,0 100%)",
                overflow: "hidden",
                boxShadow: "0 0 0 1px rgba(255,46,151,0.08), 0 32px 80px rgba(0,0,0,0.6), 0 0 40px rgba(0,240,255,0.08)",
              }}
            >
              <img
                src="/sam.jpg"
                alt="Sam (Shishir Babu), founder of kenai — AI trainer and L&D consultant"
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,18,0.85), transparent 55%)" }} />
              <div style={{ position: "absolute", bottom: 20, left: 20, right: 20 }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase", color: "#00F0FF", textShadow: "0 0 12px rgba(0,240,255,0.8)" }}>
                  // Sam · Shishir Babu
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: "#7a7f93", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 4 }}>
                  Founder, kenai
                </div>
              </div>
            </div>

            <div style={{ marginTop: 22, display: "flex", flexDirection: "column", gap: 12 }}>
              {CREDENTIALS.map((c) => (
                <div key={c.label} style={{ borderLeft: "2px solid #FF2E97", paddingLeft: 16 }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: "0.16em", textTransform: "uppercase", color: "#FF2E97", marginBottom: 3 }}>
                    {c.label}
                  </div>
                  <div style={{ color: "#cfd3e0", fontSize: "0.98rem", lineHeight: 1.4 }}>{c.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p style={bodyP}>
              kenai is led by <strong style={{ color: "#E5E7EB" }}>Sam (Shishir Babu)</strong> — an AI
              trainer and L&amp;D consultant who has spent years at the intersection of people and
              technology. He doesn&apos;t teach AI from a deck; he builds with it daily and teaches what
              actually works.
            </p>
            <p style={bodyP}>
              That practitioner lens is the whole point of kenai. Tools change monthly; what lasts is a
              team that can think with AI, prompt well, automate the busywork and apply judgment. kenai
              exists to build exactly that — for HR teams, businesses, startups and colleges.
            </p>
            <p style={bodyP}>
              The work has been recognised with the{" "}
              <strong style={{ color: "#E5E7EB" }}>Indywood HR Excellence Award 2026</strong> for
              Excellence in Digital HR Transformation — but the real measure is simpler: teams that
              stopped watching AI and started building with it.
            </p>

            <h2 style={h2}>The methodology</h2>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="method-grid">
              {METHOD.map((m) => (
                <div key={m.t} style={{ padding: "20px 22px", border: "1px solid rgba(0,240,255,0.14)", background: "linear-gradient(180deg,rgba(255,255,255,.02),transparent)" }}>
                  <h3 style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#00F0FF", marginBottom: 8 }}>{m.t}</h3>
                  <p style={{ color: "#9aa0b3", fontSize: "0.98rem", lineHeight: 1.55 }}>{m.b}</p>
                </div>
              ))}
            </div>

            <h2 style={h2}>What we believe</h2>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {VALUES.map((v) => (
                <li key={v} style={{ display: "flex", gap: 12, color: "#cfd3e0", fontSize: "1.08rem", lineHeight: 1.5 }}>
                  <span style={{ color: "#FF2E97", fontFamily: "'JetBrains Mono', monospace" }}>›</span>
                  {v}
                </li>
              ))}
            </ul>

            <div style={{ marginTop: 30, display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="/#contact" style={ctaPrimary}>&gt; Work with kenai</a>
              <Link href="/case-studies" style={ctaGhost}>See the results</Link>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:820px){
          .about-page-grid{grid-template-columns:1fr!important;gap:30px!important}
          .method-grid{grid-template-columns:1fr!important}
        }
      `}</style>
    </PageShell>
  );
}

const bodyP: React.CSSProperties = { color: "#cfd3e0", fontSize: "1.12rem", lineHeight: 1.75, marginBottom: 16, maxWidth: "64ch" };
const h2: React.CSSProperties = {
  fontFamily: "'Chakra Petch', sans-serif",
  fontWeight: 700,
  fontSize: "clamp(1.4rem,3vw,2rem)",
  letterSpacing: "-0.01em",
  margin: "34px 0 16px",
};
const ctaPrimary: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontWeight: 700,
  fontSize: 13,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  padding: "14px 26px",
  color: "#0A0A12",
  background: "#00F0FF",
  boxShadow: "0 0 24px rgba(0,240,255,0.5)",
  clipPath: "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
  cursor: "none",
};
const ctaGhost: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontWeight: 700,
  fontSize: 13,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  gap: 10,
  padding: "14px 26px",
  color: "#00F0FF",
  background: "transparent",
  boxShadow: "inset 0 0 0 1px rgba(0,240,255,0.5)",
  clipPath: "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
  cursor: "none",
};
