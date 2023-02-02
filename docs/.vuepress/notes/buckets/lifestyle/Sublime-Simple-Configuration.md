# Sublime Simple Configuration

## Edit Configuration File

打开 Preferences -> Settings - User，在 Preferences.sublime-settings 中编辑：

```
// Settings in here override those in "Default/Preferences.sublime-settings",
// and are overridden in turn by file type specific settings.
{

    // Font
    "font_size": 13,
    "font_face": "Source Code Pro",
	"font_options":
	[
		"directwrite"
	],
    "line_padding_top": 0,
    "line_padding_bottom": 0,

    // Cursor style
	"wide_caret": true,
	"caret_style": "phase",
	"caret_extra_bottom": 0,
	"caret_extra_top": 0,
	"caret_extra_width": 3,

    // Editor behavior
    "auto_complete": true,
    "scroll_past_end": false,
    "highlight_modified_tabs": true,
    "word_separators": "./\\()\"':,.;<>~!@#%^&*|+=[]{}`~?",
	"default_encoding": "UTF-8",

	// Editor view look-and-feel
    "highlight_line": true,
    "enable_tab_scrolling": false,
    "line_numbers": true,
    "gutter": true,
    "draw_centered": false,
	"draw_minimap_border": true,
    "fold_buttons": false,

	// Word wrapping - follow PEP 8 recommendations
	"rulers": [ 72, 79 ],
    "word_wrap": true,
    "wrap_width": 80,

    // Ignore set
	"ignored_packages":
	[
		"Vintage"
	],

	// Whitespace
    "tab_size": 4,
    "translate_tabs_to_spaces": false,
    "trim_trailing_white_space_on_save": true,
    "ensure_newline_at_eof_on_save": true,

	// Sidebar - exclude distracting files and folders
	"file_exclude_patterns":[
	    ".gitignore",
	    ".gitattributes"
	],
	"folder_exclude_patterns":
	[
	    ".svn",
	    ".git",
	    "node_modules"
	],

	// Other
	"show_full_path": true,
	"show_encoding": true,

    // Close update
    "update_check": false
}
```

## Install Package Control

### Sublime Text 3

```
import urllib.request,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```

### Sublime Text 2

```
import urllib2,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler()) ); by = urllib2.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); open( os.path.join( ipp, pf), 'wb' ).write(by) if dh == h else None; print('Error validating download (got %s instead of %s), please try manual install' % (dh, h) if dh != h else 'Please restart Sublime Text to finish installation')
```

[Reference](https://packagecontrol.io/installation)

## Install Plug-in

```
# 自动化
AllAutocomplete

# 自动匹配文件名
AutoFileName

# Bracket Highlighter 匹配等多种括号: [], (), {}, "", '', <tag></tag>, 甚至定制的 Bracket。
BracketHighlighter

#　支持多种编码，解决中文乱码问题。
ConvertToUTF8　

# javascript 文档注释块
DocBlockr

# HTML\CSS 编写神器，提供特殊的简写语法。
Emmet

# Evernote 支持
Evernote

# 在可视区域内查找文本，并快速编辑
EasyMotion

# 文件对比工具，支持第三方对比工具。
FileDiffs

# 查找冲突的快捷键
FindKeyConflicts

# `format` HTML\CSS\JS，混合也支持。
HTML-CSS-JS Prettify

# 显示一个图标在行号里区域指示是否一行被插入,修改或删除。
GitGutter

# 样式修改工具
LiveStyle

# 清除多余空格
TrailingSpaces

# `format` JSON数据
Pretty JSON

# 主题
Predawn

# `Side Bar` 高级功能扩展
SideBarEnhancements

# 代码检查
SublimeLinter

# `Javascript` 语法检查
SublimeLinter-jshint

# `Javascript` 格式检查
SublimeLinter-jscs

# `org mode` 扩展支持
orgmode

