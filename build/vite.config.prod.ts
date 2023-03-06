/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-06 16:54:08
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-06 17:18:52
 * @FilePath: \myPages\build\vite.config.prod.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { mergeConfig } from 'vite';
import baseConfig from './vite.config.base';
import configCompressPlugin from './plugin/compress';
import configVisualizerPlugin from './plugin/visualizer';

export default mergeConfig(
  {
    mode: 'production',
    plugins: [configCompressPlugin('gzip'), configVisualizerPlugin()],
    build: {},
  },
  baseConfig
);
