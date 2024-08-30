title: Git useing
date: 2015-01-23 15:10:19
categories: technology
tag: git
---

<!-- MarkdownTOC -->

- [Git 与 Github 的区别](#git-%E4%B8%8E-github-%E7%9A%84%E5%8C%BA%E5%88%AB)
- [Git 常用功能](#git-%E5%B8%B8%E7%94%A8%E5%8A%9F%E8%83%BD)
- [参考](#%E5%8F%82%E8%80%83)

<!-- /MarkdownTOC -->

> Git是一个开源的分布式版本控制系统，用以有效、高速的处理从很小到非常大的项目版本管理。
>
> Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。

## Git 与 Github 的区别 ##

Git，一个非常强大的版本管理工具。Github 则是一个基于 Git 的日益流行的开源项目托管库。Git 与 svn 的最大区别是，它的使用流程不需要联机，可以先将对代码的修改，评论，保存在本机。等上网之后，再实时推送过去。同时它创建分支与合并分支更容易，推送速度也更快，配合 Github 提交需求也更容易。

**总之，GitHub 是个网站，Git 是个软件。**

## Git 常用功能 ##

**初始化配置**

	#检查 SSH keys，防止生成已存在的 SSH keys
	ls -al ~/.ssh

	#如果不存在
	ssh-keygen -t rsa -b 4096 -C 'your_email@example.com'

	#如果存在SSH keys
	ssh-keygen -t rsa -b 4096 -C 'your_email@example.com' -f 'ssh_key_name'

	#将 SSH keys 添加到 ssh-agent
	#开启 ssh-agent
	#可能会报错： 'Could not open a connection to your authentication agent'
	ssh-agent -s // Git Bash
	eval $(ssh-agent -s) // using another terminal prompt,or eval `ssh-agent -s`

	#添加至 ssh-agent
	ssh-add ~/.ssh/your_id_rsa

	#拷贝到剪切板（windows）
	clip < ~/.ssh/id_rsa_yuqigong.pub

    #配置使用git仓库的人员姓名
    git config --global user.name "Your Name Comes Here"

    #配置使用git仓库的人员email
    git config --global user.email yourname@yourdomain.example.com

    #配置到缓存 默认15分钟
    git config --global credential.helper cache

    #配置缓存时间
    git config --global credential.helper 'cache --timeout=3600'

    #配置显示
    git config --global color.ui true

    #设置别名
    git config --global alias.co checkout
    git config --global alias.ci commit
    git config --global alias.st status
    git config --global alias.br branch

    #配置编辑器
    git config --global core.editor "subl"

	#全部推送
	git config --global push.default matching

	#部分推送
	git config --global push.default simple

**基本使用**

    git status                      # 看到当前分支状态
    git clone                       # 克隆代码
    git pull                        # 拉取代码
    git add                         # 添加代码
    git commit                      # 提交代码
    git push                        # 推送代码
    git push origin develop         # 在远端 origin 也创建该分支

**切换\分支\对比\合并**

    git checkout                    # 切换
    git checkout master             # 切换到 Master 分支
    git checkout -b develop         # 创建 develop 分支, 并切换到 develop 分支
    git branch                      # 分支
    git branch develop              # 创建 develop 分支
    git branch -d develop           # 删除 develop 分支
    git diff                        # 对比
    git merge                       # 合并
    git merge --no-ff develop       # 对 Develop 分支进行合并

*默认情况下，Git执行"快进式合并"（fast-farward merge），会直接将 Master 分支指向 Develop 分支。使用 `--no-ff` 参数后，会执行正常合并，在 Master 分支上生成一个新节点。* **为了保证版本演进的清晰，我们希望采用这种做法。**

**查看、添加、提交、删除、找回，重置修改文件**

    git help <command>              # 显示command的help
    git show                        # 显示某次提交的内容
    git show $id

    git checkout  -- <file>         # 抛弃工作区修改
    git checkout  .                 # 抛弃工作区修改

    git add <file>                  # 将工作文件修改提交到本地暂存区
    git add .                       # 将所有修改过的工作文件提交暂存区

    git rm <file>                   # 从版本库中删除文件
    git rm <file> --cached  # 从版本库中删除文件，但不删除文件

    git reset <file>                # 从暂存区恢复到工作文件
    git reset -- .                  # 从暂存区恢复到工作文件
    git reset --hard                # 恢复最近一次提交过的状态，即放弃上次提交后的所有本次修改

    git commit <file>
    git commit .
    git commit -a                   # 将git add, git rm和git ci等操作都合并在一起做
    git commit -am "some comments"
    git commit --amend              # 修改最后一次提交记录

    git revert <$id>                # 恢复某次提交的状态，恢复动作本身也创建了一次提交对象
    git revert HEAD                 # 恢复最后一次提交的状态

**查看文件diff**

    git diff <file>                 # 比较当前文件和暂存区文件差异
    git diff
    git diff <$id1> <$id2>          # 比较两次提交之间的差异
    git diff <branch1>..<branch2>   # 在两个分支之间比较
    git diff --staged               # 比较暂存区和版本库差异
    git diff --cached               # 比较暂存区和版本库差异
    git diff --stat                 # 仅仅比较统计信息

**查看提交记录**

    git log
    git log <file>                  # 查看该文件每次提交记录
    git log -p <file>               # 查看每次详细修改内容的diff
    git log -p -2                   # 查看最近两次详细修改内容的diff
    git log --stat                  # 查看提交统计信息
    git log --pretty=oneline --abbrev-commit # 查看要特定commit的hash值

**回溯到历史版本**

    --soft                          # 回溯到已提交到索引但未提交到版本库的状态
    --hard                          # 将文件内容也一同回溯
    --mixed                         # 默认选项
    git reset                       # 回溯到git add之前的状态
    git reset commit-id             # 回溯指定版本的修改
    git reset --soft                # 回溯到git add之后的状态

**还原已提交的修改**

    git revert HEAD         # 还原最近一次提交的修改
    git revert commit-id    # 还原指定版本的修改

**取得Git仓库**

    #Clone远程版本库
    git clone git@your.repo.git

    #初始化一个版本仓库
    git init

    #添加远程版本库origin，语法为 git remote add [shortname] [url]
    git remote add origin git@your.repo.git

    #查看远程仓库
    git remote -v

    #拉取远程仓库的代码，例： 远程仓库 origin 下 master 分支
    git pull origin master

**提交你的修改**

    #添加当前修改的文件到暂存区
    git add .

    #如果你自动追踪文件，包括你已经手动删除的，状态为Deleted的文件
    git add -u

    #提交你的修改
    git commit –m "你的注释"

    #推送你的更新到远程服务器,语法为 git push [远程名] [本地分支]:[远程分支]
    git push origin master

    #查看文件状态
    git status

    #跟踪新文件
    git add readme.txt

    #从当前跟踪列表移除文件，并完全删除
    git rm readme.txt

    #仅在暂存区删除，保留文件在当前目录，不再跟踪
    git rm –cached readme.txt

    #重命名文件
    git mv reademe.txt readme

    #查看提交的历史记录
    git log

    #修改最后一次提交注释的，利用–amend参数
    git commit --amend

    #忘记提交某些修改，下面的三条命令只会得到一个提交。
    git commit –m'add readme.txt'
    git add readme_forgotten
    git commit –amend

    #假设你已经使用git add .，将修改过的文件a、b加到暂存区

    #现在你只想提交a文件，不想提交b文件，应该这样
    git reset HEAD b

    #取消对文件的修改
    git checkout –- readme.txt

**查看、切换、创建和删除分支**

    git branch -r           # 查看远程分支
    git branch <new_branch> # 创建新的分支
    git branch -v           # 查看各个分支最后提交信息
    git branch --merged     # 查看已经被合并到当前分支的分支
    git branch --no-merged  # 查看尚未被合并到当前分支的分支
    git branch -d <branch>  # 删除某个分支
    git branch -D <branch>  # 强制删除某个分支 (未被合并的分支被删除的时候需要强制)
    git branch --set-upstream-to=origin/master  # 设置跟踪远程库
    git branch --unset-upstream                 # 取消跟踪的远程库
    git branch -m <old_branch> <new_branch>     # 修改分支的名称

    git checkout <branch>                       # 切换到某个分支
    git checkout -b <new_branch>                # 创建新的分支，并且切换过去
    git checkout -b <new_branch> <branch>       # 基于branch创建新的new_branch

    git checkout $id                    # 把某次历史提交记录checkout出来，但无分支信息，切换到其他分支会自动删除
    git checkout $id -b <new_branch>    # 把某次历史提交记录checkout出来，创建成一个分支

**分支合并和rebase**

    git merge <branch>               # 将branch分支合并到当前分支
    git merge origin/master --no-ff  # 不要Fast-Foward合并，这样可以生成merge提交

    git rebase master <branch>       # 将master rebase到branch，相当于：
    git checkout <branch> && git rebase master && git co master && git merge <branch>

**Git补丁管理(方便在多台机器上开发同步时用)**

    git diff > ../sync.patch         # 生成补丁
    git apply ../sync.patch          # 打补丁
    git apply --check ../sync.patch  #测试补丁能否成功

**Git暂存管理**

    git stash                           # 暂存
    git stash list                      # 列所有stash
    git stash pop
    # 从Git栈中读取最近一次保存的内容，恢复工作区的相关内容。pop会从最近的一个stash中读取内容并恢复。
    git stash apply stash@{1}           # 恢复暂存的内容,stash@{1}为指定的版本号
    git stash drop                      # 删除暂存区
    git stash branch <new_branch>       # 从暂存中创建分支
    git stash save -u                   # 暂存 untrack 的文件

**Git远程分支管理**

    git pull                         # 抓取远程仓库所有分支更新并合并到本地
    git pull --no-ff                 # 抓取远程仓库所有分支更新并合并到本地，不要快进合并
    git fetch origin                 # 抓取远程仓库更新
    git merge origin/master          # 将远程主分支合并到本地当前分支
    git checkout --track origin/branch     # 跟踪某个远程分支创建相应的本地分支
    git checkout -b <local_branch> origin/<remote_branch>  # 基于远程分支创建本地分支，功能同上

    git push                         # push所有分支
    git push origin master           # 将本地主分支推到远程主分支
    git push -u origin master        # 将本地主分支推到远程(如无远程主分支则创建，用于初始化远程仓库)
    git push origin <local_branch>   # 创建远程分支， origin是远程仓库名
    git push origin <local_branch>:<remote_branch>  # 创建远程分支
    git push origin :<remote_branch>  #先删除本地分支(git br -d <branch>)，然后再push删除远程分支

**基本的分支管理**

    #创建一个分支
    git branch iss53

    #切换工作目录到iss53
    git chekcout iss53

    #将上面的命令合在一起，创建iss53分支并切换到iss53
    git chekcout –b iss53

    #合并iss53分支，当前工作目录为master
    git merge iss53

    #合并完成后，没有出现冲突，删除iss53分支
    git branch –d iss53

    #拉去远程仓库的数据，语法为 git fetch [remote-name]
    git fetch

    #fetch 会拉去最新的远程仓库数据，但不会自动到当前目录下，要自动合并
    git pull

    #查看远程仓库的信息
    git remote show origin

    #建立本地的dev分支追踪远程仓库的develop分支
    git checkout –b dev origin/develop

**Git远程仓库管理**

    git remote -v                    # 查看远程服务器地址和仓库名称
    git remote show origin           # 查看远程服务器仓库状态
    git remote add origin git@ github:robbin/robbin_site.git         # 添加远程仓库地址
    git remote set-url origin git@ github.com:robbin/robbin_site.git # 设置远程仓库地址(用于修改远程仓库地址)
    git remote rm <repository>       # 删除远程仓库

**创建远程仓库**

    git clone --bare robbin_site robbin_site.git  # 用带版本的项目创建纯版本仓库
    scp -r my_project.git git@git.csdn.net:~      # 将纯仓库上传到服务器上

    mkdir robbin_site.git && cd robbin_site.git && git --bare init # 在服务器创建纯仓库
    git remote add origin git@github.com:robbin/robbin_site.git    # 设置远程仓库地址
    git push -u origin master                                      # 客户端首次提交
    git push -u origin develop  # 首次将本地develop分支提交到远程develop分支，并且track

    git remote set-head origin master   # 设置远程仓库的HEAD指向master分支

** 远程仓库相关命令 **

    git remote -v                           # 查看远程仓库
    git remote add [name] [url]             # 添加远程仓库
    git remote rm [name] # 删除远程仓库
    git remote set-url --push[name][newUrl] # 修改远程仓库
	git remote set-url origin git@github.com:someaccount/someproject.git # 修改https
    git pull [remoteName] [localBranchName] # 拉取远程仓库
    git push [remoteName] [localBranchName] # 推送远程仓库

**创建一个镜像版本库**

    git clone 原始版本库路径 镜像版本库路径(local)
    git fetch origin 更新 origin 分支。
    (如果 origin 分支不是最新的原始版本库，会产生错误的补丁文件,不会自动merge,仅下载 & 更新索引)
    git rebase origin 将工作迁移到最新原始版本库基础上

** 版本(tag)操作相关命令 **

    git tag                              #查看版本
    git tag [name]                       #创建版本
    git tag -a [version] -m [describe]   #含有tag信息说明的方式
    git tag -d [name]                    #删除版本
    git tag -r                           #查看远程版本
    git push origin [name]               #创建远程版本(本地版本push到远程)
    git push origin :refs/tags/[name]    #删除远程版本

** 子模块(submodule)相关操作命令 **

    添加子模块：$ git submodule add [url] [path]
    如：$ git submodule add git://github.com/soberh/ui-libs.git src/main/webapp/ui-libs
    初始化子模块：$ git submodule init ----只在首次检出仓库时运行一次就行
    更新子模块：$ git submodule update ----每次更新或切换分支后都需要运行一下
    删除子模块：（分4步走哦）
    1)$ git rm --cached [path]
    2) 编辑“.gitmodules”文件，将子模块的相关配置节点删除掉
    3) 编辑“.git/config”文件，将子模块的相关配置节点删除掉
    4) 手动删除子模块残留的目录



