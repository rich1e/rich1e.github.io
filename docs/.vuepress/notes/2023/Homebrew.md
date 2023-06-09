## 查看本地安装包

```sh
brew leaves -r | xargs -n1 brew desc --formula --eval-all
```

## 本地安装软件

```sh
brew list --cask | xargs -n1 brew desc --cask --eval-all
```

Ref

[Homebrew — The Missing Package Manager for macOS (or Linux)](https://brew.sh/)
[Brew tutorial | difyel - Tuorials](https://difyel.com/tutorial/brew-tutorial/index.html)
[使用brew安装历史版本的几种方式 - 掘金](https://juejin.cn/post/7179202980191666233)