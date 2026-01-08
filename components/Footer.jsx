"use client";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#F3EDE4] px-6 pb-16">
      <div className="max-w-5xl mx-auto pt-12 border-t border-[#D9D0C3]">
        {/* CONTACT */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-[12px] tracking-[0.22em] text-[#9A9388] uppercase">
            Contact
          </p>

          <a
            href="mailto:justtoprint76@gmail.com"
            className="text-[14px] text-[#7A7267] hover:text-[#4A463F] transition"
          >
            justtoprint76@gmail.com
          </a>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#9A9388]">
            © {new Date().getFullYear()} JUSTTOPRINT
          </p>

          <div className="flex items-center gap-6 text-xs text-[#9A9388]">
            <a
              href="/privacy"
              className="hover:text-[#4A463F] transition"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="hover:text-[#4A463F] transition"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
