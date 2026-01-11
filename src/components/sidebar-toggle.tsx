import { SidebarTrigger } from "@/components/ui/sidebar";
import { ViewTransition } from "react";

export function SidebarToggle() {
  return (
    <ViewTransition enter="slide" exit="root" update="root">
      <SidebarTrigger
        className="rounded-sm text-foreground bg-card/50 backdrop-blur-sm text-center font-bold print:hidden"
      />
    </ViewTransition>
  );
}
