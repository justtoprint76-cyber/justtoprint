"use client";

import { useMemo, useState } from "react";

export default function Storefront() {
  const [tab, setTab] = useState("men"); // men | women
  const [cart, setCart] = useState([]);
  const CONTACT_EMAIL = "justtoprint76@gmail.com";

  const catalog = useMemo(
    () => ({
      men: [
        {
          category: "T-SHIRTS",
          items: [
            {
              id: "men-tee-01",
              name: "JUSTTOPRINT T-Shirt",
              price: 19.99,
              status: "active",
              note: "Clean fit • cultural detail • first drop",
              tag: "AVAILABLE",
            },
            {
              id: "men-tee-02",
              name: "Heritage Script T-Shirt",
              price: 19.99,
              status: "soon",
              note: "Drop in progress • limited run",
              tag: "COMING SOON",
            },
            {
              id: "men-tee-03",
              name: "Khanda Mark T-Shirt",
              price: 19.99,
              status: "soon",
              note: "Minimal symbol • premium feel",
              tag: "COMING SOON",
            },
          ],
        },
        {
          category: "HOODIES",
          items: [
            {
              id: "men-hoodie-01",
              name: "Quiet Confidence Hoodie",
              price: 34.99,
              status: "soon",
              note: "Heavy comfort • modern silhouette",
              tag: "COMING SOON",
            },
            {
              id: "men-hoodie-02",
              name: "Heritage Drop Hoodie",
              price: 34.99,
              status: "soon",
              note: "First drop piece • limited",
              tag: "COMING SOON",
            },
          ],
        },
        {
          category: "CAPS",
          items: [
            {
              id: "men-cap-01",
              name: "Minimal Crest Cap",
              price: 22.99,
              status: "active",
              note: "Everyday cap • clean branding",
              tag: "AVAILABLE",
            },
            {
              id: "men-cap-02",
              name: "Heritage Mark Cap",
              price: 22.99,
              status: "soon",
              note: "Drop in progress",
              tag: "COMING SOON",
            },
          ],
        },
      ],

      women: [
        {
          category: "T-SHIRTS",
          items: [
            {
              id: "women-tee-01",
              name: "JUSTTOPRINT T-Shirt",
              price: 19.99,
              status: "active",
              note: "Clean fit • cultural detail • first drop",
              tag: "AVAILABLE",
            },
            {
              id: "women-tee-02",
              name: "Signature Script T-Shirt",
              price: 19.99,
              status: "soon",
              note: "Drop in progress • limited run",
              tag: "COMING SOON",
            },
            {
              id: "women-tee-03",
              name: "Khanda Mark T-Shirt",
              price: 19.99,
              status: "soon",
              note: "Minimal symbol • premium feel",
              tag: "COMING SOON",
            },
          ],
        },
        {
          category: "HOODIES",
          items: [
            {
              id: "women-hoodie-01",
              name: "Quiet Confidence Hoodie",
              price: 34.99,
              status: "soon",
              note: "Heavy comfort • modern silhouette",
              tag: "COMING SOON",
            },
            {
              id: "women-hoodie-02",
              name: "Heritage Drop Hoodie",
              price: 34.99,
              status: "soon",
              note: "First drop piece • limited",
              tag: "COMING SOON",
            },
          ],
        },
        {
          category: "CAPS",
          items: [
            {
              id: "women-cap-01",
              name: "Minimal Crest Cap",
              price: 22.99,
              status: "active",
              note: "Everyday cap • clean branding",
              tag: "AVAILABLE",
            },
            {
              id: "women-cap-02",
              name: "Heritage Mark Cap",
              price: 22.99,
              status: "soon",
              note: "Drop in progress",
              tag: "COMING SOON",
            },
          ],
        },
      ],
    }),
    []
  );

  function addToCart(p) {
    setCart((prev) => {
      const found = prev.find((x) => x.id === p.id);
      if (found) {
        return prev.map((x) => (x.id === p.id ? { ...x, qty: x.qty + 1 } : x));
      }
      return [...prev, { ...p, qty: 1 }];
    });
  }

  function decQty(id) {
    setCart((prev) =>
      prev
        .map((x) => (x.id === id ? { ...x, qty: x.qty - 1 } : x))
        .filter((x) => x.qty > 0)
    );
  }

  function incQty(id) {
    setCart((prev) =>
      prev.map((x) => (x.id === id ? { ...x, qty: x.qty + 1 } : x))
    );
  }

  const total = cart.reduce((sum, x) => sum + x.price * x.qty, 0);

  async function goToCheckout() {
    try {
      const payload = {
        items: cart.length
          ? cart.map(({ name, price, qty }) => ({ name, price, qty }))
          : [{ name: "JUSTTOPRINT T-Shirt", price: 19.99, qty: 1 }],
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

  const sections = catalog[tab];

  return (
    <section className="bg-[#F3EDE4] text-[#4A463F]">
      <div className="max-w-5xl mx-auto pt-6 pb-14">
        {/* Header shop */}
        <div className="text-center">
          <p className="text-[12px] tracking-[0.22em] text-[#9A9388]">SHOP</p>

          <h3
            className="mt-5 text-[24px] sm:text-[28px] tracking-[0.04em]"
            style={{ fontFamily: "serif", color: "#6B6256" }}
          >
            Browse the collection.
          </h3>

          <p className="mt-4 text-[14px] sm:text-[15px] text-[#7A7267] max-w-[64ch] mx-auto">
            Men & Women pieces — T-shirts, hoodies, caps. First drop in progress.
          </p>

          {/* Tabs */}
          <div className="mt-8 inline-flex rounded-full border border-[#D9D0C3] overflow-hidden bg-[#F7F1E8]">
            <button
              onClick={() => setTab("men")}
              className={`px-6 py-2 text-[12px] tracking-[0.25em] ${
                tab === "men"
                  ? "bg-[#EDE5DA] text-[#4A463F]"
                  : "bg-transparent text-[#7A7267]"
              }`}
            >
              MEN
            </button>
            <button
              onClick={() => setTab("women")}
              className={`px-6 py-2 text-[12px] tracking-[0.25em] ${
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
        <div className="mt-12 space-y-14">
          {sections.map((block) => (
            <div key={block.category}>
              <div className="flex items-center gap-4">
                <p className="text-[12px] tracking-[0.22em] text-[#9A9388]">
                  {block.category}
                </p>
                <div className="h-px flex-1 bg-[#D9D0C3]" />
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {block.items.map((p) => (
                  <article
                    key={p.id}
                    className="rounded-2xl border border-[#D9D0C3] bg-[#F7F1E8] p-6"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-[11px] tracking-[0.22em] text-[#9A9388]">
                          {p.tag} • {tab.toUpperCase()}
                        </p>

                        <h4
                          className="mt-2 text-[18px] tracking-[0.04em]"
                          style={{ fontFamily: "serif", color: "#6B6256" }}
                        >
                          {p.name}
                        </h4>

                        <p className="mt-3 text-[13px] leading-relaxed text-[#7A7267]">
                          {p.note}
                        </p>
                      </div>

                      <p className="text-[14px] text-[#6F685E]">
                        €{p.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="mt-5 flex items-center gap-3">
                      {p.status === "active" ? (
                        <button
                          onClick={() => addToCart(p)}
                          className="px-5 py-2 rounded-full text-[12px] tracking-[0.16em] uppercase bg-[#1A1408] text-[#F3EDE4] hover:opacity-90 transition"
                        >
                          Add to cart
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
                          className="px-5 py-2 rounded-full text-[12px] tracking-[0.16em] uppercase border border-[#D9D0C3] text-[#6B6256] hover:bg-[#EDE5DA] transition"
                        >
                          Notify me
                        </a>
                      )}

                      <span className="text-[12px] text-[#9A9388]">
                        {p.status === "active" ? "Shipping soon" : "Drop soon"}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Cart */}
        {cart.length > 0 && (
          <div className="mt-16 rounded-2xl border border-[#D9D0C3] bg-[#F7F1E8] p-6">
            <div className="flex items-center justify-between">
              <p className="text-[12px] tracking-[0.22em] text-[#9A9388]">CART</p>
              <p className="text-[13px] text-[#6F685E]">
                Total: €{total.toFixed(2)}
              </p>
            </div>

            <div className="mt-5 space-y-3">
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
                      className="w-9 h-9 rounded-full border border-[#D9D0C3] hover:bg-[#EDE5DA] transition"
                    >
                      −
                    </button>
                    <span className="text-[13px] text-[#6F685E] w-6 text-center">
                      {x.qty}
                    </span>
                    <button
                      onClick={() => incQty(x.id)}
                      className="w-9 h-9 rounded-full border border-[#D9D0C3] hover:bg-[#EDE5DA] transition"
                    >
                      +
                    </button>
                  </div>

                  <p className="text-[13px] text-[#6F685E] w-[90px] text-right">
                    €{(x.price * x.qty).toFixed(2)}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={goToCheckout}
              className="mt-7 w-full rounded-full bg-[#6F685E] text-[#F3EDE4] py-3 text-[12px] tracking-[0.18em] uppercase hover:opacity-90 transition"
            >
              Checkout
            </button>

            <p className="mt-3 text-[11px] text-[#9A9388] text-center">
              Demo checkout • Real drop details coming soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
