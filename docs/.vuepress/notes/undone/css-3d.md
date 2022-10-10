title: css 3d
date: 2014/7/14 22:46:25
categories: technology
tag: css
---

## 透视 ##

激活 *3d空间*，需要元素有透视效果。可以有两个方式让元素具有透视效果：使用 transform 属性，它拥有 perspective 功能函数。

    transform: perspective(600px);

或者使用 perspective 属性。

    perspective: 600px

这两种方式都触发一个 *3d空间*，但是有一个区别。使用 perspective 功能函数可以方便应用 3d 变换一个元素。但是当应用在多个元素，转换后的元素不会按预计的排列。**如果你使用相同的变换应用在不同的元素上，每个元素都会有自己的消失点**。为了补救这个问题，在父级元素使用 perspective 属性，这样每个子元素都可以共享相同的 *3d空间*。

perspective 的值决定了 3d 效果的强度。把它看作一个对象与观众的距离。值越大，则距离越远，视觉效果也越不强烈。`perspective: 2000px` 产生一个巨大的 3d效果，像一个小虫观看巨大的物体。

默认情况下,消失点的位置在三维空间定位的中心。你可以通过属性 perspective-origin 改变消失点的位置。

reference:

[Intro to CSS 3D transforms](http://desandro.github.io/3dtransforms/)