"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StickyCTA() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      // Show after the hero, hide near the contact section at the very bottom.
      setShow(y > window.innerHeight * 0.9 && y < h - 600);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && !dismissed && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="sticky-cta"
          style={{
            position: "fixed",
            bottom: 18,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 7000,
            display: "flex",
            alignItems: "center",
            gap: 16,
            padding: "12px 14px 12px 22px",
            background: "rgba(13,13,24,0.94)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(0,240,255,0.3)",
            boxShadow: "0 16px 50px rgba(0,0,0,0.6), 0 0 30px rgba(0,240,255,0.12)",
            clipPath: "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
            maxWidth: "94vw",
          }}
        >
          <span
            className="sticky-cta-text"
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontWeight: 600,
              fontSize: "1rem",
              color: "#E5E7EB",
              whiteSpace: "nowrap",
            }}
          >
            Ready to make your team{" "}
            <span style={{ color: "#00F0FF" }}>AI-capable?</span>
          </span>
          <a
            href="#contact"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              fontSize: 12.5,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "11px 20px",
              color: "#0A0A12",
              background: "#00F0FF",
              clipPath: "polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px)",
              cursor: "none",
              whiteSpace: "nowrap",
            }}
          >
            &gt; Book a workshop
          </a>
          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss"
            style={{
              background: "none",
              border: "none",
              color: "#7a7f93",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 16,
              cursor: "none",
              padding: "0 4px",
              lineHeight: 1,
            }}
          >
            ✕
          </button>
        </motion.div>
      )}
      <style>{`@media(max-width:560px){.sticky-cta-text{display:none!important}}`}</style>
    </AnimatePresence>
  );
}
