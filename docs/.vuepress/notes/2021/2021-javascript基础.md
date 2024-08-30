# Javascript 基础

[TOC]



## 背景与介绍

**JavaScript (** **JS** ) 是一种具有[函数优先](https://developer.mozilla.org/zh-CN/docs/Glossary/First-class_Function)的轻量级，解释型或即时编译型的编程语言。虽然它是作为开发Web 页面的脚本语言而出名的，但是它也被用到了很多[非浏览器环境](https://en.wikipedia.org/wiki/JavaScript#Uses_outside_Web_pages)中，例如 [Node.js](https://nodejs.org/)、 [Apache CouchDB](https://couchdb.apache.org/) 和 [Adobe Acrobat](https://www.adobe.com/devnet/acrobat/javascript.html)。JavaScript 是一种[基于原型编程](https://developer.mozilla.org/zh-CN/docs/Glossary/Prototype-based_programming)、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格。

JavaScript 的标准是 [ECMAScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Language_Resources) 。截至 2012 年，所有的[现代浏览器](https://kangax.github.io/compat-table/es5/)都完整的支持 ECMAScript 5.1，旧版本的浏览器至少支持 ECMAScript 3 标准。2015年6月17日，[ECMA国际组织](https://www.ecma-international.org/)发布了 ECMAScript 的第六版，该版本正式名称为 ECMAScript 2015，但通常被称为 ECMAScript 6 或者 ES6。自此，ECMAScript 每年发布一次新标准。本文档目前覆盖了最新 ECMAScript 的草案，也就是 [ECMAScript2020](https://tc39.github.io/ecma262/)。

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript

JavaScript运行在网页的客户端，能被用来设计和编程网页在事件发生时的行为。JavaScript不仅易学而且强大，因此广泛用于对网页的控制。

与流行的误解相反，JavaScript 并不是“解释性 Java”。简单来说，JavaScript 是一个动态脚本语言，支持 [基于原型的](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Details_of_the_Object_Model#class-based_vs._prototype-based_languages) 对象构造。其基本语法被设计地与 Java 和 C++ 接近，来减少学习语言所需要的新概念。语言结构，如条件语句（if）、循环（for，while）、分支（switch）、异常捕获（try...catch）等和这些语言一致或者很接近。

JavaScript 既是一个 [面向过程的语言](http://en.wikipedia.org/wiki/Procedural_programming) 又是一个 [面向对象的语言 (en-US)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects)。在 JavaScript 中，通过**在运行时**给空对象附加方法和属性来创建对象，与编译语言如 C++ 和 Java 中常见的通过语法来定义类相反。对象构造后，它可以用作是创建相似对象的原型。

JavaScript 的动态特性包括运行时构造对象、可变参数列表、函数变量、动态脚本执行（通过 `eval`）、对象内枚举（通过 `for ... in`）和源码恢复（JavaScript 程序可以将函数反编译回源代码）。

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/About_JavaScript

## 数据类型、表达式与运算符

[Nice！JavaScript基础语法知识都在这儿了](https://juejin.cn/post/6930595674371457037)

## 流程控制、循环与错误处理

## 函数、闭包和作用域

```javascript
// 通过 function 声明函数
function foo() {
  console.log('this function')
}

// 函数表达式
var bar = function() {
  console.log('this function')
}

// 自执行函数
(function() {
  console.log('this function')
})()

!function() {
  console.log('this function')
}()

(function(){
   console.log('this function')
}).call(this)
```

## 属性、对象与原型

[面不面试的，你都得懂原型和原型链](https://juejin.cn/post/6934498361475072014)

## Promise[^8]

## 模块与继承

> https://www.jianshu.com/p/ef91ab8d6199
> https://www.jianshu.com/p/4b014d85e33d
> https://tsejx.github.io/javascript-guidebook/object-oriented-programming/object-creation/the-constructor-pattern/
> https://juejin.cn/post/6934498361475072014

## JS底层实现及手写代码

### [new操作符底层做了什么？](/Users/yuqigong/Dropbox/Apps/Editorial/md/new操作符底层做了什么.md)





## 参考

[^8]: [Promise & 异步编程](/Users/yuqigong/Dropbox/Apps/Editorial/md/2021-Promise&异步编程.md)





[一文带你彻底搞懂JavaScript原型链](https://juejin.cn/post/6844903893520875527)

