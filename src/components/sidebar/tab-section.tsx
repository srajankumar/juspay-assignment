import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TabSection() {
  return (
    <Tabs defaultValue="overview" className="w-full px-4 text-sm">
      <TabsList className="w-full">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="recently">Recently</TabsTrigger>
      </TabsList>
      <TabsContent value="overview">
        <ul className="list-disc list-inside space-y-1 px-2 marker:text-muted-foreground">
          <li>Overview</li>
          <li>Projects</li>
        </ul>
      </TabsContent>
      <TabsContent value="recently">
        <ul className="list-disc list-inside space-y-1 px-2 marker:text-muted-foreground">
          <li>Others</li>
        </ul>
      </TabsContent>
    </Tabs>
  );
}
