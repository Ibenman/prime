const partners = [
  { name: "Microsoft", abbr: "MS" },
  { name: "Amazon Web Services", abbr: "AWS" },
  { name: "Google Cloud", abbr: "GCP" },
  { name: "Salesforce", abbr: "SF" },
  { name: "Snowflake", abbr: "❄" },
  { name: "Datadog", abbr: "DD" },
  { name: "Stripe", abbr: "ST" },
  { name: "HubSpot", abbr: "HS" },
];

export default function Partners() {
  return (
    <section id="partners" style={{ backgroundColor: "var(--light-gray)", padding: "100px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="section-header animate-on-scroll">
          <h2>Trusted Partners</h2>
          <p>
            We collaborate with the world's leading technology platforms to
            deliver best-in-class solutions.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: 24,
            alignItems: "center",
          }}
        >
          {partners.map((p, i) => (
            <div
              key={i}
              className="partner-logo animate-on-scroll"
              style={{
                background: "var(--white)",
                borderRadius: 12,
                padding: 25,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 110,
                boxShadow: "var(--shadow-sm)",
                transition: "var(--transition)",
                border: "1px solid var(--medium-gray)",
                cursor: "default",
              }}
            >
              <div
                style={{
                  fontSize: 1.5,
                  fontWeight: 700,
                  color: "var(--dark-gray)",
                  opacity: 0.6,
                  transition: "var(--transition)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                <span style={{ fontSize: 2 }}>{p.abbr}</span>
                <span style={{ fontSize: 0.75, fontWeight: 500 }}>{p.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
