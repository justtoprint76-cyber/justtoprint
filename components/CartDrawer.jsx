"use client";

import { useCart } from "./CartContext";

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

export default function CartDrawer() {
  const { items, removeItem, setQty, total, count, open, setOpen, clear } =
    useCart();

  async function goToCheckout() {
    try {
      const payload = {
        items: items.map(({ name, price, qty, image }) => ({
          name,
          price,
          qty: qty || 1,
          image: image || null,
        })),
      };

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url;
      } else {
        alert("Errore durante il checkout");
        console.error(data);
      }
    } catch (err) {
      console.error(err);
      alert("Errore imprevisto");
    }
  }

  return (
    <>
      {/* Bottone fisso (visibile, premium) */}
<button
  type="button"
  onClick={() => setOpen(true)}
  className="fixed top-5 right-5 z-[9999] h-12 px-4 rounded-full border border-[#D9D0C3] bg-[#F7F1E8] text-[#4A463F] flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.12)] hover:bg-[#EFE6DA] transition"
  aria-label="Open cart"
>
  {/* Icona carrello */}
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.6 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6" />
  </svg>

  {/* Testo (aiuta tantissimo) */}
  <span className="text-[12px] tracking-[0.18em] uppercase">
    Cart
  </span>

  {/* Badge */}
  {count > 0 && (
    <span className="h-6 min-w-[24px] px-2 rounded-full bg-[#4A463F] text-[#F3EDE4] text-[12px] flex items-center justify-center">
      {count}
    </span>
  )}
</button>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[70] transition ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/30 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Drawer */}
        <aside
          className={`absolute right-0 top-0 h-full w-[92%] max-w-[420px] bg-[#F3EDE4] text-[#4A463F] border-l border-[#D9D0C3] shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 flex items-center justify-between border-b border-[#D9D0C3]">
            <div>
              <p className="text-[12px] tracking-[0.22em] text-[#9A9388] uppercase">
                Your cart
              </p>
              <p className="mt-1 text-sm text-[#6B6256]">
                {count ? `${count} item(s)` : "Empty"}
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="text-[#6B6256] hover:text-[#4A463F] transition text-2xl leading-none"
              aria-label="Close cart"
            >
              ×
            </button>
          </div>

          <div className="p-6 overflow-auto h-[calc(100%-190px)]">
            {items.length === 0 ? (
              <div className="pt-10 text-center">
                <p className="text-[#7A7267]">
                  Your cart is empty. Add something from the shop.
                </p>
              </div>
            ) : (
              <ul className="space-y-5">
                {items.map((it) => (
                  <li
                    key={it.id}
                    className="border border-[#D9D0C3] rounded-2xl p-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[12px] tracking-[0.18em] uppercase text-[#6B6256]">
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
                          className="w-16 rounded-lg border border-[#D9D0C3] bg-[#F7F1EA] px-2 py-1 text-sm outline-none"
                        />
                      </div>

                      <p className="text-sm text-[#6B6256]">
                        {eur((it.price || 0) * (it.qty || 1))}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Bottom */}
          <div className="p-6 border-t border-[#D9D0C3]">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-[#7A7267]">Total</p>
              <p className="text-sm text-[#4A463F]">{eur(total)}</p>
            </div>

            <button
              disabled={items.length === 0}
              onClick={goToCheckout}
              className={`w-full rounded-full py-3 text-[12px] tracking-[0.18em] uppercase transition ${
                items.length === 0
                  ? "bg-[#DDD6CC] text-[#9A9388] cursor-not-allowed"
                  : "bg-[#4A463F] text-[#F3EDE4] hover:bg-[#3A362F]"
              }`}
            >
              Checkout
            </button>

            {items.length > 0 && (
              <button
                onClick={clear}
                className="mt-3 w-full text-xs text-[#9A9388] hover:text-[#4A463F] transition"
              >
                Clear cart
              </button>
            )}
          </div>
        </aside>
      </div>
    </>
  );
}
