
## 疑难问点

> 包含产品逻辑和技术方案

- **使用 uniapp 框架自带 Websocket 连接后端服务，前后端如何协同开发？如何调试？**
- **文件下载后，客户端（Android / iOS）需要保存文件多久？**
- **下次打开 app 是否显示已下载文件？如果 uniapp 框架不支持，如何展示？**
- **文件批量下载、批量暂停的技术方案是什么？能否满足产品需求？**
- **文件是否需要支持断点续传？**

## 模块划分

- Notification
- Download List
- E-Mail

## 页面功能

- 页面列表增删改查，以及批量删除、批量已读
- 页面列表支持分页、指定每页条目、总数
- 页面详情增删改查

## 列表展示

不同模块，列表内部展示样式不同，操作按钮也不同。

![[meta/Pasted image 20241129113730.png]]

![[meta/Pasted image 20241129113822.png]]

![[meta/Pasted image 20241129113839.png]]

## 弹窗展示

![[meta/Pasted image 20241129113939.png]]

![[meta/Pasted image 20241129114002.png]]

## 详情展示

![[meta/Pasted image 20241129130247.png]]

![[meta/Pasted image 20241129130322.png]]

## 消息推送

Message Center **入口 Icon** 、**下拉弹窗**和**页面列表 title** 需要显示消息数目、任务状态（下载中/已完成/toast提示），与后端讨论将使用 `Web Socket` 技术实现。

![[meta/Pasted image 20241129114038.png]]

![[meta/Pasted image 20241129114107.png]]

![[meta/Pasted image 20241129130509.png]]