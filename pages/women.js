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
        <section className="max-w-[1300px] mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
          <div className="text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-black/40">
              JUSTTOPRINT
            </p>

            <h1 className="mt-6 text-[36px] sm:text-[54px] font-serif">
              Women
            </h1>

            <div className="mt-8 flex justify-center gap-6 text-[11px] uppercase tracking-[0.3em]">
              <Link href="/men" className="text-black/30 hover:text-black">
                Men
              </Link>
              <span>/</span>
              <span className="text-black">Women</span>
            </div>
          </div>

          {/* GRID 4 PER RIGA */}
          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
            {womenProducts.map((product) => (
              <div key={product.id}>
                <div className="aspect-[4/5] bg-[#E8DED1]"></div>

                <div className="mt-4">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-black/30">
                    {product.subtitle}
                  </p>

                  <h2 className="mt-2 text-[18px] font-serif">
                    {product.name}
                  </h2>

                  <p className="mt-2 text-[14px] text-black/60">
                    €{product.price.toFixed(2)}
                  </p>

                  <button
                    type="button"
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={() => addItem(product)}
                    className="mt-3 text-[10px] uppercase tracking-[0.3em] border-b border-black pb-1 hover:opacity-60"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
     
