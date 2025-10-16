import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function NameBadge() {
  return (
    <div className="flex items-center gap-3 p-2">
      <Avatar>
        <AvatarImage src="/assets/image.png" />
        <AvatarFallback>SK</AvatarFallback>
      </Avatar>
      <span className="text-sm">Srajan Kumar</span>
    </div>
  );
}
