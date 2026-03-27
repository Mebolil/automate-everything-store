import { motion } from "framer-motion";
import { Zap, Clock, Snail, Rocket } from "lucide-react";

interface Competitor {
  name: string;
  days: number;
}

interface SpeedAdvantageProps {
  ourDays?: number;
  competitors?: Competitor[];
}

const defaultCompetitors: Competitor[] = [
  { name: "Geleneksel Ajanslar", days: 30 },
  { name: "Freelancer", days: 21 },
  { name: "DIY (Kendiniz Yapın)", days: 14 },
];

const SpeedAdvantage = ({
  ourDays = 5,
  competitors = defaultCompetitors,
}: SpeedAdvantageProps) => {
  const maxDays = Math.max(...competitors.map((c) => c.days), ourDays);

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              Kurulum Hızı Karşılaştırması
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
              Haftalarca Beklemeyin, Günler İçinde Yayında
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Diğer sağlayıcılar haftalar hatta aylar sürerken, biz yapay zeka
              destekli altyapımız sayesinde projenizi{" "}
              <span className="text-foreground font-semibold">{ourDays} iş günü</span>{" "}
              içinde teslim ediyoruz.
            </p>
          </motion.div>

          {/* Bar chart */}
          <div className="space-y-5">
            {/* Competitors */}
            {competitors.map((comp, i) => (
              <motion.div
                key={comp.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-36 md:w-44 shrink-0 flex items-center gap-2 text-sm text-muted-foreground">
                  <Snail className="w-4 h-4 shrink-0 text-destructive/60" />
                  <span className="truncate">{comp.name}</span>
                </div>
                <div className="flex-1 relative">
                  <div className="h-9 rounded-lg bg-destructive/10 border border-destructive/20 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{
                        width: `${(comp.days / maxDays) * 100}%`,
                      }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                      className="h-full bg-destructive/20 rounded-lg flex items-center justify-end pr-3"
                    >
                      <span className="text-xs font-semibold text-destructive whitespace-nowrap">
                        {comp.days}+ gün
                      </span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Ours */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: competitors.length * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="w-36 md:w-44 shrink-0 flex items-center gap-2 text-sm font-semibold text-foreground">
                <Rocket className="w-4 h-4 shrink-0 text-primary" />
                <span className="truncate">Otomasyon Çözüm</span>
              </div>
              <div className="flex-1 relative">
                <div className="h-9 rounded-lg bg-primary/10 border border-primary/30 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${(ourDays / maxDays) * 100}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + competitors.length * 0.1 }}
                    className="h-full bg-primary/20 rounded-lg flex items-center justify-end pr-3"
                  >
                    <span className="text-xs font-bold text-primary whitespace-nowrap">
                      {ourDays} gün
                    </span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom highlights */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {[
              {
                icon: Zap,
                title: "AI Destekli Geliştirme",
                desc: "Yapay zeka ile hızlandırılmış kodlama süreci",
              },
              {
                icon: Clock,
                title: `${ourDays} Günde Teslimat`,
                desc: "Revizyon dahil uçtan uca proje teslimi",
              },
              {
                icon: Rocket,
                title: "Hemen Yayına Alın",
                desc: "Domain bağlama ve yayınlama desteği dahil",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border bg-card p-4 text-center"
              >
                <item.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="text-sm font-semibold text-foreground">
                  {item.title}
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SpeedAdvantage;
