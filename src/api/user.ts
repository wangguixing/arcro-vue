import axios from 'axios';
import type { RouteRecordNormalized } from 'vue-router';
import type { UserState } from '@/store/user/types';
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

export function logout() {
  return axios.post<LoginRes>('/api/user/logout');
}

export function getUserInfo() {
  return axios.post<UserState>('/api/user/info');
}

export function getMenuList() {
  return axios.post<RouteRecordNormalized[]>('/api/user/menu');
}
