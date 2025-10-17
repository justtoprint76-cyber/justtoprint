export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center">
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
            <span
              className="relative inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #ffd86a 0%, #d4af37 45%, #a38118 100%)",
              }}
            >
              I
              {/* Khanda sopra la I */}
              <img
                src="/khanda.png"
                alt="Khanda"
                className="pointer-events-none select-none absolute -top-12 left-1/2 -translate-x-1/2 w-10 h-10 opacity-90"
              />
            </span>
            NT
          </span>
        </h1>

        <p className="mt-4 text-lg text-neutral-400">
          Wear Your Roots. — Punjabi Spirit • Modern Streetwear
        </p>

        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="#shop"
            className="bg-gradient-to-b from-yellow-400 to-yellow-700 text-black font-semibold py-2 px-6 rounded-full hover:opacity-90 transition"
          >
            Shop Now
          </a>
          <a
            href="/spedizioni"
            className="border border-yellow-600 text-yellow-500 font-semibold py-2 px-6 rounded-full hover:bg-yellow-600 hover:text-black transition"
          >
            Spedizioni & Resi
          </a>
        </div>

        <p className="mt-6 text-sm text-neutral-500">
          Scorri più giù per lo shop demo • Prodotti reali in arrivo
        </p>
      </div>
    </main>
  );
}
