import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

/**
 * Shared branded Open Graph / Twitter card renderer. Produces a real PNG
 * via next/og (Satori) using the default sans font — no network fetch, so
 * it builds reliably offline. Every page type calls this with its own copy.
 *
 * Satori note: any element with more than one child must set display:flex.
 */
export function renderOgImage(opts: {
  title: string;
  eyebrow?: string;
  accent?: string;
}) {
  const accent = opts.accent ?? "#00F0FF";
  return new ImageResponse(
    (
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0A0A12",
          backgroundImage:
            "radial-gradient(circle at 88% -10%, rgba(0,240,255,0.20), transparent 45%), radial-gradient(circle at 2% 115%, rgba(255,46,151,0.16), transparent 45%)",
          padding: "64px 72px",
          color: "#E5E7EB",
          fontFamily: "sans-serif",
        }}
      >
        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: 8,
            display: "flex",
            backgroundImage:
              "linear-gradient(90deg, #00F0FF, #FF2E97 55%, #A855F7)",
          }}
        />

        {/* Top: wordmark */}
        <div style={{ display: "flex", alignItems: "center", fontSize: 40, fontWeight: 800 }}>
          <span style={{ color: accent, marginRight: 14 }}>&gt;_</span>
          <span style={{ color: "#E5E7EB" }}>ken</span>
          <span style={{ color: "#00F0FF" }}>ai</span>
        </div>

        {/* Middle: eyebrow + title */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {opts.eyebrow ? (
            <div
              style={{
                display: "flex",
                fontSize: 24,
                letterSpacing: 4,
                textTransform: "uppercase",
                color: accent,
                marginBottom: 22,
              }}
            >
              {opts.eyebrow}
            </div>
          ) : null}
          <div
            style={{
              display: "flex",
              fontSize: opts.title.length > 48 ? 64 : 80,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1010,
              color: "#FFFFFF",
            }}
          >
            {opts.title}
          </div>
        </div>

        {/* Bottom: byline */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#7a7f93",
          }}
        >
          <span style={{ display: "flex" }}>kenai.in · The way of AI.</span>
          <span style={{ display: "flex", color: "#FF2E97" }}>by Shishir Babu</span>
        </div>
      </div>
    ),
    { ...OG_SIZE },
  );
}
