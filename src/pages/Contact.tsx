import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles, MessageCircle, Mail, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const WHATSAPP = "https://wa.me/905539003459";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-12 md:pt-40 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
          </div>
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                <Sparkles className="w-4 h-4" />
                İletişim
              </div>
              <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight max-w-3xl mx-auto leading-[1.1]">
                Ücretsiz <span className="text-primary">Görüşme Al</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
                Projenizi anlatın, size en uygun çözümü birlikte tasarlayalım.
                24 saat içinde dönüş yapıyoruz.
              </p>
            </motion.div>
          </div>
        </section>

        {/* FORM */}
        <section className="py-12 pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              {submitted ? (
                <div className="p-8 rounded-2xl border border-primary/40 bg-primary/5 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/15 text-primary flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">
                    Talebin alındı
                  </h3>
                  <p className="text-muted-foreground">
                    24 saat içinde seninle iletişime geçeceğiz.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-6 md:p-8 rounded-2xl border border-border bg-card/50 space-y-4"
                >
                  <div className="space-y-2">
                    <Label htmlFor="name">Ad Soyad</Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Firma Adı</Label>
                    <Input
                      id="company"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-posta</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Hangi konuda görüşelim?</Label>
                    <Select
                      value={form.interest}
                      onValueChange={(v) => setForm({ ...form, interest: v })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seçiniz" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="butcecrm">BütçeCRM</SelectItem>
                        <SelectItem value="web">Web Sitesi</SelectItem>
                        <SelectItem value="otomasyon">Otomasyon</SelectItem>
                        <SelectItem value="other">Diğer / Karar vermedim</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Mesajınız</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Projenizi kısaca anlatın..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2 mt-2">
                    Görüşme Talep Et <ArrowRight className="w-4 h-4" />
                  </Button>
                </form>
              )}

              <div className="mt-6">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full gap-2 border-primary/40 text-primary hover:bg-primary/10 hover:text-primary"
                  asChild
                >
                  <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp'tan yazın
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href="mailto:hello@hisu.solutions"
                  className="p-4 rounded-xl border border-border bg-card/50 hover:border-primary/40 transition-colors flex items-center gap-3"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-sm">hello@hisu.solutions</span>
                </a>
                <a
                  href="tel:+905539003459"
                  className="p-4 rounded-xl border border-border bg-card/50 hover:border-primary/40 transition-colors flex items-center gap-3"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-sm">+90 553 900 34 59</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
