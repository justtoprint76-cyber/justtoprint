export default function HomePage() {
  return (
    <section className="min-h-screen bg-[#F3EDE4] text-[#4A463F] flex flex-col">
      {/* HEADER */}
      <header className="pt-10 pb-6 text-center">
        <nav className="text-[14px] tracking-[0.15em] text-[#8A8174]">
          <a className="mx-4 no-underline text-inherit" href="/">
            HOME
          </a>
          <span className="mx-2">—</span>
          <a className="mx-4 no-underline text-inherit" href="#shop">
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

      {/* HERO */}
     <main className="min-h-screen text-white flex items-center justify-center px-6 relative overflow-hidden pt-24 sm:pt-0">

        <img
          src="/justtoprint-logo.png"
          alt="JUSTTOPRINT"
          className="w-full max-w-[760px] h-auto"
        />

        <p className="mt-8 text-[16px] tracking-[0.18em] text-[#7A7267]">
          MODERN PUNJABI STREETWEAR
        </p>
        <p className="mt-4 text-[13px] tracking-[0.08em] text-[#9A9388] max-w-[520px]">
  A cultural project inspired by Punjabi heritage. Collection coming soon.
</p>

      </main>
    </section>
  );
}
