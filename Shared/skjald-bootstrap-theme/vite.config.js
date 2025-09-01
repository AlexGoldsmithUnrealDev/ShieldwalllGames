// vite.config.js
import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import path from 'node:path';

// Helper: put CSS into dist/css/skjald.min.css; keep other assets sensible
function assetFileNames(assetInfo) {
  const ext = path.extname(assetInfo.name || '').slice(1);

  // Force our main stylesheet to a deterministic name/path
  if (ext === 'css') {
    return 'css/skjald.min.css';
  }

  // Images, fonts, etc.
  if (/(png|jpg|jpeg|gif|svg|webp|avif)$/i.test(ext)) {
    return 'assets/img/[name][extname]';
  }
  if (/(woff|woff2|ttf|otf|eot)$/i.test(ext)) {
    return 'assets/fonts/[name][extname]';
  }

  // Default fallback for other assets
  return 'assets/[name][extname]';
}

export default defineConfig({
  root: '.', // keep default
  publicDir: false, // we'll ship only the compiled dist
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [autoprefixer()]
    },
    preprocessorOptions: {
      scss: {
        // If you want global variables/mixins auto-injected into every SCSS file later, add them here:
        // additionalData: `@use "sass:math"; @import "src/scss/_variables.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@scss': path.resolve(__dirname, 'src/scss'),
      '@js': path.resolve(__dirname, 'src/js'),
      '@assets': path.resolve(__dirname, 'src/assets')
    }
  },
  build: {
    sourcemap: true,
    outDir: 'dist',
    emptyOutDir: true,
    cssCodeSplit: false, // single CSS file emitted (our theme)
    rollupOptions: {
      // Single entry: src/js/theme.js should import "../scss/theme.scss"
      input: {
        skjald: path.resolve(__dirname, 'src/js/theme.js')
      },
      output: {
        // Force deterministic bundle names/structure
        entryFileNames: () => 'js/skjald.bundle.min.js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames
      }
    }
  },
  server: {
    open: false,
    port: 5173,
    strictPort: true
  },
  preview: {
    port: 5174,
    strictPort: true
  }
});
