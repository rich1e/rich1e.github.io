# PowerShell Command

[TOC]



## 获取命令的别名

若要获取计算机的别名（包括内置别名），请键入：

```
$ Get-Alias -Definition Start-Process

CommandType     Name                                               Version    Source
-----------     ----                                               -------    ------
Alias           saps -> Start-Process
Alias           start -> Start-Process
```

> https://docs.microsoft.com/zh-cn/powershell/module/microsoft.powershell.core/about/about_aliases?view=powershell-7.2

**自定义别名**

- `Get-Alias` - 获取当前会话中的所有别名。
- `New-Alias` - 创建新别名。
- `Set-Alias` - 创建或更改别名。
- `Export-Alias` - 将一个或多个别名导出到文件。
- `Import-Alias` - 将别名文件导入 PowerShell。

```powershell
New-Alias -Name gh -Value Get-Help
```



## 常用命令

```powershell
# 列出文件夹下所有文件
ls - Get-ChildItem
# 当前目录位置
pwd - 
# 列出之前的操作命令
h - Get-History
# 删除或删除文件
rm - Remove-Item
# 复制文件
cp - Copy-Item
# 查找进程, 可以通过进程名称或者进程ID来获取特定进程
ps - Get-Process
# 打开当前文件夹
start - Start-Process
# 创建一个新的文本文件
ni - new-item
# 创建一个新的文件
mkdir
# 清空历史记录
cls
```





参考：

https://docs.microsoft.com/zh-cn/powershell/scripting/learn/ps101/05-formatting-aliases-providers-comparison?view=powershell-7.2
https://juejin.cn/post/6854573219232350221#heading-4
https://www.pstips.net/powershell-define-variable.html