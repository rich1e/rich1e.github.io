# Vue

<!--
 * @Author: rich1e
 * @Date: 2022-08-01 19:45:10
 * @LastEditors: rich1e
 * @LastEditTime: 2022-09-04 08:57:12
-->

[[toc]]

## 聊聊对 Vue.js 框架的理解

- https://github.com/yacan8/blog/issues/26

## Vue 面试总结

- https://juejin.cn/post/6844904084374290446

## Vue 组件封装

```markdown
https://v3.cn.vuejs.org/guide/migration/listeners-removed.html#%E6%A6%82%E8%A7%88
https://www.cnblogs.com/yinyuxing/p/14558492.html
https://juejin.cn/post/7008811358380621854
https://juejin.cn/post/7087728529512759332
https://juejin.cn/post/7046282409767092237#heading-4
https://juejin.cn/post/6844903838470635528
https://cn.vuejs.org/v2/api/index.html#vm-mount
https://juejin.cn/post/6953226398580670472
https://juejin.cn/post/7087246620609216549
https://segmentfault.com/a/1190000022389034
https://cloud.tencent.com/developer/article/1701271
https://juejin.cn/post/7087160169536159780
https://juejin.cn/post/6844903702411608072#heading-68
https://juejin.cn/post/6844903821513064456#heading-10
```

## 在 Vue 中为什么不推荐用 index 做 key

> https://juejin.cn/post/7026119446162997261

- 用 index 作为 key 时，在对数据进行，逆序添加，逆序删除等破坏顺序的操作时，会产生没必要的真实 DOM 更新，从而导致效率低
- 用 index 作为 key 时，如果结构中包含输入类的 DOM，会产生错误的 DOM 更新
- 在开发中最好每条数据使用唯一标识固定的数据作为 key，比如后台返回的 ID，手机号，身份证号等唯一值
- 如果不存在对数据逆序添加，逆序删除等破坏顺序的操作时，仅用于渲染展示用时，使用 index 作为 key 也是可以的（但是还是不建议使用，养成良好开发习惯）。

## Vue 组件通信

- https://juejin.cn/post/6999687348120190983

## Vue computed value is readonly

```markdown
https://blog.csdn.net/qq_39773416/article/details/114274275
https://juejin.cn/post/6903857677178011655
https://juejin.cn/post/6873053158173179918
https://juejin.cn/post/6844903926819454983
https://v3.vuejs.org/guide/computed.html#computed-setter
```

```js
const contentValue = computed({
  get() {
    return props.value;
  },
  set() {
    return props.value;
  },
});
```

## VueRequest

> https://www.attojs.com/

在以往的业务项目中，常常被 loading 状态的管理、请求的节流防抖、接口数据的缓存、分页等这些重复的实现所困惑。每当开启一个新项目时，我们都得手动去处理以上这些问题，这将是一个重复性的工作，而且还得确保团队的一致。

VueRequest 旨在为开发者提供便捷、快速的方式来管理接口的状态。在业务开发中省去上述的那些“脏活累活”，只需要简单的配置即可使用，专注于业务核心的开发。

- 🚀 所有数据都具有响应式
- 🔄 轮询请求
- 🤖 自动处理错误重试
- 🗄 内置请求缓存
- 💧 节流请求与防抖请求
- 🎯 聚焦页面时自动重新请求
- ⚙️ 强大的分页扩展以及加载更多扩展
- 📠 完全使用 Typescript 编写，具有强大的类型提示
- ⚡️ 兼容 Vite
- 🍃 轻量化
- 📦 开箱即用

## Keep-alive

> https://xie.infoq.cn/article/987b17e0c8b59198785025162

## Provide / Inject

- https://juejin.cn/post/6893813975318790151
- https://juejin.cn/post/6844903989935341581

## A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.

- https://www.jianshu.com/p/8490d645b458
- https://github.com/vueComponent/ant-design-vue/issues/4881

