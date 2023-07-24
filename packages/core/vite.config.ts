import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dts(),],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'core',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
})
