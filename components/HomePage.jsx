"use client";

import Header from "./Header";

export default function HomePage() {
  return (
    <section id="home" className="bg-[#F3EDE4] text-[#4A463F] overflow-x-hidden">
      {/* MENU */}
      <Header />

      {/* HERO */}
      <main className="flex flex-col items-center text-center px-6 -mt-8 sm:mt-2">
        {/* LOGO */}
        <div className="jtp-logo-box">
          <img
            src="/justtoprint-logo.png"
            alt="JUSTTOPRINT"
            className="jtp-logo-img"
          />
        </div>

        {/* TESTI SOTTO */}
        <div className="-mt-6 sm:-mt-2">
          <p className="tracking-[0.35em] text-[11px] sm:text-[15px] text-[#6F685E]">
            MODERN PUNJABI STREETWEAR
          </p>

          <p className="mt-2 text-[11px] sm:text-[15px] text-[#7E776C] max-w-2xl mx-auto leading-relaxed">
            A cultural project inspired by Punjabi heritage.
            <br />
            Collection coming soon.
          </p>
        </div>
      </main>

      {/* CSS MIRATO (mobile ≠ desktop) */}
      <style jsx>{`
        .jtp-logo-box {
          width: 100%;
          max-width: 1150px;
          height: 320px; /* DESKTOP: identico */
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }

        .jtp-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        /* MOBILE: più HERO ma anche PIÙ SU */
        @media (max-width: 639px) {
          .jtp-logo-box {
            height: min(52vh, 440px); /* HERO grande */
            margin-top: -6'px;        /* lo riporta su sotto al menu */
          }
        }
      `}</style>
    </section>
  );
}
