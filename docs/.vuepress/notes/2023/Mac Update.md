#opencore-legacy-patcher #mac 

> 目前使用的硬件为 MacBook Pro，2012年生产，距离现在至少有10年。由于苹果新系统对硬件有要求，常规方式安装不了，所以选择hack的方式安装，当然这一切归功于开源社区的力量。

> 另外，由于工作原因，大部分时间里需要使用Homebrew管理和安装软件包，随着苹果新系统和架构的升级，Homebrew对苹果系统版本最低要求macOS 11（Big Sur）或更高版本，才能获得最好的支持。

基于以上原因，决定使用 `OpenCore Legacy Patcher` 安装最新的苹果系统`（Ventura）`，以下内容简单记录了安装过程。

> 升级到 `Ventura` 系统后，感觉操作非常流畅，系统运行也很稳定，相比 `Catalina` 有很大提升。

> 使用 `OpenCore Legacy Patcher` 安装的系统，支持系统自动更新。当然保险起见，建议关闭系统自动更新。

> 如果遇到系统卡顿，检查是否运行了 ` Post Install Root Patch`。

参考：[Installation — Homebrew Documentation](https://docs.brew.sh/Installation#2)

## 前期准备

1. 备份
2. 检查机型；
3. 准备移动硬盘或者 U 盘；
4. 下载 macOS；
5. 下载 OpenCore Legacy Patcher；

### 备份

参考：[使用“时间机器”备份你的 Mac - 官方 Apple 支持 (中国)](https://support.apple.com/zh-cn/HT201250)

### 检查机型

```sh
# 电脑的处理器型号
sysctl machdep.cpu.brand_string
# 处理器逻辑核心数量
sysctl hw.physicalcpu
# 处理器物理核心数量
sysctl hw.logicalcpu
```

![[2023/meta/Pasted image 20230702111135.png]]

参考：[在Mac OS系统下查看CPU型号以及核心数量 - 知乎](https://zhuanlan.zhihu.com/p/322291715)

```sh
system_profiler SPHardwareDataType | grep 'Model Identifier'
```

![[2023/meta/Pasted image 20230702111616.png]]

![[images/2023/mac-update/Pasted image 20230319001939.png]]

参考：

[MacBook Pro (15 英寸, 2012 年中) - 技术规格 (中国)](https://support.apple.com/kb/sp694?locale=zh_CN)
[如何查找英特尔® 酷睿™处理器是第几代](https://www.intel.cn/content/www/cn/zh/support/articles/000032203/processors/intel-core-processors.html)
[英特尔® 酷睿™ i7-3615QM 处理器](https://www.intel.cn/content/www/cn/zh/products/sku/64900/intel-core-i73615qm-processor-6m-cache-up-to-3-30-ghz/specifications.html)
[为什么说第三代酷睿是小巅峰？ - 知乎](https://www.zhihu.com/question/550234449)
[笔记本攻略 篇二：淘货必备，一文看全MacBook历史机型与配置\_笔记本电脑\_什么值得买](https://post.smzdm.com/p/a9g5n267/)

### 制作可引导的 macOS 安装器

#### **使用 “磁盘工具” 格式化安装盘**

> 安装盘使用移动硬盘或者 U 盘均可，U 盘存储空间至少16G。

![[images/2023/mac-update/Pasted image 20230319083743.png]]

#### **下载 macOS 系统**

-  Create macOS Installer（需要先安装 `OpenCore Legacy Patcher`）
![[2023/meta/Pasted image 20230702124512.png]]

- 或者直接[下载](https://swcdn.apple.com/content/downloads/36/06/042-01917-A_B57IOY75IU/oocuh8ap7y8l8vhu6ria5aqk7edd262orj/InstallAssistant.pkg)

![[images/2023/mac-update/Pasted image 20230319072545.png]]

参考：

[Apple 最新 MacOS Ventura 13.2.1 (22D68) Final 正式版官方镜像下载 - 大眼仔旭](http://www.dayanzai.me/macos-ventura.html)

#### **使用 “createinstallmedia” 命令**

```sh
sudo /Applications/Install\ macOS\ Ventura.app/Contents/Resources/createinstallmedia --volume /Volumes/rich1e
```

![[images/2023/mac-update/Pasted image 20230319084548.png]]

参考：

[如何创建可引导的 macOS 安装介质 - sysin | SYStem INside | 软件与技术分享](https://sysin.org/blog/macos-createinstallmedia/)
[创建可引导的 macOS 安装器 - 官方 Apple 支持 (中国)](https://support.apple.com/zh-cn/HT201372)
[How to create a bootable USB drive](https://www.ifixit.com/Guide/How+to+create+a+bootable+USB+drive/66371)

## OpenCore Legacy Patcher 使用

1. 下载 `OpenCore Legacy Patcher`
2. 启动 `OpenCore Legacy Patcher` 和 `macOS` 安装器 
3. 构建和安装 `Build and Install OpenCore`
4. 补丁修复 `Post Install Root Patch`

### 下载 `OpenCore Legacy Patcher`

> 建议[下载](https://github.com/dortania/Opencore-Legacy-Patcher/) OpenCore-Patcher-GUI.app.zip，图形界面 App，包含了程序运行所需的全部文件。

### 启动 `OpenCore Legacy Patcher` 和 `macOS` 安装器 

现在构建 `OpenCore` 配置。

选择要安装的磁盘，如下图，disk0 为电脑内置磁盘，默认分区的情况下，如果有两块磁盘，或者多个 USB 存储设备，都会列出，本例中 disk7 是一块 USB 接口的移动U盘，点击即可。

![[images/2023/mac-update/Pasted image 20230319094212.png]]

![[images/2023/mac-update/Pasted image 20230319094342.png]]

![[images/2023/mac-update/Pasted image 20230319094601.png]]

询问是否需要重启。

```
Reboot to apply?

OpenCore has finished installing to disk.

You will need to reboot and hold the Option key and select OpenCore/Boot EFI's option.

Would you like to reboot?
```

重新启动 Mac，按住 `Option` 键不放，直到出现启动选择画面，选择带有 OpenCore 徽标的 `EFI Boot` 图标（按住 `Control` 键将使其成为默认引导条目）：

![[2023/meta/Pasted image 20230702131158.png]]

现在您已经加载了 `OpenCore`，“select Install macOS”：

![[2023/meta/Pasted image 20230702131727.png]]

您很快就会进入安装程序屏幕！如果在构建 `OCLP` 时启用了详细模式，那么屏幕上将会显示大量文本。从那以后，它就像任何普通的 macOS 安装一样。有关引导过程的示例，请参阅以下视频 [OpenCore Legacy Patcher Boot Process(opens new window)](https://www.youtube.com/watch?v=AN3zsbQV_n4)

![[2023/meta/Pasted image 20230702132533.png]]

1. 选择磁盘工具，抹掉原有磁盘（默认名称：Macintosh HD，格式：APFS）即可全新安装；
2. 关闭磁盘工具，选择 “安装 macOS Ventura”；

> 截止到这里，macOS Ventura 安装完成，随后系统会重新启动。

### 再次构建和安装 `Build and Install OpenCore`

现在 `OpenCore` 是安装在 USB 接口的移动U盘的 `EFI` 分区，拔掉 移动U盘将无法正常启动，我们需要将 `OpenCore` 安装到 `Mac` 内置储存的 `EFI` 分区中，这样才能脱离 USB 存储正常启动。步骤与上文中 **构建和安装 OpenCore** 类似。
#### 运行 `OpenCore Legacy Patcher`，点击 `Build and Install OpenCore` 再次 `Install OpenCore`。

![[2023/meta/Pasted image 20230702135214.png]]

#### `Install OpenCore` 时选择内置存储（通常是 `disk0`）。

![[2023/meta/Pasted image 20230702135408.png]]

#### 点击 `Settings` 根据需要更改设置，无需启动选择器即可无缝启动。

![[2023/meta/Pasted image 20230702140025.png]]

### 补丁修复 `Post Install Root Patch`

> 对于使用不受支持的 `GPU/Wi-Fi` 卡的用户，您需要运行 `Post Install Root Volume` 补丁以恢复功能。

![[2023/meta/Pasted image 20230422214233.png]]

![[2023/meta/Pasted image 20230422220814.png]]

![[2023/meta/Pasted image 20230702140426.png]]


```md
OpenCore Legacy Patcher has detected you're running without Root Patches, and would like to install them.

macOS wipes all root patches during OS installs and updates, so they need to be reinstalled.

Following Patches have been detected for your system: 
- Graphics: Nvidia Kepler
- Graphics: Intel Ivy Bridge

Would you like to apply these patches?
```

![[2023/meta/Pasted image 20230806194428.png]]

Ref

https://sysin.org
[内核错误 | OpenCore 安装指南](https://thrrip.github.io/OpenCore-Install-Guide/troubleshooting/extended/kernel-issues.html#%E5%8D%A1%E5%9C%A8-ioconsoleusers-gioscreenlock-giolockstate-3-%E6%88%96%E9%99%84%E8%BF%91)
[使用 OpenCore Legacy Patcher 为 2015 款 MacBook Pro 激活 AirPlay - Marco Nie](https://blog.niekun.net/archives/2353.html)
[macOS 下载汇总（系统、应用和教程） - sysin | SYStem INside | 软件与技术分享](https://sysin.org/blog/macOS/)
[在不受支持的 Mac 上安装 macOS Ventura、Monterey、Big Sur (OpenCore Legacy Patcher) - sysin | SYStem INside | 软件与技术分享](https://sysin.org/blog/install-macos-13-on-unsupported-mac/#5-%E8%BF%90%E8%A1%8C-%E2%80%9CPost-Install-Root-Patch%E2%80%9D)
[Working Around Legacy Acceleration Issues | OpenCore Legacy Patcher](https://dortania.github.io/OpenCore-Legacy-Patcher/ACCEL.html#broken-background-blurs)
[如何在 Mac 和虚拟机上安装 macOS Big Sur、Monterey 和 Ventura - sysin | SYStem INside | 软件与技术分享](https://sysin.org/blog/how-to-install-macos/#3-%E5%9C%A8%E7%89%A9%E7%90%86%E6%9C%BA-ESXi-%E4%B8%AD%E5%AE%89%E8%A3%85%E8%99%9A%E6%8B%9F%E6%9C%BA-2)
[不受支持的 Mac 上的通用控制 - sysin | SYStem INside | 软件与技术分享](https://sysin.org/blog/macos-universal-control-on-unsupported-mac/)
[Ventura on Unsupported Macs [2012-2016] OpenCore Legacy Patcher!!! - YouTube](https://www.youtube.com/watch?v=3LOqHMo5WSQ&ab_channel=Mr.Macintosh)
[完整教程：在旧 Mac 上安装 macOS Ventura (OpenCore Legacy Patcher)_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1jg41167q3/?from=search&vd_source=3710ff3fa57db21b813ef420454b2e16)
[OpenCore Legacy Patcher](https://dortania.github.io/OpenCore-Legacy-Patcher/)
[【暫定版】OpenCore Legacy Patcher 0.6.6以降の新UIを詳解: 変更点や使い方など – あの角を曲がれば、かぼしー](https://blog.kabocy.com/mac/8373/)
[OpenCore Legacy Patcher 0.6.7! Auto Updates + macOS 14 ???? - YouTube](https://www.youtube.com/watch?v=GMaX4_iy5bk&ab_channel=Mr.Macintosh)
[史上最全的黑苹果系统「MacOS」安装教程，菜鸟也能秒掌握！-规范图集|经验交流-金瓦刀](https://www.onehiker.com/5611/)
[免重灌！將舊款Mac升級到最新版macOS Ventura - IT大叔](https://uncleit.net/%E5%B0%87%E8%88%8A%E6%AC%BEmac%E5%8D%87%E7%B4%9A%E5%88%B0%E6%9C%80%E6%96%B0%E7%89%88macos.html)
[【完整指南】如何在不受支援的 Mac 上成功安裝 macOS Ventura](https://www.drbuho.com/zh-tw/how-to/install-macos-on-unsupported-mac)
[【詳細教學】如何在 Mac 上將外接硬碟、USB 隨身碟格式化 - Dr.Buho](https://www.drbuho.com/zh-tw/how-to/format-external-hard-drive-mac)
[OpenCore Legacy Patcherのルートパッチをアップデートする方法 – あの角を曲がれば、かぼしー](https://blog.kabocy.com/mac/7461/)
[在不受支持的 Mac 上安装 macOS Ventura、Monterey、Big Sur (OpenCore Legacy Patcher) - sysin | SYStem INside | 软件与技术分享](https://sysin.org/blog/install-macos-13-on-unsupported-mac/#5-%E8%BF%90%E8%A1%8C-%E2%80%9CPost-Install-Root-Patch%E2%80%9D-2)
