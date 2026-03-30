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
      description:
        "A clean essential inspired by contemporary Punjabi identity — simple, direct, and built to carry culture without excess.",
      side: "left",
    },
    {
      id: "2",
      name: "Quiet Confidence Hoodie",
      category: "Women / Hoodie",
      description:
        "Designed around softness and strength, this hoodie reflects a quiet presence — understated, grounded, and intentionally modern.",
      side: "right",
    },
    {
      id: "3",
      name: "Heritage Script T-Shirt",
      category: "Women / T-Shirt",
      description:
        "A lighter editorial piece shaped by heritage references and minimal typography.",
      side: "left",
    },
    {
      id: "4",
      name: "Core Street Hoodie",
      category: "Men / Hoodie",
      description:
        "Built as an everyday layer, rooted in cultural continuity.",
      side: "right",
    },
  ];

  return (
    <section className="bg-[#F3EDE4] text-black py-20">
      <div className="max-w-[1800px] mx-auto px-4">

        {/* MEN WOMEN */}
        <div className="grid grid-cols-2 gap-4 mb-20">
          <Link href="/men" className="h-[200px] bg-[#E8DED1] flex items-center justify-center">
            <span className="tracking-[0.3em] uppercase">Men</span>
          </Link>

          <Link href="/women" className="h-[200px] bg-[#E8DED1] flex items-center justify-center">
            <span className="tracking-[0.3em] uppercase">Women</span>
          </Link>
        </div>

        {/* PRODUCTS */}
        <div className="space-y-32">
          {products.map((p, i) => (
            <div key={p.id} className="relative">

              {/* IMAGE */}
              <div
                className={`w-[85%] h-[500px] bg-[#E8DED1] ${
                  p.side === "right" ? "ml-auto" : ""
                }`}
              />

              {/* TEXT BOX SFALSATO */}
              <div
                className={`absolute top-1/2 -translate-y-1/2 w-[320px] md:w-[420px] bg-[#F3EDE4] p-6 md:p-10 ${
                  p.side === "left"
                    ? "right-0 translate-x-[-30%]"
                    : "left-0 translate-x-[30%]"
                }`}
              >
                <p className="text-[11px] tracking-[0.3em] uppercase text-black/40">
                  {p.category}
                </p>

                <h3 className="mt-4 text-[32px] md:text-[48px] font-serif leading-tight">
                  {p.name}
                </h3>

                <p className="mt-4 text-[15px] text-black/60">
                  {p.description}
                </p>

                <button className="mt-6 text-[11px] uppercase tracking-[0.3em] border-b border-black">
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
