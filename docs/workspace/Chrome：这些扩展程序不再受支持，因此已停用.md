---
title: Chrome：这些扩展程序不再受支持，因此已停用
date: yyyy-mm-dd
permalinkPattern: :year/:month/:day/:slug.html
permalink: /workspace/chrome-these-extensions-are-no-longer-supported-and-have-therefore-been-deactivated
---

# Chrome：这些扩展程序不再受支持，因此已停用

[[toc]]

上午打开 Chrome 浏览器，准备查找一些资料，网页一直打不开，然后发现 **SwitchyOmega** 插件[^4][^5]不见了。。。

打开“扩展程序”`（chrome://extensions/）`，发现 **SwitchyOmega** 变成不可用的状态，插件无法启用。

这难不倒广大的技术用户群体，很快就在网上查到相关资料。不过……

大部分资料都是 `Windows` 系统中“Chrome 扩展程序不再受支持”的解决办法[^1][^2][^3]，没有找到 `macOS` 系统的办法。

仔细看了资料，发现是通过配置`“ExtensionManifestV2Availability”`解决。然后就去查找 `macOS` 系统下是否也支持该值。

功夫不负有心人，终于在国外网站 **Reddit** 找到解决办法[^6][^7]，感觉比 `Windows` 要简单很多，在命令行中执行就可以生效。

## Windows

1. cmd 中输入`“regedit”`，打开注册表编辑器；
2. 找到路径：计算机`\HKEY_LOCAL_MACHINE\SOFTWARE\Policies\`
3. 新建 `\Google\Chrome`，
4. 新建一个 `DWORD(32 位)` 值，命名为`“ExtensionManifestV2Availability”`，并将数值改为 `2`

![image-name](@images/workspace/chrome-these-extensions-are-no-longer-supported-and-have-therefore-been-deactivated/Snipaste_2025-07-17_12-34-15.png)


或者，另一种更简单的启用方法，无需在 `regedit` 中费力操作，就是创建一个包含这段代码的 `.reg` 文件。只需打开记事本，粘贴这段代码，将其保存为 `.reg` 文件，然后双击即可。

```sh
Windows Registry Editor Version 5.00

[HKEY_LOCAL_MACHINE\SOFTWARE\Policies\Google\Chrome]
"ExtensionManifestV2Availability"=dword:00000002
```

## macOS

```sh
defaults write com.google.Chrome ExtensionManifestV2Availability -integer 2
```

然后，重启 Chrome 浏览器，输入 `chrome://policy/`，就可以检查`“ExtensionManifestV2Availability”`值是否生效。

![image-name](@images/workspace/chrome-these-extensions-are-no-longer-supported-and-have-therefore-been-deactivated/Snipaste_2025-07-17_12-38-22.png)

![image-name](@images/workspace/chrome-these-extensions-are-no-longer-supported-and-have-therefore-been-deactivated/Snipaste_2025-07-17_12-39-43.png)

## 补充说明

macOS 下如果配置了`“ExtensionManifestV2Availability”`没有生效，可以将插件下载下来，然后修改为 **zip** 文件解压，通过开发者方式本地加载。

![image-name](@images/workspace/chrome-these-extensions-are-no-longer-supported-and-have-therefore-been-deactivated/Flameshot_2025-07-17_14-26.png)

[^1]: [(44 封私信 / 81 条消息) 解决办法：Chrome 插件不能用，这些扩展程序不再受支持，因此已停用，25 年 7 月 12 日更新！ - 知乎](https://zhuanlan.zhihu.com/p/1927399384947065539)
[^2]: [CHROME“这些扩展程序不再受支持，因此已停用”解决办法 谷歌浏览器 插件 最新教程 2025 年 7 月_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1z1uGzkEA4/?vd_source=3710ff3fa57db21b813ef420454b2e16)
[^3]: [谷歌浏览器“这些扩展程序不再受支持，因此已停用”或者出现红色感叹号，解决办法 谷歌浏览器 插件 最新教程_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1Juuqz5Eg8/?spm_id_from=333.1387.homepage.video_card.click&vd_source=3710ff3fa57db21b813ef420454b2e16)
[^4]: [entr0pia/SwitchyOmega-Whitelist: 中国大陆域名，SwitchyOmega 白名单规则，自动更新](https://github.com/entr0pia/SwitchyOmega-Whitelist)
[^5]: [zero-peak/ZeroOmega: Manage and switch between multiple proxies quickly & easily.](https://github.com/zero-peak/ZeroOmega)
[^6]: [教程 - 扩展 Manifest V2 - “ExtensionManifestV2Availability”Chrome 策略：r/chrome --- 教程 - 扩展 Manifest V2 - “ExtensionManifestV2Availability”Chrome 策略 : r/chrome](https://www.reddit.com/r/chrome/comments/1dln9ev/tutorial_extend_manifest_v2/?tl=zh-hans)
[^7]: [有关如何使用注册表编辑器 (regedit) 在 Windows 上启用 Manifest V2 扩展（例如 Ublock Origin）一年（直到 2025 年 6 月）的教程：r/chrome --- Tutorial on how to Enable Manifest V2 extensions for another year (until June 2025) such as Ublock Origin on Windows using the registry editor (regedit) : r/chrome](https://www.reddit.com/r/chrome/comments/1d799pa/comment/l76sjta/)
