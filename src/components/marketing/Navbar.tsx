"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-1/90 backdrop-blur-md border-b border-gold/10">
      <div className="flex justify-between items-center px-8 py-5">
        <div className="flex items-center gap-3">
          <span className="text-gold font-bold text-xl tracking-widest">KOM-FORT</span>
          <span className="text-white/30 text-sm">Bilvård AB</span>
        </div>

        <ul className="hidden md:flex gap-8 text-sm text-white/60 tracking-widest uppercase">
          <li><a href="#tjanster" className="hover:text-gold transition-colors">Tjänster</a></li>
          <li><a href="#om" className="hover:text-gold transition-colors">Om oss</a></li>
          <li><a href="#kontakt" className="hover:text-gold transition-colors">Kontakt</a></li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="tel:0761943519"
            className="hidden md:block bg-gold text-black px-5 py-2 text-sm font-bold tracking-widest uppercase hover:bg-gold-dim transition-colors"
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
          <a href="#tjanster" onClick={() => setOpen(false)} className="text-white/70 tracking-widest uppercase text-sm hover:text-gold transition-colors">Tjänster</a>
          <a href="#om" onClick={() => setOpen(false)} className="text-white/70 tracking-widest uppercase text-sm hover:text-gold transition-colors">Om oss</a>
          <a href="#kontakt" onClick={() => setOpen(false)} className="text-white/70 tracking-widest uppercase text-sm hover:text-gold transition-colors">Kontakt</a>
          <a
            href="tel:0761943519"
            className="bg-gold text-black px-6 py-3 font-bold tracking-widest uppercase text-sm text-center hover:bg-gold-dim transition-colors"
          >
            Ring – 076-194 35 19
          </a>
        </div>
      )}
    </nav>
  );
}
