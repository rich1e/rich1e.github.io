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

```powershell
cd C:\ProgramData\MaxOptics\MOPassive\2022\MOService\bin\Release
.\mol-mid-pas-console.exe
```

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

Ref

[[buckets/daily/2023-04-18_Tuesday]]
[[buckets/daily/2023-03-31_Friday]]

[Git使用的奇技淫巧 | Escape](https://www.escapelife.site/posts/7a4a6df7.html#toc-heading-3)
[Git 常用指令 - 潘忠显](https://panzhongxian.cn/cn/2021/01/git-common-commands/)


## Node Command

```sh
# 查询最新稳定版
nvm ls-remote | grep 'Latest LTS'
# 清空 node_modules
lerna clean
# https://yarnpkg.com/cli/workspace
yarn workspace [package-name] [action] [...pkg]
```


## Windows Settings

1. 申请机器；
2. 连接 `\\192.168.91.253`，获取安装文件；
    - `MOPassiveSetup` 安装程序
    - `MaxOpticsStudio__SetLocalServer` 设置 `License` 服务
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
```

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

```dataview 
table date AS 创建时间, file.mtime AS 修改时间
from ""
where contains(file.path, "daily")
sort date desc
```










