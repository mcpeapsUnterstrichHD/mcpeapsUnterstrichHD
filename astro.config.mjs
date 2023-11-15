import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import prefetch from '@astrojs/prefetch';
import react from '@astrojs/react';

import cookieconsent from "@jop-software/astro-cookieconsent";

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
  }), react(), cookieconsent({
    // ...
    gui_options: {
        consent_modal: {
            layout: 'cloud',               // box/cloud/bar
            position: 'bottom center',     // bottom/middle/top + left/right/center
            transition: 'slide',           // zoom/slide
            swap_buttons: false            // enable to invert buttons
        },
        settings_modal: {
            layout: 'box',                 // box/bar
            // position: 'left',           // left/right
            transition: 'slide'            // zoom/slide
        }
    },

    categories: {
      necessary: {
          enabled: true,  // this category is enabled by default
          readOnly: true  // this category cannot be disabled
      },
      analytics: {}
  },

  language: {
      default: 'en',
      translations: {
          en: {
              consentModal: {
                  title: 'We use cookies',
                  description: 'Cookie modal description',
                  acceptAllBtn: 'Accept all',
                  acceptNecessaryBtn: 'Reject all',
                  showPreferencesBtn: 'Manage Individual preferences'
              },
              preferencesModal: {
                  title: 'Manage cookie preferences',
                  acceptAllBtn: 'Accept all',
                  acceptNecessaryBtn: 'Reject all',
                  savePreferencesBtn: 'Accept current selection',
                  closeIconLabel: 'Close modal',
                  sections: [
                      {
                          title: 'Somebody said ... cookies?',
                          description: 'I want one!'
                      },
                      {
                          title: 'Strictly Necessary cookies',
                          description: 'These cookies are essential for the proper functioning of the website and cannot be disabled.',

                          //this field will generate a toggle linked to the 'necessary' category
                          linkedCategory: 'necessary'
                      },
                      {
                          title: 'Performance and Analytics',
                          description: 'These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.',
                          linkedCategory: 'analytics'
                      },
                      {
                          title: 'More information',
                          description: 'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>'
                      }
                  ]
              }
          }
      }
  }
    // ...
}),]
});