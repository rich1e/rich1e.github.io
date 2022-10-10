# cVim for Chrome

## 安装

从 Chrome 应用商店中下载，[cVim](https://chrome.google.com/webstore/detail/cvim/ihlenndgcmojhcghmfjfneahoeklbjjh)。

## Keybindings (部分)

### Movement 移动

| Movement      |              | Mapping name
| ------------- |------------- | -------------
| j, s | scroll down 上 | scrollDown
| k, w | scroll up 下 | scrollUp
| h | scroll left 左 | scrollLeft
| l | scroll right 右 | scrollRight
| d | scroll half-page down 向下移动半屏 | scrollPageDown
| u, e | scroll half-page up 向上移动半屏 | scrollPageUp
| gg | scroll to the top of the page 滚动到页面顶部 | scrollToTop
| G | scroll to the bottom of the page 滚动到页面底部 | scrollToBottom
| 0 | scroll to the left of the page 滚动到页面左侧 | scrollToLeft
| $ | scroll to the right of the page 滚动到页面右侧 | scrollToRight
| gi | go to first input box 定位到页面第一个输入框 | goToInput
| gI | go to the last focused input box by gi 定位到页面最后一个输入框 | goToLastInput
| zz | center page to current search match (middle) 页面中心基于当前的搜索匹配，居中 | centerMatchH
| zt | center page to current search match (top) 页面中心基于当前的搜索匹配，居顶 | centerMatchT
| zb | center page to current search match (bottom) 页面中心基于当前的搜索匹配，居下 | centerMatchB

`zz, zt, zb` 需要配合查找模式

### Link Hints 链接提示

| Link Hints    |              | Mapping name
| ------------- |------------- | -------------
| f | open link in current tab 在当前 tab 打开连接 | createHint
| F | open link in new tab 在新的 tab 打开连接 | createTabbedHint
| W | open link in new window 在新窗口打开连接 | createHintWindow
| A | repeat last hint command | openLastHint
| q | trigger a hover event (mouseover + mouseenter) 触发 hover 事件 | createHoverHint
| Q | trigger a unhover event (mouseout + mouseleave) 触发 unhover 事件 | createUnhoverHint
| mf | open multiple links 在新 tab 打开多个链接 | createMultiHint
| my | yank multiple links (open the list of links with P) 选取多个链接，按 P 将链接打开 | multiYankUrl
| gy | copy URL from link to clipboard 复制 URL 到剪切板 | yankUrl

### QuickMarks 快速标记

| QuickMarks    |              | Mapping name
| ------------- |------------- | -------------
| M<*> | create quickmark <*> | addQuickMark
| go<*> | open quickmark <*> in the current tab | openQuickMark
| gn<*> | open quickmark <*> in a new tab <N> times | openQuickMarkTabbed

### Miscellaneous 杂项

| Miscellaneous |              | Mapping name
| ------------- |------------- | -------------
| a | alias to ":tabnew google" 新 tab 打开 google | :tabnew google
| . | repeat the last command 重复最后一个 command | repeatCommand
| : | open command bar 打开 command 面板 | openCommandBar
| / | open search bar 打开 search 面板 | openSearchBar
| ? | open search bar (reverse search) 打开 search 面板(反向搜索) | openSearchBarReverse
| I | search through browser history 打开历史记录 | history
| gd | alias to :chrome://downloads<CR> 打开下载页 | :chrome://downloads<CR>
| gs | go to the view-source:// page for the current Url 查看源代码 | :viewsource!
| i | enter insert mode (escape to exit) 开启 insert mode | insertMode
| r | reload the current tab 刷新当前页面 | reloadTab
| b | search through bookmarks 打开书签 | :bookmarks
| p | open the clipboard selection 打开剪贴板的选择 | openPaste
| P | open the clipboard selection in a new tab 在新 tab 打开剪贴板的选择 | openPasteTab
| gR | reload the current tab + local cache 刷新当前 tab 和本地缓存 | reloadTabUncached
| cr | reload all tabs but current 刷新除当前 tab 以外的其他 tab | reloadAllButCurrent
| zi | zoom page in 放大页面 | zoomPageIn
| zo | zoom page out 缩放页面 | zoomPageOut
| z0 | zoom page to original size 恢复页面 | zoomOrig
| yy | copy the URL of the current page to the clipboard 复制当前页面的URL | yankDocumentUrl
| yY | copy the URL of the current frame to the clipboard 复制当前 frame 的URL | yankRootUrl
| ya | copy the URLs in the current window 复制当前窗口的所有 URL | yankWindowUrls
| yh | copy the currently matched text from find mode (if any) 从 find mode 中复制当前匹配的文本(如果有的话) | yankHighlight
| gj | hide the download shelf 隐藏下载的 bar | hideDownloadsShelf
| gq | stop the current tab from loading 停止当前 tab 的加载 | cancelWebRequest
| gQ | stop all tabs from loading 停止所有 tab 的加载 | cancelAllWebRequests
| ;<*> | create mark <*> 创建 mark | setMark
| '' | go to last scroll position 回到最后一个 mark | lastScrollPosition
| '<*> | go to mark <*> 定位到 mark | goToMark

`ya` 复制当前窗口的所有 URL，某些场景下特别有用.

### Tab Navigation tab 导航

| Tab Navigation |              | Mapping name
| -------------- |------------- | -------------
| gt, K, R | navigate to the next tab 下一个 tab | nextTab
| gT, J, E | navigate to the previous tab 上一个 tab | previousTab
| x | close the current tab 关闭当前 tab | closeTab
| X | open the last closed tab 恢复最后一个关闭的 tab | lastClosedTab
| t | :tabnew 新开 tab | :tabnew
| T | :tabnew <CURRENT URL> 新开 tab，打开当前 URL | :tabnew @%
| O | :open <CURRENT URL> 打开当前 URL | :open @%
| B | search for another active tab	搜索其他激活的 tab | :buffer
| < | move current tab left 向左移动当前 tab | moveTabLeft
| > | move current tab right 向右移动当前 tab | moveTabRight
| H, S | go back 回退 | goBack
| L, D | go forward 前进 | goForward

### Find Mode 查找模式

| Find Mode      |              | Mapping name
| -------------- |------------- | -------------
| n | next search result 下一个结果 | nextSearchResult
| N | previous search result 上一个结果 | previousSearchResult
| v | enter visual/caret mode (highlight current search/selection) 打开 Visual/Caret Mode，高亮当前显示的搜索 | toggleVisualMode
| V | enter visual line mode from caret mode/currently highlighted search 打开 Visual Line Mode，高亮当前显示的搜索 | toggleVisualLineMode

### Visual/Caret Mode 视图/插入模式

| Visual/Caret Mode |              | Mapping name
| ----------------- |------------- | -------------
| `<Esc>` | exit visual mode to caret mode/exit caret mode to normal mode 退出 Visual/Caret Mode
| v | toggle between visual/caret mode 切换 Visual/Caret Mode
| h, j, k, l | move the caret position/extend the visual selection 上下左右，移动
| y | copys the current selection 复制当前选中
| n | select the next search result 下一个结果
| N | select the previous search result 上一个结果
| p | open highlighted text in current tab 在当前 tab 打开高亮的文本
| P | open highlighted text in new tab 在新的 tab 打开高亮的文本

## Command Mode

不常用。有兴趣的童鞋可以自行查看。

## 参考

[chromium-vim](https://github.com/1995eaton/chromium-vim)
