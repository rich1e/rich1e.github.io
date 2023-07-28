#bem #css 

使用 `BEM` 命名规范，理论上讲，每行 `css/scss` 代码都只有一个选择器。

`BEM` 代表 “块（block），元素（element），修饰符（modifier）”，我们常用这三个实体开发组件。

在选择器中，由以下三种符号来表示扩展的关系：

- `-` 公共连接符，如 `prefix-inupt-expression`
- `__` 元素连接符，如 `prefix-input-expression__inner`
- `--` 修饰符，如 `prefix-input-expression--disabled`

`block` 代表了更高级别的抽象或组件。

`block__element` 代表 `.block` 的后代，用于形成一个完整的 `.block` 的整体。

`block--modifier` 代表 `.block` 的不同状态或不同版本。

代码示例：

```scss
.prefix-input-expression {
  // some things
}

.prefix-input-expression__inner {
  // some things
}

.prefix-input-expression--disabled {
  // some things
}
```

BEM 语法规则：

```js
<block-name>__<element-name>--<modifier-name>_<modifier_value>
```

## BEM 命名法的好处

BEM 的关键是，可以获得更多的描述和更加清晰的结构，从其名字可以知道某个标记的含义。于是，通过查看 HTML 代码中的 class 属性，就能知道元素之间的关联。

常规的命名法示例：

```html
<button class="button-primary"></button>

<button class="button-success"></button>
```

这种写法从 DOM 结构和类命名上可以了解每个元素的意义，但无法明确其真实的层级关系。在 css 定义时，也必须依靠层级选择器来限定约束作用域，以避免跨组件的样式污染。

通过 BEM 命名方式，模块层级关系简单清晰，而且 css 书写上也不必作过多的层级选择。

## 什么时候应该用 BEM 格式?

使用 `BEM` 的诀窍是，你要知道什么时候哪些东西是应该写成 `BEM` 格式的。

并不是每个地方都应该使用 `BEM` 命名方式。当需要明确关联性的模块关系时，应当使用 `BEM` 格式。

比如只是一条公共的单独的样式，就没有使用 `BEM` 格式的意义：

```css
.is-hide {
  display: none !important;
}
```

## 避免 `.block__el1__el2` 的格式

在深层次嵌套的 `DOM` 结构下，应避免过长的样式名称定义。

## BEM 命名的注意事项

**使用混合拆分样式**

- 尽量保持块的样式独立，让选择器扁平化；
- 不在块里设置位置、布局相关的样式，只设置基本样式；
- 通过混合的方式，在作为父级块的元素时设置布局样式；
- 适时拆分元素为独立的块，解耦样式并形成新的命名空间；

**适时使用嵌套选择器**

保持低权重，让选择器的嵌套层级越少越好。因为 CSS 的权重问题很多人处理不好，最终很可能导致不停的嵌套或为了增加权重而进行的无意义嵌套和 !important，这无疑增加了代码的耦合。

**开放封闭原则**

开放封闭原则是所有面向对象原则的核心，是说软件实体应该是可扩展，而不可修改的。即对扩展是开放的，而对修改是封闭的。如果将这个原则应用到 BEM 的使用上，就是说我们应该使用 modifier 去拓展 block 或 element 的样式，而不应该去修改 block 或 element 的基础样式。

## Vue 中如何使用？

新建 `bem.ts`

