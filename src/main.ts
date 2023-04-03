/*
 * @Author: wangguixing
 * @Date: 2023-03-05 16:08:45
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-01 13:05:30
 * @FilePath: \src\main.ts
 * @Description: 注明出处即可
 * Copyright 2023 wangguixing, All Rights Reserved.
 * 2023-03-05 16:08:45
 */

import { createApp } from 'vue';
import ArcoVue from '@arco-design/web-vue';
// 额外引入图标库
import ArcoVueIcon from '@arco-design/web-vue/es/icon';
import App from './App';
import router from './router';
import store from './store';

import '@arco-design/web-vue/dist/arco.css';
import '@/assets/styles/index.less';

const app = createApp(App);
app.config.performance = true;
app.use(ArcoVue);
app.use(ArcoVueIcon);
app.use(store);
app.use(router);

app.mount('#app');
