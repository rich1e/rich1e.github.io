## hosts 文件中出现 windows10.microdone.cn 的问题

> https://blog.xiaoben.li/t/windows10-microdone-cn%E9%97%AE%E9%A2%98
> https://blog.csdn.net/qq_35806493/article/details/117281189

如果本地有安全软件，也可以通过安全软件防止其修改 `hosts`，例如火绒。

## windows 配置代理

```
设置代理
netsh winhttp set proxy 127.0.0.1:1080
取消代理
netsh winhttp reset proxy
查看代理
netsh winhttp show proxy
```

> https://segmentfault.com/a/1190000037642227
> https://juejin.cn/post/6844903599999287303
> https://answers.microsoft.com/zh-hans/windows/forum/all/%E9%97%AE%E9%A2%98%E5%B7%B2%E8%A7%A3%E5%86%B3windo/46e869c6-de9c-406f-bda6-418e06c72fdd
> https://techdocs.broadcom.com/us/en/symantec-security-software/endpoint-security-and-management/endpoint-security/sescloud/Troubleshooting/configuring-proxy-server-by-using-netsh-command-v129854258-d4155e10265.html
> https://www.v2ex.com/t/766084
> https://blog.yowko.com/npm-yarn-proxy/

```

husky - commit-msg hook exited with code 1 (error)
```

## windows 下文件命名不能出现特殊字符

```markdown
Ref:
http://i.lckiss.com/?p=7384
https://mlog.club/article/2695001
```