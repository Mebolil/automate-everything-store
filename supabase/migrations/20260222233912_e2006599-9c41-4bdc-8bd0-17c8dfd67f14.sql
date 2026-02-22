
-- Services table
CREATE TABLE public.services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  price INTEGER NOT NULL,
  period TEXT DEFAULT '',
  type TEXT NOT NULL CHECK (type IN ('SaaS', 'Tek Seferlik')),
  features TEXT[] NOT NULL DEFAULT '{}',
  popular BOOLEAN NOT NULL DEFAULT false,
  active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;

-- Everyone can read active services
CREATE POLICY "Anyone can view active services"
ON public.services FOR SELECT
USING (active = true);

-- Admins can do everything
CREATE POLICY "Admins can manage services"
ON public.services FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE TRIGGER update_services_updated_at
  BEFORE UPDATE ON public.services
  FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Seed data
INSERT INTO public.services (title, description, price, period, type, features, popular) VALUES
('E-posta Pazarlama Otomasyonu', 'Otomatik mail dizileri, segmentasyon ve A/B testleri ile dönüşüm oranınızı artırın.', 299, '/ay', 'SaaS', ARRAY['Sınırsız mail gönderimi', 'Drag & drop editör', 'Gelişmiş analitik', 'API entegrasyonu'], true),
('Sosyal Medya Planlayıcı', 'Tüm platformlarda içeriklerinizi otomatik planlayın ve yayınlayın.', 199, '/ay', 'SaaS', ARRAY['5 sosyal medya hesabı', 'İçerik takvimi', 'Otomatik paylaşım', 'Performans raporu'], false),
('WhatsApp Bot Kurulumu', 'Müşterilerinize 7/24 otomatik yanıt veren WhatsApp botu kurulumu.', 1499, '', 'Tek Seferlik', ARRAY['Bot tasarımı & kurulum', '50 otomatik yanıt senaryosu', 'CRM entegrasyonu', '1 ay destek'], false),
('CRM Otomasyon Paketi', 'Müşteri ilişkilerinizi otomatikleştirin. Lead takibi, pipeline yönetimi.', 449, '/ay', 'SaaS', ARRAY['Sınırsız lead', 'Otomatik takip maili', 'Pipeline otomasyonu', 'Webhook desteği'], false),
('Fatura & Muhasebe Botu', 'Faturaları otomatik oluşturun, gönderin ve tahsilat takibi yapın.', 2999, '', 'Tek Seferlik', ARRAY['e-Fatura entegrasyonu', 'Otomatik hatırlatma', 'Raporlama dashboard', 'ERP bağlantısı'], false),
('Veri Yedekleme Otomasyonu', 'Verilerinizi otomatik olarak yedekleyin, güvenli cloud''a aktarın.', 149, '/ay', 'SaaS', ARRAY['Günlük yedekleme', '3 farklı lokasyon', 'Şifreli depolama', 'Anlık bildirimler'], false);
