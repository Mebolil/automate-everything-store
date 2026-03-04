import { Outlet } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { AdminGuard } from "@/hooks/useAdminGuard";

const AdminLayout = () => {
  return (
    <AdminGuard>
      <SidebarProvider>
        <div className="min-h-screen flex w-full bg-background">
          <AdminSidebar />
          <main className="flex-1 flex flex-col">
            <header className="h-14 border-b border-border flex items-center px-4 bg-background/80 backdrop-blur-sm sticky top-0 z-10">
              <SidebarTrigger className="mr-4" />
              <h1 className="font-display font-semibold text-lg">Otomasyon Çözüm Admin</h1>
            </header>
            <div className="flex-1 p-6">
              <Outlet />
            </div>
          </main>
        </div>
      </SidebarProvider>
    </AdminGuard>
  );
};

export default AdminLayout;
