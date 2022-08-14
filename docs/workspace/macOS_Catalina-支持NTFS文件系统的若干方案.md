---
title: macOS 支持 NTFS 文件系统的若干方案
date: 2022-08-13
permalinkPattern: :year/:month/:day/:slug.html
---

<!--
 * @Author: rich1e
 * @Title: macos-supports-ntfs-scheme
 * @Date: 2022-08-13 20:13:47
 * @LastEditors: rich1e
 * @LastEditTime: 2022-08-14 19:37:11
-->

# macOS 支持 NTFS 文件系统的若干方案

[[toc]]

最近在整理家务，翻找到几年前用来给 Macbook Pro 做备份的移动硬盘。插上 USB 接口，移动硬盘无法挂载且硬盘灯一直闪烁。然后，换 Windows 系统试验了一下，一切正常。

这块移动硬盘闲置很久了，之前一部分作为 Macbook Pro 的时间机器备份盘，一部分作为移动硬盘使用。可能忘记了，加上系统升级和旧软件不兼容，删除了 NTFS 相关的软件，导致 macOS 已无法识别。这当然难不倒我，嘿嘿～

- NTFS（New Technology File System）[^1]，是 Microsoft 公司开发的专用文件系统，从 Windows NT 3.1 开始成为 Windows NT 家族的默认文件系统。
- macOS 是苹果公司研发的专用操作系统，其内部使用 APFS 文件系统。

## 第三方软件

经过一番查询，发现仍然是那些软件：Paragon NTFS for Mac / Tuxera NTFS for Mac，市面上最老牌最稳定的 2 款软件。

不差钱的，可以直接使用。

| 名称 | Paragon NTFS for Mac | Tuxera NTFS for Mac | Fuse for macOS | Mounty |
| ---- | -------------------- | ------------------- | -------------- | ------ |
| Free | NO                   | NO                  | YES            | YES    |

上面列举的仅仅是一部分，事实上还有很多其他软件。免费的、付费的、开源的，都有。在这里就不一一列举软件的使用方式了，相信软件官网会更加翔实。

## 原生支持 [^2] [^3]

一般情况下，macOS 系统默认关闭 NTFS 文件的读写支持，当遇到 NTFS 格式的数据时，只能读不能写。要启用该工具，需要使用终端，风险自负。该功能在某种程度上是实验性的，或者至少苹果不支持，所以结果可能是不可预测的。

### 开启 NTFS 读写支持

1. 打开 Terminal
2. 连接格式化为 NTFS 的移动硬盘
3. 输入这个命令

```shell
sudo nano /etc/fstab
```

> 注意：这将打开 Mac 识别的 NTFS 文件的完整列表。

4. 输入您的管理员密码，并在出现提示时按 Return
5. 输入以下命令，将 `NAME` 替换为移动硬盘的外部卷标题

```sh
LABEL=NAME none ntfs rw,auto,nobrowse
```

6. 按 `Control + O` 保存，然后按 Return
7. 按 `Control + X` 退出 nano
8. 弹出移动硬盘并重新连接它

完成该过程后，您的外部磁盘将在 `/Volumes` 中可用。在 macOS 中访问可写 NTFS 移动硬盘的快速方法：

1. “访达” 中启动 “前往文件夹” `shift + command + G`
2. 输入 `/Volumes` 并按下 Return 键

### NTFS-3G [^4] [^5]

1. 安装 Macfuse 和 NTFS-3G

```shell
brew tap gromgit/homebrew-fuse
# 允许您通过第三方文件系统扩展 macOS 的本机文件处理能力
brew install macfuse
brew install ntfs-3g-mac
```

> macFUSE（以前称为 osxFUSE），如果不小心安装了 osxfuse，最好是卸载了重新安装。

```shell
➜  ~ brew install osxfuse
==> Caveats
`osxfuse` has been succeeded by `macfuse` as of version 4.0.0.

To update to a newer version, do:
  brew uninstall osxfuse
  brew install macfuse

osxfuse requires a kernel extension to work.
If the installation fails, retry after you enable it in:
  System Preferences → Security & Privacy → General

For more information, refer to vendor documentation or this Apple Technical Note:
  https://developer.apple.com/library/content/technotes/tn2459/_index.html

You must reboot for the installation of osxfuse to take effect.
```

```shell
➜  ~ brew install macfuse
==> Caveats
macfuse requires a kernel extension to work.
If the installation fails, retry after you enable it in:
  System Preferences → Security & Privacy → General

For more information, refer to vendor documentation or this Apple Technical Note:
  https://developer.apple.com/library/content/technotes/tn2459/_index.html
```

2. 查找移动硬盘分区名称

输入以下命令，`/dev/disk3s1` 为您要挂载的实际 NTFS 分区。

```shell
diskutil list
```

![](@images/workspace/macos-supports-ntfs-scheme/image-20220814160511519.png)

3. 先卸载 `/dev/disk3s1`（这一步骤非必须）

