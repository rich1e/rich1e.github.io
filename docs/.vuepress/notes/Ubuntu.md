# Ubuntu Uses

[TOC]



## Ubuntu Command

| apt 命令         | 被取代的命令         | 说明                           |
| ---------------- | -------------------- | ------------------------------ |
| apt install      | apt-get install      | 安装新包                       |
| apt remove       | apt-get remove       | 卸载已安装的包（保留配置文件） |
| apt purge        | apt-get purge        | 卸载已安装的包（删除配置文件） |
| apt update       | apt-get update       | 更新软件包列表                 |
| apt upgrade      | apt-get upgrade      | 更新所有已安装的包             |
| apt autoremove   | apt-get autoremove   | 卸载已不需要的包依赖           |
| apt full-upgrade | apt-get dist-upgrade | 自动处理依赖包升级             |
| apt search       | apt-cache search     | 查找软件包                     |
| apt show         | apt-cache show       | 显示指定软件包的详情           |

apt 也有一些自己的命令

| 新的 apt 命令    | 说明                                 |
| ---------------- | ------------------------------------ |
| apt list         | 列出包含条件的包（已安装，可升级等） |
| apt edit-sources | 编辑源列表                           |

参考：

[1]: https://juejin.cn/post/6844903939087810567	"apt 和 apt-get 的区别"




## Failed to connect to https://changelogs.ubuntu.com/meta-release-lts. Check your Internet connection or proxy settings

> https://blog.csdn.net/qq_38066812/article/details/119538807
> https://beginor.github.io/2021/01/10/fix-ubuntu-do-release-upgrade-error.html



##  Temporary failure resolving 'archive.ubuntu.com'

> Err:1 http://archive.ubuntu.com/ubuntu focal InRelease
>   Temporary failure resolving 'archive.ubuntu.com'
> Err:2 http://security.ubuntu.com/ubuntu focal-security InRelease
>   Temporary failure resolving 'security.ubuntu.com'
> Err:3 http://archive.ubuntu.com/ubuntu focal-updates InRelease
>   Temporary failure resolving 'archive.ubuntu.com'
> Err:4 http://archive.ubuntu.com/ubuntu focal-backports InRelease
>   Temporary failure resolving 'archive.ubuntu.com'
> Reading package lists... Done
> Building dependency tree
> Reading state information... Done
> 154 packages can be upgraded. Run 'apt list --upgradable' to see them.
> W: Failed to fetch http://archive.ubuntu.com/ubuntu/dists/focal/InRelease  Temporary failure resolving 'archive.ubuntu.com'
> W: Failed to fetch http://archive.ubuntu.com/ubuntu/dists/focal-updates/InRelease  Temporary failure resolving 'archive.ubuntu.com'
> W: Failed to fetch http://archive.ubuntu.com/ubuntu/dists/focal-backports/InRelease  Temporary failure resolving 'archive.ubuntu.com'
> W: Failed to fetch http://security.ubuntu.com/ubuntu/dists/focal-security/InRelease  Temporary failure resolving 'security.ubuntu.com'
> W: Some index files failed to download. They have been ignored, or old ones used instead.

DNS 服务错误，需要修改 `resolv.conf` 文件。

```bash
sudo rm /etc/resolv.conf
sudo bash -c 'echo "nameserver 8.8.8.8" > /etc/resolv.conf'
sudo bash -c 'echo "[network]" > /etc/wsl.conf'
sudo bash -c 'echo "generateResolvConf = false" >> /etc/wsl.conf'
sudo chattr +i /etc/resolv.conf
```

`resolv.conf` 中提示我们，这个文件是 WSL 自动生成的，添加 `wsl.conf` 并添加以下配置阻止其自动生成：

```bash
[network]
generateResolvConf = false
```

参考：

[1]: https://blog.csdn.net/weixin_38204723/article/details/78316940	"ubuntu apt-get 错误 Temporary failure resolving ‘us.archive.ubuntu.com’ 解决"
[2]: https://umm.js.org/p/6a514871/	"WSL 2 apt-get upgrade failed"
[3]: https://blog.csdn.net/weixin_45951701/article/details/118278728	"WSL问题: Temporary failure resolving ‘archive.ubuntu.com‘"
[4]: https://github.com/microsoft/WSL/issues/5420	"WSL 2 keeps overwriting resolv.conf #5420"

