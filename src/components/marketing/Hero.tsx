"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Particles } from "@/components/ui/Particles";

type Slide = {
  src: string;
  label: "Före" | "Efter";
  pos: string;
  scale: number;
  kenBurns: boolean;
};

const slides: Slide[] = [
  { src: "/bilder/1.png", label: "Före", pos: "50% 50%", scale: 1,    kenBurns: false },
  { src: "/bilder/2.png", label: "Efter", pos: "50% 50%", scale: 1.12, kenBurns: false },
  { src: "/bilder/3.png", label: "Före", pos: "50% 50%", scale: 1,    kenBurns: false },
  { src: "/bilder/4.png", label: "Efter", pos: "50% 50%", scale: 1.08, kenBurns: false },
];

const FONT_SIZE = 150;
const BASELINE = 122;
const BOX_TOP = -16;
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
  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [badgeIndex, setBadgeIndex] = useState(0);
  const [badgeHidden, setBadgeHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setBadgeHidden(true);
      setActive((cur) => {
        setPrev(cur);
        return (cur + 1) % slides.length;
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (active === badgeIndex) return;
    const t = setTimeout(() => {
      setBadgeIndex(active);
      setBadgeHidden(false);
    }, 900);
    return () => clearTimeout(t);
  }, [active, badgeIndex]);

  const badgeLabel = slides[badgeIndex].label;

  // Scenbyten (2→3 och 4→1) dippar genom svart.
  // Parbyten (1→2 och 3→4) crossfadar direkt.
  const isSceneCut = prev !== null && (
    (prev === 1 && active === 2) || (prev === 3 && active === 0)
  );

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">

      {/* Bilderna till höger — bredare än synytan så vänsterkanten kan fadas in i svart */}
      <div className="absolute inset-y-0 right-0 w-[72%] md:w-[68%]">
        {slides.map((slide, i) => {
          const isActive = i === active;
          const isOut = i === prev && prev !== active;
          let transition: string;
          if (isSceneCut) {
            if (isActive) {
              transition = "opacity 700ms cubic-bezier(0.4,0,0.2,1) 450ms";
            } else if (isOut) {
              transition = "opacity 500ms cubic-bezier(0.4,0,0.2,1)";
            } else {
              transition = "none";
            }
          } else {
            transition = "opacity 1200ms cubic-bezier(0.4,0,0.2,1)";
          }

          return (
            <div
              key={slide.src}
              className="absolute inset-0"
              aria-hidden={!isActive}
              style={{ opacity: isActive ? 1 : 0, transition, willChange: "opacity" }}
            >
              <Image
                src={slide.src}
                alt={slide.label}
                fill
                sizes="55vw"
                className="object-cover object-center"
                preload={i === 0}
                loading={i === 0 ? undefined : "eager"}
              />
            </div>
          );
        })}

        {/* Mjuk fade — helt svart vid vänsterkanten, tonar gradvis ut in i bilden */}
        <div className="absolute inset-0 pointer-events-none" style={{background: "linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.95) 12%, rgba(0,0,0,0.7) 28%, rgba(0,0,0,0.35) 42%, rgba(0,0,0,0.12) 55%, transparent 70%)"}} />
      </div>

      {/* Particles på vänster/svart sida */}
      <Particles
        className="absolute inset-y-0 left-0 w-[55%]"
        quantity={80}
        color="#C9A84C"
        size={1.2}
        staticity={60}
        ease={60}
      />

      {/* Subtil mörkläggning nedtill */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />

      {/* Före/Efter-badge */}
      <div
        className="absolute top-28 right-8 md:right-16 z-10"
        style={{ opacity: badgeHidden ? 0 : 1, transition: "opacity 600ms ease" }}
      >
        <span className={`text-[10px] font-mono tracking-[0.3em] uppercase px-3 py-1.5 border ${badgeLabel === "Efter" ? "border-gold/50 text-gold bg-gold/10" : "border-white/20 text-white/50 bg-black/30"}`}>
          {badgeLabel}
        </span>
      </div>

      {/* Text till vänster */}
      <div className="relative z-10 px-8 md:px-20 max-w-xl">
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
