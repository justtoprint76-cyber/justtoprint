import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-black/10 bg-[#f5f1ea]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4">
        <div className="hidden md:flex items-center justify-between">
          <div className="w-[140px]" />

          <nav className="flex-1 flex justify-center">
            <ul className="flex items-center gap-10 text-xs uppercase tracking-[0.22em] text-black">
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

          <div className="w-[140px] flex justify-end">
            <Link
              href="/cart"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/60 px-5 py-2.5 text-xs uppercase tracking-[0.18em] text-black hover:bg-white transition"
            >
              <span>Cart</span>
            </Link>
          </div>
        </div>

        <div className="md:hidden flex flex-col items-center gap-4">
          <nav className="w-full">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-[11px] uppercase tracking-[0.2em] text-black">
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

          <Link
            href="/cart"
            className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/60 px-6 py-3 text-[11px] uppercase tracking-[0.18em] text-black"
          >
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
}