打包

```
git archive --format=tar master | gzip > v1.tar.gz
git archive --format=zip master > v1.zip

# 当前打包文件如果解压是和 git 项目文件夹中结构一样的，
# 也可以将所有的文 件打包到一个子文件夹中，使用 --prefix=<dirname> 参数：
git archive master --format=tar --prefix=v1 | gzip > v1.tar.gz
```

**其他技巧**

```shell
echo "test">.gitignore      #增加到忽略列表
echo "test" >> README.md    #创建 README.md并写入test
touch test                  #创建 test 文件

注意：如果要对某些代码的commit重新整理
1. 可以记住某个commit号
2. git rebase -i commit号
3. 会显示一个整理提交的界面，有很多参数，e。p。等等
4.将前面的参数改为e。则wq保存后，系统会自动让你重新修改commit内容
5.修改完成后，再git push for-*

#git rebase 用法
出现情况的背景：
   当你提交的代码后，管理员发现，您的代码不能提交到服务器上，主要原因在于，你的 commit 中和服务器中的有些 commit 不再同一时间轴上，即：你的有些 commit 要插入到服务器中的某些 commit 之间，这样就会造成代码的冲突。所以这个时候就要使用 git rebase。
 假如，你平时使用的分支叫 new ，然后在这个分支上你刚提交过几个commit。
 做法：
1.新建一个分支，并且代码和服务器中代码同步
  git checkout origin/v2.0 -b temp
2.为了保证新建的temp分支代码是最新的，可以多执行下面一步
  git pull
3.当你新建分支后，系统会自动checkout到temp分支上，此时
  git checkout  new
4.合并代码，并整理
  git rebase  temp  //会将temp分支的代码合并过来，并按照提交的顺序排序
5.  因为顺序是重新整理的，所以肯定会出现冲突
6.解决冲突，最后 git add * ，但不许要git commit
7.解决后，执行 git rebase --continue
8.重新提交代码： git push for-*

# 建立一个没有 Parent 的干净分支
git checkout --orphan newbranch     # Git 版本要大于 1.7.2
git rm -rf .                        # 删除所有记录
git add .
git commit -m 'create new branch'

# 检查log记录
git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr)%Creset' --abbrev-commit --date=relative

```

