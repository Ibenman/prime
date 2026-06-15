"use client";

import { useState, FormEvent } from "react";
import {
  LocationIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  SendIcon,
  SparkleIcon,
  LinkedinIcon,
  TwitterIcon,
  GithubIcon,
  CheckIcon,
} from "./ui/Icons";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[var(--gray-50)] dark:bg-[var(--gray-900)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-20 reveal-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--primary-light)] dark:bg-[var(--primary)]/10 text-[var(--primary)] text-sm font-medium mb-4">
            <SparkleIcon size={14} />
            Get in Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--gray-900)] dark:text-white mb-6 tracking-tight">
            Let's Build Something{" "}
            <span className="text-[var(--primary)]">Great</span>
          </h2>
          <p className="text-lg text-[var(--gray-500)] dark:text-[var(--gray-400)] leading-relaxed">
            Ready to start your next project? We'd love to hear from you.
            Reach out and we'll respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 reveal-left">
            <div className="h-full rounded-3xl bg-gradient-to-br from-[var(--primary-dark)] to-[var(--primary)] p-8 lg:p-10 text-white relative overflow-hidden">
              {/* Decorative */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-36 h-36 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              <div className="relative">
                <h3 className="text-2xl font-bold mb-2">Contact Information</h3>
                <p className="text-white/60 text-sm mb-8">
                  Fill out the form or reach us directly.
                </p>

                <div className="space-y-6 mb-10">
                  {[
                    { icon: <LocationIcon size={20} />, label: "Address", value: "100 Innovation Drive, Suite 400\nSan Francisco, CA 94105" },
                    { icon: <PhoneIcon size={20} />, label: "Phone", value: "+1 (415) 555-0192" },
                    { icon: <MailIcon size={20} />, label: "Email", value: "hello@prime.digital" },
                    { icon: <ClockIcon size={20} />, label: "Hours", value: "Mon – Fri: 9:00 AM – 6:00 PM PST" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <div className="text-xs text-white/50 font-medium mb-0.5">{item.label}</div>
                        <div className="text-sm leading-relaxed whitespace-pre-line">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Social */}
                <div className="flex gap-3">
                  {[
                    { icon: <LinkedinIcon size={18} />, label: "LinkedIn" },
                    { icon: <TwitterIcon size={18} />, label: "Twitter" },
                    { icon: <GithubIcon size={18} />, label: "GitHub" },
                  ].map((s, i) => (
                    <button
                      key={i}
                      aria-label={s.label}
                      className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all"
                    >
                      {s.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 reveal-right">
            <div className="h-full rounded-3xl bg-white dark:bg-[var(--dark-card)] border border-[var(--gray-200)] dark:border-[var(--dark-border)] p-8 lg:p-10">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-500/10 flex items-center justify-center text-emerald-500 mb-4">
                    <CheckIcon size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--gray-900)] dark:text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-[var(--gray-500)] dark:text-[var(--gray-400)] mb-6">
                    Thank you for reaching out. Our team will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 bg-[var(--gray-100)] dark:bg-white/5 text-[var(--gray-700)] dark:text-[var(--gray-300)] font-medium rounded-xl hover:bg-[var(--gray-200)] dark:hover:bg-white/10 transition-colors"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-[var(--gray-700)] dark:text-[var(--gray-300)] mb-2">
                        Full Name <span className="text-[var(--accent)]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--gray-200)] dark:border-[var(--dark-border)] bg-[var(--gray-50)] dark:bg-white/5 text-[var(--gray-900)] dark:text-white placeholder:text-[var(--gray-400)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--gray-700)] dark:text-[var(--gray-300)] mb-2">
                        Email <span className="text-[var(--accent)]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--gray-200)] dark:border-[var(--dark-border)] bg-[var(--gray-50)] dark:bg-white/5 text-[var(--gray-900)] dark:text-white placeholder:text-[var(--gray-400)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--gray-700)] dark:text-[var(--gray-300)] mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Inc."
                      className="w-full px-4 py-3 rounded-xl border border-[var(--gray-200)] dark:border-[var(--dark-border)] bg-[var(--gray-50)] dark:bg-white/5 text-[var(--gray-900)] dark:text-white placeholder:text-[var(--gray-400)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--gray-700)] dark:text-[var(--gray-300)] mb-2">
                      Service Interested In
                    </label>
                    <select className="w-full px-4 py-3 rounded-xl border border-[var(--gray-200)] dark:border-[var(--dark-border)] bg-[var(--gray-50)] dark:bg-white/5 text-[var(--gray-900)] dark:text-white focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all text-sm appearance-none">
                      <option value="">Select a service...</option>
                      <option>Cloud & Infrastructure</option>
                      <option>Custom Software Engineering</option>
                      <option>AI & Machine Learning</option>
                      <option>Cybersecurity & Compliance</option>
                      <option>Digital Experience Design</option>
                      <option>Data Engineering & Analytics</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--gray-700)] dark:text-[var(--gray-300)] mb-2">
                      Message <span className="text-[var(--accent)]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your project, timeline, and goals..."
                      className="w-full px-4 py-3 rounded-xl border border-[var(--gray-200)] dark:border-[var(--dark-border)] bg-[var(--gray-50)] dark:bg-white/5 text-[var(--gray-900)] dark:text-white placeholder:text-[var(--gray-400)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 focus:border-[var(--primary)] transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-dark)] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5 transition-all text-sm"
                  >
                    <SendIcon size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
