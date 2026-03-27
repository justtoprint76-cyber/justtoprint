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
      <header className="w-full border-b border-black/10 bg-[#f5f1ea]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 sm:py-4">
          <div className="flex flex-col items-center gap-3 sm:gap-4 md:flex-row md:justify-between md:gap-0">
            <nav className="flex-1 flex justify-center">
              <ul className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 md:gap-x-10 md:gap-y-3 text-[10px] md:text-xs uppercase tracking-[0.22em] text-black">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/#shop">Shop</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </nav>

            <Link
              href="/cart"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-5 py-2 sm:px-6 sm:py-3 text-[10px] md:text-xs uppercase tracking-[0.18em] text-black"
            >
              Cart
            </Link>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-0 left-0 right-0 z-50 border-b border-black/10 bg-[#f5f1ea]/95 backdrop-blur transition-all duration-300 ${
          showScrolledHeader
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2 sm:py-3 relative flex items-center justify-center">
          <Link href="/">
            <img
              src="/justtoprint-logo.png"
              alt="JUSTTOPRINT"
              className="h-7 sm:h-8 md:h-10 w-auto object-contain"
            />
          </Link>

          <Link
            href="/cart"
            className="absolute right-4 md:right-6 text-[10px] md:text-xs uppercase tracking-[0.18em]"
          >
            Cart
          </Link>
        </div>
      </div>
    </>
  );
}
