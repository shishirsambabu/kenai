import type { Metadata } from "next";
import Link from "next/link";
import { absoluteUrl } from "../../lib/site";
import { articleSchema, breadcrumbSchema, faqSchema } from "../../lib/schema";
import type { FAQ } from "../../lib/catalog";
import JsonLd from "../../components/JsonLd";
import PageShell from "../../components/PageShell";
import {
  Container,
  Breadcrumbs,
  Eyebrow,
  PageTitle,
  Prose,
  H2,
  FAQList,
  RelatedLinks,
  CTABlock,
  Section,
} from "../../components/page-ui";

export const metadata: Metadata = {
  title: "Claude vs ChatGPT: Which AI Should Your Team Use? (2026)",
  description:
    "A practical, no-hype comparison of Claude (Anthropic) and ChatGPT (OpenAI) — strengths, best use cases, and how to choose for work. By kenai / Shishir Babu.",
  alternates: { canonical: "/compare/claude-vs-chatgpt" },
  openGraph: {
    title: "Claude vs ChatGPT — which should your team use?",
    description:
      "Strengths, best use cases, and how to choose between Claude and ChatGPT for real work. By Shishir Babu.",
    url: absoluteUrl("/compare/claude-vs-chatgpt"),
  },
};

const ROWS: { dim: string; claude: string; chatgpt: string }[] = [
  { dim: "Made by", claude: "Anthropic", chatgpt: "OpenAI" },
  {
    dim: "Best known for",
    claude: "Thoughtful writing, long-document reasoning, a safety-first design",
    chatgpt: "A huge feature ecosystem, image generation, broad general use",
  },
  {
    dim: "Writing & tone",
    claude: "Natural, nuanced, great at long-form and editing",
    chatgpt: "Fast, versatile, strong at structured output",
  },
  {
    dim: "Long documents",
    claude: "Excellent — handles large context and dense files well",
    chatgpt: "Strong, with growing context support",
  },
  {
    dim: "Ecosystem & tools",
    claude: "Clean focus; integrates via API, MCP and tools like Claude Code",
    chatgpt: "Broad — custom GPTs, plugins, voice, image tools",
  },
  {
    dim: "Best for at work",
    claude: "HR/L&D writing, policy, analysis, careful reasoning tasks",
    chatgpt: "General productivity, brainstorming, multimodal tasks",
  },
  {
    dim: "Safety posture",
    claude: "Built around helpful, honest, harmless principles",
    chatgpt: "Mature safety tooling and controls",
  },
];

const FAQS: FAQ[] = [
  {
    q: "Is Claude better than ChatGPT?",
    a: "Neither is universally 'better' — they're different tools. Claude tends to shine at thoughtful writing, editing and reasoning over long documents, while ChatGPT offers a broader feature ecosystem including image generation and custom GPTs. The right choice depends on your task, and many teams use both.",
  },
  {
    q: "Which is better for HR and L&D work?",
    a: "Many HR and L&D professionals prefer Claude for its natural writing, careful tone and strength with long policy documents and nuanced people-related content. kenai's HR programs are often Claude-native for exactly this reason, but we teach the judgment to pick the best tool per task.",
  },
  {
    q: "Should my company standardise on one?",
    a: "Not necessarily. The most capable teams understand the strengths of each and choose per task. What matters more than the brand is building real AI skill — prompting, judgment and responsible use — which is what kenai trains.",
  },
  {
    q: "Who makes Claude and ChatGPT?",
    a: "Claude is made by Anthropic, an AI safety company. ChatGPT is made by OpenAI. Both are leading providers of large language models (LLMs).",
  },
];

