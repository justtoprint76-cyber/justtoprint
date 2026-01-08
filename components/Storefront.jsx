"use client";

import { useCart } from "./CartContext";

export default function Storefront() {
  const { addItem } = useCart();

  // PRODOTTI (poi ne aggiungi quanti vuoi)
  const products = [
    { id: "tee-jtp", name: "JUSTTOPRINT T-Shirt", price: 19.99 },
    { id: "hoodie-jtp", name: "JUSTTOPRINT Hoodie", price: 34.99 },
    { id: "cap-crest", name: "Minimal Crest Cap", price: 22.99 },
  ];

  return (
    <section className="py-10">
      <div className="text-center mb-10">
        <p className="text-[12px] tracking-[0.22em] text-[#9A9388] uppercase">
          Shop
        </p>
        <h3
          className="mt-4 text-[24px] sm:text-[30px] tracking-[0.06em]"
          style={{ fontFamily: "serif", color: "#6B6256" }}
        >
          JUSTTOPRINT Store
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {products.map((p) => (
          <div
            key={p.id}
            className="rounded-2xl border border-[#D9D0C3] bg-[#F7F1EA] p-6 text-center"
          >
            <p className="text-[12px] tracking-[0.18em] uppercase text-[#6B6256]">
              {p.name}
            </p>
            <p className="mt-3 text-sm text-[#7A7267]">€{p.price}</p>

            <button
              onClick={() => addItem(p)}
              className="mt-6 rounded-full bg-[#BDA56A] text-[#2E2A22] px-6 py-3 text-[12px] tracking-[0.18em] uppercase hover:brightness-95 transition"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
