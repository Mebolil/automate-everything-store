import { motion } from "framer-motion";
import { Search, Settings, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Hizmet Seçin",
    description:
      "Kategoriler arasından ihtiyacınıza uygun otomasyon hizmetini bulun ve seçin.",
  },
  {
    icon: Settings,
    step: "02",
    title: "Bilgilerinizi Girin",
    description:
      "Sadece gerekli bilgileri girin — API anahtarı, hesap bilgileri veya tercihler.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Otomasyonunuz Hazır",
    description:
      "Otomasyon hesabınıza tanımlanır ve anında çalışmaya başlar.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            Nasıl Çalışır?
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            3 basit adımda otomasyonunuzu kurun.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.15 }}
              className="text-center relative"
            >
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px border-t-2 border-dashed border-border" />
              )}
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <span className="text-xs font-bold text-primary tracking-wider uppercase">
                Adım {step.step}
              </span>
              <h3 className="font-display font-semibold text-xl mt-2 mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
