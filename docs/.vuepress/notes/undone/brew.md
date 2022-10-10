[toc]

## Homebrew brew update 长时间没反应

```shell
# 替换 brew.git 仓库地址
$ cd "$(brew --repo)"
$ git remote set-url origin https://mirrors.aliyun.com/homebrew/brew.git

# 替换 homebrew-core.git 仓库地址
$ cd "$(brew --repo)/Library/Taps/homebrew/homebrew-core"
$ git remote set-url origin https://mirrors.aliyun.com/homebrew/homebrew-core.git

# 替换 homebrew-bottles 访问地址
$ echo 'export HOMEBREW_BOTTLE_DOMAIN=https://mirrors.aliyun.com/homebrew/homebrew-bottles' >> ~/.zshrc
$ source ~/.zshrc
```

Ref

https://juejin.cn/post/6931190862295203848
https://www.cnblogs.com/tp0829/p/Homebrew.html
https://zhuanlan.zhihu.com/p/102760018

## Permission denied @ dir_s_mkdir - /usr/local/Frameworks

```shell
sudo mkdir /usr/local/Framework
sudo chown -R $(whoami) /usr/local/Frameworks
```



![image-20210823105836540](/Users/yuqigong/Dropbox/Apps/Editorial/md/brew/image-20210823105836540.png)

Ref

https://www.cnblogs.com/douglasvegas/p/9141231.html
https://blog.csdn.net/dengfangfang11/article/details/108341506
https://www.codeleading.com/article/549426038/

## 通过brew cask安装指定版本的应用

> brew edit typora
> brew reinstall typora

[通过brew cask安装指定版本的应用](https://lougazen.github.io/2019/12/17/%E9%80%9A%E8%BF%87brew-cask%E5%AE%89%E8%A3%85%E6%8C%87%E5%AE%9A%E7%89%88%E6%9C%AC%E7%9A%84%E5%BA%94%E7%94%A8/)