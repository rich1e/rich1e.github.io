---
tags: ["git"]
---

# git helper

[Git error: Unable to append to .git/logs/refs/remotes/origin/master: Permission denied](https://stackoverflow.com/questions/2642836/git-error-unable-to-append-to-git-logs-refs-remotes-origin-master-permission)

```shell
# run this from the root of the git working tree
sudo chown -R "${USER:-$(id -un)}" .
```

rich1e is not in the sudoers file.  This incident will be reported.

> 没有权限

