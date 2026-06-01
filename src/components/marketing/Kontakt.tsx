"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions";
import { FadeIn } from "@/components/ui/FadeIn";

const contactInfo = [
  { label: "Telefon", value: "076-194 35 19", href: "tel:0761943519" },
  { label: "E-post", value: "Komfort802@gmail.com", href: "mailto:Komfort802@gmail.com" },
  { label: "Adress", value: "Lindtorpsvägen 10, 702 37 Örebro", href: "#" },
  { label: "Öppet", value: "Alltid öppet", href: "#" },
];

export default function Kontakt() {
  const [state, action, pending] = useActionState(submitContact, null);

  return (
    <section id="kontakt" className="py-32 px-8 bg-surface-2 border-t border-gold/10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <FadeIn>
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 font-mono">— Kontakta oss</p>
          <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-8">
            BOKA DIN<br />TID IDAG.
          </h2>
          <div className="flex flex-col gap-6">
            {contactInfo.map((c) => (
              <div key={c.label} className="flex gap-4 items-start border-b border-white/5 pb-6">
                <p className="text-gold text-xs tracking-widest uppercase font-mono w-24 pt-1">{c.label}</p>
                <a href={c.href} className="text-white/70 hover:text-gold transition-colors">{c.value}</a>
              </div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          {state?.success ? (
            <div className="border border-gold/30 bg-gold/5 p-8 text-center">
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
                className="bg-gold text-black px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-gold-dim transition-all disabled:opacity-50"
              >
                {pending ? "Skickar..." : "Skicka förfrågan →"}
              </button>
            </form>
          )}
        </FadeIn>
      </div>
    </section>
  );
}
