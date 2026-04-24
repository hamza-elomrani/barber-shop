import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { MessageCircle } from "lucide-react";
import { useLang } from "@/i18n/LanguageContext";

const PHONE = "212600000000";

const Booking = () => {
  const { t } = useLang();
  const [serviceIdx, setServiceIdx] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "" });

  const services = t.services.items;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone) {
      toast.error(t.booking.err);
      return;
    }
    const svc = services[serviceIdx];
    const lines = [
      t.booking.wa_msg,
      `${t.booking.wa_name}: ${form.name}`,
      `${t.booking.wa_phone}: ${form.phone}`,
      `${t.booking.wa_service}: ${svc.name} – ${svc.price} ${t.services.mad}`,
    ];
    const msg = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${PHONE}?text=${msg}`, "_blank");
    toast.success(t.booking.ok);
  };

  return (
    <section id="booking" className="py-28 md:py-40">
      <div className="container max-w-lg">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">{t.booking.eyebrow}</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            {t.booking.title_a} <span className="italic text-gold">{t.booking.title_em}</span>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <Label htmlFor="name" className="text-xs text-muted-foreground font-normal">{t.booking.name}</Label>
            <Input
              id="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="mt-2 h-12 rounded-lg"
              placeholder={t.booking.name_ph}
              required
            />
          </div>
          <div>
            <Label htmlFor="phone" className="text-xs text-muted-foreground font-normal">{t.booking.phone}</Label>
            <Input
              id="phone"
              type="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="mt-2 h-12 rounded-lg"
              placeholder="+212 6 00 00 00 00"
              dir="ltr"
              required
            />
          </div>
          <div>
            <Label htmlFor="service" className="text-xs text-muted-foreground font-normal">{t.booking.service}</Label>
            <select
              id="service"
              value={serviceIdx}
              onChange={(e) => setServiceIdx(Number(e.target.value))}
              className="mt-2 w-full h-12 rounded-lg bg-background border border-input px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            >
              {services.map((s, i) => (
                <option key={i} value={i}>
                  {s.name} – {s.price} {t.services.mad}
                </option>
              ))}
            </select>
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full bg-[#25D366] text-white hover:bg-[#25D366]/90 h-14"
          >
            <MessageCircle className="h-5 w-5" fill="currentColor" />
            {t.booking.submit}
          </Button>
          <p className="text-xs text-muted-foreground text-center pt-2">{t.booking.hint}</p>
        </form>
      </div>
    </section>
  );
};

export default Booking;
