> @change 方法接收多个参数

```html
// 方法一：@change="dataChange($event, 123)        
<el-select 
	v-model="value" 
	placeholder="请选择" 
	@change="dataChange($event, 123) 
/>

// 方法二：@change="((val)=>{dataChange(val, 123)})
<el-select 
	v-model="value" 
	placeholder="请选择" 
	@change="((val)=>{dataChange(val, 123)}) 
/>
```

参考：

https://www.cnblogs.com/bobo1/p/13131446.html

> mixin 混入规则

```javascript
// 数据对象在内部会进行递归合并，并在发生冲突时以组件数据优先。
// data、computed、props 适用
var mixin = {
  data: function () {
    return {
      message: 'hello',
      foo: 'abc'
    }
  }
}

new Vue({
  mixins: [mixin],
  data: function () {
    return {
      message: 'goodbye',
      bar: 'def'
    }
  },
  created: function () {
    console.log(this.$data)
    // => { message: "goodbye", foo: "abc", bar: "def" }
  }
})
```

```javascript
// 同名钩子函数将合并为一个数组，因此都将被调用。另外，混入对象的钩子将在组件自身钩子之前调用。
// beforeCreate、created、beforeMount、mounted等生命生命周期钩子函数适用
var mixin = {
  created: function () {
    console.log('混入对象的钩子被调用')
  }
}

new Vue({
  mixins: [mixin],
  created: function () {
    console.log('组件钩子被调用')
  }
})

// => "混入对象的钩子被调用"
// => "组件钩子被调用"
```

```javascript
// 值为对象的选项，将被合并为同一个对象。两个对象键名冲突时，取组件对象的键值对。
// methods、components、directives 适用
var mixin = {
  methods: {
    foo: function () {
      console.log('foo')
    },
    conflicting: function () {
      console.log('from mixin')
    }
  }
}

var vm = new Vue({
  mixins: [mixin],
  methods: {
    bar: function () {
      console.log('bar')
    },
    conflicting: function () {
      console.log('from self')
    }
  }
})

vm.foo() // => "foo"
vm.bar() // => "bar"
vm.conflicting() // => "from self"
```

参考：

https://cn.vuejs.org/v2/guide/mixins.html#%E5%9F%BA%E7%A1%80

> 在 `v-if`/`v-else-if`/`v-else` 中使用 `key`

```html
// 如果一组 v-if + v-else 的元素类型相同，最好使用 key (比如两个 <div> 元素)。

<div
  v-if="error"
  key="search-status"
>
  错误：{{ error }}
</div>
<div
  v-else
  key="search-results"
>
  {{ results }}
</div>
```

参考：

https://cn.vuejs.org/v2/style-guide/#%E6%B2%A1%E6%9C%89%E5%9C%A8-v-if-v-else-if-v-else-%E4%B8%AD%E4%BD%BF%E7%94%A8-key-%E8%B0%A8%E6%85%8E%E4%BD%BF%E7%94%A8

> Props 数组和对象的默认值

```javascript
export default {
  props: {
    couponList: {
      type: Array,
      default: []
    },
    couponList: {
      type: Array,
      default: () => []
    },
    pageData: {
      type: Object,
      default: () => ({})
    }
  }
}
```





