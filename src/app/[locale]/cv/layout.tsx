"use client";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import Link from "next/link";
import { usePrint } from "@/contexts/PrintContext";

type Props = {
  children: React.ReactNode;
};

export default function CVLayout({ children }: Props) {
  const t = useTranslations();
  const pathname = usePathname();
  const intervalId = useRef<NodeJS.Timeout | null>(null);
  const intervalId2 = useRef<NodeJS.Timeout | null>(null);
  const { setIsPrinting } = usePrint();

  const isAtsPage = pathname.includes("/cv/ats");

  // Toast notifications for printing tips
  useEffect(() => {
    const toastValues = {
      title: t("Cv.recommendation.printingSettings.title"),
      description: t("Cv.recommendation.printingSettings.description"),
    };
    toast(toastValues.title, { description: toastValues.description });

    intervalId.current = setInterval(() => {
      toast(toastValues.title, { description: toastValues.description });
    }, 60_000);

    return () => {
      if (intervalId.current) clearInterval(intervalId.current);
    };
  }, [t]);

  useEffect(() => {
    const toastValues = {
      title: t("Cv.recommendation.printingNotice.title"),
      description: t("Cv.recommendation.printingNotice.description"),
    };
    toast(toastValues.title, { description: toastValues.description });

    intervalId2.current = setInterval(() => {
      toast(toastValues.title, { description: toastValues.description });
    }, 120_000);

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
      {children}

      {/* Action Buttons - shared across all CV pages */}
      <div className="fixed bottom-4 right-4 z-50 print:hidden flex gap-2">
        <Link href={isAtsPage ? "/cv" : "/cv/ats"}>
          <Button
            variant="outline"
            className="my-glass gap-2 shadow-lg"
            size="lg"
          >
            <FileText className="w-4 h-4" />
            {isAtsPage ? "Normal" : "ATS"}
          </Button>
        </Link>
        <Button
          onClick={handlePrint}
          className="gap-2 shadow-lg"
          size="lg"
        >
          <Download className="w-4 h-4" />
          PDF
        </Button>
      </div>
    </>
  );
}
