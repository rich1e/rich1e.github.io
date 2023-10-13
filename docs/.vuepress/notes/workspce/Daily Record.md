---
banner: "https://images.unsplash.com/photo-1462642109801-4ac2971a3a51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
banner_y: 0.504
---

> Just keep doing.

## Routine

```sh
brew update && brew upgrade && brew cleanup
```

```sh
omz update
```

Apps
- iTerm2
- Clash
- Zotero
- Obsidian (update before opening)
- WeChat for Enterprise
- Oulu Dictionary (Eudic)
- Amphetamine

## Script

```sh
code --goto /Users/gongyuqi/Desktop/Workspace/code/web-gui/apps/passive/src/store/resultChart.ts:557
```

```powershell
cd C:\ProgramData\MaxOptics\MOPassive\2022\MOService\bin\Release
.\mol-mid-pas-console.exe
```

以树形结构列举目录

```sh
tree -L 2 -I 'node_modules|dist|example|patches' --dirsfirst
```

```sh
exa -T --level=6 --ignore-glob="node_modules|mock|views|example|helper|public" --git-ignore --sort=ext
```

[tree 命令，Linux tree 命令详解：树状图列出目录的内容](https://wangchujiang.com/linux-command/c/tree.html)

查询目录下所有的`node_modules`目录和所占空间

```sh
find . -name "node_modules" -type d -prune | xargs du -chs
```

```powershell
FOR /d /r . %d in (node_modules) DO @IF EXIST "%d" echo %d"
```

删除目录下所有的`node_modules`目录

```sh
find . -name 'node_modules' -type d -exec rm -rf '{}' +
```

```sh
# 命令拆解注释
# . 当前目录
# -name 名字匹配，指定字符串作为寻找文件或目录的范本样式；
# -type 查询文件类型。 -d 就是目录
# -exec 就是匹配后执行一些命令
# rm -rf '{}' 删除匹配到到('{}')
# + 是个骚操作
# 一个-exec只能执行一个命令，而且必须在命令后面加上终结符，终结符有两个：“；”和“+”。
# 其中";" 会对每一个find到的文件去执行一次cmd命令。而”+“让find到的文件一次性执行完cmd命令。
```

```sh
find . -name 'node_modules' | xargs rm -rf
```

```powershell
FOR /d /r . %d in (node_modules) DO @IF EXIST "%d" rm -rf "%d"
```

[删除所有本地下载的 node_modules 依赖目录以节省磁盘空间](https://gist.github.com/mehunk/4caa299beaf05905cfe541ea8fd44b22)

[一条命令删除目录下的所有node\_modules | Mulianju](https://www.mulianju.com/delete-all-node_modules/)

[前端不会Shell？Shell 命令只会 cd 的小伙伴，这篇文章你真的得看了 - 掘金](https://juejin.cn/post/7274346507037081640)
## Git Flow

获取 log 中最近10小时的 commit

```git
git log --author=gongyuqi --oneline --since='10 hours ago' --grep="into 'testDev'" --invert-grep
```

删除冗余的本地分支

```git
git branch --merged | grep -v 'master\|dev\|testDev' | xargs git branch -D
```

空提交

```git
git commit --allow-empty -m 'Release Orca by 202303311015'
```

没有消息

```git
git commit --allow-empty-message -m ''
```

显示文件的每一行最后修改的版本和作者

```git
git blame -L start,end <filename>
```

导出文件

```git
git archive --format=zip main > file.zip
```

清理

```git
# 删除 untracked 的文件和目录
git clean -df 
# 删除被忽略的文件(.gitignore中指定的) 
git clean -Xf 
# 删除未被版本控制的，包括忽略的和未忽略的 
git clean -xf 
# 显示哪些文件会被删除
git clean -n 
```

文件比较

```git
# 显示所有修改的文件的文件名列表
git diff --name-only
# 查看不包含".txt"扩展名的文件
git diff --name-only | grep -v "\.txt$"
# 查看每个修改的类型（例如添加、修改或删除）
git diff --name-status
```

文件暂存

```git
# 暂存所有的文件，包括 untracked 的文件，并命名为 msg
git stash save -u 'msg'
# 拿出某个文件的修改
git checkout <stash@{n}> -- <file-path>
```

文件恢复

```git
# 默认就是 --mixed
git reset <commit-id>
git reset --mixed
# 撤销上次commit，保留文件
git reset --soft head^
# 撤销上次commit，删除提交的文件
git reset --hard head^
```

恢复特定 commit 中的某个文件

```git
git checkout <目标 commit> -- <文件>
```

文件回滚

```git
# 仅在工作区修改，还没有提交暂存区和本地仓库
git checkout -- 文件名
# 添加到暂存区，但还未提交 commit
git reset HEAD 文件名
# 已提交commit，但还没有 push 时
git reset <要回滚到的 commit>
# 已 push 到远端时
git revert
```

显示最近一次提交的 commit ID 的缩写形式，并复制到剪切板

```git
git log -1 --pretty=format:%h | pbcopy
```

复制提交中的代码而不想创建新的提交

```git
git cherry-pick --no-commit <commit-id>
```

tag 操作

```git
# 获取远程tag
git fetch origin tag v1.0.1
# 强制刷新tag命令
git fetch --tags -f
# 基于tag签出分支
git switch --detach <tag>
```

> [github - Switch to another Git tag - Stack Overflow](https://stackoverflow.com/questions/4330610/switch-to-another-git-tag)

Ref

[[buckets/daily/2023-04-18_Tuesday]]
[[buckets/daily/2023-03-31_Friday]]

[Git使用的奇技淫巧 | Escape](https://www.escapelife.site/posts/7a4a6df7.html#toc-heading-3)
[Git 常用指令 - 潘忠显](https://panzhongxian.cn/cn/2021/01/git-common-commands/)

## Node Command-line

npm

```node
npm install (with no args in a package dir)

npm install <tarball file>

npm install <tarball url>

npm install <folder>

npm install [@<scope>/]<name> [--save|--save-dev|--save-optional] [--save-exact]

npm install [@<scope>/]<name>@<tag>

npm install [@<scope>/]<name>@<version>

npm install [@<scope>/]<name>@<version range>

npm i (with any of the previous argument usage)
```

Node

> [Command-line API | Node.js v20.2.0 Documentation](https://nodejs.org/api/cli.html)

nvm

```sh
# 查询最新稳定版
nvm ls-remote | grep 'Latest LTS'
# 查看可用的（可下载的）全部node版本
nvm ls available 
# 列出所有安装的版本
nvm ls 
# 安装最新版本的 node
nvm install latest 
# 安装当前稳定的 Node.js LTS 版本
nvm install --lts
```

> nvm 软件包 windows 平台的命令和其它平台的有区别

lerna

```sh
# 清空 node_modules
lerna clean 
```

yarn workspace

```node
yarn workspace [package-name] [action] [...pkg]
```

Ref

[yarn workspace](https://yarnpkg.com/cli/workspace)
[Monorepo最佳实践之Yarn Workspaces - 掘金](https://juejin.cn/post/7011024137707585544)

查看镜像源

```node
npm config get registry 
```

```node
yarn config get registry
```

设置镜像源

```node
npm config set registry <registry-url> 
```

```node
yarn config set registry <registry-url>
```

```sh
npm --- https://registry.npmjs.org/
cnpm --- https://r.cnpmjs.org/
taobao --- https://registry.npm.taobao.org/
nj --- https://registry.nodejitsu.com/
rednpm --- https://registry.mirror.cqupt.edu.cn/
npmMirror --- https://skimdb.npmjs.com/registry/
deunpm --- http://registry.enpmjs.org/

# 淘宝镜像设置
npm config set registry https://registry.npmmirror.com/

# node-sass 淘宝镜像设置
npm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
yarn config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/
pnpm config set sass_binary_site https://npm.taobao.org/mirrors/node-sass/

# Chrome Driver 淘宝镜像设置
npm config set CHROMEDRIVER_CDNURL https://npm.taobao.org/mirrors/chromedriver

# Electron 淘宝镜像设置
npm config set ELECTRON_MIRROR http://npm.taobao.org/mirrors/electron/
npm config set ELECTRON_BUILDER_BINARIES_MIRROR https://npm.taobao.org/mirrors/electron-builder-binaries/
```



pnpm

```sh
pnpm init

# 安装公共依赖
pnpm install typescript -w -D

# 为某个项目安装依赖
pnpm --filter <workspace> <command>
# 缩写
pnpm -F <workspace> <command> 

# Example
pnpm --filter math-lib add lodash
pnpm --filter math-lib add -D typescript @types/lodash
pnpm --filter calculator run test

# Support glob pattern
pnpm --filter pkg* run test

# 安装本地依赖
pnpm --filter calculator add math-lib --workspace

# List all workspaces in JSON format
pnpm m ls --depth -1 --json

# 列出这个包的源码位置，被monorepo内部哪些项目引用
pnpm why vue

# 查看镜像源
pnpm config get registry
# 设置镜像源
pnpm config set registry https://registry.npmmirror.com/
```
## Mac

`Cmd + Shift + .` 查看隐藏文件

### 添加证书

1. 解压 `mkcert.zip` 到任何地方

2. 获取 `mkcert` 的目录, 例如在 `/your-path//mkcert`

3. 执行 `export CAROOT="/your-path/mkcert"`

4. 安装 `mkcert`

```shell
# build from source code
git clone https://github.com/FiloSottile/mkcert && cd mkcert
go build -ldflags "-X main.Version=$(git describe --tags)"
```

5. 安装 `CA Certs`, 执行 `mkcert -install` 

## Windows Settings

1. 申请机器；
2. 连接 `\\192.168.91.253`，获取安装文件；
    - `MOPassiveSetup` 安装程序
    - `MaxOpticsStudio__SetLocalServer` 设置 `License` 服务 `bitanswer.max.com`
3. 关闭防火墙；
    - 命令行执行 
    Win + R，打开CMD，运行 `netsh advfirewall set allprofiles state off`;
    - Windows Defender 防火墙
    Win + R，运行 `Firewall.cpl`。

```powershell
# 查看当前防火墙状态
netsh advfirewall show allprofiles  
# 关闭防火墙
netsh advfirewall set allprofiles state off  
# 开启防火墙
netsh advfirewall set allprofiles state on  
# 恢复初始防火墙设置
netsh advfirewall reset
# 显示操作系统信息，例如：系统版本、内存等
systeminfo
```

![[workspce/meta/企业微信截图_55837940-dc9e-4475-bddf-8e3639e4eec2.png]]

Ref

[cmd命令行配置windows防火墙 - 熊未泯 - 博客园](https://www.cnblogs.com/xiongweimin/articles/14192710.html)
[cmd怎么打开i防火墙-百度经验](https://jingyan.baidu.com/article/36d6ed1f22d3c25ace48835a.html)

## Proxy

run the container detached, forward internal port 25500 to host port 25500

```sh
docker run -d --restart=always -p 25500:25500 tindy2013/subconverter:latest
```

then check its status

```sh
curl http://localhost:25500/version
```


## Docs

[Release 1.1.0-beta.24 · element-plus/element-plus](https://github.com/element-plus/element-plus/releases/tag/1.1.0-beta.24)
[element-plus/docs at 1.1.0-beta.24 · element-plus/element-plus · GitHub](https://github.com/element-plus/element-plus/tree/1.1.0-beta.24/docs)



```dataview 
table date AS 创建时间, file.mtime AS 修改时间
from ""
where contains(file.path, "daily")
sort date desc
```










