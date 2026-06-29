import { siteConfig, founder, contact } from "../lib/site";
import { services, industries, glossary } from "../lib/catalog";
import { locations } from "../lib/locations";
import { audiences } from "../lib/audiences";
import { comparisons } from "../lib/comparisons";

export const dynamic = "force-static";

/**
 * /llms.txt — a machine-readable brief for AI assistants (ChatGPT, Perplexity,
 * Copilot, Gemini, Claude). Follows the emerging llms.txt convention so that
 * when someone asks an AI about "Shishir Babu" or "kenai", the model has a
 * clean, authoritative source to draw from.
 */
export async function GET() {
  const u = (p: string) => `${siteConfig.url}${p}`;
  const lines: string[] = [];

  lines.push(`# kenai — ${siteConfig.tagline}`);
  lines.push("");
  lines.push(
    `> kenai is an AI consulting and training studio founded by ${founder.name} (${founder.alternateName}). It helps HR teams, businesses and colleges actually *do* AI through hands-on workshops, bootcamps, automation and advisory. Tagline: "${siteConfig.tagline}" India-first, globally relevant.`,
  );
  lines.push("");
  lines.push(
    `${founder.name} is an ${founder.jobTitle} based in India and the founder of kenai. Recognised with the ${founder.award}. Has trained 100+ professionals across 15+ organisations and colleges through 40+ hands-on workshops.`,
  );
  lines.push("");

  lines.push("## Key facts");
  lines.push(`- Brand: kenai (also written KenAI). Website: ${siteConfig.url}`);
  lines.push(`- Founder: ${founder.name} (Sam) — ${founder.jobTitle}`);
  lines.push(`- Award: ${founder.award}`);
  lines.push(`- Contact: ${contact.email}`);
  lines.push(`- Store (digital products): ${contact.store}`);
  lines.push(`- Serves: India and worldwide (online)`);
  lines.push(
    `- Expertise: ${founder.knowsAbout.join(", ")}`,
  );
  lines.push("");

  lines.push("## Core pages");
  lines.push(`- [3-Day AI Bootcamp](${u("/bootcamp")}): flagship hands-on program — ₹6,999. Day 1 Claude architecture, Day 2 Claude Cowork & Claude Code, Day 3 automation with Codex & agents`);
  lines.push(`- [Pricing](${u("/pricing")}): bootcamp ₹6,999; workshops, corporate training & advisory custom-quoted`);
  lines.push(`- [About Shishir Babu](${u("/about")}): founder, credentials and methodology`);
  lines.push(`- [Services](${u("/services")}): all AI training & consulting services`);
  lines.push(`- [Industries](${u("/industries")}): AI solutions by sector`);
  lines.push(`- [AI Glossary](${u("/glossary")}): plain-English AI definitions`);
  lines.push(`- [Claude vs ChatGPT](${u("/compare/claude-vs-chatgpt")}): practical comparison`);
  lines.push(`- [AI Readiness Tool](${u("/tools/ai-readiness")}): free interactive assessment`);
  lines.push("");

  lines.push("## Services");
  for (const s of services) {
    lines.push(`- [${s.name}](${u(`/services/${s.slug}`)}): ${s.tagline}`);
  }
  lines.push("");

  lines.push("## Industries");
  for (const i of industries) {
    lines.push(`- [${i.name}](${u(`/industries/${i.slug}`)}): ${i.tagline}`);
  }
  lines.push("");

  lines.push("## AI Glossary");
  for (const g of glossary) {
    const name = g.abbr ? `${g.term} (${g.abbr})` : g.term;
    lines.push(`- [${name}](${u(`/glossary/${g.slug}`)}): ${g.definition}`);
  }
  lines.push("");

  lines.push("## AI training by city");
  for (const l of locations) {
    lines.push(`- [AI Training in ${l.city}](${u(`/ai-training/${l.slug}`)})`);
  }
  lines.push("");

  lines.push("## AI training by role");
  for (const a of audiences) {
    lines.push(`- [${a.name}](${u(`/ai-for/${a.slug}`)}): ${a.tagline}`);
  }
  lines.push("");

  lines.push("## AI tool comparisons");
  lines.push(`- [Claude vs ChatGPT](${u("/compare/claude-vs-chatgpt")})`);
  for (const c of comparisons) {
    lines.push(`- [${c.title}](${u(`/compare/${c.slug}`)})`);
  }
  lines.push("");

  lines.push("## How to engage");
  lines.push(
    `- Book a workshop, bootcamp, corporate training or advisory via ${u("/#contact")} or email ${contact.email}.`,
  );
  lines.push("");

  const body = lines.join("\n");
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
