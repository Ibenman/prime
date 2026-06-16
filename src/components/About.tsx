import { BuildingIcon, UsersIcon, AwardIcon, GlobeIcon } from "./ui/Icons";

export default function About() {
  return (
    <section id="about" className="border-y border-[var(--slate-200)] bg-white py-14 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          {/* Left */}
          <div className="reveal-left">
            <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] tracking-tight leading-tight">
              Ethiopia's Leading Enterprise IT Infrastructure Company
            </h2>
            <div className="mt-6 space-y-4 text-[var(--slate-500)] leading-relaxed">
              <p>
                Since 2013, UT Solutions PLC has been at the forefront of Ethiopia's digital
                transformation. We've delivered 500+ enterprise IT infrastructure projects
                serving government ministries, national banks, hospitals, universities, and
                private enterprises across East Africa.
              </p>
              <p>
                Our team of 100+ certified engineers brings deep expertise in data center
                design, enterprise networking, cybersecurity, and cloud infrastructure.
                We don't just implement technology — we engineer the foundation that
                powers your business growth.
              </p>
              <p>
                As a Cisco Gold Partner and authorized provider of leading technology
                brands, we deliver world-class solutions tailored to the unique
                challenges and opportunities of the East African market.
              </p>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="reveal-right">
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <BuildingIcon size={28} />, value: "500+", label: "Projects Delivered", color: "bg-blue-50 text-blue-600" },
                { icon: <UsersIcon size={28} />, value: "100+", label: "Team Members", color: "bg-red-50 text-red-600" },
                { icon: <AwardIcon size={28} />, value: "12+", label: "Years Experience", color: "bg-amber-50 text-amber-600" },
                { icon: <GlobeIcon size={28} />, value: "3", label: "Countries Served", color: "bg-emerald-50 text-emerald-600" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center justify-center p-6 rounded-lg border border-[var(--slate-200)] bg-white text-center shadow-sm"
                >
                  <div className={`w-14 h-14 rounded-lg ${stat.color} flex items-center justify-center mb-3`}>
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-black text-[var(--primary)]">{stat.value}</div>
                  <div className="text-xs font-bold text-[var(--slate-400)] uppercase tracking-wider mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
