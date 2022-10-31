/**
 * 这个文件内可以引入这些js文件内export导出的内容，然后打包，最后可以参考md文档将这些方法发布到npm上
 * 打包命令：npm run build:watch
 * 发布到npm上：按照md文档在控制台操作即可
 */
export function test () {
  // 向文档当中写入一个字符串
  document.write('测试自定义方法文件包');
  console.log('测试index.js文件打包后的效果');
}

// 导出一些方法，这些方法可以 通过 utils.方法名 的方式直接使用，前提是：打包后，引入 wls_utils.js 文件后
// 方法一：先导入，再导出
// import { my_map, my_reduce } from './数组方法/my_fun.js';
// export { my_map, my_reduce };

// 方法二：直接导入后导出（只引入部分方法，用于测试）
export { my_map, my_reduce } from './数组方法/my_fun.js';