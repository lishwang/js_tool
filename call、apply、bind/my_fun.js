
/** call
 * @param {*} fn 要改变this指向的函数
 * @param {*} obj this的新指向
 * @param  {...any} args fn函数的入参
 */
function my_call (fn, obj, ...args) {
  // 如果改变指向为undefined或者null时，默认指向全局对象
  if (obj === undefined || obj === null) {
    // globalThis es11中定义的全局对象；因为在浏览器环境下全局对象是window，在node环境下全局对象是global
    obj = globalThis;
  }
  // 为obj添加临时方法，目的是调用 obj.temp 方法时this的默认指向是指向obj
  obj.temp = fn;
  // 执行 temp 方法
  let result = obj.temp(...args);
  // 删除 obj 的 temp 方法，复原 obj 
  delete obj.temp;
  // 返回函数执行结果
  return result;
}


/** apply
 * @param {*} fn 要改变this指向的函数
 * @param {*} obj this的新指向
 * @param  {...any} args fn函数的入参
 */
function my_apply (fn, obj, args) {
  // 如果改变指向为undefined或者null时，默认指向全局对象
  if (obj === undefined || obj === null) {
    // globalThis es11中定义的全局对象；因为在浏览器环境下全局对象是window，在node环境下全局对象是global
    obj = globalThis;
  }
  // 为obj添加临时方法，目的是调用 obj.temp 方法时this的默认指向是指向obj
  obj.temp = fn;
  // 执行 temp 方法
  let result = obj.temp(...args);
  // 删除 obj 的 temp 方法，复原 obj 
  delete obj.temp;
  // 返回函数执行结果
  return result;
}


/** bind
 * @param {*} fn 要改变this指向的函数
 * @param {*} obj this的新指向
 * @param  {...any} args fn函数的入参
 */
function my_bind (fn, obj, ...args) {
  // 返回一个新的函数
  return function (...args2) {
    // 内部调用 my_call 函数
    return my_call(fn, obj, ...args, ...args2);
  }
}