import Link from "next/link";

export default function MobileShopBar({ activeTab, setActiveTab, cartCount = 0 }) {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-black/10 bg-[#F3EDE4]/95 backdrop-blur">
      <div className="grid grid-cols-3 text-center">
        <button
          type="button"
          onClick={() => setActiveTab("men")}
          className={`py-4 text-[11px] uppercase tracking-[0.2em] ${
            activeTab === "men" ? "text-black" : "text-black/45"
          }`}
        >
          Men
        </button>

        <Link
          href="/cart"
          className="py-4 text-[11px] uppercase tracking-[0.2em] text-black border-x border-black/10"
        >
          Cart{cartCount > 0 ? ` (${cartCount})` : ""}
        </Link>

        <button
          type="button"
          onClick={() => setActiveTab("women")}
          className={`py-4 text-[11px] uppercase tracking-[0.2em] ${
            activeTab === "women" ? "text-black" : "text-black/45"
          }`}
        >
          Women
        </button>
      </div>
    </div>
  );
}
