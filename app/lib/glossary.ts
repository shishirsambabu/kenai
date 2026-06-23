// AI glossary — programmatic GEO/AISO asset. Each term gets its own page
// with DefinedTerm schema, written to be quotable by AI search engines.

export interface GlossaryTerm {
  slug: string;
  term: string;
  short: string;
  /** GEO-quotable definition (1-2 sentences, plain language) */
  definition: string;
  /** Expanded explanation */
  body: string;
  /** Why it matters for teams adopting AI */
  whyItMatters: string;
  /** Related service slugs */
  related: string[];
  /** Related glossary slugs */
  seeAlso: string[];
}

export const GLOSSARY: GlossaryTerm[] = [
  {
    slug: "large-language-model",
    term: "Large Language Model (LLM)",
    short: "An AI model trained on vast text that generates and understands language.",
    definition:
      "A large language model (LLM) is an AI system trained on vast amounts of text to understand and generate human language. LLMs like Claude and ChatGPT predict the most useful next words for a given prompt, enabling writing, analysis, coding and conversation.",
    body: "LLMs are the engines behind modern AI assistants. They are trained on large text datasets and then refined to follow instructions helpfully and safely. Their capability depends on the model, the quality of the prompt, and the context provided. They do not 'look things up' by default — they generate responses from learned patterns — which is why grounding them in your own data (via retrieval) matters for accuracy.",
    whyItMatters:
      "Understanding what an LLM is — and isn't — is the foundation of using AI well. Teams that grasp how prompting and context shape outputs get dramatically better, more reliable results.",
    related: ["ai-training", "prompt-engineering"],
    seeAlso: ["prompt-engineering-term", "rag", "ai-agent"],
  },
  {
    slug: "prompt-engineering-term",
    term: "Prompt Engineering",
    short: "Designing instructions to get reliable, high-quality outputs from AI.",
    definition:
      "Prompt engineering is the practice of designing the instructions, context and structure given to an AI model so it produces reliable, high-quality outputs consistently. Good prompts are specific, provide context and examples, and define the desired format.",
    body: "Because an LLM's output depends heavily on its input, prompt engineering is one of the highest-leverage AI skills. Techniques include giving clear instructions, providing relevant context, showing examples (few-shot prompting), specifying output format, and breaking complex tasks into steps. At scale, teams build reusable prompt libraries so quality doesn't depend on individual skill.",
    whyItMatters:
      "Most disappointing AI results come from weak prompts, not weak models. Prompt engineering turns inconsistent, hit-or-miss AI use into a dependable, repeatable capability.",
    related: ["prompt-engineering", "ai-training"],
    seeAlso: ["large-language-model", "ai-agent"],
  },
  {
    slug: "rag",
    term: "Retrieval-Augmented Generation (RAG)",
    short: "Grounding an AI model in your own documents for accurate answers.",
    definition:
      "Retrieval-augmented generation (RAG) is a technique that grounds a large language model in a specific set of documents or data: relevant information is retrieved and supplied to the model at query time, so answers are based on your knowledge rather than only the model's training.",
    body: "RAG is how AI assistants answer accurately from a company's own handbooks, policies, product docs or knowledge base. The system finds the most relevant passages for a question and includes them in the prompt, reducing hallucination and keeping answers current without retraining the model. It's the backbone of most custom AI assistants.",
    whyItMatters:
      "RAG is what makes a 'chatbot over your data' actually trustworthy. It's essential for internal assistants, support tools and any AI that must answer from your specific information.",
    related: ["custom-ai-solutions", "ai-agent-development"],
    seeAlso: ["large-language-model", "ai-agent", "hallucination"],
  },
  {
    slug: "ai-agent",
    term: "AI Agent",
    short: "An AI system that plans and carries out multi-step tasks using tools.",
    definition:
      "An AI agent is a system that uses a large language model to plan and carry out multi-step tasks toward a goal — calling tools, retrieving data and making decisions along the way, rather than just answering a single prompt.",
    body: "Where a chatbot responds to one message, an agent can break a goal into steps, use tools (search, databases, APIs), check its work and iterate. Reliable agents are tightly scoped, given the right tools, evaluated against real cases, and kept under human oversight for important actions. They handle work like triaging requests, research, drafting and orchestrating workflows.",
    whyItMatters:
      "Agents are how AI moves from 'answering questions' to 'doing real work'. Built well, they automate genuinely complex tasks; built carelessly, they're unreliable — design discipline is everything.",
    related: ["ai-agent-development", "custom-ai-solutions"],
    seeAlso: ["large-language-model", "rag", "workflow-automation-term"],
  },
  {
    slug: "workflow-automation-term",
    term: "Workflow Automation",
    short: "Connecting apps and steps so processes run with little manual effort.",
    definition:
      "Workflow automation connects apps, data and people so multi-step processes — handoffs, approvals, data entry, notifications — run automatically with minimal manual effort. Increasingly, AI handles the judgment-heavy steps within these workflows.",
    body: "Automation platforms like n8n let teams wire their tools together into reliable, observable workflows. Adding AI lets automations handle steps that previously needed a human — summarising, classifying, drafting — while rules handle the deterministic parts. The best automations are documented and owned in-house so teams can maintain and extend them.",
    whyItMatters:
      "Most teams lose hours every week to repetitive, multi-tool busywork. Workflow automation reclaims that time and reduces errors — often the fastest, clearest ROI in an AI adoption journey.",
    related: ["workflow-automation", "ai-automation", "n8n-consulting"],
    seeAlso: ["ai-agent", "n8n-term"],
  },
  {
    slug: "n8n-term",
    term: "n8n",
    short: "An open, self-hostable workflow automation platform.",
    definition:
      "n8n is an open-source, self-hostable workflow automation platform that lets teams connect apps, data and AI models into automated workflows using a visual editor. It's popular for AI automation because it's flexible, transparent and owned by the team that runs it.",
    body: "n8n provides nodes for hundreds of apps plus AI and code, so you can build anything from a simple notification to a complex, branching automation with error handling. Because it can be self-hosted, teams keep control of their data and avoid per-task pricing — a key reason it's favoured for production AI automation.",
    whyItMatters:
      "Choosing maintainable, ownable tooling like n8n avoids vendor lock-in and brittle automations. It lets a team build serious AI workflows they can actually keep running.",
    related: ["n8n-consulting", "workflow-automation", "ai-automation"],
    seeAlso: ["workflow-automation-term", "ai-agent"],
  },
  {
    slug: "hallucination",
    term: "AI Hallucination",
    short: "When an AI confidently states something inaccurate or made up.",
    definition:
      "An AI hallucination is when a language model produces a confident-sounding answer that is inaccurate or fabricated. Because LLMs generate plausible text rather than retrieving verified facts, they can state false information convincingly.",
    body: "Hallucinations are reduced — not eliminated — by grounding the model in real data (retrieval), asking it to cite sources, keeping tasks within its competence, and adding human review for high-stakes outputs. Understanding hallucination is essential to using AI responsibly: treat outputs as drafts to verify, especially for facts, figures and citations.",
    whyItMatters:
      "Knowing AI can hallucinate is the difference between using it safely and being misled by it. Responsible adoption builds in verification and grounding precisely because of this.",
    related: ["ai-training", "ai-consulting"],
    seeAlso: ["large-language-model", "rag"],
  },
  {
    slug: "fine-tuning",
    term: "Fine-Tuning",
    short: "Further training a model on specific data to specialise it.",
    definition:
      "Fine-tuning is the process of further training an existing AI model on a specific dataset so it performs better on a particular task, style or domain. It adjusts the model itself, unlike prompting or retrieval which change the input.",
    body: "Fine-tuning can help when you need a consistent style, a specialised classification, or behaviour that's hard to achieve with prompting alone. However, for most business needs, strong prompting plus retrieval (RAG) is faster, cheaper and easier to maintain than fine-tuning. Knowing when each approach fits is part of designing a good AI solution.",
    whyItMatters:
      "Teams often assume they need to 'train their own AI' when prompting and RAG would serve better. Understanding fine-tuning's real role prevents costly, unnecessary projects.",
    related: ["custom-ai-solutions", "ai-consulting"],
    seeAlso: ["large-language-model", "rag", "prompt-engineering-term"],
  },
  {
    slug: "ai-governance",
    term: "AI Governance",
    short: "The policies and guardrails for using AI responsibly.",
    definition:
      "AI governance is the set of policies, guardrails and oversight that ensure an organisation uses AI responsibly, safely and in line with its values and obligations — covering data handling, acceptable use, human oversight and accountability.",
    body: "Good governance answers practical questions: what data can go into AI tools, who reviews AI-assisted decisions, where human sign-off is required, and how use is monitored. Introduced alongside enablement, governance removes the fear that blocks adoption — teams use AI confidently because the boundaries are clear.",
    whyItMatters:
      "Without governance, AI adoption creates risk and inconsistency; with it, teams move faster because they know what's allowed. It's especially critical for sensitive functions like HR.",
    related: ["ai-consulting", "ai-transformation-programs"],
    seeAlso: ["hallucination", "ai-readiness"],
  },
  {
    slug: "ai-readiness",
    term: "AI Readiness",
    short: "How prepared an organisation is to adopt AI effectively.",
    definition:
      "AI readiness is a measure of how prepared an organisation is to adopt AI effectively — across strategy, skills, adoption, automation, governance and leadership. Higher readiness means AI delivers value faster and more safely.",
    body: "Readiness isn't about owning the latest tools; it's about whether people, processes and guardrails are in place to turn AI into real outcomes. Assessing readiness reveals the highest-leverage next step — often hands-on training, a first automation, or basic governance — rather than scattered, low-impact pilots.",
    whyItMatters:
      "Knowing your readiness level prevents wasted effort. It focuses investment on the gap that's actually holding the organisation back from AI value.",
    related: ["ai-consulting", "ai-transformation-programs"],
    seeAlso: ["ai-governance", "ai-maturity"],
  },
  {
    slug: "ai-maturity",
    term: "AI Maturity",
    short: "How deeply AI is embedded in how an organisation operates.",
    definition:
      "AI maturity describes how deeply and effectively AI is embedded in how an organisation works — from isolated experiments at low maturity to AI as a default, governed working tool across teams at high maturity.",
    body: "Maturity models help organisations see where they are and what 'good' looks like next. Progression typically moves from awareness, to capable individuals, to team-wide adoption, to AI-native operations with governance and continuous improvement. Tracking maturity turns AI from a series of one-off projects into a sustained capability.",
    whyItMatters:
      "Measuring maturity gives leaders a clear narrative and roadmap. It reframes AI as an ongoing organisational capability, not a one-time initiative.",
    related: ["ai-transformation-programs", "ai-consulting"],
    seeAlso: ["ai-readiness", "ai-governance"],
  },
  {
    slug: "human-in-the-loop",
    term: "Human-in-the-Loop",
    short: "Keeping human review and control over important AI decisions.",
    definition:
      "Human-in-the-loop is a design approach where people review, approve or can override an AI system's outputs and actions — especially for important or sensitive decisions — keeping humans accountable and in control.",
    body: "Rather than fully automating high-stakes steps, human-in-the-loop designs insert checkpoints: an AI drafts, a person approves; an agent proposes an action, a human confirms. This captures AI's speed while preserving judgment, accountability and safety. It's a cornerstone of responsible AI in areas like hiring, finance and customer communication.",
    whyItMatters:
      "It's how organisations get AI's leverage without ceding control. Human-in-the-loop is often what makes AI adoption acceptable to leadership, legal and HR.",
    related: ["ai-agent-development", "ai-consulting"],
    seeAlso: ["ai-agent", "ai-governance"],
  },
];

export function getTerm(slug: string): GlossaryTerm | undefined {
  return GLOSSARY.find((t) => t.slug === slug);
}
