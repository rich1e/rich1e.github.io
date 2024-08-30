# Cookies VS Sessions

> Session 和 Cookie 都是 Web 开发中常用的,用于跟踪用户状态的技术。

[[toc]]

![image-20221114091500](@images\web-development\cookies-vs-sessions\image-20240304114126.png)

## 关键区别

它们之间存在一些关键的区别：

### 1. 存储位置

Cookie存储在客户端（浏览器）上，由浏览器管理。
Session存储在服务器端，由服务器管理。

### 2. 数据大小

Cookie的存储大小有限，一般为4KB左右。
Session的存储大小没有限制，但受服务器资源的限制。

### 3. 有效期

Cookie的有效期由开发者设置，可以是永久的，也可以是临时的。
Session的有效期一般为30分钟，如果用户在30分钟内没有操作，则Session会失效。

### 4. 安全性

Cookie存储在客户端，容易被攻击者窃取。
Session存储在服务器端，相对安全一些。

### 5. 数据类型

Cookie只能存储字符串数据。
Session可以存储任何类型的数据。

### 6. 应用场景

Cookie常用于记住用户的登录状态、语言偏好等信息。
Session常用于存储用户的购物车信息、表单数据等信息。

## 总结

- Cookie和Session是两种不同的技术，用于跟踪用户状态。
- Cookie存储在客户端，Session存储在服务器端。
- Cookie的存储大小有限，Session的存储大小没有限制。
- Cookie的有效期由开发者设置，Session的有效期一般为30分钟。
- Cookie存储在客户端，容易被攻击者窃取，Session存储在服务器端，相对安全一些。
- Cookie只能存储字符串数据，Session可以存储任何类型的数据。
- Cookie常用于记住用户的登录状态、语言偏好等信息，Session常用于存储用户的购物车信息、表单数据等信息。
