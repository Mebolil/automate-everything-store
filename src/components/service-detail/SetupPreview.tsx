import { motion } from "framer-motion";
import { Clock, ShieldCheck } from "lucide-react";

interface SetupPreviewProps {
  setupDescription?: string | null;
}

const SetupPreview = ({ setupDescription }: SetupPreviewProps) => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
              Karmaşık Dökümanlar Yok, 2 Dakikada Kurulum
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              {setupDescription ??
                "Satın aldıktan sonra karşınıza çıkacak dinamik formda sadece kendi API anahtarlarınızı ve tercihlerinizi girin, sistem saniyeler içinde size özel konfigüre edilsin."}
            </p>
            <div className="mt-6 flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-foreground">
                <Clock className="w-4 h-4 text-primary" />
                2 dk kurulum
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground">
                <ShieldCheck className="w-4 h-4 text-primary" />
                Verileriniz güvende
              </div>
            </div>
          </motion.div>

          {/* Mockup form preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border bg-card p-6 space-y-4 blur-[1px] select-none pointer-events-none"
            aria-hidden
          >
            <div className="h-4 w-24 bg-muted rounded" />
            <div className="h-10 w-full bg-muted/60 rounded-lg border border-border" />
            <div className="h-4 w-32 bg-muted rounded" />
            <div className="h-10 w-full bg-muted/60 rounded-lg border border-border" />
            <div className="h-4 w-20 bg-muted rounded" />
            <div className="h-10 w-full bg-muted/60 rounded-lg border border-border" />
            <div className="h-10 w-32 bg-primary/30 rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SetupPreview;
