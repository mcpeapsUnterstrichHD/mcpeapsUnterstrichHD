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
        customPages: [
          'https://mcpeapsunterstrichhd.github.io/mcpeapsUnterstrichHD/',
          'https://mcpeapsunterstrichhd.github.io/mcpeapsUnterstrichHD/cv/',
          'https://linktr.ee/mcpeaps_hd'
        ],
        changefreq: 'daily',
        lastmod: new Date(),
        priority: 0.9,
      }), tailwind()]
});