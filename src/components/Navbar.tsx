import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Zap, LogOut, User, Shield, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const products = [
  { label: "BütçeCRM", href: "/butceleme" },
  { label: "Özel Tasarım Site", href: "/web-sitesi" },
  { label: "Otomasyon Sistemleri", href: "/otomasyon" },
];

const navLinks = [
  { label: "Nasıl Çalışır", href: "/#how-it-works" },
  { label: "Fiyatlandırma", href: "/#pricing" },
  { label: "Hakkımızda", href: "/hakkimizda" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, signOut } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (!user) { setIsAdmin(false); return; }
    supabase.rpc("has_role", { _user_id: user.id, _role: "admin" }).then(({ data }) => {
      setIsAdmin(!!data);
    });
  }, [user]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="font-display text-xl font-bold tracking-tight">Hisu Solutions</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors outline-none">
              Ürünler
              <ChevronDown className="w-3.5 h-3.5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="min-w-[180px]">
              {products.map((p) => (
                <DropdownMenuItem key={p.label} asChild>
                  <a href={p.href}>{p.label}</a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <>
              {isAdmin && (
                <Button variant="outline" size="sm" asChild>
                  <a href="/admin">
                    <Shield className="w-4 h-4 mr-1" />
                    Admin
                  </a>
                </Button>
              )}
              <Button variant="ghost" size="sm" asChild>
                <a href="/profile" className="flex items-center gap-1.5">
                  <User className="w-4 h-4" />
                  {user.user_metadata?.full_name || user.email}
                </a>
              </Button>
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
              <Button size="sm" asChild className="bg-green-600 hover:bg-green-700 text-white">
                <a href="/iletisim">Ücretsiz Görüşme Al</a>
              </Button>
            </>
          )}
        </div>

        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
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
              <div className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-wider text-muted-foreground">Ürünler</span>
                {products.map((p) => (
                  <a key={p.label} href={p.href} className="text-sm font-medium text-muted-foreground hover:text-foreground py-1 pl-3" onClick={() => setIsOpen(false)}>
                    {p.label}
                  </a>
                ))}
              </div>
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-foreground py-2" onClick={() => setIsOpen(false)}>
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-2 border-t border-border">
                {user ? (
                  <>
                    {isAdmin && (
                      <Button variant="outline" size="sm" asChild>
                        <a href="/admin">
                          <Shield className="w-4 h-4 mr-1" />
                          Admin Paneli
                        </a>
                      </Button>
                    )}
                    <Button variant="ghost" size="sm" asChild>
                      <a href="/profile">
                        <User className="w-4 h-4 mr-1" />
                        Profilim
                      </a>
                    </Button>
                    <Button variant="ghost" size="sm" onClick={signOut}>
                      <LogOut className="w-4 h-4 mr-1" />
                      Çıkış Yap
                    </Button>
                  </>
                ) : (
                  <>
                    <Button variant="ghost" size="sm" asChild>
                      <a href="/auth">Giriş Yap</a>
                    </Button>
                    <Button size="sm" asChild className="bg-green-600 hover:bg-green-700 text-white">
                      <a href="/iletisim">Ücretsiz Görüşme Al</a>
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
