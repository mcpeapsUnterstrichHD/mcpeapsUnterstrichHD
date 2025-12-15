import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ViewTransition } from "react";

export function SidebarToggle() {
  return (
    <ViewTransition enter="slide" exit="root" update="root">
    <Button
      className="rounded-full fg bg-transparent backdrop-blur-sm"
      variant="outline"
      size="icon"
    >
      <SidebarTrigger />
      <span className="sr-only">Schalte Sidebar</span>
    </Button>
    </ViewTransition>
  );
}
