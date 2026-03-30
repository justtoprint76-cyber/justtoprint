"use client";

import Link from "next/link";
import { useCart } from "./CartContext";

export default function Storefront() {
  const { addItem } = useCart();

  const products = [
    {
      id: "1",
      name: "JUSTTOPRINT T-Shirt",
      category: "Men / T-Shirt",
      theme: "Identity",
      description:
        "A clean essential inspired by contemporary Punjabi identity — simple, direct, and built to carry culture without excess.",
      price: 19.99,
      side: "left",
    },
    {
      id: "2",
      name: "Quiet Confidence Hoodie",
      category: "Women / Hoodie",
      theme: "Presence",
      description:
        "Designed around softness and strength, this hoodie reflects a quiet presence — understated, grounded, and intentionally modern.",
      price: 34.99,
      side: "right",
    },
    {
      id: "3",
      name: "Heritage Script T-Shirt",
      category: "Women / T-Shirt",
      theme: "Heritage",
      description:
        "A lighter editorial piece shaped by heritage references and minimal typography, balancing memory with a more refined silhouette.",
      price: 19.99,
      side: "left",
    },
    {
      id: "4",
      name: "Core Street Hoodie",
      category: "Men / Hoodie",
      theme: "Uniform",
      description:
        "Built as an everyday layer, this piece takes cues from street uniform dressing — functional, calm, and rooted in cultural continuity.",
      price: 34.99,
      side: "right",
    },
  ];

  return (
    <section id="shop" className="bg-[#F3EDE4] text-black py-8 sm:py-12">
      <div className="max-w-[1900px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* MEN / WOMEN */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-16 sm:mb-24">
          <Link href="/men" className="group block">
            <div className="relative h-[180px] sm:h-[260px] lg:h-[320px] bg-[#E8DED1] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[12px] sm:text-[18px] tracking-[0.35em] uppercase text-black">
                  Men
                </span>
              </div>

              <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 w-10 sm:w-14 h-px bg-black/25" />
            </div>
          </Link>

          <Link href="/women" className="group block">
            <div className="relative h-[180px] sm:h-[260px] lg:h-[320px] bg-[#E8DED1] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[12px] sm:text-[18px] tracking-[0.35em] uppercase text-black">
                  Women
                </span>
              </div>

              <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 w-10 sm:w-14 h-px bg-black/25" />
            </div>
          </Link>
        </div>

        {/* PRODUCTS */}
        <div className="space-y-20 sm:space-y-28 lg:space-y-32">
          {products.map((p, index) => (
            <div key={p.id} className="relative">
              {/* IMAGE */}
              <div
                className={`w-[88%] sm:w-[78%] h-[240px] sm:h-[520px] lg:h-[760px] bg-[#E8DED1] relative ${
                  p.side === "right" ? "ml-auto" : ""
                }`}
              >
                <div className="absolute top-4 sm:top-8 left-4 sm:left-8 text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-black/30">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 text-[10px] sm:text-[11px] tracking-[0.3em] uppercase text-black">
                  JUSTTOPRINT
                </div>
              </div>

              {/* TEXT BOX */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 w-[78%] sm:w-[42%] bg-[#F3EDE4] p-4 sm:p-8 lg:p-10 ${
                  p.side === "left"
                    ? "right-0 sm:right-[6%] lg:right-[8%]"
                    : "left-0 sm:left-[6%] lg:left-[8%]"
                }`}
              >
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-black/38">
                  {p.category}
                </p>

                <h3 className="mt-3 sm:mt-4 text-[28px] sm:text-[52px] lg:text-[70px] leading-[0.96] font-serif text-black">
                  {p.name}
                </h3>

                <p className="mt-4 sm:mt-6 text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-black/38">
                  {p.theme}
                </p>

                <p className="mt-3 sm:mt-4 text-[14px] sm:text-[16px] leading-relaxed text-black/58 max-w-[34ch]">
                  {p.description}
                </p>

                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() =>
                    addItem({
                      id: p.id,
                      name: p.name,
                      price: p.price,
                    })
                  }
                  className="mt-6 sm:mt-8 inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.34em] underline underline-offset-4 hover:opacity-60 transition"
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
