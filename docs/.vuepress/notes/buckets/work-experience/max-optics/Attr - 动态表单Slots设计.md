## 功能

- 支持 `json` 数据动态生成
- 支持多个自定义组件

## 数据格式

**Uniseriate / Biserial**

```js
const formConfig: ConfigType = {
  scene: 'uniseriate',
  field: [
    // ...
    {
      control: 'Slots',
      label: '自定义1',
      prop: 'slots1',
    },
    {
      control: 'Slots',
      label: '自定义2',
      prop: 'slots2',
    }
  ],
  // ...
};
```
**Group**

```js
const formConfig: ConfigType = {
  scene: 'group',
  groups: [
    [
      {
        control: 'Slots',
        label: '自定义1',
        prop: 'slots1',
      },
    ],
    [
      {
        control: 'Slots',
        label: '自定义2',
        prop: 'slots2',
      }
    ],
  ]
  // ...
};
```
**Tab**

```js
const formConfig: ConfigType = {
  scene: 'tab',
  tabs: {
    tabType: 'border-card',
    tabPanes: [
      {
        title: 'Uniseriate',
        paneType: 'uniseriate',
        uniseriate: [
          {
            control: 'Slots',
            label: '自定义1',
            prop: 'slots1',
          },
          {
            control: 'Slots',
            label: '自定义2',
            prop: 'slots2',
          },
        ],
      },
      {
        title: 'Biserial',
        paneType: 'biserial',
        biserial: [
          {
            control: 'Slots',
            label: '自定义3',
            prop: 'slots3',
          },
        ],
      },
      {
        title: 'Group',
        paneType: 'group',
        group: [
          [
            {
              control: 'Slots',
              label: '自定义6',
              prop: 'slots6',
            },
            {
              control: 'Slots',
              label: '自定义4',
              prop: 'slots4',
            },
          ],
          [
            {
              control: 'Slots',
              label: '自定义5',
              prop: 'slots5',
            },
          ],
        ],
      },
    ],
  },
  // ...
};
```

## 自定义组件

```html
<DynamicForm :config="formConfig">
  <template #slots1="{ fieldModel }">
    <ElInput v-model="fieldModel[`slots1`]" />
  </template>
  <template #slots2="{ fieldModel }">
    <ElInput v-model="fieldModel[`slots2`]" />
  </template>
  <template #slots3="{ fieldModel }">
    <ElInput v-model="fieldModel[`slots3`]" />
  </template>
</DynamicForm>
```

## 项目应用

![[Pasted image 20221208154851.png]]

![[Pasted image 20221208155256.png]]

## 优化对比

- HTML 结构优化
- Style Code 减少，没有复杂的样式计算
- UI 模板灵活扩展，可重复使用
- Typescript 类型定义清晰，结合IDE提示属性字段类型，减少编码时错误

![[Pasted image 20221208162727.png]]

![[Pasted image 20221208162803.png]]

![[Pasted image 20221208163704.png]]

![[Pasted image 20221208163224.png]]

![[Pasted image 20221208163322.png]]

![[Pasted image 20221208163510.png]]

## npm 

![[Pasted image 20221208164424.png]]