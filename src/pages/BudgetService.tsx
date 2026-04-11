import { useState } from "react";

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="6.5" stroke="#1d9e75" strokeWidth="1.2" />
    <path d="M4 7l2 2 4-4" stroke="#1d9e75" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const XIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
    <circle cx="7" cy="7" r="6.5" stroke="#e24b4a" strokeWidth="1.2" />
    <path d="M5 5l4 4M9 5l-4 4" stroke="#e24b4a" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
);

const BoltIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M9 2L3 9h5l-1 5 6-7H8l1-5z" stroke="#1d9e75" strokeWidth="1.4" strokeLinejoin="round" />
  </svg>
);

export default function BudgetService() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    employees: "",
    revenue: "",
    challenge: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div style={{ background: "#f0f0ec", minHeight: "100vh", fontFamily: "system-ui, sans-serif" }}>

      {/* HERO */}
      <div style={{ padding: "72px 48px 60px", textAlign: "center" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 7,
          background: "#d4efe3", color: "#0f6e56", fontSize: 13, fontWeight: 600,
          padding: "6px 14px", borderRadius: 999, marginBottom: 24,
        }}>
          <span style={{ width: 7, height: 7, background: "#1d9e75", borderRadius: "50%", display: "inline-block" }} />
          Finansal Otomasyon
        </div>
        <h1 style={{
          fontSize: 52, fontWeight: 800, color: "#111", lineHeight: 1.08,
          maxWidth: 640, margin: "0 auto 20px", letterSpacing: -1.5,
        }}>
          KOBİ Bütçe Yönetim Sistemi
        </h1>
        <p style={{ fontSize: 17, color: "#666", maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.65 }}>
          Ajansınızın gelir ve giderlerini tek ekranda, net ve şeffaf bir şekilde görün. Sürpriz nakit krizlerine son.
        </p>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
          <button
            onClick={() => document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              background: "#1d9e75", color: "#fff", fontSize: 15, fontWeight: 600,
              padding: "14px 28px", borderRadius: 12, border: "none", cursor: "pointer",
              display: "flex", alignItems: "center", gap: 8,
            }}
          >
            <BoltIcon />
            Ücretsiz Keşif Görüşmesi Al
          </button>
          <button
            onClick={() => document.getElementById("dashboard-section")?.scrollIntoView({ behavior: "smooth" })}
            style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: "#555", cursor: "pointer", background: "none", border: "none" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="8" cy="8" r="7" stroke="#999" strokeWidth="1.2" />
              <path d="M6 8l2 2 4-4" stroke="#999" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            Demo İncele
          </button>
        </div>
      </div>

      {/* BEFORE / AFTER */}
      <div style={{ padding: "0 48px 56px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, maxWidth: 860, margin: "0 auto" }}>
          {/* Bad */}
          <div style={{ background: "#fff", borderRadius: 16, padding: 28, border: "1px solid #f7c1c1" }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: "#a32d2d", marginBottom: 18 }}>
              Şu anki durumunuz (bütçesiz)
            </p>
            {["Ay sonu ne kaldı bilmiyorsunuz", "Giderler gelirden hızlı büyüyor", "Excel'ler güncellenmeden eskiyor", "Muhasebeci arar, siz cevap bilmezsiniz"].map((t) => (
              <div key={t} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12, fontSize: 14, color: "#333" }}>
                <span style={{ marginTop: 1, flexShrink: 0 }}><XIcon /></span>{t}
              </div>
            ))}
          </div>
          {/* Good */}
          <div style={{ background: "#f6fdf9", borderRadius: 16, padding: 28, border: "1px solid #9fe1cb" }}>
            <p style={{ fontSize: 14, fontWeight: 700, color: "#0f6e56", marginBottom: 18 }}>
              Sistemimizle (otomatik şeffaflık)
            </p>
            {["Gerçek zamanlı gelir/gider takibi", "Ay sonu tahmini otomatik hesaplanır", "Bütçe aşımı anında bildirim gönderir", "Her toplantıya hazır PDF rapor"].map((t) => (
              <div key={t} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12, fontSize: 14, color: "#333" }}>
                <span style={{ marginTop: 1, flexShrink: 0 }}><CheckIcon /></span>{t}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DEMO DASHBOARD */}
      <div id="dashboard-section" style={{ padding: "0 48px 56px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6, background: "#d4efe3",
            color: "#0f6e56", fontSize: 12, fontWeight: 600, padding: "5px 12px",
            borderRadius: 999, marginBottom: 14, letterSpacing: "0.04em",
          }}>
            Örnek Dashboard
          </div>
          <h2 style={{ fontSize: 30, fontWeight: 800, color: "#111", marginBottom: 8, letterSpacing: -0.5 }}>Böyle Görünür</h2>
          <p style={{ fontSize: 15, color: "#666", marginBottom: 28, lineHeight: 1.6 }}>
            Ajansınızın finansal sağlığını tek bakışta anlayan bir panel.
          </p>

          <div style={{ background: "#fff", borderRadius: 20, border: "0.5px solid #e0e0da", padding: 28 }}>
            {/* Header */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 24 }}>
              <span style={{ fontSize: 16, fontWeight: 700, color: "#111" }}>Nisan 2026 — Bütçe Özeti</span>
              <span style={{ fontSize: 12, color: "#888", background: "#f5f5f2", padding: "4px 10px", borderRadius: 6 }}>
                Güncelleme: Bugün 09:14
              </span>
            </div>

            {/* Metrics */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 24 }}>
              {[
                { label: "Toplam Gelir", val: "₺248.500", color: "#1d9e75", sub: "↑ %12 geçen aya göre", subColor: "#1d9e75" },
                { label: "Toplam Gider", val: "₺179.200", color: "#e24b4a", sub: "↑ %8 bütçe üstü", subColor: "#e24b4a" },
                { label: "Net Kâr", val: "₺69.300", color: "#ba7517", sub: "%27,9 kâr marjı", subColor: "#1d9e75" },
                { label: "Nakit Rezerv", val: "₺114.000", color: "#111", sub: "2,1 aylık güvence", subColor: "#1d9e75" },
              ].map((m) => (
                <div key={m.label} style={{ background: "#f8f8f5", borderRadius: 10, padding: 16 }}>
                  <div style={{ fontSize: 11, color: "#888", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.05em" }}>{m.label}</div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: m.color }}>{m.val}</div>
                  <div style={{ fontSize: 11, color: m.subColor, marginTop: 4 }}>{m.sub}</div>
                </div>
              ))}
            </div>

            {/* Bars */}
            {[
              { label: "Proje Gelirleri", pct: 88, color: "#1d9e75", val: "₺218K" },
              { label: "Sabit Giderler", pct: 52, color: "#e24b4a", val: "₺94K" },
              { label: "Personel", pct: 40, color: "#e24b4a", val: "₺72K" },
              { label: "Pazarlama", pct: 15, color: "#ba7517", val: "₺13K" },
            ].map((b) => (
              <div key={b.label} style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <span style={{ fontSize: 12, color: "#555", width: 110, flexShrink: 0 }}>{b.label}</span>
                <div style={{ flex: 1, background: "#f0f0ec", borderRadius: 99, height: 10, overflow: "hidden" }}>
                  <div style={{ width: `${b.pct}%`, height: "100%", background: b.color, borderRadius: 99 }} />
                </div>
                <span style={{ fontSize: 12, fontWeight: 600, color: "#333", minWidth: 54, textAlign: "right" }}>{b.val}</span>
              </div>
            ))}

            {/* Alert */}
            <div style={{
              background: "#d4efe3", borderRadius: 12, padding: "14px 18px",
              display: "flex", alignItems: "center", gap: 12, marginTop: 16,
            }}>
              <div style={{
                width: 30, height: 30, background: "#1d9e75", borderRadius: 8,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 3v4M7 9v1" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>
              <span style={{ fontSize: 13, color: "#085041", fontWeight: 500 }}>
                Yazılım abonelikleri bu ay bütçenin %18 üstüne çıktı — incelemeniz önerilir.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* NASIL ÇALIŞIR */}
      <div style={{ background: "#fff", padding: "56px 48px" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6, background: "#d4efe3",
            color: "#0f6e56", fontSize: 12, fontWeight: 600, padding: "5px 12px",
            borderRadius: 999, marginBottom: 14, letterSpacing: "0.04em",
          }}>
            Nasıl Çalışır?
          </div>
          <h2 style={{ fontSize: 30, fontWeight: 800, color: "#111", letterSpacing: -0.5 }}>
            3 Adımda Kurulur, Arka Planda Çalışır
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 0, maxWidth: 820, margin: "0 auto" }}>
          {[
            {
              num: "ADIM 01", title: "Veri Kaynakları Bağlanır",
              desc: "Banka, fatura, muhasebe yazılımı veya Excel'iniz sisteme entegre edilir.",
              icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 3v4M12 17v4M3 12h4M17 12h4" stroke="#1d9e75" strokeWidth="2" strokeLinecap="round" /></svg>,
            },
            {
              num: "ADIM 02", title: "Yapay Zeka Kategorize Eder",
              desc: "Her işlem otomatik etiketlenir, bütçe kalemleriyle eşleştirilir ve analiz edilir.",
              icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="7" height="7" rx="1" stroke="#1d9e75" strokeWidth="2" /><rect x="14" y="3" width="7" height="7" rx="1" stroke="#1d9e75" strokeWidth="2" /><rect x="3" y="14" width="7" height="7" rx="1" stroke="#1d9e75" strokeWidth="2" /><path d="M14 17.5h7M17.5 14v7" stroke="#1d9e75" strokeWidth="2" strokeLinecap="round" /></svg>,
            },
            {
              num: "ADIM 03", title: "Raporlar Hazır",
              desc: "Aylık özet, bütçe sapma raporu ve nakit akışı tahmini otomatik oluşturulur.",
              icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M4 20h16M4 14h3v6H4V14zM10.5 9h3v11h-3V9zM17 4h3v16h-3V4z" stroke="#1d9e75" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>,
            },
          ].map((s, i) => (
            <div key={s.num} style={{ textAlign: "center", padding: "0 20px", position: "relative" }}>
              {i < 2 && (
                <div style={{
                  position: "absolute", top: 27, left: "50%", right: "-50%",
                  height: 0, borderTop: "2px dashed #d0d0cc", zIndex: 0,
                }} />
              )}
              <div style={{
                width: 56, height: 56, background: "#d4efe3", borderRadius: 14,
                display: "flex", alignItems: "center", justifyContent: "center",
                margin: "0 auto 16px", position: "relative", zIndex: 1,
              }}>
                {s.icon}
              </div>
              <p style={{ fontSize: 11, fontWeight: 700, color: "#1d9e75", letterSpacing: "0.08em", marginBottom: 8 }}>{s.num}</p>
              <p style={{ fontSize: 15, fontWeight: 700, color: "#111", marginBottom: 6 }}>{s.title}</p>
              <p style={{ fontSize: 13, color: "#666", lineHeight: 1.55 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ÖZELLİKLER */}
      <div style={{ padding: "56px 48px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6, background: "#d4efe3",
            color: "#0f6e56", fontSize: 12, fontWeight: 600, padding: "5px 12px",
            borderRadius: 999, marginBottom: 14, letterSpacing: "0.04em",
          }}>
            Kapsam
          </div>
          <h2 style={{ fontSize: 30, fontWeight: 800, color: "#111", marginBottom: 8, letterSpacing: -0.5 }}>Ne Sunuyoruz?</h2>
          <p style={{ fontSize: 15, color: "#666", marginBottom: 32, lineHeight: 1.6 }}>
            Ajanslar ve hizmet firmaları için özelleştirilmiş bütçe modülleri.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
            {[
              { title: "Gelir-Gider Takibi", desc: "Tüm para hareketleriniz otomatik kategorize edilir. Nereye para gittiğini saniyeler içinde görürsünüz." },
              { title: "Bütçe vs. Gerçek", desc: "Planlanan ile gerçekleşen karşılaştırılır. Sapma olduğunda anında uyarı alırsınız." },
              { title: "Nakit Akışı Tahmini", desc: "Önümüzdeki 30-90 günün nakit durumunu simüle eder. Kriz gelmeden önce görürsünüz." },
              { title: "Departman Bazlı Bütçe", desc: "Proje, ekip ya da maliyet merkezine göre bütçeleri ayrı ayrı izleyin ve kontrol edin." },
              { title: "Otomatik PDF Rapor", desc: "Her ayın başında yönetim kurulu için hazır özet rapor e-postanıza gelir." },
            ].map((f) => (
              <div key={f.title} style={{
                background: "#fff", borderRadius: 16, padding: 24, border: "0.5px solid #e0e0da",
              }}>
                <div style={{
                  width: 40, height: 40, background: "#d4efe3", borderRadius: 10,
                  display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14,
                }}>
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9h12M3 5h12M3 13h6" stroke="#1d9e75" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
                <p style={{ fontSize: 15, fontWeight: 700, color: "#111", marginBottom: 8 }}>{f.title}</p>
                <p style={{ fontSize: 13, color: "#666", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
            {/* Dark card */}
            <div style={{ background: "#111", borderRadius: 16, padding: 24, border: "0.5px solid #333" }}>
              <div style={{
                width: 40, height: 40, background: "#1d4030", borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14,
              }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 3v12M3 9h12" stroke="#1d9e75" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </div>
              <p style={{ fontSize: 15, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Danışmanlık Desteği</p>
              <p style={{ fontSize: 13, color: "#aaa", lineHeight: 1.6 }}>
                Sadece araç değil, finans stratejisi de sunarız. Aylık görüşme + soru-cevap dahildir.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ONBOARDING FORM */}
      <div id="form-section" style={{ padding: "0 48px 56px" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 6, background: "#d4efe3",
            color: "#0f6e56", fontSize: 12, fontWeight: 600, padding: "5px 12px",
            borderRadius: 999, marginBottom: 14, letterSpacing: "0.04em",
          }}>
            Başvuru
          </div>
          <h2 style={{ fontSize: 30, fontWeight: 800, color: "#111", marginBottom: 8, letterSpacing: -0.5 }}>
            Ücretsiz Keşif Görüşmesi
          </h2>
          <p style={{ fontSize: 15, color: "#666", marginBottom: 28, lineHeight: 1.6 }}>
            Firmanıza özel bir bütçe sistemi tasarlayalım. 30 dakikada ihtiyacı anlıyor, öneri hazırlıyoruz.
          </p>

          {submitted ? (
            <div style={{
              background: "#fff", borderRadius: 20, border: "0.5px solid #9fe1cb",
              padding: 48, textAlign: "center",
            }}>
              <div style={{
                width: 56, height: 56, background: "#d4efe3", borderRadius: 999,
                display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px",
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12l5 5L19 7" stroke="#1d9e75" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 style={{ fontSize: 22, fontWeight: 700, color: "#111", marginBottom: 10 }}>Talebiniz Alındı!</h3>
              <p style={{ fontSize: 15, color: "#666" }}>En kısa sürede sizinle iletişime geçeceğiz.</p>
            </div>
          ) : (
            <div style={{ background: "#fff", borderRadius: 20, padding: 36, border: "0.5px solid #e0e0da" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { label: "Ad Soyad", key: "name", placeholder: "Adınız", type: "text", full: false },
                  { label: "Firma Adı", key: "company", placeholder: "Şirket adı", type: "text", full: false },
                  { label: "E-posta", key: "email", placeholder: "mail@firma.com", type: "email", full: false },
                  { label: "Telefon", key: "phone", placeholder: "+90 5xx xxx xx xx", type: "tel", full: false },
                ].map((f) => (
                  <div key={f.key}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "#333", display: "block", marginBottom: 6 }}>{f.label}</label>
                    <input
                      type={f.type}
                      placeholder={f.placeholder}
                      value={formData[f.key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [f.key]: e.target.value })}
                      style={{
                        width: "100%", background: "#f8f8f5", border: "0.5px solid #e0e0da",
                        borderRadius: 10, padding: "10px 14px", fontSize: 14, color: "#111",
                        outline: "none", boxSizing: "border-box",
                      }}
                    />
                  </div>
                ))}

                {/* Selects */}
                {[
                  { label: "Çalışan Sayısı", key: "employees", options: ["1–5", "6–20", "21–50", "50+"] },
                  { label: "Aylık Ciro (yaklaşık)", key: "revenue", options: ["₺0 – ₺100K", "₺100K – ₺500K", "₺500K – ₺2M", "₺2M+"] },
                ].map((s) => (
                  <div key={s.key}>
                    <label style={{ fontSize: 13, fontWeight: 600, color: "#333", display: "block", marginBottom: 6 }}>{s.label}</label>
                    <select
                      value={formData[s.key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [s.key]: e.target.value })}
                      style={{
                        width: "100%", background: "#f8f8f5", border: "0.5px solid #e0e0da",
                        borderRadius: 10, padding: "10px 14px", fontSize: 14, color: "#111",
                        outline: "none", boxSizing: "border-box",
                      }}
                    >
                      <option value="">Seçin...</option>
                      {s.options.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                ))}

                {/* Full-width challenge */}
                <div style={{ gridColumn: "1 / -1" }}>
                  <label style={{ fontSize: 13, fontWeight: 600, color: "#333", display: "block", marginBottom: 6 }}>
                    Şu an en büyük finansal zorluk nedir?
                  </label>
                  <input
                    type="text"
                    placeholder="Örn: Ay sonu ne kaldığını bilmiyorum, giderler kontrolden çıkıyor..."
                    value={formData.challenge}
                    onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                    style={{
                      width: "100%", background: "#f8f8f5", border: "0.5px solid #e0e0da",
                      borderRadius: 10, padding: "10px 14px", fontSize: 14, color: "#111",
                      outline: "none", boxSizing: "border-box",
                    }}
                  />
                </div>

                <div style={{ gridColumn: "1 / -1", marginTop: 4 }}>
                  <button
                    onClick={handleSubmit}
                    style={{
                      background: "#1d9e75", color: "#fff", fontSize: 15, fontWeight: 600,
                      padding: "14px 28px", borderRadius: 10, border: "none", cursor: "pointer",
                      width: "100%",
                    }}
                  >
                    Görüşme Talep Et →
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* CTA */}
      <div style={{ margin: "0 48px 48px" }}>
        <div style={{ background: "#111", borderRadius: 20, padding: "48px 40px", textAlign: "center" }}>
          <div style={{
            width: 52, height: 52, background: "#1d4030", borderRadius: 14,
            display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 20px",
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#1d9e75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h2 style={{ color: "#fff", fontSize: 28, fontWeight: 800, marginBottom: 12 }}>
            Finansal Kör Noktan Olmasın
          </h2>
          <p style={{ color: "#aaa", fontSize: 15, marginBottom: 28, lineHeight: 1.6 }}>
            Her ay aynı soruları soruyorsanız, sistem kurma vakti gelmiş demektir.
          </p>
          <button
            onClick={() => document.getElementById("form-section")?.scrollIntoView({ behavior: "smooth" })}
            style={{
              background: "#1d9e75", color: "#fff", fontSize: 15, fontWeight: 600,
              padding: "14px 32px", borderRadius: 12, border: "none", cursor: "pointer",
            }}
          >
            Projeyi Birlikte Yürütelim →
          </button>
        </div>
      </div>

    </div>
  );
}
