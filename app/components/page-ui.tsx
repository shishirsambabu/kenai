import Link from "next/link";
import type { FAQ } from "../lib/catalog";

/** Layout + content primitives for sub-pages. All server-rendered (SEO). */

export function Container({
  children,
  width = 1180,
  style,
}: {
  children: React.ReactNode;
  width?: number;
  style?: React.CSSProperties;
}) {
  return (
    <div style={{ width: `min(${width}px,92vw)`, margin: "0 auto", ...style }}>
      {children}
    </div>
  );
}

export function Breadcrumbs({ items }: { items: { name: string; path: string }[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 11.5,
        letterSpacing: "0.08em",
        color: "#7a7f93",
        display: "flex",
        flexWrap: "wrap",
        gap: 8,
        alignItems: "center",
        marginBottom: 26,
      }}
    >
      {items.map((it, i) => (
        <span key={it.path} style={{ display: "inline-flex", gap: 8, alignItems: "center" }}>
          {i > 0 && <span style={{ color: "#FF2E97" }}>/</span>}
          {i === items.length - 1 ? (
            <span style={{ color: "#9aa0b3" }}>{it.name}</span>
          ) : (
            <Link href={it.path} style={{ color: "#00F0FF", textDecoration: "none" }}>
              {it.name}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}

export function Eyebrow({
  children,
  color = "#00F0FF",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <div
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 12,
        letterSpacing: "0.28em",
        textTransform: "uppercase",
        color,
        display: "inline-flex",
        gap: 10,
        marginBottom: 14,
      }}
    >
      <span style={{ color: "#FF2E97", fontWeight: 700 }}>&gt;</span>
      {children}
    </div>
  );
}

export function PageTitle({
  children,
  accent = "#00F0FF",
}: {
  children: React.ReactNode;
  accent?: string;
}) {
  return (
    <h1
      style={{
        fontFamily: "'Chakra Petch', sans-serif",
        fontWeight: 700,
        fontSize: "clamp(2.1rem,5.2vw,3.6rem)",
        letterSpacing: "-0.01em",
        lineHeight: 1.04,
        margin: "0 0 18px",
        textShadow: `0 0 30px ${accent}22`,
      }}
    >
      {children}
    </h1>
  );
}

export function Lead({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: "clamp(1.05rem,1.6vw,1.28rem)",
        color: "#aeb3c4",
        lineHeight: 1.65,
        maxWidth: "65ch",
        marginBottom: 16,
      }}
    >
      {children}
    </p>
  );
}

export function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div style={{ maxWidth: "68ch" }}>
      {paragraphs.map((p, i) => (
        <p
          key={i}
          style={{
            color: "#c4c8d6",
            fontSize: "1.08rem",
            lineHeight: 1.75,
            marginBottom: 18,
          }}
        >
          {p}
        </p>
      ))}
    </div>
  );
}

export function H2({
  children,
  accent = "#00F0FF",
}: {
  children: React.ReactNode;
  accent?: string;
}) {
  return (
    <h2
      style={{
        fontFamily: "'Chakra Petch', sans-serif",
        fontWeight: 700,
        fontSize: "clamp(1.6rem,3.4vw,2.3rem)",
        letterSpacing: "-0.01em",
        lineHeight: 1.1,
        margin: "0 0 22px",
        color: "#E5E7EB",
        borderLeft: `3px solid ${accent}`,
        paddingLeft: 16,
      }}
    >
      {children}
    </h2>
  );
}

export function CheckList({
  items,
  accent = "#00F0FF",
}: {
  items: string[];
  accent?: string;
}) {
  return (
    <ul
      style={{
        listStyle: "none",
        display: "grid",
        gap: 12,
        margin: 0,
        padding: 0,
      }}
    >
      {items.map((it) => (
        <li
          key={it}
          style={{
            display: "flex",
            gap: 12,
            alignItems: "flex-start",
            color: "#c4c8d6",
            fontSize: "1.04rem",
            lineHeight: 1.55,
          }}
        >
          <span
            style={{
              color: accent,
              fontWeight: 700,
              textShadow: `0 0 10px ${accent}`,
              flexShrink: 0,
            }}
          >
            ▹
          </span>
          {it}
        </li>
      ))}
    </ul>
  );
}

