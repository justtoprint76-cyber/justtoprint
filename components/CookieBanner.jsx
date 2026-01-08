"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("jtp_cookie_consent");
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  function acceptCookies() {
    localStorage.setItem("jtp_cookie_consent", "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-3xl">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-[#D9D0C3] bg-[#F7F1E8] px-6 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
        <p className="text-[12px] sm:text-[13px] text-[#7A7267] leading-relaxed text-center sm:text-left">
          This website uses cookies to improve the user experience.
          <a
            href="/privacy"
            className="ml-1 underline hover:text-[#4A463F]"
          >
            Learn more
          </a>
        </p>

        <button
          onClick={acceptCookies}
          className="shrink-0 rounded-full px-5 py-2 text-[11px] tracking-[0.18em] uppercase bg-[#1A1408] text-[#F3EDE4] hover:opacity-90 transition"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
