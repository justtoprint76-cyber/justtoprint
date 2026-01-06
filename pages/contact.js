import Header from "../components/Header";

export default function Contact() {
  return (
    <main className="min-h-screen bg-[#F3EDE4] text-[#4A463F] px-6">
      <Header />

      <div className="max-w-3xl mx-auto pb-20">
        <p className="text-[12px] tracking-[0.22em] text-[#9A9388]">CONTACT</p>

        <h1
          className="mt-8 text-[34px] sm:text-[40px] leading-[1.2] tracking-[0.04em]"
          style={{ fontFamily: "serif", color: "#6B6256" }}
        >
          Let’s connect.
        </h1>

        <p className="mt-10 text-[16px] leading-relaxed text-[#5A544B] max-w-[62ch]">
          For collaborations, custom requests, or press inquiries, feel free to reach
          out. We reply as soon as possible.
        </p>

        <div className="mt-12 space-y-6">
          {/* EMAIL */}
          <div className="border-t border-[#D9D0C3] pt-6">
            <p className="text-[12px] tracking-[0.22em] text-[#8A8174]">EMAIL</p>
            <a
              href="mailto:justtoprint76@gmail.com"
              className="inline-block mt-3 text-[16px] tracking-[0.06em] text-[#4A463F] no-underline"
            >
              info@justtoprint.com
            </a>
            <p className="mt-2 text-[13px] text-[#7A7267]">
              Business & customer care
            </p>
          </div>

          {/* INSTAGRAM */}
          <div className="border-t border-[#D9D0C3] pt-6">
            <p className="text-[12px] tracking-[0.22em] text-[#8A8174]">SOCIAL</p>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-3 text-[16px] tracking-[0.06em] text-[#4A463F] no-underline"
            >
              Instagram
            </a>
            <p className="mt-2 text-[13px] text-[#7A7267]">
              Updates, drops & behind the scenes
            </p>
          </div>
        </div>

        <a
          href="/"
          className="inline-block mt-12 text-[13px] tracking-[0.18em] text-[#8A8174] no-underline"
        >
          ← BACK HOME
        </a>
      </div>
    </main>
  );
}
