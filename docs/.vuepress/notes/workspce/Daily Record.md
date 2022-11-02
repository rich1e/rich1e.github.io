---
banner: "https://images.unsplash.com/photo-1462642109801-4ac2971a3a51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
banner_y: 0.504
---

> Just keep doing.

##  20221101 

- 工作任务调整
- 动态表单优化

[Learning JavaScript Design Patterns](https://www.patterns.dev/posts/classic-design-patterns/)
[JavaScript Design Patterns – Explained with Examples](https://www.freecodecamp.org/news/javascript-design-patterns-explained/)

-   Nicholas Zakas ([Human Who Codes - The official website of Nicholas C. Zakas](http://nczonline.net/), [@slicknet](http://twitter.com/slicknet))
-   Andrée Hansson ([http://andreehansson.se](http://andreehansson.se/), [@peolanha](http://twitter.com/peolanha))
-   Luke Smith ([http://lucassmith.name](http://lucassmith.name/), [@ls_n](http://twitter.com/ls_n))
-   Eric Ferraiuolo ([http://ericf.me/](http://ericf.me/), [@ericf](https://twitter.com/ericf))
-   Peter Michaux ([http://michaux.ca](http://michaux.ca/), [@petermichaux](http://twitter.com/petermichaux))
-   Alex Sexton ([http://alexsexton.com](http://alexsexton.com/), [@slexaxton](http://twitter.com/slexaxton))
- Stoyan Stefanov ([Stoyan's web dev blog: phpied.com](http://www.phpied.com/)

##  20221031 

[[Orca - 功能流程图和时序图]]

> 更新

![[Pasted image 20221031144114.png]]

监视器的全局设置建议移出来

```ad-note
title: Markdown中输出对勾符号和表情包


- &#9744; x &cross; 
- &#9745; &#10004; &check; 

| Unchecked | Unchecked | Checked | Checked |    
| --------- | :-------: | ---------- | :------: |    
| `&#9744;` | &#9744; | `&#9745;` | &#9745; |   
| `x` | x   | `&#10004;` | &#10004; |  
| `&cross;` | &cross; | `&check;` | &check; |

Ref:

[Markdown中输出对勾符号和表情包](http://wfeii.com/2021/10/14/markdown-code.html)
```

##  20221028 

[[Attr 动态表单优化]]
[[mind - Attr 动态表单组件关系图]]
##  20221027

```ad-note
title: axios 使用 IoC 方式重构

1. 封装基础配置（baseURL，headers，withCredentials，timeout等）
2. 重写拦截器（request，response）
3. 重写错误处理逻辑（规范错误code，统一响应数据格式）
4. 通过适配器扩展功能（cache，请求token，超时重试等）

> 尽量保持 axios 原有的使用方式，即传参和返回格式保持一致，不会阉割原有功能。

[真没必要再对 axios 进行过度的封装 - 掘金](https://juejin.cn/post/7103743662315536392)
[vue3 axios全局配置封装 - 掘金](https://juejin.cn/post/7119334793854058532)

[Site Unreachable](https://github.com/axios/axios/issues/164#issuecomment-327837467)

```

```ad-info
title: axios 实现超时重试

[77.9K Star 的 Axios 项目如何优雅实现请求重试 - 腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1751882?cps_key=1d358d18a7a17b4a6df8d67a62fd3d3d)
[axios完美解决自动重试 | Node.js | 张文兵博客](https://www.zhangwenbing.com/blog/nodejs/rka_kpVlX)
```

```ad-info
title: axios & IoC 参考资料

[Dependency injection: setting up InversifyJS IoC for Typescript Apps | by @tkssharma | @tkssharma | Medium](https://medium.com/tkssharma/dependency-injection-setting-up-inversifyjs-ioc-for-typescript-apps-da65edfb1ea8)
[A simple introduction to IOC in Typescript with InversifyJS - Tech Imperialist](https://techimperialist.com/nodejs/a-simple-introduction-to-ioc-in-typescript-with-inversifyjs/)
[theia中的inversifyJS(上)：inversifyJs详解 - 掘金](https://juejin.cn/post/7049717544109752350)
[inversify/InversifyJS: A powerful and lightweight inversion of control container for JavaScript & Node.js apps powered by TypeScript.](https://github.com/inversify/InversifyJS)
[InversifyJS a powerful IoC container for JavaScript apps powered by TypeScript](https://inversify.io/)
[Theia - Cloud and Desktop IDE Platform](https://theia-ide.org/)
[theia/packages/core at master · eclipse-theia/theia](https://github.com/eclipse-theia/theia/tree/master/packages/core)
[应用前端的IoC框架——InversifyJS - 掘金](https://juejin.cn/post/6951269906629427236)
[Introduction · GitBook](https://doc.inversify.cloud/zh_cn/)
[真没必要再对 axios 进行过度的封装 - 掘金](https://juejin.cn/post/7103743662315536392#heading-4)
[vue3 axios全局配置封装 - 掘金](https://juejin.cn/post/7119334793854058532#heading-7)
[前端 - 使用 TypeScript 和依赖注入实现一个聊天机器人_个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000019315544)
[Daruk](https://darukjs.com/)
[daruk/inversify.config.ts at 977a6082966d92ef66048bca90ddcfd68f2e1d44 · darukjs/daruk](https://github.com/darukjs/daruk/blob/977a6082966d92ef66048bca90ddcfd68f2e1d44/src/core/inversify.config.ts)
[带你学习inversify.js系列 - inversify基础知识学习 - 知乎](https://zhuanlan.zhihu.com/p/137542149)
[了不起的 IoC 与 DI-51CTO.COM](https://www.51cto.com/article/623960.html)
[DI 、 IOC 和 DIP 的理解 - 掘金](https://juejin.cn/post/7074050629072584741)
[从前端角度彻底搞懂 DIP、IoC、DI、JS - 知乎](https://zhuanlan.zhihu.com/p/61018434)
[如何利用AOP+IOC思想解构前端项目开发 - 知乎](https://zhuanlan.zhihu.com/p/269624976)
[浅析前端开发中的 MVC/MVP/MVVM 模式 - 知乎](https://zhuanlan.zhihu.com/p/27302766)
```

##  20221026 

```ad-note
title: Vue & inversifyJS & Decorator

Ref:

[VanRoey/vue-inversify-plugin: A plugin for using inversify-js along with Vue.js](https://github.com/VanRoey/vue-inversify-plugin#readme)
[yogurt1/vue3-inversify: Vue3 + Class-style components + Inversify.JS for DI/IoC](https://github.com/yogurt1/vue3-inversify)
[Overview | Vue Class Component](https://class-component.vuejs.org/)
[kaorun343/vue-property-decorator: Vue.js and Property Decorator](https://github.com/kaorun343/vue-property-decorator)

```

##  20221025 

```ad-note
title: Chrome 内存分析

[使用 Chrome Devtools 分析内存问题 - OKKI前端团队](https://fe.okki.com/post/62cbfea7136f570343d89416/)
[Vue系列之常见内存泄漏定位与解决_51CTO博客_vue内存泄漏](https://blog.51cto.com/u_15127679/3763626)
[Chrome开发者工具之JavaScript内存分析 - 苍青浪 - 博客园](https://www.cnblogs.com/cangqinglang/p/10580297.html)
[CN-Chrome-DevTools/CN-Chrome-DevTools: Chrome开发者工具中文手册](https://github.com/CN-Chrome-DevTools/CN-Chrome-DevTools)
[Chrome开发工具 JavaScript 内存分析-腾讯课堂](https://ke.qq.com/itdoc/chromedevtools/8ko91oeg.html)
[【chrome devtools】前端性能分析之chrome devtools的使用 前端项目内存性能优化的建议 前端浏览器崩溃卡死 前端性能分析实战_ws_code_csdn的博客-CSDN博客_chrome devtools 内存](https://blog.csdn.net/jmszl1991/article/details/116016781)
```

##  20221024 

```ad-note
title: IOC & DI & 前端应用

Ref：

[The Implementation of Inversion of Control based on TypeScript - Jeff Tian](https://jeff-tian.jiwai.win/posts/inversion-of-control-implementation-based-on-typescript-3fl6/)
[theia中的inversifyJS(上)：inversifyJs详解 - 掘金](https://juejin.cn/post/7049717544109752350)
[一统江湖的大前端（10）——inversify.js控制反转 - 掘金](https://juejin.cn/post/6925977528397987847)
[应用前端的IoC框架——InversifyJS - 掘金](https://juejin.cn/post/6951269906629427236)
[前端也要懂的解耦思想：从面向对象到面向接口 - 掘金](https://juejin.cn/post/6938702674476941349)
[前端也要懂的解耦思想：从面向接口到IoC容器 - 掘金](https://juejin.cn/post/6940197570769600525)
[前端也要懂的解耦思想：从IoC容器到DI实现 - 掘金](https://juejin.cn/post/6940990486110797855)
[inversify/InversifyJS: A powerful and lightweight inversion of control container for JavaScript & Node.js apps powered by TypeScript.](https://github.com/inversify/InversifyJS)
[InversifyJS a powerful IoC container for JavaScript apps powered by TypeScript](https://inversify.io/)
[InversifyJS |](https://www.inversify.cn/index.html)
[Introduction · GitBook](https://doc.inversify.cloud/zh_cn/)
[Decorator & Reflect Metadata & InversifyJS | Chenng's Home](https://chenng.cn/posts/Decorator-&-Reflect-Metadata-&-InversifyJS/)
[JavaScript Reflect Metadata 详解 - 简书](https://www.jianshu.com/p/653bce04db0b)
[TypeScript中的装饰器&元数据反射：从新手到专家四 - 知乎](https://zhuanlan.zhihu.com/p/42220487)
[解读 IoC 框架 InversifyJS - 掘金](https://juejin.cn/post/6844903705871925255)
[vuejs/vue-class-component: ES / TypeScript decorator for class-style Vue components.](https://github.com/vuejs/vue-class-component)
[kaorun343/vue-property-decorator: Vue.js and Property Decorator](https://github.com/kaorun343/vue-property-decorator)
[Using InversifyJS in NuxtJS | Damir's Corner](https://www.damirscorner.com/blog/posts/20200724-UsingInversifyjsInNuxtjs.html)
[IoC 在 TypeScript 中的實作 | Goofy](https://blog.cptsai.com/2022/05/21/ioc-implementation/)
[使用IOC解耦React组件 - 简书](https://www.jianshu.com/p/3c9371e180e7)
[从 InversifyJS 学习 IoC 的概念、实现以及在 JS 中的应用 · Issue #86 · Pines-Cheng/blog](https://github.com/Pines-Cheng/blog/issues/86)
[IoC和DI的基本概念及InversifyJS入门 - 掘金](https://juejin.cn/post/6844904119392534535)
[使用 TypeScript 和依赖注入实现一个聊天机器人[每日前端夜话0x76] - 腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1440569?from=15425&cps_key=1d358d18a7a17b4a6df8d67a62fd3d3d)
[Better JavaScript? Use TypeScript and Dependency Injection | Toptal](https://www.toptal.com/typescript/dependency-injection-discord-bot-tutorial)
[Ramda Documentation](https://ramdajs.com/)
[Ramda Documentation 中文](https://ramda.cn/)
[2022年国内外前端发展态势 - 掘金](https://juejin.cn/post/7126869314572910600)
[Theia - Cloud and Desktop IDE Platform](https://theia-ide.org/)
```

##  20221021 

Orca 已知问题：

- 目录结构缺乏组织，代码零散，没有实现“低耦合高内聚”
- store 过于杂乱，耦合 API 和视图更新逻辑
- 没有统一规范组织的 API 层
- 业务逻辑、用户交互、计算算法耦合，难以复用和维护
- 环境变量没有统一维护和规范组织，随地引用难以维护
- Typescript 类型定义缺少约定和规范组织
- js 和 ts 共存，ESLint 没有发挥功能
- 整个工程，缺乏页面性能优化。比如预加载、PWA等

```ad-note
title: 每一步操作都需要同步后端服务，这个是否可以优化？

使用PouchDB在客户端存储操作数据，改善服务端压力。

Ref: [淘系前端架构 - 周刊 - 210719 期 - 知乎](https://zhuanlan.zhihu.com/p/390985804)

```

```ad-note
title: Vue & React & rx.js & hook

现代框架 & Hook 使用 rx.js 

Ref:
[useRxState | vuse-rx](https://vuse-rx.raiondesu.rocks/api/use-rx-state.html)
[Update of Vue Rx to Vue Next Rx - DEV Community 👩‍💻👨‍💻](https://dev.to/noprod/update-of-vue-rx-to-rx-vue-next-264g)
[mylabz-xyz/vue-next-rx: RxJS integration for Vue next](https://github.com/mylabz-xyz/vue-next-rx#readme)
[揭秘 Vue 3.0 最具潜力的 API_技术管理_古映杰_InfoQ精选文章](https://www.infoq.cn/article/k2a5yihgxodl3wdujheg)
[vuejs/vue-rx: 👁️ RxJS integration for Vue.js.](https://github.com/vuejs/vue-rx)
[前端框架 Rxjs 实践指北 - 腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1830311?cps_key=1d358d18a7a17b4a6df8d67a62fd3d3d)
[更好用的 RxJS+React hooks 集成方案 - 知乎](https://zhuanlan.zhihu.com/p/92248348)
[安装 | Observable Hooks](https://observable-hooks.js.org/zh-cn/guide/#%E4%BD%BF%E7%94%A8)
[frontend-record/与rxjs结合的常用hooks.md at master · yangfan-p/frontend-record](https://github.com/yangfan-p/frontend-record/blob/master/note/%E4%B8%8Erxjs%E7%BB%93%E5%90%88%E7%9A%84%E5%B8%B8%E7%94%A8hooks.md)
[LeetCode-OpenSource/rxjs-hooks: React hooks for RxJS](https://github.com/LeetCode-OpenSource/rxjs-hooks#apis)
[React 中使用 RxJS 优化数据流的处理 - 掘金](https://juejin.cn/post/7105034623431737357)
[你可能不知道的流式 React Hooks（关于组织代码的最佳实践） - 掘金](https://juejin.cn/post/6933018383961194509#heading-23)
[像呼吸一样自然：React hooks + RxJS - 掘金](https://juejin.cn/post/6844903726084259848)
```

```ad-note
title: axios & rx.js

Ref:

[vue axios Reflect Metadata 反射 - Google 搜索](https://www.google.com/search?q=vue+axios+Reflect+Metadata+%E5%8F%8D%E5%B0%84&newwindow=1&sxsrf=ALiCzsbXtPQpJaCC9YIEksrU8r3boeTAMg:1666348002931&ei=4nNSY7HGOLvekPIP9oyEmAs&start=20&sa=N&ved=2ahUKEwixv6WGjvH6AhU7L0QIHXYGAbM4ChDw0wN6BAgEEAk&biw=1920&bih=867&dpr=1)
[如何在React或Vue中使用Angular 的 Rxjs API服务 - 墨天轮](https://www.modb.pro/db/413319)
[抛弃Promise，Nestjs 使用 Rxjs 来处理异步请求 - 来去匆匆](https://blog.ezcomezgo.com/?p=301)
[使用 @ngify/http 响应式 HTTP 客户端处理常见的请求场景 - 掘金](https://juejin.cn/post/7121049508485529614#heading-16)
[这一次，放下 axios，使用基于 rxjs 的响应式 HTTP 客户端 - 掘金](https://juejin.cn/post/7079724273929027597)
[Nest - Rx.js在http请求中的应用 - 简书](https://www.jianshu.com/p/7b9651511a70)
[ReactiveX 学习笔记（25）使用 RxJS + Vue.js 调用 REST API - zwvista - 博客园](https://www.cnblogs.com/zwvista/p/9974653.html)
[JavaScript网络请求(一)：处理race condition竞态问题 | This Js](https://mrxf.github.io/2020/11/04/javascript-web-request-a-race-condition-problem/)
[聊聊RxJS中的错误重试 - Black-Hole's Blog](https://www.bugs.cc/p/rxjs-error-retry/)
[😈换一种方式对工程中的Api进行封装吧（fashion-axios） - 掘金](https://juejin.cn/post/7142653628904701988)
[theia中的inversifyJS(上)：inversifyJs詳解](https://qdmana.com/2022/01/202201061407334259.html)
[Typescript IOC控制反转 101 (2): 基於reflect-metadata的IOC容器 - 掘金](https://juejin.cn/post/7073361691609661453#heading-4)
[Nest - Rx.js在http请求中的应用 - 简书](https://www.jianshu.com/p/7b9651511a70)
[RxJS - Observable](https://rxjs.dev/guide/observable)
[fromPromise · 学习 RxJS 操作符](https://rxjs-cn.github.io/learn-rxjs-operators/operators/creation/frompromise.html)
[【前端】rxjs从入门到灵活使用 - 掘金](https://juejin.cn/post/6844904175231303693#heading-2)
[RxMarbles: Interactive diagrams of Rx Observables](https://rxmarbles.com/#every)
[SubscribableOrPromise | RxJS 中文文档](https://cn.rx.js.org/class/es6/MiscJSDoc.js~SubscribableOrPromiseDoc.html)
[30 天精通 RxJS :: 2017 iT 邦幫忙鐵人賽](https://ithelp.ithome.com.tw/users/20103367/ironman/1199)
[rxjs - RxJS: 简单入门_个人文章 - SegmentFault 思否](https://segmentfault.com/a/1190000012252368)
[RxJS之于异步，就像JQuery之于dom - 董川民](https://www.dongchuanmin.com/xhtml/1512.html)
[面向未来编程（Future-Oriented Programming），建设未来 Vue 生态 - V2EX](https://www.v2ex.com/t/575788)
[@ignorance/vuex-observable | Yarn - Package Manager](https://yarnpkg.com/package/@ignorance/vuex-observable)
[vuex-observable - CodeSandbox](https://codesandbox.io/embed/black-architecture-sb4g8?fontsize=14&hidenavigation=1&theme=dark)
[yesixuan/libs](https://github.com/yesixuan/libs)
[竞态问题与RxJs - WindrunnerMax - 博客园](https://www.cnblogs.com/WindrunnerMax/p/16340215.html)
[RxJS实践，Vue如何集成RxJS - CodeAntenna](https://codeantenna.com/a/sLYdLIuP92)
[认识认识RxJS - OKKI前端团队](https://fe.okki.com/post/622d8d4b4749766fa46f3fab/)
[vue-rxjs-starter，我完全放弃vuex了，用RxJS抽象出一个service，简直不要太爽 - CNode技术社区](https://cnodejs.org/topic/5924f2c0d371b6372a8afce9)
[JavaScript Theory: Promise vs Observable | by Wojciech Trawiński | JavaScript everyday | Medium](https://medium.com/javascript-everyday/javascript-theory-promise-vs-observable-d3087bc1239a)
[使用rxjs和webRTC和vue实现视频流在本地网络上的传输Demo_剑玄录的博客-CSDN博客_vue中使用rxjs](https://blog.csdn.net/yc454477405/article/details/120867889)
```
##  20221020 

创建 Vite + Vue 项目

- mock
- 使用Reflect Metadata & axios 反射接口数据

## 20221019

- [[RxJS]]
- [[Reflect Metadata]]

## 20221018

[[Max-Optics Api]]

- 接口文档不够详细：缺少业务场景和功能描述；
- 接口缺少域名、协议、路径，调用环境不完整；
- 接口字段缺少类型、描述，以及字段的长度限制；

如何使用 [[Javascrip 装饰器]]？

## 20221017

[[Orca - 功能流程图和时序图]]

## 20221014

Orca 插件化思考？
- [大型 Web 应用插件化架构探索 - 掘金](https://juejin.cn/post/6916863150872592392)
- [前端进阶：跟着开源项目学习插件化架构 - 掘金](https://juejin.cn/post/6844904196689379335)
- [前端插件化架构的探索和实践（上篇） - 掘金](https://juejin.cn/post/6867718721348042765)
- [前端插件化架构的思考 - 掘金](https://juejin.cn/post/6844904090275676168)
- [实现前端插件化架构设计，将需求开发「交给别人」 - 掘金](https://juejin.cn/post/7118929960038842381)
- [插件化设计模式在前端领域的应用](https://webfe.kujiale.com/cha-jian-hua-she-ji-mo-shi-zai-qian-duan-ling-yu-de-ying-yong/)

![[Pasted image 20221016185201.png]]


```markdown
https://wangxiao.xisaiwang.com/tiku2/report505792958.html?isSubPaper=Y
https://wangxiao.xisaiwang.com/tiku2/ctjx505792958.html
```

## 20221013

功能流程：


```mermaid
graph LR
模型器件 --> 建模
材料 --> 建模
波形 --> 建模
模式源 --> 建模
监视器 --> 建模
Port --> 建模
PML/PEC边界设置 --> 建模
建模 ==> 配置
配置 ==> 计算
计算 --> 网格剖分
计算 --> 仿真结果
计算 --> 参数扫描
```

```mermaid
sequenceDiagram
　　　participant Alice
　　　participant Bob
　　　Alice->John:Hello John, how are you?
　　　loop Healthcheck
　　　　　John->John:Fight against hypochondria
　　　end
　　　Note right of John:Rational thoughts <br/>prevail...
　　　John-->Alice:Great!
　　　John->Bob: How about you?
　　　Bob-->John: Jolly good!
```




## 20221012

10 月工作任务：
- Orca 业务功能流程图和依赖接口时序图
- visualizer 组件优化：VTable.vue、VController.vue
- Orca 功能检查和优化建议

Orca 功能模块：
- CAD 建模
	- 模型器件（Structures）
	- 模式源（Source）
	- 监视器（Monitor）
	- 解算器（Port）
	- 网格剖分（Remesh）
	- 材料管理（Material）
	- 波形（Waveforms）
- 算法模拟器（Simulation）
	- FDTD
	- EME
	- FDE
- 栏目/视窗
	- 菜单栏
	- 快捷栏
	- 工具栏
	- 状态栏
	- objects展示列表（Objects Tree）
	- 仿真结果（Results View）
	- 参数扫描（Optimizations and Sweeps）
	- 任务树（Task Tree）


## 20221011
整体优化方案

-   项目工程结构优化
-   visualizer 组件优化
-   Angelfish 组件迁移
-   计算公式封装
-   补充 Typescript 类型定义
-   补充代码注释

第一期改造点：

1.  visualizer 组件优化：VTable.vue、VController.vue
2. Angelfish 组件迁移：draw 和 modules 文件夹下的部分组件使用 Angelfish 重写

> 主要是2方面的优化：1) Typescript 改造和补充类型定义; 2) template 逻辑优化；

## 20221010

- 代码追溯大会
- 熟悉 orca 代码

## 20221009

- 电脑环境配置
- 获取代码，并启动项目
- 新人培训：光电芯片知识

## 20221008

- 公司入职
- 新人入职材料
- 门禁卡
- 开通 IT 权限：电脑密码，代码仓库访问权限
