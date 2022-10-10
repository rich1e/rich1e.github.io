# Next.js

[TOC]



```shell

  npm run dev
    Starts the development server.

  npm run build
    Builds the app for production.

  npm start
    Runs the built app in production mode.

We suggest that you begin by typing:

  cd kids-website
  npm run dev


https://juejin.cn/post/6844903907898966023#heading-6
https://jishuin.proginn.com/p/763bfbd7089f
https://nextjs.org/docs/api-reference/next.config.js/basepath
https://juejin.cn/post/6844903944343273485
https://juejin.cn/post/6931633501183836167
https://blog.csdn.net/weixin_34910772/article/details/112731763
https://blog.byetool.com/2021/05/13/%E5%A6%82%E4%BD%95%E9%83%A8%E7%BD%B2Next.js%E5%BA%94%E7%94%A8%E5%88%B0Ubuntu%E6%9C%8D%E5%8A%A1%E5%99%A8%EF%BC%9F/
https://www.jianshu.com/p/dee253927064
https://blog.51cto.com/u_15091675/2609946
https://blog.desdelinux.net/zh-CN/next-js-9-3%E5%B8%A6%E6%9C%89%E5%AF%B9%E9%9D%99%E6%80%81%E7%AB%99%E7%82%B9404%E4%BC%98%E5%8C%96%E7%9A%84%E7%94%9F%E6%88%90%E7%9A%84%E6%94%AF%E6%8C%81%EF%BC%8C%E4%BB%A5%E5%8F%8A%E6%9B%B4%E5%A4%9A/
https://www.chkui.com/article/react/nextjs_getting_starting
https://juejin.cn/post/6977630897432428551
https://juejin.cn/post/6854573217365884941#heading-14
https://juejin.cn/post/6970853900475695140
https://juejin.cn/post/6877746183259815949
https://tech-wiki.online/cn/nextjs-router.html
```

```shell
# VS Code 扩展插件
https://code.visualstudio.com/docs/editor/extension-marketplace
https://dev.to/askrishnapravin/recommend-vs-code-extensions-to-your-future-teammates-4gkb
```

```
Error: Image Optimization using Next.js' default loader is not compatible with `next export`.
  Possible solutions:
    - Use `next start` to run a server, which includes the Image Optimization API.
    - Use any provider which supports Image Optimization (like Vercel).
    - Configure a third-party loader in `next.config.js`.
    - Use the `loader` prop for `next/image`.
  Read more: https://nextjs.org/docs/messages/export-image-api
    at E:\Workspace\code\kids-website\node_modules\next\dist\export\index.js:157:23
    at async Span.traceAsyncFn (E:\Workspace\code\kids-website\node_modules\next\dist\trace\trace.js:79:20)
```

```shell
warn  - Statically exporting a Next.js application via `next export` disables API routes.
This command is meant for static-only hosts, and is not necessary to make your application static.
Pages in your application without server-side data dependencies will be automatically statically exported by `next build`, including pages powered by `getStaticProps`.
Learn more: https://nextjs.org/docs/messages/api-routes-static-export
```

```
Error: Could not find a production build in the 'E:\Workspace\code\kids-website\dest' directory. Try building your app with 'next build' before starting the static export. https://nextjs.org/docs/messages/next-export-no-build-id
```

```
# nextjs 图片

https://github.com/twopluszero/next-images

# 相关文章
https://hongbin.blog.csdn.net/article/details/109638579
https://www.ithere.net/article/253
https://blog.csdn.net/weixin_40532650/article/details/113177566
https://blog.whereisthemouse.com/image-optimization-for-static-nextjs-sites
https://simonallen.coderbridge.io/2021/07/15/nextjs-export-static/

# 相关评论
https://github.com/vercel/next.js/tree/canary/examples/image-component
https://github.com/twopluszero/next-images/issues/73
https://github.com/vercel/next.js/pull/24993
```

```shell
iconfont 
font-face
接口转发
视差动画


中文标题，汉仪粗圆；
英文标题，quicksand；
中文段落，标注，苹方，思源黑；
英文段落，open sans

icon-icon_play
icon-icon_play
&#xe71c;

三组数动态呈现，前1.5s内快速跳动 至终值-5，之后变为1秒跳动1个数字

效果参考（# lessons completed!）
https://www.novakidschool.com/
```

```shell
Warning: ReactDOM. render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. 
# https://javascriptf1.com/how-to/fix-reactdom-render-is-no-longer-supported-in-react-18
```

