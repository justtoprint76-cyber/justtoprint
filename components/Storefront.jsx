"use client";

import { useMemo, useState } from "react";
import { useCart } from "./CartContext";

export default function Storefront() {
  const { addItem } = useCart();
  const [tab, setTab] = useState("men"); // men | women
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
          ],
        },
      ],
    }),
    []
  );

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
                    className="rounded-2xl border border-[#D9D0C3] bg-[#F7F1E8] p-6 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_rgba(0,0,0,0.08)] transition"
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
                          onClick={() =>
                            addItem({ id: p.id, name: p.name, price: p.price })
                          }
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
      </div>
    </section>
  );
}
