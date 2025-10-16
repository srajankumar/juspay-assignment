import type { Metadata } from "next";

import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/left-sidebar";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <Header />
        <div className="md:px-8 px-6 py-7">{children}</div>
      </main>
    </SidebarProvider>
  );
}
