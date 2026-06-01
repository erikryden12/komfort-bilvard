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
      </div>

      <div className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${showAfter ? "opacity-100" : "opacity-0"}`}>
        <Image src={pairs[currentPair].after} alt="Efter" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 text-center px-8">
        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 leading-none">
          Din bilvård i Örebro.
        </h1>
        <p className="text-white/80 text-xl max-w-lg mx-auto mb-12 leading-relaxed font-light">
          Vi på Kom-Fort Bilvård förvandlar din bil. Med bilrekond, polering och lackskydd i Örebro.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="tel:0761943519"
            className="bg-gold text-black px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-gold-dim transition-all hover:-translate-y-1 rounded-lg"
          >
            Ring oss!
          </a>
          <a
            href="#tjanster"
            className="border border-white/20 text-white/70 px-8 py-4 tracking-widest uppercase text-sm hover:border-gold hover:text-gold transition-all rounded-lg"
          >
            Våra tjänster
          </a>
        </div>
      </div>

    </section>
  );
}
