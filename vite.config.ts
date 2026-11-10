import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vite.dev/config/
export default defineConfig({
  base: './', // Zoho hosts the widget under a subpath, so asset URLs must be relative
  plugins: [
    vue(),
  ],
  build: {
    outDir: 'app',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
