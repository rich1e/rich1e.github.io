# Vue 3.0 经验总结

[[toc]]

## Vue 3.0 的实现原理

模板编译+数据劫持+发布订阅+观察者

- https://zhuanlan.zhihu.com/p/37131046
- https://juejin.cn/post/6844903605414133773
- https://www.cnblogs.com/ainyi/p/13447831.html
- https://juejin.cn/post/6844903965180575751

## Vue 3.0 & hooks

Composition API

- https://segmentfault.com/a/1190000040144197
- https://zhuanlan.zhihu.com/p/363140788
- https://juejin.cn/post/6946387745208172558
- https://github.com/vuejs/rfcs/issues/55
- https://medium.com/@s.molinari/templating-separation-of-concerns-or-separation-of-technology-or-something-else-123a3d41f0b4

## Ref & Reactive 区别

- ref 可以声明任意类型的响应数据，reactive 只可以声明对象类型的响应数据；
- ref 声明的对象类型数据，不会对内部属性监听；
- ref 的本质是通过 reactive 创建，`Ref(10) => Reactive({ value:10 })`；
- ref 声明的数据可以省略 value，直接在模板上调用；在方法中修改变量的值需要赋值给 value 才能修改成功；
- reactive 声明的数据在模板使用必须写全，不然显示整个数据；
- 当 ref 作为 reactive 对象的 property 被访问或修改时，也将自动解套 value 值，其行为类似普通属性；

```markdown
https://www.jianshu.com/p/00bc530ab72d
https://medium.com/i-am-mike/vue-3-ref-%E8%B7%9F-reactive-%E6%88%91%E8%A9%B2%E6%80%8E%E9%BA%BC%E9%81%B8-2fb6b6735a3c
https://juejin.cn/post/6860349065742745613
https://www.weirshi.com/framework/Vue/3.x/ref,reactive.html#
https://juejin.cn/post/6976611660161089543
```

## Vue 3.0 生命周期

| 选项式 API        | Hook inside `setup` |
| ----------------- | ------------------- |
| `beforeCreate`    | Not needed\*        |
| `created`         | Not needed\*        |
| `beforeMount`     | `onBeforeMount`     |
| `mounted`         | `onMounted`         |
| `beforeUpdate`    | `onBeforeUpdate`    |
| `updated`         | `onUpdated`         |
| `beforeUnmount`   | `onBeforeUnmount`   |
| `unmounted`       | `onUnmounted`       |
| `errorCaptured`   | `onErrorCaptured`   |
| `renderTracked`   | `onRenderTracked`   |
| `renderTriggered` | `onRenderTriggered` |
| `activated`       | `onActivated`       |
| `deactivated`     | `onDeactivated`     |

> https://v3.cn.vuejs.org/guide/composition-api-lifecycle-hooks.html

## Vue 3.0 有哪些变化？

- 重构响应式系统，使用 Proxy 替换 Object.defineProperty
  - 可直接监听数组类型的数据变化
  - 监听的目标为对象本身，不需要像 Object.defineProperty 一样遍历每个属性，有一定的性能提升
  - 可拦截 apply、ownKeys、has 等 13 种方法，而 Object.defineProperty 不行
  - 直接实现对象属性的新增/删除
- 新增 Composition API，更好的逻辑复用和代码组织；
- 重构 Virtual DOM；
  - 模板编译时的优化，将一些静态节点编译成常量
  - slot 优化，将 slot 编译为 lazy 函数，将 slot 的渲染的决定权交给子组件
  - 事件缓存，模板中内联事件的提取并重用（原本每次渲染都重新生成内联函数）
- 代码结构调整，更便于 Tree shaking，使得体积更小；
- 使用 Typescript 替换 Flow；

- https://segmentfault.com/a/1190000038848131
- https://juejin.cn/post/6951262189168623623
- https://juejin.cn/post/7035805730372321294

## 都说 Composition API 与 React Hook 很像，说说区别

从 React Hook 的实现角度看，React Hook 是根据 useState 调用的顺序来确定下一次重渲染时的 state 是来源于哪个 useState，所以出现了以下限制：

- 不能在循环、条件、嵌套函数中调用 Hook
- 必须确保总是在你的 React 函数的顶层调用 Hook
- useEffect、useMemo 等函数必须手动确定依赖关系

而 Composition API 是基于 Vue 的响应式系统实现的，与 React Hook 的相比

- 声明在 setup 函数内，一次组件实例化只调用一次 setup，而 React Hook 每次重渲染都需要调用 Hook，使得 React 的 GC 比 Vue 更有压力，性能也相对于 Vue 来说也较慢
- Compositon API 的调用不需要顾虑调用顺序，也可以在循环、条件、嵌套函数中使用
- 响应式系统自动实现了依赖收集，进而组件的部分的性能优化由 Vue 内部自己完成，而 React Hook 需要手动传入依赖，而且必须必须保证依赖的顺序，让 useEffect、useMemo 等函数正确的捕获依赖变量，否则会由于依赖不正确使得组件性能下降

虽然 Compositon API 看起来比 React Hook 好用，但是其设计思想也是借鉴 React Hook 的。

> https://segmentfault.com/a/1190000038848131

## 为什么要新增 Composition API，它能解决什么问题

Vue2.0 中，随着功能的增加，组件变得越来越复杂，越来越难维护，而难以维护的根本原因是 Vue 的 API 设计迫使开发者使用 watch，computed，methods 选项组织代码，而不是实际的业务逻辑。

另外 Vue2.0 缺少一种较为简洁的低成本的机制来完成逻辑复用，虽然可以 minxis 完成逻辑复用，但是当 mixin 变多的时候，会使得难以找到对应的 data、computed 或者 method 来源于哪个 mixin，使得类型推断难以进行。

所以 Composition API 的出现，主要是也是为了解决 Option API 带来的问题，第一个是代码组织问题，Compostion API 可以让开发者根据业务逻辑组织自己的代码，让代码具备更好的可读性和可扩展性，也就是说当下一个开发者接触这一段不是他自己写的代码时，他可以更好的利用代码的组织反推出实际的业务逻辑，或者根据业务逻辑更好的理解代码。

第二个是实现代码的逻辑提取与复用，当然 mixin 也可以实现逻辑提取与复用，但是像前面所说的，多个 mixin 作用在同一个组件时，很难看出 property 是来源于哪个 mixin，来源不清楚，另外，多个 mixin 的 property 存在变量命名冲突的风险。而 Composition API 刚好解决了这两个问题。

- https://segmentfault.com/a/1190000038848131
- https://v3.cn.vuejs.org/guide/composition-api-introduction.html

## Vue 3.0 & JSX/TSX

- https://juejin.cn/post/7007731144418394149

## Vue 高阶组件

- http://caibaojian.com/vue-design/more/vue-hoc.html