# 支持 `Todo` `task`
PlainTasks
```

## Vintage Mode

Vintage 是 Sublime Text 的 vi 模式编辑包。 可以使用组合 vi 命令来调用 Sublime Text 的功能，包括多重选择。

### 启用 Vintage

Vintage 默认是禁用的， 通过 ignored_packages 配置。如果要从 ignored packages 列表中移除 "Vintage" 的话可以通过下面的方式编辑:

1. 选择 Preferences/Settings - Default 菜单
2. 编辑 ignored_packages 配置, 修改:

	` "ignored_packages": ["Vintage"]`

	成:

	`"ignored_packages": []`

	然后保存文件。
3. Vintage模式则已启用——你可以看到"INSERT MODE"显示在状态栏了。

Vintage 默认是插入模式。可以添加:

```
"vintage_start_in_command_mode": true
```

这项配置到 User Settings 里。

更多内容，可以参考 [Vintage Mode 官方](http://www.sublimetext.com/docs/3/vintage.html)，[Vintage Mode 中文](http://feliving.github.io/Sublime-Text-3-Documentation/vintage.html)。

### Plug-in Support

Vintageous，增强 vi 功能。

```
{"keys": ["ctrl+shift+`"], "command": "toggle_vintageous"}
```

VintageLines，vi 模式下，修改行号显示方式。

```
{"keys": ["ctrl+alt+t"], "command": "toggle_setting", "args": {"setting": "vintage_lines.force_mode"}}
```

### Settings

Vintage 支持下面这些ctrl key的绑定:

- Ctrl+[: Escape
- Ctrl+R: Redo
- Ctrl+Y: Scroll down one line
- Ctrl+E: Scroll up one line
- Ctrl+F: Page Down
- Ctrl+B: Page Up

不过，因为这些会与Sublime Text的其它键盘绑定冲突，Windows和Linux下默认是禁用的。可以通过vintage_ctrl_keys来配置:

```
"vintage_ctrl_keys": true
```

控制窗口

```
// `,cc` close window
{ "keys": [",", "c", "c"], "command": "close",
    "context": [{"key": "setting.vintage_ctrl_keys"}, {"key": "setting.command_mode"}]
},

// `,k` move window focus up
{ "keys": [",", "k"], "command": "move_group_focus",
    "args": {"direction": "up"},
    "context": [{"key": "setting.vintage_ctrl_keys"}, {"key": "setting.command_mode"}]
},

// `,j` move window focus down
{ "keys": [",", "j"], "command": "move_group_focus",
    "args": {"direction": "down"},
    "context": [{"key": "setting.vintage_ctrl_keys"}, {"key": "setting.command_mode"}]
},

// `,l` move window focus right
{ "keys": [",", "l"], "command": "move_group_focus",
    "args": {"direction": "right"},
    "context": [{"key": "setting.vintage_ctrl_keys"}, {"key": "setting.command_mode"}]
},

// `,h` move window focus left
{ "keys": [",", "h"], "command": "move_group_focus",
    "args": {"direction": "left"},
    "context": [{"key": "setting.vintage_ctrl_keys"}, {"key": "setting.command_mode"}]
}
```

### Usage

```
# 基本移动

h, j, k, l   （左下上右）

# 光标移动

H, 移到屏幕顶端的行-home

M, 移到屏幕中央的行-middle

L, 移到屏幕底端的行-last

G, 直接跳转到文件的底部

gg, 跳转到文件首

nH, 移到屏幕顶端往下的第n行

nL, 移到屏幕底端网上的第n行

# 单词移动

w, 光标移动到下一个单词的首字母前

e, 光标移动到所在单词的最后字符前

b, 光标移动到上一个单词的首字母前

# 行内移动

0, 光标移动到所在行的行首

$, 光标移动到所在行的行末

^, 光标移动到所在行开始的第一个非空字符

# 段落移动

{, 移动至上一段落的换行

}, 移动至下一段落的换行

%, 可以匹配{},"",(),[]之间跳转。

# 屏幕移动

^F, 屏幕向下滚动一屏

^B, 屏幕向上滚动一屏

^E, 屏幕向下滚动一行

^Y, 屏幕向上滚动一行

^D, 屏幕向下滚动半屏

^U, 屏幕向上滚动半屏

# 重绘当前屏幕

zt, 当前所在行置为屏幕顶。

zz, 当前所在行置为屏幕中。

zb, 当前所在行置为屏幕底。

50%, 光标定位在文件的中间

# 标记

m {a-zA-Z}, 保存书签，小写的是文件书签，可以用(a-z）中的任何字母标记。大写的是全局 书签，用大写的(A-Z)中任意字母标记。

' {a-zA-Z}, 跳转到某个书签。如果是全局书签，则会开启被书签标记的文件跳转至标记的行。

'0, 跳转入现在编辑的文件中上次退出的位置

", 跳转如最后一次跳转的位置

'", 跳转至最后一次编辑的位置

g'{mark}, 跳转到书签
```
