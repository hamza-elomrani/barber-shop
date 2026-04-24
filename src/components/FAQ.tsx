import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLang } from "@/i18n/LanguageContext";

const FAQ = () => {
  const { t } = useLang();
  return (
    <section id="faq" className="py-24 md:py-36 bg-secondary/40">
      <div className="container max-w-3xl">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">{t.faq.eyebrow}</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            {t.faq.title_a} <span className="italic text-gold">{t.faq.title_em}</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {t.faq.items.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-b border-border">
              <AccordionTrigger className="text-start text-base md:text-lg py-6 hover:no-underline font-normal">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
