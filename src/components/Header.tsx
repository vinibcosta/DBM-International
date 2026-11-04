"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { images, nav, site } from "@/content/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="container-site flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex shrink-0 items-center gap-2" aria-label={`${site.name} — página inicial`}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={images.logo} alt="DBM Logo" className="h-14 w-auto" />
        </Link>

        <nav className="hidden lg:block" aria-label="Menu principal">
          <ul className="flex items-center gap-1">
            {nav.map((item) => {
              const active = !item.external && pathname === item.href;
              return (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className={`rounded-full px-3 py-2 font-display text-[13px] font-semibold uppercase tracking-wide transition hover:bg-brand-light hover:text-brand ${
                      active ? "bg-brand-light text-brand" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-brand lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-black/5 bg-white lg:hidden" aria-label="Menu móvel">
          <ul className="container-site flex flex-col py-3">
            {nav.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  onClick={() => setOpen(false)}
                  className="block py-3 font-display text-sm font-semibold uppercase tracking-wide text-ink hover:text-brand"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
