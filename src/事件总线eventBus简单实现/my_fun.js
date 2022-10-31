
// 包含所有功能的事件总线对象
const eventBus = {
  // 保存所有的事件处理程序以及事件类型
  callbacks: {
    // login: [fn, fn],
  }
}

// 事件绑定
eventBus.on = function (type, callback) {
  if (this.callbacks[type]) {
    this.callbacks[type].push(callback);
  } else {
    this.callbacks[type] = [callback];
  }
}

// 事件触发
eventBus.emit = function (type, data) {
  if (this.callbacks[type] && this.callbacks[type].length > 0) {
    this.callbacks[type].forEach(callback => {
      callback(data);
    });
  }
}

// 事件解绑
eventBus.off = function (type) {
  if (type) {
    delete this.callbacks[type]
  } else {
    this.callbacks = {}
  }
}