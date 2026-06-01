"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${scrolled ? "bg-surface-1/90 backdrop-blur-md border-gold/10" : "bg-transparent border-transparent"}`}>
      <div className="flex justify-between items-center px-8 py-5">
        <Link href="/" className="relative h-10 w-32 overflow-visible">
          <Image
            src="/logo/kom-fort logga.svg"
            alt="Kom-Fort Bilvård"
            width={100}
            height={100}
            className="absolute top-1/2 -translate-y-1/2 left-0"
            priority
          />
        </Link>

        <ul className="hidden md:flex gap-8 text-sm text-white/60 tracking-widest uppercase">
          <li><a href="/tjanster" className="relative hover:text-gold transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-150 hover:after:w-full">Tjänster</a></li>
          <li><a href="/#om" className="relative hover:text-gold transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-150 hover:after:w-full">Om oss</a></li>
          <li><a href="/kontakt" className="relative hover:text-gold transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-150 hover:after:w-full">Kontakt</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="tel:0761943519"
            className="hidden md:block bg-gold text-black px-5 py-2 text-sm font-bold tracking-widest uppercase hover:bg-gold-dim transition-colors rounded-lg"
          >
            Boka nu
          </a>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Öppna meny"
          >
            <span className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-surface-2 border-t border-gold/10 px-8 py-6 flex flex-col gap-6">
          <a href="/tjanster" onClick={() => setOpen(false)} className="text-white/70 tracking-widest uppercase text-sm hover:text-gold transition-colors">Tjänster</a>
          <a href="/#om" onClick={() => setOpen(false)} className="text-white/70 tracking-widest uppercase text-sm hover:text-gold transition-colors">Om oss</a>
          <a href="/kontakt" onClick={() => setOpen(false)} className="text-white/70 tracking-widest uppercase text-sm hover:text-gold transition-colors">Kontakt</a>
          <a
            href="tel:0761943519"
            className="bg-gold text-black px-6 py-3 font-bold tracking-widest uppercase text-sm text-center hover:bg-gold-dim transition-colors rounded-lg"
          >
            Ring – 076-194 35 19
          </a>
        </div>
      )}
    </nav>
  );
}
