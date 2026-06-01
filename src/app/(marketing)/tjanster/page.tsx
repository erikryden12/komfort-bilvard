import type { Metadata } from "next";
import Link from "next/link";
import { tjanster } from "@/data/tjanster";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Våra Tjänster – KOM-FORT Bilvård AB i Örebro",
  description: "Rekonditionering, polering, keramiskt lackskydd, biltvätt och invändig rekond i Örebro. Professionell bilvård av KOM-FORT Bilvård AB. Ring 076-194 35 19.",
};

export default function TjansterPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <section className="pt-40 pb-20 px-8 bg-surface-1">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 font-mono">— Vad vi erbjuder</p>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">VÅRA TJÄNSTER</h1>
            <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-16">
              Professionell bilvård i Örebro. Vi erbjuder allt från en enkel handtvätt till komplett rekonditionering och keramiskt lackskydd.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gold/10">
            {tjanster.map((t, i) => (
              <FadeIn key={t.slug} delay={i * 0.07}>
                <Link
                  href={`/tjanster/${t.slug}`}
                  className="group flex flex-col h-full bg-surface-1 p-8 hover:bg-surface-2 transition-colors border border-transparent hover:border-gold/20"
                >
                  <p className="text-gold/40 text-xs font-mono tracking-widest mb-4">{t.num}</p>
                  <h2 className="text-xl font-bold tracking-wide mb-3 group-hover:text-gold transition-colors">{t.title}</h2>
                  <p className="text-white/40 text-sm leading-relaxed flex-1">{t.shortDesc}</p>
                  <p className="text-gold/0 group-hover:text-gold text-xs tracking-widest uppercase font-mono mt-6 transition-all duration-300">
                    Läs mer →
                  </p>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 bg-surface-2 border-t border-gold/10">
        <FadeIn>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-2">Vet du inte vad du behöver?</h2>
              <p className="text-white/50">Ring oss så hjälper vi dig välja rätt tjänst för din bil.</p>
            </div>
            <a
              href="tel:0761943519"
              className="shrink-0 bg-gold text-black px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-gold-dim transition-all hover:-translate-y-1"
            >
              Ring – 076-194 35 19
            </a>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
