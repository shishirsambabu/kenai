"use client";

import Link from "next/link";
import Cursor from "./Cursor";
import ParticleField from "./ParticleField";

/**
 * Shared chrome for sub-pages (services, etc).
 * Mirrors the homepage atmosphere but uses absolute links back to the
 * single-page homepage sections so nav works from any route.
 */
export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="fx-noise" />
      <div className="fx-scan" />
      <div className="fx-vignette" />
      <ParticleField />
      <Cursor />

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 8000,
          padding: "12px 0",
          background: "rgba(10,10,18,0.88)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(0,240,255,0.12)",
        }}
      >
        <div
          style={{
            width: "min(1180px,92vw)",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Link
            href="/"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 800,
              fontSize: 20,
              letterSpacing: "-0.02em",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 9,
            }}
          >
            <span style={{ color: "#00F0FF", textShadow: "0 0 14px rgba(0,240,255,0.8)" }}>
              &gt;
              <span className="blink" style={{ color: "#FF2E97", textShadow: "0 0 14px #FF2E97" }}>
                _
              </span>
            </span>
            <span>
              <span style={{ color: "#E5E7EB" }}>ken</span>
              <span style={{ color: "#00F0FF", textShadow: "0 0 18px rgba(0,240,255,0.7)" }}>ai</span>
            </span>
          </Link>

          <div style={{ display: "flex", gap: 22, alignItems: "center" }}>
            <Link href="/services" className="nav-link">
              Services
            </Link>
            <Link href="/industries" className="nav-link nav-hide-sm">
              Industries
            </Link>
            <Link href="/locations" className="nav-link nav-hide-sm">
              Locations
            </Link>
            <Link href="/case-studies" className="nav-link nav-hide-sm">
              Case Studies
            </Link>
            <Link href="/tools/ai-readiness" className="nav-link nav-hide-sm">
              Tools
            </Link>
            <Link href="/glossary" className="nav-link nav-hide-sm">
              Glossary
            </Link>
            <Link href="/about" className="nav-link nav-hide-sm">
              About
            </Link>
            <a
              href="/#contact"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
                fontSize: "11.5px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 20px",
                color: "#0A0A12",
                background: "#00F0FF",
                clipPath:
                  "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
                cursor: "none",
              }}
            >
              Book now
            </a>
          </div>
        </div>
      </nav>

      <main style={{ position: "relative", zIndex: 2 }}>{children}</main>

      <footer
        style={{
          borderTop: "1px solid rgba(0,240,255,0.14)",
          padding: "48px 0 36px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <div
          style={{
            width: "min(1180px,92vw)",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            gap: 20,
            flexWrap: "wrap",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            color: "#7a7f93",
            letterSpacing: "0.06em",
          }}
        >
          <span>© {new Date().getFullYear()} kenai · The way of AI.</span>
          <span style={{ display: "flex", gap: 18, flexWrap: "wrap" }}>
            <Link href="/services" style={{ color: "#7a7f93", textDecoration: "none" }}>
              Services
            </Link>
            <Link href="/industries" style={{ color: "#7a7f93", textDecoration: "none" }}>
              Industries
            </Link>
            <Link href="/case-studies" style={{ color: "#7a7f93", textDecoration: "none" }}>
              Case Studies
            </Link>
            <a href="/#contact" style={{ color: "#00F0FF", textDecoration: "none" }}>
              Book a workshop &gt;_
            </a>
          </span>
        </div>
      </footer>

      <style>{`@media(max-width:600px){.nav-hide-sm{display:none!important}}`}</style>
    </>
  );
}
