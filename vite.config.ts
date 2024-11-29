/* eslint-disable no-undef */
// import path, { dirname } from 'path';
import { defineConfig } from 'vite';
// import { fileURLToPath } from 'url';
import { reactRouter } from '@react-router/dev/vite';
import tsconfigPaths from 'vite-tsconfig-paths';


// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isDev = mode === 'development';

  // const __filename = fileURLToPath(import.meta.url);
  // const __dirname = dirname(__filename);

  return {
    // resolve: {
    //   alias: {
    //     '@': path.resolve(__dirname, './src'),
    //   },
    // },
    define: {
      'process.env.APP_ENV': JSON.stringify(process.env.APP_ENV),
      'process.env.__DEV__': isDev,
    },
    // build: {
    //   target: 'es2015',
    //   sourcemap: mode === 'production',
    //   rollupOptions: {
    //     output: {
    //       manualChunks: {
    //         react: ['react', 'react-dom', 'react-router'],
    //         antd: ['antd'],
    //       },
    //     },
    //   },
    // },
    css: {
      preprocessorOptions: {
        scss: {
          charset: false,
        },
      },
    },
    plugins: [
      reactRouter(), 
      tsconfigPaths()
    ],
  };
});
