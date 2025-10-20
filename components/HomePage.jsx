export default function HomePage() {
  const gold = {
    backgroundImage:
      "linear-gradient(180deg, #ffd86a 0%, #d4af37 45%, #a38118 100%)",
  };

  // Sfondo Divine Gold (forzato come layer fisso)
  const goldBg = {
    backgroundColor: "#000",
    backgroundImage:
      "radial-gradient(circle at 30% 10%, rgba(255,215,130,0.18), transparent 60%), radial-gradient(circle at 70% 80%, rgba(212,175,55,0.18), transparent 70%), linear-gradient(135deg, #000 0%, #1a0f00 40%, #000 100%)",
    backgroundBlendMode: "screen",
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  };

  return (
    <main className="min-h-screen text-white flex items-center justify-center px-6 relative overflow-hidden">
      {/* SFONDO FISSO */}
      <div className="fixed inset-0 -z-10" style={goldBg} />

      <div className="max-w-5xl w-full text-center">
        {/* GLOW soft dietro al logo */}
        <div className="relative inline-block">
          <span
            className="pointer-events-none select-none absolute -z-10 top-1/2 left-1/2 w-[280px] h-[280px] -translate-x-1/2 -translate-y-1/2"
            style={{
              background:
                "radial-gradient(circle, rgba(212,175,55,0.28) 0%, transparent 70%)",
              filter: "blur(60px)",
              animation: "jtpGlow 4s ease-in-out infinite",
              borderRadius: "9999px",
            }}
          />
          {/* ===== BRAND LINE (flex, niente absolute) ===== */}
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
                className="w-[28px] h-[25px] relative top-[10px] left-[-6px] opacity-95 drop-shadow-[0_0_5px_rgba(0,0,0,0.4)]"
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

      {/* keyframes inline per il glow (niente file extra) */}
      <style jsx>{`
        @keyframes jtpGlow {
          0%,
          100% {
            opacity: 0.55;
            transform: translate(-50%, -50%) scale(1);
          }
          50% {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1.12);
          }
        }
      `}</style>
    </main>
  );
}
