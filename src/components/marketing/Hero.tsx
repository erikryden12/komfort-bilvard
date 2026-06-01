"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const pairs = [
  { before: "/images/IMG_0858.jpg", after: "/images/IMG_0859.jpg" },
  { before: "/images/IMG_0866.jpg", after: "/images/IMG_0867.jpg" },
];

export default function Hero() {
  const [showAfter, setShowAfter] = useState(false);
  const [currentPair, setCurrentPair] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAfter((prev) => {
        if (prev) setCurrentPair((p) => (p + 1) % pairs.length);
        return !prev;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${showAfter ? "opacity-0" : "opacity-100"}`}>
        <Image src={pairs[currentPair].before} alt="Före" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm border border-white/20 px-4 py-2 text-xs tracking-widest uppercase text-white/70 font-mono">
          Före
        </div>
      </div>

      <div className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${showAfter ? "opacity-100" : "opacity-0"}`}>
        <Image src={pairs[currentPair].after} alt="Efter" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute top-24 left-1/2 -translate-x-1/2 bg-gold/20 backdrop-blur-sm border border-gold/50 px-4 py-2 text-xs tracking-widest uppercase text-gold font-mono">
          Efter
        </div>
      </div>

      <div className="relative z-10 text-center px-8">
        <p className="text-gold text-xs tracking-[0.4em] uppercase mb-6 font-mono">
          Örebro · Professionell Bilvård
        </p>
        <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4 leading-none">
          KOM<span className="text-gold">-</span>FORT
        </h1>
        <p className="text-white/50 text-lg tracking-widest uppercase mb-10">Bilvård AB</p>
        <p className="text-white/80 text-xl max-w-lg mx-auto mb-12 leading-relaxed font-light">
          Vi förvandlar din bil. Rekond, polering och lackskydd i Örebro.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="tel:0761943519"
            className="bg-gold text-black px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-gold-dim transition-all hover:-translate-y-1"
          >
            Ring – 076-194 35 19
          </a>
          <a
            href="#tjanster"
            className="border border-white/20 text-white/70 px-8 py-4 tracking-widest uppercase text-sm hover:border-gold hover:text-gold transition-all"
          >
            Våra tjänster
          </a>
        </div>
      </div>

    </section>
  );
}
