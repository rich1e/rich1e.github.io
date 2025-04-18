#git #zsh

## 常用命令

```sh
# 打开当前项目页面
git open 
# 打开remote的branch分支页面
git open remote branch
# 打开当前commit页面
git open --commit
# 打开当前issue页面
git open --issue
# 打开当前项目的dir目录
git open --suffix dir
# 打印当前跳转的URL
git open --print
```

## 配置

```sh
git config [--global] open.[gitdomain].domain [value]
git config [--global] open.[gitdomain].protocol [value]
```

### GitLab支持

`git remote`: ssh://git@git.internal.biz:7000/XXX/YYY.git
`Gitlab WebSite`: http://repo.intranet/subpath/XXX/YYY

```sh
git config [--global] "open.https://git.internal.biz.domain" "repo.intranet/subpath"
git config [--global] "open.https://git.internal.biz.protocol" "http"
```

### fork 远程

默认情况下，`git open` 打开了名为 `origin` 的远程地址。但是，如果您的当前分支正在跟踪另一个远程，则将使用跟踪的远程地址。

  在某些情况下，您可能需要覆盖这种行为。当您分叉一个项目并添加一个名为上游的遥控器时，您通常希望上游打开而不是叉子。为此，您可以在项目中设置 `open.default.remote`：

```sh
git config open.default.remote upstream
```
这相当于输入 `git open upstream` 。

## 参考

[zsh oh-my-zsh 插件推荐 - 掘金](https://juejin.cn/post/6844903598300610568#heading-7)
[git-open/git-open.1.md at master · paulirish/git-open](https://github.com/paulirish/git-open/blob/master/git-open.1.md)
[ZSH 框架、插件、教程和主题](https://github.com/icopy-site/awesome-cn/blob/master/docs/awesome/awesome-zsh-plugins.md)