import { motion } from "framer-motion";
import { XCircle, CheckCircle2 } from "lucide-react";

interface PainPointItem {
  before: string;
  after: string;
}

const defaultPainPoints: PainPointItem[] = [
  { before: "Günde 2+ saat manuel veri girişi", after: "7/24 kesintisiz otonom çalışma" },
  { before: "İnsan kaynaklı hatalar ve kaçan müşteriler", after: "%100 doğruluk oranı" },
  { before: "Tekrarlayan işlerden bunalmış personel", after: "Stratejik işlere odaklanan mutlu ekip" },
];

interface PainPointsProps {
  painPoints?: PainPointItem[] | null;
}

const PainPoints = ({ painPoints }: PainPointsProps) => {
  const items = painPoints && painPoints.length > 0 ? painPoints : defaultPainPoints;

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
            Şu Anki Durumunuz vs. Otomasyon Sonrası
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 space-y-4"
          >
            <h3 className="font-display font-semibold text-lg text-destructive">
              Siz (Otomasyon Olmadan)
            </h3>
            {items.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item.before}</span>
              </div>
            ))}
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-primary/20 bg-primary/5 p-6 space-y-4"
          >
            <h3 className="font-display font-semibold text-lg text-primary">
              Sistemimiz ile
            </h3>
            {items.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item.after}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
