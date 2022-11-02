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

```js
const form = {
	scene: 'halver | trisector | group | tab | none',
	field: [
		{
			type: 'input',
			label: 'name',
			bind: 'x',
			default?: '-'
		},
		{
			type: 'swich',
			label: 'name',
			bind: 'x',
			disabled: true
		},
	],
	options: {
		onSubmit: () => void,
		onCancel: () => void,
		onApply: () => void
	}
}
```