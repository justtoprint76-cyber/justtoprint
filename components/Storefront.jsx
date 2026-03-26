"use client";

import { useMemo, useState } from "react";
import { useCart } from "./CartContext";

export default function Storefront() {
  const { addItem } = useCart();
  const [tab, setTab] = useState("men");
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
    <section id="shop" className="bg-[#F3EDE4] text-[#4A463F]">
      <div className="max-w-5xl mx-auto px-5 pt-10 pb-20">
        
        {/* HEADER SHOP */}
        <div className="text-center">
          <p className="text-[11px] tracking-[0.25em] text-[#9A9388]">
            SHOP
          </p>

          <h3
            className="mt-6 text-[22px] sm:text-[26px]"
            style={{ fontFamily: "serif", color: "#4A463F" }}
          >
            Collection
          </h3>

          {/* TABS */}
          <div className="mt-8 flex justify-center gap-8">
            <button
              onClick={() => setTab("men")}
              className={`text-[12px] tracking-[0.25em] ${
                tab === "men"
                  ? "text-black"
                  : "text-[#9A9388]"
              }`}
            >
              MEN
            </button>

            <button
              onClick={() => setTab("women")}
              className={`text-[12px] tracking-[0.25em] ${
                tab === "women"
                  ? "text-black"
                  : "text-[#9A9388]"
              }`}
            >
              WOMEN
            </button>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="mt-14 space-y-16">
          {sections.map((block) => (
            <div key={block.category}>
              
              {/* CATEGORY */}
              <div className="flex items-center gap-4">
                <p className="text-[11px] tracking-[0.25em] text-[#9A9388]">
                  {block.category}
                </p>
                <div className="h-px flex-1 bg-[#D9D0C3]" />
              </div>

              {/* GRID */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {block.items.map((p) => (
                  <div key={p.id} className="group">
                    
                    <div className="border border-[#D9D0C3] bg-[#F7F1E8] p-6 transition group-hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)]">
                      
                      <div className="flex justify-between">
                        <p className="text-[11px] tracking-[0.2em] text-[#9A9388]">
                          {p.tag}
                        </p>

                        <p className="text-[13px] text-[#6F685E]">
                          €{p.price.toFixed(2)}
                        </p>
                      </div>

                      <h4
                        className="mt-3 text-[17px]"
                        style={{ fontFamily: "serif", color: "#4A463F" }}
                      >
                        {p.name}
                      </h4>

                      <p className="mt-2 text-[13px] text-[#7A7267]">
                        {p.note}
                      </p>

                      <div className="mt-6">
                        {p.status === "active" ? (
                          <button
                            onClick={() =>
                              addItem({
                                id: p.id,
                                name: p.name,
                                price: p.price,
                              })
                            }
                            className="w-full py-2 text-[11px] tracking-[0.2em] uppercase border border-black text-black hover:bg-black hover:text-white transition"
                          >
                            Add to cart
                          </button>
                        ) : (
                          <a
                            href={`mailto:${CONTACT_EMAIL}`}
                            className="block text-center w-full py-2 text-[11px] tracking-[0.2em] uppercase border border-[#D9D0C3] text-[#9A9388]"
                          >
                            Notify me
                          </a>
                        )}
                      </div>

                    </div>

                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
