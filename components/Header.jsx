"use client";

export default function Header() {
  return (
    <header className="w-full flex justify-center pt-6 pb-2">
      <nav className="flex items-center gap-10 text-sm tracking-[0.35em] text-[#8A8378] uppercase">
        <a href="#home" className="hover:text-black transition">
          Home
        </a>
        <a href="#shop" className="hover:text-black transition">
          Shop
        </a>
        <span className="opacity-40">—</span>
        <a href="#about" className="hover:text-black transition">
          About
        </a>
        <a href="#contact" className="hover:text-black transition">
          Contact
        </a>
      </nav>
    </header>
  );
}
