import { useLang } from "@/i18n/LanguageContext";

const Services = () => {
  const { t } = useLang();

  return (
    <section id="services" className="py-24 md:py-36">
      <div className="container">
        <div className="max-w-2xl mb-16 md:mb-20">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">{t.services.eyebrow}</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            {t.services.title_a} <span className="italic text-gold">{t.services.title_em}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {t.services.items.map((s) => (
            <div
              key={s.name}
              className="bg-background p-6 sm:p-8 md:p-10 flex flex-col justify-between min-h-[220px] md:min-h-[260px] hover:bg-secondary/40 transition-colors"
            >
              <div>
                <h3 className="font-display text-xl sm:text-2xl mb-3">{s.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
              <div className="mt-8 flex items-end justify-between gap-4">
                <span className="text-xs uppercase tracking-widest text-muted-foreground">{s.duration}</span>
                <span className="font-display text-3xl whitespace-nowrap">
                  {s.price} <span className="text-sm text-muted-foreground">{t.services.mad}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
