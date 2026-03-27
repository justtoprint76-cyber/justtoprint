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
      price: 19.99,
      imageSide: "left",
    },
    {
      id: "home-women-hoodie",
      name: "Quiet Confidence Hoodie",
      category: "Women / Hoodie",
      theme: "Presence",
      description:
        "Designed around softness and strength, this hoodie reflects a quiet presence — understated, grounded, and intentionally modern.",
      price: 34.99,
      imageSide: "right",
    },
    {
      id: "home-women-tee",
      name: "Heritage Script T-Shirt",
      category: "Women / T-Shirt",
      theme: "Heritage",
      description:
        "A lighter editorial piece shaped by heritage references and minimal typography, balancing memory with a more refined silhouette.",
      price: 19.99,
      imageSide: "left",
    },
    {
      id: "home-men-hoodie",
      name: "Core Street Hoodie",
      category: "Men / Hoodie",
      theme: "Uniform",
      description:
        "Built as an everyday layer, this piece takes cues from street uniform dressing — functional, calm, and rooted in cultural continuity.",
      price: 34.99,
      imageSide: "right",
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

        {/* MEN / WOMEN - mobile affiancati, desktop uguale a prima */}
        <div className="mt-12 sm:mt-20 grid grid-cols-2 md:grid-cols-2 gap-4 sm:gap-6 max-w-[1800px] mx-auto">
          <Link href="/men" className="group block">
            <div className="relative h-[180px] sm:h-[360px] lg:h-[520px] overflow-hidden bg-[#E8DED1]">
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-black/5" />

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[12px] md:text-[22px] tracking-[0.35em] uppercase text-black group-hover:opacity-65 transition">
                  Men
                </span>
              </div>

              <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 w-10 sm:w-14 h-[1px] bg-black/30 group-hover:w-20 sm:group-hover:w-24 transition-all duration-300" />
            </div>
          </Link>

          <Link href="/women" className="group block">
            <div className="relative h-[180px] sm:h-[360px] lg:h-[520px] overflow-hidden bg-[#E8DED1]">
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-black/5" />

              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[12px] md:text-[22px] tracking-[0.35em] uppercase text-black group-hover:opacity-65 transition">
                  Women
                </span>
              </div>

              <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 w-10 sm:w-14 h-[1px] bg-black/30 group-hover:w-20 sm:group-hover:w-24 transition-all duration-300" />
            </div>
          </Link>
        </div>

        {/* EDITORIAL FEATURES */}
        <div className="mt-16 sm:mt-28 space-y-14 sm:space-y-28 lg:space-y-32 max-w-[1900px] mx-auto">
          {featuredProducts.map((product, index) => {
            const imageLeft = product.imageSide === "left";

            return (
              <article key={product.id}>
                {imageLeft ? (
                  <>
                    {/* MOBILE */}
                    <div className="sm:hidden relative">
                      <div className="w-[88%]">
                        <div className="relative h-[240px] overflow-hidden bg-[#E8DED1]">
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.16)_0%,_rgba(0,0,0,0.04)_100%)]" />

                          <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.3em] text-black/35">
                            {String(index + 1).padStart(2, "0")}
                          </div>

                          <div className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.3em] text-black/28">
                            JUSTTOPRINT
                          </div>
                        </div>
                      </div>

                      <div className="relative z-10 -mt-8 ml-auto w-[78%]">
                        <div className="bg-[#F3EDE4] p-4">
                          <p className="text-[10px] uppercase tracking-[0.32em] text-black/38">
                            {product.category}
                          </p>

                          <h3 className="mt-3 text-[28px] leading-[0.96] font-serif text-black">
                            {product.name}
                          </h3>

                          <p className="mt-4 text-[10px] uppercase tracking-[0.32em] text-black/38">
                            {product.theme}
                          </p>

                          <p className="mt-3 text-[14px] leading-relaxed text-black/58">
                            {product.description}
                          </p>

                          <button
                            type="button"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() =>
                              addItem({
                                id: product.id,
                                name: product.name,
                                price: product.price,
                              })
                            }
                            className="mt-6 inline-block text-[10px] uppercase tracking-[0.34em] underline underline-offset-4 hover:opacity-60 transition"
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* DESKTOP - identico */}
                    <div className="hidden sm:grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-y-0 items-center">
                      <div className="lg:col-span-8">
                        <div className="relative h-[560px] lg:h-[760px] xl:h-[860px] overflow-hidden bg-[#E8DED1]">
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.16)_0%,_rgba(0,0,0,0.04)_100%)]" />

                          <div className="absolute top-8 left-8 text-[11px] uppercase tracking-[0.3em] text-black/35">
                            {String(index + 1).padStart(2, "0")}
                          </div>

                          <div className="absolute bottom-8 left-8 text-[11px] uppercase tracking-[0.3em] text-black/28">
                            JUSTTOPRINT
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-4 lg:-ml-20 xl:-ml-28 relative z-10">
                        <div className="bg-[#F3EDE4] p-8 lg:p-10">
                          <p className="text-[11px] uppercase tracking-[0.32em] text-black/38">
                            {product.category}
                          </p>

                          <h3 className="mt-4 text-[52px] lg:text-[64px] xl:text-[74px] leading-[0.96] font-serif text-black">
                            {product.name}
                          </h3>

                          <p className="mt-6 text-[11px] uppercase tracking-[0.32em] text-black/38">
                            {product.theme}
                          </p>

                          <p className="mt-4 text-[16px] lg:text-[17px] leading-relaxed text-black/58 max-w-[34ch]">
                            {product.description}
                          </p>

                          <button
                            type="button"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() =>
                              addItem({
                                id: product.id,
                                name: product.name,
                                price: product.price,
                              })
                            }
                            className="mt-8 inline-block text-[11px] uppercase tracking-[0.34em] underline underline-offset-4 hover:opacity-60 transition"
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* MOBILE */}
                    <div className="sm:hidden relative">
                      <div className="w-[88%] ml-auto">
                        <div className="relative h-[240px] overflow-hidden bg-[#E8DED1]">
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.16)_0%,_rgba(0,0,0,0.04)_100%)]" />

                          <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.3em] text-black/35">
                            {String(index + 1).padStart(2, "0")}
                          </div>

                          <div className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.3em] text-black/28">
                            JUSTTOPRINT
                          </div>
                        </div>
                      </div>

                      <div className="relative z-10 -mt-8 w-[78%]">
                        <div className="bg-[#F3EDE4] p-4 text-left">
                          <p className="text-[10px] uppercase tracking-[0.32em] text-black/38">
                            {product.category}
                          </p>

                          <h3 className="mt-3 text-[28px] leading-[0.96] font-serif text-black">
                            {product.name}
                          </h3>

                          <p className="mt-4 text-[10px] uppercase tracking-[0.32em] text-black/38">
                            {product.theme}
                          </p>

                          <p className="mt-3 text-[14px] leading-relaxed text-black/58">
                            {product.description}
                          </p>

                          <button
                            type="button"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() =>
                              addItem({
                                id: product.id,
                                name: product.name,
                                price: product.price,
                              })
                            }
                            className="mt-6 inline-block text-[10px] uppercase tracking-[0.34em] underline underline-offset-4 hover:opacity-60 transition"
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* DESKTOP - identico */}
                    <div className="hidden sm:grid grid-cols-1 lg:grid-cols-12 gap-y-8 lg:gap-y-0 items-center">
                      <div className="lg:col-span-4 lg:-mr-20 xl:-mr-28 relative z-10 order-2 lg:order-1">
                        <div className="bg-[#F3EDE4] p-8 lg:p-10 text-left">
                          <p className="text-[11px] uppercase tracking-[0.32em] text-black/38">
                            {product.category}
                          </p>

                          <h3 className="mt-4 text-[52px] lg:text-[64px] xl:text-[74px] leading-[0.96] font-serif text-black">
                            {product.name}
                          </h3>

                          <p className="mt-6 text-[11px] uppercase tracking-[0.32em] text-black/38">
                            {product.theme}
                          </p>

                          <p className="mt-4 text-[16px] lg:text-[17px] leading-relaxed text-black/58 max-w-[34ch]">
                            {product.description}
                          </p>

                          <button
                            type="button"
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={() =>
                              addItem({
                                id: product.id,
                                name: product.name,
                                price: product.price,
                              })
                            }
                            className="mt-8 inline-block text-[11px] uppercase tracking-[0.34em] underline underline-offset-4 hover:opacity-60 transition"
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>

                      <div className="lg:col-span-8 order-1 lg:order-2">
                        <div className="relative h-[560px] lg:h-[760px] xl:h-[860px] overflow-hidden bg-[#E8DED1]">
                          <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(255,255,255,0.16)_0%,_rgba(0,0,0,0.04)_100%)]" />

                          <div className="absolute top-8 left-8 text-[11px] uppercase tracking-[0.3em] text-black/35">
                            {String(index + 1).padStart(2, "0")}
                          </div>

                          <div className="absolute bottom-8 left-8 text-[11px] uppercase tracking-[0.3em] text-black/28">
                            JUSTTOPRINT
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </article>
            );
          })}
        </div>

        <div className="mt-16 sm:mt-24 flex justify-center gap-6 sm:gap-10 text-[10px] sm:text-[11px] uppercase tracking-[0.3em]">
          <Link href="/men" className="border-b border-black pb-1 hover:opacity-60 transition">
            Explore Men
          </Link>

          <Link href="/women" className="border-b border-black pb-1 hover:opacity-60 transition">
            Explore Women
          </Link>
        </div>
      </div>
    </section>
  );
}
