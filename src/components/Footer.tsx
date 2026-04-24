import { useLang } from "@/i18n/LanguageContext";

const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="border-t border-border py-12">
      <div className="container flex flex-col md:flex-row md:items-center md:justify-between gap-3 text-sm text-muted-foreground text-center md:text-start">
        <div className="font-display text-base text-foreground">
          barber shop
        </div>
        <p className="break-words">12 Rue Hassan II · {t.footer.city}</p>
        <span className="text-xs">© {new Date().getFullYear()} {t.footer.rights}</span>
      </div>
    </footer>
  );
};

export default Footer;
