> uniapp 开发调试
## 安装模拟器

> [安装模拟器@Simulator | uni-app官网](https://uniapp.dcloud.net.cn/tutorial/run/installSimulator.html)

iOS[^1]：先安装 XCode，然后点击 settings，选择 Platforms，里面有各个版本的 Simulator。

![[meta/Pasted image 20250117132452.png]]

Android [^2] [^3] [^4]  ：推荐使用 Google 官方的开发工具 [Android Studio](https://developer.android.com/studio/install) 内置 Simulator 管理工具，可以安装各个版本。

![[meta/Pasted image 20250117133033.png]]

![[meta/Pasted image 20250117133116.png]]

![[meta/Pasted image 20250117133142.png]]

## CPU类型[^5]

- armeabi-v7a
- arm64-v8a
- x86

> 不支持64位x86指令cpu，即不支持x86_64

[^1]: [Mac环境HBuilderX连接Android Studio中运行创建的Android模拟器（图文详细） − 生活的美](https://cpury.com/4833.html)
[^2]: [Android 模拟器卸载安装的APP的方法（直接在模拟器进行）_终端模拟器卸载系统应用-CSDN博客](https://blog.csdn.net/weixin_43520670/article/details/105864184)
[^3]: [Uniapp 运行到 Android 真机或模拟器一、运行到真机 创建项目后，数据线连接电脑和手机，在弹出的窗口中选择 - 掘金](https://juejin.cn/post/7319490172730802230)
[^4]: [uniapp 在 Android Studio 模拟器中运行项目_uniapp运行到androidstudio 模拟器-CSDN博客](https://blog.csdn.net/tengyuxin/article/details/134072384)
[^5]: [CPU类型](https://uniapp.dcloud.net.cn/tutorial/app-android-abifilters.html#cpu%E7%B1%BB%E5%9E%8B)