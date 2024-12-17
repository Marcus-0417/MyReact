import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // base:process.env.NODE_ENV === 'production' ? '/my-react-app1/' : '/',
  base: './',
  plugins: [react()],
})
