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
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Header normale */}
      <header className="w-full border-b border-black/10 bg-[#f5f1ea]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <nav className="flex-1 flex justify-center">
              <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 md:gap-10 text-[11px] md:text-xs uppercase tracking-[0.22em] text-black">
                <li>
                  <Link href="/" className="text-black">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#shop" className="text-black">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-black">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-black">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            <Link
              href="/cart"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-6 py-3 text-[11px] md:text-xs uppercase tracking-[0.18em] text-black"
            >
              Cart
            </Link>
          </div>
        </div>
      </header>

      {/* Header piccolo che compare quando scorri */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 border-b border-black/10 bg-[#f5f1ea]/95 backdrop-blur transition-all duration-300 ${
          showScrolledHeader
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 flex items-center justify-between">
          <Link
            href="/"
            className="font-serif text-lg md:text-xl tracking-[0.08em] text-black"
          >
            JUSTTOPRINT
          </Link>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-black">
              <li>
                <Link href="/" className="text-black">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#shop" className="text-black">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-black">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-black">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <Link
            href="/cart"
            className="text-[11px] md:text-xs uppercase tracking-[0.18em] text-black"
          >
            Cart
          </Link>
        </div>
      </div>
    </>
  );
}
