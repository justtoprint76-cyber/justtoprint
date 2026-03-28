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

      <main className="flex flex-col items-center text-center px-4 sm:px-6 pt-2 sm:pt-6 md:pt-10">
        {/* LOGO */}
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
          max-width: 1220px;
          height: 300px;
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
          filter:
            drop-shadow(0 1px 0 rgba(255, 248, 235, 0.95))
            drop-shadow(0 2px 2px rgba(164, 142, 102, 0.25))
            drop-shadow(0 8px 16px rgba(148, 126, 92, 0.18))
            drop-shadow(0 0 10px rgba(214, 192, 150, 0.28));
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
          margin-top: -18px;
        }

        @keyframes heroFadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* MOBILE */
        @media (max-width: 639px) {
          .jtp-logo-box {
            height: 170px;
            max-width: 100%;
            margin-top: 0;
          }

          .jtp-logo-img {
            transform: scale(1.06);
            transform-origin: center center;
            filter:
              drop-shadow(0 1px 0 rgba(255, 248, 235, 0.95))
              drop-shadow(0 2px 2px rgba(164, 142, 102, 0.22))
              drop-shadow(0 6px 12px rgba(148, 126, 92, 0.16))
              drop-shadow(0 0 8px rgba(214, 192, 150, 0.22));
          }

          .hero-text {
            margin-top: -2px;
            padding-left: 10px;
            padding-right: 10px;
          }
        }

        /* TABLET */
        @media (min-width: 640px) and (max-width: 1023px) {
          .jtp-logo-box {
            height: 240px;
            margin-top: 0;
          }

          .jtp-logo-img {
            transform: scale(1.04);
            transform-origin: center center;
          }

          .hero-text {
            margin-top: -10px;
          }
        }

        /* DESKTOP LARGE */
        @media (min-width: 1024px) {
          .jtp-logo-box {
            height: 340px;
          }

          .jtp-logo-img {
            transform: scale(1.02);
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
