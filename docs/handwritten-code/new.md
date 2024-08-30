# new

```js
/**
 * @see https://segmentfault.com/a/1190000040870632
 * @param {*} fn 构造函数
 * @param  {...any} args 函数参数
 */
const _new = function (fn, ...args) {
  // 创建一个空对象
  const obj = {};
  // 将空对象的原型对象 __proto__，指向构造函数的 prototype 属性
  obj.__proto__ = fn.prototype; // Object.setPrototypeOf(obj, fn.prototype);
  // 改变构造函数的上下文（this）,并将剩余的参数传入
  const res = fn.apply(obj, args);
  // 如果构造函数返回非空对象，则返回 res；否则，返回刚创建的新对象 obj
  return res instanceof Object ? res : obj;
};
```
