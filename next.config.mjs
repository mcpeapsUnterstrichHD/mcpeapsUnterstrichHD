/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: false,
  httpAgentOptions: {
    keepAlive: true,
  },
  onDemandEntries: {
    maxInactiveAge: 24 * 60 * 60 * 1000,
    pagesBufferLength: 16,
  },
  devIndicators: {
    buildActivityPosition: 'bottom-right',
    buildActivity: true,
  },
  reactStrictMode: false,
  experimental: {
    taint: true,
    typedRoutes: false,
    ppr: true,
    //reactCompiler: true,
    /*turbo: {
      moduleIdStrategy: 'deterministic',
      resolveExtensions: [
        '.md',
        '.tsx',
        '.ts',
        '.jsx',
        '.js',
        '.mjs',
        '.json',
      ],
    },*/
  },
  images: {
    unoptimized: true,
    domains: [
      'cdn.idx.dev',
      'mahd.comboompunksucht.app',
      'mahd-dev.comboompunksucht.app',
    ],
  },
};

export default nextConfig;