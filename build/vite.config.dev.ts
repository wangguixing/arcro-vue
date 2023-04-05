/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-06 16:54:08
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-05 22:14:24
 * @FilePath: \build\vite.config.dev.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { mergeConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import { createHtmlPlugin } from 'vite-plugin-html';
import commonConfig from './vite.config.common';
import ConfigViteMock from './plugin/mock';
import { getViteEnvConf } from './utils';

const mode = 'development';
const env = getViteEnvConf(mode);

export default mergeConfig(
  {
    mode,
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
      hmr: { overlay: true },
      proxy: {
        // 使用 proxy 实例
        '/api': {
          target: process.env.VITE_API_BASE_URL,
          changeOrigin: true,
          // rewrite: (path: string) => path.replace(/^\/api/, ''),
        },
      },
    },
    define: {
      'process.env': Object.entries(env).reduce((prev, [key, val]) => {
        return {
          ...prev,
          [key]: val,
        };
      }, {}),
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
            title: env.VITE_APP_TITLE,
          },
        },
      }),
      ConfigViteMock(),
    ],
  },
  commonConfig
);
