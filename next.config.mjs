const withPWA = require("@ducanh2912/next-pwa").default({
    cacheOnFrontEndNav: true,
    aggressiveFrontEndNavCaching: true,
    reloadOnOnline: true,
    swcMinify: true,
    dest: "public",
    fallbacks: {
        image: "https://github.com/mcpeapsUnterstrichHD.png",
        document: "/offline",
        font: '/static/media/*.ttf',
        // audio: ...,
        // video: ...,
      },
    workboxOptions: {
      disableDevLogs: true,
    },
    // ... other options you like
  });

/** @type {import('next').NextConfig} */
const nextConfig = {}

export default nextConfig;
