[TOC]



## 未能解析此远程名称: 'raw.githubusercontent.com'

> https://blog.csdn.net/qq_41061352/article/details/107140887
> https://www.ipaddress.com/

## OpenSSL SSL_read: Connection was aborted, errno 10053

> https://zhuanlan.zhihu.com/p/365296413
> https://blog.csdn.net/qq_40999917/article/details/116213557

## 安装 sudo

下载 [sudo.ps1](https://raw.githubusercontent.com/lukesampson/psutils/c7116ac143ca81f223e6091d0974f45ac241eb1d/sudo.ps1) 和 [sudo.json](https://github.com/ScoopInstaller/Main/blob/master/bucket/sudo.json)，JSON 修改如下：

```shell
{
    "version": "0.2020.01.26",
    "description": "An approximation of the Unix sudo command. Shows a UAC popup window unfortunately.",
    "homepage": "https://github.com/lukesampson/psutils",
    "license": "MIT",
    "url": "your-path/sudo.ps1",
    "hash": "0d3cf564dc584ea98b213b4763228dee523c32388b1293e77eff70344d294aa8",
    "bin": "sudo.ps1",
    "checkver": {
        "url": "https://github.com/lukesampson/psutils/commits/master/sudo.ps1.atom",
        "regex": "(?s)>(\\d+)-(\\d+)-(\\d+)T.*?/(?<sha>[0-9a-f]{40})",
        "replace": "0.${1}.${2}.${3}"
    },
    "autoupdate": {
        "url": "https://raw.githubusercontent.com/lukesampson/psutils/$matchSha/sudo.ps1"
    }
}
```

在 `PowerShell` 中执行

```
 scoop install your-path\sudo.json
```

安装完成后，将 `install.json` 和 `manifest.json` 中的值改为原始值。

## Proxy

```
scoop config proxy 127.0.0.1:1080
scoop config rm proxy
```

```
scoop config aria2-enabled false
```

## Buckets

> https://github.com/ScoopInstaller/Scoop/wiki/Buckets#creating-your-own-bucket
> https://rasa.github.io/scoop-directory/by-date-updated

## 软件清单

### PasteEx

> https://github.com/huiyadanli/PasteEx

```powershell
scoop install 'https://raw.githubusercontent.com/acdzh/zpt/master/bucket/pasteex.json'
```

把剪贴板的内容粘贴为文件。

- 自定义文本扩展名规则。
- 自动识别图片的扩展名，且支持透明 PNG 与动态 GIF 的粘贴。
- 更快捷方便的[监听模式](https://github.com/huiyadanli/PasteEx/wiki#监听模式)

https://bilishare.com/tech/2021/03/03/scoop-install-usage.html
https://hackettyu.com/2020-05-07-windows-scoop/
https://chawyehsu.com/blog/talk-about-scoop-the-package-manager-for-windows-again
https://www.jianshu.com/p/6296661c1503
