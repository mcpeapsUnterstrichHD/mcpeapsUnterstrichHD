
import LinkCard, {LinkCardWithFooter} from "@/components/LinkCard";
import MasonryGrid, { Variants } from "@/components/MasonryGrid";
import {useTranslations} from "next-intl";

export default function RouteComponent() {
  const t = useTranslations();
  return <div className="grid grid-cols-1 w-full items-center justify-center self-center gap-4 py-4 px-4 md:px-8">
    <h1 className="text-center text-5xl">{t("Aboutme.name")}</h1>
    <section className="grid grid-cols-1 w-full text-center items-center justify-center gap-2 py-2">
      {t("Linkhub.description")}
    </section>
    <section className="grid grid-cols-1 w-full items-center justify-center gap-2 py-2">
      <h2 className="text-center text-3xl">{t("Linkhub.sections.socialMedia.title")}</h2>
      <div className="w-full">
        <MasonryGrid variant={Variants.links}>
        <LinkCard
          title={t("Linkhub.sections.socialMedia.instagram.title")}
          description={t("Linkhub.sections.socialMedia.instagram.description")}
          headding={t("Linkhub.sections.socialMedia.instagram.headding")}
          url="https://instagram.com/mcpeaps_hd"
          icon="/pictures/linkhub/instagram-dark.svg" />
        <LinkCard
          title={t("Linkhub.sections.socialMedia.tiktok.title")}
          description={t("Linkhub.sections.socialMedia.tiktok.description")}
          headding={t("Linkhub.sections.socialMedia.tiktok.headding")}
          url="https://www.tiktok.com/@mcpeaps_hd"
          icon="/pictures/linkhub/tiktok.svg" />
        <LinkCard
          title={t("Linkhub.sections.socialMedia.threads.title")}
          description={t("Linkhub.sections.socialMedia.threads.description")}
          headding={t("Linkhub.sections.socialMedia.threads.headding")}
          url="https://www.threads.net/@mcpeaps_hd"
          icon="/pictures/linkhub/threads-dark.svg" />
        <LinkCard
          title={t("Linkhub.sections.socialMedia.bsky.title")}
          description={t("Linkhub.sections.socialMedia.bsky.description")}
          headding={t("Linkhub.sections.socialMedia.bsky.headding")}
          url="https://bsky.mcpeapsunterstrichhd.dev"
          icon="/pictures/linkhub/bsky.svg" />
        <LinkCard
          title={t("Linkhub.sections.socialMedia.twitter.title")}
          description={t("Linkhub.sections.socialMedia.twitter.description")}
          headding={t("Linkhub.sections.socialMedia.twitter.headding")}
          url="https://x.com/mcpeaps_HD"
          icon="/pictures/linkhub/twitter-dark.svg" />
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
      </div>
    </section>
    <section className="grid grid-cols-1 items-center w-full justify-center gap-2 py-2">
      <h2 className="text-center text-3xl">{t("Linkhub.sections.websites.title")}</h2>
      <div className="w-full">
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
      </div>
    </section>
    <section className="grid grid-cols-1 items-center w-full justify-center gap-2 py-2">
      <h2 className="text-center text-3xl">{t("Linkhub.sections.other.title")}</h2>
      <div className="w-full">
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
            width="100%"
            height="450"
            style={{
              maxWidth: "100%",
              overflow: "hidden",
              borderRadius: "10px",
            }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.music.apple.com/de/playlist/favorite/pl.u-aZb0kXDFP7zBoV2"
            frameBorder="0"
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
            width="100%"
            height="450"
            src="https://odesli.co/embed/?url=https%3A%2F%2Fsong.link%2Ffestival_dream&theme=dark"
            frameBorder="0"
            allowFullScreen
            sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox"
            allow="clipboard-read; clipboard-write"
            title={t("Linkhub.sections.other.song.description")}
          />
        </LinkCardWithFooter>
        </MasonryGrid>
      </div>
    </section>
  </div>
}
