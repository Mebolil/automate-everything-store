import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FeatureComparisonProps {
  featureComparison?: {
    columns: string[];
    rows: { feature: string; basic: string; premium: string }[];
  } | null;
}

const FeatureComparison = ({ featureComparison }: FeatureComparisonProps) => {
  if (!featureComparison) return null;

  const { columns, rows } = featureComparison;

  const renderCell = (value: string) => {
    if (value.startsWith("✅")) {
      return (
        <span className="inline-flex items-center gap-1.5 text-sm">
          <Check className="w-4 h-4 text-primary shrink-0" />
          <span className="text-foreground">{value.replace("✅ ", "")}</span>
        </span>
      );
    }
    if (value.startsWith("❌")) {
      return (
        <span className="inline-flex items-center gap-1.5 text-sm">
          <X className="w-4 h-4 text-destructive shrink-0" />
          <span className="text-muted-foreground">{value.replace("❌ ", "")}</span>
        </span>
      );
    }
    return <span className="text-sm text-foreground">{value}</span>;
  };

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
            Temel Şablon mu, Kurumsal Çözüm mü?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            İhtiyacınıza uygun paketi seçin. Temel şablonla hemen başlayın, büyüdükçe ölçeklendirin.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto overflow-x-auto"
        >
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {columns.map((col, i) => (
                  <th
                    key={col}
                    className={`p-4 text-left font-display font-bold text-sm tracking-wide ${
                      i === 0
                        ? "text-foreground"
                        : i === 1
                        ? "text-foreground bg-card border border-border rounded-tl-xl"
                        : "text-primary bg-primary/5 border border-primary/20 rounded-tr-xl"
                    }`}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.feature} className={i % 2 === 0 ? "bg-background" : "bg-muted/20"}>
                  <td className="p-4 text-sm font-medium text-foreground border-b border-border">
                    {row.feature}
                  </td>
                  <td className="p-4 border-b border-border bg-card border-x border-border">
                    {renderCell(row.basic)}
                  </td>
                  <td className="p-4 border-b border-primary/20 bg-primary/5 border-x border-primary/20">
                    {renderCell(row.premium)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base px-8">
              Temel Şablonu Satın Al
            </Button>
            <Button size="lg" variant="outline" className="text-base px-8 border-primary/30 text-primary hover:bg-primary/5">
              Kurumsal Entegrasyon Talep Et
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeatureComparison;
