import { QuoteIcon, SparkleIcon } from "./ui/Icons";

const testimonials = [
  {
    quote:
      "Prime transformed our legacy infrastructure into a cloud-native platform that reduced our operational costs by 40% while improving system reliability to 99.99% uptime.",
    name: "Sarah Chen",
    role: "CTO, Meridian Financial",
    avatar: "SC",
    color: "from-blue-500 to-cyan-400",
  },
  {
    quote:
      "Their AI team built us a predictive analytics platform that increased our forecast accuracy by 35%. The level of technical expertise and business understanding was exceptional.",
    name: "Marcus Rodriguez",
    role: "VP Engineering, Apex Retail",
    avatar: "MR",
    color: "from-violet-500 to-purple-400",
  },
  {
    quote:
      "Working with Prime felt like having an elite extension of our own team. They delivered our digital experience platform 2 weeks ahead of schedule with zero critical bugs.",
    name: "Emily Watson",
    role: "Director of Digital, NovaHealth",
    avatar: "EW",
    color: "from-orange-500 to-amber-400",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[var(--gray-50)] dark:bg-[var(--gray-900)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20 reveal-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary-light)] dark:bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium mb-4">
            <SparkleIcon size={14} />
            Testimonials
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--gray-900)] dark:text-white mb-6 tracking-tight">
            Trusted by{" "}
            <span className="text-[var(--primary)]">Industry Leaders</span>
          </h2>
          <p className="text-lg text-[var(--gray-500)] dark:text-[var(--gray-400)] leading-relaxed">
            Don't just take our word for it. Here's what our clients say about
            working with Prime.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-3xl bg-white dark:bg-[var(--dark-card)] border border-[var(--gray-200)] dark:border-[var(--dark-border)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 reveal-up"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Quote icon */}
              <QuoteIcon size={36} className="text-[var(--gray-200)] dark:text-[var(--dark-border)] mb-4" />

              {/* Quote text */}
              <p className="text-[var(--gray-600)] dark:text-[var(--gray-300)] leading-relaxed mb-8 text-sm">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-[var(--gray-900)] dark:text-white text-sm">
                    {t.name}
                  </div>
                  <div className="text-xs text-[var(--gray-500)] dark:text-[var(--gray-400)]">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
