"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions";
import { FadeIn } from "@/components/ui/FadeIn";

const contactInfo = [
  {
    label: "Telefon",
    value: "076-194 35 19",
    href: "tel:0761943519",
    cta: "Ring oss nu",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
      </svg>
    ),
  },
  {
    label: "E-post",
    value: "Komfort802@gmail.com",
    href: "mailto:Komfort802@gmail.com",
    cta: "Skicka mail",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    label: "Öppettider",
    value: "Alltid öppet",
    href: null,
    cta: null,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
  },
];

export default function Kontakt() {
  const [state, action, pending] = useActionState(submitContact, null);

  return (
    <section id="kontakt" className="py-32 px-8 bg-surface-2 border-t border-gold/10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeIn>
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 font-mono">— Kontakta oss</p>
          <h2 className="font-[family-name:var(--font-bebas)] text-6xl md:text-7xl tracking-wide mb-12">
            BOKA DIN<br />TID IDAG.
          </h2>
        </FadeIn>

        {/* Top row: contact cards + form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Contact cards */}
          <div className="flex flex-col gap-4">
            {contactInfo.map((c, i) => {
              const inner = (
                <div className="relative overflow-hidden flex items-center gap-6 p-7 border border-white/8 bg-white/[0.03] group-hover:border-gold/50 group-hover:bg-gold/[0.06] transition-all duration-400">
                  {/* Large faded icon background */}
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 text-white/[0.04] group-hover:text-gold/10 transition-colors duration-400 pointer-events-none">
                    <div className="w-20 h-20 [&>svg]:w-full [&>svg]:h-full">{c.icon}</div>
                  </div>
                  {/* Icon circle */}
                  <div className="shrink-0 w-12 h-12 border border-gold/30 bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-black group-hover:border-gold transition-all duration-300">
                    {c.icon}
                  </div>
                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <p className="text-gold/50 text-[10px] tracking-[0.35em] uppercase font-mono mb-1.5">{c.label}</p>
                    <p className="text-white text-lg font-bold tracking-tight leading-tight">{c.value}</p>
                    {c.cta && (
                      <p className="text-gold/0 group-hover:text-gold/70 text-[11px] tracking-widest uppercase font-mono mt-1.5 transition-all duration-300">
                        {c.cta} →
                      </p>
                    )}
                  </div>
                </div>
              );
              return (
                <FadeIn key={c.label} delay={i * 0.08}>
                  {c.href ? (
                    <a href={c.href} className="group block">{inner}</a>
                  ) : (
                    <div className="group">{inner}</div>
                  )}
                </FadeIn>
              );
            })}
          </div>

          {/* Form */}
          <FadeIn delay={0.2}>
            {state?.success ? (
              <div className="border border-gold/30 bg-gold/5 p-8 text-center h-full flex flex-col items-center justify-center">
                <p className="text-gold font-mono tracking-widest text-sm uppercase mb-2">Tack!</p>
                <p className="text-white/60 text-sm">Vi hör av oss inom kort.</p>
              </div>
            ) : (
              <form action={action} className="flex flex-col gap-4">
                <input
                  name="name"
                  type="text"
                  placeholder="Ditt namn"
                  required
                  className="bg-white/5 border border-white/10 text-white px-5 py-4 text-sm placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
                />
                <input
                  name="phone"
                  type="tel"
                  placeholder="Telefonnummer"
                  required
                  className="bg-white/5 border border-white/10 text-white px-5 py-4 text-sm placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
                />
                <select
                  name="service"
                  className="bg-surface-1 border border-white/10 text-white/70 px-5 py-4 text-sm focus:outline-none focus:border-gold transition-colors"
                >
                  <option value="">Välj tjänst</option>
                  <option>Rekonditionering</option>
                  <option>Polering</option>
                  <option>Lackskydd</option>
                  <option>Biltvätt</option>
                  <option>Annat</option>
                </select>
                <textarea
                  name="message"
                  placeholder="Meddelande..."
                  rows={4}
                  className="bg-white/5 border border-white/10 text-white px-5 py-4 text-sm placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors resize-none"
                />
                {state?.error && (
                  <p className="text-red-400 text-sm font-mono">{state.error}</p>
                )}
                <button
                  type="submit"
                  disabled={pending}
                  className="relative overflow-hidden bg-gold text-black px-8 py-3 font-bold tracking-widest uppercase text-sm rounded-lg transition-all disabled:opacity-50 after:absolute after:inset-0 after:bg-white/20 after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300"
                >
                  {pending ? "Skickar..." : "Skicka förfrågan →"}
                </button>
              </form>
            )}
          </FadeIn>
        </div>

        {/* Google Maps — full width */}
        <FadeIn delay={0.3}>
          <div className="relative border border-white/8 overflow-hidden">
            <iframe
              title="KOM-FORT Bilvård AB"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2042.0!2d15.2!3d59.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465c154d8f0c0001%3A0x1!2sLindtorpsv%C3%A4gen+10%2C+702+37+%C3%96rebro!5e0!3m2!1ssv!2sse!4v1"
              width="100%"
              height="340"
              style={{ border: 0, display: "block", filter: "grayscale(1) invert(0.9) contrast(0.85)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Overlay chip */}
            <a
              href="https://maps.google.com/?q=Lindtorpsvägen+10+702+37+Örebro"
              target="_blank"
              rel="noreferrer"
              className="absolute bottom-4 left-4 flex items-center gap-2 bg-surface-1/90 backdrop-blur-sm border border-gold/30 px-4 py-2 text-xs font-mono text-gold tracking-widest uppercase hover:bg-gold hover:text-black transition-all duration-300"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              Lindtorpsvägen 10, Örebro →
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
