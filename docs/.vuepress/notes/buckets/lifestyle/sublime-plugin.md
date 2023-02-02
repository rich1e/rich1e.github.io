title: Sublime Text 学习笔记
date: 2014/12/30 22:46:25
categories: tools
tag: sublime
---

## Preferences.sublime-settings

然而在 Windows 和 Linux 上，這些按鍵會與 Sublime Text 2 原本的一些快捷鍵衝突，所以這些快捷鍵預設是關閉的，你可以在偏好設定裡加上以下這行來啟用：

	"vintage_ctrl_keys": true

## sublime plugin

	# 自动对齐代码
	Alignment

	# 自动匹配文件名
	AutoFileName

	# 自动补齐 `css` 前缀
	Autoprefixer

	# Bracket Highlighter 匹配等多种括号: [], (), {}, "", '', <tag></tag>, 甚至定制的 Bracket。
	BracketHighlighter

	#　支持多种编码，解决中文乱码问题。
	ConvertToUTF8　

	# 历史剪切板
	Clipboard History

	# 颜色取色器
	Color​Picker

	# javascript 文档注释块
	DocBlockr

	# HTML\CSS 编写神器，提供特殊的简写语法。
	Emmet

	# 在可视区域内查找文本，并快速编辑
	EasyMotion

	# 帮助开发者在不同的编辑器，IDE之间定义和维护统一的编程风格。EditorConfig工程包含一个文件，定义了编程风格，文本编辑器插件集合，让编辑器可以读取该文件并依照它来定义风格。
	EditorConfig

	# 协作编程
	Floobits

	# 文件对比工具，支持第三方对比工具。
	FileDiffs

	# `format` HTML\CSS\JS，混合也支持。
	HTML-CSS-JS Prettify

	# 颜色转化
	Hex-to-HSL-Color

	# `format` HTML\CSS\JS，混合也支持。
	Hayaku

	# 定位 `css` 定义所在位置
	Goto-CSS-Declaration

	# 转码工具
	GBK to UTF8

	# `gist` 代码管理工具。
	Gist

	# 如名， Sulime Text 中集成 Git
	Git

	# 显示一个图标在行号里区域指示是否一行被插入,修改或删除。
	GitGutter

	# 类似 GitGutter
	Modific

	# `less` 转化为 `css`
	Less2Css

	# 样式修改工具
	LiveStyle

	# 自动刷新浏览器
	LiveReload

	# 清除多余空格
	TrailingSpaces

	# `format` JSON数据
	Pretty JSON

	# `Side Bar` 高级功能扩展
	SideBarEnhancements

	# `Javascript` 语法检查
	SublimeLinter

	# `Javascript` 类、模块预编译
	SublimeCodeIntel

	# `css` 顺序排列
	sublime-csscomb

	# 自动化
	SublimeAllAutocomplete

	# 标签|标记|折叠
	BufferScroll

	# `org mode` 扩展支持
	orgmode

	# 支持 `Todo` `task`
	PlainTasks

	# `vi` 扩展
	Vintageous

	# `vi` 模式下，修改行号显示方式
	VintageLines

	# sublime && vim 两个最爱的编辑器合二为一
	actualvim

	# `markdown` 支持
	MarkdownEditing

	# markdown 预览插件
	markdown preview　　　　

	# 调试工具，需要配合 Chrome
	Web Inspector

	# 可以快速获取文件或库
	Nettuts+ Fetch

## VI 操作

#### 基本编辑

	i：在当前字符前面进入输入模式  (i=insert)

	I：在当前行前面进入输入模式

	o：插入一个新行，并且进入输入模式

	O：上一行插入一个新行，并且进入输入模式

	a：在当前字符后面进入输入模式  (a=append)

	A：在当前行后面进入输入模式

	s：删除当前字符并且进入输入模式

	S：删除当前行并且进入输入模式

	r：替换当前字符

	R：替换当前字符及其后的字符【当前及其后字符被覆盖】


	u：撤销最后一次更改

	U：撤销光标所在行的所有更改


	nx：删除由光标位置起始后的n个字符（含光标位置）x =dl(删除当前光标下的字符)

	nX：删除由光标位置起始前的n个字符（含光标位置）X =dh(删除当前光标左边的字符)

	d0：删至行首

	d$：删至行尾

	dfa：表示删除从当前光标到光标后面的第一个a字符之间的内容

	dd：删除一行（3dd：删除3行）

	D：代表d$(删除到行尾的内容)

	C：代表c$(修改到行尾的内容)


	yy：复制当前行
	p：粘贴到下一行
	P：粘贴到上一行


	n：查找下一个
	N：查找上一个
	/：进入查找模式，向下搜索
	?：进入查找模式，向上搜索


	:w  保存
	:x|:wq   保存并退出
	:q!  不保存并退出


	\>>:    右移两个tab

	\<<:    左移两个tab


	zf: 折叠（需加方向键）

	zo: 展开（空格也可以展开）



