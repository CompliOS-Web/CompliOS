"use client";
import { useEffect, useRef, useState } from "react";

const AI_TEXT = "3 risk clauses identified. Clause 4.2 contains an ambiguous liability cap — recommend revision before signing.";

export default function Hero() {
  const [typed, setTyped] = useState("");
  const idxRef = useRef(0);

  useEffect(() => {
    const delay = setTimeout(() => {
      const interval = setInterval(() => {
        if (idxRef.current < AI_TEXT.length) {
          setTyped(AI_TEXT.slice(0, idxRef.current + 1));
          idxRef.current++;
        } else {
          clearInterval(interval);
        }
      }, 26);
      return () => clearInterval(interval);
    }, 1200);
    return () => clearTimeout(delay);
  }, []);

  return (
    <section style={{
      minHeight: "100vh",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      alignItems: "center",
      padding: "8rem 4rem 4rem",
      gap: "4rem",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Ambient glow */}
      <div style={{
        position: "absolute", inset: 0, pointerEvents: "none",
        background: "radial-gradient(ellipse 55% 70% at 75% 50%, rgba(184,148,63,0.08) 0%, transparent 70%)",
      }} />

      {/* Left: copy */}
      <div>
        <span className="animate-fadeUp delay-1" style={{
          display: "inline-flex", alignItems: "center", gap: "0.5rem",
          fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.2em",
          textTransform: "uppercase", color: "var(--gold)", marginBottom: "1.4rem",
        }}>
          <span style={{ display: "block", width: 28, height: 1, background: "var(--gold)" }} />
          AI-Powered Legal Software
        </span>

        <h1 className="animate-fadeUp delay-2" style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(3rem, 5vw, 4.6rem)",
          fontWeight: 700, lineHeight: 1.08,
          letterSpacing: "-0.02em", marginBottom: "1.5rem",
        }}>
          Legal compliance,{" "}
          <em style={{ color: "var(--gold)", fontStyle: "italic" }}>simplified</em>
          <br />by AI.
        </h1>

        <p className="animate-fadeUp delay-3" style={{
          fontSize: "1.05rem", fontWeight: 300, lineHeight: 1.72,
          color: "var(--muted)", maxWidth: 460, marginBottom: "2.4rem",
        }}>
          CompliOS turns your most tedious legal workflows into automated, intelligent processes — so your team can focus on work that actually matters.
        </p>

        <div className="animate-fadeUp delay-4" style={{ display: "flex", gap: "1.1rem", alignItems: "center" }}>
          <a href="#"
            style={{
              background: "var(--ink)", color: "var(--paper)",
              padding: "0.9rem 2rem", borderRadius: "2px",
              fontSize: "0.88rem", fontWeight: 500,
              letterSpacing: "0.03em", textDecoration: "none",
              transition: "background 0.22s, color 0.22s, transform 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "var(--gold)";
              (e.currentTarget as HTMLElement).style.color = "var(--ink)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "var(--ink)";
              (e.currentTarget as HTMLElement).style.color = "var(--paper)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Start Free Trial
          </a>
          <a href="#how-it-works"
            style={{
              color: "var(--ink)", fontSize: "0.88rem", fontWeight: 500,
              textDecoration: "none", display: "inline-flex",
              alignItems: "center", gap: "0.4rem",
              transition: "gap 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.gap = "0.75rem")}
            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.gap = "0.4rem")}
          >
            See how it works →
          </a>
        </div>
      </div>

      {/* Right: doc card mockup */}
      <div className="animate-fadeIn" style={{ position: "relative", animationDelay: "0.4s", opacity: 0 }}>
        {/* Floating tags */}
        <div className="animate-float" style={{
          position: "absolute", top: "-1.4rem", right: "-1.2rem", zIndex: 10,
          background: "var(--white)", border: "1px solid var(--rule)",
          borderRadius: "4px", padding: "0.55rem 0.9rem",
          fontSize: "0.74rem", fontWeight: 500,
          boxShadow: "0 6px 24px rgba(12,14,13,0.07)",
          display: "flex", alignItems: "center", gap: "0.45rem",
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#4caf72", display: "inline-block" }} />
          Compliant
        </div>
        <div className="animate-float-r" style={{
          position: "absolute", bottom: "-0.8rem", left: "-1.2rem", zIndex: 10,
          background: "var(--white)", border: "1px solid var(--rule)",
          borderRadius: "4px", padding: "0.55rem 0.9rem",
          fontSize: "0.74rem", fontWeight: 500,
          boxShadow: "0 6px 24px rgba(12,14,13,0.07)",
          display: "flex", alignItems: "center", gap: "0.45rem",
        }}>
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--gold)", display: "inline-block" }} />
          3 risks found
        </div>

        <div style={{
          background: "var(--white)", border: "1px solid var(--rule)",
          borderRadius: "8px", padding: "1.8rem",
          boxShadow: "0 16px 64px rgba(12,14,13,0.09)",
          position: "relative", overflow: "hidden",
        }}>
          {/* Gold top bar */}
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 3,
            background: "linear-gradient(90deg, var(--gold), var(--gold-light))",
          }} />

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "1.3rem" }}>
            <span style={{
              fontSize: "0.66rem", fontWeight: 500, letterSpacing: "0.1em",
              textTransform: "uppercase", background: "rgba(184,148,63,0.11)",
              color: "var(--gold)", padding: "0.22rem 0.55rem", borderRadius: "2px",
            }}>NDA Review</span>
            <span style={{ fontSize: "0.72rem", color: "var(--muted)" }}>2 min ago</span>
          </div>

          <div style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem",
            fontWeight: 700, color: "var(--ink)", marginBottom: "1rem",
          }}>
            Mutual Non-Disclosure Agreement
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.48rem", marginBottom: "1.4rem" }}>
            {[undefined, "85%", "70%", "90%"].map((w, i) => (
              <div key={i} className="animate-shimmer" style={{
                height: 8, borderRadius: 2,
                width: w ?? "100%",
                animationDelay: `${i * 0.15}s`,
              }} />
            ))}
          </div>

          <div style={{
            background: "var(--ink)", color: "var(--paper)",
            borderRadius: "4px", padding: "1rem 1.15rem",
            fontSize: "0.82rem", lineHeight: 1.62,
          }}>
            <span style={{
              fontSize: "0.63rem", letterSpacing: "0.13em",
              textTransform: "uppercase", color: "var(--gold)",
              display: "block", marginBottom: "0.3rem", fontWeight: 500,
            }}>✦ CompliOS AI</span>
            {typed}
            <span className="animate-blink" style={{
              display: "inline-block", width: 2, height: "0.88em",
              background: "var(--gold)", verticalAlign: "text-bottom", marginLeft: 1,
            }} />
          </div>
        </div>
      </div>
    </section>
  );
}
