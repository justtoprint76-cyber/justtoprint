"use client";

import { useEffect, useState } from "react";
import Header from "./Header";

export default function HomePage() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setCompact(window.scrollY > 80);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="home"
      className="bg-[#F3EDE4] text-[#4A463F] overflow-x-hidden"
      style={{ paddingTop: "0px" }}
    >
      <Header compact={compact} />

      {/* HERO */}
      <main className="flex flex-col items-center text-center px-4 sm:px-6 pt-6 sm:pt-10 md:pt-16">
        {/* LOGO grande */}
        <div className="jtp-logo-box hero-logo">
          <img
            src="/justtoprint-logo.png"
            alt="JUSTTOPRINT"
            className="jtp-logo-img"
          />
        </div>

        {/* TESTI */}
        <div className="hero-text">
          <p className="tracking-[0.28em] sm:tracking-[0.35em] text-[10px] sm:text-[15px] text-[#6F685E]">
            MODERN PUNJABI STREETWEAR
          </p>

          <p className="mt-3 text-[13px] sm:text-[15px] text-[#7E776C] max-w-xl mx-auto leading-relaxed">
            A cultural project inspired by Punjabi heritage.
            <br />
            Collection coming soon.
          </p>
        </div>
      </main>

      <style jsx>{`
        .jtp-logo-box {
          width: 100%;
          max-width: 1150px;
          height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          overflow: visible;
        }

        .jtp-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        .hero-logo {
          opacity: 0;
          transform: translateY(14px);
          animation: heroFadeUp 0.9s ease-out forwards;
        }

        .hero-text {
          opacity: 0;
          transform: translateY(18px);
          animation: heroFadeUp 0.9s ease-out forwards;
          animation-delay: 0.35s;
          margin-top: -28px;
        }

        @keyframes heroFadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* MOBILE ONLY */
        @media (max-width: 639px) {
          .jtp-logo-box {
            height: 250px;
            margin-top: 8px;
          }

          .jtp-logo-img {
            transform: scale(1.38);
            transform-origin: center top;
          }

          .hero-text {
            margin-top: -10px;
            padding-left: 10px;
            padding-right: 10px;
          }
        }

        /* TABLET */
        @media (min-width: 640px) and (max-width: 1023px) {
          .jtp-logo-box {
            height: 300px;
            margin-top: 0;
          }

          .jtp-logo-img {
            transform: scale(1.12);
            transform-origin: center center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-logo,
          .hero-text {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
