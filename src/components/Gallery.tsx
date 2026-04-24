import { useState } from "react";
import { X } from "lucide-react";
import fade1 from "@/assets/fade1.jpg";
import fade2 from "@/assets/fade2.jpg";
import beard1 from "@/assets/beard1.jpg";
import beard2 from "@/assets/beard2.jpg";
import modern1 from "@/assets/modern1.jpg";
import modern2 from "@/assets/modern2.jpg";
import { useLang } from "@/i18n/LanguageContext";

type CatKey = "All" | "Fades" | "Beards" | "Styles";

const items: { src: string; cat: Exclude<CatKey, "All">; alt: string }[] = [
  { src: fade1, cat: "Fades", alt: "Skin fade" },
  { src: beard1, cat: "Beards", alt: "Beard grooming" },
  { src: modern1, cat: "Styles", alt: "Modern crop" },
  { src: fade2, cat: "Fades", alt: "Low fade" },
  { src: beard2, cat: "Beards", alt: "Razor beard trim" },
  { src: modern2, cat: "Styles", alt: "Pompadour" },
];

const cats: CatKey[] = ["All", "Fades", "Beards", "Styles"];

const Gallery = () => {
  const { t } = useLang();
  const [active, setActive] = useState<CatKey>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);

  return (
    <section id="gallery" className="py-24 md:py-36 bg-secondary/40">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">{t.gallery.eyebrow}</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              {t.gallery.title_a} <span className="italic text-gold">{t.gallery.title_em}</span> {t.gallery.title_b}
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 h-9 text-sm rounded-full border transition-all ${
                  active === c
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border bg-background text-muted-foreground hover:text-foreground"
                }`}
              >
                {t.gallery.cats[c]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5">
          {filtered.map((item) => (
            <button
              key={item.src}
              onClick={() => setLightbox(item.src)}
              className="group relative overflow-hidden rounded-xl aspect-[4/5] bg-muted"
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                width={800}
                height={1000}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md flex items-center justify-center p-4 animate-[fade-in-up_0.3s_ease-out]"
        >
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-foreground hover:opacity-70"
            aria-label="Close"
          >
            <X className="h-7 w-7" />
          </button>
          <img src={lightbox} alt="" className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-elegant" />
        </div>
      )}
    </section>
  );
};

export default Gallery;
