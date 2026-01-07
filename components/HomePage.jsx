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
        {/* LOGO */}
<div
  style={{
    width: "100%",
    maxWidth: "1150px",
    height: "clamp(180px, 30vh, 260px)", // ✅ mobile più simile al desktop, ma controllato
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

{/* TESTO SOTTO (mobile = come desktop) */}
<div className="mt-6 sm:mt-6">
  <p className="tracking-[0.35em] text-[15px] sm:text-[15px] text-[#6F685E]">
    MODERN PUNJABI STREETWEAR
  </p>

  <p className="mt-3 text-[15px] sm:text-[15px] text-[#7E776C] max-w-3xl mx-auto leading-relaxed">
    A cultural project inspired by Punjabi heritage.
    <br />
    Collection coming soon.
  </p>
</div>
      </main>
    </section>
  );
}
