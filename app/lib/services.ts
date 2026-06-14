// Central service catalog. Drives /services, /services/[slug], sitemap,
// homepage links and JSON-LD. Add a service here and it propagates everywhere.

export interface ServiceFAQ {
  q: string;
  a: string;
}

export interface ServiceStep {
  title: string;
  body: string;
}

export interface Service {
  slug: string;
  /** module_NN tag shown in the terminal-style eyebrow */
  module: string;
  /** Short label for nav / cards */
  name: string;
  /** Full H1 / page title */
  title: string;
  /** One-line positioning used in cards + meta description lead */
  tagline: string;
  /** SEO meta description */
  metaDescription: string;
  /** Accent: cyan | magenta | violet */
  accent: "cyan" | "magenta" | "violet";
  /** GEO-friendly one-paragraph definition — written to be quotable by LLMs */
  definition: string;
  /** The problem this service solves */
  problem: string[];
  /** How kenai solves it */
  solution: string;
  /** Outcome-led benefits */
  benefits: string[];
  /** Delivery process */
  process: ServiceStep[];
  /** Who it's for */
  audience: string;
  /** FAQs — also emitted as FAQPage schema */
  faqs: ServiceFAQ[];
  /** Slugs of related services for internal linking */
  related: string[];
}

const ACCENT_HEX: Record<Service["accent"], string> = {
  cyan: "#00F0FF",
  magenta: "#FF2E97",
  violet: "#A855F7",
};

export function accentHex(a: Service["accent"]): string {
  return ACCENT_HEX[a];
}

