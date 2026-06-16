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
    <footer className="bg-[var(--primary)] text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
          backgroundSize: "52px 52px",
        }}
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link href="#home" className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-white font-black text-lg tracking-tighter">UT</span>
              </div>
              <div>
                <div className="font-black text-sm tracking-tight text-white">UT Solutions</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">PLC</div>
              </div>
            </Link>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              Ethiopia's leading enterprise IT infrastructure company. Delivering ultimate
              technologies since 2013.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <LinkedinIcon size={16} />, label: "LinkedIn" },
                { icon: <TwitterIcon size={16} />, label: "Twitter" },
                { icon: <FacebookIcon size={16} />, label: "Facebook" },
              ].map((s, i) => (
                <button
                  key={i}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-md bg-white/10 flex items-center justify-center text-white/50 hover:bg-white/20 hover:text-white transition-all duration-300"
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white/30 uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold text-white/30 uppercase tracking-wider mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/50 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold text-white/30 uppercase tracking-wider mb-5">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-white/50">
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
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            © {new Date().getFullYear()} UT Solutions PLC. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/30">
            <span className="hover:text-white/60 cursor-pointer transition-colors duration-200">Privacy Policy</span>
            <span className="hover:text-white/60 cursor-pointer transition-colors duration-200">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
