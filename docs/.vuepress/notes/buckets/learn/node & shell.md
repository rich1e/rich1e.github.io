# NodeJS 遇上了 Shell

有段时间经常遇到代码打包构建的过程中，抛出 “ fatal: write error: No space left on device ” 的错误，导致构建失败。追查了原因，发现是磁盘满了。解决思路很简单，检测磁盘的容量空间，写一个 Shell 脚本定时去清理磁盘，就能解决。

这个方式对原来的代码没有任何的侵入性，所以我们觉得非常合适。

当我们兴奋的将方案同步给业务方时，他们突然又提了其它要求：

1. 文件不能全部清理，至少保留部分；
2. 自动清理，不依赖外部系统；

第2项，基本可以忽略。了解 Shell 定时任务的同学肯定知道，Shell 很多场景就是自动的，因此根本不是问题。可第1项比较麻烦，需要判断文件的内容，依照业务逻辑进行处理。经过不断探讨，最终也找到了实现的方案。核心代码如下：

检测磁盘的容量空间：`df -P | awk 'NR > 1'`

代码实现：

```javascript
const getDiskInfo = (path) => {
  return new Promise((resolve, reject) => {
    exec('df -P | awk \'NR > 1\'', (err, stdout, stderr) => {
      if(err) reject(err);
      if(stderr) reject(stderr);
      let aDrives = {};
      let aLines = stdout.split('\n');
      for(var i = 0; i < aLines.length; i++) {         
        var sLine = aLines[i];
        if (sLine.startsWith(path)) {
          sLine = sLine.replace(/ +(?= )/g,'');
          var aTokens = sLine.split(' ');
          aDrives=  {
            filesystem: aTokens[0],
            blocks: aTokens[1],
            used: aTokens[2],
            available: aTokens[3],
            capacity: aTokens[4],
            mounted: aTokens[5]
          };
        }
      }
      resolve(aDrives);
    });
  });
}
```

清理最近一天之前的文件：`find /your-path/* -mtime +0 -exec rm -Rf {} \;`

代码实现：

```javascript
function clearFiles(path) {
  if(!path) {
    return new Promise((resolve, reject) => {
      reject(new Error('路径为空'));
    });
  }
  return new Promise((resolve, reject) => {
    exec('find ' + path + ' -mtime +0 -exec rm -Rf {} \\;', (err, stdout, stderr) => {
      if(err) reject(err);
      if(stderr) reject(stderr);
      resolve(stdout);
    });
  });
}
```

最早的定时任务方案其实也存在问题，我们根本不知道磁盘什么时候会被塞满。因此，时间阈值很难估摸。所以进一步优化了逻辑，在每次调用构建服务的时候去触发磁盘检查，以达到最佳状态。

当然，上面的代码是基于时间维度的考虑来实现。如果遇到复杂场景，就需要调整方案了。但是技术终究是有局限的，所以我们最好从根本上了解业务的需求。否则，还会出现更多新问题。

前端打包构建最常用的命令是与文件操作相关的，比如，cp、mv、mkdir、touch等。不过，这只是冰山一角，Shell 环境编程非常的强大。如果采用简单 Shell 和 NodeJS 结合编程，或许只需要把平台相关的命令提取出来，只需较少改动就能实现跨平台，可以大大提高工作效率与减少浪费攻城师的时间。

因此，建议前端工程师掌握一些常用的 Shell 命令，二者结合的方式具有以下几点优势：

1. Shell 语法和结构比较简单，易于掌握，能非常容易的嵌入 NodeJS 中编程，让工作事半功倍；
2. Linux 系统内部有很多应用就是shell脚本开发，使用 Shell 操作一些系统级别的功能，比 NodeJS 更直接更方便，减少外部依赖；
3. 开放源代码，社区活跃，模块丰富，底层的扩展实现也较灵活。

最后送所有前端工程师一句话，

> Where is the Shell, there is a way.



参考：

[当Shell遇上了NodeJS](https://juejin.im/post/6844903701581152269)

[使用ShellJS提升你的开发效率](https://juejin.im/post/6844903847064764429)

[打造高效的工作环境 – SHELL 篇](https://coolshell.cn/articles/19219.html)

[Makefile构建前端项目](https://harttle.land/2016/09/21/make-frontend.html)

[从零构建一个操作shell的node插件并打包发布](https://juejin.im/post/6844904195145859086)

