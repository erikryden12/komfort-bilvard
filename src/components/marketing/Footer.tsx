import Link from "next/link";

const links = [
  { label: "Tjänster", href: "/tjanster" },
  { label: "Om oss", href: "/#om" },
  { label: "Kontakt", href: "/kontakt" },
];

const tjanster = [
  { label: "Rekonditionering", href: "/tjanster/rekonditionering" },
  { label: "Polering", href: "/tjanster/polering" },
  { label: "Lackskydd", href: "/tjanster/lackskydd" },
  { label: "Biltvätt", href: "/tjanster/biltvatt" },
  { label: "Invändig Rekond", href: "/tjanster/invandig-rekond" },
];

export default function Footer() {
  return (
    <footer className="bg-surface-3 border-t border-gold/10">
      {/* Main footer */}
      <div className="max-w-6xl mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Brand */}
        <div className="md:col-span-1">
          <Link href="/" className="inline-block mb-4">
            <span className="text-gold font-bold text-xl tracking-widest">KOM-FORT</span>
            <span className="text-white/30 text-sm ml-2">Bilvård AB</span>
          </Link>
          <p className="text-white/40 text-sm leading-relaxed mb-6">
            Professionell bilvård i Örebro. Vi förvandlar din bil med rekond, polering och lackskydd.
          </p>
          {/* Social */}
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/komfort_bilvard"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4">
                <rect x="2.25" y="2.25" width="19.5" height="19.5" rx="5.25" />
                <circle cx="12" cy="12" r="3.75" />
                <circle cx="17.25" cy="6.75" r="0.75" fill="currentColor" stroke="none" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/people/KOM-fort-Bilvård-AB/61581563706114/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.887v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div>
          <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-mono mb-5">Navigering</p>
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/50 text-sm hover:text-gold transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Tjänster */}
        <div>
          <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-mono mb-5">Tjänster</p>
          <ul className="flex flex-col gap-3">
            {tjanster.map((t) => (
              <li key={t.href}>
                <Link href={t.href} className="text-white/50 text-sm hover:text-gold transition-colors">
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Kontakt */}
        <div>
          <p className="text-gold text-[10px] tracking-[0.3em] uppercase font-mono mb-5">Kontakt</p>
          <ul className="flex flex-col gap-3 text-sm text-white/50">
            <li>
              <a href="tel:0761943519" className="hover:text-gold transition-colors">
                076-194 35 19
              </a>
            </li>
            <li>
              <a href="mailto:Komfort802@gmail.com" className="hover:text-gold transition-colors">
                Komfort802@gmail.com
              </a>
            </li>
            <li className="leading-relaxed">
              Lindtorpsvägen 10<br />
              702 37 Örebro
            </li>
            <li className="text-white/30">Alltid öppet</li>
          </ul>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5 px-8 py-5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <span className="text-white/20 text-xs font-mono">© 2025 KOM-FORT Bilvård AB</span>
          <span className="text-white/20 text-xs font-mono">Lindtorpsvägen 10, 702 37 Örebro</span>
        </div>
      </div>
    </footer>
  );
}
