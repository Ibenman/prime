"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRightIcon } from "./ui/Icons";

const stats = [
  { value: "500+", label: "Enterprise Projects" },
  { value: "100+", label: "Team Members" },
  { value: "12+", label: "Years Experience" },
  { value: "99.9%", label: "Uptime SLA" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-[var(--primary)] text-white"
    >
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[var(--primary)]/95 to-[var(--primary)]/30" />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      {/* Bottom fade to white */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 pt-28 pb-16 md:pt-36 md:pb-20">
        <div className="grid max-w-7xl gap-12 xl:grid-cols-[minmax(0,1fr)_420px] xl:items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2.5 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm mb-8 backdrop-blur-sm transition-all duration-700 ease-out ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
            >
              <span className="flex h-1.5 w-9 overflow-hidden rounded-sm bg-[var(--primary)]" aria-hidden="true">
                <span className="h-full w-3 bg-[var(--accent)]" />
              </span>
              <span className="text-white/70 font-medium">Ethiopia's #1 Enterprise IT Company</span>
            </div>

            {/* Headline */}
            <h1
              className={`max-w-5xl text-[2.2rem] font-black leading-[1.05] sm:text-5xl md:text-6xl lg:text-[4.25rem] transition-all duration-700 ease-out ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "150ms" }}
            >
              <span className="mr-2 sm:mr-3 inline-block text-white">Delivering</span>
              <span className="mr-2 sm:mr-3 inline-block text-[var(--accent)]">Ultimate</span>
              <br className="sm:hidden" />
              <span className="mr-2 sm:mr-3 inline-block text-[var(--accent)]">Technologies</span>
            </h1>

            {/* Subheadline */}
            <p
              className={`mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg text-white/65 leading-relaxed transition-all duration-700 ease-out ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              Tier III data center design & build, Cisco enterprise networking, cybersecurity,
              cloud infrastructure, and 24/7 managed IT services. Serving 500+ enterprises across East Africa since 2013.
            </p>

            {/* CTAs */}
            <div
              className={`mt-8 sm:mt-10 flex flex-wrap gap-4 transition-all duration-700 ease-out ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: "450ms" }}
            >
              <Link
                href="#services"
                className="flex items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-7 py-3.5 text-sm font-extrabold text-white uppercase tracking-wide transition-all duration-300 hover:bg-[var(--accent-dark)] hover:shadow-lg hover:shadow-red-500/20 hover:-translate-y-0.5 w-full sm:w-auto"
              >
                Our Services
                <ChevronRightIcon size={16} />
              </Link>
              <Link
                href="#contact"
                className="flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-extrabold text-white uppercase tracking-wide transition-all duration-300 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm w-full sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right: Stats card */}
          <div
            className={`transition-all duration-1000 ease-out ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-black text-white mb-6">Infrastructure modernization path</h3>
              <div className="grid grid-cols-2 gap-5 sm:gap-6">
                {stats.map((stat, i) => (
                  <div
                    key={i}
                    className={`transition-all duration-500 ease-out ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
                    style={{ transitionDelay: `${700 + i * 100}ms` }}
                  >
                    <div className="text-2xl sm:text-3xl font-black text-[var(--accent)]">{stat.value}</div>
                    <div className="text-[11px] font-bold text-white/40 uppercase tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <Link
                  href="#about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white/80 hover:text-white transition-colors group"
                >
                  Learn more about us
                  <ChevronRightIcon size={14} className="group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
