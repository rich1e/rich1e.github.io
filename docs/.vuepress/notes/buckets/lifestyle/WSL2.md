# Windows 10下使用 VS Code 远程开发12

[TOC]

## WSL 2

> https://docs.microsoft.com/en-us/windows/wsl/
> https://blog.arcto.me/frontend/wsl/
> https://docs.microsoft.com/zh-cn/windows/wsl/

**.wslconfig 配置**

你可以通过将 `.wslconfig` 文件放置在用户文件夹的根目录下（即 `C:\Users\<YourUserName>\.wslconfig`）来配置全局 WSL 选项。此文件中许多配置与 WSL 2 有关，你需要运行 `wsl --shutdown` 来关闭 WSL 2 虚拟机，重启 WSL 2 ，以确保这些配置生效。[^1]

`.wslconfig` 示例文件：[^2]

```shell
[wsl2]
processors=4
memory=8GB
swap=8GB
localhostForwarding=true
```

`.wslconfig` 文件格式不正确，不会生效。[^3]定期释放cache内存。[^4]

```bash
[wsl2]
# 自定义 Linux 内核的绝对路径
kernel=<path>
# 给 WSL 2 虚拟机分配的内存大小
memory=<size>
# 为 WSL 2 虚拟机分配的处理器核心数量
processors=<number>
# 为 WSL 2 虚拟机分配的交换空间，0 表示没有交换空间
swap=<size>
# 自定义交换虚拟磁盘 vhd 的绝对路径
swapFile=<path>
# 是否允许将 WSL 2 的端口转发到主机（默认为 true）
localhostForwarding=<bool>

# `<path>` 必须是带反斜杠的绝对路径，例如 `C:\\Users\\kernel`
# `<size>` 必须在后面加上单位，例如 8 GB 或 512 MB
```

**文件读写权限配置**

wsl.conf

```shell
[automount]
enabled = true
root = /mnt/
options = "metadata,umask=22,fmask=111"
mountFsTab = false

# @see https://segmentfault.com/a/1190000016677670

# 这个文件里还可以添加其他配置项，有兴趣的可以看看上面的链接
```

参考

https://devblogs.microsoft.com/commandline/chmod-chown-wsl-improvements/
https://docs.microsoft.com/zh-CN/windows/wsl/wsl-config#per-distribution-configuration-options-with-wslconf
http://zuyunfei.com/2018/06/15/file-system-configuration-in-wsl/
https://ridicurious.com/2019/07/25/setup-wsl-launch-configuration-wsl-conf/

**WSL 2 支持 USB**[^5]

- 安装 USBIPD-WIN 项目
- 在 Linux 中安装 USBIP 工具和硬件数据库
- 附加 USB 设备

**WSL Command**[^6]

```bash
wsl --install
wsl --list --online
wsl --list --verbose
```

**WSL Automatically**[^7][^8]

```bash
[automount]
enabled = true
root = /mnt/
options = "metadata,umask=22,fmask=111"
mountFsTab = true
```

**WSL 固定`ip`**

> https://blog.csdn.net/manbu_cy/article/details/108476859
> https://www.v2ex.com/t/744955
> https://blog.csdn.net/u012809062/article/details/118424682

**WSL 重启**

```powershell
#停止LxssManager服务
net stop LxssManager  
 
#启动LxssManager服务
net start LxssManager  
```

**WSL 安装到其他驱动器**

> https://www.myfreax.com/installing-wsl-manually-on-non-system-drive/

## Docker

> https://blog.csdn.net/hjb2722404/article/details/120738062
> https://github.com/docker/for-win/issues/8336
> https://blog.arcto.me/others/sed/

> Docker returned an error. Make sure the Docker daemon is running and select an option how to proceed. 



> compinit:503: no such file or directory: /usr/share/zsh/vendor-completions/_docker

如果执行过wsl --shutdown，再次进入会出现以上报错。重启docker可以解决。

## Ubuntu

**Git**

![image-20220426230425183](C:\Users\yuqigong\AppData\Roaming\Typora\typora-user-images\image-20220426230425183.png)

