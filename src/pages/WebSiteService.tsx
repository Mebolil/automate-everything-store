import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  X,
  Sparkles,
  MessageCircle,
  Search,
  Palette,
  Rocket,
} from "lucide-react";
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

const steps = [
  {
    icon: Search,
    day: "Gün 1",
    title: "Marka Analizi",
    desc: "Logonuzu, renklerinizi, referans sitelerinizi ve hedef kitlenizi birlikte ele alırız. Kim olduğunuzu, ne söylemek istediğinizi anlarız.",
  },
  {
    icon: Palette,
    day: "Gün 2",
    title: "Strateji & Tasarım",
    desc: "Sitenizin yapısına, sayfalarına ve mesajına karar veririz. İlk taslak gün sonunda elinizde olur.",
  },
  {
    icon: Rocket,
    day: "Gün 3",
    title: "Teslim",
    desc: "Geri bildirimlerinizle son düzenlemeler yapılır. Siteniz kendi domain'inize bağlanır, anahtar size teslim edilir.",
  },
];

const starterFeatures = [
  { has: true, text: "Marka analizine özel tasarım" },
  { has: true, text: "Tek sayfa (one-pager) mimari" },
  { has: true, text: "Mobil uyumlu" },
  { has: true, text: "WhatsApp & iletişim butonu" },
  { has: true, text: "Temel SEO" },
  { has: true, text: "3 iş günü teslim" },
  { has: true, text: "1 revizyon hakkı" },
  { has: false, text: "Çok sayfalı yapı" },
  { has: false, text: "Blog / e-ticaret modülü" },
  { has: false, text: "Otomasyon entegrasyonu" },
];

const finalFeatures = [
  "Kapsamlı marka kılavuzu entegrasyonu",
  "Çok sayfalı site mimarisi",
  "Özel mobil uygulama hissi",
  "İleri düzey SEO + Analytics",
  "WhatsApp Bot / CRM entegrasyonu",
  "Blog veya e-ticaret modülü",
  "3 ay ücretsiz bakım & destek",
  "Sınırsız revizyon",
];

export default function WebSiteService() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    project: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  const scrollToForm = () =>
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
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
                Anahtar Teslim Web Sitesi
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1]">
                3 Günde Web Siteniz Hazır.
                <span className="text-primary"> Siz Sadece Vizyonunuzu Anlatın.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Şablon değil, marka DNA'nıza özel. Biz tasarlar, biz kurar,
                anahtarı size teslim ederiz.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="text-base px-8 gap-2" onClick={scrollToForm}>
                  Hemen Başla — ₺9.900
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8" asChild>
                  <a href="#sureç">Nasıl Çalışır?</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="sureç" className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                3 Günde <span className="text-primary">Nasıl Olur?</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {steps.map(({ icon: Icon, day, title, desc }, i) => (
                <div
                  key={day}
                  className="relative p-6 rounded-2xl border border-border bg-card/50"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-sm font-semibold text-primary">
                      {day}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                  <span className="absolute top-4 right-5 font-display text-5xl font-bold text-primary/10">
                    {i + 1}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PACKAGES */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                Size uygun <span className="text-primary">paket</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {/* Starter */}
              <div className="p-8 rounded-2xl border border-border bg-card/50 flex flex-col">
                <div className="text-sm font-medium text-muted-foreground mb-2">
                  Starter
                </div>
                <div className="mb-1">
                  <span className="font-display text-4xl font-bold">₺9.900</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  Tek seferlik · KDV dahil değil
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {starterFeatures.map((f) => (
                    <li
                      key={f.text}
                      className={`flex items-start gap-3 text-sm ${
                        f.has ? "text-foreground" : "text-muted-foreground/60 line-through"
                      }`}
                    >
                      {f.has ? (
                        <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      ) : (
                        <X className="w-4 h-4 mt-0.5 text-muted-foreground/60 flex-shrink-0" />
                      )}
                      <span>{f.text}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full gap-2" onClick={scrollToForm}>
                  Hemen Başla <ArrowRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Final */}
              <div className="relative p-8 rounded-2xl border-2 border-primary bg-primary/5 flex flex-col">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  Kurumsal
                </span>
                <div className="text-sm font-medium text-primary mb-2">
                  Nihai Paket
                </div>
                <div className="mb-1">
                  <span className="font-display text-4xl font-bold">Teklif Al</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6">
                  İhtiyacınıza özel fiyatlandırılır
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {finalFeatures.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <Check className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full gap-2" onClick={scrollToForm}>
                  Teklif Al <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-form" className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                  Başlamaya Hazır mısınız?
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Projenizi anlatın, size özel süreci birlikte tasarlayalım.
                </p>
              </div>

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
                    <Label>Hangi paketi düşünüyorsunuz?</Label>
                    <Select
                      value={form.package}
                      onValueChange={(v) => setForm({ ...form, package: v })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seçiniz" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="starter">Starter ₺9.900</SelectItem>
                        <SelectItem value="final">Nihai Paket — Teklif Al</SelectItem>
                        <SelectItem value="undecided">Karar vermedim</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="project">Projenizi kısaca anlatın</Label>
                    <Textarea
                      id="project"
                      rows={4}
                      value={form.project}
                      onChange={(e) => setForm({ ...form, project: e.target.value })}
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
                  <a
                    href="https://wa.me/000000000"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Direkt WhatsApp'tan yazın
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
