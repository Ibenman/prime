import { SparkleIcon } from "./ui/Icons";

const partners = [
  { name: "Microsoft", abbr: "MS", color: "#00A4EF" },
  { name: "Amazon Web Services", abbr: "AWS", color: "#FF9900" },
  { name: "Google Cloud", abbr: "GCP", color: "#4285F4" },
  { name: "Salesforce", abbr: "SF", color: "#00A1E0" },
  { name: "Snowflake", abbr: "❄", color: "#29B5E8" },
  { name: "Datadog", abbr: "DD", color: "#632CA6" },
  { name: "Stripe", abbr: "ST", color: "#635BFF" },
  { name: "HubSpot", abbr: "HS", color: "#FF7A59" },
];

export default function Partners() {
  return (
    <section id="partners" className="py-24 lg:py-32 bg-[var(--white)] dark:bg-[var(--dark-bg)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary-light)] dark:bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium mb-4">
            <SparkleIcon size={14} />
            Our Partners
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--gray-900)] dark:text-white mb-6 tracking-tight">
            Built on{" "}
            <span className="text-[var(--primary)]">Trusted Platforms</span>
          </h2>
          <p className="text-lg text-[var(--gray-500)] dark:text-[var(--gray-400)] leading-relaxed">
            We collaborate with the world's leading technology platforms to
            deliver best-in-class solutions.
          </p>
        </div>

        {/* Partner logos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {partners.map((p, i) => (
            <div
              key={i}
              className="group flex flex-col items-center justify-center p-8 rounded-2xl bg-[var(--gray-50)] dark:bg-[var(--dark-card)] border border-[var(--gray-200)] dark:border-[var(--dark-border)] hover:shadow-lg hover:-translate-y-1 hover:border-[var(--primary)]/30 transition-all duration-300 reveal-up"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div
                className="text-3xl font-black mb-2 transition-all duration-300 group-hover:scale-110"
                style={{ color: p.color, opacity: 0.5 }}
              >
                {p.abbr}
              </div>
              <div className="text-xs font-medium text-[var(--gray-400)] dark:text-[var(--gray-500)] group-hover:text-[var(--gray-600)] dark:group-hover:text-[var(--gray-300)] transition-colors">
                {p.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
