"use client";

import Header from "./Header";

export default function HomePage() {
  return (
    <section id="home" className="bg-[#F3EDE4] text-[#4A463F] overflow-x-hidden">
      <Header />

      <main className="flex flex-col items-center text-center px-6 -mt-8 sm:mt-2">
        {/* LOGO */}
        <div className="jtp-logo-box">
          <img
            src="/justtoprint-logo.png"
            alt="JUSTTOPRINT"
            className="jtp-logo-img"
          />
        </div>

        {/* TESTI */}
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

      <style jsx>{`
        .jtp-logo-box {
          width: 100%;
          max-width: 1150px;
          height: 320px; /* DESKTOP: come prima */
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto;
          overflow: visible; /* importante per lo scale */
        }

        .jtp-logo-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }

        /* MOBILE: più grande SENZA spingere giù tutto */
        @media (max-width: 639px) {
          .jtp-logo-box {
            height: 320px;        /* fisso: non cambia il layout */
            margin-top: -70px;    /* il tuo valore perfetto */
            align-items: flex-start;
          }

          .jtp-logo-img {
            transform: scale(1.20);          /* <-- rende HERO davvero */
            transform-origin: top center;    /* cresce verso il basso */
          }
        }
      `}</style>
    </section>
  );
}

