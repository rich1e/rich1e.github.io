---
title: 再读Vue3开发文档-响应式基础
date: 2022-09-02
permalinkPattern: :year/:month/:day/:slug.html
permalink: /workspace/read-the-vue3-development-documentation-again-reactivity-fundamentals
---

<!--
 * @Author: rich1e
 * @Date: 2022-09-02 21:35:43
 * @LastEditors: rich1e
 * @LastEditTime: 2022-09-02 22:29:48
-->

# 再读 Vue3 开发文档 - 响应式基础

[[toc]]

温故而知新，最近又花时间仔细看了一遍 `Vue3` 开发文档，受益匪浅。

以前开发过程中，缺少系统的深入思考，遇到了不少问题，也在这次温习中渐渐找到答案。

以下记录了看完文档后的一些总结，希望也能为他人提供帮助。

## 响应式基础

这一章讲述了数据声明，方法声明等内容，还提了一些特殊状态下的**函数方法存在有状态的情况**，以及 `DOM` 更新的实现原理。

日常开发中，这些情况和实现原理不一定会被我们发觉，也不会影响程序功能的开发进度。但是，既然选择了这个框架，我们就有必要了解清楚框架底层做了些什么。

### 声明响应式状态

Vue 在组件实例上暴露的内置 API 使用 `$` 作为前缀。它同时也为内部属性保留 `_` 前缀。因此，你应该避免在顶层 `data` 上使用任何以这些字符作前缀的属性。

```js
export default {
  data() {
    return {
      count: 1, // Good
      $count: 0: // Bad
    };
  },

  // `mounted` 是生命周期钩子，之后我们会讲到
  mounted() {
    // `this` 指向当前组件实例
    console.log(this.count); // => 1

    // 数据属性也可以被更改
    this.count = 2;
  },
};
```

### 响应式代理 vs. 原始值

当你在赋值后再访问 `this.someObject`，此值已经是原来的 `newObject` 的一个响应式代理。与 Vue 2 不同的是，这里原始的 `newObject` 不会变为响应式。

```js
export default {
  data() {
    return {
      someObject: {}, // 响应式代理
    };
  },
  mounted() {
    const newObject = {}; // 原始值
    this.someObject = newObject;

    console.log(newObject === this.someObject); // false
  },
};
```

### 声明方法

Vue 自动为 `methods` 中的方法绑定了永远指向组件实例的 `this`。这确保了方法在作为事件监听器或回调函数时始终保持正确的 `this`。你不应该在定义 `methods` 时使用箭头函数，因为箭头函数没有自己的 `this` 上下文。

```js
// Good
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
  mounted() {
    // 在其他方法或是生命周期中也可以调用方法
    this.increment();
  },
};

// Bad
export default {
  methods: {
    increment: () => {
      // 反例：箭头函数无法访问此处的 `this`!
    }
  }
}
```

### DOM 更新时机

当你更改响应式状态后，`DOM` 也会自动更新。然而，**你得注意 `DOM` 的更新并不是同步的。** 相反，Vue 将缓冲它们直到更新周期的 “下个时机” 以确保无论你进行了多少次声明更改，每个组件都只需要更新一次。

若要等待一个状态改变后的 DOM 更新完成，你可以使用 `nextTick()` 这个全局 API：

```js
import { nextTick } from "vue";

export default {
  methods: {
    increment() {
      this.count++;
      nextTick(() => {
        // 访问更新后的 DOM
      });
    },
  },
};
```

### 深层响应性

在 Vue 中，状态都是默认深层响应式的。这意味着即使在更改深层次的对象或数组，你的改动也能被检测到。

```js
export default {
  data() {
    return {
      obj: {
        nested: { count: 0 },
        arr: ["foo", "bar"],
      },
    };
  },
  methods: {
    mutateDeeply() {
      // 以下都会按照期望工作
      this.obj.nested.count++;
      this.obj.arr.push("baz");
    },
  },
};
```

由于 Vue 具有深层响应性，因此声明的响应数据尽可能简洁，减少嵌套层级，否则对程序性能影响较大。或者使用浅层响应式对象，它们仅在顶层具有响应性。

### 有状态方法

这段代码创建一个预置防抖的事件处理器，但它对于被重用的组件来说是有问题的，因为这个预置防抖的函数是 **有状态的**：它在运行时维护着一个内部状态。如果多个组件实例都共享这同一个预置防抖的函数，那么它们之间将会互相影响。

```js
import { debounce } from "lodash-es";

export default {
  methods: {
    // 使用 Lodash 的防抖函数
    click: debounce(function () {
      // ... 对点击的响应 ...
    }, 500),
  },
};
```

要保持每个组件实例的防抖函数都彼此独立，我们可以改为在 `created` 生命周期钩子中创建这个预置防抖的函数：

```js
export default {
  created() {
    // 每个实例都有了自己的预置防抖的处理函数
    this.debouncedClick = _.debounce(this.click, 500);
  },
  unmounted() {
    // 最好是在组件卸载时
    // 清除掉防抖计时器
    this.debouncedClick.cancel();
  },
  methods: {
    click() {
      // ... 对点击的响应 ...
    },
  },
};
```
