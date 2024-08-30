```ad-note
title: 参考资料

Ref：

[FiddlerEverywhere 3.4.1 的版本支持该方式吗？ · Issue #8 · msojocs/fiddler-everywhere-crack](https://github.com/msojocs/fiddler-everywhere-crack/issues/8)
[fiddler-everywhere-crack/DETAIL.MD at master · msojocs/fiddler-everywhere-crack](https://github.com/msojocs/fiddler-everywhere-crack/blob/master/DETAIL.MD)
[ildasm命令行 - fredli2005 - 博客园](https://www.cnblogs.com/SeekerLee/archive/2008/09/06/1285616.html)
[CIL之——ilasm.exe和ildasm.exe_changuncle的博客-CSDN博客](https://blog.csdn.net/xiaouncle/article/details/72808696)
[dotnet publish 命令 - .NET CLI | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/core/tools/dotnet-publish)
[应用程序发布 - .NET | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/core/deploying/#publish-self-contained)
[Installing .NET 6 on your M1 Mac (manually) | by Maarten Merken | Medium](https://maartenmerken.medium.com/installing-net-6-alpha-on-your-m1-mac-23a35aa6f02c)
[.NET 运行时标识符 (RID) 目录 | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/core/rid-catalog#macos-rids)
[IT 生涯，我的常用软件清单 - 掘金](https://juejin.cn/post/6844903471519383560)
[操作步骤：用ildasm/ilasm修改IL代码 - dudu - 博客园](https://www.cnblogs.com/dudu/archive/2011/05/17/ildasm_ilasm_il.html)
[如何使用ILAsm与ILDasm修改.Net exe(dll)文件 - TeckBesty分享技术网](https://www.teckbesty.com/post/5287o8k7ad.html)
[dotnet/installer: .NET SDK Installer](https://github.com/dotnet/installer#installers-and-binaries)
[Extensions Wishlist · Issue #7122 · dotnet/sdk](https://github.com/dotnet/sdk/issues/7122)
[pjbgf/dotnet-ildasm: Light-weight cross platform IL disassembler tool built in C#.](https://github.com/pjbgf/dotnet-ildasm)
[【工具】Il2CppDumper for mac/linux_李华明Himi的技术博客_51CTO博客](https://blog.51cto.com/xiaominghimi/2524877)
[.net core 多sdk 多版本 环境切换_Igor Sun的博客-CSDN博客_.net core 切换版本](https://blog.csdn.net/deflypig/article/details/121448903)
[Ildasm.exe（IL 反汇编程序） - .NET Framework | Microsoft Learn](https://learn.microsoft.com/zh-cn/dotnet/framework/tools/ildasm-exe-il-disassembler)
[Linux中记录终端输出到文本文件【重定向，管道】_YDQN的博客-CSDN博客_linux管道输出到文件](https://blog.csdn.net/LOVE1055259415/article/details/80060204)
[fiddler everywhere 3.4.0 for mac m1.zip - 猪头网盘](https://pan.iculture.cc/s/3bgAIP)
[Fiddler Everywhere3.3.0 Windows和谐版 | CN-SEC 中文网](https://cn-sec.com/archives/1180254.html)
[（9.8更新3.4.1版）Fiddler everywhere x64平台的破解（Windows/Linux/Mac OS可用） - 『逆向资源区』 - 吾爱破解 - LCG - LSG |安卓破解|病毒分析|www.52pojie.cn](https://www.52pojie.cn/forum.php?mod=viewthread&tid=1679708&extra=page%3D1%26filter%3Dauthor%26orderby%3Ddateline)
[Fiddler EveryWhere 3.4.0 for Mac M1 - 『脱壳破解区』 - 吾爱破解 - LCG - LSG |安卓破解|病毒分析|www.52pojie.cn](https://www.52pojie.cn/forum.php?mod=viewthread&tid=1679610)
[【Fiddler EveryWhere】使用教程，基本使用、IOS抓包配置、破解、拦截篡改 - 情调丶 - 博客园](https://www.cnblogs.com/Ray-2019/p/16802749.html#!comments)
[最新｜解决Mac安装软件的“已损坏，无法打开。 您应该将它移到废纸篓”问题 - 知乎](https://zhuanlan.zhihu.com/p/135948430)
```

