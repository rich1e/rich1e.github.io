# ESlint

[TOC]



## Javascript, React, Vue & 其他

首先要有基本的 JS 语法静态检查，比较流行的有谷歌的 JS 语法建议。这个是最底层的铺垫，在这之后我们需要支持其他语法的检查。自从 ES6 出现，谷歌的那一套慢慢变的不适合，我们不单单要支持最 JS 的写法，还需要检查一些高级特性（e.g. Set 对象，Promise 等等），同时我们还需要兼容一些主流 web 框架，并能做到静态检查（e.g. jsx 语法，vue 文件结构）。

## ESlint 非常灵活 & 强大

something to do

## JavaScript Standard Style

> 站在巨人的肩上，充分合理利用现有资源，构建自己的 ESlint-config.

安装 eslint-config-standard，：

    npm install --save-dev eslint eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node

安装 ES6 支持，

    npm install --save-dev babel-eslint

安装检测单文件中 JS 的工具（e.g. .html, .es6, .vue）：

    npm install --save-dev eslint-plugin-html

安装 vue 支持：

    npm install --save-dev eslint eslint-plugin-vue@beta

> eslint-plugin-vue 需要 vue-eslint-parser



> https://www.kuxiaoxin.com/archives/14
> https://juejin.cn/post/6974223481181306888#heading-29
> https://juejin.cn/post/6844903824105144328
> https://eslint.vuejs.org/user-guide/#installation
