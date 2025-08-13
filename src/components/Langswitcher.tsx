import { Button } from "@/components/ui/button.tsx";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LanguagesNUM, getLanguageName } from "@/lib/lang.ts";
import { useRouter, useSearch } from "@tanstack/react-router";

export function Langswitcher() {
  const router = useRouter();
  const search = useSearch({ strict: false });
  const currentLang = search.lang ?? LanguagesNUM.de;
  const setLanguage = (lang: LanguagesNUM) => {
    router.navigate({
      search: (prev) => ({
        ...prev,
        lang,
      }),
      replace: true, // ersetzt die History statt neue hinzuzufügen
    });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="print:hidden">
        <Button
          className="rounded-full bg-transparent backdrop-blur-sm font-bold print:hidden"
          variant="outline"
        >
          {getLanguageName(currentLang)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="bg-transparent backdrop-blur-sm print:hidden"
        align="end"
      >
        {Object.values(LanguagesNUM)
          .filter((lang) => lang !== currentLang)
          .map((lang) => (
            <DropdownMenuItem
              key={lang}
              onClick={() => setLanguage(lang as LanguagesNUM)}
            >
              {getLanguageName(lang as LanguagesNUM)}
            </DropdownMenuItem>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
