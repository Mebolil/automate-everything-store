import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Settings } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  price: number;
  period: string | null;
}

const ServiceHero = ({ title, subtitle, price, period }: ServiceHeroProps) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
            {title}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="text-base px-8 gap-2">
              Temel Paketi Satın Al — ${price}
              {period && <span className="text-primary-foreground/70">{period}</span>}
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button size="lg" variant="ghost" className="text-base px-6 gap-2">
              <Settings className="w-4 h-4" />
              Gelişmiş Entegrasyon Talep Et
            </Button>
            <Button size="lg" variant="ghost" className="text-base px-6 gap-2">
              <Phone className="w-4 h-4" />
              Anahtar Teslim Kurulum İste
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
