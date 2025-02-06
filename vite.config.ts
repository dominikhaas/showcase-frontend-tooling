import { fileURLToPath, resolve, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { dirname } from 'node:path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    VueI18nPlugin({
      /* options */
      // locale messages resource pre-compile option
      include: resolve(dirname(fileURLToPath(import.meta.url)), './path/to/src/locales/**'),
    }),
  ],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080', // URL des Backend-Servers
        changeOrigin: true,             // Passt den `Origin`-Header der Anfrage an
        rewrite: (path) => path.replace(/^\/api/, ''), // Entfernt `/api` aus der Anfrage
      },
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
