import Link from "next/link";
import {
  CloudIcon,
  CodeIcon,
  AIIcon,
  ShieldIcon,
  PaletteIcon,
  ChartIcon,
  ArrowRightIcon,
  SparkleIcon,
} from "./ui/Icons";

const solutions = [
  {
    icon: <CloudIcon size={28} />,
    title: "Cloud & Infrastructure",
    description:
      "Migrate, optimize, and manage your cloud infrastructure on AWS, Azure, or GCP. We design resilient, cost-effective architectures that scale with your business.",
    features: ["Cloud Migration", "Kubernetes & DevOps", "Cost Optimization", "24/7 Monitoring"],
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    icon: <CodeIcon size={28} />,
    title: "Custom Software Engineering",
    description:
      "End-to-end software development from concept to production. Our engineers build performant, maintainable systems using modern frameworks and best practices.",
    features: ["Full-Stack Development", "API Design & Integration", "Microservices", "Legacy Modernization"],
    gradient: "from-violet-500 to-purple-400",
  },
  {
    icon: <AIIcon size={28} />,
    title: "AI & Machine Learning",
    description:
      "Unlock the power of your data. We build intelligent systems — from predictive analytics to generative AI applications — that drive real business value.",
    features: ["Predictive Analytics", "NLP & Chatbots", "Computer Vision", "MLOps & Deployment"],
    gradient: "from-orange-500 to-amber-400",
  },
  {
    icon: <ShieldIcon size={28} />,
    title: "Cybersecurity & Compliance",
    description:
      "Protect your digital assets with enterprise-grade security. We assess vulnerabilities, implement defenses, and ensure compliance with industry standards.",
    features: ["Security Audits", "Penetration Testing", "SOC 2 / ISO 27001", "Zero Trust Architecture"],
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    icon: <PaletteIcon size={28} />,
    title: "Digital Experience Design",
    description:
      "Create exceptional user experiences that convert. Our design team crafts intuitive interfaces backed by research, testing, and data-driven iteration.",
    features: ["UX Research & Strategy", "UI Design Systems", "Mobile-First Design", "Accessibility (WCAG)"],
    gradient: "from-pink-500 to-rose-400",
  },
  {
    icon: <ChartIcon size={28} />,
    title: "Data Engineering & Analytics",
    description:
      "Turn raw data into actionable insights. We build data pipelines, warehouses, and dashboards that give your team a single source of truth.",
    features: ["Data Pipeline Architecture", "BI Dashboards", "Real-Time Analytics", "Data Governance"],
    gradient: "from-indigo-500 to-blue-400",
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 lg:py-32 bg-[var(--gray-50)] dark:bg-[var(--gray-900)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20 reveal-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary-light)] dark:bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium mb-4">
            <SparkleIcon size={14} />
            Our Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--gray-900)] dark:text-white mb-6 tracking-tight">
            Comprehensive Technology{" "}
            <span className="text-[var(--primary)]">Services</span>
          </h2>
          <p className="text-lg text-[var(--gray-500)] dark:text-[var(--gray-400)] leading-relaxed">
            End-to-end solutions designed to accelerate your digital transformation
            journey and drive measurable business outcomes.
          </p>
        </div>

        {/* Solutions grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((s, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-3xl bg-white dark:bg-[var(--dark-card)] border border-[var(--gray-200)] dark:border-[var(--dark-border)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 reveal-up"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {s.icon}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[var(--gray-900)] dark:text-white mb-3 group-hover:text-[var(--primary)] dark:group-hover:text-[var(--accent)] transition-colors">
                {s.title}
              </h3>
              <p className="text-[var(--gray-500)] dark:text-[var(--gray-400)] leading-relaxed mb-6 text-sm">
                {s.description}
              </p>

              {/* Feature tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {s.features.map((f, j) => (
                  <span
                    key={j}
                    className="px-3 py-1 text-xs font-medium rounded-full bg-[var(--gray-100)] dark:bg-white/5 text-[var(--gray-600)] dark:text-[var(--gray-300)] border border-[var(--gray-200)] dark:border-[var(--dark-border)]"
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* Learn more link */}
              <Link
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--primary)] dark:text-[var(--accent)] group-hover:gap-2.5 transition-all"
              >
                Learn more
                <ArrowRightIcon size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
