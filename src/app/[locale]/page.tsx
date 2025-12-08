"use client"
import { useTranslations } from "next-intl";

export default function App() {
  const t = useTranslations();
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center">
      <div className="relative w-full max-w-xl px-4">
        <div className="hidden h-px w-full animate-fade-left animate-glow bg-linear-to-r from-primary-foreground via-secondary-foreground to-primary-foreground md:block" />
        <h1 className="z-9 animate-title cursor-default whitespace-nowrap bg-secondary-foreground bg-clip-text font-display text-4xl text-edge-outline text-center text-foreground duration-3000 sm:text-6xl md:text-9xl">
          {t("Aboutme.name")}
        </h1>
        <div className="hidden h-px w-full animate-fade-right animate-glow bg-linear-to-r from-primary-foreground via-secondary-foreground to-primary-foreground md:block" />
        <div className="my-16 animate-fade-in text-center">
          <h2 className="text-center text-foreground text-xl">
            {t("Aboutme.title")}
          </h2>
        </div>
      </div>
    </div>
  );
}
