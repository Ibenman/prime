import Link from "next/link";
import { LinkedinIcon, TwitterIcon, FacebookIcon } from "./ui/Icons";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About Us" },
  { href: "#projects", label: "Projects" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
];

const serviceLinks = [
  { href: "#services", label: "IT Infrastructure Consulting" },
  { href: "#services", label: "Managed Infrastructure Services" },
  { href: "#services", label: "Cyber Resilience & Fortification" },
  { href: "#services", label: "Enterprise Cloud & Hybrid Infra" },
  { href: "#services", label: "Advanced Network Implementation" },
  { href: "#services", label: "Data Center Design & Build" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--primary)] text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden transition-colors duration-300">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
        }}
      />

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 relative z-10">
        {/* Brand */}
        <div>
          <Link href="#home" className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
              <span className="text-white font-black text-lg tracking-tighter">UT</span>
            </div>
            <div>
              <div className="font-black text-sm tracking-tight text-white">UT Solutions</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">PLC</div>
            </div>
          </Link>
          <p className="text-sm text-white/50 leading-relaxed mb-6">
            Ethiopia's leading enterprise IT infrastructure company. Delivering ultimate
            technologies since 2013.
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-3">
            {[
              { icon: <LinkedinIcon size={16} />, label: "LinkedIn" },
              { icon: <TwitterIcon size={16} />, label: "Twitter" },
              { icon: <FacebookIcon size={16} />, label: "Facebook" },
            ].map((s, i) => (
              <button
                key={i}
                aria-label={s.label}
                className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center text-white/60 hover:bg-white/20 hover:text-white transition-all"
              >
                {s.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-4">
            Quick Links
          </h4>
          <ul className="space-y-2.5">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-4">
            Services
          </h4>
          <ul className="space-y-2.5">
            {serviceLinks.map((link, i) => (
              <li key={i}>
                <Link
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-xs font-bold text-white/40 uppercase tracking-wider mb-4">
            Contact
          </h4>
          <ul className="space-y-2.5 text-sm text-white/60">
            <li>Mickey Leland St, Bole sub city</li>
            <li>Woreda 02, House No new/04</li>
            <li>Eldasol Building, 5th Floor</li>
            <li>Addis Ababa, Ethiopia</li>
            <li className="pt-2">+251-11-000-0000</li>
            <li>contact@utsolutionsplc.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="container mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-[var(--slate-400)] text-xs relative z-10">
        <p>© {new Date().getFullYear()} UT Solutions PLC. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
