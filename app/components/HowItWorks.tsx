"use client";
import { useReveal } from "../hooks/useReveal";

const STEPS = [
  { num: "01", title: "Upload your document", desc: "Drag and drop any contract, policy, or legal file. We support PDF, DOCX, and plain text." },
  { num: "02", title: "AI analyses in seconds", desc: "Our model reads every clause, cross-referencing against regulatory frameworks and your playbook." },
  { num: "03", title: "Review flagged insights", desc: "Get a prioritised list of risks, obligations, and recommended actions — in plain language, not legalese." },
  { num: "04", title: "Act & collaborate", desc: "Edit in-platform, assign tasks to your team, or export to your preferred tools with one click." },
];

export default function HowItWorks() {
  const [ref, visible] = useReveal();
  const [ref2, visible2] = useReveal();

  return (
    <section id="how-it-works" style={{
      padding: "6rem 4rem",
      background: "var(--ink)", color: "var(--paper)",
    }}>
      <div ref={ref as React.RefObject<HTMLDivElement>} className={`reveal ${visible ? "visible" : ""}`}>
        <span style={{
          fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase",
          color: "var(--gold)", fontWeight: 500,
          display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem",
        }}>
          <span style={{ display: "block", width: 20, height: 1, background: "var(--gold)" }} />
          How it works
        </span>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.9rem, 3vw, 2.8rem)", fontWeight: 700,
          lineHeight: 1.12, letterSpacing: "-0.02em",
          color: "var(--paper)", marginBottom: "0.8rem",
        }}>
          From upload to insight<br />in under a minute.
        </h2>
        <p style={{
          fontSize: "1rem", fontWeight: 300, lineHeight: 1.7,
          color: "rgba(246,242,236,0.52)", maxWidth: 480,
        }}>
          CompliOS integrates into your existing workflow — no legal degree required.
        </p>
      </div>

      <div ref={ref2 as React.RefObject<HTMLDivElement>} className={`reveal ${visible2 ? "visible" : ""}`} style={{
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: "5rem", alignItems: "center", marginTop: "3rem",
      }}>
        {/* Steps */}
        <div>
          {STEPS.map((s, i) => <Step key={i} {...s} />)}
        </div>

        {/* Terminal */}
        <Terminal />
      </div>
    </section>
  );
}

function Step({ num, title, desc }: { num: string; title: string; desc: string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "grid", gridTemplateColumns: "52px 1fr", gap: "1.2rem",
        padding: "1.8rem 0",
        borderBottom: "1px solid rgba(246,242,236,0.07)",
        cursor: "default",
      }}
    >
      <span style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "2rem", fontWeight: 700, lineHeight: 1,
        color: hovered ? "var(--gold)" : "rgba(184,148,63,0.28)",
        paddingTop: "0.1rem", transition: "color 0.28s",
      }}>{num}</span>
      <div>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1rem", fontWeight: 700,
          color: "var(--paper)", marginBottom: "0.4rem",
        }}>{title}</div>
        <p style={{ fontSize: "0.87rem", lineHeight: 1.65, color: "rgba(246,242,236,0.48)", fontWeight: 300 }}>{desc}</p>
      </div>
    </div>
  );
}

function Terminal() {
  return (
    <div style={{
      background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)",
      borderRadius: "8px", overflow: "hidden",
    }}>
      <div style={{
        background: "rgba(255,255,255,0.06)", padding: "0.7rem 1rem",
        display: "flex", alignItems: "center", gap: "0.5rem",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}>
        {["#ff5f57","#ffbd2e","#28ca41"].map((c, i) => (
          <span key={i} style={{ width: 9, height: 9, borderRadius: "50%", background: c, display: "inline-block" }} />
        ))}
        <span style={{ marginLeft: "auto", fontSize: "0.7rem", color: "rgba(246,242,236,0.28)", fontFamily: "monospace" }}>
          complios-analysis
        </span>
      </div>
      <div style={{
        padding: "1.6rem", fontFamily: "'Courier New', monospace",
        fontSize: "0.8rem", lineHeight: 2.1,
      }}>
        {[
          { type: "prompt", text: "Analysing: vendor_agreement_v2.pdf" },
          { type: "out", text: "Loading document... ████████████ 100%" },
          { type: "out", text: "Running compliance checks..." },
          { type: "prompt", text: "Checking GDPR, CCPA, SOX clauses" },
          { type: "out", text: "Cross-referencing 847 precedents..." },
          { type: "blank" },
          { type: "warn", text: "⚠  Liability cap ambiguous — Clause 4.2" },
          { type: "warn", text: "⚠  Auto-renewal not disclosed — Clause 9" },
          { type: "ok",   text: "✓  IP ownership clearly defined" },
          { type: "ok",   text: "✓  Governing law compliant — California" },
          { type: "blank" },
          { type: "success", text: "✔  Analysis complete. 2 actions required." },
        ].map((line, i) => {
          if (line.type === "blank") return <div key={i}>&nbsp;</div>;
          const colors: Record<string, string> = {
            prompt: "var(--gold)",
            out: "rgba(246,242,236,0.42)",
            warn: "rgba(246,242,236,0.42)",
            ok: "rgba(246,242,236,0.42)",
            success: "#4caf72",
          };
          return (
            <div key={i} style={{ color: colors[line.type], paddingLeft: line.type === "out" || line.type === "warn" || line.type === "ok" ? "1rem" : 0 }}>
              {(line.type === "prompt") && <span style={{ color: "var(--gold)", marginRight: "0.5rem" }}>→</span>}
              {line.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}

import { useState } from "react";
