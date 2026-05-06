import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, BarChart3, Monitor, Workflow } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const products = [
  {
    icon: BarChart3,
    title: "BütçeCRM",
    description:
      "E-ticaret ve KOBİ'ler için gelir, gider, stok ve reklam ROI'sini tek ekranda görün.",
    features: [
      "Gerçek zamanlı gelir/gider takibi",
      "FIFO stok yönetimi",
      "Reklam ROI & ROAS",
      "Otomatik raporlar",
    ],
    href: "/butceleme",
    badge: "Aktif",
    popular: true,
  },
  {
    icon: Monitor,
    title: "Özel Tasarım Site",
    description:
      "3 iş gününde marka DNA'nıza özel, modern ve dönüşüm odaklı web siteniz hazır.",
    features: [
      "Marka analizine özel tasarım",
      "Mobil uyumlu",
      "Temel SEO",
      "3 günde teslim",
    ],
    href: "/web-sitesi",
    badge: "Aktif",
    popular: false,
  },
  {
    icon: Workflow,
    title: "Otomasyon Sistemleri",
    description:
      "Tekrarlayan işleri sistemlere devredin. Zamanınızı sadece büyümeye ayırın.",
    features: [
      "Şirketinize özel sistem",
      "WhatsApp & CRM entegrasyonu",
      "Raporlama otomasyonu",
      "Anahtar teslim kurulum",
    ],
    href: "/otomasyon",
    badge: "Aktif",
    popular: false,
  },
];

const FeaturedServices = () => {
  return (
    <section id="hizmetler" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            Popüler Hizmetler
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            İşinize özel kuruyor, teslim ediyor ve yanınızda kalıyoruz.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div
                  className={`relative flex flex-col h-full p-6 rounded-2xl bg-card border transition-all duration-300 hover:shadow-lg ${
                    p.popular
                      ? "border-primary shadow-md shadow-primary/10"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary border-0 hover:bg-primary/10 gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {p.badge}
                    </Badge>
                  </div>

                  <h3 className="font-display font-semibold text-lg mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5 flex-grow">
                    {p.description}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {p.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-primary shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <Button
                    asChild
                    className="w-full gap-2 mt-auto"
                    variant={p.popular ? "default" : "outline"}
                  >
                    <Link to={p.href}>
                      İncele
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
