export interface ProjectItem {
  id: string; // The key used in Intlayer dictionary (e.g., 'portfolio', 'simplesql')
  image: string;
  bgColor: string;
  badges: string[];
  link: string;
  pinned: boolean;
}

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

export function getPinnedProjectsData() {
  return projectsData.filter(p => p.pinned);
}

export function getAllProjectsData() {
  return projectsData;
}
