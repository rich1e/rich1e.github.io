#vscode #vim

## 什么是 `motion` 和 `operator` ?

`motion` 可以理解为**字符范围**，分类如： 
- `Words motions` `w` 移光标至下一词 `b` 移光标至上一词 `e` 移光标至词末 
- `Left-right motion` `h` 光标向左移一字节 `l` 光标向右移一字节 `$` 移光标至行末 `0` 移光标至行首 `^` 移光标至本行首个非空格的字节 
- `Up-down motions` `j` 光标向下移一行 `k` 光标向上移一行  `gg` 移光标至整个文本的首行首个非空格字节 `G` 移光标至整个文本最后一行首个非空格字节 
- `Other motions` `%` 移光标至匹配括号的另一端 `H` 移光标至窗口第一行 `M` 移光标至窗口中间一行 `L` 移光标至窗口最后一行

`operator` 为**操作**，如 `d` `c` `s` `x` `f`，vim 中的增删改查命令都可以理解为 `operator`

## 什么是 `<Leader>` ？

vim 中有很多快捷键，还有各种扩展插件，为了避免按键冲突以及丰富按键的组合，则推出了 `<Leader>` 的概念，即前缀键或扩展组合键，通过配置 `<Leader>` + 其他按键，来拓展出更多可用的组合键。

参考：

[VSCodeVim: 本中文版](https://github.com/ugvibib/VSCodeVim-zh_cn)
[Vscode vim 使用中文版说明 - Cloudhan - 博客园](https://www.cnblogs.com/cloudhan/p/17036297.html)
[vscode 使用技巧 - 简书](https://www.jianshu.com/p/afafce82ab1b)
[鱼和熊掌:VSCode+Vim - 简书](https://www.jianshu.com/p/41c759d543b7)
[算法&数据结构 - 文集 - 简书](https://www.jianshu.com/nb/134966)
[VSCode Vim进阶操作 - 简书](https://www.jianshu.com/p/cbfa86c8d8a5)
[Imymirror/mirror-vscode: Spacemacs like keybindings for Visual Studio Code](https://github.com/Imymirror/mirror-vscode)
[写给 VS Code 用户的 Vim 入坑指南 - Yuexun's Blog](https://www.yuexun.me/blog/the-vim-guide-for-vs-code-users)
[VSCodeVim/Vim: Vim for Visual Studio Code](https://github.com/VSCodeVim/Vim/#key-remapping)
[乘胜追击：文件与窗口基础操作 | Just Vim It](https://vim.nauxscript.com/vscode/day-19.html)
[在 VS Code 中流畅的使用 vim（持续更新） - 掘金](https://juejin.cn/post/7134701599833882655)
[完全用 Vim 工作 | Harttle Land](https://harttle.land/vim-practice.html)
[干活向的 vim 配置](https://a-wing.top/vim/2021/03/21/work_vim_config)