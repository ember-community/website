"use client";

import { useState } from "react";

const links = ["Features", "How It Works", "Topics"];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-10 py-4 flex items-center justify-between backdrop-blur-xl bg-gradient-to-b from-night-sky/95 to-night-sky/0">
      {/* Logo */}
      <div className="flex items-center gap-2.5">
        <img src="/logo.png" alt="Ember" width={32} height={32} className="rounded-lg" />
        <span className="font-display text-[22px] font-bold">Ember</span>
      </div>

      {/* Desktop links */}
      <div className="hidden md:flex gap-8 items-center">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/ /g, "-")}`}
            className="text-ash text-sm font-medium hover:text-firelight transition-colors"
          >
            {link}
          </a>
        ))}
        <a
          href="#notify"
          className="cta-btn !px-6 !py-2.5 !text-[13px] no-underline"
        >
          Get Notified
        </a>
      </div>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-0.5 bg-firelight transition-transform ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block w-5 h-0.5 bg-firelight transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
        <span className={`block w-5 h-0.5 bg-firelight transition-transform ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-night-sky/95 backdrop-blur-xl border-b border-smoke/20 p-6 flex flex-col gap-4 md:hidden">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase().replace(/ /g, "-")}`}
              className="text-ash text-base font-medium hover:text-firelight transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#notify"
            className="cta-btn text-center !text-sm"
            onClick={() => setMobileOpen(false)}
          >
            Get Notified
          </a>
        </div>
      )}
    </nav>
  );
}
