"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Glossary", href: "/glossary" },
  { label: "Claude vs ChatGPT", href: "/compare/claude-vs-chatgpt" },
  { label: "Tools", href: "/tools/ai-readiness" },
  { label: "About", href: "/about" },
];

/** Cross-page navigation (uses real routes). Used on all sub-pages. */
export default function SiteNav() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 8000,
          padding: stuck ? "10px 0" : "16px 0",
          background: stuck ? "rgba(10,10,18,0.9)" : "rgba(10,10,18,0.4)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderBottom: `1px solid ${stuck ? "rgba(0,240,255,0.12)" : "transparent"}`,
          transition: "background .3s, padding .3s, border-color .3s",
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
              <span className="blink" style={{ color: "#FF2E97" }}>
                _
              </span>
            </span>
            <span>
              <span style={{ color: "#E5E7EB" }}>ken</span>
              <span style={{ color: "#00F0FF", textShadow: "0 0 18px rgba(0,240,255,0.7)" }}>
                ai
              </span>
            </span>
          </Link>

          <div className="snav-desktop" style={{ display: "flex", gap: 22, alignItems: "center" }}>
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} className="nav-link">
                {l.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
                fontSize: "11.5px",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "10px 18px",
                color: "#0A0A12",
                background: "#00F0FF",
                clipPath:
                  "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
              }}
            >
              Book now
            </Link>
          </div>

          <button
            className="snav-burger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            style={{
              display: "none",
              background: "none",
              border: "1px solid rgba(0,240,255,0.2)",
              color: "#00F0FF",
              fontFamily: "'JetBrains Mono', monospace",
              padding: "8px 14px",
              fontSize: 12,
            }}
          >
            {open ? "[ X ]" : "≡ menu"}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            style={{
              position: "fixed",
              top: 56,
              left: 0,
              right: 0,
              zIndex: 7999,
              background: "rgba(10,10,18,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(0,240,255,0.12)",
              padding: "20px min(5vw,40px)",
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 14,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#E5E7EB",
                  textDecoration: "none",
                  display: "flex",
                  gap: 10,
                }}
              >
                <span style={{ color: "#FF2E97" }}>&gt;</span> {l.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
                fontSize: 13,
                textTransform: "uppercase",
                textDecoration: "none",
                textAlign: "center",
                padding: "13px 20px",
                color: "#0A0A12",
                background: "#00F0FF",
                marginTop: 6,
              }}
            >
              &gt; Book a workshop
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 980px) {
          .snav-desktop { display: none !important; }
          .snav-burger { display: block !important; }
        }
      `}</style>
    </>
  );
}
