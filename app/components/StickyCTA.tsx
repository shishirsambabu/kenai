"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Scroll-triggered, dismissible sticky CTA. Appears once the visitor has
 * scrolled past the hero, stays out of the way, and remembers a dismissal
 * for the session. Drives the same booking pipeline as the contact form.
 */
const DISMISS_KEY = "kenai_cta_dismissed";

export default function StickyCTA() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(DISMISS_KEY) === "1") return;
    setDismissed(false);

    const onScroll = () => setShow(window.scrollY > 760);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const dismiss = () => {
    setShow(false);
    setDismissed(true);
    try {
      sessionStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          role="complementary"
          aria-label="Book an AI workshop with kenai"
          style={{
            position: "fixed",
            bottom: 20,
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 8500,
            width: "min(560px, 92vw)",
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "12px 14px 12px 18px",
            background: "rgba(13,13,24,0.92)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(0,240,255,0.28)",
            boxShadow:
              "0 20px 60px rgba(0,0,0,0.6), 0 0 40px rgba(0,240,255,0.12)",
            clipPath:
              "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#00F0FF",
                marginBottom: 3,
              }}
            >
              &gt;_ ready to do AI?
            </div>
            <div
              style={{
                fontFamily: "'Chakra Petch', sans-serif",
                fontWeight: 600,
                fontSize: "1.02rem",
                color: "#E5E7EB",
                lineHeight: 1.2,
              }}
            >
              Book a hands-on workshop for your team.
            </div>
          </div>

          <a
            href="/#contact"
            style={{
              flexShrink: 0,
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 700,
              fontSize: 12,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "11px 18px",
              color: "#0A0A12",
              background: "#00F0FF",
              clipPath:
                "polygon(8px 0,100% 0,100% calc(100% - 8px),calc(100% - 8px) 100%,0 100%,0 8px)",
              boxShadow: "0 0 22px rgba(0,240,255,0.4)",
            }}
          >
            Book now &gt;
          </a>

          <button
            onClick={dismiss}
            aria-label="Dismiss"
            style={{
              flexShrink: 0,
              background: "none",
              border: "1px solid rgba(122,127,147,0.4)",
              color: "#7a7f93",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13,
              lineHeight: 1,
              width: 28,
              height: 28,
              cursor: "pointer",
            }}
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
