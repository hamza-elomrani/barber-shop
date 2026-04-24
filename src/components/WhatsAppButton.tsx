import { MessageCircle } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const PHONE = "212600000000";

const WhatsAppButton = () => {
  const { t, dir } = useLang();
  const href = `https://wa.me/${PHONE}?text=${encodeURIComponent(t.wa.prefill)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.wa.aria}
      className={`fixed bottom-4 md:bottom-6 z-30 h-12 w-12 md:h-14 md:w-14 rounded-full bg-[#25D366] text-white shadow-elegant flex items-center justify-center hover:scale-110 transition-transform animate-float ${
        dir === "rtl" ? "left-4 md:left-6" : "right-4 md:right-6"
      }`}
    >
      <MessageCircle className="h-6 w-6 md:h-7 md:w-7" fill="currentColor" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
    </a>
  );
};

export default WhatsAppButton;
