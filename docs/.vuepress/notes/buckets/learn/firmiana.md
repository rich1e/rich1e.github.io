## Lerna 创建项目

[toc]

## 创建项目

全局安装 `lerna`

```shell
npm install -g lerna 
/ yarn add lerna
```

创建并初始化项目

```shell
mkdir firmiana && cd firmiana && yarn init -y && lerna init
```

> note: lerna 初始化项目的时候，有两种模式

```shell
# 固定模式(Fixed mode)默认为固定模式，packages下的所有包共用一个版本号(version)
lerna init 

# 独立模式(Independent mode)，每一个包有一个独立的版本号
lerna init --independent 
```

lerna 配置使用 yarn workspaces，使用 independent 模式：

```json
// lerna.json
{
  "packages": ["packages/*"], // 配置package目录
  "version": "independent",
  "npmClient": "yarn",
  "useWorkspaces": true // 使用yarn workspaces
}
```

```json
// package.json
{
  "name": "firmiana",
  "private": true, // root禁止发布
  "workspaces": [ // 配置package目录
     "packages/*"
  ]  
}
```

> note: lerna 不会发布在 `package.json` 中将 `private` 属性设置为 `true` 的模块

创建 CLI 模块

```shell
lerna create @firmiana/cli -y
```



## 项目管理

安装依赖

```shell
lerna add <package>[@version] [--dev] # 命令签名

e.g.
lerna add babel-core # 全局安装 babel-core
lerna add figlet --scope=@firmiana/cli # 将 figlet 安装到 @firmiana/cli
lerna add commitizen cz-lerna-changelog husky lint-staged --dev # 安装到 devDependencies 中
```

卸载依赖

```shell
lerna exec -- <command> [..args] # 在所有包中运行该命令

e.g.
lerna exec -- yarn remove eslint # 卸载所有包下的 eslint
lerna exec --scope=@firmiana/cli yarn remove eslint # 卸载 @firmiana/cli 包下的 eslint 
```

为所有项目安装依赖

```shell
lerna bootstrap
```

> `--hoist` 把每个 package 下的依赖包都提升到工程根目录，来降低安装以及管理的成本

清理 node_modules

```shell
lerna clean
```

创建模块

```shell
lerna create @firmiana/cli -y
```

按拓扑排序执行命令

```shell
lerna run --stream --sort build
```

列出所有公开的包

```shell
lerna ls
```



### yarn workspaces



```shell
yarn config set workspaces-experimental true # 开启 yarn workspaces

yarn workspace @firmiana/cli add figlet # 为 @firmiana/cli 添加 figlet 模块
yarn workspaces run add lodash # 为所有 package 添加 lodash
yarn add -W -D eslint # 为 root 添加 eslint 开发依赖

yarn workspace @firmiana/cli remove figlet # 从 @firmiana/cli 移除 figlet 模块
yarn workspaces run remove lodash # 为所有 package 移除 lodash
yarn remove -W -D eslint # 为 root 移除 eslint 开发依赖

yarn workspaces run clean # 为所有 package 的 node_modules 执行 clean 操作
```

ref: [Workspaces in Yarn](https://classic.yarnpkg.com/blog/2017/08/02/introducing-workspaces/)

## 配置 commit 风格

```shell
yarn add -W -D commitizen cz-lerna-changelog husky @commitlint/cli @commitlint/config-conventioal 
```

修改 package.json

```json
{
  "scripts": {
    "commit": "git-cz"
  },
  "config": {
    "commitizen": {
    "path": "./node_modules/cz-lerna-changelog"
    }
  },
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
  "lint-staged": {
    "*.js": [
      "./node_modules/.bin/eslint . --ext .js --cache --fix",
      "git add"
    ]
  }
}
```

新增 `commitment.config.js`

```javascript
module.exports = {
  extends: ["@commitlint/config-conventional"]
}
```



## 配置代码风格

```shell
yarn add -W -D eslint
yarn add -W -D eslint-config-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node
```

新增 `.eslintrc.js`

```javascript
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'standard'
  ],
  parserOptions: {
    ecmaVersion: 12
  },
  rules: {}
}
```

ref: [eslint-config-standard](https://github.com/standard/eslint-config-standard) [ESLint - 守住优雅的护城河](https://juejin.cn/post/6886265504378388487)

## NPM 发布

注册NPM账号，选择 Account，添加组织 Organizations，发布 public 库免费且无限制。

```shell
npm init -y --scope=firmiana

npm login
npm publish --access=publish
```

使用 `lerna` 发布带域的包，需要配置 `package.json`

```json
{
  "publishConfig": {
    "access": "public"
  }
}
```

执行发布命令

```shell
lerna publish
```

ref：[lerna pubilsh](https://github.com/lerna/lerna/tree/main/commands/publish) [Code: 402 You must sign up for private packages](https://github.com/lerna/lerna/issues/1821) [Using --scope with publish](https://github.com/lerna/lerna/issues/1692)

## 如何写CLI

ref:

https://juejin.cn/post/6910886628265295885#heading-0
https://itnext.io/how-to-create-your-own-typescript-cli-with-node-js-1faf7095ef89
https://www.ruanyifeng.com/blog/2019/02/npx.html
https://www.zhihu.com/column/p/29284403
https://javascript.ruanyifeng.com/nodejs/npm.html
https://aotu.io/notes/2016/08/09/command-line-development/index.html
https://github.com/tj/commander.js/tree/master/examples
https://github.com/nexdrew/yargonaut
https://developer.okta.com/blog/2019/06/18/command-line-app-with-nodejs
https://juejin.cn/post/6844903857324064782
https://juejin.cn/post/6915200398512881672#heading-1
https://juejin.cn/post/6916303253487484942#heading-44
https://juejin.cn/post/6911987404039520270#heading-6
https://juejin.cn/post/6907481305655705614