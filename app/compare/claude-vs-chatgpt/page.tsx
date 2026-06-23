import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "../../components/PageShell";
import Eyebrow from "../../components/Eyebrow";
import { SITE } from "../../lib/services";

const url = `${SITE.url}/compare/claude-vs-chatgpt`;
const title = "Claude vs ChatGPT: Which AI Should Your Team Use? (2026) | kenai";
const description =
  "Claude vs ChatGPT compared for business teams: strengths, best-fit use cases, and how to choose. A practical, vendor-neutral comparison from kenai — most teams benefit from both.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: url },
  openGraph: { title, description, url, siteName: SITE.name, type: "article" },
  twitter: { card: "summary_large_image", title, description },
};

const ROWS: { dim: string; claude: string; chatgpt: string }[] = [
  { dim: "Maker", claude: "Anthropic", chatgpt: "OpenAI" },
  { dim: "Best known for", claude: "Careful writing, long-context reasoning, analysis", chatgpt: "Versatility, ecosystem, custom GPTs" },
  { dim: "Long documents", claude: "Very strong — large context, holds detail well", chatgpt: "Strong, with file uploads and analysis" },
  { dim: "Writing tone", claude: "Nuanced, measured, good for sensitive comms", chatgpt: "Flexible, fast, broad range of styles" },
  { dim: "Custom assistants", claude: "Projects for grouped context", chatgpt: "Custom GPTs, shareable across a team" },
  { dim: "Ecosystem / integrations", claude: "Growing; strong API and tool use", chatgpt: "Large ecosystem and integrations" },
  { dim: "Best first use case", claude: "Drafting, reviewing and analysing documents", chatgpt: "Everyday productivity across many tasks" },
];

const FAQS = [
  {
    q: "Is Claude or ChatGPT better?",
    a: "Neither is universally better — they're both excellent and improving fast. Claude is often preferred for careful writing, long-document analysis and nuanced reasoning; ChatGPT for its versatility, ecosystem and custom GPTs. Most teams get the best results using both and matching the tool to the task.",
  },
  {
    q: "Should my company standardise on one?",
    a: "You can, for simplicity and governance, but many teams give people access to both. What matters far more than the choice is training: a well-trained team gets more from either tool than an untrained team gets from the 'best' one.",
  },
  {
    q: "Which is better for HR or sensitive communication?",
    a: "Claude's measured, careful writing style is often favoured for sensitive people communication, while strong governance and human review matter regardless of tool. kenai helps HR teams use either responsibly.",
  },
  {
    q: "Can kenai train our team on both?",
    a: "Yes — kenai offers dedicated Claude training and ChatGPT training, and can deliver combined sessions that teach your team to choose and use the right tool for each task.",
  },
];

