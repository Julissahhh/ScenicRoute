import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        sub1: resolve(__dirname, 'interest.html'),
        sub2: resolve(__dirname, 'roadtripideas.html'),
      },
    },
  },
})