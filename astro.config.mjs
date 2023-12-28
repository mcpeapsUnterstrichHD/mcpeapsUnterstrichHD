import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import prefetch from '@astrojs/prefetch';
import react from '@astrojs/react';
import cookieconsent from "@jop-software/astro-cookieconsent";
import AutoImport from 'astro-auto-import';
import netlify from "@astrojs/netlify";
import react_vertical_timeline_component from 'react-vertical-timeline-component';
//import netlify from '@astrojs/netlify/edge-functions';

// https://astro.build/config
export default defineConfig({
  site: 'https://mahd.netlify.app',
  //base: '/mcpeapsUnterstrichHD',
  integrations: [mdx(), sitemap({
    customPages: ['https://linktr.ee/mcpeaps_hd'],
    changefreq: 'daily',
    lastmod: new Date(),
    priority: 0.9
  }), tailwind(), prefetch({
    intentSelector: ["a[href^='/']", "a[href^='/impressum']", "a[href^='/lebenslauf']", "a[href^='/projekte']"]
  }), react(), cookieconsent(), AutoImport({imports: ['./src/components']}),mdx()],
  output: "server",//"hybrid",
  adapter: netlify(),
  renderer: {
    default: "react",
    // Wenn Sie React verwenden möchten, ändern Sie den Wert zu "react"
    // default: "react"
  },
});