import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { useEffect } from "react";
import { useLang } from "@/i18n/LanguageContext";

const Index = () => {
  const { lang } = useLang();

  useEffect(() => {
    const isAr = lang === "ar";
    document.title = isAr
      ? "barber shop — صالون حلاقة فاخر بالدار البيضاء"
      : "barber shop — Barbier premium à Casablanca";
    const content = isAr
      ? "صالون حلاقة فاخر بالدار البيضاء. قصّات دقيقة، عناية باللحية وتجربة حلاقة راقية. احجز عبر واتساب."
      : "Barbier premium à Casablanca. Coupes nettes, soins de barbe et expérience de grooming de luxe. Réservez sur WhatsApp.";
    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", content);
  }, [lang]);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Booking />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
