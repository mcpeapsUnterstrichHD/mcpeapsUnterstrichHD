/**
 * @module project-data
 * @description Portfolio project data for the projects showcase page.
 * Contains metadata for all projects displayed on the site including images,
 * badges, GitHub links, and pinned status. Project titles and descriptions
 * are stored in Intlayer dictionaries (`Projects.content.ts`) and resolved
 * via the project's `id` which maps to the dictionary key.
 *
 * @see `src/lib/content/Projects.content.ts` — Localized project titles/descriptions
 * @see `src/routes/[[locale=locale]]/projects/+page.svelte` — Projects page
 * @see {@link module:cv-data} — Related CV data module
 */

/**
 * Represents a single portfolio project entry.
 *
 * @property id - Unique identifier matching the Intlayer dictionary key
 *               (e.g. `"portfolio"`, `"simplesql"`) used to resolve
 *               localized title and description via `t($projectsDict, id + ".title")`
 * @property image - Path to the project screenshot/logo (relative to `/static/`)
 * @property bgColor - Optional Tailwind background class for the image container
 *                     (e.g. `"bg-white"` for logos on transparent backgrounds)
 * @property badges - Array of short uppercase labels displayed as chips
 *                    (e.g. `["FOSS", "WEB", "NEW"]`)
 * @property link - URL to the project's GitHub repository or external page
 * @property pinned - Whether this project appears in the "Pinned Projects" section
 *                    on the home and about pages
 */
export interface ProjectItem {
  id: string;
  image: string;
  bgColor: string;
  badges: string[];
  link: string;
  pinned: boolean;
}

/**
 * All portfolio project entries.
 * Projects are displayed alphabetically on the projects page,
 * with pinned projects highlighted first.
 */
export const projectsData: ProjectItem[] = [
  {
    id: 'portfolio',
    image: '/pictures/projects/my_Portfolio.png',
    bgColor: '',
    badges: ['FOSS', 'WEB', 'NEW'],
    link: 'https://github.com/mcpeapsUnterstrichHD/mcpeapsUnterstrichHD',
    pinned: true
  },
  {
    id: 'simplesql',
    image: '/pictures/projects/ssqlr.png',
    bgColor: '',
    badges: ['FOSS', 'RUST', 'SQL'],
    link: 'https://github.com/comboomPunkTsucht/simplesql',
    pinned: true
  },
  {
    id: 'localServices',
    image: '/pictures/projects/searxng.png',
    bgColor: '',
    badges: ['FOSS', 'WEB', 'NEW', 'SEARCH ENGINE', 'DOCKER'],
    link: 'https://github.com/mcpeapsUnterstrichHD/local-services',
    pinned: true
  },
  {
    id: 'schulRepo',
    image: '/pictures/projects/OSZimt-Logo-l.png',
    bgColor: 'bg-white',
    badges: ['FOSS', 'SCHOOL'],
    link: 'https://github.com/comboomPunkTsucht/OSZIMT-repo-ITA12_aps',
    pinned: false
  },
  {
    id: 'klassenWebsite',
    image: '/pictures/projects/OSZimt-Logo-l.png',
    bgColor: 'bg-white',
    badges: ['FOSS', 'SCHOOL', 'WEB', 'MARKDOWN', 'WIKI'],
    link: 'https://github.com/comboomPunkTsucht/OSZ_ITA12_Doc',
    pinned: false
  },
  {
    id: 'klassenApp',
    image: '/pictures/projects/Klassen_App_Icon_iOS_macOS_iPadOS.png',
    bgColor: '',
    badges: ['FOSS', 'SCHOOL', 'APP', 'iOS', 'SWIFT', 'SWIFTUI', 'HUB'],
    link: 'https://github.com/comboomPunkTsucht/ITA-12_App',
    pinned: false
  },
  {
    id: 'simpleSqlRunner',
    image: '/pictures/projects/ssqlr.png',
    bgColor: '',
    badges: ['FOSS', 'SCHOOL', 'JAVA', 'SQL'],
    link: 'https://github.com/comboomPunkTsucht/Simple-SQL-Runner',
    pinned: false
  },
  {
    id: 'dotfilesMacos',
    image: '/pictures/logo.png',
    bgColor: '',
    badges: ['FOSS', 'WEB', 'NEW', 'Configuration', 'DOTFILES', 'MACOS'],
    link: 'https://github.com/mcpeapsUnterstrichHD/dotfiles-macos',
    pinned: false
  },
  {
    id: 'nixConfig',
    image: '/pictures/logo.png',
    bgColor: '',
    badges: ['FOSS', 'WEB', 'NEW', 'Configuration', 'DOTFILES', 'Linux', 'NIXOS'],
    link: 'https://github.com/mcpeapsUnterstrichHD/nix-config',
    pinned: false
  },
  {
    id: 'dotfilesLinux',
    image: '/pictures/logo.png',
    bgColor: '',
    badges: ['FOSS', 'WEB', 'NEW', 'Configuration', 'DOTFILES', 'Linux'],
    link: 'https://github.com/mcpeapsUnterstrichHD/dotfiles-linux',
    pinned: false
  },
  {
    id: 'cbpsWebsite',
    image: '/pictures/cbps_logo.png',
    bgColor: '',
    badges: ['FOSS', 'WEB', 'MARKDOWN', 'WIKI'],
    link: 'https://github.com/comboomPunkTsucht/comboom.sucht-BLOG',
    pinned: false
  },
  {
    id: 'cbpsApp',
    image: '/pictures/cbps_logo.png',
    bgColor: '',
    badges: ['FOSS', 'APP', 'iOS', 'SWIFT', 'SWIFTUI', 'HUB'],
    link: 'https://github.com/comboomPunkTsucht/comboomPunkTsucht-IOS-macOS-App',
    pinned: false
  },
  {
    id: 'uniRepo',
    image: '/pictures/projects/LogoDerTUBerlin2020.svg',
    bgColor: 'bg-white',
    badges: ['FOSS', 'UNIVERSITY'],
    link: 'https://github.com/comboomPunkTsucht/TU-Berlin-repo-aps',
    pinned: false
  },
  {
    id: 'liveWallpaper',
    image: '/pictures/projects/live-wallpaper.png',
    bgColor: '',
    badges: ['NATIVE', 'WASM', 'C++', 'RAYLIB'],
    link: 'https://github.com/comboomPunkTsucht/comboom_punkt_sucht_native_wallpaper',
    pinned: false
  },
]

/**
 * Returns only the projects marked as pinned.
 * Used on the home page and about page to show featured projects.
 *
 * @returns Array of {@link ProjectItem} where `pinned === true`
 */
export function getPinnedProjectsData() {
  return projectsData.filter(p => p.pinned);
}

/**
 * Returns all projects (pinned and non-pinned).
 * Used on the full projects page.
 *
 * @returns Complete array of all {@link ProjectItem} entries
 */
export function getAllProjectsData() {
  return projectsData;
}
