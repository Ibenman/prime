import { ChevronRightIcon } from "./ui/Icons";

const insights = [
  {
    title: "The Future of Tier III Data Centers in East Africa",
    date: "Dec 2024",
    category: "Data Center",
    excerpt: "As demand for cloud services grows across East Africa, Tier III data centers are becoming the backbone of digital transformation. Here's what enterprises need to know.",
  },
  {
    title: "Securing the Edge: IoT Security Best Practices",
    date: "Nov 2024",
    category: "Cybersecurity",
    excerpt: "With IoT deployments accelerating across Ethiopian enterprises, security must be embedded from device to cloud. Key strategies for protecting edge infrastructure.",
  },
  {
    title: "Migrating to Wi-Fi 6E: A Practical Guide",
    date: "Oct 2024",
    category: "Networking",
    excerpt: "Wi-Fi 6E delivers faster speeds and lower latency. Learn how to plan and execute a seamless migration for your enterprise network.",
  },
];

export default function Insights() {
  return (
    <section id="insights" className="bg-[var(--slate-50)] py-14 border-y border-[var(--slate-200)] md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end mb-12 reveal-up">
          <div>
            <h3 className="text-3xl font-black leading-tight tracking-tight text-[var(--primary)] md:text-5xl">
              Latest Insights & Industry News
            </h3>
            <p className="mt-4 text-[var(--slate-500)]">
              Expert perspectives on the trends shaping East Africa's technology landscape.
            </p>
          </div>
          <div className="flex justify-start lg:justify-end">
            <a
              href="#insights"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] uppercase tracking-wide hover:gap-3 transition-all"
            >
              View all insights <ChevronRightIcon size={14} />
            </a>
          </div>
        </div>

        {/* Insight cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
          {/* Featured article */}
          <div
            className="group cursor-pointer rounded-lg border border-[var(--slate-200)] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-xl sm:p-6 lg:col-span-3 reveal-up"
          >
            <span className="inline-flex items-center px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[var(--accent)] bg-red-50 rounded-md">
              {insights[0].category}
            </span>
            <h4 className="mt-4 text-2xl font-black leading-snug text-[var(--primary)] transition-colors group-hover:text-[var(--accent)] md:text-3xl">
              {insights[0].title}
            </h4>
            <p className="mt-3 text-sm text-[var(--slate-500)] leading-relaxed">
              {insights[0].excerpt}
            </p>
            <div className="mt-4 flex items-center justify-between pt-4 border-t border-[var(--slate-100)]">
              <span className="text-xs font-bold text-[var(--slate-400)]">{insights[0].date}</span>
              <a href="#" className="inline-flex items-center gap-1 text-xs font-bold text-[var(--accent)] uppercase tracking-wide">
                Read more <ChevronRightIcon size={12} />
              </a>
            </div>
          </div>

          {/* Secondary articles */}
          {insights.slice(1).map((insight, i) => (
            <div
              key={i}
              className="group cursor-pointer rounded-lg border border-[var(--slate-200)] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-xl sm:p-6 lg:col-span-3 reveal-up"
              style={{ transitionDelay: `${(i + 1) * 100}ms` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="inline-flex items-center px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-700 bg-amber-50 rounded-md">
                  {insight.category}
                </span>
                <span className="text-xs text-[var(--slate-400)]">{insight.date}</span>
              </div>
              <h4 className="line-clamp-2 text-lg font-black leading-snug text-[var(--primary)] transition-colors group-hover:text-[var(--accent)]">
                {insight.title}
              </h4>
              <p className="mt-2 text-sm text-[var(--slate-500)] leading-relaxed line-clamp-3">
                {insight.excerpt}
              </p>
              <div className="mt-4 pt-3 border-t border-[var(--slate-100)]">
                <a href="#" className="inline-flex items-center gap-1 text-xs font-bold text-[var(--accent)] uppercase tracking-wide">
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
