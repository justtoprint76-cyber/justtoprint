"use client";

export default function Values() {
  return (
    <section id="about" className="bg-[#F3EDE4] text-[#4A463F] px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <p className="text-[12px] tracking-[0.22em] text-[#9A9388] text-center">
          ABOUT THE PROJECT
        </p>

        <h2
          className="mt-6 text-center text-[28px] sm:text-[34px] leading-[1.2] tracking-[0.04em]"
          style={{ fontFamily: "serif", color: "#6B6256" }}
        >
          Culture, not costume.
        </h2>

        <p className="mt-8 text-[15px] leading-relaxed text-[#7A7267] max-w-[70ch] mx-auto text-center">
          JUSTTOPRINT is a cultural streetwear project inspired by Punjabi heritage —
          designed with intention, made to be worn with pride.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-[#D9D0C3] bg-[#F7F2EA] p-6">
            <p className="text-[12px] tracking-[0.22em] text-[#9A9388]">01</p>
            <h3 className="mt-3 text-[16px] tracking-[0.04em]" style={{ color: "#6B6256" }}>
              Respect over trend
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-[#7A7267]">
              Design that lasts. Not a moment — a statement.
            </p>
          </div>

          <div className="rounded-2xl border border-[#D9D0C3] bg-[#F7F2EA] p-6">
            <p className="text-[12px] tracking-[0.22em] text-[#9A9388]">02</p>
            <h3 className="mt-3 text-[16px] tracking-[0.04em]" style={{ color: "#6B6256" }}>
              Roots, reimagined
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-[#7A7267]">
              Punjabi identity — modern silhouette, editorial energy.
            </p>
          </div>

          <div className="rounded-2xl border border-[#D9D0C3] bg-[#F7F2EA] p-6">
            <p className="text-[12px] tracking-[0.22em] text-[#9A9388]">03</p>
            <h3 className="mt-3 text-[16px] tracking-[0.04em]" style={{ color: "#6B6256" }}>
              Made with intention
            </h3>
            <p className="mt-3 text-[14px] leading-relaxed text-[#7A7267]">
              Minimal, premium, and culturally grounded.
            </p>
          </div>
        </div>

        <div className="mt-16 h-px w-full bg-[#D9D0C3]" />
      </div>
    </section>
  );
}
