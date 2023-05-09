#git 

## 基础使用

```git
git blame <filename>
```

> 不会显示任何关于已删除或替换的行的信息。

## 指定范围

指定行数

```git 
git blame -L <start>[,<end>] <filename>
```

函数区块

```git
git blame -L:<funcname> <filename>
```

> 只能识别文件最外层的方法名和类名。

正则匹配

```git 
git blame -L /regex/ <filename>
```

版本或者时间

```git
# v2.6.18版本之前
git blame v2.6.18.. -- foo
# 3周之前
git blame --since=3.weeks -- foo
```

## 输出格式

计算每个作者的行数

```git
git blame --line-porcelain file | sed -n 's/^author //p' | sort | uniq -c | sort -rn
```


FQA

如何在不破坏Git历史记录的情况下引入代码格式化程序？

```git
git blame --ignore-rev <commit-id> -L <start>[,<end>] <filename>
```

Ref

[How to introduce a code formatter without messing up Git history | by Ali Kamalizade | CodeX | Medium](https://medium.com/codex/how-to-introduce-a-code-formatter-without-messing-up-git-history-4a16bd074c10)
[Ignoring mass reformatting commits with git blame – Rob Allen](https://akrabat.com/ignoring-revisions-with-git-blame/)
[git blame | Atlassian Git Tutorial](https://www.atlassian.com/git/tutorials/inspecting-a-repository/git-blame)
[Git blame 查看代码是谁写的 | 温欣爸比的博客](https://wxnacy.com/2019/05/21/git-blame/)
[Git - git-blame Documentation](https://git-scm.com/docs/git-blame)
