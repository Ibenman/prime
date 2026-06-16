import { ChevronRightIcon } from "./ui/Icons";

const projects = [
  {
    title: "Tier III Data Center — National Bank of Ethiopia",
    category: "Data Center",
    description: "Design and construction of a Tier III certified data center facility with 99.982% uptime, supporting the bank's nationwide digital banking transformation.",
  },
  {
    title: "Enterprise Network Modernization — Ministry of Health",
    category: "Networking",
    description: "Complete network infrastructure overhaul across 50+ facilities, implementing Cisco SD-WAN, Wi-Fi 6, and unified communications.",
  },
  {
    title: "Hybrid Cloud Migration — United Insurance",
    category: "Cloud",
    description: "Migration of legacy systems to a hybrid cloud architecture on AWS and Azure, reducing operational costs by 45% while improving scalability.",
  },
  {
    title: "Cybersecurity Framework — Commercial Bank",
    category: "Security",
    description: "Implementation of a comprehensive cybersecurity framework including SIEM, SOAR, and zero-trust architecture aligned with PCI-DSS requirements.",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative overflow-hidden bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end mb-12 reveal-up">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] tracking-tight leading-tight">
              Featured Projects
            </h2>
            <p className="mt-4 text-[var(--slate-500)] max-w-xl">
              A selection of our most impactful infrastructure projects across Ethiopia and East Africa.
            </p>
          </div>
          <div className="flex justify-start lg:justify-end">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] uppercase tracking-wide hover:gap-3 transition-all"
            >
              View all projects <ChevronRightIcon size={14} />
            </a>
          </div>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group flex flex-shrink-0 flex-col gap-4 rounded-lg border border-[var(--slate-200)] bg-white p-5 shadow-sm transition-shadow duration-300 hover:shadow-md sm:p-6 w-full reveal-up"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-white/95 px-3 py-1.5 text-xs font-extrabold uppercase tracking-wide text-[var(--primary)] shadow-sm">
                  {project.category}
                </span>
              </div>
              <div className="flex-grow">
                <h4 className="text-xl font-black text-[var(--primary)] transition-colors group-hover:text-[var(--accent)] leading-snug">
                  {project.title}
                </h4>
                <p className="mt-3 text-sm text-[var(--slate-500)] leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center gap-3 pt-1 border-t border-[var(--slate-100)]">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[var(--accent)] uppercase tracking-wide"
                >
                  Read case study <ChevronRightIcon size={12} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
