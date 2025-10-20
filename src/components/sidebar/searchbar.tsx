import React from "react";
import { Input } from "../ui/input";
import { Search } from "lucide-react";
import { Label } from "../ui/label";

export default function Searchbar() {
  return (
    <div className="relative">
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <Input
        id="search"
        placeholder="Search"
        className="h-7 pl-7 w-40 shadow-none bg-secondary border-0 focus:ring-0 focus-visible:ring-0"
      />
      <Search className="pointer-events-none absolute top-1/2 left-2 size-4 -translate-y-1/2 opacity-50 select-none" />
    </div>
  );
}
