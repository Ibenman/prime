export default function About() {
  return (
    <section id="about" style={{ backgroundColor: "var(--light-blue)", padding: "100px 5%" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div className="section-header animate-on-scroll">
          <h2>About Prime</h2>
          <p>
            We are a team of technologists, strategists, and builders committed to
            helping organizations thrive in the digital age.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 50,
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 1, minWidth: 300 }} className="animate-on-scroll">
            <h3
              style={{
                fontSize: 1.8,
                color: "var(--dark-blue)",
                marginBottom: 20,
                position: "relative",
                paddingLeft: 20,
              }}
            >
              Who We Are
            </h3>
            <p style={{ marginBottom: 15, fontSize: 1.05, lineHeight: 1.7 }}>
              Founded in 2019, Prime Digital Solutions has grown from a boutique
              consultancy into a full-service technology partner serving Fortune 500
              companies, ambitious startups, and government agencies across 12
              countries.
            </p>
            <p style={{ marginBottom: 15, fontSize: 1.05, lineHeight: 1.7 }}>
              Our team of 120+ engineers, designers, and strategists brings deep
              expertise in cloud architecture, AI/ML, enterprise software, and
              digital experience design. We don't just build software — we engineer
              competitive advantage.
            </p>
            <p style={{ fontSize: 1.05, lineHeight: 1.7 }}>
              Every engagement begins with understanding your business. We embed
              with your teams, learn your domain, and deliver solutions that don't
              just work — they transform how you operate.
            </p>
          </div>

          <div
            style={{
              flex: 1,
              minWidth: 300,
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {/* Mission Card */}
            <div className="mv-card animate-on-scroll">
              <h4 style={{ fontSize: 1.4, color: "var(--dark-blue)", marginBottom: 12 }}>
                🎯 Our Mission
              </h4>
              <p style={{ lineHeight: 1.7 }}>
                To empower organizations with technology that drives measurable
                business outcomes — faster time-to-market, lower operational costs,
                and superior customer experiences.
              </p>
            </div>

            {/* Vision Card */}
            <div className="mv-card animate-on-scroll">
              <h4 style={{ fontSize: 1.4, color: "var(--dark-blue)", marginBottom: 12 }}>
                🔭 Our Vision
              </h4>
              <p style={{ lineHeight: 1.7 }}>
                A world where every organization, regardless of size, has access to
                world-class technology expertise and the tools to compete on a
                global stage.
              </p>
            </div>

            {/* Values Card */}
            <div className="mv-card animate-on-scroll">
              <h4 style={{ fontSize: 1.4, color: "var(--dark-blue)", marginBottom: 12 }}>
                💡 Our Values
              </h4>
              <p style={{ lineHeight: 1.7 }}>
                <strong>Excellence</strong> — We hold ourselves to the highest
                standards. <br />
                <strong>Transparency</strong> — No surprises, no hidden costs.{" "}
                <br />
                <strong>Partnership</strong> — Your success is our success.
              </p>
            </div>

            {/* Stats Card */}
            <div className="mv-card animate-on-scroll">
              <h4 style={{ fontSize: 1.4, color: "var(--dark-blue)", marginBottom: 12 }}>
                📊 By the Numbers
              </h4>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <div>
                  <div style={{ fontSize: 2, fontWeight: 700, color: "var(--primary-orange)" }}>200+</div>
                  <div style={{ fontSize: 0.9, color: "var(--dark-gray)" }}>Projects Delivered</div>
                </div>
                <div>
                  <div style={{ fontSize: 2, fontWeight: 700, color: "var(--primary-orange)" }}>120+</div>
                  <div style={{ fontSize: 0.9, color: "var(--dark-gray)" }}>Team Members</div>
                </div>
                <div>
                  <div style={{ fontSize: 2, fontWeight: 700, color: "var(--primary-orange)" }}>12</div>
                  <div style={{ fontSize: 0.9, color: "var(--dark-gray)" }}>Countries</div>
                </div>
                <div>
                  <div style={{ fontSize: 2, fontWeight: 700, color: "var(--primary-orange)" }}>98%</div>
                  <div style={{ fontSize: 0.9, color: "var(--dark-gray)" }}>Client Retention</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
