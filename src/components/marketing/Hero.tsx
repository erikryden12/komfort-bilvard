"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const pairs = [
  { before: "/images/IMG_0858.jpg", after: "/images/IMG_0859.jpg", beforePos: "45% 15%", afterPos: "60% 35%" },
  { before: "/images/IMG_0866.jpg", after: "/images/IMG_0867.jpg", beforePos: "50% 55%", afterPos: "50% 55%" },
];

function AnimatedHeroText() {
  const lines = ["Din bilvård", "i Örebro."];

  return (
    <div className="mb-8 leading-none text-left" aria-label="Din bilvård i Örebro.">
      {lines.map((line, i) => (
        <div key={line} className="block">
          <svg
            width="100%"
            height="auto"
            viewBox={`0 0 ${line.length * 58} 110`}
            preserveAspectRatio="xMinYMid meet"
            overflow="visible"
            aria-hidden="true"
          >
            <text
              x="0"
              y="95"
              fontSize="110"
              fontFamily="var(--font-bebas), sans-serif"
              letterSpacing="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hero-text-animate"
              style={{ animationDelay: `${i * 0.6}s` }}
            >
              {line}
            </text>
          </svg>
        </div>
      ))}
    </div>
  );
}

export default function Hero() {
  const [showAfter, setShowAfter] = useState(false);
  const [currentPair, setCurrentPair] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAfter((prev) => {
        if (prev) setCurrentPair((p) => (p + 1) % pairs.length);
        return !prev;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      <div className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${showAfter ? "opacity-0" : "opacity-100"}`}>
        <Image src={pairs[currentPair].before} alt="Före" fill className="object-cover object-[-50%_45%]" priority />
      </div>

      <div className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${showAfter ? "opacity-100" : "opacity-0"}`}>
        <Image src={pairs[currentPair].after} alt="Efter" fill className="object-cover object-[-100%_55%]" priority />
      </div>

      {/* Cinematic gradient — dark left for text legibility, no bottom darkening */}
      <div className={`absolute inset-0 transition-opacity duration-[2000ms] ${showAfter ? "opacity-60" : "opacity-100"} bg-gradient-to-r from-black/80 via-black/40 to-transparent`} />

      <div className="relative z-10 px-8 md:px-20 max-w-3xl">
        <AnimatedHeroText />
        <p className="text-white/60 text-lg max-w-md mb-14 leading-relaxed font-light text-left">
          Vi på Kom-Fort Bilvård förvandlar din bil. Med bilrekond, polering och lackskydd i Örebro.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="tel:0761943519"
            className="relative overflow-hidden bg-gold text-black px-10 py-3 font-bold tracking-widest uppercase text-sm rounded-lg transition-all after:absolute after:inset-0 after:bg-white/20 after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300"
          >
            Ring oss!
          </a>
          <a
            href="/tjanster"
            className="relative overflow-hidden border border-white/20 text-white/70 px-10 py-3 tracking-widest uppercase text-sm rounded-lg transition-all hover:border-gold hover:text-gold after:absolute after:inset-0 after:bg-gold/10 after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300"
          >
            Våra tjänster
          </a>
        </div>
      </div>

    </section>
  );
}
