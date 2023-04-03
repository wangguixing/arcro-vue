<div align="center">
  <h1>arcro-vue</h1>
</div>

### [vue3](https://cn.vuejs.org/)、[typescript](https://www.typescriptlang.org/)、[pinia](https://pinia.vuejs.org/zh/)、[Arco Design](https://arco.design/)
完全使用tsx，基本涵盖了vue3常用写法，欢迎补充

### 特点
- **TypeScript**  -  代码完全使用 TypeScript 书写。
- **Pinia**
- **Arco Design**  -  字节翻版ant-design，vue组件库。
- **@vueuse/core** -  实用函数集
- **mitt** -  mitt封装eventBus hooks
### 已安装三方组件库
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
2. tsx中的transtion、KeepAlive、动态组件创建（SFC写法无需考虑）
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
3. v-slots两种写法（SFC写法无需考虑）
    ```
    举例1：
       <a-button v-slot={{ default:() => VNode, title:() => VNode }} />
    举例2：
       <a-button>
       {{
          default: () =>  VNode,
          title: () =>  VNode,
       }}
       </a-button>
    ```
4. tsx中的scoped作用域
   ```
   一、vite内置.module方案，js形式导入css，生成附带随机变量的class
     定义使用*.module.less
        .layout {
            width: 100vw;
            height: 100vh;
            &-navbar {
              position: fixed;
              top: 0;
              left: 0;
              z-index: 100;
              width: 100%;
              height: @nav-size-height;
        }

        import style from *.module.less
        <div class={style.layout}>
           <div class={style.layoutNavbar}></div>
        </div>
   二、命名特有class
   ```