## 表单功能

- 表单动态渲染
- 多种布局样式（单列、双列、Group、Tab 选项卡）
- 多种类型输入框
    - [x] 文本输入框
    - [x] Swich 开关
    - [x] Select 选择框
    - [x] Radio 单选框
    - [x] Checkbox 多选框
- 支持自定义验证规则
- 支持自定义布局样式
- 支持 `bind` 数据回显，维护前后端字段关系
- 支持 `slots` 嵌套自定义组件

## 表单参数

```ts
/**
 * 控件类型
 * @property Input 输入框
 * @property Switch 开关
 * @property Select 选择框
 */
export type ControlType = 'Input' | 'Switch' | 'Select';

/**
 * @description 表单UI类型
 * @property uniseriate 单列
 * @property biserial 双列
 * @property group 分组
 * @property tab 选项卡
 */
export type SceneType = 'uniseriate' | 'biserial' | 'group' | 'tab';

/** 表单tabs数据 */
export type TabsType = Partial<
  Omit<Record<SceneType, FieldType[]>, 'tab' | 'group'> &
    Pick<Record<SceneType, FieldType[][]>, 'group'>
>;

/** 控件功能参数，任意 key-value 对象 */
export type ControlPropsType = {
  [key: string]: string;
} & {
  /** 控件监听字段，同 prop */
  modelValue: string;
};

/**
 * @type {object}
 * @desc 表单字段对象
 * @property {ControlType} control 控件类型
 */
export type FieldType = {
  /** 控件类型 */
  control: ControlType;
  /** 控件显示名称 */
  label?: string;
  /** 控件绑定字段，合法性验证 */
  prop: string;
  /** 控件功能参数 */
  props: ControlPropsType;
  /** 控件选项列表 */
  options?: any[];
  /** 控件回显字段 */
  bind: string;
  /** 控件默认值 */
  default?: string;
  /** 控件启用状态 */
  disabled?: boolean;
};

/**
 * 表单事件类型
 */
export type ActionsEventType = 'onSubmit' | 'onBack' | 'onCancel' | 'onRest';

/**
 * 表单事件按钮
 */
export type ActionsDetail = {
  /** 按钮文字 */
  btnText: string;
  /** 按钮事件处理函数 */
  handler: (el: any) => void;
};

/**
 * 表单操作类型
 */
export type ActionsType = Partial<Record<ActionsEventType, ActionsDetail>>;

/**
 * @type {object}
 * @desc 表单配置
 */
export type ConfigType = {
  /** UI类型 */
  scene: SceneType;
  /** tabs数据 */
  tabs?: TabsType;
  /** groups数据 */
  groups?: FieldType[][];
  /** Biserial和Uniseriate数据 */
  field?: FieldType[];
  /** 表单验证规则 */
  rule?: any;
  /** 表单操作 */
  actions?: ActionsType;
  /** 表单插槽 */
  slots?: any;
};
```

## 表单字段对象数据结构

### Biserial和Uniseriate数据

```ts
[
  {
    control: 'Input',
    label: '姓名',
    prop: 'username',
    props: {
      type: 'text',
      placeholder: '请输入姓名',
      modelValue: 'username',
    },
    bind: 'x',
    default: '-',
  },
  {
    control: 'Input',
    label: '曾用名',
    prop: 'iiusername',
    props: {
      type: 'text',
      placeholder: '请输入姓名',
      modelValue: 'iiusername',
    },
    bind: 'x',
    default: '-',
  },
  {
    control: 'Select',
    label: '出生地',
    prop: 'birth',
    props: {
      placeholder: '请选择出生地',
      modelValue: 'birth',
    },
    options: [
      {
        value: 'Option1',
        label: '上海',
      },
      {
        value: 'Option2',
        label: '北京',
      },
      {
        value: 'Option3',
        label: '深圳',
      },
      {
        value: 'Option4',
        label: '重庆',
      },
      {
        value: 'Option5',
        label: '天津',
      },
    ],
    bind: 'x',
    disabled: true,
  },
]
```

### tabs数据

