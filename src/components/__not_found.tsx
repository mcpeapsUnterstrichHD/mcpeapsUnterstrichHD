'use client';
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

const NotFound = () => {
  const [reason, setReason] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const t = useTranslations();

  useEffect(() => {
    fetch("https://naas.isalman.dev/no")
      .then((res) => res.json())
      .then((data) => setReason(data.reason))
      .catch(() => setReason(null))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <div className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden px-4 py-12">
      {/* Animated background gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-primary/30 blur-[100px]" />
        <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-secondary/30 blur-[100px]" />
        <div className="absolute left-1/2 top-1/3 h-60 w-60 -translate-x-1/2 rounded-full bg-accent/20 blur-[80px]" />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-700 w-full max-w-lg">
        <Card className="backdrop-blur-xl bg-card/60 border-border/50 shadow-2xl w-full min-w-[320px]">
          <CardHeader className="text-center pb-2">
            {/* 404 Number with gradient */}
            <div className="relative mb-4 select-none flex justify-center">
              {isLoading ? (
                <Skeleton className="h-32 w-48 rounded-xl md:h-40 md:w-64" />
              ) : (
                <div className="relative">
                  <h1 className="bg-gradient-to-br from-primary via-secondary to-accent bg-clip-text text-center text-[6rem] font-black leading-none tracking-tighter text-transparent md:text-[8rem]">
                    404
                  </h1>
                  {/* Glitch layer */}
                  <h1
                    className="absolute inset-0 bg-gradient-to-br from-secondary to-primary bg-clip-text text-center text-[6rem] font-black leading-none tracking-tighter text-transparent opacity-50 blur-sm md:text-[8rem]"
                    aria-hidden="true"
                  >
                    404
                  </h1>
                </div>
              )}
            </div>

            {/* Icon */}
            <div className="mb-4 flex justify-center">
              {isLoading ? (
                <Skeleton className="h-16 w-16 rounded-full" />
              ) : (
                <div className="rounded-full bg-muted/50 p-4 animate-in zoom-in duration-500">
                  <span className="text-4xl">󰇸</span>
                </div>
              )}
            </div>

            {/* Title */}
            <div className="flex justify-center">
              {isLoading ? (
                <Skeleton className="h-7 w-48" />
              ) : (
                <CardTitle className="text-xl md:text-2xl animate-in fade-in duration-500">
                  {t('Sites.notFound')}
                </CardTitle>
              )}
            </div>
          </CardHeader>

          <CardContent className="text-center pb-6">
            {/* Reason text with loading state */}
            {isLoading ? (
              <div className="flex flex-col items-center gap-2">
                <Skeleton className="h-4 w-64" />
                <Skeleton className="h-4 w-48" />
                <Skeleton className="h-4 w-32" />
              </div>
            ) : reason ? (
              <div className="text-muted-foreground animate-in fade-in slide-in-from-bottom-2 duration-700 text-sm">
                {reason}
              </div>
            ) : null}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NotFound;
