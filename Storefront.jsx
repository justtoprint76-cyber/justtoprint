import React, { useMemo, useState } from "react";

const PRODUCTS = [
  { id: "tee-001", name: "Stencil Logo Tee", price: 29.9, image: "https://picsum.photos/seed/jtp1/800/800", badge: "New", material: "100% cotton – 190 g/m²", print: "Handmade screenprint" },
  { id: "tee-002", name: "JTP Bold Hoodie", price: 54.9, image: "https://picsum.photos/seed/jtp2/800/800", badge: "Limited", material: "Heavy cotton fleece", print: "JUSTTOPRINT stencil" },
  { id: "tee-003", name: "Classic Oversize Tee", price: 34.9, image: "https://picsum.photos/seed/jtp3/800/800", material: "Combed cotton", print: "Small JTP logo" },
];

function formatPrice(n){ return n.toLocaleString("it-IT", { style: "currency", currency: "EUR" }); }

export default function Storefront(){
  const [query, setQuery] = useState("");
  const [cart, setCart] = useState([]);
  const [openCart, setOpenCart] = useState(false);
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => PRODUCTS.filter(p => p.name.toLowerCase().includes(query.toLowerCase())), [query]);
  const subtotal = useMemo(() => cart.reduce((a,l)=>a + l.price*l.qty, 0), [cart]);

  function addToCart(item, opts={}){
    const key = `${item.id}-${opts.color||""}-${opts.size||""}`;
    setCart(prev => {
      const i = prev.findIndex(x => x.key===key);
      if (i>-1) {
        const copy = [...prev]; copy[i] = { ...copy[i], qty: copy[i].qty+1 }; return copy;
      }
      return [...prev, { key, ...item, ...opts, qty: 1 }];
    });
    setOpenCart(true);
  }
  function updateQty(key, delta){
    setCart(prev => prev.map(x => x.key===key ? { ...x, qty: Math.max(1, x.qty+delta)} : x));
  }
  async function handleCheckout(){
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: cart.map(i => ({ id: i.id, name: i.name, unit_amount: Math.round(i.price*100), quantity: i.qty })) })
    });
    const data = await res.json();
    if (data?.url) window.location.href = data.url;
    else alert(data?.msg || data?.error || "Checkout non attivo (aggiungeremo Stripe).");
  }

  return (
    <div className="min-h-screen bg-neutral-100 text-neutral-900">
      <header className="sticky top-0 z-40 bg-neutral-900 text-white border-b border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <h1 className="font-extrabold tracking-tight text-lg">JUSTTOPRINT</h1>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#shop" className="hover:text-neutral-400">Shop</a>
            <a href="#about" className="hover:text-neutral-400">About</a>
            <a href="#contact" className="hover:text-neutral-400">Contact</a>
          </nav>
          <button className="rounded-2xl border border-white/20 px-3 py-1 text-sm hover:bg-white hover:text-neutral-900" onClick={()=>setOpenCart(true)}>
            Cart ({cart.reduce((a,l)=>a+l.qty,0)})
          </button>
        </div>
      </header>

      <section className="bg-neutral-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">PRINTED TO LAST.</h2>
            <p className="mt-4 text-neutral-400">JUSTTOPRINT è un brand nato dalla serigrafia artigianale. Capi essenziali con stampa manuale.</p>
            <div className="mt-8 flex gap-3">
              <a href="#shop" className="bg-white text-neutral-900 font-semibold rounded-xl px-5 py-3 hover:bg-neutral-200">Shop Now</a>
              <a href="#about" className="border border-white rounded-xl px-5 py-3 font-medium hover:bg-white hover:text-neutral-900">Our Story</a>
            </div>
          </div>
          <img src="https://picsum.photos/seed/jtpHero/900/900" alt="JUSTTOPRINT collection" className="rounded-3xl shadow-2xl" />
        </div>
      </section>

      <section id="shop" className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-semibold">SHOP</h2>
          <input type="text" placeholder="Search..." value={query} onChange={e=>setQuery(e.target.value)} className="rounded-xl border px-4 py-2 text-sm" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map(p => (
            <div key={p.id} className="rounded-3xl bg-white overflow-hidden shadow hover:shadow-lg transition">
              <img src={p.image} alt={p.name} className="aspect-square object-cover" />
              <div className="p-4">
                <h3 className="font-semibold">{p.name}</h3>
                <p className="text-sm text-neutral-600 mt-1">{p.print}</p>
                <div className="mt-3 flex justify-between items-center">
                  <span className="font-semibold">{formatPrice(p.price)}</span>
                  <div className="flex gap-2">
                    <button className="rounded-xl border border-neutral-900 px-3 py-1 text-sm hover:bg-neutral-900 hover:text-white" onClick={()=>setSelected(p)}>Details</button>
                    <button className="rounded-xl border border-neutral-900 px-3 py-1 text-sm hover:bg-neutral-900 hover:text-white" onClick={()=>addToCart(p)}>Add</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="bg-white border-t border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10 items-center">
          <img src="https://picsum.photos/seed/jtpLab/900/900" alt="lab" className="rounded-3xl" />
          <div>
            <h2 className="text-2xl font-semibold">ABOUT US</h2>
            <p className="mt-4 text-neutral-700 leading-relaxed">JUSTTOPRINT nasce da un laboratorio di serigrafia artigianale. Ogni capo è pensato, stampato e rifinito a mano in Italia.</p>
            <ul className="mt-6 space-y-2 text-sm text-neutral-700">
              <li>✓ 100% Cotton</li>
              <li>✓ Handmade Prints</li>
              <li>✓ Unisex Fit</li>
              <li>✓ Made in Italy</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-neutral-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-semibold">CONTACT</h2>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Email: <a href="mailto:info@justtoprint.it" className="underline">info@justtoprint.it</a></li>
              <li>WhatsApp: +39 000 000 0000</li>
              <li>Instagram: @justtoprint</li>
            </ul>
          </div>
          <form className="bg-neutral-800 p-6 rounded-3xl grid gap-4">
            <input className="rounded-xl border border-neutral-700 bg-neutral-800 px-4 py-2 text-sm" placeholder="Name" />
            <input className="rounded-xl border border-neutral-700 bg-neutral-800 px-4 py-2 text-sm" placeholder="Email" />
            <textarea className="rounded-xl border border-neutral-700 bg-neutral-800 px-4 py-2 text-sm min-h-[100px]" placeholder="Message" />
            <button className="rounded-xl bg-white text-neutral-900 font-semibold px-5 py-3 text-sm hover:bg-neutral-200">Send</button>
          </form>
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center p-4" onClick={()=>setSelected(null)}>
          <div className="max-w-3xl w-full bg-white rounded-3xl overflow-hidden" onClick={e=>e.stopPropagation()}>
            <div className="grid md:grid-cols-2">
              <img src={selected.image} alt={selected.name} className="w-full h-full object-cover" />
              <div className="p-6">
                <div className="text-xs text-neutral-500">{selected.badge||""}</div>
                <h3 className="text-xl font-semibold mt-1">{selected.name}</h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="font-semibold">{formatPrice(selected.price)}</span>
                </div>
                <p className="mt-4 text-sm text-neutral-700">{selected.material} · {selected.print}</p>
                <div className="mt-6 flex gap-3">
                  <button className="rounded-2xl px-5 py-3 bg-neutral-900 text-white text-sm font-medium" onClick={()=>addToCart(selected)}>Add to cart</button>
                  <button className="rounded-2xl px-5 py-3 border text-sm" onClick={()=>setSelected(null)}>Close</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {openCart && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50">
          <div className="bg-white w-full max-w-sm h-full flex flex-col">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-semibold">Cart</h3>
              <button onClick={()=>setOpenCart(false)} className="text-sm underline">Close</button>
            </div>
            <div className="flex-1 overflow-auto divide-y">
              {cart.length === 0 ? (
                <p className="p-4 text-sm text-neutral-600">Cart is empty</p>
              ) : (
                cart.map((item) => (
                  <div key={item.key} className="p-4 flex items-center gap-3">
                    <img src={item.image} alt="" className="w-16 h-16 object-cover rounded-xl" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.name}</p>
                      <p className="text-xs text-neutral-600">{formatPrice(item.price)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="rounded-full w-8 h-8 border" onClick={()=>updateQty(item.key, -1)}>-</button>
                      <span className="w-6 text-center text-sm">{item.qty}</span>
                      <button className="rounded-full w-8 h-8 border" onClick={()=>updateQty(item.key, +1)}>+</button>
                    </div>
                  </div>
                ))
              )}
            </div>
            <div className="p-4 border-t">
              <div className="flex justify-between text-sm mb-3">
                <span>Subtotal</span>
                <span className="font-semibold">{formatPrice(subtotal)}</span>
              </div>
              <button onClick={handleCheckout} className="w-full bg-neutral-900 text-white rounded-xl py-3 font-semibold hover:bg-neutral-800">Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
