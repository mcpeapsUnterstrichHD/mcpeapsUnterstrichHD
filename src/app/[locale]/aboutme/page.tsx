"use client"
import PinedProjects from "@/components/pinedProjects";
import DecryptedText from "@/components/DecryptedText";
import GradientText from "@/components/GradientText";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { Music, Disc3 } from "lucide-react";

export default function AboutMePage() {
  const t = useTranslations();

  // Calculate age dynamically
  const today = new Date();
  const birthday = new Date("2003-06-06");
  let age = today.getFullYear() - birthday.getFullYear();
  const m = today.getMonth() - birthday.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }

  return (
    <div className="flex flex-col gap-8 px-4 py-6 max-w-9xl mx-auto">
      {/* Hero Section */}
      <section className="text-center space-y-3">
        <p className="text-muted-foreground text-lg">
          <DecryptedText
            text={`${t('Aboutme.hello')} 󱠢`}
            animate
            animateOn="view"
            speed={60}
            maxIterations={20}
          />
        </p>

        <GradientText
          className="text-4xl md:text-5xl lg:text-6xl font-bold"
          colors={['#C16069', '#A2BF8A', '#C16069', '#A2BF8A']}
          animationSpeed={4}
        >
          <DecryptedText
            text={`${t('Aboutme.iam')} ${t('Aboutme.name')}`}
            animate
            animateOn="view"
            speed={80}
            maxIterations={40}
          />
        </GradientText>

        <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
          <DecryptedText
            text={t('Aboutme.title')}
            animate
            animateOn="view"
            speed={60}
            maxIterations={30}
          />
        </h2>
      </section>

      {/* Description */}
      <section className="text-center max-w-2xl mx-auto">
        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
          {t('Aboutme.description', { age })}
        </p>
      </section>

      {/* Music Section */}
      <section className="grid gap-6 md:grid-cols-2">
        {/* Playlist Card */}
        <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Music className="w-5 h-5 text-primary" />
              {t('Aboutme.myPlaylist')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              className="w-full rounded-lg"
              height="450"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/de/playlist/favorite/pl.u-aZb0kXDFP7zBoV2"
              title={t('Aboutme.myPlaylist')}
            />
          </CardContent>
        </Card>

        {/* Current Song Card */}
        <Card className="bg-card/50 backdrop-blur-sm">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-xl">
              <Disc3 className="w-5 h-5 text-primary animate-spin-slow" />
              {t('Aboutme.myCurrentSong')}
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
          <iframe
            className="w-full rounded-lg"
            height="450"
            src="https://odesli.co/embed/?url=https%3A%2F%2Fsong.link%2Ffestival_dream&theme=dark"
            allowFullScreen
            sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox"
            allow="clipboard-read; clipboard-write"
            title={t("Aboutme.myCurrentSong")}
          />
            {/*<p className="text-sm text-muted-foreground text-center">
              🎵 Check out my latest track!
            </p>*/}
          </CardContent>
        </Card>
      </section>

      {/* Pinned Projects */}
      <section>
        <PinedProjects />
      </section>
    </div>
  );
}
