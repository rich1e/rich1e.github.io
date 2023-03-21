前期准备

1. 备份
2. 检查机型；
3. 准备移动硬盘或者 U 盘；
4. 下载 macOS；
5. 下载 OpenCore Legacy Patcher；

## 备份

参考：[使用“时间机器”备份你的 Mac - 官方 Apple 支持 (中国)](https://support.apple.com/zh-cn/HT201250)

## 检查机型

```sh
system_profiler SPHardwareDataType | grep 'Model Identifier'
```

![[Pasted image 20230319001307.png]]

![[Pasted image 20230319001939.png]]

![[Pasted image 20230319003556.png]]

## 下载 macOS

参考：

[Apple 最新 MacOS Ventura 13.2.1 (22D68) Final 正式版官方镜像下载 - 大眼仔旭](http://www.dayanzai.me/macos-ventura.html)

## 准备移动硬盘或者 U 盘

> U 盘存储空间至少16G

![[Pasted image 20230319083743.png]]

## 制作可引导的 macOS 安装器

![[Pasted image 20230319084548.png]]

参考：

[如何创建可引导的 macOS 安装介质 - sysin | SYStem INside | 软件与技术分享](https://sysin.org/blog/macos-createinstallmedia/)

[创建可引导的 macOS 安装器 - 官方 Apple 支持 (中国)](https://support.apple.com/zh-cn/HT201372)

[How to create a bootable USB drive](https://www.ifixit.com/Guide/How+to+create+a+bootable+USB+drive/66371)

![[Pasted image 20230319094212.png]]

![[Pasted image 20230319094342.png]]

![[Pasted image 20230319094601.png]]

```
DO NOT RUN AUTOPKG-ASSETS MANUALLY!

THIS CAN BREAK YOUR SYSTEM'S INSTALL!

This package should only ever be invoked by the Patcher itself, never downloaded or run by the user. Download the OpenCore-Patcher.app on the Github Repository.


```

```
Reboot to apply?

OpenCore has finished installing to disk.

You will need to reboot and hold the Option key and select OpenCore/Boot EFI's option.

Would you like to reboot?
```

```ad-note
title: macOS QuickLook

[macOS QuickLook常用插件集合，效率神器，超实用！ - 知乎](https://zhuanlan.zhihu.com/p/30690152)
[GitHub - haokaiyang/Mac-QuickLook: QuickLook plugins and packages](https://github.com/haokaiyang/Mac-QuickLook)
[GitHub - sindresorhus/quick-look-plugins: List of useful Quick Look plugins for developers](https://github.com/sindresorhus/quick-look-plugins)

```

```ad-note
title: macOS & Zsh & Shell

[【Mac配置指北】之终端配置 - 掘金](https://juejin.cn/post/6983697673257746440)
[如何像专业人士一样使用 Zsh 配置 macOS 终端](https://www.freecodecamp.org/chinese/news/how-to-configure-your-macos-terminal-with-zsh-like-a-pro/)
[这 13 个小工具，让我的 Mac 菜单栏更好用 - 少数派](https://sspai.com/post/56160)
[Getting Started - Spaceship](https://spaceship-prompt.sh/getting-started/)
[Installing_CN · tonsky/FiraCode Wiki · GitHub](https://github.com/tonsky/FiraCode/wiki/Installing_CN)
[GitHub - powerline/fonts: Patched fonts for Powerline users.](https://github.com/powerline/fonts)
[Zsh常用插件整理 - 掘金](https://juejin.cn/post/7110009485783433229#heading-8)
[GitHub - wting/autojump: A cd command that learns - easily navigate directories from the command line](https://github.com/wting/autojump)
[Kubectl_好用的命令行工具：oh-my-zsh_技巧和窍门_Shell_琦彦_InfoQ写作社区](https://xie.infoq.cn/article/aeaff02944a0fa2c32cf01f30)

```

[Welcome to f.lux for macOS](https://justgetflux.com/news/pages/macquickstart/)

![[Pasted image 20230319223823.png]]i

在 macOS 上，您可以使用以下工具来测试磁盘的读写速度：

1.  Blackmagic Disk Speed Test: 这是一款免费的应用程序，可在 Mac App Store 上下载。它提供了一个简单易用的界面，可以测试磁盘的读写速度，并显示结果。
    
2.  AJA System Test: 这也是一款免费的应用程序，可在 Mac App Store 上下载。它提供了更多的选项和设置，可以对磁盘的读写速度进行更详细的测试，并显示结果。
    
3.  终端命令行：在终端应用程序中，您可以使用一些命令行工具来测试磁盘的读写速度，例如：
    

-   dd 命令: `dd if=/dev/zero of=testfile bs=1m count=1024 conv=fdatasync,notrunc status=progress` 这将创建一个大小为1GB的名为“testfile”的文件，并测量写入速度。
    
-   iozone 命令: `iozone -e -I -a -s 100M -r 4k -r 16k -r 512k -r 1024k -i 0 -i 1 -i 2` 这将使用 iozone 工具测试磁盘的随机和顺序读写速度，并生成详细的报告。
    

请注意，使用这些工具时，请关闭所有其他应用程序和进程，以获得更准确的测试结果。

Ref

https://sysin.org

![[Pasted image 20230319072545.png]]