const solutions = [
  {
    icon: "☁️",
    title: "Cloud & Infrastructure",
    description:
      "Migrate, optimize, and manage your cloud infrastructure on AWS, Azure, or GCP. We design resilient, cost-effective architectures that scale with your business.",
    features: ["Cloud Migration", "Kubernetes & DevOps", "Cost Optimization", "24/7 Monitoring"],
  },
  {
    icon: "💻",
    title: "Custom Software Engineering",
    description:
      "End-to-end software development from concept to production. Our engineers build performant, maintainable systems using modern frameworks and best practices.",
    features: ["Full-Stack Development", "API Design & Integration", "Microservices", "Legacy Modernization"],
  },
  {
    icon: "🤖",
    title: "AI & Machine Learning",
    description:
      "Unlock the power of your data. We build intelligent systems — from predictive analytics to generative AI applications — that drive real business value.",
    features: ["Predictive Analytics", "NLP & Chatbots", "Computer Vision", "MLOps & Model Deployment"],
  },
  {
    icon: "🔒",
    title: "Cybersecurity & Compliance",
    description:
      "Protect your digital assets with enterprise-grade security. We assess vulnerabilities, implement defenses, and ensure compliance with industry standards.",
    features: ["Security Audits", "Penetration Testing", "SOC 2 / ISO 27001", "Zero Trust Architecture"],
  },
  {
    icon: "📱",
    title: "Digital Experience Design",
    description:
      "Create exceptional user experiences that convert. Our design team crafts intuitive interfaces backed by research, testing, and data-driven iteration.",
    features: ["UX Research & Strategy", "UI Design Systems", "Mobile-First Design", "Accessibility (WCAG)"],
  },
  {
    icon: "📊",
    title: "Data Engineering & Analytics",
    description:
      "Turn raw data into actionable insights. We build data pipelines, warehouses, and dashboards that give your team a single source of truth.",
    features: ["Data Pipeline Architecture", "BI Dashboards", "Real-Time Analytics", "Data Governance"],
  },
];

export default function Solutions() {
  return (
    <section id="solutions" style={{ padding: "100px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="section-header animate-on-scroll">
          <h2>Our Solutions</h2>
          <p>
            Comprehensive technology services designed to accelerate your digital
            transformation journey.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
            gap: 30,
          }}
        >
          {solutions.map((s, i) => (
            <div
              key={i}
              className="solution-card animate-on-scroll"
              style={{
                background: "var(--white)",
                borderRadius: 12,
                overflow: "hidden",
                boxShadow: "var(--shadow-sm)",
                transition: "var(--transition)",
                position: "relative",
                border: "1px solid var(--medium-gray)",
                cursor: "default",
              }}
            >
              <div
                style={{
                  background: "linear-gradient(135deg, var(--primary-blue), var(--dark-blue))",
                  height: 80,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 2.2,
                }}
              >
                {s.icon}
              </div>
              <div style={{ padding: 28 }}>
                <h3
                  style={{
                    fontSize: 1.3,
                    color: "var(--dark-blue)",
                    marginBottom: 12,
                    fontWeight: 700,
                  }}
                >
                  {s.title}
                </h3>
                <p style={{ marginBottom: 18, lineHeight: 1.7, fontSize: 0.98 }}>
                  {s.description}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {s.features.map((f, j) => (
                    <span
                      key={j}
                      style={{
                        background: "var(--light-blue)",
                        color: "var(--primary-blue)",
                        padding: "4px 12px",
                        borderRadius: 20,
                        fontSize: 0.82,
                        fontWeight: 500,
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
