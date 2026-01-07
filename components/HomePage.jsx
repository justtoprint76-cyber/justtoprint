"use client";

import { useEffect, useState } from "react";
import Header from "./Header";

export default function HomePage() {
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // soglia: appena inizi a scorrere un po'
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
      style={{
        paddingTop: "92px", // spazio per header fixed (così non copre nulla)
      }}
    >
      <Header compact={compact} />

      {/* HERO */}
      <main className="flex flex-col items-center text-center px-6 -mt-8 sm:mt-2">
        {/* LOGO grande */}
        <div className="jtp-logo-box">
          <img
            src="/justtoprint-logo.png"
            alt="JUSTTOPRINT"
            className="jtp-logo-img"
          />
        </div>

        {/* TESTI (come li hai sistemati tu) */}
        <div className="-mt-16 sm:-mt-8">
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
          height: 320px; /* desktop */
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

        /* Mobile: come avevi deciso tu (logo HERO), senza rompere layout */
        @media (max-width: 639px) {
          .jtp-logo-box {
            height: 320px;
            margin-top: -70px; /* il tuo valore giusto */
            align-items: flex-start;
          }

          .jtp-logo-img {
            transform: scale(1.1); /* il tuo valore perfetto */
            transform-origin: top center;
          }
        }
      `}</style>
    </section>
  );
}

