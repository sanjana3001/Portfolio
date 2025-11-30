import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'


// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [vue()],
  build: {
    // 🔑 Tell Vite to output files to the /docs directory
    outDir: 'docs' 
  },
  server: {
    port: 3000,
    open: true
  }
})