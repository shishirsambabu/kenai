import Link from "next/link";
import { services, glossary } from "../lib/catalog";
import { siteConfig, contact } from "../lib/site";

/**
 * Deep internal-linking footer. Surfaces every programmatic page so crawlers
 * (and visitors) can reach the whole site from anywhere — strong for SEO.
 */
const colHead: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 11,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "#00F0FF",
  marginBottom: 16,
};

const linkStyle: React.CSSProperties = {
  fontFamily: "'JetBrains Mono', monospace",
  fontSize: 12.5,
  color: "#9aa0b3",
  textDecoration: "none",
  lineHeight: 2,
  display: "block",
};

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} style={linkStyle} className="footer-link">
      {children}
    </Link>
  );
}

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid rgba(0,240,255,0.14)",
        padding: "64px 0 36px",
        position: "relative",
        overflow: "hidden",
        zIndex: 2,
      }}
    >
      <div style={{ width: "min(1180px,92vw)", margin: "0 auto" }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
            gap: 36,
          }}
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 800,
                fontSize: 24,
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                gap: 9,
              }}
            >
              <span style={{ color: "#00F0FF" }}>
                &gt;<span className="blink" style={{ color: "#FF2E97" }}>_</span>
              </span>
              <span>
                <span style={{ color: "#E5E7EB" }}>ken</span>
                <span style={{ color: "#00F0FF" }}>ai</span>
              </span>
            </Link>
            <p
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                color: "#7a7f93",
                fontSize: 12.5,
                maxWidth: "34ch",
                marginTop: 14,
                lineHeight: 1.8,
              }}
            >
              {siteConfig.tagline} AI consulting for HR &amp; hands-on AI training
              for businesses and colleges. By Shishir Babu. India-first, globally
              relevant.
            </p>
            <a
              href={`mailto:${contact.email}`}
              style={{ ...linkStyle, color: "#00F0FF", marginTop: 14 }}
              className="footer-link"
            >
              &gt; {contact.email}
            </a>
          </div>

          {/* Services */}
          <div>
            <div style={colHead}>Train with kenai</div>
            <FooterLink href="/bootcamp">3-Day AI Bootcamp · ₹6,999</FooterLink>
            <FooterLink href="/pricing">Pricing</FooterLink>
            {services.slice(0, 4).map((s) => (
              <FooterLink key={s.slug} href={`/services/${s.slug}`}>
                {s.shortName}
              </FooterLink>
            ))}
            <FooterLink href="/services">All services →</FooterLink>
          </div>

          {/* Learn */}
          <div>
            <div style={colHead}>Learn</div>
            <FooterLink href="/glossary">AI Glossary</FooterLink>
            {glossary.slice(0, 4).map((g) => (
              <FooterLink key={g.slug} href={`/glossary/${g.slug}`}>
                {g.abbr ?? g.term}
              </FooterLink>
            ))}
            <FooterLink href="/compare/claude-vs-chatgpt">
              Claude vs ChatGPT
            </FooterLink>
            <FooterLink href="/tools/ai-readiness">AI Readiness Tool</FooterLink>
          </div>

          {/* Company / Explore */}
          <div>
            <div style={colHead}>Company &amp; Explore</div>
            <FooterLink href="/about">About Shishir Babu</FooterLink>
            <FooterLink href="/ai-training">AI Training by City</FooterLink>
            <FooterLink href="/ai-for">AI Training by Role</FooterLink>
            <FooterLink href="/industries">By Industry</FooterLink>
            <FooterLink href="/#products">Products</FooterLink>
            <FooterLink href="/#resources">Free Resources</FooterLink>
            <FooterLink href="/#contact">Book / Contact</FooterLink>
          </div>
        </div>

        <div
          style={{
            marginTop: 44,
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
          <span>© {year} kenai · built by Shishir Babu (Sam)</span>
          <span>kenai.in · The way of AI.</span>
        </div>
      </div>

      <style>{`
        .footer-link:hover { color: #00F0FF !important; }
        @media (max-width: 820px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 28px !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
