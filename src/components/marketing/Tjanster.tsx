import { FadeIn } from "@/components/ui/FadeIn";

const services = [
  { num: "01", title: "Rekonditionering", desc: "Komplett invändig och utvändig behandling. Din bil återfår nybilskänslan." },
  { num: "02", title: "Polering", desc: "Maskinpolering som tar bort repor och oxidering. Lacken återfår sitt djup och glans." },
  { num: "03", title: "Lackskydd", desc: "Keramiskt lackskydd som skyddar lacken mot väder, smuts och UV-strålar." },
  { num: "04", title: "Biltvätt", desc: "Noggrann handtvätt med professionella produkter. Aldrig automattvättar som repar lacken." },
  { num: "05", title: "Invändig Rekond", desc: "Kemtvätt av klädsel och mattor, rengöring av alla ytor. Fräscht och rent." },
  { num: "06", title: "På Förfrågan", desc: "Motortvätt, glasbehandling och mer. Kontakta oss för skräddarsydd lösning." },
];

export default function Tjanster() {
  return (
    <section id="tjanster" className="py-32 px-8 bg-surface-2">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 font-mono">— Vad vi erbjuder</p>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-16">VÅRA TJÄNSTER</h2>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gold/10">
          {services.map((s, i) => (
            <div
              key={s.num}
              className="bg-surface-2 p-8 hover:bg-surface-1 transition-colors group border border-transparent hover:border-gold/20"
            >
              <FadeIn delay={i * 0.07}>
                <p className="text-gold/40 text-xs font-mono tracking-widest mb-4">{s.num}</p>
                <h3 className="text-xl font-bold tracking-wide mb-3 group-hover:text-gold transition-colors">{s.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{s.desc}</p>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
