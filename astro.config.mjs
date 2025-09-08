// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://RobL93.github.io/finalProject/', // full URL with trailing slash
  base: '/finalProject/', // leading & trailing slash
  outDir: './docs',       // output into /docs for GitHub Pages
});
