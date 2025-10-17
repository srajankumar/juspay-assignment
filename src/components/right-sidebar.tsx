"use client";

import { cn } from "@/lib/utils";
import { Bug, Radio, User2 } from "lucide-react";
import { SidebarRight, SidebarContent } from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RightSidebar() {
  const notifications = [
    {
      id: "n1",
      icon: "Bug",
      bg: "bg-primary-blue",
      title: "You have a bug that needs...",
      time: "Just now",
    },
    {
      id: "n2",
      icon: "User2",
      bg: "bg-primary-purple",
      title: "New user registered",
      time: "59 minutes ago",
    },
    {
      id: "n3",
      icon: "Bug",
      bg: "bg-primary-blue",
      title: "You have a bug that needs...",
      time: "12 hours ago",
    },
    {
      id: "n4",
      icon: "Radio",
      bg: "bg-primary-purple",
      title: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
    },
  ];

  const activities = [
    {
      id: "a1",
      title: "You have a bug that needs...",
      time: "Just now",
      img: "a1.png",
      fallback: "a1",
    },
    {
      id: "a2",
      title: "Released a new version",
      time: "59 minutes ago",
      img: "a2.png",
      fallback: "a2",
    },
    {
      id: "a3",
      title: "Submitted a bug",
      time: "12 hours ago",
      img: "a3.png",
      fallback: "a3",
    },
    {
      id: "a4",
      title: "Modified A data in Page X",
      time: "Today, 11:59 AM",
      img: "a4.png",
      fallback: "a4",
    },
    {
      id: "a5",
      title: "Deleted a page in Project X",
      time: "Feb 2, 2023",
      img: "a5.png",
      fallback: "a5",
    },
  ];

  const contacts = [
    {
      id: "c1",
      name: "Natali Craig",
      img: "natali-craig.png",
      fallback: "NC",
    },
    {
      id: "c2",
      name: "Drew Cano",
      img: "drew-cano.png",
      fallback: "DC",
    },
    {
      id: "c3",
      name: "Orlando Diggs",
      img: "orlando-diggs.png",
      fallback: "OD",
    },
    {
      id: "c4",
      name: "Andi Lane",
      img: "andi-lane.png",
      fallback: "AL",
    },
    {
      id: "c5",
      name: "Kate Morrison",
      img: "kate-morrison.png",
      fallback: "KM",
    },
    {
      id: "c6",
      name: "Koray Okumus",
      img: "koray-okumus.png",
      fallback: "KO",
    },
  ];

  function renderIcon(icon: string) {
    switch (icon) {
      case "User2":
        return <User2 className="w-3.5 h-3.5" />;
      case "Radio":
        return <Radio className="w-3.5 h-3.5" />;
      default:
        return <Bug className="w-3.5 h-3.5" />;
    }
  }

  return (
    <SidebarRight>
      <SidebarContent
        className="max-h-dvh overflow-y-auto
  [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:bg-background
  [&::-webkit-scrollbar-thumb]:bg-secondary relative flex w-full min-w-0 flex-col px-4 py-5"
      >
        {/* Notifications */}
        <div className="grid gap-5 pb-8">
          <h2 className="text-sm font-semibold">Notifications</h2>
          <ul className="grid gap-4">
            {notifications.map((n) => (
              <li key={n.id} className="flex gap-3">
                <div
                  className={cn(
                    "p-1.5 w-fit h-fit rounded-md text-black",
                    n.bg
                  )}
                >
                  {renderIcon(n.icon)}
                </div>
                <div className="leading-1">
                  <p className="text-sm">{n.title}</p>
                  <span className="text-muted-foreground text-xs">
                    {n.time}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Activities */}
        <div className="grid gap-3 pb-8">
          <h2 className="text-sm font-semibold">Activities</h2>
          <ul className="relative border-s border-muted-foreground/30 mx-3 grid gap-3">
            {activities.map((a) => (
              <li className="ms-6" key={a.id}>
                <div className="p-2 rounded-full absolute -start-5 bg-background">
                  <Avatar className="w-6 h-6">
                    <AvatarImage
                      src={`/assets/right-sidebar/activities/${a.img}`}
                    />
                    <AvatarFallback>{a.fallback}</AvatarFallback>
                  </Avatar>
                </div>
                <div className="leading-1 mt-1">
                  <p className="text-sm">{a.title}</p>
                  <span className="text-muted-foreground text-xs">
                    {a.time}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts */}
        <div className="grid gap-5 pb-20">
          <h2 className="text-sm font-semibold">Contacts</h2>
          <ul className="grid gap-4">
            {contacts.map((c) => (
              <li key={c.id} className="flex items-center gap-2">
                <Avatar className="w-6 h-6">
                  <AvatarImage
                    src={`/assets/right-sidebar/contacts/${c.img}`}
                  />
                  <AvatarFallback>{c.fallback}</AvatarFallback>
                </Avatar>
                <span className="text-sm">{c.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </SidebarContent>
    </SidebarRight>
  );
}
