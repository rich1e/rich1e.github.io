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

Ref

https://sysin.org

![[Pasted image 20230319072545.png]]