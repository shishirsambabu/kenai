export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 12,
        letterSpacing: "0.32em",
        textTransform: "uppercase",
        color: "#00F0FF",
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        marginBottom: 12,
      }}
    >
      <span style={{ color: "#FF2E97", fontWeight: 700 }}>&gt;</span>
      {children}
    </div>
  );
}
