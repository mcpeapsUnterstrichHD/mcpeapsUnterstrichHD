import PinedProjects from "@/components/pinedProjects";
import { useTranslations } from "next-intl";

export default function RouteComponent() {
  const t = useTranslations()
  const today = new Date();
  const birthday = new Date("2003-06-06");
  let age = today.getFullYear() - birthday.getFullYear();
  const m = today.getMonth() - birthday.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  return (
    <div>
      <h1 className="py-1 text-center text-xl">{t('Aboutme.hello')} 👋</h1>
      <h1 className="text-center font-bold text-5xl">{t('Aboutme.iam')} {t('Aboutme.name')}</h1>
      <h1 className="py-3 text-center font-bold text-3xl">
        {t('Aboutme.title')}
      </h1>
      <center>
        <p className="w-3/4 text-center">
          {t('Aboutme.description', {age: age})}
        </p>
      </center>

      <h2 className="py-2 text-center font-bold text-2xl">{t('Aboutme.myPlaylist')}:</h2>
      <div className="flex w-full flex-auto flex-row flex-wrap items-center justify-center">
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
          title={t('Aboutme.myPlaylist')}
        />
      </div>
      <h2 className="py-2 text-center font-bold text-2xl">
        {t('Aboutme.myCurrentSong')}:
      </h2>
      <div className="flex w-full flex-auto flex-row flex-wrap items-center justify-center">
        <iframe
          width="95%"
          height="52"
          src="https://odesli.co/embed/?url=https%3A%2F%2Fsong.link%2Ffestival_dream&theme=dark"
          frameBorder="0"
          allowFullScreen
          sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox"
          allow="clipboard-read; clipboard-write"
          title={t('Aboutme.myCurrentSong')}
        />
      </div>

      <PinedProjects />
    </div>
  );
}
