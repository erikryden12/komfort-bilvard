import { FadeIn } from "@/components/ui/FadeIn";

const stats = [
  { num: "100%", label: "Handtvätt" },
  { num: "5★", label: "Kundnöjdhet" },
  { num: "Örebro", label: "Södra Lindhult" },
  { num: "Alltid", label: "Öppet" },
];

export default function OmOss() {
  return (
    <section id="om" className="py-32 px-8 bg-surface-1">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 font-mono">— Om oss</p>
          <h2 className="font-[family-name:var(--font-bebas)] text-6xl md:text-7xl tracking-wide mb-8">
            PASSION FÖR<br />
            <span className="text-gold">BILAR.</span>
          </h2>
          <p className="text-white/60 leading-relaxed mb-6">
            KOM-fort Bilvård AB grundades av Goran Ismailovic med en enkel vision – att ge varje bil i Örebro den omsorg den förtjänar. Vi behandlar varje fordon som om det vore vårt eget.
          </p>
          <p className="text-white/60 leading-relaxed mb-10">
            Vi finns på Lindtorpsvägen 10 i södra Örebro, nära E20 avfart 110 Adolfsberg.
          </p>
          <a
            href="/kontakt"
            className="relative overflow-hidden bg-gold text-black px-8 py-3 font-bold tracking-widest uppercase text-sm inline-block rounded-lg transition-all after:absolute after:inset-0 after:bg-white/20 after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300"
          >
            Kontakta oss
          </a>
        </FadeIn>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={0.1 + i * 0.08}>
              <div className="border border-gold/20 p-8 text-center hover:border-gold/60 transition-colors">
                <p className="text-gold text-3xl font-black mb-2">{s.num}</p>
                <p className="text-white/40 text-xs tracking-widest uppercase">{s.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
