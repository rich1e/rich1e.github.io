---
banner: "https://images.unsplash.com/photo-1462642109801-4ac2971a3a51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1073&q=80"
banner_y: 0.504
---

> Just keep doing.

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

### 登录流程*

```mermaid
graph TB

TB(Start) ==> A[登录dolphin]
A[登录dolphin] ==> B[输入用户名和密码]
B[输入用户名和密码] ==> C[跳转项目管理页面]
C[跳转项目管理页面] ==> BT(End)
```

![[Pasted image 20221017150236.png]]

- [API Document - login](http://192.168.91.37/api/login/)
- [API Document - get_user](http://192.168.91.37/api/get_user/)
- [API Document - search_projects_for_dolphin](http://192.168.91.37/api/search_projects_for_dolphin/)
- [API Document - circle_summary](http://192.168.91.37/api/circle_summary/)
- [API Document - circle_groups](http://192.168.91.37/api/circle_groups/)
- [API Document - circle_groups](http://192.168.91.37/api/circle_groups/)

> NOTE：circle_groups 接口重复调用

### 建模配置

```mermaid
graph TB

TB(Start) ==> A[新建设计稿]
A[新建设计稿] ==> B[跳转CAD设计平台,弹出输入项目名称]
B[跳转CAD设计平台,弹出输入项目名称] ==> C[输入项目名称,点击确认]
C[输入项目名称,点击确认] ==> BT(End)
```

![[Pasted image 20221017151356.png]]

- [API Document - circle_summary](http://192.168.91.37/api/circle_summary/)

![[Pasted image 20221017151640.png]]

- [API Document - check_token](http://192.168.91.37/api/check_token/)
- [API Document - search_waveforms](http://192.168.91.37/api/search_waveforms/)
- [192.168.91.37/socket.io/?EIO=4&transport=polling&t=OFaoeWG](http://192.168.91.37/socket.io/?EIO=4&transport=polling&t=OFaoeWG)
- [API Document - get_view_configuration](http://192.168.91.37/api/get_view_configuration/)
- [API Document - get_user](http://192.168.91.37/api/get_user/)
- [192.168.91.37/socket.io/?EIO=4&transport=polling&t=OFaoeYO&sid=Y-GfNP269nzvOcaeALOp](http://192.168.91.37/socket.io/?EIO=4&transport=polling&t=OFaoeYO&sid=Y-GfNP269nzvOcaeALOp)
- [192.168.91.37/socket.io/?EIO=4&transport=polling&t=OFaoeYP&sid=Y-GfNP269nzvOcaeALOp](http://192.168.91.37/socket.io/?EIO=4&transport=polling&t=OFaoeYP&sid=Y-GfNP269nzvOcaeALOp)
- [API Document - set_view_configuration](http://192.168.91.37/api/set_view_configuration/)
- [192.168.91.37/socket.io/?EIO=4&transport=polling&t=OFaq5zx&sid=f9RrhFyxLm8UV3NpALPZ](http://192.168.91.37/socket.io/?EIO=4&transport=polling&t=OFaq5zx&sid=f9RrhFyxLm8UV3NpALPZ)
- [API Document - get_public_materials](http://192.168.91.37/api/get_public_materials/)
- [API Document - search_materials](http://192.168.91.37/api/search_materials/)
- [API Document - search_projects](http://192.168.91.37/api/search_projects/)
- [API Document - search_projects](http://192.168.91.37/api/search_projects/)

![[Pasted image 20221017152243.png]]

- [API Document - search_projects](http://192.168.91.37/api/search_projects/)
- [API Document - search_projects](http://192.168.91.37/api/search_projects/)
- [API Document - create_project](http://192.168.91.37/api/create_project/)
- [API Document - open_project](http://192.168.91.37/api/open_project/)
- [API Document - save_project](http://192.168.91.37/api/save_project/)
- [API Document - load_project](http://192.168.91.37/api/load_project/)
- [API Document - autoSave_project](http://192.168.91.37/api/autoSave_project/)
- [API Document - set_project_configuration](http://192.168.91.37/api/set_project_configuration/)
- [API Document - set_project_configuration](http://192.168.91.37/api/set_project_configuration/)
- [API Document - get_tasks](http://192.168.91.37/api/get_tasks/)

#### 材料编辑

```mermaid
graph TB

TB(Start) ==> A[打开材料]
A[打开材料] ==> B[显示材料弹窗]
B[显示材料弹窗] ==> C[直接关闭]
C[直接关闭] ==> BT(End)
B[显示材料弹窗] ==> D[编辑材料]
D[编辑材料] ==> E[添加/删除材料]
E[添加/删除材料] ==> F[关闭弹窗]
F[关闭弹窗] ==> BT(End)
```

![[Pasted image 20221017154026.png]]

- [API Document - get_public_materials](http://192.168.91.37/api/get_public_materials/)
- [API Document - search_materials](http://192.168.91.37/api/search_materials/)

![[Pasted image 20221017154110.png]]

- [API Document - change_materials](http://192.168.91.37/api/change_materials/)

![[Pasted image 20221017162600.png]]

- [API Document - create_material](http://192.168.91.37/api/create_material/)
- [API Document - delete_material](http://192.168.91.37/api/delete_material/)

#### 波形编辑

```mermaid
graph TB

TB(Start) ==> A[打开波形]
A[打开波形] ==> B[显示波形弹窗]
B[显示波形弹窗] ==> C[直接关闭]
C[直接关闭] ==> BT(End)
B[显示波形弹窗] ==> D[编辑波形]
D[编辑波形] ==> E[添加/删除波形]
E[添加/删除波形] ==> F[关闭弹窗]
F[关闭弹窗] ==> BT(End)
```

![[Pasted image 20221017165120.png]]

- [API Document - search_waveforms](http://192.168.91.37/api/search_waveforms/)
- [API Document - change_waveforms](http://192.168.91.37/api/change_waveforms/)
- [API Document - create_waveform](http://192.168.91.37/api/create_waveform/)
- [API Document - delete_many_waveforms](http://192.168.91.37/api/delete_many_waveforms/)

#### 模型器件编辑

![[Pasted image 20221017171707.png]]
#### 算法模拟

![[Pasted image 20221017165941.png]]

#### 模式源编辑

#### 监视器编辑

#### Port 编辑

### 运行计算

#### 仿真计算

#### 网格剖分

#### 参数扫描

### 快捷操作

#### Ctrl + s（保存）

#### Ctrl + z（撤回）

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