"use client";
import LinkCard, { LinkCardWithFooter } from "@/components/LinkCard";
import MasonryGrid, { Variants } from "@/components/MasonryGrid";
import { useTranslations } from "next-intl";
import { Share2, Globe, MoreHorizontal } from "lucide-react";
import { AuroraText } from "@/components/ui/aurora-text";
import { TypingAnimation } from "@/components/ui/typing-animation";

export default function LinkhubPage() {
  const t = useTranslations();

  return (
    <div className="flex flex-col gap-8 px-4 py-6 mx-auto">
      {/* Hero Section */}
      <section className="text-center space-y-3">
        <AuroraText
          className="text-4xl md:text-5xl lg:text-6xl font-bold"
          colors={["#C16069", "#A2BF8A", "#C16069", "#A2BF8A"]}
          speed={3}
        >
          <TypingAnimation
            typeSpeed={145}
            pauseDelay={1450}
            deleteSpeed={75}
            showCursor
            blinkCursor
            loop
            startOnView
            cursorStyle="underscore"
          >{t("Aboutme.name")}</TypingAnimation>
        </AuroraText>
        <p className="text-muted-foreground text-lg">
          {t("Linkhub.description")}
        </p>
      </section>

      {/* Social Media Section */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2">
          <Share2 className="w-6 h-6 text-primary" />
          <TypingAnimation
            typeSpeed={145}
            pauseDelay={1450}
            deleteSpeed={75}
            showCursor
            blinkCursor
            loop
            startOnView
            cursorStyle="underscore"
          >{t("Linkhub.sections.socialMedia.title")}</TypingAnimation>
        </h2>
        <MasonryGrid variant={Variants.links}>
          <LinkCard
            title={t("Linkhub.sections.socialMedia.instagram.title")}
            description={t("Linkhub.sections.socialMedia.instagram.description")}
            headding={t("Linkhub.sections.socialMedia.instagram.headding")}
            url="https://instagram.com/mcpeaps_hd"
            icon="/pictures/linkhub/instagram-dark.svg"
          />
          <LinkCard
            title={t("Linkhub.sections.socialMedia.tiktok.title")}
            description={t("Linkhub.sections.socialMedia.tiktok.description")}
            headding={t("Linkhub.sections.socialMedia.tiktok.headding")}
            url="https://www.tiktok.com/@mcpeaps_hd"
            icon="/pictures/linkhub/tiktok.svg"
          />
          <LinkCard
            title={t("Linkhub.sections.socialMedia.threads.title")}
            description={t("Linkhub.sections.socialMedia.threads.description")}
            headding={t("Linkhub.sections.socialMedia.threads.headding")}
            url="https://www.threads.net/@mcpeaps_hd"
            icon="/pictures/linkhub/threads-dark.svg"
          />
          <LinkCard
            title={t("Linkhub.sections.socialMedia.bsky.title")}
            description={t("Linkhub.sections.socialMedia.bsky.description")}
            headding={t("Linkhub.sections.socialMedia.bsky.headding")}
            url="https://bsky.mcpeapsunterstrichhd.dev"
            icon="/pictures/linkhub/bsky.svg"
          />
          <LinkCard
            title={t("Linkhub.sections.socialMedia.twitter.title")}
            description={t("Linkhub.sections.socialMedia.twitter.description")}
            headding={t("Linkhub.sections.socialMedia.twitter.headding")}
            url="https://x.com/mcpeaps_HD"
            icon="/pictures/linkhub/twitter-dark.svg"
          />
          <LinkCard
            title={t("Linkhub.sections.socialMedia.discord.title")}
            description={t("Linkhub.sections.socialMedia.discord.description")}
            headding={t("Linkhub.sections.socialMedia.discord.headding")}
            url="https://discord.gg/XHGTbb4mTF"
            icon="/pictures/linkhub/discord.svg"
          />
          <LinkCard
            title={t("Linkhub.sections.socialMedia.youtube.title")}
            description={t("Linkhub.sections.socialMedia.youtube.description")}
            headding={t("Linkhub.sections.socialMedia.youtube.headding")}
            url="https://youtube.com/@mcpeaps_HD"
            icon="/pictures/linkhub/youtube.svg"
          />
        </MasonryGrid>
      </section>

      {/* Websites Section */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2">
          <Globe className="w-6 h-6 text-primary" />
          <TypingAnimation
            typeSpeed={145}
            pauseDelay={1450}
            deleteSpeed={75}
            showCursor
            blinkCursor
            loop
            startOnView
            cursorStyle="underscore"
          >{t("Linkhub.sections.websites.title")}</TypingAnimation>
        </h2>
        <MasonryGrid variant={Variants.links}>
          <LinkCard
            title={t("Linkhub.sections.websites.myWebsite.title")}
            description={t("Linkhub.sections.websites.myWebsite.description")}
            headding={t("Linkhub.sections.websites.myWebsite.headding")}
            url="https://mcpeapsunterstrichhd.dev"
            icon="/pictures/logo.png"
          />
          <LinkCard
            title={t("Linkhub.sections.websites.cbps.title")}
            description={t("Linkhub.sections.websites.cbps.description")}
            headding={t("Linkhub.sections.websites.cbps.headding")}
            url="https://comboompunktsucht.app"
            icon="/pictures/cbps_logo.png"
          />
          <LinkCard
            title={t("Linkhub.sections.websites.blogCBPS.title")}
            description={t("Linkhub.sections.websites.blogCBPS.description")}
            headding={t("Linkhub.sections.websites.blogCBPS.headding")}
            url="https://blog.comboompunktsucht.app"
            icon="/pictures/cbps_logo.png"
          />
        </MasonryGrid>
      </section>

      {/* Other Section */}
      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center flex items-center justify-center gap-2">
          <MoreHorizontal className="w-6 h-6 text-primary" />
          <TypingAnimation
            typeSpeed={145}
            pauseDelay={1450}
            deleteSpeed={75}
            showCursor
            blinkCursor
            loop
            startOnView
            cursorStyle="underscore"
          >{t("Linkhub.sections.other.title")}</TypingAnimation>
        </h2>
        <MasonryGrid variant={Variants.links}>
          <LinkCard
            title={t("Linkhub.sections.other.github.title")}
            description={t("Linkhub.sections.other.github.description")}
            headding={t("Linkhub.sections.other.github.headding")}
            url="https://github.com/mcpeapsUnterstrichHD"
            icon="/pictures/linkhub/github-dark.svg"
          />
          <LinkCardWithFooter
            title={t("Linkhub.sections.other.playlist.title")}
            description={t("Linkhub.sections.other.playlist.description")}
            headding={t("Linkhub.sections.other.playlist.headding")}
            url="https://music.apple.com/de/playlist/favorite/pl.u-aZb0kXDFP7zBoV2"
            icon="/pictures/linkhub/apple-musik.svg"
          >
            <iframe
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
              className="w-full rounded-lg"
              height="450"
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
              src="https://embed.music.apple.com/de/playlist/favorite/pl.u-aZb0kXDFP7zBoV2"
              title={t("Linkhub.sections.other.playlist.description")}
            />
          </LinkCardWithFooter>
          <LinkCardWithFooter
            title={t("Linkhub.sections.other.song.title")}
            description={t("Linkhub.sections.other.song.description")}
            headding={t("Linkhub.sections.other.song.headding")}
            url="https://song.link/festival_dream&theme=dark"
            icon="/pictures/linkhub/apple-musik.svg"
          >
            <iframe
              className="w-full rounded-lg"
              height="450"
              src="https://odesli.co/embed/?url=https%3A%2F%2Fsong.link%2Ffestival_dream&theme=dark"
              allowFullScreen
              sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox"
              allow="clipboard-read; clipboard-write"
              title={t("Linkhub.sections.other.song.description")}
            />
          </LinkCardWithFooter>
        </MasonryGrid>
      </section>
    </div>
  );
}
