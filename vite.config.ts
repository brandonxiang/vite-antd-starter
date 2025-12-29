/* eslint-disable no-undef */
import path, { dirname } from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import { fileURLToPath } from 'url';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';

  const viteEnv = loadEnv('', process.cwd());

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  return {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    define: {
      'process.env.APP_ENV': JSON.stringify(viteEnv.VITE_APP_ENV),
      'process.env.__DEV__': isDev,
    },
    build: {
      target: 'es2015',
      sourcemap: mode === 'production',
      rollupOptions: {
        output: {
          advancedChunks: {
            groups: [
              { name: 'react', test: /\/react(?:-dom|-router)?/ },
              { name: 'antd', test: /\/antd\/.*/ },
              { name: 'antv', test: /[\\/]node_modules[\\/]@antv[\\/]/ },
            ],
          },
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
        },
      },
    },
    plugins: [
      react({
        babel: {
          plugins: [['babel-plugin-react-compiler']],
        },
      }),
      viteEnv.VITE_APP_VISUALIZER === 'true' && visualizer({ open: true }),
      createHtmlPlugin({
        minify: true,
      }),
    ],
  };
});
