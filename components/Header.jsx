"use client";

export default function Header() {
  return (
    <header
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        paddingTop: "24px",
        paddingBottom: "12px",
        color: "#7A7267", // ← FORZATO (anti-oro)
      }}
    >
      <nav className="flex justify-center pt-6 pb-4 px-4">
  <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 sm:gap-10 text-[13px] sm:text-[14px] tracking-[0.22em] sm:tracking-[0.35em] uppercase text-[#7A7267]">
    <li><a href="#home" className="hover:text-[#4A463F] transition">Home</a></li>
    <li><a href="#shop" className="hover:text-[#4A463F] transition">Shop</a></li>
    <li className="opacity-40">—</li>
    <li><a href="#about" className="hover:text-[#4A463F] transition">About</a></li>
    <li><a href="#contact" className="hover:text-[#4A463F] transition">Contact</a></li>
  </ul>
</nav>
    </header>
  );
}

