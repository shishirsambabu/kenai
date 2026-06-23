// Geographic catalog for local SEO. Powers /locations, /locations/[location]
// and /locations/[location]/[service]. Kerala-weighted plus national hotspots.
// Each location carries genuinely localised context so generated pages are
// substantive, not doorway pages.

export type LocationType = "country" | "state" | "city";

export interface Location {
  slug: string;
  name: string;
  type: LocationType;
  /** Schema.org type for areaServed */
  schemaType: "Country" | "State" | "City";
  /** Parent region name (state for a city, country for a state) */
  region: string;
  /** Parent location slug for breadcrumbs/linking (undefined for country) */
  parent?: string;
  /** Localised one-line intro fragment used in copy */
  intro: string;
  /** Local economic / industry context — drives unique body content */
  industries: string;
  /** Nearby areas also served (internal/area context) */
  nearby: string[];
  /** Short descriptor for cards */
  blurb: string;
}

export const LOCATIONS: Location[] = [
  {
    slug: "india",
    name: "India",
    type: "country",
    schemaType: "Country",
    region: "India",
    intro:
      "kenai is an India-first AI training and consulting studio, delivering hands-on programs to teams across the country, on-site and remotely.",
    industries:
      "India's IT services, GCCs, startups, BFSI, manufacturing and education sectors are adopting AI fast — and need practical capability, not theory.",
    nearby: ["Bangalore", "Mumbai", "Delhi NCR", "Hyderabad", "Chennai", "Kochi", "Pune"],
    blurb: "Hands-on AI training and consulting for teams across India.",
  },
  // ---- States / regions ----
  {
    slug: "kerala",
    name: "Kerala",
    type: "state",
    schemaType: "State",
    region: "India",
    parent: "india",
    intro:
      "kenai delivers AI training and consulting across Kerala — from Kochi's tech parks to Thiruvananthapuram, Kozhikode and Thrissur — on-site and online.",
    industries:
      "Kerala's growing IT corridors (Infopark, Technopark), tourism, healthcare, education and a strong NRI-backed SME base make practical AI skills a real competitive edge.",
    nearby: ["Kochi", "Thiruvananthapuram", "Kozhikode", "Thrissur", "Kollam", "Kannur"],
    blurb: "AI training across Kochi, Trivandrum, Kozhikode & Thrissur.",
  },
  {
    slug: "karnataka",
    name: "Karnataka",
    type: "state",
    schemaType: "State",
    region: "India",
    parent: "india",
    intro:
      "kenai works with teams across Karnataka, centred on Bangalore — India's startup and technology capital.",
    industries:
      "Karnataka, led by Bangalore, hosts India's densest concentration of startups, GCCs and product companies — fertile ground for advanced AI adoption.",
    nearby: ["Bangalore", "Mysuru", "Mangaluru", "Hubli"],
    blurb: "AI training and consulting across Bangalore and Karnataka.",
  },
  {
    slug: "tamil-nadu",
    name: "Tamil Nadu",
    type: "state",
    schemaType: "State",
    region: "India",
    parent: "india",
    intro:
      "kenai delivers AI programs across Tamil Nadu — from Chennai's enterprise hubs to the manufacturing and education centres of Coimbatore.",
    industries:
      "Tamil Nadu blends large IT services and BPM, automotive and manufacturing, and a vast education sector — all ripe for AI upskilling and automation.",
    nearby: ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli"],
    blurb: "AI training across Chennai, Coimbatore and Tamil Nadu.",
  },
  {
    slug: "maharashtra",
    name: "Maharashtra",
    type: "state",
    schemaType: "State",
    region: "India",
    parent: "india",
    intro:
      "kenai works with organisations across Maharashtra, anchored by Mumbai and Pune.",
    industries:
      "Maharashtra spans Mumbai's BFSI and media powerhouses and Pune's IT and manufacturing belt — high-value functions where AI delivers fast ROI.",
    nearby: ["Mumbai", "Pune", "Nagpur", "Nashik"],
    blurb: "AI training and consulting across Mumbai, Pune and Maharashtra.",
  },
  {
    slug: "telangana",
    name: "Telangana",
    type: "state",
    schemaType: "State",
    region: "India",
    parent: "india",
    intro:
      "kenai delivers AI training and consulting across Telangana, centred on Hyderabad.",
    industries:
      "Hyderabad's HITEC City hosts major global tech campuses, pharma and life sciences — sectors investing heavily in AI capability.",
    nearby: ["Hyderabad", "Secunderabad", "Warangal"],
    blurb: "AI training and consulting across Hyderabad and Telangana.",
  },
  {
    slug: "delhi-ncr",
    name: "Delhi NCR",
    type: "state",
    schemaType: "State",
    region: "India",
    parent: "india",
    intro:
      "kenai works with teams across Delhi NCR — including Gurugram and Noida — on-site and remotely.",
    industries:
      "Delhi NCR concentrates corporate HQs, consulting, BFSI, government-adjacent and a thriving startup scene across Gurugram and Noida.",
    nearby: ["New Delhi", "Gurugram", "Noida", "Faridabad", "Ghaziabad"],
    blurb: "AI training and consulting across Delhi, Gurugram and Noida.",
  },
  // ---- Kerala cities ----
  {
    slug: "kochi",
    name: "Kochi",
    type: "city",
    schemaType: "City",
    region: "Kerala",
    parent: "kerala",
    intro:
      "kenai delivers AI training and consulting in Kochi — Kerala's commercial and IT hub, home to Infopark and SmartCity.",
    industries:
      "Kochi's Infopark and SmartCity host IT services, startups and GCCs, alongside shipping, logistics and a strong professional-services base.",
    nearby: ["Ernakulam", "Kakkanad", "Aluva", "Thrissur"],
    blurb: "Hands-on AI training for teams in Kochi & Ernakulam.",
  },
  {
    slug: "thiruvananthapuram",
    name: "Thiruvananthapuram",
    type: "city",
    schemaType: "City",
    region: "Kerala",
    parent: "kerala",
    intro:
      "kenai delivers AI training and consulting in Thiruvananthapuram (Trivandrum), home to Technopark — one of India's largest IT parks.",
    industries:
      "Technopark anchors Trivandrum's large IT and product-engineering community, complemented by government, space/research and higher education.",
    nearby: ["Technopark", "Kazhakkoottam", "Kollam"],
    blurb: "AI training for Technopark & Trivandrum teams.",
  },
  {
    slug: "kozhikode",
    name: "Kozhikode",
    type: "city",
    schemaType: "City",
    region: "Kerala",
    parent: "kerala",
    intro:
      "kenai delivers AI training and consulting in Kozhikode (Calicut), a fast-growing IT and education centre in north Kerala.",
    industries:
      "Kozhikode's UL Cyberpark, trading heritage, healthcare and strong education institutions are increasingly adopting AI and automation.",
    nearby: ["UL Cyberpark", "Malappuram", "Kannur"],
    blurb: "AI training for teams in Kozhikode (Calicut).",
  },
  {
    slug: "thrissur",
    name: "Thrissur",
    type: "city",
    schemaType: "City",
    region: "Kerala",
    parent: "kerala",
    intro:
      "kenai delivers AI training and consulting in Thrissur, Kerala's cultural capital and a rising commercial and education hub.",
    industries:
      "Thrissur's banking and finance roots, jewellery trade, healthcare and education sector are prime candidates for AI-driven efficiency.",
    nearby: ["Ollur", "Irinjalakuda", "Kochi"],
    blurb: "AI training for teams in Thrissur.",
  },
  // ---- Other metro cities ----
  {
    slug: "bangalore",
    name: "Bangalore",
    type: "city",
    schemaType: "City",
    region: "Karnataka",
    parent: "karnataka",
    intro:
      "kenai delivers AI training and consulting in Bangalore (Bengaluru), India's startup and technology capital.",
    industries:
      "Bangalore hosts the country's densest cluster of startups, GCCs and product companies — teams here push the frontier of AI adoption.",
    nearby: ["Whitefield", "Electronic City", "Koramangala", "Outer Ring Road"],
    blurb: "AI training and consulting for Bangalore teams.",
  },
  {
    slug: "mumbai",
    name: "Mumbai",
    type: "city",
    schemaType: "City",
    region: "Maharashtra",
    parent: "maharashtra",
    intro:
      "kenai delivers AI training and consulting in Mumbai, India's financial and media capital.",
    industries:
      "Mumbai concentrates BFSI, media and entertainment, advertising and corporate HQs — high-value knowledge work where AI compounds fast.",
    nearby: ["Navi Mumbai", "Thane", "BKC", "Andheri"],
    blurb: "AI training and consulting for Mumbai teams.",
  },
  {
    slug: "delhi",
    name: "Delhi",
    type: "city",
    schemaType: "City",
    region: "Delhi NCR",
    parent: "delhi-ncr",
    intro:
      "kenai delivers AI training and consulting in Delhi and across the NCR, including Gurugram and Noida.",
    industries:
      "Delhi NCR brings together corporate HQs, consulting firms, BFSI and a strong startup ecosystem across Gurugram and Noida.",
    nearby: ["Gurugram", "Noida", "Connaught Place", "Faridabad"],
    blurb: "AI training and consulting across Delhi NCR.",
  },
  {
    slug: "hyderabad",
    name: "Hyderabad",
    type: "city",
    schemaType: "City",
    region: "Telangana",
    parent: "telangana",
    intro:
      "kenai delivers AI training and consulting in Hyderabad, home to HITEC City and major global tech campuses.",
    industries:
      "Hyderabad's HITEC City and Gachibowli host global tech, pharma and life-sciences leaders investing heavily in AI capability.",
    nearby: ["HITEC City", "Gachibowli", "Secunderabad", "Madhapur"],
    blurb: "AI training and consulting for Hyderabad teams.",
  },
  {
    slug: "chennai",
    name: "Chennai",
    type: "city",
    schemaType: "City",
    region: "Tamil Nadu",
    parent: "tamil-nadu",
    intro:
      "kenai delivers AI training and consulting in Chennai, a major IT services, automotive and manufacturing hub.",
    industries:
      "Chennai blends large IT services and BPM, automotive ('Detroit of India') and healthcare — sectors ready for AI upskilling and automation.",
    nearby: ["OMR", "Guindy", "Sholinganallur", "Ambattur"],
    blurb: "AI training and consulting for Chennai teams.",
  },
  {
    slug: "pune",
    name: "Pune",
    type: "city",
    schemaType: "City",
    region: "Maharashtra",
    parent: "maharashtra",
    intro:
      "kenai delivers AI training and consulting in Pune, a leading IT, education and manufacturing centre.",
    industries:
      "Pune's IT parks, automotive and manufacturing belt, and large student population make it a hotspot for AI skills and automation.",
    nearby: ["Hinjewadi", "Kharadi", "Magarpatta", "Pimpri-Chinchwad"],
    blurb: "AI training and consulting for Pune teams.",
  },
  {
    slug: "coimbatore",
    name: "Coimbatore",
    type: "city",
    schemaType: "City",
    region: "Tamil Nadu",
    parent: "tamil-nadu",
    intro:
      "kenai delivers AI training and consulting in Coimbatore, Tamil Nadu's manufacturing, textile and education hub.",
    industries:
      "Coimbatore's manufacturing, textiles, engineering and large education sector stand to gain significantly from AI and automation.",
    nearby: ["Peelamedu", "Saravanampatti", "Tiruppur"],
    blurb: "AI training and consulting for Coimbatore teams.",
  },
];

// Services that attract geographic search intent. These get /locations/[loc]/[svc] pages.
export const LOCALIZED_SERVICE_SLUGS = [
  "ai-training",
  "corporate-ai-workshops",
  "ai-consulting",
  "ai-automation",
  "claude-training",
  "chatgpt-training",
];

export function getLocation(slug: string): Location | undefined {
  return LOCATIONS.find((l) => l.slug === slug);
}

export function locationParent(loc: Location): Location | undefined {
  return loc.parent ? getLocation(loc.parent) : undefined;
}
