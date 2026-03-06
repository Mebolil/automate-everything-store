import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

interface ConsultationData {
  title?: string;
  text?: string;
  button?: string;
}

interface ConsultationUpsellProps {
  consultationData?: ConsultationData | null;
}

const ConsultationUpsell = ({ consultationData }: ConsultationUpsellProps) => {
  const title = consultationData?.title || "Teknik İşlerle Uğraşmak İstemiyor Musunuz?";
  const text = consultationData?.text || "Bu sistemi sizin altyapınıza bizzat entegre edelim, ekibinize eğitim verelim ve 3 ay boyunca ücretsiz bakımını üstlenelim.";
  const button = consultationData?.button || "Projeyi Birlikte Yürütelim (Teklif Al)";

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto rounded-2xl bg-foreground text-background p-10 md:p-14 text-center"
        >
          <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <Handshake className="w-7 h-7 text-primary" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
          <p className="mt-4 text-background/70 leading-relaxed max-w-xl mx-auto">{text}</p>
          <Button
            size="lg"
            className="mt-8 text-base px-8 gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            {button}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultationUpsell;
