import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, TrendingUp, Zap } from "lucide-react";

const AdminDashboard = () => {
  const [stats, setStats] = useState({ total: 0, saas: 0, oneTime: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      const { data } = await supabase.from("services").select("type");
      if (data) {
        setStats({
          total: data.length,
          saas: data.filter((s) => s.type === "SaaS").length,
          oneTime: data.filter((s) => s.type === "Tek Seferlik").length,
        });
      }
    };
    fetchStats();
  }, []);

  const cards = [
    { title: "Toplam Hizmet", value: stats.total, icon: Package, color: "text-primary" },
    { title: "SaaS Hizmetler", value: stats.saas, icon: TrendingUp, color: "text-accent" },
    { title: "Tek Seferlik", value: stats.oneTime, icon: Zap, color: "text-warm" },
  ];

  return (
    <div>
      <h2 className="font-display text-2xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card) => (
          <Card key={card.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {card.title}
              </CardTitle>
              <card.icon className={`h-5 w-5 ${card.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-display font-bold">{card.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
