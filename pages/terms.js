export default function Terms() {
  return (
    <main className="min-h-screen bg-[#F3EDE4] text-[#4A463F] px-6 py-20">
      <div className="max-w-3xl mx-auto">
        <p className="text-[12px] tracking-[0.22em] text-[#9A9388]">LEGAL</p>
        <h1 className="mt-6 text-[34px] sm:text-[44px] font-serif text-[#6B6256]">
          Terms & Conditions
        </h1>

        <p className="mt-8 text-[15px] leading-relaxed text-[#7A7267]">
          By accessing this website you agree to these terms. Products and
          collections may change at any time.
        </p>

        <h2 className="mt-10 text-[18px] font-serif text-[#6B6256]">
          Orders
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-[#7A7267]">
          When the store is live, orders will be processed via Stripe. You will
          receive an order confirmation after payment is completed.
        </p>

        <h2 className="mt-10 text-[18px] font-serif text-[#6B6256]">
          Availability
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-[#7A7267]">
          Some items may be marked as “coming soon” and are not yet available
          for purchase.
        </p>

        <h2 className="mt-10 text-[18px] font-serif text-[#6B6256]">
          Contact
        </h2>
        <p className="mt-3 text-[15px] leading-relaxed text-[#7A7267]">
          Questions? Email us at{" "}
          <a className="underline" href="mailto:justtoprint76@gmail.com">
            justtoprint76@gmail.com
          </a>
          .
        </p>
      </div>
    </main>
  );
}
