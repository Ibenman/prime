"use client";

import { useState, FormEvent } from "react";
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  SendIcon,
  CheckIcon,
} from "./ui/Icons";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="bg-[var(--slate-50)] py-14 border-y border-[var(--slate-200)] md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Form */}
          <div className="reveal-left">
            <h2 className="text-3xl md:text-5xl font-black text-[var(--primary)] tracking-tight leading-tight">
              Get in Touch
            </h2>
            <p className="mt-4 text-[var(--slate-500)] max-w-lg">
              Ready to discuss your infrastructure needs? Our team is here to help you
              design and implement the right solution.
            </p>

            {submitted ? (
              <div className="mt-8 flex flex-col items-center justify-center text-center py-16 rounded-lg border border-[var(--slate-200)] bg-white">
                <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 mb-4">
                  <CheckIcon size={32} />
                </div>
                <h3 className="text-2xl font-black text-[var(--primary)]">Message Sent!</h3>
                <p className="mt-2 text-[var(--slate-500)]">
                  Thank you for reaching out. Our team will respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-2.5 bg-[var(--slate-100)] text-[var(--slate-700)] font-bold rounded-lg text-sm hover:bg-[var(--slate-200)] transition-colors"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-[var(--slate-700)] uppercase tracking-wider mb-1.5">
                      Full Name <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="John Doe"
                      className="w-full px-4 py-3 rounded-lg border border-[var(--slate-200)] bg-white text-[var(--slate-800)] placeholder:text-[var(--slate-400)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)] transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[var(--slate-700)] uppercase tracking-wider mb-1.5">
                      Email <span className="text-[var(--accent)]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-lg border border-[var(--slate-200)] bg-white text-[var(--slate-800)] placeholder:text-[var(--slate-400)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)] transition-all text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-bold text-[var(--slate-700)] uppercase tracking-wider mb-1.5">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Inc."
                      className="w-full px-4 py-3 rounded-lg border border-[var(--slate-200)] bg-white text-[var(--slate-800)] placeholder:text-[var(--slate-400)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)] transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[var(--slate-700)] uppercase tracking-wider mb-1.5">
                      Service Interested In
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border border-[var(--slate-200)] bg-white text-[var(--slate-800)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)] transition-all text-sm appearance-none">
                      <option value="">Select a service...</option>
                      <option>IT Infrastructure Consulting</option>
                      <option>Managed Infrastructure Services</option>
                      <option>Cyber Resilience & Fortification</option>
                      <option>Enterprise Cloud & Hybrid Infra</option>
                      <option>Advanced Network Implementation</option>
                      <option>Data Center Design & Build</option>
                      <option>IP Surveillance & Access Control</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[var(--slate-700)] uppercase tracking-wider mb-1.5">
                    Message <span className="text-[var(--accent)]">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your project, timeline, and goals..."
                    className="w-full px-4 py-3 rounded-lg border border-[var(--slate-200)] bg-white text-[var(--slate-800)] placeholder:text-[var(--slate-400)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/30 focus:border-[var(--accent)] transition-all text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-lg bg-[var(--accent)] px-8 py-3.5 text-sm font-extrabold text-white uppercase tracking-wide transition-colors hover:bg-[var(--accent-dark)]"
                >
                  <SendIcon size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Contact info */}
          <div className="reveal-right">
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: <MapPinIcon size={20} />,
                  label: "Address",
                  value: "Mickey Leland St, Bole sub city\nWoreda 02, House No new/04\nEldasol Building, 5th Floor\nAddis Ababa, Ethiopia",
                },
                {
                  icon: <PhoneIcon size={20} />,
                  label: "Phone",
                  value: "+251-11-000-0000",
                },
                {
                  icon: <MailIcon size={20} />,
                  label: "Email",
                  value: "contact@utsolutionsplc.com",
                },
                {
                  icon: <ClockIcon size={20} />,
                  label: "Hours",
                  value: "Mon – Fri: 8:00 AM – 6:00 PM\nSat: 9:00 AM – 1:00 PM",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 rounded-lg border border-[var(--slate-200)] bg-white p-4 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--accent)] text-white">
                    {item.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold text-[var(--slate-400)] uppercase tracking-wider mb-1">
                      {item.label}
                    </div>
                    <div className="text-sm text-[var(--slate-700)] whitespace-pre-line leading-relaxed">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
