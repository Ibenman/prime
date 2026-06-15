"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#solutions", label: "Solutions" },
  { href: "#partners", label: "Partners" },
  { href: "#support", label: "Support" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("prime-dark-mode");
    if (saved === "true") {
      setDark(true);
      document.body.classList.add("dark");
    }

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.body.classList.toggle("dark", next);
    localStorage.setItem("prime-dark-mode", String(next));
  };

  return (
    <header
      style={{
        backgroundColor: "var(--white)",
        boxShadow: scrolled ? "var(--shadow-md)" : "none",
        position: "fixed",
        width: "100%",
        top: 0,
        zIndex: 1000,
        transition: "var(--transition)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1.2rem 5%",
          maxWidth: 1400,
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <Link href="#home" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 12 }}>
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "linear-gradient(135deg, var(--primary-blue), var(--dark-blue))",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--white)",
              fontWeight: 800,
              fontSize: 20,
            }}
          >
            P
          </div>
          <span
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "var(--dark-blue)",
              letterSpacing: "-0.02em",
            }}
          >
            Prime<span style={{ color: "var(--primary-orange)" }}>.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              alignItems: "center",
              gap: 8,
            }}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  style={{
                    textDecoration: "none",
                    color: "var(--dark-blue)",
                    fontWeight: 500,
                    fontSize: "1rem",
                    padding: "10px 15px",
                    borderRadius: 8,
                    transition: "var(--transition)",
                    position: "relative",
                  }}
                  className="nav-link"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                onClick={toggleDark}
                aria-label="Toggle dark mode"
                style={{
                  background: "var(--light-gray)",
                  color: "var(--dark-gray)",
                  border: "none",
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: 10,
                  transition: "var(--transition)",
                  boxShadow: "var(--shadow-sm)",
                  fontSize: 18,
                }}
                className="dark-toggle"
              >
                {dark ? "☀️" : "🌙"}
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          style={{
            display: "none",
            background: "none",
            border: "none",
            fontSize: 1.5,
            color: "var(--dark-blue)",
            cursor: "pointer",
          }}
        >
          {mobileOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Nav */}
      <nav
        className={`mobile-nav ${mobileOpen ? "open" : ""}`}
        style={{
          position: "fixed",
          top: 80,
          right: mobileOpen ? 0 : "-100%",
          flexDirection: "column",
          background: "var(--white)",
          width: "80%",
          maxWidth: 300,
          height: "calc(100vh - 80px)",
          padding: 30,
          boxShadow: "-5px 0 15px rgba(0,0,0,0.1)",
          transition: "right 0.4s ease",
          zIndex: 999,
          display: "flex",
        }}
      >
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  textDecoration: "none",
                  color: "var(--dark-blue)",
                  fontWeight: 500,
                  fontSize: 1.1,
                  padding: "12px 16px",
                  borderRadius: 8,
                  display: "block",
                  transition: "var(--transition)",
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li style={{ marginTop: 16 }}>
            <button
              onClick={toggleDark}
              style={{
                background: "var(--light-gray)",
                border: "none",
                padding: "12px 20px",
                borderRadius: 8,
                cursor: "pointer",
                fontWeight: 500,
                fontSize: 1,
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              {dark ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
