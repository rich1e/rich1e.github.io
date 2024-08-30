# JS 原型 / 原型链

<!--
 * @Author: rich1e
 * @Date: 2022-07-11 10:51:00
 * @LastEditors: rich1e
 * @LastEditTime: 2022-09-27 12:47:09
-->

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
