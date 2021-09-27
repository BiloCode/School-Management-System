import path from 'path';

import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@localtypes': path.resolve(__dirname, 'src/core/types'),
      '@services': path.resolve(__dirname, 'src/core/services'),
      '@utils': path.resolve(__dirname, 'src/core/utils'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@pages': path.resolve(__dirname, 'src/components/pages'),
      '@molecules': path.resolve(__dirname, 'src/components/molecules'),
      '@atoms': path.resolve(__dirname, 'src/components/atoms'),
      '@organisms': path.resolve(__dirname, 'src/components/organisms'),
      '@templates': path.resolve(__dirname, 'src/components/templates'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@router': path.resolve(__dirname, 'src/router')
    }
  }
});
