/**
 * @module Projects.content
 *
 * @description
 * Intlayer content dictionary for the Projects section of the portfolio.
 * Contains section headings (pinned, all, title), a dynamic project count
 * label (with `{count}` placeholder), and detailed per-project entries. Each
 * project item includes a localized title, description, and image alt text.
 * Projects span the portfolio itself, simplesql CLI/GUI tools, self-hosted
 * services, school and university repositories, dotfiles configurations,
 * community websites/apps, and a live wallpaper experiment. Translations are
 * available in German (de-DE) and English (en-US).
 *
 * Dictionary key: `"projects"`
 *
 * @see {@link src/routes/[[locale=locale]]/projects/+page.svelte} -- full projects listing page
 * @see {@link src/lib/components/PinnedProjects.svelte} -- pinned projects showcase component
 */
import { Locales, t, type Dictionary } from "intlayer";

const projectsContent = {
  key: "projects",
  content: {
    pinned: t({
      [Locales.ENGLISH_UNITED_STATES]: "Pinned Projects",
      [Locales.GERMAN_GERMANY]: "Gepinnte Projekte"
    }),
    title: t({
      [Locales.ENGLISH_UNITED_STATES]: "Projects",
      [Locales.GERMAN_GERMANY]: "Projekte"
    }),
    all: t({
      [Locales.ENGLISH_UNITED_STATES]: "All Projects",
      [Locales.GERMAN_GERMANY]: "Alle Projekte"
    }),
    projectCount: t({
      [Locales.ENGLISH_UNITED_STATES]: "{count} Projects",
      [Locales.GERMAN_GERMANY]: "{count} Projekte"
    }),
    items: {
      portfolio: {
        title: t({
          [Locales.ENGLISH_UNITED_STATES]: "This Portfolio",
          [Locales.GERMAN_GERMANY]: "Dieses Portfolio"
        }),
        description: t({
          [Locales.ENGLISH_UNITED_STATES]: "The site you're on right now. Next.js, TypeScript, and way too many late nights with CSS.",
          [Locales.GERMAN_GERMANY]: "Die Seite, auf der du gerade bist. Next.js, TypeScript, und viel zu viele Nächte mit CSS."
        }),
        imgAlt: t({
          [Locales.ENGLISH_UNITED_STATES]: "Portfolio Screenshot",
          [Locales.GERMAN_GERMANY]: "Portfolio Screenshot"
        }),
      },
      simplesql: {
        title: t({
          [Locales.ENGLISH_UNITED_STATES]: "simplesql",
          [Locales.GERMAN_GERMANY]: "simplesql"
        }),
        description: t({
          [Locales.ENGLISH_UNITED_STATES]: "When you want to run SQL statements without setting up an IDE for half an hour. TUI for quick queries.",
          [Locales.GERMAN_GERMANY]: "Wenn du SQL-Statements ausführen willst, ohne erst eine halbe Stunde IDE aufzusetzen. TUI für schnelle Queries."
        }),
        imgAlt: t({
          [Locales.ENGLISH_UNITED_STATES]: "simplesql Terminal Interface",
          [Locales.GERMAN_GERMANY]: "simplesql Terminal Interface"
        }),
      },
      localServices: {
        title: t({
          [Locales.ENGLISH_UNITED_STATES]: "My Self-Hosted Stack",
          [Locales.GERMAN_GERMANY]: "Mein Self-Hosted Stack"
        }),
        description: t({
          [Locales.ENGLISH_UNITED_STATES]: "SearxNG, Nextcloud, and everything else you need when you don't want to tell Google everything.",
          [Locales.GERMAN_GERMANY]: "SearxNG, Nextcloud und was man sonst so braucht, wenn man Google nicht alles erzählen will."
        }),
        imgAlt: t({
          [Locales.ENGLISH_UNITED_STATES]: "SearxNG Logo",
          [Locales.GERMAN_GERMANY]: "SearxNG Logo"
        }),
      },
      schulRepo: {
        title: t({
          [Locales.ENGLISH_UNITED_STATES]: "School Repository",
          [Locales.GERMAN_GERMANY]: "Schul-Repository"
        }),
        description: t({
          [Locales.ENGLISH_UNITED_STATES]: "Three years of OSZ IMT in code – from first Java baby steps to real projects.",
          [Locales.GERMAN_GERMANY]: "Drei Jahre OSZ IMT in Code – von den ersten Java-Gehversuchen bis zu echten Projekten."
        }),
        imgAlt: t({
          [Locales.ENGLISH_UNITED_STATES]: "OSZ IMT Logo",
          [Locales.GERMAN_GERMANY]: "OSZ IMT Logo"
        }),
      },
      klassenWebsite: {
        title: t({
          [Locales.ENGLISH_UNITED_STATES]: "ITA 12 Website",
          [Locales.GERMAN_GERMANY]: "ITA 12 Website"
        }),
        description: t({
          [Locales.ENGLISH_UNITED_STATES]: "The official class website. Built with the crew, hosted with pride.",
          [Locales.GERMAN_GERMANY]: "Die offizielle Klassenwebsite. Gebaut mit der Crew, gehostet mit Stolz."
        }),
        imgAlt: t({
          [Locales.ENGLISH_UNITED_STATES]: "OSZ IMT Logo",
          [Locales.GERMAN_GERMANY]: "OSZ IMT Logo"
        }),
      },
      klassenApp: {
        title: t({
          [Locales.ENGLISH_UNITED_STATES]: "ITA 12 App",
          [Locales.GERMAN_GERMANY]: "ITA 12 App"
        }),
        description: t({
          [Locales.ENGLISH_UNITED_STATES]: "Schedule changes, grade calculator, class chat – everything we needed in school.",
          [Locales.GERMAN_GERMANY]: "Vertretungsplan, Notenrechner, Klassenchat – alles was wir im Schulalltag gebraucht haben."
        }),
        imgAlt: t({
          [Locales.ENGLISH_UNITED_STATES]: "Class App Icon",
          [Locales.GERMAN_GERMANY]: "Klassen App Icon"
        }),
      },
      simpleSqlRunner: {
        title: t({
          [Locales.ENGLISH_UNITED_STATES]: "Simple SQL Runner",
          [Locales.GERMAN_GERMANY]: "Simple SQL Runner"
        }),
        description: t({
          [Locales.ENGLISH_UNITED_STATES]: "The GUI version of simplesql. For those who prefer clicking over typing.",
          [Locales.GERMAN_GERMANY]: "Die GUI-Version von simplesql. Für alle, die lieber klicken als tippen."
        }),
        imgAlt: t({
          [Locales.ENGLISH_UNITED_STATES]: "Simple SQL Runner Screenshot",
          [Locales.GERMAN_GERMANY]: "Simple SQL Runner Screenshot"
        }),
      },
      dotfilesMacos: {
        title: t({
          [Locales.ENGLISH_UNITED_STATES]: "macOS Dotfiles",
          [Locales.GERMAN_GERMANY]: "macOS Dotfiles"
        }),
        description: t({
          [Locales.ENGLISH_UNITED_STATES]: "My complete Mac setup in one repo. Zsh, Neovim, Homebrew – all included.",
          [Locales.GERMAN_GERMANY]: "Mein komplettes Mac-Setup in einem Repo. Zsh, Neovim, Homebrew – alles dabei."
        }),
        imgAlt: t({
          [Locales.ENGLISH_UNITED_STATES]: "Terminal with Dotfiles",
          [Locales.GERMAN_GERMANY]: "Terminal mit Dotfiles"
        }),
      },
      nixConfig: {
        title: t({
          [Locales.ENGLISH_UNITED_STATES]: "NixOS Config",
          [Locales.GERMAN_GERMANY]: "NixOS Config"
        }),
        description: t({
          [Locales.ENGLISH_UNITED_STATES]: "Reproducible system setup. Configure once, deploy anywhere.",
          [Locales.GERMAN_GERMANY]: "Reproduzierbares System-Setup. Einmal konfigurieren, überall deployen."
        }),
        imgAlt: t({
          [Locales.ENGLISH_UNITED_STATES]: "NixOS Logo",
          [Locales.GERMAN_GERMANY]: "NixOS Logo"
        }),
      },
      dotfilesLinux: {
        title: t({
          [Locales.ENGLISH_UNITED_STATES]: "Linux Dotfiles",
          [Locales.GERMAN_GERMANY]: "Linux Dotfiles"
        }),
        description: t({
          [Locales.ENGLISH_UNITED_STATES]: "Same philosophy, different OS. Hyprland, Waybar, and the whole Wayland stack.",
          [Locales.GERMAN_GERMANY]: "Gleiche Philosophie, anderes OS. Hyprland, Waybar und der ganze Wayland-Stack."
        }),
        imgAlt: t({
          [Locales.ENGLISH_UNITED_STATES]: "Linux Desktop Screenshot",
          [Locales.GERMAN_GERMANY]: "Linux Desktop Screenshot"
        }),
      },
      cbpsWebsite: {
        title: t({
          [Locales.ENGLISH_UNITED_STATES]: "comboom.sucht Website",
          [Locales.GERMAN_GERMANY]: "comboom.sucht Website"
        }),
        description: t({
          [Locales.ENGLISH_UNITED_STATES]: "The digital home of my friend group. Chaotic, colorful, and absolutely us.",
          [Locales.GERMAN_GERMANY]: "Die digitale Heimat meiner Freundesgruppe. Chaotisch, bunt und absolut wir."
        }),
        imgAlt: t({
          [Locales.ENGLISH_UNITED_STATES]: "comboom.sucht Logo",
          [Locales.GERMAN_GERMANY]: "comboom.sucht Logo"
        }),
      },
      cbpsApp: {
        title: t({
          [Locales.ENGLISH_UNITED_STATES]: "comboom.sucht App",
          [Locales.GERMAN_GERMANY]: "comboom.sucht App"
        }),
        description: t({
          [Locales.ENGLISH_UNITED_STATES]: "Plan private events, share memes, collect inside jokes – the crew app.",
          [Locales.GERMAN_GERMANY]: "Private Events planen, Memes teilen, Insider-Jokes sammeln – die Crew-App."
        }),
        imgAlt: t({
          [Locales.ENGLISH_UNITED_STATES]: "comboom.sucht App Icon",
          [Locales.GERMAN_GERMANY]: "comboom.sucht App Icon"
        }),
      },
      uniRepo: {
        title: t({
          [Locales.ENGLISH_UNITED_STATES]: "TU Berlin Repository",
          [Locales.GERMAN_GERMANY]: "TU Berlin Repository"
        }),
        description: t({
          [Locales.ENGLISH_UNITED_STATES]: "Algorithms, data structures, and proof that I can actually do math.",
          [Locales.GERMAN_GERMANY]: "Algorithmen, Datenstrukturen, und der Beweis dass ich doch noch Mathe kann."
        }),
        imgAlt: t({
          [Locales.ENGLISH_UNITED_STATES]: "TU Berlin Logo",
          [Locales.GERMAN_GERMANY]: "TU Berlin Logo"
        }),
      },
      liveWallpaper: {
        title: t({
          [Locales.ENGLISH_UNITED_STATES]: "Interactive Live Wallpaper",
          [Locales.GERMAN_GERMANY]: "Interaktives Live Wallpaper"
        }),
        description: t({
          [Locales.ENGLISH_UNITED_STATES]: "Particles in Nord theme, C++23 under the hood, runs native and in browser. My playground for shader experiments.",
          [Locales.GERMAN_GERMANY]: "Partikel im Nord-Theme, C++23 unter der Haube, läuft native und im Browser. Mein Spielplatz für Shader-Experimente."
        }),
        imgAlt: t({
          [Locales.ENGLISH_UNITED_STATES]: "Live Wallpaper Preview",
          [Locales.GERMAN_GERMANY]: "Live Wallpaper Preview"
        }),
      },
    },
  }
} satisfies Dictionary;

export default projectsContent;
