# 前端开发调试新姿势 - Windows + WSL + VSCode

[TOC]

## 安装 VS Code

windows上我是使用 Scoop 管理软件安装，因此只需执行：

```powershell
scoop install vscode
```

如果需要安装程序，可直接去 [Visual Studio Code 官网](https://code.visualstudio.com/) 下载。

安装 Remote-WSL 插件。

## 安装 WSL & Ubuntu

> 必须运行 Windows 10 版本 2004 及更高版本（内部版本 19041 及更高版本）或 Windows 11。

检查 Windows 版本，选择 Windows 徽标键 + R，然后键入“winver”，选择“确定” 。 可通过选择“开始”>“设置”>“Windows 更新”>“检查更新”来更新到最新的 Windows 版本。

![image-20220518181403810](.\images\image-20220518181403810.png)

WSL 有 2 种安装方式。为简单起见，通常建议使用 `wsl --install` 安装适用于 Linux 的 Windows 子系统。

### 一键安装[^Install Ubuntu on WSL2 on Windows 10]

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



### 旧版 Windows[^旧版 WSL 的手动安装步骤]

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

  ![image-20220518183904053](.\images\image-20220518183904053.png)

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

  ![image-20220518184115750](.\images\image-20220518184115750.png)

首次启动新安装的 Linux 分发版时，将打开一个控制台窗口，系统会要求你等待一分钟或两分钟，以便文件解压缩并存储到电脑上。 未来的所有启动时间应不到一秒。

然后，需要[为新的 Linux 分发版创建用户帐户和密码](https://docs.microsoft.com/zh-cn/windows/wsl/setup/environment#set-up-your-linux-username-and-password)。

Ubuntu 安装完成后，打开 `PowerShell`。

```powershell
# 在用户的主目录中启动
wsl ~
# 显示系统信息
wslfetch
```

![image-20220518213228909](.\images\image-20220518213228909.png)

### WSL 基本命令[^WSL 官方文档]

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

### Ubuntu 基本命令[^Ubuntu 中文 Wiki]

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

apt 也有一些自己的命令。[^apt 和 apt-get 的区别]

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
# 
sudo apt-get clean
# 
sudo apt-get autoremove
```



## 开发环境配置

Ubuntu 安装好了，

**第一件事情所有的基础，必须做，除非你再国外**[^安装Ubuntu后需要做的事] [^阿里巴巴开源镜像站]

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

**添加阿里DNS**

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

> 如果 Ubuntu 出现E: Failed to fetch 问题，以上两步操作之后基本可以解决。

### Git

![image-20220426230425183](.\images\image-20220426230425183.png)

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

**zsh** 完全兼容 bash，补全功能很友好，具有强大的可定制特点，支持许多插件。[^A User Guide to ZSH]

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

第一次运行 zsh 时会进入如下的配置引导页面：[^zsh 安装与配置：9步打造高效命令行]

![zsh 配置引导页面](.\images\20211205115322.png)

输入输入 `1` 后，就开始进行配置，如下：

![zsh 配置引导提示](.\images\20211205120859.png)

先选择 0，由于 zsh 配置较为复杂，推荐大家使用配置管理工具来配置 zsh[^Zsh - ArchWiki]，下面介绍如何使用 Oh-My-Zsh 来修改 zsh 的主题和安装常用的插件。

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

> 自动补全还有一个插件，incr。[^Incremental completion on zsh]

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



![image-20220519225735792](.\images\image-20220519225735792.png)

2. 将下面的代码添加到 `~/.zshrc` 激活插件：

    ```shell
    . /usr/share/autojump/autojump.sh
    ```

#### pokemonsay

![image-20220521201229235](.\images\image-20220521201229235.png)

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

![image-20220521223834138](.\images\image-20220521223834138.png)

fortune 是一个非常简单的小程序，几乎存在于所有的 unix、bsd、linux 操作系统上，它的功能很简单，就是从数据库中随机返回一句话。一些有趣的安装包：

```shell
sudo apt-get -y install fortunes-zh
sudo apt-get -y install fortunes-mario
sudo apt-get -y install fortunes-spam
sudo apt-get -y install fortunes-debian-hints
```

![image-20220521224330584](.\images\image-20220521224330584.png)

#### Oh-My-Zsh 常用命令

![image-20220520163240682](.\images\image-20220520163240682.png)

```shell
# 更新
➜  ~ omz update
# 重载配置
➜  ~ source ~/.zshrc
```

![image-20220520163340631](.\images\image-20220520163340631.png)

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

pyenv 有自动安装脚本。[^Automatic installer]

1. 首先，需要准备编译 Python 的依赖文件：[^Suggested build environment]

   ```shell
   ➜  ~ sudo apt-get update; sudo apt-get install make build-essential libssl-dev zlib1g-dev \
   libbz2-dev libreadline-dev libsqlite3-dev wget curl llvm \
   libncursesw5-dev xz-utils tk-dev libxml2-dev libxmlsec1-dev libffi-dev liblzma-dev
   ```

如果有特殊依赖或考虑，可以参考wiki。[^Common build problems]

2. 接下来执行自动安装脚本：

   ```shell
   ➜  ~ curl https://pyenv.run | bash
   ```

3. 将下面的代码添加到 `~/.zshrc` ：[^How to Install pyenv]

   ```shell
   plugins=( [plugins...] pyenv)
   
   export PYENV_ROOT="$HOME/.pyenv"
   export PATH="$PYENV_ROOT/bin:$PATH"
   eval "$(pyenv init --path)"
   ```

   

#### pyenv 常用命令[^Ubuntu 中使用 pyenv 控制 Python 版本] [^Ubuntu 安裝使用 pyenv + pyenv-virtualenv]

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



## VS Code 远程开发调试[^VS Code Remote Development]



![image-20220520152510402](.\images\image-20220520152510402.png)

> https://zhuanlan.zhihu.com/p/432865918
> https://www.zicode.com/blog/2022/04/14/wsl2%E7%A3%81%E7%9B%98%E8%AF%BB%E5%86%99%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96/
> https://loesspie.com/2021/01/27/wsl2-compact-disk-win10/
> https://xie.infoq.cn/article/be33f9e6a3dde85c88cbb24dc
> https://naoketeng.online/?p=104
> https://docs.microsoft.com/zh-cn/windows/wsl/setup/environment
> https://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html
> https://typora.cc/QuickStart.html
> https://support.typora.io/

## FQA

> http://www.fwolf.com/blog/post/264
> https://wiki.ubuntu.org.cn/Fortune
> https://github.com/ruanyf/fortunes
> http://www.ruanyifeng.com/blog/2015/04/fortune.html
> http://blog.lujun9972.win/blog/2017/02/28/%E4%B8%80%E4%B8%AA%E6%98%BE%E7%A4%BA%E4%B8%AD%E6%96%87%E6%A0%BC%E8%A8%80%E7%9A%84fortune%E6%96%87%E4%BB%B6/index.html
> https://segmentfault.com/a/1190000024486457
> https://www.google.com/search?q=fortunes-spam&oq=fortunes-spam&aqs=chrome..69i57.351j0j1&sourceid=chrome&ie=UTF-8
> https://www.mimante.net/soft/fortunes-spam/
> http://aspamaday.blogspot.com/
>
> # WSL
>
> https://project.zhps.tp.edu.tw/ethan/2019/03/ubuntu-%E6%9B%B4%E6%96%B0%E8%88%87%E5%8D%87%E7%B4%9A/
> https://zhuanlan.zhihu.com/p/150555651
> https://github.com/oldj/SwitchHosts
> https://docs.microsoft.com/zh-cn/windows/wsl/tutorials/wsl-vscode
> https://segmentfault.com/a/1190000040670856
> https://zhuanlan.zhihu.com/p/151392411
> https://www.google.com/search?q=.gitattributes+%E9%85%8D%E7%BD%AE&newwindow=1&biw=1702&bih=1279&sxsrf=ALiCzsbbjscAYwOeW58aSQTw6EuTIk3YEg%3A1653108500476&ei=FG-IYu7QHNmDi-gPmeqxyAU&ved=0ahUKEwjuqsiH5e_3AhXZwQIHHRl1DFkQ4dUDCA4&uact=5&oq=.gitattributes+%E9%85%8D%E7%BD%AE&gs_lcp=Cgdnd3Mtd2l6EAMyBAgjECcyBAgAEB5KBAhBGAFKBAhGGABQjwdYvApg5hBoAXAAeACAAcUCiAGuB5IBBTItMS4ymAEAoAEBwAEB&sclient=gws-wiz
> https://cloud.tencent.com/developer/section/1138630
> https://juejin.cn/post/6844904062987550733
> https://sspai.com/post/59666





## Ref

[^Install Ubuntu on WSL2 on Windows 10]: https://ubuntu.com/tutorials/install-ubuntu-on-wsl2-on-windows-10#1-overview 
[^WSL 官方文档]: https://docs.microsoft.com/zh-cn/windows/wsl/basic-commands
[^旧版 WSL 的手动安装步骤]: https://docs.microsoft.com/zh-cn/windows/wsl/install-manual

[^安装Ubuntu后需要做的事]: https://zhuanlan.zhihu.com/p/148104755
[^阿里巴巴开源镜像站]: https://developer.aliyun.com/mirror/
[^Ubuntu 中文 Wiki]: https://wiki.ubuntu.org.cn/
[^apt 和 apt-get 的区别]: https://juejin.cn/post/6844903939087810567
[^Zsh - ArchWiki]: https://wiki.archlinux.org/title/Zsh
[^A User Guide to ZSH]: https://zsh.sourceforge.io/Guide/
[^zsh 安装与配置：9步打造高效命令行]: https://www.alicode.pro/blog/dev-tools/better-use-terminal-with-zsh
[^Incremental completion on zsh]: https://mimosa-pudica.net/zsh-incremental.html
[^Automatic installer]: https://github.com/pyenv/pyenv#automatic-installer
[^Suggested build environment]: https://github.com/pyenv/pyenv/wiki#suggested-build-environment
[^Common build problems]: https://github.com/pyenv/pyenv/wiki/Common-build-problems
[^How to Install pyenv]: https://www.karpton.com/articles/how-to-install-pyenv
[^Ubuntu 中使用 pyenv 控制 Python 版本]: https://www.jianshu.com/p/1322e442af3f
[^Ubuntu 安裝使用 pyenv + pyenv-virtualenv]: https://blog.kyomind.tw/ubuntu-pyenv/
[^VS Code Remote Development]: https://code.visualstudio.com/docs/remote/remote-overview
[^terminal+wsl2+arch]: https://juejin.cn/post/6912823684688248840

