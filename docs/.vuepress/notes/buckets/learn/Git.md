---
tags: ["git"]
---

## Git 修改已提交的邮箱和用户信息

> https://segmentfault.com/q/1010000006999861

```shell
git rebase -i commit-Id

git commit --amend --author="your-name <your-email>" --no-edit

git rebase --continue

git rebase -i --root
```

Ref

[如何修改第一次commit的信息？](https://segmentfault.com/q/1010000017932368)

## Git 添加 SSH 方式

> https://docs.github.com/cn/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent

```shell
# 生成一个新的 SSH key
ssh-keygen -t ed25519 -C 'gongyuqi-jk@360shuke.com' -f 'rsa_360'

# 检查 ssh-agent 是否开启
eval "$(ssh-agent -s)"

# 如果使用已有的SSH key，可以用如下命令添加到ssh-agent
ssh-add ~/.ssh/rsa_360

# 复制key到粘贴板，然后将 SSH key 添加到账户里
clip < ./rsa_yuqi.pub

# 测试
ssh -T git@github.com

ssh-agent bash
```

## Git 比较分支和文件

> https://blog.csdn.net/toopoo/article/details/104260595

```shell
# 比较分支文件
git diff master func --stat # 显示出所有有差异的文件列表
git diff master func -- 文件名(含路径) # 显示指定文件的详细差异，注意路径前需要前后带空格的双分隔号--间隔
git diff master func # 显示出所有有差异的文件的详细差异

# 比较分支提交
# 下面三个等效，显示func中有，master没有的提交
git log ^master func
git log master..func
git log func --not master

git log func...master # 单纯想知道两个分支提交有什么不一样
git log --left-right func...master # 左右模式详细显示两个分支提交有什么不一样
```

## SUPPRESS_HANDLE_INHERITANCE_WARNING

> https://github.com/desktop/desktop/issues/9719
>
> https://tieba.baidu.com/p/5598810599
>
> https://stackoverflow.com/questions/50093771/git-clone-warning-failed-to-restrict-file-handles
>
> https://stackoom.com/question/3dttO

```
warning: failed to restrict file handles (5)

handle #0: 000000000000016c (type 3, handle info (1) 0
handle #1: 0000000000000124 (type 2, handle info (1) 1
handle #2: 0000000000000128 (type 2, handle info (1) 1

This is a bug; please report it at
https://github.com/git-for-windows/git/issues/new

To suppress this warning, please set the environment variable

        SUPPRESS_HANDLE_INHERITANCE_WARNING=1

```

## 右键菜单

```shell
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\*\shell\Open Git Bash]
@="Open Git Bash"
"Icon"="E:\\Scoop\\apps\\git\\current\\git-bash.exe"

[HKEY_CLASSES_ROOT\*\shell\Open Git Bash\command]
@="\"E:\\Scoop\\apps\\git\\current\\git-bash.exe\" \"--cd=%1\""

; This will make it appear when you right click ON a folder
; The "Icon" line can be removed if you don't want the icon to appear

[HKEY_CLASSES_ROOT\Directory\shell\bash]
@="Open Git Bash"
"Icon"="E:\\Scoop\\apps\\git\\current\\git-bash.exe"


[HKEY_CLASSES_ROOT\Directory\shell\bash\command]
@="\"E:\\Scoop\\apps\\git\\current\\git-bash.exe\" \"--cd=%1\""

; This will make it appear when you right click INSIDE a folder
; The "Icon" line can be removed if you don't want the icon to appear

[HKEY_CLASSES_ROOT\Directory\Background\shell\bash]
@="Open Git Bash"
"Icon"="E:\\Scoop\\apps\\git\\current\\git-bash.exe"

[HKEY_CLASSES_ROOT\Directory\Background\shell\bash\command]
@="\"E:\\Scoop\\apps\\git\\current\\git-bash.exe\" \"--cd=%v.\""
```

> https://gist.github.com/fritzmg/7b4b200e753d58173dfa308b7431fa03

## .gitconfig

```shell
[core]
	autocrlf = false
	safecrlf = true
	sshCommand = C:/WINDOWS/System32/OpenSSH/ssh.exe
[init]
	defaultBranch = master
[user]
	name = gongyuqi
	email = gongyuqi-jk@360shuke.com
[http]
	sslVerify = false
```

## Git Rebase

> https://juejin.cn/post/6993233111127425038
>
> https://www.zhihu.com/question/61283395/answer/186725319

## Git Pull --unshallow

> https://cloud.tencent.com/developer/article/1841319?from=15425

[[Git] 使用 unshallow 來解除 grafted 狀態，來解決使用 depth 的問題](https://noiseyou99.medium.com/git-%E4%BD%BF%E7%94%A8unshallow%E4%BE%86%E8%A7%A3%E9%99%A4grafted%E7%8B%80%E6%85%8B-%E4%BE%86%E8%A7%A3%E6%B1%BA%E4%BD%BF%E7%94%A8depth%E7%9A%84%E5%95%8F%E9%A1%8C-6bb9dfbb554c)

## Configure Git to use a proxy

> https://gist.github.com/evantoli/f8c23a37eb3558ab8765
>
> https://segmentfault.com/a/1190000023674497

## Git 中文乱码

```shell
git config --global core.quotepath false
```

> https://blog.csdn.net/u012145252/article/details/81775362

## The file will have its original line endings in your working directory

```
git config --global core.autocrlf false
```

## git 对比两个分支差异

> https://www.jianshu.com/p/bb97fabb475e

1. 显示出 branch1 和 branch2 中差异的部分
   git diff branch1 branch2 --stat

1. 显示指定文件的详细差异
   git diff branch1 branch2 具体文件路径

1. 显示出所有有差异的文件的详细差异
   git diff branch1 branch2

1. 查看 branch1 分支有，而 branch2 中没有的 log
   git log branch1 ^branch2

1. 查看 branch2 中比 branch1 中多提交了哪些内容
   git log branch1..branch2
   注意，列出来的是两个点后边（此处即 dev）多提交的内容。

1. 不知道谁提交的多谁提交的少，单纯想知道有什么不一样
   git log branch1...branch2

1. 在上述情况下，在显示出每个提交是在哪个分支上
   git log -lefg-right branch1...branch2
   注意 commit 后面的箭头，根据我们在 –left-right branch1…branch2 的顺序，左箭头 < 表示是 branch1 的，右箭头 > 表示是 branch2 的。

## Multiple SSH Keys settings for different github account

```shell
# gitee

Host gitee.com

HostName gitee.com

AddKeysToAgent yes

UseKeychain yes

PreferredAuthentications publickey

IdentityFile ~/.ssh/id_max_optics_gongyuqi

# github

Host github.com

HostName github.com

AddKeysToAgent yes

UseKeychain yes

PreferredAuthentications publickey

IdentityFile ~/.ssh/id_max_optics_yuqigong
```

https://gist.github.com/jexchan/2351996

https://blog.gitguardian.com/8-easy-steps-to-set-up-multiple-git-accounts/

##  Pulling without specifying how to reconcile divergent branches

[Git问题解决方案:不建议在没有为偏离分支指定合并策略时执行pull操作(Pulling without specifying how to reconcile divergent branches)_快乐李同学(李俊德-大连理工大学)的博客-CSDN博客](https://blog.csdn.net/wq6ylg08/article/details/114106272)

## Git 修改已提交的 commit 信息，包括作者、邮箱

> https://www.silinchen.com/post/git-amend-commit-info-author-email

[如何在github上进行Pull Request（PR）操作，参与到开源项目中_tinygodd的博客-CSDN博客_pr request](https://blog.csdn.net/u011923621/article/details/106671789)
[jaywcjlove/git-tips: 这里是我的笔记，记录一些git常用和一些记不住的命令。](https://github.com/jaywcjlove/git-tips)
[优雅地修改他人贡献的 Pull Request | Liuyib's Blog](https://liuyib.github.io/2020/09/19/add-commits-to-others-pr/)
[[已解决]如何修改人家贡献的PR，不想先合并再修改 - COS论坛 | 统计之都 | 统计与数据科学论坛](https://d.cosx.org/d/420363-pr)
[github提交PR（pull request）过程和问题_51CTO博客_github pull request](https://blog.51cto.com/u_3664660/3215035)
[github----向开源框架提交pr的过程_vim_wj的博客-CSDN博客](https://blog.csdn.net/vim_wj/article/details/78300239)
[github提交pr的流程 - 简书](https://www.jianshu.com/p/21ce90f2a5b7)
[配置git-credentials完成git身份认证 - sbw Blog](https://blog.sbw.so/u/use-git-credentials-auth-system.html)
[Windows で git の認証情報を保存させない](http://var.blog.jp/archives/81784650.html)
[git push失败：Out of memory, malloc failed (tried to allocate 947912704 bytes)_wqdsb的博客-CSDN博客](https://blog.csdn.net/qq_28929579/article/details/105516511)
[git push的时候报错： Out of memory, malloc failed (tried to allocate 82037333 bytes) - maycpou - 博客园](https://www.cnblogs.com/maycpou/p/11430666.html)
