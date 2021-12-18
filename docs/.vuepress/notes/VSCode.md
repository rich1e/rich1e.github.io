VSCode 配置

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
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    "vue",
    "typescript",
    "typescriptreact"
  ],
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

