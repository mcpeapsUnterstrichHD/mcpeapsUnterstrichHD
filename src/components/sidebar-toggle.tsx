import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function SidebarToggle() {

  return (
    <Button
      className="rounded-full bg-transparent backdrop-blur-sm"
      variant="outline"
      size="icon"
    >
      <SidebarTrigger />
      <span className="sr-only">Schalte Sidebar</span>
    </Button>
  );
}
