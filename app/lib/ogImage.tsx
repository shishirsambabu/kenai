import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

const ACCENTS: Record<string, string> = {
  cyan: "#00F0FF",
  magenta: "#FF2E97",
  violet: "#A855F7",
};

/**
 * Shared branded Open Graph card generator. Pure flexbox/inline styles
 * (the subset next/og supports). Used by every route's opengraph-image.
 */
export function renderOgImage({
  title,
  eyebrow,
  accent = "cyan",
  badge,
}: {
  title: string;
  eyebrow?: string;
  accent?: "cyan" | "magenta" | "violet";
  badge?: string;
}) {
  const accentHex = ACCENTS[accent] ?? ACCENTS.cyan;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0A12",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        {/* accent glow */}
        <div
          style={{
            position: "absolute",
            top: -180,
            right: -120,
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: accentHex,
            opacity: 0.18,
            filter: "blur(40px)",
            display: "flex",
          }}
        />
        {/* top border line */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 8, background: accentHex, display: "flex" }} />

        {/* header row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", fontSize: 40, fontWeight: 800, letterSpacing: -1 }}>
            <span style={{ color: accentHex }}>&gt;_</span>
            <span style={{ color: "#E5E7EB", marginLeft: 14 }}>ken</span>
            <span style={{ color: "#00F0FF" }}>ai</span>
          </div>
          {badge ? (
            <div
              style={{
                display: "flex",
                border: `2px solid ${accentHex}`,
                color: accentHex,
                fontSize: 22,
                fontWeight: 700,
                padding: "8px 18px",
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              {badge}
            </div>
          ) : (
            <div style={{ display: "flex" }} />
          )}
        </div>

        {/* main */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {eyebrow ? (
            <div
              style={{
                display: "flex",
                color: accentHex,
                fontSize: 26,
                fontWeight: 700,
                letterSpacing: 6,
                textTransform: "uppercase",
                marginBottom: 24,
              }}
            >
              {eyebrow}
            </div>
          ) : null}
          <div
            style={{
              display: "flex",
              color: "#FFFFFF",
              fontSize: title.length > 48 ? 64 : 80,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 1000,
            }}
          >
            {title}
          </div>
        </div>

        {/* footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", color: "#7a7f93", fontSize: 26, fontWeight: 600 }}>
            The way of AI. · kenai.in
          </div>
          <div style={{ display: "flex", color: "#7a7f93", fontSize: 24 }}>
            AI consulting · training · automation
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}
