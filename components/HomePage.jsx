export default function HomePage() {
  return (
    <section className="min-h-screen bg-[#F3EDE4] text-[#4A463F] flex flex-col">
      {/* HEADER (come prima) */}
      <header className="pt-8 pb-2 text-center">
        <nav className="text-[14px] tracking-[0.15em] text-[#8A8174]">
          <a className="mx-4 no-underline text-inherit" href="/">
            HOME
          </a>
          <span className="mx-2">—</span>
          <a className="mx-4 no-underline text-inherit" href="/#shop">
            SHOP
          </a>
          <a className="mx-4 no-underline text-inherit" href="/about">
            ABOUT
          </a>
          <a className="mx-4 no-underline text-inherit" href="/contact">
            CONTACT
          </a>
        </nav>
      </header>

      {/* HERO CENTRATA */}
      <main className="flex-1 flex flex-col items-center text-center px-6 pt-2">
        {/* LOGO grande su desktop, responsive su mobile */}
      <img
  src="/justtoprint-logo.png"
  alt="JUSTTOPRINT"
  className="w-full max-w-[1050px] sm:max-w-[1150px] h-auto -mt-12 sm:-mt-8"
/>
      <p className="mt-8 text-[12px] tracking-[0.32em] text-[#7A7267]">
          MODERN PUNJABI STREETWEAR
        </p>

        <p className="mt-4 text-[13px] tracking-[0.08em] text-[#9A9388] max-w-[520px] leading-relaxed">
          A cultural project inspired by Punjabi heritage. Collection coming soon.
        </p>
      </main>
    </section>
  );
}
