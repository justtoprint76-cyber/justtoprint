"use client";
import { useMemo, useState } from "react";

export default function Storefront() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: "tee-01",
      name: "Signature Tee",
      price: 29.9,
      tag: "NEW",
      desc: "Premium cotton — clean fit, cultural energy.",
    },
    {
      id: "hoodie-01",
      name: "Heritage Hoodie",
      price: 59.9,
      tag: "LIMITED",
      desc: "Heavyweight comfort — made to last.",
    },
  ];

  function addToCart(p) {
    setCart((prev) => {
      const exists = prev.find((x) => x.id === p.id);
      if (exists) {
        return prev.map((x) => (x.id === p.id ? { ...x, qty: x.qty + 1 } : x));
      }
      return [...prev, { ...p, qty: 1 }];
    });
  }

  function decQty(id) {
    setCart((prev) =>
      prev
        .map((x) => (x.id === id ? { ...x, qty: Math.max(0, x.qty - 1) } : x))
        .filter((x) => x.qty > 0)
    );
  }

  function incQty(id) {
    setCart((prev) =>
      prev.map((x) => (x.id === id ? { ...x, qty: x.qty + 1 } : x))
    );
  }

  const total = useMemo(
    () => cart.reduce((sum, x) => sum + x.price * x.qty, 0),
    [cart]
  );

  async function goToCheckout() {
    try {
      const payload = {
        items: cart.length
          ? cart.map(({ name, price, qty }) => ({
              name,
              price,
              qty,
              image: null,
            }))
          : [
              {
                name: "Signature Tee",
                price: 29.9,
                qty: 1,
                image: null,
              },
            ],
      };

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data?.url) window.location.href = data.url;
      else {
        console.error(data);
        alert("Errore durante il checkout");
      }
    } catch (err) {
      console.error(err);
      alert("Errore imprevisto");
    }
  }

  return (
    <section className="bg-[#F3EDE4] text-[#4A463F]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {products.map((p) => (
          <article
            key={p.id}
            className="rounded-2xl border border-[#D9D0C3] bg-[#F7F2EA] p-6 sm:p-7"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[12px] tracking-[0.22em] text-[#9A9388]">
                  JUSTTOPRINT
                </p>
                <h3
                  className="mt-2 text-[20px] sm:text-[22px] leading-[1.2] tracking-[0.02em]"
                  style={{ fontFamily: "serif", color: "#6B6256" }}
                >
                  {p.name}
                </h3>
              </div>

              <span className="text-[11px] tracking-[0.22em] text-[#6F685E] border border-[#D9D0C3] rounded-full px-3 py-1">
                {p.tag}
              </span>
            </div>

            <p className="mt-4 text-[14px] leading-relaxed text-[#7A7267] max-w-[46ch]">
              {p.desc}
            </p>

            <div className="mt-6 flex items-center justify-between">
              <p className="text-[14px] tracking-[0.04em] text-[#6F685E]">
                €{p.price.toFixed(2)}
              </p>

              <button
                onClick={() => addToCart(p)}
                className="rounded-full border border-[#D9D0C3] bg-transparent px-5 py-2 text-[12px] tracking-[0.18em] uppercase text-[#6F685E] hover:bg-[#EFE7DC] transition"
              >
                Add to cart
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* CART */}
      <div className="mt-10 rounded-2xl border border-[#D9D0C3] bg-[#F7F2EA] p-6 sm:p-7">
        <div className="flex items-center justify-between">
          <p className="text-[12px] tracking-[0.22em] text-[#9A9388] uppercase">
            Cart
          </p>
          <p className="text-[13px] text-[#7A7267]">
            Total: <span className="text-[#6F685E]">€{total.toFixed(2)}</span>
          </p>
        </div>

        {cart.length === 0 ? (
          <p className="mt-6 text-[14px] text-[#7A7267]">
            Your cart is empty. Add a piece to continue.
          </p>
        ) : (
          <div className="mt-6 space-y-4">
            {cart.map((x) => (
              <div
                key={x.id}
                className="flex items-center justify-between gap-4 border-t border-[#E3DBCF] pt-4"
              >
                <div>
                  <p className="text-[14px] text-[#6B6256]">{x.name}</p>
                  <p className="text-[12px] text-[#9A9388]">
                    €{x.price.toFixed(2)} each
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => decQty(x.id)}
                    className="w-9 h-9 rounded-full border border-[#D9D0C3] hover:bg-[#EFE7DC] transition"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="text-[13px] text-[#6F685E] w-6 text-center">
                    {x.qty}
                  </span>
                  <button
                    onClick={() => incQty(x.id)}
                    className="w-9 h-9 rounded-full border border-[#D9D0C3] hover:bg-[#EFE7DC] transition"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>

                <p className="text-[13px] text-[#6F685E] w-[90px] text-right">
                  €{(x.price * x.qty).toFixed(2)}
                </p>
              </div>
            ))}

            <button
              onClick={goToCheckout}
              className="mt-8 w-full rounded-full bg-[#6F685E] text-[#F3EDE4] py-3 text-[12px] tracking-[0.18em] uppercase hover:opacity-90 transition"
            >
              Checkout
            </button>

            <p className="mt-3 text-[11px] text-[#9A9388] text-center">
              Demo products — real collection coming soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
