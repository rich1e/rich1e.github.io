# Windows Terminal

## 安装 Scoop

```powershell
$PSVersionTable.PSVersion.Major   #查看Powershell版本
$PSVersionTable.CLRVersion.Major  #查看.NET Framework版本

Set-ExecutionPolicy RemoteSigned -scope CurrentUser
iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
```

## 安装 Windows Terminal

## ms-appx

> https://blog.csdn.net/zhibudefeng/article/details/8500988
> https://docs.microsoft.com/en-us/windows/uwp/app-resources/uri-schemes

## Online UUID Generator

> https://www.uuidgenerator.net/

## 管理员权限

Powershell 脚本运行的几种权限：

- Restricted: 默认设置，不允许任何脚本运行
- AllSigned: 只能运行经过数字证书签名的脚本
- RemoteSigned: 运行本地脚本不需要数字签名，但是运行从网络上下载的脚本必须要有数字签名
- Unrestricted: 允许所有的脚本运行, 但是在运行前会提示是否进行操作
- Bypass: 允许所有的脚本运行, 没有任何的提示和警告。

查看当前 PowerShell 的环境配置：

```powershell
Get-ExecutionPolicy
```

改变当前的 PowerShell 环境的权限设置（注意，此命令需要在管理员权限的 powershell 下运行）

```powershell
Set-ExecutionPolicy unrestricted
```

运行带管理员的 `PowerShell`

```powershell
Start-Process powershell -Verb runAs
```

> https://www.codeleading.com/article/16444727590/
> https://blog.csdn.net/qq_30262407/article/details/114921714
> https://blog.csdn.net/weixin_39858881/article/details/107026065

## 安装 Oh My Posh

FQA

```markdown
Set-Theme : 无法将“Set-Theme”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。请检查名称的拼写，如果包括路径，请确保路径正确，然后再试一次。
所在位置 C:\Users\gongyuqi-jk\Documents\WindowsPowerShell\Microsoft.PowerShell_profile.ps1:3 字符: 1
+ Set-Theme Craver
+ ~~~~~~~~~
    + CategoryInfo          : ObjectNotFound: (Set-Theme:String) [], CommandNotFoundException
    + FullyQualifiedErrorId : CommandNotFoundException
```

![image-20211014183639451](C:\Users\gongyuqi-jk\AppData\Roaming\Typora\typora-user-images\image-20211014183639451.png)

## VSCode

```markdown
Problems loading reference 'https://json.schemastore.org/package': Unable to load schema from 'https://json.schemastore.org/package': Request vscode/content failed unexpectedly without providing any details.
```

报错原因：因为某些原因无法连接到 schema

解决方法：设置离线模式

设置离线模式方法：
在 User settings.json 中添加 `"json.schemaDownload.enable": false`

## Proxy

> https://www.v2ex.com/t/766084
> https://itectec.com/set-https-proxy-in-windows-command-line-environment/
> https://github.com/shadowsocks/shadowsocks-windows/issues/1489
> https://gist.github.com/dreamlu/cf7cbc0b8329ac145fa44342d6a1c01d
> https://docs.microsoft.com/zh-cn/microsoft-365/security/defender-endpoint/configure-proxy-internet?view=o365-worldwide
> https://stackoverflow.com/questions/26992886/set-proxy-through-windows-command-line-including-login-parameters

```shell
$env:http_proxy="socks5://127.0.0.1:10808"
$env:https_proxy="socks5://127.0.0.1:10808"
```

> V2rayN的情况下，右键开启http代理时，http代理的端口是socks+1。比如V2ray的配置文件socks代理是1080，那么默认http代理就是1081。有些软件只能用http代理不能用socks代理，这时就要用到1081这个。否则指向1080端口的话，v2ray就会不停的报错“v2ray.com/core/proxy/socks: unknown Socks version xx”

