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
  //site: 'https://mcpeapsunterstrichhd.netlify.app',
  //base: '/mcpeapsUnterstrichHD',
  integrations: [mdx(), sitemap({
    customPages: ['https://linktr.ee/mcpeaps_hd'],
    changefreq: 'daily',
    lastmod: new Date(),
    priority: 0.9
  }), tailwind(), prefetch({
    intentSelector: ["a[href^='/']", "a[href^='/impressum']", "a[href^='/lebenslauf']", "a[href^='/projekte']"]
  }), react(), cookieconsent()],
  output: "server",//"hybrid",
  adapter: netlify()
});