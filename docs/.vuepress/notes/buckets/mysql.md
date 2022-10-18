安装mysql

```
brew install mysql
```

使用命令

```bash
# 启动
mysql.server start
# 关闭
mysql.server stop
# 连接
We've installed your MySQL database without a root password. To secure it run:
    mysql_secure_installation

MySQL is configured to only allow connections from localhost by default

To connect run:
    mysql -uroot
    
To have launchd start mysql now and restart at login:
  brew services start mysql
Or, if you don't want/need a background service you can just run:
  mysql.server start
```

## FQA

检查mysql进程

```bash
ps -ef | grep mysqld
```

重启mysql提示MySQL server PID file could not be found!

```bash
ps -ef | grep mysqld
kill -9 进程号
```



## Ref

https://www.cnblogs.com/leinov/p/5435964.html

https://juejin.cn/post/6844904048794009613



