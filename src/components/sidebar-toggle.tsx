"use client";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "./ui/sidebar";

export function SidebarToggle() {

  return (
    <Button
      className="rounded-full bg-transparent backdrop-blur-sm"
      variant="outline"
      size="icon"
    >
      <SidebarTrigger />
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  );
}
