import { SidebarToggle } from "@/components/sidebar-toggle";
import { useSidebar } from "@/components/ui/sidebar";
import { AnimatePresence, motion } from "motion/react";

export function NavBar() {
  const { state, isMobile, openMobile } = useSidebar();
  const isCollapsed = state === "collapsed";

  // Logic:
  // Mobile: Show only if sidebar is closed (!openMobile).
  // Desktop: Always show, but move position.

  const shouldShowHeader = isCollapsed || (isMobile && !openMobile);

  return (
    <AnimatePresence>
      {shouldShowHeader && (
        <motion.header
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="sticky top-0 z-20 w-full p-2 print:hidden"
        >
          <nav className="flex justify-start">
            <ul className="flex gap-2">
              <li>
                <SidebarToggle variant="header" />
              </li>
            </ul>
          </nav>
        </motion.header>
      )}

    </AnimatePresence>
  );
}
