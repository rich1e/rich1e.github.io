# JavaScript 基础

<!--
 * @Author: rich1e
 * @Date: 2022-07-11 10:51:00
 * @LastEditors: rich1e
 * @LastEditTime: 2022-07-22 14:04:30
-->

[[toc]]

## call / apply / bind

call 函数的实现步骤：

- 判断调用对象是否为函数；
- 判断传入对象的类型、对象是否存在，如果不存在，则设置为 window；
- 将函数作为传入对象的一个属性；
- 使用传入对象来调用这个函数，并保存返回结果；
- 删除传入对象刚才新增的属性；
- 返回结果；

```js
/**
 * @param thisArg 代理对象
 * @see https://github.com/mqyqingfeng/Blog/issues/11
 * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call
 */
Function.prototype.call = function (thisArg, ...args) {
  // this 指向 call 函数的调用对象，如果不是 function，则提示错误
  if (typeof this !== "function") {
    throw new TypeError("not a function");
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

apply 函数的实现步骤与 call 一样，仅传参不一样

```js
/**
 * @see https://github.com/mqyqingfeng/Blog/issues/11
 * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
 */
Function.prototype.apply = function (context, arr) {
  var context = Object(context) || window;
  context.fn = this;

  var result;
  if (!arr) {
    result = context.fn();
  } else {
    var args = [];
    for (var i = 0, len = arr.length; i < len; i++) {
      args.push("arr[" + i + "]");
    }
    result = eval("context.fn(" + args + ")");
  }

  delete context.fn;
  return result;
};
```

bind 函数的实现步骤：

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

## new

```js
/**
 * new
 * 让实例对象可以访问到私有属性
 * 让实例对象可以访问构造函数原型 (fn.prototype) 所在原型链上的属性
 * 考虑构造函数有返回值的情况
 *
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

## Object.create()

使用构造函数创建

```js
/**
 * @see https://cloud.tencent.com/developer/article/1832376
 */
const createObject = function (proto, propertiesObject) {
  if (typeof proto !== "object" && proto !== null) {
    throw new Error("the first param must be an object or null");
  }
  if (typeof propertiesObject === null) {
    throw "TypeError";
  }
  // 创建一个空的构造函数
  function Fn() {}
  // Fn.prototype 属性指向参数对象 proto，继承 proto 的属性
  Fn.prototype = proto;
  // 返回 Fn 的实例
  const obj = new Fn();

  // 处理传参 null 的情况
  if (proto === null) {
    obj.__proto__ = proto;
  }

  if (propertiesObject) {
    Object.defineProperties(obj, propertiesObject);
  }
  return obj;
};
```

使用空对象创建

```js
Object.create = function (proto, propertiesObject) {
  if (typeof proto != "object" && proto !== null) {
    throw new Error("the first param must be an object or null");
  }
  if (typeof propertiesObject === null) {
    throw "TypeError";
  }
  let obj = {};
  obj.__proto__ = proto;
  if (propertiesObject) {
    Object.defineProperties(obj, propertiesObject);
  }
  return obj;
};
```

## instanceOf

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
  let proto = Object.getPrototypeOf(left); // 获取对象的原型

  while (true) {
    if (proto === null) return false;
    if (proto === right.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}
```

## JS 原型 / 原型链

![image-20211209004545089](@images/workspace/jsobj_full.jpg)

[英文原文：Javascript Object Layout](http://www.mollypages.org/tutorials/js.mp)

[中文译文：Javascript Object Layout](https://clarkdo.js.org/javascript/2014/08/21/17/)

```js
const fn = function () {},
  obj = {},
  str = "",
  num = 0;

// 所有对象都有__proto__属性
console.log(fn.__proto__); // => Function(...)
console.log(obj.__proto__); // => Object{...}
console.log(str.__proto__); // => String{...}
console.log(num.__proto__); // => Number{...}

// 只有函数对象才有 prototype 属性
console.log(fn.prototype); // => Function(...)
console.log(obj.prototype); // => undefined
console.log(str.prototype); // => undefined
console.log(num.prototype); // => undefined

function Foo() {}
const f = new Foo();

// function 有构造函数，
Foo.constructor === Function;

// Function 是它自己的构造函数
Function.constructor === Function;

// f 的隐式原型，指向构造函数的 prototype 属性
f.__proto__ === Foo.prototype;

// 构造函数的隐式原型指向 Function 的 prototype 属性
Foo.__proto__ === Function.prototype;

// 原型链的顶端是 Object.prototype 对象
f.__proto__.__proto__ === Object.prototype;
Foo.__proto__.__proto__ === Object.prototype;
Function.prototype.__proto__ == Object.prototype;

// Object.prototype 的原型，最终指向null
Object.prototype.__proto__ == null;

// __proto__ (隐式原型 implicit prototype link)
// prototype (显示原型 explicit prototype property)
// 任何对象的隐式原型，指向创建这个对象的构造函数的 prototype 属性
```

## Promise

::: details 点击查看代码

```js
const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

function MyPromise(fn) {
  // 保存初始化状态
  var self = this;

  // 初始化状态
  this.state = PENDING;

  // 用于保存 resolve 或者 rejected 传入的值
  this.value = null;

  // 用于保存 resolve 的回调函数
  this.resolvedCallbacks = [];

  // 用于保存 reject 的回调函数
  this.rejectedCallbacks = [];

  // 状态转变为 resolved 方法
  function resolve(value) {
    // 判断传入元素是否为 Promise 值，如果是，则状态改变必须等待前一个状态改变后再进行改变
    if (value instanceof MyPromise) {
      return value.then(resolve, reject);
    }

    // 保证代码的执行顺序为本轮事件循环的末尾
    setTimeout(() => {
      // 只有状态为 pending 时才能转变，
      if (self.state === PENDING) {
        // 修改状态
        self.state = RESOLVED;

        // 设置传入的值
        self.value = value;

        // 执行回调函数
        self.resolvedCallbacks.forEach((callback) => {
          callback(value);
        });
      }
    }, 0);
  }

  // 状态转变为 rejected 方法
  function reject(value) {
    // 保证代码的执行顺序为本轮事件循环的末尾
    setTimeout(() => {
      // 只有状态为 pending 时才能转变
      if (self.state === PENDING) {
        // 修改状态
        self.state = REJECTED;

        // 设置传入的值
        self.value = value;

        // 执行回调函数
        self.rejectedCallbacks.forEach((callback) => {
          callback(value);
        });
      }
    }, 0);
  }

  // 将两个方法传入函数执行
  try {
    fn(resolve, reject);
  } catch (e) {
    // 遇到错误时，捕获错误，执行 reject 函数
    reject(e);
  }
}

MyPromise.prototype.then = function (onResolved, onRejected) {
  // 首先判断两个参数是否为函数类型，因为这两个参数是可选参数
  onResolved =
    typeof onResolved === "function"
      ? onResolved
      : function (value) {
          return value;
        };

  onRejected =
    typeof onRejected === "function"
      ? onRejected
      : function (error) {
          throw error;
        };

  // 如果是等待状态，则将函数加入对应列表中
  if (this.state === PENDING) {
    this.resolvedCallbacks.push(onResolved);
    this.rejectedCallbacks.push(onRejected);
  }

  // 如果状态已经凝固，则直接执行对应状态的函数

  if (this.state === RESOLVED) {
    onResolved(this.value);
  }

  if (this.state === REJECTED) {
    onRejected(this.value);
  }
};
```

:::
