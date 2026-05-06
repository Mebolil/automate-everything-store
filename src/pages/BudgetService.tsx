import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  X,
  TrendingUp,
  Package,
  Target,
  Receipt,
  FileBarChart,
  BellRing,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const painPoints = [
  "Ay sonu ne kaldığını bilmiyorsun",
  "Reklam harcıyor ama gerçek ROI'yi göremiyorsun",
  "Stok takibi Excel'de, satışlar başka yerde",
  "Kar mı ettim, zarar mı? Cevap yok",
];

const solutions = [
  "Gerçek zamanlı gelir, gider, net kâr",
  "Reklam kampanyası bazlı gerçek ROI ve ROAS",
  "FIFO stok takibi otomatik",
  "Her şey tek ekranda, her zaman güncel",
];

const features = [
  {
    icon: TrendingUp,
    title: "Satış & Cari Takibi",
    desc: "Müşteri bazlı tahsilat, kısmi ödeme, gecikme uyarısı.",
  },
  {
    icon: Package,
    title: "Stok Yönetimi",
    desc: "FIFO maliyet, kritik seviye uyarısı, otomatik düşüm.",
  },
  {
    icon: Target,
    title: "Reklam ROI",
    desc: "Meta, Google, TikTok kampanyalarını satışa bağla.",
  },
  {
    icon: Receipt,
    title: "Gider Takibi",
    desc: "Kategori ve kişi bazlı, aylık trend.",
  },
  {
    icon: FileBarChart,
    title: "Otomatik Raporlar",
    desc: "5 sekmeli rapor, Excel ve PDF export.",
  },
  {
    icon: BellRing,
    title: "Hatırlatıcılar",
    desc: "Gecikmiş tahsilat, tedarikçi borcu, kritik stok otomatik uyarısı.",
  },
];

export default function BudgetService() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    businessType: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setSubmitted(true);
  };

  const scrollToForm = () => {
    document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" });
  };

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
                Finansal Otomasyon
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1]">
                Paranın Nereye Gittiğini
                <span className="text-primary"> Artık Biliyorsun</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Satış, stok, gider ve reklam performansını tek ekranda gör.
                Excel'e, muhasebecine sormaya son.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="text-base px-8 gap-2" onClick={scrollToForm}>
                  Demo Talep Et
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8" asChild>
                  <a href="#nasil-calisir">Nasıl Çalışır?</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PAIN VS SOLUTION */}
        <section id="nasil-calisir" className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="p-8 rounded-2xl border border-border bg-card/50">
                <h2 className="font-display text-2xl font-semibold mb-6 text-destructive">
                  Şu an:
                </h2>
                <ul className="space-y-4">
                  {painPoints.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-muted-foreground">
                      <X className="w-5 h-5 mt-0.5 text-destructive flex-shrink-0" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 rounded-2xl border border-primary/40 bg-primary/5">
                <h2 className="font-display text-2xl font-semibold mb-6 text-primary">
                  BütçeCRM ile:
                </h2>
                <ul className="space-y-4">
                  {solutions.map((s) => (
                    <li key={s} className="flex items-start gap-3 text-foreground">
                      <Check className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                Tek panelde <span className="text-primary">tüm operasyon</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                Sade ve şeffaf <span className="text-primary">fiyatlandırma</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Monthly */}
              <div className="p-8 rounded-2xl border border-border bg-card/50">
                <div className="text-sm font-medium text-muted-foreground mb-2">
                  Aylık Plan
                </div>
                <div className="mb-6">
                  <span className="font-display text-4xl font-bold">₺890</span>
                  <span className="text-muted-foreground"> / ay + KDV</span>
                </div>
                <Button className="w-full gap-2" onClick={scrollToForm}>
                  Demo Talep Et <ArrowRight className="w-4 h-4" />
                </Button>
                <p className="mt-4 text-xs text-muted-foreground text-center">
                  Demo görüşmesinde ürünü birlikte inceleriz, soruların yanıtlanır.
                </p>
              </div>
              {/* Yearly */}
              <div className="relative p-8 rounded-2xl border-2 border-primary bg-primary/5">
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  En Popüler
                </span>
                <div className="text-sm font-medium text-primary mb-2">Yıllık Plan</div>
                <div className="mb-1">
                  <span className="font-display text-4xl font-bold">₺8.900</span>
                  <span className="text-muted-foreground"> / yıl + KDV</span>
                </div>
                <p className="text-sm text-primary mb-6">
                  2 ay bedava · Yılda ₺1.780 tasarruf
                </p>
                <Button className="w-full gap-2" onClick={scrollToForm}>
                  Demo Talep Et <ArrowRight className="w-4 h-4" />
                </Button>
                <p className="mt-4 text-xs text-muted-foreground text-center">
                  Demo görüşmesinde ürünü birlikte inceleriz, soruların yanıtlanır.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* DEMO FORM */}
        <section id="demo-form" className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                  Demo Talep Et
                </h2>
                <p className="mt-4 text-muted-foreground">
                  30 dakikada BütçeCRM'i birlikte keşfedelim.
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
                    <Label>İşletme türünüz nedir?</Label>
                    <Select
                      value={form.businessType}
                      onValueChange={(v) => setForm({ ...form, businessType: v })}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Seçiniz" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ecommerce">E-ticaret</SelectItem>
                        <SelectItem value="retail">Perakende</SelectItem>
                        <SelectItem value="service">Hizmet</SelectItem>
                        <SelectItem value="other">Diğer</SelectItem>
                      </SelectContent>
                    </Select>
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
                    Hızlı iletişim için WhatsApp'tan yazın
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