export function Panel({
  children,
  accent = "#00F0FF",
  style,
}: {
  children: React.ReactNode;
  accent?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={{
        background: "linear-gradient(180deg,rgba(255,255,255,0.025),rgba(255,255,255,0.005))",
        border: `1px solid ${accent}26`,
        padding: "28px 26px",
        clipPath:
          "polygon(0 0,calc(100% - 14px) 0,100% 14px,100% 100%,14px 100%,0 calc(100% - 14px))",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function FAQList({ faqs, accent = "#00F0FF" }: { faqs: FAQ[]; accent?: string }) {
  return (
    <div style={{ display: "grid", gap: 14 }}>
      {faqs.map((f) => (
        <details
          key={f.q}
          style={{
            border: "1px solid rgba(0,240,255,0.14)",
            background: "rgba(255,255,255,0.015)",
            padding: "18px 20px",
          }}
        >
          <summary
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontWeight: 600,
              fontSize: "1.12rem",
              color: "#E5E7EB",
              cursor: "pointer",
              listStyle: "none",
            }}
          >
            <span style={{ color: accent, marginRight: 10 }}>?</span>
            {f.q}
          </summary>
          <p
            style={{
              color: "#aeb3c4",
              fontSize: "1.02rem",
              lineHeight: 1.7,
              marginTop: 12,
            }}
          >
            {f.a}
          </p>
        </details>
      ))}
    </div>
  );
}

export function RelatedLinks({
  title = "Related",
  links,
  accent = "#00F0FF",
}: {
  title?: string;
  links: { name: string; href: string; desc?: string }[];
  accent?: string;
}) {
  return (
    <div>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: accent,
          marginBottom: 16,
        }}
      >
        {title}
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
          gap: 14,
        }}
      >
        {links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="related-card"
            style={{
              display: "block",
              textDecoration: "none",
              padding: "18px 18px",
              border: "1px solid rgba(0,240,255,0.14)",
              background: "rgba(255,255,255,0.015)",
              transition: "border-color .2s, transform .2s",
            }}
          >
            <div
              style={{
                fontFamily: "'Chakra Petch', sans-serif",
                fontWeight: 600,
                fontSize: "1.05rem",
                color: "#E5E7EB",
                marginBottom: l.desc ? 6 : 0,
              }}
            >
              {l.name} <span style={{ color: accent }}>→</span>
            </div>
            {l.desc && (
              <div style={{ color: "#7a7f93", fontSize: "0.9rem", lineHeight: 1.5 }}>
                {l.desc}
              </div>
            )}
          </Link>
        ))}
      </div>
      <style>{`
        .related-card:hover { border-color: ${accent}66 !important; transform: translateY(-3px); }
      `}</style>
    </div>
  );
}

export function CTABlock({
  heading = "Ready to do AI — for real?",
  sub = "Book a hands-on workshop, scope a bootcamp, or get advisory for your team.",
}: {
  heading?: string;
  sub?: string;
}) {
  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        border: "1px solid rgba(0,240,255,0.22)",
        background:
          "linear-gradient(135deg,rgba(0,240,255,0.06),rgba(13,13,24,0.9) 55%,rgba(255,46,151,0.06))",
        padding: "44px 38px",
        textAlign: "center",
        clipPath:
          "polygon(0 0,calc(100% - 18px) 0,100% 18px,100% 100%,18px 100%,0 calc(100% - 18px))",
      }}
    >
      <h2
        style={{
          fontFamily: "'Chakra Petch', sans-serif",
          fontWeight: 700,
          fontSize: "clamp(1.6rem,3.6vw,2.4rem)",
          marginBottom: 12,
        }}
      >
        {heading}
      </h2>
      <p
        style={{
          color: "#aeb3c4",
          fontSize: "1.08rem",
          maxWidth: "52ch",
          margin: "0 auto 26px",
          lineHeight: 1.6,
        }}
      >
        {sub}
      </p>
      <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
        <Link
          href="/#contact"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            textDecoration: "none",
            padding: "15px 28px",
            color: "#0A0A12",
            background: "#00F0FF",
            clipPath:
              "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
            boxShadow: "0 0 28px rgba(0,240,255,0.4)",
          }}
        >
          &gt; Book a workshop
        </Link>
        <Link
          href="/tools/ai-readiness"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            textDecoration: "none",
            padding: "15px 28px",
            color: "#00F0FF",
            background: "transparent",
            boxShadow: "inset 0 0 0 1px rgba(0,240,255,0.5)",
            clipPath:
              "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
          }}
        >
          Try the AI Readiness tool
        </Link>
      </div>
    </div>
  );
}

export function Section({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return <section style={{ padding: "44px 0", ...style }}>{children}</section>;
}
