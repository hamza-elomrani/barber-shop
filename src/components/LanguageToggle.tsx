import { useLang } from "@/i18n/LanguageContext";

const LanguageToggle = ({ className = "" }: { className?: string }) => {
  const { lang, setLang } = useLang();
  return (
    <div className={`inline-flex items-center rounded-full border border-border bg-background/60 backdrop-blur p-0.5 text-xs ${className}`}>
      <button
        onClick={() => setLang("fr")}
        className={`px-3 h-7 rounded-full transition-colors ${lang === "fr" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
        aria-pressed={lang === "fr"}
      >
        FR
      </button>
      <button
        onClick={() => setLang("ar")}
        className={`px-3 h-7 rounded-full transition-colors ${lang === "ar" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
        aria-pressed={lang === "ar"}
      >
        AR
      </button>
    </div>
  );
};

export default LanguageToggle;
