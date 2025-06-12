---
title: git am & git apply
date: 2025-6-12
permalinkPattern: :year/:month/:day/:slug.html
permalink: /git/git-am-and-git-apply
---

# git am & git apply: 如何在项目中 Patch 代码

[[toc]]

软件开发大多都是协作式的，因此，Patch（补丁）是一个相当重要的东西。

因为几乎所有的大型开源项目，有很多代码是通过 Patch 来提交。

特别是 UNIX 社区，在没有 GitHub 的年代，普通开发者从软件仓库 clone 代码，然后写入新代码，做一个 Patch，最后用 E-mail 发给软件仓库的维护者就好了。

我们先介绍一下 Patch 是什么？

如果一个软件有了新版本，我们可以完整地下载新版本的代码进行编译安装。但是每次全新下载是有相当大的代价的，然而，每次更新变动的代码可能都很小，因此，我们只要能够有两个版本代码的 diff 的数据，应该就可以以极低的代价更新程序。因此，Larry Wall 开发了一个工具：patch。它可以根据一个 diff 文件进行版本更新。

不过在 git 中，我们没有必要直接使用 diff 和 patch 来做补丁，这样做既危险又麻烦。git 提供了两种简单的 patch 方案。**一是用 git diff 生成的标准 patch，二是 git format-patch 生成的 Git 专用 Patch**。


| 方法                | 适用场景         | 优势              | 限制          |
| :---------------- | :----------- | :-------------- | :---------- |
| git diff + apply  | 临时改动、快速共享    | 轻量，无需提交历史       | 丢失元数据，需手动提交 |
| format-patch + am | 跨分支/仓库传递提交历史 | 保留完整提交信息，支持批量处理 | 依赖 Git 环境   |

## git diff

```sh
# 某两次 commit 之间的 patch 部分
git diff commit-id commit-id > patch.diff
```

## git format-patch

```sh
git format-patch HEAD^        #生成最近的1次commit的patch
git format-patch HEAD^^       #生成最近的2次commit的patch
git format-patch HEAD^^^      #生成最近的3次commit的patch
git format-patch HEAD^^^^     #生成最近的4次commit的patch
git format-patch <r1>..<r2>   #生成两个commit间的修改的patch（包含两个commit. <r1>和<r2>都是具体的commit号)
git format-patch -1 <r1>      #生成单个commit的patch
git format-patch <r1>         #生成某commit以来的修改patch（不包含该commit）
git format-patch --root <r1>  #生成从根到r1提交的所有patch
```

## git apply

> 将补丁应用于文件和/或索引

```sh
git apply --stat your_patch.patch   # 预检补丁差异状态
git apply --check your_patch.patch  # 预检补丁是否适用
git apply your_patch.patch          # 仅应用代码改动（不保留提交元数据）
git apply --reject your_patch.patch # 补丁存在冲突，生成 .rej 文件供手动修复
# patch的文件不在一个目录
git apply --check --directory=base/your_patch.patch
git apply --directory=base/your_patch.patch
```

操作步骤：

1. 先检查补丁差异状态和是否适用；
2. 应用补丁，如果成功，则直接 add 和 commit 文件；
3. 如果应用补丁失败，生成 .rej 文件供手动修复；
4. 修复完成后，删除 .rej 文件，并 `git add` 和 `git commit` 修改后的文件，就完成了。

![image-name](@images/git/git-am-and-git-apply/image-20250612164237.png)

## git am

> 从邮箱应用一系列修补程序

```sh
git am your_patch.patch               # 将名字为your_patch.patch的patch打上
git am --signoff your_patch.patch     # 添加-s或者--signoff，还可以把自己的名字添加为signed off by信息，作用是注明打patch的人是谁，因为有时打patch的人并不是patch的作者
git am ~/patch-set/*.patch            # 将路径~/patch-set/*.patch 按照先后顺序打上
git am --abort                        # 当git am失败时，用以将已经在am过程中打上的patch废弃掉
git am --resolved                     # 当git am失败，解决完冲突后，这条命令会接着打patch
git am --skip                         # 忽略
git am --continue                     # 继续合入
```

操作步骤：

1. 使用 git apply 命令检查补丁差异状态和是否适用；
2. 应用补丁，如果成功，会 patch 所有 git commit 信息；
3. 如果应用补丁失败，git 会进入 AM 状态，并生成 .rej 文件供手动修复；
4. 修复完成后，删除 .rej 文件，并 `git add` 所有改动的文件；
5. 接着 `git am --continue`，补丁就应用好了。

![image-name](@images/git/git-am-and-git-apply/image-20250612164825.png)

![image-name](@images/git/git-am-and-git-apply/image-20250612170620.png)

![image-name](@images/git/git-am-and-git-apply/image-20250612170713.png)

Ref:

- [Git 打补丁-- patch 和 diff 的使用（详细）Git 提供了两种补丁方案，一是用 git diff 生成的 U - 掘金](https://juejin.cn/post/6844903646384095245)
- [git am 冲突解决技巧 | Sherlock's blog](https://wangzhou.github.io/git-am-%E5%86%B2%E7%AA%81%E8%A7%A3%E5%86%B3%E6%8A%80%E5%B7%A7/)
- [Git - git-apply Documentation](https://git-scm.com/docs/git-apply/zh_HANS-CN)
- [Git - git-am Documentation](https://git-scm.com/docs/git-am/zh_HANS-CN)
- [定位和解决 git am 冲突的方法_git am 不能行数偏移-CSDN 博客](https://blog.csdn.net/Qidi_Huang/article/details/61920472)
- [【git】代码 patch 包生成和合入 - Emma1111 - 博客园](https://www.cnblogs.com/Wangzx000/p/17537058.html)
- [(48 封私信 / 81 条消息) 4.2.1 git am patch 手动解决冲突的办法 - 知乎](https://zhuanlan.zhihu.com/p/104055075)
- [使用 git-am 与 format-patch-CSDN 博客](https://blog.csdn.net/mliubing2532/article/details/7577905)
- [如何使用 git 生成 patch 和打入 patch_git create patch-CSDN 博客](https://blog.csdn.net/liuhaomatou/article/details/54410361)
- [Git 的 Patch 功能 - 老 z 的博客 - 博客园](https://www.cnblogs.com/y041039/articles/2411600.html)