```shell
# 数字滚动动画

https://codepen.io/dlivingston/pen/erVxqL
https://codesandbox.io/s/long-moon-z9zqu?file=/pages/index.js
https://medium.com/@PostgradExpat/create-an-animated-counter-with-react-odometerjs-hubspot-odometer-js-2f32eb103709
https://github.hubspot.com/odometer/
https://github.com/inferusvv/react-odometerjs/blob/master/src/index.js
https://stackoverflow.com/questions/68958374/how-can-i-integrate-react-odometerjs-in-next-js
https://github.com/dearfrankg/react-odometer
https://madewith.cn/628
https://github.com/Takeos/Odometer/blob/master/dist/Odometer.js

https://blog.csdn.net/jason_renyu/article/details/79283665
https://juejin.cn/post/6986453616517185567
https://inorganik.github.io/countUp.js/
https://www.zhangshengrong.com/p/l51gwv8A10/
https://github.com/majiang666/count-up
https://github.com/zoeblow/numberAnimate
https://codepen.io/jieli/pen/grGoxJ
https://github.com/Takeos/Odometer
https://juejin.cn/post/6844904032381698056
https://juejin.cn/post/6844903910923075591
https://www.jianshu.com/p/b2f7d3eba07f
http://itakeo.com/blog/2015/08/19/numscroll/
https://juejin.cn/post/6995086139484799006
http://itakeo.com/blog/2017/07/10/odometer/
https://www.love85g.com/?p=2084
https://www.qetool.com/scripts/view/11832.html
```

```shell
# React Ref
https://juejin.cn/post/7040773865122824223
https://blog.csdn.net/qq_36990322/article/details/109858890
https://juejin.cn/post/7043368793296338980
https://segmentfault.com/a/1190000038496790
http://www.srcmini.com/3580.html
https://juejin.cn/post/6844903749211652104
https://juejin.cn/post/6911643478183116807
```

```shell
warn  - Attempted to load @next/swc-win32-x64-gnu, but it was not installed
warn  - Attempted to load @next/swc-win32-x64-msvc, but an error occurred: \\?\E:\Workspace\code\kids-website\node_modules\@next\swc-win32-x64-msvc\next-swc.win32-x64-msvc.node is not a valid Win32 application.
\\?\E:\Workspace\code\kids-website\node_modules\@next\swc-win32-x64-msvc\next-swc.win32-x64-msvc.node
error - Failed to load SWC binary for win32/x64, see more info here: https://nextjs.org/docs/messages/failed-loading-swc
```

```shell
Command failed with exit code 1: git commit -m "feat: 添加Acceptance"
[STARTED] Preparing lint-staged...
[SUCCESS] Preparing lint-staged...
[STARTED] Running tasks for staged files...
[STARTED] package.json[2m — 4 files[22m
[STARTED] *.{js,jsx,ts,tsx}[2m — 3 files[22m
[STARTED] package.json[2m — 0 file[22m
[STARTED] *.{css,md}[2m — 0 file[22m
[SKIPPED] package.json[2m — no files[22m
[SKIPPED] *.{css,md}[2m — no files[22m
[STARTED] eslint --fix
[SUCCESS] eslint --fix
[STARTED] prettier --write
[SUCCESS] prettier --write
[SUCCESS] *.{js,jsx,ts,tsx}[2m — 3 files[22m
[SUCCESS] package.json[2m — 4 files[22m
[SUCCESS] Running tasks for staged files...
[STARTED] Applying modifications from tasks...
[SUCCESS] Applying modifications from tasks...
[STARTED] Cleaning up temporary files...
[SUCCESS] Cleaning up temporary files...
.husky/prepare-commit-msg: line 4: /dev/tty: No such device or address
husky - prepare-commit-msg hook exited with code 1 (error)

# https://github.com/commitizen/cz-cli/issues/627

#!/usr/bin/env sh
[[ "$(uname -a)" = *"MINGW64"* ]] && exit 0
[ -n "$CI" ] && exit 0
. "$(dirname -- "$0")/_/husky.sh"

exec < /dev/tty && npx cz --hook || true

```



## Next.js 介绍

> https://developer.51cto.com/article/696748.html



## Next.js 浏览器中打开

> https://github.com/vercel/next.js/discussions/13448
> https://segmentfault.com/a/1190000039744899
> https://blog.csdn.net/sleepwalker_1992/article/details/83783234
> https://github.com/vercel/next.js/issues/12233

## Next.js 测试

> https://medium.com/elmmly/first-steps-unit-tests-with-jest-on-next-js-b424784c3c01



## Next.js 调试

> https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_launch-configuration
> https://blog.logrocket.com/how-to-debug-node-js-apps-in-visual-studio-code/
> https://docs.microsoft.com/en-us/azure/developer/javascript/how-to/with-visual-studio-code/install-run-debug-nodejs
> https://nextjs.org/docs/advanced-features/debugging
> https://www.eet-china.com/mp/a123944.html
> https://blog.csdn.net/aaalswaaa1/article/details/121408668
> https://blog.csdn.net/shentian885/article/details/123896536
> https://www.jianshu.com/p/2242c82eda2d

## Next.js 入门

> https://www.developerhandbook.com/react/getting-started-nextjs/
> https://blog.51cto.com/u_15349906/4909783
> https://haofly.net/nextjs/
> https://nextjs-in-action-cn.taonan.lu/
> https://docs.microsoft.com/zh-cn/windows/dev-environment/javascript/nextjs-on-wsl

## 视差动画

