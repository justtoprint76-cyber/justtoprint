// components/Storefront.jsx
"use client";

import { useMemo, useState } from "react";

export default function Storefront() {
  const [tab, setTab] = useState("men"); // "men" | "women"
  const [cart, setCart] = useState([]);

  const CONTACT_EMAIL = "justtoprint76@gmail.com";

  // ====== PRODUCTS (edit here anytime) ======
  const catalog = useMemo(
    () => ({
      men: {
        "T-SHIRTS": [
          {
            id: "men-tee-01",
            name: "JUSTTOPRINT T-Shirt",
            price: 19.99,
            status: "active", // active | soon
          },
          {
            id: "men-tee-02",
            name: "Heritage T-Shirt",
            price: 19.99,
            status: "soon",
          },
        ],
        HOODIES: [
          {
            id: "men-hoodie-01",
            name: "Quiet Confidence Hoodie",
            price: 34.99,
            status: "soon",
          },
        ],
        CAPS: [
          {
            id: "men-cap-01",
            name: "Minimal Crest Cap",
            price: 22.99,
            status: "soon",
          },
        ],
      },

      women: {
        "T-SHIRTS": [
          {
            id: "women-tee-01",
            name: "JUSTTOPRINT T-Shirt",
            price: 19.99,
            status: "soon",
          },
          {
            id: "women-tee-02",
            name: "Signature T-Shirt",
            price: 19.99,
            status: "soon",
          },
        ],
        HOODIES: [
          {
            id: "women-hoodie-01",
            name: "Quiet Confidence Hoodie",
            price: 34.99,
            status: "soon",
          },
        ],
        CAPS: [
          {
            id: "women-cap-01",
            name: "Minimal Crest Cap",
            price: 22.99,
            status: "soon",
          },
        ],
      },
    }),
    []
  );

  function addToCart(item) {
    setCart((prev) => [...prev, { ...item, qty: 1 }]);
  }

  async function goToCheckout() {
    try {
      const payload = {
        items: cart.map(({ name, price, qty }) => ({
          name,
          price,
          qty: qty || 1,
        })),
      };

      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data?.url) window.location.href = data.url;
      else alert("Checkout error — please try again.");
    } catch (err) {
      console.error(err);
      alert("Unexpected error.");
    }
  }

  const groups = catalog[tab];

  return (
    <section className="bg-[#F3EDE4] text-[#4A463F]">
      <div className="max-w-5xl mx-auto pt-10 pb-10">
        {/* Header */}
        <div className="text-center">
          <p className="text-[12px] tracking-[0.22em] text-[#9A9388]">
            JUSTTOPRINT STORE
          </p>
          <h3
            className="mt-4 text-[22px] sm:text-[26px] tracking-[0.08em]"
            style={{ fontFamily: "serif", color: "#6B6256" }}
          >
            Pieces, not noise.
          </h3>

          {/* Tabs */}
          <div className="mt-7 inline-flex rounded-full border border-[#D9D0C3] overflow-hidden">
            <button
              onClick={() => setTab("men")}
              className={`px-5 py-2 text-[12px] tracking-[0.25em] ${
                tab === "men"
                  ? "bg-[#EDE5DA] text-[#4A463F]"
                  : "bg-transparent text-[#7A7267]"
              }`}
            >
              MEN
            </button>
            <button
              onClick={() => setTab("women")}
              className={`px-5 py-2 text-[12px] tracking-[0.25em] ${
                tab === "women"
                  ? "bg-[#EDE5DA] text-[#4A463F]"
                  : "bg-transparent text-[#7A7267]"
              }`}
            >
              WOMEN
            </button>
          </div>
        </div>

        {/* Categories */}
        <div className="mt-10 space-y-12">
          {Object.entries(groups).map(([category, items]) => (
            <div key={category}>
              <div className="flex items-center justify-between">
                <p className="text-[12px] tracking-[0.22em] text-[#9A9388]">
                  {category}
                </p>
                <div className="h-px flex-1 bg-[#D9D0C3] ml-4" />
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {items.map((p) => (
                  <div
                    key={p.id}
                    className="rounded-2xl border border-[#D9D0C3] bg-[#F7F1E8] p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] tracking-[0.22em] text-[#9A9388]">
                          {tab === "men" ? "MEN" : "WOMEN"} •{" "}
                          {p.status === "active" ? "AVAILABLE" : "COMING SOON"}
                        </p>
                        <h4
                          className="mt-2 text-[18px] tracking-[0.06em]"
                          style={{ fontFamily: "serif", color: "#6B6256" }}
                        >
                          {p.name}
                        </h4>
                      </div>

                      <p className="text-[14px] text-[#6F685E]">
                        €{p.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center gap-3">
                      {p.status === "active" ? (
                        <button
                          onClick={() =>
                            addToCart({ name: p.name, price: p.price })
                          }
                          className="px-5 py-2 rounded-full text-[12px] tracking-[0.14em] bg-[#C8AE6A] text-[#1A1408] hover:opacity-90"
                        >
                          ADD TO CART
                        </button>
                      ) : (
                        <a
                          href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
                            "JUSTTOPRINT — Notify me"
                          )}&body=${encodeURIComponent(
                            `Hi JUSTTOPRINT,\n\nPlease notify me when this item is available:\n\n- ${p.name} (${tab.toUpperCase()})\nPrice: €${p.price.toFixed(
                              2
                            )}\n\nThank you.`
                          )}`}
                          className="px-5 py-2 rounded-full text-[12px] tracking-[0.14em] border border-[#D9D0C3] bg-transparent text-[#6B6256] hover:bg-[#EDE5DA]"
                        >
                          NOTIFY ME
                        </a>
                      )}

                      <span className="text-[12px] text-[#9A9388]">
                        {p.status === "active"
                          ? "Ships soon"
                          : "Drop date coming soon"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Cart */}
        {cart.length > 0 && (
          <div className="mt-14 rounded-2xl border border-[#D9D0C3] bg-[#F7F1E8] p-6">
            <div className="flex items-center justify-between">
              <p className="text-[12px] tracking-[0.22em] text-[#9A9388]">
                CART
              </p>
              <p className="text-[13px] text-[#6F685E]">
                Total: €
                {cart
                  .reduce((sum, it) => sum + it.price * (it.qty || 1), 0)
                  .toFixed(2)}
              </p>
            </div>

            <ul className="mt-4 space-y-2">
              {cart.map((it, i) => (
                <li
                  key={i}
                  className="flex justify-between text-[13px] text-[#6B6256]"
                >
                  <span>{it.name}</span>
                  <span>€{it.price.toFixed(2)}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={goToCheckout}
              className="mt-6 w-full py-3 rounded-full text-[12px] tracking-[0.18em] bg-[#1A1408] text-[#F3EDE4] hover:opacity-90"
            >
              CHECKOUT
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
