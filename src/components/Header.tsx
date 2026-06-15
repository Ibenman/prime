"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { MoonIcon, SunIcon, MenuIcon, CloseIcon } from "./ui/Icons";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#solutions", label: "Solutions" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
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
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.body.classList.toggle("dark", next);
    localStorage.setItem("prime-dark-mode", String(next));
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "py-3 bg-white/80 dark:bg-dark-card/80 backdrop-blur-xl shadow-lg shadow-black/5"
            : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-blue-500/25 group-hover:shadow-blue-500/40 transition-shadow">
              P
              <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold text-[var(--primary-dark)] dark:text-white tracking-tight">
              Prime<span className="text-[var(--accent)]">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-[var(--gray-600)] dark:text-[var(--gray-300)] hover:text-[var(--primary)] dark:hover:text-white transition-colors rounded-lg hover:bg-[var(--gray-50)] dark:hover:bg-white/5"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className="w-10 h-10 rounded-xl flex items-center justify-center text-[var(--gray-500)] hover:text-[var(--accent)] dark:text-[var(--gray-400)] dark:hover:text-[var(--accent)] hover:bg-[var(--gray-100)] dark:hover:bg-white/5 transition-all"
            >
              {dark ? <SunIcon size={18} /> : <MoonIcon size={18} />}
            </button>

            <Link
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dark)] text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5 transition-all"
            >
              Let's Talk
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-10 h-10 rounded-xl flex items-center justify-center text-[var(--gray-600)] dark:text-[var(--gray-300)] hover:bg-[var(--gray-100)] dark:hover:bg-white/5 transition-all"
            >
              {mobileOpen ? <CloseIcon size={20} /> : <MenuIcon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Nav Panel */}
      <nav
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-dark-card z-40 shadow-2xl transform transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-6 pt-20 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-4 py-3 text-[var(--gray-700)] dark:text-[var(--gray-200)] hover:text-[var(--primary)] dark:hover:text-white hover:bg-[var(--gray-50)] dark:hover:bg-white/5 rounded-xl transition-all font-medium"
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-6 pt-6 border-t border-[var(--gray-200)] dark:border-[var(--dark-border)]">
            <Link
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dark)] text-white font-semibold rounded-xl"
            >
              Let's Talk
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
