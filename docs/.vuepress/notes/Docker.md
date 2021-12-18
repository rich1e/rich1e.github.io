https://www.google.com/search?q=windows+docker+%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91%E7%8E%AF%E5%A2%83&lr=lang_zh-CN&newwindow=1&rlz=1C1GCEU_zh-CNHK973HK974&biw=1536&bih=722&tbs=lr%3Alang_1zh-CN&sxsrf=AOaemvJZo5EaYx4N0iVygRj5akOpdfdbaQ%3A1636943079966&ei=58SRYa64OrOBi-gPkNCqyAw&oq=windows+docker+%E5%89%8D%E7%AB%AF%E5%BC%80%E5%8F%91&gs_lcp=Cgdnd3Mtd2l6EAMYADIFCCEQoAE6CggAEIAEELADEAw6BwgAELADEB46CQgAELADEAgQHjoFCAAQywE6BggAEAcQHjoFCAAQgAQ6BAgAEB46BggAEAgQHkoECEEYAVDpCFirRGDMTWgCcAB4AIABpgOIAdopkgEIMi0xOS4wLjGYAQCgAQHIAQTAAQE&sclient=gws-wiz
https://www.cnblogs.com/pomelott/p/13212085.html
https://juejin.cn/post/6932808129189150734#heading-2
https://www.i4k.xyz/article/weixin_41146637/108339704
https://zhuanlan.zhihu.com/p/412417957
https://zhuanlan.zhihu.com/p/339377526
https://zhuanlan.zhihu.com/p/163763066
https://zhuanlan.zhihu.com/p/150124946
https://segmentfault.com/a/1190000038911660#item-3
https://yeasy.gitbook.io/docker_practice/install/windows
https://docs.docker.com/desktop/windows/wsl/
https://www.runoob.com/docker/windows-docker-install.html
https://hub.docker.com/editions/community/docker-ce-desktop-windows?tab=description
https://github.com/ScoopInstaller/Scoop/issues/3272

![image-20211115105855778](C:\Users\gongyuqi-jk\AppData\Roaming\Typora\typora-user-images\image-20211115105855778.png)

## WslRegisterDistribution failed with error: 0x800701bc

> https://blog.csdn.net/qq_18625805/article/details/109732122
> https://github.com/microsoft/WSL/issues/5393

造成该问题的原因是WSL版本由原来的WSL1升级到WSL2后，内核没有升级，前往[微软WSL官网](https://docs.microsoft.com/zh-cn/windows/wsl/wsl2-kernel)下载安装适用于 x64 计算机的最新 WSL2 [Linux](https://so.csdn.net/so/search?from=pc_blog_highlight&q=Linux) 内核更新包即可。

## Error response from daemon: conflict: unable to delete 0deb7380d708 (must be forced) - image is being used by stopped container 26d02ec231bc

> https://kalasearch.cn/community/tutorials/how-to-remove-docker-images-containers-volumes/

## lazydocker

https://github.com/Bit0r/blog/blob/master/cli-tools/lazydocker.md
https://thenewstack.io/a-look-at-lazydocker-a-cursor-based-docker-management-tool/
https://www.freebuf.com/sectool/231110.html
https://github.com/jesseduffield/lazydocker

```shell
# 停止container，这样才能够删除其中的images
docker stop $(docker ps -a -q)
# 删除所有container的话再加一个指令
docker rm $(docker ps -a -q)
# 要删除全部image
docker rmi $(docker images -q)
# 删除指定的image
docker rmi ID
# 清除所有未使用或未挂载的镜像，容器，卷和网络配置
docker system prune
```

https://ghproxy.com/
https://yeasy.gitbook.io/docker_practice/install/windows
https://docs.microsoft.com/en-us/windows/wsl/install
https://www.codenong.com/cs109476695/
https://zhuanlan.zhihu.com/p/339377526
https://zhuanlan.zhihu.com/p/163763066
https://zhuanlan.zhihu.com/p/150124946
https://segmentfault.com/a/1190000038911660#item-3
https://docs.docker.com/desktop/windows/wsl/
https://www.runoob.com/docker/windows-docker-install.html
