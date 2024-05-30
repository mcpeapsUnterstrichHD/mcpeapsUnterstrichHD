import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Fabian Aps',
    short_name: 'Fabian Aps',
    description: 'my own portfolio/impressum website',
    start_url: '/',
    display: 'standalone',
    display_override: ["standalone", "window-controls-overlay"],
    background_color: '#000000',
    theme_color: '#010101',
    lang: 'de-DE',
    prefer_related_applications: false,
    icons: [
      {
        src: 'favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: 'icon.png',
        sizes: '3000x3000 48x48 72x72 96x96 128x128 256x256 512x512 1024x1024 2048x2048 4096x4096 8192x8192 192x192',
        type: 'image/png',
        purpose: "maskable",
      },
      {
        src: 'icon.png',
        sizes: '3000x3000 48x48 72x72 96x96 128x128 256x256 512x512 1024x1024 2048x2048 4096x4096 8192x8192 192x192',
        type: 'image/png',
        purpose: "any",
      },
      {
        src: 'icon.png',
        sizes: '3000x3000 48x48 72x72 96x96 128x128 256x256 512x512 1024x1024 2048x2048 4096x4096 8192x8192 192x192',
        type: 'image/png',
      },
      {
        src: 'pictures/logo.png',
        sizes: '3000x3000 48x48 72x72 96x96 128x128 256x256 512x512 1024x1024 2048x2048 4096x4096 8192x8192 192x192',
        type: 'image/png',
        purpose: "maskable",
      },
      {
        src: 'pictures/logo.png',
        sizes: '3000x3000 48x48 72x72 96x96 128x128 256x256 512x512 1024x1024 2048x2048 4096x4096 8192x8192 192x192',
        type: 'image/png',
        purpose: "any",
      },
      {
        src: 'pictures/logo.png',
        sizes: '3000x3000 48x48 72x72 96x96 128x128 256x256 512x512 1024x1024 2048x2048 4096x4096 8192x8192 192x192',
        type: 'image/png',
      },
      {
        src: 'pictures/logo.svg',
        sizes: 'any',
      }
    ],
  }
}
