import { createFileRoute, Outlet, useLocation } from '@tanstack/react-router'
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import { toast } from "sonner";
import { Button, buttonVariants } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { usePrint } from "@/contexts/PrintContext";
import { cn } from "@/lib/utils";

export const Route = createFileRoute('/$locale/cv')({
  component: CVLayout,
})

function CVLayout() {
  const { t } = useTranslation();
  const location = useLocation();
  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const intervalId2 = useRef<NodeJS.Timeout | null>(null);
  const { setIsPrinting } = usePrint();

  const isAtsPage = location.pathname.includes("/cv/ats");

  // Toast notifications for printing tips
  useEffect(() => {
    // Avoid running on every render/mount if possible, or keep simple
    const heading = t("Cv.recommendation.printingSettings.title");
    const desc = t("Cv.recommendation.printingSettings.description");

    // Only show if not seen recently? Or just show. User code showed on mount.
    // To prevent strict mode double toast, maybe check ref?
    // But simple copy is fine.
    const showToast = () => toast(heading, { description: desc });

    showToast();

    intervalId.current = setInterval(showToast, 60_000);

    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, [t]);

  useEffect(() => {
    const heading = t("Cv.recommendation.printingNotice.title");
    const desc = t("Cv.recommendation.printingNotice.description");

    const showToast = () => toast(heading, { description: desc });

    showToast();

    intervalId2.current = setInterval(showToast, 120_000);

    return () => {
      if (intervalId2.current) clearInterval(intervalId2.current);
    };
  }, [t]);

  const handlePrint = async () => {
    setIsPrinting(true);
    await new Promise((resolve) => setTimeout(resolve, 1_000)); // 1 second delay to let images switch
    window.print();
    setIsPrinting(false);
  };

  return (
    <>
      <Outlet />

      {/* Action Buttons - shared across all CV pages */}
      <div className="fixed bottom-4 right-4 z-50 print:hidden flex gap-2">
        <Link href={isAtsPage ? "/cv" : "/cv/ats"}>
            <div className={cn(buttonVariants({ variant: "outline", size: "lg" }), "bg-card/50 backdrop-blur-sm gap-2 shadow-lg")}>
            <FileText className="size-4" />
            {isAtsPage ? "Normal" : "ATS"}
            </div>
        </Link>
        <Button
          onClick={handlePrint}
          className="gap-2 shadow-lg"
          size="lg"
        >
          <Download className="size-4" />
          PDF
        </Button>
      </div>
    </>
  );
}
