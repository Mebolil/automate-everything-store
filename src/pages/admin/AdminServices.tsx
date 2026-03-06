import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Pencil, Trash2, X } from "lucide-react";
import { Switch } from "@/components/ui/switch";

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
}

const emptyService: Omit<Service, "id"> = {
  title: "",
  description: "",
  price: 0,
  period: "",
  type: "SaaS",
  features: [],
  popular: false,
  active: true,
};

const AdminServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [form, setForm] = useState(emptyService);
  const [featureInput, setFeatureInput] = useState("");
  const { toast } = useToast();

  const fetchServices = async () => {
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .order("created_at", { ascending: false });
    if (data) setServices(data);
    if (error) toast({ title: "Hata", description: error.message, variant: "destructive" });
    setLoading(false);
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const openCreate = () => {
    setEditingService(null);
    setForm(emptyService);
    setFeatureInput("");
    setDialogOpen(true);
  };

  const openEdit = (service: Service) => {
    setEditingService(service);
    setForm({
      title: service.title,
      description: service.description,
      price: service.price,
      period: service.period,
      type: service.type,
      features: service.features,
      popular: service.popular,
      active: service.active,
    });
    setFeatureInput("");
    setDialogOpen(true);
  };

  const addFeature = () => {
    if (featureInput.trim()) {
      setForm((f) => ({ ...f, features: [...f.features, featureInput.trim()] }));
      setFeatureInput("");
    }
  };

  const removeFeature = (idx: number) => {
    setForm((f) => ({ ...f, features: f.features.filter((_, i) => i !== idx) }));
  };

  const handleSave = async () => {
    try {
      if (editingService) {
        const { error } = await supabase
          .from("services")
          .update(form)
          .eq("id", editingService.id);
        if (error) throw error;
        toast({ title: "Güncellendi!" });
      } else {
        const { error } = await supabase.from("services").insert(form);
        if (error) throw error;
        toast({ title: "Hizmet oluşturuldu!" });
      }
      setDialogOpen(false);
      fetchServices();
    } catch (error: any) {
      toast({ title: "Hata", description: error.message, variant: "destructive" });
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Bu hizmeti silmek istediğinize emin misiniz?")) return;
    const { error } = await supabase.from("services").delete().eq("id", id);
    if (error) toast({ title: "Hata", description: error.message, variant: "destructive" });
    else {
      toast({ title: "Silindi!" });
      fetchServices();
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl font-bold">Hizmet Yönetimi</h2>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Button onClick={openCreate}>
              <Plus className="w-4 h-4 mr-2" />
              Yeni Hizmet
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="font-display">
                {editingService ? "Hizmeti Düzenle" : "Yeni Hizmet Ekle"}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 pt-2">
              <div className="space-y-2">
                <Label>Başlık</Label>
                <Input value={form.title} onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))} />
              </div>
              <div className="space-y-2">
                <Label>Açıklama</Label>
                <Textarea value={form.description} onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Fiyat (₺)</Label>
                  <Input type="number" value={form.price} onChange={(e) => setForm((f) => ({ ...f, price: Number(e.target.value) }))} />
                </div>
                <div className="space-y-2">
                  <Label>Periyot</Label>
                  <Input placeholder="/ay veya boş" value={form.period} onChange={(e) => setForm((f) => ({ ...f, period: e.target.value }))} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Tür</Label>
                  <select
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                    value={form.type}
                    onChange={(e) => setForm((f) => ({ ...f, type: e.target.value }))}
                  >
                    <option value="SaaS">SaaS</option>
                    <option value="Tek Seferlik">Tek Seferlik</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <Label>Popüler</Label>
                  <div className="flex items-center gap-2 pt-2">
                    <Switch checked={form.popular} onCheckedChange={(v) => setForm((f) => ({ ...f, popular: v }))} />
                    <span className="text-sm text-muted-foreground">{form.popular ? "Evet" : "Hayır"}</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Aktif</Label>
                <div className="flex items-center gap-2">
                  <Switch checked={form.active} onCheckedChange={(v) => setForm((f) => ({ ...f, active: v }))} />
                  <span className="text-sm text-muted-foreground">{form.active ? "Yayında" : "Gizli"}</span>
                </div>
              </div>
              <div className="space-y-2">
                <Label>Özellikler</Label>
                <div className="flex gap-2">
                  <Input
                    placeholder="Özellik ekle..."
                    value={featureInput}
                    onChange={(e) => setFeatureInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && (e.preventDefault(), addFeature())}
                  />
                  <Button type="button" variant="secondary" size="sm" onClick={addFeature}>
                    Ekle
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {form.features.map((f, i) => (
                    <Badge key={i} variant="secondary" className="gap-1 pr-1">
                      {f}
                      <button onClick={() => removeFeature(i)} className="ml-1 hover:text-destructive">
                        <X className="w-3 h-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
              <Button className="w-full" onClick={handleSave}>
                {editingService ? "Güncelle" : "Oluştur"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {services.map((service) => (
          <Card key={service.id}>
            <CardHeader className="flex flex-row items-start justify-between pb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <CardTitle className="text-lg font-display">{service.title}</CardTitle>
                  <Badge variant={service.type === "SaaS" ? "default" : "secondary"} className="text-xs">
                    {service.type}
                  </Badge>
                  {!service.active && (
                    <Badge variant="outline" className="text-xs text-muted-foreground">Gizli</Badge>
                  )}
                  {service.popular && (
                    <Badge className="text-xs bg-primary text-primary-foreground">Popüler</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
              <div className="flex items-center gap-1 ml-4">
                <Button variant="ghost" size="icon" onClick={() => openEdit(service)}>
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive" onClick={() => handleDelete(service.id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline gap-1 mb-3">
                <span className="text-2xl font-display font-bold">${service.price}</span>
                <span className="text-sm text-muted-foreground">{service.period}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {service.features.map((f, i) => (
                  <Badge key={i} variant="outline" className="text-xs font-normal">{f}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default AdminServices;
