import { SidebarTrigger } from "@/components/ui/sidebar";
import { ViewTransition } from "react";

export function SidebarToggle() {
  return (
    <ViewTransition enter="slide" exit="root" update="root">
      <SidebarTrigger
        className="rounded-full bg-background/50 backdrop-blur-sm print:hidden"
      />
    </ViewTransition>
  );
}
