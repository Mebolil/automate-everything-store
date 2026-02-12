import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "E-posta Pazarlama Otomasyonu",
    description: "Otomatik mail dizileri, segmentasyon ve A/B testleri ile dönüşüm oranınızı artırın.",
    price: "₺299",
    period: "/ay",
    type: "SaaS",
    features: ["Sınırsız mail gönderimi", "Drag & drop editör", "Gelişmiş analitik", "API entegrasyonu"],
    popular: true,
  },
  {
    title: "Sosyal Medya Planlayıcı",
    description: "Tüm platformlarda içeriklerinizi otomatik planlayın ve yayınlayın.",
    price: "₺199",
    period: "/ay",
    type: "SaaS",
    features: ["5 sosyal medya hesabı", "İçerik takvimi", "Otomatik paylaşım", "Performans raporu"],
    popular: false,
  },
  {
    title: "WhatsApp Bot Kurulumu",
    description: "Müşterilerinize 7/24 otomatik yanıt veren WhatsApp botu kurulumu.",
    price: "₺1.499",
    period: "",
    type: "Tek Seferlik",
    features: ["Bot tasarımı & kurulum", "50 otomatik yanıt senaryosu", "CRM entegrasyonu", "1 ay destek"],
    popular: false,
  },
  {
    title: "CRM Otomasyon Paketi",
    description: "Müşteri ilişkilerinizi otomatikleştirin. Lead takibi, pipeline yönetimi.",
    price: "₺449",
    period: "/ay",
    type: "SaaS",
    features: ["Sınırsız lead", "Otomatik takip maili", "Pipeline otomasyonu", "Webhook desteği"],
    popular: false,
  },
  {
    title: "Fatura & Muhasebe Botu",
    description: "Faturaları otomatik oluşturun, gönderin ve tahsilat takibi yapın.",
    price: "₺2.999",
    period: "",
    type: "Tek Seferlik",
    features: ["e-Fatura entegrasyonu", "Otomatik hatırlatma", "Raporlama dashboard", "ERP bağlantısı"],
    popular: false,
  },
  {
    title: "Veri Yedekleme Otomasyonu",
    description: "Verilerinizi otomatik olarak yedekleyin, güvenli cloud'a aktarın.",
    price: "₺149",
    period: "/ay",
    type: "SaaS",
    features: ["Günlük yedekleme", "3 farklı lokasyon", "Şifreli depolama", "Anlık bildirimler"],
    popular: false,
  },
];

const FeaturedServices = () => {
  return (
    <section id="pricing" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            Popüler Hizmetler
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            Hemen kullanmaya başlayabileceğiniz hazır otomasyon çözümleri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div
                className={`relative flex flex-col h-full p-6 rounded-2xl bg-card border transition-all duration-300 hover:shadow-lg ${
                  service.popular
                    ? "border-primary shadow-md shadow-primary/10"
                    : "border-border hover:border-primary/20"
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6">
                    <Badge className="bg-primary text-primary-foreground px-3 py-1">
                      En Popüler
                    </Badge>
                  </div>
                )}

                <div className="flex items-center gap-2 mb-3">
                  <Badge
                    variant={service.type === "SaaS" ? "default" : "secondary"}
                    className={
                      service.type === "SaaS"
                        ? "bg-accent/10 text-accent border-0 hover:bg-accent/10"
                        : "bg-warm/10 text-warm border-0 hover:bg-warm/10"
                    }
                  >
                    {service.type}
                  </Badge>
                </div>

                <h3 className="font-display font-semibold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 flex-grow">
                  {service.description}
                </p>

                <div className="mb-5">
                  <span className="font-display text-3xl font-bold">{service.price}</span>
                  <span className="text-muted-foreground text-sm">{service.period}</span>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  className="w-full gap-2 mt-auto"
                  variant={service.popular ? "default" : "outline"}
                >
                  Hemen Al
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
