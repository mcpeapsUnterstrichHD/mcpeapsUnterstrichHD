import { createFileRoute } from '@tanstack/react-router'
import LinkCard, {LinkCardWithFooter} from "@/components/LinkCard.tsx";
import {useTranslation} from "react-i18next";

//icons
import instagramLogo from "@/assets/pictures/linkhub/instagram-dark.svg"
import tiktokLogo from "@/assets/pictures/linkhub/tiktok.svg"
import threadsLogo from "@/assets/pictures/linkhub/threads-dark.svg"
import bskyLogo from "@/assets/pictures/linkhub/bsky.svg"
import twitterLogo from "@/assets/pictures/linkhub/twitter-dark.svg"
import discordLogo from "@/assets/pictures/linkhub/discord.svg"
import youtubeLogo from "@/assets/pictures/linkhub/youtube.svg"
import logo from "@/assets/pictures/logo.png";
import cbpsLogo from "@/assets/pictures/cbps_logo.png";
import githubLogo from  "@/assets/pictures/linkhub/github-dark.svg"
import appleMusicLogo from "@/assets/pictures/linkhub/apple-musik.svg"

export const Route = createFileRoute('/linkhub/')({
  component: RouteComponent,
})

function RouteComponent() {
  const {t} = useTranslation();
  return <div className="flex flex-col w-full items-center justify-center self-center gap-4 py-8 md:py-10 m-8 md:m-10">
    <h1 className="text-center text-5xl">{t("aboutme.name")}</h1>
    <section className="flex flex-col w-full items-center justify-center gap-4 py-8 md:py-10">
      {t("linkhub.description")}
    </section>
    <section className="flex flex-col w-full items-center justify-center gap-4 py-8 md:py-10">
      <h2 className="text-center text-3xl">{t("linkhub.sections.socialMedia.title")}</h2>
      <div className="flex flex-col items-center justify-center gap-4">
        <LinkCard
          title={t("linkhub.sections.socialMedia.instagram.title")}
          description={t("linkhub.sections.socialMedia.instagram.description")}
          headding={t("linkhub.sections.socialMedia.instagram.headding")}
          url="https://instagram.com/mcpeaps_hd"
          icon={instagramLogo} />
        <LinkCard
          title={t("linkhub.sections.socialMedia.tiktok.title")}
          description={t("linkhub.sections.socialMedia.tiktok.description")}
          headding={t("linkhub.sections.socialMedia.tiktok.headding")}
          url="https://www.tiktok.com/@mcpeaps_hd"
          icon={tiktokLogo} />
        <LinkCard
          title={t("linkhub.sections.socialMedia.threads.title")}
          description={t("linkhub.sections.socialMedia.threads.description")}
          headding={t("linkhub.sections.socialMedia.threads.headding")}
          url="https://www.threads.net/@mcpeaps_hd"
          icon={threadsLogo} />
        <LinkCard
          title={t("linkhub.sections.socialMedia.bsky.title")}
          description={t("linkhub.sections.socialMedia.bsky.description")}
          headding={t("linkhub.sections.socialMedia.bsky.headding")}
          url="https://bsky.mcpeapsunterstrichhd.dev"
          icon={bskyLogo} />
        <LinkCard
          title={t("linkhub.sections.socialMedia.twitter.title")}
          description={t("linkhub.sections.socialMedia.twitter.description")}
          headding={t("linkhub.sections.socialMedia.twitter.headding")}
          url="https://x.com/mcpeaps_HD"
          icon={twitterLogo} />
        <LinkCard
          title={t("linkhub.sections.socialMedia.discord.title")}
          description={t("linkhub.sections.socialMedia.discord.description")}
          headding={t("linkhub.sections.socialMedia.discord.headding")}
          url="https://discord.gg/XHGTbb4mTF"
          icon={discordLogo}
          />
        <LinkCard
          title={t("linkhub.sections.socialMedia.youtube.title")}
          description={t("linkhub.sections.socialMedia.youtube.description")}
          headding={t("linkhub.sections.socialMedia.youtube.headding")}
          url="https://youtube.com/@mcpeaps_HD"
          icon={youtubeLogo}
          />
      </div>
    </section>
    <section className="flex flex-col items-center w-full justify-center gap-4 py-8 md:py-10">
      <h2 className="text-center text-3xl">{t("linkhub.sections.websites.title")}</h2>
      <div className="flex flex-col items-center w-full justify-center gap-4">
        <LinkCard
          title={t("linkhub.sections.websites.myWebsite.title")}
          description={t("linkhub.sections.websites.myWebsite.description")}
          headding={t("linkhub.sections.websites.myWebsite.headding")}
          url="https://mcpeapsunterstrichhd.dev"
          icon={logo}
          />
        <LinkCard
          title={t("linkhub.sections.websites.cbps.title")}
          description={t("linkhub.sections.websites.cbps.description")}
          headding={t("linkhub.sections.websites.cbps.headding")}
          url="https://comboompunktsucht.app"
          icon={cbpsLogo}
        />
        <LinkCard
          title={t("linkhub.sections.websites.blogCBPS.title")}
          description={t("linkhub.sections.websites.blogCBPS.description")}
          headding={t("linkhub.sections.websites.blogCBPS.headding")}
          url="https://blog.comboompunktsucht.app"
          icon={cbpsLogo}
        />
      </div>
    </section>
    <section className="flex flex-col items-center w-full justify-center gap-4 py-8 md:py-10">
      <h2 className="text-center text-3xl">{t("linkhub.sections.other.title")}</h2>
      <div className="flex flex-col items-center w-full justify-center gap-4">
        <LinkCard
          title={t("linkhub.sections.other.github.title")}
          description={t("linkhub.sections.other.github.description")}
          headding={t("linkhub.sections.other.github.headding")}
          url="https://github.com/mcpeapsUnterstrichHD"
          icon={githubLogo}
        />
        <LinkCardWithFooter
          title={t("linkhub.sections.other.playlist.title")}
          description={t("linkhub.sections.other.playlist.description")}
          headding={t("linkhub.sections.other.playlist.headding")}
          url="https://music.apple.com/de/playlist/favorite/pl.u-aZb0kXDFP7zBoV2"
          icon={appleMusicLogo}
        >
          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            width="95%"
            height="450"
            style={{
              maxWidth: "100%",
              overflow: "hidden",
              borderRadius: "10px",
            }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/de/playlist/favorite/pl.u-aZb0kXDFP7zBoV2"
            frameBorder="0"
            title={t("linkhub.sections.other.playlist.description")}
          />
        </LinkCardWithFooter>
        <LinkCardWithFooter
          title={t("linkhub.sections.other.song.title")}
          description={t("linkhub.sections.other.song.description")}
          headding={t("linkhub.sections.other.song.headding")}
          url="https://song.link/festival_dream&theme=dark"
          icon={appleMusicLogo}
        >
          <iframe
            width="95%"
            height="52"
            src="https://odesli.co/embed/?url=https%3A%2F%2Fsong.link%2Ffestival_dream&theme=dark"
            frameBorder="0"
            allowFullScreen
            sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox"
            allow="clipboard-read; clipboard-write"
            title={t("linkhub.sections.other.song.description")}
          />
        </LinkCardWithFooter>
      </div>
    </section>
  </div>
}
