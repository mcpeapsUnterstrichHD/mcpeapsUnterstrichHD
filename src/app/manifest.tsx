import type { MetadataRoute } from "next";
import { defaultLocale } from "@/lib/lang";

// Note: manifest.tsx runs on the server and cannot use React hooks like useLocale()
// Using a default locale for the manifest

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Fabian Aps",
    short_name: "Fabian Aps",
    description: "my own portfolio/impressum website",
    start_url: '/',
    display: "standalone",
    display_override: ["standalone", "window-controls-overlay"],
    background_color: "#2E3440",
    theme_color: "#2E3440",
    lang: defaultLocale,
    id: "dev.mcpeapsUnterstrichHD.mcpeapsUnterstrichHD",
    prefer_related_applications: false,
    icons: [
      {
        src: "/pictures/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/pictures/logo192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/pictures/logo512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/pictures/logo_maskable_icon.png",
        sizes: "1024x1024",
        type: "image/png",
        purpose: "maskable"
      },
    ],
    screenshots: [
      {
        src: "/pictures/logo.png",
        sizes: "3000x3000",
        type: "image/png",
        form_factor: "wide",
        label: "Logo of mcpeaps_HD",
      },
      {
        src: "public/pictures/logo.png",
        sizes: "3000x3000",
        type: "image/png",
        form_factor: "narrow",
        label: "Logo of mcpeaps_HD",
      },
    ],
  };
}
