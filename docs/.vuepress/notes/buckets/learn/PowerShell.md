https://segmentfault.com/a/1190000023054090
https://www.dazhuanlan.com/lingking2/topics/1242321#%E5%9C%A8powershell%E4%B8%AD%E4%BD%BF%E7%94%A8
https://www.thisfaner.com/p/ssh-agent/
https://dmtavt.com/post/2020-08-03-ssh-agent-powershell/
https://interworks.com/blog/2021/09/15/setting-up-ssh-agent-in-windows-for-passwordless-git-authentication/
https://blog.devgenius.io/set-up-ssh-key-and-git-integration-in-windows-10-native-way-c9b94952dd2c
https://dillieodigital.wordpress.com/2015/10/20/how-to-git-and-ssh-in-powershell/
https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.2

## PowerShell 配置 SSH

> Git for Windows 中的 SSH 在 PowerShell 中不可用，将 Git 配置为使用  Windows 10 下的 OpenSSH。

```powershell
git config --global core.sshCommand C:/Windows/System32/OpenSSH/ssh.exe
```

> 以上配置会影响 Git Bash。

```powershell
# 安装 git
Install-Module posh-git -Scope CurrentUser
# 安装 shell
Install-Module posh-sshell -Scope CurrentUser
```

```powershell
# Powershell ?? ssh-agent
# https://www.cnblogs.com/wkyo/p/13264679.html
# https://blog.csdn.net/aggresss/article/details/112008736

# 将 ssh-agent 服务的启动类型设为自启
Set-Service -StartupType Automatic ssh-agent
# 启动当前会话下的 ssh-agent 服务
Start-Service ssh-agent
# 获取 ssh-agent 的运行状态
Get-Service ssh-agent
```

```powershell
Import-Module oh-my-posh
Set-PoshPrompt -Theme ys

Import-Module posh-git
Import-Module posh-sshell
Start-SshAgent
ssh-add ~/.ssh/rsa
```

> https://itsallinthecode.com/powershell-using-git-with-ssh-keys-on-windows-10/
> https://www.domstamand.com/managing-multiple-ssh-keys-for-authentication-to-github-on-windows-10/
> https://blog.devgenius.io/set-up-ssh-key-and-git-integration-in-windows-10-native-way-c9b94952dd2c
> https://www.dazhuanlan.com/lingking2/topics/1242321

```powershell
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\Directory\Background\shell\powershellmenu]
@="Open PowerShell Here"
"ShowBasedOnVelocityId"=dword:00639bc8
"icon"="powershell.exe"

[HKEY_CLASSES_ROOT\Directory\Background\shell\powershellmenu\command]
@="powershell.exe -windowstyle hidden -Command $stpath = pwd; Start-Process PowerShell -ArgumentList \\\"-NoExit\\\", \\\"-Command Set-Location -literalPath '%V'\\\" -verb RunAs"
```

> https://www.howtogeek.com/165268/how-to-add-open-powershell-here-to-the-context-menu-in-windows/
> https://www.bilibili.com/read/cv5439366


https://stackoverflow.com/questions/48843643/using-git-with-powershell-and-ssh-key-with-passphrase
https://gist.github.com/danieldogeanu/16c61e9b80345c5837b9e5045a701c99
https://gist.github.com/bsara/5c4d90db3016814a3d2fe38d314f9c23
https://github.com/mikemaccana/powershell-profile
https://git-scm.com/book/zh/v2/%E9%99%84%E5%BD%95-A%3A-%E5%9C%A8%E5%85%B6%E5%AE%83%E7%8E%AF%E5%A2%83%E4%B8%AD%E4%BD%BF%E7%94%A8-Git-Git-%E5%9C%A8-PowerShell-%E4%B8%AD%E4%BD%BF%E7%94%A8-Git
https://www.kaifa99.com/GitHub/article_30195
https://docs.microsoft.com/zh-cn/windows/terminal/
https://juejin.cn/post/6933384126363877384#heading-22
https://www.cnblogs.com/wkyo/p/13264679.html
