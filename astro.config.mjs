import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
//import bootstrap from 'bootstrap';


// https://astro.build/config
export default defineConfig({
  site: 'https:///mcpeapsunterstrichhd.github.io',
  base: '/mcpeapsUnterstrichHD',
  integrations: [mdx(), sitemap({
        changefreq: 'daily',
        lastmod: new Date(),
        priority: 0.9,
      }), tailwind()]
});