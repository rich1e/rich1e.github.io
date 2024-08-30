# Beyond Compare 配置 Mac 篇

## 添加全局变量

打开 **Beyond Compare** 选择 **Install Command Line tools**

```
Successfully installed command line tools.

/usr/local/bin/bcomp:
Launches comparison and waits for it to complete.

/usr/local/bin/bcompare:
Launches comparison and returns immediately.
```

## git

打开 `vi ~/.gitconfig`, 配置如下

```
[user]
    name = yourname
    email = youremail
[diff]
    tool = bc3
[merge]
    tool = bc3
[mergetool "bc3"]
    trustExitCode = true
[difftool]
    prompt = false

```

命令行中配置：

```
git config --global user.name yourname
git config --global user.email youremail
git config --global diff.tool bc3
git config --global merge.tool bc3
git config --global mergetool.bc3.trustExitCode true
git config --global difftool.prompt false
```

## 破解

[patcher][app][eyePatch][app]

`Beyond\ Compare\ 4.x\ \[SP\].app/Contents/MacOS/patcher Beyond\ Compare.app Beyond\ Compare\ 4.x\ \[SP\].app/Contents/MacOS/eyePatch Beyond\ Compare.app`

## 参考

[Git 中配置 Beyond Compare 作为 diff 工具](http://www.zhanglian2010.cn/2014/08/git-diff-with-beyond-compare/)

[Using Beyond Compare with Version Control Systems under OS X](https://www.scootersoftware.com/support.php?zz=kb_vcs_osx)

[解决 macOS Sierra 下注册机无法运行的问题](https://www.jianshu.com/p/0d3e9a4ebaf1)

[让 Special-K 系列 Patch 工具运行在 macOS sierra 10.12 上](http://xclient.info/a/50ebed5d-9015-9340-893b-dfb9eaa275cc.html?_=943d23fec6ed754aebabe2e0f3947968)

    [user]
        name = richie
        email = your-name@example.com.cn
    [difftool "meld"]
        path = /usr/local/bin/meld
        trustExitCode = false
    [difftool]
        prompt = false
    [diff]
        tool = meld
    [mergetool "meld"]
        path = /usr/local/bin/meld
        trustExitCode = false
    [mergetool]
        keepBackup = false
    [merge]
        tool = meld

https://www.chadou.me/p/204
http://xclient.info/s/beyond-compare.html?t=7b50e1bbea0ed1257ce82ab43d6a9984452ba029
http://www.vpsboke.net/ruanjian/305.html
https://pan.baidu.com/s/1miOKICC?errno=0&errmsg=Auth%20Login%20Sucess&&bduss=&ssnerror=0&traceid=#list/path=%2FMac%20os%2Fnew%2FBCompareOSX-4.1.5.21031&parentPath=%2FMac%20os%2Fnew
https://www.zhihu.com/question/20720399
https://www.alexkras.com/how-to-run-meld-on-mac-os-x-yosemite-without-homebrew-macports-or-think/
https://lrita.github.io/2017/05/14/use-meld-as-git-tool/
https://codeday.me/bug/20180109/116253.html
http://cherrot.com/snippet/2012/09/18/let-git-diff-merge-use-gui-tools-like-meld.html
https://peter517.github.io/2015/08/10/Git%E4%B8%AA%E4%BA%BA%E9%85%8D%E7%BD%AE/
https://www.jianshu.com/p/f5241be2c340
