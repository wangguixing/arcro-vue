/**
 * @description: 转换glob导入的modules适用于{eager：true}导入
 * @param {any} _modules
 * @param {Array} result
 * @return {*} 返回值类型取决于泛型类型
 */
export function formatGlobModules<T>(_modules: any, result: Array<T>) {
  console.log('_modules :>>>>>>>', _modules);
  Object.keys(_modules).forEach((key) => {
    const defaultModule = _modules[key].default;
    if (!defaultModule) return;
    const moduleList = Array.isArray(defaultModule)
      ? [...defaultModule]
      : [defaultModule];
    result.push(...moduleList);
  });
  return result;
}
