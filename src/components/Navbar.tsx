import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, LogOut, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();

  const links = [
    { label: "Hizmetler", href: "#services" },
    { label: "Nasıl Çalışır", href: "#how-it-works" },
    { label: "Fiyatlandırma", href: "#pricing" },
    { label: "SSS", href: "#faq" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight">
            AutoMarket
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {user.user_metadata?.full_name || user.email}
              </span>
              <Button variant="ghost" size="sm" onClick={signOut}>
                <LogOut className="w-4 h-4 mr-1" />
                Çıkış
              </Button>
            </>
          ) : (
            <>
              <Button variant="ghost" size="sm" asChild>
                <a href="/auth">Giriş Yap</a>
              </Button>
              <Button size="sm" asChild>
                <a href="/auth">Ücretsiz Başla</a>
              </Button>
            </>
          )}
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                {user ? (
                  <Button variant="ghost" size="sm" onClick={signOut}>
                    <LogOut className="w-4 h-4 mr-1" />
                    Çıkış Yap
                  </Button>
                ) : (
                  <>
                    <Button variant="ghost" size="sm" asChild>
                      <a href="/auth">Giriş Yap</a>
                    </Button>
                    <Button size="sm" asChild>
                      <a href="/auth">Ücretsiz Başla</a>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
