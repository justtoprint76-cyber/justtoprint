"use client";

import { useState } from "react";
import { useCart } from "./CartContext";

export default function Storefront() {
  const { addItem } = useCart();
  const [tab, setTab] = useState("men");

  const products = {
    men: [
      {
        id: "1",
        name: "JUSTTOPRINT T-Shirt",
        price: 19.99,
      },
      {
        id: "2",
        name: "Minimal Crest Cap",
        price: 22.99,
      },
    ],
    women: [
      {
        id: "3",
        name: "JUSTTOPRINT T-Shirt",
        price: 19.99,
      },
      {
        id: "4",
        name: "Minimal Crest Cap",
        price: 22.99,
      },
    ],
  };

  const visible = products[tab];

  return (
    <section id="shop" className="bg-[#F3EDE4] text-black">
      <div className="max-w-3xl mx-auto px-6 py-20">

        {/* HEADER */}
        <div className="text-center">
          <p className="text-[11px] tracking-[0.35em] text-black/50">
            JUSTTOPRINT
          </p>

          <h2 className="mt-6 text-2xl font-serif">
            First Drop
          </h2>

          {/* TABS PREMIUM */}
          <div className="mt-12 flex justify-center gap-8 text-[11px] tracking-[0.35em] uppercase">
            <span
              onClick={() => setTab("men")}
              className={`cursor-pointer transition ${
                tab === "men"
                  ? "text-black"
                  : "text-black/30 hover:text-black/60"
              }`}
            >
              Men
            </span>

            <span className="text-black/20">/</span>

            <span
              onClick={() => setTab("women")}
              className={`cursor-pointer transition ${
                tab === "women"
                  ? "text-black"
                  : "text-black/30 hover:text-black/60"
              }`}
            >
              Women
            </span>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="mt-20 space-y-24">
          {visible.map((p) => (
            <div key={p.id} className="text-center">

              {/* IMAGE (placeholder) */}
              <div className="w-full h-[320px] bg-[#EDE5DA] mb-6" />

              {/* NAME */}
              <h3 className="text-lg font-serif">
                {p.name}
              </h3>

              {/* PRICE */}
              <p className="mt-2 text-sm text-black/60">
                €{p.price.toFixed(2)}
              </p>

              {/* BUTTON */}
              <button
                onClick={() => addItem(p)}
                className="mt-6 text-[11px] tracking-[0.35em] uppercase border-b border-black pb-1 hover:opacity-60 transition"
              >
                Add to cart
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
