"use client";

export default function Manifesto() {
  return (
    <section id="about" className="bg-[#F3EDE4] text-[#4A463F] px-6">
      <div className="max-w-5xl mx-auto pt-24 pb-20">
        <p className="text-[12px] tracking-[0.22em] text-[#9A9388]">ABOUT</p>

        <h2 className="mt-8 text-[38px] sm:text-[64px] leading-[1.05] tracking-[0.02em] text-[#6B6256] font-serif">
          JUSTTOPRINT is modern Punjabi streetwear — designed with respect,
          identity, and intention.
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          <div className="text-[16px] leading-[1.9] text-[#6F685E]">
            <p>
              JUSTTOPRINT is a cultural project inspired by Punjabi heritage and
              Sikh values, translated into contemporary streetwear.
            </p>
            <p className="mt-6">
              Every piece is created to feel modern, elevated, and meaningful —
              not loud, not decorative, but intentional.
            </p>
          </div>

          <div className="text-[16px] leading-[1.9] text-[#6F685E]">
            <p>
              Our designs celebrate roots: language, history, community, and the
              quiet strength of tradition.
            </p>
            <p className="mt-6">
              Symbols matter. We use them with care and context — this is not
              costume. This is identity.
            </p>
          </div>
        </div>

        <div className="mt-14 h-px w-full bg-[#D9D0C3]" />

        <div className="mt-12">
          <p className="text-[12px] tracking-[0.22em] text-[#9A9388]">VALUES</p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <Value title="Respect over trend" desc="Culture first. Always." />
            <Value title="Meaningful details" desc="Nothing is random." />
            <Value title="Quiet confidence" desc="Elevated, not loud." />
          </div>
        </div>
      </div>
    </section>
  );
}

function Value({ title, desc }) {
  return (
    <div className="rounded-2xl border border-[#D9D0C3] bg-[#F7F1E8] p-6">
      <p className="text-[14px] tracking-[0.18em] text-[#6B6256] uppercase">
        {title}
      </p>
      <p className="mt-3 text-[15px] leading-relaxed text-[#7A7267]">{desc}</p>
    </div>
  );
}
