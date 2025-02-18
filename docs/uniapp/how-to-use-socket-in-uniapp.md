---
title: Uniapp 中如何使用 Socket
date: 2025-2-17
permalinkPattern: :year/:month/:day/:slug.html
permalink: /uniapp/how-to-use-socket-in-uniapp
---

# Uniapp 中如何使用 Socket

[[toc]]

通常来讲，有 3 种方式：

1. 直接使用 JS 原生提供的 WebSocket 方法；
2. 使用 uniapp 内置的 WebSocket 方法；
3. 使用 Socket.io 套件；

这些方式各有千秋，如何选择，要根据实际情况决定。

| | 兼容性 <div style="width: 100px"></div> | 上手难度 <div style="width: 100px"></div>| 功能完备性 <div style="width: 450px"></div> | 社区和第三方<div style="width: 100px"></div> |
| :- | :-: | :-: | - | :-: |
| 原生 WebSocket | 好 | 容易   | 无，需要自行开发 | 活跃     |
| uni.connectSocket | 好 | 容易   | 一般，只有简单封装，满足不了业务场景 | 活跃 |
| Socket.io | 一般 | 难 | Uniapp 平台编译的 JS 版本与 Socket.io 存在兼容性，新版本的 Socket.io 会出现错误，老版本有可能可以工作，但存在很多不确定性。毕竟 Socket.io 是先出来的，后面有了 Uniapp 这个平台，但是缺少官方的适配工作，所以二者兼容性差。 | 活跃 |

> Socket.io 在应用市场上也有第三方封装的插件。有人安装成功，也有人失败……比如我自己。。。

## Socket 封装

从 MDN 可以了解到，JS 的 WebSocket 对象提供了用于创建和管理 WebSocket 连接，以及可以通过该连接发送和接收数据的 API。

在这些基础 API 之上，我们需要封装以下功能：

1. 主动建立连接
2. 心跳机制
3. 断线重连
4. 主动断开

展示一段 MDN 的示例代码[^1]：

```js
// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:8080");

// Connection opened
socket.addEventListener("open", function (event) {
  socket.send("Hello Server!");
});

// Listen for messages
socket.addEventListener("message", function (event) {
  console.log("Message from server ", event.data);
});
```

这段代码是正确的，也可以工作。但是存在以下问题：

1. 面向过程的代码调用，难以复用；
2. 缺少封装，难以扩展；
3. callback hell[^2]，很难直观地获得代码执行后的正确性；

说了这么多，现在开始动手封装吧。

> 当前主要讲述 Uniapp 平台下如何封装。

### 主动建立连接

创建简单的 Socket 连接，很难满足日常开发需求，最常见的要求就是 **URL 参数拼接和支持子路径**。例如：

```js
wss://socket.serve/sub-path?token=xxxx&param1=x&param2=x&param3=x.....&param=x
```

API 可以这样设计：

- `backendUrl` socket 服务地址
- `path` 子路径
- `query` URL 参数

代码如下：

```js
/**
 * 将对象转换成 URL 拼接参数
 * @param {*} obj
 * @param {*} requestStr
 * @returns
 */
const obj2Params = (obj, requestStr = '?') => {
  let params = requestStr
  for (let p in obj) {
    params += p + '=' + obj[p] + '&'
  }
  return params.substring(0, params.length - 1)
}

const params = {
  backendUrl: 'socket.serve',
  path: '/socket.io/',
  query: {
    transport: 'websocket',
    token: 'your-token',
    device: 'app',
    EIO: '4',
  },
}

const query = obj2Params(params.query)
const wsUrl = `${params.backendUrl}${params.path}${query}`

// 创建 WebSocket 连接
const socketTask = uni.connectSocket({
  url: wsUrl,
  complete: () => {},
})
```

### 心跳机制

> 心跳机制是定时发送一个自定义的数据结构体，让对方知道自己还活着，以确保连接的有效性的机制。

这里，我们参考 Socket.io，他们建立了一个 `ping/pong` 的机制[^3]，用来确保客户端与服务端连接的有效性。核心代码如下：

```js
// 创建 WebSocket 连接
const socketTask = uni.connectSocket({
  url: wsUrl,
  complete: () => {},
})

// 心跳间隔、重连 websocket 间隔，15 秒
const interval = 15000

const onHeartBeat = () => {
  setInterval(() => {
    socketTask.send({
      data: '3',
      success() {
        console.log('\n🚀 ~ 心跳发送成功！')
      },
      fail: (err) => {
        console.error('🚀 ~心跳发送失败', err)
      },
    })
  }, interval)
}

// 发送心跳
onHeartBeat()
```

