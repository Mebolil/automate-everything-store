import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Zap, Lightbulb, Wrench, Crown } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const letters = [
  {
    icon: Zap,
    letter: "H",
    title: "Hacking",
    desc: "Düşük maliyetli, yenilikçi yöntemlerle hızlı büyüme sağlama. Kısıtları değil, fırsatları görme.",
  },
  {
    icon: Lightbulb,
    letter: "I",
    title: "Innovation",
    desc: "Mevcut sorunlara yeni ve değerli çözümler getirme. Alışılageldik yoldan gitmeme.",
  },
  {
    icon: Wrench,
    letter: "S",
    title: "Solutions",
    desc: "Her iş kolunda somut, uygulanabilir çözümler. Teori değil, sonuç.",
  },
  {
    icon: Crown,
    letter: "U",
    title: "Ultimate",
    desc: "En üst seviye değeri en erişilebilir maliyetle sunma. Müşterimiz kazanırsa biz kazanırız.",
  },
];

const metrics = [
  { value: "3", label: "Aktif Ürün & Hizmet" },
  { value: "%100", label: "Anahtar Teslim Süreç" },
  { value: "AaaS", label: "SaaS Değil, Şirketinize Özel" },
];

export default function About() {
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
                Biz Kimiz?
              </div>
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1]">
                Daha Az Kaynakla
                <span className="text-primary"> Daha Fazla Değer Üretiyoruz</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Hisu, büyük bütçelere gerek kalmadan işletmelerin teknolojiyle
                büyümesini sağlamak için kuruldu. Piyasanın alışıldık yolunu
                değil, daha akıllı olanı seçiyoruz.
              </p>
            </motion.div>
          </div>
        </section>

        {/* H.I.S.U. */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                Hisu <span className="text-primary">Ne Demek?</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                Bir isim değil, bir felsefe.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {letters.map(({ icon: Icon, letter, title, desc }) => (
                <div
                  key={letter}
                  className="relative p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/40 transition-colors"
                >
                  <span className="absolute top-4 right-5 font-display text-6xl font-bold text-primary/15">
                    {letter}
                  </span>
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

        {/* PHILOSOPHY */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                Neden <span className="text-primary">Hisu?</span>
              </h2>
              <div className="mt-8 space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Çoğu teknoloji şirketi size yazılım satar ve sizi kendi
                  halinize bırakır. Biz farklı çalışıyoruz.
                </p>
                <p>
                  <span className="text-primary font-semibold">
                    AaaS — Automation as a Service
                  </span>{" "}
                  anlayışıyla her çözümü işinize özel tasarlıyor, kuruyoruz ve
                  yanınızda kalıyoruz. Sistemi siz öğrenmek zorunda değilsiniz.
                  Biz kuruyoruz, siz kullanıyorsunuz.
                </p>
                <p className="text-foreground font-medium">
                  Düşük maliyet. Yüksek değer. Yenilikçi çözüm. Bu üç ilke her
                  kararımızın arkasında.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* METRICS */}
        <section className="py-20 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
                Bugüne <span className="text-primary">Kadar</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-8 rounded-2xl border border-border bg-card/50 text-center"
                >
                  <div className="font-display text-5xl md:text-6xl font-bold text-primary mb-3">
                    {m.value}
                  </div>
                  <div className="text-sm text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section className="py-20 border-t border-border bg-card/40">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight">
              Birlikte <span className="text-primary">Büyüyelim</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl mx-auto">
              Ürünlerimizi inceleyin ya da doğrudan görüşme talep edin.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="text-base px-8 gap-2" asChild>
                <Link to="/#hizmetler">
                  Ürünleri İncele
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8 gap-2">
                Görüşme Al
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
