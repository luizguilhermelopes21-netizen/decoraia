
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Garante que os links funcionem em qualquer subdiretório da Hostinger ou GitHub
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  }
});
