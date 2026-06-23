import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

/** Branded ">_" favicon, generated as a real PNG. */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0A0A12",
          color: "#00F0FF",
          fontSize: 38,
          fontWeight: 800,
          fontFamily: "monospace",
          borderRadius: 12,
        }}
      >
        &gt;_
      </div>
    ),
    { ...size },
  );
}
