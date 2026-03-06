import { motion } from "framer-motion";
import { FileSpreadsheet, Sheet, FileText, HardDrive, Building2, ArrowRight, Plug } from "lucide-react";
import { Button } from "@/components/ui/button";

const integrations = [
  {
    icon: FileSpreadsheet,
    name: "Microsoft Excel",
    description: "Gelen verileri otomatik olarak Excel tablolarınıza aktarın. Raporlar, müşteri listeleri ve finansal veriler anında güncellenir.",
    useCases: ["Otomatik rapor oluşturma", "Veri senkronizasyonu", "Pivot tablo besleme"],
    color: "hsl(141, 71%, 38%)",
  },
  {
    icon: Sheet,
    name: "Google Sheets",
    description: "Ekibinizle gerçek zamanlı paylaşılan Google Sheets tablolarına veri akışı sağlayın. Her güncelleme anında tüm ekipte görünür.",
    useCases: ["Ekip içi paylaşım", "Canlı dashboard", "Formül tabanlı analiz"],
    color: "hsl(141, 71%, 38%)",
  },
  {
    icon: FileText,
    name: "Google Docs",
    description: "Otomasyon çıktılarını profesyonel dökümanlar olarak otomatik oluşturun. Teklif mektupları, raporlar ve özetler saniyeler içinde hazır.",
    useCases: ["Otomatik teklif hazırlama", "Haftalık özet raporlar", "Şablon tabanlı dökümanlar"],
    color: "hsl(217, 91%, 60%)",
  },
  {
    icon: HardDrive,
    name: "Google Drive",
    description: "Tüm dosyalarınızı, eklerini ve dökümanlarını otomatik olarak Drive'da organize edin. Klasör yapısı sizin kurallarınıza göre oluşturulur.",
    useCases: ["Otomatik dosya arşivleme", "Ek dosya yönetimi", "Klasör organizasyonu"],
    color: "hsl(45, 93%, 50%)",
  },
  {
    icon: Building2,
    name: "ERP Sistemleri",
    description: "SAP, Logo, Netsis, Mikro gibi ERP sistemlerinizle doğrudan entegrasyon. Siparişler, stok ve muhasebe verileri otomatik akar.",
    useCases: ["Sipariş aktarımı", "Stok güncelleme", "Muhasebe entegrasyonu"],
    color: "hsl(271, 76%, 53%)",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const AdvancedIntegrations = () => {
  return (
    <section className="py-16 md:py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Plug className="w-4 h-4" />
            Gelişmiş Entegrasyonlar
          </div>
          <h2 className="font-display text-2xl md:text-4xl font-bold tracking-tight">
            Mevcut Altyapınıza <span className="text-primary">Sorunsuz Bağlanır</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Temel otomasyonun üzerine, kullandığınız araçlarla entegre ederek
            verilerinizin kesintisiz akmasını sağlayın. Her entegrasyon sizin iş akışınıza özel yapılandırılır.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {integrations.map((integration) => (
            <motion.div
              key={integration.name}
              variants={item}
              className="group relative rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: `${integration.color}15` }}
              >
                <integration.icon
                  className="w-6 h-6"
                  style={{ color: integration.color }}
                />
              </div>

              <h3 className="font-display text-lg font-semibold tracking-tight mb-2">
                {integration.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {integration.description}
              </p>

              <div className="space-y-1.5">
                {integration.useCases.map((useCase) => (
                  <div
                    key={useCase}
                    className="flex items-center gap-2 text-xs text-foreground/70"
                  >
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    {useCase}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            variants={item}
            className="relative rounded-2xl bg-foreground text-background p-6 flex flex-col justify-between"
          >
            <div>
              <h3 className="font-display text-lg font-semibold tracking-tight mb-2">
                İhtiyacınıza Özel Entegrasyon
              </h3>
              <p className="text-sm text-background/60 leading-relaxed">
                Listemizde olmayan bir araçla entegrasyon mu istiyorsunuz?
                Slack, Notion, Trello, HubSpot, özel API…
                Altyapınıza uygun çözümü birlikte tasarlayalım.
              </p>
            </div>
            <Button
              variant="secondary"
              className="mt-6 w-full gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Özel Entegrasyon Talep Et
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvancedIntegrations;