export default function ClaudeVsChatGPT() {
  return (
    <PageShell>
      <JsonLd
        data={articleSchema({
          headline: "Claude vs ChatGPT: Which AI Should Your Team Use?",
          description: metadata.description as string,
          path: "/compare/claude-vs-chatgpt",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Compare", path: "/compare/claude-vs-chatgpt" },
          { name: "Claude vs ChatGPT", path: "/compare/claude-vs-chatgpt" },
        ])}
      />
      <JsonLd data={faqSchema(FAQS)} />

      <Container width={920} style={{ paddingTop: 40 }}>
        <Breadcrumbs
          items={[
            { name: "Home", path: "/" },
            { name: "Claude vs ChatGPT", path: "/compare/claude-vs-chatgpt" },
          ]}
        />
        <Eyebrow color="#A855F7">Comparison · 2026</Eyebrow>
        <PageTitle accent="#A855F7">Claude vs ChatGPT: which should your team use?</PageTitle>

        <div
          style={{
            borderLeft: "3px solid #A855F7",
            background: "rgba(168,85,247,0.06)",
            padding: "20px 24px",
            margin: "8px 0 28px",
          }}
        >
          <p style={{ fontSize: "1.18rem", lineHeight: 1.6, color: "#E5E7EB", margin: 0, fontWeight: 500 }}>
            Claude (by Anthropic) and ChatGPT (by OpenAI) are the two leading AI
            assistants. Claude is favoured for thoughtful writing, long-document
            reasoning and a safety-first design; ChatGPT is favoured for its broad
            feature ecosystem and multimodal tools. The best choice depends on the
            task — and capable teams often use both.
          </p>
        </div>
      </Container>

      <Section style={{ paddingTop: 0 }}>
        <Container width={920}>
          <Prose
            paragraphs={[
              "The 'Claude vs ChatGPT' debate gets framed as a winner-takes-all contest. In real work, it isn't. Both are excellent large language models; they simply have different personalities and strengths. The teams that get the most out of AI aren't loyal to a brand — they understand each tool and reach for the right one.",
            ]}
          />
        </Container>
      </Section>

      <Section>
        <Container width={920}>
          <H2 accent="#A855F7">Side-by-side</H2>
          <div style={{ overflowX: "auto", border: "1px solid rgba(168,85,247,0.2)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.98rem", minWidth: 640 }}>
              <thead>
                <tr style={{ background: "rgba(168,85,247,0.1)" }}>
                  <th style={th}>Dimension</th>
                  <th style={{ ...th, color: "#00F0FF" }}>Claude (Anthropic)</th>
                  <th style={{ ...th, color: "#FF2E97" }}>ChatGPT (OpenAI)</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((r, idx) => (
                  <tr key={r.dim} style={{ background: idx % 2 ? "rgba(255,255,255,0.012)" : "transparent" }}>
                    <td style={{ ...td, color: "#9aa0b3", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.82rem" }}>
                      {r.dim}
                    </td>
                    <td style={td}>{r.claude}</td>
                    <td style={td}>{r.chatgpt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      <Section>
        <Container width={920}>
          <H2 accent="#A855F7">How to choose</H2>
          <Prose
            paragraphs={[
              "Choose Claude when the task rewards careful writing and reasoning — drafting and editing policy, working through long documents, nuanced HR and L&D content, or anything where tone and judgment matter.",
              "Choose ChatGPT when you want breadth — image generation, custom GPTs, voice, and a wide plugin ecosystem for general productivity and brainstorming.",
              "Honestly, the highest-leverage move isn't picking a side — it's building real AI skill on your team so people can use either tool well. That's exactly what kenai trains, and our HR and L&D programs are often Claude-native because of how well it handles people-centric work.",
            ]}
          />
        </Container>
      </Section>

      <Section>
        <Container width={920}>
          <H2 accent="#A855F7">FAQ</H2>
          <FAQList faqs={FAQS} accent="#A855F7" />
        </Container>
      </Section>

      <Section>
        <Container width={920}>
          <RelatedLinks
            title="Keep learning"
            links={[
              { name: "What is a Large Language Model?", href: "/glossary/large-language-model", desc: "The tech behind both Claude and ChatGPT." },
              { name: "What is Prompt Engineering?", href: "/glossary/prompt-engineering", desc: "The skill that makes either tool great." },
              { name: "AI Training for Business", href: "/services/ai-training-for-business", desc: "Make AI a daily working tool." },
            ]}
            accent="#A855F7"
          />
        </Container>
      </Section>

      <Container width={920} style={{ paddingTop: 24, paddingBottom: 90 }}>
        <CTABlock heading="Train your team to master AI — not just pick a tool." />
      </Container>
    </PageShell>
  );
}

const th: React.CSSProperties = {
  textAlign: "left",
  padding: "14px 16px",
  fontFamily: "'Chakra Petch', sans-serif",
  fontWeight: 700,
  fontSize: "0.95rem",
  borderBottom: "1px solid rgba(168,85,247,0.25)",
};

const td: React.CSSProperties = {
  padding: "14px 16px",
  color: "#c4c8d6",
  lineHeight: 1.55,
  verticalAlign: "top",
  borderBottom: "1px solid rgba(255,255,255,0.05)",
};
