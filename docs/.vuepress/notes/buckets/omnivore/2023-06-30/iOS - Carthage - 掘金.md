---
- id: 45c5da3b-e52f-4b2c-9f67-2b1372dc43a0
---

%%45c5da3b-e52f-4b2c-9f67-2b1372dc43a0_start%%
# iOS - Carthage - 掘金
#Omnivore #mac #carthage 

[Read on Omnivore](https://omnivore.app/me/i-os-carthage-1890b22aa4b)
[Read Original](https://juejin.cn/post/7246940748166774844)

![风景.jpg](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/839a0c64c0f840f0a8a3a680033d28e1~tplv-k3u1fbpfcp-zoom-in-crop-mark:1512:0:0:0.awebp?)

Carthage 是一个适用于 iOS 和 macOS 开发的去中心化依赖管理工具。它的主要目标是提供一种简单和灵活的方式来集成第三方库到你的项目中，而不修改项目的构建设置。

## 1.安装

你可以==使用 Homebrew 在终端中安装 Carthage==。执行以下命令即可进行安装：

```mipsasm
brew install carthage

```

## 2.用法

使用时，你需要创建一个名为 Cartfile 的文本文件，其中列出了你希望集成到项目中的第三方库及其版本。每个库都以 GitHub 格式进行声明，例如：

```livescript
github "Alamofire/Alamofire" ~> 5.4
github "Kingfisher/Kingfisher" ~> 6.0


```

## 3.依赖更新

在编辑完 Cartfile 后，你可以在终端中导航到项目目录，并执行以下命令来下载和构建所需的依赖库：

```ebnf
carthage update

```

这将根据 Cartfile 下载所列出的库的源代码，并将其构建为二进制文件。构建完成后，你会在项目目录中看到一个名为 Carthage 的文件夹，其中包含构建好的库。

## 4.集成库

在 Xcode 项目中，你需要手动将构建好的库（以 .framework 扩展名）拖放到你的项目中。确保在 "Embedded Binaries" 和 "Linked Frameworks and Libraries" 中添加这些库。

## 5.构建脚本

为了确保每次构建时都能正确地拷贝库到应用程序的 Bundle 中，你需要设置一个构建脚本。在项目的 "Build Phases" 中，添加一个 "New Run Script Phase"，并添加以下脚本：

```gradle
/usr/local/bin/carthage copy-frameworks

```

在脚本的 "Input Files" 字段中，添加你要使用的库的路径，例如：

```reasonml
$(SRCROOT)/Carthage/Build/iOS/Alamofire.framework
$(SRCROOT)/Carthage/Build/iOS/Kingfisher.framework

```

## 6.更新依赖

当你的 Cartfile 中的依赖发生变化时，你需要再次运行 carthage update 来更新依赖库。这将根据更新后的 Cartfile 重新下载和构建所需的库。 Carthage 的优点之一是它的灵活性和简单性。它不会修改项目的构建设置，不会引入复杂的依赖关系，并且更适合需要精确控制第三方库版本和构建过程的开发者。然而，由于 Carthage 不自动处理依赖关系的版本冲突，对于大型项目或具有复杂依赖关系的项目，可能需要更多的手动管理和解决冲突。

总体而言，Carthage 提供了一种简单、灵活的方式来管理第三方库的依赖，并且不会对项目的构建过程产生太多干扰。

![](https://proxy-prod.omnivore-image-cache.app/0x0,sQc-wJm8ETerzmzrW3BYOyky1HUUanQFZWgvfI7mME4c/https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/00ba359ecd0075e59ffbc3d810af551d.svg) 赞

![](https://proxy-prod.omnivore-image-cache.app/0x0,syyV_v_FWrLI4JVY6Xy4uBbGmaYgx1LpcOnFV3bAozPs/https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/3d482c7a948bac826e155953b2a28a9e.svg)  收藏


%%45c5da3b-e52f-4b2c-9f67-2b1372dc43a0_end%%