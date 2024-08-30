---
- id: 8657024a-dc2d-4cc2-ae2a-66e0c6f9f9f3
---

%%8657024a-dc2d-4cc2-ae2a-66e0c6f9f9f3_start%%
# 在 macOS 下为 Markdown 文件开启全文检索 | Piglei
#Omnivore

[Read on Omnivore](https://omnivore.app/me/mac-os-markdown-piglei-1890b216982)
[Read Original](https://www.piglei.com/articles/macos-spotlight-markdow)

曾经的我一直使用 Evernote + 马克飞象来记录笔记和文档。不过感觉这两个工具越来越不思进取，几年都没什么变化。所以，一年多以前，我就把所有笔记迁移成本地 Markdown 文件，配合 Dropbox 来实现云端同步。

在新方式下，我用的 Markdown 编辑器是 [Markeditor](http://markeditor.com/app/markeditor)，这个编辑器有很多优点：渲染好看、格式支持多等等。但也有不少缺点，比如技术架构陈旧，性能不佳。不过这些毛病都是次要的，MarkEditor 最大的问题是：**没有全文检索能力**。

之前使用 Evernote 时，它的文档搜索功能很强大。而相比之下， Markeditor 的搜索功能只能充当个 grep 命令行工具用：

￼![](https://proxy-prod.omnivore-image-cache.app/0x0,sqOP9H7jmLBBFTaBmAsfMgQZZi-5riZ2FCaUcN4zSf0Q/http://www.zlovezl.cn/static//uploaded/2017/10/2017-10-30-07-46-27_thumb.jpg)

_Markeditor 尴尬的搜索功能_

随着本地文档越来越多，我对全文检索的需求也越来越强。在第 N 次无法快速找到我要的文档后，我准备自己用 ==Python + jieba 实现一个支持中文分词的本地文档检索工具==。

不过，在动手前，我突然想到： macOS 自带的 Spotlight 不是支持全文检索吗？为什么不直接用 Spotlight 来检索 Markdown 文档呢？

## 调整 Spotlight 来检索 Markdown 文档

Spotlight 是 macOS 自带的搜索工具，提供搜索和快速跳转功能。**但在默认配置下，Spotlight 不会索引以 .md 后缀名结束的 Markdown 文件。**不过通过一些配置，我们可以改变这点：

* 下载这份 [Spotlight 使用的 importer 文件](http://www.zlovezl.cn/static/uploaded/2017/10/Markdown.mdimporter.zip) _文件来源在文章末尾_
* 解压后放置到 `~/Library/Spotlight/` 目录
* 执行 `mdimport -r ~/Library/Spotlight/Markdown.mdimporter` 来让 Spotlight 手动加载 importer 文件

因为 Spotlight 并不会实时更新索引，所以你需要触发强制更新：

* 打开 `System Preferences` \-> `Spotlight`
* 点击 `Privacy` Tab 页面
* 将你的文档所在目录添加到列表中，随后删除

之后 Spotlight 便会重建索引。等一会后，你就可以用 Spotlight 搜到你的 Markdown 文件了。

### 限制目录进行全文检索

Spotlight 默认会搜索所有目录的所有文档，如果你只想搜索某个特定的文件夹，可以使用 Spotlight 的命令行工具：`mdfind`

```groovy
$ mdfind "django postgresql ORM" -onlyin ~/Dropbox/Documents/MDDocuments
~/Dropbox/Documents/MDDocuments/技术笔记/数据库/PostgreSQL Sharding 方案研究.md

```

如果你是 Alfred 用户，那你可以基于这个命令做一个 Workflow，专门用来检索你的 Markdown 目录，就像这样：

￼￼![](https://proxy-prod.omnivore-image-cache.app/0x0,s4Uy-vHDioy9gmCM6bEpJnW3gAIzX5FKARtV-fHqNmkM/http://www.zlovezl.cn/static//uploaded/2017/10/2017-10-31-07-56-52_thumb.jpg)

_我配置的 Alfred Workflow_

配置完这些后，终于可以安逸的安逸的快速搜索文档了。感谢 Spotlight，让我又少造了一个轮子。（擦汗）

---

\[1\] [Fixing Spotlight indexing of Markdown content - BrettTerpstra.com](http://brettterpstra.com/2011/10/18/fixing-spotlight-indexing-of-markdown-content/)


%%8657024a-dc2d-4cc2-ae2a-66e0c6f9f9f3_end%%