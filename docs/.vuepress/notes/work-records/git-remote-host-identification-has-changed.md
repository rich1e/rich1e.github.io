#git 

![[Pasted image 20230130094121.png]]

## WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!

早上来公司，打算更新本地代码，出现以上问题。

经过排查，发现是公司 `git` 服务器迁移导致。一般服务迁移或者系统更新，如果服务器 `ip` 发生变化或者 `ECDSA` 产生变化，会使客服端 `known_hosts` 过期。

第一次使用 SSH 连接时，会生成一个认证，储存在客户端的 `known_hosts` 中，远程 `git` 服务器更新时，本地 `known_hosts ` 过期。

## 解决方案

1. 直接删除 `known_hosts`，重新 `git pull` 时，会重新生成 `known_hosts`；
2. 修改 `known_hosts` 文件，删除对应的 `ssh` 信息；
3. 忽略 `known_hsots` 验证；

这几种方式都有弊端，1会影响其他需要ssh认证的服务；2需要手动修改，如果文件较大，手动对比容易出错；3存在安全隐患；

最佳做法如下：

![[Pasted image 20230130104047.png]]

![[Pasted image 20230130104203.png]]

1. 检查 `git` 服务器 `ip` 地址
```sh
ssh-keygen -l -f ~/.ssh/known_hosts
```
2. 删除以前的 `git` 服务器信息
```
# 删除属于指定主机名的所有密钥，包括带端口的
ssh-keygen -R 服务器端的ip地址（上面命令后缀的ip地址）
```
3. 重新连接，根据提示确认。（`git pull` 或者 `git fetch --all` 都可）
```sh
The authenticity of host '[服务器IP](服务器IP)' can't be established.
ECDSA key fingerprint is SHA256:xxxxxxxx.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added '[服务器IP],(服务器IP)' (ECDSA) to the list of known hosts.
Already up to date.
```

## Ref

[How To Fix the "Warning: Remote Host Identification Has Changed" Error](https://kinsta.com/knowledgebase/warning-remote-host-identification-has-changed/)
[git问题解决：WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED! - 简书](https://www.jianshu.com/p/775af5f7a1d3)
[SSH连接错误”REMOTE HOST IDENTIFICATION HAS CHANGED!” – 行星带](https://beltxman.com/2534.html)
