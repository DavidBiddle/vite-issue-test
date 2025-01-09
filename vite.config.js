import { defineConfig } from 'vite'
import * as path from 'node:path'

export default defineConfig({
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        css: path.resolve(__dirname, 'application.scss')
      }
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
        silenceDeprecations: [
          'mixed-decls',
          'slash-div',
          'import',
          'global-builtin'
        ]
      }
    }
  },
  resolve: {
    alias: {
      govuk: path.resolve(__dirname, 'node_modules/govuk-frontend/dist/govuk')
    }
  }
})
