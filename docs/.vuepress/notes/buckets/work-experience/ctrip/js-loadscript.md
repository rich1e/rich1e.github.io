# JS 异步加载

最近在做页面性能优化，发现项目的 `index.template.html` 文件中引入了多个外部 JS 脚本，且写法还不一样。大致可归为以下几类：

- document.wirte
- 页面静态 `<script>` 标签
- 动态创建 `<script>` 标签

以上几种方式都可以达到载入外部 JS 脚本的目的，但代码的可读性变差了，维护成本也提高很多。所以首先想到，要杜绝多种引入方法，让逻辑和流程变的清晰。

## document.wirte

这个方式比较简单粗暴。直接操作文档流，将内容输出页面。如果时机不正确，会导致页面空白。所以 pass。

弊端：

- 在非loading阶段调用document.write会清除已加载的页面；
- document.write不能够在XHTML中使用；
- 嵌入script中的document.write不能给任意节点添加子节点，因为它是随着DOM的构建执行的；
- 利用document.write写入HTML字符串流并不是一个好方法，它有违DOM操作的概念；
- 利用document.write添加script加载外部脚本时，浏览器的HTML解析会被script的加载所阻塞；

PS：使用不当document.write不仅会影响页面的性能，还容易造成各种bug。

## 页面静态 `<script>` 标签

如果是已知确定的引入，那么这个方式最简单高效。不过建议加上 `defer` 属性，使 JS 脚步按顺序加载执行。

defer （HTML 4，异步待页面解析完毕之后执行）

对于defer，我们可以认为是将外链的js放在了页面底部。js的加载不会阻塞页面的渲染和资源的加载。不过defer会按照原本的js的顺序执行，所以如果前后有依赖关系的js可以放心使用。

async （HTML 5，异步立即执行）

和defer一样，会等待的资源不会阻塞其余资源的加载，也不会影响页面的加载。但是有一点需要注意下，在有async的情况下，js一旦下载好了就会执行，所以很有可能不是按照原本的顺序来执行的。如果js前后有依赖性，用async，就很有可能出错。

## 动态创建 `<script>` 标签

这是已知较灵活的一种方式，而且是无侵入的。基本能满足各类业务需求和线上场景。

## 总结

减少 JavaScript 对性能的影响有以下几种方法：

- 将所有的`<script>`标签放到页面底部，也就是 `</body>`闭合标签之前，这能确保在脚本执行前页面已经完成了渲染。
- 尽可能地合并脚本。页面中的`<script>`标签越少，加载也就越快，响应也越迅速。无论是外链脚本还是内嵌脚本都是如此。
- 采用无阻塞下载 JavaScript 脚本的方法：
  - 使用`<script>`标签的 defer 属性（仅适用于 IE 和 Firefox 3.5 以上版本）；
  - 使用动态创建的`<script>`元素来下载并执行代码；
  - 使用 XHR 对象下载 JavaScript 代码并注入页面中。

## 附录

### 附录 A：

```
function loadScript(url, callback){
    var script = document.createElement ("script")
    script.type = "text/javascript";
    if (script.readyState){ //IE
        script.onreadystatechange = function(){
            if (script.readyState == "loaded" || script.readyState == "complete"){
                script.onreadystatechange = null;
                callback();
            }
        };
    } else { //Others
        script.onload = function(){
            callback();
        };
    }
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
}
```

### 附录 B：

http://levy.work/2017-01-25-script-defer-and-async/
http://www.html5jscss.com/js_async.html
https://segmentfault.com/q/1010000000640869
http://web.jobbole.com/83288/
http://echizen.github.io/tech/2017/04-22-script-exec
https://www.ibm.com/developerworks/cn/web/1308_caiys_jsload/index.html
https://www.jianshu.com/p/17dc82bf08f1
