"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const pairs = [
  { before: "/images/IMG_0858.jpg", after: "/images/IMG_0859.jpg", beforePos: "45% 15%", afterPos: "60% 35%" },
  { before: "/images/IMG_0866.jpg", after: "/images/IMG_0867.jpg", beforePos: "50% 55%", afterPos: "50% 55%" },
];

// Fixed glyph box so every line renders at the SAME font size.
// The SVG width tracks the text's natural width (set after measuring),
// so short lines no longer get scaled up to fill the column.
const FONT_SIZE = 150;
const BASELINE = 122;
const BOX_TOP = -16; // padding above caps for accents (Å, Ö)
const BOX_HEIGHT = FONT_SIZE + 8;

function HeroLine({ text, delay }: { text: string; delay: number }) {
  const textRef = useRef<SVGTextElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const textEl = textRef.current;
    const svgEl = svgRef.current;
    if (!textEl || !svgEl) return;

    const len = textEl.getComputedTextLength();
    const width = Math.ceil(len + 4);

    // viewBox keeps a constant height (== font size) across lines so scale is
    // identical; width hugs the text and the SVG inherits that aspect ratio.
    svgEl.setAttribute("viewBox", `0 ${BOX_TOP} ${width} ${BOX_HEIGHT}`);
    svgEl.style.width = `${(width / BOX_HEIGHT).toFixed(3)}em`;

    textEl.style.strokeDasharray = String(len + 20);
    textEl.style.strokeDashoffset = String(len + 20);
    textEl.style.animationDelay = `${delay}s`;
    textEl.classList.add("hero-text-animate");
  }, [delay]);

  return (
    <svg
      ref={svgRef}
      height="1em"
      style={{ fontSize: "clamp(62px, 13.2vw, 142px)", overflow: "visible", display: "block" }}
      viewBox={`0 ${BOX_TOP} 640 ${BOX_HEIGHT}`}
      preserveAspectRatio="xMinYMid meet"
      aria-hidden="true"
    >
      <text
        ref={textRef}
        x="0"
        y={BASELINE}
        fontSize={FONT_SIZE}
        fontFamily="var(--font-bebas), sans-serif"
        letterSpacing="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ fill: "transparent" }}
      >
        {text}
      </text>
    </svg>
  );
}

function AnimatedHeroText() {
  return (
    <div
      className="mb-5 text-left"
      aria-label="Din bilvård i Örebro."
      style={{ display: "flex", flexDirection: "column", gap: "0.02em" }}
    >
      <HeroLine text="Din bilvård" delay={0} />
      <HeroLine text="i Örebro." delay={0.65} />
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
        <p className="text-white/60 text-lg max-w-md mb-7 leading-snug font-light text-left">
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
            className="relative overflow-hidden border border-white/20 text-white/80 px-10 py-3 font-bold tracking-widest uppercase text-sm rounded-lg transition-all hover:border-gold hover:text-gold after:absolute after:inset-0 after:bg-gold/10 after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300"
          >
            Våra tjänster
          </a>
        </div>
      </div>

    </section>
  );
}
