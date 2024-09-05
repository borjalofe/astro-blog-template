import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap';

import { SITE_URL as site } from './src/consts';
import { defaultLocale, locales } from './src/i18n';


// https://astro.build/config
export default defineConfig({
	i18n: {
		defaultLocale,
		locales,
	},
  integrations: [mdx(), react(), sitemap()],
  site
});