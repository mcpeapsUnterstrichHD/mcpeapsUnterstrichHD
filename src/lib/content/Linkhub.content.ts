/**
 * @module Linkhub.content
 *
 * @description
 * Intlayer content dictionary for the Link Hub (link-in-bio) page. Contains a
 * top-level description and three categorized sections of external links:
 *
 * - **socialMedia** -- Section title/description and individual entries for
 *   Instagram, TikTok, Threads, Bluesky, X/Twitter, Discord, and YouTube,
 *   each with a title, handle heading, and description
 * - **websites** -- Section title/description and entries for the portfolio
 *   website, comboom.sucht community site, and the comboom.sucht blog
 * - **other** -- Section title/description and entries for GitHub, a Spotify
 *   playlist, and the latest music release
 *
 * Translations are available in German (de-DE) and English (en-US).
 *
 * Dictionary key: `"linkhub"`
 *
 * @see {@link src/routes/[[locale=locale]]/linkhub/+page.svelte} -- link hub page consuming `useIntlayer("linkhub")`
 */
import { Locales, t, type Dictionary } from "intlayer";

const linkhubContent = {
  key: "linkhub",
  content: {
    description: t({
      [Locales.ENGLISH_UNITED_STATES]: "Code, beats, or random content – find me everywhere.",
      [Locales.GERMAN_GERMANY]: "Ob Code, Beats oder Random Content – hier findest du mich überall."
    }),
    sections: {
      socialMedia: {
        title: t({
          [Locales.ENGLISH_UNITED_STATES]: "Social Media",
          [Locales.GERMAN_GERMANY]: "Social Media"
        }),
        description: t({
          [Locales.ENGLISH_UNITED_STATES]: "The platforms where I'm active.",
          [Locales.GERMAN_GERMANY]: "Die Plattformen, auf denen ich aktiv bin."
        }),
        instagram: {
          title: t({
            [Locales.ENGLISH_UNITED_STATES]: "Instagram",
            [Locales.GERMAN_GERMANY]: "Instagram"
          }),
          headding: t({
            [Locales.ENGLISH_UNITED_STATES]: "@mcpeaps_hd",
            [Locales.GERMAN_GERMANY]: "@mcpeaps_hd"
          }),
          description: t({
            [Locales.ENGLISH_UNITED_STATES]: "Stories from daily life, events, and everything else.",
            [Locales.GERMAN_GERMANY]: "Storys aus dem Alltag, Events und der ganze Rest."
          }),
        },
        tiktok: {
          title: t({
            [Locales.ENGLISH_UNITED_STATES]: "TikTok",
            [Locales.GERMAN_GERMANY]: "TikTok"
          }),
          headding: t({
            [Locales.ENGLISH_UNITED_STATES]: "@mcpeaps_hd",
            [Locales.GERMAN_GERMANY]: "@mcpeaps_hd"
          }),
          description: t({
            [Locales.ENGLISH_UNITED_STATES]: "When I want to show something creative in under a minute.",
            [Locales.GERMAN_GERMANY]: "Wenn ich mal was Kreatives in unter einer Minute zeigen will."
          }),
        },
        threads: {
          title: t({
            [Locales.ENGLISH_UNITED_STATES]: "Threads",
            [Locales.GERMAN_GERMANY]: "Threads"
          }),
          headding: t({
            [Locales.ENGLISH_UNITED_STATES]: "@mcpeaps_hd",
            [Locales.GERMAN_GERMANY]: "@mcpeaps_hd"
          }),
          description: t({
            [Locales.ENGLISH_UNITED_STATES]: "My thoughts when Instagram isn't enough.",
            [Locales.GERMAN_GERMANY]: "Meine Gedanken, wenn Instagram nicht reicht."
          }),
        },
        bsky: {
          title: t({
            [Locales.ENGLISH_UNITED_STATES]: "Bluesky",
            [Locales.GERMAN_GERMANY]: "Bluesky"
          }),
          headding: t({
            [Locales.ENGLISH_UNITED_STATES]: "@mcpeapsunterstrichhd.dev",
            [Locales.GERMAN_GERMANY]: "@mcpeapsunterstrichhd.dev"
          }),
          description: t({
            [Locales.ENGLISH_UNITED_STATES]: "For everyone looking for a Twitter alternative.",
            [Locales.GERMAN_GERMANY]: "Für alle, die Twitter-Alternative suchen."
          }),
        },
        twitter: {
          title: t({
            [Locales.ENGLISH_UNITED_STATES]: "X/Twitter",
            [Locales.GERMAN_GERMANY]: "X/Twitter"
          }),
          headding: t({
            [Locales.ENGLISH_UNITED_STATES]: "@mcpeaps_HD",
            [Locales.GERMAN_GERMANY]: "@mcpeaps_HD"
          }),
          description: t({
            [Locales.ENGLISH_UNITED_STATES]: "Tech discussions and the occasional rant.",
            [Locales.GERMAN_GERMANY]: "Tech-Diskussionen und der gelegentliche Rant."
          }),
        },
        discord: {
          title: t({
            [Locales.ENGLISH_UNITED_STATES]: "Discord",
            [Locales.GERMAN_GERMANY]: "Discord"
          }),
          headding: t({
            [Locales.ENGLISH_UNITED_STATES]: "Community Server",
            [Locales.GERMAN_GERMANY]: "Community Server"
          }),
          description: t({
            [Locales.ENGLISH_UNITED_STATES]: "Reach me directly here – or just hang out.",
            [Locales.GERMAN_GERMANY]: "Hier kann man mich direkt erreichen – oder einfach chillen."
          }),
        },
        youtube: {
          title: t({
            [Locales.ENGLISH_UNITED_STATES]: "YouTube",
            [Locales.GERMAN_GERMANY]: "YouTube"
          }),
          headding: t({
            [Locales.ENGLISH_UNITED_STATES]: "mcpeaps_HD",
            [Locales.GERMAN_GERMANY]: "mcpeaps_HD"
          }),
          description: t({
            [Locales.ENGLISH_UNITED_STATES]: "Tutorials, music releases, and whatever else comes to mind.",
            [Locales.GERMAN_GERMANY]: "Tutorials, Musik-Releases und was mir sonst einfällt."
          }),
        },
      },
      websites: {
        title: t({
          [Locales.ENGLISH_UNITED_STATES]: "Websites",
          [Locales.GERMAN_GERMANY]: "Websites"
        }),
        description: t({
          [Locales.ENGLISH_UNITED_STATES]: "Projects that live on the web.",
          [Locales.GERMAN_GERMANY]: "Projekte, die im Web leben."
        }),
        myWebsite: {
          title: t({
            [Locales.ENGLISH_UNITED_STATES]: "This Website",
            [Locales.GERMAN_GERMANY]: "Diese Website"
          }),
          headding: t({
            [Locales.ENGLISH_UNITED_STATES]: "mcpeapsunterstrichhd.dev",
            [Locales.GERMAN_GERMANY]: "mcpeapsunterstrichhd.dev"
          }),
          description: t({
            [Locales.ENGLISH_UNITED_STATES]: "You're already here – but feel free to look around.",
            [Locales.GERMAN_GERMANY]: "Du bist schon hier – aber schau dich ruhig weiter um."
          }),
        },
        cbps: {
          title: t({
            [Locales.ENGLISH_UNITED_STATES]: "comboom.sucht",
            [Locales.GERMAN_GERMANY]: "comboom.sucht"
          }),
          headding: t({
            [Locales.ENGLISH_UNITED_STATES]: "The Crew Site",
            [Locales.GERMAN_GERMANY]: "Die Crew-Seite"
          }),
          description: t({
            [Locales.ENGLISH_UNITED_STATES]: "My friend group's website – chaotic, but made with love.",
            [Locales.GERMAN_GERMANY]: "Die Website meiner Freundesgruppe – chaotisch, aber mit Liebe gemacht."
          }),
        },
        blogCBPS: {
          title: t({
            [Locales.ENGLISH_UNITED_STATES]: "comboom.sucht Blog",
            [Locales.GERMAN_GERMANY]: "comboom.sucht Blog"
          }),
          headding: t({
            [Locales.ENGLISH_UNITED_STATES]: "News & Stories",
            [Locales.GERMAN_GERMANY]: "News & Stories"
          }),
          description: t({
            [Locales.ENGLISH_UNITED_STATES]: "Updates from the crew's life.",
            [Locales.GERMAN_GERMANY]: "Updates aus dem Leben der Crew."
          }),
        },
      },
      other: {
        title: t({
          [Locales.ENGLISH_UNITED_STATES]: "More From Me",
          [Locales.GERMAN_GERMANY]: "Mehr von mir"
        }),
        description: t({
          [Locales.ENGLISH_UNITED_STATES]: "What doesn't fit in the other categories.",
          [Locales.GERMAN_GERMANY]: "Was nicht in die anderen Kategorien passt."
        }),
        github: {
          title: t({
            [Locales.ENGLISH_UNITED_STATES]: "GitHub",
            [Locales.GERMAN_GERMANY]: "GitHub"
          }),
          headding: t({
            [Locales.ENGLISH_UNITED_STATES]: "@mcpeapsUnterstrichHD",
            [Locales.GERMAN_GERMANY]: "@mcpeapsUnterstrichHD"
          }),
          description: t({
            [Locales.ENGLISH_UNITED_STATES]: "Where my code lives – open source and personal projects.",
            [Locales.GERMAN_GERMANY]: "Hier lebt mein Code – Open Source und persönliche Projekte."
          }),
        },
        playlist: {
          title: t({
            [Locales.ENGLISH_UNITED_STATES]: "My Playlist",
            [Locales.GERMAN_GERMANY]: "Meine Playlist"
          }),
          headding: t({
            [Locales.ENGLISH_UNITED_STATES]: "What I'm Listening To",
            [Locales.GERMAN_GERMANY]: "Was ich so höre"
          }),
          description: t({
            [Locales.ENGLISH_UNITED_STATES]: "From techno to indie – my current soundtrack.",
            [Locales.GERMAN_GERMANY]: "Von Techno bis Indie – mein aktueller Soundtrack."
          }),
        },
        song: {
          title: t({
            [Locales.ENGLISH_UNITED_STATES]: "My Song",
            [Locales.GERMAN_GERMANY]: "Mein Song"
          }),
          headding: t({
            [Locales.ENGLISH_UNITED_STATES]: "Festival Dream",
            [Locales.GERMAN_GERMANY]: "Festival Dream"
          }),
          description: t({
            [Locales.ENGLISH_UNITED_STATES]: "My latest track – give it a listen!",
            [Locales.GERMAN_GERMANY]: "Mein neuester Track – hör mal rein!"
          }),
        },
      },
    },
  }
} satisfies Dictionary;

export default linkhubContent;
