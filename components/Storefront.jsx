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
          <p className="text-[11px] tracking-[0.3em] text-black/50">
            JUSTTOPRINT
          </p>

          <h2 className="mt-6 text-2xl font-serif">
            First Drop
          </h2>

          {/* TABS */}
          <div className="mt-10 flex justify-center gap-10 text-[12px] tracking-[0.3em]">
            <button
              onClick={() => setTab("men")}
              className={tab === "men" ? "text-black" : "text-black/40"}
            >
              MEN
            </button>

            <button
              onClick={() => setTab("women")}
              className={tab === "women" ? "text-black" : "text-black/40"}
            >
              WOMEN
            </button>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="mt-20 space-y-24">
          {visible.map((p) => (
            <div key={p.id} className="text-center">

              {/* IMAGE PLACEHOLDER */}
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
                className="mt-6 text-[11px] tracking-[0.3em] uppercase border-b border-black pb-1 hover:opacity-60 transition"
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
