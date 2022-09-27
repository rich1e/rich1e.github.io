# function.prototype.call()

`call` 函数的实现步骤：

- 判断调用对象是否为函数；
- 判断传入对象的类型、对象是否存在，如果不存在，则设置为 `window`；
- 将函数作为传入对象的一个属性；
- 使用传入对象来调用这个函数，并保存返回结果；
- 删除传入对象刚才新增的属性；
- 返回结果；

```js
/**
 * @param thisArg 代理对象，必须是一个函数
 * @param args 参数
 * @see https://github.com/mqyqingfeng/Blog/issues/11
 * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call
 */
Function.prototype.call = function (thisArg, ...args) {
  // this 指向 call 函数的调用对象，如果不是 function，则提示错误
  if (typeof this !== "function") {
    throw new Error("not a function");
  }

  // 注意：非严格模式下,
  // 指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中就是 window 对象)
  // 值为原始值(数字，字符串，布尔值)的 this 会指向该原始值的自动包装对象(用 Object() 转换）
  thisArg = thisArg ? Object(thisArg) : window;

  /**
   * 创建唯一的值，防止 thisArg 对象的属性名称被覆盖
   * @see https://github.com/mqyqingfeng/Blog/issues/11#issuecomment-888871162
   */
  let fn = Symbol();

  // this 是一个 function 函数
  // 将该函数挂载到 thisArg 对象
  thisArg[fn] = this;

  // 执行 thisArg 对象的 fn 方法，改变 this 的指向
  // 函数可以有返回值
  let result = thisArg.fn(...args);

  // 删除 fn 属性
  delete thisArg[fn];

  return result;
};
```
