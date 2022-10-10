# Promise & 异步编程

[TOC]

## 如何理解 Promise？它解决了什么问题？异步编程有哪些？

Promise 是异步编程的一种解决方案，比传统的异步解决方案【回调函数】和【事件】更合理、更强大，现已被 ES6 纳入进规范中。相比回调式的写法，Promise 的写法更为直观，并且能够在外层捕获异步函数的异常信息。

Promise 解决了回调地狱带来的负面作用，有以下几点：

- 代码臃肿
- 可读性和可维护性差
- 代码复用性差
- 容易滋生 bug
- 只能在回调里处理异常

异步编程，通常有以下几种：

1. callback
2. 事件监听
3. 发布订阅
4. Promise
5. Generator
6. Async/Await

> https://zhuanlan.zhihu.com/p/24444262
> https://zhuanlan.zhihu.com/p/57548254
> https://juejin.cn/post/6844903683524657166
> https://www.ruanyifeng.com/blog/2012/12/asynchronous%EF%BC%BFjavascript.html

## Promise 如何创建？常用的方法有哪些？它们的作用是什么？

```javascript
// 这两种方式都会返回一个 Promise 对象
new Promise(fn)
Promise.resolve(fn)
```

- Promise.resolve
- Promise.reject
- Promise.race
- Promise.prototype.then
- Promise.prototype.catch

## Promise 在事件循环中的执行过程是怎样的？

Promise在初始化时，传入的函数是同步执行的，然后注册 then 回调。注册完之后，继续往下执行同步代码，在这之前，then 中回调不会执行。同步代码块执行完毕后，才会在事件循环中检测是否有可用的 promise 回调，如果有，那么执行，如果没有，继续下一个事件循环。

关于 Promise 在事件循环中还有一个 微任务的概念（microtask），感兴趣的话可以看我这篇关于nodejs 时间循环的文章 [剖析nodejs的事件循环](https://juejin.cn/post/6844903621444763662)，虽然和浏览器端有些不同，但是Promise 微任务的执行时机相差不大。

## 能不能手写一个 Promise 的 polyfill？

> https://juejin.cn/post/6994594642280857630
> https://github.com/MarvinXu/understanding-promise/blob/master/promise.js









https://juejin.cn/post/6844903917696843789
https://juejin.cn/post/6844903625609707534#heading-7
https://juejin.cn/post/6978001532717367304
https://juejin.cn/post/6993296099331014669
https://juejin.cn/post/6844903621444763662
https://juejin.cn/post/6844903498362912775
https://juejin.cn/post/6844904077537574919
https://segmentfault.com/a/1190000023184981
https://juejin.cn/post/7007031572238958629
https://juejin.cn/post/6844903760217505805
http://www.ruanyifeng.com/blog/2015/05/async.html
https://juejin.cn/post/6844904036546641934#heading-11
https://juejin.cn/post/6844903625769091079
https://juejin.cn/post/6844903621360943118
https://juejin.cn/post/6913553116440821773
https://juejin.cn/post/6844903760280420366