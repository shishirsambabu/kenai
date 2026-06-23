"use client";

import Link from "next/link";
import { SERVICES } from "../lib/services";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0,240,255,0.14)",
        padding: "54px 0 36px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 360,
          height: 360,
          borderRadius: "50%",
          filter: "blur(90px)",
          opacity: 0.18,
          background: "radial-gradient(circle,rgba(168,85,247,.4),transparent 70%)",
          bottom: -160,
          left: "50%",
          transform: "translateX(-50%)",
          pointerEvents: "none",
        }}
      />
      <div style={{ width: "min(1180px,92vw)", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 30,
            flexWrap: "wrap",
            alignItems: "flex-end",
          }}
        >
          <div>
            <a
              href="#top"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 800,
                fontSize: 24,
                letterSpacing: "-0.02em",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 9,
              }}
            >
              <span style={{ color: "#00F0FF", textShadow: "0 0 12px rgba(0,240,255,0.7)" }}>
                &gt;
                <span className="blink" style={{ color: "#FF2E97", textShadow: "0 0 12px #FF2E97" }}>
                  _
                </span>
              </span>
              <span>
                <span style={{ color: "#E5E7EB" }}>ken</span>
                <span style={{ color: "#00F0FF", textShadow: "0 0 14px rgba(0,240,255,0.6)" }}>ai</span>
              </span>
            </a>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#7a7f93",
                fontSize: 12,
                maxWidth: "34ch",
                marginTop: 12,
                lineHeight: 1.7,
              }}
            >
              The way of AI. AI consulting for HR &amp; hands-on AI training for businesses and
              colleges. India-first, globally relevant.
            </p>
          </div>

          <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
            <FooterCol title="Explore">
              <FooterLink href="/services" internal>
                All services
              </FooterLink>
              <FooterLink href="/industries" internal>
                Industries
              </FooterLink>
              <FooterLink href="/locations" internal>
                Locations
              </FooterLink>
              <FooterLink href="/case-studies" internal>
                Case studies
              </FooterLink>
              <FooterLink href="/about" internal>
                About / founder
              </FooterLink>
              <FooterLink href="/#contact">Book</FooterLink>
            </FooterCol>
            <FooterCol title="Resources">
              <FooterLink href="/tools/ai-readiness" internal>
                AI readiness tool
              </FooterLink>
              <FooterLink href="/glossary" internal>
                AI glossary
              </FooterLink>
              <FooterLink href="/compare/claude-vs-chatgpt" internal>
                Claude vs ChatGPT
              </FooterLink>
              <FooterLink href="/#newsletter">Newsletter</FooterLink>
              <FooterLink href="/#faq">FAQ</FooterLink>
            </FooterCol>
            <FooterCol title="Services">
              {SERVICES.slice(0, 6).map((s) => (
                <FooterLink key={s.slug} href={`/services/${s.slug}`} internal>
                  {s.name}
                </FooterLink>
              ))}
            </FooterCol>
            <FooterCol title="More services">
              {SERVICES.slice(6).map((s) => (
                <FooterLink key={s.slug} href={`/services/${s.slug}`} internal>
                  {s.name}
                </FooterLink>
              ))}
            </FooterCol>
          </div>
        </div>

        <div
          style={{
            marginTop: 34,
            paddingTop: 22,
            borderTop: "1px solid rgba(0,240,255,0.14)",
            display: "flex",
            justifyContent: "space-between",
            gap: 14,
            flexWrap: "wrap",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11,
            color: "#7a7f93",
            letterSpacing: "0.06em",
          }}
        >
          <span>© {year} kenai · built by Sam (Shishir Babu)</span>
          <span>
            kenai.in ·{" "}
            <a href="#top" style={{ color: "#00F0FF", textDecoration: "none" }}>
              back to top &gt;_
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <span
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 10.5,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "#00F0FF",
          marginBottom: 2,
        }}
      >
        {title}
      </span>
      {children}
    </div>
  );
}

function FooterLink({
  href,
  internal,
  children,
}: {
  href: string;
  internal?: boolean;
  children: React.ReactNode;
}) {
  const style: React.CSSProperties = {
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 12,
    letterSpacing: "0.04em",
    color: "#7a7f93",
    textDecoration: "none",
    transition: "color .2s",
  };
  const onEnter = (e: React.MouseEvent<HTMLElement>) =>
    ((e.currentTarget as HTMLElement).style.color = "#00F0FF");
  const onLeave = (e: React.MouseEvent<HTMLElement>) =>
    ((e.currentTarget as HTMLElement).style.color = "#7a7f93");

  if (internal) {
    return (
      <Link href={href} style={style} onMouseEnter={onEnter} onMouseLeave={onLeave}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} style={style} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      {children}
    </a>
  );
}
