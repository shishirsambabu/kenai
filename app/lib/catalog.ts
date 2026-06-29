/**
 * Catalog-driven content. Each object below renders a full, SEO-optimised,
 * server-rendered page (programmatic SEO). Add an object → get a page,
 * a sitemap entry, an OG image, JSON-LD, and internal links for free.
 */

export type FAQ = { q: string; a: string };

export type Service = {
  slug: string;
  name: string; // H1 / title
  shortName: string; // nav / breadcrumb
  eyebrow: string;
  tagline: string; // one-line value prop
  summary: string; // meta description (<=155 chars ideal)
  intro: string[]; // opening paragraphs (definition-first)
  forWho: string[];
  outcomes: string[];
  includes: string[];
  faqs: FAQ[];
  related: string[]; // service slugs
  accent: "#00F0FF" | "#FF2E97" | "#A855F7";
};

export type Industry = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  intro: string[];
  painPoints: string[];
  howWeHelp: string[];
  faqs: FAQ[];
  relatedServices: string[];
  accent: "#00F0FF" | "#FF2E97" | "#A855F7";
};

export type GlossaryTerm = {
  slug: string;
  term: string;
  abbr?: string;
  category: string;
  /** Definition-first: a crisp, quotable 1–2 sentence answer (GEO/AISO). */
  definition: string;
  body: string[];
  related: string[]; // glossary slugs
};

/* ------------------------------------------------------------------ */
/* SERVICES                                                            */
/* ------------------------------------------------------------------ */

