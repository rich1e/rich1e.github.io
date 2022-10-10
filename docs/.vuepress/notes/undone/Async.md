# 理解 async / await

async / await 只是语法糖，最终会编译成 Promise。

```javascript
async function async1() {
  console.log('a')
  await async2()
  console.log('b')
}
async function async2() {
  console.log('c')
}

async1()

new Promise((resolve) => {
  console.log('d')
  resolve()
}).then(() => {
  console.log('e')
})
```

不同chrome版本表现不同，有以下两种情况：

- `a c d b e`
- `a c d e b`

首先说明：**最新ECMAScript规范下，第一种为正确表现**，下面解释原因。

最新ECMAScript规范中，`await`直接使用Promise.resolve()相同语义，也就是说，如果`await`后跟的是一个`Promise`，则直接返回`Promise`本身，如果不是，则使用`Promise.resolve`包裹后返回，上述代码执行过程可以简化理解为：

```javascript
console.log('a')
new Promise(resolve => {
  console.log('c')
  resolve()
}).then(() => {
  console.log('b')
})
new Promise((resolve) => {
  console.log('d')
  resolve()
}).then(() => {
  console.log('e')
})
```



ECMAScript 修改过 await 规范。

相关文档：

[^1]: [一次弄懂Event Loop（彻底解决此类面试问题）](https://juejin.cn/post/6844903764202094606#heading-19)
[^2]: [async/await 在chrome 环境和 node 环境的 执行结果不一致，求解？](https://www.zhihu.com/question/268007969)
[^3]: [复杂异步嵌套逻辑分析 ](https://github.com/logan70/Blog/issues/35)