import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // For username.github.io repos, we still use './' for assets
  base: './',
  build: {
    outDir: 'dist',
    // Ensure proper module handling
    modulePreload: {
      polyfill: true
    },
    rollupOptions: {
      output: {
        // Ensure proper file naming and paths
        entryFileNames: `assets/[name].[hash].mjs`, // Using .mjs extension
        chunkFileNames: `assets/[name].[hash].mjs`,
        assetFileNames: `assets/[name].[hash].[ext]`
      }
    }
  },
  // Ensure TypeScript files are handled correctly
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  }
})