import { Zap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Zap className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-display text-lg font-bold">AutoMarket</span>
            </a>
            <p className="text-sm text-muted-foreground leading-relaxed">
              İş süreçlerinizi otomatikleştiren hazır çözümler marketi.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm">Hizmetler</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">E-posta Otomasyonu</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Sosyal Medya</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">İş Akışı</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Chatbot & AI</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm">Şirket</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Kariyer</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">İletişim</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm">Destek</h4>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Yardım Merkezi</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Gizlilik Politikası</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Kullanım Koşulları</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">SSS</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2026 AutoMarket. Tüm hakları saklıdır.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
            <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
