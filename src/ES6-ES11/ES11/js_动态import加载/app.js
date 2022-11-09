// 静态 import 导入文件
// import * as m1 from "./hello.js";

// 获取元素
const btn = document.getElementById('btn');

btn.onclick = function () {
    /**
     * import('文件路径') 函数，动态 import 引入文件，返回值是一个 promise 对象，
     * 这个 promise 成功的值，就是动态导入文件暴露的内容；
     */
    import('./hello.js').then(module => {
        module.hello();
    });
}