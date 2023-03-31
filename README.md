### 三方组件库
- @vueuse/core（实用函数集）
- @arco-design/web-vue (字节)
- gsap（javascript动画库）
- mitt（实现vue取消的eventbus（发布与订阅功能））
- [vite-plugin-imagemin 图片压缩](https://github.com/anncwb/vite-plugin-imagemin#options)
  ```
  "resolutions": {
    "bin-wrapper": "npm:bin-wrapper-china"
  }
  ```
- unplugin-vue-components  (按需导入组件)
- vite-plugin-style-import （按需导入样式）
- vite-plugin-compression  （开启GZIP压缩）
- vite-plugin-cdn-import （cdn引入）
- @vitejs/plugin-legacy  (传统浏览器支持)--->对vue3来说无意义，Proxy决定了vue3不支持ie11，但对react或其他可通过此实现支持
- mockjs、vite-plugin-mock