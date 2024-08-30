```ad-note
title: 参考

Ref:

[Vue3 + Vite2 + ElementPlus + TS 项目常见问题](https://bbchin.com/archives/vite2vue3ts#9%E3%80%81%E6%8E%A8%E8%8D%90%E4%BD%BF%E7%94%A8-vscode-%E5%92%8C-vue-%E5%AE%98%E6%96%B9%E6%8B%93%E5%B1%95-volar%EF%BC%8C%E5%AE%83%E4%B8%BA-vue-3-%E6%8F%90%E4%BE%9B%E4%BA%86%E5%85%A8%E9%9D%A2%E7%9A%84-ide-%E6%94%AF%E6%8C%81)
[vue3中update:modelValue的使用与不生效问题解决_vue.js_脚本之家](https://www.jb51.net/article/242919.htm)
[Element Form to Json，快速构建表单应用，支持表单分组 - 掘金](https://juejin.cn/post/6993907898371801118)
[Vue3组件（九）Vue + element-Plus + json = 动态渲染的表单控件 单列多列 - 腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1795996?cps_key=1d358d18a7a17b4a6df8d67a62fd3d3d)
[Vue3+Vite+TypeScript基于Element plus 二次封装【表单】组件(含Vue3知识点) - 首席CTO笔记](https://www.shouxicto.com/article/3992.html)
[GitHub - wd3322/el-form-model: vue element form to json](https://github.com/wd3322/el-form-model)
[GitHub - dongls/xForm: 基于Vue@3.x的动态表单生成器。](https://github.com/dongls/xForm)
[GitHub - xaboy/form-create: 强大的动态表单生成器|form-create is a form generation component that can generate dynamic rendering, data collection, verification and submission functions through JSON.](https://github.com/xaboy/form-create)
[GitHub - jjxliu306/ng-form-elementplus: 动态表单，VUE动态表单。基于vue+element-plus实现动态表单组件，通过拖拽组件到面板即可实现一个表单。支持各个组件的动态隐藏显示，动态表格弹窗式维护。致力打造开源最强vue动态表单组件，持续维护](https://github.com/jjxliu306/ng-form-elementplus)
[ng-form-elementplus](https://jjxliu306.github.io/ng-form-elementplus/dist/)
[element-plus表单验证使用 个人总结_ymzhaoUSTB的博客-CSDN博客_element plus 表单验证](https://blog.csdn.net/ymzhaobth/article/details/120820053)

```

## 优化背景

- Vue 2.0 语法，未支持 Typescript
- 配置表单的 `json` 数据巨大，难以阅读
- 有大量的 `eslint-disable` 注释，隐藏不确定性和风险
- 废弃代码没有删除，造成功能冗余
- store 和 inject 混用（ElLocaleInjection）
- 调用时必传单位（单位全局联动）
- 代码逻辑复杂，相互依赖，调试困难（CusInput存在循环依赖的风险）
- 组件命名不规范，没有具体含义（有许多widgets）
- element-plus （version: 1.1.0-beta.24）的版本是固定的，如果升级会有风险

## 使用场景

Edit Mode Expansion (Mode Expansion)

![[Pasted image 20221028164224.png]]

Edit FDTD (FDTD)

![[Pasted image 20221028164706.png]]

## 动态表单依赖和被引用关系

![[Pasted image 20221108111704.png]]

[[mind - Attr 动态表单组件关系图]]

## 动态表单设计

```ad-note
title: 数据 & Demo 参考

Ref:

[面试登记表(中英文对照版) - 百度文库](https://wenku.baidu.com/view/5366586f0b4c2e3f572763d6.html?_wkts_=1667440585220)
[jsx · GitHub](https://github.com/vuejs/babel-plugin-jsx/blob/dev/packages/babel-plugin-jsx/README-zh_CN.md)
[React Styled Components: Inline Styles + 3 Other CSS Styling Approaches (with examples)](https://www.freecodecamp.org/news/react-styled-components-inline-styles-3-other-css-styling-approaches-with-examples/)
[react内联样式_React样式化的组件：内联样式+ 3种其他CSS样式化方法（带有示例）..._cumifi2519的博客-CSDN博客](https://blog.csdn.net/cumifi2519/article/details/108153005)
[Monorepo Configuration | TypeScript ESLint](https://typescript-eslint.io/docs/linting/typed-linting/monorepos)
[Getting Started with ESLint - ESLint - Pluggable JavaScript Linter](https://eslint.org/docs/latest/user-guide/getting-started)
[pnpm + workspace + changesets 构建你的 monorepo 工程 - 掘金](https://juejin.cn/post/7098609682519949325)
[Changesets: 流行的 monorepo 场景发包工具 - 掘金](https://juejin.cn/post/7024827345059971080)
[在vue3中同时使用tsx与setup语法糖 - 掘金](https://juejin.cn/post/7143053446365577253)
```

[[Attr - 动态表单设计]]

[[Attr - 动态表单Slots设计]]
