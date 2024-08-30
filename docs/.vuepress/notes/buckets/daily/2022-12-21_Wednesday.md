---
author: rich1e
tags: ["daily"]
date: 2022-12-21 10:12:23
---


```ad-note
title: mac install electron error & RequestError: connect ETIMEDOUT

![[Pasted image 20221221155359.png]]

![[Pasted image 20221221144235.png]]

[(2条消息) 在存在局域网代理服务器时使用npm install electron 解决报错RequestError: connect ETIMEDOUT的问题_Jeady5的博客-CSDN博客_request signininitiate failed with message: connec](https://blog.csdn.net/downanddusk/article/details/123752215)
[Error: connect ETIMEDOUT 13.250.177.223:443 · Issue #497 · agalwood/Motrix](https://github.com/agalwood/Motrix/issues/497)
[Error: Electron failed to install correctly, please delete node_modules/electron and try installing again · Issue #8466 · electron/electron](https://github.com/electron/electron/issues/8466)
[electron 7.0.0安装失败 - 个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000020890483)

```

**20221220**

![[Pasted image 20221221110226.png]]

-   `GlobalParameters`与`Message`并排排列, 初始宽度比例为`6:4`, 两个窗口的父容器可进行高度调整, 两个并排窗口之间增加橡皮筋, 用户可自由拖动设置窗口宽度比例
-   `GlobalParameters`中可对全局参数进行新增/修改/删除, 列宽根据内容自适应, 也点击表头进行排序
-   `Message`中修改为仅显示最终一条信息

**20221221**

![[Pasted image 20221221110253.png]]

-   “两个窗口的父容器可进行高度调整”：会导致 CAD 重新绘制，不做。
-   “全局参数进行新增/修改/删除”：新增：见上条评论中的 New 按钮；修改：在单元格双击可直接编辑；删除：上条评论中的图片，最后一列放置删除的图标。
-   “Message中修改为仅显示最终一条信息”：根据信息流中的换行符，在仿真运行过程中，只展示信息流的最后一行。当仿真进行完毕后，会有对话框弹出，至此之后显示 Success!

```ad-note
title: iOS16 关闭允许粘贴

[ios16允许粘贴怎么关闭？ios16允许粘贴怎么设置？哪里设置？ - 知乎](https://zhuanlan.zhihu.com/p/565011242)
[清除剪贴板中的所有内容](https://www.icloud.com/shortcuts/d104d60a63a141019d26054f40d0fea4)
[iOS16粘贴弹窗终于可以关闭了，新增剪贴版弹窗开关-资讯-芝麻科技讯](https://www.zmtc.com/apple/3812.html)
```

```ad-note
title: three.js 闪烁

[three中模型材质闪烁问题 - web与webGL - 博客园](https://www.cnblogs.com/yaosusu/p/16597753.html)
[(2条消息) three.js 模型重合相交部分闪烁 Z-Fighting_Felicia_1001101的博客-CSDN博客](https://blog.csdn.net/sinat_35823840/article/details/112800900)
[Three.js锯齿闪烁重影模型的解决方案方法-WEBGL学习网](https://www.webglstudy.com/article/1002889.html)


```