export const SERVICES: Service[] = [
  {
    slug: "ai-consulting",
    module: "svc_01",
    name: "AI Consulting",
    title: "AI Consulting",
    tagline: "Strategy, roadmap and governance to make AI adoption actually stick.",
    metaDescription:
      "kenai AI consulting helps leaders turn AI from hype into a working capability — adoption strategy, governance guardrails and a roadmap that ships. India-first, globally relevant.",
    accent: "cyan",
    definition:
      "AI consulting is advisory work that helps an organisation decide where artificial intelligence creates real leverage, how to adopt it responsibly, and how to sequence the rollout so it sticks. kenai's consulting pairs strategy with hands-on implementation — not slide decks — so teams move from AI-curious to AI-capable.",
    problem: [
      "Leadership feels pressure to \"do something with AI\" but has no clear, prioritised plan.",
      "Pilots stall because nobody owns adoption, governance or change management.",
      "Tool sprawl and shadow AI create risk without measurable return.",
    ],
    solution:
      "kenai runs a focused diagnostic of your workflows, people and risk appetite, then delivers a prioritised AI roadmap with quick wins, governance guardrails and an enablement plan. We stay on as a fractional AI partner so adoption survives contact with reality.",
    benefits: [
      "A prioritised roadmap tied to real business outcomes, not vendor demos",
      "Responsible-use and governance guardrails your legal and HR teams trust",
      "Quick wins in the first 30 days to build internal momentum",
      "A fractional AI expert on call instead of an expensive full-time hire",
    ],
    process: [
      { title: "Diagnose", body: "Map your highest-leverage workflows, current tooling, data and risk constraints." },
      { title: "Prioritise", body: "Score opportunities by impact and effort into a sequenced 90-day roadmap." },
      { title: "Enable", body: "Stand up governance, train owners and ship the first automations alongside your team." },
      { title: "Sustain", body: "Stay on as a fractional advisor to track adoption and level up as models evolve." },
    ],
    audience: "Founders, CXOs, HR and operations leaders who need a credible AI plan they can execute.",
    faqs: [
      { q: "How is kenai different from a big consulting firm?", a: "kenai is a practitioner-led practice. You work directly with someone who builds with AI daily and teaches what actually works — not a generic deck handed off to junior staff." },
      { q: "Do you only advise, or do you implement?", a: "Both. We deliver the strategy and then build the first automations and workflows alongside your team so the roadmap turns into shipped outcomes." },
      { q: "How long is a typical engagement?", a: "Most start with a focused 4–6 week diagnostic and roadmap, then continue as a lighter-touch fractional advisory retainer." },
      { q: "Is this relevant outside India?", a: "Yes. kenai is India-first but globally relevant — the frameworks apply anywhere, and we work with teams across time zones." },
    ],
    related: ["ai-transformation-programs", "ai-automation", "ai-training"],
  },
  {
    slug: "ai-training",
    module: "svc_02",
    name: "AI Training",
    title: "AI Training for Teams",
    tagline: "Hands-on training that turns your people into people who can actually do AI.",
    metaDescription:
      "Hands-on AI training from kenai — practical, role-specific sessions for teams, businesses and colleges. Learn by doing: real prompts, real workflows, real outcomes.",
    accent: "magenta",
    definition:
      "AI training is structured, hands-on upskilling that builds genuine fluency with AI tools — prompting, automation and judgment — rather than passive awareness. kenai's training is learn-by-doing: every participant builds real workflows from their own role during the session.",
    problem: [
      "Teams have ChatGPT access but use it for little more than email drafts.",
      "Generic webinars don't translate to anyone's actual job.",
      "Skills fade because training was theory, not practice.",
    ],
    solution:
      "kenai delivers role-specific, hands-on training where everyone builds. Participants leave with working prompts, automations and a take-home kit tailored to their real tasks — so the capability stays after the session ends.",
    benefits: [
      "Role-specific use cases for HR, ops, sales, leadership and more",
      "Everyone builds live — learning sticks because they made it work",
      "Take-home prompt and automation kit for ongoing use",
      "Measurable confidence and adoption uplift, not just attendance",
    ],
    process: [
      { title: "Scope", body: "We learn your roles, tools and goals to design relevant exercises." },
      { title: "Build", body: "Hands-on sessions where each person ships real prompts and automations." },
      { title: "Embed", body: "Take-home kits, playbooks and follow-ups to lock in the habit." },
    ],
    audience: "Businesses, HR and L&D teams, and colleges that want practical AI capability, fast.",
    faqs: [
      { q: "Is the training hands-on or lecture-style?", a: "Hands-on. Participants spend most of the time building real prompts and workflows on their own keyboards, not watching slides." },
      { q: "Can sessions be tailored to our industry?", a: "Yes — every session is built around your roles, tools and real tasks, whether that's HR, operations, sales or academia." },
      { q: "Do you offer remote and in-person delivery?", a: "Both. kenai delivers on-site workshops in India and remote sessions globally." },
      { q: "What do participants leave with?", a: "A take-home kit of working prompts, automation templates and a playbook tailored to their role." },
    ],
    related: ["corporate-ai-workshops", "claude-training", "chatgpt-training"],
  },
  {
    slug: "corporate-ai-workshops",
    module: "svc_03",
    name: "Corporate AI Workshops",
    title: "Corporate AI Workshops",
    tagline: "High-impact, hands-on sessions that get a whole team using AI the same day.",
    metaDescription:
      "kenai corporate AI workshops — half-day to multi-day, hands-on sessions that get your team using AI productively the same day. Tailored to your stack, roles and goals.",
    accent: "cyan",
    definition:
      "A corporate AI workshop is a focused, hands-on session that takes a team from curious to capable with AI tools in hours, not months. kenai's workshops are zero-fluff and role-specific: teams build real automations during the session and leave with immediate wins.",
    problem: [
      "Company-wide AI mandates land with no practical enablement.",
      "Teams are nervous, inconsistent or non-compliant in how they use AI.",
      "One-size webinars waste time and don't change behaviour.",
    ],
    solution:
      "kenai runs tailored, hands-on workshops mapped to your stack (M365, Google, n8n and more), policies and goals. We meet teams where they work and embed AI into their actual workflows — with manager enablement and adoption tracking.",
    benefits: [
      "Same-day productivity wins your team can feel",
      "Custom curriculum mapped to your tools and policies",
      "Manager enablement so adoption survives after the session",
      "Consistent, responsible AI use across the org",
    ],
    process: [
      { title: "Discover", body: "Audit your stack, policies and the workflows where AI helps most." },
      { title: "Design", body: "Build a custom, hands-on curriculum for each team's real tasks." },
      { title: "Deliver", body: "Run high-energy sessions where every team ships working automations." },
      { title: "Track", body: "Equip managers with adoption metrics and a reinforcement plan." },
    ],
    audience: "Enterprises and SMEs rolling out AI across teams who need real adoption, not just access.",
    faqs: [
      { q: "How long is a corporate workshop?", a: "Formats range from a half-day intensive to multi-day programs, scoped to your goals and team size." },
      { q: "Can you work with our existing tools?", a: "Yes — we tailor to your stack, including Microsoft 365, Google Workspace, n8n and your internal systems." },
      { q: "How do you ensure adoption sticks?", a: "We include manager enablement, take-home kits and adoption tracking so the behaviour change outlasts the session." },
      { q: "Can you handle large or distributed teams?", a: "Yes — kenai delivers on-site and remote sessions and can run cohorts across locations." },
    ],
    related: ["ai-training", "ai-transformation-programs", "ai-consulting"],
  },
  {
    slug: "ai-automation",
    module: "svc_04",
    name: "AI Automation",
    title: "AI Automation",
    tagline: "Cut the busywork. Wire AI into the workflows your team runs every day.",
    metaDescription:
      "kenai builds AI automation that removes repetitive busywork — connecting your tools, data and AI models into reliable workflows. Practical automation that ships, with your team trained to own it.",
    accent: "violet",
    definition:
      "AI automation uses AI models combined with workflow tools to complete repetitive, multi-step tasks with minimal human effort — triaging requests, drafting documents, updating systems and routing work. kenai designs, builds and hands over automations your team can actually maintain.",
    problem: [
      "Skilled people spend hours on copy-paste, triage and status updates.",
      "Off-the-shelf tools don't fit how your business actually runs.",
      "Automations built by an outside vendor break and nobody can fix them.",
    ],
    solution:
      "kenai identifies your highest-cost manual workflows and builds reliable AI automations on tools like n8n — connecting your apps, data and AI models. We document and train your team so you own the automation, not rent it.",
    benefits: [
      "Hours of repetitive work removed every week",
      "Automations built on tools your team can maintain",
      "Reliable, observable workflows — not brittle hacks",
      "Clear documentation and handover, no vendor lock-in",
    ],
    process: [
      { title: "Map", body: "Find the repetitive, high-volume workflows where automation pays off fastest." },
      { title: "Build", body: "Design and ship reliable automations connecting your apps, data and AI." },
      { title: "Handover", body: "Document, train and transfer ownership so your team runs it confidently." },
    ],
    audience: "Operations, HR and revenue teams drowning in repetitive, rules-based work.",
    faqs: [
      { q: "What tools do you build automation on?", a: "We favour n8n and similar workflow platforms that your team can own and maintain, integrated with your existing apps and AI models." },
      { q: "How do you decide what to automate first?", a: "We prioritise workflows by volume, cost and reliability of rules — automating the high-frequency, well-defined tasks first." },
      { q: "Will we be locked into a vendor?", a: "No. We build on transparent tooling, document everything and train your team to own and extend the automations." },
      { q: "Is AI automation safe for sensitive data?", a: "We design with governance and data handling in mind, scoping what AI sees and adding human checkpoints where needed." },
    ],
    related: ["workflow-automation", "n8n-consulting", "ai-agent-development"],
  },
  {
    slug: "ai-agent-development",
    module: "svc_05",
    name: "AI Agent Development",
    title: "AI Agent Development",
    tagline: "Custom AI agents that do real work inside your business — reliably.",
    metaDescription:
      "kenai designs and builds custom AI agents that handle multi-step tasks reliably — research, support, ops and more. Built on modern LLMs with the guardrails to run in production.",
    accent: "magenta",
    definition:
      "An AI agent is a system that uses a large language model to plan and carry out multi-step tasks — calling tools, retrieving data and making decisions toward a goal. kenai designs agents with the guardrails, evaluation and human oversight needed to run reliably in a real business.",
    problem: [
      "Generic chatbots can't complete real multi-step tasks.",
      "Teams want AI agents but worry about reliability and control.",
      "Proofs-of-concept never make it to production.",
    ],
    solution:
      "kenai applies a structured agent design framework — clear scope, the right tools, retrieval, evaluation and human-in-the-loop checkpoints — to build agents that actually work in production and that your team understands and trusts.",
    benefits: [
      "Agents scoped to real tasks, not demos",
      "Guardrails, evaluation and human oversight built in",
      "Built on modern, capable LLMs with the right tool integrations",
      "A clear path from prototype to production",
    ],
    process: [
      { title: "Scope", body: "Define the agent's job, boundaries, tools and success criteria." },
      { title: "Build", body: "Develop the agent with retrieval, tool use and guardrails." },
      { title: "Evaluate", body: "Test against real cases, add oversight, and harden for production." },
      { title: "Deploy", body: "Ship, monitor and train your team to operate and extend it." },
    ],
    audience: "Product, support and operations teams that want AI doing real work, dependably.",
    faqs: [
      { q: "What can an AI agent actually do for us?", a: "Agents can triage and respond to requests, research and summarise, update records, draft documents and orchestrate multi-step workflows across your tools." },
      { q: "How do you keep agents reliable?", a: "We scope them tightly, add evaluation, guardrails and human-in-the-loop checkpoints, and monitor them in production." },
      { q: "Which models do you build on?", a: "We build on modern, capable large language models and choose the right one for your reliability, cost and privacy needs." },
      { q: "Can the agent use our internal data?", a: "Yes — with retrieval and controlled tool access, scoped carefully so the agent only sees what it should." },
    ],
    related: ["custom-ai-solutions", "ai-automation", "prompt-engineering"],
  },
  {
    slug: "claude-training",
    module: "svc_06",
    name: "Claude Training",
    title: "Claude Training",
    tagline: "Get your team genuinely fluent with Claude — prompting, projects and workflows.",
    metaDescription:
      "kenai Claude training — hands-on sessions that make your team fluent with Anthropic's Claude for writing, analysis, coding and automation. Practical prompting, projects and real workflows.",
    accent: "cyan",
    definition:
      "Claude training is hands-on upskilling on Anthropic's Claude — teaching teams to prompt effectively, use Projects and long context, and build real workflows for writing, analysis and automation. kenai's training is practical and role-specific, so people apply Claude to their actual work immediately.",
    problem: [
      "Teams underuse Claude because they treat it like a search box.",
      "People don't know how to structure prompts, context or projects.",
      "Generic AI training ignores Claude's specific strengths.",
    ],
    solution:
      "kenai runs hands-on Claude training tailored to your roles — effective prompting, using long context and Projects, document analysis, and building repeatable workflows. Everyone leaves with prompt templates and a workflow they use the next day.",
    benefits: [
      "Practical prompting techniques that get better outputs",
      "Workflows for writing, analysis, research and coding",
      "Role-specific templates your team keeps",
      "Confidence to use Claude responsibly day to day",
    ],
    process: [
      { title: "Assess", body: "Understand your team's roles and where Claude adds the most value." },
      { title: "Train", body: "Hands-on sessions: prompting, context, Projects and real workflows." },
      { title: "Equip", body: "Provide prompt libraries and templates for ongoing use." },
    ],
    audience: "Teams standardising on Claude who want real fluency, not surface-level use.",
    faqs: [
      { q: "Do we need a paid Claude plan?", a: "Training works on free and paid plans; we'll advise which features and plan fit your team's use cases." },
      { q: "Is this only for technical teams?", a: "No — we tailor Claude training for non-technical roles like HR, marketing, ops and leadership as well as technical teams." },
      { q: "How is Claude different from other AI tools?", a: "We cover Claude's strengths in long-context reasoning, careful writing and analysis, and how to get the most from Projects and structured prompting." },
      { q: "Will the team retain what they learn?", a: "Yes — everyone leaves with reusable prompt templates and a workflow they apply to their real work immediately." },
    ],
    related: ["chatgpt-training", "prompt-engineering", "ai-training"],
  },
  {
    slug: "chatgpt-training",
    module: "svc_07",
    name: "ChatGPT Training",
    title: "ChatGPT Training",
    tagline: "Turn ChatGPT from a novelty into a daily productivity engine for your team.",
    metaDescription:
      "kenai ChatGPT training — practical, hands-on sessions that make your team productive with ChatGPT for writing, analysis, custom GPTs and automation. Role-specific and built to stick.",
    accent: "violet",
    definition:
      "ChatGPT training is hands-on upskilling on OpenAI's ChatGPT — teaching effective prompting, custom GPTs, data analysis and workflow integration. kenai's training is role-specific and practical, so teams turn ChatGPT into a daily working tool instead of an occasional novelty.",
    problem: [
      "Everyone has ChatGPT but most use a fraction of what it can do.",
      "Inconsistent, low-quality prompting produces unreliable results.",
      "No shared standards, so output quality varies wildly across the team.",
    ],
    solution:
      "kenai delivers hands-on ChatGPT training tailored to your roles — prompting frameworks, custom GPTs, data analysis and connecting ChatGPT into real workflows. Teams leave with shared standards and templates that raise everyone's output.",
    benefits: [
      "Consistent, high-quality prompting across the team",
      "Custom GPTs for your recurring tasks",
      "Role-specific workflows for writing, analysis and research",
      "Shared templates and standards that scale",
    ],
    process: [
      { title: "Scope", body: "Identify the recurring tasks where ChatGPT saves the most time." },
      { title: "Train", body: "Hands-on prompting, custom GPTs and workflow building." },
      { title: "Standardise", body: "Roll out shared templates and a prompt library across the team." },
    ],
    audience: "Businesses and teams that want consistent, high-leverage use of ChatGPT.",
    faqs: [
      { q: "Do you cover custom GPTs?", a: "Yes — we teach teams to build and share custom GPTs for their recurring tasks, plus effective prompting and data analysis." },
      { q: "Is the training role-specific?", a: "Yes. We tailor exercises to your actual roles — marketing, HR, ops, sales, leadership and more." },
      { q: "Free or paid ChatGPT?", a: "We'll advise which features matter for your use cases and tailor training to the plan your team uses." },
      { q: "How do you make output consistent across people?", a: "We establish shared prompting standards and a reusable template library so quality doesn't depend on who's typing." },
    ],
    related: ["claude-training", "prompt-engineering", "ai-training"],
  },
  {
    slug: "n8n-consulting",
    module: "svc_08",
    name: "n8n Consulting",
    title: "n8n Consulting",
    tagline: "Expert n8n help to design, build and scale workflow automation you own.",
    metaDescription:
      "kenai n8n consulting — expert help designing, building and scaling automations on n8n. Connect your apps and AI into reliable workflows your team can own and maintain.",
    accent: "cyan",
    definition:
      "n8n consulting is expert support for designing, building and scaling automations on n8n — the open, self-hostable workflow automation platform. kenai helps teams connect their apps and AI models into reliable workflows they fully own, with the structure to scale and maintain them.",
    problem: [
      "Teams adopt n8n but build fragile workflows that break at scale.",
      "Nobody in-house has deep experience structuring complex automations.",
      "AI nodes and integrations are underused or misconfigured.",
    ],
    solution:
      "kenai brings hands-on n8n expertise — architecting maintainable workflows, integrating your apps and AI models, adding error handling and observability, and training your team to extend them. You get automation you own, built to scale.",
    benefits: [
      "Robust, maintainable n8n workflows that don't break at scale",
      "AI and app integrations configured correctly",
      "Error handling, logging and observability built in",
      "Your team trained to own and extend everything",
    ],
    process: [
      { title: "Audit", body: "Review your goals, existing workflows and n8n setup." },
      { title: "Architect", body: "Design maintainable workflows with proper structure and error handling." },
      { title: "Build", body: "Implement integrations and AI nodes, then test under real load." },
      { title: "Enable", body: "Document and train your team to maintain and extend." },
    ],
    audience: "Teams using or adopting n8n that want it built right and owned in-house.",
    faqs: [
      { q: "Do you work with self-hosted and cloud n8n?", a: "Both. We work with n8n Cloud and self-hosted deployments and advise on the right setup for your needs." },
      { q: "Can you integrate AI models into n8n?", a: "Yes — connecting LLMs and AI services into n8n workflows is a core part of what we do." },
      { q: "Will our team be able to maintain it?", a: "Yes — we document everything and train your team so they own and extend the workflows confidently." },
      { q: "Can you fix or refactor existing workflows?", a: "Absolutely — we audit, harden and refactor fragile workflows so they scale reliably." },
    ],
    related: ["workflow-automation", "ai-automation", "custom-ai-solutions"],
  },
  {
    slug: "workflow-automation",
    module: "svc_09",
    name: "Workflow Automation",
    title: "Workflow Automation",
    tagline: "Connect your tools and remove the manual handoffs slowing your team down.",
    metaDescription:
      "kenai workflow automation — connect your apps, data and AI to remove manual handoffs and repetitive steps. Reliable, maintainable automations that free your team for higher-value work.",
    accent: "magenta",
    definition:
      "Workflow automation connects apps, data and people so multi-step processes run with minimal manual effort — handoffs, approvals, data entry and notifications happen automatically. kenai designs automations that are reliable and maintainable, increasingly powered by AI for the judgment-heavy steps.",
    problem: [
      "Work stalls in manual handoffs between tools and people.",
      "Data is re-entered across systems, causing errors and delays.",
      "Existing automations are scattered, undocumented and brittle.",
    ],
    solution:
      "kenai maps your end-to-end processes, then builds reliable automations that connect your systems and add AI where judgment is needed. The result is faster cycle times, fewer errors and a team freed for higher-value work.",
    benefits: [
      "Faster process cycle times with fewer handoffs",
      "Fewer manual-entry errors across systems",
      "AI applied to the steps that actually need judgment",
      "Documented, maintainable automations you own",
    ],
    process: [
      { title: "Map", body: "Document the end-to-end process and its bottlenecks." },
      { title: "Automate", body: "Connect systems and add AI for the judgment-heavy steps." },
      { title: "Optimise", body: "Measure, refine and hand over with full documentation." },
    ],
    audience: "Operations and back-office teams whose processes span many tools and handoffs.",
    faqs: [
      { q: "How is this different from AI automation?", a: "Workflow automation focuses on connecting your processes end to end; AI automation adds AI models to specific steps. We combine both where it makes sense." },
      { q: "What platforms do you use?", a: "We favour open, maintainable platforms like n8n alongside your existing apps, so your team can own the result." },
      { q: "Can you automate approvals and notifications?", a: "Yes — handoffs, approvals, data sync and notifications are exactly the kind of steps we automate reliably." },
      { q: "How do you measure success?", a: "We track cycle time, error rates and hours saved before and after, so the impact is concrete." },
    ],
    related: ["ai-automation", "n8n-consulting", "ai-consulting"],
  },
  {
    slug: "custom-ai-solutions",
    module: "svc_10",
    name: "Custom AI Solutions",
    title: "Custom AI Solutions",
    tagline: "Bespoke AI built for your problem when off-the-shelf tools don't fit.",
    metaDescription:
      "kenai builds custom AI solutions for problems off-the-shelf tools can't solve — from RAG assistants to agents and bespoke automations. Practical, owned, production-ready AI built around your business.",
    accent: "violet",
    definition:
      "A custom AI solution is software built around your specific problem — combining large language models, your data and your workflows into a tool that fits exactly how you work. kenai builds bespoke AI, from retrieval-augmented assistants to agents and integrations, designed to run in production and be owned in-house.",
    problem: [
      "Off-the-shelf AI tools almost fit but miss your real need.",
      "Your data and workflows are too specific for generic products.",
      "You need AI built around your business, not the other way round.",
    ],
    solution:
      "kenai designs and builds bespoke AI solutions — retrieval-augmented assistants over your knowledge, custom agents, classification and automation — using the right models and a clear path to production. You get a tool that fits your business and that your team can own.",
    benefits: [
      "AI built around your exact problem and data",
      "The right model and architecture for your needs",
      "A clear path from prototype to production",
      "Documentation and handover so you own it",
    ],
    process: [
      { title: "Define", body: "Pin down the problem, data, constraints and success criteria." },
      { title: "Prototype", body: "Build a working proof against real data, fast." },
      { title: "Productionise", body: "Harden, add guardrails and integrate into your stack." },
      { title: "Handover", body: "Document and train your team to run and extend it." },
    ],
    audience: "Teams with a specific, valuable AI problem that generic tools can't solve.",
    faqs: [
      { q: "What kinds of solutions do you build?", a: "Retrieval-augmented assistants over your documents, custom agents, classification and extraction tools, and bespoke automations integrated with your stack." },
      { q: "How do you handle our private data?", a: "We design with data governance from the start — scoping access, choosing appropriate models and adding controls for sensitive information." },
      { q: "Will it be production-ready?", a: "Yes — we build with a clear path from prototype to production, including guardrails, evaluation and integration." },
      { q: "Do we own the solution?", a: "Yes. We document everything and train your team so you fully own and can extend it." },
    ],
    related: ["ai-agent-development", "ai-automation", "ai-consulting"],
  },
  {
    slug: "prompt-engineering",
    module: "svc_11",
    name: "Prompt Engineering",
    title: "Prompt Engineering",
    tagline: "Reliable prompts and prompt systems that make AI outputs consistent.",
    metaDescription:
      "kenai prompt engineering — training and done-for-you prompt systems that make AI outputs reliable and consistent. Reusable prompt libraries and frameworks tailored to your workflows.",
    accent: "cyan",
    definition:
      "Prompt engineering is the practice of designing the instructions, context and structure given to a large language model so it produces reliable, high-quality outputs consistently. kenai delivers prompt engineering as both training and done-for-you prompt systems — reusable libraries and frameworks tailored to your workflows.",
    problem: [
      "AI outputs are inconsistent because prompts are ad hoc.",
      "Quality depends on who's typing rather than a repeatable system.",
      "Teams reinvent prompts instead of reusing what works.",
    ],
    solution:
      "kenai builds prompt systems — structured, reusable prompt templates and frameworks — and trains your team to apply them. The result is consistent, high-quality AI output that doesn't depend on individual skill.",
    benefits: [
      "Consistent, reliable AI outputs across the team",
      "Reusable prompt libraries for your recurring tasks",
      "Frameworks your team can apply to new problems",
      "Less time wasted reinventing prompts",
    ],
    process: [
      { title: "Audit", body: "Review where AI is used and where outputs fall short." },
      { title: "Design", body: "Build structured, tested prompt templates and frameworks." },
      { title: "Train", body: "Roll out the prompt library and teach the team to extend it." },
    ],
    audience: "Teams that rely on AI output and need it to be reliable and repeatable.",
    faqs: [
      { q: "Is this training or done-for-you?", a: "Both. We build prompt libraries and frameworks for you and train your team to use and extend them." },
      { q: "Does it work across different AI tools?", a: "Yes — the principles apply across Claude, ChatGPT and others, and we tailor templates to the tools you use." },
      { q: "How do you make prompts reliable?", a: "We use structured templates, clear context, examples and testing against real cases so outputs are consistent." },
      { q: "Can you build prompts for specific roles?", a: "Yes — we design role-specific prompt libraries for HR, marketing, ops, sales and more." },
    ],
    related: ["claude-training", "chatgpt-training", "ai-agent-development"],
  },
  {
    slug: "ai-transformation-programs",
    module: "svc_12",
    name: "AI Transformation",
    title: "AI Transformation Programs",
    tagline: "End-to-end programs that take an organisation from AI-curious to AI-native.",
    metaDescription:
      "kenai AI transformation programs — end-to-end engagements combining strategy, training and automation to take your organisation from AI-curious to AI-native, with adoption that lasts.",
    accent: "magenta",
    definition:
      "An AI transformation program is a structured, organisation-wide engagement that combines strategy, capability building and implementation to embed AI into how a company works. kenai's programs sequence consulting, training and automation together so transformation actually lands — and adoption outlasts the engagement.",
    problem: [
      "Point solutions and one-off workshops don't add up to transformation.",
      "Strategy, training and automation happen in disconnected silos.",
      "Momentum fades without a structured, organisation-wide program.",
    ],
    solution:
      "kenai runs end-to-end AI transformation programs that sequence strategy, hands-on capability building and real automation into one coordinated effort — with governance, change management and adoption tracking so the change sticks across the organisation.",
    benefits: [
      "Strategy, training and automation aligned in one program",
      "Organisation-wide capability, not isolated pilots",
      "Governance and change management built in",
      "Adoption that outlasts the engagement",
    ],
    process: [
      { title: "Assess", body: "Establish an AI maturity baseline and a transformation roadmap." },
      { title: "Enable", body: "Build capability across teams with role-specific training." },
      { title: "Implement", body: "Ship priority automations and governance alongside teams." },
      { title: "Embed", body: "Track adoption and maturity, iterating as the organisation grows." },
    ],
    audience: "Organisations serious about becoming AI-native, not just AI-aware.",
    faqs: [
      { q: "How long does a transformation program take?", a: "Programs are typically multi-month engagements sequenced in phases, scoped to your size and ambition." },
      { q: "How is it different from one-off consulting or training?", a: "It combines strategy, training and automation into one coordinated program with governance and adoption tracking, rather than disconnected point efforts." },
      { q: "How do you measure transformation?", a: "We baseline AI maturity at the start and track capability, adoption and outcomes throughout the program." },
      { q: "Can you start small and scale?", a: "Yes — we often start with a high-impact phase and expand the program as momentum and results build." },
    ],
    related: ["ai-consulting", "corporate-ai-workshops", "ai-automation"],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getRelated(service: Service): Service[] {
  return service.related
    .map((slug) => getService(slug))
    .filter((s): s is Service => Boolean(s));
}

export const SITE = {
  name: "kenai",
  url: "https://kenai.in",
  domain: "kenai.in",
  email: "hello@kenai.in",
  tagline: "The way of AI.",
  founder: "Shishir Babu",
  founderAlias: "Sam",
  description:
    "kenai is a practitioner-led AI consulting and training studio. AI consulting for HR and hands-on AI & automation training for businesses and colleges. Learn by doing — the way of AI. India-first, globally relevant.",
};
