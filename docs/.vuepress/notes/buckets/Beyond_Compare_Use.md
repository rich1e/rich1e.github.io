##Mac下Beyond Compare不用破解码无限试用
下载：

国外官网下载BeyondComparehttp://www.scootersoftware.com/download.php



无限试用的原理

BCompare是应用程序启动的程序，只要在在启动的时候删除registry.dat(Library/Application Support/Beyond Compare/registry.dat)注册信息就好了，为此可以在该目录下添加一个批处理文件用来处理这个操作。

无限试用的操作方法

打开命令行终端，进入到安装目录里面的Contents/Macos，命令行指令：

cd /Applications/Beyond\ Compare.app/Contents/MacOS/
修改可执行文件名，并创建脚本

mv BCompare BCompare.real # 把可执行文件改名
touch BCompare # 创建新的启动脚本文件
vim BCompare # 编辑脚本内容，内容如下所示
此时进入vim编辑器，英文输入状态下输入一个i，进入编辑模式，粘贴以下内容：

#!/bin/bash
rm "/Users/$(whoami)/Library/Application Support/Beyond Compare/registry.dat"
"`dirname "$0"`"/BCompare.real $@
输入以后，先按一下“esc”键，然后英文输入状态输入:wq，保存退出。

最后修改下脚本的权限：

chmod a+x BCompare # 给脚本可执行权限
打开软件，正常使用

原文

1. go to the dir : /Applications/Beyond Compare.app/Contents/MacOS
2. change the name `BCompare` to `BCompare.bak`
3. touch a file name `BCompare` , and `chmod a+u BCompare`
4. insert BCompare the content :

```shell
#!/bin/bash
rm "/Users/$(whoami)/Library/Application Support/Beyond Compare/registry.dat"
"`dirname "$0"`"/BCompare.bak $@
```

ref:

https://gist.github.com/huqi/35f2a0792aef830898ca