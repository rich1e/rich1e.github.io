最近在本地运行 Electron 项目的时候，命令运行后很长一段时间，应用窗口并没有如期打开。发现控制台输出以下信息：

![[2023/meta/Pasted image 20230615092537.png]]

带着疑问，上网查询了相关问题，**发现这个问题好像只发生在使用 ARM 芯片的 Mac 电脑上。**

网上对这个事情有讨论，大概意思是，上游组件存在类名重复的问题，影响了依赖的调用方（Quartz.framework），刚好这个调用方是 Electron 的依赖。

相关人员做了描述：

>   After quite a bit of fooling around, I determined that it's Quartz.framework which produces the dependency on WebKit.
>   
>   Chromium also links to Quartz.framework so presumably Chromium has the exact same issue.

上面说，Chromium 也可能存在完全相同的问题。

![[2023/meta/Pasted image 20230615093305.png]]

解决方法也很简单，重命名。将 **WebSwapCGLLayer** 改为 **WebSwapCGLLayerChromium**。

项目当前使用的版本是 `v21.3.0`，然后查询了 Electron 修复版本的历史记录，最终找到 `v21.3.4`，该版本修复了 `WebSwapCGLLayer` 问题。

![[2023/meta/Pasted image 20230615134619.png]]

Ref

[Electron 18: `WebSwapCGLLayer` warning · Issue #151818 · microsoft/vscode](https://github.com/microsoft/vscode/issues/151818)
[[Bug]: Warning: Class WebSwapCGLLayer is implemented in both system library and electron distribution · Issue #33685 · electron/electron](https://github.com/electron/electron/issues/33685)
[fix: rename WebSwapCGLLayer to WebSwapCGLLayerChromium by miniak · Pull Request #35961 · electron/electron](https://github.com/electron/electron/pull/35961)
[Release electron v21.3.4 · electron/electron](https://github.com/electron/electron/releases/tag/v21.3.4)
[fix: rename WebSwapCGLLayer to WebSwapCGLLayerChromium by trop[bot] · Pull Request #36798 · electron/electron](https://github.com/electron/electron/pull/36798)
[5253 - Allow choosing EAGL or CGL at runtime - angleproject](https://bugs.chromium.org/p/angleproject/issues/detail?id=5253)
[1217851 - Class duplication of WebSwapLayerCGL - chromium](https://bugs.chromium.org/p/chromium/issues/detail?id=1217851#c6)

