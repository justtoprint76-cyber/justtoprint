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
            JUSTTOPR<span className="relative inline-block">
              I
              {/* KHANDA dorata sopra la I */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2">
                <svg
                  width="42"
                  height="42"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Chakkar (cerchio) */}
                  <circle cx="32" cy="28" r="16" fill="#d4af37" />
                  <circle cx="32" cy="28" r="12" fill="#000000" />
                  {/* Spada centrale (Khanda) semplificata */}
                  <rect x="30.5" y="10" width="3" height="24" fill="#d4af37" />
                  <rect x="28" y="10" width="9" height="3" fill="#d4af37" />
                  <rect x="30.5" y="34" width="3" height="8" fill="#d4af37" />
                  {/* Due lame curve laterali stilizzate */}
                  <path d="M14 22 C18 32, 18 36, 14 44" fill="none" stroke="#d4af37" strokeWidth="4" />
                  <path d="M50 22 C46 32, 46 36, 50 44" fill="none" stroke="#d4af37" strokeWidth="4" />
                </svg>
              </span>
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

        {/* HINT shop (sezione demo più giù nella pagina Storefront) */}
        <p className="mt-4 text-xs text-neutral-500">
          Scorri più giù per lo shop demo • Prodotti reali in arrivo
        </p>
      </div>
    </main>
  );
}
