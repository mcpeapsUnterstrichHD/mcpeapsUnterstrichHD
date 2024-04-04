import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fabian Aps Portfolio/Impressum',
    short_name: 'Fabian Aps Portfolio/Impressum',
    description: 'my own portfolio/impressum website',
    start_url: 'https://mahd.comboompunksucht.app/',
    //start_url:'/',
    display: 'minimal-ui',
    display_override: [
      'minimal-ui',
      'standalone',
      "window-controls-overlay"
    ],
    background_color: '#000000',
    theme_color: '#010101',
    lang: 'de-DE',
    prefer_related_applications: false,
    icons: [
      {
        src: 'https://github.com/mcpeapsUnterstrichHD.png',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: 'https://github.com/mcpeapsUnterstrichHD.png',
        sizes: '3000x3000',
        type: 'image/png',
        purpose: "maskable",
      },
      {
        src: 'https://github.com/mcpeapsUnterstrichHD.png',
        sizes: '3000x3000',
        type: 'image/png',
        purpose: "any",
      }
    ],
  }
}
