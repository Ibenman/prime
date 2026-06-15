import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, rgba(0, 45, 98, 0.88), rgba(0, 86, 179, 0.75)), url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80') no-repeat center center/cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--white)",
        textAlign: "center",
        padding: "0 5%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
          animation: "fadeInUp 1s ease",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
            marginBottom: 24,
            lineHeight: 1.2,
            textShadow: "0 2px 10px rgba(0,0,0,0.2)",
            fontWeight: 800,
          }}
        >
          Transforming Ideas Into{" "}
          <span style={{ color: "var(--accent-orange)" }}>
            Digital Reality
          </span>
        </h1>
        <p
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
            marginBottom: 40,
            maxWidth: 700,
            marginLeft: "auto",
            marginRight: "auto",
            opacity: 0.92,
            lineHeight: 1.6,
          }}
        >
          Prime Digital Solutions delivers cutting-edge technology consulting,
          digital transformation, and software engineering services to
          enterprises worldwide.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            href="#solutions"
            style={{
              display: "inline-block",
              background: "var(--primary-orange)",
              color: "var(--white)",
              padding: "16px 45px",
              fontSize: 1.15,
              fontWeight: 600,
              borderRadius: 50,
              textDecoration: "none",
              transition: "var(--transition)",
              boxShadow: "var(--shadow-md)",
              border: "2px solid var(--primary-orange)",
            }}
            className="cta-button"
          >
            Explore Solutions
          </Link>
          <Link
            href="#contact"
            style={{
              display: "inline-block",
              background: "transparent",
              color: "var(--white)",
              padding: "16px 45px",
              fontSize: 1.15,
              fontWeight: 600,
              borderRadius: 50,
              textDecoration: "none",
              transition: "var(--transition)",
              border: "2px solid rgba(255,255,255,0.5)",
            }}
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
