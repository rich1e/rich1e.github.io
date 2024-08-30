# Merge Request 操作手册

本文适应于 gitlab flow 工作流。

## 操作流程

```
创建本地分支 -> 更新本地分支 -> 推送远程仓库 -> 创建 Merge Request -> Code Review -> Merged done
                                                                   △       |
                                                                   | __ __ |
                                                                     未通过
```

## 操作细则

以下内容希望开发人员严格遵守和执行，否则自负不良影响

1. 本地分支在推送远程之前，必须同步目标分支的最新代码
2. 创建 Merge Request 时，以下几项必须填写：Source branch, Target barnch, Assignee, Milestone, Labels
3. 如发生代码冲突，代码提交必须在本地解决，并再次推送远程
4. 代码提交人及时通知审评人，尽快完成 Code Review，以免影响他人合并代码
5. 如 Code Review 过程中目标分支代码有更新，请审评人通知代码提交人同步更新，并再次推送远程
6. 如 Code Review 过程中代码审查不通过，请代码提交人尽快修改和提交最新代码，并通知审评人
7. 代码合并完成后，审评人清理远程分支，代码提交人清理本地分支
8. 本地分支被合并后，该分支不允许再次提交 Merge Request

举例说明，

远程仓库存在 release/target 分支，现在有新需求要提交至这个分支上，那么应该执行：

```
git checkout release/target  # 签出 release/target 分支代码
git pull                     # 拉取最新代码
git checkout -b feat/test    # 基于 release/target 创建本地 feat 分支
```

当本地开发完成后，同步目标分支（release/target）最新代码，并推送远程仓库，那么应该执行：

```
git checkout release/target                # 签出 release/target 分支代码
git pull                                   # 拉取最新代码
git checkout feat/test                     # 签出 feat/test 分支代码
git rebase release/target                  # 将 release/target 分支代码 同步至 feat/test 分支
git push --set-upstream origin feat/test   # 如果没有遇到冲突，就可以直接推送远程仓库
```

在 gitlab 页面上创建 Merge Request，将合并信息填写完成，以下内容必填：

- Source branch
- Target barnch
- Assignee
- Milestone
- Labels

填入的信息也列入 Code review 范围，请审评人严格执行

Code Review 标准请参考《前端技术规范及编码指南》第6节-代码规范

代码审核未通过，请代码提交人及时修改和提交；通过后，审评人清理远程分支，代码提交人清理本地分支，代码合并完成

## FQA

**git rebase 和 git merge 区别**

git rebase 的本质是变基，git merge 的是本质是合并。

如果你想要一个干净的，没有 merge commit 的线性历史树，那么你应该选择 git rebase；如果你想保留完整的历史记录，并且想要避免重写 commit history 的风险，你应该选择使用 git merge

假如有 A/B/C 三个分支，B/C 都是基于 A 创建，那么 B/C 可以 rebase 或 merge A 分支；但 B/C 两个分支之间可 merge 不可 rebase