### 断线重连

实际生活中，由于网络延迟、错误异常或者服务器更新重启等意外突发情况，之前建立的 socket 连接可能被中断。面对这样的情况，我们该如何处理呢？

通常的做法是，在不打扰用户、用户无感的情况下，程序自动重新连接服务，确保连接正常。为了保证连接成功，**一般会尝试多次，当超过连接次数的上限时，才放弃自动连接。** 设置上限，是为了防止无休止的无效连接，引发其它问题。

核心代码如下：

```js
// 重新连接次数
let reconnectTime = 1
// 重新连接 Timer
let reconnectTimer = null
// 间隔 15 秒
const interval = 15000
// 重连最大次数
const maxReconnectMaxTime = 5

const onReconnect = () => {
  clearTimeout(reconnectTimer)
  if (reconnectTime < maxReconnectMaxTime) {
    reconnectTimer = setTimeout(() => {
      console.warn(`🚀 ~ 第【${reconnectTime}】次重新连接中……`)
      // 重新连接
      // CreateSocket()
      reconnectTime++
    }, interval)
  } else {
    uni.showModal({
      title: '提示',
      content: 'socket 连接失败 ~',
      showCancel: false,
      confirmText: '我知道了',
      success: () => {
        // something
      },
    })
  }
}
// 尝试重新连接
onReconnect();
```

### 主动断开

当用户退出登录，或者主动断开 socket 连接时。核心代码如下：

```js
// 创建 WebSocket 连接
const socketTask = uni.connectSocket({
  url: wsUrl,
  complete: () => {},
})

const close = () => {
  socketTask.close()
}

// 关闭 websocket
close();
```

## 完整的代码

综合以上内容，完整代码如下：

::: details 点击查看代码

```js
class WSocket {
  constructor(options) {
    // 状态
    this.status = 'notConnected'
    // 配置
    this.options = options
    // WS 实例
    this.socketTask = null

    // 心跳间隔、重连 websocket 间隔，15 秒
    this.interval = 15000
    // 重连最大次数
    this.maxReconnectMaxTime = 5
    // 正常关闭
    this.normalCloseFlag = false
    // 重新连接次数
    this.reconnectTime = 1
    // 重新连接 Timer
    this.reconnectTimer = null
    // 心跳 Timer
    this.heartTimer = null

    // 发起连接
    this.initSocket(options.token)

    // 关闭 WS
    this.close = () => {
      // 正常关闭状态
      this.normalCloseFlag = true
      // 关闭 websocket
      this.socketTask.close()
      // 关闭心跳定时器
      clearInterval(this.heartTimer)
      // 关闭重连定时器
      clearTimeout(this.reconnectTimer)
    }
  }

  /**
   * 将对象转换成 URL 拼接参数
   * @param {*} obj
   * @param {*} requestStr
   * @returns
   */
  obj2Params(obj, requestStr= '?') {
    let params =requestStr
    for (let p in obj) {
      params += p + '=' + obj[p] + '&'
    }
    return params.substring(0, params.length - 1)
  }


  /**
   * 将对象转换成 URL 拼接参数
   * @param {*} obj
   * @param {*} requestStr
   * @returns
   */
  initSocket(token) {
    if (!token)
      return console.error('Socket init failed, token is required !!!')

    const params = {
      backendUrl: WS_HOST,
      path: '/socket.io/',
      query: {
        transport: 'websocket',
        token,
        device: 'app',
        EIO: '4',
      },
    }

    const query = this.obj2Params(params.query)
    const wsUrl = `${params.backendUrl}${params.path}${query}`

    // 创建 WebSocket 连接
    this.socketTask = uni.connectSocket({
      url: wsUrl,
      complete: () => {},
    })

    this.watchWS()
  }

  watchWS() {
    // 监听 WebSocket 连接打开事件
    this.socketTask.onOpen(() => {
      this.status = 'connected'
      // 连接成功
      this.options.onConnected && this.options.onConnected(this.socketTask)
      // 重置连接次数
      this.reconnectTime = 1
      // 发送心跳
      this.onHeartBeat()
      // 监听消息
      this.onMessage()
      // 关闭 Toast
      uni.hideLoading()
    })

    // 监听 websocket 错误
    this.socketTask.onError((err) => {
      console.error(
        '🚀 ~ WSocket ~ this.socketTask.onError ~ websocket 错误：',
        err
      )
      // 关闭并重连
      this.socketTask.close()
    })

    // 监听 WebSocket 连接关闭事件
    this.socketTask.onClose((res) => {
      console.warn(
        '🚀 ~ WSocket ~ this.socketTask.onClose ~ 连接关闭事件，',
        res
      )
      // 连接错误，发起重连接
      if (!this.normalCloseFlag) {
        this.onDisconnected(res)
      }
    })
  }

  getSocketTask() {
    return this.socketTask
  }

  // 监听消息
  onMessage() {
    // 监听 websocket 收到消息
    this.socketTask.onMessage((res) => {
      //收到消息
      if (res.data) {
        console.log('🚀 ~ 收到服务器内容：', res.data)
        this.options.onMessage && this.options.onMessage(res)
      } else {
        console.warn('🚀 ~ 未监听到消息，原因：', JSON.stringify(res))
      }
    })
  }

  // 断开连接
  onDisconnected(res) {
    this.status = 'notConnected'
    console.warn('🚀 ~ websocket 断开连接，原因：', JSON.stringify(res))
    // 关闭心跳
    clearInterval(this.heartTimer)
    // 全局 Toast 提示，防止用户继续发送
    // uni.showLoading({ title: '消息收取中…' })
    // 尝试重新连接
    this.onReconnect()
  }

  /** 断线重连 */
  onReconnect() {
    clearTimeout(this.reconnectTimer)
    if (this.reconnectTime < this.maxReconnectMaxTime) {
      this.reconnectTimer = setTimeout(() => {
        console.warn(`🚀 ~ 第【${this.reconnectTime}】次重新连接中……`)
        // 重新连接
        this.initSocket(getApp().globalData.token)
        this.reconnectTime++
      }, this.interval)
    } else {
      uni.showModal({
        title: '提示',
        content: 'socket 连接失败 ~',
        showCancel: false,
        confirmText: '我知道了',
        success: () => {
          // somothing
        },
      })
    }
  }

  /** 心跳检查 **/
  onHeartBeat() {
    this.heartTimer = setInterval(() => {
      this.socketTask.send({
        data: '3',
        success() {
          console.log('\n🚀 ~ 心跳发送成功！')
        },
        fail: (err) => {
          console.error('🚀 ~心跳发送失败', err)
        },
      })
    }, this.interval)
  }
}

// 对外暴露实例化方法
export const createSocket = (options) => new WSocket(options)
```
:::

