"use client";
import { useReveal } from "../hooks/useReveal";

const STATS = [
  { val: "94", suf: "%", label: "of users report significant time savings within the first week." },
  { val: "40", suf: "hrs", label: "saved per month on average by in-house legal teams." },
  { val: "4.9", suf: "/5", label: "average customer satisfaction score across 2,000+ reviews." },
];

export default function Testimonial() {
  const [ref, visible] = useReveal();
  return (
    <div style={{ padding: "6rem 4rem" }}>
      <div ref={ref as React.RefObject<HTMLDivElement>} className={`reveal ${visible ? "visible" : ""}`} style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        border: "1px solid var(--rule)", borderRadius: "4px", overflow: "hidden",
      }}>
        {/* Left: quote */}
        <div style={{ background: "var(--ink)", color: "var(--paper)", padding: "4rem" }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: "5rem",
            lineHeight: 0.8, color: "var(--gold)", opacity: 0.65, marginBottom: "1.5rem",
          }}>"</div>
          <p style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem",
            lineHeight: 1.68, fontStyle: "italic",
            color: "rgba(246,242,236,0.88)", marginBottom: "1.8rem",
          }}>
            CompliOS cut our contract review cycle from two weeks to under two hours. Our legal team now focuses on strategy, not paperwork. It's the most impactful tool we've adopted in years.
          </p>
          <div>
            <div style={{ fontSize: "0.85rem", fontWeight: 500, color: "var(--paper)" }}>Sarah Mwangi</div>
            <div style={{ fontSize: "0.82rem", fontWeight: 300, color: "rgba(246,242,236,0.44)" }}>General Counsel, Meridian Corp</div>
          </div>
        </div>

        {/* Right: mini stats */}
        <div style={{
          background: "var(--cream)", padding: "4rem",
          display: "flex", flexDirection: "column", justifyContent: "center", gap: "2rem",
        }}>
          {STATS.map((s, i) => (
            <div key={i}>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "2.3rem", fontWeight: 700, lineHeight: 1,
              }}>
                {s.val}<span style={{ color: "var(--gold)" }}>{s.suf}</span>
              </div>
              <div style={{ fontSize: "0.83rem", color: "var(--muted)", fontWeight: 300, marginTop: "0.3rem" }}>
                {s.label}
              </div>
              {i < STATS.length - 1 && (
                <div style={{ height: 1, background: "var(--rule)", marginTop: "2rem" }} />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
