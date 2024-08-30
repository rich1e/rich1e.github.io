# Docker 学习笔记

<!-- MarkdownTOC -->

- [安装](#安装)
- [Hello World](#hello-world)
- [一些常用的命令](#一些常用的命令)
- [Docker for MAC vs. Docker toolbox](#docker-for-mac-vs-docker-toolbox)
- [使用 Kitematic 管理 Docker container](#使用-kitematic-管理-docker-container)
- [FQA](#fqa)
- [Reference](#reference)

<!-- /MarkdownTOC -->

## 安装


打开 [Install Docker on macOS](https://docs.docker.com/engine/installation/mac/#/docker-for-mac) ，选择 `Docker for Mac`；下载完成后，即可打开安装。

![Alt text](https://docs.docker.com/docker-for-mac/images/docker-app-drag.png)

接著会需要输入 Mac 管理者的密码来允许 Docker 做一些系统设定：

![enter image description here](https://pic.pimg.tw/ephrain/1463734680-804910622.png)

安装完成。

![enter image description here](https://pic.pimg.tw/ephrain/1463734680-1155709796.png)


## Hello World

打开 `terminal`，执行以下命令：

    $ docker --version
    Docker version 1.12.3, build 6b644ec

    $ docker-compose --version
    docker-compose version 1.8.1, build 878cff1

    $ docker-machine --version
    docker-machine version 0.8.2, build e18a919

输入以下命令，运行一个示例。

    $ docker run -d -p 80:80 --name webserver nginx

然后打开浏览器，输入 `http://localhost/`。

![Alt text](./1481015540572.png)


## 一些常用的命令

该命令返回容器和镜像的数量、状态及其他基础配置等
    
    docker info 
    
查看系统中创建的容器

    docker ps
    # 所有容器，包括运行和停止的
    docker ps -a

停止所有容器

    docker stop $(docker ps -a -q)

## Docker for MAC vs. Docker toolbox

具体区别看这里 [Docker for MAC vs. Docker toolbox](https://docs.docker.com/docker-for-mac/docker-toolbox/) 。简单说来，Docker for Mac 并未使用 VirtualBox，转而使用 HyperKit.

## 使用 Kitematic 管理 Docker container


## FQA

如何修改 insecure-registry ？

当 docker build 时，依赖的资源下载不了，会出现以下情况：

![Alt text](./1481015829579.png)

可以在 docker GUI 配置，`insecure-registry` 填写资源地址。如下：

![enter image description here](https://docs.docker.com/docker-for-mac/images/settings-advanced.png)



## Basis

```shell
# step1
docker run --name repo alpine/git clone https://github.com/docker/getting-started.git
docker cp repo:/git/getting-started/ .

# step2
cd getting-started
docker build -t docker101tutorial . 

# step3
docker run -d -p 8080:8080 --name docker-tutorial docker101tutorial
```



## Reference

官方演示：[Get started with Docker for Mac](https://docs.docker.com/docker-for-mac/)

官方演示：[Get started with Docker Machine and a local VM](https://docs.docker.com/machine/get-started/#/prerequisite-information)

[Where to set the '-insecure-registry' flag on Mac OS?](http://stackoverflow.com/questions/32808215/where-to-set-the-insecure-registry-flag-on-mac-os)
