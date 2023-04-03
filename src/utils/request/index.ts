import axios from 'axios';
import { useUserStore } from '@/store';
import { getTokenName, getTokenValue } from '@/utils/auth';
import useNotify from '@/hooks/useNotify';
import httpErrorCode from './httpErrorCode';

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8';
// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 20000,
});

// request拦截器
service.interceptors.request.use(
  (config) => {
    // 是否需要设置 token
    const isToken = (config.headers || {}).isToken === false;

    const tokenName = getTokenName();
    const tokenValue = getTokenValue();

    if (tokenValue && tokenName && !isToken) {
      config.headers[tokenName] = tokenValue; // 让每个请求携带自定义token 请根据实际情况自行修改
    }

    // get请求映射params参数
    if (config.method === 'get' && config.params) {
      let url = `${config.url}?`;
      for (const propName of Object.keys(config.params)) {
        const value = config.params[propName];
        const part = `${encodeURIComponent(propName)}=`;
        if (value !== null && typeof value !== 'undefined') {
          if (typeof value === 'object') {
            for (const key of Object.keys(value)) {
              if (value[key] !== null && typeof value[key] !== 'undefined') {
                const params = `${propName}[${key}]`;
                const subPart = `${encodeURIComponent(params)}=`;
                url += `${subPart}${encodeURIComponent(value[key])}&`;
              }
            }
          } else {
            url += `${part}${encodeURIComponent(value)}&`;
          }
        }
      }
      url = url.slice(0, -1);
      config.params = {};
      config.url = url;
    }
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
const matchingList = [70004];
// 响应拦截器
service.interceptors.response.use(
  async (res) => {
    const userStore = useUserStore();
    // 未设置状态码则默认成功状态
    const code = res.data.code || 1;
    // 获取错误信息
    const msg = res.data.msg || '系统未知错误，请反馈给管理员';
    if (matchingList.indexOf(code) > -1) {
      useNotify({ type: 'error', content: msg || '||登录信息超时请重选登录' });
      await userStore.logout();
      return Promise.reject();
    }
    if (code === 1) {
      return res.data;
    }
    const message = res.data.msg || '服务器发生错误';
    useNotify({ type: 'error', content: message });
    return Promise.reject();
  },
  (errorObj) => {
    type httpCodeType = keyof typeof httpErrorCode;

    // http异常
    if (errorObj === undefined || errorObj.code === 'ECONNABORTED') {
      useNotify({ type: 'warning', content: '服务请求超时' });
      return Promise.reject(errorObj);
    }

    const { request, response } = errorObj;
    if (request.status) {
      const {
        response: {
          status,
          statusText,
          data: { msg = '服务器发生错误' },
        },
      } = errorObj;
      const text =
        httpErrorCode[status as httpCodeType] ||
        statusText ||
        msg ||
        '服务器发生错误';
      const info = response.data;
      if (status === 401 || info.status === 40101) {
        window.location.replace('/login');
      }
      useNotify({ type: 'error', content: text });
      return Promise.reject();
    }
    useNotify({ type: 'error', content: '网络异常,请求失败' });
    return Promise.reject();
  }
);

export default service;