```ts
import { prefixCls } from "@mo/constants";
import type { CSSProperties } from "vue";

type Mold = string | { [key: string]: any };
type Molds = Mold | Mold[];

export type BEMClass = ReturnType<typeof createBEMClass>;

type CreateNamespace = {
  blockName: string;
  bem: (...arg: string[]) => string;
  bemClass: (...arg: string[]) => string;
};

/**
 * @see https://getbem.com/
 * @see https://en.bem.info/methodology/css/
 *
 * BEM 命名格式
 *
 * <block-name>__<element-name>--<modifier-name>_<modifier_value>
 *
 * 所有实体的命名均使用小写字母，复合词使用连字符 “-” 连接。
 * Block 与 Element 之间使用双下画线 “__” 连接。
 * Mofifier 与 Block/Element 使用双连接符 “--” 连接。
 * modifier-name 和 modifier_value 之间使用单下画线 “_” 连接。
 *
 * 示例：
 *
 * const [prefix, bem, bemClass] = createNameSpace('input', styles);
 *
 * bem() // 'prefix-input' 创建块
 *
 * bem('inner') // 'prefix-input__inner' 创建元素
 *
 * bem(['disabled']) // 'prefix-input prefix-input--disabled' 创建块修改器
 * bem({disabled: true}) // 'prefix-input prefix-input--disabled' 创建块修改器
 * bem(['disabled', 'primary']) // 'prefix-input prefix-input--disabled prefix-input--primary' 创建多个块修改器
 *
 * bem('inner', 'disabled') // 'prefix-input__inner prefix-input__inner--disabled' 创建元素修改器
 * bem('inner', {disabled: true}) // 'prefix-input__inner prefix-input__inner--disabled' 创建元素修改器
 * bem('inner', {open: true, active: true}) // 'prefix-input__inner prefix-input__inner--open prefix-input__inner--active' 创建多个元素修改器
 *
 * bemClass 与 bem 的方法和参数均一样，返回值为 CSS Module 风格的 BEM Class 名称。
 *
 * bemClass('scroll', 'max') // '_mo-candidate__scroll_jsj0b_80 _mo-candidate__scroll--max_jsj0b_99'
 */

/**
 * 生成不同个数的修改器
 * @param {String} name
 * @param {Molds} mold
 * @param {CSSProperties} cssModule CSS Module
 * @returns
 */
function genBem(name: string, mold: Molds, cssModule?: CSSProperties): string {
  // 没有 mold，或 mold 为 false， 则返回空
  if (!mold) return "";

  // 如果是字符串，则拼接上 blockName 返回
  if (typeof mold === "string") {
    const classname = `${name}--${mold}`;
    return cssModule ? ` ${cssModule[classname]}` : ` ${classname}`;
  }

  // 递归处理每个数组元素
  if (Array.isArray(mold)) {
    return (mold as []).reduce((ret, item) => ret + genBem(name, item, cssModule), "");
  }

  // 循环对象每一个key，判断 value 是否为真，为真则递归处理 key
  return Object.keys(mold).reduce((ret, key) => ret + (mold[key] ? genBem(name, key, cssModule) : ""), "");
}

/**
 * 生成 BEM 风格的 Class 名称
 * @param {String} blockName 组件块名称
 * @param {CSSProperties} cssModule CSS Module
 * @description 结合 CSS Module 和 BEM 规范，保证 CSS 样式隔离和组件 Class 命名语义化
 */
export function createBEMClass(blockName: string, cssModule?: CSSProperties) {
  return (elementName: string, mold: Molds) => {
    // 如果第一个参数不是 el（不是字符串），则设置为 modifier (elementName 只能在第一个参数位置)
    if (elementName && typeof elementName !== "string") {
      mold = elementName;
      elementName = "";
    }
    // 如果 elementName 为空，则 elementName 为 blockName
    // 反之为 blockName__elementName
    elementName = elementName ? `${blockName}__${elementName}` : blockName;

    // 拼接 blockName，生成带 modifier 的类名
    // return `${elementName}${genBem(elementName, mold)}`;
    return cssModule
      ? `${cssModule[elementName]}${genBem(elementName, mold, cssModule)}`
      : `${elementName}${genBem(elementName, mold)}`;
  };
}

/**
 * 创建命名空间
 * @param {String} name 组件名称
 * @param {CSSProperties} cssModule CSS Module
 * @param {Boolean} prefix 组件命名空间前缀
 */
export function createNamespace(name: string, cssModule?: CSSProperties, prefix = false): CreateNamespace {
  const blockName = prefix ? `${name}` : `${prefixCls}-${name}`;
  return {
    blockName,
    bem: createBEMClass(blockName),
    bemClass: createBEMClass(blockName, cssModule),
  } as const;
}
```

