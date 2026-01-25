import { AnimatePresence, motion } from "motion/react";
import { useLocation } from "@tanstack/react-router";
import { ReactNode } from "react";

export function ViewTransition({ children }: { children: ReactNode }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="flex-1 w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
