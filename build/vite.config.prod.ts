/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-06 16:54:08
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-31 13:32:45
 * @FilePath: \myPages\build\vite.config.prod.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { mergeConfig } from 'vite';
import commonConfig from './vite.config.common';
import configCompressPlugin from './plugin/compress';
import configVisualizerPlugin from './plugin/visualizer';
import configStyleImportPlugin from './plugin/styleImport';
import configImageminPlugin from './plugin/imagemin';
// import configLegacyBrowser from './plugin/legacyBrowser';

export default mergeConfig(
  {
    mode: 'production',
    plugins: [
      configCompressPlugin('gzip'),
      configVisualizerPlugin(),
      configStyleImportPlugin(),
      configImageminPlugin(),
      // configLegacyBrowser(),
    ],
    build: {
      outDir: 'dist',
      assetsDir: 'statics',
      cssCodeSplit: true,
      sourcemap: false,
      copyPublicDir: true,
      assetsInlineLimit: 4096,
      target: 'es2015',
      modulePreload: {
        polyfill: true,
      },
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            arco: ['@arco-design/web-vue'],
            chart: ['echarts', 'vue-echarts'],
            vue: ['vue', 'vue-router', 'pinia', '@vueuse/core'],
          },
          assetFileNames: '[ext]/[name].[hash].[ext]',
          entryFileNames: 'js/[name].[hash].js',
          // chunkFileNames: 'js/[name].[hash].js',
          // 拆分js到模块文件夹
          chunkFileNames: (chunkInfo: any) => {
            const facadeModuleId = chunkInfo.facadeModuleId
              ? chunkInfo.facadeModuleId.split('/')
              : [];
            const fileName =
              facadeModuleId[facadeModuleId.length - 2] || '[name]';
            return `js/${fileName}/[hash].js`;
          },
        },
      },
    },
  },
  commonConfig
);
