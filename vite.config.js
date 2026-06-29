import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,        // Puerto personalizado
    open: true,        // Abre automáticamente en navegador
  },
  build: {
    outDir: 'dist',
    sourcemap: true,   // Para debugging
  },
})