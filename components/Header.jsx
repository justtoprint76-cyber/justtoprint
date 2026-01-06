export default function Header() {
  return (
    <header className="pt-4 pb-0 text-center">
      <nav className="text-[14px] tracking-[0.15em] text-[#8A8174]">
        <a className="mx-4 no-underline text-inherit" href="/">
          HOME
        </a>
        <span className="mx-2">—</span>
        <a className="mx-4 no-underline text-inherit" href="/#shop">
          SHOP
        </a>
        <a className="mx-4 no-underline text-inherit" href="/about">
          ABOUT
        </a>
        <a className="mx-4 no-underline text-inherit" href="/contact">
          CONTACT
        </a>
      </nav>
    </header>
  );
}

