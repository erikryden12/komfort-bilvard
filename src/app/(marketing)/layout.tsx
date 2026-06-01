import type { Metadata } from "next";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";

export const metadata: Metadata = {
  title: "KOM-FORT Bilvård AB – Rekond & Polering i Örebro",
  description:
    "Professionell bilvård i Örebro. Rekonditionering, polering, lackskydd och handtvätt. Ring 076-194 35 19.",
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
