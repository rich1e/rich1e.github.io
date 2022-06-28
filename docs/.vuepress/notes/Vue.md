## 在 Vue 中为什么不推荐用 index 做 key

> https://juejin.cn/post/7026119446162997261

- 用 index 作为 key 时，在对数据进行，逆序添加，逆序删除等破坏顺序的操作时，会产生没必要的真实 DOM更新，从而导致效率低
- 用 index 作为 key 时，如果结构中包含输入类的 DOM，会产生错误的 DOM 更新
- 在开发中最好每条数据使用唯一标识固定的数据作为 key，比如后台返回的 ID，手机号，身份证号等唯一值
- 如果不存在对数据逆序添加，逆序删除等破坏顺序的操作时，仅用于渲染展示用时，使用 index 作为 key 也是可以的（但是还是不建议使用，养成良好开发习惯）。

## Vue 组件通信

> https://juejin.cn/post/6999687348120190983

## Vue computed value is readonly

> https://blog.csdn.net/qq_39773416/article/details/114274275
> https://juejin.cn/post/6903857677178011655
> https://juejin.cn/post/6873053158173179918
> https://juejin.cn/post/6844903926819454983
> https://v3.vuejs.org/guide/computed.html#computed-setter

```js
const contentValue = computed({
  get() {
  	return props.value
  },
  set() {
  	return props.value
  }
})
```

## VueRequest

> https://www.attojs.com/
>
> 在以往的业务项目中，常常被 loading 状态的管理、请求的节流防抖、接口数据的缓存、分页等这些重复的实现所困惑。每当开启一个新项目时，我们都得手动去处理以上这些问题，这将是一个重复性的工作，而且还得确保团队的一致。
>
> VueRequest 旨在为开发者提供便捷、快速的方式来管理接口的状态。在业务开发中省去上述的那些“脏活累活”，只需要简单的配置即可使用，专注于业务核心的开发。

- 🚀  所有数据都具有响应式
- 🔄  轮询请求
- 🤖  自动处理错误重试
- 🗄  内置请求缓存
- 💧  节流请求与防抖请求
- 🎯  聚焦页面时自动重新请求
- ⚙️  强大的分页扩展以及加载更多扩展
- 📠  完全使用 Typescript 编写，具有强大的类型提示
- ⚡️  兼容 Vite
- 🍃  轻量化
- 📦  开箱即用

## Keep-alive

> https://xie.infoq.cn/article/987b17e0c8b59198785025162

## Provide / Inject

> https://juejin.cn/post/6893813975318790151
> https://juejin.cn/post/6844903989935341581

## A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types.

> https://www.jianshu.com/p/8490d645b458
> https://github.com/vueComponent/ant-design-vue/issues/4881

## Watch / wathEffect

> https://www.jianshu.com/p/8490d645b458
> https://juejin.cn/post/6867125503007375373
> https://www.jianshu.com/p/e498b12b2c62

## 带你理解scoped、>>>、/deep/、::v-deep的原理

> https://juejin.cn/post/7023343999909888037


# Vue

https://www.google.com/search?newwindow=1&safe=strict&biw=1420&bih=733&q=eslint+%E9%85%8D%E7%BD%AE&oq=eslint&gs_l=serp.3.2.0l10.66662383.66664447.0.66667264.7.7.0.0.0.0.350.1017.2-3j1.4.0....0...1c.1j4.64.serp..3.2.576...0i12k1j0i10k1.L3NCMTkSJks
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
https://www.baidu.com/s?wd=postcss%20bem&rsv_spt=1&rsv_iqid=0x9be9bfe500008d41&issp=1&f=8&rsv_bp=1&rsv_idx=2&ie=utf-8&rqlang=cn&tn=baiduhome_pg&rsv_enter=1&oq=%2540component-namespace&rsv_t=1337e3aGnNX8YAzSaXoOiLX2FFYtgBWItTZQ61buWTpUXqt%2BUNaG9KlXXQKtitRAs6rg&inputT=8345&rsv_pq=ac364372000091a1&rsv_sug3=42&rsv_sug1=33&rsv_sug7=100&rsv_sug2=0&rsv_sug4=9927
https://segmentfault.com/a/1190000008135263
http://www.w3cplus.com/PostCSS/using-postcss-with-bem-and-suit-methodologies.html
https://en.bem.info/platform/tutorials/quick-start-static/#implement-the-hello-block-in-css-technology
https://segmentfault.com/q/1010000006138758
https://github.com/kezzbracey/postcss-bem
http://elemefe.github.io/postcss-salad/sass-syntax#conditionals
https://segmentfault.com/a/1190000003909268
