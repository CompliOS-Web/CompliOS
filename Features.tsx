"use client";
import { useReveal } from "../hooks/useReveal";

const FEATURES = [
  { name: "Contract Analysis", desc: "Upload any contract and get a full risk breakdown, clause summary, and recommended edits in seconds." },
  { name: "Compliance Monitoring", desc: "Continuously tracks your obligations against changing regulations, alerting you before deadlines hit." },
  { name: "Document Drafting", desc: "Generate first drafts of NDAs, MSAs, employment agreements, and more from simple prompts." },
  { name: "Legal Research", desc: "Instant case law summaries, statute lookups, and precedent analysis — without the billable hours." },
  { name: "Deadline Tracker", desc: "Automatically extracts key dates from documents and integrates with your calendar and task tools." },
  { name: "Secure & Private", desc: "SOC 2 Type II certified. End-to-end encryption. Your documents never train our models." },
];

export default function Features() {
  const [ref, visible] = useReveal();
  const [ref2, visible2] = useReveal();

  return (
    <section id="features" style={{ padding: "6rem 4rem" }}>
      {/* Intro */}
      <div ref={ref as React.RefObject<HTMLDivElement>} className={`reveal ${visible ? "visible" : ""}`} style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "5rem", alignItems: "start", marginBottom: "4rem",
      }}>
        <div>
          <span style={{
            fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase",
            color: "var(--gold)", fontWeight: 500,
            display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem",
          }}>
            <span style={{ display: "block", width: 20, height: 1, background: "var(--gold)" }} />
            Features
          </span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.9rem, 3vw, 2.8rem)", fontWeight: 700,
            lineHeight: 1.12, letterSpacing: "-0.02em",
          }}>
            Everything legal.<br />Nothing tedious.
          </h2>
        </div>
        <p style={{
          fontSize: "1rem", fontWeight: 300, lineHeight: 1.72,
          color: "var(--muted)", maxWidth: 480, paddingTop: "0.5rem",
        }}>
          From contract review to compliance monitoring, CompliOS handles the heavy lifting — powered by AI trained on millions of legal documents and precedents.
        </p>
      </div>

      {/* Grid */}
      <div ref={ref2 as React.RefObject<HTMLDivElement>} className={`reveal ${visible2 ? "visible" : ""}`} style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1.5px", background: "var(--rule)",
        border: "1px solid var(--rule)",
      }}>
        {FEATURES.map((f) => (
          <FeatureCard key={f.name} {...f} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ name, desc }: { name: string; desc: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "var(--cream)" : "var(--paper)",
        padding: "2.4rem", cursor: "default",
        transition: "background 0.28s",
      }}
    >
      <div style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.06rem", fontWeight: 700, marginBottom: "0.5rem",
      }}>
        {name}
      </div>
      <p style={{ fontSize: "0.87rem", lineHeight: 1.65, color: "var(--muted)", fontWeight: 300 }}>
        {desc}
      </p>
    </div>
  );
}

// inline useState import fix
import { useState } from "react";
