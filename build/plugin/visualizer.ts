/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-06 17:13:19
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-06 17:18:11
 * @FilePath: \myPages\build\plugin\visualizer.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * Generation packaging analysis
 * 生成打包分析
 */
import visualizer from 'rollup-plugin-visualizer';

export default function configVisualizerPlugin() {
  if (process.env.REPORT === 'true') {
    return visualizer({
      filename: './node_modules/.cache/visualizer/stats.html',
      open: true,
      gzipSize: true,
      brotliSize: true,
    });
  }
  return [];
}
