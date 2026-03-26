import Link from "next/link";

export default function Cart() {
  // Temporaneo: qui poi collegheremo i veri item del carrello
  const cartItems = [];

  const subtotal = 0;

  return (
    <div className="min-h-screen bg-[#f5f1ea] text-black px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl md:text-5xl font-serif tracking-wide">
            Cart
          </h1>
          <p className="mt-3 text-sm uppercase tracking-[0.2em] text-black/60">
            Justtoprint selection
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="border border-black/10 bg-white/40 p-8 md:p-12">
            <p className="text-base md:text-lg font-serif mb-6">
              Your cart is currently empty.
            </p>

            <Link
              href="/shop"
              className="inline-block border border-black px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-black hover:text-white transition"
            >
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.8fr] gap-10">
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div
                  key={index}
                  className="border border-black/10 bg-white/40 p-4 flex gap-4"
                >
                  <div className="w-24 h-28 bg-black/5" />
                  <div className="flex-1">
                    <h2 className="font-serif text-lg">{item.name}</h2>
                    <p className="text-sm text-black/60 mt-1">{item.category}</p>
                    <p className="text-sm mt-3">€{item.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="border border-black/10 bg-white/40 p-6 h-fit">
              <h2 className="font-serif text-2xl mb-6">Summary</h2>

              <div className="flex justify-between text-sm uppercase tracking-[0.15em] mb-4">
                <span>Subtotal</span>
                <span>€{subtotal}</span>
              </div>

              <p className="text-xs text-black/60 mb-6">
                Shipping and taxes calculated at checkout.
              </p>

              <button className="w-full border border-black bg-black text-white px-6 py-4 text-xs uppercase tracking-[0.2em] hover:opacity-90 transition">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
