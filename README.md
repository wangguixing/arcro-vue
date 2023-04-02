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

###  踩坑记录
1. enmu type ts作用域与js作用域冲突
   ```
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': 'error',
   ```
2. tsx中的transtion、KeepAlive、动态组件创建
  ```
      import { Transition, KeepAlive, createVNode } from 'vue';
      <Transition name="fade" mode="out-in">
        <div key={route.path} style={{ height: '100%' }}>
          {route.meta.ignoreCache ? (
            createVNode(Component)
          ) : (
            <KeepAlive include={cacheList.value}>
              {createVNode(Component)}
            </KeepAlive>
          )}
        </div>
      </Transition>
  ```
3. v-slots两种写法
    ```
    举例1：
       <a-button v-slot={{ default:() => VNode, title:() => VNode }} />
    举例2：
       <a-button v-slot={{}}>
       {{
          default: () =>  VNode,
          title: () =>  VNode,
       }}
       </a-button>
    ```