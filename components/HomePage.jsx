export default function HomePage() {
  const gold = {
    backgroundImage:
      "linear-gradient(180deg, #ffd86a 0%, #d4af37 45%, #a38118 100%)",
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-5xl w-full text-center">
        {/* ===== BRAND LINE (senza absolute) ===== */}
        <div className="relative flex items-end justify-center gap-[0.2em]">
          {/* JUSTTOPR */}
          <span
            className="text-5xl sm:text-7xl font-extrabold tracking-[0.2em] bg-clip-text text-transparent"
            style={gold}
          >
            JUSTTOPR
          </span>

          {/* Gruppo Khanda + I */}
          <span className="flex flex-col items-center leading-none -mx-[0.05em]">
       <img
  src="/khanda.png"
  alt="Khanda"
  className="w-[26px] h-[26px] relative top-[10px] left-[-7px] opacity-95 drop-shadow-[0_0_5px_rgba(0,0,0,0.4)]"
/>







            <span
              className="text-5xl sm:text-7xl font-extrabold tracking-[0.2em] bg-clip-text text-transparent leading-none"
              style={gold}
            >
              I
            </span>
          </span>

          {/* NT */}
          <span
            className="text-5xl sm:text-7xl font-extrabold tracking-[0.2em] bg-clip-text text-transparent"
            style={gold}
          >
            NT
          </span>
        </div>
        {/* ===== /BRAND LINE ===== */}

        {/* Slogan */}
        <p className="mt-6 text-base sm:text-lg text-neutral-300">
          Wear Your Roots. — Punjabi Spirit • Modern Streetwear
        </p>

        {/* CTA */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#shop"
            className="px-6 py-3 rounded-full font-semibold"
            style={{ background: gold.backgroundImage, color: "#000" }}
          >
            Shop Now
          </a>
          <a
            href="/spedizioni"
            className="px-6 py-3 rounded-full border border-neutral-700 text-neutral-200 hover:bg-neutral-900"
          >
            Spedizioni & Resi
          </a>
        </div>

        <p className="mt-4 text-xs text-neutral-500">
          Scorri più giù per lo shop demo • Prodotti reali in arrivo
        </p>
      </div>
    </main>
  );
}

