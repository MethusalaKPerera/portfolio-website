import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/portfolio-website/', 
  server: {
    host: 'methusala-portfolio.local',
    port: 5173
  }
})