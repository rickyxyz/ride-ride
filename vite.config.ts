/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig(() => ({
  plugins: [react()],
  base: '/ride-ride/',
  build: {
    manifest: true,
    rollupOptions: {
      external: ['stories'],
    },
    target: 'esnext',
  },
}));
