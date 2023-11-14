import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import prefetch from '@astrojs/prefetch';
//import bootstrap from 'bootstrap';


// https://astro.build/config
export default defineConfig({
  site: 'https:///mcpeapsunterstrichhd.github.io',
  base: '/mcpeapsUnterstrichHD',
  integrations: [mdx(), sitemap({
        customPages: [
          'https://linktr.ee/mcpeaps_hd'
        ],
        changefreq: 'daily',
        lastmod: new Date(),
        priority: 0.9,
      }), tailwind(),prefetch({
        intentSelector: ["a[href^='/mcpeapsUnterstrichHD']", "a[href^='/mcpeapsUnterstrichHD/lebenslauf']", "a[href^='/mcpeapsUnterstrichHD/projekte']"],
      })]
});