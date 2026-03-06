

## Otomasyon Detay Sayfasi -- Plan

### Ozet
Her hizmete (`/service/:id`) BizDev odakli, 6 bolumlu bir detay sayfasi olusturulacak. Sayfa, teknik jargon yerine musterinin sorununu ve cozumun degerini one cikaracak sekilde kurgulanacak.

### Veritabani Degisiklikleri
`services` tablosuna yeni alanlar eklenmeli (migration):
- `hero_subtitle` (text, nullable) -- Hero alt metni
- `pain_points` (jsonb, nullable) -- Aci noktalari listesi (before/after)
- `roi_data` (jsonb, nullable) -- ROI metrikleri (assistant_cost, automation_cost, amortization_days, yearly_saving)
- `how_it_works_steps` (jsonb, nullable) -- 3 adimlik akis aciklamalari
- `setup_description` (text, nullable) -- Kurulum aciklamasi

Bu alanlar nullable olacak, bos oldugunda sayfa varsayilan (generic) icerigi gosterecek.

### Yeni Dosyalar

**`src/pages/ServiceDetail.tsx`** -- Ana sayfa componenti
- URL parametresinden `id` alip `services` tablosundan veriyi cekmek
- 6 bolumu sirasyla render etmek
- Navbar + Footer icinde

**`src/components/service-detail/ServiceHero.tsx`** -- Bolum 1: Hero
- Hizmet basligi H1 olarak
- `hero_subtitle` veya `description` alt metin
- 3 buton: "Temel Paketi Satin Al (₺fiyat)", "Gelismis Entegrasyon Talep Et" (ghost), "Anahtar Teslim Kurulum Iste" (ghost)
- Arka plan glow efekti (mevcut Hero bilesenindeki gibi)

**`src/components/service-detail/PainPoints.tsx`** -- Bolum 2: Aci Noktasi vs Deger Onermesi
- Iki kolonlu kart yapisi
- Sol kolon: kirmizi/gri ikonlarla musterinin mevcut sorunlari
- Sag kolon: primary renk ikonlarla otomasyonun sundugu cozumler
- `pain_points` JSON'dan veya varsayilan generic iceriden beslenecek

**`src/components/service-detail/ROICalculator.tsx`** -- Bolum 3: Seffaf ROI Modulu
- Buyuk, dikkat cekici bir kart icerisinde 4 metrik
- Asistan maliyeti, otomasyon maliyeti, amortisman suresi, yillik tasarruf
- `roi_data` JSON'dan veya hizmet fiyatina gore otomatik hesaplanacak varsayilanlar

**`src/components/service-detail/HowItWorksDetail.tsx`** -- Bolum 4: Nasil Calisir
- 3 adimlik yatay akis semasi (ikonlu)
- `how_it_works_steps` JSON'dan veya varsayilan adimlar

**`src/components/service-detail/SetupPreview.tsx`** -- Bolum 5: Dinamik Kurulum
- "2 Dakikada Kurulum" basligi
- Kurulum formunun bir mockup/onizlemesi (bulanik gorsel veya stilize form alanlari)

**`src/components/service-detail/ConsultationUpsell.tsx`** -- Bolum 6: Danismanlik Upsell
- Koyu arka planli, ayristirici bir blok
- "Teknik Islerle Ugrasmak Istemiyor Musunuz?" basligi
- Entegrasyon + egitim + 3 ay bakim vaadi
- "Projeyi Birlikte Yurutelim (Teklif Al)" butonu

### Routing Degisiklikleri
**`src/App.tsx`**: `/service/:id` rotasi eklenecek.

### Mevcut Dosya Degisiklikleri
**`src/components/FeaturedServices.tsx`**: "Hemen Al" butonuna `Link` eklenip `/service/${service.id}` adresine yonlendirilecek.

### Tasarim Notlari
- Mevcut design system korunacak: Space Grotesk basliklar, Inter govde, primary (yesil tonu), warm (turuncu), framer-motion animasyonlari
- Tum bolumler `motion.div` ile scroll-triggered animasyonlarla goruntulenecek
- Responsive: mobile-first, md breakpoint'ta iki kolonlu layoutlar

