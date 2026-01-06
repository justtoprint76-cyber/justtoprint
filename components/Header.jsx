"use client";

export default function Header() {
  return (
    <header className="w-full flex justify-center pt-6 pb-2">
      <nav className="flex items-center gap-10 text-sm tracking-[0.35em] uppercase text-[#7A7267]">
        <a href="#home" className="hover:text-[#4A463F] transition">
          Home
        </a>
        <a href="#shop" className="hover:text-[#4A463F] transition">
          Shop
        </a>

        <span className="opacity-40">—</span>

        <a href="#about" className="hover:text-[#4A463F] transition">
          About
        </a>
        <a href="#contact" className="hover:text-[#4A463F] transition">
          Contact
        </a>
      </nav>
    </header>
  );
}

