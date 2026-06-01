const LOGOS = ["Vertex Legal", "Meridian Corp", "Atlas Financial", "ClearPath Inc.", "Forris Partners", "Nova Ventures", "Elara Tech", "Summit Group"];

export default function TrustBar() {
  const doubled = [...LOGOS, ...LOGOS];
  return (
    <div style={{
      borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)",
      padding: "1.7rem 4rem", background: "var(--cream)",
      display: "flex", alignItems: "center", gap: "3rem", overflow: "hidden",
    }}>
      <span style={{
        fontSize: "0.68rem", letterSpacing: "0.15em", textTransform: "uppercase",
        color: "var(--muted)", whiteSpace: "nowrap", flexShrink: 0, fontWeight: 500,
      }}>
        Trusted by
      </span>
      <div style={{ overflow: "hidden", flex: 1 }}>
        <div className="animate-logos" style={{ display: "flex", alignItems: "center", gap: "3.5rem" }}>
          {doubled.map((name, i) => (
            <span key={i} style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "0.95rem", fontWeight: 700,
              color: "rgba(12,14,13,0.28)", whiteSpace: "nowrap",
              letterSpacing: "-0.01em",
            }}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
