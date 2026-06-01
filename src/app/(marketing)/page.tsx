import Hero from "@/components/marketing/Hero";
import Tjanster from "@/components/marketing/Tjanster";
import OmOss from "@/components/marketing/OmOss";
import Kontakt from "@/components/marketing/Kontakt";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Hero />
      <Tjanster />
      <OmOss />
      <Kontakt />
    </main>
  );
}