#### 基本移动

	h, j, k, l   （左下上右）

#### 光标移动

	H, 移到屏幕顶端的行-home

	M, 移到屏幕中央的行-middle

	L, 移到屏幕底端的行-last

	G, 直接跳转到文件的底部

	gg, 跳转到文件首

	nH, 移到屏幕顶端往下的第n行

	nL, 移到屏幕底端网上的第n行

#### 单词移动

	w, 光标移动到下一个单词的首字母前

	e, 光标移动到所在单词的最后字符前

	b, 光标移动到上一个单词的首字母前

#### 行内移动

	0, 光标移动到所在行的行首

	$, 光标移动到所在行的行末

	^, 光标移动到所在行开始的第一个非空字符

#### 段落移动

	{, 移动至上一段落的换行

	}, 移动至下一段落的换行

	%, 可以匹配{},"",(),[]之间跳转。

#### 屏幕移动

	^F, 屏幕向下滚动一屏

	^B, 屏幕向上滚动一屏

	^E, 屏幕向下滚动一行

	^Y, 屏幕向上滚动一行

	^D, 屏幕向下滚动半屏

	^U, 屏幕向上滚动半屏

#### 重绘当前屏幕 ###

	zt, 当前所在行置为屏幕顶。

	zz, 当前所在行置为屏幕中。

	zb, 当前所在行置为屏幕底。

	50%, 光标定位在文件的中间

#### 标记 ###

	m {a-zA-Z}, 保存书签，小写的是文件书签，可以用(a-z）中的任何字母标记。大写的是全局 书签，用大写的(A-Z)中任意字母标记。

	' {a-zA-Z}, 跳转到某个书签。如果是全局书签，则会开启被书签标记的文件跳转至标记的行。

	'0, 跳转入现在编辑的文件中上次退出的位置

	", 跳转如最后一次跳转的位置

	'", 跳转至最后一次编辑的位置

	g'{mark}, 跳转到书签


## 参考

[推荐！Sublime Text 最佳插件列表](http://blog.jobbole.com/79326/)

[Sublime Text 有哪些实用技巧？](http://www.zhihu.com/question/19976788)

[Linux新手生存笔记——vim训练稿](http://blog.csdn.net/wklken/article/details/7533272)

[我的Sublime Text 3配置 and vim conf](http://blog.csdn.net/jokes000/article/details/17794375)

[vim](http://blog.51yip.com/linux/1140.html)

[vi 命令 用法](http://blog.csdn.net/xueziheng/article/details/2048054)

[Vintage模式](http://feliving.github.io/Sublime-Text-3-Documentation/vintage.html)

[VintageEx](https://github.com/SublimeText/VintageEx)

[Sublime 下配置vim模式](http://blog.csdn.net/iamduoluo/article/details/7890905)

[sublime-EasyMotion](https://github.com/tednaleid/sublime-EasyMotion)

[SublimeCodeIntel](https://github.com/SublimeCodeIntel/SublimeCodeIntel)

[hayaku](https://github.com/hayaku/hayaku)

[Nettuts-Fetch](https://github.com/weslly/Nettuts-Fetch)

[Sublime Text 手冊](http://docs.sublimetext.tw/basic-concepts/)

[Javascript autocompletions and having one for Sublime Text 2](http://opensourcehacker.com/2013/03/04/javascript-autocompletions-and-having-one-for-sublime-text-2/)

[Sublime Text 2 系列](http://www.camdemy.com/media/6118)