import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Package, TrendingUp, Zap, Eye, EyeOff, Star, ArrowRight, Clock, BarChart3, Activity } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface Service {
  id: string;
  title: string;
  description: string;
  price: number;
  period: string;
  type: string;
  features: string[];
  popular: boolean;
  active: boolean;
  created_at: string;
}

const AdminDashboard = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      const { data } = await supabase
        .from("services")
        .select("*")
        .order("created_at", { ascending: false });
      if (data) setServices(data);
      setLoading(false);
    };
    fetchServices();
  }, []);

  const stats = {
    total: services.length,
    active: services.filter((s) => s.active).length,
    hidden: services.filter((s) => !s.active).length,
    saas: services.filter((s) => s.type === "SaaS").length,
    oneTime: services.filter((s) => s.type === "Tek Seferlik").length,
    popular: services.filter((s) => s.popular).length,
    avgPrice: services.length
      ? Math.round(services.reduce((sum, s) => sum + s.price, 0) / services.length)
      : 0,
    totalRevenuePotential: services.reduce((sum, s) => sum + s.price, 0),
  };

  const statCards = [
    { title: "Toplam Hizmet", value: stats.total, icon: Package, color: "text-primary", bg: "bg-primary/10" },
    { title: "Aktif Hizmet", value: stats.active, icon: Eye, color: "text-accent", bg: "bg-accent/10" },
    { title: "Gizli Hizmet", value: stats.hidden, icon: EyeOff, color: "text-muted-foreground", bg: "bg-muted" },
    { title: "Popüler", value: stats.popular, icon: Star, color: "text-warm", bg: "bg-warm/10" },
  ];

  const typeData = [
    { name: "SaaS", value: stats.saas, fill: "hsl(var(--primary))" },
    { name: "Tek Seferlik", value: stats.oneTime, fill: "hsl(var(--accent))" },
  ].filter((d) => d.value > 0);

  const priceData = services
    .slice(0, 8)
    .map((s) => ({
      name: s.title.length > 12 ? s.title.slice(0, 12) + "…" : s.title,
      fiyat: s.price,
    }));

  const recentServices = services.slice(0, 5);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold">Dashboard</h2>
          <p className="text-sm text-muted-foreground mt-1">Hizmetlerinizin genel durumuna göz atın</p>
        </div>
        <Button onClick={() => navigate("/admin/services")}>
          <Package className="w-4 h-4 mr-2" />
          Hizmetleri Yönet
        </Button>
      </div>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {statCards.map((card) => (
          <Card key={card.title} className="relative overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {card.title}
              </CardTitle>
              <div className={`p-2 rounded-lg ${card.bg}`}>
                <card.icon className={`h-4 w-4 ${card.color}`} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-display font-bold">{card.value}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Revenue & Average */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Ortalama Fiyat</CardTitle>
            <div className="p-2 rounded-lg bg-primary/10">
              <BarChart3 className="h-4 w-4 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-display font-bold">
              ₺{stats.avgPrice.toLocaleString("tr-TR")}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Tüm hizmetlerin ortalaması</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">Toplam Fiyat Potansiyeli</CardTitle>
            <div className="p-2 rounded-lg bg-accent/10">
              <Activity className="h-4 w-4 text-accent" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-display font-bold">
              ₺{stats.totalRevenuePotential.toLocaleString("tr-TR")}
            </div>
            <p className="text-xs text-muted-foreground mt-1">Tüm aktif hizmetlerin toplam değeri</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Price Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-display flex items-center gap-2">
              <BarChart3 className="h-4 w-4 text-primary" />
              Hizmet Fiyatları
            </CardTitle>
            <CardDescription>Son eklenen hizmetlerin fiyat karşılaştırması</CardDescription>
          </CardHeader>
          <CardContent>
            {priceData.length > 0 ? (
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={priceData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
                  <XAxis
                    dataKey="name"
                    tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 11, fill: "hsl(var(--muted-foreground))" }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `₺${v}`}
                  />
                  <Tooltip
                    contentStyle={{
                      background: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "var(--radius)",
                      fontSize: 12,
                    }}
                    formatter={(value: number) => [`₺${value.toLocaleString("tr-TR")}`, "Fiyat"]}
                  />
                  <Bar dataKey="fiyat" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <div className="flex items-center justify-center h-[220px] text-muted-foreground text-sm">
                Henüz hizmet eklenmedi
              </div>
            )}
          </CardContent>
        </Card>

        {/* Type Distribution */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-display flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-accent" />
              Hizmet Türü Dağılımı
            </CardTitle>
            <CardDescription>SaaS ve Tek Seferlik hizmet oranları</CardDescription>
          </CardHeader>
          <CardContent>
            {typeData.length > 0 ? (
              <div className="flex items-center gap-6">
                <ResponsiveContainer width={140} height={140}>
                  <PieChart>
                    <Pie
                      data={typeData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={65}
                      paddingAngle={4}
                      dataKey="value"
                      stroke="none"
                    >
                      {typeData.map((entry, i) => (
                        <Cell key={i} fill={entry.fill} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="space-y-3 flex-1">
                  {typeData.map((entry) => (
                    <div key={entry.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: entry.fill }}
                        />
                        <span className="text-sm font-medium">{entry.name}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-display font-bold">{entry.value}</span>
                        <span className="text-xs text-muted-foreground">
                          ({Math.round((entry.value / stats.total) * 100)}%)
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-[140px] text-muted-foreground text-sm">
                Henüz hizmet eklenmedi
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Recent Services */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-base font-display flex items-center gap-2">
              <Clock className="h-4 w-4 text-muted-foreground" />
              Son Eklenen Hizmetler
            </CardTitle>
            <CardDescription>En son eklenen 5 hizmet</CardDescription>
          </div>
          <Button variant="ghost" size="sm" onClick={() => navigate("/admin/services")} className="text-primary">
            Tümünü Gör
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </CardHeader>
        <CardContent>
          {recentServices.length > 0 ? (
            <div className="space-y-3">
              {recentServices.map((service) => (
                <div
                  key={service.id}
                  className="flex items-center justify-between p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
                >
                  <div className="flex items-center gap-3 min-w-0 flex-1">
                    <div className={`w-2 h-2 rounded-full shrink-0 ${service.active ? "bg-accent" : "bg-muted-foreground"}`} />
                    <div className="min-w-0">
                      <p className="font-medium text-sm truncate">{service.title}</p>
                      <p className="text-xs text-muted-foreground truncate">{service.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0 ml-4">
                    <Badge variant={service.type === "SaaS" ? "default" : "secondary"} className="text-xs">
                      {service.type}
                    </Badge>
                    <span className="font-display font-semibold text-sm whitespace-nowrap">
                      ₺{service.price.toLocaleString("tr-TR")}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8 text-muted-foreground text-sm">
              <Package className="h-8 w-8 mx-auto mb-2 opacity-50" />
              Henüz hizmet eklenmedi.
              <br />
              <Button variant="link" size="sm" onClick={() => navigate("/admin/services")} className="mt-1">
                İlk hizmeti ekle →
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default AdminDashboard;
