import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import cookieconsent from "@jop-software/astro-cookieconsent";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https:///mcpeapsunterstrichhd.github.io',
  base: '/mcpeapsUnterstrichHD',
  integrations: [mdx(), sitemap(), tailwind(), cookieconsent({
    // ...
    gui_options: {
      consent_modal: {
        layout: 'bar',
        // box/cloud/bar
        position: 'bottom center',
        // bottom/middle/top + left/right/center
        transition: 'slide',
        // zoom/slide
        swap_buttons: false // enable to invert buttons
      },

      settings_modal: {
        layout: 'bar',
        // box/bar
        // position: 'left',           // left/right
        transition: 'slide' // zoom/slide
      }
    }
    // ...
  }), react()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});