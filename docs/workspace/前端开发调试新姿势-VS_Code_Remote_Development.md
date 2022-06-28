---
title: qdkftsxzs
date: 2022-06-24
permalinkPattern: :year/:month/:day/:slug.html
---

<!--
 * @Author: rich1e
 * @Title: qdkftsxzs
 * @Date: 2022-06-24 14:39:38
 * @LastEditors: rich1e
 * @LastEditTime: 2022-06-25 20:02:08
-->

# 前端开发调试新姿势 - VS Code Remote Development

[[TOC]]

疫情期间，家里的 mac 坏了。那个时候正好是 3/5 月份，上海还在隔离中，没办法修电脑。

在家远程办公，只能用 windows 电脑，开发体验真的一言难尽。

费了九牛二虎之力将前端开发环境配置完成，可使用起来一直不太顺畅，命令行基本是摆设。

最后，遇到 node 和 python 编译报错的问题，导致一个历史项目一直运行不起来。找了很多资料，换了多个版本 node 和 python，也无法通过编译，直到使用 VSCode + WSL 开发模式才解决。以下是安装教程和使用记录。

## 安装 VS Code

windows 上我是使用 Scoop 管理软件安装，因此只需执行：

```powershell
scoop install vscode
```

如果需要安装程序，可直接去 [Visual Studio Code 官网](https://code.visualstudio.com/) 下载。

> 安装 Remote-WSL 插件。使用 VS Code 远程开发调试，必须安装此插件，后面章节会详细说明。

## 安装 WSL & Ubuntu

> 必须运行 Windows 10 版本 2004 及更高版本（内部版本 19041 及更高版本）或 Windows 11。

检查 Windows 版本，选择 Windows 徽标键 + R，然后键入“winver”，选择“确定” 。 可通过选择“开始”>“设置”>“Windows 更新”>“检查更新”来更新到最新的 Windows 版本。

![image-20220518181403810](@images\workspace\qdkftsxzs\image-20220518181403810.png)

WSL 有 2 种安装方式。为简单起见，通常建议使用 `wsl --install` 安装适用于 Linux 的 Windows 子系统。

### 一键安装[^1]

若要使用简化的 --install 命令，必须运行最新版本的 Windows（内部版本 20262+）。

打开 PowerShell（或 Windows 命令提示符）并输入：

```powershell
wsl --install
```

--install 命令执行以下操作：

- 启用可选的 WSL 和虚拟机平台组件
- 下载并安装最新 Linux 内核
- 将 WSL 2 设置为默认值
- 下载并安装 Ubuntu Linux 发行版（可能需要重新启动）

在此安装过程中，你将需要重启计算机。

### 旧版 Windows[^2]

但如果运行的是旧版 Windows，则需要手动安装。

- 启用适用于 Linux 的 Windows 子系统

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

- 检查运行 WSL 2 的要求

  若要更新到 WSL 2，需要运行 Windows 10。

  - 对于 x64 系统：**版本 1903** 或更高版本，采用**内部版本 18362** 或更高版本。
  - 对于 ARM64 系统：**版本 2004** 或更高版本，采用**内部版本 19041** 或更高版本。
  - 低于 18362 的版本不支持 WSL 2。 使用 [Windows Update 助手](https://www.microsoft.com/software-download/windows10)更新 Windows 版本。

- 启用虚拟机功能

```powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

- 下载 Linux 内核更新包

  - [适用于 x64 计算机的 WSL2 Linux 内核更新包](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)

- 将 WSL 2 设置为默认版本

```powershell
wsl --set-default-version 2
```

- 安装所选的 Linux 分发

  1. 打开 [Microsoft Store](https://aka.ms/wslstore)，并选择你偏好的 Linux 分发版。

  ![image-20220518183904053](@images\workspace\qdkftsxzs\image-20220518183904053.png)

  单击以下链接会打开每个分发版的 Microsoft Store 页面：

  - [Ubuntu 18.04 LTS](https://www.microsoft.com/store/apps/9N9TNGVNDL3Q)
  - [Ubuntu 20.04 LTS](https://www.microsoft.com/store/apps/9n6svws3rx71)
  - [openSUSE Leap 15.1](https://www.microsoft.com/store/apps/9NJFZK00FGKV)
  - [SUSE Linux Enterprise Server 12 SP5](https://www.microsoft.com/store/apps/9MZ3D1TRP8T1)
  - [SUSE Linux Enterprise Server 15 SP1](https://www.microsoft.com/store/apps/9PN498VPMF3Z)
  - [Kali Linux](https://www.microsoft.com/store/apps/9PKR34TNCV07)
  - [Debian GNU/Linux](https://www.microsoft.com/store/apps/9MSVKQC78PK6)
  - [Fedora Remix for WSL](https://www.microsoft.com/store/apps/9n6gdm4k2hnc)
  - [Pengwin](https://www.microsoft.com/store/apps/9NV1GV1PXZ6P)
  - [Pengwin Enterprise](https://www.microsoft.com/store/apps/9N8LP0X93VCP)
  - [Alpine WSL](https://www.microsoft.com/store/apps/9p804crf0395)
  - [Raft（免费试用版）](https://www.microsoft.com/store/apps/9msmjqd017x7)

  2. 在分发版的页面中，选择“获取”。

  ![image-20220518184115750](@images\workspace\qdkftsxzs\image-20220518184115750.png)

首次启动新安装的 Linux 分发版时，将打开一个控制台窗口，系统会要求你等待一分钟或两分钟，以便文件解压缩并存储到电脑上。 未来的所有启动时间应不到一秒。

然后，需要[为新的 Linux 分发版创建用户帐户和密码](https://docs.microsoft.com/zh-cn/windows/wsl/setup/environment#set-up-your-linux-username-and-password)。

Ubuntu 安装完成后，打开 `PowerShell`。

```powershell
# 在用户的主目录中启动
wsl ~
# 显示系统信息
wslfetch
```

![image-20220518213228909](@images\workspace\qdkftsxzs\image-20220518213228909.png)

### WSL 基本命令[^3]

```powershell
# 安装 WSL 和 Linux 的 Ubuntu 发行版。
wsl --install
# 安装特定的 Linux 发行版
wsl --install --distribution <Distribution Name>
# 列出可用的 Linux 发行版
wsl --list --online
# 列出已安装的 Linux 发行版
wsl --list --verbose
# 设置 WSL 版本
wsl --set-version <distribution name> <versionNumber>
# 设置默认 Linux 发行版
wsl --set-default <Distribution Name>
# 检查 WSL 状态
wsl --status
# 立即终止所有正在运行的发行版和 WSL 2 轻量级实用工具虚拟机。
wsl --shutdown
# 终止指定的发行版或阻止其运行
wsl --terminate <Distribution Name>
# 导出
wsl --export <Distribution Name> <FileName>
# 导入
wsl --import <Distribution Name> <InstallLocation> <FileName>
# 注销或卸载 Linux 发行版
wsl --unregister <DistributionName>
# 装载磁盘或设备
wsl --mount <DiskPath>
```

### Ubuntu 基本命令[^4]

| apt 命令         | 被取代的命令         | 说明                           |
| ---------------- | -------------------- | ------------------------------ |
| apt install      | apt-get install      | 安装新包                       |
| apt remove       | apt-get remove       | 卸载已安装的包（保留配置文件） |
| apt purge        | apt-get purge        | 卸载已安装的包（删除配置文件） |
| apt update       | apt-get update       | 更新软件包列表                 |
| apt upgrade      | apt-get upgrade      | 更新所有已安装的包             |
| apt autoremove   | apt-get autoremove   | 卸载已不需要的包依赖           |
| apt full-upgrade | apt-get dist-upgrade | 自动处理依赖包升级             |
| apt search       | apt-cache search     | 查找软件包                     |
| apt show         | apt-cache show       | 显示指定软件包的详情           |

apt 也有一些自己的命令。[^5]

| 新的 apt 命令    | 说明                                 |
| ---------------- | ------------------------------------ |
| apt list         | 列出包含条件的包（已安装，可升级等） |
| apt edit-sources | 编辑源列表、                         |

**日常维护命令**

```shell
# 更新软件包列表
sudo apt-get update
# 更新所有已安装的包
sudo apt-get -y dist-upgrade
# 清除缓存
sudo apt-get clean
# 卸载已不需要的包依赖
sudo apt-get autoremove
```

## 开发环境配置

Ubuntu 安装好了，

**第一件事情所有的基础，必须做，除非你再国外**[^6] [^7]

**替换镜像源**

编辑 `sources.list` 文件

```shell
➜  ~ sudo vi /etc/apt/sources.list
```

添加以下代码：

```shell
deb http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-security main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-updates main restricted universe multiverse

# deb http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse
# deb-src http://mirrors.aliyun.com/ubuntu/ focal-proposed main restricted universe multiverse

deb http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
deb-src http://mirrors.aliyun.com/ubuntu/ focal-backports main restricted universe multiverse
```

**添加阿里 DNS**

编辑 `resolv.conf` 文件

```shell
➜  ~ sudo vi /etc/resolv.conf
```

添加以下代码：

```
nameserver 223.5.5.5
nameserver 223.6.6.6
```

保存后，联网更新一下。

```shell
➜  ~ sudo apt-get update
```

> 如果 Ubuntu 出现 E: Failed to fetch 问题，以上两步操作之后基本可以解决。

### Git

![image-20220426230425183](@images\workspace\qdkftsxzs\image-20220426230425183.png)

**ssh 配置**

```shell
# 新建文件夹
➜  ~ mkdir .ssh
# 生成密钥
➜  ~ ssh-keygen -t ed25519 -C "your-email" -f "your-name"
# 将公钥复制到剪贴板
➜  ~ cat ~/.ssh/id_rsa.pub | clip.exe
# 启动ssh服务
➜  ~ eval "$(ssh-agent -s)"
Agent pid 1881
# 添加公钥
➜  ~ ssh-add ~/.ssh/id_rsa
# 测试服务
➜  ~ ssh -T git@github.com
Hi rich1e! You've successfully authenticated, but GitHub does not provide shell access.
```

### Zsh & Oh-My-Zsh

**zsh** 完全兼容 bash，补全功能很友好，具有强大的可定制特点，支持许多插件。[^8]

```shell
# 查看系统支持的 shell
➜  ~ cat /etc/shells
# /etc/shells: valid login shells
/bin/sh
/bin/bash
/usr/bin/bash
/bin/rbash
/usr/bin/rbash
/bin/dash
/usr/bin/dash
/usr/bin/tmux
/usr/bin/screen
/bin/zsh
/usr/bin/zsh
# 安装 Zsh
➜  ~ sudo apt-get install zsh
# 切换用户默认 shell
➜  ~ chsh -s $(which zsh)
# 确认 shell
➜  ~ echo $SHELL
/bin/zsh
```

第一次运行 zsh 时会进入如下的配置引导页面：[^9]

![zsh 配置引导页面](@images\workspace\qdkftsxzs\20211205115322.png)

输入输入 `1` 后，就开始进行配置，如下：

![zsh 配置引导提示](@images\workspace\qdkftsxzs\20211205120859.png)

先选择 0，由于 zsh 配置较为复杂，推荐大家使用配置管理工具来配置 zsh[^10]，下面介绍如何使用 Oh-My-Zsh 来修改 zsh 的主题和安装常用的插件。

**Oh-My-Zsh** 是一个开源的、社区驱动的框架，用于管理您的 [zsh](https://www.zsh.org/) 配置。

```shell
# 安装 Oh-My-Zsh
➜  ~ sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

#### zsh-completions & inrc

1. 下载插件

   ```shell
   ➜  ~ git clone https://github.com/zsh-users/zsh-completions ${ZSH_CUSTOM:-${ZSH:-~/.oh-my-zsh}/custom}/plugins/zsh-completions
   ```

2. 将下面的代码添加到 `~/.zshrc`，执行 `source "$ZSH/oh-my-zsh.sh"`：

   ```shell
   fpath+=${ZSH_CUSTOM:-${ZSH:-~/.oh-my-zsh}/custom}/plugins/zsh-completions/src
   ```

> 自动补全还有一个插件，incr。[^11]

首先下载插件 incr

```shell
➜  ~ wget -P ${ZSH_CUSTOM:-${ZSH:-~/.oh-my-zsh}/custom}/plugins/incr http://mimosa-pudica.net/src/incr-0.2.zsh
```

添加下面的代码

```shell
plugins=( [plugins...] incr)
```

或者执行以下代码：

```shell
➜  ~ source ~/.oh-my-zsh/plugins/incr/incr*.zsh
```

#### zsh-syntax-highlighting

1. 下载插件

   ```shell
   ➜  ~ git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
   ```

2. 将下面的代码添加到 `~/.zshrc` 激活插件：

   ```shell
   plugins=( [plugins...] zsh-syntax-highlighting)
   ```

#### zsh-autosuggestions

1. 下载插件

   ```shell
   ➜  ~ git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
   ```

2. 将下面的代码添加到 `~/.zshrc` 激活插件：

   ```shell
   plugins=( [plugins...] zsh-autosuggestions)
   ```

#### autojump

1. 安装插件

   ```shell
   ➜  ~ sudo apt-get install autojump
   ```

   出于政策原因，所有 Debian 衍生发行版都需要手动激活，请参阅`/usr/share/doc/autojump/README.Debian`.

   ```shell
   ➜  ~ vi /usr/share/doc/autojump/README.Debian
   ```

![image-20220519225735792](@images\workspace\qdkftsxzs\image-20220519225735792.png)

2. 将下面的代码添加到 `~/.zshrc` 激活插件：

   ```shell
   . /usr/share/autojump/autojump.sh
   ```

#### pokemonsay

![image-20220521201229235](@images\workspace\qdkftsxzs\image-20220521201229235.png)

1. 安装插件

```shell
# 安装依赖
sudo apt-get install fortune cowsay -y
# 安装 pokemonsay
$ git clone http://github.com/possatti/pokemonsay
$ cd pokemonsay
$ ./install.sh
```

2. 将下面的代码添加到 `~/.zshrc` ：

```shell
# Set Pokemonsay
export PATH="/home/rich1e/bin/:$PATH"
# 添加到 .zshrc 末尾,每次打开终端时都会有一只随机的宝可梦说一句随机的话
fortune | pokemonsay
```

> fortune，随机语言；cowsay，是一个生成[ASCII](https://zh.m.wikipedia.org/wiki/ASCII)图片的程序

![image-20220521223834138](@images\workspace\qdkftsxzs\image-20220521223834138.png)

fortune 是一个非常简单的小程序，几乎存在于所有的 unix、bsd、linux 操作系统上，它的功能很简单，就是从数据库中随机返回一句话。一些有趣的安装包：

```shell
sudo apt-get -y install fortunes-zh
sudo apt-get -y install fortunes-mario
sudo apt-get -y install fortunes-spam
sudo apt-get -y install fortunes-debian-hints
```

![image-20220521224330584](@images\workspace\qdkftsxzs\image-20220521224330584.png)

#### Oh-My-Zsh 常用命令

![image-20220520163240682](@images\workspace\qdkftsxzs\image-20220520163240682.png)

```shell
# 更新
➜  ~ omz update
# 重载配置
➜  ~ source ~/.zshrc
```

![image-20220520163340631](@images\workspace\qdkftsxzs\image-20220520163340631.png)

### nvm

1. 下载安装

```shell
➜  ~ curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
➜  ~ wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

2. 上面的命令会将 nvm 存储库克隆到 `~/.nvm`。将下面的代码添加到 `~/.zshrc` ：

```shell
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

#### nvm 常用命令

```shell
# 查看帮助
➜  ~ nvm --help
# 已安装的 nvm 版本
➜  ~ nvm --version
# 查看远程所有的版本
➜  ~ nvm ls-remote
# 仅从LTS版本中选择安装
➜  ~ nvm install --lts
# 安装最新版 node（稳定版本）
➜  ~ nvm install stable
# 查看安装的 node 版本
➜  ~ nvm ls
# 设置默认指定版本
➜  ~ nvm alias default <node版本号>
```

### pyenv

pyenv 有自动安装脚本。[^12]

1. 首先，需要准备编译 Python 的依赖文件：[^13]

   ```shell
   ➜  ~ sudo apt-get update; sudo apt-get install make build-essential libssl-dev zlib1g-dev \
   libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm \
   libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev
   ```

如果有特殊依赖或考虑，可以参考 wiki。[^14]

2. 接下来执行自动安装脚本：

   ```shell
   ➜  ~ curl https://pyenv.run | bash
   ```

3. 将下面的代码添加到 `~/.zshrc` ：[^15]

   ```shell
   plugins=( [plugins...] pyenv)

   export PYENV_ROOT="$HOME/.pyenv"
   export PATH="$PYENV_ROOT/bin:$PATH"
   eval "$(pyenv init --path)"
   ```

#### pyenv 常用命令[^16] [^17]

```shell
# 查看帮助
pyenv --help
# 已安装的 pyenv 版本
pyenv --version
# 查看可以安装的 Python 版本
pyenv install --list
# 安装 Pythone 2.7.18 版本
pyenv install 2.7.18
# 设置为全局环境
pyenv global 2.7.18
# 查看已经创建的 Python 环境
pyenv versions
# 查看当前激活的版本
pyenv version
```

## VS Code 远程开发调试[^18]

![image-20220520152510402](@images\workspace\qdkftsxzs\image-20220520152510402.png)

- Remote - SSH， 通过使用 SSH 打开远程机器/VM 虚拟机上的文件夹连接到任何位置。
- Remote - Containers， 在容器内（或安装到）容器中使用单独的工具链或基于容器的应用程序。
- Remote - WSL， 在适用于 Linux 的 Windows 子系统中获得基于 Linux 的开发体验。

经过一段时间的使用，发现以上 3 个插件均有不同的工作场景。

- `Remote - SSH` 主要用来连接远程主机；
- `Remote - Containers` 适合开发调试（需要安装 Docker）；
- `Remote - WSL` 适合用来工作和学习；

当 windows 中安装了 WSL 和 Ubuntu 后，可以通过 `Remote - WSL` 管理开发环境和编译运行 windows 上的开发项目。
但这种方式，对电脑的性能有一定的要求。

建议将开发项目拷贝至 Ubuntu 子系统中编译运行，或使用 `Remote - Containers` 编译运行开发项目。

## 附录

### linux 开发环境结合到 win 平台[^19]

[^1]: [install ubuntu on wsl2 on windows 10](https://ubuntu.com/tutorials/install-ubuntu-on-wsl2-on-windows-10#1-overview)
[^2]: [旧版 WSL 的手动安装步骤](https://docs.microsoft.com/zh-cn/windows/wsl/install-manual)
[^3]: [WSL 官方文档](https://docs.microsoft.com/zh-cn/windows/wsl/basic-commands)
[^4]: [Ubuntu 中文 Wiki](https://wiki.ubuntu.org.cn/)
[^5]: [apt 和 apt-get 的区别](https://juejin.cn/post/6844903939087810567)
[^6]: [安装 ubuntu 后需要做的事](https://zhuanlan.zhihu.com/p/148104755)
[^7]: [阿里巴巴开源镜像站](https://developer.aliyun.com/mirror/)
[^8]: [A User Guide to ZSH](https://zsh.sourceforge.io/Guide/)
[^9]: [zsh 安装与配置：9 步打造高效命令行](https://www.alicode.pro/blog/dev-tools/better-use-terminal-with-zsh)
[^10]: [Zsh - ArchWiki](https://wiki.archlinux.org/title/Zsh)
[^11]: [Incremental completion on zsh](https://mimosa-pudica.net/zsh-incremental.html)
[^12]: [Automatic installer](https://github.com/pyenv/pyenv#automatic-installer)
[^13]: [Suggested build environment](https://github.com/pyenv/pyenv/wiki#suggested-build-environment)
[^14]: [Common build problems](https://github.com/pyenv/pyenv/wiki/Common-build-problems)
[^15]: [How to Install pyenv](https://www.karpton.com/articles/how-to-install-pyenv)
[^16]: [Ubuntu 中使用 pyenv 控制 Python 版本](https://www.jianshu.com/p/1322e442af3f)
[^17]: [Ubuntu 安裝使用 pyenv + pyenv-virtualenv](https://blog.kyomind.tw/ubuntu-pyenv/)
[^18]: [VS Code Remote Development](https://code.visualstudio.com/docs/remote/remote-overview)
[^19]: [terminal + wsl2 + arch](https://juejin.cn/post/6912823684688248840)
