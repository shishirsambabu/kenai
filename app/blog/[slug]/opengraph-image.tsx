import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "../../lib/og";
import { posts, getPost } from "../../lib/blog";

export const alt = "kenai blog article";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const p = getPost(params.slug);
  return renderOgImage({
    eyebrow: p ? `Blog · ${p.tag}` : "Blog",
    title: p?.title ?? "kenai blog",
    accent: p?.tagColor ?? "#00F0FF",
  });
}
