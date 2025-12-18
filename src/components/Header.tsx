import { Langswitcher } from "@/components/Langswitcher";
import { SidebarToggle } from "@/components/sidebar-toggle";

export function NavBar() {
  return (
    <header className="fixed right-0 top-0 z-20 w-full print:hidden">
      <nav className="flex w-full justify-end py-2">
        <ul className="flex gap-2 pr-4">
          <li className="rounded-full bg-background/50 backdrop-blur-sm">
            <Langswitcher />
          </li>
          <li className="rounded-full bg-background/50 backdrop-blur-sm">
            <SidebarToggle />
          </li>
        </ul>
      </nav>
    </header>
  );
}
