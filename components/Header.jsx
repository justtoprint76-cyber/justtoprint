"use client";

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingTop: "24px",
        paddingBottom: "12px",
        color: "#7A7267", // ← FORZATO (anti-oro)
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "40px",
          fontSize: "14px",
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "#7A7267", // ← FORZATO
        }}
      >
        <a href="#home" style={{ color: "#7A7267" }}>
          Home
        </a>

        <a href="#shop" style={{ color: "#7A7267" }}>
          Shop
        </a>

        <span style={{ opacity: 0.4 }}>—</span>

        <a href="#about" style={{ color: "#7A7267" }}>
          About
        </a>

        <a href="#contact" style={{ color: "#7A7267" }}>
          Contact
        </a>
      </nav>
    </header>
  );
}

