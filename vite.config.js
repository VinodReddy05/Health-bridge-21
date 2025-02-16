import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  base: '/Health-bridge-21/',  
  build: {
    outDir: 'dist', 
  },
  plugins: [
    react()
  ],
  
})