```ts
{
  uniseriate: [
    {
      control: 'Input',
      label: '姓名',
      prop: 'username',
      props: {
        type: 'text',
        placeholder: '请输入姓名',
        modelValue: 'username',
      },
      bind: 'x',
      default: '-',
    },
    {
      control: 'Switch',
      label: '已婚',
      prop: 'married',
      props: {
        activeText: '是',
        inactiveText: '否',
        modelValue: 'married',
      },
      bind: 'x',
      default: '-',
    }
  ],
  biserial: [
    {
      control: 'Input',
      label: '姓名',
      prop: 'username',
      props: {
        type: 'text',
        placeholder: '请输入姓名',
        modelValue: 'username',
      },
      bind: 'x',
      default: '-',
    },
    {
      control: 'Switch',
      label: '已婚',
      prop: 'married',
      props: {
        activeText: '是',
        inactiveText: '否',
        modelValue: 'married',
      },
      bind: 'x',
      default: '-',
    },
  ],
}
```

### groups数据

```ts
[
  [
    {
      control: 'Input',
      label: '姓名',
      prop: 'username',
      props: {
        type: 'text',
        placeholder: '请输入姓名',
        modelValue: 'username',
      },
      bind: 'x',
      default: '-',
    },
    {
      control: 'Input',
      label: '曾用名',
      prop: 'iiusername',
      props: {
        type: 'text',
        placeholder: '请输入姓名',
        modelValue: 'iiusername',
      },
      bind: 'x',
      default: '-',
    },
  ],
  [
    {
      control: 'Input',
      label: '年龄',
      prop: 'age',
      props: {
        type: 'text',
        placeholder: '请输入年龄',
        modelValue: 'age',
      },
      bind: 'x',
      default: '-',
    },
    {
      control: 'Switch',
      label: '已婚',
      prop: 'married',
      props: {
        activeText: '是',
        inactiveText: '否',
        modelValue: 'married',
      },
      bind: 'x',
      default: '-',
    },
  ],
]
```

## 表单API

### config

| 参数名称 | 参数类型 | 功能描述 | 备注 |
| -------- | -------- | -------- | ---- |
| scene    | String   | 表单UI类型 |      |
| field    | Array    | 表单字段 |      |
| rule     | Array    | 验证规则 |      |
| actions  | Object   | 表单操作 |      |
| slots    | Function | 表单插槽 |      |

### field

| 参数名称 | 参数类型 | 功能描述 | 备注 |
| -------- | -------- | -------- | ---- |
| control  | String   | 控件类型 |      |
| label    | String   | 字段文案 |      |
| prop     | String   | 校验字段 |      |
| bind     | String   | 绑定字段 |      |
| default  | String   | 默认值   |      |

### Actions

| 参数名称 | 参数类型 | 功能描述 | 备注 |
| -------- | -------- | -------- | ---- |
| onSubmit | Function | 表单提交 |      |
| onCancel | Function | 取消表单 |      |
| onBack   | Function | 表单返回 |      |
| onRest   | Function | 表单重置 |      |

## 代码示例

```html
<script setup lang="ts">
import DynamicForm from '/@/components/DynamicForm';

const formConfig = {
  scene: 'biserial',
  field: [],
  rule: {},
  options: {},
  slots: () => {},
};
</script>

<template>
  <DynamicForm :config="formConfig" />
</template>
```

## 目录结构

```markdown
├── src
│  ├── components                     // 子模块
│  │  ├── FormActions.vue
│  │  ├── FormBiserial.vue
│  │  ├── FormFields.vue
│  │  ├── FormGroup.vue
│  │  └── FormTabs.vue
│  ├── hooks                          // 功能函数
│  │  ├── useActions.ts
│  │  └── useValidator.ts
│  └── templates                      // UI模板
│     ├── Biserial.vue
│     ├── Group.vue
│     ├── Tab.vue
│     └── Uniseriate.vue
├── Default.vue                       // 主文件
├── index.ts                          // 入口文件
└── types.ts
```

## 调用关系

```plantuml
入口文件 -> 主文件: 调用
主文件 -> UI模板: 调用
UI模板 -> 子组件: 调用
UI模板 -> 功能函数: 调用
```

## UI视图
![[Pasted image 20221115133830.png]]

![[Pasted image 20221115133907.png]]

![[Pasted image 20221115133943.png]]

![[Pasted image 20221115133748.png]]

![[Pasted image 20221115134013.png]]

## bind 数据回显

> 抹平前后端数据字段的命名差异，提供易于理解、可维护的字段关系。

![[Pasted image 20221116100939.png]]

![[Pasted image 20221116101038.png]]

![[Pasted image 20221116101750.png]]