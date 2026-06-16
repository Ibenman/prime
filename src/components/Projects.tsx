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
    <section id="projects" className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20 lg:py-24">
        {/* Header */}
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end mb-12 md:mb-14 reveal-up">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--primary)] tracking-tight leading-tight">
              Featured Projects
            </h2>
            <p className="mt-4 text-[var(--slate-500)] max-w-xl">
              A selection of our most impactful infrastructure projects across Ethiopia and East Africa.
            </p>
          </div>
          <div className="flex justify-start lg:justify-end">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-[var(--accent)] uppercase tracking-wide transition-all duration-300 hover:gap-3"
            >
              View all projects <ChevronRightIcon size={14} />
            </a>
          </div>
        </div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group flex flex-col gap-4 rounded-lg border border-[var(--slate-200)] bg-white p-5 sm:p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-xl reveal-up"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex items-center px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[var(--accent)] bg-red-50 rounded-md border border-red-100">
                  {project.category}
                </span>
              </div>
              <div className="flex-grow">
                <h4 className="text-lg sm:text-xl font-black text-[var(--primary)] transition-colors duration-300 group-hover:text-[var(--accent)] leading-snug">
                  {project.title}
                </h4>
                <p className="mt-3 text-sm text-[var(--slate-500)] leading-relaxed">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-[var(--slate-100)]">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-xs font-bold text-[var(--accent)] uppercase tracking-wide transition-all duration-300 hover:gap-2"
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
