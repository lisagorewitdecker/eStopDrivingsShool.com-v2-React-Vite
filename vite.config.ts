import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { DevTools } from '@vitejs/devtools';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), DevTools()],

  server: {
    port: 8080,
  },
  build: {
    outDir: 'dist',
  }
})
