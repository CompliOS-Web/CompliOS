"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "1.3rem 4rem",
        background: scrolled ? "rgba(246,242,236,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
        transition: "all 0.35s ease",
      }}
    >
      <a href="#" style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.5rem", fontWeight: 700,
        letterSpacing: "-0.02em", textDecoration: "none",
        color: "var(--ink)",
      }}>
        Compli<span style={{ color: "var(--gold)" }}>OS</span>
      </a>

      <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none", alignItems: "center" }}>
        {["Features", "How it works", "Use Cases"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
              style={{
                fontSize: "0.78rem", fontWeight: 500,
                letterSpacing: "0.09em", textTransform: "uppercase",
                color: "var(--muted)", textDecoration: "none",
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--ink)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--muted)")}
            >
              {item}
            </a>
          </li>
        ))}
        <li>
          <a
            href="#"
            style={{
              background: "var(--ink)", color: "var(--paper)",
              padding: "0.55rem 1.4rem", borderRadius: "2px",
              fontSize: "0.78rem", fontWeight: 500,
              letterSpacing: "0.04em", textDecoration: "none",
              transition: "background 0.22s, color 0.22s",
              display: "inline-block",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "var(--gold)";
              (e.currentTarget as HTMLElement).style.color = "var(--ink)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "var(--ink)";
              (e.currentTarget as HTMLElement).style.color = "var(--paper)";
            }}
          >
            Book a Demo
          </a>
        </li>
      </ul>
    </nav>
  );
}
