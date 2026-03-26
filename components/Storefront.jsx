"use client";

import { useState } from "react";
import { useCart } from "./CartContext";

export default function Storefront() {
  const { addItem } = useCart();
  const [tab, setTab] = useState("men");

  const products = {
    men: [
      {
        id: "men-1",
        name: "JUSTTOPRINT T-Shirt",
        price: 19.99,
        subtitle: "First drop essential",
      },
      {
        id: "men-2",
        name: "Minimal Crest Cap",
        price: 22.99,
        subtitle: "Everyday uniform",
      },
    ],
    women: [
      {
        id: "women-1",
        name: "JUSTTOPRINT T-Shirt",
        price: 19.99,
        subtitle: "First drop essential",
      },
      {
        id: "women-2",
        name: "Minimal Crest Cap",
        price: 22.99,
        subtitle: "Everyday uniform",
      },
    ],
  };

  const visible = products[tab];

  return (
    <section id="shop" className="bg-[#F3EDE4] text-black">
      <div className="max-w-4xl mx-auto px-6 sm:px-8 py-24 sm:py-32">
        <div className="text-center">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.38em] text-black/45">
            JUSTTOPRINT
          </p>

          <h2 className="mt-6 text-[28px] sm:text-[40px] leading-none font-serif tracking-[0.02em]">
            First Drop
          </h2>

          <p className="mt-5 max-w-xl mx-auto text-[13px] sm:text-[15px] leading-relaxed text-black/55">
            Minimal streetwear with a quiet editorial attitude.
          </p>

          <div className="mt-12 flex items-center justify-center gap-5 sm:gap-8 text-[10px] sm:text-[11px] uppercase tracking-[0.34em]">
            <button
              type="button"
              onClick={() => setTab("men")}
              className={`transition ${
                tab === "men"
                  ? "text-black"
                  : "text-black/30 hover:text-black/60"
              }`}
            >
              Men
            </button>

            <span className="text-black/20">/</span>

            <button
              type="button"
              onClick={() => setTab("women")}
              className={`transition ${
                tab === "women"
                  ? "text-black"
                  : "text-black/30 hover:text-black/60"
              }`}
            >
              Women
            </button>
          </div>
        </div>

        <div className="mt-20 sm:mt-24 space-y-20 sm:space-y-28">
          {visible.map((p, index) => (
            <article key={p.id} className="group">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end">
                <div className="md:col-span-8">
                  <div className="relative overflow-hidden bg-[#E9E0D4] aspect-[4/5]">
                    <div className="absolute inset-0 transition duration-500 group-hover:scale-[1.02]">
                      <div className="h-full w-full bg-gradient-to-b from-[#EEE6DB] to-[#E3D8CB]" />
                    </div>

                    <div className="absolute top-5 left-5 sm:top-6 sm:left-6 text-[10px] uppercase tracking-[0.28em] text-black/40">
                      {tab === "men" ? "Men" : "Women"} / {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-4 md:pb-2">
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-black/35">
                    {p.subtitle}
                  </p>

                  <h3 className="mt-3 text-[24px] sm:text-[30px] leading-tight font-serif">
                    {p.name}
                  </h3>

                  <p className="mt-4 text-[14px] sm:text-[15px] text-black/55">
                    €{p.price.toFixed(2)}
                  </p>

                  <button
                    type="button"
                    onClick={() => addItem(p)}
                    className="mt-8 inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.34em] text-black border-b border-black pb-1 hover:opacity-60 transition"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
