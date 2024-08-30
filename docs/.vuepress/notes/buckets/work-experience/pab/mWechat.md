# 信用卡小程序技术架构规划，关键点设计


## 项目选型

使用 wepy 搭建，类Vue开发风格，可以使用ES6语法。

> PS：如果项目规模较小，建议使用小程序官方 demo 项目结构来搭建项目

## 项目结构

小程序DEMO：

    project
    ├── pages
    |   ├── index
    |   |   ├── index.json  index 页面配置
    |   |   ├── index.js    index 页面逻辑
    |   |   ├── index.wxml  index 页面结构
    |   |   └── index.wxss  index 页面样式表
    |   └── log
    |       ├── log.json    log 页面配置
    |       ├── log.wxml    log 页面逻辑
    |       ├── log.js      log 页面结构
    |       └── log.wxss    log 页面样式表
    ├── app.js              小程序逻辑
    ├── app.json            小程序公共设置
    └── app.wxss            小程序公共样式表


wepy框架

    project
    └── src
        ├── pages
        |   ├── index.wpy    index 页面配置、结构、样式、逻辑
        |   └── log.wpy      log 页面配置、结构、样式、逻辑
        └──app.wpy           小程序配置项（全局样式配置、声明钩子等）

.wpy 文件类似于.vue 单文件结构，共同具有：template，sctipt，style 三部分。

## 模块化设计

设计粒度：`basic component -> biz module -> page template`


将基本元素和逻辑方法封装为功能组件。

对重复使用的功能组件按业务来隔离和区分，并做成模块化。

针对不同场景细分，合理调度业务模块，构建常用页面模板。

## 小程序开发建议

1. 小程序基于微信框架，部分功能受限，不支持现有的其他第三方插件；
2. 小程序页面只能同时打开5个，如果交互流程较长难以支持；
3. 小程序包大小限制为1M（目前），所有只适合轻量级；

建议在开发小程序时不要以 web app 的开发思维去思考。
