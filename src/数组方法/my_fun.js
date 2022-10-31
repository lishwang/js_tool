
/** map
 * 返回一个由回调函数的返回值组成的新数组
 * @param {*} arr 原数组
 * @param {*} callback 回调函数
 * @returns 创建一个新数组并返回这个新数组
 */
export function my_map (arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let res = callback(arr[i], i);
    result.push(res);
  }
  return result;
}


/** reduce
 * 从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值
 * @param {*} arr 原数组
 * @param {*} callback 回调函数
 * @param {*} initValue 初始值
 * @returns 返回最终运行结果，类型未知
 */
export function my_reduce (arr, callback, initValue) {
  // 初始化返回值变量
  let result = initValue;
  for (let i = 0; i < arr.length; i++) {
    // 执行回调，并存储当前回调的结果
    result = callback(result, arr[i]);
  }
  // 返回最终结果
  return result;
}


/** filter
 * 将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回
 * @param {*} arr 原数组
 * @param {*} callback 回调函数
 * @returns 创建一个新数组并返回这个新数组
 */
function my_filter (arr, callback) {
  // 初始化返回值变量
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // 执行回调，并存储当前回调的结果
    let flag = callback(arr[i], i);
    flag && result.push(arr[i]);
  }
  // 返回最终结果
  return result;
}


/** find
 * 找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 undefined
 * @param {*} arr 原数组
 * @param {*} callback 回调函数
 * @returns 返回数组中一个元素，或者undefined
 */
function my_find (arr, callback) {
  // 初始化返回值变量
  for (let i = 0; i < arr.length; i++) {
    // 执行回调，并存储当前回调的结果
    let flag = callback(arr[i], i);
    if (flag) {
      return arr[i];
    }
  }
  // 返回最终结果
  return;
}


/** findIndex
 * 找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 -1
 * @param {*} arr 原数组
 * @param {*} callback 回调函数
 * @returns 返回数组中一个元素的下标，或者-1
 * 注意：findIndex 传入一个回调函数；indexOf 传入一个数组的元素；两者返回值相同
 */
function my_findIndex (arr, callback) {
  // 初始化返回值变量
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    // 执行回调，并存储当前回调的结果
    let flag = callback(arr[i], i);
    if (flag) {
      result = i;
      break;
    }
  }
  // 返回最终结果
  return result;
}


/** every
 * 如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false
 * @param {*} arr 原数组
 * @param {*} callback 回调函数
 * @returns 返回布尔值
 */
function my_every (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    // 执行回调，并存储当前回调的结果
    let flag = callback(arr[i], i);
    if (!flag) {
      return false;
    }
  }
  // 返回最终结果
  return true;
}


/** some
 * 如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false
 * @param {*} arr 原数组
 * @param {*} callback 回调函数
 * @returns 返回布尔值
 */
function my_some (arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    // 执行回调，并存储当前回调的结果
    let flag = callback(arr[i], i);
    if (flag) {
      return true;
    }
  }
  // 返回最终结果
  return false;
}


/** 数组去重1
 * 结合数组的indexOf，本质上进行双重遍历，效率差
 * @param {*} arr 原数组
 * @returns 返回新数组
 */
function my_unique (arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }
  // 返回最终结果
  return result;
}


/** 数组去重2
 * 结合数组的filter和indexOf方法，本质上进行双重遍历，效率差
 * @param {*} arr 原数组
 * @returns 返回新数组
 */
function my_unique2 (arr) {
  let result = arr.filter((item, index, current_arr) => {
    return current_arr.indexOf(item) === index;
  })
  // 返回最终结果
  return result;
}


/** 数组去重3
 * 结合对象的特性，本质上进行一次遍历，效率比较高
 * @param {*} arr 原数组
 * @returns 返回新数组
 */
function my_unique3 (arr) {
  let result = [];
  let obj = {};
  arr.forEach(item => {
    if (obj[item] === undefined) {
      // 将item作为下标存储到obj中，并赋值为true
      obj[item] = true;
      result.push(item);
    }
  })
  // 返回最终结果
  return result;
}


