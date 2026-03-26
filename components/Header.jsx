"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [showScrolledHeader, setShowScrolledHeader] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShowScrolledHeader(window.scrollY > 120);
    }

    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {/* Header principale */}
      <header className="w-full border-b border-black/10 bg-[#f5f1ea]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between md:gap-0">
            
            {/* NAV */}
            <nav className="flex-1 flex justify-center">
              <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 md:gap-10 text-[11px] md:text-xs uppercase tracking-[0.22em] text-black">
                
                <li>
                  <Link href="/" className="hover:opacity-60">
                    Home
                  </Link>
                </li>

                <li>
                  <Link href="/men" className="hover:opacity-60">
                    Men
                  </Link>
                </li>

                <li>
                  <Link href="/women" className="hover:opacity-60">
                    Women
                  </Link>
                </li>

                <li>
                  <Link href="/about" className="hover:opacity-60">
                    About
                  </Link>
                </li>

                <li>
                  <Link href="/contact" className="hover:opacity-60">
                    Contact
                  </Link>
                </li>

              </ul>
            </nav>

            {/* CART */}
            <Link
              href="/cart"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-6 py-3 text-[11px] md:text-xs uppercase tracking-[0.18em] text-black hover:opacity-70 transition"
            >
              Cart
            </Link>
          </div>
        </div>
      </header>

      {/* Header sticky quando scrolli */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 border-b border-black/10 bg-[#f5f1ea]/95 backdrop-blur transition-all duration-300 ${
          showScrolledHeader
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 relative flex items-center justify-center">
          
          {/* LOGO CENTRO */}
          <Link href="/" className="block">
            <img
              src="/justtoprint-logo.png"
              alt="JUSTTOPRINT"
              className="h-8 md:h-10 w-auto object-contain"
            />
          </Link>

          {/* CART */}
          <Link
            href="/cart"
            className="absolute right-4 md:right-6 text-[11px] md:text-xs uppercase tracking-[0.18em] text-black hover:opacity-60 transition"
          >
            Cart
          </Link>
        </div>
      </div>
    </>
  );
}
