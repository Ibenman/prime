const supportItems = [
  {
    icon: "🚀",
    title: "Implementation Support",
    bullets: [
      "Dedicated project manager for every engagement",
      "Agile delivery with 2-week sprint cycles",
      "Staging environments for UAT before go-live",
      "Rollback-ready deployment pipelines",
      "Knowledge transfer sessions with your team",
    ],
  },
  {
    icon: "🛡️",
    title: "Managed Services",
    bullets: [
      "24/7 infrastructure monitoring & alerting",
      "Proactive performance optimization",
      "Security patching & vulnerability management",
      "Monthly health reports & recommendations",
      "SLA-backed 99.9% uptime guarantee",
    ],
  },
  {
    icon: "🎓",
    title: "Training & Enablement",
    bullets: [
      "Custom workshops for your engineering team",
      "Architecture review & best practices sessions",
      "Documentation & runbook development",
      "On-demand office hours with our experts",
      "Certification prep for cloud platforms",
    ],
  },
];

export default function Support() {
  return (
    <section id="support" style={{ padding: "100px 5%" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div className="section-header animate-on-scroll">
          <h2>Support & Services</h2>
          <p>
            Our relationship doesn't end at delivery. We provide comprehensive
            support to ensure long-term success.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 0,
            background: "var(--white)",
            borderRadius: 15,
            overflow: "hidden",
            boxShadow: "var(--shadow-md)",
          }}
          className="animate-on-scroll"
        >
          {supportItems.map((item, i) => (
            <div
              key={i}
              style={{
                padding: 40,
                borderLeft: i > 0 ? "1px solid var(--medium-gray)" : "none",
              }}
            >
              <h3
                style={{
                  fontSize: 1.4,
                  color: "var(--dark-blue)",
                  marginBottom: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  fontWeight: 700,
                }}
              >
                <span style={{ fontSize: 1.6 }}>{item.icon}</span>
                {item.title}
              </h3>
              <ul style={{ paddingLeft: 0, listStyle: "none" }}>
                {item.bullets.map((b, j) => (
                  <li
                    key={j}
                    style={{
                      marginBottom: 12,
                      position: "relative",
                      paddingLeft: 28,
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      style={{
                        color: "var(--primary-orange)",
                        position: "absolute",
                        left: 0,
                        top: 0,
                        fontWeight: 700,
                      }}
                    >
                      ✓
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
