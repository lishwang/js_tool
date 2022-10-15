/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["utils"] = factory();
	else
		root["utils"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"my_map\": () => (/* reexport safe */ _my_fun_js__WEBPACK_IMPORTED_MODULE_0__.my_map),\n/* harmony export */   \"my_reduce\": () => (/* reexport safe */ _my_fun_js__WEBPACK_IMPORTED_MODULE_0__.my_reduce),\n/* harmony export */   \"test\": () => (/* binding */ test)\n/* harmony export */ });\n/* harmony import */ var _my_fun_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../数组方法/my_fun.js */ \"./数组方法/my_fun.js\");\nfunction test () {\r\n  // 向文档当中写入一个字符串\r\n  document.write('测试自定义方法文件包');\r\n  console.log('测试index.js文件打包后的效果');\r\n}\r\n\r\n// 导出一些方法，这些方法可以 通过 utils.方法名 的方式直接使用，前提是：打包后，引入 wls_utils.js 文件后\r\n// 方法一：先导入，再导出\r\n// import { my_map, my_reduce } from '../数组方法/my_fun.js';\r\n// export { my_map, my_reduce };\r\n\r\n// 方法二：直接导入后导出\r\n\n\n//# sourceURL=webpack://utils/./src/index.js?");

/***/ }),

