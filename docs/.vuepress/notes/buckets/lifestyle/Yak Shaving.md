# Yak Shaving

> https://seths.blog/2005/03/dont_shave_that/
> https://joi.ito.com/weblog/2005/03/05/yak-shaving.html#trackbacks
> https://americanexpress.io/yak-shaving/
> https://antfu.me/posts/about-yak-shaving-zh

## Blog

> https://antfu.me/
> https://github.com/antfu/antfu.me
> https://www.nosuchfield.com/2016/04/15/build-a-blog-with-Github-Pages-and-set-up-HTTPS-protocol-access
> https://sspai.com/post/54608
> https://github.com/Daotin/fe-tips/issues/151
> https://juejin.cn/post/6936843142293356558
> https://juejin.cn/post/6847902218545266701
> https://cloud.tencent.com/developer/article/1421879

## Vue 面试

> https://juejin.cn/book/6844733705089449991
> https://juejin.cn/post/6844903858297143310
> https://www.kancloud.cn/sllyli/vuejs/1244018
> https://www.jianshu.com/nb/38750707?order_by=seq
> https://github.com/answershuto/VueDemo
> https://juejin.cn/post/6844903918753808398
> https://juejin.cn/post/6961222829979697165
> https://github.com/answershuto/learnVue

## PS

> https://www.mac69.com/mac/11625.html
> https://mac.orsoon.com/Mac/180336.html
> https://www.macwk.com/article/adobe-crack-issue
> https://www.bilibili.com/read/cv11616898

## 前端性能

> https://zhuanlan.zhihu.com/p/376925215
> https://juejin.cn/post/6844903971727884296
> https://juejin.cn/book/6844733750048210957

**First Content Paint (FCP)**：即**首次内容绘制**。浏览器第一次文本绘制的时间，这个指标对于没有使用ssr技术的web app意义并不大，因为第一绘制发生的时间通常JS还没加载完毕。

**Largest Contentful Paint (LCP)**: 即最大内容绘制。它统计的是从页面开始加载到视窗内最大内容绘制的所需时间，这里的内容指文本、图片、视频、非空的 canvas 或者 SVG 等。

**First Meaningful Paint (FMP)**：浏览器有意义的内容的绘制时间，比如博客的博文主体绘制时间，具体的值为绘制内容单位时间增加最多的时间点。

**Speed Index (SI)** : 浏览器出现可视内容的时间（通常出现在浏览器初次提交绘制指令之后），该指标捕获的是页面出现像素点的时间。

**Cumulative Layout Shift (CLS)** : 即**累计布局位移**进行评估。这个指标是通过比较单个元素在帧与帧之间的位置偏移来计算，计算公式是`cls = impact fraction * distance fraction` 。

**First CPU idle**：主线程初次空闲时间，意味着此时的用户交互可以被处理，比如react的第一次异步调度就可能出现在这里。

**Time to Interactive (TTI)**：可交互时间，这个指标并不是指的最早的可交互时间，而是可流畅交互的时间，具体的值为FMP之后，5秒后没有long task执行（50ms以上的任务）的时间

**Max Potential First Input Delay**：用户可能体验到的最大无响应时间，具体的值就是最长的task执行时间。

## 前端监控

> https://juejin.cn/post/6936562262480158728#heading-18

