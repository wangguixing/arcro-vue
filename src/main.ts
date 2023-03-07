/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-05 16:08:45
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-07 18:21:18
 * @FilePath: \myPages\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ArcoVue from '@arco-design/web-vue';
// 额外引入图标库
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import App from './App';
import router from './router';

import '@arco-design/web-vue/dist/arco.css';
import './assets/main.css';

const app = createApp(App);

app.use(ArcoVue);
app.use(ArcoVueIcon);
app.use(createPinia());
app.use(router);

app.mount('#app');