```shell
sudo diskutil unmount /dev/disk3s1
```

4. 创建挂载目录，再加载移动硬盘

```shell
# mount with ntfs-3g
sudo mkdir /Volumes/mnt
sudo /usr/local/bin/ntfs-3g /dev/disk3s1 /Volumes/mnt -o local -o allow_other -o auto_xattr -o auto_cache
# alternatively...
sudo /usr/local/sbin/mount_ntfs /dev/disk3s1 /Volumes/mnt
```

完成该过程后，移动硬盘在 `/Volumes` 中可用。可参考上面的方式快速访问 NTFS 移动硬盘。

执行 `mount` 命令，可以查看当前挂载了哪些卷分区。

![](@images/workspace/macos-supports-ntfs-scheme/Image-20220814172351.png)

## 总结

这个事情折腾了 2 天，目前是使用 `NTFS-3G` 的方式加载。这个方式有个很大的问题，移动硬盘频繁插拔之后，会显示不出 `NTFS` 移动硬盘，即便使用命令 `diskutil list` 也不管用。

![image-20220814160511519](@images/workspace/macos-supports-ntfs-scheme/Image-20220814180622.png)

估计是 USB 的问题 [^6]，尝试使用以下命令重启 USB，但还是不行。

```shell
sudo killall -STOP -c usbd # will pause the issue related process
sudo killall -CONT usbd # will resume the process
```

后续还需再研究一下。[^7] [^8]

- `sudo pkill -f fsck` [^9]
- 替换系统的 NTFS 挂载文件 [^10]

## FQA

- ntfs-3g has been disabled because it requires closed-source macFUSE!

> Homebrew 上的 macFUSE 已经闭源，需要使用其他人提供的源。[^11]

- 为什么我的外置硬盘没有显示在 Mac 上？[^12]
  - 外置硬盘损坏。
  - 外部硬盘驱动器的物理损坏。
  - USB 连接器故障。
  - Mac USB 端口问题。
  - 隐藏的外部驱动器。
  - 外部硬盘驱动器上的格式不正确。
  - 最近的 macOS Big Sur 或 Catalina 更新问题。

## Ref

视频

- [玩转 Mac(一)如何读写 NTFS 移动硬盘？再也不用花钱买 APP 了](https://www.youtube.com/watch?v=BXB5enphV8w)
- [How To Use ntfs-3g-mac to read write ntfs drives in Big Sur](https://www.youtube.com/watch?v=wc9AoPRdGhA)

文章

- [How To Mount R/W NTFS USB hard drive in Big Sur](https://www.dognmonkey.com/techs/how-to-mount-r-w-ntfs-usb-hard-drive-in-big-sur.html)
- [Mac 上安装 ntfs-3g 过程整理](https://www.bilibili.com/read/cv13273551/)
- [在 M1 Mac 上安装使用 NTFS-3G](https://www.iloveanan.com/install-ntfs-3g-on-m1-mac.html)
- [macos 借用 ntfs-3g, 使得 macos 支持 ntfs 文件系统读写](https://www.cnblogs.com/xuyaowen/p/macos-ntf3g-ntfs-enable.html)

[^1]: [NTFS - Wikipedia](https://en.wikipedia.org/wiki/NTFS)
[^2]: [How to Use NTFS Drives on Mac](https://setapp.com/how-to/use-ntfs-for-mac)
[^3]: [How to Use an NTFS Drive on Mac: 4 Methods](https://www.makeuseof.com/use-ntfs-on-mac/)
[^4]: [NTFS for Mac OS X：使用 Brew 安裝 NTFS-3G](https://www.cnblogs.com/gsmusician/p/5095744.html)
[^5]: [NTFS 3G](https://github.com/osxfuse/osxfuse/wiki/NTFS-3G)
[^6]: [解决 Macbook usb 断连问题](https://blog.wrzsj.top/2019/09/16/%E8%A7%A3%E5%86%B3Macbook-usb%E6%96%AD%E8%BF%9E%E9%97%AE%E9%A2%98/)
[^7]: [让 Catalina 原生支持 NTFS 读写](https://zhuanlan.zhihu.com/p/115923502)
[^8]: [Make NTFS writable again (on OSX)](https://dev.to/zankyr/make-ntfs-writable-again-on-osx-35kc)
[^9]: [无损解决 macOS 下移动硬盘不能装载的办法](https://zhuanlan.zhihu.com/p/358031701)
[^10]: [Write to NTFS on macOS Sierra (osxfuse + ntfs-3g)](https://gist.github.com/takeit/9fa83840f3b2065e204dc9d52cef3693)
[^11]: [Error: ntfs-3g has been disabled because it requires FUSE!](https://github.com/osxfuse/osxfuse/issues/818)
[^12]: [修复外置硬盘未在 Mac 上显示 | 7 种行之有效的方法](https://www.remosoftware.com/info/cn/troubleshoot-external-hard-drive-not-showing-mac/)
