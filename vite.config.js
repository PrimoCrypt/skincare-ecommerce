import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import commonjs from '@rollup/plugin-commonjs'; // Import the commonjs plugin
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    commonjs()
  ],
  base: '/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src")
    }
  }
})
