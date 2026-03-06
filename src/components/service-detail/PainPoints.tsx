import { motion } from "framer-motion";
import {
  XCircle, CheckCircle2, Clock, AlertTriangle, Clock3, UserX,
  TrendingDown, Zap, ShieldCheck, Moon, Target, Rocket,
  MessageSquareOff, RefreshCw, Brain, TableProperties,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Clock, AlertTriangle, Clock3, UserX, TrendingDown,
  Zap, ShieldCheck, Moon, Target, Rocket,
  MessageSquareOff, RefreshCw, Brain, TableProperties,
};

interface LegacyItem { before: string; after: string }
interface TypedItem { type: "before" | "after"; icon?: string; text: string }

interface PainPointsProps {
  painPoints?: LegacyItem[] | TypedItem[] | null;
}

function isTyped(items: any[]): items is TypedItem[] {
  return items.length > 0 && "type" in items[0] && "text" in items[0];
}

const defaultPainPoints: LegacyItem[] = [
  { before: "Günde 2+ saat manuel veri girişi", after: "7/24 kesintisiz otonom çalışma" },
  { before: "İnsan kaynaklı hatalar ve kaçan müşteriler", after: "%100 doğruluk oranı" },
  { before: "Tekrarlayan işlerden bunalmış personel", after: "Stratejik işlere odaklanan mutlu ekip" },
];

const PainPoints = ({ painPoints }: PainPointsProps) => {
  const raw = painPoints && (painPoints as any[]).length > 0 ? painPoints as any[] : defaultPainPoints;

  let beforeItems: { text: string; Icon: LucideIcon }[];
  let afterItems: { text: string; Icon: LucideIcon }[];

  if (isTyped(raw)) {
    beforeItems = raw.filter(i => i.type === "before").map(i => ({ text: i.text, Icon: (i.icon && iconMap[i.icon]) || XCircle }));
    afterItems = raw.filter(i => i.type === "after").map(i => ({ text: i.text, Icon: (i.icon && iconMap[i.icon]) || CheckCircle2 }));
  } else {
    const legacy = raw as LegacyItem[];
    beforeItems = legacy.map(i => ({ text: i.before, Icon: XCircle }));
    afterItems = legacy.map(i => ({ text: i.after, Icon: CheckCircle2 }));
  }

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
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 space-y-4"
          >
            <h3 className="font-display font-semibold text-lg text-destructive">
              Siz (Otomasyon Olmadan - Manuel Süreçler)
            </h3>
            {beforeItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <item.Icon className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item.text}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-primary/20 bg-primary/5 p-6 space-y-4"
          >
            <h3 className="font-display font-semibold text-lg text-primary">
              Sistemimiz (Otomasyon Sonrası - Otonom Altyapı)
            </h3>
            {afterItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <item.Icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;
