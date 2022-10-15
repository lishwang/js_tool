
/** new
 * 
 * @param {function} fn 
 * @param  {...any} args 
 * 
 * new 一个构造函数的过程：
 * 1、创建一个新对象；
 * 2、修改这个构造函数内部的this指向这个新对象；
 * 3、执行这个构造函数，拿到这个构造函数执行的结果；
 * 4、返回这个新对象；
 */
function my_new (fn, ...args) {
  // 1、创建一个新对象
  let obj = {};
  // 2、修改这个构造函数内部的this指向这个新对象，并执行这个构造函数，拿到这个构造函数执行的结果
  const result = fn.call(obj, ...args);
  // 3、修改这个新对象的原型
  obj.__proto__ = fn.prototype;
  // 4、返回这个新对象（如果fn构造函数返回是一个数组、对象或者函数，则返回这个数组、对象或方法；否则返回创建的新对象）
  return result instanceof Object ? result : obj;
}


/** instanceof
 * 判断构造函数的 prototype 属性是否出现在实例对象的原型链中的任何位置
 * @param {*} left 实例对象
 * @param {*} right 构造函数
 * @returns 返回布尔值
 */
function my_instanceof (left, right) {
  // 获取实例的隐式原型
  // let proto = left.__proto__;
  let proto = Object.getPrototypeOf(left);
  // 获取构造函数的原型
  let prototype = right.prototype;
  // 遍历左边实例对象的原型链
  while (proto) {
    // 判断构造函数的 prototype 属性是否出现在实例对象的原型链中的任何位置
    if (proto === prototype) {
      return true;
    }
    // 如果没有找到，继续在实例对象的原型链上找
    proto = proto.__proto__;
  }
  // 没找到，返回false
  return false;
}


/** mergeObject
 * 合并多个对象，属性名相同时属性值合并为一个数组
 * @param  {...any} args 要合并的所有对象
 * @returns 返回值是一个对象
 */
function my_mergeObject (...args) {
  let result = {};
  // 遍历所有对象
  args.forEach(obj => {
    // 遍历当前对象的所有属性
    Object.keys(obj).forEach(key => {
      // 判断result中是否存在key属性
      // 知识补充：对于继承的属性，in 将返回 true。hasOwnProperty 将检查属性是否为自身所有，并忽略继承的属性。
      if (result.hasOwnProperty(key)) {
        // 合并属性值
        result[key] = [].concat(result[key], obj[key]);
      } else {
        // 如果没有，直接写入
        result[key] = obj[key];
      }
    })
  })
  return result;
}


/** clone1 浅拷贝1
 * 
 * @param {any} obj 浅拷贝内容
 * @returns 
 */
function clone1 (obj) {
  // 如果是数组和对象类型
  if (typeof obj === 'object' && obj !== null) {
    // 数组和对象分开浅拷贝
    if (Array.isArray(obj)) {
      return [...obj];
    } else {
      return { ...obj };
    }
  } else {
    // 不是数组或对象
    return obj;
  }
}


/** clone2 浅拷贝2
 * 
 * @param {any} obj 浅拷贝内容
 * @returns 
 * 知识补充：
 * for...in遍历得到key, for...of遍历得到value
 * for...in遍历可枚举的数据类型, for...of遍历可迭代的数据类型
 * 可枚举数据,如对象、数组、字符串
 * 可迭代数据,如数组、字符串、Map、Set
 */
function clone2 (obj) {
  // 如果是数组和对象类型
  if (typeof obj === 'object' && obj !== null) {
    // 数组和对象分开浅拷贝
    const result = Array.isArray(obj) ? [] : {};
    // for...in... 既可以遍历对象，也可以遍历数组，会遍历到原型上的属性
    for (let key in obj) {
      // 判断当前对象身上是否包含该属性
      if (obj.hasOwnProperty(key)) {
        // 将属性设置到 result 中
        result[key] = obj[key];
      }
    }
  } else {
    // 不是数组或对象
    return obj;
  }
}


