---
title: 禁止页面滚动和回弹效果
date: 2025-2-14
permalinkPattern: :year/:month/:day/:slug.html
permalink: /uniapp/uniapp-disable-pagescroll-and-bance
---

# 禁止页面滚动和回弹效果

最近产品提出一个问题：**页面滚动时，原本应该固定的区域随着手指滑动，消失不见了**。

> 产品希望固定区域不跟随滚动，而是一直显示。

现状如下：

![image-name](@images/uniapp/uniapp-disable-pagescroll-and-bance/Simulator_Screen_iPhoneSE_2025-02-14.gif)

> 老实说，这个问题挺常见：页面上下拖动时，整个页面会跟随手指移动，而且这种行为是默认的，用户无法通过简单的操作进行取消。这在某些场景下可能会影响用户体验，因此我们需要找到一种方法来禁止页面的上下拖动。

## 问题分析

从动画效果来看，引发固定区域随着手指滑动，消失不见的情况，有2个原因：

  1. 页面滚动；
  2. 页面回弹效果；

uniapp的页面渲染逻辑与浏览器差不多，因此手指上下拖动的行为是由默认的页面滚动机制控制。

页面回弹效果是移动客户端默认的用户动画效果。

以上两个都属于默认行为，用户无法通过简单的操作取消。

## 解决方案

### 第一步，禁用页面滚动

uniapp 页面配置中，可以通过设置 `disableScroll: true` 来禁用页面的滚动行为。在 `pages.json` 配置如下代码：

```json
{
  "path": "your-page-path",
  "style": {
    "app-plus": {
      "disableScroll": true,
    }
  }
},
```

这样一来，无论是 iOS 还是 Android 端，页面都会被禁止滚动。

## 第二步，禁用页面回弹效果

uniapp 通过 `"bounce": "none"` 控制页面回弹效果，在 `pages.json` 配置如下代码：

```json
{
  "path": "your-page-path",
  "style": {
    "app-plus": {
      "bounce": "none",
    }
  }
},
```

通过以上2步配置，很容易就解决 **“固定区域随着手指滑动，消失不见”** 的问题。

## Ref

[uniapp防止ios端页面可以上下拖动方法](https://blog.51cto.com/u_16213313/9075802)
