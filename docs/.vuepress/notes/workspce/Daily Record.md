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
- WeChat for enterprise
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
git log --author=gongyuqi --oneline --since="10 hours ago" --grep="into 'testDev'" --invert-grep
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
git commit --allow-empty-message -m ""
```

Ref

[[buckets/daily/2023-04-18_Tuesday]]
[[buckets/daily/2023-03-31_Friday]]


```dataview 
table date AS 创建时间, file.mtime AS 修改时间
from ""
where contains(file.path, "daily")
sort date desc
```










