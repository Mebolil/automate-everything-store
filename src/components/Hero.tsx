import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, BarChart3, Monitor, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const products = [
  {
    icon: BarChart3,
    title: "BütçeCRM",
    description:
      "E-ticaret ve KOBİ'ler için gelir, gider, stok ve reklam ROI'sini tek ekranda görün.",
    href: "/butceleme",
  },
  {
    icon: Monitor,
    title: "Anahtar Teslim Web Sitesi",
    description:
      "3 iş gününde marka DNA'nıza özel, modern ve dönüşüm odaklı web siteniz hazır.",
    href: "/web-sitesi",
  },
  {
    icon: Workflow,
    title: "İş Süreci Otomasyonu",
    description:
      "Tekrarlayan işleri sistemlere devredin. Zamanınızı sadece büyümeye ayırın.",
    href: "/otomasyon",
  },
];

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Türkiye'nin AaaS Platformu
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl mx-auto leading-[1.1]">
            İşinizi Büyütün.
            <span className="text-primary"> Sistemi Biz Kurarız.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            SaaS değil, AaaS. Her çözümü işinize özel kuruyor, teslim ediyor ve
            yanınızda kalıyoruz. Teknoloji altyapınızı siz değil, biz taşırız.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base px-8 gap-2">
              Ücretsiz Görüşme Al
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8" asChild>
              <a href="#hizmetler">Ürünleri İncele</a>
            </Button>
          </div>
        </motion.div>

        {/* Product cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {products.map(({ icon: Icon, title, description, href }) => (
            <Link
              key={title}
              to={href}
              className="group relative text-left p-6 rounded-2xl border border-border bg-card/50 backdrop-blur hover:border-primary/50 hover:bg-card transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Aktif
                </span>
              </div>
              <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                İncele <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
