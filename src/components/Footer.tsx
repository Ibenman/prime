import Link from "next/link";
import { LinkedinIcon, TwitterIcon, GithubIcon } from "./ui/Icons";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#solutions", label: "Solutions" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

const serviceLinks = [
  { href: "#solutions", label: "Cloud & Infrastructure" },
  { href: "#solutions", label: "Software Engineering" },
  { href: "#solutions", label: "AI & Machine Learning" },
  { href: "#solutions", label: "Cybersecurity" },
  { href: "#solutions", label: "Data Engineering" },
  { href: "#solutions", label: "Experience Design" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--gray-900)] dark:bg-[#060A14] text-white">
      {/* CTA Banner */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative -top-16 rounded-3xl bg-gradient-to-r from-[var(--primary)] to-[var(--primary-dark)] p-10 lg:p-14 text-center overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
          <div className="relative">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-white/70 max-w-2xl mx-auto mb-8 text-lg">
              Let's discuss how Prime can help you achieve your digital transformation goals.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[var(--primary-dark)] font-bold rounded-2xl hover:shadow-xl hover:-translate-y-0.5 transition-all"
            >
              Start a Conversation →
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#home" className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[var(--accent)] to-[var(--accent-dark)] flex items-center justify-center text-white font-bold text-sm">
                P
              </div>
              <span className="text-lg font-bold text-white">
                Prime<span className="text-[var(--accent)]">.</span>
              </span>
            </Link>
            <p className="text-[var(--gray-400)] text-sm leading-relaxed mb-6">
              Transforming ideas into digital reality. We deliver cutting-edge
              technology solutions for enterprises worldwide.
            </p>
            <div className="flex gap-3">
              {[
                { icon: <LinkedinIcon size={16} />, label: "LinkedIn" },
                { icon: <TwitterIcon size={16} />, label: "Twitter" },
                { icon: <GithubIcon size={16} />, label: "GitHub" },
              ].map((s, i) => (
                <button
                  key={i}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[var(--gray-400)] hover:bg-white/10 hover:text-white transition-all"
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--gray-400)] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-[var(--gray-400)] hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-sm text-[var(--gray-400)]">
              <li>100 Innovation Drive, Suite 400</li>
              <li>San Francisco, CA 94105</li>
              <li className="pt-2">+1 (415) 555-0192</li>
              <li>hello@prime.digital</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[var(--gray-500)]">
            © {new Date().getFullYear()} Prime Digital Solutions. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-[var(--gray-500)]">
            <span className="hover:text-[var(--gray-300)] cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-[var(--gray-300)] cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
