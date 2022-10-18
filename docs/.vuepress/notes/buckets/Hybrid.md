## 实现方式

1. API注入
2. 拦截URL Scheme

**URL Scheme**

原理：WebView通过某种方式发送URL Scheme请求，Native根据拦截的请求内容解析参数，并执行相关操作。

声明通信协议

```scheme
{scheme}://{action}?{parameter}={value}&{parameter}={value}...

# 示例
app://item?id=${itemId}&ut_sk=${utSk}&spm=widle.12011849.1.1
```

iOS

采用iframe的方式通讯

```javascript
const url_scheme = 'app://item?id=${itemId}&ut_sk=${utSk}&spm=widle.12011849.1.1'
const iframe = document.createElement('iframe')

iframe.setAttrbute('src', url_scheme)
document.documentElement.appendChild(iframe)
iframe.parentNode.removeChild(iframe)
iframe = null
```

Android

```javascript
const url_scheme = 'app://item?id=${itemId}&ut_sk=${utSk}&spm=widle.12011849.1.1'
prompt(url_scheme)
```

**API注入**

原理：通过WebView提供的接口，向Javascript的Context中注入对象或者方法，让Javascript调用时直接执行相应的Native代码逻辑。

```objective-c
- ()createWebViewMessageHandler
{
  ALDJSWebViewMessageHandler *messageHandler = [[ALDJSWebViewMessageHandler alloc] init];
  messageHandler.webView = (ALDJSWebView *)**self**;
  [**self**.configuration.userContentController addScriptMessageHandler:messageHandler name:ALDHybridBridgeMessageHandlerKey];
}
```



```javascript
window.webkit.messageHandlers.aladdinBridge.postMessage(ctx);
```


https://zhuanlan.zhihu.com/p/340651153
https://juejin.cn/post/6864808232146337799
https://juejin.cn/post/6844903540456964109
https://quickhybrid.github.io/quickhybrid-doc/api/api_device/api_device.html
https://github.com/marcuswestin/WebViewJavascriptBridge#usage
https://juejin.cn/post/6872185695838928909
https://www.cnblogs.com/yexiaochai/p/4921635.html
https://juejin.cn/post/6844903987016122376
https://mp.weixin.qq.com/s/I812Cr1_tLGrvIRb9jsg-A
https://juejin.cn/post/6844903855189164040
https://www.jianshu.com/p/ba6358b1eec3
https://www.google.com/search?newwindow=1&safe=strict&sxsrf=ALeKk00FBfgdxk1rZOsMxhQqXRmdiXpKFw%3A1613978490810&ei=elszYOzjMJSUr7wPquu7yAs&q=ios+%E5%AE%89%E8%A3%85%E6%B5%8B%E8%AF%95%E5%8C%85&oq=ios+%E5%AE%89%E8%A3%85%E6%B5%8B%E8%AF%95&gs_lcp=Cgdnd3Mtd2l6EAMYADICCAA6FAgAELADEIoDELcDENQDEOUCEIsDOggIABCwAxCLAzoKCAAQsAMQDBCLAzoMCAAQsAMQBxAeEIsDOgQIIxAnOgQIABBDOgUIABDLAToECAAQDFCPpwdYm_IHYJCACGgBcAB4AIAB_gOIAbURkgEJMC45LjEuNS0xmAEAoAEBqgEHZ3dzLXdpesgBCrgBAsABAQ&sclient=gws-wiz
https://zhuanlan.zhihu.com/p/141191661
http://www.applicationloader.net/appuploader/onlinetools.php
https://www.jianshu.com/p/304ec98842e1