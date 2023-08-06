<!--
 * @Author: yuqigong@outlook.com
 * @Date: 2022-11-01 09:39:16
 * @LastEditors: yuqigong@outlook.com
 * @LastEditTime: 2022-11-01 14:08:52
 * @FilePath: /orca/Users/gongyuqi/Desktop/Workspace/code/rich1e.github.io/docs/.vuepress/notes/buckets/max-optics/orca 功能梳理和优化建议.md
 * @Description:
 *
-->
## 已知问题

-   目录结构缺乏组织，代码零散，没有实现“低耦合高内聚”
-   代码中缺乏关键注释，难以阅读和理解
-   废弃代码没有及时清理，增加代码理解的复杂度
-   编码过程缺少约定和规范组织，例如：API 调用，vuex action等
-   store 代码复杂，缺少层次规划，API 和视图更新逻辑混合
-   业务逻辑、用户交互和计算算法混合，难以复用和维护
-   环境变量没有统一维护和规范组织，随地引用难以维护
-   js 和 ts 共存，未完成 Typescript 标准化
-   有大量的 `eslint-disable` 注释，ESLint 没有发挥功能
-   整个工程，缺乏页面性能优化。比如预加载、PWA等
-   缺乏整体规划，部分第三方组件库锁版本，增加功能迭代的复杂性

## 目录结构

```markdown
.
├── .vscode                      // 配置
│  └── settings.json
├── node_modules                 // 安装依赖
│  ├── .bin
│  ├── .vite
│  ├── @types
│  └── vue-tsc
├── public                       // 静态资源
│  └── favicon.ico
├── src
│  ├── apis                      // API 库
│  ├── assets                    // 资源文件
│  ├── communication             // Socket 库
│  ├── components                // 组件库
│  ├── composables               // 组合式风格的库
│  ├── config                    // 配置文件
│  ├── core                      // 核心方法
│  ├── draw                      // 模型器件组件
│  ├── editor                    // 编辑器，Three
│  ├── encapsulations
│  ├── engine                    // 引擎
│  ├── interface                 // 接口
│  ├── layouts                   // 布局
│  ├── lib                       // 类库
│  ├── modules                   // 监视器、算法模拟器等组件
│  ├── router                    // 路由
│  ├── store                     // 前端存储
│  ├── utils                     // 工具库
│  ├── App.vue
│  ├── env.d.ts
│  ├── main.ts
│  └── settings.js
├── .env.company
├── .env.development
├── .env.production
├── .env.test
├── .eslintignore
├── .eslintrc.js
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tsconfig.json
└── vite.config.ts
```

## 功能流程图

[[Orca - 功能流程图和时序图]]

## 数据接口分析

[无源1.3接口文档](https://www.yuque.com/wangdaxian-kn8mx/klp27w/yw3d0g)

-   接口文档不够详细：缺少业务场景和功能描述；
-   接口缺少域名、协议、路径，调用环境不完整；
-   接口字段缺少类型、描述，以及字段的长度限制；

## 优化建议

- 小步快走（Typescript，Vue 3.0，Util，模块化）
- 逻辑拆解（动态表单，Store，API，CAD等）
- 逐一替换（功能类库，业务组件，交互逻辑，UI 模板）

## 其他建议

```ad-note
title: 每一步操作都需要同步后端服务，这个是否可以优化？

使用PouchDB在客户端存储操作数据，改善服务端压力。

Ref: [淘系前端架构 - 周刊 - 210719 期 - 知乎](https://zhuanlan.zhihu.com/p/390985804)

```

```ad-note
title: Orca模块化方案

[[Orca 模块化方案]]
```