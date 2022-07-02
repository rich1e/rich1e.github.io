> gyp: No Xcode or CLT version detected!

```bash
xcode-select --install
```

```bash
xcode-select: error: command line tools are already installed, use "Software Update" to install updates
```

```shell
$ xcode-select --print-path

返回：
/Library/Developer/CommandLineTools
```

```shell
rm -rf $(xcode-select --print-path)
xcode-select --install
```

## 参考

https://zhuanlan.zhihu.com/p/105526835

https://www.jianshu.com/p/dc365f2fa84b

## No space left on device

![Image for post](./images/Mac-FQA/Wjat9fqwp71hg.png)

https://www.v2ex.com/t/654775
https://medium.com/@eduardo.pinheiro.pt/your-mac-doesnt-restart-due-to-no-space-left-on-device-27adf777619d
https://apple.stackexchange.com/questions/400639/cant-delete-files-from-apfs-volume-no-space-left-on-device
https://www.v2ex.com/t/654775
