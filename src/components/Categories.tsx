import { Mail, Share2, Workflow, Bot, BarChart3, Shield } from "lucide-react";
import { motion } from "framer-motion";

const categories = [
  {
    icon: Mail,
    title: "E-posta Otomasyonu",
    description: "Toplu mail, autoresponder, drip kampanyalar",
    count: 12,
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Share2,
    title: "Sosyal Medya",
    description: "İçerik planlama, otomatik paylaşım",
    count: 8,
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Workflow,
    title: "İş Akışı",
    description: "CRM, fatura, stok yönetimi otomasyonları",
    count: 15,
    color: "bg-warm/10 text-warm",
  },
  {
    icon: Bot,
    title: "Chatbot & AI",
    description: "Müşteri destek botları, AI asistanlar",
    count: 6,
    color: "bg-primary/10 text-primary",
  },
  {
    icon: BarChart3,
    title: "Raporlama",
    description: "Otomatik rapor oluşturma ve gönderim",
    count: 9,
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Shield,
    title: "Güvenlik",
    description: "Yedekleme, izleme, uyarı otomasyonları",
    count: 7,
    color: "bg-warm/10 text-warm",
  },
];

const Categories = () => {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            Otomasyon Kategorileri
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            İhtiyacınıza uygun kategoriyi seçin, size özel çözümü bulalım.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${cat.color}`}>
                    <cat.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-semibold text-lg">
                        {cat.title}
                      </h3>
                      <span className="text-xs font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                        {cat.count} hizmet
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1.5">
                      {cat.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
