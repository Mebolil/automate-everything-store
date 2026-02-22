import { NavLink } from "@/components/NavLink";
import { useAuth } from "@/contexts/AuthContext";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { LayoutDashboard, Package, LogOut, Home, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const menuItems = [
  { title: "Dashboard", url: "/admin", icon: LayoutDashboard },
  { title: "Hizmetler", url: "/admin/services", icon: Package },
];

export function AdminSidebar() {
  const { signOut } = useAuth();

  return (
    <Sidebar className="border-r border-border">
      <div className="p-4 border-b border-border">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Zap className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold">Admin</span>
        </a>
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Yönetim</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className="hover:bg-muted/50"
                      activeClassName="bg-primary/10 text-primary font-medium"
                    >
                      <item.icon className="mr-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-border space-y-2">
        <Button variant="ghost" size="sm" className="w-full justify-start" asChild>
          <a href="/">
            <Home className="mr-2 h-4 w-4" />
            Siteye Dön
          </a>
        </Button>
        <Button variant="ghost" size="sm" className="w-full justify-start text-destructive hover:text-destructive" onClick={signOut}>
          <LogOut className="mr-2 h-4 w-4" />
          Çıkış Yap
        </Button>
      </SidebarFooter>
    </Sidebar>
  );
}
