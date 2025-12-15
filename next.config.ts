import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  trailingSlash: true,
  cacheComponents: false,
  cacheMaxMemorySize: 10240,
  generateBuildId: async () => {
    // This could be anything, using the latest git hash
    return process.env.GIT_HASH ?? `build-${Date.now()}`
  },
  images: {
    qualities: [25, 50, 75, 100],
    formats: ['image/avif', 'image/webp'],
    unoptimized: false,
    minimumCacheTTL: 3600, // 1h
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
    {
    protocol: "https",
    hostname: "cdn.idx.dev",
    pathname: "/**"
    }
    ],
  },
  logging: process.env.NODE_ENV === "development" ? {
    fetches: {
      fullUrl: true,
      hmrRefreshes: true,
    },
    incomingRequests: true,
  } : false,
  experimental: {
    viewTransition: true,
  },
  compiler: {
    styledComponents: {
      minify: true,
      ssr: false,
      cssProp: true,
      pure: true
    },
  },

};

const withNextIntl = createNextIntlPlugin({
  experimental: {

    messages: {
      // Relative path to the directory
      path: '@/assets/lang',

      // Automatically detects locales based on `path`
      locales: 'infer',

      // Either 'json' or 'po'
      format: 'json'
    }
    // ...
  }
});
export default withNextIntl(nextConfig) as NextConfig;