export const services: Service[] = [
  {
    slug: "ai-training-for-hr",
    name: "AI Training for HR & L&D",
    shortName: "AI for HR",
    eyebrow: "Service · HR & L&D",
    tagline: "Make AI a skill your HR team owns — not a tool they fear.",
    summary:
      "Hands-on AI training and consulting for HR and L&D teams — hiring, onboarding, ops and people decisions. Practical, responsible, India-first. By Shishir Babu.",
    intro: [
      "AI training for HR is hands-on enablement that helps people teams use AI for hiring, onboarding, employee operations and people decisions — responsibly and fast. kenai delivers it as live, role-specific sessions where HR professionals build with AI on real work, not slides.",
      "Led by Shishir Babu (Sam), an AI trainer and L&D consultant, the program turns HR teams into confident operators who can write better job descriptions, screen at scale, automate busywork and keep a human in the loop where it matters.",
    ],
    forWho: [
      "HR leaders rolling out AI across their function",
      "Talent acquisition and recruiting teams",
      "L&D and people-development professionals",
      "HR operations and HRBP teams",
    ],
    outcomes: [
      "Use AI for sourcing, screening and JD writing without losing the human touch",
      "Automate repetitive HR ops (letters, FAQs, policy drafting) safely",
      "Build a responsible-use policy your legal team is comfortable with",
      "A take-home prompt and automation kit your team keeps using",
    ],
    includes: [
      "Live, hands-on workshop or multi-session program",
      "Role-specific HR use cases and prompt libraries",
      "Claude / ChatGPT / Copilot workflows tailored to your stack",
      "Responsible-use guardrails and adoption tracking",
    ],
    faqs: [
      {
        q: "Is this safe for sensitive HR data?",
        a: "Yes. We teach a responsible-use framework first — what to put into AI tools, what never to, and how to keep a human in the loop for people decisions. Governance is built into the training, not bolted on.",
      },
      {
        q: "Do participants need any technical background?",
        a: "No. Sessions are designed for HR and L&D professionals. If you can use email and a spreadsheet, you can do everything we teach.",
      },
      {
        q: "Can you tailor it to our tools?",
        a: "Yes. We build the workflows around what you already use — Microsoft 365, Google Workspace, Claude, ChatGPT, n8n and your ATS/HRIS.",
      },
    ],
    related: ["corporate-ai-training", "ai-workshops", "ai-advisory"],
    accent: "#FF2E97",
  },
  {
    slug: "ai-training-for-business",
    name: "AI & Automation Training for Business",
    shortName: "AI for Business",
    eyebrow: "Service · Business",
    tagline: "Cut busywork, ship faster, make AI a daily working tool.",
    summary:
      "AI and automation training for corporates and leaders. Turn AI from a buzzword into a daily working tool — hands-on, outcome-led. By kenai / Shishir Babu.",
    intro: [
      "AI training for business is practical enablement that helps teams and leaders use AI and automation to remove busywork, move faster and make better decisions. kenai delivers it hands-on, built around your real workflows rather than generic demos.",
      "The goal is simple: make AI a daily working tool your people actually reach for, with the judgment to know when to trust it and when not to.",
    ],
    forWho: [
      "Founders and leadership teams",
      "Operations, marketing and sales teams",
      "Cross-functional teams adopting AI org-wide",
      "Any business tired of AI hype with no results",
    ],
    outcomes: [
      "Identify the highest-ROI AI use cases in your business",
      "Automate recurring workflows with n8n and AI agents",
      "Standardise prompts and playbooks across the team",
      "A measurable adoption plan, not a one-off demo",
    ],
    includes: [
      "Workshop, bootcamp or org-wide rollout formats",
      "Use-case mapping to your actual workflows",
      "Automation builds (n8n, agents, integrations)",
      "Manager enablement and adoption tracking",
    ],
    faqs: [
      {
        q: "How is this different from a generic AI webinar?",
        a: "We don't hand you slides and leave. Every session is hands-on — your team builds real workflows on real work and walks away with assets they keep using.",
      },
      {
        q: "What tools do you cover?",
        a: "Claude, ChatGPT and Copilot for reasoning and content; n8n for automation; plus integrations with the tools you already run.",
      },
      {
        q: "Can you measure the impact?",
        a: "Yes. We define outcome metrics up front (hours saved, cycle time, adoption rate) and track them so you can prove ROI internally.",
      },
    ],
    related: ["corporate-ai-training", "ai-automation", "ai-bootcamps"],
    accent: "#00F0FF",
  },
  {
    slug: "ai-training-for-colleges",
    name: "AI Training for Colleges & Students",
    shortName: "AI for Colleges",
    eyebrow: "Service · Education",
    tagline: "Bridge the gap between the syllabus and what the market needs.",
    summary:
      "Industry-ready AI and automation programs for students and faculty. Close the gap between syllabus and the job market. By kenai / Shishir Babu.",
    intro: [
      "AI training for colleges is an industry-ready program that equips students and faculty with the AI and automation skills employers actually want. kenai delivers it as practical, project-based learning that complements the academic syllabus.",
      "Students leave able to use AI as a genuine work multiplier — for research, projects, job search and real tasks — and faculty leave able to teach and assess with it confidently.",
    ],
    forWho: [
      "Engineering, management and arts colleges",
      "Placement and training cells",
      "Faculty development programs",
      "Student clubs and innovation cells",
    ],
    outcomes: [
      "Students who can use AI for projects, research and the job market",
      "Faculty confident in teaching and assessing with AI",
      "An AI-powered job-search toolkit for placements",
      "Capstone projects that demonstrate real capability",
    ],
    includes: [
      "Student bootcamps and faculty development sessions",
      "Project-based curriculum mapped to industry needs",
      "AI job-search and portfolio modules",
      "Certificates and capstone evaluation",
    ],
    faqs: [
      {
        q: "Is this aligned to placements?",
        a: "Yes. Modules include AI-assisted resumes, portfolios and interview prep, plus the workplace AI skills recruiters now expect.",
      },
      {
        q: "Can faculty be trained too?",
        a: "Absolutely. Faculty development is a core part of the offering so the capability stays in the institution after we leave.",
      },
      {
        q: "What's the format?",
        a: "Flexible — single workshops, multi-day bootcamps or semester-long programs, delivered on campus or online.",
      },
    ],
    related: ["ai-bootcamps", "ai-workshops", "ai-training-for-business"],
    accent: "#A855F7",
  },
  {
    slug: "ai-workshops",
    name: "AI Workshops",
    shortName: "Workshops",
    eyebrow: "Format · Half / Full Day",
    tagline: "High-impact, hands-on sessions that get a team using AI today.",
    summary:
      "Half- or full-day hands-on AI workshops that get your team using AI the same day. Zero fluff, immediate wins. By kenai / Shishir Babu.",
    intro: [
      "An AI workshop from kenai is a half- or full-day, hands-on session that gets a team using AI tools the same day — with zero fluff and immediate, role-specific wins.",
      "Participants build alongside the trainer on their own work and leave with a take-home prompt and automation kit they can use immediately.",
    ],
    forWho: [
      "Teams new to AI who want a fast, confident start",
      "Departments needing role-specific use cases",
      "Leadership offsites and team upskilling days",
    ],
    outcomes: [
      "A team actively using AI by the end of the day",
      "Role-specific use cases for HR, ops and leadership",
      "A take-home prompt and automation kit",
    ],
    includes: [
      "Live build alongside the trainer",
      "Role-specific use cases",
      "Take-home prompt & automation kit",
    ],
    faqs: [
      {
        q: "How many people can attend?",
        a: "Workshops work for small teams up to large groups. We adjust the format and facilitation to keep it hands-on at any size.",
      },
      {
        q: "Online or in person?",
        a: "Both. We deliver on-site across India and run interactive online sessions globally.",
      },
    ],
    related: ["ai-bootcamps", "corporate-ai-training", "ai-training-for-hr"],
    accent: "#00F0FF",
  },
  {
    slug: "ai-bootcamps",
    name: "AI Bootcamps",
    shortName: "Bootcamps",
    eyebrow: "Format · Multi-session",
    tagline: "Take a cohort from curious to genuinely capable.",
    summary:
      "Structured, multi-week AI bootcamps that take a cohort from curious to capable — projects, not theory. Capstone + certification. By kenai.",
    intro: [
      "An AI bootcamp from kenai is a structured, multi-week program that takes a cohort from curious to genuinely capable through real projects — not theory.",
      "Participants follow a progressive skill path, build automations and agents, and finish with a capstone project and certification.",
    ],
    forWho: [
      "Teams that want durable capability, not a one-off",
      "Colleges running cohort programs",
      "Organisations building internal AI champions",
    ],
    outcomes: [
      "A progressive skill path with real projects",
      "Automation and agent-building skills",
      "A capstone project plus certification",
    ],
    includes: [
      "Progressive skill path with real projects",
      "Automation & agent building",
      "Capstone + certification",
    ],
    faqs: [
      {
        q: "How long is a bootcamp?",
        a: "Typically multi-week with weekly live sessions and project work in between, tailored to your cohort's availability.",
      },
      {
        q: "Do participants get certified?",
        a: "Yes. Bootcamps include a capstone and certification so learners can demonstrate real capability.",
      },
    ],
    related: ["ai-workshops", "ai-training-for-colleges", "ai-automation"],
    accent: "#FF2E97",
  },
  {
    slug: "corporate-ai-training",
    name: "Corporate AI Training",
    shortName: "Corporate Training",
    eyebrow: "Format · Org-wide",
    tagline: "Rollouts tailored to your stack, policies and goals.",
    summary:
      "Org-wide corporate AI training tailored to your stack, policies and goals. Custom curriculum, tool integration, adoption tracking. By kenai.",
    intro: [
      "Corporate AI training from kenai is an org-wide rollout tailored to your stack, policies and goals. We meet teams where they work and embed AI into their actual workflows.",
      "It combines a custom curriculum, tool integration, manager enablement and adoption tracking so AI adoption sticks instead of stalling.",
    ],
    forWho: [
      "Enterprises rolling AI out across functions",
      "L&D teams owning company-wide enablement",
      "Organisations with compliance requirements",
    ],
    outcomes: [
      "A custom curriculum mapped to your workflows",
      "Tool integration with M365, Google, n8n and more",
      "Manager enablement and measurable adoption",
    ],
    includes: [
      "Custom curriculum to your workflows",
      "Tool integration (M365, Google, n8n & more)",
      "Manager enablement & adoption tracking",
    ],
    faqs: [
      {
        q: "Can you handle compliance and governance?",
        a: "Yes. Responsible-use guardrails and governance are built into every corporate rollout, aligned with your policies.",
      },
      {
        q: "Do you support multiple locations?",
        a: "Yes. We run blended on-site and online delivery across regions and time zones.",
      },
    ],
    related: ["ai-training-for-business", "ai-advisory", "ai-training-for-hr"],
    accent: "#A855F7",
  },
  {
    slug: "ai-advisory",
    name: "AI Advisory & Strategy",
    shortName: "Advisory",
    eyebrow: "Format · Strategic",
    tagline: "Fractional AI guidance that makes adoption stick.",
    summary:
      "Fractional AI advisory for leaders — strategy, governance and the roadmap to make AI adoption stick, not stall. By Shishir Babu / kenai.",
    intro: [
      "AI advisory from kenai is fractional, strategic guidance for leaders — the strategy, governance and roadmap that make AI adoption stick instead of stalling.",
      "Think of it as an on-call AI expert for your leadership team: someone who has built with these tools daily and can translate hype into a concrete plan.",
    ],
    forWho: [
      "Founders and executives setting AI direction",
      "Teams that need a roadmap, not just training",
      "Organisations defining responsible-use policy",
    ],
    outcomes: [
      "An AI adoption strategy and roadmap",
      "Responsible-use and governance guardrails",
      "An on-call expert for your team",
    ],
    includes: [
      "AI adoption strategy & roadmap",
      "Responsible-use & governance guardrails",
      "On-call expert for your team",
    ],
    faqs: [
      {
        q: "Is advisory a one-off or ongoing?",
        a: "Both options exist — a focused strategy engagement, or ongoing fractional advisory where we stay on call as your team executes.",
      },
      {
        q: "How does advisory pair with training?",
        a: "Advisory sets the direction; training builds the capability. Most organisations combine the two for the best results.",
      },
    ],
    related: ["corporate-ai-training", "ai-training-for-business", "ai-automation"],
    accent: "#00F0FF",
  },
  {
    slug: "ai-automation",
    name: "AI Automation with n8n & Agents",
    shortName: "Automation",
    eyebrow: "Service · Automation",
    tagline: "Turn repetitive work into reliable, automated workflows.",
    summary:
      "AI automation training and builds with n8n and agents. Turn repetitive work into reliable workflows your team can run and maintain. By kenai.",
    intro: [
      "AI automation from kenai turns repetitive, manual work into reliable automated workflows using tools like n8n and AI agents — and teaches your team to build and maintain them.",
      "Instead of one-off scripts, you get durable automations plus the skills to extend them, so the time savings compound.",
    ],
    forWho: [
      "Ops teams drowning in repetitive tasks",
      "Businesses wanting practical automation, not theory",
      "Teams ready to build their own AI agents",
    ],
    outcomes: [
      "Live automations for your highest-volume workflows",
      "n8n and agent-building skills inside your team",
      "Documentation so automations stay maintainable",
    ],
    includes: [
      "Workflow and use-case mapping",
      "Hands-on n8n and agent builds",
      "Handover, documentation and training",
    ],
    faqs: [
      {
        q: "What is n8n?",
        a: "n8n is an open-source workflow automation tool that connects apps and AI models so multi-step tasks run automatically. We teach it because it's powerful, flexible and self-hostable.",
      },
      {
        q: "Will my team be able to maintain the automations?",
        a: "Yes. Capability transfer is the point — we build with your team and document everything so you're not dependent on us.",
      },
    ],
    related: ["ai-training-for-business", "ai-bootcamps", "ai-advisory"],
    accent: "#FF2E97",
  },
];

