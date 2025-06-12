---
title: Uniapp：Web 项目如何 debug?
date: 2025-6-10
permalinkPattern: :year/:month/:day/:slug.html
permalink: /uniapp/uniapp-how-to-debug-a-web-project
---

# Uniapp: Web 项目如何 debug?

## Web debug

1. HBuilderX 内置插件：App 真机运行、Javascript 运行调试、uni-app App 调试等插件

> 如果没安装这些插件，也不用担心。因为在运行 debug 调试的时候，会有安装提示🔔。

## iOS

1. 安装 XCode
2. 安装 Command Line Tools

## Android

1. 安装 Android Studio
2. 安装 abd
3. 安装 emulator

常用命令

```sh
# 列出已连接的设备
adb devices
# 安装app
adb -s emulator-xxxx install your-app.apk
# 卸载app
adb uninstall apk-name
# 列出可用的 AVD
emulator -list-avds
# 打开模拟器，展示比例为80%
emulator -avd your-avd-name -scale 0.5
```

Ref:

- [App 平台调试指南 debug@app-debug | uni-app 官网](https://uniapp.dcloud.net.cn/tutorial/debug/debug-app.html)
- [真机运行常见问题@run | uni-app 官网](https://zh.uniapp.dcloud.io/tutorial/run/run-app-faq.html)
- [uni-app 高效开发技巧_uniapp 断点调试-CSDN 博客](https://blog.csdn.net/m0_58492934/article/details/125326940)
