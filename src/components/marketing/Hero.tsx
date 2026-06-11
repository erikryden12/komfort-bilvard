"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const pairs = [
  { before: "/images/IMG_0858.jpg", after: "/images/IMG_0859.jpg", beforePos: "50% 50%", afterPos: "50% 50%" },
  { before: "/images/IMG_0866.jpg", after: "/images/IMG_0867.jpg", beforePos: "50% 70%", afterPos: "50% 70%" },
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
  const [phase, setPhase] = useState<"before" | "after">("before");
  const [currentPair, setCurrentPair] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setPhase((prev) => {
          if (prev === "after") setCurrentPair((p) => (p + 1) % pairs.length);
          return prev === "before" ? "after" : "before";
        });
        setTransitioning(false);
      }, 1500);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const showAfter = phase === "after";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Before image — Ken Burns: alltid zoom in (1.08 → 1) */}
      <div
        className="absolute inset-0"
        style={{
          opacity: showAfter ? 0 : 1,
          transition: "opacity 1800ms cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <Image
          src={pairs[currentPair].before}
          alt="Före"
          fill
          className="object-cover"
          style={{
            objectPosition: pairs[currentPair].beforePos,
            transform: showAfter ? "scale(1.04)" : "scale(1)",
            transition: "transform 8000ms ease-in-out",
          }}
          priority
        />
      </div>

      {/* After image */}
      <div
        className="absolute inset-0"
        style={{
          opacity: showAfter ? 1 : 0,
          transition: "opacity 1800ms cubic-bezier(0.4,0,0.2,1)",
        }}
      >
        <Image
          src={pairs[currentPair].after}
          alt="Efter"
          fill
          className="object-cover"
          style={{
            objectPosition: pairs[currentPair].afterPos,
            transform: showAfter ? "scale(1)" : "scale(1.04)",
            transition: "transform 8000ms ease-in-out",
          }}
          priority
        />
      </div>

      {/* Overlay — mjuk vignette + gradient vänster för text */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Före/Efter-badge */}
      <div
        className="absolute top-28 right-8 md:right-16 z-10"
        style={{
          opacity: transitioning ? 0 : 1,
          transition: "opacity 600ms ease",
        }}
      >
        <span className={`text-[10px] font-mono tracking-[0.3em] uppercase px-3 py-1.5 border ${showAfter ? "border-gold/50 text-gold bg-gold/10" : "border-white/20 text-white/50 bg-black/30"}`}>
          {showAfter ? "Efter" : "Före"}
        </span>
      </div>

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
