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
  <!-- 提示弹框页面 依赖 uview2.0 ui 组件进行封装  -->
  <u-popup
    id="popup-box"
    :show="t_show"
    :closeOnClickOverlay="t_closeOnClickOverlay"
    :overlay="false"
    :safeAreaInsetTop="true"
    zIndex="15000"
    bgColor="transparent"
    mode="top"
    overlayStyle="z-index: 14999;"
    @close="close"
  >
    <template v-if="t_type === 'confirm'">
      <view class="modal-box">
        <view class="modal-top">
          <view style="flex: 1; display: flex;">
            <image
              style="
                width: 20px;
                height: 20px;
                background-size: 20px;
                margin-right: 6px;
              "
              :src="t_icon"
              mode=""
            />
            <text class="modal-title">{{ t_title }}</text>
          </view>
          <image
            style="
              width: 12px;
              height: 12px;
              background-size: 12px;
            "
            src="/static/side/toast-close.svg"
            @click="close"
            mode=""
          />
        </view>
      </view>
    </template>
  </u-popup>
</template>

<script>
  export default {
    name: 'mcToast', //为了与其他组件进行区分，
    // 属性显示
    props: {
      show: Boolean,
      title: String,
      icon: {
        type: String,
        default: 'failed',
      },
    },
    data() {
      return {
        useType: 'js', //component 和 js 两种方式
        time: null,
        t_show: false,
        t_type: 'confirm',
        t_closeOnClickOverlay: true,
        t_showCancel: true,
        t_title: '',
        t_content: '',
        t_cancelText: 'Cancel',
        t_confirmText: 'Ok',
        t_icon: '',
        // #ifdef APP-PLUS
        eventChannel: null,
        // #endif
        completeFun: null, //外部的监听的完成函数，兼容 H5
      }
    },
    watch: {
      show: {
        handler(newValue, oldValue) {
          // 这种是组件方式调用
          setTimeout(() => {
            // this.t_show = newValue
            if (newValue) {
              this.useType = 'component'
              const conf = {
                show: newValue,
                title: this.title,
                title: this.icon,
              }
              this.setParams(conf)
            }
          }, 300)
        },
        immediate: true,
      },
    },
    created() {
      // #ifdef APP-PLUS
      this.eventChannel = this.getOpenerEventChannel()
      // #endif
    },
    onLoad(options) {
      // #ifdef APP-PLUS
      try {
        const conf = JSON.parse(options.conf)
        this.setParams(conf)
      } catch (e) {
        //TODO handle the exception
      }
      // #endif
    },
    methods: {
      /**
       * 设置配置参数
       * @param conf
       */
      setParams(conf) {
        this.t_title = conf.title
        this.t_show = conf.show
        this.t_icon = `/static/side/email_${this.icon}.svg`

        if (this.time) clearTimeout(this.time)

        this.time = setTimeout(() => {
          this.close()
        }, 5000)

        if (conf.complete) {
          this.completeFun = conf.complete
        }
      },
      /**
       * 弹出层收起
       */
      close() {
        this.hide()

        // #ifdef APP-PLUS
        if (this.useType != 'component') {
          let _this = this
          uni.navigateBack({
            delta: 1,
            success() {
              _this.eventChannel.emit('confirm')
            },
          })
        }
        // #endif

        // #ifndef APP-PLUS
        // 执行回调
        this.completeFun && this.completeFun()
        // #endif

        // 如果是组件调用的方式，向上级触发一下
        if (this.useType == 'component') {
          this.$emit('confirm', true)
        }
      },
      /**
       * 重置初始化配置
       */
      hide() {
        this.t_show = false
      },
    },
  }
</script>


<style>
  /* 设置页面为透明 */
  page {
    background-color: transparent !important;
  }
</style>

<style lang="scss">
  .modal-box {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    align-self: center;

    width: 90%;
    margin-top: 55px;

    background: #fdecec;
    box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.08),
      0px 12px 32px 4px rgba(0, 0, 0, 0.04);
    border-radius: 8px 8px 8px 8px;
    border: 1px solid rgba(239, 69, 69, 0.3);

    .modal-top {
      padding: 24rpx;
      display: flex;
      width: 100%;
      align-items: center;
      flex: 1;

      .modal-title {
        font-size: 24rpx;
        font-weight: bold;
        margin-top: 2px;
      }
    }
  }
</style>
```
:::

然后，编写导出组件的方法 `index.js`。

```js
import Vue from "vue";
// #ifdef H5
import toast from "./toast.vue";
// #endif

const defaultOptions = {
	type: "confirm",
	title: "",
	content: "",
	cancel: null,
	confirm: null,
	showCancel: true,
	show: true
}

const showToast = (params) => {
  const _params = Object.assign({}, defaultOptions, params);
  _params["show"] = true;
  // #ifdef APP-PLUS
  uni.navigateTo({
    url: "/components/message-center/toast?conf=" + JSON.stringify(_params),
    events: {
      confirm: function (data) {
        if (params.confirm) {
          params.confirm();
        }
        if (params.success) {
          params.success();
        }
      },
      cancel: function (data) {
        params.cancel && params.cancel();
      },
      complete: function (data) {
        params.complete && params.complete();
      },
    },
  });
  // #endif

  // #ifdef H5
  const componentConstructor = Vue.extend(toast);
  const componentDom = new componentConstructor();
  componentDom.vm = componentDom.$mount();
  // 避免重复推入
  const lastEl = document.body.lastElementChild;
  if (lastEl.id === "popup-box") {
    lastEl.remove();
    setTimeout(() => {
      document.body.appendChild(componentDom.vm.$el);
    });
  }
  setTimeout(() => {
    document.body.appendChild(componentDom.vm.$el);
  });

  setTimeout(() => {
    componentDom.setParams(_params);
  }, 20);
  // #endif
};

export default {
  install(Vue) {
    Vue.prototype.$$Toast = (params) => {
      if (!params) {
        return;
      }
      params["type"] = "confirm";
      params["show"] = true;
      showToast(params);
    };
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

