---
title: Fast Configure Of Sublime Text
tags: ["sublime"]
notebook: learning 学习
---

# Fast Configure Of Sublime Text

我是一枚 **FE**，接触 `Sublime Text` 有几年时间了，一直在 `windows` 和 `osx` 两个平台上使用，感觉非常的棒！这期间有很多心得和总结想要跟大家分享，所以写了此文。

*本文欲打造一个**`最小学习成本`**又可快速投入使用的**入门配置**。*

倘若你已急不可耐，可以略过其他，根据 **Edit Configuration File** 直接配置 `Sublime Text` 。如有兴致也可以细细评味本文其他内容。

## Install Package Control

**Sublime Text 3**

```
import urllib.request,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); urllib.request.install_opener( urllib.request.build_opener( urllib.request.ProxyHandler()) ); by = urllib.request.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); print('Error validating download (got %s instead of %s), please try manual install' % (dh, h)) if dh != h else open(os.path.join( ipp, pf), 'wb' ).write(by)
```

**Sublime Text 2**

```
import urllib2,os,hashlib; h = '2915d1851351e5ee549c20394736b442' + '8bc59f460fa1548d1514676163dafc88'; pf = 'Package Control.sublime-package'; ipp = sublime.installed_packages_path(); os.makedirs( ipp ) if not os.path.exists(ipp) else None; urllib2.install_opener( urllib2.build_opener( urllib2.ProxyHandler()) ); by = urllib2.urlopen( 'http://packagecontrol.io/' + pf.replace(' ', '%20')).read(); dh = hashlib.sha256(by).hexdigest(); open( os.path.join( ipp, pf), 'wb' ).write(by) if dh == h else None; print('Error validating download (got %s instead of %s), please try manual install' % (dh, h) if dh != h else 'Please restart Sublime Text to finish installation')
```

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

# [PlantUML 画图](https://github.com/jvantuyl/sublime_diagram_plugin)
Sublime_diagram_plugin
```

## Edit Configuration File

打开 Preferences -> Settings - User，在 Preferences.sublime-settings 中编辑：

```
// Settings in here override those in "Default/Preferences.sublime-settings",
// and are overridden in turn by file type specific settings.
{
  // Theme && Color
  "color_scheme": "Packages/Color Scheme - Default/Solarized (Dark).tmTheme",

  // File settings
  "default_encoding": "UTF-8",
  "word_separators": "./\\()\"':,.;<>~!@#%^&*|+=[]{}`~?",

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
  "scroll_speed": 5.0,
  "highlight_modified_tabs": true,

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
  "tab_size": 2,
  "translate_tabs_to_spaces": false,
  "trim_trailing_white_space_on_save": true,
  "ensure_newline_at_eof_on_save": true,

  // Sidebar - exclude distracting files and folders
  "file_exclude_patterns":
  [
  ],
  "folder_exclude_patterns":
  [
  ],

  // Vi
  "vintage_ctrl_keys": true,
  "vintage_start_in_command_mode": false,

  // Other
  "show_full_path": true,
  "show_encoding": true,

  // Close update
  "update_check": false
}
```

## Add Right-Click Menu by Windows

```
Windows Registry Editor Version 5.00

[HKEY_CLASSES_ROOT\*\shell\Open with Sublime Text 3]
"Icon"="D:\\Program Files\\Sublime Text Build 3083 x64\\sublime_text.exe,0"

[HKEY_CLASSES_ROOT\*\shell\Open with Sublime Text 3\command]
@="D:\\Program Files\\Sublime Text Build 3083 x64\\sublime_text.exe %1"
```

将以上代码保存为`.reg`文件，点击执行就可以加入右键菜单了。

（Ps：sublime 安装路径需以实际情况自行修改）

## OS X Command Line

**Sublime 3**

`ln -s "/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl" ~/bin/subl`

**Sublime 2**

`ln -s "/Applications/Sublime Text 2.app/Contents/SharedSupport/bin/subl" ~/bin/subl`

## Vintage Mode

osx 光标移动延迟，需要在命令中输入：

`defaults write com.sublimetext.2 ApplePressAndHoldEnabled -bool false`

## Set Keymap

```
{ "keys": ["j", "j"], "command": "exit_insert_mode",
  "context":
  [
    { "key": "setting.command_mode", "operand": false },
    { "key": "setting.is_widget", "operand": false }
  ]
}
```

## Reference

[Package Control](https://packagecontrol.io/installation)

[Vintage Mode](https://www.sublimetext.com/docs/3/vintage.html)
