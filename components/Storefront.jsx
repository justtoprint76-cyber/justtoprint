"use client";

import Link from "next/link";
import { useCart } from "./CartContext";

export default function Storefront() {
  const { addItem } = useCart();

  const featuredProducts = [
    {
      id: "home-tee-01",
      name: "JUSTTOPRINT T-Shirt",
      price: 19.99,
      subtitle: "Men / T-Shirt",
    },
    {
      id: "home-hoodie-01",
      name: "Quiet Confidence Hoodie",
      price: 34.99,
      subtitle: "Women / Hoodie",
    },
    {
      id: "home-tee-02",
      name: "Heritage Script T-Shirt",
      price: 21.99,
      subtitle: "Women / T-Shirt",
    },
    {
      id: "home-hoodie-02",
      name: "Core Street Hoodie",
      price: 36.99,
      subtitle: "Men / Hoodie",
    },
  ];

  return (
    <section id="shop" className="bg-[#F3EDE4] text-black">
      <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-10 py-24 sm:py-32">
        <div className="text-center">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.38em] text-black/40">
            JUSTTOPRINT
          </p>

          <h2 className="mt-6 text-[30px] sm:text-[46px] lg:text-[56px] leading-none font-serif tracking-[0.01em]">
            First Drop
          </h2>

          <p className="mt-5 max-w-xl mx-auto text-[13px] sm:text-[15px] leading-relaxed text-black/50">
            A curated preview of the collection — minimal silhouettes, quiet attitude,
            everyday essentials.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-14 sm:gap-x-8 sm:gap-y-16">
          {featuredProducts.map((product, index) => (
            <article key={product.id} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-[#E8DED1]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.45),_transparent_38%),linear-gradient(180deg,_#efe7dc_0%,_#e6dbce_45%,_#ddd0c0_100%)]" />

                <div className="absolute inset-x-0 bottom-0 h-[22%] bg-gradient-to-t from-black/[0.05] to-transparent" />

                <div className="absolute top-5 left-5 sm:top-7 sm:left-7 text-[10px] uppercase tracking-[0.3em] text-black/35">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="absolute bottom-5 left-5 sm:bottom-7 sm:left-7 text-[10px] uppercase tracking-[0.28em] text-black/28">
                  JUSTTOPRINT
                </div>
              </div>

              <div className="mt-5">
                <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-black/32">
                  {product.subtitle}
                </p>

                <h3 className="mt-3 text-[24px] sm:text-[30px] leading-[1.08] font-serif tracking-[0.01em]">
                  {product.name}
                </h3>

                <p className="mt-4 text-[14px] sm:text-[15px] text-black/52">
                  €{product.price.toFixed(2)}
                </p>

                <div className="mt-6 h-px w-16 bg-black/18" />

                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => addItem(product)}
                  className="appearance-none bg-transparent border-0 outline-none ring-0 shadow-none mt-6 inline-block text-[10px] sm:text-[11px] uppercase tracking-[0.34em] text-black border-b border-black pb-1 hover:opacity-60 transition"
                >
                  Add to cart
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 sm:mt-24 flex items-center justify-center gap-6 sm:gap-10 text-[10px] sm:text-[11px] uppercase tracking-[0.34em]">
          <Link
            href="/men"
            className="border-b border-black pb-1 hover:opacity-60 transition"
          >
            Explore Men
          </Link>

          <Link
            href="/women"
            className="border-b border-black pb-1 hover:opacity-60 transition"
          >
            Explore Women
          </Link>
        </div>
      </div>
    </section>
  );
}
