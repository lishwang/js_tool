
/** addEventListener 封装事件委托方法（指定可以触发事件处理程序的子元素）
 * 
 * @param {string|dom} el 父元素节点或选择器
 * @param {string} eventType 事件类型
 * @param {function} callback 事件回调（事件处理程序）
 * @param {string|undefined} selector 指定可以触发事件处理程序的子元素（要事件委托的子元素）
 */
function my_addEventListener (el, eventType, callback, selector) {
  if (typeof el === 'string') {
    // 如果 el 类型为字符串，则转换为元素节点对象
    el = document.querySelector(el);
  }
  // 事件绑定（都是给父元素绑定事件）
  if (!selector) {
    // 若没有传递要绑定事件的子元素选择器，则给 el 元素绑定事件
    el.addEventListener(eventType, callback);
  } else {
    // 事件委托
    el.addEventListener(eventType, function (e) {
      // 获取当前点击的子元素
      const target = e.target;
      if (target.matches(selector)) {
        // 如果 当前点击的子元素对象 与 传递进来要事件委托的子元素选择器 匹配，则执行传递的回调函数，否则什么都不执行
        callback.call(target, e);
      }
    });
  }
}