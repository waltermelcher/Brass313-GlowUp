// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages project site: https://waltermelcher.github.io/Brass313-GlowUp/
export default defineConfig({
  site: 'https://waltermelcher.github.io',
  base: '/Brass313-GlowUp',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
