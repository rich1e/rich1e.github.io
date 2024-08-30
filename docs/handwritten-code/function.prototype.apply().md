# function.prototype.apply()

`apply` 函数的实现步骤与 `call` 一样，仅传参不一样

```js
/**
 * @see https://github.com/mqyqingfeng/Blog/issues/11
 * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
 */
Function.prototype.apply = function (thisArg, args) {
  // this 指向 call 函数的调用对象，如果不是 function，则提示错误
  if (typeof this !== "function") {
    throw new Error("not a function");
  }

  thisArg = thisArg ? Object(thisArg) : window;
  thisArg.fn = this;

  let result;
  if (!args) {
    result = thisArg.fn();
  } else {
    const _args = [];
    for (let i = 0, len = args.length; i < len; i++) {
      _args.push("args[" + i + "]");
    }
    result = eval("thisArg.fn(" + _args + ")");
  }

  delete thisArg.fn;
  return result;
};
```
