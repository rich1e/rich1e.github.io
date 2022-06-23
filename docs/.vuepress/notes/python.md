# Python

[TOC]



## 安装

> https://docs.aws.amazon.com/zh_tw/elasticbeanstalk/latest/dg/eb-cli3-install-windows.html
> https://ckfanzhe.github.io/About_conda/

```
# TUNA 还提供了 Anaconda 仓库的镜像，运行以下命令即可添加 Anaconda Python 免费仓库
channels:
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/msys2/
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/conda-forge/
  - https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/
  - http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/win-64/
  - http://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/win-64/
  - defaults

# 设置搜索时显示通道地址
# show_channel_urls: true

proxy_servers:
  http: http://127.0.0.1:1081
  https: http://127.0.0.1:1081

ssl_verify: false

remote_connect_timeout_secs: 40.0
remote_read_timeout_secs: 100.0

```





```powershell
// 安装一个指定版本环境
conda create --name python27 python=2

// 激活版本环境
conda activate python36

// 关闭版本环境
conda deactivate python36

// 删除指定版本
conda remove -n python36 -all

// 查看当前版本列表
conda info -e

// 查看环境
conda env list

// 清空缓存
conda clean -i

// 重置
conda init --reverse

// 初始化
conda init PowerShell
```

## Windows Terminal 配置

```
%SystemRoot%\System32\cmd.exe /K E:\Scoop\apps\anaconda3\current\Scripts\activate.bat
```

```
"powershell.exe -ExecutionPolicy ByPass -NoExit -Command \"& 'E:\Scoop\apps\anaconda3\current\shell\condabin\conda-hook.ps1' ; conda activate base' \" "
```

参考

> https://www.cnblogs.com/dereen/p/ps_conda_env.html
> https://codercms.com/tool/add-anaconda-prompt-to-windows-terminal/
> https://www.cnblogs.com/ercilan/p/14812699.html
> https://zhuanlan.zhihu.com/p/364292785
> https://dev.to/azure/easily-add-anaconda-prompt-in-windows-terminal-to-make-life-better-3p6j
> https://arturomoncadatorres.com/incorporating-anaconda-prompt-windows-terminal/
> https://blog.csdn.net/my_wings/article/details/106572949

## 镜像源

> https://mirrors.sjtug.sjtu.edu.cn/docs/anaconda
> https://mirror.tuna.tsinghua.edu.cn/help/anaconda/



## Openssl

> https://juejin.cn/post/7077868860296134664

## 学习

> https://zhuyuanxiang.github.io/coding/Conda/
> https://blog.51cto.com/u_15316394/3215733
> https://cloud.tencent.com/developer/article/1635845
> https://segmentfault.com/a/1190000038503741