export default function ComparePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: "Claude vs ChatGPT: Which AI Should Your Team Use?",
        description,
        url,
        author: { "@id": `${SITE.url}/#organization` },
        publisher: { "@id": `${SITE.url}/#organization` },
        isPartOf: { "@id": `${SITE.url}/#website` },
      },
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: FAQS.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
          { "@type": "ListItem", position: 2, name: "Compare", item: `${SITE.url}/compare` },
          { "@type": "ListItem", position: 3, name: "Claude vs ChatGPT", item: url },
        ],
      },
    ],
  };

  const WRAP = "min(940px,92vw)";

  return (
    <PageShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <header style={{ position: "relative", padding: "150px 0 30px", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -100,
            width: 460,
            height: 460,
            borderRadius: "50%",
            filter: "blur(100px)",
            background: "radial-gradient(circle, rgba(168,85,247,0.24), transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div style={{ width: WRAP, margin: "0 auto", position: "relative", zIndex: 2 }}>
          <nav
            aria-label="Breadcrumb"
            style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: "0.08em", color: "#7a7f93", marginBottom: 22, display: "flex", gap: 8, flexWrap: "wrap" }}
          >
            <Link href="/" style={{ color: "#7a7f93", textDecoration: "none" }}>home</Link>
            <span style={{ color: "#A855F7" }}>/</span>
            <span style={{ color: "#E5E7EB" }}>claude-vs-chatgpt</span>
          </nav>
          <Eyebrow>Comparison · 2026</Eyebrow>
          <h1
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.2rem,5.6vw,3.8rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              margin: "10px 0 18px",
            }}
          >
            Claude <span style={{ color: "#7a7f93" }}>vs</span>{" "}
            <span style={{ color: "#00F0FF", textShadow: "0 0 26px rgba(0,240,255,.55)" }}>ChatGPT</span>
          </h1>
          <div style={{ borderLeft: "2px solid #A855F7", padding: "10px 0 10px 24px" }}>
            <p style={{ color: "#E5E7EB", fontSize: "1.2rem", lineHeight: 1.6 }}>
              Claude (by Anthropic) and ChatGPT (by OpenAI) are both leading AI assistants. Claude is
              often preferred for careful writing, long-document analysis and nuanced reasoning;
              ChatGPT for its versatility, ecosystem and custom GPTs. For most teams the best answer
              isn&apos;t one or the other — it&apos;s using both well, matched to the task.
            </p>
          </div>
        </div>
      </header>

      {/* Comparison table */}
      <section style={{ padding: "40px 0" }}>
        <div style={{ width: WRAP, margin: "0 auto", overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "1rem", minWidth: 640 }}>
            <thead>
              <tr>
                <th style={th}> </th>
                <th style={{ ...th, color: "#00F0FF" }}>Claude</th>
                <th style={{ ...th, color: "#FF2E97" }}>ChatGPT</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr key={r.dim}>
                  <td style={{ ...td, color: "#7a7f93", fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: "0.04em", textTransform: "uppercase" }}>
                    {r.dim}
                  </td>
                  <td style={{ ...td, color: "#cfd3e0" }}>{r.claude}</td>
                  <td style={{ ...td, color: "#cfd3e0" }}>{r.chatgpt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* When to use which */}
      <section style={{ padding: "40px 0" }}>
        <div style={{ width: WRAP, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 22 }} className="cmp-grid">
          <div style={{ padding: "26px 26px 28px", border: "1px solid rgba(0,240,255,0.2)", background: "#0d0d18" }}>
            <h2 style={{ ...h2, color: "#00F0FF" }}>Lean toward Claude when…</h2>
            <ul style={ulStyle}>
              {["You work with long documents and need detail held accurately", "Tone and careful wording matter (HR, exec, legal-adjacent)", "You want strong reasoning and analysis on dense material", "You're grouping context into focused Projects"].map((x) => (
                <li key={x} style={li}><span style={{ color: "#00F0FF" }}>›</span>{x}</li>
              ))}
            </ul>
          </div>
          <div style={{ padding: "26px 26px 28px", border: "1px solid rgba(255,46,151,0.2)", background: "#0d0d18" }}>
            <h2 style={{ ...h2, color: "#FF2E97" }}>Lean toward ChatGPT when…</h2>
            <ul style={ulStyle}>
              {["You want one flexible tool across many everyday tasks", "Your team will build and share custom GPTs", "You rely on its broad ecosystem and integrations", "You need fast, versatile output across varied formats"].map((x) => (
                <li key={x} style={li}><span style={{ color: "#FF2E97" }}>›</span>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Verdict */}
      <section style={{ padding: "30px 0" }}>
        <div style={{ width: WRAP, margin: "0 auto" }}>
          <h2 style={h2}>The verdict</h2>
          <p style={bodyP}>
            Don&apos;t over-index on the tool choice. The biggest determinant of AI value isn&apos;t which
            model you pick — it&apos;s whether your team knows how to prompt, when to use which tool, and
            how to build it into real workflows. A trained team outperforms an untrained one regardless
            of the logo. That&apos;s exactly what kenai builds.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 }}>
            <Link href="/services/claude-training" style={pill("#00F0FF")}>Claude training &gt;</Link>
            <Link href="/services/chatgpt-training" style={pill("#FF2E97")}>ChatGPT training &gt;</Link>
            <Link href="/services/prompt-engineering" style={pill("#A855F7")}>Prompt engineering &gt;</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: "40px 0" }}>
        <div style={{ width: WRAP, margin: "0 auto" }}>
          <h2 style={h2}>FAQ</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 18, marginTop: 10 }}>
            {FAQS.map((f) => (
              <div key={f.q}>
                <h3 style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#E5E7EB", marginBottom: 8 }}>
                  {f.q}
                </h3>
                <p style={{ color: "#9aa0b3", fontSize: "1.04rem", lineHeight: 1.65, maxWidth: "72ch" }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "40px 0 90px" }}>
        <div style={{ width: WRAP, margin: "0 auto" }}>
          <div
            style={{
              border: "1px solid rgba(0,240,255,0.3)",
              background: "#0d0d18",
              padding: "34px 30px",
              textAlign: "center",
              clipPath: "polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,16px 100%,0 calc(100% - 16px))",
            }}
          >
            <h2 style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, fontSize: "1.7rem", marginBottom: 12 }}>
              Train your team on the right tool
            </h2>
            <p style={{ color: "#aeb3c4", marginBottom: 22, maxWidth: "50ch", marginInline: "auto" }}>
              kenai delivers hands-on Claude and ChatGPT training so your team picks and uses the best
              tool for every task.
            </p>
            <a href="/#contact" style={pill("#00F0FF")}>&gt; Book a consult</a>
          </div>
        </div>
      </section>

      <style>{`@media(max-width:680px){.cmp-grid{grid-template-columns:1fr!important}}`}</style>
    </PageShell>
  );
}

const th: React.CSSProperties = {
  textAlign: "left",
  padding: "14px 16px",
  borderBottom: "1px solid rgba(0,240,255,0.3)",
  fontFamily: "'Chakra Petch', sans-serif",
  fontWeight: 700,
  fontSize: "1.2rem",
};
const td: React.CSSProperties = {
  padding: "14px 16px",
  borderBottom: "1px solid rgba(0,240,255,0.1)",
  verticalAlign: "top",
  lineHeight: 1.5,
};
const h2: React.CSSProperties = {
  fontFamily: "'Chakra Petch', sans-serif",
  fontWeight: 700,
  fontSize: "clamp(1.4rem,3vw,2rem)",
  letterSpacing: "-0.01em",
  marginBottom: 14,
};
const bodyP: React.CSSProperties = { color: "#cfd3e0", fontSize: "1.12rem", lineHeight: 1.75, maxWidth: "72ch" };
const ulStyle: React.CSSProperties = { listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginTop: 10 };
const li: React.CSSProperties = { display: "flex", gap: 10, color: "#cfd3e0", fontSize: "1.04rem", lineHeight: 1.5 };
function pill(color: string): React.CSSProperties {
  return {
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: "0.04em",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "12px 20px",
    color,
    border: `1px solid ${color}66`,
    background: "transparent",
  };
}
