---
author: rich1e
tags: ["daily"]
date: 2023-07-19 17:00:47
Last modified date: 2023-07-19 17:00
uuid: d096f9f9-5263-78bf-ca8e-0c7ed37ced7a
---

- 17:00 Vue子组件调用父组件的方法<br><br>1. 第一种方法是直接在子组件中通过this.$parent.event来调用父组件的方法;<br>2. 第二种方法是在子组件里用$emit向父组件触发一个事件，父组件监听这个事件就行了;<br>3. 第三种是父组件把方法传入子组件中，在子组件里直接调用这个方法;<br><br>Ref: https://aihongxin.com/9834.html<br>#Vue ^zcnd68
- 17:03 [Typescript: Why does `as unknown as x` work - Stack Overflow](https://stackoverflow.com/questions/69399211/typescript-why-does-as-unknown-as-x-work)<br>[写了3个月TypeScript，我学到了什么？-阿里云开发者社区](https://developer.aliyun.com/article/949643?userCode=okjhlpr5)<br>[对比理解Typescript中的as、问号与叹号 - 掘金](https://juejin.cn/post/6844904068951834632)<br>[TypeScript 中 as const 是什么 - 掘金](https://juejin.cn/post/7181833448464580645)<br>[类型断言 · TypeScript 入门教程](https://ts.xcatliu.com/basics/type-assertion.html)<br>#Typescript