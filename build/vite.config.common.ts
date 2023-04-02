/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-06 16:54:08
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-02 19:53:25
 * @FilePath: \build\vite.config.common.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  base: '/',
  publicDir: 'public',
  clearScreen: true,
  logLevel: 'error',
  plugins: [vue(), vueJsx(), svgLoader({ svgoConfig: {} })],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, '../src'),
      },
      {
        find: 'assets',
        replacement: resolve(__dirname, '../src/assets'),
      },
      {
        find: 'vue',
        replacement: 'vue/dist/vue.esm-bundler.js', // compile template
      },
    ],
    extensions: ['.ts', '.js', '.tsx', 'json', '.vue'],
  },
  define: {
    'process.env': { appName: 'wangguixing' },
  },
  css: {
    devSourcemap: false,
    preprocessorOptions: {
      less: {
        modifyVars: {
          hack: `true; @import (reference) "${resolve(
            'src/assets/styles/var.less'
          )}";`,
        },
        javascriptEnabled: true,
      },
    },
  },
});
