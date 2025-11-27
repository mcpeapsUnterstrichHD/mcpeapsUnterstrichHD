import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  trailingSlash: false,
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
export default withNextIntl(nextConfig);
