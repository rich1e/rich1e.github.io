# Overview

> Nuxt 问题实战经验和方案汇总。

**目录**

[toc]

## Nuxt 模版

> https://cloud.tencent.com/developer/article/1015928
> https://godxingren.club/2020/06/15/nuxt-mo-ren-mo-ban-app-html/
> https://blog.csdn.net/zjsfdx/article/details/82145730
> https://www.cnblogs.com/fqh123/p/12818235.html
> https://www.jianshu.com/p/a5e8e4e15f98
> https://www.cnblogs.com/bien94/p/12579670.html
> https://0445814.github.io/2020/04/10/NuxtJS-Nuxt-%E6%95%99%E5%AD%B8-4-layout-%E8%88%87%E9%8C%AF%E8%AA%A4%E8%99%95%E7%90%86/
> https://monkeybinbin.github.io/article/a-series-of-nuxtjs-07
> https://github.com/nuxt/nuxt.js/blob/dev/packages/vue-app/template/components/nuxt-error.vue
> https://my.oschina.net/tingqianyunluo/blog/3143340
> https://blog.csdn.net/muzidigbig/article/details/84937830

## Nuxt Config

> https://github.com/staven630/nuxt-config#removecss

## Vue 中 scoped 穿透

> https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors
> https://segmentfault.com/a/1190000015932467

## [mini-css-extract-plugin]: Conflicting order

> https://github.com/vuejs/vue-cli/issues/3771
> https://www.coder.work/article/7494794

## Nuxt 中获取 Cookie

cookie-universal-nuxt

cookie-parser

参考

> https://www.cnblogs.com/goloving/p/11373989.html
> https://stackoverflow.com/questions/52690666/how-to-get-cookie-in-nuxtserverinit
> https://juejin.cn/post/6844903817914351629
> https://blog.csdn.net/weixin_43837268/article/details/107948709
> https://zhuanlan.zhihu.com/p/221946198
> https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal-nuxt
> https://zhuanlan.zhihu.com/p/221946198
> https://stackoverflow.com/questions/56744269/nuxtjs-axios-send-cookies-with-request
> https://github.com/microcipcip/cookie-universal/tree/master/packages/cookie-universal-nuxt
> https://blog.csdn.net/qq_43649479/article/details/107662288
> https://stackoverflow.com/questions/60164173/how-to-get-src-from-iframe-vuejs
> https://web.dev/samesite-cookie-recipes/#how-to-implement-samesite-today
> https://github.com/nuxt-community/i18n-module/pull/853
> https://web.dev/samesite-cookie-recipes/
> https://www.cnblogs.com/chanwahfung/p/12899714.html
> https://blog.csdn.net/Tomwildboar/article/details/97616705?utm_medium=distribute.pc_relevant.none-task-blog-baidujs_baidulandingword-1&spm=1001.2101.3001.4242
> https://www.codeleading.com/article/85775385595/

## Nuxt 环境变量配置

```shell
npm install dotenv --save-dev
```

.env

```bash
BASE_URL=http://localhost:8000
API_URL=http://localhost:8888
```

nuxt.config.js

```javascript
const envConfig = require('dotenv').config({
  path: `.env${process.env.APP_ENV ? `.${process.env.APP_ENV}` : ''}`
})

export default {
  vue: {
    config: {
      productionTip: true,
      devtools: false
    }
  },
  publicRuntimeConfig: {
    ...envConfig.parsed
  },
  privateRuntimeConfig: {}
}
```

- asyncData
- fetch
- middleware
- plugins
- nuxtServerInit (server only)

```vue
<script>
asyncData ({ $config: { baseURL } }) {
  const posts = await fetch(`${baseURL}/posts`)
  	.then(res => res.json())
}
</script>
```

```vue
<template>
  <p>Our Url is: {{ $config.baseURL}}</p>
</template>
```



## 引入 axios 库

```shell
npm i @nuxtjs/axios -s
```

```javascript
export default {
  /*
   ** Runtime Config
   */
  publicRuntimeConfig: {
    axios: {
      baseURL: 'https://api.nuxtjs.dev'
    }
  },
  /*
   ** Modules - https://nuxtjs.org/docs/2.x/directory-structure/modules
   */
  modules: ['@nuxtjs/axios']
}

async asyncData({$axios}) {
  let { res } = await $axios.get(`https://xxx.com/api/xxx`) 
  console.log(res)    
}
```

https://www.nuxtjs.cn/guide/runtime-config
https://nuxtjs.org/blog/moving-from-nuxtjs-dotenv-to-runtime-config
https://juejin.cn/post/6844903906200256525
https://dev.to/mrnaif2018/how-to-load-dynamical-environment-variables-with-nuxt-js-j7k
https://nuxtjs.org/docs/2.x/directory-structure/store#the-nuxtserverinit-action
https://blog.csdn.net/Maplexxfye/article/details/115669938
https://www.jianshu.com/p/8e751a67d9af
https://segmentfault.com/a/1190000039131163
https://dev.to/deeja/nuxt-js-environment-variables-without-dotenv-4oj8
https://qiita.com/taai/items/cbc61b9b4a18aacad57e

