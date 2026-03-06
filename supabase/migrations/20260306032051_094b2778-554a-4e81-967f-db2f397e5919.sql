
ALTER TABLE public.services ADD COLUMN IF NOT EXISTS feature_comparison jsonb;
ALTER TABLE public.services ADD COLUMN IF NOT EXISTS consultation_data jsonb;

INSERT INTO public.services (
  title, description, type, price, period, popular, active,
  hero_subtitle, pain_points, roi_data, how_it_works_steps, setup_description,
  feature_comparison, consultation_data, features
) VALUES (
  'Siz Uyurken Bile Satış Fırsatlarını Kaçırmayın: WhatsApp''ınızı Otonom Bir Asistana Çevirin',
  'Müşterilerinizin sık sorulan sorularını saniyeler içinde yanıtlayan ve temel iletişim bilgilerini toplayan yapay zeka destekli ilk temas botu.',
  'Tek Seferlik',
  99,
  NULL,
  true,
  true,
  'Müşterilerinizin sık sorulan sorularını saniyeler içinde yanıtlayan ve temel iletişim bilgilerini toplayan yapay zeka destekli ilk temas botu. Gelişmiş CRM, Randevu ve Stok entegrasyonlarına tamamen hazır altyapı.',
  '[{"type":"before","icon":"MessageSquareOff","text":"Mesai saatleri dışında cevapsız kalan mesajlar"},{"type":"before","icon":"RefreshCw","text":"Aynı sorulara yüzlerce kez manuel yanıt verme"},{"type":"before","icon":"UserX","text":"Kaybolan numara ve isimler, takipsiz müşteriler"},{"type":"after","icon":"Zap","text":"1 saniyede otomatik reaksiyon, 7/24 kesintisiz"},{"type":"after","icon":"Brain","text":"Müşterinin niyetini anlayan yapay zeka"},{"type":"after","icon":"TableProperties","text":"Potansiyel müşteri verilerinin anında tabloya aktarılması"}]'::jsonb,
  '{"title":"Kaçan Fırsat Maliyeti (FMO) Hesaplayıcısı","subtitle":"WhatsApp sıcak satışı temsil eder. Cevapsız kalan her mesaj, kaybedilen bir müşteridir.","metrics":[{"icon":"MessageSquare","label":"Mesai Dışı Gelen Mesaj","value":"Günde 5+","sub":"Ortalama cevapsız mesaj sayısı"},{"icon":"UserMinus","label":"Kaybedilen Müşteri Oranı","value":"%80","sub":"Cevapsız kaldığı için kaybedilen"},{"icon":"UserPlus","label":"Yakalanan Sıcak Lead","value":"Ayda +120","sub":"Bot sayesinde kazanılan potansiyel"},{"icon":"Shield","label":"Sonuç","value":"1/10 Maliyet","sub":"Bir asistanın onda birine 7/24 Karşılama Uzmanı"}]}'::jsonb,
  '[{"step":1,"title":"WhatsApp Bağlantısı","description":"İşletme numaranızı sisteme bağlayın, bot saniyeler içinde aktif olsun."},{"step":2,"title":"AI Eğitimi","description":"SSS dökümanınız veya web siteniz ile yapay zekayı eğitin."},{"step":3,"title":"Lead Toplama","description":"Gelen müşteri bilgileri otomatik olarak tablonuza kaydedilsin."}]'::jsonb,
  'WhatsApp Business API bağlantınızı girin, SSS dökümanınızı yükleyin ve botunuz saniyeler içinde aktif olsun.',
  '{"columns":["Özellik","Temel Şablon ($99)","Ajans & Danışmanlık (Özel Teklif)"],"rows":[{"feature":"Sık Sorulan Sorular (AI)","basic":"✅ Dahil (PDF Eğitimli)","premium":"✅ Dahil"},{"feature":"İletişim Bilgisi Toplama","basic":"✅ Basit Tabloya Yazma","premium":"✅ Dahil"},{"feature":"Canlı Desteğe Aktarım (Handoff)","basic":"❌ Yok","premium":"✅ İhtiyaca Göre Kurgulanır"},{"feature":"CRM/ERP Entegrasyonu","basic":"❌ Yok","premium":"✅ Özel n8n İş Akışları"},{"feature":"Randevu Takvimi Bağlantısı","basic":"❌ Yok","premium":"✅ Tam Senkronizasyon"}]}'::jsonb,
  '{"title":"Sipariş Almak, Stok Düşmek veya CRM''e Bağlamak mı İstiyorsunuz?","text":"WhatsApp sadece bir mesajlaşma aracı değil, şirketinizin ana operasyon ekranı olabilir. WhatsApp''ı doğrudan mevcut yazılımlarınıza bağlayalım.","button":"Özel Proje İçin Görüşelim"}'::jsonb,
  ARRAY['7/24 Otomatik Yanıt', 'SSS Eğitimli AI', 'Lead Toplama', 'WhatsApp Business API', 'Google Sheets Entegrasyonu']
);
