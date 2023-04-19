---
author: rich1e
tags: ["daily"]
date: 2023-03-22 10:50:54
---

#brew 

open `FDE Analysis`

![[workspce/meta/Pasted image 20230322144627.png]]

click `Mesh Structure`

![[workspce/meta/Pasted image 20230322144920.png]]

click `Calculate Modes`

![[workspce/meta/Pasted image 20230322145120.png]]


```ad-note
title: obsidian & image

[Obsidian的最强搭档](https://mp.weixin.qq.com/s?__biz=MzU4MzgxNjczMA==&mid=2247484436&idx=1&sn=11384d2a4ecb2dcd44ec57bf9b3addf6&chksm=fda20761cad58e773b93786ff632621d0b23b08c4aad6e43b9cb8b9b2a74a7a6e867fbdf9597&scene=21#wechat_redirect)
[0027 笔记中的图片管理](https://obsius.site/2y0q1y26102x2r5g090g)
[PicGo is Here | PicGo](https://picgo.github.io/PicGo-Doc/zh/guide/#%E7%89%B9%E8%89%B2%E5%8A%9F%E8%83%BD)
[Obsidian的最强附件管家 - 知乎](https://zhuanlan.zhihu.com/p/455738436)
[Github+Picgo+Obsidian图床搭建](https://mp.weixin.qq.com/s?__biz=MzU4MzgxNjczMA==&mid=2247484554&idx=1&sn=bd6d9f62368fcb5a0cadab710c667ef9&chksm=fda207ffcad58ee90ad5e010ba233613425e0cb0ec36ca6d9e93b48e3ca72dbca4f2c68aa076&cur_album_id=2089513436232679424&scene=189#wechat_redirect)
[管理附件 - Obsidian 中文帮助 - Obsidian Publish](https://publish.obsidian.md/help-zh/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/%E7%AE%A1%E7%90%86%E9%99%84%E4%BB%B6)
[图床 的相关文章 - 少数派](https://sspai.com/search/post/%E5%9B%BE%E5%BA%8A)
[使用 uPic 搭配「腾讯云」搭建你自己的图床 - 少数派](https://sspai.com/post/64169)

```

```ad-note
title:  每日一跃

[时隔 4 年，再看 Vue...3 - 掘金](https://juejin.cn/post/7208072274368217148?)
[vue阻止重复请求 - 掘金](https://juejin.cn/post/7189231050806001719?)
[不吹牛，完爆ant design的定位组件！floating-ui来也 - 掘金](https://juejin.cn/post/7171054283591254029?#heading-11)
[【大前端 nodejs】linux面试真题 - 掘金](https://juejin.cn/post/7211467514413203511)
[前端开发人员使用的顶级 Node.js 框架介绍 - 掘金](https://juejin.cn/post/7202495679398330427?#heading-17)
[Nginx 常用的基础配置（web前端相关方面） - 掘金](https://juejin.cn/post/7196859948554715195?)
[使用 @ngify/http 响应式 HTTP 客户端处理常见的请求场景 - 掘金](https://juejin.cn/post/7121049508485529614)
[Vue3: 巧用自定义全局属性，封装只为高效率 - 掘金](https://juejin.cn/post/7212491760734715964?)
[这一次，放下 axios，使用基于 rxjs 的响应式 HTTP 客户端 - 掘金](https://juejin.cn/post/7079724273929027597)

#ComponentCustomProperties #rxjs #axios #nginx #Node #linux #floating-ui #Vue3
```

> 本地安装包

```sh
❯ brew leaves -r | xargs -n1 brew desc --formula --eval-all
aria2: Download with resuming and segmented downloading
asciinema: Record and share terminal sessions
autojump: Shell extension to jump to frequently used directories
bat: Clone of cat(1) with syntax highlighting and Git integration
curl: Get a file from an HTTP, HTTPS or FTP server
im-select: Switch your input method through terminal
exa: Modern replacement for 'ls'
fcrackzip: Zip password cracker
fd: Simple, fast and user-friendly alternative to find
git: Distributed revision control system
git-delta: Syntax-highlighting pager for git and diff output
htop: Improved top (interactive process viewer)
lazygit: Simple terminal UI for git commands
navi: Interactive cheatsheet tool for the command-line
nginx: HTTP(S) server and reverse proxy, and IMAP/POP3 proxy server
nnn: Tiny, lightning fast, feature-packed file manager
node: Platform built on V8 to build network applications
nvm: Manage multiple Node.js versions
pandoc: Swiss-army knife of markup format conversion
pnpm: 📦🚀 Fast, disk space efficient package manager
procs: Modern replacement for ps written by Rust
qemu: Emulator for x86 and PowerPC
rbenv: Ruby version manager
ripgrep: Search tool like grep and The Silver Searcher
starship: Cross-shell prompt for astronauts
the_silver_searcher: Code-search similar to ack
thefuck: Programmatically correct mistyped console commands
tldr: Simplified and community-driven man pages
trash: CLI tool that moves files or folder to the trash
tree: Display directories as trees (with optional color/HTML output)
winetricks: Automatic workarounds for problems in Wine
yarn: JavaScript package manager
```

> 本地安装软件

```sh
❯ brew list --cask | xargs -n1 brew desc --cask --eval-all
appcleaner: (FreeMacSoft AppCleaner) Application uninstaller
cakebrew: (Cakebrew) GUI app for Homebrew
calibre: (calibre) E-books management software
cheatsheet: (CheatSheet) Tool to list all active shortcuts of the current application
clashx: (ClashX) Rule-based custom proxy with GUI based on clash
docker: (Docker Desktop, Docker Community Edition, Docker CE) App to build and share containerized applications and microservices
dotnet: (.Net Runtime) Developer platform
drawio: (draw.io Desktop) Draw.io is free online diagram software
eul: (eul) Status monitoring
flux: (f.lux) Screen color temperature controller
font-fira-code-nerd-font: (FiraCode Nerd Font (Fira Code)) Developer targeted fonts with a high number of glyphs
google-chrome: (Google Chrome) Web browser
hiddenbar: (Hidden Bar) Utility to hide menu bar items
iterm2: (iTerm2) Terminal emulator as alternative to Apple's Terminal app
key-codes: (Key Codes) Display key code, unicode value and modifier keys state for any key combination
keycastr: (KeyCastr) Open-source keystroke visualizer
licecap: (LICEcap) Animated screen capture application
maccy: (Maccy) Clipboard manager
meld: (Meld for OSX) Visual diff and merge tool
microsoft-remote-desktop: (Microsoft Remote Desktop) Remote desktop client
motrix: (Motrix) Open-source download manager
obsidian: (Obsidian) Knowledge base that works on top of a local folder of plain text Markdown files
raycast: (Raycast) Control your tools with a few keystrokes
rectangle: (Rectangle) Move and resize windows using keyboard shortcuts or snap areas
skim: (Skim) PDF reader and note-taking application
switchhosts: (SwitchHosts) App to switch hosts
the-unarchiver: (The Unarchiver) Unpacks archive files
visual-studio-code: (Microsoft Visual Studio Code, VS Code) Open-source code editor
wine-crossover: (Wine Crossover) Compatibility layer to run Windows applications
zotero: (Zotero) Collect, organize, cite, and share research sources
```

Ref

[Homebrew — The Missing Package Manager for macOS (or Linux)](https://brew.sh/)
[Brew tutorial | difyel - Tuorials](https://difyel.com/tutorial/brew-tutorial/index.html)
