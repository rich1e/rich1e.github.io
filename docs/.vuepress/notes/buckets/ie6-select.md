title: ie6 select 覆盖层问题
date: 2014/12/19 22:46:25
categories: technology
tag: css
---

介绍：ie6 下 select z-index 有bug，导致层不能覆盖其上
目标：解决 ie6 下层不能覆盖在 select 上
原理：利用元素 **iframe** 可以覆盖 **select** 的特性
已知问题：需要多余的标签，还需要使用滤镜、以及指定大小
其他：解决这个问题的基础是要用到 **iframe** ，也可以用 **iframe** 去包裹 **select**，另外，jQuery 上有一个插件 [bgiframe](http://plugins.jquery.com/bgiframe/) 也可以解决这个bug。
备注：顺便提一下，**iframe** 在ie中存在属性 *allowTransparency* 通过这个属性可以设置 **iframe** 为透明的。
参考：[使用Iframe解决IE6下Div/UL/Li 挡不住Select box 的3法](http://twinkleliang.iteye.com/blog/1138841)

代码示例，
<script src="https://gist.github.com/flyfishtome/3820685a41ca44984d59.js"></script>