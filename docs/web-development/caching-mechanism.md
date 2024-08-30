# 缓存机制：提高网页加载速度的秘密

[[toc]]

## 浏览器如何使用缓存

![image-20221114091500](@images\web-development\caching-mechanism\image-20240304113334.jpg)

浏览器在第一次请求后缓存资源，再次请求时，会进行下面两个步骤：

1. 获取该缓存资源的 `header` 中的信息，根据响应头中的 `expires` 和 `cache-control` 来判断是否命中强缓存，如果命中则直接从缓存中获取资源。

2. 如果没有命中强缓存，浏览器就会发送请求到服务器，这次请求会带上 `IF-Modified-Since` 或者 `IF-None-Match`, 它们的值分别是第一次请求返回 `Last-Modified` 或者 `Etag`，由服务器来对比这一对字段来判断是否命中。如果命中，则服务器返回 `304` 状态码，并且不会返回资源内容，浏览器会直接从缓存获取；否则服务器最终会返回资源的实际内容，并更新 `header` 中的相关缓存字段。

## 浏览器缓存的类别

浏览器缓存分为强缓存和协商缓存

### 强缓存
浏览器不会像服务器发送任何请求，直接从本地缓存中读取文件并返回 `Status Code: 200 OK`。

- `200 form memory cache` : 不访问服务器，一般已经加载过该资源且缓存在了内存当中，直接从内存中读取缓存。浏览器关闭后，数据将不存在（资源被释放掉了），再次打开相同的页面时，不会出现from memory cache。
- `200 from disk cache`： 不访问服务器，已经在之前的某个时间加载过该资源，直接从硬盘中读取缓存，关闭浏览器后，数据依然存在，此资源不会随着该页面的关闭而释放掉下次打开仍然会是from disk cache。

> 优先访问 `memory cache`,其次是 `disk cache`，最后是请求网络资源。

### 协商缓存
向服务器发送请求，服务器会根据这个请求的 `request header` 的一些参数来判断是否命中协商缓存，如果命中，则返回 `304` 状态码并带上新的 `response header` 通知浏览器从缓存中读取资源；

## 强缓存和协商缓存的 header 字段

强缓存是指浏览器在未与服务器协商的情况下，直接从本地缓存中加载资源。 强缓存可以通过以下两种方式实现：

- `Expires`：`Expires` 指定了资源的过期时间。 在资源的过期时间之前，浏览器会直接从本地缓存中加载资源。
- `Cache-Control`：`Cache-Control` 可以指定更复杂的缓存策略，例如 `max-age` 指示资源的缓存时间，no-cache 指示浏览器在使用缓存之前必须与服务器进行协商。

强缓存的优点是可以提高网页加载速度，减少服务器负载。 缺点是如果资源更新了，用户可能无法看到最新的内容。

> 注意，`Cache-Control` 与 `Expires` 可以在服务端配置同时启用，同时启用的时候 `Cache-Control` 优先级高。建议使用 `Cache-Control` 。

### Expires
指定了资源的过期时间。在资源的过期时间之前，浏览器会直接从本地缓存中加载资源；

### Cache-Control（http1.1）
当值设为 `max-age=300` 时，则代表在这个请求正确返回时间（浏览器也会记录下来）的5分钟内再次加载资源，就会命中强缓存。

```js
Cache-Control: max-age=300 // 代表着资源的有效期是5分钟。
```

`Cache-control` 几个比较常用的设置值：
- `max-age`：用来设置资源（representations）可以被缓存多长时间，单位为秒；
- `s-maxage`：和 `max-age` 是一样的，不过它只针对代理服务器缓存而言；
- `no-cache`：告诉浏览器或代理服务器不能使用缓存的响应，它必须向服务器发送一个请求并等待服务器返回一个新的响应。服务器接收到请求，然后判断资源是否变更，有变更返回新内容，否则返回304。实际上 `Cache-Control: no-cache` 是会被缓存的，只不过每次在向客户端（浏览器）提供响应数据时，缓存都要向服务器评估缓存响应的有效性；
- `no-store`：直接禁止游览器缓存数据，每次用户请求该资源，都会向服务器发送一个请求，每次都会下载完整的资源(禁止一切缓存，这个是响应不被缓存的意思)。
- `public`：可以被所有的用户缓存，包括终端用户和CDN等中间代理服务器。
- `private`：只能被终端用户的浏览器缓存，不允许CDN等中继缓存服务器对其缓存。

