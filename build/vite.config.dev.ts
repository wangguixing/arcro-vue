/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-06 16:54:08
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-01 15:19:03
 * @FilePath: \build\vite.config.dev.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { mergeConfig, loadEnv } from 'vite';
import eslint from 'vite-plugin-eslint';
import { createHtmlPlugin } from 'vite-plugin-html';
import commonConfig from './vite.config.common';
import ConfigViteMock from './plugin/mock';

const getViteEnv = (mode: string, target: string) => {
  return loadEnv(mode, process.cwd())[target];
};
export default mergeConfig(
  {
    mode: 'development',
    server: {
      host: 'localhost',
      port: '9000',
      https: false,
      // cors: true,
      open: true,
      strictPort: false,
      fs: {
        strict: true,
      },
      optimizeDeps: {
        force: true,
      },
      hmr: { overlay: false },
      proxy: {
        // 使用 proxy 实例
        '/api': {
          target: process.env.VITE_API_BASE_URL,
          changeOrigin: true,
          // rewrite: (path: string) => path.replace(/^\/api/, ''),
        },
      },
    },
    plugins: [
      eslint({
        cache: false,
        include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
        exclude: ['node_modules'],
      }),
      createHtmlPlugin({
        inject: {
          data: {
            title: getViteEnv(
              process.env.NODE_ENV || 'development',
              'VITE_APP_TITLE'
            ),
          },
        },
      }),
      ConfigViteMock(),
    ],
  },
  commonConfig
);