## 下载 fiddler

打开[下载页面](https://www.telerik.com/download/fiddler-everywhere)，下载 [v3.4.0 for mac](https://downloads.getfiddler.com/mac-arm64/Fiddler%20Everywhere%203.4.0.dmg)。

![[Pasted image 20221104172553.png]]

- Intel Chip 
- Apple Silicon Chip - M1 / M2 的 mac 下载这个

安装完成后选择试用，然后关闭。

## 安装 dotnet

使用 Homebrew 安装 dotnet，

```sh
brew install dotnet
```

创建一个空文件夹并执行，

```sh
dotnet new console -n test
```

添加 `ILAsm` 和 `ILDAsm` 模块，

```sh
dotnet add package Microsoft.NETCore.ILAsm
# or
dotnet add package Microsoft.NETCore.ILDAsm
```

发布并构建项目，

```sh
dotnet publish -c Release --self-contained --runtime osx.11.0-x64
```

将 `ILAsm` 和 `ILDAsm` 模块添加到运行环境，

```sh
export PATH=your-path/{ILAsm和ILDAsm所在目录}:$PATH
```

## 反编译 dll

```sh
ildasm Fiddler.WebUi.dll > Fiddler.WebUi.il
# or
ildasm FiddlerBackendSDK.dll > FiddlerBackendSDK.il
```

## Crack 过程

### 修改文件

- 修改 main.xxxx.js
- 修改 Fiddler.WebUi.il 和 FiddlerBackendSDK.il

打开 `fiddler/resources/app/out/WebServer/ClientApp/dist/main.xxx.js` 搜索 `updateUserLicense` 函数，请将 `Ie` 替换为参数名称：

```js
Ie.licenseInfo.currentLicense = "Pro"
Ie.licenseInfo.hasExpiredTrial = false
Ie.licenseInfo.isTrialAvailable = false
Ie.licenseInfo.hasValidLicense = true
```

![[Pasted image 20221104180204.png]]

`Fiddler.WebUi.il` 和 `FiddlerBackendSDK.il` 的修改，可[参考](https://github.com/msojocs/fiddler-everywhere-crack/blob/master/DETAIL.MD)。

### 替换 Crack 文件

> **再次提示：替换文件前，先打开 `Fiddler Everywhere` 选择试用，然后关闭再 Crack !!!**

> Crack 文件不是通过自己编译得到，[具体操作](https://github.com/msojocs/fiddler-everywhere-crack/issues/8#issuecomment-1303012900) 可参考。

1、替换两个 `dll` 文件

> /Applications/Fiddler\ Everywhere.app/Contents/Resources/app/out/WebServer

- FiddlerBackendSDK.dll
- Fiddler.WebUi.dll

2、将 `main.8a2e352fe4ea9310.js` 复制到下面路径，复制原始 `main.xxxx.js` 的文件名再删除，然后把 `main.8a2e352fe4ea9310.js` 改名为原始的 `main.xxxx.js`

> /Applications/Fiddler\ Everywhere.app/Contents/Resources/app/out/WebServer/ClientApp/dist

- main.8a2e352fe4ea9310.js

3、将 `main.js` 复制到下面路径，替换原文件

> /Applications/Fiddler\ Everywhere.app/Contents/Resources/app/out

- main.js

4、重启即可。

![[55bbb162-f346-416f-bc16-4845bb080226.png]]

![[1bcbcb07-537c-4b08-a175-a0c309a824fd.png]]

## 禁用自动更新

以上 Crack 方式可能存在问，还需要关闭 `Fiddler Everywhere` 自动更新。

> 自动更新的代码在 /Applications/Fiddler\ Everywhere.app/Contents/Resources/app/out/main.js 中。

具体操作参考[这个](https://github.com/msojocs/fiddler-everywhere-crack/issues/8#issuecomment-1303161696)。

参考：

[（9.8更新3.4.1版）Fiddler everywhere x64平台的破解（Windows/Linux/Mac OS可用） - 『逆向资源区』 - 吾爱破解 - LCG - LSG |安卓破解|病毒分析|www.52pojie.cn](https://www.52pojie.cn/forum.php?mod=viewthread&tid=1679708)