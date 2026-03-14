import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  period: string;
  type: string;
  features: string[];
  popular: boolean;
}

const FeaturedServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      const { data } = await supabase
        .from("services")
        .select("id, title, description, price, period, type, features, popular")
        .eq("active", true)
        .order("popular", { ascending: false });
      if (data) setServices(data);
      setLoading(false);
    };
    fetchServices();
  }, []);

  if (loading) {
    return (
      <section id="pricing" className="py-20 md:py-28 bg-muted/30">
        <div className="container mx-auto px-4 flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
        </div>
      </section>
    );
  }

  return (
    <section id="pricing" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            Popüler Hizmetler
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
            Hemen kullanmaya başlayabileceğiniz hazır otomasyon çözümleri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div
                className={`relative flex flex-col h-full p-6 rounded-2xl bg-card border transition-all duration-300 hover:shadow-lg ${
                  service.popular
                    ? "border-primary shadow-md shadow-primary/10"
                    : "border-border hover:border-primary/20"
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-6">
                    <Badge className="bg-primary text-primary-foreground px-3 py-1">
                      En Popüler
                    </Badge>
                  </div>
                )}

                <div className="flex items-center gap-2 mb-3">
                  <Badge
                    variant="secondary"
                    className={
                      service.type === "SaaS"
                        ? "bg-accent/10 text-accent-foreground border-0 hover:bg-accent/10"
                        : service.type === "AaaS"
                        ? "bg-primary/10 text-primary border-0 hover:bg-primary/10"
                        : "bg-warm/10 text-warm border-0 hover:bg-warm/10"
                    }
                  >
                    {service.type}
                  </Badge>
                </div>

                <h3 className="font-display font-semibold text-lg mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-5 flex-grow">
                  {service.description}
                </p>

                <div className="mb-5">
                  <span className="font-display text-3xl font-bold">
                    ${service.price}
                  </span>
                  <span className="text-muted-foreground text-sm">{service.period}</span>
                </div>

                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  className="w-full gap-2 mt-auto"
                  variant={service.popular ? "default" : "outline"}
                >
                  <Link to={`/service/${service.id}`}>
                    Hemen Al
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
