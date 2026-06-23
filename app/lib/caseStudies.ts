// Case study catalog. Drives /case-studies, /case-studies/[slug], sitemap
// and JSON-LD. Clients are anonymised by sector/size — representative of
// kenai engagements, in line with how proof is presented elsewhere on the site.

export interface CaseResult {
  metric: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  ref: string;
  /** Anonymised client descriptor */
  client: string;
  sector: string;
  /** Short card title */
  title: string;
  /** One-line outcome summary */
  summary: string;
  metaDescription: string;
  accent: "cyan" | "magenta" | "violet";
  situation: string;
  challenges: string[];
  approach: string;
  implementation: string[];
  results: CaseResult[];
  resultsNarrative: string;
  lessons: string[];
  /** Framework referenced (links conceptually to service pages) */
  framework: string;
  /** Service slugs used in this engagement */
  servicesUsed: string[];
}

const ACCENT_HEX = { cyan: "#00F0FF", magenta: "#FF2E97", violet: "#A855F7" } as const;
export function caseAccent(a: CaseStudy["accent"]): string {
  return ACCENT_HEX[a];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "hr-team-ai-automation",
    ref: "case_01",
    client: "Mid-size IT services firm",
    sector: "HR / People Operations",
    title: "From AI-curious to shipping HR automations in one bootcamp",
    summary: "An HR team automated screening and onboarding busywork after a hands-on kenai bootcamp.",
    metaDescription:
      "Case study: how kenai took a mid-size IT services HR team from AI-curious to shipping real screening and onboarding automations in a single hands-on bootcamp.",
    accent: "magenta",
    situation:
      "The people-operations team at a mid-size IT services firm was under pressure to do more with the same headcount. Leadership had mandated 'use AI', but the team had only dabbled with ChatGPT for the occasional email and had no shared standards or workflows.",
    challenges: [
      "High-volume, repetitive screening and onboarding admin eating into strategic work",
      "Inconsistent, ad-hoc AI use with no governance or shared prompts",
      "Scepticism that AI could handle nuanced people decisions responsibly",
    ],
    approach:
      "kenai ran a hands-on AI bootcamp scoped to the team's real tasks, pairing role-specific training with live automation building. Rather than theory, every participant built a working prompt or automation from their own backlog, with responsible-use guardrails baked in from day one.",
    implementation: [
      "Mapped the highest-cost manual HR workflows with the team",
      "Trained the team on structured prompting and a shared prompt library",
      "Built automations for candidate screening summaries and onboarding document prep on n8n",
      "Established a lightweight responsible-use policy for people data",
    ],
    results: [
      { metric: "~8 hrs", label: "saved per week, per recruiter" },
      { metric: "1", label: "bootcamp to first shipped automation" },
      { metric: "100%", label: "of the team building independently after" },
    ],
    resultsNarrative:
      "Within a single bootcamp the team moved from AI-curious to independently shipping automations. Screening summaries and onboarding prep that previously took hours were reduced to minutes, freeing recruiters for higher-value candidate work — with clear guardrails for sensitive data.",
    lessons: [
      "Hands-on building beats demos — capability sticks when people make it work themselves",
      "Governance introduced alongside training removes the fear that blocks adoption",
      "Starting with the team's real backlog makes value obvious immediately",
    ],
    framework: "HR AI Adoption Framework",
    servicesUsed: ["ai-training", "ai-automation", "n8n-consulting"],
  },
  {
    slug: "college-ai-program",
    ref: "case_02",
    client: "Engineering college",
    sector: "Higher Education",
    title: "Bridging the gap between the syllabus and what the market needs",
    summary: "Students and faculty built real AI projects in an industry-ready program.",
    metaDescription:
      "Case study: how kenai delivered an industry-ready, hands-on AI and automation program for an engineering college — students and faculty built real projects, not theory.",
    accent: "cyan",
    situation:
      "An engineering college wanted to make its students genuinely employable in an AI-shaped job market. The existing curriculum lagged behind what employers actually expected, and faculty needed support to teach practical, current AI skills.",
    challenges: [
      "A widening gap between the syllabus and real-world AI skills employers want",
      "Faculty without hands-on experience in current AI tooling",
      "Students exposed to AI theory but with little applied, portfolio-ready work",
    ],
    approach:
      "kenai designed a progressive, project-based AI and automation program for both students and faculty. The program emphasised building real, portfolio-worthy projects, with faculty enablement so the capability would outlast the engagement.",
    implementation: [
      "Delivered a structured, multi-session program with real projects, not slideware",
      "Ran a parallel faculty enablement track so teaching staff could carry it forward",
      "Guided students through automation and AI agent capstone projects",
      "Provided take-home resources and prompt libraries for continued practice",
    ],
    results: [
      { metric: "Cohort", label: "of students shipping real AI projects" },
      { metric: "Faculty", label: "enabled to teach it onward" },
      { metric: "Portfolio", label: "-ready capstones, not just grades" },
    ],
    resultsNarrative:
      "Students finished with portfolio-ready projects they were proud of and a practical command of AI tools, while faculty gained the confidence to keep teaching current skills. The program turned a curriculum gap into a genuine differentiator for graduates.",
    lessons: [
      "Project-based learning produces capability and confidence theory can't",
      "Enabling faculty multiplies impact well beyond the engagement",
      "Relevance matters — tying work to real market needs drives student buy-in",
    ],
    framework: "AI Implementation Framework",
    servicesUsed: ["ai-training", "ai-agent-development", "corporate-ai-workshops"],
  },
  {
    slug: "sme-workflow-automation",
    ref: "case_03",
    client: "Growing SMB",
    sector: "Operations / SME",
    title: "Cutting operational busywork with an advisory-led automation roadmap",
    summary: "An SME removed repetitive ops work and freed its team with a prioritised automation roadmap.",
    metaDescription:
      "Case study: how kenai's advisory and workflow automation helped a growing SME remove repetitive operational busywork and free its small team for higher-value work.",
    accent: "violet",
    situation:
      "A growing small business was hitting the limits of manual operations. A lean team was spending too much time on repetitive data entry, status updates and handoffs between disconnected tools — and the founder wasn't sure where AI and automation would actually pay off.",
    challenges: [
      "A lean team stretched thin by repetitive, multi-tool busywork",
      "No clarity on which processes to automate first for real ROI",
      "Concern about building automations no one in-house could maintain",
    ],
    approach:
      "kenai started with a focused advisory diagnostic to prioritise opportunities by impact and effort, then built the highest-value automations on tooling the team could own — with documentation and training so nothing became a black box.",
    implementation: [
      "Ran an automation prioritisation diagnostic across core operations",
      "Built reliable workflows connecting the team's existing apps and AI on n8n",
      "Added error handling and observability so automations were dependable",
      "Documented everything and trained the team to maintain and extend it",
    ],
    results: [
      { metric: "Top 3", label: "workflows automated first for fast ROI" },
      { metric: "Fewer", label: "manual-entry errors across systems" },
      { metric: "Owned", label: "in-house — no vendor lock-in" },
    ],
    resultsNarrative:
      "By sequencing the work around impact, the SME saw quick, visible wins on its most painful workflows. Repetitive handoffs and re-entry shrank, errors dropped, and — crucially — the team could maintain and extend the automations themselves long after the engagement.",
    lessons: [
      "Prioritising by impact and effort delivers ROI fast and builds momentum",
      "Building on maintainable tooling avoids costly lock-in",
      "Advisory plus implementation beats either one alone for small teams",
    ],
    framework: "Automation Prioritisation Framework",
    servicesUsed: ["ai-consulting", "workflow-automation", "ai-automation"],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
