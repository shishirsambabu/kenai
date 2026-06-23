/**
 * Renders a JSON-LD <script> from a plain object. Server-safe.
 * Use one per schema block (graph, breadcrumb, faq, etc.).
 */
export default function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe to inline here (no user input).
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
