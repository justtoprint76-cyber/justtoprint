import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-black/10 bg-[#f5f1ea]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between">
          <nav className="flex-1 flex justify-center">
            <ul className="flex items-center gap-6 md:gap-10 text-[11px] md:text-xs uppercase tracking-[0.25em] text-black">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#shop">Shop</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="ml-4 shrink-0">
            <Link
              href="/cart"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-4 md:px-5 py-2.5 text-[11px] md:text-xs uppercase tracking-[0.2em] text-black hover:bg-white transition"
            >
              <span>🛒</span>
              <span>Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}



