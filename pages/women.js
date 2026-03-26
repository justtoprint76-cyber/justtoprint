import Link from "next/link";
import Header from "../components/Header";
import { useCart } from "../components/CartContext";
import { womenProducts } from "../data/products";

export default function WomenPage() {
  const { addItem } = useCart();

  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F3EDE4] text-black">
        <section className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-10 pt-28 sm:pt-32 pb-20 sm:pb-24">
          <div className="text-center">
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.38em] text-black/40">
              JUSTTOPRINT
            </p>

            <h1 className="mt-6 text-[34px] sm:text-[52px] lg:text-[64px] leading-none font-serif tracking-[0.01em]">
              Women
            </h1>

            <p className="mt-5 max-w-xl mx-auto text-[13px] sm:text-[15px] leading-relaxed text-black/50">
              T-shirts and hoodies with a clean, quiet, editorial feel.
            </p>

            <div className="mt-8 flex items-center justify-center gap-6 text-[10px] sm:text-[11px] uppercase tracking-[0.34em]">
              <Link href="/men" className="text-black/28 hover:text-black/55 transition">
                Men
              </Link>
              <span className="text-black/20">/</span>
              <span className="text-black">Women</span>
            </div>
          </div>

          <div className="mt-16 sm:mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 sm:gap-x-8 sm:gap-y-16">
            {womenProducts.map((product, index) => (
              <article key={product.id} className="group">
                <div className="relative overflow-hidden bg-[#E8DED1] aspect-[4/5]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.45),_transparent_38%),linear-gradient(180deg,_#efe7dc_0%,_#e6dbce_45%,_#ddd0c0_100%)]" />

                  <div className="absolute top-5 left-5 text-[10px] uppercase tracking-[0.28em] text-black/35">
                    Women / {String(index + 1).padStart(2, "0")}
                  </div>

                  <div className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.28em] text-black/28">
                    {product.category}
                  </div>
                </div>

                <div className="mt-5">
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] text-black/32">
                    {product.subtitle}
                  </p>

                  <h2 className="mt-3 text-[24px] sm:text-[28px] leading-[1.08] font-serif tracking-[0.01em]">
                    {product.name}
                  </h2>

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
        </section>
      </main>
    </>
  );
}
