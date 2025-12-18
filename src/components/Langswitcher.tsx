"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { languages, type Language } from "@/lib/lang";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { ViewTransition } from "react";

export function Langswitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const currentLanguage = languages.find((lang) => lang.code === locale);

  const setLanguage = (lang: Language) => {
    // Use the next-intl router which handles locale switching automatically
    router.replace(pathname, { locale: lang.code });
  };

  return (
    <ViewTransition enter="slide" exit="root" update="root">
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button
            className="rounded-full text-foreground bg-transparent backdrop-blur-sm text-center font-bold print:hidden min-w-44"
            variant="outline"
          />
        }
        className="print:hidden"
      >
        {currentLanguage?.name || "Language"} {"("}{currentLanguage?.country || "country"}{")"}
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="bg-transparent text-foreground  backdrop-blur-sm print:hidden"
        align="end"
      >
        {languages
          .filter((lang) => lang.code !== locale)
          .map((lang) => (
            <DropdownMenuItem
              key={lang.code}
              onClick={() => setLanguage(lang)}
              className="cursor-pointer text-foreground text-center"
            >
              {lang.name} {"("}{lang.country}{")"}
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
    </ViewTransition>
  );
}
