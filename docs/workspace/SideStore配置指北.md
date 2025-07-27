---
title: SideStore 配置指北
date: yyyy-mm-dd
permalinkPattern: :year/:month/:day/:slug.html
permalink: /workspace/an-alternative-app-store-for-seamless-sideloading
tag: SideStore
---

# SideStore 配置指北

[[toc]]

## SideStore 介绍

> AI 摘要：SideStore 是一个免费的、开源的 ​**iOS 应用签名工具**，类似于 AltStore 的升级版，用于在未越狱的 iPhone/iPad 上安装非 App Store 的第三方应用（如破解软件、自研工具、修改版应用等）。它通过巧妙绕过苹果的限制，解决了传统签名工具需依赖电脑、证书易失效等问题，实现 ​**无需电脑的远程签名续期**。

### Sideloading 技术

>   SideStore makes sideloading applications on iOS/iPadOS 14+ devices easy.

Sideloading（侧载）技术是指在非越狱的 iOS 或 Android 设备上，绕过官方应用商店（App Store/Play Store）安装第三方应用的过程。

### 核心特点与工作原理

#### 1. ​**核心功能**​

- ​**免越狱安装第三方应用**​：
    直接安装 IPA 文件（如 YouTube++、uYou+、模拟器等）到设备。
- ​**突破苹果数量限制**​：
    支持多应用安装（普通 Apple ID 仅允许 3 个签名应用）。
- ​**自动无线续签**​：
    无需连接电脑即可自动刷新应用有效期（普通证书签名 7 天后失效）。

#### 2. ​**核心原理**​

- ​**利用开发者证书**​：
    通过用户的 Apple ID 在后台生成虚拟开发者证书，合法绕开苹果限制（需接受协议）。
- ​**Anisette 服务器**​：
    使用远程服务器模拟苹果验证机制（如 `aliceserver` 服务），避免证书被苹果批量封禁。
- ​**WireGuard VPN / StosVPN 保活**​：
    后台维持 VPN 连接以实现自动续签功能。

### 与传统工具对比

| 工具              | 需电脑续签 | 远程自动续期 | 多开数量限制 | 风险性         |
| --------------- | ----- | ------ | ------ | ----------- |
| AltStore        | ✓     | ✗      | 3 个    | 低（无封号）      |
| ​**SideStore**​ | ✗     | ✓      | 可突破限制  | 中（需备用 ID）   |
| 企业证书            | ✗     | ✗      | 无限制    | 高（易失效）      |
| TrollStore      | ✗     | ✓      | 无限制    | 极低（仅支持部分系统） |

> ✅ ​**优势总结**​：无需电脑续签、可远程服务部署、适用最新 iOS 版本（支持 iOS 17+）。

## 安装 SideStore

### 必备条件

- 运行 macOS 10.15 以上版本的 Mac 或者 Windows 10 以上版本
- 一个 Apple ID 账号
- 一台 运行在 iOS 14、iPadOS 14 以上版本系统的 iPhone 或者 iPad 设备

### 辅助软件

1. AltServer (1.7.1)
2. SideStore.ipa (0.6.2)
3. StosVPN (1.1.1)
4. iDevicePair（latest）

> 上述软件可以采用最新的版本，20250727

### 安装步骤

1. 先在电脑上安装 `AltServer`；
2. 然后，在电脑上通过 `AltServer` 安装 `AltStore`；

![image-name](@images/workspace/an-alternative-app-store-for-seamless-sideloading/Pasted-image-20250727181356.png)

3. 接着安装 `SideStore`。键盘上按住 `option` 键后点击 `AltServer` 的图标，之后选择 `SideStore.ipa` ，并在本地目录中找到之前下载的 `SideStore` 文件，按提示输入 Apple ID 等信息后等待移动设备上安装完成；

![image-name](@images/workspace/an-alternative-app-store-for-seamless-sideloading/Kapture-2025-07-27-at-18.21.33.gif)

4. 在移动设备的 `设置 > 通用 > VPN与设备管理` 可以看到与之前输入的 Apple ID 相关的开发者 APP，完成信任确认操作。
5. iOS/iPadOS 16 以上系统还需要在 `设置 > 隐私与安全性 > 开发者模式` 中开启 `开发者模式`，并按照系统提示完成后续操作

![image-name](@images/workspace/an-alternative-app-store-for-seamless-sideloading/Pasted-image-20250727184636.png)

