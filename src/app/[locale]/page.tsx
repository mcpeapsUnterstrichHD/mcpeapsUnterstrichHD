"use client"
import DecryptedText from "@/components/DecryptedText";
import GradientText from "@/components/GradientText";
import { Button } from "@/components/ui/button";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { ChevronDown, User, FolderOpen, FileText, Mail } from "lucide-react";

export default function App() {
  const t = useTranslations();
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] w-full relative px-4">
      {/* Hero Content */}
      <div className="flex flex-col items-center gap-4 text-center">
        {/* Animated Greeting */}
        <div className="text-muted-foreground text-lg md:text-xl lg:text-2xl animate-fade-in">
          <DecryptedText
            text={`${t("Aboutme.hello")} 󱠢 ${t("Aboutme.iam")}`}
            animate
            animateOn="view"
            speed={80}
            maxIterations={30}
          />
        </div>

        {/* Animated Name with Gradient */}
        <GradientText
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
          animationSpeed={3}
        >
          <DecryptedText
            text={t("Aboutme.name")}
            animate
            animateOn="both"
            speed={100}
            maxIterations={50}
          />
        </GradientText>

        {/* Animated Title/Tagline */}
        <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mt-2">
          <DecryptedText
            text={t("Aboutme.title")}
            animate
            animateOn="view"
            speed={80}
            maxIterations={40}
            sequential
            revealDirection="center"
          />
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-3 mt-8 justify-center">
          <Button render={<Link href="/aboutme" />} variant="default" size="lg" className="group gap-2">
            <User className="w-4 h-4 group-hover:scale-110 transition-transform" />
            {t("Recommendation.aboutme.action.label")}
          </Button>
          <Button render={<Link href="/projects" />} variant="secondary" size="lg" className="group gap-2">
            <FolderOpen className="w-4 h-4 group-hover:scale-110 transition-transform" />
            {t("Recommendation.projects.action.label")}
          </Button>
          <Button render={<Link href="/cv" />} variant="outline" size="lg" className="group gap-2">
            <FileText className="w-4 h-4 group-hover:scale-110 transition-transform" />
            {t("Recommendation.cv.action.label")}
          </Button>
          <Button render={<Link href="/contact" />} variant="ghost" size="lg" className="group gap-2">
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
            {t("Sites.contact")}
          </Button>
        </div>
      </div>

      {/**  Scroll Indicator
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
        <ChevronDown className="w-8 h-8" />
      </div> */}
    </div>
  );
}