协商缓存是指浏览器在加载资源之前，先与服务器进行协商，以确定是否需要更新本地缓存中的资源。 协商缓存可以通过以下两种方式实现：
- `Last-Modified`：`Last-Modified` 头指示了资源的最后修改时间。 浏览器会将本地缓存中资源的最后修改时间与服务器返回的 `Last-Modified` 头进行比较，如果两者一致，则表示资源未更新，浏览器可以使用本地缓存中的资源。
- `ETag`：`ETag` 是一个唯一标识符，用于标识资源的版本。 浏览器会将本地缓存中资源的 `ETag` 头与服务器返回的 `ETag` 头进行比较，如果两者一致，则表示资源未更新，浏览器可以使用本地缓存中的资源。

### Last-Modifed/If-Modified-Since

> Last-Modifed，服务器向浏览器发送最后的修改时间

> If-Modified-Since，当资源过期时（浏览器判断Cache-Control标识的max-age过期），发现响应头具有Last-Modified声明，则再次向服务器请求时带上头if-modified-since，表示请求时间。服务器收到请求后发现有if-modified-since则与被请求资源的最后修改时间进行对比（Last-Modified）,若最后修改时间较新（大），说明资源又被改过，则返回最新资源，HTTP 200 OK;若最后修改时间较旧（小），说明资源无新修改，响应HTTP 304 走缓存。

### Etag/If-None-Match（http1.1）

> Etag是属于HTTP 1.1属性，它是由服务器（Apache或者其他工具）生成返回给前端，用来帮助服务器控制Web端的缓存验证。
Apache中，ETag的值，默认是对文件的索引节（INode），大小（Size）和最后修改时间（MTime）进行Hash后得到的。

> 当资源过期时，浏览器发现响应头里有Etag,则再次像服务器请求时带上请求头if-none-match(值是Etag的值)。服务器收到请求进行比对，决定返回200或304。

## 不缓存

### 1. no-store

以上是浏览器缓存文件的方式，其中提到强制缓存的 `Cache-control` 的指令 `no-store` ，作用是不存储有关客户端请求或服务器响应的任何内容，即不使用任何缓存。

需要注意， `Cache-Control` 是通用消息头字段，既可以用于请求头，也可以用于响应头。

### 2. 增加版本号

这种方法不需要依赖服务端，纯前端便可实现。该方法流行于前端工程化诞生之前，弊端是需要手动增加版本号，人为干预较多。

```html
<script type="text/javascript" src="../js/jquery.min.js?version=1.7.2" ></script>
```

### 3. 使用随机数

既然在文件后面添加指纹可以让浏览器重新获取资源，那么我们可以在后面拼接随机数或者时间戳，这样也可以达到相同的目的，还省去了手动更改版本号的步骤。

具体来说，可以在index.html增加一段脚本，用来动态生成一个script标签，并引入静态资源，拼接时间戳。

```js
var script = document.createElement("script");
script.src = "/resource/options/myjs.js?randomId=" + new Date().getTime();
document.body.appendChild(script);
```

这样浏览器每次刷新后，便会动态生成一个包含时间戳的静态资源。浏览器发现文件名有更改，会重新获取静态资源，达到了不缓存文件的目的。

### 4. 使用HTML禁用缓存
HTML也可以禁用缓存， 即在页面的head标签中加入meta标签。例：

```html
<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate"/>
```

说明：虽能禁用缓存，但只有部分浏览器支持，而且由于代理不解析HTML文档，故代理服务器也不支持这种方式。该方法不适用于特定文件不缓存的要求。

## Ref

- [如何让浏览器不缓存文件-腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/2077233)
- [HTTP 头部字段 Cache Control max-age = 0 和 no-cache 的区别-腾讯云开发者社区-腾讯云](https://cloud.tencent.com/developer/article/1891859)
- [cache-control no-cache no-store 区别-掘金](https://juejin.cn/s/cache-control%20no-cache%20no-store%20%E5%8C%BA%E5%88%AB)
- [http面试必会的：强制缓存和协商缓存 - 掘金](https://juejin.cn/post/6844903838768431118)

