# for...in / for...of 区别

<!--
 * @Author: rich1e
 * @Date: 2022-07-11 10:49:31
 * @LastEditors: rich1e
 * @LastEditTime: 2022-08-01 16:49:10
-->

[[toc]]

## 结果不同

- for...in 遍历得到 key
- for...of 遍历得到 value

## 数据类型不同

- for...in 用于可枚举的数据
- for...of 用于可迭代的数据

## 什么是可枚举数据呢？

属性中 enumerable 是 true，就是可枚举的；

> `Object.getOwnPropertyDescriptors` 方法获取指定对象所有的自有属性的属性描述符。

## 什么是可迭代数据呢？[^1] [^2] [^3]

ES6 中引入了 iterable 类型，他们特点就是都拥有 [Symbol.iterator] 方法，包含他的对象被认为是可迭代的 iterable。
例如：Array / Set / Map / arguments / NodeList 都属于 iterable。

## for...in / Object.keys() 区别 [^4]

- for...in 可遍历原型链上扩展的属性，
- Object.keys() 只遍历自身属性

[^1]: [for in 和 for of 的区别](https://juejin.cn/post/6916058482231754765)
[^2]: [有了 for 循环 为什么还要 forEach？](https://juejin.cn/post/7018097650687803422)
[^3]: [for...in 和 for...of 有什么区别](https://juejin.cn/post/7104444342684614664)
[^4]: [for in 可遍历原型链上扩展的属性，Object.keys() 只遍历自身属性](https://www.cnblogs.com/chenguangliang/p/6678564.html)
