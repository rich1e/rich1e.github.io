# vue 2.0 项目搭建手册

- Vue 2.0+ (全家桶，e.g. vue-router, vuex, axios)
- webpack 3.0+
- webpack-dev-server 2.7+
- ESlint
- Babel 6.0+

## 配置

整个项目没有使用 `vue-cli`, 完全独立搭建。用 ES6 编写了全部的开发运行环境和打包脚本。
开发运行环境使用了 webpack + webpack-dev-server 的组合，具有服务代理，接口转发和热加载等功能。
开发过程中用到了 ESlint + standardjs，严格控制代码质量和编写风格。
在 Babel 的强力支持下，整个工程舒爽食用 ES6。

## 概览

**目录结构**

    .
    ├── build                           # webpack 配置
    ├── config                          # 打包配置
    ├── node_modules
    ├── src
        ├── api                         # 数据接口
        ├── assets                      # 资源文件 （图片，第三方文件等）
        ├── components                  # 全局组件
        ├── filters                     # 过滤器
        ├── main                        # 部署目录
        ├── mock                        # 模拟数据
        ├── store                       # 数据存储
        ├── styles                      # 样式库
        ├── utils                       # 工具库
        └── views                       # 页面视图（包含UI，controller）
    ├── .babelrc
    ├── .editorconfig
    ├── .eslintrc.js
    ├── .gitignore
    ├── favicon.ico
    ├── package.json
    ├── README.md
    └── yarn.lock

**使用 & 运行**

    npm install / yarn install     # 本地安装

    npm run dev                    # 开发联调

    npm run build                  # 打包编译

    npm run mock                   # 本地模拟

    npm run lint                   # 语法检查
