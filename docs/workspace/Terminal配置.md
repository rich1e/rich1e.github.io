---
title: Terminal 配置
date: 2022-11-13
permalinkPattern: :year/:month/:day/:slug.html
---

<!--
 * @Author: rich1e
 * @Date: 2022-11-13 16:01:04
 * @LastEditors: rich1e
 * @LastEditTime: 2022-11-14 09:52:46
-->

# Terminal 配置

[[toc]]

俗话说，“工欲善其事，必先利其器”。

今天无意间看到了 `Starship`[^1] 工具，瞬间感觉这就是自己想要的东西。

原因有二：

- 主题色搭配合适，颜值当担
- 输入项标志简洁，标题状态功能实用

挺符合其官方 Slogan ：

> _The minimal, blazing-fast, and infinitely customizable prompt for any shell!_

闲话少叙，聊一下安装配置，按照官方提供的步骤操作。

## 安装字体

1. 首先安装 `Powerline Font` 和 `Nerd Font` 两种字体，

**Powerline**[^2]

```sh
# clone
git clone https://github.com/powerline/fonts.git --depth=1
# install
cd fonts
./install.sh
# clean-up a bit
cd ..
rm -rf fonts
```

**Nerd Font**[^3]

```sh
brew tap homebrew/cask-fonts &&
brew install --cask font-<FONT NAME>-nerd-font
```

然后在终端启用。例如，`iTerm2` 中配置如下：

选择 `Use a different font for non-ASCII text`， 开启 **Non-ASCII** 选项。

![image-20221114091501](@images\workspace\terminal-config\image-20221114091501.png)

> note: **Font** 一定要选择带 `Powerline` 的字体。
> 这里的配置非常重要，如果没有设置正确，会导致提示符中看不到某个字符的显示。[^4]

在终端内运行以下命令，来测试字体安装配置是否正确：

```sh
echo -e "\xf0\x9f\x90\x8d"
echo -e "\xee\x82\xa0"
```

第一行应该显示蛇 🐍 的 `emoji` 图标，第二行应该显示出 `powerline` 的分支符号  （e0a0）。

## 安装 Starship

2. 安装 `Starship`，并配置终端 `Shell` 使用。

```sh
brew install starship
```

在 `~/.zshrc` 的最后，添加以下内容：

```sh
eval "$(starship init zsh)"
```

安装完成后，是这个样子。

![image-20221114091500](@images\workspace\terminal-config\image-20221114091500.png)

## 配置 VS Code 终端 [^5] [^6]

打开 `Settings`，添加下面的配置。

```json
{
  "terminal.external.osxExec": "iTerm.app",
  "terminal.integrated.defaultProfile.osx": "zsh",
  "terminal.integrated.profiles.osx": {
    "zsh": {
      "path": "/usr/local/bin/zsh",
      "icon": "symbol-event"
    }
  },
  "terminal.integrated.fontFamily": "firacode nerd font mono"
}
```

> note: `icon` 可以换自己喜欢的图标。

VS Code 中的样子，

![image-20221114091501](@images\workspace\terminal-config\image-20221114091502.png)

最后说一句，如果你不清楚字体的名称，可以使用 mac 自带的 `字体册` 查看[^7]。

![image-20221114091501](@images\workspace\terminal-config\image-20221114091503.png)

## Update 2024-08-28

Windows for VSCode 配置，[^8] [^9] [^10] [^11] [^12]

```json
{
  "terminal.integrated.profiles.windows": {
    "my-pwsh": {
      "source": "PowerShell",
      "icon": "symbol-event",
      "args": [
        "-noexit",
        "-file",
        "${env:USERPROFILE}\\Documents\\WindowsPowerShell\\Microsoft.PowerShell_profile.ps1"
      ]
    }
  },
  "terminal.integrated.defaultProfile.windows": "my-pwsh",
}
```

[^1]: [Getting Started - Spaceship](https://spaceship-prompt.sh/getting-started/)
[^2]: [powerline/fonts: Patched fonts for Powerline users.](https://github.com/powerline/fonts)
[^3]: [Nerd Fonts - Iconic font aggregator, glyphs/icons collection, & fonts patcher](https://www.nerdfonts.com/font-downloads)
[^4]: [Why don't I see a glyph symbol in my prompt?](https://starship.rs/faq/#why-don-t-i-see-a-glyph-symbol-in-my-prompt)
[^5]: [VSCode terminal.integrated.shell.osx 屬性失效 | 是 Ray 不是 Array](https://israynotarray.com/vscode/20210927/2674618084/)
[^6]: [VSCode 设置终端字体 nerd font_Chris-2021 的博客-CSDN 博客](https://blog.csdn.net/m0_37169880/article/details/114262312)
[^7]: [如何在 Mac 上安装和移除字体 - 官方 Apple 支持 (中国)](https://support.apple.com/zh-cn/HT201749)
[^8]: [Terminal Profiles in Visual Studio Code](https://code.visualstudio.com/docs/terminal/profiles)
[^9]: [Visual Studio Code Variables Reference](https://code.visualstudio.com/docs/editor/variables-reference#_predefined-variables)
[^10]: [VSCode terminal.integrated.shell.osx 屬性失效 | 是 Ray 不是 Array](https://israynotarray.com/vscode/20210927/2674618084/)
[^11]: [about Environment Variables - PowerShell | Microsoft Learn](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_environment_variables?view=powershell-7.4)
[^12]: [windows - Is There A System Defined Environment Variable For Documents Directory? - Stack Overflow](https://stackoverflow.com/questions/3492920/is-there-a-system-defined-environment-variable-for-documents-directory)

