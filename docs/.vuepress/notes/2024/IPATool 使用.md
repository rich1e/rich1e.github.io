## 安装

```sh
brew tap majd/repo
brew install ipatool
```
## 使用

```sh
❯ ipatool
A cli tool for interacting with Apple's ipa files

Usage:
  ipatool [command]

Available Commands:
  auth        Authenticate with the App Store
  completion  Generate the autocompletion script for the specified shell
  download    Download (encrypted) iOS app packages from the App Store
  help        Help about any command
  purchase    Obtain a license for the app from the App Store
  search      Search for iOS apps available on the App Store

Flags:
      --format format                sets output format for command; can be 'text', 'json' (default text)
  -h, --help                         help for ipatool
      --keychain-passphrase string   passphrase for unlocking keychain
      --non-interactive              run in non-interactive session
      --verbose                      enables verbose logs
  -v, --version                      version for ipatool

Use "ipatool [command] --help" for more information about a command.
```

登录

```
ipatool auth login -e 账号邮箱 -p 密码
```

搜索

```
ipatool search Wechat
```

购买

```
ipatool purchase -b com.tencent.xin
```

下载

```
# 已经获取许可的应用
ipatool download -b com.tencent.xin -o wechat.ipa 

# 免费应用
ipatool download -b com.tencent.xin -o wechat.ipa --purchase
```

> 如果应用程序是免费的，您可以通过使用 `purchase` 命令或使用 `download` 命令时设置 `--purchase` 标志来使用 ipatool 获取许可证。
## FQA

> failed to get account: failed to get item: The specified item could not be found in the keyring

![[meta/Pasted image 20240807122537.png]]

这个错误一般是因为没有 `login` 造成的原因，执行一下登录命令就解决了。

```shell
ipatool auth login -e 账号邮箱 -p 密码
```

> auth code is required

![[meta/Pasted image 20240807123714.png]]

`2FA` **表示双重认证**，这个错误表示需要验证码，双重认证未通过。

> request failed: failed to unmarshal json: invalid character '<' looking for beginning of value

![[meta/Pasted image 20240807124637.png]]

这个错误估计是搜索的**关键词不对，找不到结果**。修改一下关键词即可。

![[meta/Pasted image 20240807124838.png]]

> license is required

![[meta/Pasted image 20240807125018.png]]

这个错误的原因是，下载的 `app` 未获取许可 ，需要获取许可 `license` 才可以下载。解决方法有2种：

1. 执行 `ipatool purchase -b com.tencent.xin` ;
2. 使用苹果设备登录账号购买；

第一种方法有一定失败风险。第二种成功较高。

> failed to purchase item with param 'STDQ': failed to purchase app

![[meta/Pasted image 20240807125657.png]]

![[meta/Pasted image 20240807131020.png]]

这个错误的出现的情况，有以上2种。原因可能是，**用户的账号需要接受应用商店中的条款和条件更改，从连接到给定的苹果ID的设备。** 所以，如果出现了这个错误，可以尝试在苹果设备上登录一下账号。

Ref：[Failed to purchase item with param 'STDQ': failed to purchase app while using --purchase flag · GitHub](https://github.com/majd/ipatool/issues/205)
## Ref

[无法购买参数为“STDQ”的项目：使用 --purchase 标志时无法购买应用程序 ·期刊 #205 ·MAJD/IPAtool --- Failed to purchase item with param 'STDQ': failed to purchase app while using --purchase flag · Issue #205 · majd/ipatool](https://github.com/majd/ipatool/issues/205)
[Download Error IPA · Issue #184 · majd/ipatool](https://github.com/majd/ipatool/issues/184)
[购买错误 ipatool ·问题 #210 ·MAJD/IPAtool --- Purchase error ipatool · Issue #210 · majd/ipatool](https://github.com/majd/ipatool/issues/210)
[使用ipatool获取App Store中App和游戏的IPA文件 - 哔哩哔哩](https://www.bilibili.com/read/cv21021381/)
[majd/ipatool：命令行工具，允许从 iOS App Store 搜索和下载应用程序包（称为 ipa 文件） --- majd/ipatool: Command-line tool that allows searching and downloading app packages (known as ipa files) from the iOS App Store](https://github.com/majd/ipatool)
[IPA下载工具原理解析 - 掘金](https://juejin.cn/post/6997983797434122248)
