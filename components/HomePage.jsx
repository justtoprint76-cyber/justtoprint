export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden pt-24 sm:pt-0 bg-[#F3EDE4]">
      <div className="max-w-5xl w-full text-center flex flex-col items-center">
        {/* LOGO */}
        <img
          src="/justtoprint-logo.png"
          alt="JUSTTOPRINT"
          className="w-[260px] sm:w-[420px]"
        />

        {/* TAGLINE */}
        <p className="mt-10 text-[12px] tracking-[0.32em] text-[#8E867B]">
          MODERN PUNJABI STREETWEAR
        </p>

        {/* DESCRIZIONE */}
        <p className="mt-4 text-sm text-[#9A9388] max-w-md leading-relaxed">
          A cultural project inspired by Punjabi heritage.
          <br />
          Collection coming soon.
        </p>
      </div>
    </main>
  );
}
