import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Sparkles,
  MessageCircle,
  ClipboardList,
  Bell,
  FileBarChart,
  Receipt,
  Shuffle,
  Users2,
  Search,
  Settings,
  Rocket,
  Mail,
  PieChart,
  UserCheck,
  Workflow,
  MessagesSquare,
  ListChecks,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const painPoints = [
  { icon: ClipboardList, text: "Siparişleri manuel takip etmek" },
  { icon: Bell, text: "Müşterilere tek tek hatırlatma göndermek" },
  { icon: FileBarChart, text: "Raporları elle hazırlamak" },
  { icon: Receipt, text: "Fatura ve muhasebe girişlerini tekrarlamak" },
  { icon: Shuffle, text: "Farklı platformlar arasında veri taşımak" },
  { icon: Users2, text: "Ekip içi iletişimi koordine etmek" },
];

const steps = [
  {
    icon: Search,
    title: "Keşif Görüşmesi",
    desc: "Mevcut iş süreçlerinizi, zaman kaynaklarınızı ve önceliklerinizi birlikte analiz ederiz. Neyi otomatikleştirmenin size en fazla değer katacağını tespit ederiz.",
  },
  {
    icon: Settings,
    title: "Özel Sistem Tasarımı",
    desc: "Şirketinize özel otomasyon mimarisi tasarlanır. Hangi araçlar, hangi entegrasyonlar, hangi akışlar — hepsi sizin sürecinize göre kurgulanır.",
  },
  {
    icon: Rocket,
    title: "Kurulum & Teslim",
    desc: "Sistemi kurar, test eder ve ekibinize teslim ederiz. Siz sadece çalışan sistemi devralırsınız.",
  },
];

const solutions = [
  {
    icon: Mail,
    title: "E-posta & Bildirim Otomasyonu",
    desc: "Müşteri takibi, sipariş bildirimleri, hatırlatmalar otomatik çalışır.",
  },
  {
    icon: PieChart,
    title: "Raporlama & Analiz",
    desc: "Günlük, haftalık, aylık raporlar siz istemeden hazırlanır ve iletilir.",
  },
  {
    icon: UserCheck,
    title: "CRM & Müşteri Yönetimi",
    desc: "Lead takibi, teklif süreci ve müşteri iletişimi sistematik hale gelir.",
  },
  {
    icon: Workflow,
    title: "Entegrasyon & Veri Akışı",
    desc: "Farklı platformlarınız birbiriyle konuşur. Manuel veri taşıma biter.",
  },
  {
    icon: MessagesSquare,
    title: "WhatsApp & Mesajlaşma Otomasyonu",
    desc: "Müşteri sorularına anında yanıt, sipariş güncellemeleri otomatik iletilir.",
  },
  {
    icon: ListChecks,
    title: "İş Akışı & Görev Yönetimi",
    desc: "Ekip içi süreçler, onaylar ve görev atamaları otomatik tetiklenir.",
  },
];

export default function AutomationService() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    process: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.process) return;
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
                AaaS — Automation as a Service
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1]">
                Sistemi Biz Kurarız.
                <span className="text-primary"> Siz Sadece Büyüyün.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Tekrarlayan işleri, manuel süreçleri ve zaman kayıplarını
                otomasyona devrediyoruz. Şirketinize özel tasarlanmış, anahtar
                teslim sistemler.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="text-base px-8 gap-2" onClick={scrollToForm}>
                  İhtiyacımı Anlat
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8" asChild>
                  <a href="#cozumler">Ne Yapıyoruz?</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* PAIN POINTS */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                Her Gün Aynı İşleri mi <span className="text-primary">Yapıyorsunuz?</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
              {painPoints.map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card/50"
                >
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm text-foreground">{text}</span>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center italic text-muted-foreground max-w-2xl mx-auto">
              Bunların hepsi otomatikleştirilebilir. Ve sizin zamanınız çok daha
              değerli.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                Şirketinize Özel,
                <span className="text-primary"> Baştan Sona Biz Kurarız</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {steps.map(({ icon: Icon, title, desc }, i) => (
                <div
                  key={title}
                  className="relative p-6 rounded-2xl border border-border bg-card/50"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
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

        {/* SOLUTIONS */}
        <section id="cozumler" className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                Çözüm <span className="text-primary">Alanlarımız</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {solutions.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/40 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-form" className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                  İhtiyacınızı Anlatın
                </h2>
                <p className="mt-4 text-muted-foreground">
                  Hangi süreci otomatikleştirmek istediğinizi kısaca yazın.
                  Görüşmeden önce size özel düşünelim.
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
                    <Label htmlFor="process">
                      Şu an en çok zaman harcadığınız iş süreci nedir?
                    </Label>
                    <Textarea
                      id="process"
                      rows={4}
                      value={form.process}
                      onChange={(e) => setForm({ ...form, process: e.target.value })}
                      required
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
                    href="https://wa.me/905539003459"
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

        {/* CLOSING CTA */}
        <section className="py-20 border-t border-border bg-card/40">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight max-w-3xl mx-auto leading-[1.15]">
              Zamanınız İşinizi Büyütmeye Yeter.
              <span className="text-primary"> Gerisini Bize Bırakın.</span>
            </h2>
            <div className="mt-10">
              <Button size="lg" className="text-base px-8 gap-2" onClick={scrollToForm}>
                Ücretsiz Keşif Görüşmesi Al
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
