import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "mcpeaps_HD/Fabian Aps's Portfolio/Impressum",
    short_name: "MAHD/Fabian Aps's Portfolio/Impressum",
    description: 'Portfolio/Impressum of Fabian Aps/mcpeaps_HD',
    start_url: 'https://mahd.comboompunksucht.app/',
    display: 'standalone',
    display_override: ['standalone'],
    background_color: '#000000',
    theme_color: '#000000',
    lang: 'de-DE',
    prefer_related_applications: false,
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}