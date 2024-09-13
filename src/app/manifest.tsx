import { MetadataRoute } from "next";

type Screenshot = {
  src: string;
  type?: string;
  sizes?: string;
};

interface CustomScreenshot extends Screenshot {
  form_factor?: string; // Optional form factor property
  label?: string; // Optional label property
}
interface MyManifest extends MetadataRoute.Manifest {
  screenshots: CustomScreenshot[];
}

export default function manifest(): MyManifest {
  return {
    name: "Fabian Aps",
    short_name: "Fabian Aps",
    description: "my own portfolio/impressum website",
    start_url: "/",
    display: "standalone",
    display_override: ["standalone", "window-controls-overlay"],
    background_color: "#000000",
    theme_color: "#010101",
    lang: "de-DE",
    prefer_related_applications: false,
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/pictures/logo.PNG",
        sizes: "any",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/pictures/logo.PNG",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/pictures/logo.PNG",
        sizes: "any",
        type: "image/png",
      },
    ],
    screenshots: [
      {
        src: "/pictures/logo_3000x3000.png",
        sizes: "3000x3000",
        type: "image/png",
        form_factor: "wide",
        label: "Logo of mcpeaps_HD",
      },
      {
        src: "/pictures/logo_3000x3000.png",
        sizes: "3000x3000",
        type: "image/png",
        form_factor: "narrow",
        label: "Logo of mcpeaps_HD",
      },
    ],
  };
}
