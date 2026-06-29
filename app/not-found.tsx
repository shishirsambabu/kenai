import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "./components/PageShell";
import { Container } from "./components/page-ui";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/glossary", label: "AI Glossary" },
  { href: "/about", label: "About Shishir Babu" },
  { href: "/tools/ai-readiness", label: "AI Readiness Tool" },
];

export default function NotFound() {
  return (
    <PageShell>
      <Container width={760} style={{ paddingTop: 80, paddingBottom: 120, textAlign: "center" }}>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "clamp(4rem,14vw,8rem)",
            fontWeight: 800,
            color: "#00F0FF",
            textShadow: "0 0 40px rgba(0,240,255,.4)",
            lineHeight: 1,
          }}
        >
          404
        </div>
        <div
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "#FF2E97",
            letterSpacing: "0.1em",
            margin: "12px 0 18px",
          }}
        >
          &gt; route not found
        </div>
        <h1
          style={{
            fontFamily: "'Chakra Petch', sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.6rem,4vw,2.4rem)",
            marginBottom: 14,
          }}
        >
          This page took the wrong path.
        </h1>
        <p style={{ color: "#aeb3c4", fontSize: "1.08rem", maxWidth: "48ch", margin: "0 auto 30px", lineHeight: 1.6 }}>
          The page you&apos;re looking for doesn&apos;t exist — but the way of AI does.
          Try one of these:
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
                letterSpacing: "0.04em",
                textDecoration: "none",
                padding: "12px 20px",
                color: "#00F0FF",
                border: "1px solid rgba(0,240,255,0.3)",
                background: "rgba(0,240,255,0.04)",
              }}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </Container>
    </PageShell>
  );
}
