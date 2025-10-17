export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-5xl w-full text-center">
        {/* BRAND + KHANDA */}
        <h1 className="relative inline-block text-5xl sm:text-7xl font-extrabold tracking-[0.2em]">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #ffd86a 0%, #d4af37 45%, #a38118 100%)",
            }}
          >
            JUSTTOPR
            <span className="relative inline-block">
              {/* KHANDA sopra la I */}
              <img
                src="/khanda.png"
                alt="Khanda"
                className="absolute -top-10 left-1/2 -translate-x-1/2 w-10 h-10 opacity-90 transform"
              />
              I
            </span>
            NT
          </span>
        </h1>

        {/* Slogan */}
        <p className="mt-6 text-base sm:text-lg text-neutral-300">
          Wear Your Roots. — Punjabi Spirit • Modern Streetwear
        </p>

        {/* CTA */}
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="#shop"
            className="px-6 py-3 rounded-full font-semibold"
            style={{
              background:
                "linear-gradient(180deg, #ffd86a 0%, #d4af37 45%, #a38118 100%)",
              color: "#000",
            }}
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

