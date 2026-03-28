"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function CartIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="9" cy="21" r="1" />
      <circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.6 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
    </svg>
  );
}

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
      {/* HEADER PRINCIPALE */}
      <header className="w-full border-b border-black/10 bg-[#f5f1ea]">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="grid grid-cols-[1fr_auto] items-center gap-4">
            {/* NAV */}
            <nav className="min-w-0 flex justify-center md:justify-center">
              <ul className="flex items-center justify-center gap-4 sm:gap-6 md:gap-10 whitespace-nowrap text-[10px] sm:text-[11px] md:text-[13px] uppercase tracking-[0.22em] text-black">
                <li>
                  <Link href="/" className="hover:opacity-60 transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/#shop" className="hover:opacity-60 transition">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:opacity-60 transition">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:opacity-60 transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>

            {/* CART */}
            <div className="flex justify-end">
              <Link
                href="/cart"
                className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-3 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.18em] text-black hover:opacity-70 transition whitespace-nowrap"
              >
                <CartIcon />
                <span>Cart</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* HEADER STICKY */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 border-b border-black/10 bg-[#f5f1ea]/95 backdrop-blur transition-all duration-300 ${
          showScrolledHeader
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-2.5 sm:py-3 relative flex items-center justify-center">
          <Link href="/">
            <img
              src="/justtoprint-logo.png"
              alt="JUSTTOPRINT"
              className="h-9 sm:h-10 md:h-10 w-auto object-contain"
            />
          </Link>

          <Link
            href="/cart"
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 text-[10px] sm:text-[11px] md:text-xs uppercase tracking-[0.18em] text-black hover:opacity-60 transition whitespace-nowrap"
          >
            <CartIcon />
            <span>Cart</span>
          </Link>
        </div>
      </div>
    </>
  );
}