## Watch / wathEffect

- https://www.jianshu.com/p/8490d645b458
- https://juejin.cn/post/6867125503007375373
- https://www.jianshu.com/p/e498b12b2c62

## 带你理解 scoped、>>>、/deep/、::v-deep 的原理

> https://juejin.cn/post/7023343999909888037

## 为什么 React 的 Diff 算法不采用 Vue 的双端对比算法？

> https://juejin.cn/post/7116141318853623839

## Vue 实用技巧

### @change 方法接收多个参数

```js
// 方法一：@change="dataChange($event, 123)
<el-select
	v-model="value"
	placeholder="请选择"
	@change="dataChange($event, 123)
/>

// 方法二：@change="((val)=>{dataChange(val, 123)})
<el-select
	v-model="value"
	placeholder="请选择"
	@change="((val)=>{dataChange(val, 123)})
/>
```

参考：

https://www.cnblogs.com/bobo1/p/13131446.html

### mixin 混入规则

```javascript
// 数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。
// data、computed、props 适用
var mixin = {
  data: function () {
    return {
      message: "hello",
      foo: "abc",
    };
  },
};

new Vue({
  mixins: [mixin],
  data: function () {
    return {
      message: "goodbye",
      bar: "def",
    };
  },
  created: function () {
    console.log(this.$data);
    // => { message: "goodbye", foo: "abc", bar: "def" }
  },
});
```

```javascript
// 同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。
// beforeCreate、created、beforeMount、mounted等生命生命周期钩子函数适用
var mixin = {
  created: function () {
    console.log("混入对象的钩子被调用");
  },
};

new Vue({
  mixins: [mixin],
  created: function () {
    console.log("组件钩子被调用");
  },
});

// => "混入对象的钩子被调用"
// => "组件钩子被调用"
```

```javascript
// 值为对象的选项，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。
// methods、components、directives 适用
var mixin = {
  methods: {
    foo: function () {
      console.log("foo");
    },
    conflicting: function () {
      console.log("from mixin");
    },
  },
};

var vm = new Vue({
  mixins: [mixin],
  methods: {
    bar: function () {
      console.log("bar");
    },
    conflicting: function () {
      console.log("from self");
    },
  },
});

vm.foo(); // => "foo"
vm.bar(); // => "bar"
vm.conflicting(); // => "from self"
```

参考：

https://cn.vuejs.org/v2/guide/mixins.html#%E5%9F%BA%E7%A1%80

### 在 `v-if`/`v-else-if`/`v-else` 中使用 `key`

```html
// 如果一组 v-if + v-else 的元素类型相同，最好使用 key (比如两个元素)。
<div>
  <div v-if="error" key="search-status">错误：{{ error }}</div>
  <div v-else key="search-results">{{ results }}</div>
</div>
```

参考：

https://cn.vuejs.org/v2/style-guide/#%E6%B2%A1%E6%9C%89%E5%9C%A8-v-if-v-else-if-v-else-%E4%B8%AD%E4%BD%BF%E7%94%A8-key-%E8%B0%A8%E6%85%8E%E4%BD%BF%E7%94%A8

### Props 数组和对象的默认值

```javascript
export default {
  props: {
    couponList: {
      type: Array,
      default: [],
    },
    couponList: {
      type: Array,
      default: () => [],
    },
    pageData: {
      type: Object,
      default: () => ({}),
    },
  },
};
```

## Vue Mixin

```markdown
https://forum.vuejs.org/t/vue-extend/68460
https://www.jianshu.com/p/7f5c4d0804ce
https://juejin.cn/post/6844903983954264071
https://juejin.cn/post/6844903636938522638
https://www.jianshu.com/p/a91d40214604
https://www.jianshu.com/p/4ab8d255d070
https://juejin.cn/post/6844903908398071816
```

## 在 Vue.js 中加载字体的最佳做法

> https://juejin.cn/post/6949875413594161160

