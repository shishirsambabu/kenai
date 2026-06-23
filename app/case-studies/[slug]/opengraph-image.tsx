import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "../../lib/ogImage";
import { CASE_STUDIES, getCaseStudy } from "../../lib/caseStudies";

export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "kenai case study";

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const study = getCaseStudy(params.slug);
  return renderOgImage({
    eyebrow: study ? `Case study · ${study.sector}` : "Case study",
    title: study?.title ?? "Case Study",
    accent: study?.accent ?? "magenta",
    badge: "Results",
  });
}
