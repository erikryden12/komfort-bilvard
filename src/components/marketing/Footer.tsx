export default function Footer() {
  return (
    <footer className="py-8 px-8 bg-surface-3 border-t border-gold/10 flex justify-between items-center flex-wrap gap-4">
      <span className="text-gold font-bold tracking-widest">
        KOM-FORT <span className="text-white/30 font-normal text-sm">Bilvård AB</span>
      </span>
      <span className="text-white/20 text-xs font-mono">© 2025 · Lindtorpsvägen 10, Örebro</span>
      <a href="tel:0761943519" className="text-white/40 text-sm hover:text-gold transition-colors">
        076-194 35 19
      </a>
    </footer>
  );
}
