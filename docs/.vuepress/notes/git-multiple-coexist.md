---
title: Git multiple coexist
date: 2014/12/14 22:46:25
updated: 2015/1/23 14:50:30
categories: technology
tag: git
---

Git是一个开源的分布式版本控制系统，用以有效、高速的处理从很小到非常大的项目版本管理。

Git 是 Linus Torvalds 为了帮助管理 Linux 内核开发而开发的一个开放源码的版本控制软件。

## Git 与 Github 的区别 ##

Git，一个非常强大的版本管理工具。Github 则是一个基于 Git 的日益流行的开源项目托管库。Git 与 svn 的最大区别是，它的使用流程不需要联机，可以先将对代码的修改，评论，保存在本机。等上网之后，再实时推送过去。同时它创建分支与合并分支更容易，推送速度也更快，配合 Github 提交需求也更容易。

总之，GitHub 是个网站，Git 是个软件。

## Git 常用功能 ##

**初始化配置**

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

**基本使用**

	#看到当前分支状态
	git status

	#克隆代码
	git clone

	#拉取代码
	git pull

	#添加代码
	git add

	#提交代码
	git commit

	#推送代码
	git push

	#在远端 origin 也创建该分支
	git push origin develop

**切换\分支\对比\合并**

	#切换
	git checkout

	#切换到 Master 分支
	git checkout master

	#创建 develop 分支, 并切换到 develop 分支
	git checkout -b develop

	#分支
	git branch

	#创建 develop 分支
	git branch develop

	#删除 develop 分支
	git branch -d develop

	#对比
	git diff

	#合并
	git merge

	#对 Develop 分支进行合并
	git merge --no-ff develop

*默认情况下，Git执行"快进式合并"（fast-farward merge），会直接将 Master 分支指向 Develop 分支。使用 `--no-ff` 参数后，会执行正常合并，在 Master 分支上生成一个新节点。* **为了保证版本演进的清晰，我们希望采用这种做法。**

**查看、添加、提交、删除、找回，重置修改文件**

	git help <command>  # 显示command的help
	git show            # 显示某次提交的内容
	git show $id

	git co  -- <file>   # 抛弃工作区修改
	git co  .           # 抛弃工作区修改

	git add <file>      # 将工作文件修改提交到本地暂存区
	git add .           # 将所有修改过的工作文件提交暂存区

	git rm <file>       # 从版本库中删除文件
	git rm <file> --cached  # 从版本库中删除文件，但不删除文件

	git reset <file>    # 从暂存区恢复到工作文件
	git reset -- .      # 从暂存区恢复到工作文件
	git reset --hard    # 恢复最近一次提交过的状态，即放弃上次提交后的所有本次修改

	git ci <file>
	git ci .
	git ci -a           # 将git add, git rm和git ci等操作都合并在一起做
	git ci -am "some comments"
	git ci --amend      # 修改最后一次提交记录

	git revert <$id>    # 恢复某次提交的状态，恢复动作本身也创建了一次提交对象
	git revert HEAD     # 恢复最后一次提交的状态

**查看文件diff**

	git diff <file>     # 比较当前文件和暂存区文件差异
	git diff
	git diff <$id1> <$id2>   # 比较两次提交之间的差异
	git diff <branch1>..<branch2> # 在两个分支之间比较
	git diff --staged   # 比较暂存区和版本库差异
	git diff --cached   # 比较暂存区和版本库差异
	git diff --stat     # 仅仅比较统计信息

**查看提交记录**

	git log
	git log <file>      # 查看该文件每次提交记录
	git log -p <file>   # 查看每次详细修改内容的diff
	git log -p -2       # 查看最近两次详细修改内容的diff
	git log --stat      #查看提交统计信息

