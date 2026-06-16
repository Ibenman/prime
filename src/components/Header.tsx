"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { SearchIcon, MenuIcon, CloseIcon } from "./ui/Icons";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
  { href: "#projects", label: "Projects" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/[0.03] py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-11 md:h-11 rounded-lg bg-[var(--primary)] flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <span className="text-white font-black text-base md:text-lg tracking-tighter">UT</span>
              </div>
              <div className="hidden sm:block">
                <div className={`font-black text-sm md:text-base tracking-tight leading-tight transition-colors duration-300 ${scrolled ? "text-[var(--primary)]" : "text-white"}`}>
                  UT Solutions
                </div>
                <div className={`text-[10px] font-bold uppercase tracking-[0.2em] transition-colors duration-300 ${scrolled ? "text-[var(--slate-400)]" : "text-white/50"}`}>
                  PLC
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-[13px] font-semibold uppercase tracking-wider rounded-lg transition-all duration-300 ${
                  scrolled
                    ? "text-[var(--slate-600)] hover:text-[var(--accent)] hover:bg-[var(--slate-50)]"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[var(--accent)] transition-all duration-300 group-hover:w-3/4 rounded-full" />
              </Link>
            ))}
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-[var(--slate-200)]">
              <button
                aria-label="Search"
                className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  scrolled
                    ? "text-[var(--slate-500)] hover:text-[var(--slate-700)] hover:bg-[var(--slate-100)]"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <SearchIcon size={16} />
              </button>
            </div>
          </nav>

          {/* Mobile buttons */}
          <div className="flex items-center gap-1 md:hidden">
            <button
              aria-label="Search"
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${scrolled ? "text-[var(--slate-600)]" : "text-white"}`}
            >
              <SearchIcon size={18} />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-colors ${scrolled ? "text-[var(--slate-600)]" : "text-white"}`}
            >
              {mobileOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile nav panel */}
      <nav
        className={`fixed top-0 right-0 h-full w-[300px] max-w-[85vw] bg-white z-40 shadow-2xl transform transition-transform duration-500 ease-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-24 pb-8 px-6">
          <div className="flex flex-col gap-1 flex-grow">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-4 py-3.5 text-[var(--slate-700)] hover:text-[var(--accent)] hover:bg-[var(--slate-50)] rounded-xl transition-all duration-200 font-semibold text-sm uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="pt-6 mt-6 border-t border-[var(--slate-200)]">
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full px-5 py-3.5 bg-[var(--accent)] text-white font-extrabold rounded-xl text-sm uppercase tracking-wide hover:bg-[var(--accent-dark)] transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
