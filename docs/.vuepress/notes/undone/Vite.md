[TOC]





## 手写Vite插件解析Markdown文件成Vue组件

> https://juejin.cn/post/7091191052823969800

## 解决vite在WSL环境下热更新失效问题

> https://blog.csdn.net/sayUonly/article/details/123420283|
> https://cn.vitejs.dev/config/#server-watch
> https://github.com/vitejs/vite/issues/1153

```javascript
export default defineConfig({
  server: {
    watch: {
	  usePolling: true
    }
  }
})
```

## 基于vite2+react+typescript前端开发工程化（一）

> https://zhuanlan.zhihu.com/p/486956624
