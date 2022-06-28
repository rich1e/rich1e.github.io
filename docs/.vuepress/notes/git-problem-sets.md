title: Git Problem Sets
date: 2014/12/15 22:46:25
categories: technology
tag: git
---

	Command: git mv
	Show: fatal: destination exists
	To solve: git mv --force
	Describe: 当重命名时，如果只是重命名文件名称的大小写，需要加上 --force 参数

	Command: git reset, git clean
	Show:
	To solve: git reset --hard && git clean -xdf
	Describe: 多余的文件且没被追踪，需要删除

**Problem Sets**

- warning: LF will be replaced by CRLF | fatal: CRLF would be replaced by LF

		在Mac上设置 autocrlf = input, 在Windows上设置autocrlf = true（默认值）。
		Windows：（true）
		提交时，将CRLF 转成 LF再提交；
		切出时，自动将LF 转为 CRLF;

		MAC/Linux:	(input)
		提交时,   将CRLF 转成 LF再提交；
		切出时，保持LF即可

		这样即可保证仓库中永远都是LF. 而且在Windows工作空间都是CRLF, 在Mac/Linux工作空间都是LF.

	[ [git] warning: LF will be replaced by CRLF | fatal: CRLF would be replaced by LF](http://blog.csdn.net/feng88724/article/details/11600375)