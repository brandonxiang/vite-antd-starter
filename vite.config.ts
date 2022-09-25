import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import OptimizationPersist from 'vite-plugin-optimize-persist';
import PkgConfig from 'vite-plugin-package-config';
import styleImport, { AntdResolve } from 'vite-plugin-style-import';
import html from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';

  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: {
      'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV),
      'process.env.__DEV__': isDev,
    },
    build: {
      target: 'es2015',
      sourcemap: mode === 'production',
    },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
        },
        less: {
          javascriptEnabled: true,
        },
      },
    },
    plugins: [
      react(),
      styleImport({
        resolves: [AntdResolve()],
      }),
      // https://github.com/antfu/vite-plugin-optimize-persist
      OptimizationPersist(),
      PkgConfig(),
      html({
        minify: true,
      }),
    ],
  };
});
