## 方案背景

- 代码可复用性低
- 代码可扩展性低
- 代码缺少组织和封装
- 组件结构层次不清晰，对外调用方式不统一

## 方案技术

1. 采用 IoC（Inversion of Control）控制反转的思路，解决代码之间的强耦合关系，提高可复用性和可扩张性；
2. 使用 DI （Dependency Injection）注入的方式，结合 InversifyJS & Reflect Metadata 方案实现控制反转；
4. 使用 Class 和 implements 组织代码结构层次和逻辑封装；
5. 对外提供 InversifyJS 框架的容器，保证调用方式统一；

## 方案计划

- Util（http & axios & RxJS）
- Components（modules & InversifyJS）

## Ref

[[Reflect Metadata]]
[[InversifyJS]]
[[RxJS]]