"use client";
import { useMemo, useState } from "react";

export default function Storefront() {
  const products = useMemo(
    () => [
      {
        id: "tee-01",
        name: "T-SHIRT JUSTTOPRINT",
        price: 29.9,
        note: "Heavy cotton • embroidery detail • limited first drop",
        tag: "FIRST DROP",
      },
      // Quando vuoi aggiungere altri prodotti:
      // { id:"hoodie-01", name:"HOODIE JUSTTOPRINT", price:59.9, note:"", tag:"COMING SOON" },
    ],
    []
  );

  const [cart, setCart] = useState([]);

  function addToCart(p) {
    setCart((c) => {
      const found = c.find((x) => x.id === p.id);
      if (found) return c.map((x) => (x.id === p.id ? { ...x, qty: x.qty + 1 } : x));
      return [...c, { ...p, qty: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart((c) =>
      c
        .map((x) => (x.id === id ? { ...x, qty: x.qty - 1 } : x))
        .filter((x) => x.qty > 0)
    );
  }

  const total = cart.reduce((s, x) => s + x.price * x.qty, 0);

  async function goToCheckout() {
    try {
      const payload = {
        items: cart.length
          ? cart.map(({ name, price, qty }) => ({ name, price, qty }))
          : [{ name: "T-SHIRT JUSTTOPRINT", price: 29.9, qty: 1 }],
      };

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data?.url) window.location.href = data.url;
      else alert("Errore durante il checkout");
    } catch (e) {
      console.error(e);
      alert("Errore imprevisto");
    }
  }

  return (
    <section className="bg-[#F3EDE4] text-[#4A463F]">
      <div className="max-w-5xl mx-auto">
        {/* Titolo sezione */}
        <div className="text-center pt-8 pb-10">
          <p className="text-[12px] tracking-[0.22em] text-[#9A9388]">SHOP</p>
          <h3
            className="mt-5 text-[22px] sm:text-[26px] tracking-[0.05em]"
            style={{ fontFamily: "serif", color: "#6B6256" }}
          >
            JUSTTOPRINT Store
          </h3>
          <p className="mt-4 text-[14px] sm:text-[15px] text-[#7A7267] max-w-[60ch] mx-auto">
            Minimal selection. Premium feel. More pieces arriving soon.
          </p>
        </div>

        {/* Griglia prodotti */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-10">
          {products.map((p) => (
            <article
              key={p.id}
              className="rounded-[22px] border border-[#D9D0C3] bg-[#F7F1E9] p-6 sm:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[12px] tracking-[0.22em] text-[#9A9388]">
                    {p.tag}
                  </p>
                  <h4
                    className="mt-3 text-[18px] sm:text-[20px] tracking-[0.06em]"
                    style={{ fontFamily: "serif", color: "#5E564B" }}
                  >
                    {p.name}
                  </h4>
                </div>

                <div className="text-right">
                  <p className="text-[14px] text-[#7A7267]">Price</p>
                  <p className="mt-1 text-[18px] sm:text-[20px]" style={{ color: "#5E564B" }}>
                    €{p.price.toFixed(2)}
                  </p>
                </div>
              </div>

              <p className="mt-4 text-[13px] sm:text-[14px] text-[#7A7267] leading-relaxed">
                {p.note}
              </p>

              <div className="mt-6 flex items-center justify-between gap-4">
                <button
                  onClick={() => addToCart(p)}
                  className="rounded-full px-6 py-3 text-[13px] sm:text-[14px] tracking-[0.12em] uppercase"
                  style={{
                    background: "linear-gradient(180deg,#d4af37 0%,#b7922b 100%)",
                    color: "#2A241E",
                  }}
                >
                  Add to cart
                </button>

                <button
                  onClick={() => addToCart(p)}
                  className="text-[12px] tracking-[0.18em] uppercase text-[#7A7267] hover:text-[#5E564B] transition"
                >
                  Quick add
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Carrello (se c’è qualcosa) */}
        {cart.length > 0 && (
          <aside className="rounded-[22px] border border-[#D9D0C3] bg-[#F7F1E9] p-6 sm:p-7 mb-16 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[12px] tracking-[0.22em] text-[#9A9388]">CART</p>
                <h4
                  className="mt-3 text-[18px] sm:text-[20px] tracking-[0.06em]"
                  style={{ fontFamily: "serif", color: "#5E564B" }}
                >
                  Your selection
                </h4>
              </div>
              <p className="text-[16px] sm:text-[18px]" style={{ color: "#5E564B" }}>
                €{total.toFixed(2)}
              </p>
            </div>

            <div className="mt-5 space-y-3">
              {cart.map((x) => (
                <div
                  key={x.id}
                  className="flex items-center justify-between gap-4 text-[#6B6256]"
                >
                  <div className="min-w-0">
                    <p className="text-[13px] sm:text-[14px] tracking-[0.06em] truncate">
                      {x.name}
                    </p>
                    <p className="text-[12px] text-[#8B847A]">
                      €{x.price.toFixed(2)} × {x.qty}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => removeFromCart(x.id)}
                      className="w-9 h-9 rounded-full border border-[#D9D0C3] bg-transparent hover:bg-[#EFE7DC] transition"
                    >
                      −
                    </button>
                    <button
                      onClick={() => addToCart(x)}
                      className="w-9 h-9 rounded-full border border-[#D9D0C3] bg-transparent hover:bg-[#EFE7DC] transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={goToCheckout}
              className="mt-7 w-full rounded-full py-3 text-[13px] sm:text-[14px] tracking-[0.12em] uppercase"
              style={{
                background: "linear-gradient(180deg,#d4af37 0%,#b7922b 100%)",
                color: "#2A241E",
              }}
            >
              Checkout
            </button>

            <p className="mt-3 text-center text-[11px] text-[#9A9388]">
              Demo checkout • Stripe link will open in a new page.
            </p>
          </aside>
        )}
      </div>
    </section>
  );
}
