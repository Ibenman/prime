import { ChevronRightIcon } from "./ui/Icons";

const insights = [
  {
    title: "The Future of Tier III Data Centers in East Africa",
    date: "Dec 2024",
    category: "Data Center",
    excerpt: "As demand for cloud services grows across East Africa, Tier III data centers are becoming the backbone of digital transformation. Here's what enterprises need to know.",
    featured: true,
  },
  {
    title: "Securing the Edge: IoT Security Best Practices",
    date: "Nov 2024",
    category: "Cybersecurity",
    excerpt: "With IoT deployments accelerating across Ethiopian enterprises, security must be embedded from device to cloud.",
    featured: false,
  },
  {
    title: "Migrating to Wi-Fi 6E: A Practical Guide",
    date: "Oct 2024",
    category: "Networking",
    excerpt: "Wi-Fi 6E delivers faster speeds and lower latency. Learn how to plan and execute a seamless migration.",
    featured: false,
  },
];

export default function Insights() {
  const featured = insights.find((i) => i.featured);
  const secondary = insights.filter((i) => !i.featured);

  return (
    <section id="insights" className="bg-[var(--slate-50)] border-y border-[var(--slate-200)]">
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20 lg:py-24">
        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end mb-12 md:mb-14 reveal-up">
          <div>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-tight text-[var(--primary)]">
              Latest Insights & Industry News
            </h3>
            <p className="mt-4 text-[var(--slate-500)]">
              Expert perspectives on the trends shaping East Africa's technology landscape.
            </p>
          </div>
          <div className="flex justify-start lg:justify-end">
            <a
              href="#insights"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] uppercase tracking-wide transition-all duration-300 hover:gap-3"
            >
              View all insights <ChevronRightIcon size={14} />
            </a>
          </div>
        </div>

        {/* Insight cards */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-6">
          {/* Featured article */}
          {featured && (
            <div
              className="group cursor-pointer rounded-lg border border-[var(--slate-200)] bg-white p-5 sm:p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-xl lg:col-span-3 reveal-up"
            >
              <span className="inline-flex items-center px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[var(--accent)] bg-red-50 rounded-md border border-red-100">
                {featured.category}
              </span>
              <h4 className="mt-4 text-xl sm:text-2xl font-black leading-snug text-[var(--primary)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                {featured.title}
              </h4>
              <p className="mt-3 text-sm text-[var(--slate-500)] leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="mt-5 flex items-center justify-between pt-4 border-t border-[var(--slate-100)]">
                <span className="text-xs font-bold text-[var(--slate-400)]">{featured.date}</span>
                <a href="#" className="inline-flex items-center gap-1 text-xs font-bold text-[var(--accent)] uppercase tracking-wide transition-all duration-300 hover:gap-2">
                  Read more <ChevronRightIcon size={12} />
                </a>
              </div>
            </div>
          )}

          {/* Secondary articles */}
          {secondary.map((insight, i) => (
            <div
              key={i}
              className="group cursor-pointer rounded-lg border border-[var(--slate-200)] bg-white p-5 sm:p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-xl lg:col-span-3 reveal-up"
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-700 bg-amber-50 rounded-md border border-amber-100">
                  {insight.category}
                </span>
                <span className="text-xs text-[var(--slate-400)] font-medium">{insight.date}</span>
              </div>
              <h4 className="text-base sm:text-lg font-black leading-snug text-[var(--primary)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                {insight.title}
              </h4>
              <p className="mt-2 text-sm text-[var(--slate-500)] leading-relaxed line-clamp-3">
                {insight.excerpt}
              </p>
              <div className="mt-4 pt-3 border-t border-[var(--slate-100)]">
                <a href="#" className="inline-flex items-center gap-1 text-xs font-bold text-[var(--accent)] uppercase tracking-wide transition-all duration-300 hover:gap-2">
                  Read more <ChevronRightIcon size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