https://lynxux.github.io/posts/2021-07-01-windows-terminal-proxy/
https://github.com/v2ray/v2ray-core/issues/382
https://github.com/2dust/v2rayN/issues/1735

## SSH

> https://docs.microsoft.com/en-us/windows/terminal/tutorials/ssh

## 添加右键

> https://github.com/kerol2r20/Windows-terminal-context-menu
> https://github.com/microsoft/terminal/issues/1060

## 配置文件

```json
{
    "$schema": "https://aka.ms/terminal-profiles-schema",
    "actions": 
    [
        {
            "command": 
            {
                "action": "copy",
                "singleLine": false
            },
            "keys": "ctrl+c"
        },
        {
            "command": "find",
            "keys": "ctrl+shift+f"
        },
        {
            "command": "paste",
            "keys": "ctrl+v"
        },
        {
            "command": 
            {
                "action": "splitPane",
                "split": "auto",
                "splitMode": "duplicate"
            },
            "keys": "alt+shift+d"
        }
    ],
    "copyFormatting": "none",
    "copyOnSelect": false,
    "defaultProfile": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
    "initialCols": 140,
    "initialRows": 30,
    "profiles": 
    {
        "defaults": {},
        "list": 
        [
            {
                "colorScheme": "Moonlight II",
                "commandline": "powershell.exe",
                "cursorShape": "vintage",
                "font": 
                {
                    "face": "Fira Code"
                },
                "guid": "{61c54bbd-c2c6-5271-96e7-009a87ff44bf}",
                "hidden": false,
                "name": "Windows PowerShell",
                "scrollbarState": "hidden",
                "useAcrylic": true
            },
            {
                "commandline": "cmd.exe",
                "guid": "{0caa0dad-35be-5f56-a8ff-afceeeaa6101}",
                "hidden": false,
                "name": "\u547d\u4ee4\u63d0\u793a\u7b26"
            },
            {
                "guid": "{b453ae62-4e3d-5e58-b989-0a998ec441b8}",
                "hidden": false,
                "name": "Azure Cloud Shell",
                "source": "Windows.Terminal.Azure"
            },
            {
                "guid": "{2c4de342-38b7-51cf-b940-2309a097f518}",
                "name": "Ubuntu",
                "source": "Windows.Terminal.Wsl"
            }
        ]
    },
    "schemes": 
    [
        {
            "background": "#0C0C0C",
            "black": "#0C0C0C",
            "blue": "#0037DA",
            "brightBlack": "#767676",
            "brightBlue": "#3B78FF",
            "brightCyan": "#61D6D6",
            "brightGreen": "#16C60C",
            "brightPurple": "#B4009E",
            "brightRed": "#E74856",
            "brightWhite": "#F2F2F2",
            "brightYellow": "#F9F1A5",
            "cursorColor": "#FFFFFF",
            "cyan": "#3A96DD",
            "foreground": "#CCCCCC",
            "green": "#13A10E",
            "name": "Campbell",
            "purple": "#881798",
            "red": "#C50F1F",
            "selectionBackground": "#FFFFFF",
            "white": "#CCCCCC",
            "yellow": "#C19C00"
        },
        {
            "background": "#012456",
            "black": "#0C0C0C",
            "blue": "#0037DA",
            "brightBlack": "#767676",
            "brightBlue": "#3B78FF",
            "brightCyan": "#61D6D6",
            "brightGreen": "#16C60C",
            "brightPurple": "#B4009E",
            "brightRed": "#E74856",
            "brightWhite": "#F2F2F2",
            "brightYellow": "#F9F1A5",
            "cursorColor": "#FFFFFF",
            "cyan": "#3A96DD",
            "foreground": "#CCCCCC",
            "green": "#13A10E",
            "name": "Campbell Powershell",
            "purple": "#881798",
            "red": "#C50F1F",
            "selectionBackground": "#FFFFFF",
            "white": "#CCCCCC",
            "yellow": "#C19C00"
        },
        {
            "background": "#222436",
            "black": "#191A2A",
            "blue": "#82AAFF",
            "brightBlack": "#828BB8",
            "brightBlue": "#82AAFF",
            "brightCyan": "#86E1FC",
            "brightGreen": "#C3E88D",
            "brightPurple": "#C099FF",
            "brightRed": "#FF757F",
            "brightWhite": "#C8D3F5",
            "brightYellow": "#FFC777",
            "cursorColor": "#FFFFFF",
            "cyan": "#86E1FC",
            "foreground": "#C8D3F5",
            "green": "#C3E88D",
            "name": "Moonlight II",
            "purple": "#C099FF",
            "red": "#FF757F",
            "selectionBackground": "#FFFFFF",
            "white": "#C8D3F5",
            "yellow": "#FFC777"
        },
        {
            "background": "#282C34",
            "black": "#282C34",
            "blue": "#61AFEF",
            "brightBlack": "#5A6374",
            "brightBlue": "#61AFEF",
            "brightCyan": "#56B6C2",
            "brightGreen": "#98C379",
            "brightPurple": "#C678DD",
            "brightRed": "#E06C75",
            "brightWhite": "#DCDFE4",
            "brightYellow": "#E5C07B",
            "cursorColor": "#FFFFFF",
            "cyan": "#56B6C2",
            "foreground": "#DCDFE4",
            "green": "#98C379",
            "name": "One Half Dark",
            "purple": "#C678DD",
            "red": "#E06C75",
            "selectionBackground": "#FFFFFF",
            "white": "#DCDFE4",
            "yellow": "#E5C07B"
        },
        {
            "background": "#FAFAFA",
            "black": "#383A42",
            "blue": "#0184BC",
            "brightBlack": "#4F525D",
            "brightBlue": "#61AFEF",
            "brightCyan": "#56B5C1",
            "brightGreen": "#98C379",
            "brightPurple": "#C577DD",
            "brightRed": "#DF6C75",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#E4C07A",
            "cursorColor": "#4F525D",
            "cyan": "#0997B3",
            "foreground": "#383A42",
            "green": "#50A14F",
            "name": "One Half Light",
            "purple": "#A626A4",
            "red": "#E45649",
            "selectionBackground": "#FFFFFF",
            "white": "#FAFAFA",
            "yellow": "#C18301"
        },
        {
            "background": "#002B36",
            "black": "#002B36",
            "blue": "#268BD2",
            "brightBlack": "#073642",
            "brightBlue": "#839496",
            "brightCyan": "#93A1A1",
            "brightGreen": "#586E75",
            "brightPurple": "#6C71C4",
            "brightRed": "#CB4B16",
            "brightWhite": "#FDF6E3",
            "brightYellow": "#657B83",
            "cursorColor": "#FFFFFF",
            "cyan": "#2AA198",
            "foreground": "#839496",
            "green": "#859900",
            "name": "Solarized Dark",
            "purple": "#D33682",
            "red": "#DC322F",
            "selectionBackground": "#FFFFFF",
            "white": "#EEE8D5",
            "yellow": "#B58900"
        },
        {
            "background": "#FDF6E3",
            "black": "#002B36",
            "blue": "#268BD2",
            "brightBlack": "#073642",
            "brightBlue": "#839496",
            "brightCyan": "#93A1A1",
            "brightGreen": "#586E75",
            "brightPurple": "#6C71C4",
            "brightRed": "#CB4B16",
            "brightWhite": "#FDF6E3",
            "brightYellow": "#657B83",
            "cursorColor": "#002B36",
            "cyan": "#2AA198",
            "foreground": "#657B83",
            "green": "#859900",
            "name": "Solarized Light",
            "purple": "#D33682",
            "red": "#DC322F",
            "selectionBackground": "#FFFFFF",
            "white": "#EEE8D5",
            "yellow": "#B58900"
        },
        {
            "background": "#000000",
            "black": "#000000",
            "blue": "#3465A4",
            "brightBlack": "#555753",
            "brightBlue": "#729FCF",
            "brightCyan": "#34E2E2",
            "brightGreen": "#8AE234",
            "brightPurple": "#AD7FA8",
            "brightRed": "#EF2929",
            "brightWhite": "#EEEEEC",
            "brightYellow": "#FCE94F",
            "cursorColor": "#FFFFFF",
            "cyan": "#06989A",
            "foreground": "#D3D7CF",
            "green": "#4E9A06",
            "name": "Tango Dark",
            "purple": "#75507B",
            "red": "#CC0000",
            "selectionBackground": "#FFFFFF",
            "white": "#D3D7CF",
            "yellow": "#C4A000"
        },
        {
            "background": "#FFFFFF",
            "black": "#000000",
            "blue": "#3465A4",
            "brightBlack": "#555753",
            "brightBlue": "#729FCF",
            "brightCyan": "#34E2E2",
            "brightGreen": "#8AE234",
            "brightPurple": "#AD7FA8",
            "brightRed": "#EF2929",
            "brightWhite": "#EEEEEC",
            "brightYellow": "#FCE94F",
            "cursorColor": "#000000",
            "cyan": "#06989A",
            "foreground": "#555753",
            "green": "#4E9A06",
            "name": "Tango Light",
            "purple": "#75507B",
            "red": "#CC0000",
            "selectionBackground": "#FFFFFF",
            "white": "#D3D7CF",
            "yellow": "#C4A000"
        },
        {
            "background": "#000000",
            "black": "#000000",
            "blue": "#000080",
            "brightBlack": "#808080",
            "brightBlue": "#0000FF",
            "brightCyan": "#00FFFF",
            "brightGreen": "#00FF00",
            "brightPurple": "#FF00FF",
            "brightRed": "#FF0000",
            "brightWhite": "#FFFFFF",
            "brightYellow": "#FFFF00",
            "cursorColor": "#FFFFFF",
            "cyan": "#008080",
            "foreground": "#C0C0C0",
            "green": "#008000",
            "name": "Vintage",
            "purple": "#800080",
            "red": "#800000",
            "selectionBackground": "#FFFFFF",
            "white": "#C0C0C0",
            "yellow": "#808000"
        }
    ]
}
```



