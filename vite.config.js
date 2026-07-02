import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Set VITE_BASE (e.g. /probable-fortnight/) when deploying under a subpath like GitHub Pages
  base: process.env.VITE_BASE || '/',
  plugins: [react(), tailwindcss()],
})
