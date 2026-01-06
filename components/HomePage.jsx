"use client";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col items-center text-center px-6 mt-6 sm:mt-2">
      
      {/* LOGO */}
      <div
        style={{
          width: "100%",
          maxWidth: "1150px",
          height: "32vh",        // ⬅️ controlla quanto spazio occupa
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

      {/* TESTO SOTTO (VICINO AL LOGO) */}
      <div className="mt-2 sm:mt-4">
        <p className="tracking-[0.35em] text-[11px] sm:text-[13px] text-neutral-500">
          MODERN PUNJABI STREETWEAR
        </p>

        <p className="mt-2 text-xs sm:text-sm text-neutral-400 max-w-xl mx-auto">
          A cultural project inspired by Punjabi heritage.
          <br />
          Collection coming soon.
        </p>
      </div>

    </main>
  );
}

