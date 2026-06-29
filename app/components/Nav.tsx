"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Bootcamp", href: "/bootcamp" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Glossary", href: "/glossary" },
  { label: "Tools", href: "/tools/ai-readiness" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  const [stuck, setStuck] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const sc = window.scrollY;
      setStuck(sc > 40);
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrollPct(h > 0 ? (sc / h) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <motion.div
        className="scrollbar-progress"
        style={{ width: `${scrollPct}%` }}
      />

      <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 8000,
          padding: stuck ? "10px 0" : "18px 0",
          background: stuck ? "rgba(10,10,18,0.88)" : "transparent",
          backdropFilter: stuck ? "blur(20px)" : "none",
          WebkitBackdropFilter: stuck ? "blur(20px)" : "none",
          borderBottom: `1px solid ${stuck ? "rgba(0,240,255,0.12)" : "transparent"}`,
          transition: "background .4s, padding .3s, border-color .3s",
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
          {/* Logo */}
          <motion.a
            href="#top"
            whileHover={{ scale: 1.02 }}
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
              <span
                className="blink"
                style={{ color: "#FF2E97", textShadow: "0 0 14px #FF2E97" }}
              >
                _
              </span>
            </span>
            <span>
              <span style={{ color: "#E5E7EB" }}>ken</span>
              <span style={{ color: "#00F0FF", textShadow: "0 0 18px rgba(0,240,255,0.7)" }}>
                ai
              </span>
            </span>
          </motion.a>

          {/* Desktop links */}
          <div className="nav-desktop" style={{ display: "flex", gap: 24, alignItems: "center" }}>
            {NAV_LINKS.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.06, duration: 0.5 }}
                className="nav-link"
              >
                {item.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.85, duration: 0.5 }}
              whileHover={{
                y: -2,
                boxShadow: "0 0 32px rgba(0,240,255,0.7)",
                background: "#7df6ff",
              }}
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
                clipPath: "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
                transition: "background .18s",
                cursor: "none",
              }}
            >
              Book now
            </motion.a>
          </div>

          {/* Burger */}
          <button
            className="nav-burger"
            onClick={() => setMobileOpen((v) => !v)}
            style={{
              display: "none",
              background: "none",
              border: "1px solid rgba(0,240,255,0.2)",
              color: "#00F0FF",
              fontFamily: "'JetBrains Mono', monospace",
              padding: "8px 14px",
              fontSize: 12,
              letterSpacing: "0.1em",
              cursor: "none",
            }}
          >
            {mobileOpen ? "[ X ]" : "&gt;_ menu"}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "fixed",
              top: 60,
              left: 0,
              right: 0,
              zIndex: 7999,
              background: "rgba(10,10,18,0.97)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid rgba(0,240,255,0.12)",
              padding: "24px min(5vw,40px)",
              display: "flex",
              flexDirection: "column",
              gap: 18,
            }}
          >
            {NAV_LINKS.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 14,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#E5E7EB",
                  textDecoration: "none",
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(0,240,255,0.06)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ color: "#FF2E97" }}>&gt;</span> {item.label}
              </motion.a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 10,
                padding: "14px 20px",
                color: "#0A0A12",
                background: "#00F0FF",
                marginTop: 8,
                clipPath: "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
                cursor: "none",
              }}
            >
              &gt; Book a workshop
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 920px) {
          .nav-desktop { display: none !important; }
          .nav-burger { display: block !important; }
        }
      `}</style>
    </>
  );
}
