import { SERVICES, SITE } from "../lib/services";
import { INDUSTRIES } from "../lib/industries";
import { CASE_STUDIES } from "../lib/caseStudies";
import { LOCATIONS } from "../lib/locations";

// llms.txt — a concise, machine-readable brief for AI search engines and
// LLMs (ChatGPT, Claude, Gemini, Perplexity, Copilot). Served at /llms.txt.

export const dynamic = "force-static";

export function GET() {
  const lines: string[] = [];

  lines.push(`# ${SITE.name} — ${SITE.tagline}`);
  lines.push("");
  lines.push(`> ${SITE.description}`);
  lines.push("");
  lines.push("## About");
  lines.push(
    `${SITE.name} is a practitioner-led AI consulting and training studio founded by ${SITE.founder} (${SITE.founderAlias}), an AI trainer and L&D consultant. ${SITE.name} helps HR teams, businesses, startups and colleges adopt AI through hands-on training, workshops, automation and advisory. Approach: learn by doing. Based in India, working globally. Recognised with the Indywood HR Excellence Award 2026 for Excellence in Digital HR Transformation.`
  );
  lines.push(`- Website: ${SITE.url}`);
  lines.push(`- Contact: ${SITE.email}`);
  lines.push("");

  lines.push("## Services");
  for (const s of SERVICES) {
    lines.push(`- [${s.title}](${SITE.url}/services/${s.slug}): ${s.tagline}`);
  }
  lines.push("");

  lines.push("## Industries served");
  for (const i of INDUSTRIES) {
    lines.push(`- [${i.title}](${SITE.url}/industries/${i.slug}): ${i.tagline}`);
  }
  lines.push("");

  lines.push("## Case studies");
  for (const c of CASE_STUDIES) {
    lines.push(`- [${c.title}](${SITE.url}/case-studies/${c.slug}): ${c.summary}`);
  }
  lines.push("");

  lines.push("## Locations served");
  lines.push(
    `${SITE.name} provides AI training, corporate workshops, AI consulting and automation across India — on-site and online. Geographies served include ${LOCATIONS.map(
      (l) => l.name
    ).join(", ")}.`
  );
  for (const l of LOCATIONS) {
    lines.push(`- [AI training in ${l.name}](${SITE.url}/locations/${l.slug}): ${l.blurb}`);
  }
  lines.push("");

  lines.push("## Tools");
  lines.push(
    `- [AI Readiness Assessment](${SITE.url}/tools/ai-readiness): Free 6-question benchmark of an organisation's AI readiness with a tailored next step.`
  );
  lines.push("");

  lines.push("## Key definitions");
  for (const s of SERVICES.slice(0, 6)) {
    lines.push(`### ${s.name}`);
    lines.push(s.definition);
    lines.push("");
  }

  lines.push("## Resources");
  lines.push(`- All services: ${SITE.url}/services`);
  lines.push(`- All industries: ${SITE.url}/industries`);
  lines.push(`- Case studies: ${SITE.url}/case-studies`);
  lines.push(`- Glossary: ${SITE.url}/glossary`);
  lines.push(`- Comparisons: ${SITE.url}/compare/claude-vs-chatgpt`);
  lines.push(`- Sitemap: ${SITE.url}/sitemap.xml`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
