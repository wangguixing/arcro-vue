/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-13 17:09:02
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-02 00:00:20
 * @FilePath: \src\utils\route-listener.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/**
 * Listening to routes alone would waste rendering performance. Use the publish-subscribe model for distribution management
 * 单独监听路由会浪费渲染性能。使用发布订阅模式去进行分发管理。
 */
import mitt from 'mitt';
import type { Handler } from 'mitt';
import type { RouteLocationNormalized } from 'vue-router';

const emitter = mitt();

const key = Symbol('ROUTE_CHANGE');

let latestRoute: RouteLocationNormalized;

export function setRouteEmitter(to: RouteLocationNormalized) {
  console.log('setRouteEmitter :>>>>>>>', to);
  emitter.emit(key, to);
  latestRoute = to;
}

export function listenerRouteChange(
  handler: (route: RouteLocationNormalized) => void,
  immediate = true
) {
  emitter.on(key, handler as Handler);
  console.log('latestRoute :>>>>>>>', latestRoute);
  if (immediate && latestRoute) {
    console.log('latestRoute :>>>>>>>', latestRoute);
    handler(latestRoute);
  }
}

export function removeRouteListener() {
  emitter.off(key);
}
