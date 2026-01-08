"use client";
import { useState } from "react";

export default function Storefront() {
  const [qty, setQty] = useState(1);

  const product = {
    name: "JUSTTOPRINT — First Drop Tee",
    price: 29.9,
    desc: "Premium cotton t-shirt. Clean fit, cultural identity. Part of the first JUSTTOPRINT collection.",
    tag: "FIRST DROP",
  };

  async function goToCheckout() {
    try {
      const payload = {
        items: [
          {
            name: product.name,
            price: product.price,
            qty,
            image: null,
          },
        ],
      };

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data?.url) window.location.href = data.url;
      else alert("Errore durante il checkout");
    } catch (err) {
      console.error(err);
      alert("Errore imprevisto");
    }
  }

  return (
    <section className="bg-[#F3EDE4] text-[#4A463F]">
      <div className="max-w-3xl mx-auto">
        {/* PRODUCT */}
        <article className="rounded-2xl border border-[#D9D0C3] bg-[#F7F2EA] p-8 sm:p-10">
          <p className="text-[12px] tracking-[0.22em] text-[#9A9388]">
            JUSTTOPRINT
          </p>

          <div className="mt-4 flex items-start justify-between gap-4">
            <h3
              className="text-[26px] sm:text-[30px] leading-[1.2] tracking-[0.02em]"
              style={{ fontFamily: "serif", color: "#6B6256" }}
            >
              {product.name}
            </h3>

            <span className="text-[11px] tracking-[0.22em] text-[#6F685E] border border-[#D9D0C3] rounded-full px-4 py-1">
              {product.tag}
            </span>
          </div>

          <p className="mt-6 text-[15px] leading-relaxed text-[#7A7267] max-w-[60ch]">
            {product.desc}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <p className="text-[16px] tracking-[0.04em] text-[#6F685E]">
              €{product.price.toFixed(2)}
            </p>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  className="w-10 h-10 rounded-full border border-[#D9D0C3] hover:bg-[#EFE7DC] transition"
                >
                  −
                </button>
                <span className="w-6 text-center text-[#6F685E]">
                  {qty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="w-10 h-10 rounded-full border border-[#D9D0C3] hover:bg-[#EFE7DC] transition"
                >
                  +
                </button>
              </div>

              <button
                onClick={goToCheckout}
                className="rounded-full bg-[#6F685E] text-[#F3EDE4] px-8 py-3 text-[12px] tracking-[0.18em] uppercase hover:opacity-90 transition"
              >
                Checkout
              </button>
            </div>
          </div>

          <p className="mt-6 text-[11px] text-[#9A9388]">
            This is a preview of the first JUSTTOPRINT collection.
          </p>
        </article>
      </div>
    </section>
  );
}
