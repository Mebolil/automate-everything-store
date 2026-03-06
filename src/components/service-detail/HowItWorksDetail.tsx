import { motion } from "framer-motion";
import { Zap, Brain, BarChart3 } from "lucide-react";

interface Step {
  title: string;
  description: string;
}

const defaultSteps: Step[] = [
  { title: "Veri Kaynağı Tetiklenir", description: "Gelen kutusuna mail düşer, form doldurulur veya tetikleyici olay gerçekleşir." },
  { title: "Yapay Zeka Analiz Eder", description: "Veri içeriği otomatik olarak analiz edilir, sınıflandırılır ve işlenir." },
  { title: "Sonuç Raporlanır", description: "İlgili veritabanına kaydedilir, CRM güncellenir ve size rapor sunulur." },
];

const icons = [Zap, Brain, BarChart3];

interface HowItWorksDetailProps {
  steps?: Step[] | null;
}

const HowItWorksDetail = ({ steps }: HowItWorksDetailProps) => {
  const items = steps && steps.length > 0 ? steps : defaultSteps;

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
            Nasıl Çalışır?
          </h2>
          <p className="mt-3 text-muted-foreground">
            Arka planda çalışan 3 adımlık süreç.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {items.map((step, i) => {
            const Icon = icons[i] ?? Zap;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                className="text-center relative"
              >
                {i < items.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-border" />
                )}
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <span className="text-xs font-bold text-primary tracking-wider uppercase">
                  Adım {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display font-semibold text-xl mt-2 mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksDetail;
