import Header from "./Header";

export default function HomePage() {
  return (
    <section className="min-h-screen bg-[#F3EDE4] text-[#4A463F] flex flex-col overflow-x-hidden">
      {/* MENU */}
      <Header />

      {/* HERO */}
      <main className="flex-1 flex flex-col items-center text-center px-4 mt-4 sm:-mt-16">
        {/* LOGO (più grande su mobile senza tagli) */}
        <div className="w-full flex justify-center overflow-visible">
          <img
            src="/justtoprint-logo.png"
            alt="JUSTTOPRINT"
            className="
              w-full
              max-w-[680px]
              h-auto
              scale-[1.25]
              sm:scale-100
              sm:max-w-[1050px]
              lg:max-w-[1150px]
            "
          />
        </div>

       {/* TAGLINE */}
<p className="
  mt-2
  text-[14px]
  sm:text-[12px]
  tracking-[0.28em]
  text-[#7A7267]
">
  MODERN PUNJABI STREETWEAR
</p>

{/* DESCRIZIONE */}
<p className="
  mt-1
  sm:mt-3
  text-[14px]
  sm:text-[13px]
  tracking-[0.08em]
  text-[#9A9388]
  max-w-[520px]
  leading-relaxed
">
  A cultural project inspired by Punjabi heritage.
  <br />
  Collection coming soon.
</p>
      </main>
    </section>
  );
}