## 引用

[^1]: [Windows Terminal Themes](https://windowsterminalthemes.dev/)

[^2]: [FiraCode](https://github.com/tonsky/FiraCode)
[^3]: [Windows Terminal 主题美化](https://juejin.cn/post/6933384126363877384)
[^4]: [Oh My Posh](https://ohmyposh.dev/)
[^5]: [什么是 Windows 终端？](https://docs.microsoft.com/zh-cn/windows/terminal/)
[^6]: [新生代 Windows 终端：Windows Terminal 的全面自定义](https://sspai.com/post/59380)



## 参考

https://segmentfault.com/a/1190000023337501
https://docs.microsoft.com/zh-cn/windows/terminal/
https://juejin.cn/post/6933384126363877384#heading-6
https://ohmyposh.dev/
https://sspai.com/post/63233
https://sspai.com/post/59380
https://www.jianshu.com/p/a61fea170d1a
https://floatsyi.com/2019/09/27/Windows-Terminal/
https://www.jianshu.com/p/0effae21b862

https://zhuanlan.zhihu.com/p/143101492
https://zhuanlan.zhihu.com/p/209032586
https://www.cnblogs.com/hongdada/p/11844277.html
https://shenbo.github.io/2021/03/23/apps/%E4%BD%BF%E7%94%A8scoop%E5%AE%89%E8%A3%85%E7%AE%A1%E7%90%86windows%E8%BD%AF%E4%BB%B6(2)-github%E5%8A%A0%E9%80%9F/
https://juejin.cn/post/6932808129189150734#heading-2
https://www.cnblogs.com/pomelott/p/13212085.html
https://zhuanlan.zhihu.com/p/412417957