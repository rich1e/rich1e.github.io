title: nginx 学习
date: 2014/12/29 22:46:25
categories: technology
tag: nginx
---

** nginx 命令 **

	start nginx			# 启动
	nginx -s stop 		# 快速退出
	nginx -s quit 		# 优雅退出
	nginx -s reload 	# 更换配置，启动新的工作进程，优雅的关闭以往的工作进程
	nginx -s reopen 	# 重新打开日志文件

可以在命令行运行tasklist命令来查看nginx进程：

	tasklist /fi "imagename eq nginx.exe"

** nginx 配置 **

	http {
	  server {
	    #1.侦听80端口
	    listen  80;
	    location / {
	        # 2. 默认主页目录在nginx安装目录的html子目录。
	        root   html;
	        index  index.html index.htm;
	        # 3. 没有索引页时，罗列文件和子目录
	        autoindex on;
	        autoindex_exact_size on;
	        autoindex_localtime on;
	    }
	    # 4.指定虚拟目录
	    location /tshirt {
		    alias D:\programs\Apache2\htdocs\tshirt;
		    index index.html index.htm;
	    }
	  }
	  # 5.虚拟主机www.emb.info配置
	  server {
	    listen          80;
	    server_name     www.emb.info;
	    access_log emb.info/logs/access.log;
	    location / {
			index index.html;
			root  emb.info/htdocs;
	    }
	  }
	}

** nginx issue **

    2012/04/02 13:55:59 [emerg] 7864#2376: bind() to 0.0.0.0:80 failed (10013: An attempt was made to access a socket in a way forbidden by its access permissions)

在 cmd 中，运行以下命令：

	netstat -aon | findstr :80

看到80端口果真被占用。发现占用的pid是4，名字是System。怎么禁用呢？

解决办法：

1、打开注册表：regedit

2、找到：HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\services\HTTP

3、找到一个REG_DWORD类型的项Start，将其改为0

4、重启系统，System进程不会占用80端口

重启之后，start nginx.exe 。在浏览器中，输入127.0.01，即可看到亲爱的“Welcome to nginx!” 了。

参考

[nginx Windows版使用说明](http://nginx.org/cn/docs/windows.html)

[Nginx - Windows下Nginx基本安装和配置](http://koda.iteye.com/blog/601249)
