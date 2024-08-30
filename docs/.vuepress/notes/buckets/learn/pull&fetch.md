# Pull & Fetch & Rebase

[toc]

## git pull

```shell
git pull <远程主机名> <远程分支名>:<本地分支名>
```

```shell
# 举例：将远程主机 origin 的 master 分支拉取过来，与本地的 branchtest 分支合并。
git pull origin master:branchtest

# 以上的 git pull 操作如果用 git fetch 来表示：
git fetch origin master:brantest
git merge brantest
```

相比起来，`git fetch` 更安全也更符合实际要求，因为可以在 `merge` 前，我们可以查看更新情况，根据实际情况再决定是否合并。

```shell
git status
git pull --rebase

# 以上的 git pull 操作如果用 git fetch 来表示：
git fetch --all && git rebase branch
```

`git pull --rebase` 使用这个命令，不会产生合并，生成多余的 `commit` 记录。

## git fetch

理解 fetch 的关键, 是理解 FETCH_HEAD，FETCH_HEAD指的是: 某个branch在服务器上的最新状态’。这个列表保存在 .Git/FETCH_HEAD 文件中, 其中每一行对应于远程服务器的一个分支。
当前分支指向的FETCH_HEAD, 就是这个文件第一行对应的那个分支。一般来说, 存在两种情况:

- 如果没有显式的指定远程分支, 则远程分支的 `master` 将作为默认的 `FETCH_HEAD`
- 如果指定了远程分支, 就将这个远程分支作为 `FETCH_HEAD`

```shell
# 方法一
$ git fetch origin master                #从远程的origin仓库的master分支下载代码到本地的origin maste
$ git log -p master.. origin/master      #比较本地的仓库和远程参考的区别
$ git merge origin/master                #把远程下载下来的代码合并到本地仓库，远程的和本地的合并

# 方法二
$ git fetch origin master:temp           #从远程的origin仓库的master分支下载到本地并新建一个分支temp
$ git diff temp                          #比较master分支和temp分支的不同
$ git merge temp                         #合并temp分支到master分支
$ git branch -d temp                     #删除temp
```

## git rebase

```shell
git rebase [-i] [options] [--exec <命令>] [--onto <新基线> | --keep-base] [<上游> [<分支>]]
```



[^1]: [git pull --rebase的正确使用](https://juejin.cn/post/6844903895160881166)
[^2]: [git clone、git pull和git fetch的用法及区别](https://segmentfault.com/a/1190000017030384)
[^3]: [使用 git rebase 编写清晰的提交记录](https://juejin.cn/post/6993233111127425038)
[^4]: [Git commits历史是如何做到如此清爽的？](https://www.zhihu.com/question/61283395/answer/186122300)

