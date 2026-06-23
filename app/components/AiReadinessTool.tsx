"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Eyebrow from "./Eyebrow";
import LeadForm from "./LeadForm";

interface Q {
  id: string;
  dimension: string;
  q: string;
  options: { label: string; score: number }[];
}

const QUESTIONS: Q[] = [
  {
    id: "strategy",
    dimension: "Strategy",
    q: "How clear is your organisation's AI strategy?",
    options: [
      { label: "No strategy — we're reacting to the hype", score: 0 },
      { label: "Some conversations, nothing written down", score: 1 },
      { label: "A rough plan, not yet prioritised", score: 2 },
      { label: "A prioritised roadmap with owners", score: 3 },
    ],
  },
  {
    id: "skills",
    dimension: "Skills",
    q: "How capable is your team with AI tools today?",
    options: [
      { label: "Most people haven't really used them", score: 0 },
      { label: "A few enthusiasts, very uneven", score: 1 },
      { label: "Many use AI for basic tasks", score: 2 },
      { label: "Teams build workflows and automations", score: 3 },
    ],
  },
  {
    id: "adoption",
    dimension: "Adoption",
    q: "How is AI used in day-to-day work?",
    options: [
      { label: "Rarely, if ever", score: 0 },
      { label: "Occasional, individual experiments", score: 1 },
      { label: "Regular for some roles", score: 2 },
      { label: "A default working tool across teams", score: 3 },
    ],
  },
  {
    id: "automation",
    dimension: "Automation",
    q: "How much repetitive work have you automated?",
    options: [
      { label: "None — lots of manual busywork", score: 0 },
      { label: "A couple of ad-hoc automations", score: 1 },
      { label: "Several key workflows automated", score: 2 },
      { label: "Automation is part of how we operate", score: 3 },
    ],
  },
  {
    id: "governance",
    dimension: "Governance",
    q: "Do you have AI guidelines and governance?",
    options: [
      { label: "None — it's the wild west", score: 0 },
      { label: "Informal, unwritten norms", score: 1 },
      { label: "Basic guidelines exist", score: 2 },
      { label: "Clear, enforced responsible-use policy", score: 3 },
    ],
  },
  {
    id: "leadership",
    dimension: "Leadership",
    q: "How engaged is leadership in AI adoption?",
    options: [
      { label: "Not on the agenda", score: 0 },
      { label: "Curious but hands-off", score: 1 },
      { label: "Supportive and funding pilots", score: 2 },
      { label: "Actively driving an AI-first agenda", score: 3 },
    ],
  },
];

const MAX = QUESTIONS.length * 3;

function tier(pct: number) {
  if (pct < 30)
    return {
      name: "AI-Curious",
      color: "#FF2E97",
      summary:
        "You're at the starting line — aware of AI's potential but without the strategy, skills or guardrails to capture it yet. The biggest risk here is unmanaged, inconsistent use. The fastest win is a hands-on workshop to build momentum plus a lightweight responsible-use policy.",
      next: "Start with a team workshop and an AI adoption roadmap.",
    };
  if (pct < 55)
    return {
      name: "AI-Aware",
      color: "#A855F7",
      summary:
        "There's real interest and a few wins, but capability is uneven and adoption is patchy. You'll get the most leverage now from structured upskilling and automating your highest-cost manual workflows so the value becomes obvious across teams.",
      next: "Prioritise role-specific training and your first automation builds.",
    };
  if (pct < 80)
    return {
      name: "AI-Capable",
      color: "#00F0FF",
      summary:
        "AI is genuinely part of how several teams work. To reach the next level, focus on governance, agent/automation depth and embedding AI into core processes — turning isolated capability into an organisation-wide advantage.",
      next: "Scale with a transformation program and deeper automation.",
    };
  return {
    name: "AI-Native",
    color: "#00F0FF",
    summary:
      "You're operating ahead of most organisations — AI is a default working tool with governance and leadership behind it. The opportunity now is compounding: custom agents, bespoke solutions and staying on the frontier as models evolve.",
    next: "Push the frontier with custom AI solutions and advisory.",
  };
}

