#vscode #vim 

## 窗口导航

先激活文件导航窗口，再 `Ctrl+w` ，可以切换多个窗口。

### 分屏

-   上下分屏: `:sp`
-   左右分屏： `:vsp` 或  `ctrl w` + `v`
-   分屏切换： `ctrl w` + `h` , `j` , `k` , `l`  或  `ctrl w` + `w`

### 映射导航快捷键

```json
[
  {
    "key": "ctrl+shift+h",
    "command": "workbench.action.navigateLeft"
  },
  {
    "key": "ctrl+shift+l",
    "command": "workbench.action.navigateRight"
  },
  {
    "key": "ctrl+shift+k",
    "command": "workbench.action.navigateUp"
  },
  {
    "key": "ctrl+shift+j",
    "command": "workbench.action.navigateDown"
  },
]
```

## Tab 切换

同一个窗口下，多个 `Tab` 页面之间的切换使用 `gt/gT`

[如何在 VS Code 中优雅的使用 Vim - 知乎](https://zhuanlan.zhihu.com/p/512935904)