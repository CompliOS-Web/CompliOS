"use client";
const FOOTER_LINKS: Record<string, string[]> = {
  Product:  ["Features", "Changelog", "Roadmap", "Status"],
  Company:  ["About", "Blog", "Careers", "Press"],
  Legal:    ["Privacy Policy", "Terms of Service", "Security", "Cookie Policy"],
};

export default function Footer() {
  return (
    <>
      <footer style={{
        borderTop: "1px solid var(--rule)",
        padding: "3rem 4rem",
        display: "grid",
        gridTemplateColumns: "2fr repeat(3, 1fr)",
        gap: "3rem",
      }}>
        <div>
          <a href="#" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "1.4rem", fontWeight: 700,
            letterSpacing: "-0.02em", textDecoration: "none",
            color: "var(--ink)", display: "block", marginBottom: "0.8rem",
          }}>
            Compli<span style={{ color: "var(--gold)" }}>OS</span>
          </a>
          <p style={{
            fontSize: "0.83rem", fontWeight: 300, lineHeight: 1.6,
            color: "var(--muted)", maxWidth: 220,
          }}>
            AI-powered legal software that helps companies navigate complexity with confidence.
          </p>
        </div>

        {Object.entries(FOOTER_LINKS).map(([col, links]) => (
          <div key={col}>
            <div style={{
              fontSize: "0.68rem", letterSpacing: "0.14em",
              textTransform: "uppercase", fontWeight: 500,
              color: "var(--ink)", marginBottom: "1rem",
            }}>{col}</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {links.map((l) => (
                <li key={l}>
                  <a href="#" style={{
                    fontSize: "0.85rem", fontWeight: 300,
                    color: "var(--muted)", textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
                  onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
                  >{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </footer>

      <div style={{
        borderTop: "1px solid var(--rule)",
        padding: "1.4rem 4rem",
        display: "flex", justifyContent: "space-between", alignItems: "center",
      }}>
        <p style={{ fontSize: "0.76rem", color: "var(--muted)", fontWeight: 300 }}>
          © 2026 CompliOS. All rights reserved.
        </p>
        <p style={{ fontSize: "0.76rem", color: "var(--muted)", fontWeight: 300 }}>
          Made for teams who move fast and stay compliant.
        </p>
      </div>
    </>
  );
}
