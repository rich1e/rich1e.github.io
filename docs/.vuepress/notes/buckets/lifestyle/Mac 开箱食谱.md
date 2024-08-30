---
title: Mac 开箱食谱
tags: ["mac"]
notebook: hobby 兴趣
---


# Mac 开箱食谱

> 使用 mac 差不多有4、5年了，期间各种不适应到现在感觉脱离不了了。
>
> mac 上有许多蛮有意思的软件，付费的免费的都有，如果你愿意折腾，还可以尝试开源项目。
>
> 对于第一次接触 mac 的人可能会遇到各种问题想放弃，甚至会产生恐惧：怎么安装软件？pkg、dmg是什么？怎么关闭程序？等等。其实这些都不是问题，只要你安心的接纳它，你会发现很美好。so easy ~

<!-- MarkdownTOC -->

- [Mac Keyboard Shortcuts](#mac-keyboard-shortcuts)
- [System Preferences](#system-preferences)
- [Homebrew](#homebrew)
- [Zsh](#zsh)
- [Mac Proxy](#mac-proxy)
- [FQA](#fqa)
- [Reference](#reference)

<!-- /MarkdownTOC -->

## Mac Keyboard Shortcuts

*几个常用的功能键*

- Command 鍵 ⌘ `相当于 windows 的 ctrl 健`
- Shift 鍵 ⇧
- Option 鍵 ⌥
- Control 鍵 ⌃
- Caps Lock 鍵 ⇪ `macOS Sierra 支持切换输入法`
- Fn 鍵

| 快捷键 | 说明 |
| ---- | ---- |
| Command-Q  |   退出应用程序。|
| Command-W  |   关闭当前窗口。|
| Command-X  |   剪下：移除所選項目，然後拷貝到剪貼板。|
| Command-C  |   將所選項目拷貝到剪貼板。這也可以用在 Finder 的檔案上。|
| Command-V  |   將剪貼板的內容貼上目前的文件或 app 中。這也可以用在 Finder 的檔案上。|
| Command-Z  |   還原前一個指令。您可以按 Command-Shift-Z 以重做，反轉還原指令。在某些 app 中，您可以還原與重做多個指令。|
| Command-A  |   全選項目。|
| Command-F  |   尋找：開啟 Find 視窗或在文件中尋找項目。|

## System Preferences

**触控板**

| 选项 | 功能 | 描述 |
| ------------- | ------------- | ------------- |
| 光标与点按 | 轻点来点按 | 用单指轻点来进行点按 |
|  | 辅助点按 | 用双指点按或轻点来进行等同按住 Control 键并点按或右键点按的操作 |
| 滚动缩放 | 滚动方向：自然 | 双指上下滑动来滚动 |
|  | 放大或缩小 | 双指上下滑动来滚动 |
|  | 智能缩放 | 用双指轻点两下可放大网页或 PDF，或缩小回原来的大小 |
|  | 旋转 | 双指互相以对方为中心移动，即可旋转照片或其他项目 |
| 更多手势 | 三指拖移 | 用三根手指拖移屏幕上的项目，然后点按或轻点以放下 **可在“辅助功能”偏好设置中开启此功能** |
|  | 查找和数据检测器 | 用三根手指轻点可查找字词，或者进行其他与日期、地址、电话号码和其他数据相关的操作。 |
|  | 显示桌面 | 将拇指和另外三根手指同时展开，即可显示桌面 |
|  | Launchpad | 将大拇指和另外三根手指合拢到一起，即可显示 Launchpad |
|  | Mission Control | 用四根手指向上轻扫3，即可打开 Mission Control |
|  | App Exposé | 用四根手指向下轻扫3，即可查看正在使用的应用的所有窗口 |
|  | 在全屏应用之间轻扫 | 用四根手指向左或向右轻扫，即可在桌面与全屏应用之间移动 |

## Homebrew

包管理工具可以让你安装和更新程序变得更方便，目前在 OS X 系统中最受欢迎的包管理工具是 **Homebrew**.

**Install**

在安装 Homebrew 之前，需要将 `Xcode Command Line Tools` 安装完成。

在终端输入：

    xcode-select --install

xcode command tools 安装完之后，接着再输入：

    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

耐心等待一段时间，等 homobrew 安装好之后，再执行这一条语句：

    echo 'export PATH="/usr/local/bin:$PATH"' >> ~/.bash_profile

后面的 `.bash_profile` 请根据你使用 shell 的情况来修改。

**Usage**

以下都列举了一些简单常用的命令，通常还会有参数，具体的使用方式可以去官方网站上查看。

| 命令 | 说明 |
| ------------- | ------------- |
| brew  | 直接回车，显示所有常用命令 |
| brew --version | 显示版本 |
| brew config | 查看配置 |
| brew doctor | 诊断问题 |
| brew help | 查看帮助 |
| brew update | 更新版本 |
| brew outdated | 显示过期的版本 |
| brew upgrade | 更新过期的版本 |
| brew list | 列出已安装的包 |
| brew info | 查看这个包的信息 |
| brew install | 安装包 |
| brew uninstall | 卸载包 |
| brew tap | 添加仓库 |
| brew untap | 删除仓库 |

**Cask**

Cask 是建立在 homebrew 基础上的 Mac 软件安装命令行工具。

安装

    brew tap caskroom/cask

> note: 老版本的 homebrew 需要执行 `brew install brew-cask`，最新的版本默认集成了 Cask。

常用命令

- brew cask list 列出所有可以被安装的软件
- brew cask search google 查找所有和 google 相关的应用
- brew cask info qq 查看qq应用的信息
- brew cask install qq 安装 QQ
- brew cask uninstall qq 卸载 QQ

一键装机 App

    brew cask install sublime-text cheatsheet key-codes iterm2 dropbox google-chrome evernote qq mou alfred the-unarchiver

> note: Cask 软件更新策略，`brew cask uninstall APP && brew cask install APP` 先删除 App，再重新安装

一键安装 QuickLook 插件

    brew cask install qlcolorcode qlstephen qlmarkdown quicklook-json qlprettypatch quicklook-csv betterzipql qlimagesize webpquicklook suspicious-package quicklookase qlvideo

**Homebrew 中一些路径的解释**

    Caskroom  Frameworks  bin  include  opt   share
    Cellar    Homebrew    etc  lib      sbin  var

- Cellar : 文件夹存放的是所有包安装所在路径，包括二进制，文档和配置文件，按照这样Cellar/包名/版本号/ 的形式来安放。

- opt : 由于版本号随着跟新而改变的，所以需要一个固定不变的路径作为我们访问二进制和文档的路径，这就是opt 的作用。

- Homebrew : brew 程序所在路径。

- bin : 所有包安装之后二进制都会链接到这个路径下。

- share : 所有包安装之后的文档都会链接到这个路径下。

- etc : 同上，所有包的配置文件。

- lib : 同上，所有包相关库文件。

- Caskroom : app 文件。

## Zsh

> mac 自带 Shell 是 bash，已经很长时间没更新了。（其实我也不确定这就成了换 zsh 的理由、尴尬）
所以我也说不出 zsh 比 bash 好在哪方面 -_-#
en~ 不过我可以给你们说说 zsh & oh-my-zsh 的使用体验：逼 ~ 格 ~ 高 ~

上面是段玩笑话，现在进入主题吧。

**安装 zsh**

> note: mac 默认自带 zsh。 通过 `cat /etc/shells`，可以查看系统已存在几种 Shell。

在终端执行：

    brew install zsh

然后再执行 `vi /etc/shells`，将新安装的 zsh 添加进去。

    # List of acceptable shells for chpass(1).
    # Ftpd will not allow users to connect who are not using
    # one of these shells.

    /bin/bash
    /bin/csh
    /bin/ksh
    /bin/sh
    /bin/tcsh
    /bin/zsh
    /usr/local/bin/zsh

> note: 使用 vi 保存时，如果遇到这个问题：**E45: ‘readonly’ option is set (add ! to override)**，可以用这条命令 `:w !sudo tee %`。

**安装 oh-my-zsh**

选择 `curl` 或者 `wegt，` 在终端执行：

    sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"

or

    sh -c "$(wget https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh -O -)"

等下载安装完成后，再手动修改和添加 `.zshrc` 文件。步骤如下：

1. 如果原先存在一个 ~/.zshrc 文件，需备份。

        cp ~/.zshrc ~/.zshrc.orig

2. 新建一个 ~/.zshrc 文件。

        cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc

3. 切换 Shell。

        chsh -s /usr/local/bin/zsh

这样 **oh-my-zsh** 就算完成了。

> note: 执行 `echo $SHELL` 可确定当前是哪个 Shell

**自定义 ~/.zshrc**

找到 `plugins`, 添加以下扩展：

```Shell
plugins=(git git-flow-completion nvm npm terminalapp zsh-completions brew autojump osx zsh-syntax-highlighting catimg extract d zsh-autosuggestions)
```

> note: **zsh-syntax-highlighting** , **zsh-autosuggestions** , **autojump**  需要单独安装。

在 `~/.zshrc` 最后添加下面两行：

```Shell
# Add env.sh
source ~/yourpath/env.sh
```

新建一个 `env.sh`:

```Shell
#!/bin/zsh

# EDITOR
export EDITOR='subl -w'
# export EDITOR=vim

# Owner
export USER_NAME="Richie"

# FileSearch
function f() { find . -iname "*$1*" ${@:2} }
function r() { grep "$1" ${@:2} -R . }

#mkdir and cd
function mkcd() { mkdir -p "$@" && cd "$_"; }

# nvm settings
export NVM_DIR="$HOME/.nvm"
. "$(brew --prefix nvm)/nvm.sh"

# autojump
[[ -s $(brew --prefix)/etc/profile.d/autojump.sh ]] && . $(brew --prefix)/etc/profile.d/autojump.sh

# Ruby by rbenv
export RBENV_ROOT=/usr/local/var/rbenv
eval "$(rbenv init -)"

# Java by jenv
export PATH="$HOME/.jenv/bin:$PATH"
eval "$(jenv init -)"

# JAVA_HOME
export JENV_ROOT=/usr/local/var/jenv
# JAVA_HOME=`/usr/libexec/java_home`
export JAVA_HOME=`/usr/libexec/java_home`

# zsh-completions
fpath=(/usr/local/share/zsh-completions $fpath)
source ~/.git-flow-completion.zsh
autoload -U compinit && compinit

# zsh-syntax-highlighting
source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

#启用 cd 命令的历史纪录，cd -[TAB]进入历史路径
setopt AUTO_PUSHD

# 如果连续输入的命令相同，历史纪录中只保留一个
setopt HIST_IGNORE_DUPS

# 为历史纪录中的命令添加时间戳
setopt EXTENDED_HISTORY

# 自动补全功能
setopt AUTO_LIST
setopt AUTO_MENU

# Aliases

# Proxy
alias pc='proxychains4'
alias cppcompile='c++ -std=c++11 -stdlib=libc++'

# Use sublimetext for editing config files
alias zshconfig="subl ~/.zshrc"
alias envconfig="subl ~/yourpath/env.sh"

# Download by axel
alias dl="axel -o ~/Downloads"

# source .zshrc
alias sourcezsh="source ~/.zshrc"

# Command prompt
autoload -U promptinit && promptinit

alias cd~='cd ~'
alias ..='cd ..'
alias ...='cd ../../'
alias cls='clear'
alias ll='ls -l'
alias la='ls -a'
alias vi='vim'
alias javac="javac -J-Dfile.encoding=utf8"
alias grep="grep --color=auto"

# Default open with application
alias -s html=subl
alias -s rb=subl
alias -s py=vi
alias -s js=vi
alias -s c=vi
alias -s java=vi
alias -s txt=vi

alias -s gz='tar -xzvf'
alias -s tgz='tar -xzvf'
alias -s zip='unzip'
alias -s bz2='tar -xjvf'
```

**手动更新 oh-my-zsh**

在终端执行：

    upgrade_oh_my_zsh

**卸载 oh-my-zsh**

在终端执行：

    uninstall_oh_my_zsh

## Mac Proxy

> 经过一番努力，现在我们的 mac 可以做更多有趣的事情了。但唯一不开心的是、网络不好，下载慢，国外很多优质的资源无法访问。
> **但这一切怎么可能难住我们伟大的程序猿呢！(☆_☆)**

*shadowsocks* 是国内作者 @clowwindy 在 github 上发起的开源项目。（因为一些原因，目前已从 github 移除）

*privoxy* 和 *proxychains-ng* 同样也是 github 上的开源项目。

*Proxy SwitchyOmega* 是 Chrome 插件。

*iTerm2* 是命令行工具。

*LaunchRocket* 用来管理 Homebrew 安装的服务。

- **ShadowsocksX + Proxy SwitchyOmega + Chrome 上网无国界**

    1. 安装 ShadowsocksX

        > 如果有 shadowsocks 账号，打开 ShadowsocksX 直接填写。默认端口是 `1080`。

            brew cask install shadowsocksx

    2. 安装 Proxy SwitchyOmega。 [Chrome Store](https://chrome.google.com/webstore/detail/proxy-switchyomega/padekgcemlokbadohgkifijomclgjgif)

        > note: Proxy SwitchyOmega，配置比较简单，略过。

- **使用 Proxychains-ng 代理 iTerm2**

    1. 安装 Proxychains-ng。

            brew install proxychains-ng

    2. Proxychains-ng, `vi /usr/local/etc/proxychains.conf`：

            socks5 127.0.0.1 1080

    3. 设置 iTerm2 前缀补全，`Preferences -> Profiles -> Keys`，新建一个快捷键 `⌥ + p`，Action 选择 `Send Hex Code`，键值为 `0x1 0x70 0x63 0x20 0xd`, 保存生效。

        使用时，输入 `brew intall source`，再按 `⌥ + p `，输出：

            pc brew install source

- **使用 Privoxy 将 socks 代理转化为 http 代理**

    1. 安装 Privoxy。

            brew install privoxy

    2. Privoxy, `vi /usr/local/etc/privoxy/config`：

            listen-address 0.0.0.0:9998
            forward-socks5 / 127.0.0.1:1080 .

        > note: 9998是要监听的 http 端口；1080 是 shadowsocks 监听端口

    3. 安装 LaunchRocket。

            brew cask install launchrocket

    4. 查看 Privoxy 进程是否启动，执行：

            ps aux | grep privoxy

    5. 查看端口监听是否成功，执行：

            netstat -an | grep 9998

    6. 设置代理

            # 设置 Aria2 代理
            aria2c --all-proxy='http://127.0.0.1:9998' -D

            # 设置 Shell 代理，之后在 shell 里的操作都会走代理，包括 git
            http_proxy=http://127.0.0.1:9998
            https_proxy=http://127.0.0.1:9998

            # 设置 Sublime Text 3 代理
            "http_proxy": "http://127.0.0.1:8118",
            "https_proxy": "http://127.0.0.1:8118",

## FQA

> git: how to solve "SSLRead() return error -9806" in OSX using brew

[fix_git_sslread_9806](https://gist.github.com/entropiae/a899d8a78dc8a38f505e)

[macOS 10.12.1 brew 遇到 SSLRead() return error 9086 ？](https://www.zhihu.com/question/53071626)

> ShadowsocksX 更新不了 pac 文件

[不能更新 PAC 文件](https://github.com/shadowsocks/shadowsocks-iOS/issues/212#issuecomment-220008369)

> gfwlist 更新失败

[GFWList URL(Github)](https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt)

[GFWList URL(Backup)](http://gfwli.st/gfwlist.txt)

## Reference

[在您的 Mac 上使用 Multi-Touch 手势](https://support.apple.com/zh-cn/HT204895)

[Quick Look plugins](https://github.com/sindresorhus/quick-look-plugins)

[以普通用户启动的Vim如何保存需要root权限的文件](http://feihu.me/blog/2014/vim-write-read-only-file/)

[FelisCatus/SwitchyOmega](https://github.com/FelisCatus/SwitchyOmega)

[rofl0r/proxychains-ng](https://github.com/rofl0r/proxychains-ng)

[jimbojsb/launchrocket](https://github.com/jimbojsb/launchrocket)

[homebrew — Mac OS X 下新的软件包管理工具](http://blog.jjgod.org/2009/12/21/homebrew-package-management/)

[Mac 下的软件安装 —— 从 pkg,dmg 到 brew,cask](http://col.dog/2015/11/22/homebrew/)

[Mac 流](https://cjli.coding.me/2016/09/22/Mac-flow/)
