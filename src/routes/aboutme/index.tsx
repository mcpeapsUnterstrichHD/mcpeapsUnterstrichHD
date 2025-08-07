import { createFileRoute } from '@tanstack/react-router'
import PinedProjects from "@/components/pinedProjects.tsx";


export const Route = createFileRoute('/aboutme/')({
  component: RouteComponent,
})

function RouteComponent() {
  const today = new Date();
  const birthday = new Date("2003-06-06");
  let age = today.getFullYear() - birthday.getFullYear();
  const m = today.getMonth() - birthday.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
    age--;
  }
  return <div>
    <h1 className="py-1 text-center text-xl">Hallo 👋</h1>
    <h1 className="text-center font-bold text-5xl">Ich bin Fabian Aps</h1>
    <h1 className="py-3 text-center font-bold text-3xl">
      ITler/DJ/Producher
    </h1>
    <center>
      <p className="w-3/4 text-center">
      Ich bin ein {age} jähriger ITler/DJ/Producher und ich liebe es
      Software zu entwikeln aber durch mein Praktikum bei der KfW
      Bankengruppe hat mir gezeigt, dass mir Anwendungsbetreung auch nicht
      schwer liegt, denoch mach ich die Entwicklung gerne als Hobby. Musik
      ist dabei auch eine Leidenschaft von mir, egal ab hören oder
      Produzieren.
      </p>
    </center>


    <h2 className="py-2 text-center font-bold text-2xl">Meine Playlist:</h2>
    <div className="flex w-full flex-auto flex-row flex-wrap items-center justify-center">
        <iframe
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          width="95%"
          height="450"
          style={{
            maxWidth: '100%',
            overflow: 'hidden',
            borderRadius: '10px'
          }}
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
          src="https://embed.music.apple.com/de/playlist/favorite/pl.u-aZb0kXDFP7zBoV2"
          frameBorder="0"
          title="Meine Playlist"
        />
    </div>
    <h2 className="py-2 text-center font-bold text-2xl">
      Mein aktueller Song:
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
        title="Mein aktueller Song"
      />
    </div>

    <PinedProjects/>
  </div>
}
