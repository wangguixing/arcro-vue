import request from '@/utils/request';

export interface LoginData {
  username: string;
  password: string;
}

export interface LoginRes {
  token: string;
}
export function login(data: LoginData) {
  return request({ url: '/api/user/login', method: 'post', data });
}
export function getUserInfo() {
  return request({ url: '/api/user/info', method: 'post' });
}
export function getMenuList() {
  return request({ url: '/api/user/menu', method: 'post' });
}
export function logout() {
  return request({ url: '/api/user/logout', method: 'post' });
}
