## 优化背景

- Vue 2.0 语法，未支持 Typescript
- 有大量的 `eslint-disable` 注释
- store 和 inject 混用（ElLocaleInjection）
- 调用时必传单位（单位全局联动）
- 文件结构复杂，相互依赖，调试困难（CusInput存在循环依赖的风险）
- 组件命名不规范，没有具体含义（有许多widgets）
- element-plus （version: 1.1.0-beta.24）的版本是固定的，如果升级会有风险

## 使用场景

Edit Mode Expansion (Mode Expansion)

![[Pasted image 20221028164224.png]]

Edit FDTD (FDTD)

![[Pasted image 20221028164706.png]]

## 动态表单依赖和被引用关系

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



### 表单功能

- 动态渲染
- 多种布局样式（单列、双列、多列）
- 多种类型输入框
- 支持自定义验证规则
- 支持自定义布局样式
- 支持 `slots` 嵌套自定义组件

### 表单参数

```js
const form = {
	scene: 'halver | trisector | group | tab | none',
	field: [
		{
			type: 'input',
			label: 'name',
			prop: 'username'
			bind: 'x',
			default?: '-'
		},
		{
			type: 'swich',
			label: 'name',
			prop: 'married'
			bind: 'x',
			disabled: true
		},
	],
	rule: {},
	options: {
		onSubmit: () => void,
		onCancel: () => void,
		onApply: () => void
	},
	slots: T<{} | any[]>
}
```
### 表单API