```bash
➜  ~ ssh-keygen -t ed25519 -C "yuqigong@outlook.com" -f "rich1e"

# 查看公钥内容
➜  ~ cat ~/.ssh/rich1e.pub

# 将公钥复制到剪贴板
➜  ~ cat ~/.ssh/rich1e.pub | clip.exe

➜  ~ eval "$(ssh-agent -s)"
Agent pid 1881
➜  ~ ssh-add ~/.ssh/rich1e
Identity added: /root/.ssh/rich1e (yuqigong@outlook.com)
➜  ~ ssh -T git@github.com
Hi rich1e! You've successfully authenticated, but GitHub does not provide shell access.
# 将 git commit 的默认编辑器从 nano 转为 vim
➜  ~ git config --global core.editor vim
```



> [Failed to connect to raw.githubusercontent.com port 443](https://links.jianshu.com/go?to=https%3A%2F%2Fsegmentfault.com%2Fa%2F1190000021637275)

`raw.githubusercontent.com` 域名解析被污染了，修改`Hosts`或者使用`Proxy`解决。

**Hosts**

在[https://www.ipaddress.com/](https://link.segmentfault.com/?enc=Tpu5MQNSvLX89j2UruVXkQ%3D%3D.ICXcs4fMv2P5jyp6cUMJ9oJLbDNHWu2ak0QGqVTq6dE%3D)查询raw.githubusercontent.com的真实IP。

```bash
sudo vi/etc/hosts

199.232.28.133 raw.githubusercontent.com
```

**Proxy**

- 设置V2ray允许局域网连接
- 设置Win10防火墙，需要在Win10防火墙中允许V2ray进行公用和专用网络的访问


```bash
# Fetch Windows ip address inside WSL environment
WINDOWS_IP=$(ip route | grep default | awk '{print $3}')
PROXY_HTTP="http://${WINDOWS_IP}:<代理端口>"
PROXY_SOCKS5="${WINDOWS_IP}:<代理端口>"

# Git & SSH for Git proxy
proxy_git () {
  git config --global http.https://github.com.proxy ${PROXY_HTTP}
  if ! grep -qF "Host github.com" ~/.ssh/config ; then
    echo "Host github.com" >> ~/.ssh/config
    echo "  User git" >> ~/.ssh/config
    echo "  ProxyCommand nc -X 5 -x ${PROXY_SOCKS5} %h %p" >> ~/.ssh/config
  else
    lino=$(($(awk '/Host github.com/{print NR}'  ~/.ssh/config)+2))
    sed -i "${lino}c\  ProxyCommand nc -X 5 -x ${PROXY_SOCKS5} %h %p" ~/.ssh/config
  fi
}

# Set proxy
set_proxy () {
  export http_proxy="${PROXY_HTTP}"
  export https_proxy="${PROXY_HTTP}"
  proxy_git
}

# Unset proxy
unset_proxy () {
  unset http_proxy
  unset https_proxy
  git config --global --unset http.https://github.com.proxy
}

# Set alias
alias proxy=set_proxy
alias unproxy=unset_proxy
```

ssh proxycommand配置

v2rayn 配置

```
plugins=(git docker docker-compose zsh-completions zsh-autosuggestions autojump zsh-syntax-highlighting)

WINDOWS_IP=$(ip route | grep default | awk '{print $3}')
PROXY_HTTP="http://${WINDOWS_IP}:1083"
PROXY_SOCKS5="${WINDOWS_IP}:1082"

# Git & SSH for Git proxy
proxy_git () {
  git config --global http.https://github.com.proxy ${PROXY_HTTP}
  if ! grep -qF "Host github.com" ~/.ssh/config ; then
    echo "Host github.com" >> ~/.ssh/config
    echo "  User git" >> ~/.ssh/config
    echo "  ProxyCommand nc -X 5 -x ${PROXY_SOCKS5} %h %p" >> ~/.ssh/config
  else
    lino=$(($(awk '/Host github.com/{print NR}'  ~/.ssh/config)+2))
    sed -i "${lino}c\  ProxyCommand nc -X 5 -x ${PROXY_SOCKS5} %h %p" ~/.ssh/config
  fi
}

# NPM for proxy
proxy_npm () {
  npm config set proxy ${PROXY_HTTP}
  npm config set https-proxy ${PROXY_HTTP}
}

# Set proxy
set_proxy () {
  export http_proxy="${PROXY_HTTP}"
  export https_proxy="${PROXY_HTTP}"
  proxy_git
  proxy_npm
}

# Unset proxy
unset_proxy () {
  unset http_proxy
  unset https_proxy
  git config --global --unset http.https://github.com.proxy
}

# Set alias
alias zshconfig="mate ~/.zshrc"
alias ohmyzsh="mate ~/.oh-my-zsh"
alias proxy=set_proxy
alias unproxy=unset_proxy

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

. /usr/share/autojump/autojump.sh

fpath=(~/.zsh/completion $fpath)
autoload -U compinit && compinit -i

export PNPM_HOME="/root/.local/share/pnpm"
export PATH="$PNPM_HOME:$PATH"
```



参考：

[1]: https://github.com/cherrol/wsl2-development

[2]: https://ivpsr.com/281.html	"v2rayN路由高级功能、全局模式、PAC模式设置方法"
[3]: https://github.com/2dust/v2rayN/issues/1366	"4.x后利用分流实现之前PAC效果的方案"

[4]: https://www.silinchen.com/post/git-amend-commit-info-author-email	"Git 修改已提交的 commit 信息，包括作者、邮箱"
[5]: https://gist.github.com/laispace/666dd7b27e9116faece6	"git 设置和取消代理"
[6]: https://ericclose.github.io/git-proxy-config.html	"一文让你了解如何为 Git 设置代理"



## Terminal

待补充

## VS Code

> https://code.visualstudio.com/docs/editor/settings-sync

## nvm

[Git Install](https://github.com/nvm-sh/nvm#git-install)

> -bash: ./nvm.sh: Permission denied



>  ‘bash\r’: Permission denied

- 使用 zsh 命令环境

- /etc/wsl.conf 设置换行符


```bash
[interop]
appendWindowsPath = false
```

常用命令

```bash
# 查看可供安装的版本
nvm ls-remote
# 安装当前稳定的 Node.js LTS 版本
nvm install --lts
```

参考：

[1]: https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl	"Install Node.js on Windows Subsystem for Linux (WSL2)"
[2]: https://github.com/pyenv/pyenv/issues/1725	"/usr/bin/env: ‘bash\r’"

```
- 安装wsl2
- 安装Ubuntu & 更新
- 安装WT & VSCode & Remote-WSL
- 配置wsl2（设置默认wsl版本、设置默认Linux版本）
- 配置Ubuntu（Git、zsh & oh-my-zsh、nvm、pyenv）





# WSL2 磁盘问题

https://loesspie.com/2021/01/27/wsl2-compact-disk-win10/
https://docs.microsoft.com/zh-cn/windows/wsl/case-sensitivity
https://xie.infoq.cn/article/be33f9e6a3dde85c88cbb24dc
https://naoketeng.online/?p=104
https://docs.microsoft.com/zh-cn/windows/wsl/wsl2-mount-disk

ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIGL1BuLIEfqL4Lu0w52mdN0YO3NLvb3TwAdDLdYK5Nrf yuqigong@outlook.com




chrome://newtab/

```



## Remote Dev

> https://code.visualstudio.com/docs/remote/remote-overview



> https://zhuanlan.zhihu.com/p/375161288
> https://liberobk.com/2021/02/03/%E6%B8%85%E7%90%86wsl2%E7%9A%84%E7%A3%81%E7%9B%98%E5%8D%A0%E7%94%A8/
> https://www.cnblogs.com/enrio/p/14222648.html
> https://nesscurie.github.io/2021/08/10/wsl2%E7%9A%84%E4%BD%BF%E7%94%A8/
> https://blog.csdn.net/magefreehome/article/details/107885573
> https://donnadie.top/build-light-linux-env-on-windows/
> https://docs.microsoft.com/zh-cn/windows/wsl/basic-commands



[^1]: https://dowww.spencerwoo.com/4-advanced/4-3-wslconfig.html
[^2]: https://blog.iyatt.com/?p=3256
[^3]: https://github.com/microsoft/WSL/issues/6728
[^4]: https://zhuanlan.zhihu.com/p/345645621
[^5]: https://dowww.spencerwoo.com/4-advanced/4-4-usb.html#usbip-win
[^6]: https://docs.microsoft.com/zh-cn/windows/wsl/basic-commands
[^7]: https://devblogs.microsoft.com/commandline/automatically-configuring-wsl/
[^8]: https://segmentfault.com/a/1190000016677670
