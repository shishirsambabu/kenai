/**
 * Blog content engine. Each post renders a full /blog/[slug] article with
 * BlogPosting schema, OG image, breadcrumbs and internal links. Add an object
 * → get an indexable article. This is the core long-form ranking surface.
 */

import type { FAQ } from "./catalog";

export type Block =
  | { h2: string }
  | { p: string }
  | { ul: string[] }
  | { quote: string };

export type BlogPost = {
  slug: string;
  title: string;
  description: string; // meta description
  excerpt: string;
  date: string; // ISO published
  updated?: string; // ISO modified
  readMins: number;
  tag: string;
  tagColor: "#00F0FF" | "#FF2E97" | "#A855F7";
  body: Block[];
  faqs?: FAQ[];
  related: string[]; // internal links: paths
};

export const posts: BlogPost[] = [
  {
    slug: "why-most-ai-training-fails",
    title: "Why Most AI Training Fails (And What Actually Sticks)",
    description:
      "Most corporate AI training doesn't change how people work. Here's why AI training fails — and the learn-by-doing framework that actually sticks. By Shishir Babu.",
    excerpt:
      "The dirty secret of corporate AI rollouts: most training doesn't change how people actually work. Here's the framework that does.",
    date: "2026-01-12",
    readMins: 6,
    tag: "AI for HR",
    tagColor: "#FF2E97",
    body: [
      { p: "Most organisations have now 'done' AI training. A vendor came in, ran a slick session full of impressive demos, and left. A week later, almost nobody is using AI any differently. The budget was spent; the behaviour didn't change." },
      { p: "After running 40+ workshops, the pattern is clear: AI training fails for the same handful of reasons every time. The good news is that each one is fixable." },
      { h2: "1. It's a demo, not a practice" },
      { p: "Watching someone use AI is not the same as using it yourself. Demos create the illusion of learning — people nod along, impressed — but skill only forms when hands hit the keyboard on real work. If your team didn't build something during the session, they didn't learn." },
      { h2: "2. It's generic, not role-specific" },
      { p: "A recruiter, a finance analyst and a marketer need completely different AI workflows. Generic 'intro to AI' training gives everyone the same shallow examples that map to nobody's actual job. Adoption happens when someone solves a task they had on their plate this week." },
      { h2: "3. There are no guardrails, so people don't trust it" },
      { p: "Without a clear, simple policy on what data can go into which tools and where a human must review, cautious professionals (rightly) stay away. Responsible-use guardrails aren't a brake on adoption — they're what makes confident adoption possible." },
      { h2: "What actually sticks: learn by doing" },
      { p: "The training that changes behaviour shares four traits. Build these in and adoption follows." },
      { ul: [
        "Hands-on on real work — participants bring a live task and leave having done it with AI.",
        "Role-specific use cases — examples that map to each person's actual job.",
        "Guardrails first — a responsible-use framework people can trust on day one.",
        "Capability transfer — a take-home kit of prompts and workflows, so the skill outlives the session.",
      ] },
      { p: "This is the entire design philosophy behind kenai's workshops and the 3-day bootcamp: less watching, more building. When people leave having shipped something real, AI stops being a novelty and becomes a tool they reach for on Monday." },
    ],
    faqs: [
      {
        q: "Why does most corporate AI training fail?",
        a: "Because it's a demo, not a practice; it's generic instead of role-specific; and it lacks the responsible-use guardrails people need to trust the tools. Training that's hands-on, role-specific and guard-railed is what actually changes behaviour.",
      },
    ],
    related: ["/services/corporate-ai-training", "/bootcamp", "/services/ai-training-for-hr"],
  },
  {
    slug: "n8n-workflows-every-team-needs",
    title: "5 n8n Automations I Set Up for Almost Every Team",
    description:
      "Five practical n8n automations that give real hours back every week — lead routing, reporting, onboarding and more. A hands-on guide by Shishir Babu / kenai.",
    excerpt:
      "The automations that deliver real hours back, every single time — with the thinking behind each one.",
    date: "2026-02-03",
    readMins: 5,
    tag: "Automation",
    tagColor: "#00F0FF",
    body: [
      { p: "Automation is where AI quietly pays for itself. Using n8n — an open-source, self-hostable workflow tool — you can wire apps and AI models together so repetitive multi-step work just happens. Here are five automations that earn their keep for almost every team." },
      { h2: "1. Lead capture → enrich → route" },
      { p: "Every form submission is caught, enriched with context, summarised by an AI step, and routed to the right person with a suggested first reply. No lead sits unseen; no rep starts from a blank page." },
      { h2: "2. The weekly report that writes itself" },
      { p: "Pull numbers from your tools on a schedule, have an AI step draft the narrative ('what changed and why'), and drop a ready-to-review summary into your inbox or chat. The hour you used to spend assembling it disappears." },
      { h2: "3. Onboarding on autopilot" },
      { p: "When a new hire or client is added, trigger the whole sequence — accounts, welcome messages, document requests, calendar holds — with AI personalising each step. Consistent every time, manual never." },
      { h2: "4. Inbox triage" },
      { p: "Incoming messages are classified, summarised and tagged, with draft responses prepared for the common cases. You review and send instead of reading and writing from scratch." },
      { h2: "5. Content repurposing" },
      { p: "One long asset in, many channel-ready pieces out — an AI step turns a post into a thread, a newsletter blurb and a set of captions, queued for your approval." },
      { quote: "The point isn't to automate everything. It's to automate the repetitive, low-judgment steps so people spend their time on the work only they can do." },
      { p: "We teach exactly this — n8n, agents and the judgment of what to automate — in the automation module of the 3-day bootcamp and in dedicated automation engagements." },
    ],
    faqs: [
      {
        q: "What is n8n and why use it for AI automation?",
        a: "n8n is an open-source, self-hostable workflow automation tool that connects apps and AI models so multi-step tasks run automatically. It's favoured for flexibility, control and predictable cost compared with hosted tools.",
      },
    ],
    related: ["/services/ai-automation", "/compare/n8n-vs-zapier", "/glossary/workflow-automation"],
  },
  {
    slug: "prompt-to-write-a-week-of-content",
    title: "The Prompt Workflow I Use to Write a Week of Content in an Hour",
    description:
      "Stop writing from scratch. This repeatable prompt workflow handles ideation, drafting and formatting for a week of content. By Shishir Babu / kenai.",
    excerpt:
      "Not a magic one-liner — a repeatable chain that handles ideation, draft and formatting across any topic.",
    date: "2026-02-20",
    readMins: 5,
    tag: "Prompting",
    tagColor: "#A855F7",
    body: [
      { p: "People want the 'one perfect prompt'. The truth is more useful: great output comes from a short chain of prompts, each doing one job well. Here's the workflow I use to produce a week of content in about an hour — and why each step matters." },
      { h2: "Step 1 — Set the context once" },
      { p: "Start by giving the model your audience, your voice, your goals and a few examples of writing you like. This 'context block' gets reused for everything that follows, so the model stops guessing who it's writing for." },
      { h2: "Step 2 — Diverge on ideas" },
      { p: "Ask for far more ideas than you need — angles, hooks, questions your audience actually asks. Quantity first; you'll curate next. The goal here is range, not polish." },
      { h2: "Step 3 — Converge and outline" },
      { p: "Pick the strongest ideas and have the model outline each one: the promise, the key points, the takeaway. Editing an outline is ten times faster than editing a finished draft." },
      { h2: "Step 4 — Draft, then direct" },
      { p: "Now draft — but treat the first output as raw material. The skill is in the follow-up: 'make the opening sharper', 'cut the fluff', 'add a concrete example'. Directing the model is where quality lives." },
      { h2: "Step 5 — Format for the channel" },
      { p: "Finally, reshape one piece into the formats you need — a post, a thread, a newsletter blurb — each with the right length and tone. One idea, many outputs." },
      { quote: "Prompting isn't about clever words. It's about giving context, breaking the work into steps, and directing the output like an editor." },
      { p: "This step-by-step prompting — including chain-of-thought and editing technique — is core to every kenai workshop and the bootcamp." },
    ],
    faqs: [
      {
        q: "Is there one perfect prompt for content?",
        a: "No. Reliable results come from a short chain of prompts — set context, diverge on ideas, outline, draft, then direct edits and reformat. Treating prompting as a workflow beats hunting for a single magic prompt.",
      },
    ],
    related: ["/glossary/prompt-engineering", "/glossary/chain-of-thought", "/ai-for/marketers"],
  },
  {
    slug: "design-a-learn-by-doing-ai-bootcamp",
    title: "How to Design a 'Learn by Doing' AI Bootcamp",
    description:
      "The exact curriculum-design process behind kenai's AI bootcamp — from outcome mapping to capstone projects. By Shishir Babu.",
    excerpt:
      "The exact curriculum design process — from outcome mapping to capstone projects — behind a bootcamp that actually builds capability.",
    date: "2026-03-08",
    readMins: 7,
    tag: "L&D",
    tagColor: "#00F0FF",
    body: [
      { p: "A good bootcamp isn't a longer workshop — it's a designed progression from 'I've heard of this' to 'I can do this'. Here's the process behind designing one that genuinely builds capability, the same approach used for kenai's 3-day AI bootcamp." },
      { h2: "Start from outcomes, not topics" },
      { p: "Don't list what you'll cover; list what learners will be able to do at the end. 'Architect a solution with Claude', 'build with Claude Code', 'ship an automation'. Every session then exists to serve a concrete capability." },
      { h2: "Sequence from foundation to build" },
      { p: "Capability stacks. Day one builds the mental model (how the tools work and how to architect with them). Day two moves to building hands-on. Day three composes those skills into real automation. Each day depends on the last." },
      { h2: "Make every session hands-on" },
      { p: "If a session has no build, cut it or redesign it. Learners should leave each day having made something — that's what converts knowledge into skill and confidence." },
      { h2: "End with a capstone" },
      { p: "A capstone forces integration: the learner applies everything to a real problem of their own. It's both the best assessment and the strongest proof of capability — something they can show, not just a certificate they hold." },
      { h2: "Design for life after the bootcamp" },
      { p: "Send people home with reusable assets — prompt libraries, templates, automation blueprints — and a plan to keep building. The goal is durable capability, not a good three days." },
      { quote: "The test of a bootcamp isn't how it felt on day three. It's what people are still doing differently a month later." },
      { p: "This is exactly how the kenai 3-day bootcamp is structured: Day 1 Claude architecture, Day 2 Claude Cowork & Claude Code, Day 3 automation with Codex and agents — finishing with a capstone." },
    ],
    faqs: [
      {
        q: "What makes an AI bootcamp effective?",
        a: "Designing from outcomes rather than topics, sequencing from foundation to build, making every session hands-on, ending with a capstone project, and sending learners home with reusable assets and a plan to keep building.",
      },
    ],
    related: ["/bootcamp", "/services/ai-bootcamps", "/services/ai-training-for-colleges"],
  },
  {
    slug: "a-practical-starting-point-for-ai-in-hr",
    title: "A Practical Starting Point for AI in HR",
    description:
      "Where should HR actually begin with AI? A simple, responsible starting framework for HR teams — what to automate first and what to keep human. By Shishir Babu.",
    excerpt:
      "Where HR should actually begin with AI — the safe, high-ROI first steps, and what to keep human.",
    date: "2026-03-25",
    readMins: 6,
    tag: "AI for HR",
    tagColor: "#FF2E97",
    body: [
      { p: "HR sits on exactly the kind of work AI is good at — high-volume, text-heavy, repetitive — alongside exactly the kind it must not touch alone: sensitive, high-stakes people decisions. The art is knowing the difference. Here's a practical starting point." },
      { h2: "Begin with low-risk, high-volume tasks" },
      { p: "Drafting job descriptions, summarising policies, answering common employee FAQs, formatting documents — these are safe, repetitive and instantly time-saving. Win here first to build confidence and momentum." },
      { h2: "Set guardrails before you scale" },
      { p: "Write a one-page responsible-use policy: what data can go into which tools, what never can, and where a human must review. Simple, clear rules let your team move fast without fear — and keep legal comfortable." },
      { h2: "Keep judgment human" },
      { p: "Hiring decisions, performance and disciplinary matters, anything affecting someone's livelihood — AI can assist with drafting or summarising, but the decision and accountability stay with a person. Make this explicit." },
      { h2: "Measure, then expand" },
      { p: "Track hours saved and adoption on your first use cases. Use that evidence to expand into the next set — automation, deeper workflows — with leadership behind you." },
      { quote: "AI won't replace HR. But HR professionals who use AI well will outperform those who don't." },
      { p: "This is the backbone of kenai's AI training for HR: start safe, guardrail early, keep judgment human, and expand on evidence." },
    ],
    faqs: [
      {
        q: "Where should HR start with AI?",
        a: "Start with low-risk, high-volume tasks like drafting job descriptions, summarising policies and answering common FAQs. Set a simple responsible-use policy first, keep all high-stakes people decisions human, and expand based on measured results.",
      },
    ],
    related: ["/services/ai-training-for-hr", "/ai-for/hr-managers", "/industries/human-resources"],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const sortedPosts = () =>
  [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
