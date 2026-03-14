import type { IconResource } from "vite-plugin-pwa";
import type { RequestHandler } from "./$types";

const sizes = [
  "32x32",
  "40x40",
  "48x48",
  "58x58",
  "60x60",
  "64x64",
  "76x76",
  "80x80",
  "87x87",
  "120x120",
  "152x152",
  "167x167",
  "180x180",
  "192x192",
  "512x512",
  "1024x1024",
];

export const GET: RequestHandler = () => {
  const icons: IconResource[] = [];

  for (const size of sizes) {
    icons.push(
      {
        src: `/pictures/apple-icon-${size}.png`,
        sizes: size,
        type: "image/png",
        purpose: "any",
      },
      {
        src: `/pictures/transparent-icon-${size}.png`,
        sizes: size,
        type: "image/png",
        purpose: "any",
      },
      {
        src: `/pictures/maskable-icon-${size}.png`,
        sizes: size,
        type: "image/png",
        purpose: "maskable",
      },
    );
    if (size !== "512x512" && size !== "1024x1024") {
      icons.push({
        src: `/pictures/transparent-favicon-${size}.ico`,
        sizes: size,
        type: "image/x-icon",
        purpose: "any",
      });
    }
  }
  const manifest = {
    short_name: "Fabian Aps",
    name: "Fabian Aps - Portfolio/Impressum",
    start_url: "/",
    scope: "/",
    display: "standalone",
    display_override: ["standalone", "window-controls-overlay"],
    background_color: "#2E3440",
    theme_color: "#2E3440",
    lang: "de-DE",
    id: "dev.mcpeapsUnterstrichHD.mcpeapsUnterstrichHD",
    icons: icons,
    screenshots: [
      {
        src: "/pictures/logo.png",
        sizes: "3000x3000",
        type: "image/png",
        form_factor: "wide",
        label: "Logo of mcpeaps_HD",
      },
      {
        src: "/pictures/logo.png",
        sizes: "3000x3000",
        type: "image/png",
        form_factor: "narrow",
        label: "Logo of mcpeaps_HD",
      },
    ],
  };

  return new Response(JSON.stringify(manifest), {
    headers: {
      "Content-Type": "application/manifest+json",
      "Cache-Control": "public, max-age=3600", // Optional: Caching für Performance
    },
  });
};
