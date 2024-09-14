---
title: Windows 中配置 Caps Lock
date: 2024-09-14
permalinkPattern: :year/:month/:day/:slug.html
permalink: /workspace/windows-caps-lock-settings
---

<!--
 * @Author: yuqigong@outlook.com
 * @Date: 2024-09-14 11:00:00
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2024-09-14 11:32:00
 * @Description:
 *
-->

# Windows 中配置 Caps Lock

[[toc]]

## 禁用 Caps Lock

新建 `disable_caps_lock.reg` 文件，内容如下：

```sh
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\Keyboard Layout]

"Scancode Map"=hex:00,00,00,00,00,00,00,00,02,00,00,00,00,00,3a,00,00,00,00,00
```
编辑好文件后，直接运行注册表文件。

> 需要重启电脑才会生效。

### 安装 PowerToys

[下载PowerToys安装文件](https://github.com/microsoft/PowerToys/releases)

```pwsh
scoop install powertoys
```

### 设置按键映射

打开 PowerToys，选择**键盘管理器**，配置如下：

![image-name](@images/workspace/windows-caps-lock-settings/20240914111529.png)

## Ref

[How to Turn Off Caps Lock: Windows, Mac, & Chromebook](https://www.wikihow.com/Turn-Off-Caps-Lock)
