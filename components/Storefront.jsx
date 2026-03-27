"use client";

import Link from "next/link";
import { useCart } from "./CartContext";

export default function Storefront() {
  const { addItem } = useCart();

  const featuredProducts = [
    {
      id: "home-men-tee",
      name: "JUSTTOPRINT T-Shirt",
      category: "Men / T-Shirt",
      theme: "Identity",
      description:
        "A clean essential inspired by contemporary Punjabi identity — simple, direct, and built to carry culture without excess.",
      cta: "Add to cart",
      align: "right",
    },
    {
      id: "home-women-hoodie",
      name: "Quiet Confidence Hoodie",
      category: "Women / Hoodie",
      theme: "Presence",
      description:
        "Designed around softness and strength, this hoodie reflects a quiet presence — understated, grounded, and intentionally modern.",
      cta: "Add to cart",
      align: "left",
    },
    {
      id: "home-women-tee",
      name: "Heritage Script T-Shirt",
      category: "Women / T-Shirt",
      theme: "Heritage",
      description:
        "A lighter editorial piece shaped by heritage references and minimal typography, balancing memory with a more refined silhouette.",
      cta: "Add to cart",
      align: "right",
    },
    {
      id: "home-men-hoodie",
      name: "Core Street Hoodie",
      category: "Men / Hoodie",
      theme: "Uniform",
      description:
        "Built as an everyday layer, this piece takes cues from street uniform dressing — functional, calm, and rooted in cultural continuity.",
      cta: "Add to cart",
      align: "left",
    },
  ];

  return (
    <section id="shop" className="bg-[#F3EDE4] text-black">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-[11px] uppercase tracking-[0.35em] text-black/40">
            JUSTTOPRINT
          </p>

          <h2 className="mt-6 text-[40px] sm:text-[58px] lg:text-[72px] leading-none font-serif">
            First Drop
          </h2>

          <p className="mt-5 text-[14px] sm:text-[16px] leading-relaxed text-black/50">
            A curated preview of the collection — minimal silhouettes, quiet attitude,
            everyday essentials.
          </p>
        </div>

        {/* MEN / WOMEN BLOCKS */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1800px] mx-auto">
          <Link href="/men" className="group block">
            <div className="relative h-[360px] sm:h-[420px] lg:h-[520px] overflow-hidden bg-[#E8DED1]">
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-black/5" />

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[18px] md:text-[22px] tracking-[0.35em] uppercase text-black group-hover:opacity-65 transition">
                  Men
                </span>
              </div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-14 h-[1px] bg-black/30 group-hover:w-24 transition-all duration-300" />
            </div>
          </Link>

          <Link href="/women" className="group block">
            <div className="relative h-[360px] sm:h-[420px] lg:h-[520px] overflow-hidden bg-[#E8DED1]">
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-black/5" />

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[18px] md:text-[22px] tracking-[0.35em] uppercase text-black group-hover:opacity-65 transition">
                  Women
                </span>
              </div>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-14 h-[1px] bg-black/30 group-hover:w-24 transition-all duration-300" />
            </div>
          </Link>
        </div>

        {/* EDITORIAL FEATURES */}
        <div className="mt-28 space-y-10 sm:space-y-14 lg:space-y-16">
          {featuredProducts.map((product, index) => {
            const isRight = product.align === "right";

            return (
              <article key={product.id} className="w-full">
                <div className="relative w-full max-w-[1900px] mx-auto h-[520px] sm:h-[640px] lg:h-[760px] xl:h-[860px] overflow-hidden bg-[#E8DED1]">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.18)_0%,_rgba(0,0,0,0.04)_100%)]" />

                  <div className="absolute top-6 left-6 sm:top-8 sm:left-8 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-black/35">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="absolute bottom-6 left-6 sm:bottom-8 sm:left-8 text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-black/28">
                    JUSTTOPRINT
                  </div>

                  <div
                    className={`absolute top-1/2 -translate-y-1/2 w-[82%] sm:w-[56%] lg:w-[40%] xl:w-[34%] ${
                      isRight
                        ? "right-6 sm:right-8 lg:right-12 text-right"
                        : "left-6 sm:left-8 lg:left-12 text-left"
                    }`}
                  >
                    <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-black/38">
                      {product.category}
                    </p>

                    <h3 className="mt-4 text-[40px] sm:text-[58px] lg:text-[78px] xl:text-[96px] leading-[0.94] font-serif text-black">
                      {product.name}
                    </h3>

                    <p className="mt-6 text-[10px] sm:text-[11px] uppercase tracking-[0.32em] text-black/38">
                      {product.theme}
                    </p>

                    <p className="mt-4 text-[14px] sm:text-[16px] lg:text-[17px] leading-relaxed text-black/58">
                      {product.description}
                    </p>

                    <button
                      type="button"
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() =>
                        addItem({
                          id: product.id,
                          name: product.name,
                          price:
                            product.id === "home-men-tee" || product.id === "home-women-tee"
                              ? 19.99
                              : 34.99,
                        })
                      }
                      className={`mt-8 inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.34em] border-b border-black pb-1 hover:opacity-60 transition ${
                        isRight ? "ml-auto" : ""
                      }`}
                    >
                      {product.cta}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-24 flex justify-center gap-10 text-[11px] uppercase tracking-[0.3em]">
          <Link href="/men" className="border-b border-black pb-1 hover:opacity-60">
            Explore Men
          </Link>

          <Link href="/women" className="border-b border-black pb-1 hover:opacity-60">
            Explore Women
          </Link>
        </div>
      </div>
    </section>
  );
}
