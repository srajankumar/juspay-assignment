import type { Metadata } from "next";

import {
  SidebarLeftProvider,
  SidebarRightProvider,
} from "@/components/ui/sidebar";
import { LeftSidebar } from "@/components/left-sidebar";
import Header from "@/components/header";
import { RightSidebar } from "@/components/right-sidebar";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarLeftProvider>
      <SidebarRightProvider>
        <LeftSidebar />
        <main className="w-full">
          <Header />
          <div className="md:px-8 px-6 py-7">{children}</div>
        </main>
        <RightSidebar />
      </SidebarRightProvider>
    </SidebarLeftProvider>
  );
}
