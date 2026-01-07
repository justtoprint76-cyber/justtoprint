export default function HomePage() {
  return (
    <section className="bg-[#F3EDE4] text-[#4A463F]">
      {/* CONTENITORE HERO */}
      <div
        className="
          flex flex-col items-center text-center
          pt-16 sm:pt-28
          pb-20 sm:pb-32
        "
      >
        {/* LOGO */}
        <img
          src="/justtoprint-logo.png"
          alt="JUSTTOPRINT"
          className="
            w-[300px] sm:w-[720px]
            mb-6 sm:mb-10
          "
        />

        {/* TAGLINE */}
        <p
          className="
            text-[13px] sm:text-[14px]
            tracking-[0.3em]
            text-[#6F6A60]
            mb-3
          "
        >
          MODERN PUNJABI STREETWEAR
        </p>

        <p
          className="
            text-[15px] sm:text-[16px]
            text-[#7A7267]
            max-w-[36ch]
            leading-relaxed
          "
        >
          A cultural project inspired by Punjabi heritage.
          <br />
          Collection coming soon.
        </p>
      </div>
    </section>
  );
}
