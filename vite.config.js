import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: './', // Ensures correct relative paths for assets
  build: {
    outDir: 'dist', // Ensures Vercel deploys the correct folder
  },
})