export default function AiReadinessTool() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [unlocked, setUnlocked] = useState(false);

  const answeredCount = Object.keys(answers).length;
  const total = Object.values(answers).reduce((a, b) => a + b, 0);
  const pct = Math.round((total / MAX) * 100);
  const result = tier(pct);
  const allAnswered = answeredCount === QUESTIONS.length;

  return (
    <>
      <header style={{ position: "relative", padding: "150px 0 40px", overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: -140,
            left: "50%",
            transform: "translateX(-50%)",
            width: 600,
            height: 440,
            borderRadius: "50%",
            filter: "blur(110px)",
            background: "radial-gradient(circle, rgba(0,240,255,0.26), transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />
        <div style={{ width: "min(900px,92vw)", margin: "0 auto", position: "relative", zIndex: 2 }}>
          <nav
            aria-label="Breadcrumb"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 12,
              letterSpacing: "0.08em",
              color: "#7a7f93",
              marginBottom: 22,
              display: "flex",
              gap: 8,
            }}
          >
            <Link href="/" style={{ color: "#7a7f93", textDecoration: "none" }}>
              home
            </Link>
            <span style={{ color: "#00F0FF" }}>/</span>
            <span style={{ color: "#7a7f93" }}>tools</span>
            <span style={{ color: "#00F0FF" }}>/</span>
            <span style={{ color: "#E5E7EB" }}>ai-readiness</span>
          </nav>
          <Eyebrow>Free tool · 2 minutes</Eyebrow>
          <h1
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontWeight: 700,
              fontSize: "clamp(2.4rem,6vw,4rem)",
              lineHeight: 1.0,
              letterSpacing: "-0.02em",
              margin: "10px 0 16px",
            }}
          >
            AI Readiness{" "}
            <span style={{ color: "#00F0FF", textShadow: "0 0 26px rgba(0,240,255,.55)" }}>
              Assessment
            </span>
          </h1>
          <p style={{ color: "#aeb3c4", fontSize: "clamp(1.05rem,1.8vw,1.25rem)", maxWidth: "58ch", lineHeight: 1.6 }}>
            Six quick questions to benchmark how ready your organisation is to adopt AI — and exactly
            where to focus next. Get your score and a tailored recommendation.
          </p>
        </div>
      </header>

      <section style={{ padding: "30px 0 90px" }}>
        <div style={{ width: "min(900px,92vw)", margin: "0 auto" }}>
          {/* Progress */}
          <div style={{ marginBottom: 28 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "#7a7f93",
                marginBottom: 8,
              }}
            >
              <span>progress</span>
              <span style={{ color: "#00F0FF" }}>
                {answeredCount}/{QUESTIONS.length}
              </span>
            </div>
            <div style={{ height: 3, background: "rgba(0,240,255,0.12)", overflow: "hidden" }}>
              <motion.div
                animate={{ width: `${(answeredCount / QUESTIONS.length) * 100}%` }}
                style={{ height: "100%", background: "linear-gradient(90deg,#00F0FF,#FF2E97)" }}
              />
            </div>
          </div>

          {/* Questions */}
          <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
            {QUESTIONS.map((q, qi) => (
              <div
                key={q.id}
                style={{
                  padding: "22px 22px 24px",
                  border: "1px solid rgba(0,240,255,0.14)",
                  background: "#0d0d18",
                }}
              >
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: 11,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#FF2E97",
                    marginBottom: 8,
                  }}
                >
                  {String(qi + 1).padStart(2, "0")} · {q.dimension}
                </div>
                <h3
                  style={{
                    fontFamily: "'Chakra Petch', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.25rem",
                    marginBottom: 16,
                  }}
                >
                  {q.q}
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  {q.options.map((opt) => {
                    const active = answers[q.id] === opt.score;
                    return (
                      <button
                        key={opt.label}
                        onClick={() => setAnswers((a) => ({ ...a, [q.id]: opt.score }))}
                        style={{
                          textAlign: "left",
                          padding: "12px 16px",
                          border: `1px solid ${active ? "#00F0FF" : "rgba(0,240,255,0.14)"}`,
                          background: active ? "rgba(0,240,255,0.08)" : "transparent",
                          color: active ? "#E5E7EB" : "#aeb3c4",
                          fontFamily: "'Rajdhani', sans-serif",
                          fontSize: "1.05rem",
                          cursor: "none",
                          display: "flex",
                          alignItems: "center",
                          gap: 12,
                          transition: "border-color .15s, background .15s, color .15s",
                        }}
                      >
                        <span
                          style={{
                            width: 14,
                            height: 14,
                            flexShrink: 0,
                            border: `1px solid ${active ? "#00F0FF" : "#7a7f93"}`,
                            background: active ? "#00F0FF" : "transparent",
                            boxShadow: active ? "0 0 10px rgba(0,240,255,0.6)" : "none",
                          }}
                        />
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Calculate */}
          {!submitted && (
            <motion.button
              onClick={() => allAnswered && setSubmitted(true)}
              whileHover={allAnswered ? { y: -2, boxShadow: "0 0 28px rgba(0,240,255,0.6)" } : undefined}
              style={{
                marginTop: 28,
                width: "100%",
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
                fontSize: 14,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                padding: "17px 26px",
                color: "#0A0A12",
                background: allAnswered ? "#00F0FF" : "#2a3340",
                border: "none",
                clipPath: "polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px)",
                cursor: allAnswered ? "none" : "not-allowed",
              }}
            >
              {allAnswered ? "> Reveal my AI readiness score" : `Answer all ${QUESTIONS.length} questions`}
            </motion.button>
          )}

          {/* Result */}
          <AnimatePresence>
            {submitted && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  marginTop: 34,
                  border: `1px solid ${result.color}55`,
                  background: "#0d0d18",
                  padding: "clamp(26px,4vw,40px)",
                  position: "relative",
                  overflow: "hidden",
                  clipPath:
                    "polygon(0 0,calc(100% - 18px) 0,100% 18px,100% 100%,18px 100%,0 calc(100% - 18px))",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `radial-gradient(ellipse at 50% 0%, ${result.color}14, transparent 70%)`,
                    pointerEvents: "none",
                  }}
                />
                <div style={{ position: "relative" }}>
                  <div
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 11,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#7a7f93",
                      marginBottom: 10,
                    }}
                  >
                    // your result
                  </div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 18, flexWrap: "wrap" }}>
                    <span
                      style={{
                        fontFamily: "'Chakra Petch', sans-serif",
                        fontWeight: 700,
                        fontSize: "clamp(2.6rem,7vw,4rem)",
                        color: result.color,
                        textShadow: `0 0 26px ${result.color}66`,
                        lineHeight: 1,
                      }}
                    >
                      {pct}%
                    </span>
                    <span
                      style={{
                        fontFamily: "'Chakra Petch', sans-serif",
                        fontWeight: 700,
                        fontSize: "clamp(1.4rem,3.5vw,2rem)",
                      }}
                    >
                      {result.name}
                    </span>
                  </div>

                  {!unlocked ? (
                    <div style={{ marginTop: 22 }}>
                      <p style={{ color: "#aeb3c4", fontSize: "1.05rem", marginBottom: 20, maxWidth: "56ch" }}>
                        Enter your email to unlock your full readiness breakdown, what your score means,
                        and the exact next steps for your organisation.
                      </p>
                      <div style={{ maxWidth: 440 }}>
                        <LeadForm
                          source={`ai_readiness_tool · ${result.name} · ${pct}%`}
                          compact
                          submitLabel="> Unlock my full result"
                          terminalLabel="kenai@tools: ai_readiness"
                          onSuccess={() => setUnlocked(true)}
                        />
                      </div>
                    </div>
                  ) : (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ marginTop: 20 }}>
                      <p style={{ color: "#cfd3e0", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: 22, maxWidth: "62ch" }}>
                        {result.summary}
                      </p>
                      <div
                        style={{
                          borderLeft: `2px solid ${result.color}`,
                          padding: "4px 0 4px 18px",
                          marginBottom: 26,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "'JetBrains Mono', monospace",
                            fontSize: 11,
                            letterSpacing: "0.16em",
                            textTransform: "uppercase",
                            color: result.color,
                            display: "block",
                            marginBottom: 6,
                          }}
                        >
                          recommended next step
                        </span>
                        <span style={{ fontSize: "1.1rem", color: "#E5E7EB" }}>{result.next}</span>
                      </div>
                      <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                        <a href="/#contact" style={ctaPrimary(result.color)}>
                          &gt; Book a consult
                        </a>
                        <Link href="/services" style={ctaGhost(result.color)}>
                          Explore services
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}

function ctaPrimary(color: string): React.CSSProperties {
  return {
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "14px 26px",
    color: "#0A0A12",
    background: color,
    boxShadow: `0 0 24px ${color}55`,
    clipPath: "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
    cursor: "none",
  };
}
function ctaGhost(color: string): React.CSSProperties {
  return {
    fontFamily: "'JetBrains Mono', monospace",
    fontWeight: 700,
    fontSize: 13,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    textDecoration: "none",
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "14px 26px",
    color: color,
    background: "transparent",
    boxShadow: `inset 0 0 0 1px ${color}88`,
    clipPath: "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
    cursor: "none",
  };
}
