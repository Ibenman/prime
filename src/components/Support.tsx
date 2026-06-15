import { RocketIcon, HeadsetIcon, GraduationIcon, CheckIcon, SparkleIcon } from "./ui/Icons";

const supportItems = [
  {
    icon: <RocketIcon size={28} />,
    title: "Implementation Support",
    description: "End-to-end project delivery with dedicated teams and proven methodologies.",
    bullets: [
      "Dedicated project manager for every engagement",
      "Agile delivery with 2-week sprint cycles",
      "Staging environments for UAT before go-live",
      "Rollback-ready deployment pipelines",
      "Knowledge transfer sessions with your team",
    ],
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: <HeadsetIcon size={28} />,
    title: "Managed Services",
    description: "24/7 operational support to keep your systems running at peak performance.",
    bullets: [
      "24/7 infrastructure monitoring & alerting",
      "Proactive performance optimization",
      "Security patching & vulnerability management",
      "Monthly health reports & recommendations",
      "SLA-backed 99.9% uptime guarantee",
    ],
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: <GraduationIcon size={28} />,
    title: "Training & Enablement",
    description: "Upskill your teams with custom workshops and certification programs.",
    bullets: [
      "Custom workshops for your engineering team",
      "Architecture review & best practices sessions",
      "Documentation & runbook development",
      "On-demand office hours with our experts",
      "Certification prep for cloud platforms",
    ],
    gradient: "from-orange-500 to-amber-400",
  },
];

export default function Support() {
  return (
    <section id="support" className="py-24 lg:py-32 bg-[var(--white)] dark:bg-[var(--dark-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20 reveal-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary-light)] dark:bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium mb-4">
            <SparkleIcon size={14} />
            Support & Services
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--gray-900)] dark:text-white mb-6 tracking-tight">
            We Don't Just Build —{" "}
            <span className="text-[var(--primary)]">We Stay</span>
          </h2>
          <p className="text-lg text-[var(--gray-500)] dark:text-[var(--gray-400)] leading-relaxed">
            Our relationship doesn't end at delivery. We provide comprehensive
            support to ensure long-term success.
          </p>
        </div>

        {/* Support cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {supportItems.map((item, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-3xl bg-[var(--gray-50)] dark:bg-[var(--dark-card)] border border-[var(--gray-200)] dark:border-[var(--dark-border)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 reveal-up"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-[var(--gray-900)] dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--gray-500)] dark:text-[var(--gray-400)] mb-6">
                {item.description}
              </p>

              {/* Feature list */}
              <ul className="space-y-3">
                {item.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-[var(--gray-600)] dark:text-[var(--gray-300)]">
                    <CheckIcon size={16} className="text-[var(--accent)] mt-0.5 flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