6. 直接运行 SideStore 会有错误弹窗提示。首先，关闭 SideStore，将设备用 `USB` 线连接电脑，然后打开 `iDevicePair` 软件，依次点击 `Generate` -> `Install`，这样再次打开 `SideStore` 就可以正常运行了;
### SideStore 安装应用和刷新

> SideStore 安装应用时，需要全程开启 `StosVPN` 。

1. 在 `SideStore` 中登录 **Apple ID**；
2. 在 **My Apps** 中可以通过 `Refresh All` 刷新应用的使用时长，**需要每七天执行一次**；
3. 正常使用侧载的 App 时，不需要开启 `StosVPN`，只在需要刷新或者安装新应用时开启。（⚠️ 要在连接 Wi-Fi 场景下进行）;

**如果遇到 `SideStore` 安装失败的问题**，可以多尝试几次[^1]：

> 1. 在电脑上通过 AltServer 安装 AltStore
> 2. 通过手机 AltStore 安装 SideStore
> 3. 然后再通过 Sidestore 本身重新安装 Sidestore，删除扩展
> 4. SideStore 现已刷新，可以删除 altstore 并侧载其他应用程序

## 部署 Anisette 服务器[^2]

`SideStore` 之所以可以远程续签，主要得力于可以通过 `Anisette` 服务器模拟苹果验证机制，避免证书被苹果封禁。

> When many people use the same Anisette server (specifically a v1 server), it trips Apple's security, and locks the accounts that were using that machine.

然而，`SideStore` 官方提供的服务器由于使用人数太多，可能会影响证书验证，建议自己搭建服务器。

1. 先注册一个 [Render](https://render.com/) 账号，新建服务器；
2. 通过 [Anisette-V3](https://github.com/Dadoum/anisette-v3-server) 的 `Docker` 方式完成部署[^3]；

```sh
docker run -d --restart always --name anisette-v3 -p 6969:6969 --volume anisette-v3_data:/home/Alcoholic/.config/anisette-v3/lib/ dadoum/anisette-v3-server
```

参考： [Custom Anisette Server](https://docs.sidestore.io/docs/advanced/anisette)

## 配置 Anisette Servers

**创建自定义 Anisette Servers 服务器列表**，复制下面的 `json` 代码，修改服务器 `name` 和 `address`，然后将这段 `json` 代码部署发布，使其可以通过互联网访问。

```json
{
  "servers": [
    {
      "name": "SideStore",
      "address": "https://ani.sidestore.io"
    },
    {
      "name": "your name",
      "address": "your server's url"
    }
  ],
  "cache": "https://servers.sidestore.io/servers.json.hash"
}
```

> 官方建议使用 `GitHub Pages` 文件托管服务。参考：[Creating a custom anisette server list](https://docs.sidestore.io/docs/advanced/anisette#creating-a-custom-anisette-server-list)

1. 打开 `SideStore` 中的“设置”选项卡；
2. 向下滚动到底部并点击“Anisette Servers”

![image-name](@images/workspace/an-alternative-app-store-for-seamless-sideloading/Pasted-image-20250727193816.png)

3. 点击列表 `URL` 并将其替换为您的服务器列表的 `URL；`
4. 点击“Refresh Servers'”，然后从更新的列表中选择您自己的服务器；

![image-name](@images/workspace/an-alternative-app-store-for-seamless-sideloading/Pasted-image-20250727193723.png)

Ref

- [SideStore 安装指南：如何在 iOS/iPadOS 设备上侧载应用 - 别年](https://fylsen.com/posts/2024/05/sidestore-install-guide-ios-ipados-sideload-apps/)
- [3-App Limit Bypass | SideStore Docs](https://docs.sidestore.io/zh/docs/advanced/sparserestore/)
- [SideStore/SideStore: SideStore is a fork of AltStore that doesn't require an AltServer.](https://github.com/SideStore/SideStore/)
- [Fix SideStore Errors - YouTube](https://www.youtube.com/watch?v=O7qnffhT1VQ)
- [AFC unable to manage files · Issue #156 · SideStore/SideStore](https://github.com/SideStore/SideStore/issues/156)

[^1]: [[BUG] IOS development cert or pending cert request bug (7460) · Issue #795 · SideStore/SideStore](https://github.com/SideStore/SideStore/issues/795#issuecomment-2543400362)
[^2]: [Custom Anisette Server | SideStore Docs](https://docs.sidestore.io/docs/advanced/anisette)
[^3]: [Dadoum/anisette-v3-server: sidestore's anisette-v3 compatible server](https://github.com/Dadoum/anisette-v3-server)
