---
author: rich1e
tags: ["daily"]
date: 2023-05-24 09:23:35
Last modified date: 2023-05-24 09:23
uuid: f22e33f6-a508-363e-eed1-9ea551256b0a
---

#curl #yarn #monorepo #pnpm #turbo #ios #cydia 

```ad-note
title: 每日一跃

[资深前端才知道的curl - 掘金](https://juejin.cn/post/7236009756530966587)
```

## yarn workspace & Monorepo

添加依赖

```node
yarn workspace project-name add vue --dev
```

移除依赖

```node
yarn workspace project-name remove vue
```

[Monorepos in JavaScript & TypeScript](https://www.robinwieruch.de/javascript-monorepos/)
[Yarn Workspaces: Create the Perfect Monorepo](https://javascript.plainenglish.io/yarn-workspaces-create-the-perfect-monorepo-d0b6295e6838)
[How to Deploy a Monorepo to Vercel Using Yarn Workspaces](https://vercel.com/guides/deploying-yarn-monorepos-to-vercel)
[Scaling out JavaScript Monorepos with Yarn Workspaces - Semaphore](https://semaphoreci.com/blog/javascript-monorepos-yarn-workspaces)
[Yarn workspace tutorial, introduction and cheatsheet | Chandan Kumar](https://www.chandankumar.com/blog/yarn-workspace-tutorial)
[Advanced package manager features for npm, Yarn, and pnpm - LogRocket Blog](https://blog.logrocket.com/advanced-package-manager-features-npm-yarn-pnpm/)
[Yarn Workspace 使用指南 - 简书](https://www.jianshu.com/p/990afa30b6fe)
[yarn workspace | Yarn](https://classic.yarnpkg.com/en/docs/cli/workspace)
[构建您所需要的 - DEV Community](https://dev.to/mbarzeev/build-just-what-you-need-32kd)
[Managing a full-stack, multipackage monorepo using pnpm - LogRocket Blog](https://blog.logrocket.com/managing-full-stack-monorepo-pnpm/)

## Turbo

[Why TurboRepo Will Be The First Big Trend of 2022](https://www.swyx.io/turborepo-why)

## Cydia Impactor

![](http://www.cydiaimpactor.com/logo.png)

Cydia Impactor 是一个用于移动设备的 GUI 工具。它已经具有功能，但仍在进行中。[它由 saurik（ Twitter](https://twitter.com/saurik)和[网站](http://www.saurik.com/)）开发。

您可以使用此工具在 iOS 上安装 IPA 文件，在 Android 上安装 APK 文件。它还可以帮助您利用一系列 Android“万能密钥”漏洞。

**注意：截至 2019 年底，如果您拥有（付费）开发者帐户，Cydia Impactor 只能将 IPA 文件安装到 iPhone；如果您尝试使用 Impactor 安装 IPA 文件并且您没有支付 Apple 税款，它将无法运行。**

---

**下载适用于[Mac OS X](https://cydia.saurik.com/api/latest/1)、[Windows](https://cydia.saurik.com/api/latest/2)、[Linux（32 位）](https://cydia.saurik.com/api/latest/4)或[Linux（64 位）](https://cydia.saurik.com/api/latest/5)的最新版本的 Cydia Impactor 。**（这些 URL 将始终重定向到最新版本，因此请随意直接链接到 howto 指南中的包。）

**注意：不要_“_以管理员身份运行”Impactor；这样做会使文件拖放在 Windows 10 上不起作用。**

**另外：很多人正在下载 Cydia Impactor，试图以 IPA 文件的形式安装某种 Pokemon Go hack……到他们的 Android 设备……IPA 文件仅适用于运行 iOS 的设备，不适用于 Android。**

如果您使用的是 Windows，则可能需要安装设备驱动程序才能通过 USB 与您的 Android 设备通信。如果未检测到您的设备，请使用 Impactor 的 USB 驱动程序扫描功能尝试为您的设备自动构建和安装驱动程序。您无需安装 Android SDK 即可使用 Impactor。

对于 iOS，如果您使用的是 Windows 或 macOS，您肯定需要安装 iTunes 才能使用此工具（出于不同的原因）。您无需安装 Xcode 即可使用 Impactor（即使是签署 IPA 文件等功能）。

要下载新版本，请使用应用程序内部 Impactor 菜单下的“检查更新...”。Impactor 也会偶尔提示新版本的出现。（此功能目前在 Linux 版本中不可用。）

---

[Bluebox Security](http://bluebox.com/)发现了 Android“Master Key”漏洞。有关此错误如何工作的更多信息，我已经完成了一篇关于漏洞利用技术的[过于详细的文章](http://www.saurik.com/id/17)。

Ref

[Release iOS 2.3.5 · yuuwill/1024app-ios](https://github.com/yuuwill/1024app-ios/releases/tag/v2.3.5)
[免越獄也能夠過Cydia Impactor安裝未簽名APP技巧 - 瘋先生](https://mrmad.com.tw/cydia-impactor)
[免電腦iOS自動重簽IPA工具ReProvision教學，支援32與64位元設備 - 瘋先生](https://mrmad.com.tw/reprovision)
[教程 | 使用 Cydia Impactor 工具安装未签名 App | 自由微信 | FreeWeChat](https://freewechat.com/a/MzUzNDY2NDc0OQ==/2247485612/2)
[使用Cydia Impactor免越狱安装ipa - 简书](https://www.jianshu.com/p/2076fcedd690)
[Cydia 冲击器](http://www.cydiaimpactor.com/)
