/**
 * Location catalog → programmatic local-SEO pages at /ai-training/[city].
 * Targets "AI training in <city>" search intent across India.
 */

export type Location = {
  slug: string;
  city: string;
  altName?: string; // e.g. Bengaluru / Bangalore
  region: string;
  blurb: string;
};

export const locations: Location[] = [
  { slug: "bangalore", city: "Bangalore", altName: "Bengaluru", region: "Karnataka", blurb: "India's tech capital" },
  { slug: "mumbai", city: "Mumbai", region: "Maharashtra", blurb: "India's financial hub" },
  { slug: "delhi", city: "Delhi NCR", region: "Delhi", blurb: "the national capital region" },
  { slug: "hyderabad", city: "Hyderabad", region: "Telangana", blurb: "a major IT and pharma centre" },
  { slug: "chennai", city: "Chennai", region: "Tamil Nadu", blurb: "a leading IT and manufacturing hub" },
  { slug: "pune", city: "Pune", region: "Maharashtra", blurb: "a thriving IT and education city" },
  { slug: "kolkata", city: "Kolkata", region: "West Bengal", blurb: "eastern India's commercial centre" },
  { slug: "ahmedabad", city: "Ahmedabad", region: "Gujarat", blurb: "a fast-growing business city" },
  { slug: "kochi", city: "Kochi", region: "Kerala", blurb: "Kerala's commercial and startup hub" },
  { slug: "coimbatore", city: "Coimbatore", region: "Tamil Nadu", blurb: "a major industrial and education centre" },
  { slug: "jaipur", city: "Jaipur", region: "Rajasthan", blurb: "a growing IT and education city" },
  { slug: "online", city: "Online (Remote)", region: "Worldwide", blurb: "live, interactive and global" },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
