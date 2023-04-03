/*
 * @Author: wangguixing 1163260785@qq.com
 * @Date: 2023-03-13 17:08:47
 * @LastEditors: wangguixing
 * @LastEditTime: 2023-04-01 14:03:17
 * @FilePath: \src\utils\auth.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Cookies from 'js-cookie';

const TOKEN_KEY = 'tokenName';
const TOKEN_VALUE = 'tokenValue';

const isLogin = () => {
  return !!Cookies.get(TOKEN_VALUE);
};
function getTokenName() {
  return Cookies.get(TOKEN_KEY);
}

function getTokenValue() {
  return Cookies.get(TOKEN_VALUE);
}

function setTokenName(name: string) {
  return Cookies.set(TOKEN_KEY, name);
}

function setTokenValue(value: string) {
  return Cookies.set(TOKEN_VALUE, value);
}

function removeToken() {
  return Cookies.remove(TOKEN_VALUE);
}
export {
  isLogin,
  getTokenName,
  getTokenValue,
  setTokenValue,
  setTokenName,
  removeToken,
};
