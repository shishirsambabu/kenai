// Composes unique-enough copy + FAQs for location and location×service pages
// from the service and location catalogs. Keeps generated pages substantive.

import { Location } from "./locations";
import { Service } from "./services";

export interface FAQ {
  q: string;
  a: string;
}

const areaPhrase = (loc: Location) =>
  loc.type === "city"
    ? `in ${loc.name}${loc.region !== loc.name ? ` and across ${loc.region}` : ""}`
    : loc.type === "state"
    ? `across ${loc.name}`
    : `across ${loc.name}`;

const deliveryPhrase = (loc: Location) =>
  loc.type === "city"
    ? `kenai delivers on-site sessions in ${loc.name} (${loc.nearby
        .slice(0, 3)
        .join(", ")}) and remotely for distributed teams.`
    : loc.type === "state"
    ? `kenai delivers on-site sessions across ${loc.name} — including ${loc.nearby
        .slice(0, 3)
        .join(", ")} — and remotely.`
    : `kenai delivers on-site sessions in major hubs and remotely to teams anywhere in ${loc.name}.`;

export function serviceLocationTitle(service: Service, loc: Location): string {
  return `${service.name} in ${loc.name}`;
}

export function serviceLocationMeta(service: Service, loc: Location): string {
  return `${service.name} in ${loc.name} from kenai — ${service.tagline} Hands-on, practitioner-led, delivered on-site ${areaPhrase(
    loc
  )} and online. The way of AI.`;
}

export function serviceLocationIntro(service: Service, loc: Location): string[] {
  return [
    `kenai provides ${service.name.toLowerCase()} ${areaPhrase(loc)}. ${loc.intro}`,
    `${service.definition}`,
    `${loc.industries} ${deliveryPhrase(loc)}`,
  ];
}

export function serviceLocationFaqs(service: Service, loc: Location): FAQ[] {
  const faqs: FAQ[] = [
    {
      q: `Does kenai offer ${service.name.toLowerCase()} in ${loc.name}?`,
      a: `Yes. kenai provides ${service.name.toLowerCase()} ${areaPhrase(
        loc
      )}, delivered hands-on by a practitioner. ${deliveryPhrase(loc)}`,
    },
    {
      q: `Is ${service.name} in ${loc.name} in-person or online?`,
      a: `Both. ${deliveryPhrase(
        loc
      )} Many teams choose a hybrid of on-site workshops and remote follow-up.`,
    },
    {
      q: `Who is ${service.name.toLowerCase()} in ${loc.name} for?`,
      a: `${service.audience} In ${loc.region}, that includes teams in ${loc.industries
        .replace(/\.$/, "")
        .toLowerCase()}.`,
    },
  ];
  // Borrow one service-level FAQ for depth.
  if (service.faqs[0]) {
    faqs.push(service.faqs[0]);
  }
  return faqs;
}

// ---- Location hub ----

export function locationHubTitle(loc: Location): string {
  return `AI Training & Consulting in ${loc.name}`;
}

export function locationHubMeta(loc: Location): string {
  return `AI training, workshops, consulting and automation in ${loc.name} from kenai. Hands-on, practitioner-led programs delivered on-site ${areaPhrase(
    loc
  )} and online. The way of AI — India-first.`;
}

export function locationHubIntro(loc: Location): string[] {
  return [
    `${loc.intro}`,
    `Whether you need hands-on AI training, a corporate workshop, advisory or automation, kenai brings practitioner-led AI capability to teams ${areaPhrase(
      loc
    )} — learning by doing, not slideware.`,
    `${loc.industries} ${deliveryPhrase(loc)}`,
  ];
}