> https://juejin.cn/post/7040283893106212895
> https://juejin.cn/post/6844903926110617613
> https://juejin.cn/post/6844903654458146823
> https://juejin.cn/post/6947634489740754981
> https://juejin.cn/post/6979242113913323556
> https://dumengjie.github.io/2017/07/24/%E8%AF%91-%E9%AB%98%E6%80%A7%E8%83%BD%E8%A7%86%E5%B7%AE%E6%BB%9A%E5%8A%A8/
> https://twitter.com/fradser/status/1482643080306388997



## Next.js 自定义服务

> https://www.nextjs.cn/docs/advanced-features/custom-server
> https://stackoverflow.com/questions/60452054/nextjs-deploy-to-a-specific-url-path
> https://nextjs.org/docs/messages/invalid-server-options
> https://cloud.tencent.com/document/product/1242/49214
> https://hicc.pro/p/blog/nextjs#1368387661

## next.js 特殊字体

> https://blog.theodo.com/2021/03/icon-library-react-why-inline-svg-better-than-font/
> https://juejin.cn/post/7063111159372578829
> https://zhuanlan.zhihu.com/p/82942474
> https://itony.net/nextjs-battle/#cssnano%E5%A4%84%E7%90%86%E5%90%8Efont-face%E5%86%85%E5%AE%B9%E7%BC%BA%E5%A4%B1
> https://juejin.cn/post/6850418113062649869



## Next.js 加载iconfont

> https://blog.csdn.net/qq_39207948/article/details/109394350
> https://blog.csdn.net/qq_41211900/article/details/109570775
> https://blog.csdn.net/qq_41211900/article/details/108443521
> https://codeitup.club/index.php/archives/17/



## Next.js 配置接口跨域代理转发

> https://juejin.cn/post/6997295726552170503
> https://yifei.me/note/2042
> https://juejin.cn/post/7009923493873598494#heading-7
> https://cloud.tencent.com/developer/article/1914387



## 路由拦截

> http://jartto.wang/2018/06/01/nextjs-2/



## Nextjs 多环境构建

> https://jujuontheweb.medium.com/multiple-environment-files-in-a-next-js-app-optional-with-docker-4603a0423a51
> https://github.com/vercel/next.js/issues/12772
> https://stackoverflow.com/questions/59462614/how-to-use-different-env-files-with-nextjs
> https://nextjs.org/blog/next-9-4#new-environment-variables-support



## Nextjs环境变量配置和Api的mock

> https://www.jianshu.com/p/a96226e76b4a



## nextjs同构环境下的环境变量

> https://zhuanlan.zhihu.com/p/165465497



## LazyLoding 实现模块/组件懒加载

> https://juejin.cn/post/6863336367309455373#heading-19



## 部署到 *docker* 容器中

> https://zhuanlan.zhihu.com/p/347602434



## 部署到Github Pages

> https://juejin.cn/post/6844903766907437070#heading-4



## 静态资源引用

> https://juejin.cn/post/6844903668563574798#heading-4



## 事件钩子

> https://juejin.cn/post/6984612818293096478#heading-10



## next.js 环境变量

> https://juejin.cn/post/6946461614099038222#heading-14
> https://juejin.cn/post/6943769360758472735#heading-7gg



## Next.js 环境变量控制部署

> https://blog.csdn.net/a790452097/article/details/113309905



## next.js docs

> https://keyboard3.github.io/blog/nextjs-docs/



## 搭建 Next.js + TS + Antd + Redux + Storybook 企业级项目脚手架

> https://juejin.cn/post/6909986037871673358



## Next.js脚手架搭建

> https://juejin.cn/post/7041070615935057957

```shell
内容包括:
(1)sass样式配置;
(2)axios拦截封装;
(3)action模块化;
(4)reducer模块化;
(5)redux搭建;
(6)dispatch示范;
(7)saga中间件配置;
(8)saga拦截示范;
(9)useEffect异步请求示范;
(10)getServerSideProps/getStaticProps示范;
(11)ssr与csr效果对比;
基本可以做到直接使用,如有特殊的配置需要,大家也可以自行添加即可;
(1)npm install
(2)npm run dev
```

## Next.js Typescript	

> https://juejin.cn/post/6996834929401151525
> https://www.heibaimeng.com/post/87.html
> https://blog.logrocket.com/how-to-set-up-node-typescript-express/



## Next 服务端渲染项目搭建

> https://zhuanlan.zhihu.com/p/489749079



## Next.js + TS 从零开始写一个前端导航页面（一、安装）

> https://blog.jijian.link/2020-04-24/next-install/



## Nginx 配置

> https://blog.csdn.net/weixin_33701564/article/details/87962120
> https://zxuqian.cn/install-nginx-on-ubuntu-20-04



## next.config.js 配置

> https://juejin.cn/post/6844904122198523917



## repo

> https://github.com/fantasticit/wipi
> https://github.com/rohmanhm/nextjs-starter
> https://dev.to/harshmangalam/complete-setup-of-nextjs-swr-axios-and-material-ui-with-ssr-for-your-upcomming-projects-25b0
