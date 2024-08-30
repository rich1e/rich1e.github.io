# Git Workflow

> 本文旨在介绍 Gitflow 工作流。

---

<!-- MarkdownTOC -->

- [分支策略](#分支策略)
	- [常用分支](#常用分支)
	- [临时分支](#临时分支)
- [Pull / Merge Request](#pull--merge-request)
- [Code Review](#code-review)
- [Git Command](#git-command)
- [参考](#参考)

<!-- /MarkdownTOC -->


### 分支策略

---

- **代码库的常设分支始终只有 master 和 develop，临时分支最后都删除。**
- **临时分支合并到常用分支时，必须发起 Pull / Merge Requset ，并指定一个人 code review。**
- **远程临时分支由发起者追踪和维护， reviewer 负责删除。**
- 所有的开发和迭代尽量都在临时分支上。
- 开发记录、功能集成、测试历史由 develop 分支管理，正式发布记录由 master 分支管理。
- 发布和部署时，必须新建发布分支。`（发布分支基于 develop 分支）`
- 发布和部署完成后，必须将发布分支合并回 develop / master 分支，然后删除发布分支。
- 合并到 master 分支的代码必须打上 Tag。`（Tag：版本号、描述、日期）`

#### 常用分支

- master
- develop

**master: 正式发布**

master 分支上存放的应该是随时可供在生产环境中部署的代码（Production Ready state）。当开发活动告一段落，产生了一份新的可供部署的代码时，master 分支上的代码会被更新。同时，每一次更新，需要添加对应的版本号标签（TAG）。

**develop: 日常开发**

develop 分支是保存当前最新开发成果的分支。通常这个分支上的代码也是可进行每日夜间发布的代码（Nightly build）。因此这个分支有时也可以被称作“integration branch”。


#### 临时分支

- 功能分支（feature）
- 发布分支（release）
- 修补分支（hotfix）

**功能分支**

功能分支，开发新功能都从 develop 分支出来，从 develop 分支上面分出来的。开发完成后，要再并入 develop。

	# 创建一个功能分支：
	git checkout -b feature-x develop

	# 开发完成后，将功能分支合并到develop分支：
	git checkout develop
	git merge --no-ff feature-x

	# 删除feature 分支：
	git branch -d feature-x


**发布分支**

发布分支，准备要 release 的版本，只修 bugs。从 develop 分支上面分出来，发布结束以后，必须合并进 develop 和 master 分支。

	# 创建一个发布分支：
	git checkout -b release-1.2 develop

	# 确认没有问题后，合并到master分支：
	git checkout master
	git merge --no-ff release-1.2

	# 对合并生成的新节点，做一个标签
	git tag -a 1.2

	# 再合并到develop分支：
	git checkout develop
	git merge --no-ff release-1.2

	# 最后，删除发布分支：
	git branch -d release-1.2

**修补分支**

修补分支，是指等不及 release 版本就必须马上修 master 赶上线的情况。它是从 master 分支上面分出来的。修补结束以后， 再合并进 master 和 develop 分支。

	# 创建一个修补bug分支：
	git checkout -b hotfix-0.1 master

	# 修补结束后，合并到master分支：
	git checkout master
	git merge --no-ff hotfix-0.1
	git tag -a 0.1.1

	# 再合并到develop分支：
	git checkout develop
	git merge --no-ff hotfix-0.1

	# 最后，删除"修补bug分支"：
	git branch -d hotfix-0.1

### Pull / Merge Request

---

代码合并到 master/develop 分支：

1. 将需要合并到 master / develop 的分支 push 到 gitlab。
2. 进入工程 -> merge request -> create new merge request
3. 选择源分支、目标分支，确定。
4. review 负责人进入 merge request，确认没有问题之后选择 Auto Merge（或者手动在本地合并之后再 push 到 gitlab），并关闭这个 merge request，完成。
5. 如果发现问题那么在有问题的行下注释，并提醒 request 的发起人及时修改。
6. 删除本地临时分支，本地 master / develop 更新到最新状态。

### Code Review

- 提交 Pull / Merge Request 时， Commit 和 Message 要足够清晰详细。
切记，如果一次提交的内容包含很多 Commit，请不要使用自动生成的描述。
请用简短且足够说明问题的语言（理想是控制在3句话之内）来描述：

> 你改动了什么，解决了什么问题，需要代码审查的人留意那些影响比较大的改动。特别需要留意，如果对基础、公共的组件进行了改动，一定要另起一行特别说明。

- 审核人员邀请原则：项目参与人员 & 团队同事 & 团队 Leader。**（对项目足够了解，对项目足够了解，对项目足够了解，重要的事情说三遍）**；
- 评论中至少出现一个 lgtm 且保证代码评审通过之后 Pull / Merge Request 才可以被合并；`（注：lgtm 即 looks good to me 的缩写）`

### Git Command

---

**git tag**

	# 创建一个带版本有描述的 tag
	git tag -a v0.1.0 -m 'commit'
	# 覆盖该版本已有 v0.1.0
	git tag -f v0.1.0
	# 推送服务器
	git push origin --tags
	# 服务器已有 v0.1.0，强制推到服务器
	git push origin -f v0.1.0
	# 服务器获取刚刚的 v0.1.0
	git fetch --tag
	# 删除本地版本
	git tag -d v0.1.0
	# 删除服务器上的tag
	git push origin :v0.1.0

**git merge**

	# 不使用 fast-forward 方式合并，保留分支的 commit 历史
	git merge --no-ff develop
	# 使用 squash 方式合并，把多次分支commit历史压缩为一次
	git merge --squash develop

**git checkout**

	# 放弃在 file.txt 的修改，恢复成未修改时的样子
	git checkout file.txt
	# 当前目录所有修改的文件，恢复成未修改时的样子
	git checkout .
	# 创建新的分支，并切换过去
	git checkout -b branchname

**git reset**

	# 回退指定的 commit
	git reset 0c5602affd27d2224d151284bd1c6e033fd9023f
	# 回退上次修改
	git reset --hard

**git flow**

	# git flow 初始化
	git flow init
	# 创建一个新的 feature 分支
	git flow feature start name
	# 将 feature 分支推送到远程仓库
	git flow feature publish name
	# 当特性开发完毕，需要将此分支合并到 develop 分支
	git flow feature finish name


### Commit 


### 参考

[Git分支管理策略](http://www.ruanyifeng.com/blog/2012/07/git.html)

[Git远程操作详解](http://www.ruanyifeng.com/blog/2014/06/git_remote.html)

[GitLab Flow的使用](http://www.15yan.com/topic/yi-dong-kai-fa-na-dian-shi/6yueHxcgD9Z/)

[Git查看、删除、重命名远程分支和tag](http://zengrong.net/post/1746.htm)

[Git工作流指南：Gitflow工作流](http://blog.jobbole.com/76867/)

[Git 在团队中的最佳实践--如何正确使用Git Flow](http://www.cnblogs.com/cnblogsfans/p/5075073.html)

[Git flow 開發流程](https://ihower.tw/blog/archives/5140)

[豆瓣 CODE 两年历程回顾：git 不是万能的，没有 review 是万万不能的](http://www.infoq.com/cn/articles/douban-code-2years/)

[GitHub Flow](http://scottchacon.com/2011/08/31/github-flow.html)

[A successful Git branching model](http://nvie.com/posts/a-successful-git-branching-model/)

[字节研发设施下的 Git 工作流](https://juejin.im/post/6875874533228838925)

