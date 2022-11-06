当前文件使用如此复杂的目的：

```
在html文件内直接通过script标签的方式进行引入的缺点：
1、兼容性问题；
2、不能对npm安装的模块进行导入使用；
因此在项目中需要用babel进行转换；

练习babel打包，ES6模块化的使用；
使用babel将ES6比较新的特性的语法转换成浏览器可以识别的ES5的语法，然后在对代码进行打包，形成最终的一个单独的文件，然后在页面进行引入即可使用这些js文件的内容；
```



运行当前文件内的代码步骤如下：

```
# 初始化npm
1、npm init -y

# 安装babel工具
2、npm i babel-cli babel-preset-env browserify -D

# 使用babel工具将代码转换成ES5语法的代码
3、npx babel src/js -d dist/js --presets=babel-preset-env

# 安装打包工具（类似于webpack，无需配置）
4、npx browserify dist/js/app.js -o dist/bundle.js

# 安装jquery
5、npm i jquery
```

package.json 文件安装内容如下：

```
{
  "name": "ES6_module",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-preset-env": "^1.7.0",
    "browserify": "^16.5.1"
  },
  "dependencies": {
    "jquery": "^3.5.1"
  }
}

```

打包文件的过程解释

```
1. 安装工具 npm i babel-cli babel-preset-env browserify -D
    babel-cli 是babel的命令行工具；
    babel-preset-env 是一个预设包，能够把最新的ES特性转换成ES5的语法；
    browserify 是一个打包工具，不用配置，在项目中一般使用webpack；
2. 编译 npx babel src/js -d dist/js --presets=babel-preset-env
    src/js 要被babel语法转换的文件；
    dist/js 被babel语法转换后存在哪个文件夹下
     --presets=babel-preset-env babel的传参，表示预设，一般写在babel的配置文件内，也可在命令行传参
3. 打包 npx browserify dist/js/app.js -o dist/bundle.js
    dist/js/app.js 打包的入口文件；
    dist/bundle.js 打包后输出的文件存放位置；
```

