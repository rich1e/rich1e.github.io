# JSX & TSX

> Vue 3.0 & JSX/TSX 探坑

[toc]

## 事件绑定：`onClick={(e)=>{click(e,'click me!')}}`

```jsx
export default definedComponents({
  setup(props) {
    // 只有点击时执行
    const click = (e, val) => {
      consloe.log(e,val)
    }
    return () => (
      <>
      {[1,2,3].map((item,index) => {
        return (
          <div onClick={(e) => {click(e, 'click me!')}}></div>
        )
      })}
      </>
    )
  }
})
```

Ref：https://segmentfault.com/a/1190000040088212

## setup() should not return VNodes directly - return a render function instead. 

```jsx
// bad
export default definedComponents({
  setup(props) {
    return (
      <Component/>
    )
  }
})

// good
export default definedComponents({
  setup(props) {
    return () => (
      <Component/>
    )
  }
})
```

