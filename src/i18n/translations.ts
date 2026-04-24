export type Lang = "fr" | "ar";

type ServiceItem = { name: string; desc: string; duration: string; price: string };
type FaqItem = { q: string; a: string };

export type Dict = {
  nav: { services: string; gallery: string; booking: string; faq: string; book: string };
  hero: { eyebrow: string; title_a: string; title_em: string; title_b: string; sub: string; cta_book: string; cta_wa: string };
  services: { eyebrow: string; title_a: string; title_em: string; items: ServiceItem[]; mad: string };
  gallery: { eyebrow: string; title_a: string; title_em: string; title_b: string; cats: { All: string; Fades: string; Beards: string; Styles: string } };
  booking: {
    eyebrow: string; title_a: string; title_em: string;
    name: string; name_ph: string; phone: string; date: string; service: string;
    submit: string; hint: string; sent_title: string; sent_desc: string; again: string;
    err: string; ok: string;
    wa_msg: string; wa_name: string; wa_phone: string; wa_service: string; wa_date: string;
  };
  faq: { eyebrow: string; title_a: string; title_em: string; items: FaqItem[] };
  footer: { tagline: string; visit: string; follow: string; hours: string; rights: string; city: string };
  wa: { aria: string; prefill: string };
};

export const translations: Record<Lang, Dict> = {
  fr: {
    nav: { services: "Services", gallery: "Galerie", booking: "Réservation", faq: "FAQ", book: "Réserver" },
    hero: {
      eyebrow: "Barbier Premium · Casablanca",
      title_a: "Une expérience de",
      title_em: "grooming",
      title_b: "premium.",
      sub: "Coupes nettes, soins de barbe raffinés et le luxe discret d'un fauteuil pensé pour l'art du métier.",
      cta_book: "Réserver",
      cta_wa: "WhatsApp",
    },
    services: {
      eyebrow: "Services",
      title_a: "Un travail soigné,",
      title_em: "à juste prix.",
      items: [
        { name: "Coupe de cheveux", desc: "Une coupe précise adaptée à votre style et votre visage.", duration: "30 min", price: "50" },
        { name: "Taille de barbe", desc: "Lignes nettes, contours précis, finition à la serviette chaude.", duration: "20 min", price: "30" },
        { name: "Pack complet", desc: "Cheveux et barbe. L'expérience complète.", duration: "50 min", price: "70" },
      ],
      mad: "MAD",
    },
    gallery: {
      eyebrow: "Galerie",
      title_a: "Le",
      title_em: "travail",
      title_b: "parle de lui-même.",
      cats: { All: "Tout", Fades: "Dégradés", Beards: "Barbes", Styles: "Styles" },
    },
    booking: {
      eyebrow: "Réservation",
      title_a: "Réservez votre",
      title_em: "fauteuil.",
      name: "Nom",
      name_ph: "Votre nom",
      phone: "Téléphone",
      date: "Date souhaitée (optionnel)",
      service: "Service",
      submit: "Confirmer la réservation",
      hint: "L'envoi ouvre WhatsApp avec les détails de votre réservation.",
      sent_title: "Demande envoyée",
      sent_desc: "Nous confirmerons votre rendez-vous via WhatsApp sous peu.",
      again: "Nouvelle réservation",
      err: "Veuillez renseigner votre nom et votre téléphone",
      ok: "Demande envoyée via WhatsApp !",
      wa_msg: "Bonjour, je veux réserver un rendez-vous.",
      wa_name: "Nom",
      wa_phone: "Téléphone",
      wa_service: "Service",
      wa_date: "Date",
    },
    faq: {
      eyebrow: "FAQ",
      title_a: "Bon à",
      title_em: "savoir.",
      items: [
        { q: "Quels sont vos horaires d'ouverture ?", a: "Nous sommes ouverts du lundi au samedi, de 10h00 à 21h00. Fermé le dimanche." },
        { q: "Quels sont vos tarifs ?", a: "Coupe 50 MAD · Taille de barbe 30 MAD · Pack complet (cheveux + barbe) 70 MAD." },
        { q: "Comment réserver un rendez-vous ?", a: "Utilisez le formulaire ci-dessous ou écrivez-nous directement sur WhatsApp. Chaque rendez-vous est confirmé personnellement." },
        { q: "Où êtes-vous situés ?", a: "12 Rue Hassan II, Casablanca. Sans rendez-vous selon disponibilité." },
      ],
    },
    footer: {
      tagline: "Barbier premium qui façonne un style intemporel à Casablanca depuis 2018.",
      visit: "Adresse",
      follow: "Suivez-nous",
      hours: "Lun–Sam · 10h00 – 21h00",
      rights: "barber shop",
      city: "Casablanca, Maroc",
    },
    wa: { aria: "Discuter sur WhatsApp", prefill: "Bonjour, je veux réserver un rendez-vous" },
  },
  ar: {
    nav: { services: "الخدمات", gallery: "المعرض", booking: "الحجز", faq: "الأسئلة", book: "احجز" },
    hero: {
      eyebrow: "صالون حلاقة فاخر · الدار البيضاء",
      title_a: "تجربة",
      title_em: "حلاقة",
      title_b: "راقية.",
      sub: "قصّات دقيقة، عناية متقنة باللحية، وفخامة هادئة في كرسي صُمّم لإتقان المهنة.",
      cta_book: "احجز الآن",
      cta_wa: "واتساب",
    },
    services: {
      eyebrow: "الخدمات",
      title_a: "إتقان في العمل،",
      title_em: "وأسعار عادلة.",
      items: [
        { name: "قص الشعر", desc: "قصة دقيقة تناسب أسلوبك وملامح وجهك.", duration: "٣٠ دقيقة", price: "50" },
        { name: "تشذيب اللحية", desc: "خطوط نظيفة وحواف دقيقة مع لمسة المنشفة الساخنة.", duration: "٢٠ دقيقة", price: "30" },
        { name: "الباقة الكاملة", desc: "شعر ولحية. التجربة الكاملة.", duration: "٥٠ دقيقة", price: "70" },
      ],
      mad: "درهم",
    },
    gallery: {
      eyebrow: "المعرض",
      title_a: "العمل",
      title_em: "يتحدث",
      title_b: "عن نفسه.",
      cats: { All: "الكل", Fades: "تدرجات", Beards: "لحى", Styles: "ستايلات" },
    },
    booking: {
      eyebrow: "الحجز",
      title_a: "احجز",
      title_em: "كرسيك.",
      name: "الاسم",
      name_ph: "اسمك",
      phone: "الهاتف",
      date: "التاريخ المفضل (اختياري)",
      service: "الخدمة",
      submit: "تأكيد الحجز",
      hint: "إرسال النموذج يفتح واتساب مع تفاصيل الحجز.",
      sent_title: "تم إرسال الطلب",
      sent_desc: "سنؤكد موعدك عبر واتساب قريبًا.",
      again: "حجز جديد",
      err: "يرجى إدخال الاسم ورقم الهاتف",
      ok: "تم إرسال الطلب عبر واتساب!",
      wa_msg: "مرحبا، بغيت نحجز موعد.",
      wa_name: "الاسم",
      wa_phone: "الهاتف",
      wa_service: "الخدمة",
      wa_date: "التاريخ",
    },
    faq: {
      eyebrow: "الأسئلة الشائعة",
      title_a: "معلومات",
      title_em: "مفيدة.",
      items: [
        { q: "ما هي ساعات العمل؟", a: "نفتح من الإثنين إلى السبت، من الساعة 10:00 إلى 21:00. مغلق يوم الأحد." },
        { q: "ما هي الأسعار؟", a: "قص الشعر 50 درهم · تشذيب اللحية 30 درهم · الباقة الكاملة (شعر + لحية) 70 درهم." },
        { q: "كيف أحجز موعدًا؟", a: "استخدم نموذج الحجز أدناه أو راسلنا مباشرة على واتساب. نؤكد كل موعد شخصيًا." },
        { q: "أين يقع الصالون؟", a: "12 شارع الحسن الثاني، الدار البيضاء. نرحب بالزيارات بدون موعد حسب التوفر." },
      ],
    },
    footer: {
      tagline: "صالون حلاقة فاخر يصنع أناقة خالدة في الدار البيضاء منذ 2018.",
      visit: "العنوان",
      follow: "تابعنا",
      hours: "الإثنين–السبت · 10:00 – 21:00",
      rights: "barber shop",
      city: "الدار البيضاء، المغرب",
    },
    wa: { aria: "تحدث عبر واتساب", prefill: "مرحبا، بغيت نحجز موعد" },
  },
};
