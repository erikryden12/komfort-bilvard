import type { Metadata } from "next";
import Kontakt from "@/components/marketing/Kontakt";

export const metadata: Metadata = {
  title: "Kontakta oss – KOM-FORT Bilvård AB",
  description: "Boka tid eller ställ en fråga. Ring 076-194 35 19 eller skicka ett meddelande. Vi finns på Lindtorpsvägen 10, Örebro.",
};

export default function KontaktPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Kontakt />
    </main>
  );
}
