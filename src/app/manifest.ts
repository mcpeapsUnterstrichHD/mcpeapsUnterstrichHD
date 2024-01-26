import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fabian Aps Portfolio/Impressum',
    short_name: 'Fabian Aps Portfolio/Impressum',
    description: 'my own portfolio/impressum website',
    //start_url: 'https://mahd.comboompunksucht.app/',
    start_url:'/',
    display: 'standalone',
    display_override: [
      'standalone',
    ],
    background_color: '#000000',
    theme_color: '#010101',
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