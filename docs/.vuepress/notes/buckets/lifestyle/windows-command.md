# Windows command tools

<!-- MarkdownTOC -->

- [Babun - a windows shell you will love](#babun---a-windows-shell-you-will-love)
- [Cmder - Portable console emulator for Windows](#cmder---portable-console-emulator-for-windows)
- [Settings](#settings)
- [Nodejs](#nodejs)
- [Subversion](#subversion)
- [FAQ](#faq)
- [Reference](#reference)

<!-- /MarkdownTOC -->

## Babun - a windows shell you will love

http://babun.github.io/

## Cmder - Portable console emulator for Windows

http://cmder.net/

## Settings

打开 Babun, 执行 `babun check`，检查安装是否成功。

    { ~ }  » babun check                                                                         ~
    Executing babun check
    Prompt speed      [OK]
    Connection check  [OK]
    Update check      [OK]
    Cygwin check      [OK]

*babun check 用于判断环境是否正确*

*babun update 用于判断是否有新的更新包*

**babun 自带 *pact*  包管理**

    { ~ }  » pact --help
    pact: Installs and removes Cygwin packages.

    Usage:
      "pact install <package names>" to install given packages
      "pact remove <package names>" to remove given packages
      "pact update <package names>" to update given packages
      "pact show" to show installed packages
      "pact find <patterns>" to find packages matching patterns
      "pact describe <patterns>" to describe packages matching patterns
      "pact packageof <commands or files>" to locate parent packages
      "pact invalidate" to invalidate pact caches (setup.ini, etc.)
    Options:
      --mirror, -m <url> : set mirror
      --invalidate, -i       : invalidates pact caches (setup.ini, etc.)
      --force, -f : force the execution
      --help
      --version

`.minttyrc` 配置文件：

    BackgroundColour=57,56,57
    ForegroundColour=238,238,238
    CursorColour=238,238,238
    Black=0,0,0
    BoldBlack=89,89,89
    Red=229,32,130
    BoldRed=238,105,171
    Green=130,229,32
    BoldGreen=171,238,105
    Yellow=229,130,32
    BoldYellow=238,171,105
    Blue=32,130,229
    BoldBlue=105,171,238
    Magenta=130,32,229
    BoldMagenta=171,105,238
    Cyan=32,229,130
    BoldCyan=105,238,171
    White=238,238,238
    BoldWhite=255,255,255
    Transparency=medium
    OpaqueWhenFocused=no
    CursorType=block
    BoldAsFont=yes
    AllowBlinking=no
    Columns=120
    Rows=40
    Font=Source Code Pro Medium
    FontHeight=12
    CursorBlinks=no
    BellTaskbar=no

[pip](https://github.com/pypa/pip)

    wget https://bootstrap.pypa.io/get-pip.py -O - | python

[zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)

1. Clone this repository into $ZSH_CUSTOM/plugins (by default ~/.oh-my-zsh/custom/plugins)

        $ git clone git://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions

2. Add the plugin to the list of plugins for Oh My Zsh to load:

        plugins=(zsh-autosuggestions)

3. Start a new terminal session, or:

        $ source ~/.zshrc

[autojump](https://github.com/wting/autojump)

1. Grab a copy of autojump:

        $ git clone git://github.com/joelthelion/autojump.git $ZSH_CUSTOM/plugins/autojump && cd $ZSH_CUSTOM/plugins/autojump

2. Run the installation script and follow on screen instructions.

        ./install.py or ./uninstall.py

3. Please manually add the following line(s) to ~/.zshrc:

        [[ -s /home/gongyuqi/.autojump/etc/profile.d/autojump.sh ]] && source /home/gongyuqi/.autojump/etc/profile.d/autojump.sh

        autoload -U compinit && compinit -u

Please restart terminal(s) before running autojump.

[gitflow-avh](https://github.com/petervanderdoes/gitflow-avh)

1. If you prefer a manual installation, please use the following instructions:

        $ git clone git://github.com/petervanderdoes/gitflow.git $ZSH_CUSTOM/plugins/gitflow && cd $ZSH_CUSTOM/plugins/gitflow

2. Then, you can install git-flow, using:

        $ sudo make install

[git-extras](https://github.com/tj/git-extras)

1. If you prefer a manual installation, please use the following instructions:

        $ git clone https://github.com/tj/git-extras.git $ZSH_CUSTOM/plugins/git-extras && cd $ZSH_CUSTOM/plugins/git-extras

2. Then, you can install git-extras, using:

        $ sudo make install

> Note: If you are a zsh user, you may want to 'source /home/gongyuqi/.oh-my-zsh/custom/plugins/git-extras//etc/git-extras-completion.zsh' and put this line into ~/.zshrc to enable zsh completion

[zsh-syntax-highlighting](https://github.com/zsh-users/zsh-syntax-highlighting)

1. If you prefer a manual installation, please use the following instructions:

        $ git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting

2. Add the plugin to the list of plugins for Oh My Zsh to load:

        plugins=(zsh-syntax-highlighting)

3. Start a new terminal session. or:

        $ source ~/.zshrc

[zsh-completions](https://github.com/zsh-users/zsh-completions)

1. If you prefer a manual installation, please use the following instructions:

        $ git clone https://github.com/zsh-users/zsh-completions $ZSH_CUSTOM/plugins/zsh-completions

2. Add the plugin to the list of plugins for Oh My Zsh to load:

        plugins=(zsh-completions)

3. Start a new terminal session. or:

        $ source ~/.zshrc

[cloc](https://github.com/AlDanial/cloc)

1. If you prefer a manual installation, please use the following instructions:

        $ curl -O https://github.com/AlDanial/cloc/archive/v1.72.tar.gz ~/cloc && tar -zxvf v1.72.tar.gz && cd ~/cloc

2. Then, you can install git-extras, using:

        $ sudo make install

or, It is recommended to install cloc with choco:

        $ choco install cloc

[httpie](https://github.com/jakubroztocil/httpie)

It is recommended to install httpie with pip:

    # Make sure we have an up-to-date version of pip and setuptools:
    $ pip install --upgrade pip setuptools
    $ pip install --upgrade httpie

[cheat](https://github.com/chrisallenlane/cheat)

It is recommended to install cheat with pip:

    $ [sudo] pip install cheat

**将 babun 添加到 cmder:**

1. Add new task in CMDER settings

    `Win + Alt + P` to open settings, then go to `Startup > Tasks`.
    Then hit the `+` symbol on the bottom to create a new task

2. Rename the task to Babun (or whatever you want)

3. Add this command in Task Parameters:

        /icon "%userprofile%\.babun\cygwin\bin\mintty.exe" /dir "%userprofile%"

4. Add this command in Commands:

        %userprofile%\.babun\cygwin\bin\mintty.exe -o Transparency=0 /bin/env CHERE_INVOKING=1 /bin/zsh.exe

**"Open Cmder Here" in context menu**

To add an entry in the Windows Explorer context menu to open Cmder in a specific directory, paste this into a *OpenCmderHere.reg*  file and double-click to install it.

    Windows Registry Editor Version 5.00

    [HKEY_CLASSES_ROOT\Directory\Background\shell\Cmder]
    @="Open Cmder Here"

    [HKEY_CLASSES_ROOT\Directory\Background\shell\Cmder\command]
    @=hex(2):25,00,43,00,4d,00,44,00,45,00,52,00,5f,00,49,00,4e,00,\
      53,00,54,00,41,00,4c,00,4c,00,5f,00,44,00,49,00,52,00,25,00,5c,00,43,00,6d,\
      00,64,00,65,00,72,00,2e,00,65,00,78,00,65,00,20,00,2f,00,53,00,54,00,41,00,\
      52,00,54,00,20,00,22,00,25,00,76,00,22,00,00,00

**Cmder 中文显示问题（1.3以上）**

文字重叠

> 取消勾选设置中的Monospace选项

中文乱码

> 在Settings > Startup > Environment里添加：set LANG=zh_CN.UTF8

## Nodejs

[nvm-windows](https://github.com/coreybutler/nvm-windows)

> This is not the same thing as nvm, which is a completely separate project for Mac/Linux only.

**Tip：安装目录不要出现空格**

settings.txt

    root: yourpath\nvm
    path: yourpath\nodejs
    arch: 64
    proxy: none
    node_mirror: http://npm.taobao.org/mirrors/node/
    npm_mirror: https://npm.taobao.org/mirrors/npm/

配置系统环境变量，

**%NVM_HOME%：**  yourpath\nvm
**%NVM_SYMLINK%：**  yourpath\nodejs
**%NPM_HOME%：**  yourpath\npm

添加 npm 命令

    dos2unix '/cygdrive/c/Program Files/nodejs/npm'
    cygstart /bin/zsh

[nrm](https://github.com/Pana/nrm)

Install

    $ npm install -g nrm

Usage

    Usage: nrm [options] [command]

      Commands:

    ls                           List all the registries
    use <registry>               Change registry to registry
    add <registry> <url> [home]  Add one custom registry
    del <registry>               Delete one custom registry
    home <registry> [browser]    Open the homepage of registry with optional browser
    test [registry]              Show the response time for one or all registries
    help                         Print this help

      Options:

    -h, --help     output usage information
    -V, --version  output the version number

## Subversion

babun 默认安装了 svn，将它卸载了。

    pact remove subversion subversion-perl

接着，安装 Windows 版 TortoiseSVN（一定要安装 command line tools）。 这样 babun 就可以使用 svn 命令了。

## FAQ

出现以下问题：

    compdef: unknown command or service: git
    compdef: unknown command or service: grep
    compdef: unknown command or service: git

解决方案：

    compaudit | sudo xargs chmod g-w
    compaudit | sudo xargs chown root
    rm ~/.zcompdump*
    compinit

出现以下问题：

    66835 error Error: EPERM: operation not permitted, rename 'D:\Desktop\work\website\node_modules\.staging\abbrev-67f8252c' -> 'D:\Desktop\work\website\node_modules\abbrev'
    66835 error     at Error (native) parent: 'website' }
    66836 error Please try running this command again as root/Administrator.
    66837 verbose exit [ -4048, true ]

解决方案：

使用管理员权限运行 cmd，node.exe 设置属性为， **以管理员身份运行此程序**。

出现以下问题：

    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @         WARNING: UNPROTECTED PRIVATE KEY FILE!          @
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    Permissions 0744 for '/home/geek/.ssh/id_rsa' are too open.
    It is recommended that your private key files are NOT accessible by others.
    This private key will be ignored.
    bad permissions: ignore key: /home/geek/.ssh/id_rsa

解决方案：

    sudo chmod 600 ~/.ssh/id_rsa
    sudo chmod 600 ~/.ssh/id_rsa.pub

出现以下问题：

    CreateProcess Failed with error 740: ��ֹ�����������

解决方案：

**由于使用了 nvm-windows** , 需要修改 `webStorm` 的 `node` 依赖。 `e.g. D:\yourpath\nvm\v6.11.2\node.exe`

## Reference

[Integrating Babun - windows](https://github.com/cmderdev/cmder/wiki/%5BWindows%5D-Integrating-Babun)

["Open Cmder Here" in context menu - windows](https://github.com/cmderdev/cmder/wiki/%5BWindows%5D-%22Open-Cmder-Here%22-in-context-meun)

[Node.js Cygwin not supported](https://stackoverflow.com/questions/10043177/node-js-cygwin-not-supported)

[Dos2unix 安装与使用简介](http://gnss.help/2017/07/24/dos2unix-install-usage/)

[Mac-zsh 安装和使用](https://cnbin.github.io/blog/2015/06/01/mac-zsh-an-zhuang-he-shi-yong/)

[让Windows用上OMZ的神器Babun](https://www.hi-linux.com/posts/57246.htm)

[nodejs在windows下的安装配置(使用NVM的方式)](http://blog.csdn.net/tyro_java/article/details/51232458)

[cmder中文显示相关问题解决方案](http://wentaoma.com/2016/08/31/cmder-chinese-encode/)

[cygwin在windows上的初体验](http://www.wuliaole.com/post/use_cygwin_as_linux_shell_on_windows_10/)