新建 `config.scss`

```scss
/// Global variable configuration file
/// @access public
/// @name namespace 所有的组件以 'mo' 开头，如 mo-inupt-expression
/// @name common-separator 公共的连接符
/// @name element-separator 元素以__分割，如 mo-input__inner
/// @name modifier-separator 修饰符以--分割，如 mo-input--mini
/// @name state-prefix 状态以is-开头，如 is-disabled
$namespace: "mo" !default;
$common-separator: "-" !default;
$element-separator: "__" !default;
$modifier-separator: "--" !default;
$state-prefix: "is-" !default;
```

新建 `mixin.scss`

```scss
@use "./config.scss" as *;

/// Block
/// Define a block and add namespaces
/// @access public
/// @param {String} $block - Block's name
@mixin b($block) {
  $block-name: $namespace + $common-separator + $block !global;

  .#{$block-name} {
    @content;
  }
}

/// Block Element
/// Elements get appended with "__" and the $element
/// @access public
/// @param {String} $element - Element's name
@mixin e($element) {
  $element-name: & + $element-separator + $element;

  @at-root #{$element-name} {
    @content;
  }
}

/// Block Modifier
/// Modifiers get appended with "--" and the $modifier
/// @access public
/// @param {String} $modifier - Modifier's name
@mixin m($modifier) {
  $modifier-name: & + $modifier-separator + $modifier;

  @at-root #{$modifier-name} {
    @content;
  }
}
```

根据实际情况选择，目前支持独立样式 `（css/scss）` 和内嵌样式 2 种方式。

### 独立样式，即单个的样式文件。

`index.module.scss` 或者 `index.scss`

> 任何以 `.module.scss` 为后缀名的 `SCSS` 文件都被认为是一个 `CSS Modules` 文件

```scss
@import './mixin';

@include b(block) {
  // some things
  @include e(element) {
    // some things
    @include m(modifier) {
      // some things
    }
  }

  @include e(element) {
    // some things
    @include m(modifier) {
      // some things
    }
  }
  ...
}
```

`jsx/tsx` 文件中引用样式文件

```jsx
import { defineComponent } from "vue";
import { createNamespace } from "@mo/utils";

import styles from "./index.module.scss";

export default defineComponent({
  setup(props, { attrs, expose, emit }) {
    // 更多内容参考 bem.ts
    const { bemClass } = createNamespace("input-expression", styles);

    return () => <div class={bemClass()}></div>;
  },
});
```

### 内嵌样式

`.vue`

```html
<template>
  <div :class="bemClass()"></div>
</template>

<script setup lang="ts">
  import { useCssModule } from "vue";
  import { createNamespace } from "@mo/utils";

  const $style = useCssModule();
  const { bemClass } = createNamespace("input-expression", $styles);

  // some things
</script>

<style lang="scss" module>
  @import './mixin';

  @include b(block) {
    // some things
    @include e(element) {
      // some things
      @include m(modifier) {
        // some things
      }
    }

    @include e(element) {
      // some things
      @include m(modifier) {
        // some things
      }
    }
    ...
  }
</style>
```

## BEM 解决问题

组件之间的完全解耦，不会造成命名空间的污染，如：`.mod-xxx ul li` 的写法带来的潜在的嵌套风险。

另外，解决 CSS 模块化的方案有很多种，在 Vue 项目中，Vue Loader 支持的两种分别是 Scoped CSS 和 CSS Modules。

## 参考

[BEM — Block Element Modifier](https://getbem.com/)

[CSS with BEM](https://en.bem.info/methodology/css/)

[单文件组件 CSS 功能](https://cn.vuejs.org/api/sfc-css-features.html#css-modules)

[Vite | CSS Modules](https://cn.vitejs.dev/guide/features.html#css-modules)
