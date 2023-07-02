import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Vite configuration file.
 * @see {@link https://vitejs.dev/config/} for more information.
 * @type {import('vite').UserConfig}
 */
export default defineConfig({
  plugins: [react()],
  target: 'es6',
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
      }
    }
  },
})
