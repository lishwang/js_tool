
// 引入 nodejs 内置模块 path
const path = require('path');

module.exports = {
  // 模式，生产模式会对代码做压缩；开发模式会保留注释和缩进
  mode: 'development',
  // 打包的入口文件
  entry: './src/index.js',
  // 出口
  output: {
    // 打包后生成的文件夹路径
    path: path.resolve(__dirname, 'dist'),
    // 打包后生成的文件
    filename: 'wls_utils.js',
    // 向外暴露的对象的名称，打包后，引入 wls_utils.js 文件后，可以在全局直接使用 utils ，里面包含本次打包的入口文件内的导出的所有方法
    library: 'utils',
    // 打包生成umd的库，模块导入的时候可以通过esm（es6）/commonjs（common）/requirejs（amd）的语法引入该打包后的文件
    libraryTarget: 'umd',
  }
}