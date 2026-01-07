"use client";

import Header from "./Header";

export default function HomePage() {
  return (
    <section id="home" className="bg-[#F3EDE4] text-[#4A463F] overflow-x-hidden">
      {/* MENU */}
      <Header />

      {/* HERO */}
      <main className="flex flex-col items-center text-center px-6 mt-2 sm:mt-10">
        {/* LOGO (grande su desktop, controllato su mobile) */}
        <div
          style={{
            width: "100%",
            maxWidth: "1150px",
            height: "clamp(210px, 34vh, 320px)", // mobile più “statement” ma non esplode
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <img
            src="/justtoprint-logo.png"
            alt="JUSTTOPRINT"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              display: "block",
            }}
          />
        </div>

        {/* TESTI SOTTO (vicinissimi al logo su mobile, desktop elegante) */}
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
    </section>
  );
}
