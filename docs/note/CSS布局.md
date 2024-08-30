# CSS 布局

<!--
 * @Author: rich1e
 * @Date: 2022-09-08 18:08:27
 * @LastEditors: rich1e
 * @LastEditTime: 2022-09-09 10:30:56
-->

## 父容器

### 两轴两线

> 水平的主轴（main axis） 和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做 main start，结束位置叫做 main end；交叉轴的开始位置叫做 cross start，结束位置叫做 cross end。(start 起始线,end 结束线)
> 项目默认沿主轴排列。单个项目占据的主轴空间叫做 main size，占据的交叉轴空间叫做 cross size。

### 父级容器属性

- flex-direction: 主轴排列方向
- flex-wrap: 如果一条轴线排不下，如何换行
- flex-flow: flex-direction 属性和 flex-wrap 属性的简写形式
- justify-content: 主轴上的对齐方式
- align-items: 交叉轴上如何对齐
- align-content: 多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

## 子元素

- order: 排列顺序。数值越小，排列越靠前，默认为 0。
- flex-grow: 放大比例。默认为 0，即如果存在剩余空间，也不放大。
- flex-shrink: 缩小比例，默认为 1，即如果空间不足，该项目将缩小。
- flex-basis: 分配多余空间之前，项目占据的主轴空间
- flex: flex-grow, flex-shrink 和 flex-basis 的简写
- align-self: 允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性

flex 默认值为 initial(0 1 auto)。后两个属性可选。该属性还有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。

## 圣杯布局

## 双飞燕布局

## place-self

## 参考

[Flex 布局教程：语法篇](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

[Flex 布局教程：实例篇](https://www.ruanyifeng.com/blog/2015/07/flex-examples.html)

[你不能只会 flex 居中布局，精制动画讲解所有 flex 布局方式！通俗易懂纯干货教程！](https://juejin.cn/post/7117073020237119502)
