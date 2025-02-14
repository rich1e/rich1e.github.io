---
title: toast_另类全局组件的实现
date: 2025-2-14
permalinkPattern: :year/:month/:day/:slug.html
permalink: /uniapp/global-toast-components
---

# toast: 另类全局组件的实现

之前一直使用 Vue 开发，对于uniapp开发略懂一二。幸不辱命，应付工作足矣。

但好景不长，遇到一个比较棘手的需求：全局消息通知。需求如下：

> 要求能在任何页面弹出，并且支持JS调用，除非是主动点击消失，否则切换页面时，仍然要保留。
> 另外，支持弹出多个消息，呈现消息叠加的效果。

本来以为是个很简单的活，直接在页面上写了一个 `<toast>` 标签，然后控制显示隐藏即可。

随后测试发现以下问题，

1. 支持JS调用，需要挂载全局对象；
2. 切换页面不消失，需要挂载页面根节点；
3. 普通的Vue组件，不能运行在app环境；

由于历史💩原因，页面根节点的代码难以维护🤮，我也不希望因为写了一个 `toast` 组件，而导致历史代码变成了我的个人私产🍽️。

所以我打算另辟蹊径、剑走偏锋，写一个特别另类的全局组件😅。

## 全局组件实现

大致原理：**写一个页面级的组件，通过样式控制，已全局组件呈现**。话不多说，开工。

### 第一步，声明组件

首先声明组件模版 `toast.vue`，编写样式和内部方法。

::: details 点击查看代码

```vue
<template>
  <u-toast ref="uToast"></u-toast>
</template>

<script>
  export default {
    name: 'mcToast',
    data() {
      return {
        toastOptions: {},
        time: null,
        show: false
      }
    },
    onLoad(options) {
      // #ifdef APP-PLUS
      console.log('onLoad')
      try {
        const conf = JSON.parse(options.conf)
        console.log('conf 1', conf)
        this.toastOptions = conf
      } catch (e) {
        console.log(e)
      }
      // #endif
    },
    onReady() {
      // #ifdef APP-PLUS
      console.log('onReady 1', this);
      this.showToast()
      console.log('onReady2', this);
      this.time = setTimeout(() => {
        this.hidetoast()
        uni.navigateBack({
          delta: 1,
        })
      }, 2000)
      // #endif
    },
    methods: {
      showToast() {
        this.$refs.uToast.show(this.toastOptions)
        this.show = true
      },
      hidetoast() {
        this.$refs.uToast.hide()
        this.show = false;
      },
    },
  }
</script>

<style>
  page {
    background-color: transparent !important;
  }
</style>
```
:::

然后，编写导出组件的方法 `index.js`。

```js
const showToast = (params) => {
  // #ifdef APP-PLUS
  console.log('showToast app端调用')
  uni.navigateTo({
    url: '/components/toast?conf=' + JSON.stringify(params)
  })
  // #endif
}

export default {
  install(Vue) {
    Vue.prototype.$$Toast = (params) => {
      if (!params) {
        console.log("参数必须填写 params")
        return
      }
      showToast(params)
    }
  },
}

```
### 第二步，注册组件

在 `pages.josn` 注册组件调用地址，以提供全局调用。

```json
{
  "path" : "components/toast",
  "style": {
    "navigationStyle": "custom",
    "backgroundColor": "transparent",
    "backgroundColorTop": "transparent",
    "backgroundColorBottom": "transparent",
    "app-plus": {
      "animationType": "fade-in",
      "background": "transparent",
      "popGesture": "none",
      "bounce": "none",
      "titleNView": false
    }
  }
},
```
### 第三步，组件调用

```js
this.$$Toast({
  type: "success",
  position: 'top',
  icon: false,
  message: "Download successful",
  complete: () => {
    uni.navigateBack({
      delta: 1,
    })
  }
})
```

## 总结

这里面有许多细节的地方，这些如果没处理好，就会有问题。

> uni.navigateBack

```js
uni.navigateBack({
  delta: 1,
})
```
这个代码的作用是，当 `toast` 消失之后，要将路由修改到上一次。因为每次调用 `toast` 时，就相当于打开了一次页面，增加了一次路由记录，所以关闭 `toast` 时，需要修改路由回到上一次。

> background-color: transparent !important;

```css
page {
  background-color: transparent !important;
}
```
这个代码的作用是，强制页面为透明效果。

> onLoad(options)

这个代码的作用是，只有这个生命周期函数才可以获取URL传过来的数据。

> onReady()

这个代码的作用是，只有这个生命周期函数组件内的方法才能正常调用。

**最后遗留一个问题，为什么 *template* 中是使用 `<u-toast>` 组件，而不是使用 `<view>` 标签定义组件**？

> \<u-toast ref="uToast"\>\<\/u-toast\>

