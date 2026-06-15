import { SparkleIcon } from "./ui/Icons";

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    description:
      "We deep-dive into your business, market, and technology landscape. Through workshops and stakeholder interviews, we define the roadmap that aligns technology with your business objectives.",
    color: "from-blue-500 to-cyan-400",
  },
  {
    num: "02",
    title: "Architecture & Design",
    description:
      "Our architects design scalable, secure systems using modern patterns. We create detailed technical specifications, UX wireframes, and a phased delivery plan.",
    color: "from-violet-500 to-purple-400",
  },
  {
    num: "03",
    title: "Agile Development",
    description:
      "Cross-functional squads deliver working software in 2-week sprints. Continuous integration, automated testing, and regular demos ensure transparency and quality.",
    color: "from-orange-500 to-amber-400",
  },
  {
    num: "04",
    title: "Launch & Optimize",
    description:
      "We manage production deployment with zero-downtime strategies, then continuously monitor, measure, and optimize based on real-world performance data.",
    color: "from-emerald-500 to-teal-400",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32 bg-[var(--white)] dark:bg-[var(--dark-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20 reveal-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary-light)] dark:bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium mb-4">
            <SparkleIcon size={14} />
            Our Process
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--gray-900)] dark:text-white mb-6 tracking-tight">
            How We{" "}
            <span className="text-[var(--primary)]">Deliver</span>
          </h2>
          <p className="text-lg text-[var(--gray-500)] dark:text-[var(--gray-400)] leading-relaxed">
            A proven methodology refined over 200+ successful engagements.
            Transparent, iterative, and results-driven.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--primary)] via-[var(--accent)] to-emerald-500 opacity-20" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center reveal-up ${
                  i > 0 ? "lg:mt-20" : ""
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                {/* Dot on timeline (desktop) */}
                <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white dark:bg-[var(--dark-card)] border-2 border-[var(--primary)] items-center justify-center z-10">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${step.color}`} />
                </div>

                {/* Content - alternating sides */}
                <div className={`${i % 2 === 0 ? "lg:pr-20" : "lg:col-start-2 lg:pl-20"}`}>
                  <div className="p-8 rounded-3xl bg-[var(--gray-50)] dark:bg-[var(--dark-card)] border border-[var(--gray-200)] dark:border-[var(--dark-border)] hover:shadow-xl transition-shadow duration-500">
                    <div className="flex items-center gap-4 mb-4">
                      <span className={`text-4xl font-black bg-gradient-to-br ${step.color} bg-clip-text text-transparent`}>
                        {step.num}
                      </span>
                      <h3 className="text-xl font-bold text-[var(--gray-900)] dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-[var(--gray-500)] dark:text-[var(--gray-400)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Empty column for alternating layout */}
                {i % 2 !== 0 && <div className="hidden lg:block lg:col-start-1 lg:row-start-1" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
