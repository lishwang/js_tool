
function axios ({ method, url, params, data }) {
  // 方法转化大写
  method = method.toUpperCase();
  // 返回 promise
  return new Promise((resolve, reject) => {
    // 四步骤
    // 1、创建XML对象
    const xhr = new XMLHttpRequest();
    // 2、初始化
    // 处理 params 对象转换为 a=100&b=200 这种格式
    let str = '';
    for (let k in params) {
      str += `${k}=${params[k]}&`;
    }
    // 去掉最后一个 & 
    str = str.slice(0, -1);
    // open() 方法有三个常用的参数，参数一：请求方式、参数二：url、参数三：是否异步；
    xhr.open(method, url + '?' + str);
    // 3、发送
    if (method === 'POST' || method === 'PUT' || method === 'DELETE') {
      // Content-type mime类型设置（对于JSON格式的数据一般需要加一个Content-type请求头）
      // 设置请求头信息
      xhr.setRequestHeader('Content-type', 'application/json');
      // 设置请求体
      xhr.send(JSON.stringify(data));
    } else {
      xhr.send();
    }
    // 设置响应结果的类型为 JSON 格式
    xhr.responseType = 'json';
    // 4、处理结果
    xhr.onreadystatechange = function () {
      // 根据readyState属性值来判断请求是否完成，它有5个状态，只有为4时，表示请求完成；
      if (xhr.readyState === 4) {
        // 判断响应状态码
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve({
            status: xhr.status,
            message: xhr.statusText,
            body: xhr.response
          });
        } else {
          reject(new Error('请求失败，失败的状态码为' + xhr.status))
        }
      }
    }
  })
}