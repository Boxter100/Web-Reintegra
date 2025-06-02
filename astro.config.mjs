// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://Boxter100.github.io",
  base: "Web-Reintegra",
  vite: {
    plugins: [tailwindcss()]
  }
});