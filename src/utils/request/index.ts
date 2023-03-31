/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-31 09:49:09
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-31 09:56:59
 * @FilePath: \arcro-vue\src\utils\request\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type { AxiosResponse } from 'axios';
import RequestClass from './request';

import type { RequestConfig } from './type';

export interface requestRes<T> {
  statusCode: number;
  desc: string;
  result: T;
}

// 重写返回类型
interface ReqConfig<T, R> extends RequestConfig<requestRes<R>> {
  data?: T;
}

const newRequest = new RequestClass({
  baseURL: import.meta.env.BASE_URL,
  timeout: 1000 * 60 * 5,
  interceptors: {
    // 请求拦截器
    requestInterceptors: (config) => config,
    // 响应拦截器
    responseInterceptors: (result: AxiosResponse) => {
      return result;
    },
  },
});

/**
 * @description: 函数的描述
 * @generic D 请求参数
 * @generic T 响应结构
 * @param {ReqConfig} config 不管是GET还是POST请求都使用data
 * @returns {Promise}
 */
const request = <D = any, T = any>(config: ReqConfig<D, T>) => {
  const { method = 'GET' } = config;
  if (method === 'get' || method === 'GET') {
    config.params = config.data;
  }
  return newRequest.request<requestRes<T>>(config);
};
// 取消请求
export const cancelRequest = (url: string | string[]) => {
  return newRequest.cancelRequest(url);
};
// 取消全部请求
export const cancelAllRequest = () => {
  return newRequest.cancelAllRequest();
};

export default request;
