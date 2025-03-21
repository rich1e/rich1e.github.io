#vscode #vim 

`vim-surround` 插件可以快速编辑围绕在内容两端的字符（pairs of things surrounding things），比如成对出现的括号、引号，甚至HTML/XML标签等。

| 命令                         | 描述                               |
| -------------------------- | -------------------------------- |
| `y s <motion> <desired>`   | 添加 `desired` 环绕文本在 `<motion>` 范围 |
| `d s <existing>`           | 删除 `<existing>` 环绕               |
| `c s <existing> <desired>` | 改变 `<existing>` 环绕               |
| `S <desired>`              | 在 `visual modes` 中环绕选中内容         |
|                            |                                  |


参考

[GitHub - tpope/vim-surround: surround.vim](https://github.com/tpope/vim-surround)
[进入包围圈：感受 vim-surround 神器的威力 | Just Vim It](https://vim.nauxscript.com/vim/day-12.html#vim-surround)
[vim-surround使用指南，vim-surround如何使用](https://gist.github.com/wilon/ac1fc66f4a79e7b0c161c80877c75c94)
[Macbook 修改最近路径列表 Recent Places 数量 - 腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1529950?cps_key=1d358d18a7a17b4a6df8d67a62fd3d3d)
[VIM学习笔记 环绕字符编辑(surround)](http://yyq123.github.io/learn-vim/learn-vim-plugin-surround.html)
[Vim 两款插件介绍：vim-surround 与 vim-commentary - 掘金](https://juejin.cn/post/6994406794286071838)
