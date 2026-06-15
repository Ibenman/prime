import Link from "next/link";

const footerLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#solutions", label: "Solutions" },
  { href: "#partners", label: "Partners" },
  { href: "#support", label: "Support" },
  { href: "#contact", label: "Contact" },
];

const socialLinks = [
  { label: "LinkedIn", icon: "in" },
  { label: "Twitter", icon: "X" },
  { label: "GitHub", icon: "GH" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, var(--dark-blue), var(--primary-blue))",
        color: "var(--white)",
        padding: "60px 5% 30px",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Logo */}
        <Link href="#home" style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: 8,
              background: "var(--primary-orange)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--white)",
              fontWeight: 800,
              fontSize: 16,
            }}
          >
            P
          </div>
          <span style={{ fontSize: 18, fontWeight: 700, color: "var(--white)" }}>
            Prime<span style={{ color: "var(--accent-orange)" }}>.</span>
          </span>
        </Link>

        {/* Nav Links */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 30,
            margin: "24px 0",
            flexWrap: "wrap",
          }}
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                color: "rgba(255,255,255,0.8)",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: 0.95,
                transition: "var(--transition)",
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social */}
        <div style={{ display: "flex", justifyContent: "center", gap: 12, margin: "20px 0" }}>
          {socialLinks.map((s, i) => (
            <div
              key={i}
              aria-label={s.label}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 0.8,
                fontWeight: 700,
                color: "rgba(255,255,255,0.8)",
                cursor: "pointer",
                transition: "var(--transition)",
              }}
            >
              {s.icon}
            </div>
          ))}
        </div>

        {/* Divider + Copyright */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: 24,
            marginTop: 10,
            opacity: 0.7,
            fontSize: 0.9,
            lineHeight: 1.6,
          }}
        >
          © {new Date().getFullYear()} Prime Digital Solutions. All rights reserved.
          <br />
          <span style={{ fontSize: 0.82 }}>
            Transforming ideas into digital reality since 2019.
          </span>
        </div>
      </div>
    </footer>
  );
}
