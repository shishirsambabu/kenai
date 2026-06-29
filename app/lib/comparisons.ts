/**
 * Comparison catalog → programmatic pages at /compare/[slug].
 * The hand-built /compare/claude-vs-chatgpt page stays separate; these add
 * more "X vs Y" surfaces. Claims are kept evergreen and high-level.
 */

import type { FAQ } from "./catalog";

export type Comparison = {
  slug: string;
  title: string; // "Claude vs Gemini"
  aName: string;
  aMaker: string;
  bName: string;
  bMaker: string;
  summary: string;
  definition: string;
  intro: string[];
  rows: { dim: string; a: string; b: string }[];
  guidance: string[];
  faqs: FAQ[];
  related: { name: string; href: string; desc?: string }[];
};

export const comparisons: Comparison[] = [
  {
    slug: "claude-vs-gemini",
    title: "Claude vs Gemini",
    aName: "Claude",
    aMaker: "Anthropic",
    bName: "Gemini",
    bMaker: "Google",
    summary:
      "Claude (Anthropic) vs Gemini (Google): strengths, best use cases and how to choose for real work. By kenai / Shishir Babu.",
    definition:
      "Claude (by Anthropic) and Gemini (by Google) are both leading AI assistants. Claude is favoured for thoughtful writing, long-document reasoning and a safety-first design; Gemini is favoured for its tight integration with Google Workspace and strong multimodal features. The best choice depends on your stack and task.",
    intro: [
      "Claude and Gemini are both excellent large language models with different centres of gravity. Claude leans into careful reasoning and writing; Gemini leans into the Google ecosystem and multimodal breadth. As with any tool choice, the smart move is understanding each rather than picking a side.",
    ],
    rows: [
      { dim: "Made by", a: "Anthropic", b: "Google" },
      { dim: "Best known for", a: "Thoughtful writing, long-context reasoning, safety-first design", b: "Google Workspace integration, multimodal, broad reach" },
      { dim: "Writing & reasoning", a: "Excellent for nuanced, long-form work", b: "Strong, fast, well-rounded" },
      { dim: "Ecosystem", a: "API, MCP, Claude Code; clean focus", b: "Deeply tied into Google products (Docs, Gmail, Search)" },
      { dim: "Best for at work", a: "HR/L&D writing, analysis, careful reasoning", b: "Teams already living in Google Workspace" },
    ],
    guidance: [
      "Choose Claude when writing quality, long documents and careful reasoning matter most.",
      "Choose Gemini when your team lives in Google Workspace and wants AI woven into Docs, Gmail and Drive.",
      "Either way, the real edge is skill — kenai trains your team to use whichever tool you pick well.",
    ],
    faqs: [
      {
        q: "Is Claude better than Gemini?",
        a: "Neither is universally better. Claude tends to win on writing and careful reasoning; Gemini wins on Google Workspace integration and multimodal breadth. Pick based on your stack and the task.",
      },
      {
        q: "Which is better for HR work?",
        a: "Many HR and L&D professionals prefer Claude for its natural writing and handling of long policy documents. kenai's HR programs are often Claude-native for this reason.",
      },
    ],
    related: [
      { name: "Claude vs ChatGPT", href: "/compare/claude-vs-chatgpt", desc: "The other big comparison." },
      { name: "What is an LLM?", href: "/glossary/large-language-model" },
      { name: "AI Training for HR", href: "/services/ai-training-for-hr" },
    ],
  },
  {
    slug: "chatgpt-vs-gemini",
    title: "ChatGPT vs Gemini",
    aName: "ChatGPT",
    aMaker: "OpenAI",
    bName: "Gemini",
    bMaker: "Google",
    summary:
      "ChatGPT (OpenAI) vs Gemini (Google): features, ecosystem and how to choose for your team. By kenai / Shishir Babu.",
    definition:
      "ChatGPT (by OpenAI) and Gemini (by Google) are two of the most popular AI assistants. ChatGPT is known for its broad feature ecosystem — custom GPTs, image generation and a huge plugin world; Gemini is known for deep Google Workspace integration. The best fit depends on the tools your team already uses.",
    intro: [
      "ChatGPT and Gemini are both general-purpose AI powerhouses. ChatGPT offers the widest feature set and ecosystem; Gemini offers the tightest Google integration. Most teams can do excellent work with either — the differentiator is how skilfully people use it.",
    ],
    rows: [
      { dim: "Made by", a: "OpenAI", b: "Google" },
      { dim: "Best known for", a: "Feature ecosystem: custom GPTs, image generation, plugins", b: "Google Workspace integration, multimodal" },
      { dim: "Ecosystem", a: "Vast third-party and custom-GPT ecosystem", b: "Native to Google products" },
      { dim: "Multimodal", a: "Strong image and voice tools", b: "Strong multimodal across Google surfaces" },
      { dim: "Best for at work", a: "General productivity and breadth", b: "Teams standardised on Google Workspace" },
    ],
    guidance: [
      "Choose ChatGPT for breadth — custom GPTs, image generation and a huge ecosystem.",
      "Choose Gemini if your team runs on Google Workspace and wants AI inside Docs, Gmail and Drive.",
      "Whichever you choose, kenai trains your team to get real, repeatable results from it.",
    ],
    faqs: [
      {
        q: "Should my company use ChatGPT or Gemini?",
        a: "Look at your existing tools. If you run on Google Workspace, Gemini integrates beautifully; if you want the broadest feature set and ecosystem, ChatGPT leads. Many teams use both.",
      },
    ],
    related: [
      { name: "Claude vs ChatGPT", href: "/compare/claude-vs-chatgpt" },
      { name: "What is Generative AI?", href: "/glossary/generative-ai" },
      { name: "AI Training for Business", href: "/services/ai-training-for-business" },
    ],
  },
  {
    slug: "n8n-vs-zapier",
    title: "n8n vs Zapier",
    aName: "n8n",
    aMaker: "n8n",
    bName: "Zapier",
    bMaker: "Zapier",
    summary:
      "n8n vs Zapier for AI automation: flexibility, cost and control. How to choose the right workflow tool. By kenai / Shishir Babu.",
    definition:
      "n8n and Zapier are both workflow automation tools that connect apps and AI. n8n is open-source and self-hostable, favoured for flexibility, control and cost at scale; Zapier is a polished, hosted tool favoured for ease of use and its huge app library. For AI automation, n8n often wins on power and price; Zapier wins on simplicity.",
    intro: [
      "When teams start automating with AI, the tool question comes up fast: n8n or Zapier? Both connect apps and AI into automated workflows. n8n gives you more power, flexibility and control (and is self-hostable); Zapier gives you the smoothest no-code experience and the largest app catalog.",
    ],
    rows: [
      { dim: "Type", a: "Open-source, self-hostable", b: "Hosted SaaS" },
      { dim: "Best for", a: "Flexibility, control, cost at scale, complex flows", b: "Ease of use, fast setup, huge app library" },
      { dim: "AI workflows", a: "Powerful — full control over logic and data", b: "Easy — many AI steps built in" },
      { dim: "Cost", a: "Low/predictable (self-host) ", b: "Can rise with task volume" },
      { dim: "Learning curve", a: "Steeper, but more capable", b: "Gentle, no-code friendly" },
    ],
    guidance: [
      "Choose n8n when you want power, control and predictable cost — kenai teaches n8n in its automation programs.",
      "Choose Zapier when you want the fastest no-code setup and the widest app catalog.",
      "Many teams start on Zapier and graduate to n8n as their automations get serious.",
    ],
    faqs: [
      {
        q: "Is n8n better than Zapier?",
        a: "It depends. n8n is more powerful, flexible and cost-effective at scale (and self-hostable); Zapier is easier and has a larger app library. kenai teaches n8n because it gives teams the most control over AI automation.",
      },
    ],
    related: [
      { name: "What is Workflow Automation?", href: "/glossary/workflow-automation" },
      { name: "AI Automation service", href: "/services/ai-automation" },
      { name: "3-Day AI Bootcamp", href: "/bootcamp" },
    ],
  },
];

export const getComparison = (slug: string) => comparisons.find((c) => c.slug === slug);
