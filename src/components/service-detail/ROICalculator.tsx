import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Clock, CalendarCheck } from "lucide-react";

interface ROIData {
  assistant_cost: number;
  automation_cost: number;
  amortization_days: number;
  yearly_saving: number;
}

interface ROICalculatorProps {
  roiData?: ROIData | null;
  price: number;
}

const ROICalculator = ({ roiData, price }: ROICalculatorProps) => {
  const data: ROIData = roiData ?? {
    assistant_cost: 15000,
    automation_cost: price,
    amortization_days: Math.max(1, Math.round((price / 15000) * 30)),
    yearly_saving: Math.round(15000 * 12 - price),
  };

  const metrics = [
    {
      icon: DollarSign,
      label: "Asistan Maliyeti (Aylık)",
      value: `₺${data.assistant_cost.toLocaleString("tr-TR")}`,
      sub: "Bu işi bir çalışana yaptırsanız",
    },
    {
      icon: Clock,
      label: "Otomasyon Maliyeti",
      value: `₺${data.automation_cost.toLocaleString("tr-TR")}`,
      sub: "Tek seferlik yatırım",
    },
    {
      icon: CalendarCheck,
      label: "Amortisman Süresi",
      value: `${data.amortization_days} Gün`,
      sub: "Kendini amorti etme süresi",
    },
    {
      icon: TrendingUp,
      label: "Yıllık Net Tasarruf",
      value: `₺${data.yearly_saving.toLocaleString("tr-TR")}`,
      sub: "İlk yıl sonunda kazancınız",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
            Şeffaf Yatırım Getirisi (ROI)
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Bu otomasyon bir gider değil, kendini hızla amorti eden bir yatırımdır.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <m.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="font-display text-2xl font-bold text-foreground">{m.value}</div>
              <div className="text-sm font-medium text-foreground mt-1">{m.label}</div>
              <div className="text-xs text-muted-foreground mt-1">{m.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
