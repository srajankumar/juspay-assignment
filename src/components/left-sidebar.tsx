"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  BookText,
  ChartPie,
  ChevronRight,
  Folder,
  IdCard,
  IdCardLanyard,
  List,
  MessagesSquare,
  ShoppingBag,
  Users,
} from "lucide-react";
import {
  SidebarLeft,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarLeftMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import NameBadge from "@/components/sidebar/name-badge";
import TabSection from "@/components/sidebar/tab-section";
import { ScrollArea } from "@/components/ui/scroll-area";

type SubItem = { title: string; url: string };
type NavItem = {
  title: string;
  url: string;
  icon?: React.ElementType;
  defaultOpen?: boolean;
  subitems?: SubItem[];
};

const dashboards_items: NavItem[] = [
  { title: "Default", url: "/dashboard", icon: ChartPie },
  { title: "eCommerce", url: "/dashboard/e-commerce", icon: ShoppingBag },
  { title: "Order List", url: "/dashboard/order-list", icon: List },
  {
    title: "Projects",
    url: "#",
    icon: Folder,
    defaultOpen: false,
    subitems: [
      { title: "Project One", url: "#" },
      { title: "Project Two", url: "#" },
    ],
  },
  {
    title: "Online Courses",
    url: "#",
    icon: BookOpen,
    subitems: [
      { title: "Course One", url: "#" },
      { title: "Course Two", url: "#" },
    ],
  },
];

const pages_items: NavItem[] = [
  {
    title: "User Profile",
    url: "#",
    icon: IdCardLanyard,
    defaultOpen: true,
    subitems: [
      { title: "Overview", url: "#" },
      { title: "Projects", url: "#" },
      { title: "Campaigns", url: "#" },
      { title: "Documents", url: "#" },
      { title: "Followers", url: "#" },
    ],
  },
  {
    title: "Account",
    url: "#",
    icon: IdCard,
    subitems: [
      { title: "About", url: "#" },
      { title: "Settings", url: "#" },
    ],
  },
  {
    title: "Corporate",
    url: "#",
    icon: Users,
    subitems: [
      { title: "About", url: "#" },
      { title: "Settings", url: "#" },
    ],
  },
  {
    title: "Blog",
    url: "#",
    icon: BookText,
    subitems: [
      { title: "Blog 1", url: "#" },
      { title: "Blog 2", url: "#" },
    ],
  },
  {
    title: "Social",
    url: "#",
    icon: MessagesSquare,
    subitems: [
      { title: "Instagram", url: "#" },
      { title: "Facebook", url: "#" },
      { title: "X", url: "#" },
    ],
  },
];

const sections = [
  { label: "Dashboards", items: dashboards_items },
  { label: "Pages", items: pages_items },
];

function ActiveBar({ isActive }: { isActive: boolean }) {
  return (
    <div
      className={`w-1 h-4 bg-primary absolute left-0 rounded ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
    />
  );
}

function RenderNavItem({
  item,
  pathname,
}: {
  item: NavItem;
  pathname: string;
}) {
  const isActive =
    pathname === item.url || !!item.subitems?.some((s) => pathname === s.url);
  const Icon = item.icon;

  if (item.subitems && item.subitems.length > 0) {
    return (
      <SidebarMenuItem key={item.title}>
        <Collapsible
          defaultOpen={item.defaultOpen || isActive}
          data-slot="collapsible"
          className="group"
        >
          <CollapsibleTrigger asChild>
            <SidebarLeftMenuButton isActive={isActive}>
              <ActiveBar isActive={isActive} />
              <ChevronRight className="transition-transform group-data-[state=open]:rotate-90 text-muted-foreground" />
              {Icon && <Icon />}
              <span>{item.title}</span>
            </SidebarLeftMenuButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.subitems.map((sub) => (
                <SidebarMenuSubItem key={sub.title}>
                  <Link href={sub.url}>
                    <span>{sub.title}</span>
                  </Link>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </Collapsible>
      </SidebarMenuItem>
    );
  }

  return (
    <SidebarMenuItem key={item.title}>
      <SidebarLeftMenuButton asChild isActive={isActive}>
        <Link href={item.url} className="pl-9">
          <ActiveBar isActive={isActive} />
          {Icon && <Icon />}
          <span>{item.title}</span>
        </Link>
      </SidebarLeftMenuButton>
    </SidebarMenuItem>
  );
}

export function LeftSidebar() {
  const pathname = usePathname();

  return (
    <SidebarLeft>
      <SidebarHeader>
        <NameBadge />
      </SidebarHeader>
      <ScrollArea className="h-[90%]">
        <SidebarContent>
          <TabSection />
          <div className="pb-20">
            {sections.map((sec) => (
              <SidebarGroup key={sec.label}>
                <SidebarGroupLabel>{sec.label}</SidebarGroupLabel>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {sec.items.map((item) => (
                      <RenderNavItem
                        key={item.title}
                        item={item}
                        pathname={pathname}
                      />
                    ))}
                  </SidebarMenu>
                </SidebarGroupContent>
              </SidebarGroup>
            ))}
          </div>
        </SidebarContent>
      </ScrollArea>
    </SidebarLeft>
  );
}
