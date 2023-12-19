import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: '/src',
      components: '/src/components',
      api: '/src/api',
      containers: '/src/containers',
      type: '/src/type',
    },
  },
  server: {
    port: 3001,
  },
});
