// components/Storefront.jsx
"use client";
import { useState } from "react";

export default function Storefront() {
  const [cart, setCart] = useState([]);

  // ✅ Funzione per aggiungere un prodotto demo (puoi cambiarlo poi)
  function addToCart(item) {
    setCart([...cart, item]);
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
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-bold mb-8 text-yellow-500">
        JUSTTOPRINT Store
      </h1>

      {/* ✅ Prodotto demo */}
      <div className="border border-neutral-800 p-6 rounded-xl mb-6 text-center">
        <h2 className="text-2xl font-semibold mb-2">T-shirt JUSTTOPRINT</h2>
        <p className="text-neutral-400 mb-3">€29.90</p>
        <button
          className="bg-yellow-600 text-black px-5 py-2 rounded-lg hover:bg-yellow-500 font-medium"
          onClick={() =>
            addToCart({ name: "T-shirt JUSTTOPRINT", price: 29.9, qty: 1 })
          }
        >
          Aggiungi al carrello
        </button>
      </div>

      {/* ✅ Carrello */}
      {cart.length > 0 && (
        <div className="w-full max-w-md border border-neutral-800 p-6 rounded-xl">
          <h2 className="text-2xl font-semibold mb-4">Il tuo carrello</h2>
          <ul className="mb-4">
            {cart.map((item, i) => (
              <li key={i} className="flex justify-between text-neutral-300">
                <span>
                  {item.name} × {item.qty}
                </span>
                <span>€{(item.price * item.qty).toFixed(2)}</span>
              </li>
            ))}
          </ul>

          <button
            className="w-full bg-neutral-900 text-white rounded-xl py-3 font-semibold hover:bg-neutral-800 transition"
            onClick={goToCheckout}
          >
            Checkout
          </button>
        </div>
      )}
    </main>
  );
}

