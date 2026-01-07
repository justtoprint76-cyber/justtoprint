"use client";

export default function Header() {
  return (
    <header className="w-full bg-[#F3EDE4]">
      <nav className="w-full flex justify-center px-4 pt-4 sm:pt-6 pb-2 sm:pb-4">
        <ul
          className="
            flex flex-wrap items-center justify-center
            gap-x-7 gap-y-2 sm:gap-x-10
            text-[13px] sm:text-[14px]
            tracking-[0.22em] sm:tracking-[0.35em]
            uppercase
            !text-[#6F685E]
          "
        >
          <li>
            <a href="#home" className="!text-[#6F685E] hover:!text-[#4A463F] transition">
              Home
            </a>
          </li>

          <li>
            <a href="#shop" className="!text-[#6F685E] hover:!text-[#4A463F] transition">
              Shop
            </a>
          </li>

          <li className="opacity-40 select-none !text-[#6F685E]">—</li>

          <li>
            <a href="#about" className="!text-[#6F685E] hover:!text-[#4A463F] transition">
              About
            </a>
          </li>

          <li>
            <a href="#contact" className="!text-[#6F685E] hover:!text-[#4A463F] transition">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}


