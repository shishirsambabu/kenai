/**
 * Testimonials. Review/AggregateRating JSON-LD is emitted ONLY for entries
 * with `verified: true` and a real `author` + `rating`. The current entries
 * are placeholders (verified: false) so NO review schema ships — fabricating
 * star ratings violates Google's guidelines and risks a manual penalty.
 *
 * To go live with star markup: replace these with real testimonials, set
 * `verified: true`, add the person's real `author` name and a truthful
 * `rating` (1–5). The schema and on-page stars then activate automatically.
 */

export type Testimonial = {
  quote: string;
  author: string; // real name when verified
  role: string; // e.g. "Head of HR"
  org: string;
  initial: string;
  rating?: number; // 1–5, only when verified
  verified: boolean;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      'Our HR team went from "AI-curious" to shipping real automations in a single bootcamp. Sam makes it click.',
    author: "",
    role: "Head of HR",
    org: "Enterprise · placeholder",
    initial: "H",
    verified: false,
  },
  {
    quote:
      "Best AI session our students have had — hands-on, relevant, and zero corporate fluff. They built things they're proud of.",
    author: "",
    role: "Dean",
    org: "College · placeholder",
    initial: "D",
    verified: false,
  },
  {
    quote:
      "Finally an AI trainer who actually does the work. The advisory roadmap alone paid for itself.",
    author: "",
    role: "Founder",
    org: "SMB · placeholder",
    initial: "F",
    verified: false,
  },
];

export const verifiedTestimonials = () =>
  testimonials.filter((t) => t.verified && t.author && typeof t.rating === "number");
