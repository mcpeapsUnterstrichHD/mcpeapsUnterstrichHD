import { createFileRoute } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  const { t } = useTranslation();
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center">
      <div className="relative w-full max-w-screen-xl px-4">
        <div className="hidden h-px w-full animate-fade-left animate-glow bg-gradient-to-r from-primary-foreground via-secondary-foreground to-primary-foreground md:block" />
        <h1 className="z-9 animate-title cursor-default whitespace-nowrap bg-secondary-foreground bg-clip-text font-display text-4xl text-edge-outline text-center text-foreground duration-3000 sm:text-6xl md:text-9xl">
          {t("aboutme.name")}
        </h1>
        <div className="hidden h-px w-full animate-fade-right animate-glow bg-gradient-to-r from-primary-foreground via-secondary-foreground to-primary-foreground md:block" />
        <div className="my-16 animate-fade-in text-center">
          <h2 className="text-center text-foreground text-xl">
            {t("aboutme.title")}
          </h2>
        </div>
      </div>
    </div>
  );
}
