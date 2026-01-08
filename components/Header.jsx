"use client";

export default function Header({ onCartClick, compact = false }) {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-[#F3EDE4]/90 backdrop-blur"
      style={{ borderBottom: "1px solid rgba(217,208,195,0.6)" }}
    >
      <div
        className={`max-w-5xl mx-auto px-6 ${
          compact ? "py-3" : "py-6"
        }`}
      >
        {/* MOBILE: 2 righe (nav sopra, cart sotto). DESKTOP: una riga */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
          {/* NAV */}
          <nav className="flex flex-wrap justify-center sm:justify-center gap-x-8 gap-y-2 text-[12px] sm:text-[12px] tracking-[0.28em] text-[#6F685E]">
            <a href="#home" className="hover:text-[#4A463F] transition">
              HOME
            </a>
            <a href="#shop" className="hover:text-[#4A463F] transition">
              SHOP
            </a>
            <span className="opacity-60">—</span>
            <a href="#about" className="hover:text-[#4A463F] transition">
              ABOUT
            </a>
            <a href="#contact" className="hover:text-[#4A463F] transition">
              CONTACT
            </a>
          </nav>

          {/* CART */}
          <div className="flex justify-center sm:justify-end">
            <button
              type="button"
              onClick={onCartClick}
              className="flex items-center gap-3 rounded-full bg-white/55 border border-[#D9D0C3] px-5 py-3 text-[12px] tracking-[0.18em] text-[#4A463F] shadow-sm hover:bg-white/75 transition"
              aria-label="Open cart"
            >
              {/* icon */}
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
              </svg>
              <span>CART</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}




