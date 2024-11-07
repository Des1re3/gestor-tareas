import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import { ghPages } from 'vite-plugin-gh-pages';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(),ghPages()],
  base: "gestor-tareas",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
