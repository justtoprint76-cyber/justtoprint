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
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8 lg:px-10 py-24 sm:py-32 lg:py-36">
        <div className="text-center">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.38em] text-black/40">
            JUSTTOPRINT
          </p>

          <h2 className="mt-6 text-[30px] sm:text-[46px] lg:text-[56px] leading-none font-serif tracking-[0.01em]">
            First Drop
          </h2>

          <p className="mt-5 max-w-xl mx-auto text-[13px] sm:text-[15px] leading-relaxed text-black/50">
            Minimal streetwear with a quiet editorial attitude.
          </p>

          <div className="mt-12 flex items-center justify-center gap-5 sm:gap-8 text-[10px] sm:text-[11px] uppercase tracking-[0.34em]">
            <button
              type="button"
              onClick={() => setTab("men")}
              className={`transition ${
                tab === "men"
                  ? "text-black"
                  : "text-black/28 hover:text-black/55"
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
                  : "text-black/28 hover:text-black/55"
              }`}
            >
              Women
            </button>
          </div>
        </div>

        <div className="mt-20 sm:mt-24 lg:mt-28 space-y-20 sm:space-y-24 lg:space-y-32">
          {visible.map((p, index) => (
            <article key={p.id}>
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end ${
                  index % 2 === 1 ? "lg:[&_.media]:order-2 lg:[&_.info]:order-1" : ""
                }`}
              >
                <div className="media lg:col-span-8">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[#E8DED1]">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.45),_transparent_38%),linear-gradient(180deg,_#efe7dc_0%,_#e6dbce_45%,_#ddd0c0_100%)]" />

                    <div className="absolute inset-x-0 bottom-0 h-[22%] bg-gradient-to-t from-black/[0.05] to-transparent" />

                    <div className="absolute top-5 left-5 sm:top-7 sm:left-7 text-[10px] uppercase tracking-[0.3em] text-black/35">
                      {tab === "men" ? "Men" : "Women"} / {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 text-[10px] uppercase tracking-[0.28em] text-black/28">
                      JUSTTOPRINT
                    </div>
                  </div>
                </div>

                <div className="info lg:col-span-4 lg:max-w-[320px]">
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-black/32">
                    {p.subtitle}
                  </p>

                  <h3 className="mt-4 text-[28px] sm:text-[34px] lg:text-[38px] leading-[1.05] font-serif tracking-[0.01em]">
                    {p.name}
                  </h3>

                  <p className="mt-5 text-[14px] sm:text-[15px] text-black/52">
                    €{p.price.toFixed(2)}
                  </p>

                  <div className="mt-8 h-px w-16 bg-black/18" />

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