## Ref

- [uniapp 即时聊天 websocket 封装（建立连接、断线重连、心跳机制、主动关闭）使用 SocketTask 的方式 - 掘金](https://juejin.cn/post/7144913531664597029)
- [基于 uniapp 使用 websocket 进行实时通讯最近在做一个赛事的需求，需要使用实时通讯实现房间内交换位置，转让房主， - 掘金](https://juejin.cn/post/7438840219438301221)
- [uni-app 使用 websocket（心跳机制）1. 为什么叫心跳包呢？它就像心跳一样每隔固定的时间发一次，来告诉服务 - 掘金](https://juejin.cn/post/6933833582716813325)
- [WebSocket 心跳机制的原理你知道多少？为什么需要心跳检测？正常的情况客户端断开连接会向服务端发送一个 fin 包，服 - 掘金](https://juejin.cn/post/7425822400178470949)
- [为什么面试官都爱问 websocket？什么是 webSocket？简单来说：webSocket 就是服务器和客户端相互主动 - 掘金](https://juejin.cn/post/7346919387353219106)
- [5 分钟从 0 到 1，学会 webSocket 的使用什么是 webSocket？优点：基于 TCP 协议：WebSocket 建立 - 掘金](https://juejin.cn/post/7346471697162649634)
- [uni.connectSocket(OBJECT) | uni-app 官网](https://uniapp.dcloud.net.cn/api/request/websocket.html)
- [赶快收藏！全网最佳 websocket 封装：完美支持断网重连、自动心跳！简介 websocket 在前端开发中，是一个必须掌 - 掘金](https://juejin.cn/post/7371365854012276747)


[^1]:  [WebSocket - Web API | MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket)
[^2]: [回调地狱 --- Callback Hell](http://callbackhell.com/)
[^3]: [How to build a basic Socket.IO client | Socket.IO](https://socket.io/zh-CN/how-to/build-a-basic-client#heartbeat)
