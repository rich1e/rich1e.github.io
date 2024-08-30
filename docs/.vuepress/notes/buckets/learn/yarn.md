## yarn 安装包时报 `unable to verify the first certificate` 错误

> https://www.cnblogs.com/bettergoo/p/13972709.html

```shell
# unable to verify the first certificate
# https://www.cnblogs.com/bettergoo/p/13972709.html

yarn config set strict-ssl false
```



## flatmap-stream 报错



> https://ijs.me/2018/12/06/yarn-flatmap-stream/
> https://www.google.com/search?q=flatmap-stream+yarn+%E9%94%99%E8%AF%AF&newwindow=1&safe=strict&sxsrf=ALeKk03UgURa3sCWL7Cc0dqZX6rcV5kndQ:1622106854524&ei=5mKvYOK5H9Hm-AbP47bwDA&start=10&sa=N&ved=2ahUKEwjixOf2wunwAhVRM94KHc-xDc4Q8NMDegQIARBP&biw=1420&bih=706
> https://zhuanlan.zhihu.com/p/50938220

## yarn更新依赖包

> https://blog.csdn.net/sinat_36728518/article/details/109110575
> https://runebook.dev/zh-CN/docs/yarn/cli/upgrade-interactive


> WARNING: GPG is not installed, integrity can not be verified!
> Extracting to ~/.yarn...
> Adding to $PATH...
> We've added the following to your /Users/yuqigong/.zshrc
> If this isn't the profile of your current shell then please add the following to your correct profile:

export PATH="$HOME/.yarn/bin:$HOME/.config/yarn/global/node_modules/.bin:$PATH"

