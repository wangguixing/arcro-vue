/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-31 09:49:09
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-31 09:50:20
 * @FilePath: \arcro-vue\src\utils\request\type.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import type {
  AxiosResponse,
  InternalAxiosRequestConfig,
  CreateAxiosDefaults,
  AxiosRequestConfig,
} from 'axios';

export interface RequestInterceptors<T> {
  // 请求拦截
  requestInterceptors?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig;
  requestInterceptorsCatch?: (err: any) => any;
  // 响应拦截
  responseInterceptors?: (config: T) => T;
  responseInterceptorsCatch?: (err: any) => any;
}
// 自定义传入的参数
export interface CreateRequestConfig<T = AxiosResponse>
  extends CreateAxiosDefaults {
  interceptors?: RequestInterceptors<T>;
}
export interface RequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: RequestInterceptors<T>;
}
export interface CancelRequestSource {
  [index: string]: () => void;
}
