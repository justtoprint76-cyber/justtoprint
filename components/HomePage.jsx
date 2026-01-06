"use client";

import Header from "./Header";

export default function HomePage() {
  return (
    <section className="bg-[#F3EDE4] text-[#4A463F] overflow-x-hidden">
      {/* MENU */}
      <Header />

      {/* HERO */}
      <main className="min-h-[80vh] flex flex-col items-center text-center px-6 mt-10 sm:mt-6">
        
        {/* LOGO */}
        <div
          style={{
            width: "100%",
            maxWidth: "1100px",
            height: "26vh",
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

        {/* TESTO SOTTO (MOLTO VICINO AL LOGO) */}
       <div className="mt-3 sm:mt-4">
  <p className="tracking-[0.4em] text-[13px] sm:text-[16px] text-[#6F685E]">
    MODERN PUNJABI STREETWEAR
  </p>

  <p className="mt-2 text-sm sm:text-base text-[#8C857A] max-w-2xl mx-auto leading-relaxed">
    A cultural project inspired by Punjabi heritage.
    <br />
    Collection coming soon.
  </p>
</div>
      </main>
    </section>
  );
}