/* ------------------------------------------------------------------ */
/* INDUSTRIES                                                          */
/* ------------------------------------------------------------------ */

export const industries: Industry[] = [
  {
    slug: "human-resources",
    name: "AI for Human Resources",
    tagline: "Adopt AI across the people function — responsibly.",
    summary:
      "AI training and consulting for HR teams — hiring, onboarding, ops and people decisions. Responsible, hands-on, India-first. By kenai / Shishir Babu.",
    intro: [
      "HR teams sit on the highest-volume, highest-judgment work in any company — and that's exactly where AI helps most when it's used responsibly. kenai helps HR functions adopt AI for hiring, onboarding, employee operations and people decisions without losing the human touch.",
    ],
    painPoints: [
      "Repetitive ops work (letters, FAQs, policy drafting) eats the week",
      "Sourcing and screening don't scale",
      "Fear of putting sensitive data into AI tools",
      "AI tools bought but not actually adopted",
    ],
    howWeHelp: [
      "Role-specific, hands-on AI training for HR and L&D",
      "A responsible-use framework for people data",
      "Automation of high-volume HR ops",
      "Adoption tracking so the investment pays off",
    ],
    faqs: [
      {
        q: "Will AI replace HR jobs?",
        a: "No. The HR professionals who use AI well will outperform those who don't. kenai trains your team to be the former — AI handles busywork so people focus on judgment and relationships.",
      },
    ],
    relatedServices: ["ai-training-for-hr", "corporate-ai-training", "ai-advisory"],
    accent: "#FF2E97",
  },
  {
    slug: "education",
    name: "AI for Colleges & Education",
    tagline: "Industry-ready AI skills for students and faculty.",
    summary:
      "AI and automation programs for colleges — industry-ready skills for students and faculty, mapped to the job market. By kenai / Shishir Babu.",
    intro: [
      "Curricula move slower than the AI job market. kenai closes that gap with project-based AI and automation programs for students and faculty, so graduates leave genuinely employable in an AI-first workplace.",
    ],
    painPoints: [
      "Syllabus lags behind what employers expect",
      "Students unsure how to use AI ethically and effectively",
      "Faculty under-equipped to teach with AI",
      "Placements need an AI-skills edge",
    ],
    howWeHelp: [
      "Student bootcamps with real projects and capstones",
      "Faculty development so capability stays on campus",
      "AI job-search and portfolio modules for placements",
      "Certificates that demonstrate real capability",
    ],
    faqs: [
      {
        q: "Can this run alongside our existing curriculum?",
        a: "Yes. Programs are designed to complement the academic syllabus and can be delivered as workshops, bootcamps or semester-long modules.",
      },
    ],
    relatedServices: ["ai-training-for-colleges", "ai-bootcamps", "ai-workshops"],
    accent: "#A855F7",
  },
  {
    slug: "startups",
    name: "AI for Startups",
    tagline: "Move faster with a small team and a big AI multiplier.",
    summary:
      "AI and automation training for startups — do more with a lean team, automate ops, and build an AI-native way of working. By kenai.",
    intro: [
      "Startups win on speed, and AI is the biggest multiplier a lean team has. kenai helps founders and early teams build an AI-native way of working — automating ops and amplifying every person on the team.",
    ],
    painPoints: [
      "Small team, too much to do",
      "No time to figure out the AI tool sprawl",
      "Repetitive ops slowing the team down",
      "Need results now, not a long program",
    ],
    howWeHelp: [
      "Fast, hands-on workshops focused on highest-ROI use cases",
      "Automations for ops, marketing and sales",
      "Prompt and playbook standardisation across the team",
      "Advisory to set an AI roadmap as you scale",
    ],
    faqs: [
      {
        q: "We're tiny — is this worth it?",
        a: "Especially then. The earlier you build AI-native habits, the more compounding advantage you get as you grow.",
      },
    ],
    relatedServices: ["ai-training-for-business", "ai-automation", "ai-advisory"],
    accent: "#00F0FF",
  },
  {
    slug: "learning-and-development",
    name: "AI for Learning & Development",
    tagline: "Design, deliver and measure learning the AI-native way.",
    summary:
      "AI training for L&D teams — build an AI-native operating system for designing, delivering and measuring learning. By kenai / Shishir Babu.",
    intro: [
      "L&D is where AI and people development meet — and where Shishir Babu has spent years. kenai helps L&D teams build an AI-native operating system for designing, delivering and measuring learning, so the function moves faster and proves its impact.",
    ],
    painPoints: [
      "Content design is slow and manual",
      "Hard to personalise learning at scale",
      "Measuring learning impact is painful",
      "AI tools unclear for instructional design",
    ],
    howWeHelp: [
      "AI workflows for instructional design and content",
      "Personalisation and assessment with AI",
      "An AI-native L&D operating model",
      "Train-the-trainer for your L&D team",
    ],
    faqs: [
      {
        q: "Is this just about content generation?",
        a: "No. It covers the full L&D lifecycle — needs analysis, design, delivery, assessment and measurement — with AI as a co-facilitator, not just a writing tool.",
      },
    ],
    relatedServices: ["ai-training-for-hr", "corporate-ai-training", "ai-bootcamps"],
    accent: "#FF2E97",
  },
];