/***/ "./数组方法/my_fun.js":
/*!************************!*\
  !*** ./数组方法/my_fun.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"my_map\": () => (/* binding */ my_map),\n/* harmony export */   \"my_reduce\": () => (/* binding */ my_reduce)\n/* harmony export */ });\n\r\n/** map\r\n * 返回一个由回调函数的返回值组成的新数组\r\n * @param {*} arr 原数组\r\n * @param {*} callback 回调函数\r\n * @returns 创建一个新数组并返回这个新数组\r\n */\r\nfunction my_map (arr, callback) {\r\n  let result = [];\r\n  for (let i = 0; i < arr.length; i++) {\r\n    let res = callback(arr[i], i);\r\n    result.push(res);\r\n  }\r\n  return result;\r\n}\r\n\r\n\r\n/** reduce\r\n * 从左到右为每个数组元素执行一次回调函数，并把上次回调函数的返回值放在一个暂存器中传给下次回调函数，并返回最后一次回调函数的返回值\r\n * @param {*} arr 原数组\r\n * @param {*} callback 回调函数\r\n * @param {*} initValue 初始值\r\n * @returns 返回最终运行结果，类型未知\r\n */\r\nfunction my_reduce (arr, callback, initValue) {\r\n  // 初始化返回值变量\r\n  let result = initValue;\r\n  for (let i = 0; i < arr.length; i++) {\r\n    // 执行回调，并存储当前回调的结果\r\n    result = callback(result, arr[i]);\r\n  }\r\n  // 返回最终结果\r\n  return result;\r\n}\r\n\r\n\r\n/** filter\r\n * 将所有在过滤函数中返回 true 的数组元素放进一个新数组中并返回\r\n * @param {*} arr 原数组\r\n * @param {*} callback 回调函数\r\n * @returns 创建一个新数组并返回这个新数组\r\n */\r\nfunction my_filter (arr, callback) {\r\n  // 初始化返回值变量\r\n  let result = [];\r\n  for (let i = 0; i < arr.length; i++) {\r\n    // 执行回调，并存储当前回调的结果\r\n    let flag = callback(arr[i], i);\r\n    flag && result.push(arr[i]);\r\n  }\r\n  // 返回最终结果\r\n  return result;\r\n}\r\n\r\n\r\n/** find\r\n * 找到第一个满足测试函数的元素并返回那个元素的值，如果找不到，则返回 undefined\r\n * @param {*} arr 原数组\r\n * @param {*} callback 回调函数\r\n * @returns 返回数组中一个元素，或者undefined\r\n */\r\nfunction my_find (arr, callback) {\r\n  // 初始化返回值变量\r\n  for (let i = 0; i < arr.length; i++) {\r\n    // 执行回调，并存储当前回调的结果\r\n    let flag = callback(arr[i], i);\r\n    if (flag) {\r\n      return arr[i];\r\n    }\r\n  }\r\n  // 返回最终结果\r\n  return;\r\n}\r\n\r\n\r\n/** findIndex\r\n * 找到第一个满足测试函数的元素并返回那个元素的索引，如果找不到，则返回 -1\r\n * @param {*} arr 原数组\r\n * @param {*} callback 回调函数\r\n * @returns 返回数组中一个元素的下标，或者-1\r\n * 注意：findIndex 传入一个回调函数；indexOf 传入一个数组的元素；两者返回值相同\r\n */\r\nfunction my_findIndex (arr, callback) {\r\n  // 初始化返回值变量\r\n  let result = -1;\r\n  for (let i = 0; i < arr.length; i++) {\r\n    // 执行回调，并存储当前回调的结果\r\n    let flag = callback(arr[i], i);\r\n    if (flag) {\r\n      result = i;\r\n      break;\r\n    }\r\n  }\r\n  // 返回最终结果\r\n  return result;\r\n}\r\n\r\n\r\n/** every\r\n * 如果数组中的每个元素都满足测试函数，则返回 true，否则返回 false\r\n * @param {*} arr 原数组\r\n * @param {*} callback 回调函数\r\n * @returns 返回布尔值\r\n */\r\nfunction my_every (arr, callback) {\r\n  for (let i = 0; i < arr.length; i++) {\r\n    // 执行回调，并存储当前回调的结果\r\n    let flag = callback(arr[i], i);\r\n    if (!flag) {\r\n      return false;\r\n    }\r\n  }\r\n  // 返回最终结果\r\n  return true;\r\n}\r\n\r\n\r\n/** some\r\n * 如果数组中至少有一个元素满足测试函数，则返回 true，否则返回 false\r\n * @param {*} arr 原数组\r\n * @param {*} callback 回调函数\r\n * @returns 返回布尔值\r\n */\r\nfunction my_some (arr, callback) {\r\n  for (let i = 0; i < arr.length; i++) {\r\n    // 执行回调，并存储当前回调的结果\r\n    let flag = callback(arr[i], i);\r\n    if (flag) {\r\n      return true;\r\n    }\r\n  }\r\n  // 返回最终结果\r\n  return false;\r\n}\r\n\r\n\r\n/** 数组去重1\r\n * 结合数组的indexOf，本质上进行双重遍历，效率差\r\n * @param {*} arr 原数组\r\n * @returns 返回新数组\r\n */\r\nfunction my_unique (arr) {\r\n  let result = [];\r\n  for (let i = 0; i < arr.length; i++) {\r\n    if (result.indexOf(arr[i]) === -1) {\r\n      result.push(arr[i]);\r\n    }\r\n  }\r\n  // 返回最终结果\r\n  return result;\r\n}\r\n\r\n\r\n/** 数组去重2\r\n * 结合数组的filter和indexOf方法，本质上进行双重遍历，效率差\r\n * @param {*} arr 原数组\r\n * @returns 返回新数组\r\n */\r\nfunction my_unique2 (arr) {\r\n  let result = arr.filter((item, index, current_arr) => {\r\n    return current_arr.indexOf(item) === index;\r\n  })\r\n  // 返回最终结果\r\n  return result;\r\n}\r\n\r\n\r\n/** 数组去重3\r\n * 结合对象的特性，本质上进行一次遍历，效率比较高\r\n * @param {*} arr 原数组\r\n * @returns 返回新数组\r\n */\r\nfunction my_unique3 (arr) {\r\n  let result = [];\r\n  let obj = {};\r\n  arr.forEach(item => {\r\n    if (obj[item] === undefined) {\r\n      // 将item作为下标存储到obj中，并赋值为true\r\n      obj[item] = true;\r\n      result.push(item);\r\n    }\r\n  })\r\n  // 返回最终结果\r\n  return result;\r\n}\r\n\r\n\r\n/** 数组去重4\r\n * 用es6的set集合，本质上进行一次遍历，效率计较高\r\n * @param {*} arr 原数组\r\n * @returns 返回新数组\r\n */\r\nfunction my_unique4 (arr) {\r\n  // 将set集合转换为真实数组1\r\n  // return [...new Set(arr)];\r\n  // 将set集合转换为真实数组2\r\n  return Array.from(new Set(arr));\r\n}\r\n\r\n\r\n/** concat\r\n * 将n个数组或值与当前数组合并生成一个新数组, 原始数组不会被改变\r\n * @param {*} arr 原数组\r\n * @param {*} args 剩余参数\r\n * @returns 返回新数组\r\n */\r\nfunction my_concat (arr, ...args) {\r\n  let result = [...arr];\r\n  args.forEach(item => {\r\n    if (Array.isArray(item)) {\r\n      result.push(...item);\r\n    } else {\r\n      result.push(item);\r\n    }\r\n  })\r\n  return result;\r\n}\r\n\r\n\r\n/** slice\r\n * 返回一个由 begin 和 end 决定的原数组的浅拷贝, 原始数组不会被改变\r\n * @param {Array} arr 原数组\r\n * @param {number} begin 开始\r\n * @param {number} end 结束\r\n * @returns 返回新数组\r\n */\r\nfunction my_slice (arr, begin, end) {\r\n  if (arr.length === 0 || end === 0 || begin >= arr.length) {\r\n    return [];\r\n  }\r\n  // begin不传相当于0\r\n  begin = begin || 0;\r\n  // end 不传，相当于数组长度\r\n  end = end || arr.length;\r\n  if (end < 0) {\r\n    // end小于0时，修改end的值\r\n    end = arr.length + end;\r\n  }\r\n  // 调整后的end值与begin进行对比\r\n  if (end < begin) {\r\n    return [];\r\n  }\r\n  let result = [];\r\n  for (let i = begin; i < end; i++) {\r\n    result.push(arr[i]);\r\n  }\r\n  return result;\r\n}\r\n\r\n\r\n/** flatten1 数组扁平化1\r\n * 取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中\r\n * @param {Array} arr 原数组\r\n * @returns 返回一个新数组\r\n */\r\nfunction my_flatten (arr) {\r\n  let result = [];\r\n  arr.forEach(item => {\r\n    if (Array.isArray(item)) {\r\n      result = result.concat(my_flatten(item));\r\n    } else {\r\n      result = result.concat(item);\r\n    }\r\n  })\r\n  return result;\r\n}\r\n\r\n\r\n/** flatten2 数组扁平化2\r\n * 取出嵌套数组(多维)中的所有元素放到一个新数组(一维)中\r\n * @param {Array} arr 原数组\r\n * @returns 返回一个新数组\r\n */\r\nfunction my_flatten2 (arr) {\r\n  // 拷贝一份\r\n  let result = [...arr];\r\n  while (result.some(item => Array.isArray(item))) {\r\n    // concat([1,2],3); concat可以合并数组和值\r\n    result = [].concat(...result);\r\n  }\r\n  return result;\r\n}\r\n\r\n\r\n/** chunk 数组分块\r\n * 将数组拆分成多个 size 长度的区块，每个区块组成小数组,整体组成一个二维数组\r\n * @param {Array} arr 原数组\r\n * @returns 返回一个新数组\r\n */\r\nfunction my_chunk (arr, size) {\r\n  let result = [];\r\n  let tmp = [];\r\n  arr.forEach(item => {\r\n    if (tmp.length === 0) {\r\n      result.push(tmp);\r\n    }\r\n    // 引用相同\r\n    tmp.push(item);\r\n    if (tmp.length === size) {\r\n      // 改变引用\r\n      tmp = [];\r\n    }\r\n  })\r\n  return result;\r\n}\r\n\r\n\r\n/** diffence 数组取差异\r\n * 得到当前数组arr1中所有不在arr2中的元素组成的数组(不改变原数组)\r\n * @param {Array} arr1 原数组1\r\n * @param {Array} arr2 原数组2\r\n * @returns 返回一个新数组\r\n */\r\nfunction my_diffence (arr1 = [], arr2 = []) {\r\n  if (arr1.length === 0) {\r\n    return [];\r\n  }\r\n  if (arr2.length === 0) {\r\n    // arr1.slice() 相当于arr1的浅拷贝\r\n    return arr1.slice();\r\n  }\r\n  return arr1.filter(item => !arr2.includes(item));\r\n}\r\n\r\n\r\n/** pull 数组取差异\r\n * 删除原数组中与 args 相同的元素, 返回所有删除元素组成的新数组\r\n * @param {Array} arr 原数组\r\n * @param {...args} args 要从原数组中删除的元素\r\n * @returns 返回所有删除元素组成的新数组，并改变原数组arr\r\n */\r\nfunction my_pull (arr, ...args) {\r\n  // 保存要删除的元素\r\n  let result = [];\r\n  for (let i = 0; i < arr.length; i++) {\r\n    // 判断当前元素是否存在于 args 中\r\n    if (args.includes(arr[i])) {\r\n      // 将要被删除的元素保存起来\r\n      result.push(arr[i]);\r\n      // 删除当前元素\r\n      arr.splice(i, 1);\r\n      // 原数组删除一个元素后，下标改变，调整下标\r\n      i--;\r\n    }\r\n  }\r\n  return result;\r\n}\n\n//# sourceURL=webpack://utils/./%E6%95%B0%E7%BB%84%E6%96%B9%E6%B3%95/my_fun.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});