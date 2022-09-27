# instanceof

```js
/**
 * instanceof 判断左边的原型是否存在于右边的原型链中
 * 逐层往上查找原型，如果最终的原型为 null ，证明不存在原型链中，否则存在。
 *
 * @param {*} left 检查对象
 * @param {*} right 参考对象
 */
function _instanceof(left, right) {
  if (typeof left !== "object" || left === null) return false; // 基础类型一律为 false
  let proto = Object.getPrototypeOf(left); // 获得实例对象的原型，也就是 left.__proto__
  let prototype = right.prototype; // 获得构造函数的原型

  while (true) {
    if (proto === null) return false;
    if (proto === prototype) return true;
    proto = Object.getPrototypeOf(proto); // 没找到就把上一层拿过来，继续循环，再向上一层找
  }
}
```
