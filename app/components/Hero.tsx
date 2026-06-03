"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const SEQ = [
  { t: '<span style="color:#00F0FF">kenai@thewayofai</span><span style="color:#E5E7EB">:~$ </span>', d: 0 },
  { t: '<span style="color:#E5E7EB">whoami</span>\n', d: 38 },
  { t: '<span style="color:#7a7f93">> AI trainer · L&D consultant · India</span>\n\n', d: 18 },
  { t: '<span style="color:#00F0FF">kenai@thewayofai</span><span style="color:#E5E7EB">:~$ </span>', d: 0 },
  { t: '<span style="color:#E5E7EB">run --mission</span>\n', d: 38 },
  { t: '<span style="color:#FF2E97">>> The way of AI.</span>\n', d: 22 },
  { t: `<span style="color:#7a7f93">>> don't just use AI — master it.</span>\n`, d: 16 },
  { t: '<span style="color:#7a7f93">>> learn by doing.</span>\n\n', d: 16 },
  { t: '<span style="color:#00F0FF">kenai@thewayofai</span><span style="color:#E5E7EB">:~$ </span><span class="term-cursor"></span>', d: 0 },
];

interface HeroProps {
  started: boolean;
}

export default function Hero({ started }: HeroProps) {
  const termRef = useRef<HTMLDivElement>(null);
  const doneRef = useRef(false);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollY } = useScroll();
  const rawOrbY = useTransform(scrollY, [0, 600], [0, -80]);
  const orbY = useSpring(rawOrbY, { stiffness: 80, damping: 20 });
  const rawOrbY2 = useTransform(scrollY, [0, 600], [0, 60]);
  const orbY2 = useSpring(rawOrbY2, { stiffness: 60, damping: 18 });
  const rawHeroOpacity = useTransform(scrollY, [0, 400], [1, 0.4]);

  useEffect(() => {
    if (!started || doneRef.current) return;
    doneRef.current = true;

    const body = termRef.current;
    if (!body) return;

    let html = "";
    let si = 0;

    const step = () => {
      if (si >= SEQ.length) return;
      const item = SEQ[si];
      html += item.t;
      body.innerHTML = html;
      body.scrollTop = body.scrollHeight;
      si++;
      const delay =
        item.d === 0
          ? 240
          : item.t.replace(/<[^>]+>/g, "").length * item.d + 100;
      setTimeout(step, delay);
    };
    step();
  }, [started]);

  const stagger = (i: number) => ({
    hidden: { opacity: 0, y: 36 },
    show: {
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 + 0.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  });

  return (
    <motion.header
      ref={containerRef}
      id="top"
      style={{
        position: "relative",
        minHeight: "100svh",
        display: "flex",
        alignItems: "center",
        padding: "120px 0 80px",
        overflow: "hidden",
        opacity: rawHeroOpacity,
      }}
    >
      <div className="grid-floor" />

      {/* Parallax orbs */}
      <motion.div style={{ y: orbY, position: "absolute", top: -120, right: -80, zIndex: 0, pointerEvents: "none" }}>
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.45, 0.6, 0.45] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 560,
            height: 560,
            borderRadius: "50%",
            filter: "blur(90px)",
            background: "radial-gradient(circle,rgba(0,240,255,.65),transparent 70%)",
          }}
        />
      </motion.div>

      <motion.div style={{ y: orbY2, position: "absolute", bottom: -120, left: -120, zIndex: 0, pointerEvents: "none" }}>
        <motion.div
          animate={{ scale: [1, 1.12, 1], opacity: [0.4, 0.55, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          style={{
            width: 480,
            height: 480,
            borderRadius: "50%",
            filter: "blur(90px)",
            background: "radial-gradient(circle,rgba(255,46,151,.5),transparent 70%)",
          }}
        />
      </motion.div>

      <motion.div
        animate={{ y: [0, -20, 0], x: [0, 10, 0], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        style={{
          position: "absolute",
          width: 380,
          height: 380,
          borderRadius: "50%",
          filter: "blur(80px)",
          background: "radial-gradient(circle,rgba(168,85,247,.45),transparent 70%)",
          top: "30%",
          left: "38%",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          width: "min(1180px,92vw)",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
          display: "grid",
          gridTemplateColumns: "1.15fr .85fr",
          gap: 50,
          alignItems: "center",
        }}
        className="hero-grid"
      >
        {/* Left */}
        <div>
          <motion.div
            variants={stagger(0)}
            initial="hidden"
            animate={started ? "show" : "hidden"}
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#00F0FF",
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              marginBottom: 22,
            }}
          >
            <motion.span
              animate={{ color: ["#FF2E97", "#A855F7", "#FF2E97"] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ fontWeight: 700 }}
            >
              &gt;
            </motion.span>
            AI consulting · training · the discipline
          </motion.div>

          {/* Big wordmark */}
          <motion.div
            variants={stagger(1)}
            initial="hidden"
            animate={started ? "show" : "hidden"}
            className="glitch"
            data-text="kenai_"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              fontSize: "clamp(3.6rem,9.5vw,6.8rem)",
              lineHeight: 0.88,
              marginBottom: 8,
            }}
          >
            <span style={{ color: "#fff" }}>ken</span>
            <motion.span
              animate={{
                textShadow: [
                  "0 0 40px rgba(0,240,255,.7),0 0 80px rgba(0,240,255,.35)",
                  "0 0 60px rgba(0,240,255,.9),0 0 120px rgba(0,240,255,.5)",
                  "0 0 40px rgba(0,240,255,.7),0 0 80px rgba(0,240,255,.35)",
                ],
              }}
              transition={{ duration: 2.5, repeat: Infinity }}
              style={{ color: "#00F0FF" }}
            >
              ai
            </motion.span>
            <span className="blink" style={{ color: "#FF2E97", textShadow: "0 0 24px #FF2E97" }}>
              _
            </span>
          </motion.div>

          <motion.h1
            variants={stagger(2)}
            initial="hidden"
            animate={started ? "show" : "hidden"}
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.5rem,3.4vw,2.7rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
              margin: "16px 0 18px",
            }}
          >
            Don&apos;t just use AI.{" "}
            <motion.b
              animate={{
                color: ["#00F0FF", "#7df6ff", "#00F0FF"],
                textShadow: [
                  "0 0 22px rgba(0,240,255,.55)",
                  "0 0 40px rgba(0,240,255,.8)",
                  "0 0 22px rgba(0,240,255,.55)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ color: "#00F0FF" }}
            >
              Master it.
            </motion.b>
          </motion.h1>

          <motion.p
            variants={stagger(3)}
            initial="hidden"
            animate={started ? "show" : "hidden"}
            style={{
              color: "#aeb3c4",
              fontSize: "clamp(1rem,1.6vw,1.18rem)",
              maxWidth: "46ch",
              marginBottom: 32,
              lineHeight: 1.7,
            }}
          >
            AI consulting for HR and hands-on AI &amp; automation training for
            businesses and colleges. Learn by doing — the way of AI.
            India-first, globally relevant.
          </motion.p>

          <motion.div
            variants={stagger(4)}
            initial="hidden"
            animate={started ? "show" : "hidden"}
            style={{ display: "flex", gap: 16, flexWrap: "wrap" }}
          >
            <HeroBtn href="#contact" primary>
              &gt; Book a workshop
            </HeroBtn>
            <HeroBtn href="#offerings">View offerings</HeroBtn>
          </motion.div>

          <motion.div
            variants={stagger(5)}
            initial="hidden"
            animate={started ? "show" : "hidden"}
            style={{
              marginTop: 36,
              display: "flex",
              gap: 28,
              flexWrap: "wrap",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "11.5px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#7a7f93",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <span className="dot-pulse" />
              Workshops · Bootcamps · Advisory
            </span>
            <span>
              <span style={{ color: "#00F0FF", textShadow: "0 0 12px rgba(0,240,255,0.5)" }}>
                kenai.in
              </span>
            </span>
          </motion.div>

          {/* Floating stat pills */}
          <motion.div
            variants={stagger(6)}
            initial="hidden"
            animate={started ? "show" : "hidden"}
            style={{ marginTop: 32, display: "flex", gap: 12, flexWrap: "wrap" }}
          >
            {[
              { val: "100+", label: "Trained" },
              { val: "40+", label: "Workshops" },
              { val: "15+", label: "Orgs" },
            ].map((stat) => (
              <motion.div
                key={stat.val}
                whileHover={{ y: -2, borderColor: "rgba(0,240,255,0.5)" }}
                style={{
                  padding: "8px 16px",
                  border: "1px solid rgba(0,240,255,0.15)",
                  background: "rgba(0,240,255,0.04)",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  cursor: "default",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Chakra Petch', sans-serif",
                    fontWeight: 700,
                    color: "#00F0FF",
                    fontSize: "1.1rem",
                    textShadow: "0 0 14px rgba(0,240,255,0.5)",
                  }}
                >
                  {stat.val}
                </span>
                <span
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 10,
                    color: "#7a7f93",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Terminal */}
        <motion.div
          variants={stagger(3)}
          initial="hidden"
          animate={started ? "show" : "hidden"}
          style={{ position: "relative" }}
        >
          {/* Glow behind terminal */}
          <div
            style={{
              position: "absolute",
              inset: -20,
              background: "radial-gradient(ellipse, rgba(0,240,255,0.08) 0%, transparent 70%)",
              pointerEvents: "none",
              borderRadius: 4,
            }}
          />
          <motion.div
            animate={{
              boxShadow: [
                "0 0 0 1px rgba(255,46,151,.04),0 24px 70px rgba(0,0,0,.6),0 0 40px rgba(0,240,255,.06)",
                "0 0 0 1px rgba(255,46,151,.08),0 24px 70px rgba(0,0,0,.7),0 0 60px rgba(0,240,255,.12)",
                "0 0 0 1px rgba(255,46,151,.04),0 24px 70px rgba(0,0,0,.6),0 0 40px rgba(0,240,255,.06)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="hero-term-clip"
            style={{
              background: "linear-gradient(180deg,rgba(13,13,24,.98),rgba(10,10,18,.98))",
              border: "1px solid rgba(0,240,255,0.14)",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 13,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 16px",
                borderBottom: "1px solid rgba(0,240,255,0.1)",
                background: "rgba(0,240,255,0.025)",
              }}
            >
              {["#FF2E97", "#A855F7", "#00F0FF"].map((c, i) => (
                <motion.span
                  key={c}
                  animate={{ opacity: [1, 0.6, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                  style={{
                    width: 10, height: 10, borderRadius: "50%",
                    display: "inline-block", background: c,
                    boxShadow: `0 0 8px ${c}`,
                  }}
                />
              ))}
              <span style={{ marginLeft: 8, color: "#7a7f93", fontSize: 11, letterSpacing: "0.1em" }}>
                kenai@thewayofai: ~
              </span>
            </div>
            <div
              ref={termRef}
              style={{ padding: "20px 18px", minHeight: 240, lineHeight: 1.95, overflowY: "auto" }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={started ? { opacity: 1 } : {}}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: "absolute",
          bottom: 36,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          zIndex: 3,
        }}
      >
        <span
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#7a7f93",
          }}
        >
          scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          style={{
            width: 1,
            height: 36,
            background: "linear-gradient(180deg, #00F0FF, transparent)",
          }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 920px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </motion.header>
  );
}

function HeroBtn({
  href,
  primary,
  children,
}: {
  href: string;
  primary?: boolean;
  children: React.ReactNode;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{
        y: -3,
        boxShadow: primary
          ? "0 0 36px rgba(0,240,255,0.7), 0 8px 24px rgba(0,0,0,0.4)"
          : "inset 0 0 0 1px #00F0FF, 0 0 28px rgba(0,240,255,0.4)",
        ...(primary ? { background: "#7df6ff" } : { background: "rgba(0,240,255,0.06)" }),
      }}
      whileTap={{ scale: 0.97 }}
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontWeight: 700,
        fontSize: 13,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        textDecoration: "none",
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "15px 28px",
        clipPath: "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
        transition: "background .18s",
        cursor: "none",
        ...(primary
          ? { color: "#0A0A12", background: "#00F0FF" }
          : { color: "#00F0FF", background: "transparent", boxShadow: "inset 0 0 0 1px rgba(0,240,255,0.5)" }),
      }}
    >
      {children}
    </motion.a>
  );
}
