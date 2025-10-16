import React from "react";
import { cn } from "@/lib/utils";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { Bell, History, Star } from "lucide-react";

import { ReactNode } from "react";

export function HeaderButton({ children }: { children: ReactNode }) {
  return (
    <Button size={"icon-sm"} variant={"ghost"} className={cn("size-7")}>
      {children}
    </Button>
  );
}

export default function Header() {
  return (
    <div className="py-4 md:px-6 px-4 flex items-center justify-between border-b w-full">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <HeaderButton>
          <Star />
        </HeaderButton>
      </div>
      <div className="flex items-center gap-2">
        <ModeToggle />
        <HeaderButton>
          <History />
        </HeaderButton>
        <HeaderButton>
          <Bell />
        </HeaderButton>
      </div>
    </div>
  );
}
