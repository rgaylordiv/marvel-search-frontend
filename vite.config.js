import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/marvel-comic-search/",
  server: {
    port: 3001,
  },
  build: {
    outDir: "dist",
  },
});
