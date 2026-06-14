// Industry catalog. Drives /industries, /industries/[slug], sitemap and
// JSON-LD. Each industry maps AI to a specific function, with use cases,
// workflows, outcomes, recommended services and FAQs.

export interface IndustryFAQ {
  q: string;
  a: string;
}

export interface Industry {
  slug: string;
  ref: string;
  name: string;
  title: string;
  tagline: string;
  metaDescription: string;
  accent: "cyan" | "magenta" | "violet";
  /** GEO-quotable definition of how AI applies here */
  intro: string;
  useCases: string[];
  workflows: string[];
  outcomes: string[];
  /** Service slugs most relevant to this industry */
  services: string[];
  /** Case study slugs to surface, if any */
  caseStudies: string[];
  faqs: IndustryFAQ[];
}

const ACCENT_HEX = { cyan: "#00F0FF", magenta: "#FF2E97", violet: "#A855F7" } as const;
export function industryAccent(a: Industry["accent"]): string {
  return ACCENT_HEX[a];
}

export const INDUSTRIES: Industry[] = [
  {
    slug: "hr",
    ref: "ind_01",
    name: "HR",
    title: "AI for HR",
    tagline: "Turn your HR team into people who build with AI — responsibly and fast.",
    metaDescription:
      "AI for HR with kenai — practical AI consulting and training that helps HR teams adopt AI for hiring, onboarding, people ops and decisions, responsibly. India-first, hands-on.",
    accent: "magenta",
    intro:
      "AI in HR means using AI tools and automation to handle the repetitive, document-heavy parts of people operations — screening, onboarding, policy queries, analysis — so HR professionals spend more time on judgment and people. kenai helps HR teams adopt AI hands-on, with the guardrails that sensitive people data demands.",
    useCases: [
      "Summarising and screening candidate applications consistently",
      "Drafting job descriptions, offers and onboarding documents",
      "Answering routine policy and benefits questions instantly",
      "Analysing engagement and exit-survey themes at scale",
    ],
    workflows: [
      "Automated candidate-screening summaries from your ATS",
      "Onboarding document prep and personalised welcome flows",
      "An internal HR policy assistant grounded in your handbook",
      "Sentiment and theme analysis on survey free-text",
    ],
    outcomes: [
      "Hours of admin reclaimed each week per HR professional",
      "More consistent, fairer first-pass screening",
      "Faster, smoother onboarding experiences",
      "Responsible, governed AI use across the team",
    ],
    services: ["ai-training", "ai-consulting", "ai-automation"],
    caseStudies: ["hr-team-ai-automation"],
    faqs: [
      { q: "Is it safe to use AI with sensitive HR data?", a: "Yes, with the right design. kenai builds in responsible-use guardrails, scopes what AI can access, and keeps humans in the loop for people decisions." },
      { q: "Will AI replace HR jobs?", a: "No — it removes repetitive admin so HR professionals focus on judgment, strategy and people. The goal is capability your team owns, not replacement." },
      { q: "Where should an HR team start with AI?", a: "Usually a hands-on workshop plus automating one high-volume workflow like screening summaries — quick, visible wins that build confidence." },
    ],
  },
  {
    slug: "recruitment",
    ref: "ind_02",
    name: "Recruitment",
    title: "AI for Recruitment",
    tagline: "Screen faster, write better, and give every candidate a sharper experience.",
    metaDescription:
      "AI for recruitment with kenai — train and automate sourcing, screening and candidate communication so recruiters move faster without losing the human touch.",
    accent: "cyan",
    intro:
      "AI in recruitment means applying AI to the high-volume, repetitive parts of hiring — sourcing, screening, outreach and scheduling — so recruiters spend their time on relationships and judgment. kenai helps recruitment teams build these workflows responsibly, keeping fairness and the candidate experience front and centre.",
    useCases: [
      "Drafting role-specific outreach and job posts in minutes",
      "Summarising and shortlisting applications consistently",
      "Generating structured interview guides and scorecards",
      "Personalising candidate communication at scale",
    ],
    workflows: [
      "Automated application summaries and shortlists",
      "Outreach sequences tailored per role and persona",
      "Interview-prep packs generated from the job spec",
      "Candidate-status update automations",
    ],
    outcomes: [
      "Shorter time-to-shortlist on high-volume roles",
      "More consistent, structured evaluation",
      "A sharper, faster candidate experience",
      "Recruiters freed for relationship-building",
    ],
    services: ["ai-training", "ai-automation", "workflow-automation"],
    caseStudies: ["hr-team-ai-automation"],
    faqs: [
      { q: "Does AI screening introduce bias?", a: "Poorly designed automation can. kenai builds structured, transparent workflows with human oversight, focused on consistency and fairness rather than opaque scoring." },
      { q: "Can we keep the human touch?", a: "Yes — AI handles the repetitive drafting and summarising so recruiters spend more time, not less, on genuine candidate relationships." },
      { q: "Will it work with our ATS?", a: "We design automations that connect to your existing applicant-tracking and tools rather than replacing them." },
    ],
  },
  {
    slug: "learning-and-development",
    ref: "ind_03",
    name: "L&D",
    title: "AI for Learning & Development",
    tagline: "Design, deliver and personalise learning faster — and upskill your org on AI itself.",
    metaDescription:
      "AI for L&D with kenai — use AI to design and personalise learning, and run the practical AI upskilling programs that make your whole organisation capable.",
    accent: "violet",
    intro:
      "AI in learning and development means using AI both to build learning faster — content, assessments, personalisation — and as the subject your organisation most urgently needs to learn. kenai sits at exactly this intersection: we help L&D teams use AI to design better programs and deliver the hands-on AI upskilling their people need.",
    useCases: [
      "Generating course outlines, content and assessments quickly",
      "Personalising learning paths to roles and levels",
      "Turning existing docs into training materials",
      "Running practical, organisation-wide AI upskilling",
    ],
    workflows: [
      "Draft-to-polished course material pipelines",
      "Assessment and quiz generation from source content",
      "Role-based learning-path recommendations",
      "A structured AI skills curriculum for the org",
    ],
    outcomes: [
      "Faster program design and refresh cycles",
      "More relevant, personalised learning",
      "An organisation genuinely capable with AI",
      "L&D positioned as the driver of AI adoption",
    ],
    services: ["ai-training", "corporate-ai-workshops", "ai-transformation-programs"],
    caseStudies: ["college-ai-program"],
    faqs: [
      { q: "Can AI really help design learning?", a: "Yes — for outlines, drafts, assessments and personalisation it dramatically speeds design. Human L&D judgment still shapes quality and outcomes." },
      { q: "How do we upskill the whole organisation on AI?", a: "kenai runs progressive, hands-on programs — workshops to bootcamps — with a curriculum mapped to roles, so capability spreads and sticks." },
      { q: "Is this relevant for academic institutions too?", a: "Very — we deliver industry-ready AI programs for colleges, students and faculty as well as corporate L&D." },
    ],
  },
  {
    slug: "consulting",
    ref: "ind_04",
    name: "Consulting",
    title: "AI for Consultants",
    tagline: "Research, synthesise and produce deliverables faster without diluting your insight.",
    metaDescription:
      "AI for consultants with kenai — build an AI workflow stack that accelerates research, analysis and deliverables so you deliver more value per engagement.",
    accent: "cyan",
    intro:
      "AI for consultants means building a personal and firm-wide AI stack that accelerates the knowledge work at the core of consulting — research, synthesis, analysis and deliverable production — without diluting the judgment clients pay for. kenai helps consultants and firms build this stack and the prompting discipline to use it well.",
    useCases: [
      "Rapid research synthesis across many sources",
      "Drafting proposals, decks and reports faster",
      "Structuring frameworks and analysis from raw notes",
      "Building reusable prompt assets across the firm",
    ],
    workflows: [
      "Research-to-synthesis pipelines for engagements",
      "Proposal and report first-draft generation",
      "A firm-wide prompt library for recurring deliverables",
      "Knowledge-base assistants over past work",
    ],
    outcomes: [
      "More billable insight, less production grind",
      "Consistent quality across consultants",
      "Faster turnaround on proposals and reports",
      "A defensible, reusable AI advantage",
    ],
    services: ["prompt-engineering", "ai-training", "custom-ai-solutions"],
    caseStudies: ["sme-workflow-automation"],
    faqs: [
      { q: "Won't AI commoditise consulting?", a: "It commoditises the production grind, not the judgment. Consultants who build an AI stack deliver more insight per hour and stay ahead." },
      { q: "How do we keep client data safe?", a: "We design AI workflows with data governance from the start — scoping access and choosing appropriate, secure tooling." },
      { q: "What's the fastest win for a consultant?", a: "A strong prompting discipline plus a reusable prompt library for proposals and research synthesis." },
    ],
  },
  {
    slug: "coaching",
    ref: "ind_05",
    name: "Coaching",
    title: "AI for Coaches",
    tagline: "Scale your content, admin and client touchpoints without losing your voice.",
    metaDescription:
      "AI for coaches with kenai — use AI to scale content, programs and client communication so you serve more clients without burning out or losing your voice.",
    accent: "magenta",
    intro:
      "AI for coaches means using AI to scale the work around coaching — content, program design, client communication and admin — so coaches reach more people while protecting the human relationship at the heart of their work. kenai helps independent coaches and coaching businesses build practical AI workflows in their own voice.",
    useCases: [
      "Repurposing sessions and ideas into content at scale",
      "Designing programs, worksheets and prompts",
      "Drafting personalised client follow-ups",
      "Automating scheduling and onboarding admin",
    ],
    workflows: [
      "Content engines that keep your voice and style",
      "Program and resource generation pipelines",
      "Client follow-up and nurture automations",
      "Booking and onboarding automations",
    ],
    outcomes: [
      "More consistent content and visibility",
      "More clients served without more admin",
      "Stronger, more personal client touchpoints",
      "Time returned to actual coaching",
    ],
    services: ["ai-training", "prompt-engineering", "workflow-automation"],
    caseStudies: [],
    faqs: [
      { q: "Will AI make my content sound generic?", a: "Not if it's set up right. kenai builds prompt systems trained on your voice and frameworks so output sounds like you, not a template." },
      { q: "I'm a solo coach — is this overkill?", a: "No — solo coaches gain the most leverage, automating admin and content so they can focus on clients." },
      { q: "Can AI handle client communication?", a: "It drafts and personalises; you stay in control. The relationship remains human, the busywork doesn't." },
    ],
  },
  {
    slug: "marketing",
    ref: "ind_06",
    name: "Marketing",
    title: "AI for Marketing",
    tagline: "Produce more, test faster, and free your team for strategy and creativity.",
    metaDescription:
      "AI for marketing with kenai — train and automate content production, research and campaign workflows so your marketing team ships more and thinks bigger.",
    accent: "violet",
    intro:
      "AI in marketing means using AI across the content and campaign lifecycle — research, ideation, drafting, repurposing and analysis — so teams produce more and iterate faster while focusing human effort on strategy and brand. kenai helps marketing teams build reliable AI workflows that protect quality and voice.",
    useCases: [
      "Content ideation, drafting and repurposing at scale",
      "Audience and competitor research synthesis",
      "Campaign variant and A/B copy generation",
      "Analysing performance and customer feedback",
    ],
    workflows: [
      "Brief-to-draft content pipelines on-brand",
      "Multi-channel repurposing automations",
      "Research synthesis for positioning and messaging",
      "Feedback and review theme analysis",
    ],
    outcomes: [
      "Higher content output without more headcount",
      "Faster campaign iteration and testing",
      "Consistent brand voice via prompt systems",
      "More time for strategy and creative",
    ],
    services: ["ai-training", "prompt-engineering", "chatgpt-training"],
    caseStudies: [],
    faqs: [
      { q: "How do we keep brand voice consistent?", a: "We build prompt systems and templates encoding your brand voice so AI output is consistent across everyone on the team." },
      { q: "Can AI do real marketing research?", a: "It accelerates synthesis of research you gather — summarising, clustering and surfacing themes — with human judgment on strategy." },
      { q: "Which tools should our marketers learn?", a: "Usually ChatGPT and Claude plus an automation layer; we tailor training to your stack and goals." },
    ],
  },
  {
    slug: "sales",
    ref: "ind_07",
    name: "Sales",
    title: "AI for Sales",
    tagline: "Research accounts, personalise outreach and cut CRM admin — sell more, type less.",
    metaDescription:
      "AI for sales with kenai — train and automate prospecting, personalised outreach and CRM admin so your sales team spends more time selling and less time typing.",
    accent: "cyan",
    intro:
      "AI in sales means using AI to accelerate prospecting, personalisation and the administrative drag of selling — research, outreach drafting, call prep and CRM updates — so reps spend more time in genuine conversations. kenai helps sales teams build these workflows and the judgment to use AI well.",
    useCases: [
      "Account and prospect research synthesis",
      "Personalised outreach and follow-up drafting",
      "Call prep briefs and discovery questions",
      "Automated CRM note-taking and updates",
    ],
    workflows: [
      "Research-to-outreach pipelines per prospect",
      "Follow-up sequence drafting in your voice",
      "Call-prep brief generation from CRM data",
      "Post-call summary and CRM update automation",
    ],
    outcomes: [
      "More personalised outreach at higher volume",
      "Better-prepared, higher-quality conversations",
      "Less CRM admin, more selling time",
      "Faster ramp for new reps",
    ],
    services: ["ai-training", "ai-automation", "chatgpt-training"],
    caseStudies: [],
    faqs: [
      { q: "Won't AI outreach feel spammy?", a: "Only if misused. We focus AI on research and personalisation that makes outreach more relevant, not more generic." },
      { q: "Can AI update our CRM automatically?", a: "Yes — call summaries and CRM updates are a high-value automation that removes a major admin drag." },
      { q: "How fast can reps see value?", a: "Often within a workshop — personalised outreach and call prep deliver immediate, visible time savings." },
    ],
  },
  {
    slug: "operations",
    ref: "ind_08",
    name: "Operations",
    title: "AI for Operations",
    tagline: "Automate the handoffs, data entry and reporting that slow your operation down.",
    metaDescription:
      "AI for operations with kenai — map and automate repetitive, multi-tool workflows so your operations run faster, with fewer errors and a team freed for higher-value work.",
    accent: "magenta",
    intro:
      "AI in operations means applying AI and automation to the repetitive, rules-based and multi-tool work that operations teams carry — data entry, triage, reporting and handoffs — so processes run faster and more reliably. kenai maps these workflows and builds automation your team can own and maintain.",
    useCases: [
      "Triaging and routing inbound requests",
      "Automating data entry and cross-system sync",
      "Generating recurring reports and summaries",
      "Document processing and extraction",
    ],
    workflows: [
      "Request intake, triage and routing automations",
      "Cross-tool data sync on n8n",
      "Scheduled reporting and digest generation",
      "Document extraction and processing pipelines",
    ],
    outcomes: [
      "Faster process cycle times",
      "Fewer manual-entry errors",
      "Reliable, observable automations you own",
      "A team freed from repetitive busywork",
    ],
    services: ["workflow-automation", "ai-automation", "n8n-consulting"],
    caseStudies: ["sme-workflow-automation"],
    faqs: [
      { q: "What should we automate first?", a: "The high-volume, well-defined workflows — triage, data sync, reporting — where rules are clear and payoff is fast." },
      { q: "Will the automations be reliable?", a: "We build with error handling and observability so workflows are dependable, not brittle hacks." },
      { q: "Can our team maintain it?", a: "Yes — we build on tooling like n8n, document everything and train your team to own and extend it." },
    ],
  },
  {
    slug: "smes",
    ref: "ind_09",
    name: "SMEs",
    title: "AI for SMEs",
    tagline: "Punch above your weight — AI leverage built for lean teams and tight budgets.",
    metaDescription:
      "AI for SMEs with kenai — practical, affordable AI training and automation that helps small and mid-size businesses do more with lean teams. Owned in-house, built to scale.",
    accent: "violet",
    intro:
      "AI for SMEs means using AI and automation to give small and mid-size businesses outsized leverage — removing busywork, speeding up output and competing with larger players — without enterprise budgets or complexity. kenai helps SMEs prioritise the highest-ROI opportunities and build capability they own.",
    useCases: [
      "Automating repetitive back-office work",
      "Upskilling a lean team to use AI daily",
      "Speeding up content, sales and ops output",
      "Standing up affordable custom AI where it pays",
    ],
    workflows: [
      "Prioritised automation of top manual workflows",
      "A practical AI toolkit for the whole team",
      "Lightweight custom assistants over your data",
      "Owned, maintainable automation on open tooling",
    ],
    outcomes: [
      "More output from the same lean team",
      "Quick, visible ROI on the right workflows",
      "Capability owned in-house, no lock-in",
      "A real edge against larger competitors",
    ],
    services: ["ai-consulting", "ai-training", "workflow-automation"],
    caseStudies: ["sme-workflow-automation"],
    faqs: [
      { q: "Is AI affordable for a small business?", a: "Yes — modern AI tools are inexpensive. The value is in choosing the right workflows and building capability, which is exactly what kenai focuses on." },
      { q: "We don't have a tech team — can we still do this?", a: "Absolutely. We build on maintainable tooling and train your team so you own it without needing in-house engineers." },
      { q: "Where's the fastest ROI?", a: "Automating your most repetitive workflow and upskilling the team — both deliver visible wins quickly." },
    ],
  },
  {
    slug: "startups",
    ref: "ind_10",
    name: "Startups",
    title: "AI for Startups",
    tagline: "Build an AI-native company from day one and move faster than your runway.",
    metaDescription:
      "AI for startups with kenai — embed AI into how your team works from day one, automate to extend runway, and build AI-native products with the right guardrails.",
    accent: "cyan",
    intro:
      "AI for startups means embedding AI into how a young company operates and builds from the start — automating to extend runway, upskilling a small team for outsized output, and shipping AI features with the right guardrails. kenai helps founders make their company AI-native early, when it's cheapest to do.",
    useCases: [
      "Automating ops to extend runway",
      "Upskilling a small team for big output",
      "Prototyping AI features and agents fast",
      "Building AI-native workflows from day one",
    ],
    workflows: [
      "Lean automation across ops, sales and support",
      "An AI-first working culture and toolkit",
      "Rapid AI feature and agent prototyping",
      "Guardrails and governance that scale with you",
    ],
    outcomes: [
      "More done per person, longer runway",
      "An AI-native culture baked in early",
      "Faster product experimentation",
      "Investor-ready AI story and capability",
    ],
    services: ["ai-agent-development", "ai-automation", "custom-ai-solutions"],
    caseStudies: [],
    faqs: [
      { q: "We're tiny — is it too early for this?", a: "It's the best time. Building AI-native habits and automation early is far cheaper than retrofitting them later." },
      { q: "Should we build AI into our product?", a: "Often yes — we help you prototype AI features and agents quickly with the guardrails to take them to production." },
      { q: "How does AI help our runway?", a: "By automating ops and amplifying a small team, you do more without hiring — directly extending runway." },
    ],
  },
];

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
