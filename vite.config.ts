import path from "path"
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio_yocef/',
  plugins: [react(),tailwindcss(),],
   resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  }
})
