"use client";
import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

const CASES = [
  { title: "In-house Legal Teams", desc: "Reduce review time and eliminate bottlenecks without expanding headcount." },
  { title: "Startups & Scale-ups", desc: "Get legal confidence without expensive retainers. Move fast and stay protected." },
  { title: "Finance & Fintech", desc: "Stay on top of complex, ever-shifting financial regulations across jurisdictions." },
  { title: "Healthcare & Life Sciences", desc: "Navigate HIPAA, FDA, and clinical trial compliance with precision and confidence." },
];

export default function UseCases() {
  const [ref, visible] = useReveal();
  const [ref2, visible2] = useReveal();

  return (
    <section id="use-cases" style={{ padding: "6rem 4rem" }}>
      <div ref={ref as React.RefObject<HTMLDivElement>} className={`reveal ${visible ? "visible" : ""}`} style={{ textAlign: "center" }}>
        <span style={{
          fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase",
          color: "var(--gold)", fontWeight: 500,
          display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem",
        }}>
          <span style={{ display: "block", width: 20, height: 1, background: "var(--gold)" }} />
          Use Cases
          <span style={{ display: "block", width: 20, height: 1, background: "var(--gold)" }} />
        </span>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.9rem, 3vw, 2.8rem)", fontWeight: 700,
          lineHeight: 1.12, letterSpacing: "-0.02em",
        }}>
          Built for every legal need.
        </h2>
      </div>

      <div ref={ref2 as React.RefObject<HTMLDivElement>} className={`reveal ${visible2 ? "visible" : ""}`} style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
        gap: "1.5rem", marginTop: "3rem",
      }}>
        {CASES.map((c) => <CaseCard key={c.title} {...c} />)}
      </div>
    </section>
  );
}

function CaseCard({ title, desc }: { title: string; desc: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? "var(--gold)" : "var(--rule)"}`,
        borderRadius: "4px", padding: "1.8rem", cursor: "default",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hovered ? "0 12px 40px rgba(184,148,63,0.1)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem",
      }}>{title}</div>
      <p style={{ fontSize: "0.83rem", lineHeight: 1.62, color: "var(--muted)", fontWeight: 300 }}>{desc}</p>
    </div>
  );
}
