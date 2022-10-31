export function test () {
  // 向文档当中写入一个字符串
  document.write('测试自定义方法文件包');
  console.log('测试index.js文件打包后的效果');
}

// 导出一些方法，这些方法可以 通过 utils.方法名 的方式直接使用，前提是：打包后，引入 wls_utils.js 文件后
// 方法一：先导入，再导出
// import { my_map, my_reduce } from './数组方法/my_fun.js';
// export { my_map, my_reduce };

// 方法二：直接导入后导出
export { my_map, my_reduce } from './数组方法/my_fun.js';