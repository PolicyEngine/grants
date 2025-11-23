import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Set base path for GitHub Pages project sites when provided by CI
  base: process.env.BASE_PATH || '/',
})