"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRightIcon, ChevronRightIcon } from "./ui/Icons";

const stats = [
  { value: "500+", label: "Enterprise Projects" },
  { value: "100+", label: "Team Members" },
  { value: "12+", label: "Years Experience" },
  { value: "99.9%", label: "Uptime SLA" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-[88svh] w-full items-center overflow-hidden bg-[var(--primary)] text-white"
    >
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary)] via-[var(--primary)]/95 to-[var(--primary)]/35" />

      {/* Decorative accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container relative z-10 mx-auto px-4 pb-10 pt-24 sm:px-6 md:pb-14 md:pt-32">
        <div className="grid max-w-7xl gap-8 xl:grid-cols-[minmax(0,1fr)_470px] xl:items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-400 hover:text-white hover:border-white/20 transition-all backdrop-blur-sm mb-8 ${
                mounted ? "opacity-100" : "opacity-0"
              }`}
              style={{ transition: "opacity 0.6s ease" }}
            >
              <span className="flex h-1.5 w-9 overflow-hidden rounded-sm bg-[var(--primary)]" aria-hidden="true">
                <span className="h-full w-3 bg-[var(--accent)]" />
              </span>
              <span>Ethiopia's #1 Enterprise IT Company</span>
            </div>

            {/* Headline */}
            <h1
              className={`max-w-5xl text-[2.3rem] font-black leading-[1.03] sm:text-5xl md:text-6xl lg:text-7xl transition-all duration-700 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="mr-3 inline-block text-white">Delivering</span>
              <span className="mr-3 inline-block text-[var(--accent)]">Ultimate</span>
              <span className="mr-3 inline-block text-[var(--accent)]">Technologies</span>
            </h1>

            {/* Subheadline */}
            <p
              className={`mt-6 max-w-2xl text-lg text-white/70 leading-relaxed transition-all duration-700 delay-200 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Tier III data center design & build, Cisco enterprise networking, cybersecurity,
              cloud infrastructure, and 24/7 managed IT services. Serving 500+ enterprises across East Africa since 2013.
            </p>

            {/* CTAs */}
            <div
              className={`mt-10 flex flex-wrap gap-4 transition-all duration-700 delay-300 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <Link
                href="#services"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent)] px-6 py-3 text-sm font-extrabold text-white transition-colors hover:bg-[var(--accent-dark)] sm:w-auto uppercase tracking-wide"
              >
                Our Services
                <ChevronRightIcon size={16} />
              </Link>
              <Link
                href="#contact"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/5 px-6 py-3 text-sm font-extrabold text-white transition-colors hover:bg-white/10 sm:w-auto uppercase tracking-wide backdrop-blur-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right: Stats card */}
          <div
            className={`transition-all duration-700 delay-500 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
              <h3 className="text-xl font-black text-white mb-6">Infrastructure modernization path</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-black text-[var(--accent)]">{stat.value}</div>
                    <div className="text-xs font-bold text-white/50 uppercase tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-6 border-t border-white/10">
                <Link
                  href="#about"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[var(--accent)] transition-colors group"
                >
                  Learn more about us
                  <ArrowRightIcon size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
