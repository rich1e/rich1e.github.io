## 查看本地安装包

```sh
brew leaves -r | xargs -n1 brew desc --formula --eval-all
```

## 本地安装软件

```sh
brew list --cask | xargs -n1 brew desc --cask --eval-all
```

## 清理文件

```sh
# 清理刚刚产生的下载缓存文件
brew cleanup
# 强制清理 n 天以前的缓存文件，包括下载文件以外的缓存
brew cleanup --prune 0
```

## 查看下载文件

```sh
brew --cache
```

Ref

[Homebrew — The Missing Package Manager for macOS (or Linux)](https://brew.sh/)
[Brew tutorial | difyel - Tuorials](https://difyel.com/tutorial/brew-tutorial/index.html)
[使用brew安装历史版本的几种方式 - 掘金](https://juejin.cn/post/7179202980191666233)
[Homebrew 下载过慢的外包方案马克 - 知乎](https://zhuanlan.zhihu.com/p/107469378)