import Link from "next/link";
import {
  ServerIcon,
  NetworkIcon,
  ShieldCheckIcon,
  CloudIcon,
  MonitorIcon,
  CableIcon,
  CameraIcon,
  ChevronRightIcon,
} from "./ui/Icons";

const services = [
  {
    icon: <ServerIcon size={24} />,
    title: "IT Infrastructure Consulting",
    description: "End-to-end infrastructure assessment, planning, and modernization. We design resilient, scalable IT foundations that align with your business objectives.",
    span: 2,
  },
  {
    icon: <NetworkIcon size={24} />,
    title: "Managed Infrastructure Services",
    description: "24/7 proactive monitoring, maintenance, and support for your critical IT infrastructure. Our NOC team ensures maximum uptime and rapid incident response.",
    span: 3,
  },
  {
    icon: <ShieldCheckIcon size={24} />,
    title: "Cyber Resilience & Fortification",
    description: "Comprehensive cybersecurity solutions including threat assessment, penetration testing, SIEM implementation, and incident response planning.",
    span: 3,
  },
  {
    icon: <CloudIcon size={24} />,
    title: "Enterprise Cloud & Hybrid Infra",
    description: "Cloud migration, hybrid architecture design, and multi-cloud management across AWS, Azure, and GCP. Optimize costs while maintaining security.",
    span: 2,
  },
  {
    icon: <MonitorIcon size={24} />,
    title: "Advanced Network Implementation",
    description: "Enterprise-grade network design including Cisco networking, SD-WAN, Wi-Fi 6E, and structured cabling for seamless connectivity.",
    span: 2,
  },
  {
    icon: <CableIcon size={24} />,
    title: "Data Center Design & Build",
    description: "Tier III data center design, construction, and commissioning. From site assessment to full turnkey delivery of world-class facilities.",
    span: 3,
  },
  {
    icon: <CameraIcon size={24} />,
    title: "IP Surveillance & Access Control",
    description: "Integrated security solutions including CCTV, biometric access control, and intelligent video analytics to protect your people and assets.",
    span: 3,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[var(--slate-50)] scroll-mt-16 border-y border-[var(--slate-200)]">
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-20 lg:py-24">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16 reveal-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[var(--primary)] tracking-tight leading-tight">
            Comprehensive Infrastructure
          </h2>
          <p className="mt-4 text-[var(--slate-500)] text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            From data center design to cloud migration, we deliver end-to-end IT infrastructure
            solutions that power enterprise growth across East Africa.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-6">
          {services.map((service, i) => {
            const spanClass = service.span === 2 ? "lg:col-span-2" : "lg:col-span-3";
            return (
              <div
                key={i}
                className={`group cursor-pointer rounded-lg border border-[var(--slate-200)] bg-white p-5 sm:p-6 shadow-sm transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[var(--accent)]/40 hover:shadow-xl ${spanClass} reveal-up`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--slate-100)] text-[var(--primary)] transition-all duration-300 group-hover:bg-[var(--accent)] group-hover:text-white group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h4 className="text-base sm:text-lg font-black text-[var(--primary)] transition-colors duration-300 group-hover:text-[var(--accent)] leading-tight">
                    {service.title}
                  </h4>
                </div>
                <p className="text-sm text-[var(--slate-500)] leading-relaxed">
                  {service.description}
                </p>
                <div className="flex gap-4 mt-auto pt-4">
                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[var(--accent)] uppercase tracking-wide transition-all duration-300 hover:gap-2"
                  >
                    Learn more <ChevronRightIcon size={12} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
