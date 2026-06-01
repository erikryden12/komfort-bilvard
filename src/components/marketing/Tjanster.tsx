import Link from "next/link";
import { tjanster } from "@/data/tjanster";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Tjanster() {
  return (
    <section id="tjanster" className="py-32 px-8 bg-surface-2">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 font-mono">— Vad vi erbjuder</p>
          <h2 className="font-[family-name:var(--font-bebas)] text-6xl md:text-8xl tracking-wide mb-16">VÅRA TJÄNSTER</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/10">
          {tjanster.map((s, i) => (
            <div
              key={s.num}
              className="bg-surface-2 hover:bg-surface-1 transition-colors group border border-transparent hover:border-gold/20"
            >
              <FadeIn delay={i * 0.07}>
                <Link href={`/tjanster/${s.slug}`} className="block p-8 h-full">
                  <p className="text-gold/40 text-xs font-mono tracking-widest mb-4">{s.num}</p>
                  <h3 className="text-xl font-bold tracking-wide mb-3 group-hover:text-gold transition-colors">{s.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-6">{s.shortDesc}</p>
                  <span className="text-gold/0 group-hover:text-gold text-xs tracking-widest uppercase font-mono transition-all duration-300">
                    Läs mer →
                  </span>
                </Link>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
