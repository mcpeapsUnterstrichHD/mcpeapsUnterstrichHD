import { MetadataRoute } from 'next'
import sitemap from './sitemap'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "mcpeaps_HD/Fabian Aps's Portfolio/Impressum",
    short_name: "MAHD/Fabian Aps's Portfolio/Impressum",
    description: 'Portfolio/Impressum of Fabian Aps/mcpeaps_HD',
    start_url: '/',
    display: 'standalone',
    background_color: 'bg-primary',
    theme_color: 'bg-primary',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}