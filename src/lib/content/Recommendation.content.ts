/**
 * @module Recommendation.content
 *
 * @description
 * Intlayer content dictionary for the recommendation toast notifications shown
 * to visitors as contextual suggestions. Contains localized title, description,
 * and call-to-action label for each recommendation type:
 *
 * - **Internal pages** -- Projects, About Me, CV/Resume, and Link Hub
 * - **External profiles** -- GitHub, X/Twitter, Instagram, TikTok, Threads,
 *   and Bluesky
 *
 * Each entry follows a `{ title, description, action: { label } }` structure.
 * Translations are available in German (de-DE) and English (en-US).
 *
 * Dictionary key: `"recommendation"`
 *
 * @see {@link src/lib/components/RecommendationToasts.svelte} -- toast notification component consuming `useIntlayer("recommendation")`
 * @see {@link src/routes/[[locale=locale]]/+page.svelte} -- home page triggering recommendation toasts
 */
import { Locales, t, type Dictionary } from "intlayer";

const recommendationContent = {
  key: "recommendation",
  content: {
    projects: {
      title: t({
        [Locales.ENGLISH_UNITED_STATES]: "From Idea to Code",
        [Locales.GERMAN_GERMANY]: "Von der Idee zum Code"
      }),
      description: t({
        [Locales.ENGLISH_UNITED_STATES]: "See what happens when I can't sleep at night.",
        [Locales.GERMAN_GERMANY]: "Schau dir an, was passiert wenn ich nachts nicht schlafen kann."
      }),
      action: {
        label: t({
          [Locales.ENGLISH_UNITED_STATES]: "Explore Projects",
          [Locales.GERMAN_GERMANY]: "Projekte entdecken"
        }),
      },
    },
    aboutme: {
      title: t({
        [Locales.ENGLISH_UNITED_STATES]: "The Person Behind the Code",
        [Locales.GERMAN_GERMANY]: "Der Mensch hinter dem Code"
      }),
      description: t({
        [Locales.ENGLISH_UNITED_STATES]: "IT nerd by day, DJ by night – get to know me.",
        [Locales.GERMAN_GERMANY]: "IT-Nerd bei Tag, DJ bei Nacht – lern mich kennen."
      }),
      action: {
        label: t({
          [Locales.ENGLISH_UNITED_STATES]: "Learn More",
          [Locales.GERMAN_GERMANY]: "Mehr erfahren"
        }),
      },
    },
    cv: {
      title: t({
        [Locales.ENGLISH_UNITED_STATES]: "From School to TU Berlin",
        [Locales.GERMAN_GERMANY]: "Vom OSZ zur TU Berlin"
      }),
      description: t({
        [Locales.ENGLISH_UNITED_STATES]: "My journey through the IT world – all the stops.",
        [Locales.GERMAN_GERMANY]: "Mein Weg durch die IT-Welt – mit allen Stationen."
      }),
      action: {
        label: t({
          [Locales.ENGLISH_UNITED_STATES]: "View Resume",
          [Locales.GERMAN_GERMANY]: "Lebenslauf ansehen"
        }),
      },
    },
    linkhub: {
      title: t({
        [Locales.ENGLISH_UNITED_STATES]: "Find Me Everywhere",
        [Locales.GERMAN_GERMANY]: "Überall zu finden"
      }),
      description: t({
        [Locales.ENGLISH_UNITED_STATES]: "From Instagram to GitHub – here's where I hang out.",
        [Locales.GERMAN_GERMANY]: "Von Instagram bis GitHub – hier bin ich unterwegs."
      }),
      action: {
        label: t({
          [Locales.ENGLISH_UNITED_STATES]: "All Profiles",
          [Locales.GERMAN_GERMANY]: "Alle Profile"
        }),
      },
    },
    github: {
      title: t({
        [Locales.ENGLISH_UNITED_STATES]: "Where the Code Lives",
        [Locales.GERMAN_GERMANY]: "Wo der Code lebt"
      }),
      description: t({
        [Locales.ENGLISH_UNITED_STATES]: "@mcpeapsUnterstrichHD – Open source with passion.",
        [Locales.GERMAN_GERMANY]: "@mcpeapsUnterstrichHD – Open Source aus Leidenschaft."
      }),
      action: {
        label: t({
          [Locales.ENGLISH_UNITED_STATES]: "On GitHub",
          [Locales.GERMAN_GERMANY]: "Auf GitHub"
        }),
      },
    },
    twitter: {
      title: t({
        [Locales.ENGLISH_UNITED_STATES]: "My Unfiltered Thoughts",
        [Locales.GERMAN_GERMANY]: "Meine ungefilterten Gedanken"
      }),
      description: t({
        [Locales.ENGLISH_UNITED_STATES]: "@mcpeaps_HD – Tech talks and random thoughts.",
        [Locales.GERMAN_GERMANY]: "@mcpeaps_HD – Tech-Talks und Random Thoughts."
      }),
      action: {
        label: t({
          [Locales.ENGLISH_UNITED_STATES]: "On X",
          [Locales.GERMAN_GERMANY]: "Auf X"
        }),
      },
    },
    instagram: {
      title: t({
        [Locales.ENGLISH_UNITED_STATES]: "Between Code and Beats",
        [Locales.GERMAN_GERMANY]: "Zwischen Code und Beats"
      }),
      description: t({
        [Locales.ENGLISH_UNITED_STATES]: "@mcpeaps_hd – My daily life in pictures.",
        [Locales.GERMAN_GERMANY]: "@mcpeaps_hd – Mein Alltag in Bildern."
      }),
      action: {
        label: t({
          [Locales.ENGLISH_UNITED_STATES]: "On Instagram",
          [Locales.GERMAN_GERMANY]: "Auf Instagram"
        }),
      },
    },
    tiktok: {
      title: t({
        [Locales.ENGLISH_UNITED_STATES]: "When It Has to Be Quick",
        [Locales.GERMAN_GERMANY]: "Wenn's mal schnell gehen muss"
      }),
      description: t({
        [Locales.ENGLISH_UNITED_STATES]: "@mcpeaps_hd – Content in 60 seconds.",
        [Locales.GERMAN_GERMANY]: "@mcpeaps_hd – Content in 60 Sekunden."
      }),
      action: {
        label: t({
          [Locales.ENGLISH_UNITED_STATES]: "On TikTok",
          [Locales.GERMAN_GERMANY]: "Auf TikTok"
        }),
      },
    },
    threads: {
      title: t({
        [Locales.ENGLISH_UNITED_STATES]: "More Than 280 Characters",
        [Locales.GERMAN_GERMANY]: "Mehr als 280 Zeichen"
      }),
      description: t({
        [Locales.ENGLISH_UNITED_STATES]: "@mcpeaps_hd – When a tweet isn't enough.",
        [Locales.GERMAN_GERMANY]: "@mcpeaps_hd – Wenn ein Tweet nicht reicht."
      }),
      action: {
        label: t({
          [Locales.ENGLISH_UNITED_STATES]: "On Threads",
          [Locales.GERMAN_GERMANY]: "Auf Threads"
        }),
      },
    },
    bluesky: {
      title: t({
        [Locales.ENGLISH_UNITED_STATES]: "The New Social Media",
        [Locales.GERMAN_GERMANY]: "Das neue Social Media"
      }),
      description: t({
        [Locales.ENGLISH_UNITED_STATES]: "@mcpeapsunterstrichhd.dev – Decentralized and free.",
        [Locales.GERMAN_GERMANY]: "@mcpeapsunterstrichhd.dev – Dezentral und frei."
      }),
      action: {
        label: t({
          [Locales.ENGLISH_UNITED_STATES]: "On Bluesky",
          [Locales.GERMAN_GERMANY]: "Auf Bluesky"
        }),
      },
    },
  }
} satisfies Dictionary;

export default recommendationContent;
