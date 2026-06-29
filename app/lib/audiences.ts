/**
 * Audience/role catalog → programmatic pages at /ai-for/[slug].
 * Targets "AI for <role>" intent — high-value long-tail.
 */

import type { FAQ } from "./catalog";

export type Audience = {
  slug: string;
  name: string; // "AI for Recruiters"
  role: string; // "recruiters"
  tagline: string;
  summary: string;
  intro: string[];
  painPoints: string[];
  useCases: string[];
  faqs: FAQ[];
  relatedServices: string[];
  accent: "#00F0FF" | "#FF2E97" | "#A855F7";
};

export const audiences: Audience[] = [
  {
    slug: "recruiters",
    name: "AI for Recruiters",
    role: "recruiters",
    tagline: "Source, screen and write faster — without losing the human touch.",
    summary:
      "Practical AI training for recruiters — sourcing, screening, JD writing and outreach with AI, done responsibly. By kenai / Shishir Babu.",
    intro: [
      "Recruiting is high-volume, high-judgment work — exactly where AI helps most when used well. kenai trains recruiters to use AI for sourcing, screening, job descriptions and candidate outreach, while keeping a human in the loop for the decisions that matter.",
    ],
    painPoints: [
      "Writing JDs and outreach from scratch eats hours",
      "Screening at volume is slow and inconsistent",
      "Unsure what candidate data is safe to put into AI tools",
    ],
    useCases: [
      "Draft and tailor job descriptions in minutes",
      "Summarise and compare candidate profiles responsibly",
      "Personalise outreach sequences at scale",
      "Build interview guides and scorecards with AI",
    ],
    faqs: [
      {
        q: "Is it safe to use AI with candidate data?",
        a: "Yes, with the right guardrails. kenai teaches a responsible-use framework — what to put in, what to keep out, and where a human must review — so you stay compliant while saving time.",
      },
    ],
    relatedServices: ["ai-training-for-hr", "ai-workshops", "ai-bootcamps"],
    accent: "#FF2E97",
  },
  {
    slug: "hr-managers",
    name: "AI for HR Managers",
    role: "HR managers",
    tagline: "Lead AI adoption across your people function — responsibly.",
    summary:
      "AI training for HR managers — adopt AI across hiring, onboarding, ops and people decisions with confidence. By kenai / Shishir Babu.",
    intro: [
      "HR managers are being asked to lead AI adoption while managing real risk. kenai gives you the skills and the framework to roll out AI across your function — practically, responsibly, and in a way your team actually adopts.",
    ],
    painPoints: [
      "Pressure to 'do AI' without a clear plan",
      "Repetitive HR ops consume the week",
      "Governance and data concerns slow everything down",
    ],
    useCases: [
      "Automate letters, FAQs and policy drafting",
      "Build an AI usage policy your legal team accepts",
      "Upskill the whole HR team hands-on",
      "Track adoption and prove ROI",
    ],
    faqs: [
      {
        q: "How do I roll AI out without chaos?",
        a: "Start with guardrails and a hands-on pilot. kenai helps you set responsible-use rules, train the team on real work, and track adoption so it sticks instead of stalling.",
      },
    ],
    relatedServices: ["ai-training-for-hr", "corporate-ai-training", "ai-advisory"],
    accent: "#FF2E97",
  },
  {
    slug: "founders",
    name: "AI for Founders",
    role: "founders",
    tagline: "Turn a lean team into a high-output, AI-native machine.",
    summary:
      "AI training for founders and startup teams — automate ops, move faster, and build an AI-native way of working. By kenai / Shishir Babu.",
    intro: [
      "For founders, AI is the biggest multiplier a small team has. kenai helps you find the highest-ROI use cases, automate the busywork, and build AI-native habits early — so the advantage compounds as you scale.",
    ],
    painPoints: [
      "Too much to do, too few people",
      "AI tool sprawl with no clear strategy",
      "Repetitive ops slowing the team down",
    ],
    useCases: [
      "Automate ops, marketing and sales workflows",
      "Standardise prompts and playbooks across the team",
      "Build internal AI agents for repeatable tasks",
      "Set an AI roadmap as you grow",
    ],
    faqs: [
      {
        q: "We're tiny — is AI training worth it?",
        a: "Especially then. Building AI-native habits early gives a small team outsized leverage, and kenai's hands-on format means you see results immediately.",
      },
    ],
    relatedServices: ["ai-training-for-business", "ai-automation", "ai-bootcamps"],
    accent: "#00F0FF",
  },
  {
    slug: "marketers",
    name: "AI for Marketers",
    role: "marketers",
    tagline: "Ship more content and campaigns, faster — with a real workflow.",
    summary:
      "AI training for marketers — content, campaigns and research with AI, using repeatable workflows not random prompts. By kenai / Shishir Babu.",
    intro: [
      "Most marketers use AI randomly and get random results. kenai trains marketing teams to build repeatable AI workflows for content, campaigns, research and analysis — so output goes up and quality stays consistent.",
    ],
    painPoints: [
      "Content production is a bottleneck",
      "Inconsistent quality from ad-hoc prompting",
      "Hard to scale personalisation",
    ],
    useCases: [
      "A content engine: ideation → draft → format",
      "Campaign and email workflows with AI",
      "Research and competitor analysis at speed",
      "Repurpose one asset into many channels",
    ],
    faqs: [
      {
        q: "Will AI content sound generic?",
        a: "Not if you prompt well. kenai teaches the prompting and editing workflow that keeps AI content on-brand and genuinely useful, instead of bland.",
      },
    ],
    relatedServices: ["ai-training-for-business", "ai-workshops", "ai-bootcamps"],
    accent: "#A855F7",
  },
  {
    slug: "teachers",
    name: "AI for Teachers & Faculty",
    role: "teachers and faculty",
    tagline: "Teach and assess with AI — confidently and ethically.",
    summary:
      "AI training for teachers and faculty — design lessons, assessments and materials with AI, and teach students to use it well. By kenai.",
    intro: [
      "Faculty are expected to teach with AI and about AI, often without support. kenai equips teachers and faculty to design lessons, build assessments and create materials with AI — and to guide students on using it ethically and effectively.",
    ],
    painPoints: [
      "Uncertainty about AI's role in the classroom",
      "Lesson and assessment design is time-consuming",
      "Students using AI without guidance",
    ],
    useCases: [
      "Design lessons and materials faster",
      "Build assessments and rubrics with AI",
      "Set clear, fair AI-use guidelines for students",
      "Model responsible AI use in teaching",
    ],
    faqs: [
      {
        q: "Does this help with academic integrity?",
        a: "Yes. kenai helps faculty set clear AI-use policies and design assessments that work in an AI world, turning a risk into a teachable skill.",
      },
    ],
    relatedServices: ["ai-training-for-colleges", "ai-workshops", "ai-bootcamps"],
    accent: "#A855F7",
  },
  {
    slug: "students",
    name: "AI for Students",
    role: "students",
    tagline: "Build an employable AI edge before you graduate.",
    summary:
      "AI training for students — use AI for projects, research, the job search and real work, the right way. By kenai / Shishir Babu.",
    intro: [
      "Employers now expect graduates to use AI well. kenai trains students to use AI for projects, research and the job search — building a genuine, employable edge through hands-on, project-based learning.",
    ],
    painPoints: [
      "Syllabus lags behind what employers want",
      "Unsure how to use AI ethically and effectively",
      "Standing out in a competitive job market",
    ],
    useCases: [
      "Use AI for projects, research and assignments",
      "AI-assisted resumes, portfolios and interview prep",
      "Build automations and small AI projects",
      "Develop the prompting and judgment employers value",
    ],
    faqs: [
      {
        q: "Will using AI count as cheating?",
        a: "Used transparently and skilfully, AI is a tool employers want you to master. kenai teaches you to use it the right way — to learn and build, not to shortcut understanding.",
      },
    ],
    relatedServices: ["ai-training-for-colleges", "ai-bootcamps", "ai-workshops"],
    accent: "#00F0FF",
  },
];

export const getAudience = (slug: string) => audiences.find((a) => a.slug === slug);