/** 数组去重4
 * 用es6的set集合，本质上进行一次遍历，效率计较高
 * @param {*} arr 原数组
 * @returns 返回新数组
 */
function my_unique4 (arr) {
  // 将set集合转换为真实数组1
  // return [...new Set(arr)];
  // 将set集合转换为真实数组2
  return Array.from(new Set(arr));
}


/** concat
 * 将n个数组或值与当前数组合并生成一个新数组, 原始数组不会被改变
 * @param {*} arr 原数组
 * @param {*} args 剩余参数
 * @returns 返回新数组
 */
function my_concat (arr, ...args) {
  let result = [...arr];
  args.forEach(item => {
    if (Array.isArray(item)) {
      result.push(...item);
    } else {
      result.push(item);
    }
  })
  return result;
}


/** slice
 * 返回一个由 begin 和 end 决定的原数组的浅拷贝, 原始数组不会被改变
 * @param {Array} arr 原数组
 * @param {number} begin 开始
 * @param {number} end 结束
 * @returns 返回新数组
 */
function my_slice (arr, begin, end) {
  if (arr.length === 0 || end === 0 || begin >= arr.length) {
    return [];
  }
  // begin不传相当于0
  begin = begin || 0;
  // end 不传，相当于数组长度
  end = end || arr.length;
  if (end < 0) {
    // end小于0时，修改end的值
    end = arr.length + end;
  }
  // 调整后的end值与begin进行对比
  if (end < begin) {
    return [];
  }
  let result = [];
  for (let i = begin; i < end; i++) {
    result.push(arr[i]);
  }
  return result;
}


/** flatten1 数组扁平化1
 * 取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中
 * @param {Array} arr 原数组
 * @returns 返回一个新数组
 */
function my_flatten (arr) {
  let result = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      result = result.concat(my_flatten(item));
    } else {
      result = result.concat(item);
    }
  })
  return result;
}


/** flatten2 数组扁平化2
 * 取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中
 * @param {Array} arr 原数组
 * @returns 返回一个新数组
 */
function my_flatten2 (arr) {
  // 拷贝一份
  let result = [...arr];
  while (result.some(item => Array.isArray(item))) {
    // concat([1,2],3); concat可以合并数组和值
    result = [].concat(...result);
  }
  return result;
}


/** chunk 数组分块
 * 将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组
 * @param {Array} arr 原数组
 * @returns 返回一个新数组
 */
function my_chunk (arr, size) {
  let result = [];
  let tmp = [];
  arr.forEach(item => {
    if (tmp.length === 0) {
      result.push(tmp);
    }
    // 引用相同
    tmp.push(item);
    if (tmp.length === size) {
      // 改变引用
      tmp = [];
    }
  })
  return result;
}


/** diffence 数组取差异
 * 得到当前数组arr1中所有不在arr2中的元素组成的数组(不改变原数组)
 * @param {Array} arr1 原数组1
 * @param {Array} arr2 原数组2
 * @returns 返回一个新数组
 */
function my_diffence (arr1 = [], arr2 = []) {
  if (arr1.length === 0) {
    return [];
  }
  if (arr2.length === 0) {
    // arr1.slice() 相当于arr1的浅拷贝
    return arr1.slice();
  }
  return arr1.filter(item => !arr2.includes(item));
}


/** pull 数组取差异
 * 删除原数组中与 args 相同的元素, 返回所有删除元素组成的新数组
 * @param {Array} arr 原数组
 * @param {...args} args 要从原数组中删除的元素
 * @returns 返回所有删除元素组成的新数组，并改变原数组arr
 */
function my_pull (arr, ...args) {
  // 保存要删除的元素
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    // 判断当前元素是否存在于 args 中
    if (args.includes(arr[i])) {
      // 将要被删除的元素保存起来
      result.push(arr[i]);
      // 删除当前元素
      arr.splice(i, 1);
      // 原数组删除一个元素后，下标改变，调整下标
      i--;
    }
  }
  return result;
}