"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" style={{ backgroundColor: "var(--light-blue)", padding: "100px 5%" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="section-header animate-on-scroll">
          <h2>Get in Touch</h2>
          <p>
            Ready to start your next project? We'd love to hear from you.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: 40,
          }}
        >
          {/* Contact Info */}
          <div
            className="animate-on-scroll"
            style={{
              background: "linear-gradient(135deg, var(--dark-blue), var(--primary-blue))",
              color: "var(--white)",
              borderRadius: 15,
              padding: 40,
            }}
          >
            <h3
              style={{
                fontSize: 1.6,
                marginBottom: 25,
                color: "var(--white)",
                position: "relative",
                paddingBottom: 15,
                borderBottom: "2px solid var(--primary-orange)",
              }}
            >
              Contact Information
            </h3>

            <div style={{ marginBottom: 30 }}>
              {[
                { icon: "📍", label: "Address", value: "100 Innovation Drive, Suite 400\nSan Francisco, CA 94105" },
                { icon: "📞", label: "Phone", value: "+1 (415) 555-0192" },
                { icon: "✉️", label: "Email", value: "hello@prime.digital" },
                { icon: "🕐", label: "Hours", value: "Mon – Fri: 9:00 AM – 6:00 PM PST" },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 15,
                    marginBottom: 20,
                    paddingBottom: 20,
                    borderBottom: i < 3 ? "1px dashed rgba(255,255,255,0.15)" : "none",
                  }}
                >
                  <span
                    style={{
                      fontSize: 1.3,
                      minWidth: 45,
                      height: 45,
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 0.85, opacity: 0.7, marginBottom: 2 }}>
                      {item.label}
                    </div>
                    <div style={{ whiteSpace: "pre-line", lineHeight: 1.5 }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div
              style={{
                borderRadius: 10,
                overflow: "hidden",
                height: 180,
                background: "rgba(255,255,255,0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div style={{ textAlign: "center", opacity: 0.6 }}>
                <div style={{ fontSize: 2.5, marginBottom: 8 }}>🗺️</div>
                <div style={{ fontSize: 0.9 }}>San Francisco, CA</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="animate-on-scroll"
            style={{
              background: "var(--white)",
              padding: 40,
              borderRadius: 15,
              boxShadow: "var(--shadow-md)",
            }}
          >
            {submitted ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                  textAlign: "center",
                  gap: 16,
                }}
              >
                <div style={{ fontSize: 3 }}>✅</div>
                <h3 style={{ color: "var(--dark-blue)", fontSize: 1.5 }}>Message Sent!</h3>
                <p style={{ lineHeight: 1.6 }}>
                  Thank you for reaching out. Our team will respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  style={{
                    background: "var(--primary-orange)",
                    color: "var(--white)",
                    border: "none",
                    padding: "12px 30px",
                    borderRadius: 8,
                    cursor: "pointer",
                    fontWeight: 600,
                    marginTop: 10,
                  }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {[
                  { label: "Full Name", type: "text", placeholder: "John Doe", required: true },
                  { label: "Email Address", type: "email", placeholder: "john@company.com", required: true },
                  { label: "Company", type: "text", placeholder: "Acme Inc.", required: false },
                ].map((field, i) => (
                  <div key={i} style={{ marginBottom: 20 }}>
                    <label
                      style={{
                        display: "block",
                        marginBottom: 6,
                        fontWeight: 500,
                        color: "var(--dark-blue)",
                        fontSize: 0.95,
                      }}
                    >
                      {field.label} {field.required && <span style={{ color: "var(--primary-orange)" }}>*</span>}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      required={field.required}
                      style={{
                        width: "100%",
                        padding: 14,
                        border: "1px solid var(--medium-gray)",
                        borderRadius: 8,
                        fontFamily: "inherit",
                        fontSize: 1,
                        transition: "var(--transition)",
                        outline: "none",
                        background: "var(--white)",
                        color: "var(--dark-gray)",
                      }}
                    />
                  </div>
                ))}

                <div style={{ marginBottom: 20 }}>
                  <label
                    style={{
                      display: "block",
                      marginBottom: 6,
                      fontWeight: 500,
                      color: "var(--dark-blue)",
                      fontSize: 0.95,
                    }}
                  >
                    How can we help? <span style={{ color: "var(--primary-orange)" }}>*</span>
                  </label>
                  <textarea
                    required
                    placeholder="Tell us about your project, timeline, and goals..."
                    style={{
                      width: "100%",
                      padding: 14,
                      border: "1px solid var(--medium-gray)",
                      borderRadius: 8,
                      fontFamily: "inherit",
                      fontSize: 1,
                      minHeight: 140,
                      resize: "vertical",
                      transition: "var(--transition)",
                      outline: "none",
                      background: "var(--white)",
                      color: "var(--dark-gray)",
                    }}
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: "linear-gradient(135deg, var(--primary-orange), var(--dark-orange))",
                    color: "var(--white)",
                    border: "none",
                    padding: 14,
                    fontSize: 1.05,
                    fontWeight: 600,
                    borderRadius: 8,
                    cursor: "pointer",
                    transition: "var(--transition)",
                    width: "100%",
                  }}
                  className="submit-btn"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
