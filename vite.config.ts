import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/U-Design-trial-Website/',
  plugins: [react(), tailwindcss()],
});