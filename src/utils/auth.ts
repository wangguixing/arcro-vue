/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-13 17:08:47
 * @LastEditors: wangguixing 1163260785@qq.com
 * @LastEditTime: 2023-03-13 17:08:53
 * @FilePath: \arcro-vue\src\utils\auth.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const TOKEN_KEY = 'token';

const isLogin = () => {
  return !!localStorage.getItem(TOKEN_KEY);
};

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export { isLogin, getToken, setToken, clearToken };
