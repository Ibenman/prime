import { QuoteIcon } from "./ui/Icons";

const testimonials = [
  {
    quote: "UT Solutions delivered our Tier III data center on time and within budget. Their team's technical expertise and project management excellence made this complex deployment seamless.",
    name: "Tadesse Bekele",
    role: "CTO, National Bank of Ethiopia",
    avatar: "TB",
  },
  {
    quote: "The network modernization project transformed our operations across 50+ facilities. UT Solutions' team worked around the zero to ensure zero disruption to our services.",
    name: "Dr. Sarah Mohammed",
    role: "Director of IT, Ministry of Health",
    avatar: "SM",
  },
  {
    quote: "Their cybersecurity framework gave us the confidence to accelerate our digital banking initiatives. The SIEM implementation has been a game-changer for our security posture.",
    name: "James Ochieng",
    role: "CISO, United Insurance",
    avatar: "JO",
  },
];

export default function Testimonials() {
  return (
    <section className="relative z-10 overflow-hidden bg-[var(--primary)] py-14 text-white md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 reveal-up">
          <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-white/60">
            Hear from the organizations that depend on UT Solutions for their critical IT infrastructure.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="flex flex-col p-6 md:p-8 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm reveal-up"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <QuoteIcon size={32} className="text-white/10 mb-4" />
              <p className="text-sm text-white/80 leading-relaxed flex-grow">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-lg bg-[var(--accent)] flex items-center justify-center text-white text-xs font-black">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-white">{t.name}</div>
                  <div className="text-xs text-white/50">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
