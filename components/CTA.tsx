"use client";
import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

export default function CTA() {
  const [ref, visible] = useReveal();
  const [primaryHover, setPrimaryHover] = useState(false);

  return (
    <div style={{ margin: "0 4rem 6rem" }}>
      <div ref={ref as React.RefObject<HTMLDivElement>} className={`reveal ${visible ? "visible" : ""}`} style={{
        background: "var(--ink)", borderRadius: "8px",
        padding: "5rem 4rem", textAlign: "center",
        position: "relative", overflow: "hidden",
      }}>
        {/* ambient */}
        <div style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          background: "radial-gradient(ellipse 60% 100% at 50% 110%, rgba(184,148,63,0.13) 0%, transparent 70%)",
        }} />

        <span style={{
          fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase",
          color: "var(--gold)", fontWeight: 500,
          display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem",
          position: "relative",
        }}>
          <span style={{ display: "block", width: 20, height: 1, background: "var(--gold)" }} />
          Get Started
          <span style={{ display: "block", width: 20, height: 1, background: "var(--gold)" }} />
        </span>

        <h2 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 3.5vw, 3.2rem)", fontWeight: 700,
          color: "var(--paper)", lineHeight: 1.12,
          letterSpacing: "-0.02em", marginBottom: "1.1rem",
          position: "relative",
        }}>
          Ready to make legal work<br />effortless?
        </h2>

        <p style={{
          fontSize: "1rem", fontWeight: 300,
          color: "rgba(246,242,236,0.48)", marginBottom: "2.4rem",
          position: "relative",
        }}>
          Join 2,000+ companies already saving time with CompliOS.
        </p>

        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", alignItems: "center", position: "relative" }}>
          <a
            href="#"
            onMouseEnter={() => setPrimaryHover(true)}
            onMouseLeave={() => setPrimaryHover(false)}
            style={{
              background: primaryHover ? "var(--gold-light)" : "var(--gold)",
              color: "var(--ink)",
              padding: "0.9rem 2rem", borderRadius: "2px",
              fontSize: "0.88rem", fontWeight: 500,
              letterSpacing: "0.03em", textDecoration: "none",
              transform: primaryHover ? "translateY(-1px)" : "translateY(0)",
              transition: "all 0.22s",
              display: "inline-block",
            }}
          >
            Start your free trial
          </a>
          <a href="#" style={{
            color: "rgba(246,242,236,0.55)", fontSize: "0.88rem",
            fontWeight: 400, textDecoration: "none",
            display: "inline-flex", alignItems: "center", gap: "0.4rem",
          }}>
            Talk to sales →
          </a>
        </div>
      </div>
    </div>
  );
}