/** deepClone1 深拷贝1（JSON方法）
 * 
 * @param {any} obj 深拷贝内容
 * @returns 
 * 缺点：
 * 1、不能拷贝属性值为方法的属性
 * 2、不能处理循环引用的对象，会报错：Converting circular structure to JSON
 */
function deepClone1 (obj) {
  return JSON.parse(JSON.stringify(obj));
}


/** deepClone2 深拷贝2（递归方法）
 * 
 * @param {any} obj 深拷贝内容
 * @returns 
 * 缺点：
 * 1、不能处理循环引用的对象，会报错：Maximum call stack size exceeded，栈溢出
 * 2、性能不好
 */
function deepClone2 (obj) {
  // 检测数据类型
  if (typeof obj === 'object' && obj !== null) {
    // 如果是对象或者数组
    // 创建一个返回值容器
    let result = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      // 只拷贝对象本身的属性，不拷贝原型对象上的属性
      if (obj.hasOwnProperty(key)) {
        // 拷贝，递归
        result[key] = deepClone2(obj[key]);
      }
    }
    // 返回结果
    return result;
  } else {
    // 如果是基本数据类型或者function，直接返回
    return obj;
  }
}


/** deepClone3 深拷贝3（递归+Map方法）
 * 
 * @param {any} obj 深拷贝内容
 * @returns 
 * 缺点：
 * 1、使用 for...in 遍历数组或对象，性能不好；
 * 知识补充：（性能排序）
 * 数组：while、for、forEach、for...of 优于 Object.keys + forEach、for...in
 * 对象：Object.keys + forEach 与 for...in 差不多
 */
function deepClone3 (obj, map = new Map()) {
  // 检测数据类型
  if (typeof obj === 'object' && obj !== null) {
    // 如果是对象或者数组
    // 先从 map 中查找该对象或数组之前是否克隆过
    let cache = map.get(obj);
    if (cache) {
      // 如果克隆过，直接返回之前克隆的值
      return cache;
    }
    // 创建一个返回值容器
    let result = Array.isArray(obj) ? [] : {};
    // 将 旧的对象或数组 作为键，稍后克隆出的新的对象或数组 作为值，存储到 Map 数据结构中
    map.set(obj, result);
    for (let key in obj) {
      // 只拷贝对象本身的属性，不拷贝原型对象上的属性
      if (obj.hasOwnProperty(key)) {
        // 拷贝，递归，还要把 map 存储的内容传过去
        result[key] = deepClone3(obj[key], map);
      }
    }
    // 返回结果
    return result;
  } else {
    // 如果是基本数据类型或者function，直接返回
    return obj;
  }
}


/** deepClone4 深拷贝4（递归+Map方法）
 * 
 * @param {any} obj 深拷贝内容
 * @returns 
 * 知识补充：（性能排序）
 * 数组：while、for、forEach、for...of 优于 Object.keys + forEach、for...in
 * 对象：Object.keys + forEach 与 for...in 差不多
 */
function deepClone4 (obj, map = new Map()) {
  // 检测数据类型
  if (typeof obj === 'object' && obj !== null) {
    // 如果是对象或者数组
    // 先从 map 中查找该对象或数组之前是否克隆过
    let cache = map.get(obj);
    if (cache) {
      // 如果克隆过，直接返回之前克隆的值
      return cache;
    }
    // 判断是数组还是对象
    let isArray = Array.isArray(obj);
    // 创建一个返回值容器
    let result = isArray ? [] : {};
    // 将 旧的对象或数组 作为键，稍后克隆出的新的对象或数组 作为值，存储到 Map 数据结构中
    map.set(obj, result);
    if (isArray) {
      // 数组拷贝
      obj.forEach((item, index) => {
        // 拷贝，递归，还要把 map 存储的内容传过去
        result[index] = deepClone4(item, map);
      })
    } else {
      // 对象拷贝
      Object.keys(obj).forEach(key => {
        // 拷贝，递归，还要把 map 存储的内容传过去
        result[key] = deepClone4(obj[key], map);
      })
    }
    // 返回结果
    return result;
  } else {
    // 如果是基本数据类型或者function，直接返回
    return obj;
  }
}
