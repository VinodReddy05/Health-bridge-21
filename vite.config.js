import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  base: '/Health-bridge-21/',  // Update with your GitHub repo name
  build: {
    outDir: 'build',  // Ensure this is set
  },
  plugins: [
    react()
  ],
  
})


