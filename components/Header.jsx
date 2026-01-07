"use client";

export default function Header({ compact = false }) {
  return (
    <header className={`jtp-header ${compact ? "is-compact" : ""}`}>
      <div className="jtp-inner">
        {/* Logo piccolo: appare SOLO quando scrolli */}
        <div className={`jtp-miniLogo ${compact ? "show" : ""}`}>
          <img src="/justtoprint-logo.png" alt="JUSTTOPRINT" />
        </div>

        {/* Menu */}
        <nav className="jtp-nav" aria-label="Primary">
          <a href="#home">HOME</a>
          <a href="#shop">SHOP</a>
          <span className="sep">—</span>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </nav>
      </div>

      <style jsx>{`
        .jtp-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background: transparent;
          transition: background 280ms ease, box-shadow 280ms ease;
        }

        .jtp-header.is-compact {
          background: rgba(243, 237, 228, 0.92);
          backdrop-filter: blur(10px);
          box-shadow: 0 1px 0 rgba(0, 0, 0, 0.06);
        }

        .jtp-inner {
          max-width: 1150px;
          margin: 0 auto;
          padding: 14px 18px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .jtp-miniLogo {
          height: 0;
          opacity: 0;
          transform: translateY(-6px) scale(0.98);
          transition: opacity 260ms ease, transform 260ms ease, height 260ms ease;
          overflow: hidden;
        }

        .jtp-miniLogo.show {
          height: 40px; /* spazio per il logo piccolo */
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .jtp-miniLogo img {
          height: 40px;
          width: auto;
          display: block;
          object-fit: contain;
        }

        .jtp-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 28px;
          letter-spacing: 0.28em;
          font-size: 12px;
          color: #6f685e;
          text-transform: uppercase;
        }

        .jtp-nav a {
          color: inherit;
          text-decoration: none;
          transition: opacity 180ms ease;
        }

        .jtp-nav a:hover {
          opacity: 0.7;
        }

        .sep {
          opacity: 0.55;
        }

        /* Mobile: menu va su 2 righe in modo pulito */
        @media (max-width: 639px) {
          .jtp-inner {
            padding: 14px 12px;
            gap: 8px;
          }

          .jtp-nav {
            gap: 18px;
            font-size: 12px;
            text-align: center;
            flex-wrap: wrap;
            justify-content: center;
          }

          .jtp-miniLogo.show {
            height: 34px;
          }

          .jtp-miniLogo img {
            height: 34px;
          }
        }
      `}</style>
    </header>
  );
}



