# function.prototype.bind()

`bind` 函数的实现步骤：

- 判断调用对象是否为函数；
- 保存当前函数的引用，获取其余传入参数值；
- 创建一个函数返回；
- 函数内部使用 apply 来绑定函数调用，需要判断函数作为构造函数的情况，这个时候需要传入当前函数的 this 给 apply 调用，其余情况都传入指定的上下文对象；

```js
/**
 * @see https://github.com/mqyqingfeng/Blog/issues/12
 * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
 */
Function.prototype.bind = function (thisArg) {
  if (typeof this !== "function") {
    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");
  }

  var self = this;
  var args = Array.prototype.slice.call(arguments, 1);

  var fNOP = function () {};

  var fBound = function () {
    var bindArgs = Array.prototype.slice.call(arguments);
    return self.apply(this instanceof fNOP ? this : thisArg, args.concat(bindArgs));
  };

  fNOP.prototype = this.prototype;
  fBound.prototype = new fNOP();
  return fBound;
};
```
