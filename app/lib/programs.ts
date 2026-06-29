/**
 * Flagship training programs + pricing. Drives the bootcamp landing page,
 * the pricing page, and Course/Offer JSON-LD.
 */

import type { FAQ } from "./catalog";

export type BootcampDay = {
  day: number;
  label: string;
  title: string;
  summary: string;
  topics: string[];
  accent: "#00F0FF" | "#FF2E97" | "#A855F7";
};

export type Program = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  priceINR: number;
  priceLabel: string;
  durationDays: number;
  mode: string;
  level: string;
  intro: string[];
  days: BootcampDay[];
  outcomes: string[];
  includes: string[];
  audience: string[];
  faqs: FAQ[];
};

export const bootcamp: Program = {
  slug: "ai-bootcamp",
  name: "kenai 3-Day AI Bootcamp — Claude, Cowork, Code & Automation",
  shortName: "3-Day AI Bootcamp",
  tagline: "Go from curious to genuinely capable with Claude and AI automation — in three days.",
  summary:
    "A hands-on 3-day AI bootcamp by Shishir Babu. Day 1 Claude architecture, Day 2 Claude Cowork & Claude Code, Day 3 automation with Codex & agents. ₹6,999.",
  priceINR: 6999,
  priceLabel: "₹6,999",
  durationDays: 3,
  mode: "Live · online or on-site",
  level: "Beginner to intermediate — no coding background required",
  intro: [
    "The kenai 3-Day AI Bootcamp is the fastest way to go from 'I use AI sometimes' to genuinely building with it. It's hands-on from the first hour — you work on real tasks with Claude, Claude Code and automation tools, guided by Shishir Babu.",
    "Three focused days, one outcome: you leave able to architect solutions with Claude, co-work and build with Claude Code, and automate real workflows with Codex and agents. All for ₹6,999.",
  ],
  days: [
    {
      day: 1,
      label: "Day 01",
      title: "Claude Architecture",
      summary:
        "Understand how Claude actually works and how to architect real solutions with it.",
      topics: [
        "How Claude (Anthropic) works: models, context windows and reasoning",
        "Projects, prompts and Claude Skills — structuring work that scales",
        "Prompt architecture: giving context, constraints and format for reliable output",
        "Responsible use: what to put in, what to keep out, keeping a human in the loop",
        "Hands-on: design a Claude-powered workflow for your own real task",
      ],
      accent: "#00F0FF",
    },
    {
      day: 2,
      label: "Day 02",
      title: "Claude Cowork & Claude Code",
      summary:
        "Turn Claude into a true co-worker and start building with Claude Code.",
      topics: [
        "Claude as a co-worker: collaborating on documents, analysis and decisions",
        "Claude Code: building, editing and automating from the terminal / IDE",
        "Connecting Claude to your tools and files (MCP, integrations)",
        "From prompt to working artifact: real builds, not demos",
        "Hands-on: ship something real with Claude Code by end of day",
      ],
      accent: "#A855F7",
    },
    {
      day: 3,
      label: "Day 03",
      title: "Automation with Codex & Agents",
      summary:
        "Automate end-to-end workflows using Codex, agents and n8n.",
      topics: [
        "Automation foundations: triggers, steps and when to automate",
        "Building with Codex and AI coding agents",
        "Orchestrating multi-step workflows with n8n and agents",
        "Putting it together: an automation that saves you hours every week",
        "Capstone: your own automation + a plan to keep building",
      ],
      accent: "#FF2E97",
    },
  ],
  outcomes: [
    "Architect real solutions with Claude — not just chat with it",
    "Co-work with Claude and build with Claude Code hands-on",
    "Automate end-to-end workflows with Codex, agents and n8n",
    "A capstone project plus a plan to keep building after the bootcamp",
    "Certificate of completion from kenai",
  ],
  includes: [
    "3 live days (online or on-site), fully hands-on",
    "Take-home prompt, skill and automation kit",
    "Capstone project + certificate",
    "Templates, workflows and reference material",
  ],
  audience: [
    "Professionals who want to genuinely build with AI, not just use it",
    "HR, ops, marketing and product folks ready to automate their work",
    "Founders and teams adopting an AI-native way of working",
    "Students and career-switchers wanting an employable AI edge",
  ],
  faqs: [
    {
      q: "How much is the 3-day AI bootcamp?",
      a: "The kenai 3-Day AI Bootcamp is ₹6,999 per seat. It covers all three days — Claude architecture, Claude Cowork & Claude Code, and automation with Codex & agents — plus templates, a capstone and a certificate.",
    },
    {
      q: "Do I need to know how to code?",
      a: "No. The bootcamp is designed for beginners to intermediate learners with no coding background. You'll work hands-on with Claude, Claude Code and automation tools at a pace that builds real confidence.",
    },
    {
      q: "What will I be able to do after the 3 days?",
      a: "You'll be able to architect solutions with Claude, co-work and build with Claude Code, and automate real workflows using Codex and agents — and you'll have a capstone project to prove it.",
    },
    {
      q: "Is it online or in person?",
      a: "Both. The bootcamp runs as live online cohorts worldwide and on-site sessions across India. Email hello@kenai.in for the next cohort dates or to book a private team bootcamp.",
    },
    {
      q: "Who runs the bootcamp?",
      a: "It's led by Shishir Babu (Sam), founder of kenai, AI trainer and L&D consultant, and winner of the Indywood HR Excellence Award 2026.",
    },
  ],
};

export type PricingTier = {
  slug: string;
  name: string;
  price: string;
  priceNote: string;
  highlight?: boolean;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  accent: "#00F0FF" | "#FF2E97" | "#A855F7";
};

export const pricingTiers: PricingTier[] = [
  {
    slug: "bootcamp",
    name: "3-Day AI Bootcamp",
    price: "₹6,999",
    priceNote: "per seat",
    highlight: true,
    description:
      "The flagship. Claude architecture, Claude Cowork & Code, and automation with Codex — hands-on across three days.",
    features: [
      "3 live hands-on days",
      "Claude + Claude Code + automation",
      "Capstone + certificate",
      "Take-home kit",
    ],
    cta: { label: "Book the bootcamp", href: "/bootcamp" },
    accent: "#FF2E97",
  },
  {
    slug: "workshop",
    name: "Team Workshop",
    price: "Custom",
    priceNote: "half / full day",
    description:
      "A high-impact, hands-on session that gets your team using AI the same day. Priced per session and team size.",
    features: [
      "Half or full day",
      "Role-specific use cases",
      "On-site or online",
      "Take-home prompt kit",
    ],
    cta: { label: "Get a quote", href: "/#contact" },
    accent: "#00F0FF",
  },
  {
    slug: "corporate",
    name: "Corporate Training",
    price: "Custom",
    priceNote: "org-wide",
    description:
      "A tailored, org-wide rollout mapped to your stack, policies and goals — with adoption tracking.",
    features: [
      "Custom curriculum",
      "Tool integration (M365, Google, n8n)",
      "Manager enablement",
      "Adoption tracking",
    ],
    cta: { label: "Talk to us", href: "/#contact" },
    accent: "#A855F7",
  },
  {
    slug: "advisory",
    name: "AI Advisory",
    price: "Custom",
    priceNote: "fractional / retainer",
    description:
      "Fractional AI guidance for leaders — strategy, governance and the roadmap to make adoption stick.",
    features: [
      "AI adoption strategy",
      "Governance guardrails",
      "On-call expert",
      "Monthly or project-based",
    ],
    cta: { label: "Enquire", href: "/#contact" },
    accent: "#00F0FF",
  },
];
