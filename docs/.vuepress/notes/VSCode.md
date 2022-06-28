# VS Code

## VSCode 配置

```json
{
  "git.ignoreMissingGitWarning": true,
  "git.path": "C:/Users/gongyuqi-jk/scoop/apps/git/current/cmd/git.exe",
  "terminal.integrated.automationShell.windows": "C:/Users/gongyuqi-jk/scoop/apps/git/current/bin/bash.exe",
  "terminal.integrated.profiles.windows": {
    "PowerShell -NoProfile": {
      "source": "PowerShell",
      "args": ["-NoProfile"]
    },
    "Git-Bash": {
      "path": "C:/Users/gongyuqi-jk/scoop/apps/git/current/bin/bash.exe",
      "args": []
    }
  },
  "terminal.integrated.defaultProfile.windows": "Git-Bash",
  "security.workspace.trust.untrustedFiles": "open",
  "explorer.confirmDelete": false,
  "workbench.iconTheme": "vscode-icons",
  "editor.fontFamily": "Fira Code",
  "editor.fontLigatures": true,
  "editor.fontSize": 13,
  "editor.fontWeight": "normal",
  "diffEditor.ignoreTrimWhitespace": false,
  "explorer.confirmDragAndDrop": false,
  "eslint.alwaysShowStatus": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.format.enable": true,
  "eslint.validate": ["javascript", "javascriptreact", "html", "vue", "typescript", "typescriptreact"],
  "fileheader.customMade": {
    "Author": "gongyuqi",
    "Date": "Do not edit",
    "LastEditTime": "Do not Edit",
    "LastEditors": "gongyuqi",
    "Descripttion": "",
    "FilePath": "Do not Edit"
  },
  "json.schemaDownload.enable": false
}
```

```shell
Windows Registry Editor Version 5.00

[-HKEY_CURRENT_USER\Software\Classes\*\shell\Open with &Code]
[-HKEY_CURRENT_USER\Software\Classes\*\shell\Open with &Code\command]
[-HKEY_CURRENT_USER\Software\Classes\Directory\shell\Open with &Code]
[-HKEY_CURRENT_USER\Software\Classes\Directory\shell\Open with &Code\command]
[-HKEY_CURRENT_USER\Software\Classes\Directory\Background\shell\Open with &Code]
[-HKEY_CURRENT_USER\Software\Classes\Directory\Background\shell\Open with &Code\command]
```

## Plugin - CodeTour

> https://segmentfault.com/a/1190000040798972
> https://mp.weixin.qq.com/s/55snlZvRuxD4xS_KZPVZYA
> https://juejin.cn/post/6939576820492664845
> https://github.com/microsoft/codetour

## VSCode debug

> https://juejin.cn/post/7080135520902184997

## VSCode 远程开发调试

```
https://jiayaoo3o.github.io/2020/06/23/%E8%AE%B0%E5%BD%95%E4%B8%80%E6%AC%A1WSL2%E7%9A%84%E7%BD%91%E7%BB%9C%E4%BB%A3%E7%90%86%E9%85%8D%E7%BD%AE/
https://zhuanlan.zhihu.com/p/104771275
http://zllbook.tudouwa.fun/UbuntuLinux%E7%9F%A5%E8%AF%86%E7%82%B9%E6%B1%87%E6%80%BB/Ubuntu%E5%9F%BA%E6%9C%AC%E5%91%BD%E4%BB%A4.html
https://juejin.cn/post/7077190268575252517
https://blog.csdn.net/hjb2722404/article/details/120738062
https://www.bookstack.cn/read/dockerguide/chapter_fastlearn-docker_ps.md
https://dowww.spencerwoo.com/3-vscode/3-1-remote-dev.html
https://docs.microsoft.com/en-us/windows/wsl/basic-commands
https://docs.microsoft.com/zh-cn/windows/wsl/setup/environment
https://zhuanlan.zhihu.com/p/102385239
https://blog.fundebug.com/2019/07/31/vscode-remote-development/
http://blog.throneclay.top/2019/05/08/vscode_github_hexo/
https://www.iamlightsmile.com/articles/%E9%85%8D%E7%BD%AEVSCode-Remote-Container/#2-3-%E5%AE%89%E8%A3%85docker
https://segmentfault.com/a/1190000023095631#comment-area
https://abxy.fun/post/vscode-remote-container/
https://www.qikqiak.com/post/use-vscode-remote-dev-debug/
```

## koro1FileHeader

> https://github.com/OBKoro1/koro1FileHeader/
> https://blog.csdn.net/jagger_guo/article/details/104733434

## 参考

https://zhuanlan.zhihu.com/p/54164612
