import Link from "next/link";
import { ArrowRightIcon } from "./ui/Icons";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[var(--primary)] py-14 text-white md:py-20">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 text-center">
        <h2 className="max-w-4xl mx-auto text-3xl font-black leading-tight tracking-tight md:text-5xl reveal-up">
          Ready to modernize the infrastructure your teams depend on?
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-white/60 text-lg">
          Let's discuss how UT Solutions can help you build the resilient, scalable
          IT foundation your organization needs to thrive.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4 reveal-up" style={{ transitionDelay: "200ms" }}>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--accent)] px-8 py-3.5 text-sm font-extrabold text-white uppercase tracking-wide transition-colors hover:bg-[var(--accent-dark)]"
          >
            Start a Conversation
            <ArrowRightIcon size={16} />
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-extrabold text-white uppercase tracking-wide transition-colors hover:bg-white/10 backdrop-blur-sm"
          >
            Explore Services
          </Link>
        </div>
      </div>
    </section>
  );
}