**取得Git仓库**

	#初始化一个版本仓库
	git init

	#Clone远程版本库
	git clone git@xbc.me:wordpress.git

	#添加远程版本库origin，语法为 git remote add [shortname] [url]
	git remote add origin git@xbc.me:wordpress.git

	#查看远程仓库
	git remote -v

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
	git commit –m &quot;add readme.txt&quot;
	git add readme_forgotten
	git commit –amend

	#假设你已经使用git add .，将修改过的文件a、b加到暂存区

	#现在你只想提交a文件，不想提交b文件，应该这样
	git reset HEAD b

	#取消对文件的修改
	git checkout –- readme.txt

**查看、切换、创建和删除分支**

	git br -r           # 查看远程分支
	git br <new_branch> # 创建新的分支
	git br -v           # 查看各个分支最后提交信息
	git br --merged     # 查看已经被合并到当前分支的分支
	git br --no-merged  # 查看尚未被合并到当前分支的分支

	git co <branch>     # 切换到某个分支
	git co -b <new_branch> # 创建新的分支，并且切换过去
	git co -b <new_branch> <branch>  # 基于branch创建新的new_branch

	git co $id          # 把某次历史提交记录checkout出来，但无分支信息，切换到其他分支会自动删除
	git co $id -b <new_branch>  # 把某次历史提交记录checkout出来，创建成一个分支

	git br -d <branch>  # 删除某个分支
	git br -D <branch>  # 强制删除某个分支 (未被合并的分支被删除的时候需要强制)

**分支合并和rebase**

	git merge <branch>               # 将branch分支合并到当前分支
	git merge origin/master --no-ff  # 不要Fast-Foward合并，这样可以生成merge提交

	git rebase master <branch>       # 将master rebase到branch，相当于：
	git co <branch> && git rebase master && git co master && git merge <branch>

**Git补丁管理(方便在多台机器上开发同步时用)**

	git diff > ../sync.patch         # 生成补丁
	git apply ../sync.patch          # 打补丁
	git apply --check ../sync.patch  #测试补丁能否成功

**Git暂存管理**

	git stash                        # 暂存
	git stash list                   # 列所有stash
	git stash apply                  # 恢复暂存的内容
	git stash drop                   # 删除暂存区

**Git远程分支管理**

	git pull                         # 抓取远程仓库所有分支更新并合并到本地
	git pull --no-ff                 # 抓取远程仓库所有分支更新并合并到本地，不要快进合并
	git fetch origin                 # 抓取远程仓库更新
	git merge origin/master          # 将远程主分支合并到本地当前分支
	git co --track origin/branch     # 跟踪某个远程分支创建相应的本地分支
	git co -b <local_branch> origin/<remote_branch>  # 基于远程分支创建本地分支，功能同上

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


**也可以命令设置跟踪远程库和本地库**

	git branch --set-upstream master origin/master
	git branch --set-upstream develop origin/develop

## 解决多个 Git 账户共存问题 ##

Git 的管理工具要求每个 Git User 需要生成一对密钥，公钥和私钥。然后把公/私钥放置于：

    //私钥
	用户/.ssh/id_rsa
	//公钥
    用户/.ssh/id_rsa.pub

并且将公钥注册于基于 Git 的代码托管库，类似Github。
当用户用 Git 来管理项目的时候，就是**通过生成的公钥和私钥来认证用户的合法性**。

默认情况下，多个 Git 账户无法在一台机器上协调工作。但通过配置也是可以解决共存问题。有以下两种方式：

- 在 ssh config 文件中定义 Host
- 使用 ssh-add

### 在 ssh config 文件中定义 Host ###

在 `用户/.ssh` 创建 config 文件。（如果有就修改，没有则创建）

写入对每个 Git 账户使用独自的 ssh 密钥的配置：

**.ssh/config 注释说明**

	Host 别名
	HostName  域名或 ip
	User 登陆服务器用的账号
	Port 端口号(默认22，可以不填，如果服务器修改了 ssh 登录端口号，此处需要修改)
	IdentityFile 密钥文件的位置

**配置.ssh/config**

    # account for the home repo
    Host home.github.com
	    HostName github.com
	    User inadarei
	    IdentitiesOnly yes
	    IdentityFile ~/.ssh/id_rsa_home

    # account for the work repo
    Host work.github.com
	    HostName github.com
	    User inadarei
	    IdentitiesOnly yes
	    IdentityFile ~/.ssh/id_rsa_work

