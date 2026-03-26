import Link from "next/link";
import { useCart } from "../components/CartContext";

function eur(n) {
  try {
    return new Intl.NumberFormat("it-IT", {
      style: "currency",
      currency: "EUR",
    }).format(n);
  } catch {
    return `€${Number(n).toFixed(2)}`;
  }
}

export default function CartPage() {
  const { items, removeItem, setQty, total, clear } = useCart();

  return (
    <main className="min-h-screen bg-[#f5f1ea] text-[#4A463F] px-4 md:px-6 py-10 md:py-16">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#8A8175]">
            JUSTTOPRINT
          </p>
          <h1 className="mt-2 text-3xl md:text-5xl font-serif">Cart</h1>
        </div>

        {items.length === 0 ? (
          <div className="border border-[#D9D0C3] bg-[#F7F1E8] rounded-2xl p-8 md:p-12 text-center">
            <p className="text-sm md:text-base text-[#6B6256]">
              Your cart is empty.
            </p>

            <Link
              href="/#shop"
              className="inline-block mt-6 rounded-full border border-[#4A463F] px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-[#4A463F] hover:bg-[#4A463F] hover:text-[#F3EDE4] transition"
            >
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-8 md:gap-10">
            <div className="space-y-4">
              {items.map((it) => (
                <div
                  key={it.id}
                  className="border border-[#D9D0C3] bg-[#F7F1E8] rounded-2xl p-4 md:p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[12px] uppercase tracking-[0.18em] text-[#6B6256]">
                        {it.name}
                      </p>
                      <p className="mt-1 text-sm text-[#7A7267]">
                        {eur(it.price)}
                      </p>
                    </div>

                    <button
                      onClick={() => removeItem(it.id)}
                      className="text-xs text-[#9A9388] hover:text-[#4A463F] transition"
                    >
                      Remove
                    </button>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-[#9A9388]">Qty</span>
                      <input
                        value={it.qty || 1}
                        onChange={(e) => setQty(it.id, e.target.value)}
                        type="number"
                        min="1"
                        className="w-16 rounded-lg border border-[#D9D0C3] bg-white/70 px-2 py-1 text-sm outline-none"
                      />
                    </div>

                    <p className="text-sm text-[#6B6256]">
                      {eur((it.price || 0) * (it.qty || 1))}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <aside className="h-fit border border-[#D9D0C3] bg-[#F7F1E8] rounded-2xl p-5 md:p-6">
              <h2 className="text-lg font-serif mb-5">Summary</h2>

              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-[#7A7267]">Total</p>
                <p className="text-sm text-[#4A463F]">{eur(total)}</p>
              </div>

              <button className="w-full rounded-full py-3 text-[12px] tracking-[0.18em] uppercase bg-[#4A463F] text-[#F3EDE4] hover:bg-[#3A362F] transition">
                Checkout
              </button>

              <button
                onClick={clear}
                className="mt-3 w-full text-xs text-[#9A9388] hover:text-[#4A463F] transition"
              >
                Clear cart
              </button>
            </aside>
          </div>
        )}
      </div>
    </main>
  );
}
