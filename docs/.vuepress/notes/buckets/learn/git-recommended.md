# Git 建议

## 多个需求迭代同时开发且需要立即提测时，如何管理分支？

1. 当发出提测申请时，就要拉出 release 分支，之后将进入 bugfix 阶段，所有的代码都只提交 release 分支；

2. 其他 feature 分支代码不允许提交 release 分支；

3. 为了保证 develop 分支代码为最新，有计划的合并 release 分支代码;

4. feature 分支需要有计划的合并 develop 最新代码;

以上分支合并和代码提交操作必须走 Merge Request 和 Code Review；

## 一条产品线上，如何管理和维护多个版本？

建议使用支援分支（support branch)，使用版本号创建和管理。

## 如果没有自动构建平台，如何通过 git 快速部署生产代码？

建议开启一条长期分支（production branch)，用来备份线上生产代码。
