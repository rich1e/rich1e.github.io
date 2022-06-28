> https://juejin.cn/post/6844903838164451336#heading-2
> https://juejin.cn/post/6844903893680259085#heading-0
> https://juejin.cn/post/6844903920037281805
> https://juejin.cn/post/6844903993768935431
> https://juejin.cn/post/6844903817746628615
> https://cn.vuejs.org/v2/guide/components-slots.html

## 插槽内容

```vue
// 定义插槽 navigation-link.vue
<template>
	<a
  	v-bind:href="url"
  	class="nav-link"
	>
    <span class="fa fa-user"></span>
  	<slot></slot>
	</a>
</template>
```

```vue
// 使用插槽 index.vue
<template>
  <navigation-link url="/profile">
    Your Profile
  </navigation-link>
</template>
<script>
  import NavigationLink from './navigation-link.vue'
  
  export default {
    components: {
      NavigationLink
    }
  }
</script>
```

```html
// 渲染结果
<a href="/profile" class="nav-link">
  <span class="fa fa-user"></span>
  Your Profile
</a>
```