这样不同的 Git 账户会使用不同的密钥，但前提是这些密钥都已经按照 config 文件中的配置要求正确放置和命名。

**配置git仓库**

    git remote add origin git@work.github.com

需要把 Git 的配置更改过来，其中 github.com 更换为 work.github.com，这样它会找到对应的 key 来登录。

### 使用 ssh-add ###

    # start the ssh-agent in the background // 在后台启动 ssh-agent
    ssh-agent -s // 这个命令好像有问题，启动不了
    # Agent pid 59566
    ssh-add ~/.ssh/id_rsa // 添加私钥

可能会遇到的问题

	以下是使用 Git Bash 执行

	$ ssh-keygen -t rsa -b 4096 -C 'yourname@mail.com' -f id_rsa_yourname
	// 生成新的 SSH key：id_rsa_yourname

	$ ssh -T git@github.com
	Warning: Permanently added 'github.com,192.30.252.131' (RSA) to the list of known hosts.
	Permission denied (publickey).
	// 连接出错，提示没有权限
	// 其实是因为 ssh-add 没有添加成功，或者是 config 没有正确配置

	$ ssh-agent
	SSH_AUTH_SOCK=/tmp/ssh-7DLTiXwwx9cI/agent.13188; export SSH_AUTH_SOCK;
	SSH_AGENT_PID=12892; export SSH_AGENT_PID;
	echo Agent pid 12892;
	// 这里是输出 ssh-agent 的配置环境

	$ eval $(ssh-agent)
	Agent pid 13284
	// windows 下用这个命令去启动 ssh-agent

	$ ssh-add -K ~/.ssh/id_rsa_example_2
	Identity added: /d/Users/test/.ssh/id_rsa_example_2 (/d/Users/test/.ssh/id_rsa_example_2)
	// 将密钥添加到 ssh-agent

	$ ssh-add -K ~/.ssh/id_rsa_example_2
	Could not open a connection to your authentication agent
	// 在shell下执行 $ ssh-agent bash --login -i
	// 然后执行 $ ssh-add 就好了。

    $ ssh-add -l
    4096 SHA256:AbUhya0ypeudTgl0tx615h19ByninL+Hz8o /yourpath/.ssh/id_rsa_example_2 (RSA)
    // 列举所有添加的密钥

参考

[Using Multiple SSH Keys with Github](http://www.freshblurbs.com/blog/2013/06/22/github-multiple-ssh-keys.html)

[Generating SSH Keys](https://help.github.com/articles/generating-ssh-keys#platform-windows)

[SSH Keys (简体中文)](https://wiki.archlinux.org/index.php/SSH_Keys_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87))

[通用线程: OpenSSH 密钥管理，第 2 部分](http://www.ibm.com/developerworks/cn/linux/security/openssh/part2/)

[多用户下GIT使用SSH管理配置](http://elkpi.com/topics/multi-user-git-ssh-config.html)

[配置多个git远程仓库的ssh-Key切换](http://chiyx.iteye.com/blog/1872447)

[多个平台git共存](https://github.com/yuqigong/helloWorld/blob/master/git.md)

[搭建通过 ssh 访问的 Git 服务器](http://wlog.cn/soft/git-ssh-server-for-debian.html)

[由于SSH配置文件的不匹配，导致的Permission denied (publickey)及其解决方法。](http://www.cnblogs.com/zjrodger/p/3952692.html)

[git生成ssh key及本地解决多个ssh key的问题](http://riny.net/2014/git-ssh-key/)
[GitHub使用入门](http://callmepeanut.blog.51cto.com/7756998/1304912)

[git config命令使用第一篇——介绍，基本操作，增删改查](http://blog.csdn.net/hutaoer06051/article/details/8275069)

Git

[Git Community Book 中文版](http://gitbook.liuhui998.com/)

[Pro Git](http://git-scm.com/book)