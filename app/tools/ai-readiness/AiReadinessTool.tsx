"use client";

import { useMemo, useState } from "react";

type Q = { id: string; q: string; area: string; options: string[] };

const QUESTIONS: Q[] = [
  {
    id: "usage",
    area: "Adoption",
    q: "How much does your team use AI tools in daily work?",
    options: ["Never", "Rarely / a few people", "Some teams, sometimes", "Daily, across the team"],
  },
  {
    id: "policy",
    area: "Governance",
    q: "Do you have an AI usage policy and guardrails?",
    options: ["None", "Thinking about it", "Basic rules exist", "Clear, adopted policy"],
  },
  {
    id: "training",
    area: "Skills",
    q: "Has your team had hands-on AI training?",
    options: ["None", "Self-taught only", "One-off workshop", "Ongoing programs"],
  },
  {
    id: "automation",
    area: "Automation",
    q: "Are repetitive workflows automated with AI?",
    options: ["None", "Considering it", "A few automations", "Many, maintained"],
  },
  {
    id: "roadmap",
    area: "Strategy",
    q: "Do leaders have an AI adoption roadmap?",
    options: ["No", "Vague idea", "Yes, documented", "Yes, with tracking"],
  },
  {
    id: "prompting",
    area: "Skills",
    q: "How confident is the team at writing effective prompts?",
    options: ["Not at all", "Somewhat", "Fairly confident", "Genuinely skilled"],
  },
  {
    id: "measurement",
    area: "Strategy",
    q: "Do you measure AI's impact (hours saved, adoption)?",
    options: ["No", "Anecdotal", "Some metrics", "Tracked properly"],
  },
];

const TIERS = [
  {
    min: 0,
    name: "AI-Curious",
    color: "#FF2E97",
    blurb:
      "You're at the starting line — there's enormous upside available fast. The priority is a first hands-on win and basic guardrails.",
    rec: "ai-workshops",
    recLabel: "Start with an AI Workshop",
  },
  {
    min: 31,
    name: "AI-Emerging",
    color: "#A855F7",
    blurb:
      "Pockets of usage exist but it isn't systematic. The priority is building real skill and standardising what works.",
    rec: "ai-bootcamps",
    recLabel: "Run an AI Bootcamp",
  },
  {
    min: 56,
    name: "AI-Operational",
    color: "#00F0FF",
    blurb:
      "AI is part of how you work. The priority is automation, governance and proving ROI at scale.",
    rec: "corporate-ai-training",
    recLabel: "Scale with Corporate Training",
  },
  {
    min: 81,
    name: "AI-Advanced",
    color: "#00F0FF",
    blurb:
      "You're ahead of the curve. The priority is staying there — strategy, agents and continuous capability.",
    rec: "ai-advisory",
    recLabel: "Sharpen with AI Advisory",
  },
];

function tierFor(pct: number) {
  return [...TIERS].reverse().find((t) => pct >= t.min) ?? TIERS[0];
}

