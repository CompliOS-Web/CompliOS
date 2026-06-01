"use client";
import { useReveal } from "../hooks/useReveal";

const METRICS = [
  { value: "87", suffix: "%", label: "Reduction in review time" },
  { value: "2",  suffix: "k+", label: "Companies onboarded" },
  { value: "99", suffix: ".9%", label: "Uptime SLA" },
  { value: "$6", suffix: "M+", label: "Legal costs saved" },
];

export default function Metrics() {
  const [ref, visible] = useReveal();
  return (
    <div style={{
      background: "var(--cream)",
      borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)",
    }}>
      <div ref={ref as React.RefObject<HTMLDivElement>} className={`reveal ${visible ? "visible" : ""}`} style={{
        display: "grid", gridTemplateColumns: "repeat(4, 1fr)",
      }}>
        {METRICS.map((m, i) => (
          <div key={i} style={{
            padding: "3rem 2rem", textAlign: "center",
            borderRight: i < METRICS.length - 1 ? "1px solid var(--rule)" : "none",
          }}>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "3.3rem", fontWeight: 700, lineHeight: 1,
              marginBottom: "0.5rem",
            }}>
              {m.value}<span style={{ color: "var(--gold)" }}>{m.suffix}</span>
            </div>
            <div style={{
              fontSize: "0.76rem", letterSpacing: "0.08em",
              textTransform: "uppercase", color: "var(--muted)", fontWeight: 500,
            }}>
              {m.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
