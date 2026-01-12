//import { Langswitcher } from "@/components/Langswitcher";
import { SidebarToggle } from "@/components/sidebar-toggle";
import { useSidebar } from "@/components/ui/sidebar";

export function NavBar() {
  const { state, isMobile, openMobile } = useSidebar();
  const isCollapsed = state === "collapsed";

  // Show header when: sidebar collapsed (desktop) OR mobile sidebar closed
  const shouldShowHeader = isCollapsed || (isMobile && !openMobile);

  if (!shouldShowHeader) {
    return null;
  }

  return (
    <header className="fixed left-2 top-2 z-20 print:hidden">
      <nav className="flex justify-start py-2">
        <ul className="flex gap-2 pr-4">
          {/*<li className="rounded-full bg-background/50 backdrop-blur-sm">
            <Langswitcher />
          </li>*/}
          <li>
            <SidebarToggle variant="header" />
          </li>
        </ul>
      </nav>
    </header>
  );
}
