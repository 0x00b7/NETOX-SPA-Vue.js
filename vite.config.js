import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vitePrerender from 'vite-plugin-prerender'
import path from 'path'

export default defineConfig({
  plugins: [vue(), vueJsx(), vitePrerender({
    staticDir: path.join(__dirname, 'dist'),
    routes: ['/dev'],
  }),],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