## SSR

```markdown
SSR 同构降级策略

https://juejin.cn/post/6884107649843986440
```

## Vue Slot

```vue
// 定义插槽 navigation-link.vue
<template>
  <a v-bind:href="url" class="nav-link">
    <span class="fa fa-user"></span>
    <slot></slot>
  </a>
</template>
```

```vue
// 使用插槽 index.vue
<template>
  <navigation-link url="/profile"> Your Profile </navigation-link>
</template>
<script>
import NavigationLink from "./navigation-link.vue";

export default {
  components: {
    NavigationLink,
  },
};
</script>
```

```html
// 渲染结果
<a href="/profile" class="nav-link">
  <span class="fa fa-user"></span>
  Your Profile
</a>
```

参考

```markdown
https://juejin.cn/post/6844903838164451336#heading-2
https://juejin.cn/post/6844903893680259085#heading-0
https://juejin.cn/post/6844903920037281805
https://juejin.cn/post/6844903993768935431
https://juejin.cn/post/6844903817746628615
https://cn.vuejs.org/v2/guide/components-slots.html
```

## Vue Router - Navigation Failures

```markdown
https://gitee.com/y_project/RuoYi-Vue/issues/I3INS1?_from=gitee_search
https://www.jianshu.com/p/1f0fff118414
https://blog.csdn.net/weixin_38779534/article/details/112958425
https://www.whidy.net/vue-router-push-throw-error-with-NavigationDuplicated-Navigating-to-current-location
https://next.router.vuejs.org/guide/advanced/navigation-failures.html
```

## 基于 Proxy 原理理解 reactive 和 ref 的使用

> https://juejin.cn/post/7031575354443563021

## 来自 Vue 官方团队的 57 个技术分享

> https://juejin.cn/post/7087747188817657892

## nextTick()

- https://juejin.cn/post/7023422038379331614
- https://juejin.cn/post/7007328894621581349

## Vue 3.0 经验总结

- [Vue 3.0 经验总结](/note/Vue3经验总结.md)

## Vue 优化

> 移除 Option API

https://github.com/vuejs/core/tree/main/packages/vue#bundler-build-feature-flags

## Others

```markdown
https://segmentfault.com/a/1190000004468428
http://eslint.org/
http://vue.sike.io/v2/guide/unit-testing.html
https://github.com/Liuxg0112/mint-ui/commit/2fba5616c0101feef201959c42e32aa8ceb0d089
http://mint-ui.github.io/#!/en
http://mint-ui.github.io/docs/#!/en2/progress
http://elemefe.github.io/mint-ui/#/
https://github.com/reubano/csv2ofx
https://zlargon.gitbooks.io/git-tutorial/content/remote/new_project.html
https://www.gitbook.com/@zlargon
https://mp.weixin.qq.com/debug/wxadoc/dev/index.html
https://www.google.com/search?q=%E5%BE%AE%E4%BF%A1+%E7%BB%84%E4%BB%B6%E5%BA%93&oq=%E5%BE%AE%E4%BF%A1+%E7%BB%84%E4%BB%B6%E5%BA%93&aqs=chrome..69i57.19399j0j7&sourceid=chrome&ie=UTF-8
https://github.com/weui/weui/wiki/ActionSheet
http://tech.youzan.com/tag/front-end/
https://github.com/youzan/zanui-weapp
https://github.com/youzan/felint
https://github.com/youzan/tiny-loader.js
https://segmentfault.com/a/1190000008135263
http://www.w3cplus.com/PostCSS/using-postcss-with-bem-and-suit-methodologies.html
https://en.bem.info/platform/tutorials/quick-start-static/#implement-the-hello-block-in-css-technology
https://segmentfault.com/q/1010000006138758
https://github.com/kezzbracey/postcss-bem
http://elemefe.github.io/postcss-salad/sass-syntax#conditionals
https://segmentfault.com/a/1190000003909268
```
