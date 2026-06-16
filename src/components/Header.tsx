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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-[var(--primary)] flex items-center justify-center">
                <span className="text-white font-black text-lg md:text-xl tracking-tighter">UT</span>
              </div>
              <div className="hidden sm:block">
                <div className={`font-black text-sm md:text-base tracking-tight leading-tight ${scrolled ? "text-[var(--primary)]" : "text-white"}`}>
                  UT Solutions
                </div>
                <div className={`text-[10px] font-bold uppercase tracking-widest ${scrolled ? "text-[var(--slate-400)]" : "text-white/60"}`}>
                  PLC
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium text-sm uppercase tracking-wide transition-colors relative group ${
                  scrolled
                    ? "text-[var(--slate-700)] hover:text-[var(--accent)]"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--accent)] transition-all group-hover:w-full" />
              </Link>
            ))}
            <div className="flex items-center gap-2 border-l border-white/20 pl-6">
              <button
                aria-label="Search"
                className={`p-2 rounded-full transition-colors ${
                  scrolled ? "text-[var(--slate-700)] hover:bg-[var(--slate-100)]" : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                <SearchIcon size={18} />
              </button>
            </div>
          </nav>

          {/* Mobile */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              aria-label="Search"
              className={`min-h-10 min-w-10 p-2 ${scrolled ? "text-[var(--slate-700)]" : "text-white"}`}
            >
              <SearchIcon size={20} />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`min-h-10 min-w-10 p-2 ${scrolled ? "text-[var(--slate-700)]" : "text-white"}`}
            >
              {mobileOpen ? <CloseIcon size={22} /> : <MenuIcon size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={() => setMobileOpen(false)} />
      )}
      <nav
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white z-40 shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 pt-20 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-[var(--slate-700)] hover:text-[var(--accent)] hover:bg-[var(--slate-50)] rounded-lg transition-colors font-medium text-sm uppercase tracking-wide"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-6 pt-6 border-t border-[var(--slate-200)]">
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center w-full px-5 py-3 bg-[var(--accent)] text-white font-bold rounded-lg text-sm uppercase tracking-wide"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