export default function AiReadinessTool() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [emailState, setEmailState] = useState<"idle" | "sending" | "done" | "error">("idle");

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === QUESTIONS.length;

  const { pct, weakest } = useMemo(() => {
    const max = QUESTIONS.length * 3;
    const total = QUESTIONS.reduce((sum, q) => sum + (answers[q.id] ?? 0), 0);
    const pct = Math.round((total / max) * 100);
    // weakest areas = areas with lowest average score
    const areaScores: Record<string, number[]> = {};
    QUESTIONS.forEach((q) => {
      (areaScores[q.area] ||= []).push(answers[q.id] ?? 0);
    });
    const weakest = Object.entries(areaScores)
      .map(([area, scores]) => ({ area, avg: scores.reduce((a, b) => a + b, 0) / scores.length }))
      .sort((a, b) => a.avg - b.avg)
      .slice(0, 2)
      .map((x) => x.area);
    return { pct, weakest };
  }, [answers]);

  const tier = tierFor(pct);

  const submitEmail = async () => {
    if (!email.trim() || !email.includes("@")) {
      setEmailState("error");
      return;
    }
    setEmailState("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          source: "ai-readiness-tool",
          type: "AI readiness action plan",
          meta: { score: pct, tier: tier.name, weakest },
        }),
      });
      setEmailState(res.ok ? "done" : "error");
    } catch {
      setEmailState("error");
    }
  };

  if (submitted) {
    return (
      <div>
        {/* Score */}
        <div
          style={{
            border: `1px solid ${tier.color}55`,
            background: "rgba(255,255,255,0.015)",
            padding: "34px 30px",
            textAlign: "center",
            clipPath:
              "polygon(0 0,calc(100% - 16px) 0,100% 16px,100% 100%,16px 100%,0 calc(100% - 16px))",
          }}
        >
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
            Your AI readiness score
          </div>
          <div
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontWeight: 700,
              fontSize: "4.4rem",
              lineHeight: 1,
              color: tier.color,
              textShadow: `0 0 30px ${tier.color}66`,
            }}
          >
            {pct}
            <span style={{ fontSize: "1.6rem", color: "#7a7f93" }}>/100</span>
          </div>
          <div
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontWeight: 700,
              fontSize: "1.5rem",
              color: "#E5E7EB",
              margin: "10px 0 6px",
            }}
          >
            {tier.name}
          </div>
          <p style={{ color: "#aeb3c4", maxWidth: "50ch", margin: "0 auto", lineHeight: 1.6 }}>
            {tier.blurb}
          </p>

          {/* progress bar */}
          <div style={{ height: 8, background: "rgba(255,255,255,0.08)", marginTop: 24, position: "relative" }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                width: `${pct}%`,
                background: `linear-gradient(90deg, ${tier.color}, #FF2E97)`,
                boxShadow: `0 0 16px ${tier.color}`,
              }}
            />
          </div>
        </div>

        {/* Recommendations */}
        <div style={{ marginTop: 24 }}>
          <div
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#00F0FF",
              marginBottom: 14,
            }}
          >
            Your priority areas: {weakest.join(" · ")}
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href={`/services/${tier.rec}`}
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "14px 24px",
                color: "#0A0A12",
                background: tier.color,
                clipPath:
                  "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
              }}
            >
              &gt; {tier.recLabel}
            </a>
            <a
              href="/#contact"
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                textDecoration: "none",
                padding: "14px 24px",
                color: "#00F0FF",
                boxShadow: "inset 0 0 0 1px rgba(0,240,255,0.5)",
                clipPath:
                  "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
              }}
            >
              Talk to kenai
            </a>
          </div>
        </div>

        {/* Email capture → lead pipeline */}
        <div
          style={{
            marginTop: 24,
            border: "1px solid rgba(0,240,255,0.14)",
            padding: "22px 22px",
            background: "rgba(0,240,255,0.03)",
          }}
        >
          <div
            style={{
              fontFamily: "'Chakra Petch', sans-serif",
              fontWeight: 600,
              fontSize: "1.15rem",
              marginBottom: 6,
            }}
          >
            Get a tailored action plan
          </div>
          <p style={{ color: "#9aa0b3", fontSize: "0.95rem", marginBottom: 14 }}>
            Drop your email and we&apos;ll send a short, specific plan to move your
            score up — based on your weakest areas.
          </p>
          {emailState === "done" ? (
            <div style={{ fontFamily: "'JetBrains Mono', monospace", color: "#00F0FF", fontSize: 13 }}>
              ✦ On its way — check {email}
            </div>
          ) : (
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="form-input"
                style={{ flex: 1, minWidth: 220 }}
              />
              <button
                onClick={submitEmail}
                disabled={emailState === "sending"}
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontWeight: 700,
                  fontSize: 12,
                  textTransform: "uppercase",
                  padding: "12px 20px",
                  color: "#0A0A12",
                  background: "#00F0FF",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                {emailState === "sending" ? "..." : "Send it"}
              </button>
            </div>
          )}
          {emailState === "error" && (
            <div style={{ fontFamily: "'JetBrains Mono', monospace", color: "#FF2E97", fontSize: 12, marginTop: 8 }}>
              &gt; enter a valid email
            </div>
          )}
        </div>

        <button
          onClick={() => {
            setSubmitted(false);
            setAnswers({});
            setEmailState("idle");
          }}
          style={{
            marginTop: 18,
            background: "none",
            border: "none",
            color: "#7a7f93",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 12,
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          ↺ retake the assessment
        </button>
      </div>
    );
  }

  return (
    <div>
      <div style={{ display: "grid", gap: 18 }}>
        {QUESTIONS.map((q, qi) => (
          <div
            key={q.id}
            style={{
              border: "1px solid rgba(0,240,255,0.14)",
              background: "rgba(255,255,255,0.012)",
              padding: "20px 22px",
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10.5,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "#FF2E97",
                marginBottom: 8,
              }}
            >
              {String(qi + 1).padStart(2, "0")} · {q.area}
            </div>
            <div
              style={{
                fontFamily: "'Chakra Petch', sans-serif",
                fontWeight: 600,
                fontSize: "1.12rem",
                marginBottom: 14,
              }}
            >
              {q.q}
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {q.options.map((opt, oi) => {
                const active = answers[q.id] === oi;
                return (
                  <button
                    key={opt}
                    onClick={() => setAnswers((a) => ({ ...a, [q.id]: oi }))}
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: 12.5,
                      padding: "9px 14px",
                      cursor: "pointer",
                      color: active ? "#0A0A12" : "#c4c8d6",
                      background: active ? "#00F0FF" : "transparent",
                      border: `1px solid ${active ? "#00F0FF" : "rgba(0,240,255,0.2)"}`,
                      transition: "all .15s",
                    }}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 24, display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
        <button
          onClick={() => setSubmitted(true)}
          disabled={!allAnswered}
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            fontSize: 14,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            padding: "16px 30px",
            color: allAnswered ? "#0A0A12" : "#7a7f93",
            background: allAnswered ? "#00F0FF" : "rgba(255,255,255,0.05)",
            border: "none",
            cursor: allAnswered ? "pointer" : "not-allowed",
            boxShadow: allAnswered ? "0 0 28px rgba(0,240,255,0.4)" : "none",
            clipPath:
              "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
          }}
        >
          &gt; Calculate my score
        </button>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#7a7f93" }}>
          {answeredCount}/{QUESTIONS.length} answered
        </span>
      </div>
    </div>
  );
}
