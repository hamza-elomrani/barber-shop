import heroImg from "@/assets/hero.jpg";
import { MessageCircle } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const WHATSAPP_BASE = "https://wa.me/212600000000?text=";

const Hero = () => {
  const { t } = useLang();
  const wa = WHATSAPP_BASE + encodeURIComponent(t.wa.prefill);

  return (
    <section id="home" className="relative h-[100svh] min-h-[520px] sm:min-h-[600px] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Premium barbershop interior"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/70" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5 sm:px-6">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.35em] text-white/70 mb-5 sm:mb-6 animate-[fade-in-up_0.8s_ease-out]">
          {t.hero.eyebrow}
        </p>
        <h1 className="font-display text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05] max-w-4xl text-balance animate-[fade-in-up_0.9s_ease-out]">
          {t.hero.title_a} <span className="italic text-gold">{t.hero.title_em}</span> {t.hero.title_b}
        </h1>
        <p className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-white/80 max-w-2xl animate-[fade-in-up_1s_ease-out]">
          {t.hero.sub}
        </p>

        <div className="mt-8 sm:mt-10 flex w-full max-w-xs sm:max-w-none flex-col sm:w-auto sm:flex-row gap-3 animate-[fade-in-up_1.1s_ease-out]">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 h-14 px-6 sm:px-8 rounded-full bg-[#25D366] text-white text-[15px] font-medium shadow-elegant hover:scale-[1.02] transition-transform"
          >
            <MessageCircle className="h-5 w-5" fill="currentColor" />
            {t.hero.cta_wa}
          </a>
          <a
            href="#booking"
            className="inline-flex w-full sm:w-auto items-center justify-center h-14 px-6 sm:px-8 rounded-full border border-white/40 text-white text-[15px] font-medium backdrop-blur-sm hover:bg-white/10 transition-colors"
          >
            {t.hero.cta_book}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
