import { motion } from "framer-motion";
import { Heart, Users, Wrench } from "lucide-react";

const Philosophy = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent-foreground text-sm font-medium mb-6">
            <Heart className="w-4 h-4" />
            Felsefemiz
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1]">
            SaaS değil,{" "}
            <span className="text-primary">AaaS</span>
          </h2>

          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
            Binlerce kullanıcıya aynı kalıbı sunan SaaS modelini değil,{" "}
            <strong className="text-foreground">Automation as a Service</strong>{" "}
            yaklaşımını benimsiyoruz. Bu da herkese daha özenli, işinize özel bir
            hizmet vermemizi sağlıyor.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            {
              icon: Users,
              title: "Kişiye Özel",
              desc: "Her otomasyon sizin iş sürecinize göre kurgulanır, hazır şablon değil.",
            },
            {
              icon: Wrench,
              title: "Elden Teslim",
              desc: "Kurulum, test ve optimizasyon dahil — siz sadece sonuçları görürsünüz.",
            },
            {
              icon: Heart,
              title: "Özenli Destek",
              desc: "Sınırlı müşteri portföyü ile her projeye hak ettiği ilgiyi gösteriyoruz.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-6 text-center"
            >
              <div className="mx-auto w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;
