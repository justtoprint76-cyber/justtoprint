"use client";

import Link from "next/link";
import { useCart } from "./CartContext";

export default function Storefront() {
  const { addItem } = useCart();

  const featuredProducts = [
    {
      id: "home-1",
      name: "JUSTTOPRINT T-Shirt",
      price: 19.99,
      subtitle: "Men / T-Shirt",
    },
    {
      id: "home-2",
      name: "Quiet Confidence Hoodie",
      price: 34.99,
      subtitle: "Women / Hoodie",
    },
    {
      id: "home-3",
      name: "Heritage Script T-Shirt",
      price: 21.99,
      subtitle: "Women / T-Shirt",
    },
    {
      id: "home-4",
      name: "Core Street Hoodie",
      price: 36.99,
      subtitle: "Men / Hoodie",
    },
  ];

  return (
    <section id="shop" className="bg-[#F3EDE4] text-black">
      <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-10 py-24 sm:py-32">

        {/* HEADER */}
        <div className="text-center">
          <p className="text-[11px] uppercase tracking-[0.35em] text-black/40">
            JUSTTOPRINT
          </p>

          <h2 className="mt-6 text-[42px] sm:text-[56px] font-serif">
            First Drop
          </h2>
        </div>

        {/* MEN WOMEN BLOCK */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/men" className="group block">
            <div className="relative h-[320px] md:h-[420px] bg-[#E8DED1] flex items-center justify-center">
              <span className="text-[18px] tracking-[0.35em] uppercase group-hover:opacity-60 transition">
                Men
              </span>
            </div>
          </Link>

          <Link href="/women" className="group block">
            <div className="relative h-[320px] md:h-[420px] bg-[#E8DED1] flex items-center justify-center">
              <span className="text-[18px] tracking-[0.35em] uppercase group-hover:opacity-60 transition">
                Women
              </span>
            </div>
          </Link>
        </div>

        {/* BIG HORIZONTAL PRODUCTS */}
        <div className="mt-28 space-y-20">

          {featuredProducts.map((product, index) => (
            <div key={product.id} className="group">

              <div
                className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-10 ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >

                {/* IMAGE (ORIZZONTALE) */}
                <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px] bg-[#E8DED1] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                </div>

                {/* TEXT */}
                <div className="max-w-[420px]">

                  <p className="text-[11px] uppercase tracking-[0.3em] text-black/40">
                    {product.subtitle}
                  </p>

                  <h3 className="mt-4 text-[34px] sm:text-[44px] font-serif leading-tight">
                    {product.name}
                  </h3>

                  <p className="mt-4 text-[16px] text-black/60">
                    €{product.price.toFixed(2)}
                  </p>

                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => addItem(product)}
                    className="mt-6 text-[11px] uppercase tracking-[0.3em] border-b border-black pb-1 hover:opacity-60 transition"
                  >
                    Add to cart
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>

        {/* LINKS */}
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
