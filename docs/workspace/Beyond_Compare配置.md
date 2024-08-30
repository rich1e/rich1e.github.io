---
title: Beyond Compare 配置
date: yyyy-mm-dd
permalinkPattern: :year/:month/:day/:slug.html
permalink: /workspace/beyond-compare-config
---

<!--
 * @Author       : yuqigong@outlook.com
 * @Date         : 2024-08-30 15:54:35
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2024-08-30 17:19:33
 *
-->

# Beyond Compare 配置

[[toc]]

> 首先，官方的便携版(zip版)是不支持集成到右键菜单的。[^1] [^2]
>
> 同样，网络上流传的绿色免安装版本如果只有一个 `exe` 文件，那么也不支持集成右键菜单。

## 不用破解码无限试用 for Mac

官网下载 [BeyondCompare](http://www.scootersoftware.com/download.php)

### 无限试用的原理

BCompare是应用程序启动的程序，只要在在启动的时候删除 `registry.dat` 注册信息就好了，为此可以在该目录下添加一个批处理文件用来处理这个操作。

```sh
Library/Application Support/Beyond Compare/registry.dat
```

### 无限试用的操作方法

打开命令行终端，进入到安装目录里面的 `Contents/Macos`，命令行指令：

```sh
cd /Applications/Beyond\ Compare.app/Contents/MacOS/
```

修改可执行文件名，并创建脚本

```sh
mv BCompare BCompare.real # 把可执行文件改名
touch BCompare # 创建新的启动脚本文件
vim BCompare # 编辑脚本内容，内容如下所示
```

此时进入vim编辑器，英文输入状态下输入一个i，进入编辑模式，粘贴以下内容：

```sh
#!/bin/bash
rm "/Users/$(whoami)/Library/Application Support/Beyond Compare/registry.dat"
"`dirname "$0"`"/BCompare.real $@
```

输入以后，先按一下 `esc` 键，然后英文输入状态输入 `:wq`，保存退出。

最后修改下脚本的权限：

```sh
chmod a+x BCompare # 给脚本可执行权限
```

打开软件，正常使用

[原文](https://gist.github.com/huqi/35f2a0792aef830898ca)

1. go to the dir : /Applications/Beyond Compare.app/Contents/MacOS
2. change the name `BCompare` to `BCompare.bak`
3. touch a file name `BCompare` , and `chmod a+u BCompare`
4. insert BCompare the content :

```shell
#!/bin/bash
rm "/Users/$(whoami)/Library/Application Support/Beyond Compare/registry.dat"
"`dirname "$0"`"/BCompare.bak $@
```

> Windows 也可以如此操作，可以参考。[^3]

## Beyond Compare 右键菜单

方法一，点击选项，打开**资源管理器整合**。

![options](@images\workspace\beyond-compare-config\image-20240830164838.png)

方法二，使用官方[修复工具](https://www.scootersoftware.com/BC4ShellExFix.zip)。

方法三，编写注册表脚本，手动导入。[^4]

```powershell
@echo off
rem 请将此脚本放在BC的目录执行，例如 C:\Program Files\Beyond Compare

rem 注册右键
reg add HKEY_CURRENT_USER\Software\Classes\*\shellex\ContextMenuHandlers\CirrusShellEx /ve /d "{57FA2D12-D22D-490A-805A-5CB48E84F12A}" /f
reg add HKEY_CURRENT_USER\Software\Classes\CLSID\{57FA2D12-D22D-490A-805A-5CB48E84F12A} /ve /d "CirrusShellEx" /f
reg add HKEY_CURRENT_USER\Software\Classes\CLSID\{57FA2D12-D22D-490A-805A-5CB48E84F12A}\InProcServer32 /ve /d "%~dp0BCShellEx64.dll" /f
reg add HKEY_CURRENT_USER\Software\Classes\CLSID\{57FA2D12-D22D-490A-805A-5CB48E84F12A}\InProcServer32 /v "ThreadingModel" /d "Apartment" /f
reg add HKEY_CURRENT_USER\Software\Classes\Directory\shellex\ContextMenuHandlers\CirrusShellEx /ve /d "{57FA2D12-D22D-490A-805A-5CB48E84F12A}" /f
reg add HKEY_CURRENT_USER\Software\Classes\Folder\shellex\ContextMenuHandlers\CirrusShellEx /ve /d "{57FA2D12-D22D-490A-805A-5CB48E84F12A}" /f
reg add HKEY_CURRENT_USER\Software\Classes\lnkfile\shellex\ContextMenuHandlers\CirrusShellEx /ve /d "{57FA2D12-D22D-490A-805A-5CB48E84F12A}" /f
reg add "HKEY_CURRENT_USER\Software\Microsoft\Windows\CurrentVersion\Shell Extensions\Approved" /v "{57FA2D12-D22D-490A-805A-5CB48E84F12A}" /t REG_SZ  /d "Beyond Compare 4 Shell Extension" /f
```

## Beyond Compare 修改语言包

目前官方只有繁体中文，下载语言包直接安装即可。[Language Pack](https://www.scootersoftware.com/download/user_translations)


## git 配置

打开 **Beyond Compare** 选择 **Install Command Line tools**

```sh
Successfully installed command line tools.

/usr/local/bin/bcomp:
Launches comparison and waits for it to complete.

/usr/local/bin/bcompare:
Launches comparison and returns immediately.
```

打开 `vi ~/.gitconfig`, 配置如下

```sh
[user]
    name = yourname
    email = youremail
[diff]
    tool = bc3
[merge]
    tool = bc3
[mergetool "bc3"]
    trustExitCode = true
[difftool]
    prompt = false

```

命令行中配置：

```sh
git config --global user.name yourname
git config --global user.email youremail
git config --global diff.tool bc3
git config --global merge.tool bc3
git config --global mergetool.bc3.trustExitCode true
git config --global difftool.prompt false
```

- [Beyond Compare 在Windows的安装教程-CSDN博客](https://blog.csdn.net/m0_56182552/article/details/139259442)
- [Beyond Compare 专业版和标准版功能区别？ | Beyond Compare 中文官方网站](https://www.beyondcomparepro.com/blog/314)
- [Beyond Compare 4 license for Windows, Mac, Linux](https://gist.github.com/rise-worlds/5a5917780663aada8028f96b15057a67)
- [Knowledge Base - Using Beyond Compare with Version Control Systems](https://www.scootersoftware.com/kb/vcs)
- [User Contributed Translations](https://www.scootersoftware.com/download/user_translations)
- [Change language? - Scooter Forums](https://forum.scootersoftware.com/forum/beyond-compare-4-discussion/general/85618-change-language)
- [Knowledge Base - Explorer Shell Extension](https://www.scootersoftware.com/kb/shellex)
- [应对Beyond Compare无右键菜单的问题 - SoyaDokio - 博客园](https://www.cnblogs.com/soyadokio/p/15292505.html)
- [Beyond Compare 3添加右键菜单 - （︶O︶） - 博客园](https://www.cnblogs.com/hwli/p/10056723.html)

[^1]: [关于Beyond Compare添加右键菜单的研究_beyondcompare 便携式安装不能整合右键-CSDN博客](https://blog.csdn.net/MrTsai_cpp/article/details/88616129)
[^2]: [修正Beyond Compare 4无右键菜单的问题-Beyond Compare中文网站](https://www.beyondcompare.cc/jiqiao/bc-wyjcdwd.html)
[^3]: [Beyond Compare3 注册密钥和添加到右键菜单 - jack_Meng - 博客园](https://www.cnblogs.com/mq0036/p/3902249.html)
[^4]: [Beyond Compare右键菜单找回 / 秋梦无痕](https://blog.sinzy.net/@ifyr/entry/23610)
