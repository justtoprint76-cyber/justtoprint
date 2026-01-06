// components/Storefront.jsx
"use client";
import { useState } from "react";

export default function Storefront() {
  const [cart, setCart] = useState([]);

  // ✅ Funzione per aggiungere un prodotto demo (puoi cambiarlo poi)
  function addToCart(item) {
    setCart((prev) => [...prev, item]);
  }

  // ✅ Funzione per aprire il checkout Stripe
  async function goToCheckout() {
    try {
      const payload = {
        items: cart.length
          ? cart.map(({ name, price, qty, image }) => ({
              name,
              price,
              qty: qty || 1,
              image: image || null,
            }))
          : [
              {
                name: "T-shirt JUSTTOPRINT",
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
    <section className="w-full">
      <div className="w-full flex flex-col items-center justify-center">
        <h1
          className="text-[22px] sm:text-[26px] tracking-[0.12em] mb-10 text-center"
          style={{ fontFamily: "serif", color: "#6B6256" }}
        >
          JUSTTOPRINT STORE
        </h1>

        {/* ✅ Prodotto demo */}
        <div className="w-full max-w-md border border-[#D9D0C3] bg-[#F7F2EA] p-7 rounded-2xl mb-8 text-center">
          <h2 className="text-[18px] tracking-[0.08em] text-[#4A463F]">
            T-shirt JUSTTOPRINT
          </h2>

          <p className="mt-3 text-[14px] tracking-[0.06em] text-[#7A7267]">
            €29.90
          </p>

          <button
            className="mt-6 rounded-full px-6 py-3 text-[14px] tracking-[0.06em] font-medium"
            style={{ background: "#C9B27C", color: "#2B2418" }}
            onClick={() =>
              addToCart({ name: "T-shirt JUSTTOPRINT", price: 29.9, qty: 1 })
            }
          >
            Aggiungi al carrello
          </button>
        </div>

        {/* ✅ Carrello */}
        {cart.length > 0 && (
          <div className="w-full max-w-md border border-[#D9D0C3] bg-[#F7F2EA] p-7 rounded-2xl">
            <h2
              className="text-[16px] tracking-[0.14em] mb-5"
              style={{ fontFamily: "serif", color: "#6B6256" }}
            >
              IL TUO CARRELLO
            </h2>

            <ul className="mb-6 space-y-2">
              {cart.map((item, i) => (
                <li key={i} className="flex justify-between text-[#5A544B]">
                  <span className="text-[14px]">
                    {item.name} × {item.qty}
                  </span>
                  <span className="text-[14px]">
                    €{(item.price * item.qty).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>

            <button
              className="w-full rounded-full py-3 text-[14px] tracking-[0.08em] font-semibold"
              style={{ background: "#2B2418", color: "#F3EDE4" }}
              onClick={goToCheckout}
            >
              CHECKOUT
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