/* ------------------------------------------------------------------ */
/* GLOSSARY — 12 terms, definition-first (GEO + DefinedTerm schema)    */
/* ------------------------------------------------------------------ */

export const glossary: GlossaryTerm[] = [
  {
    slug: "artificial-intelligence",
    term: "Artificial Intelligence",
    abbr: "AI",
    category: "Foundations",
    definition:
      "Artificial Intelligence (AI) is software that performs tasks normally requiring human intelligence — understanding language, recognising patterns, reasoning and making decisions.",
    body: [
      "In a workplace context, AI usually means tools built on machine learning and large language models that can read, write, summarise, analyse and automate work.",
      "kenai teaches AI as a practical skill: not the theory of neural networks, but how to use these tools to do real work faster and better, with the judgment to know their limits.",
    ],
    related: ["generative-ai", "large-language-model", "prompt-engineering"],
  },
  {
    slug: "large-language-model",
    term: "Large Language Model",
    abbr: "LLM",
    category: "Foundations",
    definition:
      "A Large Language Model (LLM) is an AI system trained on vast amounts of text to understand and generate human language, powering tools like Claude and ChatGPT.",
    body: [
      "LLMs predict the most likely next piece of text given everything before it, which lets them write, summarise, translate, answer questions and reason through problems.",
      "Knowing how an LLM works — its strengths, its tendency to sometimes sound confident while being wrong — is the foundation of using AI well, and it's where every kenai program starts.",
    ],
    related: ["generative-ai", "prompt-engineering", "hallucination", "context-window"],
  },
  {
    slug: "generative-ai",
    term: "Generative AI",
    abbr: "GenAI",
    category: "Foundations",
    definition:
      "Generative AI is AI that creates new content — text, images, code, audio or video — rather than only analysing existing data.",
    body: [
      "Generative AI is the category most people mean when they say 'AI' today: tools that draft an email, design a slide, write code or summarise a document.",
      "kenai focuses on using generative AI productively and responsibly at work, turning it from a novelty into a dependable daily tool.",
    ],
    related: ["artificial-intelligence", "large-language-model", "prompt-engineering"],
  },
  {
    slug: "prompt-engineering",
    term: "Prompt Engineering",
    category: "Skills",
    definition:
      "Prompt engineering is the skill of writing clear, well-structured instructions that get reliable, high-quality results from an AI model.",
    body: [
      "Good prompts give the model context, a clear task, constraints and a desired format. Done well, prompting is the difference between a generic answer and a genuinely useful one.",
      "It's the single highest-leverage AI skill for most professionals, which is why hands-on prompting is core to every kenai workshop and bootcamp.",
    ],
    related: ["large-language-model", "generative-ai", "context-window", "ai-agent"],
  },
  {
    slug: "ai-agent",
    term: "AI Agent",
    category: "Advanced",
    definition:
      "An AI agent is an AI system that can take actions to achieve a goal — using tools, calling other systems and working through multi-step tasks with limited human input.",
    body: [
      "Where a chatbot answers a question, an agent can carry out a job: research a topic, update a record, send a message or run a workflow end to end.",
      "kenai teaches teams to build practical agents and automations that handle real, repetitive work reliably — not science-fiction autonomy, but dependable assistants.",
    ],
    related: ["workflow-automation", "prompt-engineering", "retrieval-augmented-generation"],
  },
  {
    slug: "retrieval-augmented-generation",
    term: "Retrieval-Augmented Generation",
    abbr: "RAG",
    category: "Advanced",
    definition:
      "Retrieval-Augmented Generation (RAG) is a technique that lets an AI model answer using your own documents and data, retrieving relevant information before generating a response.",
    body: [
      "RAG grounds the model in trusted sources — your policies, knowledge base or files — so answers are accurate and specific instead of generic or invented.",
      "It's how organisations safely put AI on top of their own knowledge, and kenai covers it for teams ready to move beyond off-the-shelf chat.",
    ],
    related: ["large-language-model", "hallucination", "ai-agent"],
  },
  {
    slug: "workflow-automation",
    term: "Workflow Automation",
    category: "Skills",
    definition:
      "Workflow automation is connecting apps and AI so multi-step tasks run automatically, without a person doing each step by hand.",
    body: [
      "Tools like n8n let you wire together triggers, apps and AI models so work — onboarding, reporting, follow-ups — happens on its own.",
      "kenai teaches automation as a core capability because it's where AI delivers measurable hours back, every week.",
    ],
    related: ["ai-agent", "prompt-engineering", "artificial-intelligence"],
  },
  {
    slug: "fine-tuning",
    term: "Fine-Tuning",
    category: "Advanced",
    definition:
      "Fine-tuning is further training an existing AI model on your own examples so it adapts to a specific style, domain or task.",
    body: [
      "Fine-tuning is powerful but often unnecessary — strong prompting and RAG solve most business needs without the cost and complexity.",
      "kenai helps teams choose the right approach: prompt, retrieve, or fine-tune, depending on the problem.",
    ],
    related: ["large-language-model", "retrieval-augmented-generation", "prompt-engineering"],
  },
  {
    slug: "hallucination",
    term: "Hallucination",
    category: "Risks",
    definition:
      "A hallucination is when an AI model produces information that sounds confident and plausible but is actually false or made up.",
    body: [
      "Hallucinations happen because language models predict likely text, not verified facts. They're the main reason a human must stay in the loop for important work.",
      "kenai teaches practical habits — grounding, verification and good prompting — to catch and prevent hallucinations before they cause problems.",
    ],
    related: ["large-language-model", "retrieval-augmented-generation", "responsible-ai"],
  },
  {
    slug: "responsible-ai",
    term: "Responsible AI",
    category: "Risks",
    definition:
      "Responsible AI is using AI in a way that is safe, fair, transparent and accountable — with clear rules for data, privacy and human oversight.",
    body: [
      "For most organisations, responsible AI starts with simple, practical guardrails: what data can go into which tools, where a human must review, and how decisions are recorded.",
      "kenai builds responsible-use frameworks into every program, especially for HR and people data, so adoption is both fast and safe.",
    ],
    related: ["hallucination", "ai-governance", "artificial-intelligence"],
  },
  {
    slug: "ai-governance",
    term: "AI Governance",
    category: "Risks",
    definition:
      "AI governance is the set of policies, roles and controls an organisation uses to manage how AI is adopted and used safely and compliantly.",
    body: [
      "Good governance is enabling, not blocking — clear guardrails let teams move fast with confidence instead of using AI in the shadows.",
      "kenai advisory helps leaders put lightweight, practical governance in place that legal and security teams are comfortable with.",
    ],
    related: ["responsible-ai", "context-window", "artificial-intelligence"],
  },
  {
    slug: "context-window",
    term: "Context Window",
    category: "Foundations",
    definition:
      "A context window is the maximum amount of text an AI model can consider at once — its short-term memory for a given conversation or task.",
    body: [
      "A larger context window means the model can work with more information — long documents, whole policies or extended conversations — in a single request.",
      "Understanding the context window helps you structure prompts and feed information effectively, a practical skill kenai covers hands-on.",
    ],
    related: ["large-language-model", "prompt-engineering", "retrieval-augmented-generation"],
  },
  {
    slug: "machine-learning",
    term: "Machine Learning",
    abbr: "ML",
    category: "Foundations",
    definition:
      "Machine learning is a type of AI where systems learn patterns from data and improve at a task, instead of being explicitly programmed with rules.",
    body: [
      "Machine learning is the engine under most modern AI, including the large language models behind Claude and ChatGPT. The model is 'trained' on data and learns to make predictions.",
      "You don't need to build ML models to use AI well — but understanding the idea helps you trust the output appropriately, which is exactly what kenai teaches.",
    ],
    related: ["artificial-intelligence", "large-language-model", "neural-network"],
  },
  {
    slug: "neural-network",
    term: "Neural Network",
    category: "Foundations",
    definition:
      "A neural network is a machine-learning model loosely inspired by the brain, made of layered 'neurons' that learn to recognise patterns in data.",
    body: [
      "Neural networks power today's AI — from image recognition to the large language models behind chat assistants.",
      "kenai keeps the theory light and the practice heavy: you don't need to build neural networks to use AI productively at work.",
    ],
    related: ["machine-learning", "large-language-model", "transformer"],
  },
  {
    slug: "transformer",
    term: "Transformer",
    category: "Advanced",
    definition:
      "A transformer is the neural-network architecture behind modern large language models, designed to process sequences of text and weigh which parts matter most.",
    body: [
      "Introduced in 2017, the transformer is why today's AI is so capable with language. Claude, ChatGPT and Gemini are all built on transformer architectures.",
      "It's useful background, but kenai focuses on what you can do with these models, not the math inside them.",
    ],
    related: ["large-language-model", "neural-network", "generative-ai"],
  },
  {
    slug: "token",
    term: "Token",
    category: "Foundations",
    definition:
      "A token is a chunk of text — roughly a word or part of a word — that an AI model reads and generates. Models measure input and output length in tokens.",
    body: [
      "Understanding tokens helps you grasp context limits and pricing: longer prompts and responses use more tokens.",
      "It's a small concept with practical payoff, which is why kenai covers it when teaching prompting and context.",
    ],
    related: ["context-window", "large-language-model", "prompt-engineering"],
  },
  {
    slug: "chatgpt",
    term: "ChatGPT",
    category: "Tools",
    definition:
      "ChatGPT is a popular AI assistant made by OpenAI, built on large language models. It can write, summarise, code, analyse and answer questions in natural language.",
    body: [
      "ChatGPT helped bring generative AI mainstream and offers a broad ecosystem — custom GPTs, image generation and plugins.",
      "kenai teaches teams to use ChatGPT (and alternatives like Claude and Gemini) well, with the judgment to pick the right tool per task.",
    ],
    related: ["large-language-model", "claude", "generative-ai"],
  },
  {
    slug: "claude",
    term: "Claude",
    category: "Tools",
    definition:
      "Claude is an AI assistant made by Anthropic, known for thoughtful writing, strong reasoning over long documents, and a safety-first design.",
    body: [
      "Many professionals prefer Claude for nuanced, people-centric work — which is why kenai's HR and L&D programs are often Claude-native.",
      "Claude also powers developer tools like Claude Code, used for building and automating real work hands-on.",
    ],
    related: ["large-language-model", "chatgpt", "model-context-protocol"],
  },
  {
    slug: "embedding",
    term: "Embedding",
    category: "Advanced",
    definition:
      "An embedding is a numerical representation of text (or other data) that captures its meaning, letting AI systems compare and search by similarity.",
    body: [
      "Embeddings are how AI 'understands' that two differently-worded sentences mean the same thing — the foundation of semantic search and RAG.",
      "kenai introduces embeddings for teams ready to build AI on top of their own knowledge base.",
    ],
    related: ["retrieval-augmented-generation", "large-language-model", "fine-tuning"],
  },
  {
    slug: "multimodal-ai",
    term: "Multimodal AI",
    category: "Foundations",
    definition:
      "Multimodal AI is AI that can work with more than one type of input or output — for example text, images, audio and video together.",
    body: [
      "Multimodal models can describe an image, read a chart, or turn a sketch into code, opening up new everyday use cases.",
      "kenai shows teams practical multimodal workflows — like turning screenshots, documents and slides into useful output.",
    ],
    related: ["generative-ai", "large-language-model", "artificial-intelligence"],
  },
  {
    slug: "ai-copilot",
    term: "AI Copilot",
    category: "Skills",
    definition:
      "An AI copilot is an AI assistant embedded in your tools that helps you work — suggesting, drafting and automating alongside you rather than replacing you.",
    body: [
      "Copilots live inside the apps you already use, from coding to documents to spreadsheets, acting as an always-available assistant.",
      "kenai helps teams build and use copilots for their real workflows — the 'AI as co-worker' model.",
    ],
    related: ["ai-agent", "prompt-engineering", "generative-ai"],
  },
  {
    slug: "agentic-ai",
    term: "Agentic AI",
    category: "Advanced",
    definition:
      "Agentic AI refers to AI systems that can plan and take multi-step actions toward a goal — using tools and making decisions with limited human input.",
    body: [
      "Where a chatbot answers, an agentic system acts: researching, updating records, or running a workflow end to end.",
      "kenai teaches teams to build practical agents that handle real, repetitive work reliably.",
    ],
    related: ["ai-agent", "workflow-automation", "model-context-protocol"],
  },
  {
    slug: "model-context-protocol",
    term: "Model Context Protocol",
    abbr: "MCP",
    category: "Advanced",
    definition:
      "The Model Context Protocol (MCP) is an open standard, introduced by Anthropic, for connecting AI assistants to external tools, data and systems in a consistent way.",
    body: [
      "MCP lets an AI like Claude securely use your tools and data, making agents and copilots far more useful in real work.",
      "kenai covers MCP for teams building serious AI workflows and integrations.",
    ],
    related: ["ai-agent", "claude", "agentic-ai"],
  },
  {
    slug: "chain-of-thought",
    term: "Chain-of-Thought",
    category: "Skills",
    definition:
      "Chain-of-thought is a prompting technique where you ask an AI model to reason step by step, which improves accuracy on complex problems.",
    body: [
      "By prompting the model to 'think through' a problem, you often get more reliable, well-reasoned answers.",
      "It's one of several practical prompting techniques kenai teaches hands-on.",
    ],
    related: ["prompt-engineering", "large-language-model", "ai-agent"],
  },
];

/* ------------------------------------------------------------------ */
/* Lookups                                                             */
/* ------------------------------------------------------------------ */

export const getService = (slug: string) => services.find((s) => s.slug === slug);
export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
export const getGlossaryTerm = (slug: string) => glossary.find((g) => g.slug === slug);
