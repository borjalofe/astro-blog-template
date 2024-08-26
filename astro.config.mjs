import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

import { SITE_URL as site } from './src/consts';

// https://astro.build/config
export default defineConfig({
	site,
	integrations: [mdx(), sitemap()],
});
