import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  base: '/mushroomyyyblog/', // ⚠️ include the trailing slash
});