## 参考

[GitHub使用入门](http://callmepeanut.blog.51cto.com/7756998/1304912)

[git config命令使用第一篇——介绍，基本操作，增删改查](http://blog.csdn.net/hutaoer06051/article/details/8275069)

[Generating SSH Keys](https://help.github.com/articles/generating-ssh-keys#platform-windows)

[ssh-keygen参数说明](http://killer-jok.iteye.com/blog/1853451)

[SSH Keys (简体中文)](https://wiki.archlinux.org/index.php/SSH_Keys_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87))

[通用线程: OpenSSH 密钥管理，第 2 部分](http://www.ibm.com/developerworks/cn/linux/security/openssh/part2/)

Git Stash

[Git rebase + stash 小技巧](http://blog.wu-boy.com/2013/08/git-rebase-stash-tip/)

[Git Stash 历险记](http://blog.hanfeisun.info/2012/12/git-stash-adventure/)

[Git Community Book 中文版](http://gitbook.liuhui998.com/)

[Pro Git](http://git-scm.com/book)

[如何建立一個沒有 Parent 的獨立 Git branch](https://ihower.tw/blog/archives/5691)

[Git archive 可以用来打包文件](https://wolfsonliu.github.io/archive/2018/git-archive-ke-yi-yong-lai-da-bao-wen-jian.html)