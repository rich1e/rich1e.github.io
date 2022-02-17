## 隐藏滚动条

> - https://www.cnblogs.com/xiaostudy/p/10821191.html
> - https://juejin.cn/post/7036617475164733454
> - https://juejin.cn/post/6844904094272847880
> - https://zhuanlan.zhihu.com/p/140722352

```scss
.container {
  &::-webkit-scrollbar {
    width: 0;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: rgba(0, 0, 0, 0.2);
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 0;
    background: rgba(0, 0, 0, 0.1);
  }
}
```

## clamp 与响应式的碰撞

> https://juejin.cn/post/7027851845221482504

## 这个大概是修改滚动条样式方法最全的文章了

> https://juejin.cn/post/6844904004879843336

## CSS 全局滚动条样式兼容写法

> https://juejin.cn/post/7012425496168251405
