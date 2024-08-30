title: Android 模拟器安装过程
date: 2014/7/13 20:46:25
categories: learn
tag: mobile
---

### 配置 java 环境 ###

[java 下载](http://www.oracle.com/technetwork/java/javase/downloads/index.html)
新建环境变量（*Path* \ *CLASSPATH* \ *JAVA_HOME*）[参考](http://www.cnblogs.com/cc11cc/archive/2012/11/08/2759027.html)

### 安装 Android SDK Manager ###

[Android SDK Manager 下载](http://developer.android.com/sdk/index.html)

下载可能出现问题，需要在 *hots* 里面修改，如下

	74.125.237.1	dl-ssl.google.com
	203.208.46.146	dl.google.com
	203.208.46.146	dl-ssl.google.com

除了修改 *hots* 还需要设置 Android SDK Manager [参考](http://jingyan.baidu.com/article/8275fc86dbe84046a03cf69d.html)

### 创建 Android Virtual Device ###

可能会遇到这样的问题 *panic:could not open:XXX(设备名称)*，解决如下：

新建环境变量： *ANDROID_SDK_HOME*
路径可以自定义，不可出现中文，例如：D:\Program Files\Android [参考](http://jingyan.baidu.com/article/91f5db1beb12d41c7f05e39f.html)

### 其他内容 ###

[Android开发调试工具ADB的使用](http://www.cnblogs.com/meil/archive/2012/05/24/2516055.html)

[Android的模拟器，在ADT中调试运行AVD时，速度太慢，极其的慢](http://www.crifan.com/android_emulator_run_too_slow_in_debug_mode/)

[英特尔®硬件加速执行管理器安装指南](http://software.intel.com/zh-cn/articles/installation-instructions-for-intel-hardware-accelerated-execution-manager-windows-cn)

[Use Intel HAXM Hardware acceleration to drastically speed up your Android emulator](http://envyandroid.com/archives/794/intel-haxm-hardware-acceleration-on-android-emulator)
