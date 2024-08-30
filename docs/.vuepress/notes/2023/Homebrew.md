## 查看本地安装包

```sh
brew leaves -r | xargs -n1 brew desc --formula --eval-all
```

```sh
aria2: Download with resuming and segmented downloading
asciinema: Record and share terminal sessions
autojump: Shell extension to jump to frequently used directories
bat: Clone of cat(1) with syntax highlighting and Git integration
cloc: Statistics utility to count lines of code
curl: Get a file from an HTTP, HTTPS or FTP server
im-select: Switch your input method through terminal
exa: Modern replacement for 'ls'
fcrackzip: Zip password cracker
fd: Simple, fast and user-friendly alternative to find
git: Distributed revision control system
git-delta: Syntax-highlighting pager for git and diff output
gnuplot: Command-driven, interactive function plotting
htop: Improved top (interactive process viewer)
imagemagick: Tools and libraries to manipulate images in many formats
jq: Lightweight and flexible command-line JSON processor
lazygit: Simple terminal UI for git commands
mkcert: Simple tool to make locally trusted development certificates
nap: Code snippets in your terminal
navi: Interactive cheatsheet tool for the command-line
nginx: HTTP(S) server and reverse proxy, and IMAP/POP3 proxy server
nmap: Port scanning utility for large networks
nnn: Tiny, lightning fast, feature-packed file manager
nvm: Manage multiple Node.js versions
deeplx: DeepLX is a permanently free DeepL API client written in Golang.
pandoc: Swiss-army knife of markup format conversion
pnpm: Fast, disk space efficient package manager
poppler: PDF rendering library (based on the xpdf-3.0 code base)
procs: Modern replacement for ps written by Rust
pyenv: Python version management
qemu: Generic machine emulator and virtualizer
rbenv: Ruby version manager
ripgrep: Search tool like grep and The Silver Searcher
smartmontools: SMART hard drive monitoring
starship: Cross-shell prompt for astronauts
telnet: User interface to the TELNET protocol
the_silver_searcher: Code-search similar to ack
thefuck: Programmatically correct mistyped console commands
tldr: Simplified and community-driven man pages
trash: CLI tool that moves files or folder to the trash
tree: Display directories as trees (with optional color/HTML output)
ugrep: Ultra fast grep with query UI, fuzzy search, archive search, and more
winetricks: Automatic workarounds for problems in Wine
wtfis: Passive hostname, domain, and IP lookup tool
yarn: JavaScript package manager
```

## 本地安装软件

```sh
brew list --cask | xargs -n1 brew desc --cask --eval-all
```


```sh
alt-tab: (AltTab) Enable Windows-like alt-tab
apparency: (Apparency) Inspect application bundles
appcleaner: (FreeMacSoft AppCleaner) Application uninstaller
cakebrew: (Cakebrew) GUI app for Homebrew
calibre: (calibre) E-books management software
cheatsheet: (CheatSheet) Tool to list all active shortcuts of the current application
clashx: (ClashX) Rule-based custom proxy with GUI based on clash
controlplane: (ControlPlane) Context-sensitive application launcher
docker: (Docker Desktop, Docker Community Edition, Docker CE) App to build and share containerized applications and microservices
dotnet: (.Net Runtime) Developer platform
drawio: (draw.io Desktop) Online diagram software
eul: (eul) Status monitoring
firefox: (Mozilla Firefox) Web browser
flux: (f.lux) Screen color temperature controller
font-fira-code-nerd-font: (FiraCode Nerd Font (Fira Code)) Developer targeted fonts with a high number of glyphs
freecol: (FreeCol) Turn-based strategy game
gimp: (GIMP, GNU Image Manipulation Program) Free and open-source image editor
glance-chamburr: (Glance) Utility to provide quick look previews for files that aren't natively supported
google-chrome: (Google Chrome) Web browser
hiddenbar: (Hidden Bar) Utility to hide menu bar items
input-source-pro: (Input Source Pro) Tool for multi-language users
iterm2: (iTerm2) Terminal emulator as alternative to Apple's Terminal app
key-codes: (Key Codes) Display key code, unicode value and modifier keys state for any key combination
keycastr: (KeyCastr) Open-source keystroke visualizer
licecap: (LICEcap) Animated screen capture application
maccy: (Maccy) Clipboard manager
meld: (Meld for OSX) Visual diff and merge tool
microsoft-remote-desktop: (Microsoft Remote Desktop) Remote desktop client
motrix: (Motrix) Open-source download manager
obsidian: (Obsidian) Knowledge base that works on top of a local folder of plain text Markdown files
piphero: (PiPHero) Menu bar app to picture-in-picture any window
postman: (Postman) Collaboration platform for API development
qlcolorcode: (QLColorCode) QuickLook plug-in that renders source code with syntax highlighting
qlimagesize: (qlImageSize) Display image info and preview unsupported formats in QuickLook
qlmarkdown: (sbarex-qlmarkdown) QuickLook generator for Markdown files
qlstephen: (QLStephen) QuickLook plugin for plaintext files without an extension
qlvideo: (QuickLook Video) Thumbnails, static previews, cover art and metadata for video files
quicklook-json: (quick look JSON) QuickLook plugin for JSON files
quicklookase: (QuickLookASE) QuickLook generator for Adobe Swatch Exchange files
raycast: (Raycast) Control your tools with a few keystrokes
rectangle: (Rectangle) Move and resize windows using keyboard shortcuts or snap areas
skim: (Skim) PDF reader and note-taking application
suspicious-package: (Suspicious Package) Application for inspecting installer packages
switchhosts: (SwitchHosts) App to switch hosts
the-unarchiver: (The Unarchiver) Unpacks archive files
visual-studio-code: (Microsoft Visual Studio Code, VS Code) Open-source code editor
wine-crossover: (Wine Crossover) Compatibility layer to run Windows applications
zotero: (Zotero) Collect, organize, cite, and share research sources
```
## 清理文件

```sh
# 清理刚刚产生的下载缓存文件
brew cleanup
# 强制清理 n 天以前的缓存文件，包括下载文件以外的缓存
brew cleanup --prune 0
```

## 查看下载文件

```sh
brew --cache
```

Ref

[Homebrew — The Missing Package Manager for macOS (or Linux)](https://brew.sh/)
[Brew tutorial | difyel - Tuorials](https://difyel.com/tutorial/brew-tutorial/index.html)
[使用brew安装历史版本的几种方式 - 掘金](https://juejin.cn/post/7179202980191666233)
[Homebrew 下载过慢的外包方案马克 - 知乎](https://zhuanlan.zhihu.com/p/107469378)