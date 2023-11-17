import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import prefetch from '@astrojs/prefetch';
import react from '@astrojs/react';
import cookieconsent from "@jop-software/astro-cookieconsent";

import netlify from "@astrojs/netlify/functions";

// https://astro.build/config
export default defineConfig({
  site: 'https://mcpeapsunterstrichhd.github.io',
  base: '/mcpeapsUnterstrichHD',
  integrations: [mdx(), sitemap({
    customPages: ['https://linktr.ee/mcpeaps_hd'],
    changefreq: 'daily',
    lastmod: new Date(),
    priority: 0.9
  }), tailwind(), prefetch({
    intentSelector: ["a[href^='/mcpeapsUnterstrichHD']", "a[href^='/mcpeapsUnterstrichHD/impressum']", "a[href^='/mcpeapsUnterstrichHD/lebenslauf']", "a[href^='/mcpeapsUnterstrichHD/projekte']"]
  }), react(), cookieconsent()],
  output: "hybrid",
  adapter: netlify()
});