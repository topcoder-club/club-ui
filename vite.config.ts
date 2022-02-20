import * as path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import pkg from './package.json'
import pages from "vite-plugin-pages"
import layouts from 'vite-plugin-vue-layouts'

process.env.VITE_APP_VERSION = pkg.version
if (process.env.NODE_ENV === 'production') {
  process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString()
}

export default defineConfig({
  plugins: [
    vue({
      script: {
        refSugar: true,
      },
    }),
    pages(),
    layouts(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
