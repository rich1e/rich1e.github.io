---
title: Windows上搭建前端开发环境
date: 2021-12-16
permalinkPattern: :year/:month/:day/:slug.html
permalink: /workspace/Building-a-front-end-development-environment-on-windows
---

# Windows 上搭建前端开发环境

[[toc]]

## 代理工具

下载安装 [V2rayN](https://github.com/2dust/v2rayN)，选择 v2rayN-Core.zip 版本，包含 v2ray 核心文件且免安装直接使用。

下载安装 [Proxifier](https://www.proxifier.com/)，使用[注册工具](https://github.com/Danz17/Proxifier-Keygen)激活。

## 文本编辑器

下载安装 [VS Code](https://code.visualstudio.com/)。

通过 Github 同步配置和插件。

## Scoop [^1]

> PowerShell >= 5.0 (如果是 Window10 则默认满足此条件)

```powershell
# 查看.NET Framework版本
$PSVersionTable.CLRVersion
# 查看PowerShell版本
$PSVersionTable.PSVersion
# 确保已允许PowerShell执行本地脚本
set-executionpolicy remotesigned -scope currentuser
# 或者 （但是它没有上面的命令安全）
set-executionpolicy Unrestricted -scope currentuser
```

将 Scoop 安装到自定义目录 [^2]

```powershell
# 添加用户级别的环境变量 SCOOP
$env:SCOOP='D:\Scoop'
[environment]::setEnvironmentVariable('SCOOP',$env:SCOOP,'User')

# 添加系统级别的环境变量 SCOOP_GLOBAL
$env:SCOOP_GLOBAL='D:\GlobalScoopApps'
[environment]::setEnvironmentVariable('SCOOP_GLOBAL',$env:SCOOP_GLOBAL,'Machine')

# 然后下载安装 Scoop （如果使用默认安装路径则直接运行下面的命令）
Invoke-Expression (New-Object System.Net.WebClient).DownloadString('https://get.scoop.sh')

# 或者使用下面的命令安装：
iwr -useb get.scoop.sh | iex
```

> Scoop 的运行脚本发布在 raw.githubusercontent.com，需要解决 DNS 污染的问题。

先获取 [raw.githubusercontent.com](https://ipaddress.com/website/raw.githubusercontent.com) 的真实 IP， 然后修改本地 Hosts 文件

```shell
185.199.108.133 raw.githubusercontent.com
185.199.109.133 raw.githubusercontent.com
185.199.110.133 raw.githubusercontent.com
185.199.111.133 raw.githubusercontent.com
```

配置 Powershell 代理

```powershell
$env:HTTPS_PROXY="http://127.0.0.1:10809"

$env:HTTP_PROXY="http://127.0.0.1:10809"

$env:all_proxy="socks5://127.0.0.1:10808"
```

如果 Powershell 代理失败，可以尝试使用 Proxifier 代理[^3]安装，或者下载运行脚本本地安装[^4]。

Scoop 配置[^5]

```powershell
scoop config proxy 127.0.0.1:10809   # 配置 scoop 使用本地代理，似乎只支持HTTP代理
scoop config rm proxy   # 删除已经配置的代理。

# 添加仓库并启用
scoop bucket add extras
scoop bucket add version
scoop bucket add nerd-fonts
```

初次安装 Scoop 后，添加以下基础软件

```powershell
scoop install aria2
scoop install git
```

一键安装

```powershell
scoop install -g listary honeyview snipaste everything ditto quicklook carnac
```

### Git

```shell
scoop install git

# 设置 name
git config --global user.name your-name
# 设置 email
git config --global user.email your-email
# 设置初始化时默认分支名称
git config --global init.defaultBranch main
# 多平台协作开发，window：false/mac: input
git config --global core.autocrlf false
```

### nvm

```shell
scoop install nvm

nvm list available
nvm install 16 --latest
nvm install 16 --lts
nvm use 16.13.1
```

### yarn

```shell
scoop install yarn
```

## PowerShell [^6] [^7]

### 配置 Git [^8]

PowerShell 中使用 git 需要安装 posh-git 和 posh-sshell

```powershell
# posh-git
PowerShellGet\Install-Module posh-git -Scope CurrentUser -AllowPrerelease -Force
# posh-sshell
Install-Module posh-sshell -Scope CurrentUser
```

打开 PowerShell profile

```powershell
notepad $profile
```

添加以下内容

```powershell
Import-Module posh-git
Import-Module posh-sshell
Start-SshAgent
```

### 配置 SSH [^9] [^10]

```powershell
# 启动 ssh-agent
Start-Service ssh-agent
# 设置ssh-agent为自动启动
Set-Service ssh-agent -StartupType Automatic
# 添加 ssh-key
ssh-add ~/.ssh/your-rsa
# 查看注册的key
ssh-add -l
```

### UI 美化

Oh My Posh [^11] 是目前主流的美化方案。[^12] [^13]

```powershell
# 安装 Oh My Posh
Install-Module oh-my-posh -Scope CurrentUser
# 更新
Update-Module oh-my-posh
# 获取主题
Get-PoshThemes
```

打开 PowerShell profile

```powershell
notepad $profile
```

添加以下内容

```powershell
Import-Module oh-my-posh
Set-PoshPrompt -Theme ys
```

使用 Nerd Fonts [^14] 字体，解决 powerline 有方框和乱码的问题。

```powershell
scoop install -g Meslo-NF-Mono Meslo-NF FiraCode-NF-Mono FiraCode-NF CascadiaCode-NF-Mono CascadiaCode-NF
```

### PSReadLine [^15] [^16] [^17]

- 语法着色
- 简单的语法错误通知
- 良好的多行体验（编辑和历史）
- 可定制的键绑定
- Cmd 和 emacs 模式（都还没有完全实现，但都可用）
- 许多配置选项
- Bash 样式补全（Cmd 模式下可选，Emacs 模式下默认）
- Bash/zsh 风格的交互式历史搜索 (CTRL-R)
- Emacs yank/kill ring
- 基于 PowerShell 令牌的“单词”移动和杀死
- 撤销重做
- 自动保存历史记录，包括跨实时会话共享历史记录
- 通过 Ctrl+Space 完成“菜单”完成（有点像 Intellisense，用箭头选择完成）

安装 PSReadLine [^18] [^19]

```powershell
# 升级 PowerShellGet
Install-Module -Name PowerShellGet -Force
# 退出后再安装，推荐使用预览版
Install-Module PSReadLine -AllowPrerelease -Force
# 安装稳定版本
Install-Module PSReadLine
```

配置 PSReadLine [^20] [^21]

```powershell
# 引入 PSReadLine
Import-Module PSReadLine
# 设置历史记录
Set-PSReadLineOption -PredictionSource History
# 下面三条是文档里推荐的
Set-PSReadLineKeyHandler -Key UpArrow -Function HistorySearchBackward
Set-PSReadLineKeyHandler -Key DownArrow -Function HistorySearchForward
Set-PSReadLineKeyHandler -Key Tab -Function Complete
# 菜单命令补全
Set-PSReadLineKeyHandler -Key "Ctrl+g" -Function MenuComplete
```

其他命令 [^22] [^23]

```powershell
# 更新
Update-Module PSReadLine -AllowPrerelease
# 查看所有可以设置的选项
Get-PSReadLineOption
# 查看所有可以设置的快捷键
Get-PSReadLineKeyHandler
```

vi 模式 [^24] [^25] [^26]

```powershell
Set-PSReadlineOption -EditMode Vi
Set-PSReadlineOption -ViModeIndicator Cursor
```

### posh-yarn-completion [^27]

```powershell
# 安装模块
Install-Module yarn-completion -Scope CurrentUser
# 引入模块
Import-Module yarn-completion
```

### posh-npm-completion [^28]

```powershell
# 安装模块
Install-Module npm-completion -Scope CurrentUser
# 引入模块
Import-Module npm-completion
```

## FQA

### 解决 OpenSSL SSL_read: Connection was reset, errno 10054 问题

```bash
git config http.postBuffer 524288000
git config --global http.sslVerify "false"
```

刷新 DNS 缓存

```shell
# mac
sudo killall -HUP mDNSResponder
sudo dscacheutil -flushcache

# windows
ipconfig /flushdns
```

> https://blog.51cto.com/u_15326986/3328947

### iex : 使用“2”个参数调用“DownloadFile”是发生异常:“请求被中止: 未能创建 SSL/TLS 安全通道。”

```powershell
[Net.ServicePointManager]::SecurityProtocol = [Net.SecurityProtocolType]::Tls12
```

> https://boyinthesun.cn/post/scoop/

### error: RPC failed; curl 56 OpenSSL SSL_read: SSL_ERROR_SYSCALL, errno 10054

> https://www.cnblogs.com/mmzs/p/12039888.html

### 如何让连接新主机时，不进行公钥确认？

```shell
The authenticity of host '192.168.0.110 (192.168.0.110)' can't be established.
RSA key fingerprint is a3:ca:ad:95:a1:45:d2:57:3a:e9:e7:75:a8:4c:1f:9f.
Are you sure you want to continue connecting (yes/no)?
```

```powershell
cd ~/.ssh
New-Item config -ItemType File
```

添加以下内容

```
Host *coding.net
  StrictHostKeyChecking no
```

> https://www.cnblogs.com/loveyouyou616/p/10375060.html > https://www.cnblogs.com/aspirant/p/10654041.html

### git status 显示中文和解决中文乱码

```shell
git config --global core.quotepath false
```

> https://blog.csdn.net/u012145252/article/details/81775362

### VSCode Terminal 字体显示不正确

```json
{
  "terminal.integrated.fontFamily": "firacode nerd font mono",
  "terminal.integrated.fontSize": 12
}
```

> https://dev.to/mattstratton/making-powerline-work-in-visual-studio-code-terminal-1m7

[^1]: [Scoop - A command-line installer for Windows](https://scoop-docs.vercel.app/)
[^2]: [Scoop 包管理器的相关技巧和知识](https://www.thisfaner.com/p/scoop/)
[^3]: [Scoop，一款 Windows 的包管理器](https://592592.xyz/2020/Scoop/)
[^4]: [Proxifier 代理软件介绍和使用教程](https://blog.mimvp.com/article/28488.html)
[^5]: [Scoop 安装配置](https://www.jianshu.com/p/c57ddba36209)
[^6]: [跨平台开发时换行符（LF 和 CRLF）带来的问题和解决方案](https://juejin.cn/post/6844904085779382280)
[^7]: [Powershell 教程](http://www.tastones.com/tutorial/powershell/)
[^8]: [PowerShell 文件系统（四）使用目录和文件工作](https://www.pstips.net/working-with-files-and-directories.html)
[^9]: [PowerShell – Using Git with SSH Keys on Windows 10](https://itsallinthecode.com/powershell-using-git-with-ssh-keys-on-windows-10/)
[^10]: [Automatically starting ssh-agent when powershell or git-bash are started](https://dmtavt.com/post/2020-08-03-ssh-agent-powershell/)
[^11]: [Oh My Posh](https://ohmyposh.dev/)
[^12]: [Windows Terminal + oh-my-posh 模块美化官方教程集锦以及常见问题](https://blog.csdn.net/weixin_44490152/article/details/113854767)
[^13]: [Oh My Posh：全平台终端提示符个性化工具](https://sspai.com/post/69911)
[^14]: [Nerd Fonts](https://www.nerdfonts.com)
[^15]: [PSReadLine: A Better Line Editing Experience for the PowerShell Console](https://rkeithhill.wordpress.com/2013/10/18/psreadline-a-better-line-editing-experience-for-the-powershell-console/)
[^16]: [PSReadLine - Scripting Blog](https://devblogs.microsoft.com/scripting/tag/psreadline/)
[^17]: [PowerShell - PSReadLine](https://github.com/PowerShell/PSReadLine)
[^18]: [让你的 windows shell 更好用，打造类 fish/zsh 的 powershell](https://juejin.cn/post/6984620463917891614)
[^19]: [一份简单的 PowerShell 美化指南](https://zhuanlan.zhihu.com/p/321855109)
[^20]: [打造 Win10 完美终端体验（Windows Terminal + oh-my-zsh）+ 报错解决方案](https://juejin.cn/post/7002413257906454564)
[^21]: [Windows Terminal 美化（配置 Powershell7+PSReadLine+oh-my-posh）](https://drrany.github.io/wt/)
[^22]: [PSReadline 历史记录和智能提示](https://www.jianshu.com/p/f63507364adf)
[^23]: [PSReadLine - Powershell 的强化工具](https://blog.csdn.net/sigmarising/article/details/107287275)
[^24]: [将 Powershell 的操作模式设置为 Vi/Vim 模式](https://www.jianshu.com/p/58a4e5af7cbf)
[^25]: [Example 6: Use ViModeChangeHandler to display Vi mode changes](https://docs.microsoft.com/en-us/powershell/module/psreadline/set-psreadlineoption?view=powershell-7.2)
[^26]: [An ability to handle ViModeIndicator](https://github.com/JanDeDobbeleer/oh-my-posh/issues/335)
[^27]: [PowerShell-Completion yarn-completion](https://github.com/PowerShell-Completion/yarn-completion)
[^28]: [PowerShell-Completion npm-completion](https://github.com/PowerShell-Completion/npm-completion)
