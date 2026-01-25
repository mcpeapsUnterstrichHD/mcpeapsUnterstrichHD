import { createFileRoute } from '@tanstack/react-router'
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "@/i18n/navigation";
import { useTranslation } from "react-i18next";
import { User, FolderOpen, FileText, Mail } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";
import { TypingAnimation } from "@/components/ui/typing-animation"

export const Route = createFileRoute('/$locale/')({
  component: Home,
})

function Home() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] w-full relative px-4">
      {/* Hero Content */}
      <div className="flex flex-col items-center gap-4 text-center">
        {/* Animated Greeting */}
        <div className="text-muted-foreground text-lg md:text-xl lg:text-2xl animate-fade-in">
          <TypingAnimation
            className="text-lg md:text-xl lg:text-2xl"
          >
            {`${t("Aboutme.hello")} 󱠢 ${t("Aboutme.iam")}`}
          </TypingAnimation>
        </div>

        {/* Animated Name with Gradient */}
        <AuroraText
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold rounded-sm"
          colors={[
            '#C16069',
            '#A2BF8A',
            '#C16069',
            '#A2BF8A',
            '#C16069',
            '#A2BF8A',
            '#C16069'
          ]}
          speed={3}
        >
          <TypingAnimation
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold"
          >{t("Aboutme.name")}</TypingAnimation>
        </AuroraText>

        {/* Animated Title/Tagline */}
        <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mt-2">
        <TypingAnimation
            className="text-xl md:text-2xl lg:text-3xl"
          >{t("Aboutme.title")}</TypingAnimation>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 mt-8 justify-center">
          <Link href="/aboutme" className={cn(buttonVariants({ variant: "default", size: "lg" }), "group gap-2")}>
            <User className="size-4 group-hover:scale-110 transition-transform" />
            {t("Recommendation.aboutme.action.label")}
          </Link>
          <Link href="/projects" className={cn(buttonVariants({ variant: "secondary", size: "lg" }), "group gap-2")}>
            <FolderOpen className="size-4 group-hover:scale-110 transition-transform" />
            {t("Recommendation.projects.action.label")}
          </Link>
          <Link href="/cv" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "bg-card/50 backdrop-blur-sm group gap-2")}>
            <FileText className="size-4 group-hover:scale-110 transition-transform" />
            {t("Recommendation.cv.action.label")}
          </Link>
          <Link href="/contact" className={cn(buttonVariants({ variant: "ghost", size: "lg" }), "group gap-2")}>
            <Mail className="size-4 group-hover:scale-110 transition-transform" />
            {t("Sites.contact")}
          </Link>
        </div>
      </div>
    </div>
  );
}
